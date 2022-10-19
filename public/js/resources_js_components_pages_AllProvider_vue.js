"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_AllProvider_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  name: "AllProvider",
  data: function data() {
    return {
      name: '',
      address: '',
      address1: '',
      address2: '',
      tradename: '',
      email: '',
      country: '',
      phone: '',
      contact: '',
      results: [],
      allresults: [],
      val: '',
      id: '',
      fields: {
        'ID': 'id',
        'P/N': 'pn',
        'Описание': 'description'
      }
    };
  },
  methods: {
    getProvider: function getProvider() {
      var _this = this;

      axios.get('/api/provider').then(function (res) {
        _this.$data.results = res.data;
        _this.$data.allresults = res.data;
      });
    },
    filter: function filter(val) {
      var _this2 = this;

      if (val === '') {
        this.results = this.allresults;
      } else {
        this.results = this.allresults;

        var filterValue = function filterValue(name) {
          return _this2.$data.results.filter(function (data) {
            return data.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
          });
        };

        this.results = filterValue(val);
      }
    },
    show: function show(param) {
      UIkit.modal("#modal-change").show();
      this.name = param[1];
      this.address = param[2];
      this.address1 = param[3];
      this.address2 = param[4];
      this.email = param[5];
      this.country = param[6];
      this.phone = param[7];
      this.contact = param[8];
      this.id = param[0];
      this.tradename = param[9];
    },
    updateProvider: function updateProvider(param) {
      var _this3 = this;

      axios.post('/api/provider/update', {
        id: this.id,
        name: this.name,
        address: this.address,
        address1: this.address1,
        address2: this.address2,
        email: this.email,
        country: this.country,
        phone: this.phone,
        contact: this.contact,
        tradename: this.tradename
      }).then(function (res) {
        UIkit.notification({
          message: 'Поставщик обновлен'
        });
        UIkit.modal("#modal-change").hide();
      })["catch"](function (_ref) {
        var data = _ref.response.data;
        UIkit.notification({
          message: 'Ошибка изменения. Обратитесь к администратору'
        });
      })["finally"](function () {
        UIkit.modal("#modal-change").hide();

        _this3.getProvider();
      });
    },
    deleteProvider: function deleteProvider(param) {
      var _this4 = this;

      axios.post('/api/provider/delete', {
        id: param[0],
        name: 'null',
        address: 'null',
        email: 'null'
      }).then(function (res) {
        UIkit.notification({
          message: 'Поставщик удален'
        });

        _this4.results.splice(param[1], 1);

        _this4.allresults.splice(param[1], 1);
      })["catch"](function (_ref2) {
        var data = _ref2.response.data;
        UIkit.notification({
          message: 'Ошибка удаления. Поставщик указан в заказах'
        });
      })["finally"](function () {
        UIkit.modal("#modal-change").hide();

        _this4.getProvider();
      });
    }
  },
  mounted: function mounted() {
    this.getProvider();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/AllProvider.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/pages/AllProvider.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true& */ "./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true&");
