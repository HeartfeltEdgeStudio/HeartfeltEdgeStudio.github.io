import{aP as R,g as x,p as B,a as U,k as q,ae as L,r as P,c as y,s as b,H as I,f as l,e as T,a5 as W,a6 as K,m as J,j as M,Y as Q,K as Z,I as p,F as ee,L as C,h as S,a1 as te,X as ne,af as oe,$ as se}from"./index-CyegNRVd.js";import{m as ie,h as ae,M as le,V as H,s as ue}from"./VImg-DC1yj6Tv.js";import{c as re,V as _,t as ce,d as de,g as ve}from"./VBtn-DG1dSf11.js";import{u as fe,a as me,m as he}from"./lazy-COST-iJj.js";const ge=e=>{const{touchstartX:o,touchendX:t,touchstartY:n,touchendY:i}=e,a=.5,s=16;e.offsetX=t-o,e.offsetY=i-n,Math.abs(e.offsetY)<a*Math.abs(e.offsetX)&&(e.left&&t<o-s&&e.left(e),e.right&&t>o+s&&e.right(e)),Math.abs(e.offsetX)<a*Math.abs(e.offsetY)&&(e.up&&i<n-s&&e.up(e),e.down&&i>n+s&&e.down(e))};function ye(e,o){var n;const t=e.changedTouches[0];o.touchstartX=t.clientX,o.touchstartY=t.clientY,(n=o.start)==null||n.call(o,{originalEvent:e,...o})}function Ve(e,o){var n;const t=e.changedTouches[0];o.touchendX=t.clientX,o.touchendY=t.clientY,(n=o.end)==null||n.call(o,{originalEvent:e,...o}),ge(o)}function we(e,o){var n;const t=e.changedTouches[0];o.touchmoveX=t.clientX,o.touchmoveY=t.clientY,(n=o.move)==null||n.call(o,{originalEvent:e,...o})}function Ie(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const o={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>ye(t,o),touchend:t=>Ve(t,o),touchmove:t=>we(t,o)}}function Ce(e,o){var d;const t=o.value,n=t!=null&&t.parent?e.parentElement:e,i=(t==null?void 0:t.options)??{passive:!0},a=(d=o.instance)==null?void 0:d.$.uid;if(!n||!a)return;const s=Ie(o.value);n._touchHandlers=n._touchHandlers??Object.create(null),n._touchHandlers[a]=s,R(s).forEach(u=>{n.addEventListener(u,s[u],i)})}function xe(e,o){var a,s;const t=(a=o.value)!=null&&a.parent?e.parentElement:e,n=(s=o.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!n)return;const i=t._touchHandlers[n];R(i).forEach(d=>{t.removeEventListener(d,i[d])}),delete t._touchHandlers[n]}const A={mounted:Ce,unmounted:xe},F=Symbol.for("vuetify:v-window"),j=Symbol.for("vuetify:v-window-group"),G=B({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...M(),...ie(),...J()},"VWindow"),$=x()({name:"VWindow",directives:{Touch:A},props:G(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const{themeClasses:n}=U(e),{isRtl:i}=q(),{t:a}=L(),s=re(e,j),d=P(),u=y(()=>i.value?!e.reverse:e.reverse),v=b(!1),V=y(()=>{const c=e.direction==="vertical"?"y":"x",g=(u.value?!v.value:v.value)?"-reverse":"";return`v-window-${c}${g}-transition`}),m=b(0),h=P(void 0),w=y(()=>s.items.value.findIndex(c=>s.selected.value.includes(c.id)));I(w,(c,f)=>{const g=s.items.value.length,Y=g-1;g<=2?v.value=c<f:c===Y&&f===0?v.value=!0:c===0&&f===Y?v.value=!1:v.value=c<f}),Q(F,{transition:V,isReversed:v,transitionCount:m,transitionHeight:h,rootRef:d});const r=y(()=>e.continuous||w.value!==0),k=y(()=>e.continuous||w.value!==s.items.value.length-1);function E(){r.value&&s.prev()}function X(){k.value&&s.next()}const z=y(()=>{const c=[],f={icon:i.value?e.nextIcon:e.prevIcon,class:`v-window__${u.value?"right":"left"}`,onClick:s.prev,"aria-label":a("$vuetify.carousel.prev")};c.push(r.value?t.prev?t.prev({props:f}):l(_,f,null):l("div",null,null));const g={icon:i.value?e.prevIcon:e.nextIcon,class:`v-window__${u.value?"left":"right"}`,onClick:s.next,"aria-label":a("$vuetify.carousel.next")};return c.push(k.value?t.next?t.next({props:g}):l(_,g,null):l("div",null,null)),c}),N=y(()=>e.touch===!1?e.touch:{...{left:()=>{u.value?E():X()},right:()=>{u.value?X():E()},start:f=>{let{originalEvent:g}=f;g.stopPropagation()}},...e.touch===!0?{}:e.touch});return T(()=>W(l(e.tag,{ref:d,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},n.value,e.class],style:e.style},{default:()=>{var c,f;return[l("div",{class:"v-window__container",style:{height:h.value}},[(c=t.default)==null?void 0:c.call(t,{group:s}),e.showArrows!==!1&&l("div",{class:"v-window__controls"},[z.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[K("touch"),N.value]])),{group:s}}}),Be=B({color:String,cycle:Boolean,delimiterIcon:{type:te,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...G({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),ke=x()({name:"VCarousel",props:Be(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;const n=Z(e,"modelValue"),{t:i}=L(),a=P();let s=-1;I(n,u),I(()=>e.interval,u),I(()=>e.cycle,v=>{v?u():window.clearTimeout(s)}),p(d);function d(){!e.cycle||!a.value||(s=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(s),window.requestAnimationFrame(d)}return T(()=>{const v=$.filterProps(e);return l($,C({ref:a},v,{modelValue:n.value,"onUpdate:modelValue":V=>n.value=V,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:S(e.height)},e.style]}),{default:t.default,additional:V=>{let{group:m}=V;return l(ee,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[m.items.value.length>0&&l(ae,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[m.items.value.map((h,w)=>{const r={id:`carousel-item-${h.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",w+1,m.items.value.length),class:["v-carousel__controls__item",m.isSelected(h.id)&&"v-btn--active"],onClick:()=>m.select(h.id,!0)};return t.item?t.item({props:r,item:h}):l(_,C(h,r),null)})]})]),e.progress&&l(ce,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(m.getItemIndex(n.value)+1)/m.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),O=B({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...M(),...ve(),...he()},"VWindowItem"),D=x()({name:"VWindowItem",directives:{Touch:A},props:O(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=ne(F),i=de(e,j),{isBooted:a}=fe();if(!n||!i)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=b(!1),d=y(()=>a.value&&(n.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function u(){!s.value||!n||(s.value=!1,n.transitionCount.value>0&&(n.transitionCount.value-=1,n.transitionCount.value===0&&(n.transitionHeight.value=void 0)))}function v(){var r;s.value||!n||(s.value=!0,n.transitionCount.value===0&&(n.transitionHeight.value=S((r=n.rootRef.value)==null?void 0:r.clientHeight)),n.transitionCount.value+=1)}function V(){u()}function m(r){s.value&&se(()=>{!d.value||!s.value||!n||(n.transitionHeight.value=S(r.clientHeight))})}const h=y(()=>{const r=n.isReversed.value?e.reverseTransition:e.transition;return d.value?{name:typeof r!="string"?n.transition.value:r,onBeforeEnter:v,onAfterEnter:u,onEnterCancelled:V,onBeforeLeave:v,onAfterLeave:u,onLeaveCancelled:V,onEnter:m}:!1}),{hasContent:w}=me(e,i.isSelected);return T(()=>l(le,{transition:h.value,disabled:!a.value},{default:()=>{var r;return[W(l("div",{class:["v-window-item",i.selectedClass.value,e.class],style:e.style},[w.value&&((r=t.default)==null?void 0:r.call(t))]),[[oe,i.isSelected.value]])]}})),{groupItem:i}}}),Te=B({...ue(),...O()},"VCarouselItem"),Ee=x()({name:"VCarouselItem",inheritAttrs:!1,props:Te(),setup(e,o){let{slots:t,attrs:n}=o;T(()=>{const i=H.filterProps(e),a=D.filterProps(e);return l(D,C({class:["v-carousel-item",e.class]},a),{default:()=>[l(H,C(n,i),t)]})})}});export{Ee as V,ke as a};
