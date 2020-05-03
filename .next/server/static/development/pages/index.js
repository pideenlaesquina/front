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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AddressDialog.js":
/*!*************************************!*\
  !*** ./components/AddressDialog.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressDialog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_MyLocation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/MyLocation */ "@material-ui/icons/MyLocation");
/* harmony import */ var _material_ui_icons_MyLocation__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MyLocation__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Business */ "@material-ui/icons/Business");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/AddressDialog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















function CustomDialog(props) {
  const {
    onClose,
    selectedValue,
    open,
    addresses
  } = props;
  const [showForm, setShowForm] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [options, setOptions] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState([]);
  const [place, setPlace] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null);

  const handleClose = () => {
    onClose(selectedValue);
    setShowForm(false);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleAddressConfirmed = () => {
    setShowForm(false);
    handleClose();
    alert(":)");
  };

  const handleInputChange = event => {
    getPredictions(event.target.value);
  };

  const handleAutoCompleteValue = async (event, newValue) => {
    if (newValue !== null) {
      getPlace(newValue.place_id);
    }
  };

  const getPredictions = async text => {
    let url = "/api/addressPrediction?address=" + text + "&lat=" + props.deviceLocation.lat + "&lng=" + props.deviceLocation.lng;
    let res = await fetch(url).then(response => response.json());
    setOptions(res.predictions);
  };

  const getPlace = async id => {
    let url = "/api/addressPlace?id=" + id;
    let res = await fetch(url).then(response => response.json());
    const place = {
      address: res.place.formatted_address,
      lat: res.place.geometry.location.lat,
      lng: res.place.geometry.location.lng,
      google_place_id: res.place.place_id,
      type: "default"
    };
    setPlace(place);
  };

  const savePLace = async () => {};

  return __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClose: handleClose,
    "aria-labelledby": "simple-dialog-title",
    open: open,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "simple-dialog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, "Selecciona tu direcci\xF3n"), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, addresses.map(item => __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    button: true,
    onClick: () => handleListItemClick(item),
    key: item.address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  }, item.type == "house" ? __jsx(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 38
    }
  }) : __jsx(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 51
    }
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: item.address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }))), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoFocus: true,
    button: true,
    onClick: () => handleListItemClick(props.deviceLocation),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_MyLocation__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Ubicaci\xF3n actual",
    secondary: props.deviceLocation.address,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
    autoFocus: true,
    button: true,
    onClick: () => handleAddClick(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, __jsx(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_12___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {
    primary: "Agregar direcci\xF3n",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_8___default.a, {
    in: showForm,
    timeout: "auto",
    unmountOnExit: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_17___default.a, {
    id: "combo-box-demo",
    options: options,
    onChange: handleAutoCompleteValue,
    getOptionLabel: option => option.description,
    renderInput: params => __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16___default.a, _extends({}, params, {
      label: "Ingresa tu direcci\xF3n",
      variant: "outlined",
      size: "small",
      fullWidth: true,
      onChange: handleInputChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    onClick: handleAddressConfirmed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, "Confirmar direcci\xF3n"))));
}

function AddressDialog(props) {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [selectedValue, setSelectedValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(props.selectedLocation);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  return __jsx("div", {
    style: {
      width: '100%',
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx("small", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, "Tu direcci\xF3n: ", selectedValue.address), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
    onClick: handleClickOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "Cambiar"), __jsx(CustomDialog, {
    selectedLocation: props.selectedLocation,
    deviceLocation: props.deviceLocation,
    selectedValue: selectedValue,
    open: open,
    onClose: handleClose,
    addresses: props.addresses,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./components/Distance.js":
/*!********************************!*\
  !*** ./components/Distance.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295; // Math.PI / 180

  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p) / 2 + c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p)) / 2;
  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

/* harmony default export */ __webpack_exports__["default"] = (distance);

/***/ }),

/***/ "./components/FridgeMagnets.js":
/*!*************************************!*\
  !*** ./components/FridgeMagnets.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Magnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Magnet */ "./components/Magnet.js");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "@brainhubeu/react-carousel");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/FridgeMagnets.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class FridgeMagnets extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-1842012620",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1842012620",
      __self: this
    }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JXIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFnbmV0IGZyb20gJy4uL2NvbXBvbmVudHMvTWFnbmV0J1xuXG5pbXBvcnQgQ2Fyb3VzZWwsIHsgRG90cyB9IGZyb20gJ0BicmFpbmh1YmV1L3JlYWN0LWNhcm91c2VsJ1xuXG5jbGFzcyBGcmlkZ2VNYWduZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBjbGlja1RvQ2hhbmdlXG4gICAgICAgICAgY2VudGVyZWRcbiAgICAgICAgICBpbmZpbml0ZVxuICAgICAgICAgIHNsaWRlc1BlclBhZ2U9ezJ9XG4gICAgICAgID5cbiAgICAgICAgICB7KFxuICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmVzPT1udWxsXG4gICAgICAgICAgICA/XCJcIlxuICAgICAgICAgICAgOnRoaXMucHJvcHMuc3RvcmVzLm1hcCgoc3RvcmUpID0+IChcbiAgICAgICAgICAgICAgPE1hZ25ldCBcbiAgICAgICAgICAgICAgICBzdG9yZT17c3RvcmV9IFxuICAgICAgICAgICAgICAgIGtleT17XCJmZWF0dXJlZF9cIitzdG9yZS5faWR9XG4gICAgICAgICAgICAgICAgb3BlblNlbGVjdGVkU3RvcmU9eyhuZXdTdG9yZSk9PnRoaXMucHJvcHMub3BlblNlbGVjdGVkU3RvcmUobmV3U3RvcmUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICApfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyaWRnZU1hZ25ldHM7XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/FridgeMagnets.js */"), __jsx(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      clickToChange: true,
      centered: true,
      infinite: true,
      slidesPerPage: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, this.props.stores == null ? "" : this.props.stores.map(store => __jsx(_components_Magnet__WEBPACK_IMPORTED_MODULE_2__["default"], {
      store: store,
      key: "featured_" + store._id,
      openSelectedStore: newStore => this.props.openSelectedStore(newStore),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FridgeMagnets);

/***/ }),

/***/ "./components/FridgeMagnetsNoFavorites.js":
/*!************************************************!*\
  !*** ./components/FridgeMagnetsNoFavorites.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Map */ "@material-ui/icons/Map");
/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
<<<<<<< HEAD
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/FridgeMagnetsNoFavorites.js";
=======
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @brainhubeu/react-carousel */ "@brainhubeu/react-carousel");
/* harmony import */ var _brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_brainhubeu_react_carousel__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/fridgeMagnetsNoFavorites.js";
>>>>>>> master

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





<<<<<<< HEAD
class FridgeMagnetsNoFavorites extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-153926401",
=======

class fridgeMagnetsNoFavorites extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-1455261083",
>>>>>>> master
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
<<<<<<< HEAD
      id: "153926401",
      __self: this
    }, ".root.jsx-153926401{text-align:center;padding-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHNOb0Zhdm9yaXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXVyxBQUdnQyxrQkFDRSxvQkFDckIiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvRnJpZGdlTWFnbmV0c05vRmF2b3JpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgTWFwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFwJ1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuXG5jbGFzcyBGcmlkZ2VNYWduZXRzTm9GYXZvcml0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5yb290e1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezEwfSBzdHlsZT17e3dpZHRoOlwiMjIwcHhcIiwgbWFyZ2luUmlnaHQ6XCJhdXRvXCIsIG1hcmdpbkxlZnQ6XCJhdXRvXCIsIHBhZGRpbmc6XCIyMHB4XCJ9fT5cbiAgICAgICAgICAgIDxoMz7CoU5vIHRpZW5lcyBmYXZvcml0b3MhPC9oMz5cbiAgICAgICAgICAgIDxwPkxvcyBmYXZvcml0b3MgaGFjZW4gcXVlIHBlZGlyIHNlYSBtw6FzIGbDoWNpbC4gQWdyZWdhIHR1IHByaW1lciBmYXZvcml0bzwvcD5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc3RhcnRJY29uPXs8TWFwSWNvbiAvPn1cbiAgICAgICAgICAgICAgaHJlZj1cIi9zZWFyY2hcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCdXNjYXIgdGllbmRhc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRnJpZGdlTWFnbmV0c05vRmF2b3JpdGVzO1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/FridgeMagnetsNoFavorites.js */"), __jsx("div", {
      className: "jsx-153926401" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
=======
      id: "1455261083",
      __self: this
    }, ".root.jsx-1455261083{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL2ZyaWRnZU1hZ25ldHNOb0Zhdm9yaXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhVyxBQUdnQyxrQkFDbkIiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvZnJpZGdlTWFnbmV0c05vRmF2b3JpdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgTWFwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWFwJ1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuXG5pbXBvcnQgQ2Fyb3VzZWwsIHsgRG90cyB9IGZyb20gJ0BicmFpbmh1YmV1L3JlYWN0LWNhcm91c2VsJ1xuXG5jbGFzcyBmcmlkZ2VNYWduZXRzTm9GYXZvcml0ZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5yb290e1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezEwfSBzdHlsZT17e3dpZHRoOlwiODAlXCIsIG1hcmdpblJpZ2h0OlwiYXV0b1wiLCBtYXJnaW5MZWZ0OlwiYXV0b1wiLCBwYWRkaW5nOlwiMjBweFwifX0+XG4gICAgICAgICAgICA8aDM+wqFObyB0aWVuZXMgZmF2b3JpdG9zITwvaDM+XG4gICAgICAgICAgICA8cD5Mb3MgZmF2b3JpdG9zIGhhY2VuIHF1ZSBwZWRpciBzZWEgbcOhcyBmw6FjaWwuIEFncmVnYSB0dSBwcmltZXIgZmF2b3JpdG88L3A+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBzdGFydEljb249ezxNYXBJY29uIC8+fVxuICAgICAgICAgICAgICBocmVmPVwiL3NlYXJjaFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJ1c2NhciB0aWVuZGFzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmcmlkZ2VNYWduZXRzTm9GYXZvcml0ZXM7XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/fridgeMagnetsNoFavorites.js */"), __jsx("div", {
      className: "jsx-1455261083" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
>>>>>>> master
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
      elevation: 10,
      style: {
<<<<<<< HEAD
        width: "220px",
=======
        width: "80%",
>>>>>>> master
        marginRight: "auto",
        marginLeft: "auto",
        padding: "20px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx("h3", {
      className: "jsx-153926401",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, "\xA1No tienes favoritos!"), __jsx("p", {
      className: "jsx-153926401",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "Los favoritos hacen que pedir sea m\xE1s f\xE1cil. Agrega tu primer favorito"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "outlined",
=======
        lineNumber: 22,
        columnNumber: 11
      }
    }, __jsx("h3", {
      className: "jsx-1455261083",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "\xA1No tienes favoritos!"), __jsx("p", {
      className: "jsx-1455261083",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, "Los favoritos hacen que pedir sea m\xE1s f\xE1cil. Agrega tu primer favorito"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "contained",
      color: "primary",
>>>>>>> master
      size: "large",
      startIcon: __jsx(_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
<<<<<<< HEAD
          lineNumber: 27,
=======
          lineNumber: 29,
>>>>>>> master
          columnNumber: 26
        }
      }),
      href: "/search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
<<<<<<< HEAD
        lineNumber: 24,
=======
        lineNumber: 25,
>>>>>>> master
        columnNumber: 13
      }
    }, "Buscar tiendas"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FridgeMagnetsNoFavorites);

