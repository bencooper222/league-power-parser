import defaultKeyNames from '../../defaultKeyNames';

const datetimeContainer = document.getElementById('datetime');
const patchContainer = document.getElementById('patch');
const queueContainer = document.getElementById('queue');
const eloContainer = document.getElementById('elo');

const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

// maybe import from common.js someday
const roundToDecimal = (string, decimals) => {
  return parseFloat(parseFloat(string).toFixed(decimals));
};

const setExtraInfo = (datetime = '', patch = '', queue = '', elo = '') => {
  console.log(elo);
  if (datetime !== '') datetimeContainer.innerHTML = `Datetime: ${datetime}`;
  if (patch !== '') patchContainer.innerHTML = `Patch: ${patch}`;
  if (queue !== '') queueContainer.innerHTML = `Queue: ${queue}`;
  if (elo !== '') eloContainer.innerHTML = `Elo: ${elo}`;
};

const drawCanvas = champions => {
  const canvas = document.getElementsByTagName('canvas')[0];
  const toBeHeight = document.getElementById('champs').offsetHeight;
  console.log('toBeHeight', toBeHeight);
  canvas.height = toBeHeight;

  const cellHeight = document.getElementsByTagName('td')[0].offsetHeight;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#FF0000';

  let drawHeight = cellHeight / 2 + cellHeight;
  for (let i = 0; i < champions.length; i++) {
    ctx.fillRect(0, drawHeight, canvas.width, 1);
    drawHeight += cellHeight + 0.35;
    console.log(drawHeight);
  }
};

(async () => {
  let data;
  const sParam = getParameterByName('s');

  if (sParam != null) {
    const split = sParam.split('-');
    let version = '';
    if (split.length > 1) [version] = split;

    const fetched = await (
      await fetch(`https://kvdb.io/${defaultKeyNames.KEYVAL}/${sParam}`)
    )
      .json()
      .catch(err => void console.error(err));

    console.log(fetched);
    data = { d: null };

    if (version === 'v1') {
      const { datetime, patch, queue, champions } = fetched;
      setExtraInfo(datetime, patch, queue);
      data.d = champions;
    } else if (version === 'v2') {
      const { datetime, patch, queue, champions, elo } = fetched;
      setExtraInfo(datetime, patch, queue, elo);
      data.d = champions;
    } else if (version === '') {
      data.d = fetched;
    }
  } else {
    data = JSON.parse(getParameterByName('data')); // data for JSON, d for base64
    data = data == null ? JSON.parse(atob(getParameterByName('d'))) : data;
  }
  const table = document.getElementById('champs');
  console.table(data.d);

  data.d.forEach(champ => {
    const row = table.insertRow(-1);
    row.insertCell(-1).innerHTML = champ[defaultKeyNames.NAME];

    row.insertCell(-1).innerHTML = `${roundToDecimal(
      champ[defaultKeyNames.WIN_PERCENT],
      2,
    )}%`;

    row.insertCell(-1).innerHTML = `${roundToDecimal(
      champ[defaultKeyNames.PLAY_PERCENT],
      2,
    )}%`;

    row.insertCell(-1).innerHTML = roundToDecimal(
      champ[defaultKeyNames.POWER],
      2,
    );
  });

  drawCanvas(data.d);
})();
