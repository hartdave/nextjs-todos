"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/swapi";
exports.ids = ["pages/api/swapi"];
exports.modules = {

/***/ "(api)/./pages/api/swapi.ts":
/*!****************************!*\
  !*** ./pages/api/swapi.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    const swapiEndPoint = \"https://swapi.dev/api/people/\";\n    const result = await fetch(swapiEndPoint);\n    const data = await result.json();\n    const random = Math.floor(Math.random() * data.results.length) - 1;\n    const personData = data.results[random];\n    try {\n        res.status(200).json(personData);\n    } catch (e) {\n        console.error(e);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3dhcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTUMsYUFBYSxHQUFHLCtCQUErQjtJQUNyRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixhQUFhLENBQUM7SUFDekMsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csSUFBSSxFQUFFO0lBQ2hDLE1BQU1DLE1BQU0sR0FBSUMsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0QsTUFBTSxFQUFFLEdBQUNGLElBQUksQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLENBQUMsR0FBQyxDQUFDO0lBQy9ELE1BQU1DLFVBQVUsR0FBR1AsSUFBSSxDQUFDSyxPQUFPLENBQUNILE1BQU0sQ0FBQztJQUN2QyxJQUFJO1FBQ0pOLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDUCxJQUFJLENBQUNNLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLEVBQUUsT0FBT0UsQ0FBQyxFQUFFO1FBQ1JDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7SUFDcEIsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtdG9kb3MvLi9wYWdlcy9hcGkvc3dhcGkudHM/Yzk4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc3Qgc3dhcGlFbmRQb2ludCA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvcGVvcGxlLyc7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChzd2FwaUVuZFBvaW50KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG4gICAgY29uc3QgcmFuZG9tID0gIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpkYXRhLnJlc3VsdHMubGVuZ3RoKS0xO1xyXG4gICAgY29uc3QgcGVyc29uRGF0YSA9IGRhdGEucmVzdWx0c1tyYW5kb21dO1xyXG4gICAgdHJ5IHtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHBlcnNvbkRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzd2FwaUVuZFBvaW50IiwicmVzdWx0IiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInJlc3VsdHMiLCJsZW5ndGgiLCJwZXJzb25EYXRhIiwic3RhdHVzIiwiZSIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/swapi.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/swapi.ts"));
module.exports = __webpack_exports__;

})();