/* harmony import */ var _AllProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllProvider.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5b71e28c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/AllProvider.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllProvider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProvider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllProvider_vue_vue_type_template_id_5b71e28c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllProvider.vue?vue&type=template&id=5b71e28c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Список всех поставщиков"),
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "modal-change", "uk-modal": "" } }, [
        _c(
          "div",
          {
            staticClass:
              "uk-modal-dialog uk-modal-body uk-margin-auto-vertical uk-width-3-4",
          },
          [
            _c("div", { staticClass: "uk-margin uk-modal-container-large" }, [
              _c("h3", { staticClass: "uk-card-title" }, [
                _vm._v("Редактирование поставщика"),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "uk-grid-small", attrs: { "uk-grid": "" } },
                [
                  _c(
                    "form",
                    {
                      staticClass: "uk-width-1-1",
                      on: {
                        submit: function ($event) {
                          $event.preventDefault()
                          return _vm.updateProvider()
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
                            _c(
                              "div",
                              { staticClass: "uk-card-default uk-card-body" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "uk-grid-small",
                                    attrs: { "uk-grid": "" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-2@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Legal Name")]
                                        ),
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-2@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Trade Name")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.tradename,
                                              expression: "tradename",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            placeholder: "",
                                          },
                                          domProps: { value: _vm.tradename },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.tradename =
                                                $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "uk-grid-small",
                                    attrs: { "uk-grid": "" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-2@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Bill to Address")]
                                        ),
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
                                            placeholder: "",
                                            required: "",
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-2@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Ship from Address")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.address1,
                                              expression: "address1",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            required: "",
                                            placeholder: "",
                                          },
                                          domProps: { value: _vm.address1 },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.address1 = $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "uk-grid-small",
                                    attrs: { "uk-grid": "" },
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-4@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("E-mail")]
                                        ),
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
                                            required: "",
                                            placeholder: "",
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-4@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Phone")]
                                        ),
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
                                            required: "",
                                            placeholder: "",
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
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-4@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Country")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.country,
                                              expression: "country",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            required: "",
                                            placeholder: "",
                                          },
                                          domProps: { value: _vm.country },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.country = $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-4@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Primary Contact")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.contact,
                                              expression: "contact",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            required: "",
                                            placeholder: "",
                                          },
                                          domProps: { value: _vm.contact },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.contact = $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                  ]
                                ),
                              ]
                            ),
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
              ),
            ]),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-card-default uk-card-small uk-card-hover" },
        [
          _c("div", { staticClass: "uk-card-header" }, [
            _c("div", { staticClass: "uk-grid uk-grid-small" }, [
              _c("div", { staticClass: "uk-width-expand" }, [
                _c("div", { staticClass: "uk-inline uk-width-1-1" }, [
                  _c("span", {
                    staticClass: "uk-form-icon uk-form-icon-flip",
                    attrs: { "data-uk-icon": "icon: search" },
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.val,
                        expression: "val",
                      },
                    ],
                    staticClass: "uk-input uk-width-1-1 search-fld",
                    attrs: { type: "text", placeholder: "Поиск по Имени" },
                    domProps: { value: _vm.val },
                    on: {
                      input: [
                        function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.val = $event.target.value
                        },
                        function ($event) {
                          return _vm.filter(_vm.val)
                        },
                      ],
                    },
                  }),
                ]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "uk-card-body uk-margin-medium-bottom uk-padding-remove-top",
            },
            [
              _c("div", { staticClass: "form-container uk-overflow-auto" }, [
                _c(
                  "table",
                  {
                    staticClass:
                      "uk-table uk-table-hover uk-table-middle uk-table-divider",
                    staticStyle: { "background-color": "white" },
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _vm._l(_vm.results, function (result, cnt) {
                      return _c("tbody", { attrs: { id: result.id } }, [
                        _c("tr", [
                          _c("td", [_vm._v(_vm._s(cnt + 1))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.name || "-"))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.tradename || "-"))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "uk-text-nowrap" }, [
                            _vm._v(_vm._s(result.address || "-")),
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "uk-text-truncate" }, [
                            _vm._v(_vm._s(result.address1 || "-")),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.email || "-"))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.phone || "-"))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.country || "-"))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.contact || "-"))]),
                          _vm._v(" "),
                          _c("td", [
                            _c("ul", { staticClass: "uk-iconnav" }, [
                              _c("li", [
                                _c("a", {
                                  attrs: {
                                    "uk-icon": "icon: file-edit",
                                    "uk-tooltip": "Редактировать",
                                  },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.show([
                                        result.id,
                                        result.name,
                                        result.address,
                                        result.address1,
                                        result.address2,
                                        result.email,
                                        result.phone,
                                        result.country,
                                        result.contact,
                                        result.tradename,
                                      ])
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _c("li", [
                                _c("a", {
                                  attrs: {
                                    "uk-icon": "icon: trash",
                                    "uk-tooltip": "title: Удалить; pos: bottom",
                                  },
                                  on: {
                                    click: function ($event) {
                                      $event.preventDefault()
                                      return _vm.deleteProvider([
                                        result.id,
                                        cnt,
                                      ])
                                    },
                                  },
                                }),
                              ]),
                            ]),
                          ]),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { staticClass: "uk-table-shrink" }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Legal Name")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Trade Name")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Bill to Address")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Ship from Address")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Email")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Phone")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("country")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Primary Contact")]),
        _vm._v(" "),
        _c("th", [_vm._v(" Действия ")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);