(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1845:function(e,t,n){"use strict";n.r(t);var a=n(30),o=n(31),r=n(33),i=n(32),c=n(34),s=n(0),l=n.n(s),u=n(194),g=n(101),f=n(693),p=n(13),h=n(3),m=n.n(h),y=n(43),d=n(20);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=j(this,E(t).call(this,e))).onSearchChange=function(e,t){return n.props.onSearchChange?n.props.onSearchChange(e,t):n.defaultSearchChange(e)},n.onChange=function(e){n.props.onChange&&n.props.onChange(e)},n.onFocus=function(e){n.setState({focus:!0}),n.props.onFocus&&n.props.onFocus(e)},n.onBlur=function(e){n.setState({focus:!1}),n.props.onBlur&&n.props.onBlur(e)},n.focus=function(){n.mentionEle._editor.focusEditor()},n.mentionRef=function(e){n.mentionEle=e},n.renderMention=function(e){var t,a=e.getPrefixCls,o=n.props,r=o.prefixCls,i=o.className,c=void 0===i?"":i,l=o.loading,u=o.placement,g=o.suggestions,p=n.state,h=p.filteredSuggestions,d=p.focus,b=a("mention",r),C=m()(c,(S(t={},"".concat(b,"-active"),d),S(t,"".concat(b,"-placement-top"),"top"===u),t)),j=l?s.createElement(y.a,{type:"loading"}):n.props.notFoundContent;return s.createElement(f.default,v({},n.props,{prefixCls:b,className:C,ref:n.mentionRef,onSearchChange:n.onSearchChange,onChange:n.onChange,onFocus:n.onFocus,onBlur:n.onBlur,suggestions:g||h,notFoundContent:j}))},n.state={filteredSuggestions:e.defaultSuggestions,focus:!1},n}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,s["Component"]),n=t,(a=[{key:"defaultSearchChange",value:function(e){var t=e.toLowerCase(),n=(this.props.defaultSuggestions||[]).filter(function(e){return e.type&&e.type===f.Nav?!e.props.value||-1!==e.props.value.toLowerCase().indexOf(t):-1!==e.toLowerCase().indexOf(t)});this.setState({filteredSuggestions:n})}},{key:"render",value:function(){return s.createElement(d.a,null,this.renderMention)}}])&&C(n.prototype,a),o&&C(n,o),t}();w.getMentions=f.getMentions,w.defaultProps={notFoundContent:"\u65e0\u5339\u914d\u7ed3\u679c\uff0c\u8f7b\u6572\u7a7a\u683c\u5b8c\u6210\u8f93\u5165",loading:!1,multiLines:!1,placement:"bottom"},w.Nav=f.Nav,w.toString=f.toString,w.toContentState=f.toEditorState,Object(p.polyfill)(w);var x=w,P=n(1403),N=x.toString,k=x.toContentState,L=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Basic"},l.a.createElement(x,{style:{width:"100%"},onChange:function(e){console.log(N(e))},defaultValue:k("@afc163"),suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:function(e){console.log("onSelect",e)}}))},R=x.toString,F=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Placement"},l.a.createElement(x,{style:{width:"100%"},onChange:function(e){console.log(R(e))},suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:function(e){console.log("onSelect",e)},placement:"top"}))},M=["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"],J=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={suggestions:[],loading:!1},n.fetchSuggestions=function(e,t){setTimeout(function(){t(M.filter(function(t){return-1!==t.indexOf(e)}))},500)},n.onSearchChange=function(e){n.fetchSuggestions(e,function(e){n.setState({suggestions:e,loading:!1})}),n.setState({loading:!0})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.suggestions,n=e.loading;return l.a.createElement(P.a,{className:"gx-card",title:"Asynchronous Loading"},l.a.createElement(x,{style:{width:"100%"},loading:n,suggestions:t,onSearchChange:this.onSearchChange}))}}]),t}(l.a.Component),A=x.Nav,_=[{name:"React",type:"JavaScript"},{name:"Angular",type:"JavaScript"},{name:"Laravel",type:"PHP",disabled:!0},{name:"Flask",type:"Python"},{name:"Django",type:"Python"}];function z(e,t){console.log("onSelect",e,t)}var H=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={suggestions:[]},n.onSearchChange=function(e){var t=e.toLowerCase(),a=_.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)}).map(function(e){return l.a.createElement(A,{value:e.name,data:e},l.a.createElement("span",null,e.name," - ",e.type))});n.setState({suggestions:a})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.suggestions;return l.a.createElement(P.a,{className:"gx-card",title:"Customize Suggestions"},l.a.createElement(x,{placeholder:"@someone",style:{width:"100%"},suggestions:e,onSearchChange:this.onSearchChange,onSelect:z}))}}]),t}(l.a.Component),B=n(1412),D=x.Nav,T=[{name:"React",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg"},{name:"Angular",type:"JavaScript",icon:"https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png"},{name:"Dva",type:"Javascript",icon:"https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png"},{name:"Flask",type:"Python",icon:"https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png"}],I=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={suggestions:[]},n.onSearchChange=function(e){var t=e.toLowerCase(),a=T.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)}).map(function(e){return l.a.createElement(D,{value:e.name,data:e,disabled:e.disabled},l.a.createElement(B.a,{src:e.icon,size:"small",style:{width:14,height:14,marginRight:8,top:2,position:"relative"}}),e.name," - ",e.type)});n.setState({suggestions:a})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.suggestions;return l.a.createElement(P.a,{className:"gx-card",title:"Icon Image"},l.a.createElement(x,{style:{width:"100%"},suggestions:e,onSearchChange:this.onSearchChange}))}}]),t}(l.a.Component),V=x.toContentState,q=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={value:V("@afc163")},n.handleChange=function(e){n.setState({value:e})},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.mention.focus()}},{key:"render",value:function(){var e=this;return l.a.createElement(P.a,{className:"gx-card",title:"Controlled"},l.a.createElement(x,{ref:function(t){return e.mention=t},suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],value:this.state.value,onChange:this.handleChange}))}}]),t}(l.a.Component),U=x.toString,Y=function(){return l.a.createElement(P.a,{className:"gx-card",title:"Multiline Mode"},l.a.createElement(x,{style:{width:"100%",height:100},onChange:function(e){console.log(U(e))},suggestions:["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"],multiLines:!0}))},K=n(1411),W=n(102),X=x.toString,Z=x.toContentState;function G(e){console.log(X(e))}function Q(e){console.log("onSelect",e)}var $=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).getSuggestionContainer=function(){return n.popover.getPopupDomNode()},n.visibleChange=function(e){e&&n.mention&&n.mention.focus()},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(x,{ref:function(t){return e.mention=t},style:{width:"100%"},onChange:G,defaultValue:Z("@afc163"),suggestions:["afc163","benjycui","yiminghe","RaoHai","\u4e2d\u6587","\u306b\u307b\u3093\u3054"],onSelect:Q,getSuggestionContainer:this.getSuggestionContainer});return l.a.createElement(P.a,{className:"gx-card",title:"Suggestion Container"},l.a.createElement(K.a,{trigger:"click",content:t,title:"Title",ref:function(t){return e.popover=t},onVisibleChange:this.visibleChange},l.a.createElement(W.a,{type:"primary"},"Click Me")))}}]),t}(l.a.Component),ee=x.toString,te=["afc163","benjycui","yiminghe","jljsj33","dqaria","RaoHai"];var ne=function(){function e(e){console.log(ee(e))}return l.a.createElement(P.a,{className:"gx-card",title:"Disabled"},l.a.createElement("div",{className:"gx-mb-3"},l.a.createElement(x,{style:{width:"100%"},onChange:e,placeholder:"this is disabled Mention",suggestions:te,disabled:!0})),l.a.createElement(x,{style:{width:"100%"},onChange:e,placeholder:"this is readOnly Mention",suggestions:te,readOnly:!0}))},ae=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement(g.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(L,null),l.a.createElement(F,null),l.a.createElement(J,null),l.a.createElement(H,null),l.a.createElement(I,null)),l.a.createElement(g.a,{lg:12,md:12,sm:24,xs:24},l.a.createElement(q,null),l.a.createElement(Y,null),l.a.createElement($,null),l.a.createElement(ne,null)))}}]),t}(s.Component);t.default=ae}}]);
//# sourceMappingURL=128.f977a4f6.chunk.js.map