// @ts-ignore
import defaultKeyNames from '../../defaultKeyNames';
import sha1 from 'sha1';

export const parsePercent = (percentString, replacePercent = false) => {
  const percent = replacePercent
    ? Number(percentString.replace('%', ''))
    : Number(percentString);

  return percent;
  // console.log('num', num)
  // if (num > 1) {
  //   return num / 100;
  // } else {
  //   return parseFloat(percentString);
  // }
  // return num;
};

export const roundToDecimal = value => Math.round(value * 100) / 100;

//state win and play percent in terms of 100>num>1
export const calculatePower = (winPercent, playPercent) => {
  return 10 * (playPercent * (winPercent - 50));
};

export const displayResults = championData => {
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

export const openWebpage = async (
  championData,
  page = 'https://power.benc.me',
) => {
  const NUM_CHAMPS = 30;
  const STORAGE_URL = `https://kvdb.io/${defaultKeyNames.KEYVAL}`;

  const json = championData.slice(0, NUM_CHAMPS);

  const jsonString = JSON.stringify(json);
  const hash = sha1(jsonString);
  console.log(hash);
  await fetch(`${STORAGE_URL}/${hash}`, {
    method: 'POST',
    body: jsonString,
  });

  window.open(`${page}/?s=${hash}`, '_blank');
};
