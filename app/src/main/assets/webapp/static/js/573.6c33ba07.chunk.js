/*! For license information please see 573.6c33ba07.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkscrollytest=self.webpackChunkscrollytest||[]).push([[573],{573:(e,t,i)=>{i.r(t),i.d(t,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>D,keyboardDidClose:()=>w,keyboardDidOpen:()=>b,keyboardDidResize:()=>g,resetKeyboardAssist:()=>n,setKeyboardClose:()=>l,setKeyboardOpen:()=>c,startKeyboardAssist:()=>h,trackViewportChanges:()=>u});const s="ionKeyboardDidShow",o="ionKeyboardDidHide";let a={},d={},r=!1;const n=()=>{a={},d={},r=!1},h=e=>{p(e),e.visualViewport&&(d=D(e.visualViewport),e.visualViewport.onresize=()=>{u(e),b()||g(e)?c(e):w(e)&&l(e)})},p=e=>{e.addEventListener("keyboardDidShow",(t=>c(e,t))),e.addEventListener("keyboardDidHide",(()=>l(e)))},c=(e,t)=>{y(e,t),r=!0},l=e=>{f(e),r=!1},b=()=>{const e=(a.height-d.height)*d.scale;return!r&&a.width===d.width&&e>150},g=e=>r&&!w(e),w=e=>r&&d.height===e.innerHeight,y=(e,t)=>{const i=t?t.keyboardHeight:e.innerHeight-d.height,o=new CustomEvent(s,{detail:{keyboardHeight:i}});e.dispatchEvent(o)},f=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},u=e=>{a=Object.assign({},d),d=D(e.visualViewport)},D=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale})}}]);
//# sourceMappingURL=573.6c33ba07.chunk.js.map