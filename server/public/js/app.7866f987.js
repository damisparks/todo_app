(function(t){function e(e){for(var r,c,a=e[0],s=e[1],l=e[2],u=0,p=[];u<a.length;u++)c=a[u],o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},i=[];function c(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ae7bdab8"}[t]+".js"}function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=o[t]=[e,r]});e.push(n[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.src=c(t),i=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+i+")");c.type=r,c.request=i,n[1](c)}o[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5352:function(t,e,n){"use strict";var r=n("74f7"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("bf40");var r=n("31bd"),o=n("2b0e"),i=n("ce5b"),c=n.n(i);o["default"].use(c.a);var a=new c.a({}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("Toolbar"),n("div",{attrs:{id:"app"}},[n("router-view")],1)],1)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-toolbar",{attrs:{fixed:"","list-topbar":""}},[n("v-toolbar-items",[n("div",{staticClass:"my-2"},[n("v-icon",{staticClass:"ml-5",attrs:{medium:"",color:"white"}},[t._v("description")])],1),n("v-toolbar-title",{staticClass:"white--text my-2 font-weight-bold mr-7"},[t._v("SmartList")]),n("div",{staticClass:"my-2"},[t.isLoggedIn?n("v-btn",{attrs:{color:"white",small:"",to:"/",text:""}},[n("v-icon",{attrs:{color:"red accent-4"}},[t._v("list_alt")]),t._v("List\n        ")],1):t._e()],1)],1),n("v-spacer"),n("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[n("div",{staticClass:"my-2"},[t.isLoggedIn?t._e():n("v-btn",{staticClass:"mx-6",attrs:{small:"",color:"white",text:"",to:"/login"}},[n("v-icon",[t._v("fingerprint")]),t._v("Login\n        ")],1)],1),n("div",{staticClass:"my-2"},[t.isLoggedIn?t._e():n("v-btn",{staticClass:"mr-12",attrs:{small:"",color:"white",to:"/register"}},[n("v-icon",[t._v("person_add")]),t._v("Register\n        ")],1)],1),n("div",{staticClass:"my-2"},[t.isLoggedIn?n("v-btn",{staticClass:"mr-12",attrs:{small:"",color:"white"},on:{click:t.logout}},[n("v-icon",[t._v("directions_run")]),t._v("Logout\n        ")],1):t._e()],1)])],1)],1)},d=[],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62");function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var O={computed:E({},Object(f["c"])("authenticate",["isLoggedIn"])),methods:E({},Object(f["b"])("authenticate",["logout"]))},v=O,b=(n("5352"),n("2877")),m=Object(b["a"])(v,u,d,!1,null,"499efa9d",null),T=m.exports,h={components:{Toolbar:T}},g=h,y=(n("5c64"),Object(b["a"])(g,s,l,!1,null,"273fed7c",null)),S=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white elevation-2"},[n("v-toolbar",{attrs:{"top-toolbar":"",dense:"",flat:"",color:"primary"}},[n("v-toolbar-title",[t._v(t._s(t.title))])],1),n("div",{staticClass:"pl-4 pr-4 pt-2 pb-2"},[t._t("default",[t._v("Nothing is here for now")])],2)],1)},j=[],L={props:{title:String}},R=L,P=Object(b["a"])(R,w,j,!1,null,"49f54f64",null),I=P.exports,N=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",[n("v-flex",{attrs:{xs4:""}},[n("ListView")],1),t.currentList?n("v-flex",{attrs:{xs8:""}},[n("Todo")],1):t._e()],1)],1)},x=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Holder",{attrs:{title:"Lists"}},[t._l(t.lists,function(e){return n("div",{key:e.id,attrs:{dark:""}},[n("CanEditRecord",{attrs:{isEditable:!e.isEditable,title:e.title},on:{onClick:function(n){return t.listHasBeenCLicked(e)},onInput:function(n){return t.SET_LIST_TITLE({list:e,title:n})},onEdit:function(n){return t.SET_IS_EDITABLE(e)},onSave:function(n){return t.saveListTitle(e)},onDelete:function(n){return t.deleteList(e)}}})],1)}),n("CreateRecord",{attrs:{placeholder:"My list is .... ",value:t.newListName},on:{onInput:t.SET_NEW_LIST_NAME,create:t.createList}})],2)},C=[],A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{staticClass:"mt-2"},[n("v-flex",{attrs:{xs8:""}},[n("v-text-field",{attrs:{placeholder:t.placeholder,"single-line":"",solo:"",value:t.value},on:{input:function(e){return t.$emit("onInput",e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("create")}}})],1),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{staticClass:"ma-2",attrs:{color:"primary"},on:{click:function(e){return t.$emit("create")},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("create")}}},[n("v-icon",{attrs:{dark:""}},[t._v("add_circle")]),t._v("Create\n      ")],1)],1)],1)],1)},M=[],$={props:["placeholder","value"]},G=$,W=Object(b["a"])(G,A,M,!1,null,"204bd71a",null),B=W.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-left pl-4",attrs:{xs9:""}},[t._t("default"),t.isEditable?n("span",{on:{click:function(e){return t.$emit("onClick")}}},[t._v(t._s(t.title))]):t._e(),t.isEditable?t._e():n("v-text-field",{attrs:{autofocus:"",value:t.title},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("onSave")},input:function(e){return t.$emit("onInput",e)}}})],2),n("v-flex",{attrs:{xs3:""}},[t.isEditable?n("v-icon",{on:{click:function(e){return t.$emit("onEdit")}}},[t._v("\nedit\n")]):t._e(),t.isEditable?t._e():n("v-icon",{on:{click:function(e){return t.$emit("onSave")}}},[t._v("\ncheck_circle\n")]),n("v-icon",{on:{click:function(e){return t.$emit("onDelete")}}},[t._v("\ndelete\n")])],1)],1)],1)},V=[],H={props:["isEditable","title","record"]},K=H,F=Object(b["a"])(K,U,V,!1,null,"73a36c00",null),J=F.exports;function q(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function z(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?q(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):q(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var Y={components:{CreateRecord:B,CanEditRecord:J},mounted:function(){this.fetchList()},computed:z({},Object(f["e"])("lists",["newListName","lists"])),methods:z({listHasBeenCLicked:function(t){this.SET_CURRENT_LIST(t),this.fetchTodosForList(t)}},Object(f["d"])("lists",["SET_NEW_LIST_NAME","SET_IS_EDITABLE","CAN_NOT_SET_TO_EDIT","SET_LIST_TITLE","SET_CURRENT_LIST"]),{},Object(f["b"])("lists",["createList","fetchList","saveListTitle","deleteList"]),{},Object(f["b"])("todos",["fetchTodosForList"]))},Q=Y,X=(n("e04a"),Object(b["a"])(Q,D,C,!1,null,"9c945e64",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Holder",{staticClass:"ml-4",attrs:{title:"Todo"}},[t._l(t.todos,function(e){return n("div",{key:e.id,attrs:{dark:""}},[n("CanEditRecord",{attrs:{"is-editable":!e.isEditable,title:e.description},on:{onInput:function(n){return t.SET_TODO_DESCRIPTION({todo:e,description:n})},onEdit:function(n){return t.SET_IS_EDITABLE(e)},onSave:function(n){return t.saveTodo(e)},onDelete:function(n){return t.deleteTodo(e)}}},[n("v-icon",{on:{click:function(n){return t.checkClicked(e)}}},[t._v("\n"+t._s(e.accomplished?"check_box":"check_box_outline_blank")+"\n")])],1)],1)}),n("CreateRecord",{attrs:{placeholder:"I have to ....",value:t.newTodoName},on:{onInput:t.SET_NEW_TODO_NAME,create:t.createTodo}})],2)},et=[];function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?nt(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ot={components:{CreateRecord:B,CanEditRecord:J},computed:rt({},Object(f["e"])("todos",["todos","newTodoName"])),methods:rt({},Object(f["d"])("todos",["SET_NEW_TODO_NAME","SET_TODO_DESCRIPTION","SET_IS_EDITABLE","CAN_NOT_SET_TO_EDIT","TOGGLE_COMPLETED"]),{},Object(f["b"])("todos",["createTodo","saveTodo","deleteTodo"]),{checkClicked:function(t){this.TOGGLE_COMPLETED(t),this.saveTodo(t)}})},it=ot,ct=Object(b["a"])(it,tt,et,!1,null,"689a006a",null),at=ct.exports;function st(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function lt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?st(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):st(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ut={components:{ListView:Z,Todo:at},computed:lt({},Object(f["e"])("lists",["currentList"]),{},Object(f["c"])("authenticate",["isLoggedIn"])),mounted:function(){if(!this.isLoggedIn)return gt.push("/login")}},dt=ut,pt=Object(b["a"])(dt,k,x,!1,null,null,null),ft=pt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"mt-5":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs6:"","offset-xs3":""}},[n("h1",[t._v("Register")]),n("v-form",[n("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:t.email},on:{input:t.SET_EMAIL}}),n("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:t.password},on:{input:t.SET_PASSWORD}}),t.regError?n("v-alert",{attrs:{type:"error"}},[t._v(t._s(t.regError))]):t._e(),n("v-btn",{on:{click:t.register}},[n("v-icon",[t._v("account_box")]),t._v("Register\n        ")],1)],1)],1)],1)],1)},Et=[];function Ot(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function vt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ot(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var bt={computed:vt({},Object(f["e"])("authenticate",["email","password","regError"])),methods:vt({},Object(f["d"])("authenticate",["SET_EMAIL","SET_PASSWORD"]),{},Object(f["b"])("authenticate",["register"]))},mt=bt,Tt=Object(b["a"])(mt,_t,Et,!1,null,"3676fc42",null),ht=Tt.exports;o["default"].use(N["a"]);var gt=new N["a"]({mode:"history",base:"/",routes:[{path:"/",name:"lists",component:ft},{path:"/register",name:"register",component:ht},{path:"/login",name:"login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}}]}),yt=n("0e44"),St=(n("96cf"),n("3b8d")),wt=n("bc3a"),jt=n.n(wt),Lt=function(){return console.log(Nt.state),jt.a.create({baseURL:Nt.state.baseUrl,timeout:1e3,withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(Nt.state.authenticate.token)}})},Rt={namespaced:!0,state:{email:null,password:null,token:null,regError:null,loginPassword:null,loginEmail:null,loginError:null},mutations:{SET_EMAIL:function(t,e){t.email=e},SET_PASSWORD:function(t,e){t.password=e},SET_TOKEN:function(t,e){t.token=e},SET_REG_ERROR:function(t,e){t.regError=e},SET_LOGIN_EMAIL:function(t,e){t.loginEmail=e},SET_LOGIN_PASSWORD:function(t,e){t.loginPassword=e},SET_LOGIN_ERROR:function(t,e){t.loginError=e}},actions:{logout:function(t){var e=t.commit;e("SET_TOKEN",null),gt.push("/login")},register:function(){var t=Object(St["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,r("SET_REG_ERROR",null),t.prev=2,t.next=5,Lt().post("/auth/register",{email:n.email,password:n.password});case 5:o=t.sent,i=o.data,r("SET_TOKEN",i.token),gt.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),r("SET_REG_ERROR","An error occured trying to create your account.");case 14:case"end":return t.stop()}},t,null,[[2,11]])}));function e(e){return t.apply(this,arguments)}return e}(),login:function(){var t=Object(St["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=e.state,n("SET_LOGIN_ERROR",null),t.prev=2,t.next=5,Lt().post("/auth/login",{email:r.loginEmail,password:r.loginPassword});case 5:o=t.sent,i=o.data,n("SET_TOKEN",i.token),gt.push("/"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),n("SET_LOGIN_ERROR","Oops, An error occured trying to login");case 14:case"end":return t.stop()}},t,null,[[2,11]])}));function e(e){return t.apply(this,arguments)}return e}()},getters:{isLoggedIn:function(t){return!!t.token}}},Pt={namespaced:!0,state:{newTodoName:null,todos:[]},actions:{fetchTodosForList:function(t,e){var n=t.commit;return Lt().get("lists/".concat(e.id,"/todos")).then(function(t){var e=t.data;n("SET_TODO",e)})},createTodo:function(){var t=Object(St["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,o=e.rootState,t.prev=1,t.next=4,Lt().post("/lists/".concat(o.lists.currentList.id,"/todos"),{description:n.newTodoName});case 4:i=t.sent,c=i.data,r("APPEND_TODO",c),r("SET_NEW_TODO_NAME",null),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[1,10]])}));function e(e){return t.apply(this,arguments)}return e}(),saveTodo:function(t,e){var n=t.commit;return Lt().patch("/todos/".concat(e.id),e).then(function(){n("CAN_NOT_SET_TO_EDIT",e)})},deleteTodo:function(t,e){var n=t.commit;return Lt().delete("/todos/".concat(e.id)).then(function(){n("REMOVE_TODO",e)})}},mutations:{SET_TODO:function(t,e){t.todos=e},SET_NEW_TODO_NAME:function(t,e){t.newTodoName=e},APPEND_TODO:function(t,e){t.todos.push(e)},SET_TODO_DESCRIPTION:function(t,e){var n=e.todo,r=e.description;n.description=r},SET_IS_EDITABLE:function(t,e){o["default"].set(e,"isEditable",!0)},CAN_NOT_SET_TO_EDIT:function(t,e){o["default"].set(e,"isEditable",!1)},REMOVE_TODO:function(t,e){t.todos.splice(t.todos.indexOf(e),1)},TOGGLE_COMPLETED:function(t,e){e.accomplished=!e.accomplished}},getters:{}},It={namespaced:!0,state:{newListName:null,lists:[],currentList:null,onCreateError:null},mutations:{SET_CURRENT_LIST:function(t,e){t.currentList=e},SET_NEW_LIST_NAME:function(t,e){t.newListName=e},APPEND_LISTNAME:function(t,e){t.lists.push(e)},SET_ON_CREATE_ERROR:function(t,e){t.onCreateError=e},SET_NEW_LIST:function(t,e){t.lists=e},SET_IS_EDITABLE:function(t,e){o["default"].set(e,"isEditable",!0)},CAN_NOT_SET_TO_EDIT:function(t,e){o["default"].set(e,"isEditable",!1)},SET_LIST_TITLE:function(t,e){var n=e.list,r=e.title;n.title=r},REMOVE_LIST:function(t,e){t.lists.splice(t.lists.indexOf(e),1)}},actions:{createList:function(){var t=Object(St["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.state,r=e.commit,r("SET_ON_CREATE_ERROR",null),t.prev=2,t.next=5,Lt().post("/lists",{title:n.newListName});case 5:o=t.sent,i=o.data,r("APPEND_LISTNAME",i),r("SET_NEW_LIST_NAME",null),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),r("SET_ON_CREATE_ERROR","An error occured creating list.");case 14:case"end":return t.stop()}},t,null,[[2,11]])}));function e(e){return t.apply(this,arguments)}return e}(),fetchList:function(){var t=Object(St["a"])(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,Lt().get("/lists");case 4:r=t.sent,o=r.data,n("SET_NEW_LIST",o),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),n("SET_ON_CREATE_ERROR","Oops something happened. Your list could not loaded.");case 12:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e){return t.apply(this,arguments)}return e}(),saveListTitle:function(t,e){var n=t.commit;return Lt().patch("/lists/".concat(e.id),e).then(function(){n("CAN_NOT_SET_TO_EDIT",e)})},deleteList:function(t,e){var n=t.commit;return Lt().delete("/lists/".concat(e.id)).then(function(){n("REMOVE_LIST",e)})}},getters:{}};o["default"].use(f["a"]);var Nt=new f["a"].Store({strict:!0,state:{baseUrl:"http://127.0.0.1:3333"},mutations:{},actions:{},modules:{authenticate:Rt,lists:It,todos:Pt},plugins:[Object(yt["a"])()]});o["default"].config.productionTip=!1,o["default"].component("Holder",I),Object(r["sync"])(Nt,gt),new o["default"]({router:gt,store:Nt,render:function(t){return t(S)},vuetify:a}).$mount("#app")},"5c64":function(t,e,n){"use strict";var r=n("c2ae"),o=n.n(r);o.a},"74f7":function(t,e,n){},c2ae:function(t,e,n){},c91a:function(t,e,n){},e04a:function(t,e,n){"use strict";var r=n("c91a"),o=n.n(r);o.a}});
//# sourceMappingURL=app.7866f987.js.map