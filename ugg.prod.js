(function () {var aa=this;var b={},c=function(e){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?Number(e.replace("%","")):Number(e)},a=function(e){return Math.round(100*e)/100},d=function(e,r){return r*(e-50)*10},e=function(e){console.log("Rank | Name | Win% | Play% | Power");for(var r=0;r<e.length;r++)e[r].winPercent=a(e[r].winPercent).toString(),e[r].playPercent=a(e[r].playPercent).toString(),e[r].power=a(e[r].power).toString(),console.log(r+1+" | "+e[r].name+" | "+e[r].winPercent+"% | "+e[r].playPercent+"% | "+e[r].power);console.log("Rank | Name | Win% | Play% | Power")},f=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://benc.me";window.open(r+"/leaguepower.html?data="+JSON.stringify(e.slice(0,9)),"_blank")};b={parsePercent:c,roundToDecimal:a,calculatePower:d,displayResults:e,openWebpage:f};var g=function(){var t={exports:this},r=200,n="Expected a function",e="__lodash_hash_undefined__",o=1,u=2,a=1/0,i=9007199254740991,c="[object Arguments]",f="[object Array]",l="[object Boolean]",s="[object Date]",p="[object Error]",h="[object Function]",v="[object GeneratorFunction]",_="[object Map]",y="[object Number]",b="[object Object]",d="[object RegExp]",g="[object Set]",j="[object String]",w="[object Symbol]",m="[object ArrayBuffer]",O="[object DataView]",A=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,$=/^\w*$/,k=/^\./,S=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,x=/\\(\\)?/g,E=/^\[object .+?Constructor\]$/,F=/^(?:0|[1-9]\d*)$/,M={};M["[object Float32Array]"]=M["[object Float64Array]"]=M["[object Int8Array]"]=M["[object Int16Array]"]=M["[object Int32Array]"]=M["[object Uint8Array]"]=M["[object Uint8ClampedArray]"]=M["[object Uint16Array]"]=M["[object Uint32Array]"]=!0,M[c]=M[f]=M[m]=M[l]=M[O]=M[s]=M[p]=M[h]=M[_]=M[y]=M[b]=M[d]=M[g]=M[j]=M["[object WeakMap]"]=!1;var P="object"==typeof aa&&aa&&aa.Object===Object&&aa,I="object"==typeof self&&self&&self.Object===Object&&self,T=P||I||Function("return this")(),U="object"==typeof this&&this&&!this.nodeType&&this,z=U&&"object"==typeof t&&t&&!t.nodeType&&t,C=z&&z.exports===U&&P.process,L=function(){try{return C&&C.binding("util")}catch(t){}}(),W=L&&L.isTypedArray;function B(t,r,n,e){var o=-1,u=t?t.length:0;for(e&&u&&(n=t[++o]);++o<u;)n=r(n,t[o],o,t);return n}function D(t,r){for(var n=-1,e=t?t.length:0;++n<e;)if(r(t[n],n,t))return!0;return!1}function R(t,r,n,e,o){return o(t,function(t,o,u){n=e?(e=!1,t):r(n,t,o,u)}),n}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function G(t){var r=-1,n=Array(t.size);return t.forEach(function(t,e){n[++r]=[e,t]}),n}function N(t){var r=-1,n=Array(t.size);return t.forEach(function(t){n[++r]=t}),n}var q,H,J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=T["__core-js_shared__"],Z=(q=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",tt=Q.toString,rt=X.hasOwnProperty,nt=X.toString,et=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=T.Symbol,ut=T.Uint8Array,at=X.propertyIsEnumerable,it=K.splice,ct=(H=Object.keys,J=Object,function(t){return H(J(t))}),ft=Vt(T,"DataView"),lt=Vt(T,"Map"),st=Vt(T,"Promise"),pt=Vt(T,"Set"),ht=Vt(T,"WeakMap"),vt=Vt(Object,"create"),_t=Xt(ft),yt=Xt(lt),bt=Xt(st),dt=Xt(pt),gt=Xt(ht),jt=ot?ot.prototype:void 0,wt=jt?jt.valueOf:void 0,mt=jt?jt.toString:void 0;function Ot(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function At(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function $t(t){var r=-1,n=t?t.length:0;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}function kt(t){var r=-1,n=t?t.length:0;for(this.__data__=new $t;++r<n;)this.add(t[r])}function St(t){this.__data__=new At(t)}function xt(t,r){var n=rr(t)||tr(t)?function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e}(t.length,String):[],e=n.length,o=!!e;for(var u in t)!r&&!rt.call(t,u)||o&&("length"==u||Nt(u,e))||n.push(u);return n}function Et(t,r){for(var n=t.length;n--;)if(Zt(t[n][0],r))return n;return-1}Ot.prototype.clear=function(){this.__data__=vt?vt(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return n===e?void 0:n}return rt.call(r,t)?r[t]:void 0},Ot.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:rt.call(r,t)},Ot.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?e:r,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var r=this.__data__,n=Et(r,t);return!(n<0||(n==r.length-1?r.pop():it.call(r,n,1),0))},At.prototype.get=function(t){var r=this.__data__,n=Et(r,t);return n<0?void 0:r[n][1]},At.prototype.has=function(t){return Et(this.__data__,t)>-1},At.prototype.set=function(t,r){var n=this.__data__,e=Et(n,t);return e<0?n.push([t,r]):n[e][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new Ot,map:new(lt||At),string:new Ot}},$t.prototype.delete=function(t){return Rt(this,t).delete(t)},$t.prototype.get=function(t){return Rt(this,t).get(t)},$t.prototype.has=function(t){return Rt(this,t).has(t)},$t.prototype.set=function(t,r){return Rt(this,t).set(t,r),this},kt.prototype.add=kt.prototype.push=function(t){return this.__data__.set(t,e),this},kt.prototype.has=function(t){return this.__data__.has(t)},St.prototype.clear=function(){this.__data__=new At},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,n){var e=this.__data__;if(e instanceof At){var o=e.__data__;if(!lt||o.length<r-1)return o.push([t,n]),this;e=this.__data__=new $t(o)}return e.set(t,n),this};var Ft,Mt,Pt=(Ft=function(t,r){return t&&It(t,r,fr)},function(t,r){if(null==t)return t;if(!nr(t))return Ft(t,r);for(var n=t.length,e=Mt?n:-1,o=Object(t);(Mt?e--:++e<n)&&!1!==r(o[e],e,o););return t}),It=function(t){return function(r,n,e){for(var o=-1,u=Object(r),a=e(r),i=a.length;i--;){var c=a[t?i:++o];if(!1===n(u[c],c,u))break}return r}}();function Tt(t,r){for(var n=0,e=(r=qt(r,t)?[r]:Bt(r)).length;null!=t&&n<e;)t=t[Qt(r[n++])];return n&&n==e?t:void 0}function Ut(t,r){return null!=t&&r in Object(t)}function zt(t,r,n,e,a){return t===r||(null==t||null==r||!ur(t)&&!ar(r)?t!=t&&r!=r:function(t,r,n,e,a,i){var h=rr(t),v=rr(r),A=f,$=f;h||(A=(A=Gt(t))==c?b:A);v||($=($=Gt(r))==c?b:$);var k=A==b&&!V(t),S=$==b&&!V(r),x=A==$;if(x&&!k)return i||(i=new St),h||cr(t)?Dt(t,r,n,e,a,i):function(t,r,n,e,a,i,c){switch(n){case O:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case m:return!(t.byteLength!=r.byteLength||!e(new ut(t),new ut(r)));case l:case s:case y:return Zt(+t,+r);case p:return t.name==r.name&&t.message==r.message;case d:case j:return t==r+"";case _:var f=G;case g:var h=i&u;if(f||(f=N),t.size!=r.size&&!h)return!1;var v=c.get(t);if(v)return v==r;i|=o,c.set(t,r);var b=Dt(f(t),f(r),e,a,i,c);return c.delete(t),b;case w:if(wt)return wt.call(t)==wt.call(r);}return!1}(t,r,A,n,e,a,i);if(!(a&u)){var E=k&&rt.call(t,"__wrapped__"),F=S&&rt.call(r,"__wrapped__");if(E||F){var M=E?t.value():t,P=F?r.value():r;return i||(i=new St),n(M,P,e,a,i)}}if(!x)return!1;return i||(i=new St),function(t,r,n,e,o,a){var i=o&u,c=fr(t),f=c.length,l=fr(r).length;if(f!=l&&!i)return!1;for(var s=f;s--;){var p=c[s];if(!(i?p in r:rt.call(r,p)))return!1}var h=a.get(t);if(h&&a.get(r))return h==r;var v=!0;a.set(t,r),a.set(r,t);for(var _=i;++s<f;){p=c[s];var y=t[p],b=r[p];if(e)var d=i?e(b,y,p,r,t,a):e(y,b,p,t,r,a);if(!(void 0===d?y===b||n(y,b,e,o,a):d)){v=!1;break}_||(_="constructor"==p)}if(v&&!_){var g=t.constructor,j=r.constructor;g!=j&&"constructor"in t&&"constructor"in r&&!("function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j)&&(v=!1)}return a.delete(t),a.delete(r),v}(t,r,n,e,a,i)}(t,r,zt,n,e,a))}function Ct(t){return!(!ur(t)||(r=t,Z&&Z in r))&&(er(t)||V(t)?et:E).test(Xt(t));var r}function Lt(t){return"function"==typeof t?t:null==t?lr:"object"==typeof t?rr(t)?function(t,r){if(qt(t)&&Ht(r))return Jt(Qt(t),r);return function(n){var e=function(t,r,n){var e=null==t?void 0:Tt(t,r);return void 0===e?n:e}(n,t);return void 0===e&&e===r?function(t,r){return null!=t&&function(t,r,n){r=qt(r,t)?[r]:Bt(r);var e,o=-1,u=r.length;for(;++o<u;){var a=Qt(r[o]);if(!(e=null!=t&&n(t,a)))break;t=t[a]}if(e)return e;return!!(u=t?t.length:0)&&or(u)&&Nt(a,u)&&(rr(t)||tr(t))}(t,r,Ut)}(n,t):zt(r,e,void 0,o|u)}}(t[0],t[1]):function(t){var r=function(t){var r=fr(t),n=r.length;for(;n--;){var e=r[n],o=t[e];r[n]=[e,o,Ht(o)]}return r}(t);if(1==r.length&&r[0][2])return Jt(r[0][0],r[0][1]);return function(n){return n===t||function(t,r,n,e){var a=n.length,i=a,c=!e;if(null==t)return!i;for(t=Object(t);a--;){var f=n[a];if(c&&f[2]?f[1]!==t[f[0]]:!(f[0]in t))return!1}for(;++a<i;){var l=(f=n[a])[0],s=t[l],p=f[1];if(c&&f[2]){if(void 0===s&&!(l in t))return!1}else{var h=new St;if(e)var v=e(s,p,l,t,r,h);if(!(void 0===v?zt(p,s,e,o|u,h):v))return!1}}return!0}(n,t,r)}}(t):qt(r=t)?(n=Qt(r),function(t){return null==t?void 0:t[n]}):function(t){return function(r){return Tt(r,t)}}(r);var r,n}function Wt(t){if(n=(r=t)&&r.constructor,e="function"==typeof n&&n.prototype||X,r!==e)return ct(t);var r,n,e,o=[];for(var u in Object(t))rt.call(t,u)&&"constructor"!=u&&o.push(u);return o}function Bt(t){return rr(t)?t:Kt(t)}function Dt(t,r,n,e,a,i){var c=a&u,f=t.length,l=r.length;if(f!=l&&!(c&&l>f))return!1;var s=i.get(t);if(s&&i.get(r))return s==r;var p=-1,h=!0,v=a&o?new kt:void 0;for(i.set(t,r),i.set(r,t);++p<f;){var _=t[p],y=r[p];if(e)var b=c?e(y,_,p,r,t,i):e(_,y,p,t,r,i);if(void 0!==b){if(b)continue;h=!1;break}if(v){if(!D(r,function(t,r){if(!v.has(r)&&(_===t||n(_,t,e,a,i)))return v.add(r)})){h=!1;break}}else if(_!==y&&!n(_,y,e,a,i)){h=!1;break}}return i.delete(t),i.delete(r),h}function Rt(t,r){var n,e,o=t.__data__;return("string"==(e=typeof(n=r))||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==n:null===n)?o["string"==typeof r?"string":"hash"]:o.map}function Vt(t,r){var n=function(t,r){return null==t?void 0:t[r]}(t,r);return Ct(n)?n:void 0}var Gt=function(t){return nt.call(t)};function Nt(t,r){return!!(r=null==r?i:r)&&("number"==typeof t||F.test(t))&&t>-1&&t%1==0&&t<r}function qt(t,r){if(rr(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!ir(t))||$.test(t)||!A.test(t)||null!=r&&t in Object(r)}function Ht(t){return t==t&&!ur(t)}function Jt(t,r){return function(n){return null!=n&&n[t]===r&&(void 0!==r||t in Object(n))}}(ft&&Gt(new ft(new ArrayBuffer(1)))!=O||lt&&Gt(new lt)!=_||st&&"[object Promise]"!=Gt(st.resolve())||pt&&Gt(new pt)!=g||ht&&"[object WeakMap]"!=Gt(new ht))&&(Gt=function(t){var r=nt.call(t),n=r==b?t.constructor:void 0,e=n?Xt(n):void 0;if(e)switch(e){case _t:return O;case yt:return _;case bt:return"[object Promise]";case dt:return g;case gt:return"[object WeakMap]";}return r});var Kt=Yt(function(t){var r;t=null==(r=t)?"":function(t){if("string"==typeof t)return t;if(ir(t))return mt?mt.call(t):"";var r=t+"";return"0"==r&&1/t==-a?"-0":r}(r);var n=[];return k.test(t)&&n.push(""),t.replace(S,function(t,r,e,o){n.push(e?o.replace(x,"$1"):r||t)}),n});function Qt(t){if("string"==typeof t||ir(t))return t;var r=t+"";return"0"==r&&1/t==-a?"-0":r}function Xt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Yt(t,r){if("function"!=typeof t||r&&"function"!=typeof r)throw new TypeError(n);var e=function(){var n=arguments,o=r?r.apply(this,n):n[0],u=e.cache;if(u.has(o))return u.get(o);var a=t.apply(this,n);return e.cache=u.set(o,a),a};return e.cache=new(Yt.Cache||$t),e}function Zt(t,r){return t===r||t!=t&&r!=r}function tr(t){return function(t){return ar(t)&&nr(t)}(t)&&rt.call(t,"callee")&&(!at.call(t,"callee")||nt.call(t)==c)}Yt.Cache=$t;var rr=Array.isArray;function nr(t){return null!=t&&or(t.length)&&!er(t)}function er(t){var r=ur(t)?nt.call(t):"";return r==h||r==v}function or(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}function ur(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function ar(t){return!!t&&"object"==typeof t}function ir(t){return"symbol"==typeof t||ar(t)&&nt.call(t)==w}var cr=W?function(t){return function(r){return t(r)}}(W):function(t){return ar(t)&&or(t.length)&&!!M[nt.call(t)]};function fr(t){return nr(t)?xt(t):Wt(t)}function lr(t){return t}return t.exports=function(t,r,n){var e=rr(t)?B:R,o=arguments.length<3;return e(t,Lt(r),n,o,Pt)},t.exports}.call({});!function(){for(var e={},r=Number(document.getElementsByClassName("-totalPages")[0].innerHTML),a=document.getElementsByClassName("-next")[0].childNodes[0],n=0;n<r;n++)Array.from(document.getElementsByClassName("rt-tbody")[0].childNodes).some(function(r){var a=r.childNodes[0],n=void 0;try{n=a.childNodes[2].getElementsByTagName("strong")[0].innerHTML}catch(e){return!0}var t=Number(a.childNodes[8].getElementsByTagName("span")[0].innerHTML.replace(",","").replace(",",""));console.log(t);var o=b.parsePercent(a.childNodes[4].getElementsByTagName("b")[0].innerHTML,!0);null==e[n]?e[n]={played:t,won:t*o}:(e[n].played+=t,e[n].won+=t*o)}),a.click();var t=g(e,function(e,r,a){return r.played+e},0),o=[];Object.keys(e).forEach(function(r){var a=e[r];o.push({winPercent:a.won/a.played,playPercent:100*a.played/t,power:b.calculatePower(a.won/a.played,100*a.played/t),name:r})}),o.sort(function(e,r){return r.power-e.power}),b.displayResults(o),b.openWebpage(o);for(var l=document.getElementsByClassName("-previous")[0].childNodes[0],s=0;s<r;s++)l.click()}();})();