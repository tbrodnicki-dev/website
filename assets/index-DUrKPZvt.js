(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function OM(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var Od={exports:{}},Ko={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function IM(){if(A_)return Ko;A_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var d in o)d!=="key"&&(u[d]=o[d])}else u=o;return o=u.ref,{$$typeof:a,type:r,key:f,ref:o!==void 0?o:null,props:u}}return Ko.Fragment=e,Ko.jsx=n,Ko.jsxs=n,Ko}var R_;function FM(){return R_||(R_=1,Od.exports=IM()),Od.exports}var Xe=FM(),Id={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function BM(){if(C_)return ct;C_=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(O,K,ue){this.props=O,this.context=K,this.refs=b,this.updater=ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function U(O,K,ue){this.props=O,this.context=K,this.refs=b,this.updater=ue||S}var R=U.prototype=new x;R.constructor=U,E(R,y.prototype),R.isPureReactComponent=!0;var P=Array.isArray,N={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function F(O,K,ue,ge,Le,We){return ue=We.ref,{$$typeof:a,type:O,key:K,ref:ue!==void 0?ue:null,props:We}}function W(O,K){return F(O.type,K,void 0,void 0,void 0,O.props)}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function L(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ue){return K[ue]})}var H=/\/+/g;function Z(O,K){return typeof O=="object"&&O!==null&&O.key!=null?L(""+O.key):K.toString(36)}function j(){}function re(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(j,j):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function $(O,K,ue,ge,Le){var We=typeof O;(We==="undefined"||We==="boolean")&&(O=null);var te=!1;if(O===null)te=!0;else switch(We){case"bigint":case"string":case"number":te=!0;break;case"object":switch(O.$$typeof){case a:case e:te=!0;break;case g:return te=O._init,$(te(O._payload),K,ue,ge,Le)}}if(te)return Le=Le(O),te=ge===""?"."+Z(O,0):ge,P(Le)?(ue="",te!=null&&(ue=te.replace(H,"$&/")+"/"),$(Le,K,ue,"",function($e){return $e})):Le!=null&&(A(Le)&&(Le=W(Le,ue+(Le.key==null||O&&O.key===Le.key?"":(""+Le.key).replace(H,"$&/")+"/")+te)),K.push(Le)),1;te=0;var _e=ge===""?".":ge+":";if(P(O))for(var Te=0;Te<O.length;Te++)ge=O[Te],We=_e+Z(ge,Te),te+=$(ge,K,ue,We,Le);else if(Te=v(O),typeof Te=="function")for(O=Te.call(O),Te=0;!(ge=O.next()).done;)ge=ge.value,We=_e+Z(ge,Te++),te+=$(ge,K,ue,We,Le);else if(We==="object"){if(typeof O.then=="function")return $(re(O),K,ue,ge,Le);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return te}function B(O,K,ue){if(O==null)return O;var ge=[],Le=0;return $(O,ge,"","",function(We){return K.call(ue,We,Le++)}),ge}function V(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(ue){(O._status===0||O._status===-1)&&(O._status=1,O._result=ue)},function(ue){(O._status===0||O._status===-1)&&(O._status=2,O._result=ue)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var ee=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function xe(){}return ct.Children={map:B,forEach:function(O,K,ue){B(O,function(){K.apply(this,arguments)},ue)},count:function(O){var K=0;return B(O,function(){K++}),K},toArray:function(O){return B(O,function(K){return K})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ct.Component=y,ct.Fragment=n,ct.Profiler=o,ct.PureComponent=U,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ct.__COMPILER_RUNTIME={__proto__:null,c:function(O){return N.H.useMemoCache(O)}},ct.cache=function(O){return function(){return O.apply(null,arguments)}},ct.cloneElement=function(O,K,ue){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ge=E({},O.props),Le=O.key,We=void 0;if(K!=null)for(te in K.ref!==void 0&&(We=void 0),K.key!==void 0&&(Le=""+K.key),K)!z.call(K,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&K.ref===void 0||(ge[te]=K[te]);var te=arguments.length-2;if(te===1)ge.children=ue;else if(1<te){for(var _e=Array(te),Te=0;Te<te;Te++)_e[Te]=arguments[Te+2];ge.children=_e}return F(O.type,Le,void 0,void 0,We,ge)},ct.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:u,_context:O},O},ct.createElement=function(O,K,ue){var ge,Le={},We=null;if(K!=null)for(ge in K.key!==void 0&&(We=""+K.key),K)z.call(K,ge)&&ge!=="key"&&ge!=="__self"&&ge!=="__source"&&(Le[ge]=K[ge]);var te=arguments.length-2;if(te===1)Le.children=ue;else if(1<te){for(var _e=Array(te),Te=0;Te<te;Te++)_e[Te]=arguments[Te+2];Le.children=_e}if(O&&O.defaultProps)for(ge in te=O.defaultProps,te)Le[ge]===void 0&&(Le[ge]=te[ge]);return F(O,We,void 0,void 0,null,Le)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(O){return{$$typeof:d,render:O}},ct.isValidElement=A,ct.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:V}},ct.memo=function(O,K){return{$$typeof:h,type:O,compare:K===void 0?null:K}},ct.startTransition=function(O){var K=N.T,ue={};N.T=ue;try{var ge=O(),Le=N.S;Le!==null&&Le(ue,ge),typeof ge=="object"&&ge!==null&&typeof ge.then=="function"&&ge.then(xe,ee)}catch(We){ee(We)}finally{N.T=K}},ct.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ct.use=function(O){return N.H.use(O)},ct.useActionState=function(O,K,ue){return N.H.useActionState(O,K,ue)},ct.useCallback=function(O,K){return N.H.useCallback(O,K)},ct.useContext=function(O){return N.H.useContext(O)},ct.useDebugValue=function(){},ct.useDeferredValue=function(O,K){return N.H.useDeferredValue(O,K)},ct.useEffect=function(O,K,ue){var ge=N.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ge.useEffect(O,K)},ct.useId=function(){return N.H.useId()},ct.useImperativeHandle=function(O,K,ue){return N.H.useImperativeHandle(O,K,ue)},ct.useInsertionEffect=function(O,K){return N.H.useInsertionEffect(O,K)},ct.useLayoutEffect=function(O,K){return N.H.useLayoutEffect(O,K)},ct.useMemo=function(O,K){return N.H.useMemo(O,K)},ct.useOptimistic=function(O,K){return N.H.useOptimistic(O,K)},ct.useReducer=function(O,K,ue){return N.H.useReducer(O,K,ue)},ct.useRef=function(O){return N.H.useRef(O)},ct.useState=function(O){return N.H.useState(O)},ct.useSyncExternalStore=function(O,K,ue){return N.H.useSyncExternalStore(O,K,ue)},ct.useTransition=function(){return N.H.useTransition()},ct.version="19.1.0",ct}var w_;function wp(){return w_||(w_=1,Id.exports=BM()),Id.exports}var D=wp(),Fd={exports:{}},Qo={},Bd={exports:{}},zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D_;function zM(){return D_||(D_=1,function(a){function e(B,V){var ee=B.length;B.push(V);e:for(;0<ee;){var xe=ee-1>>>1,O=B[xe];if(0<o(O,V))B[xe]=V,B[ee]=O,ee=xe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var V=B[0],ee=B.pop();if(ee!==V){B[0]=ee;e:for(var xe=0,O=B.length,K=O>>>1;xe<K;){var ue=2*(xe+1)-1,ge=B[ue],Le=ue+1,We=B[Le];if(0>o(ge,ee))Le<O&&0>o(We,ge)?(B[xe]=We,B[Le]=ee,xe=Le):(B[xe]=ge,B[ue]=ee,xe=ue);else if(Le<O&&0>o(We,ee))B[xe]=We,B[Le]=ee,xe=Le;else break e}}return V}function o(B,V){var ee=B.sortIndex-V.sortIndex;return ee!==0?ee:B.id-V.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();a.unstable_now=function(){return f.now()-d}}var m=[],h=[],g=1,_=null,v=3,S=!1,E=!1,b=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=B)r(h),V.sortIndex=V.expirationTime,e(m,V);else break;V=n(h)}}function N(B){if(b=!1,P(B),!E)if(n(m)!==null)E=!0,z||(z=!0,Z());else{var V=n(h);V!==null&&$(N,V.startTime-B)}}var z=!1,F=-1,W=5,A=-1;function L(){return y?!0:!(a.unstable_now()-A<W)}function H(){if(y=!1,z){var B=a.unstable_now();A=B;var V=!0;try{e:{E=!1,b&&(b=!1,U(F),F=-1),S=!0;var ee=v;try{t:{for(P(B),_=n(m);_!==null&&!(_.expirationTime>B&&L());){var xe=_.callback;if(typeof xe=="function"){_.callback=null,v=_.priorityLevel;var O=xe(_.expirationTime<=B);if(B=a.unstable_now(),typeof O=="function"){_.callback=O,P(B),V=!0;break t}_===n(m)&&r(m),P(B)}else r(m);_=n(m)}if(_!==null)V=!0;else{var K=n(h);K!==null&&$(N,K.startTime-B),V=!1}}break e}finally{_=null,v=ee,S=!1}V=void 0}}finally{V?Z():z=!1}}}var Z;if(typeof R=="function")Z=function(){R(H)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,re=j.port2;j.port1.onmessage=H,Z=function(){re.postMessage(null)}}else Z=function(){x(H,0)};function $(B,V){F=x(function(){B(a.unstable_now())},V)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(B){B.callback=null},a.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(B){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var ee=v;v=V;try{return B()}finally{v=ee}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=v;v=B;try{return V()}finally{v=ee}},a.unstable_scheduleCallback=function(B,V,ee){var xe=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?xe+ee:xe):ee=xe,B){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=ee+O,B={id:g++,callback:V,priorityLevel:B,startTime:ee,expirationTime:O,sortIndex:-1},ee>xe?(B.sortIndex=ee,e(h,B),n(m)===null&&B===n(h)&&(b?(U(F),F=-1):b=!0,$(N,ee-xe))):(B.sortIndex=O,e(m,B),E||S||(E=!0,z||(z=!0,Z()))),B},a.unstable_shouldYield=L,a.unstable_wrapCallback=function(B){var V=v;return function(){var ee=v;v=V;try{return B.apply(this,arguments)}finally{v=ee}}}}(zd)),zd}var U_;function HM(){return U_||(U_=1,Bd.exports=zM()),Bd.exports}var Hd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L_;function VM(){if(L_)return Nn;L_=1;var a=wp();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(m,h,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:h,implementation:g}}var f=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return u(m,h,null,g)},Nn.flushSync=function(m){var h=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=h,r.p=g,r.d.f()}},Nn.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,r.d.C(m,h))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin),v=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?r.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Nn.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=d(h.as,h.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&r.d.M(m)},Nn.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,_=d(g,h.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Nn.preloadModule=function(m,h){if(typeof m=="string")if(h){var g=d(h.as,h.crossOrigin);r.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,h){return m(h)},Nn.useFormState=function(m,h,g){return f.H.useFormState(m,h,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var N_;function Kv(){if(N_)return Hd.exports;N_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Hd.exports=VM(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P_;function GM(){if(P_)return Qo;P_=1;var a=HM(),e=wp(),n=Kv();function r(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(u(t)!==t)throw Error(r(188))}function m(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(r(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===s)return d(c),t;if(p===l)return d(c),i;p=p.sibling}throw Error(r(188))}if(s.return!==l.return)s=c,l=p;else{for(var M=!1,C=c.child;C;){if(C===s){M=!0,s=c,l=p;break}if(C===l){M=!0,l=c,s=p;break}C=C.sibling}if(!M){for(C=p.child;C;){if(C===s){M=!0,s=p,l=c;break}if(C===l){M=!0,l=p,s=c;break}C=C.sibling}if(!M)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?t:i}function h(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=h(t),i!==null)return i;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),U=Symbol.for("react.consumer"),R=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var j=Symbol.for("react.client.reference");function re(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===j?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case y:return"Profiler";case b:return"StrictMode";case N:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case R:return(t.displayName||"Context")+".Provider";case U:return(t._context.displayName||"Context")+".Consumer";case P:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case W:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}var $=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},xe=[],O=-1;function K(t){return{current:t}}function ue(t){0>O||(t.current=xe[O],xe[O]=null,O--)}function ge(t,i){O++,xe[O]=t.current,t.current=i}var Le=K(null),We=K(null),te=K(null),_e=K(null);function Te(t,i){switch(ge(te,i),ge(We,t),ge(Le,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?e_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=e_(i),t=t_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ue(Le),ge(Le,t)}function $e(){ue(Le),ue(We),ue(te)}function Ve(t){t.memoizedState!==null&&ge(_e,t);var i=Le.current,s=t_(i,t.type);i!==s&&(ge(We,t),ge(Le,s))}function ht(t){We.current===t&&(ue(Le),ue(We)),_e.current===t&&(ue(_e),Wo._currentValue=ee)}var jt=Object.prototype.hasOwnProperty,pt=a.unstable_scheduleCallback,St=a.unstable_cancelCallback,yt=a.unstable_shouldYield,rt=a.unstable_requestPaint,Tt=a.unstable_now,k=a.unstable_getCurrentPriorityLevel,qt=a.unstable_ImmediatePriority,Mt=a.unstable_UserBlockingPriority,Ee=a.unstable_NormalPriority,Ce=a.unstable_LowPriority,I=a.unstable_IdlePriority,T=a.log,q=a.unstable_setDisableYieldValue,he=null,pe=null;function de(t){if(typeof T=="function"&&q(t),pe&&typeof pe.setStrictMode=="function")try{pe.setStrictMode(he,t)}catch{}}var Oe=Math.clz32?Math.clz32:Qe,Ae=Math.log,ke=Math.LN2;function Qe(t){return t>>>=0,t===0?32:31-(Ae(t)/ke|0)|0}var Me=256,we=4194304;function He(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ye(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var c=0,p=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var C=l&134217727;return C!==0?(l=C&~p,l!==0?c=He(l):(M&=C,M!==0?c=He(M):s||(s=C&~t,s!==0&&(c=He(s))))):(C=l&~p,C!==0?c=He(C):M!==0?c=He(M):s||(s=l&~t,s!==0&&(c=He(s)))),c===0?0:i!==0&&i!==c&&(i&p)===0&&(p=c&-c,s=i&-i,p>=s||p===32&&(s&4194048)!==0)?i:c}function De(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function lt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var t=Me;return Me<<=1,(Me&4194048)===0&&(Me=256),t}function Ie(){var t=we;return we<<=1,(we&62914560)===0&&(we=4194304),t}function Re(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Be(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,i,s,l,c,p){var M=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var C=t.entanglements,G=t.expirationTimes,ae=t.hiddenUpdates;for(s=M&~s;0<s;){var me=31-Oe(s),Se=1<<me;C[me]=0,G[me]=-1;var oe=ae[me];if(oe!==null)for(ae[me]=null,me=0;me<oe.length;me++){var le=oe[me];le!==null&&(le.lane&=-536870913)}s&=~Se}l!==0&&ye(t,l,0),p!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=p&~(M&~i))}function ye(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Oe(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function Ue(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Oe(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}function it(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Pt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:S_(t.type))}function si(t,i){var s=V.p;try{return V.p=t,i()}finally{V.p=s}}var _n=Math.random().toString(36).slice(2),vn="__reactFiber$"+_n,Tn="__reactProps$"+_n,Ui="__reactContainer$"+_n,to="__reactEvents$"+_n,Al="__reactListeners$"+_n,Rl="__reactHandles$"+_n,Li="__reactResources$"+_n,Zi="__reactMarker$"+_n;function Zr(t){delete t[vn],delete t[Tn],delete t[to],delete t[Al],delete t[Rl]}function Ki(t){var i=t[vn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ui]||s[vn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=r_(t);t!==null;){if(s=t[vn])return s;t=r_(t)}return i}t=s,s=t.parentNode}return null}function vi(t){if(t=t[vn]||t[Ui]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function Ua(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(r(33))}function xi(t){var i=t[Li];return i||(i=t[Li]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nn(t){t[Zi]=!0}var no=new Set,Cl={};function Qi(t,i){La(t,i),La(t+"Capture",i)}function La(t,i){for(Cl[t]=i,t=0;t<i.length;t++)no.add(i[t])}var Nc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),wl={},Dl={};function w(t){return jt.call(Dl,t)?!0:jt.call(wl,t)?!1:Nc.test(t)?Dl[t]=!0:(wl[t]=!0,!1)}function Q(t,i,s){if(w(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function ce(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function se(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var ne,Ne;function ze(t){if(ne===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ne=i&&i[1]||"",Ne=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+t+Ne}var Pe=!1;function Ge(t,i){if(!t||Pe)return"";Pe=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(le){var oe=le}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(le){oe=le}t.call(Se.prototype)}}else{try{throw Error()}catch(le){oe=le}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),M=p[0],C=p[1];if(M&&C){var G=M.split(`
`),ae=C.split(`
`);for(c=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;c<ae.length&&!ae[c].includes("DetermineComponentFrameRoot");)c++;if(l===G.length||c===ae.length)for(l=G.length-1,c=ae.length-1;1<=l&&0<=c&&G[l]!==ae[c];)c--;for(;1<=l&&0<=c;l--,c--)if(G[l]!==ae[c]){if(l!==1||c!==1)do if(l--,c--,0>c||G[l]!==ae[c]){var me=`
`+G[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=c);break}}}finally{Pe=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?ze(s):""}function Ze(t){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return Ge(t.type,!1);case 11:return Ge(t.type.render,!1);case 1:return Ge(t.type,!0);case 31:return ze("Activity");default:return""}}function et(t){try{var i="";do i+=Ze(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ot(t){var i=ut(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,p=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Xt(t){t._valueTracker||(t._valueTracker=Ot(t))}function Zt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=ut(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Je=/[\n"\\]/g;function ot(t){return t.replace(Je,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function xt(t,i,s,l,c,p,M,C){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),i!=null?M==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+qe(i)):t.value!==""+qe(i)&&(t.value=""+qe(i)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),i!=null?Ni(t,M,qe(i)):s!=null?Ni(t,M,qe(s)):l!=null&&t.removeAttribute("value"),c==null&&p!=null&&(t.defaultChecked=!!p),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+qe(C):t.removeAttribute("name")}function Un(t,i,s,l,c,p,M,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(t.type=p),i!=null||s!=null){if(!(p!=="submit"&&p!=="reset"||i!=null))return;s=s!=null?""+qe(s):"",i=i!=null?""+qe(i):s,C||i===t.value||(t.value=i),t.defaultValue=i}l=l??c,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=C?t.checked:!!l,t.defaultChecked=!!l,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function Ni(t,i,s){i==="number"&&wt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function ln(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+qe(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function Na(t,i,s){if(i!=null&&(i=""+qe(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+qe(s):""}function It(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if($(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=qe(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function an(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xn(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Vn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function An(t,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var c in i)l=i[c],i.hasOwnProperty(c)&&s[c]!==l&&xn(t,c,l)}else for(var p in i)i.hasOwnProperty(p)&&xn(t,p,i[p])}function pr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),PS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ul(t){return PS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Pc=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Kr=null,Qr=null;function nm(t){var i=vi(t);if(i&&(t=i.stateNode)){var s=t[Tn]||null;e:switch(t=i.stateNode,i.type){case"input":if(xt(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ot(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=l[Tn]||null;if(!c)throw Error(r(90));xt(l,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Zt(l)}break e;case"textarea":Na(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&ln(t,!!s.multiple,i,!1)}}}var Ic=!1;function im(t,i,s){if(Ic)return t(i,s);Ic=!0;try{var l=t(i);return l}finally{if(Ic=!1,(Kr!==null||Qr!==null)&&(gu(),Kr&&(i=Kr,t=Qr,Qr=Kr=null,nm(i),t)))for(i=0;i<t.length;i++)nm(t[i])}}function io(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Tn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if($i)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Fc=!1}var Pa=null,Bc=null,Ll=null;function am(){if(Ll)return Ll;var t,i=Bc,s=i.length,l,c="value"in Pa?Pa.value:Pa.textContent,p=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[p-l];l++);return Ll=c.slice(t,1<l?1-l:void 0)}function Nl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function rm(){return!1}function Gn(t){function i(s,l,c,p,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(s=t[C],this[C]=s?s(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Pl:rm,this.isPropagationStopped=rm,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),i}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Gn(mr),ro=g({},mr,{view:0,detail:0}),OS=Gn(ro),zc,Hc,so,Il=g({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(zc=t.screenX-so.screenX,Hc=t.screenY-so.screenY):Hc=zc=0,so=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),sm=Gn(Il),IS=g({},Il,{dataTransfer:0}),FS=Gn(IS),BS=g({},ro,{relatedTarget:0}),Vc=Gn(BS),zS=g({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),HS=Gn(zS),VS=g({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),GS=Gn(VS),kS=g({},mr,{data:0}),om=Gn(kS),XS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YS(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=qS[t])?!!i[t]:!1}function Gc(){return YS}var jS=g({},ro,{key:function(t){if(t.key){var i=XS[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?WS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(t){return t.type==="keypress"?Nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=Gn(jS),KS=g({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=Gn(KS),QS=g({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),JS=Gn(QS),$S=g({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ey=Gn($S),ty=g({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ny=Gn(ty),iy=g({},mr,{newState:0,oldState:0}),ay=Gn(iy),ry=[9,13,27,32],kc=$i&&"CompositionEvent"in window,oo=null;$i&&"documentMode"in document&&(oo=document.documentMode);var sy=$i&&"TextEvent"in window&&!oo,um=$i&&(!kc||oo&&8<oo&&11>=oo),cm=" ",fm=!1;function dm(t,i){switch(t){case"keyup":return ry.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function oy(t,i){switch(t){case"compositionend":return hm(i);case"keypress":return i.which!==32?null:(fm=!0,cm);case"textInput":return t=i.data,t===cm&&fm?null:t;default:return null}}function ly(t,i){if(Jr)return t==="compositionend"||!kc&&dm(t,i)?(t=am(),Ll=Bc=Pa=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return um&&i.locale!=="ko"?null:i.data;default:return null}}var uy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!uy[t.type]:i==="textarea"}function mm(t,i,s,l){Kr?Qr?Qr.push(l):Qr=[l]:Kr=l,i=Mu(i,"onChange"),0<i.length&&(s=new Ol("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var lo=null,uo=null;function cy(t){Z0(t,0)}function Fl(t){var i=Ua(t);if(Zt(i))return t}function gm(t,i){if(t==="change")return i}var _m=!1;if($i){var Xc;if($i){var Wc="oninput"in document;if(!Wc){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Wc=typeof vm.oninput=="function"}Xc=Wc}else Xc=!1;_m=Xc&&(!document.documentMode||9<document.documentMode)}function xm(){lo&&(lo.detachEvent("onpropertychange",Sm),uo=lo=null)}function Sm(t){if(t.propertyName==="value"&&Fl(uo)){var i=[];mm(i,uo,t,Oc(t)),im(cy,i)}}function fy(t,i,s){t==="focusin"?(xm(),lo=i,uo=s,lo.attachEvent("onpropertychange",Sm)):t==="focusout"&&xm()}function dy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(uo)}function hy(t,i){if(t==="click")return Fl(i)}function py(t,i){if(t==="input"||t==="change")return Fl(i)}function my(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Zn=typeof Object.is=="function"?Object.is:my;function co(t,i){if(Zn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!jt.call(i,c)||!Zn(t[c],i[c]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mm(t,i){var s=ym(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ym(s)}}function Em(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Em(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=wt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=wt(t.document)}return i}function qc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var gy=$i&&"documentMode"in document&&11>=document.documentMode,$r=null,Yc=null,fo=null,jc=!1;function Tm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jc||$r==null||$r!==wt(l)||(l=$r,"selectionStart"in l&&qc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),fo&&co(fo,l)||(fo=l,l=Mu(Yc,"onSelect"),0<l.length&&(i=new Ol("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=$r)))}function gr(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var es={animationend:gr("Animation","AnimationEnd"),animationiteration:gr("Animation","AnimationIteration"),animationstart:gr("Animation","AnimationStart"),transitionrun:gr("Transition","TransitionRun"),transitionstart:gr("Transition","TransitionStart"),transitioncancel:gr("Transition","TransitionCancel"),transitionend:gr("Transition","TransitionEnd")},Zc={},Am={};$i&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function _r(t){if(Zc[t])return Zc[t];if(!es[t])return t;var i=es[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Am)return Zc[t]=i[s];return t}var Rm=_r("animationend"),Cm=_r("animationiteration"),wm=_r("animationstart"),_y=_r("transitionrun"),vy=_r("transitionstart"),xy=_r("transitioncancel"),Dm=_r("transitionend"),Um=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function Si(t,i){Um.set(t,i),Qi(i,[t])}var Lm=new WeakMap;function oi(t,i){if(typeof t=="object"&&t!==null){var s=Lm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:et(i)},Lm.set(t,i),i)}return{value:t,source:i,stack:et(i)}}var li=[],ts=0,Qc=0;function Bl(){for(var t=ts,i=Qc=ts=0;i<t;){var s=li[i];li[i++]=null;var l=li[i];li[i++]=null;var c=li[i];li[i++]=null;var p=li[i];if(li[i++]=null,l!==null&&c!==null){var M=l.pending;M===null?c.next=c:(c.next=M.next,M.next=c),l.pending=c}p!==0&&Nm(s,c,p)}}function zl(t,i,s,l){li[ts++]=t,li[ts++]=i,li[ts++]=s,li[ts++]=l,Qc|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Jc(t,i,s,l){return zl(t,i,s,l),Hl(t)}function ns(t,i){return zl(t,null,null,i),Hl(t)}function Nm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var c=!1,p=t.return;p!==null;)p.childLanes|=s,l=p.alternate,l!==null&&(l.childLanes|=s),p.tag===22&&(t=p.stateNode,t===null||t._visibility&1||(c=!0)),t=p,p=p.return;return t.tag===3?(p=t.stateNode,c&&i!==null&&(c=31-Oe(s),t=p.hiddenUpdates,l=t[c],l===null?t[c]=[i]:l.push(i),i.lane=s|536870912),p):null}function Hl(t){if(50<Fo)throw Fo=0,rd=null,Error(r(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var is={};function Sy(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,s,l){return new Sy(t,i,s,l)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ea(t,i){var s=t.alternate;return s===null?(s=Kn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Pm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Vl(t,i,s,l,c,p){var M=0;if(l=t,typeof t=="function")$c(t)&&(M=1);else if(typeof t=="string")M=MM(t,s,Le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=Kn(31,s,i,c),t.elementType=A,t.lanes=p,t;case E:return vr(s.children,c,p,i);case b:M=8,c|=24;break;case y:return t=Kn(12,s,i,c|2),t.elementType=y,t.lanes=p,t;case N:return t=Kn(13,s,i,c),t.elementType=N,t.lanes=p,t;case z:return t=Kn(19,s,i,c),t.elementType=z,t.lanes=p,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case R:M=10;break e;case U:M=9;break e;case P:M=11;break e;case F:M=14;break e;case W:M=16,l=null;break e}M=29,s=Error(r(130,t===null?"null":typeof t,"")),l=null}return i=Kn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function vr(t,i,s,l){return t=Kn(7,t,l,i),t.lanes=s,t}function ef(t,i,s){return t=Kn(6,t,null,i),t.lanes=s,t}function tf(t,i,s){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var as=[],rs=0,Gl=null,kl=0,ui=[],ci=0,xr=null,ta=1,na="";function Sr(t,i){as[rs++]=kl,as[rs++]=Gl,Gl=t,kl=i}function Om(t,i,s){ui[ci++]=ta,ui[ci++]=na,ui[ci++]=xr,xr=t;var l=ta;t=na;var c=32-Oe(l)-1;l&=~(1<<c),s+=1;var p=32-Oe(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,ta=1<<32-Oe(i)+c|s<<c|l,na=p+t}else ta=1<<p|s<<c|l,na=t}function nf(t){t.return!==null&&(Sr(t,1),Om(t,1,0))}function af(t){for(;t===Gl;)Gl=as[--rs],as[rs]=null,kl=as[--rs],as[rs]=null;for(;t===xr;)xr=ui[--ci],ui[ci]=null,na=ui[--ci],ui[ci]=null,ta=ui[--ci],ui[ci]=null}var Bn=null,en=null,Nt=!1,yr=null,Pi=!1,rf=Error(r(519));function Mr(t){var i=Error(r(418,""));throw mo(oi(i,t)),rf}function Im(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[vn]=t,i[Tn]=l,s){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(s=0;s<zo.length;s++)vt(zo[s],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":vt("invalid",i),Un(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Xt(i);break;case"select":vt("invalid",i);break;case"textarea":vt("invalid",i),It(i,l.value,l.defaultValue,l.children),Xt(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||$0(i.textContent,s)?(l.popover!=null&&(vt("beforetoggle",i),vt("toggle",i)),l.onScroll!=null&&vt("scroll",i),l.onScrollEnd!=null&&vt("scrollend",i),l.onClick!=null&&(i.onclick=Eu),i=!0):i=!1,i||Mr(t)}function Fm(t){for(Bn=t.return;Bn;)switch(Bn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Bn=Bn.return}}function ho(t){if(t!==Bn)return!1;if(!Nt)return Fm(t),Nt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||yd(t.type,t.memoizedProps)),s=!s),s&&en&&Mr(t),Fm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){en=Mi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}en=null}}else i===27?(i=en,Ka(t.type)?(t=Td,Td=null,en=t):en=i):en=Bn?Mi(t.stateNode.nextSibling):null;return!0}function po(){en=Bn=null,Nt=!1}function Bm(){var t=yr;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),yr=null),t}function mo(t){yr===null?yr=[t]:yr.push(t)}var sf=K(null),Er=null,ia=null;function Oa(t,i,s){ge(sf,i._currentValue),i._currentValue=s}function aa(t){t._currentValue=sf.current,ue(sf)}function of(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function lf(t,i,s,l){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var p=c.dependencies;if(p!==null){var M=c.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=c;for(var G=0;G<i.length;G++)if(C.context===i[G]){p.lanes|=s,C=p.alternate,C!==null&&(C.lanes|=s),of(p.return,s,t),l||(M=null);break e}p=C.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=s,p=M.alternate,p!==null&&(p.lanes|=s),of(M,s,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function go(t,i,s,l){t=null;for(var c=i,p=!1;c!==null;){if(!p){if((c.flags&524288)!==0)p=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var C=c.type;Zn(c.pendingProps.value,M.value)||(t!==null?t.push(C):t=[C])}}else if(c===_e.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(Wo):t=[Wo])}c=c.return}t!==null&&lf(i,t,s,l),i.flags|=262144}function Xl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function br(t){Er=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ln(t){return zm(Er,t)}function Wl(t,i){return Er===null&&br(t),zm(t,i)}function zm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ia===null){if(t===null)throw Error(r(308));ia=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ia=ia.next=i;return s}var yy=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},My=a.unstable_scheduleCallback,Ey=a.unstable_NormalPriority,hn={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new yy,data:new Map,refCount:0}}function _o(t){t.refCount--,t.refCount===0&&My(Ey,function(){t.controller.abort()})}var vo=null,cf=0,ss=0,os=null;function by(t,i){if(vo===null){var s=vo=[];cf=0,ss=dd(),os={status:"pending",value:void 0,then:function(l){s.push(l)}}}return cf++,i.then(Hm,Hm),i}function Hm(){if(--cf===0&&vo!==null){os!==null&&(os.status="fulfilled");var t=vo;vo=null,ss=0,os=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function Ty(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(c){s.push(c)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var c=0;c<s.length;c++)(0,s[c])(i)},function(c){for(l.status="rejected",l.reason=c,c=0;c<s.length;c++)(0,s[c])(void 0)}),l}var Vm=B.S;B.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&by(t,i),Vm!==null&&Vm(t,i)};var Tr=K(null);function ff(){var t=Tr.current;return t!==null?t:Yt.pooledCache}function ql(t,i){i===null?ge(Tr,Tr.current):ge(Tr,i.pool)}function Gm(){var t=ff();return t===null?null:{parent:hn._currentValue,pool:t}}var xo=Error(r(460)),km=Error(r(474)),Yl=Error(r(542)),df={then:function(){}};function Xm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function jl(){}function Wm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(jl,jl),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ym(t),t;default:if(typeof i.status=="string")i.then(jl,jl);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=l}},function(l){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ym(t),t}throw So=i,xo}}var So=null;function qm(){if(So===null)throw Error(r(459));var t=So;return So=null,t}function Ym(t){if(t===xo||t===Yl)throw Error(r(483))}var Ia=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ft&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,i=Hl(t),Nm(t,null,s),i}return zl(t,l,i,s),Hl(t)}function yo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ue(t,s)}}function mf(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,p=null;if(s=s.firstBaseUpdate,s!==null){do{var M={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};p===null?c=p=M:p=p.next=M,s=s.next}while(s!==null);p===null?c=p=i:p=p.next=i}else c=p=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var gf=!1;function Mo(){if(gf){var t=os;if(t!==null)throw t}}function Eo(t,i,s,l){gf=!1;var c=t.updateQueue;Ia=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var G=C,ae=G.next;G.next=null,M===null?p=ae:M.next=ae,M=G;var me=t.alternate;me!==null&&(me=me.updateQueue,C=me.lastBaseUpdate,C!==M&&(C===null?me.firstBaseUpdate=ae:C.next=ae,me.lastBaseUpdate=G))}if(p!==null){var Se=c.baseState;M=0,me=ae=G=null,C=p;do{var oe=C.lane&-536870913,le=oe!==C.lane;if(le?(bt&oe)===oe:(l&oe)===oe){oe!==0&&oe===ss&&(gf=!0),me!==null&&(me=me.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var at=t,tt=C;oe=i;var Gt=s;switch(tt.tag){case 1:if(at=tt.payload,typeof at=="function"){Se=at.call(Gt,Se,oe);break e}Se=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=tt.payload,oe=typeof at=="function"?at.call(Gt,Se,oe):at,oe==null)break e;Se=g({},Se,oe);break e;case 2:Ia=!0}}oe=C.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=c.callbacks,le===null?c.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},me===null?(ae=me=le,G=Se):me=me.next=le,M|=oe;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;le=C,C=le.next,le.next=null,c.lastBaseUpdate=le,c.shared.pending=null}}while(!0);me===null&&(G=Se),c.baseState=G,c.firstBaseUpdate=ae,c.lastBaseUpdate=me,p===null&&(c.shared.lanes=0),qa|=M,t.lanes=M,t.memoizedState=Se}}function jm(t,i){if(typeof t!="function")throw Error(r(191,t));t.call(i)}function Zm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)jm(s[t],i)}var ls=K(null),Zl=K(0);function Km(t,i){t=fa,ge(Zl,t),ge(ls,i),fa=t|i.baseLanes}function _f(){ge(Zl,fa),ge(ls,ls.current)}function vf(){fa=Zl.current,ue(ls),ue(Zl)}var za=0,mt=null,Ht=null,un=null,Kl=!1,us=!1,Ar=!1,Ql=0,bo=0,cs=null,Ay=0;function rn(){throw Error(r(321))}function xf(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Zn(t[s],i[s]))return!1;return!0}function Sf(t,i,s,l,c,p){return za=p,mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=t===null||t.memoizedState===null?Ng:Pg,Ar=!1,p=s(l,c),Ar=!1,us&&(p=Jm(i,s,l,c)),Qm(t),p}function Qm(t){B.H=iu;var i=Ht!==null&&Ht.next!==null;if(za=0,un=Ht=mt=null,Kl=!1,bo=0,cs=null,i)throw Error(r(300));t===null||Sn||(t=t.dependencies,t!==null&&Xl(t)&&(Sn=!0))}function Jm(t,i,s,l){mt=t;var c=0;do{if(us&&(cs=null),bo=0,us=!1,25<=c)throw Error(r(301));if(c+=1,un=Ht=null,t.updateQueue!=null){var p=t.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}B.H=Ny,p=i(s,l)}while(us);return p}function Ry(){var t=B.H,i=t.useState()[0];return i=typeof i.then=="function"?To(i):i,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(mt.flags|=1024),i}function yf(){var t=Ql!==0;return Ql=0,t}function Mf(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Ef(t){if(Kl){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Kl=!1}za=0,un=Ht=mt=null,us=!1,bo=Ql=0,cs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?mt.memoizedState=un=t:un=un.next=t,un}function cn(){if(Ht===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var i=un===null?mt.memoizedState:un.next;if(i!==null)un=i,Ht=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},un===null?mt.memoizedState=un=t:un=un.next=t}return un}function bf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(t){var i=bo;return bo+=1,cs===null&&(cs=[]),t=Wm(cs,t,i),i=mt,(un===null?i.memoizedState:un.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Ng:Pg),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return To(t);if(t.$$typeof===R)return Ln(t)}throw Error(r(438,String(t)))}function Tf(t){var i=null,s=mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=bf(),mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=L;return i.index++,s}function ra(t,i){return typeof i=="function"?i(t):i}function $l(t){var i=cn();return Af(i,Ht,t)}function Af(t,i,s){var l=t.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var c=t.baseQueue,p=l.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}i.baseQueue=c=p,l.pending=null}if(p=t.baseState,c===null)t.memoizedState=p;else{i=c.next;var C=M=null,G=null,ae=i,me=!1;do{var Se=ae.lane&-536870913;if(Se!==ae.lane?(bt&Se)===Se:(za&Se)===Se){var oe=ae.revertLane;if(oe===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),Se===ss&&(me=!0);else if((za&oe)===oe){ae=ae.next,oe===ss&&(me=!0);continue}else Se={lane:0,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(C=G=Se,M=p):G=G.next=Se,mt.lanes|=oe,qa|=oe;Se=ae.action,Ar&&s(p,Se),p=ae.hasEagerState?ae.eagerState:s(p,Se)}else oe={lane:Se,revertLane:ae.revertLane,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null},G===null?(C=G=oe,M=p):G=G.next=oe,mt.lanes|=Se,qa|=Se;ae=ae.next}while(ae!==null&&ae!==i);if(G===null?M=p:G.next=C,!Zn(p,t.memoizedState)&&(Sn=!0,me&&(s=os,s!==null)))throw s;t.memoizedState=p,t.baseState=M,t.baseQueue=G,l.lastRenderedState=p}return c===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Rf(t){var i=cn(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,p=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);Zn(p,i.memoizedState)||(Sn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),s.lastRenderedState=p}return[p,l]}function $m(t,i,s){var l=mt,c=cn(),p=Nt;if(p){if(s===void 0)throw Error(r(407));s=s()}else s=i();var M=!Zn((Ht||c).memoizedState,s);M&&(c.memoizedState=s,Sn=!0),c=c.queue;var C=ng.bind(null,l,c,t);if(Ao(2048,8,C,[t]),c.getSnapshot!==i||M||un!==null&&un.memoizedState.tag&1){if(l.flags|=2048,fs(9,eu(),tg.bind(null,l,c,s,i),null),Yt===null)throw Error(r(349));p||(za&124)!==0||eg(l,i,s)}return s}function eg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=mt.updateQueue,i===null?(i=bf(),mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function tg(t,i,s,l){i.value=s,i.getSnapshot=l,ig(i)&&ag(t)}function ng(t,i,s){return s(function(){ig(i)&&ag(t)})}function ig(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Zn(t,s)}catch{return!0}}function ag(t){var i=ns(t,2);i!==null&&ti(i,t,2)}function Cf(t){var i=kn();if(typeof t=="function"){var s=t;if(t=s(),Ar){de(!0);try{s()}finally{de(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},i}function rg(t,i,s,l){return t.baseState=s,Af(t,Ht,typeof l=="function"?l:ra)}function Cy(t,i,s,l,c){if(nu(t))throw Error(r(485));if(t=i.action,t!==null){var p={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){p.listeners.push(M)}};B.T!==null?s(!0):p.isTransition=!1,l(p),s=i.pending,s===null?(p.next=i.pending=p,sg(i,p)):(p.next=s.next,i.pending=s.next=p)}}function sg(t,i){var s=i.action,l=i.payload,c=t.state;if(i.isTransition){var p=B.T,M={};B.T=M;try{var C=s(c,l),G=B.S;G!==null&&G(M,C),og(t,i,C)}catch(ae){wf(t,i,ae)}finally{B.T=p}}else try{p=s(c,l),og(t,i,p)}catch(ae){wf(t,i,ae)}}function og(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){lg(t,i,l)},function(l){return wf(t,i,l)}):lg(t,i,s)}function lg(t,i,s){i.status="fulfilled",i.value=s,ug(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,sg(t,s)))}function wf(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,ug(i),i=i.next;while(i!==l)}t.action=null}function ug(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function cg(t,i){return i}function fg(t,i){if(Nt){var s=Yt.formState;if(s!==null){e:{var l=mt;if(Nt){if(en){t:{for(var c=en,p=Pi;c.nodeType!==8;){if(!p){c=null;break t}if(c=Mi(c.nextSibling),c===null){c=null;break t}}p=c.data,c=p==="F!"||p==="F"?c:null}if(c){en=Mi(c.nextSibling),l=c.data==="F!";break e}}Mr(l)}l=!1}l&&(i=s[0])}}return s=kn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:i},s.queue=l,s=Dg.bind(null,mt,l),l.dispatch=s,l=Cf(!1),p=Pf.bind(null,mt,!1,l.queue),l=kn(),c={state:i,dispatch:null,action:t,pending:null},l.queue=c,s=Cy.bind(null,mt,c,p,s),c.dispatch=s,l.memoizedState=t,[i,s,!1]}function dg(t){var i=cn();return hg(i,Ht,t)}function hg(t,i,s){if(i=Af(t,i,cg)[0],t=$l(ra)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=To(i)}catch(M){throw M===xo?Yl:M}else l=i;i=cn();var c=i.queue,p=c.dispatch;return s!==i.memoizedState&&(mt.flags|=2048,fs(9,eu(),wy.bind(null,c,s),null)),[l,p,t]}function wy(t,i){t.action=i}function pg(t){var i=cn(),s=Ht;if(s!==null)return hg(i,s,t);cn(),i=i.memoizedState,s=cn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function fs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=mt.updateQueue,i===null&&(i=bf(),mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function eu(){return{destroy:void 0,resource:void 0}}function mg(){return cn().memoizedState}function tu(t,i,s,l){var c=kn();l=l===void 0?null:l,mt.flags|=t,c.memoizedState=fs(1|i,eu(),s,l)}function Ao(t,i,s,l){var c=cn();l=l===void 0?null:l;var p=c.memoizedState.inst;Ht!==null&&l!==null&&xf(l,Ht.memoizedState.deps)?c.memoizedState=fs(i,p,s,l):(mt.flags|=t,c.memoizedState=fs(1|i,p,s,l))}function gg(t,i){tu(8390656,8,t,i)}function _g(t,i){Ao(2048,8,t,i)}function vg(t,i){return Ao(4,2,t,i)}function xg(t,i){return Ao(4,4,t,i)}function Sg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function yg(t,i,s){s=s!=null?s.concat([t]):null,Ao(4,4,Sg.bind(null,i,t),s)}function Df(){}function Mg(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&xf(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Eg(t,i){var s=cn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&xf(i,l[1]))return l[0];if(l=t(),Ar){de(!0);try{t()}finally{de(!1)}}return s.memoizedState=[l,i],l}function Uf(t,i,s){return s===void 0||(za&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=A0(),mt.lanes|=t,qa|=t,s)}function bg(t,i,s,l){return Zn(s,i)?s:ls.current!==null?(t=Uf(t,s,l),Zn(t,i)||(Sn=!0),t):(za&42)===0?(Sn=!0,t.memoizedState=s):(t=A0(),mt.lanes|=t,qa|=t,i)}function Tg(t,i,s,l,c){var p=V.p;V.p=p!==0&&8>p?p:8;var M=B.T,C={};B.T=C,Pf(t,!1,i,s);try{var G=c(),ae=B.S;if(ae!==null&&ae(C,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var me=Ty(G,l);Ro(t,i,me,ei(t))}else Ro(t,i,l,ei(t))}catch(Se){Ro(t,i,{then:function(){},status:"rejected",reason:Se},ei())}finally{V.p=p,B.T=M}}function Dy(){}function Lf(t,i,s,l){if(t.tag!==5)throw Error(r(476));var c=Ag(t).queue;Tg(t,c,i,ee,s===null?Dy:function(){return Rg(t),s(l)})}function Ag(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Rg(t){var i=Ag(t).next.queue;Ro(t,i,{},ei())}function Nf(){return Ln(Wo)}function Cg(){return cn().memoizedState}function wg(){return cn().memoizedState}function Uy(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=ei();t=Fa(s);var l=Ba(i,t,s);l!==null&&(ti(l,i,s),yo(l,i,s)),i={cache:uf()},t.payload=i;return}i=i.return}}function Ly(t,i,s){var l=ei();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},nu(t)?Ug(i,s):(s=Jc(t,i,s,l),s!==null&&(ti(s,t,l),Lg(s,i,l)))}function Dg(t,i,s){var l=ei();Ro(t,i,s,l)}function Ro(t,i,s,l){var c={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(nu(t))Ug(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,C=p(M,s);if(c.hasEagerState=!0,c.eagerState=C,Zn(C,M))return zl(t,i,c,0),Yt===null&&Bl(),!1}catch{}finally{}if(s=Jc(t,i,c,l),s!==null)return ti(s,t,l),Lg(s,i,l),!0}return!1}function Pf(t,i,s,l){if(l={lane:2,revertLane:dd(),action:l,hasEagerState:!1,eagerState:null,next:null},nu(t)){if(i)throw Error(r(479))}else i=Jc(t,s,l,2),i!==null&&ti(i,t,2)}function nu(t){var i=t.alternate;return t===mt||i!==null&&i===mt}function Ug(t,i){us=Kl=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Lg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ue(t,s)}}var iu={readContext:Ln,use:Jl,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn},Ng={readContext:Ln,use:Jl,useCallback:function(t,i){return kn().memoizedState=[t,i===void 0?null:i],t},useContext:Ln,useEffect:gg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,tu(4194308,4,Sg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return tu(4194308,4,t,i)},useInsertionEffect:function(t,i){tu(4,2,t,i)},useMemo:function(t,i){var s=kn();i=i===void 0?null:i;var l=t();if(Ar){de(!0);try{t()}finally{de(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=kn();if(s!==void 0){var c=s(i);if(Ar){de(!0);try{s(i)}finally{de(!1)}}}else c=i;return l.memoizedState=l.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},l.queue=t,t=t.dispatch=Ly.bind(null,mt,t),[l.memoizedState,t]},useRef:function(t){var i=kn();return t={current:t},i.memoizedState=t},useState:function(t){t=Cf(t);var i=t.queue,s=Dg.bind(null,mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Df,useDeferredValue:function(t,i){var s=kn();return Uf(s,t,i)},useTransition:function(){var t=Cf(!1);return t=Tg.bind(null,mt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=mt,c=kn();if(Nt){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Yt===null)throw Error(r(349));(bt&124)!==0||eg(l,i,s)}c.memoizedState=s;var p={value:s,getSnapshot:i};return c.queue=p,gg(ng.bind(null,l,p,t),[t]),l.flags|=2048,fs(9,eu(),tg.bind(null,l,p,s,i),null),s},useId:function(){var t=kn(),i=Yt.identifierPrefix;if(Nt){var s=na,l=ta;s=(l&~(1<<32-Oe(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Ql++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=Ay++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Nf,useFormState:fg,useActionState:fg,useOptimistic:function(t){var i=kn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Pf.bind(null,mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:Tf,useCacheRefresh:function(){return kn().memoizedState=Uy.bind(null,mt)}},Pg={readContext:Ln,use:Jl,useCallback:Mg,useContext:Ln,useEffect:_g,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:$l,useRef:mg,useState:function(){return $l(ra)},useDebugValue:Df,useDeferredValue:function(t,i){var s=cn();return bg(s,Ht.memoizedState,t,i)},useTransition:function(){var t=$l(ra)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Nf,useFormState:dg,useActionState:dg,useOptimistic:function(t,i){var s=cn();return rg(s,Ht,t,i)},useMemoCache:Tf,useCacheRefresh:wg},Ny={readContext:Ln,use:Jl,useCallback:Mg,useContext:Ln,useEffect:_g,useImperativeHandle:yg,useInsertionEffect:vg,useLayoutEffect:xg,useMemo:Eg,useReducer:Rf,useRef:mg,useState:function(){return Rf(ra)},useDebugValue:Df,useDeferredValue:function(t,i){var s=cn();return Ht===null?Uf(s,t,i):bg(s,Ht.memoizedState,t,i)},useTransition:function(){var t=Rf(ra)[0],i=cn().memoizedState;return[typeof t=="boolean"?t:To(t),i]},useSyncExternalStore:$m,useId:Cg,useHostTransitionStatus:Nf,useFormState:pg,useActionState:pg,useOptimistic:function(t,i){var s=cn();return Ht!==null?rg(s,Ht,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:wg},ds=null,Co=0;function au(t){var i=Co;return Co+=1,ds===null&&(ds=[]),Wm(ds,t,i)}function wo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function ru(t,i){throw i.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(i),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Og(t){var i=t._init;return i(t._payload)}function Ig(t){function i(J,X){if(t){var ie=J.deletions;ie===null?(J.deletions=[X],J.flags|=16):ie.push(X)}}function s(J,X){if(!t)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function l(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function c(J,X){return J=ea(J,X),J.index=0,J.sibling=null,J}function p(J,X,ie){return J.index=ie,t?(ie=J.alternate,ie!==null?(ie=ie.index,ie<X?(J.flags|=67108866,X):ie):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function M(J){return t&&J.alternate===null&&(J.flags|=67108866),J}function C(J,X,ie,ve){return X===null||X.tag!==6?(X=ef(ie,J.mode,ve),X.return=J,X):(X=c(X,ie),X.return=J,X)}function G(J,X,ie,ve){var je=ie.type;return je===E?me(J,X,ie.props.children,ve,ie.key):X!==null&&(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===W&&Og(je)===X.type)?(X=c(X,ie.props),wo(X,ie),X.return=J,X):(X=Vl(ie.type,ie.key,ie.props,null,J.mode,ve),wo(X,ie),X.return=J,X)}function ae(J,X,ie,ve){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=tf(ie,J.mode,ve),X.return=J,X):(X=c(X,ie.children||[]),X.return=J,X)}function me(J,X,ie,ve,je){return X===null||X.tag!==7?(X=vr(ie,J.mode,ve,je),X.return=J,X):(X=c(X,ie),X.return=J,X)}function Se(J,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=ef(""+X,J.mode,ie),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return ie=Vl(X.type,X.key,X.props,null,J.mode,ie),wo(ie,X),ie.return=J,ie;case S:return X=tf(X,J.mode,ie),X.return=J,X;case W:var ve=X._init;return X=ve(X._payload),Se(J,X,ie)}if($(X)||Z(X))return X=vr(X,J.mode,ie,null),X.return=J,X;if(typeof X.then=="function")return Se(J,au(X),ie);if(X.$$typeof===R)return Se(J,Wl(J,X),ie);ru(J,X)}return null}function oe(J,X,ie,ve){var je=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return je!==null?null:C(J,X,""+ie,ve);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:return ie.key===je?G(J,X,ie,ve):null;case S:return ie.key===je?ae(J,X,ie,ve):null;case W:return je=ie._init,ie=je(ie._payload),oe(J,X,ie,ve)}if($(ie)||Z(ie))return je!==null?null:me(J,X,ie,ve,null);if(typeof ie.then=="function")return oe(J,X,au(ie),ve);if(ie.$$typeof===R)return oe(J,X,Wl(J,ie),ve);ru(J,ie)}return null}function le(J,X,ie,ve,je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return J=J.get(ie)||null,C(X,J,""+ve,je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case v:return J=J.get(ve.key===null?ie:ve.key)||null,G(X,J,ve,je);case S:return J=J.get(ve.key===null?ie:ve.key)||null,ae(X,J,ve,je);case W:var gt=ve._init;return ve=gt(ve._payload),le(J,X,ie,ve,je)}if($(ve)||Z(ve))return J=J.get(ie)||null,me(X,J,ve,je,null);if(typeof ve.then=="function")return le(J,X,ie,au(ve),je);if(ve.$$typeof===R)return le(J,X,ie,Wl(X,ve),je);ru(X,ve)}return null}function at(J,X,ie,ve){for(var je=null,gt=null,Ke=X,nt=X=0,Mn=null;Ke!==null&&nt<ie.length;nt++){Ke.index>nt?(Mn=Ke,Ke=null):Mn=Ke.sibling;var Dt=oe(J,Ke,ie[nt],ve);if(Dt===null){Ke===null&&(Ke=Mn);break}t&&Ke&&Dt.alternate===null&&i(J,Ke),X=p(Dt,X,nt),gt===null?je=Dt:gt.sibling=Dt,gt=Dt,Ke=Mn}if(nt===ie.length)return s(J,Ke),Nt&&Sr(J,nt),je;if(Ke===null){for(;nt<ie.length;nt++)Ke=Se(J,ie[nt],ve),Ke!==null&&(X=p(Ke,X,nt),gt===null?je=Ke:gt.sibling=Ke,gt=Ke);return Nt&&Sr(J,nt),je}for(Ke=l(Ke);nt<ie.length;nt++)Mn=le(Ke,J,nt,ie[nt],ve),Mn!==null&&(t&&Mn.alternate!==null&&Ke.delete(Mn.key===null?nt:Mn.key),X=p(Mn,X,nt),gt===null?je=Mn:gt.sibling=Mn,gt=Mn);return t&&Ke.forEach(function(tr){return i(J,tr)}),Nt&&Sr(J,nt),je}function tt(J,X,ie,ve){if(ie==null)throw Error(r(151));for(var je=null,gt=null,Ke=X,nt=X=0,Mn=null,Dt=ie.next();Ke!==null&&!Dt.done;nt++,Dt=ie.next()){Ke.index>nt?(Mn=Ke,Ke=null):Mn=Ke.sibling;var tr=oe(J,Ke,Dt.value,ve);if(tr===null){Ke===null&&(Ke=Mn);break}t&&Ke&&tr.alternate===null&&i(J,Ke),X=p(tr,X,nt),gt===null?je=tr:gt.sibling=tr,gt=tr,Ke=Mn}if(Dt.done)return s(J,Ke),Nt&&Sr(J,nt),je;if(Ke===null){for(;!Dt.done;nt++,Dt=ie.next())Dt=Se(J,Dt.value,ve),Dt!==null&&(X=p(Dt,X,nt),gt===null?je=Dt:gt.sibling=Dt,gt=Dt);return Nt&&Sr(J,nt),je}for(Ke=l(Ke);!Dt.done;nt++,Dt=ie.next())Dt=le(Ke,J,nt,Dt.value,ve),Dt!==null&&(t&&Dt.alternate!==null&&Ke.delete(Dt.key===null?nt:Dt.key),X=p(Dt,X,nt),gt===null?je=Dt:gt.sibling=Dt,gt=Dt);return t&&Ke.forEach(function(PM){return i(J,PM)}),Nt&&Sr(J,nt),je}function Gt(J,X,ie,ve){if(typeof ie=="object"&&ie!==null&&ie.type===E&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:e:{for(var je=ie.key;X!==null;){if(X.key===je){if(je=ie.type,je===E){if(X.tag===7){s(J,X.sibling),ve=c(X,ie.props.children),ve.return=J,J=ve;break e}}else if(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===W&&Og(je)===X.type){s(J,X.sibling),ve=c(X,ie.props),wo(ve,ie),ve.return=J,J=ve;break e}s(J,X);break}else i(J,X);X=X.sibling}ie.type===E?(ve=vr(ie.props.children,J.mode,ve,ie.key),ve.return=J,J=ve):(ve=Vl(ie.type,ie.key,ie.props,null,J.mode,ve),wo(ve,ie),ve.return=J,J=ve)}return M(J);case S:e:{for(je=ie.key;X!==null;){if(X.key===je)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){s(J,X.sibling),ve=c(X,ie.children||[]),ve.return=J,J=ve;break e}else{s(J,X);break}else i(J,X);X=X.sibling}ve=tf(ie,J.mode,ve),ve.return=J,J=ve}return M(J);case W:return je=ie._init,ie=je(ie._payload),Gt(J,X,ie,ve)}if($(ie))return at(J,X,ie,ve);if(Z(ie)){if(je=Z(ie),typeof je!="function")throw Error(r(150));return ie=je.call(ie),tt(J,X,ie,ve)}if(typeof ie.then=="function")return Gt(J,X,au(ie),ve);if(ie.$$typeof===R)return Gt(J,X,Wl(J,ie),ve);ru(J,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,X!==null&&X.tag===6?(s(J,X.sibling),ve=c(X,ie),ve.return=J,J=ve):(s(J,X),ve=ef(ie,J.mode,ve),ve.return=J,J=ve),M(J)):s(J,X)}return function(J,X,ie,ve){try{Co=0;var je=Gt(J,X,ie,ve);return ds=null,je}catch(Ke){if(Ke===xo||Ke===Yl)throw Ke;var gt=Kn(29,Ke,null,J.mode);return gt.lanes=ve,gt.return=J,gt}finally{}}}var hs=Ig(!0),Fg=Ig(!1),fi=K(null),Oi=null;function Ha(t){var i=t.alternate;ge(pn,pn.current&1),ge(fi,t),Oi===null&&(i===null||ls.current!==null||i.memoizedState!==null)&&(Oi=t)}function Bg(t){if(t.tag===22){if(ge(pn,pn.current),ge(fi,t),Oi===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Oi=t)}}else Va()}function Va(){ge(pn,pn.current),ge(fi,fi.current)}function sa(t){ue(fi),Oi===t&&(Oi=null),ue(pn)}var pn=K(0);function su(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||bd(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Of(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:g({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var If={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=ei(),c=Fa(l);c.payload=i,s!=null&&(c.callback=s),i=Ba(t,c,l),i!==null&&(ti(i,t,l),yo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=ei(),c=Fa(l);c.tag=1,c.payload=i,s!=null&&(c.callback=s),i=Ba(t,c,l),i!==null&&(ti(i,t,l),yo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=ei(),l=Fa(s);l.tag=2,i!=null&&(l.callback=i),i=Ba(t,l,s),i!==null&&(ti(i,t,s),yo(i,t,s))}};function zg(t,i,s,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!co(s,l)||!co(c,p):!0}function Hg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&If.enqueueReplaceState(i,i.state,null)}function Rr(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=g({},s));for(var c in t)s[c]===void 0&&(s[c]=t[c])}return s}var ou=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Vg(t){ou(t)}function Gg(t){console.error(t)}function kg(t){ou(t)}function lu(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Xg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Ff(t,i,s){return s=Fa(s),s.tag=3,s.payload={element:null},s.callback=function(){lu(t,i)},s}function Wg(t){return t=Fa(t),t.tag=3,t}function qg(t,i,s,l){var c=s.type.getDerivedStateFromError;if(typeof c=="function"){var p=l.value;t.payload=function(){return c(p)},t.callback=function(){Xg(i,s,l)}}var M=s.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Xg(i,s,l),typeof c!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var C=l.stack;this.componentDidCatch(l.value,{componentStack:C!==null?C:""})})}function Py(t,i,s,l,c){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&go(i,s,c,!0),s=fi.current,s!==null){switch(s.tag){case 13:return Oi===null?od():s.alternate===null&&tn===0&&(tn=3),s.flags&=-257,s.flags|=65536,s.lanes=c,l===df?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),ud(t,l,c)),!1;case 22:return s.flags|=65536,l===df?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),ud(t,l,c)),!1}throw Error(r(435,s.tag))}return ud(t,l,c),od(),!1}if(Nt)return i=fi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,l!==rf&&(t=Error(r(422),{cause:l}),mo(oi(t,s)))):(l!==rf&&(i=Error(r(423),{cause:l}),mo(oi(i,s))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,l=oi(l,s),c=Ff(t.stateNode,l,c),mf(t,c),tn!==4&&(tn=2)),!1;var p=Error(r(520),{cause:l});if(p=oi(p,s),Io===null?Io=[p]:Io.push(p),tn!==4&&(tn=2),i===null)return!0;l=oi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=c&-c,s.lanes|=t,t=Ff(s.stateNode,l,t),mf(s,t),!1;case 1:if(i=s.type,p=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Ya===null||!Ya.has(p))))return s.flags|=65536,c&=-c,s.lanes|=c,c=Wg(c),qg(c,t,s,l),mf(s,c),!1}s=s.return}while(s!==null);return!1}var Yg=Error(r(461)),Sn=!1;function Rn(t,i,s,l){i.child=t===null?Fg(i,null,s,l):hs(i,t.child,s,l)}function jg(t,i,s,l,c){s=s.render;var p=i.ref;if("ref"in l){var M={};for(var C in l)C!=="ref"&&(M[C]=l[C])}else M=l;return br(i),l=Sf(t,i,s,M,p,c),C=yf(),t!==null&&!Sn?(Mf(t,i,c),oa(t,i,c)):(Nt&&C&&nf(i),i.flags|=1,Rn(t,i,l,c),i.child)}function Zg(t,i,s,l,c){if(t===null){var p=s.type;return typeof p=="function"&&!$c(p)&&p.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=p,Kg(t,i,p,l,c)):(t=Vl(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,!Wf(t,c)){var M=p.memoizedProps;if(s=s.compare,s=s!==null?s:co,s(M,l)&&t.ref===i.ref)return oa(t,i,c)}return i.flags|=1,t=ea(p,l),t.ref=i.ref,t.return=i,i.child=t}function Kg(t,i,s,l,c){if(t!==null){var p=t.memoizedProps;if(co(p,l)&&t.ref===i.ref)if(Sn=!1,i.pendingProps=l=p,Wf(t,c))(t.flags&131072)!==0&&(Sn=!0);else return i.lanes=t.lanes,oa(t,i,c)}return Bf(t,i,s,l,c)}function Qg(t,i,s){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=p!==null?p.baseLanes|s:s,t!==null){for(c=i.child=t.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;i.childLanes=p&~l}else i.childLanes=0,i.child=null;return Jg(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&ql(i,p!==null?p.cachePool:null),p!==null?Km(i,p):_f(),Bg(i);else return i.lanes=i.childLanes=536870912,Jg(t,i,p!==null?p.baseLanes|s:s,s)}else p!==null?(ql(i,p.cachePool),Km(i,p),Va(),i.memoizedState=null):(t!==null&&ql(i,null),_f(),Va());return Rn(t,i,c,s),i.child}function Jg(t,i,s,l){var c=ff();return c=c===null?null:{parent:hn._currentValue,pool:c},i.memoizedState={baseLanes:s,cachePool:c},t!==null&&ql(i,null),_f(),Bg(i),t!==null&&go(t,i,l,!0),null}function uu(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Bf(t,i,s,l,c){return br(i),s=Sf(t,i,s,l,void 0,c),l=yf(),t!==null&&!Sn?(Mf(t,i,c),oa(t,i,c)):(Nt&&l&&nf(i),i.flags|=1,Rn(t,i,s,c),i.child)}function $g(t,i,s,l,c,p){return br(i),i.updateQueue=null,s=Jm(i,l,s,c),Qm(t),l=yf(),t!==null&&!Sn?(Mf(t,i,p),oa(t,i,p)):(Nt&&l&&nf(i),i.flags|=1,Rn(t,i,s,p),i.child)}function e0(t,i,s,l,c){if(br(i),i.stateNode===null){var p=is,M=s.contextType;typeof M=="object"&&M!==null&&(p=Ln(M)),p=new s(l,p),i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=If,i.stateNode=p,p._reactInternals=i,p=i.stateNode,p.props=l,p.state=i.memoizedState,p.refs={},hf(i),M=s.contextType,p.context=typeof M=="object"&&M!==null?Ln(M):is,p.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(Of(i,s,M,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(M=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),M!==p.state&&If.enqueueReplaceState(p,p.state,null),Eo(i,l,p,c),Mo(),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){p=i.stateNode;var C=i.memoizedProps,G=Rr(s,C);p.props=G;var ae=p.context,me=s.contextType;M=is,typeof me=="object"&&me!==null&&(M=Ln(me));var Se=s.getDerivedStateFromProps;me=typeof Se=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=i.pendingProps!==C,me||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||ae!==M)&&Hg(i,p,l,M),Ia=!1;var oe=i.memoizedState;p.state=oe,Eo(i,l,p,c),Mo(),ae=i.memoizedState,C||oe!==ae||Ia?(typeof Se=="function"&&(Of(i,s,Se,l),ae=i.memoizedState),(G=Ia||zg(i,s,G,l,oe,ae,M))?(me||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(i.flags|=4194308)):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ae),p.props=l,p.state=ae,p.context=M,l=G):(typeof p.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{p=i.stateNode,pf(t,i),M=i.memoizedProps,me=Rr(s,M),p.props=me,Se=i.pendingProps,oe=p.context,ae=s.contextType,G=is,typeof ae=="object"&&ae!==null&&(G=Ln(ae)),C=s.getDerivedStateFromProps,(ae=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(M!==Se||oe!==G)&&Hg(i,p,l,G),Ia=!1,oe=i.memoizedState,p.state=oe,Eo(i,l,p,c),Mo();var le=i.memoizedState;M!==Se||oe!==le||Ia||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof C=="function"&&(Of(i,s,C,l),le=i.memoizedState),(me=Ia||zg(i,s,me,l,oe,le,G)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(ae||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,le,G),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,le,G)),typeof p.componentDidUpdate=="function"&&(i.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),p.props=l,p.state=le,p.context=G,l=me):(typeof p.componentDidUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&oe===t.memoizedState||(i.flags|=1024),l=!1)}return p=l,uu(t,i),l=(i.flags&128)!==0,p||l?(p=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:p.render(),i.flags|=1,t!==null&&l?(i.child=hs(i,t.child,null,c),i.child=hs(i,null,s,c)):Rn(t,i,s,c),i.memoizedState=p.state,t=i.child):t=oa(t,i,c),t}function t0(t,i,s,l){return po(),i.flags|=256,Rn(t,i,s,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Gm()}}function Vf(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=di),t}function n0(t,i,s){var l=i.pendingProps,c=!1,p=(i.flags&128)!==0,M;if((M=p)||(M=t!==null&&t.memoizedState===null?!1:(pn.current&2)!==0),M&&(c=!0,i.flags&=-129),M=(i.flags&32)!==0,i.flags&=-33,t===null){if(Nt){if(c?Ha(i):Va(),Nt){var C=en,G;if(G=C){e:{for(G=C,C=Pi;G.nodeType!==8;){if(!C){C=null;break e}if(G=Mi(G.nextSibling),G===null){C=null;break e}}C=G}C!==null?(i.memoizedState={dehydrated:C,treeContext:xr!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},G=Kn(18,null,null,0),G.stateNode=C,G.return=i,i.child=G,Bn=i,en=null,G=!0):G=!1}G||Mr(i)}if(C=i.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return bd(C)?i.lanes=32:i.lanes=536870912,null;sa(i)}return C=l.children,l=l.fallback,c?(Va(),c=i.mode,C=cu({mode:"hidden",children:C},c),l=vr(l,c,s,null),C.return=i,l.return=i,C.sibling=l,i.child=C,c=i.child,c.memoizedState=Hf(s),c.childLanes=Vf(t,M,s),i.memoizedState=zf,l):(Ha(i),Gf(i,C))}if(G=t.memoizedState,G!==null&&(C=G.dehydrated,C!==null)){if(p)i.flags&256?(Ha(i),i.flags&=-257,i=kf(t,i,s)):i.memoizedState!==null?(Va(),i.child=t.child,i.flags|=128,i=null):(Va(),c=l.fallback,C=i.mode,l=cu({mode:"visible",children:l.children},C),c=vr(c,C,s,null),c.flags|=2,l.return=i,c.return=i,l.sibling=c,i.child=l,hs(i,t.child,null,s),l=i.child,l.memoizedState=Hf(s),l.childLanes=Vf(t,M,s),i.memoizedState=zf,i=c);else if(Ha(i),bd(C)){if(M=C.nextSibling&&C.nextSibling.dataset,M)var ae=M.dgst;M=ae,l=Error(r(419)),l.stack="",l.digest=M,mo({value:l,source:null,stack:null}),i=kf(t,i,s)}else if(Sn||go(t,i,s,!1),M=(s&t.childLanes)!==0,Sn||M){if(M=Yt,M!==null&&(l=s&-s,l=(l&42)!==0?1:it(l),l=(l&(M.suspendedLanes|s))!==0?0:l,l!==0&&l!==G.retryLane))throw G.retryLane=l,ns(t,l),ti(M,t,l),Yg;C.data==="$?"||od(),i=kf(t,i,s)}else C.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=G.treeContext,en=Mi(C.nextSibling),Bn=i,Nt=!0,yr=null,Pi=!1,t!==null&&(ui[ci++]=ta,ui[ci++]=na,ui[ci++]=xr,ta=t.id,na=t.overflow,xr=i),i=Gf(i,l.children),i.flags|=4096);return i}return c?(Va(),c=l.fallback,C=i.mode,G=t.child,ae=G.sibling,l=ea(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,ae!==null?c=ea(ae,c):(c=vr(c,C,s,null),c.flags|=2),c.return=i,l.return=i,l.sibling=c,i.child=l,l=c,c=i.child,C=t.child.memoizedState,C===null?C=Hf(s):(G=C.cachePool,G!==null?(ae=hn._currentValue,G=G.parent!==ae?{parent:ae,pool:ae}:G):G=Gm(),C={baseLanes:C.baseLanes|s,cachePool:G}),c.memoizedState=C,c.childLanes=Vf(t,M,s),i.memoizedState=zf,l):(Ha(i),s=t.child,t=s.sibling,s=ea(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(M=i.deletions,M===null?(i.deletions=[t],i.flags|=16):M.push(t)),i.child=s,i.memoizedState=null,s)}function Gf(t,i){return i=cu({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function cu(t,i){return t=Kn(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function kf(t,i,s){return hs(i,t.child,null,s),t=Gf(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function i0(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),of(t.return,i,s)}function Xf(t,i,s,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=s,p.tailMode=c)}function a0(t,i,s){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(Rn(t,i,l.children,s),l=pn.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&i0(t,s,i);else if(t.tag===19)i0(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ge(pn,l),c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&su(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),Xf(i,!1,c,s,p);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&su(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}Xf(i,!0,s,null,p);break;case"together":Xf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function oa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),qa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(go(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(r(153));if(i.child!==null){for(t=i.child,s=ea(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ea(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Wf(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function Oy(t,i,s){switch(i.tag){case 3:Te(i,i.stateNode.containerInfo),Oa(i,hn,t.memoizedState.cache),po();break;case 27:case 5:Ve(i);break;case 4:Te(i,i.stateNode.containerInfo);break;case 10:Oa(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(i),i.flags|=128,null):(s&i.child.childLanes)!==0?n0(t,i,s):(Ha(i),t=oa(t,i,s),t!==null?t.sibling:null);Ha(i);break;case 19:var c=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(go(t,i,s,!1),l=(s&i.childLanes)!==0),c){if(l)return a0(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ge(pn,pn.current),l)break;return null;case 22:case 23:return i.lanes=0,Qg(t,i,s);case 24:Oa(i,hn,t.memoizedState.cache)}return oa(t,i,s)}function r0(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Sn=!0;else{if(!Wf(t,s)&&(i.flags&128)===0)return Sn=!1,Oy(t,i,s);Sn=(t.flags&131072)!==0}else Sn=!1,Nt&&(i.flags&1048576)!==0&&Om(i,kl,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,c=l._init;if(l=c(l._payload),i.type=l,typeof l=="function")$c(l)?(t=Rr(l,t),i.tag=1,i=e0(null,i,l,t,s)):(i.tag=0,i=Bf(null,i,l,t,s));else{if(l!=null){if(c=l.$$typeof,c===P){i.tag=11,i=jg(null,i,l,t,s);break e}else if(c===F){i.tag=14,i=Zg(null,i,l,t,s);break e}}throw i=re(l)||l,Error(r(306,i,""))}}return i;case 0:return Bf(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,c=Rr(l,i.pendingProps),e0(t,i,l,c,s);case 3:e:{if(Te(i,i.stateNode.containerInfo),t===null)throw Error(r(387));l=i.pendingProps;var p=i.memoizedState;c=p.element,pf(t,i),Eo(i,l,null,s);var M=i.memoizedState;if(l=M.cache,Oa(i,hn,l),l!==p.cache&&lf(i,[hn],s,!0),Mo(),l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){i=t0(t,i,l,s);break e}else if(l!==c){c=oi(Error(r(424)),i),mo(c),i=t0(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Mi(t.firstChild),Bn=i,Nt=!0,yr=null,Pi=!0,s=Fg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(po(),l===c){i=oa(t,i,s);break e}Rn(t,i,l,s)}i=i.child}return i;case 26:return uu(t,i),t===null?(s=u_(i.type,null,i.pendingProps,null))?i.memoizedState=s:Nt||(s=i.type,t=i.pendingProps,l=bu(te.current).createElement(s),l[vn]=i,l[Tn]=t,wn(l,s,t),nn(l),i.stateNode=l):i.memoizedState=u_(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ve(i),t===null&&Nt&&(l=i.stateNode=s_(i.type,i.pendingProps,te.current),Bn=i,Pi=!0,c=en,Ka(i.type)?(Td=c,en=Mi(l.firstChild)):en=c),Rn(t,i,i.pendingProps.children,s),uu(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Nt&&((c=l=en)&&(l=uM(l,i.type,i.pendingProps,Pi),l!==null?(i.stateNode=l,Bn=i,en=Mi(l.firstChild),Pi=!1,c=!0):c=!1),c||Mr(i)),Ve(i),c=i.type,p=i.pendingProps,M=t!==null?t.memoizedProps:null,l=p.children,yd(c,p)?l=null:M!==null&&yd(c,M)&&(i.flags|=32),i.memoizedState!==null&&(c=Sf(t,i,Ry,null,null,s),Wo._currentValue=c),uu(t,i),Rn(t,i,l,s),i.child;case 6:return t===null&&Nt&&((t=s=en)&&(s=cM(s,i.pendingProps,Pi),s!==null?(i.stateNode=s,Bn=i,en=null,t=!0):t=!1),t||Mr(i)),null;case 13:return n0(t,i,s);case 4:return Te(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,s):Rn(t,i,l,s),i.child;case 11:return jg(t,i,i.type,i.pendingProps,s);case 7:return Rn(t,i,i.pendingProps,s),i.child;case 8:return Rn(t,i,i.pendingProps.children,s),i.child;case 12:return Rn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Oa(i,i.type,l.value),Rn(t,i,l.children,s),i.child;case 9:return c=i.type._context,l=i.pendingProps.children,br(i),c=Ln(c),l=l(c),i.flags|=1,Rn(t,i,l,s),i.child;case 14:return Zg(t,i,i.type,i.pendingProps,s);case 15:return Kg(t,i,i.type,i.pendingProps,s);case 19:return a0(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=cu(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=ea(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Qg(t,i,s);case 24:return br(i),l=Ln(hn),t===null?(c=ff(),c===null&&(c=Yt,p=uf(),c.pooledCache=p,p.refCount++,p!==null&&(c.pooledCacheLanes|=s),c=p),i.memoizedState={parent:l,cache:c},hf(i),Oa(i,hn,c)):((t.lanes&s)!==0&&(pf(t,i),Eo(i,null,null,s),Mo()),c=t.memoizedState,p=i.memoizedState,c.parent!==l?(c={parent:l,cache:l},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Oa(i,hn,l)):(l=p.cache,Oa(i,hn,l),l!==c.cache&&lf(i,[hn],s,!0))),Rn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function la(t){t.flags|=4}function s0(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!p_(i)){if(i=fi.current,i!==null&&((bt&4194048)===bt?Oi!==null:(bt&62914560)!==bt&&(bt&536870912)===0||i!==Oi))throw So=df,km;t.flags|=8192}}function fu(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ie():536870912,t.lanes|=i,_s|=i)}function Do(t,i){if(!Nt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Qt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&65011712,l|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Iy(t,i,s){var l=i.pendingProps;switch(af(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(i),null;case 1:return Qt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),aa(hn),$e(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(ho(i)?la(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bm())),Qt(i),null;case 26:return s=i.memoizedState,t===null?(la(i),s!==null?(Qt(i),s0(i,s)):(Qt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(la(i),Qt(i),s0(i,s)):(Qt(i),i.flags&=-16777217):(t.memoizedProps!==l&&la(i),Qt(i),i.flags&=-16777217),null;case 27:ht(i),s=te.current;var c=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&la(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Qt(i),null}t=Le.current,ho(i)?Im(i):(t=s_(c,l,s),i.stateNode=t,la(i))}return Qt(i),null;case 5:if(ht(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&la(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Qt(i),null}if(t=Le.current,ho(i))Im(i);else{switch(c=bu(te.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?c.createElement(s,{is:l.is}):c.createElement(s)}}t[vn]=i,t[Tn]=l;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=t;e:switch(wn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&la(i)}}return Qt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&la(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(t=te.current,ho(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,c=Bn,c!==null)switch(c.tag){case 27:case 5:l=c.memoizedProps}t[vn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||$0(t.nodeValue,s)),t||Mr(i)}else t=bu(t).createTextNode(l),t[vn]=i,i.stateNode=t}return Qt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=ho(i),l!==null&&l.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[vn]=i}else po(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Qt(i),c=!1}else c=Bm(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(sa(i),i):(sa(i),null)}if(sa(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,c=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(c=l.alternate.memoizedState.cachePool.pool);var p=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==c&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),fu(i,i.updateQueue),Qt(i),null;case 4:return $e(),t===null&&gd(i.stateNode.containerInfo),Qt(i),null;case 10:return aa(i.type),Qt(i),null;case 19:if(ue(pn),c=i.memoizedState,c===null)return Qt(i),null;if(l=(i.flags&128)!==0,p=c.rendering,p===null)if(l)Do(c,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(p=su(t),p!==null){for(i.flags|=128,Do(c,!1),t=p.updateQueue,i.updateQueue=t,fu(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Pm(s,t),s=s.sibling;return ge(pn,pn.current&1|2),i.child}t=t.sibling}c.tail!==null&&Tt()>pu&&(i.flags|=128,l=!0,Do(c,!1),i.lanes=4194304)}else{if(!l)if(t=su(p),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,fu(i,t),Do(c,!0),c.tail===null&&c.tailMode==="hidden"&&!p.alternate&&!Nt)return Qt(i),null}else 2*Tt()-c.renderingStartTime>pu&&s!==536870912&&(i.flags|=128,l=!0,Do(c,!1),i.lanes=4194304);c.isBackwards?(p.sibling=i.child,i.child=p):(t=c.last,t!==null?t.sibling=p:i.child=p,c.last=p)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=Tt(),i.sibling=null,t=pn.current,ge(pn,l?t&1|2:t&1),i):(Qt(i),null);case 22:case 23:return sa(i),vf(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Qt(i),i.subtreeFlags&6&&(i.flags|=8192)):Qt(i),s=i.updateQueue,s!==null&&fu(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ue(Tr),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),aa(hn),Qt(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Fy(t,i){switch(af(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return aa(hn),$e(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ht(i),null;case 13:if(sa(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(r(340));po()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ue(pn),null;case 4:return $e(),null;case 10:return aa(i.type),null;case 22:case 23:return sa(i),vf(),t!==null&&ue(Tr),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return aa(hn),null;case 25:return null;default:return null}}function o0(t,i){switch(af(i),i.tag){case 3:aa(hn),$e();break;case 26:case 27:case 5:ht(i);break;case 4:$e();break;case 13:sa(i);break;case 19:ue(pn);break;case 10:aa(i.type);break;case 22:case 23:sa(i),vf(),t!==null&&ue(Tr);break;case 24:aa(hn)}}function Uo(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var c=l.next;s=c;do{if((s.tag&t)===t){l=void 0;var p=s.create,M=s.inst;l=p(),M.destroy=l}s=s.next}while(s!==c)}}catch(C){Wt(i,i.return,C)}}function Ga(t,i,s){try{var l=i.updateQueue,c=l!==null?l.lastEffect:null;if(c!==null){var p=c.next;l=p;do{if((l.tag&t)===t){var M=l.inst,C=M.destroy;if(C!==void 0){M.destroy=void 0,c=i;var G=s,ae=C;try{ae()}catch(me){Wt(c,G,me)}}}l=l.next}while(l!==p)}}catch(me){Wt(i,i.return,me)}}function l0(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Zm(i,s)}catch(l){Wt(t,t.return,l)}}}function u0(t,i,s){s.props=Rr(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Wt(t,i,l)}}function Lo(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(c){Wt(t,i,c)}}function Ii(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(c){Wt(t,i,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(c){Wt(t,i,c)}else s.current=null}function c0(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(c){Wt(t,t.return,c)}}function qf(t,i,s){try{var l=t.stateNode;aM(l,t.type,s,i),l[Tn]=i}catch(c){Wt(t,t.return,c)}}function f0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function Yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||f0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jf(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Eu));else if(l!==4&&(l===27&&Ka(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(jf(t,i,s),t=t.sibling;t!==null;)jf(t,i,s),t=t.sibling}function du(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Ka(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(du(t,i,s),t=t.sibling;t!==null;)du(t,i,s),t=t.sibling}function d0(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);wn(i,l,s),i[vn]=t,i[Tn]=s}catch(p){Wt(t,t.return,p)}}var ua=!1,sn=!1,Zf=!1,h0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function By(t,i){if(t=t.containerInfo,xd=Du,t=bm(t),qc(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{s.nodeType,p.nodeType}catch{s=null;break e}var M=0,C=-1,G=-1,ae=0,me=0,Se=t,oe=null;t:for(;;){for(var le;Se!==s||c!==0&&Se.nodeType!==3||(C=M+c),Se!==p||l!==0&&Se.nodeType!==3||(G=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(le=Se.firstChild)!==null;)oe=Se,Se=le;for(;;){if(Se===t)break t;if(oe===s&&++ae===c&&(C=M),oe===p&&++me===l&&(G=M),(le=Se.nextSibling)!==null)break;Se=oe,oe=Se.parentNode}Se=le}s=C===-1||G===-1?null:{start:C,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Sd={focusedElem:t,selectionRange:s},Du=!1,yn=i;yn!==null;)if(i=yn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,yn=t;else for(;yn!==null;){switch(i=yn,p=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&p!==null){t=void 0,s=i,c=p.memoizedProps,p=p.memoizedState,l=s.stateNode;try{var at=Rr(s.type,c,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(at,p),l.__reactInternalSnapshotBeforeUpdate=t}catch(tt){Wt(s,s.return,tt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Ed(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ed(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=i.sibling,t!==null){t.return=i.return,yn=t;break}yn=i.return}}function p0(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ka(t,s),l&4&&Uo(5,s);break;case 1:if(ka(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(M){Wt(s,s.return,M)}else{var c=Rr(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(c,i,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Wt(s,s.return,M)}}l&64&&l0(s),l&512&&Lo(s,s.return);break;case 3:if(ka(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Zm(t,i)}catch(M){Wt(s,s.return,M)}}break;case 27:i===null&&l&4&&d0(s);case 26:case 5:ka(t,s),i===null&&l&4&&c0(s),l&512&&Lo(s,s.return);break;case 12:ka(t,s);break;case 13:ka(t,s),l&4&&_0(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Yy.bind(null,s),fM(t,s))));break;case 22:if(l=s.memoizedState!==null||ua,!l){i=i!==null&&i.memoizedState!==null||sn,c=ua;var p=sn;ua=l,(sn=i)&&!p?Xa(t,s,(s.subtreeFlags&8772)!==0):ka(t,s),ua=c,sn=p}break;case 30:break;default:ka(t,s)}}function m0(t){var i=t.alternate;i!==null&&(t.alternate=null,m0(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&Zr(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Xn=!1;function ca(t,i,s){for(s=s.child;s!==null;)g0(t,i,s),s=s.sibling}function g0(t,i,s){if(pe&&typeof pe.onCommitFiberUnmount=="function")try{pe.onCommitFiberUnmount(he,s)}catch{}switch(s.tag){case 26:sn||Ii(s,i),ca(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:sn||Ii(s,i);var l=Kt,c=Xn;Ka(s.type)&&(Kt=s.stateNode,Xn=!1),ca(t,i,s),Vo(s.stateNode),Kt=l,Xn=c;break;case 5:sn||Ii(s,i);case 6:if(l=Kt,c=Xn,Kt=null,ca(t,i,s),Kt=l,Xn=c,Kt!==null)if(Xn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(s.stateNode)}catch(p){Wt(s,i,p)}else try{Kt.removeChild(s.stateNode)}catch(p){Wt(s,i,p)}break;case 18:Kt!==null&&(Xn?(t=Kt,a_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Zo(t)):a_(Kt,s.stateNode));break;case 4:l=Kt,c=Xn,Kt=s.stateNode.containerInfo,Xn=!0,ca(t,i,s),Kt=l,Xn=c;break;case 0:case 11:case 14:case 15:sn||Ga(2,s,i),sn||Ga(4,s,i),ca(t,i,s);break;case 1:sn||(Ii(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&u0(s,i,l)),ca(t,i,s);break;case 21:ca(t,i,s);break;case 22:sn=(l=sn)||s.memoizedState!==null,ca(t,i,s),sn=l;break;default:ca(t,i,s)}}function _0(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Zo(t)}catch(s){Wt(i,i.return,s)}}function zy(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new h0),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new h0),i;default:throw Error(r(435,t.tag))}}function Kf(t,i){var s=zy(t);i.forEach(function(l){var c=jy.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}function Qn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l],p=t,M=i,C=M;e:for(;C!==null;){switch(C.tag){case 27:if(Ka(C.type)){Kt=C.stateNode,Xn=!1;break e}break;case 5:Kt=C.stateNode,Xn=!1;break e;case 3:case 4:Kt=C.stateNode.containerInfo,Xn=!0;break e}C=C.return}if(Kt===null)throw Error(r(160));g0(p,M,c),Kt=null,Xn=!1,p=c.alternate,p!==null&&(p.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)v0(i,t),i=i.sibling}var yi=null;function v0(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(i,t),Jn(t),l&4&&(Ga(3,t,t.return),Uo(3,t),Ga(5,t,t.return));break;case 1:Qn(i,t),Jn(t),l&512&&(sn||s===null||Ii(s,s.return)),l&64&&ua&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var c=yi;if(Qn(i,t),Jn(t),l&512&&(sn||s===null||Ii(s,s.return)),l&4){var p=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,c=c.ownerDocument||c;t:switch(l){case"title":p=c.getElementsByTagName("title")[0],(!p||p[Zi]||p[vn]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=c.createElement(l),c.head.insertBefore(p,c.querySelector("head > title"))),wn(p,l,s),p[vn]=t,nn(p),l=p;break e;case"link":var M=d_("link","href",c).get(l+(s.href||""));if(M){for(var C=0;C<M.length;C++)if(p=M[C],p.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&p.getAttribute("rel")===(s.rel==null?null:s.rel)&&p.getAttribute("title")===(s.title==null?null:s.title)&&p.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){M.splice(C,1);break t}}p=c.createElement(l),wn(p,l,s),c.head.appendChild(p);break;case"meta":if(M=d_("meta","content",c).get(l+(s.content||""))){for(C=0;C<M.length;C++)if(p=M[C],p.getAttribute("content")===(s.content==null?null:""+s.content)&&p.getAttribute("name")===(s.name==null?null:s.name)&&p.getAttribute("property")===(s.property==null?null:s.property)&&p.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&p.getAttribute("charset")===(s.charSet==null?null:s.charSet)){M.splice(C,1);break t}}p=c.createElement(l),wn(p,l,s),c.head.appendChild(p);break;default:throw Error(r(468,l))}p[vn]=t,nn(p),l=p}t.stateNode=l}else h_(c,t.type,t.stateNode);else t.stateNode=f_(c,l,t.memoizedProps);else p!==l?(p===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):p.count--,l===null?h_(c,t.type,t.stateNode):f_(c,l,t.memoizedProps)):l===null&&t.stateNode!==null&&qf(t,t.memoizedProps,s.memoizedProps)}break;case 27:Qn(i,t),Jn(t),l&512&&(sn||s===null||Ii(s,s.return)),s!==null&&l&4&&qf(t,t.memoizedProps,s.memoizedProps);break;case 5:if(Qn(i,t),Jn(t),l&512&&(sn||s===null||Ii(s,s.return)),t.flags&32){c=t.stateNode;try{an(c,"")}catch(le){Wt(t,t.return,le)}}l&4&&t.stateNode!=null&&(c=t.memoizedProps,qf(t,c,s!==null?s.memoizedProps:c)),l&1024&&(Zf=!0);break;case 6:if(Qn(i,t),Jn(t),l&4){if(t.stateNode===null)throw Error(r(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(le){Wt(t,t.return,le)}}break;case 3:if(Ru=null,c=yi,yi=Tu(i.containerInfo),Qn(i,t),yi=c,Jn(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zo(i.containerInfo)}catch(le){Wt(t,t.return,le)}Zf&&(Zf=!1,x0(t));break;case 4:l=yi,yi=Tu(t.stateNode.containerInfo),Qn(i,t),Jn(t),yi=l;break;case 12:Qn(i,t),Jn(t);break;case 13:Qn(i,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(nd=Tt()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kf(t,l)));break;case 22:c=t.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,ae=ua,me=sn;if(ua=ae||c,sn=me||G,Qn(i,t),sn=me,ua=ae,Jn(t),l&8192)e:for(i=t.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(s===null||G||ua||sn||Cr(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(p=G.stateNode,c)M=p.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{C=G.stateNode;var Se=G.memoizedProps.style,oe=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;C.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(le){Wt(G,G.return,le)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=c?"":G.memoizedProps}catch(le){Wt(G,G.return,le)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Kf(t,s))));break;case 19:Qn(i,t),Jn(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kf(t,l)));break;case 30:break;case 21:break;default:Qn(i,t),Jn(t)}}function Jn(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(f0(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var c=s.stateNode,p=Yf(t);du(t,p,c);break;case 5:var M=s.stateNode;s.flags&32&&(an(M,""),s.flags&=-33);var C=Yf(t);du(t,C,M);break;case 3:case 4:var G=s.stateNode.containerInfo,ae=Yf(t);jf(t,ae,G);break;default:throw Error(r(161))}}catch(me){Wt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function x0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;x0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function ka(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)p0(t,i.alternate,i),i=i.sibling}function Cr(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Ga(4,i,i.return),Cr(i);break;case 1:Ii(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&u0(i,i.return,s),Cr(i);break;case 27:Vo(i.stateNode);case 26:case 5:Ii(i,i.return),Cr(i);break;case 22:i.memoizedState===null&&Cr(i);break;case 30:Cr(i);break;default:Cr(i)}t=t.sibling}}function Xa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,c=t,p=i,M=p.flags;switch(p.tag){case 0:case 11:case 15:Xa(c,p,s),Uo(4,p);break;case 1:if(Xa(c,p,s),l=p,c=l.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ae){Wt(l,l.return,ae)}if(l=p,c=l.updateQueue,c!==null){var C=l.stateNode;try{var G=c.shared.hiddenCallbacks;if(G!==null)for(c.shared.hiddenCallbacks=null,c=0;c<G.length;c++)jm(G[c],C)}catch(ae){Wt(l,l.return,ae)}}s&&M&64&&l0(p),Lo(p,p.return);break;case 27:d0(p);case 26:case 5:Xa(c,p,s),s&&l===null&&M&4&&c0(p),Lo(p,p.return);break;case 12:Xa(c,p,s);break;case 13:Xa(c,p,s),s&&M&4&&_0(c,p);break;case 22:p.memoizedState===null&&Xa(c,p,s),Lo(p,p.return);break;case 30:break;default:Xa(c,p,s)}i=i.sibling}}function Qf(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&_o(s))}function Jf(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t))}function Fi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)S0(t,i,s,l),i=i.sibling}function S0(t,i,s,l){var c=i.flags;switch(i.tag){case 0:case 11:case 15:Fi(t,i,s,l),c&2048&&Uo(9,i);break;case 1:Fi(t,i,s,l);break;case 3:Fi(t,i,s,l),c&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&_o(t)));break;case 12:if(c&2048){Fi(t,i,s,l),t=i.stateNode;try{var p=i.memoizedProps,M=p.id,C=p.onPostCommit;typeof C=="function"&&C(M,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Wt(i,i.return,G)}}else Fi(t,i,s,l);break;case 13:Fi(t,i,s,l);break;case 23:break;case 22:p=i.stateNode,M=i.alternate,i.memoizedState!==null?p._visibility&2?Fi(t,i,s,l):No(t,i):p._visibility&2?Fi(t,i,s,l):(p._visibility|=2,ps(t,i,s,l,(i.subtreeFlags&10256)!==0)),c&2048&&Qf(M,i);break;case 24:Fi(t,i,s,l),c&2048&&Jf(i.alternate,i);break;default:Fi(t,i,s,l)}}function ps(t,i,s,l,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var p=t,M=i,C=s,G=l,ae=M.flags;switch(M.tag){case 0:case 11:case 15:ps(p,M,C,G,c),Uo(8,M);break;case 23:break;case 22:var me=M.stateNode;M.memoizedState!==null?me._visibility&2?ps(p,M,C,G,c):No(p,M):(me._visibility|=2,ps(p,M,C,G,c)),c&&ae&2048&&Qf(M.alternate,M);break;case 24:ps(p,M,C,G,c),c&&ae&2048&&Jf(M.alternate,M);break;default:ps(p,M,C,G,c)}i=i.sibling}}function No(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,c=l.flags;switch(l.tag){case 22:No(s,l),c&2048&&Qf(l.alternate,l);break;case 24:No(s,l),c&2048&&Jf(l.alternate,l);break;default:No(s,l)}i=i.sibling}}var Po=8192;function ms(t){if(t.subtreeFlags&Po)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 26:ms(t),t.flags&Po&&t.memoizedState!==null&&bM(yi,t.memoizedState,t.memoizedProps);break;case 5:ms(t);break;case 3:case 4:var i=yi;yi=Tu(t.stateNode.containerInfo),ms(t),yi=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Po,Po=16777216,ms(t),Po=i):ms(t));break;default:ms(t)}}function M0(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Oo(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,b0(l,t)}M0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E0(t),t=t.sibling}function E0(t){switch(t.tag){case 0:case 11:case 15:Oo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Oo(t);break;case 12:Oo(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,hu(t)):Oo(t);break;default:Oo(t)}}function hu(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yn=l,b0(l,t)}M0(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Ga(8,i,i.return),hu(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,hu(i));break;default:hu(i)}t=t.sibling}}function b0(t,i){for(;yn!==null;){var s=yn;switch(s.tag){case 0:case 11:case 15:Ga(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_o(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,yn=l;else e:for(s=t;yn!==null;){l=yn;var c=l.sibling,p=l.return;if(m0(l),l===s){yn=null;break e}if(c!==null){c.return=p,yn=c;break e}yn=p}}}var Hy={getCacheForType:function(t){var i=Ln(hn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},Vy=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Yt=null,_t=null,bt=0,Bt=0,$n=null,Wa=!1,gs=!1,$f=!1,fa=0,tn=0,qa=0,wr=0,ed=0,di=0,_s=0,Io=null,Wn=null,td=!1,nd=0,pu=1/0,mu=null,Ya=null,Cn=0,ja=null,vs=null,xs=0,id=0,ad=null,T0=null,Fo=0,rd=null;function ei(){if((Ft&2)!==0&&bt!==0)return bt&-bt;if(B.T!==null){var t=ss;return t!==0?t:dd()}return Ct()}function A0(){di===0&&(di=(bt&536870912)===0||Nt?Y():536870912);var t=fi.current;return t!==null&&(t.flags|=32),di}function ti(t,i,s){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(Ss(t,0),Za(t,bt,di,!1)),Be(t,s),((Ft&2)===0||t!==Yt)&&(t===Yt&&((Ft&2)===0&&(wr|=s),tn===4&&Za(t,bt,di,!1)),Bi(t))}function R0(t,i,s){if((Ft&6)!==0)throw Error(r(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||De(t,i),c=l?Xy(t,i):ld(t,i,!0),p=l;do{if(c===0){gs&&!l&&Za(t,i,0,!1);break}else{if(s=t.current.alternate,p&&!Gy(s)){c=ld(t,i,!1),p=!1;continue}if(c===2){if(p=i,t.errorRecoveryDisabledLanes&p)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){i=M;e:{var C=t;c=Io;var G=C.current.memoizedState.isDehydrated;if(G&&(Ss(C,M).flags|=256),M=ld(C,M,!1),M!==2){if($f&&!G){C.errorRecoveryDisabledLanes|=p,wr|=p,c=4;break e}p=Wn,Wn=c,p!==null&&(Wn===null?Wn=p:Wn.push.apply(Wn,p))}c=M}if(p=!1,c!==2)continue}}if(c===1){Ss(t,0),Za(t,i,0,!0);break}e:{switch(l=t,p=c,p){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Za(l,i,di,!Wa);break e;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(c=nd+300-Tt(),10<c)){if(Za(l,i,di,!Wa),Ye(l,0,!0)!==0)break e;l.timeoutHandle=n_(C0.bind(null,l,s,Wn,mu,td,i,di,wr,_s,Wa,p,2,-0,0),c);break e}C0(l,s,Wn,mu,td,i,di,wr,_s,Wa,p,0,-0,0)}}break}while(!0);Bi(t)}function C0(t,i,s,l,c,p,M,C,G,ae,me,Se,oe,le){if(t.timeoutHandle=-1,Se=i.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Xo={stylesheets:null,count:0,unsuspend:EM},y0(i),Se=TM(),Se!==null)){t.cancelPendingCommit=Se(O0.bind(null,t,i,p,s,l,c,M,C,G,me,1,oe,le)),Za(t,p,M,!ae);return}O0(t,i,p,s,l,c,M,C,G)}function Gy(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var c=s[l],p=c.getSnapshot;c=c.value;try{if(!Zn(p(),c))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(t,i,s,l){i&=~ed,i&=~wr,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var c=i;0<c;){var p=31-Oe(c),M=1<<p;l[p]=-1,c&=~M}s!==0&&ye(t,s,i)}function gu(){return(Ft&6)===0?(Bo(0),!1):!0}function sd(){if(_t!==null){if(Bt===0)var t=_t.return;else t=_t,ia=Er=null,Ef(t),ds=null,Co=0,t=_t;for(;t!==null;)o0(t.alternate,t),t=t.return;_t=null}}function Ss(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,sM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),sd(),Yt=t,_t=s=ea(t.current,null),bt=i,Bt=0,$n=null,Wa=!1,gs=De(t,i),$f=!1,_s=di=ed=wr=qa=tn=0,Wn=Io=null,td=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var c=31-Oe(l),p=1<<c;i|=t[c],l&=~p}return fa=i,Bl(),s}function w0(t,i){mt=null,B.H=iu,i===xo||i===Yl?(i=qm(),Bt=3):i===km?(i=qm(),Bt=4):Bt=i===Yg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,$n=i,_t===null&&(tn=1,lu(t,oi(i,t.current)))}function D0(){var t=B.H;return B.H=iu,t===null?iu:t}function U0(){var t=B.A;return B.A=Hy,t}function od(){tn=4,Wa||(bt&4194048)!==bt&&fi.current!==null||(gs=!0),(qa&134217727)===0&&(wr&134217727)===0||Yt===null||Za(Yt,bt,di,!1)}function ld(t,i,s){var l=Ft;Ft|=2;var c=D0(),p=U0();(Yt!==t||bt!==i)&&(mu=null,Ss(t,i)),i=!1;var M=tn;e:do try{if(Bt!==0&&_t!==null){var C=_t,G=$n;switch(Bt){case 8:sd(),M=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(i=!0);var ae=Bt;if(Bt=0,$n=null,ys(t,C,G,ae),s&&gs){M=0;break e}break;default:ae=Bt,Bt=0,$n=null,ys(t,C,G,ae)}}ky(),M=tn;break}catch(me){w0(t,me)}while(!0);return i&&t.shellSuspendCounter++,ia=Er=null,Ft=l,B.H=c,B.A=p,_t===null&&(Yt=null,bt=0,Bl()),M}function ky(){for(;_t!==null;)L0(_t)}function Xy(t,i){var s=Ft;Ft|=2;var l=D0(),c=U0();Yt!==t||bt!==i?(mu=null,pu=Tt()+500,Ss(t,i)):gs=De(t,i);e:do try{if(Bt!==0&&_t!==null){i=_t;var p=$n;t:switch(Bt){case 1:Bt=0,$n=null,ys(t,i,p,1);break;case 2:case 9:if(Xm(p)){Bt=0,$n=null,N0(i);break}i=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Bi(t)},p.then(i,i);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Xm(p)?(Bt=0,$n=null,N0(i)):(Bt=0,$n=null,ys(t,i,p,7));break;case 5:var M=null;switch(_t.tag){case 26:M=_t.memoizedState;case 5:case 27:var C=_t;if(!M||p_(M)){Bt=0,$n=null;var G=C.sibling;if(G!==null)_t=G;else{var ae=C.return;ae!==null?(_t=ae,_u(ae)):_t=null}break t}}Bt=0,$n=null,ys(t,i,p,5);break;case 6:Bt=0,$n=null,ys(t,i,p,6);break;case 8:sd(),tn=6;break e;default:throw Error(r(462))}}Wy();break}catch(me){w0(t,me)}while(!0);return ia=Er=null,B.H=l,B.A=c,Ft=s,_t!==null?0:(Yt=null,bt=0,Bl(),tn)}function Wy(){for(;_t!==null&&!yt();)L0(_t)}function L0(t){var i=r0(t.alternate,t,fa);t.memoizedProps=t.pendingProps,i===null?_u(t):_t=i}function N0(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=$g(s,i,i.pendingProps,i.type,void 0,bt);break;case 11:i=$g(s,i,i.pendingProps,i.type.render,i.ref,bt);break;case 5:Ef(i);default:o0(s,i),i=_t=Pm(i,fa),i=r0(s,i,fa)}t.memoizedProps=t.pendingProps,i===null?_u(t):_t=i}function ys(t,i,s,l){ia=Er=null,Ef(i),ds=null,Co=0;var c=i.return;try{if(Py(t,c,i,s,bt)){tn=1,lu(t,oi(s,t.current)),_t=null;return}}catch(p){if(c!==null)throw _t=c,p;tn=1,lu(t,oi(s,t.current)),_t=null;return}i.flags&32768?(Nt||l===1?t=!0:gs||(bt&536870912)!==0?t=!1:(Wa=t=!0,(l===2||l===9||l===3||l===6)&&(l=fi.current,l!==null&&l.tag===13&&(l.flags|=16384))),P0(i,t)):_u(i)}function _u(t){var i=t;do{if((i.flags&32768)!==0){P0(i,Wa);return}t=i.return;var s=Iy(i.alternate,i,fa);if(s!==null){_t=s;return}if(i=i.sibling,i!==null){_t=i;return}_t=i=t}while(i!==null);tn===0&&(tn=5)}function P0(t,i){do{var s=Fy(t.alternate,t);if(s!==null){s.flags&=32767,_t=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){_t=t;return}_t=t=s}while(t!==null);tn=6,_t=null}function O0(t,i,s,l,c,p,M,C,G){t.cancelPendingCommit=null;do vu();while(Cn!==0);if((Ft&6)!==0)throw Error(r(327));if(i!==null){if(i===t.current)throw Error(r(177));if(p=i.lanes|i.childLanes,p|=Qc,be(t,s,p,M,C,G),t===Yt&&(_t=Yt=null,bt=0),vs=i,ja=t,xs=s,id=p,ad=c,T0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Zy(Ee,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=B.T,B.T=null,c=V.p,V.p=2,M=Ft,Ft|=4;try{By(t,i,s)}finally{Ft=M,V.p=c,B.T=l}}Cn=1,I0(),F0(),B0()}}function I0(){if(Cn===1){Cn=0;var t=ja,i=vs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=B.T,B.T=null;var l=V.p;V.p=2;var c=Ft;Ft|=4;try{v0(i,t);var p=Sd,M=bm(t.containerInfo),C=p.focusedElem,G=p.selectionRange;if(M!==C&&C&&C.ownerDocument&&Em(C.ownerDocument.documentElement,C)){if(G!==null&&qc(C)){var ae=G.start,me=G.end;if(me===void 0&&(me=ae),"selectionStart"in C)C.selectionStart=ae,C.selectionEnd=Math.min(me,C.value.length);else{var Se=C.ownerDocument||document,oe=Se&&Se.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),at=C.textContent.length,tt=Math.min(G.start,at),Gt=G.end===void 0?tt:Math.min(G.end,at);!le.extend&&tt>Gt&&(M=Gt,Gt=tt,tt=M);var J=Mm(C,tt),X=Mm(C,Gt);if(J&&X&&(le.rangeCount!==1||le.anchorNode!==J.node||le.anchorOffset!==J.offset||le.focusNode!==X.node||le.focusOffset!==X.offset)){var ie=Se.createRange();ie.setStart(J.node,J.offset),le.removeAllRanges(),tt>Gt?(le.addRange(ie),le.extend(X.node,X.offset)):(ie.setEnd(X.node,X.offset),le.addRange(ie))}}}}for(Se=[],le=C;le=le.parentNode;)le.nodeType===1&&Se.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Se.length;C++){var ve=Se[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Du=!!xd,Sd=xd=null}finally{Ft=c,V.p=l,B.T=s}}t.current=i,Cn=2}}function F0(){if(Cn===2){Cn=0;var t=ja,i=vs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=B.T,B.T=null;var l=V.p;V.p=2;var c=Ft;Ft|=4;try{p0(t,i.alternate,i)}finally{Ft=c,V.p=l,B.T=s}}Cn=3}}function B0(){if(Cn===4||Cn===3){Cn=0,rt();var t=ja,i=vs,s=xs,l=T0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,vs=ja=null,z0(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ya=null),Pt(s),i=i.stateNode,pe&&typeof pe.onCommitFiberRoot=="function")try{pe.onCommitFiberRoot(he,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=B.T,c=V.p,V.p=2,B.T=null;try{for(var p=t.onRecoverableError,M=0;M<l.length;M++){var C=l[M];p(C.value,{componentStack:C.stack})}}finally{B.T=i,V.p=c}}(xs&3)!==0&&vu(),Bi(t),c=t.pendingLanes,(s&4194090)!==0&&(c&42)!==0?t===rd?Fo++:(Fo=0,rd=t):Fo=0,Bo(0)}}function z0(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,_o(i)))}function vu(t){return I0(),F0(),B0(),H0()}function H0(){if(Cn!==5)return!1;var t=ja,i=id;id=0;var s=Pt(xs),l=B.T,c=V.p;try{V.p=32>s?32:s,B.T=null,s=ad,ad=null;var p=ja,M=xs;if(Cn=0,vs=ja=null,xs=0,(Ft&6)!==0)throw Error(r(331));var C=Ft;if(Ft|=4,E0(p.current),S0(p,p.current,M,s),Ft=C,Bo(0,!1),pe&&typeof pe.onPostCommitFiberRoot=="function")try{pe.onPostCommitFiberRoot(he,p)}catch{}return!0}finally{V.p=c,B.T=l,z0(t,i)}}function V0(t,i,s){i=oi(s,i),i=Ff(t.stateNode,i,2),t=Ba(t,i,2),t!==null&&(Be(t,2),Bi(t))}function Wt(t,i,s){if(t.tag===3)V0(t,t,s);else for(;i!==null;){if(i.tag===3){V0(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ya===null||!Ya.has(l))){t=oi(s,t),s=Wg(2),l=Ba(i,s,2),l!==null&&(qg(s,l,i,t),Be(l,2),Bi(l));break}}i=i.return}}function ud(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Vy;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||($f=!0,c.add(s),t=qy.bind(null,t,i,s),i.then(t,t))}function qy(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Yt===t&&(bt&s)===s&&(tn===4||tn===3&&(bt&62914560)===bt&&300>Tt()-nd?(Ft&2)===0&&Ss(t,0):ed|=s,_s===bt&&(_s=0)),Bi(t)}function G0(t,i){i===0&&(i=Ie()),t=ns(t,i),t!==null&&(Be(t,i),Bi(t))}function Yy(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),G0(t,s)}function jy(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),G0(t,s)}function Zy(t,i){return pt(t,i)}var xu=null,Ms=null,cd=!1,Su=!1,fd=!1,Dr=0;function Bi(t){t!==Ms&&t.next===null&&(Ms===null?xu=Ms=t:Ms=Ms.next=t),Su=!0,cd||(cd=!0,Qy())}function Bo(t,i){if(!fd&&Su){fd=!0;do for(var s=!1,l=xu;l!==null;){if(t!==0){var c=l.pendingLanes;if(c===0)var p=0;else{var M=l.suspendedLanes,C=l.pingedLanes;p=(1<<31-Oe(42|t)+1)-1,p&=c&~(M&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(s=!0,q0(l,p))}else p=bt,p=Ye(l,l===Yt?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||De(l,p)||(s=!0,q0(l,p));l=l.next}while(s);fd=!1}}function Ky(){k0()}function k0(){Su=cd=!1;var t=0;Dr!==0&&(rM()&&(t=Dr),Dr=0);for(var i=Tt(),s=null,l=xu;l!==null;){var c=l.next,p=X0(l,i);p===0?(l.next=null,s===null?xu=c:s.next=c,c===null&&(Ms=s)):(s=l,(t!==0||(p&3)!==0)&&(Su=!0)),l=c}Bo(t)}function X0(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes&-62914561;0<p;){var M=31-Oe(p),C=1<<M,G=c[M];G===-1?((C&s)===0||(C&l)!==0)&&(c[M]=lt(C,i)):G<=i&&(t.expiredLanes|=C),p&=~C}if(i=Yt,s=bt,s=Ye(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&St(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||De(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&St(l),Pt(s)){case 2:case 8:s=Mt;break;case 32:s=Ee;break;case 268435456:s=I;break;default:s=Ee}return l=W0.bind(null,t),s=pt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&St(l),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(vu()&&t.callbackNode!==s)return null;var l=bt;return l=Ye(t,t===Yt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(R0(t,l,i),X0(t,Tt()),t.callbackNode!=null&&t.callbackNode===s?W0.bind(null,t):null)}function q0(t,i){if(vu())return null;R0(t,i,!0)}function Qy(){oM(function(){(Ft&6)!==0?pt(qt,Ky):k0()})}function dd(){return Dr===0&&(Dr=Y()),Dr}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ul(""+t)}function j0(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Jy(t,i,s,l,c){if(i==="submit"&&s&&s.stateNode===c){var p=Y0((c[Tn]||null).action),M=l.submitter;M&&(i=(i=M[Tn]||null)?Y0(i.formAction):M.getAttribute("formAction"),i!==null&&(p=i,M=null));var C=new Ol("action","action",null,l,c);t.push({event:C,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Dr!==0){var G=M?j0(c,M):new FormData(c);Lf(s,{pending:!0,data:G,method:c.method,action:p},null,G)}}else typeof p=="function"&&(C.preventDefault(),G=M?j0(c,M):new FormData(c),Lf(s,{pending:!0,data:G,method:c.method,action:p},p,G))},currentTarget:c}]})}}for(var hd=0;hd<Kc.length;hd++){var pd=Kc[hd],$y=pd.toLowerCase(),eM=pd[0].toUpperCase()+pd.slice(1);Si($y,"on"+eM)}Si(Rm,"onAnimationEnd"),Si(Cm,"onAnimationIteration"),Si(wm,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(_y,"onTransitionRun"),Si(vy,"onTransitionStart"),Si(xy,"onTransitionCancel"),Si(Dm,"onTransitionEnd"),La("onMouseEnter",["mouseout","mouseover"]),La("onMouseLeave",["mouseout","mouseover"]),La("onPointerEnter",["pointerout","pointerover"]),La("onPointerLeave",["pointerout","pointerover"]),Qi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function Z0(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var C=l[M],G=C.instance,ae=C.currentTarget;if(C=C.listener,G!==p&&c.isPropagationStopped())break e;p=C,c.currentTarget=ae;try{p(c)}catch(me){ou(me)}c.currentTarget=null,p=G}else for(M=0;M<l.length;M++){if(C=l[M],G=C.instance,ae=C.currentTarget,C=C.listener,G!==p&&c.isPropagationStopped())break e;p=C,c.currentTarget=ae;try{p(c)}catch(me){ou(me)}c.currentTarget=null,p=G}}}}function vt(t,i){var s=i[to];s===void 0&&(s=i[to]=new Set);var l=t+"__bubble";s.has(l)||(K0(i,t,2,!1),s.add(l))}function md(t,i,s){var l=0;i&&(l|=4),K0(s,t,l,i)}var yu="_reactListening"+Math.random().toString(36).slice(2);function gd(t){if(!t[yu]){t[yu]=!0,no.forEach(function(s){s!=="selectionchange"&&(tM.has(s)||md(s,!1,t),md(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[yu]||(i[yu]=!0,md("selectionchange",!1,i))}}function K0(t,i,s,l){switch(S_(i)){case 2:var c=CM;break;case 8:c=wM;break;default:c=Dd}s=c.bind(null,i,s,t),c=void 0,!Fc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function _d(t,i,s,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var C=l.stateNode.containerInfo;if(C===c)break;if(M===4)for(M=l.return;M!==null;){var G=M.tag;if((G===3||G===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;C!==null;){if(M=Ki(C),M===null)return;if(G=M.tag,G===5||G===6||G===26||G===27){l=p=M;continue e}C=C.parentNode}}l=l.return}im(function(){var ae=p,me=Oc(s),Se=[];e:{var oe=Um.get(t);if(oe!==void 0){var le=Ol,at=t;switch(t){case"keypress":if(Nl(s)===0)break e;case"keydown":case"keyup":le=ZS;break;case"focusin":at="focus",le=Vc;break;case"focusout":at="blur",le=Vc;break;case"beforeblur":case"afterblur":le=Vc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=sm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=JS;break;case Rm:case Cm:case wm:le=HS;break;case Dm:le=ey;break;case"scroll":case"scrollend":le=OS;break;case"wheel":le=ny;break;case"copy":case"cut":case"paste":le=GS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=lm;break;case"toggle":case"beforetoggle":le=ay}var tt=(i&4)!==0,Gt=!tt&&(t==="scroll"||t==="scrollend"),J=tt?oe!==null?oe+"Capture":null:oe;tt=[];for(var X=ae,ie;X!==null;){var ve=X;if(ie=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ie===null||J===null||(ve=io(X,J),ve!=null&&tt.push(Ho(X,ve,ie))),Gt)break;X=X.return}0<tt.length&&(oe=new le(oe,at,null,s,me),Se.push({event:oe,listeners:tt}))}}if((i&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&s!==Pc&&(at=s.relatedTarget||s.fromElement)&&(Ki(at)||at[Ui]))break e;if((le||oe)&&(oe=me.window===me?me:(oe=me.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(at=s.relatedTarget||s.toElement,le=ae,at=at?Ki(at):null,at!==null&&(Gt=u(at),tt=at.tag,at!==Gt||tt!==5&&tt!==27&&tt!==6)&&(at=null)):(le=null,at=ae),le!==at)){if(tt=sm,ve="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(tt=lm,ve="onPointerLeave",J="onPointerEnter",X="pointer"),Gt=le==null?oe:Ua(le),ie=at==null?oe:Ua(at),oe=new tt(ve,X+"leave",le,s,me),oe.target=Gt,oe.relatedTarget=ie,ve=null,Ki(me)===ae&&(tt=new tt(J,X+"enter",at,s,me),tt.target=ie,tt.relatedTarget=Gt,ve=tt),Gt=ve,le&&at)t:{for(tt=le,J=at,X=0,ie=tt;ie;ie=Es(ie))X++;for(ie=0,ve=J;ve;ve=Es(ve))ie++;for(;0<X-ie;)tt=Es(tt),X--;for(;0<ie-X;)J=Es(J),ie--;for(;X--;){if(tt===J||J!==null&&tt===J.alternate)break t;tt=Es(tt),J=Es(J)}tt=null}else tt=null;le!==null&&Q0(Se,oe,le,tt,!1),at!==null&&Gt!==null&&Q0(Se,Gt,at,tt,!0)}}e:{if(oe=ae?Ua(ae):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var je=gm;else if(pm(oe))if(_m)je=py;else{je=dy;var gt=fy}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ae&&pr(ae.elementType)&&(je=gm):je=hy;if(je&&(je=je(t,ae))){mm(Se,je,s,me);break e}gt&&gt(t,oe,ae),t==="focusout"&&ae&&oe.type==="number"&&ae.memoizedProps.value!=null&&Ni(oe,"number",oe.value)}switch(gt=ae?Ua(ae):window,t){case"focusin":(pm(gt)||gt.contentEditable==="true")&&($r=gt,Yc=ae,fo=null);break;case"focusout":fo=Yc=$r=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Tm(Se,s,me);break;case"selectionchange":if(gy)break;case"keydown":case"keyup":Tm(Se,s,me)}var Ke;if(kc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Jr?dm(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(um&&s.locale!=="ko"&&(Jr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Jr&&(Ke=am()):(Pa=me,Bc="value"in Pa?Pa.value:Pa.textContent,Jr=!0)),gt=Mu(ae,nt),0<gt.length&&(nt=new om(nt,t,null,s,me),Se.push({event:nt,listeners:gt}),Ke?nt.data=Ke:(Ke=hm(s),Ke!==null&&(nt.data=Ke)))),(Ke=sy?oy(t,s):ly(t,s))&&(nt=Mu(ae,"onBeforeInput"),0<nt.length&&(gt=new om("onBeforeInput","beforeinput",null,s,me),Se.push({event:gt,listeners:nt}),gt.data=Ke)),Jy(Se,t,ae,s,me)}Z0(Se,i)})}function Ho(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Mu(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||p===null||(c=io(t,s),c!=null&&l.unshift(Ho(t,c,p)),c=io(t,i),c!=null&&l.push(Ho(t,c,p))),t.tag===3)return l;t=t.return}return[]}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,i,s,l,c){for(var p=i._reactName,M=[];s!==null&&s!==l;){var C=s,G=C.alternate,ae=C.stateNode;if(C=C.tag,G!==null&&G===l)break;C!==5&&C!==26&&C!==27||ae===null||(G=ae,c?(ae=io(s,p),ae!=null&&M.unshift(Ho(s,ae,G))):c||(ae=io(s,p),ae!=null&&M.push(Ho(s,ae,G)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(nM,`
`).replace(iM,"")}function $0(t,i){return i=J0(i),J0(t)===i}function Eu(){}function Vt(t,i,s,l,c,p){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||an(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&an(t,""+l);break;case"className":ce(t,"class",l);break;case"tabIndex":ce(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ce(t,s,l);break;case"style":An(t,l,p);break;case"data":if(i!=="object"){ce(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ul(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(s==="formAction"?(i!=="input"&&Vt(t,i,"name",c.name,c,null),Vt(t,i,"formEncType",c.formEncType,c,null),Vt(t,i,"formMethod",c.formMethod,c,null),Vt(t,i,"formTarget",c.formTarget,c,null)):(Vt(t,i,"encType",c.encType,c,null),Vt(t,i,"method",c.method,c,null),Vt(t,i,"target",c.target,c,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Ul(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Eu);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Ul(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":vt("beforetoggle",t),vt("toggle",t),Q(t,"popover",l);break;case"xlinkActuate":se(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":se(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":se(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":se(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":se(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":se(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":se(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":se(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":se(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Q(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Ji.get(s)||s,Q(t,s,l))}}function vd(t,i,s,l,c,p){switch(s){case"style":An(t,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=s}}break;case"children":typeof l=="string"?an(t,l):(typeof l=="number"||typeof l=="bigint")&&an(t,""+l);break;case"onScroll":l!=null&&vt("scroll",t);break;case"onScrollEnd":l!=null&&vt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Eu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cl.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(c=s.endsWith("Capture"),i=s.slice(2,c?s.length-7:void 0),p=t[Tn]||null,p=p!=null?p[s]:null,typeof p=="function"&&t.removeEventListener(i,p,c),typeof l=="function")){typeof p!="function"&&p!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,c);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Q(t,s,l)}}}function wn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var l=!1,c=!1,p;for(p in s)if(s.hasOwnProperty(p)){var M=s[p];if(M!=null)switch(p){case"src":l=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,p,M,s,null)}}c&&Vt(t,i,"srcSet",s.srcSet,s,null),l&&Vt(t,i,"src",s.src,s,null);return;case"input":vt("invalid",t);var C=p=M=c=null,G=null,ae=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":c=me;break;case"type":M=me;break;case"checked":G=me;break;case"defaultChecked":ae=me;break;case"value":p=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,i));break;default:Vt(t,i,l,me,s,null)}}Un(t,p,C,G,ae,M,c,!1),Xt(t);return;case"select":vt("invalid",t),l=M=p=null;for(c in s)if(s.hasOwnProperty(c)&&(C=s[c],C!=null))switch(c){case"value":p=C;break;case"defaultValue":M=C;break;case"multiple":l=C;default:Vt(t,i,c,C,s,null)}i=p,s=M,t.multiple=!!l,i!=null?ln(t,!!l,i,!1):s!=null&&ln(t,!!l,s,!0);return;case"textarea":vt("invalid",t),p=c=l=null;for(M in s)if(s.hasOwnProperty(M)&&(C=s[M],C!=null))switch(M){case"value":l=C;break;case"defaultValue":c=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Vt(t,i,M,C,s,null)}It(t,l,c,p),Xt(t);return;case"option":for(G in s)if(s.hasOwnProperty(G)&&(l=s[G],l!=null))switch(G){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Vt(t,i,G,l,s,null)}return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(l=0;l<zo.length;l++)vt(zo[l],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ae in s)if(s.hasOwnProperty(ae)&&(l=s[ae],l!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:Vt(t,i,ae,l,s,null)}return;default:if(pr(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&vd(t,i,me,l,s,void 0));return}}for(C in s)s.hasOwnProperty(C)&&(l=s[C],l!=null&&Vt(t,i,C,l,s,null))}function aM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,p=null,M=null,C=null,G=null,ae=null,me=null;for(le in s){var Se=s[le];if(s.hasOwnProperty(le)&&Se!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":G=Se;default:l.hasOwnProperty(le)||Vt(t,i,le,null,l,Se)}}for(var oe in l){var le=l[oe];if(Se=s[oe],l.hasOwnProperty(oe)&&(le!=null||Se!=null))switch(oe){case"type":p=le;break;case"name":c=le;break;case"checked":ae=le;break;case"defaultChecked":me=le;break;case"value":M=le;break;case"defaultValue":C=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,i));break;default:le!==Se&&Vt(t,i,oe,le,l,Se)}}xt(t,M,C,G,ae,me,p,c);return;case"select":le=M=C=oe=null;for(p in s)if(G=s[p],s.hasOwnProperty(p)&&G!=null)switch(p){case"value":break;case"multiple":le=G;default:l.hasOwnProperty(p)||Vt(t,i,p,null,l,G)}for(c in l)if(p=l[c],G=s[c],l.hasOwnProperty(c)&&(p!=null||G!=null))switch(c){case"value":oe=p;break;case"defaultValue":C=p;break;case"multiple":M=p;default:p!==G&&Vt(t,i,c,p,l,G)}i=C,s=M,l=le,oe!=null?ln(t,!!s,oe,!1):!!l!=!!s&&(i!=null?ln(t,!!s,i,!0):ln(t,!!s,s?[]:"",!1));return;case"textarea":le=oe=null;for(C in s)if(c=s[C],s.hasOwnProperty(C)&&c!=null&&!l.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(t,i,C,null,l,c)}for(M in l)if(c=l[M],p=s[M],l.hasOwnProperty(M)&&(c!=null||p!=null))switch(M){case"value":oe=c;break;case"defaultValue":le=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==p&&Vt(t,i,M,c,l,p)}Na(t,oe,le);return;case"option":for(var at in s)if(oe=s[at],s.hasOwnProperty(at)&&oe!=null&&!l.hasOwnProperty(at))switch(at){case"selected":t.selected=!1;break;default:Vt(t,i,at,null,l,oe)}for(G in l)if(oe=l[G],le=s[G],l.hasOwnProperty(G)&&oe!==le&&(oe!=null||le!=null))switch(G){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Vt(t,i,G,oe,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in s)oe=s[tt],s.hasOwnProperty(tt)&&oe!=null&&!l.hasOwnProperty(tt)&&Vt(t,i,tt,null,l,oe);for(ae in l)if(oe=l[ae],le=s[ae],l.hasOwnProperty(ae)&&oe!==le&&(oe!=null||le!=null))switch(ae){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,i));break;default:Vt(t,i,ae,oe,l,le)}return;default:if(pr(i)){for(var Gt in s)oe=s[Gt],s.hasOwnProperty(Gt)&&oe!==void 0&&!l.hasOwnProperty(Gt)&&vd(t,i,Gt,void 0,l,oe);for(me in l)oe=l[me],le=s[me],!l.hasOwnProperty(me)||oe===le||oe===void 0&&le===void 0||vd(t,i,me,oe,l,le);return}}for(var J in s)oe=s[J],s.hasOwnProperty(J)&&oe!=null&&!l.hasOwnProperty(J)&&Vt(t,i,J,null,l,oe);for(Se in l)oe=l[Se],le=s[Se],!l.hasOwnProperty(Se)||oe===le||oe==null&&le==null||Vt(t,i,Se,oe,l,le)}var xd=null,Sd=null;function bu(t){return t.nodeType===9?t:t.ownerDocument}function e_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function yd(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Md=null;function rM(){var t=window.event;return t&&t.type==="popstate"?t===Md?!1:(Md=t,!0):(Md=null,!1)}var n_=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(t){return i_.resolve(null).then(t).catch(lM)}:n_;function lM(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function a_(t,i){var s=i,l=0,c=0;do{var p=s.nextSibling;if(t.removeChild(s),p&&p.nodeType===8)if(s=p.data,s==="/$"){if(0<l&&8>l){s=l;var M=t.ownerDocument;if(s&1&&Vo(M.documentElement),s&2&&Vo(M.body),s&4)for(s=M.head,Vo(s),M=s.firstChild;M;){var C=M.nextSibling,G=M.nodeName;M[Zi]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&M.rel.toLowerCase()==="stylesheet"||s.removeChild(M),M=C}}if(c===0){t.removeChild(p),Zo(i);return}c--}else s==="$"||s==="$?"||s==="$!"?c++:l=s.charCodeAt(0)-48;else l=0;s=p}while(s);Zo(i)}function Ed(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ed(s),Zr(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function uM(t,i,s,l){for(;t.nodeType===1;){var c=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Zi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(p=t.getAttribute("rel"),p==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(p!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(p=t.getAttribute("src"),(p!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&p&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var p=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===p)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function cM(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Mi(t.nextSibling),t===null))return null;return t}function bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fM(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Mi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Td=null;function r_(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function s_(t,i,s){switch(i=bu(s),t){case"html":if(t=i.documentElement,!t)throw Error(r(452));return t;case"head":if(t=i.head,!t)throw Error(r(453));return t;case"body":if(t=i.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Vo(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Zr(t)}var hi=new Map,o_=new Set;function Tu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=V.d;V.d={f:dM,r:hM,D:pM,C:mM,L:gM,m:_M,X:xM,S:vM,M:SM};function dM(){var t=da.f(),i=gu();return t||i}function hM(t){var i=vi(t);i!==null&&i.tag===5&&i.type==="form"?Rg(i):da.r(t)}var bs=typeof document>"u"?null:document;function l_(t,i,s){var l=bs;if(l&&typeof i=="string"&&i){var c=ot(i);c='link[rel="'+t+'"][href="'+c+'"]',typeof s=="string"&&(c+='[crossorigin="'+s+'"]'),o_.has(c)||(o_.add(c),t={rel:t,crossOrigin:s,href:i},l.querySelector(c)===null&&(i=l.createElement("link"),wn(i,"link",t),nn(i),l.head.appendChild(i)))}}function pM(t){da.D(t),l_("dns-prefetch",t,null)}function mM(t,i){da.C(t,i),l_("preconnect",t,i)}function gM(t,i,s){da.L(t,i,s);var l=bs;if(l&&t&&i){var c='link[rel="preload"][as="'+ot(i)+'"]';i==="image"&&s&&s.imageSrcSet?(c+='[imagesrcset="'+ot(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(c+='[imagesizes="'+ot(s.imageSizes)+'"]')):c+='[href="'+ot(t)+'"]';var p=c;switch(i){case"style":p=Ts(t);break;case"script":p=As(t)}hi.has(p)||(t=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),hi.set(p,t),l.querySelector(c)!==null||i==="style"&&l.querySelector(Go(p))||i==="script"&&l.querySelector(ko(p))||(i=l.createElement("link"),wn(i,"link",t),nn(i),l.head.appendChild(i)))}}function _M(t,i){da.m(t,i);var s=bs;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+ot(l)+'"][href="'+ot(t)+'"]',p=c;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=As(t)}if(!hi.has(p)&&(t=g({rel:"modulepreload",href:t},i),hi.set(p,t),s.querySelector(c)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ko(p)))return}l=s.createElement("link"),wn(l,"link",t),nn(l),s.head.appendChild(l)}}}function vM(t,i,s){da.S(t,i,s);var l=bs;if(l&&t){var c=xi(l).hoistableStyles,p=Ts(t);i=i||"default";var M=c.get(p);if(!M){var C={loading:0,preload:null};if(M=l.querySelector(Go(p)))C.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":i},s),(s=hi.get(p))&&Ad(t,s);var G=M=l.createElement("link");nn(G),wn(G,"link",t),G._p=new Promise(function(ae,me){G.onload=ae,G.onerror=me}),G.addEventListener("load",function(){C.loading|=1}),G.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Au(M,i,l)}M={type:"stylesheet",instance:M,count:1,state:C},c.set(p,M)}}}function xM(t,i){da.X(t,i);var s=bs;if(s&&t){var l=xi(s).hoistableScripts,c=As(t),p=l.get(c);p||(p=s.querySelector(ko(c)),p||(t=g({src:t,async:!0},i),(i=hi.get(c))&&Rd(t,i),p=s.createElement("script"),nn(p),wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function SM(t,i){da.M(t,i);var s=bs;if(s&&t){var l=xi(s).hoistableScripts,c=As(t),p=l.get(c);p||(p=s.querySelector(ko(c)),p||(t=g({src:t,async:!0,type:"module"},i),(i=hi.get(c))&&Rd(t,i),p=s.createElement("script"),nn(p),wn(p,"link",t),s.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(c,p))}}function u_(t,i,s,l){var c=(c=te.current)?Tu(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Ts(s.href),s=xi(c).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Ts(s.href);var p=xi(c).hoistableStyles,M=p.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(t,M),(p=c.querySelector(Go(t)))&&!p._p&&(M.instance=p,M.state.loading=5),hi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},hi.set(t,s),p||yM(c,t,s,M.state))),i&&l===null)throw Error(r(528,""));return M}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=As(s),s=xi(c).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ts(t){return'href="'+ot(t)+'"'}function Go(t){return'link[rel="stylesheet"]['+t+"]"}function c_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function yM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),wn(i,"link",s),nn(i),t.head.appendChild(i))}function As(t){return'[src="'+ot(t)+'"]'}function ko(t){return"script[async]"+t}function f_(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+ot(s.href)+'"]');if(l)return i.instance=l,nn(l),l;var c=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),nn(l),wn(l,"style",c),Au(l,s.precedence,t),i.instance=l;case"stylesheet":c=Ts(s.href);var p=t.querySelector(Go(c));if(p)return i.state.loading|=4,i.instance=p,nn(p),p;l=c_(s),(c=hi.get(c))&&Ad(l,c),p=(t.ownerDocument||t).createElement("link"),nn(p);var M=p;return M._p=new Promise(function(C,G){M.onload=C,M.onerror=G}),wn(p,"link",l),i.state.loading|=4,Au(p,s.precedence,t),i.instance=p;case"script":return p=As(s.src),(c=t.querySelector(ko(p)))?(i.instance=c,nn(c),c):(l=s,(c=hi.get(p))&&(l=g({},s),Rd(l,c)),t=t.ownerDocument||t,c=t.createElement("script"),nn(c),wn(c,"link",l),t.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Au(l,s.precedence,t));return i.instance}function Au(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=l.length?l[l.length-1]:null,p=c,M=0;M<l.length;M++){var C=l[M];if(C.dataset.precedence===i)p=C;else if(p!==c)break}p?p.parentNode.insertBefore(t,p.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Ad(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Rd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Ru=null;function d_(t,i,s){if(Ru===null){var l=new Map,c=Ru=new Map;c.set(s,l)}else c=Ru,l=c.get(s),l||(l=new Map,c.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),c=0;c<s.length;c++){var p=s[c];if(!(p[Zi]||p[vn]||t==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var M=p.getAttribute(i)||"";M=t+M;var C=l.get(M);C?C.push(p):l.set(M,[p])}}return l}function h_(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function MM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function p_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Xo=null;function EM(){}function bM(t,i,s){if(Xo===null)throw Error(r(475));var l=Xo;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=Ts(s.href),p=t.querySelector(Go(c));if(p){t=p._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Cu.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=p,nn(p);return}p=t.ownerDocument||t,s=c_(s),(c=hi.get(c))&&Ad(s,c),p=p.createElement("link"),nn(p);var M=p;M._p=new Promise(function(C,G){M.onload=C,M.onerror=G}),wn(p,"link",s),i.instance=p}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=Cu.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function TM(){if(Xo===null)throw Error(r(475));var t=Xo;return t.stylesheets&&t.count===0&&Cd(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Cd(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function Cu(){if(this.count--,this.count===0){if(this.stylesheets)Cd(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var wu=null;function Cd(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,wu=new Map,i.forEach(AM,t),wu=null,Cu.call(t))}function AM(t,i){if(!(i.state.loading&4)){var s=wu.get(t);if(s)var l=s.get(null);else{s=new Map,wu.set(t,s);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<c.length;p++){var M=c[p];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(s.set(M.dataset.precedence,M),l=M)}l&&s.set(null,l)}c=i.instance,M=c.getAttribute("data-precedence"),p=s.get(M)||l,p===l&&s.set(null,c),s.set(M,c),this.count++,l=Cu.bind(this),c.addEventListener("load",l),c.addEventListener("error",l),p?p.parentNode.insertBefore(c,p.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),i.state.loading|=4}}var Wo={$$typeof:R,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function RM(t,i,s,l,c,p,M,C){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=c,this.onCaughtError=p,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function m_(t,i,s,l,c,p,M,C,G,ae,me,Se){return t=new RM(t,i,s,M,C,G,ae,Se),i=1,p===!0&&(i|=24),p=Kn(3,null,null,i),t.current=p,p.stateNode=t,i=uf(),i.refCount++,t.pooledCache=i,i.refCount++,p.memoizedState={element:l,isDehydrated:s,cache:i},hf(p),t}function g_(t){return t?(t=is,t):is}function __(t,i,s,l,c,p){c=g_(c),l.context===null?l.context=c:l.pendingContext=c,l=Fa(i),l.payload={element:s},p=p===void 0?null:p,p!==null&&(l.callback=p),s=Ba(t,l,i),s!==null&&(ti(s,t,i),yo(s,t,i))}function v_(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function wd(t,i){v_(t,i),(t=t.alternate)&&v_(t,i)}function x_(t){if(t.tag===13){var i=ns(t,67108864);i!==null&&ti(i,t,67108864),wd(t,67108864)}}var Du=!0;function CM(t,i,s,l){var c=B.T;B.T=null;var p=V.p;try{V.p=2,Dd(t,i,s,l)}finally{V.p=p,B.T=c}}function wM(t,i,s,l){var c=B.T;B.T=null;var p=V.p;try{V.p=8,Dd(t,i,s,l)}finally{V.p=p,B.T=c}}function Dd(t,i,s,l){if(Du){var c=Ud(l);if(c===null)_d(t,i,l,Uu,s),y_(t,l);else if(UM(c,t,i,s,l))l.stopPropagation();else if(y_(t,l),i&4&&-1<DM.indexOf(t)){for(;c!==null;){var p=vi(c);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var M=He(p.pendingLanes);if(M!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;M;){var G=1<<31-Oe(M);C.entanglements[1]|=G,M&=~G}Bi(p),(Ft&6)===0&&(pu=Tt()+500,Bo(0))}}break;case 13:C=ns(p,2),C!==null&&ti(C,p,2),gu(),wd(p,2)}if(p=Ud(l),p===null&&_d(t,i,l,Uu,s),p===c)break;c=p}c!==null&&l.stopPropagation()}else _d(t,i,l,null,s)}}function Ud(t){return t=Oc(t),Ld(t)}var Uu=null;function Ld(t){if(Uu=null,t=Ki(t),t!==null){var i=u(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=f(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Uu=t,null}function S_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(k()){case qt:return 2;case Mt:return 8;case Ee:case Ce:return 32;case I:return 268435456;default:return 32}default:return 32}}var Nd=!1,Qa=null,Ja=null,$a=null,qo=new Map,Yo=new Map,er=[],DM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function y_(t,i){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(i.pointerId)}}function jo(t,i,s,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=vi(i),i!==null&&x_(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function UM(t,i,s,l,c){switch(i){case"focusin":return Qa=jo(Qa,t,i,s,l,c),!0;case"dragenter":return Ja=jo(Ja,t,i,s,l,c),!0;case"mouseover":return $a=jo($a,t,i,s,l,c),!0;case"pointerover":var p=c.pointerId;return qo.set(p,jo(qo.get(p)||null,t,i,s,l,c)),!0;case"gotpointercapture":return p=c.pointerId,Yo.set(p,jo(Yo.get(p)||null,t,i,s,l,c)),!0}return!1}function M_(t){var i=Ki(t.target);if(i!==null){var s=u(i);if(s!==null){if(i=s.tag,i===13){if(i=f(s),i!==null){t.blockedOn=i,si(t.priority,function(){if(s.tag===13){var l=ei();l=it(l);var c=ns(s,l);c!==null&&ti(c,s,l),wd(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ud(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Pc=l,s.target.dispatchEvent(l),Pc=null}else return i=vi(s),i!==null&&x_(i),t.blockedOn=s,!1;i.shift()}return!0}function E_(t,i,s){Lu(t)&&s.delete(i)}function LM(){Nd=!1,Qa!==null&&Lu(Qa)&&(Qa=null),Ja!==null&&Lu(Ja)&&(Ja=null),$a!==null&&Lu($a)&&($a=null),qo.forEach(E_),Yo.forEach(E_)}function Nu(t,i){t.blockedOn===i&&(t.blockedOn=null,Nd||(Nd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,LM)))}var Pu=null;function b_(t){Pu!==t&&(Pu=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Pu===t&&(Pu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],c=t[i+2];if(typeof l!="function"){if(Ld(l||s)===null)continue;break}var p=vi(s);p!==null&&(t.splice(i,3),i-=3,Lf(p,{pending:!0,data:c,method:s.method,action:l},l,c))}}))}function Zo(t){function i(G){return Nu(G,t)}Qa!==null&&Nu(Qa,t),Ja!==null&&Nu(Ja,t),$a!==null&&Nu($a,t),qo.forEach(i),Yo.forEach(i);for(var s=0;s<er.length;s++){var l=er[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<er.length&&(s=er[0],s.blockedOn===null);)M_(s),s.blockedOn===null&&er.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var c=s[l],p=s[l+1],M=c[Tn]||null;if(typeof p=="function")M||b_(s);else if(M){var C=null;if(p&&p.hasAttribute("formAction")){if(c=p,M=p[Tn]||null)C=M.formAction;else if(Ld(c)!==null)continue}else C=M.action;typeof C=="function"?s[l+1]=C:(s.splice(l,3),l-=3),b_(s)}}}function Pd(t){this._internalRoot=t}Ou.prototype.render=Pd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=ei();__(s,l,t,i,null,null)},Ou.prototype.unmount=Pd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;__(t.current,2,null,t,null,null),gu(),i[Ui]=null}};function Ou(t){this._internalRoot=t}Ou.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ct();t={blockedOn:null,target:t,priority:i};for(var s=0;s<er.length&&i!==0&&i<er[s].priority;s++);er.splice(s,0,t),s===0&&M_(t)}};var T_=e.version;if(T_!=="19.1.0")throw Error(r(527,T_,"19.1.0"));V.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(i),t=t!==null?h(t):null,t=t===null?null:t.stateNode,t};var NM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Iu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Iu.isDisabled&&Iu.supportsFiber)try{he=Iu.inject(NM),pe=Iu}catch{}}return Qo.createRoot=function(t,i){if(!o(t))throw Error(r(299));var s=!1,l="",c=Vg,p=Gg,M=kg,C=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(p=i.onCaughtError),i.onRecoverableError!==void 0&&(M=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(C=i.unstable_transitionCallbacks)),i=m_(t,1,!1,null,null,s,l,c,p,M,C,null),t[Ui]=i.current,gd(t),new Pd(i)},Qo.hydrateRoot=function(t,i,s){if(!o(t))throw Error(r(299));var l=!1,c="",p=Vg,M=Gg,C=kg,G=null,ae=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(p=s.onUncaughtError),s.onCaughtError!==void 0&&(M=s.onCaughtError),s.onRecoverableError!==void 0&&(C=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(G=s.unstable_transitionCallbacks),s.formState!==void 0&&(ae=s.formState)),i=m_(t,1,!0,i,s??null,l,c,p,M,C,G,ae),i.context=g_(null),s=i.current,l=ei(),l=it(l),c=Fa(l),c.callback=null,Ba(s,c,l),s=l,i.current.lanes=s,Be(i,s),Bi(i),t[Ui]=i.current,gd(t),new Ou(i)},Qo.version="19.1.0",Qo}var O_;function kM(){if(O_)return Fd.exports;O_=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Fd.exports=GM(),Fd.exports}var XM=kM();const WM=OM(XM);/**
 * react-router v7.12.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var I_="popstate";function qM(a={}){function e(o,u){let{pathname:f="/",search:d="",hash:m=""}=qr(o.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Rh("",{pathname:f,search:d,hash:m},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function n(o,u){let f=o.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let m=o.location.href,h=m.indexOf("#");d=h===-1?m:m.slice(0,h)}return d+"#"+(typeof u=="string"?u:ul(u))}function r(o,u){gi(o.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return jM(e,n,r,a)}function $t(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function gi(a,e){if(!a){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function YM(){return Math.random().toString(36).substring(2,10)}function F_(a,e){return{usr:a.state,key:a.key,idx:e}}function Rh(a,e,n=null,r){return{pathname:typeof a=="string"?a:a.pathname,search:"",hash:"",...typeof e=="string"?qr(e):e,state:n,key:e&&e.key||r||YM()}}function ul({pathname:a="/",search:e="",hash:n=""}){return e&&e!=="?"&&(a+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(a+=n.charAt(0)==="#"?n:"#"+n),a}function qr(a){let e={};if(a){let n=a.indexOf("#");n>=0&&(e.hash=a.substring(n),a=a.substring(0,n));let r=a.indexOf("?");r>=0&&(e.search=a.substring(r),a=a.substring(0,r)),a&&(e.pathname=a)}return e}function jM(a,e,n,r={}){let{window:o=document.defaultView,v5Compat:u=!1}=r,f=o.history,d="POP",m=null,h=g();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function g(){return(f.state||{idx:null}).idx}function _(){d="POP";let y=g(),x=y==null?null:y-h;h=y,m&&m({action:d,location:b.location,delta:x})}function v(y,x){d="PUSH";let U=Rh(b.location,y,x);n&&n(U,y),h=g()+1;let R=F_(U,h),P=b.createHref(U);try{f.pushState(R,"",P)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;o.location.assign(P)}u&&m&&m({action:d,location:b.location,delta:1})}function S(y,x){d="REPLACE";let U=Rh(b.location,y,x);n&&n(U,y),h=g();let R=F_(U,h),P=b.createHref(U);f.replaceState(R,"",P),u&&m&&m({action:d,location:b.location,delta:0})}function E(y){return ZM(y)}let b={get action(){return d},get location(){return a(o,f)},listen(y){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(I_,_),m=y,()=>{o.removeEventListener(I_,_),m=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let x=E(y);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(y){return f.go(y)}};return b}function ZM(a,e=!1){let n="http://localhost";typeof window<"u"&&(n=window.location.origin!=="null"?window.location.origin:window.location.href),$t(n,"No window.location.(origin|href) available to create URL");let r=typeof a=="string"?a:ul(a);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=n+r),new URL(r,n)}function Qv(a,e,n="/"){return KM(a,e,n,!1)}function KM(a,e,n,r){let o=typeof e=="string"?qr(e):e,u=ba(o.pathname||"/",n);if(u==null)return null;let f=Jv(a);QM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let h=lE(u);d=sE(f[m],h,r)}return d}function Jv(a,e=[],n=[],r="",o=!1){let u=(f,d,m=o,h)=>{let g={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;$t(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let _=Sa([r,g.relativePath]),v=n.concat(g);f.children&&f.children.length>0&&($t(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Jv(f.children,e,v,_,m)),!(f.path==null&&!f.index)&&e.push({path:_,score:aE(_,f.index),routesMeta:v})};return a.forEach((f,d)=>{var m;if(f.path===""||!((m=f.path)!=null&&m.includes("?")))u(f,d);else for(let h of $v(f.path))u(f,d,!0,h)}),e}function $v(a){let e=a.split("/");if(e.length===0)return[];let[n,...r]=e,o=n.endsWith("?"),u=n.replace(/\?$/,"");if(r.length===0)return o?[u,""]:[u];let f=$v(r.join("/")),d=[];return d.push(...f.map(m=>m===""?u:[u,m].join("/"))),o&&d.push(...f),d.map(m=>a.startsWith("/")&&m===""?"/":m)}function QM(a){a.sort((e,n)=>e.score!==n.score?n.score-e.score:rE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var JM=/^:[\w-]+$/,$M=3,eE=2,tE=1,nE=10,iE=-2,B_=a=>a==="*";function aE(a,e){let n=a.split("/"),r=n.length;return n.some(B_)&&(r+=iE),e&&(r+=eE),n.filter(o=>!B_(o)).reduce((o,u)=>o+(JM.test(u)?$M:u===""?tE:nE),r)}function rE(a,e){return a.length===e.length&&a.slice(0,-1).every((r,o)=>r===e[o])?a[a.length-1]-e[e.length-1]:0}function sE(a,e,n=!1){let{routesMeta:r}=a,o={},u="/",f=[];for(let d=0;d<r.length;++d){let m=r[d],h=d===r.length-1,g=u==="/"?e:e.slice(u.length)||"/",_=gc({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},g),v=m.route;if(!_&&h&&n&&!r[r.length-1].route.index&&(_=gc({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!_)return null;Object.assign(o,_.params),f.push({params:o,pathname:Sa([u,_.pathname]),pathnameBase:dE(Sa([u,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(u=Sa([u,_.pathnameBase]))}return f}function gc(a,e){typeof a=="string"&&(a={path:a,caseSensitive:!1,end:!0});let[n,r]=oE(a.path,a.caseSensitive,a.end),o=e.match(n);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:r.reduce((h,{paramName:g,isOptional:_},v)=>{if(g==="*"){let E=d[v]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[v];return _&&!S?h[g]=void 0:h[g]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:u,pathnameBase:f,pattern:a}}function oE(a,e=!1,n=!0){gi(a==="*"||!a.endsWith("*")||a.endsWith("/*"),`Route path "${a}" will be treated as if it were "${a.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${a.replace(/\*$/,"/*")}".`);let r=[],o="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(r.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return a.endsWith("*")?(r.push({paramName:"*"}),o+=a==="*"||a==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":a!==""&&a!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function lE(a){try{return a.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gi(!1,`The URL path "${a}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),a}}function ba(a,e){if(e==="/")return a;if(!a.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=a.charAt(n);return r&&r!=="/"?null:a.slice(n)||"/"}var ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,uE=a=>ex.test(a);function cE(a,e="/"){let{pathname:n,search:r="",hash:o=""}=typeof a=="string"?qr(a):a,u;if(n)if(uE(n))u=n;else{if(n.includes("//")){let f=n;n=n.replace(/\/\/+/g,"/"),gi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${n}`)}n.startsWith("/")?u=z_(n.substring(1),"/"):u=z_(n,e)}else u=e;return{pathname:u,search:hE(r),hash:pE(o)}}function z_(a,e){let n=e.replace(/\/+$/,"").split("/");return a.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Vd(a,e,n,r){return`Cannot include a '${a}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function fE(a){return a.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function tx(a){let e=fE(a);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function nx(a,e,n,r=!1){let o;typeof a=="string"?o=qr(a):(o={...a},$t(!o.pathname||!o.pathname.includes("?"),Vd("?","pathname","search",o)),$t(!o.pathname||!o.pathname.includes("#"),Vd("#","pathname","hash",o)),$t(!o.search||!o.search.includes("#"),Vd("#","search","hash",o)));let u=a===""||o.pathname==="",f=u?"/":o.pathname,d;if(f==null)d=n;else{let _=e.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}d=_>=0?e[_]:"/"}let m=cE(o,d),h=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&n.endsWith("/");return!m.pathname.endsWith("/")&&(h||g)&&(m.pathname+="/"),m}var Sa=a=>a.join("/").replace(/\/\/+/g,"/"),dE=a=>a.replace(/\/+$/,"").replace(/^\/*/,"/"),hE=a=>!a||a==="?"?"":a.startsWith("?")?a:"?"+a,pE=a=>!a||a==="#"?"":a.startsWith("#")?a:"#"+a,mE=class{constructor(a,e,n,r=!1){this.status=a,this.statusText=e||"",this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function gE(a){return a!=null&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.internal=="boolean"&&"data"in a}function _E(a){return a.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ax(a,e){let n=a;if(typeof n!="string"||!ex.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,o=!1;if(ix)try{let u=new URL(window.location.href),f=n.startsWith("//")?new URL(u.protocol+n):new URL(n),d=ba(f.pathname,e);f.origin===u.origin&&d!=null?n=d+f.search+f.hash:o=!0}catch{gi(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var rx=["POST","PUT","PATCH","DELETE"];new Set(rx);var vE=["GET",...rx];new Set(vE);var Qs=D.createContext(null);Qs.displayName="DataRouter";var Mc=D.createContext(null);Mc.displayName="DataRouterState";var xE=D.createContext(!1),sx=D.createContext({isTransitioning:!1});sx.displayName="ViewTransition";var SE=D.createContext(new Map);SE.displayName="Fetchers";var yE=D.createContext(null);yE.displayName="Await";var _i=D.createContext(null);_i.displayName="Navigation";var ml=D.createContext(null);ml.displayName="Location";var Ca=D.createContext({outlet:null,matches:[],isDataRoute:!1});Ca.displayName="Route";var Dp=D.createContext(null);Dp.displayName="RouteError";var ox="REACT_ROUTER_ERROR",ME="REDIRECT",EE="ROUTE_ERROR_RESPONSE";function bE(a){if(a.startsWith(`${ox}:${ME}:{`))try{let e=JSON.parse(a.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function TE(a){if(a.startsWith(`${ox}:${EE}:{`))try{let e=JSON.parse(a.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new mE(e.status,e.statusText,e.data)}catch{}}function AE(a,{relative:e}={}){$t(gl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=D.useContext(_i),{hash:o,pathname:u,search:f}=_l(a,{relative:e}),d=u;return n!=="/"&&(d=u==="/"?n:Sa([n,u])),r.createHref({pathname:d,search:f,hash:o})}function gl(){return D.useContext(ml)!=null}function Yr(){return $t(gl(),"useLocation() may be used only in the context of a <Router> component."),D.useContext(ml).location}var lx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ux(a){D.useContext(_i).static||D.useLayoutEffect(a)}function RE(){let{isDataRoute:a}=D.useContext(Ca);return a?HE():CE()}function CE(){$t(gl(),"useNavigate() may be used only in the context of a <Router> component.");let a=D.useContext(Qs),{basename:e,navigator:n}=D.useContext(_i),{matches:r}=D.useContext(Ca),{pathname:o}=Yr(),u=JSON.stringify(tx(r)),f=D.useRef(!1);return ux(()=>{f.current=!0}),D.useCallback((m,h={})=>{if(gi(f.current,lx),!f.current)return;if(typeof m=="number"){n.go(m);return}let g=nx(m,JSON.parse(u),o,h.relative==="path");a==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Sa([e,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[e,n,u,o,a])}D.createContext(null);function _l(a,{relative:e}={}){let{matches:n}=D.useContext(Ca),{pathname:r}=Yr(),o=JSON.stringify(tx(n));return D.useMemo(()=>nx(a,JSON.parse(o),r,e==="path"),[a,o,r,e])}function wE(a,e){return cx(a,e)}function cx(a,e,n,r,o){var U;$t(gl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=D.useContext(_i),{matches:f}=D.useContext(Ca),d=f[f.length-1],m=d?d.params:{},h=d?d.pathname:"/",g=d?d.pathnameBase:"/",_=d&&d.route;{let R=_&&_.path||"";dx(h,!_||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let v=Yr(),S;if(e){let R=typeof e=="string"?qr(e):e;$t(g==="/"||((U=R.pathname)==null?void 0:U.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=v;let E=S.pathname||"/",b=E;if(g!=="/"){let R=g.replace(/^\//,"").split("/");b="/"+E.replace(/^\//,"").split("/").slice(R.length).join("/")}let y=Qv(a,{pathname:b});gi(_||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),gi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let x=PE(y&&y.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:Sa([g,u.encodeLocation?u.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?g:Sa([g,u.encodeLocation?u.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,n,r,o);return e&&x?D.createElement(ml.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},x):x}function DE(){let a=zE(),e=gE(a)?`${a.status} ${a.statusText}`:a instanceof Error?a.message:JSON.stringify(a),n=a instanceof Error?a.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",a),f=D.createElement(D.Fragment,null,D.createElement("p",null,"💿 Hey developer 👋"),D.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",D.createElement("code",{style:u},"ErrorBoundary")," or"," ",D.createElement("code",{style:u},"errorElement")," prop on your route.")),D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:o},n):null,f)}var UE=D.createElement(DE,null),fx=class extends D.Component{constructor(a){super(a),this.state={location:a.location,revalidation:a.revalidation,error:a.error}}static getDerivedStateFromError(a){return{error:a}}static getDerivedStateFromProps(a,e){return e.location!==a.location||e.revalidation!=="idle"&&a.revalidation==="idle"?{error:a.error,location:a.location,revalidation:a.revalidation}:{error:a.error!==void 0?a.error:e.error,location:e.location,revalidation:a.revalidation||e.revalidation}}componentDidCatch(a,e){this.props.onError?this.props.onError(a,e):console.error("React Router caught the following error during render",a)}render(){let a=this.state.error;if(this.context&&typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){const n=TE(a.digest);n&&(a=n)}let e=a!==void 0?D.createElement(Ca.Provider,{value:this.props.routeContext},D.createElement(Dp.Provider,{value:a,children:this.props.component})):this.props.children;return this.context?D.createElement(LE,{error:a},e):e}};fx.contextType=xE;var Gd=new WeakMap;function LE({children:a,error:e}){let{basename:n}=D.useContext(_i);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=bE(e.digest);if(r){let o=Gd.get(e);if(o)throw o;let u=ax(r.location,n);if(ix&&!Gd.get(e))if(u.isExternal||r.reloadDocument)window.location.href=u.absoluteURL||u.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:r.replace}));throw Gd.set(e,f),f}return D.createElement("meta",{httpEquiv:"refresh",content:`0;url=${u.absoluteURL||u.to}`})}}return a}function NE({routeContext:a,match:e,children:n}){let r=D.useContext(Qs);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),D.createElement(Ca.Provider,{value:a},n)}function PE(a,e=[],n=null,r=null,o=null){if(a==null){if(!n)return null;if(n.errors)a=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)a=n.matches;else return null}let u=a,f=n==null?void 0:n.errors;if(f!=null){let g=u.findIndex(_=>_.route.id&&(f==null?void 0:f[_.route.id])!==void 0);$t(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),u=u.slice(0,Math.min(u.length,g+1))}let d=!1,m=-1;if(n)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=g),_.route.id){let{loaderData:v,errors:S}=n,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||E){d=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}let h=n&&r?(g,_)=>{var v,S;r(g,{location:n.location,params:((S=(v=n.matches)==null?void 0:v[0])==null?void 0:S.params)??{},unstable_pattern:_E(n.matches),errorInfo:_})}:void 0;return u.reduceRight((g,_,v)=>{let S,E=!1,b=null,y=null;n&&(S=f&&_.route.id?f[_.route.id]:void 0,b=_.route.errorElement||UE,d&&(m<0&&v===0?(dx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):m===v&&(E=!0,y=_.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,v+1)),U=()=>{let R;return S?R=b:E?R=y:_.route.Component?R=D.createElement(_.route.Component,null):_.route.element?R=_.route.element:R=g,D.createElement(NE,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:n!=null},children:R})};return n&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?D.createElement(fx,{location:n.location,revalidation:n.revalidation,component:b,error:S,children:U(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:h}):U()},null)}function Up(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function OE(a){let e=D.useContext(Qs);return $t(e,Up(a)),e}function IE(a){let e=D.useContext(Mc);return $t(e,Up(a)),e}function FE(a){let e=D.useContext(Ca);return $t(e,Up(a)),e}function Lp(a){let e=FE(a),n=e.matches[e.matches.length-1];return $t(n.route.id,`${a} can only be used on routes that contain a unique "id"`),n.route.id}function BE(){return Lp("useRouteId")}function zE(){var r;let a=D.useContext(Dp),e=IE("useRouteError"),n=Lp("useRouteError");return a!==void 0?a:(r=e.errors)==null?void 0:r[n]}function HE(){let{router:a}=OE("useNavigate"),e=Lp("useNavigate"),n=D.useRef(!1);return ux(()=>{n.current=!0}),D.useCallback(async(o,u={})=>{gi(n.current,lx),n.current&&(typeof o=="number"?await a.navigate(o):await a.navigate(o,{fromRouteId:e,...u}))},[a,e])}var H_={};function dx(a,e,n){!e&&!H_[a]&&(H_[a]=!0,gi(!1,n))}D.memo(VE);function VE({routes:a,future:e,state:n,onError:r}){return cx(a,void 0,n,r,e)}function rc(a){$t(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function GE({basename:a="/",children:e=null,location:n,navigationType:r="POP",navigator:o,static:u=!1,unstable_useTransitions:f}){$t(!gl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=a.replace(/^\/*/,"/"),m=D.useMemo(()=>({basename:d,navigator:o,static:u,unstable_useTransitions:f,future:{}}),[d,o,u,f]);typeof n=="string"&&(n=qr(n));let{pathname:h="/",search:g="",hash:_="",state:v=null,key:S="default"}=n,E=D.useMemo(()=>{let b=ba(h,d);return b==null?null:{location:{pathname:b,search:g,hash:_,state:v,key:S},navigationType:r}},[d,h,g,_,v,S,r]);return gi(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:D.createElement(_i.Provider,{value:m},D.createElement(ml.Provider,{children:e,value:E}))}function kE({children:a,location:e}){return wE(Ch(a),e)}function Ch(a,e=[]){let n=[];return D.Children.forEach(a,(r,o)=>{if(!D.isValidElement(r))return;let u=[...e,o];if(r.type===D.Fragment){n.push.apply(n,Ch(r.props.children,u));return}$t(r.type===rc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),$t(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Ch(r.props.children,u)),n.push(f)}),n}var sc="get",oc="application/x-www-form-urlencoded";function Ec(a){return typeof HTMLElement<"u"&&a instanceof HTMLElement}function XE(a){return Ec(a)&&a.tagName.toLowerCase()==="button"}function WE(a){return Ec(a)&&a.tagName.toLowerCase()==="form"}function qE(a){return Ec(a)&&a.tagName.toLowerCase()==="input"}function YE(a){return!!(a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)}function jE(a,e){return a.button===0&&(!e||e==="_self")&&!YE(a)}var Fu=null;function ZE(){if(Fu===null)try{new FormData(document.createElement("form"),0),Fu=!1}catch{Fu=!0}return Fu}var KE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function kd(a){return a!=null&&!KE.has(a)?(gi(!1,`"${a}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${oc}"`),null):a}function QE(a,e){let n,r,o,u,f;if(WE(a)){let d=a.getAttribute("action");r=d?ba(d,e):null,n=a.getAttribute("method")||sc,o=kd(a.getAttribute("enctype"))||oc,u=new FormData(a)}else if(XE(a)||qE(a)&&(a.type==="submit"||a.type==="image")){let d=a.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=a.getAttribute("formaction")||d.getAttribute("action");if(r=m?ba(m,e):null,n=a.getAttribute("formmethod")||d.getAttribute("method")||sc,o=kd(a.getAttribute("formenctype"))||kd(d.getAttribute("enctype"))||oc,u=new FormData(d,a),!ZE()){let{name:h,type:g,value:_}=a;if(g==="image"){let v=h?`${h}.`:"";u.append(`${v}x`,"0"),u.append(`${v}y`,"0")}else h&&u.append(h,_)}}else{if(Ec(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=sc,r=null,o=oc,f=a}return u&&o==="text/plain"&&(f=u,u=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Np(a,e){if(a===!1||a===null||typeof a>"u")throw new Error(e)}function JE(a,e,n,r){let o=typeof a=="string"?new URL(a,typeof window>"u"?"server://singlefetch/":window.location.origin):a;return n?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&ba(o.pathname,e)==="/"?o.pathname=`${e.replace(/\/$/,"")}/_root.${r}`:o.pathname=`${o.pathname.replace(/\/$/,"")}.${r}`,o}async function $E(a,e){if(a.id in e)return e[a.id];try{let n=await import(a.module);return e[a.id]=n,n}catch(n){return console.error(`Error loading route module \`${a.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function eb(a){return a==null?!1:a.href==null?a.rel==="preload"&&typeof a.imageSrcSet=="string"&&typeof a.imageSizes=="string":typeof a.rel=="string"&&typeof a.href=="string"}async function tb(a,e,n){let r=await Promise.all(a.map(async o=>{let u=e.routes[o.route.id];if(u){let f=await $E(u,n);return f.links?f.links():[]}return[]}));return rb(r.flat(1).filter(eb).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function V_(a,e,n,r,o,u){let f=(m,h)=>n[h]?m.route.id!==n[h].route.id:!0,d=(m,h)=>{var g;return n[h].pathname!==m.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==m.params["*"]};return u==="assets"?e.filter((m,h)=>f(m,h)||d(m,h)):u==="data"?e.filter((m,h)=>{var _;let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,h)||d(m,h))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((_=n[0])==null?void 0:_.params)||{},nextUrl:new URL(a,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function nb(a,e,{includeHydrateFallback:n}={}){return ib(a.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),n&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function ib(a){return[...new Set(a)]}function ab(a){let e={},n=Object.keys(a).sort();for(let r of n)e[r]=a[r];return e}function rb(a,e){let n=new Set;return new Set(e),a.reduce((r,o)=>{let u=JSON.stringify(ab(o));return n.has(u)||(n.add(u),r.push({key:u,link:o})),r},[])}function hx(){let a=D.useContext(Qs);return Np(a,"You must render this element inside a <DataRouterContext.Provider> element"),a}function sb(){let a=D.useContext(Mc);return Np(a,"You must render this element inside a <DataRouterStateContext.Provider> element"),a}var Pp=D.createContext(void 0);Pp.displayName="FrameworkContext";function px(){let a=D.useContext(Pp);return Np(a,"You must render this element inside a <HydratedRouter> element"),a}function ob(a,e){let n=D.useContext(Pp),[r,o]=D.useState(!1),[u,f]=D.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:h,onMouseLeave:g,onTouchStart:_}=e,v=D.useRef(null);D.useEffect(()=>{if(a==="render"&&f(!0),a==="viewport"){let b=x=>{x.forEach(U=>{f(U.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[a]),D.useEffect(()=>{if(r){let b=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(b)}}},[r]);let S=()=>{o(!0)},E=()=>{o(!1),f(!1)};return n?a!=="intent"?[u,v,{}]:[u,v,{onFocus:Jo(d,S),onBlur:Jo(m,E),onMouseEnter:Jo(h,S),onMouseLeave:Jo(g,E),onTouchStart:Jo(_,S)}]:[!1,v,{}]}function Jo(a,e){return n=>{a&&a(n),n.defaultPrevented||e(n)}}function lb({page:a,...e}){let{router:n}=hx(),r=D.useMemo(()=>Qv(n.routes,a,n.basename),[n.routes,a,n.basename]);return r?D.createElement(cb,{page:a,matches:r,...e}):null}function ub(a){let{manifest:e,routeModules:n}=px(),[r,o]=D.useState([]);return D.useEffect(()=>{let u=!1;return tb(a,e,n).then(f=>{u||o(f)}),()=>{u=!0}},[a,e,n]),r}function cb({page:a,matches:e,...n}){let r=Yr(),{future:o,manifest:u,routeModules:f}=px(),{basename:d}=hx(),{loaderData:m,matches:h}=sb(),g=D.useMemo(()=>V_(a,e,h,u,r,"data"),[a,e,h,u,r]),_=D.useMemo(()=>V_(a,e,h,u,r,"assets"),[a,e,h,u,r]),v=D.useMemo(()=>{if(a===r.pathname+r.search+r.hash)return[];let b=new Set,y=!1;if(e.forEach(U=>{var P;let R=u.routes[U.route.id];!R||!R.hasLoader||(!g.some(N=>N.route.id===U.route.id)&&U.route.id in m&&((P=f[U.route.id])!=null&&P.shouldRevalidate)||R.hasClientLoader?y=!0:b.add(U.route.id))}),b.size===0)return[];let x=JE(a,d,o.unstable_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&x.searchParams.set("_routes",e.filter(U=>b.has(U.route.id)).map(U=>U.route.id).join(",")),[x.pathname+x.search]},[d,o.unstable_trailingSlashAwareDataRequests,m,r,u,g,e,a,f]),S=D.useMemo(()=>nb(_,u),[_,u]),E=ub(_);return D.createElement(D.Fragment,null,v.map(b=>D.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...n})),S.map(b=>D.createElement("link",{key:b,rel:"modulepreload",href:b,...n})),E.map(({key:b,link:y})=>D.createElement("link",{key:b,nonce:n.nonce,...y})))}function fb(...a){return e=>{a.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var db=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{db&&(window.__reactRouterVersion="7.12.0")}catch{}function hb({basename:a,children:e,unstable_useTransitions:n,window:r}){let o=D.useRef();o.current==null&&(o.current=qM({window:r,v5Compat:!0}));let u=o.current,[f,d]=D.useState({action:u.action,location:u.location}),m=D.useCallback(h=>{n===!1?d(h):D.startTransition(()=>d(h))},[n]);return D.useLayoutEffect(()=>u.listen(m),[u,m]),D.createElement(GE,{basename:a,children:e,location:f.location,navigationType:f.action,navigator:u,unstable_useTransitions:n})}var mx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ll=D.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:o,reloadDocument:u,replace:f,state:d,target:m,to:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E){let{basename:b,unstable_useTransitions:y}=D.useContext(_i),x=typeof h=="string"&&mx.test(h),U=ax(h,b);h=U.to;let R=AE(h,{relative:o}),[P,N,z]=ob(r,S),F=_b(h,{replace:f,state:d,target:m,preventScrollReset:g,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function W(L){e&&e(L),L.defaultPrevented||F(L)}let A=D.createElement("a",{...S,...z,href:U.absoluteURL||R,onClick:U.isExternal||u?e:W,ref:fb(E,N),target:m,"data-discover":!x&&n==="render"?"true":void 0});return P&&!x?D.createElement(D.Fragment,null,A,D.createElement(lb,{page:R})):A});ll.displayName="Link";var pb=D.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:o=!1,style:u,to:f,viewTransition:d,children:m,...h},g){let _=_l(f,{relative:h.relative}),v=Yr(),S=D.useContext(Mc),{navigator:E,basename:b}=D.useContext(_i),y=S!=null&&Mb(_)&&d===!0,x=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,U=v.pathname,R=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;n||(U=U.toLowerCase(),R=R?R.toLowerCase():null,x=x.toLowerCase()),R&&b&&(R=ba(R,b)||R);const P=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let N=U===x||!o&&U.startsWith(x)&&U.charAt(P)==="/",z=R!=null&&(R===x||!o&&R.startsWith(x)&&R.charAt(x.length)==="/"),F={isActive:N,isPending:z,isTransitioning:y},W=N?e:void 0,A;typeof r=="function"?A=r(F):A=[r,N?"active":null,z?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof u=="function"?u(F):u;return D.createElement(ll,{...h,"aria-current":W,className:A,ref:g,style:L,to:f,viewTransition:d},typeof m=="function"?m(F):m)});pb.displayName="NavLink";var mb=D.forwardRef(({discover:a="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:o,state:u,method:f=sc,action:d,onSubmit:m,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v,...S},E)=>{let{unstable_useTransitions:b}=D.useContext(_i),y=Sb(),x=yb(d,{relative:h}),U=f.toLowerCase()==="get"?"get":"post",R=typeof d=="string"&&mx.test(d),P=N=>{if(m&&m(N),N.defaultPrevented)return;N.preventDefault();let z=N.nativeEvent.submitter,F=(z==null?void 0:z.getAttribute("formmethod"))||f,W=()=>y(z||N.currentTarget,{fetcherKey:e,method:F,navigate:n,replace:o,state:u,relative:h,preventScrollReset:g,viewTransition:_,unstable_defaultShouldRevalidate:v});b&&n!==!1?D.startTransition(()=>W()):W()};return D.createElement("form",{ref:E,method:U,action:x,onSubmit:r?m:P,...S,"data-discover":!R&&a==="render"?"true":void 0})});mb.displayName="Form";function gb(a){return`${a} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gx(a){let e=D.useContext(Qs);return $t(e,gb(a)),e}function _b(a,{target:e,replace:n,state:r,preventScrollReset:o,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let h=RE(),g=Yr(),_=_l(a,{relative:u});return D.useCallback(v=>{if(jE(v,e)){v.preventDefault();let S=n!==void 0?n:ul(g)===ul(_),E=()=>h(a,{replace:S,state:r,preventScrollReset:o,relative:u,viewTransition:f,unstable_defaultShouldRevalidate:d});m?D.startTransition(()=>E()):E()}},[g,h,_,n,r,e,a,o,u,f,d,m])}var vb=0,xb=()=>`__${String(++vb)}__`;function Sb(){let{router:a}=gx("useSubmit"),{basename:e}=D.useContext(_i),n=BE(),r=a.fetch,o=a.navigate;return D.useCallback(async(u,f={})=>{let{action:d,method:m,encType:h,formData:g,body:_}=QE(u,e);if(f.navigate===!1){let v=f.fetcherKey||xb();await r(v,n,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||h,flushSync:f.flushSync})}else await o(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:g,body:_,formMethod:f.method||m,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:n,flushSync:f.flushSync,viewTransition:f.viewTransition})},[r,o,e,n])}function yb(a,{relative:e}={}){let{basename:n}=D.useContext(_i),r=D.useContext(Ca);$t(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),u={..._l(a||".",{relative:e})},f=Yr();if(a==null){u.search=f.search;let d=new URLSearchParams(u.search),m=d.getAll("index");if(m.some(g=>g==="")){d.delete("index"),m.filter(_=>_).forEach(_=>d.append("index",_));let g=d.toString();u.search=g?`?${g}`:""}}return(!a||a===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(u.pathname=u.pathname==="/"?n:Sa([n,u.pathname])),ul(u)}function Mb(a,{relative:e}={}){let n=D.useContext(sx);$t(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=gx("useViewTransitionState"),o=_l(a,{relative:e});if(!n.isTransitioning)return!1;let u=ba(n.currentLocation.pathname,r)||n.currentLocation.pathname,f=ba(n.nextLocation.pathname,r)||n.nextLocation.pathname;return gc(o.pathname,f)!=null||gc(o.pathname,u)!=null}var Eb=Kv();function bb(a){const[e,n]=D.useState(a);return a!==e&&(!a||!e||a.length!==e.length||a.some((r,o)=>r!==e[o]))?(n(a),a):e}function Tb(a,[e,n]){const[r,o]=a;return r!==void 0&&o!==void 0&&e!==void 0&&n!==void 0&&e>r&&e-r<=20&&n<o?[r,n]:r!==e||o!==n?[e,n]:a}function Ab(a,e){let n=a==null?void 0:a.clientWidth;if(n!==void 0&&e&&e.length>0){const r=[...e.filter(o=>o>0)].sort((o,u)=>u-o);r.push(Math.floor(r[r.length-1]/2)),n=r.find((o,u)=>o<=n||u===r.length-1)}return n}function Rb(a,e,n){const[[r],o]=D.useReducer(Tb,[n]),u=bb(e),f=D.useRef(void 0);return{containerRef:D.useCallback(m=>{var g;(g=f.current)==null||g.disconnect(),f.current=void 0;const h=()=>o([Ab(m,u),window.innerWidth-document.documentElement.clientWidth]);h(),m&&typeof ResizeObserver<"u"&&(f.current=new ResizeObserver(h),f.current.observe(m)),typeof a=="function"?a(m):a&&(a.current=m)},[a,u]),containerWidth:r}}function Cb(...a){return[...a].filter(Boolean).join(" ")}function _x(a){return["react-photo-album",a].filter(Boolean).join("--")}function wb(a){return`--${_x(a)}`}function Op({width:a,height:e}){return a/e}const Db=Object.freeze([1200,600,300,0]);function ur(a,e){return typeof a=="function"?a(e):a}function vx(a,e){return e!==void 0?ur(a,e):void 0}function Ub(a,e){const n=Db.findIndex(r=>r<=e);return ur(a[Math.max(n,0)],e)}function wh(a,e,n,r=0){if(e===void 0)return;const o=vx(a,e);return Math.round(Math.max(o===void 0?Ub(n,e):o,r))}function Lb(a,{spacing:e,padding:n,componentsProps:r,render:o}){return{spacing:wh(e,a,[20,15,10,5]),padding:wh(n,a,[0,0,0,0]),componentsProps:ur(r,a)||{},render:ur(o,a)}}function cl(a,e=0){const n=10**e;return Math.round((a+Number.EPSILON)*n)/n}function Nb(a,e,n,r,o,u,f){let d,m;const h=_=>{var S;const v=u*(o-1)+2*f*o;return`calc((${((S=_.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:S[1])??_} - ${v}px) / ${cl((r-v)/n,5)})`},g=a.srcSet;return g&&g.length>0&&(d=g.concat(g.some(({width:_})=>_===a.width)?[]:[{src:a.src,width:a.width,height:a.height}]).sort((_,v)=>_.width-v.width).map(_=>`${_.src} ${_.width}w`).join(", ")),e!=null&&e.size?m=(e.sizes||[]).map(({viewport:_,size:v})=>`${_} ${h(v)}`).concat(h(e.size)).join(", "):m=`${Math.ceil(n/r*100)}vw`,{srcSet:d,sizes:m}}function Pb({as:a,render:e,context:n,classes:r=[],variables:o={},style:u,className:f,children:d,...m},h){const g=Cb(...(Array.isArray(r)?r:[r]).filter(E=>typeof E=="string").map(_x),f),v={style:{...Object.fromEntries(Object.entries(o).map(([E,b])=>[wb(E.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),typeof b=="number"?cl(b,5):b])),...u},className:g,children:d,...m};if(e){const E=e({ref:h,...v},n);if(E)return E}const S=a||"div";return Xe.jsx(S,{ref:h,...v})}const _c=D.forwardRef(Pb);function Ob({photo:a,index:e,width:n,height:r,onClick:o,render:{wrapper:u,link:f,button:d,image:m,extras:h}={},componentsProps:{link:g,button:_,wrapper:v,image:S}={}},E){const{href:b}=a,y={photo:a,index:e,width:cl(n,3),height:cl(r,3)};let x;return b?x={...g,as:"a",render:f,classes:["photo","link"],href:b,onClick:o}:o?x={..._,as:"button",type:"button",render:d,classes:["photo","button"],onClick:o}:x={...v,render:u,classes:"photo"},Xe.jsxs(_c,{ref:E,variables:{photoWidth:y.width,photoHeight:y.height},context:y,...x,children:[Xe.jsx(_c,{as:"img",classes:"image",render:m,context:y,...S}),h==null?void 0:h({},y)]})}const Ib=D.forwardRef(Ob);function Fb({layout:a,sizes:e,model:n,skeleton:r,onClick:o,render:{container:u,track:f,photo:d,...m}={},componentsProps:{container:h,track:g,link:_,button:v,wrapper:S,image:E}={}},b){const{spacing:y,padding:x,containerWidth:U,tracks:R,variables:P,horizontal:N}=n||{};return Xe.jsxs(_c,{role:"group","aria-label":"Photo album",...h,variables:{spacing:y,padding:x,containerWidth:U,...P},classes:["",a],render:u,ref:b,children:[y!==void 0&&x!==void 0&&U!==void 0&&(R==null?void 0:R.map(({photos:z,variables:F},W)=>{const A=z.length,L=N?A:R.length;return D.createElement(_c,{...g,key:W,render:f,classes:"track",variables:{trackSize:A,...F}},z.map(H=>{const{photo:Z,index:j,width:re}=H,{key:$,src:B,alt:V,title:ee,label:xe}=Z,O=o?ue=>{o({event:ue,photo:Z,index:j})}:void 0;if(d){const ue=d({onClick:O},H);if(ue)return ue}const K=ue=>xe?{"aria-label":xe,...ue}:ue;return Xe.jsx(Ib,{onClick:O,render:m,componentsProps:{image:{loading:"lazy",decoding:"async",src:B,alt:V,title:ee,...Nb(Z,e,re,U,L,y,x),...ur(E,H)},link:K(ur(_,H)),button:K(ur(v,H)),wrapper:ur(S,H)},...H},$??B)}))})),U===void 0&&r]})}const Bb=D.forwardRef(Fb);function zb(a,{photos:e,targetRowHeight:n,rowConstraints:r,...o}){const{spacing:u,padding:f,componentsProps:d,render:m}=Lb(a,o),{singleRowMaxHeight:h,minPhotos:g,maxPhotos:_}=vx(r,a)||{};if(h!==void 0&&u!==void 0&&f!==void 0){const v=Math.floor(e.reduce((S,{width:E,height:b})=>S+E/b*h-2*f,f*e.length*2+u*(e.length-1)));v>0&&(d.container={...d.container},d.container.style={maxWidth:v,...d.container.style})}return{...o,targetRowHeight:wh(n,a,[v=>v/5,v=>v/4,v=>v/3,v=>v/2]),render:m,spacing:u,padding:f,minPhotos:g,maxPhotos:_,componentsProps:d}}function Hb(a){return(e,n)=>a(n)-a(e)}function Vb(a){let e=0;const n=[],r=(g,_)=>a(n[g],n[_])<0,o=(g,_)=>{const v=n[g];n[g]=n[_],n[_]=v},u=g=>{let _=g,v=Math.floor(_/2);for(;_>1&&r(v,_);)o(v,_),_=v,v=Math.floor(_/2)},f=g=>{let _=g,v=_*2;for(;v<=e&&(v<e&&r(v,v+1)&&(v+=1),!!r(_,v));)o(_,v),_=v,v=_*2};return{push:g=>{e+=1,n[e]=g,u(e)},pop:()=>{if(e===0)return;o(1,e),e-=1;const g=n.pop();return f(1),g},size:()=>e}}function Gb(a,e,n){const r=new Map,o=new Set,u=new Map;u.set(e,0);const f=Vb(Hb(d=>d[1]));for(f.push([e,0]);f.size()>0;){const[d,m]=f.pop();if(!o.has(d)){const h=a(d);o.add(d),h.forEach((g,_)=>{const v=m+g,S=r.get(_),E=u.get(_);(E===void 0||E>v&&(E/v>1.005||S!==void 0&&S<d))&&(u.set(_,v),f.push([_,v]),r.set(_,d))})}}return u.has(n)?r:void 0}function kb(a,e){if(!a)return;const n=[];for(let r=e;r!==void 0;r=a.get(r))n.push(r);return n.reverse()}function Xb(a,e,n){return kb(Gb(a,e,n),n)}function Wb(a,e,n,r){return cl(e/n/Math.min(...a.map(o=>Op(o))))+(r||0)+2}function xx(a,e,n,r){return(e-(a.length-1)*n-2*r*a.length)/a.reduce((o,u)=>o+Op(u),0)}function qb(a,e,n,r,o,u,f){const d=a.slice(e,n),m=xx(d,r,o,u);return m>0?(m-f)**2*d.length:void 0}function Yb(a,e,n,r,o,u,f,d){return m=>{const h=new Map;h.set(m,0);const g=f||1,_=Math.min(u,d||1/0);for(let v=m+g;v<a.length+1&&!(v-m>_);v+=1){const S=qb(a,m,v,r,e,n,o);if(S===void 0)break;h.set(v,S)}return h}}function jb(a,e,n,r,o,u,f){const d=Wb(a,r,o,u),m=Yb(a,e,n,r,o,d,u,f),h=Xb(m,0,a.length);if(!h)return;const g=[];for(let _=1;_<h.length;_+=1){const v=a.map((E,b)=>({photo:E,index:b})).slice(h[_-1],h[_]),S=xx(v.map(({photo:E})=>E),r,e,n);g.push({photos:v.map(({photo:E,index:b})=>({photo:E,index:b,width:S*Op(E),height:S}))})}return{spacing:e,padding:n,containerWidth:r,tracks:g,horizontal:!0}}function Zb({photos:a,breakpoints:e,defaultContainerWidth:n,...r},o){const{containerRef:u,containerWidth:f}=Rb(o,e,n),{spacing:d,padding:m,targetRowHeight:h,minPhotos:g,maxPhotos:_,...v}=zb(f,{photos:a,...r}),S=D.useMemo(()=>f!==void 0&&d!==void 0&&m!==void 0&&h!==void 0?jb(a,d,m,f,h,g,_):void 0,[a,d,m,f,h,g,_]);return Xe.jsx(Bb,{layout:"rows",ref:u,model:S,...v})}const Kb=D.forwardRef(Zb),Sx="carousel",Ip="controller",Qb="navigation",Jb="no-scroll",Fp="portal",$b="root",yx="toolbar",Dh="fullscreen",G_="thumbnails",Xd="loading",Wd="error",qd="complete",eT="placeholder",tT=a=>`active-slide-${a}`,nT="fullsize",Mx="flex_center",iT="no_scroll",Ex="no_scroll_padding",Bp="slide",aT="slide_wrapper",zr="prev",Hr="next",k_="swipe",Xs="close",bx="onPointerDown",Tx="onPointerMove",Ax="onPointerUp",Rx="onPointerLeave",Cx="onPointerCancel",wx="onKeyDown",rT="onKeyUp",Dx="onWheel",sT="Escape",oT="ArrowLeft",lT="ArrowRight",uT="button",Uh="icon",Ux="contain",X_="cover",cT="Unknown action type",Lx="yarl__";function ki(...a){return[...a].filter(Boolean).join(" ")}function Lt(a){return`${Lx}${a}`}function Yn(a){return`--${Lx}${a}`}function vl(a,e){return`${a}${e?`_${e}`:""}`}function zp(a){return e=>vl(a,e)}function Ws(a,e){var n;return(n=a==null?void 0:a[e])!==null&&n!==void 0?n:e}function fT(a,e,n){return Ws(a,"{index} of {total}").replace(/\{index}/g,`${Gp(n,e.length)+1}`).replace(/\{total}/g,`${e.length}`)}function Hp(...a){return()=>{a.forEach(e=>{e()})}}function wa(a,e,n){return()=>{const r=D.useContext(n);if(!r)throw new Error(`${a} must be used within a ${e}.Provider`);return r}}function Nx(){return typeof window<"u"}function dT(a,e=0){const n=10**e;return Math.round((a+Number.EPSILON)*n)/n}function Vp(a){return a.type===void 0||a.type==="image"}function hT(a,e){return a.imageFit===X_||a.imageFit!==Ux&&e===X_}function bc(a){return typeof a=="string"?Number.parseInt(a,10):a}function vc(a){if(typeof a=="number")return{pixel:a};if(typeof a=="string"){const e=bc(a);return a.endsWith("%")?{percent:e}:{pixel:e}}return{pixel:0}}function pT(a,e){const n=vc(e),r=n.percent!==void 0?a.width/100*n.percent:n.pixel;return{width:Math.max(a.width-2*r,0),height:Math.max(a.height-2*r,0)}}function Gp(a,e){return e>0?(a%e+e)%e:0}function Px(a){return a.length>0}function Ox(a,e){return a[Gp(e,a.length)]}function Lh(a,e){return Px(a)?Ox(a,e):void 0}function mT(a){return Vp(a)?a.src:void 0}function Ix(a,e,n){if(!n)return a;const{buttons:r,...o}=a,u=r.findIndex(d=>d===e),f=D.isValidElement(n)?D.cloneElement(n,{key:e},null):n;if(u>=0){const d=[...r];return d.splice(u,1,f),{buttons:d,...o}}return{buttons:[f,...r],...o}}function gT(a,e,n=0){return Math.min(a.preload,Math.max(a.finite?e.length-1:Math.floor(e.length/2),n))}const _T=Number(D.version.split(".")[0])>=19;function vT(a){return{inert:_T?a:a?"":void 0}}function xT(a){a.scrollTop}const Nh={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Xs]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:Ux,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function dr(a,e){return{name:a,component:e}}function bn(a,e){return{module:a,children:e}}function Fx(a,e,n){return a.module.name===e?n(a):a.children?[bn(a.module,a.children.flatMap(r=>{var o;return(o=Fx(r,e,n))!==null&&o!==void 0?o:[]}))]:[a]}function Rs(a,e,n){return a.flatMap(r=>{var o;return(o=Fx(r,e,n))!==null&&o!==void 0?o:[]})}function ST(a,e=[],n=[]){let r=a;const o=S=>{const E=[...r];for(;E.length>0;){const b=E.pop();if((b==null?void 0:b.module.name)===S)return!0;b!=null&&b.children&&E.push(...b.children)}return!1},u=(S,E)=>{if(S===""){r=[bn(E,r)];return}r=Rs(r,S,b=>[bn(E,[b])])},f=(S,E)=>{r=Rs(r,S,b=>[bn(b.module,[bn(E,b.children)])])},d=(S,E,b)=>{r=Rs(r,S,y=>{var x;return[bn(y.module,[...b?[bn(E)]:[],...(x=y.children)!==null&&x!==void 0?x:[],...b?[]:[bn(E)]])]})},m=(S,E,b)=>{r=Rs(r,S,y=>[...b?[bn(E)]:[],y,...b?[]:[bn(E)]])},h=S=>{f(Ip,S)},g=(S,E)=>{r=Rs(r,S,b=>[bn(E,b.children)])},_=S=>{r=Rs(r,S,E=>E.children)},v=S=>{n.push(S)};return e.forEach(S=>{S({contains:o,addParent:u,append:f,addChild:d,addSibling:m,addModule:h,replace:g,remove:_,augment:v})}),{config:r,augmentation:S=>n.reduce((E,b)=>b(E),S)}}const Bx=D.createContext(null),zx=wa("useA11yContext","A11yContext",Bx);function yT({children:a}){const[e,n]=D.useState(!1),[r,o]=D.useState(!1),u=D.useMemo(()=>({focusWithin:e,trackFocusWithin:(d,m)=>{const h=g=>_=>{var v;_.currentTarget.contains(_.relatedTarget)||n(g),(v=g?d:m)===null||v===void 0||v(_)};return{onFocus:h(!0),onBlur:h(!1)}},autoPlaying:r,setAutoPlaying:o}),[e,r]);return D.createElement(Bx.Provider,{value:u},a)}const Hx=D.createContext(null),Tc=wa("useDocument","DocumentContext",Hx);function MT({nodeRef:a,children:e}){const n=D.useMemo(()=>{const r=u=>{var f;return((f=u||a.current)===null||f===void 0?void 0:f.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:u=>{var f;return((f=r(u))===null||f===void 0?void 0:f.defaultView)||window}}},[a]);return D.createElement(Hx.Provider,{value:n},e)}const Vx=D.createContext(null),Ac=wa("useEvents","EventsContext",Vx);function ET({children:a}){const[e]=D.useState({});D.useEffect(()=>()=>{Object.keys(e).forEach(r=>delete e[r])},[e]);const n=D.useMemo(()=>{const r=(f,d)=>{var m;(m=e[f])===null||m===void 0||m.splice(0,e[f].length,...e[f].filter(h=>h!==d))};return{publish:(...[f,d])=>{var m;(m=e[f])===null||m===void 0||m.forEach(h=>h(d))},subscribe:(f,d)=>(e[f]||(e[f]=[]),e[f].push(d),()=>r(f,d)),unsubscribe:r}},[e]);return D.createElement(Vx.Provider,{value:n},a)}const Gx=D.createContext(null),jr=wa("useLightboxProps","LightboxPropsContext",Gx);function bT({children:a,...e}){return D.createElement(Gx.Provider,{value:e},a)}const kx=D.createContext(null),xl=wa("useLightboxState","LightboxStateContext",kx),Xx=D.createContext(null),TT=wa("useLightboxDispatch","LightboxDispatchContext",Xx);function AT(a,e){switch(e.type){case"swipe":{const{slides:n}=a,r=(e==null?void 0:e.increment)||0,o=a.globalIndex+r,u=Gp(o,n.length),f=Lh(n,u),d=r||e.duration!==void 0?{increment:r,duration:e.duration,easing:e.easing}:void 0;return{slides:n,currentIndex:u,globalIndex:o,currentSlide:f,animation:d}}case"update":return e.slides!==a.slides||e.index!==a.currentIndex?{slides:e.slides,currentIndex:e.index,globalIndex:e.index,currentSlide:Lh(e.slides,e.index)}:a;default:throw new Error(cT)}}function RT({slides:a,index:e,children:n}){const[r,o]=D.useReducer(AT,{slides:a,currentIndex:e,globalIndex:e,currentSlide:Lh(a,e)});D.useEffect(()=>{o({type:"update",slides:a,index:e})},[a,e]);const u=D.useMemo(()=>({...r,state:r,dispatch:o}),[r,o]);return D.createElement(Xx.Provider,{value:o},D.createElement(kx.Provider,{value:u},n))}const Wx=D.createContext(null),Rc=wa("useTimeouts","TimeoutsContext",Wx);function CT({children:a}){const[e]=D.useState([]);D.useEffect(()=>()=>{e.forEach(r=>window.clearTimeout(r)),e.splice(0,e.length)},[e]);const n=D.useMemo(()=>{const r=f=>{e.splice(0,e.length,...e.filter(d=>d!==f))};return{setTimeout:(f,d)=>{const m=window.setTimeout(()=>{r(m),f()},d);return e.push(m),m},clearTimeout:f=>{f!==void 0&&(r(f),window.clearTimeout(f))}}},[e]);return D.createElement(Wx.Provider,{value:n},a)}const Cc=D.forwardRef(function({label:e,className:n,icon:r,renderIcon:o,onClick:u,style:f,...d},m){const{styles:h,labels:g}=jr(),_=Ws(g,e);return D.createElement("button",{ref:m,type:"button",title:_,"aria-label":_,className:ki(Lt(uT),n),onClick:u,style:{...f,...h.button},...d},o?o():D.createElement(r,{className:Lt(Uh),style:h.icon}))});function wT(a,e){const n=r=>D.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},e);return n.displayName=a,n}function hr(a,e){return wT(a,D.createElement("g",{fill:"currentColor"},D.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e))}const DT=hr("Close",D.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),UT=hr("Previous",D.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),LT=hr("Next",D.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),NT=hr("Loading",D.createElement(D.Fragment,null,Array.from({length:8}).map((a,e,n)=>D.createElement("line",{key:e,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/n.length*(e+1),transform:`rotate(${360/n.length*e}, 12, 12)`})))),PT=hr("Error",D.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),Js=Nx()?D.useLayoutEffect:D.useEffect;function qx(){const[a,e]=D.useState(!1);return D.useEffect(()=>{var n,r;const o=(n=window.matchMedia)===null||n===void 0?void 0:n.call(window,"(prefers-reduced-motion: reduce)");e(o==null?void 0:o.matches);const u=f=>e(f.matches);return(r=o==null?void 0:o.addEventListener)===null||r===void 0||r.call(o,"change",u),()=>{var f;return(f=o==null?void 0:o.removeEventListener)===null||f===void 0?void 0:f.call(o,"change",u)}},[]),a}function OT(a){let e=0,n=0,r=0;const u=window.getComputedStyle(a).transform.match(/matrix.*\((.+)\)/);if(u){const f=u[1].split(",").map(bc);f.length===6?(e=f[4],n=f[5]):f.length===16&&(e=f[12],n=f[13],r=f[14])}return{x:e,y:n,z:r}}function W_(a,e){const n=D.useRef(void 0),r=D.useRef(void 0),o=qx();return Js(()=>{var u,f,d;if(a.current&&n.current!==void 0&&!o){const{keyframes:m,duration:h,easing:g,onfinish:_}=e(n.current,a.current.getBoundingClientRect(),OT(a.current))||{};if(m&&h){(u=r.current)===null||u===void 0||u.cancel(),r.current=void 0;try{r.current=(d=(f=a.current).animate)===null||d===void 0?void 0:d.call(f,m,{duration:h,easing:g})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,_==null||_()})}}n.current=void 0}),{prepareAnimation:u=>{n.current=u},isAnimationPlaying:()=>{var u;return((u=r.current)===null||u===void 0?void 0:u.playState)==="running"}}}function Yx(){const a=D.useRef(null),e=D.useRef(void 0),[n,r]=D.useState();return{setContainerRef:D.useCallback(u=>{a.current=u,e.current&&(e.current.disconnect(),e.current=void 0);const f=()=>{if(u){const d=window.getComputedStyle(u),m=h=>parseFloat(h)||0;r({width:Math.round(u.clientWidth-m(d.paddingLeft)-m(d.paddingRight)),height:Math.round(u.clientHeight-m(d.paddingTop)-m(d.paddingBottom))})}else r(void 0)};f(),u&&typeof ResizeObserver<"u"&&(e.current=new ResizeObserver(f),e.current.observe(u))},[]),containerRef:a,containerRect:n}}function lc(){const a=D.useRef(void 0),{setTimeout:e,clearTimeout:n}=Rc();return D.useCallback((r,o)=>{n(a.current),a.current=e(r,o>0?o:0)},[e,n])}function Jt(a){const e=D.useRef(a);return Js(()=>{e.current=a}),D.useCallback((...n)=>{var r;return(r=e.current)===null||r===void 0?void 0:r.call(e,...n)},[])}function q_(a,e){typeof a=="function"?a(e):a&&(a.current=e)}function Ph(a,e){return D.useMemo(()=>a==null&&e==null?null:n=>{q_(a,n),q_(e,n)},[a,e])}function IT(a,e=!1){const n=D.useRef(!1);Js(()=>{e&&n.current&&(n.current=!1,a())},[e,a]);const r=D.useCallback(()=>{n.current=!0},[]),o=D.useCallback(()=>{n.current=!1},[]);return{onFocus:r,onBlur:o}}function kp(){const[a,e]=D.useState(!1);return Js(()=>{e(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),a}function FT(){const[a]=D.useState({}),e=D.useCallback((o,u)=>{var f;(f=a[o])===null||f===void 0||f.forEach(d=>{u.isPropagationStopped()||d(u)})},[a]),n=D.useMemo(()=>({onPointerDown:o=>e(bx,o),onPointerMove:o=>e(Tx,o),onPointerUp:o=>e(Ax,o),onPointerLeave:o=>e(Rx,o),onPointerCancel:o=>e(Cx,o),onKeyDown:o=>e(wx,o),onKeyUp:o=>e(rT,o),onWheel:o=>e(Dx,o)}),[e]),r=D.useCallback((o,u)=>(a[o]||(a[o]=[]),a[o].unshift(u),()=>{const f=a[o];f&&f.splice(0,f.length,...f.filter(d=>d!==u))}),[a]);return{registerSensors:n,subscribeSensors:r}}function Y_(a,e){const n=D.useRef(0),r=lc(),o=Jt((...u)=>{n.current=Date.now(),a(u)});return D.useCallback((...u)=>{r(()=>{o(u)},e-(Date.now()-n.current))},[e,o,r])}const Yd=zp("slide"),jd=zp("slide_image");function BT({slide:a,offset:e,render:n,rect:r,imageFit:o,imageProps:u,onClick:f,onLoad:d,onError:m,style:h}){var g,_,v,S,E,b,y,x;const[U,R]=D.useState(Xd),{publish:P}=Ac(),{setTimeout:N}=Rc(),z=D.useRef(null);D.useEffect(()=>{e===0&&P(tT(U))},[e,U,P]);const F=Jt(ue=>{("decode"in ue?ue.decode():Promise.resolve()).catch(()=>{}).then(()=>{ue.parentNode&&(R(qd),N(()=>{d==null||d(ue)},0))})}),W=D.useCallback(ue=>{z.current=ue,ue!=null&&ue.complete&&F(ue)},[F]),A=D.useCallback(ue=>{F(ue.currentTarget)},[F]),L=Jt(()=>{R(Wd),m==null||m()}),H=hT(a,o),Z=(ue,ge)=>Number.isFinite(ue)?ue:ge,j=Z(Math.max(...((_=(g=a.srcSet)===null||g===void 0?void 0:g.map(ue=>ue.width))!==null&&_!==void 0?_:[]).concat(a.width?[a.width]:[]).filter(Boolean)),((v=z.current)===null||v===void 0?void 0:v.naturalWidth)||0),re=Z(Math.max(...((E=(S=a.srcSet)===null||S===void 0?void 0:S.map(ue=>ue.height))!==null&&E!==void 0?E:[]).concat(a.height?[a.height]:[]).filter(Boolean)),((b=z.current)===null||b===void 0?void 0:b.naturalHeight)||0),$=j&&re?{maxWidth:`min(${j}px, 100%)`,maxHeight:`min(${re}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},B=(y=a.srcSet)===null||y===void 0?void 0:y.sort((ue,ge)=>ue.width-ge.width).map(ue=>`${ue.src} ${ue.width}w`).join(", "),V=()=>r&&!H&&a.width&&a.height?r.height/a.height*a.width:Number.MAX_VALUE,ee=B&&r&&Nx()?`${Math.round(Math.min(V(),r.width))}px`:void 0,{style:xe,className:O,...K}=u||{};return D.createElement(D.Fragment,null,D.createElement("img",{ref:W,onLoad:A,onError:L,onClick:f,draggable:!1,className:ki(Lt(jd()),H&&Lt(jd("cover")),U!==qd&&Lt(jd("loading")),O),style:{...$,...h,...xe},...K,alt:(x=a.alt)!==null&&x!==void 0?x:"",sizes:ee,srcSet:B,src:a.src}),U!==qd&&D.createElement("div",{className:Lt(Yd(eT))},U===Xd&&(n!=null&&n.iconLoading?n.iconLoading():D.createElement(NT,{className:ki(Lt(Uh),Lt(Yd(Xd)))})),U===Wd&&(n!=null&&n.iconError?n.iconError():D.createElement(PT,{className:ki(Lt(Uh),Lt(Yd(Wd)))}))))}const zT=D.forwardRef(function({className:e,children:n,onFocus:r,onBlur:o,...u},f){const d=D.useRef(null),{trackFocusWithin:m}=zx();return D.createElement(MT,{nodeRef:d},D.createElement("div",{ref:Ph(f,d),className:ki(Lt("root"),e),...m(r,o),...u},n))});var In;(function(a){a[a.NONE=0]="NONE",a[a.SWIPE=1]="SWIPE",a[a.PULL=2]="PULL",a[a.ANIMATION=3]="ANIMATION"})(In||(In={}));function HT(a,e,n,r,o){D.useEffect(()=>Hp(a(bx,e),a(Tx,n),a(Ax,r),a(Rx,r),a(Cx,r)),[a,e,n,r,o])}var Ai;(function(a){a[a.NONE=0]="NONE",a[a.SWIPE=1]="SWIPE",a[a.PULL=2]="PULL"})(Ai||(Ai={}));const Zd=30;function VT({disableSwipeNavigation:a,closeOnBackdropClick:e},n,r,o,u,f,d,m,h,g,_,v,S,E,b,y){const x=D.useRef(0),U=D.useRef([]),R=D.useRef(void 0),P=D.useRef(0),N=D.useRef(Ai.NONE),z=D.useCallback(j=>{R.current===j.pointerId&&(R.current=void 0,N.current=Ai.NONE);const re=U.current;re.splice(0,re.length,...re.filter($=>$.pointerId!==j.pointerId))},[]),F=D.useCallback(j=>{z(j),j.persist(),U.current.push(j)},[z]),W=D.useCallback(j=>U.current.find(({pointerId:re})=>j.pointerId===re),[]),A=Jt(j=>{F(j)}),L=(j,re)=>_&&j>re||g&&j<-re,H=Jt(j=>{const re=W(j);if(re)if(R.current===j.pointerId){const $=Date.now()-P.current,B=x.current;N.current===Ai.SWIPE?Math.abs(B)>.3*o||Math.abs(B)>5&&$<u?m(B,$):h(B):N.current===Ai.PULL&&(L(B,2*Zd)?E(B,$):b(B)),x.current=0,N.current=Ai.NONE}else{const{target:$}=j;e&&$ instanceof HTMLElement&&$===re.target&&($.classList.contains(Lt(Bp))||$.classList.contains(Lt(aT)))&&y()}z(j)}),Z=Jt(j=>{const re=W(j);if(re){const $=R.current===j.pointerId;if(j.buttons===0){$&&x.current!==0?H(j):z(re);return}const B=j.clientX-re.clientX,V=j.clientY-re.clientY;if(R.current===void 0){const ee=xe=>{F(j),R.current=j.pointerId,P.current=Date.now(),N.current=xe};Math.abs(B)>Math.abs(V)&&Math.abs(B)>Zd&&r(B)?a||(ee(Ai.SWIPE),f()):Math.abs(V)>Math.abs(B)&&L(V,Zd)&&(ee(Ai.PULL),v())}else $&&(N.current===Ai.SWIPE?(x.current=B,d(B)):N.current===Ai.PULL&&(x.current=V,S(V)))}});HT(n,A,Z,H)}function GT({preventDefaultWheelX:a,preventDefaultWheelY:e}){const n=D.useRef(null),r=Jt(o=>{const u=Math.abs(o.deltaX)>Math.abs(o.deltaY);(u&&a||!u&&e||o.ctrlKey)&&o.preventDefault()});return D.useCallback(o=>{var u;o?o.addEventListener("wheel",r,{passive:!1}):(u=n.current)===null||u===void 0||u.removeEventListener("wheel",r),n.current=o},[r])}function kT(a,e,n,r,o,u,f,d,m){const h=D.useRef(0),g=D.useRef(0),_=D.useRef(void 0),v=D.useRef(void 0),S=D.useRef(0),E=D.useRef(void 0),b=D.useRef(0),{setTimeout:y,clearTimeout:x}=Rc(),U=D.useCallback(()=>{_.current&&(x(_.current),_.current=void 0)},[x]),R=D.useCallback(()=>{v.current&&(x(v.current),v.current=void 0)},[x]),P=Jt(()=>{a!==In.SWIPE&&(h.current=0,b.current=0,U(),R())});D.useEffect(P,[a,P]);const N=Jt(F=>{v.current=void 0,h.current===F&&m(h.current)}),z=Jt(F=>{if(F.ctrlKey||Math.abs(F.deltaY)>Math.abs(F.deltaX))return;const W=A=>{S.current=A,x(E.current),E.current=A>0?y(()=>{S.current=0,E.current=void 0},300):void 0};if(a===In.NONE){if(Math.abs(F.deltaX)<=1.2*Math.abs(S.current)){W(F.deltaX);return}if(!n(-F.deltaX))return;if(g.current+=F.deltaX,U(),Math.abs(g.current)>30)g.current=0,W(0),b.current=Date.now(),u();else{const A=g.current;_.current=y(()=>{_.current=void 0,A===g.current&&(g.current=0)},o)}}else if(a===In.SWIPE){let A=h.current-F.deltaX;if(A=Math.min(Math.abs(A),r)*Math.sign(A),h.current=A,f(A),R(),Math.abs(A)>.2*r){W(F.deltaX),d(A,Date.now()-b.current);return}v.current=y(()=>N(A),2*o)}else W(F.deltaX)});D.useEffect(()=>e(Dx,z),[e,z])}const j_=zp("container"),jx=D.createContext(null),Sl=wa("useController","ControllerContext",jx);function XT({children:a,...e}){var n;const{carousel:r,animation:o,controller:u,on:f,styles:d,render:m}=e,{closeOnPullUp:h,closeOnPullDown:g,preventDefaultWheelX:_,preventDefaultWheelY:v}=u,[S,E]=D.useState(),b=xl(),y=TT(),[x,U]=D.useState(In.NONE),R=D.useRef(0),P=D.useRef(0),N=D.useRef(1),{registerSensors:z,subscribeSensors:F}=FT(),{subscribe:W,publish:A}=Ac(),L=lc(),H=lc(),Z=lc(),{containerRef:j,setContainerRef:re,containerRect:$}=Yx(),B=Ph(GT({preventDefaultWheelX:_,preventDefaultWheelY:v}),re),V=D.useRef(null),ee=Ph(V,void 0),{getOwnerDocument:xe}=Tc(),O=kp(),K=Ee=>(O?-1:1)*(typeof Ee=="number"?Ee:1),ue=Jt(()=>{var Ee;return(Ee=j.current)===null||Ee===void 0?void 0:Ee.focus()}),ge=Jt(()=>e),Le=Jt(()=>b),We=D.useCallback(Ee=>A(zr,Ee),[A]),te=D.useCallback(Ee=>A(Hr,Ee),[A]),_e=D.useCallback(()=>A(Xs),[A]),Te=Ee=>!(r.finite&&(K(Ee)>0&&b.currentIndex===0||K(Ee)<0&&b.currentIndex===b.slides.length-1)),$e=Ee=>{var Ce;R.current=Ee,(Ce=j.current)===null||Ce===void 0||Ce.style.setProperty(Yn("swipe_offset"),`${Math.round(Ee)}px`)},Ve=Ee=>{var Ce,I;P.current=Ee,N.current=(()=>{const he=g&&Ee>0?Ee:h&&Ee<0?-Ee:0;return Math.min(Math.max(dT(1-he/60*(1-.5),2),.5),1)})(),(Ce=j.current)===null||Ce===void 0||Ce.style.setProperty(Yn("pull_offset"),`${Math.round(Ee)}px`),(I=j.current)===null||I===void 0||I.style.setProperty(Yn("pull_opacity"),`${N.current}`)},{prepareAnimation:ht}=W_(V,(Ee,Ce,I)=>{if(V.current&&$)return{keyframes:[{transform:`translate(0, ${Ee.rect.y-Ce.y+I.y}px)`,opacity:Ee.opacity},{transform:"translate(0, 0)",opacity:1}],duration:Ee.duration,easing:o.easing.fade}}),jt=(Ee,Ce)=>{if(h||g){Ve(Ee);let I=0;V.current&&(I=o.fade*(Ce?2:1),ht({rect:V.current.getBoundingClientRect(),opacity:N.current,duration:I})),Z(()=>{Ve(0),U(In.NONE)},I),U(In.ANIMATION),Ce||_e()}},{prepareAnimation:pt,isAnimationPlaying:St}=W_(V,(Ee,Ce,I)=>{var T;if(V.current&&$&&(!((T=b.animation)===null||T===void 0)&&T.duration)){const q=vc(r.spacing),he=(q.percent?q.percent*$.width/100:q.pixel)||0;return{keyframes:[{transform:`translate(${K(b.globalIndex-Ee.index)*($.width+he)+Ee.rect.x-Ce.x+I.x}px, 0)`},{transform:"translate(0, 0)"}],duration:b.animation.duration,easing:b.animation.easing}}}),yt=Jt(Ee=>{var Ce,I;const T=Ee.offset||0,q=T?o.swipe:(Ce=o.navigation)!==null&&Ce!==void 0?Ce:o.swipe,he=!T&&!St()?o.easing.navigation:o.easing.swipe;let{direction:pe}=Ee;const de=(I=Ee.count)!==null&&I!==void 0?I:1;let Oe=In.ANIMATION,Ae=q*de;if(!pe){const Qe=$==null?void 0:$.width,Me=Ee.duration||0,we=Qe?q/Qe*Math.abs(T):q;de!==0?(Me<we?Ae=Ae/we*Math.max(Me,we/5):Qe&&(Ae=q/Qe*(Qe-Math.abs(T))),pe=K(T)>0?zr:Hr):Ae=q/2}let ke=0;pe===zr?Te(K(1))?ke=-de:(Oe=In.NONE,Ae=q):pe===Hr&&(Te(K(-1))?ke=de:(Oe=In.NONE,Ae=q)),Ae=Math.round(Ae),H(()=>{$e(0),U(In.NONE)},Ae),V.current&&pt({rect:V.current.getBoundingClientRect(),index:b.globalIndex}),U(Oe),A(k_,{type:"swipe",increment:ke,duration:Ae,easing:he})});D.useEffect(()=>{var Ee,Ce;!((Ee=b.animation)===null||Ee===void 0)&&Ee.increment&&(!((Ce=b.animation)===null||Ce===void 0)&&Ce.duration)&&L(()=>y({type:"swipe",increment:0}),b.animation.duration)},[b.animation,y,L]);const rt=[F,Te,($==null?void 0:$.width)||0,o.swipe,()=>U(In.SWIPE),Ee=>$e(Ee),(Ee,Ce)=>yt({offset:Ee,duration:Ce,count:1}),Ee=>yt({offset:Ee,count:0})],Tt=[()=>{g&&U(In.PULL)},Ee=>Ve(Ee),Ee=>jt(Ee),Ee=>jt(Ee,!0)];VT(u,...rt,h,g,...Tt,_e),kT(x,...rt);const k=Jt(()=>{u.focus&&xe().querySelector(`.${Lt(Fp)} .${Lt(j_())}`)&&ue()});D.useEffect(k,[k]);const qt=Jt(()=>{var Ee;(Ee=f.view)===null||Ee===void 0||Ee.call(f,{index:b.currentIndex})});D.useEffect(qt,[b.globalIndex,qt]),D.useEffect(()=>Hp(W(zr,Ee=>yt({direction:zr,...Ee})),W(Hr,Ee=>yt({direction:Hr,...Ee})),W(k_,Ee=>y(Ee))),[W,yt,y]);const Mt=D.useMemo(()=>({prev:We,next:te,close:_e,focus:ue,slideRect:$?pT($,r.padding):{width:0,height:0},containerRect:$||{width:0,height:0},subscribeSensors:F,containerRef:j,setCarouselRef:ee,toolbarWidth:S,setToolbarWidth:E}),[We,te,_e,ue,F,$,j,ee,S,E,r.padding]);return D.useImperativeHandle(u.ref,()=>({prev:We,next:te,close:_e,focus:ue,getLightboxProps:ge,getLightboxState:Le}),[We,te,_e,ue,ge,Le]),D.createElement("div",{ref:B,className:ki(Lt(j_()),Lt(Mx)),style:{...x===In.SWIPE?{[Yn("swipe_offset")]:`${Math.round(R.current)}px`}:null,...x===In.PULL?{[Yn("pull_offset")]:`${Math.round(P.current)}px`,[Yn("pull_opacity")]:`${N.current}`}:null,...u.touchAction!=="none"?{[Yn("controller_touch_action")]:u.touchAction}:null,...d.container},tabIndex:-1,...z},$&&D.createElement(jx.Provider,{value:Mt},a,(n=m.controls)===null||n===void 0?void 0:n.call(m)))}const WT=dr(Ip,XT);function Ur(a){return vl(Sx,a)}function Z_(a){return vl(Bp,a)}function qT({slide:a,offset:e}){const n=D.useRef(null),{currentIndex:r,slides:o}=xl(),{slideRect:u,focus:f}=Sl(),{render:d,carousel:{imageFit:m,imageProps:h},on:{click:g},styles:{slide:_},labels:v}=jr(),{getOwnerDocument:S}=Tc(),E=e!==0;D.useEffect(()=>{var y;E&&(!((y=n.current)===null||y===void 0)&&y.contains(S().activeElement))&&f()},[E,f,S]);const b=()=>{var y,x,U,R;let P=(y=d.slide)===null||y===void 0?void 0:y.call(d,{slide:a,offset:e,rect:u});return!P&&Vp(a)&&(P=D.createElement(BT,{slide:a,offset:e,render:d,rect:u,imageFit:m,imageProps:h,onClick:E?void 0:()=>g==null?void 0:g({index:r})})),P?D.createElement(D.Fragment,null,(x=d.slideHeader)===null||x===void 0?void 0:x.call(d,{slide:a}),((U=d.slideContainer)!==null&&U!==void 0?U:({children:N})=>N)({slide:a,children:P}),(R=d.slideFooter)===null||R===void 0?void 0:R.call(d,{slide:a})):null};return D.createElement("div",{ref:n,className:ki(Lt(Z_()),!E&&Lt(Z_("current")),Lt(Mx)),...vT(E),style:_,role:"group","aria-roledescription":Ws(v,"Slide"),"aria-label":fT(v,o,r+e)},b())}function YT(){const a=jr().styles.slide;return D.createElement("div",{className:Lt(Bp),style:a})}function jT({carousel:a,labels:e}){const{slides:n,currentIndex:r,globalIndex:o}=xl(),{setCarouselRef:u}=Sl(),{autoPlaying:f,focusWithin:d}=zx(),m=vc(a.spacing),h=vc(a.padding),g=gT(a,n,1),_=[];if(Px(n))for(let v=r-g;v<=r+g;v+=1){const S=Ox(n,v),E=o-r+v,b=a.finite&&(v<0||v>n.length-1);_.push(b?{key:E}:{key:[`${E}`,mT(S)].filter(Boolean).join("|"),offset:v-r,slide:S})}return D.createElement("div",{ref:u,className:ki(Lt(Ur()),_.length>0&&Lt(Ur("with_slides"))),style:{[`${Yn(Ur("slides_count"))}`]:_.length,[`${Yn(Ur("spacing_px"))}`]:m.pixel||0,[`${Yn(Ur("spacing_percent"))}`]:m.percent||0,[`${Yn(Ur("padding_px"))}`]:h.pixel||0,[`${Yn(Ur("padding_percent"))}`]:h.percent||0},role:"region","aria-live":f&&!d?"off":"polite","aria-roledescription":Ws(e,"Carousel"),"aria-label":Ws(e,"Photo gallery")},_.map(({key:v,slide:S,offset:E})=>S?D.createElement(qT,{key:v,slide:S,offset:E}):D.createElement(YT,{key:v})))}const ZT=dr(Sx,jT);function Zx(){const{carousel:a}=jr(),{slides:e,currentIndex:n}=xl(),r=e.length===0||a.finite&&n===0,o=e.length===0||a.finite&&n===e.length-1;return{prevDisabled:r,nextDisabled:o}}function KT(a){var e;const n=kp(),{publish:r}=Ac(),{animation:o}=jr(),{prevDisabled:u,nextDisabled:f}=Zx(),d=((e=o.navigation)!==null&&e!==void 0?e:o.swipe)/2,m=Y_(()=>r(zr),d),h=Y_(()=>r(Hr),d),g=Jt(_=>{switch(_.key){case sT:r(Xs);break;case oT:(n?f:u)||(n?h:m)();break;case lT:(n?u:f)||(n?m:h)();break}});D.useEffect(()=>a(wx,g),[a,g])}function K_({label:a,icon:e,renderIcon:n,action:r,onClick:o,disabled:u,style:f}){return D.createElement(Cc,{label:a,icon:e,renderIcon:n,className:Lt(`navigation_${r}`),disabled:u,onClick:o,style:f,...IT(Sl().focus,u)})}function QT({render:{buttonPrev:a,buttonNext:e,iconPrev:n,iconNext:r},styles:o}){const{prev:u,next:f,subscribeSensors:d}=Sl(),{prevDisabled:m,nextDisabled:h}=Zx();return KT(d),D.createElement(D.Fragment,null,a?a():D.createElement(K_,{label:"Previous",action:zr,icon:UT,renderIcon:n,style:o.navigationPrev,disabled:m,onClick:u}),e?e():D.createElement(K_,{label:"Next",action:Hr,icon:LT,renderIcon:r,style:o.navigationNext,disabled:h,onClick:f}))}const JT=dr(Qb,QT),Q_=Lt(iT),$T=Lt(Ex);function e1(a){return"style"in a}function J_(a,e,n){const r=window.getComputedStyle(a),o=n?"padding-left":"padding-right",u=n?r.paddingLeft:r.paddingRight,f=a.style.getPropertyValue(o);return a.style.setProperty(o,`${(bc(u)||0)+e}px`),()=>{f?a.style.setProperty(o,f):a.style.removeProperty(o)}}function t1({noScroll:{disabled:a},children:e}){const n=kp(),{getOwnerDocument:r,getOwnerWindow:o}=Tc();return D.useEffect(()=>{if(a)return()=>{};const u=[],f=o(),{body:d,documentElement:m}=r(),h=Math.round(f.innerWidth-m.clientWidth);if(h>0){u.push(J_(d,h,n));const g=d.getElementsByTagName("*");for(let _=0;_<g.length;_+=1){const v=g[_];e1(v)&&f.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains($T)&&u.push(J_(v,h,n))}}return d.classList.add(Q_),()=>{d.classList.remove(Q_),u.forEach(g=>g())}},[n,a,r,o]),D.createElement(D.Fragment,null,e)}const n1=dr(Jb,t1);function $_(a){return vl(Fp,a)}function ev(a,e,n){const r=a.getAttribute(e);return a.setAttribute(e,n),()=>{r?a.setAttribute(e,r):a.removeAttribute(e)}}function i1({children:a,animation:e,styles:n,className:r,on:o,portal:u,close:f,labels:d}){const[m,h]=D.useState(!1),[g,_]=D.useState(!1),v=D.useRef([]),S=D.useRef(null),{setTimeout:E}=Rc(),{subscribe:b}=Ac(),x=qx()?0:e.fade;D.useEffect(()=>(h(!0),()=>{h(!1),_(!1)}),[]);const U=Jt(()=>{v.current.forEach(z=>z()),v.current=[]}),R=Jt(()=>{var z;_(!1),U(),(z=o.exiting)===null||z===void 0||z.call(o),E(()=>{var F;(F=o.exited)===null||F===void 0||F.call(o),f()},x)});D.useEffect(()=>b(Xs,R),[b,R]);const P=Jt(z=>{var F,W,A;xT(z),_(!0),(F=o.entering)===null||F===void 0||F.call(o);const L=(A=(W=z.parentNode)===null||W===void 0?void 0:W.children)!==null&&A!==void 0?A:[];for(let H=0;H<L.length;H+=1){const Z=L[H];["TEMPLATE","SCRIPT","STYLE"].indexOf(Z.tagName)===-1&&Z!==z&&(v.current.push(ev(Z,"inert","")),v.current.push(ev(Z,"aria-hidden","true")))}v.current.push(()=>{var H,Z;(Z=(H=S.current)===null||H===void 0?void 0:H.focus)===null||Z===void 0||Z.call(H)}),E(()=>{var H;(H=o.entered)===null||H===void 0||H.call(o)},x)}),N=D.useCallback(z=>{z?P(z):U()},[P,U]);return m?Eb.createPortal(D.createElement(zT,{ref:N,className:ki(r,Lt($_()),Lt(Ex),g&&Lt($_("open"))),"aria-modal":!0,role:"dialog","aria-label":Ws(d,"Lightbox"),style:{...e.fade!==Nh.animation.fade?{[Yn("fade_animation_duration")]:`${x}ms`}:null,...e.easing.fade!==Nh.animation.easing.fade?{[Yn("fade_animation_timing_function")]:e.easing.fade}:null,...n.root},onFocus:z=>{S.current||(S.current=z.relatedTarget)}},a),u.root||document.body):null}const a1=dr(Fp,i1);function r1({children:a}){return D.createElement(D.Fragment,null,a)}const s1=dr($b,r1);function o1(a){return vl(yx,a)}function l1({toolbar:{buttons:a},render:{buttonClose:e,iconClose:n},styles:r}){const{close:o,setToolbarWidth:u}=Sl(),{setContainerRef:f,containerRect:d}=Yx();Js(()=>{u(d==null?void 0:d.width)},[u,d==null?void 0:d.width]);const m=()=>e?e():D.createElement(Cc,{key:Xs,label:"Close",icon:DT,renderIcon:n,onClick:o});return D.createElement("div",{ref:f,style:r.toolbar,className:Lt(o1())},a==null?void 0:a.map(h=>h===Xs?m():h))}const u1=dr(yx,l1);function Kx(a,e){var n;return D.createElement(a.module.component,{key:a.module.name,...e},(n=a.children)===null||n===void 0?void 0:n.map(r=>Kx(r,e)))}function c1(a,e={}){const{easing:n,...r}=a,{easing:o,...u}=e;return{easing:{...n,...o},...r,...u}}function f1({carousel:a,animation:e,render:n,toolbar:r,controller:o,noScroll:u,on:f,plugins:d,slides:m,index:h,...g}){const{animation:_,carousel:v,render:S,toolbar:E,controller:b,noScroll:y,on:x,slides:U,index:R,plugins:P,...N}=Nh,{config:z,augmentation:F}=ST([bn(a1,[bn(n1,[bn(WT,[bn(ZT),bn(u1),bn(JT)])])])],d||P),W=F({animation:c1(_,e),carousel:{...v,...a},render:{...S,...n},toolbar:{...E,...r},controller:{...b,...o},noScroll:{...y,...u},on:{...x,...f},...N,...g});return W.open?D.createElement(bT,{...W},D.createElement(RT,{slides:m||U,index:bc(h||R)},D.createElement(CT,null,D.createElement(ET,null,D.createElement(yT,null,Kx(bn(s1,z),W)))))):null}const d1={auto:!1,ref:null},Qx=a=>({...d1,...a}),Jx=D.createContext(null),h1=wa("useFullscreen","FullscreenContext",Jx);function p1({fullscreen:a,on:e,children:n}){const{auto:r,ref:o}=Qx(a),u=D.useRef(null),[f,d]=D.useState(),[m,h]=D.useState(!1),g=D.useRef(!1),{getOwnerDocument:_}=Tc();Js(()=>{var R,P,N,z;const F=_();d(!((z=(N=(P=(R=F.fullscreenEnabled)!==null&&R!==void 0?R:F.webkitFullscreenEnabled)!==null&&P!==void 0?P:F.mozFullScreenEnabled)!==null&&N!==void 0?N:F.msFullscreenEnabled)!==null&&z!==void 0&&z))},[_]);const v=D.useCallback(()=>{var R;const P=_(),N=P.fullscreenElement||P.webkitFullscreenElement||P.mozFullScreenElement||P.msFullscreenElement;return((R=N==null?void 0:N.shadowRoot)===null||R===void 0?void 0:R.fullscreenElement)||N},[_]),S=D.useCallback(()=>{const R=u.current;try{R.requestFullscreen?R.requestFullscreen().catch(()=>{}):R.webkitRequestFullscreen?R.webkitRequestFullscreen():R.mozRequestFullScreen?R.mozRequestFullScreen():R.msRequestFullscreen&&R.msRequestFullscreen()}catch{}},[]),E=D.useCallback(()=>{if(!v())return;const R=_();try{R.exitFullscreen?R.exitFullscreen().catch(()=>{}):R.webkitExitFullscreen?R.webkitExitFullscreen():R.mozCancelFullScreen?R.mozCancelFullScreen():R.msExitFullscreen&&R.msExitFullscreen()}catch{}},[v,_]);D.useEffect(()=>{const R=_(),P=()=>{h(v()===u.current)};return Hp(...["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].map(N=>(R.addEventListener(N,P),()=>R.removeEventListener(N,P))))},[v,_]);const b=Jt(()=>{var R;return(R=e.enterFullscreen)===null||R===void 0?void 0:R.call(e)}),y=Jt(()=>{var R;return(R=e.exitFullscreen)===null||R===void 0?void 0:R.call(e)});D.useEffect(()=>{m&&(g.current=!0),g.current&&(m?b:y)()},[m,b,y]);const x=Jt(()=>{var R;return(R=r?S:null)===null||R===void 0||R(),E});D.useEffect(x,[x]);const U=D.useMemo(()=>({fullscreen:m,disabled:f,enter:S,exit:E}),[m,f,S,E]);return D.useImperativeHandle(o,()=>U,[U]),D.createElement("div",{ref:u,className:ki(Lt(Dh),Lt(nT))},D.createElement(Jx.Provider,{value:U},n))}const m1=hr("EnterFullscreen",D.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})),g1=hr("ExitFullscreen",D.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}));function _1(){var a;const{fullscreen:e,disabled:n,enter:r,exit:o}=h1(),{render:u}=jr();return n?null:u.buttonFullscreen?D.createElement(D.Fragment,null,(a=u.buttonFullscreen)===null||a===void 0?void 0:a.call(u,{fullscreen:e,disabled:n,enter:r,exit:o})):D.createElement(Cc,{disabled:n,label:e?"Exit Fullscreen":"Enter Fullscreen",icon:e?g1:m1,renderIcon:e?u.iconExitFullscreen:u.iconEnterFullscreen,onClick:e?o:r})}function v1({augment:a,contains:e,addParent:n}){a(({fullscreen:r,toolbar:o,...u})=>({toolbar:Ix(o,Dh,D.createElement(_1,null)),fullscreen:Qx(r),...u})),n(e(G_)?G_:Ip,dr(Dh,p1))}const x1={share:void 0},$x=a=>({...x1,...a});function S1(){return typeof navigator<"u"&&!!navigator.canShare}const y1=hr("ShareIcon",D.createElement("path",{d:"m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"}));function M1(){const{render:a,on:e,share:n}=jr(),{share:r}=$x(n),{currentSlide:o,currentIndex:u}=xl();if(!S1())return null;if(a.buttonShare)return D.createElement(D.Fragment,null,a.buttonShare());const f=o&&(typeof o.share=="object"&&o.share||typeof o.share=="string"&&{url:o.share}||Vp(o)&&{url:o.src})||void 0,d=r?(o==null?void 0:o.share)!==!1:f&&navigator.canShare(f),m=()=>{f&&navigator.share(f).catch(()=>{})},h=()=>{var g;o&&((r||m)({slide:o}),(g=e.share)===null||g===void 0||g.call(e,{index:u}))};return D.createElement(Cc,{label:"Share",icon:y1,renderIcon:a.iconShare,disabled:!d,onClick:h})}function E1({augment:a}){a(({toolbar:e,share:n,...r})=>({toolbar:Ix(e,"share",D.createElement(M1,null)),share:$x(n),...r}))}function b1(){const[a,e]=D.useState(-1),n=[{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/1.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/2.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/3.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/4.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/5.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/6.jpeg?raw=true",width:1280,height:853},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/8.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/9.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/10.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/11.jpeg?raw=true",width:853,height:1280},{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/12.jpeg?raw=true",width:1280,height:853}];return Xe.jsxs(Xe.Fragment,{children:[Xe.jsxs("div",{className:"title-bar",children:[Xe.jsx("h1",{children:"Tyler Brodnicki"}),Xe.jsx("h2",{children:"Photographer"}),Xe.jsx("h3",{children:"Gallery"})]}),Xe.jsxs("div",{className:"content",children:[Xe.jsx(Kb,{photos:n,spacing:15,rowConstraints:{singleRowMaxHeight:350},onClick:({index:r})=>e(r)}),Xe.jsx(f1,{slides:n,index:a,open:a>=0,close:()=>e(-1),plugins:[v1,E1]})]}),Xe.jsx("div",{className:"footer",children:Xe.jsx("p",{children:"© 2026 Tyler Brodnicki. All rights reserved."})})]})}function T1(){return Xe.jsx(Xe.Fragment,{children:Xe.jsxs("div",{children:[Xe.jsxs("div",{className:"title-bar",children:[Xe.jsx("h1",{children:"About Me"}),Xe.jsx("h2",{children:"Who am I?"})]}),Xe.jsxs("div",{className:"about-content",children:[Xe.jsxs("div",{className:"about-text",children:[Xe.jsx("p",{children:"Hello! I'm Tyler Brodnicki, I'm a Third-Year Computer Science student at the University of Florida. I've had a passion for technology and digital media since I was young, and have been working on this website as a personal project to showcase my passion and skills for both Digital Media and Software Engineering."}),Xe.jsx("p",{children:"Photography has always been a form of storytelling for me as I enjoy capturing specific moments in not only my life, but other peoples' lives! Being able to use this website as a form of storytelling, has allowed other people to view my moments and works of art that I call my portfolio."}),Xe.jsx("p",{children:"Feel free to reach out to me through the Contact page if you'd like to connect or collaborate!"}),Xe.jsxs("p",{children:["For my technical projects, check out my ",Xe.jsx("a",{href:"https://github.com/tbrodnicki-dev",children:"GitHub"})," profile!"]}),Xe.jsx("p",{children:"The specifications for my camera gear are as follows:"}),Xe.jsxs("ul",{children:[Xe.jsx("li",{children:"Camera Body: Sony A7 iii"}),Xe.jsx("li",{children:"Lens: Sigma 70-200mm f/2.8 DG OS HSM"}),Xe.jsx("li",{children:"Lens: Tamron 28-75mm f/2.8 Di III RXD"}),Xe.jsx("li",{children:"Accessories: Meike MK A9 Vertical Battery Grip, Peak Design Slide, LowePro Tahoe BP150 "}),Xe.jsx("li",{children:"Editing: Adobe Lightroom Classic and Photoshop"})]})]}),Xe.jsx("img",{src:"https://github.com/tbrodnicki-dev/website/blob/main/public/7.jpeg?raw=true",alt:"Tyler Brodnicki"})]})]})})}function A1(){return Xe.jsx("div",{children:Xe.jsxs("div",{className:"title-bar",children:[Xe.jsx("h1",{children:"Contact"}),Xe.jsx("h2",{children:"Get in touch"}),Xe.jsxs("div",{className:"contact-links",children:[Xe.jsx("a",{href:"mailto:Brodnicki.TJ@Gmail.com",children:"Email Me!"}),Xe.jsx("a",{href:"https://www.instagram.com/southerndigitalphotos/",target:"_blank",rel:"noreferrer",children:"Instagram"})]})]})})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xp="182",R1=0,tv=1,C1=2,uc=1,w1=2,sl=3,fr=0,jn=1,va=2,ya=0,Gs=1,nv=2,iv=3,av=4,D1=5,Vr=100,U1=101,L1=102,N1=103,P1=104,O1=200,I1=201,F1=202,B1=203,Oh=204,Ih=205,z1=206,H1=207,V1=208,G1=209,k1=210,X1=211,W1=212,q1=213,Y1=214,Fh=0,Bh=1,zh=2,qs=3,Hh=4,Vh=5,Gh=6,kh=7,eS=0,j1=1,Z1=2,Xi=0,tS=1,nS=2,iS=3,aS=4,rS=5,sS=6,oS=7,lS=300,Wr=301,Ys=302,Xh=303,Wh=304,wc=306,qh=1e3,xa=1001,Yh=1002,Dn=1003,K1=1004,Bu=1005,Fn=1006,Kd=1007,kr=1008,mi=1009,uS=1010,cS=1011,fl=1012,Wp=1013,Yi=1014,Vi=1015,Ta=1016,qp=1017,Yp=1018,dl=1020,fS=35902,dS=35899,hS=1021,pS=1022,wi=1023,Aa=1026,Xr=1027,mS=1028,jp=1029,js=1030,Zp=1031,Kp=1033,cc=33776,fc=33777,dc=33778,hc=33779,jh=35840,Zh=35841,Kh=35842,Qh=35843,Jh=36196,$h=37492,ep=37496,tp=37488,np=37489,ip=37490,ap=37491,rp=37808,sp=37809,op=37810,lp=37811,up=37812,cp=37813,fp=37814,dp=37815,hp=37816,pp=37817,mp=37818,gp=37819,_p=37820,vp=37821,xp=36492,Sp=36494,yp=36495,Mp=36283,Ep=36284,bp=36285,Tp=36286,Q1=3200,J1=0,$1=1,lr="",ai="srgb",Zs="srgb-linear",xc="linear",zt="srgb",Cs=7680,rv=519,eA=512,tA=513,nA=514,Qp=515,iA=516,aA=517,Jp=518,rA=519,sv=35044,ov="300 es",Gi=2e3,Sc=2001;function gS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function yc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function sA(){const a=yc("canvas");return a.style.display="block",a}const lv={};function uv(...a){const e="THREE."+a.shift();console.log(e,...a)}function st(...a){const e="THREE."+a.shift();console.warn(e,...a)}function Ut(...a){const e="THREE."+a.shift();console.error(e,...a)}function hl(...a){const e=a.join(" ");e in lv||(lv[e]=!0,st(...a))}function oA(a,e,n){return new Promise(function(r,o){function u(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:o();break;case a.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,f=o.length;u<f;u++)o[u].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qd=Math.PI/180,Ap=180/Math.PI;function yl(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[a&255]+Pn[a>>8&255]+Pn[a>>16&255]+Pn[a>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Et(a,e,n){return Math.max(e,Math.min(n,a))}function lA(a,e){return(a%e+e)%e}function Jd(a,e,n){return(1-n)*a+n*e}function $o(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*o+e.x,this.y=u*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,f,d){let m=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3],v=u[f+0],S=u[f+1],E=u[f+2],b=u[f+3];if(d<=0){e[n+0]=m,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=v,e[n+1]=S,e[n+2]=E,e[n+3]=b;return}if(_!==b||m!==v||h!==S||g!==E){let y=m*v+h*S+g*E+_*b;y<0&&(v=-v,S=-S,E=-E,b=-b,y=-y);let x=1-d;if(y<.9995){const U=Math.acos(y),R=Math.sin(U);x=Math.sin(x*U)/R,d=Math.sin(d*U)/R,m=m*x+v*d,h=h*x+S*d,g=g*x+E*d,_=_*x+b*d}else{m=m*x+v*d,h=h*x+S*d,g=g*x+E*d,_=_*x+b*d;const U=1/Math.sqrt(m*m+h*h+g*g+_*_);m*=U,h*=U,g*=U,_*=U}}e[n]=m,e[n+1]=h,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,f){const d=r[o],m=r[o+1],h=r[o+2],g=r[o+3],_=u[f],v=u[f+1],S=u[f+2],E=u[f+3];return e[n]=d*E+g*_+m*S-h*v,e[n+1]=m*E+g*v+h*_-d*S,e[n+2]=h*E+g*S+d*v-m*_,e[n+3]=g*E-d*_-m*v-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,f=e._order,d=Math.cos,m=Math.sin,h=d(r/2),g=d(o/2),_=d(u/2),v=m(r/2),S=m(o/2),E=m(u/2);switch(f){case"XYZ":this._x=v*g*_+h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_-v*S*E;break;case"YXZ":this._x=v*g*_+h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_+v*S*E;break;case"ZXY":this._x=v*g*_-h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_-v*S*E;break;case"ZYX":this._x=v*g*_-h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_+v*S*E;break;case"YZX":this._x=v*g*_+h*S*E,this._y=h*S*_+v*g*E,this._z=h*g*E-v*S*_,this._w=h*g*_-v*S*E;break;case"XZY":this._x=v*g*_-h*S*E,this._y=h*S*_-v*g*E,this._z=h*g*E+v*S*_,this._w=h*g*_+v*S*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],f=n[1],d=n[5],m=n[9],h=n[2],g=n[6],_=n[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(u-h)*S,this._z=(f-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(u+h)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(u-h)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-o)/S,this._x=(u+h)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,f=e._w,d=n._x,m=n._y,h=n._z,g=n._w;return this._x=r*g+f*d+o*h-u*m,this._y=o*g+f*m+u*d-r*h,this._z=u*g+f*h+r*m-o*d,this._w=f*g-r*d-o*m-u*h,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,u=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,f=-f,d=-d);let m=1-n;if(d<.9995){const h=Math.acos(d),g=Math.sin(h);m=Math.sin(m*h)/g,n=Math.sin(n*h)/g,this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+r*n,this._y=this._y*m+o*n,this._z=this._z*m+u*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,n=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,f=e.y,d=e.z,m=e.w,h=2*(f*o-d*r),g=2*(d*n-u*o),_=2*(u*r-f*n);return this.x=n+m*h+f*_-d*g,this.y=r+m*g+d*h-u*_,this.z=o+m*_+u*g-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,f=n.x,d=n.y,m=n.z;return this.x=o*m-u*d,this.y=u*f-r*m,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return $d.copy(this).projectOnVector(e),this.sub($d)}reflect(e){return this.sub($d.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $d=new fe,cv=new Ml;class ft{constructor(e,n,r,o,u,f,d,m,h){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,m,h)}set(e,n,r,o,u,f,d,m,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=u,g[5]=m,g[6]=r,g[7]=f,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[3],m=r[6],h=r[1],g=r[4],_=r[7],v=r[2],S=r[5],E=r[8],b=o[0],y=o[3],x=o[6],U=o[1],R=o[4],P=o[7],N=o[2],z=o[5],F=o[8];return u[0]=f*b+d*U+m*N,u[3]=f*y+d*R+m*z,u[6]=f*x+d*P+m*F,u[1]=h*b+g*U+_*N,u[4]=h*y+g*R+_*z,u[7]=h*x+g*P+_*F,u[2]=v*b+S*U+E*N,u[5]=v*y+S*R+E*z,u[8]=v*x+S*P+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8];return n*f*g-n*d*h-r*u*g+r*d*m+o*u*h-o*f*m}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=g*f-d*h,v=d*m-g*u,S=h*u-f*m,E=n*_+r*v+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(o*h-g*r)*b,e[2]=(d*r-o*f)*b,e[3]=v*b,e[4]=(g*n-o*m)*b,e[5]=(o*u-d*n)*b,e[6]=S*b,e[7]=(r*m-h*n)*b,e[8]=(f*n-r*u)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,f,d){const m=Math.cos(u),h=Math.sin(u);return this.set(r*m,r*h,-r*(m*f+h*d)+f+e,-o*h,o*m,-o*(-h*f+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(eh.makeScale(e,n)),this}rotate(e){return this.premultiply(eh.makeRotation(-e)),this}translate(e,n){return this.premultiply(eh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eh=new ft,fv=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uA(){const a={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(o,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===zt&&(o.r=Ma(o.r),o.g=Ma(o.g),o.b=Ma(o.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(o.r=ks(o.r),o.g=ks(o.g),o.b=ks(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===lr?xc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,f){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return hl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return hl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return a.define({[Zs]:{primaries:e,whitePoint:r,transfer:xc,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:fv,fromXYZ:dv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),a}const At=uA();function Ma(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ks(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ws;class cA{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ws===void 0&&(ws=yc("canvas")),ws.width=e.width,ws.height=e.height;const o=ws.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=ws}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let f=0;f<u.length;f++)u[f]=Ma(u[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Ma(n[r]/255)*255):n[r]=Ma(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fA=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fA++}),this.uuid=yl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?u.push(th(o[f].image)):u.push(th(o[f]))}else u=th(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function th(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?cA.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let dA=0;const nh=new fe;class Hn extends $s{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,r=xa,o=xa,u=Fn,f=kr,d=wi,m=mi,h=Hn.DEFAULT_ANISOTROPY,g=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dA++}),this.uuid=yl(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=f,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nh).x}get height(){return this.source.getSize(nh).y}get depth(){return this.source.getSize(nh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qh:e.x=e.x-Math.floor(e.x);break;case xa:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qh:e.y=e.y-Math.floor(e.y);break;case xa:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=lS;Hn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,n=0,r=0,o=1){on.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const m=e.elements,h=m[0],g=m[4],_=m[8],v=m[1],S=m[5],E=m[9],b=m[2],y=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+y)<.1&&Math.abs(h+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(h+1)/2,P=(S+1)/2,N=(x+1)/2,z=(g+v)/4,F=(_+b)/4,W=(E+y)/4;return R>P&&R>N?R<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(R),o=z/r,u=F/r):P>N?P<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(P),r=z/o,u=W/o):N<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(N),r=F/u,o=W/u),this.set(r,o,u,n),this}let U=Math.sqrt((y-E)*(y-E)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(U)<.001&&(U=1),this.x=(y-E)/U,this.y=(_-b)/U,this.z=(v-g)/U,this.w=Math.acos((h+S+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hA extends $s{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new on(0,0,e,n),this.scissorTest=!1,this.viewport=new on(0,0,e,n);const o={width:e,height:n,depth:r.depth},u=new Hn(o);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new $p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends hA{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class _S extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pA extends Hn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class El{constructor(e=new fe(1/0,1/0,1/0),n=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zu.copy(r.boundingBox)),zu.applyMatrix4(e.matrixWorld),this.union(zu)}const o=e.children;for(let u=0,f=o.length;u<f;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Hu.subVectors(this.max,el),Ds.subVectors(e.a,el),Us.subVectors(e.b,el),Ls.subVectors(e.c,el),nr.subVectors(Us,Ds),ir.subVectors(Ls,Us),Lr.subVectors(Ds,Ls);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Lr.z,Lr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Lr.z,0,-Lr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Lr.y,Lr.x,0];return!ih(n,Ds,Us,Ls,Hu)||(n=[1,0,0,0,1,0,0,0,1],!ih(n,Ds,Us,Ls,Hu))?!1:(Vu.crossVectors(nr,ir),n=[Vu.x,Vu.y,Vu.z],ih(n,Ds,Us,Ls,Hu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Ei=new fe,zu=new El,Ds=new fe,Us=new fe,Ls=new fe,nr=new fe,ir=new fe,Lr=new fe,el=new fe,Hu=new fe,Vu=new fe,Nr=new fe;function ih(a,e,n,r,o){for(let u=0,f=a.length-3;u<=f;u+=3){Nr.fromArray(a,u);const d=o.x*Math.abs(Nr.x)+o.y*Math.abs(Nr.y)+o.z*Math.abs(Nr.z),m=e.dot(Nr),h=n.dot(Nr),g=r.dot(Nr);if(Math.max(-Math.max(m,h,g),Math.min(m,h,g))>d)return!1}return!0}const mA=new El,tl=new fe,ah=new fe;class em{constructor(e=new fe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):mA.setFromPoints(e).getCenter(r);let o=0;for(let u=0,f=e.length;u<f;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const n=tl.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(tl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ah.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(ah)),this.expandByPoint(tl.copy(e.center).sub(ah))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pa=new fe,rh=new fe,Gu=new fe,ar=new fe,sh=new fe,ku=new fe,oh=new fe;class gA{constructor(e=new fe,n=new fe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,n),pa.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){rh.copy(e).add(n).multiplyScalar(.5),Gu.copy(n).sub(e).normalize(),ar.copy(this.origin).sub(rh);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Gu),d=ar.dot(this.direction),m=-ar.dot(Gu),h=ar.lengthSq(),g=Math.abs(1-f*f);let _,v,S,E;if(g>0)if(_=f*m-d,v=f*d-m,E=u*g,_>=0)if(v>=-E)if(v<=E){const b=1/g;_*=b,v*=b,S=_*(_+f*v+2*d)+v*(f*_+v+2*m)+h}else v=u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+h;else v=-u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+h;else v<=-E?(_=Math.max(0,-(-f*u+d)),v=_>0?-u:Math.min(Math.max(-u,-m),u),S=-_*_+v*(v+2*m)+h):v<=E?(_=0,v=Math.min(Math.max(-u,-m),u),S=v*(v+2*m)+h):(_=Math.max(0,-(f*u+d)),v=_>0?u:Math.min(Math.max(-u,-m),u),S=-_*_+v*(v+2*m)+h);else v=f>0?-u:u,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(rh).addScaledVector(Gu,v),S}intersectSphere(e,n){pa.subVectors(e.center,this.origin);const r=pa.dot(this.direction),o=pa.dot(pa)-r*r,u=e.radius*e.radius;if(o>u)return null;const f=Math.sqrt(u-o),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,f,d,m;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return h>=0?(r=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(r=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),g>=0?(u=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||u>o||((u>r||isNaN(r))&&(r=u),(f<o||isNaN(o))&&(o=f),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>o)||((d>r||r!==r)&&(r=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,n,r,o,u){sh.subVectors(n,e),ku.subVectors(r,e),oh.crossVectors(sh,ku);let f=this.direction.dot(oh),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ar.subVectors(this.origin,e);const m=d*this.direction.dot(ku.crossVectors(ar,ku));if(m<0)return null;const h=d*this.direction.dot(sh.cross(ar));if(h<0||m+h>f)return null;const g=-d*ar.dot(oh);return g<0?null:this.at(g/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,n,r,o,u,f,d,m,h,g,_,v,S,E,b,y){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,f,d,m,h,g,_,v,S,E,b,y)}set(e,n,r,o,u,f,d,m,h,g,_,v,S,E,b,y){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=u,x[5]=f,x[9]=d,x[13]=m,x[2]=h,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=E,x[11]=b,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ns.setFromMatrixColumn(e,0).length(),u=1/Ns.setFromMatrixColumn(e,1).length(),f=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(o),h=Math.sin(o),g=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const v=f*g,S=f*_,E=d*g,b=d*_;n[0]=m*g,n[4]=-m*_,n[8]=h,n[1]=S+E*h,n[5]=v-b*h,n[9]=-d*m,n[2]=b-v*h,n[6]=E+S*h,n[10]=f*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,E=h*g,b=h*_;n[0]=v+b*d,n[4]=E*d-S,n[8]=f*h,n[1]=f*_,n[5]=f*g,n[9]=-d,n[2]=S*d-E,n[6]=b+v*d,n[10]=f*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,E=h*g,b=h*_;n[0]=v-b*d,n[4]=-f*_,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*g,n[9]=b-v*d,n[2]=-f*h,n[6]=d,n[10]=f*m}else if(e.order==="ZYX"){const v=f*g,S=f*_,E=d*g,b=d*_;n[0]=m*g,n[4]=E*h-S,n[8]=v*h+b,n[1]=m*_,n[5]=b*h+v,n[9]=S*h-E,n[2]=-h,n[6]=d*m,n[10]=f*m}else if(e.order==="YZX"){const v=f*m,S=f*h,E=d*m,b=d*h;n[0]=m*g,n[4]=b-v*_,n[8]=E*_+S,n[1]=_,n[5]=f*g,n[9]=-d*g,n[2]=-h*g,n[6]=S*_+E,n[10]=v-b*_}else if(e.order==="XZY"){const v=f*m,S=f*h,E=d*m,b=d*h;n[0]=m*g,n[4]=-_,n[8]=h*g,n[1]=v*_+b,n[5]=f*g,n[9]=S*_-E,n[2]=E*_-S,n[6]=d*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_A,e,vA)}lookAt(e,n,r){const o=this.elements;return ni.subVectors(e,n),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),rr.crossVectors(r,ni),rr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),rr.crossVectors(r,ni)),rr.normalize(),Xu.crossVectors(ni,rr),o[0]=rr.x,o[4]=Xu.x,o[8]=ni.x,o[1]=rr.y,o[5]=Xu.y,o[9]=ni.y,o[2]=rr.z,o[6]=Xu.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,f=r[0],d=r[4],m=r[8],h=r[12],g=r[1],_=r[5],v=r[9],S=r[13],E=r[2],b=r[6],y=r[10],x=r[14],U=r[3],R=r[7],P=r[11],N=r[15],z=o[0],F=o[4],W=o[8],A=o[12],L=o[1],H=o[5],Z=o[9],j=o[13],re=o[2],$=o[6],B=o[10],V=o[14],ee=o[3],xe=o[7],O=o[11],K=o[15];return u[0]=f*z+d*L+m*re+h*ee,u[4]=f*F+d*H+m*$+h*xe,u[8]=f*W+d*Z+m*B+h*O,u[12]=f*A+d*j+m*V+h*K,u[1]=g*z+_*L+v*re+S*ee,u[5]=g*F+_*H+v*$+S*xe,u[9]=g*W+_*Z+v*B+S*O,u[13]=g*A+_*j+v*V+S*K,u[2]=E*z+b*L+y*re+x*ee,u[6]=E*F+b*H+y*$+x*xe,u[10]=E*W+b*Z+y*B+x*O,u[14]=E*A+b*j+y*V+x*K,u[3]=U*z+R*L+P*re+N*ee,u[7]=U*F+R*H+P*$+N*xe,u[11]=U*W+R*Z+P*B+N*O,u[15]=U*A+R*j+P*V+N*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],f=e[1],d=e[5],m=e[9],h=e[13],g=e[2],_=e[6],v=e[10],S=e[14],E=e[3],b=e[7],y=e[11],x=e[15],U=m*S-h*v,R=d*S-h*_,P=d*v-m*_,N=f*S-h*g,z=f*v-m*g,F=f*_-d*g;return n*(b*U-y*R+x*P)-r*(E*U-y*N+x*z)+o*(E*R-b*N+x*F)-u*(E*P-b*z+y*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],f=e[4],d=e[5],m=e[6],h=e[7],g=e[8],_=e[9],v=e[10],S=e[11],E=e[12],b=e[13],y=e[14],x=e[15],U=_*y*h-b*v*h+b*m*S-d*y*S-_*m*x+d*v*x,R=E*v*h-g*y*h-E*m*S+f*y*S+g*m*x-f*v*x,P=g*b*h-E*_*h+E*d*S-f*b*S-g*d*x+f*_*x,N=E*_*m-g*b*m-E*d*v+f*b*v+g*d*y-f*_*y,z=n*U+r*R+o*P+u*N;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=U*F,e[1]=(b*v*u-_*y*u-b*o*S+r*y*S+_*o*x-r*v*x)*F,e[2]=(d*y*u-b*m*u+b*o*h-r*y*h-d*o*x+r*m*x)*F,e[3]=(_*m*u-d*v*u-_*o*h+r*v*h+d*o*S-r*m*S)*F,e[4]=R*F,e[5]=(g*y*u-E*v*u+E*o*S-n*y*S-g*o*x+n*v*x)*F,e[6]=(E*m*u-f*y*u-E*o*h+n*y*h+f*o*x-n*m*x)*F,e[7]=(f*v*u-g*m*u+g*o*h-n*v*h-f*o*S+n*m*S)*F,e[8]=P*F,e[9]=(E*_*u-g*b*u-E*r*S+n*b*S+g*r*x-n*_*x)*F,e[10]=(f*b*u-E*d*u+E*r*h-n*b*h-f*r*x+n*d*x)*F,e[11]=(g*d*u-f*_*u-g*r*h+n*_*h+f*r*S-n*d*S)*F,e[12]=N*F,e[13]=(g*b*o-E*_*o+E*r*v-n*b*v-g*r*y+n*_*y)*F,e[14]=(E*d*o-f*b*o-E*r*m+n*b*m+f*r*y-n*d*y)*F,e[15]=(f*_*o-g*d*o+g*r*m-n*_*m-f*r*v+n*d*v)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,f=e.x,d=e.y,m=e.z,h=u*f,g=u*d;return this.set(h*f+r,h*d-o*m,h*m+o*d,0,h*d+o*m,g*d+r,g*m-o*f,0,h*m-o*d,g*m+o*f,u*m*m+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,f){return this.set(1,r,u,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,f=n._y,d=n._z,m=n._w,h=u+u,g=f+f,_=d+d,v=u*h,S=u*g,E=u*_,b=f*g,y=f*_,x=d*_,U=m*h,R=m*g,P=m*_,N=r.x,z=r.y,F=r.z;return o[0]=(1-(b+x))*N,o[1]=(S+P)*N,o[2]=(E-R)*N,o[3]=0,o[4]=(S-P)*z,o[5]=(1-(v+x))*z,o[6]=(y+U)*z,o[7]=0,o[8]=(E+R)*F,o[9]=(y-U)*F,o[10]=(1-(v+b))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let u=Ns.set(o[0],o[1],o[2]).length();const f=Ns.set(o[4],o[5],o[6]).length(),d=Ns.set(o[8],o[9],o[10]).length();this.determinant()<0&&(u=-u),bi.copy(this);const h=1/u,g=1/f,_=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=_,bi.elements[9]*=_,bi.elements[10]*=_,n.setFromRotationMatrix(bi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,o,u,f,d=Gi,m=!1){const h=this.elements,g=2*u/(n-e),_=2*u/(r-o),v=(n+e)/(n-e),S=(r+o)/(r-o);let E,b;if(m)E=u/(f-u),b=f*u/(f-u);else if(d===Gi)E=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(d===Sc)E=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,o,u,f,d=Gi,m=!1){const h=this.elements,g=2/(n-e),_=2/(r-o),v=-(n+e)/(n-e),S=-(r+o)/(r-o);let E,b;if(m)E=1/(f-u),b=f/(f-u);else if(d===Gi)E=-2/(f-u),b=-(f+u)/(f-u);else if(d===Sc)E=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=g,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=_,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ns=new fe,bi=new dn,_A=new fe(0,0,0),vA=new fe(1,1,1),rr=new fe,Xu=new fe,ni=new fe,hv=new dn,pv=new Ml;class Ra{constructor(e=0,n=0,r=0,o=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],f=o[4],d=o[8],m=o[1],h=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return hv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hv,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return pv.setFromEuler(this),this.setFromQuaternion(pv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class vS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xA=0;const mv=new fe,Ps=new Ml,ma=new dn,Wu=new fe,nl=new fe,SA=new fe,yA=new Ml,gv=new fe(1,0,0),_v=new fe(0,1,0),vv=new fe(0,0,1),xv={type:"added"},MA={type:"removed"},Os={type:"childadded",child:null},lh={type:"childremoved",child:null};class ri extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xA++}),this.uuid=yl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new fe,n=new Ra,r=new Ml,o=new fe(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new dn},normalMatrix:{value:new ft}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(gv,e)}rotateY(e){return this.rotateOnAxis(_v,e)}rotateZ(e){return this.rotateOnAxis(vv,e)}translateOnAxis(e,n){return mv.copy(e).applyQuaternion(this.quaternion),this.position.add(mv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(gv,e)}translateY(e){return this.translateOnAxis(_v,e)}translateZ(e){return this.translateOnAxis(vv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Wu.copy(e):Wu.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(nl,Wu,this.up):ma.lookAt(Wu,nl,this.up),this.quaternion.setFromRotationMatrix(ma),o&&(ma.extractRotation(o.matrixWorld),Ps.setFromRotationMatrix(ma),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),Os.child=e,this.dispatchEvent(Os),Os.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(MA),lh.child=e,this.dispatchEvent(lh),lh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,SA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,yA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let u=0,f=o.length;u<f;u++)o[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let h=0,g=m.length;h<g;h++){const _=m[h];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,h=this.material.length;m<h;m++)d.push(u(e.materials,this.material[m]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(u(e.animations,m))}}if(n){const d=f(e.geometries),m=f(e.materials),h=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(d){const m=[];for(const h in d){const g=d[h];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ri.DEFAULT_UP=new fe(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new fe,ga=new fe,uh=new fe,_a=new fe,Is=new fe,Fs=new fe,Sv=new fe,ch=new fe,fh=new fe,dh=new fe,hh=new on,ph=new on,mh=new on;class Ci{constructor(e=new fe,n=new fe,r=new fe){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Ti.subVectors(e,n),o.cross(Ti);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){Ti.subVectors(o,n),ga.subVectors(r,n),uh.subVectors(e,n);const f=Ti.dot(Ti),d=Ti.dot(ga),m=Ti.dot(uh),h=ga.dot(ga),g=ga.dot(uh),_=f*h-d*d;if(_===0)return u.set(0,0,0),null;const v=1/_,S=(h*m-d*g)*v,E=(f*g-d*m)*v;return u.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,n,r,o,u,f,d,m){return this.getBarycoord(e,n,r,o,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(d,_a.z),m)}static getInterpolatedAttribute(e,n,r,o,u,f){return hh.setScalar(0),ph.setScalar(0),mh.setScalar(0),hh.fromBufferAttribute(e,n),ph.fromBufferAttribute(e,r),mh.fromBufferAttribute(e,o),f.setScalar(0),f.addScaledVector(hh,u.x),f.addScaledVector(ph,u.y),f.addScaledVector(mh,u.z),f}static isFrontFacing(e,n,r,o){return Ti.subVectors(r,n),ga.subVectors(e,n),Ti.cross(ga).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ti.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return Ci.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let f,d;Is.subVectors(o,r),Fs.subVectors(u,r),ch.subVectors(e,r);const m=Is.dot(ch),h=Fs.dot(ch);if(m<=0&&h<=0)return n.copy(r);fh.subVectors(e,o);const g=Is.dot(fh),_=Fs.dot(fh);if(g>=0&&_<=g)return n.copy(o);const v=m*_-g*h;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),n.copy(r).addScaledVector(Is,f);dh.subVectors(e,u);const S=Is.dot(dh),E=Fs.dot(dh);if(E>=0&&S<=E)return n.copy(u);const b=S*h-m*E;if(b<=0&&h>=0&&E<=0)return d=h/(h-E),n.copy(r).addScaledVector(Fs,d);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Sv.subVectors(u,o),d=(_-g)/(_-g+(S-E)),n.copy(o).addScaledVector(Sv,d);const x=1/(y+b+v);return f=b*x,d=v*x,n.copy(r).addScaledVector(Is,f).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},qu={h:0,s:0,l:0};function gh(a,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?a+(e-a)*6*n:n<1/2?e:n<2/3?a+(e-a)*6*(2/3-n):a}class kt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=lA(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=gh(f,u,e+1/3),this.g=gh(f,u,e),this.b=gh(f,u,e-1/3)}return At.colorSpaceToWorking(this,o),this}setStyle(e,n=ai){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const r=xS[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return At.workingToColorSpace(On.copy(this),e),Math.round(Et(On.r*255,0,255))*65536+Math.round(Et(On.g*255,0,255))*256+Math.round(Et(On.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.workingToColorSpace(On.copy(this),n);const r=On.r,o=On.g,u=On.b,f=Math.max(r,o,u),d=Math.min(r,o,u);let m,h;const g=(d+f)/2;if(d===f)m=0,h=0;else{const _=f-d;switch(h=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(o-u)/_+(o<u?6:0);break;case o:m=(u-r)/_+2;break;case u:m=(r-o)/_+4;break}m/=6}return e.h=m,e.s=h,e.l=g,e}getRGB(e,n=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),n),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ai){At.workingToColorSpace(On.copy(this),e);const n=On.r,r=On.g,o=On.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+n,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(sr),e.getHSL(qu);const r=Jd(sr.h,qu.h,n),o=Jd(sr.s,qu.s,n),u=Jd(sr.l,qu.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new kt;kt.NAMES=xS;let EA=0;class Dc extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EA++}),this.uuid=yl(),this.name="",this.type="Material",this.blending=Gs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oh,this.blendDst=Ih,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Oh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ih&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(n){const u=o(e.textures),f=o(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class SS extends Dc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ra,this.combine=eS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fn=new fe,Yu=new Rt;let bA=0;class qi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=sv,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Yu.fromBufferAttribute(this,n),Yu.applyMatrix3(e),this.setXY(n,Yu.x,Yu.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(e),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=$o(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(e,n){return this.normalized&&(n=qn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=qn(n,this.array),r=qn(r,this.array),o=qn(o,this.array),u=qn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class yS extends qi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class MS extends qi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ea extends qi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let TA=0;const pi=new dn,_h=new ri,Bs=new fe,ii=new El,il=new El,En=new fe;class Da extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:TA++}),this.uuid=yl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gS(e)?MS:yS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,r){return pi.makeTranslation(e,n,r),this.applyMatrix4(pi),this}scale(e,n,r){return pi.makeScale(e,n,r),this.applyMatrix4(pi),this}lookAt(e){return _h.lookAt(e),_h.updateMatrix(),this.applyMatrix4(_h.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const f=e[o];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ea(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];ii.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new em);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];il.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ii.min,il.min),ii.expandByPoint(En),En.addVectors(ii.max,il.max),ii.expandByPoint(En)):(ii.expandByPoint(il.min),ii.expandByPoint(il.max))}ii.getCenter(r);let o=0;for(let u=0,f=e.count;u<f;u++)En.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(En));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],m=this.morphTargetsRelative;for(let h=0,g=d.count;h<g;h++)En.fromBufferAttribute(d,h),m&&(Bs.fromBufferAttribute(e,h),En.add(Bs)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let W=0;W<r.count;W++)d[W]=new fe,m[W]=new fe;const h=new fe,g=new fe,_=new fe,v=new Rt,S=new Rt,E=new Rt,b=new fe,y=new fe;function x(W,A,L){h.fromBufferAttribute(r,W),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,L),v.fromBufferAttribute(u,W),S.fromBufferAttribute(u,A),E.fromBufferAttribute(u,L),g.sub(h),_.sub(h),S.sub(v),E.sub(v);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(H),d[W].add(b),d[A].add(b),d[L].add(b),m[W].add(y),m[A].add(y),m[L].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let W=0,A=U.length;W<A;++W){const L=U[W],H=L.start,Z=L.count;for(let j=H,re=H+Z;j<re;j+=3)x(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const R=new fe,P=new fe,N=new fe,z=new fe;function F(W){N.fromBufferAttribute(o,W),z.copy(N);const A=d[W];R.copy(A),R.sub(N.multiplyScalar(N.dot(A))).normalize(),P.crossVectors(z,A);const H=P.dot(m[W])<0?-1:1;f.setXYZW(W,R.x,R.y,R.z,H)}for(let W=0,A=U.length;W<A;++W){const L=U[W],H=L.start,Z=L.count;for(let j=H,re=H+Z;j<re;j+=3)F(e.getX(j+0)),F(e.getX(j+1)),F(e.getX(j+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new qi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new fe,u=new fe,f=new fe,d=new fe,m=new fe,h=new fe,g=new fe,_=new fe;if(e)for(let v=0,S=e.count;v<S;v+=3){const E=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(n,E),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,y),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,b),h.fromBufferAttribute(r,y),d.add(g),m.add(g),h.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),u.fromBufferAttribute(n,v+1),f.fromBufferAttribute(n,v+2),g.subVectors(f,u),_.subVectors(o,u),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)En.fromBufferAttribute(e,n),En.normalize(),e.setXYZ(n,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const h=d.array,g=d.itemSize,_=d.normalized,v=new h.constructor(m.length*g);let S=0,E=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?S=m[b]*d.data.stride+d.offset:S=m[b]*g;for(let x=0;x<g;x++)v[E++]=h[S++]}return new qi(v,g,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Da,r=this.index.array,o=this.attributes;for(const d in o){const m=o[d],h=e(m,r);n.setAttribute(d,h)}const u=this.morphAttributes;for(const d in u){const m=[],h=u[d];for(let g=0,_=h.length;g<_;g++){const v=h[g],S=e(v,r);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const h=f[d];n.addGroup(h.start,h.count,h.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const m in r){const h=r[m];e.data.attributes[m]=h.toJSON(e.data)}const o={};let u=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],g=[];for(let _=0,v=h.length;_<v;_++){const S=h[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(n))}const u=e.morphAttributes;for(const h in u){const g=[],_=u[h];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,g=f.length;h<g;h++){const _=f[h];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yv=new dn,Pr=new gA,ju=new em,Mv=new fe,Zu=new fe,Ku=new fe,Qu=new fe,vh=new fe,Ju=new fe,Ev=new fe,$u=new fe;class ji extends ri{constructor(e=new Da,n=new SS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=o.length;u<f;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){Ju.set(0,0,0);for(let m=0,h=u.length;m<h;m++){const g=d[m],_=u[m];g!==0&&(vh.fromBufferAttribute(_,e),f?Ju.addScaledVector(vh,g):Ju.addScaledVector(vh.sub(n),g))}n.add(Ju)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ju.copy(r.boundingSphere),ju.applyMatrix4(u),Pr.copy(e.ray).recast(e.near),!(ju.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(ju,Mv)===null||Pr.origin.distanceToSquared(Mv)>(e.far-e.near)**2))&&(yv.copy(u).invert(),Pr.copy(e.ray).applyMatrix4(yv),!(r.boundingBox!==null&&Pr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Pr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,h=u.attributes.uv,g=u.attributes.uv1,_=u.attributes.normal,v=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const y=v[E],x=f[y.materialIndex],U=Math.max(y.start,S.start),R=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,N=R;P<N;P+=3){const z=d.getX(P),F=d.getX(P+1),W=d.getX(P+2);o=ec(this,x,e,r,h,g,_,z,F,W),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const U=d.getX(y),R=d.getX(y+1),P=d.getX(y+2);o=ec(this,f,e,r,h,g,_,U,R,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,b=v.length;E<b;E++){const y=v[E],x=f[y.materialIndex],U=Math.max(y.start,S.start),R=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let P=U,N=R;P<N;P+=3){const z=P,F=P+1,W=P+2;o=ec(this,x,e,r,h,g,_,z,F,W),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),b=Math.min(m.count,S.start+S.count);for(let y=E,x=b;y<x;y+=3){const U=y,R=y+1,P=y+2;o=ec(this,f,e,r,h,g,_,U,R,P),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function AA(a,e,n,r,o,u,f,d){let m;if(e.side===jn?m=r.intersectTriangle(f,u,o,!0,d):m=r.intersectTriangle(o,u,f,e.side===fr,d),m===null)return null;$u.copy(d),$u.applyMatrix4(a.matrixWorld);const h=n.ray.origin.distanceTo($u);return h<n.near||h>n.far?null:{distance:h,point:$u.clone(),object:a}}function ec(a,e,n,r,o,u,f,d,m,h){a.getVertexPosition(d,Zu),a.getVertexPosition(m,Ku),a.getVertexPosition(h,Qu);const g=AA(a,e,n,r,Zu,Ku,Qu,Ev);if(g){const _=new fe;Ci.getBarycoord(Ev,Zu,Ku,Qu,_),o&&(g.uv=Ci.getInterpolatedAttribute(o,d,m,h,_,new Rt)),u&&(g.uv1=Ci.getInterpolatedAttribute(u,d,m,h,_,new Rt)),f&&(g.normal=Ci.getInterpolatedAttribute(f,d,m,h,_,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:h,normal:new fe,materialIndex:0};Ci.getNormal(Zu,Ku,Qu,v.normal),g.face=v,g.barycoord=_}return g}class bl extends Da{constructor(e=1,n=1,r=1,o=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:f};const d=this;o=Math.floor(o),u=Math.floor(u),f=Math.floor(f);const m=[],h=[],g=[],_=[];let v=0,S=0;E("z","y","x",-1,-1,r,n,e,f,u,0),E("z","y","x",1,-1,r,n,-e,f,u,1),E("x","z","y",1,1,e,r,n,o,f,2),E("x","z","y",1,-1,e,r,-n,o,f,3),E("x","y","z",1,-1,e,n,r,o,u,4),E("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(m),this.setAttribute("position",new Ea(h,3)),this.setAttribute("normal",new Ea(g,3)),this.setAttribute("uv",new Ea(_,2));function E(b,y,x,U,R,P,N,z,F,W,A){const L=P/F,H=N/W,Z=P/2,j=N/2,re=z/2,$=F+1,B=W+1;let V=0,ee=0;const xe=new fe;for(let O=0;O<B;O++){const K=O*H-j;for(let ue=0;ue<$;ue++){const ge=ue*L-Z;xe[b]=ge*U,xe[y]=K*R,xe[x]=re,h.push(xe.x,xe.y,xe.z),xe[b]=0,xe[y]=0,xe[x]=z>0?1:-1,g.push(xe.x,xe.y,xe.z),_.push(ue/F),_.push(1-O/W),V+=1}}for(let O=0;O<W;O++)for(let K=0;K<F;K++){const ue=v+K+$*O,ge=v+K+$*(O+1),Le=v+(K+1)+$*(O+1),We=v+(K+1)+$*O;m.push(ue,ge,We),m.push(ge,Le,We),ee+=6}d.addGroup(S,ee,A),S+=ee,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(a){const e={};for(const n in a){e[n]={};for(const r in a[n]){const o=a[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function zn(a){const e={};for(let n=0;n<a.length;n++){const r=Ks(a[n]);for(const o in r)e[o]=r[o]}return e}function RA(a){const e=[];for(let n=0;n<a.length;n++)e.push(a[n].clone());return e}function ES(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const CA={clone:Ks,merge:zn};var wA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Dc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wA,this.fragmentShader=DA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=RA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class bS extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new fe,bv=new Rt,Tv=new Rt;class Ri extends bS{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ap*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,n){return this.getViewBounds(e,bv,Tv),n.subVectors(Tv,bv)}setViewOffset(e,n,r,o,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qd*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,h=f.fullHeight;u+=f.offsetX*o/m,n-=f.offsetY*r/h,o*=f.width/m,r*=f.height/h}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zs=-90,Hs=1;class UA extends ri{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ri(zs,Hs,e,n);o.layers=this.layers,this.add(o);const u=new Ri(zs,Hs,e,n);u.layers=this.layers,this.add(u);const f=new Ri(zs,Hs,e,n);f.layers=this.layers,this.add(f);const d=new Ri(zs,Hs,e,n);d.layers=this.layers,this.add(d);const m=new Ri(zs,Hs,e,n);m.layers=this.layers,this.add(m);const h=new Ri(zs,Hs,e,n);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,f,d,m]=n;for(const h of n)this.remove(h);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Sc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of n)this.add(h),h.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,h,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,u),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,m),e.setRenderTarget(r,4,o),e.render(n,h),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),e.render(n,g),e.setRenderTarget(_,v,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class TS extends Hn{constructor(e=[],n=Wr,r,o,u,f,d,m,h,g){super(e,n,r,o,u,f,d,m,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AS extends Wi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new TS(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bl(5,5,5),u=new Di({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:ya});u.uniforms.tEquirect.value=n;const f=new ji(o,u),d=n.minFilter;return n.minFilter===kr&&(n.minFilter=Fn),new UA(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(u)}}class tc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LA={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,f=null;const d=this._targetRay,m=this._grip,h=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const b of e.hand.values()){const y=n.getJointPose(b,r),x=this._getHandJoint(h,b);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,E=.005;h.inputState.pinching&&v>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(LA)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=u!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new tc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class NA extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ra,this.environmentIntensity=1,this.environmentRotation=new Ra,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class PA extends Hn{constructor(e=null,n=1,r=1,o,u,f,d,m,h=Dn,g=Dn,_,v){super(null,f,d,m,h,g,o,u,_,v),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new fe,OA=new fe,IA=new ft;class Br{constructor(e=new fe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Sh.subVectors(r,n).cross(OA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Sh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||IA.getNormalMatrix(e),o=this.coplanarPoint(Sh).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new em,FA=new Rt(.5,.5),nc=new fe;class RS{constructor(e=new Br,n=new Br,r=new Br,o=new Br,u=new Br,f=new Br){this.planes=[e,n,r,o,u,f]}set(e,n,r,o,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Gi,r=!1){const o=this.planes,u=e.elements,f=u[0],d=u[1],m=u[2],h=u[3],g=u[4],_=u[5],v=u[6],S=u[7],E=u[8],b=u[9],y=u[10],x=u[11],U=u[12],R=u[13],P=u[14],N=u[15];if(o[0].setComponents(h-f,S-g,x-E,N-U).normalize(),o[1].setComponents(h+f,S+g,x+E,N+U).normalize(),o[2].setComponents(h+d,S+_,x+b,N+R).normalize(),o[3].setComponents(h-d,S-_,x-b,N-R).normalize(),r)o[4].setComponents(m,v,y,P).normalize(),o[5].setComponents(h-m,S-v,x-y,N-P).normalize();else if(o[4].setComponents(h-m,S-v,x-y,N-P).normalize(),n===Gi)o[5].setComponents(h+m,S+v,x+y,N+P).normalize();else if(n===Sc)o[5].setComponents(m,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=FA.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(nc.x=o.normal.x>0?e.max.x:e.min.x,nc.y=o.normal.y>0?e.max.y:e.min.y,nc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(nc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pl extends Hn{constructor(e,n,r=Yi,o,u,f,d=Dn,m=Dn,h,g=Aa,_=1){if(g!==Aa&&g!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:n,depth:_};super(v,o,u,f,d,m,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class BA extends pl{constructor(e,n=Yi,r=Wr,o,u,f=Dn,d=Dn,m,h=Aa){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,n,r,o,u,f,d,m,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class CS extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends Da{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,f=n/2,d=Math.floor(r),m=Math.floor(o),h=d+1,g=m+1,_=e/d,v=n/m,S=[],E=[],b=[],y=[];for(let x=0;x<g;x++){const U=x*v-f;for(let R=0;R<h;R++){const P=R*_-u;E.push(P,-U,0),b.push(0,0,1),y.push(R/d),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let U=0;U<d;U++){const R=U+h*x,P=U+h*(x+1),N=U+1+h*(x+1),z=U+1+h*x;S.push(R,P,z),S.push(P,N,z)}this.setIndex(S),this.setAttribute("position",new Ea(E,3)),this.setAttribute("normal",new Ea(b,3)),this.setAttribute("uv",new Ea(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.widthSegments,e.heightSegments)}}class zA extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HA extends Dc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VA extends Dc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tm extends bS{constructor(e=-1,n=1,r=1,o=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=h*this.view.offsetX,f=u+h*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class GA extends Ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class kA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Av(a,e,n,r){const o=XA(r);switch(n){case hS:return a*e;case mS:return a*e/o.components*o.byteLength;case jp:return a*e/o.components*o.byteLength;case js:return a*e*2/o.components*o.byteLength;case Zp:return a*e*2/o.components*o.byteLength;case pS:return a*e*3/o.components*o.byteLength;case wi:return a*e*4/o.components*o.byteLength;case Kp:return a*e*4/o.components*o.byteLength;case cc:case fc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case dc:case hc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Zh:case Qh:return Math.max(a,16)*Math.max(e,8)/4;case jh:case Kh:return Math.max(a,8)*Math.max(e,8)/2;case Jh:case $h:case tp:case np:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case ep:case ip:case ap:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case rp:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case sp:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case op:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case lp:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case up:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case cp:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case fp:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case dp:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case hp:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case pp:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case mp:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case gp:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case _p:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case vp:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case xp:case Sp:case yp:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Mp:case Ep:return Math.ceil(a/4)*Math.ceil(e/4)*8;case bp:case Tp:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XA(a){switch(a){case mi:case uS:return{byteLength:1,components:1};case fl:case cS:case Ta:return{byteLength:2,components:1};case qp:case Yp:return{byteLength:2,components:4};case Yi:case Wp:case Vi:return{byteLength:4,components:1};case fS:case dS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wS(){let a=null,e=!1,n=null,r=null;function o(u,f){n(u,f),r=a.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=a.requestAnimationFrame(o),e=!0)},stop:function(){a.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){a=u}}}function WA(a){const e=new WeakMap;function n(d,m){const h=d.array,g=d.usage,_=h.byteLength,v=a.createBuffer();a.bindBuffer(m,v),a.bufferData(m,h,g),d.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,h){const g=m.array,_=m.updateRanges;if(a.bindBuffer(h,d),_.length===0)a.bufferSubData(h,0,g);else{_.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<_.length;S++){const E=_[v],b=_[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let S=0,E=_.length;S<E;S++){const b=_[S];a.bufferSubData(h,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(a.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,n(d,m));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,d,m),h.version=d.version}}return{get:o,remove:u,update:f}}var qA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,YA=`#ifdef USE_ALPHAHASH
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
#endif`,jA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,JA=`#ifdef USE_AOMAP
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
#endif`,$A=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eR=`#ifdef USE_BATCHING
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
#endif`,tR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,aR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rR=`#ifdef USE_IRIDESCENCE
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
#endif`,sR=`#ifdef USE_BUMPMAP
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
#endif`,oR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mR=`#define PI 3.141592653589793
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
} // validated`,gR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_R=`vec3 transformedNormal = objectNormal;
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
#endif`,vR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MR="gl_FragColor = linearToOutputTexel( gl_FragColor );",ER=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bR=`#ifdef USE_ENVMAP
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
#endif`,TR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,AR=`#ifdef USE_ENVMAP
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
#endif`,RR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CR=`#ifdef USE_ENVMAP
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
#endif`,wR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NR=`#ifdef USE_GRADIENTMAP
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
}`,PR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FR=`uniform bool receiveShadow;
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
#endif`,BR=`#ifdef USE_ENVMAP
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
#endif`,zR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,VR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kR=`PhysicalMaterial material;
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
#endif`,XR=`uniform sampler2D dfgLUT;
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
}`,WR=`
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
#endif`,qR=`#if defined( RE_IndirectDiffuse )
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
#endif`,YR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QR=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$R=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tC=`#if defined( USE_POINTS_UV )
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
#endif`,nC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oC=`#ifdef USE_MORPHTARGETS
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
#endif`,lC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,cC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pC=`#ifdef USE_NORMALMAP
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
#endif`,mC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_C=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,RC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,DC=`float getShadowMask() {
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
}`,UC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LC=`#ifdef USE_SKINNING
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
#endif`,NC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PC=`#ifdef USE_SKINNING
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
#endif`,OC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zC=`#ifdef USE_TRANSMISSION
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
#endif`,HC=`#ifdef USE_TRANSMISSION
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
#endif`,VC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qC=`uniform sampler2D t2D;
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
}`,YC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jC=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ZC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QC=`#include <common>
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
}`,JC=`#if DEPTH_PACKING == 3200
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
}`,$C=`#define DISTANCE
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
}`,ew=`#define DISTANCE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
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
}`,aw=`uniform vec3 diffuse;
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
}`,rw=`#include <common>
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#define LAMBERT
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
}`,lw=`#define LAMBERT
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
}`,uw=`#define MATCAP
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
}`,cw=`#define MATCAP
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
}`,fw=`#define NORMAL
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
}`,dw=`#define NORMAL
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
}`,hw=`#define PHONG
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
}`,pw=`#define PHONG
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
}`,mw=`#define STANDARD
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
}`,gw=`#define STANDARD
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
}`,_w=`#define TOON
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
}`,vw=`#define TOON
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
}`,xw=`uniform float size;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Mw=`uniform vec3 color;
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
}`,Ew=`uniform float rotation;
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
}`,bw=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:qA,alphahash_pars_fragment:YA,alphamap_fragment:jA,alphamap_pars_fragment:ZA,alphatest_fragment:KA,alphatest_pars_fragment:QA,aomap_fragment:JA,aomap_pars_fragment:$A,batching_pars_vertex:eR,batching_vertex:tR,begin_vertex:nR,beginnormal_vertex:iR,bsdfs:aR,iridescence_fragment:rR,bumpmap_pars_fragment:sR,clipping_planes_fragment:oR,clipping_planes_pars_fragment:lR,clipping_planes_pars_vertex:uR,clipping_planes_vertex:cR,color_fragment:fR,color_pars_fragment:dR,color_pars_vertex:hR,color_vertex:pR,common:mR,cube_uv_reflection_fragment:gR,defaultnormal_vertex:_R,displacementmap_pars_vertex:vR,displacementmap_vertex:xR,emissivemap_fragment:SR,emissivemap_pars_fragment:yR,colorspace_fragment:MR,colorspace_pars_fragment:ER,envmap_fragment:bR,envmap_common_pars_fragment:TR,envmap_pars_fragment:AR,envmap_pars_vertex:RR,envmap_physical_pars_fragment:BR,envmap_vertex:CR,fog_vertex:wR,fog_pars_vertex:DR,fog_fragment:UR,fog_pars_fragment:LR,gradientmap_pars_fragment:NR,lightmap_pars_fragment:PR,lights_lambert_fragment:OR,lights_lambert_pars_fragment:IR,lights_pars_begin:FR,lights_toon_fragment:zR,lights_toon_pars_fragment:HR,lights_phong_fragment:VR,lights_phong_pars_fragment:GR,lights_physical_fragment:kR,lights_physical_pars_fragment:XR,lights_fragment_begin:WR,lights_fragment_maps:qR,lights_fragment_end:YR,logdepthbuf_fragment:jR,logdepthbuf_pars_fragment:ZR,logdepthbuf_pars_vertex:KR,logdepthbuf_vertex:QR,map_fragment:JR,map_pars_fragment:$R,map_particle_fragment:eC,map_particle_pars_fragment:tC,metalnessmap_fragment:nC,metalnessmap_pars_fragment:iC,morphinstance_vertex:aC,morphcolor_vertex:rC,morphnormal_vertex:sC,morphtarget_pars_vertex:oC,morphtarget_vertex:lC,normal_fragment_begin:uC,normal_fragment_maps:cC,normal_pars_fragment:fC,normal_pars_vertex:dC,normal_vertex:hC,normalmap_pars_fragment:pC,clearcoat_normal_fragment_begin:mC,clearcoat_normal_fragment_maps:gC,clearcoat_pars_fragment:_C,iridescence_pars_fragment:vC,opaque_fragment:xC,packing:SC,premultiplied_alpha_fragment:yC,project_vertex:MC,dithering_fragment:EC,dithering_pars_fragment:bC,roughnessmap_fragment:TC,roughnessmap_pars_fragment:AC,shadowmap_pars_fragment:RC,shadowmap_pars_vertex:CC,shadowmap_vertex:wC,shadowmask_pars_fragment:DC,skinbase_vertex:UC,skinning_pars_vertex:LC,skinning_vertex:NC,skinnormal_vertex:PC,specularmap_fragment:OC,specularmap_pars_fragment:IC,tonemapping_fragment:FC,tonemapping_pars_fragment:BC,transmission_fragment:zC,transmission_pars_fragment:HC,uv_pars_fragment:VC,uv_pars_vertex:GC,uv_vertex:kC,worldpos_vertex:XC,background_vert:WC,background_frag:qC,backgroundCube_vert:YC,backgroundCube_frag:jC,cube_vert:ZC,cube_frag:KC,depth_vert:QC,depth_frag:JC,distance_vert:$C,distance_frag:ew,equirect_vert:tw,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:aw,meshbasic_vert:rw,meshbasic_frag:sw,meshlambert_vert:ow,meshlambert_frag:lw,meshmatcap_vert:uw,meshmatcap_frag:cw,meshnormal_vert:fw,meshnormal_frag:dw,meshphong_vert:hw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:_w,meshtoon_frag:vw,points_vert:xw,points_frag:Sw,shadow_vert:yw,shadow_frag:Mw,sprite_vert:Ew,sprite_frag:bw},Fe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Hi={basic:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:zn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:zn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:zn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:zn([Fe.points,Fe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:zn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:zn([Fe.common,Fe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:zn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:zn([Fe.sprite,Fe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:zn([Fe.common,Fe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:zn([Fe.lights,Fe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Hi.physical={uniforms:zn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const ic={r:0,b:0,g:0},Ir=new Ra,Tw=new dn;function Aw(a,e,n,r,o,u,f){const d=new kt(0);let m=u===!0?0:1,h,g,_=null,v=0,S=null;function E(R){let P=R.isScene===!0?R.background:null;return P&&P.isTexture&&(P=(R.backgroundBlurriness>0?n:e).get(P)),P}function b(R){let P=!1;const N=E(R);N===null?x(d,m):N&&N.isColor&&(x(N,1),P=!0);const z=a.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(a.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function y(R,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===wc)?(g===void 0&&(g=new ji(new bl(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ks(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Ir.copy(P.backgroundRotation),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),g.material.uniforms.envMap.value=N,g.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(Ir)),g.material.toneMapped=At.getTransfer(N.colorSpace)!==zt,(_!==N||v!==N.version||S!==a.toneMapping)&&(g.material.needsUpdate=!0,_=N,v=N.version,S=a.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):N&&N.isTexture&&(h===void 0&&(h=new ji(new Tl(2,2),new Di({name:"BackgroundMaterial",uniforms:Ks(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=N,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.toneMapped=At.getTransfer(N.colorSpace)!==zt,N.matrixAutoUpdate===!0&&N.updateMatrix(),h.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||v!==N.version||S!==a.toneMapping)&&(h.material.needsUpdate=!0,_=N,v=N.version,S=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,P){R.getRGB(ic,ES(a)),r.buffers.color.setClear(ic.r,ic.g,ic.b,P,f)}function U(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,P=1){d.set(R),m=P,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(R){m=R,x(d,m)},render:b,addToRenderList:y,dispose:U}}function Rw(a,e){const n=a.getParameter(a.MAX_VERTEX_ATTRIBS),r={},o=v(null);let u=o,f=!1;function d(L,H,Z,j,re){let $=!1;const B=_(j,Z,H);u!==B&&(u=B,h(u.object)),$=S(L,j,Z,re),$&&E(L,j,Z,re),re!==null&&e.update(re,a.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,P(L,H,Z,j),re!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return a.createVertexArray()}function h(L){return a.bindVertexArray(L)}function g(L){return a.deleteVertexArray(L)}function _(L,H,Z){const j=Z.wireframe===!0;let re=r[L.id];re===void 0&&(re={},r[L.id]=re);let $=re[H.id];$===void 0&&($={},re[H.id]=$);let B=$[j];return B===void 0&&(B=v(m()),$[j]=B),B}function v(L){const H=[],Z=[],j=[];for(let re=0;re<n;re++)H[re]=0,Z[re]=0,j[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:j,object:L,attributes:{},index:null}}function S(L,H,Z,j){const re=u.attributes,$=H.attributes;let B=0;const V=Z.getAttributes();for(const ee in V)if(V[ee].location>=0){const O=re[ee];let K=$[ee];if(K===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;B++}return u.attributesNum!==B||u.index!==j}function E(L,H,Z,j){const re={},$=H.attributes;let B=0;const V=Z.getAttributes();for(const ee in V)if(V[ee].location>=0){let O=$[ee];O===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),re[ee]=K,B++}u.attributes=re,u.attributesNum=B,u.index=j}function b(){const L=u.newAttributes;for(let H=0,Z=L.length;H<Z;H++)L[H]=0}function y(L){x(L,0)}function x(L,H){const Z=u.newAttributes,j=u.enabledAttributes,re=u.attributeDivisors;Z[L]=1,j[L]===0&&(a.enableVertexAttribArray(L),j[L]=1),re[L]!==H&&(a.vertexAttribDivisor(L,H),re[L]=H)}function U(){const L=u.newAttributes,H=u.enabledAttributes;for(let Z=0,j=H.length;Z<j;Z++)H[Z]!==L[Z]&&(a.disableVertexAttribArray(Z),H[Z]=0)}function R(L,H,Z,j,re,$,B){B===!0?a.vertexAttribIPointer(L,H,Z,re,$):a.vertexAttribPointer(L,H,Z,j,re,$)}function P(L,H,Z,j){b();const re=j.attributes,$=Z.getAttributes(),B=H.defaultAttributeValues;for(const V in $){const ee=$[V];if(ee.location>=0){let xe=re[V];if(xe===void 0&&(V==="instanceMatrix"&&L.instanceMatrix&&(xe=L.instanceMatrix),V==="instanceColor"&&L.instanceColor&&(xe=L.instanceColor)),xe!==void 0){const O=xe.normalized,K=xe.itemSize,ue=e.get(xe);if(ue===void 0)continue;const ge=ue.buffer,Le=ue.type,We=ue.bytesPerElement,te=Le===a.INT||Le===a.UNSIGNED_INT||xe.gpuType===Wp;if(xe.isInterleavedBufferAttribute){const _e=xe.data,Te=_e.stride,$e=xe.offset;if(_e.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ee.locationSize;Ve++)x(ee.location+Ve,_e.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ve=0;Ve<ee.locationSize;Ve++)y(ee.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let Ve=0;Ve<ee.locationSize;Ve++)R(ee.location+Ve,K/ee.locationSize,Le,O,Te*We,($e+K/ee.locationSize*Ve)*We,te)}else{if(xe.isInstancedBufferAttribute){for(let _e=0;_e<ee.locationSize;_e++)x(ee.location+_e,xe.meshPerAttribute);L.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let _e=0;_e<ee.locationSize;_e++)y(ee.location+_e);a.bindBuffer(a.ARRAY_BUFFER,ge);for(let _e=0;_e<ee.locationSize;_e++)R(ee.location+_e,K/ee.locationSize,Le,O,K*We,K/ee.locationSize*_e*We,te)}}else if(B!==void 0){const O=B[V];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ee.location,O);break;case 3:a.vertexAttrib3fv(ee.location,O);break;case 4:a.vertexAttrib4fv(ee.location,O);break;default:a.vertexAttrib1fv(ee.location,O)}}}}U()}function N(){W();for(const L in r){const H=r[L];for(const Z in H){const j=H[Z];for(const re in j)g(j[re].object),delete j[re];delete H[Z]}delete r[L]}}function z(L){if(r[L.id]===void 0)return;const H=r[L.id];for(const Z in H){const j=H[Z];for(const re in j)g(j[re].object),delete j[re];delete H[Z]}delete r[L.id]}function F(L){for(const H in r){const Z=r[H];if(Z[L.id]===void 0)continue;const j=Z[L.id];for(const re in j)g(j[re].object),delete j[re];delete Z[L.id]}}function W(){A(),f=!0,u!==o&&(u=o,h(u.object))}function A(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function Cw(a,e,n){let r;function o(h){r=h}function u(h,g){a.drawArrays(r,h,g),n.update(g,r,1)}function f(h,g,_){_!==0&&(a.drawArraysInstanced(r,h,g,_),n.update(g,r,_))}function d(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];n.update(S,r,1)}function m(h,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<h.length;E++)f(h[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,h,0,g,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=g[b]*v[b];n.update(E,r,1)}}this.setMode=o,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function ww(a,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==wi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const W=F===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!W)}function m(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=n.precision!==void 0?n.precision:"highp";const g=m(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),x=a.getParameter(a.MAX_VERTEX_ATTRIBS),U=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),R=a.getParameter(a.MAX_VARYING_VECTORS),P=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=a.getParameter(a.MAX_SAMPLES),z=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:U,maxVaryings:R,maxFragmentUniforms:P,maxSamples:N,samples:z}}function Dw(a){const e=this;let n=null,r=0,o=!1,u=!1;const f=new Br,d=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const E=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,x=a.get(_);if(!o||E===null||E.length===0||u&&!y)u?g(null):h();else{const U=u?0:r,R=U*4;let P=x.clippingState||null;m.value=P,P=g(E,v,R,S);for(let N=0;N!==R;++N)P[N]=n[N];x.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function h(){m.value!==n&&(m.value=n,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,E){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,E!==!0||y===null){const x=S+b*4,U=v.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<x)&&(y=new Float32Array(x));for(let R=0,P=S;R!==b;++R,P+=4)f.copy(_[R]).applyMatrix4(U,d),f.normal.toArray(y,P),y[P+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function Uw(a){let e=new WeakMap;function n(f,d){return d===Xh?f.mapping=Wr:d===Wh&&(f.mapping=Ys),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Xh||d===Wh)if(e.has(f)){const m=e.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const h=new AS(m.height);return h.fromEquirectangularTexture(a,f),e.set(f,h),f.addEventListener("dispose",o),n(h.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const cr=4,Rv=[.125,.215,.35,.446,.526,.582],Gr=20,Lw=256,al=new tm,Cv=new kt;let yh=null,Mh=0,Eh=0,bh=!1;const Nw=new fe;class wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:f=256,position:d=Nw}=u;yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yh,Mh,Eh),this._renderer.xr.enabled=bh,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yh=this._renderer.getRenderTarget(),Mh=this._renderer.getActiveCubeFace(),Eh=this._renderer.getActiveMipmapLevel(),bh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Ta,format:wi,colorSpace:Zs,depthBuffer:!1},o=Dv(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dv(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Pw(u)),this._blurMaterial=Iw(u,e,n),this._ggxMaterial=Ow(u,e,n)}return o}_compileMaterial(e){const n=new ji(new Da,e);this._renderer.compile(n,al)}_sceneToCubeUV(e,n,r,o,u){const m=new Ri(90,1,n,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Cv),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ji(new bl,new SS({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let x=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,x=!0):(y.color.copy(Cv),x=!0);for(let R=0;R<6;R++){const P=R%3;P===0?(m.up.set(0,h[R],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+g[R],u.y,u.z)):P===1?(m.up.set(0,0,h[R]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+g[R],u.z)):(m.up.set(0,h[R],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+g[R]));const N=this._cubeSize;Vs(o,P*N,R>2?N:0,N,N),_.setRenderTarget(o),x&&_.render(b,m),_.render(e,m)}_.toneMapping=S,_.autoClear=v,e.background=U}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Wr||e.mapping===Ys;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const u=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=e;const m=this._cubeSize;Vs(n,0,0,3*m,2*m),r.setRenderTarget(n),r.render(f,al)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,h=r/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),v=0+h*1.25,S=_*v,{_lodMax:E}=this,b=this._sizeLods[r],y=3*b*(r>E-cr?r-E+cr:0),x=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-n,Vs(u,y,x,3*b,2*b),o.setRenderTarget(u),o.render(d,al),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=E-r,Vs(e,y,x,3*b,2*b),o.setRenderTarget(e),o.render(d,al)}_blur(e,n,r,o,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",u),this._halfBlur(f,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,f,d){const m=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=h;const v=h.uniforms,S=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Gr-1),b=u/E,y=isFinite(u)?1+Math.floor(g*b):Gr;y>Gr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Gr}`);const x=[];let U=0;for(let F=0;F<Gr;++F){const W=F/b,A=Math.exp(-W*W/2);x.push(A),F===0?U+=A:F<y&&(U+=2*A)}for(let F=0;F<x.length;F++)x[F]=x[F]/U;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:R}=this;v.dTheta.value=E,v.mipInt.value=R-r;const P=this._sizeLods[o],N=3*P*(o>R-cr?o-R+cr:0),z=4*(this._cubeSize-P);Vs(n,N,z,3*P,2*P),m.setRenderTarget(n),m.render(_,al)}}function Pw(a){const e=[],n=[],r=[];let o=a;const u=a-cr+1+Rv.length;for(let f=0;f<u;f++){const d=Math.pow(2,o);e.push(d);let m=1/d;f>a-cr?m=Rv[f-a+cr-1]:f===0&&(m=0),n.push(m);const h=1/(d-2),g=-h,_=1+h,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,b=3,y=2,x=1,U=new Float32Array(b*E*S),R=new Float32Array(y*E*S),P=new Float32Array(x*E*S);for(let z=0;z<S;z++){const F=z%3*2/3-1,W=z>2?0:-1,A=[F,W,0,F+2/3,W,0,F+2/3,W+1,0,F,W,0,F+2/3,W+1,0,F,W+1,0];U.set(A,b*E*z),R.set(v,y*E*z);const L=[z,z,z,z,z,z];P.set(L,x*E*z)}const N=new Da;N.setAttribute("position",new qi(U,b)),N.setAttribute("uv",new qi(R,y)),N.setAttribute("faceIndex",new qi(P,x)),r.push(new ji(N,null)),o>cr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Dv(a,e,n){const r=new Wi(a,e,n);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vs(a,e,n,r,o){a.viewport.set(e,n,r,o),a.scissor.set(e,n,r,o)}function Ow(a,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Lw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Iw(a,e,n){const r=new Float32Array(Gr),o=new fe(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Uv(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Lv(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function Fw(a){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const m=d.mapping,h=m===Xh||m===Wh,g=m===Wr||m===Ys;if(h||g){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new wv(a)),_=h?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return h&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new wv(a)),_=h?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",u),_.texture):null}}}return d}function o(d){let m=0;const h=6;for(let g=0;g<h;g++)d[g]!==void 0&&m++;return m===h}function u(d){const m=d.target;m.removeEventListener("dispose",u);const h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function Bw(a){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=a.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&hl("WebGLRenderer: "+r+" extension not supported."),o}}}function zw(a,e,n,r){const o={},u=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete o[v.id];const S=u.get(v);S&&(e.remove(S),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",f),o[v.id]=!0,n.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],a.ARRAY_BUFFER)}function h(_){const v=[],S=_.index,E=_.attributes.position;let b=0;if(S!==null){const U=S.array;b=S.version;for(let R=0,P=U.length;R<P;R+=3){const N=U[R+0],z=U[R+1],F=U[R+2];v.push(N,z,z,F,F,N)}}else if(E!==void 0){const U=E.array;b=E.version;for(let R=0,P=U.length/3-1;R<P;R+=3){const N=R+0,z=R+1,F=R+2;v.push(N,z,z,F,F,N)}}else return;const y=new(gS(v)?MS:yS)(v,1);y.version=b;const x=u.get(_);x&&e.remove(x),u.set(_,y)}function g(_){const v=u.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&h(_)}else h(_);return u.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function Hw(a,e,n){let r;function o(v){r=v}let u,f;function d(v){u=v.type,f=v.bytesPerElement}function m(v,S){a.drawElements(r,S,u,v*f),n.update(S,r,1)}function h(v,S,E){E!==0&&(a.drawElementsInstanced(r,S,u,v*f,E),n.update(S,r,E))}function g(v,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,v,0,E);let y=0;for(let x=0;x<E;x++)y+=S[x];n.update(y,r,1)}function _(v,S,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)h(v[x]/f,S[x],b[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,v,0,b,0,E);let x=0;for(let U=0;U<E;U++)x+=S[U]*b[U];n.update(x,r,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Vw(a){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case a.TRIANGLES:n.triangles+=d*(u/3);break;case a.LINES:n.lines+=d*(u/2);break;case a.LINE_STRIP:n.lines+=d*(u-1);break;case a.LINE_LOOP:n.lines+=d*u;break;case a.POINTS:n.points+=d*u;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function Gw(a,e,n){const r=new WeakMap,o=new on;function u(f,d,m){const h=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let L=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",L)};var S=L;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),b===!0&&(P=2),y===!0&&(P=3);let N=d.attributes.position.count*P,z=1;N>e.maxTextureSize&&(z=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const F=new Float32Array(N*z*4*_),W=new _S(F,N,z,_);W.type=Vi,W.needsUpdate=!0;const A=P*4;for(let H=0;H<_;H++){const Z=x[H],j=U[H],re=R[H],$=N*z*4*H;for(let B=0;B<Z.count;B++){const V=B*A;E===!0&&(o.fromBufferAttribute(Z,B),F[$+V+0]=o.x,F[$+V+1]=o.y,F[$+V+2]=o.z,F[$+V+3]=0),b===!0&&(o.fromBufferAttribute(j,B),F[$+V+4]=o.x,F[$+V+5]=o.y,F[$+V+6]=o.z,F[$+V+7]=0),y===!0&&(o.fromBufferAttribute(re,B),F[$+V+8]=o.x,F[$+V+9]=o.y,F[$+V+10]=o.z,F[$+V+11]=re.itemSize===4?o.w:1)}}v={count:_,texture:W,size:new Rt(N,z)},r.set(d,v),d.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(a,"morphTexture",f.morphTexture,n);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const b=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(a,"morphTargetBaseInfluence",b),m.getUniforms().setValue(a,"morphTargetInfluences",h)}m.getUniforms().setValue(a,"morphTargetsTexture",v.texture,n),m.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}return{update:u}}function kw(a,e,n,r){let o=new WeakMap;function u(m){const h=r.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==h&&(e.update(_),o.set(_,h)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==h&&(n.update(m.instanceMatrix,a.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,a.ARRAY_BUFFER),o.set(m,h))),m.isSkinnedMesh){const v=m.skeleton;o.get(v)!==h&&(v.update(),o.set(v,h))}return _}function f(){o=new WeakMap}function d(m){const h=m.target;h.removeEventListener("dispose",d),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:u,dispose:f}}const Xw={[tS]:"LINEAR_TONE_MAPPING",[nS]:"REINHARD_TONE_MAPPING",[iS]:"CINEON_TONE_MAPPING",[aS]:"ACES_FILMIC_TONE_MAPPING",[sS]:"AGX_TONE_MAPPING",[oS]:"NEUTRAL_TONE_MAPPING",[rS]:"CUSTOM_TONE_MAPPING"};function Ww(a,e,n,r,o){const u=new Wi(e,n,{type:a,depthBuffer:r,stencilBuffer:o}),f=new Wi(e,n,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),d=new Da;d.setAttribute("position",new Ea([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Ea([0,2,0,0,2,0],2));const m=new zA({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ji(d,m),g=new tm(-1,1,1,-1,0,1);let _=null,v=null,S=!1,E,b=null,y=[],x=!1;this.setSize=function(U,R){u.setSize(U,R),f.setSize(U,R);for(let P=0;P<y.length;P++){const N=y[P];N.setSize&&N.setSize(U,R)}},this.setEffects=function(U){y=U,x=y.length>0&&y[0].isRenderPass===!0;const R=u.width,P=u.height;for(let N=0;N<y.length;N++){const z=y[N];z.setSize&&z.setSize(R,P)}},this.begin=function(U,R){if(S||U.toneMapping===Xi&&y.length===0)return!1;if(b=R,R!==null){const P=R.width,N=R.height;(u.width!==P||u.height!==N)&&this.setSize(P,N)}return x===!1&&U.setRenderTarget(u),E=U.toneMapping,U.toneMapping=Xi,!0},this.hasRenderPass=function(){return x},this.end=function(U,R){U.toneMapping=E,S=!0;let P=u,N=f;for(let z=0;z<y.length;z++){const F=y[z];if(F.enabled!==!1&&(F.render(U,N,P,R),F.needsSwap!==!1)){const W=P;P=N,N=W}}if(_!==U.outputColorSpace||v!==U.toneMapping){_=U.outputColorSpace,v=U.toneMapping,m.defines={},At.getTransfer(_)===zt&&(m.defines.SRGB_TRANSFER="");const z=Xw[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,U.setRenderTarget(b),U.render(h,g),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const DS=new Hn,Rp=new pl(1,1),US=new _S,LS=new pA,NS=new TS,Nv=[],Pv=[],Ov=new Float32Array(16),Iv=new Float32Array(9),Fv=new Float32Array(4);function eo(a,e,n){const r=a[0];if(r<=0||r>0)return a;const o=e*n;let u=Nv[o];if(u===void 0&&(u=new Float32Array(o),Nv[o]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,a[f].toArray(u,d)}return u}function mn(a,e){if(a.length!==e.length)return!1;for(let n=0,r=a.length;n<r;n++)if(a[n]!==e[n])return!1;return!0}function gn(a,e){for(let n=0,r=e.length;n<r;n++)a[n]=e[n]}function Lc(a,e){let n=Pv[e];n===void 0&&(n=new Int32Array(e),Pv[e]=n);for(let r=0;r!==e;++r)n[r]=a.allocateTextureUnit();return n}function qw(a,e){const n=this.cache;n[0]!==e&&(a.uniform1f(this.addr,e),n[0]=e)}function Yw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2fv(this.addr,e),gn(n,e)}}function jw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(mn(n,e))return;a.uniform3fv(this.addr,e),gn(n,e)}}function Zw(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4fv(this.addr,e),gn(n,e)}}function Kw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix2fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Fv.set(r),a.uniformMatrix2fv(this.addr,!1,Fv),gn(n,r)}}function Qw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix3fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Iv.set(r),a.uniformMatrix3fv(this.addr,!1,Iv),gn(n,r)}}function Jw(a,e){const n=this.cache,r=e.elements;if(r===void 0){if(mn(n,e))return;a.uniformMatrix4fv(this.addr,!1,e),gn(n,e)}else{if(mn(n,r))return;Ov.set(r),a.uniformMatrix4fv(this.addr,!1,Ov),gn(n,r)}}function $w(a,e){const n=this.cache;n[0]!==e&&(a.uniform1i(this.addr,e),n[0]=e)}function e3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2iv(this.addr,e),gn(n,e)}}function t3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3iv(this.addr,e),gn(n,e)}}function n3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4iv(this.addr,e),gn(n,e)}}function i3(a,e){const n=this.cache;n[0]!==e&&(a.uniform1ui(this.addr,e),n[0]=e)}function a3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(mn(n,e))return;a.uniform2uiv(this.addr,e),gn(n,e)}}function r3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(mn(n,e))return;a.uniform3uiv(this.addr,e),gn(n,e)}}function s3(a,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(mn(n,e))return;a.uniform4uiv(this.addr,e),gn(n,e)}}function o3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o);let u;this.type===a.SAMPLER_2D_SHADOW?(Rp.compareFunction=n.isReversedDepthBuffer()?Jp:Qp,u=Rp):u=DS,n.setTexture2D(e||u,o)}function l3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||LS,o)}function u3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||NS,o)}function c3(a,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(a.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||US,o)}function f3(a){switch(a){case 5126:return qw;case 35664:return Yw;case 35665:return jw;case 35666:return Zw;case 35674:return Kw;case 35675:return Qw;case 35676:return Jw;case 5124:case 35670:return $w;case 35667:case 35671:return e3;case 35668:case 35672:return t3;case 35669:case 35673:return n3;case 5125:return i3;case 36294:return a3;case 36295:return r3;case 36296:return s3;case 35678:case 36198:case 36298:case 36306:case 35682:return o3;case 35679:case 36299:case 36307:return l3;case 35680:case 36300:case 36308:case 36293:return u3;case 36289:case 36303:case 36311:case 36292:return c3}}function d3(a,e){a.uniform1fv(this.addr,e)}function h3(a,e){const n=eo(e,this.size,2);a.uniform2fv(this.addr,n)}function p3(a,e){const n=eo(e,this.size,3);a.uniform3fv(this.addr,n)}function m3(a,e){const n=eo(e,this.size,4);a.uniform4fv(this.addr,n)}function g3(a,e){const n=eo(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,n)}function _3(a,e){const n=eo(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,n)}function v3(a,e){const n=eo(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,n)}function x3(a,e){a.uniform1iv(this.addr,e)}function S3(a,e){a.uniform2iv(this.addr,e)}function y3(a,e){a.uniform3iv(this.addr,e)}function M3(a,e){a.uniform4iv(this.addr,e)}function E3(a,e){a.uniform1uiv(this.addr,e)}function b3(a,e){a.uniform2uiv(this.addr,e)}function T3(a,e){a.uniform3uiv(this.addr,e)}function A3(a,e){a.uniform4uiv(this.addr,e)}function R3(a,e,n){const r=this.cache,o=e.length,u=Lc(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));let f;this.type===a.SAMPLER_2D_SHADOW?f=Rp:f=DS;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||f,u[d])}function C3(a,e,n){const r=this.cache,o=e.length,u=Lc(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||LS,u[f])}function w3(a,e,n){const r=this.cache,o=e.length,u=Lc(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||NS,u[f])}function D3(a,e,n){const r=this.cache,o=e.length,u=Lc(n,o);mn(r,u)||(a.uniform1iv(this.addr,u),gn(r,u));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||US,u[f])}function U3(a){switch(a){case 5126:return d3;case 35664:return h3;case 35665:return p3;case 35666:return m3;case 35674:return g3;case 35675:return _3;case 35676:return v3;case 5124:case 35670:return x3;case 35667:case 35671:return S3;case 35668:case 35672:return y3;case 35669:case 35673:return M3;case 5125:return E3;case 36294:return b3;case 36295:return T3;case 36296:return A3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return D3}}class L3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=f3(n.type)}}class N3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U3(n.type)}}class P3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,f=o.length;u!==f;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const Th=/(\w+)(\])?(\[|\.)?/g;function Bv(a,e){a.seq.push(e),a.map[e.id]=e}function O3(a,e,n){const r=a.name,o=r.length;for(Th.lastIndex=0;;){const u=Th.exec(r),f=Th.lastIndex;let d=u[1];const m=u[2]==="]",h=u[3];if(m&&(d=d|0),h===void 0||h==="["&&f+2===o){Bv(n,h===void 0?new L3(d,a,e):new N3(d,a,e));break}else{let _=n.map[d];_===void 0&&(_=new P3(d),Bv(n,_)),n=_}}}class pc{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(n,f),m=e.getUniformLocation(n,d.name);O3(d,m,this)}const o=[],u=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(f):u.push(f);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,f=n.length;u!==f;++u){const d=n[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function zv(a,e,n){const r=a.createShader(e);return a.shaderSource(r,n),a.compileShader(r),r}const I3=37297;let F3=0;function B3(a,e){const n=a.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=o;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}const Hv=new ft;function z3(a){At._getMatrix(Hv,At.workingColorSpace,a);const e=`mat3( ${Hv.elements.map(n=>n.toFixed(4))} )`;switch(At.getTransfer(a)){case xc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Vv(a,e,n){const r=a.getShaderParameter(e,a.COMPILE_STATUS),u=(a.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return n.toUpperCase()+`

`+u+`

`+B3(a.getShaderSource(e),d)}else return u}function H3(a,e){const n=z3(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const V3={[tS]:"Linear",[nS]:"Reinhard",[iS]:"Cineon",[aS]:"ACESFilmic",[sS]:"AgX",[oS]:"Neutral",[rS]:"Custom"};function G3(a,e){const n=V3[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ac=new fe;function k3(){At.getLuminanceCoefficients(ac);const a=ac.x.toFixed(4),e=ac.y.toFixed(4),n=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X3(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function W3(a){const e=[];for(const n in a){const r=a[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function q3(a,e){const n={},r=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=a.getActiveAttrib(e,o),f=u.name;let d=1;u.type===a.FLOAT_MAT2&&(d=2),u.type===a.FLOAT_MAT3&&(d=3),u.type===a.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:a.getAttribLocation(e,f),locationSize:d}}return n}function ol(a){return a!==""}function Gv(a,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kv(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cp(a){return a.replace(Y3,Z3)}const j3=new Map;function Z3(a,e){let n=dt[e];if(n===void 0){const r=j3.get(e);if(r!==void 0)n=dt[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cp(n)}const K3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xv(a){return a.replace(K3,Q3)}function Q3(a,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Wv(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const J3={[uc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function $3(a){return J3[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const e2={[Wr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function t2(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":e2[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const n2={[Ys]:"ENVMAP_MODE_REFRACTION"};function i2(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":n2[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const a2={[eS]:"ENVMAP_BLENDING_MULTIPLY",[j1]:"ENVMAP_BLENDING_MIX",[Z1]:"ENVMAP_BLENDING_ADD"};function r2(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":a2[a.combine]||"ENVMAP_BLENDING_NONE"}function s2(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function o2(a,e,n,r){const o=a.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const m=$3(n),h=t2(n),g=i2(n),_=r2(n),v=s2(n),S=X3(n),E=W3(u),b=o.createProgram();let y,x,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(ol).join(`
`),x.length>0&&(x+=`
`)):(y=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),x=[Wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Xi?"#define TONE_MAPPING":"",n.toneMapping!==Xi?dt.tonemapping_pars_fragment:"",n.toneMapping!==Xi?G3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,H3("linearToOutputTexel",n.outputColorSpace),k3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ol).join(`
`)),f=Cp(f),f=Gv(f,n),f=kv(f,n),d=Cp(d),d=Gv(d,n),d=kv(d,n),f=Xv(f),d=Xv(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===ov?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ov?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const R=U+y+f,P=U+x+d,N=zv(o,o.VERTEX_SHADER,R),z=zv(o,o.FRAGMENT_SHADER,P);o.attachShader(b,N),o.attachShader(b,z),n.index0AttributeName!==void 0?o.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function F(H){if(a.debug.checkShaderErrors){const Z=o.getProgramInfoLog(b)||"",j=o.getShaderInfoLog(N)||"",re=o.getShaderInfoLog(z)||"",$=Z.trim(),B=j.trim(),V=re.trim();let ee=!0,xe=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(ee=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(o,b,N,z);else{const O=Vv(o,N,"vertex"),K=Vv(o,z,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+$+`
`+O+`
`+K)}else $!==""?st("WebGLProgram: Program Info Log:",$):(B===""||V==="")&&(xe=!1);xe&&(H.diagnostics={runnable:ee,programLog:$,vertexShader:{log:B,prefix:y},fragmentShader:{log:V,prefix:x}})}o.deleteShader(N),o.deleteShader(z),W=new pc(o,b),A=q3(o,b)}let W;this.getUniforms=function(){return W===void 0&&F(this),W};let A;this.getAttributes=function(){return A===void 0&&F(this),A};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(b,I3)),L},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F3++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=N,this.fragmentShader=z,this}let l2=0;class u2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new c2(e),n.set(e,r)),r}}class c2{constructor(e){this.id=l2++,this.code=e,this.usedTimes=0}}function f2(a,e,n,r,o,u,f){const d=new vS,m=new u2,h=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return h.add(A),A===0?"uv":`uv${A}`}function y(A,L,H,Z,j){const re=Z.fog,$=j.geometry,B=A.isMeshStandardMaterial?Z.environment:null,V=(A.isMeshStandardMaterial?n:e).get(A.envMap||B),ee=V&&V.mapping===wc?V.image.height:null,xe=E[A.type];A.precision!==null&&(S=o.getMaxPrecision(A.precision),S!==A.precision&&st("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const O=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,K=O!==void 0?O.length:0;let ue=0;$.morphAttributes.position!==void 0&&(ue=1),$.morphAttributes.normal!==void 0&&(ue=2),$.morphAttributes.color!==void 0&&(ue=3);let ge,Le,We,te;if(xe){const Ct=Hi[xe];ge=Ct.vertexShader,Le=Ct.fragmentShader}else ge=A.vertexShader,Le=A.fragmentShader,m.update(A),We=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const _e=a.getRenderTarget(),Te=a.state.buffers.depth.getReversed(),$e=j.isInstancedMesh===!0,Ve=j.isBatchedMesh===!0,ht=!!A.map,jt=!!A.matcap,pt=!!V,St=!!A.aoMap,yt=!!A.lightMap,rt=!!A.bumpMap,Tt=!!A.normalMap,k=!!A.displacementMap,qt=!!A.emissiveMap,Mt=!!A.metalnessMap,Ee=!!A.roughnessMap,Ce=A.anisotropy>0,I=A.clearcoat>0,T=A.dispersion>0,q=A.iridescence>0,he=A.sheen>0,pe=A.transmission>0,de=Ce&&!!A.anisotropyMap,Oe=I&&!!A.clearcoatMap,Ae=I&&!!A.clearcoatNormalMap,ke=I&&!!A.clearcoatRoughnessMap,Qe=q&&!!A.iridescenceMap,Me=q&&!!A.iridescenceThicknessMap,we=he&&!!A.sheenColorMap,He=he&&!!A.sheenRoughnessMap,Ye=!!A.specularMap,De=!!A.specularColorMap,lt=!!A.specularIntensityMap,Y=pe&&!!A.transmissionMap,Ie=pe&&!!A.thicknessMap,Re=!!A.gradientMap,Be=!!A.alphaMap,be=A.alphaTest>0,ye=!!A.alphaHash,Ue=!!A.extensions;let it=Xi;A.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(it=a.toneMapping);const Pt={shaderID:xe,shaderType:A.type,shaderName:A.name,vertexShader:ge,fragmentShader:Le,defines:A.defines,customVertexShaderID:We,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&j._colorsTexture!==null,instancing:$e,instancingColor:$e&&j.instanceColor!==null,instancingMorph:$e&&j.morphTexture!==null,outputColorSpace:_e===null?a.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Zs,alphaToCoverage:!!A.alphaToCoverage,map:ht,matcap:jt,envMap:pt,envMapMode:pt&&V.mapping,envMapCubeUVHeight:ee,aoMap:St,lightMap:yt,bumpMap:rt,normalMap:Tt,displacementMap:k,emissiveMap:qt,normalMapObjectSpace:Tt&&A.normalMapType===$1,normalMapTangentSpace:Tt&&A.normalMapType===J1,metalnessMap:Mt,roughnessMap:Ee,anisotropy:Ce,anisotropyMap:de,clearcoat:I,clearcoatMap:Oe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:ke,dispersion:T,iridescence:q,iridescenceMap:Qe,iridescenceThicknessMap:Me,sheen:he,sheenColorMap:we,sheenRoughnessMap:He,specularMap:Ye,specularColorMap:De,specularIntensityMap:lt,transmission:pe,transmissionMap:Y,thicknessMap:Ie,gradientMap:Re,opaque:A.transparent===!1&&A.blending===Gs&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:ye,combine:A.combine,mapUv:ht&&b(A.map.channel),aoMapUv:St&&b(A.aoMap.channel),lightMapUv:yt&&b(A.lightMap.channel),bumpMapUv:rt&&b(A.bumpMap.channel),normalMapUv:Tt&&b(A.normalMap.channel),displacementMapUv:k&&b(A.displacementMap.channel),emissiveMapUv:qt&&b(A.emissiveMap.channel),metalnessMapUv:Mt&&b(A.metalnessMap.channel),roughnessMapUv:Ee&&b(A.roughnessMap.channel),anisotropyMapUv:de&&b(A.anisotropyMap.channel),clearcoatMapUv:Oe&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:we&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:He&&b(A.sheenRoughnessMap.channel),specularMapUv:Ye&&b(A.specularMap.channel),specularColorMapUv:De&&b(A.specularColorMap.channel),specularIntensityMapUv:lt&&b(A.specularIntensityMap.channel),transmissionMapUv:Y&&b(A.transmissionMap.channel),thicknessMapUv:Ie&&b(A.thicknessMap.channel),alphaMapUv:Be&&b(A.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Tt||Ce),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!$.attributes.uv&&(ht||Be),fog:!!re,useFog:A.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ue,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:a.shadowMap.enabled&&H.length>0,shadowMapType:a.shadowMap.type,toneMapping:it,decodeVideoTexture:ht&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===zt,decodeVideoTextureEmissive:qt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===va,flipSided:A.side===jn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&A.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Pt.vertexUv1s=h.has(1),Pt.vertexUv2s=h.has(2),Pt.vertexUv3s=h.has(3),h.clear(),Pt}function x(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)L.push(H),L.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(U(L,A),R(L,A),L.push(a.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function U(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function R(A,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),A.push(d.mask)}function P(A){const L=E[A.type];let H;if(L){const Z=Hi[L];H=CA.clone(Z.uniforms)}else H=A.uniforms;return H}function N(A,L){let H=_.get(L);return H!==void 0?++H.usedTimes:(H=new o2(a,L,A,u),g.push(H),_.set(L,H)),H}function z(A){if(--A.usedTimes===0){const L=g.indexOf(A);g[L]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function F(A){m.remove(A)}function W(){m.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:N,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:W}}function d2(){let a=new WeakMap;function e(f){return a.has(f)}function n(f){let d=a.get(f);return d===void 0&&(d={},a.set(f,d)),d}function r(f){a.delete(f)}function o(f,d,m){a.get(f)[d]=m}function u(){a=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function h2(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function qv(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Yv(){const a=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function f(_,v,S,E,b,y){let x=a[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:E,renderOrder:_.renderOrder,z:b,group:y},a[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=E,x.renderOrder=_.renderOrder,x.z=b,x.group=y),e++,x}function d(_,v,S,E,b,y){const x=f(_,v,S,E,b,y);S.transmission>0?r.push(x):S.transparent===!0?o.push(x):n.push(x)}function m(_,v,S,E,b,y){const x=f(_,v,S,E,b,y);S.transmission>0?r.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function h(_,v){n.length>1&&n.sort(_||h2),r.length>1&&r.sort(v||qv),o.length>1&&o.sort(v||qv)}function g(){for(let _=e,v=a.length;_<v;_++){const S=a[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:d,unshift:m,finish:g,sort:h}}function p2(){let a=new WeakMap;function e(r,o){const u=a.get(r);let f;return u===void 0?(f=new Yv,a.set(r,[f])):o>=u.length?(f=new Yv,u.push(f)):f=u[o],f}function n(){a=new WeakMap}return{get:e,dispose:n}}function m2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new fe,color:new kt};break;case"SpotLight":n={position:new fe,direction:new fe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new fe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new fe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return a[e.id]=n,n}}}function g2(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=n,n}}}let _2=0;function v2(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function x2(a){const e=new m2,n=g2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new fe);const o=new fe,u=new dn,f=new dn;function d(h){let g=0,_=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let S=0,E=0,b=0,y=0,x=0,U=0,R=0,P=0,N=0,z=0,F=0;h.sort(v2);for(let A=0,L=h.length;A<L;A++){const H=h[A],Z=H.color,j=H.intensity,re=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===js?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=Z.r*j,_+=Z.g*j,v+=Z.b*j;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],j);F++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,ee=n.get(H);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.directionalShadow[S]=ee,r.directionalShadowMap[S]=$,r.directionalShadowMatrix[S]=H.shadow.matrix,U++}r.directional[S]=B,S++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(Z).multiplyScalar(j),B.distance=re,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[b]=B;const V=H.shadow;if(H.map&&(r.spotLightMap[N]=H.map,N++,V.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[b]=V.matrix,H.castShadow){const ee=n.get(H);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,r.spotShadow[b]=ee,r.spotShadowMap[b]=$,P++}b++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(Z).multiplyScalar(j),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=B,y++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const V=H.shadow,ee=n.get(H);ee.shadowIntensity=V.intensity,ee.shadowBias=V.bias,ee.shadowNormalBias=V.normalBias,ee.shadowRadius=V.radius,ee.shadowMapSize=V.mapSize,ee.shadowCameraNear=V.camera.near,ee.shadowCameraFar=V.camera.far,r.pointShadow[E]=ee,r.pointShadowMap[E]=$,r.pointShadowMatrix[E]=H.shadow.matrix,R++}r.point[E]=B,E++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(j),B.groundColor.copy(H.groundColor).multiplyScalar(j),r.hemi[x]=B,x++}}y>0&&(a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const W=r.hash;(W.directionalLength!==S||W.pointLength!==E||W.spotLength!==b||W.rectAreaLength!==y||W.hemiLength!==x||W.numDirectionalShadows!==U||W.numPointShadows!==R||W.numSpotShadows!==P||W.numSpotMaps!==N||W.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=y,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=U,r.directionalShadowMap.length=U,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=U,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=P+N-z,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,W.directionalLength=S,W.pointLength=E,W.spotLength=b,W.rectAreaLength=y,W.hemiLength=x,W.numDirectionalShadows=U,W.numPointShadows=R,W.numSpotShadows=P,W.numSpotMaps=N,W.numLightProbes=F,r.version=_2++)}function m(h,g){let _=0,v=0,S=0,E=0,b=0;const y=g.matrixWorldInverse;for(let x=0,U=h.length;x<U;x++){const R=h[x];if(R.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(R.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(R.matrixWorld),o.setFromMatrixPosition(R.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),S++}else if(R.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),f.identity(),u.copy(R.matrixWorld),u.premultiply(y),f.extractRotation(u),P.halfWidth.set(R.width*.5,0,0),P.halfHeight.set(0,R.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),E++}else if(R.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(R.matrixWorld),P.position.applyMatrix4(y),v++}else if(R.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(R.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:d,setupView:m,state:r}}function jv(a){const e=new x2(a),n=[],r=[];function o(g){h.camera=g,n.length=0,r.length=0}function u(g){n.push(g)}function f(g){r.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const h={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function S2(a){let e=new WeakMap;function n(o,u=0){const f=e.get(o);let d;return f===void 0?(d=new jv(a),e.set(o,[d])):u>=f.length?(d=new jv(a),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M2=`uniform sampler2D shadow_pass;
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
}`,E2=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],b2=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],Zv=new dn,rl=new fe,Ah=new fe;function T2(a,e,n){let r=new RS;const o=new Rt,u=new Rt,f=new on,d=new HA,m=new VA,h={},g=n.maxTextureSize,_={[fr]:jn,[jn]:fr,[va]:va},v=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:y2,fragmentShader:M2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Da;E.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ji(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let x=this.type;this.render=function(z,F,W){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;z.type===w1&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=uc);const A=a.getRenderTarget(),L=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),Z=a.state;Z.setBlending(ya),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const j=x!==this.type;j&&F.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach($=>$.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,$=z.length;re<$;re++){const B=z[re],V=B.shadow;if(V===void 0){st("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ee=V.getFrameExtents();if(o.multiply(ee),u.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(u.x=Math.floor(g/ee.x),o.x=u.x*ee.x,V.mapSize.x=u.x),o.y>g&&(u.y=Math.floor(g/ee.y),o.y=u.y*ee.y,V.mapSize.y=u.y)),V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sl){if(B.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Wi(o.x,o.y,{format:js,type:Ta,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new pl(o.x,o.y,Vi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Aa,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn}else{B.isPointLight?(V.map=new AS(o.x),V.map.depthTexture=new BA(o.x,Yi)):(V.map=new Wi(o.x,o.y),V.map.depthTexture=new pl(o.x,o.y,Yi)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Aa;const O=a.state.buffers.depth.getReversed();this.type===uc?(V.map.depthTexture.compareFunction=O?Jp:Qp,V.map.depthTexture.minFilter=Fn,V.map.depthTexture.magFilter=Fn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Dn,V.map.depthTexture.magFilter=Dn)}V.camera.updateProjectionMatrix()}const xe=V.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<xe;O++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,O),a.clear();else{O===0&&(a.setRenderTarget(V.map),a.clear());const K=V.getViewport(O);f.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),Z.viewport(f)}if(B.isPointLight){const K=V.camera,ue=V.matrix,ge=B.distance||K.far;ge!==K.far&&(K.far=ge,K.updateProjectionMatrix()),rl.setFromMatrixPosition(B.matrixWorld),K.position.copy(rl),Ah.copy(K.position),Ah.add(E2[O]),K.up.copy(b2[O]),K.lookAt(Ah),K.updateMatrixWorld(),ue.makeTranslation(-rl.x,-rl.y,-rl.z),Zv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Zv,K.coordinateSystem,K.reversedDepth)}else V.updateMatrices(B);r=V.getFrustum(),P(F,W,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===sl&&U(V,W),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,a.setRenderTarget(A,L,H)};function U(z,F){const W=e.update(b);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Wi(o.x,o.y,{format:js,type:Ta})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(F,null,W,v,b,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(F,null,W,S,b,null)}function R(z,F,W,A){let L=null;const H=W.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)L=H;else if(L=W.isPointLight===!0?m:d,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=L.uuid,j=F.uuid;let re=h[Z];re===void 0&&(re={},h[Z]=re);let $=re[j];$===void 0&&($=L.clone(),re[j]=$,F.addEventListener("dispose",N)),L=$}if(L.visible=F.visible,L.wireframe=F.wireframe,A===sl?L.side=F.shadowSide!==null?F.shadowSide:F.side:L.side=F.shadowSide!==null?F.shadowSide:_[F.side],L.alphaMap=F.alphaMap,L.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,L.map=F.map,L.clipShadows=F.clipShadows,L.clippingPlanes=F.clippingPlanes,L.clipIntersection=F.clipIntersection,L.displacementMap=F.displacementMap,L.displacementScale=F.displacementScale,L.displacementBias=F.displacementBias,L.wireframeLinewidth=F.wireframeLinewidth,L.linewidth=F.linewidth,W.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Z=a.properties.get(L);Z.light=W}return L}function P(z,F,W,A,L){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===sl)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld);const j=e.update(z),re=z.material;if(Array.isArray(re)){const $=j.groups;for(let B=0,V=$.length;B<V;B++){const ee=$[B],xe=re[ee.materialIndex];if(xe&&xe.visible){const O=R(z,xe,A,L);z.onBeforeShadow(a,z,F,W,j,O,ee),a.renderBufferDirect(W,null,j,O,z,ee),z.onAfterShadow(a,z,F,W,j,O,ee)}}}else if(re.visible){const $=R(z,re,A,L);z.onBeforeShadow(a,z,F,W,j,$,null),a.renderBufferDirect(W,null,j,$,z,null),z.onAfterShadow(a,z,F,W,j,$,null)}}const Z=z.children;for(let j=0,re=Z.length;j<re;j++)P(Z[j],F,W,A,L)}function N(z){z.target.removeEventListener("dispose",N);for(const W in h){const A=h[W],L=z.target.uuid;L in A&&(A[L].dispose(),delete A[L])}}}const A2={[Fh]:Bh,[zh]:Gh,[Hh]:kh,[qs]:Vh,[Bh]:Fh,[Gh]:zh,[kh]:Hh,[Vh]:qs};function R2(a,e){function n(){let Y=!1;const Ie=new on;let Re=null;const Be=new on(0,0,0,0);return{setMask:function(be){Re!==be&&!Y&&(a.colorMask(be,be,be,be),Re=be)},setLocked:function(be){Y=be},setClear:function(be,ye,Ue,it,Pt){Pt===!0&&(be*=it,ye*=it,Ue*=it),Ie.set(be,ye,Ue,it),Be.equals(Ie)===!1&&(a.clearColor(be,ye,Ue,it),Be.copy(Ie))},reset:function(){Y=!1,Re=null,Be.set(-1,0,0,0)}}}function r(){let Y=!1,Ie=!1,Re=null,Be=null,be=null;return{setReversed:function(ye){if(Ie!==ye){const Ue=e.get("EXT_clip_control");ye?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT),Ie=ye;const it=be;be=null,this.setClear(it)}},getReversed:function(){return Ie},setTest:function(ye){ye?_e(a.DEPTH_TEST):Te(a.DEPTH_TEST)},setMask:function(ye){Re!==ye&&!Y&&(a.depthMask(ye),Re=ye)},setFunc:function(ye){if(Ie&&(ye=A2[ye]),Be!==ye){switch(ye){case Fh:a.depthFunc(a.NEVER);break;case Bh:a.depthFunc(a.ALWAYS);break;case zh:a.depthFunc(a.LESS);break;case qs:a.depthFunc(a.LEQUAL);break;case Hh:a.depthFunc(a.EQUAL);break;case Vh:a.depthFunc(a.GEQUAL);break;case Gh:a.depthFunc(a.GREATER);break;case kh:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Be=ye}},setLocked:function(ye){Y=ye},setClear:function(ye){be!==ye&&(Ie&&(ye=1-ye),a.clearDepth(ye),be=ye)},reset:function(){Y=!1,Re=null,Be=null,be=null,Ie=!1}}}function o(){let Y=!1,Ie=null,Re=null,Be=null,be=null,ye=null,Ue=null,it=null,Pt=null;return{setTest:function(Ct){Y||(Ct?_e(a.STENCIL_TEST):Te(a.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!Y&&(a.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,si,_n){(Re!==Ct||Be!==si||be!==_n)&&(a.stencilFunc(Ct,si,_n),Re=Ct,Be=si,be=_n)},setOp:function(Ct,si,_n){(ye!==Ct||Ue!==si||it!==_n)&&(a.stencilOp(Ct,si,_n),ye=Ct,Ue=si,it=_n)},setLocked:function(Ct){Y=Ct},setClear:function(Ct){Pt!==Ct&&(a.clearStencil(Ct),Pt=Ct)},reset:function(){Y=!1,Ie=null,Re=null,Be=null,be=null,ye=null,Ue=null,it=null,Pt=null}}}const u=new n,f=new r,d=new o,m=new WeakMap,h=new WeakMap;let g={},_={},v=new WeakMap,S=[],E=null,b=!1,y=null,x=null,U=null,R=null,P=null,N=null,z=null,F=new kt(0,0,0),W=0,A=!1,L=null,H=null,Z=null,j=null,re=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const ee=a.getParameter(a.VERSION);ee.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(ee)[1]),B=V>=1):ee.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),B=V>=2);let xe=null,O={};const K=a.getParameter(a.SCISSOR_BOX),ue=a.getParameter(a.VIEWPORT),ge=new on().fromArray(K),Le=new on().fromArray(ue);function We(Y,Ie,Re,Be){const be=new Uint8Array(4),ye=a.createTexture();a.bindTexture(Y,ye),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ue=0;Ue<Re;Ue++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ie,0,a.RGBA,1,1,Be,0,a.RGBA,a.UNSIGNED_BYTE,be):a.texImage2D(Ie+Ue,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,be);return ye}const te={};te[a.TEXTURE_2D]=We(a.TEXTURE_2D,a.TEXTURE_2D,1),te[a.TEXTURE_CUBE_MAP]=We(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[a.TEXTURE_2D_ARRAY]=We(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),te[a.TEXTURE_3D]=We(a.TEXTURE_3D,a.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),_e(a.DEPTH_TEST),f.setFunc(qs),rt(!1),Tt(tv),_e(a.CULL_FACE),St(ya);function _e(Y){g[Y]!==!0&&(a.enable(Y),g[Y]=!0)}function Te(Y){g[Y]!==!1&&(a.disable(Y),g[Y]=!1)}function $e(Y,Ie){return _[Y]!==Ie?(a.bindFramebuffer(Y,Ie),_[Y]=Ie,Y===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ie),Y===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ve(Y,Ie){let Re=S,Be=!1;if(Y){Re=v.get(Ie),Re===void 0&&(Re=[],v.set(Ie,Re));const be=Y.textures;if(Re.length!==be.length||Re[0]!==a.COLOR_ATTACHMENT0){for(let ye=0,Ue=be.length;ye<Ue;ye++)Re[ye]=a.COLOR_ATTACHMENT0+ye;Re.length=be.length,Be=!0}}else Re[0]!==a.BACK&&(Re[0]=a.BACK,Be=!0);Be&&a.drawBuffers(Re)}function ht(Y){return E!==Y?(a.useProgram(Y),E=Y,!0):!1}const jt={[Vr]:a.FUNC_ADD,[U1]:a.FUNC_SUBTRACT,[L1]:a.FUNC_REVERSE_SUBTRACT};jt[N1]=a.MIN,jt[P1]=a.MAX;const pt={[O1]:a.ZERO,[I1]:a.ONE,[F1]:a.SRC_COLOR,[Oh]:a.SRC_ALPHA,[k1]:a.SRC_ALPHA_SATURATE,[V1]:a.DST_COLOR,[z1]:a.DST_ALPHA,[B1]:a.ONE_MINUS_SRC_COLOR,[Ih]:a.ONE_MINUS_SRC_ALPHA,[G1]:a.ONE_MINUS_DST_COLOR,[H1]:a.ONE_MINUS_DST_ALPHA,[X1]:a.CONSTANT_COLOR,[W1]:a.ONE_MINUS_CONSTANT_COLOR,[q1]:a.CONSTANT_ALPHA,[Y1]:a.ONE_MINUS_CONSTANT_ALPHA};function St(Y,Ie,Re,Be,be,ye,Ue,it,Pt,Ct){if(Y===ya){b===!0&&(Te(a.BLEND),b=!1);return}if(b===!1&&(_e(a.BLEND),b=!0),Y!==D1){if(Y!==y||Ct!==A){if((x!==Vr||P!==Vr)&&(a.blendEquation(a.FUNC_ADD),x=Vr,P=Vr),Ct)switch(Y){case Gs:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nv:a.blendFunc(a.ONE,a.ONE);break;case iv:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case av:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Gs:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case nv:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case iv:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case av:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}U=null,R=null,N=null,z=null,F.set(0,0,0),W=0,y=Y,A=Ct}return}be=be||Ie,ye=ye||Re,Ue=Ue||Be,(Ie!==x||be!==P)&&(a.blendEquationSeparate(jt[Ie],jt[be]),x=Ie,P=be),(Re!==U||Be!==R||ye!==N||Ue!==z)&&(a.blendFuncSeparate(pt[Re],pt[Be],pt[ye],pt[Ue]),U=Re,R=Be,N=ye,z=Ue),(it.equals(F)===!1||Pt!==W)&&(a.blendColor(it.r,it.g,it.b,Pt),F.copy(it),W=Pt),y=Y,A=!1}function yt(Y,Ie){Y.side===va?Te(a.CULL_FACE):_e(a.CULL_FACE);let Re=Y.side===jn;Ie&&(Re=!Re),rt(Re),Y.blending===Gs&&Y.transparent===!1?St(ya):St(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),u.setMask(Y.colorWrite);const Be=Y.stencilWrite;d.setTest(Be),Be&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),qt(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?_e(a.SAMPLE_ALPHA_TO_COVERAGE):Te(a.SAMPLE_ALPHA_TO_COVERAGE)}function rt(Y){L!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),L=Y)}function Tt(Y){Y!==R1?(_e(a.CULL_FACE),Y!==H&&(Y===tv?a.cullFace(a.BACK):Y===C1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Te(a.CULL_FACE),H=Y}function k(Y){Y!==Z&&(B&&a.lineWidth(Y),Z=Y)}function qt(Y,Ie,Re){Y?(_e(a.POLYGON_OFFSET_FILL),(j!==Ie||re!==Re)&&(a.polygonOffset(Ie,Re),j=Ie,re=Re)):Te(a.POLYGON_OFFSET_FILL)}function Mt(Y){Y?_e(a.SCISSOR_TEST):Te(a.SCISSOR_TEST)}function Ee(Y){Y===void 0&&(Y=a.TEXTURE0+$-1),xe!==Y&&(a.activeTexture(Y),xe=Y)}function Ce(Y,Ie,Re){Re===void 0&&(xe===null?Re=a.TEXTURE0+$-1:Re=xe);let Be=O[Re];Be===void 0&&(Be={type:void 0,texture:void 0},O[Re]=Be),(Be.type!==Y||Be.texture!==Ie)&&(xe!==Re&&(a.activeTexture(Re),xe=Re),a.bindTexture(Y,Ie||te[Y]),Be.type=Y,Be.texture=Ie)}function I(){const Y=O[xe];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function T(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function q(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function he(){try{a.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function pe(){try{a.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Oe(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Ae(){try{a.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ke(){try{a.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Qe(){try{a.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Me(){try{a.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function we(Y){ge.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),ge.copy(Y))}function He(Y){Le.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),Le.copy(Y))}function Ye(Y,Ie){let Re=h.get(Ie);Re===void 0&&(Re=new WeakMap,h.set(Ie,Re));let Be=Re.get(Y);Be===void 0&&(Be=a.getUniformBlockIndex(Ie,Y.name),Re.set(Y,Be))}function De(Y,Ie){const Be=h.get(Ie).get(Y);m.get(Ie)!==Be&&(a.uniformBlockBinding(Ie,Be,Y.__bindingPointIndex),m.set(Ie,Be))}function lt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),f.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),g={},xe=null,O={},_={},v=new WeakMap,S=[],E=null,b=!1,y=null,x=null,U=null,R=null,P=null,N=null,z=null,F=new kt(0,0,0),W=0,A=!1,L=null,H=null,Z=null,j=null,re=null,ge.set(0,0,a.canvas.width,a.canvas.height),Le.set(0,0,a.canvas.width,a.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:_e,disable:Te,bindFramebuffer:$e,drawBuffers:Ve,useProgram:ht,setBlending:St,setMaterial:yt,setFlipSided:rt,setCullFace:Tt,setLineWidth:k,setPolygonOffset:qt,setScissorTest:Mt,activeTexture:Ee,bindTexture:Ce,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:q,texImage2D:Qe,texImage3D:Me,updateUBOMapping:Ye,uniformBlockBinding:De,texStorage2D:Ae,texStorage3D:ke,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Oe,scissor:we,viewport:He,reset:lt}}function C2(a,e,n,r,o,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return S?new OffscreenCanvas(I,T):yc("canvas")}function b(I,T,q){let he=1;const pe=Ce(I);if((pe.width>q||pe.height>q)&&(he=q/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const de=Math.floor(he*pe.width),Oe=Math.floor(he*pe.height);_===void 0&&(_=E(de,Oe));const Ae=T?E(de,Oe):_;return Ae.width=de,Ae.height=Oe,Ae.getContext("2d").drawImage(I,0,0,de,Oe),st("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+de+"x"+Oe+")."),Ae}else return"data"in I&&st("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){a.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?a.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(I,T,q,he,pe=!1){if(I!==null){if(a[I]!==void 0)return a[I];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let de=T;if(T===a.RED&&(q===a.FLOAT&&(de=a.R32F),q===a.HALF_FLOAT&&(de=a.R16F),q===a.UNSIGNED_BYTE&&(de=a.R8)),T===a.RED_INTEGER&&(q===a.UNSIGNED_BYTE&&(de=a.R8UI),q===a.UNSIGNED_SHORT&&(de=a.R16UI),q===a.UNSIGNED_INT&&(de=a.R32UI),q===a.BYTE&&(de=a.R8I),q===a.SHORT&&(de=a.R16I),q===a.INT&&(de=a.R32I)),T===a.RG&&(q===a.FLOAT&&(de=a.RG32F),q===a.HALF_FLOAT&&(de=a.RG16F),q===a.UNSIGNED_BYTE&&(de=a.RG8)),T===a.RG_INTEGER&&(q===a.UNSIGNED_BYTE&&(de=a.RG8UI),q===a.UNSIGNED_SHORT&&(de=a.RG16UI),q===a.UNSIGNED_INT&&(de=a.RG32UI),q===a.BYTE&&(de=a.RG8I),q===a.SHORT&&(de=a.RG16I),q===a.INT&&(de=a.RG32I)),T===a.RGB_INTEGER&&(q===a.UNSIGNED_BYTE&&(de=a.RGB8UI),q===a.UNSIGNED_SHORT&&(de=a.RGB16UI),q===a.UNSIGNED_INT&&(de=a.RGB32UI),q===a.BYTE&&(de=a.RGB8I),q===a.SHORT&&(de=a.RGB16I),q===a.INT&&(de=a.RGB32I)),T===a.RGBA_INTEGER&&(q===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),q===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),q===a.UNSIGNED_INT&&(de=a.RGBA32UI),q===a.BYTE&&(de=a.RGBA8I),q===a.SHORT&&(de=a.RGBA16I),q===a.INT&&(de=a.RGBA32I)),T===a.RGB&&(q===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),q===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),T===a.RGBA){const Oe=pe?xc:At.getTransfer(he);q===a.FLOAT&&(de=a.RGBA32F),q===a.HALF_FLOAT&&(de=a.RGBA16F),q===a.UNSIGNED_BYTE&&(de=Oe===zt?a.SRGB8_ALPHA8:a.RGBA8),q===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),q===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(I,T){let q;return I?T===null||T===Yi||T===dl?q=a.DEPTH24_STENCIL8:T===Vi?q=a.DEPTH32F_STENCIL8:T===fl&&(q=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yi||T===dl?q=a.DEPTH_COMPONENT24:T===Vi?q=a.DEPTH_COMPONENT32F:T===fl&&(q=a.DEPTH_COMPONENT16),q}function N(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Dn&&I.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function z(I){const T=I.target;T.removeEventListener("dispose",z),W(T),T.isVideoTexture&&g.delete(T)}function F(I){const T=I.target;T.removeEventListener("dispose",F),L(T)}function W(I){const T=r.get(I);if(T.__webglInit===void 0)return;const q=I.source,he=v.get(q);if(he){const pe=he[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&A(I),Object.keys(he).length===0&&v.delete(q)}r.remove(I)}function A(I){const T=r.get(I);a.deleteTexture(T.__webglTexture);const q=I.source,he=v.get(q);delete he[T.__cacheKey],f.memory.textures--}function L(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let pe=0;pe<T.__webglFramebuffer[he].length;pe++)a.deleteFramebuffer(T.__webglFramebuffer[he][pe]);else a.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)a.deleteFramebuffer(T.__webglFramebuffer[he]);else a.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&a.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&a.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&a.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&a.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const q=I.textures;for(let he=0,pe=q.length;he<pe;he++){const de=r.get(q[he]);de.__webglTexture&&(a.deleteTexture(de.__webglTexture),f.memory.textures--),r.remove(q[he])}r.remove(I)}let H=0;function Z(){H=0}function j(){const I=H;return I>=o.maxTextures&&st("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),H+=1,I}function re(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function $(I,T){const q=r.get(I);if(I.isVideoTexture&&Mt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const he=I.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{te(q,I,T);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D,q.__webglTexture,a.TEXTURE0+T)}function B(I,T){const q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,T);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(a.TEXTURE_2D_ARRAY,q.__webglTexture,a.TEXTURE0+T)}function V(I,T){const q=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){te(q,I,T);return}n.bindTexture(a.TEXTURE_3D,q.__webglTexture,a.TEXTURE0+T)}function ee(I,T){const q=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){_e(q,I,T);return}n.bindTexture(a.TEXTURE_CUBE_MAP,q.__webglTexture,a.TEXTURE0+T)}const xe={[qh]:a.REPEAT,[xa]:a.CLAMP_TO_EDGE,[Yh]:a.MIRRORED_REPEAT},O={[Dn]:a.NEAREST,[K1]:a.NEAREST_MIPMAP_NEAREST,[Bu]:a.NEAREST_MIPMAP_LINEAR,[Fn]:a.LINEAR,[Kd]:a.LINEAR_MIPMAP_NEAREST,[kr]:a.LINEAR_MIPMAP_LINEAR},K={[eA]:a.NEVER,[rA]:a.ALWAYS,[tA]:a.LESS,[Qp]:a.LEQUAL,[nA]:a.EQUAL,[Jp]:a.GEQUAL,[iA]:a.GREATER,[aA]:a.NOTEQUAL};function ue(I,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fn||T.magFilter===Kd||T.magFilter===Bu||T.magFilter===kr||T.minFilter===Fn||T.minFilter===Kd||T.minFilter===Bu||T.minFilter===kr)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(I,a.TEXTURE_WRAP_S,xe[T.wrapS]),a.texParameteri(I,a.TEXTURE_WRAP_T,xe[T.wrapT]),(I===a.TEXTURE_3D||I===a.TEXTURE_2D_ARRAY)&&a.texParameteri(I,a.TEXTURE_WRAP_R,xe[T.wrapR]),a.texParameteri(I,a.TEXTURE_MAG_FILTER,O[T.magFilter]),a.texParameteri(I,a.TEXTURE_MIN_FILTER,O[T.minFilter]),T.compareFunction&&(a.texParameteri(I,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(I,a.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Dn||T.minFilter!==Bu&&T.minFilter!==kr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");a.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ge(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",z));const he=T.source;let pe=v.get(he);pe===void 0&&(pe={},v.set(he,pe));const de=re(T);if(de!==I.__cacheKey){pe[de]===void 0&&(pe[de]={texture:a.createTexture(),usedTimes:0},f.memory.textures++,q=!0),pe[de].usedTimes++;const Oe=pe[I.__cacheKey];Oe!==void 0&&(pe[I.__cacheKey].usedTimes--,Oe.usedTimes===0&&A(T)),I.__cacheKey=de,I.__webglTexture=pe[de].texture}return q}function Le(I,T,q){return Math.floor(Math.floor(I/q)/T)}function We(I,T,q,he){const de=I.updateRanges;if(de.length===0)n.texSubImage2D(a.TEXTURE_2D,0,0,0,T.width,T.height,q,he,T.data);else{de.sort((Me,we)=>Me.start-we.start);let Oe=0;for(let Me=1;Me<de.length;Me++){const we=de[Oe],He=de[Me],Ye=we.start+we.count,De=Le(He.start,T.width,4),lt=Le(we.start,T.width,4);He.start<=Ye+1&&De===lt&&Le(He.start+He.count-1,T.width,4)===De?we.count=Math.max(we.count,He.start+He.count-we.start):(++Oe,de[Oe]=He)}de.length=Oe+1;const Ae=a.getParameter(a.UNPACK_ROW_LENGTH),ke=a.getParameter(a.UNPACK_SKIP_PIXELS),Qe=a.getParameter(a.UNPACK_SKIP_ROWS);a.pixelStorei(a.UNPACK_ROW_LENGTH,T.width);for(let Me=0,we=de.length;Me<we;Me++){const He=de[Me],Ye=Math.floor(He.start/4),De=Math.ceil(He.count/4),lt=Ye%T.width,Y=Math.floor(Ye/T.width),Ie=De,Re=1;a.pixelStorei(a.UNPACK_SKIP_PIXELS,lt),a.pixelStorei(a.UNPACK_SKIP_ROWS,Y),n.texSubImage2D(a.TEXTURE_2D,0,lt,Y,Ie,Re,q,he,T.data)}I.clearUpdateRanges(),a.pixelStorei(a.UNPACK_ROW_LENGTH,Ae),a.pixelStorei(a.UNPACK_SKIP_PIXELS,ke),a.pixelStorei(a.UNPACK_SKIP_ROWS,Qe)}}function te(I,T,q){let he=a.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=a.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=a.TEXTURE_3D);const pe=ge(I,T),de=T.source;n.bindTexture(he,I.__webglTexture,a.TEXTURE0+q);const Oe=r.get(de);if(de.version!==Oe.__version||pe===!0){n.activeTexture(a.TEXTURE0+q);const Ae=At.getPrimaries(At.workingColorSpace),ke=T.colorSpace===lr?null:At.getPrimaries(T.colorSpace),Qe=T.colorSpace===lr||Ae===ke?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Me=b(T.image,!1,o.maxTextureSize);Me=Ee(T,Me);const we=u.convert(T.format,T.colorSpace),He=u.convert(T.type);let Ye=R(T.internalFormat,we,He,T.colorSpace,T.isVideoTexture);ue(he,T);let De;const lt=T.mipmaps,Y=T.isVideoTexture!==!0,Ie=Oe.__version===void 0||pe===!0,Re=de.dataReady,Be=N(T,Me);if(T.isDepthTexture)Ye=P(T.format===Xr,T.type),Ie&&(Y?n.texStorage2D(a.TEXTURE_2D,1,Ye,Me.width,Me.height):n.texImage2D(a.TEXTURE_2D,0,Ye,Me.width,Me.height,0,we,He,null));else if(T.isDataTexture)if(lt.length>0){Y&&Ie&&n.texStorage2D(a.TEXTURE_2D,Be,Ye,lt[0].width,lt[0].height);for(let be=0,ye=lt.length;be<ye;be++)De=lt[be],Y?Re&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,De.width,De.height,we,He,De.data):n.texImage2D(a.TEXTURE_2D,be,Ye,De.width,De.height,0,we,He,De.data);T.generateMipmaps=!1}else Y?(Ie&&n.texStorage2D(a.TEXTURE_2D,Be,Ye,Me.width,Me.height),Re&&We(T,Me,we,He)):n.texImage2D(a.TEXTURE_2D,0,Ye,Me.width,Me.height,0,we,He,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Y&&Ie&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,Ye,lt[0].width,lt[0].height,Me.depth);for(let be=0,ye=lt.length;be<ye;be++)if(De=lt[be],T.format!==wi)if(we!==null)if(Y){if(Re)if(T.layerUpdates.size>0){const Ue=Av(De.width,De.height,T.format,T.type);for(const it of T.layerUpdates){const Pt=De.data.subarray(it*Ue/De.data.BYTES_PER_ELEMENT,(it+1)*Ue/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,it,De.width,De.height,1,we,Pt)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,De.width,De.height,Me.depth,we,De.data)}else n.compressedTexImage3D(a.TEXTURE_2D_ARRAY,be,Ye,De.width,De.height,Me.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Y?Re&&n.texSubImage3D(a.TEXTURE_2D_ARRAY,be,0,0,0,De.width,De.height,Me.depth,we,He,De.data):n.texImage3D(a.TEXTURE_2D_ARRAY,be,Ye,De.width,De.height,Me.depth,0,we,He,De.data)}else{Y&&Ie&&n.texStorage2D(a.TEXTURE_2D,Be,Ye,lt[0].width,lt[0].height);for(let be=0,ye=lt.length;be<ye;be++)De=lt[be],T.format!==wi?we!==null?Y?Re&&n.compressedTexSubImage2D(a.TEXTURE_2D,be,0,0,De.width,De.height,we,De.data):n.compressedTexImage2D(a.TEXTURE_2D,be,Ye,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Y?Re&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,De.width,De.height,we,He,De.data):n.texImage2D(a.TEXTURE_2D,be,Ye,De.width,De.height,0,we,He,De.data)}else if(T.isDataArrayTexture)if(Y){if(Ie&&n.texStorage3D(a.TEXTURE_2D_ARRAY,Be,Ye,Me.width,Me.height,Me.depth),Re)if(T.layerUpdates.size>0){const be=Av(Me.width,Me.height,T.format,T.type);for(const ye of T.layerUpdates){const Ue=Me.data.subarray(ye*be/Me.data.BYTES_PER_ELEMENT,(ye+1)*be/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,ye,Me.width,Me.height,1,we,He,Ue)}T.clearLayerUpdates()}else n.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,we,He,Me.data)}else n.texImage3D(a.TEXTURE_2D_ARRAY,0,Ye,Me.width,Me.height,Me.depth,0,we,He,Me.data);else if(T.isData3DTexture)Y?(Ie&&n.texStorage3D(a.TEXTURE_3D,Be,Ye,Me.width,Me.height,Me.depth),Re&&n.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,we,He,Me.data)):n.texImage3D(a.TEXTURE_3D,0,Ye,Me.width,Me.height,Me.depth,0,we,He,Me.data);else if(T.isFramebufferTexture){if(Ie)if(Y)n.texStorage2D(a.TEXTURE_2D,Be,Ye,Me.width,Me.height);else{let be=Me.width,ye=Me.height;for(let Ue=0;Ue<Be;Ue++)n.texImage2D(a.TEXTURE_2D,Ue,Ye,be,ye,0,we,He,null),be>>=1,ye>>=1}}else if(lt.length>0){if(Y&&Ie){const be=Ce(lt[0]);n.texStorage2D(a.TEXTURE_2D,Be,Ye,be.width,be.height)}for(let be=0,ye=lt.length;be<ye;be++)De=lt[be],Y?Re&&n.texSubImage2D(a.TEXTURE_2D,be,0,0,we,He,De):n.texImage2D(a.TEXTURE_2D,be,Ye,we,He,De);T.generateMipmaps=!1}else if(Y){if(Ie){const be=Ce(Me);n.texStorage2D(a.TEXTURE_2D,Be,Ye,be.width,be.height)}Re&&n.texSubImage2D(a.TEXTURE_2D,0,0,0,we,He,Me)}else n.texImage2D(a.TEXTURE_2D,0,Ye,we,He,Me);y(T)&&x(he),Oe.__version=de.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function _e(I,T,q){if(T.image.length!==6)return;const he=ge(I,T),pe=T.source;n.bindTexture(a.TEXTURE_CUBE_MAP,I.__webglTexture,a.TEXTURE0+q);const de=r.get(pe);if(pe.version!==de.__version||he===!0){n.activeTexture(a.TEXTURE0+q);const Oe=At.getPrimaries(At.workingColorSpace),Ae=T.colorSpace===lr?null:At.getPrimaries(T.colorSpace),ke=T.colorSpace===lr||Oe===Ae?a.NONE:a.BROWSER_DEFAULT_WEBGL;a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,T.flipY),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),a.pixelStorei(a.UNPACK_ALIGNMENT,T.unpackAlignment),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,we=[];for(let ye=0;ye<6;ye++)!Qe&&!Me?we[ye]=b(T.image[ye],!0,o.maxCubemapSize):we[ye]=Me?T.image[ye].image:T.image[ye],we[ye]=Ee(T,we[ye]);const He=we[0],Ye=u.convert(T.format,T.colorSpace),De=u.convert(T.type),lt=R(T.internalFormat,Ye,De,T.colorSpace),Y=T.isVideoTexture!==!0,Ie=de.__version===void 0||he===!0,Re=pe.dataReady;let Be=N(T,He);ue(a.TEXTURE_CUBE_MAP,T);let be;if(Qe){Y&&Ie&&n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,lt,He.width,He.height);for(let ye=0;ye<6;ye++){be=we[ye].mipmaps;for(let Ue=0;Ue<be.length;Ue++){const it=be[Ue];T.format!==wi?Ye!==null?Y?Re&&n.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,it.width,it.height,Ye,it.data):n.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,lt,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,0,0,it.width,it.height,Ye,De,it.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue,lt,it.width,it.height,0,Ye,De,it.data)}}}else{if(be=T.mipmaps,Y&&Ie){be.length>0&&Be++;const ye=Ce(we[0]);n.texStorage2D(a.TEXTURE_CUBE_MAP,Be,lt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Me){Y?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,we[ye].width,we[ye].height,Ye,De,we[ye].data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,we[ye].width,we[ye].height,0,Ye,De,we[ye].data);for(let Ue=0;Ue<be.length;Ue++){const Pt=be[Ue].image[ye].image;Y?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Pt.width,Pt.height,Ye,De,Pt.data):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,lt,Pt.width,Pt.height,0,Ye,De,Pt.data)}}else{Y?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ye,De,we[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,lt,Ye,De,we[ye]);for(let Ue=0;Ue<be.length;Ue++){const it=be[Ue];Y?Re&&n.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,0,0,Ye,De,it.image[ye]):n.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ue+1,lt,Ye,De,it.image[ye])}}}y(T)&&x(a.TEXTURE_CUBE_MAP),de.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Te(I,T,q,he,pe,de){const Oe=u.convert(q.format,q.colorSpace),Ae=u.convert(q.type),ke=R(q.internalFormat,Oe,Ae,q.colorSpace),Qe=r.get(T),Me=r.get(q);if(Me.__renderTarget=T,!Qe.__hasExternalTextures){const we=Math.max(1,T.width>>de),He=Math.max(1,T.height>>de);pe===a.TEXTURE_3D||pe===a.TEXTURE_2D_ARRAY?n.texImage3D(pe,de,ke,we,He,T.depth,0,Oe,Ae,null):n.texImage2D(pe,de,ke,we,He,0,Oe,Ae,null)}n.bindFramebuffer(a.FRAMEBUFFER,I),qt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,he,pe,Me.__webglTexture,0,k(T)):(pe===a.TEXTURE_2D||pe>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,he,pe,Me.__webglTexture,de),n.bindFramebuffer(a.FRAMEBUFFER,null)}function $e(I,T,q){if(a.bindRenderbuffer(a.RENDERBUFFER,I),T.depthBuffer){const he=T.depthTexture,pe=he&&he.isDepthTexture?he.type:null,de=P(T.stencilBuffer,pe),Oe=T.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;qt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),de,T.width,T.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),de,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,de,T.width,T.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,I)}else{const he=T.textures;for(let pe=0;pe<he.length;pe++){const de=he[pe],Oe=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),ke=R(de.internalFormat,Oe,Ae,de.colorSpace);qt(T)?d.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,k(T),ke,T.width,T.height):q?a.renderbufferStorageMultisample(a.RENDERBUFFER,k(T),ke,T.width,T.height):a.renderbufferStorage(a.RENDERBUFFER,ke,T.width,T.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ve(I,T,q){const he=T.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(a.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);if(pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,T.depthTexture.addEventListener("dispose",z)),pe.__webglTexture===void 0){pe.__webglTexture=a.createTexture(),n.bindTexture(a.TEXTURE_CUBE_MAP,pe.__webglTexture),ue(a.TEXTURE_CUBE_MAP,T.depthTexture);const Qe=u.convert(T.depthTexture.format),Me=u.convert(T.depthTexture.type);let we;T.depthTexture.format===Aa?we=a.DEPTH_COMPONENT24:T.depthTexture.format===Xr&&(we=a.DEPTH24_STENCIL8);for(let He=0;He<6;He++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,we,T.width,T.height,0,Qe,Me,null)}}else $(T.depthTexture,0);const de=pe.__webglTexture,Oe=k(T),Ae=he?a.TEXTURE_CUBE_MAP_POSITIVE_X+q:a.TEXTURE_2D,ke=T.depthTexture.format===Xr?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(T.depthTexture.format===Aa)qt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Ae,de,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Ae,de,0);else if(T.depthTexture.format===Xr)qt(T)?d.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ke,Ae,de,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,ke,Ae,de,0);else throw new Error("Unknown depthTexture format")}function ht(I){const T=r.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const pe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),T.__depthDisposeCallback=pe}T.__boundDepthTexture=he}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)Ve(T.__webglFramebuffer[he],I,he);else{const he=I.texture.mipmaps;he&&he.length>0?Ve(T.__webglFramebuffer[0],I,0):Ve(T.__webglFramebuffer,I,0)}else if(q){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=a.createRenderbuffer(),$e(T.__webglDepthbuffer[he],I,!1);else{const pe=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[he];a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,de)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(a.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=a.createRenderbuffer(),$e(T.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,de),a.framebufferRenderbuffer(a.FRAMEBUFFER,pe,a.RENDERBUFFER,de)}}n.bindFramebuffer(a.FRAMEBUFFER,null)}function jt(I,T,q){const he=r.get(I);T!==void 0&&Te(he.__webglFramebuffer,I,I.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),q!==void 0&&ht(I)}function pt(I){const T=I.texture,q=r.get(I),he=r.get(T);I.addEventListener("dispose",F);const pe=I.textures,de=I.isWebGLCubeRenderTarget===!0,Oe=pe.length>1;if(Oe||(he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture()),he.__version=T.version,f.memory.textures++),de){q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[Ae]=[];for(let ke=0;ke<T.mipmaps.length;ke++)q.__webglFramebuffer[Ae][ke]=a.createFramebuffer()}else q.__webglFramebuffer[Ae]=a.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)q.__webglFramebuffer[Ae]=a.createFramebuffer()}else q.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let Ae=0,ke=pe.length;Ae<ke;Ae++){const Qe=r.get(pe[Ae]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=a.createTexture(),f.memory.textures++)}if(I.samples>0&&qt(I)===!1){q.__webglMultisampledFramebuffer=a.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(a.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<pe.length;Ae++){const ke=pe[Ae];q.__webglColorRenderbuffer[Ae]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,q.__webglColorRenderbuffer[Ae]);const Qe=u.convert(ke.format,ke.colorSpace),Me=u.convert(ke.type),we=R(ke.internalFormat,Qe,Me,ke.colorSpace,I.isXRRenderTarget===!0),He=k(I);a.renderbufferStorageMultisample(a.RENDERBUFFER,He,we,I.width,I.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ae,a.RENDERBUFFER,q.__webglColorRenderbuffer[Ae])}a.bindRenderbuffer(a.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=a.createRenderbuffer(),$e(q.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(a.FRAMEBUFFER,null)}}if(de){n.bindTexture(a.TEXTURE_CUBE_MAP,he.__webglTexture),ue(a.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Te(q.__webglFramebuffer[Ae][ke],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ke);else Te(q.__webglFramebuffer[Ae],I,T,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&x(a.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let Ae=0,ke=pe.length;Ae<ke;Ae++){const Qe=pe[Ae],Me=r.get(Qe);let we=a.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(we,Me.__webglTexture),ue(we,Qe),Te(q.__webglFramebuffer,I,Qe,a.COLOR_ATTACHMENT0+Ae,we,0),y(Qe)&&x(we)}n.unbindTexture()}else{let Ae=a.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),n.bindTexture(Ae,he.__webglTexture),ue(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Te(q.__webglFramebuffer[ke],I,T,a.COLOR_ATTACHMENT0,Ae,ke);else Te(q.__webglFramebuffer,I,T,a.COLOR_ATTACHMENT0,Ae,0);y(T)&&x(Ae),n.unbindTexture()}I.depthBuffer&&ht(I)}function St(I){const T=I.textures;for(let q=0,he=T.length;q<he;q++){const pe=T[q];if(y(pe)){const de=U(I),Oe=r.get(pe).__webglTexture;n.bindTexture(de,Oe),x(de),n.unbindTexture()}}}const yt=[],rt=[];function Tt(I){if(I.samples>0){if(qt(I)===!1){const T=I.textures,q=I.width,he=I.height;let pe=a.COLOR_BUFFER_BIT;const de=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=r.get(I),Ae=T.length>1;if(Ae)for(let Qe=0;Qe<T.length;Qe++)n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Qe,a.RENDERBUFFER,null),n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Qe,a.TEXTURE_2D,null,0);n.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ke=I.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=a.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=a.STENCIL_BUFFER_BIT)),Ae){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Qe]);const Me=r.get(T[Qe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Me,0)}a.blitFramebuffer(0,0,q,he,0,0,q,he,pe,a.NEAREST),m===!0&&(yt.length=0,rt.length=0,yt.push(a.COLOR_ATTACHMENT0+Qe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(yt.push(de),rt.push(de),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,rt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(a.READ_FRAMEBUFFER,null),n.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),Ae)for(let Qe=0;Qe<T.length;Qe++){n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Qe,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[Qe]);const Me=r.get(T[Qe]).__webglTexture;n.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Qe,a.TEXTURE_2D,Me,0)}n.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[T])}}}function k(I){return Math.min(o.maxSamples,I.samples)}function qt(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(I){const T=f.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Ee(I,T){const q=I.colorSpace,he=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Zs&&q!==lr&&(At.getTransfer(q)===zt?(he!==wi||pe!==mi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",q)),T}function Ce(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=ee,this.rebindTextures=jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function w2(a,e){function n(r,o=lr){let u;const f=At.getTransfer(o);if(r===mi)return a.UNSIGNED_BYTE;if(r===qp)return a.UNSIGNED_SHORT_4_4_4_4;if(r===Yp)return a.UNSIGNED_SHORT_5_5_5_1;if(r===fS)return a.UNSIGNED_INT_5_9_9_9_REV;if(r===dS)return a.UNSIGNED_INT_10F_11F_11F_REV;if(r===uS)return a.BYTE;if(r===cS)return a.SHORT;if(r===fl)return a.UNSIGNED_SHORT;if(r===Wp)return a.INT;if(r===Yi)return a.UNSIGNED_INT;if(r===Vi)return a.FLOAT;if(r===Ta)return a.HALF_FLOAT;if(r===hS)return a.ALPHA;if(r===pS)return a.RGB;if(r===wi)return a.RGBA;if(r===Aa)return a.DEPTH_COMPONENT;if(r===Xr)return a.DEPTH_STENCIL;if(r===mS)return a.RED;if(r===jp)return a.RED_INTEGER;if(r===js)return a.RG;if(r===Zp)return a.RG_INTEGER;if(r===Kp)return a.RGBA_INTEGER;if(r===cc||r===fc||r===dc||r===hc)if(f===zt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===cc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===cc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jh||r===Zh||r===Kh||r===Qh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===jh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Zh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Kh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Jh||r===$h||r===ep||r===tp||r===np||r===ip||r===ap)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Jh||r===$h)return f===zt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ep)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===tp)return u.COMPRESSED_R11_EAC;if(r===np)return u.COMPRESSED_SIGNED_R11_EAC;if(r===ip)return u.COMPRESSED_RG11_EAC;if(r===ap)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rp||r===sp||r===op||r===lp||r===up||r===cp||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===_p||r===vp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===rp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===op)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===up)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===pp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===gp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_p)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vp)return f===zt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xp||r===Sp||r===yp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===xp)return f===zt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Sp)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Mp||r===Ep||r===bp||r===Tp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Mp)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Ep)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Tp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?a.UNSIGNED_INT_24_8:a[r]!==void 0?a[r]:null}return{convert:n}}const D2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U2=`
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

}`;class L2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new CS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Di({vertexShader:D2,fragmentShader:U2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ji(new Tl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class N2 extends $s{constructor(e,n){super();const r=this;let o=null,u=1,f=null,d="local-floor",m=1,h=null,g=null,_=null,v=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",y=new L2,x={},U=n.getContextAttributes();let R=null,P=null;const N=[],z=[],F=new Rt;let W=null;const A=new Ri;A.viewport=new on;const L=new Ri;L.viewport=new on;const H=[A,L],Z=new GA;let j=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=N[te];return _e===void 0&&(_e=new xh,N[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=N[te];return _e===void 0&&(_e=new xh,N[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=N[te];return _e===void 0&&(_e=new xh,N[te]=_e),_e.getHandSpace()};function $(te){const _e=z.indexOf(te.inputSource);if(_e===-1)return;const Te=N[_e];Te!==void 0&&(Te.update(te.inputSource,te.frame,h||f),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",B),o.removeEventListener("inputsourceschange",V);for(let te=0;te<N.length;te++){const _e=z[te];_e!==null&&(z[te]=null,N[te].disconnect(_e))}j=null,re=null,y.reset();for(const te in x)delete x[te];e.setRenderTarget(R),S=null,v=null,_=null,o=null,P=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(W),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(R=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",B),o.addEventListener("inputsourceschange",V),U.xrCompatible!==!0&&await n.makeXRCompatible(),W=e.getPixelRatio(),e.getSize(F),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,$e=null,Ve=null;U.depth&&(Ve=U.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=U.stencil?Xr:Aa,$e=U.stencil?dl:Yi);const ht={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:u};_=this.getBinding(),v=_.createProjectionLayer(ht),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Wi(v.textureWidth,v.textureHeight,{format:wi,type:mi,depthTexture:new pl(v.textureWidth,v.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(o,n,Te),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Wi(S.framebufferWidth,S.framebufferHeight,{format:wi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,f=await o.requestReferenceSpace(d),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function V(te){for(let _e=0;_e<te.removed.length;_e++){const Te=te.removed[_e],$e=z.indexOf(Te);$e>=0&&(z[$e]=null,N[$e].disconnect(Te))}for(let _e=0;_e<te.added.length;_e++){const Te=te.added[_e];let $e=z.indexOf(Te);if($e===-1){for(let ht=0;ht<N.length;ht++)if(ht>=z.length){z.push(Te),$e=ht;break}else if(z[ht]===null){z[ht]=Te,$e=ht;break}if($e===-1)break}const Ve=N[$e];Ve&&Ve.connect(Te)}}const ee=new fe,xe=new fe;function O(te,_e,Te){ee.setFromMatrixPosition(_e.matrixWorld),xe.setFromMatrixPosition(Te.matrixWorld);const $e=ee.distanceTo(xe),Ve=_e.projectionMatrix.elements,ht=Te.projectionMatrix.elements,jt=Ve[14]/(Ve[10]-1),pt=Ve[14]/(Ve[10]+1),St=(Ve[9]+1)/Ve[5],yt=(Ve[9]-1)/Ve[5],rt=(Ve[8]-1)/Ve[0],Tt=(ht[8]+1)/ht[0],k=jt*rt,qt=jt*Tt,Mt=$e/(-rt+Tt),Ee=Mt*-rt;if(_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ee),te.translateZ(Mt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ce=jt+Mt,I=pt+Mt,T=k-Ee,q=qt+($e-Ee),he=St*pt/I*Ce,pe=yt*pt/I*Ce;te.projectionMatrix.makePerspective(T,q,he,pe,Ce,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function K(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let _e=te.near,Te=te.far;y.texture!==null&&(y.depthNear>0&&(_e=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),Z.near=L.near=A.near=_e,Z.far=L.far=A.far=Te,(j!==Z.near||re!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),j=Z.near,re=Z.far),Z.layers.mask=te.layers.mask|6,A.layers.mask=Z.layers.mask&3,L.layers.mask=Z.layers.mask&5;const $e=te.parent,Ve=Z.cameras;K(Z,$e);for(let ht=0;ht<Ve.length;ht++)K(Ve[ht],$e);Ve.length===2?O(Z,A,L):Z.projectionMatrix.copy(A.projectionMatrix),ue(te,Z,$e)};function ue(te,_e,Te){Te===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ap*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Z)},this.getCameraTexture=function(te){return x[te]};let ge=null;function Le(te,_e){if(g=_e.getViewerPose(h||f),E=_e,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let $e=!1;Te.length!==Z.cameras.length&&(Z.cameras.length=0,$e=!0);for(let pt=0;pt<Te.length;pt++){const St=Te[pt];let yt=null;if(S!==null)yt=S.getViewport(St);else{const Tt=_.getViewSubImage(v,St);yt=Tt.viewport,pt===0&&(e.setRenderTargetTextures(P,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(P))}let rt=H[pt];rt===void 0&&(rt=new Ri,rt.layers.enable(pt),rt.viewport=new on,H[pt]=rt),rt.matrix.fromArray(St.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(St.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(yt.x,yt.y,yt.width,yt.height),pt===0&&(Z.matrix.copy(rt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),$e===!0&&Z.cameras.push(rt)}const Ve=o.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=r.getBinding();const pt=_.getDepthInformation(Te[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,o.renderState)}if(Ve&&Ve.includes("camera-access")&&b){e.state.unbindTexture(),_=r.getBinding();for(let pt=0;pt<Te.length;pt++){const St=Te[pt].camera;if(St){let yt=x[St];yt||(yt=new CS,x[St]=yt);const rt=_.getCameraImage(St);yt.sourceTexture=rt}}}}for(let Te=0;Te<N.length;Te++){const $e=z[Te],Ve=N[Te];$e!==null&&Ve!==void 0&&Ve.update($e,_e,h||f)}ge&&ge(te,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),E=null}const We=new wS;We.setAnimationLoop(Le),this.setAnimationLoop=function(te){ge=te},this.dispose=function(){}}}const Fr=new Ra,P2=new dn;function O2(a,e){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,ES(a)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,U,R,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?u(y,x):x.isMeshToonMaterial?(u(y,x),_(y,x)):x.isMeshPhongMaterial?(u(y,x),g(y,x)):x.isMeshStandardMaterial?(u(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,P)):x.isMeshMatcapMaterial?(u(y,x),E(y,x)):x.isMeshDepthMaterial?u(y,x):x.isMeshDistanceMaterial?(u(y,x),b(y,x)):x.isMeshNormalMaterial?u(y,x):x.isLineBasicMaterial?(f(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?m(y,x,U,R):x.isSpriteMaterial?h(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===jn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===jn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const U=e.get(x),R=U.envMap,P=U.envMapRotation;R&&(y.envMap.value=R,Fr.copy(P),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),y.envMapRotation.value.setFromMatrix4(P2.makeRotationFromEuler(Fr)),y.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,U,R){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*U,y.scale.value=R*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function g(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,U){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===jn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,x){x.matcap&&(y.matcap.value=x.matcap)}function b(y,x){const U=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function I2(a,e,n,r){let o={},u={},f=[];const d=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,R){const P=R.program;r.uniformBlockBinding(U,P)}function h(U,R){let P=o[U.id];P===void 0&&(E(U),P=g(U),o[U.id]=P,U.addEventListener("dispose",y));const N=R.program;r.updateUBOMapping(U,N);const z=e.render.frame;u[U.id]!==z&&(v(U),u[U.id]=z)}function g(U){const R=_();U.__bindingPointIndex=R;const P=a.createBuffer(),N=U.__size,z=U.usage;return a.bindBuffer(a.UNIFORM_BUFFER,P),a.bufferData(a.UNIFORM_BUFFER,N,z),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,R,P),P}function _(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(U){const R=o[U.id],P=U.uniforms,N=U.__cache;a.bindBuffer(a.UNIFORM_BUFFER,R);for(let z=0,F=P.length;z<F;z++){const W=Array.isArray(P[z])?P[z]:[P[z]];for(let A=0,L=W.length;A<L;A++){const H=W[A];if(S(H,z,A,N)===!0){const Z=H.__offset,j=Array.isArray(H.value)?H.value:[H.value];let re=0;for(let $=0;$<j.length;$++){const B=j[$],V=b(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,a.bufferSubData(a.UNIFORM_BUFFER,Z+re,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,re),re+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,Z,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(U,R,P,N){const z=U.value,F=R+"_"+P;if(N[F]===void 0)return typeof z=="number"||typeof z=="boolean"?N[F]=z:N[F]=z.clone(),!0;{const W=N[F];if(typeof z=="number"||typeof z=="boolean"){if(W!==z)return N[F]=z,!0}else if(W.equals(z)===!1)return W.copy(z),!0}return!1}function E(U){const R=U.uniforms;let P=0;const N=16;for(let F=0,W=R.length;F<W;F++){const A=Array.isArray(R[F])?R[F]:[R[F]];for(let L=0,H=A.length;L<H;L++){const Z=A[L],j=Array.isArray(Z.value)?Z.value:[Z.value];for(let re=0,$=j.length;re<$;re++){const B=j[re],V=b(B),ee=P%N,xe=ee%V.boundary,O=ee+xe;P+=xe,O!==0&&N-O<V.storage&&(P+=N-O),Z.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=P,P+=V.storage}}}const z=P%N;return z>0&&(P+=N-z),U.__size=P,U.__cache={},this}function b(U){const R={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(R.boundary=4,R.storage=4):U.isVector2?(R.boundary=8,R.storage=8):U.isVector3||U.isColor?(R.boundary=16,R.storage=12):U.isVector4?(R.boundary=16,R.storage=16):U.isMatrix3?(R.boundary=48,R.storage=48):U.isMatrix4?(R.boundary=64,R.storage=64):U.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",U),R}function y(U){const R=U.target;R.removeEventListener("dispose",y);const P=f.indexOf(R.__bindingPointIndex);f.splice(P,1),a.deleteBuffer(o[R.id]),delete o[R.id],delete u[R.id]}function x(){for(const U in o)a.deleteBuffer(o[U]);f=[],o={},u={}}return{bind:m,update:h,dispose:x}}const F2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function B2(){return zi===null&&(zi=new PA(F2,16,16,js,Ta),zi.name="DFG_LUT",zi.minFilter=Fn,zi.magFilter=Fn,zi.wrapS=xa,zi.wrapT=xa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class z2{constructor(e={}){const{canvas:n=sA(),context:r=null,depth:o=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=mi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=f;const b=S,y=new Set([Kp,Zp,jp]),x=new Set([mi,Yi,fl,dl,qp,Yp]),U=new Uint32Array(4),R=new Int32Array(4);let P=null,N=null;const z=[],F=[];let W=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let L=!1;this._outputColorSpace=ai;let H=0,Z=0,j=null,re=-1,$=null;const B=new on,V=new on;let ee=null;const xe=new kt(0);let O=0,K=n.width,ue=n.height,ge=1,Le=null,We=null;const te=new on(0,0,K,ue),_e=new on(0,0,K,ue);let Te=!1;const $e=new RS;let Ve=!1,ht=!1;const jt=new dn,pt=new fe,St=new on,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function Tt(){return j===null?ge:1}let k=r;function qt(w,Q){return n.getContext(w,Q)}try{const w={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Xp}`),n.addEventListener("webglcontextlost",it,!1),n.addEventListener("webglcontextrestored",Pt,!1),n.addEventListener("webglcontextcreationerror",Ct,!1),k===null){const Q="webgl2";if(k=qt(Q,w),k===null)throw qt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let Mt,Ee,Ce,I,T,q,he,pe,de,Oe,Ae,ke,Qe,Me,we,He,Ye,De,lt,Y,Ie,Re,Be,be;function ye(){Mt=new Bw(k),Mt.init(),Re=new w2(k,Mt),Ee=new ww(k,Mt,e,Re),Ce=new R2(k,Mt),Ee.reversedDepthBuffer&&v&&Ce.buffers.depth.setReversed(!0),I=new Vw(k),T=new d2,q=new C2(k,Mt,Ce,T,Ee,Re,I),he=new Uw(A),pe=new Fw(A),de=new WA(k),Be=new Rw(k,de),Oe=new zw(k,de,I,Be),Ae=new kw(k,Oe,de,I),lt=new Gw(k,Ee,q),He=new Dw(T),ke=new f2(A,he,pe,Mt,Ee,Be,He),Qe=new O2(A,T),Me=new p2,we=new S2(Mt),De=new Aw(A,he,pe,Ce,Ae,E,m),Ye=new T2(A,Ae,Ee),be=new I2(k,I,Ee,Ce),Y=new Cw(k,Mt,I),Ie=new Hw(k,Mt,I),I.programs=ke.programs,A.capabilities=Ee,A.extensions=Mt,A.properties=T,A.renderLists=Me,A.shadowMap=Ye,A.state=Ce,A.info=I}ye(),b!==mi&&(W=new Ww(b,n.width,n.height,o,u));const Ue=new N2(A,k);this.xr=Ue,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=Mt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Mt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(w){w!==void 0&&(ge=w,this.setSize(K,ue,!1))},this.getSize=function(w){return w.set(K,ue)},this.setSize=function(w,Q,ce=!0){if(Ue.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ue=Q,n.width=Math.floor(w*ge),n.height=Math.floor(Q*ge),ce===!0&&(n.style.width=w+"px",n.style.height=Q+"px"),W!==null&&W.setSize(n.width,n.height),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(K*ge,ue*ge).floor()},this.setDrawingBufferSize=function(w,Q,ce){K=w,ue=Q,ge=ce,n.width=Math.floor(w*ce),n.height=Math.floor(Q*ce),this.setViewport(0,0,w,Q)},this.setEffects=function(w){if(b===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Q=0;Q<w.length;Q++)if(w[Q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}W.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,Q,ce,se){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,Q,ce,se),Ce.viewport(B.copy(te).multiplyScalar(ge).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,Q,ce,se){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,Q,ce,se),Ce.scissor(V.copy(_e).multiplyScalar(ge).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){Ce.setScissorTest(Te=w)},this.setOpaqueSort=function(w){Le=w},this.setTransparentSort=function(w){We=w},this.getClearColor=function(w){return w.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,ce=!0){let se=0;if(w){let ne=!1;if(j!==null){const Ne=j.texture.format;ne=y.has(Ne)}if(ne){const Ne=j.texture.type,ze=x.has(Ne),Pe=De.getClearColor(),Ge=De.getClearAlpha(),Ze=Pe.r,et=Pe.g,qe=Pe.b;ze?(U[0]=Ze,U[1]=et,U[2]=qe,U[3]=Ge,k.clearBufferuiv(k.COLOR,0,U)):(R[0]=Ze,R[1]=et,R[2]=qe,R[3]=Ge,k.clearBufferiv(k.COLOR,0,R))}else se|=k.COLOR_BUFFER_BIT}Q&&(se|=k.DEPTH_BUFFER_BIT),ce&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",it,!1),n.removeEventListener("webglcontextrestored",Pt,!1),n.removeEventListener("webglcontextcreationerror",Ct,!1),De.dispose(),Me.dispose(),we.dispose(),T.dispose(),he.dispose(),pe.dispose(),Ae.dispose(),Be.dispose(),be.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",Al),Ue.removeEventListener("sessionend",Rl),Li.stop()};function it(w){w.preventDefault(),uv("WebGLRenderer: Context Lost."),L=!0}function Pt(){uv("WebGLRenderer: Context Restored."),L=!1;const w=I.autoReset,Q=Ye.enabled,ce=Ye.autoUpdate,se=Ye.needsUpdate,ne=Ye.type;ye(),I.autoReset=w,Ye.enabled=Q,Ye.autoUpdate=ce,Ye.needsUpdate=se,Ye.type=ne}function Ct(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function si(w){const Q=w.target;Q.removeEventListener("dispose",si),_n(Q)}function _n(w){vn(w),T.remove(w)}function vn(w){const Q=T.get(w).programs;Q!==void 0&&(Q.forEach(function(ce){ke.releaseProgram(ce)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ce,se,ne,Ne){Q===null&&(Q=yt);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,Pe=Cl(w,Q,ce,se,ne);Ce.setMaterial(se,ze);let Ge=ce.index,Ze=1;if(se.wireframe===!0){if(Ge=Oe.getWireframeAttribute(ce),Ge===void 0)return;Ze=2}const et=ce.drawRange,qe=ce.attributes.position;let ut=et.start*Ze,Ot=(et.start+et.count)*Ze;Ne!==null&&(ut=Math.max(ut,Ne.start*Ze),Ot=Math.min(Ot,(Ne.start+Ne.count)*Ze)),Ge!==null?(ut=Math.max(ut,0),Ot=Math.min(Ot,Ge.count)):qe!=null&&(ut=Math.max(ut,0),Ot=Math.min(Ot,qe.count));const Xt=Ot-ut;if(Xt<0||Xt===1/0)return;Be.setup(ne,se,Pe,ce,Ge);let Zt,wt=Y;if(Ge!==null&&(Zt=de.get(Ge),wt=Ie,wt.setIndex(Zt)),ne.isMesh)se.wireframe===!0?(Ce.setLineWidth(se.wireframeLinewidth*Tt()),wt.setMode(k.LINES)):wt.setMode(k.TRIANGLES);else if(ne.isLine){let Je=se.linewidth;Je===void 0&&(Je=1),Ce.setLineWidth(Je*Tt()),ne.isLineSegments?wt.setMode(k.LINES):ne.isLineLoop?wt.setMode(k.LINE_LOOP):wt.setMode(k.LINE_STRIP)}else ne.isPoints?wt.setMode(k.POINTS):ne.isSprite&&wt.setMode(k.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)hl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(Mt.get("WEBGL_multi_draw"))wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Je=ne._multiDrawStarts,ot=ne._multiDrawCounts,xt=ne._multiDrawCount,Un=Ge?de.get(Ge).bytesPerElement:1,Ni=T.get(se).currentProgram.getUniforms();for(let ln=0;ln<xt;ln++)Ni.setValue(k,"_gl_DrawID",ln),wt.render(Je[ln]/Un,ot[ln])}else if(ne.isInstancedMesh)wt.renderInstances(ut,Xt,ne.count);else if(ce.isInstancedBufferGeometry){const Je=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ot=Math.min(ce.instanceCount,Je);wt.renderInstances(ut,Xt,ot)}else wt.render(ut,Xt)};function Tn(w,Q,ce){w.transparent===!0&&w.side===va&&w.forceSinglePass===!1?(w.side=jn,w.needsUpdate=!0,xi(w,Q,ce),w.side=fr,w.needsUpdate=!0,xi(w,Q,ce),w.side=va):xi(w,Q,ce)}this.compile=function(w,Q,ce=null){ce===null&&(ce=w),N=we.get(ce),N.init(Q),F.push(N),ce.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),w!==ce&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Q.layers)&&(N.pushLight(ne),ne.castShadow&&N.pushShadow(ne))}),N.setupLights();const se=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Pe=Ne[ze];Tn(Pe,ce,ne),se.add(Pe)}else Tn(Ne,ce,ne),se.add(Ne)}),N=F.pop(),se},this.compileAsync=function(w,Q,ce=null){const se=this.compile(w,Q,ce);return new Promise(ne=>{function Ne(){if(se.forEach(function(ze){T.get(ze).currentProgram.isReady()&&se.delete(ze)}),se.size===0){ne(w);return}setTimeout(Ne,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ui=null;function to(w){Ui&&Ui(w)}function Al(){Li.stop()}function Rl(){Li.start()}const Li=new wS;Li.setAnimationLoop(to),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Ui=w,Ue.setAnimationLoop(w),w===null?Li.stop():Li.start()},Ue.addEventListener("sessionstart",Al),Ue.addEventListener("sessionend",Rl),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const ce=Ue.enabled===!0&&Ue.isPresenting===!0,se=W!==null&&(j===null||ce)&&W.begin(A,j);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(W===null||W.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(Q),Q=Ue.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,Q,j),N=we.get(w,F.length),N.init(Q),F.push(N),jt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),$e.setFromProjectionMatrix(jt,Gi,Q.reversedDepth),ht=this.localClippingEnabled,Ve=He.init(this.clippingPlanes,ht),P=Me.get(w,z.length),P.init(),z.push(P),Ue.enabled===!0&&Ue.isPresenting===!0){const ze=A.xr.getDepthSensingMesh();ze!==null&&Zi(ze,Q,-1/0,A.sortObjects)}Zi(w,Q,0,A.sortObjects),P.finish(),A.sortObjects===!0&&P.sort(Le,We),rt=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,rt&&De.addToRenderList(P,w),this.info.render.frame++,Ve===!0&&He.beginShadows();const ne=N.state.shadowsArray;if(Ye.render(ne,w,Q),Ve===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&W.hasRenderPass())===!1){const ze=P.opaque,Pe=P.transmissive;if(N.setupLights(),Q.isArrayCamera){const Ge=Q.cameras;if(Pe.length>0)for(let Ze=0,et=Ge.length;Ze<et;Ze++){const qe=Ge[Ze];Ki(ze,Pe,w,qe)}rt&&De.render(w);for(let Ze=0,et=Ge.length;Ze<et;Ze++){const qe=Ge[Ze];Zr(P,w,qe,qe.viewport)}}else Pe.length>0&&Ki(ze,Pe,w,Q),rt&&De.render(w),Zr(P,w,Q)}j!==null&&Z===0&&(q.updateMultisampleRenderTarget(j),q.updateRenderTargetMipmap(j)),se&&W.end(A),w.isScene===!0&&w.onAfterRender(A,w,Q),Be.resetDefaultState(),re=-1,$=null,F.pop(),F.length>0?(N=F[F.length-1],Ve===!0&&He.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?P=z[z.length-1]:P=null};function Zi(w,Q,ce,se){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ce=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$e.intersectsSprite(w)){se&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);const ze=Ae.update(w),Pe=w.material;Pe.visible&&P.push(w,ze,Pe,ce,St.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$e.intersectsObject(w))){const ze=Ae.update(w),Pe=w.material;if(se&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),St.copy(ze.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(Pe)){const Ge=ze.groups;for(let Ze=0,et=Ge.length;Ze<et;Ze++){const qe=Ge[Ze],ut=Pe[qe.materialIndex];ut&&ut.visible&&P.push(w,ze,ut,ce,St.z,qe)}}else Pe.visible&&P.push(w,ze,Pe,ce,St.z,null)}}const Ne=w.children;for(let ze=0,Pe=Ne.length;ze<Pe;ze++)Zi(Ne[ze],Q,ce,se)}function Zr(w,Q,ce,se){const{opaque:ne,transmissive:Ne,transparent:ze}=w;N.setupLightsView(ce),Ve===!0&&He.setGlobalState(A.clippingPlanes,ce),se&&Ce.viewport(B.copy(se)),ne.length>0&&vi(ne,Q,ce),Ne.length>0&&vi(Ne,Q,ce),ze.length>0&&vi(ze,Q,ce),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Ki(w,Q,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[se.id]===void 0){const ut=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[se.id]=new Wi(1,1,{generateMipmaps:!0,type:ut?Ta:mi,minFilter:kr,samples:Ee.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ne=N.state.transmissionRenderTarget[se.id],ze=se.viewport||B;Ne.setSize(ze.z*A.transmissionResolutionScale,ze.w*A.transmissionResolutionScale);const Pe=A.getRenderTarget(),Ge=A.getActiveCubeFace(),Ze=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(xe),O=A.getClearAlpha(),O<1&&A.setClearColor(16777215,.5),A.clear(),rt&&De.render(ce);const et=A.toneMapping;A.toneMapping=Xi;const qe=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),N.setupLightsView(se),Ve===!0&&He.setGlobalState(A.clippingPlanes,se),vi(w,ce,se),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let Ot=0,Xt=Q.length;Ot<Xt;Ot++){const Zt=Q[Ot],{object:wt,geometry:Je,material:ot,group:xt}=Zt;if(ot.side===va&&wt.layers.test(se.layers)){const Un=ot.side;ot.side=jn,ot.needsUpdate=!0,Ua(wt,ce,se,Je,ot,xt),ot.side=Un,ot.needsUpdate=!0,ut=!0}}ut===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Pe,Ge,Ze),A.setClearColor(xe,O),qe!==void 0&&(se.viewport=qe),A.toneMapping=et}function vi(w,Q,ce){const se=Q.isScene===!0?Q.overrideMaterial:null;for(let ne=0,Ne=w.length;ne<Ne;ne++){const ze=w[ne],{object:Pe,geometry:Ge,group:Ze}=ze;let et=ze.material;et.allowOverride===!0&&se!==null&&(et=se),Pe.layers.test(ce.layers)&&Ua(Pe,Q,ce,Ge,et,Ze)}}function Ua(w,Q,ce,se,ne,Ne){w.onBeforeRender(A,Q,ce,se,ne,Ne),w.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(A,Q,ce,se,w,Ne),ne.transparent===!0&&ne.side===va&&ne.forceSinglePass===!1?(ne.side=jn,ne.needsUpdate=!0,A.renderBufferDirect(ce,Q,se,ne,w,Ne),ne.side=fr,ne.needsUpdate=!0,A.renderBufferDirect(ce,Q,se,ne,w,Ne),ne.side=va):A.renderBufferDirect(ce,Q,se,ne,w,Ne),w.onAfterRender(A,Q,ce,se,ne,Ne)}function xi(w,Q,ce){Q.isScene!==!0&&(Q=yt);const se=T.get(w),ne=N.state.lights,Ne=N.state.shadowsArray,ze=ne.state.version,Pe=ke.getParameters(w,ne.state,Ne,Q,ce),Ge=ke.getProgramCacheKey(Pe);let Ze=se.programs;se.environment=w.isMeshStandardMaterial?Q.environment:null,se.fog=Q.fog,se.envMap=(w.isMeshStandardMaterial?pe:he).get(w.envMap||se.environment),se.envMapRotation=se.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",si),Ze=new Map,se.programs=Ze);let et=Ze.get(Ge);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===ze)return no(w,Pe),et}else Pe.uniforms=ke.getUniforms(w),w.onBeforeCompile(Pe,A),et=ke.acquireProgram(Pe,Ge),Ze.set(Ge,et),se.uniforms=Pe.uniforms;const qe=se.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qe.clippingPlanes=He.uniform),no(w,Pe),se.needsLights=La(w),se.lightsStateVersion=ze,se.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.directionalShadowMap.value=ne.state.directionalShadowMap,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotShadowMap.value=ne.state.spotShadowMap,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMap.value=ne.state.pointShadowMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function nn(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=pc.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function no(w,Q){const ce=T.get(w);ce.outputColorSpace=Q.outputColorSpace,ce.batching=Q.batching,ce.batchingColor=Q.batchingColor,ce.instancing=Q.instancing,ce.instancingColor=Q.instancingColor,ce.instancingMorph=Q.instancingMorph,ce.skinning=Q.skinning,ce.morphTargets=Q.morphTargets,ce.morphNormals=Q.morphNormals,ce.morphColors=Q.morphColors,ce.morphTargetsCount=Q.morphTargetsCount,ce.numClippingPlanes=Q.numClippingPlanes,ce.numIntersection=Q.numClipIntersection,ce.vertexAlphas=Q.vertexAlphas,ce.vertexTangents=Q.vertexTangents,ce.toneMapping=Q.toneMapping}function Cl(w,Q,ce,se,ne){Q.isScene!==!0&&(Q=yt),q.resetTextureUnits();const Ne=Q.fog,ze=se.isMeshStandardMaterial?Q.environment:null,Pe=j===null?A.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Zs,Ge=(se.isMeshStandardMaterial?pe:he).get(se.envMap||ze),Ze=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,et=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),qe=!!ce.morphAttributes.position,ut=!!ce.morphAttributes.normal,Ot=!!ce.morphAttributes.color;let Xt=Xi;se.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xt=A.toneMapping);const Zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,wt=Zt!==void 0?Zt.length:0,Je=T.get(se),ot=N.state.lights;if(Ve===!0&&(ht===!0||w!==$)){const xn=w===$&&se.id===re;He.setState(se,w,xn)}let xt=!1;se.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==ot.state.version||Je.outputColorSpace!==Pe||ne.isBatchedMesh&&Je.batching===!1||!ne.isBatchedMesh&&Je.batching===!0||ne.isBatchedMesh&&Je.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Je.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Je.instancing===!1||!ne.isInstancedMesh&&Je.instancing===!0||ne.isSkinnedMesh&&Je.skinning===!1||!ne.isSkinnedMesh&&Je.skinning===!0||ne.isInstancedMesh&&Je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Je.instancingMorph===!1&&ne.morphTexture!==null||Je.envMap!==Ge||se.fog===!0&&Je.fog!==Ne||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==He.numPlanes||Je.numIntersection!==He.numIntersection)||Je.vertexAlphas!==Ze||Je.vertexTangents!==et||Je.morphTargets!==qe||Je.morphNormals!==ut||Je.morphColors!==Ot||Je.toneMapping!==Xt||Je.morphTargetsCount!==wt)&&(xt=!0):(xt=!0,Je.__version=se.version);let Un=Je.currentProgram;xt===!0&&(Un=xi(se,Q,ne));let Ni=!1,ln=!1,Na=!1;const It=Un.getUniforms(),an=Je.uniforms;if(Ce.useProgram(Un.program)&&(Ni=!0,ln=!0,Na=!0),se.id!==re&&(re=se.id,ln=!0),Ni||$!==w){Ce.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",w.projectionMatrix),It.setValue(k,"viewMatrix",w.matrixWorldInverse);const An=It.map.cameraPosition;An!==void 0&&An.setValue(k,pt.setFromMatrixPosition(w.matrixWorld)),Ee.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,ln=!0,Na=!0)}if(Je.needsLights&&(ot.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",ot.state.directionalShadowMap,q),ot.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",ot.state.spotShadowMap,q),ot.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",ot.state.pointShadowMap,q)),ne.isSkinnedMesh){It.setOptional(k,ne,"bindMatrix"),It.setOptional(k,ne,"bindMatrixInverse");const xn=ne.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),It.setValue(k,"boneTexture",xn.boneTexture,q))}ne.isBatchedMesh&&(It.setOptional(k,ne,"batchingTexture"),It.setValue(k,"batchingTexture",ne._matricesTexture,q),It.setOptional(k,ne,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",ne._indirectTexture,q),It.setOptional(k,ne,"batchingColorTexture"),ne._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",ne._colorsTexture,q));const Vn=ce.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&lt.update(ne,ce,Un),(ln||Je.receiveShadow!==ne.receiveShadow)&&(Je.receiveShadow=ne.receiveShadow,It.setValue(k,"receiveShadow",ne.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(an.envMap.value=Ge,an.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Q.environment!==null&&(an.envMapIntensity.value=Q.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=B2()),ln&&(It.setValue(k,"toneMappingExposure",A.toneMappingExposure),Je.needsLights&&Qi(an,Na),Ne&&se.fog===!0&&Qe.refreshFogUniforms(an,Ne),Qe.refreshMaterialUniforms(an,se,ge,ue,N.state.transmissionRenderTarget[w.id]),pc.upload(k,nn(Je),an,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(pc.upload(k,nn(Je),an,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(k,"center",ne.center),It.setValue(k,"modelViewMatrix",ne.modelViewMatrix),It.setValue(k,"normalMatrix",ne.normalMatrix),It.setValue(k,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const xn=se.uniformsGroups;for(let An=0,pr=xn.length;An<pr;An++){const Ji=xn[An];be.update(Ji,Un),be.bind(Ji,Un)}}return Un}function Qi(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function La(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(w,Q,ce){const se=T.get(w);se.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Q,T.get(w.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const ce=T.get(w);ce.__webglFramebuffer=Q,ce.__useDefaultFramebuffer=Q===void 0};const Nc=k.createFramebuffer();this.setRenderTarget=function(w,Q=0,ce=0){j=w,H=Q,Z=ce;let se=null,ne=!1,Ne=!1;if(w){const Pe=T.get(w);if(Pe.__useDefaultFramebuffer!==void 0){Ce.bindFramebuffer(k.FRAMEBUFFER,Pe.__webglFramebuffer),B.copy(w.viewport),V.copy(w.scissor),ee=w.scissorTest,Ce.viewport(B),Ce.scissor(V),Ce.setScissorTest(ee),re=-1;return}else if(Pe.__webglFramebuffer===void 0)q.setupRenderTarget(w);else if(Pe.__hasExternalTextures)q.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const et=w.depthTexture;if(Pe.__boundDepthTexture!==et){if(et!==null&&T.has(et)&&(w.width!==et.image.width||w.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ne=!0);const Ze=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[Q])?se=Ze[Q][ce]:se=Ze[Q],ne=!0):w.samples>0&&q.useMultisampledRTT(w)===!1?se=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[ce]:se=Ze,B.copy(w.viewport),V.copy(w.scissor),ee=w.scissorTest}else B.copy(te).multiplyScalar(ge).floor(),V.copy(_e).multiplyScalar(ge).floor(),ee=Te;if(ce!==0&&(se=Nc),Ce.bindFramebuffer(k.FRAMEBUFFER,se)&&Ce.drawBuffers(w,se),Ce.viewport(B),Ce.scissor(V),Ce.setScissorTest(ee),ne){const Pe=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Pe.__webglTexture,ce)}else if(Ne){const Pe=Q;for(let Ge=0;Ge<w.textures.length;Ge++){const Ze=T.get(w.textures[Ge]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ge,Ze.__webglTexture,ce,Pe)}}else if(w!==null&&ce!==0){const Pe=T.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pe.__webglTexture,ce)}re=-1},this.readRenderTargetPixels=function(w,Q,ce,se,ne,Ne,ze,Pe=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge){Ce.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const Ze=w.textures[Pe],et=Ze.format,qe=Ze.type;if(!Ee.textureFormatReadable(et)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ee.textureTypeReadable(qe)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-se&&ce>=0&&ce<=w.height-ne&&(w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(Q,ce,se,ne,Re.convert(et),Re.convert(qe),Ne))}finally{const Ze=j!==null?T.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,Q,ce,se,ne,Ne,ze,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(Ge=Ge[ze]),Ge)if(Q>=0&&Q<=w.width-se&&ce>=0&&ce<=w.height-ne){Ce.bindFramebuffer(k.FRAMEBUFFER,Ge);const Ze=w.textures[Pe],et=Ze.format,qe=Ze.type;if(!Ee.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ee.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.bufferData(k.PIXEL_PACK_BUFFER,Ne.byteLength,k.STREAM_READ),w.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),k.readPixels(Q,ce,se,ne,Re.convert(et),Re.convert(qe),0);const Ot=j!==null?T.get(j).__webglFramebuffer:null;Ce.bindFramebuffer(k.FRAMEBUFFER,Ot);const Xt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await oA(k,Xt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ut),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ne),k.deleteBuffer(ut),k.deleteSync(Xt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,ce=0){const se=Math.pow(2,-ce),ne=Math.floor(w.image.width*se),Ne=Math.floor(w.image.height*se),ze=Q!==null?Q.x:0,Pe=Q!==null?Q.y:0;q.setTexture2D(w,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,ze,Pe,ne,Ne),Ce.unbindTexture()};const wl=k.createFramebuffer(),Dl=k.createFramebuffer();this.copyTextureToTexture=function(w,Q,ce=null,se=null,ne=0,Ne=null){Ne===null&&(ne!==0?(hl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ne,ne=0):Ne=0);let ze,Pe,Ge,Ze,et,qe,ut,Ot,Xt;const Zt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(ce!==null)ze=ce.max.x-ce.min.x,Pe=ce.max.y-ce.min.y,Ge=ce.isBox3?ce.max.z-ce.min.z:1,Ze=ce.min.x,et=ce.min.y,qe=ce.isBox3?ce.min.z:0;else{const Vn=Math.pow(2,-ne);ze=Math.floor(Zt.width*Vn),Pe=Math.floor(Zt.height*Vn),w.isDataArrayTexture?Ge=Zt.depth:w.isData3DTexture?Ge=Math.floor(Zt.depth*Vn):Ge=1,Ze=0,et=0,qe=0}se!==null?(ut=se.x,Ot=se.y,Xt=se.z):(ut=0,Ot=0,Xt=0);const wt=Re.convert(Q.format),Je=Re.convert(Q.type);let ot;Q.isData3DTexture?(q.setTexture3D(Q,0),ot=k.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(q.setTexture2DArray(Q,0),ot=k.TEXTURE_2D_ARRAY):(q.setTexture2D(Q,0),ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const xt=k.getParameter(k.UNPACK_ROW_LENGTH),Un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ni=k.getParameter(k.UNPACK_SKIP_PIXELS),ln=k.getParameter(k.UNPACK_SKIP_ROWS),Na=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Zt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Zt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ze),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qe);const It=w.isDataArrayTexture||w.isData3DTexture,an=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const Vn=T.get(w),xn=T.get(Q),An=T.get(Vn.__renderTarget),pr=T.get(xn.__renderTarget);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,An.__webglFramebuffer),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let Ji=0;Ji<Ge;Ji++)It&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(w).__webglTexture,ne,qe+Ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(Q).__webglTexture,Ne,Xt+Ji)),k.blitFramebuffer(Ze,et,ze,Pe,ut,Ot,ze,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||T.has(w)){const Vn=T.get(w),xn=T.get(Q);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,wl),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,Dl);for(let An=0;An<Ge;An++)It?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Vn.__webglTexture,ne,qe+An):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vn.__webglTexture,ne),an?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,xn.__webglTexture,Ne,Xt+An):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,xn.__webglTexture,Ne),ne!==0?k.blitFramebuffer(Ze,et,ze,Pe,ut,Ot,ze,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):an?k.copyTexSubImage3D(ot,Ne,ut,Ot,Xt+An,Ze,et,ze,Pe):k.copyTexSubImage2D(ot,Ne,ut,Ot,Ze,et,ze,Pe);Ce.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ce.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else an?w.isDataTexture||w.isData3DTexture?k.texSubImage3D(ot,Ne,ut,Ot,Xt,ze,Pe,Ge,wt,Je,Zt.data):Q.isCompressedArrayTexture?k.compressedTexSubImage3D(ot,Ne,ut,Ot,Xt,ze,Pe,Ge,wt,Zt.data):k.texSubImage3D(ot,Ne,ut,Ot,Xt,ze,Pe,Ge,wt,Je,Zt):w.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ne,ut,Ot,ze,Pe,wt,Je,Zt.data):w.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ne,ut,Ot,Zt.width,Zt.height,wt,Zt.data):k.texSubImage2D(k.TEXTURE_2D,Ne,ut,Ot,ze,Pe,wt,Je,Zt);k.pixelStorei(k.UNPACK_ROW_LENGTH,xt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ni),k.pixelStorei(k.UNPACK_SKIP_ROWS,ln),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Na),Ne===0&&Q.generateMipmaps&&k.generateMipmap(ot),Ce.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?q.setTextureCube(w,0):w.isData3DTexture?q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?q.setTexture2DArray(w,0):q.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){H=0,Z=0,j=null,Ce.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),n.unpackColorSpace=At._getUnpackColorSpace()}}const mc=8,H2=`
#define MAX_COLORS ${mc}
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
`,V2=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function G2({className:a,style:e,rotation:n=45,speed:r=.2,colors:o=[],transparent:u=!0,autoRotate:f=0,scale:d=1,frequency:m=1,warpStrength:h=1,mouseInfluence:g=1,parallax:_=.5,noise:v=.1}){const S=D.useRef(null),E=D.useRef(null),b=D.useRef(null),y=D.useRef(null),x=D.useRef(null),U=D.useRef(n),R=D.useRef(f),P=D.useRef(new Rt(0,0)),N=D.useRef(new Rt(0,0)),z=D.useRef(8);return D.useEffect(()=>{const F=S.current,W=new NA,A=new tm(-1,1,1,-1,0,1),L=new Tl(2,2),H=Array.from({length:mc},()=>new fe(0,0,0)),Z=new Di({vertexShader:V2,fragmentShader:H2,uniforms:{uCanvas:{value:new Rt(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new Rt(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:u?1:0},uScale:{value:d},uFrequency:{value:m},uWarpStrength:{value:h},uPointer:{value:new Rt(0,0)},uMouseInfluence:{value:g},uParallax:{value:_},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});y.current=Z;const j=new ji(L,Z);W.add(j);const re=new z2({antialias:!1,powerPreference:"high-performance",alpha:!0});E.current=re,re.outputColorSpace=ai,re.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),re.setClearColor(0,u?0:1),re.domElement.style.width="100%",re.domElement.style.height="100%",re.domElement.style.display="block",F.appendChild(re.domElement);const $=new kA,B=()=>{const ee=F.clientWidth||1,xe=F.clientHeight||1;re.setSize(ee,xe,!1),Z.uniforms.uCanvas.value.set(ee,xe)};if(B(),"ResizeObserver"in window){const ee=new ResizeObserver(B);ee.observe(F),x.current=ee}else window.addEventListener("resize",B);const V=()=>{const ee=$.getDelta(),xe=$.elapsedTime;Z.uniforms.uTime.value=xe;const K=(U.current%360+R.current*xe)*Math.PI/180,ue=Math.cos(K),ge=Math.sin(K);Z.uniforms.uRot.value.set(ue,ge);const Le=N.current,We=P.current,te=Math.min(1,ee*z.current);Le.lerp(We,te),Z.uniforms.uPointer.value.copy(Le),re.render(W,A),b.current=requestAnimationFrame(V)};return b.current=requestAnimationFrame(V),()=>{b.current!==null&&cancelAnimationFrame(b.current),x.current?x.current.disconnect():window.removeEventListener("resize",B),L.dispose(),Z.dispose(),re.dispose(),re.domElement&&re.domElement.parentElement===F&&F.removeChild(re.domElement)}},[m,g,v,_,d,r,u,h]),D.useEffect(()=>{const F=y.current,W=E.current;if(!F)return;U.current=n,R.current=f,F.uniforms.uSpeed.value=r,F.uniforms.uScale.value=d,F.uniforms.uFrequency.value=m,F.uniforms.uWarpStrength.value=h,F.uniforms.uMouseInfluence.value=g,F.uniforms.uParallax.value=_,F.uniforms.uNoise.value=v;const A=H=>{const Z=H.replace("#","").trim(),j=Z.length===3?[parseInt(Z[0]+Z[0],16),parseInt(Z[1]+Z[1],16),parseInt(Z[2]+Z[2],16)]:[parseInt(Z.slice(0,2),16),parseInt(Z.slice(2,4),16),parseInt(Z.slice(4,6),16)];return new fe(j[0]/255,j[1]/255,j[2]/255)},L=(o||[]).filter(Boolean).slice(0,mc).map(A);for(let H=0;H<mc;H++){const Z=F.uniforms.uColors.value[H];H<L.length?Z.copy(L[H]):Z.set(0,0,0)}F.uniforms.uColorCount.value=L.length,F.uniforms.uTransparent.value=u?1:0,W&&W.setClearColor(0,u?0:1)},[n,f,r,d,m,h,g,_,v,o,u]),D.useEffect(()=>{const F=y.current,W=S.current;if(!F||!W)return;const A=L=>{const H=W.getBoundingClientRect(),Z=(L.clientX-H.left)/(H.width||1)*2-1,j=-((L.clientY-H.top)/(H.height||1)*2-1);P.current.set(Z,j)};return W.addEventListener("pointermove",A),()=>{W.removeEventListener("pointermove",A)}},[]),Xe.jsx("div",{ref:S,className:`color-bends-container ${a}`,style:e})}function k2(){return Xe.jsxs(Xe.Fragment,{children:[Xe.jsx(G2,{}),Xe.jsx("div",{className:"nav-bar",children:Xe.jsxs("ul",{children:[Xe.jsx("li",{children:Xe.jsx(ll,{to:"/",children:"Home"})}),Xe.jsx("li",{children:Xe.jsx(ll,{to:"/contact",children:"Contact"})}),Xe.jsx("li",{children:Xe.jsx(ll,{to:"/about",children:"About"})})]})}),Xe.jsxs(kE,{children:[Xe.jsx(rc,{path:"/",element:Xe.jsx(b1,{})}),Xe.jsx(rc,{path:"/contact",element:Xe.jsx(A1,{})}),Xe.jsx(rc,{path:"/about",element:Xe.jsx(T1,{})})]})]})}const X2=WM.createRoot(document.getElementById("root"));X2.render(Xe.jsx(hb,{children:Xe.jsx(k2,{})}));
