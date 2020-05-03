webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SearchCard.js":
/*!**********************************!*\
  !*** ./components/SearchCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Distance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Distance */ "./components/Distance.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11__);





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/SearchCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var SearchCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SearchCard, _Component);

  var _super = _createSuper(SearchCard);

  function SearchCard(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchCard);

    _this = _super.call(this, props);
    _this.state = {
      stores: [],
      selectedCategories: _this.categories,
      onlyFavorites: false,
      categories: [{
        type: 'pharmacy',
        name: "Droguería",
        selected: true
      }, {
        type: 'bakery',
        name: "Panadería",
        selected: true
      }, {
        type: 'vegetableStore',
        name: "Fruver",
        selected: true
      }, {
        type: 'hardwareStore',
        name: "Ferretería",
        selected: true
      }, {
        type: 'butchery',
        name: "Carnicería",
        selected: true
      }, {
        type: 'drycleaner',
        name: "Lavandería",
        selected: true
      }, {
        type: 'stationeryStore',
        name: "Papelería",
        selected: true
      }, {
        type: 'petStore',
        name: "Mascotas",
        selected: true
      }, {
        type: 'liquorStore',
        name: "Licores",
        selected: true
      }, {
        type: 'fastFood',
        name: "Comida Rápida",
        selected: true
      }, {
        type: 'restaurant',
        name: "Restaurante",
        selected: true
      }, {
        type: 'store',
        name: "Tienda",
        selected: true
      }, {
        type: 'groeceryStore',
        name: "Supermercado",
        selected: true
      }]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchCard, [{
    key: "handleClickFilter",
    value: function handleClickFilter() {
      alert(":) ya mero mero");
    }
  }, {
    key: "handleChipClick",
    value: function handleChipClick(index) {
      var newCategories = this.state.categories;

      if (newCategories[index].selected) {
        newCategories[index].selected = false;
      } else {
        newCategories[index].selected = true;
      }

      this.setState({
        categories: newCategories
      });
    }
  }, {
    key: "handleSelectAllClick",
    value: function handleSelectAllClick(index) {}
  }, {
    key: "handleFavoritesOnlyClick",
    value: function handleFavoritesOnlyClick(index) {
      this.setState({
        onlyFavorites: !this.state.onlyFavorites
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 7
        }
      }, this.props.stores && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 36
        }
      }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], {
        "aria-labelledby": "simple-dialog-title",
        open: this.props.open,
        fullScreen: true,
        style: {
          height: "100%",
          position: "relative",
          background: '#ffcf02'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          height: '100%',
          background: 'lightgrey'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }), __jsx("div", {
        style: {
          display: 'relative'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "small",
        "aria-label": "menu",
        onClick: function onClick() {
          return _this2.props.close();
        },
        style: {
          position: "absolute",
          top: "10px",
          left: "15px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      })), __jsx("div", {
        style: {
          margin: '10px',
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 15
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 17
        }
      }, "Selecciona una tienda en el mapa"), __jsx("h4", {
        style: {
          marginBottom: '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, "Filtros"), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: this.state.onlyFavorites ? "default" : "outlined",
        size: "small",
        label: "Solo favoritos",
        color: "secondary",
        clickable: true,
        icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }
        }),
        onClick: function onClick() {
          return _this2.handleFavoritesOnlyClick();
        },
        style: {
          margin: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: this.state.onlyFavorites ? "default" : "outlined",
        size: "small",
        label: "Pedidos anteriores",
        clickable: true,
        icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_11___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }
        }),
        onClick: function onClick() {
          return _this2.handleFavoritesOnlyClick();
        },
        style: {
          margin: '10px',
          color: '#ffeb3b'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }
      }), this.state.categories.map(function (item, index) {
        return __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
          key: item.type,
          variant: item.selected ? "default" : "outlined",
          size: "small",
          label: item.name,
          clickable: true,
          color: "primary",
          onClick: function onClick(index) {
            return _this2.handleChipClick(index);
          },
          style: {
            margin: '2px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 19
          }
        });
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        size: "small",
        label: "Seleccionar todo/ninguno",
        clickable: true,
        color: "default",
        onClick: function onClick() {
          return _this2.handleSelectAllClick();
        },
        style: {
          margin: '8px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 17
        }
      }))))));
    }
  }]);

  return SearchCard;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SearchCard);

/***/ })

})
//# sourceMappingURL=index.js.c6a72f239cfdff84e94f.hot-update.js.map