(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1523:function(e,t,n){"use strict";var r=n(0),a=n(3),l=n.n(a),o=n(21);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},s=function(e){return r.createElement(o.a,null,function(t){var n,a,o=t.getPrefixCls,s=e.prefixCls,m=e.className,f=e.color,p=void 0===f?"":f,d=e.children,b=e.pending,y=e.dot,g=u(e,["prefixCls","className","color","children","pending","dot"]),v=o("timeline",s),E=l()((i(n={},"".concat(v,"-item"),!0),i(n,"".concat(v,"-item-pending"),b),n),m),h=l()((i(a={},"".concat(v,"-item-head"),!0),i(a,"".concat(v,"-item-head-custom"),y),i(a,"".concat(v,"-item-head-").concat(p),!0),a));return r.createElement("li",c({},g,{className:E}),r.createElement("div",{className:"".concat(v,"-item-tail")}),r.createElement("div",{className:h,style:{borderColor:/blue|red|green/.test(p)?void 0:p}},y),r.createElement("div",{className:"".concat(v,"-item-content")},d))})};s.defaultProps={color:"blue",pending:!1};var m=s,f=n(44);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},w=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,E(t).apply(this,arguments))).renderTimeline=function(t){var n,a=t.getPrefixCls,o=e.props,c=o.prefixCls,i=o.pending,u=void 0===i?null:i,s=o.pendingDot,p=o.children,g=o.className,v=o.reverse,E=o.mode,h=O(o,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),w=a("timeline",c),j="boolean"===typeof u?null:u,C=l()(w,(y(n={},"".concat(w,"-pending"),!!u),y(n,"".concat(w,"-reverse"),!!v),y(n,"".concat(w,"-").concat(E),!!E),n),g),P=u?r.createElement(m,{pending:!!u,dot:s||r.createElement(f.a,{type:"loading"})},j):null,S=(v?[P].concat(b(r.Children.toArray(p).reverse())):[].concat(b(r.Children.toArray(p)),[P])).filter(function(e){return!!e}),x=r.Children.count(S),N="".concat(w,"-item-last"),I=r.Children.map(S,function(e,t){return r.cloneElement(e,{className:l()([e.props.className,!v&&u?t===x-2?N:"":t===x-1?N:"","alternate"===E?"".concat(w,t%2===0?"-item-left":"-item-right"):"right"===E?"".concat(w,"-item-right"):""])})});return r.createElement("ul",d({},h,{className:C}),I)},e}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement(o.a,null,this.renderTimeline)}}])&&g(n.prototype,a),c&&g(n,c),t}();w.Item=m,w.defaultProps={reverse:!1,mode:""};t.a=w},1972:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(201),o=n(107),c=n(1434),i=n(1523),u=function(){return a.a.createElement(c.a,{title:"Basic",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,null,"Technical testing 2015-09-01"),a.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))},s=function(){return a.a.createElement(c.a,{title:"Color",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,{color:"green"},"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,{color:"red"},a.a.createElement("p",null,"Solve initial network problems 1"),a.a.createElement("p",null,"Solve initial network problems 2"),a.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),a.a.createElement(i.a.Item,null,a.a.createElement("p",null,"Technical testing 1"),a.a.createElement("p",null,"Technical testing 2"),a.a.createElement("p",null,"Technical testing 3 2015-09-01"))))},m=function(){return a.a.createElement(c.a,{title:"Last Node",className:"gx-card"},a.a.createElement(i.a,{pending:"Recording..."},a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,null,"Technical testing 2015-09-01")))},f=n(44),p=function(){return a.a.createElement(c.a,{title:"Custom",className:"gx-card"},a.a.createElement(i.a,null,a.a.createElement(i.a.Item,null,"Create a services site 2015-09-01"),a.a.createElement(i.a.Item,null,"Solve initial network problems 2015-09-01"),a.a.createElement(i.a.Item,{dot:a.a.createElement(f.a,{type:"clock-circle-o",style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),a.a.createElement(i.a.Item,null,"Network problems being solved 2015-09-01")))};t.default=function(){return a.a.createElement(l.a,null,a.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(u,null),a.a.createElement(s,null)),a.a.createElement(o.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(m,null),a.a.createElement(p,null)))}}}]);
//# sourceMappingURL=98.56b21eb7.chunk.js.map