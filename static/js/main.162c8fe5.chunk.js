(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{13:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3wDD5",errorInput:"SuperInputText_errorInput__1V9xx",error:"SuperInputText_error__2kMXJ"}},14:function(e,a,t){e.exports={default:"SuperButton_default__Ba2MG",red:"SuperButton_red__1EjfD"}},21:function(e,a,t){e.exports={App:"App_App__8sYPg",home:"App_home__2-iE2",reports:"App_reports__34fPl",products:"App_products__1rMne"}},22:function(e,a,t){e.exports=t.p+"static/media/cat_standing_animated.01b625ce.gif"},25:function(e,a,t){e.exports=t(36)},30:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(20),c=t.n(l),o=(t(30),t(21)),u=t.n(o);var i=function(){return r.a.createElement("div",null,"// add NavLinks")},s=t(2),m=t(8),p=t(7),_=t(13),v=t.n(_),E=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(p.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(v.a.error," ").concat(u||""),m="".concat(v.a.superInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"},i)),c&&r.a.createElement("span",{className:s},c))},d=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(p.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(m.a)(o,2),i=u[0],s=u[1],_=l||{},v=_.children,d=_.onDoubleClick,b=_.className,f=Object(p.a)(_,["children","onDoubleClick","className"]),g="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",b);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(E,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:g},f),v||c.value))},b=t(14),f=t.n(b),g=function(e){var a=e.red,t=e.className,n=Object(p.a)(e,["red","className"]),l="".concat(a?f.a.red:f.a.default," ").concat(t);return r.a.createElement("button",Object.assign({style:{color:"gold",background:"black",margin:"10px",border:"none",padding:"5px",borderRadius:"20%"},className:l},n))};function h(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function N(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}h("test",{x:"A",y:1});N("test",{x:"",y:0});var x=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(d,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(g,{onClick:function(){h("editable-span-value",t)}},"save"),r.a.createElement(g,{onClick:function(){var e=N("editable-span-value",t);l(e)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var y=function(){return r.a.createElement("div",null,r.a.createElement(x,null))},k=t(22),j=t.n(k),O=t(6);var C=function(){return r.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"40% 40% 20%",gridTemplateRows:"20% 20% 20% 20%"}},r.a.createElement("img",{style:{width:"32%",gridColumn:"1/5",gridRow:"1/2"},src:j.a,alt:"404 error cat"}),r.a.createElement("h1",{style:{marginBottom:"0.5rem",color:"#e32",fontSize:"4rem",lineHeight:"4.15rem",gridColumn:"2/5",gridRow:"1/2"}},"Oops."),r.a.createElement("h2",{style:{gridArea:"2 / 2 / 2 / 5",color:"#e32",marginTop:0}},"We can't find the page you're looking for."),r.a.createElement("p",{style:{gridArea:"3 / 2 / 2 / 3",margin:"38px 0 0 0"}},"It may have expired, or there could be a typo. Maybe you can find what you need from our homepage."),r.a.createElement("button",{onClick:function(){return r.a.createElement(s.a,{to:I.PRE_JUNIOR})},style:{gridArea:"3 / 2 / 4 / 3",fontSize:"300%",width:"85%",height:"62%"}},r.a.createElement(O.b,{style:{textDecoration:"none",color:"black"},to:"/"},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014")))};var w=function(){return r.a.createElement("div",null,"Junior")};var P=function(){return r.a.createElement("div",null,"JuniorPlus")},I={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior",JUNIOR_PLUS:"junior-plus"};var S=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:I.PRE_JUNIOR})}}),r.a.createElement(s.b,{path:"/pre-junior",exact:!0,render:function(){return r.a.createElement(y,null)}}),r.a.createElement(s.b,{path:"/junior",exact:!0,render:function(){return r.a.createElement(w,null)}}),r.a.createElement(s.b,{path:"/junior-plus",exact:!0,render:function(){return r.a.createElement(P,null)}}),"// add routes",r.a.createElement(s.b,{render:function(){return r.a.createElement(C,null)}})))},J=t(4),R=t.n(J),A=t(11),B=t(10),T=t(24),D=[{title:"Home",path:"/",icon:r.a.createElement(B.a,null),cName:R.a.nav_text},{title:"Junior",path:"/junior",icon:r.a.createElement(T.a,null),cName:R.a.nav_text},{title:"Junior-plus",path:"/junior-plus",icon:r.a.createElement(A.b,null),cName:R.a.nav_text}],U=t(0);var F=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],c=function(){return l(!t)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(U.b.Provider,{value:{color:"#fff"}},r.a.createElement("div",{className:R.a.navbar},r.a.createElement(O.b,{to:"#",className:R.a.menu_bars},r.a.createElement(A.a,{onClick:c}))),r.a.createElement("nav",{className:t?"".concat(R.a.nav_menu," ").concat(R.a.active):"".concat(R.a.nav_menu)},r.a.createElement("ul",{className:R.a.nav_menu_items,onClick:c},r.a.createElement("li",{className:R.a.navbar_toggle},r.a.createElement(O.b,{to:"#",className:R.a.menu_bars},r.a.createElement(B.b,null))),D.map((function(e,a){return r.a.createElement("li",{key:a,className:e.cName},r.a.createElement(O.b,{to:e.path},e.icon,r.a.createElement("span",null,e.title)))}))))))};var M=function(){return r.a.createElement("div",null,r.a.createElement(O.a,null,r.a.createElement(i,null),r.a.createElement(F,null),r.a.createElement(S,null)))};var L=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,a,t){e.exports={navbar:"Navbar_navbar__23pUo",menu_bars:"Navbar_menu_bars__P99PP",nav_menu:"Navbar_nav_menu__aPDiy",active:"Navbar_active__HuaJe",nav_text:"Navbar_nav_text__e_peC",nav_menu_items:"Navbar_nav_menu_items__2k1pO",navbar_toggle:"Navbar_navbar_toggle__8BRxb",activeLink:"Navbar_activeLink__1itpN"}}},[[25,1,2]]]);
//# sourceMappingURL=main.162c8fe5.chunk.js.map