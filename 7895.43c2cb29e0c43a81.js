"use strict";(self.webpackChunknclsbayona_github_io=self.webpackChunknclsbayona_github_io||[]).push([[7895],{7895:(V,T,h)=>{h.r(T),h.d(T,{startTapClick:()=>I});var l=h(3756);const I=n=>{let i,s,E,d,o=10*-v,r=0;const P=n.getBoolean("animated",!0)&&n.getBoolean("rippleEffect",!0),p=new WeakMap,D=t=>{o=(0,l.u)(t),m(t)},R=()=>{clearTimeout(d),d=void 0,s&&(b(!1),s=void 0)},g=t=>{s||void 0!==i&&null!==i.parentElement||(i=void 0,S(M(t),t))},m=t=>{S(void 0,t)},S=(t,e)=>{if(t&&t===s)return;clearTimeout(d),d=void 0;const{x:u,y:a}=(0,l.p)(e);if(s){if(p.has(s))throw new Error("internal error");s.classList.contains(f)||w(s,u,a),b(!0)}if(t){const _=p.get(t);_&&(clearTimeout(_),p.delete(t));const F=L(t)?0:k;t.classList.remove(f),d=setTimeout(()=>{w(t,u,a),d=void 0},F)}s=t},w=(t,e,u)=>{r=Date.now(),t.classList.add(f);const a=P&&y(t);a&&a.addRipple&&(C(),E=a.addRipple(e,u))},C=()=>{void 0!==E&&(E.then(t=>t()),E=void 0)},b=t=>{C();const e=s;if(!e)return;const u=A-Date.now()+r;if(t&&u>0&&!L(e)){const a=setTimeout(()=>{e.classList.remove(f),p.delete(e)},A);p.set(e,a)}else e.classList.remove(f)},c=document;c.addEventListener("ionScrollStart",t=>{i=t.target,R()}),c.addEventListener("ionScrollEnd",()=>{i=void 0}),c.addEventListener("ionGestureCaptured",R),c.addEventListener("touchstart",t=>{o=(0,l.u)(t),g(t)},!0),c.addEventListener("touchcancel",D,!0),c.addEventListener("touchend",D,!0),c.addEventListener("mousedown",t=>{const e=(0,l.u)(t)-v;o<e&&g(t)},!0),c.addEventListener("mouseup",t=>{const e=(0,l.u)(t)-v;o<e&&m(t)},!0),c.addEventListener("contextmenu",t=>{m(t)},!0)},M=n=>{if(!n.composedPath)return n.target.closest(".ion-activatable");{const o=n.composedPath();for(let r=0;r<o.length-2;r++){const i=o[r];if(!(i instanceof ShadowRoot)&&i.classList.contains("ion-activatable"))return i}}},L=n=>n.classList.contains("ion-activatable-instant"),y=n=>{if(n.shadowRoot){const o=n.shadowRoot.querySelector("ion-ripple-effect");if(o)return o}return n.querySelector("ion-ripple-effect")},f="ion-activated",k=200,A=200,v=2500}}]);