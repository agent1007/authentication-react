(this["webpackJsonpauthentication-react"]=this["webpackJsonpauthentication-react"]||[]).push([[0],{26:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var r=s(1),a=s.n(r),n=s(17),c=s.n(n),i=(s(26),s(7)),l=s(2),o=s.p+"static/media/logo-header.4410338f.svg",j=s(0);var h=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l.a,{path:"/signup",children:Object(j.jsxs)("header",{className:"header header_register",children:[Object(j.jsx)("img",{className:"header__logo header__logo_dark-theme",src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(j.jsx)("h1",{className:"header__title",children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!"})]})}),Object(j.jsx)(l.a,{path:"/signin",children:Object(j.jsxs)("header",{className:"header header_register",children:[Object(j.jsx)("img",{className:"header__logo header__logo_dark-theme",src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}),Object(j.jsx)("h1",{className:"header__title",children:"\u0420\u0430\u0434\u044b \u0432\u0438\u0434\u0435\u0442\u044c!"})]})})]})};var d=function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("h2",{className:"footer__title",children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u0445 BeatFilm."}),Object(j.jsxs)("div",{className:"footer__container",children:[Object(j.jsx)("p",{className:"footer__copyright",children:"\xa9 2021"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"footer__links",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer__link",href:"https://praktikum.yandex.ru",target:"_blank",rel:"noreferrer",children:"\u042f\u043d\u0434\u0435\u043a\u0441.\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer__link",href:"https://github.com/",target:"_blank",rel:"noreferrer",children:"Github"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer__link",href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"Facebook"})})]})})]})]})},u=s(8),m=s(11),b=s(10);function g(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),s=t[0],a=t[1],n=Object(r.useState)({}),c=Object(i.a)(n,2),l=c[0],o=c[1],j=Object(r.useState)(!1),h=Object(i.a)(j,2),d=h[0],u=h[1],g=Object(r.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),o(t),u(s)}),[a,o,u]);return{values:s,errors:l,isValid:d,handleChange:function(e){var t=e.target,r=t.name,n=t.value;a(Object(b.a)(Object(b.a)({},s),{},Object(m.a)({},r,n))),o(Object(b.a)(Object(b.a)({},l),{},Object(m.a)({},r,t.validationMessage))),u(t.closest("form").checkValidity())},setValues:a,resetForm:g}}var _=function(e){var t=e.onRegister,s=Object(l.f)(),r=g(),a=r.values,n=r.handleChange,c=r.resetForm,i=r.errors,o=r.isValid;return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),a.password&&a.email&&t(a).then(c).then((function(){return s.push("/movies")})).catch((function(e){return console.log(e)}))},children:[Object(j.jsxs)("div",{className:"register__inputs",children:[Object(j.jsxs)("div",{className:"register__input-container",children:[Object(j.jsx)("p",{className:"register__input-text",children:"\u0418\u043c\u044f"}),Object(j.jsx)("input",{type:"text",name:"name",className:"register__input",id:"name",value:a.name||"",onChange:n,minLength:"2",maxLength:"40",pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f -]{1,}",required:!0}),Object(j.jsxs)("span",{id:"name-error",className:"error error_register",children:[" ",i.name||""]})]}),Object(j.jsxs)("div",{className:"register__input-container",children:[Object(j.jsx)("p",{className:"register__input-text",children:"E-mail"}),Object(j.jsx)("input",{type:"email",name:"email",className:"register__input",id:"email",value:a.email||"",onChange:n,required:!0,minLength:2,maxLength:40}),Object(j.jsxs)("span",{id:"email-error",className:"error error_register",children:[" ",i.email||""]})]}),Object(j.jsxs)("div",{className:"register__input-container",children:[Object(j.jsx)("p",{className:"register__input-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",name:"password",className:"register__input",id:"password",value:a.password||"",onChange:n,required:!0,minLength:2,maxLength:40}),Object(j.jsxs)("span",{id:"password-error",className:"error error_register",children:[" ",i.password||""]})]})]}),Object(j.jsx)("button",{type:"submit",className:"register__submit-button ".concat(!o&&"register__submit-button_disabled"),disabled:!o,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(j.jsxs)("div",{className:"register__container",children:[Object(j.jsx)("p",{className:"regiser__text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(j.jsx)(u.b,{to:"/signin",className:"regiser__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var O=function(e){var t=e.onLogin,s=g(),r=s.values,a=s.handleChange,n=s.resetForm,c=s.errors,i=s.isValid,o=Object(l.f)();return Object(j.jsxs)("div",{className:"register",children:[Object(j.jsxs)("form",{className:"register__form",onSubmit:function(e){e.preventDefault(),r.password&&r.email&&t(r).then(n).then((function(){return o.push("/movies")})).catch((function(e){return console.log(e)}))},children:[Object(j.jsxs)("div",{className:"register__inputs",children:[Object(j.jsxs)("div",{className:"register__input-container",children:[Object(j.jsx)("p",{className:"register__input-text",children:"E-mail"}),Object(j.jsx)("input",{type:"email",name:"email",className:"register__input",id:"email",value:r.email||"",onChange:a,required:!0,minLength:2,maxLength:40}),Object(j.jsxs)("span",{id:"email-error",className:"error error_register",children:[" ",c.email||""]})]}),Object(j.jsxs)("div",{className:"register__input-container",children:[Object(j.jsx)("p",{className:"register__input-text",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(j.jsx)("input",{type:"password",name:"password",className:"register__input",id:"password",value:r.password||"",onChange:a,required:!0,minLength:2,maxLength:40}),Object(j.jsxs)("span",{id:"password-error",className:"error error_register",children:[" ",c.password||""]})]})]}),Object(j.jsx)("button",{type:"submit",className:"register__submit-button ".concat(!i&&"register__submit-button_disabled"),disabled:!i,children:"\u0412\u043e\u0439\u0442\u0438"})]}),Object(j.jsxs)("div",{className:"register__container",children:[Object(j.jsx)("p",{className:"regiser__text",children:"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(j.jsx)(u.b,{to:"/signup",className:"regiser__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})},p=a.a.createContext(),x=s(20),f=s(21),v=new(function(){function e(t){var s=t.baseUrl;Object(x.a)(this,e),this._baseUrl=s}return Object(f.a)(e,[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}},{key:"getUserData",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){return e._requestResult(t)}))}}]),e}())({baseUrl:"http://localhost:3000"}),N="http://localhost:3000",w=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))};var k=function(){var e=Object(l.f)(),t=Object(l.g)(),s=Object(r.useState)(!1),a=Object(i.a)(s,2),n=a[0],c=a[1],o=Object(r.useState)({name:"",email:"",password:""}),u=Object(i.a)(o,2),m=(u[0],u[1]),b=Object(r.useState)({}),g=Object(i.a)(b,2),x=g[0],f=g[1],k=Object(r.useCallback)((function(){localStorage.getItem("jwt")&&v.getUserData().then((function(s){s&&(m({name:s.name,email:s.email}),c(!0),e.push(t.pathname))})).catch((function(t){e.push("/signin")}))}),[e]);return Object(r.useEffect)((function(){k()}),[k]),Object(r.useEffect)((function(){n&&v.getUserData().then((function(e){f(e)})).catch((function(e){return console.log(e)}))}),[n]),Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(p.Provider,{value:x,children:Object(j.jsxs)("div",{className:"body",children:[Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/signin",children:Object(j.jsx)(O,{onLogin:function(e){var t=e.email,s=e.password;return function(e,t){return fetch("".concat(N,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(w)}(t,s).then((function(e){if(!e||400===e.statusCode)throw new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");e.token&&(m({email:t}),localStorage.setItem("jwt",e.token),c(!0))}))}})}),Object(j.jsx)(l.a,{path:"/signup",children:Object(j.jsx)(_,{onRegister:function(t){return function(e,t,s){return fetch("".concat(N,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,email:t,password:s})}).then(w)}(t.name,t.email,t.password).then((function(t){return e.push("/movies"),t}))}})})]})]}),Object(j.jsx)(d,{})]})})})},y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;s(e),r(e),a(e),n(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(k,{})})}),document.getElementById("root")),y()}},[[33,1,2]]]);
//# sourceMappingURL=main.41c87636.chunk.js.map