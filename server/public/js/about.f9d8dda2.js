(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"mt-5":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:"","offset-xs3":""}},[r("h1",[e._v("Sign in to SmartList")]),r("v-form",[r("v-text-field",{attrs:{label:"Email",placeholder:"Email",value:e.loginEmail},on:{input:e.SET_LOGIN_EMAIL,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}}),r("v-text-field",{attrs:{label:"Password",placeholder:"Password",type:"password",autocomplete:"new-password",value:e.loginPassword},on:{input:e.SET_LOGIN_PASSWORD,keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}}),e.loginError?r("v-alert",{attrs:{type:"error"}},[e._v("\n            "+e._s(e.loginError)+"\n          ")]):e._e(),r("v-btn",{on:{click:e.login}},[r("v-icon",[e._v("fingerprint")]),e._v("Login\n          ")],1)],1)],1)],1)],1)},o=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach(function(t){Object(a["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var s={computed:c({},Object(i["e"])("authenticate",["loginEmail","loginPassword","loginError"])),methods:c({},Object(i["d"])("authenticate",["SET_LOGIN_EMAIL","SET_LOGIN_PASSWORD"]),{},Object(i["b"])("authenticate",["login"]))},p=s,u=r("2877"),f=Object(u["a"])(p,n,o,!1,null,"de9c8d16",null);t["default"]=f.exports}}]);
//# sourceMappingURL=about.f9d8dda2.js.map