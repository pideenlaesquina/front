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
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1764847513",
        __self: this
      }, ".root.jsx-1764847513{background:white;padding-left:15px;padding-right:15px;padding-top:0px;padding-bottom:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDVyxBQUcrQixpQkFDQyxrQkFDQyxtQkFDSCxnQkFDSSxvQkFDRixrQkFDbkIiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXG5cblxuY2xhc3MgV2VsbGNvbWVTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIHN0b3JlczpudWxsXG4gICAgfVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG5cbiAgICBjb25zdCBjb25UaWVuZGFzID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIGhyZWY9XCIvc2VhcmNoXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBIYWNlciBwZWRpZG8gIFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICBjb25zdCBzaW5UaWVuZGFzID0gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPnBlcm8gdGUgdGVuZW1vcyBjdWJpZXJ0by4uLjwvaDM+XG4gICAgICAgIDxzcGFuPjxzbWFsbD5QdWVkZXMgaGFjZXIgdW4gcGVkaWRvIGVuIGN1YWxxdWllciBlc3RhYmxlY2ltaWVudG8gaW5jbHVzbyBzaSBubyBlc3TDoSBsaXN0YWRvLCBub3NvdHJvcyBub3MgZW5jYXJnYW1vcy48L3NtYWxsPjwvc3Bhbj5cbiAgICAgICAgPHA+PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+PHNtYWxsPkhhY2VyIHBlZGlkbzwvc21hbGw+PC9CdXR0b24+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLnJvb3R7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxoMT7CoUhvbGF7dGhpcy5wcm9wcy5uYW1lfSE8L2gxPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxzbWFsbD5UdSBkaXJlY2Npw7NuOiB7dGhpcy5wcm9wcy5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8QnV0dG9uPjxzbWFsbD5DYW1iaWFyPC9zbWFsbD48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246XCJjb2x1bW5cIiwganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgd2lkdGg6JzEwMCUnLCBtYXJnaW5Ub3A6JzEwcHgnfX0+XG4gICAgICAgICAgICAgIDxTdG9yZWZyb250SWNvbiBmb250U2l6ZT1cImxhcmdlXCIvPlxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3ttYXJnaW5Cb3R0b206JzAnLCBtYXJnaW5Ub3A6JzVweCd9fT4mbmJzcDt7dGhpcy5wcm9wcy5udW1TdG9yZXN9Jm5ic3A7VGllbmRhczwvaDI+XG4gICAgICAgICAgICAgIDxzcGFuPiBhICBtZW5vcyBkZSAxIGttPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7KHRoaXMucHJvcHMubnVtU3RvcmVzPjA/Y29uVGllbmRhczpzaW5UaWVuZGFzKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VsbGNvbWVTZWN0aW9uO1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/WelcomeSection.js */"), __jsx("div", {
        className: "jsx-1764847513" + " " + "root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("h1", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, "\xA1Hola", this.props.name, "!"), __jsx("span", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, __jsx("small", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }
      }, "Tu direcci\xF3n: ", this.props.address), __jsx("br", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }
      }, __jsx("small", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
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
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }
      }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_8___default.a, {
        fontSize: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 15
        }
      }), __jsx("h2", {
        style: {
          marginBottom: '0',
          marginTop: '5px'
        },
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }, "\xA0", this.props.numStores, "\xA0Tiendas"), __jsx("span", {
        className: "jsx-1764847513",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
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
//# sourceMappingURL=index.js.59a75e367020d3898571.hot-update.js.map