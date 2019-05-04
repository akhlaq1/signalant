(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1990:function(e,t,a){"use strict";a.r(t);var n=a(31),l=a(32),c=a(35),i=a(33),r=a(34),s=a(0),o=a.n(s),u=a(199),m=a(105),d=a(26),h=a(70),p=a(1594),g=a(1596),v=a.n(g),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={email:"",phone:""},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.auth().onAuthStateChanged(function(t){t&&(console.log(t.uid),h.database().ref("/users/"+t.uid).once("value",function(t){var a=t.val().Email,n=t.val().Phone;e.setState({email:a,phone:n})}))})}},{key:"mailUpdate",value:function(e){h.auth().onAuthStateChanged(function(t){t&&(h.database().ref("users").child(t.uid).update({Email:e.title}),t.updateEmail(e.title).then(function(){console.log("Update successful.")}).catch(function(e){console.log("An error happened.")}))})}},{key:"phoneUpdate",value:function(e){console.log(e.title),h.auth().onAuthStateChanged(function(t){t&&h.database().ref("users").child(t.uid).update({Phone:e.title})})}},{key:"render",value:function(){return o.a.createElement(d.a,{title:"Contact",styleName:"gx-card-profile-sm"},o.a.createElement("div",{className:"gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list"},o.a.createElement("div",{className:"gx-mr-3"},o.a.createElement("svg",{width:"22",height:"22",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"}))),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("span",{className:"gx-mb-0 gx-text-grey gx-fs-sm"},"Email"),o.a.createElement("p",null,o.a.createElement(p.RIEInput,{value:this.state.email,change:this.mailUpdate,propName:"title",validate:v.a.isString})))),o.a.createElement("div",{className:"gx-media gx-align-items-center gx-flex-nowrap gx-pro-contact-list"},o.a.createElement("div",{className:"gx-mr-3"},o.a.createElement("svg",{width:"22",height:"22",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M10,15.654c-0.417,0-0.754,0.338-0.754,0.754S9.583,17.162,10,17.162s0.754-0.338,0.754-0.754S10.417,15.654,10,15.654z M14.523,1.33H5.477c-0.833,0-1.508,0.675-1.508,1.508v14.324c0,0.833,0.675,1.508,1.508,1.508h9.047c0.833,0,1.508-0.675,1.508-1.508V2.838C16.031,2.005,15.356,1.33,14.523,1.33z M15.277,17.162c0,0.416-0.338,0.754-0.754,0.754H5.477c-0.417,0-0.754-0.338-0.754-0.754V2.838c0-0.417,0.337-0.754,0.754-0.754h9.047c0.416,0,0.754,0.337,0.754,0.754V17.162zM13.77,2.838H6.23c-0.417,0-0.754,0.337-0.754,0.754v10.555c0,0.416,0.337,0.754,0.754,0.754h7.539c0.416,0,0.754-0.338,0.754-0.754V3.592C14.523,3.175,14.186,2.838,13.77,2.838z M13.77,13.77c0,0.208-0.169,0.377-0.377,0.377H6.607c-0.208,0-0.377-0.169-0.377-0.377V3.969c0-0.208,0.169-0.377,0.377-0.377h6.785c0.208,0,0.377,0.169,0.377,0.377V13.77z"}))),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("span",{className:"gx-mb-0 gx-text-grey gx-fs-sm"},"Phone"),o.a.createElement("p",null,o.a.createElement(p.RIEInput,{value:this.state.phone,change:this.phoneUpdate,propName:"title",validate:v.a.isString})))))}}]),t}(s.Component),x=a(69),E=a(1429),b=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).state={name:" ",country:" "},e}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.auth().onAuthStateChanged(function(t){t&&h.database().ref("/users/"+t.uid).once("value",function(t){var a=t.val().Name,n=t.val().Country;e.setState({name:a,country:n})})})}},{key:"nameUpdate",value:function(e){h.auth().onAuthStateChanged(function(t){t&&h.database().ref("users").child(t.uid).update({Name:e.title})})}},{key:"countryUpdate",value:function(e){h.auth().onAuthStateChanged(function(t){t&&h.database().ref("users").child(t.uid).update({Country:e.title})})}},{key:"render",value:function(){return o.a.createElement("div",{className:"gx-profile-banner"},o.a.createElement("div",{className:"gx-profile-container"},o.a.createElement("div",{className:"gx-profile-banner-top"},o.a.createElement("div",{className:"gx-profile-banner-top-left"},o.a.createElement("div",{className:"gx-profile-banner-avatar"},o.a.createElement(E.a,{className:"gx-size-90",alt:"...",src:"https://via.placeholder.com/150x150"})),o.a.createElement("div",{className:"gx-profile-banner-avatar-info"},o.a.createElement("h2",{className:"gx-mb-2 gx-mb-sm-3 gx-fs-xxl gx-font-weight-light"},o.a.createElement(p.RIEInput,{value:this.state.name,change:this.nameUpdate,propName:"title",validate:v.a.isString})),o.a.createElement("p",{className:"gx-mb-0 gx-fs-lg"},o.a.createElement(p.RIEInput,{value:this.state.country,change:this.countryUpdate,propName:"title",validate:v.a.isString}))))),o.a.createElement("div",{className:"gx-profile-banner-bottom"})))}}]),t}(s.Component),N=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(x.a,null,o.a.createElement(b,null),o.a.createElement("div",{className:"gx-profile-content"},o.a.createElement(u.a,null,o.a.createElement(m.a,{xl:8,lg:10,md:10,sm:24,xs:24},o.a.createElement(f,null)))))}}]),t}(s.Component);t.default=N}}]);
//# sourceMappingURL=170.62d10fa2.chunk.js.map