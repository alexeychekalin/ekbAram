"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[544],{3806:(t,e,a)=>{a.d(e,{Z:()=>r});var s=a(3645),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".uk-notification[data-v-06b3d2b4]{background-color:#0f6ecd}",""]);const r=n},3645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a=t(e);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(t,a,s){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(s)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(var o=0;o<t.length;o++){var l=[].concat(t[o]);s&&n[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),e.push(l))}},e}},3379:(t,e,a)=>{var s,n=function(){return void 0===s&&(s=Boolean(window&&document&&document.all&&!window.atob)),s},r=function(){var t={};return function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}t[e]=a}return t[e]}}(),i=[];function o(t){for(var e=-1,a=0;a<i.length;a++)if(i[a].identifier===t){e=a;break}return e}function l(t,e){for(var a={},s=[],n=0;n<t.length;n++){var r=t[n],l=e.base?r[0]+e.base:r[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var c=o(u),v={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(i[c].references++,i[c].updater(v)):i.push({identifier:u,updater:f(v,e),references:1}),s.push(u)}return s}function d(t){var e=document.createElement("style"),s=t.attributes||{};if(void 0===s.nonce){var n=a.nc;n&&(s.nonce=n)}if(Object.keys(s).forEach((function(t){e.setAttribute(t,s[t])})),"function"==typeof t.insert)t.insert(e);else{var i=r(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,c=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function v(t,e,a,s){var n=a?"":s.media?"@media ".concat(s.media," {").concat(s.css,"}"):s.css;if(t.styleSheet)t.styleSheet.cssText=c(e,n);else{var r=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(r,i[e]):t.appendChild(r)}}function m(t,e,a){var s=a.css,n=a.media,r=a.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=s;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(s))}}var p=null,h=0;function f(t,e){var a,s,n;if(e.singleton){var r=h++;a=p||(p=d(e)),s=v.bind(null,a,r,!1),n=v.bind(null,a,r,!0)}else a=d(e),s=m.bind(null,a,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(a)};return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var a=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var s=0;s<a.length;s++){var n=o(a[s]);i[n].references--}for(var r=l(t,e),d=0;d<a.length;d++){var u=o(a[d]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}a=r}}}},9544:(t,e,a)=>{a.r(e),a.d(e,{default:()=>l});const s={name:"NewProvider",data:function(){return{name:"",address:"",address1:"",tradename:"",email:"",country:"",phone:"",contact:"",result:"",results:[]}},methods:{newProvider:function(){var t=this;axios.post("/api/provider",{name:this.name,address:this.address,address1:this.address1,tradename:this.tradename,email:this.email,country:this.country,phone:this.phone,contact:this.contact}).then((function(e){UIkit.notification({message:"Новый поставщик добавлен",status:"success"}),t.$data.results.push({name:t.name,address:t.address,address1:t.address1,tradename:t.tradename,email:t.email,country:t.country,phone:t.phone,contact:t.contact}),t.name="",t.address="",t.address1="",t.tradename="",t.email="",t.country="",t.phone="",t.contact=""})).catch((function(t){UIkit.notification({message:t,status:"danger"}),console.log(t)}))}},mounted:function(){}};var n=a(3379),r=a.n(n),i=a(3806),o={insert:"head",singleton:!1};r()(i.Z,o);i.Z.locals;const l=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uk-width-1-1 uk-padding uk-padding-remove-top"},[a("h1",{staticClass:"uk-text-center"},[t._v("Добавление нового поставщика")]),t._v(" "),a("form",{staticClass:"uk-width-1-1",on:{submit:function(e){return e.preventDefault(),t.newProvider()}}},[a("div",{staticClass:"uk-grid-match uk-child-width-1-1@s",attrs:{"uk-grid":""}},[a("div",[a("div",{staticClass:"uk-card-default uk-card-body"},[a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-2@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Legal Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"uk-input",attrs:{type:"text",required:"",placeholder:"",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"uk-width-1-2@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Trade Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tradename,expression:"tradename"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.tradename},on:{input:function(e){e.target.composing||(t.tradename=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-2@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Bill to Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"",required:""},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"uk-width-1-2@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Ship from Address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address1,expression:"address1"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.address1},on:{input:function(e){e.target.composing||(t.address1=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[a("div",{staticClass:"uk-width-1-4@s"},[a("label",{staticClass:"uk-form-label"},[t._v("E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"uk-input",attrs:{type:"text",required:"",placeholder:"",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"uk-width-1-4@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Phone")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"uk-width-1-4@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Country")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"uk-width-1-4@s"},[a("label",{staticClass:"uk-form-label"},[t._v("Primary Contact")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contact,expression:"contact"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.contact},on:{input:function(e){e.target.composing||(t.contact=e.target.value)}}})])])]),t._v(" "),a("button",{staticClass:"uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"},[t._v(" Сохранить ")])])])]),t._v(" "),0!=t.results.length?a("table",{staticClass:"uk-table uk-table-hover uk-table-middle uk-table-divider",staticStyle:{"background-color":"white"}},[t._m(0),t._v(" "),t._l(t.results,(function(e,s){return a("tbody",[a("tr",[a("td",[t._v(t._s(s+1))]),t._v(" "),a("td",[t._v(t._s(e.name||"-"))]),t._v(" "),a("td",[t._v(t._s(e.tradename||"-"))]),t._v(" "),a("td",{staticClass:"uk-text-nowrap"},[t._v(t._s(e.address||"-"))]),t._v(" "),a("td",{staticClass:"uk-text-truncate"},[t._v(t._s(e.address1||"-"))]),t._v(" "),a("td",[t._v(t._s(e.email||"-"))]),t._v(" "),a("td",[t._v(t._s(e.phone||"-"))]),t._v(" "),a("td",[t._v(t._s(e.country||"-"))]),t._v(" "),a("td",[t._v(t._s(e.contact||"-"))])])])}))],2):t._e()])}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"uk-table-shrink"},[t._v("#")]),t._v(" "),a("th",{},[t._v("Legal Name")]),t._v(" "),a("th",{},[t._v("Trade Name")]),t._v(" "),a("th",{},[t._v("Bill to Address")]),t._v(" "),a("th",{},[t._v("Ship from Address")]),t._v(" "),a("th",{},[t._v("Email")]),t._v(" "),a("th",{},[t._v("Phone")]),t._v(" "),a("th",{},[t._v("Country")]),t._v(" "),a("th",{},[t._v("Primary Contact")])])])}],!1,null,"06b3d2b4",null).exports}}]);