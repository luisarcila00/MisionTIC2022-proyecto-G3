(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fe6103d"],{1071:function(t,o,r){"use strict";r.r(o);var n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{attrs:{id:"cupos"}},[r("h1",[t._v("Cupos")]),r("v-btn",{attrs:{color:"warning",to:"/asignarCupos"}},[t._v("Registrar Cupos")]),r("v-container",[r("v-row",t._l(t.cupos,(function(t){return r("v-col",{key:t.code,attrs:{md:"4",sm:"6",cols:"12"}},[r("CuposCard",{attrs:{item:t}})],1)})),1)],1)],1)},a=[],e=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("v-card",[r("v-card-title",[r("b",[t._v("Cupos Totales")]),t._v(t._s(t.item.totalCup))]),r("v-card-subtitle",[r("b",[t._v("Cupos Reservados")]),t._v(" "+t._s(t.item.reservadosCup))]),r("v-card-subtitle",[r("b",[t._v("Cupos Carros")]),t._v(" "+t._s(t.item.carroCup))]),r("v-card-subtitle",[r("b",[t._v("Cupos Motos")]),t._v(" "+t._s(t.item.motoCup))]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"success",to:"/asignarCupos/"+t.item.code}},[t._v("Editar")]),r("v-btn",{attrs:{color:"error"},on:{click:function(o){return t.eliminar()}}},[t._v("Eliminar")])],1)],1)},s=[],c={props:["item"],methods:{editar:function(){console.log("editar ".concat(this.item.code)),this.$router.push("/asignarCupos/".concat(this.item.code))},eliminar:function(){console.log("Eliminar ".concat(this.item.code))}}},i=c,u=r("2877"),l=r("6544"),d=r.n(l),p=r("8336"),v=r("b0af"),C=r("99d9"),f=r("2fa4"),m=Object(u["a"])(i,e,s,!1,null,null,null),_=m.exports;d()(m,{VBtn:p["a"],VCard:v["a"],VCardActions:C["a"],VCardSubtitle:C["b"],VCardTitle:C["d"],VSpacer:f["a"]});var b=r("a90e"),h={components:{CuposCard:_},data:function(){return{cupos:[]}},mounted:function(){var t=this;Object(b["b"])().then((function(o){t.cupos=o.data})).catch((function(t){return console.error(t)}))}},V=h,g=r("62ad"),w=r("a523"),k=r("0fd9"),E=Object(u["a"])(V,n,a,!1,null,null,null);o["default"]=E.exports;d()(E,{VBtn:p["a"],VCol:g["a"],VContainer:w["a"],VRow:k["a"]})},a90e:function(t,o,r){"use strict";r.d(o,"b",(function(){return e})),r.d(o,"a",(function(){return s}));var n=r("328a"),a="api/asignarCupos",e=function(){return n["a"].get(a)},s=function(t){return n["a"].post(a,t)}}}]);
//# sourceMappingURL=chunk-2fe6103d.0be85dbd.js.map