(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1491:function(e,t,n){"use strict";n.d(t,"a",function(){return E});var a=n(0),o=n(1),r=n(690),l=n.n(r),i=n(3),c=n.n(i),s=n(43),u=n(424),f=n(44),m=n(21);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=v(this,d(t).apply(this,arguments))).saveSwitch=function(t){e.rcSwitch=t},e.renderSwitch=function(t){var n,o=t.getPrefixCls,r=e.props,i=r.prefixCls,m=r.size,p=r.loading,h=r.className,v=void 0===h?"":h,d=r.disabled,g=o("switch",i),E=c()(v,(y(n={},"".concat(g,"-small"),"small"===m),y(n,"".concat(g,"-loading"),p),n)),x=p?a.createElement(f.a,{type:"loading",className:"".concat(g,"-loading-icon")}):null;return a.createElement(u.a,{insertExtraNode:!0},a.createElement(l.a,b({},Object(s.default)(e.props,["loading"]),{prefixCls:g,className:E,disabled:d||p,ref:e.saveSwitch,loadingIcon:x})))},e}var n,o,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a["Component"]),n=t,(o=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return a.createElement(m.a,null,this.renderSwitch)}}])&&h(n.prototype,o),r&&h(n,r),t}();E.propTypes={prefixCls:o.string,size:o.oneOf(["small","default","large"]),className:o.string}},1526:function(e,t,n){"use strict";var a=n(0),o=n(14),r=n(232),l=n(44),i=n(108),c=n(231),s=n(167),u=n(21);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&(n[a[o]]=e[a[o]])}return n},d=function(e){function t(e){var n,o,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,l=b(t).call(this,e),(n=!l||"object"!==f(l)&&"function"!==typeof l?y(o):l).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call(y(n),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call(y(n),e)},n.onVisibleChange=function(e){n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var o=n.props,r=o.okButtonProps,l=o.cancelButtonProps,c=o.title,s=o.cancelText,u=o.okText,f=o.okType,p=o.icon;return a.createElement("div",null,a.createElement("div",{className:"".concat(e,"-inner-content")},a.createElement("div",{className:"".concat(e,"-message")},p,a.createElement("div",{className:"".concat(e,"-message-title")},c)),a.createElement("div",{className:"".concat(e,"-buttons")},a.createElement(i.a,m({onClick:n.onCancel,size:"small"},l),s||t.cancelText),a.createElement(i.a,m({onClick:n.onConfirm,type:f,size:"small"},r),u||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,o=n.props,l=o.prefixCls,i=o.placement,u=v(o,["prefixCls","placement"]),f=t("popover",l),p=a.createElement(c.a,{componentName:"Popconfirm",defaultLocale:s.a.Popconfirm},function(e){return n.renderOverlay(f,e)});return a.createElement(r.a,m({},u,{prefixCls:f,placement:i,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:p,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,a["Component"]),n=t,l=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(o=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var a=n.onVisibleChange;a&&a(e,t)}},{key:"render",value:function(){return a.createElement(u.a,null,this.renderConfirm)}}])&&p(n.prototype,o),l&&p(n,l),t}();d.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:a.createElement(l.a,{type:"exclamation-circle",theme:"filled"})},Object(o.polyfill)(d),t.a=d},1974:function(e,t,n){"use strict";n.r(t);var a=n(31),o=n(32),r=n(34),l=n(33),i=n(35),c=n(0),s=n.n(c),u=n(201),f=n(107),m=n(1445),p=n(1434),b=n(1526),y=function(){return s.a.createElement(p.a,{title:"Basic",className:"gx-card"},s.a.createElement(b.a,{title:"Are you sure delete this task?",onConfirm:function(e){console.log(e),m.a.success("Click on Yes")},onCancel:function(e){console.log(e),m.a.error("Click on No")},okText:"Yes",cancelText:"No"},s.a.createElement("span",{className:"gx-link"},"Delete")))},h=function(){return s.a.createElement(p.a,{title:"Locale Text",className:"gx-card"},s.a.createElement(b.a,{title:"Are you sure\uff1f",okText:"Yes",cancelText:"No"},s.a.createElement("span",{className:"gx-link"},"Delete")))},v=n(108),d="Are you sure delete this task?",g=function(){function e(){m.a.info("Click on Yes.")}return s.a.createElement(p.a,{title:"Placement",className:"gx-card"},s.a.createElement("div",{className:"gx-overflow-auto"},s.a.createElement("div",{style:{marginLeft:70,whiteSpace:"nowrap"}},s.a.createElement(b.a,{placement:"topLeft",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"TL")),s.a.createElement(b.a,{placement:"top",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"Top")),s.a.createElement(b.a,{placement:"topRight",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"TR"))),s.a.createElement("div",{style:{width:70,float:"left"}},s.a.createElement(b.a,{placement:"leftTop",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"LT")),s.a.createElement(b.a,{placement:"left",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"Left")),s.a.createElement(b.a,{placement:"leftBottom",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"LB"))),s.a.createElement("div",{style:{width:70,marginLeft:304}},s.a.createElement(b.a,{placement:"rightTop",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"RT")),s.a.createElement(b.a,{placement:"right",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"Right")),s.a.createElement(b.a,{placement:"rightBottom",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"RB"))),s.a.createElement("div",{style:{marginLeft:70,clear:"both",whiteSpace:"nowrap"}},s.a.createElement(b.a,{placement:"bottomLeft",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"BL")),s.a.createElement(b.a,{placement:"bottom",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"Bottom")),s.a.createElement(b.a,{placement:"bottomRight",title:d,onConfirm:e,okText:"Yes",cancelText:"No"},s.a.createElement(v.a,null,"BR")))))},E=n(1491),x=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={visible:!1,condition:!0},n.changeCondition=function(e){n.setState({condition:e})},n.confirm=function(){n.setState({visible:!1}),m.a.success("Next step.")},n.cancel=function(){n.setState({visible:!1}),m.a.error("Click on cancel.")},n.handleVisibleChange=function(e){e?(console.log(n.state.condition),n.state.condition?n.confirm():n.setState({visible:e})):n.setState({visible:e})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(p.a,{title:"Conditional Trigger",className:"gx-card"},s.a.createElement(b.a,{title:"Are you sure delete this task?",visible:this.state.visible,onVisibleChange:this.handleVisibleChange,onConfirm:this.confirm,onCancel:this.cancel,okText:"Yes",cancelText:"No"},s.a.createElement("a",{className:"gx-mb-3 gx-d-block",href:"/"},"Delete a task")),"Whether directly execute\uff1a",s.a.createElement(E.a,{defaultChecked:!0,onChange:this.changeCondition}))}}]),t}(s.a.Component),C=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(y,null),s.a.createElement(h,null),s.a.createElement(x,null)),s.a.createElement(f.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(g,null)))}}]),t}(c.Component);t.default=C}}]);
//# sourceMappingURL=59.7996a62c.chunk.js.map