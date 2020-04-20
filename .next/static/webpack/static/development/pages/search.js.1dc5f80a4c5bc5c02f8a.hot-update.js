webpackHotUpdate("static/development/pages/search.js",{

/***/ "./components/map.js":
/*!***************************!*\
  !*** ./components/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_noStores_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/noStores.js */ "./components/noStores.js");





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var initialZoom = 15;

var Map = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Map, _React$Component);

  var _super = _createSuper(Map);

  function Map(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Map);

    _this = _super.call(this, props);
    _this.state = {
      map: null,
      userMarker: null,
      storeMarkers: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      if (this.props.pos == null) {
        return false;
      }

      return true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.pos != null && this.props.stores != null) {
        if (this.state.map == null) {
          var map = this.getMap(this.props.pos);
          var userMarker = this.placeUserMarker(map, this.props.pos);
          var storeMarkers = this.placeAllStoreMarkers(map, this.props.stores);
          this.setState({
            userMarker: userMarker,
            map: map,
            storeMarkers: storeMarkers
          });
        } else if (prevProps.pos != this.props.pos) {
          var _userMarker = this.placeUserMarker(this.state.map, this.props.pos);

          this.removeAllStoreMarkers();

          var _storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);

          this.setState({
            userMarker: _userMarker,
            storeMarkers: _storeMarkers
          });
        }
      }
    }
  }, {
    key: "getMap",
    value: function getMap(pos) {
      var map = null;

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
  }, {
    key: "placeUserMarker",
    value: function placeUserMarker(map, pos) {
      if (this.state.userMarker != null) {
        this.state.userMarker.setMap(null);
      }

      var marker = new google.maps.Marker({
        position: pos,
        icon: './map/user_icon.svg',
        title: "Tu ubicación",
        draggable: false
      });
      marker.setMap(map);
      this.panToPos(map, pos);
      return marker;
    }
  }, {
    key: "panToPos",
    value: function panToPos(map, pos) {
      map.setZoom(initialZoom);
      map.panTo(pos);
    }
  }, {
    key: "placeAllStoreMarkers",
    value: function placeAllStoreMarkers(map, stores) {
      var list = [];

      for (var i = 0; i < stores.length; i++) {
        var store = stores[i];

        if (store._id == null || store.lat == null || store.lng == null || store.name == null) {
          console.log("Skiped store: " + store.name);
          continue;
        }

        var marker = this.placeAStoreMarker(map, store);
        list.push(marker);
      }

      return list;
    }
  }, {
    key: "removeAllStoreMarkers",
    value: function removeAllStoreMarkers() {
      for (var i = 0; i < this.state.storeMarkers.length; i++) {
        this.state.storeMarkers[i].setMap(null);
      }
    }
  }, {
    key: "placeAStoreMarker",
    value: function placeAStoreMarker(map, store) {
      store.type = store.type == null ? "store" : store.type.toLowerCase();
      var icon_normal = './map/' + store.type + "_icon.svg";
      var icon_hover = './map/' + store.type + "_icon_hover.svg";
      var marker = new google.maps.Marker({
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
  }, {
    key: "render",
    value: function render() {
      var google_url = process.env.GOOGLE_MAPS_API_URL + "/js?key=" + process.env.GOOGLE_MAPS_API_KEY;
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
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
      }), this.state.map && this.props.stores.length == 0 ? __jsx(_components_noStores_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 56
        }
      }) : "");
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Map);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=search.js.1dc5f80a4c5bc5c02f8a.hot-update.js.map