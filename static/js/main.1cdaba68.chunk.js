(this.webpackJsonproullete=this.webpackJsonproullete||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(4),r=n.n(s),a=n(2);n(9);var o=function(e,t,n){var i=Object(c.useRef)();Object(c.useEffect)((function(){i.current=e}),[e]),Object(c.useEffect)((function(){if(!n&&null!==t){var e=setInterval((function(){i.current()}),t);return function(){return clearInterval(e)}}}),[t,n])},u=n(1),j=function(e){var t=Object(c.useState)(-100),n=Object(a.a)(t,2),i=n[0],s=n[1],r=Object(c.useState)(e.speed),j=Object(a.a)(r,2),l=j[0],b=j[1],d=Object(c.useState)(!1),f=Object(a.a)(d,2),O=f[0],h=f[1],m=Object(c.useState)(!1),p=Object(a.a)(m,2),x=p[0],v=p[1],g=Object(c.useRef)(!0),N=Object(c.useRef)(null),S=i+220*e.index;Object(c.useEffect)((function(){S>=27&&S<=195&&O&&e.takeFromChildShow(e.price)}),[O]),Object(c.useEffect)((function(){s(-100),e.takeIntoInventory(),b(e.speed),h(!1)}),[e.reset]),Object(c.useEffect)((function(){g.current?g.current=!1:v(!0)}),[e.press]),o((function(){N.current.offsetLeft<-150?s(600-220*e.index):(s(i-l),l>.01?b(l-.0509):(h(!0),v(!1)))}),10,!x);return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"item",ref:N,style:{position:"absolute",left:"".concat(S,"px"),top:S>=27&&S<=195&&O?"10px":""},children:Object(u.jsx)("h1",{children:e.price})})})};var l=function(){var e=this,t=Object(c.useState)(Array.from({length:4},(function(){return Math.floor(1e3*Math.random())}))),n=Object(a.a)(t,1)[0],i=Object(c.useState)(!1),s=Object(a.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)(!1),b=Object(a.a)(l,2),d=b[0],f=b[1],O=Object(c.useState)(!1),h=Object(a.a)(O,2),m=h[0],p=h[1],x=Object(c.useState)(null),v=Object(a.a)(x,2),g=v[0],N=v[1],S=Math.floor(20*Math.random()+4),k=function(e){setTimeout((function(){f(!0)}),500),N(e)},y=function(){f(!1),p((function(e){return!e}))};return Object(u.jsxs)("div",{className:"App",children:[d?Object(u.jsx)("div",{className:"WinningModal",children:Object(u.jsxs)("div",{className:"WinningAnimation",children:[Object(u.jsx)("div",{className:"WinningHead pt-3",children:Object(u.jsx)("span",{className:"WinningNumber",children:g})}),Object(u.jsx)("div",{className:"WinningBody",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-lg WinningBtn mt-5",onClick:y,children:"Take"})})]})}):null,Object(u.jsxs)("div",{className:"Content",children:[Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("div",{className:"Line"}),Object(u.jsx)("div",{className:"AwardModal"}),n.map((function(t,c){return Object(u.jsx)(j,{reset:m,price:t,index:c,order:n,press:r,speed:S,takeFromChildShow:k.bind(e),takeIntoInventory:y})}))]}),Object(u.jsx)("div",{className:"Block",children:Object(u.jsx)("button",{type:"button",className:"btn btn-primary SpinBtn",onClick:function(){o((function(e){return!e})),console.log(r)},children:"Spin"})})]})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root")),b()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.1cdaba68.chunk.js.map