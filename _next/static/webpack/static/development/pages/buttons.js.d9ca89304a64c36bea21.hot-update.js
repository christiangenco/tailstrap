webpackHotUpdate("static/development/pages/buttons.js",{

/***/ "./pages/buttons.js":
/*!**************************!*\
  !*** ./pages/buttons.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Example */ "./components/Example.js");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Elements */ "./components/Elements.js");
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/pages/buttons.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // const Button = ({ color = "blue", children }) => (
//   <div
//     className={`rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4`}
//     role="alert"
//   >
//     {children}
//   </div>
// );

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Buttons"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Subheading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Use Tailstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Example"), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "<button type=\"button\" class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded\">Primary</button>\n<button type=\"button\" class=\"bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded\">Secondary</button>\n<button type=\"button\" class=\"bg-green-600 hover:bg-green-700 text-green-100 py-2 px-3 rounded\">Success</button>\n<button type=\"button\" class=\"bg-red-600 hover:bg-red-700 text-red-100 py-2 px-3 rounded\">Danger</button>\n<button type=\"button\" class=\"bg-yellow-500 hover:bg-yellow-600 text-yellow-100 py-2 px-3 rounded\">Warning</button>\n<button type=\"button\" class=\"bg-teal-500 hover:bg-teal-600 text-teal-100 py-2 px-3 rounded\">Info</button>\n<button type=\"button\" class=\"bg-gray-200 hover:bg-gray-300 text-black py-2 px-3 rounded\">Light</button>\n<button type=\"button\" class=\"bg-gray-800 hover:bg-gray-900 text-white py-2 px-3 rounded\">Dark</button>\n\n<button type=\"button\" class=\"text-blue-600 hover:underline py-2 px-3 rounded\">Link</button>",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Button tags"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "The", " ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded inline-block cursor-pointer"), " ", "classes may be used with the ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "<button>"), " element. However, you can also use these classes on ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "<a>"), " or", " ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "<input>"), " elements (though some browsers may apply a slightly different rendering)."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "When using button classes on ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "<a>"), " elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "role=\"button\""), " to appropriately convey their purpose to assistive technologies such as screen readers."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "<a class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded inline-block\" href=\"#\" role=\"button\">Link</a>\n<button class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded\" type=\"submit\">Button</button>\n<input class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded cursor-pointer\" type=\"button\" value=\"Input\">\n<input class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded cursor-pointer\" type=\"submit\" value=\"Submit\">\n<input class=\"bg-blue-500 hover:bg-blue-700 text-blue-100 py-2 px-3 rounded cursor-pointer\" type=\"reset\" value=\"Reset\">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Outline buttons"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "In need of a button, but not the hefty background colors they bring? Here are some example stylings to get you started."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "<button type=\"button\" class=\"border text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-blue-100 py-2 px-3 rounded\">Primary</button>\n<button type=\"button\" class=\"border text-gray-600 border-gray-600 hover:bg-gray-600 hover:text-white py-2 px-3 rounded\">Secondary</button>\n<button type=\"button\" class=\"border text-green-600 border-green-600 hover:bg-green-600 hover:text-green-100 py-2 px-3 rounded\">Success</button>\n<button type=\"button\" class=\"border text-red-600 border-red-600 hover:bg-red-600 hover:text-red-100 py-2 px-3 rounded\">Danger</button>\n<button type=\"button\" class=\"border text-yellow-500 border-yellow-500 hover:bg-yellow-500 hover:text-yellow-100 py-2 px-3 rounded\">Warning</button>\n<button type=\"button\" class=\"border text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-teal-100 py-2 px-3 rounded\">Info</button>\n<button type=\"button\" class=\"border text-gray-200 border-gray-200 hover:bg-gray-200 hover:text-black py-2 px-3 rounded\">Light</button>\n<button type=\"button\" class=\"border text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white py-2 px-3 rounded\">Dark</button>",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Sizes"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Fancy larger or smaller buttons? Try ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, ".text-2xl"), " or", " ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["Code"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, ".text-xs"), ". See", " ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__["A"], {
    href: "https://tailwindcss.com/docs/font-size/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Tailwind Font Size"), " ", "for additional sizes."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: "<button type=\"button\" class=\"text-2xl py-2 px-4 bg-blue-500 hover:bg-blue-700 text-blue-100 rounded\">Primary</button>\n<button type=\"button\" class=\"text-2xl py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded\">Secondary</button>",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=buttons.js.d9ca89304a64c36bea21.hot-update.js.map