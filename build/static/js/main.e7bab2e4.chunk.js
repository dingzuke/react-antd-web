(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},114:function(e,t,n){e.exports={modle:"index_modle__s-yoh",tabBarPosition:"index_tabBarPosition__UZJcN","am-tab-bar":"index_am-tab-bar__2Rs15"}},187:function(e,t,n){e.exports={login:"index_login__1TlcL",title:"index_title__3q6uP",loginTo:"index_loginTo__20wTZ"}},188:function(e,t,n){e.exports={login:"index_login__qbZap",title:"index_title__2NLbO",loginTo:"index_loginTo__Dckki"}},192:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),c=n(66),r=n.n(c),l=(n(103),n(104),n(105),n(68)),s=n.n(l),u=n(13),m=n(14),b=n(17),d=n(15),_=n(18),O=n(198),h=n(199),p=n(200),E=n(197),f=n(30),j=Object(f.a)(),g=n(49),v=(n(111),n(71)),w=n.n(v),T=n(114),N=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).goLogin=function(){j.push("/login",{some:"state"})},n.goDetail=function(){j.push("/detail",{some:"state"})},n.state={selectedTab:"blueTab",hidden:!1,fullScreen:!1},n}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:T.modle},i.a.createElement(w.a,{type:"primary",onClick:function(){return e.goLogin()}},"\u8df3\u8f6c\u767b\u5f55"),i.a.createElement(w.a,{type:"primary",onClick:function(){return e.goDetail()}},"\u8df3\u8f6c\u8be6\u60c5\u9875"))}}]),t}(o.Component),S=n(187),y=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(_.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("\u8def\u7531\u4f20\u53c2",this.props.location.state)}},{key:"render",value:function(){return i.a.createElement("div",{className:S.login},"\u767b\u5f55")}}]),t}(o.Component),x=n(188),k={Home:N,Login:y,Detail:function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(b.a)(this,Object(d.a)(t).call(this,e))).state={},n}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=new Date;return i.a.createElement("div",{className:x.login},"\u5f53\u524d\u65f6\u95f4\uff1a",e.getMinutes())}}]),t}(o.Component)},L=n(195),D="INCREMENT_ENTHUSIASM",I="DECREMENT_ENTHUSIASM",M="SET_ENTHUSIASM",C="SET_NEW_MSG",U=(Object(L.a)(D,I,C,M),n(22)),H=n(34),J=n(196),R=Object(J.a)((a={},Object(U.a)(a,D,function(e,t){return Object(H.a)({},e,{enthusiasmLevel:e.enthusiasmLevel+1})}),Object(U.a)(a,I,function(e,t){return Object(H.a)({},e,{enthusiasmLevel:Math.max(1,e.enthusiasmLevel-1)})}),Object(U.a)(a,M,function(e,t){var n=Object(H.a)({},e,t.payload);return window.localStorage.setItem("$$/User/info",JSON.stringify(n)),n}),Object(U.a)(a,C,function(e,t){return Object(H.a)({},e,{describe:t.payload.describe})}),a),JSON.parse(window.localStorage.getItem("$$/User/info"))||{enthusiasmLevel:2,describe:"ant-mobile + react + redux, \u4e2a\u4ebagithub\u4e86\u89e3\u66f4\u591a..."}),$=n(41),B=Object($.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),X=function(e){function t(){return Object(u.a)(this,t),Object(b.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement(g.a,{store:B},i.a.createElement(s.a,{locale:void 0},i.a.createElement(O.a,{history:j},i.a.createElement(h.a,null,i.a.createElement(p.a,{path:"/home",component:k.Home}),i.a.createElement(p.a,{path:"/login",component:k.Login}),i.a.createElement(p.a,{path:"/detail",component:k.Detail}),i.a.createElement(E.a,{path:"/",to:{pathname:"/home"}})))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,n){e.exports=n(192)}},[[98,1,2]]]);
//# sourceMappingURL=main.e7bab2e4.chunk.js.map