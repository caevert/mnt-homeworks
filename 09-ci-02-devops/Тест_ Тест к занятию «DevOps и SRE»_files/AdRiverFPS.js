// @adr/first-party-synchronization v1.1.11
var AdRiverFPS;!function(){var t={240:function(t,e,r){const n=[],i=["sid","id1","id2","id3"],o={adrcid:"cid",sid:"sid"},s={ls:"301",ss:"302",idb:"304",id1:"305",id2:"306",id3:"307",_ym_uid:"308",_ga:"309"},a=["adrcid","_ym_uid","_ga"],d="adrdel",c=.5,u=r(783),l=r(19),f=r(790),g=r(495);window.AdriverCounterImage=u.AdriverCounterImage,window.AdriverCounterJS=u.AdriverCounterJS;class h{constructor(t,e){this.ready=!1,this.urlParams=void 0,this.storages={},this.attempts=20,this.callbacks=[],this.subscribe(t,e),this.startFPS()}startFPS(){this.urlParams=this.getUrlParameters(),this.storages=this.getScriptParameters(),u.addEvent(window,"message",this.checkMessageAndSend.bind(this)),this.getAllStorages(),this.sendData()}getAllStorages(){for(var t=0;t<a.length;t++)this.storages[a[t]]=l.Cookie.get(a[t])||0;this.storages.ls=l.applyLS(a[0])||0,this.storages.ss=l.applySS(a[0])||0,l.applyIDB(a[0],"",function(t){this.storages.idb=t||0}.bind(this))}setAllStorages(t){this.storages[a[0]]=t,l.Cookie.set(a[0],t,3650),l.applyLS(a[0],t),l.applySS(a[0],t),l.applyIDB(a[0],t)}getScriptParameters(){for(var t=document.querySelectorAll("script"),e={},r=0;r<t.length;r++)if(t[r].hasAttribute("data-adriverfps")){for(var n=0;n<i.length;n++)e[i[n]]=t[r].getAttribute("data-"+i[n]);return e}return{}}getUrlParameters(){for(var t,e=location.search.substring(1).split("&"),r={},i=0;i<e.length;i++)void 0!==(t=e[i].split("="))[0]&&void 0!==t[1]&&-1!=n.indexOf(t[0])&&(r[t[0]]=t[1]);return r}resetStorages(t){if(l.Cookie.set(d,"1",c),t[a[0]]){if(this.setAllStorages(t[a[0]]),this.callbacks.length>0)for(var e=0;e<this.callbacks.length;e++)this.callbacks[e](t[a[0]]);this.ready=!0}}isReady(){var t=function(t){return void 0!==t};return t(this.storages.ls)&&t(this.storages.ss)&&t(this.storages.idb)}subscribe(t,e){void 0!==t&&(void 0!==e&&(t=t.bind(e)),this.ready?t(this.storages[a[0]]):this.callbacks.push(t))}sendData(){if(!this.isReady()&&this.attempts>0)return this.attempts--,void setTimeout(this.sendData.bind(this),50);void 0!==l.Cookie.get(d)&&void 0!==l.Cookie.get(a[0])||u.makeJSONRequest("https://ev.adriver.ru/cgi-bin/json.cgi?ad=719473&bt=55&pid=3198680&bid=7189165&bn=7189165&tuid=1&cfa=1",f.convertToParamsObj(this.storages,o),f.convertToParamsObj(this.storages,s),this.resetStorages.bind(this))}checkMessageAndSend(t){try{var e=JSON.parse(t.data);if(void 0!==e.AFPS){var r,n={};n.ad=e.ad,n.bid=e.bid,n.xpid=e.xpid,n.sid=e.sid,n.bn=e.bn,n.ad=e.ad,n.sz=e.sz,n.bt=e.bt,n.pz=e.pz,n.type=e.type,r=u.makeEvent(n)+f.strParams(customObj,";","&custom="),u.sendPixel(r)}}catch(t){}}get(){return this.storages.adrcid}}window.AFPS=new h,t.exports=h,window.adrCounterStorage=window.adrCounterStorage||[],g.nativeMethodOverrride(adrCounterStorage),g.checkAndCallFunctions(adrCounterStorage)},783:function(t,e,r){"use strict";r.r(e),r.d(e,{AdriverCounterImage:function(){return g},AdriverCounterJS:function(){return f},addEvent:function(){return o},makeEvent:function(){return d},makeJSONRequest:function(){return l},removeEvent:function(){return s},sendEvent:function(){return a},sendPixel:function(){return u}});var n=r(790),i=r(495);function o(t,e,r){t.addEventListener?t.addEventListener(e,r,!1):t.attachEvent&&t.attachEvent("on"+e,r)}function s(t,e,r){t.removeEventListener?t.removeEventListener(e,r,!1):t.detachEvent&&t.detachEvent("on"+e,r)}function a(t){if(void 0!==t&&"undefined"!=typeof b)return-1==t.indexOf("&type=")&&(t+="&type="),c&&-1==t.indexOf("&custom=")&&(t+="&custom="),t=t.split("&type=").join("&type="+b),c&&(t=t.split("&custom=").join("&custom="+c)),u(t),this}function d(t){return"//ev.adriver.ru/cgi-bin/event.cgi?"+(0,n.obj2str)((0,n.extendL)({bid:0,xpid:"",sid:t.site,bn:0,ad:0,sz:0,bt:0,pz:0,type:0,rnd:"![rnd]"},t),"&")+"&tuid=1"}function u(t){if(t=function(t){return(/^http:\/\//i.test(t)?t.replace(/^http:\/\//i,"https://"):/^\/\//.test(t)?"https:":"")+t}(t).split("![rnd]").join(~~(1e6*Math.random())),document.createElement&&document.body){var e=document.createElement("img");e.style.position="absolute",e.style.display="none",e.style.width=e.style.height="0px",e.setAttribute("referrerpolicy","no-referrer-when-downgrade"),e.src=t,document.body.appendChild(e)}else{var r=new Image;r.setAttribute("referrerpolicy","no-referrer-when-downgrade"),r.src=t}}function l(t,e,r,i){try{if(t=t+("sid"in e||"sid"in r?"":"&sid=1")+(0,n.strParams)(e,"&","&")+(0,n.strParams)(r,";","&custom="),"fetch"in window)fetch(t,{method:"GET",mode:"cors",credentials:"include",referrerPolicy:"no-referrer-when-downgrade"}).then((function(t){var e=t.headers.get("content-type");if(e&&e.includes("application/json"))return t.json();throw new TypeError("Not json returned")})).then(function(t){i(t)}.bind(this)).catch((function(t){console.log(t)}));else{var o,s=!1;window.XMLHttpRequest?void 0===(o=new window.XMLHttpRequest).responseType&&(s=!0):s=!0,s?(o=new window.XDomainRequest).onload=function(){i(JSON.parse(o.responseText),o)}.bind(this):o.onreadystatechange=function(){4===o.readyState&&i(JSON.parse(o.responseText),o)}.bind(this),o.open("GET",t),o.withCredentials=!0,s||o.setRequestHeader("Content-Type","text/plain"),o.send()}}catch(t){}}let f;function g(t,e){var r,n,o=document.domain,s={tail256:document.referrer||"unknown"},a=(0,i.fromQueryString)(window.location.search.substring(1));if(void 0!==a.adrclid&&(t.fsid=a.adrclid),null!==(0,i.getCookie)(document,"adrcid")&&(t.cid=(0,i.getCookie)(document,"adrcid")),e&&e.id&&null!==(0,i.getCookie)(document,e.id)&&(t.suid=o+"_"+(0,i.getCookie)(document,e.id)),e&&e.gid1&&1!=+e.gid1)t.gid1=e.gid1;else{var d=(0,i.getCookie)(document,"_ga");if(d){var c=1==+e.gid1?d.split(".").slice(2).join("."):d;c&&(t.gid1=c)}}e&&e.yid1?t.yid1=e.yid1:null!==(0,i.getCookie)(document,"_ym_uid")&&(t.yid1=(0,i.getCookie)(document,"_ym_uid")),t.loc=window.location.href,t.custom&&(t.custom=(0,i.toQueryString)(t.custom,";")),r=(0,i.toQueryString)(t),n=(0,i.toQueryString)(s),u("https://ev.adriver.ru/cgi-bin/rle.cgi?"+r+"&rnd=![rnd]"+(n?"&"+n:""))}void 0===f&&(f=function(){let t=0;var e=function(r,n){var i=document.domain;if(!(this instanceof f))return e.items[t];if(e.urlParams=e.getUrlParameters(window.location.search.substring(1)),void 0!==e.urlParams.adrclid&&(r.fsid=e.urlParams.adrclid),null!==e.getCookie(document,"adrcid")&&(r.cid=e.getCookie(document,"adrcid")),n&&n.id&&null!==e.getCookie(document,n.id)&&(r.suid=i+"_"+e.getCookie(document,n.id)),n&&n.gid1&&1!=+n.gid1)r.gid1=n.gid1;else{var o=e.getCookie(document,"_ga");if(o){var s=1==+n.gid1?o.split(".").slice(2).join("."):o;s&&(r.gid1=s)}}n&&n.yid1?r.yid1=n.yid1:null!==e.getCookie(document,"_ym_uid")&&(r.yid1=e.getCookie(document,"_ym_uid")),r.loc=window.location.href,t=e.items.length||1,e.items[t]=this,r.ph=t,r.custom&&(r.custom=e.toQueryString(r.custom,";")),e.request(e.toQueryString(r))};return e.httplize=i.httplize,e.loadScript=function(t){try{var e=document.getElementsByTagName("head")[0],r=document.createElement("script");r.setAttribute("type","text/javascript"),r.setAttribute("referrerpolicy","no-referrer-when-downgrade"),r.setAttribute("charset","windows-1251"),r.setAttribute("src",t.split("![rnd]").join(Math.round(1e6*Math.random()))),r.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(r.onload=null,e.removeChild(r))},r.onload=function(){e.removeChild(r)},e.insertBefore(r,e.firstChild)}catch(t){}},e.toQueryString=i.toQueryString,e.request=function(t){var r=e.toQueryString(e.defaults);e.loadScript(e.redirectHost+"/cgi-bin/erle.cgi?"+t+"&rnd=![rnd]"+(r?"&"+r:""))},e.getUrlParameters=i.fromQueryString,e.getCookie=i.getCookie,e.items=[],e.defaults={tail256:document.referrer||"unknown"},e.redirectHost="https://ev.adriver.ru",e.urlParams={},e}())},19:function(t,e,r){"use strict";r.r(e),r.d(e,{Cookie:function(){return n},applyIDB:function(){return d},applyLS:function(){return a},applySS:function(){return s},hasValue:function(){return i}});const n={tld:!0,set:function(t,e,r){let i={[t]:e,path:"/"};if(r){let t=new Date;t.setTime(t.getTime()+24*r*60*60*1e3),i.expires=t.toUTCString()}n.tld&&(i.domain="."+window.location.hostname.split(".").slice(-2).join("."));let o=[];for(let t in i)o.push(`${t}=${i[t]}`);return document.cookie=o.join("; "),this.get(t)},getAll:function(){let t={};return document.cookie.split(";").forEach((e=>{let r=e.split("=");t[r[0].trim()]=r[1]})),t},get:function(t){return this.getAll()[t]},delete:function(t){this.set(t,"",-1)}},i=t=>void 0!==t,o=t=>t;function s(t,e){try{var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if(window.sessionStorage){if(!i(e)){const e=sessionStorage.getItem(t);return r(e),e}sessionStorage.setItem(t,e),r(void 0)}else r("unavail")}catch(t){r("err")}}function a(t,e){try{var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if(window.localStorage){if(!i(e)){const e=localStorage.getItem(t);return r(e),e}localStorage.setItem(t,e),r(void 0)}else r("unavail")}catch(t){r("err")}}function d(t,e){try{var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o;if(window.indexedDB){const n=1,i=indexedDB.open("idb_arcid",n);i.onerror=t=>r("err"),i.onupgradeneeded=t=>{t.target.result.createObjectStore("arcid",{keyPath:"name",unique:!1})},i.onsuccess=e?function(n){var i=n.target.result;i.objectStoreNames.contains("arcid")&&(i.transaction(["arcid"],"readwrite").objectStore("arcid").put({name:t,value:e}).onsuccess=t=>{r(void 0)});i.close()}:function(e){const n=e.target.result;if(n.objectStoreNames.contains("arcid")){var i=n.transaction(["arcid"]).objectStore("arcid").get(t);i.onsuccess=function(t){void 0===i.result?r(""):r(i.result.value)}}else r();n.close()}}else r("unavail")}catch(t){r("err")}}},790:function(t,e,r){"use strict";function n(t,e){var r=[];for(var n in e=e||";",t)r.push(o(n,t[n]));return r.join(e)}function i(t,e){for(var r in t)t[r]=e[r]||t[r];return t}function o(t,e){return void 0===e?"":t+"="+e}function s(t,e,r){return e=e||";",r=r||"",void 0===t||t&&0===Object.keys(t).length?"":r+Object.keys(t).map((function(e){return"".concat(e,"=").concat(t[e])})).join(e)}function a(t,e){var r={};for(var n in t)void 0!==e[n]&&""!==t[n]&&null!==t[n]&&(r[e[n]]=t[n]);return r}r.r(e),r.d(e,{convertToParamsObj:function(){return a},extendL:function(){return i},obj2str:function(){return n},strParams:function(){return s}})},495:function(t,e,r){"use strict";function n(t,e,r){e=e||"&",r=r||"=";var n=[];for(var i in t)t.hasOwnProperty(i)&&n.push(i+r+encodeURIComponent(t[i]));return n.join(e)}function i(t,e,r){e=e||"&",r=r||"=";for(var n,i=[],o=0,s=t.length;o<s;o++)void 0!==(n=t[o])[0]&&void 0!==n[1]&&i.push(n[0]+r+encodeURIComponent(n[1]));return i.join(e)}function o(t){var e={};if(t){var r=t.split("&");for(var n in r)if(r.hasOwnProperty(n)){var i=r[n].split("=");void 0!==i[0]&&void 0!==i[1]&&(e[i[0]]=decodeURIComponent(i[1]))}}return e}function s(t){return(/^\/\//.test(t)?"https:":"")+t}function a(){return Math.round(1e6*Math.random())}function d(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r);return e}function c(){for(var t,e,r=arguments[0],n=1,i=arguments.length;n<i;n++)for(e in t=arguments[n])t.hasOwnProperty(e)&&(t[e]instanceof Function?r[e]=t[e]:t[e]instanceof Object?r[e]?c(r[e],t[e]):r[e]=c(t[e]instanceof Array?[]:{},t[e]):r[e]=t[e]);return r}function u(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function l(t){var e,r={};function n(e,n){void 0!==t[e]&&(""!==t[e]&&(r[n]=t[e]),delete t[e])}return void 0!==t.site_area&&(""!==t.site_area&&(t.sz=t.site_area),delete t.site_area),n("offer_id","10"),n("category_id","11"),n("lead_id","150"),n("order_sum","151"),n("reg_id","152"),n("user_id","153"),u(e=c(t.custom||{},r))||(t.custom=e),t}function f(t,e){try{var r=e.getElementsByTagName("head")[0],n=e.createElement("script");n.setAttribute("type","text/javascript"),n.setAttribute("charset","windows-1251"),n.setAttribute("referrerpolicy","no-referrer-when-downgrade"),n.setAttribute("src",t.split("![rnd]").join(a())),n.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(n.onload=null,r.removeChild(n))},n.onload=function(){r.removeChild(n)},r.insertBefore(n,r.firstChild)}catch(t){}}function g(t,e){var r=t.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return r?decodeURIComponent(r[2]):null}function h(t){t.push=function(t){try{t.call()}catch(t){console.log(t)}}}function v(t){Array.isArray(t)&&t.forEach((t=>{if(void 0===t.called)try{t.call(),t.called=!0}catch(t){console.log(t)}}))}r.r(e),r.d(e,{checkAndCallFunctions:function(){return v},createScript:function(){return f},extend:function(){return c},fromQueryString:function(){return o},generateRnd:function(){return a},getCookie:function(){return g},httplize:function(){return s},isEmptyObj:function(){return u},nativeMethodOverrride:function(){return h},objectKeys:function(){return d},parseParams:function(){return l},toQueryString:function(){return n},toQueryStringArr:function(){return i}})}},e={};function r(n){var i=e[n];if(void 0!==i)return i.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,r),o.exports}r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n=r(240);AdRiverFPS=n}();