(function(e){function t(t){for(var r,a,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==c[i]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"40cf":function(e,t,n){"use strict";n("4cb3")},"4cb3":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={id:"nav"},o=Object(r["c"])(" 读取sketch文档 ");function a(e,t){return Object(r["f"])(),Object(r["b"])("div",c,[Object(r["d"])("div",{class:"test",onClick:t[1]||(t[1]=Object(r["l"])((function(){return e.readDoc&&e.readDoc.apply(e,arguments)}),["stop"]))},[o,Object(r["d"])("div",null,Object(r["j"])(e.docDatas),1)]),Object(r["d"])("div",{class:"test",onClick:t[2]||(t[2]=Object(r["l"])((function(){return e.writeDoc&&e.writeDoc.apply(e,arguments)}),["stop"]))}," 写入sketch文档 ")])}var u=n("d4ec"),i=n("bee2"),s=n("262e"),f=n("2caf"),l=n("9ab4"),p=n("ce1f"),d=function(e){Object(s["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(u["a"])(this,n),e=t.apply(this,arguments),e.docDatas="",e}return Object(i["a"])(n,[{key:"readDoc",value:function(){var e=this;window.postMessage("readDoc","a").then((function(t){e.docDatas=t}))}},{key:"writeDoc",value:function(){window.postMessage("writeDoc",1,2,3)}}]),n}(p["b"]);d=Object(l["a"])([Object(p["a"])({components:{}})],d);var b=d;n("40cf");b.render=a;var v=b,O=n("5502"),j=Object(O["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["a"])(v).use(j).mount("#app")}});