webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/LocationContextProvider.js":
/*!***********************************************!*\
  !*** ./components/LocationContextProvider.js ***!
  \***********************************************/
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
/* harmony import */ var _LocationContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocationContext */ "./components/LocationContext.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js");








var _jsxFileName = "/home/crmock/pideenlaequina/front/components/LocationContextProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // create a provider

var LocationContextProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LocationContextProvider, _Component);

  var _super = _createSuper(LocationContextProvider);

  function LocationContextProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LocationContextProvider);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initialLocation", function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.geolocation.getCurrentPosition(function (position) {
                return _this.setState({
                  locationLat: position.coords.latitude,
                  locationLng: position.coords.longitude,
                  selectedLocationLat: position.coords.latitude,
                  selectedLocationLng: position.coords.longitude
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
                            locationLat: parseFloat(pos.latitude),
                            locationLng: parseFloat(pos.longitude),
                            selectedLocationLat: parseFloat(pos.latitude),
                            selectedLocationLng: parseFloat(pos.longitude)
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initializeAuth0", function _callee3() {
      var auth0Client, isAuthenticated, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_10__["default"])(_this.config));

            case 2:
              auth0Client = _context3.sent;
              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.isAuthenticated());

            case 5:
              isAuthenticated = _context3.sent;

              if (!isAuthenticated) {
                _context3.next = 12;
                break;
              }

              _context3.next = 9;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.getUser());

            case 9:
              _context3.t0 = _context3.sent;
              _context3.next = 13;
              break;

            case 12:
              _context3.t0 = null;

            case 13:
              user = _context3.t0;

              _this.setState({
                auth0Client: auth0Client,
                isLoading: false,
                isAuthenticated: isAuthenticated,
                user: user
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    });

    _this.state = {
      location_lat: null,
      location_lng: null,
      selectedLocationLat: null,
      selectedLocationLng: null,
      featuredStores: null,
      stores: null,
      authClient: null,
      isAuthenticated: false,
      user: null,
      isReady: false,
      isLoading: true
    };
    _this.config = {
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin
    };
    _this.startedAt = new Date();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LocationContextProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialLocation();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.selectedLocationLat != null && this.state.selectedLocationLng != null && prevState.selectedLocationLat != this.state.selectedLocationLat || prevState.selectedLocationLng != this.state.selectedLocationLng) {
        console.log("Location change");
        this.featuredStores(this.state.selectedLocationLat, this.state.selectedLocationLng);
        this.stores(this.state.selectedLocationLat, this.state.selectedLocationLng);
      }

      if (!this.state.isReady && this.state.selectedLocationLat != null && this.state.selectedLocationLng != null) {
        console.log("Initial location -> isReady=true");
        var now = new Date();
        var towait = now.getTime() + 2000 - this.startedAt.getTime();

        if (towait > 0) {
          setTimeout(function () {
            _this2.setState({
              isReady: true
            });
          }, towait);
        } else {
          this.setState({
            isReady: true
          });
        }
      }

      if (this.state.isLoading && this.state.stores != null && this.state.featuredStores != null) {
        console.log("Stores loaded");
        this.setState({
          isLoading: false
        });
      }
    }
  }, {
    key: "updateLocation",
    value: function updateLocation(newLat, newLng) {
      this.setState({
        selected_location_lat: parseFloat(newLat),
        selected_location_lng: parseFloat(newLng),
        isLoading: true
      });
    }
  }, {
    key: "featuredStores",
    value: function featuredStores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function featuredStores$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = '/api/featuredStores?lat=' + lat + '&lng=' + lng;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context4.sent;
              this.setState({
                featuredStores: res.stores
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "stores",
    value: function stores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function stores$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = '/api/stores?lat=' + lat + '&lng=' + lng;
              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context5.sent;
              this.setState({
                stores: res.stores
              });

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var configObject = {
        isLoading: isLoading,
        isAuthenticated: isAuthenticated,
        user: user,
        loginWithRedirect: function loginWithRedirect() {
          var _auth0Client;

          return (_auth0Client = auth0Client).loginWithRedirect.apply(_auth0Client, arguments);
        },
        getTokenSilently: function getTokenSilently() {
          var _auth0Client2;

          return (_auth0Client2 = auth0Client).getTokenSilently.apply(_auth0Client2, arguments);
        },
        getIdTokenClaims: function getIdTokenClaims() {
          var _auth0Client3;

          return (_auth0Client3 = auth0Client).getIdTokenClaims.apply(_auth0Client3, arguments);
        },
        logout: function logout() {
          var _auth0Client4;

          return (_auth0Client4 = auth0Client).logout.apply(_auth0Client4, arguments);
        }
      };
      return __jsx(_LocationContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
        value: this.state,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, this.props.children);
    }
  }]);

  return LocationContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LocationContextProvider);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.6e8e35f7ee2be7924687.hot-update.js.map