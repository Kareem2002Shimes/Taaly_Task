(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[211],{949:function(e,t,a){Promise.resolve().then(a.bind(a,6886))},6886:function(e,t,a){"use strict";a.r(t);var n=a(7437),l=a(9531),s=a(4283),r=a(8121),i=a(7907),c=a(2265),o=a(2979);t.default=e=>{let{userId:t}=e,[a,u]=(0,c.useState)(null),d=(0,i.useRouter)(),[f,m]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{(async()=>{if(t){m(!0);let e=(0,r.JU)(s.db,"users",t),a=(await (0,r.QT)(e)).data();m(!1),u(a),a||d.replace("/".concat(l.Z5.ADMIN))}})()},[t]),(0,n.jsxs)(n.Fragment,{children:[f&&(0,n.jsx)("p",{children:"Loading..."}),!f&&a&&(0,n.jsx)(o.Z,{user:a})]})}},2979:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7437),l=a(703),s=a(7907),r=a(3216),i=e=>{let{url:t}=e,a=(0,s.useRouter)();return(0,n.jsx)("button",{type:"button",onClick:()=>a.push(t),children:(0,n.jsx)(r.Z,{name:"back-arrow",className:"text-heading"})})},c=a(9531),o=e=>{let{user:t}=e,a=[{icon:"email",label:"E-mail",value:t.email},{icon:"phone",label:"Phone",value:t.phoneNumber},{icon:"map",label:"Location",value:"6391 Elgin St. Celina, Delaware 10299"},{icon:"academic-cap",label:"Highest Education",value:"BA Graphic Design"},{icon:"briefcase",label:"Latest work experience",value:"Marketing Coordinator"}];return(0,n.jsxs)("section",{className:"py-6 px-4 bg-base-color w-[408px] rounded-[16px] relative",children:[(0,n.jsx)("div",{className:"absolute left-4",children:(0,n.jsx)(i,{url:"/".concat(c.Z5.ADMIN)})}),(0,n.jsxs)("div",{className:"flex flex-col items-center px-4",children:[(0,n.jsx)("h3",{className:"font-[500] text-2xl text-heading mb-6",children:t.displayName}),(0,n.jsx)(l.default,{src:t.photoURL||"/assets/images/profile.png",alt:"profile img",width:100,height:100,className:"border-[3px] border-[#1E00B9] rounded-full mb-6"}),(0,n.jsx)("span",{className:"text-lg text-heading font-[500] mb-2",children:"Bio"}),(0,n.jsx)("q",{className:"text-black font-[500] text-base",children:"“I’m a marketing coordinator who recently moved to netherlands and i’m struggling with the dutch language”"}),(0,n.jsx)("ul",{className:"w-full mt-6 flex flex-col gap-6",children:a.map((e,t)=>(0,n.jsxs)("li",{children:[(0,n.jsxs)("div",{className:"flex items-center gap-4 mb-4",children:[(0,n.jsx)(r.Z,{name:e.icon,className:"text-heading"}),(0,n.jsx)("label",{className:"text-heading font-[500] text-xl",children:e.label})]}),(0,n.jsx)("p",{className:"text-[#8C8A96] font-[500] text-base",children:e.value})]},t))})]})]})}},4283:function(e,t,a){"use strict";a.d(t,{I:function(){return i},db:function(){return c}});var n=a(6142),l=a(2730),s=a(8121);let r=(0,n.C6)().length?(0,n.Mq)():(0,n.ZF)({apiKey:"AIzaSyDS6w2HdU9Lw9V2zNhB3-j_XhUPers8EZU",authDomain:"taaly-task.firebaseapp.com",projectId:"taaly-task",storageBucket:"taaly-task.appspot.com",messagingSenderId:"590092131567",appId:"1:590092131567:web:59e4148909ff08916a0f1a",measurementId:"G-GL97HWK1C1"}),i=(0,l.v0)(r),c=(0,s.ad)()},703:function(e,t,a){"use strict";a.d(t,{default:function(){return l.a}});var n=a(7447),l=a.n(n)},7447:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{getImageProps:function(){return i},default:function(){return c}});let n=a(6921),l=a(8630),s=a(1749),r=n._(a(536)),i=e=>{let{props:t}=(0,l.getImgProps)(e,{defaultLoader:r.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},c=s.Image},6993:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=a(6921)._(a(2265)).default.createContext(null)}},function(e){e.O(0,[358,452,398,749,835,971,69,744],function(){return e(e.s=949)}),_N_E=e.O()}]);