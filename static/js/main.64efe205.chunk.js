(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{57:function(e,t,n){e.exports=n(95)},62:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(33),i=n.n(c),o=(n(62),n(9)),l=n(35),s=n(54),u=n(47),p=n.n(u),m=n(10),f={SET_CURRENT_USER:"SET_CURRENT_USER",GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",GOOGLE_SIGN_IN_SUCCESS:"GOOGLE_SIGN_IN_SUCCESS",GOOGLE_SIGN_IN_FAILURE:"GOOGLE_SIGN_IN_FAILURE",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",EMAIL_SIGN_IN_SUCCESS:"EMAIL_SIGN_IN_SUCCESS",EMAIL_SIGN_IN_FAILURE:"EMAIL_SIGN_IN_FAILURE"};function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var O={currentUser:null},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.GOOGLE_SIGN_IN_SUCCESS:case f.EMAIL_SIGN_IN_SUCCESS:return b({},e,{currentUser:t.payload,error:null});case f.GOOGLE_SIGN_IN_FAILURE:case f.EMAIL_SIGN_IN_FAILURE:return b({},e,{error:t.payload});default:return e}},E="TOGGLE_CART_HIDDEN",v="ADD_ITEM",g="REMOVE_ITEM",y="CLEAR_ITEM_FROM_CART",j=n(53);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var C=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e:e.map(function(e){return e.id===t.id?N({},e,{quantity:e.quantity-1}):e})};function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var _={hidden:!0,cartItems:[]},k=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case E:return S({},n,{hidden:!n.hidden});case v:return S({},n,{cartItems:(e=n.cartItems,t=r.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?N({},e,{quantity:e.quantity+1}):e}):[].concat(Object(j.a)(e),[N({},t,{quantity:1})]))});case g:return S({},n,{cartItems:C(n.cartItems,r.payload)});case y:return S({},n,{cartItems:n.cartItems.filter(function(e){return e.id!==r.payload.id})});default:return n}},x={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return(arguments.length>1?arguments[1]:void 0).type,e},L={FETCH_COLLECTION_START:"FETCH_COLLECTION_START",FETCH_COLLECTION_SUCCESS:"FETCH_COLLECTION_SUCCESS",FETCH_COLLECTION_FAILURE:"FETCH_COLLECTION_FAILURE"};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var G={collections:null,isFetching:!1,errorMessage:void 0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.FETCH_COLLECTION_START:return U({},e,{isFetching:!0});case L.FETCH_COLLECTION_SUCCESS:return U({},e,{isFetching:!1,collections:t.payload});case L.FETCH_COLLECTION_FAILURE:return U({},e,{isFetching:!1,errorMessage:t.payload});case L.UPDATE_COLLECTIONS:return U({},e,{collections:t.payload});default:return e}},R={key:"root",storage:p.a,whitelist:["cart"]},D=Object(o.c)({user:h,cart:k,directory:P,shop:A}),F=Object(l.a)(R,D),H=n(8),M=n.n(H),q=n(12),z=n(29),V=n(30),W=n.n(V);n(67),n(70);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}W.a.initializeApp({apiKey:"AIzaSyDT6wAmtJC1oyxINyuVmylfUp42J7Fy7YQ",authDomain:"crwn-db-af805.firebaseapp.com",databaseURL:"https://crwn-db-af805.firebaseio.com",projectId:"crwn-db-af805",storageBucket:"",messagingSenderId:"797292889190",appId:"1:797292889190:web:3d576eebd84976f9"});var Q=function(){var e=Object(z.a)(M.a.mark(function e(t,n){var r,a,c,i;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=K.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return a=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,r.set(J({displayName:a,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}(),Y=function(e){return e.docs.map(function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{})},$=W.a.auth(),K=W.a.firestore(),X=new W.a.auth.GoogleAuthProvider;X.setCustomParameters({prompt:"select_account"});W.a;var Z=function(){return{type:L.FETCH_COLLECTION_START}},ee=function(e){return{type:L.FETCH_COLLECTION_SUCCESS,payload:e}},te=function(e){return{type:L.FETCH_COLLECTION_FAILURE,payload:e}},ne=M.a.mark(ae),re=M.a.mark(ce);function ae(){var e,t,n;return M.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=K.collection("collections"),r.next=4,e.get();case 4:return t=r.sent,r.next=7,Object(q.b)(Y,t);case 7:return n=r.sent,r.next=10,Object(q.c)(ee(n));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(0),r.next=16,Object(q.c)(te(r.t0.message));case 16:case"end":return r.stop()}},ne,null,[[0,12]])}function ce(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.d)(L.FETCH_COLLECTION_START,ae);case 2:case"end":return e.stop()}},re)}var ie=function(e){return{type:f.GOOGLE_SIGN_IN_SUCCESS,payload:e}},oe=function(e){return{type:f.GOOGLE_SIGN_IN_FAILURE,payload:e}},le=M.a.mark(fe),se=M.a.mark(de),ue=M.a.mark(be);function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function fe(){var e,t,n,r;return M.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,$.signInWithPopup(X);case 3:return e=a.sent,t=e.user,a.next=7,Object(q.b)(Q,t);case 7:return n=a.sent,a.next=10,n.get();case 10:return r=a.sent,a.next=13,Object(q.c)(ie(me({id:r.id},r.data())));case 13:a.next=19;break;case 15:return a.prev=15,a.t0=a.catch(0),a.next=19,Object(q.c)(oe(a.t0));case 19:case"end":return a.stop()}},le,null,[[0,15]])}function de(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(f.GOOGLE_SIGN_IN_START,fe);case 2:case"end":return e.stop()}},se)}function be(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.b)(de)]);case 2:case"end":return e.stop()}},ue)}var Oe=M.a.mark(he);function he(){return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([Object(q.b)(ce),Object(q.b)(be)]);case 2:case"end":return e.stop()}},Oe)}var Ee=Object(s.a)(),ve=[Ee],ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,ye=Object(o.e)(F,ge(o.a.apply(void 0,ve)));Ee.run(he);var je=Object(l.b)(ye),we=n(21),Ne=n(7),Ce=n(48),Ie=n(23),Se=n(24),_e=n(26),ke=n(25),xe=n(27),Pe=(n(75),n(19)),Le=n(18),Te=(n(76),Object(Pe.g)(function(e){var t=e.title,n=e.imageUrl,r=e.size,c=e.history,i=e.linkUrl,o=e.match;return a.a.createElement("div",{className:"menu-item ".concat(r),onClick:function(){return c.push("".concat(o.url).concat(i))}},a.a.createElement("div",{className:"background-image",style:{backgroundImage:'url("'.concat(n,'")')}}),a.a.createElement("div",{className:"content"},a.a.createElement("h1",{className:"title"},t),a.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),Ue=(n(78),n(6)),Ge=Object(Ue.a)([function(e){return e.directory}],function(e){return e.sections}),Ae=Object(Ue.b)({sections:Ge}),Re=Object(Ne.b)(Ae)(function(e){var t=e.sections;return a.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(Le.a)(e,["id"]);return a.a.createElement(Te,Object.assign({key:t},n))}))}),De=n(13),Fe=n(14);function He(){var e=Object(De.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]);return He=function(){return e},e}var Me=Fe.b.div(He()),qe=function(){return a.a.createElement(Me,null,a.a.createElement(Re,null))},ze=(n(80),function(e){return e.shop}),Ve=Object(Ue.a)([ze],function(e){return e.collections}),We=Object(Ue.a)([Ve],function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),Be=Object(Ue.a)([ze],function(e){return e.isFetching}),Je=Object(Ue.a)([ze],function(e){return!!e.collections});function Qe(){var e=Object(De.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return Qe=function(){return e},e}function Ye(){var e=Object(De.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ye=function(){return e},e}var $e=Fe.b.div(Ye()),Ke=Fe.b.div(Qe()),Xe=function(e){return function(t){var n=t.isLoading,r=Object(Le.a)(t,["isLoading"]);return n?a.a.createElement($e,null,a.a.createElement(Ke,null)):a.a.createElement(e,r)}};n(81),n(82),n(83);function Ze(){var e=Object(De.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    border: 1px solid transparent;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    ","\n    \n"]);return Ze=function(){return e},e}function et(){var e=Object(De.a)(["\n    background-color: #4285f4;\n    color: #fff;\n    \n    &:hover {\n        background-color: #357ae8;\n        border: 1px solid transparent;\n    }\n"]);return et=function(){return e},e}function tt(){var e=Object(De.a)(["\n    background-color: #fff;\n    color: #000;\n    border: 1px solid #000;\n    \n    &:hover {\n      background-color: #000;\n      color: #fff;\n      border: 1px solid transparent;\n    }\n"]);return tt=function(){return e},e}function nt(){var e=Object(De.a)(["\n    background-color: black;\n    color: white;\n    border: 1px solid transparent;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return nt=function(){return e},e}var rt=Object(Fe.a)(nt()),at=Object(Fe.a)(tt()),ct=Object(Fe.a)(et()),it=Fe.b.button(Ze(),function(e){return e.isGoogleSignIn?ct:e.inverted?at:rt}),ot=function(e){var t=e.children,n=Object(Le.a)(e,["children"]);return a.a.createElement(it,Object.assign({className:"custom-button"},n),t)},lt=function(){return{type:E}},st=function(e){return{type:v,payload:e}},ut=Object(Ne.b)(null,function(e){return{addItem:function(t){return e(st(t))}}})(function(e){var t=e.item,n=e.addItem,r=t.name,c=t.price,i=t.imageUrl;return a.a.createElement("div",{className:"collection-item"},a.a.createElement("div",{style:{backgroundImage:'url("'.concat(i,'")')},className:"image"}),a.a.createElement("div",{className:"collection-footer"},a.a.createElement("span",{className:"name"},r),a.a.createElement("span",{className:"price"},"$",c)),a.a.createElement(ot,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}),pt=function(e){var t=e.title,n=e.items;return a.a.createElement("div",{className:"collection-preview"},a.a.createElement("h1",{className:"title"},t.toUpperCase()),a.a.createElement("div",{className:"preview"},n.filter(function(e,t){return t<4}).map(function(e){return a.a.createElement(ut,{key:e.id,item:e})})))},mt=Object(Ue.b)({collections:We}),ft=Object(Ne.b)(mt)(function(e){var t=e.collections;return a.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(Le.a)(e,["id"]);return a.a.createElement(pt,Object.assign({key:t},n))}))}),dt=Object(Ue.b)({isLoading:Be}),bt=Object(o.d)(Object(Ne.b)(dt),Xe)(ft),Ot=(n(84),Object(Ne.b)(function(e,t){return{collection:(n=t.match.params.collectionId,Object(Ue.a)([Ve],function(e){return e?e[n]:null}))(e)};var n})(function(e){var t=e.collection,n=t.title,r=t.items,c=void 0===r?[]:r;return a.a.createElement("div",{className:"collection-page"},a.a.createElement("h2",{className:"title"},n),a.a.createElement("div",{className:"items"},c.map(function(e){return a.a.createElement(ut,{key:e.id,item:e})})))})),ht=Object(Ue.b)({isLoading:function(e){return!Je(e)}}),Et=Object(o.d)(Object(Ne.b)(ht),Xe)(Ot),vt=function(e){function t(){return Object(Ie.a)(this,t),Object(_e.a)(this,Object(ke.a)(t).apply(this,arguments))}return Object(xe.a)(t,e),Object(Se.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.fetchCollectionsStart)()}},{key:"render",value:function(){var e=this.props.match;return a.a.createElement("div",{className:"shop-page"},a.a.createElement(Pe.b,{exact:!0,path:"".concat(e.path),component:bt}),a.a.createElement(Pe.b,{path:"".concat(e.path,"/:collectionId"),component:Et}))}}]),t}(r.Component),gt=Object(Ne.b)(null,function(e){return{fetchCollectionsStart:function(){return e(Z())}}})(vt);n(85);function yt(){return(yt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function jt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var wt=a.a.createElement("title",null,"Group"),Nt=a.a.createElement("desc",null,"Created with Sketch."),Ct=a.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},a.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},a.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),a.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),a.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),It=function(e){var t=e.svgRef,n=jt(e,["svgRef"]);return a.a.createElement("svg",yt({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),wt,Nt,Ct)},St=a.a.forwardRef(function(e,t){return a.a.createElement(It,yt({svgRef:t},e))});n.p,n(86);function _t(){return(_t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function kt(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var xt=function(e){var t=e.svgRef,n=kt(e,["svgRef"]);return a.a.createElement("svg",_t({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a.a.createElement("g",null,a.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),a.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})))},Pt=a.a.forwardRef(function(e,t){return a.a.createElement(xt,_t({svgRef:t},e))}),Lt=(n.p,function(e){return e.cart}),Tt=Object(Ue.a)([Lt],function(e){return e.cartItems}),Ut=Object(Ue.a)([Lt],function(e){return e.hidden}),Gt=Object(Ue.a)([Tt],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),At=Object(Ue.a)([Tt],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),Rt=Object(Ue.b)({itemCount:Gt}),Dt=Object(Ne.b)(Rt,function(e){return{toggleCartHidden:function(){return e(lt())}}})(function(e){var t=e.toggleCartHidden,n=e.itemCount;return a.a.createElement("div",{className:"cart-icon",onClick:t},a.a.createElement(Pt,{className:"shopping-icon"}),a.a.createElement("span",{className:"item-count"},n))}),Ft=(n(87),n(88),function(e){var t=e.item,n=t.imageUrl,r=t.price,c=t.name,i=t.quantity;return a.a.createElement("div",{className:"cart-item"},a.a.createElement("img",{src:n,alt:"item"}),a.a.createElement("div",{className:"item-details"},a.a.createElement("span",{className:"name"},c),a.a.createElement("span",{className:"price"},i," \xd7 $",r)))}),Ht=Object(Ue.b)({cartItems:Tt}),Mt=Object(Pe.g)(Object(Ne.b)(Ht)(function(e){var t=e.cartItems,n=e.history,r=e.dispatch;return a.a.createElement("div",{className:"cart-dropdown"},a.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return a.a.createElement(Ft,{key:e.id,item:e})}):a.a.createElement("span",{className:"empty-message"},"Your cart is empty")),a.a.createElement(ot,{onClick:function(){n.push("/checkout"),r(lt())}},"GO TO CHECKOUT"))})),qt=Object(Ue.a)([function(e){return e.user},function(e){return e.cart}],function(e,t){return e.currentUser});function zt(){var e=Object(De.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return zt=function(){return e},e}function Vt(){var e=Object(De.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return Vt=function(){return e},e}function Wt(){var e=Object(De.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return Wt=function(){return e},e}function Bt(){var e=Object(De.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return Bt=function(){return e},e}var Jt=Fe.b.div(Bt()),Qt=Object(Fe.b)(we.b)(Wt()),Yt=Fe.b.div(Vt()),$t=Object(Fe.b)(we.b)(zt()),Kt=Object(Ue.b)({currentUser:qt,cartHidden:Ut}),Xt=Object(Ne.b)(Kt)(function(e){var t=e.currentUser,n=e.cartHidden;return a.a.createElement(Jt,null,a.a.createElement(Qt,{to:"/"},a.a.createElement(St,{className:"logo"})),a.a.createElement(Yt,null,a.a.createElement($t,{to:"/shop"},"SHOP"),a.a.createElement($t,{to:"/"},"CONTACT"),t?a.a.createElement($t,{to:"",as:"div",onClick:function(){return $.signOut()}},"SIGN OUT"):a.a.createElement($t,{to:"/sign-in"},"SIGN IN"),a.a.createElement(Dt,null)),!n&&a.a.createElement(Mt,null))}),Zt=(n(89),n(90),n(91),function(e){var t=e.handleChange,n=e.label,r=Object(Le.a)(e,["handleChange","label"]);return a.a.createElement("div",{className:"group"},a.a.createElement("input",Object.assign({className:"form-input",onChange:t},r)),n?a.a.createElement("label",{className:"".concat(r.value.length?"shrink":""," form-input-label")},n):null)}),en=function(e){function t(e){var n;return Object(Ie.a)(this,t),(n=Object(_e.a)(this,Object(ke.a)(t).call(this,e))).handleSubmit=function(){var e=Object(z.a)(M.a.mark(function e(t){var r,a,c;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=n.state,a=r.email,c=r.password,e.prev=2,e.next=5,$.signInWithEmailAndPassword(a,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,r=t.value,a=t.name;n.setState(Object(m.a)({},a,r))},n.clearFormFields=function(){return n.setState({email:"",password:""})},n.state={email:"",password:"",justLoggedIn:!1},n}return Object(xe.a)(t,e),Object(Se.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){this.props.currentUser&&null===e.currentUser&&this.setState({justLoggedIn:!0})}},{key:"render",value:function(){var e=this,t=this.props.googleSignInStart;return a.a.createElement(a.a.Fragment,null,this.state.justLoggedIn&&a.a.createElement(Pe.a,{to:"/"}),a.a.createElement("div",{className:"sign-in"},a.a.createElement("h2",{className:"title"},"I already have an account"),a.a.createElement("span",null,"Sign in with your email and password"),a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement(Zt,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),a.a.createElement(Zt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),a.a.createElement("div",{className:"buttons"},a.a.createElement(ot,{type:"submit"}," Sign in "),a.a.createElement(ot,{onClick:function(){e.clearFormFields(),t()},isGoogleSignIn:!0},"Sign in with Google")))))}}]),t}(a.a.Component),tn=Object(Ne.b)(function(e){return{currentUser:e.user.currentUser}},function(e){return{googleSignInStart:function(){return e({type:f.GOOGLE_SIGN_IN_START})}}})(en),nn=(n(92),function(e){function t(){var e,n;Object(Ie.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(_e.a)(this,(e=Object(ke.a)(t)).call.apply(e,[this].concat(a)))).state={displayName:"",email:"",password:"",confirmPassword:""},n.handleSubmit=function(){var e=Object(z.a)(M.a.mark(function e(t){var r,a,c,i,o,l,s;return M.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=n.state,a=r.displayName,c=r.email,i=r.password,o=r.confirmPassword,i===o){e.next=5;break}return alert("Passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,$.createUserWithEmailAndPassword(c,i);case 8:return l=e.sent,s=l.user,e.next=12,Q(s,{displayName:a});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0),alert(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[5,15]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,r=t.name,a=t.value;n.setState(Object(m.a)({},r,a))},n}return Object(xe.a)(t,e),Object(Se.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,r=e.password,c=e.confirmPassword;return a.a.createElement("div",{className:"sign-up"},a.a.createElement("h2",{className:"title"},"I do not have an account"),a.a.createElement("span",null,"Sign up with your email and password"),a.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},a.a.createElement(Zt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),a.a.createElement(Zt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),a.a.createElement(Zt,{type:"password",name:"password",value:r,onChange:this.handleChange,label:"Password",required:!0}),a.a.createElement(Zt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),a.a.createElement(ot,{type:"submit"},"SIGN UP")))}}]),t}(r.Component)),rn=function(){return a.a.createElement("div",{className:"sign-in-and-sign-up"},a.a.createElement(tn,null),a.a.createElement(nn,null))},an=(n(93),n(94),Object(Ne.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:y,payload:e}}(t))},addItem:function(t){return e(st(t))},removeItem:function(t){return e(function(e){return{type:g,payload:e}}(t))}}})(function(e){var t=e.cartItem,n=e.clearItem,r=e.addItem,c=e.removeItem,i=t.name,o=t.imageUrl,l=t.price,s=t.quantity;return a.a.createElement("div",{className:"checkout-item"},a.a.createElement("div",{className:"image-container"},a.a.createElement("img",{src:o,alt:"item"})),a.a.createElement("span",{className:"name"},i),a.a.createElement("span",{className:"quantity"},a.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),a.a.createElement("span",{className:"value"},s),a.a.createElement("div",{className:"arrow",onClick:function(){return r(t)}},"\u276f")),a.a.createElement("span",{className:"price"},l),a.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))})),cn=n(52),on=n.n(cn),ln=function(e){var t=e.price,n=100*t;return a.a.createElement(on.a,{label:"Pay Now",name:"CRWN Clothing Ltd",billingAddress:!0,shippingAddress:!0,image:"http://svgshare.com/i/CUz.svg",description:"Your total id $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_c4k45wqZQP0UdVM8vCtQm1lF00oYcu8kJd"})},sn=Object(Ue.b)({cartItems:Tt,total:At}),un=Object(Ne.b)(sn)(function(e){var t=e.cartItems,n=e.total;return a.a.createElement("div",{className:"checkout-page"},a.a.createElement("div",{className:"checkout-header"},a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Product")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Description")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Price")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Quantity")),a.a.createElement("div",{className:"header-block"},a.a.createElement("span",null,"Remove"))),t.map(function(e){return a.a.createElement(an,{key:e.id,cartItem:e})}),a.a.createElement("div",{className:"total"},"TOTAL: $",n),a.a.createElement(ln,{price:n}))}),pn=function(e){function t(){var e,n;Object(Ie.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(_e.a)(this,(e=Object(ke.a)(t)).call.apply(e,[this].concat(a)))).unsubscribeFromAuth=null,n}return Object(xe.a)(t,e),Object(Se.a)(t,[{key:"componentDidMount",value:function(){this.props.setCurrentUser}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(Xt,null),a.a.createElement(Pe.d,null,a.a.createElement(Pe.b,{exact:!0,path:"/",component:qe}),a.a.createElement(Pe.b,{path:"/shop",component:gt}),a.a.createElement(Pe.b,{exact:!0,path:"/checkout",component:un}),a.a.createElement(Pe.b,{exact:!0,path:"/sign-in",render:function(){return e.props.currentUser?a.a.createElement(Pe.a,{to:"/"}):a.a.createElement(rn,null)}})))}}]),t}(r.Component),mn=Object(Ue.b)({currentUser:qt}),fn=Object(Ne.b)(mn,function(e){return{setCurrentUser:function(t){return e(function(e){return{type:f.SET_CURRENT_USER,payload:e}}(t))}}})(pn);i.a.render(a.a.createElement(Ne.a,{store:ye},a.a.createElement(we.a,{basename:"/ecommerce-template"},a.a.createElement(Ce.a,{persistor:je},a.a.createElement(fn,null)))),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.64efe205.chunk.js.map