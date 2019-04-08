(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{141:function(e,t,a){e.exports=a(277)},146:function(e,t,a){},201:function(e,t,a){},218:function(e,t,a){},277:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(23),s=a.n(o),i=(a(146),a(14)),m=a(16),l=a(19),u=a(17),h=a(18),p=a(51),d=a(286),f=a(34),b=a(137);function g(e){return{type:n.SearchGamesResponse,response:e}}!function(e){e.SearchGamesAsync="SearchGamesAsync",e.SearchGamesResponse="SearchGamesResponse"}(n||(n={}));var j={response:void 0};var O=Object(f.c)({searchGames:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SearchGamesAsync:return e;case n.SearchGamesResponse:return{response:t.response};default:return e}}}),v=a(39),y=a.n(v),E=a(44);var w={api:{endpoint:"https://ojxt0rm912.execute-api.us-east-1.amazonaws.com/latest"}};function L(e){var t="".concat(w.api.endpoint,"/lol/games/streamer/").concat(e.twitchLogin,"/summoner/").concat(e.summonerName,"/champion/").concat(e.championName);return fetch(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){throw console.error("searchGames failed"+JSON.stringify(e)),"searchGames failed"})}var G=y.a.mark(S),N=y.a.mark(k);function S(e){var t;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(E.b)(L,e.request);case 2:return t=a.sent,a.next=5,Object(E.d)(g(t));case 5:case"end":return a.stop()}},G,this)}function k(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.e)(n.SearchGamesAsync,S);case 2:case"end":return e.stop()}},N,this)}var C=y.a.mark(x);function x(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(E.a)([Object(E.c)(k)]);case 2:case"end":return e.stop()}},C,this)}var V=x,R=function(){var e=Object(b.a)(),t=Object(f.e)(O,Object(f.a)(e));return e.run(V),t},A=a(285),I=a(281),q=a(199),z=a(198),F=a(279);function T(e,t){return{request:t.request,response:e.searchGames.response}}function D(e){return{searchGames:function(t){return e(function(e){return{type:n.SearchGamesAsync,request:e}}(t))}}}a(201);var H,J=a(126),B=a.n(J),P=a(204),U=a(283),W=a(207),_=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.gameVideos.map(function(t){var a=c.a.createElement("span",null,t.video.title," | ",t.summoner.name," as ",t.champion.name),n=t.game.id+"-"+t.video.id,r=B()(1e3*t.game.startTimestamp).calendar();return c.a.createElement(P.a,{span:8,key:n,"data-game-id":t.game.id,"data-twitch-video-id":t.video.id},c.a.createElement(U.a,{title:a,bordered:!1},c.a.createElement("a",{href:t.video.url,target:"_blank"},c.a.createElement("img",{src:e.getVideoThumbnail(t.video),style:{width:"100%"}})),c.a.createElement("span",null,t.summoner.name," playing ",t.champion.name),c.a.createElement("br",null),c.a.createElement("span",null,r)))});return c.a.createElement("div",{style:{padding:"30px"}},c.a.createElement(W.a,{gutter:8},t))}},{key:"getVideoThumbnail",value:function(e){return e.thumbnailImageUrl.replace("%{width}","800").replace("%{height}","450")}}]),t}(c.a.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,this.getPageContent())}},{key:"getPageContent",value:function(){var e=this.props.response;return e?e&&0===e.gameVideos.length?"none found":c.a.createElement(_,{gameVideos:e.gameVideos}):"...loading"}}]),t}(c.a.Component),$=(a(218),a(282)),K=a(284),Q=a(278),X=a(280),Y=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(Q.a,{type:this.props.type},c.a.createElement(X.a,{to:this.props.to},this.props.children))}}]),t}(c.a.Component),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a.onChange=function(e){e.preventDefault();var t=a.props.form.getFieldValue("twitchLogin"),n=a.props.form.getFieldValue("summonerName"),r=a.props.form.getFieldValue("championName");a.setState({twitchLogin:t,summonerName:n,championName:r})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state,a=t.twitchLogin,n=t.summonerName,r=t.championName,o={labelCol:{span:8},wrapperCol:{span:16}};return c.a.createElement($.a,{onChange:this.onChange},c.a.createElement($.a.Item,Object.assign({},o,{label:"Twitch.tv"}),e("twitchLogin",{initialValue:"doublelift"})(c.a.createElement(K.a,{size:"large",placeholder:"twitch login name"}))),c.a.createElement($.a.Item,Object.assign({},o,{label:"Summoner Name"}),e("summonerName",{initialValue:"doublelift"})(c.a.createElement(K.a,{size:"large",placeholder:"LoL summoner name"}))),c.a.createElement($.a.Item,Object.assign({},o,{label:"Champion Name"}),e("championName",{initialValue:"ezreal"})(c.a.createElement(K.a,{size:"large",placeholder:"LoL champion name"}))),c.a.createElement($.a.Item,null,e("search")(c.a.createElement(Y,{to:"/lol/games/search/results/streamer/".concat(a,"/summoner/").concat(n,"/champion/").concat(r),type:"primary"},"Search"))))}}]),t}(c.a.Component),ee=$.a.create({name:"Search_Games"})(Z),te=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(W.a,null,c.a.createElement(P.a,{span:12,offset:6,style:{textAlign:"center"}},c.a.createElement(ee,null))))}}]),t}(c.a.Component);!function(e){e.Hello="Hello",e.SearchLolGamesResult="SearchLolGamesResult"}(H||(H={}));var ae=function e(){Object(i.a)(this,e)};ae.SearchLolGamesResult={component:function(e){var t=function(t){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={searchGamesTimer:void 0},t}return Object(h.a)(a,t),Object(m.a)(a,[{key:"render",value:function(){var t={request:{summonerName:this.props.match.params.summonerName,twitchLogin:this.props.match.params.twitchLogin,championName:this.props.match.params.championName},response:this.props.response};return c.a.createElement(e,t)}},{key:"componentDidMount",value:function(){this.searchGames()}},{key:"searchGames",value:function(){this.props.searchGames({summonerName:this.props.match.params.summonerName,twitchLogin:this.props.match.params.twitchLogin,championName:this.props.match.params.championName})}},{key:"componentDidUpdate",value:function(e){e.match.params.summonerName===this.props.match.params.summonerName&&e.match.params.championName===this.props.match.params.championName&&e.match.params.twitchLogin===this.props.match.params.twitchLogin||this.searchGames()}}]),a}(c.a.Component),a=Object(p.b)(T,D)(t);return Object(F.a)(a)}(M),id:H.SearchLolGamesResult,path:"/lol/games/search/results/streamer/:twitchLogin/summoner/:summonerName/champion/:championName",title:"LoL Games"},ae.SearchLolGamesLanding={component:te,id:H.SearchLolGamesResult,path:"/lol/games/search",title:"Search For LoL Games"};var ne=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(I.a,null,c.a.createElement(q.a,{exact:!0,path:"/",component:ae.SearchLolGamesLanding.component}),c.a.createElement(q.a,{exact:!0,path:ae.SearchLolGamesLanding.path,component:ae.SearchLolGamesLanding.component}),c.a.createElement(q.a,{path:ae.SearchLolGamesResult.path,component:ae.SearchLolGamesResult.component}))}}]),t}(c.a.Component),re=Object(z.a)(ne),ce=A.a.Content,oe=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(A.a,{style:{minHeight:"100vh"}},c.a.createElement(A.a,null,c.a.createElement(ce,{style:{margin:"16px 16px"}},c.a.createElement(re,null)," "))))}}]),t}(c.a.Component),se=Object(z.a)(Object(p.b)(null,null)(oe)),ie=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{store:R()},c.a.createElement(d.a,null,c.a.createElement(se,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[141,2,1]]]);
//# sourceMappingURL=main.692d3ebe.chunk.js.map