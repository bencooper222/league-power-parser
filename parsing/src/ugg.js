import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults,
  Timer,
} from './common.js';

import defaultKeyNames from '../../defaultKeyNames';

(async () => {
  const start = Date.now();

  const downInterval = 30;
  // prepare site by force loading table
  await new Promise(res => {
    let oldLen = document.getElementsByClassName('rt-tr-group').length,
      newLen = 0,
      attempts = 0;

    const interval = setInterval(() => {
      window.scrollTo(0, document.body.scrollHeight);
      oldLen = newLen;
      newLen = document.getElementsByClassName('rt-tr-group').length;

      const LIST_LENGTH = 243; // loosely update with length of u.gg list every so often
      if (
        (oldLen === newLen && newLen >= LIST_LENGTH) ||
        attempts++ > Math.ceil((2 * LIST_LENGTH) / 50)
      ) {
        clearInterval(interval);
        res();
      }
    }, downInterval);
  });

  // restore usability asap
  document.body.scrollTop = document.documentElement.scrollTop = 0; // https://www.youtube.com/watch?v=bmMhAMnrJDA

  // gather data
  const tableNodes = document.getElementsByClassName('rt-tbody')[0].childNodes;
  const champDataObject = {};
  let totalGames = 0;
  for (const row of tableNodes) {
    const rowInfo = row.childNodes[0];
    const name = rowInfo.childNodes[2].getElementsByClassName(
      'champion-name',
    )[0].innerHTML;

    const played = Number(
      rowInfo.childNodes[8]
        .getElementsByTagName('span')[0]
        .innerHTML.l(',', ''),
    );

    const wonGames = parsePercent(
      rowInfo.childNodes[4].getElementsByTagName('b')[0].innerHTML,
      true,
    );

    const bannedGames = parsePercent(
      rowInfo.childNodes[6].getElementsByTagName('span')[0].innerHTML,
      true,
    );

    if (champDataObject[name] == null) {
      champDataObject[name] = {
        played,
        won: played * wonGames,
      };
    } else {
      champDataObject[name].played += played;
      champDataObject[name].won += played * wonGames;
    }
    totalGames += played;
  }

  // manipulate data into proper format
  const champNames = Object.keys(champDataObject);
  const championDataArray = [];

  for (const champName of champNames) {
    const { won, played } = champDataObject[champName];

    const winPercent = won / played / 100;
    const confidenceIntervalDistributionArea = 1.96; // look up in a z-score table
    const stdev = ((winPercent * (1 - winPercent)) / played) ** 0.5;

    const lower = winPercent - stdev * confidenceIntervalDistributionArea;
    const upper = winPercent + stdev * confidenceIntervalDistributionArea;

    championDataArray.push(
      Array.from({
        [defaultKeyNames.WIN_PERCENT]: won / played,
        [defaultKeyNames.PLAY_PERCENT]: (100 * played) / totalGames,
        [defaultKeyNames.POWER]: calculatePower(
          won / played,
          (100 * played) / totalGames,
        ),
        [defaultKeyNames.NAME]: champName,
        [defaultKeyNames.CONFIDENCE_INTERVAL_LOWER]: lower,
        [defaultKeyNames.CONFIDENCE_INTERVAL_UPPER]: upper,
        length: 6, // to allow for arrayification
      }),
    );
  }

  championDataArray.sort(
    (a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER],
  );

  displayResults(championDataArray);

  const date = new Date();
  const datetime = date.toDateString() + ' ' + date.toTimeString();

  let patch = '?',
    queue = '?',
    elo = '?';

  try {
    const rawPatch = document.querySelector('.header-patch').innerHTML;
    const periodIndex = rawPatch.indexOf('.');

    patch = rawPatch.slice(periodIndex - 2);
  } catch (_) {
    console.error("Couldn't parse patch");
  }

  try {
    queue = document.querySelector('span.queue-type > strong:nth-child(1)')
      .innerHTML;
  } catch (_) {
    console.error("Couldn't parse queue");
  }

  try {
    elo = document.querySelector(
      'div.filter-select_rank:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)',
    ).innerHTML;
  } catch (_) {
    console.error("Couldn't parse rank/elo");
  }

  console.log('Took: ' + (Date.now() - start) + 'ms to calculate.');

  await openWebpage(championDataArray, datetime, patch, queue, elo);
})();
