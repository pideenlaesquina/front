webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Magnet.js":
/*!******************************!*\
  !*** ./components/Magnet.js ***!
  \******************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Storefront */ "./node_modules/@material-ui/icons/Storefront.js");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/CreditCard */ "./node_modules/@material-ui/icons/CreditCard.js");
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Magnet.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Magnet = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Magnet, _Component);

  var _super = _createSuper(Magnet);

  function Magnet(props) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Magnet);

    return _super.call(this, props);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Magnet, [{
    key: "handleClick",
    value: function handleClick() {
      this.props.changeSelectedStore(this.props.store);
      this.props.openSelectedStore();
    }
  }, {
    key: "render",
    value: function render() {
      var storeTypes = ["dryCleaner", "stationeryStore", "groceryStore", "fastFoodRestaurant", "restaurant", "hardwareStore", "petStore", "liquorStore", "vegetableStore", "bakery", "pharmacy", "butchery"];
      return __jsx("div", {
        className: "jsx-201863143" + " " + "root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "201863143",
        __self: this
      }, ".center.jsx-201863143{text-align:center;}.sideButton.jsx-201863143{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:2;}.bottom.jsx-201863143{botom:0;left:0;background:gainsboro;height:40px;width:100%;border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.top.jsx-201863143{left:35px;top:-40px;height:80px;width:80px;border-radius:40px;}.butchery.jsx-201863143{background:lightpink;}.pharmacy.jsx-201863143{background:lightcyan;}.bakery.jsx-201863143{background:lavender;}.vegetableStore.jsx-201863143{background:green;}.liquorStore.jsx-201863143{background:deeppink;}.petStore.jsx-201863143{background:peru;}.hardwareStore.jsx-201863143{background:slategrey;}.restaurant.jsx-201863143{background:olivedrab;}.fastFoodRestaurant.jsx-201863143{background:tomato;}.groceryStore.jsx-201863143{background:gold;}.stationeryStore.jsx-201863143{background:steelblue;}.store.jsx-201863143{background:gainsboro;}.dryCleaner.jsx-201863143{background:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL01hZ25ldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1csQUFHaUMsQUFJQSxBQVFWLEFBVUUsQUFRVyxBQUlBLEFBSUQsQUFJSCxBQUlHLEFBSUosQUFJSyxBQUlBLEFBSUgsQUFJRixBQUlLLEFBSUEsQUFJRixRQWpFWixFQVVHLEtBVFcsQ0FxQ3ZCLEFBZ0JBLENBeEJBLENBMUNBLEFBSWUsQUEwRGYsQ0FnQkEsQ0F2RGMsQUFlZCxBQVFBLENBaEJBLEFBSUEsQUFvQkEsQUFJQSxBQVlBLEFBSUEsV0FsRGEsSUFWQyxPQVdPLEtBVlIsV0FDb0IsR0FVakMsNEJBVGtDLEVBWmIsOEJBYXJCLCtEQVp5QixtR0FDZCxVQUNYIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL01hZ25ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IFN0b3JlZnJvbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250J1xuaW1wb3J0IENyZWRpdENhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DcmVkaXRDYXJkJ1xuXG5jbGFzcyBNYWduZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxuICB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVDbGljaygpXG4gIHtcbiAgICB0aGlzLnByb3BzLmNoYW5nZVNlbGVjdGVkU3RvcmUodGhpcy5wcm9wcy5zdG9yZSlcbiAgICB0aGlzLnByb3BzLm9wZW5TZWxlY3RlZFN0b3JlKClcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHN0b3JlVHlwZXMgPSBbXG4gICAgICBcImRyeUNsZWFuZXJcIiwgXG4gICAgICBcInN0YXRpb25lcnlTdG9yZVwiLCBcbiAgICAgIFwiZ3JvY2VyeVN0b3JlXCIsIFxuICAgICAgXCJmYXN0Rm9vZFJlc3RhdXJhbnRcIiwgXG4gICAgICBcInJlc3RhdXJhbnRcIiwgXG4gICAgICBcImhhcmR3YXJlU3RvcmVcIiwgXG4gICAgICBcInBldFN0b3JlXCIsIFxuICAgICAgXCJsaXF1b3JTdG9yZVwiLCBcbiAgICAgIFwidmVnZXRhYmxlU3RvcmVcIiwgXG4gICAgICBcImJha2VyeVwiLCBcbiAgICAgIFwicGhhcm1hY3lcIiwgIFxuICAgICAgXCJidXRjaGVyeVwiXG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5jZW50ZXJ7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLnNpZGVCdXR0b257XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIHotaW5kZXg6MjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvdHRvbXtcbiAgICAgICAgICAgICAgYm90b206IDA7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTsgXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudG9we1xuICAgICAgICAgICAgICBsZWZ0OiAzNXB4O1xuICAgICAgICAgICAgICB0b3A6IC00MHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MHB4OyBcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dGNoZXJ5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodHBpbms7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5waGFybWFjeXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmFrZXJ5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsYXZlbmRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlZ2V0YWJsZVN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpcXVvclN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBkZWVwcGluaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBldFN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBwZXJ1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFyZHdhcmVTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2xhdGVncmV5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzdGF1cmFudHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogb2xpdmVkcmFiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmFzdEZvb2RSZXN0YXVyYW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0b21hdG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ncm9jZXJ5U3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdvbGQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdGF0aW9uZXJ5U3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHN0ZWVsYmx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kcnlDbGVhbmVye1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17NX0gc3R5bGU9e3t3aWR0aDpcIjE0MHB4XCIsIG1hcmdpblRvcDpcIjUwcHhcIiwgbWFyZ2luQm90dG9tOlwiMjBweFwiLCBtYXJnaW5MZWZ0OlwiNXB4XCIsIG1hcmdpblJpZ2h0OlwiNXB4XCIsIHBhZGRpbmdMZWZ0OlwiNXB4XCIsIHBhZGRpbmdSaWdodDpcIjVweFwiLCBwYWRkaW5nVG9wOlwiNDVweFwiLCBwYWRkaW5nQm90dG9tOlwiNDBweFwiLCBwb3NpdGlvbjoncmVsYXRpdmUnLCBib3JkZXJSYWRpdXM6JzE1cHgnfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wic2lkZUJ1dHRvbiB0b3AgXCIrKHRoaXMucHJvcHMuc3RvcmUudHlwZSE9bnVsbCAmJiBzdG9yZVR5cGVzLmluY2x1ZGVzKHRoaXMucHJvcHMuc3RvcmUudHlwZSkgP3RoaXMucHJvcHMuc3RvcmUudHlwZTpcInN0b3JlXCIpfT5cbiAgICAgICAgICAgICAgPFN0b3JlZnJvbnRJY29uIGZvbnRTaXplPVwibGFyZ2VcIi8+IFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxwIHN0eWxlPXt7aGVpZ2h0OlwiNzBweFwifX0+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuc3RvcmUubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzbWFsbD57KHRoaXMucHJvcHMuc3RvcmUudHlwZSE9bnVsbD90aGlzLnByb3BzLnN0b3JlLnR5cGU6XCJUaWVuZGFcIil9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzbWFsbD57KHRoaXMucHJvcHMuc3RvcmUuYWNjZXB0c0NhcmRzPzxzcGFuPjxDcmVkaXRDYXJkSWNvbi8+IEFjZXB0YSBUYXJqZXRhczwvc3Bhbj46XCJcIil9IDwvc21hbGw+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMucHJvcHMuc3RvcmUuYWRkcmVzc308L3NtYWxsPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxMaW5rIG9uQ2xpY2s9eygpPT5oYW5kbGVDbGljaygpfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlQnV0dG9uIGJvdHRvbSBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgSGFjZXIgcGVkaWRvXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWduZXQ7XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/Magnet.js */"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
        elevation: 5,
        style: {
          width: "140px",
          marginTop: "50px",
          marginBottom: "20px",
          marginLeft: "5px",
          marginRight: "5px",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingTop: "45px",
          paddingBottom: "40px",
          position: 'relative',
          borderRadius: '15px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-201863143" + " " + ("sideButton top " + (this.props.store.type != null && storeTypes.includes(this.props.store.type) ? this.props.store.type : "store") || false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_9___default.a, {
        fontSize: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 15
        }
      })), __jsx("div", {
        className: "jsx-201863143" + " " + "center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }, __jsx("p", {
        style: {
          height: "70px"
        },
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 15
        }
      }, __jsx("strong", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 15
        }
      }, this.props.store.name), __jsx("br", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 15
        }
      }), __jsx("small", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 15
        }
      }, this.props.store.type != null ? this.props.store.type : "Tienda"), __jsx("br", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 15
        }
      }), __jsx("small", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 15
        }
      }, this.props.store.acceptsCards ? __jsx("span", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 54
        }
      }, __jsx(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 60
        }
      }), " Acepta Tarjetas") : "", " "), __jsx("br", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 15
        }
      }), __jsx("small", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 15
        }
      }, this.props.store.address)), __jsx("p", {
        className: "jsx-201863143",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        onClick: function onClick() {
          return handleClick();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "jsx-201863143" + " " + "sideButton bottom center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, "Hacer pedido"))));
    }
  }]);

  return Magnet;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Magnet);

/***/ })

})
//# sourceMappingURL=index.js.402c804b133f702020a7.hot-update.js.map