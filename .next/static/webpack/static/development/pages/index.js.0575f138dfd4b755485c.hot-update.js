webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Ready.js":
/*!*****************************!*\
  !*** ./components/Ready.js ***!
  \*****************************/
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
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _components_WelcomeSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/WelcomeSection */ "./components/WelcomeSection.js");
/* harmony import */ var _components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/FridgeMagnetsSection */ "./components/FridgeMagnetsSection.js");
/* harmony import */ var _components_StoreCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/StoreCard */ "./components/StoreCard.js");





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Ready.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Ready = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Ready, _Component);

  var _super = _createSuper(Ready);

  function Ready(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ready);

    _this = _super.call(this, props);
    _this.state = {
      selectedStore: null,
      storeCardOpen: false,
      searchCardOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ready, [{
    key: "changeSelectedStore",
    value: function changeSelectedStore(newStore) {
      this.setState({
        selectedStore: newStore
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-1331275266",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7
        }
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1331275266",
        __self: this
      }, ".root.jsx-1331275266{background:linear-gradient(180deg,#ffcf0200 50%,#ffcf02ff 90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1JlYWR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCVyxBQUdnRiwrREFDbkUiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvUmVhZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU1lbnUnXG5pbXBvcnQgV2VsY29tZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbidcbmltcG9ydCBGcmlkZ2VNYWduZXRzU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHNTZWN0aW9uJ1xuaW1wb3J0IFN0b3JlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N0b3JlQ2FyZCdcblxuY2xhc3MgUmVhZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFN0b3JlOm51bGwsXG4gICAgICBzdG9yZUNhcmRPcGVuOmZhbHNlLFxuICAgICAgc2VhcmNoQ2FyZE9wZW46ZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU2VsZWN0ZWRTdG9yZShuZXdTdG9yZSlcbiAge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkU3RvcmU6bmV3U3RvcmV9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmY2YwMjAwIDUwJSwgI2ZmY2YwMmZmIDkwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPFN0b3JlQ2FyZCBzdG9yZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0b3JlfSBsb2NhdGlvbj17dGhpcy5wcm9wcy5kZXZpY2VMb2NhdGlvbn0gb3Blbj17dGhpcy5zdGF0ZS5zdG9yZUNhcmRPcGVufSBjbG9zZT17KCk9PnRoaXMuc2V0U3RhdGUoe3N0b3JlQ2FyZE9wZW46ZmFsc2V9KX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICA8U2lkZU1lbnUgXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9IFxuICAgICAgICAgICAgYXV0aDBMb2dpbj17dGhpcy5wcm9wcy5sb2dpbldpdGhSZWRpcmVjdH1cbiAgICAgICAgICAgIGF1dGgwTG9nb3V0PXt0aGlzLnByb3BzLmxvZ291dH1cbiAgICAgICAgICAgIG51bU9yZGVycz17KHRoaXMucHJvcHMub3JkZXJzIT09bnVsbD90aGlzLnByb3BzLm9yZGVycy5sZW5ndGg6MCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxXZWxjb21lU2VjdGlvbiBcbiAgICAgICAgICAgIG5hbWU9eyhcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyIT09bnVsbCBcbiAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy51c2VyLm5hbWUhPT1udWxsIFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMudXNlci5uYW1lXG4gICAgICAgICAgICAgIDpudWxsXG4gICAgICAgICAgICApfSBcbiAgICAgICAgICAgIGFkZHJlc3Nlcz17KFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXIhPT1udWxsXG4gICAgICAgICAgICAgICYmdGhpcy5wcm9wcy51c2VyLmFkZHJlc3NlcyE9PW51bGxcbiAgICAgICAgICAgICAgP3RoaXMucHJvcHMudXNlci5hZGRyZXNzZXMhPT1bXVxuICAgICAgICAgICAgICA6W11cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBkZXZpY2VMb2NhdGlvbj17dGhpcy5wcm9wcy5kZXZpY2VMb2NhdGlvbn1cbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb249e3RoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbn1cbiAgICAgICAgICAgIG51bVN0b3Jlcz17KHRoaXMucHJvcHMuc3RvcmVzIT09bnVsbD90aGlzLnByb3BzLnN0b3Jlcy5sZW5ndGg6MCl9XG4gICAgICAgICAgICBjaGFuZ2VTZWxlY3RlZFN0b3JlPXsoKT0+dGhpcy5jaGFuZ2VTZWxlY3RlZFN0b3JlKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7KCAodGhpcy5wcm9wcy5zdG9yZXMgIT09IG51bGwgJiYgdGhpcy5wcm9wcy5zdG9yZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAmJjxGcmlkZ2VNYWduZXRzU2VjdGlvbiBcbiAgICAgICAgICAgIGZhdm9yaXRlU3RvcmVzPXsodGhpcy5wcm9wcy51c2VyIT09bnVsbCYmdGhpcy5wcm9wcy51c2VyLmZhdm9yaXRlU3RvcmVzIT09bnVsbD90aGlzLnByb3BzLnVzZXIuZmF2b3JpdGVTdG9yZXM6W10pfSBcbiAgICAgICAgICAgIGZlYXR1cmVkU3RvcmVzPXt0aGlzLnByb3BzLmZlYXR1cmVkU3RvcmVzfSBcbiAgICAgICAgICAgIGNoYW5nZVNlbGVjdGVkU3RvcmU9eygpPT50aGlzLmNoYW5nZVNlbGVjdGVkU3RvcmUoKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWR5O1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/Ready.js */"), __jsx(_components_StoreCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        store: this.state.selectedStore,
        location: this.props.deviceLocation,
        open: this.state.storeCardOpen,
        close: function close() {
          return _this2.setState({
            storeCardOpen: false
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "jsx-1331275266" + " " + "root",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_7__["default"], {
        user: this.props.user,
        auth0Login: this.props.loginWithRedirect,
        auth0Logout: this.props.logout,
        numOrders: this.props.orders !== null ? this.props.orders.length : 0,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }
      }), __jsx(_components_WelcomeSection__WEBPACK_IMPORTED_MODULE_8__["default"], {
        name: this.props.user !== null && this.props.user.name !== null ? this.props.user.name : null,
        addresses: this.props.user !== null && this.props.user.addresses !== null ? this.props.user.addresses !== [] : [],
        deviceLocation: this.props.deviceLocation,
        selectedLocation: this.props.selectedLocation,
        numStores: this.props.stores !== null ? this.props.stores.length : 0,
        changeSelectedStore: function changeSelectedStore() {
          return _this2.changeSelectedStore();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }), this.props.stores !== null && this.props.stores.length > 0 && __jsx(_components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        favoriteStores: this.props.user !== null && this.props.user.favoriteStores !== null ? this.props.user.favoriteStores : [],
        featuredStores: this.props.featuredStores,
        changeSelectedStore: function changeSelectedStore() {
          return _this2.changeSelectedStore();
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }
      })));
    }
  }]);

  return Ready;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Ready);

/***/ })

})
//# sourceMappingURL=index.js.0575f138dfd4b755485c.hot-update.js.map