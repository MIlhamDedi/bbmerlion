(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1927:function(e,t,a){"use strict";a.r(t);var n=a(5),i=a(0),s=a.n(i),l=a(49),o=a(4),r=a.n(o),c=a(115),m=a(10),d=a(1511),u=a.n(d),p=a(97),h=a(541),f=a(31),y=a(1295),g=a(1264),b=a(1313),E=a(1406),x=a(100),N=a(21),v=a(147),M=a(1924),S=a(1925),B=a(1325),T=a(1322),P=a(55),O=a(1262),j=a(193);var _=Object(O.a)({},{withTheme:!0})(Object(l.b)(e=>({getNotification:o.PropTypes.func.isRequired,deleteNotification:o.PropTypes.func.isRequired,deleteAllNotification:o.PropTypes.func.isRequired,notification:e.notification,settings:e.layout.settings}),{getNotification:j.g,deleteNotification:j.f,deleteAllNotification:j.e})(function(e){var t=e.container,a=e.theme,n=e.settings,i=e.notification,l=void 0===i?[]:i,o=e.getNotification,r=e.deleteAllNotification,c=e.deleteNotification,m=s.a.useState(!1),d=Object(v.a)(m,2),u=d[0],h=d[1];function f(){u||o(),h(!u)}var E=a.palette;return s.a.createElement(y.a,{theme:n.themes[n.activeTheme]},s.a.createElement(g.a,{onClick:f,style:{color:"light"===E.type?E.text.secondary:E.text.primary}},s.a.createElement(M.a,{color:"secondary",badgeContent:5},s.a.createElement(b.a,null,"notifications"))),s.a.createElement(S.a,{width:"100px",container:t,variant:"temporary",anchor:"right",open:u,onClose:f,ModalProps:{keepMounted:!0}},s.a.createElement("div",{className:"notification"},s.a.createElement("div",{className:"notification__topbar flex flex-middle p-16 mb-24"},s.a.createElement(b.a,{color:"primary"},"notifications"),s.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Notifications")),l.map(e=>s.a.createElement("div",{key:e.id,className:"notification__card position-relative"},s.a.createElement(g.a,{size:"small",className:"delete-button bg-light-gray mr-24",onClick:()=>c(e.id)},s.a.createElement(b.a,{className:"text-muted",fontSize:"small"},"clear")),s.a.createElement(P.a,{to:"/".concat(e.path),onClick:f},s.a.createElement(B.a,{className:"mx-16 mb-24",elevation:3},s.a.createElement("div",{className:"card__topbar flex flex-middle flex-space-between p-8 bg-light-gray"},s.a.createElement("div",{className:"flex"},s.a.createElement("div",{className:"card__topbar__button"},s.a.createElement(b.a,{className:"card__topbar__icon",fontSize:"small",color:e.icon.color},e.icon.name)),s.a.createElement("span",{className:"ml-4 font-weight-500 text-muted"},e.heading)),s.a.createElement("small",{className:"card__topbar__time text-muted"},Object(p.c)(new Date(e.timestamp))," ago")),s.a.createElement("div",{className:"px-16 pt-8 pb-16"},s.a.createElement("p",{className:"m-0"},e.title),s.a.createElement("small",{className:"text-muted"},e.subtitle)))))),s.a.createElement("div",{className:"text-center"},s.a.createElement(T.a,{onClick:r},"Clear Notifications")))))})),C=a(102),z=!1;var w=Object(O.a)({},{withTheme:!0})(Object(l.b)(e=>({settings:e.layout.settings,getCartList:o.PropTypes.func.isRequired,deleteProductFromCart:o.PropTypes.func.isRequired,updateCartAmount:o.PropTypes.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}),{getCartList:C.j,deleteProductFromCart:C.i,updateCartAmount:C.k})(function(e){var t=e.container,a=e.theme,n=e.settings,i=e.cartList,l=void 0===i?[]:i,o=e.getCartList,r=e.deleteProductFromCart,c=e.updateCartAmount,m=e.user,d=s.a.useState(!1),u=Object(v.a)(d,2),p=u[0],h=u[1];function f(){h(!p)}z||(o(m.userId),z=!0);var E=a.palette;return s.a.createElement(y.a,{theme:n.themes[n.activeTheme]},s.a.createElement(g.a,{onClick:f,style:{color:"light"===E.type?E.text.secondary:E.text.primary}},s.a.createElement(M.a,{color:"secondary",badgeContent:l.length},s.a.createElement(b.a,null,"shopping_cart"))),s.a.createElement(S.a,{container:t,variant:"temporary",anchor:"right",open:p,onClose:f,ModalProps:{keepMounted:!0}},s.a.createElement("div",{className:"mini-cart"},s.a.createElement("div",{className:"cart__topbar flex flex-middle p-16 mb-24"},s.a.createElement(b.a,{color:"primary"},"shopping_cart"),s.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Cart")),l.map(e=>s.a.createElement("div",{key:e.id,className:"mini-cart__item flex flex-middle flex-space-between py-16 px-8"},s.a.createElement("div",{className:"flex flex-column mr-8"},s.a.createElement(g.a,{size:"small",onClick:()=>c(m.userId,e.id,e.amount+1)},s.a.createElement(b.a,{className:"cursor-pointer"},"keyboard_arrow_up")),s.a.createElement(g.a,{disabled:!(e.amount-1),size:"small",onClick:()=>c(m.userId,e.id,e.amount-1)},s.a.createElement(b.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),s.a.createElement("div",{className:"mr-8"},s.a.createElement("img",{src:e.imgUrl,alt:e.title})),s.a.createElement("div",{className:"mr-8 text-center"},s.a.createElement("h6",{className:"m-0 mb-4"},e.title),s.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),s.a.createElement(g.a,{size:"small",onClick:()=>r(m.userId,e.id)},s.a.createElement(b.a,{fontSize:"small"},"clear")))))))}));var k=Object(m.a)(e=>({root:{backgroundColor:e.palette.primary.main}}),{withTheme:!0})(Object(f.g)(Object(l.b)(e=>({setLayoutSettings:o.PropTypes.func.isRequired,logoutUser:o.PropTypes.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:c.d,logoutUser:x.d})(class extends i.Component{constructor(...e){super(...e),this.state={},this.updateSidebarMode=(e=>{var t=this.props,a=t.settings;(0,t.setLayoutSettings)(Object(n.a)(Object(n.a)({},a),{},{layout1Settings:Object(n.a)(Object(n.a)({},a.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.layout1Settings.leftSidebar),e)})}))}),this.handleSidebarToggle=(()=>{var e,t=this.props.settings.layout1Settings;e=Object(p.d)()?"close"===t.leftSidebar.mode?"mobile":"close":"full"===t.leftSidebar.mode?"close":"full",this.updateSidebarMode({mode:e})}),this.handleSignOut=(()=>{this.props.logoutUser()})}render(){var e=this.props,t=e.theme,a=e.settings,n=e.className,i=e.style,l=a.themes[a.layout1Settings.topbar.theme]||t;return s.a.createElement(y.a,{theme:l},s.a.createElement("div",{className:"topbar"},s.a.createElement("div",{className:"topbar-hold ".concat(n),style:Object.assign({},{backgroundColor:l.palette.primary.main},i)},s.a.createElement("div",{className:"flex flex-space-between flex-middle h-100"},s.a.createElement("div",{className:"flex"},s.a.createElement(g.a,{onClick:this.handleSidebarToggle,className:"hide-on-lg"},s.a.createElement(b.a,null,"menu")),s.a.createElement("div",{className:"hide-on-mobile"},s.a.createElement(g.a,null,s.a.createElement(b.a,null,"mail_outline")),s.a.createElement(g.a,null,s.a.createElement(b.a,null,"web_asset")),s.a.createElement(g.a,null,s.a.createElement(b.a,null,"star_outline")))),s.a.createElement("div",{className:"flex flex-middle"},s.a.createElement(N.f,null),s.a.createElement(_,null),s.a.createElement(w,null),s.a.createElement(N.d,{menuButton:s.a.createElement("img",{className:"mx-8 text-middle circular-image-small cursor-pointer",src:"/assets/images/face-6.jpg",alt:"user"})},s.a.createElement(E.a,{style:{minWidth:185}},s.a.createElement(P.a,{className:"flex flex-middle",to:"/"},s.a.createElement(b.a,null," home "),s.a.createElement("span",{className:"pl-16"}," Home "))),s.a.createElement(E.a,{style:{minWidth:185}},s.a.createElement(P.a,{className:"flex flex-middle",to:"/page-layouts/user-profile"},s.a.createElement(b.a,null," person "),s.a.createElement("span",{className:"pl-16"}," Profile "))),s.a.createElement(E.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(b.a,null," settings "),s.a.createElement("span",{className:"pl-16"}," Settings ")),s.a.createElement(E.a,{onClick:this.handleSignOut,className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(b.a,null," power_settings_new "),s.a.createElement("span",{className:"pl-16"}," Logout "))))))))}}))),Q=a(1465),L=[{name:"Notes",icon:"description",children:[{name:"Math",icon:"list",children:[{name:"1. Partial Fraction",path:"/notes/BBMerlion Notes/Math/1. Partial Fraction.pdf",iconText:"1"},{name:"2. Functions and Graphs",path:"/notes/BBMerlion Notes/Math/2. Functions and Graphs.pdf",iconText:"1"},{name:"3. Sequence and Series",path:"/notes/BBMerlion Notes/Math/3. Sequence and Series.pdf",iconText:"1"},{name:"4. Vector",path:"/notes/BBMerlion Notes/Math/4. Vector.pdf",iconText:"1"},{name:"5. Complex Number",path:"/notes/BBMerlion Notes/Math/5. Complex Number.pdf",iconText:"1"},{name:"6. Differentiation",path:"/notes/BBMerlion Notes/Math/6. Differentiation.pdf",iconText:"1"},{name:"7. Integral _Maclaurin_s Series",path:"/notes/BBMerlion Notes/Math/7. Integral _Maclaurin_s Series.pdf",iconText:"1"},{name:"8. Differential Equation",path:"/notes/BBMerlion Notes/Math/8. Differential Equation.pdf",iconText:"1"},{name:"9. Permutation, Combination, and Probability",path:"/notes/BBMerlion Notes/Math/9. Permutation, Combination, and Probability.pdf",iconText:"1"},{name:"10. Binomial Distribution",path:"/notes/BBMerlion Notes/Math/10. Binomial Distribution.pdf",iconText:"1"},{name:"11. Hypothesis Testing",path:"/notes/BBMerlion Notes/Math/11. Hypothesis Testing.pdf",iconText:"1"},{name:"12. Particle Mechanics (NUS Syllabus)",path:"/notes/BBMerlion Notes/Math/12. Particle Mechanics (NUS Syllabus).pdf",iconText:"1"}]},{name:"Physics",icon:"list",children:[{name:"1. Measurement",path:"/notes/BBMerlion Notes/Physics/1. Measurement.pdf",iconText:"1"},{name:"2. Kinematics",path:"/notes/BBMerlion Notes/Physics/2. Kinematics.pdf",iconText:"1"},{name:"3. Dynamics",path:"/notes/BBMerlion Notes/Physics/3. Dynamics.pdf",iconText:"1"},{name:"4. Forces",path:"/notes/BBMerlion Notes/Physics/4. Forces.pdf",iconText:"1"},{name:"5. Energy, Work, and Power",path:"/notes/BBMerlion Notes/Physics/5. Energy, Work, and Power.pdf",iconText:"1"},{name:"6. Motion in Circle",path:"/notes/BBMerlion Notes/Physics/6. Motion in Circle.pdf",iconText:"1"},{name:"7. Gravitational Field",path:"/notes/BBMerlion Notes/Physics/7. Gravitational Field.pdf",iconText:"1"},{name:"8. Oscillations",path:"/notes/BBMerlion Notes/Physics/8. Oscillations.pdf",iconText:"1"},{name:"9. Thermal Physics",path:"/notes/BBMerlion Notes/Physics/9. Thermal Physics.pdf",iconText:"1"},{name:"10. Wave",path:"/notes/BBMerlion Notes/Physics/10. Wave.pdf",iconText:"1"},{name:"11. Electricity and Magnetism",path:"/notes/BBMerlion Notes/Physics/11. Electricity and Magnetism.pdf",iconText:"1"},{name:"12. Quantum Physics",path:"/notes/BBMerlion Notes/Physics/12. Quantum Physics.pdf",iconText:"1"},{name:"13. Laser and Semiconductors",path:"/notes/BBMerlion Notes/Physics/13. Laser and Semiconductors.pdf",iconText:"1"},{name:"14. Nuclear Physics",path:"/notes/BBMerlion Notes/Physics/14. Nuclear Physics.pdf",iconText:"1"}]}]},{name:"Try Out",icon:"description",children:[{name:"Math",icon:"list",children:[{name:"Quiz 1 Math Sol",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 1 Math Sol.pdf",iconText:"1"},{name:"Quiz 1 Math",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 1 Math.pdf",iconText:"1"},{name:"Quiz 2 Math Sol",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 2 Math Sol.pdf",iconText:"1"},{name:"Quiz 2 Math",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 2 Math.pdf",iconText:"1"},{name:"Quiz 3 Math Sol",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 3 Math Sol.pdf",iconText:"1"},{name:"Quiz 3 Math",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 3 Math.pdf",iconText:"1"},{name:"Quiz 4 Math Sol",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 4 Math Sol.pdf",iconText:"1"},{name:"Quiz 4 Math",path:"/notes/BBMerlion Tryouts/Mathematics/Quiz 4 Math.pdf",iconText:"1"}]},{name:"Physics",icon:"list",children:[{name:"Quiz 1 Physics Sol",path:"/notes/BBMerlion Tryouts/Physics/Quiz 1 Physics Sol.pdf",iconText:"1"},{name:"Quiz 1 Physics",path:"/notes/BBMerlion Tryouts/Physics/Quiz 1 Physics.pdf",iconText:"1"},{name:"Quiz 2 Physics Sol",path:"/notes/BBMerlion Tryouts/Physics/Quiz 2 Physics Sol.pdf",iconText:"1"},{name:"Quiz 2 Physics",path:"/notes/BBMerlion Tryouts/Physics/Quiz 2 Physics.pdf",iconText:"1"},{name:"Quiz 3 Physics Sol",path:"/notes/BBMerlion Tryouts/Physics/Quiz 3 Physics Sol.pdf",iconText:"1"},{name:"Quiz 3 Physics",path:"/notes/BBMerlion Tryouts/Physics/Quiz 3 Physics.pdf",iconText:"1"},{name:"Quiz 4 Physics Sol",path:"/notes/BBMerlion Tryouts/Physics/Quiz 4 Physics Sol.pdf",iconText:"1"},{name:"Quiz 4 Physics",path:"/notes/BBMerlion Tryouts/Physics/Quiz 4 Physics.pdf",iconText:"1"}]}]}];var D=Object(f.g)(Object(l.b)(e=>({setLayoutSettings:r.a.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:c.d})(class extends i.Component{constructor(...e){super(...e),this.state={},this.updateSidebarMode=(e=>{var t=this.props,a=t.settings,i=t.setLayoutSettings,s=a.activeLayout+"Settings",l=a[s];i(Object(n.a)(Object(n.a)({},a),{},{[s]:Object(n.a)(Object(n.a)({},l),{},{leftSidebar:Object(n.a)(Object(n.a)({},l.leftSidebar),e)})}))}),this.renderOverlay=(()=>s.a.createElement("div",{onClick:()=>this.updateSidebarMode({mode:"close"}),className:"sidenav__overlay"}))}render(){return s.a.createElement(i.Fragment,null,s.a.createElement(u.a,{option:{suppressScrollX:!0},className:"scrollable position-relative"},this.props.children,s.a.createElement(N.g,{navigation:L})),this.renderOverlay())}}));var q=class extends i.Component{constructor(...e){super(...e),this.state={}}render(){return s.a.createElement("div",{className:"flex flex-middle flex-space-between brand-area"},s.a.createElement("div",{className:"flex flex-middle brand"},s.a.createElement("img",{src:"/assets/images/logo.png",alt:"company-logo"}),s.a.createElement("span",{className:"brand__text"},"BBMerlion")),this.props.children)}},R=a(348),U=({theme:e,settings:t})=>{return s.a.createElement(R.Helmet,null,s.a.createElement("style",null,"\n        \n        ".concat("dark"===e.palette.type?".sidenav {\n          color: ".concat(e.palette.text.secondary,";\n        }"):" ","\n\n        .sidenav__hold {\n          background-image: url(").concat(t.layout1Settings.leftSidebar.bgImgURL,");\n          opacity: 1 !important;\n        }\n        .sidenav__hold::after {\n          background: ").concat(e.palette.primary.main,";\n          opacity: ").concat(t.layout1Settings.leftSidebar.bgOpacity,";\n        }\n        .navigation .nav-item:not(.badge) {\n          color: ").concat(e.palette.text.primary,";\n        }\n        .navigation .nav-item .icon-text::after {\n          background: ").concat(e.palette.text.primary,";\n        }\n        .navigation .nav-item.active, \n        .navigation .nav-item.active:hover {\n          background: ").concat(e.palette.secondary.main,";\n        }\n\n        \n        ").concat("dark"===e.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active {\n          color: ".concat(e.palette.text.primary,";\n        }"):"","\n        \n      ")))},W=Object(m.a)(e=>({root:{backgroundColor:"transparent",padding:"5px"}}))(g.a),F=Object(m.a)(()=>({root:{fontSize:"1rem"}}))(b.a);var I=Object(m.a)(e=>({}),{withTheme:!0})(Object(f.g)(Object(l.b)(e=>({setDefaultSettings:r.a.func.isRequired,setLayoutSettings:r.a.func.isRequired,logoutUser:r.a.func.isRequired,user:e.user,settings:e.layout.settings}),{setLayoutSettings:c.d,setDefaultSettings:c.c,logoutUser:x.d})(class extends i.Component{constructor(...e){super(...e),this.state={sidenavToggleChecked:!1},this.updateSidebarMode=(e=>{var t=this.props,a=t.settings,i=t.setLayoutSettings,s=t.setDefaultSettings,l=Object(n.a)(Object(n.a)({},a),{},{layout1Settings:Object(n.a)(Object(n.a)({},a.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.layout1Settings.leftSidebar),e)})});i(l),s(l)}),this.handleSidenavToggle=(()=>{var e=this.state.sidenavToggleChecked,t=e?"full":"compact";this.updateSidebarMode({mode:t}),this.setState({sidenavToggleChecked:!e})}),this.handleSignOut=(()=>{this.props.logoutUser()}),this.renderLogoSwitch=(()=>s.a.createElement(q,null)),this.renderUser=(()=>{var e=this.props.user;return s.a.createElement("div",{className:"sidenav__user"},s.a.createElement("div",{className:"username-photo"},s.a.createElement("img",{src:e.photoURL,alt:"user"})),s.a.createElement("div",{className:"ml-8"},s.a.createElement("span",{className:"username"},e.displayName),s.a.createElement("div",{className:"user__menu"},s.a.createElement(N.d,{menuButton:s.a.createElement(Q.a,{title:"Settings"},s.a.createElement(W,{"aria-label":"Delete",className:"",size:"small"},s.a.createElement(F,null," settings ")))},s.a.createElement(E.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(b.a,null," home "),s.a.createElement("span",{className:"pl-16"}," Home ")),s.a.createElement(E.a,{className:"flex flex-middle",style:{minWidth:185}},s.a.createElement(b.a,null," settings "),s.a.createElement("span",{className:"pl-16"}," Account Setting "))),s.a.createElement(Q.a,{title:"Profile"},s.a.createElement(W,{"aria-label":"Delete",className:"",size:"small"},s.a.createElement(F,null,"person"))),s.a.createElement(Q.a,{title:"Sign out"},s.a.createElement(W,{"aria-label":"Delete",className:"",size:"small",onClick:this.handleSignOut},s.a.createElement(F,null,"exit_to_app"))))))})}componentWillMount(){this.unlistenRouteChange=this.props.history.listen((e,t)=>{Object(p.d)()&&this.updateSidebarMode({mode:"close"})})}componentWillUnmount(){this.unlistenRouteChange()}render(){var e=this.props,t=e.theme,a=e.settings,n=a.themes[a.layout1Settings.leftSidebar.theme]||t;return s.a.createElement(y.a,{theme:n},s.a.createElement(U,{theme:n,settings:a}),s.a.createElement("div",{className:"sidenav"},s.a.createElement("div",{className:"sidenav__hold"},s.a.createElement(i.Fragment,null,this.renderLogoSwitch(),s.a.createElement(D,null)))))}}))),A=Object(m.a)({},{withTheme:!0})(Object(l.b)(e=>({settings:e.layout.settings}),{})(({theme:e,settings:t})=>{var a=t.themes[t.footer.theme]||e;return s.a.createElement(y.a,{theme:a},s.a.createElement(R.Helmet,null,s.a.createElement("style",null,"\n              .footer {\n                background: ".concat(a.palette.primary.main,";\n                color: ").concat(a.palette.primary.contrastText,";\n              }\n            "))),s.a.createElement("div",{className:"footer flex flex-middle"},s.a.createElement("div",{className:"flex flex-middle container px-sm-30 w-100"},s.a.createElement("a",{href:"https://ui-lib.com/downloads/matx-react-material-design-admin-template/",className:"mr-8"},s.a.createElement(T.a,{variant:"contained",color:"error"},"Download Matx")),s.a.createElement("a",{href:"https://ui-lib.com/downloads/matx-pro-react-material-design-admin-template/"},s.a.createElement(T.a,{variant:"contained",color:"secondary"},"Get MatX Pro")),s.a.createElement("span",{className:"m-auto"}),s.a.createElement("p",{className:"m-0"},"Design and Developed by ",s.a.createElement("a",{href:"http://ui-lib.com"},"UI Lib")))))})),H=a(166);t.default=Object(m.a)(e=>({layout:{backgroundColor:e.palette.background.default}}),{withTheme:!0})(Object(l.b)(e=>({setLayoutSettings:o.PropTypes.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:c.d})(class extends i.Component{constructor(...e){super(...e),this.updateSidebarMode=(e=>{var t=this.props,a=t.settings;(0,t.setLayoutSettings)(Object(n.a)(Object(n.a)({},a),{},{layout1Settings:Object(n.a)(Object(n.a)({},a.layout1Settings),{},{leftSidebar:Object(n.a)(Object(n.a)({},a.layout1Settings.leftSidebar),e)})}))})}componentWillMount(){Object(p.d)()&&this.updateSidebarMode({mode:"close"})}componentWillUnmount(){}render(){var e=this.props,t=e.settings,a=e.classes,n=e.theme,i=t.layout1Settings,l={[a.layout]:!0,["".concat(t.activeLayout," sidenav-").concat(i.leftSidebar.mode," theme-").concat(n.palette.type," flex")]:!0,"topbar-fixed":i.topbar.fixed};return s.a.createElement(H.a.Consumer,null,({routes:e})=>s.a.createElement("div",{className:Object(p.a)(l)},i.leftSidebar.show&&s.a.createElement(I,null),s.a.createElement("div",{className:"content-wrap position-relative"},i.topbar.show&&i.topbar.fixed&&s.a.createElement(k,{className:"elevation-z8"}),t.perfectScrollbar&&s.a.createElement(u.a,{className:"scrollable-content"},i.topbar.show&&!i.topbar.fixed&&s.a.createElement(k,{style:{height:"80px"}}),s.a.createElement("div",{className:"content"},Object(h.b)(e)),s.a.createElement("div",{className:"my-auto"}),t.footer.show&&!t.footer.fixed&&s.a.createElement(A,null)),!t.perfectScrollbar&&s.a.createElement("div",{className:"scrollable-content"},i.topbar.show&&!i.topbar.fixed&&s.a.createElement(k,null),s.a.createElement("div",{className:"content"},Object(h.b)(e)),s.a.createElement("div",{className:"my-auto"}),t.footer.show&&!t.footer.fixed&&s.a.createElement(A,null)),t.footer.show&&t.footer.fixed&&s.a.createElement(A,null))))}}))}}]);
//# sourceMappingURL=26.80246043.chunk.js.map