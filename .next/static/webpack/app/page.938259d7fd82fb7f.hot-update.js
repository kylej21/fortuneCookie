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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/button.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var _app_createSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/createSchema */ \"(app-pages-browser)/./app/createSchema.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_fortuneCookie_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/fortuneCookie.png */ \"(app-pages-browser)/./app/public/fortuneCookie.png\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { register, control, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(_app_createSchema__WEBPACK_IMPORTED_MODULE_3__.createSchema)\n    });\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    var fortuneText = \"\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex text-black h-full w-full flex-col items-center space-y-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-6xl text-black pb-10\",\n                children: \"Fortune Cookie Creator\"\n            }, void 0, false, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col text-4xl text-gray-800 items-center justify-center text-center space-y-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        className: \"pb-52\",\n                        children: \"CLICK ME!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        className: \"bg-gray-50\",\n                        onClick: async ()=>{\n                            try {\n                                var data = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"https://api.adviceslip.com/advice\");\n                                fortuneText = data.data.slip[\"advice\"];\n                                document.getElementById(\"FortuneOut\").textContent = fortuneText;\n                            } catch (error) {\n                                setError(\"Error fetching data\");\n                            }\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            alt: \"Fortune Cookie Pic\",\n                            src: _public_fortuneCookie_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-black pt-40 pb-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            id: \"FortuneOut\",\n                            children: \"Test text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"aro0Ngv0yn9qBNUWtBGCbOj89WE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ29EO0FBQ1U7QUFDcEM7QUFDSztBQUN1QjtBQUVKO0FBQ047QUFDZDtBQUN3QjtBQU10RCxNQUFNUyxPQUFPOztJQUNYLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixNQUFNLEVBQUNLLFFBQVEsRUFBRUMsT0FBTyxFQUFFQyxZQUFZLEVBQUMsR0FBR2Isd0RBQU9BLENBQVk7UUFDM0RjLFVBQVVWLG9FQUFXQSxDQUFDQywyREFBWUE7SUFDdEM7SUFDQSxNQUFNLENBQUNVLE9BQU1DLFNBQVMsR0FBRWIsK0NBQVFBLENBQUM7SUFFL0IsSUFBSWMsY0FBYztJQUNsQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFZOzBCQUE0Qjs7Ozs7OzBCQUc3Qyw4REFBQ0Q7Z0JBQUlDLFdBQVk7O2tDQUNmLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBUTs7Ozs7O2tDQUNyQiw4REFBQ2xCLG9EQUFNQTt3QkFBQ2tCLFdBQVU7d0JBQ2RFLFNBQVU7NEJBQ1IsSUFBSTtnQ0FDRixJQUFJQyxPQUFPLE1BQU1wQiw2Q0FBS0EsQ0FBQ3FCLEdBQUcsQ0FBQztnQ0FDM0JOLGNBQWFLLEtBQUtBLElBQUksQ0FBQ0UsSUFBSSxDQUFDLFNBQVM7Z0NBQ3JDQyxTQUFTQyxjQUFjLENBQUMsY0FBZUMsV0FBVyxHQUFHVjs0QkFDdkQsRUFBRSxPQUFPRixPQUFPO2dDQUNaQyxTQUFTOzRCQUNiO3dCQUNGO2tDQUNGLDRFQUFDVCxtREFBS0E7NEJBQ0pxQixLQUFNOzRCQUNOQyxLQUFNckIsaUVBQWFBOzRCQUNuQnNCLE9BQU87NEJBQ1BDLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDYjt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ2E7NEJBQUVDLElBQUc7c0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpDO0dBdkNNeEI7O1FBQ1dILHNEQUFTQTtRQUNrQk4sb0RBQU9BOzs7S0FGN0NTO0FBeUNOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHt1c2VGb3JtLCBDb250cm9sbGVyfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2FsbG91dCB9IGZyb20gJ0ByYWRpeC11aS90aGVtZXMnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCB7IFpvZFNjaGVtYSB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IGNyZWF0ZVNjaGVtYSB9IGZyb20gXCJAL2FwcC9jcmVhdGVTY2hlbWFcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgZm9ydHVuZUNvb2tpZSBmcm9tIFwiLi9wdWJsaWMvZm9ydHVuZUNvb2tpZS5wbmdcIlxuaW50ZXJmYWNlIElzc3VlRm9ybXtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7cmVnaXN0ZXIsIGNvbnRyb2wsIGhhbmRsZVN1Ym1pdH0gPSB1c2VGb3JtPElzc3VlRm9ybT4oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihjcmVhdGVTY2hlbWEpXG59KTtcbmNvbnN0IFtlcnJvcixzZXRFcnJvcl09IHVzZVN0YXRlKCcnKTtcbiAgXG4gIHZhciBmb3J0dW5lVGV4dCA9IFwiXCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtYmxhY2sgaC1mdWxsIHctZnVsbCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0xMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGV4dC02eGwgdGV4dC1ibGFjayBwYi0xMFwiPlxuICAgICAgICAgIEZvcnR1bmUgQ29va2llIENyZWF0b3JcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJmbGV4IGZsZXgtY29sIHRleHQtNHhsIHRleHQtZ3JheS04MDAgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIHNwYWNlLXktMTBcIj5cbiAgICAgICAgICA8YiBjbGFzc05hbWU9XCJwYi01MlwiPkNMSUNLIE1FITwvYj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIlxuICAgICAgICAgICAgICBvbkNsaWNrPSB7YXN5bmMoKSA9PntcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLmFkdmljZXNsaXAuY29tL2FkdmljZScpO1xuICAgICAgICAgICAgICAgICAgZm9ydHVuZVRleHQ9IGRhdGEuZGF0YS5zbGlwW1wiYWR2aWNlXCJdO1xuICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0ZvcnR1bmVPdXQnKSEudGV4dENvbnRlbnQgPSBmb3J0dW5lVGV4dDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgIGFsdCA9IFwiRm9ydHVuZSBDb29raWUgUGljXCJcbiAgICAgICAgICAgICAgc3JjID17Zm9ydHVuZUNvb2tpZX1cbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1ibGFjayBwdC00MCBwYi0zMlwiPlxuICAgICAgICAgICAgICA8cCBpZD1cIkZvcnR1bmVPdXRcIj5UZXN0IHRleHQ8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwibmFtZXMiOlsidXNlRm9ybSIsIkJ1dHRvbiIsImF4aW9zIiwidXNlU3RhdGUiLCJ6b2RSZXNvbHZlciIsImNyZWF0ZVNjaGVtYSIsInVzZVJvdXRlciIsIkltYWdlIiwiZm9ydHVuZUNvb2tpZSIsIkhvbWUiLCJyb3V0ZXIiLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJyZXNvbHZlciIsImVycm9yIiwic2V0RXJyb3IiLCJmb3J0dW5lVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsImIiLCJvbkNsaWNrIiwiZGF0YSIsImdldCIsInNsaXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhbHQiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});