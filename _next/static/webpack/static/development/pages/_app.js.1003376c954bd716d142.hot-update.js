webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var assetPrefix = next_config__WEBPACK_IMPORTED_MODULE_3___default()().publicRuntimeConfig.assetPrefix;
var SectionLink = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
  var router = _ref.router,
      href = _ref.href,
      children = _ref.children,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: assetPrefix + href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    className: "no-underline block font-medium hover:text-gray-900 p-1 " + (selected || router.pathname === href ? "text-black" : "text-gray-800") + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children));
});
var SubsectionLink = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref2) {
  var router = _ref2.router,
      href = _ref2.href,
      children = _ref2.children,
      _ref2$selected = _ref2.selected,
      selected = _ref2$selected === void 0 ? false : _ref2$selected;
  return __jsx(SectionLink, {
    href: href,
    selected: selected,
    className: "text-sm ".concat(router.pathname === href ? "font-bold" : "font-normal"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, children);
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var className = _ref3.className;
  return __jsx("div", {
    className: className,
    style: {
      height: "calc(100vh - 4rem)",
      top: "4rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  },  false && false, __jsx("div", {
    className: "overflow-y-scroll h-full border-t p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  },  false && false,  false && false,  false && false, __jsx(SectionLink, {
    href: "/",
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Components"), __jsx("ul", {
    className: "list-reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/alerts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Alerts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/badge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Badge")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Breadcrumb")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Buttons")),  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false,  false && false)));
});

/***/ })

})
//# sourceMappingURL=_app.js.1003376c954bd716d142.hot-update.js.map