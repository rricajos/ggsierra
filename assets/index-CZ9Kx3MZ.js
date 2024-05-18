var X=Object.defineProperty;var Y=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var k=(t,e,n)=>(Y(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function y(){}function q(t){return t()}function F(){return Object.create(null)}function P(t){t.forEach(q)}function G(t){return typeof t=="function"}function H(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Z(t){return Object.keys(t).length===0}function l(t,e){t.appendChild(e)}function K(t,e,n){t.insertBefore(e,n||null)}function T(t){t.parentNode&&t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function R(t){return document.createTextNode(t)}function w(){return R(" ")}function tt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function j(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function et(t){return Array.from(t.childNodes)}function nt(t,e){e=""+e,t.data!==e&&(t.data=e)}let D;function O(t){D=t}const m=[],V=[];let _=[];const W=[],rt=Promise.resolve();let B=!1;function ot(){B||(B=!0,rt.then(U))}function M(t){_.push(t)}const I=new Set;let g=0;function U(){if(g!==0)return;const t=D;do{try{for(;g<m.length;){const e=m[g];g++,O(e),st(e.$$)}}catch(e){throw m.length=0,g=0,e}for(O(null),m.length=0,g=0;V.length;)V.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];I.has(n)||(I.add(n),n())}_.length=0}while(m.length);for(;W.length;)W.pop()();B=!1,I.clear(),O(t)}function st(t){if(t.fragment!==null){t.update(),P(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}function it(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}const A=new Set;let ut;function x(t,e){t&&t.i&&(A.delete(t),t.i(e))}function N(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),ut.c.push(()=>{A.delete(t)}),t.o(e)}}function S(t){t&&t.c()}function L(t,e,n){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),M(()=>{const s=t.$$.on_mount.map(q).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...s):P(s),t.$$.on_mount=[]}),o.forEach(M)}function E(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(t,e){t.$$.dirty[0]===-1&&(m.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(t,e,n,r,o,s,i=null,c=[-1]){const h=D;O(t);const u=t.$$={fragment:null,ctx:[],props:s,update:y,not_equal:o,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:F(),dirty:c,skip_bound:!1,root:e.target||h.$$.root};i&&i(u.root);let v=!1;if(u.ctx=n?n(t,e.props||{},(f,b,...d)=>{const p=d.length?d[0]:b;return u.ctx&&o(u.ctx[f],u.ctx[f]=p)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](p),v&&ft(t,f)),b}):[],u.update(),v=!0,P(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=et(e.target);u.fragment&&u.fragment.l(f),f.forEach(T)}else u.fragment&&u.fragment.c();e.intro&&x(t.$$.fragment),L(t,e.target,e.anchor),U()}O(h)}class J{constructor(){k(this,"$$");k(this,"$$set")}$destroy(){E(this,1),this.$destroy=y}$on(e,n){if(!G(n))return y;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Z(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);const at="https://rricajos.github.io/ggsierra/assets/3d-printer-CShF57po.svg",lt="https://rricajos.github.io/ggsierra/assets/medical-DMc-WWNt.svg";function dt(t){let e,n,r,o,s;return{c(){e=$("a"),n=$("button"),r=R(t[0]),j(n,"class","svelte-1uvx7wv"),j(e,"href",t[0])},m(i,c){K(i,e,c),l(e,n),l(n,r),o||(s=tt(n,"click",t[1]),o=!0)},p(i,[c]){c&1&&nt(r,i[0]),c&1&&j(e,"href",i[0])},i:y,o:y,d(i){i&&T(e),o=!1,s()}}}function ht(t,e,n){let{path:r}=e;const o=()=>{console.log(r)};return t.$$set=s=>{"path"in s&&n(0,r=s.path)},[r,o]}class C extends J{constructor(e){super(),z(this,e,ht,dt,H,{path:0})}}function pt(t){let e,n,r,o,s,i,c,h,u,v,f,b,d,p;return c=new C({props:{path:"#Impresion3D"}}),u=new C({props:{path:"#Traumatologia"}}),f=new C({props:{path:"#Ortopedia"}}),d=new C({props:{path:"#Salud"}}),{c(){e=$("main"),n=$("div"),n.innerHTML=`<img src="${at}" class="logo svelte-1udohf9" alt="Vite Logo"/> <img src="${lt}" class="logo svelte svelte-1udohf9" alt="Svelte Logo"/>`,r=w(),o=$("h1"),o.textContent="Giuseppe Sierra",s=w(),i=$("div"),S(c.$$.fragment),h=w(),S(u.$$.fragment),v=w(),S(f.$$.fragment),b=w(),S(d.$$.fragment),j(i,"class","card")},m(a,Q){K(a,e,Q),l(e,n),l(e,r),l(e,o),l(e,s),l(e,i),L(c,i,null),l(i,h),L(u,i,null),l(i,v),L(f,i,null),l(i,b),L(d,i,null),p=!0},p:y,i(a){p||(x(c.$$.fragment,a),x(u.$$.fragment,a),x(f.$$.fragment,a),x(d.$$.fragment,a),p=!0)},o(a){N(c.$$.fragment,a),N(u.$$.fragment,a),N(f.$$.fragment,a),N(d.$$.fragment,a),p=!1},d(a){a&&T(e),E(c),E(u),E(f),E(d)}}}class gt extends J{constructor(e){super(),z(this,e,null,pt,H,{})}}new gt({target:document.getElementById("app")});
