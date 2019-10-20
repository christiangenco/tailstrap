webpackHotUpdate("static/development/pages/alerts.js",{

/***/ "./components/Elements.js":
/*!********************************!*\
  !*** ./components/Elements.js ***!
  \********************************/
/*! exports provided: H1, Subheading, H2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheading", function() { return Subheading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/components/Elements.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
var H1 = function H1(_ref) {
  var children = _ref.children;
  return __jsx("h1", {
    className: "font-light text-5xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, children);
};
var Subheading = function Subheading(_ref2) {
  var children = _ref2.children;
  return __jsx("p", {
    className: "text-2xl font-light leading-normal w-4/5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, children);
};
var H2 = function H2(_ref3) {
  var children = _ref3.children;
  return __jsx("h2", {
    className: "font-medium text-3xl mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "./pages/alerts.js":
/*!*************************!*\
  !*** ./pages/alerts.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Example */ "./components/Example.js");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Elements */ "./components/Elements.js");
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/pages/alerts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Alert = function Alert(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? "blue" : _ref$color,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      show = _useState[0],
      setShow = _useState[1];

  return show ? __jsx("div", {
    className: "rounded border border-".concat(color, "-400 text-").concat(color, "-800 bg-").concat(color, "-200 p-4 mb-4 relative"),
    role: "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("button", {
    type: "button",
    className: "absolute top-0 right-0 px-4 py-3 text-xl font-bold",
    datadismiss: "alert",
    "aria-label": "Close",
    onClick: function onClick() {
      return setShow(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\xD7")), children) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Alerts"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Subheading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "React Component Example"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Tailstrap alerts can be used much less verbosely if made into a React component."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "const Alert = ({ color = \"blue\", children }) => {\n  const [show, setShow] = useState(true);\n\n  return show ? (\n    <div\n      className={`rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4 relative`}\n      role=\"alert\"\n    >\n      <button\n        type=\"button\"\n        className=\"absolute top-0 right-0 px-4 py-3 text-xl font-bold\"\n        datadismiss=\"alert\"\n        aria-label=\"Close\"\n        onClick={() => setShow(false)}\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      {children}\n    </div>\n  ) : null;\n};\n\n<Alert color=\"green\">A simple success alert\u2014check it out!</Alert>\n",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(Alert, {
    color: "green",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "A simple success alert\u2014check it out!")), __jsx("h2", {
    className: "font-medium text-3xl mt-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Examples"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Alerts are available for any length of text, as well as an optional dismiss button. For inline dismissal, use a javascript framework that can listen for click events on the close button."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "<div class=\"rounded border border-blue-400 text-blue-800 bg-blue-200 p-4 mb-4 font-mono\" role=\"alert\">\nA simple primary alert\u2014check it out!\n</div>\n\n<div class=\"rounded border border-gray-400 text-gray-800 bg-gray-200 p-4 mb-4\" role=\"alert\">\nA simple secondary alert\u2014check it out!\n</div>\n\n<div class=\"rounded border border-green-400 text-green-800 bg-green-200 p-4 mb-4\" role=\"alert\">\nA simple success alert\u2014check it out!\n</div>\n\n<div class=\"rounded border border-red-400 text-red-800 bg-red-200 p-4 mb-4\" role=\"alert\">\nA simple danger alert\u2014check it out!\n</div>\n\n<div class=\"rounded border border-yellow-400 text-yellow-800 bg-yellow-200 p-4 mb-4\" role=\"alert\">\nA simple warning alert\u2014check it out!\n</div>\n\n<div class=\"rounded border border-teal-400 text-teal-800 bg-teal-200 p-4 mb-4\" role=\"alert\">\nA simple info alert\u2014check it out!\n</div>\n",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=alerts.js.311b7fd8c82b3b35d20e.hot-update.js.map