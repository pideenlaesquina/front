webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var LocationContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (LocationContext);

/***/ }),

/***/ "./components/LocationContext.js":
false,

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
/* harmony import */ var _components_loading_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading.js */ "./components/loading.js");
/* harmony import */ var _components_sideMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sideMenu.js */ "./components/sideMenu.js");
/* harmony import */ var _components_welcomeSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/welcomeSection.js */ "./components/welcomeSection.js");
/* harmony import */ var _components_fridgeMagnetsSection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/fridgeMagnetsSection.js */ "./components/fridgeMagnetsSection.js");
var _this = undefined,
    _jsxFileName = "/home/crmock/pideenlaequina/front/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var App = function App(props) {
  var ready = function ready(s, f) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }
    }, __jsx(_components_sideMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }), __jsx(_components_welcomeSection_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }), __jsx(_components_fridgeMagnetsSection_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
      stores: s,
      featuredStores: f,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }));
  };

  return __jsx(LocationContext.Consumer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, function (context) {
    return !context.isReady && context.isLoading ? __jsx(_components_loading_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 10
      }
    }) : ready(context.stores, context.featuredStores);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.af6cbe447463955a0291.hot-update.js.map