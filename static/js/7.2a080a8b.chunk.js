(this["webpackJsonpcaffavo-fe"]=this["webpackJsonpcaffavo-fe"]||[]).push([[7],{110:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 800;\n  font-size: ",";\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n"]);return r=function(){return e},e}var o=t(2).c.h1(r(),(function(e){return e.theme.colors.neutral[200]}),(function(e){var n=e.huge;return e.subheader?"28px":n?"48px":"36px"}));n.a=o},111:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-size: 15px;\n"]);return r=function(){return e},e}var o=t(2).c.label(r(),(function(e){return e.theme.colors.neutral[200]}));n.a=o},113:function(e,n,t){"use strict";var a=t(35);n.a=function(e,n,t){switch(e){case"success":return a.store.addNotification({title:"Uda\u0142o si\u0119!",message:n,type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}});case"danger":return a.store.addNotification({title:"Co\u015b posz\u0142o nie tak :(",message:n,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}})}}},114:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r),c=t(2);function i(){var e=Object(a.a)(["\n  background: ",";\n  padding: 48px 40px;\n"]);return i=function(){return e},e}function u(){var e=Object(a.a)(["\n  background: ",";\n  padding: 48px 48px 0;\n  height: 100vh;\n  overflow: auto;\n"]);return u=function(){return e},e}function l(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 375px;\n"]);return l=function(){return e},e}var s=c.c.div(l()),d=c.c.div(u(),(function(e){return e.theme.colors.white})),m=c.c.div(i(),(function(e){return e.theme.colors.background[200]}));n.a=function(e){var n=e.children;return o.a.createElement(s,null,o.a.createElement(d,null,n[0]),o.a.createElement(m,null,n[1]))}},115:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  width: 100%;\n  color: ",";\n  font-weight: bold;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding: 10px;\n  font-size: 16px;\n  margin: 10px 0;\n  background: transparent;\n  \n  &:disabled {\n   cursor: not-allowed;\n  }\n"]);return r=function(){return e},e}var o=t(2).c.input(r(),(function(e){return e.theme.colors.neutral[400]}),(function(e){return e.theme.colors.neutral[400]}));n.a=o},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(3),r=t(0),o=t.n(r),c=t(112);function i(){var e=Object(a.a)(["\n  min-height: 16px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ",";\n"]);return i=function(){return e},e}var u=t(2).c.div(i(),(function(e){return e.theme.colors.secondary}));n.b=function(e){return o.a.createElement(u,null,o.a.createElement(c.a,e))}},125:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var a=t(3),r=t(2);function o(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  align-items: center;\n  background: ",";\n  border: 1px solid transparent;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n  padding: 20px 12px;\n  margin: 8px 0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);\n  transform: ",";\n  user-select: none;\n\n  &:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n  &:active {\n    transform: scale(1.035);\n  }\n"]);return o=function(){return e},e}function c(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  justify-content: center;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 0 20px;\n  color: ",";\n"]);return c=function(){return e},e}var i=r.c.div(c(),(function(e){return e.layout}),(function(e){return e.theme.colors.neutral[400]})),u=r.c.div(o(),(function(e){return e.layout}),(function(e){return e.theme.colors.white}),(function(e){return e.active?"scale(1.025)":"scale(1)"}))},136:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r),c=t(2),i=t(150),u=t.n(i),l=t(148),s=t.n(l),d=t(149),m=t.n(d),p=t(37);function f(){var e=Object(a.a)(["\n  height: 20px;\n  width: 20px;\n  color: ","\n"]);return f=function(){return e},e}var b=c.c.div(f(),(function(e){var n=e.theme;switch(e.status){case"dostepny":return n.colors.success;case"niska_dostepnosc":return n.colors.warning;case"niedostepny":default:return n.colors.danger}}));n.a=function(e){var n=e.status,t={dostepny:o.a.createElement(s.a,null),niska_dostepnosc:o.a.createElement(m.a,null),niedostepny:o.a.createElement(u.a,null)}[n];return o.a.createElement(p.a,null,o.a.createElement(b,{status:n},t))}},175:function(e,n,t){"use strict";var a=t(18),r=t(3),o=t(0),c=t.n(o),i=t(2),u=t(218),l=t.n(u);function s(){var e=Object(r.a)(["\n  border-radius: 0 8px 8px 0;\n  height: 100%;\n  width: 100%;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  background: ",";\n  color: ",";\n  \n  &:focus {\n    background: ",";\n  }\n  &::placeholder {\n    color: ",";\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px 0 0 8px;\n  width: 46px;\n  color: ",";\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n  height: 46px;\n  width: 300px;\n  margin-left: 16px;\n  font-size: 18px;\n  border: 1px solid ",";\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n  background: ",";\n"]);return m=function(){return e},e}var p=i.c.form(m(),(function(e){return e.theme.colors.neutral[200]}),(function(e){var n=e.focused,t=e.theme;return n?t.colors.background[200]:t.colors.white})),f=i.c.label(d(),(function(e){return e.theme.colors.neutral[400]})),b=i.c.input(s(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.neutral[400]}),(function(e){return e.theme.colors.background[200]}),(function(e){return e.theme.colors.neutral[200]}));n.a=function(e){var n=e.value,t=e.setValue,r=Object(o.useState)(!1),i=Object(a.a)(r,2),u=i[0],s=i[1],d=function(){s(!u)};return c.a.createElement(p,{role:"search",onSubmit:function(e){return e.preventDefault()},focused:u},c.a.createElement(f,null,c.a.createElement(l.a,null)),c.a.createElement(b,{type:"text",placeholder:"Wyszukaj...",value:n,onChange:function(e){e.preventDefault(),t(e.target.value)},onFocus:d,onBlur:d}))}},176:function(e,n,t){"use strict";var a=t(221),r=t(0),o=t.n(r),c=t(220),i=t(39),u=i.a.colors.background[200],l=i.a.colors.neutral[400],s={control:function(e){return Object(a.a)({},e,{height:"40px",margin:"10px 0",borderRadius:0,boxShadow:"none",borderColor:"transparent",borderBottomWidth:"1px",borderBottomColor:l,background:"transparent",color:l,fontWeight:"bold","&:hover":{borderColor:"transparent",borderBottomColor:l}})},menu:function(e){return Object(a.a)({},e,{maxWidth:"307px",borderRadius:0,zIndex:5,"@media (max-width: 575.98px)":{width:"100%"}})},indicatorSeparator:function(e){return Object(a.a)({},e,{display:"none"})},dropdownIndicator:function(e){return Object(a.a)({},e,{svg:{color:l}})},option:function(e,n){var t=n.isFocused,r=n.isSelected;return Object(a.a)({},e,{background:t||r?u:"none",color:l})}};n.a=function(e){var n=e.options,t=e.field,a=e.form;return o.a.createElement(c.a,{options:n,styles:s,name:t.name,value:n?n.find((function(e){return e.value===t.value})):"",onChange:function(e){return a.setFieldValue(t.name,e.value)},onBlur:t.onBlur})}},367:function(e,n,t){"use strict";t.r(n);var a=t(26),r=t.n(a),o=t(18),c=t(3),i=t(0),u=t.n(i),l=t(2),s=t(112),d=t(126),m=t(33),p=t(113),f=t(114),b=t(110),v=t(125),g=t(136),h=t(34),x=t(36),E=t(175),y=t(111),j=t(115),k=t(116),O=t(176);function w(){var e=Object(c.a)(["\n  padding: 0;\n  width: 100px;\n"]);return w=function(){return e},e}function z(){var e=Object(c.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: ",";\n  margin-bottom: 28px;\n"]);return z=function(){return e},e}function F(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return F=function(){return e},e}var M=l.c.div(F()),S=l.c.div(z(),(function(e){return"edit"===e.mode?"space-between":"flex-end"})),B=Object(l.c)(x.a)(w()),C=d.object({name:d.string().required("Pole wymagane."),portion:d.number().min(0).required("Pole wymagane."),amount:d.number().min(0).required("Pole wymagane."),unit:d.string().required("Pole wymagane."),price:d.number().positive("Warto\u015b\u0107 musi by\u0107 dodatnia.").required("Pole wymagane."),priceMargin:d.number().positive("Warto\u015b\u0107 musi by\u0107 dodatnia.").required("Pole wymagane.")}),I=function(e){var n=e.setFieldValue,t=e.error,a=e.setError,c=e.editLoading,l=e.setEditLoading,d=e.mode,w=e.setMode,z=e.defaultBakery,F=e.bakeryId,C=e.setBakeryId,I=e.bakery,W=e.bakeryLoading,P=e.fetchBakery,V=Object(i.useState)(""),q=Object(o.a)(V,2),L=q[0],R=q[1],D=["name","portion","amount","unit","price","priceMargin"],J=function(){w("add"),D.forEach((function(e){return n(e,z[e])})),C(null)},N="2fr 1fr 1fr 1fr 1fr 85px";return u.a.createElement(f.a,null,u.a.createElement("div",null,u.a.createElement(M,null,u.a.createElement(b.a,{huge:!0},"Wyroby cukiernicze"),"edit"===d&&u.a.createElement(x.a,{onClick:J,primary:!0},"+ Dodaj"),u.a.createElement(E.a,{value:L,setValue:R})),u.a.createElement("div",null,u.a.createElement(v.a,{layout:N},["nazwa","porcja","ilo\u015b\u0107","cena","mar\u017ca","dost\u0119pno\u015b\u0107"].map((function(e){return u.a.createElement("div",{key:e},e)}))),W&&u.a.createElement(h.a,null),I.filter((function(e){var n=e.name;return!L||n.includes(L)})).map((function(e){var t="kilogram"===e.unit?"kg":e.unit;return u.a.createElement(v.b,{key:e.id,layout:N,onClick:function(){return t=e,w("edit"),D.forEach((function(e){return n(e,t[e])})),void C(t.id);var t},active:F===e.id},u.a.createElement("div",null,e.name),u.a.createElement("div",null,"".concat(e.portion," ").concat(t)),u.a.createElement("div",null,"".concat(e.amount," ").concat(t)),u.a.createElement("div",null,"".concat(e.price.toFixed(2)," z\u0142/").concat(t)),u.a.createElement("div",null,"".concat(e.priceMargin.toFixed(2)," z\u0142/").concat(t)),u.a.createElement(g.a,{status:e.status}))})))),u.a.createElement("div",null,u.a.createElement(b.a,null,"add"===d?"Dodaj":"Edytuj"),c?u.a.createElement(h.a,null):u.a.createElement(s.c,null,u.a.createElement(y.a,{htmlFor:"name"},"Nazwa"),u.a.createElement(s.b,{name:"name"},(function(e){var n=e.field;return u.a.createElement(j.a,Object.assign({type:"text"},n))})),u.a.createElement(k.b,{name:"name"}),u.a.createElement(y.a,{htmlFor:"portion"},"Porcja"),u.a.createElement(s.b,{name:"portion"},(function(e){var n=e.field;return u.a.createElement(j.a,Object.assign({type:"number"},n))})),u.a.createElement(k.b,{name:"portion"}),u.a.createElement(y.a,{htmlFor:"amount"},"Ilo\u015b\u0107"),u.a.createElement(s.b,{name:"amount"},(function(e){var n=e.field;return u.a.createElement(j.a,Object.assign({type:"number"},n))})),u.a.createElement(k.b,{name:"amount"}),u.a.createElement(y.a,{htmlFor:"unit"},"Jednostka"),u.a.createElement(s.b,{name:"unit",component:O.a,options:[{value:"kilogram",label:"kilogram"},{value:"sztuka",label:"sztuka"}]}),u.a.createElement(k.b,{name:"unit"}),u.a.createElement(y.a,{htmlFor:"price"},"Cena"),u.a.createElement(s.b,{name:"price"},(function(e){var n=e.field;return u.a.createElement(j.a,Object.assign({type:"number"},n))})),u.a.createElement(k.b,{name:"price"}),u.a.createElement(y.a,{htmlFor:"priceMargin"},"Mar\u017ca"),u.a.createElement(s.b,{name:"priceMargin"},(function(e){var n=e.field;return u.a.createElement(j.a,Object.assign({type:"number"},n))})),u.a.createElement(k.b,{name:"priceMargin"}),u.a.createElement(S,{mode:d},"edit"===d&&u.a.createElement(B,{onClick:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,r.a.awrap(Object(m.a)({method:"delete",url:"bakery/".concat(F)}));case 4:if(200!==e.sent.status){e.next=11;break}return J(),l(!1),e.next=10,r.a.awrap(P());case 10:Object(p.a)("success","Usuni\u0119to wyr\xf3b cukierniczy",3e3);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),a(e.t0.response.data),l(!1);case 17:case"end":return e.stop()}}),null,null,[[1,13]])}},"Usu\u0144"),u.a.createElement(B,{type:"submit",primary:!0},"Zatwierd\u017a"))),t&&u.a.createElement(k.a,null,t)))};n.default=function(){var e=Object(i.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(null),l=Object(o.a)(c,2),d=l[0],f=l[1],b=Object(i.useState)("add"),v=Object(o.a)(b,2),g=v[0],h=v[1],x=Object(i.useState)([]),E=Object(o.a)(x,2),y=E[0],j=E[1],k=Object(i.useState)(!0),O=Object(o.a)(k,2),w=O[0],z=O[1],F=Object(i.useState)(null),M=Object(o.a)(F,2),S=M[0],B=M[1],W={name:"",portion:1,amount:1,unit:"kilogram",price:1,priceMargin:0},P=function(){var e;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(m.a.get("bakery"));case 2:(e=n.sent).data&&(j(e.data),z(!1));case 4:case"end":return n.stop()}}))};Object(i.useEffect)((function(){P()}),[]);return u.a.createElement(s.d,{initialValues:W,validationSchema:C,onSubmit:function(e){"add"===g?function(e){var n,t,o,c,i,u;r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=e.name,t=e.portion,o=e.amount,c=e.unit,i=e.price,u=e.priceMargin,a(!0),l.prev=2,l.next=5,r.a.awrap(Object(m.a)({method:"post",url:"bakery",data:{name:n,portion:t,amount:o,unit:c,price:i,priceMargin:u}}));case 5:if(200!==l.sent.status){l.next=11;break}return a(!1),l.next=10,r.a.awrap(P());case 10:Object(p.a)("success","Dodano wyr\xf3b cukierniczy",3e3);case 11:l.next=17;break;case 13:l.prev=13,l.t0=l.catch(2),f(l.t0.response.data),a(!1);case 17:case"end":return l.stop()}}),null,null,[[2,13]])}(e):function(e){var n,t,o,c,i,u;r.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=e.name,t=e.portion,o=e.amount,c=e.unit,i=e.price,u=e.priceMargin,a(!0),l.prev=2,l.next=5,r.a.awrap(Object(m.a)({method:"put",url:"bakery/".concat(S),data:{name:n,portion:t,amount:o,unit:c,price:i,priceMargin:u}}));case 5:if(200!==l.sent.status){l.next=11;break}return a(!1),l.next=10,r.a.awrap(P());case 10:Object(p.a)("success","Wprowadzono zmiany.",3e3);case 11:l.next=17;break;case 13:l.prev=13,l.t0=l.catch(2),f(l.t0.response.data),a(!1);case 17:case"end":return l.stop()}}),null,null,[[2,13]])}(e)}},(function(e){var n=e.setFieldValue;return u.a.createElement(I,{setFieldValue:n,error:d,setError:f,editLoading:t,setEditLoading:a,mode:g,setMode:h,defaultBakery:W,bakeryId:S,setBakeryId:B,bakery:y,bakeryLoading:w,fetchBakery:P})}))}}}]);
//# sourceMappingURL=7.2a080a8b.chunk.js.map