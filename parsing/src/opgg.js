import {
  parsePercent,
  calculatePower,
  displayResults,
  openWebpage,
  // defaultKeyNames,
} from './common.js';
import * as defaultKeyNames from '../../defaultKeyNames.json';

(() => {
  const table = Array.from(
    document.getElementsByClassName(
      'StatisticsChampionTable sortable tablesorter tablesorter-default',
      // @ts-ignore
    )[0].rows,
  );
  table.shift();

  const results = [];
  table.forEach(row => {
    const cells = row.cells;
    results.push({
      [defaultKeyNames.NAME]: cells[2].childNodes[1].innerHTML,
      [defaultKeyNames.WIN_PERCENT]: parsePercent(
        cells[3].getAttribute('data-value'),
      ),
      playedGames: Number(cells[4].innerHTML.replace(/,/g, '')),
    });
  });

  const totalGamesPlayed = results.reduce((acc, cur) => {
    return acc + cur.playedGames;
  }, 0);

  results.map(champ => {
    const withNewProps = champ;
    withNewProps[defaultKeyNames.PLAY_PERCENT] =
      (100 * champ.playedGames) / totalGamesPlayed;
    withNewProps[defaultKeyNames.POWER] = calculatePower(
      withNewProps[defaultKeyNames.WIN_PERCENT],
      withNewProps[defaultKeyNames.PLAY_PERCENT],
    );
    return withNewProps;
  });

  results.sort((a, b) => b[defaultKeyNames.POWER] - a[defaultKeyNames.POWER]);
  displayResults(results);
  openWebpage(results);
})();
