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
      }, __jsx("div", {
        style: {
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }
      }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8___default.a, {
        fontSize: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }
      }), __jsx("h2", {
        style: {
          marginBottom: '0',
          marginTop: '5px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }
      }, "\xA0", this.props.numStores, "\xA0Tiendas"), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }
      }, " a  menos de 1 km")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
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
          lineNumber: 27,
          columnNumber: 11
        }
      }, "Hacer pedido")));

      var sinTiendas = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }
      }, " No encontramos establecimientos a menos de 1 km de u ubicaci\xF3n")), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, "Puedes hacer un pedido en cualquier establecimiento incluso si no est\xE1 listado, nosotros nos encargamos."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 12
        }
      }, "(tambi\xE9n puedes cambiar de \xFAbicaci\xF3n ingresando una nueva direcci\xF3n)")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "contained",
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 53
        }
      }, "Hacer pedido")));

      return __jsx("div", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2296030621",
        __self: this
      }, ".root.jsx-2296030621{height:350px;background:white;padding-left:15px;padding-right:15px;padding-top:0px;padding-bottom:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1EVyxBQUcyQixhQUNJLGlCQUNDLGtCQUNDLG1CQUNILGdCQUNJLG9CQUNGLGtCQUNuQiIsImZpbGUiOiIvaG9tZS9jcm1vY2svcGlkZWVubGFlcXVpbmEvZnJvbnQvY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBTdG9yZWZyb250SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RvcmVmcm9udCdcblxuXG5jbGFzcyBXZWxsY29tZVNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxuICB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZT0ge1xuICAgICAgc3RvcmVzOm51bGxcbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcblxuICAgIGNvbnN0IGNvblRpZW5kYXMgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOlwiY29sdW1uXCIsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIHdpZHRoOicxMDAlJywgbWFyZ2luVG9wOicxMHB4J319PlxuICAgICAgICAgIDxTdG9yZWZyb250SWNvbiBmb250U2l6ZT1cImxhcmdlXCIvPlxuICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbkJvdHRvbTonMCcsIG1hcmdpblRvcDonNXB4J319PiZuYnNwO3t0aGlzLnByb3BzLm51bVN0b3Jlc30mbmJzcDtUaWVuZGFzPC9oMj5cbiAgICAgICAgICA8c3Bhbj4gYSAgbWVub3MgZGUgMSBrbTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8cD5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgaHJlZj1cIi9zZWFyY2hcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEhhY2VyIHBlZGlkbyAgXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIGNvbnN0IHNpblRpZW5kYXMgPSAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+PHNtYWxsPiBObyBlbmNvbnRyYW1vcyBlc3RhYmxlY2ltaWVudG9zIGEgbWVub3MgZGUgMSBrbSBkZSB1IHViaWNhY2nDs248L3NtYWxsPjwvaDM+XG4gICAgICAgIDxwPlB1ZWRlcyBoYWNlciB1biBwZWRpZG8gZW4gY3VhbHF1aWVyIGVzdGFibGVjaW1pZW50byBpbmNsdXNvIHNpIG5vIGVzdMOhIGxpc3RhZG8sIG5vc290cm9zIG5vcyBlbmNhcmdhbW9zLjwvcD5cbiAgICAgICAgPHA+PHNtYWxsPih0YW1iacOpbiBwdWVkZXMgY2FtYmlhciBkZSDDumJpY2FjacOzbiBpbmdyZXNhbmRvIHVuYSBudWV2YSBkaXJlY2Npw7NuKTwvc21hbGw+PC9wPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj48c21hbGw+SGFjZXIgcGVkaWRvPC9zbWFsbD48L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5yb290e1xuICAgICAgICAgICAgICBoZWlnaHQ6MzUwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxoMT7CoUhvbGF7dGhpcy5wcm9wcy5uYW1lfSE8L2gxPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxzbWFsbD5UdSBkaXJlY2Npw7NuOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8QnV0dG9uPjxzbWFsbD5DYW1iaWFyPC9zbWFsbD48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHsodGhpcy5wcm9wcy5udW1TdG9yZXM+MD9jb25UaWVuZGFzOnNpblRpZW5kYXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxsY29tZVNlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/WelcomeSection.js */"), __jsx("div", {
        className: "jsx-2296030621" + " " + "root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }
      }, "\xA1Hola", this.props.name, "!"), __jsx("span", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }
      }, __jsx("small", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }, "Tu direcci\xF3n: ", this.props.address), __jsx("br", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }
      }, __jsx("small", {
        className: "jsx-2296030621",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 23
        }
      }, "Cambiar"))), this.props.numStores > 0 ? conTiendas : sinTiendas));
    }
  }]);

  return WellcomeSection;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WellcomeSection);

/***/ })

})
//# sourceMappingURL=index.js.ae97d5cb7c1e2643a416.hot-update.js.map