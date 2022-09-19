/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/slider.js */ \"./src/scripts/slider.js\");\n\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.hpSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.fuelSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.budgetSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.capacitySlider)(); // var output = document.getElementById(\"hp_value\");\n// // debugger\n// var slider = document.getElementById(\"hp_range\").oninput = function() {\n//     var value = this.value;\n//     this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, white '+ value + '%, white 100%)'\n//     output.innerHTML = this.value;\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBQSw0REFBUTtBQUNSQyw4REFBVTtBQUNWQyxnRUFBWTtBQUNaQyxrRUFBYyxJQUVkO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanMtcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aHBTbGlkZXIsIGZ1ZWxTbGlkZXIsIGJ1ZGdldFNsaWRlciwgY2FwYWNpdHlTbGlkZXJ9IGZyb20gJy4vc2NyaXB0cy9zbGlkZXIuanMnXG5cbmhwU2xpZGVyKCk7XG5mdWVsU2xpZGVyKCk7XG5idWRnZXRTbGlkZXIoKTtcbmNhcGFjaXR5U2xpZGVyKCk7XG5cbi8vIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3ZhbHVlXCIpO1xuLy8gLy8gZGVidWdnZXJcbi8vIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3JhbmdlXCIpLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcblxuLy8gICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWU7XG5cbi8vICAgICB0aGlzLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmI4ZGZmIDAlLCByZWQgJyArIHZhbHVlICsgJyUsIHdoaXRlICcrIHZhbHVlICsgJyUsIHdoaXRlIDEwMCUpJ1xuXG4vLyAgICAgb3V0cHV0LmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG5cblxuLy8gfSJdLCJuYW1lcyI6WyJocFNsaWRlciIsImZ1ZWxTbGlkZXIiLCJidWRnZXRTbGlkZXIiLCJjYXBhY2l0eVNsaWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"budgetSlider\": function() { return /* binding */ budgetSlider; },\n/* harmony export */   \"capacitySlider\": function() { return /* binding */ capacitySlider; },\n/* harmony export */   \"fuelSlider\": function() { return /* binding */ fuelSlider; },\n/* harmony export */   \"hpSlider\": function() { return /* binding */ hpSlider; }\n/* harmony export */ });\nconst hpSlider = () => {\n  var output = document.getElementById(\"hp_value\");\n\n  var slider = document.getElementById(\"hp_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst fuelSlider = () => {\n  var output = document.getElementById(\"fuel_value\");\n\n  var slider = document.getElementById(\"fuel_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst budgetSlider = () => {\n  var output = document.getElementById(\"budget_value\");\n\n  var slider = document.getElementById(\"budget_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst capacitySlider = () => {\n  var output = document.getElementById(\"capacity_value\");\n\n  var slider = document.getElementById(\"capacity_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0VBRTFCLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7O0VBQ0EsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NFLE9BQXBDLEdBQThDLFlBQVc7SUFFbEUsSUFBSUMsS0FBSyxHQUFHLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtDLEdBQW5CLEtBQTJCLEtBQUtDLEdBQUwsR0FBVyxLQUFLRCxHQUEzQyxJQUFrRCxHQUE5RDtJQUVBLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QiwrQ0FBK0NKLEtBQS9DLEdBQXVELFVBQXZELEdBQW1FQSxLQUFuRSxHQUEyRSxpQkFBbkc7SUFFQUwsTUFBTSxDQUFDVSxTQUFQLEdBQW1CLEtBQUtMLEtBQXhCO0VBRUMsQ0FSTDtBQVVILENBYk07QUFlQSxNQUFNTSxVQUFVLEdBQUcsTUFBTTtFQUU1QixJQUFJWCxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFiOztFQUNBLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDRSxPQUF0QyxHQUFnRCxZQUFXO0lBRXBFLElBQUlDLEtBQUssR0FBRyxDQUFDLEtBQUtBLEtBQUwsR0FBYSxLQUFLQyxHQUFuQixLQUEyQixLQUFLQyxHQUFMLEdBQVcsS0FBS0QsR0FBM0MsSUFBa0QsR0FBOUQ7SUFFQSxLQUFLRSxLQUFMLENBQVdDLFVBQVgsR0FBd0IsK0NBQStDSixLQUEvQyxHQUF1RCxVQUF2RCxHQUFtRUEsS0FBbkUsR0FBMkUsaUJBQW5HO0lBRUFMLE1BQU0sQ0FBQ1UsU0FBUCxHQUFtQixLQUFLTCxLQUF4QjtFQUVDLENBUkw7QUFVSCxDQWJNO0FBZUEsTUFBTU8sWUFBWSxHQUFHLE1BQU07RUFFOUIsSUFBSVosTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBYjs7RUFDQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixjQUF4QixFQUF3Q0UsT0FBeEMsR0FBa0QsWUFBVztJQUV0RSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsR0FBbkIsS0FBMkIsS0FBS0MsR0FBTCxHQUFXLEtBQUtELEdBQTNDLElBQWtELEdBQTlEO0lBRUEsS0FBS0UsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLCtDQUErQ0osS0FBL0MsR0FBdUQsVUFBdkQsR0FBbUVBLEtBQW5FLEdBQTJFLGlCQUFuRztJQUVBTCxNQUFNLENBQUNVLFNBQVAsR0FBbUIsS0FBS0wsS0FBeEI7RUFFQyxDQVJMO0FBVUgsQ0FiTTtBQWVBLE1BQU1RLGNBQWMsR0FBRyxNQUFNO0VBRWhDLElBQUliLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixDQUFiOztFQUNBLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLGdCQUF4QixFQUEwQ0UsT0FBMUMsR0FBb0QsWUFBVztJQUV4RSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsR0FBbkIsS0FBMkIsS0FBS0MsR0FBTCxHQUFXLEtBQUtELEdBQTNDLElBQWtELEdBQTlEO0lBRUEsS0FBS0UsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLCtDQUErQ0osS0FBL0MsR0FBdUQsVUFBdkQsR0FBbUVBLEtBQW5FLEdBQTJFLGlCQUFuRztJQUVBTCxNQUFNLENBQUNVLFNBQVAsR0FBbUIsS0FBS0wsS0FBeEI7RUFFQyxDQVJMO0FBVUgsQ0FiTSIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXByb2plY3QvLi9zcmMvc2NyaXB0cy9zbGlkZXIuanM/ZjMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGhwU2xpZGVyID0gKCkgPT4ge1xuXG4gICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHBfdmFsdWVcIik7XG4gICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHBfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGZ1ZWxTbGlkZXIgPSAoKSA9PiB7XG5cbiAgICB2YXIgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWVsX3ZhbHVlXCIpO1xuICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1ZWxfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGJ1ZGdldFNsaWRlciA9ICgpID0+IHtcblxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldF92YWx1ZVwiKTtcbiAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXRfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNhcGFjaXR5U2xpZGVyID0gKCkgPT4ge1xuXG4gICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwYWNpdHlfdmFsdWVcIik7XG4gICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwYWNpdHlfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn0iXSwibmFtZXMiOlsiaHBTbGlkZXIiLCJvdXRwdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2xpZGVyIiwib25pbnB1dCIsInZhbHVlIiwibWluIiwibWF4Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW5uZXJIVE1MIiwiZnVlbFNsaWRlciIsImJ1ZGdldFNsaWRlciIsImNhcGFjaXR5U2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/slider.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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