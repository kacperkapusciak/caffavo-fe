(this["webpackJsonpcaffavo-fe"]=this["webpackJsonpcaffavo-fe"]||[]).push([[8],{109:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-weight: 800;\n  font-size: ",";\n  padding-bottom: 16px;\n  margin-bottom: 16px;\n"]);return r=function(){return e},e}var o=t(2).c.h1(r(),(function(e){return e.theme.colors.neutral[200]}),(function(e){var n=e.huge;return e.subheader?"28px":n?"48px":"36px"}));n.a=o},111:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  color: ",";\n  font-size: 15px;\n"]);return r=function(){return e},e}var o=t(2).c.label(r(),(function(e){return e.theme.colors.neutral[200]}));n.a=o},112:function(e,n,t){"use strict";var a=t(35);n.a=function(e,n,t){switch(e){case"success":return a.store.addNotification({title:"Uda\u0142o si\u0119!",message:n,type:"success",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}});case"danger":return a.store.addNotification({title:"Co\u015b posz\u0142o nie tak :(",message:n,type:"danger",insert:"top",container:"top-right",animationIn:["animated","fadeInRight"],animationOut:["animated","fadeOutRight"],dismiss:{duration:t}})}}},116:function(e,n,t){"use strict";var a=t(3);function r(){var e=Object(a.a)(["\n  width: 100%;\n  color: ",";\n  font-weight: bold;\n  border: none;\n  border-bottom: 1px solid ",";\n  padding: 10px;\n  font-size: 16px;\n  margin: 10px 0;\n  background: transparent;\n  \n  &:disabled {\n   cursor: not-allowed;\n  }\n"]);return r=function(){return e},e}var o=t(2).c.input(r(),(function(e){return e.theme.colors.neutral[400]}),(function(e){return e.theme.colors.neutral[400]}));n.a=o},117:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t(3),r=t(0),o=t.n(r),c=t(110);function i(){var e=Object(a.a)(["\n  min-height: 16px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: ",";\n"]);return i=function(){return e},e}var u=t(2).c.div(i(),(function(e){return e.theme.colors.secondary}));n.b=function(e){return o.a.createElement(u,null,o.a.createElement(c.a,e))}},118:function(e,n,t){"use strict";var a=t(3),r=t(0),o=t.n(r),c=t(2);function i(){var e=Object(a.a)(["\n  background: ",";\n  padding: 48px 40px;\n"]);return i=function(){return e},e}function u(){var e=Object(a.a)(["\n  background: ",";\n  padding: 48px 48px 0;\n  height: 100vh;\n  overflow: auto;\n"]);return u=function(){return e},e}function l(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr 375px;\n"]);return l=function(){return e},e}var s=c.c.div(l()),d=c.c.div(u(),(function(e){return e.theme.colors.white})),m=c.c.div(i(),(function(e){return e.theme.colors.background[200]}));n.a=function(e){var n=e.children;return o.a.createElement(s,null,o.a.createElement(d,null,n[0]),o.a.createElement(m,null,n[1]))}},134:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}));var a=t(3),r=t(2);function o(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  align-items: center;\n  background: ",";\n  border: 1px solid transparent;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n  padding: 20px 12px;\n  margin: 8px 0;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);\n  transform: ",";\n  user-select: none;\n\n  &:hover {\n    transform: scale(1.05);\n    cursor: pointer;\n  }\n  &:active {\n    transform: scale(1.035);\n  }\n"]);return o=function(){return e},e}function c(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: ",";\n  justify-content: center;\n  text-align: center;\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 0 20px;\n  color: ",";\n"]);return c=function(){return e},e}var i=r.c.div(c(),(function(e){return e.layout}),(function(e){return e.theme.colors.neutral[400]})),u=r.c.div(o(),(function(e){return e.layout}),(function(e){return e.theme.colors.white}),(function(e){return e.active?"scale(1.025)":"scale(1)"}))},363:function(e,n,t){"use strict";t.r(n);var a=t(26),r=t.n(a),o=t(18),c=t(3),i=t(0),u=t.n(i),l=t(2),s=t(110),d=t(130),m=t(33),f=t(112),p=t(118),b=t(109),g=t(134),v=t(348),h=t.n(v),x=t(346),E=t.n(x),j=t(347),O=t.n(j),k=t(37);function w(){var e=Object(c.a)(["\n  height: 20px;\n  width: 20px;\n  color: ","\n"]);return w=function(){return e},e}var y=l.c.div(w(),(function(e){var n=e.theme;switch(e.status){case"dostepny":return n.colors.success;case"niska_dostepnosc":return n.colors.warning;case"niedostepny":default:return n.colors.danger}})),I=function(e){var n=e.status,t={dostepny:u.a.createElement(E.a,null),niska_dostepnosc:u.a.createElement(O.a,null),niedostepny:u.a.createElement(h.a,null)}[n];return u.a.createElement(k.a,null,u.a.createElement(y,{status:n},t))},S=t(349),z=t.n(S),C=t(350),F=t.n(C),L=t(351),V=t.n(L);function B(){var e=Object(c.a)(["\n  height: 20px;\n  width: 20px;\n  color: ",";\n"]);return B=function(){return e},e}var R=l.c.div(B(),(function(e){return e.theme.colors.primary})),W=function(e){var n=e.unit,t={kilogram:u.a.createElement(z.a,null),litr:u.a.createElement(F.a,null),kostka:u.a.createElement(V.a,null)}[n];return u.a.createElement(k.a,null,u.a.createElement(R,null,t))},D=t(34),P=t(36),q=t(352),N=t.n(q);function J(){var e=Object(c.a)(["\n  border-radius: 0 8px 8px 0;\n  height: 100%;\n  width: 100%;\n  border: 1px solid transparent;\n  transition: all 0.3s ease-in-out;\n  background: ",";\n  color: ",";\n  \n  &:focus {\n    background: ",";\n  }\n  &::placeholder {\n    color: ",";\n  }\n"]);return J=function(){return e},e}function U(){var e=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px 0 0 8px;\n  width: 46px;\n  color: ",";\n"]);return U=function(){return e},e}function M(){var e=Object(c.a)(["\n  height: 46px;\n  width: 300px;\n  margin-left: 16px;\n  font-size: 18px;\n  border: 1px solid ",";\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  transition: all 0.3s ease-in-out;\n  background: ",";\n"]);return M=function(){return e},e}var _=l.c.form(M(),(function(e){return e.theme.colors.neutral[200]}),(function(e){var n=e.focused,t=e.theme;return n?t.colors.background[200]:t.colors.white})),Z=l.c.label(U(),(function(e){return e.theme.colors.neutral[400]})),A=l.c.input(J(),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.neutral[400]}),(function(e){return e.theme.colors.background[200]}),(function(e){return e.theme.colors.neutral[200]})),G=function(e){var n=e.value,t=e.setValue,a=Object(i.useState)(!1),r=Object(o.a)(a,2),c=r[0],l=r[1],s=function(){l(!c)};return u.a.createElement(_,{role:"search",onSubmit:function(e){return e.preventDefault()},focused:c},u.a.createElement(Z,null,u.a.createElement(N.a,null)),u.a.createElement(A,{type:"text",placeholder:"Wyszukaj...",value:n,onChange:function(e){e.preventDefault(),t(e.target.value)},onFocus:s,onBlur:s}))},H=t(111),K=t(116),Q=t(117),T=t(354),X=t(353),Y=t(44),$=Y.a.colors.background[200],ee=Y.a.colors.neutral[400],ne={control:function(e){return Object(T.a)({},e,{height:"40px",margin:"10px 0",borderRadius:0,boxShadow:"none",borderColor:"transparent",borderBottomWidth:"1px",borderBottomColor:ee,background:"transparent",color:ee,fontWeight:"bold","&:hover":{borderColor:"transparent",borderBottomColor:ee}})},menu:function(e){return Object(T.a)({},e,{maxWidth:"307px",borderRadius:0,zIndex:5,"@media (max-width: 575.98px)":{width:"100%"}})},indicatorSeparator:function(e){return Object(T.a)({},e,{display:"none"})},dropdownIndicator:function(e){return Object(T.a)({},e,{svg:{color:ee}})},option:function(e,n){var t=n.isFocused,a=n.isSelected;return Object(T.a)({},e,{background:t||a?$:"none",color:ee})}},te=function(e){var n=e.options,t=e.field,a=e.form;return u.a.createElement(X.a,{options:n,styles:ne,name:t.name,value:n?n.find((function(e){return e.value===t.value})):"",onChange:function(e){return a.setFieldValue(t.name,e.value)},onBlur:t.onBlur})};function ae(){var e=Object(c.a)(["\n  padding: 0;\n  width: 100px;\n"]);return ae=function(){return e},e}function re(){var e=Object(c.a)(["\n  display: flex;\n  align-items: flex-end;\n  justify-content: ",";\n  margin-bottom: 28px;\n"]);return re=function(){return e},e}function oe(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return oe=function(){return e},e}var ce=l.c.div(oe()),ie=l.c.div(re(),(function(e){return"edit"===e.mode?"space-between":"flex-end"})),ue=Object(l.c)(P.a)(ae()),le=d.object({name:d.string().required("Pole wymagane."),amount:d.number().min(0).required("Pole wymagane."),unit:d.string().required("Pole wymagane."),price:d.number().positive("Warto\u015b\u0107 musi by\u0107 dodatnia.").required("Pole wymagane.")}),se=function(e){var n=e.setFieldValue,t=e.error,a=e.setError,c=e.editLoading,l=e.setEditLoading,d=e.mode,v=e.setMode,h=e.defaultIngredient,x=e.ingredientId,E=e.setIngredientId,j=e.ingredients,O=e.ingredientsLoading,k=e.fetchIngredients,w=Object(i.useState)(""),y=Object(o.a)(w,2),S=y[0],z=y[1],C=["name","amount","unit","price"],F=function(){v("add"),C.forEach((function(e){return n(e,h[e])})),E(null)};return u.a.createElement(p.a,null,u.a.createElement("div",null,u.a.createElement(ce,null,u.a.createElement(b.a,{huge:!0},"Sk\u0142adniki"),"edit"===d&&u.a.createElement(P.a,{onClick:F,primary:!0},"+ Dodaj"),u.a.createElement(G,{value:S,setValue:z})),u.a.createElement("div",null,u.a.createElement(g.a,{layout:"50px 1fr 1fr 1fr 85px"},["typ","nazwa","ilo\u015b\u0107","cena","dost\u0119pno\u015b\u0107"].map((function(e){return u.a.createElement("div",{key:e},e)}))),O&&u.a.createElement(D.a,null),j.filter((function(e){var n=e.name;return!S||n.includes(S)})).map((function(e){var t="kilogram"===e.unit?"kg":e.unit;return u.a.createElement(g.b,{key:e.id,layout:"50px 1fr 1fr 1fr 85px",onClick:function(){return function(e){v("edit"),C.forEach((function(t){return n(t,e[t])})),E(e.id)}(e)},active:x===e.id},u.a.createElement(W,{unit:e.unit}),u.a.createElement("div",null,e.name),u.a.createElement("div",null,"".concat(e.amount," ").concat(t)),u.a.createElement("div",null,"".concat(e.price," PLN/").concat(t)),u.a.createElement(I,{status:e.status}))})))),u.a.createElement("div",null,u.a.createElement(b.a,null,"add"===d?"Dodaj":"Edytuj"),c?u.a.createElement(D.a,null):u.a.createElement(s.c,null,u.a.createElement(H.a,{htmlFor:"name"},"Nazwa"),u.a.createElement(s.b,{name:"name"},(function(e){var n=e.field;return u.a.createElement(K.a,Object.assign({type:"text"},n))})),u.a.createElement(Q.b,{name:"name"}),u.a.createElement(H.a,{htmlFor:"amount"},"Ilo\u015b\u0107"),u.a.createElement(s.b,{name:"amount"},(function(e){var n=e.field;return u.a.createElement(K.a,Object.assign({type:"number"},n))})),u.a.createElement(Q.b,{name:"amount"}),u.a.createElement(H.a,{htmlFor:"unit"},"Jednostka"),u.a.createElement(s.b,{name:"unit",component:te,options:[{value:"kilogram",label:"kilogram"},{value:"litr",label:"litr"},{value:"kostka",label:"kostka"}]}),u.a.createElement(Q.b,{name:"unit"}),u.a.createElement(H.a,{htmlFor:"price"},"Cena"),u.a.createElement(s.b,{name:"price"},(function(e){var n=e.field;return u.a.createElement(K.a,Object.assign({type:"number"},n))})),u.a.createElement(Q.b,{name:"price"}),u.a.createElement(ie,{mode:d},"edit"===d&&u.a.createElement(ue,{onClick:function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,r.a.awrap(Object(m.a)({method:"delete",url:"ingredients/".concat(x)}));case 4:if(200!==e.sent.status){e.next=11;break}return F(),l(!1),e.next=10,r.a.awrap(k());case 10:Object(f.a)("success","Usuni\u0119to sk\u0142adnik",3e3);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),a(e.t0.response.data),l(!1);case 17:case"end":return e.stop()}}),null,null,[[1,13]])}},"Usu\u0144"),u.a.createElement(ue,{type:"submit",primary:!0},"Zatwierd\u017a"))),t&&u.a.createElement(Q.a,null,t)))};n.default=function(){var e=Object(i.useState)(!1),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(i.useState)(null),l=Object(o.a)(c,2),d=l[0],p=l[1],b=Object(i.useState)("add"),g=Object(o.a)(b,2),v=g[0],h=g[1],x=Object(i.useState)([]),E=Object(o.a)(x,2),j=E[0],O=E[1],k=Object(i.useState)(!0),w=Object(o.a)(k,2),y=w[0],I=w[1],S=Object(i.useState)(null),z=Object(o.a)(S,2),C=z[0],F=z[1],L={name:"",amount:1,unit:"kilogram",price:1},V=function(){var e;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(m.a.get("ingredients"));case 2:(e=n.sent).data&&(O(e.data),I(!1));case 4:case"end":return n.stop()}}))};Object(i.useEffect)((function(){V()}),[]);return u.a.createElement(s.d,{initialValues:L,validationSchema:le,onSubmit:function(e){"add"===v?function(e){var n,t,o,c;r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.name,t=e.amount,o=e.unit,c=e.price,a(!0),i.prev=2,i.next=5,r.a.awrap(Object(m.a)({method:"post",url:"ingredients",data:{name:n,amount:t,unit:o,price:c}}));case 5:if(200!==i.sent.status){i.next=11;break}return a(!1),i.next=10,r.a.awrap(V());case 10:Object(f.a)("success","Dodano sk\u0142adnik",3e3);case 11:i.next=17;break;case 13:i.prev=13,i.t0=i.catch(2),p(i.t0.response.data),a(!1);case 17:case"end":return i.stop()}}),null,null,[[2,13]])}(e):function(e){var n,t,o,c;r.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.name,t=e.amount,o=e.unit,c=e.price,a(!0),i.prev=2,i.next=5,r.a.awrap(Object(m.a)({method:"put",url:"ingredients/".concat(C),data:{name:n,amount:t,unit:o,price:c}}));case 5:if(200!==i.sent.status){i.next=11;break}return a(!1),i.next=10,r.a.awrap(V());case 10:Object(f.a)("success","Wprowadzono zmiany.",3e3);case 11:i.next=17;break;case 13:i.prev=13,i.t0=i.catch(2),p(i.t0.response.data),a(!1);case 17:case"end":return i.stop()}}),null,null,[[2,13]])}(e)}},(function(e){var n=e.setFieldValue;return u.a.createElement(se,{setFieldValue:n,error:d,setError:p,editLoading:t,setEditLoading:a,mode:v,setMode:h,defaultIngredient:L,ingredientId:C,setIngredientId:F,ingredients:j,ingredientsLoading:y,fetchIngredients:V})}))}}}]);
//# sourceMappingURL=8.18fd9fee.chunk.js.map