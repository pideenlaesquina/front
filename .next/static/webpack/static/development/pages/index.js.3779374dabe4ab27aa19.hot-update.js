webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_fridgeMagnetsSection_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/fridgeMagnetsSection.js */ "./components/fridgeMagnetsSection.js");
/* harmony import */ var _components_searchSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/searchSection.js */ "./components/searchSection.js");








var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var App = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "position", function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.geolocation.getCurrentPosition(function (position) {
                return _this.setState({
                  pos: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  }
                });
              }, function (err) {
                return function _callee() {
                  var ip, pos;
                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(process.env.IPIFY_URL).then(function (response) {
                            return response.text();
                          }));

                        case 2:
                          ip = _context.sent;
                          _context.next = 5;
                          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(process.env.IPGEOLOCATION_API_URL + '/ipgeo?apiKey=' + process.env.IPGEOLOCATION_API_KEY + '&ip=' + ip).then(function (response) {
                            return response.json();
                          }));

                        case 5:
                          pos = _context.sent;
                          this.setState({
                            pos: {
                              lat: parseFloat(pos.latitude),
                              lng: parseFloat(pos.longitude)
                            },
                            stores: null
                          });

                        case 7:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, null, this, null, Promise);
                };
              }));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    _this.state = {
      pos: null,
      favoriteStores: null,
      featuredStores: null,
      ready: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.position();
      this.favoriteStores();
      this.featuredStores();
    }
  }, {
    key: "favoriteStores",
    value: function favoriteStores(pos) {
      var stores;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function favoriteStores$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              stores = [{
                _id: "1",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "butchery",
                acceptsCards: true
              }, {
                _id: "2",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "pharmacy",
                acceptsCards: true
              }, {
                _id: "3",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "bakery",
                acceptsCards: true
              }, {
                _id: "4",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "vegetableStore",
                acceptsCards: true
              }, {
                _id: "5",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "liquorStore",
                acceptsCards: true
              }, {
                _id: "6",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "petStore",
                acceptsCards: true
              }, {
                _id: "7",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "hardwareStore",
                acceptsCards: true
              }, {
                _id: "8",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "restaurant",
                acceptsCards: true
              }, {
                _id: "9",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "fastFoodRestaurant",
                acceptsCards: true
              }, {
                _id: "10",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "groceryStore",
                acceptsCards: true
              }, {
                _id: "11",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "stationeryStore",
                acceptsCards: true
              }, {
                _id: "12",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "store",
                acceptsCards: true
              }, {
                _id: "13",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "drycleaner",
                acceptsCards: true
              }];
              this.setState({
                favoriteStores: stores
              });

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "featuredStores",
    value: function featuredStores(pos) {
      var stores;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function featuredStores$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              stores = [{
                _id: "1",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "butchery",
                acceptsCards: true
              }, {
                _id: "2",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "pharmacy",
                acceptsCards: true
              }, {
                _id: "3",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "bakery",
                acceptsCards: true
              }, {
                _id: "4",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "vegetableStore",
                acceptsCards: true
              }, {
                _id: "5",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "liquorStore",
                acceptsCards: true
              }, {
                _id: "6",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "petStore",
                acceptsCards: true
              }, {
                _id: "7",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "hardwareStore",
                acceptsCards: true
              }, {
                _id: "8",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "restaurant",
                acceptsCards: true
              }, {
                _id: "9",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "fastFoodRestaurant",
                acceptsCards: true
              }, {
                _id: "10",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "groceryStore",
                acceptsCards: true
              }, {
                _id: "11",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "stationeryStore",
                acceptsCards: true
              }, {
                _id: "12",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "store",
                acceptsCards: true
              }, {
                _id: "13",
                name: "Carnes Y Mas Carnes",
                address: "KR 6 166 -18",
                type: "drycleaner",
                acceptsCards: true
              }];
              this.setState({
                featuredStores: stores
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "user",
    value: function user(id) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function user$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          height: '100vh'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7
        }
      }, __jsx(_components_searchSection_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 9
        }
      }), __jsx(_components_fridgeMagnetsSection_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        favoriteStores: this.state.favoriteStores,
        featuredStores: this.state.featuredStores,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 9
        }
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.3779374dabe4ab27aa19.hot-update.js.map