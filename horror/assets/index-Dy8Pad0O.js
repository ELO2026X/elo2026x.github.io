(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var dh={exports:{}},qo={};var Gg;function Gy(){if(Gg)return qo;Gg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return qo.Fragment=e,qo.jsx=i,qo.jsxs=i,qo}var Vg;function Vy(){return Vg||(Vg=1,dh.exports=Gy()),dh.exports}var ge=Vy(),ph={exports:{}},ot={};var kg;function ky(){if(kg)return ot;kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function S(U){return U===null||typeof U!="object"?null:(U=y&&U[y]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function x(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}x.prototype.isReactComponent={},x.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function P(){}P.prototype=x.prototype;function I(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}var L=I.prototype=new P;L.constructor=I,R(L,x.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function w(U,ie,ve){var Re=ve.ref;return{$$typeof:o,type:U,key:ie,ref:Re!==void 0?Re:null,props:ve}}function C(U,ie){return w(U.type,ie,U.props)}function V(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function Z(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ie[ve]})}var K=/\/+/g;function fe(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?Z(""+U.key):ie.toString(36)}function se(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(F,F):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function N(U,ie,ve,Re,Be){var J=typeof U;(J==="undefined"||J==="boolean")&&(U=null);var oe=!1;if(U===null)oe=!0;else switch(J){case"bigint":case"string":case"number":oe=!0;break;case"object":switch(U.$$typeof){case o:case e:oe=!0;break;case _:return oe=U._init,N(oe(U._payload),ie,ve,Re,Be)}}if(oe)return Be=Be(U),oe=Re===""?"."+fe(U,0):Re,z(Be)?(ve="",oe!=null&&(ve=oe.replace(K,"$&/")+"/"),N(Be,ie,ve,"",function(He){return He})):Be!=null&&(V(Be)&&(Be=C(Be,ve+(Be.key==null||U&&U.key===Be.key?"":(""+Be.key).replace(K,"$&/")+"/")+oe)),ie.push(Be)),1;oe=0;var Ce=Re===""?".":Re+":";if(z(U))for(var ke=0;ke<U.length;ke++)Re=U[ke],J=Ce+fe(Re,ke),oe+=N(Re,ie,ve,J,Be);else if(ke=S(U),typeof ke=="function")for(U=ke.call(U),ke=0;!(Re=U.next()).done;)Re=Re.value,J=Ce+fe(Re,ke++),oe+=N(Re,ie,ve,J,Be);else if(J==="object"){if(typeof U.then=="function")return N(se(U),ie,ve,Re,Be);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return oe}function G(U,ie,ve){if(U==null)return U;var Re=[],Be=0;return N(U,Re,"","",function(J){return ie.call(ve,J,Be++)}),Re}function ne(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},be={map:G,forEach:function(U,ie,ve){G(U,function(){ie.apply(this,arguments)},ve)},count:function(U){var ie=0;return G(U,function(){ie++}),ie},toArray:function(U){return G(U,function(ie){return ie})||[]},only:function(U){if(!V(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ot.Activity=g,ot.Children=be,ot.Component=x,ot.Fragment=i,ot.Profiler=l,ot.PureComponent=I,ot.StrictMode=r,ot.Suspense=m,ot.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ot.__COMPILER_RUNTIME={__proto__:null,c:function(U){return O.H.useMemoCache(U)}},ot.cache=function(U){return function(){return U.apply(null,arguments)}},ot.cacheSignal=function(){return null},ot.cloneElement=function(U,ie,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Re=R({},U.props),Be=U.key;if(ie!=null)for(J in ie.key!==void 0&&(Be=""+ie.key),ie)!q.call(ie,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&ie.ref===void 0||(Re[J]=ie[J]);var J=arguments.length-2;if(J===1)Re.children=ve;else if(1<J){for(var oe=Array(J),Ce=0;Ce<J;Ce++)oe[Ce]=arguments[Ce+2];Re.children=oe}return w(U.type,Be,Re)},ot.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ot.createElement=function(U,ie,ve){var Re,Be={},J=null;if(ie!=null)for(Re in ie.key!==void 0&&(J=""+ie.key),ie)q.call(ie,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Be[Re]=ie[Re]);var oe=arguments.length-2;if(oe===1)Be.children=ve;else if(1<oe){for(var Ce=Array(oe),ke=0;ke<oe;ke++)Ce[ke]=arguments[ke+2];Be.children=Ce}if(U&&U.defaultProps)for(Re in oe=U.defaultProps,oe)Be[Re]===void 0&&(Be[Re]=oe[Re]);return w(U,J,Be)},ot.createRef=function(){return{current:null}},ot.forwardRef=function(U){return{$$typeof:d,render:U}},ot.isValidElement=V,ot.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:ne}},ot.memo=function(U,ie){return{$$typeof:p,type:U,compare:ie===void 0?null:ie}},ot.startTransition=function(U){var ie=O.T,ve={};O.T=ve;try{var Re=U(),Be=O.S;Be!==null&&Be(ve,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(F,Me)}catch(J){Me(J)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),O.T=ie}},ot.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ot.use=function(U){return O.H.use(U)},ot.useActionState=function(U,ie,ve){return O.H.useActionState(U,ie,ve)},ot.useCallback=function(U,ie){return O.H.useCallback(U,ie)},ot.useContext=function(U){return O.H.useContext(U)},ot.useDebugValue=function(){},ot.useDeferredValue=function(U,ie){return O.H.useDeferredValue(U,ie)},ot.useEffect=function(U,ie){return O.H.useEffect(U,ie)},ot.useEffectEvent=function(U){return O.H.useEffectEvent(U)},ot.useId=function(){return O.H.useId()},ot.useImperativeHandle=function(U,ie,ve){return O.H.useImperativeHandle(U,ie,ve)},ot.useInsertionEffect=function(U,ie){return O.H.useInsertionEffect(U,ie)},ot.useLayoutEffect=function(U,ie){return O.H.useLayoutEffect(U,ie)},ot.useMemo=function(U,ie){return O.H.useMemo(U,ie)},ot.useOptimistic=function(U,ie){return O.H.useOptimistic(U,ie)},ot.useReducer=function(U,ie,ve){return O.H.useReducer(U,ie,ve)},ot.useRef=function(U){return O.H.useRef(U)},ot.useState=function(U){return O.H.useState(U)},ot.useSyncExternalStore=function(U,ie,ve){return O.H.useSyncExternalStore(U,ie,ve)},ot.useTransition=function(){return O.H.useTransition()},ot.version="19.2.3",ot}var Xg;function Yd(){return Xg||(Xg=1,ph.exports=ky()),ph.exports}var _t=Yd();const Xy=$_(_t);var mh={exports:{}},Yo={},gh={exports:{}},_h={};var Wg;function Wy(){return Wg||(Wg=1,(function(o){function e(N,G){var ne=N.length;N.push(G);e:for(;0<ne;){var Me=ne-1>>>1,be=N[Me];if(0<l(be,G))N[Me]=G,N[ne]=be,ne=Me;else break e}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var G=N[0],ne=N.pop();if(ne!==G){N[0]=ne;e:for(var Me=0,be=N.length,U=be>>>1;Me<U;){var ie=2*(Me+1)-1,ve=N[ie],Re=ie+1,Be=N[Re];if(0>l(ve,ne))Re<be&&0>l(Be,ve)?(N[Me]=Be,N[Re]=ne,Me=Re):(N[Me]=ve,N[ie]=ne,Me=ie);else if(Re<be&&0>l(Be,ne))N[Me]=Be,N[Re]=ne,Me=Re;else break e}}return G}function l(N,G){var ne=N.sortIndex-G.sortIndex;return ne!==0?ne:N.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,y=3,S=!1,E=!1,R=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var G=i(p);G!==null;){if(G.callback===null)r(p);else if(G.startTime<=N)r(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function z(N){if(R=!1,L(N),!E)if(i(m)!==null)E=!0,F||(F=!0,Z());else{var G=i(p);G!==null&&se(z,G.startTime-N)}}var F=!1,O=-1,q=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<q)}function V(){if(M=!1,F){var N=o.unstable_now();w=N;var G=!0;try{e:{E=!1,R&&(R=!1,P(O),O=-1),S=!0;var ne=y;try{t:{for(L(N),g=i(m);g!==null&&!(g.expirationTime>N&&C());){var Me=g.callback;if(typeof Me=="function"){g.callback=null,y=g.priorityLevel;var be=Me(g.expirationTime<=N);if(N=o.unstable_now(),typeof be=="function"){g.callback=be,L(N),G=!0;break t}g===i(m)&&r(m),L(N)}else r(m);g=i(m)}if(g!==null)G=!0;else{var U=i(p);U!==null&&se(z,U.startTime-N),G=!1}}break e}finally{g=null,y=ne,S=!1}G=void 0}}finally{G?Z():F=!1}}}var Z;if(typeof I=="function")Z=function(){I(V)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,fe=K.port2;K.port1.onmessage=V,Z=function(){fe.postMessage(null)}}else Z=function(){x(V,0)};function se(N,G){O=x(function(){N(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ne=y;y=G;try{return N()}finally{y=ne}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,G){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var ne=y;y=N;try{return G()}finally{y=ne}},o.unstable_scheduleCallback=function(N,G,ne){var Me=o.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Me+ne:Me):ne=Me,N){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,N={id:_++,callback:G,priorityLevel:N,startTime:ne,expirationTime:be,sortIndex:-1},ne>Me?(N.sortIndex=ne,e(p,N),i(m)===null&&N===i(p)&&(R?(P(O),O=-1):R=!0,se(z,ne-Me))):(N.sortIndex=be,e(m,N),E||S||(E=!0,F||(F=!0,Z()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var G=y;return function(){var ne=y;y=G;try{return N.apply(this,arguments)}finally{y=ne}}}})(_h)),_h}var qg;function qy(){return qg||(qg=1,gh.exports=Wy()),gh.exports}var vh={exports:{}},Bn={};var Yg;function Yy(){if(Yg)return Bn;Yg=1;var o=Yd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Bn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Bn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Bn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Bn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Bn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:S}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Bn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Bn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Bn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Bn.requestFormReset=function(m){r.d.r(m)},Bn.unstable_batchedUpdates=function(m,p){return m(p)},Bn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Bn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Bn.version="19.2.3",Bn}var jg;function jy(){if(jg)return vh.exports;jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vh.exports=Yy(),vh.exports}var Zg;function Zy(){if(Zg)return Yo;Zg=1;var o=qy(),e=Yd(),i=jy();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,s=f;break}if(T===s){v=!0,s=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,s=u;break}if(T===s){v=!0,s=f,a=u;break}T=T.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),I=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var K=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===K?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case z:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case I:return t.displayName||"Context";case P:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:fe(t.type)||"Memo";case q:n=t._payload,t=t._init;try{return fe(t(n))}catch{}}return null}var se=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},Me=[],be=-1;function U(t){return{current:t}}function ie(t){0>be||(t.current=Me[be],Me[be]=null,be--)}function ve(t,n){be++,Me[be]=t.current,t.current=n}var Re=U(null),Be=U(null),J=U(null),oe=U(null);function Ce(t,n){switch(ve(J,n),ve(Be,t),ve(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?ug(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=ug(n),t=fg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Re),ve(Re,t)}function ke(){ie(Re),ie(Be),ie(J)}function He(t){t.memoizedState!==null&&ve(oe,t);var n=Re.current,a=fg(n,t.type);n!==a&&(ve(Be,t),ve(Re,a))}function ct(t){Be.current===t&&(ie(Re),ie(Be)),oe.current===t&&(ie(oe),Vo._currentValue=ne)}var Jt,pt;function ht(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",pt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+pt}var Dt=!1;function at(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xe=function(){throw Error()};if(Object.defineProperty(xe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xe,[])}catch(ce){var re=ce}Reflect.construct(t,[],xe)}else{try{xe.call()}catch(ce){re=ce}t.call(xe.prototype)}}else{try{throw Error()}catch(ce){re=ce}(xe=t())&&typeof xe.catch=="function"&&xe.catch(function(){})}}catch(ce){if(ce&&re&&typeof ce.stack=="string")return[ce.stack,re.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var H=v.split(`
`),te=T.split(`
`);for(u=s=0;s<H.length&&!H[s].includes("DetermineComponentFrameRoot");)s++;for(;u<te.length&&!te[u].includes("DetermineComponentFrameRoot");)u++;if(s===H.length||u===te.length)for(s=H.length-1,u=te.length-1;1<=s&&0<=u&&H[s]!==te[u];)u--;for(;1<=s&&0<=u;s--,u--)if(H[s]!==te[u]){if(s!==1||u!==1)do if(s--,u--,0>u||H[s]!==te[u]){var me=`
`+H[s].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=s&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ht(a):""}function St(t,n){switch(t.tag){case 26:case 27:case 5:return ht(t.type);case 16:return ht("Lazy");case 13:return t.child!==n&&n!==null?ht("Suspense Fallback"):ht("Suspense");case 19:return ht("SuspenseList");case 0:case 15:return at(t.type,!1);case 11:return at(t.type.render,!1);case 1:return at(t.type,!0);case 31:return ht("Activity");default:return""}}function B(t){try{var n="",a=null;do n+=St(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Gt=Object.prototype.hasOwnProperty,Et=o.unstable_scheduleCallback,It=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,D=o.unstable_requestPaint,b=o.unstable_now,W=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,ue=o.unstable_NormalPriority,Xe=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Ge=o.log,et=o.unstable_setDisableYieldValue,Te=null,Ae=null;function Fe(t){if(typeof Ge=="function"&&et(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(Te,t)}catch{}}var Ie=Math.clz32?Math.clz32:X,Ne=Math.log,ut=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Ne(t)/ut|0)|0}var Le=256,we=262144,ye=4194304;function de(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,v=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=de(s):(v&=T,v!==0?u=de(v):a||(a=T&~t,a!==0&&(u=de(a))))):(T=s&~f,T!==0?u=de(T):v!==0?u=de(v):a||(a=s&~t,a!==0&&(u=de(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ee(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function De(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var t=ye;return ye<<=1,(ye&62914560)===0&&(ye=4194304),t}function st(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function mt(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ft(t,n,a,s,u,f){var v=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,H=t.expirationTimes,te=t.hiddenUpdates;for(a=v&~a;0<a;){var me=31-Ie(a),xe=1<<me;T[me]=0,H[me]=-1;var re=te[me];if(re!==null)for(te[me]=null,me=0;me<re.length;me++){var ce=re[me];ce!==null&&(ce.lane&=-536870913)}a&=~xe}s!==0&&Ut(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(v&~n))}function Ut(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Ie(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function _n(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Ie(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function vn(t,n){var a=n&-n;return a=(a&42)!==0?1:ea(a),(a&(t.suspendedLanes|n))!==0?0:a}function ea(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ta(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:Og(t.type))}function Zn(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var An=Math.random().toString(36).slice(2),en="__reactFiber$"+An,xn="__reactProps$"+An,Ri="__reactContainer$"+An,Wr="__reactEvents$"+An,qr="__reactListeners$"+An,pl="__reactHandles$"+An,no="__reactResources$"+An,hr="__reactMarker$"+An;function io(t){delete t[en],delete t[xn],delete t[Wr],delete t[qr],delete t[pl]}function Da(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ri]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=vg(t);t!==null;){if(a=t[en])return a;t=vg(t)}return n}t=a,a=t.parentNode}return null}function Ua(t){if(t=t[en]||t[Ri]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function dr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Na(t){var n=t[no];return n||(n=t[no]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[hr]=!0}var Y=new Set,le={};function ae(t,n){Q(t,n),Q(t+"Capture",n)}function Q(t,n){for(le[t]=n,t=0;t<n.length;t++)Y.add(n[t])}var Oe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ve={},Pe={};function We(t){return Gt.call(Pe,t)?!0:Gt.call(Ve,t)?!1:Oe.test(t)?Pe[t]=!0:(Ve[t]=!0,!1)}function je(t,n,a){if(We(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function $e(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ze(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function nt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function $t(t){if(!t._valueTracker){var n=Bt(t)?"checked":"value";t._valueTracker=an(t,n,""+t[n])}}function Vt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Bt(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ft=/[\n"\\]/g;function rt(t){return t.replace(Ft,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(t,n,a,s,u,f,v,T){t.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?t.type=v:t.removeAttribute("type"),n!=null?v==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+nt(n)):t.value!==""+nt(n)&&(t.value=""+nt(n)):v!=="submit"&&v!=="reset"||t.removeAttribute("value"),n!=null?Dn(t,v,nt(n)):a!=null?Dn(t,v,nt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+nt(T):t.removeAttribute("name")}function na(t,n,a,s,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){$t(t);return}a=a!=null?""+nt(a):"",n=n!=null?""+nt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(t.name=v),$t(t)}function Dn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function mi(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+nt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function kt(t,n,a){if(n!=null&&(n=""+nt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+nt(a):""}function Un(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(se(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=nt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),$t(t)}function yn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Nn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ln(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Nn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Yr(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Ln(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Ln(t,f,n[f])}function Ci(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Bv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var cu=null;function uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Zr=null;function cp(t){var n=Ua(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Cn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[xn]||null;if(!u)throw Error(r(90));Cn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Vt(s)}break e;case"textarea":kt(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mi(t,!!a.multiple,n,!1)}}}var fu=!1;function up(t,n,a){if(fu)return t(n,a);fu=!0;try{var s=t(n);return s}finally{if(fu=!1,(jr!==null||Zr!==null)&&(nc(),jr&&(n=jr,t=Zr,Zr=jr=null,cp(n),t)))for(n=0;n<t.length;n++)cp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var s=a[xn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hu=!1;if(aa)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){hu=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{hu=!1}var La=null,du=null,gl=null;function fp(){if(gl)return gl;var t,n=du,a=n.length,s,u="value"in La?La.value:La.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var v=a-t;for(s=1;s<=v&&n[a-s]===u[f-s];s++);return gl=u.slice(t,1<s?1-s:void 0)}function _l(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function vl(){return!0}function hp(){return!1}function Kn(t){function n(a,s,u,f,v){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:hp,this.isPropagationStopped=hp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Kn(pr),so=g({},pr,{view:0,detail:0}),Fv=Kn(so),pu,mu,oo,yl=g({},so,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(pu=t.screenX-oo.screenX,mu=t.screenY-oo.screenY):mu=pu=0,oo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),dp=Kn(yl),Hv=g({},yl,{dataTransfer:0}),Gv=Kn(Hv),Vv=g({},so,{relatedTarget:0}),gu=Kn(Vv),kv=g({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Kn(kv),Wv=g({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qv=Kn(Wv),Yv=g({},pr,{data:0}),pp=Kn(Yv),jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kv[t])?!!n[t]:!1}function _u(){return Qv}var Jv=g({},so,{key:function(t){if(t.key){var n=jv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$v=Kn(Jv),ex=g({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=Kn(ex),tx=g({},so,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),nx=Kn(tx),ix=g({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=Kn(ix),rx=g({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sx=Kn(rx),ox=g({},pr,{newState:0,oldState:0}),lx=Kn(ox),cx=[9,13,27,32],vu=aa&&"CompositionEvent"in window,lo=null;aa&&"documentMode"in document&&(lo=document.documentMode);var ux=aa&&"TextEvent"in window&&!lo,gp=aa&&(!vu||lo&&8<lo&&11>=lo),_p=" ",vp=!1;function xp(t,n){switch(t){case"keyup":return cx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function fx(t,n){switch(t){case"compositionend":return yp(n);case"keypress":return n.which!==32?null:(vp=!0,_p);case"textInput":return t=n.data,t===_p&&vp?null:t;default:return null}}function hx(t,n){if(Kr)return t==="compositionend"||!vu&&xp(t,n)?(t=fp(),gl=du=La=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gp&&n.locale!=="ko"?null:n.data;default:return null}}var dx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!dx[t.type]:n==="textarea"}function Mp(t,n,a,s){jr?Zr?Zr.push(s):Zr=[s]:jr=s,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var co=null,uo=null;function px(t){ag(t,0)}function Sl(t){var n=dr(t);if(Vt(n))return t}function bp(t,n){if(t==="change")return n}var Ep=!1;if(aa){var xu;if(aa){var yu="oninput"in document;if(!yu){var Tp=document.createElement("div");Tp.setAttribute("oninput","return;"),yu=typeof Tp.oninput=="function"}xu=yu}else xu=!1;Ep=xu&&(!document.documentMode||9<document.documentMode)}function Ap(){co&&(co.detachEvent("onpropertychange",wp),uo=co=null)}function wp(t){if(t.propertyName==="value"&&Sl(uo)){var n=[];Mp(n,uo,t,uu(t)),up(px,n)}}function mx(t,n,a){t==="focusin"?(Ap(),co=n,uo=a,co.attachEvent("onpropertychange",wp)):t==="focusout"&&Ap()}function gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(uo)}function _x(t,n){if(t==="click")return Sl(n)}function vx(t,n){if(t==="input"||t==="change")return Sl(n)}function xx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:xx;function fo(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Gt.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function Rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cp(t,n){var a=Rp(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rp(a)}}function Dp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Dp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Up(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=aa&&"documentMode"in document&&11>=document.documentMode,Qr=null,Mu=null,ho=null,bu=!1;function Np(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bu||Qr==null||Qr!==Qe(s)||(s=Qr,"selectionStart"in s&&Su(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ho&&fo(ho,s)||(ho=s,s=cc(Mu,"onSelect"),0<s.length&&(n=new xl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Qr)))}function mr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Jr={animationend:mr("Animation","AnimationEnd"),animationiteration:mr("Animation","AnimationIteration"),animationstart:mr("Animation","AnimationStart"),transitionrun:mr("Transition","TransitionRun"),transitionstart:mr("Transition","TransitionStart"),transitioncancel:mr("Transition","TransitionCancel"),transitionend:mr("Transition","TransitionEnd")},Eu={},Lp={};aa&&(Lp=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function gr(t){if(Eu[t])return Eu[t];if(!Jr[t])return t;var n=Jr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Lp)return Eu[t]=n[a];return t}var Op=gr("animationend"),Ip=gr("animationiteration"),Pp=gr("animationstart"),Sx=gr("transitionrun"),Mx=gr("transitionstart"),bx=gr("transitioncancel"),zp=gr("transitionend"),Bp=new Map,Tu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tu.push("scrollEnd");function Di(t,n){Bp.set(t,n),ae(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gi=[],$r=0,Au=0;function bl(){for(var t=$r,n=Au=$r=0;n<t;){var a=gi[n];gi[n++]=null;var s=gi[n];gi[n++]=null;var u=gi[n];gi[n++]=null;var f=gi[n];if(gi[n++]=null,s!==null&&u!==null){var v=s.pending;v===null?u.next=u:(u.next=v.next,v.next=u),s.pending=u}f!==0&&Fp(a,u,f)}}function El(t,n,a,s){gi[$r++]=t,gi[$r++]=n,gi[$r++]=a,gi[$r++]=s,Au|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function wu(t,n,a,s){return El(t,n,a,s),Tl(t)}function _r(t,n){return El(t,null,null,n),Tl(t)}function Fp(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Ie(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Tl(t){if(50<Io)throw Io=0,zf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var es={};function Ex(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,s){return new Ex(t,n,a,s)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Hp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,a,s,u,f){var v=0;if(s=t,typeof t=="function")Ru(t)&&(v=1);else if(typeof t=="string")v=Cy(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=si(31,a,n,u),t.elementType=w,t.lanes=f,t;case R:return vr(a.children,u,f,n);case M:v=8,u|=24;break;case x:return t=si(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case z:return t=si(13,a,n,u),t.elementType=z,t.lanes=f,t;case F:return t=si(19,a,n,u),t.elementType=F,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case I:v=10;break e;case P:v=9;break e;case L:v=11;break e;case O:v=14;break e;case q:v=16,s=null;break e}v=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=si(v,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function vr(t,n,a,s){return t=si(7,t,s,n),t.lanes=a,t}function Cu(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function Gp(t){var n=si(18,null,null,0);return n.stateNode=t,n}function Du(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Vp=new WeakMap;function _i(t,n){if(typeof t=="object"&&t!==null){var a=Vp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:B(n)},Vp.set(t,n),n)}return{value:t,source:n,stack:B(n)}}var ts=[],ns=0,wl=null,po=0,vi=[],xi=0,Oa=null,Fi=1,Hi="";function sa(t,n){ts[ns++]=po,ts[ns++]=wl,wl=t,po=n}function kp(t,n,a){vi[xi++]=Fi,vi[xi++]=Hi,vi[xi++]=Oa,Oa=t;var s=Fi;t=Hi;var u=32-Ie(s)-1;s&=~(1<<u),a+=1;var f=32-Ie(n)+u;if(30<f){var v=u-u%5;f=(s&(1<<v)-1).toString(32),s>>=v,u-=v,Fi=1<<32-Ie(n)+u|a<<u|s,Hi=f+t}else Fi=1<<f|a<<u|s,Hi=t}function Uu(t){t.return!==null&&(sa(t,1),kp(t,1,0))}function Nu(t){for(;t===wl;)wl=ts[--ns],ts[ns]=null,po=ts[--ns],ts[ns]=null;for(;t===Oa;)Oa=vi[--xi],vi[xi]=null,Hi=vi[--xi],vi[xi]=null,Fi=vi[--xi],vi[xi]=null}function Xp(t,n){vi[xi++]=Fi,vi[xi++]=Hi,vi[xi++]=Oa,Fi=n.id,Hi=n.overflow,Oa=t}var On=null,tn=null,Rt=!1,Ia=null,yi=!1,Lu=Error(r(519));function Pa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(_i(n,t)),Lu}function Wp(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[xn]=s,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<zo.length;a++)bt(zo[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),na(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),Un(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||lg(n.textContent,a)?(s.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),s.onScroll!=null&&bt("scroll",n),s.onScrollEnd!=null&&bt("scrollend",n),s.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Pa(t,!0)}function qp(t){for(On=t.return;On;)switch(On.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:On=On.return}}function is(t){if(t!==On)return!1;if(!Rt)return qp(t),Rt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Jf(t.type,t.memoizedProps)),a=!a),a&&tn&&Pa(t),qp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=_g(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));tn=_g(t)}else n===27?(n=tn,Ka(t.type)?(t=ih,ih=null,tn=t):tn=n):tn=On?Mi(t.stateNode.nextSibling):null;return!0}function xr(){tn=On=null,Rt=!1}function Ou(){var t=Ia;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Ia=null),t}function mo(t){Ia===null?Ia=[t]:Ia.push(t)}var Iu=U(null),yr=null,oa=null;function za(t,n,a){ve(Iu,n._currentValue),n._currentValue=a}function la(t){t._currentValue=Iu.current,ie(Iu)}function Pu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function zu(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var H=0;H<n.length;H++)if(T.context===n[H]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Pu(f.return,a,t),s||(v=null);break e}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(r(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Pu(v,a,t),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===t){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function as(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var T=u.type;ri(u.pendingProps.value,v.value)||(t!==null?t.push(T):t=[T])}}else if(u===oe.current){if(v=u.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&zu(n,t,a,s),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Sr(t){yr=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Yp(yr,t)}function Cl(t,n){return yr===null&&Sr(t),Yp(t,n)}function Yp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(r(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var Tx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Ax=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,hn={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bu(){return{controller:new Tx,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&Ax(wx,function(){t.controller.abort()})}var _o=null,Fu=0,rs=0,ss=null;function Rx(t,n){if(_o===null){var a=_o=[];Fu=0,rs=kf(),ss={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Fu++,n.then(jp,jp),n}function jp(){if(--Fu===0&&_o!==null){ss!==null&&(ss.status="fulfilled");var t=_o;_o=null,rs=0,ss=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Cx(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Zp=N.S;N.S=function(t,n){N0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Rx(t,n),Zp!==null&&Zp(t,n)};var Mr=U(null);function Hu(){var t=Mr.current;return t!==null?t:Qt.pooledCache}function Dl(t,n){n===null?ve(Mr,Mr.current):ve(Mr,n.pool)}function Kp(){var t=Hu();return t===null?null:{parent:hn._currentValue,pool:t}}var os=Error(r(460)),Gu=Error(r(474)),Ul=Error(r(542)),Nl={then:function(){}};function Qp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Jp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,em(t),t}throw Er=n,os}}function br(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Er=a,os):a}}var Er=null;function $p(){if(Er===null)throw Error(r(459));var t=Er;return Er=null,t}function em(t){if(t===os||t===Ul)throw Error(r(483))}var ls=null,vo=0;function Ll(t){var n=vo;return vo+=1,ls===null&&(ls=[]),Jp(ls,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function tm(t){function n(j,k){if(t){var ee=j.deletions;ee===null?(j.deletions=[k],j.flags|=16):ee.push(k)}}function a(j,k){if(!t)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function s(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=ra(j,k),j.index=0,j.sibling=null,j}function f(j,k,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<k?(j.flags|=67108866,k):ee):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function v(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,k,ee,_e){return k===null||k.tag!==6?(k=Cu(ee,j.mode,_e),k.return=j,k):(k=u(k,ee),k.return=j,k)}function H(j,k,ee,_e){var Je=ee.type;return Je===R?me(j,k,ee.props.children,_e,ee.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&br(Je)===k.type)?(k=u(k,ee.props),xo(k,ee),k.return=j,k):(k=Al(ee.type,ee.key,ee.props,null,j.mode,_e),xo(k,ee),k.return=j,k)}function te(j,k,ee,_e){return k===null||k.tag!==4||k.stateNode.containerInfo!==ee.containerInfo||k.stateNode.implementation!==ee.implementation?(k=Du(ee,j.mode,_e),k.return=j,k):(k=u(k,ee.children||[]),k.return=j,k)}function me(j,k,ee,_e,Je){return k===null||k.tag!==7?(k=vr(ee,j.mode,_e,Je),k.return=j,k):(k=u(k,ee),k.return=j,k)}function xe(j,k,ee){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Cu(""+k,j.mode,ee),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return ee=Al(k.type,k.key,k.props,null,j.mode,ee),xo(ee,k),ee.return=j,ee;case E:return k=Du(k,j.mode,ee),k.return=j,k;case q:return k=br(k),xe(j,k,ee)}if(se(k)||Z(k))return k=vr(k,j.mode,ee,null),k.return=j,k;if(typeof k.then=="function")return xe(j,Ll(k),ee);if(k.$$typeof===I)return xe(j,Cl(j,k),ee);Ol(j,k)}return null}function re(j,k,ee,_e){var Je=k!==null?k.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return Je!==null?null:T(j,k,""+ee,_e);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:return ee.key===Je?H(j,k,ee,_e):null;case E:return ee.key===Je?te(j,k,ee,_e):null;case q:return ee=br(ee),re(j,k,ee,_e)}if(se(ee)||Z(ee))return Je!==null?null:me(j,k,ee,_e,null);if(typeof ee.then=="function")return re(j,k,Ll(ee),_e);if(ee.$$typeof===I)return re(j,k,Cl(j,ee),_e);Ol(j,ee)}return null}function ce(j,k,ee,_e,Je){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return j=j.get(ee)||null,T(k,j,""+_e,Je);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return j=j.get(_e.key===null?ee:_e.key)||null,H(k,j,_e,Je);case E:return j=j.get(_e.key===null?ee:_e.key)||null,te(k,j,_e,Je);case q:return _e=br(_e),ce(j,k,ee,_e,Je)}if(se(_e)||Z(_e))return j=j.get(ee)||null,me(k,j,_e,Je,null);if(typeof _e.then=="function")return ce(j,k,ee,Ll(_e),Je);if(_e.$$typeof===I)return ce(j,k,ee,Cl(k,_e),Je);Ol(k,_e)}return null}function qe(j,k,ee,_e){for(var Je=null,Pt=null,Ke=k,gt=k=0,At=null;Ke!==null&&gt<ee.length;gt++){Ke.index>gt?(At=Ke,Ke=null):At=Ke.sibling;var zt=re(j,Ke,ee[gt],_e);if(zt===null){Ke===null&&(Ke=At);break}t&&Ke&&zt.alternate===null&&n(j,Ke),k=f(zt,k,gt),Pt===null?Je=zt:Pt.sibling=zt,Pt=zt,Ke=At}if(gt===ee.length)return a(j,Ke),Rt&&sa(j,gt),Je;if(Ke===null){for(;gt<ee.length;gt++)Ke=xe(j,ee[gt],_e),Ke!==null&&(k=f(Ke,k,gt),Pt===null?Je=Ke:Pt.sibling=Ke,Pt=Ke);return Rt&&sa(j,gt),Je}for(Ke=s(Ke);gt<ee.length;gt++)At=ce(Ke,j,gt,ee[gt],_e),At!==null&&(t&&At.alternate!==null&&Ke.delete(At.key===null?gt:At.key),k=f(At,k,gt),Pt===null?Je=At:Pt.sibling=At,Pt=At);return t&&Ke.forEach(function(tr){return n(j,tr)}),Rt&&sa(j,gt),Je}function it(j,k,ee,_e){if(ee==null)throw Error(r(151));for(var Je=null,Pt=null,Ke=k,gt=k=0,At=null,zt=ee.next();Ke!==null&&!zt.done;gt++,zt=ee.next()){Ke.index>gt?(At=Ke,Ke=null):At=Ke.sibling;var tr=re(j,Ke,zt.value,_e);if(tr===null){Ke===null&&(Ke=At);break}t&&Ke&&tr.alternate===null&&n(j,Ke),k=f(tr,k,gt),Pt===null?Je=tr:Pt.sibling=tr,Pt=tr,Ke=At}if(zt.done)return a(j,Ke),Rt&&sa(j,gt),Je;if(Ke===null){for(;!zt.done;gt++,zt=ee.next())zt=xe(j,zt.value,_e),zt!==null&&(k=f(zt,k,gt),Pt===null?Je=zt:Pt.sibling=zt,Pt=zt);return Rt&&sa(j,gt),Je}for(Ke=s(Ke);!zt.done;gt++,zt=ee.next())zt=ce(Ke,j,gt,zt.value,_e),zt!==null&&(t&&zt.alternate!==null&&Ke.delete(zt.key===null?gt:zt.key),k=f(zt,k,gt),Pt===null?Je=zt:Pt.sibling=zt,Pt=zt);return t&&Ke.forEach(function(Hy){return n(j,Hy)}),Rt&&sa(j,gt),Je}function Zt(j,k,ee,_e){if(typeof ee=="object"&&ee!==null&&ee.type===R&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case S:e:{for(var Je=ee.key;k!==null;){if(k.key===Je){if(Je=ee.type,Je===R){if(k.tag===7){a(j,k.sibling),_e=u(k,ee.props.children),_e.return=j,j=_e;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===q&&br(Je)===k.type){a(j,k.sibling),_e=u(k,ee.props),xo(_e,ee),_e.return=j,j=_e;break e}a(j,k);break}else n(j,k);k=k.sibling}ee.type===R?(_e=vr(ee.props.children,j.mode,_e,ee.key),_e.return=j,j=_e):(_e=Al(ee.type,ee.key,ee.props,null,j.mode,_e),xo(_e,ee),_e.return=j,j=_e)}return v(j);case E:e:{for(Je=ee.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===ee.containerInfo&&k.stateNode.implementation===ee.implementation){a(j,k.sibling),_e=u(k,ee.children||[]),_e.return=j,j=_e;break e}else{a(j,k);break}else n(j,k);k=k.sibling}_e=Du(ee,j.mode,_e),_e.return=j,j=_e}return v(j);case q:return ee=br(ee),Zt(j,k,ee,_e)}if(se(ee))return qe(j,k,ee,_e);if(Z(ee)){if(Je=Z(ee),typeof Je!="function")throw Error(r(150));return ee=Je.call(ee),it(j,k,ee,_e)}if(typeof ee.then=="function")return Zt(j,k,Ll(ee),_e);if(ee.$$typeof===I)return Zt(j,k,Cl(j,ee),_e);Ol(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,k!==null&&k.tag===6?(a(j,k.sibling),_e=u(k,ee),_e.return=j,j=_e):(a(j,k),_e=Cu(ee,j.mode,_e),_e.return=j,j=_e),v(j)):a(j,k)}return function(j,k,ee,_e){try{vo=0;var Je=Zt(j,k,ee,_e);return ls=null,Je}catch(Ke){if(Ke===os||Ke===Ul)throw Ke;var Pt=si(29,Ke,null,j.mode);return Pt.lanes=_e,Pt.return=j,Pt}}}var Tr=tm(!0),nm=tm(!1),Ba=!1;function Vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ht&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Tl(t),Fp(t,null,a),n}return El(t,s,n,a),Tl(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,_n(t,a)}}function Xu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Wu=!1;function So(){if(Wu){var t=ss;if(t!==null)throw t}}function Mo(t,n,a,s){Wu=!1;var u=t.updateQueue;Ba=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var H=T,te=H.next;H.next=null,v===null?f=te:v.next=te,v=H;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==v&&(T===null?me.firstBaseUpdate=te:T.next=te,me.lastBaseUpdate=H))}if(f!==null){var xe=u.baseState;v=0,me=te=H=null,T=f;do{var re=T.lane&-536870913,ce=re!==T.lane;if(ce?(Tt&re)===re:(s&re)===re){re!==0&&re===rs&&(Wu=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var qe=t,it=T;re=n;var Zt=a;switch(it.tag){case 1:if(qe=it.payload,typeof qe=="function"){xe=qe.call(Zt,xe,re);break e}xe=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=it.payload,re=typeof qe=="function"?qe.call(Zt,xe,re):qe,re==null)break e;xe=g({},xe,re);break e;case 2:Ba=!0}}re=T.callback,re!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[re]:ce.push(re))}else ce={lane:re,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?(te=me=ce,H=xe):me=me.next=ce,v|=re;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);me===null&&(H=xe),u.baseState=H,u.firstBaseUpdate=te,u.lastBaseUpdate=me,f===null&&(u.shared.lanes=0),Wa|=v,t.lanes=v,t.memoizedState=xe}}function im(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function am(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)im(a[t],n)}var cs=U(null),Il=U(0);function rm(t,n){t=_a,ve(Il,t),ve(cs,n),_a=t|n.baseLanes}function qu(){ve(Il,_a),ve(cs,cs.current)}function Yu(){_a=Il.current,ie(cs),ie(Il)}var oi=U(null),Si=null;function Ga(t){var n=t.alternate;ve(un,un.current&1),ve(oi,t),Si===null&&(n===null||cs.current!==null||n.memoizedState!==null)&&(Si=t)}function ju(t){ve(un,un.current),ve(oi,t),Si===null&&(Si=t)}function sm(t){t.tag===22?(ve(un,un.current),ve(oi,t),Si===null&&(Si=t)):Va()}function Va(){ve(un,un.current),ve(oi,oi.current)}function li(t){ie(oi),Si===t&&(Si=null),ie(un)}var un=U(0);function Pl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||th(a)||nh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,dt=null,Yt=null,dn=null,zl=!1,us=!1,Ar=!1,Bl=0,bo=0,fs=null,Dx=0;function on(){throw Error(r(321))}function Zu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function Ku(t,n,a,s,u,f){return ca=f,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?km:hf,Ar=!1,f=a(s,u),Ar=!1,us&&(f=lm(n,a,s,u)),om(t),f}function om(t){N.H=Ao;var n=Yt!==null&&Yt.next!==null;if(ca=0,dn=Yt=dt=null,zl=!1,bo=0,fs=null,n)throw Error(r(300));t===null||pn||(t=t.dependencies,t!==null&&Rl(t)&&(pn=!0))}function lm(t,n,a,s){dt=t;var u=0;do{if(us&&(fs=null),bo=0,us=!1,25<=u)throw Error(r(301));if(u+=1,dn=Yt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=Xm,f=n(a,s)}while(us);return f}function Ux(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?Eo(n):n,t=t.useState()[0],(Yt!==null?Yt.memoizedState:null)!==t&&(dt.flags|=1024),n}function Qu(){var t=Bl!==0;return Bl=0,t}function Ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function $u(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}ca=0,dn=Yt=dt=null,us=!1,bo=Bl=0,fs=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?dt.memoizedState=dn=t:dn=dn.next=t,dn}function fn(){if(Yt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Yt.next;var n=dn===null?dt.memoizedState:dn.next;if(n!==null)dn=n,Yt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));Yt=t,t={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},dn===null?dt.memoizedState=dn=t:dn=dn.next=t}return dn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Eo(t){var n=bo;return bo+=1,fs===null&&(fs=[]),t=Jp(fs,t,n),n=dt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?km:hf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Eo(t);if(t.$$typeof===I)return In(t)}throw Error(r(438,String(t)))}function ef(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=dt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=fn();return tf(n,Yt,t)}function tf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=v=null,H=null,te=n,me=!1;do{var xe=te.lane&-536870913;if(xe!==te.lane?(Tt&xe)===xe:(ca&xe)===xe){var re=te.revertLane;if(re===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),xe===rs&&(me=!0);else if((ca&re)===re){te=te.next,re===rs&&(me=!0);continue}else xe={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(T=H=xe,v=f):H=H.next=xe,dt.lanes|=re,Wa|=re;xe=te.action,Ar&&a(f,xe),f=te.hasEagerState?te.eagerState:a(f,xe)}else re={lane:xe,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},H===null?(T=H=re,v=f):H=H.next=re,dt.lanes|=xe,Wa|=xe;te=te.next}while(te!==null&&te!==n);if(H===null?v=f:H.next=T,!ri(f,t.memoizedState)&&(pn=!0,me&&(a=ss,a!==null)))throw a;t.memoizedState=f,t.baseState=v,t.baseQueue=H,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function nf(t){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=t(f,v.action),v=v.next;while(v!==u);ri(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function cm(t,n,a){var s=dt,u=fn(),f=Rt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ri((Yt||u).memoizedState,a);if(v&&(u.memoizedState=a,pn=!0),u=u.queue,sf(hm.bind(null,s,u,t),[t]),u.getSnapshot!==n||v||dn!==null&&dn.memoizedState.tag&1){if(s.flags|=2048,hs(9,{destroy:void 0},fm.bind(null,s,u,a,n),null),Qt===null)throw Error(r(349));f||(ca&127)!==0||um(s,n,a)}return a}function um(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Fl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function fm(t,n,a,s){n.value=a,n.getSnapshot=s,dm(n)&&pm(t)}function hm(t,n,a){return a(function(){dm(n)&&pm(t)})}function dm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function pm(t){var n=_r(t,2);n!==null&&ti(n,t,2)}function af(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),Ar){Fe(!0);try{a()}finally{Fe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function mm(t,n,a,s){return t.baseState=a,tf(t,Yt,typeof s=="function"?s:ua)}function Nx(t,n,a,s,u){if(Xl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,gm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function gm(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var T=a(u,s),H=N.S;H!==null&&H(v,T),_m(t,n,T)}catch(te){rf(t,n,te)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,s),_m(t,n,f)}catch(te){rf(t,n,te)}}function _m(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){vm(t,n,s)},function(s){return rf(t,n,s)}):vm(t,n,a)}function vm(t,n,a){n.status="fulfilled",n.value=a,xm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,gm(t,a)))}function rf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,xm(n),n=n.next;while(n!==s)}t.action=null}function xm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ym(t,n){return n}function Sm(t,n){if(Rt){var a=Qt.formState;if(a!==null){e:{var s=dt;if(Rt){if(tn){t:{for(var u=tn,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=Mi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){tn=Mi(u.nextSibling),s=u.data==="F!";break e}}Pa(s)}s=!1}s&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ym,lastRenderedState:n},a.queue=s,a=Hm.bind(null,dt,s),s.dispatch=a,s=af(!1),f=ff.bind(null,dt,!1,s.queue),s=kn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=Nx.bind(null,dt,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Mm(t){var n=fn();return bm(n,Yt,t)}function bm(t,n,a){if(n=tf(t,n,ym)[0],t=Gl(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Eo(n)}catch(v){throw v===os?Ul:v}else s=n;n=fn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,hs(9,{destroy:void 0},Lx.bind(null,u,a),null)),[s,f,t]}function Lx(t,n){t.action=n}function Em(t){var n=fn(),a=Yt;if(a!==null)return bm(n,a,t);fn(),n=n.memoizedState,a=fn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function hs(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Fl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Tm(){return fn().memoizedState}function Vl(t,n,a,s){var u=kn();dt.flags|=t,u.memoizedState=hs(1|n,{destroy:void 0},a,s===void 0?null:s)}function kl(t,n,a,s){var u=fn();s=s===void 0?null:s;var f=u.memoizedState.inst;Yt!==null&&s!==null&&Zu(s,Yt.memoizedState.deps)?u.memoizedState=hs(n,f,a,s):(dt.flags|=t,u.memoizedState=hs(1|n,f,a,s))}function Am(t,n){Vl(8390656,8,t,n)}function sf(t,n){kl(2048,8,t,n)}function Ox(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Fl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=fn().memoizedState;return Ox({ref:n,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Rm(t,n){return kl(4,2,t,n)}function Cm(t,n){return kl(4,4,t,n)}function Dm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Um(t,n,a){a=a!=null?a.concat([t]):null,kl(4,4,Dm.bind(null,n,t),a)}function of(){}function Nm(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Zu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Lm(t,n){var a=fn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Zu(n,s[1]))return s[0];if(s=t(),Ar){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[s,n],s}function lf(t,n,a){return a===void 0||(ca&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=O0(),dt.lanes|=t,Wa|=t,a)}function Om(t,n,a,s){return ri(a,n)?a:cs.current!==null?(t=lf(t,a,s),ri(t,n)||(pn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(Tt&261930)===0?(pn=!0,t.memoizedState=a):(t=O0(),dt.lanes|=t,Wa|=t,n)}function Im(t,n,a,s,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=N.T,T={};N.T=T,ff(t,!1,n,a);try{var H=u(),te=N.S;if(te!==null&&te(T,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var me=Cx(H,s);To(t,n,me,fi(t))}else To(t,n,s,fi(t))}catch(xe){To(t,n,{then:function(){},status:"rejected",reason:xe},fi())}finally{G.p=f,v!==null&&T.types!==null&&(v.types=T.types),N.T=v}}function Ix(){}function cf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Pm(t).queue;Im(t,u,n,ne,a===null?Ix:function(){return zm(t),a(s)})}function Pm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ne},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function zm(t){var n=Pm(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},fi())}function uf(){return In(Vo)}function Bm(){return fn().memoizedState}function Fm(){return fn().memoizedState}function Px(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Fa(a);var s=Ha(n,t,a);s!==null&&(ti(s,n,a),yo(s,n,a)),n={cache:Bu()},t.payload=n;return}n=n.return}}function zx(t,n,a){var s=fi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(t)?Gm(n,a):(a=wu(t,n,a,s),a!==null&&(ti(a,t,s),Vm(a,n,s)))}function Hm(t,n,a){var s=fi();To(t,n,a,s)}function To(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(t))Gm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,ri(T,v))return El(t,n,u,0),Qt===null&&bl(),!1}catch{}if(a=wu(t,n,u,s),a!==null)return ti(a,t,s),Vm(a,n,s),!0}return!1}function ff(t,n,a,s){if(s={lane:2,revertLane:kf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Xl(t)){if(n)throw Error(r(479))}else n=wu(t,a,s,2),n!==null&&ti(n,t,2)}function Xl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function Gm(t,n){us=zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Vm(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,_n(t,a)}}var Ao={readContext:In,use:Hl,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Ao.useEffectEvent=on;var km={readContext:In,use:Hl,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:Am,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Vl(4194308,4,Dm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var s=t();if(Ar){Fe(!0);try{t()}finally{Fe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=kn();if(a!==void 0){var u=a(n);if(Ar){Fe(!0);try{a(n)}finally{Fe(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=zx.bind(null,dt,t),[s.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=af(t);var n=t.queue,a=Hm.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:of,useDeferredValue:function(t,n){var a=kn();return lf(a,t,n)},useTransition:function(){var t=af(!1);return t=Im.bind(null,dt,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=dt,u=kn();if(Rt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Qt===null)throw Error(r(349));(Tt&127)!==0||um(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Am(hm.bind(null,s,f,t),[t]),s.flags|=2048,hs(9,{destroy:void 0},fm.bind(null,s,f,a,n),null),a},useId:function(){var t=kn(),n=Qt.identifierPrefix;if(Rt){var a=Hi,s=Fi;a=(s&~(1<<32-Ie(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:uf,useFormState:Sm,useActionState:Sm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ff.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ef,useCacheRefresh:function(){return kn().memoizedState=Px.bind(null,dt)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Ht&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},hf={readContext:In,use:Hl,useCallback:Nm,useContext:In,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:Gl,useRef:Tm,useState:function(){return Gl(ua)},useDebugValue:of,useDeferredValue:function(t,n){var a=fn();return Om(a,Yt.memoizedState,t,n)},useTransition:function(){var t=Gl(ua)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:uf,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=fn();return mm(a,Yt,t,n)},useMemoCache:ef,useCacheRefresh:Fm};hf.useEffectEvent=wm;var Xm={readContext:In,use:Hl,useCallback:Nm,useContext:In,useEffect:sf,useImperativeHandle:Um,useInsertionEffect:Rm,useLayoutEffect:Cm,useMemo:Lm,useReducer:nf,useRef:Tm,useState:function(){return nf(ua)},useDebugValue:of,useDeferredValue:function(t,n){var a=fn();return Yt===null?lf(a,t,n):Om(a,Yt.memoizedState,t,n)},useTransition:function(){var t=nf(ua)[0],n=fn().memoizedState;return[typeof t=="boolean"?t:Eo(t),n]},useSyncExternalStore:cm,useId:Bm,useHostTransitionStatus:uf,useFormState:Em,useActionState:Em,useOptimistic:function(t,n){var a=fn();return Yt!==null?mm(a,Yt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ef,useCacheRefresh:Fm};Xm.useEffectEvent=wm;function df(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=fi(),u=Fa(s);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,s),n!==null&&(ti(n,t,s),yo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=fi(),u=Fa(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,s),n!==null&&(ti(n,t,s),yo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),s=Fa(a);s.tag=2,n!=null&&(s.callback=n),n=Ha(t,s,a),n!==null&&(ti(n,t,a),yo(n,t,a))}};function Wm(t,n,a,s,u,f,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,v):n.prototype&&n.prototype.isPureReactComponent?!fo(a,s)||!fo(u,f):!0}function qm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&pf.enqueueReplaceState(n,n.state,null)}function wr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Ym(t){Ml(t)}function jm(t){console.error(t)}function Zm(t){Ml(t)}function Wl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Km(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function mf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(t,n)},a}function Qm(t){return t=Fa(t),t.tag=3,t}function Jm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Km(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(t.callback=function(){Km(n,a,s),typeof u!="function"&&(qa===null?qa=new Set([this]):qa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Bx(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&as(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?ic():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Nl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Hf(t,s,u)),!1;case 22:return a.flags|=65536,s===Nl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Hf(t,s,u)),!1}throw Error(r(435,a.tag))}return Hf(t,s,u),ic(),!1}if(Rt)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Lu&&(t=Error(r(422),{cause:s}),mo(_i(t,a)))):(s!==Lu&&(n=Error(r(423),{cause:s}),mo(_i(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=_i(s,a),u=mf(t.stateNode,s,u),Xu(t,u),ln!==4&&(ln=2)),!1;var f=Error(r(520),{cause:s});if(f=_i(f,a),Oo===null?Oo=[f]:Oo.push(f),ln!==4&&(ln=2),n===null)return!0;s=_i(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=mf(a.stateNode,s,t),Xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(qa===null||!qa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Qm(u),Jm(u,t,a,s),Xu(a,u),!1}a=a.return}while(a!==null);return!1}var gf=Error(r(461)),pn=!1;function Pn(t,n,a,s){n.child=t===null?nm(n,null,a,s):Tr(n,t.child,a,s)}function $m(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return Sr(n),s=Ku(t,n,a,v,f,u),T=Qu(),t!==null&&!pn?(Ju(t,n,u),fa(t,n,u)):(Rt&&T&&Uu(n),n.flags|=1,Pn(t,n,s,u),n.child)}function e0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ru(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,t0(t,n,f,s,u)):(t=Al(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Ef(t,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(v,s)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=ra(f,s),t.ref=n.ref,t.return=n,n.child=t}function t0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(fo(f,s)&&t.ref===n.ref)if(pn=!1,n.pendingProps=s=f,Ef(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return _f(t,n,a,s,u)}function n0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return i0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?rm(n,f):qu(),sm(n);else return s=n.lanes=536870912,i0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Dl(n,f.cachePool),rm(n,f),Va(),n.memoizedState=null):(t!==null&&Dl(n,null),qu(),Va());return Pn(t,n,u,a),n.child}function wo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function i0(t,n,a,s,u){var f=Hu();return f=f===null?null:{parent:hn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Dl(n,null),qu(),sm(n),t!==null&&as(t,n,s,!0),n.childLanes=u,null}function ql(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function a0(t,n,a){return Tr(n,t.child,null,a),t=ql(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function Fx(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Rt){if(s.mode==="hidden")return t=ql(n,s),n.lanes=536870912,wo(null,t);if(ju(n),(t=tn)?(t=gg(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,On=n,tn=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return ql(n,s)}var f=t.memoizedState;if(f!==null){var v=f.dehydrated;if(ju(n),u)if(n.flags&256)n.flags&=-257,n=a0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(pn||as(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(s=Qt,s!==null&&(v=vn(s,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,_r(t,v),ti(s,t,v),gf;ic(),n=a0(t,n,a)}else t=f.treeContext,tn=Mi(v.nextSibling),On=n,Rt=!0,Ia=null,yi=!1,t!==null&&Xp(n,t),n=ql(n,s),n.flags|=4096;return n}return t=ra(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Yl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function _f(t,n,a,s,u){return Sr(n),a=Ku(t,n,a,s,void 0,u),s=Qu(),t!==null&&!pn?(Ju(t,n,u),fa(t,n,u)):(Rt&&s&&Uu(n),n.flags|=1,Pn(t,n,a,u),n.child)}function r0(t,n,a,s,u,f){return Sr(n),n.updateQueue=null,a=lm(n,s,a,u),om(t),s=Qu(),t!==null&&!pn?(Ju(t,n,f),fa(t,n,f)):(Rt&&s&&Uu(n),n.flags|=1,Pn(t,n,a,f),n.child)}function s0(t,n,a,s,u){if(Sr(n),n.stateNode===null){var f=es,v=a.contextType;typeof v=="object"&&v!==null&&(f=In(v)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Vu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?In(v):es,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(df(n,a,v,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&pf.enqueueReplaceState(f,f.state,null),Mo(n,s,f,u),So(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,H=wr(a,T);f.props=H;var te=f.context,me=a.contextType;v=es,typeof me=="object"&&me!==null&&(v=In(me));var xe=a.getDerivedStateFromProps;me=typeof xe=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,me||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||te!==v)&&qm(n,f,s,v),Ba=!1;var re=n.memoizedState;f.state=re,Mo(n,s,f,u),So(),te=n.memoizedState,T||re!==te||Ba?(typeof xe=="function"&&(df(n,a,xe,s),te=n.memoizedState),(H=Ba||Wm(n,a,H,s,re,te,v))?(me||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=te),f.props=s,f.state=te,f.context=v,s=H):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,ku(t,n),v=n.memoizedProps,me=wr(a,v),f.props=me,xe=n.pendingProps,re=f.context,te=a.contextType,H=es,typeof te=="object"&&te!==null&&(H=In(te)),T=a.getDerivedStateFromProps,(te=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==xe||re!==H)&&qm(n,f,s,H),Ba=!1,re=n.memoizedState,f.state=re,Mo(n,s,f,u),So();var ce=n.memoizedState;v!==xe||re!==ce||Ba||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof T=="function"&&(df(n,a,T,s),ce=n.memoizedState),(me=Ba||Wm(n,a,me,s,re,ce,H)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(te||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ce,H),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ce,H)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ce),f.props=s,f.state=ce,f.context=H,s=me):(typeof f.componentDidUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===t.memoizedProps&&re===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Yl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Tr(n,t.child,null,u),n.child=Tr(n,null,a,u)):Pn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=fa(t,n,u),t}function o0(t,n,a,s){return xr(),n.flags|=256,Pn(t,n,a,s),n.child}var vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xf(t){return{baseLanes:t,cachePool:Kp()}}function yf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function l0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=t!==null&&t.memoizedState===null?!1:(un.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,t===null){if(Rt){if(u?Ga(n):Va(),(t=tn)?(t=gg(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Oa!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Gp(t),a.return=n,n.child=a,On=n,tn=null)):t=null,t===null)throw Pa(n);return nh(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(Va(),u=n.mode,T=jl({mode:"hidden",children:T},u),s=vr(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=xf(a),s.childLanes=yf(t,v,a),n.memoizedState=vf,wo(null,s)):(Ga(n),Sf(n,T))}var H=t.memoizedState;if(H!==null&&(T=H.dehydrated,T!==null)){if(f)n.flags&256?(Ga(n),n.flags&=-257,n=Mf(t,n,a)):n.memoizedState!==null?(Va(),n.child=t.child,n.flags|=128,n=null):(Va(),T=s.fallback,u=n.mode,s=jl({mode:"visible",children:s.children},u),T=vr(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,Tr(n,t.child,null,a),s=n.child,s.memoizedState=xf(a),s.childLanes=yf(t,v,a),n.memoizedState=vf,n=wo(null,s));else if(Ga(n),nh(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var te=v.dgst;v=te,s=Error(r(419)),s.stack="",s.digest=v,mo({value:s,source:null,stack:null}),n=Mf(t,n,a)}else if(pn||as(t,n,a,!1),v=(a&t.childLanes)!==0,pn||v){if(v=Qt,v!==null&&(s=vn(v,a),s!==0&&s!==H.retryLane))throw H.retryLane=s,_r(t,s),ti(v,t,s),gf;th(T)||ic(),n=Mf(t,n,a)}else th(T)?(n.flags|=192,n.child=t.child,n=null):(t=H.treeContext,tn=Mi(T.nextSibling),On=n,Rt=!0,Ia=null,yi=!1,t!==null&&Xp(n,t),n=Sf(n,s.children),n.flags|=4096);return n}return u?(Va(),T=s.fallback,u=n.mode,H=t.child,te=H.sibling,s=ra(H,{mode:"hidden",children:s.children}),s.subtreeFlags=H.subtreeFlags&65011712,te!==null?T=ra(te,T):(T=vr(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,wo(null,s),s=n.child,T=t.child.memoizedState,T===null?T=xf(a):(u=T.cachePool,u!==null?(H=hn._currentValue,u=u.parent!==H?{parent:H,pool:H}:u):u=Kp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=yf(t,v,a),n.memoizedState=vf,wo(t.child,s)):(Ga(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(v=n.deletions,v===null?(n.deletions=[t],n.flags|=16):v.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=si(22,t,null,n),t.lanes=0,t}function Mf(t,n,a){return Tr(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function c0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Pu(t.return,n,a)}function bf(t,n,a,s,u,f){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function u0(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var v=un.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,ve(un,v),Pn(t,n,s,a),s=Rt?po:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&c0(t,a,n);else if(t.tag===19)c0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Pl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),bf(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Pl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}bf(n,!0,a,null,f,s);break;case"together":bf(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(as(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Ef(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Hx(t,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),za(n,hn,t.memoizedState.cache),xr();break;case 27:case 5:He(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ju(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?l0(t,n,a):(Ga(n),t=fa(t,n,a),t!==null?t.sibling:null);Ga(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(as(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return u0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(un,un.current),s)break;return null;case 22:return n.lanes=0,n0(t,n,a,n.pendingProps);case 24:za(n,hn,t.memoizedState.cache)}return fa(t,n,a)}function f0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!Ef(t,a)&&(n.flags&128)===0)return pn=!1,Hx(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,Rt&&(n.flags&1048576)!==0&&kp(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(t=br(n.elementType),n.type=t,typeof t=="function")Ru(t)?(s=wr(t,s),n.tag=1,n=s0(null,n,t,s,a)):(n.tag=0,n=_f(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=$m(null,n,t,s,a);break e}else if(u===O){n.tag=14,n=e0(null,n,t,s,a);break e}}throw n=fe(t)||t,Error(r(306,n,""))}}return n;case 0:return _f(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=wr(s,n.pendingProps),s0(t,n,s,u,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,ku(t,n),Mo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,za(n,hn,s),s!==f.cache&&zu(n,[hn],a,!0),So(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=o0(t,n,s,a);break e}else if(s!==u){u=_i(Error(r(424)),n),mo(u),n=o0(t,n,s,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,tn=Mi(t.firstChild),On=n,Rt=!0,Ia=null,yi=!0,a=nm(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(xr(),s===u){n=fa(t,n,a);break e}Pn(t,n,s,a)}n=n.child}return n;case 26:return Yl(t,n),t===null?(a=Mg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Rt||(a=n.type,t=n.pendingProps,s=uc(J.current).createElement(a),s[en]=n,s[xn]=t,zn(s,a,t),A(s),n.stateNode=s):n.memoizedState=Mg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return He(n),t===null&&Rt&&(s=n.stateNode=xg(n.type,n.pendingProps,J.current),On=n,yi=!0,u=tn,Ka(n.type)?(ih=u,tn=Mi(s.firstChild)):tn=u),Pn(t,n,n.pendingProps.children,a),Yl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Rt&&((u=s=tn)&&(s=gy(s,n.type,n.pendingProps,yi),s!==null?(n.stateNode=s,On=n,tn=Mi(s.firstChild),yi=!1,u=!0):u=!1),u||Pa(n)),He(n),u=n.type,f=n.pendingProps,v=t!==null?t.memoizedProps:null,s=f.children,Jf(u,f)?s=null:v!==null&&Jf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Ku(t,n,Ux,null,null,a),Vo._currentValue=u),Yl(t,n),Pn(t,n,s,a),n.child;case 6:return t===null&&Rt&&((t=a=tn)&&(a=_y(a,n.pendingProps,yi),a!==null?(n.stateNode=a,On=n,tn=null,t=!0):t=!1),t||Pa(n)),null;case 13:return l0(t,n,a);case 4:return Ce(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Tr(n,null,s,a):Pn(t,n,s,a),n.child;case 11:return $m(t,n,n.type,n.pendingProps,a);case 7:return Pn(t,n,n.pendingProps,a),n.child;case 8:return Pn(t,n,n.pendingProps.children,a),n.child;case 12:return Pn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,za(n,n.type,s.value),Pn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Sr(n),u=In(u),s=s(u),n.flags|=1,Pn(t,n,s,a),n.child;case 14:return e0(t,n,n.type,n.pendingProps,a);case 15:return t0(t,n,n.type,n.pendingProps,a);case 19:return u0(t,n,a);case 31:return Fx(t,n,a);case 22:return n0(t,n,a,n.pendingProps);case 24:return Sr(n),s=In(hn),t===null?(u=Hu(),u===null&&(u=Qt,f=Bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Vu(n),za(n,hn,u)):((t.lanes&a)!==0&&(ku(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),za(n,hn,s)):(s=f.cache,za(n,hn,s),s!==u.cache&&zu(n,[hn],a,!0))),Pn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ha(t){t.flags|=4}function Tf(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(B0())t.flags|=8192;else throw Er=Nl,Gu}else t.flags&=-16777217}function h0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(B0())t.flags|=8192;else throw Er=Nl,Gu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?tt():536870912,t.lanes|=n,gs|=n)}function Ro(t,n){if(!Rt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function nn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function Gx(t,n,a){var s=n.pendingProps;switch(Nu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(n),null;case 1:return nn(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),la(hn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(is(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ou())),nn(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ha(n),f!==null?(nn(n),h0(n,f)):(nn(n),Tf(n,u,null,s,a))):f?f!==t.memoizedState?(ha(n),nn(n),h0(n,f)):(nn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ha(n),nn(n),Tf(n,u,t,s,a)),null;case 27:if(ct(n),a=J.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),null}t=Re.current,is(n)?Wp(n):(t=xg(u,s,a),n.stateNode=t,ha(n))}return nn(n),null;case 5:if(ct(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return nn(n),null}if(f=Re.current,is(n))Wp(n);else{var v=uc(J.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?v.createElement(u,{is:s.is}):v.createElement(u)}}f[en]=n,f[xn]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(zn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&ha(n)}}return nn(n),Tf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ha(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=J.current,is(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=On,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||lg(t.nodeValue,a)),t||Pa(n,!0)}else t=uc(t).createTextNode(s),t[en]=n,n.stateNode=t}return nn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=is(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[en]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),t=!1}else a=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(r(558))}return nn(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=is(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else xr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;nn(n),u=!1}else u=Ou(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),nn(n),null);case 4:return ke(),t===null&&Yf(n.stateNode.containerInfo),nn(n),null;case 10:return la(n.type),nn(n),null;case 19:if(ie(un),s=n.memoizedState,s===null)return nn(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Ro(s,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Pl(t),f!==null){for(n.flags|=128,Ro(s,!1),t=f.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Hp(a,t),a=a.sibling;return ve(un,un.current&1|2),Rt&&sa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&b()>ec&&(n.flags|=128,u=!0,Ro(s,!1),n.lanes=4194304)}else{if(!u)if(t=Pl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Rt)return nn(n),null}else 2*b()-s.renderingStartTime>ec&&a!==536870912&&(n.flags|=128,u=!0,Ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=b(),t.sibling=null,a=un.current,ve(un,u?a&1|2:a&1),Rt&&sa(n,s.treeForkCount),t):(nn(n),null);case 22:case 23:return li(n),Yu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(nn(n),n.subtreeFlags&6&&(n.flags|=8192)):nn(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&ie(Mr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(hn),nn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Vx(t,n){switch(Nu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(hn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ct(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));xr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(un),null;case 4:return ke(),null;case 10:return la(n.type),null;case 22:case 23:return li(n),Yu(),t!==null&&ie(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(hn),null;case 25:return null;default:return null}}function d0(t,n){switch(Nu(n),n.tag){case 3:la(hn),ke();break;case 26:case 27:case 5:ct(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:ie(un);break;case 10:la(n.type);break;case 22:case 23:li(n),Yu(),t!==null&&ie(Mr);break;case 24:la(hn)}}function Co(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,v=a.inst;s=f(),v.destroy=s}a=a.next}while(a!==u)}}catch(T){Wt(n,n.return,T)}}function ka(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var H=a,te=T;try{te()}catch(me){Wt(u,H,me)}}}s=s.next}while(s!==f)}}catch(me){Wt(n,n.return,me)}}function p0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{am(n,a)}catch(s){Wt(t,t.return,s)}}}function m0(t,n,a){a.props=wr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Wt(t,n,s)}}function Do(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Wt(t,n,u)}}function Gi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Wt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Wt(t,n,u)}else a.current=null}function g0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Wt(t,t.return,u)}}function Af(t,n,a){try{var s=t.stateNode;uy(s,t.type,a,n),s[xn]=n}catch(u){Wt(t,t.return,u)}}function _0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ka(t.type)||t.tag===4}function wf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ka(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(s!==4&&(s===27&&Ka(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function Kl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ka(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Kl(t,n,a),t=t.sibling;t!==null;)Kl(t,n,a),t=t.sibling}function v0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,s,a),n[en]=t,n[xn]=a}catch(f){Wt(t,t.return,f)}}var da=!1,mn=!1,Cf=!1,x0=typeof WeakSet=="function"?WeakSet:Set,wn=null;function kx(t,n){if(t=t.containerInfo,Kf=_c,t=Up(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,T=-1,H=-1,te=0,me=0,xe=t,re=null;t:for(;;){for(var ce;xe!==a||u!==0&&xe.nodeType!==3||(T=v+u),xe!==f||s!==0&&xe.nodeType!==3||(H=v+s),xe.nodeType===3&&(v+=xe.nodeValue.length),(ce=xe.firstChild)!==null;)re=xe,xe=ce;for(;;){if(xe===t)break t;if(re===a&&++te===u&&(T=v),re===f&&++me===s&&(H=v),(ce=xe.nextSibling)!==null)break;xe=re,re=xe.parentNode}xe=ce}a=T===-1||H===-1?null:{start:T,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:t,selectionRange:a},_c=!1,wn=n;wn!==null;)if(n=wn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,wn=t;else for(;wn!==null;){switch(n=wn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var qe=wr(a.type,u);t=s.getSnapshotBeforeUpdate(qe,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(it){Wt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)eh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":eh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,wn=t;break}wn=n.return}}function y0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),s&4&&Co(5,a);break;case 1:if(ma(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(v){Wt(a,a.return,v)}else{var u=wr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(v){Wt(a,a.return,v)}}s&64&&p0(a),s&512&&Do(a,a.return);break;case 3:if(ma(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{am(t,n)}catch(v){Wt(a,a.return,v)}}break;case 27:n===null&&s&4&&v0(a);case 26:case 5:ma(t,a),n===null&&s&4&&g0(a),s&512&&Do(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),s&4&&b0(t,a);break;case 13:ma(t,a),s&4&&E0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Jx.bind(null,a),vy(t,a))));break;case 22:if(s=a.memoizedState!==null||da,!s){n=n!==null&&n.memoizedState!==null||mn,u=da;var f=mn;da=s,(mn=n)&&!f?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),da=u,mn=f}break;case 30:break;default:ma(t,a)}}function S0(t){var n=t.alternate;n!==null&&(t.alternate=null,S0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var rn=null,Qn=!1;function pa(t,n,a){for(a=a.child;a!==null;)M0(t,n,a),a=a.sibling}function M0(t,n,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Te,a)}catch{}switch(a.tag){case 26:mn||Gi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Gi(a,n);var s=rn,u=Qn;Ka(a.type)&&(rn=a.stateNode,Qn=!1),pa(t,n,a),Fo(a.stateNode),rn=s,Qn=u;break;case 5:mn||Gi(a,n);case 6:if(s=rn,u=Qn,rn=null,pa(t,n,a),rn=s,Qn=u,rn!==null)if(Qn)try{(rn.nodeType===9?rn.body:rn.nodeName==="HTML"?rn.ownerDocument.body:rn).removeChild(a.stateNode)}catch(f){Wt(a,n,f)}else try{rn.removeChild(a.stateNode)}catch(f){Wt(a,n,f)}break;case 18:rn!==null&&(Qn?(t=rn,pg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Es(t)):pg(rn,a.stateNode));break;case 4:s=rn,u=Qn,rn=a.stateNode.containerInfo,Qn=!0,pa(t,n,a),rn=s,Qn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),mn||ka(4,a,n),pa(t,n,a);break;case 1:mn||(Gi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&m0(a,n,s)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:mn=(s=mn)||a.memoizedState!==null,pa(t,n,a),mn=s;break;default:pa(t,n,a)}}function b0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Es(t)}catch(a){Wt(n,n.return,a)}}}function E0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Es(t)}catch(a){Wt(n,n.return,a)}}function Xx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new x0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new x0),n;default:throw Error(r(435,t.tag))}}function Ql(t,n){var a=Xx(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=$x.bind(null,t,s);s.then(u,u)}})}function Jn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,v=n,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(Ka(T.type)){rn=T.stateNode,Qn=!1;break e}break;case 5:rn=T.stateNode,Qn=!1;break e;case 3:case 4:rn=T.stateNode.containerInfo,Qn=!0;break e}T=T.return}if(rn===null)throw Error(r(160));M0(f,v,u),rn=null,Qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)T0(n,t),n=n.sibling}var Ui=null;function T0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(n,t),$n(t),s&4&&(ka(3,t,t.return),Co(3,t),ka(5,t,t.return));break;case 1:Jn(n,t),$n(t),s&512&&(mn||a===null||Gi(a,a.return)),s&64&&da&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=Ui;if(Jn(n,t),$n(t),s&512&&(mn||a===null||Gi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){e:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[hr]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),zn(f,s,a),f[en]=t,A(f),s=f;break e;case"link":var v=Tg("link","href",u).get(s+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break t}}f=u.createElement(s),zn(f,s,a),u.head.appendChild(f);break;case"meta":if(v=Tg("meta","content",u).get(s+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break t}}f=u.createElement(s),zn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,A(f),s=f}t.stateNode=s}else Ag(u,t.type,t.stateNode);else t.stateNode=Eg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ag(u,t.type,t.stateNode):Eg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Af(t,t.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,t),$n(t),s&512&&(mn||a===null||Gi(a,a.return)),a!==null&&s&4&&Af(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,t),$n(t),s&512&&(mn||a===null||Gi(a,a.return)),t.flags&32){u=t.stateNode;try{yn(u,"")}catch(qe){Wt(t,t.return,qe)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Af(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Cf=!0);break;case 6:if(Jn(n,t),$n(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(qe){Wt(t,t.return,qe)}}break;case 3:if(dc=null,u=Ui,Ui=fc(n.containerInfo),Jn(n,t),Ui=u,$n(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Es(n.containerInfo)}catch(qe){Wt(t,t.return,qe)}Cf&&(Cf=!1,A0(t));break;case 4:s=Ui,Ui=fc(t.stateNode.containerInfo),Jn(n,t),$n(t),Ui=s;break;case 12:Jn(n,t),$n(t);break;case 31:Jn(n,t),$n(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 13:Jn(n,t),$n(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=b()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 22:u=t.memoizedState!==null;var H=a!==null&&a.memoizedState!==null,te=da,me=mn;if(da=te||u,mn=me||H,Jn(n,t),mn=me,da=te,$n(t),s&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||H||da||mn||Rr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){H=a=n;try{if(f=H.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=H.stateNode;var xe=H.memoizedProps.style,re=xe!=null&&xe.hasOwnProperty("display")?xe.display:null;T.style.display=re==null||typeof re=="boolean"?"":(""+re).trim()}}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===6){if(a===null){H=n;try{H.stateNode.nodeValue=u?"":H.memoizedProps}catch(qe){Wt(H,H.return,qe)}}}else if(n.tag===18){if(a===null){H=n;try{var ce=H.stateNode;u?mg(ce,!0):mg(H.stateNode,!1)}catch(qe){Wt(H,H.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Ql(t,a))));break;case 19:Jn(n,t),$n(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Ql(t,s)));break;case 30:break;case 21:break;default:Jn(n,t),$n(t)}}function $n(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(_0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(t);Kl(t,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(yn(v,""),a.flags&=-33);var T=wf(t);Kl(t,T,v);break;case 3:case 4:var H=a.stateNode.containerInfo,te=wf(t);Rf(t,te,H);break;default:throw Error(r(161))}}catch(me){Wt(t,t.return,me)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function A0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;A0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)y0(t,n.alternate,n),n=n.sibling}function Rr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ka(4,n,n.return),Rr(n);break;case 1:Gi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&m0(n,n.return,a),Rr(n);break;case 27:Fo(n.stateNode);case 26:case 5:Gi(n,n.return),Rr(n);break;case 22:n.memoizedState===null&&Rr(n);break;case 30:Rr(n);break;default:Rr(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:ga(u,f,a),Co(4,f);break;case 1:if(ga(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(te){Wt(s,s.return,te)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var H=u.shared.hiddenCallbacks;if(H!==null)for(u.shared.hiddenCallbacks=null,u=0;u<H.length;u++)im(H[u],T)}catch(te){Wt(s,s.return,te)}}a&&v&64&&p0(f),Do(f,f.return);break;case 27:v0(f);case 26:case 5:ga(u,f,a),a&&s===null&&v&4&&g0(f),Do(f,f.return);break;case 12:ga(u,f,a);break;case 31:ga(u,f,a),a&&v&4&&b0(u,f);break;case 13:ga(u,f,a),a&&v&4&&E0(u,f);break;case 22:f.memoizedState===null&&ga(u,f,a),Do(f,f.return);break;case 30:break;default:ga(u,f,a)}n=n.sibling}}function Df(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function Uf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Ni(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(t,n,a,s),n=n.sibling}function w0(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(t,n,a,s),u&2048&&Co(9,n);break;case 1:Ni(t,n,a,s);break;case 3:Ni(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Ni(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(H){Wt(n,n.return,H)}}else Ni(t,n,a,s);break;case 31:Ni(t,n,a,s);break;case 13:Ni(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?Ni(t,n,a,s):Uo(t,n):f._visibility&2?Ni(t,n,a,s):(f._visibility|=2,ds(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Df(v,n);break;case 24:Ni(t,n,a,s),u&2048&&Uf(n.alternate,n);break;default:Ni(t,n,a,s)}}function ds(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,v=n,T=a,H=s,te=v.flags;switch(v.tag){case 0:case 11:case 15:ds(f,v,T,H,u),Co(8,v);break;case 23:break;case 22:var me=v.stateNode;v.memoizedState!==null?me._visibility&2?ds(f,v,T,H,u):Uo(f,v):(me._visibility|=2,ds(f,v,T,H,u)),u&&te&2048&&Df(v.alternate,v);break;case 24:ds(f,v,T,H,u),u&&te&2048&&Uf(v.alternate,v);break;default:ds(f,v,T,H,u)}n=n.sibling}}function Uo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Uo(a,s),u&2048&&Df(s.alternate,s);break;case 24:Uo(a,s),u&2048&&Uf(s.alternate,s);break;default:Uo(a,s)}n=n.sibling}}var No=8192;function ps(t,n,a){if(t.subtreeFlags&No)for(t=t.child;t!==null;)R0(t,n,a),t=t.sibling}function R0(t,n,a){switch(t.tag){case 26:ps(t,n,a),t.flags&No&&t.memoizedState!==null&&Dy(a,Ui,t.memoizedState,t.memoizedProps);break;case 5:ps(t,n,a);break;case 3:case 4:var s=Ui;Ui=fc(t.stateNode.containerInfo),ps(t,n,a),Ui=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=No,No=16777216,ps(t,n,a),No=s):ps(t,n,a));break;default:ps(t,n,a)}}function C0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];wn=s,U0(s,t)}C0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)D0(t),t=t.sibling}function D0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Lo(t);break;default:Lo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];wn=s,U0(s,t)}C0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function U0(t,n){for(;wn!==null;){var a=wn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:go(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,wn=s;else e:for(a=t;wn!==null;){s=wn;var u=s.sibling,f=s.return;if(S0(s),s===a){wn=null;break e}if(u!==null){u.return=f,wn=u;break e}wn=f}}}var Wx={getCacheForType:function(t){var n=In(hn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(hn).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Qt=null,Mt=null,Tt=0,Xt=0,ci=null,Xa=!1,ms=!1,Nf=!1,_a=0,ln=0,Wa=0,Cr=0,Lf=0,ui=0,gs=0,Oo=null,ei=null,Of=!1,$l=0,N0=0,ec=1/0,tc=null,qa=null,Sn=0,Ya=null,_s=null,va=0,If=0,Pf=null,L0=null,Io=0,zf=null;function fi(){return(Ht&2)!==0&&Tt!==0?Tt&-Tt:N.T!==null?kf():ta()}function O0(){if(ui===0)if((Tt&536870912)===0||Rt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function ti(t,n,a){(t===Qt&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)&&(vs(t,0),ja(t,Tt,ui,!1)),mt(t,a),((Ht&2)===0||t!==Qt)&&(t===Qt&&((Ht&2)===0&&(Cr|=a),ln===4&&ja(t,Tt,ui,!1)),Vi(t))}function I0(t,n,a){if((Ht&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ee(t,n),u=s?Zx(t,n):Ff(t,n,!0),f=s;do{if(u===0){ms&&!s&&ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yx(a)){u=Ff(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var v=0;else v=t.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var T=t;u=Oo;var H=T.current.memoizedState.isDehydrated;if(H&&(vs(T,v).flags|=256),v=Ff(T,v,!1),v!==2){if(Nf&&!H){T.errorRecoveryDisabledLanes|=f,Cr|=f,u=4;break e}f=ei,ei=u,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){vs(t,0),ja(t,n,0,!0);break}e:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ja(s,n,ui,!Xa);break e;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=$l+300-b(),10<u)){if(ja(s,n,ui,!Xa),he(s,0,!0)!==0)break e;va=n,s.timeoutHandle=hg(P0.bind(null,s,a,ei,tc,Of,n,ui,Cr,gs,Xa,f,"Throttled",-0,0),u);break e}P0(s,a,ei,tc,Of,n,ui,Cr,gs,Xa,f,null,-0,0)}}break}while(!0);Vi(t)}function P0(t,n,a,s,u,f,v,T,H,te,me,xe,re,ce){if(t.timeoutHandle=-1,xe=n.subtreeFlags,xe&8192||(xe&16785408)===16785408){xe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},R0(n,f,xe);var qe=(f&62914560)===f?$l-b():(f&4194048)===f?N0-b():0;if(qe=Uy(xe,qe),qe!==null){va=f,t.cancelPendingCommit=qe(X0.bind(null,t,n,f,a,s,u,v,T,H,me,xe,null,re,ce)),ja(t,f,v,!te);return}}X0(t,n,f,a,s,u,v,T,H)}function Yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!ri(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ja(t,n,a,s){n&=~Lf,n&=~Cr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Ie(u),v=1<<f;s[f]=-1,u&=~v}a!==0&&Ut(t,a,n)}function nc(){return(Ht&6)===0?(Po(0),!1):!0}function Bf(){if(Mt!==null){if(Xt===0)var t=Mt.return;else t=Mt,oa=yr=null,$u(t),ls=null,vo=0,t=Mt;for(;t!==null;)d0(t.alternate,t),t=t.return;Mt=null}}function vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,dy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,Bf(),Qt=t,Mt=a=ra(t.current,null),Tt=n,Xt=0,ci=null,Xa=!1,ms=Ee(t,n),Nf=!1,gs=ui=Lf=Cr=Wa=ln=0,ei=Oo=null,Of=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Ie(s),f=1<<u;n|=t[u],s&=~f}return _a=n,bl(),a}function z0(t,n){dt=null,N.H=Ao,n===os||n===Ul?(n=$p(),Xt=3):n===Gu?(n=$p(),Xt=4):Xt=n===gf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Mt===null&&(ln=1,Wl(t,_i(n,t.current)))}function B0(){var t=oi.current;return t===null?!0:(Tt&4194048)===Tt?Si===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Si:!1}function F0(){var t=N.H;return N.H=Ao,t===null?Ao:t}function H0(){var t=N.A;return N.A=Wx,t}function ic(){ln=4,Xa||(Tt&4194048)!==Tt&&oi.current!==null||(ms=!0),(Wa&134217727)===0&&(Cr&134217727)===0||Qt===null||ja(Qt,Tt,ui,!1)}function Ff(t,n,a){var s=Ht;Ht|=2;var u=F0(),f=H0();(Qt!==t||Tt!==n)&&(tc=null,vs(t,n)),n=!1;var v=ln;e:do try{if(Xt!==0&&Mt!==null){var T=Mt,H=ci;switch(Xt){case 8:Bf(),v=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var te=Xt;if(Xt=0,ci=null,xs(t,T,H,te),a&&ms){v=0;break e}break;default:te=Xt,Xt=0,ci=null,xs(t,T,H,te)}}jx(),v=ln;break}catch(me){z0(t,me)}while(!0);return n&&t.shellSuspendCounter++,oa=yr=null,Ht=s,N.H=u,N.A=f,Mt===null&&(Qt=null,Tt=0,bl()),v}function jx(){for(;Mt!==null;)G0(Mt)}function Zx(t,n){var a=Ht;Ht|=2;var s=F0(),u=H0();Qt!==t||Tt!==n?(tc=null,ec=b()+500,vs(t,n)):ms=Ee(t,n);e:do try{if(Xt!==0&&Mt!==null){n=Mt;var f=ci;t:switch(Xt){case 1:Xt=0,ci=null,xs(t,n,f,1);break;case 2:case 9:if(Qp(f)){Xt=0,ci=null,V0(n);break}n=function(){Xt!==2&&Xt!==9||Qt!==t||(Xt=7),Vi(t)},f.then(n,n);break e;case 3:Xt=7;break e;case 4:Xt=5;break e;case 7:Qp(f)?(Xt=0,ci=null,V0(n)):(Xt=0,ci=null,xs(t,n,f,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var T=Mt;if(v?wg(v):T.stateNode.complete){Xt=0,ci=null;var H=T.sibling;if(H!==null)Mt=H;else{var te=T.return;te!==null?(Mt=te,ac(te)):Mt=null}break t}}Xt=0,ci=null,xs(t,n,f,5);break;case 6:Xt=0,ci=null,xs(t,n,f,6);break;case 8:Bf(),ln=6;break e;default:throw Error(r(462))}}Kx();break}catch(me){z0(t,me)}while(!0);return oa=yr=null,N.H=s,N.A=u,Ht=a,Mt!==null?0:(Qt=null,Tt=0,bl(),ln)}function Kx(){for(;Mt!==null&&!Ye();)G0(Mt)}function G0(t){var n=f0(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function V0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=r0(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=r0(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:$u(n);default:d0(a,n),n=Mt=Hp(n,_a),n=f0(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function xs(t,n,a,s){oa=yr=null,$u(n),ls=null,vo=0;var u=n.return;try{if(Bx(t,u,n,a,Tt)){ln=1,Wl(t,_i(a,t.current)),Mt=null;return}}catch(f){if(u!==null)throw Mt=u,f;ln=1,Wl(t,_i(a,t.current)),Mt=null;return}n.flags&32768?(Rt||s===1?t=!0:ms||(Tt&536870912)!==0?t=!1:(Xa=t=!0,(s===2||s===9||s===3||s===6)&&(s=oi.current,s!==null&&s.tag===13&&(s.flags|=16384))),k0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){k0(n,Xa);return}t=n.return;var a=Gx(n.alternate,n,_a);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);ln===0&&(ln=5)}function k0(t,n){do{var a=Vx(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);ln=6,Mt=null}function X0(t,n,a,s,u,f,v,T,H){t.cancelPendingCommit=null;do rc();while(Sn!==0);if((Ht&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Au,ft(t,a,f,v,T,H),t===Qt&&(Mt=Qt=null,Tt=0),_s=n,Ya=t,va=a,If=f,Pf=u,L0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ey(ue,function(){return Z0(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=G.p,G.p=2,v=Ht,Ht|=4;try{kx(t,n,a)}finally{Ht=v,G.p=u,N.T=s}}Sn=1,W0(),q0(),Y0()}}function W0(){if(Sn===1){Sn=0;var t=Ya,n=_s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=G.p;G.p=2;var u=Ht;Ht|=4;try{T0(n,t);var f=Qf,v=Up(t.containerInfo),T=f.focusedElem,H=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&Dp(T.ownerDocument.documentElement,T)){if(H!==null&&Su(T)){var te=H.start,me=H.end;if(me===void 0&&(me=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(me,T.value.length);else{var xe=T.ownerDocument||document,re=xe&&xe.defaultView||window;if(re.getSelection){var ce=re.getSelection(),qe=T.textContent.length,it=Math.min(H.start,qe),Zt=H.end===void 0?it:Math.min(H.end,qe);!ce.extend&&it>Zt&&(v=Zt,Zt=it,it=v);var j=Cp(T,it),k=Cp(T,Zt);if(j&&k&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var ee=xe.createRange();ee.setStart(j.node,j.offset),ce.removeAllRanges(),it>Zt?(ce.addRange(ee),ce.extend(k.node,k.offset)):(ee.setEnd(k.node,k.offset),ce.addRange(ee))}}}}for(xe=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&xe.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xe.length;T++){var _e=xe[T];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}_c=!!Kf,Qf=Kf=null}finally{Ht=u,G.p=s,N.T=a}}t.current=n,Sn=2}}function q0(){if(Sn===2){Sn=0;var t=Ya,n=_s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=G.p;G.p=2;var u=Ht;Ht|=4;try{y0(t,n.alternate,n)}finally{Ht=u,G.p=s,N.T=a}}Sn=3}}function Y0(){if(Sn===4||Sn===3){Sn=0,D();var t=Ya,n=_s,a=va,s=L0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Sn=5:(Sn=0,_s=Ya=null,j0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(qa=null),Bi(a),n=n.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Te,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=G.p,G.p=2,N.T=null;try{for(var f=t.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{N.T=n,G.p=u}}(va&3)!==0&&rc(),Vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===zf?Io++:(Io=0,zf=t):Io=0,Po(0)}}function j0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function rc(){return W0(),q0(),Y0(),Z0()}function Z0(){if(Sn!==5)return!1;var t=Ya,n=If;If=0;var a=Bi(va),s=N.T,u=G.p;try{G.p=32>a?32:a,N.T=null,a=Pf,Pf=null;var f=Ya,v=va;if(Sn=0,_s=Ya=null,va=0,(Ht&6)!==0)throw Error(r(331));var T=Ht;if(Ht|=4,D0(f.current),w0(f,f.current,v,a),Ht=T,Po(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Te,f)}catch{}return!0}finally{G.p=u,N.T=s,j0(t,n)}}function K0(t,n,a){n=_i(a,n),n=mf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(mt(t,2),Vi(t))}function Wt(t,n,a){if(t.tag===3)K0(t,t,a);else for(;n!==null;){if(n.tag===3){K0(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(qa===null||!qa.has(s))){t=_i(a,t),a=Qm(2),s=Ha(n,a,2),s!==null&&(Jm(a,s,n,t),mt(s,2),Vi(s));break}}n=n.return}}function Hf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new qx;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Nf=!0,u.add(a),t=Qx.bind(null,t,n,a),n.then(t,t))}function Qx(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(Tt&a)===a&&(ln===4||ln===3&&(Tt&62914560)===Tt&&300>b()-$l?(Ht&2)===0&&vs(t,0):Lf|=a,gs===Tt&&(gs=0)),Vi(t)}function Q0(t,n){n===0&&(n=tt()),t=_r(t,n),t!==null&&(mt(t,n),Vi(t))}function Jx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Q0(t,a)}function $x(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Q0(t,a)}function ey(t,n){return Et(t,n)}var sc=null,ys=null,Gf=!1,oc=!1,Vf=!1,Za=0;function Vi(t){t!==ys&&t.next===null&&(ys===null?sc=ys=t:ys=ys.next=t),oc=!0,Gf||(Gf=!0,ny())}function Po(t,n){if(!Vf&&oc){Vf=!0;do for(var a=!1,s=sc;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Ie(42|t)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,tg(s,f))}else f=Tt,f=he(s,s===Qt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ee(s,f)||(a=!0,tg(s,f));s=s.next}while(a);Vf=!1}}function ty(){J0()}function J0(){oc=Gf=!1;var t=0;Za!==0&&hy()&&(t=Za);for(var n=b(),a=null,s=sc;s!==null;){var u=s.next,f=$0(s,n);f===0?(s.next=null,a===null?sc=u:a.next=u,u===null&&(ys=a)):(a=s,(t!==0||(f&3)!==0)&&(oc=!0)),s=u}Sn!==0&&Sn!==5||Po(t),Za!==0&&(Za=0)}function $0(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var v=31-Ie(f),T=1<<v,H=u[v];H===-1?((T&a)===0||(T&s)!==0)&&(u[v]=De(T,n)):H<=n&&(t.expiredLanes|=T),f&=~T}if(n=Qt,a=Tt,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Xt===2||Xt===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&It(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ee(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&It(s),Bi(a)){case 2:case 8:a=Se;break;case 32:a=ue;break;case 268435456:a=Ue;break;default:a=ue}return s=eg.bind(null,t),a=Et(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&It(s),t.callbackPriority=2,t.callbackNode=null,2}function eg(t,n){if(Sn!==0&&Sn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(rc()&&t.callbackNode!==a)return null;var s=Tt;return s=he(t,t===Qt?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(I0(t,s,n),$0(t,b()),t.callbackNode!=null&&t.callbackNode===a?eg.bind(null,t):null)}function tg(t,n){if(rc())return null;I0(t,n,!0)}function ny(){py(function(){(Ht&6)!==0?Et(pe,ty):J0()})}function kf(){if(Za===0){var t=rs;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Za=t}return Za}function ng(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function ig(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iy(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=ng((u[xn]||null).action),v=s.submitter;v&&(n=(n=v[xn]||null)?ng(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new xl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Za!==0){var H=v?ig(u,v):new FormData(u);cf(a,{pending:!0,data:H,method:u.method,action:f},null,H)}}else typeof f=="function"&&(T.preventDefault(),H=v?ig(u,v):new FormData(u),cf(a,{pending:!0,data:H,method:u.method,action:f},f,H))},currentTarget:u}]})}}for(var Xf=0;Xf<Tu.length;Xf++){var Wf=Tu[Xf],ay=Wf.toLowerCase(),ry=Wf[0].toUpperCase()+Wf.slice(1);Di(ay,"on"+ry)}Di(Op,"onAnimationEnd"),Di(Ip,"onAnimationIteration"),Di(Pp,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(Sx,"onTransitionRun"),Di(Mx,"onTransitionStart"),Di(bx,"onTransitionCancel"),Di(zp,"onTransitionEnd"),Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zo));function ag(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var v=s.length-1;0<=v;v--){var T=s[v],H=T.instance,te=T.currentTarget;if(T=T.listener,H!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}else for(v=0;v<s.length;v++){if(T=s[v],H=T.instance,te=T.currentTarget,T=T.listener,H!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=te;try{f(u)}catch(me){Ml(me)}u.currentTarget=null,f=H}}}}function bt(t,n){var a=n[Wr];a===void 0&&(a=n[Wr]=new Set);var s=t+"__bubble";a.has(s)||(rg(n,t,2,!1),a.add(s))}function qf(t,n,a){var s=0;n&&(s|=4),rg(a,t,s,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function Yf(t){if(!t[lc]){t[lc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(sy.has(a)||qf(a,!1,t),qf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,qf("selectionchange",!1,n))}}function rg(t,n,a,s){switch(Og(n)){case 2:var u=Oy;break;case 8:u=Iy;break;default:u=lh}a=u.bind(null,n,a,t),u=void 0,!hu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function jf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=s.return;v!==null;){var H=v.tag;if((H===3||H===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=Da(T),v===null)return;if(H=v.tag,H===5||H===6||H===26||H===27){s=f=v;continue e}T=T.parentNode}}s=s.return}up(function(){var te=f,me=uu(a),xe=[];e:{var re=Bp.get(t);if(re!==void 0){var ce=xl,qe=t;switch(t){case"keypress":if(_l(a)===0)break e;case"keydown":case"keyup":ce=$v;break;case"focusin":qe="focus",ce=gu;break;case"focusout":qe="blur",ce=gu;break;case"beforeblur":case"afterblur":ce=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=nx;break;case Op:case Ip:case Pp:ce=Xv;break;case zp:ce=ax;break;case"scroll":case"scrollend":ce=Fv;break;case"wheel":ce=sx;break;case"copy":case"cut":case"paste":ce=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=mp;break;case"toggle":case"beforetoggle":ce=lx}var it=(n&4)!==0,Zt=!it&&(t==="scroll"||t==="scrollend"),j=it?re!==null?re+"Capture":null:re;it=[];for(var k=te,ee;k!==null;){var _e=k;if(ee=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||ee===null||j===null||(_e=ao(k,j),_e!=null&&it.push(Bo(k,_e,ee))),Zt)break;k=k.return}0<it.length&&(re=new ce(re,qe,null,a,me),xe.push({event:re,listeners:it}))}}if((n&7)===0){e:{if(re=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",re&&a!==cu&&(qe=a.relatedTarget||a.fromElement)&&(Da(qe)||qe[Ri]))break e;if((ce||re)&&(re=me.window===me?me:(re=me.ownerDocument)?re.defaultView||re.parentWindow:window,ce?(qe=a.relatedTarget||a.toElement,ce=te,qe=qe?Da(qe):null,qe!==null&&(Zt=c(qe),it=qe.tag,qe!==Zt||it!==5&&it!==27&&it!==6)&&(qe=null)):(ce=null,qe=te),ce!==qe)){if(it=dp,_e="onMouseLeave",j="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(it=mp,_e="onPointerLeave",j="onPointerEnter",k="pointer"),Zt=ce==null?re:dr(ce),ee=qe==null?re:dr(qe),re=new it(_e,k+"leave",ce,a,me),re.target=Zt,re.relatedTarget=ee,_e=null,Da(me)===te&&(it=new it(j,k+"enter",qe,a,me),it.target=ee,it.relatedTarget=Zt,_e=it),Zt=_e,ce&&qe)t:{for(it=oy,j=ce,k=qe,ee=0,_e=j;_e;_e=it(_e))ee++;_e=0;for(var Je=k;Je;Je=it(Je))_e++;for(;0<ee-_e;)j=it(j),ee--;for(;0<_e-ee;)k=it(k),_e--;for(;ee--;){if(j===k||k!==null&&j===k.alternate){it=j;break t}j=it(j),k=it(k)}it=null}else it=null;ce!==null&&sg(xe,re,ce,it,!1),qe!==null&&Zt!==null&&sg(xe,Zt,qe,it,!0)}}e:{if(re=te?dr(te):window,ce=re.nodeName&&re.nodeName.toLowerCase(),ce==="select"||ce==="input"&&re.type==="file")var Pt=bp;else if(Sp(re))if(Ep)Pt=vx;else{Pt=gx;var Ke=mx}else ce=re.nodeName,!ce||ce.toLowerCase()!=="input"||re.type!=="checkbox"&&re.type!=="radio"?te&&Ci(te.elementType)&&(Pt=bp):Pt=_x;if(Pt&&(Pt=Pt(t,te))){Mp(xe,Pt,a,me);break e}Ke&&Ke(t,re,te),t==="focusout"&&te&&re.type==="number"&&te.memoizedProps.value!=null&&Dn(re,"number",re.value)}switch(Ke=te?dr(te):window,t){case"focusin":(Sp(Ke)||Ke.contentEditable==="true")&&(Qr=Ke,Mu=te,ho=null);break;case"focusout":ho=Mu=Qr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,Np(xe,a,me);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Np(xe,a,me)}var gt;if(vu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Kr?xp(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(gp&&a.locale!=="ko"&&(Kr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Kr&&(gt=fp()):(La=me,du="value"in La?La.value:La.textContent,Kr=!0)),Ke=cc(te,At),0<Ke.length&&(At=new pp(At,t,null,a,me),xe.push({event:At,listeners:Ke}),gt?At.data=gt:(gt=yp(a),gt!==null&&(At.data=gt)))),(gt=ux?fx(t,a):hx(t,a))&&(At=cc(te,"onBeforeInput"),0<At.length&&(Ke=new pp("onBeforeInput","beforeinput",null,a,me),xe.push({event:Ke,listeners:At}),Ke.data=gt)),iy(xe,t,te,a,me)}ag(xe,n)})}function Bo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function cc(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=ao(t,a),u!=null&&s.unshift(Bo(t,u,f)),u=ao(t,n),u!=null&&s.push(Bo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function sg(t,n,a,s,u){for(var f=n._reactName,v=[];a!==null&&a!==s;){var T=a,H=T.alternate,te=T.stateNode;if(T=T.tag,H!==null&&H===s)break;T!==5&&T!==26&&T!==27||te===null||(H=te,u?(te=ao(a,f),te!=null&&v.unshift(Bo(a,te,H))):u||(te=ao(a,f),te!=null&&v.push(Bo(a,te,H)))),a=a.return}v.length!==0&&t.push({event:n,listeners:v})}var ly=/\r\n?/g,cy=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(ly,`
`).replace(cy,"")}function lg(t,n){return n=og(n),og(t)===n}function jt(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||yn(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&yn(t,""+s);break;case"className":$e(t,"class",s);break;case"tabIndex":$e(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":$e(t,a,s);break;case"style":Yr(t,s,f);break;case"data":if(n!=="object"){$e(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ml(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&jt(t,n,"name",u.name,u,null),jt(t,n,"formEncType",u.formEncType,u,null),jt(t,n,"formMethod",u.formMethod,u,null),jt(t,n,"formTarget",u.formTarget,u,null)):(jt(t,n,"encType",u.encType,u,null),jt(t,n,"method",u.method,u,null),jt(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ml(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=ia);break;case"onScroll":s!=null&&bt("scroll",t);break;case"onScrollEnd":s!=null&&bt("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ml(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":bt("beforetoggle",t),bt("toggle",t),je(t,"popover",s);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":je(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zv.get(a)||a,je(t,a,s))}}function Zf(t,n,a,s,u,f){switch(a){case"style":Yr(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?yn(t,s):(typeof s=="number"||typeof s=="bigint")&&yn(t,""+s);break;case"onScroll":s!=null&&bt("scroll",t);break;case"onScrollEnd":s!=null&&bt("scrollend",t);break;case"onClick":s!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!le.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break e}a in t?t[a]=s:s===!0?t.setAttribute(a,""):je(t,a,s)}}}function zn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",t),bt("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,f,v,a,null)}}u&&jt(t,n,"srcSet",a.srcSet,a,null),s&&jt(t,n,"src",a.src,a,null);return;case"input":bt("invalid",t);var T=f=v=u=null,H=null,te=null;for(s in a)if(a.hasOwnProperty(s)){var me=a[s];if(me!=null)switch(s){case"name":u=me;break;case"type":v=me;break;case"checked":H=me;break;case"defaultChecked":te=me;break;case"value":f=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(r(137,n));break;default:jt(t,n,s,me,a,null)}}na(t,f,T,H,te,v,u,!1);return;case"select":bt("invalid",t),s=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:jt(t,n,u,T,a,null)}n=f,a=v,t.multiple=!!s,n!=null?mi(t,!!s,n,!1):a!=null&&mi(t,!!s,a,!0);return;case"textarea":bt("invalid",t),f=u=s=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:jt(t,n,v,T,a,null)}Un(t,s,u,f);return;case"option":for(H in a)a.hasOwnProperty(H)&&(s=a[H],s!=null)&&(H==="selected"?t.selected=s&&typeof s!="function"&&typeof s!="symbol":jt(t,n,H,s,a,null));return;case"dialog":bt("beforetoggle",t),bt("toggle",t),bt("cancel",t),bt("close",t);break;case"iframe":case"object":bt("load",t);break;case"video":case"audio":for(s=0;s<zo.length;s++)bt(zo[s],t);break;case"image":bt("error",t),bt("load",t);break;case"details":bt("toggle",t);break;case"embed":case"source":case"link":bt("error",t),bt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in a)if(a.hasOwnProperty(te)&&(s=a[te],s!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:jt(t,n,te,s,a,null)}return;default:if(Ci(n)){for(me in a)a.hasOwnProperty(me)&&(s=a[me],s!==void 0&&Zf(t,n,me,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&jt(t,n,T,s,a,null))}function uy(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,H=null,te=null,me=null;for(ce in a){var xe=a[ce];if(a.hasOwnProperty(ce)&&xe!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":H=xe;default:s.hasOwnProperty(ce)||jt(t,n,ce,null,s,xe)}}for(var re in s){var ce=s[re];if(xe=a[re],s.hasOwnProperty(re)&&(ce!=null||xe!=null))switch(re){case"type":f=ce;break;case"name":u=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":v=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(r(137,n));break;default:ce!==xe&&jt(t,n,re,ce,s,xe)}}Cn(t,v,T,H,te,me,f,u);return;case"select":ce=v=T=re=null;for(f in a)if(H=a[f],a.hasOwnProperty(f)&&H!=null)switch(f){case"value":break;case"multiple":ce=H;default:s.hasOwnProperty(f)||jt(t,n,f,null,s,H)}for(u in s)if(f=s[u],H=a[u],s.hasOwnProperty(u)&&(f!=null||H!=null))switch(u){case"value":re=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==H&&jt(t,n,u,f,s,H)}n=T,a=v,s=ce,re!=null?mi(t,!!a,re,!1):!!s!=!!a&&(n!=null?mi(t,!!a,n,!0):mi(t,!!a,a?[]:"",!1));return;case"textarea":ce=re=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:jt(t,n,T,null,s,u)}for(v in s)if(u=s[v],f=a[v],s.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":re=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&jt(t,n,v,u,s,f)}kt(t,re,ce);return;case"option":for(var qe in a)re=a[qe],a.hasOwnProperty(qe)&&re!=null&&!s.hasOwnProperty(qe)&&(qe==="selected"?t.selected=!1:jt(t,n,qe,null,s,re));for(H in s)re=s[H],ce=a[H],s.hasOwnProperty(H)&&re!==ce&&(re!=null||ce!=null)&&(H==="selected"?t.selected=re&&typeof re!="function"&&typeof re!="symbol":jt(t,n,H,re,s,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)re=a[it],a.hasOwnProperty(it)&&re!=null&&!s.hasOwnProperty(it)&&jt(t,n,it,null,s,re);for(te in s)if(re=s[te],ce=a[te],s.hasOwnProperty(te)&&re!==ce&&(re!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:jt(t,n,te,re,s,ce)}return;default:if(Ci(n)){for(var Zt in a)re=a[Zt],a.hasOwnProperty(Zt)&&re!==void 0&&!s.hasOwnProperty(Zt)&&Zf(t,n,Zt,void 0,s,re);for(me in s)re=s[me],ce=a[me],!s.hasOwnProperty(me)||re===ce||re===void 0&&ce===void 0||Zf(t,n,me,re,s,ce);return}}for(var j in a)re=a[j],a.hasOwnProperty(j)&&re!=null&&!s.hasOwnProperty(j)&&jt(t,n,j,null,s,re);for(xe in s)re=s[xe],ce=a[xe],!s.hasOwnProperty(xe)||re===ce||re==null&&ce==null||jt(t,n,xe,re,s,ce)}function cg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&cg(v)){for(v=0,T=u.responseEnd,s+=1;s<a.length;s++){var H=a[s],te=H.startTime;if(te>T)break;var me=H.transferSize,xe=H.initiatorType;me&&cg(xe)&&(H=H.responseEnd,v+=me*(H<T?1:(T-te)/(H-te)))}if(--s,n+=8*(f+v)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kf=null,Qf=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function ug(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $f=null;function hy(){var t=window.event;return t&&t.type==="popstate"?t===$f?!1:($f=t,!0):($f=null,!1)}var hg=typeof setTimeout=="function"?setTimeout:void 0,dy=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(my)}:hg;function my(t){setTimeout(function(){throw t})}function Ka(t){return t==="head"}function pg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Es(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")Fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Fo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[hr]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&Fo(t.ownerDocument.body);a=u}while(a);Es(n)}function mg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function eh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eh(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function gy(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[hr])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Mi(t.nextSibling),t===null)break}return null}function _y(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Mi(t.nextSibling),t===null))return null;return t}function gg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Mi(t.nextSibling),t===null))return null;return t}function th(t){return t.data==="$?"||t.data==="$~"}function nh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function vy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ih=null;function _g(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Mi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function vg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function xg(t,n,a){switch(n=uc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var bi=new Map,yg=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=G.d;G.d={f:xy,r:yy,D:Sy,C:My,L:by,m:Ey,X:Ay,S:Ty,M:wy};function xy(){var t=xa.f(),n=nc();return t||n}function yy(t){var n=Ua(t);n!==null&&n.tag===5&&n.type==="form"?zm(n):xa.r(t)}var Ss=typeof document>"u"?null:document;function Sg(t,n,a){var s=Ss;if(s&&typeof n=="string"&&n){var u=rt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),yg.has(u)||(yg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),zn(n,"link",t),A(n),s.head.appendChild(n)))}}function Sy(t){xa.D(t),Sg("dns-prefetch",t,null)}function My(t,n){xa.C(t,n),Sg("preconnect",t,n)}function by(t,n,a){xa.L(t,n,a);var s=Ss;if(s&&t&&n){var u='link[rel="preload"][as="'+rt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+rt(a.imageSizes)+'"]')):u+='[href="'+rt(t)+'"]';var f=u;switch(n){case"style":f=Ms(t);break;case"script":f=bs(t)}bi.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),bi.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(Ho(f))||n==="script"&&s.querySelector(Go(f))||(n=s.createElement("link"),zn(n,"link",t),A(n),s.head.appendChild(n)))}}function Ey(t,n){xa.m(t,n);var a=Ss;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+rt(s)+'"][href="'+rt(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=bs(t)}if(!bi.has(f)&&(t=g({rel:"modulepreload",href:t},n),bi.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(f)))return}s=a.createElement("link"),zn(s,"link",t),A(s),a.head.appendChild(s)}}}function Ty(t,n,a){xa.S(t,n,a);var s=Ss;if(s&&t){var u=Na(s).hoistableStyles,f=Ms(t);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(Ho(f)))T.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=bi.get(f))&&ah(t,a);var H=v=s.createElement("link");A(H),zn(H,"link",t),H._p=new Promise(function(te,me){H.onload=te,H.onerror=me}),H.addEventListener("load",function(){T.loading|=1}),H.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function Ay(t,n){xa.X(t,n);var a=Ss;if(a&&t){var s=Na(a).hoistableScripts,u=bs(t),f=s.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0},n),(n=bi.get(u))&&rh(t,n),f=a.createElement("script"),A(f),zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function wy(t,n){xa.M(t,n);var a=Ss;if(a&&t){var s=Na(a).hoistableScripts,u=bs(t),f=s.get(u);f||(f=a.querySelector(Go(u)),f||(t=g({src:t,async:!0,type:"module"},n),(n=bi.get(u))&&rh(t,n),f=a.createElement("script"),A(f),zn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Mg(t,n,a,s){var u=(u=J.current)?fc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Ms(a.href),a=Na(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ms(a.href);var f=Na(u).hoistableStyles,v=f.get(t);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,v),(f=u.querySelector(Ho(t)))&&!f._p&&(v.instance=f,v.state.loading=5),bi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bi.set(t,a),f||Ry(u,t,a,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=bs(a),a=Na(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Ms(t){return'href="'+rt(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function bg(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ry(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),zn(n,"link",a),A(n),t.head.appendChild(n))}function bs(t){return'[src="'+rt(t)+'"]'}function Go(t){return"script[async]"+t}function Eg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+rt(a.href)+'"]');if(s)return n.instance=s,A(s),s;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),A(s),zn(s,"style",u),hc(s,a.precedence,t),n.instance=s;case"stylesheet":u=Ms(a.href);var f=t.querySelector(Ho(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;s=bg(a),(u=bi.get(u))&&ah(s,u),f=(t.ownerDocument||t).createElement("link"),A(f);var v=f;return v._p=new Promise(function(T,H){v.onload=T,v.onerror=H}),zn(f,"link",s),n.state.loading|=4,hc(f,a.precedence,t),n.instance=f;case"script":return f=bs(a.src),(u=t.querySelector(Go(f)))?(n.instance=u,A(u),u):(s=a,(u=bi.get(f))&&(s=g({},a),rh(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),zn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,hc(s,a.precedence,t));return n.instance}function hc(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ah(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function rh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var dc=null;function Tg(t,n,a){if(dc===null){var s=new Map,u=dc=new Map;u.set(a,s)}else u=dc,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[hr]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=t+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function Ag(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Cy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dy(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ms(s.href),f=n.querySelector(Ho(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,s=bg(s),(u=bi.get(u))&&ah(s,u),f=f.createElement("link"),A(f);var v=f;v._p=new Promise(function(T,H){v.onload=T,v.onerror=H}),zn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=pc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sh=0;function Uy(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&sh===0&&(sh=62500*fy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>sh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(Ny,t),mc=null,pc.call(t))}function Ny(t,n){if(!(n.state.loading&4)){var a=mc.get(t);if(a)var s=a.get(null);else{a=new Map,mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||s,f===s&&a.set(null,u),a.set(v,u),this.count++,s=pc.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:I,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function Ly(t,n,a,s,u,f,v,T,H){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function Rg(t,n,a,s,u,f,v,T,H,te,me,xe){return t=new Ly(t,n,a,v,H,te,me,xe,T),n=1,f===!0&&(n|=24),f=si(3,null,null,n),t.current=f,f.stateNode=t,n=Bu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Vu(f),t}function Cg(t){return t?(t=es,t):es}function Dg(t,n,a,s,u,f){u=Cg(u),s.context===null?s.context=u:s.pendingContext=u,s=Fa(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ha(t,s,n),a!==null&&(ti(a,t,n),yo(a,t,n))}function Ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function oh(t,n){Ug(t,n),(t=t.alternate)&&Ug(t,n)}function Ng(t){if(t.tag===13||t.tag===31){var n=_r(t,67108864);n!==null&&ti(n,t,67108864),oh(t,67108864)}}function Lg(t){if(t.tag===13||t.tag===31){var n=fi();n=ea(n);var a=_r(t,n);a!==null&&ti(a,t,n),oh(t,n)}}var _c=!0;function Oy(t,n,a,s){var u=N.T;N.T=null;var f=G.p;try{G.p=2,lh(t,n,a,s)}finally{G.p=f,N.T=u}}function Iy(t,n,a,s){var u=N.T;N.T=null;var f=G.p;try{G.p=8,lh(t,n,a,s)}finally{G.p=f,N.T=u}}function lh(t,n,a,s){if(_c){var u=ch(s);if(u===null)jf(t,n,s,vc,a),Ig(t,s);else if(zy(u,t,n,a,s))s.stopPropagation();else if(Ig(t,s),n&4&&-1<Py.indexOf(t)){for(;u!==null;){var f=Ua(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=de(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var H=1<<31-Ie(v);T.entanglements[1]|=H,v&=~H}Vi(f),(Ht&6)===0&&(ec=b()+500,Po(0))}}break;case 31:case 13:T=_r(f,2),T!==null&&ti(T,f,2),nc(),oh(f,2)}if(f=ch(s),f===null&&jf(t,n,s,vc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else jf(t,n,s,null,a)}}function ch(t){return t=uu(t),uh(t)}var vc=null;function uh(t){if(vc=null,t=Da(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return vc=t,null}function Og(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pe:return 2;case Se:return 8;case ue:case Xe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var fh=!1,Qa=null,Ja=null,$a=null,ko=new Map,Xo=new Map,er=[],Py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ig(t,n){switch(t){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":$a=null;break;case"pointerover":case"pointerout":ko.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(n.pointerId)}}function Wo(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ua(n),n!==null&&Ng(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zy(t,n,a,s,u){switch(n){case"focusin":return Qa=Wo(Qa,t,n,a,s,u),!0;case"dragenter":return Ja=Wo(Ja,t,n,a,s,u),!0;case"mouseover":return $a=Wo($a,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return ko.set(f,Wo(ko.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,Xo.set(f,Wo(Xo.get(f)||null,t,n,a,s,u)),!0}return!1}function Pg(t){var n=Da(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Zn(t.priority,function(){Lg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Zn(t.priority,function(){Lg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ch(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);cu=s,a.target.dispatchEvent(s),cu=null}else return n=Ua(a),n!==null&&Ng(n),t.blockedOn=a,!1;n.shift()}return!0}function zg(t,n,a){xc(t)&&a.delete(n)}function By(){fh=!1,Qa!==null&&xc(Qa)&&(Qa=null),Ja!==null&&xc(Ja)&&(Ja=null),$a!==null&&xc($a)&&($a=null),ko.forEach(zg),Xo.forEach(zg)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,fh||(fh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,By)))}var Sc=null;function Bg(t){Sc!==t&&(Sc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(uh(s||a)===null)continue;break}var f=Ua(a);f!==null&&(t.splice(n,3),n-=3,cf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Es(t){function n(H){return yc(H,t)}Qa!==null&&yc(Qa,t),Ja!==null&&yc(Ja,t),$a!==null&&yc($a,t),ko.forEach(n),Xo.forEach(n);for(var a=0;a<er.length;a++){var s=er[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)Pg(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],v=u[xn]||null;if(typeof f=="function")v||Bg(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[xn]||null)T=v.formAction;else if(uh(u)!==null)continue}else T=v.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Bg(a)}}}function Fg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function hh(t){this._internalRoot=t}Mc.prototype.render=hh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=fi();Dg(a,s,t,n,null,null)},Mc.prototype.unmount=hh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Dg(t.current,2,null,t,null,null),nc(),n[Ri]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ta();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&Pg(t)}};var Hg=e.version;if(Hg!=="19.2.3")throw Error(r(527,Hg,"19.2.3"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var Fy={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bc.isDisabled&&bc.supportsFiber)try{Te=bc.inject(Fy),Ae=bc}catch{}}return Yo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=Ym,f=jm,v=Zm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Rg(t,1,!1,null,null,a,s,null,u,f,v,Fg),t[Ri]=n.current,Yf(t),new hh(n)},Yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=Ym,v=jm,T=Zm,H=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(H=a.formState)),n=Rg(t,1,!0,n,a??null,s,u,H,f,v,T,Fg),n.context=Cg(null),a=n.current,s=fi(),s=ea(s),u=Fa(s),u.callback=null,Ha(a,u,s),a=s,n.current.lanes=a,mt(n,a),Vi(n),t[Ri]=n.current,Yf(t),new Mc(n)},Yo.version="19.2.3",Yo}var Kg;function Ky(){if(Kg)return mh.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=Zy(),mh.exports}var Qy=Ky();const Jy=$_(Qy),$y="modulepreload",eS=function(o){return"/horror/"+o},Qg={},tS=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(_){return Promise.all(_.map(g=>Promise.resolve(g).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var h=p;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),m=d?.nonce||d?.getAttribute("nonce");l=p(i.map(_=>{if(_=eS(_),_ in Qg)return;Qg[_]=!0;const g=_.endsWith(".css"),y=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${_}"]${y}`))return;const S=document.createElement("link");if(S.rel=g?"stylesheet":$y,g||(S.as="script"),S.crossOrigin="",S.href=_,m&&S.setAttribute("nonce",m),document.head.appendChild(S),g)return new Promise((E,R)=>{S.addEventListener("load",E),S.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(d){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=d,window.dispatchEvent(m),!m.defaultPrevented)throw d}return l.then(d=>{for(const m of d||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};function nS(o={}){const{immediate:e=!1,onNeedRefresh:i,onOfflineReady:r,onRegistered:l,onRegisteredSW:c,onRegisterError:h}=o;let d,m;const p=async(g=!0)=>{await m};async function _(){if("serviceWorker"in navigator){if(d=await tS(async()=>{const{Workbox:g}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:g}},[]).then(({Workbox:g})=>new g("/horror/sw.js",{scope:"/horror/",type:"classic"})).catch(g=>{h?.(g)}),!d)return;d.addEventListener("activated",g=>{(g.isUpdate||g.isExternal)&&window.location.reload()}),d.addEventListener("installed",g=>{g.isUpdate||r?.()}),d.register({immediate:e}).then(g=>{c?c("/horror/sw.js",g):l?.(g)}).catch(g=>{h?.(g)})}}return m=_(),p}const iS=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,r)=>r?r.toUpperCase():i.toLowerCase()),Jg=o=>{const e=aS(o);return e.charAt(0).toUpperCase()+e.slice(1)},ev=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim(),rS=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var sS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const oS=_t.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},m)=>_t.createElement("svg",{ref:m,...sS,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:ev("lucide",l),...!c&&!rS(d)&&{"aria-hidden":"true"},...d},[...h.map(([p,_])=>_t.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Xr=(o,e)=>{const i=_t.forwardRef(({className:r,...l},c)=>_t.createElement(oS,{ref:c,iconNode:e,className:ev(`lucide-${iS(Jg(o))}`,`lucide-${o}`,r),...l}));return i.displayName=Jg(o),i};const lS=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],tv=Xr("arrow-left",lS);const cS=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uS=Xr("circle-alert",cS);const fS=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],hS=Xr("eye",fS);const dS=[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]],pS=Xr("ghost",dS);const mS=[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]],gS=Xr("mountain",mS);const _S=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],vS=Xr("play",_S);const xS=[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]],yS=Xr("wheat",xS);const jd="182",SS=0,$g=1,MS=2,Yc=1,bS=2,il=3,fr=0,ai=1,Wi=2,Aa=0,Xs=1,e_=2,t_=3,n_=4,ES=5,zr=100,TS=101,AS=102,wS=103,RS=104,CS=200,DS=201,US=202,NS=203,$h=204,ed=205,LS=206,OS=207,IS=208,PS=209,zS=210,BS=211,FS=212,HS=213,GS=214,td=0,nd=1,id=2,Ys=3,ad=4,rd=5,sd=6,od=7,nv=0,VS=1,kS=2,Zi=0,iv=1,av=2,rv=3,sv=4,ov=5,lv=6,cv=7,uv=300,Vr=301,js=302,ld=303,cd=304,au=306,Ws=1e3,Ta=1001,ud=1002,Mn=1003,XS=1004,Ec=1005,Gn=1006,xh=1007,Fr=1008,pi=1009,fv=1010,hv=1011,sl=1012,Zd=1013,Qi=1014,Yi=1015,Ra=1016,Kd=1017,Qd=1018,ol=1020,dv=35902,pv=35899,mv=1021,gv=1022,Pi=1023,Ca=1026,Hr=1027,_v=1028,Jd=1029,Zs=1030,$d=1031,ep=1033,jc=33776,Zc=33777,Kc=33778,Qc=33779,fd=35840,hd=35841,dd=35842,pd=35843,md=36196,gd=37492,_d=37496,vd=37488,xd=37489,yd=37490,Sd=37491,Md=37808,bd=37809,Ed=37810,Td=37811,Ad=37812,wd=37813,Rd=37814,Cd=37815,Dd=37816,Ud=37817,Nd=37818,Ld=37819,Od=37820,Id=37821,Pd=36492,zd=36494,Bd=36495,Fd=36283,Hd=36284,Gd=36285,Vd=36286,WS=3200,vv=0,qS=1,lr="",Ti="srgb",Ks="srgb-linear",$c="linear",qt="srgb",Ts=7680,i_=519,YS=512,jS=513,ZS=514,tp=515,KS=516,QS=517,np=518,JS=519,kd=35044,a_="300 es",ji=2e3,eu=2001;function xv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ll(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function $S(){const o=ll("canvas");return o.style.display="block",o}const r_={};function tu(...o){const e="THREE."+o.shift();console.log(e,...o)}function lt(...o){const e="THREE."+o.shift();console.warn(e,...o)}function Lt(...o){const e="THREE."+o.shift();console.error(e,...o)}function cl(...o){const e=o.join(" ");e in r_||(r_[e]=!0,lt(...o))}function eM(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Js{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,nu=180/Math.PI;function ur(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function Ct(o,e,i){return Math.max(e,Math.min(i,o))}function tM(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function qi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class yt{constructor(e=0,i=0){yt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],y=c[h+0],S=c[h+1],E=c[h+2],R=c[h+3];if(d<=0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g;return}if(d>=1){e[i+0]=y,e[i+1]=S,e[i+2]=E,e[i+3]=R;return}if(g!==R||m!==y||p!==S||_!==E){let M=m*y+p*S+_*E+g*R;M<0&&(y=-y,S=-S,E=-E,R=-R,M=-M);let x=1-d;if(M<.9995){const P=Math.acos(M),I=Math.sin(P);x=Math.sin(x*P)/I,d=Math.sin(d*P)/I,m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+R*d}else{m=m*x+y*d,p=p*x+S*d,_=_*x+E*d,g=g*x+R*d;const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=c[h],y=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+m*S-p*y,e[i+1]=m*E+_*y+p*g-d*S,e[i+2]=p*E+_*S+d*y-m*g,e[i+3]=_*E-d*g-m*y-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(c/2),y=m(r/2),S=m(l/2),E=m(c/2);switch(h){case"XYZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"YXZ":this._x=y*_*g+p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"ZXY":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g-y*S*E;break;case"ZYX":this._x=y*_*g-p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g+y*S*E;break;case"YZX":this._x=y*_*g+p*S*E,this._y=p*S*g+y*_*E,this._z=p*_*E-y*S*g,this._w=p*_*g-y*S*E;break;case"XZY":this._x=y*_*g-p*S*E,this._y=p*S*g-y*_*E,this._z=p*_*E+y*S*g,this._w=p*_*g+y*S*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],y=r+d+g;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-c*m,this._y=l*_+h*m+c*d-r*p,this._z=c*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-c*g,this.z=l+m*g+c*_-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new $,s_=new fl;class vt{constructor(e,i,r,l,c,h,d,m,p){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],y=r[2],S=r[5],E=r[8],R=l[0],M=l[3],x=l[6],P=l[1],I=l[4],L=l[7],z=l[2],F=l[5],O=l[8];return c[0]=h*R+d*P+m*z,c[3]=h*M+d*I+m*F,c[6]=h*x+d*L+m*O,c[1]=p*R+_*P+g*z,c[4]=p*M+_*I+g*F,c[7]=p*x+_*L+g*O,c[2]=y*R+S*P+E*z,c[5]=y*M+S*I+E*F,c[8]=y*x+S*L+E*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*h*_-i*d*p-r*c*_+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*h-d*p,y=d*m-_*c,S=p*c-h*m,E=i*g+r*y+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(l*p-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=y*R,e[4]=(_*i-l*m)*R,e[5]=(l*c-d*i)*R,e[6]=S*R,e[7]=(r*m-p*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(bh.makeScale(e,i)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,i){return this.premultiply(bh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new vt,o_=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nM(){const o={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===qt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qt&&(l.r=qs(l.r),l.g=qs(l.g),l.b=qs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===lr?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return cl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return cl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ks]:{primaries:e,whitePoint:r,transfer:$c,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Ot=nM();function wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function qs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let As;class iM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{As===void 0&&(As=ll("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=As}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ll("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=wa(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(wa(i[r]/255)*255):i[r]=wa(i[r]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aM=0;class ip{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=ur(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?iM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let rM=0;const Th=new $;class Vn extends Js{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Ta,l=Ta,c=Gn,h=Fr,d=Pi,m=pi,p=Vn.DEFAULT_ANISOTROPY,_=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ur(),this.name="",this.source=new ip(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Th).x}get height(){return this.source.getSize(Th).y}get depth(){return this.source.getSize(Th).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=uv;Vn.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,i=0,r=0,l=1){cn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],y=m[1],S=m[5],E=m[9],R=m[2],M=m[6],x=m[10];if(Math.abs(_-y)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+y)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const I=(p+1)/2,L=(S+1)/2,z=(x+1)/2,F=(_+y)/4,O=(g+R)/4,q=(E+M)/4;return I>L&&I>z?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=F/r,c=O/r):L>z?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=F/l,c=q/l):z<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(z),r=O/c,l=q/c),this.set(r,l,c,i),this}let P=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(y-_)*(y-_));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(g-R)/P,this.z=(y-_)/P,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ct(this.x,e.x,i.x),this.y=Ct(this.y,e.y,i.y),this.z=Ct(this.z,e.z,i.z),this.w=Ct(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ct(this.x,e,i),this.y=Ct(this.y,e,i),this.z=Ct(this.z,e,i),this.w=Ct(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sM extends Js{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ip(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends sM{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class yv extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Li):Li.fromBufferAttribute(c,h),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tc.copy(r.boundingBox)),Tc.applyMatrix4(e.matrixWorld),this.union(Tc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Ac.subVectors(this.max,jo),ws.subVectors(e.a,jo),Rs.subVectors(e.b,jo),Cs.subVectors(e.c,jo),nr.subVectors(Rs,ws),ir.subVectors(Cs,Rs),Dr.subVectors(ws,Cs);let i=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Dr.z,Dr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Dr.z,0,-Dr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Dr.y,Dr.x,0];return!Ah(i,ws,Rs,Cs,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Ah(i,ws,Rs,Cs,Ac))?!1:(wc.crossVectors(nr,ir),i=[wc.x,wc.y,wc.z],Ah(i,ws,Rs,Cs,Ac))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ya),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ya=[new $,new $,new $,new $,new $,new $,new $,new $],Li=new $,Tc=new hl,ws=new $,Rs=new $,Cs=new $,nr=new $,ir=new $,Dr=new $,jo=new $,Ac=new $,wc=new $,Ur=new $;function Ah(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ur.fromArray(o,c);const d=l.x*Math.abs(Ur.x)+l.y*Math.abs(Ur.y)+l.z*Math.abs(Ur.z),m=e.dot(Ur),p=i.dot(Ur),_=r.dot(Ur);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const lM=new hl,Zo=new $,wh=new $;class ap{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):lM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const i=Zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Zo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(wh)),this.expandByPoint(Zo.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sa=new $,Rh=new $,Rc=new $,ar=new $,Ch=new $,Cc=new $,Dh=new $;class cM{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Rh.copy(e).add(i).multiplyScalar(.5),Rc.copy(i).sub(e).normalize(),ar.copy(this.origin).sub(Rh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Rc),d=ar.dot(this.direction),m=-ar.dot(Rc),p=ar.lengthSq(),_=Math.abs(1-h*h);let g,y,S,E;if(_>0)if(g=h*m-d,y=h*d-m,E=c*_,g>=0)if(y>=-E)if(y<=E){const R=1/_;g*=R,y*=R,S=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;else y<=-E?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p):y<=E?(g=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),S=-g*g+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Rh).addScaledVector(Rc,y),S}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const r=Sa.dot(this.direction),l=Sa.dot(Sa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(c=(e.min.y-y.y)*_,h=(e.max.y-y.y)*_):(c=(e.max.y-y.y)*_,h=(e.min.y-y.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-y.z)*g,m=(e.max.z-y.z)*g):(d=(e.max.z-y.z)*g,m=(e.min.z-y.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,r,l,c){Ch.subVectors(i,e),Cc.subVectors(r,e),Dh.crossVectors(Ch,Cc);let h=this.direction.dot(Dh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ar.subVectors(this.origin,e);const m=d*this.direction.dot(Cc.crossVectors(ar,Cc));if(m<0)return null;const p=d*this.direction.dot(Ch.cross(ar));if(p<0||m+p>h)return null;const _=-d*ar.dot(Dh);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M)}set(e,i,r,l,c,h,d,m,p,_,g,y,S,E,R,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=r,x[12]=l,x[1]=c,x[5]=h,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=y,x[3]=S,x[7]=E,x[11]=R,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),h=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+E*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=E+S*p,i[10]=h*m}else if(e.order==="YXZ"){const y=m*_,S=m*g,E=p*_,R=p*g;i[0]=y+R*d,i[4]=E*d-S,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=R+y*d,i[10]=h*m}else if(e.order==="ZXY"){const y=m*_,S=m*g,E=p*_,R=p*g;i[0]=y-R*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const y=h*_,S=h*g,E=d*_,R=d*g;i[0]=m*_,i[4]=E*p-S,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=S*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const y=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=R-y*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+E,i[10]=y-R*g}else if(e.order==="XZY"){const y=h*m,S=h*p,E=d*m,R=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=y*g+R,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uM,e,fM)}lookAt(e,i,r){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),rr.crossVectors(r,hi),rr.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),rr.crossVectors(r,hi)),rr.normalize(),Dc.crossVectors(hi,rr),l[0]=rr.x,l[4]=Dc.x,l[8]=hi.x,l[1]=rr.y,l[5]=Dc.y,l[9]=hi.y,l[2]=rr.z,l[6]=Dc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],y=r[9],S=r[13],E=r[2],R=r[6],M=r[10],x=r[14],P=r[3],I=r[7],L=r[11],z=r[15],F=l[0],O=l[4],q=l[8],w=l[12],C=l[1],V=l[5],Z=l[9],K=l[13],fe=l[2],se=l[6],N=l[10],G=l[14],ne=l[3],Me=l[7],be=l[11],U=l[15];return c[0]=h*F+d*C+m*fe+p*ne,c[4]=h*O+d*V+m*se+p*Me,c[8]=h*q+d*Z+m*N+p*be,c[12]=h*w+d*K+m*G+p*U,c[1]=_*F+g*C+y*fe+S*ne,c[5]=_*O+g*V+y*se+S*Me,c[9]=_*q+g*Z+y*N+S*be,c[13]=_*w+g*K+y*G+S*U,c[2]=E*F+R*C+M*fe+x*ne,c[6]=E*O+R*V+M*se+x*Me,c[10]=E*q+R*Z+M*N+x*be,c[14]=E*w+R*K+M*G+x*U,c[3]=P*F+I*C+L*fe+z*ne,c[7]=P*O+I*V+L*se+z*Me,c[11]=P*q+I*Z+L*N+z*be,c[15]=P*w+I*K+L*G+z*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],y=e[10],S=e[14],E=e[3],R=e[7],M=e[11],x=e[15],P=m*S-p*y,I=d*S-p*g,L=d*y-m*g,z=h*S-p*_,F=h*y-m*_,O=h*g-d*_;return i*(R*P-M*I+x*L)-r*(E*P-M*z+x*F)+l*(E*I-R*z+x*O)-c*(E*L-R*F+M*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],y=e[10],S=e[11],E=e[12],R=e[13],M=e[14],x=e[15],P=g*M*p-R*y*p+R*m*S-d*M*S-g*m*x+d*y*x,I=E*y*p-_*M*p-E*m*S+h*M*S+_*m*x-h*y*x,L=_*R*p-E*g*p+E*d*S-h*R*S-_*d*x+h*g*x,z=E*g*m-_*R*m-E*d*y+h*R*y+_*d*M-h*g*M,F=i*P+r*I+l*L+c*z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return e[0]=P*O,e[1]=(R*y*c-g*M*c-R*l*S+r*M*S+g*l*x-r*y*x)*O,e[2]=(d*M*c-R*m*c+R*l*p-r*M*p-d*l*x+r*m*x)*O,e[3]=(g*m*c-d*y*c-g*l*p+r*y*p+d*l*S-r*m*S)*O,e[4]=I*O,e[5]=(_*M*c-E*y*c+E*l*S-i*M*S-_*l*x+i*y*x)*O,e[6]=(E*m*c-h*M*c-E*l*p+i*M*p+h*l*x-i*m*x)*O,e[7]=(h*y*c-_*m*c+_*l*p-i*y*p-h*l*S+i*m*S)*O,e[8]=L*O,e[9]=(E*g*c-_*R*c-E*r*S+i*R*S+_*r*x-i*g*x)*O,e[10]=(h*R*c-E*d*c+E*r*p-i*R*p-h*r*x+i*d*x)*O,e[11]=(_*d*c-h*g*c-_*r*p+i*g*p+h*r*S-i*d*S)*O,e[12]=z*O,e[13]=(_*R*l-E*g*l+E*r*y-i*R*y-_*r*M+i*g*M)*O,e[14]=(E*d*l-h*R*l-E*r*m+i*R*m+h*r*M-i*d*M)*O,e[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*y+i*d*y)*O,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,_=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,_=h+h,g=d+d,y=c*p,S=c*_,E=c*g,R=h*_,M=h*g,x=d*g,P=m*p,I=m*_,L=m*g,z=r.x,F=r.y,O=r.z;return l[0]=(1-(R+x))*z,l[1]=(S+L)*z,l[2]=(E-I)*z,l[3]=0,l[4]=(S-L)*F,l[5]=(1-(y+x))*F,l[6]=(M+P)*F,l[7]=0,l[8]=(E+I)*O,l[9]=(M-P)*O,l[10]=(1-(y+R))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=Ds.set(l[0],l[1],l[2]).length();const h=Ds.set(l[4],l[5],l[6]).length(),d=Ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Oi.copy(this);const p=1/c,_=1/h,g=1/d;return Oi.elements[0]*=p,Oi.elements[1]*=p,Oi.elements[2]*=p,Oi.elements[4]*=_,Oi.elements[5]*=_,Oi.elements[6]*=_,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,i.setFromRotationMatrix(Oi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=ji,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(r-l),y=(i+e)/(i-e),S=(r+l)/(r-l);let E,R;if(m)E=c/(h-c),R=h*c/(h-c);else if(d===ji)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===eu)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=ji,m=!1){const p=this.elements,_=2/(i-e),g=2/(r-l),y=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,R;if(m)E=1/(h-c),R=h/(h-c);else if(d===ji)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===eu)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ds=new $,Oi=new sn,uM=new $(0,0,0),fM=new $(1,1,1),rr=new $,Dc=new $,hi=new $,c_=new sn,u_=new fl;class Ji{constructor(e=0,i=0,r=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ct(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Ct(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Sv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const f_=new $,Us=new fl,Ma=new sn,Uc=new $,Ko=new $,dM=new $,pM=new fl,h_=new $(1,0,0),d_=new $(0,1,0),p_=new $(0,0,1),m_={type:"added"},mM={type:"removed"},Ns={type:"childadded",child:null},Uh={type:"childremoved",child:null};class bn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new $,i=new Ji,r=new fl,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new vt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,i){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Uc.copy(e):Uc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Ko,Uc,this.up):Ma.lookAt(Uc,Ko,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Us.setFromRotationMatrix(Ma),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(mM),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,dM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,pM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),_=h(e.images),g=h(e.shapes),y=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}bn.DEFAULT_UP=new $(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ii=new $,ba=new $,Nh=new $,Ea=new $,Ls=new $,Os=new $,g_=new $,Lh=new $,Oh=new $,Ih=new $,Ph=new cn,zh=new cn,Bh=new cn;class Ai{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ii.subVectors(l,i),ba.subVectors(r,i),Nh.subVectors(e,i);const h=Ii.dot(Ii),d=Ii.dot(ba),m=Ii.dot(Nh),p=ba.dot(ba),_=ba.dot(Nh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,S=(p*m-d*_)*y,E=(h*_-d*m)*y;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(h,Ea.y),m.addScaledVector(d,Ea.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return Ph.setScalar(0),zh.setScalar(0),Bh.setScalar(0),Ph.fromBufferAttribute(e,i),zh.fromBufferAttribute(e,r),Bh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ph,c.x),h.addScaledVector(zh,c.y),h.addScaledVector(Bh,c.z),h}static isFrontFacing(e,i,r,l){return Ii.subVectors(r,i),ba.subVectors(e,i),Ii.cross(ba).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ba.subVectors(this.a,this.b),Ii.cross(ba).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Ls.subVectors(l,r),Os.subVectors(c,r),Lh.subVectors(e,r);const m=Ls.dot(Lh),p=Os.dot(Lh);if(m<=0&&p<=0)return i.copy(r);Oh.subVectors(e,l);const _=Ls.dot(Oh),g=Os.dot(Oh);if(_>=0&&g<=_)return i.copy(l);const y=m*g-_*p;if(y<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(Ls,h);Ih.subVectors(e,c);const S=Ls.dot(Ih),E=Os.dot(Ih);if(E>=0&&S<=E)return i.copy(c);const R=S*p-m*E;if(R<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(Os,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return g_.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(g_,d);const x=1/(M+R+y);return h=R*x,d=y*x,i.copy(r).addScaledVector(Ls,h).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class wt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ot.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ot.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ot.workingColorSpace){if(e=tM(e,1),i=Ct(i,0,1),r=Ct(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Fh(h,c,e+1/3),this.g=Fh(h,c,e),this.b=Fh(h,c,e-1/3)}return Ot.colorSpaceToWorking(this,l),this}setStyle(e,i=Ti){function r(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ti){const r=Mv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Ot.workingToColorSpace(Hn.copy(this),e),Math.round(Ct(Hn.r*255,0,255))*65536+Math.round(Ct(Hn.g*255,0,255))*256+Math.round(Ct(Hn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ot.workingColorSpace){Ot.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,c=Hn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-r)/g+2;break;case c:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Ot.workingColorSpace){return Ot.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ti){Ot.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==Ti?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+i,sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(sr),e.getHSL(Nc);const r=Sh(sr.h,Nc.h,i),l=Sh(sr.s,Nc.s,i),c=Sh(sr.l,Nc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new wt;wt.NAMES=Mv;let gM=0;class $s extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=ur(),this.name="",this.type="Material",this.blending=Xs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=ed,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$h&&(r.blendSrc=this.blendSrc),this.blendDst!==ed&&(r.blendDst=this.blendDst),this.blendEquation!==zr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==i_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gr extends $s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new $,Lc=new yt;let _M=0;class zi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_M++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=kd,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Lc.fromBufferAttribute(this,i),Lc.applyMatrix3(e),this.setXY(i,Lc.x,Lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=qi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kt(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=qi(i,this.array)),i}setX(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=qi(i,this.array)),i}setY(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=qi(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=qi(i,this.array)),i}setW(e,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array),l=Kt(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kd&&(e.usage=this.usage),e}}class bv extends zi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Ev extends zi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class jn extends zi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let vM=0;const Ei=new sn,Hh=new bn,Is=new $,di=new hl,Qo=new hl,Rn=new $;class wi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ur(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?Ev:bv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new vt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,r){return Ei.makeTranslation(e,i,r),this.applyMatrix4(Ei),this}scale(e,i,r){return Ei.makeScale(e,i,r),this.applyMatrix4(Ei),this}lookAt(e){return Hh.lookAt(e),Hh.updateMatrix(),this.applyMatrix4(Hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Qo.setFromBufferAttribute(d),this.morphTargetsRelative?(Rn.addVectors(di.min,Qo.min),di.expandByPoint(Rn),Rn.addVectors(di.max,Qo.max),di.expandByPoint(Rn)):(di.expandByPoint(Qo.min),di.expandByPoint(Qo.max))}di.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)Rn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Rn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)Rn.fromBufferAttribute(d,p),m&&(Is.fromBufferAttribute(e,p),Rn.add(Is)),l=Math.max(l,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let q=0;q<r.count;q++)d[q]=new $,m[q]=new $;const p=new $,_=new $,g=new $,y=new yt,S=new yt,E=new yt,R=new $,M=new $;function x(q,w,C){p.fromBufferAttribute(r,q),_.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),y.fromBufferAttribute(c,q),S.fromBufferAttribute(c,w),E.fromBufferAttribute(c,C),_.sub(p),g.sub(p),S.sub(y),E.sub(y);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(V),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(V),d[q].add(R),d[w].add(R),d[C].add(R),m[q].add(M),m[w].add(M),m[C].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let q=0,w=P.length;q<w;++q){const C=P[q],V=C.start,Z=C.count;for(let K=V,fe=V+Z;K<fe;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new $,L=new $,z=new $,F=new $;function O(q){z.fromBufferAttribute(l,q),F.copy(z);const w=d[q];I.copy(w),I.sub(z.multiplyScalar(z.dot(w))).normalize(),L.crossVectors(F,w);const V=L.dot(m[q])<0?-1:1;h.setXYZW(q,I.x,I.y,I.z,V)}for(let q=0,w=P.length;q<w;++q){const C=P[q],V=C.start,Z=C.count;for(let K=V,fe=V+Z;K<fe;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,_=new $,g=new $;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(y+0,_.x,_.y,_.z),r.setXYZ(y+1,_.x,_.y,_.z),r.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Rn.fromBufferAttribute(e,i),Rn.normalize(),e.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,y=new p.constructor(m.length*_);let S=0,E=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?S=m[R]*d.data.stride+d.offset:S=m[R]*_;for(let x=0;x<_;x++)y[E++]=p[S++]}return new zi(y,_,g)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new wi,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const y=p[_],S=e(y,r);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,y=p.length;g<y;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let y=0,S=g.length;y<S;y++)_.push(g[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const __=new sn,Nr=new cM,Oc=new ap,v_=new $,Ic=new $,Pc=new $,zc=new $,Gh=new $,Bc=new $,x_=new $,Fc=new $;class Nt extends bn{constructor(e=new wi,i=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Bc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(Gh.fromBufferAttribute(g,e),h?Bc.addScaledVector(Gh,_):Bc.addScaledVector(Gh.sub(i),_))}i.add(Bc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oc.copy(r.boundingSphere),Oc.applyMatrix4(c),Nr.copy(e.ray).recast(e.near),!(Oc.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Oc,v_)===null||Nr.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(__.copy(c).invert(),Nr.copy(e.ray).applyMatrix4(__),!(r.boundingBox!==null&&Nr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Nr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],P=Math.max(M.start,S.start),I=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let L=P,z=I;L<z;L+=3){const F=d.getX(L),O=d.getX(L+1),q=d.getX(L+2);l=Hc(this,x,e,r,p,_,g,F,O,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const P=d.getX(M),I=d.getX(M+1),L=d.getX(M+2);l=Hc(this,h,e,r,p,_,g,P,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,R=y.length;E<R;E++){const M=y[E],x=h[M.materialIndex],P=Math.max(M.start,S.start),I=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let L=P,z=I;L<z;L+=3){const F=L,O=L+1,q=L+2;l=Hc(this,x,e,r,p,_,g,F,O,q),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(m.count,S.start+S.count);for(let M=E,x=R;M<x;M+=3){const P=M,I=M+1,L=M+2;l=Hc(this,h,e,r,p,_,g,P,I,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function xM(o,e,i,r,l,c,h,d){let m;if(e.side===ai?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===fr,d),m===null)return null;Fc.copy(d),Fc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Fc);return p<i.near||p>i.far?null:{distance:p,point:Fc.clone(),object:o}}function Hc(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,Ic),o.getVertexPosition(m,Pc),o.getVertexPosition(p,zc);const _=xM(o,e,i,r,Ic,Pc,zc,x_);if(_){const g=new $;Ai.getBarycoord(x_,Ic,Pc,zc,g),l&&(_.uv=Ai.getInterpolatedAttribute(l,d,m,p,g,new yt)),c&&(_.uv1=Ai.getInterpolatedAttribute(c,d,m,p,g,new yt)),h&&(_.normal=Ai.getInterpolatedAttribute(h,d,m,p,g,new $),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new $,materialIndex:0};Ai.getNormal(Ic,Pc,zc,y.normal),_.face=y,_.barycoord=g}return _}class Yn extends wi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],_=[],g=[];let y=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new jn(p,3)),this.setAttribute("normal",new jn(_,3)),this.setAttribute("uv",new jn(g,2));function E(R,M,x,P,I,L,z,F,O,q,w){const C=L/O,V=z/q,Z=L/2,K=z/2,fe=F/2,se=O+1,N=q+1;let G=0,ne=0;const Me=new $;for(let be=0;be<N;be++){const U=be*V-K;for(let ie=0;ie<se;ie++){const ve=ie*C-Z;Me[R]=ve*P,Me[M]=U*I,Me[x]=fe,p.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[x]=F>0?1:-1,_.push(Me.x,Me.y,Me.z),g.push(ie/O),g.push(1-be/q),G+=1}}for(let be=0;be<q;be++)for(let U=0;U<O;U++){const ie=y+U+se*be,ve=y+U+se*(be+1),Re=y+(U+1)+se*(be+1),Be=y+(U+1)+se*be;m.push(ie,ve,Be),m.push(ve,Re,Be),ne+=6}d.addGroup(S,ne,w),S+=ne,y+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Wn(o){const e={};for(let i=0;i<o.length;i++){const r=Qs(o[i]);for(const l in r)e[l]=r[l]}return e}function yM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Tv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const SM={clone:Qs,merge:Wn};var MM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends $s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Av extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const or=new $,y_=new yt,S_=new yt;class ii extends Av{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=nu*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nu*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,i){return this.getViewBounds(e,y_,S_),i.subVectors(S_,y_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(yh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ps=-90,zs=1;class EM extends bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(Ps,zs,e,i);l.layers=this.layers,this.add(l);const c=new ii(Ps,zs,e,i);c.layers=this.layers,this.add(c);const h=new ii(Ps,zs,e,i);h.layers=this.layers,this.add(h);const d=new ii(Ps,zs,e,i);d.layers=this.layers,this.add(d);const m=new ii(Ps,zs,e,i);m.layers=this.layers,this.add(m);const p=new ii(Ps,zs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===ji)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===eu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,_]=this.children,g=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class wv extends Vn{constructor(e=[],i=Vr,r,l,c,h,d,m,p,_){super(e,i,r,l,c,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rv extends Ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new wv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yn(5,5,5),c=new $i({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ai,blending:Aa});c.uniforms.tEquirect.value=i;const h=new Nt(l,c),d=i.minFilter;return i.minFilter===Fr&&(i.minFilter=Gn),new EM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class qn extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const TM={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),x=this._getHandJoint(p,R);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=_.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&y>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new qn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class rl{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=i}clone(){return new rl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class AM extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class wM{constructor(e,i){this.isInterleavedBuffer=!0,this.array=e,this.stride=i,this.count=e!==void 0?e.length/i:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=ur()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,i,r){e*=this.stride,r*=i.stride;for(let l=0,c=this.stride;l<c;l++)this.array[e+l]=i.array[r+l];return this}set(e,i=0){return this.array.set(e,i),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ur()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xn=new $;class iu{constructor(e,i,r,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=i,this.offset=r,this.normalized=l}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let i=0,r=this.data.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.applyMatrix4(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.applyNormalMatrix(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Xn.fromBufferAttribute(this,i),Xn.transformDirection(e),this.setXYZ(i,Xn.x,Xn.y,Xn.z);return this}getComponent(e,i){let r=this.array[e*this.data.stride+this.offset+i];return this.normalized&&(r=qi(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Kt(r,this.array)),this.data.array[e*this.data.stride+this.offset+i]=r,this}setX(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset]=i,this}setY(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+1]=i,this}setZ(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+2]=i,this}setW(e,i){return this.normalized&&(i=Kt(i,this.array)),this.data.array[e*this.data.stride+this.offset+3]=i,this}getX(e){let i=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(i=qi(i,this.array)),i}getY(e){let i=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(i=qi(i,this.array)),i}getZ(e){let i=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(i=qi(i,this.array)),i}getW(e){let i=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(i=qi(i,this.array)),i}setXY(e,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this}setXYZ(e,i,r,l){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array),l=Kt(l,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e=e*this.data.stride+this.offset,this.normalized&&(i=Kt(i,this.array),r=Kt(r,this.array),l=Kt(l,this.array),c=Kt(c,this.array)),this.data.array[e+0]=i,this.data.array[e+1]=r,this.data.array[e+2]=l,this.data.array[e+3]=c,this}clone(e){if(e===void 0){tu("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return new zi(new this.array.constructor(i),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new iu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tu("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const i=[];for(let r=0;r<this.count;r++){const l=r*this.data.stride+this.offset;for(let c=0;c<this.itemSize;c++)i.push(this.data.array[l+c])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xd extends $s{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Bs;const Jo=new $,Fs=new $,Hs=new $,Gs=new yt,$o=new yt,Cv=new sn,Gc=new $,el=new $,Vc=new $,M_=new yt,kh=new yt,b_=new yt;class E_ extends bn{constructor(e=new Xd){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new wi;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new wM(i,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new iu(r,3,0,!1)),Bs.setAttribute("uv",new iu(r,2,3,!1))}this.geometry=Bs,this.material=e,this.center=new yt(.5,.5),this.count=1}raycast(e,i){e.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Cv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Hs.z);const r=this.material.rotation;let l,c;r!==0&&(c=Math.cos(r),l=Math.sin(r));const h=this.center;kc(Gc.set(-.5,-.5,0),Hs,h,Fs,l,c),kc(el.set(.5,-.5,0),Hs,h,Fs,l,c),kc(Vc.set(.5,.5,0),Hs,h,Fs,l,c),M_.set(0,0),kh.set(1,0),b_.set(1,1);let d=e.ray.intersectTriangle(Gc,el,Vc,!1,Jo);if(d===null&&(kc(el.set(-.5,.5,0),Hs,h,Fs,l,c),kh.set(0,1),d=e.ray.intersectTriangle(Gc,Vc,el,!1,Jo),d===null))return;const m=e.ray.origin.distanceTo(Jo);m<e.near||m>e.far||i.push({distance:m,point:Jo.clone(),uv:Ai.getInterpolation(Jo,Gc,el,Vc,M_,kh,b_,new yt),face:null,object:this})}copy(e,i){return super.copy(e,i),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kc(o,e,i,r,l,c){Gs.subVectors(o,i).addScalar(.5).multiply(r),l!==void 0?($o.x=c*Gs.x-l*Gs.y,$o.y=l*Gs.x+c*Gs.y):$o.copy(Gs),o.copy(e),o.x+=$o.x,o.y+=$o.y,o.applyMatrix4(Cv)}class RM extends Vn{constructor(e=null,i=1,r=1,l,c,h,d,m,p=Mn,_=Mn,g,y){super(null,h,d,m,p,_,l,c,g,y),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xh=new $,CM=new $,DM=new vt;class Pr{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=Xh.subVectors(r,i).cross(CM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(Xh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||DM.getNormalMatrix(e),l=this.coplanarPoint(Xh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new ap,UM=new yt(.5,.5),Xc=new $;class rp{constructor(e=new Pr,i=new Pr,r=new Pr,l=new Pr,c=new Pr,h=new Pr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=ji,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],y=c[6],S=c[7],E=c[8],R=c[9],M=c[10],x=c[11],P=c[12],I=c[13],L=c[14],z=c[15];if(l[0].setComponents(p-h,S-_,x-E,z-P).normalize(),l[1].setComponents(p+h,S+_,x+E,z+P).normalize(),l[2].setComponents(p+d,S+g,x+R,z+I).normalize(),l[3].setComponents(p-d,S-g,x-R,z-I).normalize(),r)l[4].setComponents(m,y,M,L).normalize(),l[5].setComponents(p-m,S-y,x-M,z-L).normalize();else if(l[4].setComponents(p-m,S-y,x-M,z-L).normalize(),i===ji)l[5].setComponents(p+m,S+y,x+M,z+L).normalize();else if(i===eu)l[5].setComponents(m,y,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const i=UM.distanceTo(e.center);return Lr.radius=.7071067811865476+i,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Xc.x=l.normal.x>0?e.max.x:e.min.x,Xc.y=l.normal.y>0?e.max.y:e.min.y,Xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ul extends Vn{constructor(e,i,r=Qi,l,c,h,d=Mn,m=Mn,p,_=Ca,g=1){if(_!==Ca&&_!==Hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:g};super(y,l,c,h,d,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ip(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class NM extends ul{constructor(e,i=Qi,r=Vr,l,c,h=Mn,d=Mn,m,p=Ca){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,r,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dv extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eo extends wi{constructor(e=1,i=1,r=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const _=[],g=[],y=[],S=[];let E=0;const R=[],M=r/2;let x=0;P(),h===!1&&(e>0&&I(!0),i>0&&I(!1)),this.setIndex(_),this.setAttribute("position",new jn(g,3)),this.setAttribute("normal",new jn(y,3)),this.setAttribute("uv",new jn(S,2));function P(){const L=new $,z=new $;let F=0;const O=(i-e)/r;for(let q=0;q<=c;q++){const w=[],C=q/c,V=C*(i-e)+e;for(let Z=0;Z<=l;Z++){const K=Z/l,fe=K*m+d,se=Math.sin(fe),N=Math.cos(fe);z.x=V*se,z.y=-C*r+M,z.z=V*N,g.push(z.x,z.y,z.z),L.set(se,O,N).normalize(),y.push(L.x,L.y,L.z),S.push(K,1-C),w.push(E++)}R.push(w)}for(let q=0;q<l;q++)for(let w=0;w<c;w++){const C=R[w][q],V=R[w+1][q],Z=R[w+1][q+1],K=R[w][q+1];(e>0||w!==0)&&(_.push(C,V,K),F+=3),(i>0||w!==c-1)&&(_.push(V,Z,K),F+=3)}p.addGroup(x,F,0),x+=F}function I(L){const z=E,F=new yt,O=new $;let q=0;const w=L===!0?e:i,C=L===!0?1:-1;for(let Z=1;Z<=l;Z++)g.push(0,M*C,0),y.push(0,C,0),S.push(.5,.5),E++;const V=E;for(let Z=0;Z<=l;Z++){const fe=Z/l*m+d,se=Math.cos(fe),N=Math.sin(fe);O.x=w*N,O.y=M*C,O.z=w*se,g.push(O.x,O.y,O.z),y.push(0,C,0),F.x=se*.5+.5,F.y=N*.5*C+.5,S.push(F.x,F.y),E++}for(let Z=0;Z<l;Z++){const K=z+Z,fe=V+Z;L===!0?_.push(fe,fe+1,K):_.push(fe+1,fe,K),q+=3}p.addGroup(x,q,L===!0?1:2),x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ru extends eo{constructor(e=1,i=1,r=32,l=1,c=!1,h=0,d=Math.PI*2){super(0,e,i,r,l,c,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:l,openEnded:c,thetaStart:h,thetaLength:d}}static fromJSON(e){return new ru(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kr extends wi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=e/d,y=i/m,S=[],E=[],R=[],M=[];for(let x=0;x<_;x++){const P=x*y-h;for(let I=0;I<p;I++){const L=I*g-c;E.push(L,-P,0),R.push(0,0,1),M.push(I/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<d;P++){const I=P+p*x,L=P+p*(x+1),z=P+1+p*(x+1),F=P+1+p*x;S.push(I,L,F),S.push(L,z,F)}this.setIndex(S),this.setAttribute("position",new jn(E,3)),this.setAttribute("normal",new jn(R,3)),this.setAttribute("uv",new jn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.width,e.height,e.widthSegments,e.heightSegments)}}class dl extends wi{constructor(e=1,i=.4,r=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:l,arc:c},r=Math.floor(r),l=Math.floor(l);const h=[],d=[],m=[],p=[],_=new $,g=new $,y=new $;for(let S=0;S<=r;S++)for(let E=0;E<=l;E++){const R=E/l*c,M=S/r*Math.PI*2;g.x=(e+i*Math.cos(M))*Math.cos(R),g.y=(e+i*Math.cos(M))*Math.sin(R),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),y.subVectors(g,_).normalize(),m.push(y.x,y.y,y.z),p.push(E/l),p.push(S/r)}for(let S=1;S<=r;S++)for(let E=1;E<=l;E++){const R=(l+1)*S+E-1,M=(l+1)*(S-1)+E-1,x=(l+1)*(S-1)+E,P=(l+1)*S+E;h.push(R,M,P),h.push(M,x,P)}this.setIndex(h),this.setAttribute("position",new jn(d,3)),this.setAttribute("normal",new jn(m,3)),this.setAttribute("uv",new jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class LM extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ni extends $s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vv,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OM extends $s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IM extends $s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wh={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class PM{constructor(e,i,r){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=r,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,h,d),c=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,y=p.length;g<y;g+=2){const S=p[g],E=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zM=new PM;class sp{constructor(e){this.manager=e!==void 0?e:zM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,i){const r=this;return new Promise(function(l,c){r.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vs=new WeakMap;class BM extends sp{constructor(e){super(e)}load(e,i,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,h=Wh.get(`image:${e}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(h),c.manager.itemEnd(e)},0);else{let g=Vs.get(h);g===void 0&&(g=[],Vs.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=ll("img");function m(){_(),i&&i(this);const g=Vs.get(this)||[];for(let y=0;y<g.length;y++){const S=g[y];S.onLoad&&S.onLoad(this)}Vs.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),Wh.remove(`image:${e}`);const y=Vs.get(this)||[];for(let S=0;S<y.length;S++){const E=y[S];E.onError&&E.onError(g)}Vs.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Wh.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class FM extends sp{constructor(e){super(e)}load(e,i,r,l){const c=new Vn,h=new BM(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},r,l),c}}class su extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const qh=new sn,T_=new $,A_=new $;class op{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rp,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),i.position.copy(T_),A_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),qh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HM extends op{constructor(){super(new ii(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,r=nu*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(r!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=r,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class GM extends su{constructor(e,i,r=0,l=Math.PI/3,c=0,h=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=h,this.map=null,this.shadow=new HM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class VM extends op{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class w_ extends su{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new VM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class lp extends Av{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kM extends op{constructor(){super(new lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XM extends su{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.shadow=new kM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class WM extends su{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class qM extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function R_(o,e,i,r){const l=YM(r);switch(i){case mv:return o*e;case _v:return o*e/l.components*l.byteLength;case Jd:return o*e/l.components*l.byteLength;case Zs:return o*e*2/l.components*l.byteLength;case $d:return o*e*2/l.components*l.byteLength;case gv:return o*e*3/l.components*l.byteLength;case Pi:return o*e*4/l.components*l.byteLength;case ep:return o*e*4/l.components*l.byteLength;case jc:case Zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Kc:case Qc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hd:case pd:return Math.max(o,16)*Math.max(e,8)/4;case fd:case dd:return Math.max(o,8)*Math.max(e,8)/2;case md:case gd:case vd:case xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _d:case yd:case Sd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Td:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Pd:case zd:case Bd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Fd:case Hd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Gd:case Vd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function YM(o){switch(o){case pi:case fv:return{byteLength:1,components:1};case sl:case hv:case Ra:return{byteLength:2,components:1};case Kd:case Qd:return{byteLength:2,components:4};case Qi:case Zd:case Yi:return{byteLength:4,components:1};case dv:case pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jd);function Uv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function jM(o){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((S,E)=>S.start-E.start);let y=0;for(let S=1;S<g.length;S++){const E=g[y],R=g[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++y,g[y]=R)}g.length=y+1;for(let S=0,E=g.length;S<E;S++){const R=g[S];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var ZM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KM=`#ifdef USE_ALPHAHASH
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
#endif`,QM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tb=`#ifdef USE_AOMAP
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
#endif`,nb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ib=`#ifdef USE_BATCHING
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
#endif`,ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ob=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lb=`#ifdef USE_IRIDESCENCE
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
#endif`,cb=`#ifdef USE_BUMPMAP
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vb=`#define PI 3.141592653589793
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
} // validated`,xb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yb=`vec3 transformedNormal = objectNormal;
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
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Db=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ub=`#ifdef USE_ENVMAP
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
#endif`,Nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pb=`#ifdef USE_GRADIENTMAP
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
}`,zb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hb=`uniform bool receiveShadow;
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
#endif`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Vb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qb=`PhysicalMaterial material;
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
#endif`,Yb=`uniform sampler2D dfgLUT;
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
}`,jb=`
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aE=`#if defined( USE_POINTS_UV )
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
#endif`,rE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uE=`#ifdef USE_MORPHTARGETS
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
#endif`,fE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_E=`#ifdef USE_NORMALMAP
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
#endif`,vE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ME=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,EE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,TE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,AE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LE=`float getShadowMask() {
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
}`,OE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,IE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zE=`#ifdef USE_SKINNING
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
#endif`,BE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZE=`uniform sampler2D t2D;
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`#include <common>
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
}`,tT=`#if DEPTH_PACKING == 3200
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
}`,nT=`#define DISTANCE
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
}`,iT=`#define DISTANCE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,lT=`#include <common>
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,fT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,mT=`#define NORMAL
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
}`,gT=`#define PHONG
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
}`,_T=`#define PHONG
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
}`,vT=`#define STANDARD
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
}`,xT=`#define STANDARD
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
}`,yT=`#define TOON
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
}`,ST=`#define TOON
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
}`,MT=`uniform float size;
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
}`,bT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,TT=`uniform vec3 color;
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
}`,AT=`uniform float rotation;
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
}`,wT=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:ZM,alphahash_pars_fragment:KM,alphamap_fragment:QM,alphamap_pars_fragment:JM,alphatest_fragment:$M,alphatest_pars_fragment:eb,aomap_fragment:tb,aomap_pars_fragment:nb,batching_pars_vertex:ib,batching_vertex:ab,begin_vertex:rb,beginnormal_vertex:sb,bsdfs:ob,iridescence_fragment:lb,bumpmap_pars_fragment:cb,clipping_planes_fragment:ub,clipping_planes_pars_fragment:fb,clipping_planes_pars_vertex:hb,clipping_planes_vertex:db,color_fragment:pb,color_pars_fragment:mb,color_pars_vertex:gb,color_vertex:_b,common:vb,cube_uv_reflection_fragment:xb,defaultnormal_vertex:yb,displacementmap_pars_vertex:Sb,displacementmap_vertex:Mb,emissivemap_fragment:bb,emissivemap_pars_fragment:Eb,colorspace_fragment:Tb,colorspace_pars_fragment:Ab,envmap_fragment:wb,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Cb,envmap_pars_vertex:Db,envmap_physical_pars_fragment:Gb,envmap_vertex:Ub,fog_vertex:Nb,fog_pars_vertex:Lb,fog_fragment:Ob,fog_pars_fragment:Ib,gradientmap_pars_fragment:Pb,lightmap_pars_fragment:zb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Hb,lights_toon_fragment:Vb,lights_toon_pars_fragment:kb,lights_phong_fragment:Xb,lights_phong_pars_fragment:Wb,lights_physical_fragment:qb,lights_physical_pars_fragment:Yb,lights_fragment_begin:jb,lights_fragment_maps:Zb,lights_fragment_end:Kb,logdepthbuf_fragment:Qb,logdepthbuf_pars_fragment:Jb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:eE,map_fragment:tE,map_pars_fragment:nE,map_particle_fragment:iE,map_particle_pars_fragment:aE,metalnessmap_fragment:rE,metalnessmap_pars_fragment:sE,morphinstance_vertex:oE,morphcolor_vertex:lE,morphnormal_vertex:cE,morphtarget_pars_vertex:uE,morphtarget_vertex:fE,normal_fragment_begin:hE,normal_fragment_maps:dE,normal_pars_fragment:pE,normal_pars_vertex:mE,normal_vertex:gE,normalmap_pars_fragment:_E,clearcoat_normal_fragment_begin:vE,clearcoat_normal_fragment_maps:xE,clearcoat_pars_fragment:yE,iridescence_pars_fragment:SE,opaque_fragment:ME,packing:bE,premultiplied_alpha_fragment:EE,project_vertex:TE,dithering_fragment:AE,dithering_pars_fragment:wE,roughnessmap_fragment:RE,roughnessmap_pars_fragment:CE,shadowmap_pars_fragment:DE,shadowmap_pars_vertex:UE,shadowmap_vertex:NE,shadowmask_pars_fragment:LE,skinbase_vertex:OE,skinning_pars_vertex:IE,skinning_vertex:PE,skinnormal_vertex:zE,specularmap_fragment:BE,specularmap_pars_fragment:FE,tonemapping_fragment:HE,tonemapping_pars_fragment:GE,transmission_fragment:VE,transmission_pars_fragment:kE,uv_pars_fragment:XE,uv_pars_vertex:WE,uv_vertex:qE,worldpos_vertex:YE,background_vert:jE,background_frag:ZE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:$E,depth_vert:eT,depth_frag:tT,distance_vert:nT,distance_frag:iT,equirect_vert:aT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:lT,meshbasic_frag:cT,meshlambert_vert:uT,meshlambert_frag:fT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:mT,meshphong_vert:gT,meshphong_frag:_T,meshphysical_vert:vT,meshphysical_frag:xT,meshtoon_vert:yT,meshtoon_frag:ST,points_vert:MT,points_frag:bT,shadow_vert:ET,shadow_frag:TT,sprite_vert:AT,sprite_frag:wT},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Xi={basic:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Wn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Wn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Wn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Wn([ze.points,ze.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Wn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Wn([ze.common,ze.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Wn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Wn([ze.sprite,ze.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Wn([ze.common,ze.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Wn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Xi.physical={uniforms:Wn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Wc={r:0,b:0,g:0},Or=new Ji,RT=new sn;function CT(o,e,i,r,l,c,h){const d=new wt(0);let m=c===!0?0:1,p,_,g=null,y=0,S=null;function E(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?i:e).get(L)),L}function R(I){let L=!1;const z=E(I);z===null?x(d,m):z&&z.isColor&&(x(z,1),L=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(I,L){const z=E(L);z&&(z.isCubeTexture||z.mapping===au)?(_===void 0&&(_=new Nt(new Yn(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Qs(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(F,O,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Or.copy(L.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),_.material.uniforms.envMap.value=z,_.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(RT.makeRotationFromEuler(Or)),_.material.toneMapped=Ot.getTransfer(z.colorSpace)!==qt,(g!==z||y!==z.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):z&&z.isTexture&&(p===void 0&&(p=new Nt(new kr(2,2),new $i({name:"BackgroundMaterial",uniforms:Qs(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=z,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Ot.getTransfer(z.colorSpace)!==qt,z.matrixAutoUpdate===!0&&z.updateMatrix(),p.material.uniforms.uvTransform.value.copy(z.matrix),(g!==z||y!==z.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,g=z,y=z.version,S=o.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function x(I,L){I.getRGB(Wc,Tv(o)),r.buffers.color.setClear(Wc.r,Wc.g,Wc.b,L,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(I,L=1){d.set(I),m=L,x(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(I){m=I,x(d,m)},render:R,addToRenderList:M,dispose:P}}function DT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,h=!1;function d(C,V,Z,K,fe){let se=!1;const N=g(K,Z,V);c!==N&&(c=N,p(c.object)),se=S(C,K,Z,fe),se&&E(C,K,Z,fe),fe!==null&&e.update(fe,o.ELEMENT_ARRAY_BUFFER),(se||h)&&(h=!1,L(C,V,Z,K),fe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,V,Z){const K=Z.wireframe===!0;let fe=r[C.id];fe===void 0&&(fe={},r[C.id]=fe);let se=fe[V.id];se===void 0&&(se={},fe[V.id]=se);let N=se[K];return N===void 0&&(N=y(m()),se[K]=N),N}function y(C){const V=[],Z=[],K=[];for(let fe=0;fe<i;fe++)V[fe]=0,Z[fe]=0,K[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Z,attributeDivisors:K,object:C,attributes:{},index:null}}function S(C,V,Z,K){const fe=c.attributes,se=V.attributes;let N=0;const G=Z.getAttributes();for(const ne in G)if(G[ne].location>=0){const be=fe[ne];let U=se[ne];if(U===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),be===void 0||be.attribute!==U||U&&be.data!==U.data)return!0;N++}return c.attributesNum!==N||c.index!==K}function E(C,V,Z,K){const fe={},se=V.attributes;let N=0;const G=Z.getAttributes();for(const ne in G)if(G[ne].location>=0){let be=se[ne];be===void 0&&(ne==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),ne==="instanceColor"&&C.instanceColor&&(be=C.instanceColor));const U={};U.attribute=be,be&&be.data&&(U.data=be.data),fe[ne]=U,N++}c.attributes=fe,c.attributesNum=N,c.index=K}function R(){const C=c.newAttributes;for(let V=0,Z=C.length;V<Z;V++)C[V]=0}function M(C){x(C,0)}function x(C,V){const Z=c.newAttributes,K=c.enabledAttributes,fe=c.attributeDivisors;Z[C]=1,K[C]===0&&(o.enableVertexAttribArray(C),K[C]=1),fe[C]!==V&&(o.vertexAttribDivisor(C,V),fe[C]=V)}function P(){const C=c.newAttributes,V=c.enabledAttributes;for(let Z=0,K=V.length;Z<K;Z++)V[Z]!==C[Z]&&(o.disableVertexAttribArray(Z),V[Z]=0)}function I(C,V,Z,K,fe,se,N){N===!0?o.vertexAttribIPointer(C,V,Z,fe,se):o.vertexAttribPointer(C,V,Z,K,fe,se)}function L(C,V,Z,K){R();const fe=K.attributes,se=Z.getAttributes(),N=V.defaultAttributeValues;for(const G in se){const ne=se[G];if(ne.location>=0){let Me=fe[G];if(Me===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(Me=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(Me=C.instanceColor)),Me!==void 0){const be=Me.normalized,U=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const ve=ie.buffer,Re=ie.type,Be=ie.bytesPerElement,J=Re===o.INT||Re===o.UNSIGNED_INT||Me.gpuType===Zd;if(Me.isInterleavedBufferAttribute){const oe=Me.data,Ce=oe.stride,ke=Me.offset;if(oe.isInstancedInterleavedBuffer){for(let He=0;He<ne.locationSize;He++)x(ne.location+He,oe.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let He=0;He<ne.locationSize;He++)M(ne.location+He);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let He=0;He<ne.locationSize;He++)I(ne.location+He,U/ne.locationSize,Re,be,Ce*Be,(ke+U/ne.locationSize*He)*Be,J)}else{if(Me.isInstancedBufferAttribute){for(let oe=0;oe<ne.locationSize;oe++)x(ne.location+oe,Me.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let oe=0;oe<ne.locationSize;oe++)M(ne.location+oe);o.bindBuffer(o.ARRAY_BUFFER,ve);for(let oe=0;oe<ne.locationSize;oe++)I(ne.location+oe,U/ne.locationSize,Re,be,U*Be,U/ne.locationSize*oe*Be,J)}}else if(N!==void 0){const be=N[G];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(ne.location,be);break;case 3:o.vertexAttrib3fv(ne.location,be);break;case 4:o.vertexAttrib4fv(ne.location,be);break;default:o.vertexAttrib1fv(ne.location,be)}}}}P()}function z(){q();for(const C in r){const V=r[C];for(const Z in V){const K=V[Z];for(const fe in K)_(K[fe].object),delete K[fe];delete V[Z]}delete r[C]}}function F(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const Z in V){const K=V[Z];for(const fe in K)_(K[fe].object),delete K[fe];delete V[Z]}delete r[C.id]}function O(C){for(const V in r){const Z=r[V];if(Z[C.id]===void 0)continue;const K=Z[C.id];for(const fe in K)_(K[fe].object),delete K[fe];delete Z[C.id]}}function q(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:w,dispose:z,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:P}}function UT(o,e,i){let r;function l(p){r=p}function c(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function m(p,_,g,y){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)h(p[E],_[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,_,0,y,0,g);let E=0;for(let R=0;R<g;R++)E+=_[R]*y[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function NT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(O){return!(O!==Pi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const q=O===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==pi&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Yi&&!q)}function m(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),z=o.getParameter(o.MAX_SAMPLES),F=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:I,maxFragmentUniforms:L,maxSamples:z,samples:F}}function LT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new Pr,d=new vt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const S=g.length!==0||y||r!==0||l;return l=y,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=_(g,y,0)},this.setState=function(g,y,S){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,x=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):p();else{const P=c?0:r,I=P*4;let L=x.clippingState||null;m.value=L,L=_(E,y,I,S);for(let z=0;z!==I;++z)L[z]=i[z];x.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,y,S,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=m.value,E!==!0||M===null){const x=S+R*4,P=y.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let I=0,L=S;I!==R;++I,L+=4)h.copy(g[I]).applyMatrix4(P,d),h.normal.toArray(M,L),M[L+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function OT(o){let e=new WeakMap;function i(h,d){return d===ld?h.mapping=Vr:d===cd&&(h.mapping=js),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===ld||d===cd)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new Rv(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const cr=4,C_=[.125,.215,.35,.446,.526,.582],Br=20,IT=256,tl=new lp,D_=new wt;let Yh=null,jh=0,Zh=0,Kh=!1;const PT=new $;class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=PT}=c;Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yh,jh,Zh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vr||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Zh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ra,format:Pi,colorSpace:Ks,depthBuffer:!1},l=N_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zT(c)),this._blurMaterial=FT(c,e,i),this._ggxMaterial=BT(c,e,i)}return l}_compileMaterial(e){const i=new Nt(new wi,e);this._renderer.compile(i,tl)}_sceneToCubeUV(e,i,r,l,c){const m=new ii(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(D_),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new Yn,new Gr({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let x=!1;const P=e.background;P?P.isColor&&(M.color.copy(P),e.background=null,x=!0):(M.color.copy(D_),x=!0);for(let I=0;I<6;I++){const L=I%3;L===0?(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[I],c.y,c.z)):L===1?(m.up.set(0,0,p[I]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[I],c.z)):(m.up.set(0,p[I],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[I]));const z=this._cubeSize;ks(l,L*z,I>2?z:0,z,z),g.setRenderTarget(l),x&&g.render(R,m),g.render(e,m)}g.toneMapping=S,g.autoClear=y,e.background=P}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Vr||e.mapping===js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;ks(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,tl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const m=h.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),y=0+p*1.25,S=g*y,{_lodMax:E}=this,R=this._sizeLods[r],M=3*R*(r>E-cr?r-E+cr:0),x=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=E-i,ks(c,M,x,3*R,2*R),l.setRenderTarget(c),l.render(d,tl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-r,ks(e,M,x,3*R,2*R),l.setRenderTarget(e),l.render(d,tl)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Br-1),R=c/E,M=isFinite(c)?1+Math.floor(_*R):Br;M>Br&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Br}`);const x=[];let P=0;for(let O=0;O<Br;++O){const q=O/R,w=Math.exp(-q*q/2);x.push(w),O===0?P+=w:O<M&&(P+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/P;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=x,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:I}=this;y.dTheta.value=E,y.mipInt.value=I-r;const L=this._sizeLods[l],z=3*L*(l>I-cr?l-I+cr:0),F=4*(this._cubeSize-L);ks(i,z,F,3*L,2*L),m.setRenderTarget(i),m.render(g,tl)}}function zT(o){const e=[],i=[],r=[];let l=o;const c=o-cr+1+C_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let m=1/d;h>o-cr?m=C_[h-o+cr-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,y=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,R=3,M=2,x=1,P=new Float32Array(R*E*S),I=new Float32Array(M*E*S),L=new Float32Array(x*E*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,q=F>2?0:-1,w=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];P.set(w,R*E*F),I.set(y,M*E*F);const C=[F,F,F,F,F,F];L.set(C,x*E*F)}const z=new wi;z.setAttribute("position",new zi(P,R)),z.setAttribute("uv",new zi(I,M)),z.setAttribute("faceIndex",new zi(L,x)),r.push(new Nt(z,null)),l>cr&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function N_(o,e,i){const r=new Ki(o,e,i);return r.texture.mapping=au,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function BT(o,e,i){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:IT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function FT(o,e,i){const r=new Float32Array(Br),l=new $(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function L_(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ou(),fragmentShader:`

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
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function O_(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function ou(){return`

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
	`}function HT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===ld||m===cd,_=m===Vr||m===js;if(p||_){let g=e.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new U_(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function GT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&cl("WebGLRenderer: "+r+" extension not supported."),l}}}function VT(o,e,i,r){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const S in y)e.update(y[S],o.ARRAY_BUFFER)}function p(g){const y=[],S=g.index,E=g.attributes.position;let R=0;if(S!==null){const P=S.array;R=S.version;for(let I=0,L=P.length;I<L;I+=3){const z=P[I+0],F=P[I+1],O=P[I+2];y.push(z,F,F,O,O,z)}}else if(E!==void 0){const P=E.array;R=E.version;for(let I=0,L=P.length/3-1;I<L;I+=3){const z=I+0,F=I+1,O=I+2;y.push(z,F,F,O,O,z)}}else return;const M=new(xv(y)?Ev:bv)(y,1);M.version=R;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const y=c.get(g);if(y){const S=g.index;S!==null&&y.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function kT(o,e,i){let r;function l(y){r=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(r,S,c,y*h),i.update(S,r,1)}function p(y,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,y*h,E),i.update(S,r,E))}function _(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];i.update(M,r,1)}function g(y,S,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<y.length;x++)p(y[x]/h,S[x],R[x]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,R,0,E);let x=0;for(let P=0;P<E;P++)x+=S[P]*R[P];i.update(x,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function XT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:Lt("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function WT(o,e,i){const r=new WeakMap,l=new cn;function c(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let y=r.get(d);if(y===void 0||y.count!==g){let C=function(){q.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),R===!0&&(L=2),M===!0&&(L=3);let z=d.attributes.position.count*L,F=1;z>e.maxTextureSize&&(F=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const O=new Float32Array(z*F*4*g),q=new yv(O,z,F,g);q.type=Yi,q.needsUpdate=!0;const w=L*4;for(let V=0;V<g;V++){const Z=x[V],K=P[V],fe=I[V],se=z*F*4*V;for(let N=0;N<Z.count;N++){const G=N*w;E===!0&&(l.fromBufferAttribute(Z,N),O[se+G+0]=l.x,O[se+G+1]=l.y,O[se+G+2]=l.z,O[se+G+3]=0),R===!0&&(l.fromBufferAttribute(K,N),O[se+G+4]=l.x,O[se+G+5]=l.y,O[se+G+6]=l.z,O[se+G+7]=0),M===!0&&(l.fromBufferAttribute(fe,N),O[se+G+8]=l.x,O[se+G+9]=l.y,O[se+G+10]=l.z,O[se+G+11]=fe.itemSize===4?l.w:1)}}y={count:g,texture:q,size:new yt(z,F)},r.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const R=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function qT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,_=m.geometry,g=e.get(m,_);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const YT={[iv]:"LINEAR_TONE_MAPPING",[av]:"REINHARD_TONE_MAPPING",[rv]:"CINEON_TONE_MAPPING",[sv]:"ACES_FILMIC_TONE_MAPPING",[lv]:"AGX_TONE_MAPPING",[cv]:"NEUTRAL_TONE_MAPPING",[ov]:"CUSTOM_TONE_MAPPING"};function jT(o,e,i,r,l){const c=new Ki(e,i,{type:o,depthBuffer:r,stencilBuffer:l}),h=new Ki(e,i,{type:Ra,depthBuffer:!1,stencilBuffer:!1}),d=new wi;d.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new jn([0,2,0,0,2,0],2));const m=new LM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new Nt(d,m),_=new lp(-1,1,1,-1,0,1);let g=null,y=null,S=!1,E,R=null,M=[],x=!1;this.setSize=function(P,I){c.setSize(P,I),h.setSize(P,I);for(let L=0;L<M.length;L++){const z=M[L];z.setSize&&z.setSize(P,I)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const I=c.width,L=c.height;for(let z=0;z<M.length;z++){const F=M[z];F.setSize&&F.setSize(I,L)}},this.begin=function(P,I){if(S||P.toneMapping===Zi&&M.length===0)return!1;if(R=I,I!==null){const L=I.width,z=I.height;(c.width!==L||c.height!==z)&&this.setSize(L,z)}return x===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=Zi,!0},this.hasRenderPass=function(){return x},this.end=function(P,I){P.toneMapping=E,S=!0;let L=c,z=h;for(let F=0;F<M.length;F++){const O=M[F];if(O.enabled!==!1&&(O.render(P,z,L,I),O.needsSwap!==!1)){const q=L;L=z,z=q}}if(g!==P.outputColorSpace||y!==P.toneMapping){g=P.outputColorSpace,y=P.toneMapping,m.defines={},Ot.getTransfer(g)===qt&&(m.defines.SRGB_TRANSFER="");const F=YT[y];F&&(m.defines[F]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=L.texture,P.setRenderTarget(R),P.render(p,_),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const Nv=new Vn,Wd=new ul(1,1),Lv=new yv,Ov=new oM,Iv=new wv,I_=[],P_=[],z_=new Float32Array(16),B_=new Float32Array(9),F_=new Float32Array(4);function to(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function En(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function Tn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function lu(o,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function ZT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function KT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2fv(this.addr,e),Tn(i,e)}}function QT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(En(i,e))return;o.uniform3fv(this.addr,e),Tn(i,e)}}function JT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4fv(this.addr,e),Tn(i,e)}}function $T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;F_.set(r),o.uniformMatrix2fv(this.addr,!1,F_),Tn(i,r)}}function e1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;B_.set(r),o.uniformMatrix3fv(this.addr,!1,B_),Tn(i,r)}}function t1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(En(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Tn(i,e)}else{if(En(i,r))return;z_.set(r),o.uniformMatrix4fv(this.addr,!1,z_),Tn(i,r)}}function n1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function i1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2iv(this.addr,e),Tn(i,e)}}function a1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3iv(this.addr,e),Tn(i,e)}}function r1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4iv(this.addr,e),Tn(i,e)}}function s1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function o1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(En(i,e))return;o.uniform2uiv(this.addr,e),Tn(i,e)}}function l1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(En(i,e))return;o.uniform3uiv(this.addr,e),Tn(i,e)}}function c1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(En(i,e))return;o.uniform4uiv(this.addr,e),Tn(i,e)}}function u1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Wd.compareFunction=i.isReversedDepthBuffer()?np:tp,c=Wd):c=Nv,i.setTexture2D(e||c,l)}function f1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ov,l)}function h1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Iv,l)}function d1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Lv,l)}function p1(o){switch(o){case 5126:return ZT;case 35664:return KT;case 35665:return QT;case 35666:return JT;case 35674:return $T;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return a1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return f1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return d1}}function m1(o,e){o.uniform1fv(this.addr,e)}function g1(o,e){const i=to(e,this.size,2);o.uniform2fv(this.addr,i)}function _1(o,e){const i=to(e,this.size,3);o.uniform3fv(this.addr,i)}function v1(o,e){const i=to(e,this.size,4);o.uniform4fv(this.addr,i)}function x1(o,e){const i=to(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function y1(o,e){const i=to(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function S1(o,e){const i=to(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function M1(o,e){o.uniform1iv(this.addr,e)}function b1(o,e){o.uniform2iv(this.addr,e)}function E1(o,e){o.uniform3iv(this.addr,e)}function T1(o,e){o.uniform4iv(this.addr,e)}function A1(o,e){o.uniform1uiv(this.addr,e)}function w1(o,e){o.uniform2uiv(this.addr,e)}function R1(o,e){o.uniform3uiv(this.addr,e)}function C1(o,e){o.uniform4uiv(this.addr,e)}function D1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Wd:h=Nv;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function U1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ov,c[h])}function N1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Iv,c[h])}function L1(o,e,i){const r=this.cache,l=e.length,c=lu(i,l);En(r,c)||(o.uniform1iv(this.addr,c),Tn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Lv,c[h])}function O1(o){switch(o){case 5126:return m1;case 35664:return g1;case 35665:return _1;case 35666:return v1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return M1;case 35667:case 35671:return b1;case 35668:case 35672:return E1;case 35669:case 35673:return T1;case 5125:return A1;case 36294:return w1;case 36295:return R1;case 36296:return C1;case 35678:case 36198:case 36298:case 36306:case 35682:return D1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return L1}}class I1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=p1(i.type)}}class P1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=O1(i.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const Qh=/(\w+)(\])?(\[|\.)?/g;function H_(o,e){o.seq.push(e),o.map[e.id]=e}function B1(o,e,i){const r=o.name,l=r.length;for(Qh.lastIndex=0;;){const c=Qh.exec(r),h=Qh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){H_(i,p===void 0?new I1(d,o,e):new P1(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new z1(d),H_(i,g)),i=g}}}class Jc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),m=e.getUniformLocation(i,d.name);B1(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function G_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const F1=37297;let H1=0;function G1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const V_=new vt;function V1(o){Ot._getMatrix(V_,Ot.workingColorSpace,o);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Ot.getTransfer(o)){case $c:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function k_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+G1(o.getShaderSource(e),d)}else return c}function k1(o,e){const i=V1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const X1={[iv]:"Linear",[av]:"Reinhard",[rv]:"Cineon",[sv]:"ACESFilmic",[lv]:"AgX",[cv]:"Neutral",[ov]:"Custom"};function W1(o,e){const i=X1[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new $;function q1(){Ot.getLuminanceCoefficients(qc);const o=qc.x.toFixed(4),e=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function j1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Z1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function al(o){return o!==""}function X_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K1=/^[ \t]*#include +<([\w\d./]+)>/gm;function qd(o){return o.replace(K1,J1)}const Q1=new Map;function J1(o,e){let i=xt[e];if(i===void 0){const r=Q1.get(e);if(r!==void 0)i=xt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return qd(i)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(o){return o.replace($1,eA)}function eA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Y_(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const tA={[Yc]:"SHADOWMAP_TYPE_PCF",[il]:"SHADOWMAP_TYPE_VSM"};function nA(o){return tA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iA={[Vr]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[au]:"ENVMAP_TYPE_CUBE_UV"};function aA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":iA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const rA={[js]:"ENVMAP_MODE_REFRACTION"};function sA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":rA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oA={[nv]:"ENVMAP_BLENDING_MULTIPLY",[VS]:"ENVMAP_BLENDING_MIX",[kS]:"ENVMAP_BLENDING_ADD"};function lA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":oA[o.combine]||"ENVMAP_BLENDING_NONE"}function cA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function uA(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=nA(i),p=aA(i),_=sA(i),g=lA(i),y=cA(i),S=Y1(i),E=j1(c),R=l.createProgram();let M,x,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`)):(M=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),x=[Y_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Zi?"#define TONE_MAPPING":"",i.toneMapping!==Zi?xt.tonemapping_pars_fragment:"",i.toneMapping!==Zi?W1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,k1("linearToOutputTexel",i.outputColorSpace),q1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(al).join(`
`)),h=qd(h),h=X_(h,i),h=W_(h,i),d=qd(d),d=X_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===a_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===a_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=P+M+h,L=P+x+d,z=G_(l,l.VERTEX_SHADER,I),F=G_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,z),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function O(V){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(R)||"",K=l.getShaderInfoLog(z)||"",fe=l.getShaderInfoLog(F)||"",se=Z.trim(),N=K.trim(),G=fe.trim();let ne=!0,Me=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ne=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,z,F);else{const be=k_(l,z,"vertex"),U=k_(l,F,"fragment");Lt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+se+`
`+be+`
`+U)}else se!==""?lt("WebGLProgram: Program Info Log:",se):(N===""||G==="")&&(Me=!1);Me&&(V.diagnostics={runnable:ne,programLog:se,vertexShader:{log:N,prefix:M},fragmentShader:{log:G,prefix:x}})}l.deleteShader(z),l.deleteShader(F),q=new Jc(l,R),w=Z1(l,R)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,F1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=z,this.fragmentShader=F,this}let fA=0;class hA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new dA(e),i.set(e,r)),r}}class dA{constructor(e){this.id=fA++,this.code=e,this.usedTimes=0}}function pA(o,e,i,r,l,c,h){const d=new Sv,m=new hA,p=new Set,_=[],g=new Map,y=l.logarithmicDepthBuffer;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,V,Z,K){const fe=Z.fog,se=K.geometry,N=w.isMeshStandardMaterial?Z.environment:null,G=(w.isMeshStandardMaterial?i:e).get(w.envMap||N),ne=G&&G.mapping===au?G.image.height:null,Me=E[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const be=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,U=be!==void 0?be.length:0;let ie=0;se.morphAttributes.position!==void 0&&(ie=1),se.morphAttributes.normal!==void 0&&(ie=2),se.morphAttributes.color!==void 0&&(ie=3);let ve,Re,Be,J;if(Me){const st=Xi[Me];ve=st.vertexShader,Re=st.fragmentShader}else ve=w.vertexShader,Re=w.fragmentShader,m.update(w),Be=m.getVertexShaderID(w),J=m.getFragmentShaderID(w);const oe=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,He=K.isBatchedMesh===!0,ct=!!w.map,Jt=!!w.matcap,pt=!!G,ht=!!w.aoMap,Dt=!!w.lightMap,at=!!w.bumpMap,St=!!w.normalMap,B=!!w.displacementMap,Gt=!!w.emissiveMap,Et=!!w.metalnessMap,It=!!w.roughnessMap,Ye=w.anisotropy>0,D=w.clearcoat>0,b=w.dispersion>0,W=w.iridescence>0,pe=w.sheen>0,Se=w.transmission>0,ue=Ye&&!!w.anisotropyMap,Xe=D&&!!w.clearcoatMap,Ue=D&&!!w.clearcoatNormalMap,Ge=D&&!!w.clearcoatRoughnessMap,et=W&&!!w.iridescenceMap,Te=W&&!!w.iridescenceThicknessMap,Ae=pe&&!!w.sheenColorMap,Fe=pe&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Ne=!!w.specularColorMap,ut=!!w.specularIntensityMap,X=Se&&!!w.transmissionMap,Le=Se&&!!w.thicknessMap,we=!!w.gradientMap,ye=!!w.alphaMap,de=w.alphaTest>0,he=!!w.alphaHash,Ee=!!w.extensions;let De=Zi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(De=o.toneMapping);const tt={shaderID:Me,shaderType:w.type,shaderName:w.name,vertexShader:ve,fragmentShader:Re,defines:w.defines,customVertexShaderID:Be,customFragmentShaderID:J,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:He,batchingColor:He&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,outputColorSpace:oe===null?o.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ks,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Jt,envMap:pt,envMapMode:pt&&G.mapping,envMapCubeUVHeight:ne,aoMap:ht,lightMap:Dt,bumpMap:at,normalMap:St,displacementMap:B,emissiveMap:Gt,normalMapObjectSpace:St&&w.normalMapType===qS,normalMapTangentSpace:St&&w.normalMapType===vv,metalnessMap:Et,roughnessMap:It,anisotropy:Ye,anisotropyMap:ue,clearcoat:D,clearcoatMap:Xe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ge,dispersion:b,iridescence:W,iridescenceMap:et,iridescenceThicknessMap:Te,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Ne,specularIntensityMap:ut,transmission:Se,transmissionMap:X,thicknessMap:Le,gradientMap:we,opaque:w.transparent===!1&&w.blending===Xs&&w.alphaToCoverage===!1,alphaMap:ye,alphaTest:de,alphaHash:he,combine:w.combine,mapUv:ct&&R(w.map.channel),aoMapUv:ht&&R(w.aoMap.channel),lightMapUv:Dt&&R(w.lightMap.channel),bumpMapUv:at&&R(w.bumpMap.channel),normalMapUv:St&&R(w.normalMap.channel),displacementMapUv:B&&R(w.displacementMap.channel),emissiveMapUv:Gt&&R(w.emissiveMap.channel),metalnessMapUv:Et&&R(w.metalnessMap.channel),roughnessMapUv:It&&R(w.roughnessMap.channel),anisotropyMapUv:ue&&R(w.anisotropyMap.channel),clearcoatMapUv:Xe&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&R(w.sheenRoughnessMap.channel),specularMapUv:Ie&&R(w.specularMap.channel),specularColorMapUv:Ne&&R(w.specularColorMap.channel),specularIntensityMapUv:ut&&R(w.specularIntensityMap.channel),transmissionMapUv:X&&R(w.transmissionMap.channel),thicknessMapUv:Le&&R(w.thicknessMap.channel),alphaMapUv:ye&&R(w.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(St||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&(ct||ye),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:Ce,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:De,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&Ot.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wi,flipSided:w.side===ai,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ee&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&w.extensions.multiDraw===!0||He)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=p.has(1),tt.vertexUv2s=p.has(2),tt.vertexUv3s=p.has(3),p.clear(),tt}function x(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(P(C,w),I(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function I(w,C){d.disableAll(),C.instancing&&d.enable(0),C.instancingColor&&d.enable(1),C.instancingMorph&&d.enable(2),C.matcap&&d.enable(3),C.envMap&&d.enable(4),C.normalMapObjectSpace&&d.enable(5),C.normalMapTangentSpace&&d.enable(6),C.clearcoat&&d.enable(7),C.iridescence&&d.enable(8),C.alphaTest&&d.enable(9),C.vertexColors&&d.enable(10),C.vertexAlphas&&d.enable(11),C.vertexUv1s&&d.enable(12),C.vertexUv2s&&d.enable(13),C.vertexUv3s&&d.enable(14),C.vertexTangents&&d.enable(15),C.anisotropy&&d.enable(16),C.alphaHash&&d.enable(17),C.batching&&d.enable(18),C.dispersion&&d.enable(19),C.batchingColor&&d.enable(20),C.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function L(w){const C=E[w.type];let V;if(C){const Z=Xi[C];V=SM.clone(Z.uniforms)}else V=w.uniforms;return V}function z(w,C){let V=g.get(C);return V!==void 0?++V.usedTimes:(V=new uA(o,C,w,c),_.push(V),g.set(C,V)),V}function F(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),g.delete(w.cacheKey),w.destroy()}}function O(w){m.remove(w)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:L,acquireProgram:z,releaseProgram:F,releaseShaderCache:O,programs:_,dispose:q}}function mA(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function gA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function j_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Z_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,y,S,E,R,M){let x=o[e];return x===void 0?(x={id:g.id,object:g,geometry:y,material:S,groupOrder:E,renderOrder:g.renderOrder,z:R,group:M},o[e]=x):(x.id=g.id,x.object=g,x.geometry=y,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=R,x.group=M),e++,x}function d(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.push(x):S.transparent===!0?l.push(x):i.push(x)}function m(g,y,S,E,R,M){const x=h(g,y,S,E,R,M);S.transmission>0?r.unshift(x):S.transparent===!0?l.unshift(x):i.unshift(x)}function p(g,y){i.length>1&&i.sort(g||gA),r.length>1&&r.sort(y||j_),l.length>1&&l.sort(y||j_)}function _(){for(let g=e,y=o.length;g<y;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:_,sort:p}}function _A(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Z_,o.set(r,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function vA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new wt};break;case"SpotLight":i={position:new $,direction:new $,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new wt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":i={color:new wt,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function xA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let yA=0;function SA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function MA(o){const e=new vA,i=xA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new sn,h=new sn;function d(p){let _=0,g=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,E=0,R=0,M=0,x=0,P=0,I=0,L=0,z=0,F=0,O=0;p.sort(SA);for(let w=0,C=p.length;w<C;w++){const V=p[w],Z=V.color,K=V.intensity,fe=V.distance;let se=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Zs?se=V.shadow.map.texture:se=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Z.r*K,g+=Z.g*K,y+=Z.b*K;else if(V.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(V.sh.coefficients[N],K);O++}else if(V.isDirectionalLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.directionalShadow[S]=ne,r.directionalShadowMap[S]=se,r.directionalShadowMatrix[S]=V.shadow.matrix,P++}r.directional[S]=N,S++}else if(V.isSpotLight){const N=e.get(V);N.position.setFromMatrixPosition(V.matrixWorld),N.color.copy(Z).multiplyScalar(K),N.distance=fe,N.coneCos=Math.cos(V.angle),N.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),N.decay=V.decay,r.spot[R]=N;const G=V.shadow;if(V.map&&(r.spotLightMap[z]=V.map,z++,G.updateMatrices(V),V.castShadow&&F++),r.spotLightMatrix[R]=G.matrix,V.castShadow){const ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,r.spotShadow[R]=ne,r.spotShadowMap[R]=se,L++}R++}else if(V.isRectAreaLight){const N=e.get(V);N.color.copy(Z).multiplyScalar(K),N.halfWidth.set(V.width*.5,0,0),N.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=N,M++}else if(V.isPointLight){const N=e.get(V);if(N.color.copy(V.color).multiplyScalar(V.intensity),N.distance=V.distance,N.decay=V.decay,V.castShadow){const G=V.shadow,ne=i.get(V);ne.shadowIntensity=G.intensity,ne.shadowBias=G.bias,ne.shadowNormalBias=G.normalBias,ne.shadowRadius=G.radius,ne.shadowMapSize=G.mapSize,ne.shadowCameraNear=G.camera.near,ne.shadowCameraFar=G.camera.far,r.pointShadow[E]=ne,r.pointShadowMap[E]=se,r.pointShadowMatrix[E]=V.shadow.matrix,I++}r.point[E]=N,E++}else if(V.isHemisphereLight){const N=e.get(V);N.skyColor.copy(V.color).multiplyScalar(K),N.groundColor.copy(V.groundColor).multiplyScalar(K),r.hemi[x]=N,x++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=y;const q=r.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==R||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==P||q.numPointShadows!==I||q.numSpotShadows!==L||q.numSpotMaps!==z||q.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=L+z-F,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,q.directionalLength=S,q.pointLength=E,q.spotLength=R,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=P,q.numPointShadows=I,q.numSpotShadows=L,q.numSpotMaps=z,q.numLightProbes=O,r.version=yA++)}function m(p,_){let g=0,y=0,S=0,E=0,R=0;const M=_.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const I=p[x];if(I.isDirectionalLight){const L=r.directional[g];L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),g++}else if(I.isSpotLight){const L=r.spot[S];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(I.matrixWorld),l.setFromMatrixPosition(I.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),S++}else if(I.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(I.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(I.width*.5,0,0),L.halfHeight.set(0,I.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(I.isPointLight){const L=r.point[y];L.position.setFromMatrixPosition(I.matrixWorld),L.position.applyMatrix4(M),y++}else if(I.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(I.matrixWorld),L.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:r}}function K_(o){const e=new MA(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function m(_){e.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function bA(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new K_(o),e.set(l,[d])):c>=h.length?(d=new K_(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
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
}`,AA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],wA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Q_=new sn,nl=new $,Jh=new $;function RA(o,e,i){let r=new rp;const l=new yt,c=new yt,h=new cn,d=new OM,m=new IM,p={},_=i.maxTextureSize,g={[fr]:ai,[ai]:fr,[Wi]:Wi},y=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new wi;E.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Nt(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let x=this.type;this.render=function(F,O,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;F.type===bS&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Yc);const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(Aa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const K=x!==this.type;K&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(se=>se.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,se=F.length;fe<se;fe++){const N=F[fe],G=N.shadow;if(G===void 0){lt("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const ne=G.getFrameExtents();if(l.multiply(ne),c.copy(G.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ne.x),l.x=c.x*ne.x,G.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ne.y),l.y=c.y*ne.y,G.mapSize.y=c.y)),G.map===null||K===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===il){if(N.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ki(l.x,l.y,{format:Zs,type:Ra,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new ul(l.x,l.y,Yi),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=Ca,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn}else{N.isPointLight?(G.map=new Rv(l.x),G.map.depthTexture=new NM(l.x,Qi)):(G.map=new Ki(l.x,l.y),G.map.depthTexture=new ul(l.x,l.y,Qi)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=Ca;const be=o.state.buffers.depth.getReversed();this.type===Yc?(G.map.depthTexture.compareFunction=be?np:tp,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn)}G.camera.updateProjectionMatrix()}const Me=G.map.isWebGLCubeRenderTarget?6:1;for(let be=0;be<Me;be++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,be),o.clear();else{be===0&&(o.setRenderTarget(G.map),o.clear());const U=G.getViewport(be);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),Z.viewport(h)}if(N.isPointLight){const U=G.camera,ie=G.matrix,ve=N.distance||U.far;ve!==U.far&&(U.far=ve,U.updateProjectionMatrix()),nl.setFromMatrixPosition(N.matrixWorld),U.position.copy(nl),Jh.copy(U.position),Jh.add(AA[be]),U.up.copy(wA[be]),U.lookAt(Jh),U.updateMatrixWorld(),ie.makeTranslation(-nl.x,-nl.y,-nl.z),Q_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Q_,U.coordinateSystem,U.reversedDepth)}else G.updateMatrices(N);r=G.getFrustum(),L(O,q,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===il&&P(G,q),G.needsUpdate=!1}x=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,V)};function P(F,O){const q=e.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ki(l.x,l.y,{format:Zs,type:Ra})),y.uniforms.shadow_pass.value=F.map.depthTexture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(O,null,q,y,R,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(O,null,q,S,R,null)}function I(F,O,q,w){let C=null;const V=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)C=V;else if(C=q.isPointLight===!0?m:d,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=C.uuid,K=O.uuid;let fe=p[Z];fe===void 0&&(fe={},p[Z]=fe);let se=fe[K];se===void 0&&(se=C.clone(),fe[K]=se,O.addEventListener("dispose",z)),C=se}if(C.visible=O.visible,C.wireframe=O.wireframe,w===il?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:g[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,q.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Z=o.properties.get(C);Z.light=q}return C}function L(F,O,q,w,C){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===il)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const K=e.update(F),fe=F.material;if(Array.isArray(fe)){const se=K.groups;for(let N=0,G=se.length;N<G;N++){const ne=se[N],Me=fe[ne.materialIndex];if(Me&&Me.visible){const be=I(F,Me,w,C);F.onBeforeShadow(o,F,O,q,K,be,ne),o.renderBufferDirect(q,null,K,be,F,ne),F.onAfterShadow(o,F,O,q,K,be,ne)}}}else if(fe.visible){const se=I(F,fe,w,C);F.onBeforeShadow(o,F,O,q,K,se,null),o.renderBufferDirect(q,null,K,se,F,null),F.onAfterShadow(o,F,O,q,K,se,null)}}const Z=F.children;for(let K=0,fe=Z.length;K<fe;K++)L(Z[K],O,q,w,C)}function z(F){F.target.removeEventListener("dispose",z);for(const q in p){const w=p[q],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const CA={[td]:nd,[id]:sd,[ad]:od,[Ys]:rd,[nd]:td,[sd]:id,[od]:ad,[rd]:Ys};function DA(o,e){function i(){let X=!1;const Le=new cn;let we=null;const ye=new cn(0,0,0,0);return{setMask:function(de){we!==de&&!X&&(o.colorMask(de,de,de,de),we=de)},setLocked:function(de){X=de},setClear:function(de,he,Ee,De,tt){tt===!0&&(de*=De,he*=De,Ee*=De),Le.set(de,he,Ee,De),ye.equals(Le)===!1&&(o.clearColor(de,he,Ee,De),ye.copy(Le))},reset:function(){X=!1,we=null,ye.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,we=null,ye=null,de=null;return{setReversed:function(he){if(Le!==he){const Ee=e.get("EXT_clip_control");he?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Le=he;const De=de;de=null,this.setClear(De)}},getReversed:function(){return Le},setTest:function(he){he?oe(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(he){we!==he&&!X&&(o.depthMask(he),we=he)},setFunc:function(he){if(Le&&(he=CA[he]),ye!==he){switch(he){case td:o.depthFunc(o.NEVER);break;case nd:o.depthFunc(o.ALWAYS);break;case id:o.depthFunc(o.LESS);break;case Ys:o.depthFunc(o.LEQUAL);break;case ad:o.depthFunc(o.EQUAL);break;case rd:o.depthFunc(o.GEQUAL);break;case sd:o.depthFunc(o.GREATER);break;case od:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ye=he}},setLocked:function(he){X=he},setClear:function(he){de!==he&&(Le&&(he=1-he),o.clearDepth(he),de=he)},reset:function(){X=!1,we=null,ye=null,de=null,Le=!1}}}function l(){let X=!1,Le=null,we=null,ye=null,de=null,he=null,Ee=null,De=null,tt=null;return{setTest:function(st){X||(st?oe(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(st){Le!==st&&!X&&(o.stencilMask(st),Le=st)},setFunc:function(st,mt,ft){(we!==st||ye!==mt||de!==ft)&&(o.stencilFunc(st,mt,ft),we=st,ye=mt,de=ft)},setOp:function(st,mt,ft){(he!==st||Ee!==mt||De!==ft)&&(o.stencilOp(st,mt,ft),he=st,Ee=mt,De=ft)},setLocked:function(st){X=st},setClear:function(st){tt!==st&&(o.clearStencil(st),tt=st)},reset:function(){X=!1,Le=null,we=null,ye=null,de=null,he=null,Ee=null,De=null,tt=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,P=null,I=null,L=null,z=null,F=null,O=new wt(0,0,0),q=0,w=!1,C=null,V=null,Z=null,K=null,fe=null;const se=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,G=0;const ne=o.getParameter(o.VERSION);ne.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(ne)[1]),N=G>=1):ne.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),N=G>=2);let Me=null,be={};const U=o.getParameter(o.SCISSOR_BOX),ie=o.getParameter(o.VIEWPORT),ve=new cn().fromArray(U),Re=new cn().fromArray(ie);function Be(X,Le,we,ye){const de=new Uint8Array(4),he=o.createTexture();o.bindTexture(X,he),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ee=0;Ee<we;Ee++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,ye,0,o.RGBA,o.UNSIGNED_BYTE,de):o.texImage2D(Le+Ee,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,de);return he}const J={};J[o.TEXTURE_2D]=Be(o.TEXTURE_2D,o.TEXTURE_2D,1),J[o.TEXTURE_CUBE_MAP]=Be(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[o.TEXTURE_2D_ARRAY]=Be(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),J[o.TEXTURE_3D]=Be(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),oe(o.DEPTH_TEST),h.setFunc(Ys),at(!1),St($g),oe(o.CULL_FACE),ht(Aa);function oe(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function Ce(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function ke(X,Le){return g[X]!==Le?(o.bindFramebuffer(X,Le),g[X]=Le,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function He(X,Le){let we=S,ye=!1;if(X){we=y.get(Le),we===void 0&&(we=[],y.set(Le,we));const de=X.textures;if(we.length!==de.length||we[0]!==o.COLOR_ATTACHMENT0){for(let he=0,Ee=de.length;he<Ee;he++)we[he]=o.COLOR_ATTACHMENT0+he;we.length=de.length,ye=!0}}else we[0]!==o.BACK&&(we[0]=o.BACK,ye=!0);ye&&o.drawBuffers(we)}function ct(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Jt={[zr]:o.FUNC_ADD,[TS]:o.FUNC_SUBTRACT,[AS]:o.FUNC_REVERSE_SUBTRACT};Jt[wS]=o.MIN,Jt[RS]=o.MAX;const pt={[CS]:o.ZERO,[DS]:o.ONE,[US]:o.SRC_COLOR,[$h]:o.SRC_ALPHA,[zS]:o.SRC_ALPHA_SATURATE,[IS]:o.DST_COLOR,[LS]:o.DST_ALPHA,[NS]:o.ONE_MINUS_SRC_COLOR,[ed]:o.ONE_MINUS_SRC_ALPHA,[PS]:o.ONE_MINUS_DST_COLOR,[OS]:o.ONE_MINUS_DST_ALPHA,[BS]:o.CONSTANT_COLOR,[FS]:o.ONE_MINUS_CONSTANT_COLOR,[HS]:o.CONSTANT_ALPHA,[GS]:o.ONE_MINUS_CONSTANT_ALPHA};function ht(X,Le,we,ye,de,he,Ee,De,tt,st){if(X===Aa){R===!0&&(Ce(o.BLEND),R=!1);return}if(R===!1&&(oe(o.BLEND),R=!0),X!==ES){if(X!==M||st!==w){if((x!==zr||L!==zr)&&(o.blendEquation(o.FUNC_ADD),x=zr,L=zr),st)switch(X){case Xs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFunc(o.ONE,o.ONE);break;case t_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case n_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Lt("WebGLState: Invalid blending: ",X);break}else switch(X){case Xs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case t_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case n_:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",X);break}P=null,I=null,z=null,F=null,O.set(0,0,0),q=0,M=X,w=st}return}de=de||Le,he=he||we,Ee=Ee||ye,(Le!==x||de!==L)&&(o.blendEquationSeparate(Jt[Le],Jt[de]),x=Le,L=de),(we!==P||ye!==I||he!==z||Ee!==F)&&(o.blendFuncSeparate(pt[we],pt[ye],pt[he],pt[Ee]),P=we,I=ye,z=he,F=Ee),(De.equals(O)===!1||tt!==q)&&(o.blendColor(De.r,De.g,De.b,tt),O.copy(De),q=tt),M=X,w=!1}function Dt(X,Le){X.side===Wi?Ce(o.CULL_FACE):oe(o.CULL_FACE);let we=X.side===ai;Le&&(we=!we),at(we),X.blending===Xs&&X.transparent===!1?ht(Aa):ht(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const ye=X.stencilWrite;d.setTest(ye),ye&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Gt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?oe(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function at(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function St(X){X!==SS?(oe(o.CULL_FACE),X!==V&&(X===$g?o.cullFace(o.BACK):X===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),V=X}function B(X){X!==Z&&(N&&o.lineWidth(X),Z=X)}function Gt(X,Le,we){X?(oe(o.POLYGON_OFFSET_FILL),(K!==Le||fe!==we)&&(o.polygonOffset(Le,we),K=Le,fe=we)):Ce(o.POLYGON_OFFSET_FILL)}function Et(X){X?oe(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function It(X){X===void 0&&(X=o.TEXTURE0+se-1),Me!==X&&(o.activeTexture(X),Me=X)}function Ye(X,Le,we){we===void 0&&(Me===null?we=o.TEXTURE0+se-1:we=Me);let ye=be[we];ye===void 0&&(ye={type:void 0,texture:void 0},be[we]=ye),(ye.type!==X||ye.texture!==Le)&&(Me!==we&&(o.activeTexture(we),Me=we),o.bindTexture(X,Le||J[X]),ye.type=X,ye.texture=Le)}function D(){const X=be[Me];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{o.compressedTexImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function W(){try{o.compressedTexImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function pe(){try{o.texSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Se(){try{o.texSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Xe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ue(){try{o.texStorage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ge(){try{o.texStorage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function et(){try{o.texImage2D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Te(){try{o.texImage3D(...arguments)}catch(X){Lt("WebGLState:",X)}}function Ae(X){ve.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),ve.copy(X))}function Fe(X){Re.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Ie(X,Le){let we=p.get(Le);we===void 0&&(we=new WeakMap,p.set(Le,we));let ye=we.get(X);ye===void 0&&(ye=o.getUniformBlockIndex(Le,X.name),we.set(X,ye))}function Ne(X,Le){const ye=p.get(Le).get(X);m.get(Le)!==ye&&(o.uniformBlockBinding(Le,ye,X.__bindingPointIndex),m.set(Le,ye))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},Me=null,be={},g={},y=new WeakMap,S=[],E=null,R=!1,M=null,x=null,P=null,I=null,L=null,z=null,F=null,O=new wt(0,0,0),q=0,w=!1,C=null,V=null,Z=null,K=null,fe=null,ve.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:oe,disable:Ce,bindFramebuffer:ke,drawBuffers:He,useProgram:ct,setBlending:ht,setMaterial:Dt,setFlipSided:at,setCullFace:St,setLineWidth:B,setPolygonOffset:Gt,setScissorTest:Et,activeTexture:It,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:et,texImage3D:Te,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:Ue,texStorage3D:Ge,texSubImage2D:pe,texSubImage3D:Se,compressedTexSubImage2D:ue,compressedTexSubImage3D:Xe,scissor:Ae,viewport:Fe,reset:ut}}function UA(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new yt,_=new WeakMap;let g;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return S?new OffscreenCanvas(D,b):ll("canvas")}function R(D,b,W){let pe=1;const Se=Ye(D);if((Se.width>W||Se.height>W)&&(pe=W/Math.max(Se.width,Se.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(pe*Se.width),Xe=Math.floor(pe*Se.height);g===void 0&&(g=E(ue,Xe));const Ue=b?E(ue,Xe):g;return Ue.width=ue,Ue.height=Xe,Ue.getContext("2d").drawImage(D,0,0,ue,Xe),lt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ue+"x"+Xe+")."),Ue}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function M(D){return D.generateMipmaps}function x(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function I(D,b,W,pe,Se=!1){if(D!==null){if(o[D]!==void 0)return o[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=b;if(b===o.RED&&(W===o.FLOAT&&(ue=o.R32F),W===o.HALF_FLOAT&&(ue=o.R16F),W===o.UNSIGNED_BYTE&&(ue=o.R8)),b===o.RED_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.R8UI),W===o.UNSIGNED_SHORT&&(ue=o.R16UI),W===o.UNSIGNED_INT&&(ue=o.R32UI),W===o.BYTE&&(ue=o.R8I),W===o.SHORT&&(ue=o.R16I),W===o.INT&&(ue=o.R32I)),b===o.RG&&(W===o.FLOAT&&(ue=o.RG32F),W===o.HALF_FLOAT&&(ue=o.RG16F),W===o.UNSIGNED_BYTE&&(ue=o.RG8)),b===o.RG_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RG8UI),W===o.UNSIGNED_SHORT&&(ue=o.RG16UI),W===o.UNSIGNED_INT&&(ue=o.RG32UI),W===o.BYTE&&(ue=o.RG8I),W===o.SHORT&&(ue=o.RG16I),W===o.INT&&(ue=o.RG32I)),b===o.RGB_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),W===o.UNSIGNED_INT&&(ue=o.RGB32UI),W===o.BYTE&&(ue=o.RGB8I),W===o.SHORT&&(ue=o.RGB16I),W===o.INT&&(ue=o.RGB32I)),b===o.RGBA_INTEGER&&(W===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),W===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),W===o.UNSIGNED_INT&&(ue=o.RGBA32UI),W===o.BYTE&&(ue=o.RGBA8I),W===o.SHORT&&(ue=o.RGBA16I),W===o.INT&&(ue=o.RGBA32I)),b===o.RGB&&(W===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),W===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),b===o.RGBA){const Xe=Se?$c:Ot.getTransfer(pe);W===o.FLOAT&&(ue=o.RGBA32F),W===o.HALF_FLOAT&&(ue=o.RGBA16F),W===o.UNSIGNED_BYTE&&(ue=Xe===qt?o.SRGB8_ALPHA8:o.RGBA8),W===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),W===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function L(D,b){let W;return D?b===null||b===Qi||b===ol?W=o.DEPTH24_STENCIL8:b===Yi?W=o.DEPTH32F_STENCIL8:b===sl&&(W=o.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Qi||b===ol?W=o.DEPTH_COMPONENT24:b===Yi?W=o.DEPTH_COMPONENT32F:b===sl&&(W=o.DEPTH_COMPONENT16),W}function z(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Mn&&D.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function F(D){const b=D.target;b.removeEventListener("dispose",F),q(b),b.isVideoTexture&&_.delete(b)}function O(D){const b=D.target;b.removeEventListener("dispose",O),C(b)}function q(D){const b=r.get(D);if(b.__webglInit===void 0)return;const W=D.source,pe=y.get(W);if(pe){const Se=pe[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(D),Object.keys(pe).length===0&&y.delete(W)}r.remove(D)}function w(D){const b=r.get(D);o.deleteTexture(b.__webglTexture);const W=D.source,pe=y.get(W);delete pe[b.__cacheKey],h.memory.textures--}function C(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Se=0;Se<b.__webglFramebuffer[pe].length;Se++)o.deleteFramebuffer(b.__webglFramebuffer[pe][Se]);else o.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)o.deleteFramebuffer(b.__webglFramebuffer[pe]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let pe=0,Se=W.length;pe<Se;pe++){const ue=r.get(W[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),h.memory.textures--),r.remove(W[pe])}r.remove(D)}let V=0;function Z(){V=0}function K(){const D=V;return D>=l.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function fe(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function se(D,b){const W=r.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const pe=D.image;if(pe===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{J(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,W.__webglTexture,o.TEXTURE0+b)}function N(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,W.__webglTexture,o.TEXTURE0+b)}function G(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){J(W,D,b);return}i.bindTexture(o.TEXTURE_3D,W.__webglTexture,o.TEXTURE0+b)}function ne(D,b){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){oe(W,D,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,W.__webglTexture,o.TEXTURE0+b)}const Me={[Ws]:o.REPEAT,[Ta]:o.CLAMP_TO_EDGE,[ud]:o.MIRRORED_REPEAT},be={[Mn]:o.NEAREST,[XS]:o.NEAREST_MIPMAP_NEAREST,[Ec]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[xh]:o.LINEAR_MIPMAP_NEAREST,[Fr]:o.LINEAR_MIPMAP_LINEAR},U={[YS]:o.NEVER,[JS]:o.ALWAYS,[jS]:o.LESS,[tp]:o.LEQUAL,[ZS]:o.EQUAL,[np]:o.GEQUAL,[KS]:o.GREATER,[QS]:o.NOTEQUAL};function ie(D,b){if(b.type===Yi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===xh||b.magFilter===Ec||b.magFilter===Fr||b.minFilter===Gn||b.minFilter===xh||b.minFilter===Ec||b.minFilter===Fr)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Me[b.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Me[b.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Me[b.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,be[b.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,be[b.minFilter]),b.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Mn||b.minFilter!==Ec&&b.minFilter!==Fr||b.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ve(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",F));const pe=b.source;let Se=y.get(pe);Se===void 0&&(Se={},y.set(pe,Se));const ue=fe(b);if(ue!==D.__cacheKey){Se[ue]===void 0&&(Se[ue]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,W=!0),Se[ue].usedTimes++;const Xe=Se[D.__cacheKey];Xe!==void 0&&(Se[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&w(b)),D.__cacheKey=ue,D.__webglTexture=Se[ue].texture}return W}function Re(D,b,W){return Math.floor(Math.floor(D/W)/b)}function Be(D,b,W,pe){const ue=D.updateRanges;if(ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,b.width,b.height,W,pe,b.data);else{ue.sort((Te,Ae)=>Te.start-Ae.start);let Xe=0;for(let Te=1;Te<ue.length;Te++){const Ae=ue[Xe],Fe=ue[Te],Ie=Ae.start+Ae.count,Ne=Re(Fe.start,b.width,4),ut=Re(Ae.start,b.width,4);Fe.start<=Ie+1&&Ne===ut&&Re(Fe.start+Fe.count-1,b.width,4)===Ne?Ae.count=Math.max(Ae.count,Fe.start+Fe.count-Ae.start):(++Xe,ue[Xe]=Fe)}ue.length=Xe+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Ge=o.getParameter(o.UNPACK_SKIP_PIXELS),et=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,b.width);for(let Te=0,Ae=ue.length;Te<Ae;Te++){const Fe=ue[Te],Ie=Math.floor(Fe.start/4),Ne=Math.ceil(Fe.count/4),ut=Ie%b.width,X=Math.floor(Ie/b.width),Le=Ne,we=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ut,X,Le,we,W,pe,b.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,et)}}function J(D,b,W){let pe=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=o.TEXTURE_3D);const Se=ve(D,b),ue=b.source;i.bindTexture(pe,D.__webglTexture,o.TEXTURE0+W);const Xe=r.get(ue);if(ue.version!==Xe.__version||Se===!0){i.activeTexture(o.TEXTURE0+W);const Ue=Ot.getPrimaries(Ot.workingColorSpace),Ge=b.colorSpace===lr?null:Ot.getPrimaries(b.colorSpace),et=b.colorSpace===lr||Ue===Ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Te=R(b.image,!1,l.maxTextureSize);Te=It(b,Te);const Ae=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let Ie=I(b.internalFormat,Ae,Fe,b.colorSpace,b.isVideoTexture);ie(pe,b);let Ne;const ut=b.mipmaps,X=b.isVideoTexture!==!0,Le=Xe.__version===void 0||Se===!0,we=ue.dataReady,ye=z(b,Te);if(b.isDepthTexture)Ie=L(b.format===Hr,b.type),Le&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ie,Te.width,Te.height):i.texImage2D(o.TEXTURE_2D,0,Ie,Te.width,Te.height,0,Ae,Fe,null));else if(b.isDataTexture)if(ut.length>0){X&&Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,ut[0].width,ut[0].height);for(let de=0,he=ut.length;de<he;de++)Ne=ut[de],X?we&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Ae,Fe,Ne.data):i.texImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,Ae,Fe,Ne.data);b.generateMipmaps=!1}else X?(Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,Te.width,Te.height),we&&Be(b,Te,Ae,Fe)):i.texImage2D(o.TEXTURE_2D,0,Ie,Te.width,Te.height,0,Ae,Fe,Te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ye,Ie,ut[0].width,ut[0].height,Te.depth);for(let de=0,he=ut.length;de<he;de++)if(Ne=ut[de],b.format!==Pi)if(Ae!==null)if(X){if(we)if(b.layerUpdates.size>0){const Ee=R_(Ne.width,Ne.height,b.format,b.type);for(const De of b.layerUpdates){const tt=Ne.data.subarray(De*Ee/Ne.data.BYTES_PER_ELEMENT,(De+1)*Ee/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,De,Ne.width,Ne.height,1,Ae,tt)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,Te.depth,Ae,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,de,Ie,Ne.width,Ne.height,Te.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?we&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,de,0,0,0,Ne.width,Ne.height,Te.depth,Ae,Fe,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,de,Ie,Ne.width,Ne.height,Te.depth,0,Ae,Fe,Ne.data)}else{X&&Le&&i.texStorage2D(o.TEXTURE_2D,ye,Ie,ut[0].width,ut[0].height);for(let de=0,he=ut.length;de<he;de++)Ne=ut[de],b.format!==Pi?Ae!==null?X?we&&i.compressedTexSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Ae,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?we&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,Ne.width,Ne.height,Ae,Fe,Ne.data):i.texImage2D(o.TEXTURE_2D,de,Ie,Ne.width,Ne.height,0,Ae,Fe,Ne.data)}else if(b.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,ye,Ie,Te.width,Te.height,Te.depth),we)if(b.layerUpdates.size>0){const de=R_(Te.width,Te.height,b.format,b.type);for(const he of b.layerUpdates){const Ee=Te.data.subarray(he*de/Te.data.BYTES_PER_ELEMENT,(he+1)*de/Te.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,he,Te.width,Te.height,1,Ae,Fe,Ee)}b.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Ae,Fe,Te.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ie,Te.width,Te.height,Te.depth,0,Ae,Fe,Te.data);else if(b.isData3DTexture)X?(Le&&i.texStorage3D(o.TEXTURE_3D,ye,Ie,Te.width,Te.height,Te.depth),we&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Ae,Fe,Te.data)):i.texImage3D(o.TEXTURE_3D,0,Ie,Te.width,Te.height,Te.depth,0,Ae,Fe,Te.data);else if(b.isFramebufferTexture){if(Le)if(X)i.texStorage2D(o.TEXTURE_2D,ye,Ie,Te.width,Te.height);else{let de=Te.width,he=Te.height;for(let Ee=0;Ee<ye;Ee++)i.texImage2D(o.TEXTURE_2D,Ee,Ie,de,he,0,Ae,Fe,null),de>>=1,he>>=1}}else if(ut.length>0){if(X&&Le){const de=Ye(ut[0]);i.texStorage2D(o.TEXTURE_2D,ye,Ie,de.width,de.height)}for(let de=0,he=ut.length;de<he;de++)Ne=ut[de],X?we&&i.texSubImage2D(o.TEXTURE_2D,de,0,0,Ae,Fe,Ne):i.texImage2D(o.TEXTURE_2D,de,Ie,Ae,Fe,Ne);b.generateMipmaps=!1}else if(X){if(Le){const de=Ye(Te);i.texStorage2D(o.TEXTURE_2D,ye,Ie,de.width,de.height)}we&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ae,Fe,Te)}else i.texImage2D(o.TEXTURE_2D,0,Ie,Ae,Fe,Te);M(b)&&x(pe),Xe.__version=ue.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function oe(D,b,W){if(b.image.length!==6)return;const pe=ve(D,b),Se=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+W);const ue=r.get(Se);if(Se.version!==ue.__version||pe===!0){i.activeTexture(o.TEXTURE0+W);const Xe=Ot.getPrimaries(Ot.workingColorSpace),Ue=b.colorSpace===lr?null:Ot.getPrimaries(b.colorSpace),Ge=b.colorSpace===lr||Xe===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const et=b.isCompressedTexture||b.image[0].isCompressedTexture,Te=b.image[0]&&b.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!et&&!Te?Ae[he]=R(b.image[he],!0,l.maxCubemapSize):Ae[he]=Te?b.image[he].image:b.image[he],Ae[he]=It(b,Ae[he]);const Fe=Ae[0],Ie=c.convert(b.format,b.colorSpace),Ne=c.convert(b.type),ut=I(b.internalFormat,Ie,Ne,b.colorSpace),X=b.isVideoTexture!==!0,Le=ue.__version===void 0||pe===!0,we=Se.dataReady;let ye=z(b,Fe);ie(o.TEXTURE_CUBE_MAP,b);let de;if(et){X&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,ut,Fe.width,Fe.height);for(let he=0;he<6;he++){de=Ae[he].mipmaps;for(let Ee=0;Ee<de.length;Ee++){const De=de[Ee];b.format!==Pi?Ie!==null?X?we&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,De.width,De.height,Ie,De.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,ut,De.width,De.height,0,De.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,0,0,De.width,De.height,Ie,Ne,De.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee,ut,De.width,De.height,0,Ie,Ne,De.data)}}}else{if(de=b.mipmaps,X&&Le){de.length>0&&ye++;const he=Ye(Ae[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,ut,he.width,he.height)}for(let he=0;he<6;he++)if(Te){X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,Ie,Ne,Ae[he].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Ae[he].width,Ae[he].height,0,Ie,Ne,Ae[he].data);for(let Ee=0;Ee<de.length;Ee++){const tt=de[Ee].image[he].image;X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,tt.width,tt.height,Ie,Ne,tt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,ut,tt.width,tt.height,0,Ie,Ne,tt.data)}}else{X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,Ne,Ae[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ut,Ie,Ne,Ae[he]);for(let Ee=0;Ee<de.length;Ee++){const De=de[Ee];X?we&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,0,0,Ie,Ne,De.image[he]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ee+1,ut,Ie,Ne,De.image[he])}}}M(b)&&x(o.TEXTURE_CUBE_MAP),ue.__version=Se.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ce(D,b,W,pe,Se,ue){const Xe=c.convert(W.format,W.colorSpace),Ue=c.convert(W.type),Ge=I(W.internalFormat,Xe,Ue,W.colorSpace),et=r.get(b),Te=r.get(W);if(Te.__renderTarget=b,!et.__hasExternalTextures){const Ae=Math.max(1,b.width>>ue),Fe=Math.max(1,b.height>>ue);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,ue,Ge,Ae,Fe,b.depth,0,Xe,Ue,null):i.texImage2D(Se,ue,Ge,Ae,Fe,0,Xe,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,0,B(b)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,Se,Te.__webglTexture,ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,b,W){if(o.bindRenderbuffer(o.RENDERBUFFER,D),b.depthBuffer){const pe=b.depthTexture,Se=pe&&pe.isDepthTexture?pe.type:null,ue=L(b.stencilBuffer,Se),Xe=b.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Gt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(b),ue,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(b),ue,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,ue,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xe,o.RENDERBUFFER,D)}else{const pe=b.textures;for(let Se=0;Se<pe.length;Se++){const ue=pe[Se],Xe=c.convert(ue.format,ue.colorSpace),Ue=c.convert(ue.type),Ge=I(ue.internalFormat,Xe,Ue,ue.colorSpace);Gt(b)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,B(b),Ge,b.width,b.height):W?o.renderbufferStorageMultisample(o.RENDERBUFFER,B(b),Ge,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Ge,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function He(D,b,W){const pe=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),pe){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Se.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b.depthTexture);const et=c.convert(b.depthTexture.format),Te=c.convert(b.depthTexture.type);let Ae;b.depthTexture.format===Ca?Ae=o.DEPTH_COMPONENT24:b.depthTexture.format===Hr&&(Ae=o.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ae,b.width,b.height,0,et,Te,null)}}else se(b.depthTexture,0);const ue=Se.__webglTexture,Xe=B(b),Ue=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+W:o.TEXTURE_2D,Ge=b.depthTexture.format===Hr?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ca)Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ge,Ue,ue,0,Xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ge,Ue,ue,0);else if(b.depthTexture.format===Hr)Gt(b)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ge,Ue,ue,0,Xe):o.framebufferTexture2D(o.FRAMEBUFFER,Ge,Ue,ue,0);else throw new Error("Unknown depthTexture format")}function ct(D){const b=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Se)};pe.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=pe}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let pe=0;pe<6;pe++)He(b.__webglFramebuffer[pe],D,pe);else{const pe=D.texture.mipmaps;pe&&pe.length>0?He(b.__webglFramebuffer[0],D,0):He(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=o.createRenderbuffer(),ke(b.__webglDepthbuffer[pe],D,!1);else{const Se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=o.createRenderbuffer(),ke(b.__webglDepthbuffer,D,!1);else{const Se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=b.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,ue)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(D,b,W){const pe=r.get(D);b!==void 0&&Ce(pe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),W!==void 0&&ct(D)}function pt(D){const b=D.texture,W=r.get(D),pe=r.get(b);D.addEventListener("dispose",O);const Se=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=b.version,h.memory.textures++),ue){W.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Ue]=[];for(let Ge=0;Ge<b.mipmaps.length;Ge++)W.__webglFramebuffer[Ue][Ge]=o.createFramebuffer()}else W.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ue=0;Ue<b.mipmaps.length;Ue++)W.__webglFramebuffer[Ue]=o.createFramebuffer()}else W.__webglFramebuffer=o.createFramebuffer();if(Xe)for(let Ue=0,Ge=Se.length;Ue<Ge;Ue++){const et=r.get(Se[Ue]);et.__webglTexture===void 0&&(et.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&Gt(D)===!1){W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Se.length;Ue++){const Ge=Se[Ue];W.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,W.__webglColorRenderbuffer[Ue]);const et=c.convert(Ge.format,Ge.colorSpace),Te=c.convert(Ge.type),Ae=I(Ge.internalFormat,et,Te,Ge.colorSpace,D.isXRRenderTarget===!0),Fe=B(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Fe,Ae,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,W.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),ke(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ie(o.TEXTURE_CUBE_MAP,b);for(let Ue=0;Ue<6;Ue++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)Ce(W.__webglFramebuffer[Ue][Ge],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ge);else Ce(W.__webglFramebuffer[Ue],D,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);M(b)&&x(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xe){for(let Ue=0,Ge=Se.length;Ue<Ge;Ue++){const et=Se[Ue],Te=r.get(et);let Ae=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ae,Te.__webglTexture),ie(Ae,et),Ce(W.__webglFramebuffer,D,et,o.COLOR_ATTACHMENT0+Ue,Ae,0),M(et)&&x(Ae)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,pe.__webglTexture),ie(Ue,b),b.mipmaps&&b.mipmaps.length>0)for(let Ge=0;Ge<b.mipmaps.length;Ge++)Ce(W.__webglFramebuffer[Ge],D,b,o.COLOR_ATTACHMENT0,Ue,Ge);else Ce(W.__webglFramebuffer,D,b,o.COLOR_ATTACHMENT0,Ue,0);M(b)&&x(Ue),i.unbindTexture()}D.depthBuffer&&ct(D)}function ht(D){const b=D.textures;for(let W=0,pe=b.length;W<pe;W++){const Se=b[W];if(M(Se)){const ue=P(D),Xe=r.get(Se).__webglTexture;i.bindTexture(ue,Xe),x(ue),i.unbindTexture()}}}const Dt=[],at=[];function St(D){if(D.samples>0){if(Gt(D)===!1){const b=D.textures,W=D.width,pe=D.height;let Se=o.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xe=r.get(D),Ue=b.length>1;if(Ue)for(let et=0;et<b.length;et++)i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ge=D.texture.mipmaps;Ge&&Ge.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let et=0;et<b.length;et++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[et]);const Te=r.get(b[et]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Te,0)}o.blitFramebuffer(0,0,W,pe,0,0,W,pe,Se,o.NEAREST),m===!0&&(Dt.length=0,at.length=0,Dt.push(o.COLOR_ATTACHMENT0+et),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(ue),at.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,at)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let et=0;et<b.length;et++){i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.RENDERBUFFER,Xe.__webglColorRenderbuffer[et]);const Te=r.get(b[et]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Xe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+et,o.TEXTURE_2D,Te,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const b=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function B(D){return Math.min(l.maxSamples,D.samples)}function Gt(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(D){const b=h.render.frame;_.get(D)!==b&&(_.set(D,b),D.update())}function It(D,b){const W=D.colorSpace,pe=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Ks&&W!==lr&&(Ot.getTransfer(W)===qt?(pe!==Pi||Se!==pi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",W)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=Z,this.setTexture2D=se,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=ne,this.rebindTextures=Jt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function NA(o,e){function i(r,l=lr){let c;const h=Ot.getTransfer(l);if(r===pi)return o.UNSIGNED_BYTE;if(r===Kd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Qd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===pv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===fv)return o.BYTE;if(r===hv)return o.SHORT;if(r===sl)return o.UNSIGNED_SHORT;if(r===Zd)return o.INT;if(r===Qi)return o.UNSIGNED_INT;if(r===Yi)return o.FLOAT;if(r===Ra)return o.HALF_FLOAT;if(r===mv)return o.ALPHA;if(r===gv)return o.RGB;if(r===Pi)return o.RGBA;if(r===Ca)return o.DEPTH_COMPONENT;if(r===Hr)return o.DEPTH_STENCIL;if(r===_v)return o.RED;if(r===Jd)return o.RED_INTEGER;if(r===Zs)return o.RG;if(r===$d)return o.RG_INTEGER;if(r===ep)return o.RGBA_INTEGER;if(r===jc||r===Zc||r===Kc||r===Qc)if(h===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Zc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===fd||r===hd||r===dd||r===pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===fd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===dd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===md||r===gd)return h===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===_d)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===vd)return c.COMPRESSED_R11_EAC;if(r===xd)return c.COMPRESSED_SIGNED_R11_EAC;if(r===yd)return c.COMPRESSED_RG11_EAC;if(r===Sd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Md||r===bd||r===Ed||r===Td||r===Ad||r===wd||r===Rd||r===Cd||r===Dd||r===Ud||r===Nd||r===Ld||r===Od||r===Id)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Md)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===bd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ed)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Td)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ad)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===wd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Rd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Cd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nd)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ld)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Id)return h===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Pd||r===zd||r===Bd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Pd)return h===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Fd||r===Hd||r===Gd||r===Vd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Fd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Hd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ol?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const LA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OA=`
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

}`;class IA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new $i({vertexShader:LA,fragmentShader:OA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Nt(new kr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Js{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,y=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",M=new IA,x={},P=i.getContextAttributes();let I=null,L=null;const z=[],F=[],O=new yt;let q=null;const w=new ii;w.viewport=new cn;const C=new ii;C.viewport=new cn;const V=[w,C],Z=new qM;let K=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let oe=z[J];return oe===void 0&&(oe=new Vh,z[J]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(J){let oe=z[J];return oe===void 0&&(oe=new Vh,z[J]=oe),oe.getGripSpace()},this.getHand=function(J){let oe=z[J];return oe===void 0&&(oe=new Vh,z[J]=oe),oe.getHandSpace()};function se(J){const oe=F.indexOf(J.inputSource);if(oe===-1)return;const Ce=z[oe];Ce!==void 0&&(Ce.update(J.inputSource,J.frame,p||h),Ce.dispatchEvent({type:J.type,data:J.inputSource}))}function N(){l.removeEventListener("select",se),l.removeEventListener("selectstart",se),l.removeEventListener("selectend",se),l.removeEventListener("squeeze",se),l.removeEventListener("squeezestart",se),l.removeEventListener("squeezeend",se),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",G);for(let J=0;J<z.length;J++){const oe=F[J];oe!==null&&(F[J]=null,z[J].disconnect(oe))}K=null,fe=null,M.reset();for(const J in x)delete x[J];e.setRenderTarget(I),S=null,y=null,g=null,l=null,L=null,Be.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",se),l.addEventListener("selectstart",se),l.addEventListener("selectend",se),l.addEventListener("squeeze",se),l.addEventListener("squeezestart",se),l.addEventListener("squeezeend",se),l.addEventListener("end",N),l.addEventListener("inputsourceschange",G),P.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,ke=null,He=null;P.depth&&(He=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=P.stencil?Hr:Ca,ke=P.stencil?ol:Qi);const ct={colorFormat:i.RGBA8,depthFormat:He,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(ct),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),L=new Ki(y.textureWidth,y.textureHeight,{format:Pi,type:pi,depthTexture:new ul(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Ce={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Ki(S.framebufferWidth,S.framebufferHeight,{format:Pi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Be.setContext(l),Be.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(J){for(let oe=0;oe<J.removed.length;oe++){const Ce=J.removed[oe],ke=F.indexOf(Ce);ke>=0&&(F[ke]=null,z[ke].disconnect(Ce))}for(let oe=0;oe<J.added.length;oe++){const Ce=J.added[oe];let ke=F.indexOf(Ce);if(ke===-1){for(let ct=0;ct<z.length;ct++)if(ct>=F.length){F.push(Ce),ke=ct;break}else if(F[ct]===null){F[ct]=Ce,ke=ct;break}if(ke===-1)break}const He=z[ke];He&&He.connect(Ce)}}const ne=new $,Me=new $;function be(J,oe,Ce){ne.setFromMatrixPosition(oe.matrixWorld),Me.setFromMatrixPosition(Ce.matrixWorld);const ke=ne.distanceTo(Me),He=oe.projectionMatrix.elements,ct=Ce.projectionMatrix.elements,Jt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),ht=(He[9]+1)/He[5],Dt=(He[9]-1)/He[5],at=(He[8]-1)/He[0],St=(ct[8]+1)/ct[0],B=Jt*at,Gt=Jt*St,Et=ke/(-at+St),It=Et*-at;if(oe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(It),J.translateZ(Et),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),He[10]===-1)J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ye=Jt+Et,D=pt+Et,b=B-It,W=Gt+(ke-It),pe=ht*pt/D*Ye,Se=Dt*pt/D*Ye;J.projectionMatrix.makePerspective(b,W,pe,Se,Ye,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function U(J,oe){oe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(oe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let oe=J.near,Ce=J.far;M.texture!==null&&(M.depthNear>0&&(oe=M.depthNear),M.depthFar>0&&(Ce=M.depthFar)),Z.near=C.near=w.near=oe,Z.far=C.far=w.far=Ce,(K!==Z.near||fe!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),K=Z.near,fe=Z.far),Z.layers.mask=J.layers.mask|6,w.layers.mask=Z.layers.mask&3,C.layers.mask=Z.layers.mask&5;const ke=J.parent,He=Z.cameras;U(Z,ke);for(let ct=0;ct<He.length;ct++)U(He[ct],ke);He.length===2?be(Z,w,C):Z.projectionMatrix.copy(w.projectionMatrix),ie(J,Z,ke)};function ie(J,oe,Ce){Ce===null?J.matrix.copy(oe.matrixWorld):(J.matrix.copy(Ce.matrixWorld),J.matrix.invert(),J.matrix.multiply(oe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(oe.projectionMatrix),J.projectionMatrixInverse.copy(oe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=nu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(J){m=J,y!==null&&(y.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(J){return x[J]};let ve=null;function Re(J,oe){if(_=oe.getViewerPose(p||h),E=oe,_!==null){const Ce=_.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let ke=!1;Ce.length!==Z.cameras.length&&(Z.cameras.length=0,ke=!0);for(let pt=0;pt<Ce.length;pt++){const ht=Ce[pt];let Dt=null;if(S!==null)Dt=S.getViewport(ht);else{const St=g.getViewSubImage(y,ht);Dt=St.viewport,pt===0&&(e.setRenderTargetTextures(L,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(L))}let at=V[pt];at===void 0&&(at=new ii,at.layers.enable(pt),at.viewport=new cn,V[pt]=at),at.matrix.fromArray(ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),pt===0&&(Z.matrix.copy(at.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ke===!0&&Z.cameras.push(at)}const He=l.enabledFeatures;if(He&&He.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const pt=g.getDepthInformation(Ce[0]);pt&&pt.isValid&&pt.texture&&M.init(pt,l.renderState)}if(He&&He.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let pt=0;pt<Ce.length;pt++){const ht=Ce[pt].camera;if(ht){let Dt=x[ht];Dt||(Dt=new Dv,x[ht]=Dt);const at=g.getCameraImage(ht);Dt.sourceTexture=at}}}}for(let Ce=0;Ce<z.length;Ce++){const ke=F[Ce],He=z[Ce];ke!==null&&He!==void 0&&He.update(ke,oe,p||h)}ve&&ve(J,oe),oe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:oe}),E=null}const Be=new Uv;Be.setAnimationLoop(Re),this.setAnimationLoop=function(J){ve=J},this.dispose=function(){}}}const Ir=new Ji,zA=new sn;function BA(o,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function r(M,x){x.color.getRGB(M.fogColor.value,Tv(o)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,P,I,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x)):x.isMeshStandardMaterial?(c(M,x),y(M,x),x.isMeshPhysicalMaterial&&S(M,x,L)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),R(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(h(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,P,I):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===ai&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===ai&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=e.get(x),I=P.envMap,L=P.envMapRotation;I&&(M.envMap.value=I,Ir.copy(L),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),M.envMapRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Ir)),M.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function h(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,I){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=I*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function y(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ai&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function R(M,x){const P=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function FA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,I){const L=I.program;r.uniformBlockBinding(P,L)}function p(P,I){let L=l[P.id];L===void 0&&(E(P),L=_(P),l[P.id]=L,P.addEventListener("dispose",M));const z=I.program;r.updateUBOMapping(P,z);const F=e.render.frame;c[P.id]!==F&&(y(P),c[P.id]=F)}function _(P){const I=g();P.__bindingPointIndex=I;const L=o.createBuffer(),z=P.__size,F=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,L),o.bufferData(o.UNIFORM_BUFFER,z,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,L),L}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(P){const I=l[P.id],L=P.uniforms,z=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let F=0,O=L.length;F<O;F++){const q=Array.isArray(L[F])?L[F]:[L[F]];for(let w=0,C=q.length;w<C;w++){const V=q[w];if(S(V,F,w,z)===!0){const Z=V.__offset,K=Array.isArray(V.value)?V.value:[V.value];let fe=0;for(let se=0;se<K.length;se++){const N=K[se],G=R(N);typeof N=="number"||typeof N=="boolean"?(V.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,Z+fe,V.__data)):N.isMatrix3?(V.__data[0]=N.elements[0],V.__data[1]=N.elements[1],V.__data[2]=N.elements[2],V.__data[3]=0,V.__data[4]=N.elements[3],V.__data[5]=N.elements[4],V.__data[6]=N.elements[5],V.__data[7]=0,V.__data[8]=N.elements[6],V.__data[9]=N.elements[7],V.__data[10]=N.elements[8],V.__data[11]=0):(N.toArray(V.__data,fe),fe+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(P,I,L,z){const F=P.value,O=I+"_"+L;if(z[O]===void 0)return typeof F=="number"||typeof F=="boolean"?z[O]=F:z[O]=F.clone(),!0;{const q=z[O];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return z[O]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function E(P){const I=P.uniforms;let L=0;const z=16;for(let O=0,q=I.length;O<q;O++){const w=Array.isArray(I[O])?I[O]:[I[O]];for(let C=0,V=w.length;C<V;C++){const Z=w[C],K=Array.isArray(Z.value)?Z.value:[Z.value];for(let fe=0,se=K.length;fe<se;fe++){const N=K[fe],G=R(N),ne=L%z,Me=ne%G.boundary,be=ne+Me;L+=Me,be!==0&&z-be<G.storage&&(L+=z-be),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=L,L+=G.storage}}}const F=L%z;return F>0&&(L+=z-F),P.__size=L,P.__cache={},this}function R(P){const I={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(I.boundary=4,I.storage=4):P.isVector2?(I.boundary=8,I.storage=8):P.isVector3||P.isColor?(I.boundary=16,I.storage=12):P.isVector4?(I.boundary=16,I.storage=16):P.isMatrix3?(I.boundary=48,I.storage=48):P.isMatrix4?(I.boundary=64,I.storage=64):P.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",P),I}function M(P){const I=P.target;I.removeEventListener("dispose",M);const L=h.indexOf(I.__bindingPointIndex);h.splice(L,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function x(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},c={}}return{bind:m,update:p,dispose:x}}const HA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function GA(){return ki===null&&(ki=new RM(HA,16,16,Zs,Ra),ki.name="DFG_LUT",ki.minFilter=Gn,ki.magFilter=Gn,ki.wrapS=Ta,ki.wrapT=Ta,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class VA{constructor(e={}){const{canvas:i=$S(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:S=pi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const R=S,M=new Set([ep,$d,Jd]),x=new Set([pi,Qi,sl,ol,Kd,Qd]),P=new Uint32Array(4),I=new Int32Array(4);let L=null,z=null;const F=[],O=[];let q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let C=!1;this._outputColorSpace=Ti;let V=0,Z=0,K=null,fe=-1,se=null;const N=new cn,G=new cn;let ne=null;const Me=new wt(0);let be=0,U=i.width,ie=i.height,ve=1,Re=null,Be=null;const J=new cn(0,0,U,ie),oe=new cn(0,0,U,ie);let Ce=!1;const ke=new rp;let He=!1,ct=!1;const Jt=new sn,pt=new $,ht=new cn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function St(){return K===null?ve:1}let B=r;function Gt(A,Y){return i.getContext(A,Y)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${jd}`),i.addEventListener("webglcontextlost",De,!1),i.addEventListener("webglcontextrestored",tt,!1),i.addEventListener("webglcontextcreationerror",st,!1),B===null){const Y="webgl2";if(B=Gt(Y,A),B===null)throw Gt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Lt("WebGLRenderer: "+A.message),A}let Et,It,Ye,D,b,W,pe,Se,ue,Xe,Ue,Ge,et,Te,Ae,Fe,Ie,Ne,ut,X,Le,we,ye,de;function he(){Et=new GT(B),Et.init(),we=new NA(B,Et),It=new NT(B,Et,e,we),Ye=new DA(B,Et),It.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),D=new XT(B),b=new mA,W=new UA(B,Et,Ye,b,It,we,D),pe=new OT(w),Se=new HT(w),ue=new jM(B),ye=new DT(B,ue),Xe=new VT(B,ue,D,ye),Ue=new qT(B,Xe,ue,D),ut=new WT(B,It,W),Fe=new LT(b),Ge=new pA(w,pe,Se,Et,It,ye,Fe),et=new BA(w,b),Te=new _A,Ae=new bA(Et),Ne=new CT(w,pe,Se,Ye,Ue,E,m),Ie=new RA(w,Ue,It),de=new FA(B,D,It,Ye),X=new UT(B,Et,D),Le=new kT(B,Et,D),D.programs=Ge.programs,w.capabilities=It,w.extensions=Et,w.properties=b,w.renderLists=Te,w.shadowMap=Ie,w.state=Ye,w.info=D}he(),R!==pi&&(q=new jT(R,i.width,i.height,l,c));const Ee=new PA(w,B);this.xr=Ee,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(U,ie,!1))},this.getSize=function(A){return A.set(U,ie)},this.setSize=function(A,Y,le=!0){if(Ee.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ie=Y,i.width=Math.floor(A*ve),i.height=Math.floor(Y*ve),le===!0&&(i.style.width=A+"px",i.style.height=Y+"px"),q!==null&&q.setSize(i.width,i.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(U*ve,ie*ve).floor()},this.setDrawingBufferSize=function(A,Y,le){U=A,ie=Y,ve=le,i.width=Math.floor(A*le),i.height=Math.floor(Y*le),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,Y,le,ae){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,Y,le,ae),Ye.viewport(N.copy(J).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,Y,le,ae){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,Y,le,ae),Ye.scissor(G.copy(oe).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(A){Ye.setScissorTest(Ce=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){Be=A},this.getClearColor=function(A){return A.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,le=!0){let ae=0;if(A){let Q=!1;if(K!==null){const Oe=K.texture.format;Q=M.has(Oe)}if(Q){const Oe=K.texture.type,Ve=x.has(Oe),Pe=Ne.getClearColor(),We=Ne.getClearAlpha(),je=Pe.r,$e=Pe.g,Ze=Pe.b;Ve?(P[0]=je,P[1]=$e,P[2]=Ze,P[3]=We,B.clearBufferuiv(B.COLOR,0,P)):(I[0]=je,I[1]=$e,I[2]=Ze,I[3]=We,B.clearBufferiv(B.COLOR,0,I))}else ae|=B.COLOR_BUFFER_BIT}Y&&(ae|=B.DEPTH_BUFFER_BIT),le&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",De,!1),i.removeEventListener("webglcontextrestored",tt,!1),i.removeEventListener("webglcontextcreationerror",st,!1),Ne.dispose(),Te.dispose(),Ae.dispose(),b.dispose(),pe.dispose(),Se.dispose(),Ue.dispose(),ye.dispose(),de.dispose(),Ge.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Bi),Ee.removeEventListener("sessionend",ta),Zn.stop()};function De(A){A.preventDefault(),tu("WebGLRenderer: Context Lost."),C=!0}function tt(){tu("WebGLRenderer: Context Restored."),C=!1;const A=D.autoReset,Y=Ie.enabled,le=Ie.autoUpdate,ae=Ie.needsUpdate,Q=Ie.type;he(),D.autoReset=A,Ie.enabled=Y,Ie.autoUpdate=le,Ie.needsUpdate=ae,Ie.type=Q}function st(A){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function mt(A){const Y=A.target;Y.removeEventListener("dispose",mt),ft(Y)}function ft(A){Ut(A),b.remove(A)}function Ut(A){const Y=b.get(A).programs;Y!==void 0&&(Y.forEach(function(le){Ge.releaseProgram(le)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,le,ae,Q,Oe){Y===null&&(Y=Dt);const Ve=Q.isMesh&&Q.matrixWorld.determinant()<0,Pe=hr(A,Y,le,ae,Q);Ye.setMaterial(ae,Ve);let We=le.index,je=1;if(ae.wireframe===!0){if(We=Xe.getWireframeAttribute(le),We===void 0)return;je=2}const $e=le.drawRange,Ze=le.attributes.position;let nt=$e.start*je,Bt=($e.start+$e.count)*je;Oe!==null&&(nt=Math.max(nt,Oe.start*je),Bt=Math.min(Bt,(Oe.start+Oe.count)*je)),We!==null?(nt=Math.max(nt,0),Bt=Math.min(Bt,We.count)):Ze!=null&&(nt=Math.max(nt,0),Bt=Math.min(Bt,Ze.count));const an=Bt-nt;if(an<0||an===1/0)return;ye.setup(Q,ae,Pe,le,We);let $t,Vt=X;if(We!==null&&($t=ue.get(We),Vt=Le,Vt.setIndex($t)),Q.isMesh)ae.wireframe===!0?(Ye.setLineWidth(ae.wireframeLinewidth*St()),Vt.setMode(B.LINES)):Vt.setMode(B.TRIANGLES);else if(Q.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*St()),Q.isLineSegments?Vt.setMode(B.LINES):Q.isLineLoop?Vt.setMode(B.LINE_LOOP):Vt.setMode(B.LINE_STRIP)}else Q.isPoints?Vt.setMode(B.POINTS):Q.isSprite&&Vt.setMode(B.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)cl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Vt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Vt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Qe=Q._multiDrawStarts,Ft=Q._multiDrawCounts,rt=Q._multiDrawCount,Cn=We?ue.get(We).bytesPerElement:1,na=b.get(ae).currentProgram.getUniforms();for(let Dn=0;Dn<rt;Dn++)na.setValue(B,"_gl_DrawID",Dn),Vt.render(Qe[Dn]/Cn,Ft[Dn])}else if(Q.isInstancedMesh)Vt.renderInstances(nt,an,Q.count);else if(le.isInstancedBufferGeometry){const Qe=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ft=Math.min(le.instanceCount,Qe);Vt.renderInstances(nt,an,Ft)}else Vt.render(nt,an)};function _n(A,Y,le){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=ai,A.needsUpdate=!0,qr(A,Y,le),A.side=fr,A.needsUpdate=!0,qr(A,Y,le),A.side=Wi):qr(A,Y,le)}this.compile=function(A,Y,le=null){le===null&&(le=A),z=Ae.get(le),z.init(Y),O.push(z),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),A!==le&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(z.pushLight(Q),Q.castShadow&&z.pushShadow(Q))}),z.setupLights();const ae=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Oe=Q.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const Pe=Oe[Ve];_n(Pe,le,Q),ae.add(Pe)}else _n(Oe,le,Q),ae.add(Oe)}),z=O.pop(),ae},this.compileAsync=function(A,Y,le=null){const ae=this.compile(A,Y,le);return new Promise(Q=>{function Oe(){if(ae.forEach(function(Ve){b.get(Ve).currentProgram.isReady()&&ae.delete(Ve)}),ae.size===0){Q(A);return}setTimeout(Oe,10)}Et.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let vn=null;function ea(A){vn&&vn(A)}function Bi(){Zn.stop()}function ta(){Zn.start()}const Zn=new Uv;Zn.setAnimationLoop(ea),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){vn=A,Ee.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},Ee.addEventListener("sessionstart",Bi),Ee.addEventListener("sessionend",ta),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;const le=Ee.enabled===!0&&Ee.isPresenting===!0,ae=q!==null&&(K===null||le)&&q.begin(w,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(Y),Y=Ee.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Y,K),z=Ae.get(A,O.length),z.init(Y),O.push(z),Jt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),ke.setFromProjectionMatrix(Jt,ji,Y.reversedDepth),ct=this.localClippingEnabled,He=Fe.init(this.clippingPlanes,ct),L=Te.get(A,F.length),L.init(),F.push(L),Ee.enabled===!0&&Ee.isPresenting===!0){const Ve=w.xr.getDepthSensingMesh();Ve!==null&&An(Ve,Y,-1/0,w.sortObjects)}An(A,Y,0,w.sortObjects),L.finish(),w.sortObjects===!0&&L.sort(Re,Be),at=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,at&&Ne.addToRenderList(L,A),this.info.render.frame++,He===!0&&Fe.beginShadows();const Q=z.state.shadowsArray;if(Ie.render(Q,A,Y),He===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&q.hasRenderPass())===!1){const Ve=L.opaque,Pe=L.transmissive;if(z.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(Pe.length>0)for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je];xn(Ve,Pe,A,Ze)}at&&Ne.render(A);for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je];en(L,A,Ze,Ze.viewport)}}else Pe.length>0&&xn(Ve,Pe,A,Y),at&&Ne.render(A),en(L,A,Y)}K!==null&&Z===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),ae&&q.end(w),A.isScene===!0&&A.onAfterRender(w,A,Y),ye.resetDefaultState(),fe=-1,se=null,O.pop(),O.length>0?(z=O[O.length-1],He===!0&&Fe.setGlobalState(w.clippingPlanes,z.state.camera)):z=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function An(A,Y,le,ae){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLight)z.pushLight(A),A.castShadow&&z.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ae&&ht.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Jt);const Ve=Ue.update(A),Pe=A.material;Pe.visible&&L.push(A,Ve,Pe,le,ht.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Ve=Ue.update(A),Pe=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ht.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ht.copy(Ve.boundingSphere.center)),ht.applyMatrix4(A.matrixWorld).applyMatrix4(Jt)),Array.isArray(Pe)){const We=Ve.groups;for(let je=0,$e=We.length;je<$e;je++){const Ze=We[je],nt=Pe[Ze.materialIndex];nt&&nt.visible&&L.push(A,Ve,nt,le,ht.z,Ze)}}else Pe.visible&&L.push(A,Ve,Pe,le,ht.z,null)}}const Oe=A.children;for(let Ve=0,Pe=Oe.length;Ve<Pe;Ve++)An(Oe[Ve],Y,le,ae)}function en(A,Y,le,ae){const{opaque:Q,transmissive:Oe,transparent:Ve}=A;z.setupLightsView(le),He===!0&&Fe.setGlobalState(w.clippingPlanes,le),ae&&Ye.viewport(N.copy(ae)),Q.length>0&&Ri(Q,Y,le),Oe.length>0&&Ri(Oe,Y,le),Ve.length>0&&Ri(Ve,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function xn(A,Y,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(z.state.transmissionRenderTarget[ae.id]===void 0){const nt=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");z.state.transmissionRenderTarget[ae.id]=new Ki(1,1,{generateMipmaps:!0,type:nt?Ra:pi,minFilter:Fr,samples:It.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Oe=z.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||N;Oe.setSize(Ve.z*w.transmissionResolutionScale,Ve.w*w.transmissionResolutionScale);const Pe=w.getRenderTarget(),We=w.getActiveCubeFace(),je=w.getActiveMipmapLevel();w.setRenderTarget(Oe),w.getClearColor(Me),be=w.getClearAlpha(),be<1&&w.setClearColor(16777215,.5),w.clear(),at&&Ne.render(le);const $e=w.toneMapping;w.toneMapping=Zi;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),z.setupLightsView(ae),He===!0&&Fe.setGlobalState(w.clippingPlanes,ae),Ri(A,le,ae),W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe),Et.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Bt=0,an=Y.length;Bt<an;Bt++){const $t=Y[Bt],{object:Vt,geometry:Qe,material:Ft,group:rt}=$t;if(Ft.side===Wi&&Vt.layers.test(ae.layers)){const Cn=Ft.side;Ft.side=ai,Ft.needsUpdate=!0,Wr(Vt,le,ae,Qe,Ft,rt),Ft.side=Cn,Ft.needsUpdate=!0,nt=!0}}nt===!0&&(W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe))}w.setRenderTarget(Pe,We,je),w.setClearColor(Me,be),Ze!==void 0&&(ae.viewport=Ze),w.toneMapping=$e}function Ri(A,Y,le){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Oe=A.length;Q<Oe;Q++){const Ve=A[Q],{object:Pe,geometry:We,group:je}=Ve;let $e=Ve.material;$e.allowOverride===!0&&ae!==null&&($e=ae),Pe.layers.test(le.layers)&&Wr(Pe,Y,le,We,$e,je)}}function Wr(A,Y,le,ae,Q,Oe){A.onBeforeRender(w,Y,le,ae,Q,Oe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(w,Y,le,ae,A,Oe),Q.transparent===!0&&Q.side===Wi&&Q.forceSinglePass===!1?(Q.side=ai,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,ae,Q,A,Oe),Q.side=fr,Q.needsUpdate=!0,w.renderBufferDirect(le,Y,ae,Q,A,Oe),Q.side=Wi):w.renderBufferDirect(le,Y,ae,Q,A,Oe),A.onAfterRender(w,Y,le,ae,Q,Oe)}function qr(A,Y,le){Y.isScene!==!0&&(Y=Dt);const ae=b.get(A),Q=z.state.lights,Oe=z.state.shadowsArray,Ve=Q.state.version,Pe=Ge.getParameters(A,Q.state,Oe,Y,le),We=Ge.getProgramCacheKey(Pe);let je=ae.programs;ae.environment=A.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(A.isMeshStandardMaterial?Se:pe).get(A.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,je===void 0&&(A.addEventListener("dispose",mt),je=new Map,ae.programs=je);let $e=je.get(We);if($e!==void 0){if(ae.currentProgram===$e&&ae.lightsStateVersion===Ve)return no(A,Pe),$e}else Pe.uniforms=Ge.getUniforms(A),A.onBeforeCompile(Pe,w),$e=Ge.acquireProgram(Pe,We),je.set(We,$e),ae.uniforms=Pe.uniforms;const Ze=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),no(A,Pe),ae.needsLights=Da(A),ae.lightsStateVersion=Ve,ae.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),ae.currentProgram=$e,ae.uniformsList=null,$e}function pl(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Jc.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function no(A,Y){const le=b.get(A);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function hr(A,Y,le,ae,Q){Y.isScene!==!0&&(Y=Dt),W.resetTextureUnits();const Oe=Y.fog,Ve=ae.isMeshStandardMaterial?Y.environment:null,Pe=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ks,We=(ae.isMeshStandardMaterial?Se:pe).get(ae.envMap||Ve),je=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,$e=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!le.morphAttributes.position,nt=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let an=Zi;ae.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(an=w.toneMapping);const $t=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Vt=$t!==void 0?$t.length:0,Qe=b.get(ae),Ft=z.state.lights;if(He===!0&&(ct===!0||A!==se)){const Nn=A===se&&ae.id===fe;Fe.setState(ae,A,Nn)}let rt=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ft.state.version||Qe.outputColorSpace!==Pe||Q.isBatchedMesh&&Qe.batching===!1||!Q.isBatchedMesh&&Qe.batching===!0||Q.isBatchedMesh&&Qe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Qe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Qe.instancing===!1||!Q.isInstancedMesh&&Qe.instancing===!0||Q.isSkinnedMesh&&Qe.skinning===!1||!Q.isSkinnedMesh&&Qe.skinning===!0||Q.isInstancedMesh&&Qe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Qe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Qe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Qe.instancingMorph===!1&&Q.morphTexture!==null||Qe.envMap!==We||ae.fog===!0&&Qe.fog!==Oe||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Fe.numPlanes||Qe.numIntersection!==Fe.numIntersection)||Qe.vertexAlphas!==je||Qe.vertexTangents!==$e||Qe.morphTargets!==Ze||Qe.morphNormals!==nt||Qe.morphColors!==Bt||Qe.toneMapping!==an||Qe.morphTargetsCount!==Vt)&&(rt=!0):(rt=!0,Qe.__version=ae.version);let Cn=Qe.currentProgram;rt===!0&&(Cn=qr(ae,Y,Q));let na=!1,Dn=!1,mi=!1;const kt=Cn.getUniforms(),Un=Qe.uniforms;if(Ye.useProgram(Cn.program)&&(na=!0,Dn=!0,mi=!0),ae.id!==fe&&(fe=ae.id,Dn=!0),na||se!==A){Ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),kt.setValue(B,"projectionMatrix",A.projectionMatrix),kt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Ln=kt.map.cameraPosition;Ln!==void 0&&Ln.setValue(B,pt.setFromMatrixPosition(A.matrixWorld)),It.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&kt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),se!==A&&(se=A,Dn=!0,mi=!0)}if(Qe.needsLights&&(Ft.state.directionalShadowMap.length>0&&kt.setValue(B,"directionalShadowMap",Ft.state.directionalShadowMap,W),Ft.state.spotShadowMap.length>0&&kt.setValue(B,"spotShadowMap",Ft.state.spotShadowMap,W),Ft.state.pointShadowMap.length>0&&kt.setValue(B,"pointShadowMap",Ft.state.pointShadowMap,W)),Q.isSkinnedMesh){kt.setOptional(B,Q,"bindMatrix"),kt.setOptional(B,Q,"bindMatrixInverse");const Nn=Q.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),kt.setValue(B,"boneTexture",Nn.boneTexture,W))}Q.isBatchedMesh&&(kt.setOptional(B,Q,"batchingTexture"),kt.setValue(B,"batchingTexture",Q._matricesTexture,W),kt.setOptional(B,Q,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",Q._indirectTexture,W),kt.setOptional(B,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",Q._colorsTexture,W));const yn=le.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&ut.update(Q,le,Cn),(Dn||Qe.receiveShadow!==Q.receiveShadow)&&(Qe.receiveShadow=Q.receiveShadow,kt.setValue(B,"receiveShadow",Q.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(Un.envMap.value=We,Un.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(Un.envMapIntensity.value=Y.environmentIntensity),Un.dfgLUT!==void 0&&(Un.dfgLUT.value=GA()),Dn&&(kt.setValue(B,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&io(Un,mi),Oe&&ae.fog===!0&&et.refreshFogUniforms(Un,Oe),et.refreshMaterialUniforms(Un,ae,ve,ie,z.state.transmissionRenderTarget[A.id]),Jc.upload(B,pl(Qe),Un,W)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jc.upload(B,pl(Qe),Un,W),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&kt.setValue(B,"center",Q.center),kt.setValue(B,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(B,"normalMatrix",Q.normalMatrix),kt.setValue(B,"modelMatrix",Q.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Nn=ae.uniformsGroups;for(let Ln=0,Yr=Nn.length;Ln<Yr;Ln++){const Ci=Nn[Ln];de.update(Ci,Cn),de.bind(Ci,Cn)}}return Cn}function io(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Da(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,Y,le){const ae=b.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=Y,b.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const le=b.get(A);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Ua=B.createFramebuffer();this.setRenderTarget=function(A,Y=0,le=0){K=A,V=Y,Z=le;let ae=null,Q=!1,Oe=!1;if(A){const Pe=b.get(A);if(Pe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(B.FRAMEBUFFER,Pe.__webglFramebuffer),N.copy(A.viewport),G.copy(A.scissor),ne=A.scissorTest,Ye.viewport(N),Ye.scissor(G),Ye.setScissorTest(ne),fe=-1;return}else if(Pe.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Pe.__hasExternalTextures)W.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $e=A.depthTexture;if(Pe.__boundDepthTexture!==$e){if($e!==null&&b.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const je=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[Y])?ae=je[Y][le]:ae=je[Y],Q=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ae=b.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?ae=je[le]:ae=je,N.copy(A.viewport),G.copy(A.scissor),ne=A.scissorTest}else N.copy(J).multiplyScalar(ve).floor(),G.copy(oe).multiplyScalar(ve).floor(),ne=Ce;if(le!==0&&(ae=Ua),Ye.bindFramebuffer(B.FRAMEBUFFER,ae)&&Ye.drawBuffers(A,ae),Ye.viewport(N),Ye.scissor(G),Ye.setScissorTest(ne),Q){const Pe=b.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,le)}else if(Oe){const Pe=Y;for(let We=0;We<A.textures.length;We++){const je=b.get(A.textures[We]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+We,je.__webglTexture,le,Pe)}}else if(A!==null&&le!==0){const Pe=b.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,le)}fe=-1},this.readRenderTargetPixels=function(A,Y,le,ae,Q,Oe,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){Ye.bindFramebuffer(B.FRAMEBUFFER,We);try{const je=A.textures[Pe],$e=je.format,Ze=je.type;if(!It.textureFormatReadable($e)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Ze)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-ae&&le>=0&&le<=A.height-Q&&(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(Y,le,ae,Q,we.convert($e),we.convert(Ze),Oe))}finally{const je=K!==null?b.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(A,Y,le,ae,Q,Oe,Ve,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(Y>=0&&Y<=A.width-ae&&le>=0&&le<=A.height-Q){Ye.bindFramebuffer(B.FRAMEBUFFER,We);const je=A.textures[Pe],$e=je.format,Ze=je.type;if(!It.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.bufferData(B.PIXEL_PACK_BUFFER,Oe.byteLength,B.STREAM_READ),A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),B.readPixels(Y,le,ae,Q,we.convert($e),we.convert(Ze),0);const Bt=K!==null?b.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Bt);const an=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await eM(B,an,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Oe),B.deleteBuffer(nt),B.deleteSync(an),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,le=0){const ae=Math.pow(2,-le),Q=Math.floor(A.image.width*ae),Oe=Math.floor(A.image.height*ae),Ve=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;W.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,le,0,0,Ve,Pe,Q,Oe),Ye.unbindTexture()};const dr=B.createFramebuffer(),Na=B.createFramebuffer();this.copyTextureToTexture=function(A,Y,le=null,ae=null,Q=0,Oe=null){Oe===null&&(Q!==0?(cl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=Q,Q=0):Oe=0);let Ve,Pe,We,je,$e,Ze,nt,Bt,an;const $t=A.isCompressedTexture?A.mipmaps[Oe]:A.image;if(le!==null)Ve=le.max.x-le.min.x,Pe=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,je=le.min.x,$e=le.min.y,Ze=le.isBox3?le.min.z:0;else{const yn=Math.pow(2,-Q);Ve=Math.floor($t.width*yn),Pe=Math.floor($t.height*yn),A.isDataArrayTexture?We=$t.depth:A.isData3DTexture?We=Math.floor($t.depth*yn):We=1,je=0,$e=0,Ze=0}ae!==null?(nt=ae.x,Bt=ae.y,an=ae.z):(nt=0,Bt=0,an=0);const Vt=we.convert(Y.format),Qe=we.convert(Y.type);let Ft;Y.isData3DTexture?(W.setTexture3D(Y,0),Ft=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ft=B.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ft=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const rt=B.getParameter(B.UNPACK_ROW_LENGTH),Cn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),na=B.getParameter(B.UNPACK_SKIP_PIXELS),Dn=B.getParameter(B.UNPACK_SKIP_ROWS),mi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,$t.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,$e),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const kt=A.isDataArrayTexture||A.isData3DTexture,Un=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const yn=b.get(A),Nn=b.get(Y),Ln=b.get(yn.__renderTarget),Yr=b.get(Nn.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,Ln.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Yr.__webglFramebuffer);for(let Ci=0;Ci<We;Ci++)kt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(A).__webglTexture,Q,Ze+Ci),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Oe,an+Ci)),B.blitFramebuffer(je,$e,Ve,Pe,nt,Bt,Ve,Pe,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||b.has(A)){const yn=b.get(A),Nn=b.get(Y);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,dr),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Na);for(let Ln=0;Ln<We;Ln++)kt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,yn.__webglTexture,Q,Ze+Ln):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,yn.__webglTexture,Q),Un?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nn.__webglTexture,Oe,an+Ln):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Nn.__webglTexture,Oe),Q!==0?B.blitFramebuffer(je,$e,Ve,Pe,nt,Bt,Ve,Pe,B.COLOR_BUFFER_BIT,B.NEAREST):Un?B.copyTexSubImage3D(Ft,Oe,nt,Bt,an+Ln,je,$e,Ve,Pe):B.copyTexSubImage2D(Ft,Oe,nt,Bt,je,$e,Ve,Pe);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Un?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ft,Oe,nt,Bt,an,Ve,Pe,We,Vt,Qe,$t.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Ft,Oe,nt,Bt,an,Ve,Pe,We,Vt,$t.data):B.texSubImage3D(Ft,Oe,nt,Bt,an,Ve,Pe,We,Vt,Qe,$t):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Oe,nt,Bt,Ve,Pe,Vt,Qe,$t.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Oe,nt,Bt,$t.width,$t.height,Vt,$t.data):B.texSubImage2D(B.TEXTURE_2D,Oe,nt,Bt,Ve,Pe,Vt,Qe,$t);B.pixelStorei(B.UNPACK_ROW_LENGTH,rt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Cn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,na),B.pixelStorei(B.UNPACK_SKIP_ROWS,Dn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,mi),Oe===0&&Y.generateMipmaps&&B.generateMipmap(Ft),Ye.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){V=0,Z=0,K=null,Ye.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ot._getUnpackColorSpace()}}const kA=()=>{const o=new qn,e=2;o.scale.set(e,e,e);const i=new ni({color:6045747,roughness:1}),r=new Nt(new Yn(.15,6,.15),i);r.position.y=3,o.add(r);const l=new Nt(new Yn(3.5,.15,.15),i);l.position.y=4.8,l.rotation.z=(Math.random()-.5)*.4,o.add(l);const c=new ni({color:12759680,roughness:1}),h=new Nt(new Yn(.8,1,.7),c);h.position.y=5.4,o.add(h);const d=new Gr({color:0}),m=new eo(.03,.03,.4),p=(E,R,M)=>{const x=new qn;x.position.set(E,R,M);const P=new Nt(m,d),I=new Nt(m,d);return P.rotation.z=Math.PI/4,I.rotation.z=-Math.PI/4,x.add(P),x.add(I),x};o.add(p(-.2,5.45,.36)),o.add(p(.2,5.45,.36));const _=new Nt(new dl(.2,.03,8,8,Math.PI),d);_.rotation.x=Math.PI,_.position.set(0,5.2,.36),o.add(_);const g=new ru(1.2,4.5,5,1,!0),y=new ni({color:4865073,side:Wi,roughness:1}),S=new Nt(g,y);return S.position.y=3.2,S.scale.z=.5,o.add(S),o},XA=()=>{const o=new qn,e=new eo(.05,.1,4,5),i=new ni({color:5597999,roughness:.8}),r=new Nt(e,i);r.position.y=0,o.add(r);const l=new kr(.3,1.5);l.translate(0,.75,0);for(let h=0;h<4;h++){const d=new Nt(l,i);d.position.y=Math.random()*2-1,d.rotation.y=Math.random()*Math.PI*2,d.rotation.z=Math.PI/4,o.add(d)}const c=.8+Math.random()*.4;return o.scale.set(c,c,c),o},WA=()=>{const o=new qn,e=new ni({color:8947848,roughness:.9}),i=new ni({color:2263074,roughness:1}),r=new Nt(new Yn(1.5,1,1.5),e);r.position.y=.5,o.add(r);const l=2+Math.random()*4,c=Math.floor(l);for(let h=0;h<c;h++){const d=new eo(.6,.6,1,8),m=new Nt(d,e);if(m.position.y=1.5+h,m.position.x=(Math.random()-.5)*.1,m.position.z=(Math.random()-.5)*.1,m.rotation.y=Math.random()*Math.PI,o.add(m),Math.random()>.6){const p=new Nt(new dl(.7,.05,4,6),i);p.rotation.x=Math.PI/2,p.position.y=1.5+h,p.rotation.z=Math.random()-.5,o.add(p)}}if(Math.random()>.3){const h=new Nt(new Yn(1.6,.4,1.6),e);h.position.y=1.5+c,h.rotation.z=(Math.random()-.5)*.2,o.add(h)}return o},qA=({onExit:o})=>{const e=_t.useRef(),[i,r]=_t.useState(100),[l,c]=_t.useState(!1),[h,d]=_t.useState("AWAITING INPUT..."),[m,p]=_t.useState(""),[_,g]=_t.useState(0),[y,S]=_t.useState(!1),[E,R]=_t.useState(100),[M,x]=_t.useState(!0),P=_t.useRef([]),I=_t.useRef(0),L=_t.useRef(!1),z=_t.useRef("PARTY"),F=_t.useRef(!1),O=_t.useRef(null),q=_t.useRef(null),w=_t.useRef([]),C=_t.useRef(new qn),V=_t.useRef(new qn),Z=_t.useRef(new qn),K=_t.useRef({forward:!1,backward:!1,left:!1,right:!1,jump:!1,run:!1}),fe=_t.useRef(new $),se=10;_t.useRef([]);const N=_t.useRef([]),G=_t.useRef([]),ne=_t.useRef([]),Me=_t.useRef({}),be=_t.useRef(null),U=_t.useRef(!1),ie=()=>{if(l)return;const J="/horror/",oe={PARTY:new Audio(`${J}audio/party_ambience.mp3`),CORNFIELD:new Audio(`${J}audio/cornfield_ambience.mp3`),RUINS:new Audio(`${J}audio/ruins_ambience.mp3`),CHASE:new Audio(`${J}audio/chase_music.mp3`)};oe.PARTY.loop=!0,oe.CORNFIELD.loop=!0,oe.RUINS.loop=!0,oe.CHASE.loop=!0,oe.PARTY.volume=.6,oe.CORNFIELD.volume=.7,oe.RUINS.volume=.8,oe.CHASE.volume=1,Me.current=oe,c(!0)},ve=J=>{Object.values(Me.current).forEach(Ce=>{Ce!==Me.current[J]&&(Ce.pause(),Ce.currentTime=0)});const oe=Me.current[J];oe&&(oe.play().catch(Ce=>console.log("Audio play failed:",Ce)),be.current=J)},Re=J=>{x(!1),ie(),Be.current=J},Be=_t.useRef(null);return _t.useEffect(()=>{if(!e.current)return;document.body.requestPointerLock=document.body.requestPointerLock||document.body.mozRequestPointerLock;const J=()=>{!M&&!y&&(e.current.requestPointerLock(),l&&be.current&&Me.current[be.current].play().catch(ye=>{}))},oe=ye=>{document.pointerLockElement===e.current&&(q.current.camera.rotation.y-=ye.movementX*.002,q.current.camera.rotation.x-=ye.movementY*.002,q.current.camera.rotation.x=Math.max(-1.5,Math.min(1.5,q.current.camera.rotation.x)),q.current.camera.rotation.z=0,q.current.camera.rotation.order="YXZ")},Ce=ye=>{switch(ye.code){case"KeyW":K.current.forward=!0;break;case"KeyS":K.current.backward=!0;break;case"KeyA":K.current.left=!0;break;case"KeyD":K.current.right=!0;break;case"Space":K.current.jump=!0;break;case"ShiftLeft":case"ShiftRight":K.current.run=!0;break}},ke=ye=>{switch(ye.code){case"KeyW":K.current.forward=!1;break;case"KeyS":K.current.backward=!1;break;case"KeyA":K.current.left=!1;break;case"KeyD":K.current.right=!1;break;case"Space":K.current.jump=!1;break;case"ShiftLeft":case"ShiftRight":K.current.run=!1;break}};window.addEventListener("keydown",Ce),window.addEventListener("keyup",ke),document.addEventListener("mousemove",oe),e.current.addEventListener("click",J);const He="/horror/",ct=new FM,Jt=ct.load(`${He}images/party_wallpaper.png`),pt=ct.load(`${He}images/carpet.png`),ht=ct.load(`${He}images/dirt_ground.png`),Dt=ct.load(`${He}images/host.png`),at=ct.load(`${He}images/cake.png`);Jt.wrapS=Jt.wrapT=Ws,pt.wrapS=pt.wrapT=Ws,ht.wrapS=ht.wrapT=Ws,pt.repeat.set(4,4),ht.repeat.set(4,4),Dt.magFilter=Mn,at.magFilter=Mn;const St=new AM;q.current=St,St.rotation.order="YXZ";const B=new ii(75,window.innerWidth/window.innerHeight,.1,1e3);B.rotation.order="YXZ",q.current.camera=B;const Gt=new VA({antialias:!0,alpha:!1});Gt.setSize(window.innerWidth,window.innerHeight),Gt.domElement.style.cssText="position:absolute; top:0; left:0; width:100%; height:100%; filter: contrast(1.1) saturate(1.2);",e.current.appendChild(Gt.domElement);const Et=new ni({map:Jt,color:16777215,roughness:.5}),It=new ni({map:pt,color:5588019,roughness:1}),Ye=new ni({map:ht,color:3355443,roughness:1}),D=new ni({color:2232576}),b=new ni({color:5592405,roughness:.8}),W=new ni({color:8947848,roughness:.9});C.current=new qn,V.current=new qn,Z.current=new qn,V.current.visible=!1,Z.current.visible=!1,St.add(C.current),St.add(V.current),St.add(Z.current);const pe=[[1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,1],[1,0,1,0,1,0,1,1,0,1,0,1],[1,0,1,0,0,0,0,1,0,1,0,1],[1,0,1,1,1,1,0,1,1,1,0,1],[1,0,0,0,0,1,0,0,0,0,0,1],[1,1,1,1,0,1,1,1,0,1,0,1],[1,0,0,1,0,0,0,1,0,1,0,1],[1,0,0,0,0,1,0,0,0,1,0,1],[1,0,1,1,1,1,0,1,0,1,0,1],[1,0,0,0,0,1,0,1,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],Se=new Yn(se,12,se),ue=new kr(se,se);pe.forEach((ye,de)=>{ye.forEach((he,Ee)=>{const De=Ee*se,tt=de*se,st=new Nt(ue,It);st.rotation.x=-Math.PI/2,st.position.set(De,-4,tt),C.current.add(st);const mt=new Nt(ue,D);if(mt.rotation.x=Math.PI/2,mt.position.set(De,4,tt),C.current.add(mt),he===1){const Ut=new Nt(Se,Et);Ut.position.set(De,0,tt),Ut.userData={isBorder:!0},C.current.add(Ut)}else if(N.current.push({x:De,z:tt}),Math.random()>.9){const Ut=new w_(16755200,1,10);Ut.position.set(De,2,tt),C.current.add(Ut)}const ft=new Nt(ue,Ye);if(ft.rotation.x=-Math.PI/2,ft.position.set(De,-4,tt),V.current.add(ft),he===1){for(let _n=0;_n<8;_n++){const vn=XA();vn.position.set(De+(Math.random()-.5)*8,-4,tt+(Math.random()-.5)*8),V.current.add(vn)}const Ut=new Nt(Se,new Gr({visible:!1}));Ut.position.set(De,0,tt),Ut.userData={isBorder:!0},V.current.add(Ut)}else G.current.push({x:De,z:tt})})});const Xe=20,Ue=15;for(let ye=0;ye<Xe;ye++)for(let de=0;de<Xe;de++){const he=de*Ue,Ee=ye*Ue,De=new Nt(new kr(Ue,Ue),b);De.rotation.x=-Math.PI/2,De.position.set(he,-4,Ee),De.rotation.x+=(Math.random()-.5)*.05,De.rotation.y+=(Math.random()-.5)*.05,Z.current.add(De);const tt=ye===0||ye===Xe-1||de===0||de===Xe-1,st=Math.random()>.8;if(tt||st)if(Math.random()>.5){const mt=WA();mt.position.set(he,-3.5,Ee),mt.scale.set(1.5,1.5,1.5),Z.current.add(mt);const ft=new Nt(new Yn(2,10,2),new Gr({visible:!1}));ft.position.set(he,0,Ee),ft.userData={isBorder:!0},Z.current.add(ft)}else{const mt=new Nt(new Yn(4,2,8),W);mt.position.set(he,-3,Ee),mt.rotation.y=Math.random(),Z.current.add(mt),mt.userData={isBorder:!0}}else ne.current.push({x:he,z:Ee})}const Ge=new WM(16755200,1);St.add(Ge);const et=new XM(16777215,1.2);et.position.set(50,100,50),St.add(et);const Te=new GM(16768426,8,120,Math.PI/3,.4,1);Te.position.set(0,0,0),Te.target.position.set(0,0,-1),B.add(Te),B.add(Te.target),St.add(B),B.position.set(se,0,se);const Ae=new dl(.5,.1,8,16),Fe=new Gr({color:16766720}),Ie=(ye,de)=>{for(let he=0;he<3;he++){if(ye.length===0)return;const Ee=ye[Math.floor(Math.random()*ye.length)],De=new Nt(Ae,Fe);De.position.set(Ee.x,-2,Ee.z),De.userData={type:"key"},de.add(De);const tt=new w_(16766720,2,8);tt.position.set(Ee.x,-2,Ee.z),de.add(tt),P.current.push(De)}};Ie(N.current,C.current),Ie(G.current,V.current),Ie(ne.current,Z.current);const Ne=(ye,de,he)=>{if(de.length===0)return;const Ee=de[Math.floor(Math.random()*de.length)];let De;if(ye==="HOST"){const tt=new Xd({map:Dt,transparent:!0});De=new E_(tt),De.scale.set(3,7,1),De.userData={type:ye,state:"PATROL",level:"PARTY",spawnY:0}}else if(ye==="SCARECROW")De=kA(),De.userData={type:ye,state:"FROZEN",level:"CORNFIELD",spawnY:0};else{De=new qn;const tt=new Nt(new Yn(3,7,3),new ni({color:5570560,roughness:.5}));tt.position.y=-.5,De.add(tt);const st=new Nt(new Yn(2,2,2.5),new ni({color:3342336}));st.position.set(0,3.5,.5),De.add(st);const mt=new Nt(new ru(.3,2),new Gr({color:16777215}));mt.position.set(.8,4.5,.5),mt.rotation.z=-.5,De.add(mt.clone()),mt.position.set(-.8,4.5,.5),mt.rotation.z=.5,De.add(mt),De.scale.set(1.5,1.5,1.5),De.userData={type:ye,state:"CHASE",level:"RUINS",spawnY:2}}De.position.set(Ee.x,De.userData.spawnY,Ee.z),he.add(De),w.current.push(De)};Ne("HOST",N.current,C.current),Ne("SCARECROW",G.current,V.current),Ne("MINOTAUR",ne.current,Z.current);const ut=ye=>{if(z.current=ye,C.current.visible=!1,V.current.visible=!1,Z.current.visible=!1,Me.current[ye]&&ve(ye),ye==="PARTY")d("Objective: Find 3 Gifts"),p(""),St.background=new wt(3351040),St.fog=new rl(4469504,.02),Ge.color.setHex(16755200),Ge.intensity=.8,C.current.visible=!0,B.position.set(N.current[0].x,0,N.current[0].z);else if(ye==="CORNFIELD"){d("EXILED."),p("DON'T BLINK."),St.background=new wt(8943462),St.fog=new rl(8943462,.02),Ge.color.setHex(16772829),Ge.intensity=1,V.current.visible=!0;const de=G.current[Math.floor(Math.random()*G.current.length)];B.position.set(de.x,0,de.z)}else if(ye==="RUINS"){d("THE SANCTUARY."),p("THE SKY IS WATCHING."),St.background=new wt(8900331),St.fog=new rl(15658734,.005),Ge.color.setHex(16777215),Ge.intensity=1.2,Z.current.visible=!0;const de=ne.current[Math.floor(Math.random()*ne.current.length)];B.position.set(de.x,0,de.z)}};let X=performance.now();const Le=()=>{if(requestAnimationFrame(Le),M||(Be.current&&(ut(Be.current),Be.current=null),L.current||F.current))return;const ye=performance.now(),de=(ye-X)/1e3;X=ye;const he=K.current.forward?1:0,Ee=K.current.backward?1:0,De=K.current.left?1:0,tt=K.current.right?1:0;K.current.jump&&B.position.y<=.1&&(fe.current.y=12,K.current.jump=!1);const st=-30;if(fe.current.y+=st*de,B.position.y+=fe.current.y*de,B.position.y<0&&(B.position.y=0,fe.current.y=0),he||Ee||De||tt){const ft=K.current.run?16:8,Ut=new $;B.getWorldDirection(Ut),Ut.y=0,Ut.normalize();const _n=new $;_n.crossVectors(B.up,Ut).normalize();const vn=new $;he&&vn.add(Ut),Ee&&vn.sub(Ut),De&&vn.add(_n),tt&&vn.sub(_n),vn.normalize();const ea=B.position.x+vn.x*ft*de,Bi=B.position.z+vn.z*ft*de;let ta=C.current;z.current==="CORNFIELD"&&(ta=V.current),z.current==="RUINS"&&(ta=Z.current);let Zn=!1;if(z.current==="RUINS")ta.children.forEach(An=>{if(An.userData.isBorder){const en=Math.abs(An.position.x-ea),xn=Math.abs(An.position.z-Bi);en<2.5&&xn<2.5&&(Zn=!0)}});else{const An=Math.round(ea/se),en=Math.round(Bi/se);pe[en]&&pe[en][An]===1&&(Zn=!0)}Zn||(B.position.x=ea,B.position.z=Bi)}P.current.forEach(ft=>{if(ft.visible&&ft.parent.visible&&(ft.rotation.y+=de,B.position.distanceTo(ft.position)<3&&(ft.visible=!1,I.current++,g(Ut=>Ut+1),I.current===3&&!O.current))){d("EXIT REVEALED.");const Ut=new E_(new Xd({map:at}));Ut.scale.set(3,3,1),Ut.position.set(B.position.x+5,0,B.position.z+5),z.current==="PARTY"&&C.current.add(Ut),z.current==="CORNFIELD"&&V.current.add(Ut),z.current==="RUINS"&&Z.current.add(Ut),O.current=Ut}}),O.current&&B.position.distanceTo(O.current.position)<2&&(F.current=!0,S(!0));let mt=!1;w.current.forEach(ft=>{if(ft.userData.level!==z.current)return;const Ut=ft.position.distanceTo(B.position);if(ft.userData.type==="SCARECROW")ft.rotation.z=Math.sin(ye*20)*.1,ft.rotation.x=Math.sin(ye*15)*.05;else if(ft.userData.type==="MINOTAUR"){const _n=1.5+Math.sin(ye*3)*.1;ft.scale.set(_n,_n,_n)}if(Ut<40){mt=!0;const _n=new $().subVectors(B.position,ft.position).normalize();_n.y=0;const vn=ft.userData.type==="SCARECROW"?14:ft.userData.type==="MINOTAUR"?9:6;ft.position.addScaledVector(_n,vn*de),ft.userData.type!=="HOST"&&ft.lookAt(B.position.x,ft.position.y,B.position.z),Ut<1.5&&(L.current=!0,d("CAUGHT"),setTimeout(()=>window.location.reload(),2e3))}}),mt!==U.current&&(U.current=mt,ve(mt?"CHASE":z.current)),Gt.render(St,B)},we=requestAnimationFrame(Le);return()=>{cancelAnimationFrame(we),window.removeEventListener("keydown",Ce),window.removeEventListener("keyup",ke),document.removeEventListener("mousemove",oe),e.current&&(e.current.innerHTML=""),Gt.dispose(),Object.values(Me.current).forEach(ye=>ye.pause())}},[M]),ge.jsxs("div",{className:"relative w-full h-screen bg-black overflow-hidden font-mono select-none",children:[ge.jsx("div",{ref:e,className:"w-full h-full"}),ge.jsx("div",{className:"absolute top-0 left-0 w-full p-8 pointer-events-none mix-blend-difference z-10",children:ge.jsxs("div",{className:"flex justify-between items-start",children:[ge.jsxs("div",{children:[ge.jsx("h1",{className:"text-4xl font-bold text-yellow-500 tracking-widest drop-shadow-md",children:"PROTOCOL: BIRTHDAY"}),ge.jsx("p",{className:"text-xl text-yellow-200 mt-2 animate-pulse",children:h})]}),ge.jsxs("div",{className:"text-right",children:[ge.jsx("div",{className:"text-2xl text-yellow-500 font-bold mb-2",children:"SOCIAL BATTERY"}),ge.jsx("div",{className:"w-64 h-6 bg-gray-900 border-2 border-yellow-700",children:ge.jsx("div",{className:"h-full bg-yellow-500 transition-all duration-200",style:{width:`${E}%`}})}),ge.jsxs("div",{className:"mt-4 flex flex-col items-end gap-1",children:[ge.jsx("div",{className:"text-sm text-yellow-300",children:"PRESS [SPACE] TO JUMP"}),ge.jsx("div",{className:"text-sm text-yellow-300",children:"HOLD [SHIFT] TO RUN"}),ge.jsx("div",{className:"text-sm text-yellow-300 text-right mt-2 w-48",children:"CLICK SCREEN TO ENABLE MOUSE LOOK"})]}),ge.jsxs("div",{className:"mt-4 text-xl text-yellow-200",children:["GIFTS OPENED: ",_," / 3"]})]})]})}),m&&ge.jsx("div",{className:"absolute bottom-1/4 w-full text-center pointer-events-none z-20",children:ge.jsx("p",{className:"text-2xl font-bold text-red-400 bg-black/50 inline-block px-4 py-2 animate-pulse",children:m})}),M&&ge.jsxs("div",{className:"absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 text-yellow-500",children:[ge.jsx("h1",{className:"text-6xl font-black tracking-widest mb-12 animate-pulse text-yellow-200 drop-shadow-lg",children:"SELECT STAGE"}),ge.jsxs("div",{className:"flex gap-8",children:[ge.jsx("button",{onClick:()=>Re("PARTY"),className:"px-8 py-6 border-2 border-yellow-600 bg-black hover:bg-yellow-900 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(vS,{className:"w-12 h-12 text-yellow-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 21"})]})}),ge.jsx("button",{onClick:()=>Re("CORNFIELD"),className:"px-8 py-6 border-2 border-red-900 bg-black hover:bg-red-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(yS,{className:"w-12 h-12 text-red-700"}),ge.jsx("span",{className:"text-2xl font-bold",children:"LEVEL 10"})]})}),ge.jsx("button",{onClick:()=>Re("RUINS"),className:"px-8 py-6 border-2 border-cyan-800 bg-black hover:bg-cyan-950 transition-all cursor-pointer",children:ge.jsxs("div",{className:"flex flex-col items-center gap-4",children:[ge.jsx(gS,{className:"w-12 h-12 text-cyan-500"}),ge.jsx("span",{className:"text-2xl font-bold",children:"THE RUINS"})]})})]})]}),(y||L.current)&&!M&&ge.jsx("div",{className:`absolute inset-0 z-20 flex flex-col items-center justify-center ${y?"bg-yellow-900":"bg-red-600"} mix-blend-multiply transition-opacity duration-1000`,children:y?ge.jsxs("div",{className:"text-center animate-bounce",children:[ge.jsx("h1",{className:"text-9xl font-black text-yellow-100 mb-8",children:"SURVIVED"}),ge.jsx("button",{onClick:()=>window.location.reload(),className:"mt-12 px-8 py-4 bg-yellow-600 text-black font-bold",children:"REPLAY"})]}):ge.jsx("h1",{className:"text-9xl font-black text-black animate-ping",children:"CAUGHT!"})}),ge.jsx("div",{className:"absolute top-8 right-8 z-50 flex flex-col gap-4 pointer-events-auto",children:ge.jsxs("button",{onClick:o,className:"flex items-center gap-2 bg-red-950/80 text-red-200 border border-red-800 px-4 py-2 uppercase text-xs font-bold",children:["ABORT ",ge.jsx(tv,{className:"w-4 h-4"})]})}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1 bg-white/50 rounded-full pointer-events-none mix-blend-exclusion"})]})},YA=({story:o,onClick:e})=>ge.jsxs("div",{onClick:e,className:"group relative bg-[#080808] border border-gray-800/60 p-0 cursor-pointer overflow-hidden transition-all duration-500 hover:border-red-900/60 hover:shadow-[0_0_40px_rgba(220,38,38,0.05)] rounded-sm",children:[ge.jsxs("div",{className:"absolute top-0 right-0 bg-gray-900/50 px-3 py-1 border-b border-l border-gray-800 text-[9px] font-mono text-gray-500 uppercase tracking-widest group-hover:bg-red-950/30 group-hover:text-red-400 transition-colors",children:["Case File #",o.id.toUpperCase().substring(0,4)]}),o.imageUrl&&ge.jsxs("div",{className:"w-full h-56 overflow-hidden relative border-b border-gray-800/50",children:[ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"}),ge.jsx("img",{src:o.imageUrl,alt:o.title,className:"w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale contrast-125 group-hover:grayscale-0"}),ge.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"}),ge.jsxs("div",{className:"absolute bottom-3 left-3 flex items-center gap-2 z-20",children:[ge.jsx("div",{className:`w-2 h-2 rounded-full ${o.is3D?"bg-red-500 animate-pulse shadow-[0_0_10px_#ef4444]":"bg-gray-600"}`}),ge.jsx("span",{className:"text-[10px] font-mono uppercase tracking-widest text-gray-400 group-hover:text-gray-200",children:o.is3D?"Live Feed":"Archived"})]})]}),ge.jsxs("div",{className:"p-8 pt-6 relative",children:[ge.jsx("div",{className:"absolute top-0 left-0 w-1 h-full bg-red-900/0 group-hover:bg-red-900/50 transition-all duration-500"}),ge.jsx("h3",{className:"text-3xl font-bold mb-3 text-gray-300 group-hover:text-red-500 transition-colors uppercase tracking-tighter font-header leading-none",children:o.title}),ge.jsxs("div",{className:"flex items-center gap-4 mb-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-b border-gray-900 pb-4 group-hover:border-red-900/20 transition-colors",children:[ge.jsxs("span",{className:"text-red-900 group-hover:text-red-700",children:["Auth: ",o.author]}),ge.jsx("span",{children:"//"}),ge.jsx("span",{children:o.date})]}),ge.jsx("p",{className:"text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2 font-serif group-hover:text-gray-400 transition-colors",children:o.summary}),ge.jsx("div",{className:"flex flex-wrap gap-2",children:o.tags.map(i=>ge.jsx("span",{className:"text-[9px] uppercase tracking-widest bg-black px-2 py-1 text-gray-600 border border-gray-800 group-hover:border-red-900/30 group-hover:text-red-900/70 transition-colors",children:i},i))})]})]}),Pv=({publisherId:o="ca-pub-6275575304084608",slotId:e="2004776727",className:i})=>ge.jsxs("div",{className:`bg-[#0a0a0a] border border-gray-800/30 p-8 flex flex-col items-center justify-center min-h-[150px] relative overflow-hidden group ${i}`,children:[ge.jsx("div",{className:"absolute top-0 left-0 w-full h-[1px] bg-red-900/20 animate-scan"}),ge.jsx("p",{className:"text-xs text-gray-700 font-mono uppercase tracking-[0.2em] mb-4",children:"External Broadcast Signal [Sponsor]"}),ge.jsxs("div",{className:"w-full max-w-[728px] h-[90px] bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group-hover:border-red-900/40 transition-colors",children:[ge.jsxs("div",{className:"absolute inset-0 opacity-20 pointer-events-none",children:[ge.jsx("div",{className:"w-full h-full bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] bg-cover opacity-10 mix-blend-screen"}),ge.jsx("div",{className:"absolute inset-0 bg-red-900/10 animate-pulse"})]}),ge.jsx("span",{className:"absolute z-0 text-[10px] font-mono text-red-900/50 uppercase tracking-[0.3em] animate-pulse",children:"$$ NO SIGNAL // AWAITING INPUT $$"}),ge.jsx("ins",{className:"adsbygoogle block relative z-10",style:{display:"block",width:"100%",height:"100%"},"data-ad-client":o,"data-ad-slot":e,"data-ad-format":"auto","data-full-width-responsive":"true"})]})]});try{window&&window.adsbygoogle}catch(o){console.error("AdSense Error:",o)}const jA=({story:o,onBack:e})=>(_t.useEffect(()=>{window.scrollTo(0,0)},[]),ge.jsxs("div",{className:"animate-fade-in relative",children:[ge.jsxs("button",{onClick:e,className:"group flex items-center gap-2 text-red-600 mb-8 hover:text-red-400 transition-colors uppercase text-sm font-bold tracking-widest",children:[ge.jsx(tv,{className:"w-4 h-4 group-hover:-translate-x-1 transition-transform"}),"Return to Index"]}),o.id==="fractal-saint"&&ge.jsxs("div",{className:"fixed inset-0 pointer-events-none z-0 opacity-10 mix-blend-screen overflow-hidden",children:[ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-red-500/20 rounded-full animate-[spin_60s_linear_infinite]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/30 rotate-45 animate-[spin_40s_linear_infinite_reverse]"}),ge.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-red-500/10 rotate-12 animate-[pulse_4s_ease-in-out_infinite]"})]}),ge.jsxs("article",{className:"prose prose-invert prose-red max-w-none relative z-10",children:[ge.jsxs("header",{className:"mb-12 border-b border-red-900/20 pb-8",children:[ge.jsx("h2",{className:"text-5xl font-black text-gray-100 mb-4 uppercase tracking-tighter",children:o.title}),ge.jsxs("div",{className:"flex gap-4 text-xs font-sans uppercase tracking-widest text-red-700",children:[ge.jsxs("span",{children:["Author: ",o.author]}),ge.jsx("span",{children:"|"}),ge.jsxs("span",{children:["Archive: ",o.date]})]})]}),ge.jsx("div",{className:"text-xl leading-relaxed first-letter:text-7xl first-letter:font-bold first-letter:text-red-600 first-letter:mr-3 first-letter:float-left",dangerouslySetInnerHTML:{__html:o.content}}),ge.jsx(Pv,{className:"mt-16 mb-8"})]}),ge.jsx("footer",{className:"mt-16 p-8 bg-red-950/5 border border-red-900/20 rounded-lg relative z-10",children:ge.jsxs("div",{className:"flex items-start gap-4",children:[ge.jsx(uS,{className:"text-red-600 shrink-0 mt-1"}),ge.jsxs("div",{children:[ge.jsx("h4",{className:"font-bold text-red-500 uppercase tracking-widest text-sm mb-2",children:"Researcher's Note"}),ge.jsx("p",{className:"text-sm italic text-gray-500",children:"The contents of this file have been linked to severe psychological distress. If you begin to hear a rhythmic clicking or experience spatial anomalies, cease reading immediately."})]})]})})]})),J_=[{id:"backrooms",title:"Level 0: The Beige Eternity",author:"Surveyor K. Miller",date:"RECOVERED LOG",is3D:!0,imageUrl:"images/wallpaper.png",summary:"If you aren't careful and you noclip out of reality in the wrong areas...",tags:["interactive","3d","liminal-space"],content:`
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
    `}];function ZA(){const[o,e]=_t.useState(null),[i,r]=_t.useState(100),l=J_.find(c=>c.id===o);return _t.useEffect(()=>{const c=setInterval(()=>{r(h=>Math.max(80,h-.01))},1e3);return()=>clearInterval(c)},[]),l?.is3D?ge.jsx(qA,{onExit:()=>e(null)}):l&&!l.is3D?ge.jsx(jA,{story:l,onBack:()=>e(null)}):ge.jsxs("div",{className:`min-h-screen bg-[#050505] text-gray-300 font-serif selection:bg-red-900 selection:text-white transition-all duration-1000 ${i<90?"animate-vibrate":""}`,children:[ge.jsxs("nav",{className:"fixed top-0 left-0 w-full bg-black/90 border-b border-red-900/30 backdrop-blur-md z-40 p-4 flex justify-between items-center px-8",children:[ge.jsxs("div",{className:"flex items-center gap-3",children:[ge.jsx(pS,{className:"text-red-600 w-8 h-8 animate-pulse"}),ge.jsx("h1",{className:"text-2xl font-black uppercase tracking-tighter text-red-600 font-header",children:"The Void Archive"})]}),ge.jsxs("div",{className:"flex gap-6 text-sm uppercase tracking-widest text-gray-500 font-sans items-center",children:[ge.jsx("a",{href:"https://elo2026x.github.io/The_Victoria_Texas_Franchise/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"FORENSICS"}),ge.jsx("a",{href:"https://www.amazon.com/shop/elo2025x",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-500 cursor-pointer transition-colors border-b border-transparent hover:border-red-600",children:"MARKETING"}),ge.jsx("a",{href:"https://elo2026.gumroad.com/l/eircyr",target:"_blank",rel:"noopener noreferrer",className:"text-red-600 font-bold border border-red-900/50 px-3 py-1 hover:bg-red-900/20 hover:text-red-400 transition-all animate-pulse",children:"Subscribe"})]})]}),ge.jsx("main",{className:"pt-24 pb-20 max-w-5xl mx-auto px-6",children:ge.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[ge.jsxs("div",{className:"col-span-full mb-8",children:[ge.jsx("h3",{className:"text-red-700 font-sans uppercase tracking-[0.4em] text-xs font-bold mb-4",children:"Latest Classified Data"}),ge.jsx("p",{className:"text-gray-500 italic max-w-xl",children:'"Reality is a thin layer of ice over a very deep, dark ocean. These stories are the cracks."'})]}),J_.map(c=>ge.jsx(YA,{story:c,onClick:()=>e(c.id)},c.id)),ge.jsx(Pv,{className:"col-span-full mt-12 mb-8"})]})}),ge.jsxs("div",{className:"fixed bottom-6 right-6 flex items-center gap-4 bg-black/80 border border-gray-800 p-3 backdrop-blur-sm",children:[ge.jsxs("div",{className:"text-right",children:[ge.jsx("p",{className:"text-[10px] text-gray-600 font-sans uppercase font-bold",children:"Local Reality Level"}),ge.jsxs("p",{className:"font-mono text-red-600 text-sm",children:[i.toFixed(4),"%"]})]}),ge.jsxs("div",{className:"w-12 h-12 rounded-full border-2 border-red-900 flex items-center justify-center relative",children:[ge.jsx("div",{className:"absolute inset-1 rounded-full border border-red-600 animate-ping opacity-20"}),ge.jsx(hS,{className:"w-5 h-5 text-red-600"})]})]}),ge.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const KA=nS({onNeedRefresh(){confirm("A new version of The Void Archive is available. Reload to update?")&&KA(!0)},onOfflineReady(){console.log("Archive downloaded. Offline access granted.")}});Jy.createRoot(document.getElementById("app")).render(ge.jsx(Xy.StrictMode,{children:ge.jsx(ZA,{})}));
