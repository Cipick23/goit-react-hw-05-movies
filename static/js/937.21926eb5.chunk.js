"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937,526],{937:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),a=r(439),s=r(757),c=r.n(s),o=r(791),i=r(87),u="MoviesSearch_searchContainer__kEmNf",h="MoviesSearch_searchResultsContainer__0+CDr",l="MoviesSearch_Header__HGeGV",p="MoviesSearch_SearchForm__eo10I",v="MoviesSearch_SearchFormButton__idN+r",d="MoviesSearch_SearchFormInput__LiOA9",f="MoviesSearch_list__AdYJ3",m="MoviesSearch_navLink__71EHg",_="MoviesSearch_navLinkActive__D5wLt",x=r(294),S=r(184),g=(0,o.createContext)(),j=function(e){var t=e.handleInputChange,r=(0,o.useContext)(g),s=r.searchResults,j=r.searchError,k=r.updateSearchResults,C=(0,o.useState)(""),N=(0,a.Z)(C,2),w=N[0],y=N[1],M=function(){var e=(0,n.Z)(c().mark((function e(r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),"function"===typeof t?t(w):console.error("handleInputChange is not a function"),e.prev=2,e.next=5,x.Z.get("https://api.themoviedb.org/3/search/movie",{params:{include_adult:!1,language:"en-US",page:1,query:w},headers:{accept:"application/json",Authorization:"Bearer your-api-key"}});case 5:0===(n=e.sent).data.results.length?k([],"No results found for the given search term."):k(n.data.results,""),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),k([],"An error occurred while fetching search results from API.");case 12:y("");case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,S.jsx)("section",{className:l,children:(0,S.jsxs)("div",{className:u,children:[(0,S.jsxs)("form",{className:p,onSubmit:M,children:[(0,S.jsx)("button",{type:"submit",className:v}),(0,S.jsx)("input",{name:"input",type:"text",autoComplete:"off",onChange:function(e){y(e.target.value)},value:w,autoFocus:!0,placeholder:"Search movies",className:d})]}),j&&(0,S.jsx)("p",{children:j}),s.length>0&&(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)("h2",{children:"Search Results:"}),(0,S.jsx)("ul",{children:s.map((function(e){return(0,S.jsx)("li",{className:f,children:(0,S.jsx)(i.OL,{className:function(e){return e?"".concat(m," ").concat(_):m},to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})]})})}},861:function(e,t,r){function n(e,t,r,n,a,s,c){try{var o=e[s](c),i=o.value}catch(u){return void r(u)}o.done?t(i):Promise.resolve(i).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,s){var c=e.apply(t,r);function o(e){n(c,a,s,o,i,"next",e)}function i(e){n(c,a,s,o,i,"throw",e)}o(void 0)}))}}r.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=937.21926eb5.chunk.js.map