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
        className: "jsx-2100326319" + " " + "Index Page"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2100326319",
        css: ".Index.jsx-2100326319{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Slide.jsx-2100326319{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;min-height:100vh;width:0;top:0;left:0;background:rgba(134,92,214,1);background:-moz-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-webkit-gradient(left top,right bottom,color-stop(0%,rgba(134,92,214,1)),color-stop(100%,rgba(62,136,159,1)));background:-webkit-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-o-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-ms-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:linear-gradient(135deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );}.Slide.Open.jsx-2100326319{width:50%;}img.Profile.jsx-2100326319{height:300;width:300;border-radius:50%;}.About.jsx-2100326319{-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;width:50%;top:0;background:white;opacity:0;padding:14px;}.About.Open.jsx-2100326319{opacity:1;}.Intro.jsx-2100326319{font-size:1.8rem;margin-top:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDSyxBQUdvQixBQUlLLEFBc0JMLEFBSUMsQUFNaUIsQUFVYixBQUlJLFVBdkJwQixBQW9CRSxDQWhCUyxLQTFCRSxDQThDTSxJQW5CQSxZQW9CakIsTUFuQkYsbUJBSXNCLGdCQXBDekIsRUFxQ2lCLFVBQ0osSUFqQ1ksRUFrQ0QsaUJBQ1AsVUFDRyxhQUNqQixvQ0FwQ3VCLG1HQUNKLDZGQUNVLDBEQUNQLGtCQUNELGlCQUNULFFBQ0YsTUFDQyxPQUMwQiw4QkFDNkQsc0ZBQ3NDLHlIQUNuQyx5RkFDTCxvRkFDQyxxRkFDSixpRkFDMkIsNE9BQ3hIIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zYW11ZWwvRGVza3RvcC9Qcm9qZWN0cy9zcmMvc2FtaGV1dG1ha2VyMjAxOCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IFR5cGUgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzaG93U2xpZGU6IGZhbHNlLFxuXHRcdFx0c2hvd0Fib3V0OiBmYWxzZVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3Nob3dTbGlkZTogdHJ1ZX0pXG5cdFx0fSwgNTAwKTtcblxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd0Fib3V0OiB0cnVlfSlcblx0XHR9LCAxMTAwKTtcblx0fVxuXHRyZW5kZXJJbnRybygpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkludHJvXCI+XG5cdFx0XHRcdDxUeXBlIHR5cGU9XCJIaSwgSSdtIFNhbS4gSSB3cml0ZSBzb2Z0d2FyZSBhbmQgZG8gb3RoZXIgY29vbCBzdHVmZi4gSSBsaXZlIGluIFNlYXR0bGUgYW5kIHdvcmsgYXQgYSBzdGFydHVwLlwiIHR5cGVTcGVlZD1cIjc1XCIvPlx0XHRcdFx0XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0Plx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW5kZXggUGFnZVwiPlxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5JbmRleCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LlNsaWRlIHtcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG5cdFx0XHRcdCAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHQgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHQgICAgICAgIHdpZHRoOiAwO1xuXHRcdFx0XHQgICAgICAgIHRvcDogMDtcblx0XHRcdFx0ICAgICAgICBsZWZ0OiAwO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM0LCA5MiwgMjE0LCAxKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMzQsIDkyLCAyMTQsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkpKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg2NWNkNicsIGVuZENvbG9yc3RyPScjM2U4ODlmJywgR3JhZGllbnRUeXBlPTEgKTtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHQgICAgLlNsaWRlLk9wZW4ge1xuXHRcdFx0XHQgICAgXHR3aWR0aDogNTAlO1xuXHRcdFx0XHQgICAgfVxuXG5cdFx0XHRcdCAgICBpbWcuUHJvZmlsZSB7XG5cdFx0XHRcdCAgICBcdGhlaWdodDogMzAwO1xuXHRcdFx0XHQgICAgXHR3aWR0aDogMzAwO1xuXHRcdFx0XHQgICAgXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdCAgICAgLkFib3V0IHtcblx0XHRcdFx0ICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlO1xuXHRcdFx0XHQgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0ICAgICAgICB3aWR0aDogNTAlO1xuXHRcdFx0XHQgICAgICAgIHRvcDogMDtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdFx0ICAgICAgICBvcGFjaXR5OiAwO1xuXHRcdFx0XHQgICAgICAgIHBhZGRpbmc6IDE0cHg7XG5cdFx0XHRcdCAgICB9XG5cblx0XHRcdFx0ICAgIC5BYm91dC5PcGVuIHtcblx0XHQgICAgICAgICAgICBvcGFjaXR5OiAxO1xuXHRcdCAgICAgICAgfVxuXG5cdFx0ICAgICAgICAuSW50cm8ge1xuXHRcdCAgICAgICAgXHRmb250LXNpemU6IDEuOHJlbTtcblx0XHQgICAgICAgIFx0bWFyZ2luLXRvcDogNXJlbTtcblx0XHQgICAgICAgIH1cblxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BTbGlkZSAke3RoaXMuc3RhdGUuc2hvd1NsaWRlID8gJ09wZW4nIDogJyd9YH0+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cIi9zdGF0aWMvbWUucG5nXCIgY2xhc3NOYW1lPVwiUHJvZmlsZVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BBYm91dCAke3RoaXMuc3RhdGUuc2hvd0Fib3V0ID8gJ09wZW4nIDogJyd9YH0+XG5cdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5zaG93QWJvdXQgJiYgdGhpcy5zdGF0ZS5zaG93U2xpZGUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJJbnRybygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2100326319" + " " + "Slide ".concat(this.state.showSlide ? 'Open' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/me.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-2100326319" + " " + "Profile"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-2100326319" + " " + "About ".concat(this.state.showAbout ? 'Open' : '')
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
//# sourceMappingURL=4.a8d6a45f3a37dc79f2bd.hot-update.js.map