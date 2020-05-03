webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/StoreCard.js":
/*!*********************************!*\
  !*** ./components/StoreCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Distance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Distance */ "./components/Distance.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "./node_modules/@material-ui/core/esm/Dialog/index.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "./node_modules/@material-ui/icons/ArrowBack.js");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_15__);





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/StoreCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }












var StoreCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(StoreCard, _Component);

  var _super = _createSuper(StoreCard);

  function StoreCard(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StoreCard);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StoreCard, [{
    key: "handleClick",
    value: function handleClick() {
      window.open("https://wa.me/573125533860?text=¡Hola!%20Quiero%20hacer%20un%20pedido.");
    }
  }, {
    key: "handleFavorite",
    value: function handleFavorite() {
      alert("Esta funcionalidad todavía está en desarollo :)");
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, this.props.store && __jsx("div", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 35
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1265835017",
        __self: this
      }, ".root.jsx-1265835017{height:90%;width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ1csQUFHMkIsV0FDRCxVQUNiIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuLi9jb21wb25lbnRzL0Rpc3RhbmNlJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcblxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYidcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJ1xuXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrJ1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnXG5cbmNsYXNzIFN0b3JlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKVxuICB7XG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL3dhLm1lLzU3MzEyNTUzMzg2MD90ZXh0PcKhSG9sYSElMjBRdWllcm8lMjBoYWNlciUyMHVuJTIwcGVkaWRvLlwiKTtcbiAgfVxuXG4gIGhhbmRsZUZhdm9yaXRlKClcbiAge1xuICAgIGFsZXJ0KFwiRXN0YSBmdW5jaW9uYWxpZGFkIHRvZGF2w61hIGVzdMOhIGVuIGRlc2Fyb2xsbyA6KVwiKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PnsodGhpcy5wcm9wcy5zdG9yZSAmJiAoPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8RGlhbG9nIFxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBcbiAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgZnVsbFNjcmVlblxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OlwiMTAwJVwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6JyNmZmNmMDInfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJScsIGJhY2tncm91bmQ6J2xpZ2h0Z3JleSd9fT5cbiAgICAgICAgICAgICAgPE1hcCBcbiAgICAgICAgICAgICAgICBzdG9yZXM9e251bGx9XG4gICAgICAgICAgICAgICAgcG9zPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIG9wZW5TZWxlY3RlZFN0b3JlPXsobmV3U3RvcmUpPT50aGlzLnByb3BzLm9wZW5TZWxlY3RlZFN0b3JlKG5ld1N0b3JlKX0gIFxuICAgICAgICAgICAgICAgIGh0bWxJZD1cInNlYXJjaC1tYXBcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkU3RvcmU9e251bGx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J3JlbGF0aXZlJ319PlxuICAgICAgICAgICAgICA8RmFiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jbG9zZSgpfSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiMTBweFwiLCBsZWZ0OlwiMTVweFwifX0+XG4gICAgICAgICAgICAgICAgPEFycm93QmFja0ljb24gLz5cbiAgICAgICAgICAgICAgPC9GYWI+XG4gICAgICAgICAgICAgIDxGYWIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUZhdm9yaXRlKCl9IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6XCIxMHB4XCIsIHJpZ2h0OlwiMTVweFwifX0+XG4gICAgICAgICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6J2ZsZXgnLCBhbGlnbkl0ZW1zOidjZW50ZXInLCBwYWRkaW5nOicyMHB4J319PlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwiVGllbmRhXCIgc3JjPVwiL3N0YXRpYy9pbWFnZXMvYXZhdGFyLzEuanBnXCIgc3R5bGU9e3t3aWR0aDonNzVweCcsIGhlaWdodDonNzVweCd9fS8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6JzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5Ub3A6JzAnLCBtYXJnaW5Cb3R0b206JzAnfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0b3JlLm5hbWV9XG4gICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPnt0aGlzLnByb3BzLnN0b3JlLmFkZHJlc3N9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgPENoaXAgbGFiZWw9e3RoaXMucHJvcHMuc3RvcmUudHlwZSE9bnVsbD90aGlzLnByb3BzLnN0b3JlLnR5cGU6XCJUaWVuZGFcIn0gc3R5bGU9e3ttYXJnaW5Ub3A6JzVweCcsIG1hcmdpbkJvdHRvbTonNXB4J319PjwvQ2hpcD5cbiAgICAgICAgICAgICAgICAgIDxDaGlwIFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17TWF0aC5yb3VuZChkaXN0YW5jZShcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnN0b3JlLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLmxhdCxcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmxvY2F0aW9uLmxuZyxcbiAgICAgICAgICAgICAgICAgICAgKSoxMDApLzEwMCArIFwiIGttXCJ9IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjonNXB4J319PjwvQ2hpcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46JzEwcHgnLCB0ZXh0QWxpZ246J2NlbnRlcid9fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpPT50aGlzLmhhbmRsZUNsaWNrKCl9PjxzbWFsbD5IYWNlciBwZWRpZG88L3NtYWxsPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgICA8L2Rpdj4pKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNhcmQ7XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/StoreCard.js */"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("div", {
        style: {
          height: '100%',
          background: 'lightgrey'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_8__["default"], {
        stores: null,
        pos: this.props.location,
        openSelectedStore: function openSelectedStore(newStore) {
          return _this.props.openSelectedStore(newStore);
        },
        htmlId: "search-map",
        selectedStore: null,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }
      })), __jsx("div", {
        style: {
          display: 'relative'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "small",
        "aria-label": "menu",
        onClick: function onClick() {
          return _this.props.close();
        },
        style: {
          position: "absolute",
          top: "10px",
          left: "15px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 17
        }
      })), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_10__["default"], {
        size: "small",
        "aria-label": "menu",
        onClick: function onClick() {
          return _this.handleFavorite();
        },
        style: {
          position: "absolute",
          top: "10px",
          right: "15px"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      })), __jsx("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '20px'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        alt: "Tienda",
        src: "/static/images/avatar/1.jpg",
        style: {
          width: '75px',
          height: '75px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 17
        }
      }), __jsx("div", {
        style: {
          marginLeft: '20px'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 17
        }
      }, __jsx("h2", {
        style: {
          marginTop: '0',
          marginBottom: '0'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 19
        }
      }, this.props.store.name), __jsx("small", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 19
        }
      }, this.props.store.address), __jsx("br", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 19
        }
      }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: this.props.store.type != null ? this.props.store.type : "Tienda",
        style: {
          marginTop: '5px',
          marginBottom: '5px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 19
        }
      }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: Math.round(Object(_components_Distance__WEBPACK_IMPORTED_MODULE_7__["default"])(this.props.store.lat, this.props.store.lng, this.props.location.lat, this.props.location.lng) * 100) / 100 + " km",
        style: {
          margin: '5px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }))), __jsx("div", {
        style: {
          margin: '10px',
          textAlign: 'center'
        },
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
        variant: "contained",
        color: "primary",
        onClick: function onClick() {
          return _this.handleClick();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 19
        }
      }, __jsx("small", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 96
        }
      }, "Hacer pedido"))))))));
    }
  }]);

  return StoreCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StoreCard);

/***/ })

})
//# sourceMappingURL=index.js.16c1b7719a821ffa0c99.hot-update.js.map