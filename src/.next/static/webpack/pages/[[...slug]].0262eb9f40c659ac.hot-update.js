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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar List = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), editing = ref1[0], setEditing = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        todo: \"\"\n    }), editData = ref2[0], setEditData = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var listData = JSON.parse(localStorage.getItem(\"ToDos\"));\n        if (listData !== null) {\n            setTodos(listData);\n        }\n    }, []);\n    var deleteTodo = function(id) {\n        var remainingTodos = todos.filter(function(todo) {\n            return id !== todo.id;\n        });\n        setTodos(remainingTodos);\n        updateLocalStorage(remainingTodos);\n    };\n    var changeEditing = function(id) {\n        setEditing(function() {\n            return id;\n        });\n    };\n    var updateTodo = function(val, id) {\n        var index = todos.findIndex(function(object) {\n            return object.id === id;\n        });\n        if (index !== -1) {\n            todos[index].todo = val;\n            updateLocalStorage(todos);\n            changeEditing(\"\");\n            setEditData({\n                todo: \"\"\n            });\n        }\n    };\n    var updateLocalStorage = function(todoList) {\n        localStorage.setItem(\"ToDos\", JSON.stringify(todoList));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: todos.map(function(todo) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"mt-2\",\n                children: editing === todo.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: function() {\n                        return updateTodo(editData.todo, todo.id);\n                    },\n                    id: todo.id,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between border-b border-green-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"appearance-none block bg-gray-200 border-none w-full text-gray-700 pb-2 focus:outline-none mr-5\",\n                                placeholder: todo.todo,\n                                onChange: function(e) {\n                                    return setEditData((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, todo.todo), {\n                                        todo: e.target.value\n                                    }));\n                                },\n                                value: editData.todo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 37\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \" hover:text-green-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEdit, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 92\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 37\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 37\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 34\n                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-lg\",\n                            children: todo.todo\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 31\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"hover:text-red-600\",\n                                    onClick: function() {\n                                        return deleteTodo(todo.id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaTrash, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 106\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 31\n                                }, _this),\n                                \" | \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"hover:text-green-600\",\n                                    onClick: function() {\n                                        return changeEditing(todo.id);\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaEdit, {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 208\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 129\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 31\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 29\n                }, _this)\n            }, todo.id, false, {\n                fileName: \"C:\\\\Users\\\\HBS Work\\\\HBS\\\\cms-practice\\\\nextjs-todos\\\\components\\\\todo-list\\\\List.tsx\",\n                lineNumber: 49,\n                columnNumber: 21\n            }, _this);\n        })\n    }, void 0, false);\n};\n_s(List, \"qqJeL3OIsYalWrnnAvi0eX5gJY4=\");\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUw7Ozs7Ozt5QkFDRjtlQWpCTE8sSUFBSSxDQUFDUyxFQUFFOzs7O3FCQXFCWCxDQUNSO1FBQ0wsQ0FBQyxDQUFDO3FCQUNILENBQ047QUFDTCxDQUFDLENBQUM7R0FyRVdkLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvZG8tbGlzdC9MaXN0LnRzeD9iMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZhRWRpdCwgRmFUcmFzaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbIHRvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIGVkaXRpbmcsIHNldEVkaXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbIGVkaXREYXRhLCBzZXRFZGl0RGF0YV0gPSB1c2VTdGF0ZSh7dG9kbzogXCJcIn0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0RGF0YTogQXJyYXk8b2JqZWN0PiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RvRG9zJykpO1xyXG4gICAgICBcclxuICAgICAgICBpZiAobGlzdERhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgIHNldFRvZG9zKGxpc3REYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgICBjb25zdCBkZWxldGVUb2RvID0gKGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCByZW1haW5pbmdUb2RvczogQXJyYXk8c3RyaW5nPiA9IHRvZG9zLmZpbHRlcih0b2RvID0+IGlkICE9PSB0b2RvLmlkKTtcclxuICAgICAgICBzZXRUb2RvcyhyZW1haW5pbmdUb2Rvcyk7XHJcbiAgICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKHJlbWFpbmluZ1RvZG9zKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2hhbmdlRWRpdGluZyA9IChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgc2V0RWRpdGluZygoKSA9PiBpZCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAodmFsOiBzdHJpbmcsIGlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRvZG9zLmZpbmRJbmRleChvYmplY3QgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkID09PSBpZDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRvZG9zW2luZGV4XS50b2RvID0gdmFsO1xyXG4gICAgICAgICAgICB1cGRhdGVMb2NhbFN0b3JhZ2UodG9kb3MpO1xyXG4gICAgICAgICAgICBjaGFuZ2VFZGl0aW5nKFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRFZGl0RGF0YSh7dG9kbzogXCJcIn0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgY29uc3QgdXBkYXRlTG9jYWxTdG9yYWdlID0gKHRvZG9MaXN0OiBBcnJheTxzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1RvRG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+ICBcclxuICAgICAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXt0b2RvLmlkfSBjbGFzc05hbWU9XCJtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VkaXRpbmcgPT09IHRvZG8uaWQgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoKSA9PiB1cGRhdGVUb2RvKGVkaXREYXRhLnRvZG8sIHRvZG8uaWQpfSBpZD17dG9kby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JlZW4tNjAwJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIGJnLWdyYXktMjAwIGJvcmRlci1ub25lIHctZnVsbCB0ZXh0LWdyYXktNzAwIHBiLTIgZm9jdXM6b3V0bGluZS1ub25lIG1yLTVcIiBwbGFjZWhvbGRlcj17dG9kby50b2RvfSBvbkNoYW5nZT17KGUpID0+IHNldEVkaXREYXRhKHsgLi4udG9kby50b2RvLCB0b2RvOiBlLnRhcmdldC52YWx1ZSB9KX0gdmFsdWU9e2VkaXREYXRhLnRvZG99IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0J2NsYXNzTmFtZT0nIGhvdmVyOnRleHQtZ3JlZW4tNjAwJz48RmFFZGl0IC8+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1sZyc+e3RvZG8udG9kb308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2hvdmVyOnRleHQtcmVkLTYwMCcgb25DbGljaz17KCkgPT4gZGVsZXRlVG9kbyh0b2RvLmlkKX0+PEZhVHJhc2ggLz48L2J1dHRvbj4gfCA8YnV0dG9uIGNsYXNzTmFtZT0naG92ZXI6dGV4dC1ncmVlbi02MDAnb25DbGljaz17KCkgPT4gY2hhbmdlRWRpdGluZyh0b2RvLmlkKX0+PEZhRWRpdCAvPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRmFFZGl0IiwiRmFUcmFzaCIsIkxpc3QiLCJ0b2RvcyIsInNldFRvZG9zIiwiZWRpdGluZyIsInNldEVkaXRpbmciLCJ0b2RvIiwiZWRpdERhdGEiLCJzZXRFZGl0RGF0YSIsImxpc3REYXRhIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlbGV0ZVRvZG8iLCJpZCIsInJlbWFpbmluZ1RvZG9zIiwiZmlsdGVyIiwidXBkYXRlTG9jYWxTdG9yYWdlIiwiY2hhbmdlRWRpdGluZyIsInVwZGF0ZVRvZG8iLCJ2YWwiLCJpbmRleCIsImZpbmRJbmRleCIsIm9iamVjdCIsInRvZG9MaXN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm1hcCIsImxpIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/todo-list/List.tsx\n"));

/***/ })

});