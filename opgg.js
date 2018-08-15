import {
  parsePercent,
  calculatePower,
  displayResults,
  openWebpage,
} from './utility.js';

(() => {
  const table = Array.from(
    document.getElementsByClassName(
      'StatisticsChampionTable sortable tablesorter tablesorter-default',
    )[0].rows,
  );
  table.shift();

  const results = [];
  table.forEach(row => {
    const cells = row.cells;
    results.push({
      name: cells[2].childNodes[1].innerHTML,
      winPercent: parsePercent(cells[3].getAttribute('data-value')),
      playedGames: Number(cells[4].innerHTML.replace(/,/g, '')),
    });
  });

  const totalGamesPlayed = results.reduce((acc, cur) => {
    return acc + cur.playedGames;
  }, 0);

  results.map(champ => {
    const withNewProps = champ;
    withNewProps.playPercent = (100 * champ.playedGames) / totalGamesPlayed;
    withNewProps.power = calculatePower(
      withNewProps.winPercent,
      withNewProps.playPercent,
    );
    return withNewProps;
  });

  results.sort((a, b) => b.power - a.power);
  displayResults(results);
  openWebpage(results);
})();
