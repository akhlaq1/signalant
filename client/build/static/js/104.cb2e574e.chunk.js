(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1468:function(e,t,l){"use strict";function n(e,t){if("undefined"===typeof window)return 0;var l=t?"scrollTop":"scrollLeft",n=e===window,r=n?e[t?"pageYOffset":"pageXOffset"]:e[l];return n&&"number"!==typeof r&&(r=document.documentElement[l]),r}l.d(t,"a",function(){return n})},1973:function(e,t,l){"use strict";l.r(t);var n=l(0),r=l.n(n),a=l(199),c=l(105),u=l(1420),o=l(52),m=l(75),b=l(3),i=l.n(b),E=l(43),s=l(36),p=l.n(s),f=l(21),d=l(1468);function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function h(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e,t,l,n){var r=l-t;return(e/=n/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t};function S(){return window}var k=function(e){function t(e){var l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(l=g(this,w(t).call(this,e))).getCurrentScrollTop=function(){var e=(l.props.target||S)();return e===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:e.scrollTop},l.scrollToTop=function(e){var t=l.getCurrentScrollTop(),n=Date.now();p()(function e(){var r=Date.now()-n;l.setScrollTop(O(r,t,0,450)),r<450?p()(e):l.setScrollTop(0)}),(l.props.onClick||function(){})(e)},l.handleScroll=function(){var e=l.props,t=e.visibilityHeight,n=e.target,r=void 0===n?S:n,a=Object(d.a)(r(),!0);l.setState({visible:a>t})},l.renderBackTop=function(e){var t=e.getPrefixCls,r=l.props,a=r.prefixCls,c=r.className,u=void 0===c?"":c,m=r.children,b=t("back-top",a),s=i()(b,u),p=n.createElement("div",{className:"".concat(b,"-content")},n.createElement("div",{className:"".concat(b,"-icon")})),f=Object(E.default)(l.props,["prefixCls","className","children","visibilityHeight","target","visible"]),d=("visible"in l.props?l.props.visible:l.state.visible)?n.createElement("div",y({},f,{className:s,onClick:l.scrollToTop}),m||p):null;return n.createElement(o.default,{component:"",transitionName:"fade"},d)},l.state={visible:!1},l}var l,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,n["Component"]),l=t,(r=[{key:"setScrollTop",value:function(e){var t=(this.props.target||S)();t===window?(document.body.scrollTop=e,document.documentElement.scrollTop=e):t.scrollTop=e}},{key:"componentDidMount",value:function(){var e=this.props.target||S;this.scrollEvent=Object(m.a)(e(),"scroll",this.handleScroll),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"render",value:function(){return n.createElement(f.a,null,this.renderBackTop)}}])&&h(l.prototype,r),a&&h(l,a),t}();k.defaultProps={visibilityHeight:400};var j=function(){return r.a.createElement(u.a,{title:"Basic",className:"gx-card"},r.a.createElement(k,null),"Scroll down to see the bottom-right",r.a.createElement("strong",{className:"gx-text-grey"}," gray "),"button.")},x=function(){return r.a.createElement(u.a,{id:"components-back-top-demo-custom",title:"Custom",className:"gx-card"},r.a.createElement(k,null,r.a.createElement("div",{className:"ant-back-top-inner"},"UP")),"Scroll down to see the bottom-right",r.a.createElement("strong",{className:"gx-text-primary"}," blue "),"button.")};t.default=function(){return r.a.createElement(a.a,null,r.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(j,null)),r.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(x,null)),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))}}}]);
//# sourceMappingURL=104.cb2e574e.chunk.js.map