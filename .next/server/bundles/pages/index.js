module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/samuel/Desktop/Projects/src/samheutmaker2018/components/Layout.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


var black = '#444452';

var Layout =
/*#__PURE__*/
function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["73760297", [black]]]) + " " + "Layout"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "/static/index.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a.dynamic([["73760297", [black]]])
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "73760297",
        css: ".Layout{position:absolute;min-height:100vh;width:100%;}.Page{position:relative;width:100%;min-height:100vh;color:".concat(black, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNNLEFBRzBCLEFBTUEsa0JBTEQsQUFNTCxXQUNNLE1BTlAsV0FDWixBQU1xQyxtQ0FDckMiLCJmaWxlIjoiY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbXVlbC9EZXNrdG9wL1Byb2plY3RzL3NyYy9zYW1oZXV0bWFrZXIyMDE4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgYmxhY2sgPSAnIzQ0NDQ1Mic7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdCAgPGRpdiBjbGFzc05hbWU9XCJMYXlvdXRcIj5cblx0XHQgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiL3N0YXRpYy9pbmRleC5jc3NcIiAvPlxuXHRcdCAgPHN0eWxlIGpzeCBnbG9iYWw+XG5cdFx0ICBcdHtgXG5cdFx0ICBcdFx0LkxheW91dCB7XG5cdFx0ICBcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgXHRcdFx0XHRtaW4taGVpZ2h0OiAxMDB2aDtcblx0ICBcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdCAgXHRcdH1cblxuXHRcdCAgXHRcdC5QYWdlIHtcblx0XHQgIFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ICAgIHdpZHRoOiAxMDAlO1xuXHRcdFx0XHQgICAgbWluLWhlaWdodDogMTAwdmg7XG5cdFx0XHRcdCAgICBjb2xvcjogJHtibGFja307XG5cdFx0ICBcdFx0fVxuXHRcdCAgXHRgfVxuXHRcdCAgPC9zdHlsZT5cblx0XHQgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0ICA8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=components/Layout.js */"),
        dynamic: [black]
      }), this.props.children);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Type; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/samuel/Desktop/Projects/src/samheutmaker2018/components/Type.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Type =
/*#__PURE__*/
function (_Component) {
  _inherits(Type, _Component);

  function Type(props) {
    var _this;

    _classCallCheck(this, Type);

    _this = _possibleConstructorReturn(this, (Type.__proto__ || Object.getPrototypeOf(Type)).call(this, props));
    _this.state = {
      typed: '',
      toType: _this.props.type.split(''),
      typeSpeed: props.typeSpeed || 300,
      interval: null,
      cursor: 0
    };
    return _this;
  }

  _createClass(Type, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startTyping();
      this.startCursor();
    }
  }, {
    key: "startTyping",
    value: function startTyping() {
      var _this2 = this;

      var interval = setInterval(function () {
        var typed = _this2.state.typed;
        var toType = _this2.state.toType;
        typed = typed + toType.splice(0, 1)[0];
        if (!toType.length) clearInterval(_this2.state.interval);

        _this2.setState({
          typed: typed,
          toType: toType,
          interval: toType.length ? _this2.state.interval : null
        });
      }, this.state.typeSpeed);
      this.setState({
        interval: interval
      });
    }
  }, {
    key: "startCursor",
    value: function startCursor() {
      var _this3 = this;

      setInterval(function () {
        _this3.setState({
          cursor: _this3.state.cursor + 1
        });
      }, 500);
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      if (this.state.cursor % 2 == 0) {
        return {
          paddingRight: '5px',
          borderRight: '1px solid black'
        };
      }
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state.cursor);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "Type",
        style: this.getStyle(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, this.state.typed);
    }
  }]);

  return Type;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);


