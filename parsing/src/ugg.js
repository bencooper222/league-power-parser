import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults,
} from './common.js';
import * as defaultKeyNames from '../../defaultKeyNames.json';

(async () => {
  // prepare site by force loading table
  await new Promise(res => {
    let oldLen = document.getElementsByClassName('rt-tr-group').length,
      newLen = 0,
      attempts = 0;

    const interval = setInterval(() => {
      window.scrollTo(0, document.body.scrollHeight);
      oldLen = newLen;
      newLen = document.getElementsByClassName('rt-tr-group').length;

      const LIST_LENGTH = 167; // loosely update with length of u.gg list every so often
      if (
        (oldLen === newLen && newLen >= LIST_LENGTH) ||
        attempts++ > Math.ceil((2 * LIST_LENGTH) / 50)
      ) {
        clearInterval(interval);
        res();
      }
    }, 20);
  });

  // restore usability asap
  document.body.scrollTop = document.documentElement.scrollTop = 0; // https://www.youtube.com/watch?v=bmMhAMnrJDA

  // gather data
  const champDataObject = Array.from(
    document.getElementsByClassName('rt-tbody')[0].childNodes,
  ).reduce((champData, row) => {
    const rowInfo = row.childNodes[0];
    const name = rowInfo.childNodes[2].getElementsByClassName(
      'champion-name',
    )[0].innerHTML;

    const gamesPlayed = Number(
      rowInfo.childNodes[8]
        // @ts-ignore
        .getElementsByTagName('span')[0]
        .innerHTML.replace(',', '')
        .replace(',', ''), // there's only going to be max two commas...
    );
    // console.log(gamesPlayed);
    const winPercent = parsePercent(
      // @ts-ignore
      rowInfo.childNodes[4].getElementsByTagName('b')[0].innerHTML,
      true,
    );

    if (champData[name] == null) {
      champData[name] = {
        played: gamesPlayed,
        won: gamesPlayed * winPercent,
      };
    } else {
      champData[name].played += gamesPlayed;
      champData[name].won += gamesPlayed * winPercent;
    }
    return champData;
  }, {});

  const totalGames = Object.keys(champDataObject).reduce(
    (acc, champName) => champDataObject[champName].played + acc,
    0,
  );

  // manipulate data into proper format
  const championDataArray = Object.keys(champDataObject)
    .reduce((acc, champName) => {
      const { won, played } = champDataObject[champName];

      return acc.concat({
        [defaultKeyNames.WIN_PERCENT]: won / played,
        [defaultKeyNames.PLAY_PERCENT]: (100 * played) / totalGames,
        [defaultKeyNames.POWER]: calculatePower(
          won / played,
          (100 * played) / totalGames,
        ),
        [defaultKeyNames.NAME]: champName,
      });
    }, [])
    .sort((a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER]);

  displayResults(championDataArray);

  const time = new Date();
  time.setHours(
    time.getHours() -
      Number(
        document
          .querySelector('.subtitle > div:nth-child(1) > strong:nth-child(4)')
          .innerHTML.replace(/(^\d+)(.+$)/i, '$1'),
      ),
  );
  openWebpage(championDataArray, true, {
    [defaultKeyNames.TIME]: time.valueOf(),
    [defaultKeyNames.ELO]: document.querySelector('#react-select-9--value-item')
      .innerHTML,
    [defaultKeyNames.QUEUE]: document.querySelector(
      '#react-select-10--value-item',
    ).innerHTML,
    [defaultKeyNames.PATCH]: document.querySelector(
      '#react-select-11--value > div:nth-child(1) > span:nth-child(1)',
    ).innerHTML,
    [defaultKeyNames.REGION]: document.querySelector(
      '#react-select-12--value-item',
    ).innerHTML,
  }); //base64 encode
})();
