"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{19:function(t,e,n){n.r(e);var r=n(439),a=n(791),i=n(689),c=n(992),u=n(184);e.default=function(){var t=(0,i.UO)().movieId,e=(0,a.useState)([]),n=(0,r.Z)(e,2),o=n[0],s=n[1];return(0,a.useEffect)((function(){(0,c.TP)(t,"reviews").then((function(t){return s(t.results)})).catch((function(t){return console.log(t)}))}),[t]),(0,u.jsx)(u.Fragment,{children:0!==o.length?(0,u.jsx)("ul",{children:o.map((function(t){var e=t.author_details,n=t.author,r=t.content,a=t.id;return(0,u.jsxs)("li",{children:[e.avatar_path&&(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w45".concat(e.avatar_path),alt:n}),(0,u.jsxs)("p",{children:["Author: ",n]}),(0,u.jsx)("p",{children:r})]},a)}))}):(0,u.jsx)("p",{children:"No reviews for this movie yet."})})}},992:function(t,e,n){n.d(e,{OQ:function(){return c},TP:function(){return u},xB:function(){return i}});var r=n(243),a="62b98c2ee90b8cb7c57f2d936e771a35";r.Z.defaults.baseURL="https://api.themoviedb.org";var i=function(){return r.Z.get("/3/trending/movie/week",{params:{api_key:a}}).then((function(t){return t.data}))},c=function(t){return r.Z.get("/3/search/movie",{params:{api_key:a,query:t,include_adult:!0}}).then((function(t){return t.data}))},u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.Z.get("/3/movie/".concat(t).concat(e?"/".concat(e):""),{params:{api_key:a}}).then((function(t){return t.data}))}}}]);
//# sourceMappingURL=19.676b0f56.chunk.js.map