"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[812],{8812:(t,a,e)=>{e.r(a),e.d(a,{default:()=>i});const s={name:"About",data:function(){return{name:"",address:"",code:"",email:"",fax:"",phone:"",inn:"",iban:"",swift:"",bank:"",baddress:"",licence:"",branch:"",accountNumber:""}},methods:{updateCompany:function(){axios.post("/api/about",{name:this.name,address:this.address,code:this.code,inn:this.inn,email:this.email,fax:this.fax,phone:this.phone,iban:this.iban,swift:this.swift,bank:this.bank,baddress:this.baddress,licence:this.licence,branch:this.branch,accountNumber:this.accountNumber}).then((function(t){UIkit.notification({message:"Данные обновлены",status:"success"})})).catch((function(t){UIkit.notification({message:t,status:"danger"}),console.log(t)}))},getCompany:function(){var t=this;axios.get("/api/about").then((function(a){t.name=a.data[0].name,t.address=a.data[0].address,t.code=a.data[0].code,t.inn=a.data[0].inn,t.email=a.data[0].email,t.fax=a.data[0].fax,t.phone=a.data[0].phone,t.iban=a.data[0].iban,t.swift=a.data[0].swift,t.bank=a.data[0].bank,t.baddress=a.data[0].baddress,t.licence=a.data[0].licence,t.branch=a.data[0].branch,t.accountNumber=a.data[0].accountNumber})).catch((function(t){UIkit.notification({message:t,status:"danger"}),console.log(t)}))}},mounted:function(){this.getCompany()}};const i=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-width-1-1 uk-padding uk-padding-remove-top"},[e("h1",{staticClass:"uk-text-center"},[t._v("Информация о компании ")]),t._v(" "),e("form",{staticClass:"uk-width-1-1",on:{submit:function(a){return a.preventDefault(),t.updateCompany()}}},[e("div",{staticClass:"uk-grid-match uk-child-width-1-1@s",attrs:{"uk-grid":""}},[e("div",[e("div",{staticClass:"uk-card-default uk-card-body"},[e("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Company name")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"uk-input",attrs:{type:"text",required:"",placeholder:"",required:""},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Bill to Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"uk-input",attrs:{type:"text",required:"",placeholder:""},domProps:{value:t.address},on:{input:function(a){a.target.composing||(t.address=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Уникальный номер")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"uk-input",attrs:{type:"text",required:"",placeholder:"",required:""},domProps:{value:t.code},on:{input:function(a){a.target.composing||(t.code=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("E-mail")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"",required:""},domProps:{value:t.email},on:{input:function(a){a.target.composing||(t.email=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Phone")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Fax")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.fax,expression:"fax"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.fax},on:{input:function(a){a.target.composing||(t.fax=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("License (if applicable)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.licence,expression:"licence"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.licence},on:{input:function(a){a.target.composing||(t.licence=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Bank")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.bank,expression:"bank"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"",required:""},domProps:{value:t.bank},on:{input:function(a){a.target.composing||(t.bank=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-3@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Bank Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.baddress,expression:"baddress"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.baddress},on:{input:function(a){a.target.composing||(t.baddress=a.target.value)}}})])]),t._v(" "),e("div",{staticClass:"uk-grid-small",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-4@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Reg. No / TRN")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inn,expression:"inn"}],staticClass:"uk-input",attrs:{type:"text",placeholder:"",required:""},domProps:{value:t.inn},on:{input:function(a){a.target.composing||(t.inn=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Swift")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.swift,expression:"swift"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.swift},on:{input:function(a){a.target.composing||(t.swift=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Branch (if applicable)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.branch,expression:"branch"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.branch},on:{input:function(a){a.target.composing||(t.branch=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"uk-width-1-4@s"},[e("label",{staticClass:"uk-form-label"},[t._v("Account Number")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.accountNumber,expression:"accountNumber"}],staticClass:"uk-input",attrs:{type:"text",placeholder:""},domProps:{value:t.accountNumber},on:{input:function(a){a.target.composing||(t.accountNumber=a.target.value)}}})])])]),t._v(" "),e("button",{staticClass:"uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom"},[t._v(" Сохранить ")])])])])])}),[],!1,null,"4c1d3e2a",null).exports}}]);