import{_ as te}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as S,p as _,r as D,a as ae,t as P,s as C,u as Fe,c,b as le,d as ne,w as se,e as x,f as n,h as I,m as oe,i as re,j as B,k as ie,l as ue,n as F,o as G,q as O,v as d,x as V,y as j,z as ce,F as W,A as de,B as me,C as Re,D as T,E as $e,G as Me,H,I as Ue,J as Oe,K as ze,L as R,M as De,N as Ge}from"./index-DHGh4Zxa.js";import{V as We,a as Ye}from"./VOverlay-CWFOVpV3.js";import{u as fe,a as ve,b as ge,m as N,c as he,d as ye,e as be,f as pe,V as Y,g as Z,h as $}from"./VImg-D_VBOhJ7.js";import{u as Ve,m as Se,V as z,a as Ke}from"./VBtn-S9hRxNDz.js";import{V as qe}from"./VForm-DeHSjIN4.js";import{u as _e}from"./lazy-ECUEWiwd.js";import{V as Je,a as Ze,b as Qe,c as Xe}from"./VMenu-YStNXc0P.js";import"./getScrollParent-BE2DUT4K.js";import"./createSimpleFunctional-CHDlCCC1.js";import"./VAvatar-C24OmV_M.js";import"./VDivider-BXROOgps.js";const ke="/HeartfeltEdgeStudio.github.io/assets/HeartfeltEdgeStudioWhite-Dr-bRZ6D.png",et=_({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ye(),...B(),...Se(),...re(),...he(),...N({tag:"footer"}),...oe()},"VFooter"),tt=S()({name:"VFooter",props:et(),setup(e,a){let{slots:t}=a;const o=D(),{themeClasses:l}=ae(e),{backgroundColorClasses:s,backgroundColorStyles:r}=fe(P(e,"color")),{borderClasses:i}=ve(e),{elevationClasses:f}=Ve(e),{roundedClasses:y}=ge(e),v=C(32),{resizeRef:h}=Fe(g=>{g.length&&(v.value=g[0].target.clientHeight)}),b=c(()=>e.height==="auto"?v.value:parseInt(e.height,10));return le(()=>e.app,()=>{const g=ne({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:P(e,"absolute")});se(()=>{o.value=g.layoutItemStyles.value})}),x(()=>n(e.tag,{ref:h,class:["v-footer",l.value,s.value,i.value,f.value,y.value,e.class],style:[r.value,e.app?o.value:{height:I(e.height)},e.style]},t)),{}}}),at=_({fluid:{type:Boolean,default:!1},...B(),...pe(),...N()},"VContainer"),M=S()({name:"VContainer",props:at(),setup(e,a){let{slots:t}=a;const{rtlClasses:o}=ie(),{dimensionStyles:l}=be(e);return x(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:[l.value,e.style]},t)),{}}}),Ce=F.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),xe=F.reduce((e,a)=>{const t="offset"+G(a);return e[t]={type:[String,Number],default:null},e},{}),we=F.reduce((e,a)=>{const t="order"+G(a);return e[t]={type:[String,Number],default:null},e},{}),Q={col:Object.keys(Ce),offset:Object.keys(xe),order:Object.keys(we)};function lt(e,a,t){let o=e;if(!(t==null||t===!1)){if(a){const l=a.replace(e,"");o+=`-${l}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const nt=["auto","start","end","center","baseline","stretch"],st=_({cols:{type:[Boolean,String,Number],default:!1},...Ce,offset:{type:[String,Number],default:null},...xe,order:{type:[String,Number],default:null},...we,alignSelf:{type:String,default:null,validator:e=>nt.includes(e)},...B(),...N()},"VCol"),L=S()({name:"VCol",props:st(),setup(e,a){let{slots:t}=a;const o=c(()=>{const l=[];let s;for(s in Q)Q[s].forEach(i=>{const f=e[i],y=lt(s,i,f);y&&l.push(y)});const r=l.some(i=>i.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return ue(e.tag,{class:[o.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),K=["start","end","center"],Te=["space-between","space-around","space-evenly"];function q(e,a){return F.reduce((t,o)=>{const l=e+G(o);return t[l]=a(),t},{})}const ot=[...K,"baseline","stretch"],Be=e=>ot.includes(e),Ne=q("align",()=>({type:String,default:null,validator:Be})),rt=[...K,...Te],Ee=e=>rt.includes(e),Ie=q("justify",()=>({type:String,default:null,validator:Ee})),it=[...K,...Te,"stretch"],Pe=e=>it.includes(e),Ae=q("alignContent",()=>({type:String,default:null,validator:Pe})),X={align:Object.keys(Ne),justify:Object.keys(Ie),alignContent:Object.keys(Ae)},ut={align:"align",justify:"justify",alignContent:"align-content"};function ct(e,a,t){let o=ut[e];if(t!=null){if(a){const l=a.replace(e,"");o+=`-${l}`}return o+=`-${t}`,o.toLowerCase()}}const dt=_({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Be},...Ne,justify:{type:String,default:null,validator:Ee},...Ie,alignContent:{type:String,default:null,validator:Pe},...Ae,...B(),...N()},"VRow"),U=S()({name:"VRow",props:dt(),setup(e,a){let{slots:t}=a;const o=c(()=>{const l=[];let s;for(s in X)X[s].forEach(r=>{const i=e[r],f=ct(s,r,i);f&&l.push(f)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return ue(e.tag,{class:["v-row",o.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),mt={setup(){return{goTo:Re()}},data(){return{duration:600,number:0,offset:0,target:"By Number",easing:"easeInOutCubic",icons:[{name:"mdi-facebook",link:"https://www.facebook.com/heartfeltedgestudio"},{name:"mdi-twitter",link:"https://x.com/HeartfeltEdge?t=WLcw-rhlCxO61F19nIWHaA&s=09"},{name:"mdi-linkedin",link:"https://www.linkedin.com/company/heartfelt-edge-studio"},{name:"mdi-instagram",link:"https://www.instagram.com/heartfeltedgestudio"},{name:"mdi-music-note-eighth",link:"https://www.tiktok.com/@heartfeltedgestudio?_t=ZN-8uEmYOqQNiY&_r=1"}],valid:!0,email:"",emailRules:[e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]}},computed:{options(){return{duration:this.duration,easing:this.easing,offset:this.offset}}},methods:{onClick(){this.goTo(this.number,this.options)}}},ft={class:"px-4 pt-4 d-sm-flex align-center"},vt={class:"mb-2 d-flex flex-wrap justify-center"},gt=["href"];function ht(e,a,t,o,l,s){return T(),O(tt,{class:"bg-secondary-1 text-center d-flex flex-column"},{default:d(()=>[n(qe,{ref:"form",modelValue:l.valid,"onUpdate:modelValue":a[1]||(a[1]=r=>l.valid=r),"lazy-validation":"",class:"w-md-50 w-75"},{default:d(()=>[V("div",ft,[n(We,{label:"E-mail",placeholder:"youremail@email.com",outlined:"",modelValue:l.email,"onUpdate:modelValue":a[0]||(a[0]=r=>l.email=r),rules:l.emailRules},null,8,["modelValue","rules"]),n(L,{cols:"12",sm:"auto",class:"pa-0 pl-sm-5 pb-6 mt-sm-0 mt-1"},{default:d(()=>[n(z,{color:"primary",onClick:e.validate,class:"w-100 h-100 py-4"},{default:d(()=>a[3]||(a[3]=[V("p",{class:"text-wrap text-left",style:{margin:"auto"}}," Claim Exclusive Access",-1)])),_:1},8,["onClick"])]),_:1})])]),_:1},8,["modelValue"]),a[6]||(a[6]=V("p",{class:"pt-2"}," Made In Italy ",-1)),n(M,{class:"d-flex justify-center mx-auto w-50 w-md-25"},{default:d(()=>[n(U,{class:"justify-center"},{default:d(()=>[n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#008C45"}}),n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#F4F9FF"}}),n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#CD212A"}})]),_:1})]),_:1}),V("div",vt,[(T(!0),j(W,null,ce(l.icons,(r,i)=>(T(),j("a",{key:i,href:r.link,target:"_blank",rel:"noopener noreferrer",class:"mx-1",style:{color:"inherit"}},[n(z,{icon:r.name,variant:"text",size:"x-large"},null,8,["icon"])],8,gt))),128))]),a[7]||(a[7]=V("p",{class:"text-primary font-italic my-5"}," “HEARTFELT GAMES WITH A CUTTING EDGE” ",-1)),n(Y,{width:"200",class:"my-5",src:ke}),V("a",{href:"#",onClick:a[2]||(a[2]=(...r)=>s.onClick&&s.onClick(...r)),class:"text-decoration-none mb-5",style:{color:"inherit"}},[n(M,{class:"pb-3"},{default:d(()=>[n(U,{class:"justify-center"},{default:d(()=>[n(Z,{icon:"mdi-arrow-up-circle-outline",size:"x-large"})]),_:1})]),_:1}),a[4]||(a[4]=V("p",null,"Back To Top",-1))]),n(M,null,{default:d(()=>[n(U,{class:"justify-center align-center text-primary"},{default:d(()=>[n(Z,{icon:"mdi-copyright",size:"small"}),de(" "+me(new Date().getFullYear())+" — ",1),a[5]||(a[5]=V("strong",null,"Heartfelt Edge Studio",-1))]),_:1})]),_:1})]),_:1})}const yt=te(mt,[["render",ht]]),He=_({text:String,...B(),...N()},"VToolbarTitle"),Le=S()({name:"VToolbarTitle",props:He(),setup(e,a){let{slots:t}=a;return x(()=>{const o=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),bt=[null,"prominent","default","comfortable","compact"],je=_({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>bt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...ye(),...B(),...Se(),...he(),...N({tag:"header"}),...oe()},"VToolbar"),ee=S()({name:"VToolbar",props:je(),setup(e,a){var g;let{slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:l}=fe(P(e,"color")),{borderClasses:s}=ve(e),{elevationClasses:r}=Ve(e),{roundedClasses:i}=ge(e),{themeClasses:f}=ae(e),{rtlClasses:y}=ie(),v=C(!!(e.extended||(g=t.extension)!=null&&g.call(t))),h=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=c(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return $e({VBtn:{variant:"text"}}),x(()=>{var A;const m=!!(e.title||t.title),p=!!(t.image||e.image),w=(A=t.extension)==null?void 0:A.call(t);return v.value=!!(e.extended||w),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,r.value,i.value,f.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[p&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n($,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Y,{key:"image-img",cover:!0,src:e.image},null)]),n($,{defaults:{VTabs:{height:I(h.value)}}},{default:()=>{var u,k,E;return[n("div",{class:"v-toolbar__content",style:{height:I(h.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(u=t.prepend)==null?void 0:u.call(t)]),m&&n(Le,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(E=t.append)==null?void 0:E.call(t)])])]}}),n($,{defaults:{VTabs:{height:I(b.value)}}},{default:()=>[n(Ye,null,{default:()=>[v.value&&n("div",{class:"v-toolbar__extension",style:{height:I(b.value)}},[w])]})]})]})}),{contentHeight:h,extensionHeight:b}}}),pt=_({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Vt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=a;let o=0,l=0;const s=D(null),r=C(0),i=C(0),f=C(0),y=C(!1),v=C(!1),h=c(()=>Number(e.scrollThreshold)),b=c(()=>Me((h.value-r.value)/h.value||0)),g=()=>{const m=s.value;if(!m||t&&!t.value)return;o=r.value,r.value="window"in m?m.pageYOffset:m.scrollTop;const p=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(l!==p){l=p;return}v.value=r.value<o,f.value=Math.abs(r.value-h.value)};return H(v,()=>{i.value=i.value||r.value}),H(y,()=>{i.value=0}),Ue(()=>{H(()=>e.scrollTarget,m=>{var w;const p=m?document.querySelector(m):window;p&&p!==s.value&&((w=s.value)==null||w.removeEventListener("scroll",g),s.value=p,s.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),Oe(()=>{var m;(m=s.value)==null||m.removeEventListener("scroll",g)}),t&&H(t,g,{immediate:!0}),{scrollThreshold:h,currentScroll:r,currentThreshold:f,isScrollActive:y,scrollRatio:b,isScrollingUp:v,savedScroll:i}}const St=_({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...je(),...re(),...pt(),height:{type:[Number,String],default:64}},"VAppBar"),_t=S()({name:"VAppBar",props:St(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=D(),l=ze(e,"modelValue"),s=c(()=>{var k;const u=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:u.has("hide"),fullyHide:u.has("fully-hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),r=c(()=>{const u=s.value;return u.hide||u.fullyHide||u.inverted||u.collapse||u.elevate||u.fadeImage||!l.value}),{currentScroll:i,scrollThreshold:f,isScrollingUp:y,scrollRatio:v}=Vt(e,{canScroll:r}),h=c(()=>s.value.hide||s.value.fullyHide),b=c(()=>e.collapse||s.value.collapse&&(s.value.inverted?v.value>0:v.value===0)),g=c(()=>e.flat||s.value.fullyHide&&!l.value||s.value.elevate&&(s.value.inverted?i.value>0:i.value===0)),m=c(()=>s.value.fadeImage?s.value.inverted?1-v.value:v.value:void 0),p=c(()=>{var E,J;if(s.value.hide&&s.value.inverted)return 0;const u=((E=o.value)==null?void 0:E.contentHeight)??0,k=((J=o.value)==null?void 0:J.extensionHeight)??0;return h.value?i.value<f.value||s.value.fullyHide?u+k:u:u+k});le(c(()=>!!e.scrollBehavior),()=>{se(()=>{h.value?s.value.inverted?l.value=i.value>f.value:l.value=y.value||i.value<f.value:l.value=!0})});const{ssrBootStyles:w}=_e(),{layoutItemStyles:A}=ne({id:e.name,order:c(()=>parseInt(e.order,10)),position:P(e,"location"),layoutSize:p,elementSize:C(void 0),active:l,absolute:P(e,"absolute")});return x(()=>{const u=ee.filterProps(e);return n(ee,R({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...A.value,"--v-toolbar-image-opacity":m.value,height:void 0,...w.value},e.style]},u,{collapse:b.value,flat:g.value}),t)}),{}}}),kt=_({...Ke({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ct=S()({name:"VAppBarNavIcon",props:kt(),setup(e,a){let{slots:t}=a;return x(()=>n(z,R(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),xt=S()({name:"VAppBarTitle",props:He(),setup(e,a){let{slots:t}=a;return x(()=>n(Le,R(e,{class:"v-app-bar-title"}),t)),{}}}),wt={data:()=>({items:[{title:"Home",path:"/"},{title:"Our Games",path:"/joyfulmasks"},{title:"About Us",path:"/about"},{title:"Contact Us",path:"/contact"},{title:"Updates",path:"/updates"},{title:"Press",path:"/press"}]}),methods:{isCurrentPage(e){return this.$route.path===e}}},Tt={style:{width:"130px"}},Bt={href:"/"};function Nt(e,a,t,o,l,s){return T(),O(_t,{color:"secondary-1","scroll-behavior":"collapse"},{default:d(()=>[n(xt,null,{default:d(()=>[V("div",Tt,[V("a",Bt,[n(Y,{width:"130",src:ke})])])]),_:1}),n(Je,{transition:"slide-x-transition"},{activator:d(({props:r})=>[n(Ct,R({color:"primary"},r),null,16)]),default:d(()=>[n(Ze,null,{default:d(()=>[(T(!0),j(W,null,ce(e.items,(r,i)=>(T(),O(Qe,{class:"px-8",key:i,to:r.path,disabled:s.isCurrentPage(r.path)},{default:d(()=>[n(Xe,null,{default:d(()=>[de(me(r.title),1)]),_:2},1024)]),_:2},1032,["to","disabled"]))),128))]),_:1})]),_:1})]),_:1})}const Et=te(wt,[["render",Nt]]),It=_({scrollable:Boolean,...B(),...pe(),...N({tag:"main"})},"VMain"),Pt=S()({name:"VMain",props:It(),setup(e,a){let{slots:t}=a;const{dimensionStyles:o}=be(e),{mainStyles:l}=De(),{ssrBootStyles:s}=_e();return x(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,s.value,o.value,e.style]},{default:()=>{var r,i;return[e.scrollable?n("div",{class:"v-main__scroller"},[(r=t.default)==null?void 0:r.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Gt={__name:"default",setup(e){return(a,t)=>{const o=Et,l=Ge("router-view"),s=yt;return T(),j(W,null,[n(o),n(Pt,null,{default:d(()=>[n(l)]),_:1}),n(s)],64)}}};export{Gt as default};
