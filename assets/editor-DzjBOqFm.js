import"./modulepreload-polyfill-B5Qt9EMX.js";import{S as he,i as ye,s as ge,b as K,c as r,d as x,l as j,g as oe,t as Q,f as se,h as T,j as R,k as He,m as ie,n as ue,o as je,p as O,q as be,r as ve,u as ke,v as Se,w as _,x as Y,y as m,z as xe,B as Re,D as re,G as Xe,H as Ye,I as P,J as G}from"./vendor-CeA792Xf.js";import{H as E,P as S,G as Ne,R as fe,B as Ie,V as le,N as Oe,C as Je}from"./constants-Ge9im_Q3.js";function pe(l,n,t){const i=l.slice();return i[4]=n[t],i}function Be(l){let n,t,i=ie(l[0].hitboxes),e=[];for(let o=0;o<i.length;o+=1)e[o]=me(pe(l,i,o));const a=o=>Q(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=ue()},m(o,s){for(let u=0;u<e.length;u+=1)e[u]&&e[u].m(o,s);x(o,n,s),t=!0},p(o,s){if(s&1){i=ie(o[0].hitboxes);let u;for(u=0;u<i.length;u+=1){const p=pe(o,i,u);e[u]?(e[u].p(p,s),T(e[u],1)):(e[u]=me(p),e[u].c(),T(e[u],1),e[u].m(n.parentNode,n))}for(oe(),u=i.length;u<e.length;u+=1)a(u);se()}},i(o){if(!t){for(let s=0;s<i.length;s+=1)T(e[s]);t=!0}},o(o){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)Q(e[s]);t=!1},d(o){o&&R(n),je(e,o)}}}function Me(l){let n,t;return{c(){n=K("polygon"),r(n,"points",t=l[0].points.map(l[3]).join(","))},m(i,e){x(i,n,e)},p(i,e){e&1&&t!==(t=i[0].points.map(i[3]).join(","))&&r(n,"points",t)},i:O,o:O,d(i){i&&R(n)}}}function De(l){let n,t,i,e,a;return{c(){n=K("rect"),r(n,"width",t=(l[0].max.x-l[0].min.x)*S),r(n,"height",i=(l[0].max.y-l[0].min.y)*S),r(n,"x",e=l[0].min.x*S),r(n,"y",a=l[0].min.y*S)},m(o,s){x(o,n,s)},p(o,s){s&1&&t!==(t=(o[0].max.x-o[0].min.x)*S)&&r(n,"width",t),s&1&&i!==(i=(o[0].max.y-o[0].min.y)*S)&&r(n,"height",i),s&1&&e!==(e=o[0].min.x*S)&&r(n,"x",e),s&1&&a!==(a=o[0].min.y*S)&&r(n,"y",a)},i:O,o:O,d(o){o&&R(n)}}}function Ge(l){let n,t,i,e;return{c(){n=K("circle"),r(n,"r",t=l[0].radius*S),r(n,"cx",i=l[0].position.x*S),r(n,"cy",e=l[0].position.y*S)},m(a,o){x(a,n,o)},p(a,o){o&1&&t!==(t=a[0].radius*S)&&r(n,"r",t),o&1&&i!==(i=a[0].position.x*S)&&r(n,"cx",i),o&1&&e!==(e=a[0].position.y*S)&&r(n,"cy",e)},i:O,o:O,d(a){a&&R(n)}}}function me(l){let n,t;return n=new we({props:{data:l[4]}}),{c(){be(n.$$.fragment)},m(i,e){ve(n,i,e),t=!0},p(i,e){const a={};e&1&&(a.data=i[4]),n.$set(a)},i(i){t||(T(n.$$.fragment,i),t=!0)},o(i){Q(n.$$.fragment,i),t=!1},d(i){ke(n,i)}}}function Pe(l){let n,t,i,e,a,o,s;const u=[Ge,De,Me,Be],p=[];function X(c,v){return c[0].type===E.Circle?0:c[0].type===E.Rect?1:c[0].type===E.Polygon?2:c[0].type===E.Group?3:-1}return~(t=X(l))&&(i=p[t]=u[t](l)),{c(){n=K("g"),i&&i.c(),r(n,"fill",e="rgba("+(l[1]?"255, 0, 0":"255, 255, 255")+", 0.5)")},m(c,v){x(c,n,v),~t&&p[t].m(n,null),a=!0,o||(s=j(n,"pointerdown",l[2]),o=!0)},p(c,[v]){let J=t;t=X(c),t===J?~t&&p[t].p(c,v):(i&&(oe(),Q(p[J],1,1,()=>{p[J]=null}),se()),~t?(i=p[t],i?i.p(c,v):(i=p[t]=u[t](c),i.c()),T(i,1),i.m(n,null)):i=null),(!a||v&2&&e!==(e="rgba("+(c[1]?"255, 0, 0":"255, 255, 255")+", 0.5)"))&&r(n,"fill",e)},i(c){a||(T(i),a=!0)},o(c){Q(i),a=!1},d(c){c&&R(n),~t&&p[t].d(),o=!1,s()}}}function Ae(l,n,t){let{data:i}=n,{selected:e}=n;function a(s){He.call(this,l,s)}const o=s=>`${s.x*S}, ${s.y*S}`;return l.$$set=s=>{"data"in s&&t(0,i=s.data),"selected"in s&&t(1,e=s.selected)},[i,e,a,o]}class we extends he{constructor(n){super(),ye(this,n,Ae,Pe,ge,{data:0,selected:1})}}function _e(l,n,t){const i=l.slice();return i[34]=n[t],i}function Ve(l){let n,t,i,e,a,o,s,u,p,X,c,v,J,g,A,b,d,k,B,C,U;return{c(){n=_("div"),t=_("span"),t.textContent="Min X:",i=Y(),e=_("input"),a=Y(),o=_("div"),s=_("span"),s.textContent="Min Y:",u=Y(),p=_("input"),X=Y(),c=_("div"),v=_("span"),v.textContent="Max X:",J=Y(),g=_("input"),A=Y(),b=_("div"),d=_("span"),d.textContent="Max Y:",k=Y(),B=_("input"),r(e,"type","number"),r(p,"type","number"),r(g,"type","number"),r(B,"type","number")},m(h,w){x(h,n,w),m(n,t),m(n,i),m(n,e),G(e,l[1].min.x),x(h,a,w),x(h,o,w),m(o,s),m(o,u),m(o,p),G(p,l[1].min.y),x(h,X,w),x(h,c,w),m(c,v),m(c,J),m(c,g),G(g,l[1].max.x),x(h,A,w),x(h,b,w),m(b,d),m(b,k),m(b,B),G(B,l[1].max.y),C||(U=[j(e,"input",l[19]),j(e,"input",l[10]),j(p,"input",l[20]),j(p,"input",l[10]),j(g,"input",l[21]),j(g,"input",l[10]),j(B,"input",l[22]),j(B,"input",l[10])],C=!0)},p(h,w){w[0]&2&&P(e.value)!==h[1].min.x&&G(e,h[1].min.x),w[0]&2&&P(p.value)!==h[1].min.y&&G(p,h[1].min.y),w[0]&2&&P(g.value)!==h[1].max.x&&G(g,h[1].max.x),w[0]&2&&P(B.value)!==h[1].max.y&&G(B,h[1].max.y)},d(h){h&&(R(n),R(a),R(o),R(X),R(c),R(A),R(b)),C=!1,re(U)}}}function Ee(l){let n,t,i,e,a,o,s,u,p,X,c,v,J,g,A,b;return{c(){n=_("div"),t=_("span"),t.textContent="Radius:",i=Y(),e=_("input"),a=Y(),o=_("div"),s=_("span"),s.textContent="X:",u=Y(),p=_("input"),X=Y(),c=_("div"),v=_("span"),v.textContent="Y:",J=Y(),g=_("input"),r(e,"type","number"),r(e,"min","0"),r(p,"type","number"),r(g,"type","number")},m(d,k){x(d,n,k),m(n,t),m(n,i),m(n,e),G(e,l[1].radius),x(d,a,k),x(d,o,k),m(o,s),m(o,u),m(o,p),G(p,l[1].position.x),x(d,X,k),x(d,c,k),m(c,v),m(c,J),m(c,g),G(g,l[1].position.y),A||(b=[j(e,"input",l[16]),j(e,"input",l[10]),j(p,"input",l[17]),j(p,"input",l[10]),j(g,"input",l[18]),j(g,"input",l[10])],A=!0)},p(d,k){k[0]&2&&P(e.value)!==d[1].radius&&G(e,d[1].radius),k[0]&2&&P(p.value)!==d[1].position.x&&G(p,d[1].position.x),k[0]&2&&P(g.value)!==d[1].position.y&&G(g,d[1].position.y)},d(d){d&&(R(n),R(a),R(o),R(X),R(c)),A=!1,re(b)}}}function qe(l){return{c:O,m:O,p:O,d:O}}function We(l){let n;return{c(){n=K("image"),r(n,"x",-(l[37].width/2)),r(n,"y",-(l[37].height/2)),r(n,"href",l[37].src),r(n,"onmousedown","return false")},m(t,i){x(t,n,i)},p:O,d(t){t&&R(n)}}}function ze(l){return{c:O,m:O,p:O,d:O}}function de(l,n){let t,i,e;function a(){return n[23](n[34])}return i=new we({props:{data:n[34],selected:n[1]===n[34]}}),i.$on("pointerdown",a),{key:l,first:null,c(){t=ue(),be(i.$$.fragment),this.first=t},m(o,s){x(o,t,s),ve(i,o,s),e=!0},p(o,s){n=o;const u={};s[0]&1&&(u.data=n[34]),s[0]&3&&(u.selected=n[1]===n[34]),i.$set(u)},i(o){e||(T(i.$$.fragment,o),e=!0)},o(o){Q(i.$$.fragment,o),e=!1},d(o){o&&R(t),ke(i,o)}}}function Le(l){let n,t,i,e,a,o,s,u,p,X,c,v,J,g,A,b,d,k,B,C=[],U=new Map,h,w,Z,$;function ee(H,y){if(H[1].type===E.Circle)return Ee;if(H[1].type===E.Rect)return Ve}let L=ee(l),N=L&&L(l),V={ctx:l,current:null,token:null,hasCatch:!1,pending:ze,then:We,catch:qe,value:37};Se(l[15],V);let F=ie(l[0]);const te=H=>H[34];for(let H=0;H<F.length;H+=1){let y=_e(l,F,H),W=te(y);U.set(W,C[H]=de(W,y))}return{c(){n=_("main"),t=_("div"),i=_("div"),e=_("button"),e.textContent="Add Rectangle Hitbox",a=Y(),o=_("button"),o.textContent="Add Circle Hitbox",s=Y(),u=_("button"),u.textContent="Duplicate Selected",p=Y(),N&&N.c(),X=Y(),c=_("textarea"),J=Y(),g=_("textarea"),A=Y(),b=_("div"),d=K("svg"),k=K("g"),B=ue(),V.block.c();for(let H=0;H<C.length;H+=1)C[H].c();r(e,"class","svelte-w81p1j"),r(o,"class","svelte-w81p1j"),r(u,"class","svelte-w81p1j"),r(i,"id","buttons-container"),r(i,"class","svelte-w81p1j"),r(c,"class","output svelte-w81p1j"),c.value=v=JSON.stringify(l[0],null,1),r(g,"class","output svelte-w81p1j"),g.value=l[5],r(t,"id","editor"),r(t,"class","svelte-w81p1j"),r(k,"transform",h="translate("+l[2]+" "+l[3]+") scale("+l[4]+")"),r(d,"class","svelte-w81p1j"),r(b,"id","hitboxes-container"),r(b,"oncontextmenu","return false"),r(b,"class","svelte-w81p1j"),r(n,"class","svelte-w81p1j")},m(H,y){x(H,n,y),m(n,t),m(t,i),m(i,e),m(i,a),m(i,o),m(i,s),m(i,u),m(t,p),N&&N.m(t,null),m(t,X),m(t,c),m(t,J),m(t,g),m(n,A),m(n,b),m(b,d),m(d,k),m(k,B),V.block.m(k,V.anchor=null),V.mount=()=>k,V.anchor=B;for(let W=0;W<C.length;W+=1)C[W]&&C[W].m(k,null);w=!0,Z||($=[j(e,"click",l[12]),j(o,"click",l[13]),j(u,"click",l[14]),j(c,"keyup",l[11]),j(b,"pointerdown",l[6]),j(b,"pointerup",l[7]),j(b,"pointermove",l[8]),j(b,"wheel",l[9])],Z=!0)},p(H,y){l=H,L===(L=ee(l))&&N?N.p(l,y):(N&&N.d(1),N=L&&L(l),N&&(N.c(),N.m(t,X))),(!w||y[0]&1&&v!==(v=JSON.stringify(l[0],null,1)))&&(c.value=v),(!w||y[0]&32)&&(g.value=l[5]),xe(V,l,y),y[0]&3&&(F=ie(l[0]),oe(),C=Re(C,y,te,1,l,F,U,k,Ye,de,null,_e),se()),(!w||y[0]&28&&h!==(h="translate("+l[2]+" "+l[3]+") scale("+l[4]+")"))&&r(k,"transform",h)},i(H){if(!w){for(let y=0;y<F.length;y+=1)T(C[y]);w=!0}},o(H){for(let y=0;y<C.length;y+=1)Q(C[y]);w=!1},d(H){H&&R(n),N&&N.d(),V.block.d(),V.token=null,V=null;for(let y=0;y<C.length;y+=1)C[y].d();Z=!1,re($)}}}async function Te(l){const n=new Image;return n.src=l,new Promise(t=>{n.onload=()=>{t(n)}})}function Ue(l,n,t){let i=[...new Ne(fe.fromRect(1,1)).toJSON().hitboxes],e=i[0],a=0,o=0,s=1,u=0,p=0,X;Xe(()=>{X=document.getElementById("hitboxes-container")});let c=!1,v=!1;function J(f){f.button===0?c=!0:f.button===2&&(v=!0)}function g(f){f.button===0?c=!1:f.button===2&&(v=!1,b=!1,d=!1)}let A,b=!1,d=!1;function k(f){const{x:M,y:z}=X.getBoundingClientRect();if([u,p]=[(f.clientX-a-M)/s/S,(f.clientY-o-z)/s/S],c&&!v){const I=Date.now();if(I-A<100||Ie.fromJSON(e).isPointInside(le.create(u,p))){A=I;const[D,q]=[f.movementX/s/S,f.movementY/s/S];e.type===E.Circle?(t(1,e.position.x+=D,e),t(1,e.position.y+=q,e)):e.type===E.Rect&&(t(1,e.min.x+=D,e),t(1,e.min.y+=q,e),t(1,e.max.x+=D,e),t(1,e.max.y+=q,e)),C()}else t(2,a+=f.movementX),t(3,o+=f.movementY)}else if(v)if(e.type===E.Rect){const{min:I,max:D}=e;let[q,ne]=[D.x-I.x,D.y-I.y];const[ae,ce]=[I.x+q/2,I.y+ne/2];((u>e.max.x||u<e.min.x)&&p>e.min.y&&p<e.max.y||b)&&(q+=f.movementX/s/S,b=!0,d=!1),((p>e.max.y||p<e.min.y)&&u>e.min.x&&u<e.max.x||d)&&(ne+=f.movementY/s/S,b=!1,d=!0),I.x=ae-q/2,I.y=ce-ne/2,D.x=ae+q/2,D.y=ce+ne/2,C()}else e.type===E.Circle&&(t(1,e.radius+=f.movementX/s/S,e),C())}function B(f){const M=s,{x:z,y:I}=X.getBoundingClientRect(),[D,q]=[f.clientX-z,f.clientY-I];t(4,s=Oe.clamp(s*(f.deltaY>0?.75:1.25),.1,10)),t(2,a=D-(D-a)*(s/M)),t(3,o=q-(q-o)*(s/M))}function C(){t(0,i[i.indexOf(e)]=e,i),w()}function U(f){const M=f.target;try{t(0,i=JSON.parse(M.value))}catch{}w()}let h="";function w(){t(5,h=`new GroupHitbox(
`),t(5,h+=i.map(f=>{const M=z=>Math.round(z*100)/100;if(f.type===E.Rect){const z=f.max.x-f.min.x,I=f.max.y-f.min.y,D=le.create(f.min.x+z/2,f.min.y+I/2);return`    RectangleHitbox.fromRect(${M(z)}, ${M(I)}, ${z===0&&I===0?"":`Vec.create(${M(D.x)}, ${M(D.y)})`})`}else if(f.type===E.Circle)return`    new CircleHitbox(${M(f.radius)}, Vec.create(${M(f.position.x)}, ${M(f.position.y)}))`}).join(`,
`)),t(5,h+=`
)`)}w();function Z(f){f=f.toJSON(),i.push(f),t(1,e=f),C()}const $=()=>Z(new fe(le.create(-10,-10),le.create(10,10))),ee=()=>Z(new Je(5));function L(){i.push(JSON.parse(JSON.stringify(e)))}const N=Te("/img/game/fall/obstacles/outhouse_door.svg");function V(){e.radius=P(this.value),t(1,e)}function F(){e.position.x=P(this.value),t(1,e)}function te(){e.position.y=P(this.value),t(1,e)}function H(){e.min.x=P(this.value),t(1,e)}function y(){e.min.y=P(this.value),t(1,e)}function W(){e.max.x=P(this.value),t(1,e)}function Ce(){e.max.y=P(this.value),t(1,e)}return[i,e,a,o,s,h,J,g,k,B,C,U,$,ee,L,N,V,F,te,H,y,W,Ce,f=>{t(1,e=f)}]}class Fe extends he{constructor(n){super(),ye(this,n,Ue,Le,ge,{},null,[-1,-1])}}new Fe({target:document.getElementById("app")});