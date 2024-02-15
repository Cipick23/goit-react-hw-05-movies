"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{14:function(e,n,t){t.d(n,{Z:function(){return a}});t(791);var i="Error_alert__OfXrQ",r=t(184),a=function(e){var n=e.message;return(0,r.jsx)("div",{className:i,children:n})}},167:function(e,n,t){t.d(n,{Z:function(){return s}});t(791);var i="Loader_LoaderContainer__hkMAc",r=t(154),a=t(184),s=function(){return(0,a.jsx)("div",{className:i,children:(0,a.jsx)(r.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},33:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(861),r=t(439),a=t(757),s=t.n(a),c=t(791),l=t(689),o=t(87),h=t(167),u=t(14),d=t(566),m="BackLink_link__ItSmp",p=t(184),f=function(e){var n=e.to,t=e.children;return(0,p.jsxs)(o.rU,{to:n,className:m,children:[(0,p.jsx)(d.jTe,{size:"22"}),t]})},j=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU"}}).then((function(e){return e.json()})).catch((function(n){throw console.error("Error fetching movie details for ID: ".concat(e),n),n}))},v={flex:"MovieDetails_flex__kgnkt",imgContainer:"MovieDetails_imgContainer__DH7Dp",ImageGalleryItem:"MovieDetails_ImageGalleryItem__Q0TGE",additionalInformation:"MovieDetails_additionalInformation__eIrCc"},x=(0,c.lazy)((function(){return t.e(534).then(t.bind(t,534))})),g=(0,c.lazy)((function(){return t.e(541).then(t.bind(t,541))})),_=(0,c.lazy)((function(){return Promise.all([t.e(294),t.e(361)]).then(t.bind(t,361))})),I=function(){var e=(0,c.useState)({id:0,poster_path:"",title:"",popularity:"",genres:[],overview:"",description:""}),n=(0,r.Z)(e,2),t=n[0],a=n[1],d=(0,c.useState)(!1),m=(0,r.Z)(d,2),I=m[0],k=m[1],y=(0,c.useState)(""),N=(0,r.Z)(y,2),Z=N[0],w=N[1],b=(0,l.UO)().id,M=(0,l.TH)();if((0,c.useEffect)((function(){function e(){return(e=(0,i.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,j(b);case 4:n=e.sent,a(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w("An error occurred while retrieving movie details.");case 11:return e.prev=11,k(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[b]),I)return(0,p.jsx)(h.Z,{});if(Z&&Z.length>0)return(0,p.jsx)(u.Z,{message:Z});var S=t.genres.map((function(e){return e.name})).join(", "),z=M.pathname.includes("/movies")&&!M.pathname.includes("/movies/");return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f,{to:"/movies",children:"Back"}),z&&(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(h.Z,{}),children:(0,p.jsx)(_,{handleInputChange:function(e){console.log("Input value in MovieDetails:",e)}})}),(0,p.jsxs)("div",{className:v.flex,children:[(0,p.jsx)("div",{className:v.imgContainer,children:(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(t.poster_path),alt:t.title,className:v.ImageGalleryItem})}),(0,p.jsxs)("div",{children:[(0,p.jsx)("h1",{children:t.title}),(0,p.jsxs)("p",{children:["Popularity: ",t.popularity]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:t.overview}),(0,p.jsx)("h3",{children:"Genres"}),(0,p.jsx)("p",{children:S})]})]}),(0,p.jsxs)("div",{className:v.flex,children:[(0,p.jsx)(o.OL,{to:"/movies/".concat(b,"/cast"),children:"Cast"}),(0,p.jsx)(o.OL,{to:"/movies/".concat(b,"/reviews"),children:"Reviews"})]}),(0,p.jsxs)("div",{className:v.additionalInformation,children:[(0,p.jsx)("h2",{className:v,children:"Additional information"}),(0,p.jsxs)(l.Z5,{children:[(0,p.jsx)(l.AW,{path:"cast",element:(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(h.Z,{}),children:(0,p.jsx)(x,{})})}),(0,p.jsx)(l.AW,{path:"reviews",element:(0,p.jsx)(c.Suspense,{fallback:(0,p.jsx)(h.Z,{}),children:(0,p.jsx)(g,{movieDetails:t})})})]})]})]})}}}]);
//# sourceMappingURL=33.2a18ec1d.chunk.js.map