(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),i=n(2),a=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={date:(new Date).toLocaleTimeString()},t.timerId=void 0,t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;console.log("Clock Mount"),this.timerId=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentWillUnmount",value:function(){console.log("Clock Unmounted"),this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){return this.state.date}}]),n}(u.a.Component),d=(n(12),n(0)),h=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)("button",{className:"App__button App__button--show",type:"button",onClick:function(){t.setState({isClockVisible:!0})},children:"Show Clock"}),Object(d.jsx)("button",{className:"App__button App__button--hide",type:"button",onClick:function(){t.setState({isClockVisible:!1})},children:"Hide Clock"}),Object(d.jsx)("div",{children:Object(d.jsxs)("p",{children:["Current time:"," ",this.state.isClockVisible?Object(d.jsx)(b,{}):"clock are hidden"]})})]})}}]),n}(u.a.Component);o.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f85785ff.chunk.js.map