/***/ }),

/***/ "./components/FridgeMagnetsSection.js":
/*!********************************************!*\
  !*** ./components/FridgeMagnetsSection.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FridgeMagnets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FridgeMagnets */ "./components/FridgeMagnets.js");
/* harmony import */ var _FridgeMagnetsNoFavorites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FridgeMagnetsNoFavorites */ "./components/FridgeMagnetsNoFavorites.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "@material-ui/core/ListItemAvatar");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Star */ "@material-ui/icons/Star");
/* harmony import */ var _material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/FridgeMagnetsSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











class FridgeMagnetsSection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
<<<<<<< HEAD
      className: "jsx-1386379518",
=======
      className: "jsx-237873610",
>>>>>>> master
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
<<<<<<< HEAD
      id: "1386379518",
      __self: this
    }, ".divider.jsx-1386379518{padding-top:5px;padding-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCVyxBQUcrQixnQkFDRyxtQkFDckIiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvRnJpZGdlTWFnbmV0c1NlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgRnJpZGdlTWFnbmV0cyBmcm9tICcuL0ZyaWRnZU1hZ25ldHMnXG5pbXBvcnQgRnJpZGdlTWFnbmV0c05vRmF2b3JpdGVzIGZyb20gJy4vRnJpZGdlTWFnbmV0c05vRmF2b3JpdGVzJ1xuXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0J1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJ1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnXG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcidcbmltcG9ydCBGYXZvcml0ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJ1xuaW1wb3J0IFN0YXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdGFyJ1xuXG5cbmNsYXNzIEZyaWRnZU1hZ25ldHNTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmRpdmlkZXJ7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8TGlzdCBzdHlsZT17e3BhZGRpbmdUb3A6JzAnLCBwYWRkaW5nQm90dG9tOicwJ319PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmVkU3RvcmVzICE9IG51bGwgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlcnNcIj5cbiAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgIDxBdmF0YXI+XG4gICAgICAgICAgICAgICAgICA8U3Rhckljb24gLz5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGVzdGFjYWRvc1wiIHNlY29uZGFyeT1cIkVzcGVjaWFsbWVudGUgZXNjb2dpZGFzIHBhcmEgdMOtXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8RnJpZGdlTWFnbmV0cyBcbiAgICAgICAgICAgICAgc3RvcmVzPXt0aGlzLnByb3BzLmZlYXR1cmVkU3RvcmVzfSBcbiAgICAgICAgICAgICAgb3BlblNlbGVjdGVkU3RvcmU9eyhuZXdTdG9yZSk9PnRoaXMucHJvcHMub3BlblNlbGVjdGVkU3RvcmUobmV3U3RvcmUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmF2b3JpdG9zXCIgc2Vjb25kYXJ5PVwiVHVzIGVzdGFibGVjaW1pZW50b3MgZmF2b3JpdG9zXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICB7KHRoaXMucHJvcHMuZmF2b3JpdGVTdG9yZXMgIT09IG51bGwgJiYgdGhpcy5wcm9wcy5mYXZvcml0ZVN0b3JlcyAhPT0gW11cbiAgICAgICAgICAgID88RnJpZGdlTWFnbmV0cyBcbiAgICAgICAgICAgICAgc3RvcmVzPXt0aGlzLnByb3BzLmZhdm9yaXRlU3RvcmVzfSBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjE1cHhcIn19XG4gICAgICAgICAgICAgIG9wZW5TZWxlY3RlZFN0b3JlPXsobmV3U3RvcmUpPT50aGlzLnByb3BzLm9wZW5TZWxlY3RlZFN0b3JlKG5ld1N0b3JlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6PEZyaWRnZU1hZ25ldHNOb0Zhdm9yaXRlcyBzdHlsZT17e21hcmdpbkJvdHRvbTpcIjE1cHhcIn19Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGcmlkZ2VNYWduZXRzU2VjdGlvbjtcbiJdfQ== */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/FridgeMagnetsSection.js */"), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
