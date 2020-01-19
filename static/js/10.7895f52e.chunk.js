(this["webpackJsonpcaffavo-fe"]=this["webpackJsonpcaffavo-fe"]||[]).push([[10],{109:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 800;\n  font-size: ",";\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n"]);return r=function(){return e},e}var o=t(2).c.h1(r(),(function(e){return e.theme.colors.neutral[200]}),(function(e){var n=e.huge;return e.subheader?"28px":n?"48px":"36px"}));n.a=o},114:function(e,n,t){"use strict";var a=t(35);n.a=function(e,n,t){switch(e){case"success":return a.store.addNotification({title:"Uda\u0142o si\u0119!",message:n,type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}});case"danger":return a.store.addNotification({title:"Co\u015b posz\u0142o nie tak :(",message:n,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}})}}},115:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-size: 15px;\n"]);return r=function(){return e},e}var o=t(2).c.label(r(),(function(e){return e.theme.colors.neutral[200]}));n.a=o},121:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  width: 100%;\n  color: ",";\n  font-weight: bold;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding: 10px;\n  font-size: 16px;\n  margin: 10px 0;\n  background: transparent;\n"]);return r=function(){return e},e}var o=t(2).c.input(r(),(function(e){return e.theme.colors.neutral[400]}),(function(e){return e.theme.colors.neutral[400]}));n.a=o},122:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(3),r=t(0),o=t.n(r),i=t(110);function c(){var e=Object(a.a)(["\n  min-height: 16px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ",";\n"]);return c=function(){return e},e}var s=t(2).c.div(c(),(function(e){return e.theme.colors.secondary}));n.b=function(e){return o.a.createElement(s,null,o.a.createElement(i.a,e))}},164:function(e,n,t){"use strict";var a=t(3),r=t(13),o=t(2);function i(){var e=Object(a.a)(["\n  color: ",";\n  text-decoration: none;\n  \n  &:link {\n    color: ",";\n  }\n  &:visited {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n    text-decoration: underline;\n    cursor: pointer;\n  }\n  &:active {\n    color: ",";\n  }\n"]);return i=function(){return e},e}n.a=Object(o.c)(r.b)(i(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.secondary}))},355:function(e,n,t){"use strict";t.r(n);var a=t(26),r=t.n(a),o=t(18),i=t(3),c=t(0),s=t.n(c),u=t(2),l=t(133),m=t(11),f=t(33),d=t(114),p=t(37),b=t(109),h=t(110),g=t(115),v=t(121),w=t(122),E=t(36),j=t(164),y=t(34);function O(){var e=Object(i.a)(["\n  margin-left: 5px;\n"]);return O=function(){return e},e}function x(){var e=Object(i.a)(["\n  width: 256px;\n"]);return x=function(){return e},e}function N(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 28px;\n"]);return N=function(){return e},e}function z(){var e=Object(i.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n"]);return z=function(){return e},e}function k(){var e=Object(i.a)(["\n  width: 600px;\n"]);return k=function(){return e},e}function q(){var e=Object(i.a)(["\n  width: 100%;\n  height: 100vh;\n"]);return q=function(){return e},e}var P=u.c.div(q()),C=u.c.section(k()),F=u.c.div(z()),I=u.c.div(N()),S=Object(u.c)(E.a)(x()),T=Object(u.c)(j.a)(O()),R={email:"",password:"",passwordConfirm:"",firstName:"",lastName:"",phone:""};l.addMethod(l.string,"equalTo",(function(e,n){return l.mixed().test({name:"equalTo",exclusive:!1,message:n,params:{reference:e.path},test:function(n){return n===this.resolve(e)}})}));var H=l.object({email:l.string().email("Nieprawid\u0142owy format.").required("Pole wymagane."),password:l.string().min(5,"Has\u0142o musi by\u0107 przynajmniej 5 znakowe.").required("Pole wymagane."),passwordConfirm:l.string().equalTo(l.ref("password"),"Has\u0142a musz\u0105 by\u0107 identyczne.").required("Pole wymagane."),firstName:l.string().required("Pole wymagane."),lastName:l.string().required("Pole wymagane."),phone:l.string().min(8,"Sprawd\u017a poprawno\u015b\u0107 numeru telefonu.").required("Pole wymagane.")});n.default=function(){var e=Object(c.useState)(null),n=Object(o.a)(e,2),t=n[0],a=n[1],i=Object(c.useState)(!1),u=Object(o.a)(i,2),l=u[0],E=u[1],j=Object(m.g)();return l?s.a.createElement(y.a,{wholePage:!0}):s.a.createElement(P,null,s.a.createElement(p.a,null,s.a.createElement(C,null,s.a.createElement(b.a,null,"Zarejestruj si\u0119"),s.a.createElement(h.d,{initialValues:R,validationSchema:H,onSubmit:function(e){!function(e){var n,t,o,i,c;r.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return n=e.email,t=e.password,o=e.firstName,i=e.lastName,c=e.phone,E(!0),s.prev=2,s.next=5,r.a.awrap(Object(f.a)({method:"post",url:"users",data:{email:n,password:t,firstName:o,lastName:i,phone:c}}));case 5:200===s.sent.status&&(E(!1),Object(d.a)("success","Teraz mo\u017cesz zalogowa\u0107 si\u0119 na swoje konto.",7e3),j.push("login/")),s.next=13;break;case 9:s.prev=9,s.t0=s.catch(2),a(s.t0.response.data),E(!1);case 13:case"end":return s.stop()}}),null,null,[[2,9]])}(e)},render:function(){return s.a.createElement(h.c,null,s.a.createElement(g.a,{htmlFor:"email"},"E-mail"),s.a.createElement(h.b,{name:"email"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"email"},n))})),s.a.createElement(w.b,{name:"email"}),s.a.createElement(g.a,{htmlFor:"password"},"Has\u0142o"),s.a.createElement(h.b,{name:"password"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"password"},n))})),s.a.createElement(w.b,{name:"password"}),s.a.createElement(g.a,{htmlFor:"passwordConfirm"},"Powt\xf3rz has\u0142o"),s.a.createElement(h.b,{name:"passwordConfirm"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"password"},n))})),s.a.createElement(w.b,{name:"passwordConfirm"}),s.a.createElement(F,null,s.a.createElement("div",null,s.a.createElement(g.a,{htmlFor:"firstName"},"Imi\u0119"),s.a.createElement(h.b,{name:"firstName"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"text"},n))})),s.a.createElement(w.b,{name:"firstName"})),s.a.createElement("div",null,s.a.createElement(g.a,{htmlFor:"lastName"},"Nazwisko"),s.a.createElement(h.b,{name:"lastName"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"text"},n))})),s.a.createElement(w.b,{name:"lastName"}))),s.a.createElement(g.a,{htmlFor:"phone"},"Telefon"),s.a.createElement(h.b,{name:"phone"},(function(e){var n=e.field;return s.a.createElement(v.a,Object.assign({type:"tel"},n))})),s.a.createElement(w.b,{name:"phone"}),s.a.createElement(I,null,s.a.createElement(S,{type:"submit",primary:!0},"Zarejestruj konto")))}}),t&&s.a.createElement(w.a,null,t),s.a.createElement("p",null,"Masz konto?",s.a.createElement(T,{to:"/login"},"Zaloguj si\u0119")))))}}}]);
//# sourceMappingURL=10.7895f52e.chunk.js.map