webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_Ready__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Ready */ "./components/Ready.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js");









var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180

  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

var Index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Index, _Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "deviceLocation", function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(navigator.geolocation.getCurrentPosition(function (position) {
                return _this.locationFromBrowser(position);
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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "initializeAuth0", function _callee2() {
      var config, auth0Client, isAuthenticated, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function _callee2$(_context2) {
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
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_13__["default"])(config));

            case 3:
              auth0Client = _context2.sent;
              _context2.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(auth0Client.isAuthenticated());

            case 6:
              isAuthenticated = _context2.sent;

              if (!isAuthenticated) {
                _context2.next = 13;
                break;
              }

              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(auth0Client.getUser());

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
      deviceLocation: null,
      selectedLocation: null,
      featuredStores: null,
      stores: null,
      orders: null,
      authClient: null,
      isAuthenticated: false,
      user: null,
      isReady: false
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.deviceLocation();
      this.initializeAuth0();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.authClient !== null && this.state.deviceLocation !== null && this.state.selectedLocation === null) {
        var location = null;

        if (this.state.user !== null && this.state.user.addresses !== null && this.state.user.addresses !== []) {
          location = this.state.user.addresses[0];
        } else {
          location = this.state.deviceLocation;
        }

        this.updateSelectedLocation(location.lat, location.lng, location.address, location.type);
      }

      if (this.state.selectedLocation !== null && JSON.stringify(prevState.selectedLocation) !== JSON.stringify(this.state.selectedLocation)) {
        this.featuredStores(this.state.selectedLocation.lat, this.state.selectedLocation.lng);
        this.stores(this.state.selectedLocation.lat, this.state.selectedLocation.lng);
      }

      if (!this.state.isReady && this.state.selectedLocation !== null && this.state.stores !== null && this.state.featuredStores !== null) {
        this.setState({
          isReady: true
        });
      }
    }
  }, {
    key: "updateSelectedLocation",
    value: function updateSelectedLocation(newLat, newLng, address, type) {
      var location = {
        lat: parseFloat(newLat),
        lng: parseFloat(newLng),
        address: address,
        type: type
      };
      this.setState({
        selectedLocation: location
      }); //localStorage.setItem('_selectedLocationL', location)  
    }
  }, {
    key: "updateDeviceLocation",
    value: function updateDeviceLocation(newLat, newLng, address) {
      var location = {
        lat: parseFloat(newLat),
        lng: parseFloat(newLng),
        address: address,
        type: "device"
      };
      this.setState({
        deviceLocation: location
      }); //localStorage.setItem('_deviceLocation', location)  
    }
  }, {
    key: "locationFromIp",
    value: function locationFromIp() {
      var url, res, address;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function locationFromIp$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              url = '/api/locationFromIp';
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context3.sent;
              _context3.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.addressFromLocation(lat, lng));

            case 6:
              address = _context3.sent;
              this.updateDeviceLocation(res.location.lat, res.location.lng, address);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "locationFromBrowser",
    value: function locationFromBrowser(position) {
      var lat, lng, address;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function locationFromBrowser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              lat = position.coords.latitude;
              lng = position.coords.longitude;
              _context4.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(this.addressFromLocation(lat, lng));

            case 4:
              address = _context4.sent;
              this.updateDeviceLocation(lat, lng, address);

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "addressFromLocation",
    value: function addressFromLocation(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function addressFromLocation$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              url = '/api/addressFromLocation?lat=' + lat + '&lng=' + lng;
              _context5.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context5.sent;
              return _context5.abrupt("return", res.address);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "featuredStores",
    value: function featuredStores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function featuredStores$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              url = '/api/featuredStores?lat=' + lat + '&lng=' + lng;
              _context6.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context6.sent;
              this.setState({
                featuredStores: res.stores
              }); //localStorage.setItem('_featuredStores', JSON.stringify(res.stores))  

            case 5:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "stores",
    value: function stores(lat, lng) {
      var url, res;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function stores$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              url = '/api/stores?lat=' + lat + '&lng=' + lng;
              _context7.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(fetch(url).then(function (response) {
                return response.json();
              }));

            case 3:
              res = _context7.sent;
              this.setState({
                stores: res.stores
              }); //localStorage.setItem('_stores', JSON.stringify(res.stores))  

            case 5:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          deviceLocation = _this$state.deviceLocation,
          selectedLocation = _this$state.selectedLocation,
          featuredStores = _this$state.featuredStores,
          stores = _this$state.stores,
          orders = _this$state.orders,
          authClient = _this$state.authClient,
          isAuthenticated = _this$state.isAuthenticated,
          user = _this$state.user,
          isReady = _this$state.isReady;
      var values = {
        deviceLocation: deviceLocation,
        selectedLocation: selectedLocation,
        featuredStores: featuredStores,
        stores: stores,
        orders: orders,
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
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211,
          columnNumber: 7
        }
      }, !this.state.isReady ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 12
        }
      }) : __jsx(_components_Ready__WEBPACK_IMPORTED_MODULE_12__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, values, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 12
        }
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d78cc31b07d8b22e9295.hot-update.js.map