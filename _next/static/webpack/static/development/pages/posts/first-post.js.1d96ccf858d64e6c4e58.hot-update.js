webpackHotUpdate("static/development/pages/posts/first-post.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: siteTitle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"siteTitle\", function() { return siteTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Layout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.module.css */ \"./components/layout.module.css\");\n/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/util.module.css */ \"./styles/util.module.css\");\n/* harmony import */ var _styles_util_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/quad9/dev/next-blog/info/components/layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar name = \"Nobyuki Takahiro\";\nvar siteTitle = \"Blog Kumihan.com\";\nfunction Layout(_ref) {\n  var children = _ref.children,\n      home = _ref.home;\n  return __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/profile_image_Apple.ico\",\n    as: \"/profile_image_Apple.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"description\",\n    content: \"hogehoge\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }\n  })), __jsx(\"header\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, home ? __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/profile.jpg\",\n    className: \"\".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerHomeImage, \" \").concat(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderCircle),\n    alt: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, name)) : __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 15\n    }\n  }, __jsx(\"img\", {\n    src: \"/images/profile.jpg\",\n    className: \"\".concat(_layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.headerImage, \" \").concat(_styles_util_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.borderCircle),\n    alt: name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 17\n    }\n  }))), __jsx(\"h3\", {\n    style: \"font-weight: blod;\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, name))), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, children), !home && __jsx(\"div\", {\n    className: _layout_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.backToHome,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, \"\\u2190 Back to Home\"))));\n}\n_c = Layout;\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC5qcz8wOWE3Il0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhvbWUiLCJsYXlvdXRTdHlsZSIsImNvbnRhaW5lciIsImhlYWRlciIsImhlYWRlckhvbWVJbWFnZSIsInV0aWxTdHlsZSIsImJvcmRlckNpcmNsZSIsImhlYWRlckltYWdlIiwiYmFja1RvSG9tZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLGtCQUFiO0FBQ08sSUFBTUMsU0FBUyxHQUFHLGtCQUFsQjtBQUVRLFNBQVNDLE1BQVQsT0FBb0M7QUFBQSxNQUFsQkMsUUFBa0IsUUFBbEJBLFFBQWtCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ2pELFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFXLENBQUNDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQywwQkFBdEI7QUFDRSxNQUFFLDRCQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFO0FBQ0UsUUFBSSxFQUFDLGFBRFA7QUFFRSxXQUFPLEVBQUMsVUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQVFFO0FBQVEsYUFBUyxFQUFFRCx5REFBVyxDQUFDRSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dILElBQUksR0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFDRSxhQUFTLFlBQUtDLHlEQUFXLENBQUNHLGVBQWpCLGNBQW9DQyw4REFBUyxDQUFDQyxZQUE5QyxDQURYO0FBRUUsT0FBRyxFQUFFVixJQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0EsSUFBTCxDQUpGLENBREcsR0FRSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMscUJBQVQ7QUFDRSxhQUFTLFlBQUtLLHlEQUFXLENBQUNNLFdBQWpCLGNBQWdDRiw4REFBUyxDQUFDQyxZQUExQyxDQURYO0FBRUUsT0FBRyxFQUFFVixJQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFRRTtBQUFJLFNBQUssRUFBRSxvQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtDQSxJQUFsQyxDQVJGLENBVEosQ0FSRixFQTZCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dHLFFBREgsQ0E3QkYsRUFnQ0csQ0FBQ0MsSUFBRCxJQUNDO0FBQUssYUFBUyxFQUFFQyx5REFBVyxDQUFDTyxVQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREYsQ0FqQ0osQ0FERjtBQTBDRDtLQTNDdUJWLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgbGF5b3V0U3R5bGUgZnJvbSBcIi4vbGF5b3V0Lm1vZHVsZS5jc3NcIlxuaW1wb3J0IHV0aWxTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL3V0aWwubW9kdWxlLmNzc1wiXG5cbmNvbnN0IG5hbWUgPSBcIk5vYnl1a2kgVGFrYWhpcm9cIlxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9IFwiQmxvZyBLdW1paGFuLmNvbVwiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCBob21lIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0U3R5bGUuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9wcm9maWxlX2ltYWdlX0FwcGxlLmljb1wiXG4gICAgICAgICAgYXM9e3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9wcm9maWxlX2ltYWdlX0FwcGxlLmljbyd9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiaG9nZWhvZ2VcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2xheW91dFN0eWxlLmhlYWRlcn0+XG4gICAgICAgIHtob21lID8gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2xheW91dFN0eWxlLmhlYWRlckhvbWVJbWFnZX0gJHt1dGlsU3R5bGUuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgIGFsdD17bmFtZX0gLz5cbiAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtsYXlvdXRTdHlsZS5oZWFkZXJJbWFnZX0gJHt1dGlsU3R5bGUuYm9yZGVyQ2lyY2xlfWB9XG4gICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17XCJmb250LXdlaWdodDogYmxvZDtcIn0+e25hbWV9PC9oMz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvbWFpbj5cbiAgICAgIHshaG9tZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtsYXlvdXRTdHlsZS5iYWNrVG9Ib21lfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+4oaQIEJhY2sgdG8gSG9tZTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKSBcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.js\n");

/***/ })

})