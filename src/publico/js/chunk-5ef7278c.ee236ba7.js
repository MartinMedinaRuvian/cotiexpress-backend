(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ef7278c"],{2234:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-center"},[s("h4",[e._v("¿Desea eliminar "+e._s(e.insumo.descripcion)+" ?")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.eliminar(e.insumo.codigo)}}},[e._v("Eliminar")])]),s("div",{staticClass:"col-md-6"},[s("button",{staticClass:"btn btn-info",on:{click:e.cancelar}},[e._v("Cancelar")])])]),s("Mensaje",{attrs:{mensaje:e.mensaje}})],1)},a=[],i=s("b4db"),r={data:function(){return{mensaje:{ver:!1}}},props:{insumo:Object},methods:{crearMensaje:function(e,t){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=t},cancelar:function(){this.$router.push({name:"Insumos"})},eliminar:function(e){var t=this;this.axios.delete("insumos/"+e).then((function(e){200===e.status&&t.$router.push({name:"Insumos"})})).catch((function(e){t.crearMensaje(e.response.data.mensaje,"danger")}))}},components:{Mensaje:i["a"]}},c=r,o=s("2877"),l=Object(o["a"])(c,n,a,!1,null,null,null);t["default"]=l.exports},b4db:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e.mensaje.ver?s("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[s("h6",[e._v(e._s(e.mensaje.contenido))]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},a=[],i={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,4e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},r=i,c=s("2877"),o=Object(c["a"])(r,n,a,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-5ef7278c.ee236ba7.js.map