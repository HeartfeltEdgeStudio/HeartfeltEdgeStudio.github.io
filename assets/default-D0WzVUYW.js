import{g as p,p as _,r as D,a as te,u as ae,t as E,b as le,c as ne,d as se,s as C,e as Re,f as c,h as oe,i as re,w as ie,j as x,k as n,l as I,m as ue,n as B,o as ce,q as de,v as me,x as N,y as fe,z as ve,A as ge,B as he,C as ye,D as R,E as G,_ as be,F as O,G as d,H as S,V as z,I as j,J as Ve,K as W,L as Y,M as J,N as Se,O as pe,P as $e,Q as T,R as Fe,S as F,T as Ue,U as H,W as Me,X as Oe,Y as ze,Z as _e,$,a0 as De,a1 as Ge,a2 as We}from"./index-BYmEIY2h.js";import{V as Ye,a as Ke}from"./VOverlay-CrDu_c39.js";import{V as qe}from"./VForm-bHo3SB89.js";import{V as Ze,a as Je,b as Qe,c as Xe}from"./VMenu-DFMsFCkB.js";const ke="/assets/HeartfeltEdgeStudioWhite-Dr-bRZ6D.png",et=_({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...fe(),...N(),...me(),...de(),...ce(),...B({tag:"footer"}),...ue()},"VFooter"),tt=p()({name:"VFooter",props:et(),setup(e,a){let{slots:t}=a;const o=D(),{themeClasses:l}=te(e),{backgroundColorClasses:s,backgroundColorStyles:r}=ae(E(e,"color")),{borderClasses:i}=le(e),{elevationClasses:f}=ne(e),{roundedClasses:y}=se(e),v=C(32),{resizeRef:h}=Re(g=>{g.length&&(v.value=g[0].target.clientHeight)}),b=c(()=>e.height==="auto"?v.value:parseInt(e.height,10));return oe(()=>e.app,()=>{const g=re({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:E(e,"absolute")});ie(()=>{o.value=g.layoutItemStyles.value})}),x(()=>n(e.tag,{ref:h,class:["v-footer",l.value,s.value,i.value,f.value,y.value,e.class],style:[r.value,e.app?o.value:{height:I(e.height)},e.style]},t)),{}}}),at=_({fluid:{type:Boolean,default:!1},...N(),...he(),...B()},"VContainer"),U=p()({name:"VContainer",props:at(),setup(e,a){let{slots:t}=a;const{rtlClasses:o}=ve(),{dimensionStyles:l}=ge(e);return x(()=>n(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:[l.value,e.style]},t)),{}}}),Ce=R.reduce((e,a)=>(e[a]={type:[Boolean,String,Number],default:!1},e),{}),xe=R.reduce((e,a)=>{const t="offset"+G(a);return e[t]={type:[String,Number],default:null},e},{}),we=R.reduce((e,a)=>{const t="order"+G(a);return e[t]={type:[String,Number],default:null},e},{}),Q={col:Object.keys(Ce),offset:Object.keys(xe),order:Object.keys(we)};function lt(e,a,t){let o=e;if(!(t==null||t===!1)){if(a){const l=a.replace(e,"");o+=`-${l}`}return e==="col"&&(o="v-"+o),e==="col"&&(t===""||t===!0)||(o+=`-${t}`),o.toLowerCase()}}const nt=["auto","start","end","center","baseline","stretch"],st=_({cols:{type:[Boolean,String,Number],default:!1},...Ce,offset:{type:[String,Number],default:null},...xe,order:{type:[String,Number],default:null},...we,alignSelf:{type:String,default:null,validator:e=>nt.includes(e)},...N(),...B()},"VCol"),L=p()({name:"VCol",props:st(),setup(e,a){let{slots:t}=a;const o=c(()=>{const l=[];let s;for(s in Q)Q[s].forEach(i=>{const f=e[i],y=lt(s,i,f);y&&l.push(y)});const r=l.some(i=>i.startsWith("v-col-"));return l.push({"v-col":!r||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),l});return()=>{var l;return ye(e.tag,{class:[o.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),K=["start","end","center"],Te=["space-between","space-around","space-evenly"];function q(e,a){return R.reduce((t,o)=>{const l=e+G(o);return t[l]=a(),t},{})}const ot=[...K,"baseline","stretch"],Be=e=>ot.includes(e),Ne=q("align",()=>({type:String,default:null,validator:Be})),rt=[...K,...Te],Pe=e=>rt.includes(e),Ie=q("justify",()=>({type:String,default:null,validator:Pe})),it=[...K,...Te,"stretch"],Ee=e=>it.includes(e),Ae=q("alignContent",()=>({type:String,default:null,validator:Ee})),X={align:Object.keys(Ne),justify:Object.keys(Ie),alignContent:Object.keys(Ae)},ut={align:"align",justify:"justify",alignContent:"align-content"};function ct(e,a,t){let o=ut[e];if(t!=null){if(a){const l=a.replace(e,"");o+=`-${l}`}return o+=`-${t}`,o.toLowerCase()}}const dt=_({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Be},...Ne,justify:{type:String,default:null,validator:Pe},...Ie,alignContent:{type:String,default:null,validator:Ee},...Ae,...N(),...B()},"VRow"),M=p()({name:"VRow",props:dt(),setup(e,a){let{slots:t}=a;const o=c(()=>{const l=[];let s;for(s in X)X[s].forEach(r=>{const i=e[r],f=ct(s,r,i);f&&l.push(f)});return l.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),l});return()=>{var l;return ye(e.tag,{class:["v-row",o.value,e.class],style:e.style},(l=t.default)==null?void 0:l.call(t))}}}),mt={setup(){return{goTo:$e()}},data(){return{duration:600,number:0,offset:0,target:"By Number",easing:"easeInOutCubic",icons:[{name:"mdi-facebook",link:"https://www.facebook.com/heartfeltedgestudio"},{name:"mdi-twitter",link:"https://x.com/HeartfeltEdge?t=WLcw-rhlCxO61F19nIWHaA&s=09"},{name:"mdi-linkedin",link:"https://www.linkedin.com/company/heartfelt-edge-studio"},{name:"mdi-instagram",link:"https://www.instagram.com/heartfeltedgestudio"},{name:"mdi-music-note-eighth",link:"https://www.tiktok.com/@heartfeltedgestudio?_t=ZN-8uEmYOqQNiY&_r=1"}],valid:!0,email:"",emailRules:[e=>/.+@.+\..+/.test(e)||"E-mail must be valid"]}},computed:{options(){return{duration:this.duration,easing:this.easing,offset:this.offset}}},methods:{onClick(){this.goTo(this.number,this.options)}}},ft={class:"px-4 pt-4 d-sm-flex align-center"},vt={class:"mb-2 d-flex flex-wrap justify-center"},gt=["href"];function ht(e,a,t,o,l,s){return T(),O(tt,{class:"bg-secondary-1 text-center d-flex flex-column"},{default:d(()=>[n(qe,{ref:"form",modelValue:l.valid,"onUpdate:modelValue":a[1]||(a[1]=r=>l.valid=r),"lazy-validation":"",class:"w-md-50 w-75"},{default:d(()=>[S("div",ft,[n(Ye,{label:"E-mail",placeholder:"youremail@email.com",outlined:"",modelValue:l.email,"onUpdate:modelValue":a[0]||(a[0]=r=>l.email=r),rules:l.emailRules},null,8,["modelValue","rules"]),n(L,{cols:"12",sm:"auto",class:"pa-0 pl-sm-5 pb-6 mt-sm-0 mt-1"},{default:d(()=>[n(z,{color:"primary",onClick:e.validate,class:"w-100 h-100 py-4"},{default:d(()=>a[3]||(a[3]=[S("p",{class:"text-wrap text-left",style:{margin:"auto"}}," Claim Exclusive Access",-1)])),_:1},8,["onClick"])]),_:1})])]),_:1},8,["modelValue"]),a[6]||(a[6]=S("p",{class:"pt-2"}," Made In Italy ",-1)),n(U,{class:"d-flex justify-center mx-auto w-50 w-md-25"},{default:d(()=>[n(M,{class:"justify-center"},{default:d(()=>[n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#008C45"}}),n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#F4F9FF"}}),n(L,{cols:"4",class:"pa-0 h-25",style:{"background-color":"#CD212A"}})]),_:1})]),_:1}),S("div",vt,[(T(!0),j(W,null,Ve(l.icons,(r,i)=>(T(),j("a",{key:i,href:r.link,target:"_blank",rel:"noopener noreferrer",class:"mx-1",style:{color:"inherit"}},[n(z,{icon:r.name,variant:"text",size:"x-large"},null,8,["icon"])],8,gt))),128))]),a[7]||(a[7]=S("p",{class:"text-primary font-italic my-5"}," “HEARTFELT GAMES WITH A CUTTING EDGE” ",-1)),n(Y,{width:"200",class:"my-5",src:ke}),S("a",{href:"#",onClick:a[2]||(a[2]=(...r)=>s.onClick&&s.onClick(...r)),class:"text-decoration-none mb-5",style:{color:"inherit"}},[n(U,{class:"pb-3"},{default:d(()=>[n(M,{class:"justify-center"},{default:d(()=>[n(J,{icon:"mdi-arrow-up-circle-outline",size:"x-large"})]),_:1})]),_:1}),a[4]||(a[4]=S("p",null,"Back To Top",-1))]),n(U,null,{default:d(()=>[n(M,{class:"justify-center align-center text-primary"},{default:d(()=>[n(J,{icon:"mdi-copyright",size:"small"}),Se(" "+pe(new Date().getFullYear())+" — ",1),a[5]||(a[5]=S("strong",null,"Heartfelt Edge Studio",-1))]),_:1})]),_:1})]),_:1})}const yt=be(mt,[["render",ht]]),He=_({text:String,...N(),...B()},"VToolbarTitle"),Le=p()({name:"VToolbarTitle",props:He(),setup(e,a){let{slots:t}=a;return x(()=>{const o=!!(t.default||t.text||e.text);return n(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[o&&n("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),bt=[null,"prominent","default","comfortable","compact"],je=_({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>bt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...fe(),...N(),...me(),...ce(),...B({tag:"header"}),...ue()},"VToolbar"),ee=p()({name:"VToolbar",props:je(),setup(e,a){var g;let{slots:t}=a;const{backgroundColorClasses:o,backgroundColorStyles:l}=ae(E(e,"color")),{borderClasses:s}=le(e),{elevationClasses:r}=ne(e),{roundedClasses:i}=se(e),{themeClasses:f}=te(e),{rtlClasses:y}=ve(),v=C(!!(e.extended||(g=t.extension)!=null&&g.call(t))),h=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),b=c(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Fe({VBtn:{variant:"text"}}),x(()=>{var A;const m=!!(e.title||t.title),V=!!(t.image||e.image),w=(A=t.extension)==null?void 0:A.call(t);return v.value=!!(e.extended||w),n(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,s.value,r.value,i.value,f.value,y.value,e.class],style:[l.value,e.style]},{default:()=>[V&&n("div",{key:"image",class:"v-toolbar__image"},[t.image?n(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):n(Y,{key:"image-img",cover:!0,src:e.image},null)]),n(F,{defaults:{VTabs:{height:I(h.value)}}},{default:()=>{var u,k,P;return[n("div",{class:"v-toolbar__content",style:{height:I(h.value)}},[t.prepend&&n("div",{class:"v-toolbar__prepend"},[(u=t.prepend)==null?void 0:u.call(t)]),m&&n(Le,{key:"title",text:e.title},{text:t.title}),(k=t.default)==null?void 0:k.call(t),t.append&&n("div",{class:"v-toolbar__append"},[(P=t.append)==null?void 0:P.call(t)])])]}}),n(F,{defaults:{VTabs:{height:I(b.value)}}},{default:()=>[n(Ke,null,{default:()=>[v.value&&n("div",{class:"v-toolbar__extension",style:{height:I(b.value)}},[w])]})]})]})}),{contentHeight:h,extensionHeight:b}}}),Vt=_({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function St(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=a;let o=0,l=0;const s=D(null),r=C(0),i=C(0),f=C(0),y=C(!1),v=C(!1),h=c(()=>Number(e.scrollThreshold)),b=c(()=>Ue((h.value-r.value)/h.value||0)),g=()=>{const m=s.value;if(!m||t&&!t.value)return;o=r.value,r.value="window"in m?m.pageYOffset:m.scrollTop;const V=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(l!==V){l=V;return}v.value=r.value<o,f.value=Math.abs(r.value-h.value)};return H(v,()=>{i.value=i.value||r.value}),H(y,()=>{i.value=0}),Me(()=>{H(()=>e.scrollTarget,m=>{var w;const V=m?document.querySelector(m):window;V&&V!==s.value&&((w=s.value)==null||w.removeEventListener("scroll",g),s.value=V,s.value.addEventListener("scroll",g,{passive:!0}))},{immediate:!0})}),Oe(()=>{var m;(m=s.value)==null||m.removeEventListener("scroll",g)}),t&&H(t,g,{immediate:!0}),{scrollThreshold:h,currentScroll:r,currentThreshold:f,isScrollActive:y,scrollRatio:b,isScrollingUp:v,savedScroll:i}}const pt=_({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...je(),...de(),...Vt(),height:{type:[Number,String],default:64}},"VAppBar"),_t=p()({name:"VAppBar",props:pt(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:t}=a;const o=D(),l=ze(e,"modelValue"),s=c(()=>{var k;const u=new Set(((k=e.scrollBehavior)==null?void 0:k.split(" "))??[]);return{hide:u.has("hide"),fullyHide:u.has("fully-hide"),inverted:u.has("inverted"),collapse:u.has("collapse"),elevate:u.has("elevate"),fadeImage:u.has("fade-image")}}),r=c(()=>{const u=s.value;return u.hide||u.fullyHide||u.inverted||u.collapse||u.elevate||u.fadeImage||!l.value}),{currentScroll:i,scrollThreshold:f,isScrollingUp:y,scrollRatio:v}=St(e,{canScroll:r}),h=c(()=>s.value.hide||s.value.fullyHide),b=c(()=>e.collapse||s.value.collapse&&(s.value.inverted?v.value>0:v.value===0)),g=c(()=>e.flat||s.value.fullyHide&&!l.value||s.value.elevate&&(s.value.inverted?i.value>0:i.value===0)),m=c(()=>s.value.fadeImage?s.value.inverted?1-v.value:v.value:void 0),V=c(()=>{var P,Z;if(s.value.hide&&s.value.inverted)return 0;const u=((P=o.value)==null?void 0:P.contentHeight)??0,k=((Z=o.value)==null?void 0:Z.extensionHeight)??0;return h.value?i.value<f.value||s.value.fullyHide?u+k:u:u+k});oe(c(()=>!!e.scrollBehavior),()=>{ie(()=>{h.value?s.value.inverted?l.value=i.value>f.value:l.value=y.value||i.value<f.value:l.value=!0})});const{ssrBootStyles:w}=_e(),{layoutItemStyles:A}=re({id:e.name,order:c(()=>parseInt(e.order,10)),position:E(e,"location"),layoutSize:V,elementSize:C(void 0),active:l,absolute:E(e,"absolute")});return x(()=>{const u=ee.filterProps(e);return n(ee,$({ref:o,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...A.value,"--v-toolbar-image-opacity":m.value,height:void 0,...w.value},e.style]},u,{collapse:b.value,flat:g.value}),t)}),{}}}),kt=_({...De({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Ct=p()({name:"VAppBarNavIcon",props:kt(),setup(e,a){let{slots:t}=a;return x(()=>n(z,$(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),xt=p()({name:"VAppBarTitle",props:He(),setup(e,a){let{slots:t}=a;return x(()=>n(Le,$(e,{class:"v-app-bar-title"}),t)),{}}}),wt={data:()=>({items:[{title:"Home",path:"/"},{title:"Our Games",path:"/joyfulmasks"},{title:"About Us",path:"/about"},{title:"Contact Us",path:"/contact"},{title:"Updates",path:"/updates"},{title:"Press",path:"/press"}]}),methods:{isCurrentPage(e){return this.$route.path===e}}},Tt={style:{width:"130px"}},Bt={href:"/"};function Nt(e,a,t,o,l,s){return T(),O(_t,{color:"secondary-1","scroll-behavior":"collapse"},{default:d(()=>[n(xt,null,{default:d(()=>[S("div",Tt,[S("a",Bt,[n(Y,{width:"130",src:ke})])])]),_:1}),n(Ze,{transition:"slide-x-transition"},{activator:d(({props:r})=>[n(Ct,$({color:"primary"},r),null,16)]),default:d(()=>[n(Je,null,{default:d(()=>[(T(!0),j(W,null,Ve(e.items,(r,i)=>(T(),O(Qe,{class:"px-8",key:i,to:r.path,disabled:s.isCurrentPage(r.path)},{default:d(()=>[n(Xe,null,{default:d(()=>[Se(pe(r.title),1)]),_:2},1024)]),_:2},1032,["to","disabled"]))),128))]),_:1})]),_:1})]),_:1})}const Pt=be(wt,[["render",Nt]]),It=_({scrollable:Boolean,...N(),...he(),...B({tag:"main"})},"VMain"),Et=p()({name:"VMain",props:It(),setup(e,a){let{slots:t}=a;const{dimensionStyles:o}=ge(e),{mainStyles:l}=Ge(),{ssrBootStyles:s}=_e();return x(()=>n(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[l.value,s.value,o.value,e.style]},{default:()=>{var r,i;return[e.scrollable?n("div",{class:"v-main__scroller"},[(r=t.default)==null?void 0:r.call(t)]):(i=t.default)==null?void 0:i.call(t)]}})),{}}}),Rt={__name:"default",setup(e){return(a,t)=>{const o=Pt,l=We("router-view"),s=yt;return T(),j(W,null,[n(o),n(Et,null,{default:d(()=>[n(l)]),_:1}),n(s)],64)}}};export{Rt as default};
