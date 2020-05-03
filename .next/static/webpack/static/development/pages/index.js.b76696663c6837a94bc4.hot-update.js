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
      }, ".root.jsx-1265835017{height:90%;width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ1csQUFHMkIsV0FDRCxVQUNiIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuLi9jb21wb25lbnRzL0Rpc3RhbmNlJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcblxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYidcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJ1xuXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrJ1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnXG5cbmNsYXNzIFN0b3JlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKVxuICB7XG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL3dhLm1lLzU3MzEyNTUzMzg2MD90ZXh0PcKhSG9sYSElMjBRdWllcm8lMjBoYWNlciUyMHVuJTIwcGVkaWRvLlwiKTtcbiAgfVxuXG4gIGhhbmRsZUZhdm9yaXRlKClcbiAge1xuICAgIGFsZXJ0KFwiRXN0YSBmdW5jaW9uYWxpZGFkIHRvZGF2w61hIGVzdMOhIGVuIGRlc2Fyb2xsbyA6KVwiKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PnsodGhpcy5wcm9wcy5zdG9yZSAmJiAoPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8RGlhbG9nIFxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBcbiAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgZnVsbFNjcmVlblxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OlwiMTAwJVwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6JyNmZmNmMDInfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJScsIGJhY2tncm91bmQ6J2xpZ2h0Z3JleSd9fT5cbiAgICAgICAgICAgICAgPE1hcCBcbiAgICAgICAgICAgICAgICBzdG9yZXM9e251bGx9XG4gICAgICAgICAgICAgICAgcG9zPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIGh0bWxJZD1cInN0b3JlLW1hcFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZT17dGhpcy5wcm9wcy5zZWxlY3RlZFN0b3JlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgICAgPEZhYiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuY2xvc2UoKX0gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDpcIjEwcHhcIiwgbGVmdDpcIjE1cHhcIn19PlxuICAgICAgICAgICAgICAgIDxBcnJvd0JhY2tJY29uIC8+XG4gICAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgICAgICA8RmFiIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJtZW51XCIgb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVGYXZvcml0ZSgpfSBzdHlsZT17e3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdG9wOlwiMTBweFwiLCByaWdodDpcIjE1cHhcIn19PlxuICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICAgICAgPC9GYWI+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4JywgYWxpZ25JdGVtczonY2VudGVyJywgcGFkZGluZzonMjBweCd9fT5cbiAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD1cIlRpZW5kYVwiIHNyYz1cIi9zdGF0aWMvaW1hZ2VzL2F2YXRhci8xLmpwZ1wiIHN0eWxlPXt7d2lkdGg6Jzc1cHgnLCBoZWlnaHQ6Jzc1cHgnfX0vPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5MZWZ0OicyMHB4J319PlxuICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luVG9wOicwJywgbWFyZ2luQm90dG9tOicwJ319PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdG9yZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5zdG9yZS5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIDxDaGlwIGxhYmVsPXt0aGlzLnByb3BzLnN0b3JlLnR5cGUhPW51bGw/dGhpcy5wcm9wcy5zdG9yZS50eXBlOlwiVGllbmRhXCJ9IHN0eWxlPXt7bWFyZ2luVG9wOic1cHgnLCBtYXJnaW5Cb3R0b206JzVweCd9fT48L0NoaXA+XG4gICAgICAgICAgICAgICAgICA8Q2hpcCBcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e01hdGgucm91bmQoZGlzdGFuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5zdG9yZS5sbmcsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbi5sYXQsXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5sb2NhdGlvbi5sbmcsXG4gICAgICAgICAgICAgICAgICAgICkqMTAwKS8xMDAgKyBcIiBrbVwifSBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46JzVweCd9fT48L0NoaXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOicxMHB4JywgdGV4dEFsaWduOidjZW50ZXInfX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKT0+dGhpcy5oYW5kbGVDbGljaygpfT48c21hbGw+SGFjZXIgcGVkaWRvPC9zbWFsbD48L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlhbG9nPlxuICAgICAgPC9kaXY+KSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RvcmVDYXJkO1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/StoreCard.js */"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        htmlId: "store-map",
        selectedStore: this.props.selectedStore,
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
          lineNumber: 59,
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
          lineNumber: 60,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
          lineNumber: 63,
          columnNumber: 15
        }
      }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_15___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
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
          lineNumber: 66,
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
          lineNumber: 67,
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
          lineNumber: 68,
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
          lineNumber: 69,
          columnNumber: 19
        }
      }, this.props.store.name), __jsx("small", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }, this.props.store.address), __jsx("br", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
          lineNumber: 74,
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
          lineNumber: 75,
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
          lineNumber: 85,
          columnNumber: 15
        }
      }, __jsx("span", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 19
        }
      }, __jsx("small", {
        className: "jsx-1265835017",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
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
//# sourceMappingURL=index.js.b76696663c6837a94bc4.hot-update.js.map