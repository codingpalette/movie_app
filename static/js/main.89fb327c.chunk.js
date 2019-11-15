(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{30:function(e,t,n){e.exports=n.p+"static/media/popcorn.23b3db02.jpg"},48:function(e,t,n){e.exports=n(78)},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(39),o=n.n(i),l=n(9),u=n(10),c=n(12),s=n(11),p=n(13),m=n(19),d=n(17),g=n(7),f=n.n(g),v=n(16),h=n(2),b=n(1),E=n(15),y=n.n(E);function x(){var e=Object(h.a)(["\n    margin-top:25px;\n    display:grid;\n    grid-template-columns:repeat(auto-fill , 125px);\n    grid-gap:25px;\n"]);return x=function(){return e},e}function _(){var e=Object(h.a)(["\n    font-size: 14px;\n    font-weight:600;\n    \n"]);return _=function(){return e},e}function j(){var e=Object(h.a)(["\n    :not(:last-child) {\n        margin-bottom:25px;\n    }\n"]);return j=function(){return e},e}var O=b.default.div(j()),k=b.default.span(_()),w=b.default.div(x()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(O,null,r.a.createElement(k,null,t),r.a.createElement(w,null,n))};function T(){var e=Object(h.a)(["\n    height:100vh;\n    width:100vw;\n    display : flex;\n    justify-content:center;\n    font-size:32px;\n    margin-top:20px;\n\n"]);return T=function(){return e},e}var R=b.default.div(T()),U=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loading"},"Loader"))},M=n(4),z=n.n(M);function F(){var e=Object(h.a)(["\n    color: ",";\n    font-weight:600;\n"]);return F=function(){return e},e}function G(){var e=Object(h.a)(["\n    width:100vw;\n    display:flex;\n    justify-content:center;\n"]);return G=function(){return e},e}var A=b.default.div(G()),C=b.default.span(F(),(function(e){return e.color})),I=function(e){var t=e.text,n=e.color;return r.a.createElement(A,null,r.a.createElement(C,{color:n},t))};I.prototype={Text:z.a.string.isRequired,color:z.a.string.isRequired};var P=I;function D(){var e=Object(h.a)(["\n    font-size:10px;\n    color:rgba(255,255,255,0.5);\n"]);return D=function(){return e},e}function q(){var e=Object(h.a)(["\n    display:block;\n    margin-bottom:3px;\n"]);return q=function(){return e},e}function B(){var e=Object(h.a)(["\n    margin-bottom:5px;\n    position: relative;\n    &:hover{\n        "," {\n            opacity:0.3;\n        }\n        "," {\n            opacity:1;\n        }\n    }\n"]);return B=function(){return e},e}function L(){var e=Object(h.a)(["\n    position:absolute;\n    bottom:5px;\n    right:5px;\n    opacity:0;\n    transition:opacity 0.1s linear;\n"]);return L=function(){return e},e}function N(){var e=Object(h.a)(["\n    /* background-image:url( ","); */\n    background-image:url( ",");\n    height:180px;\n    background-size:cover;\n    border-radius:4px;\n    background-position:center center;\n    transition:opacity 0.1s linear;\n"]);return N=function(){return e},e}function J(){var e=Object(h.a)(["\n    font-size:12px;\n"]);return J=function(){return e},e}var V=b.default.div(J()),H=b.default.div(N(),(function(e){return"https://image.tmdb.org/t/p/w300".concat(e.bgUrl)}),(function(e){return e.bgUrl})),K=b.default.span(L()),Q=b.default.div(B(),H,K),W=b.default.span(q()),X=b.default.span(D()),Y=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,u=e.isMovie,c=void 0!==u&&u;return r.a.createElement(m.b,{to:c?"/movie/".concat(t):"/show/".concat(t)},r.a.createElement(V,null,r.a.createElement(Q,null,r.a.createElement(H,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(30)}),r.a.createElement(K,null,r.a.createElement("span",null,"\ubcc4\uc810"),o,"/10")),r.a.createElement(W,null,i.length>15?"".concat(i.substring(0,15)," ..."):i),r.a.createElement(X,null,l)))};Y.prototype={id:z.a.number.isRequired,imageUrl:z.a.string,title:z.a.string.isRequired,rating:z.a.number,year:z.a.string,isMovie:z.a.bool};var Z=Y;function $(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return $=function(){return e},e}var ee=b.default.div($()),te=function(e){var t=e.nowPlaying,n=e.popular,a=e.upcoming,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Movies | App ")),o?r.a.createElement(U,null):r.a.createElement(ee,null,t&&t.length>0&&r.a.createElement(S,{title:"Now Playing"},t.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(S,{title:"upcoming Movie"},a.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"popular Movie"},n.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})}))),i&&r.a.createElement(P,{color:"#e74c3c",text:i})))},ne=n(44),ae=n.n(ne).a.create({baseURL:"https://api.themoviedb.org/3"}),re={nowPlaying:function(){return ae({method:"GET",url:"/movie/now_playing",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},upcoming:function(){return ae({method:"GET",url:"/movie/upcoming",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},popular:function(){return ae({method:"GET",url:"/movie/popular",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},movieDetail:function(e){return ae({method:"GET",url:"/movie/".concat(e),params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US",append_to_response:"videos"}})},search:function(e){return ae({method:"GET",url:"/search/movie",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US",query:encodeURIComponent(e)}})}},ie={topRated:function(){return ae({method:"GET",url:"/tv/top_rated",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},popular:function(){return ae({method:"GET",url:"/tv/popular",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},airingToday:function(){return ae({method:"GET",url:"/tv/airing_today",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US"}})},showDetail:function(e){return ae({method:"GET",url:"/tv/".concat(e),params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US",append_to_response:"videos"}})},search:function(e){return ae({method:"GET",url:"/search/tv",params:{api_key:"a992d1fae6c06b990f53908e421ee199",language:"en-US",query:encodeURIComponent(e)}})}},oe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.nowPlaying();case 3:return t=e.sent,n=t.data.results,e.next=7,re.upcoming();case 7:return a=e.sent,r=a.data.results,e.next=11,re.popular();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"\uc5d0\ub7ec \uc785\ub2c8\ub2e4."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(te,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function le(){var e=Object(h.a)(["\n    padding: 20px;\n"]);return le=function(){return e},e}var ue=b.default.div(le()),ce=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"TV Shows | App ")),o?r.a.createElement(U,null):r.a.createElement(ue,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&a.length>0&&r.a.createElement(S,{title:"AiringToday Shows"},a.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),i&&r.a.createElement(P,{color:"#e74c3c",text:i})))},se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ie.topRated();case 3:return t=e.sent,n=t.data.results,e.next=7,ie.popular();case 7:return a=e.sent,r=a.data.results,e.next=11,ie.airingToday();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"\uc5d0\ub7ec \uc785\ub2c8\ub2e4."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(ce,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),t}(r.a.Component);function pe(){var e=Object(h.a)(["\n    all:unset;\n    font-size:23px;\n    width:100%;\n"]);return pe=function(){return e},e}function me(){var e=Object(h.a)(["\n    margin-bottom:50px;\n"]);return me=function(){return e},e}function de(){var e=Object(h.a)(["\n    padding:20px;\n"]);return de=function(){return e},e}var ge=b.default.div(de()),fe=b.default.form(me()),ve=b.default.input(pe()),he=function(e){var t=e.movieResults,n=e.tvResults,a=e.error,i=e.loading,o=e.searchTerm,l=e.handleSubmit,u=e.updateTerm;return r.a.createElement(ge,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Search | App ")),r.a.createElement(fe,{onSubmit:l},r.a.createElement(ve,{placeholder:"\uac80\uc0c9...",value:o,onChange:u})),i?r.a.createElement(U,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"movie Result"},t.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,isMovie:!0,year:e.release_date.substring(0,4)})}))),n&&n.length>0&&r.a.createElement(S,{title:"tv Result"},n.map((function(e){return r.a.createElement(Z,{key:e.id,id:e.id,title:e.original_name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date.substring(0,4)})}))),a&&r.a.createElement(P,{color:"#e74c3c",text:a}),n&&t&&0===n.length&0===t.length&&r.a.createElement(P,{color:"#95a5a6",text:"\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ud398\uc774\uc9c0 \uc785\ub2c8\ub2e4."})))},be=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchTerm:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchTerm&&n.searchByTerm()},n.updateTerm=function(e){var t=e.target.value;console.log(t),n.setState({searchTerm:t})},n.searchByTerm=Object(v.a)(f.a.mark((function e(){var t,a,r,i,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchTerm,n.setState({loading:!0}),e.prev=2,e.next=5,re.search(t);case 5:return a=e.sent,r=a.data.results,e.next=9,ie.search(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"\uac80\uc0c9 \uc5d0\ub7ec \uc785\ub2c8\ub2e4."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchTerm,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(he,{movieResults:t,tvResults:n,searchTerm:a,error:i,loading:o,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),t}(r.a.Component);function Ee(){var e=Object(h.a)(["\n    font-size:12px;\n    opacity:0.7;\n    line-height:1.5;\n    width:50%;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(h.a)(["\n    margin:0 10px;\n"]);return ye=function(){return e},e}function xe(){var e=Object(h.a)(["\n\n"]);return xe=function(){return e},e}function _e(){var e=Object(h.a)(["\n    margin:20px 0;\n"]);return _e=function(){return e},e}function je(){var e=Object(h.a)(["\n    font-size:32px;\n    margin-bottom:10px;\n"]);return je=function(){return e},e}function Oe(){var e=Object(h.a)(["\n    width:70%;\n    margin-left:10px;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(h.a)(["\n    width:30%;\n    background-image:url(",");\n    background-position:center center;\n    background-size:cover;\n    height:100%;\n    border-radius:5px;\n"]);return ke=function(){return e},e}function we(){var e=Object(h.a)(["\n    display:flex;\n    width:100%;\n    height:100%;\n    position:relative;\n    z-index:1;\n"]);return we=function(){return e},e}function Se(){var e=Object(h.a)(["\n    position:absolute;\n    left:0;\n    top:0;\n    width:100%;\n    height:100%;\n    background-image:url(",");\n    background-position:center center;\n    background-size:cover;\n    filter:blur(3px);\n    opacity:0.3;\n    z-index:0;\n"]);return Se=function(){return e},e}function Te(){var e=Object(h.a)(["\n    height:calc(100vh - 50px);\n    width:100%;\n    position:relative;\n    padding:50px;\n"]);return Te=function(){return e},e}var Re=b.default.div(Te()),Ue=b.default.div(Se(),(function(e){return e.bgImage})),Me=b.default.div(we()),ze=b.default.div(ke(),(function(e){return e.bgImage})),Fe=b.default.div(Oe()),Ge=b.default.h3(je()),Ae=b.default.div(_e()),Ce=b.default.span(xe()),Ie=b.default.span(ye()),Pe=b.default.p(Ee()),De=function(e){var t=e.result;e.error;return e.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement("title",null,"Loading | App")),r.a.createElement(U,null)):r.a.createElement(Re,null,r.a.createElement(y.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," | App")),r.a.createElement(Ue,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(Me,null,r.a.createElement(ze,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(30)}),r.a.createElement(Fe,null,r.a.createElement(Ge,null,t.original_title?t.original_title:t.original_name),r.a.createElement(Ae,null,r.a.createElement(Ce,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(Ie,null,"\u2022"),r.a.createElement(Ce,null,t.runtime?t.runtime:t.episode_run_time[0]," min"),r.a.createElement(Ie,null,"\u2022"),r.a.createElement(Ce,null,t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")})))),r.a.createElement(Pe,null,t.overview))))},qe=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(c.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(f.a.mark((function e(){var t,n,a,r,i,o,l,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(o=null,e.prev=6,!r){e.next=14;break}return e.next=10,re.movieDetail(i);case 10:l=e.sent,o=l.data,e.next=18;break;case 14:return e.next=16,ie.showDetail(i);case 16:u=e.sent,o=u.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"\ub514\ud14c\uc77c \uc624\ub958 \uc785\ub2c8\ub2e4."});case 23:return e.prev=23,this.setState({loading:!1,result:o}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading;return r.a.createElement(De,{result:t,error:n,loading:a})}}]),t}(r.a.Component);function Be(){var e=Object(h.a)(["\n    height:50px;\n    display:flex;\n    align-items:center;\n    justify-content:center;\n\n"]);return Be=function(){return e},e}function Le(){var e=Object(h.a)(["\n    width:80px;\n    height:50px;\n    text-align:center;\n    border-bottom:3px solid ",";\n    transition: border-bottom 0.5s ease-in-out;\n"]);return Le=function(){return e},e}function Ne(){var e=Object(h.a)(["\n    display : flex;\n"]);return Ne=function(){return e},e}function Je(){var e=Object(h.a)(["\n    color:#FFF;\n    position:fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:50px;\n    display:flex;\n    align-items:center;\n    padding:0 10px;\n    background-color:rgba(20,20,20, 0.8);\n    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);\n"]);return Je=function(){return e},e}var Ve=b.default.header(Je()),He=b.default.ul(Ne()),Ke=b.default.li(Le(),(function(e){return e.current?"#3498db":"transparent"})),Qe=Object(b.default)(m.b)(Be()),We=Object(d.g)((function(e){var t=e.location.pathname;return r.a.createElement(Ve,null,r.a.createElement(He,null,r.a.createElement(Ke,{current:"/"===t},r.a.createElement(Qe,{to:"/"},"Movies")),r.a.createElement(Ke,{current:"/tv"===t},r.a.createElement(Qe,{to:"/tv"},"TV")),r.a.createElement(Ke,{current:"/search"===t},r.a.createElement(Qe,{to:"/search"},"search"))))})),Xe=function(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(We,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/",exact:!0,component:oe}),r.a.createElement(d.b,{path:"/tv",component:se}),r.a.createElement(d.b,{path:"/search",component:be}),r.a.createElement(d.b,{path:"/movie/:id",component:qe}),r.a.createElement(d.b,{path:"/show/:id",component:qe}),r.a.createElement(d.a,{from:"*",to:"/"}))))},Ye=n(45),Ze=n.n(Ye);function $e(){var e=Object(h.a)(["\n    ",";\n    a{\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing:border-box;\n    }\n    body{\n        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:12px;\n        background-color:rgba(20,20,20,1);\n        color:#FFF;\n        padding-top:50px;\n    }\n"]);return $e=function(){return e},e}var et=Object(b.createGlobalStyle)($e(),Ze.a),tt=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe,null),r.a.createElement(et,null))}}]),t}(a.Component);o.a.render(r.a.createElement(tt,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.89fb327c.chunk.js.map