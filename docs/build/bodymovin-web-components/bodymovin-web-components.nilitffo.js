/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='bodymovin-web-components']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,s=!1,i=!1,r=arguments.length;for(;r-- >2;)k.push(arguments[r]);for(;k.length>0;){let t=k.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)k.push(t[r]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&k.push(r);t.class=k.join(" "),k.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],j):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",s={},i={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,s)=>{let i=o.t+l,r=o[i];if((2===o.s||1===o.s&&!t.u.i)&&(s["s-sc"]=r?e(o,s.mode):e(o)),r){let e=n.p.head;if(n.i)if(1===o.s)e=s.shadowRoot;else{const t=s.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[i]){let t;{t=r.content.cloneNode(!0),l[i]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p=()=>{},b=(e,t,n,o,l,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?v(t,n,l):"ref"!==n&&(v(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS("http://www.w3.org/1999/xlink",u(t),n):e.setAttribute(t,n))})(t,n,l):(s||e.u.j(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),l?l!==o&&e.u.C(t,n,l):e.u.W(t,n);else if(o!==l){const e=m(o),n=m(l),s=e.filter(e=>!n.includes(e)),i=m(t.className).filter(e=>!s.includes(e)),r=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...r),t.className=i.join(" ")}},m=e=>null==e||""===e?[]:e.trim().split(/\s+/),v=(e,t,n)=>{try{e[t]=n}catch(e){}},y=(e,t,n,o,l)=>{const i=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||s,a=n.vattrs||s;for(l in r)a&&null!=a[l]||null==r[l]||b(e,i,l,r[l],void 0,o,n.l);for(l in a)l in r&&a[l]===("value"===l||"checked"===l?i[l]:r[l])||b(e,i,l,r[l],a[l],o,n.l)};let M=!1;const g=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{g(e,t)}))},$=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&i.then(()=>p(r))},read:u(a),write:u(c)}}},k=[],j={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},C=(e,t,n)=>{const[o,l,,s,i,r]=e,a={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)a[(n=s[t])[0]]={O:n[1],S:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},a),s:i,R:r?r.map(W):void 0}},W=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),N=(e,t)=>f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,O=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>S(e,t,n)):e.queue.tick(()=>S(e,t,n)))},S=async(e,n,l,s,i,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(i=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{S(e,n,l)});i=D(e,n,e.J.get(n),l)}((e,n,l,s)=>{try{const i=n.K.host,r=n.K.encapsulation,a="shadow"===r&&e.u.i;let c,f=l;if(a&&(f=l.shadowRoot),!l["s-rn"]){e.V(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.X(l,t(o,!0)),"scoped"===r&&e.u.X(l,t(o)))}if(s.render||s.hostData||i||c){e.Y=!0;const t=s.render&&s.render();let n;e.Y=!1;const i=o(null,n,t),c=e._.get(l)||{};c.o=f,e._.set(l,e.render(l,c,i,a,r))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e.Y=!1,e.ee(t,8,l,!0)}})(e,e.M(n),n,i),n["s-init"]()}},E=(e,t,n,o,l,s,i,r,a)=>{if(t.type){const c=e.te.get(n);!t.attr||void 0!==c[l]&&""!==c[l]||(r=s&&s.ne)&&f(a=r[t.attr])&&(c[l]=N(t.type,a)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=N(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),t.watchCallbacks&&(c[L+l]=t.watchCallbacks.slice()),R(o,l,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&t.mutable&&A(e,o,l,n,i)})}else t.method&&T(n,l,o[l].bind(o))},A=(e,t,n,o,l,s,i)=>{(i=e.te.get(t))||e.te.set(t,i={});const r=i[n];if(o!==r&&(i[n]=o,s=e.Z.get(t))){{const e=i[L+n];if(e)for(let t=0;t<e.length;t++)try{s[e[t]].call(s,o,r,n)}catch(e){console.error(e)}}!e.Y&&t["s-rn"]&&O(e,t,l)}},T=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},R=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},L="wc-",D=(e,t,n,o,l,s)=>{try{l=new(s=e.M(t).K),((e,t,n,o,l,s)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{E(e,i,n,o,t,l,s)})})(e,s,t,l,n,o),function i(e,t,n){if(t){const o=e.oe.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.le(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,s.events,l)}catch(n){l={},e.ee(n,7,t,!0)}return e.Z.set(t,l),l},q=(e,t,n,o,l,s)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.se.length&&!e.P.size)for(;s=e.se.shift();)s()},B=(e,t,n,o)=>{t.forEach(([t,l])=>{const s=l.O;3&s?R(n,t,function n(){return(e.te.get(this)||{})[t]},function n(s){A(e,this,t,N(l.A,s),o)}):32===s&&T(n,t,p)})},I=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.ie.has(n)||(e.re=!0,e.P.add(n),e.ie.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ae(n);)if(e.ce(n)){e.fe.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.i&&1===t.s||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.be(n)[0])),1===t.s&&e.i&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(s=>{(l=t.g[s].N)&&(o.ne[l]=e.pe(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.he&&((e,t)=>{for(;t;){if(!e.ye(t))return 9!==e.we(t);t=e.ye(t)}})(e.u,t)&&(e.U.set(t,!0),q(e,t),g(e._.get(t),!0),e.u.W(t),e.Me.delete(t),[e.G,e.ge,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s,i)=>{if((l=e.Z.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),(i=e.$e.has(t))||(e.$e.set(t,!0),t["s-ld"]=void 0,e.u.X(t,n));try{g(e._.get(t)),(s=e.ge.get(t))&&(s.forEach(e=>e(t)),e.ge.delete(t)),!i&&l.componentDidLoad&&l.componentDidLoad()}catch(n){e.ee(n,4,t)}q(e,t)}})(e,this,o)},n.forceUpdate=function(){O(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[u(n)];l&&(t[l]=o)})(e,this,t,o)}}B(e,o,n,l)}};((e,t,n,s,r,c,p)=>{const d=n.performance,b={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,l={p:n,i:!!n.documentElement.attachShadow,ke:!1,we:e=>e.nodeType,je:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),We:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),Ne:e=>e.remove(),Oe:(e,t)=>e.appendChild(t),X:(e,t)=>{e.classList.add(t)},be:e=>e.childNodes,ye:e=>e.parentNode,Se:e=>e.nextSibling,xe:e=>e.previousSibling,Ee:e=>u(e.nodeName),Ae:e=>e.textContent,Te:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Re:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.ae(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,C:(t,n,s,r,a,c,f,u,p)=>{let d=t,b=s,m=o.get(t);p=n,m&&m[p]&&m[p](),"string"==typeof c?d=l.Le(t,c):"object"==typeof c?d=c:(u=n.split(":")).length>1&&(d=l.Le(t,u[0]),n=u[1]),d&&((u=n.split(".")).length>1&&(n=u[0],b=(e=>{e.keyCode===i[u[1]]&&s(e)})),f=l.ke?{capture:!!r,passive:!!a}:!!r,e.ael(d,n,b,f),m||o.set(t,m={}),m[p]=(()=>{d&&e.rel(d,n,b,f),m[p]=null}))},W:(e,t,n)=>{(n=o.get(e))&&(t?n[t]&&n[t]():Object.keys(n).forEach(e=>{n[e]&&n[e]()}))},De:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),ae:(e,t)=>(t=l.ye(e))&&11===l.we(t)?t.host:t,qe:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.ke=!0}))}catch(e){}return l})(m,n,s),h=v.p.documentElement,w=n["s-defined"]=n["s-defined"]||{},g=(e,t)=>{n.customElements.get(e.t)||(I(k,b[e.t]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},k={u:v,Be:g,M:e=>b[v.Ee(e)],Ie:e=>t[e],isClient:!0,ce:e=>!(!w[v.Ee(e)]&&!k.M(e)),ee:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=$(m,n),ve:(e,t)=>{{const n=e.T,o=!v.i;let s=r+n+(o?".sc":"")+".entry.js";import(s).then(n=>{try{e.K=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,s,i){if(s){const n=t.t+(i||l);if(!t[n]){const o=e.je("template");t[n]=o,o.innerHTML=`<style>${s}</style>`,e.Oe(e.p.head,o)}}}(v,e,e.s,e.K.style,e.K.styleMode),O(k,t,d)}catch(t){console.error(t),e.K=class{}}},e=>console.error(e,s))}},Y:!1,H:!1,he:!1,V:a,G:new WeakMap,m:new WeakMap,ie:new WeakMap,Me:new WeakMap,$e:new WeakMap,fe:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,ge:new WeakMap,Pe:new WeakMap,_:new WeakMap,te:new WeakMap,P:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,k.le=t.emit=((e,n,o)=>v.De(e,t.eventNameFn?t.eventNameFn(n):n,o)),m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>k.queue.write(()=>k.P.size?k.se.push(e):e()))),k.render=((e,t)=>{let n,o,l,s,i,r,a;const c=(l,p,d,b,m,v,h,w,g)=>{if(w=p.vchildren[d],n||(s=!0,"slot"===w.vtag&&(o&&t.X(b,o+"-s"),w.vchildren?w.Fe=!0:w.He=!0)),f(w.vtext))w.o=t.de(w.vtext);else if(w.He)w.o=t.de("");else{if(v=w.o=M||"svg"===w.vtag?t.Ce("http://www.w3.org/2000/svg",w.vtag):t.je(w.Fe?"slot-fb":w.vtag),e.ce(v)&&e.fe.delete(a),M="svg"===w.vtag||"foreignObject"!==w.vtag&&M,y(e,null,w,M),f(o)&&v["s-si"]!==o&&t.X(v,v["s-si"]=o),w.vchildren)for(m=0;m<w.vchildren.length;++m)(h=c(l,w,m,v))&&t.Oe(v,h);"svg"===w.vtag&&(M=!1)}return w.o["s-hn"]=r,(w.Fe||w.He)&&(w.o["s-sr"]=!0,w.o["s-cr"]=i,w.o["s-sn"]=w.vname||"",(g=l&&l.vchildren&&l.vchildren[d])&&g.vtag===w.vtag&&l.o&&u(l.o)),w.o},u=(n,o,l,i)=>{e.he=!0;const a=t.be(n);for(l=a.length-1;l>=0;l--)(i=a[l])["s-hn"]!==r&&i["s-ol"]&&(t.Ne(i),t.v(v(i),i,m(i)),t.Ne(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.he=!1},p=(e,n,o,l,s,i,a,u)=>{const p=e["s-cr"];for((a=p&&t.ye(p)||e).shadowRoot&&t.Ee(a)===r&&(a=a.shadowRoot);s<=i;++s)l[s]&&(u=f(l[s].vtext)?t.de(l[s].vtext):c(null,o,s,e))&&(l[s].o=u,t.v(a,u,m(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)f(e[n])&&(s=e[n].o,l=!0,s["s-ol"]?t.Ne(s["s-ol"]):u(s,!0),t.Ne(s))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),m=e=>e&&e["s-ol"]?e["s-ol"]:e,v=e=>t.ye(e["s-ol"]?e["s-ol"]:e),h=(n,o,l)=>{const s=o.o=n.o,i=n.vchildren,r=o.vchildren;M=o.o&&f(t.ae(o.o))&&void 0!==o.o.ownerSVGElement,M="svg"===o.vtag||"foreignObject"!==o.vtag&&M,f(o.vtext)?(l=s["s-cr"])?t.Te(t.ye(l),o.vtext):n.vtext!==o.vtext&&t.Te(s,o.vtext):("slot"!==o.vtag&&y(e,n,o,M),f(i)&&f(r)?((e,n,o,l,s,i,r,a)=>{let y=0,w=0,M=n.length-1,g=n[0],$=n[M],k=l.length-1,j=l[0],C=l[k];for(;y<=M&&w<=k;)if(null==g)g=n[++y];else if(null==$)$=n[--M];else if(null==j)j=l[++w];else if(null==C)C=l[--k];else if(b(g,j))h(g,j),g=n[++y],j=l[++w];else if(b($,C))h($,C),$=n[--M],C=l[--k];else if(b(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.ye(g.o)),h(g,C),t.v(e,g.o,t.Se($.o)),g=n[++y],C=l[--k];else if(b($,j))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.ye($.o)),h($,j),t.v(e,$.o,g.o),$=n[--M],j=l[++w];else{for(s=null,i=y;i<=M;++i)if(n[i]&&f(n[i].vkey)&&n[i].vkey===j.vkey){s=i;break}f(s)?((a=n[s]).vtag!==j.vtag?r=c(n&&n[w],o,s,e):(h(a,j),n[s]=void 0,r=a.o),j=l[++w]):(r=c(n&&n[w],o,w,e),j=l[++w]),r&&t.v(v(g.o),r,m(g.o))}y>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,w,k):w>k&&d(n,y,M)})(s,i,o,r):f(r)?(f(n.vtext)&&t.Te(s,""),p(s,null,o,r,0,r.length-1)):f(i)&&d(i,0,i.length-1)),M&&"svg"===o.vtag&&(M=!1)},w=(e,n,o,l,s,i,r,a)=>{for(l=0,s=(o=t.be(e)).length;l<s;l++)if(n=o[l],1===t.we(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(a=t.we(o[i]),""!==r){if(1===a&&r===t.pe(o[i],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Ae(o[i]).trim()){n.hidden=!0;break}w(n)}},g=[],$=(e,n,o,s,i,r,a,c,f,u)=>{for(i=0,r=(n=t.be(e)).length;i<r;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(c=t.be(t.ye(s)),f=o["s-sn"],a=c.length-1;a>=0;a--)(s=c[a])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.we(s))||8===u)&&""===f||1===u&&null===t.pe(s,"slot")&&""===f||1===u&&t.pe(s,"slot")===f)&&(g.some(e=>e.Qe===s)||(l=!0,s["s-sn"]=f,g.push({Ue:o,Qe:s})));1===t.we(o)&&$(o)}};return(c,f,u,p,d,b,m,v,y,M,k,j)=>{if(a=c,r=t.Ee(a),i=a["s-cr"],n=p,o=a["s-sc"],s=l=!1,h(f,u),s){for($(u.o),m=0;m<g.length;m++)(v=g[m]).Qe["s-ol"]||((y=t.de(""))["s-nr"]=v.Qe,t.v(t.ye(v.Qe),v.Qe["s-ol"]=y,v.Qe));for(e.he=!0,m=0;m<g.length;m++){for(v=g[m],k=t.ye(v.Ue),j=t.Se(v.Ue),y=v.Qe["s-ol"];y=t.xe(y);)if((M=y["s-nr"])&&M&&M["s-sn"]===v.Qe["s-sn"]&&k===t.ye(M)&&(M=t.Se(M))&&M&&!M["s-nr"]){j=M;break}(!j&&k!==t.ye(v.Qe)||t.Se(v.Qe)!==j)&&v.Qe!==j&&(t.Ne(v.Qe),t.v(k,v.Qe,j))}e.he=!1}return l&&w(u.o),g.length=0,u}})(k,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{k.fe.set(h,m.loaded=k.H=!0),v.De(n,"appload",{detail:{namespace:e}})}),p.map(C).forEach(e=>g(e,class extends HTMLElement{})),k.re||h["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.fe.has(t))n(t);else{const o=e.ge.get(t)||[];o.push(n),e.ge.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(k,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,k})(n,x,w,d,r,h,c);
})(window,document,{},"BodymovinWebComponents","hydrated",[["lottie-animation","3ljbnbuf",1,[["autoplay",1,0,1,1],["dataJson",1,0,"data-json",1],["loop",1,0,1,1],["play",32],["src",1,0,1,1]],1]]);