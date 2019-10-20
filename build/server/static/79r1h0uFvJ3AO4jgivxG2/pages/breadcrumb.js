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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cZ/X");


/***/ }),

/***/ "74EB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Subheading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return H2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
const H1 = ({
  children
}) => {
  return __jsx("h1", {
    className: "font-light text-5xl"
  }, children);
};
const Subheading = ({
  children
}) => {
  return __jsx("p", {
    className: "text-2xl font-light leading-normal w-4/5"
  }, children);
};
const H2 = ({
  children
}) => {
  return __jsx("h2", {
    className: "font-medium text-3xl mt-10"
  }, children);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cZ/X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ke5e");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("74EB");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", null, __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* H1 */ "a"], null, "Breadcrumb"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* Subheading */ "c"], null, "Indicate the current page's location within a navigational hierarchy with separators."), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* H2 */ "b"], null, "Example"), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  code: `
<nav aria-label="breadcrumb">
  <ol class="bg-gray-300 rounded p-3 flex text-gray-600">
    <li class="mr-2" aria-current="page"><a href="#home" class="text-blue-500 hover:underline">Home</a></li>
    /
    <li class="mx-2" aria-current="page"><a href="#library" class="text-blue-500 hover:underline">Library</a></li>
    /
    <li class="mx-2" aria-current="page">Data</li>
  </ol>
</nav>`
})));

/***/ }),

/***/ "ke5e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wRN9");
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (({
  children,
  code
}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children ? __jsx("div", {
  className: "border-4 border-gray-100 p-6 mt-2"
}, children) : __jsx("div", {
  className: "border-4 border-gray-100 p-6 mt-2",
  dangerouslySetInnerHTML: {
    __html: code
  }
}), __jsx("div", {
  className: "bg-gray-100 overflow-y-scroll w-full p-4 relative"
}, __jsx("button", {
  className: "absolute top-0 right-0 rounded text-gray-600 mr-1 px-2 py-1 hover:bg-blue-500 hover:text-blue-100 text-sm",
  onClick: () => {}
}, "Copy"), __jsx(react_highlight__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "jsx"
}, code))));

/***/ }),

/***/ "wRN9":
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ })

/******/ });