(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1443:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",function(){return a})},1478:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var a=n(0),r=n(3),i=n.n(r),o=n(678),c=n(44),l=n(21);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=d(this,m(t).apply(this,arguments))).saveInputNumber=function(t){e.inputNumberRef=t},e.renderInputNumber=function(t){var n,r=t.getPrefixCls,l=e.props,u=l.className,p=l.size,d=l.prefixCls,m=b(l,["className","size","prefixCls"]),y=r("input-number",d),v=i()((f(n={},"".concat(y,"-lg"),"large"===p),f(n,"".concat(y,"-sm"),"small"===p),n),u),h=a.createElement(c.a,{type:"up",className:"".concat(y,"-handler-up-inner")}),g=a.createElement(c.a,{type:"down",className:"".concat(y,"-handler-down-inner")});return a.createElement(o.default,s({ref:e.saveInputNumber,className:v,upHandler:h,downHandler:g,prefixCls:y},m))},e}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a["Component"]),n=t,(r=[{key:"focus",value:function(){this.inputNumberRef.focus()}},{key:"blur",value:function(){this.inputNumberRef.blur()}},{key:"render",value:function(){return a.createElement(l.a,null,this.renderInputNumber)}}])&&p(n.prototype,r),u&&p(n,u),t}();v.defaultProps={step:1}},1479:function(e,t,n){"use strict";var a=n(0),r=n(3),i=n.n(r),o=n(21);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){return a.createElement(o.a,null,function(t){var n,r=t.getPrefixCls,o=e.prefixCls,s=e.type,f=void 0===s?"horizontal":s,p=e.orientation,d=void 0===p?"":p,m=e.className,y=e.children,b=e.dashed,v=u(e,["prefixCls","type","orientation","className","children","dashed"]),h=r("divider",o),g=d.length>0?"-"+d:d,O=i()(m,h,"".concat(h,"-").concat(f),(l(n={},"".concat(h,"-with-text").concat(g),y),l(n,"".concat(h,"-dashed"),!!b),n));return a.createElement("div",c({className:O},v),y&&a.createElement("span",{className:"".concat(h,"-inner-text")},y))})}},1512:function(e,t,n){"use strict";var a=n(0),r=n(14),i=n(228),o=n(44),c=n(106),l=n(226),u=n(165),s=n(21);function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n},h=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),(n=!o||"object"!==f(o)&&"function"!==typeof o?y(r):o).onConfirm=function(e){n.setVisible(!1,e);var t=n.props.onConfirm;t&&t.call(y(n),e)},n.onCancel=function(e){n.setVisible(!1,e);var t=n.props.onCancel;t&&t.call(y(n),e)},n.onVisibleChange=function(e){n.setVisible(e)},n.saveTooltip=function(e){n.tooltip=e},n.renderOverlay=function(e,t){var r=n.props,i=r.okButtonProps,o=r.cancelButtonProps,l=r.title,u=r.cancelText,s=r.okText,f=r.okType,d=r.icon;return a.createElement("div",null,a.createElement("div",{className:"".concat(e,"-inner-content")},a.createElement("div",{className:"".concat(e,"-message")},d,a.createElement("div",{className:"".concat(e,"-message-title")},l)),a.createElement("div",{className:"".concat(e,"-buttons")},a.createElement(c.a,p({onClick:n.onCancel,size:"small"},o),u||t.cancelText),a.createElement(c.a,p({onClick:n.onConfirm,type:f,size:"small"},i),s||t.okText))))},n.renderConfirm=function(e){var t=e.getPrefixCls,r=n.props,o=r.prefixCls,c=r.placement,s=v(r,["prefixCls","placement"]),f=t("popover",o),d=a.createElement(l.a,{componentName:"Popconfirm",defaultLocale:u.a.Popconfirm},function(e){return n.renderOverlay(f,e)});return a.createElement(i.a,p({},s,{prefixCls:f,placement:c,onVisibleChange:n.onVisibleChange,visible:n.state.visible,overlay:d,ref:n.saveTooltip}))},n.state={visible:e.visible},n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a["Component"]),n=t,o=[{key:"getDerivedStateFromProps",value:function(e){return"visible"in e?{visible:e.visible}:"defaultVisible"in e?{visible:e.defaultVisible}:null}}],(r=[{key:"getPopupDomNode",value:function(){return this.tooltip.getPopupDomNode()}},{key:"setVisible",value:function(e,t){var n=this.props;"visible"in n||this.setState({visible:e});var a=n.onVisibleChange;a&&a(e,t)}},{key:"render",value:function(){return a.createElement(s.a,null,this.renderConfirm)}}])&&d(n.prototype,r),o&&d(n,o),t}();h.defaultProps={transitionName:"zoom-big",placement:"top",trigger:"click",okType:"primary",icon:a.createElement(o.a,{type:"exclamation-circle",theme:"filled"})},Object(r.polyfill)(h),t.a=h},1991:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(199),o=n(105),c=n(46),l=n(1443),u=n(31),s=n(32),f=n(35),p=n(33),d=n(34),m=n(422),y=n(70),b=n(1433),v=n(1478),h=n(1422),g=n(1512),O=n(1479),E=n(1420),j=n(1912),C=b.a.Item,w=r.a.createContext(),x=b.a.create()(function(e){var t=e.form,n=(e.index,Object(m.a)(e,["form","index"]));return r.a.createElement(w.Provider,{value:t},r.a.createElement("tr",n))}),k=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).getInput=function(){return"number"===n.props.inputType?r.a.createElement(v.a,null):r.a.createElement(h.a,null)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.editing,a=t.dataIndex,i=t.title,o=(t.inputType,t.record),c=(t.index,Object(m.a)(t,["editing","dataIndex","title","inputType","record","index"]));return r.a.createElement(w.Consumer,null,function(t){var l=t.getFieldDecorator;return r.a.createElement("td",c,n?r.a.createElement(C,{style:{margin:0}},l(a,{rules:[{required:!0,message:"Please Input ".concat(i,"!")}],initialValue:o[a]})(e.getInput())):c.children)})}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).isEditing=function(e){return e.key===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.state={data:[],editingKey:""},n.columns=[{title:"Name",dataIndex:"Name",width:"25%",editable:!0},{title:"Email",dataIndex:"Email",width:"25%",editable:!0},{title:"Country",dataIndex:"Country",width:"25%",editable:!0},{title:"Action",dataIndex:"operation",width:"25%",render:function(e,t){var a=n.isEditing(t);return r.a.createElement("div",null,a?r.a.createElement("span",null,r.a.createElement(w.Consumer,null,function(e){return r.a.createElement("a",{href:"javascript:;",onClick:function(){return n.save(e,t.key)},style:{marginRight:8}},"Save")}),r.a.createElement(g.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.key)}},r.a.createElement("a",null,"Cancel"))):r.a.createElement("a",{onClick:function(){return n.edit(t.key)}},"Edit"),r.a.createElement(O.a,{type:"vertical"}),r.a.createElement("a",{onClick:function(){return n.delete(t.key)}},"Delete"))}}],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.database().ref("users").orderByChild("role").equalTo("user").on("value",function(t){var n=[];t.forEach(function(e){var t={key:e.key.toString(),Name:e.val().Name,Email:e.val().Email,Country:e.val().Country};n.push(t)}),e.setState(function(e){return{data:[].concat(Object(l.a)(e.data),n)}})})}},{key:"save",value:function(e,t){var n=this;console.log(t),e.validateFields(function(e,a){if(console.log(a.Name),!e){y.database().ref("users").child(t).update({Name:a.Name,Email:a.Email,Country:a.Country});var r=Object(l.a)(n.state.data),i=r.findIndex(function(e){return t===e.key});if(i>-1){var o=r[i];r.splice(i,1,Object(c.a)({},o,a)),console.log(r),n.setState({data:r,editingKey:""})}else r.push(a),n.setState({data:r,editingKey:""})}})}},{key:"edit",value:function(e){this.setState({editingKey:e})}},{key:"delete",value:function(e){console.log(e),y.database().ref("users/"+e).remove()}},{key:"render",value:function(){var e=this,t={body:{row:x,cell:k}},n=this.columns.map(function(t){return t.editable?Object(c.a)({},t,{onCell:function(n){return{record:n,inputType:"age"===t.dataIndex?"number":"text",dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(n)}}}):t});return r.a.createElement(E.a,{title:"Customers CRM"},r.a.createElement("div",{className:"components-table-demo-control-bar"},r.a.createElement(b.a,{layout:"inline"})),r.a.createElement(j.a,{className:"gx-table-responsive",components:t,bordered:!0,dataSource:this.state.data,columns:n,rowClassName:"editable-row",pagination:{onChange:this.cancel}}))}}]),t}(a.Component),N=n(106),S=n(1427),I=b.a.Item,T=r.a.createContext(),D=b.a.create()(function(e){var t=e.form,n=(e.index,Object(m.a)(e,["form","index"]));return r.a.createElement(T.Provider,{value:t},r.a.createElement("tr",n))}),_=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).getInput=function(){return"number"===n.props.inputType?r.a.createElement(v.a,null):r.a.createElement(h.a,null)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.editing,a=t.dataIndex,i=t.title,o=(t.inputType,t.record),c=(t.index,Object(m.a)(t,["editing","dataIndex","title","inputType","record","index"]));return r.a.createElement(T.Consumer,null,function(t){var l=t.getFieldDecorator;return r.a.createElement("td",c,n?r.a.createElement(I,{style:{margin:0}},l(a,{rules:[{required:!0,message:"Please Input ".concat(i,"!")}],initialValue:o[a]})(e.getInput())):c.children)})}}]),t}(r.a.Component),V=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(f.a)(this,Object(p.a)(t).call(this,e))).isEditing=function(e){return e.key===n.state.editingKey},n.cancel=function(){n.setState({editingKey:""})},n.state={data:[],editingKey:""},n.columns=[{title:"Name",dataIndex:"Name",width:"20%",editable:!0},{title:"Description",dataIndex:"Description",width:"20%",editable:!0},{title:"Price",dataIndex:"Price",width:"20%",editable:!0},{title:"Duration",dataIndex:"Duration",width:"20%",editable:!0},{title:"Action",dataIndex:"operation",width:"20%",render:function(e,t){var a=n.isEditing(t);return r.a.createElement("div",null,a?r.a.createElement("span",null,r.a.createElement(T.Consumer,null,function(e){return r.a.createElement("a",{href:"javascript:;",onClick:function(){return n.save(e,t.key)},style:{marginRight:8}},"Save")}),r.a.createElement(g.a,{title:"Sure to cancel?",onConfirm:function(){return n.cancel(t.key)}},r.a.createElement("a",null,"Cancel"))):r.a.createElement("a",{onClick:function(){return n.edit(t.key)}},"Edit"),r.a.createElement(O.a,{type:"vertical"}),r.a.createElement("a",{onClick:function(){return n.delete(t.key)}},"Delete"))}}],n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.database().ref("packages").on("value",function(t){var n=[];t.forEach(function(e){var t={key:e.key.toString(),Name:e.val().Name,Description:e.val().Description,Price:e.val().Price,Duration:e.val().Duration};n.push(t)}),e.setState(function(e){return{data:[].concat(Object(l.a)(e.data),n)}})})}},{key:"save",value:function(e,t){var n=this;e.validateFields(function(e,a){if(!e){y.database().ref("packages").child(t).update({Name:a.Name,Description:a.Description,Price:a.Price,Duration:a.Duration});var r=Object(l.a)(n.state.data),i=r.findIndex(function(e){return t===e.key});if(i>-1){var o=r[i];r.splice(i,1,Object(c.a)({},o,a)),console.log(r),n.setState({data:r,editingKey:""})}else r.push(a),n.setState({data:r,editingKey:""})}})}},{key:"edit",value:function(e){this.setState({editingKey:e})}},{key:"delete",value:function(e){console.log(e),y.database().ref("packages/"+e).remove()}},{key:"render",value:function(){var e=this,t={body:{row:D,cell:_}},n=this.columns.map(function(t){return t.editable?Object(c.a)({},t,{onCell:function(n){return{record:n,inputType:"age"===t.dataIndex?"number":"text",dataIndex:t.dataIndex,title:t.title,editing:e.isEditing(n)}}}):t});return r.a.createElement(E.a,{title:"Packages"},r.a.createElement("div",{className:"components-table-demo-control-bar"},r.a.createElement(b.a,{layout:"inline"},r.a.createElement(S.a,{to:"/components/table/create-package"},r.a.createElement(N.a,{type:"primary"},"Create Package")),"\xa0\xa0\xa0\xa0",r.a.createElement(S.a,{to:"/custom-views/extras/pricing-table"},r.a.createElement(N.a,{type:"primary"},"View Packages")))),r.a.createElement(j.a,{className:"gx-table-responsive",components:t,bordered:!0,dataSource:this.state.data,columns:n,rowClassName:"editable-row",pagination:{onChange:this.cancel}}))}}]),t}(a.Component);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{span:24},r.a.createElement(P,null)),r.a.createElement(o.a,{span:24},r.a.createElement(V,null)))}}}]);
//# sourceMappingURL=28.398519cc.chunk.js.map