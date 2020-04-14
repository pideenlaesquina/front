webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/map.js":
/*!***************************!*\
  !*** ./components/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_addressBar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/addressBar.js */ "./components/addressBar.js");
/* harmony import */ var _components_noStores_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/noStores.js */ "./components/noStores.js");





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







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
          var _map = this.getMap(this.props.pos);

          var userMarker = this.placeUserMarker(_map, this.props.pos);
          var storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);
          this.setState({
            userMarker: userMarker,
            map: _map,
            storeMarkers: storeMarkers
          });
        } else if (prevProps.pos != this.props.pos) {
          var _userMarker = this.placeUserMarker(this.state.map, this.props.pos);

          this.removeAllStoreMarkers();

          var _storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);

          this.setState({
            userMarker: _userMarker,
            map: map,
            storeMarkers: _storeMarkers
          });
        } else {}
      }
    }
  }, {
    key: "getMap",
    value: function getMap(pos) {
      var map = null;

      if (this.state.map == null) {
        map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 15,
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
        id: store.id //custom data

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
      var customStyle = {
        padding: "0",
        margin: "0",
        display: 'flex',
        height: '97vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'WhiteSmoke'
      };
      var imageStyle = {
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto"
      };
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 9
        }
      }, __jsx("script", {
        src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBt0ZCE1kAklBJiBnCYGX6kl0tglLcKlLI",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }
      })), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "map",
        style: customStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "/loading.svg",
        alt: "Pajarito escuchando m\xFAsica feliz",
        style: imageStyle,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 13
        }
      })), this.state.map ? __jsx(_components_addressBar_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 14
        }
      }) : "", this.state.map && this.props.stores.length == 0 ? __jsx(_components_noStores_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198,
          columnNumber: 14
        }
      }) : ""));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.032020974f27d969981c.hot-update.js.map