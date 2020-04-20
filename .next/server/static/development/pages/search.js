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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/map.js":
/*!***************************!*\
  !*** ./components/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_noStores_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/noStores.js */ "./components/noStores.js");
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const initialZoom = 15;

class Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      userMarker: null,
      storeMarkers: []
    };
  }

  shouldComponentUpdate() {
    if (this.props.pos == null) {
      return false;
    }

    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pos != null && this.props.stores != null) {
      if (this.state.map == null) {
        let map = this.getMap(this.props.pos);
        let userMarker = this.placeUserMarker(map, this.props.pos);
        let storeMarkers = this.placeAllStoreMarkers(map, this.props.stores);
        this.setState({
          userMarker: userMarker,
          map: map,
          storeMarkers: storeMarkers
        });
      } else if (prevProps.pos != this.props.pos) {
        let userMarker = this.placeUserMarker(this.state.map, this.props.pos);
        this.removeAllStoreMarkers();
        let storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);
        this.setState({
          userMarker: userMarker,
          storeMarkers: storeMarkers
        });
      }
    }
  }

  getMap(pos) {
    let map = null;

    if (this.state.map == null) {
      map = new google.maps.Map(document.getElementById('map'), {
        center: pos,
        zoom: initialZoom,
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        streetViewControl: false
      });
    } else {
      map = this.state.map;
    }

    return map;
  }

  placeUserMarker(map, pos) {
    if (this.state.userMarker != null) {
      this.state.userMarker.setMap(null);
    }

    let marker = new google.maps.Marker({
      position: pos,
      icon: './map/user_icon.svg',
      title: "Tu ubicación",
      draggable: false
    });
    marker.setMap(map);
    this.panToPos(map, pos);
    return marker;
  }

  panToPos(map, pos) {
    map.setZoom(initialZoom);
    map.panTo(pos);
  }

  placeAllStoreMarkers(map, stores) {
    let list = [];

    for (let i = 0; i < stores.length; i++) {
      let store = stores[i];

      if (store._id == null || store.lat == null || store.lng == null || store.name == null) {
        console.log("Skiped store: " + store.name);
        continue;
      }

      let marker = this.placeAStoreMarker(map, store);
      list.push(marker);
    }

    return list;
  }

  removeAllStoreMarkers() {
    for (let i = 0; i < this.state.storeMarkers.length; i++) {
      this.state.storeMarkers[i].setMap(null);
    }
  }

  placeAStoreMarker(map, store) {
    store.type = store.type == null ? "store" : store.type.toLowerCase();
    let icon_normal = './map/' + store.type + "_icon.svg";
    let icon_hover = './map/' + store.type + "_icon_hover.svg";
    let marker = new google.maps.Marker({
      position: {
        lat: store.lat,
        lng: store.lng
      },
      icon: icon_normal,
      title: store.name,
      draggable: false,
      id: store._id //custom data

    });
    google.maps.event.addListener(marker, 'click', function () {
      console.log("click " + marker.id);
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
      marker.setIcon(icon_hover);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      marker.setIcon(icon_normal);
    });
    marker.setMap(map);
    return marker;
  }

  render() {
    let google_url = process.env.GOOGLE_MAPS_API_URL + "/js?key=" + process.env.GOOGLE_MAPS_API_KEY;
    return __jsx("div", {
      style: {
        height: "100%",
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }
    }, __jsx("script", {
      src: google_url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 11
      }
    })), __jsx("div", {
      id: "map",
      style: {
        height: "100%",
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }
    }), this.state.map && this.props.stores.length == 0 ? __jsx(_components_noStores_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 56
      }
    }) : "");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/noStores.js":
/*!********************************!*\
  !*** ./components/noStores.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/noStores.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class addressBar extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    var imageStyle = {
      width: "40%",
      display: 'block',
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "5%",
      marginBottom: "5%"
    };
    return __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_1___default.a, {
      elevation: 3,
      style: {
        position: 'fixed',
        bottom: "5%",
        left: "5%",
        width: "80%",
        background: "WhiteSmoke",
        padding: "5%",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 15
      }
    }, " No encontramos establecimientos cerca de ti pero te tenemos cubierto...")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, "Puedes hacer un pedido en cualquier establecimiento incluso si no est\xE1 listado, nosotros nos encargamos."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 14
      }
    }, "(tambi\xE9n puedes cambiar de \xFAbicaci\xF3n ingresando una nueva direcci\xF3n)")), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "contained",
      color: "primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 55
      }
    }, "Hacer pedido en establecimiento no registrado")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (addressBar);

/***/ }),

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/map.js */ "./components/map.js");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Search extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "position", async () => {
      await navigator.geolocation.getCurrentPosition(position => this.setState({
        pos: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      }), err => async function () {
        let ip = await fetch(process.env.IPIFY_URL).then(response => response.text());
        let pos = await fetch(process.env.IPGEOLOCATION_API_URL + '/ipgeo?apiKey=' + process.env.IPGEOLOCATION_API_KEY + '&ip=' + ip).then(response => response.json());
        this.setState({
          pos: {
            lat: parseFloat(pos.latitude),
            lng: parseFloat(pos.longitude)
          },
          stores: null
        });
      });
    });

    this.state = {
      pos: null,
      stores: null
    };
  }

  componentDidMount() {
    this.position();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.pos != null && prevState.pos != this.state.pos) {
      this.getStores(this.state.pos);
    }
  }

  async getStores(pos) {
    let url = '/api/stores?lat=' + pos.lat + '&lng=' + pos.lng;
    let res = await fetch(url).then(response => response.json());
    this.setState({
      stores: res.stores
    });
  }

  render() {
    return __jsx("div", {
      style: {
        height: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: "small",
      "aria-label": "menu",
      onClick: () => this.props.history.goBack(),
      style: {
        position: "fixed",
        top: "15px",
        left: "15px",
        zIndex: '3'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    })), __jsx(_components_map_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Search));

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/search.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crmock/pideenlaequina/front/pages/search.js */"./pages/search.js");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map