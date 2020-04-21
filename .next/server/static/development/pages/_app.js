module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Context.js":
/*!*******************************!*\
  !*** ./components/Context.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const LocationContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Context */ "./components/Context.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "@auth0/auth0-spa-js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/ContextProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // create a provider

class LocationContextProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "initialLocation", async () => {
      await navigator.geolocation.getCurrentPosition(position => this.setState({
        locationLat: position.coords.latitude,
        locationLng: position.coords.longitude,
        selectedLocationLat: position.coords.latitude,
        selectedLocationLng: position.coords.longitude
      }), err => async function () {
        let ip = await fetch(process.env.IPIFY_URL).then(response => response.text());
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL + '/ipgeo?apiKey=' + process.env.IPGEOLOCATION_API_KEY + '&ip=' + ip).then(response => response.json());
        this.setState({
          locationLat: parseFloat(pos.latitude),
          locationLng: parseFloat(pos.longitude),
          selectedLocationLat: parseFloat(pos.latitude),
          selectedLocationLng: parseFloat(pos.longitude)
        });
      });
    });

    _defineProperty(this, "initializeAuth0", async () => {
      const auth0Client = await _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()(this.config);
      const isAuthenticated = await auth0Client.isAuthenticated();
      const user = isAuthenticated ? await auth0Client.getUser() : null;
      this.setState({
        auth0Client,
        isLoading: false,
        isAuthenticated,
        user
      });
    });

    this.state = {
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
    this.config = {
      domain: process.env.AUTH0_DOMAIN,
      client_id: process.env.AUTH0_CLIENT_ID,
      redirect_uri: window.location.origin
    };
    this.startedAt = new Date();
  }

  componentDidMount() {
    this.initialLocation();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedLocationLat != null && this.state.selectedLocationLng != null && prevState.selectedLocationLat != this.state.selectedLocationLat || prevState.selectedLocationLng != this.state.selectedLocationLng) {
      console.log("Location change");
      this.featuredStores(this.state.selectedLocationLat, this.state.selectedLocationLng);
      this.stores(this.state.selectedLocationLat, this.state.selectedLocationLng);
    }

    if (!this.state.isReady && this.state.selectedLocationLat != null && this.state.selectedLocationLng != null) {
      console.log("Initial location -> isReady=true");
      let now = new Date();
      let towait = now.getTime() + 2000 - this.startedAt.getTime();

      if (towait > 0) {
        setTimeout(() => {
          this.setState({
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

  updateLocation(newLat, newLng) {
    this.setState({
      selected_location_lat: parseFloat(newLat),
      selected_location_lng: parseFloat(newLng),
      isLoading: true
    });
  }

  async featuredStores(lat, lng) {
    let url = '/api/featuredStores?lat=' + lat + '&lng=' + lng;
    let res = await fetch(url).then(response => response.json());
    this.setState({
      featuredStores: res.stores
    });
  }

  async stores(lat, lng) {
    let url = '/api/stores?lat=' + lat + '&lng=' + lng;
    let res = await fetch(url).then(response => response.json());
    this.setState({
      stores: res.stores
    });
  }

  render() {
    const {
      location_lat,
      location_lng,
      selectedLocationLat,
      selectedLocationLng,
      featuredStores,
      stores,
      authClient,
      isAuthenticated,
      user,
      isReady,
      isLoading
    } = this.state;
    const values = {
      location_lat,
      location_lng,
      selectedLocationLat,
      selectedLocationLng,
      featuredStores,
      stores,
      isAuthenticated,
      user,
      isReady,
      isLoading,
      loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
      getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
      getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
      logout: (...p) => auth0Client.logout(...p)
    };
    return __jsx(LocationContext.Provider, {
      value: values,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, this.props.children);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LocationContextProvider);

/***/ }),

/***/ "./node_modules/@brainhubeu/react-carousel/lib/style.css":
/*!***************************************************************!*\
  !*** ./node_modules/@brainhubeu/react-carousel/lib/style.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ContextProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ContextProvider */ "./components/ContextProvider.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ "./styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel/lib/style.css */ "./node_modules/@brainhubeu/react-carousel/lib/style.css");
/* harmony import */ var _brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel_lib_style_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function MyApp({
  Component,
  pageProps
}) {
  return __jsx(_components_ContextProvider__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
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
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@auth0/auth0-spa-js":
/*!**************************************!*\
  !*** external "@auth0/auth0-spa-js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/auth0-spa-js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map