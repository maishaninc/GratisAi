import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-470ccb3e.js";import{aG as N,Q as l,g as P,az as Q,H as X,ak as R,aH as J,r as u,k as c,K,J as O,aY as Y,w as ee,L as te,m as ae,E as o,F as r,G as s,S as g,X as i,a0 as m,ah as se,aU as ne,O as z,P as B,aA as v,R as L,W as le,aZ as oe,a_ as re,a$ as ie,aS as ce,b0 as de,b1 as ue,b2 as ge,aX as fe}from"./index-2efe4620.js";import"./LayoutSider-0c83106f.js";const he=N("search",!0,function(a){return l("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[l("path",{d:"M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linejoin":a.strokeLinejoin},null),l("path",{d:"M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431",stroke:a.colors[2],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),l("path",{d:"M33.2216 33.2217L41.7069 41.707",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null)])}),pe=N("star",!1,function(a){return l("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[l("path",{d:"M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linejoin":a.strokeLinejoin},null)])}),me={class:"relative flex justify-center bg-custom-gradient dark:bg-gray-900 min-h-screen"},xe={class:"w-full flex flex-col items-center max-w-screen-4xl p-4 lg:p-6"},ye={class:"mb-2 mt-8 text-center text-3xl font-extrabold text-primary-500 dark:text-primary-600 lg:text-4xl"},ve={class:"flex justify-center text-base text-small mb-4 mt-4 text-center text-gray-500 dark:text-gray-400 tracking-widest lg:text-lg"},_e={class:"flex w-full rounded-xl shadow-sm ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary-400 text-gray-900 placeholder:text-gray-400 border-0 bg-transparent sm:text-sm sm:leading-6 resize-none dark:focus:ring-gray-600 dark:ring-gray-600 dark:bg-gray-800"},ke={class:"relative flex flex-1 w-full"},we={for:"search-field",class:"sr-only"},be={class:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"},Ce=["placeholder"],Le={class:"w-full"},Ae={class:"flex lg:justify-between overflow-x-auto scrollbar-hide my-2 pb-3 pt-4",style:{"max-width":"80%",margin:"auto"}},Me=["onClick"],Ie=["onClick"],Se={key:0,class:"flex-shrink-0 dark:ring-gray-400 rounded-lg"},je=["src"],ze={class:"text-white text-sm md:text-lg"},Be={class:"flex-grow flex flex-col"},Ne={class:"flex items-center font-medium text-lg text-gray-600 dark:text-gray-400 my-1"},Pe={class:"line-clamp-1 overflow-hidden text-ellipsis block flex-grow whitespace-nowrap"},Qe={class:"text-xs line-clamp-2 text-gray-500 dark:text-gray-400 my-3"},Re=P({__name:"index",emits:["run-app"],setup(a,{emit:A}){var j;Q();const f=X(),x=R();J(),u(!1);const _=((j=f.globalConfig)==null?void 0:j.siteRobotName)||"AIWeb",k=c(()=>f.globalConfig.appMenuHeaderTips);c(()=>f.globalConfig.appMenuHeaderBgUrl);const M=K(),h=O(),w=Y(),y=u(""),W=u([]),$=c(()=>w.catId),d=u([]),b=u([]),q=c(()=>w.mineApps),I=u([]),p=u(0);function S(e){return q.value.some(n=>n.appId===e.id)}async function H(){var n;const e=await re();d.value=(n=e==null?void 0:e.data)==null?void 0:n.rows.map(t=>(t.loading=!1,t)),b.value=d.value}const F=c(()=>y.value?d.value.filter(e=>e.name.includes(y.value)):p.value===0?d.value:d.value.filter(e=>e.catId===p.value));async function T(e){e.loading=!0;try{const n=await ie({appId:e.id});h.success(n.data),await w.queryMineApps(),e.loading=!1}catch{e.loading=!1}}async function U(e){const n=await ce(),{modelMaps:t}=n.data;if(!t[1])return h.warning(m("app.noModelConfigured"));M.push({path:"/chat",query:{appId:e.id}})}async function G(){var t;const e=await de(),n={id:0,name:m("app.allCategories")};I.value=[n,...(t=e==null?void 0:e.data)==null?void 0:t.rows]}async function V(){const e=await ue({menuPlatform:1});e.success&&(W.value=e.data)}function Z(e){p.value=e}ee($,e=>{e?b.value=d.value.filter(n=>n.catId===e):b.value=d.value});function D(){const e=["bg-blue-300","bg-red-300","bg-green-300","bg-yellow-300","bg-purple-300","bg-pink-300"];return e[Math.floor(Math.random()*e.length)]}return te(()=>{G(),H(),V(),x.setSiderCollapsed(!0)}),ae(()=>{x.setSiderCollapsed(!1)}),(e,n)=>(o(),r("div",me,[s("div",xe,[s("div",ye,g(i(_)),1),s("div",ve,g(k.value||i(m)("app.exploreInfinitePossibilities")),1),s("div",_e,[s("div",ke,[s("label",we,g(i(m)("app.searchAppNameQuickFind")),1),s("div",be,[l(i(he),{theme:"outline",size:"24",class:"text-gray-400"})]),se(s("input",{id:"search-field","onUpdate:modelValue":n[0]||(n[0]=t=>y.value=t),class:"z-1 w-full rounded-xl dark:bg-gray-800 py-2 pr-3 font-normal outline-0 delay-100 md:h-14 h-12 text-base pl-12",placeholder:i(m)("app.searchAppNameQuickFind"),type:"search",name:"search"},null,8,Ce),[[ne,y.value]])])]),s("div",Le,[s("div",Ae,[(o(!0),r(z,null,B(I.value,(t,C)=>(o(),r("div",{key:C,onClick:$e=>Z(t.id),class:v([{"bg-gray-100 dark:bg-gray-700 text-primary-600 dark:text-gray-400   ":p.value===t.id,"text-gray-500":p.value!==t.id},"cursor-pointer whitespace-nowrap rounded-full px-4 py-2 m-1 lg:m-0 flex-none"])},g(t.name),11,Me))),128))])]),l(oe,{name:"list",tag:"div",class:"w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-4 gap-4 py-1"},{default:L(()=>[(o(!0),r(z,null,B(F.value,t=>(o(),r("div",{key:t.id,onClick:C=>U(t),class:"custom-card cursor-pointer flex items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 m-1 hover:shadow-md dark:bg-gray-800 dark:hover:bg-gray-700"},[t.coverImg?(o(),r("div",Se,[s("img",{src:t.coverImg,class:"rounded-2xl w-20 h-20",alt:"app-image"},null,8,je)])):(o(),r("div",{key:1,class:v([D(),"flex-shrink-0  dark:ring-gray-400 rounded-2xl w-20 h-20 flex items-center justify-center"])},[s("span",ze,g(t.name.slice(0,4)),1)],2)),s("div",Be,[s("div",Ne,[s("span",Pe,g(t.name),1),l(i(pe),{theme:S(t)?"filled":"outline",size:"24",fill:S(t)?"#fde68a":"#e5e7eb",class:"cursor-pointer",onClick:le(C=>T(t),["stop"])},null,8,["theme","fill","onClick"])]),s("span",Qe,g(t.des),1)])],8,Ie))),128))]),_:1})])]))}});const We={class:"h-full dark:bg-gray-900 transition-all"},Te=P({__name:"chatStore",setup(a){const A=R(),{isMobile:f}=Q(),x=c(()=>A.siderCollapsed),_=c(()=>f.value?["rounded-none","shadow-none"]:["rounded-md","shadow-md","dark:border-neutral-800"]),k=c(()=>["h-full",{"pl-[260px]":!f.value&&!x.value}]);return(M,h)=>(o(),r("div",We,[s("div",{class:v(["h-full overflow-hidden",_.value])},[l(i(fe),{class:v(["z-40 transition",k.value]),"has-sider":""},{default:L(()=>[l(E),l(i(ge),{class:"h-full"},{default:L(()=>[l(Re,{onRunApp:h[0]||(h[0]=()=>{})})]),_:1})]),_:1},8,["class"])],2)]))}});export{Te as default};
