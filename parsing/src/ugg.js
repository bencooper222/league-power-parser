import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults,
} from './common.js';

import * as defaultKeyNames from '../../defaultKeyNames.json';

const objectReduce = require('lodash.reduce');
// import * as lodashReduce from 'lodash.reduce';

(async () => {
  const prepSite = () => {
    return new Promise((res, rej) => {
      let oldLen = document.getElementsByClassName('rt-tr-group').length;
      let newLen = 0;
      let attempts = 0;

      const interval = setInterval(() => {
        window.scrollTo(0, document.body.scrollHeight);
        oldLen = newLen;
        newLen = document.getElementsByClassName('rt-tr-group').length;

        if ((oldLen === newLen && newLen >= 167) || attempts++ > 7) {
          clearInterval(interval);
          res();
        }
      }, 20);
    });
  };

  const getAndScrapeTable = () => {
    const table = Array.from(
      document.getElementsByClassName('rt-tbody')[0].childNodes,
    );

    return table.reduce((champData, row) => {
      const rowInfo = row.childNodes[0];
      let name = rowInfo.childNodes[2].getElementsByClassName(
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
  };

  await prepSite();
  const champDataObject = getAndScrapeTable();

  const totalGames = objectReduce(
    champDataObject,
    (result, value) => {
      return value.played + result;
    },
    0,
  );

  const championDataArray = Object.keys(champDataObject)
    .reduce((acc, champName) => {
      const champ = champDataObject[champName];
      return acc.concat({
        [defaultKeyNames.WIN_PERCENT]: champ.won / champ.played,
        [defaultKeyNames.PLAY_PERCENT]: (100 * champ.played) / totalGames,
        [defaultKeyNames.POWER]: calculatePower(
          champ.won / champ.played,
          (100 * champ.played) / totalGames,
        ),
        [defaultKeyNames.NAME]: champName,
      });
    }, [])
    .sort((a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER]);

  displayResults(championDataArray);
  openWebpage(championDataArray);
  document.body.scrollTop = document.documentElement.scrollTop = 0; // https://www.youtube.com/watch?v=bmMhAMnrJDA
})();