=======
      id: "237873610",
      __self: this
    }, ".divider.jsx-237873610{padding-top:5px;padding-bottom:25px;}.featured.jsx-237873610{background:linear-gradient(180deg,#ffcf0200 0%,#ffcf02ffgit 100%);}.favorite.jsx-237873610{background:#ffcf02ff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL2ZyaWRnZU1hZ25ldHNTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCVyxBQUcrQixBQUtvRCxBQUkvQyxnQkFSRCxLQVN0QixlQVJBLDhCQUlBIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL2ZyaWRnZU1hZ25ldHNTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZyaWRnZU1hZ25ldHMgZnJvbSAnLi9mcmlkZ2VNYWduZXRzLmpzJ1xuaW1wb3J0IEZyaWRnZU1hZ25ldHNOb0Zhdm9yaXRlcyBmcm9tICcuL2ZyaWRnZU1hZ25ldHNOb0Zhdm9yaXRlcy5qcydcblxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCdcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSdcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0J1xuaW1wb3J0IExpc3RJdGVtQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtQXZhdGFyJ1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInXG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSdcbmltcG9ydCBTdGFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RhcidcblxuXG5jbGFzcyBmcmlkZ2VNYWduZXRzU2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpXG4gIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIC5kaXZpZGVye1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZlYXR1cmVke1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZjZjAyMDAgMCUsICNmZmNmMDJmZmdpdCAxMDAlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZhdm9yaXRle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjZjAyZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8TGlzdCBzdHlsZT17e3BhZGRpbmdUb3A6JzAnLCBwYWRkaW5nQm90dG9tOicwJ319PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmVkU3RvcmVzICE9IG51bGwgJiYgKDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlciBmZWF0dXJlZFwiPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxTdGFySWNvbiAvPlxuICAgICAgICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEZXN0YWNhZG9zXCIgc2Vjb25kYXJ5PVwiRXNwZWNpYWxtZW50ZSBlc2NvZ2lkYXMgcGFyYSB0w61cIiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDxGcmlkZ2VNYWduZXRzIHN0b3Jlcz17dGhpcy5wcm9wcy5mZWF0dXJlZFN0b3Jlc30gLz5cbiAgICAgICAgICA8L2Rpdj4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlciBmYXZvcml0ZVwiPlxuICAgICAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1BdmF0YXI+XG4gICAgICAgICAgICAgICAgPEF2YXRhcj5cbiAgICAgICAgICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUF2YXRhcj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRmF2b3JpdG9zXCIgc2Vjb25kYXJ5PVwiVHVzIGVzdGFibGVjaW1pZW50b3MgZmF2b3JpdG9zXCIgLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICB7KHRoaXMucHJvcHMuZmF2b3JpdGVTdG9yZXNcbiAgICAgICAgICAgID88RnJpZGdlTWFnbmV0cyBzdG9yZXM9e3RoaXMucHJvcHMuZmF2b3JpdGVTdG9yZXN9IHN0eWxlPXt7bWFyZ2luQm90dG9tOlwiMTVweFwifX0vPlxuICAgICAgICAgICAgOjxGcmlkZ2VNYWduZXRzTm9GYXZvcml0ZXMgc3R5bGU9e3ttYXJnaW5Cb3R0b206XCIxNXB4XCJ9fS8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnJpZGdlTWFnbmV0c1NlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/fridgeMagnetsSection.js */"), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_4___default.a, {
>>>>>>> master
      style: {
        paddingTop: '0',
        paddingBottom: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, this.props.featuredStores != null && __jsx("div", {
<<<<<<< HEAD
      className: "jsx-1386379518" + " " + "dividers",
=======
      className: "jsx-237873610" + " " + "divider featured",
>>>>>>> master
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 50
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Star__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      primary: "Destacados",
      secondary: "Especialmente escogidas para t\xED",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }
    })), __jsx(_FridgeMagnets__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: this.props.featuredStores,
      openSelectedStore: newStore => this.props.openSelectedStore(newStore),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    })), __jsx("div", {
<<<<<<< HEAD
      className: "jsx-1386379518" + " " + "divider",
=======
      className: "jsx-237873610" + " " + "divider favorite",
>>>>>>> master
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }))), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_6___default.a, {
      primary: "Favoritos",
      secondary: "Tus establecimientos favoritos",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    })), this.props.favoriteStores !== null && this.props.favoriteStores !== [] ? __jsx(_FridgeMagnets__WEBPACK_IMPORTED_MODULE_2__["default"], {
      stores: this.props.favoriteStores,
      style: {
        marginBottom: "15px"
      },
      openSelectedStore: newStore => this.props.openSelectedStore(newStore),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 14
      }
    }) : __jsx(_FridgeMagnetsNoFavorites__WEBPACK_IMPORTED_MODULE_3__["default"], {
      style: {
        marginBottom: "15px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 14
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FridgeMagnetsSection);

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Loading extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  render() {
    return __jsx("div", {
      className: "jsx-3244493474",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3244493474",
      __self: this
    }, ".root.jsx-3244493474{height:100vh;width:100%;background:#ffcf02;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVVcsQUFHNkIsYUFDRixXQUNTLG1CQUNQLDBFQUNPLDZGQUNJLG1HQUMzQiIsImZpbGUiOiIvaG9tZS9jcm1vY2svcGlkZWVubGFlcXVpbmEvZnJvbnQvY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnR9IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBMb2FkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwdmg7XG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjZjAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9vdFwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPVwiL2JyYW5kL2xvZ29fYmxhbmNvX25hcmFuamEuc3ZnXCIgd2lkdGg9XCI4MCVcIj48L2ltZz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiJdfQ== */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/Loading.js */"), __jsx("div", {
      className: "jsx-3244493474" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: "/brand/logo_blanco_naranja.svg",
      width: "80%",
      className: "jsx-3244493474" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/Magnet.js":
/*!******************************!*\
  !*** ./components/Magnet.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Storefront */ "@material-ui/icons/Storefront");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CreditCard */ "@material-ui/icons/CreditCard");
/* harmony import */ var _material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Magnet.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Magnet extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.openSelectedStore(this.props.store);
  }

  render() {
    const storeTypes = ["dryCleaner", "stationeryStore", "groceryStore", "fastFoodRestaurant", "restaurant", "hardwareStore", "petStore", "liquorStore", "vegetableStore", "bakery", "pharmacy", "butchery"];
    return __jsx("div", {
      className: "jsx-201863143" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "201863143",
      __self: this
<<<<<<< HEAD
    }, ".center.jsx-201863143{text-align:center;}.sideButton.jsx-201863143{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:2;}.bottom.jsx-201863143{botom:0;left:0;background:gainsboro;height:40px;width:100%;border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.top.jsx-201863143{left:35px;top:-40px;height:80px;width:80px;border-radius:40px;}.butchery.jsx-201863143{background:lightpink;}.pharmacy.jsx-201863143{background:lightcyan;}.bakery.jsx-201863143{background:lavender;}.vegetableStore.jsx-201863143{background:green;}.liquorStore.jsx-201863143{background:deeppink;}.petStore.jsx-201863143{background:peru;}.hardwareStore.jsx-201863143{background:slategrey;}.restaurant.jsx-201863143{background:olivedrab;}.fastFoodRestaurant.jsx-201863143{background:tomato;}.groceryStore.jsx-201863143{background:gold;}.stationeryStore.jsx-201863143{background:steelblue;}.store.jsx-201863143{background:gainsboro;}.dryCleaner.jsx-201863143{background:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL01hZ25ldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ1csQUFHaUMsQUFJQSxBQVFWLEFBVUUsQUFRVyxBQUlBLEFBSUQsQUFJSCxBQUlHLEFBSUosQUFJSyxBQUlBLEFBSUgsQUFJRixBQUlLLEFBSUEsQUFJRixRQWpFWixFQVVHLEtBVFcsQ0FxQ3ZCLEFBZ0JBLENBeEJBLENBMUNBLEFBSWUsQUEwRGYsQ0FnQkEsQ0F2RGMsQUFlZCxBQVFBLENBaEJBLEFBSUEsQUFvQkEsQUFJQSxBQVlBLEFBSUEsV0FsRGEsSUFWQyxPQVdPLEtBVlIsV0FDb0IsR0FVakMsNEJBVGtDLEVBWmIsOEJBYXJCLCtEQVp5QixtR0FDZCxVQUNYIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL01hZ25ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IFN0b3JlZnJvbnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TdG9yZWZyb250J1xuaW1wb3J0IENyZWRpdENhcmRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DcmVkaXRDYXJkJ1xuXG5jbGFzcyBNYWduZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKVxuICB7XG4gICAgc3VwZXIocHJvcHMpXG4gIH1cblxuICBoYW5kbGVDbGljaygpXG4gIHtcbiAgICB0aGlzLnByb3BzLm9wZW5TZWxlY3RlZFN0b3JlKHRoaXMucHJvcHMuc3RvcmUpXG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdG9yZVR5cGVzID0gW1xuICAgICAgXCJkcnlDbGVhbmVyXCIsIFxuICAgICAgXCJzdGF0aW9uZXJ5U3RvcmVcIiwgXG4gICAgICBcImdyb2NlcnlTdG9yZVwiLCBcbiAgICAgIFwiZmFzdEZvb2RSZXN0YXVyYW50XCIsIFxuICAgICAgXCJyZXN0YXVyYW50XCIsIFxuICAgICAgXCJoYXJkd2FyZVN0b3JlXCIsIFxuICAgICAgXCJwZXRTdG9yZVwiLCBcbiAgICAgIFwibGlxdW9yU3RvcmVcIiwgXG4gICAgICBcInZlZ2V0YWJsZVN0b3JlXCIsIFxuICAgICAgXCJiYWtlcnlcIiwgXG4gICAgICBcInBoYXJtYWN5XCIsICBcbiAgICAgIFwiYnV0Y2hlcnlcIlxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAuY2VudGVye1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5zaWRlQnV0dG9ue1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICB6LWluZGV4OjI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3R0b217XG4gICAgICAgICAgICAgIGJvdG9tOiAwO1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnYWluc2Jvcm87XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRvcHtcbiAgICAgICAgICAgICAgbGVmdDogMzVweDtcbiAgICAgICAgICAgICAgdG9wOiAtNDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogODBweDsgXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXRjaGVyeXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRwaW5rO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGhhcm1hY3l7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJha2VyeXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGF2ZW5kZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52ZWdldGFibGVTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saXF1b3JTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZGVlcHBpbms7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wZXRTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcGVydTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhhcmR3YXJlU3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNsYXRlZ3JleTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnJlc3RhdXJhbnR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG9saXZlZHJhYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZhc3RGb29kUmVzdGF1cmFudHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdG9tYXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ3JvY2VyeVN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBnb2xkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RhdGlvbmVyeVN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzdGVlbGJsdWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZHJ5Q2xlYW5lcntcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogc2t5Ymx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgIDxQYXBlciBlbGV2YXRpb249ezV9IHN0eWxlPXt7d2lkdGg6XCIxNDBweFwiLCBtYXJnaW5Ub3A6XCI1MHB4XCIsIG1hcmdpbkJvdHRvbTpcIjIwcHhcIiwgbWFyZ2luTGVmdDpcIjVweFwiLCBtYXJnaW5SaWdodDpcIjVweFwiLCBwYWRkaW5nTGVmdDpcIjVweFwiLCBwYWRkaW5nUmlnaHQ6XCI1cHhcIiwgcGFkZGluZ1RvcDpcIjQ1cHhcIiwgcGFkZGluZ0JvdHRvbTpcIjQwcHhcIiwgcG9zaXRpb246J3JlbGF0aXZlJywgYm9yZGVyUmFkaXVzOicxNXB4J319PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInNpZGVCdXR0b24gdG9wIFwiKyh0aGlzLnByb3BzLnN0b3JlLnR5cGUhPW51bGwgJiYgc3RvcmVUeXBlcy5pbmNsdWRlcyh0aGlzLnByb3BzLnN0b3JlLnR5cGUpID90aGlzLnByb3BzLnN0b3JlLnR5cGU6XCJzdG9yZVwiKX0+XG4gICAgICAgICAgICAgIDxTdG9yZWZyb250SWNvbiBmb250U2l6ZT1cImxhcmdlXCIvPiBcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17e2hlaWdodDpcIjcwcHhcIn19PlxuICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnByb3BzLnN0b3JlLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8c21hbGw+eyh0aGlzLnByb3BzLnN0b3JlLnR5cGUhPW51bGw/dGhpcy5wcm9wcy5zdG9yZS50eXBlOlwiVGllbmRhXCIpfTwvc21hbGw+XG4gICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICA8c21hbGw+eyh0aGlzLnByb3BzLnN0b3JlLmFjY2VwdHNDYXJkcz88c3Bhbj48Q3JlZGl0Q2FyZEljb24vPiBBY2VwdGEgVGFyamV0YXM8L3NwYW4+OlwiXCIpfSA8L3NtYWxsPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNtYWxsPnt0aGlzLnByb3BzLnN0b3JlLmFkZHJlc3N9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZUJ1dHRvbiBib3R0b20gY2VudGVyXCIgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2soKX0+XG4gICAgICAgICAgICAgIEhhY2VyIHBlZGlkb1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUGFwZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFnbmV0O1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/Magnet.js */"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {
      elevation: 5,
=======
    }, ".center.jsx-201863143{text-align:center;}.sideButton.jsx-201863143{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;z-index:2;}.bottom.jsx-201863143{botom:0;left:0;background:gainsboro;height:40px;width:100%;border-bottom-left-radius:15px;border-bottom-right-radius:15px;}.top.jsx-201863143{left:35px;top:-40px;height:80px;width:80px;border-radius:40px;}.butchery.jsx-201863143{background:lightpink;}.pharmacy.jsx-201863143{background:lightcyan;}.bakery.jsx-201863143{background:lavender;}.vegetableStore.jsx-201863143{background:green;}.liquorStore.jsx-201863143{background:deeppink;}.petStore.jsx-201863143{background:peru;}.hardwareStore.jsx-201863143{background:slategrey;}.restaurant.jsx-201863143{background:olivedrab;}.fastFoodRestaurant.jsx-201863143{background:tomato;}.groceryStore.jsx-201863143{background:gold;}.stationeryStore.jsx-201863143{background:steelblue;}.store.jsx-201863143{background:gainsboro;}.dryCleaner.jsx-201863143{background:skyblue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL21hZ25ldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q1csQUFHaUMsQUFJQSxBQVFWLEFBVUUsQUFRVyxBQUlBLEFBSUQsQUFJSCxBQUlHLEFBSUosQUFJSyxBQUlBLEFBSUgsQUFJRixBQUlLLEFBSUEsQUFJRixRQWpFWixFQVVHLEtBVFcsQ0FxQ3ZCLEFBZ0JBLENBeEJBLENBMUNBLEFBSWUsQUEwRGYsQ0FnQkEsQ0F2RGMsQUFlZCxBQVFBLENBaEJBLEFBSUEsQUFvQkEsQUFJQSxBQVlBLEFBSUEsV0FsRGEsSUFWQyxPQVdPLEtBVlIsV0FDb0IsR0FVakMsNEJBVGtDLEVBWmIsOEJBYXJCLCtEQVp5QixtR0FDZCxVQUNYIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL21hZ25ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcbmltcG9ydCBDaGVja2JveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGVja2JveCdcblxuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnXG5pbXBvcnQgRmF2b3JpdGVCb3JkZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZUJvcmRlcidcbmltcG9ydCBTdG9yZWZyb250SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU3RvcmVmcm9udCdcbmltcG9ydCBDcmVkaXRDYXJkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ3JlZGl0Q2FyZCdcbmltcG9ydCBMb2NhbFNoaXBwaW5nSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxTaGlwcGluZydcblxuXG5jbGFzcyBmcmlkZ2VNYWduZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3RvcmVUeXBlcyA9IFtcbiAgICAgIFwiZHJ5Q2xlYW5lclwiLCBcbiAgICAgIFwic3RhdGlvbmVyeVN0b3JlXCIsIFxuICAgICAgXCJncm9jZXJ5U3RvcmVcIiwgXG4gICAgICBcImZhc3RGb29kUmVzdGF1cmFudFwiLCBcbiAgICAgIFwicmVzdGF1cmFudFwiLCBcbiAgICAgIFwiaGFyZHdhcmVTdG9yZVwiLCBcbiAgICAgIFwicGV0U3RvcmVcIiwgXG4gICAgICBcImxpcXVvclN0b3JlXCIsIFxuICAgICAgXCJ2ZWdldGFibGVTdG9yZVwiLCBcbiAgICAgIFwiYmFrZXJ5XCIsIFxuICAgICAgXCJwaGFybWFjeVwiLCAgXG4gICAgICBcImJ1dGNoZXJ5XCJcbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgLmNlbnRlcntcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAuc2lkZUJ1dHRvbntcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgei1pbmRleDoyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm90dG9te1xuICAgICAgICAgICAgICBib3RvbTogMDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ2FpbnNib3JvO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50b3B7XG4gICAgICAgICAgICAgIGxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgIHRvcDogLTQwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7IFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0Y2hlcnl7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0cGluaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnBoYXJtYWN5e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGN5YW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iYWtlcnl7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmVnZXRhYmxlU3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlxdW9yU3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGRlZXBwaW5rO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGV0U3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHBlcnU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYXJkd2FyZVN0b3Jle1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBzbGF0ZWdyZXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXN0YXVyYW50e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBvbGl2ZWRyYWI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mYXN0Rm9vZFJlc3RhdXJhbnR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRvbWF0bztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmdyb2NlcnlTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ29sZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN0YXRpb25lcnlTdG9yZXtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogc3RlZWxibHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3RvcmV7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRyeUNsZWFuZXJ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHNreWJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICA8UGFwZXIgZWxldmF0aW9uPXsxMH0gc3R5bGU9e3t3aWR0aDpcIjE0MHB4XCIsIG1hcmdpblRvcDpcIjUwcHhcIiwgbWFyZ2luQm90dG9tOlwiNXB4XCIsIG1hcmdpbkxlZnQ6XCI1cHhcIiwgbWFyZ2luUmlnaHQ6XCI1cHhcIiwgcGFkZGluZ0xlZnQ6XCI1cHhcIiwgcGFkZGluZ1JpZ2h0OlwiNXB4XCIsIHBhZGRpbmdUb3A6XCI0NXB4XCIsIHBhZGRpbmdCb3R0b206XCI0MHB4XCIsIHBvc2l0aW9uOidyZWxhdGl2ZScsIGJvcmRlclJhZGl1czonMTVweCd9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJzaWRlQnV0dG9uIHRvcCBcIisodGhpcy5wcm9wcy5zdG9yZS50eXBlIT1udWxsICYmIHN0b3JlVHlwZXMuaW5jbHVkZXModGhpcy5wcm9wcy5zdG9yZS50eXBlKSA/dGhpcy5wcm9wcy5zdG9yZS50eXBlOlwic3RvcmVcIil9PlxuICAgICAgICAgICAgICA8U3RvcmVmcm9udEljb24gZm9udFNpemU9XCJsYXJnZVwiLz4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgc3R5bGU9e3toZWlnaHQ6XCI3MHB4XCJ9fT5cbiAgICAgICAgICAgICAgPHN0cm9uZz57dGhpcy5wcm9wcy5zdG9yZS5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNtYWxsPnsodGhpcy5wcm9wcy5zdG9yZS50eXBlIT1udWxsP3RoaXMucHJvcHMuc3RvcmUudHlwZTpcIlRpZW5kYVwiKX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgPHNtYWxsPnsodGhpcy5wcm9wcy5zdG9yZS5hY2NlcHRzQ2FyZHM/PHNwYW4+PENyZWRpdENhcmRJY29uLz4gQWNlcHRhIFRhcmpldGFzPC9zcGFuPjpcIlwiKX0gPC9zbWFsbD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5wcm9wcy5zdG9yZS5hZGRyZXNzfTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGVCdXR0b24gYm90dG9tIGNlbnRlclwiPlxuICAgICAgICAgICAgICBIYWNlciBwZWRpZG9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L1BhcGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZyaWRnZU1hZ25ldHM7XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/magnet.js */"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default.a, {
      elevation: 10,
>>>>>>> master
      style: {
        width: "140px",
        marginTop: "50px",
        marginBottom: "20px",
        marginLeft: "5px",
        marginRight: "5px",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingTop: "45px",
        paddingBottom: "40px",
        position: 'relative',
        borderRadius: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-201863143" + " " + ("sideButton top " + (this.props.store.type != null && storeTypes.includes(this.props.store.type) ? this.props.store.type : "store") || false),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fontSize: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "jsx-201863143" + " " + "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }, __jsx("p", {
      style: {
        height: "70px"
      },
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 15
      }
    }, __jsx("strong", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, this.props.store.name), __jsx("br", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 15
      }
    }), __jsx("small", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 15
      }
    }, this.props.store.type != null ? this.props.store.type : "Tienda"), __jsx("br", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 15
      }
    }), __jsx("small", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 15
      }
    }, this.props.store.acceptsCards ? __jsx("span", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 54
      }
    }, __jsx(_material_ui_icons_CreditCard__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 60
      }
    }), " Acepta Tarjetas") : "", " "), __jsx("br", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 15
      }
    }), __jsx("small", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 15
      }
    }, this.props.store.address)), __jsx("p", {
      className: "jsx-201863143",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    })), __jsx("div", {
      onClick: () => this.handleClick(),
      className: "jsx-201863143" + " " + "sideButton bottom center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }
    }, "Hacer pedido")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Magnet);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Distance */ "./components/Distance.js");
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Map.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const initialZoom = 15;

