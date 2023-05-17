"use strict";function e(e,t){return e.classList.contains(t)}function t(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}function n(){const{userAgent:e}=navigator;return!/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}function o(e,t,n){var o,r=n||{},i=r.noTrailing,s=void 0!==i&&i,c=r.noLeading,a=void 0!==c&&c,u=r.debounceMode,l=void 0===u?void 0:u,f=!1,p=0;function x(){o&&clearTimeout(o)}function d(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var c=this,u=Date.now()-p;function d(){p=Date.now(),t.apply(c,r)}function m(){o=void 0}f||(a||!l||o||d(),x(),void 0===l&&u>e?a?(p=Date.now(),s||(o=setTimeout(l?m:d,e))):d():!0!==s&&(o=setTimeout(l?m:d,void 0===l?e-u:e)))}return d.cancel=function(e){var t=(e||{}).upcomingOnly,n=void 0!==t&&t;x(),f=!n},d}exports.addClass=function(t,n){e(t,n)||t.classList.add(n)},exports.clearAllCookie=function(){const e=document.cookie.split(";");for(let t=0;t<e.length;t+=1){const n=e[t],o=n.indexOf("="),r=o>-1?n.substr(0,o):n;document.cookie=`${r}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}},exports.debounce=function(e,t,n){var r=(n||{}).atBegin;return o(e,t,{debounceMode:!1!==(void 0!==r&&r)})},exports.generateUUID=function(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(n=>{let o=16*Math.random();return e>0?(o=(e+o)%16|0,e=Math.floor(e/16)):(o=(t+o)%16|0,t=Math.floor(t/16)),("x"===n?o:3&o|8).toString(16)}))},exports.getArrayItem=function(e,t){const{length:n}=e;let o=t;if(!(n<=0))return t<0&&(o+=n),e[o]},exports.getCookie=function(e){const t=document.cookie.split(";").find((t=>{const[n]=t.split("=");return n.trim()===e}));if(t){const[,e]=t.split("=");return decodeURIComponent(e.trim())}return null},exports.getElementSelector=function(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,o=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(o+=1),n=n.previousElementSibling;e=`${e}:nth-of-type(${o})`}n.unshift(e),t=t.parentNode}return n.join(" > ")},exports.getQueryParam=function(e,n=window.location.href){return t(n).get(e)},exports.getQueryParams=t,exports.hasClass=e,exports.isHttpOrHttps=function(e){return e.startsWith("http://")||e.startsWith("https://")},exports.isMobile=function(){return!n()},exports.isPc=n,exports.isSupportFontFamily=function(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,o=100,r=document.createElement("canvas"),i=r.getContext("2d");function s(e){i.clearRect(0,0,n,o),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,n,o).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=n,r.height=o,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",s(t).join("")!==s(e).join("")},exports.moveArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");const o=e.splice(t,1)[0];e.splice(n,0,o)},exports.removeArrayItem=function(e,t){const n=e.indexOf(t);n>=0&&e.splice(n,1)},exports.removeClass=function(t,n){e(t,n)&&t.classList.remove(n)},exports.setCookie=function(e,t,n){const o=new Date;o.setTime((new Date).getTime()+n);const r=encodeURIComponent(t)+(n?`; expires=${o.toUTCString()}`:"");document.cookie=`${e}=${r}`},exports.swapArrayItem=function(e,t,n){if(t<0||t>=e.length||n<0||n>=e.length)throw new Error("Invalid index");[e[t],e[n]]=[e[n],e[t]]},exports.throttle=o,exports.uniq=function(e){return Array.from(new Set(e))},exports.uniqueBy=function(e,t){return e.reduce(((e,n)=>(-1===e.findIndex((e=>t(e,n)))&&e.push(n),e)),[])};
