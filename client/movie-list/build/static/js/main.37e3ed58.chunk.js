(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),i=a.n(c),o=(a(31),a(11)),l=a(1),s=function(){return r.a.createElement("nav",null,r.a.createElement("ul",{id:"menu-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"Movies")),r.a.createElement("li",null,r.a.createElement("a",{href:"/favorites"},"Favorites"))),r.a.createElement("div",{id:"login"},r.a.createElement("a",{href:"/"},"Login")))},m=function(){return r.a.createElement("footer",null,"\xa9 2020 Alladin Melico")},u=a(8),d=a.n(u),p=a(10),v=a(19),g=a(20),h=a(9),f=a(25),b=a(24),E=function(e){return r.a.createElement("div",{id:"movie-list"},Object.values(e.movies).map((function(e){return r.a.createElement("div",{className:"movie-item",key:e.id},r.a.createElement(o.b,{to:"/movie-details/".concat(e.id)},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w185".concat(e.poster_path),alt:""})),r.a.createElement("p",null,e.title),r.a.createElement("small",null,new Date(e.release_date).getFullYear()))})))},k=a(22),w=a.n(k);a(41).config();var j=function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(v.a)(this,a),(e=t.call(this)).state={trending:[],currentPage:1,offset:3},e.fetchTrending=e.fetchTrending.bind(Object(h.a)(e)),e.handlePageClick=e.handlePageClick.bind(Object(h.a)(e)),e}return Object(g.a)(a,[{key:"fetchTrending",value:function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat("f74ea2d2a1b56702b469bdae78d2c803","&page=").concat(t));case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.status);case 6:return e.next=8,a.json();case 8:n=e.sent,this.setState({trending:n.results,pageCount:n.total_pages}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchTrending(this.state.currentPage)}},{key:"handlePageClick",value:function(e){window.scrollTo(0,0),this.fetchTrending(++e.selected)}},{key:"render",value:function(){return r.a.createElement("div",{id:"main-content"},r.a.createElement(E,{movies:this.state.trending}),r.a.createElement(w.a,{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"pagination-active"}))}}]),a}(r.a.Component),x=function(){return r.a.createElement("div",null,"gg")},y=a(23);var C=function(e){var t=e.match;Object(n.useEffect)((function(){l()}),[]);var a=Object(n.useState)({}),c=Object(y.a)(a,2),i=c[0],o=c[1],l=function(){var e=Object(p.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat("f74ea2d2a1b56702b469bdae78d2c803","&language=en-US"));case 2:return a=e.sent,e.next=5,a.json();case 5:n=e.sent,o(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s={backgroundImage:"url(http://image.tmdb.org/t/p/w1280/"+i.backdrop_path+")"};return r.a.createElement("div",{className:"movie-details"},r.a.createElement("div",{style:s,className:"bg-image"}),r.a.createElement("div",{className:"movie-content"},r.a.createElement("img",{src:"http://image.tmdb.org/t/p/w342/".concat(i.poster_path),alt:""}),r.a.createElement("div",{className:"movie-content-text"},r.a.createElement("h3",null,i.original_title),r.a.createElement("p",null,i.overview))))};var O=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(s,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:j}),r.a.createElement(l.a,{path:"/favorites",exact:!0,component:x}),r.a.createElement(l.a,{path:"/movie-details/:id",component:C})),r.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.37e3ed58.chunk.js.map