(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec7b00a"],{b4db:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t.mensaje.ver?a("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+t.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[a("h6",[t._v(t._s(t.mensaje.contenido))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:t.cerrar}},[t._v("x")])]):t._e()])},c=[],n={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,4e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},r=n,i=a("2877"),o=Object(i["a"])(r,s,c,!1,null,null,null);e["a"]=o.exports},f7b3:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("h4",[t._v("Actualizar "+t._s(t.categoria.descripcion))]),a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.categoria.descripcion,expression:"categoria.descripcion"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Descripción",required:""},domProps:{value:t.categoria.descripcion},on:{input:function(e){e.target.composing||t.$set(t.categoria,"descripcion",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-success",on:{click:function(e){return t.actualizar(t.categoria.codigo)}}},[t._v("Actualizar")])]),a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-info",on:{click:t.cancelar}},[t._v("Cancelar")])])]),a("Mensaje",{attrs:{mensaje:t.mensaje}})],1)},c=[],n=a("b4db"),r={data:function(){return{categoriaGuardar:{},mensaje:{ver:!1}}},props:{categoria:Object},created:function(){},methods:{crearMensaje:function(t,e){this.mensaje.ver=!0,this.mensaje.contenido=t,this.mensaje.color=e},cancelar:function(){this.$router.push({name:"categorias"})},actualizar:function(t){var e=this;this.axios.put("categorias/"+t,this.categoria).then((function(t){200===t.status&&e.$router.push({name:"Categorias"})})).catch((function(t){e.crearMensaje(t.response.data.mensaje,"danger")}))}},components:{Mensaje:n["a"]}},i=r,o=a("2877"),l=Object(o["a"])(i,s,c,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-5ec7b00a.80534900.js.map