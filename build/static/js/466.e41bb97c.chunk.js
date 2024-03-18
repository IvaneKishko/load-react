"use strict";(self.webpackChunkcentral_dispatch=self.webpackChunkcentral_dispatch||[]).push([[466],{7986:function(e,n,a){a.d(n,{Z:function(){return s}});a(2791);var i=a(1087),c=(a(161),a(184)),l=function(e){return(0,c.jsx)(i.rU,{to:"/loads/".concat(e.id),className:"load-item-link",children:(0,c.jsxs)("li",{className:"load-item",children:[(0,c.jsxs)("div",{className:"load-item__left-upper",children:[(0,c.jsxs)("div",{className:"load-item__price-model",children:[(0,c.jsxs)("h4",{children:["$",e.price]}),(0,c.jsx)("h4",{children:e.model}),(0,c.jsxs)("span",{children:[e.payment," / Certified"]})]}),(0,c.jsxs)("div",{className:"load-item__company-date",children:[(0,c.jsx)("span",{className:"load-item__label",children:"Company"}),(0,c.jsx)("h4",{children:e.companyName}),(0,c.jsx)("span",{className:"load-item__label",children:"Pickup Date"}),(0,c.jsx)("span",{children:e.pickupDate}),(0,c.jsx)("a",{href:"tel:".concat(e.phoneNumber),children:(0,c.jsxs)("span",{children:["Tel: ",e.phoneNumber]})})]})]}),(0,c.jsxs)("div",{className:"load-item__right-lower",children:[(0,c.jsxs)("div",{className:"load-item__pick-drop",children:[(0,c.jsxs)("a",{children:[(0,c.jsx)("span",{className:"load-item__label",children:"Pickup Location"}),(0,c.jsx)("h4",{children:e.pickupLocation})]}),(0,c.jsxs)("a",{children:[(0,c.jsx)("span",{className:"load-item__label",children:"Destination"}),(0,c.jsx)("h4",{children:e.dropOffLocation})]})]}),(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdKu-Y9C8G5fKNK0bIcISAcyzgm5pZeRg_Gw&usqp=CAU",alt:"car",className:"load-item__pick-drop__img"})})]})]})})},t=a(3373),s=function(e){return 0===e.items.length?(0,c.jsx)("div",{className:"center",children:(0,c.jsx)(t.Z,{children:(0,c.jsx)("h2",{children:"No loads found."})})}):(0,c.jsx)("ul",{className:"loads-list",children:e.items.map((function(e){return(0,c.jsx)(l,{id:e.id,price:e.price,model:e.model,payment:e.payment,companyName:e.companyName,pickupDate:e.pickupDate,dropOffDate:e.dropOffDate,phoneNumber:e.phoneNumber,pickupLocation:e.pickupLocation,dropOffLocation:e.dropOffLocation,image:e.image},e.id)}))})}},570:function(e,n,a){a.r(n),a.d(n,{default:function(){return j}});var i=a(4165),c=a(5861),l=a(9439),t=a(2791),s=(a(3832),a(83)),o=a(3342),r=a(3999),d=a(184),u=function(e){var n=(0,t.useState)(""),a=(0,l.Z)(n,2),i=a[0],c=a[1];return(0,d.jsxs)("form",{className:"filter-form",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"pickupLocation",className:"filter-label",children:"Pickup Location:"}),(0,d.jsx)(s.ZP,{options:o.Z,id:"pickupLocation",name:"pickupLocation",value:e.selectedPickupLocation,onChange:function(n){e.onPickupLocationChange(n?n.value.split(",")[0]:null)}})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{htmlFor:"dropOffLocation",className:"filter-label",children:"Drop Off Location:"}),(0,d.jsx)(s.ZP,{options:o.Z,id:"dropOffLocation",name:"dropOffLocation",value:e.selectedDropOffLocation,onChange:function(n){e.onDropOffLocationChange(n?n.value.split(",")[0]:null)}})]}),(0,d.jsxs)("div",{className:"last-div",children:[(0,d.jsx)("label",{htmlFor:"minPrice",className:"filter-label",children:"Minimum Price:"}),(0,d.jsx)("input",{type:"number",id:"minPrice",placeholder:"Min Price",value:i,onChange:function(e){return c(e.target.value)},onBlur:function(){e.onMinPriceChange(Number(i)||null)}})]}),(0,d.jsx)(r.Z,{onClick:e.onResetFilters,className:"auth-button",children:"Clear Filters"})]})},p=a(7986),m=a(5434),h=a(9895),f=a(9508),x=a(161),j=function(e){var n=(0,t.useContext)(x.V),a=(0,t.useState)(null),s=(0,l.Z)(a,2),o=s[0],r=s[1],j=(0,t.useState)(null),N=(0,l.Z)(j,2),v=N[0],k=N[1],_=(0,t.useState)(null),b=(0,l.Z)(_,2),g=b[0],L=b[1],C=(0,f.x)(),Z=C.isLoading,P=C.error,y=C.sendRequest,O=C.clearError,D=(0,t.useState)([]),w=(0,l.Z)(D,2),F=w[0],S=w[1];(0,t.useEffect)((function(){var e;!function(){(e=e||(0,c.Z)((0,i.Z)().mark((function e(){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y("https://load-dispatch-rest-api.vercel.app/api/loads","GET",null,{"Content-Type":"application/json",Authorization:"Bearer "+n.token});case 3:a=e.sent,S(a.loads),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}()}),[y]);var A=function(){return F.filter((function(e){var n=!o||e.pickupPlace===o,a=!v||e.dropOffPlace===v,i=!g||e.price>=g;return n&&a&&i}))};return console.log(A()),(0,d.jsxs)("main",{className:"loads-main",children:[(0,d.jsx)(m.Z,{error:P,onClear:O}),Z&&(0,d.jsx)("div",{className:"center",children:(0,d.jsx)(h.Z,{})}),(0,d.jsx)(u,{onPickupLocationChange:function(e){r(e)},onDropOffLocationChange:function(e){k(e)},onMinPriceChange:function(e){L(e)},onResetFilters:function(e){e.preventDefault(),r(null),k(null),L(null)}}),!Z&&F&&(0,d.jsx)(p.Z,{items:A()})]})}},3832:function(){},3373:function(e,n,a){a.d(n,{Z:function(){return c}});a(2791);var i=a(184),c=function(e){return(0,i.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}}}]);
//# sourceMappingURL=466.e41bb97c.chunk.js.map