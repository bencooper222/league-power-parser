// @ts-ignore
import defaultKeyNames from '../../defaultKeyNames';

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

// I love modern browsers
// from https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
const sha1 = async message => {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-1', msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
};

export const openWebpage = async (
  championData,
  datetime = '',
  patch = '',
  queue = '',
  elo = '',
  page = 'https://power.benc.me',
) => {
  const NUM_CHAMPS = 30;
  const STORAGE_URL = `https://kvdb.io/${defaultKeyNames.KEYVAL}`;
  const PREFIX = 'v2'; // change accordingly

  const json = {
    datetime,
    patch,
    queue,
    elo,
    champions: championData.slice(0, NUM_CHAMPS),
  };

  const jsonString = JSON.stringify(json);
  const hash = await sha1(jsonString);

  await fetch(`${STORAGE_URL}/${PREFIX}-${hash}`, {
    method: 'POST',
    body: jsonString,
  });

  window.open(`${page}/?s=${PREFIX}-${hash}`, '_blank');
};

export class Timer {
  #startTime;

  start() {
    if (this.#startTime != undefined) throw new Error('already started');
    this.#startTime = Date.now();
  }

  stop() {
    if (this.#startTime == undefined) throw new Error('never started');
    const rtn = Date.now() - this.#startTime;

    this.#startTime = undefined;
    return rtn;
  }

  clear() {
    void stop();
  }
}
