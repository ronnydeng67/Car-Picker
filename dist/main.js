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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/slider.js */ \"./src/scripts/slider.js\");\n // import { getValue } from './scripts/button.js'\n// import { changeSliderValue } from './scripts/button.js';\n\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.hpSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.fuelSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.budgetSlider)();\n(0,_scripts_slider_js__WEBPACK_IMPORTED_MODULE_0__.capacitySlider)(); // changeSliderValue();\n\nconst submitButton = document.querySelector(\".button\");\nsubmitButton.addEventListener(\"click\", e => {\n  let hp = document.getElementById(\"hp_range\").value;\n  let fuel = document.getElementById(\"fuel_range\").value;\n  let budget = document.getElementById(\"budget_range\").value;\n  let capacity = document.getElementById(\"capacity_range\").value;\n  let body = document.getElementById(\"car_body\").value; // let bodyStyle = body.options[select.selectedIndex].value;\n\n  let trans = document.getElementById(\"car_transmission\").value; // let transmission = trans.options[select.selectedIndex].value;\n\n  let awd = document.getElementById(\"awd\").checked; // boolean\n\n  let ev = document.getElementById(\"ev\").checked; // boolean\n\n  document.querySelector(\".result\").style.display = \"block\";\n  document.querySelector(\".main\").style.display = \"none\";\n  console.log([hp, fuel, budget, capacity, body, trans, awd, ev]);\n});\nlet hp1 = document.getElementById(\"hp_range\");\nlet fuel1 = document.getElementById(\"fuel_range\");\nlet budget1 = document.getElementById(\"budget_range\");\nlet capacity1 = document.getElementById(\"capacity_range\");\nhp1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 350 + '%, blue ' + 350 + '%, yellow 100%)';\nfuel1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 22 + '%, blue ' + 22 + '%, yellow 100%)';\nbudget1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 35 + '%, blue ' + 35 + '%, yellow 100%)';\ncapacity1.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + 5 + '%, blue ' + 5 + '%, yellow 100%)';\nconst closeButton = document.querySelector(\".close\");\ncloseButton.addEventListener(\"click\", function () {\n  document.querySelector(\".main\").style.display = \"block\";\n  document.querySelector(\".result\").style.display = \"none\";\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQ2MsS0FBaEMsQ0FBc0NDLE9BQXRDLEdBQThDLE9BQTlDO0VBQ0FoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NjLEtBQWxDLENBQXdDQyxPQUF4QyxHQUFnRCxNQUFoRDtBQUNILENBSEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHBTbGlkZXIsIGZ1ZWxTbGlkZXIsIGJ1ZGdldFNsaWRlciwgY2FwYWNpdHlTbGlkZXIgfSBmcm9tICcuL3NjcmlwdHMvc2xpZGVyLmpzJ1xuLy8gaW1wb3J0IHsgZ2V0VmFsdWUgfSBmcm9tICcuL3NjcmlwdHMvYnV0dG9uLmpzJ1xuLy8gaW1wb3J0IHsgY2hhbmdlU2xpZGVyVmFsdWUgfSBmcm9tICcuL3NjcmlwdHMvYnV0dG9uLmpzJztcblxuaHBTbGlkZXIoKTtcbmZ1ZWxTbGlkZXIoKTtcbmJ1ZGdldFNsaWRlcigpO1xuY2FwYWNpdHlTbGlkZXIoKTtcbi8vIGNoYW5nZVNsaWRlclZhbHVlKCk7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvblwiKVxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICBsZXQgaHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3JhbmdlXCIpLnZhbHVlO1xuICAgIGxldCBmdWVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWVsX3JhbmdlXCIpLnZhbHVlO1xuICAgIGxldCBidWRnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldF9yYW5nZVwiKS52YWx1ZTtcbiAgICBsZXQgY2FwYWNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcGFjaXR5X3JhbmdlXCIpLnZhbHVlO1xuXG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcl9ib2R5XCIpLnZhbHVlO1xuICAgIC8vIGxldCBib2R5U3R5bGUgPSBib2R5Lm9wdGlvbnNbc2VsZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuXG4gICAgbGV0IHRyYW5zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJfdHJhbnNtaXNzaW9uXCIpLnZhbHVlO1xuICAgIC8vIGxldCB0cmFuc21pc3Npb24gPSB0cmFucy5vcHRpb25zW3NlbGVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcblxuICAgIGxldCBhd2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF3ZFwiKS5jaGVja2VkOyAvLyBib29sZWFuXG4gICAgbGV0IGV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldlwiKS5jaGVja2VkOyAvLyBib29sZWFuXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3VsdFwiKS5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcblxuICAgIGNvbnNvbGUubG9nKFtocCwgZnVlbCwgYnVkZ2V0LCBjYXBhY2l0eSwgYm9keSwgdHJhbnMsIGF3ZCwgZXZdKTsgXG59KTtcblxuICAgIGxldCBocDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3JhbmdlXCIpXG4gICAgbGV0IGZ1ZWwxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWVsX3JhbmdlXCIpXG4gICAgbGV0IGJ1ZGdldDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldF9yYW5nZVwiKVxuICAgIGxldCBjYXBhY2l0eTEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcGFjaXR5X3JhbmdlXCIpXG4gICAgaHAxLnN0eWxlLmJhY2tncm91bmQgPSAnbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmI4ZGZmIDAlLCByZWQgJyArIDM1MCArICclLCBibHVlICcrIDM1MCArICclLCB5ZWxsb3cgMTAwJSknXG4gICAgZnVlbDEuc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YjhkZmYgMCUsIHJlZCAnICsgMjIgKyAnJSwgYmx1ZSAnKyAyMiArICclLCB5ZWxsb3cgMTAwJSknXG4gICAgYnVkZ2V0MS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyAzNSArICclLCBibHVlICcrIDM1ICsgJyUsIHllbGxvdyAxMDAlKSdcbiAgICBjYXBhY2l0eTEuc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YjhkZmYgMCUsIHJlZCAnICsgNSArICclLCBibHVlICcrIDUgKyAnJSwgeWVsbG93IDEwMCUpJ1xuXG5cbmNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcbmNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIikuc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIikuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcbn0pIl0sIm5hbWVzIjpbImhwU2xpZGVyIiwiZnVlbFNsaWRlciIsImJ1ZGdldFNsaWRlciIsImNhcGFjaXR5U2xpZGVyIiwic3VibWl0QnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJocCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJmdWVsIiwiYnVkZ2V0IiwiY2FwYWNpdHkiLCJib2R5IiwidHJhbnMiLCJhd2QiLCJjaGVja2VkIiwiZXYiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwiaHAxIiwiZnVlbDEiLCJidWRnZXQxIiwiY2FwYWNpdHkxIiwiYmFja2dyb3VuZCIsImNsb3NlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"budgetSlider\": function() { return /* binding */ budgetSlider; },\n/* harmony export */   \"capacitySlider\": function() { return /* binding */ capacitySlider; },\n/* harmony export */   \"fuelSlider\": function() { return /* binding */ fuelSlider; },\n/* harmony export */   \"hpSlider\": function() { return /* binding */ hpSlider; }\n/* harmony export */ });\nconst hpSlider = () => {\n  var output = document.getElementById(\"hp_value\");\n\n  var slider = document.getElementById(\"hp_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst fuelSlider = () => {\n  var output = document.getElementById(\"fuel_value\");\n\n  var slider = document.getElementById(\"fuel_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst budgetSlider = () => {\n  var output = document.getElementById(\"budget_value\");\n\n  var slider = document.getElementById(\"budget_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};\nconst capacitySlider = () => {\n  var output = document.getElementById(\"capacity_value\");\n\n  var slider = document.getElementById(\"capacity_range\").oninput = function () {\n    var value = (this.value - this.min) / (this.max - this.min) * 100;\n    this.style.background = 'linear-gradient(to right, #6b8dff 0%, red ' + value + '%, blue ' + value + '%, yellow 100%)';\n    output.innerHTML = this.value;\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLE1BQU1BLFFBQVEsR0FBRyxNQUFNO0VBRTFCLElBQUlDLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWI7O0VBRUEsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0NFLE9BQXBDLEdBQThDLFlBQVc7SUFFbEUsSUFBSUMsS0FBSyxHQUFHLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtDLEdBQW5CLEtBQTJCLEtBQUtDLEdBQUwsR0FBVyxLQUFLRCxHQUEzQyxJQUFrRCxHQUE5RDtJQUVBLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QiwrQ0FBK0NKLEtBQS9DLEdBQXVELFVBQXZELEdBQW1FQSxLQUFuRSxHQUEyRSxpQkFBbkc7SUFFQUwsTUFBTSxDQUFDVSxTQUFQLEdBQW1CLEtBQUtMLEtBQXhCO0VBRUMsQ0FSTDtBQVVILENBZE07QUFnQkEsTUFBTU0sVUFBVSxHQUFHLE1BQU07RUFFNUIsSUFBSVgsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBYjs7RUFDQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0UsT0FBdEMsR0FBZ0QsWUFBVztJQUVwRSxJQUFJQyxLQUFLLEdBQUcsQ0FBQyxLQUFLQSxLQUFMLEdBQWEsS0FBS0MsR0FBbkIsS0FBMkIsS0FBS0MsR0FBTCxHQUFXLEtBQUtELEdBQTNDLElBQWtELEdBQTlEO0lBRUEsS0FBS0UsS0FBTCxDQUFXQyxVQUFYLEdBQXdCLCtDQUErQ0osS0FBL0MsR0FBdUQsVUFBdkQsR0FBbUVBLEtBQW5FLEdBQTJFLGlCQUFuRztJQUVBTCxNQUFNLENBQUNVLFNBQVAsR0FBbUIsS0FBS0wsS0FBeEI7RUFFQyxDQVJMO0FBVUgsQ0FiTTtBQWVBLE1BQU1PLFlBQVksR0FBRyxNQUFNO0VBRTlCLElBQUlaLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWI7O0VBQ0EsSUFBSUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsRUFBd0NFLE9BQXhDLEdBQWtELFlBQVc7SUFFdEUsSUFBSUMsS0FBSyxHQUFHLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtDLEdBQW5CLEtBQTJCLEtBQUtDLEdBQUwsR0FBVyxLQUFLRCxHQUEzQyxJQUFrRCxHQUE5RDtJQUVBLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QiwrQ0FBK0NKLEtBQS9DLEdBQXVELFVBQXZELEdBQW1FQSxLQUFuRSxHQUEyRSxpQkFBbkc7SUFFQUwsTUFBTSxDQUFDVSxTQUFQLEdBQW1CLEtBQUtMLEtBQXhCO0VBRUMsQ0FSTDtBQVVILENBYk07QUFlQSxNQUFNUSxjQUFjLEdBQUcsTUFBTTtFQUVoQyxJQUFJYixNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBYjs7RUFDQSxJQUFJQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMENFLE9BQTFDLEdBQW9ELFlBQVc7SUFFeEUsSUFBSUMsS0FBSyxHQUFHLENBQUMsS0FBS0EsS0FBTCxHQUFhLEtBQUtDLEdBQW5CLEtBQTJCLEtBQUtDLEdBQUwsR0FBVyxLQUFLRCxHQUEzQyxJQUFrRCxHQUE5RDtJQUVBLEtBQUtFLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QiwrQ0FBK0NKLEtBQS9DLEdBQXVELFVBQXZELEdBQW1FQSxLQUFuRSxHQUEyRSxpQkFBbkc7SUFFQUwsTUFBTSxDQUFDVSxTQUFQLEdBQW1CLEtBQUtMLEtBQXhCO0VBRUMsQ0FSTDtBQVVILENBYk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy1wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvc2xpZGVyLmpzP2YzMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBocFNsaWRlciA9ICgpID0+IHtcblxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3ZhbHVlXCIpO1xuICAgIFxuICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhwX3JhbmdlXCIpLm9uaW5wdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgXG4gICAgICAgIHZhciB2YWx1ZSA9ICh0aGlzLnZhbHVlIC0gdGhpcy5taW4pIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pICogMTAwO1xuXG4gICAgICAgIHRoaXMuc3R5bGUuYmFja2dyb3VuZCA9ICdsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2YjhkZmYgMCUsIHJlZCAnICsgdmFsdWUgKyAnJSwgYmx1ZSAnKyB2YWx1ZSArICclLCB5ZWxsb3cgMTAwJSknXG4gICAgICAgIFxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGZ1ZWxTbGlkZXIgPSAoKSA9PiB7XG5cbiAgICB2YXIgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmdWVsX3ZhbHVlXCIpO1xuICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1ZWxfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGJ1ZGdldFNsaWRlciA9ICgpID0+IHtcblxuICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1ZGdldF92YWx1ZVwiKTtcbiAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidWRnZXRfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn1cblxuZXhwb3J0IGNvbnN0IGNhcGFjaXR5U2xpZGVyID0gKCkgPT4ge1xuXG4gICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwYWNpdHlfdmFsdWVcIik7XG4gICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwYWNpdHlfcmFuZ2VcIikub25pbnB1dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBcbiAgICAgICAgdmFyIHZhbHVlID0gKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgLyAodGhpcy5tYXggLSB0aGlzLm1pbikgKiAxMDA7XG5cbiAgICAgICAgdGhpcy5zdHlsZS5iYWNrZ3JvdW5kID0gJ2xpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZiOGRmZiAwJSwgcmVkICcgKyB2YWx1ZSArICclLCBibHVlICcrIHZhbHVlICsgJyUsIHllbGxvdyAxMDAlKSdcblxuICAgICAgICBvdXRwdXQuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcblxuICAgICAgICB9XG5cbn0iXSwibmFtZXMiOlsiaHBTbGlkZXIiLCJvdXRwdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2xpZGVyIiwib25pbnB1dCIsInZhbHVlIiwibWluIiwibWF4Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiaW5uZXJIVE1MIiwiZnVlbFNsaWRlciIsImJ1ZGdldFNsaWRlciIsImNhcGFjaXR5U2xpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/slider.js\n");

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