(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1424:function(e,t,a){"use strict";var n=a(0),o=a.n(n);t.a=function(e){var t=e.title;e.match;return o.a.createElement("div",{className:"gx-page-heading"},o.a.createElement("h2",{className:"gx-page-title"},t))}},1515:function(e,t,a){"use strict";t.a=[{id:1457690400,name:"Stella Johnson",thumb:"https://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690401,name:"Garry Sobars",thumb:"https://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690402,name:"Alex Dolgove",thumb:"https://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690403,name:"Domnic Brown",thumb:"https://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"https://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690405,name:"John Smith",thumb:"https://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690406,name:"Domnic Harris",thumb:"https://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690407,name:"Jimmy Jo",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690408,name:"Jimmy Jon",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690409,name:"Jeson Born",thumb:"https://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690410,name:"Steve Smith",thumb:"https://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1},{id:1457690500,name:"Stella Johnson",thumb:"https://via.placeholder.com/150x150",email:"stella.johnson@example.com",phone:"+1-215-659-7529",designation:"CEO",selected:!1,starred:!1,frequently:!0},{id:1457690501,name:"Garry Sobars",thumb:"https://via.placeholder.com/150x150",email:"garry.sobars@example.com",phone:"+1-215-745-7529",designation:"CFO",selected:!1,starred:!1,frequently:!0},{id:1457690502,name:"Alex Dolgove",thumb:"https://via.placeholder.com/150x150",email:"alex.dolgove@example.com",phone:"+1-215-748-7855",designation:"Designer",selected:!1,starred:!1,frequently:!0},{id:1457690503,name:"Domnic Brown",thumb:"https://via.placeholder.com/150x150",email:"domnic.brown@example.com",phone:"+1-215-756-4579",designation:"PHP Developer",selected:!1,starred:!1,frequently:!0},{id:1457690404,name:"Kadir M",thumb:"https://via.placeholder.com/150x150",email:"kadir.m@example.com",phone:"+1-215-659-7586",designation:"HR Manager",selected:!1,starred:!1,frequently:!1},{id:1457690505,name:"John Smith",thumb:"https://via.placeholder.com/150x150",email:"john.smith@example.com",phone:"+1-215-876-8596",designation:"Marketing Head",selected:!1,starred:!1,frequently:!1},{id:1457690506,name:"Domnic Harris",thumb:"https://via.placeholder.com/150x150",email:"domnic.harris@example.com",phone:"+1-215-785-3841",designation:"BDO",selected:!1,starred:!0,frequently:!1},{id:1457690507,name:"Jimmy Jo",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jo@example.com",phone:"+1-215-456-5863",designation:"CCO",selected:!1,starred:!1,frequently:!1},{id:1457690508,name:"Jimmy Jon",thumb:"https://via.placeholder.com/150x150",email:"jimmy.jon@example.com",phone:"+1-215-278-4558",designation:"Developer",selected:!1,starred:!0,frequently:!1},{id:1457690509,name:"Jeson Born",thumb:"https://via.placeholder.com/150x150",email:"jeson.born@example.com",phone:"+1-215-286-7551",designation:"UI-UX Designer",selected:!1,starred:!1,frequently:!1},{id:1457690510,name:"Steve Smith",thumb:"https://via.placeholder.com/150x150",email:"steve.smith@example.com",phone:"+1-215-586-5862",designation:"CEO",selected:!1,starred:!1,frequently:!1}]},1963:function(e,t,a){"use strict";a.r(t);var n=a(30),o=a(31),l=a(33),r=a(32),i=a(34),m=a(0),c=a.n(m),s=a(194),d=a(101),p=a(1412),h=a(1560),x=Object(h.SortableHandle)(function(){return c.a.createElement("span",{className:"gx-draggable-icon gx-pt-2"},c.a.createElement("i",{className:"icon icon-expand",style:{fontSize:25}}))}),g=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(r.a)(t).call(this))).onDeleteContact=function(t){e.setState({addContactState:!1}),e.props.onDeleteContact(t)},e.state={addContactState:!1},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.contact,t=e.name,a=e.thumb,n=e.email,o=e.phone,l=e.designation,r=e.starred;return c.a.createElement("div",{className:"gx-contact-item gx-dragndrop-item"},c.a.createElement(x,null),null===a||""===a?c.a.createElement("div",{className:"gx-px-md-4 gx-px-2"},c.a.createElement("span",{className:"gx-avatar gx-bg-blue gx-text-white gx-border-0 gx-size-40",style:{fontSize:20}},t.charAt(0).toUpperCase())):c.a.createElement("div",{className:"gx-px-md-4 gx-px-2"},c.a.createElement(p.a,{className:"gx-size-40",alt:t,src:a})),c.a.createElement("div",{className:"gx-col gx-dragndrop-name gx-text-truncate gx-px-2"},t),c.a.createElement("div",{className:"gx-col gx-dragndrop-email gx-text-truncate gx-d-none gx-d-xl-flex gx-px-2"},n),c.a.createElement("div",{className:"gx-col gx-dragndrop-phone gx-d-none gx-d-md-flex gx-px-2"},o),c.a.createElement("div",{className:"gx-col gx-job-title gx-d-none gx-d-sm-flex gx-px-2"},l),c.a.createElement("div",{className:"gx-dragndrop-actions gx-px-2"},r?c.a.createElement("i",{className:"gx-icon-btn icon icon-star"}):c.a.createElement("i",{className:"gx-icon-btn icon icon-star-o"}),c.a.createElement("i",{className:"gx-icon-btn icon icon-ellipse-v",onClick:this.onContactOptionSelect})))}}]),t}(c.a.Component),u=Object(h.SortableElement)(g),b=a(1515),v=a(1424),f=a(8),y=Object(h.SortableContainer)(function(e){var t=e.contacts;return c.a.createElement(s.a,null,c.a.createElement(d.a,{span:24},t.map(function(e,t){return c.a.createElement(u,{key:t,index:t,contact:e})})))}),E=function(e){function t(){var e;return Object(n.a)(this,t),(e=Object(l.a)(this,Object(r.a)(t).call(this))).onSortEnd=function(t){var a=t.oldIndex,n=t.newIndex;e.setState({contacts:Object(h.arrayMove)(e.state.contacts,a,n)})},e.state={contacts:b.a},e}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.contacts;return c.a.createElement("div",{className:"gx-main-content gx-mb-4"},c.a.createElement(v.a,{title:c.a.createElement(f.a,{id:"sidebar.extensions.dragNDrop"}),match:this.props.match}),c.a.createElement(y,{contacts:e,onSortEnd:this.onSortEnd,useDragHandle:!0}))}}]),t}(m.Component);t.default=E}}]);
//# sourceMappingURL=48.f3004494.chunk.js.map