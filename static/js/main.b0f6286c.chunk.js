(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{48:function(e,t,n){"use strict";n.r(t);var r=n(10),c=n.n(r),a=n(38),i=n.n(a),u=n(11),s=n(30),j=n(12),o=n(0),b=n.n(o),O=n(2),l=n(39),d=n(25),p=n(21),f=n(40);Object(l.a)({apiKey:"AIzaSyBs7c2CkVFHs5duttbTfYUVgUcIu0GEVGE",authDomain:"nwitter-e736c.firebaseapp.com",projectId:"nwitter-e736c",storageBucket:"nwitter-e736c.appspot.com",messagingSenderId:"40958208852",appId:"1:40958208852:web:e8240e7d90affad1ad36c1"});var x=Object(d.d)(),h=Object(p.e)(),m=Object(f.a)(),v=n(7),g=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(u.a)(a,2),s=i[0],j=i[1],o=Object(r.useState)(!0),l=Object(u.a)(o,2),p=l[0],f=l[1],h=Object(r.useState)(""),m=Object(u.a)(h,2),g=m[0],w=m[1],y=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?c(r):"password"===n&&j(r)},k=function(){var e=Object(O.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,Object(d.c)(x,n,s);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,Object(d.e)(x,n,s);case 10:r=e.sent;case 11:console.log(r),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),w(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:k,children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:s,onChange:y}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Sign in"}),g]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},children:p?"Sign in":"Create Account"})]})},w=function(){var e=function(){var e=Object(O.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?r=new d.b:"github"===n&&(r=new d.a),e.next=4,Object(d.f)(x,r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsx)(g,{}),Object(v.jsxs)("div",{children:[Object(v.jsx)("button",{onClick:e,name:"google",children:"Continue With Google"}),Object(v.jsx)("button",{onClick:e,name:"github",children:"Continue With Github"})]})]})},y=n(31),k=n(22),C=function(e){var t=e.refreshUser,n=e.userObj,c=Object(j.f)(),a=Object(r.useState)(n.displayName),i=Object(u.a)(a,2),s=i[0],o=i[1],l=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(k.i)(Object(k.b)(h,"nweets"),Object(k.k)("creatorId","==",n.uid),Object(k.h)("createdAt")),e.next=3,Object(k.e)(t);case 3:e.sent.forEach((function(e){console.log(e.id,"=>",e.data())}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){l()}),[]);var d=function(){var e=Object(O.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n.displayName===s){e.next=5;break}return e.next=4,Object(y.g)(n,{displayName:s});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:d,children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"Display name",value:s}),Object(v.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(v.jsx)("button",{onClick:function(){x.signOut(),c("/")},children:"Log Out"})]})},S=n(15),U=n(35),I=n(29),N=n(24),A=function(e){var t=e.nweetObj,n=e.isOwner,r=Object(I.useState)(!1),c=Object(u.a)(r,2),a=c[0],i=c[1],s=Object(I.useState)(t.text),j=Object(u.a)(s,2),o=j[0],l=j[1],d=Object(p.c)(h,"nweets","".concat(t.id)),f=Object(N.d)(m,t.attachmentUrl),x=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this nweet?")){e.next=6;break}return e.next=4,Object(p.b)(d);case 4:return e.next=6,Object(N.a)(f);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){return i((function(e){return!e}))},w=function(){var e=Object(O.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(p.i)(d,{text:o});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{children:a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,children:[Object(v.jsx)("input",{type:"text",placeholder:"Edit your nweet",value:o,required:!0,onChange:function(e){var t=e.target.value;l(t)}}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(v.jsx)("button",{onClick:g,children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("h4",{children:[" ",t.text]}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("button",{onClick:x,children:"Delete Nweet"}),Object(v.jsx)("button",{onClick:g,children:"Update Nweet"})]})]})})},D=n(50),E=function(e){var t=e.userObj,n=Object(r.useState)(""),c=Object(u.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(""),j=Object(u.a)(s,2),o=j[0],l=j[1],d=function(){var e=Object(O.a)(b.a.mark((function e(n){var r,c,u,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""===o){e.next=11;break}return c=Object(N.d)(m,"".concat(t.uid,"/").concat(Object(D.a)())),e.next=6,Object(N.e)(c,o,"data_url");case 6:return u=e.sent,console.log(u),e.next=10,Object(N.b)(u.ref);case 10:r=e.sent;case 11:return s={text:a,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r},e.next=14,Object(k.a)(Object(k.b)(h,"nweets"),s);case 14:i(""),l("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:d,children:[Object(v.jsx)("input",{value:a,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)}}),Object(v.jsx)("input",{type:"submit",value:"Nweet"}),o&&Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{src:o,width:"50px",height:"50px"}),Object(v.jsx)("button",{onClick:function(){return l(null)},children:"Clear"})]})]})},F=function(e){var t=e.userObj,n=Object(I.useState)([]),c=Object(u.a)(n,2),a=c[0],i=c[1],s=function(){var e=Object(O.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.d)(Object(p.a)(h,"nweets"));case 2:e.sent.docs.map((function(e){var t=Object(U.a)(Object(U.a)({},e.data()),{},{id:e.id});i((function(e){return[t].concat(Object(S.a)(e))}))}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s();var e=Object(p.h)(Object(p.a)(h,"nweets"),Object(p.g)("createdAt","desc"));Object(p.f)(e,(function(e){var t=e.docs.map((function(e){return Object(U.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(v.jsxs)("div",{children:[Object(v.jsx)(E,{userObj:t}),Object(v.jsx)("div",{children:a.map((function(e){return Object(v.jsx)(A,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},P=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(s.b,{to:"/",children:"Home"})}),Object(v.jsx)("li",{children:Object(v.jsxs)(s.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})})]})})},L=function(e){var t=e.refreshUser,n=e.isLoggedIn,r=e.userObj;return Object(v.jsxs)(s.a,{children:[n&&Object(v.jsx)(P,{userObj:r}),Object(v.jsx)(j.c,{children:n?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(j.a,{exact:!0,path:"/",element:Object(v.jsx)(F,{userObj:r})}),Object(v.jsx)(j.a,{exact:!0,path:"/profile",element:Object(v.jsx)(C,{userObj:r,refreshUser:t})})]}):Object(v.jsx)(j.a,{path:"/",element:Object(v.jsx)(w,{})})})]})};var B=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(null),i=Object(u.a)(a,2),s=i[0],j=i[1];return Object(r.useEffect)((function(){x.onAuthStateChanged((function(e){e?(j({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}),j(e)):j(null),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(L,{refreshUser:function(){var e=x.currentUser;j({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(s),userObj:s}):"Initializing..."})};i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.b0f6286c.chunk.js.map