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

/***/ "./components/todo-list/List.tsx":
/*!***************************************!*\
  !*** ./components/todo-list/List.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar List = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), editing = ref1[0], setEditing = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        todo: \"\"\n    }), editData = ref2[0], setEditData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var listData = JSON.parse(localStorage.getItem(\"ToDos\"));\n        if (listData !== null) {\n            setTodos(listData);\n        }\n    }, []);\n    var deleteTodo = function(id) {\n        var remainingTodos = todos.filter(function(todo) {\n            return id !== todo.id;\n        });\n        setTodos(remainingTodos);\n        updateLocalStorage(remainingTodos);\n    };\n    var changeEditing = function(id) {\n        setEditing(function() {\n            return id;\n        });\n    };\n    var updateTodo = function(val, id) {\n        var index = todos.findIndex(function(object) {\n            return object.id === id;\n        });\n        if (index !== -1) {\n            todos[index].todo = val;\n            updateLocalStorage(todos);\n            changeEditing(\"\");\n            setEditData({\n                todo: \"\"\n            });\n        }\n    };\n    var updateLocalStorage = function(todoList) {\n        localStorage.setItem(\"ToDos\", JSON.stringify(todoList));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: todos.map(function(todo) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: editing === todo.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function() {\n                        return updateTodo(editData.todo, todo.id);\n                    },\n                    id: todo.id,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"todo-input\",\n                                placeholder: \"\",\n                                onChange: function(e) {\n                                    return setEditData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, todo.todo), {\n                                        todo: e.target.value\n                                    }));\n                                },\n                                value: editData.todo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"text-3xl hover:text-green-600 pr-0.85\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEdit, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 108\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 37\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 34\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: todo.todo\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 31\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"hover:text-red-600\",\n                                    onClick: function() {\n                                        return deleteTodo(todo.id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTrash, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 106\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 31\n                                }, _this),\n                                \" | \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"hover:text-green-600\",\n                                    onClick: function() {\n                                        return changeEditing(todo.id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEdit, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 208\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 129\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 31\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 29\n                }, _this)\n            }, todo.id, false, {\n                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                lineNumber: 49,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(List, \"qqJeL3OIsYalWrnnAvi0eX5gJY4=\");\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztxQkFDSCxDQUNOO0FBQ0wsQ0FBQyxDQUFDO0dBckVXZCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2RvLWxpc3QvTGlzdC50c3g/YjM1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGYUVkaXQsIEZhVHJhc2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWyB0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBlZGl0aW5nLCBzZXRFZGl0aW5nXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgWyBlZGl0RGF0YSwgc2V0RWRpdERhdGFdID0gdXNlU3RhdGUoe3RvZG86IFwiXCJ9KVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdERhdGE6IEFycmF5PG9iamVjdD4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUb0RvcycpKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKGxpc3REYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBzZXRUb2RvcyhsaXN0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVtYWluaW5nVG9kb3M6IEFycmF5PHN0cmluZz4gPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiBpZCAhPT0gdG9kby5pZCk7XHJcbiAgICAgICAgc2V0VG9kb3MocmVtYWluaW5nVG9kb3MpO1xyXG4gICAgICAgIHVwZGF0ZUxvY2FsU3RvcmFnZShyZW1haW5pbmdUb2Rvcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGNoYW5nZUVkaXRpbmcgPSAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHNldEVkaXRpbmcoKCkgPT4gaWQpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCB1cGRhdGVUb2RvID0gKHZhbDogc3RyaW5nLCBpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0b2Rvcy5maW5kSW5kZXgob2JqZWN0ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iamVjdC5pZCA9PT0gaWQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0b2Rvc1tpbmRleF0udG9kbyA9IHZhbDtcclxuICAgICAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHRvZG9zKTtcclxuICAgICAgICAgICAgY2hhbmdlRWRpdGluZyhcIlwiKTtcclxuICAgICAgICAgICAgc2V0RWRpdERhdGEoe3RvZG86IFwiXCJ9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHVwZGF0ZUxvY2FsU3RvcmFnZSA9ICh0b2RvTGlzdDogQXJyYXk8c3RyaW5nPikgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUb0RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9MaXN0KSk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PiAgXHJcbiAgICAgICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRpbmcgPT09IHRvZG8uaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiB1cGRhdGVUb2RvKGVkaXREYXRhLnRvZG8sIHRvZG8uaWQpfSBpZD17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInRvZG8taW5wdXRcIiBwbGFjZWhvbGRlcj1cIlwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdERhdGEoeyAuLi50b2RvLnRvZG8sIHRvZG86IGUudGFyZ2V0LnZhbHVlIH0pfSB2YWx1ZT17ZWRpdERhdGEudG9kb30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnY2xhc3NOYW1lPSd0ZXh0LTN4bCBob3Zlcjp0ZXh0LWdyZWVuLTYwMCBwci0wLjg1Jz48RmFFZGl0IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt0b2RvLnRvZG99PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdob3Zlcjp0ZXh0LXJlZC02MDAnIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kby5pZCl9PjxGYVRyYXNoIC8+PC9idXR0b24+IHwgPGJ1dHRvbiBjbGFzc05hbWU9J2hvdmVyOnRleHQtZ3JlZW4tNjAwJ29uQ2xpY2s9eygpID0+IGNoYW5nZUVkaXRpbmcodG9kby5pZCl9PjxGYUVkaXQgLz48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZhRWRpdCIsIkZhVHJhc2giLCJMaXN0IiwidG9kb3MiLCJzZXRUb2RvcyIsImVkaXRpbmciLCJzZXRFZGl0aW5nIiwidG9kbyIsImVkaXREYXRhIiwic2V0RWRpdERhdGEiLCJsaXN0RGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWxldGVUb2RvIiwiaWQiLCJyZW1haW5pbmdUb2RvcyIsImZpbHRlciIsInVwZGF0ZUxvY2FsU3RvcmFnZSIsImNoYW5nZUVkaXRpbmciLCJ1cGRhdGVUb2RvIiwidmFsIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvYmplY3QiLCJ0b2RvTGlzdCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJtYXAiLCJsaSIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/todo-list/List.tsx\n"));

/***/ })

});