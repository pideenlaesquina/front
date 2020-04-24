webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WelcomeSection.js":
/*!**************************************!*\
  !*** ./components/WelcomeSection.js ***!
  \**************************************/
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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Storefront */ "./node_modules/@material-ui/icons/Storefront.js");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/WelcomeSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var WellcomeSection = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(WellcomeSection, _Component);

  var _super = _createSuper(WellcomeSection);

  function WellcomeSection(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WellcomeSection);

    _this = _super.call(this, props);
    _this.state = {
      stores: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WellcomeSection, [{
    key: "render",
    value: function render() {
      var conTiendas = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7
        }
      }, __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        color: "primary",
        size: "large",
        href: "/search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }, "Hacer pedido")));

      var sinTiendas = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, "pero te tenemos cubierto..."), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 15
        }
      }, "Puedes hacer un pedido en cualquier establecimiento incluso si no est\xE1 listado, nosotros nos encargamos.")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 12
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 56
        }
      }, "Hacer pedido"))));

      return __jsx("div", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2296030621",
        __self: this
      }, ".root.jsx-2296030621{height:350px;background:white;padding-left:15px;padding-right:15px;padding-top:0px;padding-bottom:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDVyxBQUcyQixhQUNJLGlCQUNDLGtCQUNDLG1CQUNILGdCQUNJLG9CQUNGLGtCQUNuQiIsImZpbGUiOiIvaG9tZS9jcm1vY2svcGlkZWVubGFlcXVpbmEvZnJvbnQvY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTdG9yZWZyb250SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RvcmVmcm9udCdcblxuXG5jbGFzcyBXZWxsY29tZVNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxuICB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgc3RvcmVzOm51bGxcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNvblRpZW5kYXMgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgaHJlZj1cIi9zZWFyY2hcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhhY2VyIHBlZGlkbyAgXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpblRpZW5kYXMgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+cGVybyB0ZSB0ZW5lbW9zIGN1YmllcnRvLi4uPC9oMz5cbiAgICAgICAgPHNwYW4+PHNtYWxsPlB1ZWRlcyBoYWNlciB1biBwZWRpZG8gZW4gY3VhbHF1aWVyIGVzdGFibGVjaW1pZW50byBpbmNsdXNvIHNpIG5vIGVzdMOhIGxpc3RhZG8sIG5vc290cm9zIG5vcyBlbmNhcmdhbW9zLjwvc21hbGw+PC9zcGFuPlxuICAgICAgICA8cD48QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj48c21hbGw+SGFjZXIgcGVkaWRvPC9zbWFsbD48L0J1dHRvbj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgaGVpZ2h0OjM1MHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6MTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDoxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDowcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjEwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG4gICAgICAgICAgICA8aDE+wqFIb2xhe3RoaXMucHJvcHMubmFtZX0hPC9oMT5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8c21hbGw+VHUgZGlyZWNjacOzbjoge3RoaXMucHJvcHMuYWRkcmVzc308L3NtYWxsPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPEJ1dHRvbj48c21hbGw+Q2FtYmlhcjwvc21hbGw+PC9CdXR0b24+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOicxMDAlJywgbWFyZ2luVG9wOicxMHB4J319PlxuICAgICAgICAgICAgICA8U3RvcmVmcm9udEljb24gZm9udFNpemU9XCJsYXJnZVwiLz5cbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7bWFyZ2luQm90dG9tOicwJywgbWFyZ2luVG9wOic1cHgnfX0+Jm5ic3A7e3RoaXMucHJvcHMubnVtU3RvcmVzfSZuYnNwO1RpZW5kYXM8L2gyPlxuICAgICAgICAgICAgICA8c3Bhbj4gYSAgbWVub3MgZGUgMSBrbTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgeyh0aGlzLnByb3BzLm51bVN0b3Jlcz4wP2NvblRpZW5kYXM6c2luVGllbmRhcyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlbGxjb21lU2VjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/WelcomeSection.js */"), __jsx("div", {
        className: "jsx-2296030621" + " " + "root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, "\xA1Hola", this.props.name, "!"), __jsx("span", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, __jsx("small", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }, "Tu direcci\xF3n: ", this.props.address), __jsx("br", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }
      }, __jsx("small", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 23
        }
      }, "Cambiar"))), __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '10px'
        },
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8___default.a, {
        fontSize: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }), __jsx("h2", {
        style: {
          marginBottom: '0',
          marginTop: '5px'
        },
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }, "\xA0", this.props.numStores, "\xA0Tiendas"), __jsx("span", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }, " a  menos de 1 km")), this.props.numStores > 0 ? conTiendas : sinTiendas));
    }
  }]);

  return WellcomeSection;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WellcomeSection);

/***/ })

})
//# sourceMappingURL=index.js.606f9937ee254902db4f.hot-update.js.map