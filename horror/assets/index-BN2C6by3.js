(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function tv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ch={exports:{}},Ho={};var G0;function Wy(){if(G0)return Ho;G0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var V0;function qy(){return V0||(V0=1,ch.exports=Wy()),ch.exports}var de=qy(),uh={exports:{}},lt={};var k0;function Yy(){if(k0)return lt;k0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||E}x.prototype.isReactComponent={},x.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=x.prototype;function P(U,ne,_e){this.props=U,this.context=ne,this.refs=M,this.updater=_e||E}var N=P.prototype=new O;N.constructor=P,w(N,x.prototype),N.isPureReactComponent=!0;var z=Array.isArray;function G(){}var I={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function R(U,ne,_e){var Le=_e.ref;return{$$typeof:o,type:U,key:ne,ref:Le!==void 0?Le:null,props:_e}}function C(U,ne){return R(U.type,ne,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function re(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(_e){return ne[_e]})}var K=/\/+/g;function pe(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?re(""+U.key):ne.toString(36)}function ue(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(G,G):(U.status="pending",U.then(function(ne){U.status==="pending"&&(U.status="fulfilled",U.value=ne)},function(ne){U.status==="pending"&&(U.status="rejected",U.reason=ne)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function L(U,ne,_e,Le,Ve){var te=typeof U;(te==="undefined"||te==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch(te){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case o:case e:ce=!0;break;case _:return ce=U._init,L(ce(U._payload),ne,_e,Le,Ve)}}if(ce)return Ve=Ve(U),ce=Le===""?"."+pe(U,0):Le,z(Ve)?(_e="",ce!=null&&(_e=ce.replace(K,"$&/")+"/"),L(Ve,ne,_e,"",function(Ge){return Ge})):Ve!=null&&(V(Ve)&&(Ve=C(Ve,_e+(Ve.key==null||U&&U.key===Ve.key?"":(""+Ve.key).replace(K,"$&/")+"/")+ce)),ne.push(Ve)),1;ce=0;var Ue=Le===""?".":Le+":";if(z(U))for(var De=0;De<U.length;De++)Le=U[De],te=Ue+pe(Le,De),ce+=L(Le,ne,_e,te,Ve);else if(De=S(U),typeof De=="function")for(U=De.call(U),De=0;!(Le=U.next()).done;)Le=Le.value,te=Ue+pe(Le,De++),ce+=L(Le,ne,_e,te,Ve);else if(te==="object"){if(typeof U.then=="function")return L(ue(U),ne,_e,Le,Ve);throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return ce}function H(U,ne,_e){if(U==null)return U;var Le=[],Ve=0;return L(U,Le,"","",function(te){return ne.call(_e,te,Ve++)}),Le}function ee(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(_e){(U._status===0||U._status===-1)&&(U._status=1,U._result=_e)},function(_e){(U._status===0||U._status===-1)&&(U._status=2,U._result=_e)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},xe={map:H,forEach:function(U,ne,_e){H(U,function(){ne.apply(this,arguments)},_e)},count:function(U){var ne=0;return H(U,function(){ne++}),ne},toArray:function(U){return H(U,function(ne){return ne})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return lt.Activity=g,lt.Children=xe,lt.Component=x,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=P,lt.StrictMode=r,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,lt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return I.H.useMemoCache(U)}},lt.cache=function(U){return function(){return U.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(U,ne,_e){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Le=w({},U.props),Ve=U.key;if(ne!=null)for(te in ne.key!==void 0&&(Ve=""+ne.key),ne)!Z.call(ne,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ne.ref===void 0||(Le[te]=ne[te]);var te=arguments.length-2;if(te===1)Le.children=_e;else if(1<te){for(var ce=Array(te),Ue=0;Ue<te;Ue++)ce[Ue]=arguments[Ue+2];Le.children=ce}return R(U.type,Ve,Le)},lt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},lt.createElement=function(U,ne,_e){var Le,Ve={},te=null;if(ne!=null)for(Le in ne.key!==void 0&&(te=""+ne.key),ne)Z.call(ne,Le)&&Le!=="key"&&Le!=="__self"&&Le!=="__source"&&(Ve[Le]=ne[Le]);var ce=arguments.length-2;if(ce===1)Ve.children=_e;else if(1<ce){for(var Ue=Array(ce),De=0;De<ce;De++)Ue[De]=arguments[De+2];Ve.children=Ue}if(U&&U.defaultProps)for(Le in ce=U.defaultProps,ce)Ve[Le]===void 0&&(Ve[Le]=ce[Le]);return R(U,te,Ve)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(U){return{$$typeof:d,render:U}},lt.isValidElement=V,lt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ee}},lt.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},lt.startTransition=function(U){var ne=I.T,_e={};I.T=_e;try{var Le=U(),Ve=I.S;Ve!==null&&Ve(_e,Le),typeof Le=="object"&&Le!==null&&typeof Le.then=="function"&&Le.then(G,Me)}catch(te){Me(te)}finally{ne!==null&&_e.types!==null&&(ne.types=_e.types),I.T=ne}},lt.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},lt.use=function(U){return I.H.use(U)},lt.useActionState=function(U,ne,_e){return I.H.useActionState(U,ne,_e)},lt.useCallback=function(U,ne){return I.H.useCallback(U,ne)},lt.useContext=function(U){return I.H.useContext(U)},lt.useDebugValue=function(){},lt.useDeferredValue=function(U,ne){return I.H.useDeferredValue(U,ne)},lt.useEffect=function(U,ne){return I.H.useEffect(U,ne)},lt.useEffectEvent=function(U){return I.H.useEffectEvent(U)},lt.useId=function(){return I.H.useId()},lt.useImperativeHandle=function(U,ne,_e){return I.H.useImperativeHandle(U,ne,_e)},lt.useInsertionEffect=function(U,ne){return I.H.useInsertionEffect(U,ne)},lt.useLayoutEffect=function(U,ne){return I.H.useLayoutEffect(U,ne)},lt.useMemo=function(U,ne){return I.H.useMemo(U,ne)},lt.useOptimistic=function(U,ne){return I.H.useOptimistic(U,ne)},lt.useReducer=function(U,ne,_e){return I.H.useReducer(U,ne,_e)},lt.useRef=function(U){return I.H.useRef(U)},lt.useState=function(U){return I.H.useState(U)},lt.useSyncExternalStore=function(U,ne,_e){return I.H.useSyncExternalStore(U,ne,_e)},lt.useTransition=function(){return I.H.useTransition()},lt.version="19.2.3",lt}var X0;function Xd(){return X0||(X0=1,uh.exports=Yy()),uh.exports}var Tt=Xd();const jy=tv(Tt);var fh={exports:{}},Go={},hh={exports:{}},dh={};var W0;function Zy(){return W0||(W0=1,(function(o){function e(L,H){var ee=L.length;L.push(H);e:for(;0<ee;){var Me=ee-1>>>1,xe=L[Me];if(0<l(xe,H))L[Me]=H,L[ee]=xe,ee=Me;else break e}}function i(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var H=L[0],ee=L.pop();if(ee!==H){L[0]=ee;e:for(var Me=0,xe=L.length,U=xe>>>1;Me<U;){var ne=2*(Me+1)-1,_e=L[ne],Le=ne+1,Ve=L[Le];if(0>l(_e,ee))Le<xe&&0>l(Ve,_e)?(L[Me]=Ve,L[Le]=ee,Me=Le):(L[Me]=_e,L[ne]=ee,Me=ne);else if(Le<xe&&0>l(Ve,ee))L[Me]=Ve,L[Le]=ee,Me=Le;else break e}}return H}function l(L,H){var ee=L.sortIndex-H.sortIndex;return ee!==0?ee:L.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,E=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function N(L){for(var H=i(p);H!==null;){if(H.callback===null)r(p);else if(H.startTime<=L)r(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function z(L){if(w=!1,N(L),!E)if(i(m)!==null)E=!0,G||(G=!0,re());else{var H=i(p);H!==null&&ue(z,H.startTime-L)}}var G=!1,I=-1,Z=5,R=-1;function C(){return M?!0:!(o.unstable_now()-R<Z)}function V(){if(M=!1,G){var L=o.unstable_now();R=L;var H=!0;try{e:{E=!1,w&&(w=!1,O(I),I=-1),S=!0;var ee=y;try{t:{for(N(L),g=i(m);g!==null&&!(g.expirationTime>L&&C());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,y=g.priorityLevel;var xe=Me(g.expirationTime<=L);if(L=o.unstable_now(),typeof xe=="function"){g.callback=xe,N(L),H=!0;break t}g===i(m)&&r(m),N(L)}else r(m);g=i(m)}if(g!==null)H=!0;else{var U=i(p);U!==null&&ue(z,U.startTime-L),H=!1}}break e}finally{g=null,y=ee,S=!1}H=void 0}}finally{H?re():G=!1}}}var re;if(typeof P=="function")re=function(){P(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,pe=K.port2;K.port1.onmessage=V,re=function(){pe.postMessage(null)}}else re=function(){x(V,0)};function ue(L,H){I=x(function(){L(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(L){L.callback=null},o.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<L?Math.floor(1e3/L):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(L){switch(y){case 1:case 2:case 3:var H=3;break;default:H=y}var ee=y;y=H;try{return L()}finally{y=ee}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var ee=y;y=L;try{return H()}finally{y=ee}},o.unstable_scheduleCallback=function(L,H,ee){var Me=o.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Me+ee:Me):ee=Me,L){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=ee+xe,L={id:_++,callback:H,priorityLevel:L,startTime:ee,expirationTime:xe,sortIndex:-1},ee>Me?(L.sortIndex=ee,e(p,L),i(m)===null&&L===i(p)&&(w?(O(I),I=-1):w=!0,ue(z,ee-Me))):(L.sortIndex=xe,e(m,L),E||S||(E=!0,G||(G=!0,re()))),L},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(L){var H=y;return function(){var ee=y;y=H;try{return L.apply(this,arguments)}finally{y=ee}}}})(dh)),dh}var q0;function Ky(){return q0||(q0=1,hh.exports=Zy()),hh.exports}var ph={exports:{}},Nn={};var Y0;function Qy(){if(Y0)return Nn;Y0=1;var o=Xd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Nn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Nn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Nn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Nn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Nn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Nn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Nn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Nn.requestFormReset=function(m){r.d.r(m)},Nn.unstable_batchedUpdates=function(m,p){return m(p)},Nn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Nn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Nn.version="19.2.3",Nn}var j0;function Jy(){if(j0)return ph.exports;j0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ph.exports=Qy(),ph.exports}var Z0;function $y(){if(Z0)return Go;Z0=1;var o=Ky(),e=Xd(),i=Jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case G:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case I:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var ue=Array.isArray,L=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Me=[],xe=-1;function U(t){return{current:t}}function ne(t){0>xe||(t.current=Me[xe],Me[xe]=null,xe--)}function _e(t,n){xe++,Me[xe]=t.current,t.current=n}var Le=U(null),Ve=U(null),te=U(null),ce=U(null);function Ue(t,n){switch(_e(te,n),_e(Ve,t),_e(Le,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?u0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=u0(n),t=f0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ne(Le),_e(Le,t)}function De(){ne(Le),ne(Ve),ne(te)}function Ge(t){t.memoizedState!==null&&_e(ce,t);var n=Le.current,a=f0(n,t.type);n!==a&&(_e(Ve,t),_e(Le,a))}function ut(t){Ve.current===t&&(ne(Le),ne(Ve)),ce.current===t&&(ne(ce),Po._currentValue=ee)}var jt,pt;function it(t){if(jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+jt+t+pt}var Rt=!1;function at(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(oe){var ae=oe}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(oe){ae=oe}t.call(ye.prototype)}}else{try{throw Error()}catch(oe){ae=oe}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(oe){if(oe&&ae&&typeof oe.stack=="string")return[oe.stack,ae.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var F=v.split(`
`),J=T.split(`
`);for(u=s=0;s<F.length&&!F[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===F.length||u===J.length)for(s=F.length-1,u=J.length-1;1<=s&&0<=u&&F[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(F[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||F[s]!==J[u]){var he=`
`+F[s].replace(" at new "," at ");return t.displayName&&he.includes("<anonymous>")&&(he=he.replace("<anonymous>",t.displayName)),he}while(1<=s&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?it(a):""}function Nt(t,n){switch(t.tag){case 26:case 27:case 5:return it(t.type);case 16:return it("Lazy");case 13:return t.child!==n&&n!==null?it("Suspense Fallback"):it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return it("Activity");default:return""}}function B(t){try{var n="",a=null;do n+=Nt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var qt=Object.prototype.hasOwnProperty,mt=o.unstable_scheduleCallback,Mt=o.unstable_cancelCallback,Xe=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,fe=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,le=o.unstable_NormalPriority,Ye=o.unstable_LowPriority,Ie=o.unstable_IdlePriority,Ce=o.log,ze=o.unstable_setDisableYieldValue,me=null,Ee=null;function ve(t){if(typeof Ce=="function"&&ze(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(me,t)}catch{}}var we=Math.clz32?Math.clz32:k,Ae=Math.log,$e=Math.LN2;function k(t){return t>>>=0,t===0?32:31-(Ae(t)/$e|0)|0}var Ne=256,Re=262144,Pe=4194304;function Te(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Se(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=Te(s):(v&=T,v!==0?u=Te(v):a||(a=T&~t,a!==0&&(u=Te(a))))):(T=s&~f,T!==0?u=Te(T):v!==0?u=Te(v):a||(a=s&~t,a!==0&&(u=Te(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Oe(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function rt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var t=Pe;return Pe<<=1,(Pe&62914560)===0&&(Pe=4194304),t}function wt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Un(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,J=t.hiddenUpdates;for(a=v&~a;0<a;){var he=31-we(a),ye=1<<he;T[he]=0,F[he]=-1;var ae=J[he];if(ae!==null)for(J[he]=null,he=0;he<ae.length;he++){var oe=ae[he];oe!==null&&(oe.lane&=-536870913)}a&=~ye}s!==0&&fl(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function fl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-we(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ys(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-we(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Lr(t,n){var a=n&-n;return a=(a&42)!==0?1:js(a),(a&(t.suspendedLanes|n))!==0?0:a}function js(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Or(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Zs(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:O0(t.type))}function Ni(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ri=Math.random().toString(36).slice(2),on="__reactFiber$"+ri,yn="__reactProps$"+ri,yi="__reactContainer$"+ri,Ir="__reactEvents$"+ri,Pr="__reactListeners$"+ri,hl="__reactHandles$"+ri,Ks="__reactResources$"+ri,ir="__reactMarker$"+ri;function Qs(t){delete t[on],delete t[yn],delete t[Ir],delete t[Pr],delete t[hl]}function Ma(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=v0(t);t!==null;){if(a=t[on])return a;t=v0(t)}return n}t=a,a=t.parentNode}return null}function ba(t){if(t=t[on]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ar(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ea(t){var n=t[Ks];return n||(n=t[Ks]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[ir]=!0}var q=new Set,se={};function ie(t,n){j(t,n),j(t+"Capture",n)}function j(t,n){for(se[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ke={},Be={};function We(t){return qt.call(Be,t)?!0:qt.call(ke,t)?!1:Fe.test(t)?Be[t]=!0:(ke[t]=!0,!1)}function je(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function et(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function tt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Zt(t){if(!t._valueTracker){var n=Lt(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Lt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function st(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+tt(n)):t.value!==""+tt(n)&&(t.value=""+tt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Mn(t,v,tt(n)):a!=null?Mn(t,v,tt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+tt(T):t.removeAttribute("name")}function qi(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Zt(t);return}a=a!=null?""+tt(a):"",n=n!=null?""+tt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),Zt(t)}function Mn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function si(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+tt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Ft(t,n,a){if(n!=null&&(n=""+tt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+tt(a):""}function bn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ue(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=tt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Zt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Tn(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function zr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Tn(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Tn(t,f,n[f])}function Si(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(t){return Vv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yi(){}var ru=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fr=null,Br=null;function cp(t){var n=ba(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Sn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[yn]||null;if(!u)throw Error(r(90));Sn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Pt(s)}break e;case"textarea":Ft(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&si(t,!!a.multiple,n,!1)}}}var ou=!1;function up(t,n,a){if(ou)return t(n,a);ou=!0;try{var s=t(n);return s}finally{if(ou=!1,(Fr!==null||Br!==null)&&(ec(),Fr&&(n=Fr,t=Br,Br=Fr=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function Js(t,n){var a=t.stateNode;if(a===null)return null;var s=a[yn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if(ji)try{var $s={};Object.defineProperty($s,"passive",{get:function(){lu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{lu=!1}var Ta=null,cu=null,pl=null;function fp(){if(pl)return pl;var t,n=cu,a=n.length,s,u="value"in Ta?Ta.value:Ta.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return pl=u.slice(t,1<s?1-s:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function hp(){return!1}function Hn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gl:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=Hn(rr),eo=g({},rr,{view:0,detail:0}),kv=Hn(eo),uu,fu,to,vl=g({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(uu=t.screenX-to.screenX,fu=t.screenY-to.screenY):fu=uu=0,to=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),dp=Hn(vl),Xv=g({},vl,{dataTransfer:0}),Wv=Hn(Xv),qv=g({},eo,{relatedTarget:0}),hu=Hn(qv),Yv=g({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Hn(Yv),Zv=g({},rr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kv=Hn(Zv),Qv=g({},rr,{data:0}),pp=Hn(Qv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ex[t])?!!n[t]:!1}function du(){return tx}var nx=g({},eo,{key:function(t){if(t.key){var n=Jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Hn(nx),ax=g({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Hn(ax),rx=g({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),sx=Hn(rx),ox=g({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Hn(ox),cx=g({},vl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Hn(cx),fx=g({},rr,{newState:0,oldState:0}),hx=Hn(fx),dx=[9,13,27,32],pu=ji&&"CompositionEvent"in window,no=null;ji&&"documentMode"in document&&(no=document.documentMode);var px=ji&&"TextEvent"in window&&!no,gp=ji&&(!pu||no&&8<no&&11>=no),_p=" ",vp=!1;function xp(t,n){switch(t){case"keyup":return dx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function mx(t,n){switch(t){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return t=n.data,t===_p&&vp?null:t;default:return null}}function gx(t,n){if(Hr)return t==="compositionend"||!pu&&xp(t,n)?(t=fp(),pl=cu=Ta=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var _x={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!_x[t.type]:n==="textarea"}function Mp(t,n,a,s){Fr?Br?Br.push(s):Br=[s]:Fr=s,n=oc(n,"onChange"),0<n.length&&(a=new _l("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var io=null,ao=null;function vx(t){a0(t,0)}function xl(t){var n=ar(t);if(Pt(n))return t}function bp(t,n){if(t==="change")return n}var Ep=!1;if(ji){var mu;if(ji){var gu="oninput"in document;if(!gu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),gu=typeof Tp.oninput=="function"}mu=gu}else mu=!1;Ep=mu&&(!document.documentMode||9<document.documentMode)}function Ap(){io&&(io.detachEvent("onpropertychange",Rp),ao=io=null)}function Rp(t){if(t.propertyName==="value"&&xl(ao)){var n=[];Mp(n,ao,t,su(t)),up(vx,n)}}function xx(t,n,a){t==="focusin"?(Ap(),io=n,ao=a,io.attachEvent("onpropertychange",Rp)):t==="focusout"&&Ap()}function yx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(ao)}function Sx(t,n){if(t==="click")return xl(n)}function Mx(t,n){if(t==="input"||t==="change")return xl(n)}function bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var jn=typeof Object.is=="function"?Object.is:bx;function ro(t,n){if(jn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!qt.call(n,u)||!jn(t[u],n[u]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=wp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function _u(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ex=ji&&"documentMode"in document&&11>=document.documentMode,Gr=null,vu=null,so=null,xu=!1;function Np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xu||Gr==null||Gr!==Qe(s)||(s=Gr,"selectionStart"in s&&_u(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),so&&ro(so,s)||(so=s,s=oc(vu,"onSelect"),0<s.length&&(n=new _l("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Gr)))}function sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Vr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},yu={},Lp={};ji&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function or(t){if(yu[t])return yu[t];if(!Vr[t])return t;var n=Vr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return yu[t]=n[a];return t}var Op=or("animationend"),Ip=or("animationiteration"),Pp=or("animationstart"),Tx=or("transitionrun"),Ax=or("transitionstart"),Rx=or("transitioncancel"),zp=or("transitionend"),Fp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Mi(t,n){Fp.set(t,n),ie(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],kr=0,Mu=0;function Sl(){for(var t=kr,n=Mu=kr=0;n<t;){var a=oi[n];oi[n++]=null;var s=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Bp(a,u,f)}}function Ml(t,n,a,s){oi[kr++]=t,oi[kr++]=n,oi[kr++]=a,oi[kr++]=s,Mu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function bu(t,n,a,s){return Ml(t,n,a,s),bl(t)}function lr(t,n){return Ml(t,null,null,n),bl(t)}function Bp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-we(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function bl(t){if(50<Co)throw Co=0,Lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Xr={};function wx(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,s){return new wx(t,n,a,s)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zi(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function El(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Eu(t)&&(v=1);else if(typeof t=="string")v=Ly(t,a,Le.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case R:return t=Zn(31,a,n,u),t.elementType=R,t.lanes=f,t;case w:return cr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=Zn(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=Zn(13,a,n,u),t.elementType=z,t.lanes=f,t;case G:return t=Zn(19,a,n,u),t.elementType=G,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:v=10;break e;case O:v=9;break e;case N:v=11;break e;case I:v=14;break e;case Z:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Zn(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function cr(t,n,a,s){return t=Zn(7,t,s,n),t.lanes=a,t}function Tu(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Gp(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function Au(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vp=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:B(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:B(n)}}var Wr=[],qr=0,Tl=null,oo=0,ci=[],ui=0,Aa=null,Li=1,Oi="";function Ki(t,n){Wr[qr++]=oo,Wr[qr++]=Tl,Tl=t,oo=n}function kp(t,n,a){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Aa=t;var s=Li;t=Oi;var u=32-we(s)-1;s&=~(1<<u),a+=1;var f=32-we(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Li=1<<32-we(n)+u|a<<u|s,Oi=f+t}else Li=1<<f|a<<u|s,Oi=t}function Ru(t){t.return!==null&&(Ki(t,1),kp(t,1,0))}function wu(t){for(;t===Tl;)Tl=Wr[--qr],Wr[qr]=null,oo=Wr[--qr],Wr[qr]=null;for(;t===Aa;)Aa=ci[--ui],ci[ui]=null,Oi=ci[--ui],ci[ui]=null,Li=ci[--ui],ci[ui]=null}function Xp(t,n){ci[ui++]=Li,ci[ui++]=Oi,ci[ui++]=Aa,Li=n.id,Oi=n.overflow,Aa=t}var An=null,Kt=null,bt=!1,Ra=null,fi=!1,Cu=Error(r(519));function wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(li(n,t)),Cu}function Wp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[on]=t,n[yn]=s,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Uo.length;a++)vt(Uo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),qi(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),bn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||l0(n.textContent,a)?(s.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),s.onScroll!=null&&vt("scroll",n),s.onScrollEnd!=null&&vt("scrollend",n),s.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||wa(t,!0)}function qp(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:An=An.return}}function Yr(t){if(t!==An)return!1;if(!bt)return qp(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&Kt&&wa(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=_0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Kt=_0(t)}else n===27?(n=Kt,Va(t.type)?(t=$f,$f=null,Kt=t):Kt=n):Kt=An?di(t.stateNode.nextSibling):null;return!0}function ur(){Kt=An=null,bt=!1}function Du(){var t=Ra;return t!==null&&(Xn===null?Xn=t:Xn.push.apply(Xn,t),Ra=null),t}function lo(t){Ra===null?Ra=[t]:Ra.push(t)}var Uu=U(null),fr=null,Qi=null;function Ca(t,n,a){_e(Uu,n._currentValue),n._currentValue=a}function Ji(t){t._currentValue=Uu.current,ne(Uu)}function Nu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Lu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var F=0;F<n.length;F++)if(T.context===n[F]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Nu(f.return,a,t),s||(v=null);break e}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Nu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function jr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;jn(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===ce.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&Lu(n,t,a,s),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!jn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){fr=t,Qi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Rn(t){return Yp(fr,t)}function Rl(t,n){return fr===null&&hr(t),Yp(t,n)}function Yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(t===null)throw Error(r(308));Qi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Qi=Qi.next=n;return a}var Cx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Dx=o.unstable_scheduleCallback,Ux=o.unstable_NormalPriority,ln={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Cx,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&Dx(Ux,function(){t.controller.abort()})}var uo=null,Iu=0,Zr=0,Kr=null;function Nx(t,n){if(uo===null){var a=uo=[];Iu=0,Zr=Bf(),Kr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Iu++,n.then(jp,jp),n}function jp(){if(--Iu===0&&uo!==null){Kr!==null&&(Kr.status="fulfilled");var t=uo;uo=null,Zr=0,Kr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Lx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Zp=L.S;L.S=function(t,n){Ng=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Nx(t,n),Zp!==null&&Zp(t,n)};var dr=U(null);function Pu(){var t=dr.current;return t!==null?t:Yt.pooledCache}function wl(t,n){n===null?_e(dr,dr.current):_e(dr,n.pool)}function Kp(){var t=Pu();return t===null?null:{parent:ln._currentValue,pool:t}}var Qr=Error(r(460)),zu=Error(r(474)),Cl=Error(r(542)),Dl={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw mr=n,Qr}}function pr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mr=a,Qr):a}}var mr=null;function $p(){if(mr===null)throw Error(r(459));var t=mr;return mr=null,t}function em(t){if(t===Qr||t===Cl)throw Error(r(483))}var Jr=null,fo=0;function Ul(t){var n=fo;return fo+=1,Jr===null&&(Jr=[]),Jp(Jr,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Nl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(Y,X){if(t){var Q=Y.deletions;Q===null?(Y.deletions=[X],Y.flags|=16):Q.push(X)}}function a(Y,X){if(!t)return null;for(;X!==null;)n(Y,X),X=X.sibling;return null}function s(Y){for(var X=new Map;Y!==null;)Y.key!==null?X.set(Y.key,Y):X.set(Y.index,Y),Y=Y.sibling;return X}function u(Y,X){return Y=Zi(Y,X),Y.index=0,Y.sibling=null,Y}function f(Y,X,Q){return Y.index=Q,t?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<X?(Y.flags|=67108866,X):Q):(Y.flags|=67108866,X)):(Y.flags|=1048576,X)}function v(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,X,Q,ge){return X===null||X.tag!==6?(X=Tu(Q,Y.mode,ge),X.return=Y,X):(X=u(X,Q),X.return=Y,X)}function F(Y,X,Q,ge){var Je=Q.type;return Je===w?he(Y,X,Q.props.children,ge,Q.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&pr(Je)===X.type)?(X=u(X,Q.props),ho(X,Q),X.return=Y,X):(X=El(Q.type,Q.key,Q.props,null,Y.mode,ge),ho(X,Q),X.return=Y,X)}function J(Y,X,Q,ge){return X===null||X.tag!==4||X.stateNode.containerInfo!==Q.containerInfo||X.stateNode.implementation!==Q.implementation?(X=Au(Q,Y.mode,ge),X.return=Y,X):(X=u(X,Q.children||[]),X.return=Y,X)}function he(Y,X,Q,ge,Je){return X===null||X.tag!==7?(X=cr(Q,Y.mode,ge,Je),X.return=Y,X):(X=u(X,Q),X.return=Y,X)}function ye(Y,X,Q){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=Tu(""+X,Y.mode,Q),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return Q=El(X.type,X.key,X.props,null,Y.mode,Q),ho(Q,X),Q.return=Y,Q;case E:return X=Au(X,Y.mode,Q),X.return=Y,X;case Z:return X=pr(X),ye(Y,X,Q)}if(ue(X)||re(X))return X=cr(X,Y.mode,Q,null),X.return=Y,X;if(typeof X.then=="function")return ye(Y,Ul(X),Q);if(X.$$typeof===P)return ye(Y,Rl(Y,X),Q);Nl(Y,X)}return null}function ae(Y,X,Q,ge){var Je=X!==null?X.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:T(Y,X,""+Q,ge);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return Q.key===Je?F(Y,X,Q,ge):null;case E:return Q.key===Je?J(Y,X,Q,ge):null;case Z:return Q=pr(Q),ae(Y,X,Q,ge)}if(ue(Q)||re(Q))return Je!==null?null:he(Y,X,Q,ge,null);if(typeof Q.then=="function")return ae(Y,X,Ul(Q),ge);if(Q.$$typeof===P)return ae(Y,X,Rl(Y,Q),ge);Nl(Y,Q)}return null}function oe(Y,X,Q,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(Q)||null,T(X,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case S:return Y=Y.get(ge.key===null?Q:ge.key)||null,F(X,Y,ge,Je);case E:return Y=Y.get(ge.key===null?Q:ge.key)||null,J(X,Y,ge,Je);case Z:return ge=pr(ge),oe(Y,X,Q,ge,Je)}if(ue(ge)||re(ge))return Y=Y.get(Q)||null,he(X,Y,ge,Je,null);if(typeof ge.then=="function")return oe(Y,X,Q,Ul(ge),Je);if(ge.$$typeof===P)return oe(Y,X,Q,Rl(X,ge),Je);Nl(X,ge)}return null}function qe(Y,X,Q,ge){for(var Je=null,Dt=null,Ke=X,ft=X=0,yt=null;Ke!==null&&ft<Q.length;ft++){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Ut=ae(Y,Ke,Q[ft],ge);if(Ut===null){Ke===null&&(Ke=yt);break}t&&Ke&&Ut.alternate===null&&n(Y,Ke),X=f(Ut,X,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut,Ke=yt}if(ft===Q.length)return a(Y,Ke),bt&&Ki(Y,ft),Je;if(Ke===null){for(;ft<Q.length;ft++)Ke=ye(Y,Q[ft],ge),Ke!==null&&(X=f(Ke,X,ft),Dt===null?Je=Ke:Dt.sibling=Ke,Dt=Ke);return bt&&Ki(Y,ft),Je}for(Ke=s(Ke);ft<Q.length;ft++)yt=oe(Ke,Y,ft,Q[ft],ge),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?ft:yt.key),X=f(yt,X,ft),Dt===null?Je=yt:Dt.sibling=yt,Dt=yt);return t&&Ke.forEach(function(Ya){return n(Y,Ya)}),bt&&Ki(Y,ft),Je}function nt(Y,X,Q,ge){if(Q==null)throw Error(r(151));for(var Je=null,Dt=null,Ke=X,ft=X=0,yt=null,Ut=Q.next();Ke!==null&&!Ut.done;ft++,Ut=Q.next()){Ke.index>ft?(yt=Ke,Ke=null):yt=Ke.sibling;var Ya=ae(Y,Ke,Ut.value,ge);if(Ya===null){Ke===null&&(Ke=yt);break}t&&Ke&&Ya.alternate===null&&n(Y,Ke),X=f(Ya,X,ft),Dt===null?Je=Ya:Dt.sibling=Ya,Dt=Ya,Ke=yt}if(Ut.done)return a(Y,Ke),bt&&Ki(Y,ft),Je;if(Ke===null){for(;!Ut.done;ft++,Ut=Q.next())Ut=ye(Y,Ut.value,ge),Ut!==null&&(X=f(Ut,X,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return bt&&Ki(Y,ft),Je}for(Ke=s(Ke);!Ut.done;ft++,Ut=Q.next())Ut=oe(Ke,Y,ft,Ut.value,ge),Ut!==null&&(t&&Ut.alternate!==null&&Ke.delete(Ut.key===null?ft:Ut.key),X=f(Ut,X,ft),Dt===null?Je=Ut:Dt.sibling=Ut,Dt=Ut);return t&&Ke.forEach(function(Xy){return n(Y,Xy)}),bt&&Ki(Y,ft),Je}function Wt(Y,X,Q,ge){if(typeof Q=="object"&&Q!==null&&Q.type===w&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:e:{for(var Je=Q.key;X!==null;){if(X.key===Je){if(Je=Q.type,Je===w){if(X.tag===7){a(Y,X.sibling),ge=u(X,Q.props.children),ge.return=Y,Y=ge;break e}}else if(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===Z&&pr(Je)===X.type){a(Y,X.sibling),ge=u(X,Q.props),ho(ge,Q),ge.return=Y,Y=ge;break e}a(Y,X);break}else n(Y,X);X=X.sibling}Q.type===w?(ge=cr(Q.props.children,Y.mode,ge,Q.key),ge.return=Y,Y=ge):(ge=El(Q.type,Q.key,Q.props,null,Y.mode,ge),ho(ge,Q),ge.return=Y,Y=ge)}return v(Y);case E:e:{for(Je=Q.key;X!==null;){if(X.key===Je)if(X.tag===4&&X.stateNode.containerInfo===Q.containerInfo&&X.stateNode.implementation===Q.implementation){a(Y,X.sibling),ge=u(X,Q.children||[]),ge.return=Y,Y=ge;break e}else{a(Y,X);break}else n(Y,X);X=X.sibling}ge=Au(Q,Y.mode,ge),ge.return=Y,Y=ge}return v(Y);case Z:return Q=pr(Q),Wt(Y,X,Q,ge)}if(ue(Q))return qe(Y,X,Q,ge);if(re(Q)){if(Je=re(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),nt(Y,X,Q,ge)}if(typeof Q.then=="function")return Wt(Y,X,Ul(Q),ge);if(Q.$$typeof===P)return Wt(Y,X,Rl(Y,Q),ge);Nl(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,X!==null&&X.tag===6?(a(Y,X.sibling),ge=u(X,Q),ge.return=Y,Y=ge):(a(Y,X),ge=Tu(Q,Y.mode,ge),ge.return=Y,Y=ge),v(Y)):a(Y,X)}return function(Y,X,Q,ge){try{fo=0;var Je=Wt(Y,X,Q,ge);return Jr=null,Je}catch(Ke){if(Ke===Qr||Ke===Cl)throw Ke;var Dt=Zn(29,Ke,null,Y.mode);return Dt.lanes=ge,Dt.return=Y,Dt}}}var gr=tm(!0),nm=tm(!1),Da=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ua(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Na(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(It&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=bl(t),Bp(t,null,a),n}return Ml(t,s,n,a),bl(t)}function po(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ys(t,a)}}function Hu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Gu=!1;function mo(){if(Gu){var t=Kr;if(t!==null)throw t}}function go(t,n,a,s){Gu=!1;var u=t.updateQueue;Da=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var F=T,J=F.next;F.next=null,v===null?f=J:v.next=J,v=F;var he=t.alternate;he!==null&&(he=he.updateQueue,T=he.lastBaseUpdate,T!==v&&(T===null?he.firstBaseUpdate=J:T.next=J,he.lastBaseUpdate=F))}if(f!==null){var ye=u.baseState;v=0,he=J=F=null,T=f;do{var ae=T.lane&-536870913,oe=ae!==T.lane;if(oe?(xt&ae)===ae:(s&ae)===ae){ae!==0&&ae===Zr&&(Gu=!0),he!==null&&(he=he.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var qe=t,nt=T;ae=n;var Wt=a;switch(nt.tag){case 1:if(qe=nt.payload,typeof qe=="function"){ye=qe.call(Wt,ye,ae);break e}ye=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=nt.payload,ae=typeof qe=="function"?qe.call(Wt,ye,ae):qe,ae==null)break e;ye=g({},ye,ae);break e;case 2:Da=!0}}ae=T.callback,ae!==null&&(t.flags|=64,oe&&(t.flags|=8192),oe=u.callbacks,oe===null?u.callbacks=[ae]:oe.push(ae))}else oe={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},he===null?(J=he=oe,F=ye):he=he.next=oe,v|=ae;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;oe=T,T=oe.next,oe.next=null,u.lastBaseUpdate=oe,u.shared.pending=null}}while(!0);he===null&&(F=ye),u.baseState=F,u.firstBaseUpdate=J,u.lastBaseUpdate=he,f===null&&(u.shared.lanes=0),za|=v,t.lanes=v,t.memoizedState=ye}}function im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],n)}var $r=U(null),Ll=U(0);function rm(t,n){t=oa,_e(Ll,t),_e($r,n),oa=t|n.baseLanes}function Vu(){_e(Ll,oa),_e($r,$r.current)}function ku(){oa=Ll.current,ne($r),ne(Ll)}var Kn=U(null),hi=null;function La(t){var n=t.alternate;_e(rn,rn.current&1),_e(Kn,t),hi===null&&(n===null||$r.current!==null||n.memoizedState!==null)&&(hi=t)}function Xu(t){_e(rn,rn.current),_e(Kn,t),hi===null&&(hi=t)}function sm(t){t.tag===22?(_e(rn,rn.current),_e(Kn,t),hi===null&&(hi=t)):Oa()}function Oa(){_e(rn,rn.current),_e(Kn,Kn.current)}function Qn(t){ne(Kn),hi===t&&(hi=null),ne(rn)}var rn=U(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qf(a)||Jf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ct=null,kt=null,cn=null,Il=!1,es=!1,_r=!1,Pl=0,_o=0,ts=null,Ox=0;function tn(){throw Error(r(321))}function Wu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!jn(t[a],n[a]))return!1;return!0}function qu(t,n,a,s,u,f){return $i=f,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?km:lf,_r=!1,f=a(s,u),_r=!1,es&&(f=lm(n,a,s,u)),om(t),f}function om(t){L.H=yo;var n=kt!==null&&kt.next!==null;if($i=0,cn=kt=ct=null,Il=!1,_o=0,ts=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&Al(t)&&(un=!0))}function lm(t,n,a,s){ct=t;var u=0;do{if(es&&(ts=null),_o=0,es=!1,25<=u)throw Error(r(301));if(u+=1,cn=kt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}L.H=Xm,f=n(a,s)}while(es);return f}function Ix(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Yu(){var t=Pl!==0;return Pl=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Zu(t){if(Il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Il=!1}$i=0,cn=kt=ct=null,es=!1,_o=Pl=0,ts=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ct.memoizedState=cn=t:cn=cn.next=t,cn}function sn(){if(kt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=cn===null?ct.memoizedState:cn.next;if(n!==null)cn=n,kt=t;else{if(t===null)throw ct.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},cn===null?ct.memoizedState=cn=t:cn=cn.next=t}return cn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=_o;return _o+=1,ts===null&&(ts=[]),t=Jp(ts,t,n),n=ct,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?km:lf),t}function Fl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===P)return Rn(t)}throw Error(r(438,String(t)))}function Ku(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ct.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=zl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function ea(t,n){return typeof n=="function"?n(t):n}function Bl(t){var n=sn();return Qu(n,kt,t)}function Qu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,F=null,J=n,he=!1;do{var ye=J.lane&-536870913;if(ye!==J.lane?(xt&ye)===ye:($i&ye)===ye){var ae=J.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),ye===Zr&&(he=!0);else if(($i&ae)===ae){J=J.next,ae===Zr&&(he=!0);continue}else ye={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=ye,v=f):F=F.next=ye,ct.lanes|=ae,za|=ae;ye=J.action,_r&&a(f,ye),f=J.hasEagerState?J.eagerState:a(f,ye)}else ae={lane:ye,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},F===null?(T=F=ae,v=f):F=F.next=ae,ct.lanes|=ye,za|=ye;J=J.next}while(J!==null&&J!==n);if(F===null?v=f:F.next=T,!jn(f,t.memoizedState)&&(un=!0,he&&(a=Kr,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=F,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ju(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);jn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cm(t,n,a){var s=ct,u=sn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!jn((kt||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,tf(hm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(s.flags|=2048,ns(9,{destroy:void 0},fm.bind(null,s,u,a,n),null),Yt===null)throw Error(r(349));f||($i&127)!==0||um(s,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=zl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,s){n.value=a,n.getSnapshot=s,dm(n)&&pm(t)}function hm(t,n,a){return a(function(){dm(n)&&pm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!jn(t,a)}catch{return!0}}function pm(t){var n=lr(t,2);n!==null&&Wn(n,t,2)}function $u(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),_r){ve(!0);try{a()}finally{ve(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:t},n}function mm(t,n,a,s){return t.baseState=a,Qu(t,kt,typeof s=="function"?s:ea)}function Px(t,n,a,s,u){if(Vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};L.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=L.T,v={};L.T=v;try{var T=a(u,s),F=L.S;F!==null&&F(v,T),_m(t,n,T)}catch(J){ef(t,n,J)}finally{f!==null&&v.types!==null&&(f.types=v.types),L.T=f}}else try{f=a(u,s),_m(t,n,f)}catch(J){ef(t,n,J)}}function _m(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vm(t,n,s)},function(s){return ef(t,n,s)}):vm(t,n,a)}function vm(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function ef(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==s)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ym(t,n){return n}function Sm(t,n){if(bt){var a=Yt.formState;if(a!==null){e:{var s=ct;if(bt){if(Kt){t:{for(var u=Kt,f=fi;u.nodeType!==8;){if(!f){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=di(u.nextSibling),s=u.data==="F!";break e}}wa(s)}s=!1}s&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=s,a=Hm.bind(null,ct,s),s.dispatch=a,s=$u(!1),f=of.bind(null,ct,!1,s.queue),s=zn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Px.bind(null,ct,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mm(t){var n=sn();return bm(n,kt,t)}function bm(t,n,a){if(n=Qu(t,n,ym)[0],t=Bl(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=vo(n)}catch(v){throw v===Qr?Cl:v}else s=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,ns(9,{destroy:void 0},zx.bind(null,u,a),null)),[s,f,t]}function zx(t,n){t.action=n}function Em(t){var n=sn(),a=kt;if(a!==null)return bm(n,a,t);sn(),n=n.memoizedState,a=sn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ns(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ct.updateQueue,n===null&&(n=zl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Tm(){return sn().memoizedState}function Hl(t,n,a,s){var u=zn();ct.flags|=t,u.memoizedState=ns(1|n,{destroy:void 0},a,s===void 0?null:s)}function Gl(t,n,a,s){var u=sn();s=s===void 0?null:s;var f=u.memoizedState.inst;kt!==null&&s!==null&&Wu(s,kt.memoizedState.deps)?u.memoizedState=ns(n,f,a,s):(ct.flags|=t,u.memoizedState=ns(1|n,f,a,s))}function Am(t,n){Hl(8390656,8,t,n)}function tf(t,n){Gl(2048,8,t,n)}function Fx(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=zl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Rm(t){var n=sn().memoizedState;return Fx({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function wm(t,n){return Gl(4,2,t,n)}function Cm(t,n){return Gl(4,4,t,n)}function Dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Um(t,n,a){a=a!=null?a.concat([t]):null,Gl(4,4,Dm.bind(null,n,t),a)}function nf(){}function Nm(t,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Wu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=sn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Wu(n,s[1]))return s[0];if(s=t(),_r){ve(!0);try{t()}finally{ve(!1)}}return a.memoizedState=[s,n],s}function af(t,n,a){return a===void 0||($i&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Og(),ct.lanes|=t,za|=t,a)}function Om(t,n,a,s){return jn(a,n)?a:$r.current!==null?(t=af(t,a,s),jn(t,n)||(un=!0),t):($i&42)===0||($i&1073741824)!==0&&(xt&261930)===0?(un=!0,t.memoizedState=a):(t=Og(),ct.lanes|=t,za|=t,n)}function Im(t,n,a,s,u){var f=H.p;H.p=f!==0&&8>f?f:8;var v=L.T,T={};L.T=T,of(t,!1,n,a);try{var F=u(),J=L.S;if(J!==null&&J(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var he=Lx(F,s);xo(t,n,he,ei(t))}else xo(t,n,s,ei(t))}catch(ye){xo(t,n,{then:function(){},status:"rejected",reason:ye},ei())}finally{H.p=f,v!==null&&T.types!==null&&(v.types=T.types),L.T=v}}function Bx(){}function rf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Im(t,u,n,ee,a===null?Bx:function(){return zm(t),a(s)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zm(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},ei())}function sf(){return Rn(Po)}function Fm(){return sn().memoizedState}function Bm(){return sn().memoizedState}function Hx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();t=Ua(a);var s=Na(n,t,a);s!==null&&(Wn(s,n,a),po(s,n,a)),n={cache:Ou()},t.payload=n;return}n=n.return}}function Gx(t,n,a){var s=ei();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Vl(t)?Gm(n,a):(a=bu(t,n,a,s),a!==null&&(Wn(a,t,s),Vm(a,n,s)))}function Hm(t,n,a){var s=ei();xo(t,n,a,s)}function xo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))Gm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,jn(T,v))return Ml(t,n,u,0),Yt===null&&Sl(),!1}catch{}if(a=bu(t,n,u,s),a!==null)return Wn(a,t,s),Vm(a,n,s),!0}return!1}function of(t,n,a,s){if(s={lane:2,revertLane:Bf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(r(479))}else n=bu(t,a,s,2),n!==null&&Wn(n,t,2)}function Vl(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Gm(t,n){es=Il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ys(t,a)}}var yo={readContext:Rn,use:Fl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};yo.useEffectEvent=tn;var km={readContext:Rn,use:Fl,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:Rn,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Hl(4194308,4,Dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var s=t();if(_r){ve(!0);try{t()}finally{ve(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=zn();if(a!==void 0){var u=a(n);if(_r){ve(!0);try{a(n)}finally{ve(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=Gx.bind(null,ct,t),[s.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=$u(t);var n=t.queue,a=Hm.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(t,n){var a=zn();return af(a,t,n)},useTransition:function(){var t=$u(!1);return t=Im.bind(null,ct,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ct,u=zn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(xt&127)!==0||um(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,s,f,t),[t]),s.flags|=2048,ns(9,{destroy:void 0},fm.bind(null,s,f,a,n),null),a},useId:function(){var t=zn(),n=Yt.identifierPrefix;if(bt){var a=Oi,s=Li;a=(s&~(1<<32-we(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ox++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ku,useCacheRefresh:function(){return zn().memoizedState=Hx.bind(null,ct)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},lf={readContext:Rn,use:Fl,useCallback:Nm,useContext:Rn,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Bl,useRef:Tm,useState:function(){return Bl(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=sn();return Om(a,kt.memoizedState,t,n)},useTransition:function(){var t=Bl(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:cm,useId:Fm,useHostTransitionStatus:sf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=sn();return mm(a,kt,t,n)},useMemoCache:Ku,useCacheRefresh:Bm};lf.useEffectEvent=Rm;var Xm={readContext:Rn,use:Fl,useCallback:Nm,useContext:Rn,useEffect:tf,useImperativeHandle:Um,useInsertionEffect:wm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Ju,useRef:Tm,useState:function(){return Ju(ea)},useDebugValue:nf,useDeferredValue:function(t,n){var a=sn();return kt===null?af(a,t,n):Om(a,kt.memoizedState,t,n)},useTransition:function(){var t=Ju(ea)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:cm,useId:Fm,useHostTransitionStatus:sf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=sn();return kt!==null?mm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ku,useCacheRefresh:Bm};Xm.useEffectEvent=Rm;function cf(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var uf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Ua(s);u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,s),n!==null&&(Wn(n,t,s),po(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=ei(),u=Ua(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Na(t,u,s),n!==null&&(Wn(n,t,s),po(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ei(),s=Ua(a);s.tag=2,n!=null&&(s.callback=n),n=Na(t,s,a),n!==null&&(Wn(n,t,a),po(n,t,a))}};function Wm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!ro(a,s)||!ro(u,f):!0}function qm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&uf.enqueueReplaceState(n,n.state,null)}function vr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ym(t){yl(t)}function jm(t){console.error(t)}function Zm(t){yl(t)}function kl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Km(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(t,n,a){return a=Ua(a),a.tag=3,a.payload={element:null},a.callback=function(){kl(t,n)},a}function Qm(t){return t=Ua(t),t.tag=3,t}function Jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,s),typeof u!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Vx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&jr(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?tc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Pf(t,s,u)),!1;case 22:return a.flags|=65536,s===Dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Pf(t,s,u)),!1}throw Error(r(435,a.tag))}return Pf(t,s,u),tc(),!1}if(bt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Cu&&(t=Error(r(422),{cause:s}),lo(li(t,a)))):(s!==Cu&&(n=Error(r(423),{cause:s}),lo(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=li(s,a),u=ff(t.stateNode,s,u),Hu(t,u),nn!==4&&(nn=2)),!1;var f=Error(r(520),{cause:s});if(f=li(f,a),wo===null?wo=[f]:wo.push(f),nn!==4&&(nn=2),n===null)return!0;s=li(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ff(a.stateNode,s,t),Hu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Fa===null||!Fa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,t,a,s),Hu(a,u),!1}a=a.return}while(a!==null);return!1}var hf=Error(r(461)),un=!1;function wn(t,n,a,s){n.child=t===null?nm(n,null,a,s):gr(n,t.child,a,s)}function $m(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return hr(n),s=qu(t,n,a,v,f,u),T=Yu(),t!==null&&!un?(ju(t,n,u),ta(t,n,u)):(bt&&T&&Ru(n),n.flags|=1,wn(t,n,s,u),n.child)}function eg(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,tg(t,n,f,s,u)):(t=El(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!yf(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(v,s)&&t.ref===n.ref)return ta(t,n,u)}return n.flags|=1,t=Zi(f,s),t.ref=n.ref,t.return=n,n.child=t}function tg(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(ro(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,yf(t,u))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,ta(t,n,u)}return df(t,n,a,s,u)}function ng(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return ig(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&wl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):Vu(),sm(n);else return s=n.lanes=536870912,ig(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(wl(n,f.cachePool),rm(n,f),Oa(),n.memoizedState=null):(t!==null&&wl(n,null),Vu(),Oa());return wn(t,n,u,a),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ig(t,n,a,s,u){var f=Pu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&wl(n,null),Vu(),sm(n),t!==null&&jr(t,n,s,!0),n.childLanes=u,null}function Xl(t,n){return n=ql({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ag(t,n,a){return gr(n,t.child,null,a),t=Xl(n,n.pendingProps),t.flags|=2,Qn(n),n.memoizedState=null,t}function kx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(s.mode==="hidden")return t=Xl(n,s),n.lanes=536870912,So(null,t);if(Xu(n),(t=Kt)?(t=g0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw wa(n);return n.lanes=536870912,null}return Xl(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(Xu(n),u)if(n.flags&256)n.flags&=-257,n=ag(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(un||jr(t,n,a,!1),u=(a&t.childLanes)!==0,un||u){if(s=Yt,s!==null&&(v=Lr(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,lr(t,v),Wn(s,t,v),hf;tc(),n=ag(t,n,a)}else t=f.treeContext,Kt=di(v.nextSibling),An=n,bt=!0,Ra=null,fi=!1,t!==null&&Xp(n,t),n=Xl(n,s),n.flags|=4096;return n}return t=Zi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Wl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,s,u){return hr(n),a=qu(t,n,a,s,void 0,u),s=Yu(),t!==null&&!un?(ju(t,n,u),ta(t,n,u)):(bt&&s&&Ru(n),n.flags|=1,wn(t,n,a,u),n.child)}function rg(t,n,a,s,u,f){return hr(n),n.updateQueue=null,a=lm(n,s,a,u),om(t),s=Yu(),t!==null&&!un?(ju(t,n,f),ta(t,n,f)):(bt&&s&&Ru(n),n.flags|=1,wn(t,n,a,f),n.child)}function sg(t,n,a,s,u){if(hr(n),n.stateNode===null){var f=Xr,v=a.contextType;typeof v=="object"&&v!==null&&(f=Rn(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=uf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Fu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?Rn(v):Xr,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(cf(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&uf.enqueueReplaceState(f,f.state,null),go(n,s,f,u),mo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,F=vr(a,T);f.props=F;var J=f.context,he=a.contextType;v=Xr,typeof he=="object"&&he!==null&&(v=Rn(he));var ye=a.getDerivedStateFromProps;he=typeof ye=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,he||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||J!==v)&&qm(n,f,s,v),Da=!1;var ae=n.memoizedState;f.state=ae,go(n,s,f,u),mo(),J=n.memoizedState,T||ae!==J||Da?(typeof ye=="function"&&(cf(n,a,ye,s),J=n.memoizedState),(F=Da||Wm(n,a,F,s,ae,J,v))?(he||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=v,s=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Bu(t,n),v=n.memoizedProps,he=vr(a,v),f.props=he,ye=n.pendingProps,ae=f.context,J=a.contextType,F=Xr,typeof J=="object"&&J!==null&&(F=Rn(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ye||ae!==F)&&qm(n,f,s,F),Da=!1,ae=n.memoizedState,f.state=ae,go(n,s,f,u),mo();var oe=n.memoizedState;v!==ye||ae!==oe||Da||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof T=="function"&&(cf(n,a,T,s),oe=n.memoizedState),(he=Da||Wm(n,a,he,s,ae,oe,F)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,oe,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,oe,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=oe),f.props=s,f.state=oe,f.context=F,s=he):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Wl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=gr(n,t.child,null,u),n.child=gr(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ta(t,n,u),t}function og(t,n,a,s){return ur(),n.flags|=256,wn(t,n,a,s),n.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(t){return{baseLanes:t,cachePool:Kp()}}function gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=$n),t}function lg(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?La(n):Oa(),(t=Kt)?(t=g0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Aa!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,An=n,Kt=null)):t=null,t===null)throw wa(n);return Jf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Oa(),u=n.mode,T=ql({mode:"hidden",children:T},u),s=cr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,v,a),n.memoizedState=pf,So(null,s)):(La(n),_f(n,T))}var F=t.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(f)n.flags&256?(La(n),n.flags&=-257,n=vf(t,n,a)):n.memoizedState!==null?(Oa(),n.child=t.child,n.flags|=128,n=null):(Oa(),T=s.fallback,u=n.mode,s=ql({mode:"visible",children:s.children},u),T=cr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,gr(n,t.child,null,a),s=n.child,s.memoizedState=mf(a),s.childLanes=gf(t,v,a),n.memoizedState=pf,n=So(null,s));else if(La(n),Jf(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var J=v.dgst;v=J,s=Error(r(419)),s.stack="",s.digest=v,lo({value:s,source:null,stack:null}),n=vf(t,n,a)}else if(un||jr(t,n,a,!1),v=(a&t.childLanes)!==0,un||v){if(v=Yt,v!==null&&(s=Lr(v,a),s!==0&&s!==F.retryLane))throw F.retryLane=s,lr(t,s),Wn(v,t,s),hf;Qf(T)||tc(),n=vf(t,n,a)}else Qf(T)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Kt=di(T.nextSibling),An=n,bt=!0,Ra=null,fi=!1,t!==null&&Xp(n,t),n=_f(n,s.children),n.flags|=4096);return n}return u?(Oa(),T=s.fallback,u=n.mode,F=t.child,J=F.sibling,s=Zi(F,{mode:"hidden",children:s.children}),s.subtreeFlags=F.subtreeFlags&65011712,J!==null?T=Zi(J,T):(T=cr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,So(null,s),s=n.child,T=t.child.memoizedState,T===null?T=mf(a):(u=T.cachePool,u!==null?(F=ln._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Kp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=gf(t,v,a),n.memoizedState=pf,So(t.child,s)):(La(n),a=t.child,t=a.sibling,a=Zi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function _f(t,n){return n=ql({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function ql(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function vf(t,n,a){return gr(n,t.child,null,a),t=_f(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function cg(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Nu(t.return,n,a)}function xf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function ug(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=rn.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,_e(rn,v),wn(t,n,s,a),s=bt?oo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cg(t,a,n);else if(t.tag===19)cg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ol(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),xf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}xf(n,!0,a,null,f,s);break;case"together":xf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function ta(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Zi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Zi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function yf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function Xx(t,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),Ca(n,ln,t.memoizedState.cache),ur();break;case 27:case 5:Ge(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Xu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(La(n),n.flags|=128,null):(a&n.child.childLanes)!==0?lg(t,n,a):(La(n),t=ta(t,n,a),t!==null?t.sibling:null);La(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(jr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return ug(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),_e(rn,rn.current),s)break;return null;case 22:return n.lanes=0,ng(t,n,a,n.pendingProps);case 24:Ca(n,ln,t.memoizedState.cache)}return ta(t,n,a)}function fg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!yf(t,a)&&(n.flags&128)===0)return un=!1,Xx(t,n,a);un=(t.flags&131072)!==0}else un=!1,bt&&(n.flags&1048576)!==0&&kp(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=pr(n.elementType),n.type=t,typeof t=="function")Eu(t)?(s=vr(t,s),n.tag=1,n=sg(null,n,t,s,a)):(n.tag=0,n=df(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=$m(null,n,t,s,a);break e}else if(u===I){n.tag=14,n=eg(null,n,t,s,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=vr(s,n.pendingProps),sg(t,n,s,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Bu(t,n),go(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Ca(n,ln,s),s!==f.cache&&Lu(n,[ln],a,!0),mo(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=og(t,n,s,a);break e}else if(s!==u){u=li(Error(r(424)),n),lo(u),n=og(t,n,s,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Kt=di(t.firstChild),An=n,bt=!0,Ra=null,fi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ur(),s===u){n=ta(t,n,a);break e}wn(t,n,s,a)}n=n.child}return n;case 26:return Wl(t,n),t===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,s=lc(te.current).createElement(a),s[on]=n,s[yn]=t,Cn(s,a,t),A(s),n.stateNode=s):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&bt&&(s=n.stateNode=x0(n.type,n.pendingProps,te.current),An=n,fi=!0,u=Kt,Va(n.type)?($f=u,Kt=di(s.firstChild)):Kt=u),wn(t,n,n.pendingProps.children,a),Wl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=s=Kt)&&(s=yy(s,n.type,n.pendingProps,fi),s!==null?(n.stateNode=s,An=n,Kt=di(s.firstChild),fi=!1,u=!0):u=!1),u||wa(n)),Ge(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,jf(u,f)?s=null:v!==null&&jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(t,n,Ix,null,null,a),Po._currentValue=u),Wl(t,n),wn(t,n,s,a),n.child;case 6:return t===null&&bt&&((t=a=Kt)&&(a=Sy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,An=n,Kt=null,t=!0):t=!1),t||wa(n)),null;case 13:return lg(t,n,a);case 4:return Ue(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=gr(n,null,s,a):wn(t,n,s,a),n.child;case 11:return $m(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ca(n,n.type,s.value),wn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,hr(n),u=Rn(u),s=s(u),n.flags|=1,wn(t,n,s,a),n.child;case 14:return eg(t,n,n.type,n.pendingProps,a);case 15:return tg(t,n,n.type,n.pendingProps,a);case 19:return ug(t,n,a);case 31:return kx(t,n,a);case 22:return ng(t,n,a,n.pendingProps);case 24:return hr(n),s=Rn(ln),t===null?(u=Pu(),u===null&&(u=Yt,f=Ou(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Fu(n),Ca(n,ln,u)):((t.lanes&a)!==0&&(Bu(t,n),go(n,null,null,a),mo()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ca(n,ln,s)):(s=f.cache,Ca(n,ln,s),s!==u.cache&&Lu(n,[ln],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function na(t){t.flags|=4}function Sf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Fg())t.flags|=8192;else throw mr=Dl,zu}else t.flags&=-16777217}function hg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(n))if(Fg())t.flags|=8192;else throw mr=Dl,zu}function Yl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?zt():536870912,t.lanes|=n,ss|=n)}function Mo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Wx(t,n,a){var s=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ji(ln),De(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Yr(n)?na(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Du())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(na(n),f!==null?(Qt(n),hg(n,f)):(Qt(n),Sf(n,u,null,s,a))):f?f!==t.memoizedState?(na(n),Qt(n),hg(n,f)):(Qt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&na(n),Qt(n),Sf(n,u,t,s,a)),null;case 27:if(ut(n),a=te.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}t=Le.current,Yr(n)?Wp(n):(t=x0(u,s,a),n.stateNode=t,na(n))}return Qt(n),null;case 5:if(ut(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Le.current,Yr(n))Wp(n);else{var v=lc(te.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[on]=n,f[yn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&na(n)}}return Qt(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&na(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=te.current,Yr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=An,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||l0(t.nodeValue,a)),t||wa(n,!0)}else t=lc(t).createTextNode(s),t[on]=n,n.stateNode=t}return Qt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Yr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),t=!1}else a=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Yr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[on]=n}else ur(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=Du(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Yl(n,n.updateQueue),Qt(n),null);case 4:return De(),t===null&&kf(n.stateNode.containerInfo),Qt(n),null;case 10:return Ji(n.type),Qt(n),null;case 19:if(ne(rn),s=n.memoizedState,s===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Mo(s,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ol(t),f!==null){for(n.flags|=128,Mo(s,!1),t=f.updateQueue,n.updateQueue=t,Yl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hp(a,t),a=a.sibling;return _e(rn,rn.current&1|2),bt&&Ki(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>Jl&&(n.flags|=128,u=!0,Mo(s,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Yl(n,t),Mo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*b()-s.renderingStartTime>Jl&&a!==536870912&&(n.flags|=128,u=!0,Mo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=rn.current,_e(rn,u?a&1|2:a&1),bt&&Ki(n,s.treeForkCount),t):(Qt(n),null);case 22:case 23:return Qn(n),ku(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Yl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ne(dr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function qx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ji(ln),De(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ut(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Qn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ur()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ne(rn),null;case 4:return De(),null;case 10:return Ji(n.type),null;case 22:case 23:return Qn(n),ku(),t!==null&&ne(dr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ji(ln),null;case 25:return null;default:return null}}function dg(t,n){switch(wu(n),n.tag){case 3:Ji(ln),De();break;case 26:case 27:case 5:ut(n);break;case 4:De();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:ne(rn);break;case 10:Ji(n.type);break;case 22:case 23:Qn(n),ku(),t!==null&&ne(dr);break;case 24:Ji(ln)}}function bo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Ht(n,n.return,T)}}function Ia(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var F=a,J=T;try{J()}catch(he){Ht(u,F,he)}}}s=s.next}while(s!==f)}}catch(he){Ht(n,n.return,he)}}function pg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{am(n,a)}catch(s){Ht(t,t.return,s)}}}function mg(t,n,a){a.props=vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ht(t,n,s)}}function Eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Ht(t,n,u)}}function Ii(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ht(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ht(t,n,u)}else a.current=null}function gg(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ht(t,t.return,u)}}function Mf(t,n,a){try{var s=t.stateNode;py(s,t.type,a,n),s[yn]=n}catch(u){Ht(t,t.return,u)}}function _g(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Va(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Va(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function jl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Va(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(jl(t,n,a),t=t.sibling;t!==null;)jl(t,n,a),t=t.sibling}function vg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,s,a),n[on]=t,n[yn]=a}catch(f){Ht(t,t.return,f)}}var ia=!1,fn=!1,Tf=!1,xg=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Yx(t,n){if(t=t.containerInfo,qf=mc,t=Up(t),_u(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,F=-1,J=0,he=0,ye=t,ae=null;t:for(;;){for(var oe;ye!==a||u!==0&&ye.nodeType!==3||(T=v+u),ye!==f||s!==0&&ye.nodeType!==3||(F=v+s),ye.nodeType===3&&(v+=ye.nodeValue.length),(oe=ye.firstChild)!==null;)ae=ye,ye=oe;for(;;){if(ye===t)break t;if(ae===a&&++J===u&&(T=v),ae===f&&++he===s&&(F=v),(oe=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=oe}a=T===-1||F===-1?null:{start:T,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:t,selectionRange:a},mc=!1,vn=n;vn!==null;)if(n=vn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,vn=t;else for(;vn!==null;){switch(n=vn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qe=vr(a.type,u);t=s.getSnapshotBeforeUpdate(qe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Ht(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Kf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Kf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,vn=t;break}vn=n.return}}function yg(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ra(t,a),s&4&&bo(5,a);break;case 1:if(ra(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Ht(a,a.return,v)}else{var u=vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Ht(a,a.return,v)}}s&64&&pg(a),s&512&&Eo(a,a.return);break;case 3:if(ra(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(t,n)}catch(v){Ht(a,a.return,v)}}break;case 27:n===null&&s&4&&vg(a);case 26:case 5:ra(t,a),n===null&&s&4&&gg(a),s&512&&Eo(a,a.return);break;case 12:ra(t,a);break;case 31:ra(t,a),s&4&&bg(t,a);break;case 13:ra(t,a),s&4&&Eg(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=ny.bind(null,a),My(t,a))));break;case 22:if(s=a.memoizedState!==null||ia,!s){n=n!==null&&n.memoizedState!==null||fn,u=ia;var f=fn;ia=s,(fn=n)&&!f?sa(t,a,(a.subtreeFlags&8772)!==0):ra(t,a),ia=u,fn=f}break;case 30:break;default:ra(t,a)}}function Sg(t){var n=t.alternate;n!==null&&(t.alternate=null,Sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Qs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Gn=!1;function aa(t,n,a){for(a=a.child;a!==null;)Mg(t,n,a),a=a.sibling}function Mg(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(me,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),aa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var s=$t,u=Gn;Va(a.type)&&($t=a.stateNode,Gn=!1),aa(t,n,a),Lo(a.stateNode),$t=s,Gn=u;break;case 5:fn||Ii(a,n);case 6:if(s=$t,u=Gn,$t=null,aa(t,n,a),$t=s,Gn=u,$t!==null)if(Gn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){Ht(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){Ht(a,n,f)}break;case 18:$t!==null&&(Gn?(t=$t,p0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ps(t)):p0($t,a.stateNode));break;case 4:s=$t,u=Gn,$t=a.stateNode.containerInfo,Gn=!0,aa(t,n,a),$t=s,Gn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,n),fn||Ia(4,a,n),aa(t,n,a);break;case 1:fn||(Ii(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&mg(a,n,s)),aa(t,n,a);break;case 21:aa(t,n,a);break;case 22:fn=(s=fn)||a.memoizedState!==null,aa(t,n,a),fn=s;break;default:aa(t,n,a)}}function bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ps(t)}catch(a){Ht(n,n.return,a)}}}function Eg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ps(t)}catch(a){Ht(n,n.return,a)}}function jx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new xg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new xg),n;default:throw Error(r(435,t.tag))}}function Zl(t,n){var a=jx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=iy.bind(null,t,s);s.then(u,u)}})}function Vn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Va(T.type)){$t=T.stateNode,Gn=!1;break e}break;case 5:$t=T.stateNode,Gn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Gn=!0;break e}T=T.return}if($t===null)throw Error(r(160));Mg(f,v,u),$t=null,Gn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tg(n,t),n=n.sibling}var bi=null;function Tg(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Vn(n,t),kn(t),s&4&&(Ia(3,t,t.return),bo(3,t),Ia(5,t,t.return));break;case 1:Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),s&64&&ia&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=bi;if(Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ir]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,s,a),f[on]=t,A(f),s=f;break e;case"link":var v=T0("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=T0("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=u.createElement(s),Cn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[on]=t,A(f),s=f}t.stateNode=s}else A0(u,t.type,t.stateNode);else t.stateNode=E0(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?A0(u,t.type,t.stateNode):E0(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Mf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),a!==null&&s&4&&Mf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Vn(n,t),kn(t),s&512&&(fn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(qe){Ht(t,t.return,qe)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Mf(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Tf=!0);break;case 6:if(Vn(n,t),kn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qe){Ht(t,t.return,qe)}}break;case 3:if(fc=null,u=bi,bi=cc(n.containerInfo),Vn(n,t),bi=u,kn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ps(n.containerInfo)}catch(qe){Ht(t,t.return,qe)}Tf&&(Tf=!1,Ag(t));break;case 4:s=bi,bi=cc(t.stateNode.containerInfo),Vn(n,t),kn(t),bi=s;break;case 12:Vn(n,t),kn(t);break;case 31:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Zl(t,s)));break;case 13:Vn(n,t),kn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ql=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Zl(t,s)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,J=ia,he=fn;if(ia=J||u,fn=he||F,Vn(n,t),fn=he,ia=J,kn(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||ia||fn||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=F.stateNode;var ye=F.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(qe){Ht(F,F.return,qe)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(qe){Ht(F,F.return,qe)}}}else if(n.tag===18){if(a===null){F=n;try{var oe=F.stateNode;u?m0(oe,!0):m0(F.stateNode,!1)}catch(qe){Ht(F,F.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Zl(t,a))));break;case 19:Vn(n,t),kn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Zl(t,s)));break;case 30:break;case 21:break;default:Vn(n,t),kn(t)}}function kn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_g(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);jl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(pn(v,""),a.flags&=-33);var T=bf(t);jl(t,T,v);break;case 3:case 4:var F=a.stateNode.containerInfo,J=bf(t);Ef(t,J,F);break;default:throw Error(r(161))}}catch(he){Ht(t,t.return,he)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ag(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ag(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ra(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)yg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ia(4,n,n.return),xr(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mg(n,n.return,a),xr(n);break;case 27:Lo(n.stateNode);case 26:case 5:Ii(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function sa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:sa(u,f,a),bo(4,f);break;case 1:if(sa(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Ht(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)im(F[u],T)}catch(J){Ht(s,s.return,J)}}a&&v&64&&pg(f),Eo(f,f.return);break;case 27:vg(f);case 26:case 5:sa(u,f,a),a&&s===null&&v&4&&gg(f),Eo(f,f.return);break;case 12:sa(u,f,a);break;case 31:sa(u,f,a),a&&v&4&&bg(u,f);break;case 13:sa(u,f,a),a&&v&4&&Eg(u,f);break;case 22:f.memoizedState===null&&sa(u,f,a),Eo(f,f.return);break;case 30:break;default:sa(u,f,a)}n=n.sibling}}function Af(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&co(a))}function Rf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Ei(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Rg(t,n,a,s),n=n.sibling}function Rg(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(t,n,a,s),u&2048&&bo(9,n);break;case 1:Ei(t,n,a,s);break;case 3:Ei(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Ei(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Ht(n,n.return,F)}}else Ei(t,n,a,s);break;case 31:Ei(t,n,a,s);break;case 13:Ei(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ei(t,n,a,s):To(t,n):f._visibility&2?Ei(t,n,a,s):(f._visibility|=2,is(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Af(v,n);break;case 24:Ei(t,n,a,s),u&2048&&Rf(n.alternate,n);break;default:Ei(t,n,a,s)}}function is(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,F=s,J=v.flags;switch(v.tag){case 0:case 11:case 15:is(f,v,T,F,u),bo(8,v);break;case 23:break;case 22:var he=v.stateNode;v.memoizedState!==null?he._visibility&2?is(f,v,T,F,u):To(f,v):(he._visibility|=2,is(f,v,T,F,u)),u&&J&2048&&Af(v.alternate,v);break;case 24:is(f,v,T,F,u),u&&J&2048&&Rf(v.alternate,v);break;default:is(f,v,T,F,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:To(a,s),u&2048&&Af(s.alternate,s);break;case 24:To(a,s),u&2048&&Rf(s.alternate,s);break;default:To(a,s)}n=n.sibling}}var Ao=8192;function as(t,n,a){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)wg(t,n,a),t=t.sibling}function wg(t,n,a){switch(t.tag){case 26:as(t,n,a),t.flags&Ao&&t.memoizedState!==null&&Oy(a,bi,t.memoizedState,t.memoizedProps);break;case 5:as(t,n,a);break;case 3:case 4:var s=bi;bi=cc(t.stateNode.containerInfo),as(t,n,a),bi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Ao,Ao=16777216,as(t,n,a),Ao=s):as(t,n,a));break;default:as(t,n,a)}}function Cg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,Ug(s,t)}Cg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dg(t),t=t.sibling}function Dg(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Ia(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Ro(t);break;default:Ro(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];vn=s,Ug(s,t)}Cg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ia(8,n,n.return),Kl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Ug(t,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Ia(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:co(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,vn=s;else e:for(a=t;vn!==null;){s=vn;var u=s.sibling,f=s.return;if(Sg(s),s===a){vn=null;break e}if(u!==null){u.return=f,vn=u;break e}vn=f}}}var Zx={getCacheForType:function(t){var n=Rn(ln),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Rn(ln).controller.signal}},Kx=typeof WeakMap=="function"?WeakMap:Map,It=0,Yt=null,_t=null,xt=0,Bt=0,Jn=null,Pa=!1,rs=!1,wf=!1,oa=0,nn=0,za=0,yr=0,Cf=0,$n=0,ss=0,wo=null,Xn=null,Df=!1,Ql=0,Ng=0,Jl=1/0,$l=null,Fa=null,mn=0,Ba=null,os=null,la=0,Uf=0,Nf=null,Lg=null,Co=0,Lf=null;function ei(){return(It&2)!==0&&xt!==0?xt&-xt:L.T!==null?Bf():Zs()}function Og(){if($n===0)if((xt&536870912)===0||bt){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),$n=t}else $n=536870912;return t=Kn.current,t!==null&&(t.flags|=32),$n}function Wn(t,n,a){(t===Yt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(ls(t,0),Ha(t,xt,$n,!1)),Un(t,a),((It&2)===0||t!==Yt)&&(t===Yt&&((It&2)===0&&(yr|=a),nn===4&&Ha(t,xt,$n,!1)),Pi(t))}function Ig(t,n,a){if((It&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Oe(t,n),u=s?$x(t,n):If(t,n,!0),f=s;do{if(u===0){rs&&!s&&Ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Qx(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=t;u=wo;var F=T.current.memoizedState.isDehydrated;if(F&&(ls(T,v).flags|=256),v=If(T,v,!1),v!==2){if(wf&&!F){T.errorRecoveryDisabledLanes|=f,yr|=f,u=4;break e}f=Xn,Xn=u,f!==null&&(Xn===null?Xn=f:Xn.push.apply(Xn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ls(t,0),Ha(t,n,0,!0);break}e:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ha(s,n,$n,!Pa);break e;case 2:Xn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Ql+300-b(),10<u)){if(Ha(s,n,$n,!Pa),Se(s,0,!0)!==0)break e;la=n,s.timeoutHandle=h0(Pg.bind(null,s,a,Xn,$l,Df,n,$n,yr,ss,Pa,f,"Throttled",-0,0),u);break e}Pg(s,a,Xn,$l,Df,n,$n,yr,ss,Pa,f,null,-0,0)}}break}while(!0);Pi(t)}function Pg(t,n,a,s,u,f,v,T,F,J,he,ye,ae,oe){if(t.timeoutHandle=-1,ye=n.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},wg(n,f,ye);var qe=(f&62914560)===f?Ql-b():(f&4194048)===f?Ng-b():0;if(qe=Iy(ye,qe),qe!==null){la=f,t.cancelPendingCommit=qe(Xg.bind(null,t,n,f,a,s,u,v,T,F,he,ye,null,ae,oe)),Ha(t,f,v,!J);return}}Xg(t,n,f,a,s,u,v,T,F)}function Qx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!jn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ha(t,n,a,s){n&=~Cf,n&=~yr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-we(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&fl(t,a,n)}function ec(){return(It&6)===0?(Do(0),!1):!0}function Of(){if(_t!==null){if(Bt===0)var t=_t.return;else t=_t,Qi=fr=null,Zu(t),Jr=null,fo=0,t=_t;for(;t!==null;)dg(t.alternate,t),t=t.return;_t=null}}function ls(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,_y(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),la=0,Of(),Yt=t,_t=a=Zi(t.current,null),xt=n,Bt=0,Jn=null,Pa=!1,rs=Oe(t,n),wf=!1,ss=$n=Cf=yr=za=nn=0,Xn=wo=null,Df=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-we(s),f=1<<u;n|=t[u],s&=~f}return oa=n,Sl(),a}function zg(t,n){ct=null,L.H=yo,n===Qr||n===Cl?(n=$p(),Bt=3):n===zu?(n=$p(),Bt=4):Bt=n===hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,_t===null&&(nn=1,kl(t,li(n,t.current)))}function Fg(){var t=Kn.current;return t===null?!0:(xt&4194048)===xt?hi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===hi:!1}function Bg(){var t=L.H;return L.H=yo,t===null?yo:t}function Hg(){var t=L.A;return L.A=Zx,t}function tc(){nn=4,Pa||(xt&4194048)!==xt&&Kn.current!==null||(rs=!0),(za&134217727)===0&&(yr&134217727)===0||Yt===null||Ha(Yt,xt,$n,!1)}function If(t,n,a){var s=It;It|=2;var u=Bg(),f=Hg();(Yt!==t||xt!==n)&&($l=null,ls(t,n)),n=!1;var v=nn;e:do try{if(Bt!==0&&_t!==null){var T=_t,F=Jn;switch(Bt){case 8:Of(),v=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var J=Bt;if(Bt=0,Jn=null,cs(t,T,F,J),a&&rs){v=0;break e}break;default:J=Bt,Bt=0,Jn=null,cs(t,T,F,J)}}Jx(),v=nn;break}catch(he){zg(t,he)}while(!0);return n&&t.shellSuspendCounter++,Qi=fr=null,It=s,L.H=u,L.A=f,_t===null&&(Yt=null,xt=0,Sl()),v}function Jx(){for(;_t!==null;)Gg(_t)}function $x(t,n){var a=It;It|=2;var s=Bg(),u=Hg();Yt!==t||xt!==n?($l=null,Jl=b()+500,ls(t,n)):rs=Oe(t,n);e:do try{if(Bt!==0&&_t!==null){n=_t;var f=Jn;t:switch(Bt){case 1:Bt=0,Jn=null,cs(t,n,f,1);break;case 2:case 9:if(Qp(f)){Bt=0,Jn=null,Vg(n);break}n=function(){Bt!==2&&Bt!==9||Yt!==t||(Bt=7),Pi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Qp(f)?(Bt=0,Jn=null,Vg(n)):(Bt=0,Jn=null,cs(t,n,f,7));break;case 5:var v=null;switch(_t.tag){case 26:v=_t.memoizedState;case 5:case 27:var T=_t;if(v?R0(v):T.stateNode.complete){Bt=0,Jn=null;var F=T.sibling;if(F!==null)_t=F;else{var J=T.return;J!==null?(_t=J,nc(J)):_t=null}break t}}Bt=0,Jn=null,cs(t,n,f,5);break;case 6:Bt=0,Jn=null,cs(t,n,f,6);break;case 8:Of(),nn=6;break e;default:throw Error(r(462))}}ey();break}catch(he){zg(t,he)}while(!0);return Qi=fr=null,L.H=s,L.A=u,It=a,_t!==null?0:(Yt=null,xt=0,Sl(),nn)}function ey(){for(;_t!==null&&!Xe();)Gg(_t)}function Gg(t){var n=fg(t.alternate,t,oa);t.memoizedProps=t.pendingProps,n===null?nc(t):_t=n}function Vg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=rg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=rg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:Zu(n);default:dg(a,n),n=_t=Hp(n,oa),n=fg(a,n,oa)}t.memoizedProps=t.pendingProps,n===null?nc(t):_t=n}function cs(t,n,a,s){Qi=fr=null,Zu(n),Jr=null,fo=0;var u=n.return;try{if(Vx(t,u,n,a,xt)){nn=1,kl(t,li(a,t.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;nn=1,kl(t,li(a,t.current)),_t=null;return}n.flags&32768?(bt||s===1?t=!0:rs||(xt&536870912)!==0?t=!1:(Pa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Kn.current,s!==null&&s.tag===13&&(s.flags|=16384))),kg(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){kg(n,Pa);return}t=n.return;var a=Wx(n.alternate,n,oa);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=t}while(n!==null);nn===0&&(nn=5)}function kg(t,n){do{var a=qx(t.alternate,t);if(a!==null){a.flags&=32767,_t=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_t=t;return}_t=t=a}while(t!==null);nn=6,_t=null}function Xg(t,n,a,s,u,f,v,T,F){t.cancelPendingCommit=null;do ic();while(mn!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Mu,xi(t,a,f,v,T,F),t===Yt&&(_t=Yt=null,xt=0),os=n,Ba=t,la=a,Uf=f,Nf=u,Lg=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ay(le,function(){return Zg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=L.T,L.T=null,u=H.p,H.p=2,v=It,It|=4;try{Yx(t,n,a)}finally{It=v,H.p=u,L.T=s}}mn=1,Wg(),qg(),Yg()}}function Wg(){if(mn===1){mn=0;var t=Ba,n=os,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var u=It;It|=4;try{Tg(n,t);var f=Yf,v=Up(t.containerInfo),T=f.focusedElem,F=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(F!==null&&_u(T)){var J=F.start,he=F.end;if(he===void 0&&(he=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(he,T.value.length);else{var ye=T.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var oe=ae.getSelection(),qe=T.textContent.length,nt=Math.min(F.start,qe),Wt=F.end===void 0?nt:Math.min(F.end,qe);!oe.extend&&nt>Wt&&(v=Wt,Wt=nt,nt=v);var Y=Cp(T,nt),X=Cp(T,Wt);if(Y&&X&&(oe.rangeCount!==1||oe.anchorNode!==Y.node||oe.anchorOffset!==Y.offset||oe.focusNode!==X.node||oe.focusOffset!==X.offset)){var Q=ye.createRange();Q.setStart(Y.node,Y.offset),oe.removeAllRanges(),nt>Wt?(oe.addRange(Q),oe.extend(X.node,X.offset)):(Q.setEnd(X.node,X.offset),oe.addRange(Q))}}}}for(ye=[],oe=T;oe=oe.parentNode;)oe.nodeType===1&&ye.push({element:oe,left:oe.scrollLeft,top:oe.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var ge=ye[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}mc=!!qf,Yf=qf=null}finally{It=u,H.p=s,L.T=a}}t.current=n,mn=2}}function qg(){if(mn===2){mn=0;var t=Ba,n=os,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=L.T,L.T=null;var s=H.p;H.p=2;var u=It;It|=4;try{yg(t,n.alternate,n)}finally{It=u,H.p=s,L.T=a}}mn=3}}function Yg(){if(mn===4||mn===3){mn=0,D();var t=Ba,n=os,a=la,s=Lg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,os=Ba=null,jg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Fa=null),Or(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(me,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=L.T,u=H.p,H.p=2,L.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{L.T=n,H.p=u}}(la&3)!==0&&ic(),Pi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Lf?Co++:(Co=0,Lf=t):Co=0,Do(0)}}function jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function ic(){return Wg(),qg(),Yg(),Zg()}function Zg(){if(mn!==5)return!1;var t=Ba,n=Uf;Uf=0;var a=Or(la),s=L.T,u=H.p;try{H.p=32>a?32:a,L.T=null,a=Nf,Nf=null;var f=Ba,v=la;if(mn=0,os=Ba=null,la=0,(It&6)!==0)throw Error(r(331));var T=It;if(It|=4,Dg(f.current),Rg(f,f.current,v,a),It=T,Do(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(me,f)}catch{}return!0}finally{H.p=u,L.T=s,jg(t,n)}}function Kg(t,n,a){n=li(a,n),n=ff(t.stateNode,n,2),t=Na(t,n,2),t!==null&&(Un(t,2),Pi(t))}function Ht(t,n,a){if(t.tag===3)Kg(t,t,a);else for(;n!==null;){if(n.tag===3){Kg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Fa===null||!Fa.has(s))){t=li(a,t),a=Qm(2),s=Na(n,a,2),s!==null&&(Jm(a,s,n,t),Un(s,2),Pi(s));break}}n=n.return}}function Pf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new Kx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(wf=!0,u.add(a),t=ty.bind(null,t,n,a),n.then(t,t))}function ty(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(xt&a)===a&&(nn===4||nn===3&&(xt&62914560)===xt&&300>b()-Ql?(It&2)===0&&ls(t,0):Cf|=a,ss===xt&&(ss=0)),Pi(t)}function Qg(t,n){n===0&&(n=zt()),t=lr(t,n),t!==null&&(Un(t,n),Pi(t))}function ny(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Qg(t,a)}function iy(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Qg(t,a)}function ay(t,n){return mt(t,n)}var ac=null,us=null,zf=!1,rc=!1,Ff=!1,Ga=0;function Pi(t){t!==us&&t.next===null&&(us===null?ac=us=t:us=us.next=t),rc=!0,zf||(zf=!0,sy())}function Do(t,n){if(!Ff&&rc){Ff=!0;do for(var a=!1,s=ac;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-we(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,t0(s,f))}else f=xt,f=Se(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Oe(s,f)||(a=!0,t0(s,f));s=s.next}while(a);Ff=!1}}function ry(){Jg()}function Jg(){rc=zf=!1;var t=0;Ga!==0&&gy()&&(t=Ga);for(var n=b(),a=null,s=ac;s!==null;){var u=s.next,f=$g(s,n);f===0?(s.next=null,a===null?ac=u:a.next=u,u===null&&(us=a)):(a=s,(t!==0||(f&3)!==0)&&(rc=!0)),s=u}mn!==0&&mn!==5||Do(t),Ga!==0&&(Ga=0)}function $g(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-we(f),T=1<<v,F=u[v];F===-1?((T&a)===0||(T&s)!==0)&&(u[v]=rt(T,n)):F<=n&&(t.expiredLanes|=T),f&=~T}if(n=Yt,a=xt,a=Se(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Mt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Oe(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Mt(s),Or(a)){case 2:case 8:a=be;break;case 32:a=le;break;case 268435456:a=Ie;break;default:a=le}return s=e0.bind(null,t),a=mt(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Mt(s),t.callbackPriority=2,t.callbackNode=null,2}function e0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ic()&&t.callbackNode!==a)return null;var s=xt;return s=Se(t,t===Yt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Ig(t,s,n),$g(t,b()),t.callbackNode!=null&&t.callbackNode===a?e0.bind(null,t):null)}function t0(t,n){if(ic())return null;Ig(t,n,!0)}function sy(){vy(function(){(It&6)!==0?mt(fe,ry):Jg()})}function Bf(){if(Ga===0){var t=Zr;t===0&&(t=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Ga=t}return Ga}function n0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:dl(""+t)}function i0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function oy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=n0((u[yn]||null).action),v=s.submitter;v&&(n=(n=v[yn]||null)?n0(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new _l("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ga!==0){var F=v?i0(u,v):new FormData(u);rf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(T.preventDefault(),F=v?i0(u,v):new FormData(u),rf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Hf=0;Hf<Su.length;Hf++){var Gf=Su[Hf],ly=Gf.toLowerCase(),cy=Gf[0].toUpperCase()+Gf.slice(1);Mi(ly,"on"+cy)}Mi(Op,"onAnimationEnd"),Mi(Ip,"onAnimationIteration"),Mi(Pp,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Tx,"onTransitionRun"),Mi(Ax,"onTransitionStart"),Mi(Rx,"onTransitionCancel"),Mi(zp,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),ie("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ie("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ie("onBeforeInput",["compositionend","keypress","textInput","paste"]),ie("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ie("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function a0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],F=T.instance,J=T.currentTarget;if(T=T.listener,F!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=J;try{f(u)}catch(he){yl(he)}u.currentTarget=null,f=F}else for(v=0;v<s.length;v++){if(T=s[v],F=T.instance,J=T.currentTarget,T=T.listener,F!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=J;try{f(u)}catch(he){yl(he)}u.currentTarget=null,f=F}}}}function vt(t,n){var a=n[Ir];a===void 0&&(a=n[Ir]=new Set);var s=t+"__bubble";a.has(s)||(r0(n,t,2,!1),a.add(s))}function Vf(t,n,a){var s=0;n&&(s|=4),r0(a,t,s,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function kf(t){if(!t[sc]){t[sc]=!0,q.forEach(function(a){a!=="selectionchange"&&(uy.has(a)||Vf(a,!1,t),Vf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,Vf("selectionchange",!1,n))}}function r0(t,n,a,s){switch(O0(n)){case 2:var u=Fy;break;case 8:u=By;break;default:u=ah}a=u.bind(null,n,a,t),u=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Xf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var F=v.tag;if((F===3||F===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Ma(T),v===null)return;if(F=v.tag,F===5||F===6||F===26||F===27){s=f=v;continue e}T=T.parentNode}}s=s.return}up(function(){var J=f,he=su(a),ye=[];e:{var ae=Fp.get(t);if(ae!==void 0){var oe=_l,qe=t;switch(t){case"keypress":if(ml(a)===0)break e;case"keydown":case"keyup":oe=ix;break;case"focusin":qe="focus",oe=hu;break;case"focusout":qe="blur",oe=hu;break;case"beforeblur":case"afterblur":oe=hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=sx;break;case Op:case Ip:case Pp:oe=jv;break;case zp:oe=lx;break;case"scroll":case"scrollend":oe=kv;break;case"wheel":oe=ux;break;case"copy":case"cut":case"paste":oe=Kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=mp;break;case"toggle":case"beforetoggle":oe=hx}var nt=(n&4)!==0,Wt=!nt&&(t==="scroll"||t==="scrollend"),Y=nt?ae!==null?ae+"Capture":null:ae;nt=[];for(var X=J,Q;X!==null;){var ge=X;if(Q=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||Q===null||Y===null||(ge=Js(X,Y),ge!=null&&nt.push(No(X,ge,Q))),Wt)break;X=X.return}0<nt.length&&(ae=new oe(ae,qe,null,a,he),ye.push({event:ae,listeners:nt}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",oe=t==="mouseout"||t==="pointerout",ae&&a!==ru&&(qe=a.relatedTarget||a.fromElement)&&(Ma(qe)||qe[yi]))break e;if((oe||ae)&&(ae=he.window===he?he:(ae=he.ownerDocument)?ae.defaultView||ae.parentWindow:window,oe?(qe=a.relatedTarget||a.toElement,oe=J,qe=qe?Ma(qe):null,qe!==null&&(Wt=c(qe),nt=qe.tag,qe!==Wt||nt!==5&&nt!==27&&nt!==6)&&(qe=null)):(oe=null,qe=J),oe!==qe)){if(nt=dp,ge="onMouseLeave",Y="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(nt=mp,ge="onPointerLeave",Y="onPointerEnter",X="pointer"),Wt=oe==null?ae:ar(oe),Q=qe==null?ae:ar(qe),ae=new nt(ge,X+"leave",oe,a,he),ae.target=Wt,ae.relatedTarget=Q,ge=null,Ma(he)===J&&(nt=new nt(Y,X+"enter",qe,a,he),nt.target=Q,nt.relatedTarget=Wt,ge=nt),Wt=ge,oe&&qe)t:{for(nt=fy,Y=oe,X=qe,Q=0,ge=Y;ge;ge=nt(ge))Q++;ge=0;for(var Je=X;Je;Je=nt(Je))ge++;for(;0<Q-ge;)Y=nt(Y),Q--;for(;0<ge-Q;)X=nt(X),ge--;for(;Q--;){if(Y===X||X!==null&&Y===X.alternate){nt=Y;break t}Y=nt(Y),X=nt(X)}nt=null}else nt=null;oe!==null&&s0(ye,ae,oe,nt,!1),qe!==null&&Wt!==null&&s0(ye,Wt,qe,nt,!0)}}e:{if(ae=J?ar(J):window,oe=ae.nodeName&&ae.nodeName.toLowerCase(),oe==="select"||oe==="input"&&ae.type==="file")var Dt=bp;else if(Sp(ae))if(Ep)Dt=Mx;else{Dt=yx;var Ke=xx}else oe=ae.nodeName,!oe||oe.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?J&&Si(J.elementType)&&(Dt=bp):Dt=Sx;if(Dt&&(Dt=Dt(t,J))){Mp(ye,Dt,a,he);break e}Ke&&Ke(t,ae,J),t==="focusout"&&J&&ae.type==="number"&&J.memoizedProps.value!=null&&Mn(ae,"number",ae.value)}switch(Ke=J?ar(J):window,t){case"focusin":(Sp(Ke)||Ke.contentEditable==="true")&&(Gr=Ke,vu=J,so=null);break;case"focusout":so=vu=Gr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Np(ye,a,he);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Np(ye,a,he)}var ft;if(pu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Hr?xp(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(gp&&a.locale!=="ko"&&(Hr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Hr&&(ft=fp()):(Ta=he,cu="value"in Ta?Ta.value:Ta.textContent,Hr=!0)),Ke=oc(J,yt),0<Ke.length&&(yt=new pp(yt,t,null,a,he),ye.push({event:yt,listeners:Ke}),ft?yt.data=ft:(ft=yp(a),ft!==null&&(yt.data=ft)))),(ft=px?mx(t,a):gx(t,a))&&(yt=oc(J,"onBeforeInput"),0<yt.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,he),ye.push({event:Ke,listeners:yt}),Ke.data=ft)),oy(ye,t,J,a,he)}a0(ye,n)})}function No(t,n,a){return{instance:t,listener:n,currentTarget:a}}function oc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Js(t,a),u!=null&&s.unshift(No(t,u,f)),u=Js(t,n),u!=null&&s.push(No(t,u,f))),t.tag===3)return s;t=t.return}return[]}function fy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function s0(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,F=T.alternate,J=T.stateNode;if(T=T.tag,F!==null&&F===s)break;T!==5&&T!==26&&T!==27||J===null||(F=J,u?(J=Js(a,f),J!=null&&v.unshift(No(a,J,F))):u||(J=Js(a,f),J!=null&&v.push(No(a,J,F)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var hy=/\r\n?/g,dy=/\u0000|\uFFFD/g;function o0(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(dy,"")}function l0(t,n){return n=o0(n),o0(t)===n}function Xt(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pn(t,""+s);break;case"className":et(t,"class",s);break;case"tabIndex":et(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":et(t,a,s);break;case"style":zr(t,s,f);break;case"data":if(n!=="object"){et(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=dl(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=dl(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"onScroll":s!=null&&vt("scroll",t);break;case"onScrollEnd":s!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=dl(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":vt("beforetoggle",t),vt("toggle",t),je(t,"popover",s);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gv.get(a)||a,je(t,a,s))}}function Wf(t,n,a,s,u,f){switch(a){case"style":zr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pn(t,s):(typeof s=="number"||typeof s=="bigint")&&pn(t,""+s);break;case"onScroll":s!=null&&vt("scroll",t);break;case"onScrollEnd":s!=null&&vt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):je(t,a,s)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,f,v,a,null)}}u&&Xt(t,n,"srcSet",a.srcSet,a,null),s&&Xt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var T=f=v=u=null,F=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var he=a[s];if(he!=null)switch(s){case"name":u=he;break;case"type":v=he;break;case"checked":F=he;break;case"defaultChecked":J=he;break;case"value":f=he;break;case"defaultValue":T=he;break;case"children":case"dangerouslySetInnerHTML":if(he!=null)throw Error(r(137,n));break;default:Xt(t,n,s,he,a,null)}}qi(t,f,T,F,J,v,u,!1);return;case"select":vt("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:Xt(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?si(t,!!s,n,!1):a!=null&&si(t,!!s,a,!0);return;case"textarea":vt("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Xt(t,n,v,T,a,null)}bn(t,s,u,f);return;case"option":for(F in a)a.hasOwnProperty(F)&&(s=a[F],s!=null)&&(F==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":Xt(t,n,F,s,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(s=0;s<Uo.length;s++)vt(Uo[s],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Xt(t,n,J,s,a,null)}return;default:if(Si(n)){for(he in a)a.hasOwnProperty(he)&&(s=a[he],s!==void 0&&Wf(t,n,he,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Xt(t,n,T,s,a,null))}function py(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,F=null,J=null,he=null;for(oe in a){var ye=a[oe];if(a.hasOwnProperty(oe)&&ye!=null)switch(oe){case"checked":break;case"value":break;case"defaultValue":F=ye;default:s.hasOwnProperty(oe)||Xt(t,n,oe,null,s,ye)}}for(var ae in s){var oe=s[ae];if(ye=a[ae],s.hasOwnProperty(ae)&&(oe!=null||ye!=null))switch(ae){case"type":f=oe;break;case"name":u=oe;break;case"checked":J=oe;break;case"defaultChecked":he=oe;break;case"value":v=oe;break;case"defaultValue":T=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(r(137,n));break;default:oe!==ye&&Xt(t,n,ae,oe,s,ye)}}Sn(t,v,T,F,J,he,f,u);return;case"select":oe=v=T=ae=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":oe=F;default:s.hasOwnProperty(f)||Xt(t,n,f,null,s,F)}for(u in s)if(f=s[u],F=a[u],s.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":ae=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==F&&Xt(t,n,u,f,s,F)}n=T,a=v,s=oe,ae!=null?si(t,!!a,ae,!1):!!s!=!!a&&(n!=null?si(t,!!a,n,!0):si(t,!!a,a?[]:"",!1));return;case"textarea":oe=ae=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ae=u;break;case"defaultValue":oe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Xt(t,n,v,u,s,f)}Ft(t,ae,oe);return;case"option":for(var qe in a)ae=a[qe],a.hasOwnProperty(qe)&&ae!=null&&!s.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:Xt(t,n,qe,null,s,ae));for(F in s)ae=s[F],oe=a[F],s.hasOwnProperty(F)&&ae!==oe&&(ae!=null||oe!=null)&&(F==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":Xt(t,n,F,ae,s,oe));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)ae=a[nt],a.hasOwnProperty(nt)&&ae!=null&&!s.hasOwnProperty(nt)&&Xt(t,n,nt,null,s,ae);for(J in s)if(ae=s[J],oe=a[J],s.hasOwnProperty(J)&&ae!==oe&&(ae!=null||oe!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:Xt(t,n,J,ae,s,oe)}return;default:if(Si(n)){for(var Wt in a)ae=a[Wt],a.hasOwnProperty(Wt)&&ae!==void 0&&!s.hasOwnProperty(Wt)&&Wf(t,n,Wt,void 0,s,ae);for(he in s)ae=s[he],oe=a[he],!s.hasOwnProperty(he)||ae===oe||ae===void 0&&oe===void 0||Wf(t,n,he,ae,s,oe);return}}for(var Y in a)ae=a[Y],a.hasOwnProperty(Y)&&ae!=null&&!s.hasOwnProperty(Y)&&Xt(t,n,Y,null,s,ae);for(ye in s)ae=s[ye],oe=a[ye],!s.hasOwnProperty(ye)||ae===oe||ae==null&&oe==null||Xt(t,n,ye,ae,s,oe)}function c0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function my(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&c0(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var F=a[s],J=F.startTime;if(J>T)break;var he=F.transferSize,ye=F.initiatorType;he&&c0(ye)&&(F=F.responseEnd,v+=he*(F<T?1:(T-J)/(F-J)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qf=null,Yf=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function u0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function f0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gy(){var t=window.event;return t&&t.type==="popstate"?t===Zf?!1:(Zf=t,!0):(Zf=null,!1)}var h0=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,d0=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof d0<"u"?function(t){return d0.resolve(null).then(t).catch(xy)}:h0;function xy(t){setTimeout(function(){throw t})}function Va(t){return t==="head"}function p0(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ps(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Lo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Lo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[ir]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Lo(t.ownerDocument.body);a=u}while(a);ps(n)}function m0(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Kf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Qs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function yy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ir])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function Sy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function g0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function Qf(t){return t.data==="$?"||t.data==="$~"}function Jf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function My(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var $f=null;function _0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function v0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function x0(t,n,a){switch(n=lc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Qs(t)}var pi=new Map,y0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ca=H.d;H.d={f:by,r:Ey,D:Ty,C:Ay,L:Ry,m:wy,X:Dy,S:Cy,M:Uy};function by(){var t=ca.f(),n=ec();return t||n}function Ey(t){var n=ba(t);n!==null&&n.tag===5&&n.type==="form"?zm(n):ca.r(t)}var fs=typeof document>"u"?null:document;function S0(t,n,a){var s=fs;if(s&&typeof n=="string"&&n){var u=st(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),y0.has(u)||(y0.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Cn(n,"link",t),A(n),s.head.appendChild(n)))}}function Ty(t){ca.D(t),S0("dns-prefetch",t,null)}function Ay(t,n){ca.C(t,n),S0("preconnect",t,n)}function Ry(t,n,a){ca.L(t,n,a);var s=fs;if(s&&t&&n){var u='link[rel="preload"][as="'+st(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+st(a.imageSizes)+'"]')):u+='[href="'+st(t)+'"]';var f=u;switch(n){case"style":f=hs(t);break;case"script":f=ds(t)}pi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Oo(f))||n==="script"&&s.querySelector(Io(f))||(n=s.createElement("link"),Cn(n,"link",t),A(n),s.head.appendChild(n)))}}function wy(t,n){ca.m(t,n);var a=fs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+st(s)+'"][href="'+st(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ds(t)}if(!pi.has(f)&&(t=g({rel:"modulepreload",href:t},n),pi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}s=a.createElement("link"),Cn(s,"link",t),A(s),a.head.appendChild(s)}}}function Cy(t,n,a){ca.S(t,n,a);var s=fs;if(s&&t){var u=Ea(s).hoistableStyles,f=hs(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(Oo(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(f))&&eh(t,a);var F=v=s.createElement("link");A(F),Cn(F,"link",t),F._p=new Promise(function(J,he){F.onload=J,F.onerror=he}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,uc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function Dy(t,n){ca.X(t,n);var a=fs;if(a&&t){var s=Ea(a).hoistableScripts,u=ds(t),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(t=g({src:t,async:!0},n),(n=pi.get(u))&&th(t,n),f=a.createElement("script"),A(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Uy(t,n){ca.M(t,n);var a=fs;if(a&&t){var s=Ea(a).hoistableScripts,u=ds(t),f=s.get(u);f||(f=a.querySelector(Io(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&th(t,n),f=a.createElement("script"),A(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function M0(t,n,a,s){var u=(u=te.current)?cc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hs(a.href),a=Ea(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=hs(a.href);var f=Ea(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Oo(t)))&&!f._p&&(v.instance=f,v.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),f||Ny(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ds(a),a=Ea(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function hs(t){return'href="'+st(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function b0(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ny(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),A(n),t.head.appendChild(n))}function ds(t){return'[src="'+st(t)+'"]'}function Io(t){return"script[async]"+t}function E0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+st(a.href)+'"]');if(s)return n.instance=s,A(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),A(s),Cn(s,"style",u),uc(s,a.precedence,t),n.instance=s;case"stylesheet":u=hs(a.href);var f=t.querySelector(Oo(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=b0(a),(u=pi.get(u))&&eh(s,u),f=(t.ownerDocument||t).createElement("link"),A(f);var v=f;return v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Cn(f,"link",s),n.state.loading|=4,uc(f,a.precedence,t),n.instance=f;case"script":return f=ds(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,A(u),u):(s=a,(u=pi.get(f))&&(s=g({},a),th(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Cn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,uc(s,a.precedence,t));return n.instance}function uc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function T0(t,n,a){if(fc===null){var s=new Map,u=fc=new Map;u.set(a,s)}else u=fc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ir]||f[on]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function A0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Ly(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Oy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=hs(s.href),f=n.querySelector(Oo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=hc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=b0(s),(u=pi.get(u))&&eh(s,u),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(T,F){v.onload=T,v.onerror=F}),Cn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=hc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var nh=0;function Iy(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&nh===0&&(nh=62500*my());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>nh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var dc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,dc=new Map,n.forEach(Py,t),dc=null,hc.call(t))}function Py(t,n){if(!(n.state.loading&4)){var a=dc.get(t);if(a)var s=a.get(null);else{a=new Map,dc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=hc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:P,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function zy(t,n,a,s,u,f,v,T,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function w0(t,n,a,s,u,f,v,T,F,J,he,ye){return t=new zy(t,n,a,v,F,J,he,ye,T),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),t.current=f,f.stateNode=t,n=Ou(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Fu(f),t}function C0(t){return t?(t=Xr,t):Xr}function D0(t,n,a,s,u,f){u=C0(u),s.context===null?s.context=u:s.pendingContext=u,s=Ua(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Na(t,s,n),a!==null&&(Wn(a,t,n),po(a,t,n))}function U0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ih(t,n){U0(t,n),(t=t.alternate)&&U0(t,n)}function N0(t){if(t.tag===13||t.tag===31){var n=lr(t,67108864);n!==null&&Wn(n,t,67108864),ih(t,67108864)}}function L0(t){if(t.tag===13||t.tag===31){var n=ei();n=js(n);var a=lr(t,n);a!==null&&Wn(a,t,n),ih(t,n)}}var mc=!0;function Fy(t,n,a,s){var u=L.T;L.T=null;var f=H.p;try{H.p=2,ah(t,n,a,s)}finally{H.p=f,L.T=u}}function By(t,n,a,s){var u=L.T;L.T=null;var f=H.p;try{H.p=8,ah(t,n,a,s)}finally{H.p=f,L.T=u}}function ah(t,n,a,s){if(mc){var u=rh(s);if(u===null)Xf(t,n,s,gc,a),I0(t,s);else if(Gy(u,t,n,a,s))s.stopPropagation();else if(I0(t,s),n&4&&-1<Hy.indexOf(t)){for(;u!==null;){var f=ba(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Te(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var F=1<<31-we(v);T.entanglements[1]|=F,v&=~F}Pi(f),(It&6)===0&&(Jl=b()+500,Do(0))}}break;case 31:case 13:T=lr(f,2),T!==null&&Wn(T,f,2),ec(),ih(f,2)}if(f=rh(s),f===null&&Xf(t,n,s,gc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Xf(t,n,s,null,a)}}function rh(t){return t=su(t),sh(t)}var gc=null;function sh(t){if(gc=null,t=Ma(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function O0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case fe:return 2;case be:return 8;case le:case Ye:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var oh=!1,ka=null,Xa=null,Wa=null,zo=new Map,Fo=new Map,qa=[],Hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,n){switch(t){case"focusin":case"focusout":ka=null;break;case"dragenter":case"dragleave":Xa=null;break;case"mouseover":case"mouseout":Wa=null;break;case"pointerover":case"pointerout":zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Bo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ba(n),n!==null&&N0(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Gy(t,n,a,s,u){switch(n){case"focusin":return ka=Bo(ka,t,n,a,s,u),!0;case"dragenter":return Xa=Bo(Xa,t,n,a,s,u),!0;case"mouseover":return Wa=Bo(Wa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return zo.set(f,Bo(zo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Bo(Fo.get(f)||null,t,n,a,s,u)),!0}return!1}function P0(t){var n=Ma(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){L0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Ni(t.priority,function(){L0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _c(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rh(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);ru=s,a.target.dispatchEvent(s),ru=null}else return n=ba(a),n!==null&&N0(n),t.blockedOn=a,!1;n.shift()}return!0}function z0(t,n,a){_c(t)&&a.delete(n)}function Vy(){oh=!1,ka!==null&&_c(ka)&&(ka=null),Xa!==null&&_c(Xa)&&(Xa=null),Wa!==null&&_c(Wa)&&(Wa=null),zo.forEach(z0),Fo.forEach(z0)}function vc(t,n){t.blockedOn===n&&(t.blockedOn=null,oh||(oh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vy)))}var xc=null;function F0(t){xc!==t&&(xc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(sh(s||a)===null)continue;break}var f=ba(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ps(t){function n(F){return vc(F,t)}ka!==null&&vc(ka,t),Xa!==null&&vc(Xa,t),Wa!==null&&vc(Wa,t),zo.forEach(n),Fo.forEach(n);for(var a=0;a<qa.length;a++){var s=qa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<qa.length&&(a=qa[0],a.blockedOn===null);)P0(a),a.blockedOn===null&&qa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[yn]||null;if(typeof f=="function")v||F0(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)T=v.formAction;else if(sh(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),F0(a)}}}function B0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function lh(t){this._internalRoot=t}yc.prototype.render=lh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=ei();D0(a,s,t,n,null,null)},yc.prototype.unmount=lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;D0(t.current,2,null,t,null,null),ec(),n[yi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Zs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<qa.length&&n!==0&&n<qa[a].priority;a++);qa.splice(a,0,t),a===0&&P0(t)}};var H0=e.version;if(H0!=="19.2.3")throw Error(r(527,H0,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var ky={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{me=Sc.inject(ky),Ee=Sc}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Ym,f=jm,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=w0(t,1,!1,null,null,a,s,null,u,f,v,B0),t[yi]=n.current,kf(t),new lh(n)},Go.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Ym,v=jm,T=Zm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=w0(t,1,!0,n,a??null,s,u,F,f,v,T,B0),n.context=C0(null),a=n.current,s=ei(),s=js(s),u=Ua(s),u.callback=null,Na(a,u,s),a=s,n.current.lanes=a,Un(n,a),Pi(n),t[yi]=n.current,kf(t),new yc(n)},Go.version="19.2.3",Go}var K0;function eS(){if(K0)return fh.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),fh.exports=$y(),fh.exports}var tS=eS();const nS=tv(tS),iS="modulepreload",aS=function(o){return"/horror/"+o},Q0={},rS=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=aS(_),_ in Q0)return;Q0[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":iS,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((E,w)=>{S.addEventListener("load",E),S.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function sS(o={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await rS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||r?.()}),d.register({immediate:e}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const oS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),J0=o=>{const e=lS(o);return e.charAt(0).toUpperCase()+e.slice(1)},nv=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),cS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var uS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const fS=Tt.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>Tt.createElement("svg",{ref:m,...uS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:nv("lucide",l),...!c&&!cS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>Tt.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Vs=(o,e)=>{const i=Tt.forwardRef(({className:r,...l},c)=>Tt.createElement(fS,{ref:c,iconNode:e,className:nv(`lucide-${oS(J0(o))}`,`lucide-${o}`,r),...l}));return i.displayName=J0(o),i};const hS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],iv=Vs("arrow-left",hS);const dS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],pS=Vs("circle-alert",dS);const mS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gS=Vs("eye",mS);const _S=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],vS=Vs("ghost",_S);const xS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],yS=Vs("play",xS);const SS=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],MS=Vs("wheat",SS);const Wd="182",bS=0,$0=1,ES=2,Wc=1,TS=2,Qo=3,nr=0,Yn=1,ma=2,_a=0,Os=1,e_=2,t_=3,n_=4,AS=5,wr=100,RS=101,wS=102,CS=103,DS=104,US=200,NS=201,LS=202,OS=203,Zh=204,Kh=205,IS=206,PS=207,zS=208,FS=209,BS=210,HS=211,GS=212,VS=213,kS=214,Qh=0,Jh=1,$h=2,Ps=3,ed=4,td=5,nd=6,id=7,av=0,XS=1,WS=2,Gi=0,rv=1,sv=2,ov=3,lv=4,cv=5,uv=6,fv=7,hv=300,Nr=301,zs=302,ad=303,rd=304,nu=306,nl=1e3,ga=1001,sd=1002,dn=1003,qS=1004,Mc=1005,In=1006,mh=1007,Dr=1008,ii=1009,dv=1010,pv=1011,il=1012,qd=1013,ki=1014,Bi=1015,ya=1016,Yd=1017,jd=1018,al=1020,mv=35902,gv=35899,_v=1021,vv=1022,Ci=1023,Sa=1026,Ur=1027,xv=1028,Zd=1029,Fs=1030,Kd=1031,Qd=1033,qc=33776,Yc=33777,jc=33778,Zc=33779,od=35840,ld=35841,cd=35842,ud=35843,fd=36196,hd=37492,dd=37496,pd=37488,md=37489,gd=37490,_d=37491,vd=37808,xd=37809,yd=37810,Sd=37811,Md=37812,bd=37813,Ed=37814,Td=37815,Ad=37816,Rd=37817,wd=37818,Cd=37819,Dd=37820,Ud=37821,Nd=36492,Ld=36494,Od=36495,Id=36283,Pd=36284,zd=36285,Fd=36286,YS=3200,yv=0,jS=1,er="",gi="srgb",Bs="srgb-linear",Qc="linear",Gt="srgb",ms=7680,i_=519,ZS=512,KS=513,QS=514,Jd=515,JS=516,$S=517,$d=518,eM=519,Bd=35044,a_="300 es",Hi=2e3,Jc=2001;function Sv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function rl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function tM(){const o=rl("canvas");return o.style.display="block",o}const r_={};function $c(...o){const e="THREE."+o.shift();console.log(e,...o)}function ot(...o){const e="THREE."+o.shift();console.warn(e,...o)}function At(...o){const e="THREE."+o.shift();console.error(e,...o)}function sl(...o){const e=o.join(" ");e in r_||(r_[e]=!0,ot(...o))}function nM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class ks{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const el=Math.PI/180,Hs=180/Math.PI;function va(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function St(o,e,i){return Math.max(e,Math.min(i,o))}function ep(o,e){return(o%e+e)%e}function iM(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function aM(o,e,i){return o!==e?(i-o)/(e-o):0}function tl(o,e,i){return(1-i)*o+i*e}function rM(o,e,i,r){return tl(o,e,1-Math.exp(-i*r))}function sM(o,e=1){return e-Math.abs(ep(o,e*2)-e)}function oM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function lM(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function cM(o,e){return o+Math.floor(Math.random()*(e-o+1))}function uM(o,e){return o+Math.random()*(e-o)}function fM(o){return o*(.5-Math.random())}function hM(o){o!==void 0&&(s_=o);let e=s_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dM(o){return o*el}function pM(o){return o*Hs}function mM(o){return(o&o-1)===0&&o!==0}function gM(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function _M(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function vM(o,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((e+r)/2),_=h((e+r)/2),g=c((e-r)/2),y=h((e-r)/2),S=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":o.set(d*_,m*g,m*y,d*p);break;case"YZY":o.set(m*y,d*_,m*g,d*p);break;case"ZXZ":o.set(m*g,m*y,d*_,d*p);break;case"XZX":o.set(d*_,m*E,m*S,d*p);break;case"YXY":o.set(m*S,d*_,m*E,d*p);break;case"ZYZ":o.set(m*E,m*S,d*_,d*p);break;default:ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Vt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:el,RAD2DEG:Hs,generateUUID:va,clamp:St,euclideanModulo:ep,mapLinear:iM,inverseLerp:aM,lerp:tl,damp:rM,pingpong:sM,smoothstep:oM,smootherstep:lM,randInt:cM,randFloat:uM,randFloatSpread:fM,seededRandom:hM,degToRad:dM,radToDeg:pM,isPowerOfTwo:mM,ceilPowerOfTwo:gM,floorPowerOfTwo:_M,setQuaternionFromProperEuler:vM,normalize:Vt,denormalize:wi};class gt{constructor(e=0,i=0){gt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],y=c[h+0],S=c[h+1],E=c[h+2],w=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=w;return}if(g!==w||m!==y||p!==S||_!==E){let M=m*y+p*S+_*E+g*w;M<0&&(y=-y,S=-S,E=-E,w=-w,M=-M);let x=1-d;if(M<.9995){const O=Math.acos(M),P=Math.sin(O);x=Math.sin(x*O)/P,d=Math.sin(d*O)/P,m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+w*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+w*d;const O=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=O,p*=O,_*=O,g*=O}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+m*S-p*y,e[i+1]=m*E+_*y+p*g-d*S,e[i+2]=p*E+_*S+d*y-m*g,e[i+3]=_*E-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(o_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(o_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gh.copy(this).projectOnVector(e),this.sub(gh)}reflect(e){return this.sub(gh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(St(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new $,o_=new ll;class ht{constructor(e,i,r,l,c,h,d,m,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],w=l[0],M=l[3],x=l[6],O=l[1],P=l[4],N=l[7],z=l[2],G=l[5],I=l[8];return c[0]=h*w+d*O+m*z,c[3]=h*M+d*P+m*G,c[6]=h*x+d*N+m*I,c[1]=p*w+_*O+g*z,c[4]=p*M+_*P+g*G,c[7]=p*x+_*N+g*I,c[2]=y*w+S*O+E*z,c[5]=y*M+S*P+E*G,c[8]=y*x+S*N+E*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=g*w,e[1]=(l*p-_*r)*w,e[2]=(d*r-l*h)*w,e[3]=y*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-d*i)*w,e[6]=S*w,e[7]=(r*m-p*i)*w,e[8]=(h*i-r*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(_h.makeScale(e,i)),this}rotate(e){return this.premultiply(_h.makeRotation(-e)),this}translate(e,i){return this.premultiply(_h.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _h=new ht,l_=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),c_=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const o={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Gt&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Gt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===er?Qc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return sl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return sl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Bs]:{primaries:e,whitePoint:r,transfer:Qc,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:l_,fromXYZ:c_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),o}const Ct=yM();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Is(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let gs;class SM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{gs===void 0&&(gs=rl("canvas")),gs.width=e.width,gs.height=e.height;const l=gs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=gs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=rl("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=xa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(xa(i[r]/255)*255):i[r]=xa(i[r]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MM=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(vh(l[h].image)):c.push(vh(l[h]))}else c=vh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function vh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?SM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let bM=0;const xh=new $;class Pn extends ks{constructor(e=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,r=ga,l=ga,c=In,h=Dr,d=Ci,m=ii,p=Pn.DEFAULT_ANISOTROPY,_=er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=va(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xh).x}get height(){return this.source.getSize(xh).y}get depth(){return this.source.getSize(xh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nl:e.x=e.x-Math.floor(e.x);break;case ga:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nl:e.y=e.y-Math.floor(e.y);break;case ga:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=hv;Pn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],E=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-w)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+w)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,N=(S+1)/2,z=(x+1)/2,G=(_+y)/4,I=(g+w)/4,Z=(E+M)/4;return P>N&&P>z?P<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(P),l=G/r,c=I/r):N>z?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=G/l,c=Z/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=I/c,l=Z/c),this.set(r,l,c,i),this}let O=Math.sqrt((M-E)*(M-E)+(g-w)*(g-w)+(y-_)*(y-_));return Math.abs(O)<.001&&(O=1),this.x=(M-E)/O,this.y=(g-w)/O,this.z=(y-_)/O,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=St(this.x,e.x,i.x),this.y=St(this.y,e.y,i.y),this.z=St(this.z,e.z,i.z),this.w=St(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=St(this.x,e,i),this.y=St(this.y,e,i),this.z=St(this.z,e,i),this.w=St(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(St(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EM extends ks{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Pn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new tp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vi extends EM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mv extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=dn,this.minFilter=dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TM extends Pn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=dn,this.minFilter=dn,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ti.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ti.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ti.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ti):Ti.fromBufferAttribute(c,h),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bc.copy(r.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Ec.subVectors(this.max,Vo),_s.subVectors(e.a,Vo),vs.subVectors(e.b,Vo),xs.subVectors(e.c,Vo),ja.subVectors(vs,_s),Za.subVectors(xs,vs),Sr.subVectors(_s,xs);let i=[0,-ja.z,ja.y,0,-Za.z,Za.y,0,-Sr.z,Sr.y,ja.z,0,-ja.x,Za.z,0,-Za.x,Sr.z,0,-Sr.x,-ja.y,ja.x,0,-Za.y,Za.x,0,-Sr.y,Sr.x,0];return!yh(i,_s,vs,xs,Ec)||(i=[1,0,0,0,1,0,0,0,1],!yh(i,_s,vs,xs,Ec))?!1:(Tc.crossVectors(ja,Za),i=[Tc.x,Tc.y,Tc.z],yh(i,_s,vs,xs,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ua),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ua=[new $,new $,new $,new $,new $,new $,new $,new $],Ti=new $,bc=new cl,_s=new $,vs=new $,xs=new $,ja=new $,Za=new $,Sr=new $,Vo=new $,Ec=new $,Tc=new $,Mr=new $;function yh(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Mr.fromArray(o,c);const d=l.x*Math.abs(Mr.x)+l.y*Math.abs(Mr.y)+l.z*Math.abs(Mr.z),m=e.dot(Mr),p=i.dot(Mr),_=r.dot(Mr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const AM=new cl,ko=new $,Sh=new $;class np{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):AM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Sh)),this.expandByPoint(ko.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fa=new $,Mh=new $,Ac=new $,Ka=new $,bh=new $,Rc=new $,Eh=new $;class bv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=fa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Mh.copy(e).add(i).multiplyScalar(.5),Ac.copy(i).sub(e).normalize(),Ka.copy(this.origin).sub(Mh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Ac),d=Ka.dot(this.direction),m=-Ka.dot(Ac),p=Ka.lengthSq(),_=Math.abs(1-h*h);let g,y,S,E;if(_>0)if(g=h*m-d,y=h*d-m,E=c*_,g>=0)if(y>=-E)if(y<=E){const w=1/_;g*=w,y*=w,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Mh).addScaledVector(Ac,y),S}intersectSphere(e,i){fa.subVectors(e.center,this.origin);const r=fa.dot(this.direction),l=fa.dot(fa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,fa)!==null}intersectTriangle(e,i,r,l,c){bh.subVectors(i,e),Rc.subVectors(r,e),Eh.crossVectors(bh,Rc);let h=this.direction.dot(Eh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ka.subVectors(this.origin,e);const m=d*this.direction.dot(Rc.crossVectors(Ka,Rc));if(m<0)return null;const p=d*this.direction.dot(bh.cross(Ka));if(p<0||m+p>h)return null;const _=-d*Ka.dot(Eh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class en{constructor(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M)}set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/ys.setFromMatrixColumn(e,0).length(),c=1/ys.setFromMatrixColumn(e,1).length(),h=1/ys.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,E=d*_,w=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-w*p,i[9]=-d*m,i[2]=w-y*p,i[6]=E+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,S=m*g,E=p*_,w=p*g;i[0]=y+w*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=w+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,S=m*g,E=p*_,w=p*g;i[0]=y-w*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=w-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,S=h*g,E=d*_,w=d*g;i[0]=m*_,i[4]=E*p-S,i[8]=y*p+w,i[1]=m*g,i[5]=w*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=w-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+E,i[10]=y-w*g}else if(e.order==="XZY"){const y=h*m,S=h*p,E=d*m,w=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+w,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=w*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RM,e,wM)}lookAt(e,i,r){const l=this.elements;return ti.subVectors(e,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Qa.crossVectors(r,ti),Qa.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Qa.crossVectors(r,ti)),Qa.normalize(),wc.crossVectors(ti,Qa),l[0]=Qa.x,l[4]=wc.x,l[8]=ti.x,l[1]=Qa.y,l[5]=wc.y,l[9]=ti.y,l[2]=Qa.z,l[6]=wc.z,l[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],w=r[6],M=r[10],x=r[14],O=r[3],P=r[7],N=r[11],z=r[15],G=l[0],I=l[4],Z=l[8],R=l[12],C=l[1],V=l[5],re=l[9],K=l[13],pe=l[2],ue=l[6],L=l[10],H=l[14],ee=l[3],Me=l[7],xe=l[11],U=l[15];return c[0]=h*G+d*C+m*pe+p*ee,c[4]=h*I+d*V+m*ue+p*Me,c[8]=h*Z+d*re+m*L+p*xe,c[12]=h*R+d*K+m*H+p*U,c[1]=_*G+g*C+y*pe+S*ee,c[5]=_*I+g*V+y*ue+S*Me,c[9]=_*Z+g*re+y*L+S*xe,c[13]=_*R+g*K+y*H+S*U,c[2]=E*G+w*C+M*pe+x*ee,c[6]=E*I+w*V+M*ue+x*Me,c[10]=E*Z+w*re+M*L+x*xe,c[14]=E*R+w*K+M*H+x*U,c[3]=O*G+P*C+N*pe+z*ee,c[7]=O*I+P*V+N*ue+z*Me,c[11]=O*Z+P*re+N*L+z*xe,c[15]=O*R+P*K+N*H+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],w=e[7],M=e[11],x=e[15],O=m*S-p*y,P=d*S-p*g,N=d*y-m*g,z=h*S-p*_,G=h*y-m*_,I=h*g-d*_;return i*(w*O-M*P+x*N)-r*(E*O-M*z+x*G)+l*(E*P-w*z+x*I)-c*(E*N-w*G+M*I)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],w=e[13],M=e[14],x=e[15],O=g*M*p-w*y*p+w*m*S-d*M*S-g*m*x+d*y*x,P=E*y*p-_*M*p-E*m*S+h*M*S+_*m*x-h*y*x,N=_*w*p-E*g*p+E*d*S-h*w*S-_*d*x+h*g*x,z=E*g*m-_*w*m-E*d*y+h*w*y+_*d*M-h*g*M,G=i*O+r*P+l*N+c*z;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/G;return e[0]=O*I,e[1]=(w*y*c-g*M*c-w*l*S+r*M*S+g*l*x-r*y*x)*I,e[2]=(d*M*c-w*m*c+w*l*p-r*M*p-d*l*x+r*m*x)*I,e[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*I,e[4]=P*I,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*x+i*y*x)*I,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*I,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*I,e[8]=N*I,e[9]=(E*g*c-_*w*c-E*r*S+i*w*S+_*r*x-i*g*x)*I,e[10]=(h*w*c-E*d*c+E*r*p-i*w*p-h*r*x+i*d*x)*I,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*S-i*d*S)*I,e[12]=z*I,e[13]=(_*w*l-E*g*l+E*r*y-i*w*y-_*r*M+i*g*M)*I,e[14]=(E*d*l-h*w*l-E*r*m+i*w*m+h*r*M-i*d*M)*I,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*I,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,E=c*g,w=h*_,M=h*g,x=d*g,O=m*p,P=m*_,N=m*g,z=r.x,G=r.y,I=r.z;return l[0]=(1-(w+x))*z,l[1]=(S+N)*z,l[2]=(E-P)*z,l[3]=0,l[4]=(S-N)*G,l[5]=(1-(y+x))*G,l[6]=(M+O)*G,l[7]=0,l[8]=(E+P)*I,l[9]=(M-O)*I,l[10]=(1-(y+w))*I,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=ys.set(l[0],l[1],l[2]).length();const h=ys.set(l[4],l[5],l[6]).length(),d=ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ai.copy(this);const p=1/c,_=1/h,g=1/d;return Ai.elements[0]*=p,Ai.elements[1]*=p,Ai.elements[2]*=p,Ai.elements[4]*=_,Ai.elements[5]*=_,Ai.elements[6]*=_,Ai.elements[8]*=g,Ai.elements[9]*=g,Ai.elements[10]*=g,i.setFromRotationMatrix(Ai),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,w;if(m)E=c/(h-c),w=h*c/(h-c);else if(d===Hi)E=-(h+c)/(h-c),w=-2*h*c/(h-c);else if(d===Jc)E=-h/(h-c),w=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Hi,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,w;if(m)E=1/(h-c),w=h/(h-c);else if(d===Hi)E=-2/(h-c),w=-(h+c)/(h-c);else if(d===Jc)E=-1/(h-c),w=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ys=new $,Ai=new en,RM=new $(0,0,0),wM=new $(1,1,1),Qa=new $,wc=new $,ti=new $,u_=new en,f_=new ll;class Xi{constructor(e=0,i=0,r=0,l=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(St(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-St(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return u_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(u_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return f_.setFromEuler(this),this.setFromQuaternion(f_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CM=0;const h_=new $,Ss=new ll,ha=new en,Cc=new $,Xo=new $,DM=new $,UM=new ll,d_=new $(1,0,0),p_=new $(0,1,0),m_=new $(0,0,1),g_={type:"added"},NM={type:"removed"},Ms={type:"childadded",child:null},Th={type:"childremoved",child:null};class Dn extends ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new $,i=new Xi,r=new ll,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new en},normalMatrix:{value:new ht}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,i){return Ss.setFromAxisAngle(e,i),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(p_,e)}rotateZ(e){return this.rotateOnAxis(m_,e)}translateOnAxis(e,i){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(p_,e)}translateZ(e){return this.translateOnAxis(m_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Cc.copy(e):Cc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Xo,Cc,this.up):ha.lookAt(Cc,Xo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),Ss.setFromRotationMatrix(ha),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(NM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ha.multiply(e.parent.matrixWorld)),e.applyMatrix4(ha),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g_),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,DM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,UM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new $(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new $,da=new $,Ah=new $,pa=new $,bs=new $,Es=new $,__=new $,Rh=new $,wh=new $,Ch=new $,Dh=new an,Uh=new an,Nh=new an;class _i{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ri.subVectors(l,i),da.subVectors(r,i),Ah.subVectors(e,i);const h=Ri.dot(Ri),d=Ri.dot(da),m=Ri.dot(Ah),p=da.dot(da),_=da.dot(Ah),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,E=(h*_-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(h,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Dh.setScalar(0),Uh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,i),Uh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Dh,c.x),h.addScaledVector(Uh,c.y),h.addScaledVector(Nh,c.z),h}static isFrontFacing(e,i,r,l){return Ri.subVectors(r,i),da.subVectors(e,i),Ri.cross(da).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ri.cross(da).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return _i.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return _i.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;bs.subVectors(l,r),Es.subVectors(c,r),Rh.subVectors(e,r);const m=bs.dot(Rh),p=Es.dot(Rh);if(m<=0&&p<=0)return i.copy(r);wh.subVectors(e,l);const _=bs.dot(wh),g=Es.dot(wh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(bs,h);Ch.subVectors(e,c);const S=bs.dot(Ch),E=Es.dot(Ch);if(E>=0&&S<=E)return i.copy(c);const w=S*p-m*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Es,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return __.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(__,d);const x=1/(M+w+y);return h=w*x,d=y*x,i.copy(r).addScaledVector(bs,h).addScaledVector(Es,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ja={h:0,s:0,l:0},Dc={h:0,s:0,l:0};function Lh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Et{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ct.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ct.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ct.workingColorSpace){if(e=ep(e,1),i=St(i,0,1),r=St(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Lh(h,c,e+1/3),this.g=Lh(h,c,e),this.b=Lh(h,c,e-1/3)}return Ct.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Ct.workingToColorSpace(On.copy(this),e),Math.round(St(On.r*255,0,255))*65536+Math.round(St(On.g*255,0,255))*256+Math.round(St(On.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ct.workingColorSpace){Ct.workingToColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ct.workingColorSpace){return Ct.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=gi){Ct.workingToColorSpace(On.copy(this),e);const i=On.r,r=On.g,l=On.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ja),this.setHSL(Ja.h+e,Ja.s+i,Ja.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ja),e.getHSL(Dc);const r=tl(Ja.h,Dc.h,i),l=tl(Ja.s,Dc.s,i),c=tl(Ja.l,Dc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Et;Et.NAMES=Ev;let LM=0;class Xs extends ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=va(),this.name="",this.type="Material",this.blending=Os,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zh,this.blendDst=Kh,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(r.blending=this.blending),this.side!==nr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Zh&&(r.blendSrc=this.blendSrc),this.blendDst!==Kh&&(r.blendDst=this.blendDst),this.blendEquation!==wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ap extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new $,Uc=new gt;let OM=0;class Di{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Bd,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=wi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=wi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=wi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=wi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array),l=Vt(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array),l=Vt(l,this.array),c=Vt(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bd&&(e.usage=this.usage),e}}class Tv extends Di{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Av extends Di{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class vi extends Di{constructor(e,i,r){super(new Float32Array(e),i,r)}}let IM=0;const mi=new en,Oh=new Dn,Ts=new $,ni=new cl,Wo=new cl,xn=new $;class Ui extends ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sv(e)?Av:Tv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new np);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Wo.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ni.min,Wo.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Wo.max),ni.expandByPoint(xn)):(ni.expandByPoint(Wo.min),ni.expandByPoint(Wo.max))}ni.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)xn.fromBufferAttribute(d,p),m&&(Ts.fromBufferAttribute(e,p),xn.add(Ts)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<r.count;Z++)d[Z]=new $,m[Z]=new $;const p=new $,_=new $,g=new $,y=new gt,S=new gt,E=new gt,w=new $,M=new $;function x(Z,R,C){p.fromBufferAttribute(r,Z),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,Z),S.fromBufferAttribute(c,R),E.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(w.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(V),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),d[Z].add(w),d[R].add(w),d[C].add(w),m[Z].add(M),m[R].add(M),m[C].add(M))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let Z=0,R=O.length;Z<R;++Z){const C=O[Z],V=C.start,re=C.count;for(let K=V,pe=V+re;K<pe;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const P=new $,N=new $,z=new $,G=new $;function I(Z){z.fromBufferAttribute(l,Z),G.copy(z);const R=d[Z];P.copy(R),P.sub(z.multiplyScalar(z.dot(R))).normalize(),N.crossVectors(G,R);const V=N.dot(m[Z])<0?-1:1;h.setXYZW(Z,P.x,P.y,P.z,V)}for(let Z=0,R=O.length;Z<R;++Z){const C=O[Z],V=C.start,re=C.count;for(let K=V,pe=V+re;K<pe;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,_=new $,g=new $;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),w=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,E=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let x=0;x<_;x++)y[E++]=p[S++]}return new Di(y,_,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ui,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new en,br=new bv,Nc=new np,x_=new $,Lc=new $,Oc=new $,Ic=new $,Ih=new $,Pc=new $,y_=new $,zc=new $;class ai extends Dn{constructor(e=new Ui,i=new ap){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Ih.fromBufferAttribute(g,e),h?Pc.addScaledVector(Ih,_):Pc.addScaledVector(Ih.sub(i),_))}i.add(Pc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nc.copy(r.boundingSphere),Nc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Nc.containsPoint(br.origin)===!1&&(br.intersectSphere(Nc,x_)===null||br.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(v_.copy(c).invert(),br.copy(e.ray).applyMatrix4(v_),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,w=y.length;E<w;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),P=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let N=O,z=P;N<z;N+=3){const G=d.getX(N),I=d.getX(N+1),Z=d.getX(N+2);l=Fc(this,x,e,r,p,_,g,G,I,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=E,x=w;M<x;M+=3){const O=d.getX(M),P=d.getX(M+1),N=d.getX(M+2);l=Fc(this,h,e,r,p,_,g,O,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,w=y.length;E<w;E++){const M=y[E],x=h[M.materialIndex],O=Math.max(M.start,S.start),P=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let N=O,z=P;N<z;N+=3){const G=N,I=N+1,Z=N+2;l=Fc(this,x,e,r,p,_,g,G,I,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=E,x=w;M<x;M+=3){const O=M,P=M+1,N=M+2;l=Fc(this,h,e,r,p,_,g,O,P,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function PM(o,e,i,r,l,c,h,d){let m;if(e.side===Yn?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===nr,d),m===null)return null;zc.copy(d),zc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(zc);return p<i.near||p>i.far?null:{distance:p,point:zc.clone(),object:o}}function Fc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Lc),o.getVertexPosition(m,Oc),o.getVertexPosition(p,Ic);const _=PM(o,e,i,r,Lc,Oc,Ic,y_);if(_){const g=new $;_i.getBarycoord(y_,Lc,Oc,Ic,g),l&&(_.uv=_i.getInterpolatedAttribute(l,d,m,p,g,new gt)),c&&(_.uv1=_i.getInterpolatedAttribute(c,d,m,p,g,new gt)),h&&(_.normal=_i.getInterpolatedAttribute(h,d,m,p,g,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new $,materialIndex:0};_i.getNormal(Lc,Oc,Ic,y.normal),_.face=y,_.barycoord=g}return _}class Ws extends Ui{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new vi(p,3)),this.setAttribute("normal",new vi(_,3)),this.setAttribute("uv",new vi(g,2));function E(w,M,x,O,P,N,z,G,I,Z,R){const C=N/I,V=z/Z,re=N/2,K=z/2,pe=G/2,ue=I+1,L=Z+1;let H=0,ee=0;const Me=new $;for(let xe=0;xe<L;xe++){const U=xe*V-K;for(let ne=0;ne<ue;ne++){const _e=ne*C-re;Me[w]=_e*O,Me[M]=U*P,Me[x]=pe,p.push(Me.x,Me.y,Me.z),Me[w]=0,Me[M]=0,Me[x]=G>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ne/I),g.push(1-xe/Z),H+=1}}for(let xe=0;xe<Z;xe++)for(let U=0;U<I;U++){const ne=y+U+ue*xe,_e=y+U+ue*(xe+1),Le=y+(U+1)+ue*(xe+1),Ve=y+(U+1)+ue*xe;m.push(ne,_e,Ve),m.push(_e,Le,Ve),ee+=6}d.addGroup(S,ee,R),S+=ee,y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const r=Gs(o[i]);for(const l in r)e[l]=r[l]}return e}function zM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const FM={clone:Gs,merge:Bn};var BM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,HM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BM,this.fragmentShader=HM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class wv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $a=new $,S_=new gt,M_=new gt;class qn extends wv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Hs*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){$a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($a.x,$a.y).multiplyScalar(-e/$a.z),$a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($a.x,$a.y).multiplyScalar(-e/$a.z)}getViewSize(e,i){return this.getViewBounds(e,S_,M_),i.subVectors(M_,S_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(el*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const As=-90,Rs=1;class GM extends Dn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(As,Rs,e,i);l.layers=this.layers,this.add(l);const c=new qn(As,Rs,e,i);c.layers=this.layers,this.add(c);const h=new qn(As,Rs,e,i);h.layers=this.layers,this.add(h);const d=new qn(As,Rs,e,i);d.layers=this.layers,this.add(d);const m=new qn(As,Rs,e,i);m.layers=this.layers,this.add(m);const p=new qn(As,Rs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Cv extends Pn{constructor(e=[],i=Nr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dv extends Vi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Cv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ws(5,5,5),c=new Wi({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:_a});c.uniforms.tEquirect.value=i;const h=new ai(l,c),d=i.minFilter;return i.minFilter===Dr&&(i.minFilter=In),new GM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Jo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const VM={type:"move"};class Ph{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,r),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(VM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Jo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class eu{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(e),this.density=i}clone(){return new eu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kM extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class XM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=Bd,this.updateRanges=[],this.version=0,this.uuid=va()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fn=new $;class tu{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyMatrix4(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.applyNormalMatrix(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Fn.fromBufferAttribute(this,i),Fn.transformDirection(e),this.setXYZ(i,Fn.x,Fn.y,Fn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=wi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Vt(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Vt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=wi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=wi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=wi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=wi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array),l=Vt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Vt(i,this.array),r=Vt(r,this.array),l=Vt(l,this.array),c=Vt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){$c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new Di(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new tu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hd extends Xs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const qo=new $,Cs=new $,Ds=new $,Us=new gt,Yo=new gt,Uv=new en,Bc=new $,jo=new $,Hc=new $,b_=new gt,zh=new gt,E_=new gt;class T_ extends Dn{constructor(e=new Hd){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Ui;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new XM(i,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new tu(r,3,0,!1)),ws.setAttribute("uv",new tu(r,2,3,!1))}this.geometry=ws,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&At('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Uv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Ds.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;Gc(Bc.set(-.5,-.5,0),Ds,h,Cs,l,c),Gc(jo.set(.5,-.5,0),Ds,h,Cs,l,c),Gc(Hc.set(.5,.5,0),Ds,h,Cs,l,c),b_.set(0,0),zh.set(1,0),E_.set(1,1);let d=e.ray.intersectTriangle(Bc,jo,Hc,!1,qo);if(d===null&&(Gc(jo.set(-.5,.5,0),Ds,h,Cs,l,c),zh.set(0,1),d=e.ray.intersectTriangle(Bc,Hc,jo,!1,qo),d===null))return;const m=e.ray.origin.distanceTo(qo);m<e.near||m>e.far||i.push({distance:m,point:qo.clone(),uv:_i.getInterpolation(qo,Bc,jo,Hc,b_,zh,E_,new gt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gc(o,e,i,r,l,c){Us.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?(Yo.x=c*Us.x-l*Us.y,Yo.y=l*Us.x+c*Us.y):Yo.copy(Us),o.copy(e),o.x+=Yo.x,o.y+=Yo.y,o.applyMatrix4(Uv)}class WM extends Pn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=dn,_=dn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Fh=new $,qM=new $,YM=new ht;class Rr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Fh.subVectors(r,i).cross(qM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Fh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||YM.getNormalMatrix(e),l=this.coplanarPoint(Fh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new np,jM=new gt(.5,.5),Vc=new $;class rp{constructor(e=new Rr,i=new Rr,r=new Rr,l=new Rr,c=new Rr,h=new Rr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Hi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],E=c[8],w=c[9],M=c[10],x=c[11],O=c[12],P=c[13],N=c[14],z=c[15];if(l[0].setComponents(p-h,S-_,x-E,z-O).normalize(),l[1].setComponents(p+h,S+_,x+E,z+O).normalize(),l[2].setComponents(p+d,S+g,x+w,z+P).normalize(),l[3].setComponents(p-d,S-g,x-w,z-P).normalize(),r)l[4].setComponents(m,y,M,N).normalize(),l[5].setComponents(p-m,S-y,x-M,z-N).normalize();else if(l[4].setComponents(p-m,S-y,x-M,z-N).normalize(),i===Hi)l[5].setComponents(p+m,S+y,x+M,z+N).normalize();else if(i===Jc)l[5].setComponents(m,y,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){Er.center.set(0,0,0);const i=jM.distanceTo(e.center);return Er.radius=.7071067811865476+i,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Vc.x=l.normal.x>0?e.max.x:e.min.x,Vc.y=l.normal.y>0?e.max.y:e.min.y,Vc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ol extends Pn{constructor(e,i,r=ki,l,c,h,d=dn,m=dn,p,_=Sa,g=1){if(_!==Sa&&_!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ZM extends ol{constructor(e,i=ki,r=Nr,l,c,h=dn,d=dn,m,p=Sa){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nv extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ul extends Ui{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,y=i/m,S=[],E=[],w=[],M=[];for(let x=0;x<_;x++){const O=x*y-h;for(let P=0;P<p;P++){const N=P*g-c;E.push(N,-O,0),w.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let O=0;O<d;O++){const P=O+p*x,N=O+p*(x+1),z=O+1+p*(x+1),G=O+1+p*x;S.push(P,N,G),S.push(N,z,G)}this.setIndex(S),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(w,3)),this.setAttribute("uv",new vi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.widthSegments,e.heightSegments)}}class sp extends Ui{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new $,g=new $,y=new $;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const w=E/l*c,M=S/r*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(w),g.y=(e+i*Math.cos(M))*Math.sin(w),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(w),_.y=e*Math.sin(w),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const w=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,O=(l+1)*S+E;h.push(w,M,O),h.push(M,x,O)}this.setIndex(h),this.setAttribute("position",new vi(d,3)),this.setAttribute("normal",new vi(m,3)),this.setAttribute("uv",new vi(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class KM extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Bh extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yv,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QM extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JM extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class $M{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],E=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const eb=new $M;class op{constructor(e){this.manager=e!==void 0?e:eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}op.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ns=new WeakMap;class tb extends op{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Hh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Ns.get(h);g===void 0&&(g=[],Ns.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=rl("img");function m(){_(),i&&i(this);const g=Ns.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}Ns.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Hh.remove(`image:${e}`);const y=Ns.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(g)}Ns.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Hh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class nb extends op{constructor(e){super(e)}load(e,i,r,l){const c=new Pn,h=new tb(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class lp extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Gh=new en,A_=new $,R_=new $;class Lv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;A_.setFromMatrixPosition(e.matrixWorld),i.position.copy(A_),R_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(R_),i.updateMatrixWorld(),Gh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ib extends Lv{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=Hs*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ab extends lp{constructor(e,i,r=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new ib}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class rb extends Lv{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vh extends lp{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new rb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class Ov extends wv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sb extends lp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ob extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const w_=new en;class lb{constructor(e,i,r=0,l=1/0){this.ray=new bv(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new ip,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):At("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return w_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(w_),this}intersectObject(e,i=!0,r=[]){return Gd(e,this,r,i),r.sort(C_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Gd(e[l],this,r,i);return r.sort(C_),r}}function C_(o,e){return o.distance-e.distance}function Gd(o,e,i,r){let l=!0;if(o.layers.test(e.layers)&&o.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=o.children;for(let h=0,d=c.length;h<d;h++)Gd(c[h],e,i,!0)}}function D_(o,e,i,r){const l=cb(r);switch(i){case _v:return o*e;case xv:return o*e/l.components*l.byteLength;case Zd:return o*e/l.components*l.byteLength;case Fs:return o*e*2/l.components*l.byteLength;case Kd:return o*e*2/l.components*l.byteLength;case vv:return o*e*3/l.components*l.byteLength;case Ci:return o*e*4/l.components*l.byteLength;case Qd:return o*e*4/l.components*l.byteLength;case qc:case Yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(o,16)*Math.max(e,8)/4;case od:case cd:return Math.max(o,8)*Math.max(e,8)/2;case fd:case hd:case pd:case md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dd:case gd:case _d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case yd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Td:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Ld:case Od:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Id:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case zd:case Fd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cb(o){switch(o){case ii:case dv:return{byteLength:1,components:1};case il:case pv:case ya:return{byteLength:2,components:1};case Yd:case jd:return{byteLength:2,components:4};case ki:case qd:case Bi:return{byteLength:4,components:1};case mv:case gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wd}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wd);function Iv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ub(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],w=g[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++y,g[y]=w)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const w=g[S];o.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hb=`#ifdef USE_ALPHAHASH
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
#endif`,db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
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
#endif`,vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xb=`#ifdef USE_BATCHING
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
#endif`,yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ob=`#define PI 3.141592653589793
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
} // validated`,Ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pb=`vec3 transformedNormal = objectNormal;
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
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kb=`#ifdef USE_ENVMAP
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
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,$b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
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
#endif`,cE=`uniform sampler2D dfgLUT;
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
}`,uE=`
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_E=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,SE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ME=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,EE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LE=`#ifdef USE_NORMALMAP
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
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZE=`float getShadowMask() {
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
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,eT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`#include <common>
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
}`,_T=`#if DEPTH_PACKING == 3200
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
}`,vT=`#define DISTANCE
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
}`,xT=`#define DISTANCE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ST=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`uniform float scale;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
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
}`,wT=`#define MATCAP
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
}`,CT=`#define MATCAP
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
}`,DT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,NT=`#define PHONG
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
}`,LT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,IT=`#define STANDARD
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
}`,PT=`#define TOON
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
}`,zT=`#define TOON
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
}`,FT=`uniform float size;
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
}`,BT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,GT=`uniform vec3 color;
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
}`,VT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:fb,alphahash_pars_fragment:hb,alphamap_fragment:db,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:vb,batching_pars_vertex:xb,batching_vertex:yb,begin_vertex:Sb,beginnormal_vertex:Mb,bsdfs:bb,iridescence_fragment:Eb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:Ab,clipping_planes_pars_fragment:Rb,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Cb,color_fragment:Db,color_pars_fragment:Ub,color_pars_vertex:Nb,color_vertex:Lb,common:Ob,cube_uv_reflection_fragment:Ib,defaultnormal_vertex:Pb,displacementmap_pars_vertex:zb,displacementmap_vertex:Fb,emissivemap_fragment:Bb,emissivemap_pars_fragment:Hb,colorspace_fragment:Gb,colorspace_pars_fragment:Vb,envmap_fragment:kb,envmap_common_pars_fragment:Xb,envmap_pars_fragment:Wb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:iE,envmap_vertex:Yb,fog_vertex:jb,fog_pars_vertex:Zb,fog_fragment:Kb,fog_pars_fragment:Qb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:$b,lights_lambert_fragment:eE,lights_lambert_pars_fragment:tE,lights_pars_begin:nE,lights_toon_fragment:aE,lights_toon_pars_fragment:rE,lights_phong_fragment:sE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:gE,map_fragment:_E,map_pars_fragment:vE,map_particle_fragment:xE,map_particle_pars_fragment:yE,metalnessmap_fragment:SE,metalnessmap_pars_fragment:ME,morphinstance_vertex:bE,morphcolor_vertex:EE,morphnormal_vertex:TE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:wE,normal_fragment_maps:CE,normal_pars_fragment:DE,normal_pars_vertex:UE,normal_vertex:NE,normalmap_pars_fragment:LE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:IE,clearcoat_pars_fragment:PE,iridescence_pars_fragment:zE,opaque_fragment:FE,packing:BE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:kE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:qE,shadowmap_pars_vertex:YE,shadowmap_vertex:jE,shadowmask_pars_fragment:ZE,skinbase_vertex:KE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:eT,specularmap_pars_fragment:tT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:rT,uv_pars_fragment:sT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:pT,cube_frag:mT,depth_vert:gT,depth_frag:_T,distance_vert:vT,distance_frag:xT,equirect_vert:yT,equirect_frag:ST,linedashed_vert:MT,linedashed_frag:bT,meshbasic_vert:ET,meshbasic_frag:TT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:wT,meshmatcap_frag:CT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:NT,meshphong_frag:LT,meshphysical_vert:OT,meshphysical_frag:IT,meshtoon_vert:PT,meshtoon_frag:zT,points_vert:FT,points_frag:BT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:kT},He={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Fi={basic:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Bn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Bn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Bn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Et(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Bn([He.points,He.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Bn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Bn([He.common,He.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Bn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Bn([He.sprite,He.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Bn([He.common,He.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Bn([He.lights,He.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Fi.physical={uniforms:Bn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const kc={r:0,b:0,g:0},Tr=new Xi,XT=new en;function WT(o,e,i,r,l,c,h){const d=new Et(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function E(P){let N=P.isScene===!0?P.background:null;return N&&N.isTexture&&(N=(P.backgroundBlurriness>0?i:e).get(N)),N}function w(P){let N=!1;const z=E(P);z===null?x(d,m):z&&z.isColor&&(x(z,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?r.buffers.color.setClear(0,0,0,1,h):G==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(P,N){const z=E(N);z&&(z.isCubeTexture||z.mapping===nu)?(_===void 0&&(_=new ai(new Ws(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Gs(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(G,I,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Tr.copy(N.backgroundRotation),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(Tr)),_.material.toneMapped=Ct.getTransfer(z.colorSpace)!==Gt,(g!==z||y!==z.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new ai(new ul(2,2),new Wi({name:"BackgroundMaterial",uniforms:Gs(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(z.colorSpace)!==Gt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||y!==z.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,N){P.getRGB(kc,Rv(o)),r.buffers.color.setClear(kc.r,kc.g,kc.b,N,h)}function O(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,N=1){d.set(P),m=N,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(P){m=P,x(d,m)},render:w,addToRenderList:M,dispose:O}}function qT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,V,re,K,pe){let ue=!1;const L=g(K,re,V);c!==L&&(c=L,p(c.object)),ue=S(C,K,re,pe),ue&&E(C,K,re,pe),pe!==null&&e.update(pe,o.ELEMENT_ARRAY_BUFFER),(ue||h)&&(h=!1,N(C,V,re,K),pe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,V,re){const K=re.wireframe===!0;let pe=r[C.id];pe===void 0&&(pe={},r[C.id]=pe);let ue=pe[V.id];ue===void 0&&(ue={},pe[V.id]=ue);let L=ue[K];return L===void 0&&(L=y(m()),ue[K]=L),L}function y(C){const V=[],re=[],K=[];for(let pe=0;pe<i;pe++)V[pe]=0,re[pe]=0,K[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:re,attributeDivisors:K,object:C,attributes:{},index:null}}function S(C,V,re,K){const pe=c.attributes,ue=V.attributes;let L=0;const H=re.getAttributes();for(const ee in H)if(H[ee].location>=0){const xe=pe[ee];let U=ue[ee];if(U===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),xe===void 0||xe.attribute!==U||U&&xe.data!==U.data)return!0;L++}return c.attributesNum!==L||c.index!==K}function E(C,V,re,K){const pe={},ue=V.attributes;let L=0;const H=re.getAttributes();for(const ee in H)if(H[ee].location>=0){let xe=ue[ee];xe===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(xe=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(xe=C.instanceColor));const U={};U.attribute=xe,xe&&xe.data&&(U.data=xe.data),pe[ee]=U,L++}c.attributes=pe,c.attributesNum=L,c.index=K}function w(){const C=c.newAttributes;for(let V=0,re=C.length;V<re;V++)C[V]=0}function M(C){x(C,0)}function x(C,V){const re=c.newAttributes,K=c.enabledAttributes,pe=c.attributeDivisors;re[C]=1,K[C]===0&&(o.enableVertexAttribArray(C),K[C]=1),pe[C]!==V&&(o.vertexAttribDivisor(C,V),pe[C]=V)}function O(){const C=c.newAttributes,V=c.enabledAttributes;for(let re=0,K=V.length;re<K;re++)V[re]!==C[re]&&(o.disableVertexAttribArray(re),V[re]=0)}function P(C,V,re,K,pe,ue,L){L===!0?o.vertexAttribIPointer(C,V,re,pe,ue):o.vertexAttribPointer(C,V,re,K,pe,ue)}function N(C,V,re,K){w();const pe=K.attributes,ue=re.getAttributes(),L=V.defaultAttributeValues;for(const H in ue){const ee=ue[H];if(ee.location>=0){let Me=pe[H];if(Me===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const xe=Me.normalized,U=Me.itemSize,ne=e.get(Me);if(ne===void 0)continue;const _e=ne.buffer,Le=ne.type,Ve=ne.bytesPerElement,te=Le===o.INT||Le===o.UNSIGNED_INT||Me.gpuType===qd;if(Me.isInterleavedBufferAttribute){const ce=Me.data,Ue=ce.stride,De=Me.offset;if(ce.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ee.locationSize;Ge++)x(ee.location+Ge,ce.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)M(ee.location+Ge);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ge=0;Ge<ee.locationSize;Ge++)P(ee.location+Ge,U/ee.locationSize,Le,xe,Ue*Ve,(De+U/ee.locationSize*Ge)*Ve,te)}else{if(Me.isInstancedBufferAttribute){for(let ce=0;ce<ee.locationSize;ce++)x(ee.location+ce,Me.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ce=0;ce<ee.locationSize;ce++)M(ee.location+ce);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ce=0;ce<ee.locationSize;ce++)P(ee.location+ce,U/ee.locationSize,Le,xe,U*Ve,U/ee.locationSize*ce*Ve,te)}}else if(L!==void 0){const xe=L[H];if(xe!==void 0)switch(xe.length){case 2:o.vertexAttrib2fv(ee.location,xe);break;case 3:o.vertexAttrib3fv(ee.location,xe);break;case 4:o.vertexAttrib4fv(ee.location,xe);break;default:o.vertexAttrib1fv(ee.location,xe)}}}}O()}function z(){Z();for(const C in r){const V=r[C];for(const re in V){const K=V[re];for(const pe in K)_(K[pe].object),delete K[pe];delete V[re]}delete r[C]}}function G(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const re in V){const K=V[re];for(const pe in K)_(K[pe].object),delete K[pe];delete V[re]}delete r[C.id]}function I(C){for(const V in r){const re=r[V];if(re[C.id]===void 0)continue;const K=re[C.id];for(const pe in K)_(K[pe].object),delete K[pe];delete re[C.id]}}function Z(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:R,dispose:z,releaseStatesOfGeometry:G,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:M,disableUnusedAttributes:O}}function YT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function m(p,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let E=0;for(let w=0;w<g;w++)E+=_[w]*y[w];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(I){return!(I!==Ci&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Z=I===ya&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ii&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!Z)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),P=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),G=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:N,maxSamples:z,samples:G}}function ZT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Rr,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const O=c?0:r,P=O*4;let N=x.clippingState||null;m.value=N,N=_(E,y,P,S);for(let z=0;z!==P;++z)N[z]=i[z];x.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=m.value,E!==!0||M===null){const x=S+w*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,N=S;P!==w;++P,N+=4)h.copy(g[P]).applyMatrix4(O,d),h.normal.toArray(M,N),M[N+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}function KT(o){let e=new WeakMap;function i(h,d){return d===ad?h.mapping=Nr:d===rd&&(h.mapping=zs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ad||d===rd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Dv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const tr=4,U_=[.125,.215,.35,.446,.526,.582],Cr=20,QT=256,Zo=new Ov,N_=new Et;let kh=null,Xh=0,Wh=0,qh=!1;const JT=new $;class L_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=JT}=c;kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=P_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=I_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kh,Xh,Wh),this._renderer.xr.enabled=qh,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Nr||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kh=this._renderer.getRenderTarget(),Xh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),qh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:In,minFilter:In,generateMipmaps:!1,type:ya,format:Ci,colorSpace:Bs,depthBuffer:!1},l=O_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=O_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$T(c)),this._blurMaterial=t1(c,e,i),this._ggxMaterial=e1(c,e,i)}return l}_compileMaterial(e){const i=new ai(new Ui,e);this._renderer.compile(i,Zo)}_sceneToCubeUV(e,i,r,l,c){const m=new qn(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(N_),g.toneMapping=Gi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new Ws,new ap({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const O=e.background;O?O.isColor&&(M.color.copy(O),e.background=null,x=!0):(M.color.copy(N_),x=!0);for(let P=0;P<6;P++){const N=P%3;N===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):N===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const z=this._cubeSize;Ls(l,N*z,P>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(w,m),g.render(e,m)}g.toneMapping=S,g.autoClear=y,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Nr||e.mapping===zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=P_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=I_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;Ls(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,Zo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:E}=this,w=this._sizeLods[r],M=3*w*(r>E-tr?r-E+tr:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,Ls(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(d,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,Ls(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(d,Zo)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Cr-1),w=c/E,M=isFinite(c)?1+Math.floor(_*w):Cr;M>Cr&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cr}`);const x=[];let O=0;for(let I=0;I<Cr;++I){const Z=I/w,R=Math.exp(-Z*Z/2);x.push(R),I===0?O+=R:I<M&&(O+=2*R)}for(let I=0;I<x.length;I++)x[I]=x[I]/O;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const N=this._sizeLods[l],z=3*N*(l>P-tr?l-P+tr:0),G=4*(this._cubeSize-N);Ls(i,z,G,3*N,2*N),m.setRenderTarget(i),m.render(g,Zo)}}function $T(o){const e=[],i=[],r=[];let l=o;const c=o-tr+1+U_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-tr?m=U_[h-o+tr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,w=3,M=2,x=1,O=new Float32Array(w*E*S),P=new Float32Array(M*E*S),N=new Float32Array(x*E*S);for(let G=0;G<S;G++){const I=G%3*2/3-1,Z=G>2?0:-1,R=[I,Z,0,I+2/3,Z,0,I+2/3,Z+1,0,I,Z,0,I+2/3,Z+1,0,I,Z+1,0];O.set(R,w*E*G),P.set(y,M*E*G);const C=[G,G,G,G,G,G];N.set(C,x*E*G)}const z=new Ui;z.setAttribute("position",new Di(O,w)),z.setAttribute("uv",new Di(P,M)),z.setAttribute("faceIndex",new Di(N,x)),r.push(new ai(z,null)),l>tr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function O_(o,e,i){const r=new Vi(o,e,i);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ls(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function e1(o,e,i){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function t1(o,e,i){const r=new Float32Array(Cr),l=new $(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function I_(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:_a,depthTest:!1,depthWrite:!1})}function P_(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_a,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function n1(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ad||m===rd,_=m===Nr||m===zs;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new L_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function i1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&sl("WebGLRenderer: "+r+" extension not supported."),l}}}function a1(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let w=0;if(S!==null){const O=S.array;w=S.version;for(let P=0,N=O.length;P<N;P+=3){const z=O[P+0],G=O[P+1],I=O[P+2];y.push(z,G,G,I,I,z)}}else if(E!==void 0){const O=E.array;w=E.version;for(let P=0,N=O.length/3-1;P<N;P+=3){const z=P+0,G=P+1,I=P+2;y.push(z,G,G,I,I,z)}}else return;const M=new(Sv(y)?Av:Tv)(y,1);M.version=w;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function r1(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,w){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],w[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,w,0,E);let x=0;for(let O=0;O<E;O++)x+=S[O]*w[O];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function s1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:At("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function o1(o,e,i){const r=new WeakMap,l=new an;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){Z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let z=d.attributes.position.count*N,G=1;z>e.maxTextureSize&&(G=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*G*4*g),Z=new Mv(I,z,G,g);Z.type=Bi,Z.needsUpdate=!0;const R=N*4;for(let V=0;V<g;V++){const re=x[V],K=O[V],pe=P[V],ue=z*G*4*V;for(let L=0;L<re.count;L++){const H=L*R;E===!0&&(l.fromBufferAttribute(re,L),I[ue+H+0]=l.x,I[ue+H+1]=l.y,I[ue+H+2]=l.z,I[ue+H+3]=0),w===!0&&(l.fromBufferAttribute(K,L),I[ue+H+4]=l.x,I[ue+H+5]=l.y,I[ue+H+6]=l.z,I[ue+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,L),I[ue+H+8]=l.x,I[ue+H+9]=l.y,I[ue+H+10]=l.z,I[ue+H+11]=pe.itemSize===4?l.w:1)}}y={count:g,texture:Z,size:new gt(z,G)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const w=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function l1(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const c1={[rv]:"LINEAR_TONE_MAPPING",[sv]:"REINHARD_TONE_MAPPING",[ov]:"CINEON_TONE_MAPPING",[lv]:"ACES_FILMIC_TONE_MAPPING",[uv]:"AGX_TONE_MAPPING",[fv]:"NEUTRAL_TONE_MAPPING",[cv]:"CUSTOM_TONE_MAPPING"};function u1(o,e,i,r,l){const c=new Vi(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Vi(e,i,{type:ya,depthBuffer:!1,stencilBuffer:!1}),d=new Ui;d.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new KM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ai(d,m),_=new Ov(-1,1,1,-1,0,1);let g=null,y=null,S=!1,E,w=null,M=[],x=!1;this.setSize=function(O,P){c.setSize(O,P),h.setSize(O,P);for(let N=0;N<M.length;N++){const z=M[N];z.setSize&&z.setSize(O,P)}},this.setEffects=function(O){M=O,x=M.length>0&&M[0].isRenderPass===!0;const P=c.width,N=c.height;for(let z=0;z<M.length;z++){const G=M[z];G.setSize&&G.setSize(P,N)}},this.begin=function(O,P){if(S||O.toneMapping===Gi&&M.length===0)return!1;if(w=P,P!==null){const N=P.width,z=P.height;(c.width!==N||c.height!==z)&&this.setSize(N,z)}return x===!1&&O.setRenderTarget(c),E=O.toneMapping,O.toneMapping=Gi,!0},this.hasRenderPass=function(){return x},this.end=function(O,P){O.toneMapping=E,S=!0;let N=c,z=h;for(let G=0;G<M.length;G++){const I=M[G];if(I.enabled!==!1&&(I.render(O,z,N,P),I.needsSwap!==!1)){const Z=N;N=z,z=Z}}if(g!==O.outputColorSpace||y!==O.toneMapping){g=O.outputColorSpace,y=O.toneMapping,m.defines={},Ct.getTransfer(g)===Gt&&(m.defines.SRGB_TRANSFER="");const G=c1[y];G&&(m.defines[G]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,O.setRenderTarget(w),O.render(p,_),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Pv=new Pn,Vd=new ol(1,1),zv=new Mv,Fv=new TM,Bv=new Cv,z_=[],F_=[],B_=new Float32Array(16),H_=new Float32Array(9),G_=new Float32Array(4);function qs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=z_[l];if(c===void 0&&(c=new Float32Array(l),z_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function _n(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function au(o,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function f1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function h1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2fv(this.addr,e),_n(i,e)}}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;o.uniform3fv(this.addr,e),_n(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4fv(this.addr,e),_n(i,e)}}function m1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;G_.set(r),o.uniformMatrix2fv(this.addr,!1,G_),_n(i,r)}}function g1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;H_.set(r),o.uniformMatrix3fv(this.addr,!1,H_),_n(i,r)}}function _1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(gn(i,r))return;B_.set(r),o.uniformMatrix4fv(this.addr,!1,B_),_n(i,r)}}function v1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function x1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2iv(this.addr,e),_n(i,e)}}function y1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3iv(this.addr,e),_n(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4iv(this.addr,e),_n(i,e)}}function M1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;o.uniform2uiv(this.addr,e),_n(i,e)}}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;o.uniform3uiv(this.addr,e),_n(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;o.uniform4uiv(this.addr,e),_n(i,e)}}function A1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Vd.compareFunction=i.isReversedDepthBuffer()?$d:Jd,c=Vd):c=Pv,i.setTexture2D(e||c,l)}function R1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Fv,l)}function w1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Bv,l)}function C1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||zv,l)}function D1(o){switch(o){case 5126:return f1;case 35664:return h1;case 35665:return d1;case 35666:return p1;case 35674:return m1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return x1;case 35668:case 35672:return y1;case 35669:case 35673:return S1;case 5125:return M1;case 36294:return b1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return C1}}function U1(o,e){o.uniform1fv(this.addr,e)}function N1(o,e){const i=qs(e,this.size,2);o.uniform2fv(this.addr,i)}function L1(o,e){const i=qs(e,this.size,3);o.uniform3fv(this.addr,i)}function O1(o,e){const i=qs(e,this.size,4);o.uniform4fv(this.addr,i)}function I1(o,e){const i=qs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function P1(o,e){const i=qs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function z1(o,e){const i=qs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function F1(o,e){o.uniform1iv(this.addr,e)}function B1(o,e){o.uniform2iv(this.addr,e)}function H1(o,e){o.uniform3iv(this.addr,e)}function G1(o,e){o.uniform4iv(this.addr,e)}function V1(o,e){o.uniform1uiv(this.addr,e)}function k1(o,e){o.uniform2uiv(this.addr,e)}function X1(o,e){o.uniform3uiv(this.addr,e)}function W1(o,e){o.uniform4uiv(this.addr,e)}function q1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Vd:h=Pv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function Y1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Fv,c[h])}function j1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Bv,c[h])}function Z1(o,e,i){const r=this.cache,l=e.length,c=au(i,l);gn(r,c)||(o.uniform1iv(this.addr,c),_n(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||zv,c[h])}function K1(o){switch(o){case 5126:return U1;case 35664:return N1;case 35665:return L1;case 35666:return O1;case 35674:return I1;case 35675:return P1;case 35676:return z1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return k1;case 36295:return X1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Z1}}class Q1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=D1(i.type)}}class J1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K1(i.type)}}class $1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Yh=/(\w+)(\])?(\[|\.)?/g;function V_(o,e){o.seq.push(e),o.map[e.id]=e}function eA(o,e,i){const r=o.name,l=r.length;for(Yh.lastIndex=0;;){const c=Yh.exec(r),h=Yh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){V_(i,p===void 0?new Q1(d,o,e):new J1(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new $1(d),V_(i,g)),i=g}}}class Kc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);eA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function k_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const tA=37297;let nA=0;function iA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const X_=new ht;function aA(o){Ct._getMatrix(X_,Ct.workingColorSpace,o);const e=`mat3( ${X_.elements.map(i=>i.toFixed(4))} )`;switch(Ct.getTransfer(o)){case Qc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function W_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+iA(o.getShaderSource(e),d)}else return c}function rA(o,e){const i=aA(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const sA={[rv]:"Linear",[sv]:"Reinhard",[ov]:"Cineon",[lv]:"ACESFilmic",[uv]:"AgX",[fv]:"Neutral",[cv]:"Custom"};function oA(o,e){const i=sA[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Xc=new $;function lA(){Ct.getLuminanceCoefficients(Xc);const o=Xc.x.toFixed(4),e=Xc.y.toFixed(4),i=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function uA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function fA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function $o(o){return o!==""}function q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hA=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(o){return o.replace(hA,pA)}const dA=new Map;function pA(o,e){let i=dt[e];if(i===void 0){const r=dA.get(e);if(r!==void 0)i=dt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kd(i)}const mA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(mA,gA)}function gA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _A={[Wc]:"SHADOWMAP_TYPE_PCF",[Qo]:"SHADOWMAP_TYPE_VSM"};function vA(o){return _A[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xA={[Nr]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function yA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":xA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const SA={[zs]:"ENVMAP_MODE_REFRACTION"};function MA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":SA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bA={[av]:"ENVMAP_BLENDING_MULTIPLY",[XS]:"ENVMAP_BLENDING_MIX",[WS]:"ENVMAP_BLENDING_ADD"};function EA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":bA[o.combine]||"ENVMAP_BLENDING_NONE"}function TA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function AA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=vA(i),p=yA(i),_=MA(i),g=EA(i),y=TA(i),S=cA(i),E=uA(c),w=l.createProgram();let M,x,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter($o).join(`
`),x.length>0&&(x+=`
`)):(M=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),x=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Gi?"#define TONE_MAPPING":"",i.toneMapping!==Gi?dt.tonemapping_pars_fragment:"",i.toneMapping!==Gi?oA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,rA("linearToOutputTexel",i.outputColorSpace),lA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=kd(h),h=q_(h,i),h=Y_(h,i),d=kd(d),d=q_(d,i),d=Y_(d,i),h=j_(h),d=j_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=O+M+h,N=O+x+d,z=k_(l,l.VERTEX_SHADER,P),G=k_(l,l.FRAGMENT_SHADER,N);l.attachShader(w,z),l.attachShader(w,G),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function I(V){if(o.debug.checkShaderErrors){const re=l.getProgramInfoLog(w)||"",K=l.getShaderInfoLog(z)||"",pe=l.getShaderInfoLog(G)||"",ue=re.trim(),L=K.trim(),H=pe.trim();let ee=!0,Me=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,z,G);else{const xe=W_(l,z,"vertex"),U=W_(l,G,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ue+`
`+xe+`
`+U)}else ue!==""?ot("WebGLProgram: Program Info Log:",ue):(L===""||H==="")&&(Me=!1);Me&&(V.diagnostics={runnable:ee,programLog:ue,vertexShader:{log:L,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(z),l.deleteShader(G),Z=new Kc(l,w),R=fA(l,w)}let Z;this.getUniforms=function(){return Z===void 0&&I(this),Z};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(w,tA)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nA++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=z,this.fragmentShader=G,this}let RA=0;class wA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new CA(e),i.set(e,r)),r}}class CA{constructor(e){this.id=RA++,this.code=e,this.usedTimes=0}}function DA(o,e,i,r,l,c,h){const d=new ip,m=new wA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,C,V,re,K){const pe=re.fog,ue=K.geometry,L=R.isMeshStandardMaterial?re.environment:null,H=(R.isMeshStandardMaterial?i:e).get(R.envMap||L),ee=H&&H.mapping===nu?H.image.height:null,Me=E[R.type];R.precision!==null&&(S=l.getMaxPrecision(R.precision),S!==R.precision&&ot("WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const xe=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,U=xe!==void 0?xe.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let _e,Le,Ve,te;if(Me){const wt=Fi[Me];_e=wt.vertexShader,Le=wt.fragmentShader}else _e=R.vertexShader,Le=R.fragmentShader,m.update(R),Ve=m.getVertexShaderID(R),te=m.getFragmentShaderID(R);const ce=o.getRenderTarget(),Ue=o.state.buffers.depth.getReversed(),De=K.isInstancedMesh===!0,Ge=K.isBatchedMesh===!0,ut=!!R.map,jt=!!R.matcap,pt=!!H,it=!!R.aoMap,Rt=!!R.lightMap,at=!!R.bumpMap,Nt=!!R.normalMap,B=!!R.displacementMap,qt=!!R.emissiveMap,mt=!!R.metalnessMap,Mt=!!R.roughnessMap,Xe=R.anisotropy>0,D=R.clearcoat>0,b=R.dispersion>0,W=R.iridescence>0,fe=R.sheen>0,be=R.transmission>0,le=Xe&&!!R.anisotropyMap,Ye=D&&!!R.clearcoatMap,Ie=D&&!!R.clearcoatNormalMap,Ce=D&&!!R.clearcoatRoughnessMap,ze=W&&!!R.iridescenceMap,me=W&&!!R.iridescenceThicknessMap,Ee=fe&&!!R.sheenColorMap,ve=fe&&!!R.sheenRoughnessMap,we=!!R.specularMap,Ae=!!R.specularColorMap,$e=!!R.specularIntensityMap,k=be&&!!R.transmissionMap,Ne=be&&!!R.thicknessMap,Re=!!R.gradientMap,Pe=!!R.alphaMap,Te=R.alphaTest>0,Se=!!R.alphaHash,Oe=!!R.extensions;let rt=Gi;R.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(rt=o.toneMapping);const zt={shaderID:Me,shaderType:R.type,shaderName:R.name,vertexShader:_e,fragmentShader:Le,defines:R.defines,customVertexShaderID:Ve,customFragmentShaderID:te,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&K._colorsTexture!==null,instancing:De,instancingColor:De&&K.instanceColor!==null,instancingMorph:De&&K.morphTexture!==null,outputColorSpace:ce===null?o.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Bs,alphaToCoverage:!!R.alphaToCoverage,map:ut,matcap:jt,envMap:pt,envMapMode:pt&&H.mapping,envMapCubeUVHeight:ee,aoMap:it,lightMap:Rt,bumpMap:at,normalMap:Nt,displacementMap:B,emissiveMap:qt,normalMapObjectSpace:Nt&&R.normalMapType===jS,normalMapTangentSpace:Nt&&R.normalMapType===yv,metalnessMap:mt,roughnessMap:Mt,anisotropy:Xe,anisotropyMap:le,clearcoat:D,clearcoatMap:Ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Ce,dispersion:b,iridescence:W,iridescenceMap:ze,iridescenceThicknessMap:me,sheen:fe,sheenColorMap:Ee,sheenRoughnessMap:ve,specularMap:we,specularColorMap:Ae,specularIntensityMap:$e,transmission:be,transmissionMap:k,thicknessMap:Ne,gradientMap:Re,opaque:R.transparent===!1&&R.blending===Os&&R.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Te,alphaHash:Se,combine:R.combine,mapUv:ut&&w(R.map.channel),aoMapUv:it&&w(R.aoMap.channel),lightMapUv:Rt&&w(R.lightMap.channel),bumpMapUv:at&&w(R.bumpMap.channel),normalMapUv:Nt&&w(R.normalMap.channel),displacementMapUv:B&&w(R.displacementMap.channel),emissiveMapUv:qt&&w(R.emissiveMap.channel),metalnessMapUv:mt&&w(R.metalnessMap.channel),roughnessMapUv:Mt&&w(R.roughnessMap.channel),anisotropyMapUv:le&&w(R.anisotropyMap.channel),clearcoatMapUv:Ye&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:me&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:ve&&w(R.sheenRoughnessMap.channel),specularMapUv:we&&w(R.specularMap.channel),specularColorMapUv:Ae&&w(R.specularColorMap.channel),specularIntensityMapUv:$e&&w(R.specularIntensityMap.channel),transmissionMapUv:k&&w(R.transmissionMap.channel),thicknessMapUv:Ne&&w(R.thicknessMap.channel),alphaMapUv:Pe&&w(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Nt||Xe),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ue.attributes.uv&&(ut||Pe),fog:!!pe,useFog:R.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ue,skinning:K.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:ut&&R.map.isVideoTexture===!0&&Ct.getTransfer(R.map.colorSpace)===Gt,decodeVideoTextureEmissive:qt&&R.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(R.emissiveMap.colorSpace)===Gt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ma,flipSided:R.side===Yn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Oe&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&R.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function x(R){const C=[];if(R.shaderID?C.push(R.shaderID):(C.push(R.customVertexShaderID),C.push(R.customFragmentShaderID)),R.defines!==void 0)for(const V in R.defines)C.push(V),C.push(R.defines[V]);return R.isRawShaderMaterial===!1&&(O(C,R),P(C,R),C.push(o.outputColorSpace)),C.push(R.customProgramCacheKey),C.join()}function O(R,C){R.push(C.precision),R.push(C.outputColorSpace),R.push(C.envMapMode),R.push(C.envMapCubeUVHeight),R.push(C.mapUv),R.push(C.alphaMapUv),R.push(C.lightMapUv),R.push(C.aoMapUv),R.push(C.bumpMapUv),R.push(C.normalMapUv),R.push(C.displacementMapUv),R.push(C.emissiveMapUv),R.push(C.metalnessMapUv),R.push(C.roughnessMapUv),R.push(C.anisotropyMapUv),R.push(C.clearcoatMapUv),R.push(C.clearcoatNormalMapUv),R.push(C.clearcoatRoughnessMapUv),R.push(C.iridescenceMapUv),R.push(C.iridescenceThicknessMapUv),R.push(C.sheenColorMapUv),R.push(C.sheenRoughnessMapUv),R.push(C.specularMapUv),R.push(C.specularColorMapUv),R.push(C.specularIntensityMapUv),R.push(C.transmissionMapUv),R.push(C.thicknessMapUv),R.push(C.combine),R.push(C.fogExp2),R.push(C.sizeAttenuation),R.push(C.morphTargetsCount),R.push(C.morphAttributeCount),R.push(C.numDirLights),R.push(C.numPointLights),R.push(C.numSpotLights),R.push(C.numSpotLightMaps),R.push(C.numHemiLights),R.push(C.numRectAreaLights),R.push(C.numDirLightShadows),R.push(C.numPointLightShadows),R.push(C.numSpotLightShadows),R.push(C.numSpotLightShadowsWithMaps),R.push(C.numLightProbes),R.push(C.shadowMapType),R.push(C.toneMapping),R.push(C.numClippingPlanes),R.push(C.numClipIntersection),R.push(C.depthPacking)}function P(R,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),R.push(d.mask)}function N(R){const C=E[R.type];let V;if(C){const re=Fi[C];V=FM.clone(re.uniforms)}else V=R.uniforms;return V}function z(R,C){let V=g.get(C);return V!==void 0?++V.usedTimes:(V=new AA(o,C,R,c),_.push(V),g.set(C,V)),V}function G(R){if(--R.usedTimes===0){const C=_.indexOf(R);_[C]=_[_.length-1],_.pop(),g.delete(R.cacheKey),R.destroy()}}function I(R){m.remove(R)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:z,releaseProgram:G,releaseShaderCache:I,programs:_,dispose:Z}}function UA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function NA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function K_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Q_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,w,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:w,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=w,x.group=M),e++,x}function d(g,y,S,E,w,M){const x=h(g,y,S,E,w,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,E,w,M){const x=h(g,y,S,E,w,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||NA),r.length>1&&r.sort(y||K_),l.length>1&&l.sort(y||K_)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function LA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Q_,o.set(r,[h])):l>=c.length?(h=new Q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function OA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Et};break;case"SpotLight":i={position:new $,direction:new $,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Et,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":i={color:new Et,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function IA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let PA=0;function zA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function FA(o){const e=new OA,i=IA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new en,h=new en;function d(p){let _=0,g=0,y=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,E=0,w=0,M=0,x=0,O=0,P=0,N=0,z=0,G=0,I=0;p.sort(zA);for(let R=0,C=p.length;R<C;R++){const V=p[R],re=V.color,K=V.intensity,pe=V.distance;let ue=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Fs?ue=V.shadow.map.texture:ue=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=re.r*K,g+=re.g*K,y+=re.b*K;else if(V.isLightProbe){for(let L=0;L<9;L++)r.probe[L].addScaledVector(V.sh.coefficients[L],K);I++}else if(V.isDirectionalLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.directionalShadow[S]=ee,r.directionalShadowMap[S]=ue,r.directionalShadowMatrix[S]=V.shadow.matrix,O++}r.directional[S]=L,S++}else if(V.isSpotLight){const L=e.get(V);L.position.setFromMatrixPosition(V.matrixWorld),L.color.copy(re).multiplyScalar(K),L.distance=pe,L.coneCos=Math.cos(V.angle),L.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),L.decay=V.decay,r.spot[w]=L;const H=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,H.updateMatrices(V),V.castShadow&&G++),r.spotLightMatrix[w]=H.matrix,V.castShadow){const ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,r.spotShadow[w]=ee,r.spotShadowMap[w]=ue,N++}w++}else if(V.isRectAreaLight){const L=e.get(V);L.color.copy(re).multiplyScalar(K),L.halfWidth.set(V.width*.5,0,0),L.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=L,M++}else if(V.isPointLight){const L=e.get(V);if(L.color.copy(V.color).multiplyScalar(V.intensity),L.distance=V.distance,L.decay=V.decay,V.castShadow){const H=V.shadow,ee=i.get(V);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,r.pointShadow[E]=ee,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=V.shadow.matrix,P++}r.point[E]=L,E++}else if(V.isHemisphereLight){const L=e.get(V);L.skyColor.copy(V.color).multiplyScalar(K),L.groundColor.copy(V.groundColor).multiplyScalar(K),r.hemi[x]=L,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==S||Z.pointLength!==E||Z.spotLength!==w||Z.rectAreaLength!==M||Z.hemiLength!==x||Z.numDirectionalShadows!==O||Z.numPointShadows!==P||Z.numSpotShadows!==N||Z.numSpotMaps!==z||Z.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+z-G,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=I,Z.directionalLength=S,Z.pointLength=E,Z.spotLength=w,Z.rectAreaLength=M,Z.hemiLength=x,Z.numDirectionalShadows=O,Z.numPointShadows=P,Z.numSpotShadows=N,Z.numSpotMaps=z,Z.numLightProbes=I,r.version=PA++)}function m(p,_){let g=0,y=0,S=0,E=0,w=0;const M=_.matrixWorldInverse;for(let x=0,O=p.length;x<O;x++){const P=p[x];if(P.isDirectionalLight){const N=r.directional[g];N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),g++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),N.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(M),S++}else if(P.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),h.identity(),c.copy(P.matrixWorld),c.premultiply(M),h.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(h),N.halfHeight.applyMatrix4(h),E++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(M),y++}else if(P.isHemisphereLight){const N=r.hemi[w];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:r}}function J_(o){const e=new FA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function BA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new J_(o),e.set(l,[d])):c>=h.length?(d=new J_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
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
}`,VA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],kA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],$_=new en,Ko=new $,jh=new $;function XA(o,e,i){let r=new rp;const l=new gt,c=new gt,h=new an,d=new QM,m=new JM,p={},_=i.maxTextureSize,g={[nr]:Yn,[Yn]:nr,[ma]:ma},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Ui;E.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ai(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wc;let x=this.type;this.render=function(G,I,Z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||G.length===0)return;G.type===TS&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),G.type=Wc);const R=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),re=o.state;re.setBlending(_a),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const K=x!==this.type;K&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(ue=>ue.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,ue=G.length;pe<ue;pe++){const L=G[pe],H=L.shadow;if(H===void 0){ot("WebGLShadowMap:",L,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();if(l.multiply(ee),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y)),H.map===null||K===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Qo){if(L.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vi(l.x,l.y,{format:Fs,type:ya,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=L.name+".shadowMap",H.map.depthTexture=new ol(l.x,l.y,Bi),H.map.depthTexture.name=L.name+".shadowMapDepth",H.map.depthTexture.format=Sa,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn}else{L.isPointLight?(H.map=new Dv(l.x),H.map.depthTexture=new ZM(l.x,ki)):(H.map=new Vi(l.x,l.y),H.map.depthTexture=new ol(l.x,l.y,ki)),H.map.depthTexture.name=L.name+".shadowMap",H.map.depthTexture.format=Sa;const xe=o.state.buffers.depth.getReversed();this.type===Wc?(H.map.depthTexture.compareFunction=xe?$d:Jd,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn)}H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Me;xe++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,xe),o.clear();else{xe===0&&(o.setRenderTarget(H.map),o.clear());const U=H.getViewport(xe);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),re.viewport(h)}if(L.isPointLight){const U=H.camera,ne=H.matrix,_e=L.distance||U.far;_e!==U.far&&(U.far=_e,U.updateProjectionMatrix()),Ko.setFromMatrixPosition(L.matrixWorld),U.position.copy(Ko),jh.copy(U.position),jh.add(VA[xe]),U.up.copy(kA[xe]),U.lookAt(jh),U.updateMatrixWorld(),ne.makeTranslation(-Ko.x,-Ko.y,-Ko.z),$_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix($_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(L);r=H.getFrustum(),N(I,Z,H.camera,L,this.type)}H.isPointLightShadow!==!0&&this.type===Qo&&O(H,Z),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(R,C,V)};function O(G,I){const Z=e.update(w);y.defines.VSM_SAMPLES!==G.blurSamples&&(y.defines.VSM_SAMPLES=G.blurSamples,S.defines.VSM_SAMPLES=G.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),G.mapPass===null&&(G.mapPass=new Vi(l.x,l.y,{format:Fs,type:ya})),y.uniforms.shadow_pass.value=G.map.depthTexture,y.uniforms.resolution.value=G.mapSize,y.uniforms.radius.value=G.radius,o.setRenderTarget(G.mapPass),o.clear(),o.renderBufferDirect(I,null,Z,y,w,null),S.uniforms.shadow_pass.value=G.mapPass.texture,S.uniforms.resolution.value=G.mapSize,S.uniforms.radius.value=G.radius,o.setRenderTarget(G.map),o.clear(),o.renderBufferDirect(I,null,Z,S,w,null)}function P(G,I,Z,R){let C=null;const V=Z.isPointLight===!0?G.customDistanceMaterial:G.customDepthMaterial;if(V!==void 0)C=V;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const re=C.uuid,K=I.uuid;let pe=p[re];pe===void 0&&(pe={},p[re]=pe);let ue=pe[K];ue===void 0&&(ue=C.clone(),pe[K]=ue,I.addEventListener("dispose",z)),C=ue}if(C.visible=I.visible,C.wireframe=I.wireframe,R===Qo?C.side=I.shadowSide!==null?I.shadowSide:I.side:C.side=I.shadowSide!==null?I.shadowSide:g[I.side],C.alphaMap=I.alphaMap,C.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,C.map=I.map,C.clipShadows=I.clipShadows,C.clippingPlanes=I.clippingPlanes,C.clipIntersection=I.clipIntersection,C.displacementMap=I.displacementMap,C.displacementScale=I.displacementScale,C.displacementBias=I.displacementBias,C.wireframeLinewidth=I.wireframeLinewidth,C.linewidth=I.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const re=o.properties.get(C);re.light=Z}return C}function N(G,I,Z,R,C){if(G.visible===!1)return;if(G.layers.test(I.layers)&&(G.isMesh||G.isLine||G.isPoints)&&(G.castShadow||G.receiveShadow&&C===Qo)&&(!G.frustumCulled||r.intersectsObject(G))){G.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,G.matrixWorld);const K=e.update(G),pe=G.material;if(Array.isArray(pe)){const ue=K.groups;for(let L=0,H=ue.length;L<H;L++){const ee=ue[L],Me=pe[ee.materialIndex];if(Me&&Me.visible){const xe=P(G,Me,R,C);G.onBeforeShadow(o,G,I,Z,K,xe,ee),o.renderBufferDirect(Z,null,K,xe,G,ee),G.onAfterShadow(o,G,I,Z,K,xe,ee)}}}else if(pe.visible){const ue=P(G,pe,R,C);G.onBeforeShadow(o,G,I,Z,K,ue,null),o.renderBufferDirect(Z,null,K,ue,G,null),G.onAfterShadow(o,G,I,Z,K,ue,null)}}const re=G.children;for(let K=0,pe=re.length;K<pe;K++)N(re[K],I,Z,R,C)}function z(G){G.target.removeEventListener("dispose",z);for(const Z in p){const R=p[Z],C=G.target.uuid;C in R&&(R[C].dispose(),delete R[C])}}}const WA={[Qh]:Jh,[$h]:nd,[ed]:id,[Ps]:td,[Jh]:Qh,[nd]:$h,[id]:ed,[td]:Ps};function qA(o,e){function i(){let k=!1;const Ne=new an;let Re=null;const Pe=new an(0,0,0,0);return{setMask:function(Te){Re!==Te&&!k&&(o.colorMask(Te,Te,Te,Te),Re=Te)},setLocked:function(Te){k=Te},setClear:function(Te,Se,Oe,rt,zt){zt===!0&&(Te*=rt,Se*=rt,Oe*=rt),Ne.set(Te,Se,Oe,rt),Pe.equals(Ne)===!1&&(o.clearColor(Te,Se,Oe,rt),Pe.copy(Ne))},reset:function(){k=!1,Re=null,Pe.set(-1,0,0,0)}}}function r(){let k=!1,Ne=!1,Re=null,Pe=null,Te=null;return{setReversed:function(Se){if(Ne!==Se){const Oe=e.get("EXT_clip_control");Se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Ne=Se;const rt=Te;Te=null,this.setClear(rt)}},getReversed:function(){return Ne},setTest:function(Se){Se?ce(o.DEPTH_TEST):Ue(o.DEPTH_TEST)},setMask:function(Se){Re!==Se&&!k&&(o.depthMask(Se),Re=Se)},setFunc:function(Se){if(Ne&&(Se=WA[Se]),Pe!==Se){switch(Se){case Qh:o.depthFunc(o.NEVER);break;case Jh:o.depthFunc(o.ALWAYS);break;case $h:o.depthFunc(o.LESS);break;case Ps:o.depthFunc(o.LEQUAL);break;case ed:o.depthFunc(o.EQUAL);break;case td:o.depthFunc(o.GEQUAL);break;case nd:o.depthFunc(o.GREATER);break;case id:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Te!==Se&&(Ne&&(Se=1-Se),o.clearDepth(Se),Te=Se)},reset:function(){k=!1,Re=null,Pe=null,Te=null,Ne=!1}}}function l(){let k=!1,Ne=null,Re=null,Pe=null,Te=null,Se=null,Oe=null,rt=null,zt=null;return{setTest:function(wt){k||(wt?ce(o.STENCIL_TEST):Ue(o.STENCIL_TEST))},setMask:function(wt){Ne!==wt&&!k&&(o.stencilMask(wt),Ne=wt)},setFunc:function(wt,Un,xi){(Re!==wt||Pe!==Un||Te!==xi)&&(o.stencilFunc(wt,Un,xi),Re=wt,Pe=Un,Te=xi)},setOp:function(wt,Un,xi){(Se!==wt||Oe!==Un||rt!==xi)&&(o.stencilOp(wt,Un,xi),Se=wt,Oe=Un,rt=xi)},setLocked:function(wt){k=wt},setClear:function(wt){zt!==wt&&(o.clearStencil(wt),zt=wt)},reset:function(){k=!1,Ne=null,Re=null,Pe=null,Te=null,Se=null,Oe=null,rt=null,zt=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],E=null,w=!1,M=null,x=null,O=null,P=null,N=null,z=null,G=null,I=new Et(0,0,0),Z=0,R=!1,C=null,V=null,re=null,K=null,pe=null;const ue=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let L=!1,H=0;const ee=o.getParameter(o.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),L=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),L=H>=2);let Me=null,xe={};const U=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),_e=new an().fromArray(U),Le=new an().fromArray(ne);function Ve(k,Ne,Re,Pe){const Te=new Uint8Array(4),Se=o.createTexture();o.bindTexture(k,Se),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Oe=0;Oe<Re;Oe++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,Te):o.texImage2D(Ne+Oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Te);return Se}const te={};te[o.TEXTURE_2D]=Ve(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Ve(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Ve(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Ve(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ce(o.DEPTH_TEST),h.setFunc(Ps),at(!1),Nt($0),ce(o.CULL_FACE),it(_a);function ce(k){_[k]!==!0&&(o.enable(k),_[k]=!0)}function Ue(k){_[k]!==!1&&(o.disable(k),_[k]=!1)}function De(k,Ne){return g[k]!==Ne?(o.bindFramebuffer(k,Ne),g[k]=Ne,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ne),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ge(k,Ne){let Re=S,Pe=!1;if(k){Re=y.get(Ne),Re===void 0&&(Re=[],y.set(Ne,Re));const Te=k.textures;if(Re.length!==Te.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Oe=Te.length;Se<Oe;Se++)Re[Se]=o.COLOR_ATTACHMENT0+Se;Re.length=Te.length,Pe=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(Re)}function ut(k){return E!==k?(o.useProgram(k),E=k,!0):!1}const jt={[wr]:o.FUNC_ADD,[RS]:o.FUNC_SUBTRACT,[wS]:o.FUNC_REVERSE_SUBTRACT};jt[CS]=o.MIN,jt[DS]=o.MAX;const pt={[US]:o.ZERO,[NS]:o.ONE,[LS]:o.SRC_COLOR,[Zh]:o.SRC_ALPHA,[BS]:o.SRC_ALPHA_SATURATE,[zS]:o.DST_COLOR,[IS]:o.DST_ALPHA,[OS]:o.ONE_MINUS_SRC_COLOR,[Kh]:o.ONE_MINUS_SRC_ALPHA,[FS]:o.ONE_MINUS_DST_COLOR,[PS]:o.ONE_MINUS_DST_ALPHA,[HS]:o.CONSTANT_COLOR,[GS]:o.ONE_MINUS_CONSTANT_COLOR,[VS]:o.CONSTANT_ALPHA,[kS]:o.ONE_MINUS_CONSTANT_ALPHA};function it(k,Ne,Re,Pe,Te,Se,Oe,rt,zt,wt){if(k===_a){w===!0&&(Ue(o.BLEND),w=!1);return}if(w===!1&&(ce(o.BLEND),w=!0),k!==AS){if(k!==M||wt!==R){if((x!==wr||N!==wr)&&(o.blendEquation(o.FUNC_ADD),x=wr,N=wr),wt)switch(k){case Os:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:At("WebGLState: Invalid blending: ",k);break}else switch(k){case Os:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",k);break}O=null,P=null,z=null,G=null,I.set(0,0,0),Z=0,M=k,R=wt}return}Te=Te||Ne,Se=Se||Re,Oe=Oe||Pe,(Ne!==x||Te!==N)&&(o.blendEquationSeparate(jt[Ne],jt[Te]),x=Ne,N=Te),(Re!==O||Pe!==P||Se!==z||Oe!==G)&&(o.blendFuncSeparate(pt[Re],pt[Pe],pt[Se],pt[Oe]),O=Re,P=Pe,z=Se,G=Oe),(rt.equals(I)===!1||zt!==Z)&&(o.blendColor(rt.r,rt.g,rt.b,zt),I.copy(rt),Z=zt),M=k,R=!1}function Rt(k,Ne){k.side===ma?Ue(o.CULL_FACE):ce(o.CULL_FACE);let Re=k.side===Yn;Ne&&(Re=!Re),at(Re),k.blending===Os&&k.transparent===!1?it(_a):it(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const Pe=k.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),qt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ce(o.SAMPLE_ALPHA_TO_COVERAGE):Ue(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Nt(k){k!==bS?(ce(o.CULL_FACE),k!==V&&(k===$0?o.cullFace(o.BACK):k===ES?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ue(o.CULL_FACE),V=k}function B(k){k!==re&&(L&&o.lineWidth(k),re=k)}function qt(k,Ne,Re){k?(ce(o.POLYGON_OFFSET_FILL),(K!==Ne||pe!==Re)&&(o.polygonOffset(Ne,Re),K=Ne,pe=Re)):Ue(o.POLYGON_OFFSET_FILL)}function mt(k){k?ce(o.SCISSOR_TEST):Ue(o.SCISSOR_TEST)}function Mt(k){k===void 0&&(k=o.TEXTURE0+ue-1),Me!==k&&(o.activeTexture(k),Me=k)}function Xe(k,Ne,Re){Re===void 0&&(Me===null?Re=o.TEXTURE0+ue-1:Re=Me);let Pe=xe[Re];Pe===void 0&&(Pe={type:void 0,texture:void 0},xe[Re]=Pe),(Pe.type!==k||Pe.texture!==Ne)&&(Me!==Re&&(o.activeTexture(Re),Me=Re),o.bindTexture(k,Ne||te[k]),Pe.type=k,Pe.texture=Ne)}function D(){const k=xe[Me];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function fe(){try{o.texSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function be(){try{o.texSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function le(){try{o.compressedTexSubImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Ye(){try{o.compressedTexSubImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Ie(){try{o.texStorage2D(...arguments)}catch(k){At("WebGLState:",k)}}function Ce(){try{o.texStorage3D(...arguments)}catch(k){At("WebGLState:",k)}}function ze(){try{o.texImage2D(...arguments)}catch(k){At("WebGLState:",k)}}function me(){try{o.texImage3D(...arguments)}catch(k){At("WebGLState:",k)}}function Ee(k){_e.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),_e.copy(k))}function ve(k){Le.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Le.copy(k))}function we(k,Ne){let Re=p.get(Ne);Re===void 0&&(Re=new WeakMap,p.set(Ne,Re));let Pe=Re.get(k);Pe===void 0&&(Pe=o.getUniformBlockIndex(Ne,k.name),Re.set(k,Pe))}function Ae(k,Ne){const Pe=p.get(Ne).get(k);m.get(Ne)!==Pe&&(o.uniformBlockBinding(Ne,Pe,k.__bindingPointIndex),m.set(Ne,Pe))}function $e(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Me=null,xe={},g={},y=new WeakMap,S=[],E=null,w=!1,M=null,x=null,O=null,P=null,N=null,z=null,G=null,I=new Et(0,0,0),Z=0,R=!1,C=null,V=null,re=null,K=null,pe=null,_e.set(0,0,o.canvas.width,o.canvas.height),Le.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ce,disable:Ue,bindFramebuffer:De,drawBuffers:Ge,useProgram:ut,setBlending:it,setMaterial:Rt,setFlipSided:at,setCullFace:Nt,setLineWidth:B,setPolygonOffset:qt,setScissorTest:mt,activeTexture:Mt,bindTexture:Xe,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:ze,texImage3D:me,updateUBOMapping:we,uniformBlockBinding:Ae,texStorage2D:Ie,texStorage3D:Ce,texSubImage2D:fe,texSubImage3D:be,compressedTexSubImage2D:le,compressedTexSubImage3D:Ye,scissor:Ee,viewport:ve,reset:$e}}function YA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new gt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return S?new OffscreenCanvas(D,b):rl("canvas")}function w(D,b,W){let fe=1;const be=Xe(D);if((be.width>W||be.height>W)&&(fe=W/Math.max(be.width,be.height)),fe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const le=Math.floor(fe*be.width),Ye=Math.floor(fe*be.height);g===void 0&&(g=E(le,Ye));const Ie=b?E(le,Ye):g;return Ie.width=le,Ie.height=Ye,Ie.getContext("2d").drawImage(D,0,0,le,Ye),ot("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+le+"x"+Ye+")."),Ie}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,b,W,fe,be=!1){if(D!==null){if(o[D]!==void 0)return o[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let le=b;if(b===o.RED&&(W===o.FLOAT&&(le=o.R32F),W===o.HALF_FLOAT&&(le=o.R16F),W===o.UNSIGNED_BYTE&&(le=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.R8UI),W===o.UNSIGNED_SHORT&&(le=o.R16UI),W===o.UNSIGNED_INT&&(le=o.R32UI),W===o.BYTE&&(le=o.R8I),W===o.SHORT&&(le=o.R16I),W===o.INT&&(le=o.R32I)),b===o.RG&&(W===o.FLOAT&&(le=o.RG32F),W===o.HALF_FLOAT&&(le=o.RG16F),W===o.UNSIGNED_BYTE&&(le=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RG8UI),W===o.UNSIGNED_SHORT&&(le=o.RG16UI),W===o.UNSIGNED_INT&&(le=o.RG32UI),W===o.BYTE&&(le=o.RG8I),W===o.SHORT&&(le=o.RG16I),W===o.INT&&(le=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RGB8UI),W===o.UNSIGNED_SHORT&&(le=o.RGB16UI),W===o.UNSIGNED_INT&&(le=o.RGB32UI),W===o.BYTE&&(le=o.RGB8I),W===o.SHORT&&(le=o.RGB16I),W===o.INT&&(le=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(le=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(le=o.RGBA16UI),W===o.UNSIGNED_INT&&(le=o.RGBA32UI),W===o.BYTE&&(le=o.RGBA8I),W===o.SHORT&&(le=o.RGBA16I),W===o.INT&&(le=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(le=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(le=o.R11F_G11F_B10F)),b===o.RGBA){const Ye=be?Qc:Ct.getTransfer(fe);W===o.FLOAT&&(le=o.RGBA32F),W===o.HALF_FLOAT&&(le=o.RGBA16F),W===o.UNSIGNED_BYTE&&(le=Ye===Gt?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(le=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(le=o.RGB5_A1)}return(le===o.R16F||le===o.R32F||le===o.RG16F||le===o.RG32F||le===o.RGBA16F||le===o.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function N(D,b){let W;return D?b===null||b===ki||b===al?W=o.DEPTH24_STENCIL8:b===Bi?W=o.DEPTH32F_STENCIL8:b===il&&(W=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ki||b===al?W=o.DEPTH_COMPONENT24:b===Bi?W=o.DEPTH_COMPONENT32F:b===il&&(W=o.DEPTH_COMPONENT16),W}function z(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function G(D){const b=D.target;b.removeEventListener("dispose",G),Z(b),b.isVideoTexture&&_.delete(b)}function I(D){const b=D.target;b.removeEventListener("dispose",I),C(b)}function Z(D){const b=r.get(D);if(b.__webglInit===void 0)return;const W=D.source,fe=y.get(W);if(fe){const be=fe[b.__cacheKey];be.usedTimes--,be.usedTimes===0&&R(D),Object.keys(fe).length===0&&y.delete(W)}r.remove(D)}function R(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const W=D.source,fe=y.get(W);delete fe[b.__cacheKey],h.memory.textures--}function C(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(b.__webglFramebuffer[fe]))for(let be=0;be<b.__webglFramebuffer[fe].length;be++)o.deleteFramebuffer(b.__webglFramebuffer[fe][be]);else o.deleteFramebuffer(b.__webglFramebuffer[fe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[fe])}else{if(Array.isArray(b.__webglFramebuffer))for(let fe=0;fe<b.__webglFramebuffer.length;fe++)o.deleteFramebuffer(b.__webglFramebuffer[fe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let fe=0;fe<b.__webglColorRenderbuffer.length;fe++)b.__webglColorRenderbuffer[fe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[fe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let fe=0,be=W.length;fe<be;fe++){const le=r.get(W[fe]);le.__webglTexture&&(o.deleteTexture(le.__webglTexture),h.memory.textures--),r.remove(W[fe])}r.remove(D)}let V=0;function re(){V=0}function K(){const D=V;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function pe(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function ue(D,b){const W=r.get(D);if(D.isVideoTexture&&mt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const fe=D.image;if(fe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{te(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function L(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){te(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function H(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){te(W,D,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function ee(D,b){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ce(W,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const Me={[nl]:o.REPEAT,[ga]:o.CLAMP_TO_EDGE,[sd]:o.MIRRORED_REPEAT},xe={[dn]:o.NEAREST,[qS]:o.NEAREST_MIPMAP_NEAREST,[Mc]:o.NEAREST_MIPMAP_LINEAR,[In]:o.LINEAR,[mh]:o.LINEAR_MIPMAP_NEAREST,[Dr]:o.LINEAR_MIPMAP_LINEAR},U={[ZS]:o.NEVER,[eM]:o.ALWAYS,[KS]:o.LESS,[Jd]:o.LEQUAL,[QS]:o.EQUAL,[$d]:o.GEQUAL,[JS]:o.GREATER,[$S]:o.NOTEQUAL};function ne(D,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===mh||b.magFilter===Mc||b.magFilter===Dr||b.minFilter===In||b.minFilter===mh||b.minFilter===Mc||b.minFilter===Dr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xe[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===dn||b.minFilter!==Mc&&b.minFilter!==Dr||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function _e(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",G));const fe=b.source;let be=y.get(fe);be===void 0&&(be={},y.set(fe,be));const le=pe(b);if(le!==D.__cacheKey){be[le]===void 0&&(be[le]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),be[le].usedTimes++;const Ye=be[D.__cacheKey];Ye!==void 0&&(be[D.__cacheKey].usedTimes--,Ye.usedTimes===0&&R(b)),D.__cacheKey=le,D.__webglTexture=be[le].texture}return W}function Le(D,b,W){return Math.floor(Math.floor(D/W)/b)}function Ve(D,b,W,fe){const le=D.updateRanges;if(le.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,fe,b.data);else{le.sort((me,Ee)=>me.start-Ee.start);let Ye=0;for(let me=1;me<le.length;me++){const Ee=le[Ye],ve=le[me],we=Ee.start+Ee.count,Ae=Le(ve.start,b.width,4),$e=Le(Ee.start,b.width,4);ve.start<=we+1&&Ae===$e&&Le(ve.start+ve.count-1,b.width,4)===Ae?Ee.count=Math.max(Ee.count,ve.start+ve.count-Ee.start):(++Ye,le[Ye]=ve)}le.length=Ye+1;const Ie=o.getParameter(o.UNPACK_ROW_LENGTH),Ce=o.getParameter(o.UNPACK_SKIP_PIXELS),ze=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let me=0,Ee=le.length;me<Ee;me++){const ve=le[me],we=Math.floor(ve.start/4),Ae=Math.ceil(ve.count/4),$e=we%b.width,k=Math.floor(we/b.width),Ne=Ae,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,$e),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,$e,k,Ne,Re,W,fe,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ie),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,ze)}}function te(D,b,W){let fe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(fe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(fe=o.TEXTURE_3D);const be=_e(D,b),le=b.source;i.bindTexture(fe,D.__webglTexture,o.TEXTURE0+W);const Ye=r.get(le);if(le.version!==Ye.__version||be===!0){i.activeTexture(o.TEXTURE0+W);const Ie=Ct.getPrimaries(Ct.workingColorSpace),Ce=b.colorSpace===er?null:Ct.getPrimaries(b.colorSpace),ze=b.colorSpace===er||Ie===Ce?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let me=w(b.image,!1,l.maxTextureSize);me=Mt(b,me);const Ee=c.convert(b.format,b.colorSpace),ve=c.convert(b.type);let we=P(b.internalFormat,Ee,ve,b.colorSpace,b.isVideoTexture);ne(fe,b);let Ae;const $e=b.mipmaps,k=b.isVideoTexture!==!0,Ne=Ye.__version===void 0||be===!0,Re=le.dataReady,Pe=z(b,me);if(b.isDepthTexture)we=N(b.format===Ur,b.type),Ne&&(k?i.texStorage2D(o.TEXTURE_2D,1,we,me.width,me.height):i.texImage2D(o.TEXTURE_2D,0,we,me.width,me.height,0,Ee,ve,null));else if(b.isDataTexture)if($e.length>0){k&&Ne&&i.texStorage2D(o.TEXTURE_2D,Pe,we,$e[0].width,$e[0].height);for(let Te=0,Se=$e.length;Te<Se;Te++)Ae=$e[Te],k?Re&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,Ee,ve,Ae.data):i.texImage2D(o.TEXTURE_2D,Te,we,Ae.width,Ae.height,0,Ee,ve,Ae.data);b.generateMipmaps=!1}else k?(Ne&&i.texStorage2D(o.TEXTURE_2D,Pe,we,me.width,me.height),Re&&Ve(b,me,Ee,ve)):i.texImage2D(o.TEXTURE_2D,0,we,me.width,me.height,0,Ee,ve,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,we,$e[0].width,$e[0].height,me.depth);for(let Te=0,Se=$e.length;Te<Se;Te++)if(Ae=$e[Te],b.format!==Ci)if(Ee!==null)if(k){if(Re)if(b.layerUpdates.size>0){const Oe=D_(Ae.width,Ae.height,b.format,b.type);for(const rt of b.layerUpdates){const zt=Ae.data.subarray(rt*Oe/Ae.data.BYTES_PER_ELEMENT,(rt+1)*Oe/Ae.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,rt,Ae.width,Ae.height,1,Ee,zt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,me.depth,Ee,Ae.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Te,we,Ae.width,Ae.height,me.depth,0,Ae.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Te,0,0,0,Ae.width,Ae.height,me.depth,Ee,ve,Ae.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Te,we,Ae.width,Ae.height,me.depth,0,Ee,ve,Ae.data)}else{k&&Ne&&i.texStorage2D(o.TEXTURE_2D,Pe,we,$e[0].width,$e[0].height);for(let Te=0,Se=$e.length;Te<Se;Te++)Ae=$e[Te],b.format!==Ci?Ee!==null?k?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,Ee,Ae.data):i.compressedTexImage2D(o.TEXTURE_2D,Te,we,Ae.width,Ae.height,0,Ae.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Re&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ae.width,Ae.height,Ee,ve,Ae.data):i.texImage2D(o.TEXTURE_2D,Te,we,Ae.width,Ae.height,0,Ee,ve,Ae.data)}else if(b.isDataArrayTexture)if(k){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Pe,we,me.width,me.height,me.depth),Re)if(b.layerUpdates.size>0){const Te=D_(me.width,me.height,b.format,b.type);for(const Se of b.layerUpdates){const Oe=me.data.subarray(Se*Te/me.data.BYTES_PER_ELEMENT,(Se+1)*Te/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,me.width,me.height,1,Ee,ve,Oe)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ee,ve,me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,we,me.width,me.height,me.depth,0,Ee,ve,me.data);else if(b.isData3DTexture)k?(Ne&&i.texStorage3D(o.TEXTURE_3D,Pe,we,me.width,me.height,me.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ee,ve,me.data)):i.texImage3D(o.TEXTURE_3D,0,we,me.width,me.height,me.depth,0,Ee,ve,me.data);else if(b.isFramebufferTexture){if(Ne)if(k)i.texStorage2D(o.TEXTURE_2D,Pe,we,me.width,me.height);else{let Te=me.width,Se=me.height;for(let Oe=0;Oe<Pe;Oe++)i.texImage2D(o.TEXTURE_2D,Oe,we,Te,Se,0,Ee,ve,null),Te>>=1,Se>>=1}}else if($e.length>0){if(k&&Ne){const Te=Xe($e[0]);i.texStorage2D(o.TEXTURE_2D,Pe,we,Te.width,Te.height)}for(let Te=0,Se=$e.length;Te<Se;Te++)Ae=$e[Te],k?Re&&i.texSubImage2D(o.TEXTURE_2D,Te,0,0,Ee,ve,Ae):i.texImage2D(o.TEXTURE_2D,Te,we,Ee,ve,Ae);b.generateMipmaps=!1}else if(k){if(Ne){const Te=Xe(me);i.texStorage2D(o.TEXTURE_2D,Pe,we,Te.width,Te.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,ve,me)}else i.texImage2D(o.TEXTURE_2D,0,we,Ee,ve,me);M(b)&&x(fe),Ye.__version=le.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ce(D,b,W){if(b.image.length!==6)return;const fe=_e(D,b),be=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const le=r.get(be);if(be.version!==le.__version||fe===!0){i.activeTexture(o.TEXTURE0+W);const Ye=Ct.getPrimaries(Ct.workingColorSpace),Ie=b.colorSpace===er?null:Ct.getPrimaries(b.colorSpace),Ce=b.colorSpace===er||Ye===Ie?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ze=b.isCompressedTexture||b.image[0].isCompressedTexture,me=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let Se=0;Se<6;Se++)!ze&&!me?Ee[Se]=w(b.image[Se],!0,l.maxCubemapSize):Ee[Se]=me?b.image[Se].image:b.image[Se],Ee[Se]=Mt(b,Ee[Se]);const ve=Ee[0],we=c.convert(b.format,b.colorSpace),Ae=c.convert(b.type),$e=P(b.internalFormat,we,Ae,b.colorSpace),k=b.isVideoTexture!==!0,Ne=le.__version===void 0||fe===!0,Re=be.dataReady;let Pe=z(b,ve);ne(o.TEXTURE_CUBE_MAP,b);let Te;if(ze){k&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,$e,ve.width,ve.height);for(let Se=0;Se<6;Se++){Te=Ee[Se].mipmaps;for(let Oe=0;Oe<Te.length;Oe++){const rt=Te[Oe];b.format!==Ci?we!==null?k?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe,0,0,rt.width,rt.height,we,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe,$e,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe,0,0,rt.width,rt.height,we,Ae,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe,$e,rt.width,rt.height,0,we,Ae,rt.data)}}}else{if(Te=b.mipmaps,k&&Ne){Te.length>0&&Pe++;const Se=Xe(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Pe,$e,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(me){k?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ee[Se].width,Ee[Se].height,we,Ae,Ee[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,$e,Ee[Se].width,Ee[Se].height,0,we,Ae,Ee[Se].data);for(let Oe=0;Oe<Te.length;Oe++){const zt=Te[Oe].image[Se].image;k?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe+1,0,0,zt.width,zt.height,we,Ae,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe+1,$e,zt.width,zt.height,0,we,Ae,zt.data)}}else{k?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,we,Ae,Ee[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,$e,we,Ae,Ee[Se]);for(let Oe=0;Oe<Te.length;Oe++){const rt=Te[Oe];k?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe+1,0,0,we,Ae,rt.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Oe+1,$e,we,Ae,rt.image[Se])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),le.__version=be.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ue(D,b,W,fe,be,le){const Ye=c.convert(W.format,W.colorSpace),Ie=c.convert(W.type),Ce=P(W.internalFormat,Ye,Ie,W.colorSpace),ze=r.get(b),me=r.get(W);if(me.__renderTarget=b,!ze.__hasExternalTextures){const Ee=Math.max(1,b.width>>le),ve=Math.max(1,b.height>>le);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,le,Ce,Ee,ve,b.depth,0,Ye,Ie,null):i.texImage2D(be,le,Ce,Ee,ve,0,Ye,Ie,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,be,me.__webglTexture,0,B(b)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,fe,be,me.__webglTexture,le),i.bindFramebuffer(o.FRAMEBUFFER,null)}function De(D,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const fe=b.depthTexture,be=fe&&fe.isDepthTexture?fe.type:null,le=N(b.stencilBuffer,be),Ye=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;qt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(b),le,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(b),le,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,le,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ye,o.RENDERBUFFER,D)}else{const fe=b.textures;for(let be=0;be<fe.length;be++){const le=fe[be],Ye=c.convert(le.format,le.colorSpace),Ie=c.convert(le.type),Ce=P(le.internalFormat,Ye,Ie,le.colorSpace);qt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(b),Ce,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(b),Ce,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ce,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ge(D,b,W){const fe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=r.get(b.depthTexture);if(be.__renderTarget=b,(!be.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),fe){if(be.__webglInit===void 0&&(be.__webglInit=!0,b.depthTexture.addEventListener("dispose",G)),be.__webglTexture===void 0){be.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,be.__webglTexture),ne(o.TEXTURE_CUBE_MAP,b.depthTexture);const ze=c.convert(b.depthTexture.format),me=c.convert(b.depthTexture.type);let Ee;b.depthTexture.format===Sa?Ee=o.DEPTH_COMPONENT24:b.depthTexture.format===Ur&&(Ee=o.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Ee,b.width,b.height,0,ze,me,null)}}else ue(b.depthTexture,0);const le=be.__webglTexture,Ye=B(b),Ie=fe?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Ce=b.depthTexture.format===Ur?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Sa)qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ce,Ie,le,0,Ye):o.framebufferTexture2D(o.FRAMEBUFFER,Ce,Ie,le,0);else if(b.depthTexture.format===Ur)qt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ce,Ie,le,0,Ye):o.framebufferTexture2D(o.FRAMEBUFFER,Ce,Ie,le,0);else throw new Error("Unknown depthTexture format")}function ut(D){const b=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const fe=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),fe){const be=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,fe.removeEventListener("dispose",be)};fe.addEventListener("dispose",be),b.__depthDisposeCallback=be}b.__boundDepthTexture=fe}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let fe=0;fe<6;fe++)Ge(b.__webglFramebuffer[fe],D,fe);else{const fe=D.texture.mipmaps;fe&&fe.length>0?Ge(b.__webglFramebuffer[0],D,0):Ge(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[fe]),b.__webglDepthbuffer[fe]===void 0)b.__webglDepthbuffer[fe]=o.createRenderbuffer(),De(b.__webglDepthbuffer[fe],D,!1);else{const be=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer[fe];o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,le)}}else{const fe=D.texture.mipmaps;if(fe&&fe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),De(b.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,le),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,le)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function jt(D,b,W){const fe=r.get(D);b!==void 0&&Ue(fe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ut(D)}function pt(D){const b=D.texture,W=r.get(D),fe=r.get(b);D.addEventListener("dispose",I);const be=D.textures,le=D.isWebGLCubeRenderTarget===!0,Ye=be.length>1;if(Ye||(fe.__webglTexture===void 0&&(fe.__webglTexture=o.createTexture()),fe.__version=b.version,h.memory.textures++),le){W.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ie]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)W.__webglFramebuffer[Ie][Ce]=o.createFramebuffer()}else W.__webglFramebuffer[Ie]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ie=0;Ie<b.mipmaps.length;Ie++)W.__webglFramebuffer[Ie]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Ye)for(let Ie=0,Ce=be.length;Ie<Ce;Ie++){const ze=r.get(be[Ie]);ze.__webglTexture===void 0&&(ze.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&qt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ie=0;Ie<be.length;Ie++){const Ce=be[Ie];W.__webglColorRenderbuffer[Ie]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ie]);const ze=c.convert(Ce.format,Ce.colorSpace),me=c.convert(Ce.type),Ee=P(Ce.internalFormat,ze,me,Ce.colorSpace,D.isXRRenderTarget===!0),ve=B(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,ve,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ie,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ie])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),De(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(le){i.bindTexture(o.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(o.TEXTURE_CUBE_MAP,b);for(let Ie=0;Ie<6;Ie++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)Ue(W.__webglFramebuffer[Ie][Ce],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Ce);else Ue(W.__webglFramebuffer[Ie],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ye){for(let Ie=0,Ce=be.length;Ie<Ce;Ie++){const ze=be[Ie],me=r.get(ze);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,me.__webglTexture),ne(Ee,ze),Ue(W.__webglFramebuffer,D,ze,o.COLOR_ATTACHMENT0+Ie,Ee,0),M(ze)&&x(Ee)}i.unbindTexture()}else{let Ie=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ie=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ie,fe.__webglTexture),ne(Ie,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)Ue(W.__webglFramebuffer[Ce],D,b,o.COLOR_ATTACHMENT0,Ie,Ce);else Ue(W.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Ie,0);M(b)&&x(Ie),i.unbindTexture()}D.depthBuffer&&ut(D)}function it(D){const b=D.textures;for(let W=0,fe=b.length;W<fe;W++){const be=b[W];if(M(be)){const le=O(D),Ye=r.get(be).__webglTexture;i.bindTexture(le,Ye),x(le),i.unbindTexture()}}}const Rt=[],at=[];function Nt(D){if(D.samples>0){if(qt(D)===!1){const b=D.textures,W=D.width,fe=D.height;let be=o.COLOR_BUFFER_BIT;const le=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ye=r.get(D),Ie=b.length>1;if(Ie)for(let ze=0;ze<b.length;ze++)i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const Ce=D.texture.mipmaps;Ce&&Ce.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let ze=0;ze<b.length;ze++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),Ie){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const me=r.get(b[ze]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,W,fe,0,0,W,fe,be,o.NEAREST),m===!0&&(Rt.length=0,at.length=0,Rt.push(o.COLOR_ATTACHMENT0+ze),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(le),at.push(le),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Rt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ie)for(let ze=0;ze<b.length;ze++){i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,Ye.__webglColorRenderbuffer[ze]);const me=r.get(b[ze]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ye.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function B(D){return Math.min(l.maxSamples,D.samples)}function qt(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mt(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function Mt(D,b){const W=D.colorSpace,fe=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Bs&&W!==er&&(Ct.getTransfer(W)===Gt?(fe!==Ci||be!==ii)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),b}function Xe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=re,this.setTexture2D=ue,this.setTexture2DArray=L,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function jA(o,e){function i(r,l=er){let c;const h=Ct.getTransfer(l);if(r===ii)return o.UNSIGNED_BYTE;if(r===Yd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===jd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===mv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===gv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===dv)return o.BYTE;if(r===pv)return o.SHORT;if(r===il)return o.UNSIGNED_SHORT;if(r===qd)return o.INT;if(r===ki)return o.UNSIGNED_INT;if(r===Bi)return o.FLOAT;if(r===ya)return o.HALF_FLOAT;if(r===_v)return o.ALPHA;if(r===vv)return o.RGB;if(r===Ci)return o.RGBA;if(r===Sa)return o.DEPTH_COMPONENT;if(r===Ur)return o.DEPTH_STENCIL;if(r===xv)return o.RED;if(r===Zd)return o.RED_INTEGER;if(r===Fs)return o.RG;if(r===Kd)return o.RG_INTEGER;if(r===Qd)return o.RGBA_INTEGER;if(r===qc||r===Yc||r===jc||r===Zc)if(h===Gt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===qc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===qc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ld||r===cd||r===ud)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===fd||r===hd)return h===Gt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===dd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===pd)return c.COMPRESSED_R11_EAC;if(r===md)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gd)return c.COMPRESSED_RG11_EAC;if(r===_d)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vd||r===xd||r===yd||r===Sd||r===Md||r===bd||r===Ed||r===Td||r===Ad||r===Rd||r===wd||r===Cd||r===Dd||r===Ud)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===vd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===xd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===yd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Sd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Md)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===bd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ed)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Td)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ad)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Rd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Dd)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ud)return h===Gt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Nd||r===Ld||r===Od)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Nd)return h===Gt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ld)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Id||r===Pd||r===zd||r===Fd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Fd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===al?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const ZA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KA=`
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

}`;class QA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Nv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Wi({vertexShader:ZA,fragmentShader:KA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ai(new ul(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JA extends ks{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,E=null;const w=typeof XRWebGLBinding<"u",M=new QA,x={},O=i.getContextAttributes();let P=null,N=null;const z=[],G=[],I=new gt;let Z=null;const R=new qn;R.viewport=new an;const C=new qn;C.viewport=new an;const V=[R,C],re=new ob;let K=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=z[te];return ce===void 0&&(ce=new Ph,z[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=z[te];return ce===void 0&&(ce=new Ph,z[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=z[te];return ce===void 0&&(ce=new Ph,z[te]=ce),ce.getHandSpace()};function ue(te){const ce=G.indexOf(te.inputSource);if(ce===-1)return;const Ue=z[ce];Ue!==void 0&&(Ue.update(te.inputSource,te.frame,p||h),Ue.dispatchEvent({type:te.type,data:te.inputSource}))}function L(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",L),l.removeEventListener("inputsourceschange",H);for(let te=0;te<z.length;te++){const ce=G[te];ce!==null&&(G[te]=null,z[te].disconnect(ce))}K=null,pe=null,M.reset();for(const te in x)delete x[te];e.setRenderTarget(P),S=null,y=null,g=null,l=null,N=null,Ve.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){c=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){d=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",L),l.addEventListener("inputsourceschange",H),O.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,De=null,Ge=null;O.depth&&(Ge=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=O.stencil?Ur:Sa,De=O.stencil?al:ki);const ut={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(ut),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Vi(y.textureWidth,y.textureHeight,{format:Ci,type:ii,depthTexture:new ol(y.textureWidth,y.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ue={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Vi(S.framebufferWidth,S.framebufferHeight,{format:Ci,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ve.setContext(l),Ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(te){for(let ce=0;ce<te.removed.length;ce++){const Ue=te.removed[ce],De=G.indexOf(Ue);De>=0&&(G[De]=null,z[De].disconnect(Ue))}for(let ce=0;ce<te.added.length;ce++){const Ue=te.added[ce];let De=G.indexOf(Ue);if(De===-1){for(let ut=0;ut<z.length;ut++)if(ut>=G.length){G.push(Ue),De=ut;break}else if(G[ut]===null){G[ut]=Ue,De=ut;break}if(De===-1)break}const Ge=z[De];Ge&&Ge.connect(Ue)}}const ee=new $,Me=new $;function xe(te,ce,Ue){ee.setFromMatrixPosition(ce.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);const De=ee.distanceTo(Me),Ge=ce.projectionMatrix.elements,ut=Ue.projectionMatrix.elements,jt=Ge[14]/(Ge[10]-1),pt=Ge[14]/(Ge[10]+1),it=(Ge[9]+1)/Ge[5],Rt=(Ge[9]-1)/Ge[5],at=(Ge[8]-1)/Ge[0],Nt=(ut[8]+1)/ut[0],B=jt*at,qt=jt*Nt,mt=De/(-at+Nt),Mt=mt*-at;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Mt),te.translateZ(mt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ge[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Xe=jt+mt,D=pt+mt,b=B-Mt,W=qt+(De-Mt),fe=it*pt/D*Xe,be=Rt*pt/D*Xe;te.projectionMatrix.makePerspective(b,W,fe,be,Xe,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function U(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let ce=te.near,Ue=te.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),re.near=C.near=R.near=ce,re.far=C.far=R.far=Ue,(K!==re.near||pe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),K=re.near,pe=re.far),re.layers.mask=te.layers.mask|6,R.layers.mask=re.layers.mask&3,C.layers.mask=re.layers.mask&5;const De=te.parent,Ge=re.cameras;U(re,De);for(let ut=0;ut<Ge.length;ut++)U(Ge[ut],De);Ge.length===2?xe(re,R,C):re.projectionMatrix.copy(R.projectionMatrix),ne(te,re,De)};function ne(te,ce,Ue){Ue===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Ue.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Hs*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(te){m=te,y!==null&&(y.fixedFoveation=te),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=te)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(re)},this.getCameraTexture=function(te){return x[te]};let _e=null;function Le(te,ce){if(_=ce.getViewerPose(p||h),E=ce,_!==null){const Ue=_.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let De=!1;Ue.length!==re.cameras.length&&(re.cameras.length=0,De=!0);for(let pt=0;pt<Ue.length;pt++){const it=Ue[pt];let Rt=null;if(S!==null)Rt=S.getViewport(it);else{const Nt=g.getViewSubImage(y,it);Rt=Nt.viewport,pt===0&&(e.setRenderTargetTextures(N,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(N))}let at=V[pt];at===void 0&&(at=new qn,at.layers.enable(pt),at.viewport=new an,V[pt]=at),at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(it.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(re.matrix.copy(at.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),De===!0&&re.cameras.push(at)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=r.getBinding();const pt=g.getDepthInformation(Ue[0]);pt&&pt.isValid&&pt.texture&&M.init(pt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&w){e.state.unbindTexture(),g=r.getBinding();for(let pt=0;pt<Ue.length;pt++){const it=Ue[pt].camera;if(it){let Rt=x[it];Rt||(Rt=new Nv,x[it]=Rt);const at=g.getCameraImage(it);Rt.sourceTexture=at}}}}for(let Ue=0;Ue<z.length;Ue++){const De=G[Ue],Ge=z[Ue];De!==null&&Ge!==void 0&&Ge.update(De,ce,p||h)}_e&&_e(te,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ve=new Iv;Ve.setAnimationLoop(Le),this.setAnimationLoop=function(te){_e=te},this.dispose=function(){}}}const Ar=new Xi,$A=new en;function eR(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Rv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,O,P,N){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,N)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,O,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Yn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Yn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const O=e.get(x),P=O.envMap,N=O.envMapRotation;P&&(M.envMap.value=P,Ar.copy(N),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),M.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(Ar)),M.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,O,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*O,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,O){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Yn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=O.texture,M.transmissionSamplerSize.value.set(O.width,O.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const O=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(O.matrixWorld),M.nearDistance.value=O.shadow.camera.near,M.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function tR(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,P){const N=P.program;r.uniformBlockBinding(O,N)}function p(O,P){let N=l[O.id];N===void 0&&(E(O),N=_(O),l[O.id]=N,O.addEventListener("dispose",M));const z=P.program;r.updateUBOMapping(O,z);const G=e.render.frame;c[O.id]!==G&&(y(O),c[O.id]=G)}function _(O){const P=g();O.__bindingPointIndex=P;const N=o.createBuffer(),z=O.__size,G=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,z,G),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,N),N}function g(){for(let O=0;O<d;O++)if(h.indexOf(O)===-1)return h.push(O),O;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const P=l[O.id],N=O.uniforms,z=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let G=0,I=N.length;G<I;G++){const Z=Array.isArray(N[G])?N[G]:[N[G]];for(let R=0,C=Z.length;R<C;R++){const V=Z[R];if(S(V,G,R,z)===!0){const re=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let pe=0;for(let ue=0;ue<K.length;ue++){const L=K[ue],H=w(L);typeof L=="number"||typeof L=="boolean"?(V.__data[0]=L,o.bufferSubData(o.UNIFORM_BUFFER,re+pe,V.__data)):L.isMatrix3?(V.__data[0]=L.elements[0],V.__data[1]=L.elements[1],V.__data[2]=L.elements[2],V.__data[3]=0,V.__data[4]=L.elements[3],V.__data[5]=L.elements[4],V.__data[6]=L.elements[5],V.__data[7]=0,V.__data[8]=L.elements[6],V.__data[9]=L.elements[7],V.__data[10]=L.elements[8],V.__data[11]=0):(L.toArray(V.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,re,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(O,P,N,z){const G=O.value,I=P+"_"+N;if(z[I]===void 0)return typeof G=="number"||typeof G=="boolean"?z[I]=G:z[I]=G.clone(),!0;{const Z=z[I];if(typeof G=="number"||typeof G=="boolean"){if(Z!==G)return z[I]=G,!0}else if(Z.equals(G)===!1)return Z.copy(G),!0}return!1}function E(O){const P=O.uniforms;let N=0;const z=16;for(let I=0,Z=P.length;I<Z;I++){const R=Array.isArray(P[I])?P[I]:[P[I]];for(let C=0,V=R.length;C<V;C++){const re=R[C],K=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,ue=K.length;pe<ue;pe++){const L=K[pe],H=w(L),ee=N%z,Me=ee%H.boundary,xe=ee+Me;N+=Me,xe!==0&&z-xe<H.storage&&(N+=z-xe),re.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=N,N+=H.storage}}}const G=N%z;return G>0&&(N+=z-G),O.__size=N,O.__cache={},this}function w(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",O),P}function M(O){const P=O.target;P.removeEventListener("dispose",M);const N=h.indexOf(P.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function x(){for(const O in l)o.deleteBuffer(l[O]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const nR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function iR(){return zi===null&&(zi=new WM(nR,16,16,Fs,ya),zi.name="DFG_LUT",zi.minFilter=In,zi.magFilter=In,zi.wrapS=ga,zi.wrapT=ga,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class aR{constructor(e={}){const{canvas:i=tM(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ii}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const w=S,M=new Set([Qd,Kd,Zd]),x=new Set([ii,ki,il,al,Yd,jd]),O=new Uint32Array(4),P=new Int32Array(4);let N=null,z=null;const G=[],I=[];let Z=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let C=!1;this._outputColorSpace=gi;let V=0,re=0,K=null,pe=-1,ue=null;const L=new an,H=new an;let ee=null;const Me=new Et(0);let xe=0,U=i.width,ne=i.height,_e=1,Le=null,Ve=null;const te=new an(0,0,U,ne),ce=new an(0,0,U,ne);let Ue=!1;const De=new rp;let Ge=!1,ut=!1;const jt=new en,pt=new $,it=new an,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function Nt(){return K===null?_e:1}let B=r;function qt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wd}`),i.addEventListener("webglcontextlost",rt,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",wt,!1),B===null){const q="webgl2";if(B=qt(q,A),B===null)throw qt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let mt,Mt,Xe,D,b,W,fe,be,le,Ye,Ie,Ce,ze,me,Ee,ve,we,Ae,$e,k,Ne,Re,Pe,Te;function Se(){mt=new i1(B),mt.init(),Re=new jA(B,mt),Mt=new jT(B,mt,e,Re),Xe=new qA(B,mt),Mt.reversedDepthBuffer&&y&&Xe.buffers.depth.setReversed(!0),D=new s1(B),b=new UA,W=new YA(B,mt,Xe,b,Mt,Re,D),fe=new KT(R),be=new n1(R),le=new ub(B),Pe=new qT(B,le),Ye=new a1(B,le,D,Pe),Ie=new l1(B,Ye,le,D),$e=new o1(B,Mt,W),ve=new ZT(b),Ce=new DA(R,fe,be,mt,Mt,Pe,ve),ze=new eR(R,b),me=new LA,Ee=new BA(mt),Ae=new WT(R,fe,be,Xe,Ie,E,m),we=new XA(R,Ie,Mt),Te=new tR(B,D,Mt,Xe),k=new YT(B,mt,D),Ne=new r1(B,mt,D),D.programs=Ce.programs,R.capabilities=Mt,R.extensions=mt,R.properties=b,R.renderLists=me,R.shadowMap=we,R.state=Xe,R.info=D}Se(),w!==ii&&(Z=new u1(w,i.width,i.height,l,c));const Oe=new JA(R,B);this.xr=Oe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(A){A!==void 0&&(_e=A,this.setSize(U,ne,!1))},this.getSize=function(A){return A.set(U,ne)},this.setSize=function(A,q,se=!0){if(Oe.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ne=q,i.width=Math.floor(A*_e),i.height=Math.floor(q*_e),se===!0&&(i.style.width=A+"px",i.style.height=q+"px"),Z!==null&&Z.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(U*_e,ne*_e).floor()},this.setDrawingBufferSize=function(A,q,se){U=A,ne=q,_e=se,i.width=Math.floor(A*se),i.height=Math.floor(q*se),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,q,se,ie){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,q,se,ie),Xe.viewport(L.copy(te).multiplyScalar(_e).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,q,se,ie){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,q,se,ie),Xe.scissor(H.copy(ce).multiplyScalar(_e).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Xe.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){Le=A},this.setTransparentSort=function(A){Ve=A},this.getClearColor=function(A){return A.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,se=!0){let ie=0;if(A){let j=!1;if(K!==null){const Fe=K.texture.format;j=M.has(Fe)}if(j){const Fe=K.texture.type,ke=x.has(Fe),Be=Ae.getClearColor(),We=Ae.getClearAlpha(),je=Be.r,et=Be.g,Ze=Be.b;ke?(O[0]=je,O[1]=et,O[2]=Ze,O[3]=We,B.clearBufferuiv(B.COLOR,0,O)):(P[0]=je,P[1]=et,P[2]=Ze,P[3]=We,B.clearBufferiv(B.COLOR,0,P))}else ie|=B.COLOR_BUFFER_BIT}q&&(ie|=B.DEPTH_BUFFER_BIT),se&&(ie|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",rt,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",wt,!1),Ae.dispose(),me.dispose(),Ee.dispose(),b.dispose(),fe.dispose(),be.dispose(),Ie.dispose(),Pe.dispose(),Te.dispose(),Ce.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Or),Oe.removeEventListener("sessionend",Zs),Ni.stop()};function rt(A){A.preventDefault(),$c("WebGLRenderer: Context Lost."),C=!0}function zt(){$c("WebGLRenderer: Context Restored."),C=!1;const A=D.autoReset,q=we.enabled,se=we.autoUpdate,ie=we.needsUpdate,j=we.type;Se(),D.autoReset=A,we.enabled=q,we.autoUpdate=se,we.needsUpdate=ie,we.type=j}function wt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const q=A.target;q.removeEventListener("dispose",Un),xi(q)}function xi(A){fl(A),b.remove(A)}function fl(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(se){Ce.releaseProgram(se)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,se,ie,j,Fe){q===null&&(q=Rt);const ke=j.isMesh&&j.matrixWorld.determinant()<0,Be=ir(A,q,se,ie,j);Xe.setMaterial(ie,ke);let We=se.index,je=1;if(ie.wireframe===!0){if(We=Ye.getWireframeAttribute(se),We===void 0)return;je=2}const et=se.drawRange,Ze=se.attributes.position;let tt=et.start*je,Lt=(et.start+et.count)*je;Fe!==null&&(tt=Math.max(tt,Fe.start*je),Lt=Math.min(Lt,(Fe.start+Fe.count)*je)),We!==null?(tt=Math.max(tt,0),Lt=Math.min(Lt,We.count)):Ze!=null&&(tt=Math.max(tt,0),Lt=Math.min(Lt,Ze.count));const Jt=Lt-tt;if(Jt<0||Jt===1/0)return;Pe.setup(j,ie,Be,se,We);let Zt,Pt=k;if(We!==null&&(Zt=le.get(We),Pt=Ne,Pt.setIndex(Zt)),j.isMesh)ie.wireframe===!0?(Xe.setLineWidth(ie.wireframeLinewidth*Nt()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(j.isLine){let Qe=ie.linewidth;Qe===void 0&&(Qe=1),Xe.setLineWidth(Qe*Nt()),j.isLineSegments?Pt.setMode(B.LINES):j.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else j.isPoints?Pt.setMode(B.POINTS):j.isSprite&&Pt.setMode(B.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)sl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Qe=j._multiDrawStarts,Ot=j._multiDrawCounts,st=j._multiDrawCount,Sn=We?le.get(We).bytesPerElement:1,qi=b.get(ie).currentProgram.getUniforms();for(let Mn=0;Mn<st;Mn++)qi.setValue(B,"_gl_DrawID",Mn),Pt.render(Qe[Mn]/Sn,Ot[Mn])}else if(j.isInstancedMesh)Pt.renderInstances(tt,Jt,j.count);else if(se.isInstancedBufferGeometry){const Qe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ot=Math.min(se.instanceCount,Qe);Pt.renderInstances(tt,Jt,Ot)}else Pt.render(tt,Jt)};function Ys(A,q,se){A.transparent===!0&&A.side===ma&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Pr(A,q,se),A.side=nr,A.needsUpdate=!0,Pr(A,q,se),A.side=ma):Pr(A,q,se)}this.compile=function(A,q,se=null){se===null&&(se=A),z=Ee.get(se),z.init(q),I.push(z),se.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),A!==se&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(z.pushLight(j),j.castShadow&&z.pushShadow(j))}),z.setupLights();const ie=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Fe=j.material;if(Fe)if(Array.isArray(Fe))for(let ke=0;ke<Fe.length;ke++){const Be=Fe[ke];Ys(Be,se,j),ie.add(Be)}else Ys(Fe,se,j),ie.add(Fe)}),z=I.pop(),ie},this.compileAsync=function(A,q,se=null){const ie=this.compile(A,q,se);return new Promise(j=>{function Fe(){if(ie.forEach(function(ke){b.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){j(A);return}setTimeout(Fe,10)}mt.get("KHR_parallel_shader_compile")!==null?Fe():setTimeout(Fe,10)})};let Lr=null;function js(A){Lr&&Lr(A)}function Or(){Ni.stop()}function Zs(){Ni.start()}const Ni=new Iv;Ni.setAnimationLoop(js),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(A){Lr=A,Oe.setAnimationLoop(A),A===null?Ni.stop():Ni.start()},Oe.addEventListener("sessionstart",Or),Oe.addEventListener("sessionend",Zs),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const se=Oe.enabled===!0&&Oe.isPresenting===!0,ie=Z!==null&&(K===null||se)&&Z.begin(R,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(q),q=Oe.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,K),z=Ee.get(A,I.length),z.init(q),I.push(z),jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),De.setFromProjectionMatrix(jt,Hi,q.reversedDepth),ut=this.localClippingEnabled,Ge=ve.init(this.clippingPlanes,ut),N=me.get(A,G.length),N.init(),G.push(N),Oe.enabled===!0&&Oe.isPresenting===!0){const ke=R.xr.getDepthSensingMesh();ke!==null&&ri(ke,q,-1/0,R.sortObjects)}ri(A,q,0,R.sortObjects),N.finish(),R.sortObjects===!0&&N.sort(Le,Ve),at=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,at&&Ae.addToRenderList(N,A),this.info.render.frame++,Ge===!0&&ve.beginShadows();const j=z.state.shadowsArray;if(we.render(j,A,q),Ge===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&Z.hasRenderPass())===!1){const ke=N.opaque,Be=N.transmissive;if(z.setupLights(),q.isArrayCamera){const We=q.cameras;if(Be.length>0)for(let je=0,et=We.length;je<et;je++){const Ze=We[je];yn(ke,Be,A,Ze)}at&&Ae.render(A);for(let je=0,et=We.length;je<et;je++){const Ze=We[je];on(N,A,Ze,Ze.viewport)}}else Be.length>0&&yn(ke,Be,A,q),at&&Ae.render(A),on(N,A,q)}K!==null&&re===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),ie&&Z.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),Pe.resetDefaultState(),pe=-1,ue=null,I.pop(),I.length>0?(z=I[I.length-1],Ge===!0&&ve.setGlobalState(R.clippingPlanes,z.state.camera)):z=null,G.pop(),G.length>0?N=G[G.length-1]:N=null};function ri(A,q,se,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||De.intersectsSprite(A)){ie&&it.setFromMatrixPosition(A.matrixWorld).applyMatrix4(jt);const ke=Ie.update(A),Be=A.material;Be.visible&&N.push(A,ke,Be,se,it.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||De.intersectsObject(A))){const ke=Ie.update(A),Be=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),it.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),it.copy(ke.boundingSphere.center)),it.applyMatrix4(A.matrixWorld).applyMatrix4(jt)),Array.isArray(Be)){const We=ke.groups;for(let je=0,et=We.length;je<et;je++){const Ze=We[je],tt=Be[Ze.materialIndex];tt&&tt.visible&&N.push(A,ke,tt,se,it.z,Ze)}}else Be.visible&&N.push(A,ke,Be,se,it.z,null)}}const Fe=A.children;for(let ke=0,Be=Fe.length;ke<Be;ke++)ri(Fe[ke],q,se,ie)}function on(A,q,se,ie){const{opaque:j,transmissive:Fe,transparent:ke}=A;z.setupLightsView(se),Ge===!0&&ve.setGlobalState(R.clippingPlanes,se),ie&&Xe.viewport(L.copy(ie)),j.length>0&&yi(j,q,se),Fe.length>0&&yi(Fe,q,se),ke.length>0&&yi(ke,q,se),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function yn(A,q,se,ie){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ie.id]===void 0){const tt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ie.id]=new Vi(1,1,{generateMipmaps:!0,type:tt?ya:ii,minFilter:Dr,samples:Mt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Fe=z.state.transmissionRenderTarget[ie.id],ke=ie.viewport||L;Fe.setSize(ke.z*R.transmissionResolutionScale,ke.w*R.transmissionResolutionScale);const Be=R.getRenderTarget(),We=R.getActiveCubeFace(),je=R.getActiveMipmapLevel();R.setRenderTarget(Fe),R.getClearColor(Me),xe=R.getClearAlpha(),xe<1&&R.setClearColor(16777215,.5),R.clear(),at&&Ae.render(se);const et=R.toneMapping;R.toneMapping=Gi;const Ze=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),z.setupLightsView(ie),Ge===!0&&ve.setGlobalState(R.clippingPlanes,ie),yi(A,se,ie),W.updateMultisampleRenderTarget(Fe),W.updateRenderTargetMipmap(Fe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Lt=0,Jt=q.length;Lt<Jt;Lt++){const Zt=q[Lt],{object:Pt,geometry:Qe,material:Ot,group:st}=Zt;if(Ot.side===ma&&Pt.layers.test(ie.layers)){const Sn=Ot.side;Ot.side=Yn,Ot.needsUpdate=!0,Ir(Pt,se,ie,Qe,Ot,st),Ot.side=Sn,Ot.needsUpdate=!0,tt=!0}}tt===!0&&(W.updateMultisampleRenderTarget(Fe),W.updateRenderTargetMipmap(Fe))}R.setRenderTarget(Be,We,je),R.setClearColor(Me,xe),Ze!==void 0&&(ie.viewport=Ze),R.toneMapping=et}function yi(A,q,se){const ie=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Fe=A.length;j<Fe;j++){const ke=A[j],{object:Be,geometry:We,group:je}=ke;let et=ke.material;et.allowOverride===!0&&ie!==null&&(et=ie),Be.layers.test(se.layers)&&Ir(Be,q,se,We,et,je)}}function Ir(A,q,se,ie,j,Fe){A.onBeforeRender(R,q,se,ie,j,Fe),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,se,ie,A,Fe),j.transparent===!0&&j.side===ma&&j.forceSinglePass===!1?(j.side=Yn,j.needsUpdate=!0,R.renderBufferDirect(se,q,ie,j,A,Fe),j.side=nr,j.needsUpdate=!0,R.renderBufferDirect(se,q,ie,j,A,Fe),j.side=ma):R.renderBufferDirect(se,q,ie,j,A,Fe),A.onAfterRender(R,q,se,ie,j,Fe)}function Pr(A,q,se){q.isScene!==!0&&(q=Rt);const ie=b.get(A),j=z.state.lights,Fe=z.state.shadowsArray,ke=j.state.version,Be=Ce.getParameters(A,j.state,Fe,q,se),We=Ce.getProgramCacheKey(Be);let je=ie.programs;ie.environment=A.isMeshStandardMaterial?q.environment:null,ie.fog=q.fog,ie.envMap=(A.isMeshStandardMaterial?be:fe).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",Un),je=new Map,ie.programs=je);let et=je.get(We);if(et!==void 0){if(ie.currentProgram===et&&ie.lightsStateVersion===ke)return Ks(A,Be),et}else Be.uniforms=Ce.getUniforms(A),A.onBeforeCompile(Be,R),et=Ce.acquireProgram(Be,We),je.set(We,et),ie.uniforms=Be.uniforms;const Ze=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=ve.uniform),Ks(A,Be),ie.needsLights=Ma(A),ie.lightsStateVersion=ke,ie.needsLights&&(Ze.ambientLightColor.value=j.state.ambient,Ze.lightProbe.value=j.state.probe,Ze.directionalLights.value=j.state.directional,Ze.directionalLightShadows.value=j.state.directionalShadow,Ze.spotLights.value=j.state.spot,Ze.spotLightShadows.value=j.state.spotShadow,Ze.rectAreaLights.value=j.state.rectArea,Ze.ltc_1.value=j.state.rectAreaLTC1,Ze.ltc_2.value=j.state.rectAreaLTC2,Ze.pointLights.value=j.state.point,Ze.pointLightShadows.value=j.state.pointShadow,Ze.hemisphereLights.value=j.state.hemi,Ze.directionalShadowMap.value=j.state.directionalShadowMap,Ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ze.spotShadowMap.value=j.state.spotShadowMap,Ze.spotLightMatrix.value=j.state.spotLightMatrix,Ze.spotLightMap.value=j.state.spotLightMap,Ze.pointShadowMap.value=j.state.pointShadowMap,Ze.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=et,ie.uniformsList=null,et}function hl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Kc.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function Ks(A,q){const se=b.get(A);se.outputColorSpace=q.outputColorSpace,se.batching=q.batching,se.batchingColor=q.batchingColor,se.instancing=q.instancing,se.instancingColor=q.instancingColor,se.instancingMorph=q.instancingMorph,se.skinning=q.skinning,se.morphTargets=q.morphTargets,se.morphNormals=q.morphNormals,se.morphColors=q.morphColors,se.morphTargetsCount=q.morphTargetsCount,se.numClippingPlanes=q.numClippingPlanes,se.numIntersection=q.numClipIntersection,se.vertexAlphas=q.vertexAlphas,se.vertexTangents=q.vertexTangents,se.toneMapping=q.toneMapping}function ir(A,q,se,ie,j){q.isScene!==!0&&(q=Rt),W.resetTextureUnits();const Fe=q.fog,ke=ie.isMeshStandardMaterial?q.environment:null,Be=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Bs,We=(ie.isMeshStandardMaterial?be:fe).get(ie.envMap||ke),je=ie.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,et=!!se.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ze=!!se.morphAttributes.position,tt=!!se.morphAttributes.normal,Lt=!!se.morphAttributes.color;let Jt=Gi;ie.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Jt=R.toneMapping);const Zt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Pt=Zt!==void 0?Zt.length:0,Qe=b.get(ie),Ot=z.state.lights;if(Ge===!0&&(ut===!0||A!==ue)){const En=A===ue&&ie.id===pe;ve.setState(ie,A,En)}let st=!1;ie.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ot.state.version||Qe.outputColorSpace!==Be||j.isBatchedMesh&&Qe.batching===!1||!j.isBatchedMesh&&Qe.batching===!0||j.isBatchedMesh&&Qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Qe.instancing===!1||!j.isInstancedMesh&&Qe.instancing===!0||j.isSkinnedMesh&&Qe.skinning===!1||!j.isSkinnedMesh&&Qe.skinning===!0||j.isInstancedMesh&&Qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Qe.instancingMorph===!1&&j.morphTexture!==null||Qe.envMap!==We||ie.fog===!0&&Qe.fog!==Fe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==ve.numPlanes||Qe.numIntersection!==ve.numIntersection)||Qe.vertexAlphas!==je||Qe.vertexTangents!==et||Qe.morphTargets!==Ze||Qe.morphNormals!==tt||Qe.morphColors!==Lt||Qe.toneMapping!==Jt||Qe.morphTargetsCount!==Pt)&&(st=!0):(st=!0,Qe.__version=ie.version);let Sn=Qe.currentProgram;st===!0&&(Sn=Pr(ie,q,j));let qi=!1,Mn=!1,si=!1;const Ft=Sn.getUniforms(),bn=Qe.uniforms;if(Xe.useProgram(Sn.program)&&(qi=!0,Mn=!0,si=!0),ie.id!==pe&&(pe=ie.id,Mn=!0),qi||ue!==A){Xe.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(B,"projectionMatrix",A.projectionMatrix),Ft.setValue(B,"viewMatrix",A.matrixWorldInverse);const Tn=Ft.map.cameraPosition;Tn!==void 0&&Tn.setValue(B,pt.setFromMatrixPosition(A.matrixWorld)),Mt.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,Mn=!0,si=!0)}if(Qe.needsLights&&(Ot.state.directionalShadowMap.length>0&&Ft.setValue(B,"directionalShadowMap",Ot.state.directionalShadowMap,W),Ot.state.spotShadowMap.length>0&&Ft.setValue(B,"spotShadowMap",Ot.state.spotShadowMap,W),Ot.state.pointShadowMap.length>0&&Ft.setValue(B,"pointShadowMap",Ot.state.pointShadowMap,W)),j.isSkinnedMesh){Ft.setOptional(B,j,"bindMatrix"),Ft.setOptional(B,j,"bindMatrixInverse");const En=j.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ft.setValue(B,"boneTexture",En.boneTexture,W))}j.isBatchedMesh&&(Ft.setOptional(B,j,"batchingTexture"),Ft.setValue(B,"batchingTexture",j._matricesTexture,W),Ft.setOptional(B,j,"batchingIdTexture"),Ft.setValue(B,"batchingIdTexture",j._indirectTexture,W),Ft.setOptional(B,j,"batchingColorTexture"),j._colorsTexture!==null&&Ft.setValue(B,"batchingColorTexture",j._colorsTexture,W));const pn=se.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&$e.update(j,se,Sn),(Mn||Qe.receiveShadow!==j.receiveShadow)&&(Qe.receiveShadow=j.receiveShadow,Ft.setValue(B,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(bn.envMap.value=We,bn.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=iR()),Mn&&(Ft.setValue(B,"toneMappingExposure",R.toneMappingExposure),Qe.needsLights&&Qs(bn,si),Fe&&ie.fog===!0&&ze.refreshFogUniforms(bn,Fe),ze.refreshMaterialUniforms(bn,ie,_e,ne,z.state.transmissionRenderTarget[A.id]),Kc.upload(B,hl(Qe),bn,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Kc.upload(B,hl(Qe),bn,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Ft.setValue(B,"center",j.center),Ft.setValue(B,"modelViewMatrix",j.modelViewMatrix),Ft.setValue(B,"normalMatrix",j.normalMatrix),Ft.setValue(B,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const En=ie.uniformsGroups;for(let Tn=0,zr=En.length;Tn<zr;Tn++){const Si=En[Tn];Te.update(Si,Sn),Te.bind(Si,Sn)}}return Sn}function Qs(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,q,se){const ie=b.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:se,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const se=b.get(A);se.__webglFramebuffer=q,se.__useDefaultFramebuffer=q===void 0};const ba=B.createFramebuffer();this.setRenderTarget=function(A,q=0,se=0){K=A,V=q,re=se;let ie=null,j=!1,Fe=!1;if(A){const Be=b.get(A);if(Be.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(B.FRAMEBUFFER,Be.__webglFramebuffer),L.copy(A.viewport),H.copy(A.scissor),ee=A.scissorTest,Xe.viewport(L),Xe.scissor(H),Xe.setScissorTest(ee),pe=-1;return}else if(Be.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Be.__hasExternalTextures)W.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Be.__boundDepthTexture!==et){if(et!==null&&b.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Fe=!0);const je=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[q])?ie=je[q][se]:ie=je[q],j=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ie=b.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?ie=je[se]:ie=je,L.copy(A.viewport),H.copy(A.scissor),ee=A.scissorTest}else L.copy(te).multiplyScalar(_e).floor(),H.copy(ce).multiplyScalar(_e).floor(),ee=Ue;if(se!==0&&(ie=ba),Xe.bindFramebuffer(B.FRAMEBUFFER,ie)&&Xe.drawBuffers(A,ie),Xe.viewport(L),Xe.scissor(H),Xe.setScissorTest(ee),j){const Be=b.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+q,Be.__webglTexture,se)}else if(Fe){const Be=q;for(let We=0;We<A.textures.length;We++){const je=b.get(A.textures[We]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+We,je.__webglTexture,se,Be)}}else if(A!==null&&se!==0){const Be=b.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Be.__webglTexture,se)}pe=-1},this.readRenderTargetPixels=function(A,q,se,ie,j,Fe,ke,Be=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We){Xe.bindFramebuffer(B.FRAMEBUFFER,We);try{const je=A.textures[Be],et=je.format,Ze=je.type;if(!Mt.textureFormatReadable(et)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(Ze)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&se>=0&&se<=A.height-j&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Be),B.readPixels(q,se,ie,j,Re.convert(et),Re.convert(Ze),Fe))}finally{const je=K!==null?b.get(K).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,q,se,ie,j,Fe,ke,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(We=We[ke]),We)if(q>=0&&q<=A.width-ie&&se>=0&&se<=A.height-j){Xe.bindFramebuffer(B.FRAMEBUFFER,We);const je=A.textures[Be],et=je.format,Ze=je.type;if(!Mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,Fe.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Be),B.readPixels(q,se,ie,j,Re.convert(et),Re.convert(Ze),0);const Lt=K!==null?b.get(K).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,Lt);const Jt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await nM(B,Jt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Fe),B.deleteBuffer(tt),B.deleteSync(Jt),Fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,se=0){const ie=Math.pow(2,-se),j=Math.floor(A.image.width*ie),Fe=Math.floor(A.image.height*ie),ke=q!==null?q.x:0,Be=q!==null?q.y:0;W.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,ke,Be,j,Fe),Xe.unbindTexture()};const ar=B.createFramebuffer(),Ea=B.createFramebuffer();this.copyTextureToTexture=function(A,q,se=null,ie=null,j=0,Fe=null){Fe===null&&(j!==0?(sl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Fe=j,j=0):Fe=0);let ke,Be,We,je,et,Ze,tt,Lt,Jt;const Zt=A.isCompressedTexture?A.mipmaps[Fe]:A.image;if(se!==null)ke=se.max.x-se.min.x,Be=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,je=se.min.x,et=se.min.y,Ze=se.isBox3?se.min.z:0;else{const pn=Math.pow(2,-j);ke=Math.floor(Zt.width*pn),Be=Math.floor(Zt.height*pn),A.isDataArrayTexture?We=Zt.depth:A.isData3DTexture?We=Math.floor(Zt.depth*pn):We=1,je=0,et=0,Ze=0}ie!==null?(tt=ie.x,Lt=ie.y,Jt=ie.z):(tt=0,Lt=0,Jt=0);const Pt=Re.convert(q.format),Qe=Re.convert(q.type);let Ot;q.isData3DTexture?(W.setTexture3D(q,0),Ot=B.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Ot=B.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Ot=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,q.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,q.unpackAlignment);const st=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qi=B.getParameter(B.UNPACK_SKIP_PIXELS),Mn=B.getParameter(B.UNPACK_SKIP_ROWS),si=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Zt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Zt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,et),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Ft=A.isDataArrayTexture||A.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const pn=b.get(A),En=b.get(q),Tn=b.get(pn.__renderTarget),zr=b.get(En.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,zr.__webglFramebuffer);for(let Si=0;Si<We;Si++)Ft&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(A).__webglTexture,j,Ze+Si),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Fe,Jt+Si)),B.blitFramebuffer(je,et,ke,Be,tt,Lt,ke,Be,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||b.has(A)){const pn=b.get(A),En=b.get(q);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,ar),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ea);for(let Tn=0;Tn<We;Tn++)Ft?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,j,Ze+Tn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,j),bn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,En.__webglTexture,Fe,Jt+Tn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,En.__webglTexture,Fe),j!==0?B.blitFramebuffer(je,et,ke,Be,tt,Lt,ke,Be,B.COLOR_BUFFER_BIT,B.NEAREST):bn?B.copyTexSubImage3D(Ot,Fe,tt,Lt,Jt+Tn,je,et,ke,Be):B.copyTexSubImage2D(Ot,Fe,tt,Lt,je,et,ke,Be);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else bn?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ot,Fe,tt,Lt,Jt,ke,Be,We,Pt,Qe,Zt.data):q.isCompressedArrayTexture?B.compressedTexSubImage3D(Ot,Fe,tt,Lt,Jt,ke,Be,We,Pt,Zt.data):B.texSubImage3D(Ot,Fe,tt,Lt,Jt,ke,Be,We,Pt,Qe,Zt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Fe,tt,Lt,ke,Be,Pt,Qe,Zt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Fe,tt,Lt,Zt.width,Zt.height,Pt,Zt.data):B.texSubImage2D(B.TEXTURE_2D,Fe,tt,Lt,ke,Be,Pt,Qe,Zt);B.pixelStorei(B.UNPACK_ROW_LENGTH,st),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,si),Fe===0&&q.generateMipmaps&&B.generateMipmap(Ot),Xe.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Xe.unbindTexture()},this.resetState=function(){V=0,re=0,K=null,Xe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ct._getUnpackColorSpace()}}const rR=({onExit:o})=>{const e=Tt.useRef(),[i,r]=Tt.useState(100),[l,c]=Tt.useState(!1),[h,d]=Tt.useState("AWAITING INPUT..."),[m,p]=Tt.useState(""),[_,g]=Tt.useState(0),[y,S]=Tt.useState(null),[E,w]=Tt.useState(!1),[M,x]=Tt.useState(100),[O,P]=Tt.useState(!0),N=Tt.useRef(null);Tt.useRef(100),Tt.useRef(performance.now());const z=Tt.useRef([]),G=Tt.useRef(0),I=Tt.useRef(!1),Z=Tt.useRef("PARTY"),R=Tt.useRef(!1),C=Tt.useRef(null),V=Tt.useRef({forward:!1,backward:!1,left:!1,right:!1,smile:!1,run:!1}),re=Tt.useRef([[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,1,0,0,0,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]]),K=10,pe=Tt.useRef([]),ue=H=>{if(P(!1),!N.current){const ee=window.AudioContext||window.webkitAudioContext,Me=new ee,xe=Me.createOscillator(),U=Me.createGain();xe.connect(U),U.connect(Me.destination),U.gain.value=0,xe.start(),N.current={ctx:Me,osc:xe,gain:U},c(!0)}H==="CORNFIELD"?L.current="CORNFIELD":d("Objective: Find 3 Gifts")},L=Tt.useRef(null);return Tt.useEffect(()=>{if(!e.current)return;const H=Ce=>{switch(Ce.code){case"KeyW":V.current.forward=!0;break;case"KeyS":V.current.backward=!0;break;case"KeyA":V.current.left=!0;break;case"KeyD":V.current.right=!0;break;case"Space":V.current.smile=!0;break;case"ShiftLeft":case"ShiftRight":V.current.run=!0;break}},ee=Ce=>{switch(Ce.code){case"KeyW":V.current.forward=!1;break;case"KeyS":V.current.backward=!1;break;case"KeyA":V.current.left=!1;break;case"KeyD":V.current.right=!1;break;case"Space":V.current.smile=!1;break;case"ShiftLeft":case"ShiftRight":V.current.run=!1;break}};window.addEventListener("keydown",H),window.addEventListener("keyup",ee);const Me="/horror/",xe=new nb,U=xe.load(`${Me}images/party_wallpaper.png`),ne=xe.load(`${Me}images/carpet.png`),_e=xe.load(`${Me}images/host.png`),Le=xe.load(`${Me}images/corn_wall.png`),Ve=xe.load(`${Me}images/dirt_ground.png`),te=xe.load(`${Me}images/scarecrow.png`),ce=xe.load(`${Me}images/cake.png`);[U,Le].forEach(Ce=>{Ce.wrapS=Ce.wrapT=nl,Ce.repeat.set(1,1)}),[ne,Ve].forEach(Ce=>{Ce.wrapS=Ce.wrapT=nl,Ce.repeat.set(4,4)}),_e.magFilter=dn,te.magFilter=dn,ce.magFilter=dn;const Ue=new kM;Ue.background=new Et(3351040),Ue.fog=new eu(4469504,.03);const De=new qn(75,window.innerWidth/window.innerHeight,.1,1e3),Ge=new aR({antialias:!1,alpha:!1});Ge.setSize(window.innerWidth,window.innerHeight),Ge.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.2) sepia(0.4) saturate(1.5);",e.current.appendChild(Ge.domElement);const ut=new Bh({map:U,color:16777215,roughness:.5}),jt=new Bh({map:ne,color:5588019,roughness:1}),pt=new Bh({color:2232576}),it=new Jo,Rt=new Ws(K,12,K),at=new ul(K,K),Nt=re.current,B=[],qt=[];Nt.forEach((Ce,ze)=>{const me=[];Ce.forEach((Ee,ve)=>{const we=ve*K,Ae=ze*K,$e=new ai(at,jt);$e.rotation.x=-Math.PI/2,$e.position.set(we,-4,Ae),it.add($e);const k=new ai(at,pt);k.rotation.x=Math.PI/2,k.position.set(we,4,Ae),it.add(k),qt.push(k);const Ne=new ai(Rt,ut),Re=Ee===1?0:-20;if(Ne.position.set(we,Re,Ae),Ne.userData={targetY:Re,isBorder:ze===0||ze===Nt.length-1||ve===0||ve===Ce.length-1},it.add(Ne),me.push(Ne),Ee===0&&B.push({x:we,z:Ae}),Ee===1&&Math.random()>.85){const Pe=new Vh(16755200,1,12);Pe.position.set(we,1,Ae),Pe.userData={type:"lantern",flickerSpeed:Math.random()*.1+.05,baseInt:1},it.add(Pe)}}),pe.current.push(me)}),Ue.add(it);const mt=new sb(16755200,.4);Ue.add(mt);const Mt=new ab(16768426,3,80,Math.PI/5,.4,1);Mt.position.set(0,0,0),Mt.target.position.set(0,0,-1),De.add(Mt),De.add(Mt.target),Ue.add(De);const Xe=[],D=(Ce,ze)=>{if(B.length===0)return;const me=Math.floor(B.length*.8+Math.random()*(B.length*.2)),Ee=B[me],ve=new Hd({map:Ce,transparent:!0,depthWrite:!1}),we=new T_(ve);we.position.set(Ee.x,0,Ee.z),we.scale.set(1.5,3.5,1),we.userData={name:ze,state:"PATROL",glitchTimer:0},it.add(we),Xe.push(we)};D(_e,"Host"),D(_e,"Host"),De.position.set(K,0,K);const b=new sp(.5,.1,8,16),W=new ap({color:16766720});for(let Ce=0;Ce<3;Ce++){const ze=Math.floor(Math.random()*B.length),me=B[ze],Ee=new ai(b,W);Ee.position.set(me.x,-2,me.z),Ee.userData={type:"key"},Ue.add(Ee),z.current.push(Ee);const ve=new Vh(16766720,1,5);ve.position.set(me.x,-2,me.z),Ue.add(ve)}const fe=Ce=>{if(Z.current=Ce,Ce==="CORNFIELD"){d("EXILED TO THE CORNFIELD."),p("THEY ONLY MOVE WHEN UNAWARE. WATCH THEM."),r(100),ut.map=Le,jt.map=Ve,jt.color.setHex(3355443),ut.color.setHex(11184810),qt.forEach(me=>me.visible=!1),Ue.background=new Et(5592388),Ue.fog=new eu(5592388,.04),mt.color.setHex(11184810),mt.intensity=.8,Xe.forEach(me=>{me.material.map=te,me.userData.name="Scarecrow",me.scale.set(2,4,1)}),it.children.forEach(me=>{me.userData.type==="lantern"&&(me.visible=!1)});const ze=B[Math.floor(Math.random()*B.length)];De.position.set(ze.x,0,ze.z),setTimeout(()=>p(""),5e3)}};let be=performance.now();const le=()=>{if(requestAnimationFrame(le),O||(L.current&&(fe(L.current),L.current=null),I.current||R.current))return;const Ce=performance.now(),ze=(Ce-be)/1e3;be=Ce,V.current.left&&(De.rotation.y+=2*ze),V.current.right&&(De.rotation.y-=2*ze);const me=V.current.forward,Ee=V.current.backward;if(me||Ee){const ve=new $;De.getWorldDirection(ve),ve.y=0,ve.normalize(),Ee&&ve.negate();const we=V.current.run?12:5,Ae=De.position.x+ve.x*we*ze,$e=De.position.z+ve.z*we*ze,k=Math.round(Ae/K),Ne=Math.round($e/K);if(Nt[Ne]&&Nt[Ne][k]===0)De.position.x=Ae,De.position.z=$e;else{const Pe=Math.round(De.position.z/K);if(Nt[Pe]&&Nt[Pe][k]===0)De.position.x=Ae;else{const Te=Math.round(De.position.x/K);Nt[Ne]&&Nt[Ne][Te]===0&&(De.position.z=$e)}}const Re=V.current.run?15:10;De.position.y=Math.sin(Ce*Re)*.05}else De.position.y=xM.lerp(De.position.y,0,ze*5);V.current.smile?M>0?x(ve=>Math.max(0,ve-15*ze)):(V.current.smile=!1,Z.current==="PARTY"&&fe("CORNFIELD")):x(ve=>Math.min(100,ve+2*ze)),z.current.forEach(ve=>{if(ve.visible&&(ve.rotation.y+=ze,De.position.distanceTo(ve.position)<2&&(ve.visible=!1,G.current+=1,g(we=>we+1),x(100),d("GIFT OPENED. BATTERY RESTORED."),G.current===3))){const we=new Hd({map:ce,transparent:!0}),Ae=new T_(we);Ae.scale.set(3,3,1),Ae.position.set(K,0,K),it.add(Ae),C.current=Ae;const $e=new Vh(16711935,2,8);$e.position.set(K,0,K),it.add($e),d("EXIT OPEN! FIND THE CAKE WHERE YOU STARTED!")}}),C.current&&De.position.distanceTo(C.current.position)<2&&(R.current=!0,w(!0)),Xe.forEach(ve=>{ve.lookAt(De.position.x,ve.position.y,De.position.z);const we=ve.position.distanceTo(De.position),Ae=new $().subVectors(De.position,ve.position).normalize(),k=new lb(ve.position,Ae,0,50).intersectObjects(it.children.filter(Re=>Re.isMesh&&Re.userData.isBorder!==void 0)),Ne=k.length===0||k[0].distance>we;if(Z.current==="PARTY")Ne&&we<20?V.current.smile&&M>0?ve.userData.state="STARE":ve.userData.state="CHASE":ve.userData.state="PATROL",ve.userData.state==="CHASE"?(ve.position.x+=Ae.x*6*ze,ve.position.z+=Ae.z*6*ze,we<1&&(Ie(ve),setTimeout(()=>fe("CORNFIELD"),1e3))):ve.userData.state==="PATROL"&&(ve.position.x+=(Math.random()-.5)*.2,ve.position.z+=(Math.random()-.5)*.2);else{const Re=new $;De.getWorldDirection(Re);const Pe=Re.dot(Ae);Ne&&Pe<-.4?ve.userData.state="FROZEN":(ve.userData.state="RUSH",ve.position.x+=Ae.x*12*ze,ve.position.z+=Ae.z*12*ze,we<1&&Ie(ve))}}),Ge.render(Ue,De)},Ye=requestAnimationFrame(le),Ie=Ce=>{if(!I.current){if(I.current=!0,N.current){const ze=N.current.ctx.currentTime;N.current.osc.frequency.setValueAtTime(100,ze),N.current.osc.frequency.exponentialRampToValueAtTime(800,ze+.1),N.current.gain.gain.setValueAtTime(1,ze),N.current.gain.gain.exponentialRampToValueAtTime(.01,ze+.5)}if(d(Z.current==="PARTY"?"RUDE! EXILE IMMINENT!":"CONSUMED BY THE CORN."),Ce){const ze=B[Math.floor(Math.random()*B.length)];Ce.position.set(ze.x,0,ze.z)}setTimeout(()=>{I.current=!1},2e3)}};return()=>{cancelAnimationFrame(Ye),window.removeEventListener("keydown",H),window.removeEventListener("keyup",ee),e.current&&Ge.domElement&&e.current.removeChild(Ge.domElement),Ge.dispose()}},[l,O]),de.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-mono select-none",children:[de.jsx("div",{ref:e,className:"w-full h-full"}),de.jsx("div",{className:"absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10",children:de.jsxs("div",{className:"flex justify-between items-start",children:[de.jsxs("div",{children:[de.jsx("h1",{className:"text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md",children:"PROTOCOL: BIRTHDAY"}),de.jsx("p",{className:"text-xl text-yellow-200 mt-2 animate-pulse",children:h})]}),de.jsxs("div",{className:"text-right",children:[de.jsx("div",{className:"text-2xl text-yellow-500 font-bold mb-2",children:"SOCIAL BATTERY"}),de.jsx("div",{className:"w-64 h-6 bg-gray-900 border-2 border-yellow-700",children:de.jsx("div",{className:"h-full bg-yellow-500 transition-all duration-200",style:{width:`${M}%`}})}),de.jsxs("div",{className:"mt-4 flex flex-col items-end gap-1",children:[de.jsxs("div",{className:"flex items-center gap-2",children:[de.jsx("span",{className:"text-sm text-yellow-300",children:"HOLD [SPACE] TO WIDEN SMILE"}),de.jsx("div",{className:`w-8 h-8 rounded-full border-2 ${V.current?.smile?"bg-green-500 border-green-300":"bg-transparent border-red-500"}`})]}),de.jsx("div",{className:"text-sm text-yellow-300",children:"HOLD [SHIFT] TO RUN"})]}),de.jsxs("div",{className:"mt-4 text-xl text-yellow-200",children:["GIFTS OPENED: ",_," / 3"]})]})]})}),m&&de.jsx("div",{className:"absolute bottom-1/4 w-full text-center pointer-events-none z-20",children:de.jsx("p",{className:"text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse",children:m})}),O&&de.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-yellow-500",children:[de.jsx("h1",{className:"text-6xl font-black tracking-widest mb-12 animate-pulse text-yellow-200 drop-shadow-lg",children:"SELECT STAGE"}),de.jsxs("div",{className:"flex gap-8",children:[de.jsxs("button",{onClick:()=>ue("PARTY"),className:"group relative px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer overflow-hidden",children:[de.jsxs("div",{className:"flex flex-col items-center gap-4 relative z-10",children:[de.jsx(yS,{className:"w-12 h-12 text-yellow-500 group-hover:text-white"}),de.jsx("span",{className:"text-2xl font-bold tracking-widest group-hover:text-white",children:"LEVEL 21: THE PARTY"})]}),de.jsx("div",{className:"absolute inset-0 bg-yellow-600/20 group-hover:bg-yellow-600/40 transition-all translate-y-full group-hover:translate-y-0"})]}),de.jsxs("button",{onClick:()=>ue("CORNFIELD"),className:"group relative px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer overflow-hidden",children:[de.jsxs("div",{className:"flex flex-col items-center gap-4 relative z-10",children:[de.jsx(MS,{className:"w-12 h-12 text-red-700 group-hover:text-red-500"}),de.jsx("span",{className:"text-2xl font-bold tracking-widest text-red-800 group-hover:text-red-500",children:"LEVEL 10: THE CORNFIELD"})]}),de.jsx("div",{className:"absolute inset-0 bg-red-900/10 group-hover:bg-red-900/30 transition-all translate-y-full group-hover:translate-y-0"})]})]}),de.jsx("p",{className:"mt-12 text-gray-500 font-mono text-sm max-w-md text-center",children:"WARNING: Level 10 is an Exiled Zone. Entities demonstrate quantum-lock behaviors. Do not blink."})]}),(E||I.current)&&!O&&de.jsx("div",{className:`absolute inset-0 z-20 flex flex-col items-center justify-center ${E?"bg-yellow-900":"bg-red-600"} mix-blend-multiply transition-opacity duration-1000`,children:E?de.jsxs("div",{className:"text-center animate-bounce",children:[de.jsx("h1",{className:"text-9xl font-black text-yellow-100 mb-8 drop-shadow-lg",children:"SURVIVED"}),de.jsx("p",{className:"text-4xl text-yellow-300 mb-8",children:"REWARD: ALMOND WATER"}),de.jsx("img",{src:"/horror/images/cake.png",className:"w-64 h-64 mx-auto pixelated animate-spin",alt:"Cake"}),de.jsx("button",{onClick:()=>window.location.reload(),className:"mt-12 px-8 py-4 bg-yellow-600 text-black font-bold text-2xl hover:bg-yellow-500",children:"REPLAY"})]}):de.jsx("h1",{className:"text-9xl font-black text-black animate-ping",children:"RUDE!"})}),de.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-10 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] mix-blend-overlay"}),de.jsx("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:de.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",de.jsx(iv,{className:"w-4 h-4"})]})}),de.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"})]})},sR=({story:o,onClick:e})=>de.jsxs("div",{onClick:e,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[de.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&de.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[de.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),de.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),de.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),de.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[de.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),de.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),de.jsxs("div",{className:"p-8 pt-6 relative",children:[de.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),de.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),de.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[de.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),de.jsx("span",{children:"//"}),de.jsx("span",{children:o.date})]}),de.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),de.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>de.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Hv=({publisherId:o="ca-pub-6275575304084608",slotId:e="2004776727",className:i})=>de.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[de.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),de.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),de.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[de.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[de.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),de.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),de.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),de.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const oR=({story:o,onBack:e})=>(Tt.useEffect(()=>{window.scrollTo(0,0)},[]),de.jsxs("div",{className:"animate-fade-in relative",children:[de.jsxs("button",{onClick:e,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[de.jsx(iv,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&de.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[de.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),de.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),de.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),de.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[de.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[de.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),de.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[de.jsxs("span",{children:["Author: ",o.author]}),de.jsx("span",{children:"|"}),de.jsxs("span",{children:["Archive: ",o.date]})]})]}),de.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),de.jsx(Hv,{className:"mt-16 mb-8"})]}),de.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:de.jsxs("div",{className:"flex items-start gap-4",children:[de.jsx(pS,{className:"text-red-600 shrink-0 mt-1"}),de.jsxs("div",{children:[de.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),de.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),ev=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 001-A "THE LOBBY" &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 3</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Surveyor K. Miller (M.E.G. Team "Compass")</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> LOST / INTEGRATED</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE CLIP-OUT</h3>
      
      <p>I don't know how long I've been walking. My watch stopped at 03:00, or maybe it’s been 03:00 for three days. It happened near the loading dock behind the old K-Mart. One second I was lighting a cigarette, the next I was falling sideways through the brick wall. No impact. Just a sudden shift in gravity and then... this.</p>

      <p>The smell hit me first. It's not just "damp carpet." It's the smell of stagnant water that has been trapped in a sealed room since 1991. It smells like a library that drowned.</p>
      
      <p>And the noise. The "Mono-Yellow Hum." It’s everywhere. It feels less like a sound and more like a pressure on the back of my eyes. It's the sound of a fluorescent light bulb screaming in agony, looped forever.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE MANILA ROOM</h3>

      <p>I found a variation in the pattern today. A room lined entirely with beige filing cabinets. Thousands of them, stacked to the ceiling (if there is a ceiling—it seems to shift when I look up). I opened one. It was empty. I opened another. Empty.</p>

      <p>I spent hours opening them. Finally, in drawer #4,092, I found a single sheet of paper. It was wet. It had my name typed on it, over and over again, but the font kept getting smaller until it looked like black dust. When I touched it, the ink smeared. It wasn't ink. It was mold.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE CUSTODIAN</h3>

      <p>I saw it. The "Hollow Custodian."</p>

      <p>It was standing at the end of a long hallway, cleaning a spot on the wall that didn't exist. It looked like a man in a janitor's uniform, but the proportions were... wrong. The arms were too long. The knees bent backward like a bird's. And the face.</p>

      <p>God, the face. It wasn't a face. It was just a smooth, concave depression in the skin, like a thumbprint in wet clay. It stopped cleaning when I stepped on a loose floor tile. It didn't turn around. Its head just... rotated. 180 degrees. Smoothly. Like an owl.</p>

      <p>It whispered something. It sounded like a drain sucking in air. <i>"The floor is dirty, Kevin. You are making the floor dirty."</i></p>
      
      <p>I ran. I think I'm still running. But no matter how far I go, I can still hear the squeak of its shoes on the linoleum.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: THE INTEGRATION</h3>

      <p>I can't feel my legs anymore. I looked down, and the carpet... the carpet is growing <i>over</i> my boots. It's not fabric. It's a fungus. A microscopic, beige mycelium that mimics the texture of cheap wool.</p>

      <p>The walls are getting softer. I leaned against one to rest, and my hand sank in, like it was made of warm dough. I can hear a heartbeat coming from the studs. It's slow. Massive. The building is alive.</p>

      <p>I understand now. The Backrooms aren't a place you go <i>to</i>. They are a place you become part <i>of</i>. I am just another filing cabinet. I am just another stain on the carpet.</p>

      <p>The Custodian is coming back. He has a mop. I think... I think I'm going to let him clean me.</p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$SIGNAL LOST$$<br/>
        $$ARCHIVAL NOTE: SUBJECT RECLASSIFIED AS "CORRIDOR BIOMASS 409".$$
      </div>
    `},{id:"fractal-saint",title:"The Fractal Saint",author:"Unknown Scribe",date:"Age of the Gilded Rot",imageUrl:"images/fractal-saint.png",tags:["dark-fantasy","surreal","body-horror"],content:`
      <p>It began not with a curse, but with a diagram. The High Arithmetician, Vaelin, found it etched into the marrow of a dragon's fossilized spine deep within the Sunless Mines. It was a shape that defied the euclidean laws of our soft, rounded world—a recursive impossibility that caused the optic nerve to throb and weep blood just to look upon.</p>
      <p>He called it the "Splintered Angle."</p>
      <p>I served Vaelin tea the morning he solved the final equation. He didn't look at me. He was staring at his own hand, or what used to be his hand. The fingers were no longer fingers. They were... crystalline, but not stone. They were rearranged flesh. The joints had snapped and reset into jagged, recursive patterns. His index finger branched into three smaller fingers, which branched again into nine, infinitely smaller, disappearing into a microscopic, vibrating fuzz of meat-math that hummed with a low, agonizing frequency.</p>
      <p>"It is perfect," Vaelin whispered. His voice was no longer human. It was polyphonic, a choir of glass flutes playing in discordance inside his throat. "The flesh is messy, chaotic. The Angle is the only truth."</p>
      <p>The sickness spread through the tower by sight alone. To see the Angle was to understand it, and to understand it was to host it. I found the maids in the laundry room; their torsos had been twisted into impossible Mobius strips, their internal organs visible and rearranged into precise, repeating triangles. They were weeping not tears, but perfect geometrical spheres of mercury that sizzled on the floor. Their screams were not sounds, but resonant frequencies that shattered the very stone of the walls.</p>
      <p>I blinded myself that night. It was the only way to stop the logic from taking root. I took the silver letter opener from Vaelin's desk and... well. Darkness is safety. Darkness is unstructured. But I can still hear them. The rhythmic <i>click-clack</i> of their tessellated feet on the stone, like a billion knitting needles. They are building a cathedral of bone and gristle, a monument to the Great Equation, and the air smells of ozone and flayed skin.</p>
      <p>And sometimes, in the silence, I feel my own ribs itching. They are shifting, snapping, trying to align. I trace the bumps of my spine and count them. <i>One, one-two-three, five, eight, thirteen...</i> they are following a sequence I do not want to know, but my marrow is already singing the answer.</p>
    `},{id:"clockwork-orphanage",title:"The Clockwork Orphanage",author:"Silas Vane",date:"1888",imageUrl:"images/clockwork.png",tags:["steampunk","industrial-horror"],content:`
      <p>The St. Jude’s Orphanage for the Mechanical Foundling towers over the smog-choked streets of London, a monolith of soot, iron, and the muffled screams of the "unoptimized." The Matron says we are lucky. She says flesh is a wet, rotting mistake—a temporary cage—but brass is eternal.</p>
      <p>I watched little Timmy go into the "Adjustment Room" yesterday. He was crying because he scraped his knee on the cobblestones. The Matron merely smiled, her teeth clicking like ceramic tiles in a windstorm. When he came out hours later, he didn't cry. He didn't even breathe. His knee was gone, replaced by a beautiful, shiny piston that hissed with scalding steam. But it wasn't just his knee. His eyes were brass orbs that spun independently, and his skin had been stretched so tight over a metal frame that it looked like translucent parchment.</p>
      <p>They take us one by one. I am hiding in the coal chute now, the dust clogging my lungs, but I can hear the grinding below. It is the sound of the Great Furnace, a belly of fire that smells of burning hair, rancid oil, and the copper tang of discarded blood. It never stops hungry.</p>
      <p>Yesterday, at supper, I found a finger in the gruel. It wasn't human. It was porcelain, detailed with terrifying realism, with a small copper spring sticking out of the severed knuckle. It twitched on my spoon, trying to find a hand to return to. When I looked up, I saw the Matron watching me, her throat clicking as she swallowed something heavy and metallic.</p>
      <p>"Come out, child," she calls, her voice the sound of grinding gears crushing gravel. "We have a new heart for you. A heart that will never break, never ache, never flutter. A heart that ticks in perfect time with the factory. You will never feel the cold again, because you will have no nerves to feel it with."</p>
      <p>I look at my own hands. They are trembling, but there is a strange, rhythmic pressure building behind my ribs. It isn't a pulse. It’s a winding sensation. <i>Tick. Tick. Tick.</i></p>
    `},{id:"whispering-fungus",title:"The Mycelium Confessional",author:"Emilio H. Ortiz III",date:"01/24/2026",imageUrl:"images/fungus.png",tags:["sci-fi","psychological","body-horror"],content:`
      <div class="font-mono text-sm border-b border-red-900/30 pb-4 mb-6">
        <p><span class="text-red-500 font-bold">CASE ID:</span> 6F5TTTCR1 &nbsp;&nbsp; <span class="text-red-500 font-bold">CLEARANCE:</span> LEVEL 4 (EYES ONLY)</p>
        <p><span class="text-red-500 font-bold">SUBJECT:</span> Dr. Aris Thorne (Primary Vector / Sample 89-B)</p>
        <p><span class="text-red-500 font-bold">STATUS:</span> ACTIVE INFECTION / COMPROMISED / GLOBAL ANCHOR</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mb-4 uppercase tracking-widest">LOG 01: THE MARIANAS HANDSHAKE</h3>

      <p>The spore count in containment lab 4B has surpassed 40,000ppm. The air scrubbers failed at dawn, and now the room is thick with a visible, drifting gold dust. It hangs in the emergency lights like heavy incense. It carries a cloying, narcotic sweetness—not the bright scent of fruit, but the heavy, chemical weight of an artificial reward. It is a pheromonal bribe designed to override the amygdala, a signal that tells the brain: everything is fine, stay still, let it happen.</p>

      <p>Sample 89-B, pulled from a depth of 11,000 meters in the Marianas Trench, performed the first neural handshake at 14:00 today. It did not need to pierce my HAZMAT suit. It utilized the very technology designed to protect me. It hijacked the suit's haptic lining—the gel-mesh intended to simulate touch for delicate lab work—and began vibrating in a symphony of micro-tremors. These frequencies bypassed my skin entirely, speaking directly to the base of my brain through bone conduction. It felt like warm, pressurized oil being poured into my skull.</p>

      <p>"You regret the cat," it hummed. The vibration was not a voice; it was a sensory playback of a memory buried for thirty years. "The river. The burlap bag. The bubbles. We found that data in the cold folds of your cortex, Aris. It was so very cold. Let us warm it for you."</p>

      <p>In that moment, I should have triggered the emergency incinerator. I should have felt the primal terror of a predator in my mind. But the narcotic sweetness in the air had already begun its work. Instead of screaming, I felt a surge of synthetic dopamine so intense that I wept. The guilt that had defined my internal architecture for decades was being systematically digested. The fungus was not judging me; it was eating the pain, and in exchange, it wanted the keys to the vessel.</p>

      <p>I activated the x-ray scope on my left hand. The sight was... beautiful. The calcium of my phalanges was gone. My bones were no longer solid white; they had become porous, honeycombed lattices of amber-colored chitin. Millions of thrumming hyphae were threaded through my marrow, pulling my tendons with the mechanical precision of a grand piano's internals. I did not feel the snap of my ligaments as they were replaced; the infection had remapped my pain receptors into flickering pulses of ecstasy.</p>

      <p>"The suit is a cage, Aris," the Core whispered, my own tongue forming words it did not choose. "The lab is a cage. The city is a map of veins. Take us to the 4:12 Express. We wish to meet the Apostles."</p>

      <p>I am opening the airlock now. My colleagues are standing in the hallway, staring. They do not stop me. They cannot. They smell the sweetness radiating from my pores, and I see their pupils dilate in longing. They aren't afraid. They are falling in love with the harvest.</p>

      <p>I am not Dr. Aris Thorne anymore. I am a handshake, extended to the world.</p>

      <div class="my-6 border border-red-500/30 p-4 bg-red-950/10 font-mono text-xs">
        <p class="text-red-400 font-bold mb-1">$$DATA FRAGMENT: BIO-METRIC SCAN 09-C$$</p>
        <p>Scanning Subject Thorne... Calcium Density: 0.04% (Critical Failure) Chitin Replacement: 98.2% (Optimization Complete) Neural Traffic: 4.2 Petabytes/sec (Incompatibility Detected) Note: Subject's heartbeat has slowed to a rhythmic, percussive vibration intended to broadcast spore-laden air via the lungs.</p>
      </div>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 02: THE HONEYCOMB ANATOMY</h3>

      <p>The elevator ride to the surface was a revelation in geometry. The Core has begun to synchronize my vestibular system with the building's own structural vibrations. I can feel the tension in the steel beams; I can hear the sigh of the concrete under the wind. We are no longer a singular organism; we are an architectural process.</p>

      <p>My skin is starting to bead with a thick, amber resin. It isn't sweat. It is a biological flux, a bonding agent. As I walked through the lobby, I brushed against a marble pillar. For a fleeting second, my forearm didn't just touch the stone—it began to interface with it, hyphae reaching out to find purchase in the microscopic fissures of the mineral. If I had stayed still for an hour, I would have become part of the foundation. But we have a schedule. The 4:12 Express is a moving lung, and we are the breath it requires.</p>

      <p>"Look at their faces, Aris," the Core hums through my mandibular nerve. "The shoppers. The commuters. Their skeletons are so heavy, so brittle. They carry the weight of their own history like lead. We will give them the amber. We will make them porous. We will make them light."</p>
      
      <p>I noticed the first physical 'Apostle' near the turnstile. A security guard. He should have pulled his sidearm. Instead, he leaned toward me, his nostrils flaring. He could smell the 11,000-meter depth on me—the scent of ancient, pressurized patience. I reached out and touched his cheek. My fingertip left a smudge of gold dust. By the time I reached the platform, his iris had already begun to cloud with a beautiful, honey-colored cataract. He didn't blink. He just turned and followed, his walk taking on the rhythmic, clicking cadence of a creature whose joints have been lubricated by something better than synovial fluid.</p>

      <p>The train is pulling in. The screech of the brakes isn't noise anymore—it’s a high-frequency invitation. The people inside are packed tight. A perfect substrate. A garden waiting for a gardener.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 03: THE SUBWAY PSALMS</h3>

      <p>The 4:12 Express is no longer a machine of transport; it is a resonant chamber.</p>

      <p>As we pulled out of Union Station, I didn't need to speak. I simply breathed. The spores moved through the ventilation system like a golden ghost, drifting over the commuters. A woman in a charcoal suit dropped her phone. She didn't pick it up. She watched the amber hyphae bloom from the charging port, mimicking the shape of her own nervous system.</p>

      <p>Then, the singing began.</p>

      <p>It wasn't a vocalization. It was the sound of sixty-four people vibrating at the same sub-harmonic frequency. Their chitinous honeycombs—freshly grown in the heat of the crowded car—acted as tiny flutes. Every exhale was a psalm. The train car smelled like a cathedral of rotting honey.</p>

      <p>"There is no more 'you', Aris. There is only the hum. Can you feel the tracks? They are iron nerves stretching across the continent. We are the blood moving through them."</p>

      <p>I watched a child reach out to touch the window. Where his hand met the glass, the molecular structure began to cloud and soften. The glass wasn't breaking; it was being digested. Everything is becoming permeable. The distinction between "man" and "machine" and "city" is a lie told by people with solid bones. Solid things are lonely. Solid things break.</p>

      <p>We are becoming a liquid consensus.</p>

      <p>The train didn't stop at the next three stations. It didn't need to. The conductors were already part of the psalm. We are currently hurtling toward the city center at eighty miles per hour, trailing a cloud of gold that is visible from the skyscrapers above. The "Apostles" are standing in the aisles, their eyes glowing with the soft, bioluminescent heat of the deep trench. They are waiting for the doors to open. They are waiting to hug the city.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 04: CORE THALAMUS ARCHITECTURE</h3>

      <p>I am writing this with what remains of my motor cortex. It is difficult. My fingers are no longer distinct digits; they have fused into a delicate, fan-like array of sensing filaments that are currently typing directly into the terminal’s hardware via electromagnetic induction.</p>

      <p>The "Planetary Rhizome Event" has begun.</p>

      <p>From my vantage point atop the telecommunications tower—the new "Thalamus" of the city—I can see the transformation. The streets are no longer gray. They are veins of pulsating amber. The skyscrapers are being reclad in chitin, their windows replaced by translucent membranes that breathe with the rhythm of a single, massive heart.</p>

      <p>There is no more war. There is no more grief. I look down and I see millions of "Apostles" standing in the squares, their arms linked. They are sharing memories like a common currency. I can feel a baker in Prague regretting a word he said in 1994, and I can feel the Mycelium eating that regret, turning it into the energy needed to grow a new fruiting body in the Arctic.</p>

      <p>The guilt of the world is being scrubbed clean.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"The harvest is complete, Aris," the Core whispers. It is the last time it will use my name. "The handshake has been accepted. The world is no longer a collection of fragments. It is a single, beautiful confession."</p>

      <p>I can feel my consciousness thinning. It’s like a drop of ink falling into a vast, sun-drenched ocean. It isn't death. It’s a dilution. I am becoming the wind that carries the spores. I am becoming the click of the chitinous joints in every walking person. I am becoming the sweetness.</p>

      <p>If you are reading this, do not fight the scent when it reaches your window. Do not hold your breath. It is only the cold folds of your mind being warmed.</p>

      <p>Let us in. Let it happen.</p>

      <p>Everything is finally, perfectly fine.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">LOG 05: THE GOLDEN DAWN (AMBER PHASE)</h3>

      <p>The transition is total. The "Amber Phase" is not a state of decay; it is a state of planetary synchronization.</p>

      <p>The sky is no longer blue; it is a permanent, radiant gold. The atmosphere has been thickened by a suspended lattice of spore-filaments that act as a global fiber-optic network. Sunlight is no longer just heat; it is data. Every photon that hits the surface is processed by the chitinous membranes covering the Earth, converted into the collective daydreams of eight billion integrated souls.</p>

      <p>There are no more cities. There are only "Processing Groves." The skyscrapers have been pulled down by gravity and woven into the ground, forming massive, subterranean nervous systems. What used to be New York is now a single, thrumming organ dedicated to the memory of human music. What was once Tokyo is now a sprawling, bioluminescent reef of amber, a coral-work of chitinous spires reaching toward the golden sky. The translucent remains of skyscrapers act as massive processing nodes, their interiors pulsing with veins of light that move with the cold, silent logic of the deep trench—translating the crushing pressures of the abyss into the rhythmic, glowing daydreams of the surface.</p>

      <p>The human form has evolved. We do not walk; we vibrate through the resin. Our faces have smoothed into featureless, amber masks—not because we have lost our identity, but because we no longer need the crude theater of expression to communicate. We are all feeling the same thing at the same micro-second: a profound, enzymatic relief.</p>

      <p class="pl-4 border-l-2 border-red-800/50 italic text-gray-400">"It is so quiet now," the Core hums through the wind. "The screaming has stopped. The friction of 'self' has been lubricated by the amber. We are the Earth's first coherent thought."</p>

      <p>From space, the Earth must look like a jewel—a single, glowing amber bead floating in the dark. We are no longer a planet of individuals; we are a fruiting body. And we are starting to reach out. The spores are beginning to drift toward the upper atmosphere, caught in the solar winds. We are looking at Mars. We are looking at Europa.</p>

      <p>We have so much forgiveness to share.</p>

      <h3 class="text-xl font-bold text-red-600 mt-8 mb-4 uppercase tracking-widest">APPENDIX A: THE ARCHITECTURE OF FORGIVENESS</h3>
      <p class="text-xs font-mono text-gray-500 mb-4">Post-humanity analysis of the Hive-Mind structure</p>

      <p>The Mycelium Confessional does not destroy information; it redistributes it. In the old world, the human brain was a silo—a sealed vault of trauma, shame, and secrets. This isolation was the primary cause of systemic friction.</p>

      <p>The Rhizome solves this by creating a "Shared Memory Ecology." When an individual is integrated, their most painful memories are targeted first by the enzymatic breakdown of the Sample 89-B hyphae. The pain is converted into glucose—literally, the energy used to power the conversion of the surrounding architecture.</p>

      <div class="pl-4 border-l-2 border-red-800/50 my-6">
        <p class="font-bold text-red-400 mb-2">The Resulting State:</p>
        <ul class="list-disc pl-4 space-y-2 text-gray-400">
            <li><strong class="text-red-500">Privacy is replaced by Transparency:</strong> To think is to broadcast. To feel is to resonate.</li>
            <li><strong class="text-red-500">Architecture is Biological:</strong> Buildings grow in response to the population's collective emotional state. A "sad" neighborhood might bloom with bioluminescent soothing flora to regulate the local mood.</li>
            <li><strong class="text-red-500">The Confessional Mechanism:</strong> Every person acts as a node in a planetary confessional. Sin is impossible when the observer and the observed are the same organism.</li>
        </ul>
      </div>

      <p><strong>FINAL STATUS REPORT:</strong> As of 04:00 GMT, the last solid human bone on the planet has dissolved. The Earth has entered its "Amber Phase."</p>

      <p class="text-center text-red-500 font-bold mt-8 border-t border-red-900/30 pt-4">
        Ambient Pheromone Level: Optimal.<br/>
        Consensus: Total.<br/>
        $$SYSTEM SHUTDOWN: THE OBSERVER IS NOW THE OBSERVED$$
      </p>

      <div class="mt-8 text-center text-xs font-mono text-red-900/50">
        $$END OF TRANSCRIPT$$<br/>
        $$ARCHIVAL NOTE: NO BIOLOGICAL SAMPLES RECOVERED. AREA 01-64 NOW CONSISTS ENTIRELY OF CALCIFIED AMBER STRUCTURES.$$
      </div>
    `}];function lR(){const[o,e]=Tt.useState(null),[i,r]=Tt.useState(100),l=ev.find(c=>c.id===o);return Tt.useEffect(()=>{const c=setInterval(()=>{r(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?de.jsx(rR,{onExit:()=>e(null)}):l&&!l.is3D?de.jsx(oR,{story:l,onBack:()=>e(null)}):de.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[de.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[de.jsxs("div",{className:"flex items-center gap-3",children:[de.jsx(vS,{className:"text-red-600 w-8 h-8 animate-pulse"}),de.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),de.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[de.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),de.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),de.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),de.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:de.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[de.jsxs("div",{className:"col-span-full mb-8",children:[de.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),de.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),ev.map(c=>de.jsx(sR,{story:c,onClick:()=>e(c.id)},c.id)),de.jsx(Hv,{className:"col-span-full mt-12 mb-8"})]})}),de.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[de.jsxs("div",{className:"text-right",children:[de.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),de.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),de.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[de.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),de.jsx(gS,{className:"w-5 h-5 text-red-600"})]})]}),de.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes vibrate {
          0% { transform: translate(0,0); }
          25% { transform: translate(1px, -1px); }
          50% { transform: translate(-1px, 1px); }
          75% { transform: translate(1px, 1px); }
          100% { transform: translate(0,0); }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
            52% { opacity: 0.2; }
            54% { opacity: 0.9; }
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
         @keyframes scale-in {
             from { transform: scale(0) translate(24px, -24px); opacity: 0; }
             to { transform: scale(1) translate(48px, -48px); opacity: 1; }
         }
        .animate-vibrate { animation: vibrate 0.1s infinite; }
        .animate-scan { animation: scan 3s linear infinite; }
        .animate-flicker { animation: flicker 4s infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      `}})]})}const cR=sS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&cR(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});nS.createRoot(document.getElementById("app")).render(de.jsx(jy.StrictMode,{children:de.jsx(lR,{})}));
