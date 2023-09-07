(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[761],{4762:function(e,t){!function(e){"use strict";function t(e){return{x:e.x,y:e.y,handleIn:u({},e.handleIn),handleOut:u({},e.handleOut)}}function n(e,n){for(var r=function(r){function o(n){return t(e[c(n,e.length)])}n({curr:t(e[r]),index:r,sibling:o,prev:function(){return o(r-1)},next:function(){return o(r+1)}})},o=0;o<e.length;o++)r(o)}function r(e,t){var r=[];return n(e,function(e){r.push(t(e))}),r}function o(e,t){return{x:e.x+t.length*Math.cos(t.angle),y:e.y+t.length*Math.sin(t.angle)}}function i(e){var t,n,o,i,a=(t=(u=function(e){for(var t=2166136261,n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619);return function(){return t+=t<<13,t^=t>>>7,t+=t<<3,t^=t>>>17,(t+=t<<5)>>>0}}(u=String(e.seed)))(),n=u(),o=u(),i=u(),function(){var e=(t>>>=0)+(n>>>=0)|0;return t=n^n>>>9,n=(o>>>=0)+(o<<3)|0,o=(o=o<<21|o>>>11)+(e=e+(i=(i>>>=0)+1|0)|0)|0,(e>>>0)/4294967296}),s=1/(1+e.randomness/10),u=function(e,t){for(var n,o=2*Math.PI/e,i=[],a=0;a<e;a++){var s=t(),u=Math.sin(a*o),c=Math.cos(a*o);i.push({x:.5+u*s,y:.5+c*s,handleIn:{angle:0,length:0},handleOut:{angle:0,length:0}})}return n=4/3*Math.tan(o/4)/Math.sin(o/2)/2,r(i,function(e){var t,r,o=e.curr,i=e.next,a=e.prev,e=(t=a(),e=(r=i()).x-t.x,(e=Math.atan2(t=-r.y+t.y,e))<0?Math.abs(e):2*Math.PI-e);return{x:o.x,y:o.y,handleIn:{angle:e+Math.PI,length:n*l(o,a())},handleOut:{angle:e,length:n*l(o,i())}}})}(3+e.extraPoints,function(){return(s+a()*(1-s))/2}),c=e.size;return r(u,function(e){return e=e.curr,e.x*=c,e.y*=c,e.handleIn.length*=c,e.handleOut.length*=c,e})}function a(e,t,n){var r=typeof t;if("number"===r&&isNaN(t)&&(r="NaN"),!n.includes(r="object"===r&&null===t?"null":r))throw'"'+e+'" should have type "'+n.join("|")+'" but was "'+r+'".'}function s(e){a("blobOptions",e,["object"]);var t=e.seed,n=e.extraPoints,r=e.randomness,e=e.size;if(a("blobOptions.seed",t,["string","number"]),a("blobOptions.extraPoints",n,["number"]),n<0)throw'blobOptions.extraPoints is invalid "'+n+'".';if(a("blobOptions.randomness",r,["number"]),r<0)throw'blobOptions.randomness is invalid "'+r+'".';if(a("blobOptions.size",e,["number"]),e<0)throw'blobOptions.size is invalid "'+e+'".'}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){return(e%t+t)%t},l=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},f=function(e){var t;try{s(e)}catch(r){throw"(blobs2): "+r}return t="M"+(e=i(e))[0].x+","+e[0].y,n(e,function(e){var n=e.curr,r=(0,e.next)(),e=o(n,n.handleOut),n=o(r,r.handleIn);t+="C"+e.x+","+e.y+","+n.x+","+n.y+","+r.x+","+r.y}),t};e.canvasPath=function(e,t){var u,c,l;void 0===t&&(t={});try{s(e),a("canvasOptions",u=t,["object","undefined"]),u&&(c=u.offsetX,u=u.offsetY,a("canvasOptions.offsetX",c,["number","undefined"]),a("canvasOptions.offsetY",u,["number","undefined"]))}catch(f){throw"(blobs2): "+f}return e=r(i(e),function(e){return e=e.curr,e.x+=t.offsetX||0,e.y+=t.offsetY||0,e}),l=new Path2D,e.length<1||(l.moveTo(e[0].x,e[0].y),n(e,function(e){var t=e.curr,n=(0,e.next)(),e=o(t,t.handleOut),t=o(n,n.handleIn);l.bezierCurveTo(e.x,e.y,t.x,t.y,n.x,n.y)})),l},e.svg=function(e,t){void 0===t&&(t={});try{s(e),a("svgOptions",i=t,["object","undefined"]),i&&(r=i.fill,o=i.stroke,i=i.strokeWidth,a("svgOptions.fill",r,["string","undefined"]),a("svgOptions.stroke",o,["string","undefined"]),a("svgOptions.strokeWidth",i,["number","undefined"]))}catch(n){throw"(blobs2): "+n}var r,o=f(e),i=Math.floor(e.size),e=void 0===t.fill?"#ec576b":t.fill;return('\n<svg width="'+i+'" height="'+i+'" viewBox="0 0 '+i+" "+i+'" xmlns="http://www.w3.org/2000/svg">\n    <path stroke="'+(void 0===t.stroke?"none":t.stroke)+'" stroke-width="'+(void 0===t.strokeWidth?0:t.strokeWidth)+'" fill="'+e+'" d="'+o+'"/>\n</svg>').trim()},e.svgPath=f,Object.defineProperty(e,"__esModule",{value:!0})}(t)},640:function(e,t,n){"use strict";var r=n(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,s,u,c,l,f,d=!1;t||(t={}),a=t.debug||!1;try{if(u=r(),c=document.createRange(),l=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(f),c.selectNodeContents(f),l.addRange(c),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(p){a&&console.error("unable to copy using execCommand: ",p),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(h){a&&console.error("unable to copy using clipboardData: ",h),a&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",s=n.replace(/#{\s*key\s*}/g,i),window.prompt(s,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),f&&document.body.removeChild(f),u()}return d}},3162:function(e,t,n){var r,o;void 0!==(r="function"==typeof(o=function(){"use strict";function t(e,t,n){var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onload=function(){s(r.response,t,n)},r.onerror=function(){console.error("could not download file")},r.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(n){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(n){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,a=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(e,n,a){var s=i.URL||i.webkitURL,u=document.createElement("a");n=n||e.name||"download",u.download=n,u.rel="noopener","string"==typeof e?(u.href=e,u.origin===location.origin?o(u):r(u.href)?t(e,n,a):o(u,u.target="_blank")):(u.href=s.createObjectURL(e),setTimeout(function(){s.revokeObjectURL(u.href)},4e4),setTimeout(function(){o(u)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,i){if(n=n||e.name||"download","string"!=typeof e){var a;navigator.msSaveOrOpenBlob((void 0===(a=i)?a={autoBom:!1}:"object"!=typeof a&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e),n)}else if(r(e))t(e,n,i);else{var s=document.createElement("a");s.href=e,s.target="_blank",setTimeout(function(){o(s)})}}:function(e,n,r,o){if((o=o||open("","_blank"))&&(o.document.title=o.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,r);var s="application/octet-stream"===e.type,u=/constructor/i.test(i.HTMLElement)||i.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&u||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var e=l.result;e=c?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),o?o.location.href=e:location=e,o=null},l.readAsDataURL(e)}else{var f=i.URL||i.webkitURL,d=f.createObjectURL(e);o?o.location=d:location.href=d,o=null,setTimeout(function(){f.revokeObjectURL(d)},4e4)}});i.saveAs=s.saveAs=s,e.exports=s})?o.apply(t,[]):o)&&(e.exports=r)},5293:function(e){!function(){"use strict";var t={864:function(e){var t,n="object"==typeof Reflect?Reflect:null,r=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise(function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&"function"==typeof e.on&&v(e,"error",o,{once:!0})})},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var a=10;function s(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function c(e,t,n,r){if(s(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),a=i[t]),void 0===a)a=i[t]=n,++e._eventsCount;else if("function"==typeof a?a=i[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(o=u(e))>0&&a.length>o&&!a.warned){a.warned=!0;var o,i,a,c=Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,console&&console.warn&&console.warn(c)}return e}function l(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=l.bind(r);return o.listener=n,r.wrapFn=o,o}function d(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):p(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function o(i){r.once&&e.removeEventListener(t,o),n(i)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");a=e}}),i.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var a,s=Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)r(u,this,t);else for(var c=u.length,l=p(u,c),n=0;n<c;++n)r(l[n],this,t);return!0},i.prototype.addListener=function(e,t){return c(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return c(this,e,t,!0)},i.prototype.once=function(e,t){return s(t),this.on(e,f(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return s(t),this.prependListener(e,f(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,a;if(s(t),void 0===(r=this._events)||void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){a=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return d(this,e,!0)},i.prototype.rawListeners=function(e){return d(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},i.prototype.listenerCount=h,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}},a=!0;try{t[e](i,i.exports,r),a=!1}finally{a&&delete n[e]}return i.exports}r.ab="//";var o=r(864);e.exports=o}()},1803:function(e,t){"use strict";var n,r,o,i,a,s,u,c,l,f,d,h,p,v,g,m,y,x,w,b;r=t||{},void 0!==(n=(function(){return r}).apply(t,[]))&&(e.exports=n),r.default=r,o="http://www.w3.org/2000/xmlns/",i="http://www.w3.org/2000/svg",a=/url\(["']?(.+?)["']?\)/,s={woff2:"font/woff2",woff:"font/woff",otf:"application/x-font-opentype",ttf:"application/x-font-ttf",eot:"application/vnd.ms-fontobject",sfnt:"application/font-sfnt",svg:"image/svg+xml"},u=function(e){return e instanceof HTMLElement||e instanceof SVGElement},c=function(e){if(!u(e))throw Error("an HTMLElement or SVGElement is required; got "+e)},l=function(e){return new Promise(function(t,n){u(e)?t(e):n(Error("an HTMLElement or SVGElement is required; got "+e))})},f=function(e){var t=Object.keys(s).filter(function(t){return e.indexOf("."+t)>0}).map(function(e){return s[e]});return t?t[0]:(console.error("Unknown font format for "+e+". Fonts may not be working correctly."),"application/octet-stream")},d=function(e){for(var t="",n=new Uint8Array(e),r=0;r<n.byteLength;r++)t+=String.fromCharCode(n[r]);return window.btoa(t)},h=function(e,t,n){var r=e.viewBox&&e.viewBox.baseVal&&e.viewBox.baseVal[n]||null!==t.getAttribute(n)&&!t.getAttribute(n).match(/%$/)&&parseInt(t.getAttribute(n))||e.getBoundingClientRect()[n]||parseInt(t.style[n])||parseInt(window.getComputedStyle(e).getPropertyValue(n));return null==r||isNaN(parseFloat(r))?0:r},p=function(e,t,n,r){if("svg"===e.tagName)return{width:n||h(e,t,"width"),height:r||h(e,t,"height")};if(e.getBBox){var o=e.getBBox(),i=o.x,a=o.y;return{width:i+o.width,height:a+o.height}}},v=function(e){for(var t=window.atob(e.split(",")[1]),n=e.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(t.length),o=new Uint8Array(r),i=0;i<t.length;i++)o[i]=t.charCodeAt(i);return new Blob([r],{type:n})},g=function(e,t){if(t)try{return e.querySelector(t)||e.parentNode&&e.parentNode.querySelector(t)}catch(n){console.warn('Invalid CSS selector "'+t+'"',n)}},m=function(e,t){var n=e.cssText.match(a),r=n&&n[1]||"";if(!(!r||r.match(/^data:/))&&"about:blank"!==r){var o=r.startsWith("../")?t+"/../"+r:r.startsWith("./")?t+"/."+r:r;return{text:e.cssText,format:f(o),url:o}}},y={},x=null,w=function(e,t){var n=t||{},r=n.selectorRemap,o=n.modifyStyle,i=n.modifyCss,s=n.fonts,u=n.excludeUnusedCss,c=i||function(e,t){return(r?r(e):e)+"{"+(o?o(t):t)+"}\n"},l=[],f=void 0===s,h=s||[];return(x||(x=Array.from(document.styleSheets).map(function(e){try{return{rules:e.cssRules,href:e.href}}catch(t){return console.warn("Stylesheet could not be loaded: "+e.href,t),{}}}))).forEach(function(t){var n=t.rules,r=t.href;n&&Array.from(n).forEach(function(t){if(void 0!==t.style){if(g(e,t.selectorText))l.push(c(t.selectorText,t.style.cssText));else if(f&&t.cssText.match(/^@font-face/)){var n=m(t,r);n&&h.push(n)}else u||l.push(t.cssText)}})}),Promise.all(h.map(function(e){return new Promise(function(t,n){if(y[e.url])return t(y[e.url]);var r=new XMLHttpRequest;r.addEventListener("load",function(){var n=d(r.response),o=e.text.replace(a,'url("data:'+e.format+";base64,"+n+'")')+"\n";y[e.url]=o,t(o)}),r.addEventListener("error",function(n){console.warn("Failed to load font from: "+e.url,n),y[e.url]=null,t(null)}),r.addEventListener("abort",function(n){console.warn("Aborted loading font from: "+e.url,n),t(null)}),r.open("GET",e.url),r.responseType="arraybuffer",r.send()})})).then(function(e){return e.filter(function(e){return e}).join("")}).then(function(e){return l.join("\n")+e})},b=function(){if(!navigator.msSaveOrOpenBlob&&!("download"in document.createElement("a")))return{popup:window.open()}},r.prepareSvg=function(e,t,n){c(e);var r=t||{},a=r.left,s=void 0===a?0:a,u=r.top,l=void 0===u?0:u,f=r.width,d=r.height,h=r.scale,v=void 0===h?1:h,g=r.responsive,m=void 0!==g&&g,y=r.excludeCss,x=void 0!==y&&y;return Promise.all(Array.from(e.querySelectorAll("image")).map(function(e){var t,n=e.getAttributeNS("http://www.w3.org/1999/xlink","href")||e.getAttribute("href");return n?((t=n)&&0===t.lastIndexOf("http",0)&&-1===t.lastIndexOf(window.location.host)&&(n+=(-1===n.indexOf("?")?"?":"&")+"t="+new Date().valueOf()),new Promise(function(t,r){var o=document.createElement("canvas"),i=new Image;i.crossOrigin="anonymous",i.src=n,i.onerror=function(){return r(Error("Could not load "+n))},i.onload=function(){o.width=i.width,o.height=i.height,o.getContext("2d").drawImage(i,0,0),e.setAttributeNS("http://www.w3.org/1999/xlink","href",o.toDataURL("image/png")),t(!0)}})):Promise.resolve(null)})).then(function(){var r=e.cloneNode(!0);r.style.backgroundColor=(t||{}).backgroundColor||e.style.backgroundColor;var a=p(e,r,f,d),u=a.width,c=a.height;if("svg"!==e.tagName){if(e.getBBox){null!=r.getAttribute("transform")&&r.setAttribute("transform",r.getAttribute("transform").replace(/translate\(.*?\)/,""));var h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.appendChild(r),r=h}else{console.error("Attempted to render non-SVG element",e);return}}if(r.setAttribute("version","1.1"),r.setAttribute("viewBox",[s,l,u,c].join(" ")),r.getAttribute("xmlns")||r.setAttributeNS(o,"xmlns",i),r.getAttribute("xmlns:xlink")||r.setAttributeNS(o,"xmlns:xlink","http://www.w3.org/1999/xlink"),m?(r.removeAttribute("width"),r.removeAttribute("height"),r.setAttribute("preserveAspectRatio","xMinYMin meet")):(r.setAttribute("width",u*v),r.setAttribute("height",c*v)),Array.from(r.querySelectorAll("foreignObject > *")).forEach(function(e){e.setAttributeNS(o,"xmlns","svg"===e.tagName?i:"http://www.w3.org/1999/xhtml")}),!x)return w(e,t).then(function(e){var t=document.createElement("style");t.setAttribute("type","text/css"),t.innerHTML="<![CDATA[\n"+e+"\n]]>";var o=document.createElement("defs");o.appendChild(t),r.insertBefore(o,r.firstChild);var i=document.createElement("div");i.appendChild(r);var a=i.innerHTML.replace(/NS\d+:href/gi,'xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href');if("function"!=typeof n)return{src:a,width:u,height:c};n(a,u,c)});var g=document.createElement("div");g.appendChild(r);var y=g.innerHTML;if("function"!=typeof n)return{src:y,width:u,height:c};n(y,u,c)})},r.svgAsDataUri=function(e,t,n){return c(e),r.prepareSvg(e,t).then(function(e){var t=e.src,r=e.width,o=e.height,i="data:image/svg+xml;base64,"+window.btoa(decodeURIComponent(encodeURIComponent('<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" [<!ENTITY nbsp "&#160;">]>'+t).replace(/%([0-9A-F]{2})/g,function(e,t){var n=String.fromCharCode("0x"+t);return"%"===n?"%25":n})));return"function"==typeof n&&n(i,r,o),i})},r.svgAsPngUri=function(e,t,n){c(e);var o=t||{},i=o.encoderType,a=void 0===i?"image/png":i,s=o.encoderOptions,u=void 0===s?.8:s,l=o.canvg,f=function(e){var t=e.src,r=e.width,o=e.height,i=document.createElement("canvas"),s=i.getContext("2d"),c=window.devicePixelRatio||1;i.width=r*c,i.height=o*c,i.style.width=i.width+"px",i.style.height=i.height+"px",s.setTransform(c,0,0,c,0,0),l?l(i,t):s.drawImage(t,0,0);var f=void 0;try{f=i.toDataURL(a,u)}catch(d){if("undefined"!=typeof SecurityError&&d instanceof SecurityError||"SecurityError"===d.name){console.error("Rendered SVG images cannot be downloaded in this browser.");return}throw d}return"function"==typeof n&&n(f,i.width,i.height),Promise.resolve(f)};return l?r.prepareSvg(e,t).then(f):r.svgAsDataUri(e,t).then(function(e){return new Promise(function(t,n){var r=new Image;r.onload=function(){return t(f({src:r,width:r.width,height:r.height}))},r.onerror=function(){n("There was an error loading the data URI as an image on the following SVG\n"+window.atob(e.slice(26))+"Open the following link to see browser's diagnosis\n"+e)},r.src=e})})},r.download=function(e,t,n){if(navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(v(t),e);else{var r=document.createElement("a");if("download"in r){r.download=e,r.style.display="none",document.body.appendChild(r);try{var o=v(t),i=URL.createObjectURL(o);r.href=i,r.onclick=function(){return requestAnimationFrame(function(){return URL.revokeObjectURL(i)})}}catch(a){console.error(a),console.warn("Error while getting object URL. Falling back to string URL."),r.href=t}r.click(),document.body.removeChild(r)}else n&&n.popup&&(n.popup.document.title=e,n.popup.location.replace(t))}},r.saveSvg=function(e,t,n){var o=b();return l(e).then(function(e){return r.svgAsDataUri(e,n||{})}).then(function(e){return r.download(t,e,o)})},r.saveSvgAsPng=function(e,t,n){var o=b();return l(e).then(function(e){return r.svgAsPngUri(e,n||{})}).then(function(e){return r.download(t,e,o)})}},1304:function(e){var t;t=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","\xa2":"cent","\xa3":"pound","\xa4":"currency","\xa5":"yen","\xa9":"(c)","\xaa":"a","\xae":"(r)","\xba":"o","\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xc6":"AE","\xc7":"C","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xd0":"D","\xd1":"N","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xdd":"Y","\xde":"TH","\xdf":"ss","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xe6":"ae","\xe7":"c","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xf0":"d","\xf1":"n","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xfd":"y","\xfe":"th","\xff":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"\xc4":"AE","\xe4":"ae","\xd6":"OE","\xf6":"oe","\xdc":"UE","\xfc":"ue","\xdf":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","\xa2":"centavos","\xa3":"libras","\xa4":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","\xa2":"centime","\xa3":"livre","\xa4":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","\xa2":"centavo","∑":"soma","\xa3":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"\xd8":"OE","\xf8":"oe","\xc5":"AA","\xe5":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"st\xf8rre end"},"nb":{"&":"og","\xc5":"AA","\xc6":"AE","\xd8":"OE","\xe5":"aa","\xe6":"ae","\xf8":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","\xc5":"AA","\xc4":"AE","\xd6":"OE","\xe5":"aa","\xe4":"ae","\xf6":"oe"}}');function n(n,r){if("string"!=typeof n)throw Error("slugify: string argument expected");var o=t[(r="string"==typeof r?{replacement:r}:r||{}).locale]||{},i=void 0===r.replacement?"-":r.replacement,a=void 0===r.trim||r.trim,s=n.normalize().split("").reduce(function(t,n){var a=o[n]||e[n]||n;return a===i&&(a=" "),t+a.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return r.strict&&(s=s.replace(/[^A-Za-z0-9\s]/g,"")),a&&(s=s.trim()),s=s.replace(/\s+/g,i),r.lower&&(s=s.toLowerCase()),s}return n.extend=function(t){Object.assign(e,t)},n},e.exports=t(),e.exports.default=t()},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},4924:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})}}]);