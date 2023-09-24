// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,b=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,_=/\.0$/,g=/\.0*e/,w=/(\..*[^0])0*e/;function h(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,g,"e"),n=p.call(n,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function j(r,t,e){var n=t-r.length;return n<0?r:r=e?r+m(n):m(n)+r}var A=String.fromCharCode,E=isNaN,O=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function S(r){var t,e,n,i,a,f,l,s,p;if(!O(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",l=1,s=0;s<r.length;s++)if(c(n=r[s]))f+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=h(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=j(n.arg,n.width,n.padRight)),f+=n.arg||"",l+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(P(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function V(r){return"string"==typeof r}function k(r){var t,e,n;if(!V(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return S.apply(null,e)}var N,U=Object.prototype,B=U.toString,G=U.__defineGetter__,I=U.__defineSetter__,C=U.__lookupGetter__,L=U.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===B.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===B.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(C.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=U,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&I&&I.call(r,t,e.set),r};var M=N;function R(r,t,e){M(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var $=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function z(r,t){return null!=r&&Y.call(r,t)}var q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",J=X()?function(r){var t,e,n;if(null==r)return Z.call(r);e=r[D],t=z(r,D);try{r[D]=void 0}catch(t){return Z.call(r)}return n=Z.call(r),t?r[D]=e:delete r[D],n}:function(r){return Z.call(r)},K=Boolean,Q=Boolean.prototype.toString,rr=X();function tr(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function er(r){return H(r)||tr(r)}function nr(){return new Function("return this;")()}R(er,"isPrimitive",H),R(er,"isObject",tr);var or="object"==typeof self?self:null,ir="object"==typeof window?window:null,ar="object"==typeof globalThis?globalThis:null,ur=function(r){if(arguments.length){if(!H(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ar)return ar;if(or)return or;if(ir)return ir;throw new Error("unexpected error. Unable to resolve global object.")}(),cr=ur.document&&ur.document.childNodes,fr=Int8Array;function lr(){return/^\s*function\s*([^(]*)/i}var sr,pr=/^\s*function\s*([^(]*)/i;R(lr,"REGEXP",pr),sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===J(r)};var yr=sr;function br(r){return null!==r&&"object"==typeof r}var dr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(br);function vr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=pr.exec(n.toString()))return t[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}R(br,"isObjectLikeArray",dr);var _r="function"==typeof $||"object"==typeof fr||"function"==typeof cr?function(r){return vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?vr(r).toLowerCase():t};function gr(r){return"function"===_r(r)}var wr,hr=/./,mr="function"==typeof Object.defineProperty?Object.defineProperty:null,jr=Object.defineProperty,Ar=Object.prototype,Er=Ar.toString,Or=Ar.__defineGetter__,Fr=Ar.__defineSetter__,Sr=Ar.__lookupGetter__,Tr=Ar.__lookupSetter__;wr=function(){try{return mr({},"x",{}),!0}catch(r){return!1}}()?jr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Er.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Er.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Sr.call(r,t)||Tr.call(r,t)?(n=r.__proto__,r.__proto__=Ar,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Or&&Or.call(r,t,e.get),a&&Fr&&Fr.call(r,t,e.set),r};var Pr=wr;function xr(r,t,e){Pr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Vr(r){return"boolean"==typeof r}var kr=Boolean.prototype.toString,Nr=X();function Ur(r){return"object"==typeof r&&(r instanceof K||(Nr?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function Br(r){return Vr(r)||Ur(r)}function Gr(){return new Function("return this;")()}xr(Br,"isPrimitive",Vr),xr(Br,"isObject",Ur);var Ir="object"==typeof self?self:null,Cr="object"==typeof window?window:null,Lr="object"==typeof globalThis?globalThis:null,Mr=function(r){if(arguments.length){if(!Vr(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Gr()}if(Lr)return Lr;if(Ir)return Ir;if(Cr)return Cr;throw new Error("unexpected error. Unable to resolve global object.")}(),Rr=Mr.document&&Mr.document.childNodes,$r=Int8Array;function Hr(){return/^\s*function\s*([^(]*)/i}var Wr=/^\s*function\s*([^(]*)/i;function Xr(r){return null!==r&&"object"==typeof r}xr(Hr,"REGEXP",Wr);var Zr=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Xr);function Yr(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Wr.exec(n.toString()))return t[1]}return Xr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}xr(Xr,"isObjectLikeArray",Zr);var zr="function"==typeof hr||"object"==typeof $r||"function"==typeof Rr?function(r){return Yr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?Yr(r).toLowerCase():t};function qr(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&function(r){return"function"===zr(r)}(r.next)}var Dr,Jr="function"==typeof Object.defineProperty?Object.defineProperty:null,Kr=Object.defineProperty,Qr=Object.prototype,rt=Qr.toString,tt=Qr.__defineGetter__,et=Qr.__defineSetter__,nt=Qr.__lookupGetter__,ot=Qr.__lookupSetter__;Dr=function(){try{return Jr({},"x",{}),!0}catch(r){return!1}}()?Kr:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===rt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===rt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(nt.call(r,t)||ot.call(r,t)?(n=r.__proto__,r.__proto__=Qr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&tt&&tt.call(r,t,e.get),a&&et&&et.call(r,t,e.set),r};var it=Dr;function at(r,t,e){it(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function ut(r){return"number"==typeof r}var ct=Number,ft=ct.prototype.toString,lt=X();function st(r){return"object"==typeof r&&(r instanceof ct||(lt?function(r){try{return ft.call(r),!0}catch(r){return!1}}(r):"[object Number]"===J(r)))}function pt(r){return ut(r)||st(r)}at(pt,"isPrimitive",ut),at(pt,"isObject",st);var yt,bt="function"==typeof q&&"symbol"==typeof q("foo")&&z(q,"iterator")&&"symbol"==typeof q.iterator?Symbol.iterator:null,dt=/./,vt="function"==typeof Object.defineProperty?Object.defineProperty:null,_t=Object.defineProperty,gt=Object.prototype,wt=gt.toString,ht=gt.__defineGetter__,mt=gt.__defineSetter__,jt=gt.__lookupGetter__,At=gt.__lookupSetter__;yt=function(){try{return vt({},"x",{}),!0}catch(r){return!1}}()?_t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===wt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===wt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(jt.call(r,t)||At.call(r,t)?(n=r.__proto__,r.__proto__=gt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ht&&ht.call(r,t,e.get),a&&mt&&mt.call(r,t,e.set),r};var Et=yt;function Ot(r,t,e){Et(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ft(r){return"boolean"==typeof r}var St=Boolean.prototype.toString,Tt=X();function Pt(r){return"object"==typeof r&&(r instanceof K||(Tt?function(r){try{return St.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function xt(r){return Ft(r)||Pt(r)}function Vt(){return new Function("return this;")()}Ot(xt,"isPrimitive",Ft),Ot(xt,"isObject",Pt);var kt="object"==typeof self?self:null,Nt="object"==typeof window?window:null,Ut="object"==typeof globalThis?globalThis:null,Bt=function(r){if(arguments.length){if(!Ft(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Vt()}if(Ut)return Ut;if(kt)return kt;if(Nt)return Nt;throw new Error("unexpected error. Unable to resolve global object.")}(),Gt=Bt.document&&Bt.document.childNodes,It=Int8Array;function Ct(){return/^\s*function\s*([^(]*)/i}var Lt=/^\s*function\s*([^(]*)/i;function Mt(r){return null!==r&&"object"==typeof r}Ot(Ct,"REGEXP",Lt);var Rt=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Mt);function $t(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Lt.exec(n.toString()))return t[1]}return Mt(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}Ot(Mt,"isObjectLikeArray",Rt);var Ht="function"==typeof dt||"object"==typeof It||"function"==typeof Gt?function(r){return $t(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?$t(r).toLowerCase():t};function Wt(r){return"function"===Ht(r)}var Xt,Zt=Object,Yt=/./,zt="function"==typeof Object.defineProperty?Object.defineProperty:null,qt=Object.defineProperty,Dt=Object.prototype,Jt=Dt.toString,Kt=Dt.__defineGetter__,Qt=Dt.__defineSetter__,re=Dt.__lookupGetter__,te=Dt.__lookupSetter__;Xt=function(){try{return zt({},"x",{}),!0}catch(r){return!1}}()?qt:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Jt.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Jt.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(re.call(r,t)||te.call(r,t)?(n=r.__proto__,r.__proto__=Dt,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&Kt&&Kt.call(r,t,e.get),a&&Qt&&Qt.call(r,t,e.set),r};var ee=Xt;function ne(r,t,e){ee(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function oe(r){return"boolean"==typeof r}var ie=Boolean.prototype.toString,ae=X();function ue(r){return"object"==typeof r&&(r instanceof K||(ae?function(r){try{return ie.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===J(r)))}function ce(r){return oe(r)||ue(r)}function fe(){return new Function("return this;")()}ne(ce,"isPrimitive",oe),ne(ce,"isObject",ue);var le="object"==typeof self?self:null,se="object"==typeof window?window:null,pe="object"==typeof globalThis?globalThis:null,ye=function(r){if(arguments.length){if(!oe(r))throw new TypeError(k("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return fe()}if(pe)return pe;if(le)return le;if(se)return se;throw new Error("unexpected error. Unable to resolve global object.")}(),be=ye.document&&ye.document.childNodes,de=Int8Array;function ve(){return/^\s*function\s*([^(]*)/i}var _e=/^\s*function\s*([^(]*)/i;function ge(r){return null!==r&&"object"==typeof r}ne(ve,"REGEXP",_e);var we=function(r){if("function"!=typeof r)throw new TypeError(k("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!yr(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(ge);function he(r){var t,e,n,o;if(("Object"===(e=J(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=_e.exec(n.toString()))return t[1]}return ge(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}ne(ge,"isObjectLikeArray",we);var me,je,Ae="function"==typeof Yt||"object"==typeof de||"function"==typeof be?function(r){return he(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"==(t=typeof r)?he(r).toLowerCase():t},Ee=Object.getPrototypeOf;je=Object.getPrototypeOf,me="function"===Ae(je)?Ee:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===J(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Oe=me,Fe=Object.prototype;function Se(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!yr(r)}(r)&&(t=function(r){return null==r?null:(r=Zt(r),Oe(r))}(r),!t||!z(r,"constructor")&&z(t,"constructor")&&Wt(t.constructor)&&"[object Function]"===J(t.constructor)&&z(t,"isPrototypeOf")&&Wt(t.isPrototypeOf)&&(t===Fe||function(r){var t;for(t in r)if(!z(r,t))return!1;return!0}(r)))}function Te(r,t){return Se(t)?(z(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError(k("invalid argument. Options argument must be an object. Value: `%s`.",t))}function Pe(r,t,e){var n,o,i,a;if(!qr(r))throw new TypeError(k("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!gr(t))throw new TypeError(k("invalid argument. Second argument must be a function. Value: `%s`.",t));if(n={invalid:NaN},arguments.length>2&&(i=Te(n,e)))throw i;return R(o={},"next",u),R(o,"return",c),bt&&gr(r[bt])&&R(o,bt,f),o;function u(){var e;return a?{done:!0}:(e=r.next()).done?(a=!0,e):{value:ut(e.value)?t(e.value):n.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Pe(r[bt](),t,n)}}var xe,Ve=2147483647,ke=2146435072,Ne="function"==typeof Uint32Array,Ue="function"==typeof Uint32Array?Uint32Array:null,Be="function"==typeof Uint32Array?Uint32Array:void 0;xe=function(){var r,t;if("function"!=typeof Ue)return!1;try{r=function(r){return Ne&&r instanceof Uint32Array||"[object Uint32Array]"===J(r)}(t=new Ue(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Be:function(){throw new Error("not implemented")};var Ge,Ie=xe,Ce="function"==typeof Float64Array,Le="function"==typeof Float64Array?Float64Array:null,Me="function"==typeof Float64Array?Float64Array:void 0;Ge=function(){var r,t;if("function"!=typeof Le)return!1;try{r=function(r){return Ce&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Le([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Me:function(){throw new Error("not implemented")};var Re,$e=Ge,He="function"==typeof Uint8Array,We="function"==typeof Uint8Array?Uint8Array:null,Xe="function"==typeof Uint8Array?Uint8Array:void 0;Re=function(){var r,t;if("function"!=typeof We)return!1;try{r=function(r){return He&&r instanceof Uint8Array||"[object Uint8Array]"===J(r)}(t=new We(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Xe:function(){throw new Error("not implemented")};var Ze,Ye=Re,ze="function"==typeof Uint16Array,qe="function"==typeof Uint16Array?Uint16Array:null,De="function"==typeof Uint16Array?Uint16Array:void 0;Ze=function(){var r,t;if("function"!=typeof qe)return!1;try{r=function(r){return ze&&r instanceof Uint16Array||"[object Uint16Array]"===J(r)}(t=new qe(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?De:function(){throw new Error("not implemented")};var Je,Ke={uint16:Ze,uint8:Ye};(Je=new Ke.uint16(1))[0]=4660;var Qe=52===new Ke.uint8(Je.buffer)[0],rn=!0===Qe?1:0,tn=new $e(1),en=new Ie(tn.buffer);function nn(r){return tn[0]=r,en[rn]}function on(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var an=-.16666666666666632;function un(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(an+o*e):r-(o*(.5*t-n*e)-t-n*an)}var cn,fn="function"==typeof Float64Array,ln="function"==typeof Float64Array?Float64Array:null,sn="function"==typeof Float64Array?Float64Array:void 0;cn=function(){var r,t;if("function"!=typeof ln)return!1;try{r=function(r){return fn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new ln([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sn:function(){throw new Error("not implemented")};var pn,yn,bn,dn=!0===Qe?0:1,vn=new cn(1),_n=new Ie(vn.buffer),gn="function"==typeof Float64Array,wn="function"==typeof Float64Array?Float64Array:null,hn="function"==typeof Float64Array?Float64Array:void 0;pn=function(){var r,t;if("function"!=typeof wn)return!1;try{r=function(r){return gn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new wn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?hn:function(){throw new Error("not implemented")},!0===Qe?(yn=1,bn=0):(yn=0,bn=1);var mn={HIGH:yn,LOW:bn},jn=new pn(1),An=new Ie(jn.buffer),En=mn.HIGH,On=mn.LOW;function Fn(r,t){return An[En]=r,An[On]=t,jn[0]}var Sn=Math.floor,Tn=Number.POSITIVE_INFINITY,Pn=ct.NEGATIVE_INFINITY;function xn(r){return r!=r}function Vn(r){return r===Tn||r===Pn}var kn,Nn="function"==typeof Object.defineProperty?Object.defineProperty:null,Un=Object.defineProperty,Bn=Object.prototype,Gn=Bn.toString,In=Bn.__defineGetter__,Cn=Bn.__defineSetter__,Ln=Bn.__lookupGetter__,Mn=Bn.__lookupSetter__;kn=function(){try{return Nn({},"x",{}),!0}catch(r){return!1}}()?Un:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===Gn.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===Gn.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Ln.call(r,t)||Mn.call(r,t)?(n=r.__proto__,r.__proto__=Bn,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&In&&In.call(r,t,e.get),a&&Cn&&Cn.call(r,t,e.set),r};var Rn,$n,Hn,Wn=kn,Xn="function"==typeof Float64Array,Zn="function"==typeof Float64Array?Float64Array:null,Yn="function"==typeof Float64Array?Float64Array:void 0;Rn=function(){var r,t;if("function"!=typeof Zn)return!1;try{r=function(r){return Xn&&r instanceof Float64Array||"[object Float64Array]"===J(r)}(t=new Zn([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Yn:function(){throw new Error("not implemented")},!0===Qe?($n=1,Hn=0):($n=0,Hn=1);var zn={HIGH:$n,LOW:Hn},qn=new Rn(1),Dn=new Ie(qn.buffer),Jn=zn.HIGH,Kn=zn.LOW;function Qn(r,t,e,n){return qn[0]=r,t[n]=Dn[Jn],t[n+e]=Dn[Kn],t}function ro(r){return Qn(r,[0,0],1,0)}!function(r,t,e){Wn(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}(ro,"assign",Qn);var to,eo=[0,0],no="function"==typeof Object.defineProperty?Object.defineProperty:null,oo=Object.defineProperty,io=Object.prototype,ao=io.toString,uo=io.__defineGetter__,co=io.__defineSetter__,fo=io.__lookupGetter__,lo=io.__lookupSetter__;to=function(){try{return no({},"x",{}),!0}catch(r){return!1}}()?oo:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===ao.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===ao.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(fo.call(r,t)||lo.call(r,t)?(n=r.__proto__,r.__proto__=io,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&uo&&uo.call(r,t,e.get),a&&co&&co.call(r,t,e.set),r};var so=to;function po(r,t,e,n){return xn(r)||Vn(r)?(t[n]=r,t[n+e]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}!function(r,t,e){so(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}((function(r){return po(r,[0,0],1,0)}),"assign",po);var yo=[0,0],bo=[0,0];function vo(r,t){var e,n,o,i,a,u;return 0===t||0===r||xn(r)||Vn(r)?r:(po(r,yo,1,0),t+=yo[1],t+=function(r){var t=nn(r);return(t=(t&ke)>>>20)-1023|0}(r=yo[0]),t<-1074?(o=0,i=r,ro.assign(o,eo,1,0),a=eo[0],a&=Ve,u=nn(i),Fn(a|=u&=2147483648,eo[1])):t>1023?r<0?Pn:Tn:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,ro.assign(r,bo,1,0),e=bo[0],e&=2148532223,n*Fn(e|=t+1023<<20,bo[1])))}function _o(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var go=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],wo=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ho=16777216,mo=5.960464477539063e-8,jo=_o(20),Ao=_o(20),Eo=_o(20),Oo=_o(20);function Fo(r,t,e,n,o,i,a,u,c){var f,l,s,p,y,b,d,v,_;for(p=i,_=n[e],v=e,y=0;v>0;y++)l=mo*_|0,Oo[y]=_-ho*l|0,_=n[v-1]+l,v-=1;if(_=vo(_,o),_-=8*Sn(.125*_),_-=d=0|_,s=0,o>0?(d+=y=Oo[e-1]>>24-o,Oo[e-1]-=y<<24-o,s=Oo[e-1]>>23-o):0===o?s=Oo[e-1]>>23:_>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<e;y++)v=Oo[y],0===f?0!==v&&(f=1,Oo[y]=16777216-v):Oo[y]=16777215-v;if(o>0)switch(o){case 1:Oo[e-1]&=8388607;break;case 2:Oo[e-1]&=4194303}2===s&&(_=1-_,0!==f&&(_-=vo(1,o)))}if(0===_){for(v=0,y=e-1;y>=i;y--)v|=Oo[y];if(0===v){for(b=1;0===Oo[i-b];b++);for(y=e+1;y<=e+b;y++){for(c[u+y]=go[a+y],l=0,v=0;v<=u;v++)l+=r[v]*c[u+(y-v)];n[y]=l}return Fo(r,t,e+=b,n,o,i,a,u,c)}}if(0===_)for(e-=1,o-=24;0===Oo[e];)e-=1,o-=24;else(_=vo(_,-o))>=ho?(l=mo*_|0,Oo[e]=_-ho*l|0,o+=24,Oo[e+=1]=l):Oo[e]=0|_;for(l=vo(1,o),y=e;y>=0;y--)n[y]=l*Oo[y],l*=mo;for(y=e;y>=0;y--){for(l=0,b=0;b<=p&&b<=e-y;b++)l+=wo[b]*n[y+b];Eo[e-y]=l}for(l=0,y=e;y>=0;y--)l+=Eo[y];for(t[0]=0===s?l:-l,l=Eo[0]-l,y=1;y<=e;y++)l+=Eo[y];return t[1]=0===s?l:-l,7&d}function So(r,t,e,n){var o,i,a,u,c,f,l;for((i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)jo[c]=f<0?0:go[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*jo[a+(c-f)];Ao[c]=o}return Fo(r,t,4,Ao,u,4,i,a,jo)}var To=Math.round;function Po(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=To(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(nn(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(nn(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var xo=1.5707963267341256,Vo=6077100506506192e-26,ko=2*Vo,No=3*Vo,Uo=4*Vo,Bo=[0,0,0],Go=[0,0];function Io(r,t){var e,n,o,i,a,u,c;if((o=nn(r)&Ve|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Po(r,o,t):o<=1073928572?r>0?(c=r-xo,t[0]=c-Vo,t[1]=c-t[0]-Vo,1):(c=r+xo,t[0]=c+Vo,t[1]=c-t[0]+Vo,-1):r>0?(c=r-2*xo,t[0]=c-ko,t[1]=c-t[0]-ko,2):(c=r+2*xo,t[0]=c+ko,t[1]=c-t[0]+ko,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Po(r,o,t):r>0?(c=r-3*xo,t[0]=c-No,t[1]=c-t[0]-No,3):(c=r+3*xo,t[0]=c+No,t[1]=c-t[0]+No,-3):1075388923===o?Po(r,o,t):r>0?(c=r-4*xo,t[0]=c-Uo,t[1]=c-t[0]-Uo,4):(c=r+4*xo,t[0]=c+Uo,t[1]=c-t[0]+Uo,-4);if(o<1094263291)return Po(r,o,t);if(o>=ke)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return vn[0]=r,_n[dn]}(r),c=Fn(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)Bo[a]=0|c,c=16777216*(c-Bo[a]);for(Bo[2]=c,i=3;0===Bo[i-1];)i-=1;return u=So(Bo,Go,n,i),r<0?(t[0]=-Go[0],t[1]=-Go[1],-u):(t[0]=Go[0],t[1]=Go[1],u)}var Co=[0,0];function Lo(r){var t;if(t=nn(r),(t&=Ve)<=1072243195)return t<1045430272?r:un(r,0);if(t>=ke)return NaN;switch(3&Io(r,Co)){case 0:return un(Co[0],Co[1]);case 1:return on(Co[0],Co[1]);case 2:return-un(Co[0],Co[1]);default:return-on(Co[0],Co[1])}}return function(r){return Pe(r,Lo)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSin=t();
//# sourceMappingURL=browser.js.map
