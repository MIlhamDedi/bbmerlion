(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1277:function(e,a,t){"use strict";t.r(a);var c=t(335);t.d(a,"default",function(){return c.a})},1333:function(e,a){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},1334:function(e,a,t){"use strict";var c=t(1333);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=n.default.memo(n.default.forwardRef(function(a,t){return n.default.createElement(r.default,(0,l.default)({ref:t},a),e)}));0;return t.muiName=r.default.muiName,t};var l=c(t(1346)),n=c(t(0)),r=c(t(1277))},1346:function(e,a){function t(){return e.exports=t=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},t.apply(this,arguments)}e.exports=t},1407:function(e,a,t){"use strict";var c=t(2),l=t(6),n=t(0),r=(t(4),t(8)),o=t(10),d=n.forwardRef(function(e,a){var t=e.classes,o=e.className,d=e.row,i=void 0!==d&&d,m=Object(l.a)(e,["classes","className","row"]);return n.createElement("div",Object(c.a)({className:Object(r.a)(t.root,o,i&&t.row),ref:a},m))});a.a=Object(o.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(d)},1758:function(e,a,t){"use strict";var c=t(1333);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(0)),n=(0,c(t(1334)).default)(l.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");a.default=n},1759:function(e,a,t){"use strict";var c=t(1333);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(0)),n=(0,c(t(1334)).default)(l.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");a.default=n},1760:function(e,a,t){"use strict";var c=t(1333);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(0)),n=(0,c(t(1334)).default)(l.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");a.default=n},1761:function(e,a,t){"use strict";var c=t(1333);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=c(t(0)),n=(0,c(t(1334)).default)(l.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");a.default=n},1936:function(e,a,t){"use strict";t.r(a);var c=t(0),l=t.n(c),n=t(5),r=t(147),o=t(1328);function d(){var e=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0}),a=Object(r.a)(e,2),t=a[0],c=a[1],d=e=>a=>{c(Object(n.a)(Object(n.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement("div",null,l.a.createElement(o.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA",inputProps:{"aria-label":"primary checkbox"}}),l.a.createElement(o.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),l.a.createElement(o.a,{value:"checkedC",inputProps:{"aria-label":"uncontrolled-checkbox"}}),l.a.createElement(o.a,{disabled:!0,value:"checkedD",inputProps:{"aria-label":"disabled checkbox"}}),l.a.createElement(o.a,{disabled:!0,checked:!0,value:"checkedE",inputProps:{"aria-label":"disabled checked checkbox"}}),l.a.createElement(o.a,{checked:t.checkedF,onChange:d("checkedF"),value:"checkedF",indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),l.a.createElement(o.a,{defaultChecked:!0,color:"default",value:"checkedG",inputProps:{"aria-label":"checkbox with default color"}}))}var i=t(10),m=t(251),u=t(1407),s=t(1327),h=t(1760),E=t.n(h),b=t(1761),f=t.n(b),k=t(1759),v=t.n(k),p=t(1758),g=t.n(p),C=Object(i.a)({root:{color:m.a[400],"&$checked":{color:m.a[600]}},checked:{}})(e=>l.a.createElement(o.a,Object.assign({color:"default"},e)));function j(){var e=l.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),a=Object(r.a)(e,2),t=a[0],c=a[1],d=e=>a=>{c(Object(n.a)(Object(n.a)({},t),{},{[e]:a.target.checked}))};return l.a.createElement(u.a,{row:!0},l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:t.checkedA,onChange:d("checkedA"),value:"checkedA"}),label:"Secondary"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:t.checkedB,onChange:d("checkedB"),value:"checkedB",color:"primary"}),label:"Primary"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{value:"checkedC"}),label:"Uncontrolled"}),l.a.createElement(s.a,{disabled:!0,control:l.a.createElement(o.a,{value:"checkedD"}),label:"Disabled"}),l.a.createElement(s.a,{disabled:!0,control:l.a.createElement(o.a,{checked:!0,value:"checkedE"}),label:"Disabled"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:t.checkedF,onChange:d("checkedF"),value:"checkedF",indeterminate:!0}),label:"Indeterminate"}),l.a.createElement(s.a,{control:l.a.createElement(C,{checked:t.checkedG,onChange:d("checkedG"),value:"checkedG"}),label:"Custom color"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{icon:l.a.createElement(g.a,null),checkedIcon:l.a.createElement(v.a,null),value:"checkedH"}),label:"Custom icon"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{icon:l.a.createElement(E.a,{fontSize:"small"}),checkedIcon:l.a.createElement(f.a,{fontSize:"small"}),value:"checkedI"}),label:"Custom size"}))}var y=t(1269),O=t(1271);var w=function(){var e=l.a.useState("female"),a=Object(r.a)(e,2),t=a[0],c=a[1];return l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(O.a,{component:"legend"},"labelPlacement"),l.a.createElement(u.a,{"aria-label":"position",name:"position",value:t,onChange:function(e){c(e.target.value)},row:!0},l.a.createElement(s.a,{value:"top",control:l.a.createElement(o.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),l.a.createElement(s.a,{value:"start",control:l.a.createElement(o.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),l.a.createElement(s.a,{value:"bottom",control:l.a.createElement(o.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),l.a.createElement(s.a,{value:"end",control:l.a.createElement(o.a,{color:"primary"}),label:"End",labelPlacement:"end"})))},x=t(1296),P=t(1272),B=Object(x.a)(e=>({root:{display:"flex"},formControl:{margin:e.spacing(2)}}));function N(){var e=B(),a=l.a.useState({gilad:!0,jason:!1,antoine:!1}),t=Object(r.a)(a,2),c=t[0],d=t[1],i=e=>a=>{d(Object(n.a)(Object(n.a)({},c),{},{[e]:a.target.checked}))},m=c.gilad,h=c.jason,E=c.antoine,b=2!==[m,h,E].filter(e=>e).length;return l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{component:"fieldset",className:e.formControl},l.a.createElement(O.a,{component:"legend"},"Assign responsibility"),l.a.createElement(u.a,null,l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:m,onChange:i("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:h,onChange:i("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:E,onChange:i("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(P.a,null,"Be careful")),l.a.createElement(y.a,{required:!0,error:b,component:"fieldset",className:e.formControl},l.a.createElement(O.a,{component:"legend"},"Pick two"),l.a.createElement(u.a,null,l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:m,onChange:i("gilad"),value:"gilad"}),label:"Gilad Gray"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:h,onChange:i("jason"),value:"jason"}),label:"Jason Killian"}),l.a.createElement(s.a,{control:l.a.createElement(o.a,{checked:E,onChange:i("antoine"),value:"antoine"}),label:"Antoine Llorca"})),l.a.createElement(P.a,null,"You can display an error")))}var F=t(21);a.default=(()=>l.a.createElement("div",{className:"m-sm-30"},l.a.createElement("div",{className:"mb-sm-30"},l.a.createElement(F.a,{routeSegments:[{name:"Material",path:"/material"},{name:"Chckbox"}]})),l.a.createElement(F.i,{title:"simple checkbox"},l.a.createElement(d,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement(F.i,{title:"Checkbox with Label"},l.a.createElement(j,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement(F.i,{title:"Checkbox with Form Group"},l.a.createElement(N,null)),l.a.createElement("div",{className:"py-12"}),l.a.createElement(F.i,{title:"Checkbox with Different Label Placement"},l.a.createElement(w,null))))}}]);
//# sourceMappingURL=16.bb967379.chunk.js.map