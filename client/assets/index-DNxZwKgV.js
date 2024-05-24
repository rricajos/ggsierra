var be=Object.defineProperty;var ye=(t,e,n)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var I=(t,e,n)=>(ye(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();function A(){}function ge(t){return t()}function le(){return Object.create(null)}function T(t){t.forEach(ge)}function he(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ke(t){return Object.keys(t).length===0}function se(t){return t??""}function a(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode&&t.parentNode.removeChild(t)}function $e(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function b(){return te(" ")}function ze(){return te("")}function D(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function we(t){return Array.from(t.childNodes)}function xe(t,e){e=""+e,t.data!==e&&(t.data=e)}let ne;function K(t){ne=t}const W=[],J=[];let Q=[];const ce=[],Ce=Promise.resolve();let X=!1;function Se(){X||(X=!0,Ce.then(_e))}function ee(t){Q.push(t)}const Z=new Set;let F=0;function _e(){if(F!==0)return;const t=ne;do{try{for(;F<W.length;){const e=W[F];F++,K(e),Ae(e.$$)}}catch(e){throw W.length=0,F=0,e}for(K(null),W.length=0,F=0;J.length;)J.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];Z.has(n)||(Z.add(n),n())}Q.length=0}while(W.length);for(;ce.length;)ce.pop()();X=!1,Z.clear(),K(t)}function Ae(t){if(t.fragment!==null){t.update(),T(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ee)}}function Ee(t){const e=[],n=[];Q.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Q=e}const Y=new Set;let je;function N(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function P(t,e,n,l){if(t&&t.o){if(Y.has(t))return;Y.add(t),je.c.push(()=>{Y.delete(t)}),t.o(e)}}function ie(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function q(t){t&&t.c()}function B(t,e,n){const{fragment:l,after_update:s}=t.$$;l&&l.m(e,n),ee(()=>{const c=t.$$.on_mount.map(ge).filter(he);t.$$.on_destroy?t.$$.on_destroy.push(...c):T(c),t.$$.on_mount=[]}),s.forEach(ee)}function M(t,e){const n=t.$$;n.fragment!==null&&(Ee(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Oe(t,e){t.$$.dirty[0]===-1&&(W.push(t),Se(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,l,s,c,d=null,p=[-1]){const m=ne;K(t);const i=t.$$={fragment:null,ctx:[],props:c,update:A,not_equal:s,bound:le(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(m?m.$$.context:[])),callbacks:le(),dirty:p,skip_bound:!1,root:e.target||m.$$.root};d&&d(i.root);let v=!1;if(i.ctx=n?n(t,e.props||{},(r,h,...o)=>{const _=o.length?o[0]:h;return i.ctx&&s(i.ctx[r],i.ctx[r]=_)&&(!i.skip_bound&&i.bound[r]&&i.bound[r](_),v&&Oe(t,r)),h}):[],i.update(),v=!0,T(i.before_update),i.fragment=l?l(i.ctx):!1,e.target){if(e.hydrate){const r=we(e.target);i.fragment&&i.fragment.l(r),r.forEach(z)}else i.fragment&&i.fragment.c();e.intro&&N(t.$$.fragment),B(t,e.target,e.anchor),_e()}K(m)}class H{constructor(){I(this,"$$");I(this,"$$set")}$destroy(){M(this,1),this.$destroy=A}$on(e,n){if(!he(n))return A;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Le="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Le);const oe=t=>{const e=";";return{toRouter:(n,l)=>{const s=l.name?`${l.name}/(.+?)`:"(.+?)",c=new RegExp(`(^|${e})${s}(${e}|$)`),d=n.match(c);return d?d[2]:"/"},toBrowser:n=>n.filter(l=>l.url.external()!==""||!l.name).map(l=>(l.name?`${l.name}`:"")+l.url.external()).join(e)}};class Ne{constructor(){I(this,"instances",[]);I(this,"routeMaps",{});I(this,"browserAdapter",oe());I(this,"urlFromBrowser",e=>this.browserAdapter.toRouter(Be(),e));globalThis.__routify=this}get routers(){return[].concat(...this.instances.map(e=>e.routers))}reset(){this.instances=[],this.routeMaps={},this.browserAdapter=oe()}register(e){return this.instances.push(e),this}}new Ne;const Be=()=>(({pathname:t,search:e,hash:n})=>t+e+n)(window.location);function Me(t){let e,n,l,s,c,d,p,m,i,v;return{c(){e=f("button"),n=f("a"),l=f("i"),c=b(),d=f("span"),p=te(t[1]),u(l,"class",s=se(t[2])+" svelte-1thpzd7"),u(d,"class","svelte-1thpzd7"),u(n,"href",m="#"+t[0]),u(n,"class","svelte-1thpzd7"),u(e,"class","svelte-1thpzd7")},m(r,h){x(r,e,h),a(e,n),a(n,l),a(n,c),a(n,d),a(d,p),t[5](e),i||(v=D(e,"click",t[4]),i=!0)},p(r,[h]){h&4&&s!==(s=se(r[2])+" svelte-1thpzd7")&&u(l,"class",s),h&2&&xe(p,r[1]),h&1&&m!==(m="#"+r[0])&&u(n,"href",m)},i:A,o:A,d(r){r&&z(e),t[5](null),i=!1,v()}}}function De(t,e,n){let{fun:l}=e,{title:s}=e,{icon:c}=e,d,p=()=>{lt(l)};function m(i){J[i?"unshift":"push"](()=>{d=i,n(3,d)})}return t.$$set=i=>{"fun"in i&&n(0,l=i.fun),"title"in i&&n(1,s=i.title),"icon"in i&&n(2,c=i.icon)},[l,s,c,d,p,m]}class V extends H{constructor(e){super(),G(this,e,De,Me,R,{fun:0,title:1,icon:2})}}function Pe(t){let e,n,l,s,c,d,p,m,i,v;return l=new V({props:{fun:"home",title:"GSierra",icon:"las la-home"}}),c=new V({props:{fun:"consult",title:"Consulta",icon:"las la-phone"}}),p=new V({props:{fun:"blog",title:"Blog",icon:"las la-rss"}}),i=new V({props:{fun:"people",title:"Personas",icon:"las la-smile"}}),{c(){e=f("nav"),n=f("div"),q(l.$$.fragment),s=b(),q(c.$$.fragment),d=b(),q(p.$$.fragment),m=b(),q(i.$$.fragment),u(n,"class","nav-col svelte-1f457lv"),u(e,"class","card")},m(r,h){x(r,e,h),a(e,n),B(l,n,null),a(n,s),B(c,n,null),a(n,d),B(p,n,null),a(n,m),B(i,n,null),v=!0},p:A,i(r){v||(N(l.$$.fragment,r),N(c.$$.fragment,r),N(p.$$.fragment,r),N(i.$$.fragment,r),v=!0)},o(r){P(l.$$.fragment,r),P(c.$$.fragment,r),P(p.$$.fragment,r),P(i.$$.fragment,r),v=!1},d(r){r&&z(e),M(l),M(c),M(p),M(i)}}}class qe extends H{constructor(e){super(),G(this,e,null,Pe,R,{})}}function Ie(t){let e,n,l;return{c(){e=f("h1"),e.innerHTML="Doctor Giuseppe Sierra <br/> @gsierra",n=b(),l=f("p"),l.innerHTML=`<big>Bienvenido al sitio web del Dr. Giuseppe Sierra, donde encontrarás una
      variedad de
      <strong>recursos diseñados para mejorar tu bienestar y conocimiento.</strong></big>`,u(e,"class","svelte-r86me0"),u(l,"class","svelte-r86me0")},m(s,c){x(s,e,c),x(s,n,c),x(s,l,c)},p:A,i:A,o:A,d(s){s&&(z(e),z(n),z(l))}}}class Te extends H{constructor(e){super(),G(this,e,null,Ie,R,{})}}function Re(t){let e;return{c(){e=f("h2"),e.textContent="Consulta con un especialista"},m(n,l){x(n,e,l)},p:A,i:A,o:A,d(n){n&&z(e)}}}class re extends H{constructor(e){super(),G(this,e,null,Re,R,{})}}function ae(t,e,n){const l=t.slice();return l[2]=e[n],l}function ue(t){let e;return{c(){e=f("hr"),u(e,"class","svelte-1nz1cxg")},m(n,l){x(n,e,l)},d(n){n&&z(e)}}}function de(t){let e,n,l,s,c,d,p=t[2].index!==Object.values(t[1]).length,m,i,v,r;function h(){return t[5](t[2])}let o=p&&ue();return{c(){e=f("div"),n=f("button"),l=f("i"),d=b(),o&&o.c(),m=b(),u(l,"class",s="las la-"+t[2].icon+" svelte-1nz1cxg"),u(n,"class",c="step "+(t[2].delay?"delay":"")+" full-w svelte-1nz1cxg"),u(e,"class",i="step-container "+(t[2].done?"done":"")+" svelte-1nz1cxg")},m(_,g){x(_,e,g),a(e,n),a(n,l),a(e,d),o&&o.m(e,null),a(e,m),v||(r=D(n,"click",h),v=!0)},p(_,g){t=_,g&2&&s!==(s="las la-"+t[2].icon+" svelte-1nz1cxg")&&u(l,"class",s),g&2&&c!==(c="step "+(t[2].delay?"delay":"")+" full-w svelte-1nz1cxg")&&u(n,"class",c),g&2&&(p=t[2].index!==Object.values(t[1]).length),p?o||(o=ue(),o.c(),o.m(e,m)):o&&(o.d(1),o=null),g&2&&i!==(i="step-container "+(t[2].done?"done":"")+" svelte-1nz1cxg")&&u(e,"class",i)},d(_){_&&z(e),o&&o.d(),v=!1,r()}}}function fe(t){let e,n,l,s,c,d,p,m,i,v,r,h,o,_,g,C,k,w,S,y,$;return{c(){e=f("article"),n=f("div"),l=f("button"),s=f("div"),d=b(),p=f("div"),p.textContent="Consulta Médica",m=b(),i=f("button"),v=f("div"),h=b(),o=f("div"),o.textContent="Consulta Académica",_=b(),g=f("button"),C=f("div"),w=b(),S=f("div"),S.textContent="Consulta Comercial",u(s,"class",c="consult-type-radio "+(t[0]=="medical"?"check":"")+" svelte-1nz1cxg"),u(p,"class","consult-type-title svelte-1nz1cxg"),u(l,"class","consult-type svelte-1nz1cxg"),u(v,"class",r="consult-type-radio "+(t[0]=="academy"?"check":"")+" svelte-1nz1cxg"),u(o,"class","consult-type-title svelte-1nz1cxg"),u(i,"class","consult-type svelte-1nz1cxg"),u(C,"class",k="consult-type-radio "+(t[0]=="comercial"?"check":"")+" svelte-1nz1cxg"),u(S,"class","consult-type-title svelte-1nz1cxg"),u(g,"class","consult-type svelte-1nz1cxg"),u(n,"id","step-1"),u(n,"class","svelte-1nz1cxg")},m(E,O){x(E,e,O),a(e,n),a(n,l),a(l,s),a(l,d),a(l,p),a(n,m),a(n,i),a(i,v),a(i,h),a(i,o),a(n,_),a(n,g),a(g,C),a(g,w),a(g,S),y||($=[D(l,"click",t[6]),D(i,"click",t[7]),D(g,"click",t[8])],y=!0)},p(E,O){O&1&&c!==(c="consult-type-radio "+(E[0]=="medical"?"check":"")+" svelte-1nz1cxg")&&u(s,"class",c),O&1&&r!==(r="consult-type-radio "+(E[0]=="academy"?"check":"")+" svelte-1nz1cxg")&&u(v,"class",r),O&1&&k!==(k="consult-type-radio "+(E[0]=="comercial"?"check":"")+" svelte-1nz1cxg")&&u(C,"class",k)},d(E){E&&z(e),y=!1,T($)}}}function me(t){let e;return{c(){e=f("article"),e.innerHTML=`<div id="step-2"><iframe title="" style="border-radius: 1em; padding-top: 2em" src="https://docs.google.com/forms/d/e/1FAIpQLSfMSEWOdMxqsRik4cZetv5fIEw-qBBg1QwP2hsjcrD88fzuYA/viewform?embedded=true" width="100%" height="720px" frameborder="0" marginheight="500" marginwidth="0">Cargando…</iframe> <script>var iframe = document.getElementById("myiframe");
        iframe.width = iframe.contentWindow.document.body.scrollWidth;
        iframe.height = iframe.contentWindow.document.body.scrollHeight;<\/script></div>`},m(n,l){x(n,e,l)},d(n){n&&z(e)}}}function pe(t){let e,n,l,s,c,d,p,m,i,v,r,h,o,_,g,C,k,w,S,y,$,E,O;return{c(){e=f("article"),n=f("h3"),n.textContent="Tipo de Consulta",l=b(),s=f("div"),c=f("button"),d=f("div"),m=b(),i=f("div"),i.textContent="Consulta Médica",v=b(),r=f("button"),h=f("div"),_=b(),g=f("div"),g.textContent="Consulta Académica",C=b(),k=f("button"),w=f("div"),y=b(),$=f("div"),$.textContent="Consulta Comercial",u(d,"class",p="consult-type-radio "+(t[0]=="medical"?"check":"")+" svelte-1nz1cxg"),u(i,"class","consult-type-title svelte-1nz1cxg"),u(c,"class","consult-type svelte-1nz1cxg"),u(h,"class",o="consult-type-radio "+(t[0]=="academy"?"check":"")+" svelte-1nz1cxg"),u(g,"class","consult-type-title svelte-1nz1cxg"),u(r,"class","consult-type svelte-1nz1cxg"),u(w,"class",S="consult-type-radio "+(t[0]=="comercial"?"check":"")+" svelte-1nz1cxg"),u($,"class","consult-type-title svelte-1nz1cxg"),u(k,"class","consult-type svelte-1nz1cxg"),u(s,"id","step-1"),u(s,"class","svelte-1nz1cxg")},m(j,L){x(j,e,L),a(e,n),a(e,l),a(e,s),a(s,c),a(c,d),a(c,m),a(c,i),a(s,v),a(s,r),a(r,h),a(r,_),a(r,g),a(s,C),a(s,k),a(k,w),a(k,y),a(k,$),E||(O=[D(c,"click",t[9]),D(r,"click",t[10]),D(k,"click",t[11])],E=!0)},p(j,L){L&1&&p!==(p="consult-type-radio "+(j[0]=="medical"?"check":"")+" svelte-1nz1cxg")&&u(d,"class",p),L&1&&o!==(o="consult-type-radio "+(j[0]=="academy"?"check":"")+" svelte-1nz1cxg")&&u(h,"class",o),L&1&&S!==(S="consult-type-radio "+(j[0]=="comercial"?"check":"")+" svelte-1nz1cxg")&&u(w,"class",S)},d(j){j&&z(e),E=!1,T(O)}}}function ve(t){let e,n,l,s,c,d,p,m,i,v,r,h,o,_,g,C,k,w,S,y,$,E,O;return{c(){e=f("article"),n=f("h3"),n.textContent="Tipo de Consulta",l=b(),s=f("div"),c=f("button"),d=f("div"),m=b(),i=f("div"),i.textContent="Consulta Médica",v=b(),r=f("button"),h=f("div"),_=b(),g=f("div"),g.textContent="Consulta Académica",C=b(),k=f("button"),w=f("div"),y=b(),$=f("div"),$.textContent="Consulta Comercial",u(d,"class",p="consult-type-radio "+(t[0]=="medical"?"check":"")+" svelte-1nz1cxg"),u(i,"class","consult-type-title svelte-1nz1cxg"),u(c,"class","consult-type svelte-1nz1cxg"),u(h,"class",o="consult-type-radio "+(t[0]=="academy"?"check":"")+" svelte-1nz1cxg"),u(g,"class","consult-type-title svelte-1nz1cxg"),u(r,"class","consult-type svelte-1nz1cxg"),u(w,"class",S="consult-type-radio "+(t[0]=="comercial"?"check":"")+" svelte-1nz1cxg"),u($,"class","consult-type-title svelte-1nz1cxg"),u(k,"class","consult-type svelte-1nz1cxg"),u(s,"id","step-1"),u(s,"class","svelte-1nz1cxg")},m(j,L){x(j,e,L),a(e,n),a(e,l),a(e,s),a(s,c),a(c,d),a(c,m),a(c,i),a(s,v),a(s,r),a(r,h),a(r,_),a(r,g),a(s,C),a(s,k),a(k,w),a(k,y),a(k,$),E||(O=[D(c,"click",t[12]),D(r,"click",t[13]),D(k,"click",t[14])],E=!0)},p(j,L){L&1&&p!==(p="consult-type-radio "+(j[0]=="medical"?"check":"")+" svelte-1nz1cxg")&&u(d,"class",p),L&1&&o!==(o="consult-type-radio "+(j[0]=="academy"?"check":"")+" svelte-1nz1cxg")&&u(h,"class",o),L&1&&S!==(S="consult-type-radio "+(j[0]=="comercial"?"check":"")+" svelte-1nz1cxg")&&u(w,"class",S)},d(j){j&&z(e),E=!1,T(O)}}}function Ge(t){let e,n,l,s,c,d,p=ie(Object.values(t[1])),m=[];for(let o=0;o<p.length;o+=1)m[o]=de(ae(t,p,o));let i=t[2]===1&&fe(t),v=t[2]===2&&me(),r=t[2]===3&&pe(t),h=t[2]===4&&ve(t);return{c(){e=f("div");for(let o=0;o<m.length;o+=1)m[o].c();n=b(),i&&i.c(),l=b(),v&&v.c(),s=b(),r&&r.c(),c=b(),h&&h.c(),d=ze(),u(e,"id","progress"),u(e,"class","svelte-1nz1cxg")},m(o,_){x(o,e,_);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(e,null);x(o,n,_),i&&i.m(o,_),x(o,l,_),v&&v.m(o,_),x(o,s,_),r&&r.m(o,_),x(o,c,_),h&&h.m(o,_),x(o,d,_)},p(o,[_]){if(_&18){p=ie(Object.values(o[1]));let g;for(g=0;g<p.length;g+=1){const C=ae(o,p,g);m[g]?m[g].p(C,_):(m[g]=de(C),m[g].c(),m[g].m(e,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=p.length}o[2]===1?i?i.p(o,_):(i=fe(o),i.c(),i.m(l.parentNode,l)):i&&(i.d(1),i=null),o[2]===2?v||(v=me(),v.c(),v.m(s.parentNode,s)):v&&(v.d(1),v=null),o[2]===3?r?r.p(o,_):(r=pe(o),r.c(),r.m(c.parentNode,c)):r&&(r.d(1),r=null),o[2]===4?h?h.p(o,_):(h=ve(o),h.c(),h.m(d.parentNode,d)):h&&(h.d(1),h=null)},i:A,o:A,d(o){o&&(z(e),z(n),z(l),z(s),z(c),z(d)),$e(m,o),i&&i.d(o),v&&v.d(o),r&&r.d(o),h&&h.d(o)}}}function He(t,e,n){let l="",s=1,c={1:{index:1,icon:"check",done:!1,donnete:!1,delay:!1},2:{index:2,icon:"pencil-alt",done:!1,donnete:!1,delay:!1},3:{index:3,icon:"clock",done:!1,donnete:!1,delay:!1},4:{index:4,icon:"check-double",done:!1,donnete:!1,delay:!1}};function d(){n(1,c[s].done=!0,c),setTimeout(()=>{n(1,c[s].delay=!0,c),n(2,s++,s)},100)}async function p(w){let S=Object.keys(c).length;if(c[w].done){async function y($){if($>w-1){if(console.log(s),n(1,c[$].done=!1,c),c[$].delay){setTimeout(()=>{n(1,c[$].delay=!1,c),y($)},200);return}y($-1)}}await y(S).then(n(2,s=w))}}return[l,c,s,d,p,w=>{p(w.index)},()=>{n(0,l="medical"),d()},()=>{n(0,l="academy"),d()},()=>{n(0,l="comercial"),d()},()=>{n(0,l="medical"),d()},()=>{n(0,l="academy"),d()},()=>{n(0,l="comercial"),d()},()=>{n(0,l="medical"),d()},()=>{n(0,l="academy"),d()},()=>{n(0,l="comercial"),d()}]}class Fe extends H{constructor(e){super(),G(this,e,He,Ge,R,{})}}function We(t){let e;return{c(){e=f("details"),e.innerHTML=`<summary class="svelte-usm7ls">Más detalles</summary> <div class="svelte-usm7ls"><big><ul class="svelte-usm7ls"><li class="svelte-usm7ls"><i class="las la-microphone"></i> <strong>Giuseppe Sierra Podcast:</strong> <br/> Escucha los episodios más recientes del podcast del Dr. Sierra,
            donde se discuten temas de salud, innovación y bienestar.</li> <li class="svelte-usm7ls"><strong>Píldoras de Salud:</strong> <br/> Descubre consejos y recomendaciones breves y efectivas para
            mejorar tu salud diaria.</li> <li class="svelte-usm7ls"><strong>Un Antes y un Después:</strong> <br/> Historias inspiradoras de transformaciones personales y cómo
            el enfoque del Dr. Sierra ha marcado una diferencia.</li> <li class="svelte-usm7ls"><strong>Sistema GSierra:</strong> <br/> Aprende sobre el innovador Sistema GSierra, una metodología
            diseñada para optimizar tu bienestar mental y físico.</li> <li class="svelte-usm7ls"><strong>Productos e Inventos:</strong> <br/>Explora los productos e inventos desarrollados por el Dr.
            Sierra para mejorar la calidad de vida.</li> <li class="svelte-usm7ls"><strong>Reservar Consulta Privada:</strong> <br/> Reserva una consulta privada con el Dr. Sierra para recibir
            asesoramiento personalizado.</li> <li class="svelte-usm7ls"><strong>Libros de Giuseppe Sierra:</strong> <br/>Descubre la colección de libros escritos por el Dr. Sierra,
            llenos de conocimientos y estrategias para un mejor vivir.</li> <li class="svelte-usm7ls"><strong>Patrocinadores:</strong> <br/> Conoce a los patrocinadores que apoyan las iniciativas y proyectos
            del Dr. Sierra y conviertete en uno!</li></ul></big></div>`,u(e,"class","svelte-usm7ls")},m(n,l){x(n,e,l)},p:A,i:A,o:A,d(n){n&&z(e)}}}class Qe extends H{constructor(e){super(),G(this,e,null,We,R,{})}}function Ue(t){let e,n,l,s,c,d,p,m,i,v,r,h,o,_,g,C,k,w,S;return n=new qe({}),c=new Te({}),m=new Fe({}),r=new re({}),_=new re({}),C=new Qe({}),{c(){e=f("main"),q(n.$$.fragment),l=b(),s=f("section"),q(c.$$.fragment),d=b(),p=f("section"),q(m.$$.fragment),i=b(),v=f("section"),q(r.$$.fragment),h=b(),o=f("section"),q(_.$$.fragment),g=b(),q(C.$$.fragment),k=b(),w=f("footer"),u(s,"id","home"),u(s,"class","card svelte-101x3sq"),u(p,"id","consult"),u(p,"class","card not-active svelte-101x3sq"),u(v,"id","blog"),u(v,"class","card not-active svelte-101x3sq"),u(o,"id","people"),u(o,"class","card not-active svelte-101x3sq")},m(y,$){x(y,e,$),B(n,e,null),a(e,l),a(e,s),B(c,s,null),a(e,d),a(e,p),B(m,p,null),a(e,i),a(e,v),B(r,v,null),a(e,h),a(e,o),B(_,o,null),a(e,g),B(C,e,null),x(y,k,$),x(y,w,$),S=!0},p:A,i(y){S||(N(n.$$.fragment,y),N(c.$$.fragment,y),N(m.$$.fragment,y),N(r.$$.fragment,y),N(_.$$.fragment,y),N(C.$$.fragment,y),S=!0)},o(y){P(n.$$.fragment,y),P(c.$$.fragment,y),P(m.$$.fragment,y),P(r.$$.fragment,y),P(_.$$.fragment,y),P(C.$$.fragment,y),S=!1},d(y){y&&(z(e),z(k),z(w)),M(n),M(c),M(m),M(r),M(_),M(C)}}}function Ke(t){return[]}class Ve extends H{constructor(e){super(),G(this,e,Ke,Ue,R,{})}}function U(t){document.querySelectorAll("section").forEach(e=>{e.id!=t?e.classList.add("not-active"):document.getElementById(t).classList.remove("not-active")})}function Ye(){U("home")}function Ze(){U("blog")}function Je(){U("people")}function Xe(){console.log("books"),fetch("https://fakestoreapi.com/products").then(t=>t.json()).then(t=>console.log(t))}function et(){U("consult")}function tt(){U("podcasts")}function nt(){U("patrons")}function lt(t){if(t==="podcasts")tt();else if(t==="home")Ye();else if(t==="books")Xe();else if(t==="blog")Ze();else if(t==="people")Je();else if(t==="consult")et();else if(t==="patrons")nt();else return}new Ve({target:document.getElementById("app")});