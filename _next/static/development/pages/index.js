(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./components/Elements.js":
/*!********************************!*\
  !*** ./components/Elements.js ***!
  \********************************/
/*! exports provided: H1, Subheading, H2, P, A, Code */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheading", function() { return Subheading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code", function() { return Code; });
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
var P = function P(_ref4) {
  var children = _ref4.children;
  return __jsx("p", {
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children);
};
var A = function A(_ref5) {
  var href = _ref5.href,
      children = _ref5.children;
  return __jsx("a", {
    href: href,
    className: "text-blue-600 hover:underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
};
var Code = function Code(_ref6) {
  var children = _ref6.children;
  return __jsx("span", {
    className: "font-mono text-purple-500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcgenco%2FProjects%2F_incubating%2Ftailstrap%2Fpages%2Findex.js!./":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcgenco%2FProjects%2F_incubating%2Ftailstrap%2Fpages%2Findex.js ***!
  \**************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_13346faca0e924a89b24 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_13346faca0e924a89b24 */ "dll-reference dll_13346faca0e924a89b24"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Elements */ "./components/Elements.js");
var _jsxFileName = "/Users/cgenco/Projects/_incubating/tailstrap/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["H1"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Tailstrap"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["Subheading"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "A collection of Bootstrap-inspired components written in Tailwind."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Migrating from Bootstrap to Tailwind"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Tailwind and Bootstrap are very different frameworks. Bootstrap makes it much easier to get started, but makes it much harder to customize your project."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "By starting with this set of Tailwind-style components, you get the benefit of starting quickly and the benefit of easy customizability."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["H2"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Contributing"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["P"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "This project is open source, and is currently missing many components. Contribute at", " ", __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_1__["A"], {
    href: "https://github.com/christiangenco/tailstrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "the Tailstrap Github page"), " ", "to earn some sweet imaginary internet points."));
});

/***/ }),

/***/ 3:
/*!******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcgenco%2FProjects%2F_incubating%2Ftailstrap%2Fpages%2Findex.js ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcgenco%2FProjects%2F_incubating%2Ftailstrap%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcgenco%2FProjects%2F_incubating%2Ftailstrap%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_13346faca0e924a89b24":
/*!*******************************************!*\
  !*** external "dll_13346faca0e924a89b24" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_13346faca0e924a89b24;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map