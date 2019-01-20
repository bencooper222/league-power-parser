import { defaultKeyNames } from '.../common.js';
console.log(defaultKeyNames);
const getParameterByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

function roundToDecimal(string, decimals) {
  return parseFloat(parseFloat(string).toFixed(decimals));
}

const data = JSON.parse(getParameterByName('data'));
const table = document.getElementById('champs');

for (let champ of data) {
  const row = table.insertRow(-1);
  row.insertCell(-1).innerHTML = champ.name;
  row.insertCell(-1).innerHTML = roundToDecimal(champ.winPercent, 2) + '%';
  row.insertCell(-1).innerHTML = roundToDecimal(champ.playPercent, 2) + '%';
  row.insertCell(-1).innerHTML = roundToDecimal(champ.power, 2);
}
