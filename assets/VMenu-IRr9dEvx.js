import{g as D,p as E,k as h,$ as F,b6 as fe,aj as K,s as j,ak as U,ay as Ie,b7 as C,r as x,Y,f as p,X as se,aX as vt,t as A,ar as Ve,ag as Le,Z as ft,j as R,S as Z,b8 as mt,b9 as yt,av as xe,aP as gt,n as H,x as q,aq as M,ba as ht,at as bt,aN as St,U as Oe,a as Ee,b as Be,aK as pt,ax as Te,A as Me,c as je,d as De,bb as wt,aw as kt,aI as _e,m as Fe,aS as Ct,o as Re,v as $e,B as Ne,ao as Ge,y as Ke,aU as N,aO as At,K as me,aQ as ye,M as ge,az as Pt,bc as It,w as Vt,bd as Ue,be as He,ap as Lt,bf as B,aB as oe,u as xt,R as Ot,bg as Q,z as Et,bh as Bt,an as Tt,aH as he,aG as be,bi as Mt,bj as jt}from"./index-bDS8Fhl7.js";import{q as W,r as Dt,s as Se,t as _t,v as Ft,w as Rt,a as $t,x as Nt,b as pe,f as Gt,y as Kt,z as we}from"./VOverlay-By7syYCx.js";const Ut=E({target:[Object,Array]},"v-dialog-transition"),Ht=D()({name:"VDialogTransition",props:Ut(),setup(e,i){let{slots:t}=i;const n={onBeforeEnter(l){l.style.pointerEvents="none",l.style.visibility="hidden"},async onEnter(l,a){var b;await new Promise(g=>requestAnimationFrame(g)),await new Promise(g=>requestAnimationFrame(g)),l.style.visibility="";const{x:s,y:r,sx:v,sy:c,speed:y}=Ce(e.target,l),m=W(l,[{transform:`translate(${s}px, ${r}px) scale(${v}, ${c})`,opacity:0},{}],{duration:225*y,easing:_t});(b=ke(l))==null||b.forEach(g=>{W(g,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*y,easing:Se})}),m.finished.then(()=>a())},onAfterEnter(l){l.style.removeProperty("pointer-events")},onBeforeLeave(l){l.style.pointerEvents="none"},async onLeave(l,a){var b;await new Promise(g=>requestAnimationFrame(g));const{x:s,y:r,sx:v,sy:c,speed:y}=Ce(e.target,l);W(l,[{},{transform:`translate(${s}px, ${r}px) scale(${v}, ${c})`,opacity:0}],{duration:125*y,easing:Dt}).finished.then(()=>a()),(b=ke(l))==null||b.forEach(g=>{W(g,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*y,easing:Se})})},onAfterLeave(l){l.style.removeProperty("pointer-events")}};return()=>e.target?h(fe,F({name:"dialog-transition"},n,{css:!1}),t):h(fe,{name:"dialog-transition"},t)}});function ke(e){var t;const i=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return i&&[...i]}function Ce(e,i){const t=Ft(e),n=Rt(i),[l,a]=getComputedStyle(i).transformOrigin.split(" ").map(f=>parseFloat(f)),[s,r]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let v=t.left+t.width/2;s==="left"||r==="left"?v-=t.width/2:(s==="right"||r==="right")&&(v+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const y=t.width/n.width,m=t.height/n.height,b=Math.max(1,y,m),g=y/b||0,o=m/b||0,d=n.width*n.height/(window.innerWidth*window.innerHeight),u=d>.12?Math.min(1.5,(d-.12)*10+1):1;return{x:v-(l+n.left),y:c-(a+n.top),sx:g,sy:o,speed:u}}const le=Symbol.for("vuetify:list");function qe(){const e=K(le,{hasPrepend:j(!1),updateHasPrepend:()=>null}),i={hasPrepend:j(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return U(le,i),e}function ze(){return K(le,null)}const re=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=C(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const s of Ie(t))a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},Xe=e=>{const i=re(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=C(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:r})},in:(n,l,a)=>{let s=new Set;if(n!=null){const r=Ie(n);r.length&&(s=i.in(r.slice(0,1),l,a))}return s},out:(n,l,a)=>i.out(n,l,a)}},qt=e=>{const i=re(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=C(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},zt=e=>{const i=Xe(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=C(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},Xt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},We={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},Wt={open:We.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},ue=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=C(n),e&&!l){const s=Array.from(a.entries()).reduce((r,v)=>{let[c,y]=v;return y==="on"&&r.push(c),r},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{const a=new Map;for(const s of t||[])i.select({id:s,value:!0,selected:a,children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},Ye=e=>{const i=ue(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=C(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:r})},in:(n,l,a)=>n!=null&&n.length?i.in(n.slice(0,1),l,a):new Map,out:(n,l,a)=>i.out(n,l,a)}},Yt=e=>{const i=ue(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=C(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Qt=e=>{const i=Ye(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=C(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Zt=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:r}=t;n=C(n);const v=new Map(a),c=[n];for(;c.length;){const m=c.shift();a.set(C(m),l?"on":"off"),s.has(m)&&c.push(...s.get(m))}let y=C(r.get(n));for(;y;){const m=s.get(y),b=m.every(o=>a.get(C(o))==="on"),g=m.every(o=>!a.has(C(o))||a.get(C(o))==="off");a.set(y,b?"on":g?"off":"indeterminate"),y=C(r.get(y))}return e&&!l&&Array.from(a.entries()).reduce((b,g)=>{let[o,d]=g;return d==="on"&&b.push(o),b},[]).length===0?v:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:a,children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},G=Symbol.for("vuetify:nested"),Qe={id:j(),root:{register:()=>null,unregister:()=>null,parents:x(new Map),children:x(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:x(!1),selectable:x(!1),opened:x(new Set),activated:x(new Set),selected:x(new Map),selectedValues:x([]),getPath:()=>[]}},Jt=E({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),en=e=>{let i=!1;const t=x(new Map),n=x(new Map),l=Y(e,"opened",e.opened,o=>new Set(o),o=>[...o.values()]),a=p(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return qt(e.mandatory);case"single-leaf":return zt(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":default:return Xe(e.mandatory)}}),s=p(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Qt(e.mandatory);case"leaf":return Yt(e.mandatory);case"independent":return ue(e.mandatory);case"single-independent":return Ye(e.mandatory);case"classic":default:return Zt(e.mandatory)}}),r=p(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Wt;case"single":return Xt;case"multiple":default:return We}}),v=Y(e,"activated",e.activated,o=>a.value.in(o,t.value,n.value),o=>a.value.out(o,t.value,n.value)),c=Y(e,"selected",e.selected,o=>s.value.in(o,t.value,n.value),o=>s.value.out(o,t.value,n.value));se(()=>{i=!0});function y(o){const d=[];let u=o;for(;u!=null;)d.unshift(u),u=n.value.get(u);return d}const m=vt("nested"),b=new Set,g={id:j(),root:{opened:l,activatable:A(e,"activatable"),selectable:A(e,"selectable"),activated:v,selected:c,selectedValues:p(()=>{const o=[];for(const[d,u]of c.value.entries())u==="on"&&o.push(d);return o}),register:(o,d,u)=>{if(b.has(o)){y(o).map(String).join(" -> "),y(d).concat(o).map(String).join(" -> ");return}else b.add(o);d&&o!==d&&n.value.set(o,d),u&&t.value.set(o,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],o])},unregister:o=>{if(i)return;b.delete(o),t.value.delete(o);const d=n.value.get(o);if(d){const u=t.value.get(d)??[];t.value.set(d,u.filter(f=>f!==o))}n.value.delete(o)},open:(o,d,u)=>{m.emit("click:open",{id:o,value:d,path:y(o),event:u});const f=r.value.open({id:o,value:d,opened:new Set(l.value),children:t.value,parents:n.value,event:u});f&&(l.value=f)},openOnSelect:(o,d,u)=>{const f=r.value.select({id:o,value:d,selected:new Map(c.value),opened:new Set(l.value),children:t.value,parents:n.value,event:u});f&&(l.value=f)},select:(o,d,u)=>{m.emit("click:select",{id:o,value:d,path:y(o),event:u});const f=s.value.select({id:o,value:d,selected:new Map(c.value),children:t.value,parents:n.value,event:u});f&&(c.value=f),g.root.openOnSelect(o,d,u)},activate:(o,d,u)=>{if(!e.activatable)return g.root.select(o,!0,u);m.emit("click:activate",{id:o,value:d,path:y(o),event:u});const f=a.value.activate({id:o,value:d,activated:new Set(v.value),children:t.value,parents:n.value,event:u});if(f.size!==v.value.size)v.value=f;else{for(const S of f)if(!v.value.has(S)){v.value=f;return}for(const S of v.value)if(!f.has(S)){v.value=f;return}}},children:t,parents:n,getPath:y}};return U(G,g),g.root},Ze=(e,i)=>{const t=K(G,Qe),n=Symbol(Ve()),l=p(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,r)=>t.root.open(l.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(l.value,s,r),isOpen:p(()=>t.root.opened.value.has(l.value)),parent:p(()=>t.root.parents.value.get(l.value)),activate:(s,r)=>t.root.activate(l.value,s,r),isActivated:p(()=>t.root.activated.value.has(C(l.value))),select:(s,r)=>t.root.select(l.value,s,r),isSelected:p(()=>t.root.selected.value.get(C(l.value))==="on"),isIndeterminate:p(()=>t.root.selected.value.get(C(l.value))==="indeterminate"),isLeaf:p(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return Le(()=>{!t.isGroupActivator&&t.root.register(l.value,t.id.value,i)}),se(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&U(G,a),a},tn=()=>{const e=K(G,Qe);U(G,{...e,isGroupActivator:!0})},nn=mt({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return tn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),an=E({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...q(),...H()},"VListGroup"),Ae=D()({name:"VListGroup",props:an(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=Ze(A(e,"value"),!0),s=p(()=>`v-list-group--id-${String(a.value)}`),r=ze(),{isBooted:v}=ft();function c(g){g.stopPropagation(),l(!n.value,g)}const y=p(()=>({onClick:c,class:"v-list-group__header",id:s.value})),m=p(()=>n.value?e.collapseIcon:e.expandIcon),b=p(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}));return R(()=>h(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&h(Z,{defaults:b.value},{default:()=>[h(nn,null,{default:()=>[t.activator({props:y.value,isOpen:n.value})]})]}),h(yt,{transition:{component:$t},disabled:!v.value},{default:()=>{var g;return[xe(h("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(g=t.default)==null?void 0:g.call(t)]),[[gt,n.value]])]}})]})),{isOpen:n}}}),ln=E({opacity:[Number,String],...q(),...H()},"VListItemSubtitle"),sn=D()({name:"VListItemSubtitle",props:ln(),setup(e,i){let{slots:t}=i;return R(()=>h(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),on=ht("v-list-item-title"),rn=E({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:N(),onClickOnce:N(),...Ke(),...q(),...Ge(),...Ne(),...$e(),...Re(),...Ct(),...H(),...Fe(),..._e({variant:"text"})},"VListItem"),Pe=D()({name:"VListItem",directives:{Ripple:bt},props:rn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=St(e,t),s=p(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:v,select:c,isOpen:y,isSelected:m,isIndeterminate:b,isGroupActivator:g,root:o,parent:d,openOnSelect:u,id:f}=Ze(s,!1),S=ze(),k=p(()=>{var w;return e.active!==!1&&(e.active||((w=a.isActive)==null?void 0:w.value)||(o.activatable.value?v.value:m.value))}),I=p(()=>e.link!==!1&&a.isLink.value),L=p(()=>!!S&&(o.selectable.value||o.activatable.value||e.value!=null)),V=p(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||L.value)),$=p(()=>e.rounded||e.nav),J=p(()=>e.color??e.activeColor),ee=p(()=>({color:k.value?J.value??e.baseColor:e.baseColor,variant:e.variant}));Oe(()=>{var w;return(w=a.isActive)==null?void 0:w.value},w=>{w&&z()}),Le(()=>{var w;(w=a.isActive)!=null&&w.value&&z()});function z(){d.value!=null&&o.open(d.value,!0),u(!0)}const{themeClasses:te}=Ee(e),{borderClasses:T}=Be(e),{colorClasses:P,colorStyles:_,variantClasses:nt}=pt(ee),{densityClasses:at}=Te(e),{dimensionStyles:lt}=Me(e),{elevationClasses:it}=je(e),{roundedClasses:st}=De($),ot=p(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ne=p(()=>({isActive:k.value,select:c,isOpen:y.value,isSelected:m.value,isIndeterminate:b.value}));function rt(w){var X;l("click",w),V.value&&((X=a.navigate)==null||X.call(a,w),!g&&(o.activatable.value?r(!v.value,w):(o.selectable.value||e.value!=null)&&c(!m.value,w)))}function ut(w){(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),w.target.dispatchEvent(new MouseEvent("click",w)))}return R(()=>{const w=I.value?"a":e.tag,X=n.title||e.title!=null,ct=n.subtitle||e.subtitle!=null,ce=!!(e.appendAvatar||e.appendIcon),dt=!!(ce||n.append),de=!!(e.prependAvatar||e.prependIcon),ae=!!(de||n.prepend);return S==null||S.updateHasPrepend(ae),e.activeColor&&wt("active-color",["color","base-color"]),xe(h(w,F({class:["v-list-item",{"v-list-item--active":k.value,"v-list-item--disabled":e.disabled,"v-list-item--link":V.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ae&&(S==null?void 0:S.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&k.value},te.value,T.value,P.value,at.value,it.value,ot.value,st.value,nt.value,e.class],style:[_.value,lt.value,e.style],tabindex:V.value?S?-2:0:void 0,"aria-selected":L.value?o.activatable.value?v.value:o.selectable.value?m.value:k.value:void 0,onClick:rt,onKeydown:V.value&&!I.value&&ut},a.linkProps),{default:()=>{var ve;return[At(V.value||k.value,"v-list-item"),ae&&h("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?h(Z,{key:"prepend-defaults",disabled:!de,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var O;return[(O=n.prepend)==null?void 0:O.call(n,ne.value)]}}):h(me,null,[e.prependAvatar&&h(ye,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&h(ge,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),h("div",{class:"v-list-item__spacer"},null)]),h("div",{class:"v-list-item__content","data-no-activator":""},[X&&h(on,{key:"title"},{default:()=>{var O;return[((O=n.title)==null?void 0:O.call(n,{title:e.title}))??e.title]}}),ct&&h(sn,{key:"subtitle"},{default:()=>{var O;return[((O=n.subtitle)==null?void 0:O.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ve=n.default)==null?void 0:ve.call(n,ne.value)]),dt&&h("div",{key:"append",class:"v-list-item__append"},[n.append?h(Z,{key:"append-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var O;return[(O=n.append)==null?void 0:O.call(n,ne.value)]}}):h(me,null,[e.appendIcon&&h(ge,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&h(ye,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),h("div",{class:"v-list-item__spacer"},null)])]}}),[[kt("ripple"),V.value&&e.ripple]])}),{activate:r,isActivated:v,isGroupActivator:g,isSelected:m,list:S,select:c,root:o,id:f,link:a}}}),un=E({color:String,inset:Boolean,sticky:Boolean,title:String,...q(),...H()},"VListSubheader"),cn=D()({name:"VListSubheader",props:un(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Pt(A(e,"color"));return R(()=>{const a=!!(t.default||e.title);return h(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&h("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),dn=E({items:Array,returnObject:Boolean},"VListChildren"),Je=D()({name:"VListChildren",props:dn(),setup(e,i){let{slots:t}=i;return qe(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var b,g;let{children:s,props:r,type:v,raw:c}=a;if(v==="divider")return((b=t.divider)==null?void 0:b.call(t,{props:r}))??h(It,r,null);if(v==="subheader")return((g=t.subheader)==null?void 0:g.call(t,{props:r}))??h(cn,r,null);const y={subtitle:t.subtitle?o=>{var d;return(d=t.subtitle)==null?void 0:d.call(t,{...o,item:c})}:void 0,prepend:t.prepend?o=>{var d;return(d=t.prepend)==null?void 0:d.call(t,{...o,item:c})}:void 0,append:t.append?o=>{var d;return(d=t.append)==null?void 0:d.call(t,{...o,item:c})}:void 0,title:t.title?o=>{var d;return(d=t.title)==null?void 0:d.call(t,{...o,item:c})}:void 0},m=Ae.filterProps(r);return s?h(Ae,F({value:r==null?void 0:r.value},m),{activator:o=>{let{props:d}=o;const u={...r,...d,value:e.returnObject?c:r.value};return t.header?t.header({props:u}):h(Pe,u,y)},default:()=>h(Je,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:r}):h(Pe,F(r,{value:e.returnObject?c:r.value}),y)}))}}}),vn=E({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function ie(e,i){const t=B(i,e.itemTitle,i),n=B(i,e.itemValue,t),l=B(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?oe(i,["children"]):i:void 0:B(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?et(e,l):void 0,raw:i}}function et(e,i){const t=He(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),n=[];for(const l of i)n.push(ie(t,l));return n}function Sn(e){const i=p(()=>et(e,e.items)),t=p(()=>i.value.some(r=>r.value===null)),n=j(new Map),l=j([]);Vt(()=>{const r=i.value,v=new Map,c=[];for(let y=0;y<r.length;y++){const m=r[y];if(Ue(m.value)||m.value===null){let b=v.get(m.value);b||(b=[],v.set(m.value,b)),b.push(m)}else c.push(m)}n.value=v,l.value=c});function a(r){const v=n.value,c=i.value,y=l.value,m=t.value,b=e.returnObject,g=!!e.valueComparator,o=e.valueComparator||Lt,d=He(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),u=[];e:for(const f of r){if(!m&&f===null)continue;if(b&&typeof f=="string"){u.push(ie(d,f));continue}const S=v.get(f);if(g||!S){for(const k of g?c:y)if(o(f,k.value)){u.push(k);continue e}u.push(ie(d,f));continue}u.push(...S)}return u}function s(r){return e.returnObject?r.map(v=>{let{raw:c}=v;return c}):r.map(v=>{let{value:c}=v;return c})}return{items:i,transformIn:a,transformOut:s}}function fn(e,i){const t=B(i,e.itemType,"item"),n=Ue(i)?i:B(i,e.itemTitle),l=B(i,e.itemValue,void 0),a=B(i,e.itemChildren),s=e.itemProps===!0?oe(i,["children"]):B(i,e.itemProps),r={title:n,value:l,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?tt(e,a):void 0,raw:i}}function tt(e,i){const t=[];for(const n of i)t.push(fn(e,n));return t}function mn(e){return{items:p(()=>tt(e,e.items))}}const yn=E({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:M,collapseIcon:M,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":N(),"onClick:select":N(),"onUpdate:opened":N(),...Jt({selectStrategy:"single-leaf",openStrategy:"list"}),...Ke(),...q(),...Ge(),...Ne(),...$e(),itemType:{type:String,default:"type"},...vn(),...Re(),...H(),...Fe(),..._e({variant:"text"})},"VList"),pn=D()({name:"VList",props:yn(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=mn(e),{themeClasses:l}=Ee(e),{backgroundColorClasses:a,backgroundColorStyles:s}=xt(A(e,"bgColor")),{borderClasses:r}=Be(e),{densityClasses:v}=Te(e),{dimensionStyles:c}=Me(e),{elevationClasses:y}=je(e),{roundedClasses:m}=De(e),{children:b,open:g,parents:o,select:d,getPath:u}=en(e),f=p(()=>e.lines?`v-list--${e.lines}-line`:void 0),S=A(e,"activeColor"),k=A(e,"baseColor"),I=A(e,"color");qe(),Ot({VListGroup:{activeColor:S,baseColor:k,color:I,expandIcon:A(e,"expandIcon"),collapseIcon:A(e,"collapseIcon")},VListItem:{activeClass:A(e,"activeClass"),activeColor:S,baseColor:k,color:I,density:A(e,"density"),disabled:A(e,"disabled"),lines:A(e,"lines"),nav:A(e,"nav"),slim:A(e,"slim"),variant:A(e,"variant")}});const L=j(!1),V=x();function $(P){L.value=!0}function J(P){L.value=!1}function ee(P){var _;!L.value&&!(P.relatedTarget&&((_=V.value)!=null&&_.contains(P.relatedTarget)))&&T()}function z(P){const _=P.target;if(!(!V.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(P.key==="ArrowDown")T("next");else if(P.key==="ArrowUp")T("prev");else if(P.key==="Home")T("first");else if(P.key==="End")T("last");else return;P.preventDefault()}}function te(P){L.value=!0}function T(P){if(V.value)return Q(V.value,P)}return R(()=>h(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,v.value,y.value,f.value,m.value,e.class],style:[s.value,c.value,e.style],tabindex:e.disabled?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:$,onFocusout:J,onFocus:ee,onKeydown:z,onMousedown:te},{default:()=>[h(Je,{items:n.value,returnObject:e.returnObject},t)]})),{open:g,select:d,focus:T,children:b,parents:o,getPath:u}}}),gn=E({id:String,submenu:Boolean,...oe(Kt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Ht}}),["absolute"])},"VMenu"),wn=D()({name:"VMenu",props:gn(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=Y(e,"modelValue"),{scopeId:l}=Nt(),{isRtl:a}=Et(),s=Ve(),r=p(()=>e.id||`v-menu-${s}`),v=x(),c=K(we,null),y=j(new Set);U(we,{register(){y.value.add(s)},unregister(){y.value.delete(s)},closeParents(u){setTimeout(()=>{var f;!y.value.size&&!e.persistent&&(u==null||(f=v.value)!=null&&f.contentEl&&!jt(u,v.value.contentEl))&&(n.value=!1,c==null||c.closeParents())},40)}}),se(()=>{c==null||c.unregister(),document.removeEventListener("focusin",m)}),Bt(()=>n.value=!1);async function m(u){var k,I,L;const f=u.relatedTarget,S=u.target;await Tt(),n.value&&f!==S&&((k=v.value)!=null&&k.contentEl)&&((I=v.value)!=null&&I.globalTop)&&![document,v.value.contentEl].includes(S)&&!v.value.contentEl.contains(S)&&((L=he(v.value.contentEl)[0])==null||L.focus())}Oe(n,u=>{u?(c==null||c.register(),be&&document.addEventListener("focusin",m,{once:!0})):(c==null||c.unregister(),be&&document.removeEventListener("focusin",m))},{immediate:!0});function b(u){c==null||c.closeParents(u)}function g(u){var f,S,k,I,L;if(!e.disabled)if(u.key==="Tab"||u.key==="Enter"&&!e.closeOnContentClick){if(u.key==="Enter"&&(u.target instanceof HTMLTextAreaElement||u.target instanceof HTMLInputElement&&u.target.closest("form")))return;u.key==="Enter"&&u.preventDefault(),Mt(he((f=v.value)==null?void 0:f.contentEl,!1),u.shiftKey?"prev":"next",$=>$.tabIndex>=0)||(n.value=!1,(k=(S=v.value)==null?void 0:S.activatorEl)==null||k.focus())}else e.submenu&&u.key===(a.value?"ArrowRight":"ArrowLeft")&&(n.value=!1,(L=(I=v.value)==null?void 0:I.activatorEl)==null||L.focus())}function o(u){var S;if(e.disabled)return;const f=(S=v.value)==null?void 0:S.contentEl;f&&n.value?u.key==="ArrowDown"?(u.preventDefault(),u.stopImmediatePropagation(),Q(f,"next")):u.key==="ArrowUp"?(u.preventDefault(),u.stopImmediatePropagation(),Q(f,"prev")):e.submenu&&(u.key===(a.value?"ArrowRight":"ArrowLeft")?n.value=!1:u.key===(a.value?"ArrowLeft":"ArrowRight")&&(u.preventDefault(),Q(f,"first"))):(e.submenu?u.key===(a.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(u.key))&&(n.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>o(u))))}const d=p(()=>F({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-controls":r.value,onKeydown:o},e.activatorProps));return R(()=>{const u=pe.filterProps(e);return h(pe,F({ref:v,id:r.value,class:["v-menu",e.class],style:e.style},u,{modelValue:n.value,"onUpdate:modelValue":f=>n.value=f,absolute:!0,activatorProps:d.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":b,onKeydown:g},l),{activator:t.activator,default:function(){for(var f=arguments.length,S=new Array(f),k=0;k<f;k++)S[k]=arguments[k];return h(Z,{root:"VMenu"},{default:()=>{var I;return[(I=t.default)==null?void 0:I.call(t,...S)]}})}})}),Gt({id:r,ΨopenChildren:y},v)}});export{wn as V,pn as a,Pe as b,on as c,Ht as d,vn as m,Sn as u};
