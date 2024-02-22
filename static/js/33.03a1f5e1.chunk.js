"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{14:function(e,n,i){i.d(n,{Z:function(){return a}});i(791);var t="Error_alert__OfXrQ",r=i(184),a=function(e){var n=e.message;return(0,r.jsx)("div",{className:t,children:n})}},33:function(e,n,i){i.r(n),i.d(n,{default:function(){return I}});var t=i(861),r=i(439),a=i(757),s=i.n(a),c=i(791),o=i(689),l=i(87),u=i(29),h=i(14),d="BackLink_link__ItSmp",v=i(566),m=i(184),f=function(e){e.to,e.children;var n=(0,o.s0)();return(0,m.jsx)("div",{children:(0,m.jsxs)("button",{className:d,type:"button",onClick:function(){return n(-1)},children:[(0,m.jsx)(v.jTe,{size:"22"}),"Go Back"]})})},p=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU"}}).then((function(e){return e.json()})).catch((function(n){throw console.error("Error fetching movie details for ID: ".concat(e),n),n}))},j={flex:"MovieDetails_flex__kgnkt",imgContainer:"MovieDetails_imgContainer__DH7Dp",ImageGalleryItem:"MovieDetails_ImageGalleryItem__Q0TGE",additionalInformation:"MovieDetails_additionalInformation__eIrCc",navLink:"MovieDetails_navLink__Yson-",navLinkActive:"MovieDetails_navLinkActive__cu4Gu"},x=(0,c.lazy)((function(){return i.e(534).then(i.bind(i,534))})),k=(0,c.lazy)((function(){return i.e(541).then(i.bind(i,541))})),_=(0,c.lazy)((function(){return Promise.all([i.e(294),i.e(526)]).then(i.bind(i,937))})),I=function(){var e=(0,c.useState)({id:0,poster_path:"",title:"",popularity:"",genres:[],overview:"",description:""}),n=(0,r.Z)(e,2),i=n[0],a=n[1],d=(0,c.useState)(!1),v=(0,r.Z)(d,2),I=v[0],g=v[1],N=(0,c.useState)(""),y=(0,r.Z)(N,2),Z=y[0],M=y[1],b=(0,o.UO)().id,w=(0,o.TH)();if((0,c.useEffect)((function(){function e(){return(e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,p(b);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),M("An error occurred while retrieving movie details.");case 11:return e.prev=11,g(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),I)return(0,m.jsx)(u.Z,{});if(Z&&Z.length>0)return(0,m.jsx)(h.Z,{message:Z});var A=i.genres.map((function(e){return e.name})).join(", "),D=w.pathname.includes("movies")&&!w.pathname.includes("movies/");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{}),D&&(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(u.Z,{}),children:(0,m.jsx)(_,{handleInputChange:function(e){console.log("Input value in MovieDetails:",e)}})}),(0,m.jsxs)("div",{className:j.flex,children:[(0,m.jsx)("div",{className:j.imgContainer,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(i.poster_path),alt:i.title,className:j.ImageGalleryItem})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:i.title}),(0,m.jsxs)("p",{children:["Popularity: ",i.popularity]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:i.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:A})]})]}),(0,m.jsxs)("div",{className:j.flex,children:[(0,m.jsx)(l.OL,{to:"/movies/".concat(b,"/cast"),className:function(e){var n=e.isActive;return[j.navLink,n?j.navLinkActive:""].join(" ")},children:"Cast"}),(0,m.jsx)(l.OL,{to:"/movies/".concat(b,"/reviews"),className:function(e){var n=e.isActive;return[j.navLink,n?j.navLinkActive:""].join(" ")},children:"Reviews"})]}),(0,m.jsxs)("div",{className:j.additionalInformation,children:[(0,m.jsx)("h2",{className:j,children:"Additional information"}),(0,m.jsxs)(o.Z5,{children:[(0,m.jsx)(o.AW,{path:"cast",element:(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(u.Z,{}),children:(0,m.jsx)(x,{})})}),(0,m.jsx)(o.AW,{path:"reviews",element:(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(u.Z,{}),children:(0,m.jsx)(k,{movieDetails:i})})})]})]})]})}}}]);
//# sourceMappingURL=33.03a1f5e1.chunk.js.map