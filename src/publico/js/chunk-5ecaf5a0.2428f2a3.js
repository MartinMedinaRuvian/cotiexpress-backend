(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ecaf5a0"],{ad0d:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"text-center container-inicio-sesion"},[t("Mensaje",{attrs:{mensaje:e.mensaje}}),e._m(0),t("p",[e._v("Registro")]),t("div",{staticClass:"d-flex justify-content-center align-items-center container"},[t("div",{staticClass:"row"},[t("form",{staticClass:"formulario",on:{submit:function(a){return a.preventDefault(),e.guardar()}}},[t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.username,expression:"usuario.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Usuario",required:""},domProps:{value:e.usuario.username},on:{input:function(a){a.target.composing||e.$set(e.usuario,"username",a.target.value)}}})]),t("div",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.usuario.password,expression:"usuario.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Contraseña",required:""},domProps:{value:e.usuario.password},on:{input:function(a){a.target.composing||e.$set(e.usuario,"password",a.target.value)}}})]),e._m(1)])])]),t("div",{staticClass:"footer-formulario mt-3"},[t("p",[e._v("¿Ya tienes una cuenta?")]),t("router-link",{staticClass:"color-verde-principal link-crear-cuenta",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/inicio-sesion"}},[e._v("Iniciar sesión")])],1)],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h1",[t("span",[e._v("So")]),t("span",{staticClass:"color-verde-principal"},[e._v("Mar")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Continuar")])])}],n=t("b4db"),o={data:function(){return{usuario:{},usuarioGuardado:{},mensaje:{ver:!1}}},methods:{crearMensaje:function(e,a){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=a},guardar:function(){var e=this;this.axios.post("usuarios",this.usuario).then((function(a){200===a.status&&(e.usuarioGuardado=a.data,e.$router.push({name:"ClienteRegistro",params:{usuario:e.usuarioGuardado}}))})).catch((function(a){e.crearMensaje(a.response.data.mensaje,"danger")}))}},components:{Mensaje:n["a"]}},i=o,u=t("2877"),c=Object(u["a"])(i,s,r,!1,null,null,null);a["default"]=c.exports},b4db:function(e,a,t){"use strict";var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container"},[e.mensaje.ver?t("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[t("h6",[e._v(e._s(e.mensaje.contenido))]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},r=[],n={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,4e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},o=n,i=t("2877"),u=Object(i["a"])(o,s,r,!1,null,null,null);a["a"]=u.exports}}]);
//# sourceMappingURL=chunk-5ecaf5a0.2428f2a3.js.map