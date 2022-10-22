"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[260],{4260:(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});var n=s(4322);const i={name:"AllClients",data:function(){return{results:[],allresults:[],val:"",rev:0,exp:0}},methods:{getOpl:function(t,e){var s=this;axios({url:"/api/documents/opl/"+t+"/"+e,method:"GET",responseType:"blob"}).then((function(t){s.download(t)}))},getOpo:function(t,e){var s=this;axios({url:"/api/documents/opo/"+t+"/"+e,method:"GET",responseType:"blob"}).then((function(t){s.download(t)}))},getOpf:function(t,e){var s=this;axios({url:"/api/documents/opf/"+t+"/"+e,method:"GET",responseType:"blob"}).then((function(t){s.download(t)}))},getIpo:function(t){var e=this;axios({url:"/api/documents/ipo/"+t,method:"GET",responseType:"blob"}).then((function(t){e.download(t)}))},download:function(t){var e=window.URL.createObjectURL(new Blob([t.data])),s=document.createElement("a");s.href=e;var n=t.headers["content-disposition"];s.setAttribute("download",n.split("=")[1]),document.body.appendChild(s),s.click(),s.remove()},edit:function(t){this.$router.push({name:"edit",params:{id:t}})},getOrders:function(){var t=this;axios.get("/api/order/"+n.Z.state.auth.user.id+"/"+n.Z.state.auth.role).then((function(e){t.results=e.data,t.allresults=e.data,t.countRevExp(e.data)}))},filter:function(t){var e,s=this;if(""===t)this.results=this.allresults,this.countRevExp(this.results);else{this.results=this.allresults;this.results=(e=t,s.$data.results.filter((function(t){return t.client.toLowerCase().indexOf(e.toLowerCase())>-1}))),this.countRevExp(this.results)}},show:function(t){UIkit.modal("#modal-change").show()},deleteOrder:function(t,e){var s=this;axios.post("/api/order/delete/"+t).then((function(t){UIkit.notification({message:"Заказ удален"}),s.results.splice(e,1),s.allresults.splice(e,1)})).catch((function(t){t.response.data;UIkit.notification({message:"Ошибка удаления. Обратитесь к администратору"})}))},countRevExp:function(t){var e=this;this.exp=0,this.rev=0,t.forEach((function(t){e.rev+=t.revenue,e.exp+=t.expence}))}},mounted:function(){this.getOrders()}};const a=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-width-1-1 uk-padding uk-padding-remove-top"},[s("h1",{staticClass:"uk-text-center"},[t._v("Список всех заказов")]),t._v(" "),s("div",{staticClass:"uk-card-default uk-card-small uk-card-hover"},[s("div",{staticClass:"uk-card-header"},[s("div",{staticClass:"uk-grid uk-grid-small"},[s("div",{staticClass:"uk-width-1-1 uk-grid"},[s("div",{staticClass:"uk-inline uk-width-expand"},[s("span",{staticClass:"uk-form-icon uk-form-icon-flip",attrs:{"data-uk-icon":"icon: search"}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"uk-input uk-width-1-1 search-fld",attrs:{type:"text",placeholder:"Поиск по Клиенту"},domProps:{value:t.val},on:{input:[function(e){e.target.composing||(t.val=e.target.value)},function(e){return t.filter(t.val)}]}})]),t._v(" "),s("div",{staticStyle:{"margin-top":"6px"}},[s("span",{staticClass:"uk-text-bold"},[t._v(" REVENUE: "+t._s(t.rev)+" "),s("span",{staticClass:"uk-text-muted"},[t._v("|")]),t._v(" EXPENSE: "+t._s(t.exp)+" ")])])])])]),t._v(" "),s("div",{staticClass:"uk-card-body uk-margin-medium-bottom uk-padding-remove-top"},[s("div",{staticClass:"form-container uk-overflow-auto"},[s("table",{staticClass:"uk-table uk-table-hover uk-table-middle uk-table-divider",staticStyle:{"background-color":"white"}},[t._m(0),t._v(" "),t._l(t.results,(function(e,n){return s("tbody",{attrs:{id:e.id}},[s("tr",[s("td",[t._v(t._s(n+1))]),t._v(" "),s("td",[t._v(t._s(e.number||"-"))]),t._v(" "),s("td",{staticClass:"uk-text-nowrap"},[t._v(t._s(e.datestart||"-"))]),t._v(" "),s("td",[t._v(t._s(e.client||"-"))]),t._v(" "),s("td",[t._v(t._s(e.revenue||"-")+" "+t._s(e.currency))]),t._v(" "),s("td",[t._v(t._s(e.expence||"-")+" "+t._s(e.currency))]),t._v(" "),s("td",[t._v(t._s(e.revenue-e.expence||"-")+" "+t._s(e.currency))]),t._v(" "),s("td",{staticClass:"uk-width-1-6"},[s("ul",{staticClass:"uk-iconnav"},[s("li",[s("button",{staticClass:"uk-button uk-button-link",on:{click:function(s){return s.preventDefault(),t.getIpo(e.ipo)}}},[t._v("IPO")])]),t._v(" "),s("li",[s("button",{staticClass:"uk-button uk-button-link",on:{click:function(s){return s.preventDefault(),t.getOpf(e.id,e.idclient)}}},[t._v("OPF")])]),t._v(" "),s("li",[s("button",{staticClass:"uk-button uk-button-link",on:{click:function(s){return s.preventDefault(),t.getOpo(e.id,e.idclient)}}},[t._v("OPO")])]),t._v(" "),s("li",[s("button",{staticClass:"uk-button uk-button-link",on:{click:function(s){return s.preventDefault(),t.getOpl(e.id,e.idclient)}}},[t._v("OPL")])]),t._v(" "),t._m(1,!0)])]),t._v(" "),s("td",[s("ul",{staticClass:"uk-iconnav"},[s("li",[s("a",{attrs:{"uk-icon":"icon: file-edit","uk-tooltip":"Редактировать"},on:{click:function(s){return s.preventDefault(),t.edit(e.id)}}})]),t._v(" "),1===t.$store.state.auth.role?s("li",[s("a",{attrs:{"uk-icon":"icon: trash","uk-tooltip":"title: Удалить; pos: bottom"},on:{click:function(s){return s.preventDefault(),t.deleteOrder(e.id,n)}}})]):t._e()])])])])}))],2)])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"uk-table-shrink"},[t._v("#")]),t._v(" "),s("th",{},[t._v("IPO Ref.")]),t._v(" "),s("th",{},[t._v("IPO Date")]),t._v(" "),s("th",{},[t._v("Customer")]),t._v(" "),s("th",{},[t._v("Revenue")]),t._v(" "),s("th",{},[t._v("Expense")]),t._v(" "),s("th",{},[t._v("Income")]),t._v(" "),s("th",{staticClass:"uk-table-shrink uk-text-nowrap"},[t._v("DOCUMENTS")]),t._v(" "),s("th",{staticClass:"uk-table-shrink uk-text-nowrap"},[t._v("ACTIONS")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("button",{staticClass:"uk-button uk-button-link"},[t._v("OSI")])])}],!1,null,"7a7499c6",null).exports}}]);