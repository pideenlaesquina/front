webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/ContextProvider.js":
/*!***************************************!*\
  !*** ./components/ContextProvider.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
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
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Context */ "./components/Context.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js");








var _jsxFileName = "/home/crmock/pideenlaequina/front/components/ContextProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // create a provider

var ContextProvider = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ContextProvider, _Component);

  var _super = _createSuper(ContextProvider);

  function ContextProvider(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ContextProvider);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initialLocation", function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.geolocation.getCurrentPosition(function (position) {
                return _this.setState({
                  location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                  }
                });
              }, function (err) {
                return _this.locationFromIp();
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "initializeAuth0", function _callee2() {
      var config, auth0Client, isAuthenticated, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              config = {
                domain: 'acacerca.auth0.com',
                //process.env.AUTH0_DOMAIN,
                client_id: 'd8Pv88MjaYWNSUKUHnO9JcudrUPZ6THl',
                //process.env.AUTH0_CLIENT_ID,
                redirect_uri: window.location.origin,
                cacheLocation: 'localstorage'
              };
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_10__["default"])(config));

            case 3:
              auth0Client = _context2.sent;
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.isAuthenticated());

            case 6:
              isAuthenticated = _context2.sent;

              if (!isAuthenticated) {
                _context2.next = 13;
                break;
              }

              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.getUser());

            case 10:
              _context2.t0 = _context2.sent;
              _context2.next = 14;
              break;

            case 13:
              _context2.t0 = null;

            case 14:
              user = _context2.t0;

              _this.setState({
                authClient: auth0Client,
                isAuthenticated: isAuthenticated,
                user: user
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    });

    _this.state = {
      location: null,
      address: null,
      featuredStores: null,
      stores: null,
      authClient: null,
      isAuthenticated: false,
      user: null,
      isReady: false
    };
    _this.startedAt = new Date();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContextProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initialLocation();
      this.initializeAuth0();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.location !== null && prevState.location !== this.state.location) {
        this.featuredStores(this.state.location.lat, this.state.location.lng);
        this.stores(this.state.location.lat, this.state.location.lng);
        this.addressFromLocation(this.state.location.lat, this.state.location.lng);
      }

      if (!this.state.isReady && this.state.location !== null && this.state.address !== null && this.state.stores !== null && this.state.featuredStores !== null && this.state.authClient !== null) {
        var now = new Date();
        var towait = 2000 - (now.getTime() - this.startedAt.getTime());

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
    }
  }, {
    key: "updateLocation",
    value: function updateLocation(newLat, newLng) {
      this.setState({
        location: {
          lat: parseFloat(newLat),
          lng: parseFloat(newLng)
        }
      });
      localStorage.setItem('_selectedLocationLat', newLat);
    }
  }, {
    key: "locationFromIp",
    value: function locationFromIp() {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function locationFromIp$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = '/api/locationFromIp';
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context3.sent;
              this.setState({
                location: res.location
              });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "addressFromLocation",
    value: function addressFromLocation(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function addressFromLocation$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              url = '/api/addressFromLocation?lat=' + lat + '&lng=' + lng;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context4.sent;
              this.setState({
                address: res.address
              });

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "featuredStores",
    value: function featuredStores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function featuredStores$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = '/api/featuredStores?lat=' + lat + '&lng=' + lng;
              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context5.sent;
              this.setState({
                featuredStores: res.stores
              }); //localStorage.setItem('_featuredStores', JSON.stringify(res.stores))  

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "stores",
    value: function stores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function stores$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              url = '/api/stores?lat=' + lat + '&lng=' + lng;
              _context6.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context6.sent;
              this.setState({
                stores: res.stores
              }); //localStorage.setItem('_stores', JSON.stringify(res.stores))  

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          location = _this$state.location,
          address = _this$state.address,
          featuredStores = _this$state.featuredStores,
          stores = _this$state.stores,
          authClient = _this$state.authClient,
          isAuthenticated = _this$state.isAuthenticated,
          user = _this$state.user,
          isReady = _this$state.isReady;
      var values = {
        location: location,
        address: address,
        featuredStores: featuredStores,
        stores: stores,
        isAuthenticated: isAuthenticated,
        user: user,
        isReady: isReady,
        loginWithRedirect: function loginWithRedirect() {
          return authClient.loginWithRedirect.apply(authClient, arguments);
        },
        getTokenSilently: function getTokenSilently() {
          return authClient.getTokenSilently.apply(authClient, arguments);
        },
        getIdTokenClaims: function getIdTokenClaims() {
          return authClient.getIdTokenClaims.apply(authClient, arguments);
        },
        logout: function logout() {
          return authClient.logout.apply(authClient, arguments);
        }
      };
      return __jsx(_Context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
        value: values,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, this.props.children);
    }
  }]);

  return ContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

/***/ })

})
//# sourceMappingURL=_app.js.4e4514ecc818d0dd4c0d.hot-update.js.map