Type.propTypes = {};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Type__ = __webpack_require__("./components/Type.js");
var _jsxFileName = "/Users/samuel/Desktop/Projects/src/samheutmaker2018/pages/index.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    _this.state = {
      showSlide: false,
      showAbout: false
    };
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          showSlide: true
        });
      }, 500);
      setTimeout(function () {
        _this2.setState({
          showAbout: true
        });
      }, 1100);
    }
  }, {
    key: "renderIntro",
    value: function renderIntro() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        className: "Intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Type__["a" /* default */], {
        type: "Hi, I'm Sam. I write software and do other cool stuff. I live in Seattle and work at a startup.",
        typeSpeed: "75",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-618018194" + " " + "Index Page"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "618018194",
        css: ".Index.jsx-618018194{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Slide.jsx-618018194{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;min-height:100vh;width:0;top:0;left:0;background:rgba(134,92,214,1);background:-moz-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-webkit-gradient(left top,right bottom,color-stop(0%,rgba(134,92,214,1)),color-stop(100%,rgba(62,136,159,1)));background:-webkit-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-o-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-ms-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:linear-gradient(135deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );}.Slide.Open.jsx-618018194{width:50%;}img.Profile.jsx-618018194{height:250px;width:250px;border-radius:50%;}.About.jsx-618018194{-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;width:50%;top:0;background:white;opacity:0;padding:14px;}.About.Open.jsx-618018194{opacity:1;}.Intro.jsx-618018194{font-size:1.8rem;margin-top:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDSyxBQUdvQixBQUlLLEFBc0JMLEFBSUcsQUFNZSxBQVViLEFBSUksVUF2QnBCLEFBb0JFLEdBaEJXLEdBMUJBLENBOENNLFFBbkJBLFFBb0JqQixVQW5CRixlQUlzQixnQkFwQ3pCLEVBcUNpQixVQUNKLElBakNZLEVBa0NELGlCQUNQLFVBQ0csYUFDakIsb0NBcEN1QixtR0FDSiw2RkFDVSwwREFDUCxrQkFDRCxpQkFDVCxRQUNGLE1BQ0MsT0FDMEIsOEJBQzZELHNGQUNzQyx5SEFDbkMseUZBQ0wsb0ZBQ0MscUZBQ0osaUZBQzJCLDRPQUN4SCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FtdWVsL0Rlc2t0b3AvUHJvamVjdHMvc3JjL3NhbWhldXRtYWtlcjIwMTgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUeXBlIGZyb20gJy4uL2NvbXBvbmVudHMvVHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd1NsaWRlOiBmYWxzZSxcblx0XHRcdHNob3dBYm91dDogZmFsc2Vcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93U2xpZGU6IHRydWV9KVxuXHRcdH0sIDUwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dBYm91dDogdHJ1ZX0pXG5cdFx0fSwgMTEwMCk7XG5cdH1cblx0cmVuZGVySW50cm8oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnRyb1wiPlxuXHRcdFx0XHQ8VHlwZSB0eXBlPVwiSGksIEknbSBTYW0uIEkgd3JpdGUgc29mdHdhcmUgYW5kIGRvIG90aGVyIGNvb2wgc3R1ZmYuIEkgbGl2ZSBpbiBTZWF0dGxlIGFuZCB3b3JrIGF0IGEgc3RhcnR1cC5cIiB0eXBlU3BlZWQ9XCI3NVwiLz5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkluZGV4IFBhZ2VcIj5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuSW5kZXgge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5TbGlkZSB7XG5cdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuXHRcdFx0XHQgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcblx0XHRcdFx0ICAgICAgICB3aWR0aDogMDtcblx0XHRcdFx0ICAgICAgICB0b3A6IDA7XG5cdFx0XHRcdCAgICAgICAgbGVmdDogMDtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEzNCwgOTIsIDIxNCwgMSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxlZnQgdG9wLCByaWdodCBib3R0b20sIGNvbG9yLXN0b3AoMCUsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpKSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMzQsIDkyLCAyMTQsIDEpIDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkgMTAwJSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxMzQsIDkyLCAyMTQsIDEpIDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkgMTAwJSk7XG5cdFx0XHRcdCAgICAgICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM4NjVjZDYnLCBlbmRDb2xvcnN0cj0nIzNlODg5ZicsIEdyYWRpZW50VHlwZT0xICk7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0ICAgIC5TbGlkZS5PcGVuIHtcblx0XHRcdFx0ICAgIFx0d2lkdGg6IDUwJTtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHQgICAgaW1nLlByb2ZpbGUge1xuXHRcdFx0XHQgICAgXHRoZWlnaHQ6IDI1MHB4O1xuXHRcdFx0XHQgICAgXHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdCAgICBcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0ICAgICAuQWJvdXQge1xuXHRcdFx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG5cdFx0XHRcdCAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHQgICAgICAgIHdpZHRoOiA1MCU7XG5cdFx0XHRcdCAgICAgICAgdG9wOiAwO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHQgICAgICAgIG9wYWNpdHk6IDA7XG5cdFx0XHRcdCAgICAgICAgcGFkZGluZzogMTRweDtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHQgICAgLkFib3V0Lk9wZW4ge1xuXHRcdCAgICAgICAgICAgIG9wYWNpdHk6IDE7XG5cdFx0ICAgICAgICB9XG5cblx0XHQgICAgICAgIC5JbnRybyB7XG5cdFx0ICAgICAgICBcdGZvbnQtc2l6ZTogMS44cmVtO1xuXHRcdCAgICAgICAgXHRtYXJnaW4tdG9wOiA1cmVtO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YFNsaWRlICR7dGhpcy5zdGF0ZS5zaG93U2xpZGUgPyAnT3BlbicgOiAnJ31gfT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL3N0YXRpYy9tZS5wbmdcIiBjbGFzc05hbWU9XCJQcm9maWxlXCIgLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YEFib3V0ICR7dGhpcy5zdGF0ZS5zaG93QWJvdXQgPyAnT3BlbicgOiAnJ31gfT5cblx0XHRcdFx0XHRcdHsoKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLnNob3dBYm91dCAmJiB0aGlzLnN0YXRlLnNob3dTbGlkZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLnJlbmRlckludHJvKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSkoKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbiJdfQ== */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-618018194" + " " + "Slide ".concat(this.state.showSlide ? 'Open' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/me.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-618018194" + " " + "Profile"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-618018194" + " " + "About ".concat(this.state.showAbout ? 'Open' : '')
      }, function () {
        if (_this3.state.showAbout && _this3.state.showSlide) {
          return _this3.renderIntro();
        }
      }())));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map