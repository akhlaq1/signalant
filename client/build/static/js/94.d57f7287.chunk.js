(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1455:function(e,t,a){"use strict";a.d(t,"a",function(){return w});var n=a(0),r=a(1),c=a(662),l=a.n(c),o=a(3),s=a.n(o),u=a(42),i=a(407),m=a(43),f=a(20);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,g(t).apply(this,arguments))).saveSwitch=function(t){e.rcSwitch=t},e.renderSwitch=function(t){var a,r=t.getPrefixCls,c=e.props,o=c.prefixCls,f=c.size,p=c.loading,h=c.className,b=void 0===h?"":h,g=c.disabled,y=r("switch",o),w=s()(b,(d(a={},"".concat(y,"-small"),"small"===f),d(a,"".concat(y,"-loading"),p),a)),x=p?n.createElement(m.a,{type:"loading",className:"".concat(y,"-loading-icon")}):null;return n.createElement(i.a,{insertExtraNode:!0},n.createElement(l.a,E({},Object(u.default)(e.props,["loading"]),{prefixCls:y,className:w,disabled:g||p,ref:e.saveSwitch,loadingIcon:x})))},e}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,n["Component"]),a=t,(r=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return n.createElement(f.a,null,this.renderSwitch)}}])&&h(a.prototype,r),c&&h(a,c),t}();w.propTypes={prefixCls:r.string,size:r.oneOf(["small","default","large"]),className:r.string}},1870:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(194),l=a(101),o=a(1403),s=a(1419),u=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Basic"},r.a.createElement(s.a,{count:5},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{count:0,showZero:!0},r.a.createElement("span",{className:"head-example"})))},i=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Stand Alone"},r.a.createElement(s.a,{count:25}),r.a.createElement(s.a,{count:4,style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),r.a.createElement(s.a,{count:109,style:{backgroundColor:"#52c41a"}}))},m=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Overflow Count"},r.a.createElement(s.a,{className:"gx-mt-3",count:99},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:100},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:99,overflowCount:10},r.a.createElement("span",{className:"head-example"})),r.a.createElement(s.a,{className:"gx-mt-3",count:1e3,overflowCount:999},r.a.createElement("span",{className:"head-example"})))},f=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Status"},r.a.createElement(s.a,{status:"success"}),r.a.createElement(s.a,{status:"error"}),r.a.createElement(s.a,{status:"default"}),r.a.createElement(s.a,{status:"processing"}),r.a.createElement(s.a,{status:"warning"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"success",text:"Success"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"error",text:"Error"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"default",text:"Default"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"processing",text:"Processing"}),r.a.createElement("br",null),r.a.createElement(s.a,{status:"warning",text:"Warning"}))},p=a(30),E=a(31),d=a(33),h=a(32),b=a(34),g=a(102),y=a(43),w=a(1455),x=g.a.Group,v=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={count:5,show:!0},a.increase=function(){var e=a.state.count+1;a.setState({count:e})},a.decline=function(){var e=a.state.count-1;e<0&&(e=0),a.setState({count:e})},a.onChange=function(e){a.setState({show:e})},a}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement(o.a,{className:"gx-card",title:"Dynamic"},r.a.createElement("div",null,r.a.createElement(s.a,{count:this.state.count},r.a.createElement("div",{className:"head-example"})),r.a.createElement(x,null,r.a.createElement(g.a,{onClick:this.decline},r.a.createElement(y.a,{type:"minus"})),r.a.createElement(g.a,{onClick:this.increase},r.a.createElement(y.a,{type:"plus"})))),r.a.createElement("div",{style:{marginTop:10}},r.a.createElement(s.a,{dot:this.state.show},r.a.createElement("div",{className:"head-example"})),r.a.createElement(w.a,{onChange:this.onChange,checked:this.state.show})))}}]),t}(r.a.Component),N=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Red Badge"},r.a.createElement(s.a,{dot:!0},r.a.createElement(y.a,{type:"notification"})),r.a.createElement(s.a,{count:0,dot:!0},r.a.createElement(y.a,{type:"notification"})),r.a.createElement(s.a,{dot:!0},r.a.createElement("a",{href:"/"},"Link something")))},O=function(){return r.a.createElement(o.a,{className:"gx-card",title:"Clickable"},r.a.createElement("span",{className:"gx-link"},r.a.createElement(s.a,{count:5},r.a.createElement("span",{className:"head-example"}))))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(u,null),r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(f,null)),r.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(O,null)))}}}]);
//# sourceMappingURL=94.d57f7287.chunk.js.map