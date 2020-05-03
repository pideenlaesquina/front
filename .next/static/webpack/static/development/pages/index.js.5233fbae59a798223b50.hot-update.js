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
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/History */ "./node_modules/@material-ui/icons/History.js");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_12__);





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
      storesToShow: [],
      selectAll: false,
      updateNeeded: false,
      onlyFavorites: false,
      onlyHistory: false,
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
    key: "handleChipClick",
    value: function handleChipClick(index) {
      var newCategories = JSON.parse(JSON.stringify(this.state.categories));

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
    value: function handleSelectAllClick() {
      var newCategories = JSON.parse(JSON.stringify(this.state.categories));
      var newSelectAll = JSON.parse(JSON.stringify(this.state.selectAll));

      if (this.state.selectAll) {
        for (var i = 0; i < newCategories.length; i++) {
          newCategories[i].selected = true;
        }

        newSelectAll = false;
      } else {
        for (var _i = 0; _i < newCategories.length; _i++) {
          newCategories[_i].selected = false;
        }

        newSelectAll = true;
      }

      this.setState({
        categories: newCategories,
        selectAll: newSelectAll
      });
    }
  }, {
    key: "handleFavoritesOnlyClick",
    value: function handleFavoritesOnlyClick(index) {
      this.setState({
        onlyFavorites: !this.state.onlyFavorites
      });
    }
  }, {
    key: "handleHistoryOnlyClick",
    value: function handleHistoryOnlyClick(index) {
      this.setState({
        onlyHistory: !this.state.onlyHistory
      });
    }
  }, {
    key: "activeCategories",
    value: function activeCategories() {
      var list = [];

      for (var i = 0; i < this.state.categories.length; i++) {
        var element = this.state.categories[i];

        if (element.selected) {
          list.push(element.type);
        }
      }

      return list;
    }
  }, {
    key: "updateStoreList",
    value: function updateStoreList() {
      var activeCategories = this.activeCategories();
      var newStoresToShow = [];

      for (var i = 0; i < this.props.stores.length; i++) {
        var element = this.props.stores[i];
        var mustBeIncluded = true;

        if (activeCategories.includes(element.type)) {
          mustBeIncluded = false;
        }

        if (!mustBeIncluded && this.state.onlyFavorites) {
          if (!this.props.favoriteStores.includes(element.id)) {
            mustBeIncluded = false;
          }
        }

        if (!mustBeIncluded && this.state.onlyHistory) {
          if (!this.props.historyStores.includes(element.id)) {
            mustBeIncluded = false;
          }
        }

        if (mustBeIncluded) {
          newStoresToShow.push(element);
        }
      }

      this.setState({
        updateNeeded: false,
        storesToShow: newStoresToShow
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log(JSON.stringify(prevState.categories));
      console.log(JSON.stringify(this.state.categories));

      if (JSON.stringify(prevState.categories) !== JSON.stringify(this.state.categories) || prevState.onlyHistory !== this.state.onlyHistory || prevState.onlyFavorites !== this.state.onlyFavorites) {
        this.setState({
          updateNeeded: true
        });
      }

      if (this.state.updateNeeded) {
        this.updateStoreList();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 7
        }
      }, this.props.stores && __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
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
          lineNumber: 162,
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
          lineNumber: 168,
          columnNumber: 13
        }
      }), __jsx("div", {
        style: {
          display: 'relative'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
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
          lineNumber: 171,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
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
          lineNumber: 175,
          columnNumber: 15
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 17
        }
      }, "Selecciona una tienda en el mapa"), __jsx("h4", {
        style: {
          marginBottom: '0'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
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
            lineNumber: 184,
            columnNumber: 25
          }
        }),
        onClick: function onClick() {
          return _this2.handleFavoritesOnlyClick();
        },
        style: {
          marginTop: '10px',
          marginBottom: '10px',
          marginRight: '2px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
        variant: this.state.onlyHistory ? "default" : "outlined",
        size: "small",
        label: "Pedidos anteriores",
        clickable: true,
        icon: __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_12___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 25
          }
        }),
        onClick: function onClick() {
          return _this2.handleHistoryOnlyClick();
        },
        style: {
          marginTop: '10px',
          marginBottom: '10px',
          marginLeft: '2px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 17
        }
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
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
          onClick: function onClick() {
            return _this2.handleChipClick(index);
          },
          style: {
            margin: '2px'
          },
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 19
          }
        });
      }), __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210,
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
          lineNumber: 211,
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
//# sourceMappingURL=index.js.5233fbae59a798223b50.hot-update.js.map