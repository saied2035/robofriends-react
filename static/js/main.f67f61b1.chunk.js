(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(1),s=a.n(o),c=a(2),l=a(3),i=a(8);const h={searchBar:""},m={isPending:!1,robots:[],error:""};var d=({id:e,name:t,email:a})=>n.a.createElement("div",{className:"tc dib pa2 ma2 br3 bg-light-yellow grow bw5 shadow-5"},n.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e,"?200x200")}),n.a.createElement("h2",null,t),n.a.createElement("p",null,a));var u=({robots:e,error:t})=>t.length?n.a.createElement("div",{style:{height:"70vh",width:"100%"},className:" f3 flex justify-center items-center"},n.a.createElement("h3",null,"the robots not found for now something went wrong")):e.map(e=>n.a.createElement(d,{key:e.id,id:e.id,name:e.name,email:e.email}));var E=({onSearchChange:e,numOfRobots:t})=>n.a.createElement("div",{className:"pa3"},n.a.createElement("input",{onChange:e,className:"pa3 ba b--gold bg-light-yellow",type:"text",placeholder:"search a robot"}));var b=e=>n.a.createElement("div",{style:{overflowY:"auto",height:"75vh",width:"100%"},className:"dib pa2"},e.children);class p extends r.Component{constructor(){super(),this.state={catch_error:!1}}componentDidCatch(){this.setState({catch_error:!0})}render(){return this.state.catch_error?n.a.createElement("div",{style:{height:"100vh"},className:"flex justify-center items-center"},n.a.createElement("h1",null,"something went wrong.")):this.props.children}}var g=p;a(20),a(21);class R extends n.a.Component{componentDidMount(){this.props.onRequestRobots()}render(){const{searchBar:e,onSearchChange:t,robots:a,isPending:r,error:o}=this.props,s=a.filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));return r?n.a.createElement(g,null,n.a.createElement("div",{style:{height:"100vh"},className:"flex justify-center items-center"},n.a.createElement("h1",null,"Loading"))):n.a.createElement(g,null,n.a.createElement("div",{className:"tc",style:{overflow:"hidden"}},n.a.createElement("h1",{className:"f2 ma2"},"RoboFriends"),n.a.createElement(E,{onSearchChange:t}),n.a.createElement(b,{numOfRobots:s.length},n.a.createElement(u,{robots:s,error:o}))))}}var y=Object(c.b)(e=>({searchBar:e.searchRobots.searchBar,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}),e=>({onSearchChange:t=>e({type:"CHANGE_SEARCH_BAR",payload:t.target.value}),onRequestRobots:()=>e(e=>{e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(e=>e.json()).then(t=>e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})).catch(t=>e({type:"REQUEST_ROBOTS_FAILED",payload:"error"}))})}))(R),S=a(7);a(23),a(24);const f=Object(l.b)({searchRobots:(e=h,t={})=>{switch(t.type){case"CHANGE_SEARCH_BAR":return Object.assign({},e,{searchBar:t.payload});default:return e}},requestRobots:(e=m,t={})=>{switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),O=Object(S.createLogger)(),v=Object(l.c)(f,Object(l.a)(i.a,O));s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,{store:v},n.a.createElement(y,null))),document.getElementById("root"))},9:function(e,t,a){e.exports=a(25)}},[[9,1,2]]]);
//# sourceMappingURL=main.f67f61b1.chunk.js.map