"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[980,361],{14:function(e,t,n){n.d(t,{Z:function(){return a}});n(791);var r="Error_alert__OfXrQ",i=n(184),a=function(e){var t=e.message;return(0,i.jsx)("div",{className:r,children:t})}},980:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),i=n(439),a=n(757),s=n.n(a),c=n(791),o=n(689),l=n(87),h={flex:"MovieDetails_flex__kgnkt",imgContainer:"MovieDetails_imgContainer__DH7Dp",ImageGalleryItem:"MovieDetails_ImageGalleryItem__Q0TGE",additionalInformation:"MovieDetails_additionalInformation__eIrCc"},u="Loader_LoaderContainer__hkMAc",d=n(154),m=n(184),p=function(){return(0,m.jsx)("div",{className:u,children:(0,m.jsx)(d.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})},f=n(14),v=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU"}}).then((function(e){return e.json()})).catch((function(t){throw console.error("Error fetching movie details for ID: ".concat(e),t),t}))},j={gridContainer:"MovieCast_gridContainer__z+CKG",actorContainer:"MovieCast_actorContainer__zYCfE"},x=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?language=en-US"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU"}}).then((function(e){return e.json()})).catch((function(t){throw console.error("Error fetching movie details for ID: ".concat(e),t),t}))},I=function(){var e=(0,c.useState)([]),t=(0,i.Z)(e,2),n=t[0],a=t[1],l=(0,c.useState)(!1),h=(0,i.Z)(l,2),u=h[0],d=h[1],v=(0,c.useState)(""),I=(0,i.Z)(v,2),g=I[0],N=I[1],_=(0,o.UO)().id;return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d(!0),e.next=4,x(_);case 4:t=e.sent,a(t.cast),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f.Z,e.t0,N("An error occurred while retrieving cast details.");case 12:return e.prev=12,d(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[_]),u?(0,m.jsx)(p,{}):g&&g.length>0?(0,m.jsx)(f.Z,{message:g}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("div",{className:j.gridContainer,children:n.map((function(e){return(0,m.jsxs)("div",{className:j.actorContainer,children:[(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:e.name,className:j.actorImage}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:e.name}),(0,m.jsxs)("p",{children:["Character: ",e.character]})]})]},e.id)}))})})},g={},N=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?language=en-US&page=1"),{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmZiNGNlMzE4ZWEyMzFmODJjN2Y3MTc5NmFhM2M2ZSIsInN1YiI6IjY1NzBkZjkyZGQ3MzFiMDBhYjk2Nzc0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F4GA0UkBmMTH3hTtFSbrMrSBqudmtfgqt4w1tmAKyIU"}}).then((function(e){return e.json()})).catch((function(t){throw console.error("Error fetching movie details for ID: ".concat(e),t),t}))},_=function(e){e.movieDetails;var t=(0,c.useState)([]),n=(0,i.Z)(t,2),a=n[0],l=n[1],h=(0,c.useState)(!1),u=(0,i.Z)(h,2),d=u[0],v=u[1],j=(0,c.useState)(""),x=(0,i.Z)(j,2),I=x[0],_=x[1],M=(0,o.UO)().id;return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,N(M);case 4:t=e.sent,l(t.results),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f.Z,e.t0,_("An error occurred while retrieving movie reviews.");case 12:return e.prev=12,v(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[M]),d?(0,m.jsx)(p,{}):I&&I.length>0?(0,m.jsx)(f.Z,{message:I}):(0,m.jsxs)("div",{className:g.reviewsContainer,children:[(0,m.jsx)("h2",{className:g.reviewsTitle,children:"Reviews"}),a.length>0?(0,m.jsx)("ul",{className:g.reviewList,children:a.map((function(e){return(0,m.jsxs)("li",{className:g.reviewItem,children:[(0,m.jsx)("h3",{children:e.author}),(0,m.jsx)("p",{children:e.content})]},e.id)}))}):(0,m.jsx)("p",{className:g.noReviews,children:"No reviews available"})]})},M=n(361),Z=n(566),S="BackLink_link__ItSmp",w=function(e){var t=e.to,n=e.children;return(0,m.jsxs)(l.rU,{to:t,className:S,children:[(0,m.jsx)(Z.jTe,{size:"22"}),n]})},y=function(){var e=(0,c.useState)({id:0,poster_path:"",title:"",popularity:"",genres:[],overview:"",description:""}),t=(0,i.Z)(e,2),n=t[0],a=t[1],u=(0,c.useState)(!1),d=(0,i.Z)(u,2),j=d[0],x=d[1],g=(0,c.useState)(""),N=(0,i.Z)(g,2),Z=N[0],S=N[1],y=(0,o.UO)().id,J=(0,o.TH)();if((0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!0),e.next=4,v(y);case 4:t=e.sent,a(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),f.Z,e.t0,S("An error occurred while retrieving movie details.");case 12:return e.prev=12,x(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]),j)return(0,m.jsx)(p,{});if(Z&&Z.length>0)return(0,m.jsx)(f.Z,{message:Z});var z=n.genres.map((function(e){return e.name})).join(", "),C=J.pathname.includes("/movies")&&!J.pathname.includes("/movies/");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(w,{to:"/movies",children:"Back"}),C&&(0,m.jsx)(M.default,{handleInputChange:function(e){console.log("Input value in MovieDetails:",e)}}),(0,m.jsxs)("div",{className:h.flex,children:[(0,m.jsx)("div",{className:h.imgContainer,children:(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(n.poster_path),alt:n.title,className:h.ImageGalleryItem})}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:n.title}),(0,m.jsxs)("p",{children:["Popularity: ",n.popularity]}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:n.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("p",{children:z})]})]}),(0,m.jsxs)("div",{className:h.flex,children:[(0,m.jsx)(l.OL,{to:"/movies/".concat(y,"/cast"),children:"Cast"}),(0,m.jsx)(l.OL,{to:"/movies/".concat(y,"/reviews"),children:"Reviews"})]}),(0,m.jsxs)("div",{className:h.additionalInformation,children:[(0,m.jsx)("h2",{className:h,children:"Additional information"}),(0,m.jsxs)(o.Z5,{children:[(0,m.jsx)(o.AW,{path:"cast",element:(0,m.jsx)(I,{movieDetails:n})}),(0,m.jsx)(o.AW,{path:"reviews",element:(0,m.jsx)(_,{movieDetails:n})})]})]})]})}},361:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(861),i=n(439),a=n(757),s=n.n(a),c=n(791),o=n(87),l="MoviesSearch_searchContainer__kEmNf",h="MoviesSearch_searchResultsContainer__0+CDr",u="MoviesSearch_Header__HGeGV",d="MoviesSearch_SearchForm__eo10I",m="MoviesSearch_SearchFormButton__idN+r",p="MoviesSearch_SearchFormInput__LiOA9",f="MoviesSearch_list__AdYJ3",v="MoviesSearch_navLink__71EHg",j="MoviesSearch_navLinkActive__D5wLt",x=n(294),I=n(14),g=n(184),N=function(e){var t=e.handleInputChange,n=(0,c.useState)(""),a=(0,i.Z)(n,2),N=a[0],_=a[1],M=(0,c.useState)([]),Z=(0,i.Z)(M,2),S=Z[0],w=Z[1],y=(0,c.useState)(""),J=(0,i.Z)(y,2),z=J[0],C=J[1],k=function(){var e=(0,r.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),"function"===typeof t?t(N):console.error("handleInputChange is not a function"),e.prev=2,e.next=5,x.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:N},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI"}});case 5:0===(r=e.sent).data.results.length?(w([]),C("No results found for the given search term.")):(w(r.data.results),C("")),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),I.Z,e.t0,w([]),C("An error occurred while fetching search results from API:");case 14:_("");case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,g.jsx)("section",{className:u,children:(0,g.jsxs)("div",{className:l,children:[(0,g.jsxs)("form",{className:d,onSubmit:k,children:[(0,g.jsx)("button",{type:"submit",className:m}),(0,g.jsx)("input",{name:"input",type:"text",autoComplete:"off",onChange:function(e){_(e.target.value)},value:N,autoFocus:!0,placeholder:"Search movies",className:p})]}),z&&(0,g.jsx)("p",{children:z}),S.length>0&&(0,g.jsxs)("div",{className:h,children:[(0,g.jsx)("h2",{children:"Search Results:"}),(0,g.jsx)("ul",{children:S.map((function(e){return(0,g.jsx)("li",{className:f,children:(0,g.jsx)(o.OL,{className:function(e){return e?"".concat(v," ").concat(j):v},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})]})})}}}]);
//# sourceMappingURL=980.23ff4673.chunk.js.map