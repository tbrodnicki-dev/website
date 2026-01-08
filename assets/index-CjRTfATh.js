(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function Ky(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var zd={exports:{}},Jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F_;function Qy(){if(F_)return Jo;F_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var c=null;if(u!==void 0&&(c=""+u),o.key!==void 0&&(c=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:c,ref:o!==void 0?o:null,props:u}}return Jo.Fragment=e,Jo.jsx=n,Jo.jsxs=n,Jo}var B_;function $y(){return B_||(B_=1,zd.exports=Qy()),zd.exports}var $e=$y(),Hd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function Jy(){if(z_)return ct;z_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function M(I,Z,re){this.props=I,this.context=Z,this.refs=b,this.updater=re||S}M.prototype.isReactComponent={},M.prototype.setState=function(I,Z){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Z,"setState")},M.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function x(){}x.prototype=M.prototype;function U(I,Z,re){this.props=I,this.context=Z,this.refs=b,this.updater=re||S}var R=U.prototype=new x;R.constructor=U,y(R,M.prototype),R.isPureReactComponent=!0;var P=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},B=Object.prototype.hasOwnProperty;function O(I,Z,re,pe,Re,He){return re=He.ref,{$$typeof:a,type:I,key:Z,ref:re!==void 0?re:null,props:He}}function W(I,Z){return O(I.type,Z,void 0,void 0,void 0,I.props)}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===a}function L(I){var Z={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(re){return Z[re]})}var H=/\/+/g;function j(I,Z){return typeof I=="object"&&I!==null&&I.key!=null?L(""+I.key):Z.toString(36)}function Y(){}function ae(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(Y,Y):(I.status="pending",I.then(function(Z){I.status==="pending"&&(I.status="fulfilled",I.value=Z)},function(Z){I.status==="pending"&&(I.status="rejected",I.reason=Z)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function ee(I,Z,re,pe,Re){var He=typeof I;(He==="undefined"||He==="boolean")&&(I=null);var te=!1;if(I===null)te=!0;else switch(He){case"bigint":case"string":case"number":te=!0;break;case"object":switch(I.$$typeof){case a:case e:te=!0;break;case g:return te=I._init,ee(te(I._payload),Z,re,pe,Re)}}if(te)return Re=Re(I),te=pe===""?"."+j(I,0):pe,P(Re)?(re="",te!=null&&(re=te.replace(H,"$&/")+"/"),ee(Re,Z,re,"",function(Je){return Je})):Re!=null&&(C(Re)&&(Re=W(Re,re+(Re.key==null||I&&I.key===Re.key?"":(""+Re.key).replace(H,"$&/")+"/")+te)),Z.push(Re)),1;te=0;var ve=pe===""?".":pe+":";if(P(I))for(var Te=0;Te<I.length;Te++)pe=I[Te],He=ve+j(pe,Te),te+=ee(pe,Z,re,He,Re);else if(Te=v(I),typeof Te=="function")for(I=Te.call(I),Te=0;!(pe=I.next()).done;)pe=pe.value,He=ve+j(pe,Te++),te+=ee(pe,Z,re,He,Re);else if(He==="object"){if(typeof I.then=="function")return ee(ae(I),Z,re,pe,Re);throw Z=String(I),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return te}function z(I,Z,re){if(I==null)return I;var pe=[],Re=0;return ee(I,pe,"","",function(He){return Z.call(re,He,Re++)}),pe}function V(I){if(I._status===-1){var Z=I._result;Z=Z(),Z.then(function(re){(I._status===0||I._status===-1)&&(I._status=1,I._result=re)},function(re){(I._status===0||I._status===-1)&&(I._status=2,I._result=re)}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var k=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function de(){}return ct.Children={map:z,forEach:function(I,Z,re){z(I,function(){Z.apply(this,arguments)},re)},count:function(I){var Z=0;return z(I,function(){Z++}),Z},toArray:function(I){return z(I,function(Z){return Z})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ct.Component=M,ct.Fragment=n,ct.Profiler=o,ct.PureComponent=U,ct.StrictMode=r,ct.Suspense=p,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ct.__COMPILER_RUNTIME={__proto__:null,c:function(I){return N.H.useMemoCache(I)}},ct.cache=function(I){return function(){return I.apply(null,arguments)}},ct.cloneElement=function(I,Z,re){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var pe=y({},I.props),Re=I.key,He=void 0;if(Z!=null)for(te in Z.ref!==void 0&&(He=void 0),Z.key!==void 0&&(Re=""+Z.key),Z)!B.call(Z,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Z.ref===void 0||(pe[te]=Z[te]);var te=arguments.length-2;if(te===1)pe.children=re;else if(1<te){for(var ve=Array(te),Te=0;Te<te;Te++)ve[Te]=arguments[Te+2];pe.children=ve}return O(I.type,Re,void 0,void 0,He,pe)},ct.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},ct.createElement=function(I,Z,re){var pe,Re={},He=null;if(Z!=null)for(pe in Z.key!==void 0&&(He=""+Z.key),Z)B.call(Z,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Re[pe]=Z[pe]);var te=arguments.length-2;if(te===1)Re.children=re;else if(1<te){for(var ve=Array(te),Te=0;Te<te;Te++)ve[Te]=arguments[Te+2];Re.children=ve}if(I&&I.defaultProps)for(pe in te=I.defaultProps,te)Re[pe]===void 0&&(Re[pe]=te[pe]);return O(I,He,void 0,void 0,null,Re)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(I){return{$$typeof:d,render:I}},ct.isValidElement=C,ct.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:V}},ct.memo=function(I,Z){return{$$typeof:h,type:I,compare:Z===void 0?null:Z}},ct.startTransition=function(I){var Z=N.T,re={};N.T=re;try{var pe=I(),Re=N.S;Re!==null&&Re(re,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(de,k)}catch(He){k(He)}finally{N.T=Z}},ct.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ct.use=function(I){return N.H.use(I)},ct.useActionState=function(I,Z,re){return N.H.useActionState(I,Z,re)},ct.useCallback=function(I,Z){return N.H.useCallback(I,Z)},ct.useContext=function(I){return N.H.useContext(I)},ct.useDebugValue=function(){},ct.useDeferredValue=function(I,Z){return N.H.useDeferredValue(I,Z)},ct.useEffect=function(I,Z,re){var pe=N.H;if(typeof re=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return pe.useEffect(I,Z)},ct.useId=function(){return N.H.useId()},ct.useImperativeHandle=function(I,Z,re){return N.H.useImperativeHandle(I,Z,re)},ct.useInsertionEffect=function(I,Z){return N.H.useInsertionEffect(I,Z)},ct.useLayoutEffect=function(I,Z){return N.H.useLayoutEffect(I,Z)},ct.useMemo=function(I,Z){return N.H.useMemo(I,Z)},ct.useOptimistic=function(I,Z){return N.H.useOptimistic(I,Z)},ct.useReducer=function(I,Z,re){return N.H.useReducer(I,Z,re)},ct.useRef=function(I){return N.H.useRef(I)},ct.useState=function(I){return N.H.useState(I)},ct.useSyncExternalStore=function(I,Z,re){return N.H.useSyncExternalStore(I,Z,re)},ct.useTransition=function(){return N.H.useTransition()},ct.version="19.1.0",ct}var H_;function Np(){return H_||(H_=1,Hd.exports=Jy()),Hd.exports}var A=Np(),Vd={exports:{}},el={},Gd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V_;function eE(){return V_||(V_=1,function(a){function e(z,V){var k=z.length;z.push(V);e:for(;0<k;){var de=k-1>>>1,I=z[de];if(0<o(I,V))z[de]=V,z[k]=I,k=de;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],k=z.pop();if(k!==V){z[0]=k;e:for(var de=0,I=z.length,Z=I>>>1;de<Z;){var re=2*(de+1)-1,pe=z[re],Re=re+1,He=z[Re];if(0>o(pe,k))Re<I&&0>o(He,pe)?(z[de]=He,z[Re]=k,de=Re):(z[de]=pe,z[re]=k,de=re);else if(Re<I&&0>o(He,k))z[de]=He,z[Re]=k,de=Re;else break e}}return V}function o(z,V){var k=z.sortIndex-V.sortIndex;return k!==0?k:z.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();a.unstable_now=function(){return c.now()-d}}var p=[],h=[],g=1,_=null,v=3,S=!1,y=!1,b=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=z)r(h),V.sortIndex=V.expirationTime,e(p,V);else break;V=n(h)}}function N(z){if(b=!1,P(z),!y)if(n(p)!==null)y=!0,B||(B=!0,j());else{var V=n(h);V!==null&&ee(N,V.startTime-z)}}var B=!1,O=-1,W=5,C=-1;function L(){return M?!0:!(a.unstable_now()-C<W)}function H(){if(M=!1,B){var z=a.unstable_now();C=z;var V=!0;try{e:{y=!1,b&&(b=!1,U(O),O=-1),S=!0;var k=v;try{t:{for(P(z),_=n(p);_!==null&&!(_.expirationTime>z&&L());){var de=_.callback;if(typeof de=="function"){_.callback=null,v=_.priorityLevel;var I=de(_.expirationTime<=z);if(z=a.unstable_now(),typeof I=="function"){_.callback=I,P(z),V=!0;break t}_===n(p)&&r(p),P(z)}else r(p);_=n(p)}if(_!==null)V=!0;else{var Z=n(h);Z!==null&&ee(N,Z.startTime-z),V=!1}}break e}finally{_=null,v=k,S=!1}V=void 0}}finally{V?j():B=!1}}}var j;if(typeof R=="function")j=function(){R(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,ae=Y.port2;Y.port1.onmessage=H,j=function(){ae.postMessage(null)}}else j=function(){x(H,0)};function ee(z,V){O=x(function(){z(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var k=v;v=V;try{return z()}finally{v=k}},a.unstable_requestPaint=function(){M=!0},a.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=v;v=z;try{return V()}finally{v=k}},a.unstable_scheduleCallback=function(z,V,k){var de=a.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?de+k:de):k=de,z){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,z={id:g++,callback:V,priorityLevel:z,startTime:k,expirationTime:I,sortIndex:-1},k>de?(z.sortIndex=k,e(h,z),n(p)===null&&z===n(h)&&(b?(U(O),O=-1):b=!0,ee(N,k-de))):(z.sortIndex=I,e(p,z),y||S||(y=!0,B||(B=!0,j()))),z},a.unstable_shouldYield=L,a.unstable_wrapCallback=function(z){var V=v;return function(){var k=v;v=V;try{return z.apply(this,arguments)}finally{v=k}}}}(kd)),kd}var G_;function tE(){return G_||(G_=1,Gd.exports=eE()),Gd.exports}var Xd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function nE(){if(k_)return Nn;k_=1;var a=Np();function e(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:p,containerInfo:h,implementation:g}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(p,h,null,g)},Nn.flushSync=function(p){var h=c.T,g=r.p;try{if(c.T=null,r.p=2,p)return p()}finally{c.T=h,r.p=g,r.d.f()}},Nn.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(p,h))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(p)},Nn.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(p,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(p,h){if(typeof p=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,h){return p(h)},Nn.useFormState=function(p,h,g){return c.H.useFormState(p,h,g)},Nn.useFormStatus=function(){return c.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var X_;function fx(){if(X_)return Xd.exports;X_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Xd.exports=nE(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function iE(){if(W_)return el;W_=1;var a=tE(),e=Np(),n=fx();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function c(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function p(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return d(f),t;if(m===l)return d(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var E=!1,w=f.child;w;){if(w===s){E=!0,s=f,l=m;break}if(w===l){E=!0,l=f,s=m;break}w=w.sibling}if(!E){for(w=m.child;w;){if(w===s){E=!0,s=m,l=f;break}if(w===l){E=!0,l=m,s=f;break}w=w.sibling}if(!E)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function h(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=h(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var Y=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Y?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case y:return"Fragment";case M:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case B:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case R:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case P:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:ae(t.type)||"Memo";case W:i=t._payload,t=t._init;try{return ae(t(i))}catch{}}return null}var ee=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},de=[],I=-1;function Z(t){return{current:t}}function re(t){0>I||(t.current=de[I],de[I]=null,I--)}function pe(t,i){I++,de[I]=t.current,t.current=i}var Re=Z(null),He=Z(null),te=Z(null),ve=Z(null);function Te(t,i){switch(pe(te,i),pe(He,t),pe(Re,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?f_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=f_(i),t=d_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(Re),pe(Re,t)}function Je(){re(Re),re(He),re(te)}function Ge(t){t.memoizedState!==null&&pe(ve,t);var i=Re.current,s=d_(i,t.type);i!==s&&(pe(He,t),pe(Re,s))}function ht(t){He.current===t&&(re(Re),re(He)),ve.current===t&&(re(ve),Zo._currentValue=k)}var jt=Object.prototype.hasOwnProperty,pt=a.unstable_scheduleCallback,Mt=a.unstable_cancelCallback,yt=a.unstable_shouldYield,rt=a.unstable_requestPaint,At=a.unstable_now,X=a.unstable_getCurrentPriorityLevel,Yt=a.unstable_ImmediatePriority,Et=a.unstable_UserBlockingPriority,Ee=a.unstable_NormalPriority,we=a.unstable_LowPriority,F=a.unstable_IdlePriority,T=a.log,K=a.unstable_setDisableYieldValue,me=null,ge=null;function he(t){if(typeof T=="function"&&K(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(me,t)}catch{}}var Oe=Math.clz32?Math.clz32:Ke,Ae=Math.log,Xe=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Ae(t)/Xe|0)|0}var ye=256,De=4194304;function Ve(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,m=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var w=l&134217727;return w!==0?(l=w&~m,l!==0?f=Ve(l):(E&=w,E!==0?f=Ve(E):s||(s=w&~t,s!==0&&(f=Ve(s))))):(w=l&~m,w!==0?f=Ve(w):E!==0?f=Ve(E):s||(s=l&~t,s!==0&&(f=Ve(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Ue(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function lt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q(){var t=ye;return ye<<=1,(ye&4194048)===0&&(ye=256),t}function Ie(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Ce(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,i,s,l,f,m){var E=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var w=t.entanglements,G=t.expirationTimes,se=t.hiddenUpdates;for(s=E&~s;0<s;){var _e=31-Oe(s),Se=1<<_e;w[_e]=0,G[_e]=-1;var le=se[_e];if(le!==null)for(se[_e]=null,_e=0;_e<le.length;_e++){var ue=le[_e];ue!==null&&(ue.lane&=-536870913)}s&=~Se}l!==0&&Me(t,l,0),m!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=m&~(E&~i))}function Me(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Le(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:U_(t.type))}function oi(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var _n=Math.random().toString(36).slice(2),vn="__reactFiber$"+_n,Tn="__reactProps$"+_n,Pi="__reactContainer$"+_n,ao="__reactEvents$"+_n,wl="__reactListeners$"+_n,Dl="__reactHandles$"+_n,Oi="__reactResources$"+_n,Ji="__reactMarker$"+_n;function Jr(t){delete t[vn],delete t[Tn],delete t[ao],delete t[wl],delete t[Dl]}function ea(t){var i=t[vn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Pi]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=g_(t);t!==null;){if(s=t[vn])return s;t=g_(t)}return i}t=s,s=t.parentNode}return null}function xi(t){if(t=t[vn]||t[Pi]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Fa(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function Si(t){var i=t[Oi];return i||(i=t[Oi]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nn(t){t[Ji]=!0}var ro=new Set,Ul={};function ta(t,i){Ba(t,i),Ba(t+"Capture",i)}function Ba(t,i){for(Ul[t]=i,t=0;t<i.length;t++)ro.add(i[t])}var Fc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ll={},Nl={};function D(t){return jt.call(Nl,t)?!0:jt.call(Ll,t)?!1:Fc.test(t)?Nl[t]=!0:(Ll[t]=!0,!1)}function $(t,i,s){if(D(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ce(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function oe(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var ne,Ne;function ze(t){if(ne===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ne=i&&i[1]||"",Ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+t+Ne}var Pe=!1;function ke(t,i){if(!t||Pe)return"";Pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ue){var le=ue}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ue){le=ue}t.call(Se.prototype)}}else{try{throw Error()}catch(ue){le=ue}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ue){if(ue&&le&&typeof ue.stack=="string")return[ue.stack,le.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),E=m[0],w=m[1];if(E&&w){var G=E.split(`
`),se=w.split(`
`);for(f=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;f<se.length&&!se[f].includes("DetermineComponentFrameRoot");)f++;if(l===G.length||f===se.length)for(l=G.length-1,f=se.length-1;1<=l&&0<=f&&G[l]!==se[f];)f--;for(;1<=l&&0<=f;l--,f--)if(G[l]!==se[f]){if(l!==1||f!==1)do if(l--,f--,0>f||G[l]!==se[f]){var _e=`
`+G[l].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=l&&0<=f);break}}}finally{Pe=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ze(s):""}function Ze(t){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return ke(t.type,!1);case 11:return ke(t.type.render,!1);case 1:return ke(t.type,!0);case 31:return ze("Activity");default:return""}}function et(t){try{var i="";do i+=Ze(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function We(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function It(t){var i=ut(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,m=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,m.call(this,E)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Wt(t){t._valueTracker||(t._valueTracker=It(t))}function Kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ut(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qe=/[\n"\\]/g;function ot(t){return t.replace(Qe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xt(t,i,s,l,f,m,E,w){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),i!=null?E==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+We(i)):t.value!==""+We(i)&&(t.value=""+We(i)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),i!=null?Ii(t,E,We(i)):s!=null?Ii(t,E,We(s)):l!=null&&t.removeAttribute("value"),f==null&&m!=null&&(t.defaultChecked=!!m),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+We(w):t.removeAttribute("name")}function Un(t,i,s,l,f,m,E,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null))return;s=s!=null?""+We(s):"",i=i!=null?""+We(i):s,w||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=w?t.checked:!!l,t.defaultChecked=!!l,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Ii(t,i,s){i==="number"&&Dt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ln(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+We(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function za(t,i,s){if(i!=null&&(i=""+We(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+We(s):""}function Ft(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(ee(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=We(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function an(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Vn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function An(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&xn(t,f,l)}else for(var m in i)i.hasOwnProperty(m)&&xn(t,m,i[m])}function vr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pl(t){return jS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Bc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var es=null,ts=null;function hm(t){var i=xi(t);if(i&&(t=i.stateNode)){var s=t[Tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(xt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Tn]||null;if(!f)throw Error(r(90));xt(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Kt(l)}break e;case"textarea":za(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ln(t,!!s.multiple,i,!1)}}}var Hc=!1;function pm(t,i,s){if(Hc)return t(i,s);Hc=!0;try{var l=t(i);return l}finally{if(Hc=!1,(es!==null||ts!==null)&&(xu(),es&&(i=es,t=ts,ts=es=null,hm(i),t)))for(i=0;i<t.length;i++)hm(t[i])}}function so(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(ia)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Vc=!1}var Ha=null,Gc=null,Ol=null;function mm(){if(Ol)return Ol;var t,i=Gc,s=i.length,l,f="value"in Ha?Ha.value:Ha.textContent,m=f.length;for(t=0;t<s&&i[t]===f[t];t++);var E=s-t;for(l=1;l<=E&&i[s-l]===f[m-l];l++);return Ol=f.slice(t,1<l?1-l:void 0)}function Il(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Fl(){return!0}function gm(){return!1}function Gn(t){function i(s,l,f,m,E){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(s=t[w],this[w]=s?s(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Fl:gm,this.isPropagationStopped=gm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),i}var xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Gn(xr),lo=g({},xr,{view:0,detail:0}),KS=Gn(lo),kc,Xc,uo,zl=g({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==uo&&(uo&&t.type==="mousemove"?(kc=t.screenX-uo.screenX,Xc=t.screenY-uo.screenY):Xc=kc=0,uo=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),_m=Gn(zl),QS=g({},zl,{dataTransfer:0}),$S=Gn(QS),JS=g({},lo,{relatedTarget:0}),Wc=Gn(JS),eM=g({},xr,{animationName:0,elapsedTime:0,pseudoElement:0}),tM=Gn(eM),nM=g({},xr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iM=Gn(nM),aM=g({},xr,{data:0}),vm=Gn(aM),rM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=oM[t])?!!i[t]:!1}function qc(){return lM}var uM=g({},lo,{key:function(t){if(t.key){var i=rM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cM=Gn(uM),fM=g({},zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xm=Gn(fM),dM=g({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),hM=Gn(dM),pM=g({},xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mM=Gn(pM),gM=g({},zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_M=Gn(gM),vM=g({},xr,{newState:0,oldState:0}),xM=Gn(vM),SM=[9,13,27,32],Yc=ia&&"CompositionEvent"in window,co=null;ia&&"documentMode"in document&&(co=document.documentMode);var MM=ia&&"TextEvent"in window&&!co,Sm=ia&&(!Yc||co&&8<co&&11>=co),Mm=" ",ym=!1;function Em(t,i){switch(t){case"keyup":return SM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function yM(t,i){switch(t){case"compositionend":return bm(i);case"keypress":return i.which!==32?null:(ym=!0,Mm);case"textInput":return t=i.data,t===Mm&&ym?null:t;default:return null}}function EM(t,i){if(ns)return t==="compositionend"||!Yc&&Em(t,i)?(t=mm(),Ol=Gc=Ha=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sm&&i.locale!=="ko"?null:i.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!bM[t.type]:i==="textarea"}function Am(t,i,s,l){es?ts?ts.push(l):ts=[l]:es=l,i=Tu(i,"onChange"),0<i.length&&(s=new Bl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var fo=null,ho=null;function TM(t){s_(t,0)}function Hl(t){var i=Fa(t);if(Kt(i))return t}function Rm(t,i){if(t==="change")return i}var Cm=!1;if(ia){var Zc;if(ia){var jc="oninput"in document;if(!jc){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),jc=typeof wm.oninput=="function"}Zc=jc}else Zc=!1;Cm=Zc&&(!document.documentMode||9<document.documentMode)}function Dm(){fo&&(fo.detachEvent("onpropertychange",Um),ho=fo=null)}function Um(t){if(t.propertyName==="value"&&Hl(ho)){var i=[];Am(i,ho,t,zc(t)),pm(TM,i)}}function AM(t,i,s){t==="focusin"?(Dm(),fo=i,ho=s,fo.attachEvent("onpropertychange",Um)):t==="focusout"&&Dm()}function RM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hl(ho)}function CM(t,i){if(t==="click")return Hl(i)}function wM(t,i){if(t==="input"||t==="change")return Hl(i)}function DM(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Kn=typeof Object.is=="function"?Object.is:DM;function po(t,i){if(Kn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!jt.call(i,f)||!Kn(t[f],i[f]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nm(t,i){var s=Lm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Lm(s)}}function Pm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Pm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Om(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Dt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Dt(t.document)}return i}function Kc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var UM=ia&&"documentMode"in document&&11>=document.documentMode,is=null,Qc=null,mo=null,$c=!1;function Im(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;$c||is==null||is!==Dt(l)||(l=is,"selectionStart"in l&&Kc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),mo&&po(mo,l)||(mo=l,l=Tu(Qc,"onSelect"),0<l.length&&(i=new Bl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=is)))}function Sr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var as={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},Jc={},Fm={};ia&&(Fm=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Mr(t){if(Jc[t])return Jc[t];if(!as[t])return t;var i=as[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Fm)return Jc[t]=i[s];return t}var Bm=Mr("animationend"),zm=Mr("animationiteration"),Hm=Mr("animationstart"),LM=Mr("transitionrun"),NM=Mr("transitionstart"),PM=Mr("transitioncancel"),Vm=Mr("transitionend"),Gm=new Map,ef="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ef.push("scrollEnd");function Mi(t,i){Gm.set(t,i),ta(i,[t])}var km=new WeakMap;function li(t,i){if(typeof t=="object"&&t!==null){var s=km.get(t);return s!==void 0?s:(i={value:t,source:i,stack:et(i)},km.set(t,i),i)}return{value:t,source:i,stack:et(i)}}var ui=[],rs=0,tf=0;function Vl(){for(var t=rs,i=tf=rs=0;i<t;){var s=ui[i];ui[i++]=null;var l=ui[i];ui[i++]=null;var f=ui[i];ui[i++]=null;var m=ui[i];if(ui[i++]=null,l!==null&&f!==null){var E=l.pending;E===null?f.next=f:(f.next=E.next,E.next=f),l.pending=f}m!==0&&Xm(s,f,m)}}function Gl(t,i,s,l){ui[rs++]=t,ui[rs++]=i,ui[rs++]=s,ui[rs++]=l,tf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function nf(t,i,s,l){return Gl(t,i,s,l),kl(t)}function ss(t,i){return Gl(t,null,null,i),kl(t)}function Xm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=t.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(t=m.stateNode,t===null||t._visibility&1||(f=!0)),t=m,m=m.return;return t.tag===3?(m=t.stateNode,f&&i!==null&&(f=31-Oe(s),t=m.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function kl(t){if(50<Ho)throw Ho=0,ud=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var os={};function OM(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,i,s,l){return new OM(t,i,s,l)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,i){var s=t.alternate;return s===null?(s=Qn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Wm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Xl(t,i,s,l,f,m){var E=0;if(l=t,typeof t=="function")af(t)&&(E=1);else if(typeof t=="string")E=Fy(t,s,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Qn(31,s,i,f),t.elementType=C,t.lanes=m,t;case y:return yr(s.children,f,m,i);case b:E=8,f|=24;break;case M:return t=Qn(12,s,i,f|2),t.elementType=M,t.lanes=m,t;case N:return t=Qn(13,s,i,f),t.elementType=N,t.lanes=m,t;case B:return t=Qn(19,s,i,f),t.elementType=B,t.lanes=m,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case R:E=10;break e;case U:E=9;break e;case P:E=11;break e;case O:E=14;break e;case W:E=16,l=null;break e}E=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Qn(E,s,i,f),i.elementType=t,i.type=l,i.lanes=m,i}function yr(t,i,s,l){return t=Qn(7,t,l,i),t.lanes=s,t}function rf(t,i,s){return t=Qn(6,t,null,i),t.lanes=s,t}function sf(t,i,s){return i=Qn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var ls=[],us=0,Wl=null,ql=0,ci=[],fi=0,Er=null,ra=1,sa="";function br(t,i){ls[us++]=ql,ls[us++]=Wl,Wl=t,ql=i}function qm(t,i,s){ci[fi++]=ra,ci[fi++]=sa,ci[fi++]=Er,Er=t;var l=ra;t=sa;var f=32-Oe(l)-1;l&=~(1<<f),s+=1;var m=32-Oe(i)+f;if(30<m){var E=f-f%5;m=(l&(1<<E)-1).toString(32),l>>=E,f-=E,ra=1<<32-Oe(i)+f|s<<f|l,sa=m+t}else ra=1<<m|s<<f|l,sa=t}function of(t){t.return!==null&&(br(t,1),qm(t,1,0))}function lf(t){for(;t===Wl;)Wl=ls[--us],ls[us]=null,ql=ls[--us],ls[us]=null;for(;t===Er;)Er=ci[--fi],ci[fi]=null,sa=ci[--fi],ci[fi]=null,ra=ci[--fi],ci[fi]=null}var Bn=null,en=null,Pt=!1,Tr=null,Fi=!1,uf=Error(r(519));function Ar(t){var i=Error(r(418,""));throw vo(li(i,t)),uf}function Ym(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[vn]=t,i[Tn]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<Go.length;s++)vt(Go[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),Un(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Wt(i);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),Ft(i,l.value,l.defaultValue,l.children),Wt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||c_(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=Au),i=!0):i=!1,i||Ar(t)}function Zm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Bn=Bn.return}}function go(t){if(t!==Bn)return!1;if(!Pt)return Zm(t),Pt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||Td(t.type,t.memoizedProps)),s=!s),s&&en&&Ar(t),Zm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){en=Ei(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,nr(t.type)?(t=wd,wd=null,en=t):en=i):en=Bn?Ei(t.stateNode.nextSibling):null;return!0}function _o(){en=Bn=null,Pt=!1}function jm(){var t=Tr;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Tr=null),t}function vo(t){Tr===null?Tr=[t]:Tr.push(t)}var cf=Z(null),Rr=null,oa=null;function Va(t,i,s){pe(cf,i._currentValue),i._currentValue=s}function la(t){t._currentValue=cf.current,re(cf)}function ff(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function df(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=f;for(var G=0;G<i.length;G++)if(w.context===i[G]){m.lanes|=s,w=m.alternate,w!==null&&(w.lanes|=s),ff(m.return,s,t),l||(E=null);break e}m=w.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(r(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),ff(E,s,t),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===t){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function xo(t,i,s,l){t=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var w=f.type;Kn(f.pendingProps.value,E.value)||(t!==null?t.push(w):t=[w])}}else if(f===ve.current){if(E=f.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}f=f.return}t!==null&&df(i,t,s,l),i.flags|=262144}function Yl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Cr(t){Rr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return Km(Rr,t)}function Zl(t,i){return Rr===null&&Cr(t),Km(t,i)}function Km(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},oa===null){if(t===null)throw Error(r(308));oa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else oa=oa.next=i;return s}var IM=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},FM=a.unstable_scheduleCallback,BM=a.unstable_NormalPriority,hn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hf(){return{controller:new IM,data:new Map,refCount:0}}function So(t){t.refCount--,t.refCount===0&&FM(BM,function(){t.controller.abort()})}var Mo=null,pf=0,cs=0,fs=null;function zM(t,i){if(Mo===null){var s=Mo=[];pf=0,cs=gd(),fs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return pf++,i.then(Qm,Qm),i}function Qm(){if(--pf===0&&Mo!==null){fs!==null&&(fs.status="fulfilled");var t=Mo;Mo=null,cs=0,fs=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function HM(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var $m=z.S;z.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&zM(t,i),$m!==null&&$m(t,i)};var wr=Z(null);function mf(){var t=wr.current;return t!==null?t:Zt.pooledCache}function jl(t,i){i===null?pe(wr,wr.current):pe(wr,i.pool)}function Jm(){var t=mf();return t===null?null:{parent:hn._currentValue,pool:t}}var yo=Error(r(460)),eg=Error(r(474)),Kl=Error(r(542)),gf={then:function(){}};function tg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ql(){}function ng(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ql,Ql),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ag(t),t;default:if(typeof i.status=="string")i.then(Ql,Ql);else{if(t=Zt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,ag(t),t}throw Eo=i,yo}}var Eo=null;function ig(){if(Eo===null)throw Error(r(459));var t=Eo;return Eo=null,t}function ag(t){if(t===yo||t===Kl)throw Error(r(483))}var Ga=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function vf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=kl(t),Xm(t,null,s),i}return Gl(t,l,i,s),kl(t)}function bo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Le(t,s)}}function xf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var Sf=!1;function To(){if(Sf){var t=fs;if(t!==null)throw t}}function Ao(t,i,s,l){Sf=!1;var f=t.updateQueue;Ga=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var G=w,se=G.next;G.next=null,E===null?m=se:E.next=se,E=G;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,w=_e.lastBaseUpdate,w!==E&&(w===null?_e.firstBaseUpdate=se:w.next=se,_e.lastBaseUpdate=G))}if(m!==null){var Se=f.baseState;E=0,_e=se=G=null,w=m;do{var le=w.lane&-536870913,ue=le!==w.lane;if(ue?(Tt&le)===le:(l&le)===le){le!==0&&le===cs&&(Sf=!0),_e!==null&&(_e=_e.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var at=t,tt=w;le=i;var kt=s;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){Se=at.call(kt,Se,le);break e}Se=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,le=typeof at=="function"?at.call(kt,Se,le):at,le==null)break e;Se=g({},Se,le);break e;case 2:Ga=!0}}le=w.callback,le!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[le]:ue.push(le))}else ue={lane:le,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_e===null?(se=_e=ue,G=Se):_e=_e.next=ue,E|=le;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;ue=w,w=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);_e===null&&(G=Se),f.baseState=G,f.firstBaseUpdate=se,f.lastBaseUpdate=_e,m===null&&(f.shared.lanes=0),$a|=E,t.lanes=E,t.memoizedState=Se}}function rg(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function sg(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)rg(s[t],i)}var ds=Z(null),$l=Z(0);function og(t,i){t=ma,pe($l,t),pe(ds,i),ma=t|i.baseLanes}function Mf(){pe($l,ma),pe(ds,ds.current)}function yf(){ma=$l.current,re(ds),re($l)}var Wa=0,mt=null,Vt=null,un=null,Jl=!1,hs=!1,Dr=!1,eu=0,Ro=0,ps=null,VM=0;function rn(){throw Error(r(321))}function Ef(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Kn(t[s],i[s]))return!1;return!0}function bf(t,i,s,l,f,m){return Wa=m,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=t===null||t.memoizedState===null?Xg:Wg,Dr=!1,m=s(l,f),Dr=!1,hs&&(m=ug(i,s,l,f)),lg(t),m}function lg(t){z.H=su;var i=Vt!==null&&Vt.next!==null;if(Wa=0,un=Vt=mt=null,Jl=!1,Ro=0,ps=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Yl(t)&&(Sn=!0))}function ug(t,i,s,l){mt=t;var f=0;do{if(hs&&(ps=null),Ro=0,hs=!1,25<=f)throw Error(r(301));if(f+=1,un=Vt=null,t.updateQueue!=null){var m=t.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=ZM,m=i(s,l)}while(hs);return m}function GM(){var t=z.H,i=t.useState()[0];return i=typeof i.then=="function"?Co(i):i,t=t.useState()[0],(Vt!==null?Vt.memoizedState:null)!==t&&(mt.flags|=1024),i}function Tf(){var t=eu!==0;return eu=0,t}function Af(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Rf(t){if(Jl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Jl=!1}Wa=0,un=Vt=mt=null,hs=!1,Ro=eu=0,ps=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?mt.memoizedState=un=t:un=un.next=t,un}function cn(){if(Vt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var i=un===null?mt.memoizedState:un.next;if(i!==null)un=i,Vt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},un===null?mt.memoizedState=un=t:un=un.next=t}return un}function Cf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Co(t){var i=Ro;return Ro+=1,ps===null&&(ps=[]),t=ng(ps,t,i),i=mt,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?Xg:Wg),t}function tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Co(t);if(t.$$typeof===R)return Ln(t)}throw Error(r(438,String(t)))}function wf(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Cf(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=L;return i.index++,s}function ua(t,i){return typeof i=="function"?i(t):i}function nu(t){var i=cn();return Df(i,Vt,t)}function Df(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=t.baseQueue,m=l.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}i.baseQueue=f=m,l.pending=null}if(m=t.baseState,f===null)t.memoizedState=m;else{i=f.next;var w=E=null,G=null,se=i,_e=!1;do{var Se=se.lane&-536870913;if(Se!==se.lane?(Tt&Se)===Se:(Wa&Se)===Se){var le=se.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Se===cs&&(_e=!0);else if((Wa&le)===le){se=se.next,le===cs&&(_e=!0);continue}else Se={lane:0,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(w=G=Se,E=m):G=G.next=Se,mt.lanes|=le,$a|=le;Se=se.action,Dr&&s(m,Se),m=se.hasEagerState?se.eagerState:s(m,Se)}else le={lane:Se,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(w=G=le,E=m):G=G.next=le,mt.lanes|=Se,$a|=Se;se=se.next}while(se!==null&&se!==i);if(G===null?E=m:G.next=w,!Kn(m,t.memoizedState)&&(Sn=!0,_e&&(s=fs,s!==null)))throw s;t.memoizedState=m,t.baseState=E,t.baseQueue=G,l.lastRenderedState=m}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Uf(t){var i=cn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do m=t(m,E.action),E=E.next;while(E!==f);Kn(m,i.memoizedState)||(Sn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function cg(t,i,s){var l=mt,f=cn(),m=Pt;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var E=!Kn((Vt||f).memoizedState,s);E&&(f.memoizedState=s,Sn=!0),f=f.queue;var w=hg.bind(null,l,f,t);if(wo(2048,8,w,[t]),f.getSnapshot!==i||E||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,ms(9,iu(),dg.bind(null,l,f,s,i),null),Zt===null)throw Error(r(349));m||(Wa&124)!==0||fg(l,i,s)}return s}function fg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=Cf(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function dg(t,i,s,l){i.value=s,i.getSnapshot=l,pg(i)&&mg(t)}function hg(t,i,s){return s(function(){pg(i)&&mg(t)})}function pg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Kn(t,s)}catch{return!0}}function mg(t){var i=ss(t,2);i!==null&&ni(i,t,2)}function Lf(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Dr){he(!0);try{s()}finally{he(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},i}function gg(t,i,s,l){return t.baseState=s,Df(t,Vt,typeof l=="function"?l:ua)}function kM(t,i,s,l,f){if(ru(t))throw Error(r(485));if(t=i.action,t!==null){var m={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,_g(i,m)):(m.next=s.next,i.pending=s.next=m)}}function _g(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var m=z.T,E={};z.T=E;try{var w=s(f,l),G=z.S;G!==null&&G(E,w),vg(t,i,w)}catch(se){Nf(t,i,se)}finally{z.T=m}}else try{m=s(f,l),vg(t,i,m)}catch(se){Nf(t,i,se)}}function vg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){xg(t,i,l)},function(l){return Nf(t,i,l)}):xg(t,i,s)}function xg(t,i,s){i.status="fulfilled",i.value=s,Sg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,_g(t,s)))}function Nf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Sg(i),i=i.next;while(i!==l)}t.action=null}function Sg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function Mg(t,i){return i}function yg(t,i){if(Pt){var s=Zt.formState;if(s!==null){e:{var l=mt;if(Pt){if(en){t:{for(var f=en,m=Fi;f.nodeType!==8;){if(!m){f=null;break t}if(f=Ei(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){en=Ei(f.nextSibling),l=f.data==="F!";break e}}Ar(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mg,lastRenderedState:i},s.queue=l,s=Vg.bind(null,mt,l),l.dispatch=s,l=Lf(!1),m=Bf.bind(null,mt,!1,l.queue),l=kn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=kM.bind(null,mt,f,m,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function Eg(t){var i=cn();return bg(i,Vt,t)}function bg(t,i,s){if(i=Df(t,i,Mg)[0],t=nu(ua)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Co(i)}catch(E){throw E===yo?Kl:E}else l=i;i=cn();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,ms(9,iu(),XM.bind(null,f,s),null)),[l,m,t]}function XM(t,i){t.action=i}function Tg(t){var i=cn(),s=Vt;if(s!==null)return bg(i,s,t);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function ms(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=Cf(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function iu(){return{destroy:void 0,resource:void 0}}function Ag(){return cn().memoizedState}function au(t,i,s,l){var f=kn();l=l===void 0?null:l,mt.flags|=t,f.memoizedState=ms(1|i,iu(),s,l)}function wo(t,i,s,l){var f=cn();l=l===void 0?null:l;var m=f.memoizedState.inst;Vt!==null&&l!==null&&Ef(l,Vt.memoizedState.deps)?f.memoizedState=ms(i,m,s,l):(mt.flags|=t,f.memoizedState=ms(1|i,m,s,l))}function Rg(t,i){au(8390656,8,t,i)}function Cg(t,i){wo(2048,8,t,i)}function wg(t,i){return wo(4,2,t,i)}function Dg(t,i){return wo(4,4,t,i)}function Ug(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Lg(t,i,s){s=s!=null?s.concat([t]):null,wo(4,4,Ug.bind(null,i,t),s)}function Pf(){}function Ng(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Ef(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Pg(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Ef(i,l[1]))return l[0];if(l=t(),Dr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[l,i],l}function Of(t,i,s){return s===void 0||(Wa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=F0(),mt.lanes|=t,$a|=t,s)}function Og(t,i,s,l){return Kn(s,i)?s:ds.current!==null?(t=Of(t,s,l),Kn(t,i)||(Sn=!0),t):(Wa&42)===0?(Sn=!0,t.memoizedState=s):(t=F0(),mt.lanes|=t,$a|=t,i)}function Ig(t,i,s,l,f){var m=V.p;V.p=m!==0&&8>m?m:8;var E=z.T,w={};z.T=w,Bf(t,!1,i,s);try{var G=f(),se=z.S;if(se!==null&&se(w,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _e=HM(G,l);Do(t,i,_e,ti(t))}else Do(t,i,l,ti(t))}catch(Se){Do(t,i,{then:function(){},status:"rejected",reason:Se},ti())}finally{V.p=m,z.T=E}}function WM(){}function If(t,i,s,l){if(t.tag!==5)throw Error(r(476));var f=Fg(t).queue;Ig(t,f,i,k,s===null?WM:function(){return Bg(t),s(l)})}function Fg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:k},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Bg(t){var i=Fg(t).next.queue;Do(t,i,{},ti())}function Ff(){return Ln(Zo)}function zg(){return cn().memoizedState}function Hg(){return cn().memoizedState}function qM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ti();t=ka(s);var l=Xa(i,t,s);l!==null&&(ni(l,i,s),bo(l,i,s)),i={cache:hf()},t.payload=i;return}i=i.return}}function YM(t,i,s){var l=ti();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},ru(t)?Gg(i,s):(s=nf(t,i,s,l),s!==null&&(ni(s,t,l),kg(s,i,l)))}function Vg(t,i,s){var l=ti();Do(t,i,s,l)}function Do(t,i,s,l){var f={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(ru(t))Gg(i,f);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,w=m(E,s);if(f.hasEagerState=!0,f.eagerState=w,Kn(w,E))return Gl(t,i,f,0),Zt===null&&Vl(),!1}catch{}finally{}if(s=nf(t,i,f,l),s!==null)return ni(s,t,l),kg(s,i,l),!0}return!1}function Bf(t,i,s,l){if(l={lane:2,revertLane:gd(),action:l,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(i)throw Error(r(479))}else i=nf(t,s,l,2),i!==null&&ni(i,t,2)}function ru(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function Gg(t,i){hs=Jl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function kg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Le(t,s)}}var su={readContext:Ln,use:tu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Xg={readContext:Ln,use:tu,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:Rg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,au(4194308,4,Ug.bind(null,i,t),s)},useLayoutEffect:function(t,i){return au(4194308,4,t,i)},useInsertionEffect:function(t,i){au(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Dr){he(!0);try{t()}finally{he(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var f=s(i);if(Dr){he(!0);try{s(i)}finally{he(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=YM.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Lf(t);var i=t.queue,s=Vg.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Pf,useDeferredValue:function(t,i){var s=kn();return Of(s,t,i)},useTransition:function(){var t=Lf(!1);return t=Ig.bind(null,mt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,f=kn();if(Pt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Zt===null)throw Error(r(349));(Tt&124)!==0||fg(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Rg(hg.bind(null,l,m,t),[t]),l.flags|=2048,ms(9,iu(),dg.bind(null,l,m,s,i),null),s},useId:function(){var t=kn(),i=Zt.identifierPrefix;if(Pt){var s=sa,l=ra;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=eu++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=VM++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Ff,useFormState:yg,useActionState:yg,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Bf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:wf,useCacheRefresh:function(){return kn().memoizedState=qM.bind(null,mt)}},Wg={readContext:Ln,use:tu,useCallback:Ng,useContext:Ln,useEffect:Cg,useImperativeHandle:Lg,useInsertionEffect:wg,useLayoutEffect:Dg,useMemo:Pg,useReducer:nu,useRef:Ag,useState:function(){return nu(ua)},useDebugValue:Pf,useDeferredValue:function(t,i){var s=cn();return Og(s,Vt.memoizedState,t,i)},useTransition:function(){var t=nu(ua)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:cg,useId:zg,useHostTransitionStatus:Ff,useFormState:Eg,useActionState:Eg,useOptimistic:function(t,i){var s=cn();return gg(s,Vt,t,i)},useMemoCache:wf,useCacheRefresh:Hg},ZM={readContext:Ln,use:tu,useCallback:Ng,useContext:Ln,useEffect:Cg,useImperativeHandle:Lg,useInsertionEffect:wg,useLayoutEffect:Dg,useMemo:Pg,useReducer:Uf,useRef:Ag,useState:function(){return Uf(ua)},useDebugValue:Pf,useDeferredValue:function(t,i){var s=cn();return Vt===null?Of(s,t,i):Og(s,Vt.memoizedState,t,i)},useTransition:function(){var t=Uf(ua)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:Co(t),i]},useSyncExternalStore:cg,useId:zg,useHostTransitionStatus:Ff,useFormState:Tg,useActionState:Tg,useOptimistic:function(t,i){var s=cn();return Vt!==null?gg(s,Vt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:wf,useCacheRefresh:Hg},gs=null,Uo=0;function ou(t){var i=Uo;return Uo+=1,gs===null&&(gs=[]),ng(gs,t,i)}function Lo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function lu(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function qg(t){var i=t._init;return i(t._payload)}function Yg(t){function i(J,q){if(t){var ie=J.deletions;ie===null?(J.deletions=[q],J.flags|=16):ie.push(q)}}function s(J,q){if(!t)return null;for(;q!==null;)i(J,q),q=q.sibling;return null}function l(J){for(var q=new Map;J!==null;)J.key!==null?q.set(J.key,J):q.set(J.index,J),J=J.sibling;return q}function f(J,q){return J=aa(J,q),J.index=0,J.sibling=null,J}function m(J,q,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<q?(J.flags|=67108866,q):ie):(J.flags|=67108866,q)):(J.flags|=1048576,q)}function E(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function w(J,q,ie,xe){return q===null||q.tag!==6?(q=rf(ie,J.mode,xe),q.return=J,q):(q=f(q,ie),q.return=J,q)}function G(J,q,ie,xe){var Ye=ie.type;return Ye===y?_e(J,q,ie.props.children,xe,ie.key):q!==null&&(q.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===W&&qg(Ye)===q.type)?(q=f(q,ie.props),Lo(q,ie),q.return=J,q):(q=Xl(ie.type,ie.key,ie.props,null,J.mode,xe),Lo(q,ie),q.return=J,q)}function se(J,q,ie,xe){return q===null||q.tag!==4||q.stateNode.containerInfo!==ie.containerInfo||q.stateNode.implementation!==ie.implementation?(q=sf(ie,J.mode,xe),q.return=J,q):(q=f(q,ie.children||[]),q.return=J,q)}function _e(J,q,ie,xe,Ye){return q===null||q.tag!==7?(q=yr(ie,J.mode,xe,Ye),q.return=J,q):(q=f(q,ie),q.return=J,q)}function Se(J,q,ie){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=rf(""+q,J.mode,ie),q.return=J,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return ie=Xl(q.type,q.key,q.props,null,J.mode,ie),Lo(ie,q),ie.return=J,ie;case S:return q=sf(q,J.mode,ie),q.return=J,q;case W:var xe=q._init;return q=xe(q._payload),Se(J,q,ie)}if(ee(q)||j(q))return q=yr(q,J.mode,ie,null),q.return=J,q;if(typeof q.then=="function")return Se(J,ou(q),ie);if(q.$$typeof===R)return Se(J,Zl(J,q),ie);lu(J,q)}return null}function le(J,q,ie,xe){var Ye=q!==null?q.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ye!==null?null:w(J,q,""+ie,xe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:return ie.key===Ye?G(J,q,ie,xe):null;case S:return ie.key===Ye?se(J,q,ie,xe):null;case W:return Ye=ie._init,ie=Ye(ie._payload),le(J,q,ie,xe)}if(ee(ie)||j(ie))return Ye!==null?null:_e(J,q,ie,xe,null);if(typeof ie.then=="function")return le(J,q,ou(ie),xe);if(ie.$$typeof===R)return le(J,q,Zl(J,ie),xe);lu(J,ie)}return null}function ue(J,q,ie,xe,Ye){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return J=J.get(ie)||null,w(q,J,""+xe,Ye);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return J=J.get(xe.key===null?ie:xe.key)||null,G(q,J,xe,Ye);case S:return J=J.get(xe.key===null?ie:xe.key)||null,se(q,J,xe,Ye);case W:var gt=xe._init;return xe=gt(xe._payload),ue(J,q,ie,xe,Ye)}if(ee(xe)||j(xe))return J=J.get(ie)||null,_e(q,J,xe,Ye,null);if(typeof xe.then=="function")return ue(J,q,ie,ou(xe),Ye);if(xe.$$typeof===R)return ue(J,q,ie,Zl(q,xe),Ye);lu(q,xe)}return null}function at(J,q,ie,xe){for(var Ye=null,gt=null,je=q,nt=q=0,yn=null;je!==null&&nt<ie.length;nt++){je.index>nt?(yn=je,je=null):yn=je.sibling;var Ut=le(J,je,ie[nt],xe);if(Ut===null){je===null&&(je=yn);break}t&&je&&Ut.alternate===null&&i(J,je),q=m(Ut,q,nt),gt===null?Ye=Ut:gt.sibling=Ut,gt=Ut,je=yn}if(nt===ie.length)return s(J,je),Pt&&br(J,nt),Ye;if(je===null){for(;nt<ie.length;nt++)je=Se(J,ie[nt],xe),je!==null&&(q=m(je,q,nt),gt===null?Ye=je:gt.sibling=je,gt=je);return Pt&&br(J,nt),Ye}for(je=l(je);nt<ie.length;nt++)yn=ue(je,J,nt,ie[nt],xe),yn!==null&&(t&&yn.alternate!==null&&je.delete(yn.key===null?nt:yn.key),q=m(yn,q,nt),gt===null?Ye=yn:gt.sibling=yn,gt=yn);return t&&je.forEach(function(or){return i(J,or)}),Pt&&br(J,nt),Ye}function tt(J,q,ie,xe){if(ie==null)throw Error(r(151));for(var Ye=null,gt=null,je=q,nt=q=0,yn=null,Ut=ie.next();je!==null&&!Ut.done;nt++,Ut=ie.next()){je.index>nt?(yn=je,je=null):yn=je.sibling;var or=le(J,je,Ut.value,xe);if(or===null){je===null&&(je=yn);break}t&&je&&or.alternate===null&&i(J,je),q=m(or,q,nt),gt===null?Ye=or:gt.sibling=or,gt=or,je=yn}if(Ut.done)return s(J,je),Pt&&br(J,nt),Ye;if(je===null){for(;!Ut.done;nt++,Ut=ie.next())Ut=Se(J,Ut.value,xe),Ut!==null&&(q=m(Ut,q,nt),gt===null?Ye=Ut:gt.sibling=Ut,gt=Ut);return Pt&&br(J,nt),Ye}for(je=l(je);!Ut.done;nt++,Ut=ie.next())Ut=ue(je,J,nt,Ut.value,xe),Ut!==null&&(t&&Ut.alternate!==null&&je.delete(Ut.key===null?nt:Ut.key),q=m(Ut,q,nt),gt===null?Ye=Ut:gt.sibling=Ut,gt=Ut);return t&&je.forEach(function(jy){return i(J,jy)}),Pt&&br(J,nt),Ye}function kt(J,q,ie,xe){if(typeof ie=="object"&&ie!==null&&ie.type===y&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:e:{for(var Ye=ie.key;q!==null;){if(q.key===Ye){if(Ye=ie.type,Ye===y){if(q.tag===7){s(J,q.sibling),xe=f(q,ie.props.children),xe.return=J,J=xe;break e}}else if(q.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===W&&qg(Ye)===q.type){s(J,q.sibling),xe=f(q,ie.props),Lo(xe,ie),xe.return=J,J=xe;break e}s(J,q);break}else i(J,q);q=q.sibling}ie.type===y?(xe=yr(ie.props.children,J.mode,xe,ie.key),xe.return=J,J=xe):(xe=Xl(ie.type,ie.key,ie.props,null,J.mode,xe),Lo(xe,ie),xe.return=J,J=xe)}return E(J);case S:e:{for(Ye=ie.key;q!==null;){if(q.key===Ye)if(q.tag===4&&q.stateNode.containerInfo===ie.containerInfo&&q.stateNode.implementation===ie.implementation){s(J,q.sibling),xe=f(q,ie.children||[]),xe.return=J,J=xe;break e}else{s(J,q);break}else i(J,q);q=q.sibling}xe=sf(ie,J.mode,xe),xe.return=J,J=xe}return E(J);case W:return Ye=ie._init,ie=Ye(ie._payload),kt(J,q,ie,xe)}if(ee(ie))return at(J,q,ie,xe);if(j(ie)){if(Ye=j(ie),typeof Ye!="function")throw Error(r(150));return ie=Ye.call(ie),tt(J,q,ie,xe)}if(typeof ie.then=="function")return kt(J,q,ou(ie),xe);if(ie.$$typeof===R)return kt(J,q,Zl(J,ie),xe);lu(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,q!==null&&q.tag===6?(s(J,q.sibling),xe=f(q,ie),xe.return=J,J=xe):(s(J,q),xe=rf(ie,J.mode,xe),xe.return=J,J=xe),E(J)):s(J,q)}return function(J,q,ie,xe){try{Uo=0;var Ye=kt(J,q,ie,xe);return gs=null,Ye}catch(je){if(je===yo||je===Kl)throw je;var gt=Qn(29,je,null,J.mode);return gt.lanes=xe,gt.return=J,gt}finally{}}}var _s=Yg(!0),Zg=Yg(!1),di=Z(null),Bi=null;function qa(t){var i=t.alternate;pe(pn,pn.current&1),pe(di,t),Bi===null&&(i===null||ds.current!==null||i.memoizedState!==null)&&(Bi=t)}function jg(t){if(t.tag===22){if(pe(pn,pn.current),pe(di,t),Bi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Bi=t)}}else Ya()}function Ya(){pe(pn,pn.current),pe(di,di.current)}function ca(t){re(di),Bi===t&&(Bi=null),re(pn)}var pn=Z(0);function uu(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Cd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function zf(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Hf={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ti(),f=ka(l);f.payload=i,s!=null&&(f.callback=s),i=Xa(t,f,l),i!==null&&(ni(i,t,l),bo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ti(),f=ka(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=Xa(t,f,l),i!==null&&(ni(i,t,l),bo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ti(),l=ka(s);l.tag=2,i!=null&&(l.callback=i),i=Xa(t,l,s),i!==null&&(ni(i,t,s),bo(i,t,s))}};function Kg(t,i,s,l,f,m,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,m,E):i.prototype&&i.prototype.isPureReactComponent?!po(s,l)||!po(f,m):!0}function Qg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Hf.enqueueReplaceState(i,i.state,null)}function Ur(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}var cu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function $g(t){cu(t)}function Jg(t){console.error(t)}function e0(t){cu(t)}function fu(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function t0(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Vf(t,i,s){return s=ka(s),s.tag=3,s.payload={element:null},s.callback=function(){fu(t,i)},s}function n0(t){return t=ka(t),t.tag=3,t}function i0(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;t.payload=function(){return f(m)},t.callback=function(){t0(i,s,l)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){t0(i,s,l),typeof f!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var w=l.stack;this.componentDidCatch(l.value,{componentStack:w!==null?w:""})})}function jM(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&xo(i,s,f,!0),s=di.current,s!==null){switch(s.tag){case 13:return Bi===null?fd():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===gf?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),hd(t,l,f)),!1;case 22:return s.flags|=65536,l===gf?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),hd(t,l,f)),!1}throw Error(r(435,s.tag))}return hd(t,l,f),fd(),!1}if(Pt)return i=di.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==uf&&(t=Error(r(422),{cause:l}),vo(li(t,s)))):(l!==uf&&(i=Error(r(423),{cause:l}),vo(li(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=li(l,s),f=Vf(t.stateNode,l,f),xf(t,f),tn!==4&&(tn=2)),!1;var m=Error(r(520),{cause:l});if(m=li(m,s),zo===null?zo=[m]:zo.push(m),tn!==4&&(tn=2),i===null)return!0;l=li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Vf(s.stateNode,l,t),xf(s,t),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ja===null||!Ja.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=n0(f),i0(f,t,s,l),xf(s,f),!1}s=s.return}while(s!==null);return!1}var a0=Error(r(461)),Sn=!1;function Rn(t,i,s,l){i.child=t===null?Zg(i,null,s,l):_s(i,t.child,s,l)}function r0(t,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var E={};for(var w in l)w!=="ref"&&(E[w]=l[w])}else E=l;return Cr(i),l=bf(t,i,s,E,m,f),w=Tf(),t!==null&&!Sn?(Af(t,i,f),fa(t,i,f)):(Pt&&w&&of(i),i.flags|=1,Rn(t,i,l,f),i.child)}function s0(t,i,s,l,f){if(t===null){var m=s.type;return typeof m=="function"&&!af(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,o0(t,i,m,l,f)):(t=Xl(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,!jf(t,f)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:po,s(E,l)&&t.ref===i.ref)return fa(t,i,f)}return i.flags|=1,t=aa(m,l),t.ref=i.ref,t.return=i,i.child=t}function o0(t,i,s,l,f){if(t!==null){var m=t.memoizedProps;if(po(m,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=m,jf(t,f))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,fa(t,i,f)}return Gf(t,i,s,l,f)}function l0(t,i,s){var l=i.pendingProps,f=l.children,m=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=m!==null?m.baseLanes|s:s,t!==null){for(f=i.child=t.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;i.childLanes=m&~l}else i.childLanes=0,i.child=null;return u0(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&jl(i,m!==null?m.cachePool:null),m!==null?og(i,m):Mf(),jg(i);else return i.lanes=i.childLanes=536870912,u0(t,i,m!==null?m.baseLanes|s:s,s)}else m!==null?(jl(i,m.cachePool),og(i,m),Ya(),i.memoizedState=null):(t!==null&&jl(i,null),Mf(),Ya());return Rn(t,i,f,s),i.child}function u0(t,i,s,l){var f=mf();return f=f===null?null:{parent:hn._currentValue,pool:f},i.memoizedState={baseLanes:s,cachePool:f},t!==null&&jl(i,null),Mf(),jg(i),t!==null&&xo(t,i,l,!0),null}function du(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Gf(t,i,s,l,f){return Cr(i),s=bf(t,i,s,l,void 0,f),l=Tf(),t!==null&&!Sn?(Af(t,i,f),fa(t,i,f)):(Pt&&l&&of(i),i.flags|=1,Rn(t,i,s,f),i.child)}function c0(t,i,s,l,f,m){return Cr(i),i.updateQueue=null,s=ug(i,l,s,f),lg(t),l=Tf(),t!==null&&!Sn?(Af(t,i,m),fa(t,i,m)):(Pt&&l&&of(i),i.flags|=1,Rn(t,i,s,m),i.child)}function f0(t,i,s,l,f){if(Cr(i),i.stateNode===null){var m=os,E=s.contextType;typeof E=="object"&&E!==null&&(m=Ln(E)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Hf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},_f(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?Ln(E):os,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(zf(i,s,E,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&Hf.enqueueReplaceState(m,m.state,null),Ao(i,l,m,f),To(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){m=i.stateNode;var w=i.memoizedProps,G=Ur(s,w);m.props=G;var se=m.context,_e=s.contextType;E=os,typeof _e=="object"&&_e!==null&&(E=Ln(_e));var Se=s.getDerivedStateFromProps;_e=typeof Se=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=i.pendingProps!==w,_e||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||se!==E)&&Qg(i,m,l,E),Ga=!1;var le=i.memoizedState;m.state=le,Ao(i,l,m,f),To(),se=i.memoizedState,w||le!==se||Ga?(typeof Se=="function"&&(zf(i,s,Se,l),se=i.memoizedState),(G=Ga||Kg(i,s,G,l,le,se,E))?(_e||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=se),m.props=l,m.state=se,m.context=E,l=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,vf(t,i),E=i.memoizedProps,_e=Ur(s,E),m.props=_e,Se=i.pendingProps,le=m.context,se=s.contextType,G=os,typeof se=="object"&&se!==null&&(G=Ln(se)),w=s.getDerivedStateFromProps,(se=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Se||le!==G)&&Qg(i,m,l,G),Ga=!1,le=i.memoizedState,m.state=le,Ao(i,l,m,f),To();var ue=i.memoizedState;E!==Se||le!==ue||Ga||t!==null&&t.dependencies!==null&&Yl(t.dependencies)?(typeof w=="function"&&(zf(i,s,w,l),ue=i.memoizedState),(_e=Ga||Kg(i,s,_e,l,le,ue,G)||t!==null&&t.dependencies!==null&&Yl(t.dependencies))?(se||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ue,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ue,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),m.props=l,m.state=ue,m.context=G,l=_e):(typeof m.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(i.flags|=1024),l=!1)}return m=l,du(t,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,t!==null&&l?(i.child=_s(i,t.child,null,f),i.child=_s(i,null,s,f)):Rn(t,i,s,f),i.memoizedState=m.state,t=i.child):t=fa(t,i,f),t}function d0(t,i,s,l){return _o(),i.flags|=256,Rn(t,i,s,l),i.child}var kf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xf(t){return{baseLanes:t,cachePool:Jm()}}function Wf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=hi),t}function h0(t,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),E&&(f=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,t===null){if(Pt){if(f?qa(i):Ya(),Pt){var w=en,G;if(G=w){e:{for(G=w,w=Fi;G.nodeType!==8;){if(!w){w=null;break e}if(G=Ei(G.nextSibling),G===null){w=null;break e}}w=G}w!==null?(i.memoizedState={dehydrated:w,treeContext:Er!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},G=Qn(18,null,null,0),G.stateNode=w,G.return=i,i.child=G,Bn=i,en=null,G=!0):G=!1}G||Ar(i)}if(w=i.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Cd(w)?i.lanes=32:i.lanes=536870912,null;ca(i)}return w=l.children,l=l.fallback,f?(Ya(),f=i.mode,w=hu({mode:"hidden",children:w},f),l=yr(l,f,s,null),w.return=i,l.return=i,w.sibling=l,i.child=w,f=i.child,f.memoizedState=Xf(s),f.childLanes=Wf(t,E,s),i.memoizedState=kf,l):(qa(i),qf(i,w))}if(G=t.memoizedState,G!==null&&(w=G.dehydrated,w!==null)){if(m)i.flags&256?(qa(i),i.flags&=-257,i=Yf(t,i,s)):i.memoizedState!==null?(Ya(),i.child=t.child,i.flags|=128,i=null):(Ya(),f=l.fallback,w=i.mode,l=hu({mode:"visible",children:l.children},w),f=yr(f,w,s,null),f.flags|=2,l.return=i,f.return=i,l.sibling=f,i.child=l,_s(i,t.child,null,s),l=i.child,l.memoizedState=Xf(s),l.childLanes=Wf(t,E,s),i.memoizedState=kf,i=f);else if(qa(i),Cd(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var se=E.dgst;E=se,l=Error(r(419)),l.stack="",l.digest=E,vo({value:l,source:null,stack:null}),i=Yf(t,i,s)}else if(Sn||xo(t,i,s,!1),E=(s&t.childLanes)!==0,Sn||E){if(E=Zt,E!==null&&(l=s&-s,l=(l&42)!==0?1:it(l),l=(l&(E.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,ss(t,l),ni(E,t,l),a0;w.data==="$?"||fd(),i=Yf(t,i,s)}else w.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,en=Ei(w.nextSibling),Bn=i,Pt=!0,Tr=null,Fi=!1,t!==null&&(ci[fi++]=ra,ci[fi++]=sa,ci[fi++]=Er,ra=t.id,sa=t.overflow,Er=i),i=qf(i,l.children),i.flags|=4096);return i}return f?(Ya(),f=l.fallback,w=i.mode,G=t.child,se=G.sibling,l=aa(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,se!==null?f=aa(se,f):(f=yr(f,w,s,null),f.flags|=2),f.return=i,l.return=i,l.sibling=f,i.child=l,l=f,f=i.child,w=t.child.memoizedState,w===null?w=Xf(s):(G=w.cachePool,G!==null?(se=hn._currentValue,G=G.parent!==se?{parent:se,pool:se}:G):G=Jm(),w={baseLanes:w.baseLanes|s,cachePool:G}),f.memoizedState=w,f.childLanes=Wf(t,E,s),i.memoizedState=kf,l):(qa(i),s=t.child,t=s.sibling,s=aa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(E=i.deletions,E===null?(i.deletions=[t],i.flags|=16):E.push(t)),i.child=s,i.memoizedState=null,s)}function qf(t,i){return i=hu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function hu(t,i){return t=Qn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Yf(t,i,s){return _s(i,t.child,null,s),t=qf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function p0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),ff(t.return,i,s)}function Zf(t,i,s,l,f){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=s,m.tailMode=f)}function m0(t,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;if(Rn(t,i,l.children,s),l=pn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,s,i);else if(t.tag===19)p0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(pe(pn,l),f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&uu(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Zf(i,!1,f,s,m);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&uu(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Zf(i,!0,s,null,m);break;case"together":Zf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),$a|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(xo(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=aa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=aa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function jf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Yl(t)))}function KM(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),Va(i,hn,t.memoizedState.cache),_o();break;case 27:case 5:Ge(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:Va(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(qa(i),i.flags|=128,null):(s&i.child.childLanes)!==0?h0(t,i,s):(qa(i),t=fa(t,i,s),t!==null?t.sibling:null);qa(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(xo(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return m0(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),pe(pn,pn.current),l)break;return null;case 22:case 23:return i.lanes=0,l0(t,i,s);case 24:Va(i,hn,t.memoizedState.cache)}return fa(t,i,s)}function g0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!jf(t,s)&&(i.flags&128)===0)return Sn=!1,KM(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Pt&&(i.flags&1048576)!==0&&qm(i,ql,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,f=l._init;if(l=f(l._payload),i.type=l,typeof l=="function")af(l)?(t=Ur(l,t),i.tag=1,i=f0(null,i,l,t,s)):(i.tag=0,i=Gf(null,i,l,t,s));else{if(l!=null){if(f=l.$$typeof,f===P){i.tag=11,i=r0(null,i,l,t,s);break e}else if(f===O){i.tag=14,i=s0(null,i,l,t,s);break e}}throw i=ae(l)||l,Error(r(306,i,""))}}return i;case 0:return Gf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Ur(l,i.pendingProps),f0(t,i,l,f,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,vf(t,i),Ao(i,l,null,s);var E=i.memoizedState;if(l=E.cache,Va(i,hn,l),l!==m.cache&&df(i,[hn],s,!0),To(),l=E.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=d0(t,i,l,s);break e}else if(l!==f){f=li(Error(r(424)),i),vo(f),i=d0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ei(t.firstChild),Bn=i,Pt=!0,Tr=null,Fi=!0,s=Zg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(_o(),l===f){i=fa(t,i,s);break e}Rn(t,i,l,s)}i=i.child}return i;case 26:return du(t,i),t===null?(s=S_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Pt||(s=i.type,t=i.pendingProps,l=Ru(te.current).createElement(s),l[vn]=i,l[Tn]=t,wn(l,s,t),nn(l),i.stateNode=l):i.memoizedState=S_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ge(i),t===null&&Pt&&(l=i.stateNode=__(i.type,i.pendingProps,te.current),Bn=i,Fi=!0,f=en,nr(i.type)?(wd=f,en=Ei(l.firstChild)):en=f),Rn(t,i,i.pendingProps.children,s),du(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Pt&&((f=l=en)&&(l=by(l,i.type,i.pendingProps,Fi),l!==null?(i.stateNode=l,Bn=i,en=Ei(l.firstChild),Fi=!1,f=!0):f=!1),f||Ar(i)),Ge(i),f=i.type,m=i.pendingProps,E=t!==null?t.memoizedProps:null,l=m.children,Td(f,m)?l=null:E!==null&&Td(f,E)&&(i.flags|=32),i.memoizedState!==null&&(f=bf(t,i,GM,null,null,s),Zo._currentValue=f),du(t,i),Rn(t,i,l,s),i.child;case 6:return t===null&&Pt&&((t=s=en)&&(s=Ty(s,i.pendingProps,Fi),s!==null?(i.stateNode=s,Bn=i,en=null,t=!0):t=!1),t||Ar(i)),null;case 13:return h0(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=_s(i,null,l,s):Rn(t,i,l,s),i.child;case 11:return r0(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Va(i,i.type,l.value),Rn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Cr(i),f=Ln(f),l=l(f),i.flags|=1,Rn(t,i,l,s),i.child;case 14:return s0(t,i,i.type,i.pendingProps,s);case 15:return o0(t,i,i.type,i.pendingProps,s);case 19:return m0(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=hu(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=aa(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return l0(t,i,s);case 24:return Cr(i),l=Ln(hn),t===null?(f=mf(),f===null&&(f=Zt,m=hf(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},_f(i),Va(i,hn,f)):((t.lanes&s)!==0&&(vf(t,i),Ao(i,null,null,s),To()),f=t.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Va(i,hn,l)):(l=m.cache,Va(i,hn,l),l!==f.cache&&df(i,[hn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function da(t){t.flags|=4}function _0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!T_(i)){if(i=di.current,i!==null&&((Tt&4194048)===Tt?Bi!==null:(Tt&62914560)!==Tt&&(Tt&536870912)===0||i!==Bi))throw Eo=gf,eg;t.flags|=8192}}function pu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ie():536870912,t.lanes|=i,Ms|=i)}function No(t,i){if(!Pt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function QM(t,i,s){var l=i.pendingProps;switch(lf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return $t(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),la(hn),Je(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(go(i)?da(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jm())),$t(i),null;case 26:return s=i.memoizedState,t===null?(da(i),s!==null?($t(i),_0(i,s)):($t(i),i.flags&=-16777217)):s?s!==t.memoizedState?(da(i),$t(i),_0(i,s)):($t(i),i.flags&=-16777217):(t.memoizedProps!==l&&da(i),$t(i),i.flags&=-16777217),null;case 27:ht(i),s=te.current;var f=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return $t(i),null}t=Re.current,go(i)?Ym(i):(t=__(f,l,s),i.stateNode=t,da(i))}return $t(i),null;case 5:if(ht(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return $t(i),null}if(t=Re.current,go(i))Ym(i);else{switch(f=Ru(te.current),t){case 1:t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=f.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=f.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=f.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?f.createElement(s,{is:l.is}):f.createElement(s)}}t[vn]=i,t[Tn]=l;e:for(f=i.child;f!==null;){if(f.tag===5||f.tag===6)t.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===i)break e;for(;f.sibling===null;){if(f.return===null||f.return===i)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}i.stateNode=t;e:switch(wn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&da(i)}}return $t(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&da(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,go(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Bn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[vn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||c_(t.nodeValue,s)),t||Ar(i)}else t=Ru(t).createTextNode(l),t[vn]=i,i.stateNode=t}return $t(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=go(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[vn]=i}else _o(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),f=!1}else f=jm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(ca(i),i):(ca(i),null)}if(ca(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool);var m=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),pu(i,i.updateQueue),$t(i),null;case 4:return Je(),t===null&&Sd(i.stateNode.containerInfo),$t(i),null;case 10:return la(i.type),$t(i),null;case 19:if(re(pn),f=i.memoizedState,f===null)return $t(i),null;if(l=(i.flags&128)!==0,m=f.rendering,m===null)if(l)No(f,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(m=uu(t),m!==null){for(i.flags|=128,No(f,!1),t=m.updateQueue,i.updateQueue=t,pu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Wm(s,t),s=s.sibling;return pe(pn,pn.current&1|2),i.child}t=t.sibling}f.tail!==null&&At()>_u&&(i.flags|=128,l=!0,No(f,!1),i.lanes=4194304)}else{if(!l)if(t=uu(m),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,pu(i,t),No(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Pt)return $t(i),null}else 2*At()-f.renderingStartTime>_u&&s!==536870912&&(i.flags|=128,l=!0,No(f,!1),i.lanes=4194304);f.isBackwards?(m.sibling=i.child,i.child=m):(t=f.last,t!==null?t.sibling=m:i.child=m,f.last=m)}return f.tail!==null?(i=f.tail,f.rendering=i,f.tail=i.sibling,f.renderingStartTime=At(),i.sibling=null,t=pn.current,pe(pn,l?t&1|2:t&1),i):($t(i),null);case 22:case 23:return ca(i),yf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),s=i.updateQueue,s!==null&&pu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&re(wr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),la(hn),$t(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function $M(t,i){switch(lf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return la(hn),Je(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ht(i),null;case 13:if(ca(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));_o()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return re(pn),null;case 4:return Je(),null;case 10:return la(i.type),null;case 22:case 23:return ca(i),yf(),t!==null&&re(wr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return la(hn),null;case 25:return null;default:return null}}function v0(t,i){switch(lf(i),i.tag){case 3:la(hn),Je();break;case 26:case 27:case 5:ht(i);break;case 4:Je();break;case 13:ca(i);break;case 19:re(pn);break;case 10:la(i.type);break;case 22:case 23:ca(i),yf(),t!==null&&re(wr);break;case 24:la(hn)}}function Po(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var m=s.create,E=s.inst;l=m(),E.destroy=l}s=s.next}while(s!==f)}}catch(w){qt(i,i.return,w)}}function Za(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&t)===t){var E=l.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,f=i;var G=s,se=w;try{se()}catch(_e){qt(f,G,_e)}}}l=l.next}while(l!==m)}}catch(_e){qt(i,i.return,_e)}}function x0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{sg(i,s)}catch(l){qt(t,t.return,l)}}}function S0(t,i,s){s.props=Ur(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function Oo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,i,f)}}function zi(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,i,f)}else s.current=null}function M0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Kf(t,i,s){try{var l=t.stateNode;xy(l,t.type,s,i),l[Tn]=i}catch(f){qt(t,t.return,f)}}function y0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&nr(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&nr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Au));else if(l!==4&&(l===27&&nr(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for($f(t,i,s),t=t.sibling;t!==null;)$f(t,i,s),t=t.sibling}function mu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&nr(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(mu(t,i,s),t=t.sibling;t!==null;)mu(t,i,s),t=t.sibling}function E0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);wn(i,l,s),i[vn]=t,i[Tn]=s}catch(m){qt(t,t.return,m)}}var ha=!1,sn=!1,Jf=!1,b0=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function JM(t,i){if(t=t.containerInfo,Ed=Nu,t=Om(t),Kc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var E=0,w=-1,G=-1,se=0,_e=0,Se=t,le=null;t:for(;;){for(var ue;Se!==s||f!==0&&Se.nodeType!==3||(w=E+f),Se!==m||l!==0&&Se.nodeType!==3||(G=E+l),Se.nodeType===3&&(E+=Se.nodeValue.length),(ue=Se.firstChild)!==null;)le=Se,Se=ue;for(;;){if(Se===t)break t;if(le===s&&++se===f&&(w=E),le===m&&++_e===l&&(G=E),(ue=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=ue}s=w===-1||G===-1?null:{start:w,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(bd={focusedElem:t,selectionRange:s},Nu=!1,Mn=i;Mn!==null;)if(i=Mn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,Mn=t;else for(;Mn!==null;){switch(i=Mn,m=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&m!==null){t=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var at=Ur(s.type,f,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(at,m),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){qt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Rd(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,Mn=t;break}Mn=i.return}}function T0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ja(t,s),l&4&&Po(5,s);break;case 1:if(ja(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(E){qt(s,s.return,E)}else{var f=Ur(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(E){qt(s,s.return,E)}}l&64&&x0(s),l&512&&Oo(s,s.return);break;case 3:if(ja(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{sg(t,i)}catch(E){qt(s,s.return,E)}}break;case 27:i===null&&l&4&&E0(s);case 26:case 5:ja(t,s),i===null&&l&4&&M0(s),l&512&&Oo(s,s.return);break;case 12:ja(t,s);break;case 13:ja(t,s),l&4&&C0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=ly.bind(null,s),Ay(t,s))));break;case 22:if(l=s.memoizedState!==null||ha,!l){i=i!==null&&i.memoizedState!==null||sn,f=ha;var m=sn;ha=l,(sn=i)&&!m?Ka(t,s,(s.subtreeFlags&8772)!==0):ja(t,s),ha=f,sn=m}break;case 30:break;default:ja(t,s)}}function A0(t){var i=t.alternate;i!==null&&(t.alternate=null,A0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Jr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Xn=!1;function pa(t,i,s){for(s=s.child;s!==null;)R0(t,i,s),s=s.sibling}function R0(t,i,s){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(me,s)}catch{}switch(s.tag){case 26:sn||zi(s,i),pa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||zi(s,i);var l=Qt,f=Xn;nr(s.type)&&(Qt=s.stateNode,Xn=!1),pa(t,i,s),Xo(s.stateNode),Qt=l,Xn=f;break;case 5:sn||zi(s,i);case 6:if(l=Qt,f=Xn,Qt=null,pa(t,i,s),Qt=l,Xn=f,Qt!==null)if(Xn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(s.stateNode)}catch(m){qt(s,i,m)}else try{Qt.removeChild(s.stateNode)}catch(m){qt(s,i,m)}break;case 18:Qt!==null&&(Xn?(t=Qt,m_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),$o(t)):m_(Qt,s.stateNode));break;case 4:l=Qt,f=Xn,Qt=s.stateNode.containerInfo,Xn=!0,pa(t,i,s),Qt=l,Xn=f;break;case 0:case 11:case 14:case 15:sn||Za(2,s,i),sn||Za(4,s,i),pa(t,i,s);break;case 1:sn||(zi(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&S0(s,i,l)),pa(t,i,s);break;case 21:pa(t,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,pa(t,i,s),sn=l;break;default:pa(t,i,s)}}function C0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$o(t)}catch(s){qt(i,i.return,s)}}function ey(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new b0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new b0),i;default:throw Error(r(435,t.tag))}}function ed(t,i){var s=ey(t);i.forEach(function(l){var f=uy.bind(null,t,l);s.has(l)||(s.add(l),l.then(f,f))})}function $n(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=t,E=i,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(nr(w.type)){Qt=w.stateNode,Xn=!1;break e}break;case 5:Qt=w.stateNode,Xn=!1;break e;case 3:case 4:Qt=w.stateNode.containerInfo,Xn=!0;break e}w=w.return}if(Qt===null)throw Error(r(160));R0(m,E,f),Qt=null,Xn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)w0(i,t),i=i.sibling}var yi=null;function w0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:$n(i,t),Jn(t),l&4&&(Za(3,t,t.return),Po(3,t),Za(5,t,t.return));break;case 1:$n(i,t),Jn(t),l&512&&(sn||s===null||zi(s,s.return)),l&64&&ha&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=yi;if($n(i,t),Jn(t),l&512&&(sn||s===null||zi(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Ji]||m[vn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),wn(m,l,s),m[vn]=t,nn(m),l=m;break e;case"link":var E=E_("link","href",f).get(l+(s.href||""));if(E){for(var w=0;w<E.length;w++)if(m=E[w],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(w,1);break t}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;case"meta":if(E=E_("meta","content",f).get(l+(s.content||""))){for(w=0;w<E.length;w++)if(m=E[w],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(w,1);break t}}m=f.createElement(l),wn(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[vn]=t,nn(m),l=m}t.stateNode=l}else b_(f,t.type,t.stateNode);else t.stateNode=y_(f,l,t.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?b_(f,t.type,t.stateNode):y_(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,s.memoizedProps)}break;case 27:$n(i,t),Jn(t),l&512&&(sn||s===null||zi(s,s.return)),s!==null&&l&4&&Kf(t,t.memoizedProps,s.memoizedProps);break;case 5:if($n(i,t),Jn(t),l&512&&(sn||s===null||zi(s,s.return)),t.flags&32){f=t.stateNode;try{an(f,"")}catch(ue){qt(t,t.return,ue)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Kf(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Jf=!0);break;case 6:if($n(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(ue){qt(t,t.return,ue)}}break;case 3:if(Du=null,f=yi,yi=Cu(i.containerInfo),$n(i,t),yi=f,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{$o(i.containerInfo)}catch(ue){qt(t,t.return,ue)}Jf&&(Jf=!1,D0(t));break;case 4:l=yi,yi=Cu(t.stateNode.containerInfo),$n(i,t),Jn(t),yi=l;break;case 12:$n(i,t),Jn(t);break;case 13:$n(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(sd=At()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ed(t,l)));break;case 22:f=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,se=ha,_e=sn;if(ha=se||f,sn=_e||G,$n(i,t),sn=_e,ha=se,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||G||ha||sn||Lr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(m=G.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=G.stateNode;var Se=G.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;w.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(ue){qt(G,G.return,ue)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=f?"":G.memoizedProps}catch(ue){qt(G,G.return,ue)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ed(t,s))));break;case 19:$n(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,ed(t,l)));break;case 30:break;case 21:break;default:$n(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(y0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=Qf(t);mu(t,m,f);break;case 5:var E=s.stateNode;s.flags&32&&(an(E,""),s.flags&=-33);var w=Qf(t);mu(t,w,E);break;case 3:case 4:var G=s.stateNode.containerInfo,se=Qf(t);$f(t,se,G);break;default:throw Error(r(161))}}catch(_e){qt(t,t.return,_e)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function D0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;D0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ja(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)T0(t,i.alternate,i),i=i.sibling}function Lr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Za(4,i,i.return),Lr(i);break;case 1:zi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&S0(i,i.return,s),Lr(i);break;case 27:Xo(i.stateNode);case 26:case 5:zi(i,i.return),Lr(i);break;case 22:i.memoizedState===null&&Lr(i);break;case 30:Lr(i);break;default:Lr(i)}t=t.sibling}}function Ka(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ka(f,m,s),Po(4,m);break;case 1:if(Ka(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(se){qt(l,l.return,se)}if(l=m,f=l.updateQueue,f!==null){var w=l.stateNode;try{var G=f.shared.hiddenCallbacks;if(G!==null)for(f.shared.hiddenCallbacks=null,f=0;f<G.length;f++)rg(G[f],w)}catch(se){qt(l,l.return,se)}}s&&E&64&&x0(m),Oo(m,m.return);break;case 27:E0(m);case 26:case 5:Ka(f,m,s),s&&l===null&&E&4&&M0(m),Oo(m,m.return);break;case 12:Ka(f,m,s);break;case 13:Ka(f,m,s),s&&E&4&&C0(f,m);break;case 22:m.memoizedState===null&&Ka(f,m,s),Oo(m,m.return);break;case 30:break;default:Ka(f,m,s)}i=i.sibling}}function td(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&So(s))}function nd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t))}function Hi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)U0(t,i,s,l),i=i.sibling}function U0(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Hi(t,i,s,l),f&2048&&Po(9,i);break;case 1:Hi(t,i,s,l);break;case 3:Hi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&So(t)));break;case 12:if(f&2048){Hi(t,i,s,l),t=i.stateNode;try{var m=i.memoizedProps,E=m.id,w=m.onPostCommit;typeof w=="function"&&w(E,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){qt(i,i.return,G)}}else Hi(t,i,s,l);break;case 13:Hi(t,i,s,l);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Hi(t,i,s,l):Io(t,i):m._visibility&2?Hi(t,i,s,l):(m._visibility|=2,vs(t,i,s,l,(i.subtreeFlags&10256)!==0)),f&2048&&td(E,i);break;case 24:Hi(t,i,s,l),f&2048&&nd(i.alternate,i);break;default:Hi(t,i,s,l)}}function vs(t,i,s,l,f){for(f=f&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var m=t,E=i,w=s,G=l,se=E.flags;switch(E.tag){case 0:case 11:case 15:vs(m,E,w,G,f),Po(8,E);break;case 23:break;case 22:var _e=E.stateNode;E.memoizedState!==null?_e._visibility&2?vs(m,E,w,G,f):Io(m,E):(_e._visibility|=2,vs(m,E,w,G,f)),f&&se&2048&&td(E.alternate,E);break;case 24:vs(m,E,w,G,f),f&&se&2048&&nd(E.alternate,E);break;default:vs(m,E,w,G,f)}i=i.sibling}}function Io(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:Io(s,l),f&2048&&td(l.alternate,l);break;case 24:Io(s,l),f&2048&&nd(l.alternate,l);break;default:Io(s,l)}i=i.sibling}}var Fo=8192;function xs(t){if(t.subtreeFlags&Fo)for(t=t.child;t!==null;)L0(t),t=t.sibling}function L0(t){switch(t.tag){case 26:xs(t),t.flags&Fo&&t.memoizedState!==null&&zy(yi,t.memoizedState,t.memoizedProps);break;case 5:xs(t);break;case 3:case 4:var i=yi;yi=Cu(t.stateNode.containerInfo),xs(t),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Fo,Fo=16777216,xs(t),Fo=i):xs(t));break;default:xs(t)}}function N0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Bo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,O0(l,t)}N0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)P0(t),t=t.sibling}function P0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,gu(t)):Bo(t);break;default:Bo(t)}}function gu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Mn=l,O0(l,t)}N0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Za(8,i,i.return),gu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,gu(i));break;default:gu(i)}t=t.sibling}}function O0(t,i){for(;Mn!==null;){var s=Mn;switch(s.tag){case 0:case 11:case 15:Za(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:So(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Mn=l;else e:for(s=t;Mn!==null;){l=Mn;var f=l.sibling,m=l.return;if(A0(l),l===s){Mn=null;break e}if(f!==null){f.return=m,Mn=f;break e}Mn=m}}}var ty={getCacheForType:function(t){var i=Ln(hn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},ny=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,_t=null,Tt=0,zt=0,ei=null,Qa=!1,Ss=!1,id=!1,ma=0,tn=0,$a=0,Nr=0,ad=0,hi=0,Ms=0,zo=null,Wn=null,rd=!1,sd=0,_u=1/0,vu=null,Ja=null,Cn=0,er=null,ys=null,Es=0,od=0,ld=null,I0=null,Ho=0,ud=null;function ti(){if((Bt&2)!==0&&Tt!==0)return Tt&-Tt;if(z.T!==null){var t=cs;return t!==0?t:gd()}return wt()}function F0(){hi===0&&(hi=(Tt&536870912)===0||Pt?Q():536870912);var t=di.current;return t!==null&&(t.flags|=32),hi}function ni(t,i,s){(t===Zt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(bs(t,0),tr(t,Tt,hi,!1)),Be(t,s),((Bt&2)===0||t!==Zt)&&(t===Zt&&((Bt&2)===0&&(Nr|=s),tn===4&&tr(t,Tt,hi,!1)),Vi(t))}function B0(t,i,s){if((Bt&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Ue(t,i),f=l?ry(t,i):dd(t,i,!0),m=l;do{if(f===0){Ss&&!l&&tr(t,i,0,!1);break}else{if(s=t.current.alternate,m&&!iy(s)){f=dd(t,i,!1),m=!1;continue}if(f===2){if(m=i,t.errorRecoveryDisabledLanes&m)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;e:{var w=t;f=zo;var G=w.current.memoizedState.isDehydrated;if(G&&(bs(w,E).flags|=256),E=dd(w,E,!1),E!==2){if(id&&!G){w.errorRecoveryDisabledLanes|=m,Nr|=m,f=4;break e}m=Wn,Wn=f,m!==null&&(Wn===null?Wn=m:Wn.push.apply(Wn,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){bs(t,0),tr(t,i,0,!0);break}e:{switch(l=t,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:tr(l,i,hi,!Qa);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=sd+300-At(),10<f)){if(tr(l,i,hi,!Qa),qe(l,0,!0)!==0)break e;l.timeoutHandle=h_(z0.bind(null,l,s,Wn,vu,rd,i,hi,Nr,Ms,Qa,m,2,-0,0),f);break e}z0(l,s,Wn,vu,rd,i,hi,Nr,Ms,Qa,m,0,-0,0)}}break}while(!0);Vi(t)}function z0(t,i,s,l,f,m,E,w,G,se,_e,Se,le,ue){if(t.timeoutHandle=-1,Se=i.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Yo={stylesheets:null,count:0,unsuspend:By},L0(i),Se=Hy(),Se!==null)){t.cancelPendingCommit=Se(q0.bind(null,t,i,m,s,l,f,E,w,G,_e,1,le,ue)),tr(t,m,E,!se);return}q0(t,i,m,s,l,f,E,w,G)}function iy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Kn(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function tr(t,i,s,l){i&=~ad,i&=~Nr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var m=31-Oe(f),E=1<<m;l[m]=-1,f&=~E}s!==0&&Me(t,s,i)}function xu(){return(Bt&6)===0?(Vo(0),!1):!0}function cd(){if(_t!==null){if(zt===0)var t=_t.return;else t=_t,oa=Rr=null,Rf(t),gs=null,Uo=0,t=_t;for(;t!==null;)v0(t.alternate,t),t=t.return;_t=null}}function bs(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,My(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),cd(),Zt=t,_t=s=aa(t.current,null),Tt=i,zt=0,ei=null,Qa=!1,Ss=Ue(t,i),id=!1,Ms=hi=ad=Nr=$a=tn=0,Wn=zo=null,rd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Oe(l),m=1<<f;i|=t[f],l&=~m}return ma=i,Vl(),s}function H0(t,i){mt=null,z.H=su,i===yo||i===Kl?(i=ig(),zt=3):i===eg?(i=ig(),zt=4):zt=i===a0?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,_t===null&&(tn=1,fu(t,li(i,t.current)))}function V0(){var t=z.H;return z.H=su,t===null?su:t}function G0(){var t=z.A;return z.A=ty,t}function fd(){tn=4,Qa||(Tt&4194048)!==Tt&&di.current!==null||(Ss=!0),($a&134217727)===0&&(Nr&134217727)===0||Zt===null||tr(Zt,Tt,hi,!1)}function dd(t,i,s){var l=Bt;Bt|=2;var f=V0(),m=G0();(Zt!==t||Tt!==i)&&(vu=null,bs(t,i)),i=!1;var E=tn;e:do try{if(zt!==0&&_t!==null){var w=_t,G=ei;switch(zt){case 8:cd(),E=6;break e;case 3:case 2:case 9:case 6:di.current===null&&(i=!0);var se=zt;if(zt=0,ei=null,Ts(t,w,G,se),s&&Ss){E=0;break e}break;default:se=zt,zt=0,ei=null,Ts(t,w,G,se)}}ay(),E=tn;break}catch(_e){H0(t,_e)}while(!0);return i&&t.shellSuspendCounter++,oa=Rr=null,Bt=l,z.H=f,z.A=m,_t===null&&(Zt=null,Tt=0,Vl()),E}function ay(){for(;_t!==null;)k0(_t)}function ry(t,i){var s=Bt;Bt|=2;var l=V0(),f=G0();Zt!==t||Tt!==i?(vu=null,_u=At()+500,bs(t,i)):Ss=Ue(t,i);e:do try{if(zt!==0&&_t!==null){i=_t;var m=ei;t:switch(zt){case 1:zt=0,ei=null,Ts(t,i,m,1);break;case 2:case 9:if(tg(m)){zt=0,ei=null,X0(i);break}i=function(){zt!==2&&zt!==9||Zt!==t||(zt=7),Vi(t)},m.then(i,i);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:tg(m)?(zt=0,ei=null,X0(i)):(zt=0,ei=null,Ts(t,i,m,7));break;case 5:var E=null;switch(_t.tag){case 26:E=_t.memoizedState;case 5:case 27:var w=_t;if(!E||T_(E)){zt=0,ei=null;var G=w.sibling;if(G!==null)_t=G;else{var se=w.return;se!==null?(_t=se,Su(se)):_t=null}break t}}zt=0,ei=null,Ts(t,i,m,5);break;case 6:zt=0,ei=null,Ts(t,i,m,6);break;case 8:cd(),tn=6;break e;default:throw Error(r(462))}}sy();break}catch(_e){H0(t,_e)}while(!0);return oa=Rr=null,z.H=l,z.A=f,Bt=s,_t!==null?0:(Zt=null,Tt=0,Vl(),tn)}function sy(){for(;_t!==null&&!yt();)k0(_t)}function k0(t){var i=g0(t.alternate,t,ma);t.memoizedProps=t.pendingProps,i===null?Su(t):_t=i}function X0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=c0(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=c0(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:Rf(i);default:v0(s,i),i=_t=Wm(i,ma),i=g0(s,i,ma)}t.memoizedProps=t.pendingProps,i===null?Su(t):_t=i}function Ts(t,i,s,l){oa=Rr=null,Rf(i),gs=null,Uo=0;var f=i.return;try{if(jM(t,f,i,s,Tt)){tn=1,fu(t,li(s,t.current)),_t=null;return}}catch(m){if(f!==null)throw _t=f,m;tn=1,fu(t,li(s,t.current)),_t=null;return}i.flags&32768?(Pt||l===1?t=!0:Ss||(Tt&536870912)!==0?t=!1:(Qa=t=!0,(l===2||l===9||l===3||l===6)&&(l=di.current,l!==null&&l.tag===13&&(l.flags|=16384))),W0(i,t)):Su(i)}function Su(t){var i=t;do{if((i.flags&32768)!==0){W0(i,Qa);return}t=i.return;var s=QM(i.alternate,i,ma);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);tn===0&&(tn=5)}function W0(t,i){do{var s=$M(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);tn=6,_t=null}function q0(t,i,s,l,f,m,E,w,G){t.cancelPendingCommit=null;do Mu();while(Cn!==0);if((Bt&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=tf,be(t,s,m,E,w,G),t===Zt&&(_t=Zt=null,Tt=0),ys=i,er=t,Es=s,od=m,ld=f,I0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,cy(Ee,function(){return Q0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=V.p,V.p=2,E=Bt,Bt|=4;try{JM(t,i,s)}finally{Bt=E,V.p=f,z.T=l}}Cn=1,Y0(),Z0(),j0()}}function Y0(){if(Cn===1){Cn=0;var t=er,i=ys,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=V.p;V.p=2;var f=Bt;Bt|=4;try{w0(i,t);var m=bd,E=Om(t.containerInfo),w=m.focusedElem,G=m.selectionRange;if(E!==w&&w&&w.ownerDocument&&Pm(w.ownerDocument.documentElement,w)){if(G!==null&&Kc(w)){var se=G.start,_e=G.end;if(_e===void 0&&(_e=se),"selectionStart"in w)w.selectionStart=se,w.selectionEnd=Math.min(_e,w.value.length);else{var Se=w.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var ue=le.getSelection(),at=w.textContent.length,tt=Math.min(G.start,at),kt=G.end===void 0?tt:Math.min(G.end,at);!ue.extend&&tt>kt&&(E=kt,kt=tt,tt=E);var J=Nm(w,tt),q=Nm(w,kt);if(J&&q&&(ue.rangeCount!==1||ue.anchorNode!==J.node||ue.anchorOffset!==J.offset||ue.focusNode!==q.node||ue.focusOffset!==q.offset)){var ie=Se.createRange();ie.setStart(J.node,J.offset),ue.removeAllRanges(),tt>kt?(ue.addRange(ie),ue.extend(q.node,q.offset)):(ie.setEnd(q.node,q.offset),ue.addRange(ie))}}}}for(Se=[],ue=w;ue=ue.parentNode;)ue.nodeType===1&&Se.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Se.length;w++){var xe=Se[w];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Nu=!!Ed,bd=Ed=null}finally{Bt=f,V.p=l,z.T=s}}t.current=i,Cn=2}}function Z0(){if(Cn===2){Cn=0;var t=er,i=ys,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=V.p;V.p=2;var f=Bt;Bt|=4;try{T0(t,i.alternate,i)}finally{Bt=f,V.p=l,z.T=s}}Cn=3}}function j0(){if(Cn===4||Cn===3){Cn=0,rt();var t=er,i=ys,s=Es,l=I0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,ys=er=null,K0(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(Ja=null),Ot(s),i=i.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=V.p,V.p=2,z.T=null;try{for(var m=t.onRecoverableError,E=0;E<l.length;E++){var w=l[E];m(w.value,{componentStack:w.stack})}}finally{z.T=i,V.p=f}}(Es&3)!==0&&Mu(),Vi(t),f=t.pendingLanes,(s&4194090)!==0&&(f&42)!==0?t===ud?Ho++:(Ho=0,ud=t):Ho=0,Vo(0)}}function K0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,So(i)))}function Mu(t){return Y0(),Z0(),j0(),Q0()}function Q0(){if(Cn!==5)return!1;var t=er,i=od;od=0;var s=Ot(Es),l=z.T,f=V.p;try{V.p=32>s?32:s,z.T=null,s=ld,ld=null;var m=er,E=Es;if(Cn=0,ys=er=null,Es=0,(Bt&6)!==0)throw Error(r(331));var w=Bt;if(Bt|=4,P0(m.current),U0(m,m.current,E,s),Bt=w,Vo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(me,m)}catch{}return!0}finally{V.p=f,z.T=l,K0(t,i)}}function $0(t,i,s){i=li(s,i),i=Vf(t.stateNode,i,2),t=Xa(t,i,2),t!==null&&(Be(t,2),Vi(t))}function qt(t,i,s){if(t.tag===3)$0(t,t,s);else for(;i!==null;){if(i.tag===3){$0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ja===null||!Ja.has(l))){t=li(s,t),s=n0(2),l=Xa(i,s,2),l!==null&&(i0(s,l,i,t),Be(l,2),Vi(l));break}}i=i.return}}function hd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ny;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(id=!0,f.add(s),t=oy.bind(null,t,i,s),i.then(t,t))}function oy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Zt===t&&(Tt&s)===s&&(tn===4||tn===3&&(Tt&62914560)===Tt&&300>At()-sd?(Bt&2)===0&&bs(t,0):ad|=s,Ms===Tt&&(Ms=0)),Vi(t)}function J0(t,i){i===0&&(i=Ie()),t=ss(t,i),t!==null&&(Be(t,i),Vi(t))}function ly(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),J0(t,s)}function uy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),J0(t,s)}function cy(t,i){return pt(t,i)}var yu=null,As=null,pd=!1,Eu=!1,md=!1,Pr=0;function Vi(t){t!==As&&t.next===null&&(As===null?yu=As=t:As=As.next=t),Eu=!0,pd||(pd=!0,dy())}function Vo(t,i){if(!md&&Eu){md=!0;do for(var s=!1,l=yu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var E=l.suspendedLanes,w=l.pingedLanes;m=(1<<31-Oe(42|t)+1)-1,m&=f&~(E&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,i_(l,m))}else m=Tt,m=qe(l,l===Zt?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Ue(l,m)||(s=!0,i_(l,m));l=l.next}while(s);md=!1}}function fy(){e_()}function e_(){Eu=pd=!1;var t=0;Pr!==0&&(Sy()&&(t=Pr),Pr=0);for(var i=At(),s=null,l=yu;l!==null;){var f=l.next,m=t_(l,i);m===0?(l.next=null,s===null?yu=f:s.next=f,f===null&&(As=s)):(s=l,(t!==0||(m&3)!==0)&&(Eu=!0)),l=f}Vo(t)}function t_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,m=t.pendingLanes&-62914561;0<m;){var E=31-Oe(m),w=1<<E,G=f[E];G===-1?((w&s)===0||(w&l)!==0)&&(f[E]=lt(w,i)):G<=i&&(t.expiredLanes|=w),m&=~w}if(i=Zt,s=Tt,s=qe(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Mt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ue(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&Mt(l),Ot(s)){case 2:case 8:s=Et;break;case 32:s=Ee;break;case 268435456:s=F;break;default:s=Ee}return l=n_.bind(null,t),s=pt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&Mt(l),t.callbackPriority=2,t.callbackNode=null,2}function n_(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Mu()&&t.callbackNode!==s)return null;var l=Tt;return l=qe(t,t===Zt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(B0(t,l,i),t_(t,At()),t.callbackNode!=null&&t.callbackNode===s?n_.bind(null,t):null)}function i_(t,i){if(Mu())return null;B0(t,i,!0)}function dy(){yy(function(){(Bt&6)!==0?pt(Yt,fy):e_()})}function gd(){return Pr===0&&(Pr=Q()),Pr}function a_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Pl(""+t)}function r_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function hy(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=a_((f[Tn]||null).action),E=l.submitter;E&&(i=(i=E[Tn]||null)?a_(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var w=new Bl("action","action",null,l,f);t.push({event:w,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Pr!==0){var G=E?r_(f,E):new FormData(f);If(s,{pending:!0,data:G,method:f.method,action:m},null,G)}}else typeof m=="function"&&(w.preventDefault(),G=E?r_(f,E):new FormData(f),If(s,{pending:!0,data:G,method:f.method,action:m},m,G))},currentTarget:f}]})}}for(var _d=0;_d<ef.length;_d++){var vd=ef[_d],py=vd.toLowerCase(),my=vd[0].toUpperCase()+vd.slice(1);Mi(py,"on"+my)}Mi(Bm,"onAnimationEnd"),Mi(zm,"onAnimationIteration"),Mi(Hm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(LM,"onTransitionRun"),Mi(NM,"onTransitionStart"),Mi(PM,"onTransitionCancel"),Mi(Vm,"onTransitionEnd"),Ba("onMouseEnter",["mouseout","mouseover"]),Ba("onMouseLeave",["mouseout","mouseover"]),Ba("onPointerEnter",["pointerout","pointerover"]),Ba("onPointerLeave",["pointerout","pointerover"]),ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Go));function s_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var E=l.length-1;0<=E;E--){var w=l[E],G=w.instance,se=w.currentTarget;if(w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=se;try{m(f)}catch(_e){cu(_e)}f.currentTarget=null,m=G}else for(E=0;E<l.length;E++){if(w=l[E],G=w.instance,se=w.currentTarget,w=w.listener,G!==m&&f.isPropagationStopped())break e;m=w,f.currentTarget=se;try{m(f)}catch(_e){cu(_e)}f.currentTarget=null,m=G}}}}function vt(t,i){var s=i[ao];s===void 0&&(s=i[ao]=new Set);var l=t+"__bubble";s.has(l)||(o_(i,t,2,!1),s.add(l))}function xd(t,i,s){var l=0;i&&(l|=4),o_(s,t,l,i)}var bu="_reactListening"+Math.random().toString(36).slice(2);function Sd(t){if(!t[bu]){t[bu]=!0,ro.forEach(function(s){s!=="selectionchange"&&(gy.has(s)||xd(s,!1,t),xd(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bu]||(i[bu]=!0,xd("selectionchange",!1,i))}}function o_(t,i,s,l){switch(U_(i)){case 2:var f=ky;break;case 8:f=Xy;break;default:f=Pd}s=f.bind(null,i,s,t),f=void 0,!Vc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function Md(t,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var w=l.stateNode.containerInfo;if(w===f)break;if(E===4)for(E=l.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;w!==null;){if(E=ea(w),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){l=m=E;continue e}w=w.parentNode}}l=l.return}pm(function(){var se=m,_e=zc(s),Se=[];e:{var le=Gm.get(t);if(le!==void 0){var ue=Bl,at=t;switch(t){case"keypress":if(Il(s)===0)break e;case"keydown":case"keyup":ue=cM;break;case"focusin":at="focus",ue=Wc;break;case"focusout":at="blur",ue=Wc;break;case"beforeblur":case"afterblur":ue=Wc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=_m;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=$S;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=hM;break;case Bm:case zm:case Hm:ue=tM;break;case Vm:ue=mM;break;case"scroll":case"scrollend":ue=KS;break;case"wheel":ue=_M;break;case"copy":case"cut":case"paste":ue=iM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=xm;break;case"toggle":case"beforetoggle":ue=xM}var tt=(i&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),J=tt?le!==null?le+"Capture":null:le;tt=[];for(var q=se,ie;q!==null;){var xe=q;if(ie=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ie===null||J===null||(xe=so(q,J),xe!=null&&tt.push(ko(q,xe,ie))),kt)break;q=q.return}0<tt.length&&(le=new ue(le,at,null,s,_e),Se.push({event:le,listeners:tt}))}}if((i&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",le&&s!==Bc&&(at=s.relatedTarget||s.fromElement)&&(ea(at)||at[Pi]))break e;if((ue||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,ue?(at=s.relatedTarget||s.toElement,ue=se,at=at?ea(at):null,at!==null&&(kt=u(at),tt=at.tag,at!==kt||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(ue=null,at=se),ue!==at)){if(tt=_m,xe="onMouseLeave",J="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(tt=xm,xe="onPointerLeave",J="onPointerEnter",q="pointer"),kt=ue==null?le:Fa(ue),ie=at==null?le:Fa(at),le=new tt(xe,q+"leave",ue,s,_e),le.target=kt,le.relatedTarget=ie,xe=null,ea(_e)===se&&(tt=new tt(J,q+"enter",at,s,_e),tt.target=ie,tt.relatedTarget=kt,xe=tt),kt=xe,ue&&at)t:{for(tt=ue,J=at,q=0,ie=tt;ie;ie=Rs(ie))q++;for(ie=0,xe=J;xe;xe=Rs(xe))ie++;for(;0<q-ie;)tt=Rs(tt),q--;for(;0<ie-q;)J=Rs(J),ie--;for(;q--;){if(tt===J||J!==null&&tt===J.alternate)break t;tt=Rs(tt),J=Rs(J)}tt=null}else tt=null;ue!==null&&l_(Se,le,ue,tt,!1),at!==null&&kt!==null&&l_(Se,kt,at,tt,!0)}}e:{if(le=se?Fa(se):window,ue=le.nodeName&&le.nodeName.toLowerCase(),ue==="select"||ue==="input"&&le.type==="file")var Ye=Rm;else if(Tm(le))if(Cm)Ye=wM;else{Ye=RM;var gt=AM}else ue=le.nodeName,!ue||ue.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&vr(se.elementType)&&(Ye=Rm):Ye=CM;if(Ye&&(Ye=Ye(t,se))){Am(Se,Ye,s,_e);break e}gt&&gt(t,le,se),t==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&Ii(le,"number",le.value)}switch(gt=se?Fa(se):window,t){case"focusin":(Tm(gt)||gt.contentEditable==="true")&&(is=gt,Qc=se,mo=null);break;case"focusout":mo=Qc=is=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Im(Se,s,_e);break;case"selectionchange":if(UM)break;case"keydown":case"keyup":Im(Se,s,_e)}var je;if(Yc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ns?Em(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(Sm&&s.locale!=="ko"&&(ns||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ns&&(je=mm()):(Ha=_e,Gc="value"in Ha?Ha.value:Ha.textContent,ns=!0)),gt=Tu(se,nt),0<gt.length&&(nt=new vm(nt,t,null,s,_e),Se.push({event:nt,listeners:gt}),je?nt.data=je:(je=bm(s),je!==null&&(nt.data=je)))),(je=MM?yM(t,s):EM(t,s))&&(nt=Tu(se,"onBeforeInput"),0<nt.length&&(gt=new vm("onBeforeInput","beforeinput",null,s,_e),Se.push({event:gt,listeners:nt}),gt.data=je)),hy(Se,t,se,s,_e)}s_(Se,i)})}function ko(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Tu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=so(t,s),f!=null&&l.unshift(ko(t,f,m)),f=so(t,i),f!=null&&l.push(ko(t,f,m))),t.tag===3)return l;t=t.return}return[]}function Rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l_(t,i,s,l,f){for(var m=i._reactName,E=[];s!==null&&s!==l;){var w=s,G=w.alternate,se=w.stateNode;if(w=w.tag,G!==null&&G===l)break;w!==5&&w!==26&&w!==27||se===null||(G=se,f?(se=so(s,m),se!=null&&E.unshift(ko(s,se,G))):f||(se=so(s,m),se!=null&&E.push(ko(s,se,G)))),s=s.return}E.length!==0&&t.push({event:i,listeners:E})}var _y=/\r\n?/g,vy=/\u0000|\uFFFD/g;function u_(t){return(typeof t=="string"?t:""+t).replace(_y,`
`).replace(vy,"")}function c_(t,i){return i=u_(i),u_(t)===i}function Au(){}function Gt(t,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||an(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&an(t,""+l);break;case"className":ce(t,"class",l);break;case"tabIndex":ce(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(t,s,l);break;case"style":An(t,l,m);break;case"data":if(i!=="object"){ce(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pl(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Gt(t,i,"name",f.name,f,null),Gt(t,i,"formEncType",f.formEncType,f,null),Gt(t,i,"formMethod",f.formMethod,f,null),Gt(t,i,"formTarget",f.formTarget,f,null)):(Gt(t,i,"encType",f.encType,f,null),Gt(t,i,"method",f.method,f,null),Gt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Pl(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Au);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Pl(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),$(t,"popover",l);break;case"xlinkActuate":oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":oe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":oe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":oe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":oe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=na.get(s)||s,$(t,s,l))}}function yd(t,i,s,l,f,m){switch(s){case"style":An(t,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?an(t,l):(typeof l=="number"||typeof l=="bigint")&&an(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Au);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ul.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=t[Tn]||null,m=m!=null?m[s]:null,typeof m=="function"&&t.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):$(t,s,l)}}}function wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,m,E,s,null)}}f&&Gt(t,i,"srcSet",s.srcSet,s,null),l&&Gt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var w=m=E=f=null,G=null,se=null;for(l in s)if(s.hasOwnProperty(l)){var _e=s[l];if(_e!=null)switch(l){case"name":f=_e;break;case"type":E=_e;break;case"checked":G=_e;break;case"defaultChecked":se=_e;break;case"value":m=_e;break;case"defaultValue":w=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,i));break;default:Gt(t,i,l,_e,s,null)}}Un(t,m,w,G,se,E,f,!1),Wt(t);return;case"select":vt("invalid",t),l=E=m=null;for(f in s)if(s.hasOwnProperty(f)&&(w=s[f],w!=null))switch(f){case"value":m=w;break;case"defaultValue":E=w;break;case"multiple":l=w;default:Gt(t,i,f,w,s,null)}i=m,s=E,t.multiple=!!l,i!=null?ln(t,!!l,i,!1):s!=null&&ln(t,!!l,s,!0);return;case"textarea":vt("invalid",t),m=f=l=null;for(E in s)if(s.hasOwnProperty(E)&&(w=s[E],w!=null))switch(E){case"value":l=w;break;case"defaultValue":f=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Gt(t,i,E,w,s,null)}Ft(t,l,f,m),Wt(t);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Gt(t,i,G,l,s,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<Go.length;l++)vt(Go[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in s)if(s.hasOwnProperty(se)&&(l=s[se],l!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Gt(t,i,se,l,s,null)}return;default:if(vr(i)){for(_e in s)s.hasOwnProperty(_e)&&(l=s[_e],l!==void 0&&yd(t,i,_e,l,s,void 0));return}}for(w in s)s.hasOwnProperty(w)&&(l=s[w],l!=null&&Gt(t,i,w,l,s,null))}function xy(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,w=null,G=null,se=null,_e=null;for(ue in s){var Se=s[ue];if(s.hasOwnProperty(ue)&&Se!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":G=Se;default:l.hasOwnProperty(ue)||Gt(t,i,ue,null,l,Se)}}for(var le in l){var ue=l[le];if(Se=s[le],l.hasOwnProperty(le)&&(ue!=null||Se!=null))switch(le){case"type":m=ue;break;case"name":f=ue;break;case"checked":se=ue;break;case"defaultChecked":_e=ue;break;case"value":E=ue;break;case"defaultValue":w=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,i));break;default:ue!==Se&&Gt(t,i,le,ue,l,Se)}}xt(t,E,w,G,se,_e,m,f);return;case"select":ue=E=w=le=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ue=G;default:l.hasOwnProperty(m)||Gt(t,i,m,null,l,G)}for(f in l)if(m=l[f],G=s[f],l.hasOwnProperty(f)&&(m!=null||G!=null))switch(f){case"value":le=m;break;case"defaultValue":w=m;break;case"multiple":E=m;default:m!==G&&Gt(t,i,f,m,l,G)}i=w,s=E,l=ue,le!=null?ln(t,!!s,le,!1):!!l!=!!s&&(i!=null?ln(t,!!s,i,!0):ln(t,!!s,s?[]:"",!1));return;case"textarea":ue=le=null;for(w in s)if(f=s[w],s.hasOwnProperty(w)&&f!=null&&!l.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Gt(t,i,w,null,l,f)}for(E in l)if(f=l[E],m=s[E],l.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":le=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&Gt(t,i,E,f,l,m)}za(t,le,ue);return;case"option":for(var at in s)if(le=s[at],s.hasOwnProperty(at)&&le!=null&&!l.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Gt(t,i,at,null,l,le)}for(G in l)if(le=l[G],ue=s[G],l.hasOwnProperty(G)&&le!==ue&&(le!=null||ue!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Gt(t,i,G,le,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)le=s[tt],s.hasOwnProperty(tt)&&le!=null&&!l.hasOwnProperty(tt)&&Gt(t,i,tt,null,l,le);for(se in l)if(le=l[se],ue=s[se],l.hasOwnProperty(se)&&le!==ue&&(le!=null||ue!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:Gt(t,i,se,le,l,ue)}return;default:if(vr(i)){for(var kt in s)le=s[kt],s.hasOwnProperty(kt)&&le!==void 0&&!l.hasOwnProperty(kt)&&yd(t,i,kt,void 0,l,le);for(_e in l)le=l[_e],ue=s[_e],!l.hasOwnProperty(_e)||le===ue||le===void 0&&ue===void 0||yd(t,i,_e,le,l,ue);return}}for(var J in s)le=s[J],s.hasOwnProperty(J)&&le!=null&&!l.hasOwnProperty(J)&&Gt(t,i,J,null,l,le);for(Se in l)le=l[Se],ue=s[Se],!l.hasOwnProperty(Se)||le===ue||le==null&&ue==null||Gt(t,i,Se,le,l,ue)}var Ed=null,bd=null;function Ru(t){return t.nodeType===9?t:t.ownerDocument}function f_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Td(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ad=null;function Sy(){var t=window.event;return t&&t.type==="popstate"?t===Ad?!1:(Ad=t,!0):(Ad=null,!1)}var h_=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(t){return p_.resolve(null).then(t).catch(Ey)}:h_;function Ey(t){setTimeout(function(){throw t})}function nr(t){return t==="head"}function m_(t,i){var s=i,l=0,f=0;do{var m=s.nextSibling;if(t.removeChild(s),m&&m.nodeType===8)if(s=m.data,s==="/$"){if(0<l&&8>l){s=l;var E=t.ownerDocument;if(s&1&&Xo(E.documentElement),s&2&&Xo(E.body),s&4)for(s=E.head,Xo(s),E=s.firstChild;E;){var w=E.nextSibling,G=E.nodeName;E[Ji]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&E.rel.toLowerCase()==="stylesheet"||s.removeChild(E),E=w}}if(f===0){t.removeChild(m),$o(i);return}f--}else s==="$"||s==="$?"||s==="$!"?f++:l=s.charCodeAt(0)-48;else l=0;s=m}while(s);$o(i)}function Rd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rd(s),Jr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function by(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ji])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(m=t.getAttribute("rel"),m==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(m!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(m=t.getAttribute("src"),(m!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===m)return t}else return t;if(t=Ei(t.nextSibling),t===null)break}return null}function Ty(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ei(t.nextSibling),t===null))return null;return t}function Cd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function Ay(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ei(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var wd=null;function g_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function __(t,i,s){switch(i=Ru(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Jr(t)}var pi=new Map,v_=new Set;function Cu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ga=V.d;V.d={f:Ry,r:Cy,D:wy,C:Dy,L:Uy,m:Ly,X:Py,S:Ny,M:Oy};function Ry(){var t=ga.f(),i=xu();return t||i}function Cy(t){var i=xi(t);i!==null&&i.tag===5&&i.type==="form"?Bg(i):ga.r(t)}var Cs=typeof document>"u"?null:document;function x_(t,i,s){var l=Cs;if(l&&typeof i=="string"&&i){var f=ot(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),v_.has(f)||(v_.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),wn(i,"link",t),nn(i),l.head.appendChild(i)))}}function wy(t){ga.D(t),x_("dns-prefetch",t,null)}function Dy(t,i){ga.C(t,i),x_("preconnect",t,i)}function Uy(t,i,s){ga.L(t,i,s);var l=Cs;if(l&&t&&i){var f='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+ot(s.imageSizes)+'"]')):f+='[href="'+ot(t)+'"]';var m=f;switch(i){case"style":m=ws(t);break;case"script":m=Ds(t)}pi.has(m)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),pi.set(m,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(Wo(m))||i==="script"&&l.querySelector(qo(m))||(i=l.createElement("link"),wn(i,"link",t),nn(i),l.head.appendChild(i)))}}function Ly(t,i){ga.m(t,i);var s=Cs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ds(t)}if(!pi.has(m)&&(t=g({rel:"modulepreload",href:t},i),pi.set(m,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(qo(m)))return}l=s.createElement("link"),wn(l,"link",t),nn(l),s.head.appendChild(l)}}}function Ny(t,i,s){ga.S(t,i,s);var l=Cs;if(l&&t){var f=Si(l).hoistableStyles,m=ws(t);i=i||"default";var E=f.get(m);if(!E){var w={loading:0,preload:null};if(E=l.querySelector(Wo(m)))w.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=pi.get(m))&&Dd(t,s);var G=E=l.createElement("link");nn(G),wn(G,"link",t),G._p=new Promise(function(se,_e){G.onload=se,G.onerror=_e}),G.addEventListener("load",function(){w.loading|=1}),G.addEventListener("error",function(){w.loading|=2}),w.loading|=4,wu(E,i,l)}E={type:"stylesheet",instance:E,count:1,state:w},f.set(m,E)}}}function Py(t,i){ga.X(t,i);var s=Cs;if(s&&t){var l=Si(s).hoistableScripts,f=Ds(t),m=l.get(f);m||(m=s.querySelector(qo(f)),m||(t=g({src:t,async:!0},i),(i=pi.get(f))&&Ud(t,i),m=s.createElement("script"),nn(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function Oy(t,i){ga.M(t,i);var s=Cs;if(s&&t){var l=Si(s).hoistableScripts,f=Ds(t),m=l.get(f);m||(m=s.querySelector(qo(f)),m||(t=g({src:t,async:!0,type:"module"},i),(i=pi.get(f))&&Ud(t,i),m=s.createElement("script"),nn(m),wn(m,"link",t),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function S_(t,i,s,l){var f=(f=te.current)?Cu(f):null;if(!f)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=ws(s.href),s=Si(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=ws(s.href);var m=Si(f).hoistableStyles,E=m.get(t);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(t,E),(m=f.querySelector(Wo(t)))&&!m._p&&(E.instance=m,E.state.loading=5),pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(t,s),m||Iy(f,t,s,E.state))),i&&l===null)throw Error(r(528,""));return E}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ds(s),s=Si(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ws(t){return'href="'+ot(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function M_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Iy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),nn(i),t.head.appendChild(i))}function Ds(t){return'[src="'+ot(t)+'"]'}function qo(t){return"script[async]"+t}function y_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return i.instance=l,nn(l),l;var f=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),nn(l),wn(l,"style",f),wu(l,s.precedence,t),i.instance=l;case"stylesheet":f=ws(s.href);var m=t.querySelector(Wo(f));if(m)return i.state.loading|=4,i.instance=m,nn(m),m;l=M_(s),(f=pi.get(f))&&Dd(l,f),m=(t.ownerDocument||t).createElement("link"),nn(m);var E=m;return E._p=new Promise(function(w,G){E.onload=w,E.onerror=G}),wn(m,"link",l),i.state.loading|=4,wu(m,s.precedence,t),i.instance=m;case"script":return m=Ds(s.src),(f=t.querySelector(qo(m)))?(i.instance=f,nn(f),f):(l=s,(f=pi.get(m))&&(l=g({},s),Ud(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),nn(f),wn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,wu(l,s.precedence,t));return i.instance}function wu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,E=0;E<l.length;E++){var w=l[E];if(w.dataset.precedence===i)m=w;else if(m!==f)break}m?m.parentNode.insertBefore(t,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Dd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Ud(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Du=null;function E_(t,i,s){if(Du===null){var l=new Map,f=Du=new Map;f.set(s,l)}else f=Du,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var m=s[f];if(!(m[Ji]||m[vn]||t==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=t+E;var w=l.get(E);w?w.push(m):l.set(E,[m])}}return l}function b_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Fy(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function T_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Yo=null;function By(){}function zy(t,i,s){if(Yo===null)throw Error(r(475));var l=Yo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=ws(s.href),m=t.querySelector(Wo(f));if(m){t=m._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Uu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=m,nn(m);return}m=t.ownerDocument||t,s=M_(s),(f=pi.get(f))&&Dd(s,f),m=m.createElement("link"),nn(m);var E=m;E._p=new Promise(function(w,G){E.onload=w,E.onerror=G}),wn(m,"link",s),i.instance=m}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Uu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function Hy(){if(Yo===null)throw Error(r(475));var t=Yo;return t.stylesheets&&t.count===0&&Ld(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Ld(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Uu(){if(this.count--,this.count===0){if(this.stylesheets)Ld(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lu=null;function Ld(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,i.forEach(Vy,t),Lu=null,Uu.call(t))}function Vy(t,i){if(!(i.state.loading&4)){var s=Lu.get(t);if(s)var l=s.get(null);else{s=new Map,Lu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),l=E)}l&&s.set(null,l)}f=i.instance,E=f.getAttribute("data-precedence"),m=s.get(E)||l,m===l&&s.set(null,f),s.set(E,f),this.count++,l=Uu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Zo={$$typeof:R,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Gy(t,i,s,l,f,m,E,w){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function A_(t,i,s,l,f,m,E,w,G,se,_e,Se){return t=new Gy(t,i,s,E,w,G,se,Se),i=1,m===!0&&(i|=24),m=Qn(3,null,null,i),t.current=m,m.stateNode=t,i=hf(),i.refCount++,t.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},_f(m),t}function R_(t){return t?(t=os,t):os}function C_(t,i,s,l,f,m){f=R_(f),l.context===null?l.context=f:l.pendingContext=f,l=ka(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Xa(t,l,i),s!==null&&(ni(s,t,i),bo(s,t,i))}function w_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Nd(t,i){w_(t,i),(t=t.alternate)&&w_(t,i)}function D_(t){if(t.tag===13){var i=ss(t,67108864);i!==null&&ni(i,t,67108864),Nd(t,67108864)}}var Nu=!0;function ky(t,i,s,l){var f=z.T;z.T=null;var m=V.p;try{V.p=2,Pd(t,i,s,l)}finally{V.p=m,z.T=f}}function Xy(t,i,s,l){var f=z.T;z.T=null;var m=V.p;try{V.p=8,Pd(t,i,s,l)}finally{V.p=m,z.T=f}}function Pd(t,i,s,l){if(Nu){var f=Od(l);if(f===null)Md(t,i,l,Pu,s),L_(t,l);else if(qy(f,t,i,s,l))l.stopPropagation();else if(L_(t,l),i&4&&-1<Wy.indexOf(t)){for(;f!==null;){var m=xi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ve(m.pendingLanes);if(E!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var G=1<<31-Oe(E);w.entanglements[1]|=G,E&=~G}Vi(m),(Bt&6)===0&&(_u=At()+500,Vo(0))}}break;case 13:w=ss(m,2),w!==null&&ni(w,m,2),xu(),Nd(m,2)}if(m=Od(l),m===null&&Md(t,i,l,Pu,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Md(t,i,l,null,s)}}function Od(t){return t=zc(t),Id(t)}var Pu=null;function Id(t){if(Pu=null,t=ea(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=c(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Pu=t,null}function U_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case Yt:return 2;case Et:return 8;case Ee:case we:return 32;case F:return 268435456;default:return 32}default:return 32}}var Fd=!1,ir=null,ar=null,rr=null,jo=new Map,Ko=new Map,sr=[],Wy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(t,i){switch(t){case"focusin":case"focusout":ir=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":jo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(i.pointerId)}}function Qo(t,i,s,l,f,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=xi(i),i!==null&&D_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function qy(t,i,s,l,f){switch(i){case"focusin":return ir=Qo(ir,t,i,s,l,f),!0;case"dragenter":return ar=Qo(ar,t,i,s,l,f),!0;case"mouseover":return rr=Qo(rr,t,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return jo.set(m,Qo(jo.get(m)||null,t,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,Ko.set(m,Qo(Ko.get(m)||null,t,i,s,l,f)),!0}return!1}function N_(t){var i=ea(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){t.blockedOn=i,oi(t.priority,function(){if(s.tag===13){var l=ti();l=it(l);var f=ss(s,l);f!==null&&ni(f,s,l),Nd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Od(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Bc=l,s.target.dispatchEvent(l),Bc=null}else return i=xi(s),i!==null&&D_(i),t.blockedOn=s,!1;i.shift()}return!0}function P_(t,i,s){Ou(t)&&s.delete(i)}function Yy(){Fd=!1,ir!==null&&Ou(ir)&&(ir=null),ar!==null&&Ou(ar)&&(ar=null),rr!==null&&Ou(rr)&&(rr=null),jo.forEach(P_),Ko.forEach(P_)}function Iu(t,i){t.blockedOn===i&&(t.blockedOn=null,Fd||(Fd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Yy)))}var Fu=null;function O_(t){Fu!==t&&(Fu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Fu===t&&(Fu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Id(l||s)===null)continue;break}var m=xi(s);m!==null&&(t.splice(i,3),i-=3,If(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function $o(t){function i(G){return Iu(G,t)}ir!==null&&Iu(ir,t),ar!==null&&Iu(ar,t),rr!==null&&Iu(rr,t),jo.forEach(i),Ko.forEach(i);for(var s=0;s<sr.length;s++){var l=sr[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<sr.length&&(s=sr[0],s.blockedOn===null);)N_(s),s.blockedOn===null&&sr.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],E=f[Tn]||null;if(typeof m=="function")E||O_(s);else if(E){var w=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Tn]||null)w=E.formAction;else if(Id(f)!==null)continue}else w=E.action;typeof w=="function"?s[l+1]=w:(s.splice(l,3),l-=3),O_(s)}}}function Bd(t){this._internalRoot=t}Bu.prototype.render=Bd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ti();C_(s,l,t,i,null,null)},Bu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;C_(t.current,2,null,t,null,null),xu(),i[Pi]=null}};function Bu(t){this._internalRoot=t}Bu.prototype.unstable_scheduleHydration=function(t){if(t){var i=wt();t={blockedOn:null,target:t,priority:i};for(var s=0;s<sr.length&&i!==0&&i<sr[s].priority;s++);sr.splice(s,0,t),s===0&&N_(t)}};var I_=e.version;if(I_!=="19.1.0")throw Error(r(527,I_,"19.1.0"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(i),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var Zy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{me=zu.inject(Zy),ge=zu}catch{}}return el.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",f=$g,m=Jg,E=e0,w=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(w=i.unstable_transitionCallbacks)),i=A_(t,1,!1,null,null,s,l,f,m,E,w,null),t[Pi]=i.current,Sd(t),new Bd(i)},el.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,f="",m=$g,E=Jg,w=e0,G=null,se=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(w=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(se=s.formState)),i=A_(t,1,!0,i,s??null,l,f,m,E,w,G,se),i.context=R_(null),s=i.current,l=ti(),l=it(l),f=ka(l),f.callback=null,Xa(s,f,l),s=l,i.current.lanes=s,Be(i,s),Vi(i),t[Pi]=i.current,Sd(t),new Bu(i)},el.version="19.1.0",el}var q_;function aE(){if(q_)return Vd.exports;q_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Vd.exports=iE(),Vd.exports}var rE=aE();const sE=Ky(rE);/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Y_="popstate";function oE(a={}){function e(o,u){let{pathname:c="/",search:d="",hash:p=""}=Kr(o.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Uh("",{pathname:c,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let c=o.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let p=o.location.href,h=p.indexOf("#");d=h===-1?p:p.slice(0,h)}return d+"#"+(typeof u=="string"?u:dl(u))}function r(o,u){_i(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return uE(e,n,r,a)}function Jt(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function _i(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lE(){return Math.random().toString(36).substring(2,10)}function Z_(a,e){return{usr:a.state,key:a.key,idx:e}}function Uh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?Kr(e):e,state:n,key:e&&e.key||r||lE()}}function dl({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function Kr(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function uE(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,c=o.history,d="POP",p=null,h=g();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function g(){return(c.state||{idx:null}).idx}function _(){d="POP";let M=g(),x=M==null?null:M-h;h=M,p&&p({action:d,location:b.location,delta:x})}function v(M,x){d="PUSH";let U=Uh(b.location,M,x);n&&n(U,M),h=g()+1;let R=Z_(U,h),P=b.createHref(U);try{c.pushState(R,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(P)}u&&p&&p({action:d,location:b.location,delta:1})}function S(M,x){d="REPLACE";let U=Uh(b.location,M,x);n&&n(U,M),h=g();let R=Z_(U,h),P=b.createHref(U);c.replaceState(R,"",P),u&&p&&p({action:d,location:b.location,delta:0})}function y(M){return cE(M)}let b={get action(){return d},get location(){return a(o,c)},listen(M){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(Y_,_),p=M,()=>{o.removeEventListener(Y_,_),p=null}},createHref(M){return e(o,M)},createURL:y,encodeLocation(M){let x=y(M);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(M){return c.go(M)}};return b}function cE(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:dl(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function dx(a,e,n="/"){return fE(a,e,n,!1)}function fE(a,e,n,r){let o=typeof e=="string"?Kr(e):e,u=Ca(o.pathname||"/",n);if(u==null)return null;let c=hx(a);dE(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let h=EE(u);d=ME(c[p],h,r)}return d}function hx(a,e=[],n=[],r="",o=!1){let u=(c,d,p=o,h)=>{let g={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&p)return;Jt(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=ba([r,g.relativePath]),v=n.concat(g);c.children&&c.children.length>0&&(Jt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),hx(c.children,e,v,_,p)),!(c.path==null&&!c.index)&&e.push({path:_,score:xE(_,c.index),routesMeta:v})};return a.forEach((c,d)=>{var p;if(c.path===""||!((p=c.path)!=null&&p.includes("?")))u(c,d);else for(let h of px(c.path))u(c,d,!0,h)}),e}function px(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let c=px(r.join("/")),d=[];return d.push(...c.map(p=>p===""?u:[u,p].join("/"))),o&&d.push(...c),d.map(p=>a.startsWith("/")&&p===""?"/":p)}function dE(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:SE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var hE=/^:[\w-]+$/,pE=3,mE=2,gE=1,_E=10,vE=-2,j_=a=>a==="*";function xE(a,e){let n=a.split("/"),r=n.length;return n.some(j_)&&(r+=vE),e&&(r+=mE),n.filter(o=>!j_(o)).reduce((o,u)=>o+(hE.test(u)?pE:u===""?gE:_E),r)}function SE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function ME(a,e,n=!1){let{routesMeta:r}=a,o={},u="/",c=[];for(let d=0;d<r.length;++d){let p=r[d],h=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=xc({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),v=p.route;if(!_&&h&&n&&!r[r.length-1].route.index&&(_=xc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),c.push({params:o,pathname:ba([u,_.pathname]),pathnameBase:RE(ba([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=ba([u,_.pathnameBase]))}return c}function xc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=yE(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let u=o[0],c=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:_},v)=>{if(g==="*"){let y=d[v]||"";c=u.slice(0,u.length-y.length).replace(/(.)\/+$/,"$1")}const S=d[v];return _&&!S?h[g]=void 0:h[g]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:c,pattern:a}}function yE(a,e=!1,n=!0){_i(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function EE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return _i(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function Ca(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bE=a=>mx.test(a);function TE(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?Kr(a):a,u;if(n)if(bE(n))u=n;else{if(n.includes("//")){let c=n;n=n.replace(/\/\/+/g,"/"),_i(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${n}`)}n.startsWith("/")?u=K_(n.substring(1),"/"):u=K_(n,e)}else u=e;return{pathname:u,search:CE(r),hash:wE(o)}}function K_(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Wd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function AE(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function gx(a){let e=AE(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function _x(a,e,n,r=!1){let o;typeof a=="string"?o=Kr(a):(o={...a},Jt(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),Jt(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),Jt(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let u=a===""||o.pathname==="",c=u?"/":o.pathname,d;if(c==null)d=n;else{let _=e.length-1;if(!r&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}d=_>=0?e[_]:"/"}let p=TE(o,d),h=c&&c!=="/"&&c.endsWith("/"),g=(u||c===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var ba=a=>a.join("/").replace(/\/\/+/g,"/"),RE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),CE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,wE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,DE=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function UE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function LE(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var vx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xx(a,e){let n=a;if(typeof n!="string"||!mx.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(vx)try{let u=new URL(window.location.href),c=n.startsWith("//")?new URL(u.protocol+n):new URL(n),d=Ca(c.pathname,e);c.origin===u.origin&&d!=null?n=d+c.search+c.hash:o=!0}catch{_i(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Sx=["POST","PUT","PATCH","DELETE"];new Set(Sx);var NE=["GET",...Sx];new Set(NE);var to=A.createContext(null);to.displayName="DataRouter";var Ac=A.createContext(null);Ac.displayName="DataRouterState";var PE=A.createContext(!1),Mx=A.createContext({isTransitioning:!1});Mx.displayName="ViewTransition";var OE=A.createContext(new Map);OE.displayName="Fetchers";var IE=A.createContext(null);IE.displayName="Await";var vi=A.createContext(null);vi.displayName="Navigation";var vl=A.createContext(null);vl.displayName="Location";var La=A.createContext({outlet:null,matches:[],isDataRoute:!1});La.displayName="Route";var Pp=A.createContext(null);Pp.displayName="RouteError";var yx="REACT_ROUTER_ERROR",FE="REDIRECT",BE="ROUTE_ERROR_RESPONSE";function zE(a){if(a.startsWith(`${yx}:${FE}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function HE(a){if(a.startsWith(`${yx}:${BE}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new DE(e.status,e.statusText,e.data)}catch{}}function VE(a,{relative:e}={}){Jt(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=A.useContext(vi),{hash:o,pathname:u,search:c}=Sl(a,{relative:e}),d=u;return n!=="/"&&(d=u==="/"?n:ba([n,u])),r.createHref({pathname:d,search:c,hash:o})}function xl(){return A.useContext(vl)!=null}function Qr(){return Jt(xl(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(vl).location}var Ex="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function bx(a){A.useContext(vi).static||A.useLayoutEffect(a)}function GE(){let{isDataRoute:a}=A.useContext(La);return a?tb():kE()}function kE(){Jt(xl(),"useNavigate() may be used only in the context of a <Router> component.");let a=A.useContext(to),{basename:e,navigator:n}=A.useContext(vi),{matches:r}=A.useContext(La),{pathname:o}=Qr(),u=JSON.stringify(gx(r)),c=A.useRef(!1);return bx(()=>{c.current=!0}),A.useCallback((p,h={})=>{if(_i(c.current,Ex),!c.current)return;if(typeof p=="number"){n.go(p);return}let g=_x(p,JSON.parse(u),o,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ba([e,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[e,n,u,o,a])}A.createContext(null);function Sl(a,{relative:e}={}){let{matches:n}=A.useContext(La),{pathname:r}=Qr(),o=JSON.stringify(gx(n));return A.useMemo(()=>_x(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function XE(a,e){return Tx(a,e)}function Tx(a,e,n,r,o){var U;Jt(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=A.useContext(vi),{matches:c}=A.useContext(La),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let R=_&&_.path||"";Rx(h,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Qr(),S;if(e){let R=typeof e=="string"?Kr(e):e;Jt(g==="/"||((U=R.pathname)==null?void 0:U.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let y=S.pathname||"/",b=y;if(g!=="/"){let R=g.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(R.length).join("/")}let M=dx(a,{pathname:b});_i(_||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),_i(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=jE(M&&M.map(R=>Object.assign({},R,{params:Object.assign({},p,R.params),pathname:ba([g,u.encodeLocation?u.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:ba([g,u.encodeLocation?u.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),c,n,r,o);return e&&x?A.createElement(vl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function WE(){let a=eb(),e=UE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",a),c=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:u},"ErrorBoundary")," or"," ",A.createElement("code",{style:u},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},e),n?A.createElement("pre",{style:o},n):null,c)}var qE=A.createElement(WE,null),Ax=class extends A.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=HE(a.digest);n&&(a=n)}let e=a!==void 0?A.createElement(La.Provider,{value:this.props.routeContext},A.createElement(Pp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?A.createElement(YE,{error:a},e):e}};Ax.contextType=PE;var qd=new WeakMap;function YE({children:a,error:e}){let{basename:n}=A.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=zE(e.digest);if(r){let o=qd.get(e);if(o)throw o;let u=xx(r.location,n);if(vx&&!qd.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw qd.set(e,c),c}return A.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function ZE({routeContext:a,match:e,children:n}){let r=A.useContext(to);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),A.createElement(La.Provider,{value:a},n)}function jE(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,c=n==null?void 0:n.errors;if(c!=null){let g=u.findIndex(_=>_.route.id&&(c==null?void 0:c[_.route.id])!==void 0);Jt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let d=!1,p=-1;if(n)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:v,errors:S}=n,y=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||y){d=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}let h=n&&r?(g,_)=>{var v,S;r(g,{location:n.location,params:((S=(v=n.matches)==null?void 0:v[0])==null?void 0:S.params)??{},unstable_pattern:LE(n.matches),errorInfo:_})}:void 0;return u.reduceRight((g,_,v)=>{let S,y=!1,b=null,M=null;n&&(S=c&&_.route.id?c[_.route.id]:void 0,b=_.route.errorElement||qE,d&&(p<0&&v===0?(Rx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,M=null):p===v&&(y=!0,M=_.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,v+1)),U=()=>{let R;return S?R=b:y?R=M:_.route.Component?R=A.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=g,A.createElement(ZE,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:n!=null},children:R})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?A.createElement(Ax,{location:n.location,revalidation:n.revalidation,component:b,error:S,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):U()},null)}function Op(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function KE(a){let e=A.useContext(to);return Jt(e,Op(a)),e}function QE(a){let e=A.useContext(Ac);return Jt(e,Op(a)),e}function $E(a){let e=A.useContext(La);return Jt(e,Op(a)),e}function Ip(a){let e=$E(a),n=e.matches[e.matches.length-1];return Jt(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function JE(){return Ip("useRouteId")}function eb(){var r;let a=A.useContext(Pp),e=QE("useRouteError"),n=Ip("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function tb(){let{router:a}=KE("useNavigate"),e=Ip("useNavigate"),n=A.useRef(!1);return bx(()=>{n.current=!0}),A.useCallback(async(o,u={})=>{_i(n.current,Ex),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...u}))},[a,e])}var Q_={};function Rx(a,e,n){!e&&!Q_[a]&&(Q_[a]=!0,_i(!1,n))}A.memo(nb);function nb({routes:a,future:e,state:n,onError:r}){return Tx(a,void 0,n,r,e)}function lc(a){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ib({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:u=!1,unstable_useTransitions:c}){Jt(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),p=A.useMemo(()=>({basename:d,navigator:o,static:u,unstable_useTransitions:c,future:{}}),[d,o,u,c]);typeof n=="string"&&(n=Kr(n));let{pathname:h="/",search:g="",hash:_="",state:v=null,key:S="default"}=n,y=A.useMemo(()=>{let b=Ca(h,d);return b==null?null:{location:{pathname:b,search:g,hash:_,state:v,key:S},navigationType:r}},[d,h,g,_,v,S,r]);return _i(y!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:A.createElement(vi.Provider,{value:p},A.createElement(vl.Provider,{children:e,value:y}))}function ab({children:a,location:e}){return XE(Lh(a),e)}function Lh(a,e=[]){let n=[];return A.Children.forEach(a,(r,o)=>{if(!A.isValidElement(r))return;let u=[...e,o];if(r.type===A.Fragment){n.push.apply(n,Lh(r.props.children,u));return}Jt(r.type===lc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Lh(r.props.children,u)),n.push(c)}),n}var uc="get",cc="application/x-www-form-urlencoded";function Rc(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function rb(a){return Rc(a)&&a.tagName.toLowerCase()==="button"}function sb(a){return Rc(a)&&a.tagName.toLowerCase()==="form"}function ob(a){return Rc(a)&&a.tagName.toLowerCase()==="input"}function lb(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function ub(a,e){return a.button===0&&(!e||e==="_self")&&!lb(a)}var Hu=null;function cb(){if(Hu===null)try{new FormData(document.createElement("form"),0),Hu=!1}catch{Hu=!0}return Hu}var fb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yd(a){return a!=null&&!fb.has(a)?(_i(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${cc}"`),null):a}function db(a,e){let n,r,o,u,c;if(sb(a)){let d=a.getAttribute("action");r=d?Ca(d,e):null,n=a.getAttribute("method")||uc,o=Yd(a.getAttribute("enctype"))||cc,u=new FormData(a)}else if(rb(a)||ob(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=a.getAttribute("formaction")||d.getAttribute("action");if(r=p?Ca(p,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||uc,o=Yd(a.getAttribute("formenctype"))||Yd(d.getAttribute("enctype"))||cc,u=new FormData(d,a),!cb()){let{name:h,type:g,value:_}=a;if(g==="image"){let v=h?`${h}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else h&&u.append(h,_)}}else{if(Rc(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=uc,r=null,o=cc,c=a}return u&&o==="text/plain"&&(c=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Fp(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function hb(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&Ca(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function pb(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function mb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function gb(a,e,n){let r=await Promise.all(a.map(async o=>{let u=e.routes[o.route.id];if(u){let c=await pb(u,n);return c.links?c.links():[]}return[]}));return Sb(r.flat(1).filter(mb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function $_(a,e,n,r,o,u){let c=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,d=(p,h)=>{var g;return n[h].pathname!==p.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==p.params["*"]};return u==="assets"?e.filter((p,h)=>c(p,h)||d(p,h)):u==="data"?e.filter((p,h)=>{var _;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(c(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function _b(a,e,{includeHydrateFallback:n}={}){return vb(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function vb(a){return[...new Set(a)]}function xb(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function Sb(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let u=JSON.stringify(xb(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}function Cx(){let a=A.useContext(to);return Fp(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function Mb(){let a=A.useContext(Ac);return Fp(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Bp=A.createContext(void 0);Bp.displayName="FrameworkContext";function wx(){let a=A.useContext(Bp);return Fp(a,"You must render this element inside a <HydratedRouter> element"),a}function yb(a,e){let n=A.useContext(Bp),[r,o]=A.useState(!1),[u,c]=A.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:_}=e,v=A.useRef(null);A.useEffect(()=>{if(a==="render"&&c(!0),a==="viewport"){let b=x=>{x.forEach(U=>{c(U.isIntersecting)})},M=new IntersectionObserver(b,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[a]),A.useEffect(()=>{if(r){let b=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{o(!0)},y=()=>{o(!1),c(!1)};return n?a!=="intent"?[u,v,{}]:[u,v,{onFocus:tl(d,S),onBlur:tl(p,y),onMouseEnter:tl(h,S),onMouseLeave:tl(g,y),onTouchStart:tl(_,S)}]:[!1,v,{}]}function tl(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function Eb({page:a,...e}){let{router:n}=Cx(),r=A.useMemo(()=>dx(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?A.createElement(Tb,{page:a,matches:r,...e}):null}function bb(a){let{manifest:e,routeModules:n}=wx(),[r,o]=A.useState([]);return A.useEffect(()=>{let u=!1;return gb(a,e,n).then(c=>{u||o(c)}),()=>{u=!0}},[a,e,n]),r}function Tb({page:a,matches:e,...n}){let r=Qr(),{future:o,manifest:u,routeModules:c}=wx(),{basename:d}=Cx(),{loaderData:p,matches:h}=Mb(),g=A.useMemo(()=>$_(a,e,h,u,r,"data"),[a,e,h,u,r]),_=A.useMemo(()=>$_(a,e,h,u,r,"assets"),[a,e,h,u,r]),v=A.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let b=new Set,M=!1;if(e.forEach(U=>{var P;let R=u.routes[U.route.id];!R||!R.hasLoader||(!g.some(N=>N.route.id===U.route.id)&&U.route.id in p&&((P=c[U.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?M=!0:b.add(U.route.id))}),b.size===0)return[];let x=hb(a,d,o.unstable_trailingSlashAwareDataRequests,"data");return M&&b.size>0&&x.searchParams.set("_routes",e.filter(U=>b.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[d,o.unstable_trailingSlashAwareDataRequests,p,r,u,g,e,a,c]),S=A.useMemo(()=>_b(_,u),[_,u]),y=bb(_);return A.createElement(A.Fragment,null,v.map(b=>A.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),S.map(b=>A.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),y.map(({key:b,link:M})=>A.createElement("link",{key:b,nonce:n.nonce,...M})))}function Ab(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Rb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Rb&&(window.__reactRouterVersion="7.12.0")}catch{}function Cb({basename:a,children:e,unstable_useTransitions:n,window:r}){let o=A.useRef();o.current==null&&(o.current=oE({window:r,v5Compat:!0}));let u=o.current,[c,d]=A.useState({action:u.action,location:u.location}),p=A.useCallback(h=>{n===!1?d(h):A.startTransition(()=>d(h))},[n]);return A.useLayoutEffect(()=>u.listen(p),[u,p]),A.createElement(ib,{basename:a,children:e,location:c.location,navigationType:c.action,navigator:u,unstable_useTransitions:n})}var Dx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fl=A.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:c,state:d,target:p,to:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},y){let{basename:b,unstable_useTransitions:M}=A.useContext(vi),x=typeof h=="string"&&Dx.test(h),U=xx(h,b);h=U.to;let R=VE(h,{relative:o}),[P,N,B]=yb(r,S),O=Lb(h,{replace:c,state:d,target:p,preventScrollReset:g,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:M});function W(L){e&&e(L),L.defaultPrevented||O(L)}let C=A.createElement("a",{...S,...B,href:U.absoluteURL||R,onClick:U.isExternal||u?e:W,ref:Ab(y,N),target:p,"data-discover":!x&&n==="render"?"true":void 0});return P&&!x?A.createElement(A.Fragment,null,C,A.createElement(Eb,{page:R})):C});fl.displayName="Link";var wb=A.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:c,viewTransition:d,children:p,...h},g){let _=Sl(c,{relative:h.relative}),v=Qr(),S=A.useContext(Ac),{navigator:y,basename:b}=A.useContext(vi),M=S!=null&&Fb(_)&&d===!0,x=y.encodeLocation?y.encodeLocation(_).pathname:_.pathname,U=v.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(U=U.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase()),R&&b&&(R=Ca(R,b)||R);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=U===x||!o&&U.startsWith(x)&&U.charAt(P)==="/",B=R!=null&&(R===x||!o&&R.startsWith(x)&&R.charAt(x.length)==="/"),O={isActive:N,isPending:B,isTransitioning:M},W=N?e:void 0,C;typeof r=="function"?C=r(O):C=[r,N?"active":null,B?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let L=typeof u=="function"?u(O):u;return A.createElement(fl,{...h,"aria-current":W,className:C,ref:g,style:L,to:c,viewTransition:d},typeof p=="function"?p(O):p)});wb.displayName="NavLink";var Db=A.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:u,method:c=uc,action:d,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},y)=>{let{unstable_useTransitions:b}=A.useContext(vi),M=Ob(),x=Ib(d,{relative:h}),U=c.toLowerCase()==="get"?"get":"post",R=typeof d=="string"&&Dx.test(d),P=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let B=N.nativeEvent.submitter,O=(B==null?void 0:B.getAttribute("formmethod"))||c,W=()=>M(B||N.currentTarget,{fetcherKey:e,method:O,navigate:n,replace:o,state:u,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});b&&n!==!1?A.startTransition(()=>W()):W()};return A.createElement("form",{ref:y,method:U,action:x,onSubmit:r?p:P,...S,"data-discover":!R&&a==="render"?"true":void 0})});Db.displayName="Form";function Ub(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ux(a){let e=A.useContext(to);return Jt(e,Ub(a)),e}function Lb(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let h=GE(),g=Qr(),_=Sl(a,{relative:u});return A.useCallback(v=>{if(ub(v,e)){v.preventDefault();let S=n!==void 0?n:dl(g)===dl(_),y=()=>h(a,{replace:S,state:r,preventScrollReset:o,relative:u,viewTransition:c,unstable_defaultShouldRevalidate:d});p?A.startTransition(()=>y()):y()}},[g,h,_,n,r,e,a,o,u,c,d,p])}var Nb=0,Pb=()=>`__${String(++Nb)}__`;function Ob(){let{router:a}=Ux("useSubmit"),{basename:e}=A.useContext(vi),n=JE(),r=a.fetch,o=a.navigate;return A.useCallback(async(u,c={})=>{let{action:d,method:p,encType:h,formData:g,body:_}=db(u,e);if(c.navigate===!1){let v=c.fetcherKey||Pb();await r(v,n,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||h,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:g,body:_,formMethod:c.method||p,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:n,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,o,e,n])}function Ib(a,{relative:e}={}){let{basename:n}=A.useContext(vi),r=A.useContext(La);Jt(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={...Sl(a||".",{relative:e})},c=Qr();if(a==null){u.search=c.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:ba([n,u.pathname])),dl(u)}function Fb(a,{relative:e}={}){let n=A.useContext(Mx);Jt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Ux("useViewTransitionState"),o=Sl(a,{relative:e});if(!n.isTransitioning)return!1;let u=Ca(n.currentLocation.pathname,r)||n.currentLocation.pathname,c=Ca(n.nextLocation.pathname,r)||n.nextLocation.pathname;return xc(o.pathname,c)!=null||xc(o.pathname,u)!=null}var Bb=fx();function zb(a){const[e,n]=A.useState(a);return a!==e&&(!a||!e||a.length!==e.length||a.some((r,o)=>r!==e[o]))?(n(a),a):e}function Hb(a,[e,n]){const[r,o]=a;return r!==void 0&&o!==void 0&&e!==void 0&&n!==void 0&&e>r&&e-r<=20&&n<o?[r,n]:r!==e||o!==n?[e,n]:a}function Vb(a,e){let n=a==null?void 0:a.clientWidth;if(n!==void 0&&e&&e.length>0){const r=[...e.filter(o=>o>0)].sort((o,u)=>u-o);r.push(Math.floor(r[r.length-1]/2)),n=r.find((o,u)=>o<=n||u===r.length-1)}return n}function Gb(a,e,n){const[[r],o]=A.useReducer(Hb,[n]),u=zb(e),c=A.useRef(void 0);return{containerRef:A.useCallback(p=>{var g;(g=c.current)==null||g.disconnect(),c.current=void 0;const h=()=>o([Vb(p,u),window.innerWidth-document.documentElement.clientWidth]);h(),p&&typeof ResizeObserver<"u"&&(c.current=new ResizeObserver(h),c.current.observe(p)),typeof a=="function"?a(p):a&&(a.current=p)},[a,u]),containerWidth:r}}function kb(...a){return[...a].filter(Boolean).join(" ")}function Lx(a){return["react-photo-album",a].filter(Boolean).join("--")}function Xb(a){return`--${Lx(a)}`}function zp({width:a,height:e}){return a/e}const Wb=Object.freeze([1200,600,300,0]);function mr(a,e){return typeof a=="function"?a(e):a}function Nx(a,e){return e!==void 0?mr(a,e):void 0}function qb(a,e){const n=Wb.findIndex(r=>r<=e);return mr(a[Math.max(n,0)],e)}function Nh(a,e,n,r=0){if(e===void 0)return;const o=Nx(a,e);return Math.round(Math.max(o===void 0?qb(n,e):o,r))}function Yb(a,{spacing:e,padding:n,componentsProps:r,render:o}){return{spacing:Nh(e,a,[20,15,10,5]),padding:Nh(n,a,[0,0,0,0]),componentsProps:mr(r,a)||{},render:mr(o,a)}}function hl(a,e=0){const n=10**e;return Math.round((a+Number.EPSILON)*n)/n}function Zb(a,e,n,r,o,u,c){let d,p;const h=_=>{var S;const v=u*(o-1)+2*c*o;return`calc((${((S=_.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:S[1])??_} - ${v}px) / ${hl((r-v)/n,5)})`},g=a.srcSet;return g&&g.length>0&&(d=g.concat(g.some(({width:_})=>_===a.width)?[]:[{src:a.src,width:a.width,height:a.height}]).sort((_,v)=>_.width-v.width).map(_=>`${_.src} ${_.width}w`).join(", ")),e!=null&&e.size?p=(e.sizes||[]).map(({viewport:_,size:v})=>`${_} ${h(v)}`).concat(h(e.size)).join(", "):p=`${Math.ceil(n/r*100)}vw`,{srcSet:d,sizes:p}}function jb({as:a,render:e,context:n,classes:r=[],variables:o={},style:u,className:c,children:d,...p},h){const g=kb(...(Array.isArray(r)?r:[r]).filter(y=>typeof y=="string").map(Lx),c),v={style:{...Object.fromEntries(Object.entries(o).map(([y,b])=>[Xb(y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),typeof b=="number"?hl(b,5):b])),...u},className:g,children:d,...p};if(e){const y=e({ref:h,...v},n);if(y)return y}const S=a||"div";return $e.jsx(S,{ref:h,...v})}const Sc=A.forwardRef(jb);function Kb({photo:a,index:e,width:n,height:r,onClick:o,render:{wrapper:u,link:c,button:d,image:p,extras:h}={},componentsProps:{link:g,button:_,wrapper:v,image:S}={}},y){const{href:b}=a,M={photo:a,index:e,width:hl(n,3),height:hl(r,3)};let x;return b?x={...g,as:"a",render:c,classes:["photo","link"],href:b,onClick:o}:o?x={..._,as:"button",type:"button",render:d,classes:["photo","button"],onClick:o}:x={...v,render:u,classes:"photo"},$e.jsxs(Sc,{ref:y,variables:{photoWidth:M.width,photoHeight:M.height},context:M,...x,children:[$e.jsx(Sc,{as:"img",classes:"image",render:p,context:M,...S}),h==null?void 0:h({},M)]})}const Qb=A.forwardRef(Kb);function $b({layout:a,sizes:e,model:n,skeleton:r,onClick:o,render:{container:u,track:c,photo:d,...p}={},componentsProps:{container:h,track:g,link:_,button:v,wrapper:S,image:y}={}},b){const{spacing:M,padding:x,containerWidth:U,tracks:R,variables:P,horizontal:N}=n||{};return $e.jsxs(Sc,{role:"group","aria-label":"Photo album",...h,variables:{spacing:M,padding:x,containerWidth:U,...P},classes:["",a],render:u,ref:b,children:[M!==void 0&&x!==void 0&&U!==void 0&&(R==null?void 0:R.map(({photos:B,variables:O},W)=>{const C=B.length,L=N?C:R.length;return A.createElement(Sc,{...g,key:W,render:c,classes:"track",variables:{trackSize:C,...O}},B.map(H=>{const{photo:j,index:Y,width:ae}=H,{key:ee,src:z,alt:V,title:k,label:de}=j,I=o?re=>{o({event:re,photo:j,index:Y})}:void 0;if(d){const re=d({onClick:I},H);if(re)return re}const Z=re=>de?{"aria-label":de,...re}:re;return $e.jsx(Qb,{onClick:I,render:p,componentsProps:{image:{loading:"lazy",decoding:"async",src:z,alt:V,title:k,...Zb(j,e,ae,U,L,M,x),...mr(y,H)},link:Z(mr(_,H)),button:Z(mr(v,H)),wrapper:mr(S,H)},...H},ee??z)}))})),U===void 0&&r]})}const Jb=A.forwardRef($b);function eT(a,{photos:e,targetRowHeight:n,rowConstraints:r,...o}){const{spacing:u,padding:c,componentsProps:d,render:p}=Yb(a,o),{singleRowMaxHeight:h,minPhotos:g,maxPhotos:_}=Nx(r,a)||{};if(h!==void 0&&u!==void 0&&c!==void 0){const v=Math.floor(e.reduce((S,{width:y,height:b})=>S+y/b*h-2*c,c*e.length*2+u*(e.length-1)));v>0&&(d.container={...d.container},d.container.style={maxWidth:v,...d.container.style})}return{...o,targetRowHeight:Nh(n,a,[v=>v/5,v=>v/4,v=>v/3,v=>v/2]),render:p,spacing:u,padding:c,minPhotos:g,maxPhotos:_,componentsProps:d}}function tT(a){return(e,n)=>a(n)-a(e)}function nT(a){let e=0;const n=[],r=(g,_)=>a(n[g],n[_])<0,o=(g,_)=>{const v=n[g];n[g]=n[_],n[_]=v},u=g=>{let _=g,v=Math.floor(_/2);for(;_>1&&r(v,_);)o(v,_),_=v,v=Math.floor(_/2)},c=g=>{let _=g,v=_*2;for(;v<=e&&(v<e&&r(v,v+1)&&(v+=1),!!r(_,v));)o(_,v),_=v,v=_*2};return{push:g=>{e+=1,n[e]=g,u(e)},pop:()=>{if(e===0)return;o(1,e),e-=1;const g=n.pop();return c(1),g},size:()=>e}}function iT(a,e,n){const r=new Map,o=new Set,u=new Map;u.set(e,0);const c=nT(tT(d=>d[1]));for(c.push([e,0]);c.size()>0;){const[d,p]=c.pop();if(!o.has(d)){const h=a(d);o.add(d),h.forEach((g,_)=>{const v=p+g,S=r.get(_),y=u.get(_);(y===void 0||y>v&&(y/v>1.005||S!==void 0&&S<d))&&(u.set(_,v),c.push([_,v]),r.set(_,d))})}}return u.has(n)?r:void 0}function aT(a,e){if(!a)return;const n=[];for(let r=e;r!==void 0;r=a.get(r))n.push(r);return n.reverse()}function rT(a,e,n){return aT(iT(a,e,n),n)}function sT(a,e,n,r){return hl(e/n/Math.min(...a.map(o=>zp(o))))+(r||0)+2}function Px(a,e,n,r){return(e-(a.length-1)*n-2*r*a.length)/a.reduce((o,u)=>o+zp(u),0)}function oT(a,e,n,r,o,u,c){const d=a.slice(e,n),p=Px(d,r,o,u);return p>0?(p-c)**2*d.length:void 0}function lT(a,e,n,r,o,u,c,d){return p=>{const h=new Map;h.set(p,0);const g=c||1,_=Math.min(u,d||1/0);for(let v=p+g;v<a.length+1&&!(v-p>_);v+=1){const S=oT(a,p,v,r,e,n,o);if(S===void 0)break;h.set(v,S)}return h}}function uT(a,e,n,r,o,u,c){const d=sT(a,r,o,u),p=lT(a,e,n,r,o,d,u,c),h=rT(p,0,a.length);if(!h)return;const g=[];for(let _=1;_<h.length;_+=1){const v=a.map((y,b)=>({photo:y,index:b})).slice(h[_-1],h[_]),S=Px(v.map(({photo:y})=>y),r,e,n);g.push({photos:v.map(({photo:y,index:b})=>({photo:y,index:b,width:S*zp(y),height:S}))})}return{spacing:e,padding:n,containerWidth:r,tracks:g,horizontal:!0}}function cT({photos:a,breakpoints:e,defaultContainerWidth:n,...r},o){const{containerRef:u,containerWidth:c}=Gb(o,e,n),{spacing:d,padding:p,targetRowHeight:h,minPhotos:g,maxPhotos:_,...v}=eT(c,{photos:a,...r}),S=A.useMemo(()=>c!==void 0&&d!==void 0&&p!==void 0&&h!==void 0?uT(a,d,p,c,h,g,_):void 0,[a,d,p,c,h,g,_]);return $e.jsx(Jb,{layout:"rows",ref:u,model:S,...v})}const fT=A.forwardRef(cT),Ox="carousel",Hp="controller",dT="navigation",hT="no-scroll",Vp="portal",pT="root",Ix="toolbar",Ph="fullscreen",J_="thumbnails",ev="zoom",Zd="loading",jd="error",Kd="complete",mT="placeholder",gT=a=>`active-slide-${a}`,Fx="fullsize",Gp="flex_center",_T="no_scroll",Bx="no_scroll_padding",kp="slide",zx="slide_wrapper",vT="slide_wrapper_interactive",kr="prev",Xr="next",tv="swipe",Zs="close",Hx="onPointerDown",Vx="onPointerMove",Gx="onPointerUp",kx="onPointerLeave",Xx="onPointerCancel",Xp="onKeyDown",xT="onKeyUp",Wp="onWheel",ST="Escape",MT="ArrowLeft",yT="ArrowRight",ET="button",Oh="icon",Wx="contain",nv="cover",qx="Unknown action type",Yx="yarl__";function Ui(...a){return[...a].filter(Boolean).join(" ")}function St(a){return`${Yx}${a}`}function Yn(a){return`--${Yx}${a}`}function Ml(a,e){return`${a}${e?`_${e}`:""}`}function qp(a){return e=>Ml(a,e)}function js(a,e){var n;return(n=a==null?void 0:a[e])!==null&&n!==void 0?n:e}function bT(a,e,n){return js(a,"{index} of {total}").replace(/\{index}/g,`${Kp(n,e.length)+1}`).replace(/\{total}/g,`${e.length}`)}function Cc(...a){return()=>{a.forEach(e=>{e()})}}function Qi(a,e,n){return()=>{const r=A.useContext(n);if(!r)throw new Error(`${a} must be used within a ${e}.Provider`);return r}}function Yp(){return typeof window<"u"}function Zp(a,e=0){const n=10**e;return Math.round((a+Number.EPSILON)*n)/n}function $r(a){return a.type===void 0||a.type==="image"}function jp(a,e){return a.imageFit===nv||a.imageFit!==Wx&&e===nv}function wc(a){return typeof a=="string"?Number.parseInt(a,10):a}function Mc(a){if(typeof a=="number")return{pixel:a};if(typeof a=="string"){const e=wc(a);return a.endsWith("%")?{percent:e}:{pixel:e}}return{pixel:0}}function TT(a,e){const n=Mc(e),r=n.percent!==void 0?a.width/100*n.percent:n.pixel;return{width:Math.max(a.width-2*r,0),height:Math.max(a.height-2*r,0)}}function AT(){return(Yp()?window==null?void 0:window.devicePixelRatio:void 0)||1}function Kp(a,e){return e>0?(a%e+e)%e:0}function Zx(a){return a.length>0}function jx(a,e){return a[Kp(e,a.length)]}function Ih(a,e){return Zx(a)?jx(a,e):void 0}function RT(a){return $r(a)?a.src:void 0}function Qp(a,e,n){if(!n)return a;const{buttons:r,...o}=a,u=r.findIndex(d=>d===e),c=A.isValidElement(n)?A.cloneElement(n,{key:e},null):n;if(u>=0){const d=[...r];return d.splice(u,1,c),{buttons:d,...o}}return{buttons:[c,...r],...o}}function CT(a,e,n=0){return Math.min(a.preload,Math.max(a.finite?e.length-1:Math.floor(e.length/2),n))}const wT=Number(A.version.split(".")[0])>=19;function DT(a){return{inert:wT?a:a?"":void 0}}function UT(a){a.scrollTop}const Fh={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Zs]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:Wx,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Na(a,e){return{name:a,component:e}}function bn(a,e){return{module:a,children:e}}function Kx(a,e,n){return a.module.name===e?n(a):a.children?[bn(a.module,a.children.flatMap(r=>{var o;return(o=Kx(r,e,n))!==null&&o!==void 0?o:[]}))]:[a]}function Us(a,e,n){return a.flatMap(r=>{var o;return(o=Kx(r,e,n))!==null&&o!==void 0?o:[]})}function LT(a,e=[],n=[]){let r=a;const o=S=>{const y=[...r];for(;y.length>0;){const b=y.pop();if((b==null?void 0:b.module.name)===S)return!0;b!=null&&b.children&&y.push(...b.children)}return!1},u=(S,y)=>{if(S===""){r=[bn(y,r)];return}r=Us(r,S,b=>[bn(y,[b])])},c=(S,y)=>{r=Us(r,S,b=>[bn(b.module,[bn(y,b.children)])])},d=(S,y,b)=>{r=Us(r,S,M=>{var x;return[bn(M.module,[...b?[bn(y)]:[],...(x=M.children)!==null&&x!==void 0?x:[],...b?[]:[bn(y)]])]})},p=(S,y,b)=>{r=Us(r,S,M=>[...b?[bn(y)]:[],M,...b?[]:[bn(y)]])},h=S=>{c(Hp,S)},g=(S,y)=>{r=Us(r,S,b=>[bn(y,b.children)])},_=S=>{r=Us(r,S,y=>y.children)},v=S=>{n.push(S)};return e.forEach(S=>{S({contains:o,addParent:u,append:c,addChild:d,addSibling:p,addModule:h,replace:g,remove:_,augment:v})}),{config:r,augmentation:S=>n.reduce((y,b)=>b(y),S)}}const Qx=A.createContext(null),$x=Qi("useA11yContext","A11yContext",Qx);function NT({children:a}){const[e,n]=A.useState(!1),[r,o]=A.useState(!1),u=A.useMemo(()=>({focusWithin:e,trackFocusWithin:(d,p)=>{const h=g=>_=>{var v;_.currentTarget.contains(_.relatedTarget)||n(g),(v=g?d:p)===null||v===void 0||v(_)};return{onFocus:h(!0),onBlur:h(!1)}},autoPlaying:r,setAutoPlaying:o}),[e,r]);return A.createElement(Qx.Provider,{value:u},a)}const Jx=A.createContext(null),yl=Qi("useDocument","DocumentContext",Jx);function PT({nodeRef:a,children:e}){const n=A.useMemo(()=>{const r=u=>{var c;return((c=u||a.current)===null||c===void 0?void 0:c.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:u=>{var c;return((c=r(u))===null||c===void 0?void 0:c.defaultView)||window}}},[a]);return A.createElement(Jx.Provider,{value:n},e)}const eS=A.createContext(null),Dc=Qi("useEvents","EventsContext",eS);function OT({children:a}){const[e]=A.useState({});A.useEffect(()=>()=>{Object.keys(e).forEach(r=>delete e[r])},[e]);const n=A.useMemo(()=>{const r=(c,d)=>{var p;(p=e[c])===null||p===void 0||p.splice(0,e[c].length,...e[c].filter(h=>h!==d))};return{publish:(...[c,d])=>{var p;(p=e[c])===null||p===void 0||p.forEach(h=>h(d))},subscribe:(c,d)=>(e[c]||(e[c]=[]),e[c].push(d),()=>r(c,d)),unsubscribe:r}},[e]);return A.createElement(eS.Provider,{value:n},a)}const tS=A.createContext(null),jn=Qi("useLightboxProps","LightboxPropsContext",tS);function IT({children:a,...e}){return A.createElement(tS.Provider,{value:e},a)}const nS=A.createContext(null),Pa=Qi("useLightboxState","LightboxStateContext",nS),iS=A.createContext(null),FT=Qi("useLightboxDispatch","LightboxDispatchContext",iS);function BT(a,e){switch(e.type){case"swipe":{const{slides:n}=a,r=(e==null?void 0:e.increment)||0,o=a.globalIndex+r,u=Kp(o,n.length),c=Ih(n,u),d=r||e.duration!==void 0?{increment:r,duration:e.duration,easing:e.easing}:void 0;return{slides:n,currentIndex:u,globalIndex:o,currentSlide:c,animation:d}}case"update":return e.slides!==a.slides||e.index!==a.currentIndex?{slides:e.slides,currentIndex:e.index,globalIndex:e.index,currentSlide:Ih(e.slides,e.index)}:a;default:throw new Error(qx)}}function zT({slides:a,index:e,children:n}){const[r,o]=A.useReducer(BT,{slides:a,currentIndex:e,globalIndex:e,currentSlide:Ih(a,e)});A.useEffect(()=>{o({type:"update",slides:a,index:e})},[a,e]);const u=A.useMemo(()=>({...r,state:r,dispatch:o}),[r,o]);return A.createElement(iS.Provider,{value:o},A.createElement(nS.Provider,{value:u},n))}const aS=A.createContext(null),Uc=Qi("useTimeouts","TimeoutsContext",aS);function HT({children:a}){const[e]=A.useState([]);A.useEffect(()=>()=>{e.forEach(r=>window.clearTimeout(r)),e.splice(0,e.length)},[e]);const n=A.useMemo(()=>{const r=c=>{e.splice(0,e.length,...e.filter(d=>d!==c))};return{setTimeout:(c,d)=>{const p=window.setTimeout(()=>{r(p),c()},d);return e.push(p),p},clearTimeout:c=>{c!==void 0&&(r(c),window.clearTimeout(c))}}},[e]);return A.createElement(aS.Provider,{value:n},a)}const El=A.forwardRef(function({label:e,className:n,icon:r,renderIcon:o,onClick:u,style:c,...d},p){const{styles:h,labels:g}=jn(),_=js(g,e);return A.createElement("button",{ref:p,type:"button",title:_,"aria-label":_,className:Ui(St(ET),n),onClick:u,style:{...c,...h.button},...d},o?o():A.createElement(r,{className:St(Oh),style:h.icon}))});function VT(a,e){const n=r=>A.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},e);return n.displayName=a,n}function $i(a,e){return VT(a,A.createElement("g",{fill:"currentColor"},A.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e))}const GT=$i("Close",A.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),kT=$i("Previous",A.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),XT=$i("Next",A.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),WT=$i("Loading",A.createElement(A.Fragment,null,Array.from({length:8}).map((a,e,n)=>A.createElement("line",{key:e,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(e+1),transform:`rotate(${360/n.length*e}, 12, 12)`})))),qT=$i("Error",A.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Li=Yp()?A.useLayoutEffect:A.useEffect;function $p(){const[a,e]=A.useState(!1);return A.useEffect(()=>{var n,r;const o=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");e(o==null?void 0:o.matches);const u=c=>e(c.matches);return(r=o==null?void 0:o.addEventListener)===null||r===void 0||r.call(o,"change",u),()=>{var c;return(c=o==null?void 0:o.removeEventListener)===null||c===void 0?void 0:c.call(o,"change",u)}},[]),a}function YT(a){let e=0,n=0,r=0;const u=window.getComputedStyle(a).transform.match(/matrix.*\((.+)\)/);if(u){const c=u[1].split(",").map(wc);c.length===6?(e=c[4],n=c[5]):c.length===16&&(e=c[12],n=c[13],r=c[14])}return{x:e,y:n,z:r}}function iv(a,e){const n=A.useRef(void 0),r=A.useRef(void 0),o=$p();return Li(()=>{var u,c,d;if(a.current&&n.current!==void 0&&!o){const{keyframes:p,duration:h,easing:g,onfinish:_}=e(n.current,a.current.getBoundingClientRect(),YT(a.current))||{};if(p&&h){(u=r.current)===null||u===void 0||u.cancel(),r.current=void 0;try{r.current=(d=(c=a.current).animate)===null||d===void 0?void 0:d.call(c,p,{duration:h,easing:g})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,_==null||_()})}}n.current=void 0}),{prepareAnimation:u=>{n.current=u},isAnimationPlaying:()=>{var u;return((u=r.current)===null||u===void 0?void 0:u.playState)==="running"}}}function rS(){const a=A.useRef(null),e=A.useRef(void 0),[n,r]=A.useState();return{setContainerRef:A.useCallback(u=>{a.current=u,e.current&&(e.current.disconnect(),e.current=void 0);const c=()=>{if(u){const d=window.getComputedStyle(u),p=h=>parseFloat(h)||0;r({width:Math.round(u.clientWidth-p(d.paddingLeft)-p(d.paddingRight)),height:Math.round(u.clientHeight-p(d.paddingTop)-p(d.paddingBottom))})}else r(void 0)};c(),u&&typeof ResizeObserver<"u"&&(e.current=new ResizeObserver(c),e.current.observe(u))},[]),containerRef:a,containerRect:n}}function fc(){const a=A.useRef(void 0),{setTimeout:e,clearTimeout:n}=Uc();return A.useCallback((r,o)=>{n(a.current),a.current=e(r,o>0?o:0)},[e,n])}function Nt(a){const e=A.useRef(a);return Li(()=>{e.current=a}),A.useCallback((...n)=>{var r;return(r=e.current)===null||r===void 0?void 0:r.call(e,...n)},[])}function av(a,e){typeof a=="function"?a(e):a&&(a.current=e)}function Bh(a,e){return A.useMemo(()=>a==null&&e==null?null:n=>{av(a,n),av(e,n)},[a,e])}function ZT(a,e=!1){const n=A.useRef(!1);Li(()=>{e&&n.current&&(n.current=!1,a())},[e,a]);const r=A.useCallback(()=>{n.current=!0},[]),o=A.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:o}}function Jp(){const[a,e]=A.useState(!1);return Li(()=>{e(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),a}function jT(){const[a]=A.useState({}),e=A.useCallback((o,u)=>{var c;(c=a[o])===null||c===void 0||c.forEach(d=>{u.isPropagationStopped()||d(u)})},[a]),n=A.useMemo(()=>({onPointerDown:o=>e(Hx,o),onPointerMove:o=>e(Vx,o),onPointerUp:o=>e(Gx,o),onPointerLeave:o=>e(kx,o),onPointerCancel:o=>e(Xx,o),onKeyDown:o=>e(Xp,o),onKeyUp:o=>e(xT,o),onWheel:o=>e(Wp,o)}),[e]),r=A.useCallback((o,u)=>(a[o]||(a[o]=[]),a[o].unshift(u),()=>{const c=a[o];c&&c.splice(0,c.length,...c.filter(d=>d!==u))}),[a]);return{registerSensors:n,subscribeSensors:r}}function rv(a,e){const n=A.useRef(0),r=fc(),o=Nt((...u)=>{n.current=Date.now(),a(u)});return A.useCallback((...u)=>{r(()=>{o(u)},e-(Date.now()-n.current))},[e,o,r])}const Qd=qp("slide"),$d=qp("slide_image");function yc({slide:a,offset:e,render:n,rect:r,imageFit:o,imageProps:u,onClick:c,onLoad:d,onError:p,style:h}){var g,_,v,S,y,b,M,x;const[U,R]=A.useState(Zd),{publish:P}=Dc(),{setTimeout:N}=Uc(),B=A.useRef(null);A.useEffect(()=>{e===0&&P(gT(U))},[e,U,P]);const O=Nt(re=>{("decode"in re?re.decode():Promise.resolve()).catch(()=>{}).then(()=>{re.parentNode&&(R(Kd),N(()=>{d==null||d(re)},0))})}),W=A.useCallback(re=>{B.current=re,re!=null&&re.complete&&O(re)},[O]),C=A.useCallback(re=>{O(re.currentTarget)},[O]),L=Nt(()=>{R(jd),p==null||p()}),H=jp(a,o),j=(re,pe)=>Number.isFinite(re)?re:pe,Y=j(Math.max(...((_=(g=a.srcSet)===null||g===void 0?void 0:g.map(re=>re.width))!==null&&_!==void 0?_:[]).concat(a.width?[a.width]:[]).filter(Boolean)),((v=B.current)===null||v===void 0?void 0:v.naturalWidth)||0),ae=j(Math.max(...((y=(S=a.srcSet)===null||S===void 0?void 0:S.map(re=>re.height))!==null&&y!==void 0?y:[]).concat(a.height?[a.height]:[]).filter(Boolean)),((b=B.current)===null||b===void 0?void 0:b.naturalHeight)||0),ee=Y&&ae?{maxWidth:`min(${Y}px, 100%)`,maxHeight:`min(${ae}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},z=(M=a.srcSet)===null||M===void 0?void 0:M.sort((re,pe)=>re.width-pe.width).map(re=>`${re.src} ${re.width}w`).join(", "),V=()=>r&&!H&&a.width&&a.height?r.height/a.height*a.width:Number.MAX_VALUE,k=z&&r&&Yp()?`${Math.round(Math.min(V(),r.width))}px`:void 0,{style:de,className:I,...Z}=u||{};return A.createElement(A.Fragment,null,A.createElement("img",{ref:W,onLoad:C,onError:L,onClick:c,draggable:!1,className:Ui(St($d()),H&&St($d("cover")),U!==Kd&&St($d("loading")),I),style:{...ee,...h,...de},...Z,alt:(x=a.alt)!==null&&x!==void 0?x:"",sizes:k,srcSet:z,src:a.src}),U!==Kd&&A.createElement("div",{className:St(Qd(mT))},U===Zd&&(n!=null&&n.iconLoading?n.iconLoading():A.createElement(WT,{className:Ui(St(Oh),St(Qd(Zd)))})),U===jd&&(n!=null&&n.iconError?n.iconError():A.createElement(qT,{className:Ui(St(Oh),St(Qd(jd)))}))))}const KT=A.forwardRef(function({className:e,children:n,onFocus:r,onBlur:o,...u},c){const d=A.useRef(null),{trackFocusWithin:p}=$x();return A.createElement(PT,{nodeRef:d},A.createElement("div",{ref:Bh(c,d),className:Ui(St("root"),e),...p(r,o),...u},n))});var In;(function(a){a[a.NONE=0]="NONE",a[a.SWIPE=1]="SWIPE",a[a.PULL=2]="PULL",a[a.ANIMATION=3]="ANIMATION"})(In||(In={}));function sS(a,e,n,r,o){A.useEffect(()=>o?()=>{}:Cc(a(Hx,e),a(Vx,n),a(Gx,r),a(kx,r),a(Xx,r)),[a,e,n,r,o])}var Ri;(function(a){a[a.NONE=0]="NONE",a[a.SWIPE=1]="SWIPE",a[a.PULL=2]="PULL"})(Ri||(Ri={}));const Jd=30;function QT({disableSwipeNavigation:a,closeOnBackdropClick:e},n,r,o,u,c,d,p,h,g,_,v,S,y,b,M){const x=A.useRef(0),U=A.useRef([]),R=A.useRef(void 0),P=A.useRef(0),N=A.useRef(Ri.NONE),B=A.useCallback(Y=>{R.current===Y.pointerId&&(R.current=void 0,N.current=Ri.NONE);const ae=U.current;ae.splice(0,ae.length,...ae.filter(ee=>ee.pointerId!==Y.pointerId))},[]),O=A.useCallback(Y=>{B(Y),Y.persist(),U.current.push(Y)},[B]),W=A.useCallback(Y=>U.current.find(({pointerId:ae})=>Y.pointerId===ae),[]),C=Nt(Y=>{O(Y)}),L=(Y,ae)=>_&&Y>ae||g&&Y<-ae,H=Nt(Y=>{const ae=W(Y);if(ae)if(R.current===Y.pointerId){const ee=Date.now()-P.current,z=x.current;N.current===Ri.SWIPE?Math.abs(z)>.3*o||Math.abs(z)>5&&ee<u?p(z,ee):h(z):N.current===Ri.PULL&&(L(z,2*Jd)?y(z,ee):b(z)),x.current=0,N.current=Ri.NONE}else{const{target:ee}=Y;e&&ee instanceof HTMLElement&&ee===ae.target&&(ee.classList.contains(St(kp))||ee.classList.contains(St(zx)))&&M()}B(Y)}),j=Nt(Y=>{const ae=W(Y);if(ae){const ee=R.current===Y.pointerId;if(Y.buttons===0){ee&&x.current!==0?H(Y):B(ae);return}const z=Y.clientX-ae.clientX,V=Y.clientY-ae.clientY;if(R.current===void 0){const k=de=>{O(Y),R.current=Y.pointerId,P.current=Date.now(),N.current=de};Math.abs(z)>Math.abs(V)&&Math.abs(z)>Jd&&r(z)?a||(k(Ri.SWIPE),c()):Math.abs(V)>Math.abs(z)&&L(V,Jd)&&(k(Ri.PULL),v())}else ee&&(N.current===Ri.SWIPE?(x.current=z,d(z)):N.current===Ri.PULL&&(x.current=V,S(V)))}});sS(n,C,j,H)}function $T({preventDefaultWheelX:a,preventDefaultWheelY:e}){const n=A.useRef(null),r=Nt(o=>{const u=Math.abs(o.deltaX)>Math.abs(o.deltaY);(u&&a||!u&&e||o.ctrlKey)&&o.preventDefault()});return A.useCallback(o=>{var u;o?o.addEventListener("wheel",r,{passive:!1}):(u=n.current)===null||u===void 0||u.removeEventListener("wheel",r),n.current=o},[r])}function JT(a,e,n,r,o,u,c,d,p){const h=A.useRef(0),g=A.useRef(0),_=A.useRef(void 0),v=A.useRef(void 0),S=A.useRef(0),y=A.useRef(void 0),b=A.useRef(0),{setTimeout:M,clearTimeout:x}=Uc(),U=A.useCallback(()=>{_.current&&(x(_.current),_.current=void 0)},[x]),R=A.useCallback(()=>{v.current&&(x(v.current),v.current=void 0)},[x]),P=Nt(()=>{a!==In.SWIPE&&(h.current=0,b.current=0,U(),R())});A.useEffect(P,[a,P]);const N=Nt(O=>{v.current=void 0,h.current===O&&p(h.current)}),B=Nt(O=>{if(O.ctrlKey||Math.abs(O.deltaY)>Math.abs(O.deltaX))return;const W=C=>{S.current=C,x(y.current),y.current=C>0?M(()=>{S.current=0,y.current=void 0},300):void 0};if(a===In.NONE){if(Math.abs(O.deltaX)<=1.2*Math.abs(S.current)){W(O.deltaX);return}if(!n(-O.deltaX))return;if(g.current+=O.deltaX,U(),Math.abs(g.current)>30)g.current=0,W(0),b.current=Date.now(),u();else{const C=g.current;_.current=M(()=>{_.current=void 0,C===g.current&&(g.current=0)},o)}}else if(a===In.SWIPE){let C=h.current-O.deltaX;if(C=Math.min(Math.abs(C),r)*Math.sign(C),h.current=C,c(C),R(),Math.abs(C)>.2*r){W(O.deltaX),d(C,Date.now()-b.current);return}v.current=M(()=>N(C),2*o)}else W(O.deltaX)});A.useEffect(()=>e(Wp,B),[e,B])}const sv=qp("container"),oS=A.createContext(null),Oa=Qi("useController","ControllerContext",oS);function e1({children:a,...e}){var n;const{carousel:r,animation:o,controller:u,on:c,styles:d,render:p}=e,{closeOnPullUp:h,closeOnPullDown:g,preventDefaultWheelX:_,preventDefaultWheelY:v}=u,[S,y]=A.useState(),b=Pa(),M=FT(),[x,U]=A.useState(In.NONE),R=A.useRef(0),P=A.useRef(0),N=A.useRef(1),{registerSensors:B,subscribeSensors:O}=jT(),{subscribe:W,publish:C}=Dc(),L=fc(),H=fc(),j=fc(),{containerRef:Y,setContainerRef:ae,containerRect:ee}=rS(),z=Bh($T({preventDefaultWheelX:_,preventDefaultWheelY:v}),ae),V=A.useRef(null),k=Bh(V,void 0),{getOwnerDocument:de}=yl(),I=Jp(),Z=Ee=>(I?-1:1)*(typeof Ee=="number"?Ee:1),re=Nt(()=>{var Ee;return(Ee=Y.current)===null||Ee===void 0?void 0:Ee.focus()}),pe=Nt(()=>e),Re=Nt(()=>b),He=A.useCallback(Ee=>C(kr,Ee),[C]),te=A.useCallback(Ee=>C(Xr,Ee),[C]),ve=A.useCallback(()=>C(Zs),[C]),Te=Ee=>!(r.finite&&(Z(Ee)>0&&b.currentIndex===0||Z(Ee)<0&&b.currentIndex===b.slides.length-1)),Je=Ee=>{var we;R.current=Ee,(we=Y.current)===null||we===void 0||we.style.setProperty(Yn("swipe_offset"),`${Math.round(Ee)}px`)},Ge=Ee=>{var we,F;P.current=Ee,N.current=(()=>{const me=g&&Ee>0?Ee:h&&Ee<0?-Ee:0;return Math.min(Math.max(Zp(1-me/60*(1-.5),2),.5),1)})(),(we=Y.current)===null||we===void 0||we.style.setProperty(Yn("pull_offset"),`${Math.round(Ee)}px`),(F=Y.current)===null||F===void 0||F.style.setProperty(Yn("pull_opacity"),`${N.current}`)},{prepareAnimation:ht}=iv(V,(Ee,we,F)=>{if(V.current&&ee)return{keyframes:[{transform:`translate(0, ${Ee.rect.y-we.y+F.y}px)`,opacity:Ee.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Ee.duration,easing:o.easing.fade}}),jt=(Ee,we)=>{if(h||g){Ge(Ee);let F=0;V.current&&(F=o.fade*(we?2:1),ht({rect:V.current.getBoundingClientRect(),opacity:N.current,duration:F})),j(()=>{Ge(0),U(In.NONE)},F),U(In.ANIMATION),we||ve()}},{prepareAnimation:pt,isAnimationPlaying:Mt}=iv(V,(Ee,we,F)=>{var T;if(V.current&&ee&&(!((T=b.animation)===null||T===void 0)&&T.duration)){const K=Mc(r.spacing),me=(K.percent?K.percent*ee.width/100:K.pixel)||0;return{keyframes:[{transform:`translate(${Z(b.globalIndex-Ee.index)*(ee.width+me)+Ee.rect.x-we.x+F.x}px, 0)`},{transform:"translate(0, 0)"}],duration:b.animation.duration,easing:b.animation.easing}}}),yt=Nt(Ee=>{var we,F;const T=Ee.offset||0,K=T?o.swipe:(we=o.navigation)!==null&&we!==void 0?we:o.swipe,me=!T&&!Mt()?o.easing.navigation:o.easing.swipe;let{direction:ge}=Ee;const he=(F=Ee.count)!==null&&F!==void 0?F:1;let Oe=In.ANIMATION,Ae=K*he;if(!ge){const Ke=ee==null?void 0:ee.width,ye=Ee.duration||0,De=Ke?K/Ke*Math.abs(T):K;he!==0?(ye<De?Ae=Ae/De*Math.max(ye,De/5):Ke&&(Ae=K/Ke*(Ke-Math.abs(T))),ge=Z(T)>0?kr:Xr):Ae=K/2}let Xe=0;ge===kr?Te(Z(1))?Xe=-he:(Oe=In.NONE,Ae=K):ge===Xr&&(Te(Z(-1))?Xe=he:(Oe=In.NONE,Ae=K)),Ae=Math.round(Ae),H(()=>{Je(0),U(In.NONE)},Ae),V.current&&pt({rect:V.current.getBoundingClientRect(),index:b.globalIndex}),U(Oe),C(tv,{type:"swipe",increment:Xe,duration:Ae,easing:me})});A.useEffect(()=>{var Ee,we;!((Ee=b.animation)===null||Ee===void 0)&&Ee.increment&&(!((we=b.animation)===null||we===void 0)&&we.duration)&&L(()=>M({type:"swipe",increment:0}),b.animation.duration)},[b.animation,M,L]);const rt=[O,Te,(ee==null?void 0:ee.width)||0,o.swipe,()=>U(In.SWIPE),Ee=>Je(Ee),(Ee,we)=>yt({offset:Ee,duration:we,count:1}),Ee=>yt({offset:Ee,count:0})],At=[()=>{g&&U(In.PULL)},Ee=>Ge(Ee),Ee=>jt(Ee),Ee=>jt(Ee,!0)];QT(u,...rt,h,g,...At,ve),JT(x,...rt);const X=Nt(()=>{u.focus&&de().querySelector(`.${St(Vp)} .${St(sv())}`)&&re()});A.useEffect(X,[X]);const Yt=Nt(()=>{var Ee;(Ee=c.view)===null||Ee===void 0||Ee.call(c,{index:b.currentIndex})});A.useEffect(Yt,[b.globalIndex,Yt]),A.useEffect(()=>Cc(W(kr,Ee=>yt({direction:kr,...Ee})),W(Xr,Ee=>yt({direction:Xr,...Ee})),W(tv,Ee=>M(Ee))),[W,yt,M]);const Et=A.useMemo(()=>({prev:He,next:te,close:ve,focus:re,slideRect:ee?TT(ee,r.padding):{width:0,height:0},containerRect:ee||{width:0,height:0},subscribeSensors:O,containerRef:Y,setCarouselRef:k,toolbarWidth:S,setToolbarWidth:y}),[He,te,ve,re,O,ee,Y,k,S,y,r.padding]);return A.useImperativeHandle(u.ref,()=>({prev:He,next:te,close:ve,focus:re,getLightboxProps:pe,getLightboxState:Re}),[He,te,ve,re,pe,Re]),A.createElement("div",{ref:z,className:Ui(St(sv()),St(Gp)),style:{...x===In.SWIPE?{[Yn("swipe_offset")]:`${Math.round(R.current)}px`}:null,...x===In.PULL?{[Yn("pull_offset")]:`${Math.round(P.current)}px`,[Yn("pull_opacity")]:`${N.current}`}:null,...u.touchAction!=="none"?{[Yn("controller_touch_action")]:u.touchAction}:null,...d.container},tabIndex:-1,...B},ee&&A.createElement(oS.Provider,{value:Et},a,(n=p.controls)===null||n===void 0?void 0:n.call(p)))}const t1=Na(Hp,e1);function Or(a){return Ml(Ox,a)}function ov(a){return Ml(kp,a)}function n1({slide:a,offset:e}){const n=A.useRef(null),{currentIndex:r,slides:o}=Pa(),{slideRect:u,focus:c}=Oa(),{render:d,carousel:{imageFit:p,imageProps:h},on:{click:g},styles:{slide:_},labels:v}=jn(),{getOwnerDocument:S}=yl(),y=e!==0;A.useEffect(()=>{var M;y&&(!((M=n.current)===null||M===void 0)&&M.contains(S().activeElement))&&c()},[y,c,S]);const b=()=>{var M,x,U,R;let P=(M=d.slide)===null||M===void 0?void 0:M.call(d,{slide:a,offset:e,rect:u});return!P&&$r(a)&&(P=A.createElement(yc,{slide:a,offset:e,render:d,rect:u,imageFit:p,imageProps:h,onClick:y?void 0:()=>g==null?void 0:g({index:r})})),P?A.createElement(A.Fragment,null,(x=d.slideHeader)===null||x===void 0?void 0:x.call(d,{slide:a}),((U=d.slideContainer)!==null&&U!==void 0?U:({children:N})=>N)({slide:a,children:P}),(R=d.slideFooter)===null||R===void 0?void 0:R.call(d,{slide:a})):null};return A.createElement("div",{ref:n,className:Ui(St(ov()),!y&&St(ov("current")),St(Gp)),...DT(y),style:_,role:"group","aria-roledescription":js(v,"Slide"),"aria-label":bT(v,o,r+e)},b())}function i1(){const a=jn().styles.slide;return A.createElement("div",{className:St(kp),style:a})}function a1({carousel:a,labels:e}){const{slides:n,currentIndex:r,globalIndex:o}=Pa(),{setCarouselRef:u}=Oa(),{autoPlaying:c,focusWithin:d}=$x(),p=Mc(a.spacing),h=Mc(a.padding),g=CT(a,n,1),_=[];if(Zx(n))for(let v=r-g;v<=r+g;v+=1){const S=jx(n,v),y=o-r+v,b=a.finite&&(v<0||v>n.length-1);_.push(b?{key:y}:{key:[`${y}`,RT(S)].filter(Boolean).join("|"),offset:v-r,slide:S})}return A.createElement("div",{ref:u,className:Ui(St(Or()),_.length>0&&St(Or("with_slides"))),style:{[`${Yn(Or("slides_count"))}`]:_.length,[`${Yn(Or("spacing_px"))}`]:p.pixel||0,[`${Yn(Or("spacing_percent"))}`]:p.percent||0,[`${Yn(Or("padding_px"))}`]:h.pixel||0,[`${Yn(Or("padding_percent"))}`]:h.percent||0},role:"region","aria-live":c&&!d?"off":"polite","aria-roledescription":js(e,"Carousel"),"aria-label":js(e,"Photo gallery")},_.map(({key:v,slide:S,offset:y})=>S?A.createElement(n1,{key:v,slide:S,offset:y}):A.createElement(i1,{key:v})))}const r1=Na(Ox,a1);function lS(){const{carousel:a}=jn(),{slides:e,currentIndex:n}=Pa(),r=e.length===0||a.finite&&n===0,o=e.length===0||a.finite&&n===e.length-1;return{prevDisabled:r,nextDisabled:o}}function s1(a){var e;const n=Jp(),{publish:r}=Dc(),{animation:o}=jn(),{prevDisabled:u,nextDisabled:c}=lS(),d=((e=o.navigation)!==null&&e!==void 0?e:o.swipe)/2,p=rv(()=>r(kr),d),h=rv(()=>r(Xr),d),g=Nt(_=>{switch(_.key){case ST:r(Zs);break;case MT:(n?c:u)||(n?h:p)();break;case yT:(n?u:c)||(n?p:h)();break}});A.useEffect(()=>a(Xp,g),[a,g])}function lv({label:a,icon:e,renderIcon:n,action:r,onClick:o,disabled:u,style:c}){return A.createElement(El,{label:a,icon:e,renderIcon:n,className:St(`navigation_${r}`),disabled:u,onClick:o,style:c,...ZT(Oa().focus,u)})}function o1({render:{buttonPrev:a,buttonNext:e,iconPrev:n,iconNext:r},styles:o}){const{prev:u,next:c,subscribeSensors:d}=Oa(),{prevDisabled:p,nextDisabled:h}=lS();return s1(d),A.createElement(A.Fragment,null,a?a():A.createElement(lv,{label:"Previous",action:kr,icon:kT,renderIcon:n,style:o.navigationPrev,disabled:p,onClick:u}),e?e():A.createElement(lv,{label:"Next",action:Xr,icon:XT,renderIcon:r,style:o.navigationNext,disabled:h,onClick:c}))}const l1=Na(dT,o1),uv=St(_T),u1=St(Bx);function c1(a){return"style"in a}function cv(a,e,n){const r=window.getComputedStyle(a),o=n?"padding-left":"padding-right",u=n?r.paddingLeft:r.paddingRight,c=a.style.getPropertyValue(o);return a.style.setProperty(o,`${(wc(u)||0)+e}px`),()=>{c?a.style.setProperty(o,c):a.style.removeProperty(o)}}function f1({noScroll:{disabled:a},children:e}){const n=Jp(),{getOwnerDocument:r,getOwnerWindow:o}=yl();return A.useEffect(()=>{if(a)return()=>{};const u=[],c=o(),{body:d,documentElement:p}=r(),h=Math.round(c.innerWidth-p.clientWidth);if(h>0){u.push(cv(d,h,n));const g=d.getElementsByTagName("*");for(let _=0;_<g.length;_+=1){const v=g[_];c1(v)&&c.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(u1)&&u.push(cv(v,h,n))}}return d.classList.add(uv),()=>{d.classList.remove(uv),u.forEach(g=>g())}},[n,a,r,o]),A.createElement(A.Fragment,null,e)}const d1=Na(hT,f1);function fv(a){return Ml(Vp,a)}function dv(a,e,n){const r=a.getAttribute(e);return a.setAttribute(e,n),()=>{r?a.setAttribute(e,r):a.removeAttribute(e)}}function h1({children:a,animation:e,styles:n,className:r,on:o,portal:u,close:c,labels:d}){const[p,h]=A.useState(!1),[g,_]=A.useState(!1),v=A.useRef([]),S=A.useRef(null),{setTimeout:y}=Uc(),{subscribe:b}=Dc(),x=$p()?0:e.fade;A.useEffect(()=>(h(!0),()=>{h(!1),_(!1)}),[]);const U=Nt(()=>{v.current.forEach(B=>B()),v.current=[]}),R=Nt(()=>{var B;_(!1),U(),(B=o.exiting)===null||B===void 0||B.call(o),y(()=>{var O;(O=o.exited)===null||O===void 0||O.call(o),c()},x)});A.useEffect(()=>b(Zs,R),[b,R]);const P=Nt(B=>{var O,W,C;UT(B),_(!0),(O=o.entering)===null||O===void 0||O.call(o);const L=(C=(W=B.parentNode)===null||W===void 0?void 0:W.children)!==null&&C!==void 0?C:[];for(let H=0;H<L.length;H+=1){const j=L[H];["TEMPLATE","SCRIPT","STYLE"].indexOf(j.tagName)===-1&&j!==B&&(v.current.push(dv(j,"inert","")),v.current.push(dv(j,"aria-hidden","true")))}v.current.push(()=>{var H,j;(j=(H=S.current)===null||H===void 0?void 0:H.focus)===null||j===void 0||j.call(H)}),y(()=>{var H;(H=o.entered)===null||H===void 0||H.call(o)},x)}),N=A.useCallback(B=>{B?P(B):U()},[P,U]);return p?Bb.createPortal(A.createElement(KT,{ref:N,className:Ui(r,St(fv()),St(Bx),g&&St(fv("open"))),"aria-modal":!0,role:"dialog","aria-label":js(d,"Lightbox"),style:{...e.fade!==Fh.animation.fade?{[Yn("fade_animation_duration")]:`${x}ms`}:null,...e.easing.fade!==Fh.animation.easing.fade?{[Yn("fade_animation_timing_function")]:e.easing.fade}:null,...n.root},onFocus:B=>{S.current||(S.current=B.relatedTarget)}},a),u.root||document.body):null}const p1=Na(Vp,h1);function m1({children:a}){return A.createElement(A.Fragment,null,a)}const g1=Na(pT,m1);function _1(a){return Ml(Ix,a)}function v1({toolbar:{buttons:a},render:{buttonClose:e,iconClose:n},styles:r}){const{close:o,setToolbarWidth:u}=Oa(),{setContainerRef:c,containerRect:d}=rS();Li(()=>{u(d==null?void 0:d.width)},[u,d==null?void 0:d.width]);const p=()=>e?e():A.createElement(El,{key:Zs,label:"Close",icon:GT,renderIcon:n,onClick:o});return A.createElement("div",{ref:c,style:r.toolbar,className:St(_1())},a==null?void 0:a.map(h=>h===Zs?p():h))}const x1=Na(Ix,v1);function uS(a,e){var n;return A.createElement(a.module.component,{key:a.module.name,...e},(n=a.children)===null||n===void 0?void 0:n.map(r=>uS(r,e)))}function S1(a,e={}){const{easing:n,...r}=a,{easing:o,...u}=e;return{easing:{...n,...o},...r,...u}}function M1({carousel:a,animation:e,render:n,toolbar:r,controller:o,noScroll:u,on:c,plugins:d,slides:p,index:h,...g}){const{animation:_,carousel:v,render:S,toolbar:y,controller:b,noScroll:M,on:x,slides:U,index:R,plugins:P,...N}=Fh,{config:B,augmentation:O}=LT([bn(p1,[bn(d1,[bn(t1,[bn(r1),bn(x1),bn(l1)])])])],d||P),W=O({animation:S1(_,e),carousel:{...v,...a},render:{...S,...n},toolbar:{...y,...r},controller:{...b,...o},noScroll:{...M,...u},on:{...x,...c},...N,...g});return W.open?A.createElement(IT,{...W},A.createElement(zT,{slides:p||U,index:wc(h||R)},A.createElement(HT,null,A.createElement(OT,null,A.createElement(NT,null,uS(bn(g1,B),W)))))):null}const y1={auto:!1,ref:null},cS=a=>({...y1,...a}),fS=A.createContext(null),E1=Qi("useFullscreen","FullscreenContext",fS);function b1({fullscreen:a,on:e,children:n}){const{auto:r,ref:o}=cS(a),u=A.useRef(null),[c,d]=A.useState(),[p,h]=A.useState(!1),g=A.useRef(!1),{getOwnerDocument:_}=yl();Li(()=>{var R,P,N,B;const O=_();d(!((B=(N=(P=(R=O.fullscreenEnabled)!==null&&R!==void 0?R:O.webkitFullscreenEnabled)!==null&&P!==void 0?P:O.mozFullScreenEnabled)!==null&&N!==void 0?N:O.msFullscreenEnabled)!==null&&B!==void 0&&B))},[_]);const v=A.useCallback(()=>{var R;const P=_(),N=P.fullscreenElement||P.webkitFullscreenElement||P.mozFullScreenElement||P.msFullscreenElement;return((R=N==null?void 0:N.shadowRoot)===null||R===void 0?void 0:R.fullscreenElement)||N},[_]),S=A.useCallback(()=>{const R=u.current;try{R.requestFullscreen?R.requestFullscreen().catch(()=>{}):R.webkitRequestFullscreen?R.webkitRequestFullscreen():R.mozRequestFullScreen?R.mozRequestFullScreen():R.msRequestFullscreen&&R.msRequestFullscreen()}catch{}},[]),y=A.useCallback(()=>{if(!v())return;const R=_();try{R.exitFullscreen?R.exitFullscreen().catch(()=>{}):R.webkitExitFullscreen?R.webkitExitFullscreen():R.mozCancelFullScreen?R.mozCancelFullScreen():R.msExitFullscreen&&R.msExitFullscreen()}catch{}},[v,_]);A.useEffect(()=>{const R=_(),P=()=>{h(v()===u.current)};return Cc(...["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].map(N=>(R.addEventListener(N,P),()=>R.removeEventListener(N,P))))},[v,_]);const b=Nt(()=>{var R;return(R=e.enterFullscreen)===null||R===void 0?void 0:R.call(e)}),M=Nt(()=>{var R;return(R=e.exitFullscreen)===null||R===void 0?void 0:R.call(e)});A.useEffect(()=>{p&&(g.current=!0),g.current&&(p?b:M)()},[p,b,M]);const x=Nt(()=>{var R;return(R=r?S:null)===null||R===void 0||R(),y});A.useEffect(x,[x]);const U=A.useMemo(()=>({fullscreen:p,disabled:c,enter:S,exit:y}),[p,c,S,y]);return A.useImperativeHandle(o,()=>U,[U]),A.createElement("div",{ref:u,className:Ui(St(Ph),St(Fx))},A.createElement(fS.Provider,{value:U},n))}const T1=$i("EnterFullscreen",A.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})),A1=$i("ExitFullscreen",A.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}));function R1(){var a;const{fullscreen:e,disabled:n,enter:r,exit:o}=E1(),{render:u}=jn();return n?null:u.buttonFullscreen?A.createElement(A.Fragment,null,(a=u.buttonFullscreen)===null||a===void 0?void 0:a.call(u,{fullscreen:e,disabled:n,enter:r,exit:o})):A.createElement(El,{disabled:n,label:e?"Exit Fullscreen":"Enter Fullscreen",icon:e?A1:T1,renderIcon:e?u.iconExitFullscreen:u.iconEnterFullscreen,onClick:e?o:r})}function C1({augment:a,contains:e,addParent:n}){a(({fullscreen:r,toolbar:o,...u})=>({toolbar:Qp(o,Ph,A.createElement(R1,null)),fullscreen:cS(r),...u})),n(e(J_)?J_:Hp,Na(Ph,b1))}const w1={share:void 0},dS=a=>({...w1,...a});function D1(){return typeof navigator<"u"&&!!navigator.canShare}const U1=$i("ShareIcon",A.createElement("path",{d:"m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"}));function L1(){const{render:a,on:e,share:n}=jn(),{share:r}=dS(n),{currentSlide:o,currentIndex:u}=Pa();if(!D1())return null;if(a.buttonShare)return A.createElement(A.Fragment,null,a.buttonShare());const c=o&&(typeof o.share=="object"&&o.share||typeof o.share=="string"&&{url:o.share}||$r(o)&&{url:o.src})||void 0,d=r?(o==null?void 0:o.share)!==!1:c&&navigator.canShare(c),p=()=>{c&&navigator.share(c).catch(()=>{})},h=()=>{var g;o&&((r||p)({slide:o}),(g=e.share)===null||g===void 0||g.call(e,{index:u}))};return A.createElement(El,{label:"Share",icon:U1,renderIcon:a.iconShare,disabled:!d,onClick:h})}function N1({augment:a}){a(({toolbar:e,share:n,...r})=>({toolbar:Qp(e,"share",A.createElement(L1,null)),share:dS(n),...r}))}const P1={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function O1(a){return Math.min(Math.max(a,Number.EPSILON),1)}function hS(a){const{minZoom:e,...n}={...P1,...a};return{minZoom:O1(e),...n}}function I1(a,e,n,r){const o=A.useRef(void 0),u=A.useRef(void 0),{zoom:c}=jn().animation,d=$p(),p=Nt(()=>{var h,g,_;if((h=o.current)===null||h===void 0||h.cancel(),o.current=void 0,u.current&&(r!=null&&r.current)){try{o.current=(_=(g=r.current).animate)===null||_===void 0?void 0:_.call(g,[{transform:u.current},{transform:`scale(${a}) translateX(${e}px) translateY(${n}px)`}],{duration:d?0:c??500,easing:o.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}u.current=void 0,o.current&&(o.current.onfinish=()=>{o.current=void 0})}});return Li(p,[a,e,n,p]),A.useCallback(()=>{u.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function F1(a,e){const{on:n}=jn(),r=Nt(()=>{var o;e||(o=n.zoom)===null||o===void 0||o.call(n,{zoom:a})});A.useEffect(r,[a,r])}function Lc(){const{zoom:a}=jn();return hS(a)}function B1(a,e){var n,r;let o={width:0,height:0},u={width:0,height:0};const{currentSlide:c}=Pa(),{imageFit:d}=jn().carousel,{maxZoomPixelRatio:p}=Lc();if(a&&c){const g={...c,...e};if($r(g)){const _=jp(g,d),v=Math.max(...(((n=g.srcSet)===null||n===void 0?void 0:n.map(y=>y.width))||[]).concat(g.width?[g.width]:[])),S=Math.max(...(((r=g.srcSet)===null||r===void 0?void 0:r.map(y=>y.height))||[]).concat(g.height?[g.height]:[]));v>0&&S>0&&a.width>0&&a.height>0&&(u=_?{width:Math.round(Math.min(v,a.width/a.height*S)),height:Math.round(Math.min(S,a.height/a.width*v))}:{width:v,height:S},u={width:u.width*p,height:u.height*p},o=_?{width:Math.min(a.width,u.width,v),height:Math.min(a.height,u.height,S)}:{width:Math.round(Math.min(a.width,a.height/S*v,v)),height:Math.round(Math.min(a.height,a.width/v*S,S))})}}const h=o.width?Math.max(Zp(u.width/o.width,5),1):1;return{imageRect:o,maxZoom:h}}function hv(a,e){return Math.hypot(a.clientX-e.clientX,a.clientY-e.clientY)}function pv(a,e,n=100,r=2){return a*Math.min(1+Math.abs(e/n),r)**Math.sign(e)}function z1(a,e,n,r,o,u,c,d,p){const h=A.useRef([]),g=A.useRef(0),_=A.useRef(void 0),{globalIndex:v}=Pa(),{getOwnerWindow:S}=yl(),{containerRef:y,subscribeSensors:b}=Oa(),{keyboardMoveDistance:M,zoomInMultiplier:x,wheelZoomDistanceFactor:U,scrollToZoom:R,doubleTapDelay:P,doubleClickDelay:N,doubleClickMaxStops:B,pinchZoomDistanceFactor:O,pinchZoomV4:W}=Lc(),C=A.useCallback(k=>{if(y.current){const{pageX:de,pageY:I}=k,{scrollX:Z,scrollY:re}=S(),{left:pe,top:Re,width:He,height:te}=y.current.getBoundingClientRect();return[de-pe-Z-He/2,I-Re-re-te/2]}return[]},[y,S]),L=Nt(k=>{const{key:de,metaKey:I,ctrlKey:Z}=k,re=I||Z,pe=()=>{k.preventDefault(),k.stopPropagation()};if(a>1){const Re=(He,te)=>{pe(),d(He,te)};de==="ArrowDown"?Re(0,M):de==="ArrowUp"?Re(0,-M):de==="ArrowLeft"?Re(-M,0):de==="ArrowRight"&&Re(M,0)}de==="+"||re&&de==="="?(pe(),o()):de==="-"||re&&de==="_"?(pe(),u()):re&&de==="0"&&(pe(),c(1))}),H=Nt(k=>{if((k.ctrlKey||R)&&Math.abs(k.deltaY)>Math.abs(k.deltaX)){k.stopPropagation(),c(pv(a,-k.deltaY,U),!0,...C(k));return}a>1&&(k.stopPropagation(),R||d(k.deltaX,k.deltaY))}),j=A.useCallback(k=>{const de=h.current;de.splice(0,de.length,...de.filter(I=>I.pointerId!==k.pointerId))},[]),Y=A.useCallback(k=>{j(k),k.persist(),h.current.push(k)},[j]),ae=Nt(k=>{var de;const I=h.current;if(k.pointerType==="mouse"&&k.buttons>1||!(!((de=p==null?void 0:p.current)===null||de===void 0)&&de.contains(k.target)))return;a>1&&k.stopPropagation();const{timeStamp:Z}=k;if(I.length===0&&Z-g.current<(k.pointerType==="touch"?P:N)){g.current=0;const re=a>=1?a!==n?a*Math.max(n**(1/B),x):1:a!==e?a/Math.max(e**(-1/B),x):1;c(re,!1,...C(k))}else g.current=Z;if(Y(k),I.length===2){const re=hv(I[0],I[1]);_.current={previousDistance:re,initialDistance:Math.max(re,1),initialZoom:a}}}),ee=Nt(k=>{const de=h.current,I=de.find(Z=>Z.pointerId===k.pointerId);if(de.length===2&&_.current){k.stopPropagation(),Y(k);const Z=hv(de[0],de[1]),re=W?_.current.initialZoom/_.current.initialDistance*Z:pv(a,Z-_.current.previousDistance,O);c(re,!0,...de.map(pe=>C(pe)).reduce((pe,Re)=>Re.map((He,te)=>pe[te]+He/2))),_.current.previousDistance=Z;return}a>1&&(k.stopPropagation(),I&&(de.length===1&&d((I.clientX-k.clientX)/a,(I.clientY-k.clientY)/a),Y(k)))}),z=A.useCallback(k=>{const de=h.current;de.length===2&&de.find(I=>I.pointerId===k.pointerId)&&(_.current=void 0),j(k)},[j]),V=A.useCallback(()=>{const k=h.current;k.splice(0,k.length),g.current=0,_.current=void 0},[]);sS(b,ae,ee,z,r),A.useEffect(V,[v,V]),A.useEffect(()=>r?()=>{}:Cc(V,b(Xp,L),b(Wp,H)),[r,b,V,L,H])}function H1(a,e,n){const[r,o]=A.useState(1),[u,c]=A.useState(0),[d,p]=A.useState(0),h=I1(r,u,d,n),{currentSlide:g,globalIndex:_}=Pa(),{containerRect:v,slideRect:S}=Oa(),{minZoom:y,zoomInMultiplier:b}=Lc(),M=g&&$r(g)?g.src:void 0,x=!M||!(n!=null&&n.current);Li(()=>{o(1),c(0),p(0)},[_,M]);const U=A.useCallback((O,W,C)=>{const L=C||r,H=u-(O||0),j=d-(W||0),Y=(a.width*L-S.width)/2/L,ae=(a.height*L-S.height)/2/L;c(Math.min(Math.abs(H),Math.max(Y,0))*Math.sign(H)),p(Math.min(Math.abs(j),Math.max(ae,0))*Math.sign(j))},[r,u,d,S,a.width,a.height]),R=A.useCallback((O,W,C,L)=>{const H=Zp(O+.01<e?O-.01>y?O:y:e,5);W||h(),U(C?C*(1/r-1/H):0,L?L*(1/r-1/H):0,H),o(H)},[r,y,e,U,h]),P=Nt(()=>{r>1&&(r>e&&R(e,!0),U())});Li(P,[v.width,v.height,P]);const N=A.useCallback(()=>{const O=r*b;R(r<1&&O>1?1:O)},[r,b,R]),B=A.useCallback(()=>{const O=r/b;R(r>1&&O<1?1:O)},[r,b,R]);return{zoom:r,offsetX:u,offsetY:d,disabled:x,changeOffsets:U,changeZoom:R,zoomIn:N,zoomOut:B}}const pS=A.createContext(null),em=Qi("useZoom","ZoomControllerContext",pS);function V1({children:a}){const[e,n]=A.useState(),{slideRect:r}=Oa(),{ref:o,minZoom:u}=Lc(),{imageRect:c,maxZoom:d}=B1(r,e==null?void 0:e.imageDimensions),{zoom:p,offsetX:h,offsetY:g,disabled:_,changeZoom:v,changeOffsets:S,zoomIn:y,zoomOut:b}=H1(c,d,e==null?void 0:e.zoomWrapperRef);F1(p,_),z1(p,u,d,_,y,b,v,S,e==null?void 0:e.zoomWrapperRef);const M=A.useMemo(()=>({zoom:p,minZoom:u,maxZoom:d,offsetX:h,offsetY:g,disabled:_,zoomIn:y,zoomOut:b,changeZoom:v}),[p,u,d,h,g,_,y,b,v]);A.useImperativeHandle(o,()=>M,[M]);const x=A.useMemo(()=>({...M,setZoomWrapper:n}),[M,n]);return A.createElement(pS.Provider,{value:x},a)}const G1=$i("ZoomIn",A.createElement(A.Fragment,null,A.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),A.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),k1=$i("ZoomOut",A.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),mv=A.forwardRef(function({zoomIn:e,onLoseFocus:n},r){const o=A.useRef(!1),u=A.useRef(!1),{zoom:c,minZoom:d,maxZoom:p,zoomIn:h,zoomOut:g,disabled:_}=em(),{render:v}=jn(),S=_||(e?c>=p:c<=d);return A.useEffect(()=>{S&&o.current&&u.current&&n(),S||(o.current=!0)},[S,n]),A.createElement(El,{ref:r,disabled:S,label:e?"Zoom in":"Zoom out",icon:e?G1:k1,renderIcon:e?v.iconZoomIn:v.iconZoomOut,onClick:e?h:g,onFocus:()=>{u.current=!0},onBlur:()=>{u.current=!1}})});function X1(){const a=A.useRef(null),e=A.useRef(null),{focus:n}=Oa(),r=A.useCallback(c=>{var d,p;!((d=c.current)===null||d===void 0)&&d.disabled?n():(p=c.current)===null||p===void 0||p.focus()},[n]),o=A.useCallback(()=>r(a),[r]),u=A.useCallback(()=>r(e),[r]);return A.createElement(A.Fragment,null,A.createElement(mv,{zoomIn:!0,ref:a,onLoseFocus:u}),A.createElement(mv,{ref:e,onLoseFocus:o}))}function W1(){const{render:a}=jn(),e=em();return a.buttonZoom?A.createElement(A.Fragment,null,a.buttonZoom(e)):A.createElement(X1,null)}function q1(a){var e;return(((e=a.srcSet)===null||e===void 0?void 0:e.length)||0)>0}function Y1({current:a,preload:e},{type:n,source:r}){switch(n){case"fetch":return a?{current:a,preload:r}:{current:r};case"done":return r===e?{current:r}:{current:a,preload:e};default:throw new Error(qx)}}function Z1(a){var e,n;const[{current:r,preload:o},u]=A.useReducer(Y1,{}),{slide:c,rect:d,imageFit:p,render:h,interactive:g}=a,_=c.srcSet.sort((N,B)=>N.width-B.width),v=(e=c.width)!==null&&e!==void 0?e:_[_.length-1].width,S=(n=c.height)!==null&&n!==void 0?n:_[_.length-1].height,y=jp(c,p),b=Math.max(..._.map(N=>N.width)),M=Math.min((y?Math.max:Math.min)(d.width,v*(d.height/S)),b),x=AT(),U=Nt(()=>{var N;const B=(N=_.find(O=>O.width>=M*x))!==null&&N!==void 0?N:_[_.length-1];(!r||_.findIndex(O=>O.src===r)<_.findIndex(O=>O===B))&&u({type:"fetch",source:B.src})});Li(U,[d.width,d.height,x,U]);const R=Nt(N=>u({type:"done",source:N})),P={WebkitTransform:g?"initial":"translateZ(0)"};return y||Object.assign(P,d.width/d.height<v/S?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),A.createElement(A.Fragment,null,o&&o!==r&&A.createElement(yc,{key:"preload",...a,offset:void 0,slide:{...c,src:o,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...P},onLoad:()=>R(o),render:{...h,iconLoading:()=>null,iconError:()=>null}}),r&&A.createElement(yc,{key:"current",...a,slide:{...c,src:r,srcSet:void 0},style:P}))}function j1({render:a,slide:e,offset:n,rect:r}){var o;const[u,c]=A.useState(),d=A.useRef(null),{zoom:p,maxZoom:h,offsetX:g,offsetY:_,setZoomWrapper:v}=em(),S=p>1,{carousel:y,on:b}=jn(),{currentIndex:M}=Pa();Li(()=>n===0?(v({zoomWrapperRef:d,imageDimensions:u}),()=>v(void 0)):()=>{},[n,u,v]);let x=(o=a.slide)===null||o===void 0?void 0:o.call(a,{slide:e,offset:n,rect:r,zoom:p,maxZoom:h});if(!x&&$r(e)){const U={slide:e,offset:n,rect:r,render:a,imageFit:y.imageFit,imageProps:y.imageProps,onClick:n===0?()=>{var R;return(R=b.click)===null||R===void 0?void 0:R.call(b,{index:M})}:void 0};x=q1(e)?A.createElement(Z1,{...U,slide:e,interactive:S,rect:n===0?{width:r.width*p,height:r.height*p}:r}):A.createElement(yc,{onLoad:R=>c({width:R.naturalWidth,height:R.naturalHeight}),...U})}return x?A.createElement("div",{ref:d,className:Ui(St(Fx),St(Gp),St(zx),S&&St(vT)),style:n===0?{transform:`scale(${p}) translateX(${g}px) translateY(${_}px)`}:void 0},x):null}const K1=({augment:a,addModule:e})=>{a(({zoom:n,toolbar:r,render:o,controller:u,...c})=>{const d=hS(n);return{zoom:d,toolbar:Qp(r,ev,A.createElement(W1,null)),render:{...o,slide:p=>{var h;return $r(p.slide)?A.createElement(j1,{render:o,...p}):(h=o.slide)===null||h===void 0?void 0:h.call(o,p)}},controller:{...u,preventDefaultWheelY:d.scrollToZoom},...c}}),e(Na(ev,V1))};function Q1(){const[a,e]=A.useState(-1),n=[{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true",width:1280,height:853}];return $e.jsxs($e.Fragment,{children:[$e.jsxs("div",{className:"title-bar",children:[$e.jsx("h1",{children:"Tyler Brodnicki"}),$e.jsx("h2",{children:"Photographer"}),$e.jsx("h3",{children:"Gallery"})]}),$e.jsxs("div",{className:"content",children:[$e.jsx(fT,{photos:n,spacing:15,rowConstraints:{singleRowMaxHeight:350}}),$e.jsx(M1,{slides:n.map(r=>({src:r.src})),open:!1,plugins:[C1,K1,N1]})]}),$e.jsx("div",{className:"footer",children:$e.jsx("p",{children:"© 2026 Tyler Brodnicki. All rights reserved."})})]})}function $1(){return $e.jsx($e.Fragment,{children:$e.jsxs("div",{style:{paddingTop:"6rem"},children:[$e.jsxs("div",{className:"title-bar",children:[$e.jsx("h1",{children:"About"}),$e.jsx("h2",{children:"About Tyler Brodnicki"}),$e.jsx("h3",{children:"Photographer & Creator"})]}),$e.jsx("div",{className:"content",children:$e.jsx("p",{children:"Hi — I'm Tyler. I photograph landscapes and candid moments. This site showcases a selection of my work."})})]})})}function J1(){return $e.jsxs("div",{style:{paddingTop:"6rem"},children:[$e.jsxs("div",{className:"title-bar",children:[$e.jsx("h1",{children:"Contact"}),$e.jsx("h2",{children:"Get in touch"})]}),$e.jsxs("div",{className:"content",children:[$e.jsx("a",{href:"mailto:Brodnicki.TJ@Gmail.com",children:"Email Me!"}),$e.jsx("a",{href:"https://www.instagram.com/southerndigitalphotos/",target:"_blank",rel:"noreferrer",children:"Instagram"})]})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tm="182",eA=0,gv=1,tA=2,dc=1,nA=2,ul=3,_r=0,Zn=1,ya=2,Ta=0,qs=1,_v=2,vv=3,xv=4,iA=5,Wr=100,aA=101,rA=102,sA=103,oA=104,lA=200,uA=201,cA=202,fA=203,zh=204,Hh=205,dA=206,hA=207,pA=208,mA=209,gA=210,_A=211,vA=212,xA=213,SA=214,Vh=0,Gh=1,kh=2,Ks=3,Xh=4,Wh=5,qh=6,Yh=7,mS=0,MA=1,yA=2,qi=0,gS=1,_S=2,vS=3,xS=4,SS=5,MS=6,yS=7,ES=300,jr=301,Qs=302,Zh=303,jh=304,Nc=306,Kh=1e3,Ea=1001,Qh=1002,Dn=1003,EA=1004,Vu=1005,Fn=1006,eh=1007,Yr=1008,gi=1009,bS=1010,TS=1011,pl=1012,nm=1013,ji=1014,Xi=1015,wa=1016,im=1017,am=1018,ml=1020,AS=35902,RS=35899,CS=1021,wS=1022,Di=1023,Da=1026,Zr=1027,DS=1028,rm=1029,$s=1030,sm=1031,om=1033,hc=33776,pc=33777,mc=33778,gc=33779,$h=35840,Jh=35841,ep=35842,tp=35843,np=36196,ip=37492,ap=37496,rp=37488,sp=37489,op=37490,lp=37491,up=37808,cp=37809,fp=37810,dp=37811,hp=37812,pp=37813,mp=37814,gp=37815,_p=37816,vp=37817,xp=37818,Sp=37819,Mp=37820,yp=37821,Ep=36492,bp=36494,Tp=36495,Ap=36283,Rp=36284,Cp=36285,wp=36286,bA=3200,TA=0,AA=1,pr="",ri="srgb",Js="srgb-linear",Ec="linear",Ht="srgb",Ls=7680,Sv=519,RA=512,CA=513,wA=514,lm=515,DA=516,UA=517,um=518,LA=519,Mv=35044,yv="300 es",Wi=2e3,bc=2001;function US(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Tc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function NA(){const a=Tc("canvas");return a.style.display="block",a}const Ev={};function bv(...a){const e="THREE."+a.shift();console.log(e,...a)}function st(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Lt(...a){const e="THREE."+a.shift();console.error(e,...a)}function gl(...a){const e=a.join(" ");e in Ev||(Ev[e]=!0,st(...a))}function PA(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}class no{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],th=Math.PI/180,Dp=180/Math.PI;function bl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function bt(a,e,n){return Math.max(e,Math.min(n,a))}function OA(a,e){return(a%e+e)%e}function nh(a,e,n){return(1-n)*a+n*e}function nl(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(e=0,n=0){Ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tl{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,d){let p=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=u[c+0],S=u[c+1],y=u[c+2],b=u[c+3];if(d<=0){e[n+0]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=v,e[n+1]=S,e[n+2]=y,e[n+3]=b;return}if(_!==b||p!==v||h!==S||g!==y){let M=p*v+h*S+g*y+_*b;M<0&&(v=-v,S=-S,y=-y,b=-b,M=-M);let x=1-d;if(M<.9995){const U=Math.acos(M),R=Math.sin(U);x=Math.sin(x*U)/R,d=Math.sin(d*U)/R,p=p*x+v*d,h=h*x+S*d,g=g*x+y*d,_=_*x+b*d}else{p=p*x+v*d,h=h*x+S*d,g=g*x+y*d,_=_*x+b*d;const U=1/Math.sqrt(p*p+h*h+g*g+_*_);p*=U,h*=U,g*=U,_*=U}}e[n]=p,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,c){const d=r[o],p=r[o+1],h=r[o+2],g=r[o+3],_=u[c],v=u[c+1],S=u[c+2],y=u[c+3];return e[n]=d*y+g*_+p*S-h*v,e[n+1]=p*y+g*v+h*_-d*S,e[n+2]=h*y+g*S+d*v-p*_,e[n+3]=g*y-d*_-p*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,h=d(r/2),g=d(o/2),_=d(u/2),v=p(r/2),S=p(o/2),y=p(u/2);switch(c){case"XYZ":this._x=v*g*_+h*S*y,this._y=h*S*_-v*g*y,this._z=h*g*y+v*S*_,this._w=h*g*_-v*S*y;break;case"YXZ":this._x=v*g*_+h*S*y,this._y=h*S*_-v*g*y,this._z=h*g*y-v*S*_,this._w=h*g*_+v*S*y;break;case"ZXY":this._x=v*g*_-h*S*y,this._y=h*S*_+v*g*y,this._z=h*g*y+v*S*_,this._w=h*g*_-v*S*y;break;case"ZYX":this._x=v*g*_-h*S*y,this._y=h*S*_+v*g*y,this._z=h*g*y-v*S*_,this._w=h*g*_+v*S*y;break;case"YZX":this._x=v*g*_+h*S*y,this._y=h*S*_+v*g*y,this._z=h*g*y-v*S*_,this._w=h*g*_-v*S*y;break;case"XZY":this._x=v*g*_-h*S*y,this._y=h*S*_-v*g*y,this._z=h*g*y+v*S*_,this._w=h*g*_+v*S*y;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],d=n[5],p=n[9],h=n[2],g=n[6],_=n[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(u-h)*S,this._z=(c-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(u+h)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(u-h)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(c-o)/S,this._x=(u+h)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,d=n._x,p=n._y,h=n._z,g=n._w;return this._x=r*g+c*d+o*h-u*p,this._y=o*g+c*p+u*d-r*h,this._z=u*g+c*h+r*p-o*d,this._w=c*g-r*d-o*p-u*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let p=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);p=Math.sin(p*h)/g,n=Math.sin(n*h)/g,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,n=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,p=e.w,h=2*(c*o-d*r),g=2*(d*n-u*o),_=2*(u*r-c*n);return this.x=n+p*h+c*_-d*g,this.y=r+p*g+d*h-u*_,this.z=o+p*_+u*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=o*p-u*d,this.y=u*c-r*p,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ih.copy(this).projectOnVector(e),this.sub(ih)}reflect(e){return this.sub(ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new fe,Tv=new Tl;class ft{constructor(e,n,r,o,u,c,d,p,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,h)}set(e,n,r,o,u,c,d,p,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=p,g[6]=r,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],h=r[1],g=r[4],_=r[7],v=r[2],S=r[5],y=r[8],b=o[0],M=o[3],x=o[6],U=o[1],R=o[4],P=o[7],N=o[2],B=o[5],O=o[8];return u[0]=c*b+d*U+p*N,u[3]=c*M+d*R+p*B,u[6]=c*x+d*P+p*O,u[1]=h*b+g*U+_*N,u[4]=h*M+g*R+_*B,u[7]=h*x+g*P+_*O,u[2]=v*b+S*U+y*N,u[5]=v*M+S*R+y*B,u[8]=v*x+S*P+y*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],h=e[7],g=e[8];return n*c*g-n*d*h-r*u*g+r*d*p+o*u*h-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],h=e[7],g=e[8],_=g*c-d*h,v=d*p-g*u,S=h*u-c*p,y=n*_+r*v+o*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/y;return e[0]=_*b,e[1]=(o*h-g*r)*b,e[2]=(d*r-o*c)*b,e[3]=v*b,e[4]=(g*n-o*p)*b,e[5]=(o*u-d*n)*b,e[6]=S*b,e[7]=(r*p-h*n)*b,e[8]=(c*n-r*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,d){const p=Math.cos(u),h=Math.sin(u);return this.set(r*p,r*h,-r*(p*c+h*d)+c+e,-o*h,o*p,-o*(-h*c+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ah.makeScale(e,n)),this}rotate(e){return this.premultiply(ah.makeRotation(-e)),this}translate(e,n){return this.premultiply(ah.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new ft,Av=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IA(){const a={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ht&&(o.r=Aa(o.r),o.g=Aa(o.g),o.b=Aa(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===pr?Ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return gl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return gl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Js]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Av,fromXYZ:Rv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),a}const Rt=IA();function Aa(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ys(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ns;class FA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=Tc("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Aa(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Aa(n[r]/255)*255):n[r]=Aa(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BA=0;class cm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=bl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(rh(o[c].image)):u.push(rh(o[c]))}else u=rh(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function rh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?FA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let zA=0;const sh=new fe;class Hn extends no{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=Ea,o=Ea,u=Fn,c=Yr,d=Di,p=gi,h=Hn.DEFAULT_ANISOTROPY,g=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=bl(),this.name="",this.source=new cm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sh).x}get height(){return this.source.getSize(sh).y}get depth(){return this.source.getSize(sh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ES)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Kh:e.x=e.x-Math.floor(e.x);break;case Ea:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Kh:e.y=e.y-Math.floor(e.y);break;case Ea:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=ES;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,h=p[0],g=p[4],_=p[8],v=p[1],S=p[5],y=p[9],b=p[2],M=p[6],x=p[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(y-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(y+M)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(h+1)/2,P=(S+1)/2,N=(x+1)/2,B=(g+v)/4,O=(_+b)/4,W=(y+M)/4;return R>P&&R>N?R<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(R),o=B/r,u=O/r):P>N?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=B/o,u=W/o):N<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(N),r=O/u,o=W/u),this.set(r,o,u,n),this}let U=Math.sqrt((M-y)*(M-y)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(M-y)/U,this.y=(_-b)/U,this.z=(v-g)/U,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class HA extends no{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const o={width:e,height:n,depth:r.depth},u=new Hn(o);this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new cm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends HA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class LS extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VA extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ea,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Al{constructor(e=new fe(1/0,1/0,1/0),n=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(bi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(bi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=bi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,bi):bi.fromBufferAttribute(u,c),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gu.copy(r.boundingBox)),Gu.applyMatrix4(e.matrixWorld),this.union(Gu)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(il),ku.subVectors(this.max,il),Ps.subVectors(e.a,il),Os.subVectors(e.b,il),Is.subVectors(e.c,il),lr.subVectors(Os,Ps),ur.subVectors(Is,Os),Ir.subVectors(Ps,Is);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!oh(n,Ps,Os,Is,ku)||(n=[1,0,0,0,1,0,0,0,1],!oh(n,Ps,Os,Is,ku))?!1:(Xu.crossVectors(lr,ur),n=[Xu.x,Xu.y,Xu.z],oh(n,Ps,Os,Is,ku))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],bi=new fe,Gu=new Al,Ps=new fe,Os=new fe,Is=new fe,lr=new fe,ur=new fe,Ir=new fe,il=new fe,ku=new fe,Xu=new fe,Fr=new fe;function oh(a,e,n,r,o){for(let u=0,c=a.length-3;u<=c;u+=3){Fr.fromArray(a,u);const d=o.x*Math.abs(Fr.x)+o.y*Math.abs(Fr.y)+o.z*Math.abs(Fr.z),p=e.dot(Fr),h=n.dot(Fr),g=r.dot(Fr);if(Math.max(-Math.max(p,h,g),Math.min(p,h,g))>d)return!1}return!0}const GA=new Al,al=new fe,lh=new fe;class fm{constructor(e=new fe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):GA.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;al.subVectors(e,this.center);const n=al.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(al,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(al.copy(e.center).add(lh)),this.expandByPoint(al.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new fe,uh=new fe,Wu=new fe,cr=new fe,ch=new fe,qu=new fe,fh=new fe;class kA{constructor(e=new fe,n=new fe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=va.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,n),va.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){uh.copy(e).add(n).multiplyScalar(.5),Wu.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(uh);const u=e.distanceTo(n)*.5,c=-this.direction.dot(Wu),d=cr.dot(this.direction),p=-cr.dot(Wu),h=cr.lengthSq(),g=Math.abs(1-c*c);let _,v,S,y;if(g>0)if(_=c*p-d,v=c*d-p,y=u*g,_>=0)if(v>=-y)if(v<=y){const b=1/g;_*=b,v*=b,S=_*(_+c*v+2*d)+v*(c*_+v+2*p)+h}else v=u,_=Math.max(0,-(c*v+d)),S=-_*_+v*(v+2*p)+h;else v=-u,_=Math.max(0,-(c*v+d)),S=-_*_+v*(v+2*p)+h;else v<=-y?(_=Math.max(0,-(-c*u+d)),v=_>0?-u:Math.min(Math.max(-u,-p),u),S=-_*_+v*(v+2*p)+h):v<=y?(_=0,v=Math.min(Math.max(-u,-p),u),S=v*(v+2*p)+h):(_=Math.max(0,-(c*u+d)),v=_>0?u:Math.min(Math.max(-u,-p),u),S=-_*_+v*(v+2*p)+h);else v=c>0?-u:u,_=Math.max(0,-(c*v+d)),S=-_*_+v*(v+2*p)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(uh).addScaledVector(Wu,v),S}intersectSphere(e,n){va.subVectors(e.center,this.origin);const r=va.dot(this.direction),o=va.dot(va)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,d,p;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(u=(e.min.y-v.y)*g,c=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,c=(e.min.y-v.y)*g),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-v.z)*_,p=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,p=(e.min.z-v.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,n,r,o,u){ch.subVectors(n,e),qu.subVectors(r,e),fh.crossVectors(ch,qu);let c=this.direction.dot(fh),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(qu.crossVectors(cr,qu));if(p<0)return null;const h=d*this.direction.dot(ch.cross(cr));if(h<0||p+h>c)return null;const g=-d*cr.dot(fh);return g<0?null:this.at(g/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,n,r,o,u,c,d,p,h,g,_,v,S,y,b,M){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,h,g,_,v,S,y,b,M)}set(e,n,r,o,u,c,d,p,h,g,_,v,S,y,b,M){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=u,x[5]=c,x[9]=d,x[13]=p,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=y,x[11]=b,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),u=1/Fs.setFromMatrixColumn(e,1).length(),c=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(o),h=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=c*g,S=c*_,y=d*g,b=d*_;n[0]=p*g,n[4]=-p*_,n[8]=h,n[1]=S+y*h,n[5]=v-b*h,n[9]=-d*p,n[2]=b-v*h,n[6]=y+S*h,n[10]=c*p}else if(e.order==="YXZ"){const v=p*g,S=p*_,y=h*g,b=h*_;n[0]=v+b*d,n[4]=y*d-S,n[8]=c*h,n[1]=c*_,n[5]=c*g,n[9]=-d,n[2]=S*d-y,n[6]=b+v*d,n[10]=c*p}else if(e.order==="ZXY"){const v=p*g,S=p*_,y=h*g,b=h*_;n[0]=v-b*d,n[4]=-c*_,n[8]=y+S*d,n[1]=S+y*d,n[5]=c*g,n[9]=b-v*d,n[2]=-c*h,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const v=c*g,S=c*_,y=d*g,b=d*_;n[0]=p*g,n[4]=y*h-S,n[8]=v*h+b,n[1]=p*_,n[5]=b*h+v,n[9]=S*h-y,n[2]=-h,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const v=c*p,S=c*h,y=d*p,b=d*h;n[0]=p*g,n[4]=b-v*_,n[8]=y*_+S,n[1]=_,n[5]=c*g,n[9]=-d*g,n[2]=-h*g,n[6]=S*_+y,n[10]=v-b*_}else if(e.order==="XZY"){const v=c*p,S=c*h,y=d*p,b=d*h;n[0]=p*g,n[4]=-_,n[8]=h*g,n[1]=v*_+b,n[5]=c*g,n[9]=S*_-y,n[2]=y*_-S,n[6]=d*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XA,e,WA)}lookAt(e,n,r){const o=this.elements;return ii.subVectors(e,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),fr.crossVectors(r,ii),fr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),fr.crossVectors(r,ii)),fr.normalize(),Yu.crossVectors(ii,fr),o[0]=fr.x,o[4]=Yu.x,o[8]=ii.x,o[1]=fr.y,o[5]=Yu.y,o[9]=ii.y,o[2]=fr.z,o[6]=Yu.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],h=r[12],g=r[1],_=r[5],v=r[9],S=r[13],y=r[2],b=r[6],M=r[10],x=r[14],U=r[3],R=r[7],P=r[11],N=r[15],B=o[0],O=o[4],W=o[8],C=o[12],L=o[1],H=o[5],j=o[9],Y=o[13],ae=o[2],ee=o[6],z=o[10],V=o[14],k=o[3],de=o[7],I=o[11],Z=o[15];return u[0]=c*B+d*L+p*ae+h*k,u[4]=c*O+d*H+p*ee+h*de,u[8]=c*W+d*j+p*z+h*I,u[12]=c*C+d*Y+p*V+h*Z,u[1]=g*B+_*L+v*ae+S*k,u[5]=g*O+_*H+v*ee+S*de,u[9]=g*W+_*j+v*z+S*I,u[13]=g*C+_*Y+v*V+S*Z,u[2]=y*B+b*L+M*ae+x*k,u[6]=y*O+b*H+M*ee+x*de,u[10]=y*W+b*j+M*z+x*I,u[14]=y*C+b*Y+M*V+x*Z,u[3]=U*B+R*L+P*ae+N*k,u[7]=U*O+R*H+P*ee+N*de,u[11]=U*W+R*j+P*z+N*I,u[15]=U*C+R*Y+P*V+N*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],p=e[9],h=e[13],g=e[2],_=e[6],v=e[10],S=e[14],y=e[3],b=e[7],M=e[11],x=e[15],U=p*S-h*v,R=d*S-h*_,P=d*v-p*_,N=c*S-h*g,B=c*v-p*g,O=c*_-d*g;return n*(b*U-M*R+x*P)-r*(y*U-M*N+x*B)+o*(y*R-b*N+x*O)-u*(y*P-b*B+M*O)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],h=e[7],g=e[8],_=e[9],v=e[10],S=e[11],y=e[12],b=e[13],M=e[14],x=e[15],U=_*M*h-b*v*h+b*p*S-d*M*S-_*p*x+d*v*x,R=y*v*h-g*M*h-y*p*S+c*M*S+g*p*x-c*v*x,P=g*b*h-y*_*h+y*d*S-c*b*S-g*d*x+c*_*x,N=y*_*p-g*b*p-y*d*v+c*b*v+g*d*M-c*_*M,B=n*U+r*R+o*P+u*N;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=U*O,e[1]=(b*v*u-_*M*u-b*o*S+r*M*S+_*o*x-r*v*x)*O,e[2]=(d*M*u-b*p*u+b*o*h-r*M*h-d*o*x+r*p*x)*O,e[3]=(_*p*u-d*v*u-_*o*h+r*v*h+d*o*S-r*p*S)*O,e[4]=R*O,e[5]=(g*M*u-y*v*u+y*o*S-n*M*S-g*o*x+n*v*x)*O,e[6]=(y*p*u-c*M*u-y*o*h+n*M*h+c*o*x-n*p*x)*O,e[7]=(c*v*u-g*p*u+g*o*h-n*v*h-c*o*S+n*p*S)*O,e[8]=P*O,e[9]=(y*_*u-g*b*u-y*r*S+n*b*S+g*r*x-n*_*x)*O,e[10]=(c*b*u-y*d*u+y*r*h-n*b*h-c*r*x+n*d*x)*O,e[11]=(g*d*u-c*_*u-g*r*h+n*_*h+c*r*S-n*d*S)*O,e[12]=N*O,e[13]=(g*b*o-y*_*o+y*r*v-n*b*v-g*r*M+n*_*M)*O,e[14]=(y*d*o-c*b*o-y*r*p+n*b*p+c*r*M-n*d*M)*O,e[15]=(c*_*o-g*d*o+g*r*p-n*_*p-c*r*v+n*d*v)*O,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,h=u*c,g=u*d;return this.set(h*c+r,h*d-o*p,h*p+o*d,0,h*d+o*p,g*d+r,g*p-o*c,0,h*p-o*d,g*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,h=u+u,g=c+c,_=d+d,v=u*h,S=u*g,y=u*_,b=c*g,M=c*_,x=d*_,U=p*h,R=p*g,P=p*_,N=r.x,B=r.y,O=r.z;return o[0]=(1-(b+x))*N,o[1]=(S+P)*N,o[2]=(y-R)*N,o[3]=0,o[4]=(S-P)*B,o[5]=(1-(v+x))*B,o[6]=(M+U)*B,o[7]=0,o[8]=(y+R)*O,o[9]=(M-U)*O,o[10]=(1-(v+b))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let u=Fs.set(o[0],o[1],o[2]).length();const c=Fs.set(o[4],o[5],o[6]).length(),d=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),Ti.copy(this);const h=1/u,g=1/c,_=1/d;return Ti.elements[0]*=h,Ti.elements[1]*=h,Ti.elements[2]*=h,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,n.setFromRotationMatrix(Ti),r.x=u,r.y=c,r.z=d,this}makePerspective(e,n,r,o,u,c,d=Wi,p=!1){const h=this.elements,g=2*u/(n-e),_=2*u/(r-o),v=(n+e)/(n-e),S=(r+o)/(r-o);let y,b;if(p)y=u/(c-u),b=c*u/(c-u);else if(d===Wi)y=-(c+u)/(c-u),b=-2*c*u/(c-u);else if(d===bc)y=-c/(c-u),b=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,u,c,d=Wi,p=!1){const h=this.elements,g=2/(n-e),_=2/(r-o),v=-(n+e)/(n-e),S=-(r+o)/(r-o);let y,b;if(p)y=1/(c-u),b=c/(c-u);else if(d===Wi)y=-2/(c-u),b=-(c+u)/(c-u);else if(d===bc)y=-1/(c-u),b=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=y,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Fs=new fe,Ti=new dn,XA=new fe(0,0,0),WA=new fe(1,1,1),fr=new fe,Yu=new fe,ii=new fe,Cv=new dn,wv=new Tl;class Ua{constructor(e=0,n=0,r=0,o=Ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],p=o[1],h=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(bt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Cv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ua.DEFAULT_ORDER="XYZ";class NS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qA=0;const Dv=new fe,Bs=new Tl,xa=new dn,Zu=new fe,rl=new fe,YA=new fe,ZA=new Tl,Uv=new fe(1,0,0),Lv=new fe(0,1,0),Nv=new fe(0,0,1),Pv={type:"added"},jA={type:"removed"},zs={type:"childadded",child:null},dh={type:"childremoved",child:null};class si extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qA++}),this.uuid=bl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new fe,n=new Ua,r=new Tl,o=new fe(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new NS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Uv,e)}rotateY(e){return this.rotateOnAxis(Lv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,n){return Dv.copy(e).applyQuaternion(this.quaternion),this.position.add(Dv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Uv,e)}translateY(e){return this.translateOnAxis(Lv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Zu.copy(e):Zu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),rl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(rl,Zu,this.up):xa.lookAt(Zu,rl,this.up),this.quaternion.setFromRotationMatrix(xa),o&&(xa.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(xa),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pv),zs.child=e,this.dispatchEvent(zs),zs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(jA),dh.child=e,this.dispatchEvent(dh),dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pv),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,e,YA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rl,ZA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,g=p.length;h<g;h++){const _=p[h];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),h=c(e.textures),g=c(e.images),_=c(e.shapes),v=c(e.skeletons),S=c(e.animations),y=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),y.length>0&&(r.nodes=y)}return r.object=o,r;function c(d){const p=[];for(const h in d){const g=d[h];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}si.DEFAULT_UP=new fe(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new fe,Sa=new fe,hh=new fe,Ma=new fe,Hs=new fe,Vs=new fe,Ov=new fe,ph=new fe,mh=new fe,gh=new fe,_h=new on,vh=new on,xh=new on;class wi{constructor(e=new fe,n=new fe,r=new fe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ai.subVectors(e,n),o.cross(Ai);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ai.subVectors(o,n),Sa.subVectors(r,n),hh.subVectors(e,n);const c=Ai.dot(Ai),d=Ai.dot(Sa),p=Ai.dot(hh),h=Sa.dot(Sa),g=Sa.dot(hh),_=c*h-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,S=(h*p-d*g)*v,y=(c*g-d*p)*v;return u.set(1-S-y,y,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,n,r,o,u,c,d,p){return this.getBarycoord(e,n,r,o,Ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ma.x),p.addScaledVector(c,Ma.y),p.addScaledVector(d,Ma.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return _h.setScalar(0),vh.setScalar(0),xh.setScalar(0),_h.fromBufferAttribute(e,n),vh.fromBufferAttribute(e,r),xh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(_h,u.x),c.addScaledVector(vh,u.y),c.addScaledVector(xh,u.z),c}static isFrontFacing(e,n,r,o){return Ai.subVectors(r,n),Sa.subVectors(e,n),Ai.cross(Sa).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),Sa.subVectors(this.a,this.b),Ai.cross(Sa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return wi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,d;Hs.subVectors(o,r),Vs.subVectors(u,r),ph.subVectors(e,r);const p=Hs.dot(ph),h=Vs.dot(ph);if(p<=0&&h<=0)return n.copy(r);mh.subVectors(e,o);const g=Hs.dot(mh),_=Vs.dot(mh);if(g>=0&&_<=g)return n.copy(o);const v=p*_-g*h;if(v<=0&&p>=0&&g<=0)return c=p/(p-g),n.copy(r).addScaledVector(Hs,c);gh.subVectors(e,u);const S=Hs.dot(gh),y=Vs.dot(gh);if(y>=0&&S<=y)return n.copy(u);const b=S*h-p*y;if(b<=0&&h>=0&&y<=0)return d=h/(h-y),n.copy(r).addScaledVector(Vs,d);const M=g*y-S*_;if(M<=0&&_-g>=0&&S-y>=0)return Ov.subVectors(u,o),d=(_-g)/(_-g+(S-y)),n.copy(o).addScaledVector(Ov,d);const x=1/(M+b+v);return c=b*x,d=v*x,n.copy(r).addScaledVector(Hs,c).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const PS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},ju={h:0,s:0,l:0};function Sh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class Xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=OA(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Sh(c,u,e+1/3),this.g=Sh(c,u,e),this.b=Sh(c,u,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=ri){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const r=PS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Aa(e.r),this.g=Aa(e.g),this.b=Aa(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Rt.workingToColorSpace(On.copy(this),e),Math.round(bt(On.r*255,0,255))*65536+Math.round(bt(On.g*255,0,255))*256+Math.round(bt(On.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(On.copy(this),n);const r=On.r,o=On.g,u=On.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let p,h;const g=(d+c)/2;if(d===c)p=0,h=0;else{const _=c-d;switch(h=g<=.5?_/(c+d):_/(2-c-d),c){case r:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-r)/_+2;break;case u:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=h,e.l=g,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ri){Rt.workingToColorSpace(On.copy(this),e);const n=On.r,r=On.g,o=On.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(ju);const r=nh(dr.h,ju.h,n),o=nh(dr.s,ju.s,n),u=nh(dr.l,ju.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Xt;Xt.NAMES=PS;let KA=0;class Pc extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KA++}),this.uuid=bl(),this.name="",this.type="Material",this.blending=qs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zh,this.blendDst=Hh,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(r.blending=this.blending),this.side!==_r&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Hh&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class OS extends Pc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ua,this.combine=mS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new fe,Ku=new Ct;let QA=0;class Zi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Mv,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Ku.fromBufferAttribute(this,n),Ku.applyMatrix3(e),this.setXY(n,Ku.x,Ku.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=nl(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=nl(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=nl(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=nl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=nl(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array),u=qn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mv&&(e.usage=this.usage),e}}class IS extends Zi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class FS extends Zi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ra extends Zi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let $A=0;const mi=new dn,Mh=new si,Gs=new fe,ai=new Al,sl=new Al,En=new fe;class Ia extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=bl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(US(e)?FS:IS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,n,r){return mi.makeTranslation(e,n,r),this.applyMatrix4(mi),this}scale(e,n,r){return mi.makeScale(e,n,r),this.applyMatrix4(mi),this}lookAt(e){return Mh.lookAt(e),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ra(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ai.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];sl.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ai.min,sl.min),ai.expandByPoint(En),En.addVectors(ai.max,sl.max),ai.expandByPoint(En)):(ai.expandByPoint(sl.min),ai.expandByPoint(sl.max))}ai.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)En.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(En));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)En.fromBufferAttribute(d,h),p&&(Gs.fromBufferAttribute(e,h),En.add(Gs)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new fe,p[W]=new fe;const h=new fe,g=new fe,_=new fe,v=new Ct,S=new Ct,y=new Ct,b=new fe,M=new fe;function x(W,C,L){h.fromBufferAttribute(r,W),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),v.fromBufferAttribute(u,W),S.fromBufferAttribute(u,C),y.fromBufferAttribute(u,L),g.sub(h),_.sub(h),S.sub(v),y.sub(v);const H=1/(S.x*y.y-y.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(y.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-y.x).multiplyScalar(H),d[W].add(b),d[C].add(b),d[L].add(b),p[W].add(M),p[C].add(M),p[L].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,C=U.length;W<C;++W){const L=U[W],H=L.start,j=L.count;for(let Y=H,ae=H+j;Y<ae;Y+=3)x(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const R=new fe,P=new fe,N=new fe,B=new fe;function O(W){N.fromBufferAttribute(o,W),B.copy(N);const C=d[W];R.copy(C),R.sub(N.multiplyScalar(N.dot(C))).normalize(),P.crossVectors(B,C);const H=P.dot(p[W])<0?-1:1;c.setXYZW(W,R.x,R.y,R.z,H)}for(let W=0,C=U.length;W<C;++W){const L=U[W],H=L.start,j=L.count;for(let Y=H,ae=H+j;Y<ae;Y+=3)O(e.getX(Y+0)),O(e.getX(Y+1)),O(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new fe,u=new fe,c=new fe,d=new fe,p=new fe,h=new fe,g=new fe,_=new fe;if(e)for(let v=0,S=e.count;v<S;v+=3){const y=e.getX(v+0),b=e.getX(v+1),M=e.getX(v+2);o.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),c.fromBufferAttribute(n,M),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(r,y),p.fromBufferAttribute(r,b),h.fromBufferAttribute(r,M),d.add(g),p.add(g),h.add(g),r.setXYZ(y,d.x,d.y,d.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(M,h.x,h.y,h.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),g.subVectors(c,u),_.subVectors(o,u),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(p.length*g);let S=0,y=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*g;for(let x=0;x<g;x++)v[y++]=h[S++]}return new Zi(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ia,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,r);n.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const p=[],h=u[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],S=e(v,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const h=c[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const h=r[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],g=[];for(let _=0,v=h.length;_<v;_++){const S=h[_];g.push(S.toJSON(e.data))}g.length>0&&(o[p]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const u=e.morphAttributes;for(const h in u){const g=[],_=u[h];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iv=new dn,Br=new kA,Qu=new fm,Fv=new fe,$u=new fe,Ju=new fe,ec=new fe,yh=new fe,tc=new fe,Bv=new fe,nc=new fe;class Ki extends si{constructor(e=new Ia,n=new OS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){tc.set(0,0,0);for(let p=0,h=u.length;p<h;p++){const g=d[p],_=u[p];g!==0&&(yh.fromBufferAttribute(_,e),c?tc.addScaledVector(yh,g):tc.addScaledVector(yh.sub(n),g))}n.add(tc)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qu.copy(r.boundingSphere),Qu.applyMatrix4(u),Br.copy(e.ray).recast(e.near),!(Qu.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Qu,Fv)===null||Br.origin.distanceToSquared(Fv)>(e.far-e.near)**2))&&(Iv.copy(u).invert(),Br.copy(e.ray).applyMatrix4(Iv),!(r.boundingBox!==null&&Br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(c))for(let y=0,b=v.length;y<b;y++){const M=v[y],x=c[M.materialIndex],U=Math.max(M.start,S.start),R=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let P=U,N=R;P<N;P+=3){const B=d.getX(P),O=d.getX(P+1),W=d.getX(P+2);o=ic(this,x,e,r,h,g,_,B,O,W),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const y=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=y,x=b;M<x;M+=3){const U=d.getX(M),R=d.getX(M+1),P=d.getX(M+2);o=ic(this,c,e,r,h,g,_,U,R,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let y=0,b=v.length;y<b;y++){const M=v[y],x=c[M.materialIndex],U=Math.max(M.start,S.start),R=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let P=U,N=R;P<N;P+=3){const B=P,O=P+1,W=P+2;o=ic(this,x,e,r,h,g,_,B,O,W),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const y=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=y,x=b;M<x;M+=3){const U=M,R=M+1,P=M+2;o=ic(this,c,e,r,h,g,_,U,R,P),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function JA(a,e,n,r,o,u,c,d){let p;if(e.side===Zn?p=r.intersectTriangle(c,u,o,!0,d):p=r.intersectTriangle(o,u,c,e.side===_r,d),p===null)return null;nc.copy(d),nc.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo(nc);return h<n.near||h>n.far?null:{distance:h,point:nc.clone(),object:a}}function ic(a,e,n,r,o,u,c,d,p,h){a.getVertexPosition(d,$u),a.getVertexPosition(p,Ju),a.getVertexPosition(h,ec);const g=JA(a,e,n,r,$u,Ju,ec,Bv);if(g){const _=new fe;wi.getBarycoord(Bv,$u,Ju,ec,_),o&&(g.uv=wi.getInterpolatedAttribute(o,d,p,h,_,new Ct)),u&&(g.uv1=wi.getInterpolatedAttribute(u,d,p,h,_,new Ct)),c&&(g.normal=wi.getInterpolatedAttribute(c,d,p,h,_,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:h,normal:new fe,materialIndex:0};wi.getNormal($u,Ju,ec,v.normal),g.face=v,g.barycoord=_}return g}class Rl extends Ia{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],h=[],g=[],_=[];let v=0,S=0;y("z","y","x",-1,-1,r,n,e,c,u,0),y("z","y","x",1,-1,r,n,-e,c,u,1),y("x","z","y",1,1,e,r,n,o,c,2),y("x","z","y",1,-1,e,r,-n,o,c,3),y("x","y","z",1,-1,e,n,r,o,u,4),y("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new Ra(h,3)),this.setAttribute("normal",new Ra(g,3)),this.setAttribute("uv",new Ra(_,2));function y(b,M,x,U,R,P,N,B,O,W,C){const L=P/O,H=N/W,j=P/2,Y=N/2,ae=B/2,ee=O+1,z=W+1;let V=0,k=0;const de=new fe;for(let I=0;I<z;I++){const Z=I*H-Y;for(let re=0;re<ee;re++){const pe=re*L-j;de[b]=pe*U,de[M]=Z*R,de[x]=ae,h.push(de.x,de.y,de.z),de[b]=0,de[M]=0,de[x]=B>0?1:-1,g.push(de.x,de.y,de.z),_.push(re/O),_.push(1-I/W),V+=1}}for(let I=0;I<W;I++)for(let Z=0;Z<O;Z++){const re=v+Z+ee*I,pe=v+Z+ee*(I+1),Re=v+(Z+1)+ee*(I+1),He=v+(Z+1)+ee*I;p.push(re,pe,He),p.push(pe,Re,He),k+=6}d.addGroup(S,k,C),S+=k,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function eo(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function zn(a){const e={};for(let n=0;n<a.length;n++){const r=eo(a[n]);for(const o in r)e[o]=r[o]}return e}function eR(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function BS(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const tR={clone:eo,merge:zn};var nR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Pc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nR,this.fragmentShader=iR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=eR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class zS extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new fe,zv=new Ct,Hv=new Ct;class Ci extends zS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(th*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dp*2*Math.atan(Math.tan(th*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,zv,Hv),n.subVectors(Hv,zv)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(th*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/h,o*=c.width/p,r*=c.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,Xs=1;class aR extends si{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ci(ks,Xs,e,n);o.layers=this.layers,this.add(o);const u=new Ci(ks,Xs,e,n);u.layers=this.layers,this.add(u);const c=new Ci(ks,Xs,e,n);c.layers=this.layers,this.add(c);const d=new Ci(ks,Xs,e,n);d.layers=this.layers,this.add(d);const p=new Ci(ks,Xs,e,n);p.layers=this.layers,this.add(p);const h=new Ci(ks,Xs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,d,p]=n;for(const h of n)this.remove(h);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,u),e.setRenderTarget(r,1,o),e.render(n,c),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class HS extends Hn{constructor(e=[],n=jr,r,o,u,c,d,p,h,g){super(e,n,r,o,u,c,d,p,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VS extends Yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new HS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Rl(5,5,5),u=new Ni({name:"CubemapFromEquirect",uniforms:eo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:Ta});u.uniforms.tEquirect.value=n;const c=new Ki(o,u),d=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Fn),new aR(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}class ac extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rR={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ac,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ac,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ac,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const b of e.hand.values()){const M=n.getJointPose(b,r),x=this._getHandJoint(h,b);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,y=.005;h.inputState.pinching&&v>S+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ac;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class sR extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ua,this.environmentIntensity=1,this.environmentRotation=new Ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class oR extends Hn{constructor(e=null,n=1,r=1,o,u,c,d,p,h=Dn,g=Dn,_,v){super(null,c,d,p,h,g,o,u,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=new fe,lR=new fe,uR=new ft;class Gr{constructor(e=new fe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=bh.subVectors(r,n).cross(lR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(bh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||uR.getNormalMatrix(e),o=this.coplanarPoint(bh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new fm,cR=new Ct(.5,.5),rc=new fe;class GS{constructor(e=new Gr,n=new Gr,r=new Gr,o=new Gr,u=new Gr,c=new Gr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Wi,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],p=u[2],h=u[3],g=u[4],_=u[5],v=u[6],S=u[7],y=u[8],b=u[9],M=u[10],x=u[11],U=u[12],R=u[13],P=u[14],N=u[15];if(o[0].setComponents(h-c,S-g,x-y,N-U).normalize(),o[1].setComponents(h+c,S+g,x+y,N+U).normalize(),o[2].setComponents(h+d,S+_,x+b,N+R).normalize(),o[3].setComponents(h-d,S-_,x-b,N-R).normalize(),r)o[4].setComponents(p,v,M,P).normalize(),o[5].setComponents(h-p,S-v,x-M,N-P).normalize();else if(o[4].setComponents(h-p,S-v,x-M,N-P).normalize(),n===Wi)o[5].setComponents(h+p,S+v,x+M,N+P).normalize();else if(n===bc)o[5].setComponents(p,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){zr.center.set(0,0,0);const n=cR.distanceTo(e.center);return zr.radius=.7071067811865476+n,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(rc.x=o.normal.x>0?e.max.x:e.min.x,rc.y=o.normal.y>0?e.max.y:e.min.y,rc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(rc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _l extends Hn{constructor(e,n,r=ji,o,u,c,d=Dn,p=Dn,h,g=Da,_=1){if(g!==Da&&g!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,u,c,d,p,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class fR extends _l{constructor(e,n=ji,r=jr,o,u,c=Dn,d=Dn,p,h=Da){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,u,c,d,p,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Cl extends Ia{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(o),h=d+1,g=p+1,_=e/d,v=n/p,S=[],y=[],b=[],M=[];for(let x=0;x<g;x++){const U=x*v-c;for(let R=0;R<h;R++){const P=R*_-u;y.push(P,-U,0),b.push(0,0,1),M.push(R/d),M.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<d;U++){const R=U+h*x,P=U+h*(x+1),N=U+1+h*(x+1),B=U+1+h*x;S.push(R,P,B),S.push(P,N,B)}this.setIndex(S),this.setAttribute("position",new Ra(y,3)),this.setAttribute("normal",new Ra(b,3)),this.setAttribute("uv",new Ra(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.width,e.height,e.widthSegments,e.heightSegments)}}class dR extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hR extends Pc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pR extends Pc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dm extends zS{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,c=u+h*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class mR extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class gR{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Vv(a,e,n,r){const o=_R(r);switch(n){case CS:return a*e;case DS:return a*e/o.components*o.byteLength;case rm:return a*e/o.components*o.byteLength;case $s:return a*e*2/o.components*o.byteLength;case sm:return a*e*2/o.components*o.byteLength;case wS:return a*e*3/o.components*o.byteLength;case Di:return a*e*4/o.components*o.byteLength;case om:return a*e*4/o.components*o.byteLength;case hc:case pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Jh:case tp:return Math.max(a,16)*Math.max(e,8)/4;case $h:case ep:return Math.max(a,8)*Math.max(e,8)/2;case np:case ip:case rp:case sp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ap:case op:case lp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case fp:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case dp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case hp:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case pp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case vp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case yp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Ep:case bp:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Ap:case Rp:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Cp:case wp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function _R(a){switch(a){case gi:case bS:return{byteLength:1,components:1};case pl:case TS:case wa:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case ji:case nm:case Xi:return{byteLength:4,components:1};case AS:case RS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tm}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function XS(){let a=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function vR(a){const e=new WeakMap;function n(d,p){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(p,v),a.bufferData(p,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,h){const g=p.array,_=p.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((S,y)=>S.start-y.start);let v=0;for(let S=1;S<_.length;S++){const y=_[v],b=_[S];b.start<=y.start+y.count+1?y.count=Math.max(y.count,b.start+b.count-y.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,y=_.length;S<y;S++){const b=_[S];a.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(a.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,p),h.version=d.version}}return{get:o,remove:u,update:c}}var xR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ER=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,AR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,CR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,DR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,NR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,OR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,GR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,kR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jR="gl_FragColor = linearToOutputTexel( gl_FragColor );",KR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,QR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$R=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_C=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,CC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,FC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$C=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Aw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ww=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ww=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:xR,alphahash_pars_fragment:SR,alphamap_fragment:MR,alphamap_pars_fragment:yR,alphatest_fragment:ER,alphatest_pars_fragment:bR,aomap_fragment:TR,aomap_pars_fragment:AR,batching_pars_vertex:RR,batching_vertex:CR,begin_vertex:wR,beginnormal_vertex:DR,bsdfs:UR,iridescence_fragment:LR,bumpmap_pars_fragment:NR,clipping_planes_fragment:PR,clipping_planes_pars_fragment:OR,clipping_planes_pars_vertex:IR,clipping_planes_vertex:FR,color_fragment:BR,color_pars_fragment:zR,color_pars_vertex:HR,color_vertex:VR,common:GR,cube_uv_reflection_fragment:kR,defaultnormal_vertex:XR,displacementmap_pars_vertex:WR,displacementmap_vertex:qR,emissivemap_fragment:YR,emissivemap_pars_fragment:ZR,colorspace_fragment:jR,colorspace_pars_fragment:KR,envmap_fragment:QR,envmap_common_pars_fragment:$R,envmap_pars_fragment:JR,envmap_pars_vertex:eC,envmap_physical_pars_fragment:fC,envmap_vertex:tC,fog_vertex:nC,fog_pars_vertex:iC,fog_fragment:aC,fog_pars_fragment:rC,gradientmap_pars_fragment:sC,lightmap_pars_fragment:oC,lights_lambert_fragment:lC,lights_lambert_pars_fragment:uC,lights_pars_begin:cC,lights_toon_fragment:dC,lights_toon_pars_fragment:hC,lights_phong_fragment:pC,lights_phong_pars_fragment:mC,lights_physical_fragment:gC,lights_physical_pars_fragment:_C,lights_fragment_begin:vC,lights_fragment_maps:xC,lights_fragment_end:SC,logdepthbuf_fragment:MC,logdepthbuf_pars_fragment:yC,logdepthbuf_pars_vertex:EC,logdepthbuf_vertex:bC,map_fragment:TC,map_pars_fragment:AC,map_particle_fragment:RC,map_particle_pars_fragment:CC,metalnessmap_fragment:wC,metalnessmap_pars_fragment:DC,morphinstance_vertex:UC,morphcolor_vertex:LC,morphnormal_vertex:NC,morphtarget_pars_vertex:PC,morphtarget_vertex:OC,normal_fragment_begin:IC,normal_fragment_maps:FC,normal_pars_fragment:BC,normal_pars_vertex:zC,normal_vertex:HC,normalmap_pars_fragment:VC,clearcoat_normal_fragment_begin:GC,clearcoat_normal_fragment_maps:kC,clearcoat_pars_fragment:XC,iridescence_pars_fragment:WC,opaque_fragment:qC,packing:YC,premultiplied_alpha_fragment:ZC,project_vertex:jC,dithering_fragment:KC,dithering_pars_fragment:QC,roughnessmap_fragment:$C,roughnessmap_pars_fragment:JC,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:tw,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:aw,skinning_pars_vertex:rw,skinning_vertex:sw,skinnormal_vertex:ow,specularmap_fragment:lw,specularmap_pars_fragment:uw,tonemapping_fragment:cw,tonemapping_pars_fragment:fw,transmission_fragment:dw,transmission_pars_fragment:hw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:_w,background_vert:vw,background_frag:xw,backgroundCube_vert:Sw,backgroundCube_frag:Mw,cube_vert:yw,cube_frag:Ew,depth_vert:bw,depth_frag:Tw,distance_vert:Aw,distance_frag:Rw,equirect_vert:Cw,equirect_frag:ww,linedashed_vert:Dw,linedashed_frag:Uw,meshbasic_vert:Lw,meshbasic_frag:Nw,meshlambert_vert:Pw,meshlambert_frag:Ow,meshmatcap_vert:Iw,meshmatcap_frag:Fw,meshnormal_vert:Bw,meshnormal_frag:zw,meshphong_vert:Hw,meshphong_frag:Vw,meshphysical_vert:Gw,meshphysical_frag:kw,meshtoon_vert:Xw,meshtoon_frag:Ww,points_vert:qw,points_frag:Yw,shadow_vert:Zw,shadow_frag:jw,sprite_vert:Kw,sprite_frag:Qw},Fe={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},ki={basic:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Xt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Fe.lights,Fe.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};ki.physical={uniforms:zn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const sc={r:0,b:0,g:0},Hr=new Ua,$w=new dn;function Jw(a,e,n,r,o,u,c){const d=new Xt(0);let p=u===!0?0:1,h,g,_=null,v=0,S=null;function y(R){let P=R.isScene===!0?R.background:null;return P&&P.isTexture&&(P=(R.backgroundBlurriness>0?n:e).get(P)),P}function b(R){let P=!1;const N=y(R);N===null?x(d,p):N&&N.isColor&&(x(N,1),P=!0);const B=a.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,c):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(a.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(R,P){const N=y(P);N&&(N.isCubeTexture||N.mapping===Nc)?(g===void 0&&(g=new Ki(new Rl(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:eo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,O,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Hr.copy(P.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($w.makeRotationFromEuler(Hr)),g.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ht,(_!==N||v!==N.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,_=N,v=N.version,S=a.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new Ki(new Cl(2,2),new Ni({name:"BackgroundMaterial",uniforms:eo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(N.colorSpace)!==Ht,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||S!==a.toneMapping)&&(h.material.needsUpdate=!0,_=N,v=N.version,S=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,P){R.getRGB(sc,BS(a)),r.buffers.color.setClear(sc.r,sc.g,sc.b,P,c)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,P=1){d.set(R),p=P,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,x(d,p)},render:b,addToRenderList:M,dispose:U}}function e3(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let u=o,c=!1;function d(L,H,j,Y,ae){let ee=!1;const z=_(Y,j,H);u!==z&&(u=z,h(u.object)),ee=S(L,Y,j,ae),ee&&y(L,Y,j,ae),ae!==null&&e.update(ae,a.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,P(L,H,j,Y),ae!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return a.createVertexArray()}function h(L){return a.bindVertexArray(L)}function g(L){return a.deleteVertexArray(L)}function _(L,H,j){const Y=j.wireframe===!0;let ae=r[L.id];ae===void 0&&(ae={},r[L.id]=ae);let ee=ae[H.id];ee===void 0&&(ee={},ae[H.id]=ee);let z=ee[Y];return z===void 0&&(z=v(p()),ee[Y]=z),z}function v(L){const H=[],j=[],Y=[];for(let ae=0;ae<n;ae++)H[ae]=0,j[ae]=0,Y[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:Y,object:L,attributes:{},index:null}}function S(L,H,j,Y){const ae=u.attributes,ee=H.attributes;let z=0;const V=j.getAttributes();for(const k in V)if(V[k].location>=0){const I=ae[k];let Z=ee[k];if(Z===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),I===void 0||I.attribute!==Z||Z&&I.data!==Z.data)return!0;z++}return u.attributesNum!==z||u.index!==Y}function y(L,H,j,Y){const ae={},ee=H.attributes;let z=0;const V=j.getAttributes();for(const k in V)if(V[k].location>=0){let I=ee[k];I===void 0&&(k==="instanceMatrix"&&L.instanceMatrix&&(I=L.instanceMatrix),k==="instanceColor"&&L.instanceColor&&(I=L.instanceColor));const Z={};Z.attribute=I,I&&I.data&&(Z.data=I.data),ae[k]=Z,z++}u.attributes=ae,u.attributesNum=z,u.index=Y}function b(){const L=u.newAttributes;for(let H=0,j=L.length;H<j;H++)L[H]=0}function M(L){x(L,0)}function x(L,H){const j=u.newAttributes,Y=u.enabledAttributes,ae=u.attributeDivisors;j[L]=1,Y[L]===0&&(a.enableVertexAttribArray(L),Y[L]=1),ae[L]!==H&&(a.vertexAttribDivisor(L,H),ae[L]=H)}function U(){const L=u.newAttributes,H=u.enabledAttributes;for(let j=0,Y=H.length;j<Y;j++)H[j]!==L[j]&&(a.disableVertexAttribArray(j),H[j]=0)}function R(L,H,j,Y,ae,ee,z){z===!0?a.vertexAttribIPointer(L,H,j,ae,ee):a.vertexAttribPointer(L,H,j,Y,ae,ee)}function P(L,H,j,Y){b();const ae=Y.attributes,ee=j.getAttributes(),z=H.defaultAttributeValues;for(const V in ee){const k=ee[V];if(k.location>=0){let de=ae[V];if(de===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),de!==void 0){const I=de.normalized,Z=de.itemSize,re=e.get(de);if(re===void 0)continue;const pe=re.buffer,Re=re.type,He=re.bytesPerElement,te=Re===a.INT||Re===a.UNSIGNED_INT||de.gpuType===nm;if(de.isInterleavedBufferAttribute){const ve=de.data,Te=ve.stride,Je=de.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<k.locationSize;Ge++)x(k.location+Ge,ve.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<k.locationSize;Ge++)M(k.location+Ge);a.bindBuffer(a.ARRAY_BUFFER,pe);for(let Ge=0;Ge<k.locationSize;Ge++)R(k.location+Ge,Z/k.locationSize,Re,I,Te*He,(Je+Z/k.locationSize*Ge)*He,te)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve,de.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<k.locationSize;ve++)M(k.location+ve);a.bindBuffer(a.ARRAY_BUFFER,pe);for(let ve=0;ve<k.locationSize;ve++)R(k.location+ve,Z/k.locationSize,Re,I,Z*He,Z/k.locationSize*ve*He,te)}}else if(z!==void 0){const I=z[V];if(I!==void 0)switch(I.length){case 2:a.vertexAttrib2fv(k.location,I);break;case 3:a.vertexAttrib3fv(k.location,I);break;case 4:a.vertexAttrib4fv(k.location,I);break;default:a.vertexAttrib1fv(k.location,I)}}}}U()}function N(){W();for(const L in r){const H=r[L];for(const j in H){const Y=H[j];for(const ae in Y)g(Y[ae].object),delete Y[ae];delete H[j]}delete r[L]}}function B(L){if(r[L.id]===void 0)return;const H=r[L.id];for(const j in H){const Y=H[j];for(const ae in Y)g(Y[ae].object),delete Y[ae];delete H[j]}delete r[L.id]}function O(L){for(const H in r){const j=r[H];if(j[L.id]===void 0)continue;const Y=j[L.id];for(const ae in Y)g(Y[ae].object),delete Y[ae];delete j[L.id]}}function W(){C(),c=!0,u!==o&&(u=o,h(u.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:C,dispose:N,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:M,disableUnusedAttributes:U}}function t3(a,e,n){let r;function o(h){r=h}function u(h,g){a.drawArrays(r,h,g),n.update(g,r,1)}function c(h,g,_){_!==0&&(a.drawArraysInstanced(r,h,g,_),n.update(g,r,_))}function d(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let S=0;for(let y=0;y<_;y++)S+=g[y];n.update(S,r,1)}function p(h,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<h.length;y++)c(h[y],g[y],v[y]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,g,0,v,0,_);let y=0;for(let b=0;b<_;b++)y+=g[b]*v[b];n.update(y,r,1)}}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function n3(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Di&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const W=O===wa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==gi&&r.convert(O)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!W)}function p(O){if(O==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=p(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),y=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),M=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),P=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=a.getParameter(a.MAX_SAMPLES),B=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:y,maxTextureSize:b,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:P,maxSamples:N,samples:B}}function i3(a){const e=this;let n=null,r=0,o=!1,u=!1;const c=new Gr,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const y=_.clippingPlanes,b=_.clipIntersection,M=_.clipShadows,x=a.get(_);if(!o||y===null||y.length===0||u&&!M)u?g(null):h();else{const U=u?0:r,R=U*4;let P=x.clippingState||null;p.value=P,P=g(y,v,R,S);for(let N=0;N!==R;++N)P[N]=n[N];x.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,y){const b=_!==null?_.length:0;let M=null;if(b!==0){if(M=p.value,y!==!0||M===null){const x=S+b*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(M===null||M.length<x)&&(M=new Float32Array(x));for(let R=0,P=S;R!==b;++R,P+=4)c.copy(_[R]).applyMatrix4(U,d),c.normal.toArray(M,P),M[P+3]=c.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function a3(a){let e=new WeakMap;function n(c,d){return d===Zh?c.mapping=jr:d===jh&&(c.mapping=Qs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===Zh||d===jh)if(e.has(c)){const p=e.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const h=new VS(p.height);return h.fromEquirectangularTexture(a,c),e.set(c,h),c.addEventListener("dispose",o),n(h.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const gr=4,Gv=[.125,.215,.35,.446,.526,.582],qr=20,r3=256,ol=new dm,kv=new Xt;let Th=null,Ah=0,Rh=0,Ch=!1;const s3=new fe;class Xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:d=s3}=u;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jr||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:wa,format:Di,colorSpace:Js,depthBuffer:!1},o=Wv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wv(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=o3(u)),this._blurMaterial=u3(u,e,n),this._ggxMaterial=l3(u,e,n)}return o}_compileMaterial(e){const n=new Ki(new Ia,e);this._renderer.compile(n,ol)}_sceneToCubeUV(e,n,r,o,u){const p=new Ci(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(kv),_.toneMapping=qi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ki(new Rl,new OS({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,M=b.material;let x=!1;const U=e.background;U?U.isColor&&(M.color.copy(U),e.background=null,x=!0):(M.color.copy(kv),x=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(p.up.set(0,h[R],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[R],u.y,u.z)):P===1?(p.up.set(0,0,h[R]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[R],u.z)):(p.up.set(0,h[R],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[R]));const N=this._cubeSize;Ws(o,P*N,R>2?N:0,N,N),_.setRenderTarget(o),x&&_.render(b,p),_.render(e,p)}_.toneMapping=S,_.autoClear=v,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===jr||e.mapping===Qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Ws(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,ol)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,S=_*v,{_lodMax:y}=this,b=this._sizeLods[r],M=3*b*(r>y-gr?r-y+gr:0),x=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=y-n,Ws(u,M,x,3*b,2*b),o.setRenderTarget(u),o.render(d,ol),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=y-r,Ws(e,M,x,3*b,2*b),o.setRenderTarget(e),o.render(d,ol)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,d){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,S=this._sizeLods[r]-1,y=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*qr-1),b=u/y,M=isFinite(u)?1+Math.floor(g*b):qr;M>qr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${qr}`);const x=[];let U=0;for(let O=0;O<qr;++O){const W=O/b,C=Math.exp(-W*W/2);x.push(C),O===0?U+=C:O<M&&(U+=2*C)}for(let O=0;O<x.length;O++)x[O]=x[O]/U;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:R}=this;v.dTheta.value=y,v.mipInt.value=R-r;const P=this._sizeLods[o],N=3*P*(o>R-gr?o-R+gr:0),B=4*(this._cubeSize-P);Ws(n,N,B,3*P,2*P),p.setRenderTarget(n),p.render(_,ol)}}function o3(a){const e=[],n=[],r=[];let o=a;const u=a-gr+1+Gv.length;for(let c=0;c<u;c++){const d=Math.pow(2,o);e.push(d);let p=1/d;c>a-gr?p=Gv[c-a+gr-1]:c===0&&(p=0),n.push(p);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,y=6,b=3,M=2,x=1,U=new Float32Array(b*y*S),R=new Float32Array(M*y*S),P=new Float32Array(x*y*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,W=B>2?0:-1,C=[O,W,0,O+2/3,W,0,O+2/3,W+1,0,O,W,0,O+2/3,W+1,0,O,W+1,0];U.set(C,b*y*B),R.set(v,M*y*B);const L=[B,B,B,B,B,B];P.set(L,x*y*B)}const N=new Ia;N.setAttribute("position",new Zi(U,b)),N.setAttribute("uv",new Zi(R,M)),N.setAttribute("faceIndex",new Zi(P,x)),r.push(new Ki(N,null)),o>gr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Wv(a,e,n){const r=new Yi(a,e,n);return r.texture.mapping=Nc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ws(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function l3(a,e,n){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function u3(a,e,n){const r=new Float32Array(qr),o=new fe(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function qv(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Yv(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ta,depthTest:!1,depthWrite:!1})}function Oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c3(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,h=p===Zh||p===jh,g=p===jr||p===Qs;if(h||g){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new Xv(a)),_=h?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return h&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new Xv(a)),_=h?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d){let p=0;const h=6;for(let g=0;g<h;g++)d[g]!==void 0&&p++;return p===h}function u(d){const p=d.target;p.removeEventListener("dispose",u);const h=e.get(p);h!==void 0&&(e.delete(p),h.dispose())}function c(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:c}}function f3(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&gl("WebGLRenderer: "+r+" extension not supported."),o}}}function d3(a,e,n,r){const o={},u=new WeakMap;function c(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);v.removeEventListener("dispose",c),delete o[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,n.memory.geometries++),v}function p(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function h(_){const v=[],S=_.index,y=_.attributes.position;let b=0;if(S!==null){const U=S.array;b=S.version;for(let R=0,P=U.length;R<P;R+=3){const N=U[R+0],B=U[R+1],O=U[R+2];v.push(N,B,B,O,O,N)}}else if(y!==void 0){const U=y.array;b=y.version;for(let R=0,P=U.length/3-1;R<P;R+=3){const N=R+0,B=R+1,O=R+2;v.push(N,B,B,O,O,N)}}else return;const M=new(US(v)?FS:IS)(v,1);M.version=b;const x=u.get(_);x&&e.remove(x),u.set(_,M)}function g(_){const v=u.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&h(_)}else h(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:g}}function h3(a,e,n){let r;function o(v){r=v}let u,c;function d(v){u=v.type,c=v.bytesPerElement}function p(v,S){a.drawElements(r,S,u,v*c),n.update(S,r,1)}function h(v,S,y){y!==0&&(a.drawElementsInstanced(r,S,u,v*c,y),n.update(S,r,y))}function g(v,S,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,y);let M=0;for(let x=0;x<y;x++)M+=S[x];n.update(M,r,1)}function _(v,S,y,b){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)h(v[x]/c,S[x],b[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,b,0,y);let x=0;for(let U=0;U<y;U++)x+=S[U]*b[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function p3(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case a.TRIANGLES:n.triangles+=d*(u/3);break;case a.LINES:n.lines+=d*(u/2);break;case a.LINE_STRIP:n.lines+=d*(u-1);break;case a.LINE_LOOP:n.lines+=d*u;break;case a.POINTS:n.points+=d*u;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function m3(a,e,n){const r=new WeakMap,o=new on;function u(c,d,p){const h=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let L=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",L)};var S=L;v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let P=0;y===!0&&(P=1),b===!0&&(P=2),M===!0&&(P=3);let N=d.attributes.position.count*P,B=1;N>e.maxTextureSize&&(B=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const O=new Float32Array(N*B*4*_),W=new LS(O,N,B,_);W.type=Xi,W.needsUpdate=!0;const C=P*4;for(let H=0;H<_;H++){const j=x[H],Y=U[H],ae=R[H],ee=N*B*4*H;for(let z=0;z<j.count;z++){const V=z*C;y===!0&&(o.fromBufferAttribute(j,z),O[ee+V+0]=o.x,O[ee+V+1]=o.y,O[ee+V+2]=o.z,O[ee+V+3]=0),b===!0&&(o.fromBufferAttribute(Y,z),O[ee+V+4]=o.x,O[ee+V+5]=o.y,O[ee+V+6]=o.z,O[ee+V+7]=0),M===!0&&(o.fromBufferAttribute(ae,z),O[ee+V+8]=o.x,O[ee+V+9]=o.y,O[ee+V+10]=o.z,O[ee+V+11]=ae.itemSize===4?o.w:1)}}v={count:_,texture:W,size:new Ct(N,B)},r.set(d,v),d.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(a,"morphTexture",c.morphTexture,n);else{let y=0;for(let M=0;M<h.length;M++)y+=h[M];const b=d.morphTargetsRelative?1:1-y;p.getUniforms().setValue(a,"morphTargetBaseInfluence",b),p.getUniforms().setValue(a,"morphTargetInfluences",h)}p.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:u}}function g3(a,e,n,r){let o=new WeakMap;function u(p){const h=r.render.frame,g=p.geometry,_=e.get(p,g);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==h&&(n.update(p.instanceMatrix,a.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,a.ARRAY_BUFFER),o.set(p,h))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return _}function c(){o=new WeakMap}function d(p){const h=p.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:u,dispose:c}}const _3={[gS]:"LINEAR_TONE_MAPPING",[_S]:"REINHARD_TONE_MAPPING",[vS]:"CINEON_TONE_MAPPING",[xS]:"ACES_FILMIC_TONE_MAPPING",[MS]:"AGX_TONE_MAPPING",[yS]:"NEUTRAL_TONE_MAPPING",[SS]:"CUSTOM_TONE_MAPPING"};function v3(a,e,n,r,o){const u=new Yi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),c=new Yi(e,n,{type:wa,depthBuffer:!1,stencilBuffer:!1}),d=new Ia;d.setAttribute("position",new Ra([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ra([0,2,0,0,2,0],2));const p=new dR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ki(d,p),g=new dm(-1,1,1,-1,0,1);let _=null,v=null,S=!1,y,b=null,M=[],x=!1;this.setSize=function(U,R){u.setSize(U,R),c.setSize(U,R);for(let P=0;P<M.length;P++){const N=M[P];N.setSize&&N.setSize(U,R)}},this.setEffects=function(U){M=U,x=M.length>0&&M[0].isRenderPass===!0;const R=u.width,P=u.height;for(let N=0;N<M.length;N++){const B=M[N];B.setSize&&B.setSize(R,P)}},this.begin=function(U,R){if(S||U.toneMapping===qi&&M.length===0)return!1;if(b=R,R!==null){const P=R.width,N=R.height;(u.width!==P||u.height!==N)&&this.setSize(P,N)}return x===!1&&U.setRenderTarget(u),y=U.toneMapping,U.toneMapping=qi,!0},this.hasRenderPass=function(){return x},this.end=function(U,R){U.toneMapping=y,S=!0;let P=u,N=c;for(let B=0;B<M.length;B++){const O=M[B];if(O.enabled!==!1&&(O.render(U,N,P,R),O.needsSwap!==!1)){const W=P;P=N,N=W}}if(_!==U.outputColorSpace||v!==U.toneMapping){_=U.outputColorSpace,v=U.toneMapping,p.defines={},Rt.getTransfer(_)===Ht&&(p.defines.SRGB_TRANSFER="");const B=_3[v];B&&(p.defines[B]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(b),U.render(h,g),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),c.dispose(),d.dispose(),p.dispose()}}const WS=new Hn,Up=new _l(1,1),qS=new LS,YS=new VA,ZS=new HS,Zv=[],jv=[],Kv=new Float32Array(16),Qv=new Float32Array(9),$v=new Float32Array(4);function io(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=Zv[o];if(u===void 0&&(u=new Float32Array(o),Zv[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,a[c].toArray(u,d)}return u}function mn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function gn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Ic(a,e){let n=jv[e];n===void 0&&(n=new Int32Array(e),jv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function x3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function S3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2fv(this.addr,e),gn(n,e)}}function M3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;a.uniform3fv(this.addr,e),gn(n,e)}}function y3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4fv(this.addr,e),gn(n,e)}}function E3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;$v.set(r),a.uniformMatrix2fv(this.addr,!1,$v),gn(n,r)}}function b3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Qv.set(r),a.uniformMatrix3fv(this.addr,!1,Qv),gn(n,r)}}function T3(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Kv.set(r),a.uniformMatrix4fv(this.addr,!1,Kv),gn(n,r)}}function A3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function R3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2iv(this.addr,e),gn(n,e)}}function C3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3iv(this.addr,e),gn(n,e)}}function w3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4iv(this.addr,e),gn(n,e)}}function D3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function U3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2uiv(this.addr,e),gn(n,e)}}function L3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3uiv(this.addr,e),gn(n,e)}}function N3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4uiv(this.addr,e),gn(n,e)}}function P3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(Up.compareFunction=n.isReversedDepthBuffer()?um:lm,u=Up):u=WS,n.setTexture2D(e||u,o)}function O3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||YS,o)}function I3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||ZS,o)}function F3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||qS,o)}function B3(a){switch(a){case 5126:return x3;case 35664:return S3;case 35665:return M3;case 35666:return y3;case 35674:return E3;case 35675:return b3;case 35676:return T3;case 5124:case 35670:return A3;case 35667:case 35671:return R3;case 35668:case 35672:return C3;case 35669:case 35673:return w3;case 5125:return D3;case 36294:return U3;case 36295:return L3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return P3;case 35679:case 36299:case 36307:return O3;case 35680:case 36300:case 36308:case 36293:return I3;case 36289:case 36303:case 36311:case 36292:return F3}}function z3(a,e){a.uniform1fv(this.addr,e)}function H3(a,e){const n=io(e,this.size,2);a.uniform2fv(this.addr,n)}function V3(a,e){const n=io(e,this.size,3);a.uniform3fv(this.addr,n)}function G3(a,e){const n=io(e,this.size,4);a.uniform4fv(this.addr,n)}function k3(a,e){const n=io(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function X3(a,e){const n=io(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function W3(a,e){const n=io(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function q3(a,e){a.uniform1iv(this.addr,e)}function Y3(a,e){a.uniform2iv(this.addr,e)}function Z3(a,e){a.uniform3iv(this.addr,e)}function j3(a,e){a.uniform4iv(this.addr,e)}function K3(a,e){a.uniform1uiv(this.addr,e)}function Q3(a,e){a.uniform2uiv(this.addr,e)}function $3(a,e){a.uniform3uiv(this.addr,e)}function J3(a,e){a.uniform4uiv(this.addr,e)}function e2(a,e,n){const r=this.cache,o=e.length,u=Ic(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));let c;this.type===a.SAMPLER_2D_SHADOW?c=Up:c=WS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,u[d])}function t2(a,e,n){const r=this.cache,o=e.length,u=Ic(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||YS,u[c])}function n2(a,e,n){const r=this.cache,o=e.length,u=Ic(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||ZS,u[c])}function i2(a,e,n){const r=this.cache,o=e.length,u=Ic(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||qS,u[c])}function a2(a){switch(a){case 5126:return z3;case 35664:return H3;case 35665:return V3;case 35666:return G3;case 35674:return k3;case 35675:return X3;case 35676:return W3;case 5124:case 35670:return q3;case 35667:case 35671:return Y3;case 35668:case 35672:return Z3;case 35669:case 35673:return j3;case 5125:return K3;case 36294:return Q3;case 36295:return $3;case 36296:return J3;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}class r2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=B3(n.type)}}class s2{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=a2(n.type)}}class o2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const wh=/(\w+)(\])?(\[|\.)?/g;function Jv(a,e){a.seq.push(e),a.map[e.id]=e}function l2(a,e,n){const r=a.name,o=r.length;for(wh.lastIndex=0;;){const u=wh.exec(r),c=wh.lastIndex;let d=u[1];const p=u[2]==="]",h=u[3];if(p&&(d=d|0),h===void 0||h==="["&&c+2===o){Jv(n,h===void 0?new r2(d,a,e):new s2(d,a,e));break}else{let _=n.map[d];_===void 0&&(_=new o2(d),Jv(n,_)),n=_}}}class _c{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),p=e.getUniformLocation(n,d.name);l2(d,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function ex(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const u2=37297;let c2=0;function f2(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const tx=new ft;function d2(a){Rt._getMatrix(tx,Rt.workingColorSpace,a);const e=`mat3( ${tx.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(a)){case Ec:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function nx(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+f2(a.getShaderSource(e),d)}else return u}function h2(a,e){const n=d2(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const p2={[gS]:"Linear",[_S]:"Reinhard",[vS]:"Cineon",[xS]:"ACESFilmic",[MS]:"AgX",[yS]:"Neutral",[SS]:"Custom"};function m2(a,e){const n=p2[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oc=new fe;function g2(){Rt.getLuminanceCoefficients(oc);const a=oc.x.toFixed(4),e=oc.y.toFixed(4),n=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function v2(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function x2(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),c=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:a.getAttribLocation(e,c),locationSize:d}}return n}function cl(a){return a!==""}function ix(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(a){return a.replace(S2,y2)}const M2=new Map;function y2(a,e){let n=dt[e];if(n===void 0){const r=M2.get(e);if(r!==void 0)n=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lp(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(a){return a.replace(E2,b2)}function b2(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function sx(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const T2={[dc]:"SHADOWMAP_TYPE_PCF",[ul]:"SHADOWMAP_TYPE_VSM"};function A2(a){return T2[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const R2={[jr]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function C2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":R2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const w2={[Qs]:"ENVMAP_MODE_REFRACTION"};function D2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":w2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const U2={[mS]:"ENVMAP_BLENDING_MULTIPLY",[MA]:"ENVMAP_BLENDING_MIX",[yA]:"ENVMAP_BLENDING_ADD"};function L2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":U2[a.combine]||"ENVMAP_BLENDING_NONE"}function N2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function P2(a,e,n,r){const o=a.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=A2(n),h=C2(n),g=D2(n),_=L2(n),v=N2(n),S=_2(n),y=v2(u),b=o.createProgram();let M,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(M=[sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[sx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?dt.tonemapping_pars_fragment:"",n.toneMapping!==qi?m2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,h2("linearToOutputTexel",n.outputColorSpace),g2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(cl).join(`
`)),c=Lp(c),c=ix(c,n),c=ax(c,n),d=Lp(d),d=ix(d,n),d=ax(d,n),c=rx(c),d=rx(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===yv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=U+M+c,P=U+x+d,N=ex(o,o.VERTEX_SHADER,R),B=ex(o,o.FRAGMENT_SHADER,P);o.attachShader(b,N),o.attachShader(b,B),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function O(H){if(a.debug.checkShaderErrors){const j=o.getProgramInfoLog(b)||"",Y=o.getShaderInfoLog(N)||"",ae=o.getShaderInfoLog(B)||"",ee=j.trim(),z=Y.trim(),V=ae.trim();let k=!0,de=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(k=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,N,B);else{const I=nx(o,N,"vertex"),Z=nx(o,B,"fragment");Lt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+I+`
`+Z)}else ee!==""?st("WebGLProgram: Program Info Log:",ee):(z===""||V==="")&&(de=!1);de&&(H.diagnostics={runnable:k,programLog:ee,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:x}})}o.deleteShader(N),o.deleteShader(B),W=new _c(o,b),C=x2(o,b)}let W;this.getUniforms=function(){return W===void 0&&O(this),W};let C;this.getAttributes=function(){return C===void 0&&O(this),C};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(b,u2)),L},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=B,this}let O2=0;class I2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new F2(e),n.set(e,r)),r}}class F2{constructor(e){this.id=O2++,this.code=e,this.usedTimes=0}}function B2(a,e,n,r,o,u,c){const d=new NS,p=new I2,h=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return h.add(C),C===0?"uv":`uv${C}`}function M(C,L,H,j,Y){const ae=j.fog,ee=Y.geometry,z=C.isMeshStandardMaterial?j.environment:null,V=(C.isMeshStandardMaterial?n:e).get(C.envMap||z),k=V&&V.mapping===Nc?V.image.height:null,de=y[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const I=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Z=I!==void 0?I.length:0;let re=0;ee.morphAttributes.position!==void 0&&(re=1),ee.morphAttributes.normal!==void 0&&(re=2),ee.morphAttributes.color!==void 0&&(re=3);let pe,Re,He,te;if(de){const wt=ki[de];pe=wt.vertexShader,Re=wt.fragmentShader}else pe=C.vertexShader,Re=C.fragmentShader,p.update(C),He=p.getVertexShaderID(C),te=p.getFragmentShaderID(C);const ve=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),Je=Y.isInstancedMesh===!0,Ge=Y.isBatchedMesh===!0,ht=!!C.map,jt=!!C.matcap,pt=!!V,Mt=!!C.aoMap,yt=!!C.lightMap,rt=!!C.bumpMap,At=!!C.normalMap,X=!!C.displacementMap,Yt=!!C.emissiveMap,Et=!!C.metalnessMap,Ee=!!C.roughnessMap,we=C.anisotropy>0,F=C.clearcoat>0,T=C.dispersion>0,K=C.iridescence>0,me=C.sheen>0,ge=C.transmission>0,he=we&&!!C.anisotropyMap,Oe=F&&!!C.clearcoatMap,Ae=F&&!!C.clearcoatNormalMap,Xe=F&&!!C.clearcoatRoughnessMap,Ke=K&&!!C.iridescenceMap,ye=K&&!!C.iridescenceThicknessMap,De=me&&!!C.sheenColorMap,Ve=me&&!!C.sheenRoughnessMap,qe=!!C.specularMap,Ue=!!C.specularColorMap,lt=!!C.specularIntensityMap,Q=ge&&!!C.transmissionMap,Ie=ge&&!!C.thicknessMap,Ce=!!C.gradientMap,Be=!!C.alphaMap,be=C.alphaTest>0,Me=!!C.alphaHash,Le=!!C.extensions;let it=qi;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(it=a.toneMapping);const Ot={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:pe,fragmentShader:Re,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:te,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&Y._colorsTexture!==null,instancing:Je,instancingColor:Je&&Y.instanceColor!==null,instancingMorph:Je&&Y.morphTexture!==null,outputColorSpace:ve===null?a.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Js,alphaToCoverage:!!C.alphaToCoverage,map:ht,matcap:jt,envMap:pt,envMapMode:pt&&V.mapping,envMapCubeUVHeight:k,aoMap:Mt,lightMap:yt,bumpMap:rt,normalMap:At,displacementMap:X,emissiveMap:Yt,normalMapObjectSpace:At&&C.normalMapType===AA,normalMapTangentSpace:At&&C.normalMapType===TA,metalnessMap:Et,roughnessMap:Ee,anisotropy:we,anisotropyMap:he,clearcoat:F,clearcoatMap:Oe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Xe,dispersion:T,iridescence:K,iridescenceMap:Ke,iridescenceThicknessMap:ye,sheen:me,sheenColorMap:De,sheenRoughnessMap:Ve,specularMap:qe,specularColorMap:Ue,specularIntensityMap:lt,transmission:ge,transmissionMap:Q,thicknessMap:Ie,gradientMap:Ce,opaque:C.transparent===!1&&C.blending===qs&&C.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:Me,combine:C.combine,mapUv:ht&&b(C.map.channel),aoMapUv:Mt&&b(C.aoMap.channel),lightMapUv:yt&&b(C.lightMap.channel),bumpMapUv:rt&&b(C.bumpMap.channel),normalMapUv:At&&b(C.normalMap.channel),displacementMapUv:X&&b(C.displacementMap.channel),emissiveMapUv:Yt&&b(C.emissiveMap.channel),metalnessMapUv:Et&&b(C.metalnessMap.channel),roughnessMapUv:Ee&&b(C.roughnessMap.channel),anisotropyMapUv:he&&b(C.anisotropyMap.channel),clearcoatMapUv:Oe&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:De&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&b(C.sheenRoughnessMap.channel),specularMapUv:qe&&b(C.specularMap.channel),specularColorMapUv:Ue&&b(C.specularColorMap.channel),specularIntensityMapUv:lt&&b(C.specularIntensityMap.channel),transmissionMapUv:Q&&b(C.transmissionMap.channel),thicknessMapUv:Ie&&b(C.thicknessMap.channel),alphaMapUv:Be&&b(C.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(At||we),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ee.attributes.uv&&(ht||Be),fog:!!ae,useFog:C.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:re,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Yt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ya,flipSided:C.side===Zn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Le&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&C.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ot.vertexUv1s=h.has(1),Ot.vertexUv2s=h.has(2),Ot.vertexUv3s=h.has(3),h.clear(),Ot}function x(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const H in C.defines)L.push(H),L.push(C.defines[H]);return C.isRawShaderMaterial===!1&&(U(L,C),R(L,C),L.push(a.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function U(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function R(C,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),C.push(d.mask)}function P(C){const L=y[C.type];let H;if(L){const j=ki[L];H=tR.clone(j.uniforms)}else H=C.uniforms;return H}function N(C,L){let H=_.get(L);return H!==void 0?++H.usedTimes:(H=new P2(a,L,C,u),g.push(H),_.set(L,H)),H}function B(C){if(--C.usedTimes===0){const L=g.indexOf(C);g[L]=g[g.length-1],g.pop(),_.delete(C.cacheKey),C.destroy()}}function O(C){p.remove(C)}function W(){p.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:P,acquireProgram:N,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:W}}function z2(){let a=new WeakMap;function e(c){return a.has(c)}function n(c){let d=a.get(c);return d===void 0&&(d={},a.set(c,d)),d}function r(c){a.delete(c)}function o(c,d,p){a.get(c)[d]=p}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function H2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function ox(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function lx(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(_,v,S,y,b,M){let x=a[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:y,renderOrder:_.renderOrder,z:b,group:M},a[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=y,x.renderOrder=_.renderOrder,x.z=b,x.group=M),e++,x}function d(_,v,S,y,b,M){const x=c(_,v,S,y,b,M);S.transmission>0?r.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(_,v,S,y,b,M){const x=c(_,v,S,y,b,M);S.transmission>0?r.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||H2),r.length>1&&r.sort(v||ox),o.length>1&&o.sort(v||ox)}function g(){for(let _=e,v=a.length;_<v;_++){const S=a[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:d,unshift:p,finish:g,sort:h}}function V2(){let a=new WeakMap;function e(r,o){const u=a.get(r);let c;return u===void 0?(c=new lx,a.set(r,[c])):o>=u.length?(c=new lx,u.push(c)):c=u[o],c}function n(){a=new WeakMap}return{get:e,dispose:n}}function G2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new fe,color:new Xt};break;case"SpotLight":n={position:new fe,direction:new fe,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new fe,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new fe,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":n={color:new Xt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return a[e.id]=n,n}}}function k2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let X2=0;function W2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function q2(a){const e=new G2,n=k2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new fe);const o=new fe,u=new dn,c=new dn;function d(h){let g=0,_=0,v=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,y=0,b=0,M=0,x=0,U=0,R=0,P=0,N=0,B=0,O=0;h.sort(W2);for(let C=0,L=h.length;C<L;C++){const H=h[C],j=H.color,Y=H.intensity,ae=H.distance;let ee=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===$s?ee=H.shadow.map.texture:ee=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=j.r*Y,_+=j.g*Y,v+=j.b*Y;else if(H.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(H.sh.coefficients[z],Y);O++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,k=n.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=H.shadow.matrix,U++}r.directional[S]=z,S++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(j).multiplyScalar(Y),z.distance=ae,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,r.spot[b]=z;const V=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,V.updateMatrices(H),H.castShadow&&B++),r.spotLightMatrix[b]=V.matrix,H.castShadow){const k=n.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.spotShadow[b]=k,r.spotShadowMap[b]=ee,P++}b++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(j).multiplyScalar(Y),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=z,M++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const V=H.shadow,k=n.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=H.shadow.matrix,R++}r.point[y]=z,y++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(Y),z.groundColor.copy(H.groundColor).multiplyScalar(Y),r.hemi[x]=z,x++}}M>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==S||W.pointLength!==y||W.spotLength!==b||W.rectAreaLength!==M||W.hemiLength!==x||W.numDirectionalShadows!==U||W.numPointShadows!==R||W.numSpotShadows!==P||W.numSpotMaps!==N||W.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=M,r.point.length=y,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+N-B,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=B,r.numLightProbes=O,W.directionalLength=S,W.pointLength=y,W.spotLength=b,W.rectAreaLength=M,W.hemiLength=x,W.numDirectionalShadows=U,W.numPointShadows=R,W.numSpotShadows=P,W.numSpotMaps=N,W.numLightProbes=O,r.version=X2++)}function p(h,g){let _=0,v=0,S=0,y=0,b=0;const M=g.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const R=h[x];if(R.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),_++}else if(R.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(M),S++}else if(R.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(M),c.identity(),u.copy(R.matrixWorld),u.premultiply(M),c.extractRotation(u),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),y++}else if(R.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(M),v++}else if(R.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:r}}function ux(a){const e=new q2(a),n=[],r=[];function o(g){h.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function c(g){r.push(g)}function d(){e.setup(n)}function p(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:c}}function Y2(a){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new ux(a),e.set(o,[d])):u>=c.length?(d=new ux(a),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Z2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,K2=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],Q2=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],cx=new dn,ll=new fe,Dh=new fe;function $2(a,e,n){let r=new GS;const o=new Ct,u=new Ct,c=new on,d=new hR,p=new pR,h={},g=n.maxTextureSize,_={[_r]:Zn,[Zn]:_r,[ya]:ya},v=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Z2,fragmentShader:j2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const y=new Ia;y.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ki(y,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let x=this.type;this.render=function(B,O,W){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===nA&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=dc);const C=a.getRenderTarget(),L=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),j=a.state;j.setBlending(Ta),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const Y=x!==this.type;Y&&O.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(ee=>ee.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,ee=B.length;ae<ee;ae++){const z=B[ae],V=z.shadow;if(V===void 0){st("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const k=V.getFrameExtents();if(o.multiply(k),u.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/k.x),o.x=u.x*k.x,V.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/k.y),o.y=u.y*k.y,V.mapSize.y=u.y)),V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===ul){if(z.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Yi(o.x,o.y,{format:$s,type:wa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new _l(o.x,o.y,Xi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=Da,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn}else{z.isPointLight?(V.map=new VS(o.x),V.map.depthTexture=new fR(o.x,ji)):(V.map=new Yi(o.x,o.y),V.map.depthTexture=new _l(o.x,o.y,ji)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=Da;const I=a.state.buffers.depth.getReversed();this.type===dc?(V.map.depthTexture.compareFunction=I?um:lm,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn)}V.camera.updateProjectionMatrix()}const de=V.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<de;I++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,I),a.clear();else{I===0&&(a.setRenderTarget(V.map),a.clear());const Z=V.getViewport(I);c.set(u.x*Z.x,u.y*Z.y,u.x*Z.z,u.y*Z.w),j.viewport(c)}if(z.isPointLight){const Z=V.camera,re=V.matrix,pe=z.distance||Z.far;pe!==Z.far&&(Z.far=pe,Z.updateProjectionMatrix()),ll.setFromMatrixPosition(z.matrixWorld),Z.position.copy(ll),Dh.copy(Z.position),Dh.add(K2[I]),Z.up.copy(Q2[I]),Z.lookAt(Dh),Z.updateMatrixWorld(),re.makeTranslation(-ll.x,-ll.y,-ll.z),cx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(cx,Z.coordinateSystem,Z.reversedDepth)}else V.updateMatrices(z);r=V.getFrustum(),P(O,W,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===ul&&U(V,W),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,a.setRenderTarget(C,L,H)};function U(B,O){const W=e.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Yi(o.x,o.y,{format:$s,type:wa})),v.uniforms.shadow_pass.value=B.map.depthTexture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,a.setRenderTarget(B.mapPass),a.clear(),a.renderBufferDirect(O,null,W,v,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,a.setRenderTarget(B.map),a.clear(),a.renderBufferDirect(O,null,W,S,b,null)}function R(B,O,W,C){let L=null;const H=W.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)L=H;else if(L=W.isPointLight===!0?p:d,a.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const j=L.uuid,Y=O.uuid;let ae=h[j];ae===void 0&&(ae={},h[j]=ae);let ee=ae[Y];ee===void 0&&(ee=L.clone(),ae[Y]=ee,O.addEventListener("dispose",N)),L=ee}if(L.visible=O.visible,L.wireframe=O.wireframe,C===ul?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:_[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,W.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const j=a.properties.get(L);j.light=W}return L}function P(B,O,W,C,L){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&L===ul)&&(!B.frustumCulled||r.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,B.matrixWorld);const Y=e.update(B),ae=B.material;if(Array.isArray(ae)){const ee=Y.groups;for(let z=0,V=ee.length;z<V;z++){const k=ee[z],de=ae[k.materialIndex];if(de&&de.visible){const I=R(B,de,C,L);B.onBeforeShadow(a,B,O,W,Y,I,k),a.renderBufferDirect(W,null,Y,I,B,k),B.onAfterShadow(a,B,O,W,Y,I,k)}}}else if(ae.visible){const ee=R(B,ae,C,L);B.onBeforeShadow(a,B,O,W,Y,ee,null),a.renderBufferDirect(W,null,Y,ee,B,null),B.onAfterShadow(a,B,O,W,Y,ee,null)}}const j=B.children;for(let Y=0,ae=j.length;Y<ae;Y++)P(j[Y],O,W,C,L)}function N(B){B.target.removeEventListener("dispose",N);for(const W in h){const C=h[W],L=B.target.uuid;L in C&&(C[L].dispose(),delete C[L])}}}const J2={[Vh]:Gh,[kh]:qh,[Xh]:Yh,[Ks]:Wh,[Gh]:Vh,[qh]:kh,[Yh]:Xh,[Wh]:Ks};function eD(a,e){function n(){let Q=!1;const Ie=new on;let Ce=null;const Be=new on(0,0,0,0);return{setMask:function(be){Ce!==be&&!Q&&(a.colorMask(be,be,be,be),Ce=be)},setLocked:function(be){Q=be},setClear:function(be,Me,Le,it,Ot){Ot===!0&&(be*=it,Me*=it,Le*=it),Ie.set(be,Me,Le,it),Be.equals(Ie)===!1&&(a.clearColor(be,Me,Le,it),Be.copy(Ie))},reset:function(){Q=!1,Ce=null,Be.set(-1,0,0,0)}}}function r(){let Q=!1,Ie=!1,Ce=null,Be=null,be=null;return{setReversed:function(Me){if(Ie!==Me){const Le=e.get("EXT_clip_control");Me?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Ie=Me;const it=be;be=null,this.setClear(it)}},getReversed:function(){return Ie},setTest:function(Me){Me?ve(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(Me){Ce!==Me&&!Q&&(a.depthMask(Me),Ce=Me)},setFunc:function(Me){if(Ie&&(Me=J2[Me]),Be!==Me){switch(Me){case Vh:a.depthFunc(a.NEVER);break;case Gh:a.depthFunc(a.ALWAYS);break;case kh:a.depthFunc(a.LESS);break;case Ks:a.depthFunc(a.LEQUAL);break;case Xh:a.depthFunc(a.EQUAL);break;case Wh:a.depthFunc(a.GEQUAL);break;case qh:a.depthFunc(a.GREATER);break;case Yh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=Me}},setLocked:function(Me){Q=Me},setClear:function(Me){be!==Me&&(Ie&&(Me=1-Me),a.clearDepth(Me),be=Me)},reset:function(){Q=!1,Ce=null,Be=null,be=null,Ie=!1}}}function o(){let Q=!1,Ie=null,Ce=null,Be=null,be=null,Me=null,Le=null,it=null,Ot=null;return{setTest:function(wt){Q||(wt?ve(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(wt){Ie!==wt&&!Q&&(a.stencilMask(wt),Ie=wt)},setFunc:function(wt,oi,_n){(Ce!==wt||Be!==oi||be!==_n)&&(a.stencilFunc(wt,oi,_n),Ce=wt,Be=oi,be=_n)},setOp:function(wt,oi,_n){(Me!==wt||Le!==oi||it!==_n)&&(a.stencilOp(wt,oi,_n),Me=wt,Le=oi,it=_n)},setLocked:function(wt){Q=wt},setClear:function(wt){Ot!==wt&&(a.clearStencil(wt),Ot=wt)},reset:function(){Q=!1,Ie=null,Ce=null,Be=null,be=null,Me=null,Le=null,it=null,Ot=null}}}const u=new n,c=new r,d=new o,p=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,S=[],y=null,b=!1,M=null,x=null,U=null,R=null,P=null,N=null,B=null,O=new Xt(0,0,0),W=0,C=!1,L=null,H=null,j=null,Y=null,ae=null;const ee=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const k=a.getParameter(a.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),z=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),z=V>=2);let de=null,I={};const Z=a.getParameter(a.SCISSOR_BOX),re=a.getParameter(a.VIEWPORT),pe=new on().fromArray(Z),Re=new on().fromArray(re);function He(Q,Ie,Ce,Be){const be=new Uint8Array(4),Me=a.createTexture();a.bindTexture(Q,Me),a.texParameteri(Q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<Ce;Le++)Q===a.TEXTURE_3D||Q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ie,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,be):a.texImage2D(Ie+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,be);return Me}const te={};te[a.TEXTURE_2D]=He(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=He(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=He(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=He(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(a.DEPTH_TEST),c.setFunc(Ks),rt(!1),At(gv),ve(a.CULL_FACE),Mt(Ta);function ve(Q){g[Q]!==!0&&(a.enable(Q),g[Q]=!0)}function Te(Q){g[Q]!==!1&&(a.disable(Q),g[Q]=!1)}function Je(Q,Ie){return _[Q]!==Ie?(a.bindFramebuffer(Q,Ie),_[Q]=Ie,Q===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ie),Q===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ge(Q,Ie){let Ce=S,Be=!1;if(Q){Ce=v.get(Ie),Ce===void 0&&(Ce=[],v.set(Ie,Ce));const be=Q.textures;if(Ce.length!==be.length||Ce[0]!==a.COLOR_ATTACHMENT0){for(let Me=0,Le=be.length;Me<Le;Me++)Ce[Me]=a.COLOR_ATTACHMENT0+Me;Ce.length=be.length,Be=!0}}else Ce[0]!==a.BACK&&(Ce[0]=a.BACK,Be=!0);Be&&a.drawBuffers(Ce)}function ht(Q){return y!==Q?(a.useProgram(Q),y=Q,!0):!1}const jt={[Wr]:a.FUNC_ADD,[aA]:a.FUNC_SUBTRACT,[rA]:a.FUNC_REVERSE_SUBTRACT};jt[sA]=a.MIN,jt[oA]=a.MAX;const pt={[lA]:a.ZERO,[uA]:a.ONE,[cA]:a.SRC_COLOR,[zh]:a.SRC_ALPHA,[gA]:a.SRC_ALPHA_SATURATE,[pA]:a.DST_COLOR,[dA]:a.DST_ALPHA,[fA]:a.ONE_MINUS_SRC_COLOR,[Hh]:a.ONE_MINUS_SRC_ALPHA,[mA]:a.ONE_MINUS_DST_COLOR,[hA]:a.ONE_MINUS_DST_ALPHA,[_A]:a.CONSTANT_COLOR,[vA]:a.ONE_MINUS_CONSTANT_COLOR,[xA]:a.CONSTANT_ALPHA,[SA]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(Q,Ie,Ce,Be,be,Me,Le,it,Ot,wt){if(Q===Ta){b===!0&&(Te(a.BLEND),b=!1);return}if(b===!1&&(ve(a.BLEND),b=!0),Q!==iA){if(Q!==M||wt!==C){if((x!==Wr||P!==Wr)&&(a.blendEquation(a.FUNC_ADD),x=Wr,P=Wr),wt)switch(Q){case qs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _v:a.blendFunc(a.ONE,a.ONE);break;case vv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case xv:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Lt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case qs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _v:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case vv:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xv:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",Q);break}U=null,R=null,N=null,B=null,O.set(0,0,0),W=0,M=Q,C=wt}return}be=be||Ie,Me=Me||Ce,Le=Le||Be,(Ie!==x||be!==P)&&(a.blendEquationSeparate(jt[Ie],jt[be]),x=Ie,P=be),(Ce!==U||Be!==R||Me!==N||Le!==B)&&(a.blendFuncSeparate(pt[Ce],pt[Be],pt[Me],pt[Le]),U=Ce,R=Be,N=Me,B=Le),(it.equals(O)===!1||Ot!==W)&&(a.blendColor(it.r,it.g,it.b,Ot),O.copy(it),W=Ot),M=Q,C=!1}function yt(Q,Ie){Q.side===ya?Te(a.CULL_FACE):ve(a.CULL_FACE);let Ce=Q.side===Zn;Ie&&(Ce=!Ce),rt(Ce),Q.blending===qs&&Q.transparent===!1?Mt(Ta):Mt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),u.setMask(Q.colorWrite);const Be=Q.stencilWrite;d.setTest(Be),Be&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),Yt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ve(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Q){L!==Q&&(Q?a.frontFace(a.CW):a.frontFace(a.CCW),L=Q)}function At(Q){Q!==eA?(ve(a.CULL_FACE),Q!==H&&(Q===gv?a.cullFace(a.BACK):Q===tA?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),H=Q}function X(Q){Q!==j&&(z&&a.lineWidth(Q),j=Q)}function Yt(Q,Ie,Ce){Q?(ve(a.POLYGON_OFFSET_FILL),(Y!==Ie||ae!==Ce)&&(a.polygonOffset(Ie,Ce),Y=Ie,ae=Ce)):Te(a.POLYGON_OFFSET_FILL)}function Et(Q){Q?ve(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function Ee(Q){Q===void 0&&(Q=a.TEXTURE0+ee-1),de!==Q&&(a.activeTexture(Q),de=Q)}function we(Q,Ie,Ce){Ce===void 0&&(de===null?Ce=a.TEXTURE0+ee-1:Ce=de);let Be=I[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},I[Ce]=Be),(Be.type!==Q||Be.texture!==Ie)&&(de!==Ce&&(a.activeTexture(Ce),de=Ce),a.bindTexture(Q,Ie||te[Q]),Be.type=Q,Be.texture=Ie)}function F(){const Q=I[de];Q!==void 0&&Q.type!==void 0&&(a.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function K(){try{a.compressedTexImage3D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function me(){try{a.texSubImage2D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function ge(){try{a.texSubImage3D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function he(){try{a.compressedTexSubImage2D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function Oe(){try{a.compressedTexSubImage3D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function Ae(){try{a.texStorage2D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function Xe(){try{a.texStorage3D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function Ke(){try{a.texImage2D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function ye(){try{a.texImage3D(...arguments)}catch(Q){Lt("WebGLState:",Q)}}function De(Q){pe.equals(Q)===!1&&(a.scissor(Q.x,Q.y,Q.z,Q.w),pe.copy(Q))}function Ve(Q){Re.equals(Q)===!1&&(a.viewport(Q.x,Q.y,Q.z,Q.w),Re.copy(Q))}function qe(Q,Ie){let Ce=h.get(Ie);Ce===void 0&&(Ce=new WeakMap,h.set(Ie,Ce));let Be=Ce.get(Q);Be===void 0&&(Be=a.getUniformBlockIndex(Ie,Q.name),Ce.set(Q,Be))}function Ue(Q,Ie){const Be=h.get(Ie).get(Q);p.get(Ie)!==Be&&(a.uniformBlockBinding(Ie,Be,Q.__bindingPointIndex),p.set(Ie,Be))}function lt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},de=null,I={},_={},v=new WeakMap,S=[],y=null,b=!1,M=null,x=null,U=null,R=null,P=null,N=null,B=null,O=new Xt(0,0,0),W=0,C=!1,L=null,H=null,j=null,Y=null,ae=null,pe.set(0,0,a.canvas.width,a.canvas.height),Re.set(0,0,a.canvas.width,a.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:ve,disable:Te,bindFramebuffer:Je,drawBuffers:Ge,useProgram:ht,setBlending:Mt,setMaterial:yt,setFlipSided:rt,setCullFace:At,setLineWidth:X,setPolygonOffset:Yt,setScissorTest:Et,activeTexture:Ee,bindTexture:we,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:Ke,texImage3D:ye,updateUBOMapping:qe,uniformBlockBinding:Ue,texStorage2D:Ae,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:ge,compressedTexSubImage2D:he,compressedTexSubImage3D:Oe,scissor:De,viewport:Ve,reset:lt}}function tD(a,e,n,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ct,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(F,T){return S?new OffscreenCanvas(F,T):Tc("canvas")}function b(F,T,K){let me=1;const ge=we(F);if((ge.width>K||ge.height>K)&&(me=K/Math.max(ge.width,ge.height)),me<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const he=Math.floor(me*ge.width),Oe=Math.floor(me*ge.height);_===void 0&&(_=y(he,Oe));const Ae=T?y(he,Oe):_;return Ae.width=he,Ae.height=Oe,Ae.getContext("2d").drawImage(F,0,0,he,Oe),st("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+Oe+")."),Ae}else return"data"in F&&st("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),F;return F}function M(F){return F.generateMipmaps}function x(F){a.generateMipmap(F)}function U(F){return F.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?a.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(F,T,K,me,ge=!1){if(F!==null){if(a[F]!==void 0)return a[F];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let he=T;if(T===a.RED&&(K===a.FLOAT&&(he=a.R32F),K===a.HALF_FLOAT&&(he=a.R16F),K===a.UNSIGNED_BYTE&&(he=a.R8)),T===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.R8UI),K===a.UNSIGNED_SHORT&&(he=a.R16UI),K===a.UNSIGNED_INT&&(he=a.R32UI),K===a.BYTE&&(he=a.R8I),K===a.SHORT&&(he=a.R16I),K===a.INT&&(he=a.R32I)),T===a.RG&&(K===a.FLOAT&&(he=a.RG32F),K===a.HALF_FLOAT&&(he=a.RG16F),K===a.UNSIGNED_BYTE&&(he=a.RG8)),T===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RG8UI),K===a.UNSIGNED_SHORT&&(he=a.RG16UI),K===a.UNSIGNED_INT&&(he=a.RG32UI),K===a.BYTE&&(he=a.RG8I),K===a.SHORT&&(he=a.RG16I),K===a.INT&&(he=a.RG32I)),T===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RGB8UI),K===a.UNSIGNED_SHORT&&(he=a.RGB16UI),K===a.UNSIGNED_INT&&(he=a.RGB32UI),K===a.BYTE&&(he=a.RGB8I),K===a.SHORT&&(he=a.RGB16I),K===a.INT&&(he=a.RGB32I)),T===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),K===a.UNSIGNED_INT&&(he=a.RGBA32UI),K===a.BYTE&&(he=a.RGBA8I),K===a.SHORT&&(he=a.RGBA16I),K===a.INT&&(he=a.RGBA32I)),T===a.RGB&&(K===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),K===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),T===a.RGBA){const Oe=ge?Ec:Rt.getTransfer(me);K===a.FLOAT&&(he=a.RGBA32F),K===a.HALF_FLOAT&&(he=a.RGBA16F),K===a.UNSIGNED_BYTE&&(he=Oe===Ht?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(F,T){let K;return F?T===null||T===ji||T===ml?K=a.DEPTH24_STENCIL8:T===Xi?K=a.DEPTH32F_STENCIL8:T===pl&&(K=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ji||T===ml?K=a.DEPTH_COMPONENT24:T===Xi?K=a.DEPTH_COMPONENT32F:T===pl&&(K=a.DEPTH_COMPONENT16),K}function N(F,T){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==Dn&&F.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function B(F){const T=F.target;T.removeEventListener("dispose",B),W(T),T.isVideoTexture&&g.delete(T)}function O(F){const T=F.target;T.removeEventListener("dispose",O),L(T)}function W(F){const T=r.get(F);if(T.__webglInit===void 0)return;const K=F.source,me=v.get(K);if(me){const ge=me[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(F),Object.keys(me).length===0&&v.delete(K)}r.remove(F)}function C(F){const T=r.get(F);a.deleteTexture(T.__webglTexture);const K=F.source,me=v.get(K);delete me[T.__cacheKey],c.memory.textures--}function L(F){const T=r.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),r.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ge=0;ge<T.__webglFramebuffer[me].length;ge++)a.deleteFramebuffer(T.__webglFramebuffer[me][ge]);else a.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)a.deleteFramebuffer(T.__webglFramebuffer[me]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=F.textures;for(let me=0,ge=K.length;me<ge;me++){const he=r.get(K[me]);he.__webglTexture&&(a.deleteTexture(he.__webglTexture),c.memory.textures--),r.remove(K[me])}r.remove(F)}let H=0;function j(){H=0}function Y(){const F=H;return F>=o.maxTextures&&st("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),H+=1,F}function ae(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function ee(F,T){const K=r.get(F);if(F.isVideoTexture&&Et(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&K.__version!==F.version){const me=F.image;if(me===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,F,T);return}}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+T)}function z(F,T){const K=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){te(K,F,T);return}else F.isExternalTexture&&(K.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+T)}function V(F,T){const K=r.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&K.__version!==F.version){te(K,F,T);return}n.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+T)}function k(F,T){const K=r.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&K.__version!==F.version){ve(K,F,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+T)}const de={[Kh]:a.REPEAT,[Ea]:a.CLAMP_TO_EDGE,[Qh]:a.MIRRORED_REPEAT},I={[Dn]:a.NEAREST,[EA]:a.NEAREST_MIPMAP_NEAREST,[Vu]:a.NEAREST_MIPMAP_LINEAR,[Fn]:a.LINEAR,[eh]:a.LINEAR_MIPMAP_NEAREST,[Yr]:a.LINEAR_MIPMAP_LINEAR},Z={[RA]:a.NEVER,[LA]:a.ALWAYS,[CA]:a.LESS,[lm]:a.LEQUAL,[wA]:a.EQUAL,[um]:a.GEQUAL,[DA]:a.GREATER,[UA]:a.NOTEQUAL};function re(F,T){if(T.type===Xi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fn||T.magFilter===eh||T.magFilter===Vu||T.magFilter===Yr||T.minFilter===Fn||T.minFilter===eh||T.minFilter===Vu||T.minFilter===Yr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(F,a.TEXTURE_WRAP_S,de[T.wrapS]),a.texParameteri(F,a.TEXTURE_WRAP_T,de[T.wrapT]),(F===a.TEXTURE_3D||F===a.TEXTURE_2D_ARRAY)&&a.texParameteri(F,a.TEXTURE_WRAP_R,de[T.wrapR]),a.texParameteri(F,a.TEXTURE_MAG_FILTER,I[T.magFilter]),a.texParameteri(F,a.TEXTURE_MIN_FILTER,I[T.minFilter]),T.compareFunction&&(a.texParameteri(F,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(F,a.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==Vu&&T.minFilter!==Yr||T.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(F,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function pe(F,T){let K=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",B));const me=T.source;let ge=v.get(me);ge===void 0&&(ge={},v.set(me,ge));const he=ae(T);if(he!==F.__cacheKey){ge[he]===void 0&&(ge[he]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[he].usedTimes++;const Oe=ge[F.__cacheKey];Oe!==void 0&&(ge[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(T)),F.__cacheKey=he,F.__webglTexture=ge[he].texture}return K}function Re(F,T,K){return Math.floor(Math.floor(F/K)/T)}function He(F,T,K,me){const he=F.updateRanges;if(he.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,K,me,T.data);else{he.sort((ye,De)=>ye.start-De.start);let Oe=0;for(let ye=1;ye<he.length;ye++){const De=he[Oe],Ve=he[ye],qe=De.start+De.count,Ue=Re(Ve.start,T.width,4),lt=Re(De.start,T.width,4);Ve.start<=qe+1&&Ue===lt&&Re(Ve.start+Ve.count-1,T.width,4)===Ue?De.count=Math.max(De.count,Ve.start+Ve.count-De.start):(++Oe,he[Oe]=Ve)}he.length=Oe+1;const Ae=a.getParameter(a.UNPACK_ROW_LENGTH),Xe=a.getParameter(a.UNPACK_SKIP_PIXELS),Ke=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let ye=0,De=he.length;ye<De;ye++){const Ve=he[ye],qe=Math.floor(Ve.start/4),Ue=Math.ceil(Ve.count/4),lt=qe%T.width,Q=Math.floor(qe/T.width),Ie=Ue,Ce=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Q),n.texSubImage2D(a.TEXTURE_2D,0,lt,Q,Ie,Ce,K,me,T.data)}F.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ae),a.pixelStorei(a.UNPACK_SKIP_PIXELS,Xe),a.pixelStorei(a.UNPACK_SKIP_ROWS,Ke)}}function te(F,T,K){let me=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=a.TEXTURE_3D);const ge=pe(F,T),he=T.source;n.bindTexture(me,F.__webglTexture,a.TEXTURE0+K);const Oe=r.get(he);if(he.version!==Oe.__version||ge===!0){n.activeTexture(a.TEXTURE0+K);const Ae=Rt.getPrimaries(Rt.workingColorSpace),Xe=T.colorSpace===pr?null:Rt.getPrimaries(T.colorSpace),Ke=T.colorSpace===pr||Ae===Xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ye=b(T.image,!1,o.maxTextureSize);ye=Ee(T,ye);const De=u.convert(T.format,T.colorSpace),Ve=u.convert(T.type);let qe=R(T.internalFormat,De,Ve,T.colorSpace,T.isVideoTexture);re(me,T);let Ue;const lt=T.mipmaps,Q=T.isVideoTexture!==!0,Ie=Oe.__version===void 0||ge===!0,Ce=he.dataReady,Be=N(T,ye);if(T.isDepthTexture)qe=P(T.format===Zr,T.type),Ie&&(Q?n.texStorage2D(a.TEXTURE_2D,1,qe,ye.width,ye.height):n.texImage2D(a.TEXTURE_2D,0,qe,ye.width,ye.height,0,De,Ve,null));else if(T.isDataTexture)if(lt.length>0){Q&&Ie&&n.texStorage2D(a.TEXTURE_2D,Be,qe,lt[0].width,lt[0].height);for(let be=0,Me=lt.length;be<Me;be++)Ue=lt[be],Q?Ce&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ve,Ue.data):n.texImage2D(a.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,De,Ve,Ue.data);T.generateMipmaps=!1}else Q?(Ie&&n.texStorage2D(a.TEXTURE_2D,Be,qe,ye.width,ye.height),Ce&&He(T,ye,De,Ve)):n.texImage2D(a.TEXTURE_2D,0,qe,ye.width,ye.height,0,De,Ve,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Q&&Ie&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,lt[0].width,lt[0].height,ye.depth);for(let be=0,Me=lt.length;be<Me;be++)if(Ue=lt[be],T.format!==Di)if(De!==null)if(Q){if(Ce)if(T.layerUpdates.size>0){const Le=Vv(Ue.width,Ue.height,T.format,T.type);for(const it of T.layerUpdates){const Ot=Ue.data.subarray(it*Le/Ue.data.BYTES_PER_ELEMENT,(it+1)*Le/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,it,Ue.width,Ue.height,1,De,Ot)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,ye.depth,De,Ue.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,be,qe,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Ce&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,ye.depth,De,Ve,Ue.data):n.texImage3D(a.TEXTURE_2D_ARRAY,be,qe,Ue.width,Ue.height,ye.depth,0,De,Ve,Ue.data)}else{Q&&Ie&&n.texStorage2D(a.TEXTURE_2D,Be,qe,lt[0].width,lt[0].height);for(let be=0,Me=lt.length;be<Me;be++)Ue=lt[be],T.format!==Di?De!==null?Q?Ce&&n.compressedTexSubImage2D(a.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ue.data):n.compressedTexImage2D(a.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,Ue.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Ce&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ve,Ue.data):n.texImage2D(a.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,De,Ve,Ue.data)}else if(T.isDataArrayTexture)if(Q){if(Ie&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,qe,ye.width,ye.height,ye.depth),Ce)if(T.layerUpdates.size>0){const be=Vv(ye.width,ye.height,T.format,T.type);for(const Me of T.layerUpdates){const Le=ye.data.subarray(Me*be/ye.data.BYTES_PER_ELEMENT,(Me+1)*be/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Me,ye.width,ye.height,1,De,Ve,Le)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,Ve,ye.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,De,Ve,ye.data);else if(T.isData3DTexture)Q?(Ie&&n.texStorage3D(a.TEXTURE_3D,Be,qe,ye.width,ye.height,ye.depth),Ce&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,Ve,ye.data)):n.texImage3D(a.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,De,Ve,ye.data);else if(T.isFramebufferTexture){if(Ie)if(Q)n.texStorage2D(a.TEXTURE_2D,Be,qe,ye.width,ye.height);else{let be=ye.width,Me=ye.height;for(let Le=0;Le<Be;Le++)n.texImage2D(a.TEXTURE_2D,Le,qe,be,Me,0,De,Ve,null),be>>=1,Me>>=1}}else if(lt.length>0){if(Q&&Ie){const be=we(lt[0]);n.texStorage2D(a.TEXTURE_2D,Be,qe,be.width,be.height)}for(let be=0,Me=lt.length;be<Me;be++)Ue=lt[be],Q?Ce&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,De,Ve,Ue):n.texImage2D(a.TEXTURE_2D,be,qe,De,Ve,Ue);T.generateMipmaps=!1}else if(Q){if(Ie){const be=we(ye);n.texStorage2D(a.TEXTURE_2D,Be,qe,be.width,be.height)}Ce&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,De,Ve,ye)}else n.texImage2D(a.TEXTURE_2D,0,qe,De,Ve,ye);M(T)&&x(me),Oe.__version=he.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ve(F,T,K){if(T.image.length!==6)return;const me=pe(F,T),ge=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,F.__webglTexture,a.TEXTURE0+K);const he=r.get(ge);if(ge.version!==he.__version||me===!0){n.activeTexture(a.TEXTURE0+K);const Oe=Rt.getPrimaries(Rt.workingColorSpace),Ae=T.colorSpace===pr?null:Rt.getPrimaries(T.colorSpace),Xe=T.colorSpace===pr||Oe===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ke=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!Ke&&!ye?De[Me]=b(T.image[Me],!0,o.maxCubemapSize):De[Me]=ye?T.image[Me].image:T.image[Me],De[Me]=Ee(T,De[Me]);const Ve=De[0],qe=u.convert(T.format,T.colorSpace),Ue=u.convert(T.type),lt=R(T.internalFormat,qe,Ue,T.colorSpace),Q=T.isVideoTexture!==!0,Ie=he.__version===void 0||me===!0,Ce=ge.dataReady;let Be=N(T,Ve);re(a.TEXTURE_CUBE_MAP,T);let be;if(Ke){Q&&Ie&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,lt,Ve.width,Ve.height);for(let Me=0;Me<6;Me++){be=De[Me].mipmaps;for(let Le=0;Le<be.length;Le++){const it=be[Le];T.format!==Di?qe!==null?Q?Ce&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,0,0,it.width,it.height,qe,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,lt,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,0,0,it.width,it.height,qe,Ue,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,lt,it.width,it.height,0,qe,Ue,it.data)}}}else{if(be=T.mipmaps,Q&&Ie){be.length>0&&Be++;const Me=we(De[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,lt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(ye){Q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,qe,Ue,De[Me].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,De[Me].width,De[Me].height,0,qe,Ue,De[Me].data);for(let Le=0;Le<be.length;Le++){const Ot=be[Le].image[Me].image;Q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,0,0,Ot.width,Ot.height,qe,Ue,Ot.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,lt,Ot.width,Ot.height,0,qe,Ue,Ot.data)}}else{Q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,qe,Ue,De[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,lt,qe,Ue,De[Me]);for(let Le=0;Le<be.length;Le++){const it=be[Le];Q?Ce&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,0,0,qe,Ue,it.image[Me]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,lt,qe,Ue,it.image[Me])}}}M(T)&&x(a.TEXTURE_CUBE_MAP),he.__version=ge.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Te(F,T,K,me,ge,he){const Oe=u.convert(K.format,K.colorSpace),Ae=u.convert(K.type),Xe=R(K.internalFormat,Oe,Ae,K.colorSpace),Ke=r.get(T),ye=r.get(K);if(ye.__renderTarget=T,!Ke.__hasExternalTextures){const De=Math.max(1,T.width>>he),Ve=Math.max(1,T.height>>he);ge===a.TEXTURE_3D||ge===a.TEXTURE_2D_ARRAY?n.texImage3D(ge,he,Xe,De,Ve,T.depth,0,Oe,Ae,null):n.texImage2D(ge,he,Xe,De,Ve,0,Oe,Ae,null)}n.bindFramebuffer(a.FRAMEBUFFER,F),Yt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,me,ge,ye.__webglTexture,0,X(T)):(ge===a.TEXTURE_2D||ge>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,me,ge,ye.__webglTexture,he),n.bindFramebuffer(a.FRAMEBUFFER,null)}function Je(F,T,K){if(a.bindRenderbuffer(a.RENDERBUFFER,F),T.depthBuffer){const me=T.depthTexture,ge=me&&me.isDepthTexture?me.type:null,he=P(T.stencilBuffer,ge),Oe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Yt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(T),he,T.width,T.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(T),he,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,he,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,F)}else{const me=T.textures;for(let ge=0;ge<me.length;ge++){const he=me[ge],Oe=u.convert(he.format,he.colorSpace),Ae=u.convert(he.type),Xe=R(he.internalFormat,Oe,Ae,he.colorSpace);Yt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,X(T),Xe,T.width,T.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,X(T),Xe,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,Xe,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ge(F,T,K){const me=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",B)),ge.__webglTexture===void 0){ge.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,ge.__webglTexture),re(a.TEXTURE_CUBE_MAP,T.depthTexture);const Ke=u.convert(T.depthTexture.format),ye=u.convert(T.depthTexture.type);let De;T.depthTexture.format===Da?De=a.DEPTH_COMPONENT24:T.depthTexture.format===Zr&&(De=a.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,De,T.width,T.height,0,Ke,ye,null)}}else ee(T.depthTexture,0);const he=ge.__webglTexture,Oe=X(T),Ae=me?a.TEXTURE_CUBE_MAP_POSITIVE_X+K:a.TEXTURE_2D,Xe=T.depthTexture.format===Zr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Da)Yt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Xe,Ae,he,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,Xe,Ae,he,0);else if(T.depthTexture.format===Zr)Yt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Xe,Ae,he,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,Xe,Ae,he,0);else throw new Error("Unknown depthTexture format")}function ht(F){const T=r.get(F),K=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const me=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ge)};me.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=me}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)Ge(T.__webglFramebuffer[me],F,me);else{const me=F.texture.mipmaps;me&&me.length>0?Ge(T.__webglFramebuffer[0],F,0):Ge(T.__webglFramebuffer,F,0)}else if(K){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=a.createRenderbuffer(),Je(T.__webglDepthbuffer[me],F,!1);else{const ge=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer[me];a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,he)}}else{const me=F.texture.mipmaps;if(me&&me.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),Je(T.__webglDepthbuffer,F,!1);else{const ge=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,he=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,he),a.framebufferRenderbuffer(a.FRAMEBUFFER,ge,a.RENDERBUFFER,he)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function jt(F,T,K){const me=r.get(F);T!==void 0&&Te(me.__webglFramebuffer,F,F.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&ht(F)}function pt(F){const T=F.texture,K=r.get(F),me=r.get(T);F.addEventListener("dispose",O);const ge=F.textures,he=F.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(me.__webglTexture===void 0&&(me.__webglTexture=a.createTexture()),me.__version=T.version,c.memory.textures++),he){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Xe=0;Xe<T.mipmaps.length;Xe++)K.__webglFramebuffer[Ae][Xe]=a.createFramebuffer()}else K.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let Ae=0,Xe=ge.length;Ae<Xe;Ae++){const Ke=r.get(ge[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=a.createTexture(),c.memory.textures++)}if(F.samples>0&&Yt(F)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Xe=ge[Ae];K.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const Ke=u.convert(Xe.format,Xe.colorSpace),ye=u.convert(Xe.type),De=R(Xe.internalFormat,Ke,ye,Xe.colorSpace,F.isXRRenderTarget===!0),Ve=X(F);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ve,De,F.width,F.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),F.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),Je(K.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(he){n.bindTexture(a.TEXTURE_CUBE_MAP,me.__webglTexture),re(a.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Te(K.__webglFramebuffer[Ae][Xe],F,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe);else Te(K.__webglFramebuffer[Ae],F,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(T)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let Ae=0,Xe=ge.length;Ae<Xe;Ae++){const Ke=ge[Ae],ye=r.get(Ke);let De=a.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(De=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(De,ye.__webglTexture),re(De,Ke),Te(K.__webglFramebuffer,F,Ke,a.COLOR_ATTACHMENT0+Ae,De,0),M(Ke)&&x(De)}n.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ae=F.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ae,me.__webglTexture),re(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Xe=0;Xe<T.mipmaps.length;Xe++)Te(K.__webglFramebuffer[Xe],F,T,a.COLOR_ATTACHMENT0,Ae,Xe);else Te(K.__webglFramebuffer,F,T,a.COLOR_ATTACHMENT0,Ae,0);M(T)&&x(Ae),n.unbindTexture()}F.depthBuffer&&ht(F)}function Mt(F){const T=F.textures;for(let K=0,me=T.length;K<me;K++){const ge=T[K];if(M(ge)){const he=U(F),Oe=r.get(ge).__webglTexture;n.bindTexture(he,Oe),x(he),n.unbindTexture()}}}const yt=[],rt=[];function At(F){if(F.samples>0){if(Yt(F)===!1){const T=F.textures,K=F.width,me=F.height;let ge=a.COLOR_BUFFER_BIT;const he=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(F),Ae=T.length>1;if(Ae)for(let Ke=0;Ke<T.length;Ke++)n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Xe=F.texture.mipmaps;Xe&&Xe.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Ke=0;Ke<T.length;Ke++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ge|=a.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ge|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ke]);const ye=r.get(T[Ke]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,ye,0)}a.blitFramebuffer(0,0,K,me,0,0,K,me,ge,a.NEAREST),p===!0&&(yt.length=0,rt.length=0,yt.push(a.COLOR_ATTACHMENT0+Ke),F.depthBuffer&&F.resolveDepthBuffer===!1&&(yt.push(he),rt.push(he),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,rt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<T.length;Ke++){n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Ke]);const ye=r.get(T[Ke]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ke,a.TEXTURE_2D,ye,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const T=F.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function X(F){return Math.min(o.maxSamples,F.samples)}function Yt(F){const T=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(F){const T=c.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function Ee(F,T){const K=F.colorSpace,me=F.format,ge=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||K!==Js&&K!==pr&&(Rt.getTransfer(K)===Ht?(me!==Di||ge!==gi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",K)),T}function we(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(h.width=F.naturalWidth||F.width,h.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(h.width=F.displayWidth,h.height=F.displayHeight):(h.width=F.width,h.height=F.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function nD(a,e){function n(r,o=pr){let u;const c=Rt.getTransfer(o);if(r===gi)return a.UNSIGNED_BYTE;if(r===im)return a.UNSIGNED_SHORT_4_4_4_4;if(r===am)return a.UNSIGNED_SHORT_5_5_5_1;if(r===AS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===RS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===bS)return a.BYTE;if(r===TS)return a.SHORT;if(r===pl)return a.UNSIGNED_SHORT;if(r===nm)return a.INT;if(r===ji)return a.UNSIGNED_INT;if(r===Xi)return a.FLOAT;if(r===wa)return a.HALF_FLOAT;if(r===CS)return a.ALPHA;if(r===wS)return a.RGB;if(r===Di)return a.RGBA;if(r===Da)return a.DEPTH_COMPONENT;if(r===Zr)return a.DEPTH_STENCIL;if(r===DS)return a.RED;if(r===rm)return a.RED_INTEGER;if(r===$s)return a.RG;if(r===sm)return a.RG_INTEGER;if(r===om)return a.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(c===Ht)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$h||r===Jh||r===ep||r===tp)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===$h)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ep)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===np||r===ip||r===ap||r===rp||r===sp||r===op||r===lp)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===np||r===ip)return c===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ap)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===rp)return u.COMPRESSED_R11_EAC;if(r===sp)return u.COMPRESSED_SIGNED_R11_EAC;if(r===op)return u.COMPRESSED_RG11_EAC;if(r===lp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===up||r===cp||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp||r===xp||r===Sp||r===Mp||r===yp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===up)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===cp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===fp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===dp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_p)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yp)return c===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ep||r===bp||r===Tp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Ep)return c===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Tp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ap||r===Rp||r===Cp||r===wp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Ap)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Rp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Cp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ml?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const iD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new kS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ni({vertexShader:iD,fragmentShader:aD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ki(new Cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sD extends no{constructor(e,n){super();const r=this;let o=null,u=1,c=null,d="local-floor",p=1,h=null,g=null,_=null,v=null,S=null,y=null;const b=typeof XRWebGLBinding<"u",M=new rD,x={},U=n.getContextAttributes();let R=null,P=null;const N=[],B=[],O=new Ct;let W=null;const C=new Ci;C.viewport=new on;const L=new Ci;L.viewport=new on;const H=[C,L],j=new mR;let Y=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=N[te];return ve===void 0&&(ve=new Eh,N[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=N[te];return ve===void 0&&(ve=new Eh,N[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=N[te];return ve===void 0&&(ve=new Eh,N[te]=ve),ve.getHandSpace()};function ee(te){const ve=B.indexOf(te.inputSource);if(ve===-1)return;const Te=N[ve];Te!==void 0&&(Te.update(te.inputSource,te.frame,h||c),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){o.removeEventListener("select",ee),o.removeEventListener("selectstart",ee),o.removeEventListener("selectend",ee),o.removeEventListener("squeeze",ee),o.removeEventListener("squeezestart",ee),o.removeEventListener("squeezeend",ee),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",V);for(let te=0;te<N.length;te++){const ve=B[te];ve!==null&&(B[te]=null,N[te].disconnect(ve))}Y=null,ae=null,M.reset();for(const te in x)delete x[te];e.setRenderTarget(R),S=null,v=null,_=null,o=null,P=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return y},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",ee),o.addEventListener("selectstart",ee),o.addEventListener("selectend",ee),o.addEventListener("squeeze",ee),o.addEventListener("squeezestart",ee),o.addEventListener("squeezeend",ee),o.addEventListener("end",z),o.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await n.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(O),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,Ge=null;U.depth&&(Ge=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=U.stencil?Zr:Da,Je=U.stencil?ml:ji);const ht={colorFormat:n.RGBA8,depthFormat:Ge,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(ht),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Yi(v.textureWidth,v.textureHeight,{format:Di,type:gi,depthTexture:new _l(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Yi(S.framebufferWidth,S.framebufferHeight,{format:Di,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await o.requestReferenceSpace(d),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(te){for(let ve=0;ve<te.removed.length;ve++){const Te=te.removed[ve],Je=B.indexOf(Te);Je>=0&&(B[Je]=null,N[Je].disconnect(Te))}for(let ve=0;ve<te.added.length;ve++){const Te=te.added[ve];let Je=B.indexOf(Te);if(Je===-1){for(let ht=0;ht<N.length;ht++)if(ht>=B.length){B.push(Te),Je=ht;break}else if(B[ht]===null){B[ht]=Te,Je=ht;break}if(Je===-1)break}const Ge=N[Je];Ge&&Ge.connect(Te)}}const k=new fe,de=new fe;function I(te,ve,Te){k.setFromMatrixPosition(ve.matrixWorld),de.setFromMatrixPosition(Te.matrixWorld);const Je=k.distanceTo(de),Ge=ve.projectionMatrix.elements,ht=Te.projectionMatrix.elements,jt=Ge[14]/(Ge[10]-1),pt=Ge[14]/(Ge[10]+1),Mt=(Ge[9]+1)/Ge[5],yt=(Ge[9]-1)/Ge[5],rt=(Ge[8]-1)/Ge[0],At=(ht[8]+1)/ht[0],X=jt*rt,Yt=jt*At,Et=Je/(-rt+At),Ee=Et*-rt;if(ve.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ee),te.translateZ(Et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const we=jt+Et,F=pt+Et,T=X-Ee,K=Yt+(Je-Ee),me=Mt*pt/F*we,ge=yt*pt/F*we;te.projectionMatrix.makePerspective(T,K,me,ge,we,F),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Z(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let ve=te.near,Te=te.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),j.near=L.near=C.near=ve,j.far=L.far=C.far=Te,(Y!==j.near||ae!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),Y=j.near,ae=j.far),j.layers.mask=te.layers.mask|6,C.layers.mask=j.layers.mask&3,L.layers.mask=j.layers.mask&5;const Je=te.parent,Ge=j.cameras;Z(j,Je);for(let ht=0;ht<Ge.length;ht++)Z(Ge[ht],Je);Ge.length===2?I(j,C,L):j.projectionMatrix.copy(C.projectionMatrix),re(te,j,Je)};function re(te,ve,Te){Te===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Dp*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(te){p=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(te){return x[te]};let pe=null;function Re(te,ve){if(g=ve.getViewerPose(h||c),y=ve,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Je=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,Je=!0);for(let pt=0;pt<Te.length;pt++){const Mt=Te[pt];let yt=null;if(S!==null)yt=S.getViewport(Mt);else{const At=_.getViewSubImage(v,Mt);yt=At.viewport,pt===0&&(e.setRenderTargetTextures(P,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(P))}let rt=H[pt];rt===void 0&&(rt=new Ci,rt.layers.enable(pt),rt.viewport=new on,H[pt]=rt),rt.matrix.fromArray(Mt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Mt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(j.matrix.copy(rt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Je===!0&&j.cameras.push(rt)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const pt=_.getDepthInformation(Te[0]);pt&&pt.isValid&&pt.texture&&M.init(pt,o.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let pt=0;pt<Te.length;pt++){const Mt=Te[pt].camera;if(Mt){let yt=x[Mt];yt||(yt=new kS,x[Mt]=yt);const rt=_.getCameraImage(Mt);yt.sourceTexture=rt}}}}for(let Te=0;Te<N.length;Te++){const Je=B[Te],Ge=N[Te];Je!==null&&Ge!==void 0&&Ge.update(Je,ve,h||c)}pe&&pe(te,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),y=null}const He=new XS;He.setAnimationLoop(Re),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}}const Vr=new Ua,oD=new dn;function lD(a,e){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,BS(a)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,U,R,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(M,x):x.isMeshToonMaterial?(u(M,x),_(M,x)):x.isMeshPhongMaterial?(u(M,x),g(M,x)):x.isMeshStandardMaterial?(u(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,P)):x.isMeshMatcapMaterial?(u(M,x),y(M,x)):x.isMeshDepthMaterial?u(M,x):x.isMeshDistanceMaterial?(u(M,x),b(M,x)):x.isMeshNormalMaterial?u(M,x):x.isLineBasicMaterial?(c(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?p(M,x,U,R):x.isSpriteMaterial?h(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const U=e.get(x),R=U.envMap,P=U.envMapRotation;R&&(M.envMap.value=R,Vr.copy(P),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),M.envMapRotation.value.setFromMatrix4(oD.makeRotationFromEuler(Vr)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function c(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function p(M,x,U,R){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*U,M.scale.value=R*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,U){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,x){x.matcap&&(M.matcap.value=x.matcap)}function b(M,x){const U=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function uD(a,e,n,r){let o={},u={},c=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,R){const P=R.program;r.uniformBlockBinding(U,P)}function h(U,R){let P=o[U.id];P===void 0&&(y(U),P=g(U),o[U.id]=P,U.addEventListener("dispose",M));const N=R.program;r.updateUBOMapping(U,N);const B=e.render.frame;u[U.id]!==B&&(v(U),u[U.id]=B)}function g(U){const R=_();U.__bindingPointIndex=R;const P=a.createBuffer(),N=U.__size,B=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,N,B),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,P),P}function _(){for(let U=0;U<d;U++)if(c.indexOf(U)===-1)return c.push(U),U;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=o[U.id],P=U.uniforms,N=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let B=0,O=P.length;B<O;B++){const W=Array.isArray(P[B])?P[B]:[P[B]];for(let C=0,L=W.length;C<L;C++){const H=W[C];if(S(H,B,C,N)===!0){const j=H.__offset,Y=Array.isArray(H.value)?H.value:[H.value];let ae=0;for(let ee=0;ee<Y.length;ee++){const z=Y[ee],V=b(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,j+ae,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,ae),ae+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,j,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(U,R,P,N){const B=U.value,O=R+"_"+P;if(N[O]===void 0)return typeof B=="number"||typeof B=="boolean"?N[O]=B:N[O]=B.clone(),!0;{const W=N[O];if(typeof B=="number"||typeof B=="boolean"){if(W!==B)return N[O]=B,!0}else if(W.equals(B)===!1)return W.copy(B),!0}return!1}function y(U){const R=U.uniforms;let P=0;const N=16;for(let O=0,W=R.length;O<W;O++){const C=Array.isArray(R[O])?R[O]:[R[O]];for(let L=0,H=C.length;L<H;L++){const j=C[L],Y=Array.isArray(j.value)?j.value:[j.value];for(let ae=0,ee=Y.length;ae<ee;ae++){const z=Y[ae],V=b(z),k=P%N,de=k%V.boundary,I=k+de;P+=de,I!==0&&N-I<V.storage&&(P+=N-I),j.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=P,P+=V.storage}}}const B=P%N;return B>0&&(P+=N-B),U.__size=P,U.__cache={},this}function b(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",U),R}function M(U){const R=U.target;R.removeEventListener("dispose",M);const P=c.indexOf(R.__bindingPointIndex);c.splice(P,1),a.deleteBuffer(o[R.id]),delete o[R.id],delete u[R.id]}function x(){for(const U in o)a.deleteBuffer(o[U]);c=[],o={},u={}}return{bind:p,update:h,dispose:x}}const cD=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function fD(){return Gi===null&&(Gi=new oR(cD,16,16,$s,wa),Gi.name="DFG_LUT",Gi.minFilter=Fn,Gi.magFilter=Fn,Gi.wrapS=Ea,Gi.wrapT=Ea,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class dD{constructor(e={}){const{canvas:n=NA(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=gi}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=c;const b=S,M=new Set([om,sm,rm]),x=new Set([gi,ji,pl,ml,im,am]),U=new Uint32Array(4),R=new Int32Array(4);let P=null,N=null;const B=[],O=[];let W=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1;this._outputColorSpace=ri;let H=0,j=0,Y=null,ae=-1,ee=null;const z=new on,V=new on;let k=null;const de=new Xt(0);let I=0,Z=n.width,re=n.height,pe=1,Re=null,He=null;const te=new on(0,0,Z,re),ve=new on(0,0,Z,re);let Te=!1;const Je=new GS;let Ge=!1,ht=!1;const jt=new dn,pt=new fe,Mt=new on,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function At(){return Y===null?pe:1}let X=r;function Yt(D,$){return n.getContext(D,$)}try{const D={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tm}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Ot,!1),n.addEventListener("webglcontextcreationerror",wt,!1),X===null){const $="webgl2";if(X=Yt($,D),X===null)throw Yt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Lt("WebGLRenderer: "+D.message),D}let Et,Ee,we,F,T,K,me,ge,he,Oe,Ae,Xe,Ke,ye,De,Ve,qe,Ue,lt,Q,Ie,Ce,Be,be;function Me(){Et=new f3(X),Et.init(),Ce=new nD(X,Et),Ee=new n3(X,Et,e,Ce),we=new eD(X,Et),Ee.reversedDepthBuffer&&v&&we.buffers.depth.setReversed(!0),F=new p3(X),T=new z2,K=new tD(X,Et,we,T,Ee,Ce,F),me=new a3(C),ge=new c3(C),he=new vR(X),Be=new e3(X,he),Oe=new d3(X,he,F,Be),Ae=new g3(X,Oe,he,F),lt=new m3(X,Ee,K),Ve=new i3(T),Xe=new B2(C,me,ge,Et,Ee,Be,Ve),Ke=new lD(C,T),ye=new V2,De=new Y2(Et),Ue=new Jw(C,me,ge,we,Ae,y,p),qe=new $2(C,Ae,Ee),be=new uD(X,F,Ee,we),Q=new t3(X,Et,F),Ie=new h3(X,Et,F),F.programs=Xe.programs,C.capabilities=Ee,C.extensions=Et,C.properties=T,C.renderLists=ye,C.shadowMap=qe,C.state=we,C.info=F}Me(),b!==gi&&(W=new v3(b,n.width,n.height,o,u));const Le=new sD(C,X);this.xr=Le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const D=Et.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Et.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(D){D!==void 0&&(pe=D,this.setSize(Z,re,!1))},this.getSize=function(D){return D.set(Z,re)},this.setSize=function(D,$,ce=!0){if(Le.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=D,re=$,n.width=Math.floor(D*pe),n.height=Math.floor($*pe),ce===!0&&(n.style.width=D+"px",n.style.height=$+"px"),W!==null&&W.setSize(n.width,n.height),this.setViewport(0,0,D,$)},this.getDrawingBufferSize=function(D){return D.set(Z*pe,re*pe).floor()},this.setDrawingBufferSize=function(D,$,ce){Z=D,re=$,pe=ce,n.width=Math.floor(D*ce),n.height=Math.floor($*ce),this.setViewport(0,0,D,$)},this.setEffects=function(D){if(b===gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let $=0;$<D.length;$++)if(D[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(te)},this.setViewport=function(D,$,ce,oe){D.isVector4?te.set(D.x,D.y,D.z,D.w):te.set(D,$,ce,oe),we.viewport(z.copy(te).multiplyScalar(pe).round())},this.getScissor=function(D){return D.copy(ve)},this.setScissor=function(D,$,ce,oe){D.isVector4?ve.set(D.x,D.y,D.z,D.w):ve.set(D,$,ce,oe),we.scissor(V.copy(ve).multiplyScalar(pe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(D){we.setScissorTest(Te=D)},this.setOpaqueSort=function(D){Re=D},this.setTransparentSort=function(D){He=D},this.getClearColor=function(D){return D.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(D=!0,$=!0,ce=!0){let oe=0;if(D){let ne=!1;if(Y!==null){const Ne=Y.texture.format;ne=M.has(Ne)}if(ne){const Ne=Y.texture.type,ze=x.has(Ne),Pe=Ue.getClearColor(),ke=Ue.getClearAlpha(),Ze=Pe.r,et=Pe.g,We=Pe.b;ze?(U[0]=Ze,U[1]=et,U[2]=We,U[3]=ke,X.clearBufferuiv(X.COLOR,0,U)):(R[0]=Ze,R[1]=et,R[2]=We,R[3]=ke,X.clearBufferiv(X.COLOR,0,R))}else oe|=X.COLOR_BUFFER_BIT}$&&(oe|=X.DEPTH_BUFFER_BIT),ce&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Ot,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),Ue.dispose(),ye.dispose(),De.dispose(),T.dispose(),me.dispose(),ge.dispose(),Ae.dispose(),Be.dispose(),be.dispose(),Xe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",wl),Le.removeEventListener("sessionend",Dl),Oi.stop()};function it(D){D.preventDefault(),bv("WebGLRenderer: Context Lost."),L=!0}function Ot(){bv("WebGLRenderer: Context Restored."),L=!1;const D=F.autoReset,$=qe.enabled,ce=qe.autoUpdate,oe=qe.needsUpdate,ne=qe.type;Me(),F.autoReset=D,qe.enabled=$,qe.autoUpdate=ce,qe.needsUpdate=oe,qe.type=ne}function wt(D){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function oi(D){const $=D.target;$.removeEventListener("dispose",oi),_n($)}function _n(D){vn(D),T.remove(D)}function vn(D){const $=T.get(D).programs;$!==void 0&&($.forEach(function(ce){Xe.releaseProgram(ce)}),D.isShaderMaterial&&Xe.releaseShaderCache(D))}this.renderBufferDirect=function(D,$,ce,oe,ne,Ne){$===null&&($=yt);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,Pe=Ul(D,$,ce,oe,ne);we.setMaterial(oe,ze);let ke=ce.index,Ze=1;if(oe.wireframe===!0){if(ke=Oe.getWireframeAttribute(ce),ke===void 0)return;Ze=2}const et=ce.drawRange,We=ce.attributes.position;let ut=et.start*Ze,It=(et.start+et.count)*Ze;Ne!==null&&(ut=Math.max(ut,Ne.start*Ze),It=Math.min(It,(Ne.start+Ne.count)*Ze)),ke!==null?(ut=Math.max(ut,0),It=Math.min(It,ke.count)):We!=null&&(ut=Math.max(ut,0),It=Math.min(It,We.count));const Wt=It-ut;if(Wt<0||Wt===1/0)return;Be.setup(ne,oe,Pe,ce,ke);let Kt,Dt=Q;if(ke!==null&&(Kt=he.get(ke),Dt=Ie,Dt.setIndex(Kt)),ne.isMesh)oe.wireframe===!0?(we.setLineWidth(oe.wireframeLinewidth*At()),Dt.setMode(X.LINES)):Dt.setMode(X.TRIANGLES);else if(ne.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),we.setLineWidth(Qe*At()),ne.isLineSegments?Dt.setMode(X.LINES):ne.isLineLoop?Dt.setMode(X.LINE_LOOP):Dt.setMode(X.LINE_STRIP)}else ne.isPoints?Dt.setMode(X.POINTS):ne.isSprite&&Dt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)gl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Qe=ne._multiDrawStarts,ot=ne._multiDrawCounts,xt=ne._multiDrawCount,Un=ke?he.get(ke).bytesPerElement:1,Ii=T.get(oe).currentProgram.getUniforms();for(let ln=0;ln<xt;ln++)Ii.setValue(X,"_gl_DrawID",ln),Dt.render(Qe[ln]/Un,ot[ln])}else if(ne.isInstancedMesh)Dt.renderInstances(ut,Wt,ne.count);else if(ce.isInstancedBufferGeometry){const Qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ot=Math.min(ce.instanceCount,Qe);Dt.renderInstances(ut,Wt,ot)}else Dt.render(ut,Wt)};function Tn(D,$,ce){D.transparent===!0&&D.side===ya&&D.forceSinglePass===!1?(D.side=Zn,D.needsUpdate=!0,Si(D,$,ce),D.side=_r,D.needsUpdate=!0,Si(D,$,ce),D.side=ya):Si(D,$,ce)}this.compile=function(D,$,ce=null){ce===null&&(ce=D),N=De.get(ce),N.init($),O.push(N),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),D!==ce&&D.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const oe=new Set;return D.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Pe=Ne[ze];Tn(Pe,ce,ne),oe.add(Pe)}else Tn(Ne,ce,ne),oe.add(Ne)}),N=O.pop(),oe},this.compileAsync=function(D,$,ce=null){const oe=this.compile(D,$,ce);return new Promise(ne=>{function Ne(){if(oe.forEach(function(ze){T.get(ze).currentProgram.isReady()&&oe.delete(ze)}),oe.size===0){ne(D);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Pi=null;function ao(D){Pi&&Pi(D)}function wl(){Oi.stop()}function Dl(){Oi.start()}const Oi=new XS;Oi.setAnimationLoop(ao),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(D){Pi=D,Le.setAnimationLoop(D),D===null?Oi.stop():Oi.start()},Le.addEventListener("sessionstart",wl),Le.addEventListener("sessionend",Dl),this.render=function(D,$){if($!==void 0&&$.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ce=Le.enabled===!0&&Le.isPresenting===!0,oe=W!==null&&(Y===null||ce)&&W.begin(C,Y);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera($),$=Le.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,$,Y),N=De.get(D,O.length),N.init($),O.push(N),jt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(jt,Wi,$.reversedDepth),ht=this.localClippingEnabled,Ge=Ve.init(this.clippingPlanes,ht),P=ye.get(D,B.length),P.init(),B.push(P),Le.enabled===!0&&Le.isPresenting===!0){const ze=C.xr.getDepthSensingMesh();ze!==null&&Ji(ze,$,-1/0,C.sortObjects)}Ji(D,$,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Re,He),rt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,rt&&Ue.addToRenderList(P,D),this.info.render.frame++,Ge===!0&&Ve.beginShadows();const ne=N.state.shadowsArray;if(qe.render(ne,D,$),Ge===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&W.hasRenderPass())===!1){const ze=P.opaque,Pe=P.transmissive;if(N.setupLights(),$.isArrayCamera){const ke=$.cameras;if(Pe.length>0)for(let Ze=0,et=ke.length;Ze<et;Ze++){const We=ke[Ze];ea(ze,Pe,D,We)}rt&&Ue.render(D);for(let Ze=0,et=ke.length;Ze<et;Ze++){const We=ke[Ze];Jr(P,D,We,We.viewport)}}else Pe.length>0&&ea(ze,Pe,D,$),rt&&Ue.render(D),Jr(P,D,$)}Y!==null&&j===0&&(K.updateMultisampleRenderTarget(Y),K.updateRenderTargetMipmap(Y)),oe&&W.end(C),D.isScene===!0&&D.onAfterRender(C,D,$),Be.resetDefaultState(),ae=-1,ee=null,O.pop(),O.length>0?(N=O[O.length-1],Ge===!0&&Ve.setGlobalState(C.clippingPlanes,N.state.camera)):N=null,B.pop(),B.length>0?P=B[B.length-1]:P=null};function Ji(D,$,ce,oe){if(D.visible===!1)return;if(D.layers.test($.layers)){if(D.isGroup)ce=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update($);else if(D.isLight)N.pushLight(D),D.castShadow&&N.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Je.intersectsSprite(D)){oe&&Mt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(jt);const ze=Ae.update(D),Pe=D.material;Pe.visible&&P.push(D,ze,Pe,ce,Mt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Je.intersectsObject(D))){const ze=Ae.update(D),Pe=D.material;if(oe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Mt.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Mt.copy(ze.boundingSphere.center)),Mt.applyMatrix4(D.matrixWorld).applyMatrix4(jt)),Array.isArray(Pe)){const ke=ze.groups;for(let Ze=0,et=ke.length;Ze<et;Ze++){const We=ke[Ze],ut=Pe[We.materialIndex];ut&&ut.visible&&P.push(D,ze,ut,ce,Mt.z,We)}}else Pe.visible&&P.push(D,ze,Pe,ce,Mt.z,null)}}const Ne=D.children;for(let ze=0,Pe=Ne.length;ze<Pe;ze++)Ji(Ne[ze],$,ce,oe)}function Jr(D,$,ce,oe){const{opaque:ne,transmissive:Ne,transparent:ze}=D;N.setupLightsView(ce),Ge===!0&&Ve.setGlobalState(C.clippingPlanes,ce),oe&&we.viewport(z.copy(oe)),ne.length>0&&xi(ne,$,ce),Ne.length>0&&xi(Ne,$,ce),ze.length>0&&xi(ze,$,ce),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ea(D,$,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[oe.id]===void 0){const ut=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[oe.id]=new Yi(1,1,{generateMipmaps:!0,type:ut?wa:gi,minFilter:Yr,samples:Ee.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=N.state.transmissionRenderTarget[oe.id],ze=oe.viewport||z;Ne.setSize(ze.z*C.transmissionResolutionScale,ze.w*C.transmissionResolutionScale);const Pe=C.getRenderTarget(),ke=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(de),I=C.getClearAlpha(),I<1&&C.setClearColor(16777215,.5),C.clear(),rt&&Ue.render(ce);const et=C.toneMapping;C.toneMapping=qi;const We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),N.setupLightsView(oe),Ge===!0&&Ve.setGlobalState(C.clippingPlanes,oe),xi(D,ce,oe),K.updateMultisampleRenderTarget(Ne),K.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let It=0,Wt=$.length;It<Wt;It++){const Kt=$[It],{object:Dt,geometry:Qe,material:ot,group:xt}=Kt;if(ot.side===ya&&Dt.layers.test(oe.layers)){const Un=ot.side;ot.side=Zn,ot.needsUpdate=!0,Fa(Dt,ce,oe,Qe,ot,xt),ot.side=Un,ot.needsUpdate=!0,ut=!0}}ut===!0&&(K.updateMultisampleRenderTarget(Ne),K.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Pe,ke,Ze),C.setClearColor(de,I),We!==void 0&&(oe.viewport=We),C.toneMapping=et}function xi(D,$,ce){const oe=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Ne=D.length;ne<Ne;ne++){const ze=D[ne],{object:Pe,geometry:ke,group:Ze}=ze;let et=ze.material;et.allowOverride===!0&&oe!==null&&(et=oe),Pe.layers.test(ce.layers)&&Fa(Pe,$,ce,ke,et,Ze)}}function Fa(D,$,ce,oe,ne,Ne){D.onBeforeRender(C,$,ce,oe,ne,Ne),D.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ne.onBeforeRender(C,$,ce,oe,D,Ne),ne.transparent===!0&&ne.side===ya&&ne.forceSinglePass===!1?(ne.side=Zn,ne.needsUpdate=!0,C.renderBufferDirect(ce,$,oe,ne,D,Ne),ne.side=_r,ne.needsUpdate=!0,C.renderBufferDirect(ce,$,oe,ne,D,Ne),ne.side=ya):C.renderBufferDirect(ce,$,oe,ne,D,Ne),D.onAfterRender(C,$,ce,oe,ne,Ne)}function Si(D,$,ce){$.isScene!==!0&&($=yt);const oe=T.get(D),ne=N.state.lights,Ne=N.state.shadowsArray,ze=ne.state.version,Pe=Xe.getParameters(D,ne.state,Ne,$,ce),ke=Xe.getProgramCacheKey(Pe);let Ze=oe.programs;oe.environment=D.isMeshStandardMaterial?$.environment:null,oe.fog=$.fog,oe.envMap=(D.isMeshStandardMaterial?ge:me).get(D.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&D.envMap===null?$.environmentRotation:D.envMapRotation,Ze===void 0&&(D.addEventListener("dispose",oi),Ze=new Map,oe.programs=Ze);let et=Ze.get(ke);if(et!==void 0){if(oe.currentProgram===et&&oe.lightsStateVersion===ze)return ro(D,Pe),et}else Pe.uniforms=Xe.getUniforms(D),D.onBeforeCompile(Pe,C),et=Xe.acquireProgram(Pe,ke),Ze.set(ke,et),oe.uniforms=Pe.uniforms;const We=oe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(We.clippingPlanes=Ve.uniform),ro(D,Pe),oe.needsLights=Ba(D),oe.lightsStateVersion=ze,oe.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.currentProgram=et,oe.uniformsList=null,et}function nn(D){if(D.uniformsList===null){const $=D.currentProgram.getUniforms();D.uniformsList=_c.seqWithValue($.seq,D.uniforms)}return D.uniformsList}function ro(D,$){const ce=T.get(D);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function Ul(D,$,ce,oe,ne){$.isScene!==!0&&($=yt),K.resetTextureUnits();const Ne=$.fog,ze=oe.isMeshStandardMaterial?$.environment:null,Pe=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Js,ke=(oe.isMeshStandardMaterial?ge:me).get(oe.envMap||ze),Ze=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,et=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!ce.morphAttributes.position,ut=!!ce.morphAttributes.normal,It=!!ce.morphAttributes.color;let Wt=qi;oe.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const Kt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Dt=Kt!==void 0?Kt.length:0,Qe=T.get(oe),ot=N.state.lights;if(Ge===!0&&(ht===!0||D!==ee)){const xn=D===ee&&oe.id===ae;Ve.setState(oe,D,xn)}let xt=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ot.state.version||Qe.outputColorSpace!==Pe||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isBatchedMesh&&Qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==ke||oe.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==et||Qe.morphTargets!==We||Qe.morphNormals!==ut||Qe.morphColors!==It||Qe.toneMapping!==Wt||Qe.morphTargetsCount!==Dt)&&(xt=!0):(xt=!0,Qe.__version=oe.version);let Un=Qe.currentProgram;xt===!0&&(Un=Si(oe,$,ne));let Ii=!1,ln=!1,za=!1;const Ft=Un.getUniforms(),an=Qe.uniforms;if(we.useProgram(Un.program)&&(Ii=!0,ln=!0,za=!0),oe.id!==ae&&(ae=oe.id,ln=!0),Ii||ee!==D){we.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ft.setValue(X,"projectionMatrix",D.projectionMatrix),Ft.setValue(X,"viewMatrix",D.matrixWorldInverse);const An=Ft.map.cameraPosition;An!==void 0&&An.setValue(X,pt.setFromMatrixPosition(D.matrixWorld)),Ee.logarithmicDepthBuffer&&Ft.setValue(X,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ft.setValue(X,"isOrthographic",D.isOrthographicCamera===!0),ee!==D&&(ee=D,ln=!0,za=!0)}if(Qe.needsLights&&(ot.state.directionalShadowMap.length>0&&Ft.setValue(X,"directionalShadowMap",ot.state.directionalShadowMap,K),ot.state.spotShadowMap.length>0&&Ft.setValue(X,"spotShadowMap",ot.state.spotShadowMap,K),ot.state.pointShadowMap.length>0&&Ft.setValue(X,"pointShadowMap",ot.state.pointShadowMap,K)),ne.isSkinnedMesh){Ft.setOptional(X,ne,"bindMatrix"),Ft.setOptional(X,ne,"bindMatrixInverse");const xn=ne.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ft.setValue(X,"boneTexture",xn.boneTexture,K))}ne.isBatchedMesh&&(Ft.setOptional(X,ne,"batchingTexture"),Ft.setValue(X,"batchingTexture",ne._matricesTexture,K),Ft.setOptional(X,ne,"batchingIdTexture"),Ft.setValue(X,"batchingIdTexture",ne._indirectTexture,K),Ft.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(X,"batchingColorTexture",ne._colorsTexture,K));const Vn=ce.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&lt.update(ne,ce,Un),(ln||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Ft.setValue(X,"receiveShadow",ne.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(an.envMap.value=ke,an.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&$.environment!==null&&(an.envMapIntensity.value=$.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=fD()),ln&&(Ft.setValue(X,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&ta(an,za),Ne&&oe.fog===!0&&Ke.refreshFogUniforms(an,Ne),Ke.refreshMaterialUniforms(an,oe,pe,re,N.state.transmissionRenderTarget[D.id]),_c.upload(X,nn(Qe),an,K)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(_c.upload(X,nn(Qe),an,K),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ft.setValue(X,"center",ne.center),Ft.setValue(X,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(X,"normalMatrix",ne.normalMatrix),Ft.setValue(X,"modelMatrix",ne.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const xn=oe.uniformsGroups;for(let An=0,vr=xn.length;An<vr;An++){const na=xn[An];be.update(na,Un),be.bind(na,Un)}}return Un}function ta(D,$){D.ambientLightColor.needsUpdate=$,D.lightProbe.needsUpdate=$,D.directionalLights.needsUpdate=$,D.directionalLightShadows.needsUpdate=$,D.pointLights.needsUpdate=$,D.pointLightShadows.needsUpdate=$,D.spotLights.needsUpdate=$,D.spotLightShadows.needsUpdate=$,D.rectAreaLights.needsUpdate=$,D.hemisphereLights.needsUpdate=$}function Ba(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(D,$,ce){const oe=T.get(D);oe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),T.get(D.texture).__webglTexture=$,T.get(D.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,$){const ce=T.get(D);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0};const Fc=X.createFramebuffer();this.setRenderTarget=function(D,$=0,ce=0){Y=D,H=$,j=ce;let oe=null,ne=!1,Ne=!1;if(D){const Pe=T.get(D);if(Pe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(X.FRAMEBUFFER,Pe.__webglFramebuffer),z.copy(D.viewport),V.copy(D.scissor),k=D.scissorTest,we.viewport(z),we.scissor(V),we.setScissorTest(k),ae=-1;return}else if(Pe.__webglFramebuffer===void 0)K.setupRenderTarget(D);else if(Pe.__hasExternalTextures)K.rebindTextures(D,T.get(D.texture).__webglTexture,T.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const et=D.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&T.has(et)&&(D.width!==et.image.width||D.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(D)}}const ke=D.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const Ze=T.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?oe=Ze[$][ce]:oe=Ze[$],ne=!0):D.samples>0&&K.useMultisampledRTT(D)===!1?oe=T.get(D).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[ce]:oe=Ze,z.copy(D.viewport),V.copy(D.scissor),k=D.scissorTest}else z.copy(te).multiplyScalar(pe).floor(),V.copy(ve).multiplyScalar(pe).floor(),k=Te;if(ce!==0&&(oe=Fc),we.bindFramebuffer(X.FRAMEBUFFER,oe)&&we.drawBuffers(D,oe),we.viewport(z),we.scissor(V),we.setScissorTest(k),ne){const Pe=T.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+$,Pe.__webglTexture,ce)}else if(Ne){const Pe=$;for(let ke=0;ke<D.textures.length;ke++){const Ze=T.get(D.textures[ke]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ke,Ze.__webglTexture,ce,Pe)}}else if(D!==null&&ce!==0){const Pe=T.get(D.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Pe.__webglTexture,ce)}ae=-1},this.readRenderTargetPixels=function(D,$,ce,oe,ne,Ne,ze,Pe=0){if(!(D&&D.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){we.bindFramebuffer(X.FRAMEBUFFER,ke);try{const Ze=D.textures[Pe],et=Ze.format,We=Ze.type;if(!Ee.textureFormatReadable(et)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(We)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=D.width-oe&&ce>=0&&ce<=D.height-ne&&(D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),X.readPixels($,ce,oe,ne,Ce.convert(et),Ce.convert(We),Ne))}finally{const Ze=Y!==null?T.get(Y).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(D,$,ce,oe,ne,Ne,ze,Pe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=T.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if($>=0&&$<=D.width-oe&&ce>=0&&ce<=D.height-ne){we.bindFramebuffer(X.FRAMEBUFFER,ke);const Ze=D.textures[Pe],et=Ze.format,We=Ze.type;if(!Ee.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,ut),X.bufferData(X.PIXEL_PACK_BUFFER,Ne.byteLength,X.STREAM_READ),D.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Pe),X.readPixels($,ce,oe,ne,Ce.convert(et),Ce.convert(We),0);const It=Y!==null?T.get(Y).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,It);const Wt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await PA(X,Wt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,ut),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ne),X.deleteBuffer(ut),X.deleteSync(Wt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,$=null,ce=0){const oe=Math.pow(2,-ce),ne=Math.floor(D.image.width*oe),Ne=Math.floor(D.image.height*oe),ze=$!==null?$.x:0,Pe=$!==null?$.y:0;K.setTexture2D(D,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,ze,Pe,ne,Ne),we.unbindTexture()};const Ll=X.createFramebuffer(),Nl=X.createFramebuffer();this.copyTextureToTexture=function(D,$,ce=null,oe=null,ne=0,Ne=null){Ne===null&&(ne!==0?(gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ne,ne=0):Ne=0);let ze,Pe,ke,Ze,et,We,ut,It,Wt;const Kt=D.isCompressedTexture?D.mipmaps[Ne]:D.image;if(ce!==null)ze=ce.max.x-ce.min.x,Pe=ce.max.y-ce.min.y,ke=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,et=ce.min.y,We=ce.isBox3?ce.min.z:0;else{const Vn=Math.pow(2,-ne);ze=Math.floor(Kt.width*Vn),Pe=Math.floor(Kt.height*Vn),D.isDataArrayTexture?ke=Kt.depth:D.isData3DTexture?ke=Math.floor(Kt.depth*Vn):ke=1,Ze=0,et=0,We=0}oe!==null?(ut=oe.x,It=oe.y,Wt=oe.z):(ut=0,It=0,Wt=0);const Dt=Ce.convert($.format),Qe=Ce.convert($.type);let ot;$.isData3DTexture?(K.setTexture3D($,0),ot=X.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(K.setTexture2DArray($,0),ot=X.TEXTURE_2D_ARRAY):(K.setTexture2D($,0),ot=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,$.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=X.getParameter(X.UNPACK_ROW_LENGTH),Un=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ii=X.getParameter(X.UNPACK_SKIP_PIXELS),ln=X.getParameter(X.UNPACK_SKIP_ROWS),za=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,et),X.pixelStorei(X.UNPACK_SKIP_IMAGES,We);const Ft=D.isDataArrayTexture||D.isData3DTexture,an=$.isDataArrayTexture||$.isData3DTexture;if(D.isDepthTexture){const Vn=T.get(D),xn=T.get($),An=T.get(Vn.__renderTarget),vr=T.get(xn.__renderTarget);we.bindFramebuffer(X.READ_FRAMEBUFFER,An.__webglFramebuffer),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let na=0;na<ke;na++)Ft&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get(D).__webglTexture,ne,We+na),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,T.get($).__webglTexture,Ne,Wt+na)),X.blitFramebuffer(Ze,et,ze,Pe,ut,It,ze,Pe,X.DEPTH_BUFFER_BIT,X.NEAREST);we.bindFramebuffer(X.READ_FRAMEBUFFER,null),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ne!==0||D.isRenderTargetTexture||T.has(D)){const Vn=T.get(D),xn=T.get($);we.bindFramebuffer(X.READ_FRAMEBUFFER,Ll),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,Nl);for(let An=0;An<ke;An++)Ft?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Vn.__webglTexture,ne,We+An):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Vn.__webglTexture,ne),an?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,xn.__webglTexture,Ne,Wt+An):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,xn.__webglTexture,Ne),ne!==0?X.blitFramebuffer(Ze,et,ze,Pe,ut,It,ze,Pe,X.COLOR_BUFFER_BIT,X.NEAREST):an?X.copyTexSubImage3D(ot,Ne,ut,It,Wt+An,Ze,et,ze,Pe):X.copyTexSubImage2D(ot,Ne,ut,It,Ze,et,ze,Pe);we.bindFramebuffer(X.READ_FRAMEBUFFER,null),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else an?D.isDataTexture||D.isData3DTexture?X.texSubImage3D(ot,Ne,ut,It,Wt,ze,Pe,ke,Dt,Qe,Kt.data):$.isCompressedArrayTexture?X.compressedTexSubImage3D(ot,Ne,ut,It,Wt,ze,Pe,ke,Dt,Kt.data):X.texSubImage3D(ot,Ne,ut,It,Wt,ze,Pe,ke,Dt,Qe,Kt):D.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ne,ut,It,ze,Pe,Dt,Qe,Kt.data):D.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ne,ut,It,Kt.width,Kt.height,Dt,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Ne,ut,It,ze,Pe,Dt,Qe,Kt);X.pixelStorei(X.UNPACK_ROW_LENGTH,xt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Un),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ii),X.pixelStorei(X.UNPACK_SKIP_ROWS,ln),X.pixelStorei(X.UNPACK_SKIP_IMAGES,za),Ne===0&&$.generateMipmaps&&X.generateMipmap(ot),we.unbindTexture()},this.initRenderTarget=function(D){T.get(D).__webglFramebuffer===void 0&&K.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?K.setTextureCube(D,0):D.isData3DTexture?K.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?K.setTexture2DArray(D,0):K.setTexture2D(D,0),we.unbindTexture()},this.resetState=function(){H=0,j=0,Y=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const vc=8,hD=`
#define MAX_COLORS ${vc}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer; // in NDC [-1,1]
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;
  vec2 toward = (uPointer - rp);
  q += toward * uMouseInfluence * 0.2;

    vec3 col = vec3(0.0);
    float a = 1.0;

    if (uColorCount > 0) {
      vec2 s = q;
      vec3 sumCol = vec3(0.0);
      float cover = 0.0;
      for (int i = 0; i < MAX_COLORS; ++i) {
            if (i >= uColorCount) break;
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3); // strong response across 0..1
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0); // allow >1 to amplify displacement
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
            float m = mix(m0, m1, kMix);
            float w = 1.0 - exp(-6.0 / exp(6.0 * m));
            sumCol += uColors[i] * w;
            cover = max(cover, w);
      }
      col = clamp(sumCol, 0.0, 1.0);
      a = uTransparent > 0 ? cover : 1.0;
    } else {
        vec2 s = q;
        for (int k = 0; k < 3; ++k) {
            s -= 0.01;
            vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
            float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float kBelow = clamp(uWarpStrength, 0.0, 1.0);
            float kMix = pow(kBelow, 0.3);
            float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
            vec2 disp = (r - s) * kBelow;
            vec2 warped = s + disp * gain;
            float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
            float m = mix(m0, m1, kMix);
            col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
        }
        a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
    }

    if (uNoise > 0.0001) {
      float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
      col += (n - 0.5) * uNoise;
      col = clamp(col, 0.0, 1.0);
    }

    vec3 rgb = (uTransparent > 0) ? col * a : col;
    gl_FragColor = vec4(rgb, a);
}
`,pD=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function mD({className:a,style:e,rotation:n=45,speed:r=.2,colors:o=[],transparent:u=!0,autoRotate:c=0,scale:d=1,frequency:p=1,warpStrength:h=1,mouseInfluence:g=1,parallax:_=.5,noise:v=.1}){const S=A.useRef(null),y=A.useRef(null),b=A.useRef(null),M=A.useRef(null),x=A.useRef(null),U=A.useRef(n),R=A.useRef(c),P=A.useRef(new Ct(0,0)),N=A.useRef(new Ct(0,0)),B=A.useRef(8);return A.useEffect(()=>{const O=S.current,W=new sR,C=new dm(-1,1,1,-1,0,1),L=new Cl(2,2),H=Array.from({length:vc},()=>new fe(0,0,0)),j=new Ni({vertexShader:pD,fragmentShader:hD,uniforms:{uCanvas:{value:new Ct(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new Ct(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:u?1:0},uScale:{value:d},uFrequency:{value:p},uWarpStrength:{value:h},uPointer:{value:new Ct(0,0)},uMouseInfluence:{value:g},uParallax:{value:_},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});M.current=j;const Y=new Ki(L,j);W.add(Y);const ae=new dD({antialias:!1,powerPreference:"high-performance",alpha:!0});y.current=ae,ae.outputColorSpace=ri,ae.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ae.setClearColor(0,u?0:1),ae.domElement.style.width="100%",ae.domElement.style.height="100%",ae.domElement.style.display="block",O.appendChild(ae.domElement);const ee=new gR,z=()=>{const k=O.clientWidth||1,de=O.clientHeight||1;ae.setSize(k,de,!1),j.uniforms.uCanvas.value.set(k,de)};if(z(),"ResizeObserver"in window){const k=new ResizeObserver(z);k.observe(O),x.current=k}else window.addEventListener("resize",z);const V=()=>{const k=ee.getDelta(),de=ee.elapsedTime;j.uniforms.uTime.value=de;const Z=(U.current%360+R.current*de)*Math.PI/180,re=Math.cos(Z),pe=Math.sin(Z);j.uniforms.uRot.value.set(re,pe);const Re=N.current,He=P.current,te=Math.min(1,k*B.current);Re.lerp(He,te),j.uniforms.uPointer.value.copy(Re),ae.render(W,C),b.current=requestAnimationFrame(V)};return b.current=requestAnimationFrame(V),()=>{b.current!==null&&cancelAnimationFrame(b.current),x.current?x.current.disconnect():window.removeEventListener("resize",z),L.dispose(),j.dispose(),ae.dispose(),ae.domElement&&ae.domElement.parentElement===O&&O.removeChild(ae.domElement)}},[p,g,v,_,d,r,u,h]),A.useEffect(()=>{const O=M.current,W=y.current;if(!O)return;U.current=n,R.current=c,O.uniforms.uSpeed.value=r,O.uniforms.uScale.value=d,O.uniforms.uFrequency.value=p,O.uniforms.uWarpStrength.value=h,O.uniforms.uMouseInfluence.value=g,O.uniforms.uParallax.value=_,O.uniforms.uNoise.value=v;const C=H=>{const j=H.replace("#","").trim(),Y=j.length===3?[parseInt(j[0]+j[0],16),parseInt(j[1]+j[1],16),parseInt(j[2]+j[2],16)]:[parseInt(j.slice(0,2),16),parseInt(j.slice(2,4),16),parseInt(j.slice(4,6),16)];return new fe(Y[0]/255,Y[1]/255,Y[2]/255)},L=(o||[]).filter(Boolean).slice(0,vc).map(C);for(let H=0;H<vc;H++){const j=O.uniforms.uColors.value[H];H<L.length?j.copy(L[H]):j.set(0,0,0)}O.uniforms.uColorCount.value=L.length,O.uniforms.uTransparent.value=u?1:0,W&&W.setClearColor(0,u?0:1)},[n,c,r,d,p,h,g,_,v,o,u]),A.useEffect(()=>{const O=M.current,W=S.current;if(!O||!W)return;const C=L=>{const H=W.getBoundingClientRect(),j=(L.clientX-H.left)/(H.width||1)*2-1,Y=-((L.clientY-H.top)/(H.height||1)*2-1);P.current.set(j,Y)};return W.addEventListener("pointermove",C),()=>{W.removeEventListener("pointermove",C)}},[]),$e.jsx("div",{ref:S,className:`color-bends-container ${a}`,style:e})}function gD(){return $e.jsxs($e.Fragment,{children:[$e.jsx(mD,{rotation:0,speed:.2,scale:.9,frequency:1,warpStrength:1,mouseInfluence:1,parallax:0,transparent:!1}),$e.jsx("div",{className:"nav-bar",children:$e.jsxs("ul",{children:[$e.jsx("li",{children:$e.jsx(fl,{to:"/",children:"Home"})}),$e.jsx("li",{children:$e.jsx(fl,{to:"/contact",children:"Contact"})}),$e.jsx("li",{children:$e.jsx(fl,{to:"/about",children:"About"})})]})}),$e.jsxs(ab,{children:[$e.jsx(lc,{path:"/",element:$e.jsx(Q1,{})}),$e.jsx(lc,{path:"/contact",element:$e.jsx(J1,{})}),$e.jsx(lc,{path:"/about",element:$e.jsx($1,{})})]})]})}const _D=sE.createRoot(document.getElementById("root"));_D.render($e.jsx(Cb,{children:$e.jsx(gD,{})}));
