// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){var t=r.default;if("function"==typeof t){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(r).forEach((function(t){var e=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:function(){return r[t]}})})),n}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var h=function(r){return g.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,N=_;var P=h,F=function(r){var t,n,e;if(null==r)return N.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return N.call(r)}return e=N.call(r),t?r[S]=n:delete r[S],e},I=j()?F:P,T=Boolean.prototype.toString;var G=I,V=function(r){try{return T.call(r),!0}catch(r){return!1}},x=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(x?V(r):"[object Boolean]"===G(r)))},B=m,L=H;var M=s,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;s(fr,"REGEXP",ar());var cr=fr,lr=I;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=I,dr=cr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},hr=function(r){return _r(r).toLowerCase()},Ar=ir()?hr:gr;var Or=function(r){return"function"===Ar(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Nr=Number,Pr=Nr.prototype.toString;var Fr=I,Ir=Nr,Tr=function(r){try{return Pr.call(r),!0}catch(r){return!1}},Gr=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Ir||(Gr?Tr(r):"[object Number]"===Fr(r)))},xr=Sr,Hr=Vr;var Br=s,Lr=function(r){return xr(r)||Hr(r)},Mr=Vr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=I,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=I,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=s,ct=Or,lt=Ur,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},st=bt,dt=I,mt="function"==typeof Uint32Array;var wt="function"==typeof Uint32Array?Uint32Array:null,jt=function(r){return mt&&r instanceof Uint32Array||"[object Uint32Array]"===dt(r)},_t=wt;var gt=function(){var r,t;if("function"!=typeof _t)return!1;try{t=new _t(t=[1,3.14,-3.14,4294967296,4294967297]),r=jt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ht="function"==typeof Uint32Array?Uint32Array:void 0,At=function(){throw new Error("not implemented")},Ot=gt()?ht:At,Et=I,Ut="function"==typeof Float64Array;var St="function"==typeof Float64Array?Float64Array:null,Nt=function(r){return Ut&&r instanceof Float64Array||"[object Float64Array]"===Et(r)},Pt=St;var Ft=function(){var r,t;if("function"!=typeof Pt)return!1;try{t=new Pt([1,3.14,-3.14,NaN]),r=Nt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var It="function"==typeof Float64Array?Float64Array:void 0,Tt=function(){throw new Error("not implemented")},Gt=Ft()?It:Tt,Vt=I,xt="function"==typeof Uint8Array;var Ht="function"==typeof Uint8Array?Uint8Array:null,Bt=function(r){return xt&&r instanceof Uint8Array||"[object Uint8Array]"===Vt(r)},Lt=Ht;var Mt=function(){var r,t;if("function"!=typeof Lt)return!1;try{t=new Lt(t=[1,3.14,-3.14,256,257]),r=Bt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var kt="function"==typeof Uint8Array?Uint8Array:void 0,Wt=function(){throw new Error("not implemented")},Ct=Mt()?kt:Wt,Rt=I,Xt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null,zt=function(r){return Xt&&r instanceof Uint16Array||"[object Uint16Array]"===Rt(r)},Dt=Yt;var qt=function(){var r,t;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,65536,65537]),r=zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0,Qt=function(){throw new Error("not implemented")},Zt={uint16:qt()?Kt:Qt,uint8:Ct};(Jt=new Zt.uint16(1))[0]=4660;var $t=52===new Zt.uint8(Jt.buffer)[0],rn=Ot,tn=!0===$t?1:0,nn=new Gt(1),en=new rn(nn.buffer);var on=function(r){return nn[0]=r,en[tn]};var un=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},an=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var fn=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*un(u),e+=o*o*an(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},cn=-.16666666666666632;var ln=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(cn+o*n):r-(o*(.5*t-e*n)-t-e*cn)},vn=Ot,yn=!0===$t?0:1,pn=new Gt(1),bn=new vn(pn.buffer);var sn,dn,mn=function(r){return pn[0]=r,bn[yn]};!0===$t?(sn=1,dn=0):(sn=0,dn=1);var wn=Ot,jn={HIGH:sn,LOW:dn},_n=new Gt(1),gn=new wn(_n.buffer),hn=jn.HIGH,An=jn.LOW;var On=function(r,t){return gn[hn]=r,gn[An]=t,_n[0]},En=On,Un=Math.floor,Sn=Number.POSITIVE_INFINITY,Nn=Nr.NEGATIVE_INFINITY;var Pn=function(r){return r!=r},Fn=Sn,In=Nn;var Tn,Gn,Vn=function(r){return r===Fn||r===In};!0===$t?(Tn=1,Gn=0):(Tn=0,Gn=1);var xn=Ot,Hn={HIGH:Tn,LOW:Gn},Bn=new Gt(1),Ln=new xn(Bn.buffer),Mn=Hn.HIGH,kn=Hn.LOW;var Wn=function(r,t){return Bn[0]=t,r[0]=Ln[Mn],r[1]=Ln[kn],r};var Cn=function(r,t){return 1===arguments.length?Wn([0,0],r):Wn(r,t)},Rn=Cn,Xn=on,Yn=En,zn=[0,0];var Dn=Vn,qn=Pn,Jn=function(r){return Math.abs(r)};var Kn=function(r,t){return qn(t)||Dn(t)?(r[0]=t,r[1]=0,r):0!==t&&Jn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var Qn=on;var Zn=function(r){var t=Qn(r);return(t=(2146435072&t)>>>20)-1023|0},$n=Sn,re=Nn,te=Pn,ne=Vn,ee=function(r,t){var n,e;return Rn(zn,r),n=zn[0],n&=2147483647,e=Xn(t),Yn(n|=e&=2147483648,zn[1])},oe=function(r,t){return 1===arguments.length?Kn([0,0],r):Kn(r,t)},ue=Zn,ie=Cn,ae=En,fe=[0,0],ce=[0,0];var le=function(r,t){var n,e;return 0===t||0===r||te(r)||ne(r)?r:(oe(fe,r),t+=fe[1],(t+=ue(r=fe[0]))<-1074?ee(0,r):t>1023?r<0?re:$n:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ie(ce,r),n=ce[0],n&=2148532223,e*ae(n|=t+1023<<20,ce[1])))};var ve=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var ye=Un,pe=le,be=function(r){return ve(0,r)},se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],me=5.960464477539063e-8,we=be(20),je=be(20),_e=be(20),ge=be(20);function he(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,b,s,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=me*m|0,ge[p]=m-16777216*l|0,m=e[d-1]+l,d-=1;if(m=pe(m,o),m-=8*ye(.125*m),m-=s=0|m,v=0,o>0?(s+=p=ge[n-1]>>24-o,ge[n-1]-=p<<24-o,v=ge[n-1]>>23-o):0===o?v=ge[n-1]>>23:m>=.5&&(v=2),v>0){for(s+=1,c=0,p=0;p<n;p++)d=ge[p],0===c?0!==d&&(c=1,ge[p]=16777216-d):ge[p]=16777215-d;if(o>0)switch(o){case 1:ge[n-1]&=8388607;break;case 2:ge[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=pe(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=ge[p];if(0===d){for(b=1;0===ge[u-b];b++);for(p=n+1;p<=n+b;p++){for(f[a+p]=se[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return he(r,t,n+=b,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===ge[n];)n-=1,o-=24;else(m=pe(m,-o))>=16777216?(l=me*m|0,ge[n]=m-16777216*l|0,o+=24,ge[n+=1]=l):ge[n]=0|m;for(l=pe(1,o),p=n;p>=0;p--)e[p]=l*ge[p],l*=me;for(p=n;p>=0;p--){for(l=0,b=0;b<=y&&b<=n-p;b++)l+=de[b]*e[p+b];_e[n-p]=l}for(l=0,p=n;p>=0;p--)l+=_e[p];for(t[0]=0===v?l:-l,l=_e[0]-l,p=1;p<=n;p++)l+=_e[p];return t[1]=0===v?l:-l,7&s}var Ae=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)we[f]=c<0?0:se[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*we[i+(f-c)];je[f]=o}return 4,he(r,t,4,je,a,4,u,i,we)},Oe=Math.round,Ee=on;var Ue=on,Se=mn,Ne=En,Pe=Ae,Fe=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Oe(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Ee(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Ee(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Ie=1.5707963267341256,Te=6077100506506192e-26,Ge=2*Te,Ve=4*Te,xe=[0,0,0],He=[0,0];var Be=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Ue(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fe(r,o,t):o<=1073928572?r>0?(f=r-Ie,t[0]=f-Te,t[1]=f-t[0]-Te,1):(f=r+Ie,t[0]=f+Te,t[1]=f-t[0]+Te,-1):r>0?(f=r-2*Ie,t[0]=f-Ge,t[1]=f-t[0]-Ge,2):(f=r+2*Ie,t[0]=f+Ge,t[1]=f-t[0]+Ge,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fe(r,o,t):r>0?(f=r-3*Ie,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Ie,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Fe(r,o,t):r>0?(f=r-4*Ie,t[0]=f-Ve,t[1]=f-t[0]-Ve,4):(f=r+4*Ie,t[0]=f+Ve,t[1]=f-t[0]+Ve,-4);if(o<1094263291)return Fe(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Se(r),f=Ne(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)xe[i]=0|f,f=16777216*(f-xe[i]);for(xe[2]=f,u=3;0===xe[u-1];)u-=1;return a=Pe(xe,He,e,u),r<0?(t[0]=-He[0],t[1]=-He[1],-a):(t[0]=He[0],t[1]=He[1],a)},Le=on,Me=fn,ke=ln,We=Be,Ce=[0,0];var Re=function(r){var t;if(t=Le(r),(t&=2147483647)<=1072243195)return t<1045430272?r:ke(r,0);if(t>=2146435072)return NaN;switch(3&We(r,Ce)){case 0:return ke(Ce[0],Ce[1]);case 1:return Me(Ce[0],Ce[1]);case 2:return-ke(Ce[0],Ce[1]);default:return-Me(Ce[0],Ce[1])}};function Xe(r){return st(r,Re)}export{Xe as default};
//# sourceMappingURL=mod.js.map
