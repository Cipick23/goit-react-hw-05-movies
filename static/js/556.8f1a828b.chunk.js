"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[556,361],{14:function(e,t,r){r.d(t,{Z:function(){return a}});r(791);var n="Error_alert__OfXrQ",c=r(184),a=function(e){var t=e.message;return(0,c.jsx)("div",{className:n,children:t})}},361:function(e,t,r){r.r(t),r.d(t,{default:function(){return y}});var n=r(861),c=r(439),a=r(757),o=r.n(a),i=r(791),s=r(87),u="MoviesSearch_searchContainer__kEmNf",l="MoviesSearch_searchResultsContainer__0+CDr",h="MoviesSearch_Header__HGeGV",f="MoviesSearch_SearchForm__eo10I",p="MoviesSearch_SearchFormButton__idN+r",v="MoviesSearch_SearchFormInput__LiOA9",d="MoviesSearch_list__AdYJ3",m="MoviesSearch_navLink__71EHg",_="MoviesSearch_navLinkActive__D5wLt",j=r(294),b=r(14),O=r(184),y=function(e){var t=e.handleInputChange,r=(0,i.useState)(""),a=(0,c.Z)(r,2),y=a[0],g=a[1],S=(0,i.useState)([]),w=(0,c.Z)(S,2),x=w[0],I=w[1],N=(0,i.useState)(""),M=(0,c.Z)(N,2),C=M[0],J=M[1],k=function(){var e=(0,n.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),"function"===typeof t?t(y):console.error("handleInputChange is not a function"),e.prev=2,e.next=5,j.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:y},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YzFjMWQ0MjljYzEzYmFhOTQ5OTI1N2VlMzJiNDU0YSIsInN1YiI6IjY1YzM0NzFlOTVhY2YwMDE4MzFjYzFhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JLn5JCCJxeGxonVwpy_8IiREG1kTSzIQforDO2lzJwI"}});case 5:0===(n=e.sent).data.results.length?(I([]),J("No results found for the given search term.")):(I(n.data.results),J("")),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),b.Z,e.t0,I([]),J("An error occurred while fetching search results from API:");case 14:g("");case 15:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,O.jsx)("section",{className:h,children:(0,O.jsxs)("div",{className:u,children:[(0,O.jsxs)("form",{className:f,onSubmit:k,children:[(0,O.jsx)("button",{type:"submit",className:p}),(0,O.jsx)("input",{name:"input",type:"text",autoComplete:"off",onChange:function(e){g(e.target.value)},value:y,autoFocus:!0,placeholder:"Search movies",className:v})]}),C&&(0,O.jsx)("p",{children:C}),x.length>0&&(0,O.jsxs)("div",{className:l,children:[(0,O.jsx)("h2",{children:"Search Results:"}),(0,O.jsx)("ul",{children:x.map((function(e){return(0,O.jsx)("li",{className:d,children:(0,O.jsx)(s.OL,{className:function(e){return e?"".concat(m," ").concat(_):m},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})]})})}},861:function(e,t,r){function n(e,t,r,n,c,a,o){try{var i=e[a](o),s=i.value}catch(u){return void r(u)}i.done?t(s):Promise.resolve(s).then(n,c)}function c(e){return function(){var t=this,r=arguments;return new Promise((function(c,a){var o=e.apply(t,r);function i(e){n(o,c,a,i,s,"next",e)}function s(e){n(o,c,a,i,s,"throw",e)}i(void 0)}))}}r.d(t,{Z:function(){return c}})},683:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=556.8f1a828b.chunk.js.map