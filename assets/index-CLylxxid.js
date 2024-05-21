var Xe=Object.defineProperty;var Ze=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ie=(e,t,n)=>(Ze(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function L(){}function je(e){return e()}function Fe(){return Object.create(null)}function ne(e){e.forEach(je)}function ue(e){return typeof e=="function"}function ce(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ue(e){return Object.keys(e).length===0}function Ge(e){return e??""}function l(e,t){e.appendChild(t)}function V(e,t,n){e.insertBefore(t,n||null)}function U(e){e.parentNode&&e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function de(e){return document.createTextNode(e)}function u(){return de(" ")}function qe(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function p(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Qe(e){return Array.from(e.childNodes)}function Be(e,t){t=""+t,e.data!==t&&(e.data=t)}let he;function z(e){he=e}const Z=[],He=[];let q=[];const Te=[],Ve=Promise.resolve();let fe=!1;function ze(){fe||(fe=!0,Ve.then(Re))}function oe(e){q.push(e)}const le=new Set;let X=0;function Re(){if(X!==0)return;const e=he;do{try{for(;X<Z.length;){const t=Z[X];X++,z(t),Je(t.$$)}}catch(t){throw Z.length=0,X=0,t}for(z(null),Z.length=0,X=0;He.length;)He.pop()();for(let t=0;t<q.length;t+=1){const n=q[t];le.has(n)||(le.add(n),n())}q.length=0}while(Z.length);for(;Te.length;)Te.pop()();fe=!1,le.clear(),z(e)}function Je(e){if(e.fragment!==null){e.update(),ne(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}function Ke(e){const t=[],n=[];q.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),q=t}const te=new Set;let We;function c(e,t){e&&e.i&&(te.delete(e),e.i(t))}function m(e,t,n,s){if(e&&e.o){if(te.has(e))return;te.add(e),We.c.push(()=>{te.delete(e)}),e.o(t)}}function $(e){e&&e.c()}function d(e,t,n){const{fragment:s,after_update:i}=e.$$;s&&s.m(t,n),oe(()=>{const r=e.$$.on_mount.map(je).filter(ue);e.$$.on_destroy?e.$$.on_destroy.push(...r):ne(r),e.$$.on_mount=[]}),i.forEach(oe)}function h(e,t){const n=e.$$;n.fragment!==null&&(Ke(n.after_update),ne(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ye(e,t){e.$$.dirty[0]===-1&&(Z.push(e),ze(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ge(e,t,n,s,i,r,f=null,b=[-1]){const v=he;z(e);const g=e.$$={fragment:null,ctx:[],props:r,update:L,not_equal:i,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(v?v.$$.context:[])),callbacks:Fe(),dirty:b,skip_bound:!1,root:t.target||v.$$.root};f&&f(g.root);let w=!1;if(g.ctx=n?n(e,t.props||{},(y,k,...Q)=>{const S=Q.length?Q[0]:k;return g.ctx&&i(g.ctx[y],g.ctx[y]=S)&&(!g.skip_bound&&g.bound[y]&&g.bound[y](S),w&&Ye(e,y)),k}):[],g.update(),w=!0,ne(g.before_update),g.fragment=s?s(g.ctx):!1,t.target){if(t.hydrate){const y=Qe(t.target);g.fragment&&g.fragment.l(y),y.forEach(U)}else g.fragment&&g.fragment.c();t.intro&&c(e.$$.fragment),d(e,t.target,t.anchor),Re()}z(v)}class me{constructor(){ie(this,"$$");ie(this,"$$set")}$destroy(){h(this,1),this.$destroy=L}$on(t,n){if(!ue(n))return L;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(t){this.$$set&&!Ue(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const xe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xe);function et(e){let t,n,s,i,r;return{c(){t=_("a"),n=_("i"),i=u(),r=de(e[0]),p(n,"class",s=Ge(e[1])+" svelte-pbhsa0"),p(t,"href","/"),p(t,"id","button"),p(t,"class","svelte-pbhsa0")},m(f,b){V(f,t,b),l(t,n),l(t,i),l(t,r)},p(f,[b]){b&2&&s!==(s=Ge(f[1])+" svelte-pbhsa0")&&p(n,"class",s),b&1&&Be(r,f[0])},i:L,o:L,d(f){f&&U(t)}}}function tt(e,t,n){let{href:s}=t,{handleClick:i}=t,{icon:r}=t;return e.$$set=f=>{"href"in f&&n(0,s=f.href),"handleClick"in f&&n(2,i=f.handleClick),"icon"in f&&n(1,r=f.icon)},[s,r,i]}class E extends me{constructor(t){super(),ge(this,t,tt,et,ce,{href:0,handleClick:2,icon:1})}}function nt(e){let t,n,s,i,r;return{c(){t=_("a"),n=_("button"),s=de(e[0]),p(n,"class","svelte-19evb7n"),p(t,"href",e[0])},m(f,b){V(f,t,b),l(t,n),l(n,s),i||(r=qe(n,"click",function(){ue(e[1])&&e[1].apply(this,arguments)}),i=!0)},p(f,[b]){e=f,b&1&&Be(s,e[0]),b&1&&p(t,"href",e[0])},i:L,o:L,d(f){f&&U(t),i=!1,r()}}}function rt(e,t,n){let{href:s}=t,{handleClick:i}=t;return e.$$set=r=>{"href"in r&&n(0,s=r.href),"handleClick"in r&&n(1,i=r.handleClick)},[s,i]}class C extends me{constructor(t){super(),ge(this,t,rt,nt,ce,{href:0,handleClick:1})}}function at(e){let t,n,s,i,r,f,b,v,g,w,y,k,Q,S,$e,P,pe,O,_e,A,be,J,ve,K,ye,W,Ce,Y,we,o,x,ke,D,Se,N,Ee,I,Le,M,Pe,F,Oe,G,Ae,H,De,T,Ne,j,Ie,B,Me,R,re,ae,ee;return f=new E({props:{href:"Giuseppe Sierra Podcast",handleClick:e[0],icon:"las la-microphone"}}),v=new E({props:{href:"Pildoras de Salud",handleClick:e[0],icon:"las la-capsules"}}),w=new E({props:{href:"El Antes y el Después",handleClick:e[0],icon:"las la-smile"}}),k=new E({props:{href:"Concertar Consulta Privada",handleClick:e[0],icon:"las la-phone"}}),S=new E({props:{href:"Productos e Inventos",handleClick:e[0],icon:"las la-box"}}),P=new E({props:{href:"Sistema GSierra",handleClick:e[0],icon:"las la-brain"}}),O=new E({props:{href:"Libros de Giuseppe Sierra",handleClick:e[0],icon:"las la-book"}}),A=new E({props:{href:"Comunidad y Fans @gsierra",handleClick:e[0],icon:"las la-users"}}),D=new C({props:{href:"#Running",handleClick:e[0]}}),N=new C({props:{href:"#Diseño3D",handleClick:e[0]}}),I=new C({props:{href:"#Impresion3D",handleClick:e[0]}}),M=new C({props:{href:"#Salud",handleClick:e[0]}}),F=new C({props:{href:"#Trumatologia",handleClick:e[0]}}),G=new C({props:{href:"#Ortopedia",handleClick:e[0]}}),H=new C({props:{href:"#Medicina",handleClick:e[0]}}),T=new C({props:{href:"#Química",handleClick:e[0]}}),j=new C({props:{href:"#Biologia",handleClick:e[0]}}),B=new C({props:{href:"#Agricultura",handleClick:e[0]}}),R=new C({props:{href:"#Ganaderia",handleClick:e[0]}}),{c(){t=_("main"),n=_("nav"),s=_("h1"),s.textContent="Doc. Giuseppe Sierra @gsierra",i=u(),r=_("div"),$(f.$$.fragment),b=u(),$(v.$$.fragment),g=u(),$(w.$$.fragment),y=u(),$(k.$$.fragment),Q=u(),$(S.$$.fragment),$e=u(),$(P.$$.fragment),pe=u(),$(O.$$.fragment),_e=u(),$(A.$$.fragment),be=u(),J=_("section"),J.innerHTML='<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zIXMJZHhNQgeBndy9CwrRgSRjlxj3no1onbOVd-r6qf7DmXUP_FL8owiZpoFiaXbEg5nxFtSX?gv=true" style="border: 0" width="100%" height="600" frameborder="0"></iframe>',ve=u(),K=_("section"),K.innerHTML='<h2 class="svelte-gb92go">Experiencia Compartida</h2> <h3>Pildoras de Salud</h3> <h3>Un antes y un despues</h3> <h3>Libros de Giuseppe Sierra</h3>',ye=u(),W=_("section"),W.innerHTML='<h2 class="svelte-gb92go">Diseño e Impresion 3D</h2> <h3>Aplicación en el campo de la Ortopedia y Traumatologia</h3> <h3>Curso práctico en Impresion 3D aplicada a la Medicina</h3> <h3>Productos 3D de Giuseppe Sierra</h3>',Ce=u(),Y=_("section"),Y.innerHTML='<h2 class="svelte-gb92go">@gisierra</h2> <h3>Comunidad de Fans</h3> <h3>Plataformas Sociales</h3> <h3>Podcasts y Eventos</h3>',we=u(),o=_("aside"),x=_("h2"),x.textContent="#️⃣ Filtrar por Hastags",ke=u(),$(D.$$.fragment),Se=u(),$(N.$$.fragment),Ee=u(),$(I.$$.fragment),Le=u(),$(M.$$.fragment),Pe=u(),$(F.$$.fragment),Oe=u(),$(G.$$.fragment),Ae=u(),$(H.$$.fragment),De=u(),$(T.$$.fragment),Ne=u(),$(j.$$.fragment),Ie=u(),$(B.$$.fragment),Me=u(),$(R.$$.fragment),re=u(),ae=_("footer"),p(s,"class","svelte-gb92go"),p(r,"class","nav-col svelte-gb92go"),p(n,"class","card"),p(J,"class","svelte-gb92go"),p(K,"class","card svelte-gb92go"),p(W,"class","card svelte-gb92go"),p(Y,"class","card svelte-gb92go"),p(x,"class","svelte-gb92go"),p(o,"class","card")},m(a,se){V(a,t,se),l(t,n),l(n,s),l(n,i),l(n,r),d(f,r,null),l(r,b),d(v,r,null),l(r,g),d(w,r,null),l(r,y),d(k,r,null),l(r,Q),d(S,r,null),l(r,$e),d(P,r,null),l(r,pe),d(O,r,null),l(r,_e),d(A,r,null),l(t,be),l(t,J),l(t,ve),l(t,K),l(t,ye),l(t,W),l(t,Ce),l(t,Y),l(t,we),l(t,o),l(o,x),l(o,ke),d(D,o,null),l(o,Se),d(N,o,null),l(o,Ee),d(I,o,null),l(o,Le),d(M,o,null),l(o,Pe),d(F,o,null),l(o,Oe),d(G,o,null),l(o,Ae),d(H,o,null),l(o,De),d(T,o,null),l(o,Ne),d(j,o,null),l(o,Ie),d(B,o,null),l(o,Me),d(R,o,null),V(a,re,se),V(a,ae,se),ee=!0},p:L,i(a){ee||(c(f.$$.fragment,a),c(v.$$.fragment,a),c(w.$$.fragment,a),c(k.$$.fragment,a),c(S.$$.fragment,a),c(P.$$.fragment,a),c(O.$$.fragment,a),c(A.$$.fragment,a),c(D.$$.fragment,a),c(N.$$.fragment,a),c(I.$$.fragment,a),c(M.$$.fragment,a),c(F.$$.fragment,a),c(G.$$.fragment,a),c(H.$$.fragment,a),c(T.$$.fragment,a),c(j.$$.fragment,a),c(B.$$.fragment,a),c(R.$$.fragment,a),ee=!0)},o(a){m(f.$$.fragment,a),m(v.$$.fragment,a),m(w.$$.fragment,a),m(k.$$.fragment,a),m(S.$$.fragment,a),m(P.$$.fragment,a),m(O.$$.fragment,a),m(A.$$.fragment,a),m(D.$$.fragment,a),m(N.$$.fragment,a),m(I.$$.fragment,a),m(M.$$.fragment,a),m(F.$$.fragment,a),m(G.$$.fragment,a),m(H.$$.fragment,a),m(T.$$.fragment,a),m(j.$$.fragment,a),m(B.$$.fragment,a),m(R.$$.fragment,a),ee=!1},d(a){a&&(U(t),U(re),U(ae)),h(f),h(v),h(w),h(k),h(S),h(P),h(O),h(A),h(D),h(N),h(I),h(M),h(F),h(G),h(H),h(T),h(j),h(B),h(R)}}}function st(e){return[()=>{}]}class it extends me{constructor(t){super(),ge(this,t,st,at,ce,{})}}new it({target:document.getElementById("app")});
