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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("prP5");


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

/***/ "prP5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ke5e");
/* harmony import */ var _components_Elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("74EB");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Alert = ({
  color = "blue",
  children
}) => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  return show ? __jsx("div", {
    className: `rounded border border-${color}-400 text-${color}-800 bg-${color}-200 p-4 mb-4 relative`,
    role: "alert"
  }, __jsx("button", {
    type: "button",
    className: "absolute top-0 right-0 px-4 py-3 text-xl font-bold",
    datadismiss: "alert",
    "aria-label": "Close",
    onClick: () => setShow(false)
  }, __jsx("span", {
    "aria-hidden": "true"
  }, "\xD7")), children) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", null, __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* H1 */ "a"], null, "Alerts"), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* Subheading */ "c"], null, "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."), __jsx("h2", {
  className: "font-medium text-3xl mt-10"
}, "Examples"), __jsx("p", null, "Alerts are available for any length of text, as well as an optional dismiss button. For inline dismissal, use a javascript framework that can listen for click events on the close button."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  code: `<div class="rounded border border-blue-400 text-blue-800 bg-blue-200 p-4 mb-4 font-mono" role="alert">
A simple primary alert—check it out!
</div>

<div class="rounded border border-gray-400 text-gray-800 bg-gray-200 p-4 mb-4" role="alert">
A simple secondary alert—check it out!
</div>

<div class="rounded border border-green-400 text-green-800 bg-green-200 p-4 mb-4" role="alert">
A simple success alert—check it out!
</div>

<div class="rounded border border-red-400 text-red-800 bg-red-200 p-4 mb-4" role="alert">
A simple danger alert—check it out!
</div>

<div class="rounded border border-yellow-400 text-yellow-800 bg-yellow-200 p-4 mb-4" role="alert">
A simple warning alert—check it out!
</div>

<div class="rounded border border-teal-400 text-teal-800 bg-teal-200 p-4 mb-4" role="alert">
A simple info alert—check it out!
</div>
`
}), __jsx(_components_Elements__WEBPACK_IMPORTED_MODULE_2__[/* H2 */ "b"], null, "React Component Example"), __jsx("p", null, "Tailstrap alerts can be used much less verbosely if made into a React component."), __jsx(_components_Example__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
  code: `const Alert = ({ color = "blue", children }) => {
  const [show, setShow] = useState(true);

  return show ? (
    <div
      className={\`rounded border border-$\{color}-400 text-$\{color}-800 bg-$\{color}-200 p-4 mb-4 relative\`}
      role="alert"
    >
      <button
        type="button"
        className="absolute top-0 right-0 px-4 py-3 text-xl font-bold"
        datadismiss="alert"
        aria-label="Close"
        onClick={() => setShow(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {children}
    </div>
  ) : null;
};

<Alert color="green">A simple success alert—check it out!</Alert>
`
}, __jsx(Alert, {
  color: "green"
}, "A simple success alert\u2014check it out!"))));

/***/ }),

/***/ "wRN9":
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ })

/******/ });