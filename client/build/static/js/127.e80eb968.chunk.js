(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{1956:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(194),o=t(101),s=t(30),i=t(31),c=t(33),u=t(32),m=t(34),p=t(1416),f=t(1404),d=t(1403),h=t(1405),b=t(102),E=t(75),v=t(38),g=p.a.Item,w=f.a.Option,y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[]},t.handleSubmit=function(e){e.preventDefault(),t.props.form.validateFieldsAndScroll(function(e,a){e||(console.log("Received values of form: ",a),E.auth().onAuthStateChanged(function(e){e&&(console.log(e.uid),E.database().ref("users").child(e.uid).update({Name:a.Firstname,Email:a.email,Phone:a.phone}),console.log(a))}))})},t.handleConfirmBlur=function(e){var a=e.target.value;t.setState({confirmDirty:t.state.confirmDirty||!!a})},t.compareToFirstPassword=function(e,a,n){var r=t.props.form;a&&a!==r.getFieldValue("password")?n("Two passwords that you enter is inconsistent!"):n()},t.validateToNextPassword=function(e,a,n){var r=t.props.form;a&&t.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},t.handleWebsiteChange=function(e){var a;a=e?[".com",".org",".net"].map(function(a){return"".concat(e).concat(a)}):[],t.setState({autoCompleteResult:a})},t}return Object(m.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,a={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},t=e("prefix",{initialValue:"91"})(r.a.createElement(f.a,{style:{width:70}},r.a.createElement(w,{value:"91"},"+91"),r.a.createElement(w,{value:"00"},"+00")));return r.a.createElement(d.a,{className:"gx-card",title:"Profile Form"},r.a.createElement(p.a,{onSubmit:this.handleSubmit},r.a.createElement(g,Object.assign({},a,{label:r.a.createElement("span",null,"Name")}),e("Firstname",{rules:[{required:!0,message:"Please input your Firstname!",whitespace:!0}]})(r.a.createElement(h.a,null))),r.a.createElement(g,Object.assign({},a,{label:r.a.createElement("span",null,"Email")}),e("email",{rules:[{required:!0,type:"email",message:"The input is not valid E-mail!",whitespace:!0}]})(r.a.createElement(h.a,null))),r.a.createElement(g,Object.assign({},a,{label:"Phone Number"}),e("phone",{rules:[{required:!0,message:"Please input your phone number!"}]})(r.a.createElement(h.a,{addonBefore:t,style:{width:"100%"}}))),r.a.createElement(g,{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},r.a.createElement(b.a,{type:"primary",htmlType:"submit"},"update Profile"))))}}]),a}(n.Component),O=p.a.create()(y),j=Object(v.b)(function(e){console.log(e.auth.authUser)})(O);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{span:24},r.a.createElement(j,null)))}}}]);
//# sourceMappingURL=127.e80eb968.chunk.js.map