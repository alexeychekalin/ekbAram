"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_AllOrders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../store */ "./resources/store/index.js");
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
  name: "AllClients",
  data: function data() {
    return {
      results: [],
      allresults: [],
      val: '',
      rev: 0,
      exp: 0
    };
  },
  methods: {
    edit: function edit(id) {
      this.$router.push({
        name: 'edit',
        params: {
          id: id
        }
      });
    },
    getOrders: function getOrders() {
      var _this = this;

      axios.get('/api/order/' + _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.auth.user.id + '/' + _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.auth.role).then(function (res) {
        _this.results = res.data;
        _this.allresults = res.data;

        _this.countRevExp(res.data);
      });
    },
    filter: function filter(val) {
      var _this2 = this;

      if (val === '') {
        this.results = this.allresults;
        this.countRevExp(this.results);
      } else {
        this.results = this.allresults;

        var filterValue = function filterValue(client) {
          return _this2.$data.results.filter(function (data) {
            return data.client.toLowerCase().indexOf(client.toLowerCase()) > -1;
          });
        };

        this.results = filterValue(val);
        this.countRevExp(this.results);
      }
    },
    show: function show(param) {
      UIkit.modal("#modal-change").show();
    },
    deleteOrder: function deleteOrder(param, cnt) {
      var _this3 = this;

      axios.post('/api/order/delete/' + param).then(function (res) {
        UIkit.notification({
          message: 'Заказ удален'
        });

        _this3.results.splice(cnt, 1);

        _this3.allresults.splice(cnt, 1);
      })["catch"](function (_ref) {
        var data = _ref.response.data;
        UIkit.notification({
          message: 'Ошибка удаления. Обратитесь к администратору'
        });
      });
    },
    countRevExp: function countRevExp(arr) {
      var _this4 = this;

      this.exp = 0;
      this.rev = 0;
      arr.forEach(function (x) {
        _this4.rev += x.revenue;
        _this4.exp += x.expence;
      });
    }
  },
  mounted: function mounted() {
    this.getOrders();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/AllOrders.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/AllOrders.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllOrders.vue?vue&type=template&id=66646a40&scoped=true& */ "./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true&");
/* harmony import */ var _AllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllOrders.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66646a40",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/AllOrders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllOrders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllOrders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllOrders_vue_vue_type_template_id_66646a40_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllOrders.vue?vue&type=template&id=66646a40&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllOrders.vue?vue&type=template&id=66646a40&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Список всех заказов"),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "uk-card-default uk-card-small uk-card-hover" },
        [
          _c("div", { staticClass: "uk-card-header" }, [
            _c("div", { staticClass: "uk-grid uk-grid-small" }, [
              _c("div", { staticClass: "uk-width-1-1 uk-grid" }, [
                _c("div", { staticClass: "uk-inline uk-width-expand" }, [
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
                    attrs: { type: "text", placeholder: "Поиск по Клиенту" },
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
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-top": "6px" } }, [
                  _c("span", { staticClass: "uk-text-bold" }, [
                    _vm._v(" REVENUE: " + _vm._s(_vm.rev) + " "),
                    _c("span", { staticClass: "uk-text-muted" }, [_vm._v("|")]),
                    _vm._v(" EXPENSE: " + _vm._s(_vm.exp) + " "),
                  ]),
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
                          _c("td", [_vm._v(_vm._s(result.number || "-"))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "uk-text-nowrap" }, [
                            _vm._v(_vm._s(result.datestart || "-")),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.client || "-"))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(result.revenue || "-") +
                                " " +
                                _vm._s(result.currency)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(result.expence || "-") +
                                " " +
                                _vm._s(result.currency)
                            ),
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(result.revenue - result.expence || "-") +
                                " " +
                                _vm._s(result.currency)
                            ),
                          ]),
                          _vm._v(" "),
                          _vm._m(1, true),
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
                                      return _vm.edit(result.id)
                                    },
                                  },
                                }),
                              ]),
                              _vm._v(" "),
                              _vm.$store.state.auth.role === 1
                                ? _c("li", [
                                    _c("a", {
                                      attrs: {
                                        "uk-icon": "icon: trash",
                                        "uk-tooltip":
                                          "title: Удалить; pos: bottom",
                                      },
                                      on: {
                                        click: function ($event) {
                                          $event.preventDefault()
                                          return _vm.deleteOrder(result.id, cnt)
                                        },
                                      },
                                    }),
                                  ])
                                : _vm._e(),
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
        _c("th", {}, [_vm._v("IPO Ref.")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("IPO Date")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Customer")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Revenue")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Expense")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Income")]),
        _vm._v(" "),
        _c("th", { staticClass: "uk-table-shrink uk-text-nowrap" }, [
          _vm._v("DOCUMENTS"),
        ]),
        _vm._v(" "),
        _c("th", { staticClass: "uk-table-shrink uk-text-nowrap" }, [
          _vm._v("ACTIONS"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("td", { staticClass: "uk-width-1-6" }, [
      _c("ul", { staticClass: "uk-iconnav" }, [
        _c("li", [
          _c("button", { staticClass: "uk-button uk-button-link" }, [
            _vm._v("IPO"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("button", { staticClass: "uk-button uk-button-link" }, [
            _vm._v("OPF"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("button", { staticClass: "uk-button uk-button-link" }, [
            _vm._v("OP0"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("button", { staticClass: "uk-button uk-button-link" }, [
            _vm._v("OPL"),
          ]),
        ]),
        _vm._v(" "),
        _c("li", [
          _c("button", { staticClass: "uk-button uk-button-link" }, [
            _vm._v("OSI"),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);