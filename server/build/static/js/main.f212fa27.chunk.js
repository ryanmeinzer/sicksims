(this.webpackJsonpsicksims=this.webpackJsonpsicksims||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),o=a.n(i),c=(a(26),a(6)),s=a(7),u=a(8),l=a(10),p=a(9),d=(a(27),function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"SickSims"),r.a.createElement("h3",null,r.a.createElement("i",null,"Save the world!")," \ud83e\udd70"),r.a.createElement("h6",null,"Click naive people \ud83e\udd74 to make them safe \ud83d\ude37 before they get sick \ud83e\udd22. ",r.a.createElement("br",null)," Click sick people \ud83e\udd22 to quarantine them \ud83e\udd12 for recovery back to naive \ud83e\udd74."),r.a.createElement("p",null,r.a.createElement("button",{onClick:e.startGameButton},"Start Game")))}),m=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={time:3},e.componentDidMount=function(){e.startInterval()},e.startInterval=function(){e.interval=setInterval(e.updateCounter,1e3)},e.checkTime=function(){e.state.time<=0&&e.props.naiveToSickChanger(e.props.id)},e.updateCounter=function(){e.setState((function(e){return{time:e.time-1}}),e.checkTime)},e}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("span",{id:this.props.id,onClick:this.props.makeSafe,style:{cursor:"pointer"}},"\ud83e\udd74")}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={time:5},e.componentDidMount=function(){e.startInterval()},e.startInterval=function(){e.interval=setInterval(e.updateCounter,1e3)},e.checkTime=function(){e.state.time<=0&&e.props.quarantinedToNaiveChanger(e.props.id)},e.updateCounter=function(){e.setState((function(e){return{time:e.time-1}}),e.checkTime)},e}return Object(u.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("span",{id:this.props.id,style:{cursor:"not-allowed"}},"\ud83e\udd12 \u25bd ",this.state.time," ")}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{id:this.props.id,style:{cursor:"not-allowed"}},"\ud83d\ude37")}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("span",{id:this.props.id,onClick:this.props.makeQuarantined,style:{cursor:"pointer"}},"\ud83e\udd22")}}]),a}(n.Component),k=a(19),b=a(1),E=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={people:[{id:1,status:"naive"},{id:2,status:"sick"},{id:3,status:"naive"},{id:4,status:"naive"},{id:5,status:"safe"},{id:6,status:"quarantined"},{id:7,status:"sick"},{id:8,status:"naive"},{id:9,status:"safe"},{id:10,status:"sick"}]},e.makeSafe=function(t){var a=parseInt(t.target.id),n=e.state.people.find((function(e){return e.id===a})),r=Object(c.a)(Object(c.a)({},n),{},{status:"safe"});e.setState((function(e){return{people:e.people.map((function(e){return e.id===a?r:e}))}}),e.isEveryoneSafe)},e.makeQuarantined=function(t){var a=parseInt(t.target.id),n=e.state.people.find((function(e){return e.id===a})),r=Object(c.a)(Object(c.a)({},n),{},{status:"quarantined"});e.setState((function(e){return{people:e.people.map((function(e){return e.id===a?r:e}))}}))},e.naiveToSickChanger=function(t){var a=e.state.people.find((function(e){return e.id===t})),n=Object(c.a)(Object(c.a)({},a),{},{status:"sick"});e.setState((function(e){return{people:e.people.map((function(e){return e.id===t?n:e}))}}))},e.quarantinedToNaiveChanger=function(t){var a=e.state.people.find((function(e){return e.id===t})),n=Object(c.a)(Object(c.a)({},a),{},{status:"naive"});e.setState((function(e){return{people:e.people.map((function(e){return e.id===t?n:e}))}}))},e.isEveryoneSafe=function(){e.state.people.find((function(e){var t=e.status;return"naive"===t||"sick"===t||"quarantined"===t}))||e.safeToSavedChanger()},e.safeToSavedChanger=function(){e.setState((function(e){return{people:e.people.map((function(e){if("safe"===e.status)return Object(c.a)(Object(c.a)({},e),{},{status:"saved"})}))}}),alert("Congrats - you saved the world!"))},e.startGame=function(){window.location.replace("/play")},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(k.a,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{startGameButton:e.startGame}),r.a.createElement("div",{className:"FakeGameContainer"},r.a.createElement("h4",null,"In Public"),"\ud83e\udd74\ud83e\udd22\ud83e\udd74\ud83e\udd74\ud83d\ude37\ud83e\udd22\ud83e\udd74\ud83d\ude37\ud83e\udd22",r.a.createElement("h4",null,"Quarantined"),"\ud83e\udd12 \u25bd 5"))}}),r.a.createElement(b.a,{exact:!0,path:"/play",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{startGameButton:e.startGame}),r.a.createElement("div",{className:"GameContainer"},r.a.createElement("h4",null,"In Public"),e.state.people.map((function(t){return"naive"===t.status?r.a.createElement(m,{key:"naive-".concat(t.id),id:t.id,status:t.status,makeSafe:e.makeSafe,naiveToSickChanger:e.naiveToSickChanger}):"safe"===t.status?r.a.createElement(v,{key:"safe-".concat(t.id),id:t.id,status:t.status,safeToSavedChanger:e.safeToSavedChanger,allPeople:e.state.people}):"sick"===t.status?r.a.createElement(h,{key:"sick-".concat(t.id),id:t.id,status:t.status,makeQuarantined:e.makeQuarantined}):"saved"===t.status?r.a.createElement("span",{key:"saved-".concat(t.id),id:t.id,style:{cursor:"not-allowed"}},"\ud83e\udd70"):void 0})),r.a.createElement("h4",null,"Quarantined"),e.state.people.map((function(t){if("quarantined"===t.status)return r.a.createElement(f,{key:"quarantined-".concat(t.id),id:t.id,status:t.status,quarantinedToNaiveChanger:e.quarantinedToNaiveChanger})}))))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f212fa27.chunk.js.map