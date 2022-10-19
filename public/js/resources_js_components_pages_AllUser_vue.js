"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_AllUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AllUser",
  data: function data() {
    return {
      name: '',
      phone: '',
      prefix: '',
      role: '',
      result: '',
      results: [],
      allresults: [],
      val: '',
      roles: ['Администратор', 'Менеджер'],
      checkedTel: '',
      password: '',
      id: '',
      fields: {
        'ID': 'id',
        'ФИО': 'name',
        'Телефон': 'phone',
        'Роль': 'role',
        'Префикс': 'prefix'
      }
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      axios.get('/api/users').then(function (res) {
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
      this.name = param[0];
      this.phone = param[1];
      this.prefix = param[2];
      this.role = param[3];
      this.id = param[4];
    },
    checkPhone: function checkPhone() {
      var _this3 = this;

      axios.post('/api/check/phone', {
        Phone: this.phone
      }).then(function (res) {
        if (res.data.length === 0) {
          _this3.$data.checkedTel = 'uk-form-success';
        } else {
          _this3.$data.checkedTel = 'uk-form-danger';
          UIkit.notification({
            message: 'Пользователь с данным номером существует в системе'
          });
        }
      })["catch"](function (error) {
        UIkit.notification({
          message: error,
          status: 'danger'
        });
      });
    },
    updateUser: function updateUser() {
      var _this4 = this;

      axios.post('/api/users/update', {
        id: this.id,
        name: this.name,
        password: this.password || 'null',
        phone: this.phone,
        prefix: this.prefix,
        role: this.role
      }).then(function (res) {
        UIkit.modal("#modal-change").hide();
        UIkit.notification({
          message: 'Пользователь обновлен'
        });
      })["catch"](function (_ref) {
        var data = _ref.response.data;
        UIkit.notification({
          message: 'Ошибка изменения. Обратитесь к администратору'
        });
      })["finally"](function () {
        UIkit.modal("#modal-change").hide();

        _this4.getUsers();
      });
    },
    deleteUser: function deleteUser(param) {
      var _this5 = this;

      axios.post('/api/users/delete', {
        id: param[0],
        name: 'null',
        password: 'null',
        phone: 'null',
        prefix: 'null',
        role: 0
      }).then(function (res) {
        UIkit.notification({
          message: 'Пользователь удален'
        });

        _this5.results.splice(param[1], 1);

        _this5.allresults.splice(param[1], 1);
      })["catch"](function (_ref2) {
        var data = _ref2.response.data;
        UIkit.notification({
          message: 'Ошибка удаления. Обратитесь к администратору'
        });
      })["finally"](function () {
        UIkit.modal("#modal-change").hide();

        _this5.getUsers();
      });
    }
  },
  mounted: function mounted() {
    axios.get('/sanctum/csrf-cookie');
    this.getUsers();
  }
});

/***/ }),

/***/ "./resources/js/components/pages/AllUser.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/AllUser.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllUser.vue?vue&type=template&id=0ebbf634&scoped=true& */ "./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true&");
/* harmony import */ var _AllUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllUser.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AllUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0ebbf634",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/AllUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AllUser_vue_vue_type_template_id_0ebbf634_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllUser.vue?vue&type=template&id=0ebbf634&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AllUser.vue?vue&type=template&id=0ebbf634&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        _vm._v("Список всех пользователей"),
      ]),
      _vm._v(" "),
      _c("div", { attrs: { id: "modal-change", "uk-modal": "" } }, [
        _c(
          "div",
          {
            staticClass:
              "uk-modal-dialog uk-modal-body uk-margin-auto-vertical",
          },
          [
            _c("div", { staticClass: "uk-margin uk-modal-container-large" }, [
              _c("h3", { staticClass: "uk-card-title" }, [
                _vm._v("Редактирование пользователя"),
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
                          return _vm.updateUser()
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
                                      { staticClass: "uk-width-1-3@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("ФИО")]
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
                                            placeholder: "",
                                            required: "",
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
                                      { staticClass: "uk-width-1-3@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Телефон")]
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
                                          class: _vm.checkedTel,
                                          attrs: {
                                            type: "text",
                                            placeholder: "",
                                            required: "",
                                            pattern: "\\d+",
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
                                      { staticClass: "uk-width-1-3@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Пароль")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.password,
                                              expression: "password",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            required: "",
                                            placeholder: "",
                                          },
                                          domProps: { value: _vm.password },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.password = $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-3@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Префикс")]
                                        ),
                                        _vm._v(" "),
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.prefix,
                                              expression: "prefix",
                                            },
                                          ],
                                          staticClass: "uk-input",
                                          attrs: {
                                            type: "text",
                                            placeholder: "",
                                            required: "",
                                          },
                                          domProps: { value: _vm.prefix },
                                          on: {
                                            input: function ($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.prefix = $event.target.value
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "uk-width-1-3@s" },
                                      [
                                        _c(
                                          "label",
                                          { staticClass: "uk-form-label" },
                                          [_vm._v("Роль")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.role,
                                                expression: "role",
                                              },
                                            ],
                                            staticClass: "uk-select",
                                            attrs: { required: "" },
                                            on: {
                                              change: function ($event) {
                                                var $$selectedVal =
                                                  Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function (o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function (o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                _vm.role = $event.target
                                                  .multiple
                                                  ? $$selectedVal
                                                  : $$selectedVal[0]
                                              },
                                            },
                                          },
                                          [
                                            _c(
                                              "option",
                                              { attrs: { value: "1" } },
                                              [_vm._v("Админ")]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "option",
                                              { attrs: { value: "2" } },
                                              [_vm._v("Менеджер")]
                                            ),
                                          ]
                                        ),
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
                    attrs: { type: "text", placeholder: "Поиск по ФИО" },
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
                          _c("td", { staticClass: "uk-text-nowrap" }, [
                            _vm._v(_vm._s(result.phone || "-")),
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(result.prefix || "-"))]),
                          _vm._v(" "),
                          _c("td", { staticClass: "uk-text-nowrap" }, [
                            _vm._v(_vm._s(_vm.roles[result.role - 1])),
                          ]),
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
                                        result.name,
                                        result.phone,
                                        result.prefix,
                                        result.role,
                                        result.id,
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
                                      return _vm.deleteUser([result.id, cnt])
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
        _c("th", {}, [_vm._v("ФИО")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Телефон")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Префикс")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Роль")]),
        _vm._v(" "),
        _c("th", {}, [_vm._v("Действия")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);