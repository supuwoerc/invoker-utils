"use strict";function e(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}exports.getElementSelector=function(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,r=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(r+=1),n=n.previousElementSibling;e=`${e}:nth-of-type(${r})`}n.unshift(e),t=t.parentNode}return n.join(" > ")},exports.getQueryParam=function(t,n=window.location.href){return e(n).get(t)},exports.getQueryParams=e,exports.isSupportFontFamily=function(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,r=100,o=document.createElement("canvas"),i=o.getContext("2d");function a(e){i.clearRect(0,0,n,r),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const o=i.getImageData(0,0,n,r).data;return[].slice.call(o).filter((e=>0!==e))}return o.width=n,o.height=r,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",a(t).join("")!==a(e).join("")};
