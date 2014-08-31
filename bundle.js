/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);

	document.write(__webpack_require__(1));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "It works from content.js.";

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	var update = __webpack_require__(4)(
		__webpack_require__(3)
	);
	// Hot Module Replacement
	if(false) {
		module.hot.accept("!!/home/julio/_git/webpack-projects/getting-started/node_modules/css-loader/index.js!/home/julio/_git/webpack-projects/getting-started/style.css", function() {
			update(require("!!/home/julio/_git/webpack-projects/getting-started/node_modules/css-loader/index.js!/home/julio/_git/webpack-projects/getting-started/style.css"));
		});
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports =
		"body {\n    background: yellow;\n}";

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function addStyle(cssCode) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
		var styleElement = document.createElement("style"),
			head = document.head || document.getElementsByTagName("head")[0];
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = cssCode;
		} else {
			styleElement.appendChild(document.createTextNode(cssCode));
		}
		if(false) {
			return function(cssCode) {
				if(typeof cssCode === "string") {
					if (styleElement.styleSheet) {
						styleElement.styleSheet.cssText = cssCode;
					} else {
						styleElement.childNodes[0].nodeValue = cssCode;
					}
				} else {
					dispose();
				}
			};
		} else {
			// For the useable API, provide a function to remove the stylesheet.
			return dispose;
		}

		function dispose() {
			head.removeChild(styleElement);
		}
	};


/***/ }
/******/ ])