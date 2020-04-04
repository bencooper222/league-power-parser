import defaultKeyNames from '../../defaultKeyNames';

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

(async () => {
  let data;
  const sParam = getParameterByName('s');
  if (sParam != null) {
    data = {
      d: await (
        await fetch(`https://kvdb.io/${defaultKeyNames.KEYVAL}/${sParam}`)
      )
        .json()
        .catch(err => void console.error(err)),
    };
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
})();
