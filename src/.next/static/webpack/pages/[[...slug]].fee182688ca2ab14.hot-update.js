"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Footer(param) {\n    var renderDate = param.renderDate, person = param.person;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n            className: \"flex flex-col items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-lg m-1\",\n                    children: [\n                        \"Person: \",\n                        person\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\Footer.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-sm m-1\",\n                    children: [\n                        \"Rendered at: \",\n                        renderDate\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\Footer.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-xs\",\n                    children: [\n                        \"Powered by \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://nextjs.org/\",\n                            className: \"underline\",\n                            children: \"Next.js\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\Footer.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 24\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\Footer.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\Footer.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFBTyxTQUFTQSxNQUFNLENBQUUsS0FBK0IsRUFBRTtRQUFoQ0MsVUFBVSxHQUFYLEtBQStCLENBQTlCQSxVQUFVLEVBQUVDLE1BQU0sR0FBbkIsS0FBK0IsQ0FBbEJBLE1BQU07SUFHdkMscUJBQ0E7a0JBQ0EsNEVBQUNDLFFBQU07WUFBQ0MsU0FBUyxFQUFDLDRCQUE0Qjs7OEJBQzFDLDhEQUFDQyxLQUFHO29CQUFDRCxTQUFTLEVBQUMsYUFBYTs7d0JBQUMsVUFDakI7d0JBQUNGLE1BQU07Ozs7Ozt3QkFDYjs4QkFDTiw4REFBQ0csS0FBRztvQkFBQ0QsU0FBUyxFQUFDLGFBQWE7O3dCQUFDLGVBQ1o7d0JBQUNILFVBQVU7Ozs7Ozt3QkFDdEI7OEJBQ04sOERBQUNJLEtBQUc7b0JBQUNELFNBQVMsRUFBQyxTQUFTOzt3QkFBQyxhQUNWO3NDQUFBLDhEQUFDRSxHQUFDOzRCQUFDQyxJQUFJLEVBQUMscUJBQXFCOzRCQUFDSCxTQUFTLEVBQUMsV0FBVztzQ0FBQyxTQUFPOzs7OztnQ0FBSTs7Ozs7O3dCQUN4RTs7Ozs7O2dCQUNEO3FCQUNOLENBQ0g7QUFDSixDQUFDO0FBbEJlSixLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZnVuY3Rpb24gRm9vdGVyICh7cmVuZGVyRGF0ZSwgcGVyc29ufTogUGFnZVByb3BzKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGZvb3RlciBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyBtLTEnPlxyXG4gICAgICAgICAgICBQZXJzb246IHtwZXJzb259XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIG0tMVwiPlxyXG4gICAgICAgICAgICBSZW5kZXJlZCBhdDoge3JlbmRlckRhdGV9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQteHMnPlxyXG4gICAgICAgICAgICBQb3dlcmVkIGJ5IDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lXCI+TmV4dC5qczwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiRm9vdGVyIiwicmVuZGVyRGF0ZSIsInBlcnNvbiIsImZvb3RlciIsImNsYXNzTmFtZSIsImRpdiIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n"));

/***/ })

});