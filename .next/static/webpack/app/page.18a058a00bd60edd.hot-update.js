"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _app_createSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/createSchema */ \"(app-pages-browser)/./app/createSchema.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_fortuneCookie_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/fortuneCookie.png */ \"(app-pages-browser)/./app/public/fortuneCookie.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { register, control, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_app_createSchema__WEBPACK_IMPORTED_MODULE_3__.createSchema)\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    var x = \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex text-black h-full w-full flex-col items-center space-y-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-6xl text-black pb-10\",\n                children: \"Fortune Cookie Creator\"\n            }, void 0, false, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-gray-600 w-1/2 text-center text-2xl pb-4\",\n                children: \"Welcome to Fortune Cookie Creator. This web application generates fortune cookie advice with the click of a button, so that you don't have to buy takeout every time you want advice! Just click on the cookie below to get started.\"\n            }, void 0, false, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-4xl text-gray-800 items-center justify-center text-center space-y-52\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"CLICK ME!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        className: \"bg-gray-50\",\n                        onClick: handleSubmit(async ()=>{\n                            try {\n                                var data = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"/api/issues\");\n                            } catch (error) {\n                                setError(\"Error fetching data\");\n                            }\n                            console.log(data);\n                        }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            alt: \"Fortune Cookie Pic\",\n                            src: _public_fortuneCookie_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"aro0Ngv0yn9qBNUWtBGCbOj89WE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ1U7QUFDcEM7QUFDSztBQUN1QjtBQUVKO0FBQ047QUFDZDtBQUN3QjtBQU10RCxNQUFNUyxPQUFPOztJQUNYLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLEVBQUNLLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUMsR0FBR2Isd0RBQU9BLENBQVk7UUFDM0RjLFVBQVVWLG9FQUFXQSxDQUFDQywyREFBWUE7SUFDdEM7SUFDQSxNQUFNLENBQUNVLE9BQU1DLFNBQVMsR0FBRWIsK0NBQVFBLENBQUM7SUFFL0IsSUFBSWMsSUFBSTtJQUNSLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVk7MEJBQTRCOzs7Ozs7MEJBRzdDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFBZ0Q7Ozs7OzswQkFHL0QsOERBQUNEO2dCQUFJQyxXQUFZOztrQ0FDZiw4REFBQ0M7a0NBQUU7Ozs7OztrQ0FDSCw4REFBQ25CLG9EQUFNQTt3QkFBQ2tCLFdBQVU7d0JBQ2RFLFNBQVNSLGFBQWE7NEJBQ3BCLElBQUk7Z0NBQ0EsSUFBSVMsT0FBTyxNQUFNcEIsNkNBQUtBLENBQUNxQixHQUFHLENBQUM7NEJBQy9CLEVBQUUsT0FBT1IsT0FBTztnQ0FDWkMsU0FBUzs0QkFDYjs0QkFDQVEsUUFBUUMsR0FBRyxDQUFDSDt3QkFDZDtrQ0FDRiw0RUFBQ2YsbURBQUtBOzRCQUNKbUIsS0FBTTs0QkFDTkMsS0FBTW5CLGlFQUFhQTs0QkFDbkJvQixPQUFPOzRCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU90QjtHQXRDTXBCOztRQUNXSCxzREFBU0E7UUFDa0JOLG9EQUFPQTs7O0tBRjdDUztBQXdDTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7dXNlRm9ybSwgQ29udHJvbGxlcn0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENhbGxvdXQgfSBmcm9tICdAcmFkaXgtdWkvdGhlbWVzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgeyBab2RTY2hlbWEgfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyBjcmVhdGVTY2hlbWEgfSBmcm9tIFwiQC9hcHAvY3JlYXRlU2NoZW1hXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IGZvcnR1bmVDb29raWUgZnJvbSBcIi4vcHVibGljL2ZvcnR1bmVDb29raWUucG5nXCJcbmludGVyZmFjZSBJc3N1ZUZvcm17XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qge3JlZ2lzdGVyLCBjb250cm9sLCBoYW5kbGVTdWJtaXR9ID0gdXNlRm9ybTxJc3N1ZUZvcm0+KHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIoY3JlYXRlU2NoZW1hKVxufSk7XG5jb25zdCBbZXJyb3Isc2V0RXJyb3JdPSB1c2VTdGF0ZSgnJyk7XG4gIFxuICB2YXIgeCA9IFwiXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtYmxhY2sgaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGV4dC02eGwgdGV4dC1ibGFjayBwYi0xMFwiPlxuICAgICAgICAgIEZvcnR1bmUgQ29va2llIENyZWF0b3JcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB3LTEvMiB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBwYi00XCI+XG4gICAgICAgICAgICBXZWxjb21lIHRvIEZvcnR1bmUgQ29va2llIENyZWF0b3IuIFRoaXMgd2ViIGFwcGxpY2F0aW9uIGdlbmVyYXRlcyBmb3J0dW5lIGNvb2tpZSBhZHZpY2Ugd2l0aCB0aGUgY2xpY2sgb2YgYSBidXR0b24sIHNvIHRoYXQgeW91IGRvbid0IGhhdmUgdG8gYnV5IHRha2VvdXQgZXZlcnkgdGltZSB5b3Ugd2FudCBhZHZpY2UhIEp1c3QgY2xpY2sgb24gdGhlIGNvb2tpZSBiZWxvdyB0byBnZXQgc3RhcnRlZC5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIHRleHQtNHhsIHRleHQtZ3JheS04MDAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHNwYWNlLXktNTJcIj5cbiAgICAgICAgICA8Yj5DTElDSyBNRSE8L2I+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0KGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvaXNzdWVzJyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGEnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICAgIH0pfT5cbiAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgYWx0ID0gXCJGb3J0dW5lIENvb2tpZSBQaWNcIlxuICAgICAgICAgICAgICBzcmMgPXtmb3J0dW5lQ29va2llfVxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSJdLCJuYW1lcyI6WyJ1c2VGb3JtIiwiQnV0dG9uIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsInpvZFJlc29sdmVyIiwiY3JlYXRlU2NoZW1hIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJmb3J0dW5lQ29va2llIiwiSG9tZSIsInJvdXRlciIsInJlZ2lzdGVyIiwiY29udHJvbCIsImhhbmRsZVN1Ym1pdCIsInJlc29sdmVyIiwiZXJyb3IiLCJzZXRFcnJvciIsIngiLCJkaXYiLCJjbGFzc05hbWUiLCJiIiwib25DbGljayIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiYWx0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});