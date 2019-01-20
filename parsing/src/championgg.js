//@ts-check
import {
  parsePercent,
  openWebpage,
  displayResults,
  defaultKeyNames,
} from './common.js';

(() => {
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
        [defaultKeyNames.NAME]: champName,
        [defaultKeyNames.WIN_PERCENT]: winPercent,
        [defaultKeyNames.PLAY_PERCENT]: playPercent,
        [defaultKeyNames.POWER]: 0,
        others: [],
      });
    } else {
      championData[champExistIndex].others.push({
        [defaultKeyNames.WIN_PERCENT]: winPercent,
        [defaultKeyNames.PLAY_PERCENT]: playPercent,
      });
    }
  }

  championData.forEach(champ => {
    let power = 0;
    power +=
      (champ[defaultKeyNames.WIN_PERCENT] - 50) *
      champ[defaultKeyNames.PLAY_PERCENT]; // first seen role power
    if (champ.others != null) {
      let champAggregateWinPercent = 0;
      const originalRolePlayPercent = champ[defaultKeyNames.PLAY_PERCENT];

      champ.others.forEach(playDataPairs => {
        power +=
          (playDataPairs[defaultKeyNames.WIN_PERCENT] - 50) *
          playDataPairs[defaultKeyNames.PLAY_PERCENT];
        champ[defaultKeyNames.PLAY_PERCENT] +=
          playDataPairs[defaultKeyNames.PLAY_PERCENT];
      });

      champAggregateWinPercent =
        (champ[defaultKeyNames.WIN_PERCENT] * originalRolePlayPercent) /
        champ[defaultKeyNames.PLAY_PERCENT]; // original roles winPercent

      champAggregateWinPercent += champ.others.reduce(
        (acc, pair) =>
          acc +
          (pair[defaultKeyNames.WIN_PERCENT] *
            pair[defaultKeyNames.PLAY_PERCENT]) /
            champ[defaultKeyNames.PLAY_PERCENT],
        0,
      );
      champ[defaultKeyNames.WIN_PERCENT] = champAggregateWinPercent;
      delete champ.others;
    }
    champ[defaultKeyNames.POWER] = power * 10;
  });

  championData.sort((a, b) => b.power - a.power);

  openWebpage(championData);
  displayResults(championData);
})();
