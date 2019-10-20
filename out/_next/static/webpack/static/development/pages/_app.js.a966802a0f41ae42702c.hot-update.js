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
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/components/Menu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SectionLink = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(function (_ref) {
  var router = _ref.router,
      href = _ref.href,
      children = _ref.children,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("a", {
    className: "no-underline block font-medium hover:text-gray-900 p-1 " + (selected || router.pathname === href ? "text-black" : "text-gray-800") + " " + className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
    className: "text-sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, children, " - ", router.pathname === href);
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref3) {
  var className = _ref3.className;
  return __jsx("div", {
    className: className,
    style: {
      flexBasis: 320,
      height: "calc(100vh - 4rem)",
      top: "4rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("input", {
    className: "rounded border px-3 py-2 w-full",
    type: "text",
    placeholder: "Search...",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "overflow-y-scroll h-full border-t p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(SectionLink, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Getting Started"), __jsx(SectionLink, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Layout"), __jsx(SectionLink, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Content"), __jsx(SectionLink, {
    href: "/",
    selected: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Components"), __jsx("ul", {
    className: "list-reset",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/alerts",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Alerts")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/badge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Badge")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Breadcrumb")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Buttons")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/button group",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Button group")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Card")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/carousel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Carousel")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Collapse")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/dropdowns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Dropdowns")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/forms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Forms")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/inputGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Input group")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/jumbotron",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Jumbotron")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/listGroup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "List group")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Modal")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/navs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Navs")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Navbar")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/pagination",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Pagination")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/popovers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Popovers")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/progress",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Progress")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/scrollspy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Scrollspy")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx(SubsectionLink, {
    href: "/tooltips",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Tooltips")))));
});

/***/ })

})
//# sourceMappingURL=_app.js.a966802a0f41ae42702c.hot-update.js.map