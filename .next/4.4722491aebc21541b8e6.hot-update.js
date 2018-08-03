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
        className: "jsx-2214759458" + " " + "Index Page"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2214759458",
        css: ".Index.jsx-2214759458{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.Slide.jsx-2214759458{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;min-height:100vh;width:0;top:0;left:0;background:rgba(134,92,214,1);background:-moz-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-webkit-gradient(left top,right bottom,color-stop(0%,rgba(134,92,214,1)),color-stop(100%,rgba(62,136,159,1)));background:-webkit-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-o-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:-ms-linear-gradient(-45deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);background:linear-gradient(135deg,rgba(134,92,214,1) 0%,rgba(62,136,159,1) 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#865cd6',endColorstr='#3e889f',GradientType=1 );}.Slide.Open.jsx-2214759458{width:50%;}img.Profile.jsx-2214759458{height:200px;width:200px;border-radius:50%;}.About.jsx-2214759458{-webkit-transition:all 0.6s ease;transition:all 0.6s ease;position:relative;width:50%;top:0;background:white;opacity:0;padding:14px;}.About.Open.jsx-2214759458{opacity:1;}.Intro.jsx-2214759458{font-size:1.8rem;margin-top:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDSyxBQUdvQixBQUlFLEFBcUJGLEFBSUcsQUFNZSxBQVViLEFBSUksVUF2QnBCLEFBb0JFLEdBaEJXLElBb0JNLFFBbkJBLFFBb0JqQixVQW5CRixlQUlzQixnQkFuQ3pCLEFBSXlCLEVBZ0NSLFVBQ0osTUFDVyxpQkFDUCxVQUNHLGFBQ2pCLG9CQXBDdUIsbUdBQ0osNkZBQ1UsMERBQ1Asa0JBQ0QsaUJBQ1QsUUFDRixNQUNDLE9BQzBCLDhCQUM2RCxzRkFDc0MseUhBQ25DLHlGQUNMLG9GQUNDLHFGQUNKLGlGQUMyQiw0T0FDeEgiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3NhbXVlbC9EZXNrdG9wL1Byb2plY3RzL3NyYy9zYW1oZXV0bWFrZXIyMDE4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgVHlwZSBmcm9tICcuLi9jb21wb25lbnRzL1R5cGUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNob3dTbGlkZTogZmFsc2UsXG5cdFx0XHRzaG93QWJvdXQ6IGZhbHNlXG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7c2hvd1NsaWRlOiB0cnVlfSlcblx0XHR9LCA1MDApO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtzaG93QWJvdXQ6IHRydWV9KVxuXHRcdH0sIDExMDApO1xuXHR9XG5cdHJlbmRlckludHJvKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiSW50cm9cIj5cblx0XHRcdFx0PFR5cGUgdHlwZT1cIkhpLCBJJ20gU2FtLiBJIHdyaXRlIHNvZnR3YXJlIGFuZCBkbyBvdGhlciBjb29sIHN0dWZmLiBJIGxpdmUgaW4gU2VhdHRsZSBhbmQgd29yayBhdCBhIHN0YXJ0dXAuXCIgdHlwZVNwZWVkPVwiNzVcIi8+XHRcdFx0XHRcblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMYXlvdXQ+XHRcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJJbmRleCBQYWdlXCI+XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LkluZGV4IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuU2xpZGUge1xuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHQgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2U7XG5cdFx0XHRcdCAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHQgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuXHRcdFx0XHQgICAgICAgIHdpZHRoOiAwO1xuXHRcdFx0XHQgICAgICAgIHRvcDogMDtcblx0XHRcdFx0ICAgICAgICBsZWZ0OiAwO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM0LCA5MiwgMjE0LCAxKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSwgcmdiYSgxMzQsIDkyLCAyMTQsIDEpKSwgY29sb3Itc3RvcCgxMDAlLCByZ2JhKDYyLCAxMzYsIDE1OSwgMSkpKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMTM0LCA5MiwgMjE0LCAxKSAwJSwgcmdiYSg2MiwgMTM2LCAxNTksIDEpIDEwMCUpO1xuXHRcdFx0XHQgICAgICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQoLTQ1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDEzNCwgOTIsIDIxNCwgMSkgMCUsIHJnYmEoNjIsIDEzNiwgMTU5LCAxKSAxMDAlKTtcblx0XHRcdFx0ICAgICAgICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzg2NWNkNicsIGVuZENvbG9yc3RyPScjM2U4ODlmJywgR3JhZGllbnRUeXBlPTEgKTtcblx0XHRcdFx0ICAgIH1cblxuXHRcdFx0XHQgICAgLlNsaWRlLk9wZW4ge1xuXHRcdFx0XHQgICAgXHR3aWR0aDogNTAlO1xuXHRcdFx0XHQgICAgfVxuXG5cdFx0XHRcdCAgICBpbWcuUHJvZmlsZSB7XG5cdFx0XHRcdCAgICBcdGhlaWdodDogMjAwcHg7XG5cdFx0XHRcdCAgICBcdHdpZHRoOiAyMDBweDtcblx0XHRcdFx0ICAgIFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHQgICAgfVxuXG5cdFx0XHQgICAgIC5BYm91dCB7XG5cdFx0XHRcdCAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZTtcblx0XHRcdFx0ICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdCAgICAgICAgd2lkdGg6IDUwJTtcblx0XHRcdFx0ICAgICAgICB0b3A6IDA7XG5cdFx0XHRcdCAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdCAgICAgICAgb3BhY2l0eTogMDtcblx0XHRcdFx0ICAgICAgICBwYWRkaW5nOiAxNHB4O1xuXHRcdFx0XHQgICAgfVxuXG5cdFx0XHRcdCAgICAuQWJvdXQuT3BlbiB7XG5cdFx0ICAgICAgICAgICAgb3BhY2l0eTogMTtcblx0XHQgICAgICAgIH1cblxuXHRcdCAgICAgICAgLkludHJvIHtcblx0XHQgICAgICAgIFx0Zm9udC1zaXplOiAxLjhyZW07XG5cdFx0ICAgICAgICBcdG1hcmdpbi10b3A6IDVyZW07XG5cdFx0ICAgICAgICB9XG5cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgU2xpZGUgJHt0aGlzLnN0YXRlLnNob3dTbGlkZSA/ICdPcGVuJyA6ICcnfWB9PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvc3RhdGljL3Byb2ZpbGUucG5nXCIgY2xhc3NOYW1lPVwiUHJvZmlsZVwiIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BBYm91dCAke3RoaXMuc3RhdGUuc2hvd0Fib3V0ID8gJ09wZW4nIDogJyd9YH0+XG5cdFx0XHRcdFx0XHR7KCgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5zaG93QWJvdXQgJiYgdGhpcy5zdGF0ZS5zaG93U2xpZGUpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJJbnRybygpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pKCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MYXlvdXQ+XG5cdFx0KTtcblx0fVxufVxuXG4iXX0= */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-2214759458" + " " + "Slide ".concat(this.state.showSlide ? 'Open' : '')
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: "/static/profile.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        className: "jsx-2214759458" + " " + "Profile"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-2214759458" + " " + "About ".concat(this.state.showAbout ? 'Open' : '')
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
//# sourceMappingURL=4.4722491aebc21541b8e6.hot-update.js.map