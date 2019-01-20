//@ts-check
const defaultKeyNames = {
  PLAY_PERCENT: 'playPercent',
  WIN_PERCENT: 'winPercent',
  POWER: 'power',
  NAME: 'name',
};

const parsePercent = (percentString, replacePercent = false) => {
  return replacePercent
    ? Number(percentString.replace('%', ''))
    : Number(percentString);
  // console.log('num', num)
  // if (num > 1) {
  //   return num / 100;
  // } else {
  //   return parseFloat(percentString);
  // }
  // return num;
};

const roundToDecimal = value => Math.round(value * 100) / 100;

//state win and play percent in terms of 100>num>1
const calculatePower = (winPercent, playPercent) => {
  return 10 * (playPercent * (winPercent - 50));
};

const displayResults = championData => {
  console.log('Rank | Name | Win% | Play% | Power');
  for (let champIndex = 0; champIndex < championData.length; champIndex++) {
    championData[champIndex][defaultKeyNames.WIN_PERCENT] = roundToDecimal(
      championData[champIndex][defaultKeyNames.WIN_PERCENT],
    ).toString();

    championData[champIndex][defaultKeyNames.PLAY_PERCENT] = roundToDecimal(
      championData[champIndex][defaultKeyNames.PLAY_PERCENT],
    ).toString();

    championData[champIndex][defaultKeyNames.POWER] = roundToDecimal(
      championData[champIndex][defaultKeyNames.POWER],
    ).toString();

    console.log(
      `${champIndex + 1} | ${
        championData[champIndex][defaultKeyNames.NAME]
      } | ${championData[champIndex][defaultKeyNames.WIN_PERCENT]}%` +
        ` | ${championData[champIndex][defaultKeyNames.PLAY_PERCENT]}%` +
        ` | ${championData[champIndex][defaultKeyNames.POWER]}`,
    );
  }
  console.log('Rank | Name | Win% | Play% | Power');
};

const openWebpage = (championData, page = 'https://benc.me') => {
  window.open(
    `${page}/leaguepower.html?data=${JSON.stringify(championData.slice(0, 9))}`,
    '_blank',
  );
};
module.exports = {
  defaultKeyNames,
  parsePercent,
  roundToDecimal,
  calculatePower,
  displayResults,
  openWebpage,
};
