//@ts-check
import { parsePercent, openWebpage, displayResults } from './common.js';
(function() {
  // @ts-ignore
  const tableRows = document.getElementById('table-1').rows;

  const getDeepestChild = obj => {
    // gets the span with the champ name in it
    const children = Array.from(obj.childNodes).filter(
      node => node.nodeName !== '#text',
    );
    if (children.length === 0) {
      return obj;
    } else if (children.length === 1) {
      return getDeepestChild(children[0]);
    } else if (children.length === 2) {
      return children[1];
    }
  };

  const championData = [];
  for (let rowIndex = 2; rowIndex < tableRows.length; rowIndex++) {
    const tableCells = tableRows[rowIndex].cells;
    const champName = getDeepestChild(tableCells[1]).innerHTML;

    const winPercent = parsePercent(
      tableCells[3].childNodes[1].innerHTML,
      true,
    );
    const playPercent = parsePercent(tableCells[4].innerHTML, true);

    const champExistIndex = championData.findIndex(
      champ => champ.name === champName,
    );
    //   console.log(champExistIndex);
    if (champExistIndex === -1) {
      championData.push({
        name: champName,
        winPercent,
        playPercent,
        power: 0,
        others: []
      });
    } else {

      championData[champExistIndex].others.push({
        winPercent,
        playPercent,
      });
    }
  }

  championData.forEach(champ => {
    let power = 0;
    power += (champ.winPercent - 50) * champ.playPercent; // first seen role power
    if (champ.others != null) {
      let champAggregateWinPercent = 0;
      const originalRolePlayPercent = champ.playPercent;

      champ.others.forEach(playDataPairs => {
        power += (playDataPairs.winPercent - 50) * playDataPairs.playPercent;
        champ.playPercent += playDataPairs.playPercent;
      });

      champAggregateWinPercent =
        (champ.winPercent * originalRolePlayPercent) / champ.playPercent; // original roles winPercent

      champAggregateWinPercent += champ.others.reduce((acc, pair) => {
        return acc + (pair.winPercent * pair.playPercent) / champ.playPercent;
      }, 0);
      champ.winPercent = champAggregateWinPercent;
      delete champ.others;
    }
    champ.power = power * 10;
  });

  championData.sort((a, b) => b.power - a.power);

  openWebpage(championData);
  displayResults(championData);
})();
