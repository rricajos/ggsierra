var ce=Object.defineProperty;var ue=(e,t,n)=>t in e?ce(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var H=(e,t,n)=>(ue(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function S(){}function se(e){return e()}function ee(){return Object.create(null)}function G(e){e.forEach(se)}function re(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function de(e){return Object.keys(e).length===0}function te(e){return e??""}function u(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e){return document.createElement(e)}function oe(e){return document.createTextNode(e)}function h(){return oe(" ")}function fe(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function m(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}let U;function B(e){U=e}const D=[],Q=[];let O=[];const ne=[],ge=Promise.resolve();let V=!1;function he(){V||(V=!0,ge.then(ae))}function X(e){O.push(e)}const F=new Set;let C=0;function ae(){if(C!==0)return;const e=U;do{try{for(;C<D.length;){const t=D[C];C++,B(t),ve(t.$$)}}catch(t){throw D.length=0,C=0,t}for(B(null),D.length=0,C=0;Q.length;)Q.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];F.has(n)||(F.add(n),n())}O.length=0}while(D.length);for(;ne.length;)ne.pop()();V=!1,F.clear(),B(e)}function ve(e){if(e.fragment!==null){e.update(),G(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(X)}}function ye(e){const t=[],n=[];O.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),O=t}const R=new Set;let be;function b(e,t){e&&e.i&&(R.delete(e),e.i(t))}function w(e,t,n,o){if(e&&e.o){if(R.has(e))return;R.add(e),be.c.push(()=>{R.delete(e)}),e.o(t)}}function x(e){e&&e.c()}function $(e,t,n){const{fragment:o,after_update:s}=e.$$;o&&o.m(t,n),X(()=>{const i=e.$$.on_mount.map(se).filter(re);e.$$.on_destroy?e.$$.on_destroy.push(...i):G(i),e.$$.on_mount=[]}),s.forEach(X)}function _(e,t){const n=e.$$;n.fragment!==null&&(ye(n.after_update),G(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){e.$$.dirty[0]===-1&&(D.push(e),he(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Z(e,t,n,o,s,i,a=null,d=[-1]){const f=U;B(e);const r=e.$$={fragment:null,ctx:[],props:i,update:S,not_equal:s,bound:ee(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:ee(),dirty:d,skip_bound:!1,root:t.target||f.$$.root};a&&a(r.root);let p=!1;if(r.ctx=n?n(e,t.props||{},(l,g,...v)=>{const M=v.length?v[0]:g;return r.ctx&&s(r.ctx[l],r.ctx[l]=M)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](M),p&&$e(e,l)),g}):[],r.update(),p=!0,G(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){const l=pe(t.target);r.fragment&&r.fragment.l(l),l.forEach(j)}else r.fragment&&r.fragment.c();t.intro&&b(e.$$.fragment),$(e,t.target,t.anchor),ae()}B(f)}class z{constructor(){H(this,"$$");H(this,"$$set")}$destroy(){_(this,1),this.$destroy=S}$on(t,n){if(!re(n))return S;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!de(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);function we(e){let t,n,o,s,i,a,d,f,r;return{c(){t=y("button"),n=y("a"),o=y("i"),i=h(),a=oe(e[1]),m(o,"class",s=te(e[2])+" svelte-axujyg"),m(n,"href",d="#"+e[0]),m(n,"class","svelte-axujyg"),m(t,"class","svelte-axujyg")},m(p,l){N(p,t,l),u(t,n),u(n,o),u(n,i),u(n,a),e[5](t),f||(r=fe(t,"click",e[4]),f=!0)},p(p,[l]){l&4&&s!==(s=te(p[2])+" svelte-axujyg")&&m(o,"class",s),l&2&&me(a,p[1]),l&1&&d!==(d="#"+p[0])&&m(n,"href",d)},i:S,o:S,d(p){p&&j(t),e[5](null),f=!1,r()}}}function xe(e,t,n){let{fun:o}=t,{title:s}=t,{icon:i}=t,a,d=()=>{Me(o)};function f(r){Q[r?"unshift":"push"](()=>{a=r,n(3,a)})}return e.$$set=r=>{"fun"in r&&n(0,o=r.fun),"title"in r&&n(1,s=r.title),"icon"in r&&n(2,i=r.icon)},[o,s,i,a,d,f]}class P extends z{constructor(t){super(),Z(this,t,xe,we,T,{fun:0,title:1,icon:2})}}function Se(e){let t;return{c(){t=y("details"),t.innerHTML=`<summary class="svelte-txcdw9">Más detalles</summary> <div class="svelte-txcdw9"><big><ul class="svelte-txcdw9"><li class="svelte-txcdw9"><i class="las la-microphone"></i> <strong>Giuseppe Sierra Podcast:</strong> <br/> Escucha los episodios más recientes del podcast del Dr. Sierra,
            donde se discuten temas de salud, innovación y bienestar.</li> <li class="svelte-txcdw9"><strong>Píldoras de Salud:</strong> <br/> Descubre consejos y recomendaciones breves y efectivas para
            mejorar tu salud diaria.</li> <li class="svelte-txcdw9"><strong>Un Antes y un Después:</strong> <br/> Historias inspiradoras de transformaciones personales y cómo
            el enfoque del Dr. Sierra ha marcado una diferencia.</li> <li class="svelte-txcdw9"><strong>Sistema GSierra:</strong> <br/> Aprende sobre el innovador Sistema GSierra, una metodología
            diseñada para optimizar tu bienestar mental y físico.</li> <li class="svelte-txcdw9"><strong>Productos e Inventos:</strong> <br/>Explora los productos e inventos desarrollados por el Dr.
            Sierra para mejorar la calidad de vida.</li> <li class="svelte-txcdw9"><strong>Reservar Consulta Privada:</strong> <br/> Reserva una consulta privada con el Dr. Sierra para recibir
            asesoramiento personalizado.</li> <li class="svelte-txcdw9"><strong>Libros de Giuseppe Sierra:</strong> <br/>Descubre la colección de libros escritos por el Dr. Sierra,
            llenos de conocimientos y estrategias para un mejor vivir.</li> <li class="svelte-txcdw9"><strong>Patrocinadores:</strong> <br/> Conoce a los patrocinadores que apoyan las iniciativas y proyectos
            del Dr. Sierra y conviertete en uno!</li></ul></big></div>`,m(t,"class","svelte-txcdw9")},m(n,o){N(n,t,o)},p:S,i:S,o:S,d(n){n&&j(t)}}}class Pe extends z{constructor(t){super(),Z(this,t,null,Se,T,{})}}function je(e){let t,n,o,s,i,a,d,f,r,p,l,g,v,M,L,J,E,K,k,W,A,Y,q,I;return d=new P({props:{fun:"podcasts",title:"Sierra Podcast",icon:"las la-microphone"}}),r=new P({props:{fun:"pills",title:"Pildoras de Salud",icon:"las la-capsules"}}),l=new P({props:{fun:"podcasts",title:"Antes y Después",icon:"las la-smile"}}),v=new P({props:{fun:"podcasts",title:"Sistema GSierra",icon:"las la-brain"}}),L=new P({props:{fun:"podcasts",title:"Tienda Online",icon:"las la-lightbulb"}}),E=new P({props:{fun:"books",title:"Libros @gsierra",icon:"las la-book"}}),k=new P({props:{fun:"contact",title:"Consulta Privada",icon:"las la-phone"}}),A=new P({props:{fun:"patrons",title:"Patrocinadores",icon:"las la-users"}}),q=new Pe({}),{c(){t=y("nav"),n=y("h1"),n.textContent="Doctor Giuseppe Sierra @gsierra",o=h(),s=y("p"),s.innerHTML=`<big>Bienvenido al sitio web del Dr. Giuseppe Sierra, donde encontrarás una
      variedad de
      <strong>recursos diseñados para mejorar tu bienestar y conocimiento.</strong></big>`,i=h(),a=y("div"),x(d.$$.fragment),f=h(),x(r.$$.fragment),p=h(),x(l.$$.fragment),g=h(),x(v.$$.fragment),M=h(),x(L.$$.fragment),J=h(),x(E.$$.fragment),K=h(),x(k.$$.fragment),W=h(),x(A.$$.fragment),Y=h(),x(q.$$.fragment),m(n,"class","svelte-1ehn6d1"),m(s,"class","svelte-1ehn6d1"),m(a,"class","nav-col svelte-1ehn6d1"),m(t,"class","card")},m(c,le){N(c,t,le),u(t,n),u(t,o),u(t,s),u(t,i),u(t,a),$(d,a,null),u(a,f),$(r,a,null),u(a,p),$(l,a,null),u(a,g),$(v,a,null),u(a,M),$(L,a,null),u(a,J),$(E,a,null),u(a,K),$(k,a,null),u(a,W),$(A,a,null),u(t,Y),$(q,t,null),I=!0},p:S,i(c){I||(b(d.$$.fragment,c),b(r.$$.fragment,c),b(l.$$.fragment,c),b(v.$$.fragment,c),b(L.$$.fragment,c),b(E.$$.fragment,c),b(k.$$.fragment,c),b(A.$$.fragment,c),b(q.$$.fragment,c),I=!0)},o(c){w(d.$$.fragment,c),w(r.$$.fragment,c),w(l.$$.fragment,c),w(v.$$.fragment,c),w(L.$$.fragment,c),w(E.$$.fragment,c),w(k.$$.fragment,c),w(A.$$.fragment,c),w(q.$$.fragment,c),I=!1},d(c){c&&j(t),_(d),_(r),_(l),_(v),_(L),_(E),_(k),_(A),_(q)}}}class Le extends z{constructor(t){super(),Z(this,t,null,je,T,{})}}function Ee(e){let t,n,o,s,i,a,d,f,r,p,l;return n=new Le({}),{c(){t=y("main"),x(n.$$.fragment),o=h(),s=y("section"),s.innerHTML='<h2 class="svelte-s8251e">Sierra Podcast</h2> <div class="episodes svelte-s8251e"><button class="episode svelte-s8251e" data-spotify-id="spotify:episode:7makk4oTQel546B0PZlDM5">My Path to Spotify</button> <button class="episode svelte-s8251e" data-spotify-id="spotify:episode:43cbJh4ccRD7lzM2730YK3">What is Backstage?</button> <button class="episode svelte-s8251e" data-spotify-id="spotify:episode:6I3ZzCxRhRkNqnQNo8AZPV">Introducing Nerd Out@Spotify</button></div> <div id="embed-iframe"></div>',i=h(),a=y("section"),a.innerHTML=`<h2 class="svelte-s8251e">Patrocinadores</h2> <p>Crear una marca personal fuerte es esencial en el mundo actual, ya sea que
      esté buscando avanzar en mi carrera, atraer clientes o establecerme como
      un líder en mi industria. Los patrocinadores de mi marca personal juegan
      un papel crucial en este proceso. Aquí explico quiénes son y cómo pueden
      ayudarme:</p> <h3>¿Quiénes son los patrocinadores de mi marca personal?</h3> <ul><li>Mentores: Personas con más experiencia en mi campo que me guían y
        aconsejan sobre cómo mejorar mi imagen y estrategia de marca personal.</li> <li>Colegas y Amigos: Aquellos en mi red personal y profesional que apoyan y
        promocionan mis habilidades y logros.</li> <li>Empresas y Marcas: Compañías que ven el valor en asociarse conmigo
        debido a mi influencia y reputación, y que pueden ofrecerme
        oportunidades de patrocinio financiero o colaboraciones.</li> <li>Clientes y Seguidores: Personas que han tenido experiencias positivas
        conmigo y que comparten sus testimonios y recomiendan mis servicios o
        productos a otros.</li></ul> <h3>¿Cómo pueden ayudarme los patrocinadores?</h3> <ol><li>Visibilidad: Los patrocinadores pueden amplificar mi alcance,
        presentándome a nuevas audiencias a través de sus propias redes y
        plataformas.</li> <li>Credibilidad: Asociarme con marcas o individuos respetados puede
        aumentar mi credibilidad y validar mi autoridad en mi campo.</li> <li>Oportunidades: Los patrocinadores pueden abrir puertas a nuevas
        oportunidades de negocio, colaboraciones, conferencias y más.</li> <li>Recursos: Pueden ofrecerme recursos financieros, herramientas, formación
        y otros apoyos necesarios para desarrollar y mantener mi marca personal.</li></ol>`,d=h(),f=y("div"),r=h(),p=y("footer"),m(s,"id","podcasts"),m(s,"class","card not-active svelte-s8251e"),m(a,"id","patrons"),m(a,"class","card not-active svelte-s8251e"),m(f,"id","content")},m(g,v){N(g,t,v),$(n,t,null),u(t,o),u(t,s),u(t,i),u(t,a),u(t,d),u(t,f),N(g,r,v),N(g,p,v),l=!0},p:S,i(g){l||(b(n.$$.fragment,g),l=!0)},o(g){w(n.$$.fragment,g),l=!1},d(g){g&&(j(t),j(r),j(p)),_(n)}}}function ke(e){return[]}class Ae extends z{constructor(t){super(),Z(this,t,ke,Ee,T,{})}}function ie(e){document.querySelectorAll("section").forEach(t=>{t.id!=e?t.classList.add("not-active"):document.getElementById(e).classList.remove("not-active")})}function qe(){console.log("books"),fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>console.log(e))}function Ce(){console.log("pills"),fetch("https://fakestoreapi.com/products").then(e=>e.json()).then(e=>console.log(e))}function De(){window.open("https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zIXMJZHhNQgeBndy9CwrRgSRjlxj3no1onbOVd-r6qf7DmXUP_FL8owiZpoFiaXbEg5nxFtSX?gv=true","_blank").focus()}function Ne(){ie("podcasts")}function Oe(){ie("patrons")}function Me(e){if(e==="podcasts")Ne();else if(e==="books")qe();else if(e==="pills")Ce();else if(e==="contact")De();else if(e==="patrons")Oe();else return}new Ae({target:document.getElementById("app")});