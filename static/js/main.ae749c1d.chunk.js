(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{52:function(e,t,n){e.exports=n(90)},57:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),i=n.n(c),l=(n(57),n(13)),o=n(31),s=n(43),u=n.n(s),m=n(5),d="SET_CURRENT_USER",p={currentUser:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(m.a)({},e,{currentUser:t.payload});default:return e}},b="TOGGLE_CART_HIDDEN",h="ADD_ITEM",v="REMOVE_ITEM",g="CLEAR_ITEM_FROM_CART",E=n(49),O=function(e,t){return 1===e.find(function(e){return e.id===t.id}).quantity?e:e.map(function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity-1}):e})},y={hidden:!0,cartItems:[]},j=function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(m.a)({},n,{hidden:!n.hidden});case h:return Object(m.a)({},n,{cartItems:(e=n.cartItems,t=a.payload,e.find(function(e){return e.id===t.id})?e.map(function(e){return e.id===t.id?Object(m.a)({},e,{quantity:e.quantity+1}):e}):[].concat(Object(E.a)(e),[Object(m.a)({},t,{quantity:1})]))});case v:return Object(m.a)({},n,{cartItems:O(n.cartItems,a.payload)});case g:return Object(m.a)({},n,{cartItems:n.cartItems.filter(function(e){return e.id!==a.payload.id})});default:return n}},w={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return(arguments.length>1?arguments[1]:void 0).type,e},N={UPDATE_COLLECTIONS:"UPDATE_COLLECTIONS"},C={collections:null},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N.UPDATE_COLLECTIONS:return Object(m.a)({},e,{collections:t.payload});default:return e}},I={key:"root",storage:u.a,whitelist:["cart"]},S=Object(l.c)({user:f,cart:j,directory:k,shop:x}),U=Object(o.a)(I,S),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,A=Object(l.e)(U,P(Object(l.a)())),T=Object(o.b)(A),L=n(18),R=n(4),_=n(44),D=n(6),q=n.n(D),H=n(15),M=n(20),F=n(21),G=n(23),z=n(22),V=n(24),W=(n(65),n(17)),B=n(28),J=n.n(B);n(66),n(69);J.a.initializeApp({apiKey:"AIzaSyDT6wAmtJC1oyxINyuVmylfUp42J7Fy7YQ",authDomain:"crwn-db-af805.firebaseapp.com",databaseURL:"https://crwn-db-af805.firebaseio.com",projectId:"crwn-db-af805",storageBucket:"",messagingSenderId:"797292889190",appId:"1:797292889190:web:3d576eebd84976f9"});var Q=function(){var e=Object(H.a)(q.a.mark(function e(t,n){var a,r,c,i;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=$.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,a.set(Object(m.a)({displayName:r,email:c,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}},e,null,[[9,14]])}));return function(t,n){return e.apply(this,arguments)}}(),Y=J.a.auth(),$=J.a.firestore(),K=new J.a.auth.GoogleAuthProvider;K.setCustomParameters({prompt:"select_account"});J.a;var X=n(16),Z=(n(71),Object(W.g)(function(e){var t=e.title,n=e.imageUrl,a=e.size,c=e.history,i=e.linkUrl,l=e.match;return r.a.createElement("div",{className:"menu-item ".concat(a),onClick:function(){return c.push("".concat(l.url).concat(i))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:'url("'.concat(n,'")')}}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"title"},t),r.a.createElement("span",{className:"subtitle"},"SHOP NOW")))})),ee=(n(73),n(2)),te=Object(ee.a)([function(e){return e.directory}],function(e){return e.sections}),ne=Object(ee.b)({sections:te}),ae=Object(R.b)(ne)(function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map(function(e){var t=e.id,n=Object(X.a)(e,["id"]);return r.a.createElement(Z,Object.assign({key:t},n))}))}),re=n(7),ce=n(8);function ie(){var e=Object(re.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px 80px;\n"]);return ie=function(){return e},e}var le=ce.b.div(ie()),oe=function(){return r.a.createElement(le,null,r.a.createElement(ae,null))};n(75),n(76),n(77),n(78);function se(){var e=Object(re.a)(["\n    min-width: 165px;\n    width: auto;\n    height: 50px;\n    letter-spacing: 0.5px;\n    line-height: 50px;\n    padding: 0 35px 0 35px;\n    font-size: 15px;\n    border: 1px solid transparent;\n    text-transform: uppercase;\n    font-family: 'Open Sans Condensed';\n    font-weight: bolder;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    ","\n    \n"]);return se=function(){return e},e}function ue(){var e=Object(re.a)(["\n    background-color: #4285f4;\n    color: #fff;\n    \n    &:hover {\n        background-color: #357ae8;\n        border: 1px solid transparent;\n    }\n"]);return ue=function(){return e},e}function me(){var e=Object(re.a)(["\n    background-color: #fff;\n    color: #000;\n    border: 1px solid #000;\n    \n    &:hover {\n      background-color: #000;\n      color: #fff;\n      border: 1px solid transparent;\n    }\n"]);return me=function(){return e},e}function de(){var e=Object(re.a)(["\n    background-color: black;\n    color: white;\n    border: 1px solid transparent;\n    &:hover {\n        background-color: white;\n        color: black;\n        border: 1px solid black;\n    }\n"]);return de=function(){return e},e}var pe=Object(ce.a)(de()),fe=Object(ce.a)(me()),be=Object(ce.a)(ue()),he=ce.b.button(se(),function(e){return e.isGoogleSignIn?be:e.inverted?fe:pe}),ve=function(e){var t=e.children,n=Object(X.a)(e,["children"]);return r.a.createElement(he,Object.assign({className:"custom-button"},n),t)},ge=function(){return{type:b}},Ee=function(e){return{type:h,payload:e}},Oe=Object(R.b)(null,function(e){return{addItem:function(t){return e(Ee(t))}}})(function(e){var t=e.item,n=e.addItem,a=t.name,c=t.price,i=t.imageUrl;return r.a.createElement("div",{className:"collection-item"},r.a.createElement("div",{style:{backgroundImage:'url("'.concat(i,'")')},className:"image"}),r.a.createElement("div",{className:"collection-footer"},r.a.createElement("span",{className:"name"},a),r.a.createElement("span",{className:"price"},"$",c)),r.a.createElement(ve,{onClick:function(){return n(t)},inverted:!0},"Add to cart"))}),ye=function(e){var t=e.title,n=e.items;return r.a.createElement("div",{className:"collection-preview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},n.filter(function(e,t){return t<4}).map(function(e){return r.a.createElement(Oe,{key:e.id,item:e})})))},je=Object(ee.a)([function(e){return e.shop}],function(e){return e.collections}),we=Object(ee.a)([je],function(e){return e?Object.keys(e).map(function(t){return e[t]}):[]}),ke=Object(ee.b)({collections:we}),Ne=Object(R.b)(ke)(function(e){var t=e.collections;return r.a.createElement("div",{className:"collections-overview"},t.map(function(e){var t=e.id,n=Object(X.a)(e,["id"]);return r.a.createElement(ye,Object.assign({key:t},n))}))}),Ce=(n(79),Object(R.b)(function(e,t){return{collection:(n=t.match.params.collectionId,Object(ee.a)([je],function(e){return e?e[n]:null}))(e)};var n})(function(e){var t=e.collection;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h2",{className:"title"},t?t.title:""),r.a.createElement("div",{className:"items"},t&&t.items.map(function(e){return r.a.createElement(Oe,{key:e.id,item:e})})))}));function xe(){var e=Object(re.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return xe=function(){return e},e}function Ie(){var e=Object(re.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ie=function(){return e},e}var Se=ce.b.div(Ie()),Ue=ce.b.div(xe()),Pe=function(e){return function(t){var n=t.isLoading,a=Object(X.a)(t,["isLoading"]);return n?r.a.createElement(Se,null,r.a.createElement(Ue,null)):r.a.createElement(e,a)}},Ae=Pe(Ne),Te=Pe(Ce),Le=function(e){function t(){var e,n;Object(M.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0},n.unsubscribeFromSnapshot=null,n}return Object(V.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.updateCollections,n=$.collection("collections");this.unsubscribeFromSnapshot=n.onSnapshot(function(){var n=Object(H.a)(q.a.mark(function n(a){var r;return q.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:r=a.docs.map(function(e){var t=e.data(),n=t.title,a=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:a}}).reduce(function(e,t){return e[t.title.toLowerCase()]=t,e},{}),t(r),e.setState({loading:!1});case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this.props.match,t=this.state.loading;return r.a.createElement("div",{className:"shop-page"},r.a.createElement(W.b,{exact:!0,path:"".concat(e.path),render:function(e){return r.a.createElement(Ae,Object.assign({isLoading:t},e))}}),r.a.createElement(W.b,{path:"".concat(e.path,"/:collectionId"),render:function(e){return r.a.createElement(Te,Object.assign({isLoading:t},e))}}))}}]),t}(a.Component),Re=Object(R.b)(null,function(e){return{updateCollections:function(t){return e(function(e){return{type:N.UPDATE_COLLECTIONS,payload:e}}(t))}}})(Le);n(80);function _e(){return(_e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function De(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var qe=r.a.createElement("title",null,"Group"),He=r.a.createElement("desc",null,"Created with Sketch."),Me=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),Fe=function(e){var t=e.svgRef,n=De(e,["svgRef"]);return r.a.createElement("svg",_e({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),qe,He,Me)},Ge=r.a.forwardRef(function(e,t){return r.a.createElement(Fe,_e({svgRef:t},e))});n.p,n(81);function ze(){return(ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Ve(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var We=function(e){var t=e.svgRef,n=Ve(e,["svgRef"]);return r.a.createElement("svg",ze({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})))},Be=r.a.forwardRef(function(e,t){return r.a.createElement(We,ze({svgRef:t},e))}),Je=(n.p,function(e){return e.cart}),Qe=Object(ee.a)([Je],function(e){return e.cartItems}),Ye=Object(ee.a)([Je],function(e){return e.hidden}),$e=Object(ee.a)([Qe],function(e){return e.reduce(function(e,t){return e+t.quantity},0)}),Ke=Object(ee.a)([Qe],function(e){return e.reduce(function(e,t){return e+t.quantity*t.price},0)}),Xe=Object(ee.b)({itemCount:$e}),Ze=Object(R.b)(Xe,function(e){return{toggleCartHidden:function(){return e(ge())}}})(function(e){var t=e.toggleCartHidden,n=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(Be,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},n))}),et=(n(82),n(83),function(e){var t=e.item,n=t.imageUrl,a=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:n,alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," \xd7 $",a)))}),tt=Object(ee.b)({cartItems:Qe}),nt=Object(W.g)(Object(R.b)(tt)(function(e){var t=e.cartItems,n=e.history,a=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map(function(e){return r.a.createElement(et,{key:e.id,item:e})}):r.a.createElement("span",{className:"empty-message"},"Your cart is empty")),r.a.createElement(ve,{onClick:function(){n.push("/checkout"),a(ge())}},"GO TO CHECKOUT"))})),at=Object(ee.a)([function(e){return e.user},function(e){return e.cart}],function(e,t){return e.currentUser});function rt(){var e=Object(re.a)(["\n    padding: 10px 15px;\n    cursor: pointer;\n"]);return rt=function(){return e},e}function ct(){var e=Object(re.a)(["\n    width: 50%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n"]);return ct=function(){return e},e}function it(){var e=Object(re.a)(["\n    height: 100%;\n    width: 70px;\n    padding: 25px;\n"]);return it=function(){return e},e}function lt(){var e=Object(re.a)(["\n  height: 70px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n"]);return lt=function(){return e},e}var ot=ce.b.div(lt()),st=Object(ce.b)(L.b)(it()),ut=ce.b.div(ct()),mt=Object(ce.b)(L.b)(rt()),dt=Object(ee.b)({currentUser:at,cartHidden:Ye}),pt=Object(R.b)(dt)(function(e){var t=e.currentUser,n=e.cartHidden;return r.a.createElement(ot,null,r.a.createElement(st,{to:"/"},r.a.createElement(Ge,{className:"logo"})),r.a.createElement(ut,null,r.a.createElement(mt,{to:"/shop"},"SHOP"),r.a.createElement(mt,{to:"/"},"CONTACT"),t?r.a.createElement(mt,{as:"div",onClick:function(){return Y.signOut()}},"SIGN OUT"):r.a.createElement(mt,{to:"/sign-in"},"SIGN IN"),r.a.createElement(Ze,null)),!n&&r.a.createElement(nt,null))}),ft=(n(84),n(27)),bt=(n(85),n(86),function(e){var t=e.handleChange,n=e.label,a=Object(X.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("label",{className:"".concat(a.value.length?"shrink":""," form-input-label")},n):null)}),ht=function(e){function t(e){var n;return Object(M.a)(this,t),(n=Object(G.a)(this,Object(z.a)(t).call(this,e))).handleSubmit=function(){var e=Object(H.a)(q.a.mark(function e(t){var a,r,c;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=n.state,r=a.email,c=a.password,e.prev=2,e.next=5,Y.signInWithEmailAndPassword(r,c);case 5:n.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.value,r=t.name;n.setState(Object(ft.a)({},r,a))},n.clearFormFields=function(){return n.setState({email:"",password:""})},n.state={email:"",password:"",justLoggedIn:!1},n}return Object(V.a)(t,e),Object(F.a)(t,[{key:"componentDidUpdate",value:function(e,t,n){this.props.currentUser&&null===e.currentUser&&this.setState({justLoggedIn:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.justLoggedIn&&r.a.createElement(W.a,{to:"/"}),r.a.createElement("div",{className:"sign-in"},r.a.createElement("h2",{className:"title"},"I already have an account"),r.a.createElement("span",null,"Sign in with your email and password"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(bt,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),r.a.createElement(bt,{name:"password",type:"password",value:this.state.password,handleChange:this.handleChange,label:"password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(ve,{type:"submit"}," Sign in "),r.a.createElement(ve,{onClick:function(){e.clearFormFields(),Y.signInWithPopup(K)},isGoogleSignIn:!0},"Sign in with Google")))))}}]),t}(r.a.Component),vt=Object(R.b)(function(e){return{currentUser:e.user.currentUser}})(ht),gt=(n(87),function(e){function t(){var e,n;Object(M.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).state={displayName:"",email:"",password:"",confirmPassword:""},n.handleSubmit=function(){var e=Object(H.a)(q.a.mark(function e(t){var a,r,c,i,l,o,s;return q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a=n.state,r=a.displayName,c=a.email,i=a.password,l=a.confirmPassword,i===l){e.next=5;break}return alert("Passwords don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,Y.createUserWithEmailAndPassword(c,i);case 8:return o=e.sent,s=o.user,e.next=12,Q(s,{displayName:r});case 12:n.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0),alert(e.t0.message);case 19:case"end":return e.stop()}},e,null,[[5,15]])}));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(ft.a)({},a,r))},n}return Object(V.a)(t,e),Object(F.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,n=e.email,a=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up"},r.a.createElement("h2",{className:"title"},"I do not have an account"),r.a.createElement("span",null,"Sign up with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(bt,{type:"text",name:"displayName",value:t,onChange:this.handleChange,label:"Display Name",required:!0}),r.a.createElement(bt,{type:"email",name:"email",value:n,onChange:this.handleChange,label:"Email",required:!0}),r.a.createElement(bt,{type:"password",name:"password",value:a,onChange:this.handleChange,label:"Password",required:!0}),r.a.createElement(bt,{type:"password",name:"confirmPassword",value:c,onChange:this.handleChange,label:"Confirm Password",required:!0}),r.a.createElement(ve,{type:"submit"},"SIGN UP")))}}]),t}(a.Component)),Et=function(){return r.a.createElement("div",{className:"sign-in-and-sign-up"},r.a.createElement(vt,null),r.a.createElement(gt,null))},Ot=(n(88),n(89),Object(R.b)(null,function(e){return{clearItem:function(t){return e(function(e){return{type:g,payload:e}}(t))},addItem:function(t){return e(Ee(t))},removeItem:function(t){return e(function(e){return{type:v,payload:e}}(t))}}})(function(e){var t=e.cartItem,n=e.clearItem,a=e.addItem,c=e.removeItem,i=t.name,l=t.imageUrl,o=t.price,s=t.quantity;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:l,alt:"item"})),r.a.createElement("span",{className:"name"},i),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){return c(t)}},"\u276e"),r.a.createElement("span",{className:"value"},s),r.a.createElement("div",{className:"arrow",onClick:function(){return a(t)}},"\u276f")),r.a.createElement("span",{className:"price"},o),r.a.createElement("div",{className:"remove-button",onClick:function(){return n(t)}},"\u2715"))})),yt=n(48),jt=n.n(yt),wt=function(e){var t=e.price,n=100*t;return r.a.createElement(jt.a,{label:"Pay Now",name:"CRWN Clothing Ltd",billingAddress:!0,shippingAddress:!0,image:"http://svgshare.com/i/CUz.svg",description:"Your total id $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){console.log(e),alert("Payment Successful")},stripeKey:"pk_test_c4k45wqZQP0UdVM8vCtQm1lF00oYcu8kJd"})},kt=Object(ee.b)({cartItems:Qe,total:Ke}),Nt=Object(R.b)(kt)(function(e){var t=e.cartItems,n=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Description")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"header-block"},r.a.createElement("span",null,"Remove"))),t.map(function(e){return r.a.createElement(Ot,{key:e.id,cartItem:e})}),r.a.createElement("div",{className:"total"},"TOTAL: $",n),r.a.createElement(wt,{price:n}))}),Ct=function(e){function t(){var e,n;Object(M.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(G.a)(this,(e=Object(z.a)(t)).call.apply(e,[this].concat(r)))).unsubscribeFromAuth=null,n}return Object(V.a)(t,e),Object(F.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubscribeFromAuth=Y.onAuthStateChanged(function(){var t=Object(H.a)(q.a.mark(function t(n){return q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n){t.next=5;break}return t.next=3,Q(n);case 3:t.sent.onSnapshot(function(t){e(Object(m.a)({id:t.id},t.data()))});case 5:e(n);case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(pt,null),r.a.createElement(W.d,null,r.a.createElement(W.b,{exact:!0,path:"/",component:oe}),r.a.createElement(W.b,{path:"/shop",component:Re}),r.a.createElement(W.b,{exact:!0,path:"/checkout",component:Nt}),r.a.createElement(W.b,{exact:!0,path:"/sign-in",render:function(){return e.props.currentUser?r.a.createElement(W.a,{to:"/"}):r.a.createElement(Et,null)}})))}}]),t}(a.Component),xt=Object(ee.b)({currentUser:at}),It=Object(R.b)(xt,function(e){return{setCurrentUser:function(t){return e(function(e){return{type:d,payload:e}}(t))}}})(Ct);i.a.render(r.a.createElement(R.a,{store:A},r.a.createElement(L.a,{basename:"/ecommerce-template"},r.a.createElement(_.a,{persistor:T},r.a.createElement(It,null)))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.ae749c1d.chunk.js.map