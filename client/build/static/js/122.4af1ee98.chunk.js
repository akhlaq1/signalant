(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{2033:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(199),l=t(105),c=t(31),i=t(32),u=t(35),s=t(33),d=t(34),f=t(1420),k=t(1912),m=[{key:"1",tname:"John Brown",package:"PREMIUM",invoice:1001},{key:"2",tname:"Jim Green",package:"PREMIUM",invoice:1002},{key:"3",tname:"Joe Black",package:"FREE",invoice:1003}],g=function(e){function n(){var e,t;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={filteredInfo:null,sortedInfo:null},t.handleChange=function(e,n,a){console.log("Various parameters",e,n,a),t.setState({filteredInfo:n,sortedInfo:a})},t.clearFilters=function(){t.setState({filteredInfo:null})},t.clearAll=function(){t.setState({filteredInfo:null,sortedInfo:null})},t.setAgeSort=function(){t.setState({sortedInfo:{order:"descend",columnKey:"tname"}})},t}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state,n=e.sortedInfo,t=e.filteredInfo;n=n||{};var a=[{title:"Key ID",dataIndex:"key",key:"key",filteredValue:(t=t||{}).key||null,onFilter:function(e,n){return n.key.includes(e)},sorter:function(e,n){return e.key.length-n.key.length},sortOrder:"key"===n.columnKey&&n.order},{title:"Trader Name",dataIndex:"tname",key:"tname",sorter:function(e,n){return e.tname-n.tname},sortOrder:"tname"===n.columnKey&&n.order},{title:"Package Name",dataIndex:"package",key:"package",filteredValue:t.package||null,onFilter:function(e,n){return n.package.includes(e)},sorter:function(e,n){return e.package.length-n.package.length},sortOrder:"package"===n.columnKey&&n.order},{title:"Invoice No",dataIndex:"invoice",key:"invoice",sorter:function(e,n){return e.invoice-n.invoice},sortOrder:"invoice"===n.columnKey&&n.order}];return r.a.createElement(f.a,{title:"Billing"},r.a.createElement(k.a,{className:"gx-table-responsive",columns:a,dataSource:m,onChange:this.handleChange}))}}]),n}(r.a.Component);n.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{span:24},r.a.createElement(g,null)))}}}]);
//# sourceMappingURL=122.4af1ee98.chunk.js.map