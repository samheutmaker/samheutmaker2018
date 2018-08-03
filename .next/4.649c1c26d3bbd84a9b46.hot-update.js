webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
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
        className: "jsx-1490427789" + " " + "Index Page"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1490427789",
        css: ".Index.jsx-1490427789{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Slide.jsx-1490427789{overflow:hiddenl display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;min-height:100vh;width:0;top:0;left:0;background:rgba(134,92,214,1);background:-moz-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-webkit-gradient(left top,right bottom,color-stop(0%,rgba(134,92,214,1)),color-stop(100%,rgba(62,136,159,1)));background:-webkit-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-o-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-ms-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:linear-gradient(135deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );}.Slide.Open.jsx-1490427789{width:50%;}img.Profile.jsx-1490427789{height:200px;width:200px;border-radius:50%;}.About.jsx-1490427789{-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;width:50%;top:0;background:white;opacity:0;padding:14px;}.About.Open.jsx-1490427789{opacity:1;}.Intro.jsx-1490427789{font-size:1.8rem;margin-top:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDSyxBQUdvQixBQUtFLEFBcUJGLEFBSUcsQUFNZSxBQVViLEFBSUksVUF2QnBCLEFBb0JFLEdBaEJXLElBb0JNLFFBbkJBLEtBMUJHLEdBOENwQixVQW5CRixlQUlzQixnQkFwQ3pCLEVBcUNpQixVQUNKLE1BQ1csZ0JBakNFLENBa0NULFVBQ0csYUFDakIsMkVBbkNtQiw2RkFDVSwwREFDUCxrQkFDRCxpQkFDVCxRQUNGLE1BQ0MsT0FDMEIsOEJBQzZELHNGQUNzQyx5SEFDbkMseUZBQ0wsb0ZBQ0MscUZBQ0osaUZBQzJCLDRPQUN4SCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvc2FtdWVsL0Rlc2t0b3AvUHJvamVjdHMvc3JjL3NhbWhldXRtYWtlcjIwMTgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBUeXBlIGZyb20gJy4uL2NvbXBvbmVudHMvVHlwZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2hvd1NsaWRlOiBmYWxzZSxcblx0XHRcdHNob3dBYm91dDogZmFsc2Vcblx0XHR9XG5cdH1cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93U2xpZGU6IHRydWV9KVxuXHRcdH0sIDUwMCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dBYm91dDogdHJ1ZX0pXG5cdFx0fSwgMTEwMCk7XG5cdH1cblx0cmVuZGVySW50cm8oKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbnRyb1wiPlxuXHRcdFx0XHQ8VHlwZSB0eXBlPVwiSGksIEknbSBTYW0uIEkgd3JpdGUgc29mdHdhcmUgYW5kIGRvIG90aGVyIGNvb2wgc3R1ZmYuIEkgbGl2ZSBpbiBTZWF0dGxlIGFuZCB3b3JrIGF0IGEgc3RhcnR1cC5cIiB0eXBlU3BlZWQ9XCI3NVwiLz5cdFx0XHRcdFxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkluZGV4IFBhZ2VcIj5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuSW5kZXgge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5TbGlkZSB7XG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW5sXG5cdFx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcblx0XHRcdFx0ICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdCAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG5cdFx0XHRcdCAgICAgICAgd2lkdGg6IDA7XG5cdFx0XHRcdCAgICAgICAgdG9wOiAwO1xuXHRcdFx0XHQgICAgICAgIGxlZnQ6IDA7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxMzQsIDkyLCAyMTQsIDEpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMzQsIDkyLCAyMTQsIDEpIDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkgMTAwJSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsZWZ0IHRvcCwgcmlnaHQgYm90dG9tLCBjb2xvci1zdG9wKDAlLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSkpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMzQsIDkyLCAyMTQsIDEpIDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkgMTAwJSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KC00NWRlZywgcmdiYSgxMzQsIDkyLCAyMTQsIDEpIDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkgMTAwJSk7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjODY1Y2Q2JywgZW5kQ29sb3JzdHI9JyMzZTg4OWYnLCBHcmFkaWVudFR5cGU9MSApO1xuXHRcdFx0XHQgICAgfVxuXG5cdFx0XHRcdCAgICAuU2xpZGUuT3BlbiB7XG5cdFx0XHRcdCAgICBcdHdpZHRoOiA1MCU7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0ICAgIGltZy5Qcm9maWxlIHtcblx0XHRcdFx0ICAgIFx0aGVpZ2h0OiAyMDBweDtcblx0XHRcdFx0ICAgIFx0d2lkdGg6IDIwMHB4O1xuXHRcdFx0XHQgICAgXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAgLkFib3V0IHtcblx0XHRcdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuXHRcdFx0XHQgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ICAgICAgICB3aWR0aDogNTAlO1xuXHRcdFx0XHQgICAgICAgIHRvcDogMDtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0ICAgICAgICBvcGFjaXR5OiAwO1xuXHRcdFx0XHQgICAgICAgIHBhZGRpbmc6IDE0cHg7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0ICAgIC5BYm91dC5PcGVuIHtcblx0XHQgICAgICAgICAgICBvcGFjaXR5OiAxO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICAuSW50cm8ge1xuXHRcdCAgICAgICAgXHRmb250LXNpemU6IDEuOHJlbTtcblx0XHQgICAgICAgIFx0bWFyZ2luLXRvcDogNXJlbTtcblx0XHQgICAgICAgIH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BTbGlkZSAke3RoaXMuc3RhdGUuc2hvd1NsaWRlID8gJ09wZW4nIDogJyd9YH0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvbWUucG5nXCIgY2xhc3NOYW1lPVwiUHJvZmlsZVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BBYm91dCAke3RoaXMuc3RhdGUuc2hvd0Fib3V0ID8gJ09wZW4nIDogJyd9YH0+XG5cdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5zaG93QWJvdXQgJiYgdGhpcy5zdGF0ZS5zaG93U2xpZGUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJJbnRybygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-1490427789" + " " + "Slide ".concat(this.state.showSlide ? 'Open' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/me.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-1490427789" + " " + "Profile"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-1490427789" + " " + "About ".concat(this.state.showAbout ? 'Open' : '')
      }, function () {
        if (_this3.state.showAbout && _this3.state.showSlide) {
          return _this3.renderIntro();
        }
      }())));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.649c1c26d3bbd84a9b46.hot-update.js.map