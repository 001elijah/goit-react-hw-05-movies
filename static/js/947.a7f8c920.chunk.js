"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[947],{947:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),a=t(87),o=t(992),s=t(184);n.default=function(){var e,n,t,u,l=(0,c.UO)().movieId,d=(0,i.useState)([]),h=(0,r.Z)(d,2),v=h[0],f=h[1],p=(0,c.s0)(),j=(0,c.TH)();(0,i.useEffect)((function(){(0,o.TP)(l).then((function(e){return f(e)})).catch((function(e){return console.log(e)}))}),[l]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("button",{type:"button",onClick:function(){var e=j.state;p(e)},children:"Go back"}),(0,s.jsx)("img",{src:null!==(e="https://image.tmdb.org/t/p/w342".concat(v.poster_path))&&void 0!==e?e:null,alt:"".concat(v.title," Poster")}),(0,s.jsxs)("h1",{children:[v.title," (",null!==(n=null===(t=v.release_date)||void 0===t?void 0:t.slice(0,4))&&void 0!==n?n:"unknown release year",")"]}),(0,s.jsxs)("p",{children:["User Score: ",Math.floor(v.vote_average)," / 10"]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:v.overview}),(0,s.jsx)("h2",{children:"Genres"}),(0,s.jsx)("span",{children:null===(u=v.genres)||void 0===u?void 0:u.map((function(e){return"".concat(e.name," ")}))}),(0,s.jsx)("h3",{children:"Additional information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"cast",children:"Cast"})},"cast"),(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"reviews",children:"Reviews"})},"reviews")]}),(0,s.jsx)(c.j3,{})]})}},992:function(e,n,t){t.d(n,{OQ:function(){return a},TP:function(){return o},xB:function(){return c}});var r=t(243),i="62b98c2ee90b8cb7c57f2d936e771a35";r.Z.defaults.baseURL="https://api.themoviedb.org";var c=function(){return r.Z.get("/3/trending/movie/week",{params:{api_key:i}}).then((function(e){return e.data}))},a=function(e){return r.Z.get("/3/search/movie",{params:{api_key:i,query:e,include_adult:!0}}).then((function(e){return e.data}))},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return r.Z.get("/3/movie/".concat(e).concat(n?"/".concat(n):""),{params:{api_key:i}}).then((function(e){return e.data}))}}}]);
//# sourceMappingURL=947.a7f8c920.chunk.js.map