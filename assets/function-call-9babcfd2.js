import{m as F,u as R}from"./mount-component-b555bf78.js";import{A as _,y as K,H as I,e as n,B as x,_ as U}from"./vue-libs-19c20d28.js";import{P as L,p as z,a as M}from"./index-e88b099c.js";import{B as k}from"./index-2ad848b9.js";import{b as P,c as W}from"./index-9ea78967.js";import{p,h as V,c as j,e as f,x as T,B as q,d as G}from"./use-translate-71d4880c.js";import{e as J,c as Q}from"./constant-ee6e27d7.js";import{n as X,u as Y,m as Z,t as v}from"./with-install-560d59bf.js";import{c as $}from"./interceptor-5424332a.js";const[ee,l,m]=j("dialog"),te=f({},z,{title:String,theme:String,width:X,message:[String,Function],callback:Function,allowHtml:Boolean,className:Y,transition:Z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:v,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:v,closeOnClickOverlay:Boolean}),ne=[...M,"transition","closeOnPopstate"],oe=_({name:ee,props:te,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const u=K(),i=I({confirm:!1,cancel:!1}),C=t=>r("update:show",t),b=t=>{var a;C(!1),(a=e.callback)==null||a.call(e,t)},y=t=>()=>{e.show&&(r(t),e.beforeClose?(i[t]=!0,$(e.beforeClose,{args:[t],done(){b(t),i[t]=!1},canceled(){i[t]=!1}})):b(t))},B=y("cancel"),g=y("confirm"),S=U(t=>{var s,c;if(t.target!==((c=(s=u.value)==null?void 0:s.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?g:T,Escape:e.showCancelButton?B:T})[t.key](),r("keydown",t)},["enter","esc"]),D=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:l("header",{isolated:!e.message&&!o.default})},[t])},O=t=>{const{message:a,allowHtml:s,messageAlign:c}=e,d=l("message",{"has-title":t,[c]:c}),h=q(a)?a():a;return s&&typeof h=="string"?n("div",{class:d,innerHTML:h},null):n("div",{class:d},[h])},A=()=>{if(o.default)return n("div",{class:l("content")},[o.default()]);const{title:t,message:a,allowHtml:s}=e;if(a){const c=!!(t||o.title);return n("div",{key:s?1:0,class:l("content",{isolated:!c})},[O(c)])}},E=()=>n("div",{class:[Q,l("footer")]},[e.showCancelButton&&n(k,{size:"large",text:e.cancelButtonText||m("cancel"),class:l("cancel"),style:{color:e.cancelButtonColor},loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(k,{size:"large",text:e.confirmButtonText||m("confirm"),class:[l("confirm"),{[J]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),H=()=>n(W,{class:l("footer")},{default:()=>[e.showCancelButton&&n(P,{type:"warning",text:e.cancelButtonText||m("cancel"),class:l("cancel"),color:e.cancelButtonColor,loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(P,{type:"danger",text:e.confirmButtonText||m("confirm"),class:l("confirm"),color:e.confirmButtonColor,loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),N=()=>o.footer?o.footer():e.theme==="round-button"?H():E();return()=>{const{width:t,title:a,theme:s,message:c,className:d}=e;return n(L,x({ref:u,role:"dialog",class:[l([s]),d],style:{width:V(t)},tabindex:0,"aria-labelledby":a||c,onKeydown:S,"onUpdate:show":C},p(e,ne)),{default:()=>[D(),A(),N()]})}}});let w;const ae={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let le=f({},ae);function ce(){({instance:w}=F({setup(){const{state:r,toggle:o}=R();return()=>n(oe,x(r,{"onUpdate:show":o}),null)}}))}function se(e){return G?new Promise((r,o)=>{w||ce(),w.open(f({},le,e,{callback:u=>{(u==="confirm"?r:o)(u)}}))}):Promise.resolve(void 0)}const we=e=>se(f({showCancelButton:!0},e));export{oe as _,we as a,se as s};
