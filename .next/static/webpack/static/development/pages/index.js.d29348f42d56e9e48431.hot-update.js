webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Context */ "./components/Context.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _components_WelcomeSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/WelcomeSection */ "./components/WelcomeSection.js");
/* harmony import */ var _components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/FridgeMagnetsSection */ "./components/FridgeMagnetsSection.js");
var _this = undefined,
    _jsxFileName = "/home/crmock/pideenlaequina/front/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var App = function App(props) {
  return __jsx(_components_Context__WEBPACK_IMPORTED_MODULE_2__["default"].Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, function (context) {
    return !context.isReady ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 10
      }
    }) : __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: context.user,
      auth0Login: context.loginWithRedirect,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }), __jsx(_components_WelcomeSection__WEBPACK_IMPORTED_MODULE_5__["default"], {
      name: context.user != null ? context.user.name : null,
      address: context.address,
      numStores: context.stores.lenght,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }), __jsx(_components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
      favoriteStores: context.user != null ? context.user.favoriteStores : [],
      featuredStores: context.featuredStores,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.d29348f42d56e9e48431.hot-update.js.map