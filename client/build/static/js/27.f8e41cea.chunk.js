(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1457:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return r})},1492:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var r=n(0),a=n(3),o=n.n(a),i=n(691),c=n(44),l=n(21);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=m(this,d(t).apply(this,arguments))).saveInputNumber=function(t){e.inputNumberRef=t},e.renderInputNumber=function(t){var n,a=t.getPrefixCls,l=e.props,u=l.className,p=l.size,m=l.prefixCls,d=y(l,["className","size","prefixCls"]),b=a("input-number",m),v=o()((f(n={},"".concat(b,"-lg"),"large"===p),f(n,"".concat(b,"-sm"),"small"===p),n),u),h=r.createElement(c.a,{type:"up",className:"".concat(b,"-handler-up-inner")}),g=r.createElement(c.a,{type:"down",className:"".concat(b,"-handler-down-inner")});return r.createElement(i.default,s({ref:e.saveInputNumber,className:v,upHandler:h,downHandler:g,prefixCls:b},d))},e}var n,a,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,r["Component"]),n=t,(a=[{key:"focus",value:function(){this.inputNumberRef.focus()}},{key:"blur",value:function(){this.inputNumberRef.blur()}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderInputNumber)}}])&&p(n.prototype,a),u&&p(n,u),t}();v.defaultProps={step:1}},1493:function(e,t,n){"use strict";var r=n(0),a=n(3),o=n.n(a),i=n(21);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){return r.createElement(i.a,null,function(t){var n,a=t.getPrefixCls,i=e.prefixCls,s=e.type,f=void 0===s?"horizontal":s,p=e.orientation,m=void 0===p?"":p,d=e.className,b=e.children,y=e.dashed,v=u(e,["prefixCls","type","orientation","className","children","dashed"]),h=a("divider",i),g=m.length>0?"-"+m:m,O=o()(d,h,"".concat(h,"-").concat(f),(l(n={},"".concat(h,"-with-text").concat(g),b),l(n,"".concat(h,"-dashed"),!!y),n));return r.createElement("div",c({className:O},v),b&&r.createElement("span",{className:"".concat(h,"-inner-text")},b))})}},1526:function(e,t,n){"use strict";var r=n(0),a=n(14),o=n(232),i=n(44),c=n(108),l=n(231),u=n(167),s=n(21);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n},h=function(e){function t(e){var n,a,i;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,i=d(t).call(this,e),(n=!i||"object"!==f(i)&&"function"!==typeof i?b(a):i).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call(b(n),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call(b(n),e)},n.onVisibleChange=function(e){n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var a=n.props,o=a.okButtonProps,i=a.cancelButtonProps,l=a.title,u=a.cancelText,s=a.okText,f=a.okType,m=a.icon;return r.createElement("div",null,r.createElement("div",{className:"".concat(e,"-inner-content")},r.createElement("div",{className:"".concat(e,"-message")},m,r.createElement("div",{className:"".concat(e,"-message-title")},l)),r.createElement("div",{className:"".concat(e,"-buttons")},r.createElement(c.a,p({onClick:n.onCancel,size:"small"},i),u||t.cancelText),r.createElement(c.a,p({onClick:n.onConfirm,type:f,size:"small"},o),s||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,a=n.props,i=a.prefixCls,c=a.placement,s=v(a,["prefixCls","placement"]),f=t("popover",i),m=r.createElement(l.a,{componentName:"Popconfirm",defaultLocale:u.a.Popconfirm},function(e){return n.renderOverlay(f,e)});return r.createElement(o.a,p({},s,{prefixCls:f,placement:c,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:m,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,i=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(a=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var r=n.onVisibleChange;r&&r(e,t)}},{key:"render",value:function(){return r.createElement(s.a,null,this.renderConfirm)}}])&&m(n.prototype,a),i&&m(n,i),t}();h.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:r.createElement(i.a,{type:"exclamation-circle",theme:"filled"})},Object(a.polyfill)(h),t.a=h},2008:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(201),i=n(107),c=n(46),l=n(1457),u=n(31),s=n(32),f=n(34),p=n(33),m=n(35),d=n(427),b=n(1447),y=n(1492),v=n(1436),h=n(1526),g=n(1493),O=n(1434),E=n(108),j=n(1924),w=n(1441),P=n(71),x=b.a.Item,k=a.a.createContext(),C=b.a.create()(function(e){var t=e.form,n=(e.index,Object(d.a)(e,["form","index"]));return a.a.createElement(k.Provider,{value:t},a.a.createElement("tr",n))}),N=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).getInput=function(){return"number"===n.props.inputType?a.a.createElement(y.a,null):a.a.createElement(v.a,null)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.editing,r=t.dataIndex,o=t.title,i=(t.inputType,t.record),c=(t.index,Object(d.a)(t,["editing","dataIndex","title","inputType","record","index"]));return a.a.createElement(k.Consumer,null,function(t){var l=t.getFieldDecorator;return a.a.createElement("td",c,n?a.a.createElement(x,{style:{margin:0}},l(r,{rules:[{required:!0,message:"Please Input ".concat(o,"!")}],initialValue:i[r]})(e.getInput())):c.children)})}}]),t}(a.a.Component),S=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).isEditing=function(e){return e.key===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.state={data:[],editingKey:""},n.columns=[{title:"Name",dataIndex:"Name",width:"20%",editable:!0},{title:"Description",dataIndex:"Description",width:"20%",editable:!0},{title:"Price",dataIndex:"Price",width:"20%",editable:!0},{title:"Duration",dataIndex:"Duration",width:"20%",editable:!0},{title:"Action",dataIndex:"operation",width:"20%",render:function(e,t){var r=n.isEditing(t);return a.a.createElement("div",null,r?a.a.createElement("span",null,a.a.createElement(k.Consumer,null,function(e){return a.a.createElement("a",{href:"javascript:;",onClick:function(){return n.save(e,t.key)},style:{marginRight:8}},"Save")}),a.a.createElement(h.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.key)}},a.a.createElement("a",null,"Cancel"))):a.a.createElement("a",{onClick:function(){return n.edit(t.key)}},"Edit"),a.a.createElement(g.a,{type:"vertical"}),a.a.createElement("a",{onClick:function(){return n.delete(t.key)}},"Delete"))}}],n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;P.database().ref("packages").on("value",function(t){var n=[];t.forEach(function(e){var t={key:e.key.toString(),Name:e.val().Name,Description:e.val().Description,Price:e.val().Price,Duration:e.val().Duration};n.push(t)}),e.setState(function(e){return{data:[].concat(Object(l.a)(e.data),n)}})})}},{key:"save",value:function(e,t){var n=this;e.validateFields(function(e,r){if(!e){P.database().ref("packages").child(t).update({Name:r.Name,Description:r.Description,Price:r.Price,Duration:r.Duration});var a=Object(l.a)(n.state.data),o=a.findIndex(function(e){return t===e.key});if(o>-1){var i=a[o];a.splice(o,1,Object(c.a)({},i,r)),console.log(a),n.setState({data:a,editingKey:""})}else a.push(r),n.setState({data:a,editingKey:""})}})}},{key:"edit",value:function(e){this.setState({editingKey:e})}},{key:"delete",value:function(e){console.log(e),P.database().ref("packages/"+e).remove()}},{key:"render",value:function(){var e=this,t={body:{row:C,cell:N}},n=this.columns.map(function(t){return t.editable?Object(c.a)({},t,{onCell:function(n){return{record:n,inputType:"age"===t.dataIndex?"number":"text",dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(n)}}}):t});return a.a.createElement(O.a,{title:"Packages"},a.a.createElement("div",{className:"components-table-demo-control-bar"},a.a.createElement(b.a,{layout:"inline"},a.a.createElement(w.a,{to:"/components/packages/create-package"},a.a.createElement(E.a,{type:"primary"},"Create Package")))),a.a.createElement(j.a,{className:"gx-table-responsive",components:t,bordered:!0,dataSource:this.state.data,columns:n,rowClassName:"editable-row",pagination:{onChange:this.cancel}}))}}]),t}(r.Component);t.default=function(){return a.a.createElement(o.a,null,a.a.createElement(i.a,{span:24},a.a.createElement(S,null)))}}}]);
//# sourceMappingURL=27.f8e41cea.chunk.js.map