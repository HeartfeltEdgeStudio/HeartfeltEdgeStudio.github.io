import{s,I as u,c as t,aM as l,p as i,H as c}from"./index-CyegNRVd.js";function d(){const e=s(!1);return u(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:t(()=>e.value?void 0:{transition:"none !important"}),isBooted:l(e)}}const m=i({eager:Boolean},"lazy");function y(e,a){const o=s(!1),n=t(()=>o.value||e.eager||a.value);c(a,()=>o.value=!0);function r(){e.eager||(o.value=!1)}return{isBooted:o,hasContent:n,onAfterLeave:r}}export{y as a,m,d as u};
