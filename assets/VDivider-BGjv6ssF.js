import{k as c}from"./VImg-D7iuZsaE.js";import{g as u,p as h,a as m,t as g,c as f,h as s,e as y,f as r,m as _,j as k}from"./index-yxkmEyBU.js";const C=h({color:String,inset:Boolean,length:[Number,String],opacity:[Number,String],thickness:[Number,String],vertical:Boolean,...k(),..._()},"VDivider"),V=u()({name:"VDivider",props:C(),setup(e,o){let{attrs:i,slots:a}=o;const{themeClasses:l}=m(e),{textColorClasses:n,textColorStyles:d}=c(g(e,"color")),v=f(()=>{const t={};return e.length&&(t[e.vertical?"height":"width"]=s(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=s(e.thickness)),t});return y(()=>{const t=r("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},l.value,n.value,e.class],style:[v.value,d.value,{"--v-border-opacity":e.opacity},e.style],"aria-orientation":!i.role||i.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${i.role||"separator"}`},null);return a.default?r("div",{class:["v-divider__wrapper",{"v-divider__wrapper--vertical":e.vertical,"v-divider__wrapper--inset":e.inset}]},[t,r("div",{class:"v-divider__content"},[a.default()]),t]):t}),{}}});export{V};
