(function () {var a={},c={PLAY_PERCENT:"playPercent",WIN_PERCENT:"winPercent",POWER:"power",NAME:"name"},d=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Number(e.replace("%","")):Number(e)},b=function(e){return Math.round(100*e)/100},e=function(e,r){return r*(e-50)*10},f=function(e){console.log("Rank | Name | Win% | Play% | Power");for(var r=0;r<e.length;r++)e[r].winPercent=b(e[r].winPercent).toString(),e[r].playPercent=b(e[r].playPercent).toString(),e[r].power=b(e[r].power).toString(),console.log(r+1+" | "+e[r].name+" | "+e[r].winPercent+"% | "+e[r].playPercent+"% | "+e[r].power);console.log("Rank | Name | Win% | Play% | Power")},g=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://benc.me";window.open(r+"/leaguepower.html?data="+JSON.stringify(e.slice(0,9)),"_blank")};a={parsePercent:d,roundToDecimal:b,calculatePower:e,displayResults:f,openWebpage:g,defaultKeyNames:c};(function(){for(var e=document.getElementById("table-1").rows,n=[],r=function(r){var t=e[r].cells,c=function e(n){var r=Array.from(n.childNodes).filter(function(e){return"#text"!==e.nodeName});return 0===r.length?n:1===r.length?e(r[0]):2===r.length?r[1]:void 0}(t[1]).innerHTML,o=a.parsePercent(t[3].childNodes[1].innerHTML,!0),i=a.parsePercent(t[4].innerHTML,!0),l=n.findIndex(function(e){return e.name===c});-1===l?n.push({name:c,winPercent:o,playPercent:i}):(null==n[l].others&&(n[l].others=[]),n[l].others.push({winPercent:o,playPercent:i}))},t=2;t<e.length;t++)r(t);n.forEach(function(e){var n=0;if(n+=(e.winPercent-50)*e.playPercent,null!=e.others){var r=0,t=e.playPercent;e.others.forEach(function(r){n+=(r.winPercent-50)*r.playPercent,e.playPercent+=r.playPercent}),r=e.winPercent*t/e.playPercent,r+=e.others.reduce(function(n,r){return n+r.winPercent*r.playPercent/e.playPercent},0),e.winPercent=r,delete e.others}e.power=10*n}),n.sort(function(e,n){return n.power-e.power}),a.openWebpage(n),a.displayResults(n)})();})();