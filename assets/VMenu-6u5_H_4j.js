import{aq as U,s as j,ar as $,aF as ke,bd as w,p as T,r as O,Y as X,f as h,X as ie,b2 as ut,t as A,ay as Ce,an as we,g as D,Z as rt,j as R,k as g,S as Y,be as ot,bf as ct,aC as Ae,aW as dt,n as H,x as z,ax as x,bg as vt,aA as ft,aU as mt,U as Ie,a as Ve,b as Pe,aR as yt,aE as Le,A as Oe,c as Ee,d as Me,bh as gt,aD as bt,$ as G,aP as Te,m as Be,aZ as ht,o as xe,v as je,B as De,av as _e,y as Re,a$ as N,aV as St,K as ve,aX as fe,M as me,aG as pt,bi as kt,w as Ct,bj as Fe,bk as Ne,aw as wt,bl as M,aI as se,u as At,R as It,bm as Z,bn as Vt,z as Pt,bo as Lt,au as Ot,aO as ye,aN as ge,ai as be,al as Et,bp as Mt,b6 as Tt,bq as Bt,br as he,bs as xt}from"./index-DcMvzLCU.js";import{a as jt}from"./VTextField-D-31mhyQ.js";const ne=Symbol.for("vuetify:list");function Ge(){const e=U(ne,{hasPrepend:j(!1),updateHasPrepend:()=>null}),i={hasPrepend:j(!1),updateHasPrepend:a=>{a&&(i.hasPrepend.value=a)}};return $(ne,i),e}function Ke(){return U(ne,null)}const ue=e=>{const i={activate:a=>{let{id:t,value:l,activated:n}=a;return t=w(t),e&&!l&&n.size===1&&n.has(t)||(l?n.add(t):n.delete(t)),n},in:(a,t,l)=>{let n=new Set;if(a!=null)for(const u of ke(a))n=i.activate({id:u,value:!0,activated:new Set(n),children:t,parents:l});return n},out:a=>Array.from(a)};return i},Ue=e=>{const i=ue(e);return{activate:t=>{let{activated:l,id:n,...u}=t;n=w(n);const o=l.has(n)?new Set([n]):new Set;return i.activate({...u,id:n,activated:o})},in:(t,l,n)=>{let u=new Set;if(t!=null){const o=ke(t);o.length&&(u=i.in(o.slice(0,1),l,n))}return u},out:(t,l,n)=>i.out(t,l,n)}},Dt=e=>{const i=ue(e);return{activate:t=>{let{id:l,activated:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.activate({id:l,activated:n,children:u,...o})},in:i.in,out:i.out}},_t=e=>{const i=Ue(e);return{activate:t=>{let{id:l,activated:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.activate({id:l,activated:n,children:u,...o})},in:i.in,out:i.out}},Rt={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){const n=new Set;n.add(i);let u=l.get(i);for(;u!=null;)n.add(u),u=l.get(u);return n}else return t.delete(i),t},select:()=>null},$e={open:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(a){let n=l.get(i);for(t.add(i);n!=null&&n!==i;)t.add(n),n=l.get(n);return t}else t.delete(i);return t},select:()=>null},Ft={open:$e.open,select:e=>{let{id:i,value:a,opened:t,parents:l}=e;if(!a)return t;const n=[];let u=l.get(i);for(;u!=null;)n.push(u),u=l.get(u);return new Set(n)}},re=e=>{const i={select:a=>{let{id:t,value:l,selected:n}=a;if(t=w(t),e&&!l){const u=Array.from(n.entries()).reduce((o,v)=>{let[d,y]=v;return y==="on"&&o.push(d),o},[]);if(u.length===1&&u[0]===t)return n}return n.set(t,l?"on":"off"),n},in:(a,t,l)=>{const n=new Map;for(const u of a||[])i.select({id:u,value:!0,selected:n,children:t,parents:l});return n},out:a=>{const t=[];for(const[l,n]of a.entries())n==="on"&&t.push(l);return t}};return i},He=e=>{const i=re(e);return{select:t=>{let{selected:l,id:n,...u}=t;n=w(n);const o=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...u,id:n,selected:o})},in:(t,l,n)=>t!=null&&t.length?i.in(t.slice(0,1),l,n):new Map,out:(t,l,n)=>i.out(t,l,n)}},Nt=e=>{const i=re(e);return{select:t=>{let{id:l,selected:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.select({id:l,selected:n,children:u,...o})},in:i.in,out:i.out}},Gt=e=>{const i=He(e);return{select:t=>{let{id:l,selected:n,children:u,...o}=t;return l=w(l),u.has(l)?n:i.select({id:l,selected:n,children:u,...o})},in:i.in,out:i.out}},Kt=e=>{const i={select:a=>{let{id:t,value:l,selected:n,children:u,parents:o}=a;t=w(t);const v=new Map(n),d=[t];for(;d.length;){const m=d.shift();n.set(w(m),l?"on":"off"),u.has(m)&&d.push(...u.get(m))}let y=w(o.get(t));for(;y;){const m=u.get(y),p=m.every(s=>n.get(w(s))==="on"),S=m.every(s=>!n.has(w(s))||n.get(w(s))==="off");n.set(y,p?"on":S?"off":"indeterminate"),y=w(o.get(y))}return e&&!l&&Array.from(n.entries()).reduce((p,S)=>{let[s,c]=S;return c==="on"&&p.push(s),p},[]).length===0?v:n},in:(a,t,l)=>{let n=new Map;for(const u of a||[])n=i.select({id:u,value:!0,selected:n,children:t,parents:l});return n},out:(a,t)=>{const l=[];for(const[n,u]of a.entries())u==="on"&&!t.has(n)&&l.push(n);return l}};return i},K=Symbol.for("vuetify:nested"),ze={id:j(),root:{register:()=>null,unregister:()=>null,parents:O(new Map),children:O(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:O(!1),selectable:O(!1),opened:O(new Set),activated:O(new Set),selected:O(new Map),selectedValues:O([]),getPath:()=>[]}},Ut=T({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),$t=e=>{let i=!1;const a=O(new Map),t=O(new Map),l=X(e,"opened",e.opened,s=>new Set(s),s=>[...s.values()]),n=h(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return Dt(e.mandatory);case"single-leaf":return _t(e.mandatory);case"independent":return ue(e.mandatory);case"single-independent":default:return Ue(e.mandatory)}}),u=h(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return Gt(e.mandatory);case"leaf":return Nt(e.mandatory);case"independent":return re(e.mandatory);case"single-independent":return He(e.mandatory);case"classic":default:return Kt(e.mandatory)}}),o=h(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return Ft;case"single":return Rt;case"multiple":default:return $e}}),v=X(e,"activated",e.activated,s=>n.value.in(s,a.value,t.value),s=>n.value.out(s,a.value,t.value)),d=X(e,"selected",e.selected,s=>u.value.in(s,a.value,t.value),s=>u.value.out(s,a.value,t.value));ie(()=>{i=!0});function y(s){const c=[];let r=s;for(;r!=null;)c.unshift(r),r=t.value.get(r);return c}const m=ut("nested"),p=new Set,S={id:j(),root:{opened:l,activatable:A(e,"activatable"),selectable:A(e,"selectable"),activated:v,selected:d,selectedValues:h(()=>{const s=[];for(const[c,r]of d.value.entries())r==="on"&&s.push(c);return s}),register:(s,c,r)=>{if(p.has(s)){y(s).map(String).join(" -> "),y(c).concat(s).map(String).join(" -> ");return}else p.add(s);c&&s!==c&&t.value.set(s,c),r&&a.value.set(s,[]),c!=null&&a.value.set(c,[...a.value.get(c)||[],s])},unregister:s=>{if(i)return;p.delete(s),a.value.delete(s);const c=t.value.get(s);if(c){const r=a.value.get(c)??[];a.value.set(c,r.filter(f=>f!==s))}t.value.delete(s)},open:(s,c,r)=>{m.emit("click:open",{id:s,value:c,path:y(s),event:r});const f=o.value.open({id:s,value:c,opened:new Set(l.value),children:a.value,parents:t.value,event:r});f&&(l.value=f)},openOnSelect:(s,c,r)=>{const f=o.value.select({id:s,value:c,selected:new Map(d.value),opened:new Set(l.value),children:a.value,parents:t.value,event:r});f&&(l.value=f)},select:(s,c,r)=>{m.emit("click:select",{id:s,value:c,path:y(s),event:r});const f=u.value.select({id:s,value:c,selected:new Map(d.value),children:a.value,parents:t.value,event:r});f&&(d.value=f),S.root.openOnSelect(s,c,r)},activate:(s,c,r)=>{if(!e.activatable)return S.root.select(s,!0,r);m.emit("click:activate",{id:s,value:c,path:y(s),event:r});const f=n.value.activate({id:s,value:c,activated:new Set(v.value),children:a.value,parents:t.value,event:r});if(f.size!==v.value.size)v.value=f;else{for(const b of f)if(!v.value.has(b)){v.value=f;return}for(const b of v.value)if(!f.has(b)){v.value=f;return}}},children:a,parents:t,getPath:y}};return $(K,S),S.root},qe=(e,i)=>{const a=U(K,ze),t=Symbol(Ce()),l=h(()=>e.value!==void 0?e.value:t),n={...a,id:l,open:(u,o)=>a.root.open(l.value,u,o),openOnSelect:(u,o)=>a.root.openOnSelect(l.value,u,o),isOpen:h(()=>a.root.opened.value.has(l.value)),parent:h(()=>a.root.parents.value.get(l.value)),activate:(u,o)=>a.root.activate(l.value,u,o),isActivated:h(()=>a.root.activated.value.has(w(l.value))),select:(u,o)=>a.root.select(l.value,u,o),isSelected:h(()=>a.root.selected.value.get(w(l.value))==="on"),isIndeterminate:h(()=>a.root.selected.value.get(w(l.value))==="indeterminate"),isLeaf:h(()=>!a.root.children.value.get(l.value)),isGroupActivator:a.isGroupActivator};return we(()=>{!a.isGroupActivator&&a.root.register(l.value,a.id.value,i)}),ie(()=>{!a.isGroupActivator&&a.root.unregister(l.value)}),i&&$(K,n),n},Ht=()=>{const e=U(K,ze);$(K,{...e,isGroupActivator:!0})},zt=ot({name:"VListGroupActivator",setup(e,i){let{slots:a}=i;return Ht(),()=>{var t;return(t=a.default)==null?void 0:t.call(a)}}}),qt=T({activeColor:String,baseColor:String,color:String,collapseIcon:{type:x,default:"$collapse"},expandIcon:{type:x,default:"$expand"},prependIcon:x,appendIcon:x,fluid:Boolean,subgroup:Boolean,title:String,value:null,...z(),...H()},"VListGroup"),Se=D()({name:"VListGroup",props:qt(),setup(e,i){let{slots:a}=i;const{isOpen:t,open:l,id:n}=qe(A(e,"value"),!0),u=h(()=>`v-list-group--id-${String(n.value)}`),o=Ke(),{isBooted:v}=rt();function d(S){S.stopPropagation(),l(!t.value,S)}const y=h(()=>({onClick:d,class:"v-list-group__header",id:u.value})),m=h(()=>t.value?e.collapseIcon:e.expandIcon),p=h(()=>({VListItem:{active:t.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&m.value,appendIcon:e.appendIcon||!e.subgroup&&m.value,title:e.title,value:e.value}}));return R(()=>g(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":t.value},e.class],style:e.style},{default:()=>[a.activator&&g(Y,{defaults:p.value},{default:()=>[g(zt,null,{default:()=>[a.activator({props:y.value,isOpen:t.value})]})]}),g(ct,{transition:{component:jt},disabled:!v.value},{default:()=>{var S;return[Ae(g("div",{class:"v-list-group__items",role:"group","aria-labelledby":u.value},[(S=a.default)==null?void 0:S.call(a)]),[[dt,t.value]])]}})]})),{isOpen:t}}}),Wt=T({opacity:[Number,String],...z(),...H()},"VListItemSubtitle"),Xt=D()({name:"VListItemSubtitle",props:Wt(),setup(e,i){let{slots:a}=i;return R(()=>g(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},a)),{}}}),Zt=vt("v-list-item-title"),Yt=T({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:x,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:N(),onClickOnce:N(),...Re(),...z(),..._e(),...De(),...je(),...xe(),...ht(),...H(),...Be(),...Te({variant:"text"})},"VListItem"),pe=D()({name:"VListItem",directives:{Ripple:ft},props:Yt(),emits:{click:e=>!0},setup(e,i){let{attrs:a,slots:t,emit:l}=i;const n=mt(e,a),u=h(()=>e.value===void 0?n.href.value:e.value),{activate:o,isActivated:v,select:d,isOpen:y,isSelected:m,isIndeterminate:p,isGroupActivator:S,root:s,parent:c,openOnSelect:r,id:f}=qe(u,!1),b=Ke(),C=h(()=>{var k;return e.active!==!1&&(e.active||((k=n.isActive)==null?void 0:k.value)||(s.activatable.value?v.value:m.value))}),V=h(()=>e.link!==!1&&n.isLink.value),L=h(()=>!!b&&(s.selectable.value||s.activatable.value||e.value!=null)),P=h(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||L.value)),F=h(()=>e.rounded||e.nav),J=h(()=>e.color??e.activeColor),Q=h(()=>({color:C.value?J.value??e.baseColor:e.baseColor,variant:e.variant}));Ie(()=>{var k;return(k=n.isActive)==null?void 0:k.value},k=>{k&&q()}),we(()=>{var k;(k=n.isActive)!=null&&k.value&&q()});function q(){c.value!=null&&s.open(c.value,!0),r(!0)}const{themeClasses:ee}=Ve(e),{borderClasses:B}=Pe(e),{colorClasses:I,colorStyles:_,variantClasses:Ye}=yt(Q),{densityClasses:Je}=Le(e),{dimensionStyles:Qe}=Oe(e),{elevationClasses:et}=Ee(e),{roundedClasses:tt}=Me(F),at=h(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),te=h(()=>({isActive:C.value,select:d,isOpen:y.value,isSelected:m.value,isIndeterminate:p.value}));function nt(k){var W;l("click",k),P.value&&((W=n.navigate)==null||W.call(n,k),!S&&(s.activatable.value?o(!v.value,k):(s.selectable.value||e.value!=null)&&d(!m.value,k)))}function lt(k){(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),k.target.dispatchEvent(new MouseEvent("click",k)))}return R(()=>{const k=V.value?"a":e.tag,W=t.title||e.title!=null,it=t.subtitle||e.subtitle!=null,oe=!!(e.appendAvatar||e.appendIcon),st=!!(oe||t.append),ce=!!(e.prependAvatar||e.prependIcon),ae=!!(ce||t.prepend);return b==null||b.updateHasPrepend(ae),e.activeColor&&gt("active-color",["color","base-color"]),Ae(g(k,G({class:["v-list-item",{"v-list-item--active":C.value,"v-list-item--disabled":e.disabled,"v-list-item--link":P.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!ae&&(b==null?void 0:b.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&C.value},ee.value,B.value,I.value,Je.value,et.value,at.value,tt.value,Ye.value,e.class],style:[_.value,Qe.value,e.style],tabindex:P.value?b?-2:0:void 0,"aria-selected":L.value?s.activatable.value?v.value:s.selectable.value?m.value:C.value:void 0,onClick:nt,onKeydown:P.value&&!V.value&&lt},n.linkProps),{default:()=>{var de;return[St(P.value||C.value,"v-list-item"),ae&&g("div",{key:"prepend",class:"v-list-item__prepend"},[t.prepend?g(Y,{key:"prepend-defaults",disabled:!ce,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var E;return[(E=t.prepend)==null?void 0:E.call(t,te.value)]}}):g(ve,null,[e.prependAvatar&&g(fe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&g(me,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),g("div",{class:"v-list-item__spacer"},null)]),g("div",{class:"v-list-item__content","data-no-activator":""},[W&&g(Zt,{key:"title"},{default:()=>{var E;return[((E=t.title)==null?void 0:E.call(t,{title:e.title}))??e.title]}}),it&&g(Xt,{key:"subtitle"},{default:()=>{var E;return[((E=t.subtitle)==null?void 0:E.call(t,{subtitle:e.subtitle}))??e.subtitle]}}),(de=t.default)==null?void 0:de.call(t,te.value)]),st&&g("div",{key:"append",class:"v-list-item__append"},[t.append?g(Y,{key:"append-defaults",disabled:!oe,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var E;return[(E=t.append)==null?void 0:E.call(t,te.value)]}}):g(ve,null,[e.appendIcon&&g(me,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&g(fe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),g("div",{class:"v-list-item__spacer"},null)])]}}),[[bt("ripple"),P.value&&e.ripple]])}),{activate:o,isActivated:v,isGroupActivator:S,isSelected:m,list:b,select:d,root:s,id:f,link:n}}}),Jt=T({color:String,inset:Boolean,sticky:Boolean,title:String,...z(),...H()},"VListSubheader"),Qt=D()({name:"VListSubheader",props:Jt(),setup(e,i){let{slots:a}=i;const{textColorClasses:t,textColorStyles:l}=pt(A(e,"color"));return R(()=>{const n=!!(a.default||e.title);return g(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},t.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var u;return[n&&g("div",{class:"v-list-subheader__text"},[((u=a.default)==null?void 0:u.call(a))??e.title])]}})}),{}}}),ea=T({items:Array,returnObject:Boolean},"VListChildren"),We=D()({name:"VListChildren",props:ea(),setup(e,i){let{slots:a}=i;return Ge(),()=>{var t,l;return((t=a.default)==null?void 0:t.call(a))??((l=e.items)==null?void 0:l.map(n=>{var p,S;let{children:u,props:o,type:v,raw:d}=n;if(v==="divider")return((p=a.divider)==null?void 0:p.call(a,{props:o}))??g(kt,o,null);if(v==="subheader")return((S=a.subheader)==null?void 0:S.call(a,{props:o}))??g(Qt,o,null);const y={subtitle:a.subtitle?s=>{var c;return(c=a.subtitle)==null?void 0:c.call(a,{...s,item:d})}:void 0,prepend:a.prepend?s=>{var c;return(c=a.prepend)==null?void 0:c.call(a,{...s,item:d})}:void 0,append:a.append?s=>{var c;return(c=a.append)==null?void 0:c.call(a,{...s,item:d})}:void 0,title:a.title?s=>{var c;return(c=a.title)==null?void 0:c.call(a,{...s,item:d})}:void 0},m=Se.filterProps(o);return u?g(Se,G({value:o==null?void 0:o.value},m),{activator:s=>{let{props:c}=s;const r={...o,...c,value:e.returnObject?d:o.value};return a.header?a.header({props:r}):g(pe,r,y)},default:()=>g(We,{items:u,returnObject:e.returnObject},a)}):a.item?a.item({props:o}):g(pe,G(o,{value:e.returnObject?d:o.value}),y)}))}}}),ta=T({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:Function},"list-items");function le(e,i){const a=M(i,e.itemTitle,i),t=M(i,e.itemValue,a),l=M(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?se(i,["children"]):i:void 0:M(i,e.itemProps),u={title:a,value:t,...n};return{title:String(u.title??""),value:u.value,props:u,children:Array.isArray(l)?Xe(e,l):void 0,raw:i}}function Xe(e,i){const a=Ne(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),t=[];for(const l of i)t.push(le(a,l));return t}function ra(e){const i=h(()=>Xe(e,e.items)),a=h(()=>i.value.some(o=>o.value===null)),t=j(new Map),l=j([]);Ct(()=>{const o=i.value,v=new Map,d=[];for(let y=0;y<o.length;y++){const m=o[y];if(Fe(m.value)||m.value===null){let p=v.get(m.value);p||(p=[],v.set(m.value,p)),p.push(m)}else d.push(m)}t.value=v,l.value=d});function n(o){const v=t.value,d=i.value,y=l.value,m=a.value,p=e.returnObject,S=!!e.valueComparator,s=e.valueComparator||wt,c=Ne(e,["itemTitle","itemValue","itemChildren","itemProps","returnObject","valueComparator"]),r=[];e:for(const f of o){if(!m&&f===null)continue;if(p&&typeof f=="string"){r.push(le(c,f));continue}const b=v.get(f);if(S||!b){for(const C of S?d:y)if(s(f,C.value)){r.push(C);continue e}r.push(le(c,f));continue}r.push(...b)}return r}function u(o){return e.returnObject?o.map(v=>{let{raw:d}=v;return d}):o.map(v=>{let{value:d}=v;return d})}return{items:i,transformIn:n,transformOut:u}}function aa(e,i){const a=M(i,e.itemType,"item"),t=Fe(i)?i:M(i,e.itemTitle),l=M(i,e.itemValue,void 0),n=M(i,e.itemChildren),u=e.itemProps===!0?se(i,["children"]):M(i,e.itemProps),o={title:t,value:l,...u};return{type:a,title:o.title,value:o.value,props:o,children:a==="item"&&n?Ze(e,n):void 0,raw:i}}function Ze(e,i){const a=[];for(const t of i)a.push(aa(e,t));return a}function na(e){return{items:h(()=>Ze(e,e.items))}}const la=T({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:x,collapseIcon:x,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":N(),"onClick:select":N(),"onUpdate:opened":N(),...Ut({selectStrategy:"single-leaf",openStrategy:"list"}),...Re(),...z(),..._e(),...De(),...je(),itemType:{type:String,default:"type"},...ta(),...xe(),...H(),...Be(),...Te({variant:"text"})},"VList"),oa=D()({name:"VList",props:la(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:a}=i;const{items:t}=na(e),{themeClasses:l}=Ve(e),{backgroundColorClasses:n,backgroundColorStyles:u}=At(A(e,"bgColor")),{borderClasses:o}=Pe(e),{densityClasses:v}=Le(e),{dimensionStyles:d}=Oe(e),{elevationClasses:y}=Ee(e),{roundedClasses:m}=Me(e),{children:p,open:S,parents:s,select:c,getPath:r}=$t(e),f=h(()=>e.lines?`v-list--${e.lines}-line`:void 0),b=A(e,"activeColor"),C=A(e,"baseColor"),V=A(e,"color");Ge(),It({VListGroup:{activeColor:b,baseColor:C,color:V,expandIcon:A(e,"expandIcon"),collapseIcon:A(e,"collapseIcon")},VListItem:{activeClass:A(e,"activeClass"),activeColor:b,baseColor:C,color:V,density:A(e,"density"),disabled:A(e,"disabled"),lines:A(e,"lines"),nav:A(e,"nav"),slim:A(e,"slim"),variant:A(e,"variant")}});const L=j(!1),P=O();function F(I){L.value=!0}function J(I){L.value=!1}function Q(I){var _;!L.value&&!(I.relatedTarget&&((_=P.value)!=null&&_.contains(I.relatedTarget)))&&B()}function q(I){const _=I.target;if(!(!P.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(I.key==="ArrowDown")B("next");else if(I.key==="ArrowUp")B("prev");else if(I.key==="Home")B("first");else if(I.key==="End")B("last");else return;I.preventDefault()}}function ee(I){L.value=!0}function B(I){if(P.value)return Z(P.value,I)}return R(()=>g(e.tag,{ref:P,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,o.value,v.value,y.value,f.value,m.value,e.class],style:[u.value,d.value,e.style],tabindex:e.disabled?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:F,onFocusout:J,onFocus:Q,onKeydown:q,onMousedown:ee},{default:()=>[g(We,{items:t.value,returnObject:e.returnObject},a)]})),{open:S,select:c,focus:B,children:p,parents:s,getPath:r}}}),ia=T({id:String,submenu:Boolean,...se(Mt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Tt}}),["absolute"])},"VMenu"),ca=D()({name:"VMenu",props:ia(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:a}=i;const t=X(e,"modelValue"),{scopeId:l}=Vt(),{isRtl:n}=Pt(),u=Ce(),o=h(()=>e.id||`v-menu-${u}`),v=O(),d=U(he,null),y=j(new Set);$(he,{register(){y.value.add(u)},unregister(){y.value.delete(u)},closeParents(r){setTimeout(()=>{var f;!y.value.size&&!e.persistent&&(r==null||(f=v.value)!=null&&f.contentEl&&!xt(r,v.value.contentEl))&&(t.value=!1,d==null||d.closeParents())},40)}}),ie(()=>{d==null||d.unregister(),document.removeEventListener("focusin",m)}),Lt(()=>t.value=!1);async function m(r){var C,V,L;const f=r.relatedTarget,b=r.target;await Ot(),t.value&&f!==b&&((C=v.value)!=null&&C.contentEl)&&((V=v.value)!=null&&V.globalTop)&&![document,v.value.contentEl].includes(b)&&!v.value.contentEl.contains(b)&&((L=ye(v.value.contentEl)[0])==null||L.focus())}Ie(t,r=>{r?(d==null||d.register(),ge&&document.addEventListener("focusin",m,{once:!0})):(d==null||d.unregister(),ge&&document.removeEventListener("focusin",m))},{immediate:!0});function p(r){d==null||d.closeParents(r)}function S(r){var f,b,C,V,L;if(!e.disabled)if(r.key==="Tab"||r.key==="Enter"&&!e.closeOnContentClick){if(r.key==="Enter"&&(r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLInputElement&&r.target.closest("form")))return;r.key==="Enter"&&r.preventDefault(),Bt(ye((f=v.value)==null?void 0:f.contentEl,!1),r.shiftKey?"prev":"next",F=>F.tabIndex>=0)||(t.value=!1,(C=(b=v.value)==null?void 0:b.activatorEl)==null||C.focus())}else e.submenu&&r.key===(n.value?"ArrowRight":"ArrowLeft")&&(t.value=!1,(L=(V=v.value)==null?void 0:V.activatorEl)==null||L.focus())}function s(r){var b;if(e.disabled)return;const f=(b=v.value)==null?void 0:b.contentEl;f&&t.value?r.key==="ArrowDown"?(r.preventDefault(),r.stopImmediatePropagation(),Z(f,"next")):r.key==="ArrowUp"?(r.preventDefault(),r.stopImmediatePropagation(),Z(f,"prev")):e.submenu&&(r.key===(n.value?"ArrowRight":"ArrowLeft")?t.value=!1:r.key===(n.value?"ArrowLeft":"ArrowRight")&&(r.preventDefault(),Z(f,"first"))):(e.submenu?r.key===(n.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(r.key))&&(t.value=!0,r.preventDefault(),setTimeout(()=>setTimeout(()=>s(r))))}const c=h(()=>G({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-controls":o.value,onKeydown:s},e.activatorProps));return R(()=>{const r=be.filterProps(e);return g(be,G({ref:v,id:o.value,class:["v-menu",e.class],style:e.style},r,{modelValue:t.value,"onUpdate:modelValue":f=>t.value=f,absolute:!0,activatorProps:c.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":p,onKeydown:S},l),{activator:a.activator,default:function(){for(var f=arguments.length,b=new Array(f),C=0;C<f;C++)b[C]=arguments[C];return g(Y,{root:"VMenu"},{default:()=>{var V;return[(V=a.default)==null?void 0:V.call(a,...b)]}})}})}),Et({id:o,ΨopenChildren:y},v)}});export{ca as V,oa as a,pe as b,Zt as c,ta as m,ra as u};
