"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[565],{14:function(e,r,n){n.d(r,{Z:function(){return i}});n(791);var t="Error_alert__OfXrQ",s=n(184),i=function(e){var r=e.message;return(0,s.jsx)("div",{className:t,children:r})}},565:function(e,r,n){n.r(r),n.d(r,{default:function(){return g}});var t=n(861),s=n(439),i=n(757),a=n.n(i),c=n(791),l="Footer_title__8j6k8",o=n(294),u=n(14),h=n(184),d={method:"GET",url:"https://api.themoviedb.org/3/trending/movie/week",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI"}};o.Z.request(d).then((function(e){})).catch((function(e){u.Z}));var f={trendingMovies:d},p="ErrorAlert_alert__fxj6k",v="ErrorAlert_content__SQdyP",j="ErrorAlert_close__hfyPX",x=n(566),m=function(e){var r=e.errors,n=(0,c.useState)(!1),t=(0,s.Z)(n,2),i=t[0],a=t[1];if(0!==r.length&&!i)return(0,h.jsx)("section",{className:p,children:(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("p",{children:r}),(0,h.jsx)("span",{className:j,onClick:function(){return a(!0)},children:(0,h.jsx)(x.apv,{})})]})})},_=(0,c.lazy)((function(){return n.e(248).then(n.bind(n,248))})),I=function(e){e.inputValue,e.onClick;var r=(0,c.useState)(""),n=(0,s.Z)(r,2),i=n[0],u=n[1],d=(0,c.useState)([]),p=(0,s.Z)(d,2),v=p[0],j=p[1],x=(0,c.useState)(!1),I=(0,s.Z)(x,2),g=I[0],k=I[1],z=function(){var e=(0,t.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,o.Z.request(f.trendingMovies);case 4:r=e.sent,j(r.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u("An error occurred while retrieving the movies.");case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){z()}),[]),g?(0,h.jsx)("p",{children:"I am waiting for the results."}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:l,children:"Trending Movies"}),i&&(null===i||void 0===i?void 0:i.length)>0&&(0,h.jsx)(m,{errors:i}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)("p",{children:"Loading..."}),children:v.length>0?(0,h.jsx)(_,{results:v}):null})]})};var g=function(){return(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(I,{})})}}}]);
//# sourceMappingURL=565.397c6d33.chunk.js.map