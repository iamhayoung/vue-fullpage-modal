(window.webpackJsonp=window.webpackJsonp||[]).push([[10,23],{309:function(e,t,n){var r=n(2),o=n(1),i=n(15),s=n(24).f,a=n(10),u=o((function(){s(1)}));r({target:"Object",stat:!0,forced:!a||u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(i(e),t)}})},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(95),n(30),n(29),n(309),n(96),n(161);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},316:function(e,t,n){"use strict";n.r(t);var r=n(42),o=Object(r.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("div",{staticStyle:{"font-size":"1.5rem",padding:"1rem"}},[this._v("\n  Aliqua qui deserunt pariatur ullamco ex dolore mollit consequat eu ut id.\n  Amet elit nostrud aliqua laborum eiusmod anim reprehenderit excepteur\n  laboris nisi cupidatat ipsum nulla consequat.\n")])}),[],!1,null,null,null);t.default=o.exports},346:function(e,t,n){},392:function(e,t,n){"use strict";n(346)},407:function(e,t,n){"use strict";n.r(t);var r=n(311),o=n(316);function i(){window.top.postMessage("modal-closed")}var s={created:function(){if("true"===this.$route.query.open){var e={};if(this.$route.query.template&&(e.template=this.$route.query.template),this.$route.query.componentName&&(e.componentName=this.$route.query.componentName),this.$route.query.modalProps){var t=JSON.parse(this.$route.query.modalProps);e=Object(r.a)(Object(r.a)({},e),t)}this.renderOptions=e}},data:function(){return{renderOptions:{},opened:!1}},mounted:function(){this.$FModal.eventInterface.$on("modal-closed",this.toggleOpened),this.$FModal.eventInterface.$on("onClose",i),window.addEventListener("message",this.listenMessageFromParent)},destroyed:function(){this.$FModal.eventInterface.$off("onClose",i),window.removeEventListener("message",this.listenMessageFromParent)},methods:{listenMessageFromParent:function(e){"close"===e.data&&this.$FModal.hide()},toggleOpened:function(){this.opened=!this.opened},openModal:function(){this.opened=!0,this.$FModal.show({component:o.default,width:300,maxHeight:"100%",placement:"center center"})}}},a=(n(392),n(42)),u=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("button",{staticClass:"open",on:{click:this.openModal}},[this._v("\n    Open\n  ")])])}),[],!1,null,"dbedda38",null);t.default=u.exports}}]);