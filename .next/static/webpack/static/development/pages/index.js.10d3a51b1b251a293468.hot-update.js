webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
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
/* harmony import */ var _Distance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Distance */ "./components/Distance.js");





var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var initialZoom = 14;

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
      storeMarkers: [],
      selectedStore: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        map: null
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.pos !== null && (this.props.stores !== null && this.props.stores !== undefined || this.props.selectedStore !== null && this.props.selectedStore !== undefined)) {
        if (this.state.map === null) {
          var map = this.getMap(this.props.pos);
          var userMarker = this.placeUserMarker(map, this.props.pos);
          var storeMarkers = null;
          var selectedStore = null;

          if (this.props.stores !== null && this.props.stores !== undefined) {
            storeMarkers = this.placeAllStoreMarkers(map, this.props.stores);
          }

          if (this.props.selectedStore !== null && this.props.selectedStore !== undefined) {
            selectedStore = this.placeAStoreMarker(map, this.props.selectedStore, true);
          }

          this.setState({
            userMarker: userMarker,
            map: map,
            storeMarkers: storeMarkers,
            selectedStore: selectedStore
          });
        }

        if (this.state.map !== null && prevProps.pos !== this.props.pos) {
          var _userMarker = this.placeUserMarker(this.state.map, this.props.pos);

          this.removeAllStoreMarkers();
          this.setState({
            userMarker: _userMarker
          });
        }

        if (this.state.map !== null && prevProps.stores !== this.props.stores) {
          this.removeAllStoreMarkers();

          var _storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);

          this.setState({
            storeMarkers: _storeMarkers
          });
        }

        if (this.state.map !== null && prevProps.selectedStore !== this.props.selectedStore) {
          this.removeSelectedStoreMarker();

          var _selectedStore = this.placeAStoreMarker(this.state.map, this.props.selectedStore);

          this.setState({
            selectedStore: _selectedStore
          });
        }
      }
    }
  }, {
    key: "getMap",
    value: function getMap(pos) {
      var map = null;

      if (this.state.map == null) {
        map = new google.maps.Map(document.getElementById(this.props.htmlId), {
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
      var pan = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

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

      if (pan) {
        this.panToPos(map, pos);
      }

      return marker;
    }
  }, {
    key: "panToPos",
    value: function panToPos(map, pos) {
      var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : initialZoom;
      map.setZoom(zoom);
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
    key: "removeSelectedStoreMarker",
    value: function removeSelectedStoreMarker() {
      this.state.selectedStore.setMap(null);
    }
  }, {
    key: "placeAStoreMarker",
    value: function placeAStoreMarker(map, store) {
      var _this2 = this;

      var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var categories = ['pharmacy', 'bakery', 'vegetableStore', 'hardwareStore', 'butchery', 'drycleaner', 'stationeryStore', 'petStore', 'liquorStore', 'fastFood', 'restaurant', 'groeceryStore', 'store'];
      var labels = ['Droguería', 'Panadería', 'Fruver', 'Ferretería', 'Carnicería', 'Lavandería', 'Papelería', 'Mascotas', 'Licorera', 'Comida rápida', 'Restaurante', 'Tienda', 'Otro'];

      if (store.type === null) {
        store.type = "store";
      }

      if (!categories.includes(store.type)) {
        store.type = "store";
      }

      var i = categories.indexOf(store.type);
      store.typeLabel = labels[i];
      var icon = '';

      if (selected) {
        icon = './map/' + store.type + "_icon_selected.svg";
      } else {
        icon = './map/' + store.type + "_icon.svg";
      }

      var icon_hover = './map/' + store.type + "_icon_hover.svg";
      var marker = new google.maps.Marker({
        position: {
          lat: store.lat,
          lng: store.lng
        },
        icon: icon,
        title: store.name,
        draggable: false,
        //custom data
        selected: selected,
        id: store._id,
        distance: Object(_Distance__WEBPACK_IMPORTED_MODULE_6__["default"])(this.props.pos.lat, this.props.pos.lng, store.lat, store.lng),
        onClickFunction: function onClickFunction(id) {
          return _this2.handleStoreMarkerClick(id);
        }
      });
      google.maps.event.addListener(marker, 'click', function () {
        if (!marker.selected) {
          marker.onClickFunction(marker.id);
        }
      });
      google.maps.event.addListener(marker, 'mouseover', function () {
        marker.setIcon(icon_hover);
      });
      google.maps.event.addListener(marker, 'mouseout', function () {
        marker.setIcon(icon);
      });
      marker.setMap(map);
      return marker;
    }
  }, {
    key: "findStore",
    value: function findStore(id) {
      for (var i = 0; i < this.props.stores.length; i++) {
        var element = this.props.stores[i];

        if (element._id === id) {
          return element;
        }
      }

      return null;
    }
  }, {
    key: "handleStoreMarkerClick",
    value: function handleStoreMarkerClick(id) {
      var store = this.findStore(id);

      if (store !== null) {
        alert("ya mero merito");
        this.props.openSelectedStore(store);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          height: "100%",
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: this.props.htmlId,
        style: {
          height: "100%",
          width: '100%'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 9
        }
      }));
    }
  }]);

  return Map;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.10d3a51b1b251a293468.hot-update.js.map