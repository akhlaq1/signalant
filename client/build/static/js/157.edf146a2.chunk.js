(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{1888:function(e,a,t){"use strict";t.r(a);var r=t(31),l=t(32),n=t(34),o=t(33),s=t(35),c=t(0),i=t.n(c),m=t(1447),u=t(1436),p=t(44),g=t(1437),d=t(108),E=t(1441),h=m.a.Item,f=function(e){function a(){var e,t;Object(r.a)(this,a);for(var l=arguments.length,s=new Array(l),c=0;c<l;c++)s[c]=arguments[c];return(t=Object(n.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(s)))).handleSubmit=function(e){e.preventDefault(),t.props.form.validateFields(function(e,a){console.log("values",a)})},t}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this,a=this.props.form.getFieldDecorator;return i.a.createElement("div",{className:"gx-login-container"},i.a.createElement("div",{className:"gx-login-content"},i.a.createElement("div",{className:"gx-login-header gx-text-center"},i.a.createElement("h1",{className:"gx-login-title"},"Sign Up")),i.a.createElement(m.a,{onSubmit:this.handleSubmit,className:"gx-login-form gx-form-row0"},i.a.createElement(h,null,a("uaername",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Username"}))),i.a.createElement(h,null,a("email",{rules:[{required:!0,message:"Please input your username!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email address"}))),i.a.createElement(h,null,a("password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"}))),i.a.createElement(h,null,a("confirm-password",{rules:[{required:!0,message:"Please input your Password!"}]})(i.a.createElement(u.a,{prefix:i.a.createElement(p.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Confirm Password"}))),i.a.createElement(h,null,a("remember",{valuePropName:"checked",initialValue:!0})(i.a.createElement(g.a,null,"Remember me")),i.a.createElement(E.a,{className:"gx-login-form-forgot",to:"/custom-views/user-auth/forgot-password"},"Forgot password")),i.a.createElement(h,{className:"gx-text-center"},i.a.createElement(d.a,{type:"primary",htmlType:"submit"},"Sign Up"))),i.a.createElement("div",{className:"gx-flex-row"},i.a.createElement("span",{className:"gx-mb-2 gx-mr-3"},"or Sign up using: "),i.a.createElement("ul",{className:"gx-social-link"},i.a.createElement("li",null,i.a.createElement(p.a,{type:"google",onClick:function(){e.props.showAuthLoader(),e.props.userGoogleSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"facebook",onClick:function(){e.props.showAuthLoader(),e.props.userFacebookSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"github",onClick:function(){e.props.showAuthLoader(),e.props.userGithubSignIn()}})),i.a.createElement("li",null,i.a.createElement(p.a,{type:"twitter",onClick:function(){e.props.showAuthLoader(),e.props.userTwitterSignIn()}}))))))}}]),a}(c.Component),w=m.a.create()(f);a.default=w}}]);
//# sourceMappingURL=157.edf146a2.chunk.js.map