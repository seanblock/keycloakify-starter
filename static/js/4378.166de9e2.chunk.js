"use strict";(self.webpackChunkkeycloakify_starter=self.webpackChunkkeycloakify_starter||[]).push([[4378],{4378:function(e,a,r){r.r(a),r.d(a,{default:function(){return l}});var s=r(6055),n=r(7747),t=r(1652),c=r(8258),i=r(184);function l(e){var a=e.kcContext,r=e.i18n,l=e.doUseDefaultCss,o=e.active,d=e.classes,u=e.children,f=(0,t.v)({doUseDefaultCss:l,classes:d}).getClassName,p=r.msg,h=r.changeLocale,v=r.labelBySupportedLanguageTag,m=r.currentLanguageTag,j=a.locale,x=a.url,y=a.features,g=a.realm,N=a.message,b=a.referrer;return(0,n.M)({doFetchDefaultThemeResources:l,styles:["".concat(x.resourcesCommonPath,"/node_modules/patternfly/dist/css/patternfly.min.css"),"".concat(x.resourcesCommonPath,"/node_modules/patternfly/dist/css/patternfly-additions.min.css"),"".concat(x.resourcesPath,"/css/account.css")],htmlClassName:void 0,bodyClassName:(0,s.W)("admin-console","user",f("kcBodyClass"))}).isReady?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("header",{className:"navbar navbar-default navbar-pf navbar-main header",children:(0,i.jsxs)("nav",{className:"navbar",role:"navigation",children:[(0,i.jsx)("div",{className:"navbar-header",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("h1",{className:"navbar-title",children:"Keycloak"})})}),(0,i.jsx)("div",{className:"navbar-collapse navbar-collapse-1",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("ul",{className:"nav navbar-nav navbar-utility",children:[g.internationalizationEnabled&&((0,c.h)(void 0!==j),!0)&&j.supported.length>1&&(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:"kc-dropdown",id:"kc-locale-dropdown",children:[(0,i.jsx)("a",{href:"#",id:"kc-current-locale-link",children:v[m]}),(0,i.jsx)("ul",{children:j.supported.map((function(e){var a=e.languageTag;return(0,i.jsx)("li",{className:"kc-dropdown-item",children:(0,i.jsx)("a",{href:"#",onClick:function(){return h(a)},children:v[a]})},a)}))})]})}),(null===b||void 0===b?void 0:b.url)&&(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:b.url,id:"referrer",children:p("backTo",b.name)})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:x.getLogoutUrl(),children:p("doSignOut")})})]})})})]})}),(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"bs-sidebar col-sm-3",children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{className:(0,s.W)("account"===o&&"active"),children:(0,i.jsx)("a",{href:x.accountUrl,children:p("account")})}),y.passwordUpdateSupported&&(0,i.jsx)("li",{className:(0,s.W)("password"===o&&"active"),children:(0,i.jsx)("a",{href:x.passwordUrl,children:p("password")})}),(0,i.jsx)("li",{className:(0,s.W)("totp"===o&&"active"),children:(0,i.jsx)("a",{href:x.totpUrl,children:p("authenticator")})}),y.identityFederation&&(0,i.jsx)("li",{className:(0,s.W)("social"===o&&"active"),children:(0,i.jsx)("a",{href:x.socialUrl,children:p("federatedIdentity")})}),(0,i.jsx)("li",{className:(0,s.W)("sessions"===o&&"active"),children:(0,i.jsx)("a",{href:x.sessionsUrl,children:p("sessions")})}),(0,i.jsx)("li",{className:(0,s.W)("applications"===o&&"active"),children:(0,i.jsx)("a",{href:x.applicationsUrl,children:p("applications")})}),y.log&&(0,i.jsx)("li",{className:(0,s.W)("log"===o&&"active"),children:(0,i.jsx)("a",{href:x.logUrl,children:p("log")})}),g.userManagedAccessAllowed&&y.authorization&&(0,i.jsx)("li",{className:(0,s.W)("authorization"===o&&"active"),children:(0,i.jsx)("a",{href:x.resourceUrl,children:p("myResources")})})]})}),(0,i.jsxs)("div",{className:"col-sm-9 content-area",children:[void 0!==N&&(0,i.jsxs)("div",{className:(0,s.W)("alert","alert-".concat(N.type)),children:["success"===N.type&&(0,i.jsx)("span",{className:"pficon pficon-ok"}),"error"===N.type&&(0,i.jsx)("span",{className:"pficon pficon-error-circle-o"}),(0,i.jsx)("span",{className:"kc-feedback-text",children:N.summary})]}),u]})]})]}):null}},1652:function(e,a,r){r.d(a,{v:function(){return s}});var s=(0,r(2889).a)({defaultClasses:{kcBodyClass:void 0,kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonLargeClass:"btn-lg",kcButtonDefaultClass:"btn-default"}}).useGetClassName},2889:function(e,a,r){r.d(a,{a:function(){return t}});var s=r(6055),n=r(969);function t(e){var a=e.defaultClasses;return{useGetClassName:function(e){var r=e.classes;return{getClassName:(0,n.O)((function(e){return(0,s.W)(e,a[e],null===r||void 0===r?void 0:r[e])}))}}}}},7747:function(e,a,r){r.d(a,{M:function(){return d}});var s=r(2982),n=r(4165),t=r(5861),c=r(885),i=r(2791),l=r(1630),o=r(6055);function d(e){var a=e.doFetchDefaultThemeResources,r=e.styles,s=void 0===r?[]:r,o=e.scripts,d=void 0===o?[]:o,f=e.htmlClassName,p=e.bodyClassName,h=(0,i.useReducer)((function(){return!0}),!a),v=(0,c.Z)(h,2),m=v[0],j=v[1];return(0,i.useEffect)((function(){if(a){var e=!1,r=[];return(0,t.Z)((0,n.Z)().mark((function a(){var t;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=[],s.reverse().forEach((function(e){var a=(0,l.t)({type:"css",position:"prepend",href:e}),s=a.prLoaded,n=a.remove;r.push(n),t.push(s)})),a.next=4,Promise.all(t);case 4:if(!e){a.next=6;break}return a.abrupt("return");case 6:j();case 7:case"end":return a.stop()}}),a)})))(),d.forEach((function(e){var a=(0,l.t)({type:"javascript",src:e}).remove;r.push(a)})),function(){e=!0,r.forEach((function(e){return e()}))}}}),[]),u({target:"html",className:f}),u({target:"body",className:p}),{isReady:m}}function u(e){var a=e.target,r=e.className;(0,i.useEffect)((function(){if(void 0!==r){var e=document.getElementsByTagName(a)[0].classList,n=(0,o.W)(r).split(" ");return e.add.apply(e,(0,s.Z)(n)),function(){e.remove.apply(e,(0,s.Z)(n))}}}),[r])}},4943:function(){HTMLElement.prototype.prepend||(HTMLElement.prototype.prepend=function(e){if("string"===typeof e)throw new Error("Error with HTMLElement.prototype.appendFirst polyfill");this.insertBefore(e,this.firstChild)})},8258:function(e,a,r){r.d(a,{h:function(){return s.h}});var s=r(9883)},6055:function(e,a,r){r.d(a,{W:function(){return c}});var s=r(2982),n=r(9883),t=r(9465),c=function e(){for(var a=arguments.length,r=0,c="";r<a;r++){var i=r<0||arguments.length<=r?void 0:arguments[r];if(null!=i){var l=void 0;switch(typeof i){case"boolean":break;case"object":if(Array.isArray(i))l=e.apply(void 0,(0,s.Z)(i));else for(var o in(0,n.h)(!(0,t.z)(i,!1)),l="",i)i[o]&&o&&(l&&(l+=" "),l+=o);break;default:l=i}l&&(c&&(c+=" "),c+=l)}}return c}},1630:function(e,a,r){r.d(a,{t:function(){return n}});r(4943);var s=r(3172);function n(e){var a=document.createElement(function(){switch(e.type){case"css":return"link";case"javascript":return"script"}}()),r=new s.Deferred;return a.addEventListener("load",(function(){return r.resolve()})),Object.assign(a,function(){switch(e.type){case"css":return{href:e.href,type:"text/css",rel:"stylesheet",media:"screen,print"};case"javascript":return{src:e.src,type:"text/javascript"}}}()),document.getElementsByTagName("head")[0][function(){switch(e.type){case"javascript":return"appendChild";case"css":return function(){switch(e.position){case"append":return"appendChild";case"prepend":return"prepend"}}()}}()](a),{prLoaded:r.pr,remove:function(){return a.remove()}}}},9465:function(e,a,r){function s(e,a){return a}r.d(a,{z:function(){return s}})}}]);
//# sourceMappingURL=4378.166de9e2.chunk.js.map