(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1388:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(72),s=t(1324),i=t(1473),m=t(1327),o=t(1513),d=t(1328),c=t(1322),h=t(1313),u=t(1389),g=t(1926),b=t(1458);a.a=class extends r.Component{constructor(...e){super(...e),this.state={username:"",firstName:"",email:"",date:new Date,creditCard:"",mobile:"",password:"",confirmPassword:"",gender:"",agreement:""},this.handleSubmit=(e=>{console.log("submitted"),console.log(e)}),this.handleChange=(e=>{e.persist(),this.setState({[e.target.name]:e.target.value})}),this.handleDateChange=(e=>{console.log(e),this.setState({date:e})})}componentDidMount(){l.ValidatorForm.addValidationRule("isPasswordMatch",e=>e===this.state.password)}componentWillUnmount(){l.ValidatorForm.removeValidationRule("isPasswordMatch")}render(){var e=this.state,a=e.username,t=e.firstName,r=e.creditCard,p=e.mobile,E=e.password,v=e.confirmPassword,w=e.gender,C=e.date,f=e.email;return n.a.createElement("div",null,n.a.createElement(l.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:e=>null},n.a.createElement(s.a,{container:!0,spacing:6},n.a.createElement(s.a,{item:!0,lg:6,md:6,sm:12,xs:12},n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Username (Min length 4, Max length 9)",onChange:this.handleChange,type:"text",name:"username",value:a,validators:["required","minStringLength: 4","maxStringLength: 9"],errorMessages:["this field is required"]}),n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"First Name",onChange:this.handleChange,type:"text",name:"firstName",value:t,validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Email",onChange:this.handleChange,type:"email",name:"email",value:f,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),n.a.createElement(u.a,{utils:b.a},n.a.createElement(g.a,{className:"mb-16 w-100",margin:"none",id:"mui-pickers-date",label:"Date picker",inputVariant:"standard",type:"text",autoOk:!0,value:C,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}})),n.a.createElement(l.TextValidator,{className:"mb-32 w-100",label:"Credit Card",onChange:this.handleChange,type:"number",name:"creditCard",value:r,validators:["required","minStringLength:16","maxStringLength: 16"],errorMessages:["this field is required"]})),n.a.createElement(s.a,{item:!0,lg:6,md:6,sm:12,xs:12},n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Mobile Nubmer",onChange:this.handleChange,type:"text",name:"mobile",value:p,validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Password",onChange:this.handleChange,name:"password",type:"password",value:E,validators:["required"],errorMessages:["this field is required"]}),n.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Confirm Password",onChange:this.handleChange,name:"confirmPassword",type:"password",value:v,validators:["required","isPasswordMatch"],errorMessages:["this field is required","password didn't match"]}),n.a.createElement(i.a,{className:"mb-16",value:w,name:"gender",onChange:this.handleChange,row:!0},n.a.createElement(m.a,{value:"Male",control:n.a.createElement(o.a,{color:"secondary"}),label:"Male",labelPlacement:"end"}),n.a.createElement(m.a,{value:"Female",control:n.a.createElement(o.a,{color:"secondary"}),label:"Female",labelPlacement:"end"}),n.a.createElement(m.a,{value:"Others",control:n.a.createElement(o.a,{color:"secondary"}),label:"Others",labelPlacement:"end"})),n.a.createElement(m.a,{control:n.a.createElement(d.a,null),label:"I have read and agree to the terms of service."}))),n.a.createElement(c.a,{color:"primary",variant:"contained",type:"submit"},n.a.createElement(h.a,null,"send"),n.a.createElement("span",{className:"pl-8 capitalize"},"Send"))))}}},1922:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(21),s=t(1388);a.default=class extends r.Component{render(){return n.a.createElement("div",{className:"m-sm-30"},n.a.createElement("div",{className:"mb-sm-30"},n.a.createElement(l.a,{routeSegments:[{name:"Forms",path:"/forms"},{name:"Basic"}]})),n.a.createElement(s.a,null))}}}}]);
//# sourceMappingURL=22.a0af5b01.chunk.js.map