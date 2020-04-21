(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/_app.js"],{

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

/***/ "./components/ContextProvider.js":
/*!***************************************!*\
  !*** ./components/ContextProvider.js ***!
  \***************************************/
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
      var config, auth0Client, isAuthenticated, user;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              config = {
                domain: process.env.AUTH0_DOMAIN,
                client_id: process.env.AUTH0_CLIENT_ID,
                redirect_uri: window.location.origin
              };
              _context3.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_10__["default"])(config));

            case 3:
              auth0Client = _context3.sent;
              _context3.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.isAuthenticated());

            case 6:
              isAuthenticated = _context3.sent;

              if (!isAuthenticated) {
                _context3.next = 13;
                break;
              }

              _context3.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(auth0Client.getUser());

            case 10:
              _context3.t0 = _context3.sent;
              _context3.next = 14;
              break;

            case 13:
              _context3.t0 = null;

            case 14:
              user = _context3.t0;

              _this.setState({
                auth0Client: auth0Client,
                isLoading: false,
                isAuthenticated: isAuthenticated,
                user: user
              });

            case 16:
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
    _this.startedAt = new Date();
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ContextProvider, [{
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
      var _this$state = this.state,
          location_lat = _this$state.location_lat,
          location_lng = _this$state.location_lng,
          selectedLocationLat = _this$state.selectedLocationLat,
          selectedLocationLng = _this$state.selectedLocationLng,
          featuredStores = _this$state.featuredStores,
          stores = _this$state.stores,
          authClient = _this$state.authClient,
          isAuthenticated = _this$state.isAuthenticated,
          user = _this$state.user,
          isReady = _this$state.isReady,
          isLoading = _this$state.isLoading;
      var values = {
        location_lat: location_lat,
        location_lng: location_lng,
        selectedLocationLat: selectedLocationLat,
        selectedLocationLng: selectedLocationLng,
        featuredStores: featuredStores,
        stores: stores,
        isAuthenticated: isAuthenticated,
        user: user,
        isReady: isReady,
        isLoading: isLoading,
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
      return __jsx(_Context__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
        value: values,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, this.props.children);
    }
  }]);

  return ContextProvider;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, Auth0Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process, module, Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth0Client", function() { return Lr; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};function t(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function o(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(c,a)}s((r=r.apply(e,t||[])).next())}))}function i(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t){return e(t={exports:{}},t.exports),t.exports}var u=function(e){return e&&e.Math==Math&&e},l=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof c&&c)||Function("return this")(),f=function(e){try{return!!e()}catch(e){return!0}},d=!f((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),p={}.propertyIsEnumerable,h=Object.getOwnPropertyDescriptor,y={f:h&&!p.call({1:2},1)?function(e){var t=h(this,e);return!!t&&t.enumerable}:p},m=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},v={}.toString,b=function(e){return v.call(e).slice(8,-1)},g="".split,w=f((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==b(e)?g.call(e,""):Object(e)}:Object,S=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},_=function(e){return w(S(e))},k=function(e){return"object"==typeof e?null!==e:"function"==typeof e},T=function(e,t){if(!k(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!k(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!k(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},I={}.hasOwnProperty,O=function(e,t){return I.call(e,t)},E=l.document,j=k(E)&&k(E.createElement),x=function(e){return j?E.createElement(e):{}},A=!d&&!f((function(){return 7!=Object.defineProperty(x("div"),"a",{get:function(){return 7}}).a})),W=Object.getOwnPropertyDescriptor,Z={f:d?W:function(e,t){if(e=_(e),t=T(t,!0),A)try{return W(e,t)}catch(e){}if(O(e,t))return m(!y.f.call(e,t),e[t])}},U=function(e){if(!k(e))throw TypeError(String(e)+" is not an object");return e},L=Object.defineProperty,C={f:d?L:function(e,t,n){if(U(e),t=T(t,!0),U(n),A)try{return L(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},K=d?function(e,t,n){return C.f(e,t,m(1,n))}:function(e,t,n){return e[t]=n,e},P=function(e,t){try{K(l,e,t)}catch(n){l[e]=t}return t},R=l["__core-js_shared__"]||P("__core-js_shared__",{}),G=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(e){return G.call(e)});var X,F,V,Y=R.inspectSource,J=l.WeakMap,N="function"==typeof J&&/native code/.test(Y(J)),z=s((function(e){(e.exports=function(e,t){return R[e]||(R[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),B=0,D=Math.random(),M=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++B+D).toString(36)},q=z("keys"),H=function(e){return q[e]||(q[e]=M(e))},Q={},$=l.WeakMap;if(N){var ee=new $,te=ee.get,ne=ee.has,re=ee.set;X=function(e,t){return re.call(ee,e,t),t},F=function(e){return te.call(ee,e)||{}},V=function(e){return ne.call(ee,e)}}else{var oe=H("state");Q[oe]=!0,X=function(e,t){return K(e,oe,t),t},F=function(e){return O(e,oe)?e[oe]:{}},V=function(e){return O(e,oe)}}var ie,ce={set:X,get:F,has:V,enforce:function(e){return V(e)?F(e):X(e,{})},getterFor:function(e){return function(t){var n;if(!k(t)||(n=F(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ae=s((function(e){var t=ce.get,n=ce.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c=!!i&&!!i.unsafe,a=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||K(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==l?(c?!s&&e[t]&&(a=!0):delete e[t],a?e[t]=o:K(e,t,o)):a?e[t]=o:P(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||Y(this)}))})),se=l,ue=function(e){return"function"==typeof e?e:void 0},le=function(e,t){return arguments.length<2?ue(se[e])||ue(l[e]):se[e]&&se[e][t]||l[e]&&l[e][t]},fe=Math.ceil,de=Math.floor,pe=function(e){return isNaN(e=+e)?0:(e>0?de:fe)(e)},he=Math.min,ye=function(e){return e>0?he(pe(e),9007199254740991):0},me=Math.max,ve=Math.min,be=function(e){return function(t,n,r){var o,i=_(t),c=ye(i.length),a=function(e,t){var n=pe(e);return n<0?me(n+t,0):ve(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},ge={includes:be(!0),indexOf:be(!1)},we=ge.indexOf,Se=function(e,t){var n,r=_(e),o=0,i=[];for(n in r)!O(Q,n)&&O(r,n)&&i.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~we(i,n)||i.push(n));return i},_e=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ke=_e.concat("length","prototype"),Te={f:Object.getOwnPropertyNames||function(e){return Se(e,ke)}},Ie={f:Object.getOwnPropertySymbols},Oe=le("Reflect","ownKeys")||function(e){var t=Te.f(U(e)),n=Ie.f;return n?t.concat(n(e)):t},Ee=function(e,t){for(var n=Oe(t),r=C.f,o=Z.f,i=0;i<n.length;i++){var c=n[i];O(e,c)||r(e,c,o(t,c))}},je=/#|\.prototype\./,xe=function(e,t){var n=We[Ae(e)];return n==Ue||n!=Ze&&("function"==typeof t?f(t):!!t)},Ae=xe.normalize=function(e){return String(e).replace(je,".").toLowerCase()},We=xe.data={},Ze=xe.NATIVE="N",Ue=xe.POLYFILL="P",Le=xe,Ce=Z.f,Ke=function(e,t){var n,r,o,i,c,a=e.target,s=e.global,u=e.stat;if(n=s?l:u?l[a]||P(a,{}):(l[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ce(n,r))&&c.value:n[r],!Le(s?r:a+(u?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Ee(i,o)}(e.sham||o&&o.sham)&&K(i,"sham",!0),ae(n,r,i,e)}},Pe=!!Object.getOwnPropertySymbols&&!f((function(){return!String(Symbol())})),Re=Pe&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ge=z("wks"),Xe=l.Symbol,Fe=Re?Xe:Xe&&Xe.withoutSetter||M,Ve=function(e){return O(Ge,e)||(Pe&&O(Xe,e)?Ge[e]=Xe[e]:Ge[e]=Fe("Symbol."+e)),Ge[e]},Ye=Ve("match"),Je=function(e){if(function(e){var t;return k(e)&&(void 0!==(t=e[Ye])?!!t:"RegExp"==b(e))}(e))throw TypeError("The method doesn't accept regular expressions");return e},Ne=Ve("match"),ze=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[Ne]=!1,"/./"[e](t)}catch(e){}}return!1},Be=Z.f,De="".startsWith,Me=Math.min,qe=ze("startsWith"),He=!(qe||(ie=Be(String.prototype,"startsWith"),!ie||ie.writable));Ke({target:"String",proto:!0,forced:!He&&!qe},{startsWith:function(e){var t=String(S(this));Je(e);var n=ye(Me(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return De?De.call(t,r,n):t.slice(n,n+r.length)===r}});var Qe,$e,et,tt=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},nt=function(e,t,n){if(tt(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},rt=Function.call,ot=function(e,t,n){return nt(rt,l[e].prototype[t],n)},it=(ot("String","startsWith"),function(e){return function(t,n){var r,o,i=String(S(t)),c=pe(n),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}}),ct={codeAt:it(!1),charAt:it(!0)},at=function(e){return Object(S(e))},st=!f((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),ut=H("IE_PROTO"),lt=Object.prototype,ft=st?Object.getPrototypeOf:function(e){return e=at(e),O(e,ut)?e[ut]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?lt:null},dt=Ve("iterator"),pt=!1;[].keys&&("next"in(et=[].keys())?($e=ft(ft(et)))!==Object.prototype&&(Qe=$e):pt=!0),null==Qe&&(Qe={}),O(Qe,dt)||K(Qe,dt,(function(){return this}));var ht,yt={IteratorPrototype:Qe,BUGGY_SAFARI_ITERATORS:pt},mt=Object.keys||function(e){return Se(e,_e)},vt=d?Object.defineProperties:function(e,t){U(e);for(var n,r=mt(t),o=r.length,i=0;o>i;)C.f(e,n=r[i++],t[n]);return e},bt=le("document","documentElement"),gt=H("IE_PROTO"),wt=function(){},St=function(e){return"<script>"+e+"<\/script>"},_t=function(){try{ht=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;_t=ht?function(e){e.write(St("")),e.close();var t=e.parentWindow.Object;return e=null,t}(ht):((t=x("iframe")).style.display="none",bt.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(St("document.F=Object")),e.close(),e.F);for(var n=_e.length;n--;)delete _t.prototype[_e[n]];return _t()};Q[gt]=!0;var kt=Object.create||function(e,t){var n;return null!==e?(wt.prototype=U(e),n=new wt,wt.prototype=null,n[gt]=e):n=_t(),void 0===t?n:vt(n,t)},Tt=C.f,It=Ve("toStringTag"),Ot=function(e,t,n){e&&!O(e=n?e:e.prototype,It)&&Tt(e,It,{configurable:!0,value:t})},Et={},jt=yt.IteratorPrototype,xt=function(){return this},At=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return U(n),function(e){if(!k(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),Wt=yt.IteratorPrototype,Zt=yt.BUGGY_SAFARI_ITERATORS,Ut=Ve("iterator"),Lt=function(){return this},Ct=ct.charAt,Kt=ce.set,Pt=ce.getterFor("String Iterator");!function(e,t,n,r,o,i,c){!function(e,t,n){var r=t+" Iterator";e.prototype=kt(jt,{next:m(1,n)}),Ot(e,r,!1),Et[r]=xt}(n,t,r);var a,s,u,l=function(e){if(e===o&&y)return y;if(!Zt&&e in p)return p[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},f=t+" Iterator",d=!1,p=e.prototype,h=p[Ut]||p["@@iterator"]||o&&p[o],y=!Zt&&h||l(o),v="Array"==t&&p.entries||h;if(v&&(a=ft(v.call(new e)),Wt!==Object.prototype&&a.next&&(ft(a)!==Wt&&(At?At(a,Wt):"function"!=typeof a[Ut]&&K(a,Ut,Lt)),Ot(a,f,!0))),"values"==o&&h&&"values"!==h.name&&(d=!0,y=function(){return h.call(this)}),p[Ut]!==y&&K(p,Ut,y),Et[t]=y,o)if(s={values:l("values"),keys:i?y:l("keys"),entries:l("entries")},c)for(u in s)(Zt||d||!(u in p))&&ae(p,u,s[u]);else Ke({target:t,proto:!0,forced:Zt||d},s)}(String,"String",(function(e){Kt(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=Pt(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=Ct(n,r),t.index+=e.length,{value:e,done:!1})}));var Rt=function(e,t,n,r){try{return r?t(U(n)[0],n[1]):t(n)}catch(t){var o=e.return;throw void 0!==o&&U(o.call(e)),t}},Gt=Ve("iterator"),Xt=Array.prototype,Ft=function(e){return void 0!==e&&(Et.Array===e||Xt[Gt]===e)},Vt=function(e,t,n){var r=T(t);r in e?C.f(e,r,m(0,n)):e[r]=n},Yt={};Yt[Ve("toStringTag")]="z";var Jt="[object z]"===String(Yt),Nt=Ve("toStringTag"),zt="Arguments"==b(function(){return arguments}()),Bt=Jt?b:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Nt))?n:zt?b(t):"Object"==(r=b(t))&&"function"==typeof t.callee?"Arguments":r},Dt=Ve("iterator"),Mt=function(e){if(null!=e)return e[Dt]||e["@@iterator"]||Et[Bt(e)]},qt=Ve("iterator"),Ht=!1;try{var Qt=0,$t={next:function(){return{done:!!Qt++}},return:function(){Ht=!0}};$t[qt]=function(){return this},Array.from($t,(function(){throw 2}))}catch(e){}var en=!function(e,t){if(!t&&!Ht)return!1;var n=!1;try{var r={};r[qt]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(e){}return n}((function(e){Array.from(e)}));Ke({target:"Array",stat:!0,forced:en},{from:function(e){var t,n,r,o,i,c,a=at(e),s="function"==typeof this?this:Array,u=arguments.length,l=u>1?arguments[1]:void 0,f=void 0!==l,d=Mt(a),p=0;if(f&&(l=nt(l,u>2?arguments[2]:void 0,2)),null==d||s==Array&&Ft(d))for(n=new s(t=ye(a.length));t>p;p++)c=f?l(a[p],p):a[p],Vt(n,p,c);else for(i=(o=d.call(a)).next,n=new s;!(r=i.call(o)).done;p++)c=f?Rt(o,l,[r.value,p],!0):r.value,Vt(n,p,c);return n.length=p,n}});se.Array.from;var tn,nn="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView,rn=C.f,on=l.Int8Array,cn=on&&on.prototype,an=l.Uint8ClampedArray,sn=an&&an.prototype,un=on&&ft(on),ln=cn&&ft(cn),fn=Object.prototype,dn=fn.isPrototypeOf,pn=Ve("toStringTag"),hn=M("TYPED_ARRAY_TAG"),yn=nn&&!!At&&"Opera"!==Bt(l.opera),mn={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},vn=function(e){return k(e)&&O(mn,Bt(e))};for(tn in mn)l[tn]||(yn=!1);if((!yn||"function"!=typeof un||un===Function.prototype)&&(un=function(){throw TypeError("Incorrect invocation")},yn))for(tn in mn)l[tn]&&At(l[tn],un);if((!yn||!ln||ln===fn)&&(ln=un.prototype,yn))for(tn in mn)l[tn]&&At(l[tn].prototype,ln);if(yn&&ft(sn)!==ln&&At(sn,ln),d&&!O(ln,pn))for(tn in!0,rn(ln,pn,{get:function(){return k(this)?this[hn]:void 0}}),mn)l[tn]&&K(l[tn],hn,tn);var bn=function(e){if(vn(e))return e;throw TypeError("Target is not a typed array")},gn=function(e){if(At){if(dn.call(un,e))return e}else for(var t in mn)if(O(mn,tn)){var n=l[t];if(n&&(e===n||dn.call(n,e)))return e}throw TypeError("Target is not a typed array constructor")},wn=function(e,t,n){if(d){if(n)for(var r in mn){var o=l[r];o&&O(o.prototype,e)&&delete o.prototype[e]}ln[e]&&!n||ae(ln,e,n?t:yn&&cn[e]||t)}},Sn=Ve("species"),_n=bn,kn=gn,Tn=[].slice;wn("slice",(function(e,t){for(var n=Tn.call(_n(this),e,t),r=function(e,t){var n,r=U(e).constructor;return void 0===r||null==(n=U(r)[Sn])?t:tt(n)}(this,this.constructor),o=0,i=n.length,c=new(kn(r))(i);i>o;)c[o]=n[o++];return c}),f((function(){new Int8Array(1).slice()})));var In=Ve("unscopables"),On=Array.prototype;null==On[In]&&C.f(On,In,{configurable:!0,value:kt(null)});var En,jn=Object.defineProperty,xn={},An=function(e){throw e},Wn=ge.includes,Zn=function(e,t){if(O(xn,e))return xn[e];t||(t={});var n=[][e],r=!!O(t,"ACCESSORS")&&t.ACCESSORS,o=O(t,0)?t[0]:An,i=O(t,1)?t[1]:void 0;return xn[e]=!!n&&!f((function(){if(r&&!d)return!0;var e={length:-1};r?jn(e,1,{enumerable:!0,get:An}):e[1]=1,n.call(e,o,i)}))}("indexOf",{ACCESSORS:!0,1:0});Ke({target:"Array",proto:!0,forced:!Zn},{includes:function(e){return Wn(this,e,arguments.length>1?arguments[1]:void 0)}}),En="includes",On[In][En]=!0;ot("Array","includes");Ke({target:"String",proto:!0,forced:!ze("includes")},{includes:function(e){return!!~String(S(this)).indexOf(Je(e),arguments.length>1?arguments[1]:void 0)}});ot("String","includes");function Un(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))}var Ln=setTimeout;function Cn(e){return Boolean(e&&void 0!==e.length)}function Kn(){}function Pn(e){if(!(this instanceof Pn))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Yn(e,this)}function Rn(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,Pn._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void Xn(t.promise,e)}Gn(t.promise,r)}else(1===e._state?Gn:Xn)(t.promise,e._value)}))):e._deferreds.push(t)}function Gn(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof Pn)return e._state=3,e._value=t,void Fn(e);if("function"==typeof n)return void Yn((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,Fn(e)}catch(t){Xn(e,t)}var r,o}function Xn(e,t){e._state=2,e._value=t,Fn(e)}function Fn(e){2===e._state&&0===e._deferreds.length&&Pn._immediateFn((function(){e._handled||Pn._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)Rn(e,e._deferreds[t]);e._deferreds=null}function Vn(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function Yn(e,t){var n=!1;try{e((function(e){n||(n=!0,Gn(t,e))}),(function(e){n||(n=!0,Xn(t,e))}))}catch(e){if(n)return;n=!0,Xn(t,e)}}Pn.prototype.catch=function(e){return this.then(null,e)},Pn.prototype.then=function(e,t){var n=new this.constructor(Kn);return Rn(this,new Vn(e,t,n)),n},Pn.prototype.finally=Un,Pn.all=function(e){return new Pn((function(t,n){if(!Cn(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var a=c.then;if("function"==typeof a)return void a.call(c,(function(t){i(e,t)}),n)}r[e]=c,0==--o&&t(r)}catch(e){n(e)}}for(var c=0;c<r.length;c++)i(c,r[c])}))},Pn.resolve=function(e){return e&&"object"==typeof e&&e.constructor===Pn?e:new Pn((function(t){t(e)}))},Pn.reject=function(e){return new Pn((function(t,n){n(e)}))},Pn.race=function(e){return new Pn((function(t,n){if(!Cn(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,o=e.length;r<o;r++)Pn.resolve(e[r]).then(t,n)}))},Pn._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){Ln(e,0)},Pn._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var Jn=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")}();"Promise"in Jn?Jn.Promise.prototype.finally||(Jn.Promise.prototype.finally=Un):Jn.Promise=Pn,function(e){function t(){}function n(e,t){if(e=void 0===e?"utf-8":e,t=void 0===t?{fatal:!1}:t,-1==r.indexOf(e.toLowerCase()))throw new RangeError("Failed to construct 'TextDecoder': The encoding label provided ('"+e+"') is invalid.");if(t.fatal)throw Error("Failed to construct 'TextDecoder': the 'fatal' option is unsupported.")}if(e.TextEncoder&&e.TextDecoder)return!1;var r=["utf-8","utf8","unicode-1-1-utf-8"];Object.defineProperty(t.prototype,"encoding",{value:"utf-8"}),t.prototype.encode=function(e,t){if((t=void 0===t?{stream:!1}:t).stream)throw Error("Failed to encode: the 'stream' option is unsupported.");t=0;for(var n=e.length,r=0,o=Math.max(32,n+(n>>1)+7),i=new Uint8Array(o>>3<<3);t<n;){var c=e.charCodeAt(t++);if(55296<=c&&56319>=c){if(t<n){var a=e.charCodeAt(t);56320==(64512&a)&&(++t,c=((1023&c)<<10)+(1023&a)+65536)}if(55296<=c&&56319>=c)continue}if(r+4>i.length&&(o+=8,o=(o*=1+t/e.length*2)>>3<<3,(a=new Uint8Array(o)).set(i),i=a),0==(4294967168&c))i[r++]=c;else{if(0==(4294965248&c))i[r++]=c>>6&31|192;else if(0==(4294901760&c))i[r++]=c>>12&15|224,i[r++]=c>>6&63|128;else{if(0!=(4292870144&c))continue;i[r++]=c>>18&7|240,i[r++]=c>>12&63|128,i[r++]=c>>6&63|128}i[r++]=63&c|128}}return i.slice?i.slice(0,r):i.subarray(0,r)},Object.defineProperty(n.prototype,"encoding",{value:"utf-8"}),Object.defineProperty(n.prototype,"fatal",{value:!1}),Object.defineProperty(n.prototype,"ignoreBOM",{value:!1}),n.prototype.decode=function(e,t){if((t=void 0===t?{stream:!1}:t).stream)throw Error("Failed to decode: the 'stream' option is unsupported.");e.buffer instanceof ArrayBuffer&&(e=e.buffer),e=new Uint8Array(e),t=0;for(var n=[],r=[];;){var o=t<e.length;if(!o||65536&t){if(r.push(String.fromCharCode.apply(null,n)),!o)return r.join("");n=[],e=e.subarray(t),t=0}if(0===(o=e[t++]))n.push(0);else if(0==(128&o))n.push(o);else if(192==(224&o)){var i=63&e[t++];n.push((31&o)<<6|i)}else if(224==(240&o)){i=63&e[t++];var c=63&e[t++];n.push((31&o)<<12|i<<6|c)}else if(240==(248&o)){65535<(o=(7&o)<<18|(i=63&e[t++])<<12|(c=63&e[t++])<<6|63&e[t++])&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o)}}},e.TextEncoder=t,e.TextDecoder=n}("undefined"!=typeof window?window:c),function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var s=function(){function t(){e(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return n(t,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var n=this.listeners[e],r=0,o=n.length;r<o;r++)if(n[r]===t)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(e){var t=this;if(e.type in this.listeners){for(var n=function(n){setTimeout((function(){return n.call(t,e)}))},r=this.listeners[e.type],o=0,i=r.length;o<i;o++)n(r[o]);return!e.defaultPrevented}}}]),t}(),u=function(t){function c(){var t;return e(this,c),(t=function(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?i(e):t}(this,r(c).call(this))).listeners||s.call(i(t)),Object.defineProperty(i(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(i(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(c,t),n(c,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"==typeof this.onabort&&this.onabort.call(this,e)),a(r(c.prototype),"dispatchEvent",this).call(this,e)}}]),c}(s),l=function(){function t(){e(this,t),Object.defineProperty(this,"signal",{value:new u,writable:!0,configurable:!0})}return n(t,[{key:"abort",value:function(){var e;try{e=new Event("abort")}catch(t){"undefined"!=typeof document?document.createEvent?(e=document.createEvent("Event")).initEvent("abort",!1,!1):(e=document.createEventObject()).type="abort":e={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(e)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();"undefined"!=typeof Symbol&&Symbol.toStringTag&&(l.prototype[Symbol.toStringTag]="AbortController",u.prototype[Symbol.toStringTag]="AbortSignal"),function(e){(function(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"==typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController})(e)&&(e.AbortController=l,e.AbortSignal=u)}("undefined"!=typeof self?self:c)}();var Nn=s((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){var e=this;this.locked=new Map,this.addToLocked=function(t,n){var r=e.locked.get(t);void 0===r?void 0===n?e.locked.set(t,[]):e.locked.set(t,[n]):void 0!==n&&(r.unshift(n),e.locked.set(t,r))},this.isLocked=function(t){return e.locked.has(t)},this.lock=function(t){return new Promise((function(n,r){e.isLocked(t)?e.addToLocked(t,n):(e.addToLocked(t),n())}))},this.unlock=function(t){var n=e.locked.get(t);if(void 0!==n&&0!==n.length){var r=n.pop();e.locked.set(t,n),void 0!==r&&setTimeout(r,0)}else e.locked.delete(t)}}return e.getInstance=function(){return void 0===e.instance&&(e.instance=new e),e.instance},e}();t.default=function(){return n.getInstance()}}));a(Nn);var zn=a(s((function(e,t){var n=c&&c.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function c(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){e.done?o(e.value):new n((function(t){t(e.value)})).then(c,a)}s((r=r.apply(e,t||[])).next())}))},r=c&&c.__generator||function(e,t){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=c.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=t.call(e,c)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0});function o(e){return new Promise((function(t){return setTimeout(t,e)}))}function i(e){for(var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz",n="",r=0;r<e;r++){n+=t[Math.floor(Math.random()*t.length)]}return n}var a=function(){function e(){this.acquiredIatSet=new Set,this.id=Date.now().toString()+i(15),this.acquireLock=this.acquireLock.bind(this),this.releaseLock=this.releaseLock.bind(this),this.releaseLock__private__=this.releaseLock__private__.bind(this),this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),void 0===e.waiters&&(e.waiters=[])}return e.prototype.acquireLock=function(t,c){return void 0===c&&(c=5e3),n(this,void 0,void 0,(function(){var n,a,s,u,l,f;return r(this,(function(r){switch(r.label){case 0:n=Date.now()+i(4),a=Date.now()+c,s="browser-tabs-lock-key-"+t,u=window.localStorage,r.label=1;case 1:return Date.now()<a?[4,o(30)]:[3,8];case 2:return r.sent(),null!==u.getItem(s)?[3,5]:(l=this.id+"-"+t+"-"+n,[4,o(Math.floor(25*Math.random()))]);case 3:return r.sent(),u.setItem(s,JSON.stringify({id:this.id,iat:n,timeoutKey:l,timeAcquired:Date.now(),timeRefreshed:Date.now()})),[4,o(30)];case 4:return r.sent(),null!==(f=u.getItem(s))&&(f=JSON.parse(f)).id===this.id&&f.iat===n?(this.acquiredIatSet.add(n),this.refreshLockWhileAcquired(s,n),[2,!0]):[3,7];case 5:return e.lockCorrector(),[4,this.waitForSomethingToChange(a)];case 6:r.sent(),r.label=7;case 7:return n=Date.now()+i(4),[3,1];case 8:return[2,!1]}}))}))},e.prototype.refreshLockWhileAcquired=function(e,t){return n(this,void 0,void 0,(function(){var o=this;return r(this,(function(i){return setTimeout((function(){return n(o,void 0,void 0,(function(){var n,o;return r(this,(function(r){switch(r.label){case 0:return[4,Nn.default().lock(t)];case 1:return r.sent(),this.acquiredIatSet.has(t)?(n=window.localStorage,null===(o=n.getItem(e))?(Nn.default().unlock(t),[2]):((o=JSON.parse(o)).timeRefreshed=Date.now(),n.setItem(e,JSON.stringify(o)),Nn.default().unlock(t),this.refreshLockWhileAcquired(e,t),[2])):(Nn.default().unlock(t),[2])}}))}))}),1e3),[2]}))}))},e.prototype.waitForSomethingToChange=function(t){return n(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return[4,new Promise((function(n){var r=!1,o=Date.now(),i=!1;function c(){if(i||(window.removeEventListener("storage",c),e.removeFromWaiting(c),clearTimeout(a),i=!0),!r){r=!0;var t=50-(Date.now()-o);t>0?setTimeout(n,t):n()}}window.addEventListener("storage",c),e.addToWaiting(c);var a=setTimeout(c,Math.max(0,t-Date.now()))}))];case 1:return n.sent(),[2]}}))}))},e.addToWaiting=function(t){this.removeFromWaiting(t),void 0!==e.waiters&&e.waiters.push(t)},e.removeFromWaiting=function(t){void 0!==e.waiters&&(e.waiters=e.waiters.filter((function(e){return e!==t})))},e.notifyWaiters=function(){void 0!==e.waiters&&e.waiters.slice().forEach((function(e){return e()}))},e.prototype.releaseLock=function(e){return n(this,void 0,void 0,(function(){return r(this,(function(t){switch(t.label){case 0:return[4,this.releaseLock__private__(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.releaseLock__private__=function(t){return n(this,void 0,void 0,(function(){var n,o,i;return r(this,(function(r){switch(r.label){case 0:return n=window.localStorage,o="browser-tabs-lock-key-"+t,null===(i=n.getItem(o))?[2]:(i=JSON.parse(i)).id!==this.id?[3,2]:[4,Nn.default().lock(i.iat)];case 1:r.sent(),this.acquiredIatSet.delete(i.iat),n.removeItem(o),Nn.default().unlock(i.iat),e.notifyWaiters(),r.label=2;case 2:return[2]}}))}))},e.lockCorrector=function(){for(var t=Date.now()-5e3,n=window.localStorage,r=Object.keys(n),o=!1,i=0;i<r.length;i++){var c=r[i];if(c.includes("browser-tabs-lock-key")){var a=n.getItem(c);null!==a&&(void 0===(a=JSON.parse(a)).timeRefreshed&&a.timeAcquired<t||void 0!==a.timeRefreshed&&a.timeRefreshed<t)&&(n.removeItem(c),o=!0)}}o&&e.notifyWaiters()},e.waiters=void 0,e}();t.default=a})));var Bn={timeoutInSeconds:60},Dn=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))},Mn={error:"timeout",error_description:"Timeout"},qn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.filter(Boolean).join();return Dn(n.replace(/\s/g,",").split(",")).join(" ").trim()},Hn=function(e,t){var r,o,i,c=t.popup;if(c?c.location.href=e:(r=e,o=window.screenX+(window.innerWidth-400)/2,i=window.screenY+(window.innerHeight-600)/2,c=window.open(r,"auth0:authorize:popup","left="+o+",top="+i+",width=400,height=600,resizable,scrollbars=yes,status=1")),!c)throw new Error("Could not open popup");return new Promise((function(e,r){var o=setTimeout((function(){r(n(n({},Mn),{popup:c}))}),1e3*(t.timeoutInSeconds||60));window.addEventListener("message",(function(t){if(t.data&&"authorization_response"===t.data.type){if(clearTimeout(o),c.close(),t.data.response.error)return r(t.data.response);e(t.data.response)}}))}))},Qn=function(){var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.",t="";return Array.from(sr().getRandomValues(new Uint8Array(43))).forEach((function(n){return t+=e[n%e.length]})),t},$n=function(e){return btoa(e)},er=function(e){return Object.keys(e).filter((function(t){return void 0!==e[t]})).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")},tr=function(e){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return t=ur().digest({name:"SHA-256"},(new TextEncoder).encode(e)),window.msCrypto?[2,new Promise((function(e,n){t.oncomplete=function(t){e(t.target.result)},t.onerror=function(e){n(e.error)},t.onabort=function(){n("The digest operation was aborted")}}))]:[4,t];case 1:return[2,n.sent()]}}))}))},nr=function(e){return function(e){return decodeURIComponent(atob(e).split("").map((function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))}(e.replace(/_/g,"/").replace(/-/g,"+"))},rr=function(e){var t=new Uint8Array(e);return function(e){var t={"+":"-","/":"_","=":""};return e.replace(/[\+\/=]/g,(function(e){return t[e]}))}(window.btoa(String.fromCharCode.apply(String,Array.from(t))))},or=function(e,t,r,c){return o(void 0,void 0,void 0,(function(){var o,a;return i(this,(function(i){switch(i.label){case 0:return c?(delete t.signal,[2,(l=n({url:e,timeout:r},t),f=c,new Promise((function(e,t){var n=new MessageChannel;n.port1.onmessage=function(n){n.data.error?t(new Error(n.data.error)):e(n.data)},f.postMessage(l,[n.port2])})))]):[3,1];case 1:return[4,(s=e,u=t,u=u||{},new Promise((function(e,t){var n=new XMLHttpRequest,r=[],o=[],i={},c=function(){return{ok:2==(n.status/100|0),statusText:n.statusText,status:n.status,url:n.responseURL,text:function(){return Promise.resolve(n.responseText)},json:function(){return Promise.resolve(JSON.parse(n.responseText))},blob:function(){return Promise.resolve(new Blob([n.response]))},clone:c,headers:{keys:function(){return r},entries:function(){return o},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var a in n.open(u.method||"get",s,!0),n.onload=function(){n.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(e,t,n){r.push(t=t.toLowerCase()),o.push([t,n]),i[t]=i[t]?i[t]+","+n:n})),e(c())},n.onerror=t,n.withCredentials="include"==u.credentials,u.headers)n.setRequestHeader(a,u.headers[a]);n.send(u.body||null)})))];case 2:return o=i.sent(),a={ok:o.ok},[4,o.json()];case 3:return[2,(a.json=i.sent(),a)]}var s,u,l,f}))}))},ir=function(e,t,r,o){void 0===o&&(o=1e4);var i=new AbortController,c=i.signal,a=n(n({},t),{signal:c});return Promise.race([or(e,a,o,r),new Promise((function(e,t){setTimeout((function(){i.abort(),t(new Error("Timeout when executing 'fetch'"))}),o)}))])},cr=function(e,t,n,c){return o(void 0,void 0,void 0,(function(){var o,a,s,u,l,f,d,p,h,y;return i(this,(function(i){switch(i.label){case 0:s=0,i.label=1;case 1:if(!(s<3))return[3,6];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,ir(e,n,c,t)];case 3:return a=i.sent(),o=null,[3,6];case 4:return u=i.sent(),o=u,[3,5];case 5:return s++,[3,1];case 6:if(o)throw o;if(l=a.json,f=l.error,d=l.error_description,p=r(l,["error","error_description"]),!a.ok)throw h=d||"HTTP error. Unable to fetch "+e,(y=new Error(h)).error=f||"request_error",y.error_description=h,y;return[2,p]}}))}))},ar=function(e,t){return o(void 0,void 0,void 0,(function(){var o=e.baseUrl,c=e.timeout,a=r(e,["baseUrl","timeout"]);return i(this,(function(e){switch(e.label){case 0:return[4,cr(o+"/oauth/token",c,{method:"POST",body:JSON.stringify(n({redirect_uri:window.location.origin},a)),headers:{"Content-type":"application/json"}},t)];case 1:return[2,e.sent()]}}))}))},sr=function(){return window.crypto||window.msCrypto},ur=function(){var e=sr();return e.subtle||e.webkitSubtle},lr=function(e){return"@@auth0spajs@@::"+e.client_id+"::"+e.audience+"::"+e.scope},fr=function(e){var t=Math.floor(Date.now()/1e3)+e.expires_in;return{body:e,expiresAt:Math.min(t,e.decodedToken.claims.exp)-60}},dr=function(){function e(){}return e.prototype.save=function(e){var t=lr(e),n=fr(e);window.localStorage.setItem(t,JSON.stringify(n))},e.prototype.get=function(e){var t=lr(e),n=this.readJson(t),r=Math.floor(Date.now()/1e3);if(n){if(!(n.expiresAt<r))return n.body;if(n.body.refresh_token){var o=this.stripData(n);return this.writeJson(t,o),o.body}localStorage.removeItem(t)}},e.prototype.clear=function(){for(var e=localStorage.length-1;e>=0;e--)localStorage.key(e).startsWith("@@auth0spajs@@")&&localStorage.removeItem(localStorage.key(e))},e.prototype.readJson=function(e){var t,n=window.localStorage.getItem(e);if(n&&(t=JSON.parse(n)))return t},e.prototype.writeJson=function(e,t){localStorage.setItem(e,JSON.stringify(t))},e.prototype.stripData=function(e){return{body:{refresh_token:e.body.refresh_token},expiresAt:e.expiresAt}},e}(),pr=function(){this.enclosedCache=function(){var e={body:{},expiresAt:0};return{save:function(t){var n=lr(t),r=fr(t);e[n]=r},get:function(t){var n=lr(t),r=e[n],o=Math.floor(Date.now()/1e3);if(r)return r.expiresAt<o?r.body.refresh_token?(r.body={refresh_token:r.body.refresh_token},r.body):void delete e[n]:r.body},clear:function(){e={body:{},expiresAt:0}}}}()},hr=s((function(e,t){var n=c&&c.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function r(e,t){if(!t)return"";var n="; "+e;return!0===t?n:n+"="+t}function o(e,t,n){return encodeURIComponent(e).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/\(/g,"%28").replace(/\)/g,"%29")+"="+encodeURIComponent(t).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent)+function(e){if("number"==typeof e.expires){var t=new Date;t.setMilliseconds(t.getMilliseconds()+864e5*e.expires),e.expires=t}return r("Expires",e.expires?e.expires.toUTCString():"")+r("Domain",e.domain)+r("Path",e.path)+r("Secure",e.secure)+r("SameSite",e.sameSite)}(n)}function i(e){for(var t={},n=e?e.split("; "):[],r=/(%[\dA-F]{2})+/gi,o=0;o<n.length;o++){var i=n[o].split("="),c=i.slice(1).join("=");'"'===c.charAt(0)&&(c=c.slice(1,-1));try{t[i[0].replace(r,decodeURIComponent)]=c.replace(r,decodeURIComponent)}catch(e){}}return t}function a(){return i(document.cookie)}function s(e,t,r){document.cookie=o(e,t,n({path:"/"},r))}t.__esModule=!0,t.encode=o,t.parse=i,t.getAll=a,t.get=function(e){return a()[e]},t.set=s,t.remove=function(e,t){s(e,"",n(n({},t),{expires:-1}))}}));a(hr);hr.encode,hr.parse;var yr=hr.getAll,mr=hr.get,vr=hr.set,br=hr.remove,gr=function(e){var t=mr(e);if(void 0!==t)return JSON.parse(t)},wr=function(e,t,n){vr(e,JSON.stringify(t),{expires:n.daysUntilExpire})},Sr=function(e){br(e)},_r=function(e){return"a0.spajs.txs."+e},kr=function(){function e(){var e=this;this.transactions={},Object.keys(yr()||{}).filter((function(e){return e.startsWith("a0.spajs.txs.")})).forEach((function(t){var n=t.replace("a0.spajs.txs.","");e.transactions[n]=gr(t)}))}return e.prototype.create=function(e,t){this.transactions[e]=t,wr(_r(e),t,{daysUntilExpire:1})},e.prototype.get=function(e){return this.transactions[e]},e.prototype.remove=function(e){delete this.transactions[e],Sr(_r(e))},e}(),Tr=function(e){return"number"==typeof e},Ir=["iss","aud","exp","nbf","iat","jti","azp","nonce","auth_time","at_hash","c_hash","acr","amr","sub_jwk","cnf","sip_from_tag","sip_date","sip_callid","sip_cseq_num","sip_via_branch","orig","dest","mky","events","toe","txn","rph","sid","vot","vtm"],Or=function(e){if(!e.id_token)throw new Error("ID token is required but missing");var t=function(e){var t=e.split("."),n=t[0],r=t[1],o=t[2];if(3!==t.length||!n||!r||!o)throw new Error("ID token could not be decoded");var i=JSON.parse(nr(r)),c={__raw:e},a={};return Object.keys(i).forEach((function(e){c[e]=i[e],Ir.includes(e)||(a[e]=i[e])})),{encoded:{header:n,payload:r,signature:o},header:JSON.parse(nr(n)),claims:c,user:a}}(e.id_token);if(!t.claims.iss)throw new Error("Issuer (iss) claim must be a string present in the ID token");if(t.claims.iss!==e.iss)throw new Error('Issuer (iss) claim mismatch in the ID token; expected "'+e.iss+'", found "'+t.claims.iss+'"');if(!t.user.sub)throw new Error("Subject (sub) claim must be a string present in the ID token");if("RS256"!==t.header.alg)throw new Error('Signature algorithm of "'+t.header.alg+'" is not supported. Expected the ID token to be signed with "RS256".');if(!t.claims.aud||"string"!=typeof t.claims.aud&&!Array.isArray(t.claims.aud))throw new Error("Audience (aud) claim must be a string or array of strings present in the ID token");if(Array.isArray(t.claims.aud)){if(!t.claims.aud.includes(e.aud))throw new Error('Audience (aud) claim mismatch in the ID token; expected "'+e.aud+'" but was not one of "'+t.claims.aud.join(", ")+'"');if(t.claims.aud.length>1){if(!t.claims.azp)throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");if(t.claims.azp!==e.aud)throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'+e.aud+'", found "'+t.claims.azp+'"')}}else if(t.claims.aud!==e.aud)throw new Error('Audience (aud) claim mismatch in the ID token; expected "'+e.aud+'" but found "'+t.claims.aud+'"');if(e.nonce){if(!t.claims.nonce)throw new Error("Nonce (nonce) claim must be a string present in the ID token");if(t.claims.nonce!==e.nonce)throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'+e.nonce+'", found "'+t.claims.nonce+'"')}if(e.max_age&&!Tr(t.claims.auth_time))throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");if(!Tr(t.claims.exp))throw new Error("Expiration Time (exp) claim must be a number present in the ID token");if(!Tr(t.claims.iat))throw new Error("Issued At (iat) claim must be a number present in the ID token");var n=e.leeway||60,r=new Date,o=new Date(0),i=new Date(0),c=new Date(0);if(c.setUTCSeconds((parseInt(t.claims.auth_time)+e.max_age)/1e3+n),o.setUTCSeconds(t.claims.exp+n),i.setUTCSeconds(t.claims.nbf-n),r>o)throw new Error("Expiration Time (exp) claim error in the ID token; current time ("+r+") is after expiration time ("+o+")");if(Tr(t.claims.nbf)&&r<i)throw new Error("Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time ("+r+") is before "+i);if(Tr(t.claims.auth_time)&&r>c)throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time ("+r+") is after last auth at "+c);return t},Er=function(e){function n(t,r,o,i){void 0===i&&(i=null);var c=e.call(this,t,r)||this;return c.state=o,c.appState=i,Object.setPrototypeOf(c,n.prototype),c}return t(n,e),n}(function(e){function n(t,r){var o=e.call(this,r)||this;return o.error=t,o.error_description=r,Object.setPrototypeOf(o,n.prototype),o}return t(n,e),n}(Error)),jr="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0),xr=jr&&"function"==typeof module.require?module.require:null;var Ar=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n=!1);var r=jr?function(e,t){return Buffer.from(e,"base64").toString(t?"utf16":"utf8")}(e,n):function(e,t){var n=atob(e);if(t){var r=new Uint8Array(n.length);return Array.prototype.forEach.call(r,(function(e,t,r){r[t]=n.charCodeAt(t)})),String.fromCharCode.apply(null,new Uint16Array(r.buffer))}return n}(e,n),o=r.indexOf("\n",10)+1,i=r.substring(o)+(t?"//# sourceMappingURL="+t:"");if(xr){var c=xr("worker_threads").Worker;return function(e){return new c(i,Object.assign({},e,{eval:!0}))}}var a=new Blob([i],{type:"application/javascript"}),s=URL.createObjectURL(a);return function(e){return new Worker(s,e)}}("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwovKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioKQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOyB5b3UgbWF5IG5vdCB1c2UKdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUKTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKClRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkKS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRApXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLApNRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULgoKU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zCmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi8KdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0O2FkZEV2ZW50TGlzdGVuZXIoIm1lc3NhZ2UiLChmdW5jdGlvbihuKXt2YXIgbyxzLGEsaSx1LGwsYyxmLHA7cmV0dXJuIGw9dm9pZCAwLGM9dm9pZCAwLHA9ZnVuY3Rpb24oKXt2YXIgbCxjLGYscCxoLHksYjtyZXR1cm4gcih0aGlzLChmdW5jdGlvbihyKXtzd2l0Y2goci5sYWJlbCl7Y2FzZSAwOm89bi5kYXRhLHM9by51cmwsYT1vLnRpbWVvdXQsaT1mdW5jdGlvbihlLHIpe3ZhciB0PXt9O2Zvcih2YXIgbiBpbiBlKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG4pJiZyLmluZGV4T2Yobik8MCYmKHRbbl09ZVtuXSk7aWYobnVsbCE9ZSYmImZ1bmN0aW9uIj09dHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBvPTA7Zm9yKG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtvPG4ubGVuZ3RoO28rKylyLmluZGV4T2YobltvXSk8MCYmT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUsbltvXSkmJih0W25bb11dPWVbbltvXV0pfXJldHVybiB0fShvLFsidXJsIiwidGltZW91dCJdKSx1PW4ucG9ydHNbMF0sci5sYWJlbD0xO2Nhc2UgMTppZihyLnRyeXMucHVzaChbMSw3LCw4XSksIShjPUpTT04ucGFyc2UoaS5ib2R5KSkucmVmcmVzaF90b2tlbiYmInJlZnJlc2hfdG9rZW4iPT09Yy5ncmFudF90eXBlKXtpZighdCl0aHJvdyBuZXcgRXJyb3IoIlRoZSB3ZWIgd29ya2VyIGlzIG1pc3NpbmcgdGhlIHJlZnJlc2ggdG9rZW4iKTtpLmJvZHk9SlNPTi5zdHJpbmdpZnkoZShlKHt9LGMpLHtyZWZyZXNoX3Rva2VuOnR9KSl9Zj1uZXcgQWJvcnRDb250cm9sbGVyLHA9Zi5zaWduYWwsaD12b2lkIDAsci5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gci50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKHY9YSxuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSl7cmV0dXJuIHNldFRpbWVvdXQoZSx2KX0pKSksZmV0Y2gocyxlKGUoe30saSkse3NpZ25hbDpwfSkpXSldO2Nhc2UgMzpyZXR1cm4gaD1yLnNlbnQoKSxbMyw1XTtjYXNlIDQ6cmV0dXJuIHk9ci5zZW50KCksdS5wb3N0TWVzc2FnZSh7ZXJyb3I6eS5tZXNzYWdlfSksWzJdO2Nhc2UgNTpyZXR1cm4gaD9bNCxoLmpzb24oKV06KGYuYWJvcnQoKSxbMl0pO2Nhc2UgNjpyZXR1cm4obD1yLnNlbnQoKSkucmVmcmVzaF90b2tlbj8odD1sLnJlZnJlc2hfdG9rZW4sZGVsZXRlIGwucmVmcmVzaF90b2tlbik6dD1udWxsLHUucG9zdE1lc3NhZ2Uoe29rOmgub2ssanNvbjpsfSksWzMsOF07Y2FzZSA3OnJldHVybiBiPXIuc2VudCgpLHUucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yX2Rlc2NyaXB0aW9uOmIubWVzc2FnZX19KSxbMyw4XTtjYXNlIDg6cmV0dXJuWzJdfXZhciB2fSkpfSxuZXcoKGY9dm9pZCAwKXx8KGY9UHJvbWlzZSkpKChmdW5jdGlvbihlLHIpe2Z1bmN0aW9uIHQoZSl7dHJ5e28ocC5uZXh0KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBuKGUpe3RyeXtvKHAudGhyb3coZSkpfWNhdGNoKGUpe3IoZSl9fWZ1bmN0aW9uIG8ocil7ci5kb25lP2Uoci52YWx1ZSk6bmV3IGYoKGZ1bmN0aW9uKGUpe2Uoci52YWx1ZSl9KSkudGhlbih0LG4pfW8oKHA9cC5hcHBseShsLGN8fFtdKSkubmV4dCgpKX0pKX0pKTsKCg==",null,!1),Wr=new zn,Zr={memory:function(){return(new pr).enclosedCache},localstorage:function(){return new dr}},Ur=function(e){return Zr[e]},Lr=function(){function e(e){if(this.options=e,this.DEFAULT_SCOPE="openid profile email",function(){if(!sr())throw new Error("For security reasons, `window.crypto` is required to run `auth0-spa-js`.");if(void 0===ur())throw new Error("\n      auth0-spa-js must run on a secure origin.\n      See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin \n      for more information.\n    ")}(),this.cacheLocation=e.cacheLocation||"memory",!Ur(this.cacheLocation))throw new Error('Invalid cache location "'+this.cacheLocation+'"');this.cache=Ur(this.cacheLocation)(),this.transactionManager=new kr,this.domainUrl="https://"+this.options.domain,this.tokenIssuer=this.options.issuer?"https://"+this.options.issuer+"/":this.domainUrl+"/",this.options.useRefreshTokens&&(this.options.scope=qn(this.options.scope,"offline_access")),window.Worker&&this.options.useRefreshTokens&&"memory"===this.cacheLocation&&!/Trident.*rv:11\.0/.test(navigator.userAgent)&&(this.worker=new Ar)}return e.prototype._url=function(e){var t=encodeURIComponent(btoa(JSON.stringify({name:"auth0-spa-js",version:"1.7.0"})));return""+this.domainUrl+e+"&auth0Client="+t},e.prototype._getParams=function(e,t,o,i,c){var a=this.options,s=(a.domain,a.leeway,a.useRefreshTokens,a.cacheLocation,r(a,["domain","leeway","useRefreshTokens","cacheLocation"]));return n(n(n({},s),e),{scope:qn(this.DEFAULT_SCOPE,this.options.scope,e.scope),response_type:"code",response_mode:"query",state:t,nonce:o,redirect_uri:c||this.options.redirect_uri,code_challenge:i,code_challenge_method:"S256"})},e.prototype._authorizeUrl=function(e){return this._url("/authorize?"+er(e))},e.prototype._verifyIdToken=function(e,t){return Or({iss:this.tokenIssuer,aud:this.options.client_id,id_token:e,nonce:t,leeway:this.options.leeway,max_age:this._parseNumber(this.options.max_age)})},e.prototype._parseNumber=function(e){return"string"!=typeof e?e:parseInt(e,10)||void 0},e.prototype.buildAuthorizeUrl=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){var t,n,o,c,a,s,u,l,f,d,p;return i(this,(function(i){switch(i.label){case 0:return t=e.redirect_uri,n=e.appState,o=r(e,["redirect_uri","appState"]),c=$n(Qn()),a=$n(Qn()),s=Qn(),[4,tr(s)];case 1:return u=i.sent(),l=rr(u),f=e.fragment?"#"+e.fragment:"",d=this._getParams(o,c,a,l,t),p=this._authorizeUrl(d),this.transactionManager.create(c,{nonce:a,code_verifier:s,appState:n,scope:d.scope,audience:d.audience||"default",redirect_uri:d.redirect_uri}),[2,p+f]}}))}))},e.prototype.loginWithPopup=function(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),o(this,void 0,void 0,(function(){var o,c,a,s,u,l,f,d,p,h,y,m;return i(this,(function(i){switch(i.label){case 0:return o=r(e,[]),c=$n(Qn()),a=$n(Qn()),s=Qn(),[4,tr(s)];case 1:return u=i.sent(),l=rr(u),f=this._getParams(o,c,a,l,this.options.redirect_uri||window.location.origin),d=this._authorizeUrl(n(n({},f),{response_mode:"web_message"})),[4,Hn(d,n(n({},t),{timeoutInSeconds:t.timeoutInSeconds||this.options.authorizeTimeoutInSeconds||60}))];case 2:if(p=i.sent(),c!==p.state)throw new Error("Invalid state");return[4,ar({baseUrl:this.domainUrl,client_id:this.options.client_id,code_verifier:s,code:p.code,grant_type:"authorization_code",redirect_uri:f.redirect_uri},this.worker)];case 3:return h=i.sent(),y=this._verifyIdToken(h.id_token,a),m=n(n({},h),{decodedToken:y,scope:f.scope,audience:f.audience||"default",client_id:this.options.client_id}),this.cache.save(m),wr("auth0.is.authenticated",!0,{daysUntilExpire:1}),[2]}}))}))},e.prototype.getUser=function(e){return void 0===e&&(e={audience:this.options.audience||"default",scope:this.options.scope||this.DEFAULT_SCOPE}),o(this,void 0,void 0,(function(){var t;return i(this,(function(r){return e.scope=qn(this.DEFAULT_SCOPE,e.scope),[2,(t=this.cache.get(n({client_id:this.options.client_id},e)))&&t.decodedToken&&t.decodedToken.user]}))}))},e.prototype.getIdTokenClaims=function(e){return void 0===e&&(e={audience:this.options.audience||"default",scope:this.options.scope||this.DEFAULT_SCOPE}),o(this,void 0,void 0,(function(){var t;return i(this,(function(r){return e.scope=qn(this.DEFAULT_SCOPE,this.options.scope,e.scope),[2,(t=this.cache.get(n({client_id:this.options.client_id},e)))&&t.decodedToken&&t.decodedToken.claims]}))}))},e.prototype.loginWithRedirect=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){var t;return i(this,(function(n){switch(n.label){case 0:return[4,this.buildAuthorizeUrl(e)];case 1:return t=n.sent(),window.location.assign(t),[2]}}))}))},e.prototype.handleRedirectCallback=function(e){return void 0===e&&(e=window.location.href),o(this,void 0,void 0,(function(){var t,r,o,c,a,s,u,l,f,d,p;return i(this,(function(i){switch(i.label){case 0:if(0===(t=e.split("?").slice(1)).length)throw new Error("There are no query params available for parsing.");if(r=function(e){e.indexOf("#")>-1&&(e=e.substr(0,e.indexOf("#")));var t=e.split("&"),r={};return t.forEach((function(e){var t=e.split("="),n=t[0],o=t[1];r[n]=decodeURIComponent(o)})),n(n({},r),{expires_in:parseInt(r.expires_in)})}(t.join("")),o=r.state,c=r.code,a=r.error,s=r.error_description,!(u=this.transactionManager.get(o)))throw new Error("Invalid state");if(a)throw this.transactionManager.remove(o),new Er(a,s,o,u.appState);return this.transactionManager.remove(o),l={baseUrl:this.domainUrl,client_id:this.options.client_id,code_verifier:u.code_verifier,grant_type:"authorization_code",code:c},void 0!==u.redirect_uri&&(l.redirect_uri=u.redirect_uri),[4,ar(l,this.worker)];case 1:return f=i.sent(),d=this._verifyIdToken(f.id_token,u.nonce),p=n(n({},f),{decodedToken:d,audience:u.audience,scope:u.scope,client_id:this.options.client_id}),this.cache.save(p),wr("auth0.is.authenticated",!0,{daysUntilExpire:1}),[2,{appState:u.appState}]}}))}))},e.prototype.getTokenSilently=function(e){return void 0===e&&(e={}),o(this,void 0,void 0,(function(){var t,o,c,a,s,u;return i(this,(function(i){switch(i.label){case 0:t=n({audience:this.options.audience,scope:qn(this.DEFAULT_SCOPE,this.options.scope,e.scope),ignoreCache:!1},e),o=t.ignoreCache,c=r(t,["ignoreCache"]),i.label=1;case 1:return i.trys.push([1,7,8,10]),!o&&(a=this.cache.get({scope:c.scope,audience:c.audience||"default",client_id:this.options.client_id}))&&a.access_token?[2,a.access_token]:[4,Wr.acquireLock("auth0.lock.getTokenSilently",5e3)];case 2:return i.sent(),!this.options.useRefreshTokens||e.audience?[3,4]:[4,this._getTokenUsingRefreshToken(c)];case 3:return u=i.sent(),[3,6];case 4:return[4,this._getTokenFromIFrame(c)];case 5:u=i.sent(),i.label=6;case 6:return s=u,this.cache.save(n({client_id:this.options.client_id},s)),wr("auth0.is.authenticated",!0,{daysUntilExpire:1}),[2,s.access_token];case 7:throw i.sent();case 8:return[4,Wr.releaseLock("auth0.lock.getTokenSilently")];case 9:return i.sent(),[7];case 10:return[2]}}))}))},e.prototype.getTokenWithPopup=function(e,t){return void 0===e&&(e={audience:this.options.audience,scope:this.options.scope||this.DEFAULT_SCOPE}),void 0===t&&(t=Bn),o(this,void 0,void 0,(function(){return i(this,(function(n){switch(n.label){case 0:return e.scope=qn(this.DEFAULT_SCOPE,this.options.scope,e.scope),[4,this.loginWithPopup(e,t)];case 1:return n.sent(),[2,this.cache.get({scope:e.scope,audience:e.audience||"default",client_id:this.options.client_id}).access_token]}}))}))},e.prototype.isAuthenticated=function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,this.getUser()];case 1:return[2,!!e.sent()]}}))}))},e.prototype.logout=function(e){void 0===e&&(e={}),null!==e.client_id?e.client_id=e.client_id||this.options.client_id:delete e.client_id;var t=e.federated,n=e.localOnly,o=r(e,["federated","localOnly"]);if(n&&t)throw new Error("It is invalid to set both the `federated` and `localOnly` options to `true`");if(this.cache.clear(),Sr("auth0.is.authenticated"),!n){var i=t?"&federated":"",c=this._url("/v2/logout?"+er(o));window.location.assign(""+c+i)}},e.prototype._getTokenFromIFrame=function(e){return o(this,void 0,void 0,(function(){var t,r,o,c,a,s,u,l,f,d,p;return i(this,(function(i){switch(i.label){case 0:return t=$n(Qn()),r=$n(Qn()),o=Qn(),[4,tr(o)];case 1:return c=i.sent(),a=rr(c),s=this._getParams(e,t,r,a,e.redirect_uri||this.options.redirect_uri||window.location.origin),u=this._authorizeUrl(n(n({},s),{prompt:"none",response_mode:"web_message"})),l=e.timeoutInSeconds||this.options.authorizeTimeoutInSeconds,[4,(h=u,y=this.domainUrl,m=l,void 0===m&&(m=60),new Promise((function(e,t){var n=window.document.createElement("iframe");n.setAttribute("width","0"),n.setAttribute("height","0"),n.style.display="none";var r=function(){window.document.body.contains(n)&&window.document.body.removeChild(n)},o=setTimeout((function(){t(Mn),r()}),1e3*m),i=function(n){if(n.origin==y&&n.data&&"authorization_response"===n.data.type){var c=n.source;c&&c.close(),n.data.response.error?t(n.data.response):e(n.data.response),clearTimeout(o),window.removeEventListener("message",i,!1),setTimeout(r,2e3)}};window.addEventListener("message",i,!1),window.document.body.appendChild(n),n.setAttribute("src",h)})))];case 2:if(f=i.sent(),t!==f.state)throw new Error("Invalid state");return[4,ar({baseUrl:this.domainUrl,client_id:this.options.client_id,code_verifier:o,code:f.code,grant_type:"authorization_code",redirect_uri:s.redirect_uri},this.worker)];case 3:return d=i.sent(),p=this._verifyIdToken(d.id_token,r),[2,n(n({},d),{decodedToken:p,scope:s.scope,audience:s.audience||"default"})]}var h,y,m}))}))},e.prototype._getTokenUsingRefreshToken=function(e){return o(this,void 0,void 0,(function(){var t,r,o,c,a;return i(this,(function(i){switch(i.label){case 0:return e.scope=qn(this.DEFAULT_SCOPE,this.options.scope,e.scope),(t=this.cache.get({scope:e.scope,audience:e.audience||"default",client_id:this.options.client_id}))&&t.refresh_token||this.worker?[3,2]:[4,this._getTokenFromIFrame(e)];case 1:return[2,i.sent()];case 2:r=e.redirect_uri||this.options.redirect_uri||window.location.origin,i.label=3;case 3:return i.trys.push([3,5,,8]),[4,ar({baseUrl:this.domainUrl,client_id:this.options.client_id,grant_type:"refresh_token",refresh_token:t&&t.refresh_token,redirect_uri:r},this.worker)];case 4:return o=i.sent(),[3,8];case 5:return"The web worker is missing the refresh token"!==(c=i.sent()).message?[3,7]:[4,this._getTokenFromIFrame(e)];case 6:return[2,i.sent()];case 7:throw c;case 8:return a=this._verifyIdToken(o.id_token),[2,n(n({},o),{decodedToken:a,scope:e.scope,audience:e.audience||"default"})]}}))}))},e}();/* harmony default export */ __webpack_exports__["default"] = (function(e){return o(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:if("memory"===(t=new Lr(e)).cacheLocation&&!gr("auth0.is.authenticated"))return[2,t];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t.getTokenSilently()];case 2:return r.sent(),[3,4];case 3:if("login_required"!==(n=r.sent()).error)throw n;return[3,4];case 4:return[2,t]}}))}))});
