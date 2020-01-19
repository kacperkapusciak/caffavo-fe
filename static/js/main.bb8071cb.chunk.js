(this["webpackJsonpcaffavo-fe"]=this["webpackJsonpcaffavo-fe"]||[]).push([[2],{17:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"b",(function(){return l}));var r=t(18),o=t(0),i=t.n(o),a=t(11),c=Object(o.createContext)({id:null,admin:null}),s=function(n){var e=n.children,t=Object(o.useState)(""),s=Object(r.a)(t,2),l=s[0],d=s[1],u=Object(o.useState)(null),p=Object(r.a)(u,2),m=p[0],b=p[1],f=Object(a.g)();Object(o.useEffect)((function(){var n=localStorage.getItem("id"),e=localStorage.getItem("admin");e&&b(e),n&&d(n)}),[]);return i.a.createElement(c.Provider,{value:{id:l,admin:m,login:function(n,e){localStorage.setItem("id",n),localStorage.setItem("admin",e),d(n),b(e),f.push("/offer")},logout:function(){localStorage.removeItem("id"),localStorage.removeItem("admin"),d(null),b(null),f.push("/login")}}},e)},l=function(n){return function(e){var t=Object(o.useContext)(c);return i.a.createElement(n,Object.assign({auth:t},e))}}},34:function(n,e,t){"use strict";var r=t(56),o=t.n(r).a.create({baseURL:"https://caffavo.herokuapp.com/"});e.a=o},35:function(n,e,t){"use strict";var r=t(3);function o(){var n=Object(r.a)(["\n  padding: 10px 35px;\n  margin: 0;\n  color: ",";\n  background: ",";\n  font-weight: bold;\n  font-size: ","\n  transition: all 0.2s ease;\n  width: ",";\n  height: 50px;\n  border: 2px solid ",";\n  \n  &:hover {\n    transform: scale(1.04);\n    cursor: pointer;\n  }\n  &:active {\n    transform: scale(1.015);\n  }\n  &:disabled {\n    color: ",";\n    background: ",";\n    border: 2px solid ",";\n    transform: scale(1);\n    cursor: not-allowed;\n  }\n"]);return o=function(){return n},n}var i=t(2).c.button(o(),(function(n){var e=n.theme;return n.primary?e.colors.white:e.colors.primary}),(function(n){var e=n.theme;return n.primary?e.colors.primary:e.colors.background[200]}),(function(n){return n.primary?"18px":"15px"}),(function(n){return n.unsized?"100%":"unset"}),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.neutral[400]}),(function(n){return n.theme.colors.neutral[300]}),(function(n){return n.theme.colors.neutral[300]}));e.a=i},36:function(n,e,t){"use strict";var r=t(3),o=t(0),i=t.n(o),a=t(99),c=t(2);function s(){var n=Object(r.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  width: 100%;\n"]);return s=function(){return n},n}function l(){var n=Object(r.a)(["\n  svg {\n    color: ",";\n  }\n"]);return l=function(){return n},n}var d=Object(c.c)(a.a)(l(),(function(n){return n.theme.colors.primary})),u=c.c.div(s(),(function(n){return n.wholePage?"100vh":"100%"}));e.a=function(n){var e=n.wholePage;return i.a.createElement(u,{wholePage:e},i.a.createElement(d,null))}},37:function(n,e,t){"use strict";var r=t(3);function o(){var n=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]);return o=function(){return n},n}var i=t(2).c.div(o());e.a=i},44:function(n,e,t){"use strict";e.a={colors:{primary:"#027dbd",secondary:"#eb5f09",white:"#ffffff",black:"#000000",background:{100:"#ffffff",200:"#f3f4f8",300:"#f0f1f6"},neutral:{100:"#bdc0d8",200:"#bcbfd7",300:"#bec1d8",400:"#545b65"},success:"#28a745",warning:"#ffc107",danger:"#dc3545",info:"#17a2b8"}}},68:function(n,e,t){n.exports=t(97)},97:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),i=t(38),a=t.n(i),c=t(13),s=t(33),l=t.n(s),d=(t(74),t(75),t(17)),u=t(3),p=t(11),m=t(2);function b(){var n=Object(u.a)(['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \'\';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct `inline-block` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body `font-size` is set using\n *    `em` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address `outline` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside `a` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome\n *    (include `-moz` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n@import url(\'https://fonts.googleapis.com/css?family=Muli:300,400,700,800&display=swap&subset=latin-ext\');\n\nhtml, body {\n  font-family: \'Muli\', sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n'],['\n  /* http://meyerweb.com/eric/tools/css/reset/\n   v2.0-modified | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* make sure to set some focus styles for accessibility */\n:focus {\n    outline: 0;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \'\';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration,\ninput[type=search]::-webkit-search-results-button,\ninput[type=search]::-webkit-search-results-decoration {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\ninput[type=search] {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -webkit-box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    box-sizing: content-box;\n}\n\ntextarea {\n    overflow: auto;\n    vertical-align: top;\n    resize: vertical;\n}\n\n/**\n * Correct \\`inline-block\\` display not defined in IE 6/7/8/9 and Firefox 3.\n */\n\naudio,\ncanvas,\nvideo {\n    display: inline-block;\n    *display: inline;\n    *zoom: 1;\n    max-width: 100%;\n}\n\n/**\n * Prevent modern browsers from displaying \\`audio\\` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n    display: none;\n    height: 0;\n}\n\n/**\n * Address styling not present in IE 7/8/9, Firefox 3, and Safari 4.\n * Known issue: no IE 6 support.\n */\n\n[hidden] {\n    display: none;\n}\n\n/**\n * 1. Correct text resizing oddly in IE 6/7 when body \\`font-size\\` is set using\n *    \\`em\\` units.\n * 2. Prevent iOS text size adjust after orientation change, without disabling\n *    user zoom.\n */\n\nhtml {\n    font-size: 100%; /* 1 */\n    -webkit-text-size-adjust: 100%; /* 2 */\n    -ms-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Address \\`outline\\` inconsistency between Chrome and other browsers.\n */\n\na:focus {\n    outline: thin dotted;\n}\n\n/**\n * Improve readability when focused and also mouse hovered in all browsers.\n */\n\na:active,\na:hover {\n    outline: 0;\n}\n\n/**\n * 1. Remove border when inside \\`a\\` element in IE 6/7/8/9 and Firefox 3.\n * 2. Improve image quality when scaled in IE 7.\n */\n\nimg {\n    border: 0; /* 1 */\n    -ms-interpolation-mode: bicubic; /* 2 */\n}\n\n/**\n * Address margin not present in IE 6/7/8/9, Safari 5, and Opera 11.\n */\n\nfigure {\n    margin: 0;\n}\n\n/**\n * Correct margin displayed oddly in IE 6/7.\n */\n\nform {\n    margin: 0;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct color not being inherited in IE 6/7/8/9.\n * 2. Correct text not wrapping in Firefox 3.\n * 3. Correct alignment displayed oddly in IE 6/7.\n */\n\nlegend {\n    border: 0; /* 1 */\n    padding: 0;\n    white-space: normal; /* 2 */\n    *margin-left: -7px; /* 3 */\n}\n\n/**\n * 1. Correct font size not being inherited in all browsers.\n * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,\n *    and Chrome.\n * 3. Improve appearance and consistency in all browsers.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n    font-size: 100%; /* 1 */\n    margin: 0; /* 2 */\n    vertical-align: baseline; /* 3 */\n    *vertical-align: middle; /* 3 */\n}\n\n/**\n * Address Firefox 3+ setting \\`line-height\\` on \\`input\\` using \\`!important\\` in\n * the UA stylesheet.\n */\n\nbutton,\ninput {\n    line-height: normal;\n}\n\n/**\n * Address inconsistent \\`text-transform\\` inheritance for \\`button\\` and \\`select\\`.\n * All other form control elements do not inherit \\`text-transform\\` values.\n * Correct \\`button\\` style inheritance in Chrome, Safari 5+, and IE 6+.\n * Correct \\`select\\` style inheritance in Firefox 4+ and Opera.\n */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native \\`audio\\`\n *    and \\`video\\` controls.\n * 2. Correct inability to style clickable \\`input\\` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    \\`input\\` and others.\n * 4. Remove inner spacing in IE 7 without affecting normal text inputs.\n *    Known issue: inner spacing remains in IE 6.\n */\n\nbutton,\nhtml input[type="button"], /* 1 */\ninput[type="reset"],\ninput[type="submit"] {\n    -webkit-appearance: button; /* 2 */\n    cursor: pointer; /* 3 */\n    *overflow: visible;  /* 4 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n    cursor: default;\n}\n\n/**\n * 1. Address box sizing set to content-box in IE 8/9.\n * 2. Remove excess padding in IE 8/9.\n * 3. Remove excess padding in IE 7.\n *    Known issue: excess padding remains in IE 6.\n */\n\ninput[type="checkbox"],\ninput[type="radio"] {\n    box-sizing: border-box; /* 1 */\n    padding: 0; /* 2 */\n    *height: 13px; /* 3 */\n    *width: 13px; /* 3 */\n}\n\n/**\n * 1. Address \\`appearance\\` set to \\`searchfield\\` in Safari 5 and Chrome.\n * 2. Address \\`box-sizing\\` set to \\`border-box\\` in Safari 5 and Chrome\n *    (include \\`-moz\\` to future-proof).\n */\n\ninput[type="search"] {\n    -webkit-appearance: textfield; /* 1 */\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box; /* 2 */\n    box-sizing: content-box;\n}\n\n/**\n * Remove inner padding and search cancel button in Safari 5 and Chrome\n * on OS X.\n */\n\ninput[type="search"]::-webkit-search-cancel-button,\ninput[type="search"]::-webkit-search-decoration {\n    -webkit-appearance: none;\n}\n\n/**\n * Remove inner padding and border in Firefox 3+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n}\n\n/**\n * 1. Remove default vertical scrollbar in IE 6/7/8/9.\n * 2. Improve readability and alignment in all browsers.\n */\n\ntextarea {\n    overflow: auto; /* 1 */\n    vertical-align: top; /* 2 */\n}\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nhtml,\nbutton,\ninput,\nselect,\ntextarea {\n    color: #222;\n}\n\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none;\n}\n\nimg {\n    vertical-align: middle;\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0;\n}\n\ntextarea {\n    resize: vertical;\n}\n\n.chromeframe {\n    margin: 0.2em 0;\n    background: #ccc;\n    color: #000;\n    padding: 0.2em 0;\n}\n\n@import url(\'https://fonts.googleapis.com/css?family=Muli:300,400,700,800&display=swap&subset=latin-ext\');\n\nhtml, body {\n  font-family: \'Muli\', sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n']);return b=function(){return n},n}var f=Object(m.b)(b()),h=t(44),g=t(26),y=t.n(g),x=t(18),v=t(34),w=t(57),k=t.n(w),E=t(58),z=t.n(E),I=t(61),j=t.n(I),O=t(60),C=t.n(O),S=t(59),A=t.n(S),R=t(62),q=t.n(R),F=t(63),P=t.n(F);function K(){var n=Object(u.a)(["\n  letter-spacing: -5px;\n"]);return K=function(){return n},n}function M(){var n=Object(u.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:700&display=swap');\n  font-family: 'Josefin Sans', sans-serif;\n  font-size: 52px;\n  letter-spacing: -3px;\n  margin: 10px 9px 0 auto;\n  color: ",";\n  border-bottom: 6px solid ",";\n  border-bottom-right-radius: 15px;\n  border-left: 9px solid transparent;\n  line-height: 30px;\n  user-select: none;\n  \n  &:hover {\n    cursor: pointer;\n  }\n"]);return M=function(){return n},n}var L=m.c.div(M(),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.secondary})),J=m.c.span(K()),U=function(){var n=Object(p.g)();return o.a.createElement(L,{onClick:function(){return n.push("/offer")}},"Ca",o.a.createElement(J,null,"ff"),"avo")},W=t(35);function D(){var n=Object(u.a)(["\n  margin-left: 5px;\n  svg {\n    height: 31px;\n    width: 31px;\n  }\n"]);return D=function(){return n},n}function H(){var n=Object(u.a)(["\n  margin-left: 6px;\n"]);return H=function(){return n},n}function T(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  color: ",";\n  text-decoration: none;\n  font-weight: 700;\n  font-size: 21px;\n  padding: 10px 0;\n  margin: 10px 0;\n  border: 1px solid ",";\n  background: "," ;\n  border-radius: 5px;\n\n  &:link {\n    color: ",";\n  }\n  &:visited {\n    color: ",";\n  }\n  &:hover {\n    color: ",";\n    text-decoration: none;\n    cursor: pointer;\n    background: ",";\n  }\n  &:active {\n    border: 1px solid ",";\n    background: ",";\n  }\n"]);return T=function(){return n},n}var X=Object(m.c)(c.b)(T(),(function(n){return n.theme.colors.neutral[300]}),(function(n){var e=n.theme;return n.active?e.colors.neutral[200]:"transparent"}),(function(n){var e=n.theme;return n.active?e.colors.background[200]:"transparent"}),(function(n){return n.theme.colors.neutral[300]}),(function(n){return n.theme.colors.neutral[300]}),(function(n){return n.theme.colors.neutral[300]}),(function(n){return n.theme.colors.background[200]}),(function(n){return n.theme.colors.neutral[200]}),(function(n){return n.theme.colors.background[400]})),B=m.c.div(H()),Z=m.c.div(D()),G=function(n){var e=n.to,t=n.active,r=n.icon,i=n.text;return o.a.createElement(X,{to:e,active:t},o.a.createElement(Z,null,r),o.a.createElement(B,null,i))};function N(){var n=Object(u.a)(["\n  width: 100%;\n  min-height: 36px;\n  padding-bottom: 20px;\n  text-align: center;\n  color: ",";\n  font-weight: bold;\n"]);return N=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100vh;\n  border-right: 1px solid ",";\n  padding: 32px 28px;\n  max-width: 256px;\n"]);return Q=function(){return n},n}var V=m.c.div(Q(),(function(n){return n.theme.colors.neutral[200]})),Y=m.c.p(N(),(function(n){return n.theme.colors.neutral[400]})),$=Object(d.b)((function(n){var e=n.auth,t=Object(p.h)().pathname,i=Object(r.useState)(""),a=Object(x.a)(i,2),c=a[0],s=a[1];Object(r.useEffect)((function(){!function(){var n,t;y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.awrap(v.a.get("users/".concat(e.id)));case 2:n=r.sent,(t=n.data)&&s(t.email);case 5:case"end":return r.stop()}}))}()}),[]);var l=[o.a.createElement(G,{to:"/offer",icon:o.a.createElement(k.a,null),text:"Oferta",key:"oferta"}),o.a.createElement(G,{to:"/account",icon:o.a.createElement(z.a,null),text:"Moje konto",key:"mojeKonto"}),o.a.createElement(G,{to:"/orders",icon:o.a.createElement(A.a,null),text:"Zam\xf3wienia",key:"zamowienia"})],d=[o.a.createElement(G,{to:"/finances",icon:o.a.createElement(C.a,null),text:"Finanse",key:"finanse"}),o.a.createElement(G,{to:"/users",icon:o.a.createElement(j.a,null),text:"U\u017cytkownicy",key:"uzytkownicy"}),o.a.createElement(G,{to:"/ingredients",icon:o.a.createElement(q.a,null),text:"Sk\u0142adniki",key:"skladniki"}),o.a.createElement(G,{to:"/recipes",icon:o.a.createElement(P.a,null),text:"Przepisy",key:"przepisy"})],u=(e.admin?[].concat(l,d):[].concat(l)).map((function(n){return n.props.to===t?o.a.createElement(G,Object.assign({},n.props,{active:"true",key:"current"})):n}));return o.a.createElement(V,null,o.a.createElement(U,null),o.a.createElement("div",null,u),o.a.createElement("div",null,o.a.createElement(Y,null,c),o.a.createElement(W.a,{unsized:!0,onClick:e.logout},"Wyloguj si\u0119")))})),_=t(37),nn=t(36);function en(){var n=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 256px 1fr;\n"]);return en=function(){return n},n}var tn=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,350))})),rn=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,351))})),on=o.a.lazy((function(){return t.e(13).then(t.bind(null,352))})),an=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(6)]).then(t.bind(null,353))})),cn=o.a.lazy((function(){return t.e(15).then(t.bind(null,354))})),sn=o.a.lazy((function(){return t.e(12).then(t.bind(null,355))})),ln=o.a.lazy((function(){return t.e(11).then(t.bind(null,356))})),dn=o.a.lazy((function(){return Promise.all([t.e(0),t.e(10)]).then(t.bind(null,358))})),un=o.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(9)]).then(t.bind(null,359))})),pn=o.a.lazy((function(){return t.e(14).then(t.bind(null,357))})),mn=m.c.div(en()),bn=Object(d.b)((function(n){var e=n.auth,t=[o.a.createElement(p.b,{path:"/finances",component:sn,key:"finances"}),o.a.createElement(p.b,{path:"/users",component:cn,key:"users"}),o.a.createElement(p.b,{path:"/ingredients",component:un,key:"ingredients"}),o.a.createElement(p.b,{path:"/recipes",component:pn,key:"recipes"})],i=[o.a.createElement(p.b,{path:"/orders",exact:!0,component:on,key:"orders"}),o.a.createElement(p.b,{path:"/orders/:id",component:an,key:"orders-id"}),o.a.createElement(p.b,{path:"/account",component:ln,key:"account"}),o.a.createElement(p.b,{path:"/offer",component:dn,key:"offer"})],a=[o.a.createElement(p.b,{path:"/login",component:tn,key:"login"}),o.a.createElement(p.b,{path:"/register",component:rn,key:"register"})];return o.a.createElement(m.a,{theme:h.a},e.id?o.a.createElement(r.Suspense,{fallback:o.a.createElement($,null)},o.a.createElement(p.d,null,o.a.createElement(mn,null,o.a.createElement($,null),e.admin?[].concat(t,i):i,o.a.createElement(p.b,{strict:!0,exact:!0,path:"/"},o.a.createElement(p.a,{to:"/offer"}))))):o.a.createElement(r.Suspense,{fallback:o.a.createElement(_.a,null,o.a.createElement(nn.a,null))},o.a.createElement(p.d,null,a,o.a.createElement(p.b,{strict:!0,exact:!0,path:"/"},o.a.createElement(p.a,{to:"/login"})))),o.a.createElement(f,null))})),fn=o.a.createElement(c.a,{basename:"caffavo-fe"},o.a.createElement(d.a,null,o.a.createElement(bn,null),o.a.createElement(l.a,null)));a.a.render(fn,document.getElementById("root"))}},[[68,3,4]]]);
//# sourceMappingURL=main.bb8071cb.chunk.js.map