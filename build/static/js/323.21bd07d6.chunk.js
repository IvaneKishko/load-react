/*! For license information please see 323.21bd07d6.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkcentral_dispatch=self.webpackChunkcentral_dispatch||[]).push([[323],{3832:function(){},7986:function(t,e,r){r.d(e,{Z:function(){return c}});r(2791);var n=r(1087),o=(r(161),r(184)),a=function(t){return(0,o.jsx)(n.rU,{to:"/loads/".concat(t.id),className:"load-item-link",children:(0,o.jsxs)("li",{className:"load-item",children:[(0,o.jsxs)("div",{className:"load-item__left-upper",children:[(0,o.jsxs)("div",{className:"load-item__price-model",children:[(0,o.jsxs)("h4",{children:["$",t.price]}),(0,o.jsx)("h4",{children:t.model}),(0,o.jsxs)("span",{children:[t.payment," / Certified"]})]}),(0,o.jsxs)("div",{className:"load-item__company-date",children:[(0,o.jsx)("span",{className:"load-item__label",children:"Company"}),(0,o.jsx)("h4",{children:t.companyName}),(0,o.jsx)("span",{className:"load-item__label",children:"Pickup Date"}),(0,o.jsx)("span",{children:t.pickupDate}),(0,o.jsx)("a",{href:"tel:".concat(t.phoneNumber),children:(0,o.jsxs)("span",{children:["Tel: ",t.phoneNumber]})})]})]}),(0,o.jsxs)("div",{className:"load-item__right-lower",children:[(0,o.jsxs)("div",{className:"load-item__pick-drop",children:[(0,o.jsxs)("a",{children:[(0,o.jsx)("span",{className:"load-item__label",children:"Pickup Location"}),(0,o.jsx)("h4",{children:t.pickupLocation})]}),(0,o.jsxs)("a",{children:[(0,o.jsx)("span",{className:"load-item__label",children:"Destination"}),(0,o.jsx)("h4",{children:t.dropOffLocation})]})]}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"".concat("https://load-dispatch-rest-api.vercel.app","/").concat(t.image),alt:"car",className:"load-item__pick-drop__img"})})]})]})})},i=r(3373),c=function(t){return 0===t.items.length?(0,o.jsx)("div",{className:"center",children:(0,o.jsx)(i.Z,{children:(0,o.jsx)("h2",{children:"No loads found."})})}):(0,o.jsx)("ul",{className:"loads-list",children:t.items.map((function(t){return(0,o.jsx)(a,{id:t.id,price:t.price,model:t.model,payment:t.payment,companyName:t.companyName,pickupDate:t.pickupDate,dropOffDate:t.dropOffDate,phoneNumber:t.phoneNumber,pickupLocation:t.pickupLocation,dropOffLocation:t.dropOffLocation,image:t.image},t.id)}))})}},6323:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(4165),o=r(5861),a=r(9439),i=r(2791),c=r(7689),s=(r(3832),r(7986)),u=(r(3373),r(3999),r(5434)),l=r(9508),h=r(9895),f=r(161),d=r(184),p=function(){var t=(0,i.useContext)(f.V),e=(0,i.useState)([]),r=(0,a.Z)(e,2),p=r[0],m=r[1],v=(0,l.x)(),y=v.isLoading,g=v.error,x=v.sendRequest,b=v.clearError,j=(0,c.UO)().userId;return(0,i.useEffect)((function(){var e;!function(){(e=e||(0,o.Z)((0,n.Z)().mark((function e(){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://load-dispatch-rest-api.vercel.app/api","/loads/user/").concat(j),"GET",null,{"Content-Type":"application/json",Authorization:"Bearer "+t.token});case 3:r=e.sent,m(r.loads),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}()}),[x,j]),(0,d.jsxs)("main",{className:"user-loads__main",children:[(0,d.jsx)(u.Z,{error:g,onClear:b}),y&&(0,d.jsx)("div",{className:"center",children:(0,d.jsx)(h.Z,{})}),!y&&p&&(0,d.jsx)("ul",{className:"userLoads-list",children:(0,d.jsx)(s.Z,{items:p})})]})}},3999:function(t,e,r){r.d(e,{Z:function(){return a}});r(2791);var n=r(1087),o=r(184),a=function(t){return t.href?(0,o.jsx)("a",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),href:t.href,children:t.children}):t.to?(0,o.jsx)(n.rU,{to:t.to,exact:t.exact,className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),children:t.children}):(0,o.jsx)("button",{className:"button button--".concat(t.size||"default"," ").concat(t.inverse&&"button--inverse"," ").concat(t.danger&&"button--danger"),type:t.type,onClick:t.onClick,disabled:t.disabled,children:t.children})}},3373:function(t,e,r){r.d(e,{Z:function(){return o}});r(2791);var n=r(184),o=function(t){return(0,n.jsx)("div",{className:"card ".concat(t.className),style:t.style,children:t.children})}},5434:function(t,e,r){r(2791);var n=r(2921),o=r(3999),a=r(184);e.Z=function(t){return(0,a.jsx)(n.Z,{onCancel:t.onClear,header:"An Error Occurred!",show:!!t.error,footer:(0,a.jsx)(o.Z,{onClick:t.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:t.error})})}},2921:function(t,e,r){r.d(e,{Z:function(){return l}});var n=r(1413),o=r(2791),a=r(4164),i=r(2972),c=r(9422),s=r(184),u=function(t){var e=(0,s.jsxs)("div",{className:"modal ".concat(t.className),style:t.style,children:[(0,s.jsx)("header",{className:"modal__header ".concat(t.headerClass),children:(0,s.jsx)("h2",{children:t.header})}),(0,s.jsxs)("form",{onSubmit:t.onSubmit?t.onSubmit:function(t){return t.preventDefault()},children:[(0,s.jsx)("div",{className:"modal__content ".concat(t.contentClass),children:t.children}),(0,s.jsx)("footer",{className:"modal__footer ".concat(t.footerClass),children:t.footer})]})]});return a.createPortal(e,document.getElementById("modal-hook"))},l=function(t){return(0,s.jsxs)(o.Fragment,{children:[t.show&&(0,s.jsx)(c.Z,{onClick:t.onCancel}),(0,s.jsx)(i.Z,{in:t.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,s.jsx)(u,(0,n.Z)({},t))})]})}},9508:function(t,e,r){r.d(e,{x:function(){return c}});var n=r(4165),o=r(5861),a=r(9439),i=r(2791),c=function(){var t,e=(0,i.useState)(!1),r=(0,a.Z)(e,2),c=r[0],s=r[1],u=(0,i.useState)(),l=(0,a.Z)(u,2),h=l[0],f=l[1],d=(0,i.useRef)([]),p=(0,i.useCallback)((function(e){return(t=t||(0,o.Z)((0,n.Z)().mark((function t(e){var r,o,a,i,c,u,l=arguments;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",o=l.length>2&&void 0!==l[2]?l[2]:null,a=l.length>3&&void 0!==l[3]?l[3]:{},console.log("Sending request to",e),s(!0),i=new AbortController,d.current.push(i),t.prev=7,t.next=10,fetch(e,{method:r,body:o,headers:a,signal:i.signal});case 10:return c=t.sent,t.next=13,c.json();case 13:if(u=t.sent,d.current=d.current.filter((function(t){return t!==i})),c.ok){t.next=17;break}throw new Error(u.message);case 17:return s(!1),t.abrupt("return",u);case 21:throw t.prev=21,t.t0=t.catch(7),console.log(t.t0),"AbortError"===t.t0.name?console.log("Request was aborted."):(f(t.t0.message),s(!1)),t.t0;case 26:case"end":return t.stop()}}),t,null,[[7,21]])})))).apply(this,arguments)}),[]);return(0,i.useEffect)((function(){return function(){console.log("Cleanup: Aborting active requests"),d.current.forEach((function(t){return t.abort()}))}}),[]),{isLoading:c,error:h,sendRequest:p,clearError:function(){f(null)}}}},5861:function(t,e,r){function n(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4942:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(9142);function o(t,e,r){return(e=(0,n.Z)(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},1413:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(4942);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return e};var t,e={},r=Object.prototype,a=r.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",u=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof x?e:x,a=Object.create(o.prototype),c=new S(n||[]);return i(a,"_invoke",{value:k(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",v="executing",y="completed",g={};function x(){}function b(){}function j(){}var w={};h(w,s,(function(){return this}));var _=Object.getPrototypeOf,N=_&&_(_(D([])));N&&N!==r&&a.call(N,s)&&(w=N);var O=j.prototype=x.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,c,s){var u=d(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,n.Z)(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,c,s)}),(function(t){r("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return r("throw",t,c,s)}))}s(u.arg)}var o;i(this,"_invoke",{value:function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}})}function k(e,r,n){var o=p;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===y){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var s=Z(c,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var u=d(e,r,n);if("normal"===u.type){if(o=n.done?y:m,u.arg===g)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=y,n.method="throw",n.arg=u.arg)}}}function Z(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,Z(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=d(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function D(e){if(e||""===e){var r=e[s];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(a.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError((0,n.Z)(e)+" is not iterable")}return b.prototype=j,i(O,"constructor",{value:j,configurable:!0}),i(j,"constructor",{value:b,configurable:!0}),b.displayName=h(j,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,h(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},E(L.prototype),h(L.prototype,u,(function(){return this})),e.AsyncIterator=L,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new L(f(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(O),h(O,l,"Generator"),h(O,s,(function(){return this})),h(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=D,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),u=a.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:D(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}}}]);
//# sourceMappingURL=323.21bd07d6.chunk.js.map