//# sourceMappingURL=auth0-spa-js.production.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../../../buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/@brainhubeu/react-carousel/lib/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/@brainhubeu/react-carousel/lib/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@brainhubeu/react-carousel/lib/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@brainhubeu/react-carousel/lib/style.css",
      function () {
        var newContent = __webpack_require__(/*! !../../../css-loader/dist/cjs.js??ref--5-oneOf-5-1!../../../next/dist/compiled/postcss-loader??__nextjs_postcss!./style.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@brainhubeu/react-carousel/lib/style.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/@brainhubeu/react-carousel/lib/style.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/@brainhubeu/react-carousel/lib/style.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".BrainhubCarouselItem{display:flex;justify-content:center;align-items:center;position:relative}.BrainhubCarouselItem.BrainhubCarouselItem--clickable{cursor:pointer}.BrainhubCarouselItem .debug-number{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;font-size:2em;text-shadow:0px 0px 9px white}\n.BrainhubCarousel{overflow:hidden;display:flex;align-items:center}.BrainhubCarousel.BrainhubCarousel--isRTL{direction:rtl}.BrainhubCarousel.BrainhubCarousel--isRTL .BrainhubCarousel__trackContainer .BrainhubCarousel__track{direction:rtl}.BrainhubCarousel .BrainhubCarousel__trackContainer{overflow:hidden}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track{display:flex;overflow:hidden;list-style:none;margin:0;padding:0}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track.BrainhubCarousel__track--transition{transition:transform}.BrainhubCarousel__arrows{cursor:pointer}\n.BrainhubCarousel__dots{display:flex;justify-content:center;list-style:none;margin:0;padding:0;font-size:0;line-height:0}.BrainhubCarousel__dots.BrainhubCarousel__dots--isRTL{direction:rtl}.BrainhubCarousel__dots .BrainhubCarousel__dot{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer;-webkit-appearance:none}.BrainhubCarousel__dots .BrainhubCarousel__dot.BrainhubCarousel__dot--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__dot:hover{opacity:1}.BrainhubCarousel__dots .BrainhubCarousel__dot:before{content:'';display:block;width:5px;height:5px;border-radius:50%;padding:0;border:none;background:#000}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail.BrainhubCarousel__thumbnail--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover{opacity:1}.BrainhubCarousel__thumbnail[type=button]{-webkit-appearance:none}.BrainhubCarousel--isRTL+.BrainhubCarousel__dots{direction:rtl}\n.BrainhubCarousel__arrows{position:relative;padding:21px;border:none;overflow:hidden;outline:0;font-size:0;line-height:0;background-color:#7b59ff}.BrainhubCarousel__arrows span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover{background-color:#8768ff}.BrainhubCarousel__arrows:hover span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover:enabled{background-color:#8768ff}.BrainhubCarousel__arrows:hover:enabled span{border-color:#fff;margin:0}.BrainhubCarousel__arrows:disabled{background-color:#ccc}.BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowLeft span{transform:rotate(180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowRight span{transform:rotate(-180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrows:hover span{margin:0}.BrainhubCarousel__arrow--disable{pointer-events:none}\n\n/*# sourceMappingURL=style.css.map*/", "",{"version":3,"sources":["/home/crmock/pideenlaequina/front/webpack:/react-carousel/src/styles/CarouselItem.scss","/home/crmock/pideenlaequina/front/webpack:/react-carousel/src/styles/Carousel.scss","/home/crmock/pideenlaequina/front/webpack:/react-carousel/src/styles/CarouselDots.scss","/home/crmock/pideenlaequina/front/webpack:/react-carousel/src/styles/Arrows.scss","/home/crmock/pideenlaequina/front/node_modules/@brainhubeu/react-carousel/lib/style.css"],"names":[],"mappings":"AAAA,sBACE,YAAa,CACb,sBAAuB,CACvB,kBAAmB,CACnB,iBAAkB,CAJpB,sDAMI,cAAe,CANnB,oCAYI,iBAAkB,CAClB,KAAM,CACN,QAAS,CACT,MAAO,CACP,OAAQ,CACR,YAAa,CACb,sBAAuB,CACvB,aAAc,CACd,6BAA8B;ACpBlC,kBACE,eAAgB,CAChB,YAAa,CACb,kBAAmB,CAHrB,0CAMI,aAAc,CANlB,qGAUQ,aAAc,CAVtB,oDAgBI,eAAgB,CAhBpB,6EAkBM,YAAa,CACb,eAAgB,CAChB,eAAgB,CAChB,QAAS,CACT,SAAU,CAtBhB,iHAyBQ,oBAAqB,CACtB,0BAOL,cAAe;AC9BjB,wBACE,YAAa,CACb,sBAAuB,CACvB,eAAgB,CAChB,QAAS,CACT,SAAU,CACV,WAAY,CACZ,aAAc,CAPhB,sDAUI,aAAc,CAVlB,+CAcI,SAAU,CACV,YAAa,CACb,WAAY,CACZ,WAAY,CACZ,cAAe,CACf,uBAAwB,CAnB5B,+EAsBM,oBAAqB,CAtB3B,qDA0BM,SAAU,CA1BhB,sDA8BM,UAAW,CACX,aAAc,CACd,SAAU,CACV,UAAW,CACX,iBAAkB,CAClB,SAAU,CACV,WAAY,CACZ,eAvCY,CAElB,qDA0CI,SAAU,CACV,YAAa,CACb,WAAY,CACZ,WAAY,CACZ,cAAe,CA9CnB,2FAiDM,oBAAqB,CAjD3B,2DAqDM,SAAU,CACX,0CAKH,uBAAwB,CACzB,iDAIG,aAAc;ACzDlB,0BACE,iBAAkB,CAClB,YAA6B,CAC7B,WAAY,CACZ,eAAgB,CAChB,SAAU,CACV,WAAY,CACZ,aAAc,CACd,wBAjB0B,CAS5B,+BAWI,aAAc,CACd,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,kBAAmB,CACnB,iBArBa,CAsBb,wBAA2C,CAC3C,WAAqB,CACrB,eAAgB,CAChB,WAAY,CApBhB,gCAwBI,wBAhC4C,CAQhD,qCA0BQ,aAAc,CACd,iBAAkB,CAClB,OAAQ,CACR,QAAS,CACT,kBAAmB,CACnB,iBApCS,CAqCT,wBAA2C,CAC3C,WAAqB,CACrB,eAAgB,CAChB,WAAY,CAnCpB,wCAuCQ,wBA/CwC,CAQhD,6CAyCY,iBA7CY,CA8CZ,QAAS,CA1CrB,mCAgDI,qBAvDyB,CAwD1B,kCAKC,+CAAgD,CAChD,kBAA+C,CAChD,mCAKC,6CAA8C,CAC9C,mBAAgD,CACjD,2DAMG,6CAA8C,CAC9C,mBAAgD,CAJtD,kEAUM,wBAAyB,CAV/B,4DAgBM,+CAAgD,CAChD,kBAA+C,CAjBrD,mEAuBM,yBAA0B,CAvBhC,8DA8BQ,QAAS,CACV,kCAMH,mBAAoB;;AC5GxB,mCAAmC","file":"style.css","sourcesContent":[".BrainhubCarouselItem {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  &.BrainhubCarouselItem--clickable {\n    cursor: pointer;\n  }\n  &.BrainhubCarouselItem--active {\n\n  }\n  .debug-number {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    font-size: 2em;\n    text-shadow: 0px 0px 9px white;\n  }\n}\n",".BrainhubCarousel {\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n\n  &.BrainhubCarousel--isRTL {\n    direction: rtl;\n\n    .BrainhubCarousel__trackContainer {\n      .BrainhubCarousel__track {\n        direction: rtl;\n      }\n    }\n  }\n\n  .BrainhubCarousel__trackContainer {\n    overflow: hidden;\n    .BrainhubCarousel__track {\n      display: flex;\n      overflow: hidden;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n\n      &.BrainhubCarousel__track--transition {\n        transition: transform;\n      }\n    }\n  }\n}\n\n/* arrows */\n.BrainhubCarousel__arrows {\n  cursor: pointer;\n}\n","/* variables */\n$dots-color: black;\n\n.BrainhubCarousel__dots {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  line-height: 0;\n\n  &.BrainhubCarousel__dots--isRTL {\n    direction: rtl;\n  }\n\n  .BrainhubCarousel__dot {\n    outline: 0;\n    padding: 10px;\n    border: none;\n    opacity: 0.5;\n    cursor: pointer;\n    -webkit-appearance: none;\n\n    &.BrainhubCarousel__dot--selected {\n      opacity: 1 !important;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n\n    &:before {\n      content: '';\n      display: block;\n      width: 5px;\n      height: 5px;\n      border-radius: 50%;\n      padding: 0;\n      border: none;\n      background: $dots-color;\n    }\n  }\n\n  .BrainhubCarousel__thumbnail {\n    outline: 0;\n    padding: 10px;\n    border: none;\n    opacity: 0.5;\n    cursor: pointer;\n\n    &.BrainhubCarousel__thumbnail--selected {\n      opacity: 1 !important;\n    }\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n}\n\n.BrainhubCarousel__thumbnail[type=button] {\n  -webkit-appearance: none;\n}\n\n.BrainhubCarousel--isRTL {\n  + .BrainhubCarousel__dots {\n    direction: rtl;\n  }\n}\n","$clickableAreaSize: 42px;\n$clickableAreaColor: #7b59ff;\n$clickableAreaColor__hover: lighten(#7b59ff, 3%);\n$disabledButtonColor: #cccccc;\n\n$arrowColor: #fff;\n$arrowColor__hover: #fff;\n$arrowSize: 10px;\n$arrowWeight: 3px;\n\n.BrainhubCarousel__arrows {\n  position: relative;\n  padding: $clickableAreaSize/2;\n  border: none;\n  overflow: hidden;\n  outline: 0;\n  font-size: 0;\n  line-height: 0;\n  background-color: $clickableAreaColor;\n\n  span {\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-style: solid;\n    border-color: $arrowColor;\n    border-width: $arrowWeight $arrowWeight 0 0;\n    padding: $arrowSize/2;\n    transition: 0.3s;\n    font-size: 0;\n  }\n\n  &:hover {\n    background-color: $clickableAreaColor__hover;\n    span {\n        display: block;\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        border-style: solid;\n        border-color: $arrowColor;\n        border-width: $arrowWeight $arrowWeight 0 0;\n        padding: $arrowSize/2;\n        transition: 0.3s;\n        font-size: 0;\n    }\n\n    &:enabled {\n        background-color: $clickableAreaColor__hover;\n        span {\n            border-color: $arrowColor__hover;\n            margin: 0;\n        }\n    }\n  }\n  \n  &:disabled {\n    background-color: $disabledButtonColor;\n  }\n}\n\n.BrainhubCarousel__arrowLeft {\n  span {\n    transform: translate(-50%, -50%) rotate(-135deg);\n    margin-left: 0.35 * ($arrowSize - $arrowWeight);\n  }\n}\n\n.BrainhubCarousel__arrowRight {\n  span {\n    transform: translate(-50%, -50%) rotate(45deg);\n    margin-left: -0.35 * ($arrowSize - $arrowWeight);\n  }\n}\n\n.BrainhubCarousel--isRTL {\n  .BrainhubCarousel__arrowLeft {\n    span {\n      transform: translate(-50%, -50%) rotate(45deg);\n      margin-left: -0.35 * ($arrowSize - $arrowWeight);\n    }\n  }\n\n  .BrainhubCarousel__custom-arrowLeft {\n    span {\n      transform: rotate(180deg);\n    }\n  }\n\n  .BrainhubCarousel__arrowRight {\n    span {\n      transform: translate(-50%, -50%) rotate(-135deg);\n      margin-left: 0.35 * ($arrowSize - $arrowWeight);\n    }\n  }\n\n  .BrainhubCarousel__custom-arrowRight {\n    span {\n      transform: rotate(-180deg);\n    }\n  }\n\n  .BrainhubCarousel__arrows {\n    &:hover {\n      span {\n        margin: 0;\n      }\n    }\n  }\n}\n\n.BrainhubCarousel__arrow--disable {\n    pointer-events: none;\n}\n\n",".BrainhubCarouselItem{display:flex;justify-content:center;align-items:center;position:relative}.BrainhubCarouselItem.BrainhubCarouselItem--clickable{cursor:pointer}.BrainhubCarouselItem .debug-number{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;font-size:2em;text-shadow:0px 0px 9px white}\n.BrainhubCarousel{overflow:hidden;display:flex;align-items:center}.BrainhubCarousel.BrainhubCarousel--isRTL{direction:rtl}.BrainhubCarousel.BrainhubCarousel--isRTL .BrainhubCarousel__trackContainer .BrainhubCarousel__track{direction:rtl}.BrainhubCarousel .BrainhubCarousel__trackContainer{overflow:hidden}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track{display:flex;overflow:hidden;list-style:none;margin:0;padding:0}.BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track.BrainhubCarousel__track--transition{transition:transform}.BrainhubCarousel__arrows{cursor:pointer}\n.BrainhubCarousel__dots{display:flex;justify-content:center;list-style:none;margin:0;padding:0;font-size:0;line-height:0}.BrainhubCarousel__dots.BrainhubCarousel__dots--isRTL{direction:rtl}.BrainhubCarousel__dots .BrainhubCarousel__dot{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer;-webkit-appearance:none}.BrainhubCarousel__dots .BrainhubCarousel__dot.BrainhubCarousel__dot--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__dot:hover{opacity:1}.BrainhubCarousel__dots .BrainhubCarousel__dot:before{content:'';display:block;width:5px;height:5px;border-radius:50%;padding:0;border:none;background:#000}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail{outline:0;padding:10px;border:none;opacity:0.5;cursor:pointer}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail.BrainhubCarousel__thumbnail--selected{opacity:1 !important}.BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover{opacity:1}.BrainhubCarousel__thumbnail[type=button]{-webkit-appearance:none}.BrainhubCarousel--isRTL+.BrainhubCarousel__dots{direction:rtl}\n.BrainhubCarousel__arrows{position:relative;padding:21px;border:none;overflow:hidden;outline:0;font-size:0;line-height:0;background-color:#7b59ff}.BrainhubCarousel__arrows span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover{background-color:#8768ff}.BrainhubCarousel__arrows:hover span{display:block;position:absolute;top:50%;left:50%;border-style:solid;border-color:#fff;border-width:3px 3px 0 0;padding:5px;transition:0.3s;font-size:0}.BrainhubCarousel__arrows:hover:enabled{background-color:#8768ff}.BrainhubCarousel__arrows:hover:enabled span{border-color:#fff;margin:0}.BrainhubCarousel__arrows:disabled{background-color:#ccc}.BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowLeft span{transform:translate(-50%, -50%) rotate(45deg);margin-left:-2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowLeft span{transform:rotate(180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrowRight span{transform:translate(-50%, -50%) rotate(-135deg);margin-left:2.45px}.BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowRight span{transform:rotate(-180deg)}.BrainhubCarousel--isRTL .BrainhubCarousel__arrows:hover span{margin:0}.BrainhubCarousel__arrow--disable{pointer-events:none}\n\n/*# sourceMappingURL=style.css.map*/"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "body {\n    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n      'Arial', sans-serif;\n    padding: 0;\n    margin: 0;\n    height:100vh;\n}", "",{"version":3,"sources":["/home/crmock/pideenlaequina/front/styles.css"],"names":[],"mappings":"AAAA;IACI;yBACqB;IACrB,UAAU;IACV,SAAS;IACT,YAAY;AAChB","file":"styles.css","sourcesContent":["body {\n    font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',\n      'Arial', sans-serif;\n    padding: 0;\n    margin: 0;\n    height:100vh;\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/_app", function() {
      var mod = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
      if(true) {
        module.hot.accept(/*! private-next-pages/_app.js */ "./pages/_app.js", function() {
          if(!next.router.components["/_app"]) return
          var updatedPage = __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js")
          next.router.update("/_app", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/next/node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/next/node_modules/regenerator-runtime/runtime.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/regenerator-runtime/runtime.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ContextProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContextProvider */ "./components/ContextProvider.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @brainhubeu/react-carousel/lib/style.css */ "./node_modules/@brainhubeu/react-carousel/lib/style.css");
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(_components_ContextProvider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  })));
}

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css",
      function () {
        var newContent = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 0:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js ./node_modules/next/dist/client/router.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!./");
module.exports = __webpack_require__(/*! /home/crmock/pideenlaequina/front/node_modules/next/dist/client/router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=_app.js.map