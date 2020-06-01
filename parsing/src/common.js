// @ts-ignore
import defaultKeyNames from '../../defaultKeyNames';
import sha1 from 'sha1';

export const parsePercent = (percentString, replacePercent = false) => {
  const percent = replacePercent
    ? Number(percentString.replace('%', ''))
    : Number(percentString);

  return percent;
};

export const roundToDecimal = value => Math.round(value * 100) / 100;

//state win and play percent in terms of 100>num>1
export const calculatePower = (winPercent, playPercent) => {
  return 10 * (playPercent * (winPercent - 50));
};

export const displayResults = championData => {
  const transformed = championData.map(el => {
    return {
      'Champ Name': el[defaultKeyNames.NAME],
      'Win Percent': el[defaultKeyNames.WIN_PERCENT],
      'Play Percent': el[defaultKeyNames.PLAY_PERCENT],
      Power: el[defaultKeyNames.POWER],
      '95% CI Lower Bound': el[defaultKeyNames.CONFIDENCE_INTERVAL_LOWER],
      '95% CI Upper Bound': el[defaultKeyNames.CONFIDENCE_INTERVAL_UPPER],
    };
  });
  console.table(transformed);
};

export const openWebpage = async (
  championData,
  datetime = '',
  patch = '',
  queue = '',
  page = 'https://power.benc.me',
) => {
  const NUM_CHAMPS = 30;
  const STORAGE_URL = `https://kvdb.io/${defaultKeyNames.KEYVAL}`;
  const PREFIX = 'v1'; // change accordingly

  const json = {
    datetime,
    patch,
    queue,
    champions: championData.slice(0, NUM_CHAMPS),
  };

  const jsonString = JSON.stringify(json);
  const hash = sha1(jsonString);

  await fetch(`${STORAGE_URL}/${PREFIX}-${hash}`, {
    method: 'POST',
    body: jsonString,
  });

  window.open(`${page}/?s=${PREFIX}-${hash}`, '_blank');
};
