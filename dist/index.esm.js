function e(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,o=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(o+=1),n=n.previousElementSibling;e=`${e}:nth-of-type(${o})`}n.unshift(e),t=t.parentNode}return n.join(" > ")}function t(e,t){return e.classList.contains(t)}function n(e,n){t(e,n)||e.classList.add(n)}function o(e,n){t(e,n)&&e.classList.remove(n)}function r(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}function i(e,t=window.location.href){return r(t).get(e)}function a(){if("object"==typeof crypto){if("function"==typeof crypto.randomUUID)return crypto.randomUUID();if("function"==typeof crypto.getRandomValues&&"function"==typeof Uint8Array){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,(e=>{const t=Number(e);return(t^crypto.getRandomValues(new Uint8Array(1))[0]&15>>t/4).toString(16)}))}}let e=(new Date).getTime(),t="undefined"!=typeof performance&&performance.now&&1e3*performance.now()||0;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(n=>{let o=16*Math.random();return e>0?(o=(e+o)%16|0,e=Math.floor(e/16)):(o=(t+o)%16|0,t=Math.floor(t/16)),("x"===n?o:3&o|8).toString(16)}))}function c(e){const t=document.cookie.split(";");for(const n of t){const[t,o]=n.split("=");if(t.trim()===e)return decodeURIComponent(o.trim())}return null}function f(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,o=100,r=document.createElement("canvas"),i=r.getContext("2d");function a(e){i.clearRect(0,0,n,o),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,n,o).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=n,r.height=o,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",a(t).join("")!==a(e).join("")}export{n as addClass,a as generateUUID,c as getCookie,e as getElementSelector,i as getQueryParam,r as getQueryParams,t as hasClass,f as isSupportFontFamily,o as removeClass};
