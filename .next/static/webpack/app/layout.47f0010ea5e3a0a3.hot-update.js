"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d34450fb3a2f\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzQwNjciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJkMzQ0NTBmYjNhMmZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/NavBar.tsx":
/*!************************!*\
  !*** ./app/NavBar.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_HiAcademicCap_react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HiAcademicCap!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.esm.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const currentPath = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    console.log(currentPath);\n    const links = [\n        {\n            label: \"Description\",\n            href: \"/\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex space-x-6 border-b mb-5 px-5 h-14 items-center bg-gradient-to-b from-orange-200 to-amber-100\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                className: \"text-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiAcademicCap_react_icons_hi2__WEBPACK_IMPORTED_MODULE_4__.HiAcademicCap, {}, void 0, false, {\n                    fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/NavBar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 47\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/NavBar.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex space-x-6\",\n                children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: link.href,\n                        className: \"\".concat(link.href === currentPath ? \"text-zinc-900\" : \"text-zinc-500\", \" hover:text-zinc-800 transition-colors\"),\n                        children: link.label\n                    }, link.href, false, {\n                        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/NavBar.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/NavBar.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kylejohnson/Documents/frameworkPractice/fortuneCookie/app/NavBar.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"Kq/pFyCJeBVplFX/N2LPdnlQv24=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9OYXZCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ0c7QUFDb0I7QUFDSDtBQUU3QyxNQUFNSSxTQUFTOztJQUVYLE1BQU1DLGNBQVlGLDREQUFXQTtJQUM3QkcsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLE1BQU1HLFFBQU07UUFDUjtZQUFDQyxPQUFPO1lBQWVDLE1BQUs7UUFBRztLQUNsQztJQUNILHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ1gsa0RBQUlBO2dCQUFDUyxNQUFLO2dCQUFJRSxXQUFVOzBCQUFhLDRFQUFDViwrRkFBYUE7Ozs7Ozs7Ozs7MEJBRXBELDhEQUFDVztnQkFBR0QsV0FBVTswQkFDVEosTUFBTU0sR0FBRyxDQUFDQyxDQUFBQSxxQkFDWCw4REFBQ2Qsa0RBQUlBO3dCQUVEUyxNQUFNSyxLQUFLTCxJQUFJO3dCQUNmRSxXQUFXLEdBQTZELE9BQTFERyxLQUFLTCxJQUFJLEtBQUdMLGNBQWMsa0JBQWdCLGlCQUFnQjtrQ0FBMENVLEtBQUtOLEtBQUs7dUJBRnZITSxLQUFLTCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O0FBTzlCO0dBckJNTjs7UUFFZ0JELHdEQUFXQTs7O0tBRjNCQztBQXVCTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvTmF2QmFyLnRzeD9mNDc5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEhpQWNhZGVtaWNDYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGkyXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbidcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBjdXJyZW50UGF0aD11c2VQYXRobmFtZSgpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQYXRoKVxuICAgIGNvbnN0IGxpbmtzPVtcbiAgICAgICAge2xhYmVsOiAnRGVzY3JpcHRpb24nLCBocmVmOlwiL1wifSxcbiAgICBdXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtNiBib3JkZXItYiBtYi01IHB4LTUgaC0xNCBpdGVtcy1jZW50ZXIgYmctZ3JhZGllbnQtdG8tYiBmcm9tLW9yYW5nZS0yMDAgdG8tYW1iZXItMTAwXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPSd0ZXh0LWJsYWNrJz48SGlBY2FkZW1pY0NhcCAvPlxuPC9MaW5rPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTZcIj5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAobGluayA9PiBcbiAgICAgICAgICAgIDxMaW5rIFxuICAgICAgICAgICAgICAgIGtleT17bGluay5ocmVmfVxuICAgICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2xpbmsuaHJlZj09PWN1cnJlbnRQYXRoID8gJ3RleHQtemluYy05MDAnOid0ZXh0LXppbmMtNTAwJ30gaG92ZXI6dGV4dC16aW5jLTgwMCB0cmFuc2l0aW9uLWNvbG9yc2B9PntsaW5rLmxhYmVsfVxuICAgICAgICAgICAgPC9MaW5rPil9XG4gICAgICAgIDwvdWw+ICAgIFxuICAgIDwvbmF2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhciJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJIaUFjYWRlbWljQ2FwIiwidXNlUGF0aG5hbWUiLCJOYXZCYXIiLCJjdXJyZW50UGF0aCIsImNvbnNvbGUiLCJsb2ciLCJsaW5rcyIsImxhYmVsIiwiaHJlZiIsIm5hdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/NavBar.tsx\n"));

/***/ })

});