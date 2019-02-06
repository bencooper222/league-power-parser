parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({5:[function(require,module,exports) {
module.exports={PLAY_PERCENT:"p",WIN_PERCENT:"w",POWER:"r",NAME:"n"};
},{}],3:[function(require,module,exports) {
"use strict";var e=require("../../defaultKeyNames.json"),n=r(e);function r(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n.default=e,n}var o=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Number(e.replace("%","")):Number(e)},t=function(e){return Math.round(100*e)/100},a=function(e,n){return n*(e-50)*10},l=function(e){console.log("Rank | Name | Win% | Play% | Power");for(var r=0;r<e.length;r++)e[r][n.WIN_PERCENT]=t(e[r][n.WIN_PERCENT]).toString(),e[r][n.PLAY_PERCENT]=t(e[r][n.PLAY_PERCENT]).toString(),e[r][n.POWER]=t(e[r][n.POWER]).toString(),console.log(r+1+" | "+e[r][n.NAME]+" | "+e[r][n.WIN_PERCENT]+"% | "+e[r][n.PLAY_PERCENT]+"% | "+e[r][n.POWER]);console.log("Rank | Name | Win% | Play% | Power")},u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://power.benc.me";window.open(n+"/leaguepower.html?data="+JSON.stringify(e.slice(0,9)),"_blank")};module.exports={defaultKeyNames:n,parsePercent:o,roundToDecimal:t,calculatePower:a,displayResults:l,openWebpage:u};
},{"../../defaultKeyNames.json":5}],1:[function(require,module,exports) {
"use strict";var e=require("./common.js");function t(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){for(var a=document.getElementById("table-1").rows,n=[],r=function(r){var N,u,s=a[r].cells,l=function e(t){var a=Array.from(t.childNodes).filter(function(e){return"#text"!==e.nodeName});return 0===a.length?t:1===a.length?e(a[0]):2===a.length?a[1]:void 0}(s[1]).innerHTML,E=(0,e.parsePercent)(s[3].childNodes[1].innerHTML,!0),f=(0,e.parsePercent)(s[4].innerHTML,!0),d=n.findIndex(function(e){return e.name===l});-1===d?n.push((t(N={},e.defaultKeyNames.NAME,l),t(N,e.defaultKeyNames.WIN_PERCENT,E),t(N,e.defaultKeyNames.PLAY_PERCENT,f),t(N,e.defaultKeyNames.POWER,0),t(N,"others",[]),N)):n[d].others.push((t(u={},e.defaultKeyNames.WIN_PERCENT,E),t(u,e.defaultKeyNames.PLAY_PERCENT,f),u))},N=2;N<a.length;N++)r(N);n.forEach(function(t){var a=0;if(a+=(t[e.defaultKeyNames.WIN_PERCENT]-50)*t[e.defaultKeyNames.PLAY_PERCENT],null!=t.others){var n=0,r=t[e.defaultKeyNames.PLAY_PERCENT];t.others.forEach(function(n){a+=(n[e.defaultKeyNames.WIN_PERCENT]-50)*n[e.defaultKeyNames.PLAY_PERCENT],t[e.defaultKeyNames.PLAY_PERCENT]+=n[e.defaultKeyNames.PLAY_PERCENT]}),n=t[e.defaultKeyNames.WIN_PERCENT]*r/t[e.defaultKeyNames.PLAY_PERCENT],n+=t.others.reduce(function(a,n){return a+n[e.defaultKeyNames.WIN_PERCENT]*n[e.defaultKeyNames.PLAY_PERCENT]/t[e.defaultKeyNames.PLAY_PERCENT]},0),t[e.defaultKeyNames.WIN_PERCENT]=n,delete t.others}t[e.defaultKeyNames.POWER]=10*a}),n.sort(function(e,t){return t.power-e.power}),(0,e.openWebpage)(n),(0,e.displayResults)(n)}();
},{"./common.js":3}]},{},[1], null)