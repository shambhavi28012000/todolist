(this.webpackJsonplcotodo=this.webpackJsonplcotodo||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n.p+"static/media/1.180a9794.jpg"},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),l=n.n(o),c=(n(14),n(1)),r=n(4),s=n(5),u=n(8),m=n(7),d=n(6),h=n.n(d),p=(n(15),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={newItem:"",list:[]},a}return Object(s.a)(n,[{key:"addItem",value:function(e){if(""!==e){var t={id:Date.now(),value:e,idDone:!1},n=Object(c.a)(this.state.list);n.push(t),this.setState({list:n,newItem:""})}}},{key:"deleteItem",value:function(e){var t=Object(c.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"updateInput",value:function(e){this.setState({newItem:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("img",{src:h.a,width:"100",height:"100",className:"logo"}),i.a.createElement("h1",{className:"app-title"}," ToDo App"),i.a.createElement("div",{className:"container"},i.a.createElement("label",null,"Add an Item..."),i.a.createElement("input",{text:"text",classNamename:"input-text",placeholder:"Enter your item",value:this.state.newItem,onChange:function(t){return e.updateInput(t.target.value)}})," ",i.a.createElement("br",null),i.a.createElement("button",{className:"add-btn",onClick:function(){return e.addItem(e.state.newItem)},disabled:!this.state.newItem.length},"AddTodo "),i.a.createElement("div",{className:"list"},i.a.createElement("ul",null,this.state.list.map((function(t){return i.a.createElement("li",{key:t.id},i.a.createElement("input",{type:"checkbox",name:"idDone",checked:t.isDone,onChange:function(){}}),t.value,i.a.createElement("button",{className:"btn",onClick:function(){return e.deleteItem(t.id)}},"Delete"))}))))))}}]),n}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2fb4e31e.chunk.js.map