class Map extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      userMarker: null,
      storeMarkers: [],
      selectedStore: null
    };
  }

  componentDidMount() {
    this.setState({
      map: null
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.pos !== null && (this.props.stores !== null && this.props.stores !== undefined || this.props.selectedStore !== null && this.props.selectedStore !== undefined)) {
      if (this.state.map === null) {
        let map = this.getMap(this.props.pos);
        let userMarker = this.placeUserMarker(map, this.props.pos);
        let storeMarkers = null;
        let selectedStore = null;

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
        let userMarker = this.placeUserMarker(this.state.map, this.props.pos);
        this.removeAllStoreMarkers();
        this.setState({
          userMarker: userMarker
        });
      }

      if (this.state.map !== null && prevProps.stores !== this.props.stores) {
        this.removeAllStoreMarkers();
        let storeMarkers = this.placeAllStoreMarkers(this.state.map, this.props.stores);
        this.setState({
          storeMarkers: storeMarkers
        });
      }

      if (this.state.map !== null && prevProps.selectedStore !== this.props.selectedStore) {
        this.removeSelectedStoreMarker();
        let selectedStore = this.placeAStoreMarker(this.state.map, this.props.selectedStore);
        this.setState({
          selectedStore: selectedStore
        });
      }
    }
  }

  getMap(pos) {
    let map = null;

    if (this.state.map == null) {
      map = new google.maps.Map(document.getElementById(this.props.htmlId), {
        center: pos,
        zoom: initialZoom,
        zoomControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        clickableIcons: false,
        streetViewControl: false,
        gestureHandling: 'greedy'
      });
    } else {
      map = this.state.map;
    }

    return map;
  }

  placeUserMarker(map, pos, pan = true) {
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

    if (pan) {
      this.panToPos(map, pos);
    }

    return marker;
  }

  panToPos(map, pos, zoom = initialZoom) {
    map.setZoom(zoom);
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

  removeSelectedStoreMarker() {
    this.state.selectedStore.setMap(null);
  }

  placeAStoreMarker(map, store, selected = false) {
    let categories = ['pharmacy', 'bakery', 'vegetableStore', 'hardwareStore', 'butchery', 'drycleaner', 'stationeryStore', 'petStore', 'liquorStore', 'fastFood', 'restaurant', 'groeceryStore', 'store'];
    let labels = ['Droguería', 'Panadería', 'Fruver', 'Ferretería', 'Carnicería', 'Lavandería', 'Papelería', 'Mascotas', 'Licorera', 'Comida rápida', 'Restaurante', 'Tienda', 'Otro'];

    if (store.type === null) {
      store.type = "store";
    }

    if (!categories.includes(store.type)) {
      store.type = "store";
    }

    let i = categories.indexOf(store.type);
    store.typeLabel = labels[i];
    let icon = '';

    if (selected) {
      icon = './map/' + store.type + "_icon_selected.svg";
    } else {
      icon = './map/' + store.type + "_icon.svg";
    }

    let icon_hover = './map/' + store.type + "_icon_hover.svg";
    let marker = new google.maps.Marker({
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
      distance: Object(_Distance__WEBPACK_IMPORTED_MODULE_1__["default"])(this.props.pos.lat, this.props.pos.lng, store.lat, store.lng),
      onClickFunction: id => this.handleStoreMarkerClick(id)
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

  findStore(id) {
    for (let i = 0; i < this.props.stores.length; i++) {
      const element = this.props.stores[i];

      if (element._id === id) {
        return element;
      }
    }

    return null;
  }

  handleStoreMarkerClick(id) {
    let store = this.findStore(id);

    if (store !== null) {
      this.props.openSelectedStore(store);
    }
  }

  render() {
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

}

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Ready.js":
/*!*****************************!*\
  !*** ./components/Ready.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SideMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideMenu */ "./components/SideMenu.js");
/* harmony import */ var _components_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WelcomeSection */ "./components/WelcomeSection.js");
/* harmony import */ var _components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FridgeMagnetsSection */ "./components/FridgeMagnetsSection.js");
/* harmony import */ var _components_StoreCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/StoreCard */ "./components/StoreCard.js");
/* harmony import */ var _components_SearchCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SearchCard */ "./components/SearchCard.js");
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/Ready.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Ready extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      selectedStore: null,
      storeCardOpen: false,
      searchCardOpen: false
    };
  }

  render() {
    return __jsx("div", {
      className: "jsx-1331275266",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1331275266",
      __self: this
    }, ".root.jsx-1331275266{background:linear-gradient(180deg,#ffcf0200 50%,#ffcf02ff 90%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1JlYWR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCVyxBQUdnRiwrREFDbkUiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvUmVhZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50fSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFNpZGVNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU1lbnUnXG5pbXBvcnQgV2VsY29tZVNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9XZWxjb21lU2VjdGlvbidcbmltcG9ydCBGcmlkZ2VNYWduZXRzU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZyaWRnZU1hZ25ldHNTZWN0aW9uJ1xuaW1wb3J0IFN0b3JlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N0b3JlQ2FyZCdcbmltcG9ydCBTZWFyY2hDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU2VhcmNoQ2FyZCdcblxuY2xhc3MgUmVhZHkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWxlY3RlZFN0b3JlOm51bGwsXG4gICAgICBzdG9yZUNhcmRPcGVuOmZhbHNlLFxuICAgICAgc2VhcmNoQ2FyZE9wZW46ZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmY2YwMjAwIDUwJSwgI2ZmY2YwMmZmIDkwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPFN0b3JlQ2FyZCBcbiAgICAgICAgICBzdG9yZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFN0b3JlfSBcbiAgICAgICAgICBsb2NhdGlvbj17dGhpcy5wcm9wcy5kZXZpY2VMb2NhdGlvbn0gXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5zdG9yZUNhcmRPcGVufSBcbiAgICAgICAgICBjbG9zZT17KCk9PnRoaXMuc2V0U3RhdGUoe3N0b3JlQ2FyZE9wZW46ZmFsc2V9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPFNlYXJjaENhcmQgXG4gICAgICAgICAgc3RvcmVzPXt0aGlzLnByb3BzLnN0b3Jlc30gXG4gICAgICAgICAgbG9jYXRpb249e3RoaXMucHJvcHMuZGV2aWNlTG9jYXRpb259IFxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuc2VhcmNoQ2FyZE9wZW59IFxuICAgICAgICAgIGNsb3NlPXsoKT0+dGhpcy5zZXRTdGF0ZSh7c2VhcmNoQ2FyZE9wZW46ZmFsc2V9KX0gXG4gICAgICAgICAgb3BlblNlbGVjdGVkU3RvcmU9eyhuZXdTdG9yZSk9PnRoaXMuc2V0U3RhdGUoe3N0b3JlQ2FyZE9wZW46dHJ1ZSwgc2VsZWN0ZWRTdG9yZTpuZXdTdG9yZX0pfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICA8U2lkZU1lbnUgXG4gICAgICAgICAgICB1c2VyPXt0aGlzLnByb3BzLnVzZXJ9IFxuICAgICAgICAgICAgYXV0aDBMb2dpbj17dGhpcy5wcm9wcy5sb2dpbldpdGhSZWRpcmVjdH1cbiAgICAgICAgICAgIGF1dGgwTG9nb3V0PXt0aGlzLnByb3BzLmxvZ291dH1cbiAgICAgICAgICAgIG51bU9yZGVycz17KHRoaXMucHJvcHMub3JkZXJzIT09bnVsbD90aGlzLnByb3BzLm9yZGVycy5sZW5ndGg6MCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDxXZWxjb21lU2VjdGlvbiBcbiAgICAgICAgICAgIG5hbWU9eyhcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VyIT09bnVsbCBcbiAgICAgICAgICAgICAgJiYgdGhpcy5wcm9wcy51c2VyLm5hbWUhPT1udWxsIFxuICAgICAgICAgICAgICA/IHRoaXMucHJvcHMudXNlci5uYW1lXG4gICAgICAgICAgICAgIDpudWxsXG4gICAgICAgICAgICApfSBcbiAgICAgICAgICAgIGFkZHJlc3Nlcz17KFxuICAgICAgICAgICAgICB0aGlzLnByb3BzLnVzZXIhPT1udWxsXG4gICAgICAgICAgICAgICYmdGhpcy5wcm9wcy51c2VyLmFkZHJlc3NlcyE9PW51bGxcbiAgICAgICAgICAgICAgP3RoaXMucHJvcHMudXNlci5hZGRyZXNzZXMhPT1bXVxuICAgICAgICAgICAgICA6W11cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBkZXZpY2VMb2NhdGlvbj17dGhpcy5wcm9wcy5kZXZpY2VMb2NhdGlvbn1cbiAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb249e3RoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbn1cbiAgICAgICAgICAgIG51bVN0b3Jlcz17KHRoaXMucHJvcHMuc3RvcmVzIT09bnVsbD90aGlzLnByb3BzLnN0b3Jlcy5sZW5ndGg6MCl9XG4gICAgICAgICAgICBvcGVuU2VhcmNoPXsobmV3U3RvcmUpPT50aGlzLnNldFN0YXRlKHtzZWFyY2hDYXJkT3Blbjp0cnVlfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7KCAodGhpcy5wcm9wcy5zdG9yZXMgIT09IG51bGwgJiYgdGhpcy5wcm9wcy5zdG9yZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAmJjxGcmlkZ2VNYWduZXRzU2VjdGlvbiBcbiAgICAgICAgICAgIGZhdm9yaXRlU3RvcmVzPXsodGhpcy5wcm9wcy51c2VyIT09bnVsbCYmdGhpcy5wcm9wcy51c2VyLmZhdm9yaXRlU3RvcmVzIT09bnVsbD90aGlzLnByb3BzLnVzZXIuZmF2b3JpdGVTdG9yZXM6W10pfSBcbiAgICAgICAgICAgIGZlYXR1cmVkU3RvcmVzPXt0aGlzLnByb3BzLmZlYXR1cmVkU3RvcmVzfSBcbiAgICAgICAgICAgIG9wZW5TZWxlY3RlZFN0b3JlPXsobmV3U3RvcmUpPT50aGlzLnNldFN0YXRlKHtzdG9yZUNhcmRPcGVuOnRydWUsIHNlbGVjdGVkU3RvcmU6bmV3U3RvcmV9KX1cbiAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWR5O1xuIl19 */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/Ready.js */"), __jsx(_components_StoreCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      store: this.state.selectedStore,
      location: this.props.deviceLocation,
      open: this.state.storeCardOpen,
      close: () => this.setState({
        storeCardOpen: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }), __jsx(_components_SearchCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      stores: this.props.stores,
      location: this.props.deviceLocation,
      open: this.state.searchCardOpen,
      close: () => this.setState({
        searchCardOpen: false
      }),
      openSelectedStore: newStore => this.setState({
        storeCardOpen: true,
        selectedStore: newStore
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "jsx-1331275266" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx(_components_SideMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      user: this.props.user,
      auth0Login: this.props.loginWithRedirect,
      auth0Logout: this.props.logout,
      numOrders: this.props.orders !== null ? this.props.orders.length : 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    }), __jsx(_components_WelcomeSection__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: this.props.user !== null && this.props.user.name !== null ? this.props.user.name : null,
      addresses: this.props.user !== null && this.props.user.addresses !== null ? this.props.user.addresses !== [] : [],
      deviceLocation: this.props.deviceLocation,
      selectedLocation: this.props.selectedLocation,
      numStores: this.props.stores !== null ? this.props.stores.length : 0,
      openSearch: newStore => this.setState({
        searchCardOpen: true
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }), this.props.stores !== null && this.props.stores.length > 0 && __jsx(_components_FridgeMagnetsSection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      favoriteStores: this.props.user !== null && this.props.user.favoriteStores !== null ? this.props.user.favoriteStores : [],
      featuredStores: this.props.featuredStores,
      openSelectedStore: newStore => this.setState({
        storeCardOpen: true,
        selectedStore: newStore
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Ready);

/***/ }),

/***/ "./components/SearchCard.js":
/*!**********************************!*\
  !*** ./components/SearchCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/History */ "@material-ui/icons/History");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/SearchCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class SearchCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      storesToShow: [],
      selectAll: false,
      updateNeeded: false,
      onlyFavorites: false,
      onlyHistory: false,
      categories: [{
        type: 'pharmacy',
        name: "Droguería",
        selected: true
      }, {
        type: 'bakery',
        name: "Panadería",
        selected: true
      }, {
        type: 'vegetableStore',
        name: "Fruver",
        selected: true
      }, {
        type: 'hardwareStore',
        name: "Ferretería",
        selected: true
      }, {
        type: 'butchery',
        name: "Carnicería",
        selected: true
      }, {
        type: 'drycleaner',
        name: "Lavandería",
        selected: true
      }, {
        type: 'stationeryStore',
        name: "Papelería",
        selected: true
      }, {
        type: 'petStore',
        name: "Mascotas",
        selected: true
      }, {
        type: 'liquorStore',
        name: "Licores",
        selected: true
      }, {
        type: 'fastFood',
        name: "Comida Rápida",
        selected: true
      }, {
        type: 'restaurant',
        name: "Restaurante",
        selected: true
      }, {
        type: 'groeceryStore',
        name: "Tienda",
        selected: true
      }, {
        type: 'store',
        name: "Otro",
        selected: true
      }]
    };
  }

  handleChipClick(index) {
    let newCategories = JSON.parse(JSON.stringify(this.state.categories));

    if (newCategories[index].selected) {
      newCategories[index].selected = false;
    } else {
      newCategories[index].selected = true;
    }

    this.setState({
      categories: newCategories
    });
  }

  handleSelectAllClick() {
    let newCategories = JSON.parse(JSON.stringify(this.state.categories));
    let newSelectAll = JSON.parse(JSON.stringify(this.state.selectAll));

    if (this.state.selectAll) {
      for (let i = 0; i < newCategories.length; i++) {
        newCategories[i].selected = true;
      }

      newSelectAll = false;
    } else {
      for (let i = 0; i < newCategories.length; i++) {
        newCategories[i].selected = false;
      }

      newSelectAll = true;
    }

    this.setState({
      categories: newCategories,
      selectAll: newSelectAll
    });
  }

  handleFavoritesOnlyClick(index) {
    this.setState({
      onlyFavorites: !this.state.onlyFavorites
    });
  }

  handleHistoryOnlyClick(index) {
    this.setState({
      onlyHistory: !this.state.onlyHistory
    });
  }

  activeCategories() {
    let list = [];

    for (let i = 0; i < this.state.categories.length; i++) {
      const element = this.state.categories[i];

      if (element.selected) {
        list.push(element.type);
      }
    }

    return list;
  }

  allCategories() {
    let list = [];

    for (let i = 0; i < this.state.categories.length; i++) {
      const element = this.state.categories[i];
      list.push(element.type);
    }

    return list;
  }

  updateStoreList() {
    let allCategories = this.allCategories();
    let activeCategories = this.activeCategories();
    let newStoresToShow = [];

    for (let i = 0; i < this.props.stores.length; i++) {
      const element = this.props.stores[i];
      let mustBeIncluded = true;

      if (element.type === null) {
        element.type = "store";
      } else {
        if (!allCategories.includes(element.type)) {
          element.type = "store";
        }
      }

      if (!activeCategories.includes(element.type)) {
        mustBeIncluded = false;
      }

      if (!mustBeIncluded && this.state.onlyFavorites) {
        if (!this.props.favoriteStores.includes(element.id)) {
          mustBeIncluded = false;
        }
      }

      if (!mustBeIncluded && this.state.onlyHistory) {
        if (!this.props.historyStores.includes(element.id)) {
          mustBeIncluded = false;
        }
      }

      if (mustBeIncluded) {
        newStoresToShow.push(element);
      }
    }

    this.setState({
      updateNeeded: false,
      storesToShow: newStoresToShow
    });
  }

  componentDidMount() {
    this.updateStoreList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.categories) !== JSON.stringify(this.state.categories) || prevState.onlyHistory !== this.state.onlyHistory || prevState.onlyFavorites !== this.state.onlyFavorites) {
      this.setState({
        updateNeeded: true
      });
    }

    if (this.state.updateNeeded) {
      this.updateStoreList();
    }
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 7
      }
    }, this.props.stores && __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 36
      }
    }, __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open,
      fullScreen: true,
      style: {
        height: "100%",
        position: "relative",
        background: '#ffcf02'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        height: '100%',
        background: 'lightgrey'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 13
      }
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
      stores: this.state.storesToShow,
      pos: this.props.location,
      openSelectedStore: newStore => this.props.openSelectedStore(newStore),
      htmlId: "search-map",
      selectedStore: null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        display: 'relative'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: "small",
      "aria-label": "menu",
      onClick: () => this.props.close(),
      style: {
        position: "absolute",
        top: "10px",
        left: "15px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        margin: '10px',
        textAlign: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 15
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 17
      }
    }, "Selecciona una tienda en el mapa"), __jsx("h4", {
      style: {
        marginBottom: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, "Filtros"), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: this.state.onlyFavorites ? "default" : "outlined",
      size: "small",
      label: "Solo favoritos",
      color: "secondary",
      clickable: true,
      icon: __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 25
        }
      }),
      onClick: () => this.handleFavoritesOnlyClick(),
      style: {
        marginTop: '10px',
        marginBottom: '10px',
        marginRight: '2px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      variant: this.state.onlyHistory ? "default" : "outlined",
      size: "small",
      label: "Pedidos anteriores",
      clickable: true,
      icon: __jsx(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 25
        }
      }),
      onClick: () => this.handleHistoryOnlyClick(),
      style: {
        marginTop: '10px',
        marginBottom: '10px',
        marginLeft: '2px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 17
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 17
      }
    }), this.state.categories.map((item, index) => __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: item.type,
      variant: item.selected ? "default" : "outlined",
      size: "small",
      label: item.name,
      clickable: true,
      color: "primary",
      onClick: () => this.handleChipClick(index),
      style: {
        margin: '2px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 19
      }
    })), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 17
      }
    }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_4___default.a, {
      size: "small",
      label: "Seleccionar todo/ninguno",
      clickable: true,
      color: "default",
      onClick: () => this.handleSelectAllClick(),
      style: {
        margin: '8px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SearchCard);

/***/ }),

