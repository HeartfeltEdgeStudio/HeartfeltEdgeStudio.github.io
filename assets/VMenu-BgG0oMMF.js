import{ar as $,s as j,as as U,aG as ke,be as w,p as B,r as O,Z as X,f as S,Y as ie,b3 as ut,t as A,az as Ce,ao as we,g as D,$ as rt,j as F,k as g,T as J,bf as ot,bg as ct,aD as Ae,aX as dt,n as H,x as z,ay as x,bh as vt,aB as ft,aV as mt,W as Ie,a as Ve,b as Pe,aS as yt,aF as Le,B as Oe,c as Ee,d as Te,bi as gt,aE as bt,a0 as G,aQ as Be,m as Me,a_ as St,o as xe,v as je,C as De,aw as _e,y as Fe,b0 as N,aW as ht,L as ve,aY as fe,N as me,aH as pt,bj as kt,w as Ct,bk as Re,bl as Ne,ax as wt,bm as T,aJ as se,u as At,S as It,bn as Y,bo as Vt,A as Pt,bp as Lt,av as Ot,aP as ye,aO as ge,ak as be,z as Et,bq as Tt,b7 as Bt,br as Mt,bs as Se,bt as xt}from"./index-Co7BU8GO.js";import{a as jt}from"./VTextField-BTgApT0n.js";const ne=Symbol.for("vuetify:list");function Ge(){const e=$(ne,{hasPrepend:j(!1),updateHasPrepend:()=>null}),i={hasPrepend:j(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return U(ne,i),e}function Ke(){return $(ne,null)}const ue=e=>{const i={activate:a=>{let{id:t,value:l,activated:n}=a;return t=w(t),e&&!l&&n.size===1&&n.has(t)||(l?n.add(t):n.delete(t)),n},in:(a,t,l)=>{let n=new Set;if(a!=null)for(const u of ke(a))n=i.activate({id:u,value:!0,activated:new Set(n),children:t,parents:l});return n},out:a=>Array.from(a)};return i},$e=e=>{const i=ue(e);return{activate:t=>{let{activated:l,id:n,...u}=t;n=w(n);const o=l.has(n)?new Set([n]):new Set;return i.activate({...u,id:n,activated:o})},in:(t,l,n)=>{let u=new Set;if(t!=null){const o=ke(t);o.length&&(u=i.in(o.slice(0,1),l,n))}return u},out:(t,l,n)=>i.out(t,l,n)}},Dt=e=>{const i=ue(e);return{activate:t=>{let{id:l,activated:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.activate({id:l,activated:n,children:u,...o})},in:i.in,out:i.out}},_t=e=>{const i=$e(e);return{activate:t=>{let{id:l,activated:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.activate({id:l,activated:n,children:u,...o})},in:i.in,out:i.out}},Ft={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){const n=new Set;n.add(i);let u=l.get(i);for(;u!=null;)n.add(u),u=l.get(u);return n}else return t.delete(i),t},select:()=>null},Ue={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){let n=l.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=l.get(n);return t}else t.delete(i);return t},select:()=>null},Rt={open:Ue.open,select:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(!a)return t;const n=[];let u=l.get(i);for(;u!=null;)n.push(u),u=l.get(u);return new Set(n)}},re=e=>{const i={select:a=>{let{id:t,value:l,selected:n}=a;if(t=w(t),e&&!l){const u=Array.from(n.entries()).reduce((o,v)=>{let[d,y]=v;return y==="on"&&o.push(d),o},[]);if(u.length===1&&u[0]===t)return n}return n.set(t,l?"on":"off"),n},in:(a,t,l)=>{const n=new Map;for(const u of a||[])i.select({id:u,value:!0,selected:n,children:t,parents:l});return n},out:a=>{const t=[];for(const[l,n]of a.entries())n==="on"&&t.push(l);return t}};return i},He=e=>{const i=re(e);return{select:t=>{let{selected:l,id:n,...u}=t;n=w(n);const o=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...u,id:n,selected:o})},in:(t,l,n)=>t!=null&&t.length?i.in(t.slice(0,1),l,n):new Map,out:(t,l,n)=>i.out(t,l,n)}},Nt=e=>{const i=re(e);return{select:t=>{let{id:l,selected:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.select({id:l,selected:n,children:u,...o})},in:i.in,out:i.out}},Gt=e=>{const i=He(e);return{select:t=>{let{id:l,selected:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.select({id:l,selected:n,children:u,...o})},in:i.in,out:i.out}},Kt=e=>{const i={select:a=>{let{id:t,value:l,selected:n,children:u,parents:o}=a;t=w(t);const v=new Map(n),d=[t];for(;d.length;){const m=d.shift();n.set(w(m),l?"on":"off"),u.has(m)&&d.push(...u.get(m))}let y=w(o.get(t));for(;y;){const m=u.get(y),p=m.every(s=>n.get(w(s))==="on"),h=m.every(s=>!n.has(w(s))||n.get(w(s))==="off");n.set(y,p?"on":h?"off":"indeterminate"),y=w(o.get(y))}return e&&!l&&Array.from(n.entries()).reduce((p,h)=>{let[s,c]=h;return c==="on"&&p.push(s),p},[]).length===0?v:n},in:(a,t,l)=>{let n=new Map;for(const u of a||[])n=i.select({id:u,value:!0,selected:n,children:t,parents:l});return n},out:(a,t)=>{const l=[];for(const[n,u]of a.entries())u==="on"&&!t.has(n)&&l.push(n);return l}};return i},K=Symbol.for("vuetify:nested"),ze={id:j(),root:{register:()=>null,unregister:()=>null,parents:O(new Map),children:O(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:O(!1),selectable:O(!1),opened:O(new Set),activated:O(new Set),selected:O(new Map),selectedValues:O([]),getPath:()=>[]}},$t=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Ut=e=>{let i=!1;const a=O(new Map),t=O(new Map),l=X(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),n=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Dt(e.mandatory);case"single-leaf":return _t(e.mandatory);case"independent":return ue(e.mandatory);case"single-independent":default:return $e(e.mandatory)}}),u=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Gt(e.mandatory);case"leaf":return Nt(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":return He(e.mandatory);case"classic":default:return Kt(e.mandatory)}}),o=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Rt;case"single":return Ft;case"multiple":default:return Ue}}),v=X(e,"activated",e.activated,s=>n.value.in(s,a.value,t.value),s=>n.value.out(s,a.value,t.value)),d=X(e,"selected",e.selected,s=>u.value.in(s,a.value,t.value),s=>u.value.out(s,a.value,t.value));ie(()=>{i=!0});function y(s){const c=[];let r=s;for(;r!=null;)c.unshift(r),r=t.value.get(r);return c}const m=ut("nested"),p=new Set,h={id:j(),root:{opened:l,activatable:A(e,"activatable"),selectable:A(e,"selectable"),activated:v,selected:d,selectedValues:S(()=>{const s=[];for(const[c,r]of d.value.entries())r==="on"&&s.push(c);return s}),register:(s,c,r)=>{if(p.has(s)){y(s).map(String).join(" -> "),y(c).concat(s).map(String).join(" -> ");return}else p.add(s);c&&s!==c&&t.value.set(s,c),r&&a.value.set(s,[]),c!=null&&a.value.set(c,[...a.value.get(c)||[],s])},unregister:s=>{if(i)return;p.delete(s),a.value.delete(s);const c=t.value.get(s);if(c){const r=a.value.get(c)??[];a.value.set(c,r.filter(f=>f!==s))}t.value.delete(s)},open:(s,c,r)=>{m.emit("click:open",{id:s,value:c,path:y(s),event:r});const f=o.value.open({id:s,value:c,opened:new Set(l.value),children:a.value,parents:t.value,event:r});f&&(l.value=f)},openOnSelect:(s,c,r)=>{const f=o.value.select({id:s,value:c,selected:new Map(d.value),opened:new Set(l.value),children:a.value,parents:t.value,event:r});f&&(l.value=f)},select:(s,c,r)=>{m.emit("click:select",{id:s,value:c,path:y(s),event:r});const f=u.value.select({id:s,value:c,selected:new Map(d.value),children:a.value,parents:t.value,event:r});f&&(d.value=f),h.root.openOnSelect(s,c,r)},activate:(s,c,r)=>{if(!e.activatable)return h.root.select(s,!0,r);m.emit("click:activate",{id:s,value:c,path:y(s),event:r});const f=n.value.activate({id:s,value:c,activated:new Set(v.value),children:a.value,parents:t.value,event:r});if(f.size!==v.value.size)v.value=f;else{for(const b of f)if(!v.value.has(b)){v.value=f;return}for(const b of v.value)if(!f.has(b)){v.value=f;return}}},children:a,parents:t,getPath:y}};return U(K,h),h.root},We=(e,i)=>{const a=$(K,ze),t=Symbol(Ce()),l=S(()=>e.value!==void 0?e.value:t),n={...a,id:l,open:(u,o)=>a.root.open(l.value,u,o),openOnSelect:(u,o)=>a.root.openOnSelect(l.value,u,o),isOpen:S(()=>a.root.opened.value.has(l.value)),parent:S(()=>a.root.parents.value.get(l.value)),activate:(u,o)=>a.root.activate(l.value,u,o),isActivated:S(()=>a.root.activated.value.has(w(l.value))),select:(u,o)=>a.root.select(l.value,u,o),isSelected:S(()=>a.root.selected.value.get(w(l.value))==="on"),isIndeterminate:S(()=>a.root.selected.value.get(w(l.value))==="indeterminate"),isLeaf:S(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return we(()=>{!a.isGroupActivator&&a.root.register(l.value,a.id.value,i)}),ie(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&U(K,n),n},Ht=()=>{const e=$(K,ze);U(K,{...e,isGroupActivator:!0})},zt=ot({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Ht(),()=>{var t;return(t=a.default)==null?void 0:t.call(a)}}}),Wt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:x,default:"$collapse"},expandIcon:{type:x,default:"$expand"},prependIcon:x,appendIcon:x,fluid:Boolean,subgroup:Boolean,title:String,value:null,...z(),...H()},"VListGroup"),he=D()({name:"VListGroup",props:Wt(),setup(e,i){let{slots:a}=i;const{isOpen:t,open:l,id:n}=We(A(e,"value"),!0),u=S(()=>`v-list-group--id-${String(n.value)}`),o=Ke(),{isBooted:v}=rt();function d(h){h.stopPropagation(),l(!t.value,h)}const y=S(()=>({onClick:d,class:"v-list-group__header",id:u.value})),m=S(()=>t.value?e.collapseIcon:e.expandIcon),p=S(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}));return F(()=>g(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[a.activator&&g(J,{defaults:p.value},{default:()=>[g(zt,null,{default:()=>[a.activator({props:y.value,isOpen:t.value})]})]}),g(ct,{transition:{component:jt},disabled:!v.value},{default:()=>{var h;return[Ae(g("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(h=a.default)==null?void 0:h.call(a)]),[[dt,t.value]])]}})]})),{isOpen:t}}}),qt=B({opacity:[Number,String],...z(),...H()},"VListItemSubtitle"),Xt=D()({name:"VListItemSubtitle",props:qt(),setup(e,i){let{slots:a}=i;return F(()=>g(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Yt=vt("v-list-item-title"),Jt=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:x,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:N(),onClickOnce:N(),...Fe(),...z(),..._e(),...De(),...je(),...xe(),...St(),...H(),...Me(),...Be({variant:"text"})},"VListItem"),pe=D()({name:"VListItem",directives:{Ripple:ft},props:Jt(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:t,emit:l}=i;const n=mt(e,a),u=S(()=>e.value===void 0?n.href.value:e.value),{activate:o,isActivated:v,select:d,isOpen:y,isSelected:m,isIndeterminate:p,isGroupActivator:h,root:s,parent:c,openOnSelect:r,id:f}=We(u,!1),b=Ke(),C=S(()=>{var k;return e.active!==!1&&(e.active||((k=n.isActive)==null?void 0:k.value)||(s.activatable.value?v.value:m.value))}),V=S(()=>e.link!==!1&&n.isLink.value),L=S(()=>!!b&&(s.selectable.value||s.activatable.value||e.value!=null)),P=S(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||L.value)),R=S(()=>e.rounded||e.nav),Q=S(()=>e.color??e.activeColor),Z=S(()=>({color:C.value?Q.value??e.baseColor:e.baseColor,variant:e.variant}));Ie(()=>{var k;return(k=n.isActive)==null?void 0:k.value},k=>{k&&W()}),we(()=>{var k;(k=n.isActive)!=null&&k.value&&W()});function W(){c.value!=null&&s.open(c.value,!0),r(!0)}const{themeClasses:ee}=Ve(e),{borderClasses:M}=Pe(e),{colorClasses:I,colorStyles:_,variantClasses:Je}=yt(Z),{densityClasses:Qe}=Le(e),{dimensionStyles:Ze}=Oe(e),{elevationClasses:et}=Ee(e),{roundedClasses:tt}=Te(R),at=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),te=S(()=>({isActive:C.value,select:d,isOpen:y.value,isSelected:m.value,isIndeterminate:p.value}));function nt(k){var q;l("click",k),P.value&&((q=n.navigate)==null||q.call(n,k),!h&&(s.activatable.value?o(!v.value,k):(s.selectable.value||e.value!=null)&&d(!m.value,k)))}function lt(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),k.target.dispatchEvent(new MouseEvent("click",k)))}return F(()=>{const k=V.value?"a":e.tag,q=t.title||e.title!=null,it=t.subtitle||e.subtitle!=null,oe=!!(e.appendAvatar||e.appendIcon),st=!!(oe||t.append),ce=!!(e.prependAvatar||e.prependIcon),ae=!!(ce||t.prepend);return b==null||b.updateHasPrepend(ae),e.activeColor&&gt("active-color",["color","base-color"]),Ae(g(k,G({class:["v-list-item",{"v-list-item--active":C.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ae&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&C.value},ee.value,M.value,I.value,Qe.value,et.value,at.value,tt.value,Je.value,e.class],style:[_.value,Ze.value,e.style],tabindex:P.value?b?-2:0:void 0,"aria-selected":L.value?s.activatable.value?v.value:s.selectable.value?m.value:C.value:void 0,onClick:nt,onKeydown:P.value&&!V.value&&lt},n.linkProps),{default:()=>{var de;return[ht(P.value||C.value,"v-list-item"),ae&&g("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?g(J,{key:"prepend-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=t.prepend)==null?void 0:E.call(t,te.value)]}}):g(ve,null,[e.prependAvatar&&g(fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&g(me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),g("div",{class:"v-list-item__spacer"},null)]),g("div",{class:"v-list-item__content","data-no-activator":""},[q&&g(Yt,{key:"title"},{default:()=>{var E;return[((E=t.title)==null?void 0:E.call(t,{title:e.title}))??e.title]}}),it&&g(Xt,{key:"subtitle"},{default:()=>{var E;return[((E=t.subtitle)==null?void 0:E.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(de=t.default)==null?void 0:de.call(t,te.value)]),st&&g("div",{key:"append",class:"v-list-item__append"},[t.append?g(J,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=t.append)==null?void 0:E.call(t,te.value)]}}):g(ve,null,[e.appendIcon&&g(me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&g(fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),g("div",{class:"v-list-item__spacer"},null)])]}}),[[bt("ripple"),P.value&&e.ripple]])}),{activate:o,isActivated:v,isGroupActivator:h,isSelected:m,list:b,select:d,root:s,id:f,link:n}}}),Qt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...z(),...H()},"VListSubheader"),Zt=D()({name:"VListSubheader",props:Qt(),setup(e,i){let{slots:a}=i;const{textColorClasses:t,textColorStyles:l}=pt(A(e,"color"));return F(()=>{const n=!!(a.default||e.title);return g(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var u;return[n&&g("div",{class:"v-list-subheader__text"},[((u=a.default)==null?void 0:u.call(a))??e.title])]}})}),{}}}),ea=B({items:Array,returnObject:Boolean},"VListChildren"),qe=D()({name:"VListChildren",props:ea(),setup(e,i){let{slots:a}=i;return Ge(),()=>{var t,l;return((t=a.default)==null?void 0:t.call(a))??((l=e.items)==null?void 0:l.map(n=>{var p,h;let{children:u,props:o,type:v,raw:d}=n;if(v==="divider")return((p=a.divider)==null?void 0:p.call(a,{props:o}))??g(kt,o,null);if(v==="subheader")return((h=a.subheader)==null?void 0:h.call(a,{props:o}))??g(Zt,o,null);const y={subtitle:a.subtitle?s=>{var c;return(c=a.subtitle)==null?void 0:c.call(a,{...s,item:d})}:void 0,prepend:a.prepend?s=>{var c;return(c=a.prepend)==null?void 0:c.call(a,{...s,item:d})}:void 0,append:a.append?s=>{var c;return(c=a.append)==null?void 0:c.call(a,{...s,item:d})}:void 0,title:a.title?s=>{var c;return(c=a.title)==null?void 0:c.call(a,{...s,item:d})}:void 0},m=he.filterProps(o);return u?g(he,G({value:o==null?void 0:o.value},m),{activator:s=>{let{props:c}=s;const r={...o,...c,value:e.returnObject?d:o.value};return a.header?a.header({props:r}):g(pe,r,y)},default:()=>g(qe,{items:u,returnObject:e.returnObject},a)}):a.item?a.item({props:o}):g(pe,G(o,{value:e.returnObject?d:o.value}),y)}))}}}),ta=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function le(e,i){const a=T(i,e.itemTitle,i),t=T(i,e.itemValue,a),l=T(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?se(i,["children"]):i:void 0:T(i,e.itemProps),u={title:a,value:t,...n};return{title:String(u.title??""),value:u.value,props:u,children:Array.isArray(l)?Xe(e,l):void 0,raw:i}}function Xe(e,i){const a=Ne(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),t=[];for(const l of i)t.push(le(a,l));return t}function ra(e){const i=S(()=>Xe(e,e.items)),a=S(()=>i.value.some(o=>o.value===null)),t=j(new Map),l=j([]);Ct(()=>{const o=i.value,v=new Map,d=[];for(let y=0;y<o.length;y++){const m=o[y];if(Re(m.value)||m.value===null){let p=v.get(m.value);p||(p=[],v.set(m.value,p)),p.push(m)}else d.push(m)}t.value=v,l.value=d});function n(o){const v=t.value,d=i.value,y=l.value,m=a.value,p=e.returnObject,h=!!e.valueComparator,s=e.valueComparator||wt,c=Ne(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),r=[];e:for(const f of o){if(!m&&f===null)continue;if(p&&typeof f=="string"){r.push(le(c,f));continue}const b=v.get(f);if(h||!b){for(const C of h?d:y)if(s(f,C.value)){r.push(C);continue e}r.push(le(c,f));continue}r.push(...b)}return r}function u(o){return e.returnObject?o.map(v=>{let{raw:d}=v;return d}):o.map(v=>{let{value:d}=v;return d})}return{items:i,transformIn:n,transformOut:u}}function aa(e,i){const a=T(i,e.itemType,"item"),t=Re(i)?i:T(i,e.itemTitle),l=T(i,e.itemValue,void 0),n=T(i,e.itemChildren),u=e.itemProps===!0?se(i,["children"]):T(i,e.itemProps),o={title:t,value:l,...u};return{type:a,title:o.title,value:o.value,props:o,children:a==="item"&&n?Ye(e,n):void 0,raw:i}}function Ye(e,i){const a=[];for(const t of i)a.push(aa(e,t));return a}function na(e){return{items:S(()=>Ye(e,e.items))}}const la=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:x,collapseIcon:x,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":N(),"onClick:select":N(),"onUpdate:opened":N(),...$t({selectStrategy:"single-leaf",openStrategy:"list"}),...Fe(),...z(),..._e(),...De(),...je(),itemType:{type:String,default:"type"},...ta(),...xe(),...H(),...Me(),...Be({variant:"text"})},"VList"),oa=D()({name:"VList",props:la(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:t}=na(e),{themeClasses:l}=Ve(e),{backgroundColorClasses:n,backgroundColorStyles:u}=At(A(e,"bgColor")),{borderClasses:o}=Pe(e),{densityClasses:v}=Le(e),{dimensionStyles:d}=Oe(e),{elevationClasses:y}=Ee(e),{roundedClasses:m}=Te(e),{children:p,open:h,parents:s,select:c,getPath:r}=Ut(e),f=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),b=A(e,"activeColor"),C=A(e,"baseColor"),V=A(e,"color");Ge(),It({VListGroup:{activeColor:b,baseColor:C,color:V,expandIcon:A(e,"expandIcon"),collapseIcon:A(e,"collapseIcon")},VListItem:{activeClass:A(e,"activeClass"),activeColor:b,baseColor:C,color:V,density:A(e,"density"),disabled:A(e,"disabled"),lines:A(e,"lines"),nav:A(e,"nav"),slim:A(e,"slim"),variant:A(e,"variant")}});const L=j(!1),P=O();function R(I){L.value=!0}function Q(I){L.value=!1}function Z(I){var _;!L.value&&!(I.relatedTarget&&((_=P.value)!=null&&_.contains(I.relatedTarget)))&&M()}function W(I){const _=I.target;if(!(!P.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(I.key==="ArrowDown")M("next");else if(I.key==="ArrowUp")M("prev");else if(I.key==="Home")M("first");else if(I.key==="End")M("last");else return;I.preventDefault()}}function ee(I){L.value=!0}function M(I){if(P.value)return Y(P.value,I)}return F(()=>g(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,o.value,v.value,y.value,f.value,m.value,e.class],style:[u.value,d.value,e.style],tabindex:e.disabled?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:R,onFocusout:Q,onFocus:Z,onKeydown:W,onMousedown:ee},{default:()=>[g(qe,{items:t.value,returnObject:e.returnObject},a)]})),{open:h,select:c,focus:M,children:p,parents:s,getPath:r}}}),ia=B({id:String,submenu:Boolean,...se(Tt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Bt}}),["absolute"])},"VMenu"),ca=D()({name:"VMenu",props:ia(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const t=X(e,"modelValue"),{scopeId:l}=Vt(),{isRtl:n}=Pt(),u=Ce(),o=S(()=>e.id||`v-menu-${u}`),v=O(),d=$(Se,null),y=j(new Set);U(Se,{register(){y.value.add(u)},unregister(){y.value.delete(u)},closeParents(r){setTimeout(()=>{var f;!y.value.size&&!e.persistent&&(r==null||(f=v.value)!=null&&f.contentEl&&!xt(r,v.value.contentEl))&&(t.value=!1,d==null||d.closeParents())},40)}}),ie(()=>{d==null||d.unregister(),document.removeEventListener("focusin",m)}),Lt(()=>t.value=!1);async function m(r){var C,V,L;const f=r.relatedTarget,b=r.target;await Ot(),t.value&&f!==b&&((C=v.value)!=null&&C.contentEl)&&((V=v.value)!=null&&V.globalTop)&&![document,v.value.contentEl].includes(b)&&!v.value.contentEl.contains(b)&&((L=ye(v.value.contentEl)[0])==null||L.focus())}Ie(t,r=>{r?(d==null||d.register(),ge&&document.addEventListener("focusin",m,{once:!0})):(d==null||d.unregister(),ge&&document.removeEventListener("focusin",m))},{immediate:!0});function p(r){d==null||d.closeParents(r)}function h(r){var f,b,C,V,L;if(!e.disabled)if(r.key==="Tab"||r.key==="Enter"&&!e.closeOnContentClick){if(r.key==="Enter"&&(r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLInputElement&&r.target.closest("form")))return;r.key==="Enter"&&r.preventDefault(),Mt(ye((f=v.value)==null?void 0:f.contentEl,!1),r.shiftKey?"prev":"next",R=>R.tabIndex>=0)||(t.value=!1,(C=(b=v.value)==null?void 0:b.activatorEl)==null||C.focus())}else e.submenu&&r.key===(n.value?"ArrowRight":"ArrowLeft")&&(t.value=!1,(L=(V=v.value)==null?void 0:V.activatorEl)==null||L.focus())}function s(r){var b;if(e.disabled)return;const f=(b=v.value)==null?void 0:b.contentEl;f&&t.value?r.key==="ArrowDown"?(r.preventDefault(),r.stopImmediatePropagation(),Y(f,"next")):r.key==="ArrowUp"?(r.preventDefault(),r.stopImmediatePropagation(),Y(f,"prev")):e.submenu&&(r.key===(n.value?"ArrowRight":"ArrowLeft")?t.value=!1:r.key===(n.value?"ArrowLeft":"ArrowRight")&&(r.preventDefault(),Y(f,"first"))):(e.submenu?r.key===(n.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(r.key))&&(t.value=!0,r.preventDefault(),setTimeout(()=>setTimeout(()=>s(r))))}const c=S(()=>G({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-controls":o.value,onKeydown:s},e.activatorProps));return F(()=>{const r=be.filterProps(e);return g(be,G({ref:v,id:o.value,class:["v-menu",e.class],style:e.style},r,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,absolute:!0,activatorProps:c.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":p,onKeydown:h},l),{activator:a.activator,default:function(){for(var f=arguments.length,b=new Array(f),C=0;C<f;C++)b[C]=arguments[C];return g(J,{root:"VMenu"},{default:()=>{var V;return[(V=a.default)==null?void 0:V.call(a,...b)]}})}})}),Et({id:o,ΨopenChildren:y},v)}});export{ca as V,oa as a,pe as b,Yt as c,ta as m,ra as u};
