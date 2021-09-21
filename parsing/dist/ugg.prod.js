(function () {var g={};var f={};var b={KEYVAL:"NEjFQLMGv57omxxph5uoht",PLAY_PERCENT:0,WIN_PERCENT:1,POWER:2,NAME:3,CONFIDENCE_INTERVAL_LOWER:4,CONFIDENCE_INTERVAL_UPPER:5,ELO:"e",REGION:"g",PATCH:"h",TIME:"l",QUEUE:"q"};var j,w=f&&f.__awaiter||function(e,r,t,a){return new(t||(t=Promise))(function(o,n){function i(e){try{s(a.next(e))}catch(r){n(r)}}function $(e){try{s(a.throw(e))}catch(r){n(r)}}function s(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(i,$)}s((a=a.apply(e,r||[])).next())})},x=f&&f.__generator||function(e,r){var t,a,o,n,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return n={next:$(0),throw:$(1),return:$(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function $(n){return function($){return function(n){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,a&&(o=2&n[0]?a.return:n[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return i.label++,{value:n[1],done:!1};case 5:i.label++,a=n[1],n=[0];continue;case 7:n=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){i=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){i.label=n[1];break}if(6===n[0]&&i.label<o[1]){i.label=o[1],o=n;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(n);break}o[2]&&i.ops.pop(),i.trys.pop();continue;}n=r.call(e,i)}catch($){n=[6,$],a=0}finally{t=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,$])}}},k=f&&f.__classPrivateFieldGet||function(e,r,t,a){if("a"===t&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof r?e!==r||!a:!r.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?a:"a"===t?a.call(e):a?a.value:r.get(e)},z=f&&f.__classPrivateFieldSet||function(e,r,t,a,o){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof r?e!==r||!o:!r.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?o.call(e,t):o?o.value=t:r.set(e,t),t},q=function(e,r){return void 0===r&&(r=!1),r?Number(e.replace("%","")):Number(e)};f.parsePercent=q;var E=function(e){return Math.round(100*e)/100};f.roundToDecimal=E;var A=function(e,r){return r*(e-50)*10};f.calculatePower=A;var B=function(e){var r=e.map(function(e){return{"Champ Name":e[b.NAME],"Win Percent":e[b.WIN_PERCENT],"Play Percent":e[b.PLAY_PERCENT],Power:e[b.POWER],"95% CI Lower Bound":e[b.CONFIDENCE_INTERVAL_LOWER],"95% CI Upper Bound":e[b.CONFIDENCE_INTERVAL_UPPER]}});console.table(r)};f.displayResults=B;var F=function(e){return w(void 0,void 0,void 0,function(){var r,t,a;return x(this,function(o){switch(o.label){case 0:return r=new TextEncoder().encode(e),[4,crypto.subtle.digest("SHA-1",r)];case 1:return t=o.sent(),a=Array.from(new Uint8Array(t)),[2,a.map(function(e){return e.toString(16).padStart(2,"0")}).join("")];}})})},C=function(e,r,t,a,o,n){return void 0===r&&(r=""),void 0===t&&(t=""),void 0===a&&(a=""),void 0===o&&(o=""),void 0===n&&(n="https://power.benc.me"),w(void 0,void 0,void 0,function(){var i,$,s,c,u;return x(this,function(l){switch(l.label){case 0:return 30,i="https://kvdb.io/"+b.KEYVAL,$="v2",s={datetime:r,patch:t,queue:a,elo:o,champions:e.slice(0,30)},c=JSON.stringify(s),[4,F(c)];case 1:return u=l.sent(),[4,fetch(i+"/"+$+"-"+u,{method:"POST",body:c})];case 2:return l.sent(),window.open(n+"/?s="+$+"-"+u,"_blank"),[2];}})})};f.openWebpage=C;var D=function(){function e(){j.set(this,void 0)}return e.prototype.start=function(){if(null!=k(this,j,"f"))throw new Error("already started");z(this,j,Date.now(),"f")},e.prototype.stop=function(){if(null==k(this,j,"f"))throw new Error("never started");var e=Date.now()-k(this,j,"f");return z(this,j,void 0,"f"),e},e.prototype.clear=function(){stop()},e}();f.Timer=D,j=new WeakMap;var G=g&&g.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,a){function l(e){try{i(n.next(e))}catch(t){a(t)}}function c(e){try{i(n.throw(e))}catch(t){a(t)}}function i(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r(function(e){e(t)})).then(l,c)}i((n=n.apply(e,t||[])).next())})},H=g&&g.__generator||function(e,t){var r,n,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,n=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=(o=l.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue;}a=t.call(e,l)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};G(void 0,void 0,void 0,function(){var e,t,r,n,o,a,l,c,i,s,u,y,d,$,p,m;return H(this,function(v){switch(v.label){case 0:return(e=new D).start(),[4,new Promise(function(e){var t=document.getElementsByClassName("rt-tr-group").length,r=0,n=0,o=setInterval(function(){window.scrollTo(0,document.body.scrollHeight),t=r,r=document.getElementsByClassName("rt-tr-group").length,(t===r&&r>=234||n++>Math.ceil(9.36))&&(clearInterval(o),e())},35)})];case 1:for(v.sent(),document.body.scrollTop=document.documentElement.scrollTop=0,t=Array.from(document.getElementsByClassName("rt-tbody")[0].childNodes),r={},n=0;n<t.length;n++)o=t[n],a=o.childNodes[0],l=a.childNodes[2].getElementsByClassName("champion-name")[0].innerHTML,c=Number(a.childNodes[8].getElementsByTagName("span")[0].innerHTML.replace(",","").replace(",","")),i=q(a.childNodes[4].getElementsByTagName("b")[0].innerHTML,!0),q(a.childNodes[6].getElementsByTagName("span")[0].innerHTML,!0),null==r[l]?r[l]={played:c,won:c*i}:(r[l].played+=c,r[l].won+=c*i);s=Object.values(r).reduce(function(e,t){return t.played+e},0),u=Object.keys(r).reduce(function(e,t){var n,o=r[t],a=o.won,l=o.played,c=a/l/100,i=Math.pow(c*(1-c)/l,.5),u=c-1.96*i,y=c+1.96*i;return e.concat([Array.from((n={},n[b.WIN_PERCENT]=a/l,n[b.PLAY_PERCENT]=100*l/s,n[b.POWER]=A(a/l,100*l/s),n[b.NAME]=t,n[b.CONFIDENCE_INTERVAL_LOWER]=u,n[b.CONFIDENCE_INTERVAL_UPPER]=y,n.length=6,n))])},[]).sort(function(e,t){return t[b.POWER]-e[b.POWER]}),B(u),y=new Date,d=y.toDateString()+" "+y.toTimeString(),$="?",p="?",m="?";try{$=document.querySelector("h1.tier-list > span:nth-child(1)").innerHTML.split(" ").slice(-1)[0]}catch(h){console.error("Couldn't parse patch")}try{p=document.querySelector("span.queue-type > strong:nth-child(1)").innerHTML}catch(h){console.error("Couldn't parse queue")}try{m=document.querySelector("div.filter-select_rank:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(2)").innerHTML}catch(h){console.error("Couldn't parse rank/elo")}return console.log("Took: "+e.stop()+"ms to calculate."),[4,C(u,d,$,p,m)];case 2:return v.sent(),[2];}})});if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=g}else if(typeof define==="function"&&define.amd){define(function(){return g})}})();