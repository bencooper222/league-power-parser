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
    championData[champIndex].winPercent = roundToDecimal(
      championData[champIndex].winPercent,
    ).toString();
    if(champIndex ===0 ) {
      const keys = Object.keys(championData[champIndex]);
      console.log(keys);// console.log(championData[champIndex][defaultKeyNames.playPercent])
      console.log(defaultKeyNames.PLAY_PERCENT === keys[1] );
      console.log(championData[champIndex][defaultKeyNames.PLAY_PERCENT])
    }
    championData[champIndex][defaultKeyNames.PLAY_PERCENT] = roundToDecimal(
      championData[champIndex][defaultKeyNames.PLAY_PERCENT],
    ).toString();
    championData[champIndex].power = roundToDecimal(
      championData[champIndex].power,
    ).toString();

    console.log(
      `${champIndex + 1} | ${championData[champIndex].name} | ${
        championData[champIndex].winPercent
      }%` +
        ` | ${championData[champIndex][defaultKeyNames.PLAY_PERCENT]}%` +
        ` | ${championData[champIndex].power}`,
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
  parsePercent,
  roundToDecimal,
  calculatePower,
  displayResults,
  openWebpage,
  defaultKeyNames,
};