/***/ "./components/SideMenu.js":
/*!********************************!*\
  !*** ./components/SideMenu.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Drawer */ "@material-ui/core/Drawer");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Badge */ "@material-ui/core/Badge");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "@material-ui/core/ListItemIcon");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/ExitToApp */ "@material-ui/icons/ExitToApp");
/* harmony import */ var _material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_DirectionsBikeSharp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/DirectionsBikeSharp */ "@material-ui/icons/DirectionsBikeSharp");
/* harmony import */ var _material_ui_icons_DirectionsBikeSharp__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DirectionsBikeSharp__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/SideMenu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


















class SideMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    };
  }

  render() {
    let menu = null;

    if (this.props.user == null) {
      menu = __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: this.props.auth0Login,
        size: "large",
        color: "primary",
        variant: "contained",
        style: {
          widht: '70%',
          marginRight: '20%',
          marginLeft: '20%',
          marginTop: '20px',
          marginBottom: '10px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, "Iniciar");
    } else {
      menu = __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("p", {
        style: {
          textAlign: 'center'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, this.props.user.name, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }
      }), __jsx("small", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }
      }, this.props.user.cellphone, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      }), this.props.user.email, __jsx("br", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 15
        }
      }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/account",
        size: "small",
        startIcon: __jsx(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_15___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 28
          }
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 15
        }
      }, "Cambiar"))), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onClick: this.props.auth0Logout,
        size: "small",
        variant: "contained",
        startIcon: __jsx(_material_ui_icons_ExitToApp__WEBPACK_IMPORTED_MODULE_13___default.a, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 24
          }
        }),
        style: {
          widht: '70%',
          marginRight: '18%',
          marginLeft: '18%',
          marginTop: '0px',
          marginBottom: '20px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }
      }, "Cerrar sesi\xF3n"), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }), __jsx(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      }, __jsx(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
        button: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 13
        }
      }, __jsx(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 15
        }
      }, this.props.numOrders > 0 ? __jsx(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_7___default.a, {
        badgeContent: this.props.numOrders,
        max: 10,
        color: "primary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      }, __jsx(_material_ui_icons_DirectionsBikeSharp__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 23
        }
      })) : __jsx(_material_ui_icons_DirectionsBikeSharp__WEBPACK_IMPORTED_MODULE_14___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 20
        }
      })), __jsx(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_11___default.a, {
        primary: "Pedidos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 15
        }
      }))));
    }

    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7
      }
    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_3___default.a, {
      size: "small",
      "aria-label": "menu",
      onClick: () => this.setState({
        drawerIsOpen: true
      }),
      style: {
        position: "fixed",
        top: "15px",
        left: "15px",
        zIndex: '3'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }
    }, __jsx(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    })), __jsx(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_2___default.a, {
      anchor: "left",
      open: this.state.drawerIsOpen,
      onClose: () => this.setState({
        drawerIsOpen: false
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default.a, {
      alt: "Remy Sharp",
      src: "/brand/logo_fondo_naranja.svg",
      style: {
        width: '150px',
        height: '150px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        marginBottom: "20px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }
    }), __jsx("div", {
      style: {
        width: "250px",
        height: "100%",
        position: "relative"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, menu, __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_8___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: "/aboutus",
      size: "large",
      startIcon: __jsx(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_16___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 26
        }
      }),
      style: {
        position: 'absolute',
        bottom: '0',
        left: '10%',
        width: '80%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }, "Acerca de nosotros"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./components/StoreCard.js":
/*!*********************************!*\
  !*** ./components/StoreCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Distance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Distance */ "./components/Distance.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "@material-ui/icons/Favorite");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/StoreCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











class StoreCard extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
  }

  handleClick() {
    window.open("https://wa.me/573125533860?text=¡Hola!%20Quiero%20hacer%20un%20pedido.");
  }

  handleFavorite() {
    alert("Esta funcionalidad todavía está en desarollo :)");
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, this.props.store && __jsx("div", {
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 35
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1265835017",
      __self: this
    }, ".root.jsx-1265835017{height:90%;width:90%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ1csQUFHMkIsV0FDRCxVQUNiIiwiZmlsZSI6Ii9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1N0b3JlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBkaXN0YW5jZSBmcm9tICcuLi9jb21wb25lbnRzL0Rpc3RhbmNlJ1xuaW1wb3J0IE1hcCBmcm9tICcuLi9jb21wb25lbnRzL01hcCdcblxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnXG5pbXBvcnQgRmFiIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ZhYidcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJ1xuXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrJ1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnXG5cbmNsYXNzIFN0b3JlQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKVxuICB7XG4gICAgd2luZG93Lm9wZW4oXCJodHRwczovL3dhLm1lLzU3MzEyNTUzMzg2MD90ZXh0PcKhSG9sYSElMjBRdWllcm8lMjBoYWNlciUyMHVuJTIwcGVkaWRvLlwiKTtcbiAgfVxuXG4gIGhhbmRsZUZhdm9yaXRlKClcbiAge1xuICAgIGFsZXJ0KFwiRXN0YSBmdW5jaW9uYWxpZGFkIHRvZGF2w61hIGVzdMOhIGVuIGRlc2Fyb2xsbyA6KVwiKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PnsodGhpcy5wcm9wcy5zdG9yZSAmJiAoPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6OTAlO1xuICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8RGlhbG9nIFxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBcbiAgICAgICAgICBvcGVuPXt0aGlzLnByb3BzLm9wZW59XG4gICAgICAgICAgZnVsbFNjcmVlblxuICAgICAgICAgIHN0eWxlPXt7aGVpZ2h0OlwiMTAwJVwiLCBwb3NpdGlvbjpcInJlbGF0aXZlXCIsIGJhY2tncm91bmQ6JyNmZmNmMDInfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDonMTAwJScsIGJhY2tncm91bmQ6J2xpZ2h0Z3JleSd9fT5cbiAgICAgICAgICAgICAgPE1hcCBcbiAgICAgICAgICAgICAgICBzdG9yZXM9e251bGx9XG4gICAgICAgICAgICAgICAgcG9zPXt0aGlzLnByb3BzLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIGh0bWxJZD1cInN0b3JlLW1hcFwiXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRTdG9yZT17dGhpcy5wcm9wcy5zdG9yZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheToncmVsYXRpdmUnfX0+XG4gICAgICAgICAgICAgIDxGYWIgc2l6ZT1cInNtYWxsXCIgYXJpYS1sYWJlbD1cIm1lbnVcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNsb3NlKCl9IHN0eWxlPXt7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB0b3A6XCIxMHB4XCIsIGxlZnQ6XCIxNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8QXJyb3dCYWNrSWNvbiAvPlxuICAgICAgICAgICAgICA8L0ZhYj5cbiAgICAgICAgICAgICAgPEZhYiBzaXplPVwic21hbGxcIiBhcmlhLWxhYmVsPVwibWVudVwiIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRmF2b3JpdGUoKX0gc3R5bGU9e3twb3NpdGlvbjpcImFic29sdXRlXCIsIHRvcDpcIjEwcHhcIiwgcmlnaHQ6XCIxNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICA8RmF2b3JpdGVJY29uIC8+XG4gICAgICAgICAgICAgIDwvRmFiPlxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsIGFsaWduSXRlbXM6J2NlbnRlcicsIHBhZGRpbmc6JzIwcHgnfX0+XG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9XCJUaWVuZGFcIiBzcmM9XCIvc3RhdGljL2ltYWdlcy9hdmF0YXIvMS5qcGdcIiBzdHlsZT17e3dpZHRoOic3NXB4JywgaGVpZ2h0Oic3NXB4J319Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDonMjBweCd9fT5cbiAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpblRvcDonMCcsIG1hcmdpbkJvdHRvbTonMCd9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc3RvcmUubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+e3RoaXMucHJvcHMuc3RvcmUuYWRkcmVzc308L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICA8Q2hpcCBsYWJlbD17dGhpcy5wcm9wcy5zdG9yZS50eXBlIT1udWxsP3RoaXMucHJvcHMuc3RvcmUudHlwZTpcIlRpZW5kYVwifSBzdHlsZT17e21hcmdpblRvcDonNXB4JywgbWFyZ2luQm90dG9tOic1cHgnfX0+PC9DaGlwPlxuICAgICAgICAgICAgICAgICAgPENoaXAgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtNYXRoLnJvdW5kKGRpc3RhbmNlKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUubGF0LFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcmUubG5nLFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24ubGF0LFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMubG9jYXRpb24ubG5nLFxuICAgICAgICAgICAgICAgICAgICApKjEwMCkvMTAwICsgXCIga21cIn0gXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOic1cHgnfX0+PC9DaGlwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjonMjBweCcsIHRleHRBbGlnbjonY2VudGVyJ319PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2soKX0+PHNtYWxsPkhhY2VyIHBlZGlkbzwvc21hbGw+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RpYWxvZz5cbiAgICAgIDwvZGl2PikpfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlQ2FyZDtcbiJdfQ== */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/StoreCard.js */"), __jsx(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_4___default.a, {
      "aria-labelledby": "simple-dialog-title",
      open: this.props.open,
      fullScreen: true,
      style: {
        height: "100%",
        position: "relative",
        background: '#ffcf02'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        height: '100%',
        background: 'lightgrey'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_3__["default"], {
      stores: null,
      pos: this.props.location,
      htmlId: "store-map",
      selectedStore: this.props.store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    })), __jsx("div", {
      style: {
        display: 'relative'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "small",
      "aria-label": "menu",
      onClick: () => this.props.close(),
      style: {
        position: "absolute",
        top: "10px",
        left: "15px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_9___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    })), __jsx(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_5___default.a, {
      size: "small",
      "aria-label": "menu",
      onClick: () => this.handleFavorite(),
      style: {
        position: "absolute",
        top: "10px",
        right: "15px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    })), __jsx("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '20px'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    }, __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, {
      alt: "Tienda",
      src: "/static/images/avatar/1.jpg",
      style: {
        width: '75px',
        height: '75px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }), __jsx("div", {
      style: {
        marginLeft: '20px'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx("h2", {
      style: {
        marginTop: '0',
        marginBottom: '0'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, this.props.store.name), __jsx("small", {
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, this.props.store.address), __jsx("br", {
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: this.props.store.type != null ? this.props.store.type : "Tienda",
      style: {
        marginTop: '5px',
        marginBottom: '5px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }
    }), __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7___default.a, {
      label: Math.round(Object(_components_Distance__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.store.lat, this.props.store.lng, this.props.location.lat, this.props.location.lng) * 100) / 100 + " km",
      style: {
        margin: '5px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }))), __jsx("div", {
      style: {
        margin: '20px',
        textAlign: 'center'
      },
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
      variant: "contained",
      color: "primary",
      onClick: () => this.handleClick(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, __jsx("small", {
      className: "jsx-1265835017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 96
      }
    }, "Hacer pedido"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StoreCard);

/***/ }),

/***/ "./components/WelcomeSection.js":
/*!**************************************!*\
  !*** ./components/WelcomeSection.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Storefront */ "@material-ui/icons/Storefront");
/* harmony import */ var _material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_AddressDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddressDialog */ "./components/AddressDialog.js");
var _jsxFileName = "/home/crmock/pideenlaequina/front/components/WelcomeSection.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class WellcomeSection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleAddressClickOpen", () => {
      this.addressDialogOpen(true);
    });

    _defineProperty(this, "handleAddressClose", value => {
      this.addressDialogOpen(true);
      this.setSelectedValue(value);
    });

    this.state = {
      stores: null
    };
  }

  handleClickNoStores() {
    alert("Esta funcionalidad todavía no está disponible");
  }

  render() {
    const conTiendas = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "contained",
      color: "primary",
      size: "large",
      onClick: () => this.props.openSearch(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, "Hacer pedido")));

    const sinTiendas = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, "pero te tenemos cubiert@..."), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 15
      }
    }, "Puedes hacer un pedido en cualquier tienda o establecimiento incluso si no est\xE1 listado, nosotros nos encargamos.")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 12
      }
    }, "(tambi\xE9n puedes cambiar de \xFAbicaci\xF3n ingresando una nueva direcci\xF3n)")), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {
      variant: "contained",
      color: "primary",
      onClick: () => this.handleClickNoStores(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 12
      }
    }, __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 97
      }
    }, "Hacer pedido"))));

    return __jsx("div", {
      className: "jsx-3935429005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3935429005",
      __self: this
    }, ".root.jsx-3935429005{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NybW9jay9waWRlZW5sYWVxdWluYS9mcm9udC9jb21wb25lbnRzL1dlbGNvbWVTZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREVyxBQUdnQyxrQkFDQyxtQkFDRixpQkFDRyxvQkFDRixrQkFDbkIiLCJmaWxlIjoiL2hvbWUvY3Jtb2NrL3BpZGVlbmxhZXF1aW5hL2Zyb250L2NvbXBvbmVudHMvV2VsY29tZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgU3RvcmVmcm9udEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1N0b3JlZnJvbnQnXG5pbXBvcnQgQWRkcmVzc0RpYWxvZyBmcm9tICcuLi9jb21wb25lbnRzL0FkZHJlc3NEaWFsb2cnXG5cblxuY2xhc3MgV2VsbGNvbWVTZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcylcbiAge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGU9IHtcbiAgICAgIHN0b3JlczpudWxsXG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQWRkcmVzc0NsaWNrT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLmFkZHJlc3NEaWFsb2dPcGVuKHRydWUpO1xuICB9O1xuXG4gIGhhbmRsZUFkZHJlc3NDbG9zZSA9ICh2YWx1ZSkgPT4ge1xuICAgIHRoaXMuYWRkcmVzc0RpYWxvZ09wZW4odHJ1ZSk7XG4gICAgdGhpcy5zZXRTZWxlY3RlZFZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBoYW5kbGVDbGlja05vU3RvcmVzKClcbiAge1xuICAgIGFsZXJ0KFwiRXN0YSBmdW5jaW9uYWxpZGFkIHRvZGF2w61hIG5vIGVzdMOhIGRpc3BvbmlibGVcIilcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuXG4gICAgY29uc3QgY29uVGllbmRhcyA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5vcGVuU2VhcmNoKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSGFjZXIgcGVkaWRvICBcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4gICAgY29uc3Qgc2luVGllbmRhcyA9IChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5wZXJvIHRlIHRlbmVtb3MgY3ViaWVydEAuLi48L2gzPlxuICAgICAgICA8c3Bhbj48c21hbGw+UHVlZGVzIGhhY2VyIHVuIHBlZGlkbyBlbiBjdWFscXVpZXIgdGllbmRhIG8gZXN0YWJsZWNpbWllbnRvIGluY2x1c28gc2kgbm8gZXN0w6EgbGlzdGFkbywgbm9zb3Ryb3Mgbm9zIGVuY2FyZ2Ftb3MuPC9zbWFsbD48L3NwYW4+XG4gICAgICAgIDxwPjxzbWFsbD4odGFtYmnDqW4gcHVlZGVzIGNhbWJpYXIgZGUgw7piaWNhY2nDs24gaW5ncmVzYW5kbyB1bmEgbnVldmEgZGlyZWNjacOzbik8L3NtYWxsPjwvcD5cbiAgICAgICAgPHA+PEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCk9PnRoaXMuaGFuZGxlQ2xpY2tOb1N0b3JlcygpfT48c21hbGw+SGFjZXIgcGVkaWRvPC9zbWFsbD48L0J1dHRvbj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cblxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICAucm9vdHtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6MTBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206MTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cbiAgICAgICAgICAgIDxoMT7CoUhvbGEge3RoaXMucHJvcHMubmFtZX0hPC9oMT5cbiAgICAgICAgICAgIDxBZGRyZXNzRGlhbG9nIFxuICAgICAgICAgICAgICBkZXZpY2VMb2NhdGlvbj17dGhpcy5wcm9wcy5kZXZpY2VMb2NhdGlvbn0gXG4gICAgICAgICAgICAgIHNlbGVjdGVkTG9jYXRpb249e3RoaXMucHJvcHMuc2VsZWN0ZWRMb2NhdGlvbn0gXG4gICAgICAgICAgICAgIGFkZHJlc3Nlcz17dGhpcy5wcm9wcy5hZGRyZXNzZXN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjpcImNvbHVtblwiLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCB3aWR0aDonMTAwJScsIG1hcmdpblRvcDonMTBweCd9fT5cbiAgICAgICAgICAgICAgPFN0b3JlZnJvbnRJY29uIGZvbnRTaXplPVwibGFyZ2VcIi8+XG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17e21hcmdpbkJvdHRvbTonMCcsIG1hcmdpblRvcDonNXB4J319PiZuYnNwO3t0aGlzLnByb3BzLm51bVN0b3Jlc30mbmJzcDtUaWVuZGFzPC9oMj5cbiAgICAgICAgICAgICAgPHNwYW4+IGEgIG1lbm9zIGRlIDEga208L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsodGhpcy5wcm9wcy5udW1TdG9yZXM+MD9jb25UaWVuZGFzOnNpblRpZW5kYXMpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWxsY29tZVNlY3Rpb247XG4iXX0= */\n/*@ sourceURL=/home/crmock/pideenlaequina/front/components/WelcomeSection.js */"), __jsx("div", {
      className: "jsx-3935429005" + " " + "root",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx("h1", {
      className: "jsx-3935429005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }
    }, "\xA1Hola ", this.props.name, "!"), __jsx(_components_AddressDialog__WEBPACK_IMPORTED_MODULE_4__["default"], {
      deviceLocation: this.props.deviceLocation,
      selectedLocation: this.props.selectedLocation,
      addresses: this.props.addresses,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }
    }), __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginTop: '10px'
      },
      className: "jsx-3935429005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx(_material_ui_icons_Storefront__WEBPACK_IMPORTED_MODULE_3___default.a, {
      fontSize: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }), __jsx("h2", {
      style: {
        marginBottom: '0',
        marginTop: '5px'
      },
      className: "jsx-3935429005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 15
      }
    }, "\xA0", this.props.numStores, "\xA0Tiendas"), __jsx("span", {
      className: "jsx-3935429005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }, " a  menos de 1 km")), this.props.numStores > 0 ? conTiendas : sinTiendas));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (WellcomeSection);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
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

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
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

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
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
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
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
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

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
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
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
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
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

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
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
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
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

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
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

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
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

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
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


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

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

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

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
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
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
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
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
    groups
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


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
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

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
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

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_Ready__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ready */ "./components/Ready.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "@auth0/auth0-spa-js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/crmock/pideenlaequina/front/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "deviceLocation", async () => {
      await navigator.geolocation.getCurrentPosition(position => this.locationFromBrowser(position), err => this.locationFromIp());
    });

    _defineProperty(this, "initializeAuth0", async () => {
      const config = {
        domain: 'acacerca.auth0.com',
        //process.env.AUTH0_DOMAIN,
        client_id: 'd8Pv88MjaYWNSUKUHnO9JcudrUPZ6THl',
        //process.env.AUTH0_CLIENT_ID,
        redirect_uri: window.location.origin,
        cacheLocation: 'localstorage'
      };
      const auth0Client = await _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_5___default()(config);
      const isAuthenticated = await auth0Client.isAuthenticated();
      const user = isAuthenticated ? await auth0Client.getUser() : null;
      this.setState({
        authClient: auth0Client,
        isAuthenticated,
        user
      });
    });

    this.state = {
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
  }

  componentDidMount() {
    this.deviceLocation();
    this.initializeAuth0();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.authClient !== null && this.state.deviceLocation !== null && this.state.selectedLocation === null) {
      let location = null;

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

  updateSelectedLocation(newLat, newLng, address, type) {
    let location = {
      lat: parseFloat(newLat),
      lng: parseFloat(newLng),
      address: address,
      type: type
    };
    this.setState({
      selectedLocation: location
    }); //localStorage.setItem('_selectedLocationL', location)  
  }

  updateDeviceLocation(newLat, newLng, address) {
    let location = {
      lat: parseFloat(newLat),
      lng: parseFloat(newLng),
      address: address,
      type: "device"
    };
    this.setState({
      deviceLocation: location
    }); //localStorage.setItem('_deviceLocation', location)  
  }

  async locationFromIp() {
    let url = '/api/locationFromIp';
    let res = await fetch(url).then(response => response.json());
    let address = await this.addressFromLocation(lat, lng);
    this.updateDeviceLocation(res.location.lat, res.location.lng, address);
  }

  async locationFromBrowser(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let address = await this.addressFromLocation(lat, lng);
    this.updateDeviceLocation(lat, lng, address);
  }

  async addressFromLocation(lat, lng) {
    let url = '/api/addressFromLocation?lat=' + lat + '&lng=' + lng;
    let res = await fetch(url).then(response => response.json());
    return res.address;
  }

  async featuredStores(lat, lng) {
    let url = '/api/featuredStores?lat=' + lat + '&lng=' + lng;
    let res = await fetch(url).then(response => response.json());
    this.setState({
      featuredStores: res.stores
    }); //localStorage.setItem('_featuredStores', JSON.stringify(res.stores))  
  }

  async stores(lat, lng) {
    let url = '/api/stores?lat=' + lat + '&lng=' + lng;
    let res = await fetch(url).then(response => response.json());
    this.setState({
      stores: res.stores
    }); //localStorage.setItem('_stores', JSON.stringify(res.stores))  
  }

  render() {
    const {
      deviceLocation,
      selectedLocation,
      featuredStores,
      stores,
      orders,
      authClient,
      isAuthenticated,
      user,
      isReady
    } = this.state;
    const values = {
      deviceLocation,
      selectedLocation,
      featuredStores,
      stores,
      orders,
      isAuthenticated,
      user,
      isReady,
      loginWithRedirect: (...p) => authClient.loginWithRedirect(...p),
      getTokenSilently: (...p) => authClient.getTokenSilently(...p),
      getIdTokenClaims: (...p) => authClient.getIdTokenClaims(...p),
      logout: (...p) => authClient.logout(...p)
    };
    let google_url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBt0ZCE1kAklBJiBnCYGX6kl0tglLcKlLI';
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }
    }, __jsx("script", {
      type: "text/javascript",
      src: google_url,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 11
      }
    })), !this.state.isReady ? __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 12
      }
    }) : __jsx(_components_Ready__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, values, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 12
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/crmock/pideenlaequina/front/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@auth0/auth0-spa-js":
/*!**************************************!*\
  !*** external "@auth0/auth0-spa-js" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/auth0-spa-js");

/***/ }),

