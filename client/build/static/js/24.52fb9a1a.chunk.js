(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1458:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=function(e){var t=e.title,a=e.extra,n=e.styleName;return i.a.createElement("h2",{className:"gx-entry-title ".concat(n)},t,i.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-ml-auto gx-d-none gx-d-sm-block"},a))};l.defaultProps={styleName:""},t.a=l},1479:function(e,t,a){"use strict";var n=a(0),i=a(3),l=a.n(i),r=a(21);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){return n.createElement(r.a,null,function(t){var a,i=t.getPrefixCls,r=e.prefixCls,m=e.type,u=void 0===m?"horizontal":m,g=e.orientation,d=void 0===g?"":g,p=e.className,h=e.children,x=e.dashed,f=o(e,["prefixCls","type","orientation","className","children","dashed"]),v=i("divider",r),y=d.length>0?"-"+d:d,E=l()(p,v,"".concat(v,"-").concat(u),(c(a={},"".concat(v,"-with-text").concat(y),h),c(a,"".concat(v,"-dashed"),!!x),a));return n.createElement("div",s({className:E},f),h&&n.createElement("span",{className:"".concat(v,"-inner-text")},h))})}},1494:function(e,t,a){"use strict";var n=a(31),i=a(32),l=a(35),r=a(33),s=a(48),c=a(34),o=a(0),m=a.n(o),u=a(1508),g=a(1429),d=a(1458),p=a(69),h=function(e){var t=e.task;return m.a.createElement(p.a,null,m.a.createElement("p",{className:"gx-mb-0"},t.title),t.imageList.length>0?m.a.createElement("ul",{className:"gx-list-inline gx-mb-3 gx-mt-2"},t.imageList.map(function(e,a){return 2===a?m.a.createElement("li",{className:"gx-mb-1",key:a},m.a.createElement("span",{className:"gx-link gx-img-more"}," +",t.imageList.length-2," More")):a>2?null:m.a.createElement("li",{className:"gx-mb-1",key:a},m.a.createElement(g.a,{shape:"square",className:"gx-size-40",src:e}))})):null)},x=u.a.Item;function f(e,t){if(""===e.avatar){var a=e.name.split(" ");if(1===e.name.split(" ").length){var n=a[0].charAt(0).toUpperCase();return m.a.createElement(g.a,{shape:t,className:"gx-size-40 gx-bg-primary"},n)}var i=a[0].charAt(0).toUpperCase()+a[1].charAt(0).toUpperCase();return m.a.createElement(g.a,{shape:t,className:"gx-size-40 gx-bg-cyan"},i)}return m.a.createElement(g.a,{shape:t,className:"gx-size-40",src:e.avatar})}var v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(r.a)(t).call(this,e))).state={width:0,height:0,recentList:[],shape:"",limit:3},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(s.a)(a)),a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({height:window.innerHeight+"px",width:window.innerWidth+"px",recentList:this.props.recentList,shape:this.props.shape}),window.innerWidth<575&&this.setState({limit:1})}},{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"onLoadMore",value:function(){this.setState(function(e){return{limit:e.limit+1}})}},{key:"render",value:function(){var e=this.state,t=e.recentList,a=e.shape,n=e.limit;return m.a.createElement("div",{className:"gx-entry-sec"},m.a.createElement(d.a,{title:"Recent Activities"}),t.slice(0,n).map(function(e,t){return m.a.createElement("div",{className:"gx-timeline-info",key:"activity"+t},m.a.createElement("h4",{className:"gx-timeline-info-day"},e.day),m.a.createElement(u.a,null,e.tasks.map(function(e,t){return m.a.createElement(x,{key:"timeline"+t,mode:"alternate",dot:f(e,a)},m.a.createElement(h,{task:e}))})))}),m.a.createElement("span",{className:"gx-link gx-btn-link",onClick:this.onLoadMore.bind(this)},"Load More"))}}]),t}(m.a.Component);t.a=v},1508:function(e,t,a){"use strict";var n=a(0),i=a(3),l=a.n(i),r=a(21);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a},m=function(e){return n.createElement(r.a,null,function(t){var a,i,r=t.getPrefixCls,m=e.prefixCls,u=e.className,g=e.color,d=void 0===g?"":g,p=e.children,h=e.pending,x=e.dot,f=o(e,["prefixCls","className","color","children","pending","dot"]),v=r("timeline",m),y=l()((c(a={},"".concat(v,"-item"),!0),c(a,"".concat(v,"-item-pending"),h),a),u),E=l()((c(i={},"".concat(v,"-item-head"),!0),c(i,"".concat(v,"-item-head-custom"),x),c(i,"".concat(v,"-item-head-").concat(d),!0),i));return n.createElement("li",s({},f,{className:y}),n.createElement("div",{className:"".concat(v,"-item-tail")}),n.createElement("div",{className:E,style:{borderColor:/blue|red|green/.test(d)?void 0:d}},x),n.createElement("div",{className:"".concat(v,"-item-content")},p))})};m.defaultProps={color:"blue",pending:!1};var u=m,g=a(44);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&(a[n[i]]=e[n[i]])}return a},N=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,y(t).apply(this,arguments))).renderTimeline=function(t){var a,i=t.getPrefixCls,r=e.props,s=r.prefixCls,c=r.pending,o=void 0===c?null:c,m=r.pendingDot,d=r.children,f=r.className,v=r.reverse,y=r.mode,E=b(r,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),N=i("timeline",s),w="boolean"===typeof o?null:o,k=l()(N,(x(a={},"".concat(N,"-pending"),!!o),x(a,"".concat(N,"-reverse"),!!v),x(a,"".concat(N,"-").concat(y),!!y),a),f),C=o?n.createElement(u,{pending:!!o,dot:m||n.createElement(g.a,{type:"loading"})},w):null,O=(v?[C].concat(h(n.Children.toArray(d).reverse())):[].concat(h(n.Children.toArray(d)),[C])).filter(function(e){return!!e}),L=n.Children.count(O),j="".concat(N,"-item-last"),T=n.Children.map(O,function(e,t){return n.cloneElement(e,{className:l()([e.props.className,!v&&o?t===L-2?j:"":t===L-1?j:"","alternate"===y?"".concat(N,t%2===0?"-item-left":"-item-right"):"right"===y?"".concat(N,"-item-right"):""])})});return n.createElement("ul",p({},E,{className:k}),T)},e}var a,i,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,n["Component"]),a=t,(i=[{key:"render",value:function(){return n.createElement(r.a,null,this.renderTimeline)}}])&&f(a.prototype,i),s&&f(a,s),t}();N.Item=u,N.defaultProps={reverse:!1,mode:""};t.a=N},1538:function(e,t,a){"use strict";a.d(t,"g",function(){return l}),a.d(t,"h",function(){return r}),a.d(t,"c",function(){return s}),a.d(t,"b",function(){return c}),a.d(t,"e",function(){return o}),a.d(t,"d",function(){return m}),a.d(t,"a",function(){return u}),a.d(t,"f",function(){return g});var n=a(0),i=a.n(n),l={id:"vUAqPRNWgYdS2DyJNAC1lV5KpJF21",name:"Chelsea Jones @chelsea",image:"https://via.placeholder.com/500x500",address:"Florida, USA",email:"@chelsea"},r={followers:"2k+",following:847,frinds:327,isFollow:!1},s=[{id:1,interest:"Music"},{id:2,interest:"Drawing"},{id:3,interest:"Sports"},{id:4,interest:"Graphic Designing"},{id:5,interest:"Tourism"}],c=[{id:1,image:"https://via.placeholder.com/150x150",name:"Chelsea",status:"online"},{id:2,image:"https://via.placeholder.com/150x150",name:"Kenery Thomson",status:"offline"},{id:3,image:"https://via.placeholder.com/150x150",name:"Amanda",status:"away"},{id:4,image:"https://via.placeholder.com/150x150",name:"Joshua",status:"away"},{id:5,image:"https://via.placeholder.com/150x150",name:"Alex Mulski",status:"away"},{id:6,image:"https://via.placeholder.com/150x150",name:"Stella Johnson",status:"away"}],o=[{id:1,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/500x500"},date:"Sun Jul 22 2018 10:02:47 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!1,commentCount:0,commentList:[{user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Mon Jul 23 2018 10:02:47 GMT+0530 (India Standard Time)",isLike:!0,likeCount:2,commentList:[]}]},{id:2,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"},{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]},{id:3,text:"",user:{id:1,name:"Kenery Thomson",image:"https://via.placeholder.com/500x500"},date:"Fri Aug 03 2018 06:08:15 GMT+0530 (India Standard Time)",mediaList:[{image:"https://via.placeholder.com/600x400"}],viewCount:350,likeCount:150,isLike:!0,commentCount:0,commentList:[{user:{id:6,name:"Kenery Thomson",image:"https://via.placeholder.com/150x150"},comment:"Wow ! Excellent I particularly like the use of whitespace here Keep it up",date:"Fri Aug 03 2018 08:02:47 GMT+0530 (India Standard Time)",likeCount:3,isLike:!1,commentList:[]}]}],m=[{id:1,image:"https://via.placeholder.com/150x150"},{id:2,image:"https://via.placeholder.com/150x150"},{id:3,image:"https://via.placeholder.com/150x150"},{id:4,image:"https://via.placeholder.com/150x150"},{id:5,image:"https://via.placeholder.com/150x150"},{id:6,image:"https://via.placeholder.com/150x150"}],u=[{id:1,image:"https://via.placeholder.com/116x90",title:"Layers"},{id:2,image:"https://via.placeholder.com/116x90",title:"play"},{id:3,image:"https://via.placeholder.com/116x90",title:"Fun & Tourism"},{id:4,image:"https://via.placeholder.com/116x90",title:"Music Lovers"},{id:5,image:"https://via.placeholder.com/116x90",title:"Dancing"},{id:6,image:"https://via.placeholder.com/116x90",title:"Fitness"}],g=[{id:1,day:"Today",tasks:[{id:1,name:"Mila Alba",title:[i.a.createElement("span",{className:"gx-link",key:1},"Mila Alba")," left a 5 star review on ",i.a.createElement("span",{className:"gx-link",key:2},"Albama\u2019s House")],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:2,name:"Bob Builder",title:["Callback request from ",i.a.createElement("span",{key:3,className:"gx-link"},"Bob Builder")," for the property ",i.a.createElement("span",{className:"gx-link",key:4},"Dimitri House")],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:3,name:"Tom Moody",title:["Congratulations to ",i.a.createElement("span",{key:5,className:"gx-link"},"Tom Moody")," for joining 10+ club "],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:4,name:"Norman Dolphi",title:["Norman Dolphi is looking for a house in New Jersy, USA"],avatar:"",imageList:[]}]},{id:2,day:"Yesterday",tasks:[{id:5,name:"Kily Johns",title:["Agent ",i.a.createElement("span",{key:6,className:"gx-link"},"Kily Johns")," has added 7 new photos to the property ",i.a.createElement("span",{key:7,className:"gx-link"},"Albama\u2019s House")],avatar:"",imageList:["https://via.placeholder.com/150x150","https://via.placeholder.com/150x150","https://via.placeholder.com/150x150"]},{id:6,name:"Tom Moody",title:["Welcome to a new agent ",i.a.createElement("span",{className:"gx-link",key:8},"Tom Moody in the Company")],avatar:"https://via.placeholder.com/150x150",imageList:[]},{id:7,name:"Oliver Shorter",title:[i.a.createElement("span",{key:9,className:"gx-link"},"Oliver Shorter")," is looking for an office space in ",i.a.createElement("span",{key:10,className:"gx-link"},"Colorado, USA")],avatar:"https://via.placeholder.com/150x150",imageList:[]}]}]},1904:function(e,t,a){"use strict";a.r(t);var n=a(31),i=a(32),l=a(35),r=a(33),s=a(34),c=a(0),o=a.n(c),m=a(199),u=a(105),g=a(106),d=a(39),p=a(69),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={isFollow:!1},a.handleToggle=function(){a.setState(function(e){return{isFollow:!e.isFollow}})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.userInfo,n=t.id,i=t.name,l=t.image,r=t.address,s=a.followers,c=a.following,m=a.frinds;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"gx-profileon"},o.a.createElement("div",{className:"gx-profileon-thumb gx-profileon-thumb-htctrcrop"},o.a.createElement("img",{src:l,alt:""})),o.a.createElement("div",{className:"gx-profileon-content"},o.a.createElement("p",{className:"gx-profileon-title"},i),o.a.createElement("span",{className:"gx-fs-sm"},r))),o.a.createElement("div",{className:"gx-follower gx-text-center"},o.a.createElement("ul",{className:"gx-follower-list"},o.a.createElement("li",null,o.a.createElement("span",{className:"gx-follower-title"},s),o.a.createElement("span",null,"Followers")),o.a.createElement("li",null,o.a.createElement("span",{className:"gx-follower-title"},c),o.a.createElement("span",null,"Following")),o.a.createElement("li",null,o.a.createElement("span",{className:"gx-follower-title"},m),o.a.createElement("span",null,"project")))),o.a.createElement("div",{className:"gx-mb-xl-4 gx-mb-3"},o.a.createElement("p",null,"You are following ",i),this.props.authUser===n?null:o.a.createElement(g.a,{className:"gx-btn-sm gx-mb-0",type:"primary",onClick:this.handleToggle},!0===this.state.isFollow?"Follow":"Unfollow")))}}]),t}(c.Component),x=Object(d.b)(function(e){return{authUser:e.auth.authUser}})(h),f=a(46),v=a(1420),y=a(1429),E=a(47),b=a.n(E),N=function(e){var t=e.date,a=b()(t,"ddd MMM DD YYYY kk:mm:ss Z"),n=b()(new Date),i=b.a.duration(n.diff(a)),l=0|i.asMinutes(),r=0|i.asHours();switch(!0){case 0===l:return o.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},"Just now");case l<60:return o.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},l," min");case r<24:return o.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},r," hours");default:return o.a.createElement("p",{className:"gx-text-grey gx-fs-sm gx-mb-0"},a.format("DD MMM, YYYY"))}},w=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={isComment:!1,commentData:{id:0,user:{},isLike:!0,likeCount:0,date:"",commentList:[],comment:""}},a._handleKeyPress=function(e){"Enter"===e.key&&a.handleCommentToggle()},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({commentData:this.props.commentData})}},{key:"handleLikeToggle",value:function(){this.setState(function(e){return{commentData:Object(f.a)({},e.commentData,{isLike:!e.commentData.isLike,likeCount:!0===e.commentData.isLike?e.commentData.likeCount-1:e.commentData.likeCount+1})}})}},{key:"handleCommentToggle",value:function(){this.setState(function(e){return{isComment:!e.isComment}})}},{key:"render",value:function(){var e=this,t=this.state.commentData,a=t.user,n=t.isLike,i=t.date,l=t.comment;return o.a.createElement("div",{className:"gx-media gx-flex-nowrap gx-wall-user-info gx-mb-3"},o.a.createElement(y.a,{className:"gx-mr-3 gx-size-40",src:a.image}),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("h5",{className:"gx-wall-user-title"},a.name),o.a.createElement(N,{date:i}),o.a.createElement("p",{className:"gx-mt-2"},l),o.a.createElement("div",{className:"gx-flex-row"},o.a.createElement(g.a,{type:"primary",size:"small",onClick:this.handleLikeToggle.bind(this)},!0===n?"Like":"UnLike"),o.a.createElement(g.a,{className:"gx-btn-primary-light",size:"small",onClick:this.handleCommentToggle.bind(this)},"Comment")),!0===this.state.isComment?o.a.createElement("div",{className:"gx-media"},o.a.createElement(y.a,{className:"gx-mr-3 gx-size-30",src:a.image}),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("input",{id:"required",className:"gx-border-0 ant-input",placeholder:"Type Comments",onKeyPress:function(t){return e._handleKeyPress(t)}}))):null))}}]),t}(c.Component),k=a(1547),C=a(205),O=a.n(C),L=(a(424),a(425),function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleCancel",value:function(){this.props.handleToggle()}},{key:"render",value:function(){var e=this.props.mediaList;switch(e.length){case 1:return o.a.createElement("div",{className:"gx-gallery-item",onClick:this.handleCancel.bind(this)},o.a.createElement("img",{className:"gx-img-fluid",src:e[0].image,alt:"post"}));case 2:return o.a.createElement("div",{className:"gx-gallery-grid gx-gallery-2",onClick:this.handleCancel.bind(this)},o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{className:"gx-img-fluid",src:e[0].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{className:"gx-img-fluid",src:e[1].image,alt:"post"})));case 3:return o.a.createElement("div",{className:"gx-gallery-grid gx-gallery-3",onClick:this.handleCancel.bind(this)},o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{className:"gx-img-fluid",src:e[0].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{className:"gx-img-fluid",src:e[1].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{className:"gx-img-fluid",src:e[2].image,alt:"post"})));case 4:return o.a.createElement("div",{className:"gx-gallery-grid gx-gallery-4",onClick:this.handleCancel.bind(this)},o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[0].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[1].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[2].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[3].image,alt:"post"})));default:return o.a.createElement("div",{className:"gx-gallery-grid gx-gallery-4-more",onClick:this.handleCancel.bind(this)},o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[0].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[1].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item thumb"},o.a.createElement("img",{src:e[2].image,alt:"post"})),o.a.createElement("div",{className:"gx-gallery-item"},o.a.createElement("img",{src:e[3].image,alt:"post"}),o.a.createElement("div",{className:"gx-gallery-item-content"},o.a.createElement("h1",{className:"gx-text-white"},"+ ",e.length-3))))}}}]),t}(c.Component));function j(e){return o.a.createElement(p.a,null,o.a.createElement("h4",null,"Slide Show"),o.a.createElement(O.a,{arrows:!0,dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,className:"slides"},e.mediaList.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("img",{alt:"example",style:{width:"100%"},src:e.image}))})))}var T=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={previewVisible:!1},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleToggle",value:function(){this.setState(function(e){return{previewVisible:!e.previewVisible}})}},{key:"render",value:function(){return o.a.createElement(p.a,null,o.a.createElement(L,{mediaList:this.props.mediaList,handleToggle:this.handleToggle.bind(this)}),o.a.createElement(k.a,{visible:this.state.previewVisible,footer:null,onCancel:this.handleToggle.bind(this)},o.a.createElement(j,{mediaList:this.props.mediaList})))}}]),t}(c.Component),S=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={message:"",user:{},post:{id:0,text:"",user:{},date:"",mediaList:[],viewCount:0,likeCount:0,isLike:!1,commentList:[]}},a._handleKeyPress=function(e){if("Enter"===e.key){console.log("user ---\x3e",a.state.user);var t={user:a.state.user,comment:a.state.message,date:(new Date).toString(),likeCount:0,isLike:!0,commentList:[]},n=a.state.post.commentList;n.push(t),a.setState(function(e){return{post:Object(f.a)({},e.post,{commentList:n}),message:""}})}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({post:this.props.postData,user:this.props.user})}},{key:"updateCommentValue",value:function(e){this.setState({message:e.target.value})}},{key:"handleLikeToggle",value:function(){this.setState(function(e){return{post:Object(f.a)({},e.post,{isLike:!e.post.isLike,likeCount:!0===e.post.isLike?e.post.likeCount-1:e.post.likeCount+1})}})}},{key:"render",value:function(){var e=this,t=this.state.post,a=t.user,n=t.date,i=t.mediaList,l=t.viewCount,r=t.likeCount,s=t.isLike,c=t.commentList,m=t.text;return o.a.createElement(v.a,{className:"gx-card"},o.a.createElement("div",{className:"gx-wall-content"},o.a.createElement("div",{className:"gx-media gx-wall-user-info gx-flex-nowrap gx-align-items-center"},o.a.createElement(y.a,{className:"gx-mr-3 gx-mb-2 gx-size-50",src:a.image}),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("h5",{className:"gx-wall-user-title"},a.name),o.a.createElement(N,{date:n}))),o.a.createElement("p",null,m),o.a.createElement("div",{className:"gx-wall-medialist"},i.length>0?o.a.createElement(T,{mediaList:i}):null),o.a.createElement("div",{className:"gx-flex-row gx-mb-2 gx-mb-xl-3"},o.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"},o.a.createElement("i",{className:"icon icon-view-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),o.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},l>0?l+" Views":"Views")),o.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey",onClick:this.handleLikeToggle.bind(this)},!0===s?o.a.createElement("i",{className:"icon icon-like gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle",style:{color:"blue"}}):o.a.createElement("i",{className:"icon icon-like-o gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),o.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},r>0?r+" Likes":"Likes")),o.a.createElement("p",{className:"gx-fs-sm gx-pointer gx-mr-3 gx-text-grey"},o.a.createElement("i",{className:"icon icon-chat-bubble gx-fs-lg gx-mr-2 gx-d-inline-flex gx-vertical-align-middle"}),o.a.createElement("span",{className:"gx-d-inline-flex gx-vertical-align-middle"},c.length>0?c.length+" Comments":"Comments"))),o.a.createElement("div",{className:"gx-wall-comment-box"},c.map(function(e,t){return o.a.createElement(w,{key:t,index:t,commentData:e})})),o.a.createElement("div",{className:"gx-wall-comment-box"},o.a.createElement("div",{className:"gx-media gx-mb-2"},o.a.createElement(y.a,{className:"gx-mr-3 gx-size-36",src:a.image}),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement("textarea",{id:"required",className:"gx-border-0 ant-input",onChange:function(t){return e.updateCommentValue(t)},onKeyPress:function(t){return e._handleKeyPress(t)},value:this.state.message,placeholder:"Type Comments"}))))))}}]),t}(c.Component),P=a(1422),A=a(44),D=a(1966),M=a(1479),I=P.a.TextArea,W=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={commentText:"",previewVisible:!1,previewImage:"",fileList:[],isOpen:!1},a.handleCancel=function(){return a.setState({previewVisible:!1})},a.handlePreview=function(e){console.log("previewImage",e),a.setState({previewImage:e.url||e.thumbUrl,previewVisible:!0})},a.handleChange=function(e){var t=e.fileList;console.log("fileList",t),a.setState({fileList:t})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleClickImage",value:function(){this.setState(function(e){return{isOpen:!e.isOpen}})}},{key:"handleAddPost",value:function(){this.props.addPost(this.state.commentText,this.state.fileList),this.setState({commentText:"",previewVisible:!1,previewImage:"",fileList:[],isOpen:!1})}},{key:"onChange",value:function(e){this.setState({commentText:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state,a=t.previewVisible,n=t.previewImage,i=t.fileList,l=0===this.state.fileList.length&&""===this.state.commentText,r=o.a.createElement("div",null,o.a.createElement(A.a,{type:"plus"}),o.a.createElement("div",{className:"ant-upload-text"},"Upload"));return o.a.createElement(v.a,{className:"gx-card"},o.a.createElement("div",{className:"gx-media gx-mb-2"},o.a.createElement(y.a,{className:"gx-size-50 gx-mr-3",src:this.props.user.image}),o.a.createElement("div",{className:"gx-media-body"},o.a.createElement(I,{className:"gx-border-0",id:"exampleTextarea",value:this.state.commentText,multiline:"true",rows:4,onChange:function(t){return e.onChange(t)},placeholder:"Whats in your mind?",margin:"none"}))),o.a.createElement("div",{className:"gx-clearfix"},!0===this.state.isOpen?o.a.createElement(D.a,{action:"//jsonplaceholder.typicode.com/posts/",listType:"picture-card",fileList:i,onPreview:this.handlePreview,onChange:this.handleChange},i.length>=8?null:r):null,o.a.createElement(k.a,{visible:a,footer:null,onCancel:this.handleCancel},o.a.createElement("img",{alt:"example",style:{width:"100%"},src:n}))),o.a.createElement(M.a,null),o.a.createElement("div",{className:"ant-row-flex"},o.a.createElement("div",{className:"gx-pointer",onClick:this.handleClickImage.bind(this)},o.a.createElement("i",{className:"icon icon-camera gx-mr-2 gx-fs-xl gx-d-inline-flex gx-vertical-align-middle"}),o.a.createElement("span",{className:"gx-fs-sm"}," Add Photos/Album ")),o.a.createElement(g.a,{type:"primary",size:"small",className:"gx-ml-auto gx-mb-0",disabled:l?"disabled":"",onClick:this.handleAddPost.bind(this)},"SEND")))}}]),t}(c.Component),K=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={postList:[],user:{}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.setState({postList:this.props.postList,user:this.props.user})}},{key:"addPost",value:function(e,t){var a={id:1343300*Math.random(),text:e,user:this.state.user,date:(new Date).toString(),mediaList:t.map(function(e){return{image:e.thumbUrl}}),viewCount:0,likeCount:0,isLike:!1,commentCount:0,commentList:[]};console.log("Post Data :==()==>",a);var n=this.state.postList;n.unshift(a),this.setState({postList:n})}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement(W,{addPost:this.addPost.bind(this),user:this.state.user}),this.state.postList.map(function(t){return o.a.createElement(S,{key:t.id,index:t.id,postData:t,user:e.state.user})}))}}]),t}(c.Component),F=a(1458),U=function(e){var t=e.interestList;return o.a.createElement("div",{className:"gx-entry-sec"},o.a.createElement(F.a,{title:"Interests"}),o.a.createElement("ul",{className:"gx-list-inline"},t.map(function(e){return o.a.createElement("li",{key:e.id},o.a.createElement("span",{className:"gx-link gx-btn gx-btn-white gx-mb-10"},e.interest))})))},z=function(e){var t=e.photoList,a=e.title;return o.a.createElement("div",{className:"gx-entry-sec"},o.a.createElement(F.a,{title:a}),o.a.createElement("ul",{className:"gx-gallery-list"},t.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("img",{alt:"...",src:e.image}))})))},V=a(1436);function J(e){var t=e.isType;return"online"===t?o.a.createElement(V.a,{status:"success"}):"away"===t?o.a.createElement(V.a,{status:"warning"}):o.a.createElement(V.a,{count:0,status:"error"})}var _=function(e){var t=e.friendList;return o.a.createElement("div",{className:"gx-entry-sec"},o.a.createElement(F.a,{title:o.a.createElement("span",null,"Friends - 530 ",o.a.createElement("span",{className:"gx-text-grey"},"(27 Mutual)"))}),o.a.createElement("ul",{className:"gx-fnd-list"},t.map(function(e,t){return o.a.createElement("li",{className:"gx-mb-2",key:t},o.a.createElement("div",{className:"gx-user-fnd"},o.a.createElement("img",{alt:"...",src:e.image}),o.a.createElement("div",{className:"gx-user-fnd-content"},o.a.createElement(J,{isType:e.status}),o.a.createElement("h6",null,e.name))))})))},Y=a(71),G=a(1494),q=a(1538),H=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.communitiesList;return o.a.createElement("div",{className:"gx-entry-sec"},o.a.createElement(F.a,{title:"Communities"}),o.a.createElement("ul",{className:"gx-gallery-list"},e.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement("div",{className:"gx-gallery-thumb"},o.a.createElement("img",{alt:"...",src:e.image}),o.a.createElement("div",{className:"gx-gallery-thumb-content"},o.a.createElement("h6",null,e.title))))})))}}]),t}(c.Component),B=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"gx-main-content"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xl:6,lg:8,md:8,sm:10,xs:24,className:"gx-d-none gx-d-sm-block"},o.a.createElement(Y.a,{className:"gx-wall-scroll"},o.a.createElement(x,{user:q.g,userInfo:q.h}),o.a.createElement(U,{interestList:q.c}),o.a.createElement(_,{friendList:q.b}),o.a.createElement(z,{photoList:q.d,title:"Photos"}),o.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4"},"Go to gallery ",o.a.createElement("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})))),o.a.createElement(u.a,{xl:12,lg:8,md:16,sm:14,xs:24},o.a.createElement(Y.a,{className:"gx-wall-scroll"},o.a.createElement("div",{className:"gx-wall-postlist"},o.a.createElement(K,{postList:q.e,user:q.g})))),o.a.createElement(u.a,{xl:6,lg:8,md:6,sm:24,xs:24,className:"gx-d-none gx-d-lg-block"},o.a.createElement(Y.a,{className:"gx-wall-scroll"},o.a.createElement(H,{communitiesList:q.a}),o.a.createElement("span",{className:"gx-text-primary gx-fs-md gx-pointer gx-d-block gx-mb-4"},"See All Communities ",o.a.createElement("i",{className:"icon icon-long-arrow-right gx-fs-xxl gx-ml-2 gx-d-inline-flex gx-vertical-align-middle"})),o.a.createElement(G.a,{recentList:q.f,shape:"square"})))))}}]),t}(c.Component);t.default=B}}]);
//# sourceMappingURL=24.52fb9a1a.chunk.js.map