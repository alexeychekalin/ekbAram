"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_About_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "About",
  data: function data() {
    return {
      name: '',
      address: '',
      code: '',
      email: '',
      phone: '',
      inn: '',
      iban: '',
      swift: '',
      bank: '',
      baddress: '',
      licence: '',
      branch: '',
      accountNumber: ''
    };
  },
  methods: {
    updateCompany: function updateCompany() {
      axios.post('/api/about', {
        name: this.name,
        address: this.address,
        code: this.code,
        inn: this.inn,
        email: this.email,
        phone: this.phone,
        iban: this.iban,
        swift: this.swift,
        bank: this.bank,
        baddress: this.baddress,
        licence: this.licence,
        branch: this.branch,
        accountNumber: this.accountNumber
      }).then(function (res) {
        UIkit.notification({
          message: 'Данные обновлены',
          status: 'success'
        });
      })["catch"](function (error) {
        UIkit.notification({
          message: error,
          status: 'danger'
        });
        console.log(error);
      });
    },
    getCompany: function getCompany() {
      var _this = this;

      axios.get('/api/about').then(function (res) {
        _this.name = res.data[0].name;
        _this.address = res.data[0].address;
        _this.code = res.data[0].code;
        _this.inn = res.data[0].inn;
        _this.email = res.data[0].email;
        _this.phone = res.data[0].phone;
        _this.iban = res.data[0].iban;
        _this.swift = res.data[0].swift;
        _this.bank = res.data[0].bank;
        _this.baddress = res.data[0].baddress;
        _this.licence = res.data[0].licence;
        _this.branch = res.data[0].branch;
        _this.accountNumber = res.data[0].accountNumber;
      })["catch"](function (error) {
        UIkit.notification({
          message: error,
          status: 'danger'
        });
        console.log(error);
      });
    }
  },
  mounted: function mounted() {
    this.getCompany();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/About.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/About.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=22a27132&scoped=true& */ "./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "22a27132",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/About.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/About.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=22a27132&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "uk-width-1-1 uk-padding uk-padding-remove-top" },
    [
      _c("h1", { staticClass: "uk-text-center" }, [
        _vm._v("Информация о компании "),
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "uk-width-1-1",
          on: {
            submit: function ($event) {
              $event.preventDefault()
              return _vm.updateCompany()
            },
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "uk-grid-match uk-child-width-1-1@s",
              attrs: { "uk-grid": "" },
            },
            [
              _c("div", [
                _c("div", { staticClass: "uk-card-default uk-card-body" }, [
                  _c(
                    "div",
                    { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
                    [
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Company name"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.name,
                              expression: "name",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            required: "",
                            placeholder: "",
                          },
                          domProps: { value: _vm.name },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Bill to Address"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.address,
                              expression: "address",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            required: "",
                            placeholder: "",
                          },
                          domProps: { value: _vm.address },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.address = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("E-mail"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.email,
                              expression: "email",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.email },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.email = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Phone"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.phone,
                              expression: "phone",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.phone },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.phone = $event.target.value
                            },
                          },
                        }),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
                    [
                      _c("div", { staticClass: "uk-width-1-3@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("License (if applicable)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.licence,
                              expression: "licence",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.licence },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.licence = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-3@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Bank"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.bank,
                              expression: "bank",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.bank },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.bank = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-3@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Bank Address"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.baddress,
                              expression: "baddress",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.baddress },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.baddress = $event.target.value
                            },
                          },
                        }),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
                    [
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Reg. No / TRN"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.inn,
                              expression: "inn",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.inn },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.inn = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Swift"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.swift,
                              expression: "swift",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.swift },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.swift = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Branch (if applicable)"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.branch,
                              expression: "branch",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.branch },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.branch = $event.target.value
                            },
                          },
                        }),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "uk-width-1-4@s" }, [
                        _c("label", { staticClass: "uk-form-label" }, [
                          _vm._v("Account Number"),
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.accountNumber,
                              expression: "accountNumber",
                            },
                          ],
                          staticClass: "uk-input",
                          attrs: {
                            type: "text",
                            placeholder: "",
                            required: "",
                          },
                          domProps: { value: _vm.accountNumber },
                          on: {
                            input: function ($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.accountNumber = $event.target.value
                            },
                          },
                        }),
                      ]),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass:
                      "uk-button uk-button-primary uk-width-1-3@m uk-width-1-1@s uk-align-center uk-margin-bottom",
                  },
                  [_vm._v(" Сохранить ")]
                ),
              ]),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);