/***/ "@brainhubeu/react-carousel":
/*!*********************************************!*\
  !*** external "@brainhubeu/react-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@brainhubeu/react-carousel");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Badge":
/*!******************************************!*\
  !*** external "@material-ui/core/Badge" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Badge");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/*!*******************************************!*\
  !*** external "@material-ui/core/Drawer" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "@material-ui/core/ListItemIcon":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemIcon" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/Business":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Business" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "@material-ui/icons/CreditCard":
/*!************************************************!*\
  !*** external "@material-ui/icons/CreditCard" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/CreditCard");

/***/ }),

/***/ "@material-ui/icons/DirectionsBikeSharp":
/*!*********************************************************!*\
  !*** external "@material-ui/icons/DirectionsBikeSharp" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DirectionsBikeSharp");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/ExitToApp":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ExitToApp" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExitToApp");

/***/ }),

/***/ "@material-ui/icons/Favorite":
/*!**********************************************!*\
  !*** external "@material-ui/icons/Favorite" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "@material-ui/icons/History":
/*!*********************************************!*\
  !*** external "@material-ui/icons/History" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/History");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/Map":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Map");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/MyLocation":
/*!************************************************!*\
  !*** external "@material-ui/icons/MyLocation" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MyLocation");

/***/ }),

/***/ "@material-ui/icons/Star":
/*!******************************************!*\
  !*** external "@material-ui/icons/Star" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Star");

/***/ }),

/***/ "@material-ui/icons/Storefront":
/*!************************************************!*\
  !*** external "@material-ui/icons/Storefront" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Storefront");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map