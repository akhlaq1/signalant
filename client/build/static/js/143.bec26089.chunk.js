(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1960:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(201),l=n(107),c=n(1434),i=n(1),u=n(3),p=n.n(u),s=n(21);function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==m(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,d(t).apply(this,arguments))).renderBreadcrumbItem=function(t){var n,a=t.getPrefixCls,o=e.props,l=o.prefixCls,c=o.separator,i=o.children,u=h(o,["prefixCls","separator","children"]),p=a("breadcrumb",l);return n="href"in e.props?r.createElement("a",f({className:"".concat(p,"-link")},u),i):r.createElement("span",f({className:"".concat(p,"-link")},u),i),i?r.createElement("span",null,n,r.createElement("span",{className:"".concat(p,"-separator")},c)):null},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return r.createElement(s.a,null,this.renderBreadcrumbItem)}}])&&y(n.prototype,a),o&&y(n,o),t}();v.__ANT_BREADCRUMB_ITEM=!0,v.defaultProps={separator:"/"},v.propTypes={prefixCls:i.string,separator:i.oneOfType([i.string,i.element]),href:i.string};var O=n(53);function g(e){return(g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return!t||"object"!==g(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t,n,a){var o=n.indexOf(e)===n.length-1,l=function(e,t){if(!e.breadcrumbName)return null;var n=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(n,")"),"g"),function(e,n){return t[n]||e})}(e,t);return o?r.createElement("span",null,l):r.createElement("a",{href:"#/".concat(a.join("/"))},l)}var N=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=w(this,x(t).apply(this,arguments))).renderBreadcrumb=function(t){var n,a=t.getPrefixCls,o=e.props,l=o.prefixCls,c=o.separator,i=o.style,u=o.className,s=o.routes,m=o.params,f=void 0===m?{}:m,y=o.children,b=o.itemRender,d=void 0===b?k:b,E=a("breadcrumb",l);if(s&&s.length>0){var h=[];n=s.map(function(e){e.path=e.path||"";var t=e.path.replace(/^\//,"");return Object.keys(f).forEach(function(e){t=t.replace(":".concat(e),f[e])}),t&&h.push(t),r.createElement(v,{separator:c,key:e.breadcrumbName||t},d(e,f,s,h))})}else y&&(n=r.Children.map(y,function(e,t){return e?(Object(O.a)(e.type&&e.type.__ANT_BREADCRUMB_ITEM,"Breadcrumb only accepts Breadcrumb.Item as it's children"),Object(r.cloneElement)(e,{separator:c,key:t})):e}));return r.createElement("div",{className:p()(u,E),style:i},n)},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,r["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props;Object(O.a)(!("linkRender"in e||"nameRender"in e),"`linkRender` and `nameRender` are removed, please use `itemRender` instead, see: https://u.ant.design/item-render.")}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderBreadcrumb)}}])&&j(n.prototype,a),o&&j(n,o),t}();N.defaultProps={separator:"/"},N.propTypes={prefixCls:i.string,separator:i.node,routes:i.array,params:i.object,linkRender:i.func,nameRender:i.func},N.Item=v;var I=N,P=function(){return a.a.createElement(c.a,{className:"gx-card",title:"Basic"},a.a.createElement(I,null,a.a.createElement(I.Item,null,"Home"),a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},"Application Center")),a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},"Application List")),a.a.createElement(I.Item,null,"An Application")))},C=n(44),R=function(){return a.a.createElement(c.a,{className:"gx-card",title:"WithIcon"},a.a.createElement(I,null,a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},a.a.createElement(C.a,{type:"home"}))),a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},a.a.createElement(C.a,{type:"user"}),a.a.createElement("span",null,"Application List"))),a.a.createElement(I.Item,null,"Application")))},S=function(){return a.a.createElement(c.a,{className:"gx-card",title:"Separator"},a.a.createElement(I,{separator:">"},a.a.createElement(I.Item,null,"Home"),a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},"Application Center")),a.a.createElement(I.Item,null,a.a.createElement("span",{className:"gx-link"},"Application List")),a.a.createElement(I.Item,null,"An Application")))};t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(P,null),a.a.createElement(R,null)),a.a.createElement(l.a,{lg:12,md:12,sm:24,xs:24},a.a.createElement(S,null)))}}}]);
//# sourceMappingURL=143.bec26089.chunk.js.map