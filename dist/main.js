/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import {buttons, fn1} from \"./scripts/image.js\";\nconst image = __webpack_require__(/*! ./scripts/image.js */ \"./src/scripts/image.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const div = document.getElementsByClassName(\"car\");\n}); // buttons();\n// fn1();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLLEdBQUdDLG1CQUFPLENBQUMsa0RBQUQsQ0FBckI7O0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07RUFDaEQsTUFBTUMsR0FBRyxHQUFHRixRQUFRLENBQUNHLHNCQUFULENBQWdDLEtBQWhDLENBQVo7QUFDSCxDQUZELEUsQ0FJQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7YnV0dG9ucywgZm4xfSBmcm9tIFwiLi9zY3JpcHRzL2ltYWdlLmpzXCI7XG5jb25zdCBpbWFnZSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvaW1hZ2UuanNcIilcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2FyXCIpXG59KVxuXG4vLyBidXR0b25zKCk7XG4vLyBmbjEoKTsiXSwibmFtZXMiOlsiaW1hZ2UiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGl2IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/image.js":
/*!******************************!*\
  !*** ./src/scripts/image.js ***!
  \******************************/
/***/ (function(module) {

eval("const buttons = document.querySelector(\".box3\");\nbutton.forEach(button => {\n  button.addEventListener(\"click\", () => {\n    const offset = button.dataset.carButton === \"right\" ? 1 : -1;\n    const slides = button.closest(\".car\").querySelector(\".slidesss\");\n    const activeSlide = slides.querySelector(\".slide\");\n    let newIndex = [...slides.children].indexOf(activeSlide) + offset;\n    if (newIndex < 0) newIndex = slides.children.length - 1;\n    if (newIndex >= slides.children.length) newIndex = 0;\n    slides.children[newIndex].dataset.active = true;\n    delete activeSlide.dataset.active;\n  });\n});\nmodule.exports = image;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbWFnZS5qcy5qcyIsIm5hbWVzIjpbImJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZnNldCIsImRhdGFzZXQiLCJjYXJCdXR0b24iLCJzbGlkZXMiLCJjbG9zZXN0IiwiYWN0aXZlU2xpZGUiLCJuZXdJbmRleCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsImxlbmd0aCIsImFjdGl2ZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9zY3JpcHRzL2ltYWdlLmpzP2YzZjkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm94M1wiKVxuXG5idXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBvZmZzZXQgPSBidXR0b24uZGF0YXNldC5jYXJCdXR0b24gPT09IFwicmlnaHRcIiA/IDEgOiAtMTtcbiAgICAgICAgY29uc3Qgc2xpZGVzID0gYnV0dG9uLmNsb3Nlc3QoXCIuY2FyXCIpLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVzc3NcIik7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gc2xpZGVzLnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVcIik7XG4gICAgICAgIGxldCBuZXdJbmRleCA9IFsuLi5zbGlkZXMuY2hpbGRyZW5dLmluZGV4T2YoYWN0aXZlU2xpZGUpICsgb2Zmc2V0O1xuICAgICAgICBpZiAobmV3SW5kZXggPCAwKSBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgICAgICBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCkgbmV3SW5kZXggPSAwO1xuXG4gICAgICAgIHNsaWRlcy5jaGlsZHJlbltuZXdJbmRleF0uZGF0YXNldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBkZWxldGUgYWN0aXZlU2xpZGUuZGF0YXNldC5hY3RpdmU7XG4gICAgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gaW1hZ2U7Il0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQjtBQUVBQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUQsTUFBTSxJQUFJO0VBQ3JCQSxNQUFNLENBQUNFLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLE1BQU07SUFDbkMsTUFBTUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLE9BQVAsQ0FBZUMsU0FBZixLQUE2QixPQUE3QixHQUF1QyxDQUF2QyxHQUEyQyxDQUFDLENBQTNEO0lBQ0EsTUFBTUMsTUFBTSxHQUFHTixNQUFNLENBQUNPLE9BQVAsQ0FBZSxNQUFmLEVBQXVCUixhQUF2QixDQUFxQyxXQUFyQyxDQUFmO0lBQ0EsTUFBTVMsV0FBVyxHQUFHRixNQUFNLENBQUNQLGFBQVAsQ0FBcUIsUUFBckIsQ0FBcEI7SUFDQSxJQUFJVSxRQUFRLEdBQUcsQ0FBQyxHQUFHSCxNQUFNLENBQUNJLFFBQVgsRUFBcUJDLE9BQXJCLENBQTZCSCxXQUE3QixJQUE0Q0wsTUFBM0Q7SUFDQSxJQUFJTSxRQUFRLEdBQUcsQ0FBZixFQUFrQkEsUUFBUSxHQUFHSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JFLE1BQWhCLEdBQXlCLENBQXBDO0lBQ2xCLElBQUlILFFBQVEsSUFBSUgsTUFBTSxDQUFDSSxRQUFQLENBQWdCRSxNQUFoQyxFQUF3Q0gsUUFBUSxHQUFHLENBQVg7SUFFeENILE1BQU0sQ0FBQ0ksUUFBUCxDQUFnQkQsUUFBaEIsRUFBMEJMLE9BQTFCLENBQWtDUyxNQUFsQyxHQUEyQyxJQUEzQztJQUNBLE9BQU9MLFdBQVcsQ0FBQ0osT0FBWixDQUFvQlMsTUFBM0I7RUFDSCxDQVZEO0FBV0gsQ0FaRDtBQWNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLEtBQWpCIn0=\n//# sourceURL=webpack-internal:///./src/scripts/image.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;