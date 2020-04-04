import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults,
} from './common.js';

import defaultKeyNames from '../../defaultKeyNames';

(async () => {
  const downInterval = 35;
  // prepare site by force loading table
  await new Promise(res => {
    let oldLen = document.getElementsByClassName('rt-tr-group').length,
      newLen = 0,
      attempts = 0;

    const interval = setInterval(() => {
      window.scrollTo(0, document.body.scrollHeight);
      oldLen = newLen;
      newLen = document.getElementsByClassName('rt-tr-group').length;

      const LIST_LENGTH = 174; // loosely update with length of u.gg list every so often
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
  const tableNodes = Array.from(
    document.getElementsByClassName('rt-tbody')[0].childNodes,
  );
  const champDataObject = {};

  for (let i = 0; i < tableNodes.length; i++) {
    const row = tableNodes[i];

    const rowInfo = row.childNodes[0];
    const name = rowInfo.childNodes[2].getElementsByClassName(
      'champion-name',
    )[0].innerHTML;

    const played = Number(
      rowInfo.childNodes[8]
        .getElementsByTagName('span')[0]
        .innerHTML.replace(',', '')
        .replace(',', ''), // there's only going to be max two commas...
    );

    const winPercent = parsePercent(
      rowInfo.childNodes[4].getElementsByTagName('b')[0].innerHTML,
      true,
    );

    const banPercent = parsePercent(
      rowInfo.childNodes[6].getElementsByTagName('span')[0].innerHTML,
      true,
    );

    if (champDataObject[name] == null) {
      champDataObject[name] = {
        played,
        won: played * winPercent,
      };
    } else {
      champDataObject[name].played += played;
      champDataObject[name].won += played * winPercent;
    }
  }

  const totalGames = Object.values(champDataObject).reduce(
    (acc, { played }) => played + acc,
    0,
  );

  // manipulate data into proper format
  const championDataArray = Object.keys(champDataObject)
    .reduce((acc, champName) => {
      const { won, played } = champDataObject[champName];

      return acc.concat([
        Array.from({
          [defaultKeyNames.WIN_PERCENT]: won / played,
          [defaultKeyNames.PLAY_PERCENT]: (100 * played) / totalGames,
          [defaultKeyNames.POWER]: calculatePower(
            won / played,
            (100 * played) / totalGames,
          ),
          [defaultKeyNames.NAME]: champName,
          length: 4, // to allow for arrayification
        }),
      ]);
    }, [])
    .sort((a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER]);

  displayResults(championDataArray);

  // const time = new Date();
  // time.setHours(
  //   time.getHours() -
  //     Number(
  //       document
  //         .querySelector('.subtitle > div:nth-child(1) > strong:nth-child(4)')
  //         .innerHTML.replace(/(^\d+)(.+$)/i, '$1'),
  //     ),
  // );
  await openWebpage(championDataArray);
  // {
  // [defaultKeyNames.TIME]: time.valueOf(),
  // [defaultKeyNames.ELO]: document.querySelector('#react-select-9--value-item')
  //   .innerHTML,
  // [defaultKeyNames.QUEUE]: document.querySelector(
  //   '#react-select-10--value-item',
  // ).innerHTML,
  // [defaultKeyNames.PATCH]: document.querySelector(
  //   '#react-select-11--value > div:nth-child(1) > span:nth-child(1)',
  // ).innerHTML,
  // [defaultKeyNames.REGION]: document.querySelector(
  //   '#react-select-12--value-item',
  // ).innerHTML,
  // }); //base64 encode
})();
