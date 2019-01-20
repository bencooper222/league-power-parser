//@ts-check
import {
  parsePercent,
  calculatePower,
  openWebpage,
  displayResults,
  defaultKeyNames,
} from './common.js';

const lodashReduce = require('lodash.reduce');

(() => {
  const champData = {};

  const getAndScrapeTable = () => {
    const table = Array.from(
      document.getElementsByClassName('rt-tbody')[0].childNodes,
    );
    table.some(row => {
      const rowInfo = row.childNodes[0];
      let name;
      try {
        // @ts-ignore
        name = rowInfo.childNodes[2].getElementsByTagName('strong')[0]
          .innerHTML;
      } catch (err) {
        return true; // this occurs on the last page with the emptry rows.
        // returning true ends "some"
      }

      // const role = rowInfo.childNodes[1].getElementsByTagName('img')[0].src; // possibly bring back someday
      // console.log(rowInfo.childNodes);

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
    });
  };
  const totalPages = Number(
    document.getElementsByClassName('-totalPages')[0].innerHTML,
  );
  const nextButton = document.getElementsByClassName('-next')[0].childNodes[0];

  for (let i = 0; i < totalPages; i++) {
    getAndScrapeTable();
    // @ts-ignore
    nextButton.click(); // fuck their pagination
  }

  const totalGames = lodashReduce(
    champData,
    (result, value, key) => {
      return value.played + result;
    },
    0,
  );

  const championDataArray = [];
  Object.keys(champData).forEach(champName => {
    const champ = champData[champName];
    championDataArray.push({
      [defaultKeyNames.WIN_PERCENT]: champ.won / champ.played,
      [defaultKeyNames.PLAY_PERCENT]: (100 * champ.played) / totalGames,
      [defaultKeyNames.POWER]: calculatePower(
        champ.won / champ.played,
        (100 * champ.played) / totalGames,
      ),
      [defaultKeyNames.NAME]: champName,
    });
  });

  championDataArray.sort(
    (a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER],
  );

  displayResults(championDataArray);
  openWebpage(championDataArray);

  const backButton = document.getElementsByClassName('-previous')[0]
    .childNodes[0];
  // @ts-ignore
  for (let i = 0; i < totalPages; i++) backButton.click(); // go back to beginning for user use
})();
