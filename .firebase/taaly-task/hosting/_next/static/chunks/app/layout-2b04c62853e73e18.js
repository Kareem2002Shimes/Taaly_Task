(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1413:function(e,t,a){Promise.resolve().then(a.bind(a,4014)),Promise.resolve().then(a.bind(a,5378)),Promise.resolve().then(a.t.bind(a,4867,23)),Promise.resolve().then(a.t.bind(a,2445,23))},4283:function(e,t,a){"use strict";a.d(t,{I:function(){return l},db:function(){return u}});var r=a(6142),n=a(2730),s=a(8121);let o=(0,r.C6)().length?(0,r.Mq)():(0,r.ZF)({apiKey:"AIzaSyDS6w2HdU9Lw9V2zNhB3-j_XhUPers8EZU",authDomain:"taaly-task.firebaseapp.com",projectId:"taaly-task",storageBucket:"taaly-task.appspot.com",messagingSenderId:"590092131567",appId:"1:590092131567:web:59e4148909ff08916a0f1a",measurementId:"G-GL97HWK1C1"}),l=(0,n.v0)(o),u=(0,s.ad)()},4014:function(e,t,a){"use strict";a.r(t),a.d(t,{useAuth:function(){return f}});var r=a(7437),n=a(4283),s=a(2730),o=a(2265),l=a(8009),u=a(146),i=a(8121),c=a(7907);let d=(0,o.createContext)(null);t.default=e=>{let{children:t}=e,[a,f]=(0,o.useState)(null);(0,c.useRouter)();let _=async e=>{try{return await (0,s.e5)(n.I,e.email,e.password)}catch(e){l.ZP.error(e.message)}},m=async e=>{try{return await (0,s.Xb)(n.I,e.email,e.password)}catch(e){l.ZP.error(e.message)}};return(0,o.useEffect)(()=>{let e=(0,s.Aj)(n.I,async e=>{if(e){console.log(e);let t=(0,i.JU)(n.db,"users",e.uid),a=(await (0,i.QT)(t)).data();u.Z.set("role",a.role),f(a)}});return()=>e()},[]),(0,r.jsx)(d.Provider,{value:{user:a,logout:()=>{(0,s.w7)(n.I),u.Z.remove("access_token"),u.Z.remove("role")},login:_,register:m},children:t})};let f=()=>(0,o.useContext)(d)},5378:function(e,t,a){"use strict";a.r(t);var r=a(7437),n=a(8009);t.default=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[t,(0,r.jsx)(n.x7,{})]})}},2445:function(){},4867:function(e){e.exports={style:{fontFamily:"'__Baloo_Bhaijaan_2_6b0878', '__Baloo_Bhaijaan_2_Fallback_6b0878'",fontStyle:"normal"},className:"__className_6b0878"}}},function(e){e.O(0,[358,452,398,917,971,69,744],function(){return e(e.s=1413)}),_N_E=e.O()}]);