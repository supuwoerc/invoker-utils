function e(e){if(!(e instanceof Element))throw new Error("The type of parameter node is incorrect");let t=e;const n=[];for(;t&&t.nodeType===Node.ELEMENT_NODE;){let e=t.nodeName.toLowerCase();if(t.id){e=`${e}#${t.id}`,n.unshift(e);break}{let n=t,o=1;for(n=n.previousElementSibling;n;)n.nodeName.toLowerCase()===e&&(o+=1),n=n.previousElementSibling;e=`${e}:nth-of-type(${o})`}n.unshift(e),t=t.parentNode}return n.join(" > ")}function t(e=window.location.href){const t=new URL(e);return new URLSearchParams(t.search)}function n(e,n=window.location.href){return t(n).get(e)}function o(e){if("string"!=typeof e)throw new Error("argument is not a string");const t="Arial";if(e.toLowerCase()===t.toLowerCase())return!0;const n=100,o=100,r=document.createElement("canvas"),i=r.getContext("2d");function a(e){i.clearRect(0,0,n,o),i.font=`100px ${e}, ${t}`,i.fillText("a",50,50);const r=i.getImageData(0,0,n,o).data;return[].slice.call(r).filter((e=>0!==e))}return r.width=n,r.height=o,i.textAlign="center",i.fillStyle="black",i.textBaseline="middle",a(t).join("")!==a(e).join("")}export{e as getElementSelector,n as getQueryParam,t as getQueryParams,o as isSupportFontFamily};
