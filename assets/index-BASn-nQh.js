(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var _d={exports:{}},Xo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function qM(){if(r_)return Xo;r_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Xo.Fragment=e,Xo.jsx=i,Xo.jsxs=i,Xo}var s_;function YM(){return s_||(s_=1,_d.exports=qM()),_d.exports}var Zt=YM(),vd={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function ZM(){if(o_)return ct;o_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function v(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,T={};function M(U,Y,re){this.props=U,this.context=Y,this.refs=T,this.updater=re||S}M.prototype.isReactComponent={},M.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},M.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=M.prototype;function O(U,Y,re){this.props=U,this.context=Y,this.refs=T,this.updater=re||S}var C=O.prototype=new x;C.constructor=O,y(C,M.prototype),C.isPureReactComponent=!0;var P=Array.isArray,L={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function N(U,Y,re,pe,Re,He){return re=He.ref,{$$typeof:s,type:U,key:Y,ref:re!==void 0?re:null,props:He}}function Z(U,Y){return N(U.type,Y,void 0,void 0,void 0,U.props)}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function D(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(re){return Y[re]})}var H=/\/+/g;function j(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?D(""+U.key):Y.toString(36)}function q(){}function ae(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(q,q):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function ee(U,Y,re,pe,Re){var He=typeof U;(He==="undefined"||He==="boolean")&&(U=null);var te=!1;if(U===null)te=!0;else switch(He){case"bigint":case"string":case"number":te=!0;break;case"object":switch(U.$$typeof){case s:case e:te=!0;break;case g:return te=U._init,ee(te(U._payload),Y,re,pe,Re)}}if(te)return Re=Re(U),te=pe===""?"."+j(U,0):pe,P(Re)?(re="",te!=null&&(re=te.replace(H,"$&/")+"/"),ee(Re,Y,re,"",function(Je){return Je})):Re!=null&&(A(Re)&&(Re=Z(Re,re+(Re.key==null||U&&U.key===Re.key?"":(""+Re.key).replace(H,"$&/")+"/")+te)),Y.push(Re)),1;te=0;var ve=pe===""?".":pe+":";if(P(U))for(var Te=0;Te<U.length;Te++)pe=U[Te],He=ve+j(pe,Te),te+=ee(pe,Y,re,He,Re);else if(Te=v(U),typeof Te=="function")for(U=Te.call(U),Te=0;!(pe=U.next()).done;)pe=pe.value,He=ve+j(pe,Te++),te+=ee(pe,Y,re,He,Re);else if(He==="object"){if(typeof U.then=="function")return ee(ae(U),Y,re,pe,Re);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return te}function B(U,Y,re){if(U==null)return U;var pe=[],Re=0;return ee(U,pe,"","",function(He){return Y.call(re,He,Re++)}),pe}function V(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(re){(U._status===0||U._status===-1)&&(U._status=1,U._result=re)},function(re){(U._status===0||U._status===-1)&&(U._status=2,U._result=re)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var k=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function de(){}return ct.Children={map:B,forEach:function(U,Y,re){B(U,function(){Y.apply(this,arguments)},re)},count:function(U){var Y=0;return B(U,function(){Y++}),Y},toArray:function(U){return B(U,function(Y){return Y})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ct.Component=M,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=O,ct.StrictMode=r,ct.Suspense=m,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ct.__COMPILER_RUNTIME={__proto__:null,c:function(U){return L.H.useMemoCache(U)}},ct.cache=function(U){return function(){return U.apply(null,arguments)}},ct.cloneElement=function(U,Y,re){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var pe=y({},U.props),Re=U.key,He=void 0;if(Y!=null)for(te in Y.ref!==void 0&&(He=void 0),Y.key!==void 0&&(Re=""+Y.key),Y)!z.call(Y,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&Y.ref===void 0||(pe[te]=Y[te]);var te=arguments.length-2;if(te===1)pe.children=re;else if(1<te){for(var ve=Array(te),Te=0;Te<te;Te++)ve[Te]=arguments[Te+2];pe.children=ve}return N(U.type,Re,void 0,void 0,He,pe)},ct.createContext=function(U){return U={$$typeof:f,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ct.createElement=function(U,Y,re){var pe,Re={},He=null;if(Y!=null)for(pe in Y.key!==void 0&&(He=""+Y.key),Y)z.call(Y,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Re[pe]=Y[pe]);var te=arguments.length-2;if(te===1)Re.children=re;else if(1<te){for(var ve=Array(te),Te=0;Te<te;Te++)ve[Te]=arguments[Te+2];Re.children=ve}if(U&&U.defaultProps)for(pe in te=U.defaultProps,te)Re[pe]===void 0&&(Re[pe]=te[pe]);return N(U,He,void 0,void 0,null,Re)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(U){return{$$typeof:d,render:U}},ct.isValidElement=A,ct.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:V}},ct.memo=function(U,Y){return{$$typeof:p,type:U,compare:Y===void 0?null:Y}},ct.startTransition=function(U){var Y=L.T,re={};L.T=re;try{var pe=U(),Re=L.S;Re!==null&&Re(re,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(de,k)}catch(He){k(He)}finally{L.T=Y}},ct.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ct.use=function(U){return L.H.use(U)},ct.useActionState=function(U,Y,re){return L.H.useActionState(U,Y,re)},ct.useCallback=function(U,Y){return L.H.useCallback(U,Y)},ct.useContext=function(U){return L.H.useContext(U)},ct.useDebugValue=function(){},ct.useDeferredValue=function(U,Y){return L.H.useDeferredValue(U,Y)},ct.useEffect=function(U,Y,re){var pe=L.H;if(typeof re=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return pe.useEffect(U,Y)},ct.useId=function(){return L.H.useId()},ct.useImperativeHandle=function(U,Y,re){return L.H.useImperativeHandle(U,Y,re)},ct.useInsertionEffect=function(U,Y){return L.H.useInsertionEffect(U,Y)},ct.useLayoutEffect=function(U,Y){return L.H.useLayoutEffect(U,Y)},ct.useMemo=function(U,Y){return L.H.useMemo(U,Y)},ct.useOptimistic=function(U,Y){return L.H.useOptimistic(U,Y)},ct.useReducer=function(U,Y,re){return L.H.useReducer(U,Y,re)},ct.useRef=function(U){return L.H.useRef(U)},ct.useState=function(U){return L.H.useState(U)},ct.useSyncExternalStore=function(U,Y,re){return L.H.useSyncExternalStore(U,Y,re)},ct.useTransition=function(){return L.H.useTransition()},ct.version="19.1.0",ct}var l_;function sp(){return l_||(l_=1,vd.exports=ZM()),vd.exports}var F=sp(),xd={exports:{}},Wo={},Sd={exports:{}},Md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function jM(){return c_||(c_=1,function(s){function e(B,V){var k=B.length;B.push(V);e:for(;0<k;){var de=k-1>>>1,U=B[de];if(0<l(U,V))B[de]=V,B[k]=U,k=de;else break e}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var V=B[0],k=B.pop();if(k!==V){B[0]=k;e:for(var de=0,U=B.length,Y=U>>>1;de<Y;){var re=2*(de+1)-1,pe=B[re],Re=re+1,He=B[Re];if(0>l(pe,k))Re<U&&0>l(He,pe)?(B[de]=He,B[Re]=k,de=Re):(B[de]=pe,B[re]=k,de=re);else if(Re<U&&0>l(He,k))B[de]=He,B[Re]=k,de=Re;else break e}}return V}function l(B,V){var k=B.sortIndex-V.sortIndex;return k!==0?k:B.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var m=[],p=[],g=1,_=null,v=3,S=!1,y=!1,T=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function P(B){for(var V=i(p);V!==null;){if(V.callback===null)r(p);else if(V.startTime<=B)r(p),V.sortIndex=V.expirationTime,e(m,V);else break;V=i(p)}}function L(B){if(T=!1,P(B),!y)if(i(m)!==null)y=!0,z||(z=!0,j());else{var V=i(p);V!==null&&ee(L,V.startTime-B)}}var z=!1,N=-1,Z=5,A=-1;function D(){return M?!0:!(s.unstable_now()-A<Z)}function H(){if(M=!1,z){var B=s.unstable_now();A=B;var V=!0;try{e:{y=!1,T&&(T=!1,O(N),N=-1),S=!0;var k=v;try{t:{for(P(B),_=i(m);_!==null&&!(_.expirationTime>B&&D());){var de=_.callback;if(typeof de=="function"){_.callback=null,v=_.priorityLevel;var U=de(_.expirationTime<=B);if(B=s.unstable_now(),typeof U=="function"){_.callback=U,P(B),V=!0;break t}_===i(m)&&r(m),P(B)}else r(m);_=i(m)}if(_!==null)V=!0;else{var Y=i(p);Y!==null&&ee(L,Y.startTime-B),V=!1}}break e}finally{_=null,v=k,S=!1}V=void 0}}finally{V?j():z=!1}}}var j;if(typeof C=="function")j=function(){C(H)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,ae=q.port2;q.port1.onmessage=H,j=function(){ae.postMessage(null)}}else j=function(){x(H,0)};function ee(B,V){N=x(function(){B(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var k=v;v=V;try{return B()}finally{v=k}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var k=v;v=B;try{return V()}finally{v=k}},s.unstable_scheduleCallback=function(B,V,k){var de=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?de+k:de):k=de,B){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=k+U,B={id:g++,callback:V,priorityLevel:B,startTime:k,expirationTime:U,sortIndex:-1},k>de?(B.sortIndex=k,e(p,B),i(m)===null&&B===i(p)&&(T?(O(N),N=-1):T=!0,ee(L,k-de))):(B.sortIndex=U,e(m,B),y||S||(y=!0,z||(z=!0,j()))),B},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(B){var V=v;return function(){var k=v;v=V;try{return B.apply(this,arguments)}finally{v=k}}}}(Md)),Md}var u_;function KM(){return u_||(u_=1,Sd.exports=jM()),Sd.exports}var Ed={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f_;function QM(){if(f_)return Ln;f_=1;var s=sp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Ln.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Ln.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Ln.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Ln.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ln.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Ln.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ln.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Ln.requestFormReset=function(m){r.d.r(m)},Ln.unstable_batchedUpdates=function(m,p){return m(p)},Ln.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Ln.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ln.version="19.1.0",Ln}var d_;function Rv(){if(d_)return Ed.exports;d_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ed.exports=QM(),Ed.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h_;function JM(){if(h_)return Wo;h_=1;var s=KM(),e=sp(),i=Rv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),t;if(h===o)return d(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var E=!1,R=u.child;R;){if(R===a){E=!0,a=u,o=h;break}if(R===o){E=!0,o=u,a=h;break}R=R.sibling}if(!E){for(R=h.child;R;){if(R===a){E=!0,a=h,o=u;break}if(R===o){E=!0,o=h,a=u;break}R=R.sibling}if(!E)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),C=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var q=Symbol.for("react.client.reference");function ae(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===q?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case y:return"Fragment";case M:return"Profiler";case T:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case S:return"Portal";case C:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:ae(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ae(t(n))}catch{}}return null}var ee=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},de=[],U=-1;function Y(t){return{current:t}}function re(t){0>U||(t.current=de[U],de[U]=null,U--)}function pe(t,n){U++,de[U]=t.current,t.current=n}var Re=Y(null),He=Y(null),te=Y(null),ve=Y(null);function Te(t,n){switch(pe(te,n),pe(He,t),pe(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Ng(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Ng(n),t=Og(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}re(Re),pe(Re,t)}function Je(){re(Re),re(He),re(te)}function Ge(t){t.memoizedState!==null&&pe(ve,t);var n=Re.current,a=Og(n,t.type);n!==a&&(pe(He,t),pe(Re,a))}function dt(t){He.current===t&&(re(Re),re(He)),ve.current===t&&(re(ve),zo._currentValue=k)}var jt=Object.prototype.hasOwnProperty,ht=s.unstable_scheduleCallback,St=s.unstable_cancelCallback,Mt=s.unstable_shouldYield,at=s.unstable_requestPaint,Tt=s.unstable_now,X=s.unstable_getCurrentPriorityLevel,qt=s.unstable_ImmediatePriority,Et=s.unstable_UserBlockingPriority,ye=s.unstable_NormalPriority,we=s.unstable_LowPriority,I=s.unstable_IdlePriority,b=s.log,K=s.unstable_setDisableYieldValue,me=null,ge=null;function he(t){if(typeof b=="function"&&K(t),ge&&typeof ge.setStrictMode=="function")try{ge.setStrictMode(me,t)}catch{}}var Pe=Math.clz32?Math.clz32:Ke,Ae=Math.log,Xe=Math.LN2;function Ke(t){return t>>>=0,t===0?32:31-(Ae(t)/Xe|0)|0}var Ee=256,De=4194304;function Ve(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function qe(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,E=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Ve(o):(E&=R,E!==0?u=Ve(E):a||(a=R&~t,a!==0&&(u=Ve(a))))):(R=o&~h,R!==0?u=Ve(R):E!==0?u=Ve(E):a||(a=o&~t,a!==0&&(u=Ve(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ot(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q(){var t=Ee;return Ee<<=1,(Ee&4194048)===0&&(Ee=256),t}function Ie(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Ce(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Be(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function be(t,n,a,o,u,h){var E=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,G=t.expirationTimes,se=t.hiddenUpdates;for(a=E&~a;0<a;){var _e=31-Pe(a),Se=1<<_e;R[_e]=0,G[_e]=-1;var le=se[_e];if(le!==null)for(se[_e]=null,_e=0;_e<le.length;_e++){var ce=le[_e];ce!==null&&(ce.lane&=-536870913)}a&=~Se}o!==0&&Me(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(E&~n))}function Me(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&4194090}function Le(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function nt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ot(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ct(){var t=V.p;return t!==0?t:(t=window.event,t===void 0?32:$g(t.type))}function si(t,n){var a=V.p;try{return V.p=t,n()}finally{V.p=a}}var gn=Math.random().toString(36).slice(2),_n="__reactFiber$"+gn,bn="__reactProps$"+gn,Ui="__reactContainer$"+gn,js="__reactEvents$"+gn,pl="__reactListeners$"+gn,ml="__reactHandles$"+gn,Li="__reactResources$"+gn,Ki="__reactMarker$"+gn;function Wr(t){delete t[_n],delete t[bn],delete t[js],delete t[pl],delete t[ml]}function Qi(t){var n=t[_n];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ui]||a[_n]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Bg(t);t!==null;){if(a=t[_n])return a;t=Bg(t)}return n}t=a,a=t.parentNode}return null}function gi(t){if(t=t[_n]||t[Ui]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Ua(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function _i(t){var n=t[Li];return n||(n=t[Li]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function tn(t){t[Ki]=!0}var Ks=new Set,gl={};function Ji(t,n){La(t,n),La(t+"Capture",n)}function La(t,n){for(gl[t]=n,t=0;t<n.length;t++)Ks.add(n[t])}var mu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_l={},vl={};function w(t){return jt.call(vl,t)?!0:jt.call(_l,t)?!1:mu.test(t)?vl[t]=!0:(_l[t]=!0,!1)}function J(t,n,a){if(w(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function ue(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function oe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}var ne,Ne;function ze(t){if(ne===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ne=n&&n[1]||"",Ne=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ne+t+Ne}var Oe=!1;function ke(t,n){if(!t||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var le=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){le=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){le=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),E=h[0],R=h[1];if(E&&R){var G=E.split(`
`),se=R.split(`
`);for(u=o=0;o<G.length&&!G[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===G.length||u===se.length)for(o=G.length-1,u=se.length-1;1<=o&&0<=u&&G[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(G[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||G[o]!==se[u]){var _e=`
`+G[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ze(a):""}function Ze(t){switch(t.tag){case 26:case 27:case 5:return ze(t.type);case 16:return ze("Lazy");case 13:return ze("Suspense");case 19:return ze("SuspenseList");case 0:case 15:return ke(t.type,!1);case 11:return ke(t.type.render,!1);case 1:return ke(t.type,!0);case 31:return ze("Activity");default:return""}}function $e(t){try{var n="";do n+=Ze(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function We(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Pt(t){var n=lt(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),o=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(E){o=""+E,h.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xt(t){t._valueTracker||(t._valueTracker=Pt(t))}function Kt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function wt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qe=/[\n"\\]/g;function st(t){return t.replace(Qe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function vt(t,n,a,o,u,h,E,R){t.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.type=E:t.removeAttribute("type"),n!=null?E==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+We(n)):t.value!==""+We(n)&&(t.value=""+We(n)):E!=="submit"&&E!=="reset"||t.removeAttribute("value"),n!=null?Ni(t,E,We(n)):a!=null?Ni(t,E,We(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+We(R):t.removeAttribute("name")}function Dn(t,n,a,o,u,h,E,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+We(a):"",n=n!=null?""+We(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(t.name=E)}function Ni(t,n,a){n==="number"&&wt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Na(t,n,a){if(n!=null&&(n=""+We(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+We(a):""}function It(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ee(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=We(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o)}function nn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Hn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Hn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Tn(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&vn(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&vn(t,h,n[h])}function dr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xl(t){return Wx.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var gu=null;function _u(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qr=null,Yr=null;function Pp(t){var n=gi(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(vt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(r(90));vt(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Kt(o)}break e;case"textarea":Na(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var vu=!1;function Ip(t,n,a){if(vu)return t(n,a);vu=!0;try{var o=t(n);return o}finally{if(vu=!1,(qr!==null||Yr!==null)&&(ac(),qr&&(n=qr,t=Yr,Yr=qr=null,Pp(n),t)))for(n=0;n<t.length;n++)Pp(t[n])}}function Qs(t,n){var a=t.stateNode;if(a===null)return null;var o=a[bn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(ea)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){xu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{xu=!1}var Oa=null,Su=null,Sl=null;function Fp(){if(Sl)return Sl;var t,n=Su,a=n.length,o,u="value"in Oa?Oa.value:Oa.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var E=a-t;for(o=1;o<=E&&n[a-o]===u[h-o];o++);return Sl=u.slice(t,1<o?1-o:void 0)}function Ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function El(){return!0}function Bp(){return!1}function Vn(t){function n(a,o,u,h,E){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?El:Bp,this.isPropagationStopped=Bp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),n}var hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Vn(hr),$s=g({},hr,{view:0,detail:0}),qx=Vn($s),Mu,Eu,eo,bl=g({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(Mu=t.screenX-eo.screenX,Eu=t.screenY-eo.screenY):Eu=Mu=0,eo=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Eu}}),zp=Vn(bl),Yx=g({},bl,{dataTransfer:0}),Zx=Vn(Yx),jx=g({},$s,{relatedTarget:0}),yu=Vn(jx),Kx=g({},hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Qx=Vn(Kx),Jx=g({},hr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$x=Vn(Jx),eS=g({},hr,{data:0}),Hp=Vn(eS),tS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=iS[t])?!!n[t]:!1}function bu(){return aS}var rS=g({},$s,{key:function(t){if(t.key){var n=tS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(t){return t.type==="keypress"?Ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sS=Vn(rS),oS=g({},bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Vn(oS),lS=g({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),cS=Vn(lS),uS=g({},hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fS=Vn(uS),dS=g({},bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hS=Vn(dS),pS=g({},hr,{newState:0,oldState:0}),mS=Vn(pS),gS=[9,13,27,32],Tu=ea&&"CompositionEvent"in window,to=null;ea&&"documentMode"in document&&(to=document.documentMode);var _S=ea&&"TextEvent"in window&&!to,Gp=ea&&(!Tu||to&&8<to&&11>=to),kp=" ",Xp=!1;function Wp(t,n){switch(t){case"keyup":return gS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function vS(t,n){switch(t){case"compositionend":return qp(n);case"keypress":return n.which!==32?null:(Xp=!0,kp);case"textInput":return t=n.data,t===kp&&Xp?null:t;default:return null}}function xS(t,n){if(Zr)return t==="compositionend"||!Tu&&Wp(t,n)?(t=Fp(),Sl=Su=Oa=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Gp&&n.locale!=="ko"?null:n.data;default:return null}}var SS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!SS[t.type]:n==="textarea"}function Zp(t,n,a,o){qr?Yr?Yr.push(o):Yr=[o]:qr=o,n=uc(n,"onChange"),0<n.length&&(a=new yl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var no=null,io=null;function MS(t){Cg(t,0)}function Tl(t){var n=Ua(t);if(Kt(n))return t}function jp(t,n){if(t==="change")return n}var Kp=!1;if(ea){var Au;if(ea){var Ru="oninput"in document;if(!Ru){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),Ru=typeof Qp.oninput=="function"}Au=Ru}else Au=!1;Kp=Au&&(!document.documentMode||9<document.documentMode)}function Jp(){no&&(no.detachEvent("onpropertychange",$p),io=no=null)}function $p(t){if(t.propertyName==="value"&&Tl(io)){var n=[];Zp(n,io,t,_u(t)),Ip(MS,n)}}function ES(t,n,a){t==="focusin"?(Jp(),no=n,io=a,no.attachEvent("onpropertychange",$p)):t==="focusout"&&Jp()}function yS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Tl(io)}function bS(t,n){if(t==="click")return Tl(n)}function TS(t,n){if(t==="input"||t==="change")return Tl(n)}function AS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:AS;function ao(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!jt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function em(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tm(t,n){var a=em(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=em(a)}}function nm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?nm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function im(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=wt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=wt(t.document)}return n}function Cu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var RS=ea&&"documentMode"in document&&11>=document.documentMode,jr=null,wu=null,ro=null,Du=!1;function am(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||jr==null||jr!==wt(o)||(o=jr,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=uc(wu,"onSelect"),0<o.length&&(n=new yl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=jr)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Kr={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},Uu={},rm={};ea&&(rm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function mr(t){if(Uu[t])return Uu[t];if(!Kr[t])return t;var n=Kr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in rm)return Uu[t]=n[a];return t}var sm=mr("animationend"),om=mr("animationiteration"),lm=mr("animationstart"),CS=mr("transitionrun"),wS=mr("transitionstart"),DS=mr("transitioncancel"),cm=mr("transitionend"),um=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function vi(t,n){um.set(t,n),Ji(n,[t])}var fm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=fm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:$e(n)},fm.set(t,n),n)}return{value:t,source:n,stack:$e(n)}}var li=[],Qr=0,Nu=0;function Al(){for(var t=Qr,n=Nu=Qr=0;n<t;){var a=li[n];li[n++]=null;var o=li[n];li[n++]=null;var u=li[n];li[n++]=null;var h=li[n];if(li[n++]=null,o!==null&&u!==null){var E=o.pending;E===null?u.next=u:(u.next=E.next,E.next=u),o.pending=u}h!==0&&dm(a,u,h)}}function Rl(t,n,a,o){li[Qr++]=t,li[Qr++]=n,li[Qr++]=a,li[Qr++]=o,Nu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Ou(t,n,a,o){return Rl(t,n,a,o),Cl(t)}function Jr(t,n){return Rl(t,null,null,n),Cl(t)}function dm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Cl(t){if(50<Uo)throw Uo=0,Vf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $r={};function US(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new US(t,n,a,o)}function Pu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function hm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function wl(t,n,a,o,u,h){var E=0;if(o=t,typeof t=="function")Pu(t)&&(E=1);else if(typeof t=="string")E=NM(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=Kn(31,a,n,u),t.elementType=A,t.lanes=h,t;case y:return gr(a.children,u,h,n);case T:E=8,u|=24;break;case M:return t=Kn(12,a,n,u|2),t.elementType=M,t.lanes=h,t;case L:return t=Kn(13,a,n,u),t.elementType=L,t.lanes=h,t;case z:return t=Kn(19,a,n,u),t.elementType=z,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case x:case C:E=10;break e;case O:E=9;break e;case P:E=11;break e;case N:E=14;break e;case Z:E=16,o=null;break e}E=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(E,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function gr(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Iu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Fu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var es=[],ts=0,Dl=null,Ul=0,ci=[],ui=0,_r=null,na=1,ia="";function vr(t,n){es[ts++]=Ul,es[ts++]=Dl,Dl=t,Ul=n}function pm(t,n,a){ci[ui++]=na,ci[ui++]=ia,ci[ui++]=_r,_r=t;var o=na;t=ia;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var h=32-Pe(n)+u;if(30<h){var E=u-u%5;h=(o&(1<<E)-1).toString(32),o>>=E,u-=E,na=1<<32-Pe(n)+u|a<<u|o,ia=h+t}else na=1<<h|a<<u|o,ia=t}function Bu(t){t.return!==null&&(vr(t,1),pm(t,1,0))}function zu(t){for(;t===Dl;)Dl=es[--ts],es[ts]=null,Ul=es[--ts],es[ts]=null;for(;t===_r;)_r=ci[--ui],ci[ui]=null,ia=ci[--ui],ci[ui]=null,na=ci[--ui],ci[ui]=null}var Fn=null,$t=null,Nt=!1,xr=null,Oi=!1,Hu=Error(r(519));function Sr(t){var n=Error(r(418,""));throw lo(oi(n,t)),Hu}function mm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[_n]=t,n[bn]=o,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)_t(No[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Dn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Xt(n);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),It(n,o.value,o.defaultValue,o.children),Xt(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Lg(n.textContent,a)?(o.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),o.onScroll!=null&&_t("scroll",n),o.onScrollEnd!=null&&_t("scrollend",n),o.onClick!=null&&(n.onclick=fc),n=!0):n=!1,n||Sr(t)}function gm(t){for(Fn=t.return;Fn;)switch(Fn.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Fn=Fn.return}}function so(t){if(t!==Fn)return!1;if(!Nt)return gm(t),Nt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||id(t.type,t.memoizedProps)),a=!a),a&&$t&&Sr(t),gm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){$t=Si(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}$t=null}}else n===27?(n=$t,Ka(t.type)?(t=od,od=null,$t=t):$t=n):$t=Fn?Si(t.stateNode.nextSibling):null;return!0}function oo(){$t=Fn=null,Nt=!1}function _m(){var t=xr;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),xr=null),t}function lo(t){xr===null?xr=[t]:xr.push(t)}var Vu=Y(null),Mr=null,aa=null;function Pa(t,n,a){pe(Vu,n._currentValue),n._currentValue=a}function ra(t){t._currentValue=Vu.current,re(Vu)}function Gu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ku(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var E=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var G=0;G<n.length;G++)if(R.context===n[G]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),Gu(h.return,a,t),o||(E=null);break e}h=R.next}}else if(u.tag===18){if(E=u.return,E===null)throw Error(r(341));E.lanes|=a,h=E.alternate,h!==null&&(h.lanes|=a),Gu(E,a,t),E=null}else E=u.child;if(E!==null)E.return=u;else for(E=u;E!==null;){if(E===t){E=null;break}if(u=E.sibling,u!==null){u.return=E.return,E=u;break}E=E.return}u=E}}function co(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var E=u.alternate;if(E===null)throw Error(r(387));if(E=E.memoizedProps,E!==null){var R=u.type;jn(u.pendingProps.value,E.value)||(t!==null?t.push(R):t=[R])}}else if(u===ve.current){if(E=u.alternate,E===null)throw Error(r(387));E.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&ku(n,t,a,o),n.flags|=262144}function Ll(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Er(t){Mr=t,aa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return vm(Mr,t)}function Nl(t,n){return Mr===null&&Er(t),vm(t,n)}function vm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(t===null)throw Error(r(308));aa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else aa=aa.next=n;return a}var LS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},NS=s.unstable_scheduleCallback,OS=s.unstable_NormalPriority,dn={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xu(){return{controller:new LS,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&NS(OS,function(){t.controller.abort()})}var fo=null,Wu=0,ns=0,is=null;function PS(t,n){if(fo===null){var a=fo=[];Wu=0,ns=Zf(),is={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Wu++,n.then(xm,xm),n}function xm(){if(--Wu===0&&fo!==null){is!==null&&(is.status="fulfilled");var t=fo;fo=null,ns=0,is=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function IS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Sm=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&PS(t,n),Sm!==null&&Sm(t,n)};var yr=Y(null);function qu(){var t=yr.current;return t!==null?t:Yt.pooledCache}function Ol(t,n){n===null?pe(yr,yr.current):pe(yr,n.pool)}function Mm(){var t=qu();return t===null?null:{parent:dn._currentValue,pool:t}}var ho=Error(r(460)),Em=Error(r(474)),Pl=Error(r(542)),Yu={then:function(){}};function ym(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Il(){}function bm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Il,Il),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Am(t),t;default:if(typeof n.status=="string")n.then(Il,Il);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Am(t),t}throw po=n,ho}}var po=null;function Tm(){if(po===null)throw Error(r(459));var t=po;return po=null,t}function Am(t){if(t===ho||t===Pl)throw Error(r(483))}var Ia=!1;function Zu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ju(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Cl(t),dm(t,null,a),n}return Rl(t,o,n,a),Cl(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Le(t,a)}}function Ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Qu=!1;function go(){if(Qu){var t=is;if(t!==null)throw t}}function _o(t,n,a,o){Qu=!1;var u=t.updateQueue;Ia=!1;var h=u.firstBaseUpdate,E=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var G=R,se=G.next;G.next=null,E===null?h=se:E.next=se,E=G;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,R=_e.lastBaseUpdate,R!==E&&(R===null?_e.firstBaseUpdate=se:R.next=se,_e.lastBaseUpdate=G))}if(h!==null){var Se=u.baseState;E=0,_e=se=G=null,R=h;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(bt&le)===le:(o&le)===le){le!==0&&le===ns&&(Qu=!0),_e!==null&&(_e=_e.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var it=t,et=R;le=n;var Gt=a;switch(et.tag){case 1:if(it=et.payload,typeof it=="function"){Se=it.call(Gt,Se,le);break e}Se=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=et.payload,le=typeof it=="function"?it.call(Gt,Se,le):it,le==null)break e;Se=g({},Se,le);break e;case 2:Ia=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},_e===null?(se=_e=ce,G=Se):_e=_e.next=ce,E|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);_e===null&&(G=Se),u.baseState=G,u.firstBaseUpdate=se,u.lastBaseUpdate=_e,h===null&&(u.shared.lanes=0),qa|=E,t.lanes=E,t.memoizedState=Se}}function Rm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Cm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Rm(a[t],n)}var as=Y(null),Fl=Y(0);function wm(t,n){t=da,pe(Fl,t),pe(as,n),da=t|n.baseLanes}function Ju(){pe(Fl,da),pe(as,as.current)}function $u(){da=Fl.current,re(as),re(Fl)}var za=0,pt=null,Ht=null,ln=null,Bl=!1,rs=!1,br=!1,zl=0,vo=0,ss=null,FS=0;function an(){throw Error(r(321))}function ef(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function tf(t,n,a,o,u,h){return za=h,pt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?d0:h0,br=!1,h=a(o,u),br=!1,rs&&(h=Um(n,a,o,u)),Dm(t),h}function Dm(t){B.H=Wl;var n=Ht!==null&&Ht.next!==null;if(za=0,ln=Ht=pt=null,Bl=!1,vo=0,ss=null,n)throw Error(r(300));t===null||xn||(t=t.dependencies,t!==null&&Ll(t)&&(xn=!0))}function Um(t,n,a,o){pt=t;var u=0;do{if(rs&&(ss=null),vo=0,rs=!1,25<=u)throw Error(r(301));if(u+=1,ln=Ht=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=XS,h=n(a,o)}while(rs);return h}function BS(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Ht!==null?Ht.memoizedState:null)!==t&&(pt.flags|=1024),n}function nf(){var t=zl!==0;return zl=0,t}function af(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function rf(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}za=0,ln=Ht=pt=null,rs=!1,vo=zl=0,ss=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?pt.memoizedState=ln=t:ln=ln.next=t,ln}function cn(){if(Ht===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Ht.next;var n=ln===null?pt.memoizedState:ln.next;if(n!==null)ln=n,Ht=t;else{if(t===null)throw pt.alternate===null?Error(r(467)):Error(r(310));Ht=t,t={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},ln===null?pt.memoizedState=ln=t:ln=ln.next=t}return ln}function sf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=vo;return vo+=1,ss===null&&(ss=[]),t=bm(ss,t,n),n=pt,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?d0:h0),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===C)return Un(t)}throw Error(r(438,String(t)))}function of(t){var n=null,a=pt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=sf(),pt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function sa(t,n){return typeof n=="function"?n(t):n}function Vl(t){var n=cn();return lf(n,Ht,t)}function lf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var E=u.next;u.next=h.next,h.next=E}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=E=null,G=null,se=n,_e=!1;do{var Se=se.lane&-536870913;if(Se!==se.lane?(bt&Se)===Se:(za&Se)===Se){var le=se.revertLane;if(le===0)G!==null&&(G=G.next={lane:0,revertLane:0,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),Se===ns&&(_e=!0);else if((za&le)===le){se=se.next,le===ns&&(_e=!0);continue}else Se={lane:0,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(R=G=Se,E=h):G=G.next=Se,pt.lanes|=le,qa|=le;Se=se.action,br&&a(h,Se),h=se.hasEagerState?se.eagerState:a(h,Se)}else le={lane:Se,revertLane:se.revertLane,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},G===null?(R=G=le,E=h):G=G.next=le,pt.lanes|=Se,qa|=Se;se=se.next}while(se!==null&&se!==n);if(G===null?E=h:G.next=R,!jn(h,t.memoizedState)&&(xn=!0,_e&&(a=is,a!==null)))throw a;t.memoizedState=h,t.baseState=E,t.baseQueue=G,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function cf(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var E=u=u.next;do h=t(h,E.action),E=E.next;while(E!==u);jn(h,n.memoizedState)||(xn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Lm(t,n,a){var o=pt,u=cn(),h=Nt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var E=!jn((Ht||u).memoizedState,a);E&&(u.memoizedState=a,xn=!0),u=u.queue;var R=Pm.bind(null,o,u,t);if(So(2048,8,R,[t]),u.getSnapshot!==n||E||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,os(9,Gl(),Om.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));h||(za&124)!==0||Nm(o,n,a)}return a}function Nm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=pt.updateQueue,n===null?(n=sf(),pt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Om(t,n,a,o){n.value=a,n.getSnapshot=o,Im(n)&&Fm(t)}function Pm(t,n,a){return a(function(){Im(n)&&Fm(t)})}function Im(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function Fm(t){var n=Jr(t,2);n!==null&&ti(n,t,2)}function uf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),br){he(!0);try{a()}finally{he(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},n}function Bm(t,n,a,o){return t.baseState=a,lf(t,Ht,typeof o=="function"?o:sa)}function zS(t,n,a,o,u){if(Xl(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,zm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function zm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,E={};B.T=E;try{var R=a(u,o),G=B.S;G!==null&&G(E,R),Hm(t,n,R)}catch(se){ff(t,n,se)}finally{B.T=h}}else try{h=a(u,o),Hm(t,n,h)}catch(se){ff(t,n,se)}}function Hm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Vm(t,n,o)},function(o){return ff(t,n,o)}):Vm(t,n,a)}function Vm(t,n,a){n.status="fulfilled",n.value=a,Gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,zm(t,a)))}function ff(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==o)}t.action=null}function Gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function km(t,n){return n}function Xm(t,n){if(Nt){var a=Yt.formState;if(a!==null){e:{var o=pt;if(Nt){if($t){t:{for(var u=$t,h=Oi;u.nodeType!==8;){if(!h){u=null;break t}if(u=Si(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){$t=Si(u.nextSibling),o=u.data==="F!";break e}}Sr(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:km,lastRenderedState:n},a.queue=o,a=c0.bind(null,pt,o),o.dispatch=a,o=uf(!1),h=gf.bind(null,pt,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=zS.bind(null,pt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Wm(t){var n=cn();return qm(n,Ht,t)}function qm(t,n,a){if(n=lf(t,n,km)[0],t=Vl(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(E){throw E===ho?Pl:E}else o=n;n=cn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pt.flags|=2048,os(9,Gl(),HS.bind(null,u,a),null)),[o,h,t]}function HS(t,n){t.action=n}function Ym(t){var n=cn(),a=Ht;if(a!==null)return qm(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function os(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=pt.updateQueue,n===null&&(n=sf(),pt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Gl(){return{destroy:void 0,resource:void 0}}function Zm(){return cn().memoizedState}function kl(t,n,a,o){var u=Gn();o=o===void 0?null:o,pt.flags|=t,u.memoizedState=os(1|n,Gl(),a,o)}function So(t,n,a,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ht!==null&&o!==null&&ef(o,Ht.memoizedState.deps)?u.memoizedState=os(n,h,a,o):(pt.flags|=t,u.memoizedState=os(1|n,h,a,o))}function jm(t,n){kl(8390656,8,t,n)}function Km(t,n){So(2048,8,t,n)}function Qm(t,n){return So(4,2,t,n)}function Jm(t,n){return So(4,4,t,n)}function $m(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function e0(t,n,a){a=a!=null?a.concat([t]):null,So(4,4,$m.bind(null,n,t),a)}function df(){}function t0(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&ef(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function n0(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&ef(n,o[1]))return o[0];if(o=t(),br){he(!0);try{t()}finally{he(!1)}}return a.memoizedState=[o,n],o}function hf(t,n,a){return a===void 0||(za&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=rg(),pt.lanes|=t,qa|=t,a)}function i0(t,n,a,o){return jn(a,n)?a:as.current!==null?(t=hf(t,a,o),jn(t,n)||(xn=!0),t):(za&42)===0?(xn=!0,t.memoizedState=a):(t=rg(),pt.lanes|=t,qa|=t,n)}function a0(t,n,a,o,u){var h=V.p;V.p=h!==0&&8>h?h:8;var E=B.T,R={};B.T=R,gf(t,!1,n,a);try{var G=u(),se=B.S;if(se!==null&&se(R,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var _e=IS(G,o);Mo(t,n,_e,ei(t))}else Mo(t,n,o,ei(t))}catch(Se){Mo(t,n,{then:function(){},status:"rejected",reason:Se},ei())}finally{V.p=h,B.T=E}}function VS(){}function pf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=r0(t).queue;a0(t,u,n,k,a===null?VS:function(){return s0(t),a(o)})}function r0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function s0(t){var n=r0(t).next.queue;Mo(t,n,{},ei())}function mf(){return Un(zo)}function o0(){return cn().memoizedState}function l0(){return cn().memoizedState}function GS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Fa(a);var o=Ba(n,t,a);o!==null&&(ti(o,n,a),mo(o,n,a)),n={cache:Xu()},t.payload=n;return}n=n.return}}function kS(t,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?u0(n,a):(a=Ou(t,n,a,o),a!==null&&(ti(a,t,o),f0(a,n,o)))}function c0(t,n,a){var o=ei();Mo(t,n,a,o)}function Mo(t,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))u0(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var E=n.lastRenderedState,R=h(E,a);if(u.hasEagerState=!0,u.eagerState=R,jn(R,E))return Rl(t,n,u,0),Yt===null&&Al(),!1}catch{}finally{}if(a=Ou(t,n,u,o),a!==null)return ti(a,t,o),f0(a,n,o),!0}return!1}function gf(t,n,a,o){if(o={lane:2,revertLane:Zf(),action:o,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(r(479))}else n=Ou(t,a,o,2),n!==null&&ti(n,t,2)}function Xl(t){var n=t.alternate;return t===pt||n!==null&&n===pt}function u0(t,n){rs=Bl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function f0(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Le(t,a)}}var Wl={readContext:Un,use:Hl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},d0={readContext:Un,use:Hl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:jm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,kl(4194308,4,$m.bind(null,n,t),a)},useLayoutEffect:function(t,n){return kl(4194308,4,t,n)},useInsertionEffect:function(t,n){kl(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(br){he(!0);try{t()}finally{he(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(br){he(!0);try{a(n)}finally{he(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=kS.bind(null,pt,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=uf(t);var n=t.queue,a=c0.bind(null,pt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:df,useDeferredValue:function(t,n){var a=Gn();return hf(a,t,n)},useTransition:function(){var t=uf(!1);return t=a0.bind(null,pt,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=pt,u=Gn();if(Nt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(bt&124)!==0||Nm(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Pm.bind(null,o,h,t),[t]),o.flags|=2048,os(9,Gl(),Om.bind(null,o,h,a,n),null),a},useId:function(){var t=Gn(),n=Yt.identifierPrefix;if(Nt){var a=ia,o=na;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=zl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=FS++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:mf,useFormState:Xm,useActionState:Xm,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gf.bind(null,pt,!0,a),a.dispatch=n,[t,n]},useMemoCache:of,useCacheRefresh:function(){return Gn().memoizedState=GS.bind(null,pt)}},h0={readContext:Un,use:Hl,useCallback:t0,useContext:Un,useEffect:Km,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:Vl,useRef:Zm,useState:function(){return Vl(sa)},useDebugValue:df,useDeferredValue:function(t,n){var a=cn();return i0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=Vl(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Lm,useId:o0,useHostTransitionStatus:mf,useFormState:Wm,useActionState:Wm,useOptimistic:function(t,n){var a=cn();return Bm(a,Ht,t,n)},useMemoCache:of,useCacheRefresh:l0},XS={readContext:Un,use:Hl,useCallback:t0,useContext:Un,useEffect:Km,useImperativeHandle:e0,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:n0,useReducer:cf,useRef:Zm,useState:function(){return cf(sa)},useDebugValue:df,useDeferredValue:function(t,n){var a=cn();return Ht===null?hf(a,t,n):i0(a,Ht.memoizedState,t,n)},useTransition:function(){var t=cf(sa)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Lm,useId:o0,useHostTransitionStatus:mf,useFormState:Ym,useActionState:Ym,useOptimistic:function(t,n){var a=cn();return Ht!==null?Bm(a,Ht,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:of,useCacheRefresh:l0},ls=null,Eo=0;function ql(t){var n=Eo;return Eo+=1,ls===null&&(ls=[]),bm(ls,t,n)}function yo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Yl(t,n){throw n.$$typeof===_?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function p0(t){var n=t._init;return n(t._payload)}function m0(t){function n($,W){if(t){var ie=$.deletions;ie===null?($.deletions=[W],$.flags|=16):ie.push(W)}}function a($,W){if(!t)return null;for(;W!==null;)n($,W),W=W.sibling;return null}function o($){for(var W=new Map;$!==null;)$.key!==null?W.set($.key,$):W.set($.index,$),$=$.sibling;return W}function u($,W){return $=ta($,W),$.index=0,$.sibling=null,$}function h($,W,ie){return $.index=ie,t?(ie=$.alternate,ie!==null?(ie=ie.index,ie<W?($.flags|=67108866,W):ie):($.flags|=67108866,W)):($.flags|=1048576,W)}function E($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,W,ie,xe){return W===null||W.tag!==6?(W=Iu(ie,$.mode,xe),W.return=$,W):(W=u(W,ie),W.return=$,W)}function G($,W,ie,xe){var Ye=ie.type;return Ye===y?_e($,W,ie.props.children,xe,ie.key):W!==null&&(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Z&&p0(Ye)===W.type)?(W=u(W,ie.props),yo(W,ie),W.return=$,W):(W=wl(ie.type,ie.key,ie.props,null,$.mode,xe),yo(W,ie),W.return=$,W)}function se($,W,ie,xe){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Fu(ie,$.mode,xe),W.return=$,W):(W=u(W,ie.children||[]),W.return=$,W)}function _e($,W,ie,xe,Ye){return W===null||W.tag!==7?(W=gr(ie,$.mode,xe,Ye),W.return=$,W):(W=u(W,ie),W.return=$,W)}function Se($,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Iu(""+W,$.mode,ie),W.return=$,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case v:return ie=wl(W.type,W.key,W.props,null,$.mode,ie),yo(ie,W),ie.return=$,ie;case S:return W=Fu(W,$.mode,ie),W.return=$,W;case Z:var xe=W._init;return W=xe(W._payload),Se($,W,ie)}if(ee(W)||j(W))return W=gr(W,$.mode,ie,null),W.return=$,W;if(typeof W.then=="function")return Se($,ql(W),ie);if(W.$$typeof===C)return Se($,Nl($,W),ie);Yl($,W)}return null}function le($,W,ie,xe){var Ye=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Ye!==null?null:R($,W,""+ie,xe);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:return ie.key===Ye?G($,W,ie,xe):null;case S:return ie.key===Ye?se($,W,ie,xe):null;case Z:return Ye=ie._init,ie=Ye(ie._payload),le($,W,ie,xe)}if(ee(ie)||j(ie))return Ye!==null?null:_e($,W,ie,xe,null);if(typeof ie.then=="function")return le($,W,ql(ie),xe);if(ie.$$typeof===C)return le($,W,Nl($,ie),xe);Yl($,ie)}return null}function ce($,W,ie,xe,Ye){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return $=$.get(ie)||null,R(W,$,""+xe,Ye);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case v:return $=$.get(xe.key===null?ie:xe.key)||null,G(W,$,xe,Ye);case S:return $=$.get(xe.key===null?ie:xe.key)||null,se(W,$,xe,Ye);case Z:var mt=xe._init;return xe=mt(xe._payload),ce($,W,ie,xe,Ye)}if(ee(xe)||j(xe))return $=$.get(ie)||null,_e(W,$,xe,Ye,null);if(typeof xe.then=="function")return ce($,W,ie,ql(xe),Ye);if(xe.$$typeof===C)return ce($,W,ie,Nl(W,xe),Ye);Yl(W,xe)}return null}function it($,W,ie,xe){for(var Ye=null,mt=null,je=W,tt=W=0,Mn=null;je!==null&&tt<ie.length;tt++){je.index>tt?(Mn=je,je=null):Mn=je.sibling;var Dt=le($,je,ie[tt],xe);if(Dt===null){je===null&&(je=Mn);break}t&&je&&Dt.alternate===null&&n($,je),W=h(Dt,W,tt),mt===null?Ye=Dt:mt.sibling=Dt,mt=Dt,je=Mn}if(tt===ie.length)return a($,je),Nt&&vr($,tt),Ye;if(je===null){for(;tt<ie.length;tt++)je=Se($,ie[tt],xe),je!==null&&(W=h(je,W,tt),mt===null?Ye=je:mt.sibling=je,mt=je);return Nt&&vr($,tt),Ye}for(je=o(je);tt<ie.length;tt++)Mn=ce(je,$,tt,ie[tt],xe),Mn!==null&&(t&&Mn.alternate!==null&&je.delete(Mn.key===null?tt:Mn.key),W=h(Mn,W,tt),mt===null?Ye=Mn:mt.sibling=Mn,mt=Mn);return t&&je.forEach(function(tr){return n($,tr)}),Nt&&vr($,tt),Ye}function et($,W,ie,xe){if(ie==null)throw Error(r(151));for(var Ye=null,mt=null,je=W,tt=W=0,Mn=null,Dt=ie.next();je!==null&&!Dt.done;tt++,Dt=ie.next()){je.index>tt?(Mn=je,je=null):Mn=je.sibling;var tr=le($,je,Dt.value,xe);if(tr===null){je===null&&(je=Mn);break}t&&je&&tr.alternate===null&&n($,je),W=h(tr,W,tt),mt===null?Ye=tr:mt.sibling=tr,mt=tr,je=Mn}if(Dt.done)return a($,je),Nt&&vr($,tt),Ye;if(je===null){for(;!Dt.done;tt++,Dt=ie.next())Dt=Se($,Dt.value,xe),Dt!==null&&(W=h(Dt,W,tt),mt===null?Ye=Dt:mt.sibling=Dt,mt=Dt);return Nt&&vr($,tt),Ye}for(je=o(je);!Dt.done;tt++,Dt=ie.next())Dt=ce(je,$,tt,Dt.value,xe),Dt!==null&&(t&&Dt.alternate!==null&&je.delete(Dt.key===null?tt:Dt.key),W=h(Dt,W,tt),mt===null?Ye=Dt:mt.sibling=Dt,mt=Dt);return t&&je.forEach(function(WM){return n($,WM)}),Nt&&vr($,tt),Ye}function Gt($,W,ie,xe){if(typeof ie=="object"&&ie!==null&&ie.type===y&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:e:{for(var Ye=ie.key;W!==null;){if(W.key===Ye){if(Ye=ie.type,Ye===y){if(W.tag===7){a($,W.sibling),xe=u(W,ie.props.children),xe.return=$,$=xe;break e}}else if(W.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===Z&&p0(Ye)===W.type){a($,W.sibling),xe=u(W,ie.props),yo(xe,ie),xe.return=$,$=xe;break e}a($,W);break}else n($,W);W=W.sibling}ie.type===y?(xe=gr(ie.props.children,$.mode,xe,ie.key),xe.return=$,$=xe):(xe=wl(ie.type,ie.key,ie.props,null,$.mode,xe),yo(xe,ie),xe.return=$,$=xe)}return E($);case S:e:{for(Ye=ie.key;W!==null;){if(W.key===Ye)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a($,W.sibling),xe=u(W,ie.children||[]),xe.return=$,$=xe;break e}else{a($,W);break}else n($,W);W=W.sibling}xe=Fu(ie,$.mode,xe),xe.return=$,$=xe}return E($);case Z:return Ye=ie._init,ie=Ye(ie._payload),Gt($,W,ie,xe)}if(ee(ie))return it($,W,ie,xe);if(j(ie)){if(Ye=j(ie),typeof Ye!="function")throw Error(r(150));return ie=Ye.call(ie),et($,W,ie,xe)}if(typeof ie.then=="function")return Gt($,W,ql(ie),xe);if(ie.$$typeof===C)return Gt($,W,Nl($,ie),xe);Yl($,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,W!==null&&W.tag===6?(a($,W.sibling),xe=u(W,ie),xe.return=$,$=xe):(a($,W),xe=Iu(ie,$.mode,xe),xe.return=$,$=xe),E($)):a($,W)}return function($,W,ie,xe){try{Eo=0;var Ye=Gt($,W,ie,xe);return ls=null,Ye}catch(je){if(je===ho||je===Pl)throw je;var mt=Kn(29,je,null,$.mode);return mt.lanes=xe,mt.return=$,mt}finally{}}}var cs=m0(!0),g0=m0(!1),fi=Y(null),Pi=null;function Ha(t){var n=t.alternate;pe(hn,hn.current&1),pe(fi,t),Pi===null&&(n===null||as.current!==null||n.memoizedState!==null)&&(Pi=t)}function _0(t){if(t.tag===22){if(pe(hn,hn.current),pe(fi,t),Pi===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Pi=t)}}else Va()}function Va(){pe(hn,hn.current),pe(fi,fi.current)}function oa(t){re(fi),Pi===t&&(Pi=null),re(hn)}var hn=Y(0);function Zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||sd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function _f(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var vf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(ti(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ei(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(ti(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(ti(n,t,a),mo(n,t,a))}};function v0(t,n,a,o,u,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,E):n.prototype&&n.prototype.isPureReactComponent?!ao(a,o)||!ao(u,h):!0}function x0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&vf.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var jl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function S0(t){jl(t)}function M0(t){console.error(t)}function E0(t){jl(t)}function Kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function y0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function xf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Kl(t,n)},a}function b0(t){return t=Fa(t),t.tag=3,t}function T0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){y0(n,a,o)}}var E=a.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(t.callback=function(){y0(n,a,o),typeof u!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function WS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&co(n,a,u,!0),a=fi.current,a!==null){switch(a.tag){case 13:return Pi===null?kf():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Wf(t,o,u)),!1;case 22:return a.flags|=65536,o===Yu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Wf(t,o,u)),!1}throw Error(r(435,a.tag))}return Wf(t,o,u),kf(),!1}if(Nt)return n=fi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(t=Error(r(422),{cause:o}),lo(oi(t,a)))):(o!==Hu&&(n=Error(r(423),{cause:o}),lo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=xf(t.stateNode,o,u),Ku(t,u),en!==4&&(en=2)),!1;var h=Error(r(520),{cause:o});if(h=oi(h,a),Do===null?Do=[h]:Do.push(h),en!==4&&(en=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=xf(a.stateNode,o,t),Ku(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ya===null||!Ya.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=b0(u),T0(u,t,a,o),Ku(a,u),!1}a=a.return}while(a!==null);return!1}var A0=Error(r(461)),xn=!1;function An(t,n,a,o){n.child=t===null?g0(n,null,a,o):cs(n,t.child,a,o)}function R0(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var E={};for(var R in o)R!=="ref"&&(E[R]=o[R])}else E=o;return Er(n),o=tf(t,n,a,E,h,u),R=nf(),t!==null&&!xn?(af(t,n,u),la(t,n,u)):(Nt&&R&&Bu(n),n.flags|=1,An(t,n,o,u),n.child)}function C0(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Pu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,w0(t,n,h,o,u)):(t=wl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Rf(t,u)){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:ao,a(E,o)&&t.ref===n.ref)return la(t,n,u)}return n.flags|=1,t=ta(h,o),t.ref=n.ref,t.return=n,n.child=t}function w0(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(ao(h,o)&&t.ref===n.ref)if(xn=!1,n.pendingProps=o=h,Rf(t,u))(t.flags&131072)!==0&&(xn=!0);else return n.lanes=t.lanes,la(t,n,u)}return Sf(t,n,a,o,u)}function D0(t,n,a){var o=n.pendingProps,u=o.children,h=t!==null?t.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,t!==null){for(u=n.child=t.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return U0(t,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ol(n,h!==null?h.cachePool:null),h!==null?wm(n,h):Ju(),_0(n);else return n.lanes=n.childLanes=536870912,U0(t,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(Ol(n,h.cachePool),wm(n,h),Va(),n.memoizedState=null):(t!==null&&Ol(n,null),Ju(),Va());return An(t,n,u,a),n.child}function U0(t,n,a,o){var u=qu();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},t!==null&&Ol(n,null),Ju(),_0(n),t!==null&&co(t,n,o,!0),null}function Ql(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Sf(t,n,a,o,u){return Er(n),a=tf(t,n,a,o,void 0,u),o=nf(),t!==null&&!xn?(af(t,n,u),la(t,n,u)):(Nt&&o&&Bu(n),n.flags|=1,An(t,n,a,u),n.child)}function L0(t,n,a,o,u,h){return Er(n),n.updateQueue=null,a=Um(n,o,a,u),Dm(t),o=nf(),t!==null&&!xn?(af(t,n,h),la(t,n,h)):(Nt&&o&&Bu(n),n.flags|=1,An(t,n,a,h),n.child)}function N0(t,n,a,o,u){if(Er(n),n.stateNode===null){var h=$r,E=a.contextType;typeof E=="object"&&E!==null&&(h=Un(E)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=vf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Zu(n),E=a.contextType,h.context=typeof E=="object"&&E!==null?Un(E):$r,h.state=n.memoizedState,E=a.getDerivedStateFromProps,typeof E=="function"&&(_f(n,a,E,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&vf.enqueueReplaceState(h,h.state,null),_o(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,G=Tr(a,R);h.props=G;var se=h.context,_e=a.contextType;E=$r,typeof _e=="object"&&_e!==null&&(E=Un(_e));var Se=a.getDerivedStateFromProps;_e=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,_e||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||se!==E)&&x0(n,h,o,E),Ia=!1;var le=n.memoizedState;h.state=le,_o(n,o,h,u),go(),se=n.memoizedState,R||le!==se||Ia?(typeof Se=="function"&&(_f(n,a,Se,o),se=n.memoizedState),(G=Ia||v0(n,a,G,o,le,se,E))?(_e||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),h.props=o,h.state=se,h.context=E,o=G):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ju(t,n),E=n.memoizedProps,_e=Tr(a,E),h.props=_e,Se=n.pendingProps,le=h.context,se=a.contextType,G=$r,typeof se=="object"&&se!==null&&(G=Un(se)),R=a.getDerivedStateFromProps,(se=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==Se||le!==G)&&x0(n,h,o,G),Ia=!1,le=n.memoizedState,h.state=le,_o(n,o,h,u),go();var ce=n.memoizedState;E!==Se||le!==ce||Ia||t!==null&&t.dependencies!==null&&Ll(t.dependencies)?(typeof R=="function"&&(_f(n,a,R,o),ce=n.memoizedState),(_e=Ia||v0(n,a,_e,o,le,ce,G)||t!==null&&t.dependencies!==null&&Ll(t.dependencies))?(se||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,G),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,G)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=G,o=_e):(typeof h.componentDidUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ql(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=cs(n,t.child,null,u),n.child=cs(n,null,a,u)):An(t,n,a,u),n.memoizedState=h.state,t=n.child):t=la(t,n,u),t}function O0(t,n,a,o){return oo(),n.flags|=256,An(t,n,a,o),n.child}var Mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ef(t){return{baseLanes:t,cachePool:Mm()}}function yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function P0(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,E;if((E=h)||(E=t!==null&&t.memoizedState===null?!1:(hn.current&2)!==0),E&&(u=!0,n.flags&=-129),E=(n.flags&32)!==0,n.flags&=-33,t===null){if(Nt){if(u?Ha(n):Va(),Nt){var R=$t,G;if(G=R){e:{for(G=R,R=Oi;G.nodeType!==8;){if(!R){R=null;break e}if(G=Si(G.nextSibling),G===null){R=null;break e}}R=G}R!==null?(n.memoizedState={dehydrated:R,treeContext:_r!==null?{id:na,overflow:ia}:null,retryLane:536870912,hydrationErrors:null},G=Kn(18,null,null,0),G.stateNode=R,G.return=n,n.child=G,Fn=n,$t=null,G=!0):G=!1}G||Sr(n)}if(R=n.memoizedState,R!==null&&(R=R.dehydrated,R!==null))return sd(R)?n.lanes=32:n.lanes=536870912,null;oa(n)}return R=o.children,o=o.fallback,u?(Va(),u=n.mode,R=Jl({mode:"hidden",children:R},u),o=gr(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,u=n.child,u.memoizedState=Ef(a),u.childLanes=yf(t,E,a),n.memoizedState=Mf,o):(Ha(n),bf(n,R))}if(G=t.memoizedState,G!==null&&(R=G.dehydrated,R!==null)){if(h)n.flags&256?(Ha(n),n.flags&=-257,n=Tf(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),u=o.fallback,R=n.mode,o=Jl({mode:"visible",children:o.children},R),u=gr(u,R,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,cs(n,t.child,null,a),o=n.child,o.memoizedState=Ef(a),o.childLanes=yf(t,E,a),n.memoizedState=Mf,n=u);else if(Ha(n),sd(R)){if(E=R.nextSibling&&R.nextSibling.dataset,E)var se=E.dgst;E=se,o=Error(r(419)),o.stack="",o.digest=E,lo({value:o,source:null,stack:null}),n=Tf(t,n,a)}else if(xn||co(t,n,a,!1),E=(a&t.childLanes)!==0,xn||E){if(E=Yt,E!==null&&(o=a&-a,o=(o&42)!==0?1:nt(o),o=(o&(E.suspendedLanes|a))!==0?0:o,o!==0&&o!==G.retryLane))throw G.retryLane=o,Jr(t,o),ti(E,t,o),A0;R.data==="$?"||kf(),n=Tf(t,n,a)}else R.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=G.treeContext,$t=Si(R.nextSibling),Fn=n,Nt=!0,xr=null,Oi=!1,t!==null&&(ci[ui++]=na,ci[ui++]=ia,ci[ui++]=_r,na=t.id,ia=t.overflow,_r=n),n=bf(n,o.children),n.flags|=4096);return n}return u?(Va(),u=o.fallback,R=n.mode,G=t.child,se=G.sibling,o=ta(G,{mode:"hidden",children:o.children}),o.subtreeFlags=G.subtreeFlags&65011712,se!==null?u=ta(se,u):(u=gr(u,R,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,R=t.child.memoizedState,R===null?R=Ef(a):(G=R.cachePool,G!==null?(se=dn._currentValue,G=G.parent!==se?{parent:se,pool:se}:G):G=Mm(),R={baseLanes:R.baseLanes|a,cachePool:G}),u.memoizedState=R,u.childLanes=yf(t,E,a),n.memoizedState=Mf,o):(Ha(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(E=n.deletions,E===null?(n.deletions=[t],n.flags|=16):E.push(t)),n.child=a,n.memoizedState=null,a)}function bf(t,n){return n=Jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Jl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Tf(t,n,a){return cs(n,t.child,null,a),t=bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function I0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Gu(t.return,n,a)}function Af(t,n,a,o,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function F0(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(An(t,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I0(t,a,n);else if(t.tag===19)I0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}o&=1}switch(pe(hn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Af(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Af(n,!0,a,null,h);break;case"together":Af(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function la(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),qa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(co(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Rf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Ll(t)))}function qS(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Pa(n,dn,t.memoizedState.cache),oo();break;case 27:case 5:Ge(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?P0(t,n,a):(Ha(n),t=la(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(co(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return F0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),pe(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,D0(t,n,a);case 24:Pa(n,dn,t.memoizedState.cache)}return la(t,n,a)}function B0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)xn=!0;else{if(!Rf(t,a)&&(n.flags&128)===0)return xn=!1,qS(t,n,a);xn=(t.flags&131072)!==0}else xn=!1,Nt&&(n.flags&1048576)!==0&&pm(n,Ul,n.index);switch(n.lanes=0,n.tag){case 16:e:{t=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Pu(o)?(t=Tr(o,t),n.tag=1,n=N0(null,n,o,t,a)):(n.tag=0,n=Sf(null,n,o,t,a));else{if(o!=null){if(u=o.$$typeof,u===P){n.tag=11,n=R0(null,n,o,t,a);break e}else if(u===N){n.tag=14,n=C0(null,n,o,t,a);break e}}throw n=ae(o)||o,Error(r(306,n,""))}}return n;case 0:return Sf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),N0(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,ju(t,n),_o(n,o,null,a);var E=n.memoizedState;if(o=E.cache,Pa(n,dn,o),o!==h.cache&&ku(n,[dn],a,!0),go(),o=E.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:E.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=O0(t,n,o,a);break e}else if(o!==u){u=oi(Error(r(424)),n),lo(u),n=O0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($t=Si(t.firstChild),Fn=n,Nt=!0,xr=null,Oi=!0,a=g0(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(oo(),o===u){n=la(t,n,a);break e}An(t,n,o,a)}n=n.child}return n;case 26:return Ql(t,n),t===null?(a=Gg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Nt||(a=n.type,t=n.pendingProps,o=dc(te.current).createElement(a),o[_n]=n,o[bn]=t,Cn(o,a,t),tn(o),n.stateNode=o):n.memoizedState=Gg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&Nt&&(o=n.stateNode=zg(n.type,n.pendingProps,te.current),Fn=n,Oi=!0,u=$t,Ka(n.type)?(od=u,$t=Si(o.firstChild)):$t=u),An(t,n,n.pendingProps.children,a),Ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Nt&&((u=o=$t)&&(o=SM(o,n.type,n.pendingProps,Oi),o!==null?(n.stateNode=o,Fn=n,$t=Si(o.firstChild),Oi=!1,u=!0):u=!1),u||Sr(n)),Ge(n),u=n.type,h=n.pendingProps,E=t!==null?t.memoizedProps:null,o=h.children,id(u,h)?o=null:E!==null&&id(u,E)&&(n.flags|=32),n.memoizedState!==null&&(u=tf(t,n,BS,null,null,a),zo._currentValue=u),Ql(t,n),An(t,n,o,a),n.child;case 6:return t===null&&Nt&&((t=a=$t)&&(a=MM(a,n.pendingProps,Oi),a!==null?(n.stateNode=a,Fn=n,$t=null,t=!0):t=!1),t||Sr(n)),null;case 13:return P0(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=cs(n,null,o,a):An(t,n,o,a),n.child;case 11:return R0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),An(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Er(n),u=Un(u),o=o(u),n.flags|=1,An(t,n,o,a),n.child;case 14:return C0(t,n,n.type,n.pendingProps,a);case 15:return w0(t,n,n.type,n.pendingProps,a);case 19:return F0(t,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},t===null?(a=Jl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ta(t.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return D0(t,n,a);case 24:return Er(n),o=Un(dn),t===null?(u=qu(),u===null&&(u=Yt,h=Xu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Zu(n),Pa(n,dn,u)):((t.lanes&a)!==0&&(ju(t,n),_o(n,null,null,a),go()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,dn,o)):(o=h.cache,Pa(n,dn,o),o!==u.cache&&ku(n,[dn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ca(t){t.flags|=4}function z0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Yg(n)){if(n=fi.current,n!==null&&((bt&4194048)===bt?Pi!==null:(bt&62914560)!==bt&&(bt&536870912)===0||n!==Pi))throw po=Yu,Em;t.flags|=8192}}function $l(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ie():536870912,t.lanes|=n,hs|=n)}function bo(t,n){if(!Nt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function YS(t,n,a){var o=n.pendingProps;switch(zu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ra(dn),Je(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(so(n)?ca(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_m())),Jt(n),null;case 26:return a=n.memoizedState,t===null?(ca(n),a!==null?(Jt(n),z0(n,a)):(Jt(n),n.flags&=-16777217)):a?a!==t.memoizedState?(ca(n),Jt(n),z0(n,a)):(Jt(n),n.flags&=-16777217):(t.memoizedProps!==o&&ca(n),Jt(n),n.flags&=-16777217),null;case 27:dt(n),a=te.current;var u=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=Re.current,so(n)?mm(n):(t=zg(u,o,a),n.stateNode=t,ca(n))}return Jt(n),null;case 5:if(dt(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(t=Re.current,so(n))mm(n);else{switch(u=dc(te.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?t.multiple=!0:o.size&&(t.size=o.size);break;default:t=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}t[_n]=n,t[bn]=o;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=t;e:switch(Cn(t,a,o),a){case"button":case"input":case"select":case"textarea":t=!!o.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ca(n)}}return Jt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ca(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,so(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Fn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[_n]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Lg(t.nodeValue,a)),t||Sr(n)}else t=dc(t).createTextNode(o),t[_n]=n,n.stateNode=t}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=so(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[_n]=n}else oo(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=_m(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oa(n),n):(oa(n),null)}if(oa(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,t=t!==null&&t.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),$l(n,n.updateQueue),Jt(n),null;case 4:return Je(),t===null&&Jf(n.stateNode.containerInfo),Jt(n),null;case 10:return ra(n.type),Jt(n),null;case 19:if(re(hn),u=n.memoizedState,u===null)return Jt(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)bo(u,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Zl(t),h!==null){for(n.flags|=128,bo(u,!1),t=h.updateQueue,n.updateQueue=t,$l(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)hm(a,t),a=a.sibling;return pe(hn,hn.current&1|2),n.child}t=t.sibling}u.tail!==null&&Tt()>nc&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304)}else{if(!o)if(t=Zl(h),t!==null){if(n.flags|=128,o=!0,t=t.updateQueue,n.updateQueue=t,$l(n,t),bo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Nt)return Jt(n),null}else 2*Tt()-u.renderingStartTime>nc&&a!==536870912&&(n.flags|=128,o=!0,bo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(t=u.last,t!==null?t.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Tt(),n.sibling=null,t=hn.current,pe(hn,o?t&1|2:t&1),n):(Jt(n),null);case 22:case 23:return oa(n),$u(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&$l(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&re(yr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ra(dn),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function ZS(t,n){switch(zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ra(dn),Je(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 13:if(oa(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));oo()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return re(hn),null;case 4:return Je(),null;case 10:return ra(n.type),null;case 22:case 23:return oa(n),$u(),t!==null&&re(yr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ra(dn),null;case 25:return null;default:return null}}function H0(t,n){switch(zu(n),n.tag){case 3:ra(dn),Je();break;case 26:case 27:case 5:dt(n);break;case 4:Je();break;case 13:oa(n);break;case 19:re(hn);break;case 10:ra(n.type);break;case 22:case 23:oa(n),$u(),t!==null&&re(yr);break;case 24:ra(dn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,E=a.inst;o=h(),E.destroy=o}a=a.next}while(a!==u)}}catch(R){Wt(n,n.return,R)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var E=o.inst,R=E.destroy;if(R!==void 0){E.destroy=void 0,u=n;var G=a,se=R;try{se()}catch(_e){Wt(u,G,_e)}}}o=o.next}while(o!==h)}}catch(_e){Wt(n,n.return,_e)}}function V0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Cm(n,a)}catch(o){Wt(t,t.return,o)}}}function G0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Wt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Wt(t,n,u)}}function Ii(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function k0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Cf(t,n,a){try{var o=t.stateNode;mM(o,t.type,a,n),o[bn]=n}catch(u){Wt(t,t.return,u)}}function X0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||X0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=fc));else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Df(t,n,a),t=t.sibling;t!==null;)Df(t,n,a),t=t.sibling}function ec(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ec(t,n,a),t=t.sibling;t!==null;)ec(t,n,a),t=t.sibling}function W0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[_n]=t,n[bn]=a}catch(h){Wt(t,t.return,h)}}var ua=!1,rn=!1,Uf=!1,q0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function jS(t,n){if(t=t.containerInfo,td=vc,t=im(t),Cu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,R=-1,G=-1,se=0,_e=0,Se=t,le=null;t:for(;;){for(var ce;Se!==a||u!==0&&Se.nodeType!==3||(R=E+u),Se!==h||o!==0&&Se.nodeType!==3||(G=E+o),Se.nodeType===3&&(E+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)le=Se,Se=ce;for(;;){if(Se===t)break t;if(le===a&&++se===u&&(R=E),le===h&&++_e===o&&(G=E),(ce=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=ce}a=R===-1||G===-1?null:{start:R,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(nd={focusedElem:t,selectionRange:a},vc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var it=Tr(a.type,u,a.elementType===a.type);t=o.getSnapshotBeforeUpdate(it,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(et){Wt(a,a.return,et)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)rd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":rd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Y0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ka(t,a),o&4&&To(5,a);break;case 1:if(ka(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(E){Wt(a,a.return,E)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(E){Wt(a,a.return,E)}}o&64&&V0(a),o&512&&Ao(a,a.return);break;case 3:if(ka(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Cm(t,n)}catch(E){Wt(a,a.return,E)}}break;case 27:n===null&&o&4&&W0(a);case 26:case 5:ka(t,a),n===null&&o&4&&k0(a),o&512&&Ao(a,a.return);break;case 12:ka(t,a);break;case 13:ka(t,a),o&4&&K0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=aM.bind(null,a),EM(t,a))));break;case 22:if(o=a.memoizedState!==null||ua,!o){n=n!==null&&n.memoizedState!==null||rn,u=ua;var h=rn;ua=o,(rn=n)&&!h?Xa(t,a,(a.subtreeFlags&8772)!==0):ka(t,a),ua=u,rn=h}break;case 30:break;default:ka(t,a)}}function Z0(t){var n=t.alternate;n!==null&&(t.alternate=null,Z0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Wr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,kn=!1;function fa(t,n,a){for(a=a.child;a!==null;)j0(t,n,a),a=a.sibling}function j0(t,n,a){if(ge&&typeof ge.onCommitFiberUnmount=="function")try{ge.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:rn||Ii(a,n),fa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ii(a,n);var o=Qt,u=kn;Ka(a.type)&&(Qt=a.stateNode,kn=!1),fa(t,n,a),Po(a.stateNode),Qt=o,kn=u;break;case 5:rn||Ii(a,n);case 6:if(o=Qt,u=kn,Qt=null,fa(t,n,a),Qt=o,kn=u,Qt!==null)if(kn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(h){Wt(a,n,h)}else try{Qt.removeChild(a.stateNode)}catch(h){Wt(a,n,h)}break;case 18:Qt!==null&&(kn?(t=Qt,Fg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ko(t)):Fg(Qt,a.stateNode));break;case 4:o=Qt,u=kn,Qt=a.stateNode.containerInfo,kn=!0,fa(t,n,a),Qt=o,kn=u;break;case 0:case 11:case 14:case 15:rn||Ga(2,a,n),rn||Ga(4,a,n),fa(t,n,a);break;case 1:rn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&G0(a,n,o)),fa(t,n,a);break;case 21:fa(t,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,fa(t,n,a),rn=o;break;default:fa(t,n,a)}}function K0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ko(t)}catch(a){Wt(n,n.return,a)}}function KS(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new q0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new q0),n;default:throw Error(r(435,t.tag))}}function Lf(t,n){var a=KS(t);n.forEach(function(o){var u=rM.bind(null,t,o);a.has(o)||(a.add(o),o.then(u,u))})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,E=n,R=E;e:for(;R!==null;){switch(R.tag){case 27:if(Ka(R.type)){Qt=R.stateNode,kn=!1;break e}break;case 5:Qt=R.stateNode,kn=!1;break e;case 3:case 4:Qt=R.stateNode.containerInfo,kn=!0;break e}R=R.return}if(Qt===null)throw Error(r(160));j0(h,E,u),Qt=null,kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Q0(n,t),n=n.sibling}var xi=null;function Q0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(Ga(3,t,t.return),To(3,t),Ga(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(rn||a===null||Ii(a,a.return)),o&64&&ua&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=xi;if(Qn(n,t),Jn(t),o&512&&(rn||a===null||Ii(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Ki]||h[_n]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,a),h[_n]=t,tn(h),o=h;break e;case"link":var E=Wg("link","href",u).get(o+(a.href||""));if(E){for(var R=0;R<E.length;R++)if(h=E[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){E.splice(R,1);break t}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;case"meta":if(E=Wg("meta","content",u).get(o+(a.content||""))){for(R=0;R<E.length;R++)if(h=E[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){E.splice(R,1);break t}}h=u.createElement(o),Cn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[_n]=t,tn(h),o=h}t.stateNode=o}else qg(u,t.type,t.stateNode);else t.stateNode=Xg(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?qg(u,t.type,t.stateNode):Xg(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Cf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(rn||a===null||Ii(a,a.return)),a!==null&&o&4&&Cf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(rn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{nn(u,"")}catch(ce){Wt(t,t.return,ce)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Cf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Uf=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ce){Wt(t,t.return,ce)}}break;case 3:if(mc=null,u=xi,xi=hc(n.containerInfo),Qn(n,t),xi=u,Jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ko(n.containerInfo)}catch(ce){Wt(t,t.return,ce)}Uf&&(Uf=!1,J0(t));break;case 4:o=xi,xi=hc(t.stateNode.containerInfo),Qn(n,t),Jn(t),xi=o;break;case 12:Qn(n,t),Jn(t);break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bf=Tt()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lf(t,o)));break;case 22:u=t.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,se=ua,_e=rn;if(ua=se||u,rn=_e||G,Qn(n,t),rn=_e,ua=se,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||ua||rn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(h=G.stateNode,u)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{R=G.stateNode;var Se=G.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(ce){Wt(G,G.return,ce)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(ce){Wt(G,G.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Lf(t,a))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Lf(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(X0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=wf(t);ec(t,h,u);break;case 5:var E=a.stateNode;a.flags&32&&(nn(E,""),a.flags&=-33);var R=wf(t);ec(t,R,E);break;case 3:case 4:var G=a.stateNode.containerInfo,se=wf(t);Df(t,se,G);break;default:throw Error(r(161))}}catch(_e){Wt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function J0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;J0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ka(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Y0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Ar(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&G0(n,n.return,a),Ar(n);break;case 27:Po(n.stateNode);case 26:case 5:Ii(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function Xa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,E=h.flags;switch(h.tag){case 0:case 11:case 15:Xa(u,h,a),To(4,h);break;case 1:if(Xa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Wt(o,o.return,se)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Rm(G[u],R)}catch(se){Wt(o,o.return,se)}}a&&E&64&&V0(h),Ao(h,h.return);break;case 27:W0(h);case 26:case 5:Xa(u,h,a),a&&o===null&&E&4&&k0(h),Ao(h,h.return);break;case 12:Xa(u,h,a);break;case 13:Xa(u,h,a),a&&E&4&&K0(u,h);break;case 22:h.memoizedState===null&&Xa(u,h,a),Ao(h,h.return);break;case 30:break;default:Xa(u,h,a)}n=n.sibling}}function Nf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Of(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Fi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$0(t,n,a,o),n=n.sibling}function $0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Fi(t,n,a,o),u&2048&&To(9,n);break;case 1:Fi(t,n,a,o);break;case 3:Fi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Fi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,E=h.id,R=h.onPostCommit;typeof R=="function"&&R(E,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(G){Wt(n,n.return,G)}}else Fi(t,n,a,o);break;case 13:Fi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,E=n.alternate,n.memoizedState!==null?h._visibility&2?Fi(t,n,a,o):Ro(t,n):h._visibility&2?Fi(t,n,a,o):(h._visibility|=2,us(t,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&Nf(E,n);break;case 24:Fi(t,n,a,o),u&2048&&Of(n.alternate,n);break;default:Fi(t,n,a,o)}}function us(t,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=t,E=n,R=a,G=o,se=E.flags;switch(E.tag){case 0:case 11:case 15:us(h,E,R,G,u),To(8,E);break;case 23:break;case 22:var _e=E.stateNode;E.memoizedState!==null?_e._visibility&2?us(h,E,R,G,u):Ro(h,E):(_e._visibility|=2,us(h,E,R,G,u)),u&&se&2048&&Nf(E.alternate,E);break;case 24:us(h,E,R,G,u),u&&se&2048&&Of(E.alternate,E);break;default:us(h,E,R,G,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Nf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Of(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var Co=8192;function fs(t){if(t.subtreeFlags&Co)for(t=t.child;t!==null;)eg(t),t=t.sibling}function eg(t){switch(t.tag){case 26:fs(t),t.flags&Co&&t.memoizedState!==null&&PM(xi,t.memoizedState,t.memoizedProps);break;case 5:fs(t);break;case 3:case 4:var n=xi;xi=hc(t.stateNode.containerInfo),fs(t),xi=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Co,Co=16777216,fs(t),Co=n):fs(t));break;default:fs(t)}}function tg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,ig(o,t)}tg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(t),t=t.sibling}function ng(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,tc(t)):wo(t);break;default:wo(t)}}function tc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,ig(o,t)}tg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),tc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,tc(n));break;default:tc(n)}t=t.sibling}}function ig(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Z0(o),o===a){Sn=null;break e}if(u!==null){u.return=h,Sn=u;break e}Sn=h}}}var QS={getCacheForType:function(t){var n=Un(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},JS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Yt=null,gt=null,bt=0,Bt=0,$n=null,Wa=!1,ds=!1,Pf=!1,da=0,en=0,qa=0,Rr=0,If=0,di=0,hs=0,Do=null,Xn=null,Ff=!1,Bf=0,nc=1/0,ic=null,Ya=null,Rn=0,Za=null,ps=null,ms=0,zf=0,Hf=null,ag=null,Uo=0,Vf=null;function ei(){if((Ft&2)!==0&&bt!==0)return bt&-bt;if(B.T!==null){var t=ns;return t!==0?t:Zf()}return Ct()}function rg(){di===0&&(di=(bt&536870912)===0||Nt?Q():536870912);var t=fi.current;return t!==null&&(t.flags|=32),di}function ti(t,n,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(gs(t,0),ja(t,bt,di,!1)),Be(t,a),((Ft&2)===0||t!==Yt)&&(t===Yt&&((Ft&2)===0&&(Rr|=a),en===4&&ja(t,bt,di,!1)),Bi(t))}function sg(t,n,a){if((Ft&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?tM(t,n):Xf(t,n,!0),h=o;do{if(u===0){ds&&!o&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!$S(a)){u=Xf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var E=0;else E=t.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){n=E;e:{var R=t;u=Do;var G=R.current.memoizedState.isDehydrated;if(G&&(gs(R,E).flags|=256),E=Xf(R,E,!1),E!==2){if(Pf&&!G){R.errorRecoveryDisabledLanes|=h,Rr|=h,u=4;break e}h=Xn,Xn=u,h!==null&&(Xn===null?Xn=h:Xn.push.apply(Xn,h))}u=E}if(h=!1,u!==2)continue}}if(u===1){gs(t,0),ja(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(o,n,di,!Wa);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bf+300-Tt(),10<u)){if(ja(o,n,di,!Wa),qe(o,0,!0)!==0)break e;o.timeoutHandle=Pg(og.bind(null,o,a,Xn,ic,Ff,n,di,Rr,hs,Wa,h,2,-0,0),u);break e}og(o,a,Xn,ic,Ff,n,di,Rr,hs,Wa,h,0,-0,0)}}break}while(!0);Bi(t)}function og(t,n,a,o,u,h,E,R,G,se,_e,Se,le,ce){if(t.timeoutHandle=-1,Se=n.subtreeFlags,(Se&8192||(Se&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:OM},eg(n),Se=IM(),Se!==null)){t.cancelPendingCommit=Se(pg.bind(null,t,n,h,a,o,u,E,R,G,_e,1,le,ce)),ja(t,h,E,!se);return}pg(t,n,h,a,o,u,E,R,G)}function $S(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!jn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,o){n&=~If,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Pe(u),E=1<<h;o[h]=-1,u&=~E}a!==0&&Me(t,a,n)}function ac(){return(Ft&6)===0?(Lo(0),!1):!0}function Gf(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,aa=Mr=null,rf(t),ls=null,Eo=0,t=gt;for(;t!==null;)H0(t.alternate,t),t=t.return;gt=null}}function gs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_M(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Gf(),Yt=t,gt=a=ta(t.current,null),bt=n,Bt=0,$n=null,Wa=!1,ds=Ue(t,n),Pf=!1,hs=di=If=Rr=qa=en=0,Xn=Do=null,Ff=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),h=1<<u;n|=t[u],o&=~h}return da=n,Al(),a}function lg(t,n){pt=null,B.H=Wl,n===ho||n===Pl?(n=Tm(),Bt=3):n===Em?(n=Tm(),Bt=4):Bt=n===A0?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,gt===null&&(en=1,Kl(t,oi(n,t.current)))}function cg(){var t=B.H;return B.H=Wl,t===null?Wl:t}function ug(){var t=B.A;return B.A=QS,t}function kf(){en=4,Wa||(bt&4194048)!==bt&&fi.current!==null||(ds=!0),(qa&134217727)===0&&(Rr&134217727)===0||Yt===null||ja(Yt,bt,di,!1)}function Xf(t,n,a){var o=Ft;Ft|=2;var u=cg(),h=ug();(Yt!==t||bt!==n)&&(ic=null,gs(t,n)),n=!1;var E=en;e:do try{if(Bt!==0&&gt!==null){var R=gt,G=$n;switch(Bt){case 8:Gf(),E=6;break e;case 3:case 2:case 9:case 6:fi.current===null&&(n=!0);var se=Bt;if(Bt=0,$n=null,_s(t,R,G,se),a&&ds){E=0;break e}break;default:se=Bt,Bt=0,$n=null,_s(t,R,G,se)}}eM(),E=en;break}catch(_e){lg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,aa=Mr=null,Ft=o,B.H=u,B.A=h,gt===null&&(Yt=null,bt=0,Al()),E}function eM(){for(;gt!==null;)fg(gt)}function tM(t,n){var a=Ft;Ft|=2;var o=cg(),u=ug();Yt!==t||bt!==n?(ic=null,nc=Tt()+500,gs(t,n)):ds=Ue(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var h=$n;t:switch(Bt){case 1:Bt=0,$n=null,_s(t,n,h,1);break;case 2:case 9:if(ym(h)){Bt=0,$n=null,dg(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Bi(t)},h.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:ym(h)?(Bt=0,$n=null,dg(n)):(Bt=0,$n=null,_s(t,n,h,7));break;case 5:var E=null;switch(gt.tag){case 26:E=gt.memoizedState;case 5:case 27:var R=gt;if(!E||Yg(E)){Bt=0,$n=null;var G=R.sibling;if(G!==null)gt=G;else{var se=R.return;se!==null?(gt=se,rc(se)):gt=null}break t}}Bt=0,$n=null,_s(t,n,h,5);break;case 6:Bt=0,$n=null,_s(t,n,h,6);break;case 8:Gf(),en=6;break e;default:throw Error(r(462))}}nM();break}catch(_e){lg(t,_e)}while(!0);return aa=Mr=null,B.H=o,B.A=u,Ft=a,gt!==null?0:(Yt=null,bt=0,Al(),en)}function nM(){for(;gt!==null&&!Mt();)fg(gt)}function fg(t){var n=B0(t.alternate,t,da);t.memoizedProps=t.pendingProps,n===null?rc(t):gt=n}function dg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=L0(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=L0(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:rf(n);default:H0(a,n),n=gt=hm(n,da),n=B0(a,n,da)}t.memoizedProps=t.pendingProps,n===null?rc(t):gt=n}function _s(t,n,a,o){aa=Mr=null,rf(n),ls=null,Eo=0;var u=n.return;try{if(WS(t,u,n,a,bt)){en=1,Kl(t,oi(a,t.current)),gt=null;return}}catch(h){if(u!==null)throw gt=u,h;en=1,Kl(t,oi(a,t.current)),gt=null;return}n.flags&32768?(Nt||o===1?t=!0:ds||(bt&536870912)!==0?t=!1:(Wa=t=!0,(o===2||o===9||o===3||o===6)&&(o=fi.current,o!==null&&o.tag===13&&(o.flags|=16384))),hg(n,t)):rc(n)}function rc(t){var n=t;do{if((n.flags&32768)!==0){hg(n,Wa);return}t=n.return;var a=YS(n.alternate,n,da);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);en===0&&(en=5)}function hg(t,n){do{var a=ZS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);en=6,gt=null}function pg(t,n,a,o,u,h,E,R,G){t.cancelPendingCommit=null;do sc();while(Rn!==0);if((Ft&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Nu,be(t,a,h,E,R,G),t===Yt&&(gt=Yt=null,bt=0),ps=n,Za=t,ms=a,zf=h,Hf=u,ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,sM(ye,function(){return xg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=V.p,V.p=2,E=Ft,Ft|=4;try{jS(t,n,a)}finally{Ft=E,V.p=u,B.T=o}}Rn=1,mg(),gg(),_g()}}function mg(){if(Rn===1){Rn=0;var t=Za,n=ps,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{Q0(n,t);var h=nd,E=im(t.containerInfo),R=h.focusedElem,G=h.selectionRange;if(E!==R&&R&&R.ownerDocument&&nm(R.ownerDocument.documentElement,R)){if(G!==null&&Cu(R)){var se=G.start,_e=G.end;if(_e===void 0&&(_e=se),"selectionStart"in R)R.selectionStart=se,R.selectionEnd=Math.min(_e,R.value.length);else{var Se=R.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var ce=le.getSelection(),it=R.textContent.length,et=Math.min(G.start,it),Gt=G.end===void 0?et:Math.min(G.end,it);!ce.extend&&et>Gt&&(E=Gt,Gt=et,et=E);var $=tm(R,et),W=tm(R,Gt);if($&&W&&(ce.rangeCount!==1||ce.anchorNode!==$.node||ce.anchorOffset!==$.offset||ce.focusNode!==W.node||ce.focusOffset!==W.offset)){var ie=Se.createRange();ie.setStart($.node,$.offset),ce.removeAllRanges(),et>Gt?(ce.addRange(ie),ce.extend(W.node,W.offset)):(ie.setEnd(W.node,W.offset),ce.addRange(ie))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var xe=Se[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}vc=!!td,nd=td=null}finally{Ft=u,V.p=o,B.T=a}}t.current=n,Rn=2}}function gg(){if(Rn===2){Rn=0;var t=Za,n=ps,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=V.p;V.p=2;var u=Ft;Ft|=4;try{Y0(t,n.alternate,n)}finally{Ft=u,V.p=o,B.T=a}}Rn=3}}function _g(){if(Rn===4||Rn===3){Rn=0,at();var t=Za,n=ps,a=ms,o=ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,ps=Za=null,vg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ya=null),Ot(a),n=n.stateNode,ge&&typeof ge.onCommitFiberRoot=="function")try{ge.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=V.p,V.p=2,B.T=null;try{for(var h=t.onRecoverableError,E=0;E<o.length;E++){var R=o[E];h(R.value,{componentStack:R.stack})}}finally{B.T=n,V.p=u}}(ms&3)!==0&&sc(),Bi(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Vf?Uo++:(Uo=0,Vf=t):Uo=0,Lo(0)}}function vg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function sc(t){return mg(),gg(),_g(),xg()}function xg(){if(Rn!==5)return!1;var t=Za,n=zf;zf=0;var a=Ot(ms),o=B.T,u=V.p;try{V.p=32>a?32:a,B.T=null,a=Hf,Hf=null;var h=Za,E=ms;if(Rn=0,ps=Za=null,ms=0,(Ft&6)!==0)throw Error(r(331));var R=Ft;if(Ft|=4,ng(h.current),$0(h,h.current,E,a),Ft=R,Lo(0,!1),ge&&typeof ge.onPostCommitFiberRoot=="function")try{ge.onPostCommitFiberRoot(me,h)}catch{}return!0}finally{V.p=u,B.T=o,vg(t,n)}}function Sg(t,n,a){n=oi(a,n),n=xf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(Be(t,2),Bi(t))}function Wt(t,n,a){if(t.tag===3)Sg(t,t,a);else for(;n!==null;){if(n.tag===3){Sg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ya===null||!Ya.has(o))){t=oi(a,t),a=b0(2),o=Ba(n,a,2),o!==null&&(T0(a,o,n,t),Be(o,2),Bi(o));break}}n=n.return}}function Wf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new JS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Pf=!0,u.add(a),t=iM.bind(null,t,n,a),n.then(t,t))}function iM(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(bt&a)===a&&(en===4||en===3&&(bt&62914560)===bt&&300>Tt()-Bf?(Ft&2)===0&&gs(t,0):If|=a,hs===bt&&(hs=0)),Bi(t)}function Mg(t,n){n===0&&(n=Ie()),t=Jr(t,n),t!==null&&(Be(t,n),Bi(t))}function aM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Mg(t,a)}function rM(t,n){var a=0;switch(t.tag){case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Mg(t,a)}function sM(t,n){return ht(t,n)}var oc=null,vs=null,qf=!1,lc=!1,Yf=!1,Cr=0;function Bi(t){t!==vs&&t.next===null&&(vs===null?oc=vs=t:vs=vs.next=t),lc=!0,qf||(qf=!0,lM())}function Lo(t,n){if(!Yf&&lc){Yf=!0;do for(var a=!1,o=oc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var E=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Pe(42|t)+1)-1,h&=u&~(E&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Tg(o,h))}else h=bt,h=qe(o,o===Yt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ue(o,h)||(a=!0,Tg(o,h));o=o.next}while(a);Yf=!1}}function oM(){Eg()}function Eg(){lc=qf=!1;var t=0;Cr!==0&&(gM()&&(t=Cr),Cr=0);for(var n=Tt(),a=null,o=oc;o!==null;){var u=o.next,h=yg(o,n);h===0?(o.next=null,a===null?oc=u:a.next=u,u===null&&(vs=a)):(a=o,(t!==0||(h&3)!==0)&&(lc=!0)),o=u}Lo(t)}function yg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var E=31-Pe(h),R=1<<E,G=u[E];G===-1?((R&a)===0||(R&o)!==0)&&(u[E]=ot(R,n)):G<=n&&(t.expiredLanes|=R),h&=~R}if(n=Yt,a=bt,a=qe(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&St(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&St(o),Ot(a)){case 2:case 8:a=Et;break;case 32:a=ye;break;case 268435456:a=I;break;default:a=ye}return o=bg.bind(null,t),a=ht(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&St(o),t.callbackPriority=2,t.callbackNode=null,2}function bg(t,n){if(Rn!==0&&Rn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(sc()&&t.callbackNode!==a)return null;var o=bt;return o=qe(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(sg(t,o,n),yg(t,Tt()),t.callbackNode!=null&&t.callbackNode===a?bg.bind(null,t):null)}function Tg(t,n){if(sc())return null;sg(t,n,!0)}function lM(){vM(function(){(Ft&6)!==0?ht(qt,oM):Eg()})}function Zf(){return Cr===0&&(Cr=Q()),Cr}function Ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xl(""+t)}function Rg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function cM(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Ag((u[bn]||null).action),E=o.submitter;E&&(n=(n=E[bn]||null)?Ag(n.formAction):E.getAttribute("formAction"),n!==null&&(h=n,E=null));var R=new yl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Cr!==0){var G=E?Rg(u,E):new FormData(u);pf(a,{pending:!0,data:G,method:u.method,action:h},null,G)}}else typeof h=="function"&&(R.preventDefault(),G=E?Rg(u,E):new FormData(u),pf(a,{pending:!0,data:G,method:u.method,action:h},h,G))},currentTarget:u}]})}}for(var jf=0;jf<Lu.length;jf++){var Kf=Lu[jf],uM=Kf.toLowerCase(),fM=Kf[0].toUpperCase()+Kf.slice(1);vi(uM,"on"+fM)}vi(sm,"onAnimationEnd"),vi(om,"onAnimationIteration"),vi(lm,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(CS,"onTransitionRun"),vi(wS,"onTransitionStart"),vi(DS,"onTransitionCancel"),vi(cm,"onTransitionEnd"),La("onMouseEnter",["mouseout","mouseover"]),La("onMouseLeave",["mouseout","mouseover"]),La("onPointerEnter",["pointerout","pointerover"]),La("onPointerLeave",["pointerout","pointerover"]),Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function Cg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var E=o.length-1;0<=E;E--){var R=o[E],G=R.instance,se=R.currentTarget;if(R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=se;try{h(u)}catch(_e){jl(_e)}u.currentTarget=null,h=G}else for(E=0;E<o.length;E++){if(R=o[E],G=R.instance,se=R.currentTarget,R=R.listener,G!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=se;try{h(u)}catch(_e){jl(_e)}u.currentTarget=null,h=G}}}}function _t(t,n){var a=n[js];a===void 0&&(a=n[js]=new Set);var o=t+"__bubble";a.has(o)||(wg(n,t,2,!1),a.add(o))}function Qf(t,n,a){var o=0;n&&(o|=4),wg(a,t,o,n)}var cc="_reactListening"+Math.random().toString(36).slice(2);function Jf(t){if(!t[cc]){t[cc]=!0,Ks.forEach(function(a){a!=="selectionchange"&&(dM.has(a)||Qf(a,!1,t),Qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[cc]||(n[cc]=!0,Qf("selectionchange",!1,n))}}function wg(t,n,a,o){switch($g(n)){case 2:var u=zM;break;case 8:u=HM;break;default:u=dd}a=u.bind(null,n,a,t),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function $f(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var R=o.stateNode.containerInfo;if(R===u)break;if(E===4)for(E=o.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===u)return;E=E.return}for(;R!==null;){if(E=Qi(R),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){o=h=E;continue e}R=R.parentNode}}o=o.return}Ip(function(){var se=h,_e=_u(a),Se=[];e:{var le=um.get(t);if(le!==void 0){var ce=yl,it=t;switch(t){case"keypress":if(Ml(a)===0)break e;case"keydown":case"keyup":ce=sS;break;case"focusin":it="focus",ce=yu;break;case"focusout":it="blur",ce=yu;break;case"beforeblur":case"afterblur":ce=yu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=cS;break;case sm:case om:case lm:ce=Qx;break;case cm:ce=fS;break;case"scroll":case"scrollend":ce=qx;break;case"wheel":ce=hS;break;case"copy":case"cut":case"paste":ce=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Vp;break;case"toggle":case"beforetoggle":ce=mS}var et=(n&4)!==0,Gt=!et&&(t==="scroll"||t==="scrollend"),$=et?le!==null?le+"Capture":null:le;et=[];for(var W=se,ie;W!==null;){var xe=W;if(ie=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ie===null||$===null||(xe=Qs(W,$),xe!=null&&et.push(Oo(W,xe,ie))),Gt)break;W=W.return}0<et.length&&(le=new ce(le,it,null,a,_e),Se.push({event:le,listeners:et}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==gu&&(it=a.relatedTarget||a.fromElement)&&(Qi(it)||it[Ui]))break e;if((ce||le)&&(le=_e.window===_e?_e:(le=_e.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(it=a.relatedTarget||a.toElement,ce=se,it=it?Qi(it):null,it!==null&&(Gt=c(it),et=it.tag,it!==Gt||et!==5&&et!==27&&et!==6)&&(it=null)):(ce=null,it=se),ce!==it)){if(et=zp,xe="onMouseLeave",$="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(et=Vp,xe="onPointerLeave",$="onPointerEnter",W="pointer"),Gt=ce==null?le:Ua(ce),ie=it==null?le:Ua(it),le=new et(xe,W+"leave",ce,a,_e),le.target=Gt,le.relatedTarget=ie,xe=null,Qi(_e)===se&&(et=new et($,W+"enter",it,a,_e),et.target=ie,et.relatedTarget=Gt,xe=et),Gt=xe,ce&&it)t:{for(et=ce,$=it,W=0,ie=et;ie;ie=xs(ie))W++;for(ie=0,xe=$;xe;xe=xs(xe))ie++;for(;0<W-ie;)et=xs(et),W--;for(;0<ie-W;)$=xs($),ie--;for(;W--;){if(et===$||$!==null&&et===$.alternate)break t;et=xs(et),$=xs($)}et=null}else et=null;ce!==null&&Dg(Se,le,ce,et,!1),it!==null&&Gt!==null&&Dg(Se,Gt,it,et,!0)}}e:{if(le=se?Ua(se):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Ye=jp;else if(Yp(le))if(Kp)Ye=TS;else{Ye=yS;var mt=ES}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?se&&dr(se.elementType)&&(Ye=jp):Ye=bS;if(Ye&&(Ye=Ye(t,se))){Zp(Se,Ye,a,_e);break e}mt&&mt(t,le,se),t==="focusout"&&se&&le.type==="number"&&se.memoizedProps.value!=null&&Ni(le,"number",le.value)}switch(mt=se?Ua(se):window,t){case"focusin":(Yp(mt)||mt.contentEditable==="true")&&(jr=mt,wu=se,ro=null);break;case"focusout":ro=wu=jr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,am(Se,a,_e);break;case"selectionchange":if(RS)break;case"keydown":case"keyup":am(Se,a,_e)}var je;if(Tu)e:{switch(t){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Zr?Wp(t,a)&&(tt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Gp&&a.locale!=="ko"&&(Zr||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Zr&&(je=Fp()):(Oa=_e,Su="value"in Oa?Oa.value:Oa.textContent,Zr=!0)),mt=uc(se,tt),0<mt.length&&(tt=new Hp(tt,t,null,a,_e),Se.push({event:tt,listeners:mt}),je?tt.data=je:(je=qp(a),je!==null&&(tt.data=je)))),(je=_S?vS(t,a):xS(t,a))&&(tt=uc(se,"onBeforeInput"),0<tt.length&&(mt=new Hp("onBeforeInput","beforeinput",null,a,_e),Se.push({event:mt,listeners:tt}),mt.data=je)),cM(Se,t,se,a,_e)}Cg(Se,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function uc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Qs(t,a),u!=null&&o.unshift(Oo(t,u,h)),u=Qs(t,n),u!=null&&o.push(Oo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function xs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Dg(t,n,a,o,u){for(var h=n._reactName,E=[];a!==null&&a!==o;){var R=a,G=R.alternate,se=R.stateNode;if(R=R.tag,G!==null&&G===o)break;R!==5&&R!==26&&R!==27||se===null||(G=se,u?(se=Qs(a,h),se!=null&&E.unshift(Oo(a,se,G))):u||(se=Qs(a,h),se!=null&&E.push(Oo(a,se,G)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var hM=/\r\n?/g,pM=/\u0000|\uFFFD/g;function Ug(t){return(typeof t=="string"?t:""+t).replace(hM,`
`).replace(pM,"")}function Lg(t,n){return n=Ug(n),Ug(t)===n}function fc(){}function Vt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||nn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&nn(t,""+o);break;case"className":ue(t,"class",o);break;case"tabIndex":ue(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":ue(t,a,o);break;case"style":Tn(t,o,h);break;case"data":if(n!=="object"){ue(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=fc);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":_t("beforetoggle",t),_t("toggle",t),J(t,"popover",o);break;case"xlinkActuate":oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":oe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":oe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":oe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":oe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":J(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$i.get(a)||a,J(t,a,o))}}function ed(t,n,a,o,u,h){switch(a){case"style":Tn(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?nn(t,o):(typeof o=="number"||typeof o=="bigint")&&nn(t,""+o);break;case"onScroll":o!=null&&_t("scroll",t);break;case"onScrollEnd":o!=null&&_t("scrollend",t);break;case"onClick":o!=null&&(t.onclick=fc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!gl.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[bn]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):J(t,a,o)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",t),_t("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var E=a[h];if(E!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,h,E,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":_t("invalid",t);var R=h=E=u=null,G=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":E=_e;break;case"checked":G=_e;break;case"defaultChecked":se=_e;break;case"value":h=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Vt(t,n,o,_e,a,null)}}Dn(t,h,R,G,se,E,u,!1),Xt(t);return;case"select":_t("invalid",t),o=E=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":E=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=h,a=E,t.multiple=!!o,n!=null?on(t,!!o,n,!1):a!=null&&on(t,!!o,a,!0);return;case"textarea":_t("invalid",t),h=u=o=null;for(E in a)if(a.hasOwnProperty(E)&&(R=a[E],R!=null))switch(E){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:Vt(t,n,E,R,a,null)}It(t,o,u,h),Xt(t);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(o=a[G],o!=null))switch(G){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Vt(t,n,G,o,a,null)}return;case"dialog":_t("beforetoggle",t),_t("toggle",t),_t("cancel",t),_t("close",t);break;case"iframe":case"object":_t("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)_t(No[o],t);break;case"image":_t("error",t),_t("load",t);break;case"details":_t("toggle",t);break;case"embed":case"source":case"link":_t("error",t),_t("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,se,o,a,null)}return;default:if(dr(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&ed(t,n,_e,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function mM(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,E=null,R=null,G=null,se=null,_e=null;for(ce in a){var Se=a[ce];if(a.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":G=Se;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,Se)}}for(var le in o){var ce=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(ce!=null||Se!=null))switch(le){case"type":h=ce;break;case"name":u=ce;break;case"checked":se=ce;break;case"defaultChecked":_e=ce;break;case"value":E=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==Se&&Vt(t,n,le,ce,o,Se)}}vt(t,E,R,G,se,_e,h,u);return;case"select":ce=E=R=le=null;for(h in a)if(G=a[h],a.hasOwnProperty(h)&&G!=null)switch(h){case"value":break;case"multiple":ce=G;default:o.hasOwnProperty(h)||Vt(t,n,h,null,o,G)}for(u in o)if(h=o[u],G=a[u],o.hasOwnProperty(u)&&(h!=null||G!=null))switch(u){case"value":le=h;break;case"defaultValue":R=h;break;case"multiple":E=h;default:h!==G&&Vt(t,n,u,h,o,G)}n=R,a=E,o=ce,le!=null?on(t,!!a,le,!1):!!o!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(E in o)if(u=o[E],h=a[E],o.hasOwnProperty(E)&&(u!=null||h!=null))switch(E){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Vt(t,n,E,u,o,h)}Na(t,le,ce);return;case"option":for(var it in a)if(le=a[it],a.hasOwnProperty(it)&&le!=null&&!o.hasOwnProperty(it))switch(it){case"selected":t.selected=!1;break;default:Vt(t,n,it,null,o,le)}for(G in o)if(le=o[G],ce=a[G],o.hasOwnProperty(G)&&le!==ce&&(le!=null||ce!=null))switch(G){case"selected":t.selected=le&&typeof le!="function"&&typeof le!="symbol";break;default:Vt(t,n,G,le,o,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)le=a[et],a.hasOwnProperty(et)&&le!=null&&!o.hasOwnProperty(et)&&Vt(t,n,et,null,o,le);for(se in o)if(le=o[se],ce=a[se],o.hasOwnProperty(se)&&le!==ce&&(le!=null||ce!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:Vt(t,n,se,le,o,ce)}return;default:if(dr(n)){for(var Gt in a)le=a[Gt],a.hasOwnProperty(Gt)&&le!==void 0&&!o.hasOwnProperty(Gt)&&ed(t,n,Gt,void 0,o,le);for(_e in o)le=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||le===ce||le===void 0&&ce===void 0||ed(t,n,_e,le,o,ce);return}}for(var $ in a)le=a[$],a.hasOwnProperty($)&&le!=null&&!o.hasOwnProperty($)&&Vt(t,n,$,null,o,le);for(Se in o)le=o[Se],ce=a[Se],!o.hasOwnProperty(Se)||le===ce||le==null&&ce==null||Vt(t,n,Se,le,o,ce)}var td=null,nd=null;function dc(t){return t.nodeType===9?t:t.ownerDocument}function Ng(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Og(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function id(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ad=null;function gM(){var t=window.event;return t&&t.type==="popstate"?t===ad?!1:(ad=t,!0):(ad=null,!1)}var Pg=typeof setTimeout=="function"?setTimeout:void 0,_M=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,vM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch(xM)}:Pg;function xM(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function Fg(t,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var E=t.ownerDocument;if(a&1&&Po(E.documentElement),a&2&&Po(E.body),a&4)for(a=E.head,Po(a),E=a.firstChild;E;){var R=E.nextSibling,G=E.nodeName;E[Ki]||G==="SCRIPT"||G==="STYLE"||G==="LINK"&&E.rel.toLowerCase()==="stylesheet"||a.removeChild(E),E=R}}if(u===0){t.removeChild(h),ko(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);ko(n)}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),Wr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function SM(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ki])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function MM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function EM(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var od=null;function Bg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function zg(t,n,a){switch(n=dc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Wr(t)}var hi=new Map,Hg=new Set;function hc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=V.d;V.d={f:yM,r:bM,D:TM,C:AM,L:RM,m:CM,X:DM,S:wM,M:UM};function yM(){var t=ha.f(),n=ac();return t||n}function bM(t){var n=gi(t);n!==null&&n.tag===5&&n.type==="form"?s0(n):ha.r(t)}var Ss=typeof document>"u"?null:document;function Vg(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Hg.has(u)||(Hg.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),tn(n),o.head.appendChild(n)))}}function TM(t){ha.D(t),Vg("dns-prefetch",t,null)}function AM(t,n){ha.C(t,n),Vg("preconnect",t,n)}function RM(t,n,a){ha.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(t)+'"]';var h=u;switch(n){case"style":h=Ms(t);break;case"script":h=Es(t)}hi.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(h))||n==="script"&&o.querySelector(Fo(h))||(n=o.createElement("link"),Cn(n,"link",t),tn(n),o.head.appendChild(n)))}}function CM(t,n){ha.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(o)+'"][href="'+st(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Es(t)}if(!hi.has(h)&&(t=g({rel:"modulepreload",href:t},n),hi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(h)))return}o=a.createElement("link"),Cn(o,"link",t),tn(o),a.head.appendChild(o)}}}function wM(t,n,a){ha.S(t,n,a);var o=Ss;if(o&&t){var u=_i(o).hoistableStyles,h=Ms(t);n=n||"default";var E=u.get(h);if(!E){var R={loading:0,preload:null};if(E=o.querySelector(Io(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(h))&&ld(t,a);var G=E=o.createElement("link");tn(G),Cn(G,"link",t),G._p=new Promise(function(se,_e){G.onload=se,G.onerror=_e}),G.addEventListener("load",function(){R.loading|=1}),G.addEventListener("error",function(){R.loading|=2}),R.loading|=4,pc(E,n,o)}E={type:"stylesheet",instance:E,count:1,state:R},u.set(h,E)}}}function DM(t,n){ha.X(t,n);var a=Ss;if(a&&t){var o=_i(a).hoistableScripts,u=Es(t),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(t=g({src:t,async:!0},n),(n=hi.get(u))&&cd(t,n),h=a.createElement("script"),tn(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function UM(t,n){ha.M(t,n);var a=Ss;if(a&&t){var o=_i(a).hoistableScripts,u=Es(t),h=o.get(u);h||(h=a.querySelector(Fo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&cd(t,n),h=a.createElement("script"),tn(h),Cn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Gg(t,n,a,o){var u=(u=te.current)?hc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=_i(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var h=_i(u).hoistableStyles,E=h.get(t);if(E||(u=u.ownerDocument||u,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,E),(h=u.querySelector(Io(t)))&&!h._p&&(E.instance=h,E.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),h||LM(u,t,a,E.state))),n&&o===null)throw Error(r(528,""));return E}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Es(a),a=_i(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+st(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function kg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function LM(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),tn(n),t.head.appendChild(n))}function Es(t){return'[src="'+st(t)+'"]'}function Fo(t){return"script[async]"+t}function Xg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(o)return n.instance=o,tn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),tn(o),Cn(o,"style",u),pc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Ms(a.href);var h=t.querySelector(Io(u));if(h)return n.state.loading|=4,n.instance=h,tn(h),h;o=kg(a),(u=hi.get(u))&&ld(o,u),h=(t.ownerDocument||t).createElement("link"),tn(h);var E=h;return E._p=new Promise(function(R,G){E.onload=R,E.onerror=G}),Cn(h,"link",o),n.state.loading|=4,pc(h,a.precedence,t),n.instance=h;case"script":return h=Es(a.src),(u=t.querySelector(Fo(h)))?(n.instance=u,tn(u),u):(o=a,(u=hi.get(h))&&(o=g({},a),cd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),tn(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,pc(o,a.precedence,t));return n.instance}function pc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,E=0;E<o.length;E++){var R=o[E];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ld(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var mc=null;function Wg(t,n,a){if(mc===null){var o=new Map,u=mc=new Map;u.set(a,o)}else u=mc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Ki]||h[_n]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(n)||"";E=t+E;var R=o.get(E);R?R.push(h):o.set(E,[h])}}return o}function qg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function NM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Yg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Bo=null;function OM(){}function PM(t,n,a){if(Bo===null)throw Error(r(475));var o=Bo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=Ms(a.href),h=t.querySelector(Io(u));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(o.count++,o=gc.bind(o),t.then(o,o)),n.state.loading|=4,n.instance=h,tn(h);return}h=t.ownerDocument||t,a=kg(a),(u=hi.get(u))&&ld(a,u),h=h.createElement("link"),tn(h);var E=h;E._p=new Promise(function(R,G){E.onload=R,E.onerror=G}),Cn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=gc.bind(o),t.addEventListener("load",n),t.addEventListener("error",n))}}function IM(){if(Bo===null)throw Error(r(475));var t=Bo;return t.stylesheets&&t.count===0&&ud(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&ud(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function gc(){if(this.count--,this.count===0){if(this.stylesheets)ud(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _c=null;function ud(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_c=new Map,n.forEach(FM,t),_c=null,gc.call(t))}function FM(t,n){if(!(n.state.loading&4)){var a=_c.get(t);if(a)var o=a.get(null);else{a=new Map,_c.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var E=u[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(a.set(E.dataset.precedence,E),o=E)}o&&a.set(null,o)}u=n.instance,E=u.getAttribute("data-precedence"),h=a.get(E)||o,h===o&&a.set(null,u),a.set(E,u),this.count++,o=gc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:C,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function BM(t,n,a,o,u,h,E,R){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ce(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ce(0),this.hiddenUpdates=Ce(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function Zg(t,n,a,o,u,h,E,R,G,se,_e,Se){return t=new BM(t,n,a,E,R,G,se,Se),n=1,h===!0&&(n|=24),h=Kn(3,null,null,n),t.current=h,h.stateNode=t,n=Xu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Zu(h),t}function jg(t){return t?(t=$r,t):$r}function Kg(t,n,a,o,u,h){u=jg(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ba(t,o,n),a!==null&&(ti(a,t,n),mo(a,t,n))}function Qg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function fd(t,n){Qg(t,n),(t=t.alternate)&&Qg(t,n)}function Jg(t){if(t.tag===13){var n=Jr(t,67108864);n!==null&&ti(n,t,67108864),fd(t,67108864)}}var vc=!0;function zM(t,n,a,o){var u=B.T;B.T=null;var h=V.p;try{V.p=2,dd(t,n,a,o)}finally{V.p=h,B.T=u}}function HM(t,n,a,o){var u=B.T;B.T=null;var h=V.p;try{V.p=8,dd(t,n,a,o)}finally{V.p=h,B.T=u}}function dd(t,n,a,o){if(vc){var u=hd(o);if(u===null)$f(t,n,o,xc,a),e_(t,o);else if(GM(u,t,n,a,o))o.stopPropagation();else if(e_(t,o),n&4&&-1<VM.indexOf(t)){for(;u!==null;){var h=gi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Ve(h.pendingLanes);if(E!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;E;){var G=1<<31-Pe(E);R.entanglements[1]|=G,E&=~G}Bi(h),(Ft&6)===0&&(nc=Tt()+500,Lo(0))}}break;case 13:R=Jr(h,2),R!==null&&ti(R,h,2),ac(),fd(h,2)}if(h=hd(o),h===null&&$f(t,n,o,xc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else $f(t,n,o,null,a)}}function hd(t){return t=_u(t),pd(t)}var xc=null;function pd(t){if(xc=null,t=Qi(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return xc=t,null}function $g(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(X()){case qt:return 2;case Et:return 8;case ye:case we:return 32;case I:return 268435456;default:return 32}default:return 32}}var md=!1,Qa=null,Ja=null,$a=null,Ho=new Map,Vo=new Map,er=[],VM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e_(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(n.pointerId)}}function Go(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=gi(n),n!==null&&Jg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function GM(t,n,a,o,u){switch(n){case"focusin":return Qa=Go(Qa,t,n,a,o,u),!0;case"dragenter":return Ja=Go(Ja,t,n,a,o,u),!0;case"mouseover":return $a=Go($a,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Ho.set(h,Go(Ho.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Vo.set(h,Go(Vo.get(h)||null,t,n,a,o,u)),!0}return!1}function t_(t){var n=Qi(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,si(t.priority,function(){if(a.tag===13){var o=ei();o=nt(o);var u=Jr(a,o);u!==null&&ti(u,a,o),fd(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=hd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=gi(a),n!==null&&Jg(n),t.blockedOn=a,!1;n.shift()}return!0}function n_(t,n,a){Sc(t)&&a.delete(n)}function kM(){md=!1,Qa!==null&&Sc(Qa)&&(Qa=null),Ja!==null&&Sc(Ja)&&(Ja=null),$a!==null&&Sc($a)&&($a=null),Ho.forEach(n_),Vo.forEach(n_)}function Mc(t,n){t.blockedOn===n&&(t.blockedOn=null,md||(md=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kM)))}var Ec=null;function i_(t){Ec!==t&&(Ec=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Ec===t&&(Ec=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(pd(o||a)===null)continue;break}var h=gi(a);h!==null&&(t.splice(n,3),n-=3,pf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function ko(t){function n(G){return Mc(G,t)}Qa!==null&&Mc(Qa,t),Ja!==null&&Mc(Ja,t),$a!==null&&Mc($a,t),Ho.forEach(n),Vo.forEach(n);for(var a=0;a<er.length;a++){var o=er[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)t_(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],E=u[bn]||null;if(typeof h=="function")E||i_(a);else if(E){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,E=h[bn]||null)R=E.formAction;else if(pd(u)!==null)continue}else R=E.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),i_(a)}}}function gd(t){this._internalRoot=t}yc.prototype.render=gd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();Kg(a,o,t,n,null,null)},yc.prototype.unmount=gd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Kg(t.current,2,null,t,null,null),ac(),n[Ui]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ct();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&t_(t)}};var a_=e.version;if(a_!=="19.1.0")throw Error(r(527,a_,"19.1.0"));V.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var XM={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{me=bc.inject(XM),ge=bc}catch{}}return Wo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=S0,h=M0,E=E0,R=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(E=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(R=n.unstable_transitionCallbacks)),n=Zg(t,1,!1,null,null,a,o,u,h,E,R,null),t[Ui]=n.current,Jf(t),new gd(n)},Wo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",h=S0,E=M0,R=E0,G=null,se=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(E=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(G=a.unstable_transitionCallbacks),a.formState!==void 0&&(se=a.formState)),n=Zg(t,1,!0,n,a??null,o,u,h,E,R,G,se),n.context=jg(null),a=n.current,o=ei(),o=nt(o),u=Fa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,Be(n,a),Bi(n),t[Ui]=n.current,Jf(t),new yc(n)},Wo.version="19.1.0",Wo}var p_;function $M(){if(p_)return xd.exports;p_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),xd.exports=JM(),xd.exports}var eE=$M();function tE(s){const[e,i]=F.useState(s);return s!==e&&(!s||!e||s.length!==e.length||s.some((r,l)=>r!==e[l]))?(i(s),s):e}function nE(s,[e,i]){const[r,l]=s;return r!==void 0&&l!==void 0&&e!==void 0&&i!==void 0&&e>r&&e-r<=20&&i<l?[r,i]:r!==e||l!==i?[e,i]:s}function iE(s,e){let i=s==null?void 0:s.clientWidth;if(i!==void 0&&e&&e.length>0){const r=[...e.filter(l=>l>0)].sort((l,c)=>c-l);r.push(Math.floor(r[r.length-1]/2)),i=r.find((l,c)=>l<=i||c===r.length-1)}return i}function aE(s,e,i){const[[r],l]=F.useReducer(nE,[i]),c=tE(e),f=F.useRef(void 0);return{containerRef:F.useCallback(m=>{var g;(g=f.current)==null||g.disconnect(),f.current=void 0;const p=()=>l([iE(m,c),window.innerWidth-document.documentElement.clientWidth]);p(),m&&typeof ResizeObserver<"u"&&(f.current=new ResizeObserver(p),f.current.observe(m)),typeof s=="function"?s(m):s&&(s.current=m)},[s,c]),containerWidth:r}}function rE(...s){return[...s].filter(Boolean).join(" ")}function Cv(s){return["react-photo-album",s].filter(Boolean).join("--")}function sE(s){return`--${Cv(s)}`}function op({width:s,height:e}){return s/e}const oE=Object.freeze([1200,600,300,0]);function cr(s,e){return typeof s=="function"?s(e):s}function wv(s,e){return e!==void 0?cr(s,e):void 0}function lE(s,e){const i=oE.findIndex(r=>r<=e);return cr(s[Math.max(i,0)],e)}function sh(s,e,i,r=0){if(e===void 0)return;const l=wv(s,e);return Math.round(Math.max(l===void 0?lE(i,e):l,r))}function cE(s,{spacing:e,padding:i,componentsProps:r,render:l}){return{spacing:sh(e,s,[20,15,10,5]),padding:sh(i,s,[0,0,0,0]),componentsProps:cr(r,s)||{},render:cr(l,s)}}function tl(s,e=0){const i=10**e;return Math.round((s+Number.EPSILON)*i)/i}function uE(s,e,i,r,l,c,f){let d,m;const p=_=>{var S;const v=c*(l-1)+2*f*l;return`calc((${((S=_.match(/^\s*calc\((.*)\)\s*$/))==null?void 0:S[1])??_} - ${v}px) / ${tl((r-v)/i,5)})`},g=s.srcSet;return g&&g.length>0&&(d=g.concat(g.some(({width:_})=>_===s.width)?[]:[{src:s.src,width:s.width,height:s.height}]).sort((_,v)=>_.width-v.width).map(_=>`${_.src} ${_.width}w`).join(", ")),e!=null&&e.size?m=(e.sizes||[]).map(({viewport:_,size:v})=>`${_} ${p(v)}`).concat(p(e.size)).join(", "):m=`${Math.ceil(i/r*100)}vw`,{srcSet:d,sizes:m}}function fE({as:s,render:e,context:i,classes:r=[],variables:l={},style:c,className:f,children:d,...m},p){const g=rE(...(Array.isArray(r)?r:[r]).filter(y=>typeof y=="string").map(Cv),f),v={style:{...Object.fromEntries(Object.entries(l).map(([y,T])=>[sE(y.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()),typeof T=="number"?tl(T,5):T])),...c},className:g,children:d,...m};if(e){const y=e({ref:p,...v},i);if(y)return y}const S=s||"div";return Zt.jsx(S,{ref:p,...v})}const eu=F.forwardRef(fE);function dE({photo:s,index:e,width:i,height:r,onClick:l,render:{wrapper:c,link:f,button:d,image:m,extras:p}={},componentsProps:{link:g,button:_,wrapper:v,image:S}={}},y){const{href:T}=s,M={photo:s,index:e,width:tl(i,3),height:tl(r,3)};let x;return T?x={...g,as:"a",render:f,classes:["photo","link"],href:T,onClick:l}:l?x={..._,as:"button",type:"button",render:d,classes:["photo","button"],onClick:l}:x={...v,render:c,classes:"photo"},Zt.jsxs(eu,{ref:y,variables:{photoWidth:M.width,photoHeight:M.height},context:M,...x,children:[Zt.jsx(eu,{as:"img",classes:"image",render:m,context:M,...S}),p==null?void 0:p({},M)]})}const hE=F.forwardRef(dE);function pE({layout:s,sizes:e,model:i,skeleton:r,onClick:l,render:{container:c,track:f,photo:d,...m}={},componentsProps:{container:p,track:g,link:_,button:v,wrapper:S,image:y}={}},T){const{spacing:M,padding:x,containerWidth:O,tracks:C,variables:P,horizontal:L}=i||{};return Zt.jsxs(eu,{role:"group","aria-label":"Photo album",...p,variables:{spacing:M,padding:x,containerWidth:O,...P},classes:["",s],render:c,ref:T,children:[M!==void 0&&x!==void 0&&O!==void 0&&(C==null?void 0:C.map(({photos:z,variables:N},Z)=>{const A=z.length,D=L?A:C.length;return F.createElement(eu,{...g,key:Z,render:f,classes:"track",variables:{trackSize:A,...N}},z.map(H=>{const{photo:j,index:q,width:ae}=H,{key:ee,src:B,alt:V,title:k,label:de}=j,U=l?re=>{l({event:re,photo:j,index:q})}:void 0;if(d){const re=d({onClick:U},H);if(re)return re}const Y=re=>de?{"aria-label":de,...re}:re;return Zt.jsx(hE,{onClick:U,render:m,componentsProps:{image:{loading:"lazy",decoding:"async",src:B,alt:V,title:k,...uE(j,e,ae,O,D,M,x),...cr(y,H)},link:Y(cr(_,H)),button:Y(cr(v,H)),wrapper:cr(S,H)},...H},ee??B)}))})),O===void 0&&r]})}const mE=F.forwardRef(pE);function gE(s,{photos:e,targetRowHeight:i,rowConstraints:r,...l}){const{spacing:c,padding:f,componentsProps:d,render:m}=cE(s,l),{singleRowMaxHeight:p,minPhotos:g,maxPhotos:_}=wv(r,s)||{};if(p!==void 0&&c!==void 0&&f!==void 0){const v=Math.floor(e.reduce((S,{width:y,height:T})=>S+y/T*p-2*f,f*e.length*2+c*(e.length-1)));v>0&&(d.container={...d.container},d.container.style={maxWidth:v,...d.container.style})}return{...l,targetRowHeight:sh(i,s,[v=>v/5,v=>v/4,v=>v/3,v=>v/2]),render:m,spacing:c,padding:f,minPhotos:g,maxPhotos:_,componentsProps:d}}function _E(s){return(e,i)=>s(i)-s(e)}function vE(s){let e=0;const i=[],r=(g,_)=>s(i[g],i[_])<0,l=(g,_)=>{const v=i[g];i[g]=i[_],i[_]=v},c=g=>{let _=g,v=Math.floor(_/2);for(;_>1&&r(v,_);)l(v,_),_=v,v=Math.floor(_/2)},f=g=>{let _=g,v=_*2;for(;v<=e&&(v<e&&r(v,v+1)&&(v+=1),!!r(_,v));)l(_,v),_=v,v=_*2};return{push:g=>{e+=1,i[e]=g,c(e)},pop:()=>{if(e===0)return;l(1,e),e-=1;const g=i.pop();return f(1),g},size:()=>e}}function xE(s,e,i){const r=new Map,l=new Set,c=new Map;c.set(e,0);const f=vE(_E(d=>d[1]));for(f.push([e,0]);f.size()>0;){const[d,m]=f.pop();if(!l.has(d)){const p=s(d);l.add(d),p.forEach((g,_)=>{const v=m+g,S=r.get(_),y=c.get(_);(y===void 0||y>v&&(y/v>1.005||S!==void 0&&S<d))&&(c.set(_,v),f.push([_,v]),r.set(_,d))})}}return c.has(i)?r:void 0}function SE(s,e){if(!s)return;const i=[];for(let r=e;r!==void 0;r=s.get(r))i.push(r);return i.reverse()}function ME(s,e,i){return SE(xE(s,e,i),i)}function EE(s,e,i,r){return tl(e/i/Math.min(...s.map(l=>op(l))))+(r||0)+2}function Dv(s,e,i,r){return(e-(s.length-1)*i-2*r*s.length)/s.reduce((l,c)=>l+op(c),0)}function yE(s,e,i,r,l,c,f){const d=s.slice(e,i),m=Dv(d,r,l,c);return m>0?(m-f)**2*d.length:void 0}function bE(s,e,i,r,l,c,f,d){return m=>{const p=new Map;p.set(m,0);const g=f||1,_=Math.min(c,d||1/0);for(let v=m+g;v<s.length+1&&!(v-m>_);v+=1){const S=yE(s,m,v,r,e,i,l);if(S===void 0)break;p.set(v,S)}return p}}function TE(s,e,i,r,l,c,f){const d=EE(s,r,l,c),m=bE(s,e,i,r,l,d,c,f),p=ME(m,0,s.length);if(!p)return;const g=[];for(let _=1;_<p.length;_+=1){const v=s.map((y,T)=>({photo:y,index:T})).slice(p[_-1],p[_]),S=Dv(v.map(({photo:y})=>y),r,e,i);g.push({photos:v.map(({photo:y,index:T})=>({photo:y,index:T,width:S*op(y),height:S}))})}return{spacing:e,padding:i,containerWidth:r,tracks:g,horizontal:!0}}function AE({photos:s,breakpoints:e,defaultContainerWidth:i,...r},l){const{containerRef:c,containerWidth:f}=aE(l,e,i),{spacing:d,padding:m,targetRowHeight:p,minPhotos:g,maxPhotos:_,...v}=gE(f,{photos:s,...r}),S=F.useMemo(()=>f!==void 0&&d!==void 0&&m!==void 0&&p!==void 0?TE(s,d,m,f,p,g,_):void 0,[s,d,m,f,p,g,_]);return Zt.jsx(mE,{layout:"rows",ref:c,model:S,...v})}const RE=F.forwardRef(AE),Uv="carousel",lp="controller",CE="navigation",wE="no-scroll",cp="portal",DE="root",Lv="toolbar",oh="fullscreen",m_="thumbnails",g_="zoom",yd="loading",bd="error",Td="complete",UE="placeholder",LE=s=>`active-slide-${s}`,Nv="fullsize",up="flex_center",NE="no_scroll",Ov="no_scroll_padding",fp="slide",Pv="slide_wrapper",OE="slide_wrapper_interactive",Fr="prev",Br="next",__="swipe",Hs="close",Iv="onPointerDown",Fv="onPointerMove",Bv="onPointerUp",zv="onPointerLeave",Hv="onPointerCancel",dp="onKeyDown",PE="onKeyUp",hp="onWheel",IE="Escape",FE="ArrowLeft",BE="ArrowRight",zE="button",lh="icon",Vv="contain",v_="cover",Gv="Unknown action type";var HE=Rv();const kv="yarl__";function Ci(...s){return[...s].filter(Boolean).join(" ")}function xt(s){return`${kv}${s}`}function qn(s){return`--${kv}${s}`}function sl(s,e){return`${s}${e?`_${e}`:""}`}function pp(s){return e=>sl(s,e)}function Vs(s,e){var i;return(i=s==null?void 0:s[e])!==null&&i!==void 0?i:e}function VE(s,e,i){return Vs(s,"{index} of {total}").replace(/\{index}/g,`${vp(i,e.length)+1}`).replace(/\{total}/g,`${e.length}`)}function su(...s){return()=>{s.forEach(e=>{e()})}}function Zi(s,e,i){return()=>{const r=F.useContext(i);if(!r)throw new Error(`${s} must be used within a ${e}.Provider`);return r}}function mp(){return typeof window<"u"}function gp(s,e=0){const i=10**e;return Math.round((s+Number.EPSILON)*i)/i}function Xr(s){return s.type===void 0||s.type==="image"}function _p(s,e){return s.imageFit===v_||s.imageFit!==Vv&&e===v_}function ou(s){return typeof s=="string"?Number.parseInt(s,10):s}function tu(s){if(typeof s=="number")return{pixel:s};if(typeof s=="string"){const e=ou(s);return s.endsWith("%")?{percent:e}:{pixel:e}}return{pixel:0}}function GE(s,e){const i=tu(e),r=i.percent!==void 0?s.width/100*i.percent:i.pixel;return{width:Math.max(s.width-2*r,0),height:Math.max(s.height-2*r,0)}}function kE(){return(mp()?window==null?void 0:window.devicePixelRatio:void 0)||1}function vp(s,e){return e>0?(s%e+e)%e:0}function Xv(s){return s.length>0}function Wv(s,e){return s[vp(e,s.length)]}function ch(s,e){return Xv(s)?Wv(s,e):void 0}function XE(s){return Xr(s)?s.src:void 0}function xp(s,e,i){if(!i)return s;const{buttons:r,...l}=s,c=r.findIndex(d=>d===e),f=F.isValidElement(i)?F.cloneElement(i,{key:e},null):i;if(c>=0){const d=[...r];return d.splice(c,1,f),{buttons:d,...l}}return{buttons:[f,...r],...l}}function WE(s,e,i=0){return Math.min(s.preload,Math.max(s.finite?e.length-1:Math.floor(e.length/2),i))}const qE=Number(F.version.split(".")[0])>=19;function YE(s){return{inert:qE?s:s?"":void 0}}function ZE(s){s.scrollTop}const uh={open:!1,close:()=>{},index:0,slides:[],render:{},plugins:[],toolbar:{buttons:[Hs]},labels:{},animation:{fade:250,swipe:500,easing:{fade:"ease",swipe:"ease-out",navigation:"ease-in-out"}},carousel:{finite:!1,preload:2,padding:"16px",spacing:"30%",imageFit:Vv,imageProps:{}},controller:{ref:null,focus:!0,aria:!1,touchAction:"none",closeOnPullUp:!1,closeOnPullDown:!1,closeOnBackdropClick:!1,preventDefaultWheelX:!0,preventDefaultWheelY:!1,disableSwipeNavigation:!1},portal:{},noScroll:{disabled:!1},on:{},styles:{},className:""};function Ra(s,e){return{name:s,component:e}}function yn(s,e){return{module:s,children:e}}function qv(s,e,i){return s.module.name===e?i(s):s.children?[yn(s.module,s.children.flatMap(r=>{var l;return(l=qv(r,e,i))!==null&&l!==void 0?l:[]}))]:[s]}function ys(s,e,i){return s.flatMap(r=>{var l;return(l=qv(r,e,i))!==null&&l!==void 0?l:[]})}function jE(s,e=[],i=[]){let r=s;const l=S=>{const y=[...r];for(;y.length>0;){const T=y.pop();if((T==null?void 0:T.module.name)===S)return!0;T!=null&&T.children&&y.push(...T.children)}return!1},c=(S,y)=>{if(S===""){r=[yn(y,r)];return}r=ys(r,S,T=>[yn(y,[T])])},f=(S,y)=>{r=ys(r,S,T=>[yn(T.module,[yn(y,T.children)])])},d=(S,y,T)=>{r=ys(r,S,M=>{var x;return[yn(M.module,[...T?[yn(y)]:[],...(x=M.children)!==null&&x!==void 0?x:[],...T?[]:[yn(y)]])]})},m=(S,y,T)=>{r=ys(r,S,M=>[...T?[yn(y)]:[],M,...T?[]:[yn(y)]])},p=S=>{f(lp,S)},g=(S,y)=>{r=ys(r,S,T=>[yn(y,T.children)])},_=S=>{r=ys(r,S,y=>y.children)},v=S=>{i.push(S)};return e.forEach(S=>{S({contains:l,addParent:c,append:f,addChild:d,addSibling:m,addModule:p,replace:g,remove:_,augment:v})}),{config:r,augmentation:S=>i.reduce((y,T)=>T(y),S)}}const Yv=F.createContext(null),Zv=Zi("useA11yContext","A11yContext",Yv);function KE({children:s}){const[e,i]=F.useState(!1),[r,l]=F.useState(!1),c=F.useMemo(()=>({focusWithin:e,trackFocusWithin:(d,m)=>{const p=g=>_=>{var v;_.currentTarget.contains(_.relatedTarget)||i(g),(v=g?d:m)===null||v===void 0||v(_)};return{onFocus:p(!0),onBlur:p(!1)}},autoPlaying:r,setAutoPlaying:l}),[e,r]);return F.createElement(Yv.Provider,{value:c},s)}const jv=F.createContext(null),ol=Zi("useDocument","DocumentContext",jv);function QE({nodeRef:s,children:e}){const i=F.useMemo(()=>{const r=c=>{var f;return((f=c||s.current)===null||f===void 0?void 0:f.ownerDocument)||document};return{getOwnerDocument:r,getOwnerWindow:c=>{var f;return((f=r(c))===null||f===void 0?void 0:f.defaultView)||window}}},[s]);return F.createElement(jv.Provider,{value:i},e)}const Kv=F.createContext(null),lu=Zi("useEvents","EventsContext",Kv);function JE({children:s}){const[e]=F.useState({});F.useEffect(()=>()=>{Object.keys(e).forEach(r=>delete e[r])},[e]);const i=F.useMemo(()=>{const r=(f,d)=>{var m;(m=e[f])===null||m===void 0||m.splice(0,e[f].length,...e[f].filter(p=>p!==d))};return{publish:(...[f,d])=>{var m;(m=e[f])===null||m===void 0||m.forEach(p=>p(d))},subscribe:(f,d)=>(e[f]||(e[f]=[]),e[f].push(d),()=>r(f,d)),unsubscribe:r}},[e]);return F.createElement(Kv.Provider,{value:i},s)}const Qv=F.createContext(null),Zn=Zi("useLightboxProps","LightboxPropsContext",Qv);function $E({children:s,...e}){return F.createElement(Qv.Provider,{value:e},s)}const Jv=F.createContext(null),Ca=Zi("useLightboxState","LightboxStateContext",Jv),$v=F.createContext(null),ey=Zi("useLightboxDispatch","LightboxDispatchContext",$v);function ty(s,e){switch(e.type){case"swipe":{const{slides:i}=s,r=(e==null?void 0:e.increment)||0,l=s.globalIndex+r,c=vp(l,i.length),f=ch(i,c),d=r||e.duration!==void 0?{increment:r,duration:e.duration,easing:e.easing}:void 0;return{slides:i,currentIndex:c,globalIndex:l,currentSlide:f,animation:d}}case"update":return e.slides!==s.slides||e.index!==s.currentIndex?{slides:e.slides,currentIndex:e.index,globalIndex:e.index,currentSlide:ch(e.slides,e.index)}:s;default:throw new Error(Gv)}}function ny({slides:s,index:e,children:i}){const[r,l]=F.useReducer(ty,{slides:s,currentIndex:e,globalIndex:e,currentSlide:ch(s,e)});F.useEffect(()=>{l({type:"update",slides:s,index:e})},[s,e]);const c=F.useMemo(()=>({...r,state:r,dispatch:l}),[r,l]);return F.createElement($v.Provider,{value:l},F.createElement(Jv.Provider,{value:c},i))}const ex=F.createContext(null),cu=Zi("useTimeouts","TimeoutsContext",ex);function iy({children:s}){const[e]=F.useState([]);F.useEffect(()=>()=>{e.forEach(r=>window.clearTimeout(r)),e.splice(0,e.length)},[e]);const i=F.useMemo(()=>{const r=f=>{e.splice(0,e.length,...e.filter(d=>d!==f))};return{setTimeout:(f,d)=>{const m=window.setTimeout(()=>{r(m),f()},d);return e.push(m),m},clearTimeout:f=>{f!==void 0&&(r(f),window.clearTimeout(f))}}},[e]);return F.createElement(ex.Provider,{value:i},s)}const ll=F.forwardRef(function({label:e,className:i,icon:r,renderIcon:l,onClick:c,style:f,...d},m){const{styles:p,labels:g}=Zn(),_=Vs(g,e);return F.createElement("button",{ref:m,type:"button",title:_,"aria-label":_,className:Ci(xt(zE),i),onClick:c,style:{...f,...p.button},...d},l?l():F.createElement(r,{className:xt(lh),style:p.icon}))});function ay(s,e){const i=r=>F.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false",...r},e);return i.displayName=s,i}function ji(s,e){return ay(s,F.createElement("g",{fill:"currentColor"},F.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e))}const ry=ji("Close",F.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),sy=ji("Previous",F.createElement("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"})),oy=ji("Next",F.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})),ly=ji("Loading",F.createElement(F.Fragment,null,Array.from({length:8}).map((s,e,i)=>F.createElement("line",{key:e,x1:"12",y1:"6.5",x2:"12",y2:"1.8",strokeLinecap:"round",strokeWidth:"2.6",stroke:"currentColor",strokeOpacity:1/i.length*(e+1),transform:`rotate(${360/i.length*e}, 12, 12)`})))),cy=ji("Error",F.createElement("path",{d:"M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z"})),wi=mp()?F.useLayoutEffect:F.useEffect;function Sp(){const[s,e]=F.useState(!1);return F.useEffect(()=>{var i,r;const l=(i=window.matchMedia)===null||i===void 0?void 0:i.call(window,"(prefers-reduced-motion: reduce)");e(l==null?void 0:l.matches);const c=f=>e(f.matches);return(r=l==null?void 0:l.addEventListener)===null||r===void 0||r.call(l,"change",c),()=>{var f;return(f=l==null?void 0:l.removeEventListener)===null||f===void 0?void 0:f.call(l,"change",c)}},[]),s}function uy(s){let e=0,i=0,r=0;const c=window.getComputedStyle(s).transform.match(/matrix.*\((.+)\)/);if(c){const f=c[1].split(",").map(ou);f.length===6?(e=f[4],i=f[5]):f.length===16&&(e=f[12],i=f[13],r=f[14])}return{x:e,y:i,z:r}}function x_(s,e){const i=F.useRef(void 0),r=F.useRef(void 0),l=Sp();return wi(()=>{var c,f,d;if(s.current&&i.current!==void 0&&!l){const{keyframes:m,duration:p,easing:g,onfinish:_}=e(i.current,s.current.getBoundingClientRect(),uy(s.current))||{};if(m&&p){(c=r.current)===null||c===void 0||c.cancel(),r.current=void 0;try{r.current=(d=(f=s.current).animate)===null||d===void 0?void 0:d.call(f,m,{duration:p,easing:g})}catch(v){console.error(v)}r.current&&(r.current.onfinish=()=>{r.current=void 0,_==null||_()})}}i.current=void 0}),{prepareAnimation:c=>{i.current=c},isAnimationPlaying:()=>{var c;return((c=r.current)===null||c===void 0?void 0:c.playState)==="running"}}}function tx(){const s=F.useRef(null),e=F.useRef(void 0),[i,r]=F.useState();return{setContainerRef:F.useCallback(c=>{s.current=c,e.current&&(e.current.disconnect(),e.current=void 0);const f=()=>{if(c){const d=window.getComputedStyle(c),m=p=>parseFloat(p)||0;r({width:Math.round(c.clientWidth-m(d.paddingLeft)-m(d.paddingRight)),height:Math.round(c.clientHeight-m(d.paddingTop)-m(d.paddingBottom))})}else r(void 0)};f(),c&&typeof ResizeObserver<"u"&&(e.current=new ResizeObserver(f),e.current.observe(c))},[]),containerRef:s,containerRect:i}}function qc(){const s=F.useRef(void 0),{setTimeout:e,clearTimeout:i}=cu();return F.useCallback((r,l)=>{i(s.current),s.current=e(r,l>0?l:0)},[e,i])}function Lt(s){const e=F.useRef(s);return wi(()=>{e.current=s}),F.useCallback((...i)=>{var r;return(r=e.current)===null||r===void 0?void 0:r.call(e,...i)},[])}function S_(s,e){typeof s=="function"?s(e):s&&(s.current=e)}function fh(s,e){return F.useMemo(()=>s==null&&e==null?null:i=>{S_(s,i),S_(e,i)},[s,e])}function fy(s,e=!1){const i=F.useRef(!1);wi(()=>{e&&i.current&&(i.current=!1,s())},[e,s]);const r=F.useCallback(()=>{i.current=!0},[]),l=F.useCallback(()=>{i.current=!1},[]);return{onFocus:r,onBlur:l}}function Mp(){const[s,e]=F.useState(!1);return wi(()=>{e(window.getComputedStyle(window.document.documentElement).direction==="rtl")},[]),s}function dy(){const[s]=F.useState({}),e=F.useCallback((l,c)=>{var f;(f=s[l])===null||f===void 0||f.forEach(d=>{c.isPropagationStopped()||d(c)})},[s]),i=F.useMemo(()=>({onPointerDown:l=>e(Iv,l),onPointerMove:l=>e(Fv,l),onPointerUp:l=>e(Bv,l),onPointerLeave:l=>e(zv,l),onPointerCancel:l=>e(Hv,l),onKeyDown:l=>e(dp,l),onKeyUp:l=>e(PE,l),onWheel:l=>e(hp,l)}),[e]),r=F.useCallback((l,c)=>(s[l]||(s[l]=[]),s[l].unshift(c),()=>{const f=s[l];f&&f.splice(0,f.length,...f.filter(d=>d!==c))}),[s]);return{registerSensors:i,subscribeSensors:r}}function M_(s,e){const i=F.useRef(0),r=qc(),l=Lt((...c)=>{i.current=Date.now(),s(c)});return F.useCallback((...c)=>{r(()=>{l(c)},e-(Date.now()-i.current))},[e,l,r])}const Ad=pp("slide"),Rd=pp("slide_image");function nu({slide:s,offset:e,render:i,rect:r,imageFit:l,imageProps:c,onClick:f,onLoad:d,onError:m,style:p}){var g,_,v,S,y,T,M,x;const[O,C]=F.useState(yd),{publish:P}=lu(),{setTimeout:L}=cu(),z=F.useRef(null);F.useEffect(()=>{e===0&&P(LE(O))},[e,O,P]);const N=Lt(re=>{("decode"in re?re.decode():Promise.resolve()).catch(()=>{}).then(()=>{re.parentNode&&(C(Td),L(()=>{d==null||d(re)},0))})}),Z=F.useCallback(re=>{z.current=re,re!=null&&re.complete&&N(re)},[N]),A=F.useCallback(re=>{N(re.currentTarget)},[N]),D=Lt(()=>{C(bd),m==null||m()}),H=_p(s,l),j=(re,pe)=>Number.isFinite(re)?re:pe,q=j(Math.max(...((_=(g=s.srcSet)===null||g===void 0?void 0:g.map(re=>re.width))!==null&&_!==void 0?_:[]).concat(s.width?[s.width]:[]).filter(Boolean)),((v=z.current)===null||v===void 0?void 0:v.naturalWidth)||0),ae=j(Math.max(...((y=(S=s.srcSet)===null||S===void 0?void 0:S.map(re=>re.height))!==null&&y!==void 0?y:[]).concat(s.height?[s.height]:[]).filter(Boolean)),((T=z.current)===null||T===void 0?void 0:T.naturalHeight)||0),ee=q&&ae?{maxWidth:`min(${q}px, 100%)`,maxHeight:`min(${ae}px, 100%)`}:{maxWidth:"100%",maxHeight:"100%"},B=(M=s.srcSet)===null||M===void 0?void 0:M.sort((re,pe)=>re.width-pe.width).map(re=>`${re.src} ${re.width}w`).join(", "),V=()=>r&&!H&&s.width&&s.height?r.height/s.height*s.width:Number.MAX_VALUE,k=B&&r&&mp()?`${Math.round(Math.min(V(),r.width))}px`:void 0,{style:de,className:U,...Y}=c||{};return F.createElement(F.Fragment,null,F.createElement("img",{ref:Z,onLoad:A,onError:D,onClick:f,draggable:!1,className:Ci(xt(Rd()),H&&xt(Rd("cover")),O!==Td&&xt(Rd("loading")),U),style:{...ee,...p,...de},...Y,alt:(x=s.alt)!==null&&x!==void 0?x:"",sizes:k,srcSet:B,src:s.src}),O!==Td&&F.createElement("div",{className:xt(Ad(UE))},O===yd&&(i!=null&&i.iconLoading?i.iconLoading():F.createElement(ly,{className:Ci(xt(lh),xt(Ad(yd)))})),O===bd&&(i!=null&&i.iconError?i.iconError():F.createElement(cy,{className:Ci(xt(lh),xt(Ad(bd)))}))))}const hy=F.forwardRef(function({className:e,children:i,onFocus:r,onBlur:l,...c},f){const d=F.useRef(null),{trackFocusWithin:m}=Zv();return F.createElement(QE,{nodeRef:d},F.createElement("div",{ref:fh(f,d),className:Ci(xt("root"),e),...m(r,l),...c},i))});var Pn;(function(s){s[s.NONE=0]="NONE",s[s.SWIPE=1]="SWIPE",s[s.PULL=2]="PULL",s[s.ANIMATION=3]="ANIMATION"})(Pn||(Pn={}));function nx(s,e,i,r,l){F.useEffect(()=>l?()=>{}:su(s(Iv,e),s(Fv,i),s(Bv,r),s(zv,r),s(Hv,r)),[s,e,i,r,l])}var bi;(function(s){s[s.NONE=0]="NONE",s[s.SWIPE=1]="SWIPE",s[s.PULL=2]="PULL"})(bi||(bi={}));const Cd=30;function py({disableSwipeNavigation:s,closeOnBackdropClick:e},i,r,l,c,f,d,m,p,g,_,v,S,y,T,M){const x=F.useRef(0),O=F.useRef([]),C=F.useRef(void 0),P=F.useRef(0),L=F.useRef(bi.NONE),z=F.useCallback(q=>{C.current===q.pointerId&&(C.current=void 0,L.current=bi.NONE);const ae=O.current;ae.splice(0,ae.length,...ae.filter(ee=>ee.pointerId!==q.pointerId))},[]),N=F.useCallback(q=>{z(q),q.persist(),O.current.push(q)},[z]),Z=F.useCallback(q=>O.current.find(({pointerId:ae})=>q.pointerId===ae),[]),A=Lt(q=>{N(q)}),D=(q,ae)=>_&&q>ae||g&&q<-ae,H=Lt(q=>{const ae=Z(q);if(ae)if(C.current===q.pointerId){const ee=Date.now()-P.current,B=x.current;L.current===bi.SWIPE?Math.abs(B)>.3*l||Math.abs(B)>5&&ee<c?m(B,ee):p(B):L.current===bi.PULL&&(D(B,2*Cd)?y(B,ee):T(B)),x.current=0,L.current=bi.NONE}else{const{target:ee}=q;e&&ee instanceof HTMLElement&&ee===ae.target&&(ee.classList.contains(xt(fp))||ee.classList.contains(xt(Pv)))&&M()}z(q)}),j=Lt(q=>{const ae=Z(q);if(ae){const ee=C.current===q.pointerId;if(q.buttons===0){ee&&x.current!==0?H(q):z(ae);return}const B=q.clientX-ae.clientX,V=q.clientY-ae.clientY;if(C.current===void 0){const k=de=>{N(q),C.current=q.pointerId,P.current=Date.now(),L.current=de};Math.abs(B)>Math.abs(V)&&Math.abs(B)>Cd&&r(B)?s||(k(bi.SWIPE),f()):Math.abs(V)>Math.abs(B)&&D(V,Cd)&&(k(bi.PULL),v())}else ee&&(L.current===bi.SWIPE?(x.current=B,d(B)):L.current===bi.PULL&&(x.current=V,S(V)))}});nx(i,A,j,H)}function my({preventDefaultWheelX:s,preventDefaultWheelY:e}){const i=F.useRef(null),r=Lt(l=>{const c=Math.abs(l.deltaX)>Math.abs(l.deltaY);(c&&s||!c&&e||l.ctrlKey)&&l.preventDefault()});return F.useCallback(l=>{var c;l?l.addEventListener("wheel",r,{passive:!1}):(c=i.current)===null||c===void 0||c.removeEventListener("wheel",r),i.current=l},[r])}function gy(s,e,i,r,l,c,f,d,m){const p=F.useRef(0),g=F.useRef(0),_=F.useRef(void 0),v=F.useRef(void 0),S=F.useRef(0),y=F.useRef(void 0),T=F.useRef(0),{setTimeout:M,clearTimeout:x}=cu(),O=F.useCallback(()=>{_.current&&(x(_.current),_.current=void 0)},[x]),C=F.useCallback(()=>{v.current&&(x(v.current),v.current=void 0)},[x]),P=Lt(()=>{s!==Pn.SWIPE&&(p.current=0,T.current=0,O(),C())});F.useEffect(P,[s,P]);const L=Lt(N=>{v.current=void 0,p.current===N&&m(p.current)}),z=Lt(N=>{if(N.ctrlKey||Math.abs(N.deltaY)>Math.abs(N.deltaX))return;const Z=A=>{S.current=A,x(y.current),y.current=A>0?M(()=>{S.current=0,y.current=void 0},300):void 0};if(s===Pn.NONE){if(Math.abs(N.deltaX)<=1.2*Math.abs(S.current)){Z(N.deltaX);return}if(!i(-N.deltaX))return;if(g.current+=N.deltaX,O(),Math.abs(g.current)>30)g.current=0,Z(0),T.current=Date.now(),c();else{const A=g.current;_.current=M(()=>{_.current=void 0,A===g.current&&(g.current=0)},l)}}else if(s===Pn.SWIPE){let A=p.current-N.deltaX;if(A=Math.min(Math.abs(A),r)*Math.sign(A),p.current=A,f(A),C(),Math.abs(A)>.2*r){Z(N.deltaX),d(A,Date.now()-T.current);return}v.current=M(()=>L(A),2*l)}else Z(N.deltaX)});F.useEffect(()=>e(hp,z),[e,z])}const E_=pp("container"),ix=F.createContext(null),wa=Zi("useController","ControllerContext",ix);function _y({children:s,...e}){var i;const{carousel:r,animation:l,controller:c,on:f,styles:d,render:m}=e,{closeOnPullUp:p,closeOnPullDown:g,preventDefaultWheelX:_,preventDefaultWheelY:v}=c,[S,y]=F.useState(),T=Ca(),M=ey(),[x,O]=F.useState(Pn.NONE),C=F.useRef(0),P=F.useRef(0),L=F.useRef(1),{registerSensors:z,subscribeSensors:N}=dy(),{subscribe:Z,publish:A}=lu(),D=qc(),H=qc(),j=qc(),{containerRef:q,setContainerRef:ae,containerRect:ee}=tx(),B=fh(my({preventDefaultWheelX:_,preventDefaultWheelY:v}),ae),V=F.useRef(null),k=fh(V,void 0),{getOwnerDocument:de}=ol(),U=Mp(),Y=ye=>(U?-1:1)*(typeof ye=="number"?ye:1),re=Lt(()=>{var ye;return(ye=q.current)===null||ye===void 0?void 0:ye.focus()}),pe=Lt(()=>e),Re=Lt(()=>T),He=F.useCallback(ye=>A(Fr,ye),[A]),te=F.useCallback(ye=>A(Br,ye),[A]),ve=F.useCallback(()=>A(Hs),[A]),Te=ye=>!(r.finite&&(Y(ye)>0&&T.currentIndex===0||Y(ye)<0&&T.currentIndex===T.slides.length-1)),Je=ye=>{var we;C.current=ye,(we=q.current)===null||we===void 0||we.style.setProperty(qn("swipe_offset"),`${Math.round(ye)}px`)},Ge=ye=>{var we,I;P.current=ye,L.current=(()=>{const me=g&&ye>0?ye:p&&ye<0?-ye:0;return Math.min(Math.max(gp(1-me/60*(1-.5),2),.5),1)})(),(we=q.current)===null||we===void 0||we.style.setProperty(qn("pull_offset"),`${Math.round(ye)}px`),(I=q.current)===null||I===void 0||I.style.setProperty(qn("pull_opacity"),`${L.current}`)},{prepareAnimation:dt}=x_(V,(ye,we,I)=>{if(V.current&&ee)return{keyframes:[{transform:`translate(0, ${ye.rect.y-we.y+I.y}px)`,opacity:ye.opacity},{transform:"translate(0, 0)",opacity:1}],duration:ye.duration,easing:l.easing.fade}}),jt=(ye,we)=>{if(p||g){Ge(ye);let I=0;V.current&&(I=l.fade*(we?2:1),dt({rect:V.current.getBoundingClientRect(),opacity:L.current,duration:I})),j(()=>{Ge(0),O(Pn.NONE)},I),O(Pn.ANIMATION),we||ve()}},{prepareAnimation:ht,isAnimationPlaying:St}=x_(V,(ye,we,I)=>{var b;if(V.current&&ee&&(!((b=T.animation)===null||b===void 0)&&b.duration)){const K=tu(r.spacing),me=(K.percent?K.percent*ee.width/100:K.pixel)||0;return{keyframes:[{transform:`translate(${Y(T.globalIndex-ye.index)*(ee.width+me)+ye.rect.x-we.x+I.x}px, 0)`},{transform:"translate(0, 0)"}],duration:T.animation.duration,easing:T.animation.easing}}}),Mt=Lt(ye=>{var we,I;const b=ye.offset||0,K=b?l.swipe:(we=l.navigation)!==null&&we!==void 0?we:l.swipe,me=!b&&!St()?l.easing.navigation:l.easing.swipe;let{direction:ge}=ye;const he=(I=ye.count)!==null&&I!==void 0?I:1;let Pe=Pn.ANIMATION,Ae=K*he;if(!ge){const Ke=ee==null?void 0:ee.width,Ee=ye.duration||0,De=Ke?K/Ke*Math.abs(b):K;he!==0?(Ee<De?Ae=Ae/De*Math.max(Ee,De/5):Ke&&(Ae=K/Ke*(Ke-Math.abs(b))),ge=Y(b)>0?Fr:Br):Ae=K/2}let Xe=0;ge===Fr?Te(Y(1))?Xe=-he:(Pe=Pn.NONE,Ae=K):ge===Br&&(Te(Y(-1))?Xe=he:(Pe=Pn.NONE,Ae=K)),Ae=Math.round(Ae),H(()=>{Je(0),O(Pn.NONE)},Ae),V.current&&ht({rect:V.current.getBoundingClientRect(),index:T.globalIndex}),O(Pe),A(__,{type:"swipe",increment:Xe,duration:Ae,easing:me})});F.useEffect(()=>{var ye,we;!((ye=T.animation)===null||ye===void 0)&&ye.increment&&(!((we=T.animation)===null||we===void 0)&&we.duration)&&D(()=>M({type:"swipe",increment:0}),T.animation.duration)},[T.animation,M,D]);const at=[N,Te,(ee==null?void 0:ee.width)||0,l.swipe,()=>O(Pn.SWIPE),ye=>Je(ye),(ye,we)=>Mt({offset:ye,duration:we,count:1}),ye=>Mt({offset:ye,count:0})],Tt=[()=>{g&&O(Pn.PULL)},ye=>Ge(ye),ye=>jt(ye),ye=>jt(ye,!0)];py(c,...at,p,g,...Tt,ve),gy(x,...at);const X=Lt(()=>{c.focus&&de().querySelector(`.${xt(cp)} .${xt(E_())}`)&&re()});F.useEffect(X,[X]);const qt=Lt(()=>{var ye;(ye=f.view)===null||ye===void 0||ye.call(f,{index:T.currentIndex})});F.useEffect(qt,[T.globalIndex,qt]),F.useEffect(()=>su(Z(Fr,ye=>Mt({direction:Fr,...ye})),Z(Br,ye=>Mt({direction:Br,...ye})),Z(__,ye=>M(ye))),[Z,Mt,M]);const Et=F.useMemo(()=>({prev:He,next:te,close:ve,focus:re,slideRect:ee?GE(ee,r.padding):{width:0,height:0},containerRect:ee||{width:0,height:0},subscribeSensors:N,containerRef:q,setCarouselRef:k,toolbarWidth:S,setToolbarWidth:y}),[He,te,ve,re,N,ee,q,k,S,y,r.padding]);return F.useImperativeHandle(c.ref,()=>({prev:He,next:te,close:ve,focus:re,getLightboxProps:pe,getLightboxState:Re}),[He,te,ve,re,pe,Re]),F.createElement("div",{ref:B,className:Ci(xt(E_()),xt(up)),style:{...x===Pn.SWIPE?{[qn("swipe_offset")]:`${Math.round(C.current)}px`}:null,...x===Pn.PULL?{[qn("pull_offset")]:`${Math.round(P.current)}px`,[qn("pull_opacity")]:`${L.current}`}:null,...c.touchAction!=="none"?{[qn("controller_touch_action")]:c.touchAction}:null,...d.container},tabIndex:-1,...z},ee&&F.createElement(ix.Provider,{value:Et},s,(i=m.controls)===null||i===void 0?void 0:i.call(m)))}const vy=Ra(lp,_y);function wr(s){return sl(Uv,s)}function y_(s){return sl(fp,s)}function xy({slide:s,offset:e}){const i=F.useRef(null),{currentIndex:r,slides:l}=Ca(),{slideRect:c,focus:f}=wa(),{render:d,carousel:{imageFit:m,imageProps:p},on:{click:g},styles:{slide:_},labels:v}=Zn(),{getOwnerDocument:S}=ol(),y=e!==0;F.useEffect(()=>{var M;y&&(!((M=i.current)===null||M===void 0)&&M.contains(S().activeElement))&&f()},[y,f,S]);const T=()=>{var M,x,O,C;let P=(M=d.slide)===null||M===void 0?void 0:M.call(d,{slide:s,offset:e,rect:c});return!P&&Xr(s)&&(P=F.createElement(nu,{slide:s,offset:e,render:d,rect:c,imageFit:m,imageProps:p,onClick:y?void 0:()=>g==null?void 0:g({index:r})})),P?F.createElement(F.Fragment,null,(x=d.slideHeader)===null||x===void 0?void 0:x.call(d,{slide:s}),((O=d.slideContainer)!==null&&O!==void 0?O:({children:L})=>L)({slide:s,children:P}),(C=d.slideFooter)===null||C===void 0?void 0:C.call(d,{slide:s})):null};return F.createElement("div",{ref:i,className:Ci(xt(y_()),!y&&xt(y_("current")),xt(up)),...YE(y),style:_,role:"group","aria-roledescription":Vs(v,"Slide"),"aria-label":VE(v,l,r+e)},T())}function Sy(){const s=Zn().styles.slide;return F.createElement("div",{className:xt(fp),style:s})}function My({carousel:s,labels:e}){const{slides:i,currentIndex:r,globalIndex:l}=Ca(),{setCarouselRef:c}=wa(),{autoPlaying:f,focusWithin:d}=Zv(),m=tu(s.spacing),p=tu(s.padding),g=WE(s,i,1),_=[];if(Xv(i))for(let v=r-g;v<=r+g;v+=1){const S=Wv(i,v),y=l-r+v,T=s.finite&&(v<0||v>i.length-1);_.push(T?{key:y}:{key:[`${y}`,XE(S)].filter(Boolean).join("|"),offset:v-r,slide:S})}return F.createElement("div",{ref:c,className:Ci(xt(wr()),_.length>0&&xt(wr("with_slides"))),style:{[`${qn(wr("slides_count"))}`]:_.length,[`${qn(wr("spacing_px"))}`]:m.pixel||0,[`${qn(wr("spacing_percent"))}`]:m.percent||0,[`${qn(wr("padding_px"))}`]:p.pixel||0,[`${qn(wr("padding_percent"))}`]:p.percent||0},role:"region","aria-live":f&&!d?"off":"polite","aria-roledescription":Vs(e,"Carousel"),"aria-label":Vs(e,"Photo gallery")},_.map(({key:v,slide:S,offset:y})=>S?F.createElement(xy,{key:v,slide:S,offset:y}):F.createElement(Sy,{key:v})))}const Ey=Ra(Uv,My);function ax(){const{carousel:s}=Zn(),{slides:e,currentIndex:i}=Ca(),r=e.length===0||s.finite&&i===0,l=e.length===0||s.finite&&i===e.length-1;return{prevDisabled:r,nextDisabled:l}}function yy(s){var e;const i=Mp(),{publish:r}=lu(),{animation:l}=Zn(),{prevDisabled:c,nextDisabled:f}=ax(),d=((e=l.navigation)!==null&&e!==void 0?e:l.swipe)/2,m=M_(()=>r(Fr),d),p=M_(()=>r(Br),d),g=Lt(_=>{switch(_.key){case IE:r(Hs);break;case FE:(i?f:c)||(i?p:m)();break;case BE:(i?c:f)||(i?m:p)();break}});F.useEffect(()=>s(dp,g),[s,g])}function b_({label:s,icon:e,renderIcon:i,action:r,onClick:l,disabled:c,style:f}){return F.createElement(ll,{label:s,icon:e,renderIcon:i,className:xt(`navigation_${r}`),disabled:c,onClick:l,style:f,...fy(wa().focus,c)})}function by({render:{buttonPrev:s,buttonNext:e,iconPrev:i,iconNext:r},styles:l}){const{prev:c,next:f,subscribeSensors:d}=wa(),{prevDisabled:m,nextDisabled:p}=ax();return yy(d),F.createElement(F.Fragment,null,s?s():F.createElement(b_,{label:"Previous",action:Fr,icon:sy,renderIcon:i,style:l.navigationPrev,disabled:m,onClick:c}),e?e():F.createElement(b_,{label:"Next",action:Br,icon:oy,renderIcon:r,style:l.navigationNext,disabled:p,onClick:f}))}const Ty=Ra(CE,by),T_=xt(NE),Ay=xt(Ov);function Ry(s){return"style"in s}function A_(s,e,i){const r=window.getComputedStyle(s),l=i?"padding-left":"padding-right",c=i?r.paddingLeft:r.paddingRight,f=s.style.getPropertyValue(l);return s.style.setProperty(l,`${(ou(c)||0)+e}px`),()=>{f?s.style.setProperty(l,f):s.style.removeProperty(l)}}function Cy({noScroll:{disabled:s},children:e}){const i=Mp(),{getOwnerDocument:r,getOwnerWindow:l}=ol();return F.useEffect(()=>{if(s)return()=>{};const c=[],f=l(),{body:d,documentElement:m}=r(),p=Math.round(f.innerWidth-m.clientWidth);if(p>0){c.push(A_(d,p,i));const g=d.getElementsByTagName("*");for(let _=0;_<g.length;_+=1){const v=g[_];Ry(v)&&f.getComputedStyle(v).getPropertyValue("position")==="fixed"&&!v.classList.contains(Ay)&&c.push(A_(v,p,i))}}return d.classList.add(T_),()=>{d.classList.remove(T_),c.forEach(g=>g())}},[i,s,r,l]),F.createElement(F.Fragment,null,e)}const wy=Ra(wE,Cy);function R_(s){return sl(cp,s)}function C_(s,e,i){const r=s.getAttribute(e);return s.setAttribute(e,i),()=>{r?s.setAttribute(e,r):s.removeAttribute(e)}}function Dy({children:s,animation:e,styles:i,className:r,on:l,portal:c,close:f,labels:d}){const[m,p]=F.useState(!1),[g,_]=F.useState(!1),v=F.useRef([]),S=F.useRef(null),{setTimeout:y}=cu(),{subscribe:T}=lu(),x=Sp()?0:e.fade;F.useEffect(()=>(p(!0),()=>{p(!1),_(!1)}),[]);const O=Lt(()=>{v.current.forEach(z=>z()),v.current=[]}),C=Lt(()=>{var z;_(!1),O(),(z=l.exiting)===null||z===void 0||z.call(l),y(()=>{var N;(N=l.exited)===null||N===void 0||N.call(l),f()},x)});F.useEffect(()=>T(Hs,C),[T,C]);const P=Lt(z=>{var N,Z,A;ZE(z),_(!0),(N=l.entering)===null||N===void 0||N.call(l);const D=(A=(Z=z.parentNode)===null||Z===void 0?void 0:Z.children)!==null&&A!==void 0?A:[];for(let H=0;H<D.length;H+=1){const j=D[H];["TEMPLATE","SCRIPT","STYLE"].indexOf(j.tagName)===-1&&j!==z&&(v.current.push(C_(j,"inert","")),v.current.push(C_(j,"aria-hidden","true")))}v.current.push(()=>{var H,j;(j=(H=S.current)===null||H===void 0?void 0:H.focus)===null||j===void 0||j.call(H)}),y(()=>{var H;(H=l.entered)===null||H===void 0||H.call(l)},x)}),L=F.useCallback(z=>{z?P(z):O()},[P,O]);return m?HE.createPortal(F.createElement(hy,{ref:L,className:Ci(r,xt(R_()),xt(Ov),g&&xt(R_("open"))),"aria-modal":!0,role:"dialog","aria-label":Vs(d,"Lightbox"),style:{...e.fade!==uh.animation.fade?{[qn("fade_animation_duration")]:`${x}ms`}:null,...e.easing.fade!==uh.animation.easing.fade?{[qn("fade_animation_timing_function")]:e.easing.fade}:null,...i.root},onFocus:z=>{S.current||(S.current=z.relatedTarget)}},s),c.root||document.body):null}const Uy=Ra(cp,Dy);function Ly({children:s}){return F.createElement(F.Fragment,null,s)}const Ny=Ra(DE,Ly);function Oy(s){return sl(Lv,s)}function Py({toolbar:{buttons:s},render:{buttonClose:e,iconClose:i},styles:r}){const{close:l,setToolbarWidth:c}=wa(),{setContainerRef:f,containerRect:d}=tx();wi(()=>{c(d==null?void 0:d.width)},[c,d==null?void 0:d.width]);const m=()=>e?e():F.createElement(ll,{key:Hs,label:"Close",icon:ry,renderIcon:i,onClick:l});return F.createElement("div",{ref:f,style:r.toolbar,className:xt(Oy())},s==null?void 0:s.map(p=>p===Hs?m():p))}const Iy=Ra(Lv,Py);function rx(s,e){var i;return F.createElement(s.module.component,{key:s.module.name,...e},(i=s.children)===null||i===void 0?void 0:i.map(r=>rx(r,e)))}function Fy(s,e={}){const{easing:i,...r}=s,{easing:l,...c}=e;return{easing:{...i,...l},...r,...c}}function By({carousel:s,animation:e,render:i,toolbar:r,controller:l,noScroll:c,on:f,plugins:d,slides:m,index:p,...g}){const{animation:_,carousel:v,render:S,toolbar:y,controller:T,noScroll:M,on:x,slides:O,index:C,plugins:P,...L}=uh,{config:z,augmentation:N}=jE([yn(Uy,[yn(wy,[yn(vy,[yn(Ey),yn(Iy),yn(Ty)])])])],d||P),Z=N({animation:Fy(_,e),carousel:{...v,...s},render:{...S,...i},toolbar:{...y,...r},controller:{...T,...l},noScroll:{...M,...c},on:{...x,...f},...L,...g});return Z.open?F.createElement($E,{...Z},F.createElement(ny,{slides:m||O,index:ou(p||C)},F.createElement(iy,null,F.createElement(JE,null,F.createElement(KE,null,rx(yn(Ny,z),Z)))))):null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ep="182",zy=0,w_=1,Hy=2,Yc=1,Vy=2,$o=3,fr=0,Yn=1,xa=2,Ma=0,Bs=1,D_=2,U_=3,L_=4,Gy=5,zr=100,ky=101,Xy=102,Wy=103,qy=104,Yy=200,Zy=201,jy=202,Ky=203,dh=204,hh=205,Qy=206,Jy=207,$y=208,eb=209,tb=210,nb=211,ib=212,ab=213,rb=214,ph=0,mh=1,gh=2,Gs=3,_h=4,vh=5,xh=6,Sh=7,sx=0,sb=1,ob=2,ki=0,ox=1,lx=2,cx=3,ux=4,fx=5,dx=6,hx=7,px=300,kr=301,ks=302,Mh=303,Eh=304,uu=306,yh=1e3,Sa=1001,bh=1002,wn=1003,lb=1004,Tc=1005,In=1006,wd=1007,Vr=1008,mi=1009,mx=1010,gx=1011,nl=1012,yp=1013,qi=1014,Vi=1015,ba=1016,bp=1017,Tp=1018,il=1020,_x=35902,vx=35899,xx=1021,Sx=1022,Ri=1023,Ta=1026,Gr=1027,Mx=1028,Ap=1029,Xs=1030,Rp=1031,Cp=1033,Zc=33776,jc=33777,Kc=33778,Qc=33779,Th=35840,Ah=35841,Rh=35842,Ch=35843,wh=36196,Dh=37492,Uh=37496,Lh=37488,Nh=37489,Oh=37490,Ph=37491,Ih=37808,Fh=37809,Bh=37810,zh=37811,Hh=37812,Vh=37813,Gh=37814,kh=37815,Xh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,jh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,ep=36284,tp=36285,np=36286,cb=3200,ub=0,fb=1,lr="",ai="srgb",Ws="srgb-linear",iu="linear",zt="srgb",bs=7680,N_=519,db=512,hb=513,pb=514,wp=515,mb=516,gb=517,Dp=518,_b=519,O_=35044,P_="300 es",Gi=2e3,au=2001;function Ex(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vb(){const s=ru("canvas");return s.style.display="block",s}const I_={};function F_(...s){const e="THREE."+s.shift();console.log(e,...s)}function rt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ut(...s){const e="THREE."+s.shift();console.error(e,...s)}function al(...s){const e=s.join(" ");e in I_||(I_[e]=!0,rt(...s))}function xb(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Ys{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=Math.PI/180,ip=180/Math.PI;function cl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function yt(s,e,i){return Math.max(e,Math.min(i,s))}function Sb(s,e){return(s%e+e)%e}function Ud(s,e,i){return(1-i)*s+i*e}function qo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,i=0){Rt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,d){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3],v=c[f+0],S=c[f+1],y=c[f+2],T=c[f+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(d>=1){e[i+0]=v,e[i+1]=S,e[i+2]=y,e[i+3]=T;return}if(_!==T||m!==v||p!==S||g!==y){let M=m*v+p*S+g*y+_*T;M<0&&(v=-v,S=-S,y=-y,T=-T,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),C=Math.sin(O);x=Math.sin(x*O)/C,d=Math.sin(d*O)/C,m=m*x+v*d,p=p*x+S*d,g=g*x+y*d,_=_*x+T*d}else{m=m*x+v*d,p=p*x+S*d,g=g*x+y*d,_=_*x+T*d;const O=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=O,p*=O,g*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,f){const d=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[f],v=c[f+1],S=c[f+2],y=c[f+3];return e[i]=d*y+g*_+m*S-p*v,e[i+1]=m*y+g*v+p*_-d*S,e[i+2]=p*y+g*S+d*v-m*_,e[i+3]=g*y-d*_-m*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(r/2),g=d(l/2),_=d(c/2),v=m(r/2),S=m(l/2),y=m(c/2);switch(f){case"XYZ":this._x=v*g*_+p*S*y,this._y=p*S*_-v*g*y,this._z=p*g*y+v*S*_,this._w=p*g*_-v*S*y;break;case"YXZ":this._x=v*g*_+p*S*y,this._y=p*S*_-v*g*y,this._z=p*g*y-v*S*_,this._w=p*g*_+v*S*y;break;case"ZXY":this._x=v*g*_-p*S*y,this._y=p*S*_+v*g*y,this._z=p*g*y+v*S*_,this._w=p*g*_-v*S*y;break;case"ZYX":this._x=v*g*_-p*S*y,this._y=p*S*_+v*g*y,this._z=p*g*y-v*S*_,this._w=p*g*_+v*S*y;break;case"YZX":this._x=v*g*_+p*S*y,this._y=p*S*_+v*g*y,this._z=p*g*y-v*S*_,this._w=p*g*_-v*S*y;break;case"XZY":this._x=v*g*_-p*S*y,this._y=p*S*_-v*g*y,this._z=p*g*y+v*S*_,this._w=p*g*_+v*S*y;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],v=r+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*d+l*p-c*m,this._y=l*g+f*m+c*d-r*p,this._z=c*g+f*p+r*m-l*d,this._w=f*g-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(B_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(B_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*r),g=2*(d*i-c*l),_=2*(c*r-f*i);return this.x=i+m*p+f*_-d*g,this.y=r+m*g+d*p-c*_,this.z=l+m*_+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-r*m,this.z=r*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ld.copy(this).projectOnVector(e),this.sub(Ld)}reflect(e){return this.sub(Ld.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ld=new fe,B_=new ul;class ut{constructor(e,i,r,l,c,f,d,m,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p)}set(e,i,r,l,c,f,d,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],m=r[6],p=r[1],g=r[4],_=r[7],v=r[2],S=r[5],y=r[8],T=l[0],M=l[3],x=l[6],O=l[1],C=l[4],P=l[7],L=l[2],z=l[5],N=l[8];return c[0]=f*T+d*O+m*L,c[3]=f*M+d*C+m*z,c[6]=f*x+d*P+m*N,c[1]=p*T+g*O+_*L,c[4]=p*M+g*C+_*z,c[7]=p*x+g*P+_*N,c[2]=v*T+S*O+y*L,c[5]=v*M+S*C+y*z,c[8]=v*x+S*P+y*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*d*p-r*c*g+r*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*f-d*p,v=d*m-g*c,S=p*c-f*m,y=i*_+r*v+l*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/y;return e[0]=_*T,e[1]=(l*p-g*r)*T,e[2]=(d*r-l*f)*T,e[3]=v*T,e[4]=(g*i-l*m)*T,e[5]=(l*c-d*i)*T,e[6]=S*T,e[7]=(r*m-p*i)*T,e[8]=(f*i-r*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Nd.makeScale(e,i)),this}rotate(e){return this.premultiply(Nd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Nd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nd=new ut,z_=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),H_=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mb(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===zt&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===zt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===lr?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:z_,fromXYZ:H_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:z_,fromXYZ:H_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const At=Mb();function Ea(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class Eb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=ru("canvas")),Ts.width=e.width,Ts.height=e.height;const l=Ts.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ea(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ea(i[r]/255)*255):i[r]=Ea(i[r]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yb=0;class Up{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Od(l[f].image)):c.push(Od(l[f]))}else c=Od(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Od(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Eb.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let bb=0;const Pd=new fe;class zn extends Ys{constructor(e=zn.DEFAULT_IMAGE,i=zn.DEFAULT_MAPPING,r=Sa,l=Sa,c=In,f=Vr,d=Ri,m=mi,p=zn.DEFAULT_ANISOTROPY,g=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=cl(),this.name="",this.source=new Up(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pd).x}get height(){return this.source.getSize(Pd).y}get depth(){return this.source.getSize(Pd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yh:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yh:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=px;zn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,r=0,l=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],v=m[1],S=m[5],y=m[9],T=m[2],M=m[6],x=m[10];if(Math.abs(g-v)<.01&&Math.abs(_-T)<.01&&Math.abs(y-M)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+T)<.1&&Math.abs(y+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(p+1)/2,P=(S+1)/2,L=(x+1)/2,z=(g+v)/4,N=(_+T)/4,Z=(y+M)/4;return C>P&&C>L?C<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(C),l=z/r,c=N/r):P>L?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=z/l,c=Z/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=N/c,l=Z/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-y)*(M-y)+(_-T)*(_-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(M-y)/O,this.y=(_-T)/O,this.z=(v-g)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=yt(this.x,e.x,i.x),this.y=yt(this.y,e.y,i.y),this.z=yt(this.z,e.z,i.z),this.w=yt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=yt(this.x,e,i),this.y=yt(this.y,e,i),this.z=yt(this.z,e,i),this.w=yt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tb extends Ys{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new zn(l);this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Up(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Tb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class yx extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ab extends zn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Mi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Mi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Mi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Mi):Mi.fromBufferAttribute(c,f),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ac.copy(r.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yo),Rc.subVectors(this.max,Yo),As.subVectors(e.a,Yo),Rs.subVectors(e.b,Yo),Cs.subVectors(e.c,Yo),nr.subVectors(Rs,As),ir.subVectors(Cs,Rs),Dr.subVectors(As,Cs);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Dr.z,Dr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Dr.z,0,-Dr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Dr.y,Dr.x,0];return!Id(i,As,Rs,Cs,Rc)||(i=[1,0,0,0,1,0,0,0,1],!Id(i,As,Rs,Cs,Rc))?!1:(Cc.crossVectors(nr,ir),i=[Cc.x,Cc.y,Cc.z],Id(i,As,Rs,Cs,Rc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Mi=new fe,Ac=new fl,As=new fe,Rs=new fe,Cs=new fe,nr=new fe,ir=new fe,Dr=new fe,Yo=new fe,Rc=new fe,Cc=new fe,Ur=new fe;function Id(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Ur.fromArray(s,c);const d=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),g=r.dot(Ur);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const Rb=new fl,Zo=new fe,Fd=new fe;class Lp{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Rb.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(Fd)),this.expandByPoint(Zo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ma=new fe,Bd=new fe,wc=new fe,ar=new fe,zd=new fe,Dc=new fe,Hd=new fe;class Cb{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Bd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Bd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(wc),d=ar.dot(this.direction),m=-ar.dot(wc),p=ar.lengthSq(),g=Math.abs(1-f*f);let _,v,S,y;if(g>0)if(_=f*m-d,v=f*d-m,y=c*g,_>=0)if(v>=-y)if(v<=y){const T=1/g;_*=T,v*=T,S=_*(_+f*v+2*d)+v*(f*_+v+2*m)+p}else v=c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v=-c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;else v<=-y?(_=Math.max(0,-(-f*c+d)),v=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p):v<=y?(_=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(_=Math.max(0,-(f*c+d)),v=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+v*(v+2*m)+p);else v=f>0?-c:c,_=Math.max(0,-(f*v+d)),S=-_*_+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Bd).addScaledVector(wc,v),S}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const r=ma.dot(this.direction),l=ma.dot(ma)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,m=r+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(c=(e.min.y-v.y)*g,f=(e.max.y-v.y)*g):(c=(e.max.y-v.y)*g,f=(e.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),_>=0?(d=(e.min.z-v.z)*_,m=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,m=(e.min.z-v.z)*_),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,r,l,c){zd.subVectors(i,e),Dc.subVectors(r,e),Hd.crossVectors(zd,Dc);let f=this.direction.dot(Hd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ar.subVectors(this.origin,e);const m=d*this.direction.dot(Dc.crossVectors(ar,Dc));if(m<0)return null;const p=d*this.direction.dot(zd.cross(ar));if(p<0||m+p>f)return null;const g=-d*ar.dot(Hd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fn{constructor(e,i,r,l,c,f,d,m,p,g,_,v,S,y,T,M){fn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,d,m,p,g,_,v,S,y,T,M)}set(e,i,r,l,c,f,d,m,p,g,_,v,S,y,T,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=g,x[10]=_,x[14]=v,x[3]=S,x[7]=y,x[11]=T,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ws.setFromMatrixColumn(e,0).length(),c=1/ws.setFromMatrixColumn(e,1).length(),f=1/ws.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const v=f*g,S=f*_,y=d*g,T=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+y*p,i[5]=v-T*p,i[9]=-d*m,i[2]=T-v*p,i[6]=y+S*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*g,S=m*_,y=p*g,T=p*_;i[0]=v+T*d,i[4]=y*d-S,i[8]=f*p,i[1]=f*_,i[5]=f*g,i[9]=-d,i[2]=S*d-y,i[6]=T+v*d,i[10]=f*m}else if(e.order==="ZXY"){const v=m*g,S=m*_,y=p*g,T=p*_;i[0]=v-T*d,i[4]=-f*_,i[8]=y+S*d,i[1]=S+y*d,i[5]=f*g,i[9]=T-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const v=f*g,S=f*_,y=d*g,T=d*_;i[0]=m*g,i[4]=y*p-S,i[8]=v*p+T,i[1]=m*_,i[5]=T*p+v,i[9]=S*p-y,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,S=f*p,y=d*m,T=d*p;i[0]=m*g,i[4]=T-v*_,i[8]=y*_+S,i[1]=_,i[5]=f*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+y,i[10]=v-T*_}else if(e.order==="XZY"){const v=f*m,S=f*p,y=d*m,T=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=v*_+T,i[5]=f*g,i[9]=S*_-y,i[2]=y*_-S,i[6]=d*g,i[10]=T*_+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wb,e,Db)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),rr.crossVectors(r,ni),rr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),rr.crossVectors(r,ni)),rr.normalize(),Uc.crossVectors(ni,rr),l[0]=rr.x,l[4]=Uc.x,l[8]=ni.x,l[1]=rr.y,l[5]=Uc.y,l[9]=ni.y,l[2]=rr.z,l[6]=Uc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],m=r[8],p=r[12],g=r[1],_=r[5],v=r[9],S=r[13],y=r[2],T=r[6],M=r[10],x=r[14],O=r[3],C=r[7],P=r[11],L=r[15],z=l[0],N=l[4],Z=l[8],A=l[12],D=l[1],H=l[5],j=l[9],q=l[13],ae=l[2],ee=l[6],B=l[10],V=l[14],k=l[3],de=l[7],U=l[11],Y=l[15];return c[0]=f*z+d*D+m*ae+p*k,c[4]=f*N+d*H+m*ee+p*de,c[8]=f*Z+d*j+m*B+p*U,c[12]=f*A+d*q+m*V+p*Y,c[1]=g*z+_*D+v*ae+S*k,c[5]=g*N+_*H+v*ee+S*de,c[9]=g*Z+_*j+v*B+S*U,c[13]=g*A+_*q+v*V+S*Y,c[2]=y*z+T*D+M*ae+x*k,c[6]=y*N+T*H+M*ee+x*de,c[10]=y*Z+T*j+M*B+x*U,c[14]=y*A+T*q+M*V+x*Y,c[3]=O*z+C*D+P*ae+L*k,c[7]=O*N+C*H+P*ee+L*de,c[11]=O*Z+C*j+P*B+L*U,c[15]=O*A+C*q+P*V+L*Y,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],v=e[10],S=e[14],y=e[3],T=e[7],M=e[11],x=e[15],O=m*S-p*v,C=d*S-p*_,P=d*v-m*_,L=f*S-p*g,z=f*v-m*g,N=f*_-d*g;return i*(T*O-M*C+x*P)-r*(y*O-M*L+x*z)+l*(y*C-T*L+x*N)-c*(y*P-T*z+M*N)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],v=e[10],S=e[11],y=e[12],T=e[13],M=e[14],x=e[15],O=_*M*p-T*v*p+T*m*S-d*M*S-_*m*x+d*v*x,C=y*v*p-g*M*p-y*m*S+f*M*S+g*m*x-f*v*x,P=g*T*p-y*_*p+y*d*S-f*T*S-g*d*x+f*_*x,L=y*_*m-g*T*m-y*d*v+f*T*v+g*d*M-f*_*M,z=i*O+r*C+l*P+c*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return e[0]=O*N,e[1]=(T*v*c-_*M*c-T*l*S+r*M*S+_*l*x-r*v*x)*N,e[2]=(d*M*c-T*m*c+T*l*p-r*M*p-d*l*x+r*m*x)*N,e[3]=(_*m*c-d*v*c-_*l*p+r*v*p+d*l*S-r*m*S)*N,e[4]=C*N,e[5]=(g*M*c-y*v*c+y*l*S-i*M*S-g*l*x+i*v*x)*N,e[6]=(y*m*c-f*M*c-y*l*p+i*M*p+f*l*x-i*m*x)*N,e[7]=(f*v*c-g*m*c+g*l*p-i*v*p-f*l*S+i*m*S)*N,e[8]=P*N,e[9]=(y*_*c-g*T*c-y*r*S+i*T*S+g*r*x-i*_*x)*N,e[10]=(f*T*c-y*d*c+y*r*p-i*T*p-f*r*x+i*d*x)*N,e[11]=(g*d*c-f*_*c-g*r*p+i*_*p+f*r*S-i*d*S)*N,e[12]=L*N,e[13]=(g*T*l-y*_*l+y*r*v-i*T*v-g*r*M+i*_*M)*N,e[14]=(y*d*l-f*T*l-y*r*m+i*T*m+f*r*M-i*d*M)*N,e[15]=(f*_*l-g*d*l+g*r*m-i*_*m-f*r*v+i*d*v)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,d=e.y,m=e.z,p=c*f,g=c*d;return this.set(p*f+r,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+r,g*m-l*f,0,p*m-l*d,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,g=f+f,_=d+d,v=c*p,S=c*g,y=c*_,T=f*g,M=f*_,x=d*_,O=m*p,C=m*g,P=m*_,L=r.x,z=r.y,N=r.z;return l[0]=(1-(T+x))*L,l[1]=(S+P)*L,l[2]=(y-C)*L,l[3]=0,l[4]=(S-P)*z,l[5]=(1-(v+x))*z,l[6]=(M+O)*z,l[7]=0,l[8]=(y+C)*N,l[9]=(M-O)*N,l[10]=(1-(v+T))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ws.set(l[0],l[1],l[2]).length();const f=ws.set(l[4],l[5],l[6]).length(),d=ws.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ei.copy(this);const p=1/c,g=1/f,_=1/d;return Ei.elements[0]*=p,Ei.elements[1]*=p,Ei.elements[2]*=p,Ei.elements[4]*=g,Ei.elements[5]*=g,Ei.elements[6]*=g,Ei.elements[8]*=_,Ei.elements[9]*=_,Ei.elements[10]*=_,i.setFromRotationMatrix(Ei),r.x=c,r.y=f,r.z=d,this}makePerspective(e,i,r,l,c,f,d=Gi,m=!1){const p=this.elements,g=2*c/(i-e),_=2*c/(r-l),v=(i+e)/(i-e),S=(r+l)/(r-l);let y,T;if(m)y=c/(f-c),T=f*c/(f-c);else if(d===Gi)y=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===au)y=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,d=Gi,m=!1){const p=this.elements,g=2/(i-e),_=2/(r-l),v=-(i+e)/(i-e),S=-(r+l)/(r-l);let y,T;if(m)y=1/(f-c),T=f/(f-c);else if(d===Gi)y=-2/(f-c),T=-(f+c)/(f-c);else if(d===au)y=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=y,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ws=new fe,Ei=new fn,wb=new fe(0,0,0),Db=new fe(1,1,1),rr=new fe,Uc=new fe,ni=new fe,V_=new fn,G_=new ul;class Aa{constructor(e=0,i=0,r=0,l=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return V_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class bx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ub=0;const k_=new fe,Ds=new ul,ga=new fn,Lc=new fe,jo=new fe,Lb=new fe,Nb=new ul,X_=new fe(1,0,0),W_=new fe(0,1,0),q_=new fe(0,0,1),Y_={type:"added"},Ob={type:"removed"},Us={type:"childadded",child:null},Vd={type:"childremoved",child:null};class ri extends Ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new fe,i=new Aa,r=new ul,l=new fe(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new fn},normalMatrix:{value:new ut}}),this.matrix=new fn,this.matrixWorld=new fn,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ds.setFromAxisAngle(e,i),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,i){return Ds.setFromAxisAngle(e,i),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(W_,e)}rotateZ(e){return this.rotateOnAxis(q_,e)}translateOnAxis(e,i){return k_.copy(e).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(W_,e)}translateZ(e){return this.translateOnAxis(q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Lc.copy(e):Lc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,Lc,this.up):ga.lookAt(Lc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Ds.setFromRotationMatrix(ga),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Y_),Us.child=e,this.dispatchEvent(Us),Us.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ob),Vd.child=e,this.dispatchEvent(Vd),Vd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Y_),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,Lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,Nb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),_=f(e.shapes),v=f(e.skeletons),S=f(e.animations),y=f(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),y.length>0&&(r.nodes=y)}return r.object=l,r;function f(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ri.DEFAULT_UP=new fe(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new fe,_a=new fe,Gd=new fe,va=new fe,Ls=new fe,Ns=new fe,Z_=new fe,kd=new fe,Xd=new fe,Wd=new fe,qd=new sn,Yd=new sn,Zd=new sn;class Ai{constructor(e=new fe,i=new fe,r=new fe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),yi.subVectors(e,i),l.cross(yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){yi.subVectors(l,i),_a.subVectors(r,i),Gd.subVectors(e,i);const f=yi.dot(yi),d=yi.dot(_a),m=yi.dot(Gd),p=_a.dot(_a),g=_a.dot(Gd),_=f*p-d*d;if(_===0)return c.set(0,0,0),null;const v=1/_,S=(p*m-d*g)*v,y=(f*g-d*m)*v;return c.set(1-S-y,y,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,r,l,c,f,d,m){return this.getBarycoord(e,i,r,l,va)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,va.x),m.addScaledVector(f,va.y),m.addScaledVector(d,va.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return qd.setScalar(0),Yd.setScalar(0),Zd.setScalar(0),qd.fromBufferAttribute(e,i),Yd.fromBufferAttribute(e,r),Zd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(qd,c.x),f.addScaledVector(Yd,c.y),f.addScaledVector(Zd,c.z),f}static isFrontFacing(e,i,r,l){return yi.subVectors(r,i),_a.subVectors(e,i),yi.cross(_a).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),_a.subVectors(this.a,this.b),yi.cross(_a).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,d;Ls.subVectors(l,r),Ns.subVectors(c,r),kd.subVectors(e,r);const m=Ls.dot(kd),p=Ns.dot(kd);if(m<=0&&p<=0)return i.copy(r);Xd.subVectors(e,l);const g=Ls.dot(Xd),_=Ns.dot(Xd);if(g>=0&&_<=g)return i.copy(l);const v=m*_-g*p;if(v<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Ls,f);Wd.subVectors(e,c);const S=Ls.dot(Wd),y=Ns.dot(Wd);if(y>=0&&S<=y)return i.copy(c);const T=S*p-m*y;if(T<=0&&p>=0&&y<=0)return d=p/(p-y),i.copy(r).addScaledVector(Ns,d);const M=g*y-S*_;if(M<=0&&_-g>=0&&S-y>=0)return Z_.subVectors(c,l),d=(_-g)/(_-g+(S-y)),i.copy(l).addScaledVector(Z_,d);const x=1/(M+T+v);return f=T*x,d=v*x,i.copy(r).addScaledVector(Ls,f).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function jd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=r,At.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=At.workingColorSpace){if(e=Sb(e,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=jd(f,c,e+1/3),this.g=jd(f,c,e),this.b=jd(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=Tx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return At.workingToColorSpace(On.copy(this),e),Math.round(yt(On.r*255,0,255))*65536+Math.round(yt(On.g*255,0,255))*256+Math.round(yt(On.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const g=(d+f)/2;if(d===f)m=0,p=0;else{const _=f-d;switch(p=g<=.5?_/(f+d):_/(2-f-d),f){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ai){At.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Nc);const r=Ud(sr.h,Nc.h,i),l=Ud(sr.s,Nc.s,i),c=Ud(sr.l,Nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new kt;kt.NAMES=Tx;let Pb=0;class fu extends Ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Bs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=hh,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dh&&(r.blendSrc=this.blendSrc),this.blendDst!==hh&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ax extends fu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new fe,Oc=new Rt;let Ib=0;class Wi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ib++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=O_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=qo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O_&&(e.usage=this.usage),e}}class Rx extends Wi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Cx extends Wi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class ya extends Wi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let Fb=0;const pi=new fn,Kd=new ri,Os=new fe,ii=new fl,Ko=new fl,En=new fe;class Da extends Ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ex(e)?Cx:Rx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ut().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,r){return pi.makeTranslation(e,i,r),this.applyMatrix4(pi),this}scale(e,i,r){return pi.makeScale(e,i,r),this.applyMatrix4(pi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ya(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ko.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ii.min,Ko.min),ii.expandByPoint(En),En.addVectors(ii.max,Ko.max),ii.expandByPoint(En)):(ii.expandByPoint(Ko.min),ii.expandByPoint(Ko.max))}ii.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)En.fromBufferAttribute(d,p),m&&(Os.fromBufferAttribute(e,p),En.add(Os)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new fe,m[Z]=new fe;const p=new fe,g=new fe,_=new fe,v=new Rt,S=new Rt,y=new Rt,T=new fe,M=new fe;function x(Z,A,D){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,A),_.fromBufferAttribute(r,D),v.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,A),y.fromBufferAttribute(c,D),g.sub(p),_.sub(p),S.sub(v),y.sub(v);const H=1/(S.x*y.y-y.x*S.y);isFinite(H)&&(T.copy(g).multiplyScalar(y.y).addScaledVector(_,-S.y).multiplyScalar(H),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-y.x).multiplyScalar(H),d[Z].add(T),d[A].add(T),d[D].add(T),m[Z].add(M),m[A].add(M),m[D].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,A=O.length;Z<A;++Z){const D=O[Z],H=D.start,j=D.count;for(let q=H,ae=H+j;q<ae;q+=3)x(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new fe,P=new fe,L=new fe,z=new fe;function N(Z){L.fromBufferAttribute(l,Z),z.copy(L);const A=d[Z];C.copy(A),C.sub(L.multiplyScalar(L.dot(A))).normalize(),P.crossVectors(z,A);const H=P.dot(m[Z])<0?-1:1;f.setXYZW(Z,C.x,C.y,C.z,H)}for(let Z=0,A=O.length;Z<A;++Z){const D=O[Z],H=D.start,j=D.count;for(let q=H,ae=H+j;q<ae;q+=3)N(e.getX(q+0)),N(e.getX(q+1)),N(e.getX(q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new fe,c=new fe,f=new fe,d=new fe,m=new fe,p=new fe,g=new fe,_=new fe;if(e)for(let v=0,S=e.count;v<S;v+=3){const y=e.getX(v+0),T=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(r,y),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),d.add(g),m.add(g),p.add(g),r.setXYZ(y,d.x,d.y,d.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),_.subVectors(l,c),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,v=new p.constructor(m.length*g);let S=0,y=0;for(let T=0,M=m.length;T<M;T++){d.isInterleavedBufferAttribute?S=m[T]*d.data.stride+d.offset:S=m[T]*g;for(let x=0;x<g;x++)v[y++]=p[S++]}return new Wi(v,g,_)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Da,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=e(v,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j_=new fn,Lr=new Cb,Pc=new Lp,K_=new fe,Ic=new fe,Fc=new fe,Bc=new fe,Qd=new fe,zc=new fe,Q_=new fe,Hc=new fe;class Yi extends ri{constructor(e=new Da,i=new Ax){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){zc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Qd.fromBufferAttribute(_,e),f?zc.addScaledVector(Qd,g):zc.addScaledVector(Qd.sub(i),g))}i.add(zc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pc.copy(r.boundingSphere),Pc.applyMatrix4(c),Lr.copy(e.ray).recast(e.near),!(Pc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Pc,K_)===null||Lr.origin.distanceToSquared(K_)>(e.far-e.near)**2))&&(j_.copy(c).invert(),Lr.copy(e.ray).applyMatrix4(j_),!(r.boundingBox!==null&&Lr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Lr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let y=0,T=v.length;y<T;y++){const M=v[y],x=f[M.materialIndex],O=Math.max(M.start,S.start),C=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let P=O,L=C;P<L;P+=3){const z=d.getX(P),N=d.getX(P+1),Z=d.getX(P+2);l=Vc(this,x,e,r,p,g,_,z,N,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const y=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let M=y,x=T;M<x;M+=3){const O=d.getX(M),C=d.getX(M+1),P=d.getX(M+2);l=Vc(this,f,e,r,p,g,_,O,C,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let y=0,T=v.length;y<T;y++){const M=v[y],x=f[M.materialIndex],O=Math.max(M.start,S.start),C=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let P=O,L=C;P<L;P+=3){const z=P,N=P+1,Z=P+2;l=Vc(this,x,e,r,p,g,_,z,N,Z),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const y=Math.max(0,S.start),T=Math.min(m.count,S.start+S.count);for(let M=y,x=T;M<x;M+=3){const O=M,C=M+1,P=M+2;l=Vc(this,f,e,r,p,g,_,O,C,P),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Bb(s,e,i,r,l,c,f,d){let m;if(e.side===Yn?m=r.intersectTriangle(f,c,l,!0,d):m=r.intersectTriangle(l,c,f,e.side===fr,d),m===null)return null;Hc.copy(d),Hc.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Hc);return p<i.near||p>i.far?null:{distance:p,point:Hc.clone(),object:s}}function Vc(s,e,i,r,l,c,f,d,m,p){s.getVertexPosition(d,Ic),s.getVertexPosition(m,Fc),s.getVertexPosition(p,Bc);const g=Bb(s,e,i,r,Ic,Fc,Bc,Q_);if(g){const _=new fe;Ai.getBarycoord(Q_,Ic,Fc,Bc,_),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,m,p,_,new Rt)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,m,p,_,new Rt)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,m,p,_,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new fe,materialIndex:0};Ai.getNormal(Ic,Fc,Bc,v.normal),g.face=v,g.barycoord=_}return g}class dl extends Da{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],_=[];let v=0,S=0;y("z","y","x",-1,-1,r,i,e,f,c,0),y("z","y","x",1,-1,r,i,-e,f,c,1),y("x","z","y",1,1,e,r,i,l,f,2),y("x","z","y",1,-1,e,r,-i,l,f,3),y("x","y","z",1,-1,e,i,r,l,c,4),y("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new ya(p,3)),this.setAttribute("normal",new ya(g,3)),this.setAttribute("uv",new ya(_,2));function y(T,M,x,O,C,P,L,z,N,Z,A){const D=P/N,H=L/Z,j=P/2,q=L/2,ae=z/2,ee=N+1,B=Z+1;let V=0,k=0;const de=new fe;for(let U=0;U<B;U++){const Y=U*H-q;for(let re=0;re<ee;re++){const pe=re*D-j;de[T]=pe*O,de[M]=Y*C,de[x]=ae,p.push(de.x,de.y,de.z),de[T]=0,de[M]=0,de[x]=z>0?1:-1,g.push(de.x,de.y,de.z),_.push(re/N),_.push(1-U/Z),V+=1}}for(let U=0;U<Z;U++)for(let Y=0;Y<N;Y++){const re=v+Y+ee*U,pe=v+Y+ee*(U+1),Re=v+(Y+1)+ee*(U+1),He=v+(Y+1)+ee*U;m.push(re,pe,He),m.push(pe,Re,He),k+=6}d.addGroup(S,k,A),S+=k,v+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(s){const e={};for(let i=0;i<s.length;i++){const r=qs(s[i]);for(const l in r)e[l]=r[l]}return e}function zb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function wx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const Hb={clone:qs,merge:Bn};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends fu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=Gb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=zb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Dx extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fn,this.projectionMatrix=new fn,this.projectionMatrixInverse=new fn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new fe,J_=new Rt,$_=new Rt;class Ti extends Dx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ip*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ip*2*Math.atan(Math.tan(Dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,i){return this.getViewBounds(e,J_,$_),i.subVectors($_,J_)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Dd*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ps=-90,Is=1;class kb extends ri{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ti(Ps,Is,e,i);l.layers=this.layers,this.add(l);const c=new Ti(Ps,Is,e,i);c.layers=this.layers,this.add(c);const f=new Ti(Ps,Is,e,i);f.layers=this.layers,this.add(f);const d=new Ti(Ps,Is,e,i);d.layers=this.layers,this.add(d);const m=new Ti(Ps,Is,e,i);m.layers=this.layers,this.add(m);const p=new Ti(Ps,Is,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,g]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,v,S),e.xr.enabled=y,r.texture.needsPMREMUpdate=!0}}class Ux extends zn{constructor(e=[],i=kr,r,l,c,f,d,m,p,g){super(e,i,r,l,c,f,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lx extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ux(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new dl(5,5,5),c=new Di({name:"CubemapFromEquirect",uniforms:qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new Yi(l,c),d=i.minFilter;return i.minFilter===Vr&&(i.minFilter=In),new kb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Gc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class Jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const M=i.getJointPose(T,r),x=this._getHandJoint(p,T);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,y=.005;p.inputState.pinching&&v>S+y?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-y&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Gc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Wb extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class qb extends zn{constructor(e=null,i=1,r=1,l,c,f,d,m,p=wn,g=wn,_,v){super(null,f,d,m,p,g,l,c,_,v),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $d=new fe,Yb=new fe,Zb=new ut;class Ir{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=$d.subVectors(r,i).cross(Yb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta($d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Zb.getNormalMatrix(e),l=this.coplanarPoint($d).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Lp,jb=new Rt(.5,.5),kc=new fe;class Nx{constructor(e=new Ir,i=new Ir,r=new Ir,l=new Ir,c=new Ir,f=new Ir){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Gi,r=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],v=c[6],S=c[7],y=c[8],T=c[9],M=c[10],x=c[11],O=c[12],C=c[13],P=c[14],L=c[15];if(l[0].setComponents(p-f,S-g,x-y,L-O).normalize(),l[1].setComponents(p+f,S+g,x+y,L+O).normalize(),l[2].setComponents(p+d,S+_,x+T,L+C).normalize(),l[3].setComponents(p-d,S-_,x-T,L-C).normalize(),r)l[4].setComponents(m,v,M,P).normalize(),l[5].setComponents(p-m,S-v,x-M,L-P).normalize();else if(l[4].setComponents(p-m,S-v,x-M,L-P).normalize(),i===Gi)l[5].setComponents(p+m,S+v,x+M,L+P).normalize();else if(i===au)l[5].setComponents(m,v,M,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);const i=jb.distanceTo(e.center);return Nr.radius=.7071067811865476+i,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rl extends zn{constructor(e,i,r=qi,l,c,f,d=wn,m=wn,p,g=Ta,_=1){if(g!==Ta&&g!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:_};super(v,l,c,f,d,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Up(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Kb extends rl{constructor(e,i=qi,r=kr,l,c,f=wn,d=wn,m,p=Ta){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,i,r,l,c,f,d,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ox extends zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hl extends Da{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,g=m+1,_=e/d,v=i/m,S=[],y=[],T=[],M=[];for(let x=0;x<g;x++){const O=x*v-f;for(let C=0;C<p;C++){const P=C*_-c;y.push(P,-O,0),T.push(0,0,1),M.push(C/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const C=O+p*x,P=O+p*(x+1),L=O+1+p*(x+1),z=O+1+p*x;S.push(C,P,z),S.push(P,L,z)}this.setIndex(S),this.setAttribute("position",new ya(y,3)),this.setAttribute("normal",new ya(T,3)),this.setAttribute("uv",new ya(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Qb extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jb extends fu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=cb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $b extends fu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Np extends Dx{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class e1 extends Ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class t1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function ev(s,e,i,r){const l=n1(r);switch(i){case xx:return s*e;case Mx:return s*e/l.components*l.byteLength;case Ap:return s*e/l.components*l.byteLength;case Xs:return s*e*2/l.components*l.byteLength;case Rp:return s*e*2/l.components*l.byteLength;case Sx:return s*e*3/l.components*l.byteLength;case Ri:return s*e*4/l.components*l.byteLength;case Cp:return s*e*4/l.components*l.byteLength;case Zc:case jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Ch:return Math.max(s,16)*Math.max(e,8)/4;case Th:case Rh:return Math.max(s,8)*Math.max(e,8)/2;case wh:case Dh:case Lh:case Nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Uh:case Oh:case Ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tp:case np:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function n1(s){switch(s){case mi:case mx:return{byteLength:1,components:1};case nl:case gx:case ba:return{byteLength:2,components:1};case bp:case Tp:return{byteLength:2,components:4};case qi:case yp:case Vi:return{byteLength:4,components:1};case _x:case vx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ep}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ep);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Px(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function i1(s){const e=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,v=s.createBuffer();s.bindBuffer(m,v),s.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,m,p){const g=m.array,_=m.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,y)=>S.start-y.start);let v=0;for(let S=1;S<_.length;S++){const y=_[v],T=_[S];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++v,_[v]=T)}_.length=v+1;for(let S=0,y=_.length;S<y;S++){const T=_[S];s.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(s.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var a1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
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
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,c1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u1=`#ifdef USE_AOMAP
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d1=`#ifdef USE_BATCHING
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
#endif`,h1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_1=`#ifdef USE_IRIDESCENCE
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
#endif`,v1=`#ifdef USE_BUMPMAP
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
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R1=`#define PI 3.141592653589793
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
} // validated`,C1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,w1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O1="gl_FragColor = linearToOutputTexel( gl_FragColor );",P1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I1=`#ifdef USE_ENVMAP
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
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,V1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,X1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#endif`,K1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tT=`PhysicalMaterial material;
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
#endif`,nT=`uniform sampler2D dfgLUT;
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
}`,iT=`
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
#endif`,aT=`#if defined( RE_IndirectDiffuse )
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
#endif`,rT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hT=`#if defined( USE_POINTS_UV )
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
#endif`,pT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_T=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xT=`#ifdef USE_MORPHTARGETS
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
#endif`,ST=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AT=`#ifdef USE_NORMALMAP
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
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,OT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,GT=`float getShadowMask() {
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
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XT=`#ifdef USE_SKINNING
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
#endif`,WT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
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
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,QT=`#ifdef USE_TRANSMISSION
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
#endif`,JT=`#ifdef USE_TRANSMISSION
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
#endif`,$T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,oA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`#include <common>
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
}`,uA=`#if DEPTH_PACKING == 3200
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
}`,fA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
}`,hA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mA=`uniform float scale;
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
}`,gA=`uniform vec3 diffuse;
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
}`,_A=`#include <common>
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
}`,vA=`uniform vec3 diffuse;
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
}`,xA=`#define LAMBERT
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
}`,SA=`#define LAMBERT
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
}`,MA=`#define MATCAP
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
}`,EA=`#define MATCAP
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
}`,yA=`#define NORMAL
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
}`,bA=`#define NORMAL
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
}`,TA=`#define PHONG
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
}`,AA=`#define PHONG
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
}`,RA=`#define STANDARD
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
}`,CA=`#define STANDARD
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
}`,wA=`#define TOON
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
}`,DA=`#define TOON
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
}`,UA=`uniform float size;
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
}`,LA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,OA=`uniform vec3 color;
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
}`,PA=`uniform float rotation;
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
}`,IA=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:a1,alphahash_pars_fragment:r1,alphamap_fragment:s1,alphamap_pars_fragment:o1,alphatest_fragment:l1,alphatest_pars_fragment:c1,aomap_fragment:u1,aomap_pars_fragment:f1,batching_pars_vertex:d1,batching_vertex:h1,begin_vertex:p1,beginnormal_vertex:m1,bsdfs:g1,iridescence_fragment:_1,bumpmap_pars_fragment:v1,clipping_planes_fragment:x1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:M1,clipping_planes_vertex:E1,color_fragment:y1,color_pars_fragment:b1,color_pars_vertex:T1,color_vertex:A1,common:R1,cube_uv_reflection_fragment:C1,defaultnormal_vertex:w1,displacementmap_pars_vertex:D1,displacementmap_vertex:U1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:O1,colorspace_pars_fragment:P1,envmap_fragment:I1,envmap_common_pars_fragment:F1,envmap_pars_fragment:B1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:K1,envmap_vertex:H1,fog_vertex:V1,fog_pars_vertex:G1,fog_fragment:k1,fog_pars_fragment:X1,gradientmap_pars_fragment:W1,lightmap_pars_fragment:q1,lights_lambert_fragment:Y1,lights_lambert_pars_fragment:Z1,lights_pars_begin:j1,lights_toon_fragment:Q1,lights_toon_pars_fragment:J1,lights_phong_fragment:$1,lights_phong_pars_fragment:eT,lights_physical_fragment:tT,lights_physical_pars_fragment:nT,lights_fragment_begin:iT,lights_fragment_maps:aT,lights_fragment_end:rT,logdepthbuf_fragment:sT,logdepthbuf_pars_fragment:oT,logdepthbuf_pars_vertex:lT,logdepthbuf_vertex:cT,map_fragment:uT,map_pars_fragment:fT,map_particle_fragment:dT,map_particle_pars_fragment:hT,metalnessmap_fragment:pT,metalnessmap_pars_fragment:mT,morphinstance_vertex:gT,morphcolor_vertex:_T,morphnormal_vertex:vT,morphtarget_pars_vertex:xT,morphtarget_vertex:ST,normal_fragment_begin:MT,normal_fragment_maps:ET,normal_pars_fragment:yT,normal_pars_vertex:bT,normal_vertex:TT,normalmap_pars_fragment:AT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:CT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:DT,opaque_fragment:UT,packing:LT,premultiplied_alpha_fragment:NT,project_vertex:OT,dithering_fragment:PT,dithering_pars_fragment:IT,roughnessmap_fragment:FT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:zT,shadowmap_pars_vertex:HT,shadowmap_vertex:VT,shadowmask_pars_fragment:GT,skinbase_vertex:kT,skinning_pars_vertex:XT,skinning_vertex:WT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:ZT,tonemapping_fragment:jT,tonemapping_pars_fragment:KT,transmission_fragment:QT,transmission_pars_fragment:JT,uv_pars_fragment:$T,uv_pars_vertex:eA,uv_vertex:tA,worldpos_vertex:nA,background_vert:iA,background_frag:aA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:oA,cube_frag:lA,depth_vert:cA,depth_frag:uA,distance_vert:fA,distance_frag:dA,equirect_vert:hA,equirect_frag:pA,linedashed_vert:mA,linedashed_frag:gA,meshbasic_vert:_A,meshbasic_frag:vA,meshlambert_vert:xA,meshlambert_frag:SA,meshmatcap_vert:MA,meshmatcap_frag:EA,meshnormal_vert:yA,meshnormal_frag:bA,meshphong_vert:TA,meshphong_frag:AA,meshphysical_vert:RA,meshphysical_frag:CA,meshtoon_vert:wA,meshtoon_frag:DA,points_vert:UA,points_frag:LA,shadow_vert:NA,shadow_frag:OA,sprite_vert:PA,sprite_frag:IA},Fe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Bn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Bn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Bn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new kt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Bn([Fe.points,Fe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Bn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Bn([Fe.common,Fe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Bn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Bn([Fe.sprite,Fe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Bn([Fe.common,Fe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Bn([Fe.lights,Fe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Xc={r:0,b:0,g:0},Or=new Aa,FA=new fn;function BA(s,e,i,r,l,c,f){const d=new kt(0);let m=c===!0?0:1,p,g,_=null,v=0,S=null;function y(C){let P=C.isScene===!0?C.background:null;return P&&P.isTexture&&(P=(C.backgroundBlurriness>0?i:e).get(P)),P}function T(C){let P=!1;const L=y(C);L===null?x(d,m):L&&L.isColor&&(x(L,1),P=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(C,P){const L=y(P);L&&(L.isCubeTexture||L.mapping===uu)?(g===void 0&&(g=new Yi(new dl(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:qs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,N,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Or.copy(P.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(FA.makeRotationFromEuler(Or)),g.material.toneMapped=At.getTransfer(L.colorSpace)!==zt,(_!==L||v!==L.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=L,v=L.version,S=s.toneMapping),g.layers.enableAll(),C.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Yi(new hl(2,2),new Di({name:"BackgroundMaterial",uniforms:qs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=At.getTransfer(L.colorSpace)!==zt,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,S=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function x(C,P){C.getRGB(Xc,wx(s)),r.buffers.color.setClear(Xc.r,Xc.g,Xc.b,P,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,P=1){d.set(C),m=P,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(C){m=C,x(d,m)},render:T,addToRenderList:M,dispose:O}}function zA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function d(D,H,j,q,ae){let ee=!1;const B=_(q,j,H);c!==B&&(c=B,p(c.object)),ee=S(D,q,j,ae),ee&&y(D,q,j,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(ee||f)&&(f=!1,P(D,H,j,q),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function _(D,H,j){const q=j.wireframe===!0;let ae=r[D.id];ae===void 0&&(ae={},r[D.id]=ae);let ee=ae[H.id];ee===void 0&&(ee={},ae[H.id]=ee);let B=ee[q];return B===void 0&&(B=v(m()),ee[q]=B),B}function v(D){const H=[],j=[],q=[];for(let ae=0;ae<i;ae++)H[ae]=0,j[ae]=0,q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:j,attributeDivisors:q,object:D,attributes:{},index:null}}function S(D,H,j,q){const ae=c.attributes,ee=H.attributes;let B=0;const V=j.getAttributes();for(const k in V)if(V[k].location>=0){const U=ae[k];let Y=ee[k];if(Y===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==q}function y(D,H,j,q){const ae={},ee=H.attributes;let B=0;const V=j.getAttributes();for(const k in V)if(V[k].location>=0){let U=ee[k];U===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&(U=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&(U=D.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),ae[k]=Y,B++}c.attributes=ae,c.attributesNum=B,c.index=q}function T(){const D=c.newAttributes;for(let H=0,j=D.length;H<j;H++)D[H]=0}function M(D){x(D,0)}function x(D,H){const j=c.newAttributes,q=c.enabledAttributes,ae=c.attributeDivisors;j[D]=1,q[D]===0&&(s.enableVertexAttribArray(D),q[D]=1),ae[D]!==H&&(s.vertexAttribDivisor(D,H),ae[D]=H)}function O(){const D=c.newAttributes,H=c.enabledAttributes;for(let j=0,q=H.length;j<q;j++)H[j]!==D[j]&&(s.disableVertexAttribArray(j),H[j]=0)}function C(D,H,j,q,ae,ee,B){B===!0?s.vertexAttribIPointer(D,H,j,ae,ee):s.vertexAttribPointer(D,H,j,q,ae,ee)}function P(D,H,j,q){T();const ae=q.attributes,ee=j.getAttributes(),B=H.defaultAttributeValues;for(const V in ee){const k=ee[V];if(k.location>=0){let de=ae[V];if(de===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),de!==void 0){const U=de.normalized,Y=de.itemSize,re=e.get(de);if(re===void 0)continue;const pe=re.buffer,Re=re.type,He=re.bytesPerElement,te=Re===s.INT||Re===s.UNSIGNED_INT||de.gpuType===yp;if(de.isInterleavedBufferAttribute){const ve=de.data,Te=ve.stride,Je=de.offset;if(ve.isInstancedInterleavedBuffer){for(let Ge=0;Ge<k.locationSize;Ge++)x(k.location+Ge,ve.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Ge=0;Ge<k.locationSize;Ge++)M(k.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ge=0;Ge<k.locationSize;Ge++)C(k.location+Ge,Y/k.locationSize,Re,U,Te*He,(Je+Y/k.locationSize*Ge)*He,te)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<k.locationSize;ve++)x(k.location+ve,de.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<k.locationSize;ve++)M(k.location+ve);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let ve=0;ve<k.locationSize;ve++)C(k.location+ve,Y/k.locationSize,Re,U,Y*He,Y/k.locationSize*ve*He,te)}}else if(B!==void 0){const U=B[V];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(k.location,U);break;case 3:s.vertexAttrib3fv(k.location,U);break;case 4:s.vertexAttrib4fv(k.location,U);break;default:s.vertexAttrib1fv(k.location,U)}}}}O()}function L(){Z();for(const D in r){const H=r[D];for(const j in H){const q=H[j];for(const ae in q)g(q[ae].object),delete q[ae];delete H[j]}delete r[D]}}function z(D){if(r[D.id]===void 0)return;const H=r[D.id];for(const j in H){const q=H[j];for(const ae in q)g(q[ae].object),delete q[ae];delete H[j]}delete r[D.id]}function N(D){for(const H in r){const j=r[H];if(j[D.id]===void 0)continue;const q=j[D.id];for(const ae in q)g(q[ae].object),delete q[ae];delete j[D.id]}}function Z(){A(),f=!0,c!==l&&(c=l,p(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:T,enableAttribute:M,disableUnusedAttributes:O}}function HA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),i.update(g,r,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let y=0;y<_;y++)S+=g[y];i.update(S,r,1)}function m(p,g,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<p.length;y++)f(p[y],g[y],v[y]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,v,0,_);let y=0;for(let T=0;T<_;T++)y+=g[T]*v[T];i.update(y,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function VA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(N){return!(N!==Ri&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const Z=N===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==mi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!Z)}function m(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(rt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:C,maxFragmentUniforms:P,maxSamples:L,samples:z}}function GA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new Ir,d=new ut,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||l;return l=v,r=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,v){i=g(_,v,0)},this.setState=function(_,v,S){const y=_.clippingPlanes,T=_.clipIntersection,M=_.clipShadows,x=s.get(_);if(!l||y===null||y.length===0||c&&!M)c?g(null):p();else{const O=c?0:r,C=O*4;let P=x.clippingState||null;m.value=P,P=g(y,v,C,S);for(let L=0;L!==C;++L)P[L]=i[L];x.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,v,S,y){const T=_!==null?_.length:0;let M=null;if(T!==0){if(M=m.value,y!==!0||M===null){const x=S+T*4,O=v.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let C=0,P=S;C!==T;++C,P+=4)f.copy(_[C]).applyMatrix4(O,d),f.normal.toArray(M,P),M[P+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,M}}function kA(s){let e=new WeakMap;function i(f,d){return d===Mh?f.mapping=kr:d===Eh&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Mh||d===Eh)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new Lx(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const ur=4,tv=[.125,.215,.35,.446,.526,.582],Hr=20,XA=256,Qo=new Np,nv=new kt;let eh=null,th=0,nh=0,ih=!1;const WA=new fe;class iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=WA}=c;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===kr||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:ba,format:Ri,colorSpace:Ws,depthBuffer:!1},l=av(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=av(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qA(c)),this._blurMaterial=ZA(c,e,i),this._ggxMaterial=YA(c,e,i)}return l}_compileMaterial(e){const i=new Yi(new Da,e);this._renderer.compile(i,Qo)}_sceneToCubeUV(e,i,r,l,c){const m=new Ti(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(nv),_.toneMapping=ki,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yi(new dl,new Ax({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,M=T.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(nv),x=!0);for(let C=0;C<6;C++){const P=C%3;P===0?(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[C],c.y,c.z)):P===1?(m.up.set(0,0,p[C]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[C],c.z)):(m.up.set(0,p[C],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[C]));const L=this._cubeSize;Fs(l,P*L,C>2?L:0,L,L),_.setRenderTarget(l),x&&_.render(T,m),_.render(e,m)}_.toneMapping=S,_.autoClear=v,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===kr||e.mapping===ks;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Fs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,Qo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[r];d.material=f;const m=f.uniforms,p=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),v=0+p*1.25,S=_*v,{_lodMax:y}=this,T=this._sizeLods[r],M=3*T*(r>y-ur?r-y+ur:0),x=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=y-i,Fs(c,M,x,3*T,2*T),l.setRenderTarget(c),l.render(d,Qo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=y-r,Fs(e,M,x,3*T,2*T),l.setRenderTarget(e),l.render(d,Qo)}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[l];_.material=p;const v=p.uniforms,S=this._sizeLods[r]-1,y=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Hr-1),T=c/y,M=isFinite(c)?1+Math.floor(g*T):Hr;M>Hr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Hr}`);const x=[];let O=0;for(let N=0;N<Hr;++N){const Z=N/T,A=Math.exp(-Z*Z/2);x.push(A),N===0?O+=A:N<M&&(O+=2*A)}for(let N=0;N<x.length;N++)x[N]=x[N]/O;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:C}=this;v.dTheta.value=y,v.mipInt.value=C-r;const P=this._sizeLods[l],L=3*P*(l>C-ur?l-C+ur:0),z=4*(this._cubeSize-P);Fs(i,L,z,3*P,2*P),m.setRenderTarget(i),m.render(_,Qo)}}function qA(s){const e=[],i=[],r=[];let l=s;const c=s-ur+1+tv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>s-ur?m=tv[f-s+ur-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,y=6,T=3,M=2,x=1,O=new Float32Array(T*y*S),C=new Float32Array(M*y*S),P=new Float32Array(x*y*S);for(let z=0;z<S;z++){const N=z%3*2/3-1,Z=z>2?0:-1,A=[N,Z,0,N+2/3,Z,0,N+2/3,Z+1,0,N,Z,0,N+2/3,Z+1,0,N,Z+1,0];O.set(A,T*y*z),C.set(v,M*y*z);const D=[z,z,z,z,z,z];P.set(D,x*y*z)}const L=new Da;L.setAttribute("position",new Wi(O,T)),L.setAttribute("uv",new Wi(C,M)),L.setAttribute("faceIndex",new Wi(P,x)),r.push(new Yi(L,null)),l>ur&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function av(s,e,i){const r=new Xi(s,e,i);return r.texture.mapping=uu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Fs(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function YA(s,e,i){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:XA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function ZA(s,e,i){const r=new Float32Array(Hr),l=new fe(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function rv(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function sv(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function jA(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Mh||m===Eh,g=m===kr||m===ks;if(p||g){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new iv(s)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new iv(s)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function KA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&al("WebGLRenderer: "+r+" extension not supported."),l}}}function QA(s,e,i,r){const l={},c=new WeakMap;function f(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const y in v.attributes)e.remove(v.attributes[y]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(_,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(_){const v=_.attributes;for(const S in v)e.update(v[S],s.ARRAY_BUFFER)}function p(_){const v=[],S=_.index,y=_.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let C=0,P=O.length;C<P;C+=3){const L=O[C+0],z=O[C+1],N=O[C+2];v.push(L,z,z,N,N,L)}}else if(y!==void 0){const O=y.array;T=y.version;for(let C=0,P=O.length/3-1;C<P;C+=3){const L=C+0,z=C+1,N=C+2;v.push(L,z,z,N,N,L)}}else return;const M=new(Ex(v)?Cx:Rx)(v,1);M.version=T;const x=c.get(_);x&&e.remove(x),c.set(_,M)}function g(_){const v=c.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function JA(s,e,i){let r;function l(v){r=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function m(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function p(v,S,y){y!==0&&(s.drawElementsInstanced(r,S,c,v*f,y),i.update(S,r,y))}function g(v,S,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,y);let M=0;for(let x=0;x<y;x++)M+=S[x];i.update(M,r,1)}function _(v,S,y,T){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<v.length;x++)p(v[x]/f,S[x],T[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,T,0,y);let x=0;for(let O=0;O<y;O++)x+=S[O]*T[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function $A(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:Ut("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function eR(s,e,i){const r=new WeakMap,l=new sn;function c(f,d,m){const p=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==_){let D=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",D)};var S=D;v!==void 0&&v.texture.dispose();const y=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let P=0;y===!0&&(P=1),T===!0&&(P=2),M===!0&&(P=3);let L=d.attributes.position.count*P,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const N=new Float32Array(L*z*4*_),Z=new yx(N,L,z,_);Z.type=Vi,Z.needsUpdate=!0;const A=P*4;for(let H=0;H<_;H++){const j=x[H],q=O[H],ae=C[H],ee=L*z*4*H;for(let B=0;B<j.count;B++){const V=B*A;y===!0&&(l.fromBufferAttribute(j,B),N[ee+V+0]=l.x,N[ee+V+1]=l.y,N[ee+V+2]=l.z,N[ee+V+3]=0),T===!0&&(l.fromBufferAttribute(q,B),N[ee+V+4]=l.x,N[ee+V+5]=l.y,N[ee+V+6]=l.z,N[ee+V+7]=0),M===!0&&(l.fromBufferAttribute(ae,B),N[ee+V+8]=l.x,N[ee+V+9]=l.y,N[ee+V+10]=l.z,N[ee+V+11]=ae.itemSize===4?l.w:1)}}v={count:_,texture:Z,size:new Rt(L,z)},r.set(d,v),d.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let y=0;for(let M=0;M<p.length;M++)y+=p[M];const T=d.morphTargetsRelative?1:1-y;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function tR(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return _}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const nR={[ox]:"LINEAR_TONE_MAPPING",[lx]:"REINHARD_TONE_MAPPING",[cx]:"CINEON_TONE_MAPPING",[ux]:"ACES_FILMIC_TONE_MAPPING",[dx]:"AGX_TONE_MAPPING",[hx]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function iR(s,e,i,r,l){const c=new Xi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),f=new Xi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Da;d.setAttribute("position",new ya([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new ya([0,2,0,0,2,0],2));const m=new Qb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Yi(d,m),g=new Np(-1,1,1,-1,0,1);let _=null,v=null,S=!1,y,T=null,M=[],x=!1;this.setSize=function(O,C){c.setSize(O,C),f.setSize(O,C);for(let P=0;P<M.length;P++){const L=M[P];L.setSize&&L.setSize(O,C)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const C=c.width,P=c.height;for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(C,P)}},this.begin=function(O,C){if(S||O.toneMapping===ki&&M.length===0)return!1;if(T=C,C!==null){const P=C.width,L=C.height;(c.width!==P||c.height!==L)&&this.setSize(P,L)}return x===!1&&O.setRenderTarget(c),y=O.toneMapping,O.toneMapping=ki,!0},this.hasRenderPass=function(){return x},this.end=function(O,C){O.toneMapping=y,S=!0;let P=c,L=f;for(let z=0;z<M.length;z++){const N=M[z];if(N.enabled!==!1&&(N.render(O,L,P,C),N.needsSwap!==!1)){const Z=P;P=L,L=Z}}if(_!==O.outputColorSpace||v!==O.toneMapping){_=O.outputColorSpace,v=O.toneMapping,m.defines={},At.getTransfer(_)===zt&&(m.defines.SRGB_TRANSFER="");const z=nR[v];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,O.setRenderTarget(T),O.render(p,g),T=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),d.dispose(),m.dispose()}}const Ix=new zn,ap=new rl(1,1),Fx=new yx,Bx=new Ab,zx=new Ux,ov=[],lv=[],cv=new Float32Array(16),uv=new Float32Array(9),fv=new Float32Array(4);function Zs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=ov[l];if(c===void 0&&(c=new Float32Array(l),ov[l]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function pn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function mn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function hu(s,e){let i=lv[e];i===void 0&&(i=new Int32Array(e),lv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function aR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function rR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2fv(this.addr,e),mn(i,e)}}function sR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(pn(i,e))return;s.uniform3fv(this.addr,e),mn(i,e)}}function oR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4fv(this.addr,e),mn(i,e)}}function lR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;fv.set(r),s.uniformMatrix2fv(this.addr,!1,fv),mn(i,r)}}function cR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;uv.set(r),s.uniformMatrix3fv(this.addr,!1,uv),mn(i,r)}}function uR(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(pn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(i,e)}else{if(pn(i,r))return;cv.set(r),s.uniformMatrix4fv(this.addr,!1,cv),mn(i,r)}}function fR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function dR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2iv(this.addr,e),mn(i,e)}}function hR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3iv(this.addr,e),mn(i,e)}}function pR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4iv(this.addr,e),mn(i,e)}}function mR(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function gR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(pn(i,e))return;s.uniform2uiv(this.addr,e),mn(i,e)}}function _R(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(pn(i,e))return;s.uniform3uiv(this.addr,e),mn(i,e)}}function vR(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(pn(i,e))return;s.uniform4uiv(this.addr,e),mn(i,e)}}function xR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(ap.compareFunction=i.isReversedDepthBuffer()?Dp:wp,c=ap):c=Ix,i.setTexture2D(e||c,l)}function SR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Bx,l)}function MR(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||zx,l)}function ER(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Fx,l)}function yR(s){switch(s){case 5126:return aR;case 35664:return rR;case 35665:return sR;case 35666:return oR;case 35674:return lR;case 35675:return cR;case 35676:return uR;case 5124:case 35670:return fR;case 35667:case 35671:return dR;case 35668:case 35672:return hR;case 35669:case 35673:return pR;case 5125:return mR;case 36294:return gR;case 36295:return _R;case 36296:return vR;case 35678:case 36198:case 36298:case 36306:case 35682:return xR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}function bR(s,e){s.uniform1fv(this.addr,e)}function TR(s,e){const i=Zs(e,this.size,2);s.uniform2fv(this.addr,i)}function AR(s,e){const i=Zs(e,this.size,3);s.uniform3fv(this.addr,i)}function RR(s,e){const i=Zs(e,this.size,4);s.uniform4fv(this.addr,i)}function CR(s,e){const i=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function wR(s,e){const i=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function DR(s,e){const i=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function UR(s,e){s.uniform1iv(this.addr,e)}function LR(s,e){s.uniform2iv(this.addr,e)}function NR(s,e){s.uniform3iv(this.addr,e)}function OR(s,e){s.uniform4iv(this.addr,e)}function PR(s,e){s.uniform1uiv(this.addr,e)}function IR(s,e){s.uniform2uiv(this.addr,e)}function FR(s,e){s.uniform3uiv(this.addr,e)}function BR(s,e){s.uniform4uiv(this.addr,e)}function zR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));let f;this.type===s.SAMPLER_2D_SHADOW?f=ap:f=Ix;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,c[d])}function HR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Bx,c[f])}function VR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||zx,c[f])}function GR(s,e,i){const r=this.cache,l=e.length,c=hu(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Fx,c[f])}function kR(s){switch(s){case 5126:return bR;case 35664:return TR;case 35665:return AR;case 35666:return RR;case 35674:return CR;case 35675:return wR;case 35676:return DR;case 5124:case 35670:return UR;case 35667:case 35671:return LR;case 35668:case 35672:return NR;case 35669:case 35673:return OR;case 5125:return PR;case 36294:return IR;case 36295:return FR;case 36296:return BR;case 35678:case 36198:case 36298:case 36306:case 35682:return zR;case 35679:case 36299:case 36307:return HR;case 35680:case 36300:case 36308:case 36293:return VR;case 36289:case 36303:case 36311:case 36292:return GR}}class XR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=yR(i.type)}}class WR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kR(i.type)}}class qR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const ah=/(\w+)(\])?(\[|\.)?/g;function dv(s,e){s.seq.push(e),s.map[e.id]=e}function YR(s,e,i){const r=s.name,l=r.length;for(ah.lastIndex=0;;){const c=ah.exec(r),f=ah.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){dv(i,p===void 0?new XR(d,s,e):new WR(d,s,e));break}else{let _=i.map[d];_===void 0&&(_=new qR(d),dv(i,_)),i=_}}}class Jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<r;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);YR(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function hv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const ZR=37297;let jR=0;function KR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const pv=new ut;function QR(s){At._getMatrix(pv,At.workingColorSpace,s);const e=`mat3( ${pv.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+KR(s.getShaderSource(e),d)}else return c}function JR(s,e){const i=QR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const $R={[ox]:"Linear",[lx]:"Reinhard",[cx]:"Cineon",[ux]:"ACESFilmic",[dx]:"AgX",[hx]:"Neutral",[fx]:"Custom"};function eC(s,e){const i=$R[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new fe;function tC(){At.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(el).join(`
`)}function iC(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function aC(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function el(s){return s!==""}function gv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _v(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rC=/^[ \t]*#include +<([\w\d./]+)>/gm;function rp(s){return s.replace(rC,oC)}const sC=new Map;function oC(s,e){let i=ft[e];if(i===void 0){const r=sC.get(e);if(r!==void 0)i=ft[r],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return rp(i)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vv(s){return s.replace(lC,cC)}function cC(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const uC={[Yc]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function fC(s){return uC[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dC={[kr]:"ENVMAP_TYPE_CUBE",[ks]:"ENVMAP_TYPE_CUBE",[uu]:"ENVMAP_TYPE_CUBE_UV"};function hC(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":dC[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const pC={[ks]:"ENVMAP_MODE_REFRACTION"};function mC(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":pC[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gC={[sx]:"ENVMAP_BLENDING_MULTIPLY",[sb]:"ENVMAP_BLENDING_MIX",[ob]:"ENVMAP_BLENDING_ADD"};function _C(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gC[s.combine]||"ENVMAP_BLENDING_NONE"}function vC(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function xC(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=fC(i),p=hC(i),g=mC(i),_=_C(i),v=vC(i),S=nC(i),y=iC(c),T=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(el).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y].filter(el).join(`
`),x.length>0&&(x+=`
`)):(M=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(el).join(`
`),x=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,y,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?ft.tonemapping_pars_fragment:"",i.toneMapping!==ki?eC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,JR("linearToOutputTexel",i.outputColorSpace),tC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(el).join(`
`)),f=rp(f),f=gv(f,i),f=_v(f,i),d=rp(d),d=gv(d,i),d=_v(d,i),f=vv(f),d=vv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===P_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=O+M+f,P=O+x+d,L=hv(l,l.VERTEX_SHADER,C),z=hv(l,l.FRAGMENT_SHADER,P);l.attachShader(T,L),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function N(H){if(s.debug.checkShaderErrors){const j=l.getProgramInfoLog(T)||"",q=l.getShaderInfoLog(L)||"",ae=l.getShaderInfoLog(z)||"",ee=j.trim(),B=q.trim(),V=ae.trim();let k=!0,de=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,L,z);else{const U=mv(l,L,"vertex"),Y=mv(l,z,"fragment");Ut("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+U+`
`+Y)}else ee!==""?rt("WebGLProgram: Program Info Log:",ee):(B===""||V==="")&&(de=!1);de&&(H.diagnostics={runnable:k,programLog:ee,vertexShader:{log:B,prefix:M},fragmentShader:{log:V,prefix:x}})}l.deleteShader(L),l.deleteShader(z),Z=new Jc(l,T),A=aC(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&N(this),Z};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(T,ZR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=jR++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=z,this}let SC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new EC(e),i.set(e,r)),r}}class EC{constructor(e){this.id=SC++,this.code=e,this.usedTimes=0}}function yC(s,e,i,r,l,c,f){const d=new bx,m=new MC,p=new Set,g=[],_=new Map,v=l.logarithmicDepthBuffer;let S=l.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(A){return p.add(A),A===0?"uv":`uv${A}`}function M(A,D,H,j,q){const ae=j.fog,ee=q.geometry,B=A.isMeshStandardMaterial?j.environment:null,V=(A.isMeshStandardMaterial?i:e).get(A.envMap||B),k=V&&V.mapping===uu?V.image.height:null,de=y[A.type];A.precision!==null&&(S=l.getMaxPrecision(A.precision),S!==A.precision&&rt("WebGLProgram.getParameters:",A.precision,"not supported, using",S,"instead."));const U=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Y=U!==void 0?U.length:0;let re=0;ee.morphAttributes.position!==void 0&&(re=1),ee.morphAttributes.normal!==void 0&&(re=2),ee.morphAttributes.color!==void 0&&(re=3);let pe,Re,He,te;if(de){const Ct=Hi[de];pe=Ct.vertexShader,Re=Ct.fragmentShader}else pe=A.vertexShader,Re=A.fragmentShader,m.update(A),He=m.getVertexShaderID(A),te=m.getFragmentShaderID(A);const ve=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Je=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,dt=!!A.map,jt=!!A.matcap,ht=!!V,St=!!A.aoMap,Mt=!!A.lightMap,at=!!A.bumpMap,Tt=!!A.normalMap,X=!!A.displacementMap,qt=!!A.emissiveMap,Et=!!A.metalnessMap,ye=!!A.roughnessMap,we=A.anisotropy>0,I=A.clearcoat>0,b=A.dispersion>0,K=A.iridescence>0,me=A.sheen>0,ge=A.transmission>0,he=we&&!!A.anisotropyMap,Pe=I&&!!A.clearcoatMap,Ae=I&&!!A.clearcoatNormalMap,Xe=I&&!!A.clearcoatRoughnessMap,Ke=K&&!!A.iridescenceMap,Ee=K&&!!A.iridescenceThicknessMap,De=me&&!!A.sheenColorMap,Ve=me&&!!A.sheenRoughnessMap,qe=!!A.specularMap,Ue=!!A.specularColorMap,ot=!!A.specularIntensityMap,Q=ge&&!!A.transmissionMap,Ie=ge&&!!A.thicknessMap,Ce=!!A.gradientMap,Be=!!A.alphaMap,be=A.alphaTest>0,Me=!!A.alphaHash,Le=!!A.extensions;let nt=ki;A.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(nt=s.toneMapping);const Ot={shaderID:de,shaderType:A.type,shaderName:A.name,vertexShader:pe,fragmentShader:Re,defines:A.defines,customVertexShaderID:He,customFragmentShaderID:te,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&q._colorsTexture!==null,instancing:Je,instancingColor:Je&&q.instanceColor!==null,instancingMorph:Je&&q.morphTexture!==null,outputColorSpace:ve===null?s.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ws,alphaToCoverage:!!A.alphaToCoverage,map:dt,matcap:jt,envMap:ht,envMapMode:ht&&V.mapping,envMapCubeUVHeight:k,aoMap:St,lightMap:Mt,bumpMap:at,normalMap:Tt,displacementMap:X,emissiveMap:qt,normalMapObjectSpace:Tt&&A.normalMapType===fb,normalMapTangentSpace:Tt&&A.normalMapType===ub,metalnessMap:Et,roughnessMap:ye,anisotropy:we,anisotropyMap:he,clearcoat:I,clearcoatMap:Pe,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Xe,dispersion:b,iridescence:K,iridescenceMap:Ke,iridescenceThicknessMap:Ee,sheen:me,sheenColorMap:De,sheenRoughnessMap:Ve,specularMap:qe,specularColorMap:Ue,specularIntensityMap:ot,transmission:ge,transmissionMap:Q,thicknessMap:Ie,gradientMap:Ce,opaque:A.transparent===!1&&A.blending===Bs&&A.alphaToCoverage===!1,alphaMap:Be,alphaTest:be,alphaHash:Me,combine:A.combine,mapUv:dt&&T(A.map.channel),aoMapUv:St&&T(A.aoMap.channel),lightMapUv:Mt&&T(A.lightMap.channel),bumpMapUv:at&&T(A.bumpMap.channel),normalMapUv:Tt&&T(A.normalMap.channel),displacementMapUv:X&&T(A.displacementMap.channel),emissiveMapUv:qt&&T(A.emissiveMap.channel),metalnessMapUv:Et&&T(A.metalnessMap.channel),roughnessMapUv:ye&&T(A.roughnessMap.channel),anisotropyMapUv:he&&T(A.anisotropyMap.channel),clearcoatMapUv:Pe&&T(A.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&T(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Ke&&T(A.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&T(A.iridescenceThicknessMap.channel),sheenColorMapUv:De&&T(A.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&T(A.sheenRoughnessMap.channel),specularMapUv:qe&&T(A.specularMap.channel),specularColorMapUv:Ue&&T(A.specularColorMap.channel),specularIntensityMapUv:ot&&T(A.specularIntensityMap.channel),transmissionMapUv:Q&&T(A.transmissionMap.channel),thicknessMapUv:Ie&&T(A.thicknessMap.channel),alphaMapUv:Be&&T(A.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Tt||we),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(dt||Be),fog:!!ae,useFog:A.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:A.flatShading===!0&&A.wireframe===!1,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Te,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:re,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&A.map.isVideoTexture===!0&&At.getTransfer(A.map.colorSpace)===zt,decodeVideoTextureEmissive:qt&&A.emissiveMap.isVideoTexture===!0&&At.getTransfer(A.emissiveMap.colorSpace)===zt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===xa,flipSided:A.side===Yn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Le&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&A.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=p.has(1),Ot.vertexUv2s=p.has(2),Ot.vertexUv3s=p.has(3),p.clear(),Ot}function x(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const H in A.defines)D.push(H),D.push(A.defines[H]);return A.isRawShaderMaterial===!1&&(O(D,A),C(D,A),D.push(s.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function O(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function C(A,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),A.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),A.push(d.mask)}function P(A){const D=y[A.type];let H;if(D){const j=Hi[D];H=Hb.clone(j.uniforms)}else H=A.uniforms;return H}function L(A,D){let H=_.get(D);return H!==void 0?++H.usedTimes:(H=new xC(s,D,A,c),g.push(H),_.set(D,H)),H}function z(A){if(--A.usedTimes===0){const D=g.indexOf(A);g[D]=g[g.length-1],g.pop(),_.delete(A.cacheKey),A.destroy()}}function N(A){m.remove(A)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:P,acquireProgram:L,releaseProgram:z,releaseShaderCache:N,programs:g,dispose:Z}}function bC(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,m){s.get(f)[d]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function TC(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Mv(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(_,v,S,y,T,M){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:y,renderOrder:_.renderOrder,z:T,group:M},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=y,x.renderOrder=_.renderOrder,x.z=T,x.group=M),e++,x}function d(_,v,S,y,T,M){const x=f(_,v,S,y,T,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(_,v,S,y,T,M){const x=f(_,v,S,y,T,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(_,v){i.length>1&&i.sort(_||TC),r.length>1&&r.sort(v||Sv),l.length>1&&l.sort(v||Sv)}function g(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function AC(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new Mv,s.set(r,[f])):l>=c.length?(f=new Mv,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function RC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new kt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=i,i}}}function CC(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let wC=0;function DC(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UC(s){const e=new RC,i=CC(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new fe);const l=new fe,c=new fn,f=new fn;function d(p){let g=0,_=0,v=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let S=0,y=0,T=0,M=0,x=0,O=0,C=0,P=0,L=0,z=0,N=0;p.sort(DC);for(let A=0,D=p.length;A<D;A++){const H=p[A],j=H.color,q=H.intensity,ae=H.distance;let ee=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xs?ee=H.shadow.map.texture:ee=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=j.r*q,_+=j.g*q,v+=j.b*q;else if(H.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(H.sh.coefficients[B],q);N++}else if(H.isDirectionalLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,k=i.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=ee,r.directionalShadowMatrix[S]=H.shadow.matrix,O++}r.directional[S]=B,S++}else if(H.isSpotLight){const B=e.get(H);B.position.setFromMatrixPosition(H.matrixWorld),B.color.copy(j).multiplyScalar(q),B.distance=ae,B.coneCos=Math.cos(H.angle),B.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),B.decay=H.decay,r.spot[T]=B;const V=H.shadow;if(H.map&&(r.spotLightMap[L]=H.map,L++,V.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[T]=V.matrix,H.castShadow){const k=i.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,r.spotShadow[T]=k,r.spotShadowMap[T]=ee,P++}T++}else if(H.isRectAreaLight){const B=e.get(H);B.color.copy(j).multiplyScalar(q),B.halfWidth.set(H.width*.5,0,0),B.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=B,M++}else if(H.isPointLight){const B=e.get(H);if(B.color.copy(H.color).multiplyScalar(H.intensity),B.distance=H.distance,B.decay=H.decay,H.castShadow){const V=H.shadow,k=i.get(H);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,r.pointShadow[y]=k,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=H.shadow.matrix,C++}r.point[y]=B,y++}else if(H.isHemisphereLight){const B=e.get(H);B.skyColor.copy(H.color).multiplyScalar(q),B.groundColor.copy(H.groundColor).multiplyScalar(q),r.hemi[x]=B,x++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==S||Z.pointLength!==y||Z.spotLength!==T||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==O||Z.numPointShadows!==C||Z.numSpotShadows!==P||Z.numSpotMaps!==L||Z.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=M,r.point.length=y,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+L-z,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=N,Z.directionalLength=S,Z.pointLength=y,Z.spotLength=T,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=O,Z.numPointShadows=C,Z.numSpotShadows=P,Z.numSpotMaps=L,Z.numLightProbes=N,r.version=wC++)}function m(p,g){let _=0,v=0,S=0,y=0,T=0;const M=g.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const C=p[x];if(C.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),_++}else if(C.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),P.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(M),S++}else if(C.isRectAreaLight){const P=r.rectArea[y];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),f.identity(),c.copy(C.matrixWorld),c.premultiply(M),f.extractRotation(c),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(f),P.halfHeight.applyMatrix4(f),y++}else if(C.isPointLight){const P=r.point[v];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(M),v++}else if(C.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(M),T++}}}return{setup:d,setupView:m,state:r}}function Ev(s){const e=new UC(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:f}}function LC(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new Ev(s),e.set(l,[d])):c>=f.length?(d=new Ev(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const NC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
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
}`,PC=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],IC=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],yv=new fn,Jo=new fe,rh=new fe;function FC(s,e,i){let r=new Nx;const l=new Rt,c=new Rt,f=new sn,d=new Jb,m=new $b,p={},g=i.maxTextureSize,_={[fr]:Yn,[Yn]:fr,[xa]:xa},v=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:NC,fragmentShader:OC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const y=new Da;y.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Yi(y,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let x=this.type;this.render=function(z,N,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===Vy&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=Yc);const A=s.getRenderTarget(),D=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),j=s.state;j.setBlending(Ma),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const q=x!==this.type;q&&N.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(ee=>ee.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,ee=z.length;ae<ee;ae++){const B=z[ae],V=B.shadow;if(V===void 0){rt("WebGLShadowMap:",B,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;l.copy(V.mapSize);const k=V.getFrameExtents();if(l.multiply(k),c.copy(V.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/k.x),l.x=c.x*k.x,V.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/k.y),l.y=c.y*k.y,V.mapSize.y=c.y)),V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===$o){if(B.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xi(l.x,l.y,{format:Xs,type:ba,minFilter:In,magFilter:In,generateMipmaps:!1}),V.map.texture.name=B.name+".shadowMap",V.map.depthTexture=new rl(l.x,l.y,Vi),V.map.depthTexture.name=B.name+".shadowMapDepth",V.map.depthTexture.format=Ta,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn}else{B.isPointLight?(V.map=new Lx(l.x),V.map.depthTexture=new Kb(l.x,qi)):(V.map=new Xi(l.x,l.y),V.map.depthTexture=new rl(l.x,l.y,qi)),V.map.depthTexture.name=B.name+".shadowMap",V.map.depthTexture.format=Ta;const U=s.state.buffers.depth.getReversed();this.type===Yc?(V.map.depthTexture.compareFunction=U?Dp:wp,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=wn,V.map.depthTexture.magFilter=wn)}V.camera.updateProjectionMatrix()}const de=V.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<de;U++){if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,U),s.clear();else{U===0&&(s.setRenderTarget(V.map),s.clear());const Y=V.getViewport(U);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),j.viewport(f)}if(B.isPointLight){const Y=V.camera,re=V.matrix,pe=B.distance||Y.far;pe!==Y.far&&(Y.far=pe,Y.updateProjectionMatrix()),Jo.setFromMatrixPosition(B.matrixWorld),Y.position.copy(Jo),rh.copy(Y.position),rh.add(PC[U]),Y.up.copy(IC[U]),Y.lookAt(rh),Y.updateMatrixWorld(),re.makeTranslation(-Jo.x,-Jo.y,-Jo.z),yv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(yv,Y.coordinateSystem,Y.reversedDepth)}else V.updateMatrices(B);r=V.getFrustum(),P(N,Z,V.camera,B,this.type)}V.isPointLightShadow!==!0&&this.type===$o&&O(V,Z),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,s.setRenderTarget(A,D,H)};function O(z,N){const Z=e.update(T);v.defines.VSM_SAMPLES!==z.blurSamples&&(v.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Xi(l.x,l.y,{format:Xs,type:ba})),v.uniforms.shadow_pass.value=z.map.depthTexture,v.uniforms.resolution.value=z.mapSize,v.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(N,null,Z,v,T,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(N,null,Z,S,T,null)}function C(z,N,Z,A){let D=null;const H=Z.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)D=H;else if(D=Z.isPointLight===!0?m:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const j=D.uuid,q=N.uuid;let ae=p[j];ae===void 0&&(ae={},p[j]=ae);let ee=ae[q];ee===void 0&&(ee=D.clone(),ae[q]=ee,N.addEventListener("dispose",L)),D=ee}if(D.visible=N.visible,D.wireframe=N.wireframe,A===$o?D.side=N.shadowSide!==null?N.shadowSide:N.side:D.side=N.shadowSide!==null?N.shadowSide:_[N.side],D.alphaMap=N.alphaMap,D.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,D.map=N.map,D.clipShadows=N.clipShadows,D.clippingPlanes=N.clippingPlanes,D.clipIntersection=N.clipIntersection,D.displacementMap=N.displacementMap,D.displacementScale=N.displacementScale,D.displacementBias=N.displacementBias,D.wireframeLinewidth=N.wireframeLinewidth,D.linewidth=N.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const j=s.properties.get(D);j.light=Z}return D}function P(z,N,Z,A,D){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&D===$o)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,z.matrixWorld);const q=e.update(z),ae=z.material;if(Array.isArray(ae)){const ee=q.groups;for(let B=0,V=ee.length;B<V;B++){const k=ee[B],de=ae[k.materialIndex];if(de&&de.visible){const U=C(z,de,A,D);z.onBeforeShadow(s,z,N,Z,q,U,k),s.renderBufferDirect(Z,null,q,U,z,k),z.onAfterShadow(s,z,N,Z,q,U,k)}}}else if(ae.visible){const ee=C(z,ae,A,D);z.onBeforeShadow(s,z,N,Z,q,ee,null),s.renderBufferDirect(Z,null,q,ee,z,null),z.onAfterShadow(s,z,N,Z,q,ee,null)}}const j=z.children;for(let q=0,ae=j.length;q<ae;q++)P(j[q],N,Z,A,D)}function L(z){z.target.removeEventListener("dispose",L);for(const Z in p){const A=p[Z],D=z.target.uuid;D in A&&(A[D].dispose(),delete A[D])}}}const BC={[ph]:mh,[gh]:xh,[_h]:Sh,[Gs]:vh,[mh]:ph,[xh]:gh,[Sh]:_h,[vh]:Gs};function zC(s,e){function i(){let Q=!1;const Ie=new sn;let Ce=null;const Be=new sn(0,0,0,0);return{setMask:function(be){Ce!==be&&!Q&&(s.colorMask(be,be,be,be),Ce=be)},setLocked:function(be){Q=be},setClear:function(be,Me,Le,nt,Ot){Ot===!0&&(be*=nt,Me*=nt,Le*=nt),Ie.set(be,Me,Le,nt),Be.equals(Ie)===!1&&(s.clearColor(be,Me,Le,nt),Be.copy(Ie))},reset:function(){Q=!1,Ce=null,Be.set(-1,0,0,0)}}}function r(){let Q=!1,Ie=!1,Ce=null,Be=null,be=null;return{setReversed:function(Me){if(Ie!==Me){const Le=e.get("EXT_clip_control");Me?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Ie=Me;const nt=be;be=null,this.setClear(nt)}},getReversed:function(){return Ie},setTest:function(Me){Me?ve(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Me){Ce!==Me&&!Q&&(s.depthMask(Me),Ce=Me)},setFunc:function(Me){if(Ie&&(Me=BC[Me]),Be!==Me){switch(Me){case ph:s.depthFunc(s.NEVER);break;case mh:s.depthFunc(s.ALWAYS);break;case gh:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case _h:s.depthFunc(s.EQUAL);break;case vh:s.depthFunc(s.GEQUAL);break;case xh:s.depthFunc(s.GREATER);break;case Sh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=Me}},setLocked:function(Me){Q=Me},setClear:function(Me){be!==Me&&(Ie&&(Me=1-Me),s.clearDepth(Me),be=Me)},reset:function(){Q=!1,Ce=null,Be=null,be=null,Ie=!1}}}function l(){let Q=!1,Ie=null,Ce=null,Be=null,be=null,Me=null,Le=null,nt=null,Ot=null;return{setTest:function(Ct){Q||(Ct?ve(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(Ct){Ie!==Ct&&!Q&&(s.stencilMask(Ct),Ie=Ct)},setFunc:function(Ct,si,gn){(Ce!==Ct||Be!==si||be!==gn)&&(s.stencilFunc(Ct,si,gn),Ce=Ct,Be=si,be=gn)},setOp:function(Ct,si,gn){(Me!==Ct||Le!==si||nt!==gn)&&(s.stencilOp(Ct,si,gn),Me=Ct,Le=si,nt=gn)},setLocked:function(Ct){Q=Ct},setClear:function(Ct){Ot!==Ct&&(s.clearStencil(Ct),Ot=Ct)},reset:function(){Q=!1,Ie=null,Ce=null,Be=null,be=null,Me=null,Le=null,nt=null,Ot=null}}}const c=new i,f=new r,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},v=new WeakMap,S=[],y=null,T=!1,M=null,x=null,O=null,C=null,P=null,L=null,z=null,N=new kt(0,0,0),Z=0,A=!1,D=null,H=null,j=null,q=null,ae=null;const ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,V=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=V>=2);let de=null,U={};const Y=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),pe=new sn().fromArray(Y),Re=new sn().fromArray(re);function He(Q,Ie,Ce,Be){const be=new Uint8Array(4),Me=s.createTexture();s.bindTexture(Q,Me),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<Ce;Le++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,be):s.texImage2D(Ie+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,be);return Me}const te={};te[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),ve(s.DEPTH_TEST),f.setFunc(Gs),at(!1),Tt(w_),ve(s.CULL_FACE),St(Ma);function ve(Q){g[Q]!==!0&&(s.enable(Q),g[Q]=!0)}function Te(Q){g[Q]!==!1&&(s.disable(Q),g[Q]=!1)}function Je(Q,Ie){return _[Q]!==Ie?(s.bindFramebuffer(Q,Ie),_[Q]=Ie,Q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ie),Q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Ge(Q,Ie){let Ce=S,Be=!1;if(Q){Ce=v.get(Ie),Ce===void 0&&(Ce=[],v.set(Ie,Ce));const be=Q.textures;if(Ce.length!==be.length||Ce[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,Le=be.length;Me<Le;Me++)Ce[Me]=s.COLOR_ATTACHMENT0+Me;Ce.length=be.length,Be=!0}}else Ce[0]!==s.BACK&&(Ce[0]=s.BACK,Be=!0);Be&&s.drawBuffers(Ce)}function dt(Q){return y!==Q?(s.useProgram(Q),y=Q,!0):!1}const jt={[zr]:s.FUNC_ADD,[ky]:s.FUNC_SUBTRACT,[Xy]:s.FUNC_REVERSE_SUBTRACT};jt[Wy]=s.MIN,jt[qy]=s.MAX;const ht={[Yy]:s.ZERO,[Zy]:s.ONE,[jy]:s.SRC_COLOR,[dh]:s.SRC_ALPHA,[tb]:s.SRC_ALPHA_SATURATE,[$y]:s.DST_COLOR,[Qy]:s.DST_ALPHA,[Ky]:s.ONE_MINUS_SRC_COLOR,[hh]:s.ONE_MINUS_SRC_ALPHA,[eb]:s.ONE_MINUS_DST_COLOR,[Jy]:s.ONE_MINUS_DST_ALPHA,[nb]:s.CONSTANT_COLOR,[ib]:s.ONE_MINUS_CONSTANT_COLOR,[ab]:s.CONSTANT_ALPHA,[rb]:s.ONE_MINUS_CONSTANT_ALPHA};function St(Q,Ie,Ce,Be,be,Me,Le,nt,Ot,Ct){if(Q===Ma){T===!0&&(Te(s.BLEND),T=!1);return}if(T===!1&&(ve(s.BLEND),T=!0),Q!==Gy){if(Q!==M||Ct!==A){if((x!==zr||P!==zr)&&(s.blendEquation(s.FUNC_ADD),x=zr,P=zr),Ct)switch(Q){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case D_:s.blendFunc(s.ONE,s.ONE);break;case U_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case L_:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",Q);break}else switch(Q){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case D_:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case U_:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case L_:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Q);break}O=null,C=null,L=null,z=null,N.set(0,0,0),Z=0,M=Q,A=Ct}return}be=be||Ie,Me=Me||Ce,Le=Le||Be,(Ie!==x||be!==P)&&(s.blendEquationSeparate(jt[Ie],jt[be]),x=Ie,P=be),(Ce!==O||Be!==C||Me!==L||Le!==z)&&(s.blendFuncSeparate(ht[Ce],ht[Be],ht[Me],ht[Le]),O=Ce,C=Be,L=Me,z=Le),(nt.equals(N)===!1||Ot!==Z)&&(s.blendColor(nt.r,nt.g,nt.b,Ot),N.copy(nt),Z=Ot),M=Q,A=!1}function Mt(Q,Ie){Q.side===xa?Te(s.CULL_FACE):ve(s.CULL_FACE);let Ce=Q.side===Yn;Ie&&(Ce=!Ce),at(Ce),Q.blending===Bs&&Q.transparent===!1?St(Ma):St(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),f.setFunc(Q.depthFunc),f.setTest(Q.depthTest),f.setMask(Q.depthWrite),c.setMask(Q.colorWrite);const Be=Q.stencilWrite;d.setTest(Be),Be&&(d.setMask(Q.stencilWriteMask),d.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),d.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),qt(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?ve(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(Q){D!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),D=Q)}function Tt(Q){Q!==zy?(ve(s.CULL_FACE),Q!==H&&(Q===w_?s.cullFace(s.BACK):Q===Hy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),H=Q}function X(Q){Q!==j&&(B&&s.lineWidth(Q),j=Q)}function qt(Q,Ie,Ce){Q?(ve(s.POLYGON_OFFSET_FILL),(q!==Ie||ae!==Ce)&&(s.polygonOffset(Ie,Ce),q=Ie,ae=Ce)):Te(s.POLYGON_OFFSET_FILL)}function Et(Q){Q?ve(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function ye(Q){Q===void 0&&(Q=s.TEXTURE0+ee-1),de!==Q&&(s.activeTexture(Q),de=Q)}function we(Q,Ie,Ce){Ce===void 0&&(de===null?Ce=s.TEXTURE0+ee-1:Ce=de);let Be=U[Ce];Be===void 0&&(Be={type:void 0,texture:void 0},U[Ce]=Be),(Be.type!==Q||Be.texture!==Ie)&&(de!==Ce&&(s.activeTexture(Ce),de=Ce),s.bindTexture(Q,Ie||te[Q]),Be.type=Q,Be.texture=Ie)}function I(){const Q=U[de];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function me(){try{s.texSubImage2D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function ge(){try{s.texSubImage3D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function he(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function Pe(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function Ae(){try{s.texStorage2D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function Xe(){try{s.texStorage3D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function Ke(){try{s.texImage2D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function Ee(){try{s.texImage3D(...arguments)}catch(Q){Ut("WebGLState:",Q)}}function De(Q){pe.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),pe.copy(Q))}function Ve(Q){Re.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),Re.copy(Q))}function qe(Q,Ie){let Ce=p.get(Ie);Ce===void 0&&(Ce=new WeakMap,p.set(Ie,Ce));let Be=Ce.get(Q);Be===void 0&&(Be=s.getUniformBlockIndex(Ie,Q.name),Ce.set(Q,Be))}function Ue(Q,Ie){const Be=p.get(Ie).get(Q);m.get(Ie)!==Be&&(s.uniformBlockBinding(Ie,Be,Q.__bindingPointIndex),m.set(Ie,Be))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},de=null,U={},_={},v=new WeakMap,S=[],y=null,T=!1,M=null,x=null,O=null,C=null,P=null,L=null,z=null,N=new kt(0,0,0),Z=0,A=!1,D=null,H=null,j=null,q=null,ae=null,pe.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:ve,disable:Te,bindFramebuffer:Je,drawBuffers:Ge,useProgram:dt,setBlending:St,setMaterial:Mt,setFlipSided:at,setCullFace:Tt,setLineWidth:X,setPolygonOffset:qt,setScissorTest:Et,activeTexture:ye,bindTexture:we,unbindTexture:I,compressedTexImage2D:b,compressedTexImage3D:K,texImage2D:Ke,texImage3D:Ee,updateUBOMapping:qe,uniformBlockBinding:Ue,texStorage2D:Ae,texStorage3D:Xe,texSubImage2D:me,texSubImage3D:ge,compressedTexSubImage2D:he,compressedTexSubImage3D:Pe,scissor:De,viewport:Ve,reset:ot}}function HC(s,e,i,r,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Rt,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(I,b){return S?new OffscreenCanvas(I,b):ru("canvas")}function T(I,b,K){let me=1;const ge=we(I);if((ge.width>K||ge.height>K)&&(me=K/Math.max(ge.width,ge.height)),me<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(me*ge.width),Pe=Math.floor(me*ge.height);_===void 0&&(_=y(he,Pe));const Ae=b?y(he,Pe):_;return Ae.width=he,Ae.height=Pe,Ae.getContext("2d").drawImage(I,0,0,he,Pe),rt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+he+"x"+Pe+")."),Ae}else return"data"in I&&rt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function M(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function O(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(I,b,K,me,ge=!1){if(I!==null){if(s[I]!==void 0)return s[I];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=b;if(b===s.RED&&(K===s.FLOAT&&(he=s.R32F),K===s.HALF_FLOAT&&(he=s.R16F),K===s.UNSIGNED_BYTE&&(he=s.R8)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.R8UI),K===s.UNSIGNED_SHORT&&(he=s.R16UI),K===s.UNSIGNED_INT&&(he=s.R32UI),K===s.BYTE&&(he=s.R8I),K===s.SHORT&&(he=s.R16I),K===s.INT&&(he=s.R32I)),b===s.RG&&(K===s.FLOAT&&(he=s.RG32F),K===s.HALF_FLOAT&&(he=s.RG16F),K===s.UNSIGNED_BYTE&&(he=s.RG8)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RG8UI),K===s.UNSIGNED_SHORT&&(he=s.RG16UI),K===s.UNSIGNED_INT&&(he=s.RG32UI),K===s.BYTE&&(he=s.RG8I),K===s.SHORT&&(he=s.RG16I),K===s.INT&&(he=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGB8UI),K===s.UNSIGNED_SHORT&&(he=s.RGB16UI),K===s.UNSIGNED_INT&&(he=s.RGB32UI),K===s.BYTE&&(he=s.RGB8I),K===s.SHORT&&(he=s.RGB16I),K===s.INT&&(he=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),K===s.UNSIGNED_INT&&(he=s.RGBA32UI),K===s.BYTE&&(he=s.RGBA8I),K===s.SHORT&&(he=s.RGBA16I),K===s.INT&&(he=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),b===s.RGBA){const Pe=ge?iu:At.getTransfer(me);K===s.FLOAT&&(he=s.RGBA32F),K===s.HALF_FLOAT&&(he=s.RGBA16F),K===s.UNSIGNED_BYTE&&(he=Pe===zt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(I,b){let K;return I?b===null||b===qi||b===il?K=s.DEPTH24_STENCIL8:b===Vi?K=s.DEPTH32F_STENCIL8:b===nl&&(K=s.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===il?K=s.DEPTH_COMPONENT24:b===Vi?K=s.DEPTH_COMPONENT32F:b===nl&&(K=s.DEPTH_COMPONENT16),K}function L(I,b){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==wn&&I.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?b.mipmaps.length:1}function z(I){const b=I.target;b.removeEventListener("dispose",z),Z(b),b.isVideoTexture&&g.delete(b)}function N(I){const b=I.target;b.removeEventListener("dispose",N),D(b)}function Z(I){const b=r.get(I);if(b.__webglInit===void 0)return;const K=I.source,me=v.get(K);if(me){const ge=me[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&A(I),Object.keys(me).length===0&&v.delete(K)}r.remove(I)}function A(I){const b=r.get(I);s.deleteTexture(b.__webglTexture);const K=I.source,me=v.get(K);delete me[b.__cacheKey],f.memory.textures--}function D(I){const b=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let ge=0;ge<b.__webglFramebuffer[me].length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[me][ge]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=I.textures;for(let me=0,ge=K.length;me<ge;me++){const he=r.get(K[me]);he.__webglTexture&&(s.deleteTexture(he.__webglTexture),f.memory.textures--),r.remove(K[me])}r.remove(I)}let H=0;function j(){H=0}function q(){const I=H;return I>=l.maxTextures&&rt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function ae(I){const b=[];return b.push(I.wrapS),b.push(I.wrapT),b.push(I.wrapR||0),b.push(I.magFilter),b.push(I.minFilter),b.push(I.anisotropy),b.push(I.internalFormat),b.push(I.format),b.push(I.type),b.push(I.generateMipmaps),b.push(I.premultiplyAlpha),b.push(I.flipY),b.push(I.unpackAlignment),b.push(I.colorSpace),b.join()}function ee(I,b){const K=r.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const me=I.image;if(me===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,I,b);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function B(I,b){const K=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){te(K,I,b);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function V(I,b){const K=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){te(K,I,b);return}i.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function k(I,b){const K=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){ve(K,I,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const de={[yh]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[bh]:s.MIRRORED_REPEAT},U={[wn]:s.NEAREST,[lb]:s.NEAREST_MIPMAP_NEAREST,[Tc]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[wd]:s.LINEAR_MIPMAP_NEAREST,[Vr]:s.LINEAR_MIPMAP_LINEAR},Y={[db]:s.NEVER,[_b]:s.ALWAYS,[hb]:s.LESS,[wp]:s.LEQUAL,[pb]:s.EQUAL,[Dp]:s.GEQUAL,[mb]:s.GREATER,[gb]:s.NOTEQUAL};function re(I,b){if(b.type===Vi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===wd||b.magFilter===Tc||b.magFilter===Vr||b.minFilter===In||b.minFilter===wd||b.minFilter===Tc||b.minFilter===Vr)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,de[b.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,de[b.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,de[b.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,U[b.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,U[b.minFilter]),b.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Y[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===wn||b.minFilter!==Tc&&b.minFilter!==Vr||b.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function pe(I,b){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,b.addEventListener("dispose",z));const me=b.source;let ge=v.get(me);ge===void 0&&(ge={},v.set(me,ge));const he=ae(b);if(he!==I.__cacheKey){ge[he]===void 0&&(ge[he]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,K=!0),ge[he].usedTimes++;const Pe=ge[I.__cacheKey];Pe!==void 0&&(ge[I.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(b)),I.__cacheKey=he,I.__webglTexture=ge[he].texture}return K}function Re(I,b,K){return Math.floor(Math.floor(I/K)/b)}function He(I,b,K,me){const he=I.updateRanges;if(he.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,me,b.data);else{he.sort((Ee,De)=>Ee.start-De.start);let Pe=0;for(let Ee=1;Ee<he.length;Ee++){const De=he[Pe],Ve=he[Ee],qe=De.start+De.count,Ue=Re(Ve.start,b.width,4),ot=Re(De.start,b.width,4);Ve.start<=qe+1&&Ue===ot&&Re(Ve.start+Ve.count-1,b.width,4)===Ue?De.count=Math.max(De.count,Ve.start+Ve.count-De.start):(++Pe,he[Pe]=Ve)}he.length=Pe+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Xe=s.getParameter(s.UNPACK_SKIP_PIXELS),Ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ee=0,De=he.length;Ee<De;Ee++){const Ve=he[Ee],qe=Math.floor(Ve.start/4),Ue=Math.ceil(Ve.count/4),ot=qe%b.width,Q=Math.floor(qe/b.width),Ie=Ue,Ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,Q),i.texSubImage2D(s.TEXTURE_2D,0,ot,Q,Ie,Ce,K,me,b.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Xe),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ke)}}function te(I,b,K){let me=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=s.TEXTURE_3D);const ge=pe(I,b),he=b.source;i.bindTexture(me,I.__webglTexture,s.TEXTURE0+K);const Pe=r.get(he);if(he.version!==Pe.__version||ge===!0){i.activeTexture(s.TEXTURE0+K);const Ae=At.getPrimaries(At.workingColorSpace),Xe=b.colorSpace===lr?null:At.getPrimaries(b.colorSpace),Ke=b.colorSpace===lr||Ae===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let Ee=T(b.image,!1,l.maxTextureSize);Ee=ye(b,Ee);const De=c.convert(b.format,b.colorSpace),Ve=c.convert(b.type);let qe=C(b.internalFormat,De,Ve,b.colorSpace,b.isVideoTexture);re(me,b);let Ue;const ot=b.mipmaps,Q=b.isVideoTexture!==!0,Ie=Pe.__version===void 0||ge===!0,Ce=he.dataReady,Be=L(b,Ee);if(b.isDepthTexture)qe=P(b.format===Gr,b.type),Ie&&(Q?i.texStorage2D(s.TEXTURE_2D,1,qe,Ee.width,Ee.height):i.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,De,Ve,null));else if(b.isDataTexture)if(ot.length>0){Q&&Ie&&i.texStorage2D(s.TEXTURE_2D,Be,qe,ot[0].width,ot[0].height);for(let be=0,Me=ot.length;be<Me;be++)Ue=ot[be],Q?Ce&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ve,Ue.data):i.texImage2D(s.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,De,Ve,Ue.data);b.generateMipmaps=!1}else Q?(Ie&&i.texStorage2D(s.TEXTURE_2D,Be,qe,Ee.width,Ee.height),Ce&&He(b,Ee,De,Ve)):i.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,De,Ve,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Q&&Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,ot[0].width,ot[0].height,Ee.depth);for(let be=0,Me=ot.length;be<Me;be++)if(Ue=ot[be],b.format!==Ri)if(De!==null)if(Q){if(Ce)if(b.layerUpdates.size>0){const Le=ev(Ue.width,Ue.height,b.format,b.type);for(const nt of b.layerUpdates){const Ot=Ue.data.subarray(nt*Le/Ue.data.BYTES_PER_ELEMENT,(nt+1)*Le/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,nt,Ue.width,Ue.height,1,De,Ot)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,Ee.depth,De,Ue.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,be,qe,Ue.width,Ue.height,Ee.depth,0,Ue.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?Ce&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,be,0,0,0,Ue.width,Ue.height,Ee.depth,De,Ve,Ue.data):i.texImage3D(s.TEXTURE_2D_ARRAY,be,qe,Ue.width,Ue.height,Ee.depth,0,De,Ve,Ue.data)}else{Q&&Ie&&i.texStorage2D(s.TEXTURE_2D,Be,qe,ot[0].width,ot[0].height);for(let be=0,Me=ot.length;be<Me;be++)Ue=ot[be],b.format!==Ri?De!==null?Q?Ce&&i.compressedTexSubImage2D(s.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ue.data):i.compressedTexImage2D(s.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,Ue.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?Ce&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,Ue.width,Ue.height,De,Ve,Ue.data):i.texImage2D(s.TEXTURE_2D,be,qe,Ue.width,Ue.height,0,De,Ve,Ue.data)}else if(b.isDataArrayTexture)if(Q){if(Ie&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Be,qe,Ee.width,Ee.height,Ee.depth),Ce)if(b.layerUpdates.size>0){const be=ev(Ee.width,Ee.height,b.format,b.type);for(const Me of b.layerUpdates){const Le=Ee.data.subarray(Me*be/Ee.data.BYTES_PER_ELEMENT,(Me+1)*be/Ee.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Me,Ee.width,Ee.height,1,De,Ve,Le)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,Ve,Ee.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,De,Ve,Ee.data);else if(b.isData3DTexture)Q?(Ie&&i.texStorage3D(s.TEXTURE_3D,Be,qe,Ee.width,Ee.height,Ee.depth),Ce&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,De,Ve,Ee.data)):i.texImage3D(s.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,De,Ve,Ee.data);else if(b.isFramebufferTexture){if(Ie)if(Q)i.texStorage2D(s.TEXTURE_2D,Be,qe,Ee.width,Ee.height);else{let be=Ee.width,Me=Ee.height;for(let Le=0;Le<Be;Le++)i.texImage2D(s.TEXTURE_2D,Le,qe,be,Me,0,De,Ve,null),be>>=1,Me>>=1}}else if(ot.length>0){if(Q&&Ie){const be=we(ot[0]);i.texStorage2D(s.TEXTURE_2D,Be,qe,be.width,be.height)}for(let be=0,Me=ot.length;be<Me;be++)Ue=ot[be],Q?Ce&&i.texSubImage2D(s.TEXTURE_2D,be,0,0,De,Ve,Ue):i.texImage2D(s.TEXTURE_2D,be,qe,De,Ve,Ue);b.generateMipmaps=!1}else if(Q){if(Ie){const be=we(Ee);i.texStorage2D(s.TEXTURE_2D,Be,qe,be.width,be.height)}Ce&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ve,Ee)}else i.texImage2D(s.TEXTURE_2D,0,qe,De,Ve,Ee);M(b)&&x(me),Pe.__version=he.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function ve(I,b,K){if(b.image.length!==6)return;const me=pe(I,b),ge=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+K);const he=r.get(ge);if(ge.version!==he.__version||me===!0){i.activeTexture(s.TEXTURE0+K);const Pe=At.getPrimaries(At.workingColorSpace),Ae=b.colorSpace===lr?null:At.getPrimaries(b.colorSpace),Xe=b.colorSpace===lr||Pe===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const Ke=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,De=[];for(let Me=0;Me<6;Me++)!Ke&&!Ee?De[Me]=T(b.image[Me],!0,l.maxCubemapSize):De[Me]=Ee?b.image[Me].image:b.image[Me],De[Me]=ye(b,De[Me]);const Ve=De[0],qe=c.convert(b.format,b.colorSpace),Ue=c.convert(b.type),ot=C(b.internalFormat,qe,Ue,b.colorSpace),Q=b.isVideoTexture!==!0,Ie=he.__version===void 0||me===!0,Ce=ge.dataReady;let Be=L(b,Ve);re(s.TEXTURE_CUBE_MAP,b);let be;if(Ke){Q&&Ie&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ot,Ve.width,Ve.height);for(let Me=0;Me<6;Me++){be=De[Me].mipmaps;for(let Le=0;Le<be.length;Le++){const nt=be[Le];b.format!==Ri?qe!==null?Q?Ce&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,0,0,nt.width,nt.height,qe,nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,ot,nt.width,nt.height,0,nt.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,0,0,nt.width,nt.height,qe,Ue,nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le,ot,nt.width,nt.height,0,qe,Ue,nt.data)}}}else{if(be=b.mipmaps,Q&&Ie){be.length>0&&Be++;const Me=we(De[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Be,ot,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ee){Q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,De[Me].width,De[Me].height,qe,Ue,De[Me].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,De[Me].width,De[Me].height,0,qe,Ue,De[Me].data);for(let Le=0;Le<be.length;Le++){const Ot=be[Le].image[Me].image;Q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,0,0,Ot.width,Ot.height,qe,Ue,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,ot,Ot.width,Ot.height,0,qe,Ue,Ot.data)}}else{Q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,qe,Ue,De[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ot,qe,Ue,De[Me]);for(let Le=0;Le<be.length;Le++){const nt=be[Le];Q?Ce&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,0,0,qe,Ue,nt.image[Me]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,Le+1,ot,qe,Ue,nt.image[Me])}}}M(b)&&x(s.TEXTURE_CUBE_MAP),he.__version=ge.version,b.onUpdate&&b.onUpdate(b)}I.__version=b.version}function Te(I,b,K,me,ge,he){const Pe=c.convert(K.format,K.colorSpace),Ae=c.convert(K.type),Xe=C(K.internalFormat,Pe,Ae,K.colorSpace),Ke=r.get(b),Ee=r.get(K);if(Ee.__renderTarget=b,!Ke.__hasExternalTextures){const De=Math.max(1,b.width>>he),Ve=Math.max(1,b.height>>he);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?i.texImage3D(ge,he,Xe,De,Ve,b.depth,0,Pe,Ae,null):i.texImage2D(ge,he,Xe,De,Ve,0,Pe,Ae,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),qt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ge,Ee.__webglTexture,0,X(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ge,Ee.__webglTexture,he),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Je(I,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,I),b.depthBuffer){const me=b.depthTexture,ge=me&&me.isDepthTexture?me.type:null,he=P(b.stencilBuffer,ge),Pe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;qt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(b),he,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(b),he,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,he,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,I)}else{const me=b.textures;for(let ge=0;ge<me.length;ge++){const he=me[ge],Pe=c.convert(he.format,he.colorSpace),Ae=c.convert(he.type),Xe=C(he.internalFormat,Pe,Ae,he.colorSpace);qt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X(b),Xe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,X(b),Xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(I,b,K){const me=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(b.depthTexture);if(ge.__renderTarget=b,(!ge.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),me){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),re(s.TEXTURE_CUBE_MAP,b.depthTexture);const Ke=c.convert(b.depthTexture.format),Ee=c.convert(b.depthTexture.type);let De;b.depthTexture.format===Ta?De=s.DEPTH_COMPONENT24:b.depthTexture.format===Gr&&(De=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,De,b.width,b.height,0,Ke,Ee,null)}}else ee(b.depthTexture,0);const he=ge.__webglTexture,Pe=X(b),Ae=me?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,Xe=b.depthTexture.format===Gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)qt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ae,he,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ae,he,0);else if(b.depthTexture.format===Gr)qt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Xe,Ae,he,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,Xe,Ae,he,0);else throw new Error("Unknown depthTexture format")}function dt(I){const b=r.get(I),K=I.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==I.depthTexture){const me=I.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",ge)};me.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=me}if(I.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)Ge(b.__webglFramebuffer[me],I,me);else{const me=I.texture.mipmaps;me&&me.length>0?Ge(b.__webglFramebuffer[0],I,0):Ge(b.__webglFramebuffer,I,0)}else if(K){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=s.createRenderbuffer(),Je(b.__webglDepthbuffer[me],I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,he)}}else{const me=I.texture.mipmaps;if(me&&me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Je(b.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,he),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,he)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(I,b,K){const me=r.get(I);b!==void 0&&Te(me.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&dt(I)}function ht(I){const b=I.texture,K=r.get(I),me=r.get(b);I.addEventListener("dispose",N);const ge=I.textures,he=I.isWebGLCubeRenderTarget===!0,Pe=ge.length>1;if(Pe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=b.version,f.memory.textures++),he){K.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[Ae]=[];for(let Xe=0;Xe<b.mipmaps.length;Xe++)K.__webglFramebuffer[Ae][Xe]=s.createFramebuffer()}else K.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)K.__webglFramebuffer[Ae]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let Ae=0,Xe=ge.length;Ae<Xe;Ae++){const Ke=r.get(ge[Ae]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&qt(I)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Xe=ge[Ae];K.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae]);const Ke=c.convert(Xe.format,Xe.colorSpace),Ee=c.convert(Xe.type),De=C(Xe.internalFormat,Ke,Ee,Xe.colorSpace,I.isXRRenderTarget===!0),Ve=X(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,De,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,K.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(K.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(he){i.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),re(s.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Te(K.__webglFramebuffer[Ae][Xe],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Xe);else Te(K.__webglFramebuffer[Ae],I,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(b)&&x(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Pe){for(let Ae=0,Xe=ge.length;Ae<Xe;Ae++){const Ke=ge[Ae],Ee=r.get(Ke);let De=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(De,Ee.__webglTexture),re(De,Ke),Te(K.__webglFramebuffer,I,Ke,s.COLOR_ATTACHMENT0+Ae,De,0),M(Ke)&&x(De)}i.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ae,me.__webglTexture),re(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Xe=0;Xe<b.mipmaps.length;Xe++)Te(K.__webglFramebuffer[Xe],I,b,s.COLOR_ATTACHMENT0,Ae,Xe);else Te(K.__webglFramebuffer,I,b,s.COLOR_ATTACHMENT0,Ae,0);M(b)&&x(Ae),i.unbindTexture()}I.depthBuffer&&dt(I)}function St(I){const b=I.textures;for(let K=0,me=b.length;K<me;K++){const ge=b[K];if(M(ge)){const he=O(I),Pe=r.get(ge).__webglTexture;i.bindTexture(he,Pe),x(he),i.unbindTexture()}}}const Mt=[],at=[];function Tt(I){if(I.samples>0){if(qt(I)===!1){const b=I.textures,K=I.width,me=I.height;let ge=s.COLOR_BUFFER_BIT;const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(I),Ae=b.length>1;if(Ae)for(let Ke=0;Ke<b.length;Ke++)i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const Xe=I.texture.mipmaps;Xe&&Xe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ke=0;Ke<b.length;Ke++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ke]);const Ee=r.get(b[Ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ee,0)}s.blitFramebuffer(0,0,K,me,0,0,K,me,ge,s.NEAREST),m===!0&&(Mt.length=0,at.length=0,Mt.push(s.COLOR_ATTACHMENT0+Ke),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Mt.push(he),at.push(he),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Ke=0;Ke<b.length;Ke++){i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ke]);const Ee=r.get(b[Ke]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ke,s.TEXTURE_2D,Ee,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const b=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function X(I){return Math.min(l.maxSamples,I.samples)}function qt(I){const b=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(I){const b=f.render.frame;g.get(I)!==b&&(g.set(I,b),I.update())}function ye(I,b){const K=I.colorSpace,me=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Ws&&K!==lr&&(At.getTransfer(K)===zt?(me!==Ri||ge!==mi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",K)),b}function we(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=j,this.setTexture2D=ee,this.setTexture2DArray=B,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=jt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function VC(s,e){function i(r,l=lr){let c;const f=At.getTransfer(l);if(r===mi)return s.UNSIGNED_BYTE;if(r===bp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_x)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===vx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===mx)return s.BYTE;if(r===gx)return s.SHORT;if(r===nl)return s.UNSIGNED_SHORT;if(r===yp)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===ba)return s.HALF_FLOAT;if(r===xx)return s.ALPHA;if(r===Sx)return s.RGB;if(r===Ri)return s.RGBA;if(r===Ta)return s.DEPTH_COMPONENT;if(r===Gr)return s.DEPTH_STENCIL;if(r===Mx)return s.RED;if(r===Ap)return s.RED_INTEGER;if(r===Xs)return s.RG;if(r===Rp)return s.RG_INTEGER;if(r===Cp)return s.RGBA_INTEGER;if(r===Zc||r===jc||r===Kc||r===Qc)if(f===zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Th||r===Ah||r===Rh||r===Ch)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Th)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ah)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wh||r===Dh||r===Uh||r===Lh||r===Nh||r===Oh||r===Ph)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===wh||r===Dh)return f===zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Uh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Lh)return c.COMPRESSED_R11_EAC;if(r===Nh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Oh)return c.COMPRESSED_RG11_EAC;if(r===Ph)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ih||r===Fh||r===Bh||r===zh||r===Hh||r===Vh||r===Gh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===Zh||r===jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ih)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Fh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===zh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Gh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===kh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return f===zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Kh)return f===zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===ep||r===tp||r===np)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===ep)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===np)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kC=`
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

}`;class XC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Ox(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Di({vertexShader:GC,fragmentShader:kC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yi(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WC extends Ys{constructor(e,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,g=null,_=null,v=null,S=null,y=null;const T=typeof XRWebGLBinding<"u",M=new XC,x={},O=i.getContextAttributes();let C=null,P=null;const L=[],z=[],N=new Rt;let Z=null;const A=new Ti;A.viewport=new sn;const D=new Ti;D.viewport=new sn;const H=[A,D],j=new e1;let q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ve=L[te];return ve===void 0&&(ve=new Jd,L[te]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(te){let ve=L[te];return ve===void 0&&(ve=new Jd,L[te]=ve),ve.getGripSpace()},this.getHand=function(te){let ve=L[te];return ve===void 0&&(ve=new Jd,L[te]=ve),ve.getHandSpace()};function ee(te){const ve=z.indexOf(te.inputSource);if(ve===-1)return;const Te=L[ve];Te!==void 0&&(Te.update(te.inputSource,te.frame,p||f),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",V);for(let te=0;te<L.length;te++){const ve=z[te];ve!==null&&(z[te]=null,L[te].disconnect(ve))}q=null,ae=null,M.reset();for(const te in x)delete x[te];e.setRenderTarget(C),S=null,v=null,_=null,l=null,P=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return y},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(C=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",B),l.addEventListener("inputsourceschange",V),O.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(N),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,Ge=null;O.depth&&(Ge=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=O.stencil?Gr:Ta,Je=O.stencil?il:qi);const dt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};_=this.getBinding(),v=_.createProjectionLayer(dt),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new Xi(v.textureWidth,v.textureHeight,{format:Ri,type:mi,depthTexture:new rl(v.textureWidth,v.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Te={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),He.setContext(l),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(te){for(let ve=0;ve<te.removed.length;ve++){const Te=te.removed[ve],Je=z.indexOf(Te);Je>=0&&(z[Je]=null,L[Je].disconnect(Te))}for(let ve=0;ve<te.added.length;ve++){const Te=te.added[ve];let Je=z.indexOf(Te);if(Je===-1){for(let dt=0;dt<L.length;dt++)if(dt>=z.length){z.push(Te),Je=dt;break}else if(z[dt]===null){z[dt]=Te,Je=dt;break}if(Je===-1)break}const Ge=L[Je];Ge&&Ge.connect(Te)}}const k=new fe,de=new fe;function U(te,ve,Te){k.setFromMatrixPosition(ve.matrixWorld),de.setFromMatrixPosition(Te.matrixWorld);const Je=k.distanceTo(de),Ge=ve.projectionMatrix.elements,dt=Te.projectionMatrix.elements,jt=Ge[14]/(Ge[10]-1),ht=Ge[14]/(Ge[10]+1),St=(Ge[9]+1)/Ge[5],Mt=(Ge[9]-1)/Ge[5],at=(Ge[8]-1)/Ge[0],Tt=(dt[8]+1)/dt[0],X=jt*at,qt=jt*Tt,Et=Je/(-at+Tt),ye=Et*-at;if(ve.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ye),te.translateZ(Et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const we=jt+Et,I=ht+Et,b=X-ye,K=qt+(Je-ye),me=St*ht/I*we,ge=Mt*ht/I*we;te.projectionMatrix.makePerspective(b,K,me,ge,we,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Y(te,ve){ve===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ve.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ve=te.near,Te=te.far;M.texture!==null&&(M.depthNear>0&&(ve=M.depthNear),M.depthFar>0&&(Te=M.depthFar)),j.near=D.near=A.near=ve,j.far=D.far=A.far=Te,(q!==j.near||ae!==j.far)&&(l.updateRenderState({depthNear:j.near,depthFar:j.far}),q=j.near,ae=j.far),j.layers.mask=te.layers.mask|6,A.layers.mask=j.layers.mask&3,D.layers.mask=j.layers.mask&5;const Je=te.parent,Ge=j.cameras;Y(j,Je);for(let dt=0;dt<Ge.length;dt++)Y(Ge[dt],Je);Ge.length===2?U(j,A,D):j.projectionMatrix.copy(A.projectionMatrix),re(te,j,Je)};function re(te,ve,Te){Te===null?te.matrix.copy(ve.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(ve.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ve.projectionMatrix),te.projectionMatrixInverse.copy(ve.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ip*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(j)},this.getCameraTexture=function(te){return x[te]};let pe=null;function Re(te,ve){if(g=ve.getViewerPose(p||f),y=ve,g!==null){const Te=g.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Je=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,Je=!0);for(let ht=0;ht<Te.length;ht++){const St=Te[ht];let Mt=null;if(S!==null)Mt=S.getViewport(St);else{const Tt=_.getViewSubImage(v,St);Mt=Tt.viewport,ht===0&&(e.setRenderTargetTextures(P,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(P))}let at=H[ht];at===void 0&&(at=new Ti,at.layers.enable(ht),at.viewport=new sn,H[ht]=at),at.matrix.fromArray(St.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(St.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ht===0&&(j.matrix.copy(at.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Je===!0&&j.cameras.push(at)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const ht=_.getDepthInformation(Te[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,l.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let ht=0;ht<Te.length;ht++){const St=Te[ht].camera;if(St){let Mt=x[St];Mt||(Mt=new Ox,x[St]=Mt);const at=_.getCameraImage(St);Mt.sourceTexture=at}}}}for(let Te=0;Te<L.length;Te++){const Je=z[Te],Ge=L[Te];Je!==null&&Ge!==void 0&&Ge.update(Je,ve,p||f)}pe&&pe(te,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),y=null}const He=new Px;He.setAnimationLoop(Re),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}}const Pr=new Aa,qC=new fn;function YC(s,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,wx(s)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,C,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),_(M,x)):x.isMeshPhongMaterial?(c(M,x),g(M,x)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,P)):x.isMeshMatcapMaterial?(c(M,x),y(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),T(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,C):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),C=O.envMap,P=O.envMapRotation;C&&(M.envMap.value=C,Pr.copy(P),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),M.envMapRotation.value.setFromMatrix4(qC.makeRotationFromEuler(Pr)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,C){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=C*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function g(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function _(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function y(M,x){x.matcap&&(M.matcap.value=x.matcap)}function T(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function ZC(s,e,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,C){const P=C.program;r.uniformBlockBinding(O,P)}function p(O,C){let P=l[O.id];P===void 0&&(y(O),P=g(O),l[O.id]=P,O.addEventListener("dispose",M));const L=C.program;r.updateUBOMapping(O,L);const z=e.render.frame;c[O.id]!==z&&(v(O),c[O.id]=z)}function g(O){const C=_();O.__bindingPointIndex=C;const P=s.createBuffer(),L=O.__size,z=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,L,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,P),P}function _(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const C=l[O.id],P=O.uniforms,L=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let z=0,N=P.length;z<N;z++){const Z=Array.isArray(P[z])?P[z]:[P[z]];for(let A=0,D=Z.length;A<D;A++){const H=Z[A];if(S(H,z,A,L)===!0){const j=H.__offset,q=Array.isArray(H.value)?H.value:[H.value];let ae=0;for(let ee=0;ee<q.length;ee++){const B=q[ee],V=T(B);typeof B=="number"||typeof B=="boolean"?(H.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,j+ae,H.__data)):B.isMatrix3?(H.__data[0]=B.elements[0],H.__data[1]=B.elements[1],H.__data[2]=B.elements[2],H.__data[3]=0,H.__data[4]=B.elements[3],H.__data[5]=B.elements[4],H.__data[6]=B.elements[5],H.__data[7]=0,H.__data[8]=B.elements[6],H.__data[9]=B.elements[7],H.__data[10]=B.elements[8],H.__data[11]=0):(B.toArray(H.__data,ae),ae+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,j,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,C,P,L){const z=O.value,N=C+"_"+P;if(L[N]===void 0)return typeof z=="number"||typeof z=="boolean"?L[N]=z:L[N]=z.clone(),!0;{const Z=L[N];if(typeof z=="number"||typeof z=="boolean"){if(Z!==z)return L[N]=z,!0}else if(Z.equals(z)===!1)return Z.copy(z),!0}return!1}function y(O){const C=O.uniforms;let P=0;const L=16;for(let N=0,Z=C.length;N<Z;N++){const A=Array.isArray(C[N])?C[N]:[C[N]];for(let D=0,H=A.length;D<H;D++){const j=A[D],q=Array.isArray(j.value)?j.value:[j.value];for(let ae=0,ee=q.length;ae<ee;ae++){const B=q[ae],V=T(B),k=P%L,de=k%V.boundary,U=k+de;P+=de,U!==0&&L-U<V.storage&&(P+=L-U),j.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=P,P+=V.storage}}}const z=P%L;return z>0&&(P+=L-z),O.__size=P,O.__cache={},this}function T(O){const C={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(C.boundary=4,C.storage=4):O.isVector2?(C.boundary=8,C.storage=8):O.isVector3||O.isColor?(C.boundary=16,C.storage=12):O.isVector4?(C.boundary=16,C.storage=16):O.isMatrix3?(C.boundary=48,C.storage=48):O.isMatrix4?(C.boundary=64,C.storage=64):O.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",O),C}function M(O){const C=O.target;C.removeEventListener("dispose",M);const P=f.indexOf(C.__bindingPointIndex);f.splice(P,1),s.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function x(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:m,update:p,dispose:x}}const jC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function KC(){return zi===null&&(zi=new qb(jC,16,16,Xs,ba),zi.name="DFG_LUT",zi.minFilter=In,zi.magFilter=In,zi.wrapS=Sa,zi.wrapT=Sa,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class QC{constructor(e={}){const{canvas:i=vb(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=mi}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const T=S,M=new Set([Cp,Rp,Ap]),x=new Set([mi,qi,nl,il,bp,Tp]),O=new Uint32Array(4),C=new Int32Array(4);let P=null,L=null;const z=[],N=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1;this._outputColorSpace=ai;let H=0,j=0,q=null,ae=-1,ee=null;const B=new sn,V=new sn;let k=null;const de=new kt(0);let U=0,Y=i.width,re=i.height,pe=1,Re=null,He=null;const te=new sn(0,0,Y,re),ve=new sn(0,0,Y,re);let Te=!1;const Je=new Nx;let Ge=!1,dt=!1;const jt=new fn,ht=new fe,St=new sn,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Tt(){return q===null?pe:1}let X=r;function qt(w,J){return i.getContext(w,J)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ep}`),i.addEventListener("webglcontextlost",nt,!1),i.addEventListener("webglcontextrestored",Ot,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),X===null){const J="webgl2";if(X=qt(J,w),X===null)throw qt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw Ut("WebGLRenderer: "+w.message),w}let Et,ye,we,I,b,K,me,ge,he,Pe,Ae,Xe,Ke,Ee,De,Ve,qe,Ue,ot,Q,Ie,Ce,Be,be;function Me(){Et=new KA(X),Et.init(),Ce=new VC(X,Et),ye=new VA(X,Et,e,Ce),we=new zC(X,Et),ye.reversedDepthBuffer&&v&&we.buffers.depth.setReversed(!0),I=new $A(X),b=new bC,K=new HC(X,Et,we,b,ye,Ce,I),me=new kA(A),ge=new jA(A),he=new i1(X),Be=new zA(X,he),Pe=new QA(X,he,I,Be),Ae=new tR(X,Pe,he,I),ot=new eR(X,ye,K),Ve=new GA(b),Xe=new yC(A,me,ge,Et,ye,Be,Ve),Ke=new YC(A,b),Ee=new AC,De=new LC(Et),Ue=new BA(A,me,ge,we,Ae,y,m),qe=new FC(A,Ae,ye),be=new ZC(X,I,ye,we),Q=new HA(X,Et,I),Ie=new JA(X,Et,I),I.programs=Xe.programs,A.capabilities=ye,A.extensions=Et,A.properties=b,A.renderLists=Ee,A.shadowMap=qe,A.state=we,A.info=I}Me(),T!==mi&&(Z=new iR(T,i.width,i.height,l,c));const Le=new WC(A,X);this.xr=Le,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(Y,re,!1))},this.getSize=function(w){return w.set(Y,re)},this.setSize=function(w,J,ue=!0){if(Le.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,re=J,i.width=Math.floor(w*pe),i.height=Math.floor(J*pe),ue===!0&&(i.style.width=w+"px",i.style.height=J+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,w,J)},this.getDrawingBufferSize=function(w){return w.set(Y*pe,re*pe).floor()},this.setDrawingBufferSize=function(w,J,ue){Y=w,re=J,pe=ue,i.width=Math.floor(w*ue),i.height=Math.floor(J*ue),this.setViewport(0,0,w,J)},this.setEffects=function(w){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let J=0;J<w.length;J++)if(w[J].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,J,ue,oe){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,J,ue,oe),we.viewport(B.copy(te).multiplyScalar(pe).round())},this.getScissor=function(w){return w.copy(ve)},this.setScissor=function(w,J,ue,oe){w.isVector4?ve.set(w.x,w.y,w.z,w.w):ve.set(w,J,ue,oe),we.scissor(V.copy(ve).multiplyScalar(pe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(w){we.setScissorTest(Te=w)},this.setOpaqueSort=function(w){Re=w},this.setTransparentSort=function(w){He=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(w=!0,J=!0,ue=!0){let oe=0;if(w){let ne=!1;if(q!==null){const Ne=q.texture.format;ne=M.has(Ne)}if(ne){const Ne=q.texture.type,ze=x.has(Ne),Oe=Ue.getClearColor(),ke=Ue.getClearAlpha(),Ze=Oe.r,$e=Oe.g,We=Oe.b;ze?(O[0]=Ze,O[1]=$e,O[2]=We,O[3]=ke,X.clearBufferuiv(X.COLOR,0,O)):(C[0]=Ze,C[1]=$e,C[2]=We,C[3]=ke,X.clearBufferiv(X.COLOR,0,C))}else oe|=X.COLOR_BUFFER_BIT}J&&(oe|=X.DEPTH_BUFFER_BIT),ue&&(oe|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",nt,!1),i.removeEventListener("webglcontextrestored",Ot,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),Ue.dispose(),Ee.dispose(),De.dispose(),b.dispose(),me.dispose(),ge.dispose(),Ae.dispose(),Be.dispose(),be.dispose(),Xe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",pl),Le.removeEventListener("sessionend",ml),Li.stop()};function nt(w){w.preventDefault(),F_("WebGLRenderer: Context Lost."),D=!0}function Ot(){F_("WebGLRenderer: Context Restored."),D=!1;const w=I.autoReset,J=qe.enabled,ue=qe.autoUpdate,oe=qe.needsUpdate,ne=qe.type;Me(),I.autoReset=w,qe.enabled=J,qe.autoUpdate=ue,qe.needsUpdate=oe,qe.type=ne}function Ct(w){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function si(w){const J=w.target;J.removeEventListener("dispose",si),gn(J)}function gn(w){_n(w),b.remove(w)}function _n(w){const J=b.get(w).programs;J!==void 0&&(J.forEach(function(ue){Xe.releaseProgram(ue)}),w.isShaderMaterial&&Xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,J,ue,oe,ne,Ne){J===null&&(J=Mt);const ze=ne.isMesh&&ne.matrixWorld.determinant()<0,Oe=gl(w,J,ue,oe,ne);we.setMaterial(oe,ze);let ke=ue.index,Ze=1;if(oe.wireframe===!0){if(ke=Pe.getWireframeAttribute(ue),ke===void 0)return;Ze=2}const $e=ue.drawRange,We=ue.attributes.position;let lt=$e.start*Ze,Pt=($e.start+$e.count)*Ze;Ne!==null&&(lt=Math.max(lt,Ne.start*Ze),Pt=Math.min(Pt,(Ne.start+Ne.count)*Ze)),ke!==null?(lt=Math.max(lt,0),Pt=Math.min(Pt,ke.count)):We!=null&&(lt=Math.max(lt,0),Pt=Math.min(Pt,We.count));const Xt=Pt-lt;if(Xt<0||Xt===1/0)return;Be.setup(ne,oe,Oe,ue,ke);let Kt,wt=Q;if(ke!==null&&(Kt=he.get(ke),wt=Ie,wt.setIndex(Kt)),ne.isMesh)oe.wireframe===!0?(we.setLineWidth(oe.wireframeLinewidth*Tt()),wt.setMode(X.LINES)):wt.setMode(X.TRIANGLES);else if(ne.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),we.setLineWidth(Qe*Tt()),ne.isLineSegments?wt.setMode(X.LINES):ne.isLineLoop?wt.setMode(X.LINE_LOOP):wt.setMode(X.LINE_STRIP)}else ne.isPoints?wt.setMode(X.POINTS):ne.isSprite&&wt.setMode(X.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)al("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Qe=ne._multiDrawStarts,st=ne._multiDrawCounts,vt=ne._multiDrawCount,Dn=ke?he.get(ke).bytesPerElement:1,Ni=b.get(oe).currentProgram.getUniforms();for(let on=0;on<vt;on++)Ni.setValue(X,"_gl_DrawID",on),wt.render(Qe[on]/Dn,st[on])}else if(ne.isInstancedMesh)wt.renderInstances(lt,Xt,ne.count);else if(ue.isInstancedBufferGeometry){const Qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,st=Math.min(ue.instanceCount,Qe);wt.renderInstances(lt,Xt,st)}else wt.render(lt,Xt)};function bn(w,J,ue){w.transparent===!0&&w.side===xa&&w.forceSinglePass===!1?(w.side=Yn,w.needsUpdate=!0,_i(w,J,ue),w.side=fr,w.needsUpdate=!0,_i(w,J,ue),w.side=xa):_i(w,J,ue)}this.compile=function(w,J,ue=null){ue===null&&(ue=w),L=De.get(ue),L.init(J),N.push(L),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(J.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),w!==ue&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(J.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const oe=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ne=ne.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Oe=Ne[ze];bn(Oe,ue,ne),oe.add(Oe)}else bn(Ne,ue,ne),oe.add(Ne)}),L=N.pop(),oe},this.compileAsync=function(w,J,ue=null){const oe=this.compile(w,J,ue);return new Promise(ne=>{function Ne(){if(oe.forEach(function(ze){b.get(ze).currentProgram.isReady()&&oe.delete(ze)}),oe.size===0){ne(w);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Ui=null;function js(w){Ui&&Ui(w)}function pl(){Li.stop()}function ml(){Li.start()}const Li=new Px;Li.setAnimationLoop(js),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Ui=w,Le.setAnimationLoop(w),w===null?Li.stop():Li.start()},Le.addEventListener("sessionstart",pl),Le.addEventListener("sessionend",ml),this.render=function(w,J){if(J!==void 0&&J.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const ue=Le.enabled===!0&&Le.isPresenting===!0,oe=Z!==null&&(q===null||ue)&&Z.begin(A,q);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(J),J=Le.getCamera()),w.isScene===!0&&w.onBeforeRender(A,w,J,q),L=De.get(w,N.length),L.init(J),N.push(L),jt.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Je.setFromProjectionMatrix(jt,Gi,J.reversedDepth),dt=this.localClippingEnabled,Ge=Ve.init(this.clippingPlanes,dt),P=Ee.get(w,z.length),P.init(),z.push(P),Le.enabled===!0&&Le.isPresenting===!0){const ze=A.xr.getDepthSensingMesh();ze!==null&&Ki(ze,J,-1/0,A.sortObjects)}Ki(w,J,0,A.sortObjects),P.finish(),A.sortObjects===!0&&P.sort(Re,He),at=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,at&&Ue.addToRenderList(P,w),this.info.render.frame++,Ge===!0&&Ve.beginShadows();const ne=L.state.shadowsArray;if(qe.render(ne,w,J),Ge===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&Z.hasRenderPass())===!1){const ze=P.opaque,Oe=P.transmissive;if(L.setupLights(),J.isArrayCamera){const ke=J.cameras;if(Oe.length>0)for(let Ze=0,$e=ke.length;Ze<$e;Ze++){const We=ke[Ze];Qi(ze,Oe,w,We)}at&&Ue.render(w);for(let Ze=0,$e=ke.length;Ze<$e;Ze++){const We=ke[Ze];Wr(P,w,We,We.viewport)}}else Oe.length>0&&Qi(ze,Oe,w,J),at&&Ue.render(w),Wr(P,w,J)}q!==null&&j===0&&(K.updateMultisampleRenderTarget(q),K.updateRenderTargetMipmap(q)),oe&&Z.end(A),w.isScene===!0&&w.onAfterRender(A,w,J),Be.resetDefaultState(),ae=-1,ee=null,N.pop(),N.length>0?(L=N[N.length-1],Ge===!0&&Ve.setGlobalState(A.clippingPlanes,L.state.camera)):L=null,z.pop(),z.length>0?P=z[z.length-1]:P=null};function Ki(w,J,ue,oe){if(w.visible===!1)return;if(w.layers.test(J.layers)){if(w.isGroup)ue=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(J);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Je.intersectsSprite(w)){oe&&St.setFromMatrixPosition(w.matrixWorld).applyMatrix4(jt);const ze=Ae.update(w),Oe=w.material;Oe.visible&&P.push(w,ze,Oe,ue,St.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Je.intersectsObject(w))){const ze=Ae.update(w),Oe=w.material;if(oe&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),St.copy(w.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),St.copy(ze.boundingSphere.center)),St.applyMatrix4(w.matrixWorld).applyMatrix4(jt)),Array.isArray(Oe)){const ke=ze.groups;for(let Ze=0,$e=ke.length;Ze<$e;Ze++){const We=ke[Ze],lt=Oe[We.materialIndex];lt&&lt.visible&&P.push(w,ze,lt,ue,St.z,We)}}else Oe.visible&&P.push(w,ze,Oe,ue,St.z,null)}}const Ne=w.children;for(let ze=0,Oe=Ne.length;ze<Oe;ze++)Ki(Ne[ze],J,ue,oe)}function Wr(w,J,ue,oe){const{opaque:ne,transmissive:Ne,transparent:ze}=w;L.setupLightsView(ue),Ge===!0&&Ve.setGlobalState(A.clippingPlanes,ue),oe&&we.viewport(B.copy(oe)),ne.length>0&&gi(ne,J,ue),Ne.length>0&&gi(Ne,J,ue),ze.length>0&&gi(ze,J,ue),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Qi(w,J,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const lt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new Xi(1,1,{generateMipmaps:!0,type:lt?ba:mi,minFilter:Vr,samples:ye.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Ne=L.state.transmissionRenderTarget[oe.id],ze=oe.viewport||B;Ne.setSize(ze.z*A.transmissionResolutionScale,ze.w*A.transmissionResolutionScale);const Oe=A.getRenderTarget(),ke=A.getActiveCubeFace(),Ze=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(de),U=A.getClearAlpha(),U<1&&A.setClearColor(16777215,.5),A.clear(),at&&Ue.render(ue);const $e=A.toneMapping;A.toneMapping=ki;const We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),Ge===!0&&Ve.setGlobalState(A.clippingPlanes,oe),gi(w,ue,oe),K.updateMultisampleRenderTarget(Ne),K.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Pt=0,Xt=J.length;Pt<Xt;Pt++){const Kt=J[Pt],{object:wt,geometry:Qe,material:st,group:vt}=Kt;if(st.side===xa&&wt.layers.test(oe.layers)){const Dn=st.side;st.side=Yn,st.needsUpdate=!0,Ua(wt,ue,oe,Qe,st,vt),st.side=Dn,st.needsUpdate=!0,lt=!0}}lt===!0&&(K.updateMultisampleRenderTarget(Ne),K.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Oe,ke,Ze),A.setClearColor(de,U),We!==void 0&&(oe.viewport=We),A.toneMapping=$e}function gi(w,J,ue){const oe=J.isScene===!0?J.overrideMaterial:null;for(let ne=0,Ne=w.length;ne<Ne;ne++){const ze=w[ne],{object:Oe,geometry:ke,group:Ze}=ze;let $e=ze.material;$e.allowOverride===!0&&oe!==null&&($e=oe),Oe.layers.test(ue.layers)&&Ua(Oe,J,ue,ke,$e,Ze)}}function Ua(w,J,ue,oe,ne,Ne){w.onBeforeRender(A,J,ue,oe,ne,Ne),w.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(A,J,ue,oe,w,Ne),ne.transparent===!0&&ne.side===xa&&ne.forceSinglePass===!1?(ne.side=Yn,ne.needsUpdate=!0,A.renderBufferDirect(ue,J,oe,ne,w,Ne),ne.side=fr,ne.needsUpdate=!0,A.renderBufferDirect(ue,J,oe,ne,w,Ne),ne.side=xa):A.renderBufferDirect(ue,J,oe,ne,w,Ne),w.onAfterRender(A,J,ue,oe,ne,Ne)}function _i(w,J,ue){J.isScene!==!0&&(J=Mt);const oe=b.get(w),ne=L.state.lights,Ne=L.state.shadowsArray,ze=ne.state.version,Oe=Xe.getParameters(w,ne.state,Ne,J,ue),ke=Xe.getProgramCacheKey(Oe);let Ze=oe.programs;oe.environment=w.isMeshStandardMaterial?J.environment:null,oe.fog=J.fog,oe.envMap=(w.isMeshStandardMaterial?ge:me).get(w.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&w.envMap===null?J.environmentRotation:w.envMapRotation,Ze===void 0&&(w.addEventListener("dispose",si),Ze=new Map,oe.programs=Ze);let $e=Ze.get(ke);if($e!==void 0){if(oe.currentProgram===$e&&oe.lightsStateVersion===ze)return Ks(w,Oe),$e}else Oe.uniforms=Xe.getUniforms(w),w.onBeforeCompile(Oe,A),$e=Xe.acquireProgram(Oe,ke),Ze.set(ke,$e),oe.uniforms=Oe.uniforms;const We=oe.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(We.clippingPlanes=Ve.uniform),Ks(w,Oe),oe.needsLights=La(w),oe.lightsStateVersion=ze,oe.needsLights&&(We.ambientLightColor.value=ne.state.ambient,We.lightProbe.value=ne.state.probe,We.directionalLights.value=ne.state.directional,We.directionalLightShadows.value=ne.state.directionalShadow,We.spotLights.value=ne.state.spot,We.spotLightShadows.value=ne.state.spotShadow,We.rectAreaLights.value=ne.state.rectArea,We.ltc_1.value=ne.state.rectAreaLTC1,We.ltc_2.value=ne.state.rectAreaLTC2,We.pointLights.value=ne.state.point,We.pointLightShadows.value=ne.state.pointShadow,We.hemisphereLights.value=ne.state.hemi,We.directionalShadowMap.value=ne.state.directionalShadowMap,We.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,We.spotShadowMap.value=ne.state.spotShadowMap,We.spotLightMatrix.value=ne.state.spotLightMatrix,We.spotLightMap.value=ne.state.spotLightMap,We.pointShadowMap.value=ne.state.pointShadowMap,We.pointShadowMatrix.value=ne.state.pointShadowMatrix),oe.currentProgram=$e,oe.uniformsList=null,$e}function tn(w){if(w.uniformsList===null){const J=w.currentProgram.getUniforms();w.uniformsList=Jc.seqWithValue(J.seq,w.uniforms)}return w.uniformsList}function Ks(w,J){const ue=b.get(w);ue.outputColorSpace=J.outputColorSpace,ue.batching=J.batching,ue.batchingColor=J.batchingColor,ue.instancing=J.instancing,ue.instancingColor=J.instancingColor,ue.instancingMorph=J.instancingMorph,ue.skinning=J.skinning,ue.morphTargets=J.morphTargets,ue.morphNormals=J.morphNormals,ue.morphColors=J.morphColors,ue.morphTargetsCount=J.morphTargetsCount,ue.numClippingPlanes=J.numClippingPlanes,ue.numIntersection=J.numClipIntersection,ue.vertexAlphas=J.vertexAlphas,ue.vertexTangents=J.vertexTangents,ue.toneMapping=J.toneMapping}function gl(w,J,ue,oe,ne){J.isScene!==!0&&(J=Mt),K.resetTextureUnits();const Ne=J.fog,ze=oe.isMeshStandardMaterial?J.environment:null,Oe=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ws,ke=(oe.isMeshStandardMaterial?ge:me).get(oe.envMap||ze),Ze=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,$e=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),We=!!ue.morphAttributes.position,lt=!!ue.morphAttributes.normal,Pt=!!ue.morphAttributes.color;let Xt=ki;oe.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xt=A.toneMapping);const Kt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,wt=Kt!==void 0?Kt.length:0,Qe=b.get(oe),st=L.state.lights;if(Ge===!0&&(dt===!0||w!==ee)){const vn=w===ee&&oe.id===ae;Ve.setState(oe,w,vn)}let vt=!1;oe.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==st.state.version||Qe.outputColorSpace!==Oe||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isBatchedMesh&&Qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==ke||oe.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==Ze||Qe.vertexTangents!==$e||Qe.morphTargets!==We||Qe.morphNormals!==lt||Qe.morphColors!==Pt||Qe.toneMapping!==Xt||Qe.morphTargetsCount!==wt)&&(vt=!0):(vt=!0,Qe.__version=oe.version);let Dn=Qe.currentProgram;vt===!0&&(Dn=_i(oe,J,ne));let Ni=!1,on=!1,Na=!1;const It=Dn.getUniforms(),nn=Qe.uniforms;if(we.useProgram(Dn.program)&&(Ni=!0,on=!0,Na=!0),oe.id!==ae&&(ae=oe.id,on=!0),Ni||ee!==w){we.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),It.setValue(X,"projectionMatrix",w.projectionMatrix),It.setValue(X,"viewMatrix",w.matrixWorldInverse);const Tn=It.map.cameraPosition;Tn!==void 0&&Tn.setValue(X,ht.setFromMatrixPosition(w.matrixWorld)),ye.logarithmicDepthBuffer&&It.setValue(X,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&It.setValue(X,"isOrthographic",w.isOrthographicCamera===!0),ee!==w&&(ee=w,on=!0,Na=!0)}if(Qe.needsLights&&(st.state.directionalShadowMap.length>0&&It.setValue(X,"directionalShadowMap",st.state.directionalShadowMap,K),st.state.spotShadowMap.length>0&&It.setValue(X,"spotShadowMap",st.state.spotShadowMap,K),st.state.pointShadowMap.length>0&&It.setValue(X,"pointShadowMap",st.state.pointShadowMap,K)),ne.isSkinnedMesh){It.setOptional(X,ne,"bindMatrix"),It.setOptional(X,ne,"bindMatrixInverse");const vn=ne.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),It.setValue(X,"boneTexture",vn.boneTexture,K))}ne.isBatchedMesh&&(It.setOptional(X,ne,"batchingTexture"),It.setValue(X,"batchingTexture",ne._matricesTexture,K),It.setOptional(X,ne,"batchingIdTexture"),It.setValue(X,"batchingIdTexture",ne._indirectTexture,K),It.setOptional(X,ne,"batchingColorTexture"),ne._colorsTexture!==null&&It.setValue(X,"batchingColorTexture",ne._colorsTexture,K));const Hn=ue.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ot.update(ne,ue,Dn),(on||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,It.setValue(X,"receiveShadow",ne.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(nn.envMap.value=ke,nn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&J.environment!==null&&(nn.envMapIntensity.value=J.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=KC()),on&&(It.setValue(X,"toneMappingExposure",A.toneMappingExposure),Qe.needsLights&&Ji(nn,Na),Ne&&oe.fog===!0&&Ke.refreshFogUniforms(nn,Ne),Ke.refreshMaterialUniforms(nn,oe,pe,re,L.state.transmissionRenderTarget[w.id]),Jc.upload(X,tn(Qe),nn,K)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Jc.upload(X,tn(Qe),nn,K),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&It.setValue(X,"center",ne.center),It.setValue(X,"modelViewMatrix",ne.modelViewMatrix),It.setValue(X,"normalMatrix",ne.normalMatrix),It.setValue(X,"modelMatrix",ne.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const vn=oe.uniformsGroups;for(let Tn=0,dr=vn.length;Tn<dr;Tn++){const $i=vn[Tn];be.update($i,Dn),be.bind($i,Dn)}}return Dn}function Ji(w,J){w.ambientLightColor.needsUpdate=J,w.lightProbe.needsUpdate=J,w.directionalLights.needsUpdate=J,w.directionalLightShadows.needsUpdate=J,w.pointLights.needsUpdate=J,w.pointLightShadows.needsUpdate=J,w.spotLights.needsUpdate=J,w.spotLightShadows.needsUpdate=J,w.rectAreaLights.needsUpdate=J,w.hemisphereLights.needsUpdate=J}function La(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,J,ue){const oe=b.get(w);oe.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=J,b.get(w.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,J){const ue=b.get(w);ue.__webglFramebuffer=J,ue.__useDefaultFramebuffer=J===void 0};const mu=X.createFramebuffer();this.setRenderTarget=function(w,J=0,ue=0){q=w,H=J,j=ue;let oe=null,ne=!1,Ne=!1;if(w){const Oe=b.get(w);if(Oe.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),B.copy(w.viewport),V.copy(w.scissor),k=w.scissorTest,we.viewport(B),we.scissor(V),we.setScissorTest(k),ae=-1;return}else if(Oe.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(Oe.__hasExternalTextures)K.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const $e=w.depthTexture;if(Oe.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(w.width!==$e.image.width||w.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const Ze=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ze[J])?oe=Ze[J][ue]:oe=Ze[J],ne=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?oe=b.get(w).__webglMultisampledFramebuffer:Array.isArray(Ze)?oe=Ze[ue]:oe=Ze,B.copy(w.viewport),V.copy(w.scissor),k=w.scissorTest}else B.copy(te).multiplyScalar(pe).floor(),V.copy(ve).multiplyScalar(pe).floor(),k=Te;if(ue!==0&&(oe=mu),we.bindFramebuffer(X.FRAMEBUFFER,oe)&&we.drawBuffers(w,oe),we.viewport(B),we.scissor(V),we.setScissorTest(k),ne){const Oe=b.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+J,Oe.__webglTexture,ue)}else if(Ne){const Oe=J;for(let ke=0;ke<w.textures.length;ke++){const Ze=b.get(w.textures[ke]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+ke,Ze.__webglTexture,ue,Oe)}}else if(w!==null&&ue!==0){const Oe=b.get(w.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,ue)}ae=-1},this.readRenderTargetPixels=function(w,J,ue,oe,ne,Ne,ze,Oe=0){if(!(w&&w.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke){we.bindFramebuffer(X.FRAMEBUFFER,ke);try{const Ze=w.textures[Oe],$e=Ze.format,We=Ze.type;if(!ye.textureFormatReadable($e)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(We)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=w.width-oe&&ue>=0&&ue<=w.height-ne&&(w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(J,ue,oe,ne,Ce.convert($e),Ce.convert(We),Ne))}finally{const Ze=q!==null?b.get(q).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(w,J,ue,oe,ne,Ne,ze,Oe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ze!==void 0&&(ke=ke[ze]),ke)if(J>=0&&J<=w.width-oe&&ue>=0&&ue<=w.height-ne){we.bindFramebuffer(X.FRAMEBUFFER,ke);const Ze=w.textures[Oe],$e=Ze.format,We=Ze.type;if(!ye.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const lt=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,lt),X.bufferData(X.PIXEL_PACK_BUFFER,Ne.byteLength,X.STREAM_READ),w.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),X.readPixels(J,ue,oe,ne,Ce.convert($e),Ce.convert(We),0);const Pt=q!==null?b.get(q).__webglFramebuffer:null;we.bindFramebuffer(X.FRAMEBUFFER,Pt);const Xt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await xb(X,Xt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,lt),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Ne),X.deleteBuffer(lt),X.deleteSync(Xt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,J=null,ue=0){const oe=Math.pow(2,-ue),ne=Math.floor(w.image.width*oe),Ne=Math.floor(w.image.height*oe),ze=J!==null?J.x:0,Oe=J!==null?J.y:0;K.setTexture2D(w,0),X.copyTexSubImage2D(X.TEXTURE_2D,ue,0,0,ze,Oe,ne,Ne),we.unbindTexture()};const _l=X.createFramebuffer(),vl=X.createFramebuffer();this.copyTextureToTexture=function(w,J,ue=null,oe=null,ne=0,Ne=null){Ne===null&&(ne!==0?(al("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ne,ne=0):Ne=0);let ze,Oe,ke,Ze,$e,We,lt,Pt,Xt;const Kt=w.isCompressedTexture?w.mipmaps[Ne]:w.image;if(ue!==null)ze=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,ke=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,$e=ue.min.y,We=ue.isBox3?ue.min.z:0;else{const Hn=Math.pow(2,-ne);ze=Math.floor(Kt.width*Hn),Oe=Math.floor(Kt.height*Hn),w.isDataArrayTexture?ke=Kt.depth:w.isData3DTexture?ke=Math.floor(Kt.depth*Hn):ke=1,Ze=0,$e=0,We=0}oe!==null?(lt=oe.x,Pt=oe.y,Xt=oe.z):(lt=0,Pt=0,Xt=0);const wt=Ce.convert(J.format),Qe=Ce.convert(J.type);let st;J.isData3DTexture?(K.setTexture3D(J,0),st=X.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(K.setTexture2DArray(J,0),st=X.TEXTURE_2D_ARRAY):(K.setTexture2D(J,0),st=X.TEXTURE_2D),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,J.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,J.unpackAlignment);const vt=X.getParameter(X.UNPACK_ROW_LENGTH),Dn=X.getParameter(X.UNPACK_IMAGE_HEIGHT),Ni=X.getParameter(X.UNPACK_SKIP_PIXELS),on=X.getParameter(X.UNPACK_SKIP_ROWS),Na=X.getParameter(X.UNPACK_SKIP_IMAGES);X.pixelStorei(X.UNPACK_ROW_LENGTH,Kt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Kt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ze),X.pixelStorei(X.UNPACK_SKIP_ROWS,$e),X.pixelStorei(X.UNPACK_SKIP_IMAGES,We);const It=w.isDataArrayTexture||w.isData3DTexture,nn=J.isDataArrayTexture||J.isData3DTexture;if(w.isDepthTexture){const Hn=b.get(w),vn=b.get(J),Tn=b.get(Hn.__renderTarget),dr=b.get(vn.__renderTarget);we.bindFramebuffer(X.READ_FRAMEBUFFER,Tn.__webglFramebuffer),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let $i=0;$i<ke;$i++)It&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(w).__webglTexture,ne,We+$i),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,b.get(J).__webglTexture,Ne,Xt+$i)),X.blitFramebuffer(Ze,$e,ze,Oe,lt,Pt,ze,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);we.bindFramebuffer(X.READ_FRAMEBUFFER,null),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||b.has(w)){const Hn=b.get(w),vn=b.get(J);we.bindFramebuffer(X.READ_FRAMEBUFFER,_l),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,vl);for(let Tn=0;Tn<ke;Tn++)It?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Hn.__webglTexture,ne,We+Tn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Hn.__webglTexture,ne),nn?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,vn.__webglTexture,Ne,Xt+Tn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,vn.__webglTexture,Ne),ne!==0?X.blitFramebuffer(Ze,$e,ze,Oe,lt,Pt,ze,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):nn?X.copyTexSubImage3D(st,Ne,lt,Pt,Xt+Tn,Ze,$e,ze,Oe):X.copyTexSubImage2D(st,Ne,lt,Pt,Ze,$e,ze,Oe);we.bindFramebuffer(X.READ_FRAMEBUFFER,null),we.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?X.texSubImage3D(st,Ne,lt,Pt,Xt,ze,Oe,ke,wt,Qe,Kt.data):J.isCompressedArrayTexture?X.compressedTexSubImage3D(st,Ne,lt,Pt,Xt,ze,Oe,ke,wt,Kt.data):X.texSubImage3D(st,Ne,lt,Pt,Xt,ze,Oe,ke,wt,Qe,Kt):w.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Ne,lt,Pt,ze,Oe,wt,Qe,Kt.data):w.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Ne,lt,Pt,Kt.width,Kt.height,wt,Kt.data):X.texSubImage2D(X.TEXTURE_2D,Ne,lt,Pt,ze,Oe,wt,Qe,Kt);X.pixelStorei(X.UNPACK_ROW_LENGTH,vt),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Dn),X.pixelStorei(X.UNPACK_SKIP_PIXELS,Ni),X.pixelStorei(X.UNPACK_SKIP_ROWS,on),X.pixelStorei(X.UNPACK_SKIP_IMAGES,Na),Ne===0&&J.generateMipmaps&&X.generateMipmap(st),we.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){H=0,j=0,q=null,we.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const $c=8,JC=`
#define MAX_COLORS ${$c}
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
`,$C=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;function e3({className:s,style:e,rotation:i=45,speed:r=.2,colors:l=[],transparent:c=!0,autoRotate:f=0,scale:d=1,frequency:m=1,warpStrength:p=1,mouseInfluence:g=1,parallax:_=.5,noise:v=.1}){const S=F.useRef(null),y=F.useRef(null),T=F.useRef(null),M=F.useRef(null),x=F.useRef(null),O=F.useRef(i),C=F.useRef(f),P=F.useRef(new Rt(0,0)),L=F.useRef(new Rt(0,0)),z=F.useRef(8);return F.useEffect(()=>{const N=S.current,Z=new Wb,A=new Np(-1,1,1,-1,0,1),D=new hl(2,2),H=Array.from({length:$c},()=>new fe(0,0,0)),j=new Di({vertexShader:$C,fragmentShader:JC,uniforms:{uCanvas:{value:new Rt(1,1)},uTime:{value:0},uSpeed:{value:r},uRot:{value:new Rt(1,0)},uColorCount:{value:0},uColors:{value:H},uTransparent:{value:c?1:0},uScale:{value:d},uFrequency:{value:m},uWarpStrength:{value:p},uPointer:{value:new Rt(0,0)},uMouseInfluence:{value:g},uParallax:{value:_},uNoise:{value:v}},premultipliedAlpha:!0,transparent:!0});M.current=j;const q=new Yi(D,j);Z.add(q);const ae=new QC({antialias:!1,powerPreference:"high-performance",alpha:!0});y.current=ae,ae.outputColorSpace=ai,ae.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ae.setClearColor(0,c?0:1),ae.domElement.style.width="100%",ae.domElement.style.height="100%",ae.domElement.style.display="block",N.appendChild(ae.domElement);const ee=new t1,B=()=>{const k=N.clientWidth||1,de=N.clientHeight||1;ae.setSize(k,de,!1),j.uniforms.uCanvas.value.set(k,de)};if(B(),"ResizeObserver"in window){const k=new ResizeObserver(B);k.observe(N),x.current=k}else window.addEventListener("resize",B);const V=()=>{const k=ee.getDelta(),de=ee.elapsedTime;j.uniforms.uTime.value=de;const Y=(O.current%360+C.current*de)*Math.PI/180,re=Math.cos(Y),pe=Math.sin(Y);j.uniforms.uRot.value.set(re,pe);const Re=L.current,He=P.current,te=Math.min(1,k*z.current);Re.lerp(He,te),j.uniforms.uPointer.value.copy(Re),ae.render(Z,A),T.current=requestAnimationFrame(V)};return T.current=requestAnimationFrame(V),()=>{T.current!==null&&cancelAnimationFrame(T.current),x.current?x.current.disconnect():window.removeEventListener("resize",B),D.dispose(),j.dispose(),ae.dispose(),ae.domElement&&ae.domElement.parentElement===N&&N.removeChild(ae.domElement)}},[m,g,v,_,d,r,c,p]),F.useEffect(()=>{const N=M.current,Z=y.current;if(!N)return;O.current=i,C.current=f,N.uniforms.uSpeed.value=r,N.uniforms.uScale.value=d,N.uniforms.uFrequency.value=m,N.uniforms.uWarpStrength.value=p,N.uniforms.uMouseInfluence.value=g,N.uniforms.uParallax.value=_,N.uniforms.uNoise.value=v;const A=H=>{const j=H.replace("#","").trim(),q=j.length===3?[parseInt(j[0]+j[0],16),parseInt(j[1]+j[1],16),parseInt(j[2]+j[2],16)]:[parseInt(j.slice(0,2),16),parseInt(j.slice(2,4),16),parseInt(j.slice(4,6),16)];return new fe(q[0]/255,q[1]/255,q[2]/255)},D=(l||[]).filter(Boolean).slice(0,$c).map(A);for(let H=0;H<$c;H++){const j=N.uniforms.uColors.value[H];H<D.length?j.copy(D[H]):j.set(0,0,0)}N.uniforms.uColorCount.value=D.length,N.uniforms.uTransparent.value=c?1:0,Z&&Z.setClearColor(0,c?0:1)},[i,f,r,d,m,p,g,_,v,l,c]),F.useEffect(()=>{const N=M.current,Z=S.current;if(!N||!Z)return;const A=D=>{const H=Z.getBoundingClientRect(),j=(D.clientX-H.left)/(H.width||1)*2-1,q=-((D.clientY-H.top)/(H.height||1)*2-1);P.current.set(j,q)};return Z.addEventListener("pointermove",A),()=>{Z.removeEventListener("pointermove",A)}},[]),Zt.jsx("div",{ref:S,className:`color-bends-container ${s}`,style:e})}const t3={auto:!1,ref:null},Hx=s=>({...t3,...s}),Vx=F.createContext(null),n3=Zi("useFullscreen","FullscreenContext",Vx);function i3({fullscreen:s,on:e,children:i}){const{auto:r,ref:l}=Hx(s),c=F.useRef(null),[f,d]=F.useState(),[m,p]=F.useState(!1),g=F.useRef(!1),{getOwnerDocument:_}=ol();wi(()=>{var C,P,L,z;const N=_();d(!((z=(L=(P=(C=N.fullscreenEnabled)!==null&&C!==void 0?C:N.webkitFullscreenEnabled)!==null&&P!==void 0?P:N.mozFullScreenEnabled)!==null&&L!==void 0?L:N.msFullscreenEnabled)!==null&&z!==void 0&&z))},[_]);const v=F.useCallback(()=>{var C;const P=_(),L=P.fullscreenElement||P.webkitFullscreenElement||P.mozFullScreenElement||P.msFullscreenElement;return((C=L==null?void 0:L.shadowRoot)===null||C===void 0?void 0:C.fullscreenElement)||L},[_]),S=F.useCallback(()=>{const C=c.current;try{C.requestFullscreen?C.requestFullscreen().catch(()=>{}):C.webkitRequestFullscreen?C.webkitRequestFullscreen():C.mozRequestFullScreen?C.mozRequestFullScreen():C.msRequestFullscreen&&C.msRequestFullscreen()}catch{}},[]),y=F.useCallback(()=>{if(!v())return;const C=_();try{C.exitFullscreen?C.exitFullscreen().catch(()=>{}):C.webkitExitFullscreen?C.webkitExitFullscreen():C.mozCancelFullScreen?C.mozCancelFullScreen():C.msExitFullscreen&&C.msExitFullscreen()}catch{}},[v,_]);F.useEffect(()=>{const C=_(),P=()=>{p(v()===c.current)};return su(...["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"].map(L=>(C.addEventListener(L,P),()=>C.removeEventListener(L,P))))},[v,_]);const T=Lt(()=>{var C;return(C=e.enterFullscreen)===null||C===void 0?void 0:C.call(e)}),M=Lt(()=>{var C;return(C=e.exitFullscreen)===null||C===void 0?void 0:C.call(e)});F.useEffect(()=>{m&&(g.current=!0),g.current&&(m?T:M)()},[m,T,M]);const x=Lt(()=>{var C;return(C=r?S:null)===null||C===void 0||C(),y});F.useEffect(x,[x]);const O=F.useMemo(()=>({fullscreen:m,disabled:f,enter:S,exit:y}),[m,f,S,y]);return F.useImperativeHandle(l,()=>O,[O]),F.createElement("div",{ref:c,className:Ci(xt(oh),xt(Nv))},F.createElement(Vx.Provider,{value:O},i))}const a3=ji("EnterFullscreen",F.createElement("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"})),r3=ji("ExitFullscreen",F.createElement("path",{d:"M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"}));function s3(){var s;const{fullscreen:e,disabled:i,enter:r,exit:l}=n3(),{render:c}=Zn();return i?null:c.buttonFullscreen?F.createElement(F.Fragment,null,(s=c.buttonFullscreen)===null||s===void 0?void 0:s.call(c,{fullscreen:e,disabled:i,enter:r,exit:l})):F.createElement(ll,{disabled:i,label:e?"Exit Fullscreen":"Enter Fullscreen",icon:e?r3:a3,renderIcon:e?c.iconExitFullscreen:c.iconEnterFullscreen,onClick:e?l:r})}function o3({augment:s,contains:e,addParent:i}){s(({fullscreen:r,toolbar:l,...c})=>({toolbar:xp(l,oh,F.createElement(s3,null)),fullscreen:Hx(r),...c})),i(e(m_)?m_:lp,Ra(oh,i3))}const l3={share:void 0},Gx=s=>({...l3,...s});function c3(){return typeof navigator<"u"&&!!navigator.canShare}const u3=ji("ShareIcon",F.createElement("path",{d:"m16 5-1.42 1.42-1.59-1.59V16h-1.98V4.83L9.42 6.42 8 5l4-4 4 4zm4 5v11c0 1.1-.9 2-2 2H6c-1.11 0-2-.9-2-2V10c0-1.11.89-2 2-2h3v2H6v11h12V10h-3V8h3c1.1 0 2 .89 2 2z"}));function f3(){const{render:s,on:e,share:i}=Zn(),{share:r}=Gx(i),{currentSlide:l,currentIndex:c}=Ca();if(!c3())return null;if(s.buttonShare)return F.createElement(F.Fragment,null,s.buttonShare());const f=l&&(typeof l.share=="object"&&l.share||typeof l.share=="string"&&{url:l.share}||Xr(l)&&{url:l.src})||void 0,d=r?(l==null?void 0:l.share)!==!1:f&&navigator.canShare(f),m=()=>{f&&navigator.share(f).catch(()=>{})},p=()=>{var g;l&&((r||m)({slide:l}),(g=e.share)===null||g===void 0||g.call(e,{index:c}))};return F.createElement(ll,{label:"Share",icon:u3,renderIcon:s.iconShare,disabled:!d,onClick:p})}function d3({augment:s}){s(({toolbar:e,share:i,...r})=>({toolbar:xp(e,"share",F.createElement(f3,null)),share:Gx(i),...r}))}const h3={minZoom:1,maxZoomPixelRatio:1,zoomInMultiplier:2,doubleTapDelay:300,doubleClickDelay:500,doubleClickMaxStops:2,keyboardMoveDistance:50,wheelZoomDistanceFactor:100,pinchZoomDistanceFactor:100,pinchZoomV4:!1,scrollToZoom:!1};function p3(s){return Math.min(Math.max(s,Number.EPSILON),1)}function kx(s){const{minZoom:e,...i}={...h3,...s};return{minZoom:p3(e),...i}}function m3(s,e,i,r){const l=F.useRef(void 0),c=F.useRef(void 0),{zoom:f}=Zn().animation,d=Sp(),m=Lt(()=>{var p,g,_;if((p=l.current)===null||p===void 0||p.cancel(),l.current=void 0,c.current&&(r!=null&&r.current)){try{l.current=(_=(g=r.current).animate)===null||_===void 0?void 0:_.call(g,[{transform:c.current},{transform:`scale(${s}) translateX(${e}px) translateY(${i}px)`}],{duration:d?0:f??500,easing:l.current?"ease-out":"ease-in-out"})}catch(v){console.error(v)}c.current=void 0,l.current&&(l.current.onfinish=()=>{l.current=void 0})}});return wi(m,[s,e,i,m]),F.useCallback(()=>{c.current=r!=null&&r.current?window.getComputedStyle(r.current).transform:void 0},[r])}function g3(s,e){const{on:i}=Zn(),r=Lt(()=>{var l;e||(l=i.zoom)===null||l===void 0||l.call(i,{zoom:s})});F.useEffect(r,[s,r])}function pu(){const{zoom:s}=Zn();return kx(s)}function _3(s,e){var i,r;let l={width:0,height:0},c={width:0,height:0};const{currentSlide:f}=Ca(),{imageFit:d}=Zn().carousel,{maxZoomPixelRatio:m}=pu();if(s&&f){const g={...f,...e};if(Xr(g)){const _=_p(g,d),v=Math.max(...(((i=g.srcSet)===null||i===void 0?void 0:i.map(y=>y.width))||[]).concat(g.width?[g.width]:[])),S=Math.max(...(((r=g.srcSet)===null||r===void 0?void 0:r.map(y=>y.height))||[]).concat(g.height?[g.height]:[]));v>0&&S>0&&s.width>0&&s.height>0&&(c=_?{width:Math.round(Math.min(v,s.width/s.height*S)),height:Math.round(Math.min(S,s.height/s.width*v))}:{width:v,height:S},c={width:c.width*m,height:c.height*m},l=_?{width:Math.min(s.width,c.width,v),height:Math.min(s.height,c.height,S)}:{width:Math.round(Math.min(s.width,s.height/S*v,v)),height:Math.round(Math.min(s.height,s.width/v*S,S))})}}const p=l.width?Math.max(gp(c.width/l.width,5),1):1;return{imageRect:l,maxZoom:p}}function bv(s,e){return Math.hypot(s.clientX-e.clientX,s.clientY-e.clientY)}function Tv(s,e,i=100,r=2){return s*Math.min(1+Math.abs(e/i),r)**Math.sign(e)}function v3(s,e,i,r,l,c,f,d,m){const p=F.useRef([]),g=F.useRef(0),_=F.useRef(void 0),{globalIndex:v}=Ca(),{getOwnerWindow:S}=ol(),{containerRef:y,subscribeSensors:T}=wa(),{keyboardMoveDistance:M,zoomInMultiplier:x,wheelZoomDistanceFactor:O,scrollToZoom:C,doubleTapDelay:P,doubleClickDelay:L,doubleClickMaxStops:z,pinchZoomDistanceFactor:N,pinchZoomV4:Z}=pu(),A=F.useCallback(k=>{if(y.current){const{pageX:de,pageY:U}=k,{scrollX:Y,scrollY:re}=S(),{left:pe,top:Re,width:He,height:te}=y.current.getBoundingClientRect();return[de-pe-Y-He/2,U-Re-re-te/2]}return[]},[y,S]),D=Lt(k=>{const{key:de,metaKey:U,ctrlKey:Y}=k,re=U||Y,pe=()=>{k.preventDefault(),k.stopPropagation()};if(s>1){const Re=(He,te)=>{pe(),d(He,te)};de==="ArrowDown"?Re(0,M):de==="ArrowUp"?Re(0,-M):de==="ArrowLeft"?Re(-M,0):de==="ArrowRight"&&Re(M,0)}de==="+"||re&&de==="="?(pe(),l()):de==="-"||re&&de==="_"?(pe(),c()):re&&de==="0"&&(pe(),f(1))}),H=Lt(k=>{if((k.ctrlKey||C)&&Math.abs(k.deltaY)>Math.abs(k.deltaX)){k.stopPropagation(),f(Tv(s,-k.deltaY,O),!0,...A(k));return}s>1&&(k.stopPropagation(),C||d(k.deltaX,k.deltaY))}),j=F.useCallback(k=>{const de=p.current;de.splice(0,de.length,...de.filter(U=>U.pointerId!==k.pointerId))},[]),q=F.useCallback(k=>{j(k),k.persist(),p.current.push(k)},[j]),ae=Lt(k=>{var de;const U=p.current;if(k.pointerType==="mouse"&&k.buttons>1||!(!((de=m==null?void 0:m.current)===null||de===void 0)&&de.contains(k.target)))return;s>1&&k.stopPropagation();const{timeStamp:Y}=k;if(U.length===0&&Y-g.current<(k.pointerType==="touch"?P:L)){g.current=0;const re=s>=1?s!==i?s*Math.max(i**(1/z),x):1:s!==e?s/Math.max(e**(-1/z),x):1;f(re,!1,...A(k))}else g.current=Y;if(q(k),U.length===2){const re=bv(U[0],U[1]);_.current={previousDistance:re,initialDistance:Math.max(re,1),initialZoom:s}}}),ee=Lt(k=>{const de=p.current,U=de.find(Y=>Y.pointerId===k.pointerId);if(de.length===2&&_.current){k.stopPropagation(),q(k);const Y=bv(de[0],de[1]),re=Z?_.current.initialZoom/_.current.initialDistance*Y:Tv(s,Y-_.current.previousDistance,N);f(re,!0,...de.map(pe=>A(pe)).reduce((pe,Re)=>Re.map((He,te)=>pe[te]+He/2))),_.current.previousDistance=Y;return}s>1&&(k.stopPropagation(),U&&(de.length===1&&d((U.clientX-k.clientX)/s,(U.clientY-k.clientY)/s),q(k)))}),B=F.useCallback(k=>{const de=p.current;de.length===2&&de.find(U=>U.pointerId===k.pointerId)&&(_.current=void 0),j(k)},[j]),V=F.useCallback(()=>{const k=p.current;k.splice(0,k.length),g.current=0,_.current=void 0},[]);nx(T,ae,ee,B,r),F.useEffect(V,[v,V]),F.useEffect(()=>r?()=>{}:su(V,T(dp,D),T(hp,H)),[r,T,V,D,H])}function x3(s,e,i){const[r,l]=F.useState(1),[c,f]=F.useState(0),[d,m]=F.useState(0),p=m3(r,c,d,i),{currentSlide:g,globalIndex:_}=Ca(),{containerRect:v,slideRect:S}=wa(),{minZoom:y,zoomInMultiplier:T}=pu(),M=g&&Xr(g)?g.src:void 0,x=!M||!(i!=null&&i.current);wi(()=>{l(1),f(0),m(0)},[_,M]);const O=F.useCallback((N,Z,A)=>{const D=A||r,H=c-(N||0),j=d-(Z||0),q=(s.width*D-S.width)/2/D,ae=(s.height*D-S.height)/2/D;f(Math.min(Math.abs(H),Math.max(q,0))*Math.sign(H)),m(Math.min(Math.abs(j),Math.max(ae,0))*Math.sign(j))},[r,c,d,S,s.width,s.height]),C=F.useCallback((N,Z,A,D)=>{const H=gp(N+.01<e?N-.01>y?N:y:e,5);Z||p(),O(A?A*(1/r-1/H):0,D?D*(1/r-1/H):0,H),l(H)},[r,y,e,O,p]),P=Lt(()=>{r>1&&(r>e&&C(e,!0),O())});wi(P,[v.width,v.height,P]);const L=F.useCallback(()=>{const N=r*T;C(r<1&&N>1?1:N)},[r,T,C]),z=F.useCallback(()=>{const N=r/T;C(r>1&&N<1?1:N)},[r,T,C]);return{zoom:r,offsetX:c,offsetY:d,disabled:x,changeOffsets:O,changeZoom:C,zoomIn:L,zoomOut:z}}const Xx=F.createContext(null),Op=Zi("useZoom","ZoomControllerContext",Xx);function S3({children:s}){const[e,i]=F.useState(),{slideRect:r}=wa(),{ref:l,minZoom:c}=pu(),{imageRect:f,maxZoom:d}=_3(r,e==null?void 0:e.imageDimensions),{zoom:m,offsetX:p,offsetY:g,disabled:_,changeZoom:v,changeOffsets:S,zoomIn:y,zoomOut:T}=x3(f,d,e==null?void 0:e.zoomWrapperRef);g3(m,_),v3(m,c,d,_,y,T,v,S,e==null?void 0:e.zoomWrapperRef);const M=F.useMemo(()=>({zoom:m,minZoom:c,maxZoom:d,offsetX:p,offsetY:g,disabled:_,zoomIn:y,zoomOut:T,changeZoom:v}),[m,c,d,p,g,_,y,T,v]);F.useImperativeHandle(l,()=>M,[M]);const x=F.useMemo(()=>({...M,setZoomWrapper:i}),[M,i]);return F.createElement(Xx.Provider,{value:x},s)}const M3=ji("ZoomIn",F.createElement(F.Fragment,null,F.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),F.createElement("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"}))),E3=ji("ZoomOut",F.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"})),Av=F.forwardRef(function({zoomIn:e,onLoseFocus:i},r){const l=F.useRef(!1),c=F.useRef(!1),{zoom:f,minZoom:d,maxZoom:m,zoomIn:p,zoomOut:g,disabled:_}=Op(),{render:v}=Zn(),S=_||(e?f>=m:f<=d);return F.useEffect(()=>{S&&l.current&&c.current&&i(),S||(l.current=!0)},[S,i]),F.createElement(ll,{ref:r,disabled:S,label:e?"Zoom in":"Zoom out",icon:e?M3:E3,renderIcon:e?v.iconZoomIn:v.iconZoomOut,onClick:e?p:g,onFocus:()=>{c.current=!0},onBlur:()=>{c.current=!1}})});function y3(){const s=F.useRef(null),e=F.useRef(null),{focus:i}=wa(),r=F.useCallback(f=>{var d,m;!((d=f.current)===null||d===void 0)&&d.disabled?i():(m=f.current)===null||m===void 0||m.focus()},[i]),l=F.useCallback(()=>r(s),[r]),c=F.useCallback(()=>r(e),[r]);return F.createElement(F.Fragment,null,F.createElement(Av,{zoomIn:!0,ref:s,onLoseFocus:c}),F.createElement(Av,{ref:e,onLoseFocus:l}))}function b3(){const{render:s}=Zn(),e=Op();return s.buttonZoom?F.createElement(F.Fragment,null,s.buttonZoom(e)):F.createElement(y3,null)}function T3(s){var e;return(((e=s.srcSet)===null||e===void 0?void 0:e.length)||0)>0}function A3({current:s,preload:e},{type:i,source:r}){switch(i){case"fetch":return s?{current:s,preload:r}:{current:r};case"done":return r===e?{current:r}:{current:s,preload:e};default:throw new Error(Gv)}}function R3(s){var e,i;const[{current:r,preload:l},c]=F.useReducer(A3,{}),{slide:f,rect:d,imageFit:m,render:p,interactive:g}=s,_=f.srcSet.sort((L,z)=>L.width-z.width),v=(e=f.width)!==null&&e!==void 0?e:_[_.length-1].width,S=(i=f.height)!==null&&i!==void 0?i:_[_.length-1].height,y=_p(f,m),T=Math.max(..._.map(L=>L.width)),M=Math.min((y?Math.max:Math.min)(d.width,v*(d.height/S)),T),x=kE(),O=Lt(()=>{var L;const z=(L=_.find(N=>N.width>=M*x))!==null&&L!==void 0?L:_[_.length-1];(!r||_.findIndex(N=>N.src===r)<_.findIndex(N=>N===z))&&c({type:"fetch",source:z.src})});wi(O,[d.width,d.height,x,O]);const C=Lt(L=>c({type:"done",source:L})),P={WebkitTransform:g?"initial":"translateZ(0)"};return y||Object.assign(P,d.width/d.height<v/S?{width:"100%",height:"auto"}:{width:"auto",height:"100%"}),F.createElement(F.Fragment,null,l&&l!==r&&F.createElement(nu,{key:"preload",...s,offset:void 0,slide:{...f,src:l,srcSet:void 0},style:{position:"absolute",visibility:"hidden",...P},onLoad:()=>C(l),render:{...p,iconLoading:()=>null,iconError:()=>null}}),r&&F.createElement(nu,{key:"current",...s,slide:{...f,src:r,srcSet:void 0},style:P}))}function C3({render:s,slide:e,offset:i,rect:r}){var l;const[c,f]=F.useState(),d=F.useRef(null),{zoom:m,maxZoom:p,offsetX:g,offsetY:_,setZoomWrapper:v}=Op(),S=m>1,{carousel:y,on:T}=Zn(),{currentIndex:M}=Ca();wi(()=>i===0?(v({zoomWrapperRef:d,imageDimensions:c}),()=>v(void 0)):()=>{},[i,c,v]);let x=(l=s.slide)===null||l===void 0?void 0:l.call(s,{slide:e,offset:i,rect:r,zoom:m,maxZoom:p});if(!x&&Xr(e)){const O={slide:e,offset:i,rect:r,render:s,imageFit:y.imageFit,imageProps:y.imageProps,onClick:i===0?()=>{var C;return(C=T.click)===null||C===void 0?void 0:C.call(T,{index:M})}:void 0};x=T3(e)?F.createElement(R3,{...O,slide:e,interactive:S,rect:i===0?{width:r.width*m,height:r.height*m}:r}):F.createElement(nu,{onLoad:C=>f({width:C.naturalWidth,height:C.naturalHeight}),...O})}return x?F.createElement("div",{ref:d,className:Ci(xt(Nv),xt(up),xt(Pv),S&&xt(OE)),style:i===0?{transform:`scale(${m}) translateX(${g}px) translateY(${_}px)`}:void 0},x):null}const w3=({augment:s,addModule:e})=>{s(({zoom:i,toolbar:r,render:l,controller:c,...f})=>{const d=kx(i);return{zoom:d,toolbar:xp(r,g_,F.createElement(b3,null)),render:{...l,slide:m=>{var p;return Xr(m.slide)?F.createElement(C3,{render:l,...m}):(p=l.slide)===null||p===void 0?void 0:p.call(l,m)}},controller:{...c,preventDefaultWheelY:d.scrollToZoom},...f}}),e(Ra(g_,S3))};function D3(){const[s,e]=F.useState(-1),i=[{src:"./website/1.jpeg",width:1280,height:853},{src:"./website/2.jpeg",width:1280,height:853},{src:"./website/3.jpeg",width:853,height:1280},{src:"./website/4.jpeg",width:1280,height:853},{src:"./website/5.jpeg",width:853,height:1280},{src:"./website/6.jpeg",width:1280,height:853},{src:"./website/7.jpeg",width:853,height:1280},{src:"./website/8.jpeg",width:853,height:1280},{src:"./website/9.jpeg",width:853,height:1280},{src:"./website/10.jpeg",width:853,height:1280},{src:"./website/11.jpeg",width:853,height:1280},{src:"./website/12.jpeg",width:1280,height:853},{src:"./website/1.jpeg",width:1280,height:853},{src:"./website/2.jpeg",width:1280,height:853},{src:"./website/3.jpeg",width:853,height:1280},{src:"./website/4.jpeg",width:1280,height:853},{src:"./website/5.jpeg",width:853,height:1280},{src:"./website/6.jpeg",width:1280,height:853},{src:"./website/7.jpeg",width:853,height:1280},{src:"./website/8.jpeg",width:853,height:1280},{src:"./website/9.jpeg",width:853,height:1280},{src:"./website/10.jpeg",width:853,height:1280},{src:"./website/11.jpeg",width:853,height:1280},{src:"./website/12.jpeg",width:1280,height:853},{src:"./website/1.jpeg",width:1280,height:853},{src:"./website/2.jpeg",width:1280,height:853},{src:"./website/3.jpeg",width:853,height:1280},{src:"./website/4.jpeg",width:1280,height:853},{src:"./website/5.jpeg",width:853,height:1280},{src:"./website/6.jpeg",width:1280,height:853},{src:"./website/7.jpeg",width:853,height:1280},{src:"./website/8.jpeg",width:853,height:1280},{src:"./website/9.jpeg",width:853,height:1280},{src:"./website/10.jpeg",width:853,height:1280},{src:"./website/11.jpeg",width:853,height:1280},{src:"./website/12.jpeg",width:1280,height:853}];return Zt.jsxs(Zt.Fragment,{children:[Zt.jsx(e3,{rotation:0,speed:.2,scale:.9,frequency:1,warpStrength:1,mouseInfluence:1,parallax:0,transparent:!1}),Zt.jsx("div",{className:"nav-bar",children:Zt.jsxs("ul",{children:[Zt.jsx("li",{children:"Home"}),Zt.jsx("li",{children:"Contact"}),Zt.jsx("li",{children:"About"})]})}),Zt.jsxs("div",{className:"title-bar",children:[Zt.jsx("h1",{children:"Tyler Brodnicki"}),Zt.jsx("h2",{children:"Photographer"}),Zt.jsx("h3",{children:"Gallery"})]}),Zt.jsxs("div",{className:"content",children:[Zt.jsx(RE,{photos:i,spacing:15,rowConstraints:{singleRowMaxHeight:350},onClick:({index:r})=>e(r)}),Zt.jsx(By,{slides:[{src:"/1.jpeg"},{src:"/2.jpeg"},{src:"/3.jpeg"},{src:"/4.jpeg"},{src:"/5.jpeg"},{src:"/6.jpeg"},{src:"/7.jpeg"},{src:"/8.jpeg"},{src:"/9.jpeg"},{src:"/10.jpeg"},{src:"/11.jpeg"},{src:"/12.jpeg"}],open:s>=0,index:s,close:()=>e(-1),plugins:[o3,w3,d3]})]}),Zt.jsx("div",{className:"footer",children:Zt.jsx("p",{children:"© 2026 Tyler Brodnicki. All rights reserved."})})]})}eE.createRoot(document.getElementById("root")).render(Zt.jsx(F.StrictMode,{children:Zt.jsx(D3,{})}));
