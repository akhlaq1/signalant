(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1620:function(e,t,n){"use strict";var o=n(0),a=n(682),r=n(1),l=n(3),c=n.n(l),i=n(75),s=n(229),u=n(44),m=n(106),f=n(226),p=n(21);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var k,O,C=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&(n[o[a]]=e[o[a]])}return n},E=[],w=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,v(t).apply(this,arguments))).handleCancel=function(t){var n=e.props.onCancel;n&&n(t)},e.handleOk=function(t){var n=e.props.onOk;n&&n(t)},e.renderFooter=function(t){var n=e.props,a=n.okText,r=n.okType,l=n.cancelText,c=n.confirmLoading;return o.createElement("div",null,o.createElement(m.a,b({onClick:e.handleCancel},e.props.cancelButtonProps),l||t.cancelText),o.createElement(m.a,b({type:r,loading:c,onClick:e.handleOk},e.props.okButtonProps),a||t.okText))},e.renderModal=function(t){var n,r,l,i=t.getPrefixCls,m=e.props,p=m.prefixCls,d=m.footer,y=m.visible,h=m.wrapClassName,v=m.centered,g=C(m,["prefixCls","footer","visible","wrapClassName","centered"]),O=i("modal",p),E=o.createElement(f.a,{componentName:"Modal",defaultLocale:Object(s.b)()},e.renderFooter),w=o.createElement("span",{className:"".concat(O,"-close-x")},o.createElement(u.a,{className:"".concat(O,"-close-icon"),type:"close"}));return o.createElement(a.default,b({},g,{prefixCls:O,wrapClassName:c()((n={},r="".concat(O,"-centered"),l=!!v,r in n?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,n),h),footer:void 0===d?E:d,visible:y,mousePosition:k,onClose:e.handleCancel,closeIcon:w}))},e}var n,r,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o["Component"]),n=t,(r=[{key:"componentDidMount",value:function(){O||(Object(i.a)(document.documentElement,"click",function(e){k={x:e.pageX,y:e.pageY},setTimeout(function(){return k=null},100)}),O=!0)}},{key:"render",value:function(){return o.createElement(p.a,null,this.renderModal)}}])&&y(n.prototype,r),l&&y(n,l),t}();w.defaultProps={width:520,transitionName:"zoom",maskTransitionName:"fade",confirmLoading:!1,visible:!1,okType:"primary",okButtonDisabled:!1,cancelButtonDisabled:!1},w.propTypes={prefixCls:r.string,onOk:r.func,onCancel:r.func,okText:r.node,cancelText:r.node,centered:r.bool,width:r.oneOfType([r.number,r.string]),confirmLoading:r.bool,visible:r.bool,align:r.object,footer:r.node,title:r.node,closable:r.bool};var j=n(11);function T(e){return(T="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function x(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t){return!t||"object"!==T(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=N(this,P(t).call(this,e))).onClick=function(){var e,t=n.props,o=t.actionFn,a=t.closeModal;o?(o.length?e=o(a):(e=o())||a(),e&&e.then&&(n.setState({loading:!0}),e.then(function(){a.apply(void 0,arguments)},function(){n.setState({loading:!1})}))):a()},n.state={loading:!1},n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,o["Component"]),n=t,(a=[{key:"componentDidMount",value:function(){if(this.props.autoFocus){var e=j.findDOMNode(this);this.timeoutId=setTimeout(function(){return e.focus()})}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.type,n=e.children,a=e.buttonProps,r=this.state.loading;return o.createElement(m.a,S({type:t,onClick:this.onClick,loading:r},a),n)}}])&&x(n.prototype,a),r&&x(n,r),t}(),_=n(53);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var A=!!j.createPortal,B=function(e){var t=e.onCancel,n=e.onOk,a=e.close,r=e.zIndex,l=e.afterClose,i=e.visible,m=e.keyboard,f=e.centered,p=e.getContainer,d=e.maskStyle,b=e.okButtonProps,y=e.cancelButtonProps,h=e.iconType,v=void 0===h?"question-circle":h;Object(_.a)(!("iconType"in e),"The property 'iconType' is deprecated. Use the property 'icon' instead.");var g,k,O,C=e.icon?e.icon:v,E=e.okType||"primary",j=e.prefixCls||"ant-modal",T="".concat(j,"-confirm"),S=!("okCancel"in e)||e.okCancel,x=e.width||416,N=e.style||{},P=void 0===e.mask||e.mask,M=void 0!==e.maskClosable&&e.maskClosable,F=Object(s.b)(),A=e.okText||(S?F.okText:F.justOkText),B=e.cancelText||F.cancelText,L=null!==e.autoFocusButton&&(e.autoFocusButton||"ok"),D=e.transitionName||"zoom",I=e.maskTransitionName||"fade",z=c()(T,"".concat(T,"-").concat(e.type),e.className),R=S&&o.createElement(V,{actionFn:t,closeModal:a,autoFocus:"cancel"===L,buttonProps:y},B),W="string"===typeof C?o.createElement(u.a,{type:C}):C;return o.createElement(w,{prefixCls:j,className:z,wrapClassName:c()((g={},k="".concat(T,"-centered"),O=!!e.centered,k in g?Object.defineProperty(g,k,{value:O,enumerable:!0,configurable:!0,writable:!0}):g[k]=O,g)),onCancel:a.bind(void 0,{triggerCancel:!0}),visible:i,title:"",transitionName:D,footer:"",maskTransitionName:I,mask:P,maskClosable:M,maskStyle:d,style:N,width:x,zIndex:r,afterClose:l,keyboard:m,centered:f,getContainer:p},o.createElement("div",{className:"".concat(T,"-body-wrapper")},o.createElement("div",{className:"".concat(T,"-body")},W,o.createElement("span",{className:"".concat(T,"-title")},e.title),o.createElement("div",{className:"".concat(T,"-content")},e.content)),o.createElement("div",{className:"".concat(T,"-btns")},R,o.createElement(V,{type:E,actionFn:n,closeModal:a,autoFocus:"ok"===L,buttonProps:b},A))))};function L(e){var t=document.createElement("div");document.body.appendChild(t);var n=F({},e,{close:a,visible:!0});function a(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];n=F({},n,{visible:!1,afterClose:r.bind.apply(r,[this].concat(t))}),A?l(n):r.apply(void 0,t)}function r(){j.unmountComponentAtNode(t)&&t.parentNode&&t.parentNode.removeChild(t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];var l=o.some(function(e){return e&&e.triggerCancel});e.onCancel&&l&&e.onCancel.apply(e,o);for(var c=0;c<E.length;c++){if(E[c]===a){E.splice(c,1);break}}}function l(e){j.render(o.createElement(B,e),t)}return l(n),E.push(a),{destroy:a,update:function(e){l(n=F({},n,e))}}}function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}w.info=function(e){return L(D({type:"info",icon:o.createElement(u.a,{type:"info-circle"}),okCancel:!1},e))},w.success=function(e){return L(D({type:"success",icon:o.createElement(u.a,{type:"check-circle"}),okCancel:!1},e))},w.error=function(e){return L(D({type:"error",icon:o.createElement(u.a,{type:"close-circle"}),okCancel:!1},e))},w.warning=w.warn=function(e){return L(D({type:"warning",icon:o.createElement(u.a,{type:"exclamation-circle"}),okCancel:!1},e))},w.confirm=function(e){return L(D({type:"confirm",okCancel:!0},e))},w.destroyAll=function(){for(;E.length;){var e=E.pop();e&&e()}};t.a=w},1929:function(e,t,n){"use strict";n.r(t);var o=n(31),a=n(32),r=n(35),l=n(33),c=n(34),i=n(0),s=n.n(i),u=n(199),m=n(105),f=n(1420),p=n(106),d=n(1620),b=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){console.log(e),n.setState({visible:!1})},n.handleCancel=function(e){console.log(e),n.setState({visible:!1})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(f.a,{title:"Basic",className:"gx-card"},s.a.createElement(p.a,{type:"primary",onClick:this.showModal},"Open"),s.a.createElement(d.a,{title:"Basic Modal",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents...")))}}]),t}(s.a.Component),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={ModalText:"Content of the modal",visible:!1,confirmLoading:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(){n.setState({ModalText:"The modal will be closed after two seconds",confirmLoading:!0}),setTimeout(function(){n.setState({visible:!1,confirmLoading:!1})},2e3)},n.handleCancel=function(){console.log("Clicked cancel button"),n.setState({visible:!1})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,n=e.confirmLoading,o=e.ModalText;return s.a.createElement(f.a,{title:"Asynchronously",className:"gx-card"},s.a.createElement(p.a,{type:"primary",onClick:this.showModal},"Open"),s.a.createElement(d.a,{title:"Title",visible:t,onOk:this.handleOk,confirmLoading:n,onCancel:this.handleCancel},s.a.createElement("p",null,o)))}}]),t}(s.a.Component),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!1,visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(){n.setState({loading:!0}),setTimeout(function(){n.setState({loading:!1,visible:!1})},3e3)},n.handleCancel=function(){n.setState({visible:!1})},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,n=e.loading;return s.a.createElement(f.a,{title:"CutomizeFooter",className:"gx-card"},s.a.createElement(p.a,{type:"primary",onClick:this.showModal},"Open"),s.a.createElement(d.a,{visible:t,title:"Title",onOk:this.handleOk,onCancel:this.handleCancel,footer:[s.a.createElement(p.a,{key:"back",onClick:this.handleCancel},"Return"),s.a.createElement(p.a,{key:"submit",type:"primary",loading:n,onClick:this.handleOk},"Submit")]},s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents..."),s.a.createElement("p",null,"Some contents...")))}}]),t}(s.a.Component),v=d.a.confirm,g=function(){return s.a.createElement(f.a,{title:"Confirmation Modal",className:"gx-card"},s.a.createElement(p.a,{onClick:function(){v({title:"Do you Want to delete these items?",content:"Some descriptions",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})}},"Confirm"),s.a.createElement(p.a,{onClick:function(){v({title:"Are you sure delete this task?",content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk:function(){console.log("OK")},onCancel:function(){console.log("Cancel")}})},type:"dashed"},"Delete"))},k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={modal1Visible:!1,modal2Visible:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"setModal1Visible",value:function(e){this.setState({modal1Visible:e})}},{key:"setModal2Visible",value:function(e){this.setState({modal2Visible:e})}},{key:"render",value:function(){var e=this;return s.a.createElement(f.a,{title:"Position",className:"gx-card"},s.a.createElement(p.a,{type:"primary",onClick:function(){return e.setModal1Visible(!0)}},"Display a modal dialog at 20px to Top"),s.a.createElement(d.a,{title:"20px to Top",style:{top:20},visible:this.state.modal1Visible,onOk:function(){return e.setModal1Visible(!1)},onCancel:function(){return e.setModal1Visible(!1)}},s.a.createElement("p",null,"some contents..."),s.a.createElement("p",null,"some contents..."),s.a.createElement("p",null,"some contents...")),s.a.createElement(p.a,{type:"primary",onClick:function(){return e.setModal2Visible(!0)}},"Vertically centered modal dialog"),s.a.createElement(d.a,{title:"Vertically centered modal dialog",wrapClassName:"vertical-center-modal",visible:this.state.modal2Visible,onOk:function(){return e.setModal2Visible(!1)},onCancel:function(){return e.setModal2Visible(!1)}},s.a.createElement("p",null,"some contents..."),s.a.createElement("p",null,"some contents..."),s.a.createElement("p",null,"some contents...")))}}]),t}(s.a.Component),O=function(){return s.a.createElement(f.a,{title:"Information",className:"gx-card"},s.a.createElement(p.a,{onClick:function(){d.a.info({title:"This is a Notification message",content:s.a.createElement("div",null,s.a.createElement("p",null,"some messages...some messages..."),s.a.createElement("p",null,"some messages...some messages...")),onOk:function(){}})}},"Info"),s.a.createElement(p.a,{onClick:function(){d.a.success({title:"This is a success message",content:"some messages...some messages..."})}},"Success"),s.a.createElement(p.a,{onClick:function(){d.a.error({title:"This is an error message",content:"some messages...some messages..."})}},"Error"),s.a.createElement(p.a,{onClick:function(){d.a.warning({title:"This is a warning message",content:"some messages...some messages..."})}},"Warning"))},C=function(){return s.a.createElement(f.a,{title:"Manual",className:"gx-card"},s.a.createElement(p.a,{onClick:function(){var e=d.a.success({title:"This is a Notification message",content:"This modal will be destroyed after 1 second"});setTimeout(function(){return e.destroy()},1e3)}},"Success"))},E=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(b,null),s.a.createElement(y,null),s.a.createElement(h,null),s.a.createElement(g,null)),s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(O,null),s.a.createElement(C,null),s.a.createElement(k,null)))}}]),t}(i.Component);t.default=E}}]);
//# sourceMappingURL=100.e49c3eb1.chunk.js.map