/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/page/home.js":
/*!*****************************!*\
  !*** ./client/page/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getInitialProps\": () => (/* binding */ getInitialProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ \"./client/store/index.js\");\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.css */ \"./client/page/home.css\");\n/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Home() {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n  const state = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"home\",\n    onClick: () => {\n      dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_3__.getImgUrl)());\n    }\n  }, \"this is React App render in server\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, state.url), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/login\"\n  }, \"go\"));\n}\nasync function getInitialProps(store) {\n  // console.log('在服务端执行了getInitialProps', store.dispatch)\n  return store.dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_3__.getImgUrl)());\n}\n\n//# sourceURL=webpack://ssr-demo/./client/page/home.js?");

/***/ }),

/***/ "./client/page/login.js":
/*!******************************!*\
  !*** ./client/page/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.css */ \"./client/page/login.css\");\n/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"login\"\n  }, \"login page\");\n}\n\n//# sourceURL=webpack://ssr-demo/./client/page/login.js?");

/***/ }),

/***/ "./client/route/index.js":
/*!*******************************!*\
  !*** ./client/route/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"routeConfig\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/home */ \"./client/page/home.js\");\n/* harmony import */ var _page_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/login */ \"./client/page/login.js\");\n\n\n\n\nconst config = [{\n  path: '/',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n  loadData: _page_home__WEBPACK_IMPORTED_MODULE_2__.getInitialProps\n}, {\n  path: '/login',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n}];\nfunction Index() {\n  let element = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(config);\n  return element; // return (\n  //   <Routes>\n  //     <Route path='/' exact element={<Home />} ></Route>\n  //     <Route path='/login' exact element={<Login />}></Route>\n  //   </Routes>\n  // )\n}\n\n\n//# sourceURL=webpack://ssr-demo/./client/route/index.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getClientStore\": () => (/* binding */ getClientStore),\n/* harmony export */   \"getImgUrl\": () => (/* binding */ getImgUrl),\n/* harmony export */   \"getServerStore\": () => (/* binding */ getServerStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getImgUrl = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"counter/getImgUrl\", async () => {\n  const {\n    message\n  } = await fetch(\"https://dog.ceo/api/breeds/image/random\", {\n    mode: \"cors\"\n  }).then(res => res.json());\n  return message;\n});\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: \"counter\",\n  initialState: {\n    value: 0,\n    url: \"\"\n  },\n  extraReducers: builder => {\n    builder.addCase(getImgUrl.fulfilled, (state, action) => {\n      state.url = action.payload;\n    });\n  },\n  reducers: {\n    incremented: state => {\n      state.value += 1;\n    },\n    decremented: state => {\n      state.value -= 1;\n    }\n  }\n});\n\nconst getServerStore = () => {\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: counterSlice.reducer\n  });\n};\n\nconst getClientStore = () => {\n  return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    preloadedState: window?.__PRELOADED_STATE__,\n    reducer: counterSlice.reducer\n  });\n};\n\n\n\n//# sourceURL=webpack://ssr-demo/./client/store/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-style-loader/StyleContext */ \"isomorphic-style-loader/StyleContext\");\n/* harmony import */ var isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _client_store_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../client/store/index */ \"./client/store/index.js\");\n/* harmony import */ var _client_route_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client/route/index */ \"./client/route/index.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\nconst router = new (_koa_router__WEBPACK_IMPORTED_MODULE_1___default())();\nconst store = (0,_client_store_index__WEBPACK_IMPORTED_MODULE_9__.getServerStore)();\nrouter.get(/.*/, async (ctx, next) => {\n  if (ctx.request.url.includes(\".js\")) {\n    await next();\n  } else {\n    const promises = [];\n    _client_route_index__WEBPACK_IMPORTED_MODULE_10__.routeConfig.forEach(route => {\n      if (route.path === ctx.request.url && route.loadData) {\n        promises.push(route.loadData(store));\n      }\n    });\n\n    if (promises.length > 0) {\n      await Promise.all(promises);\n    }\n\n    const preloadedState = store.getState();\n    const css = new Set();\n\n    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));\n\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_6__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((isomorphic_style_loader_StyleContext__WEBPACK_IMPORTED_MODULE_8___default().Provider), {\n      value: {\n        insertCss\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n      store: store\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_7__.StaticRouter, {\n      location: ctx.request.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_client_route_index__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null)))));\n    ctx.response.body = `\n\t\t<html>\n\t\t<head>\n\t\t\t<title>ssr</title>\n      <style>${[...css].join(\"\")}</style>\n\t\t</head>\n\t\t<body>\n\t\t\t<div id=\"root\">${content}</div>\n\t\t\t<script>\n\t\t\t\twindow.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, \"\\\\u003c\")}\n\t\t\t</script>\n\t\t\t<script src=\"./client/index.js\"></script>\n\t\t</body>\n\t\t<html>\n    `;\n  }\n});\nconst staticPath = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(\"./build\");\napp.use(router.routes()).use(koa_static__WEBPACK_IMPORTED_MODULE_2___default()(staticPath));\napp.listen(3000);\n\n//# sourceURL=webpack://ssr-demo/./server/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/home.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/home.css ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".home {\\n  color: lightblue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ssr-demo/./client/page/home.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/login.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/login.css ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".login {\\n  background-color: green;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ssr-demo/./client/page/login.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ssr-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ssr-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./client/page/home.css":
/*!******************************!*\
  !*** ./client/page/home.css ***!
  \******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./home.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/home.css\");\n    var insertCss = __webpack_require__(/*! !../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://ssr-demo/./client/page/home.css?");

/***/ }),

/***/ "./client/page/login.css":
/*!*******************************!*\
  !*** ./client/page/login.css ***!
  \*******************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n    var refs = 0;\n    var css = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../node_modules/postcss-loader/dist/cjs.js!./login.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./client/page/login.css\");\n    var insertCss = __webpack_require__(/*! !../../node_modules/isomorphic-style-loader/insertCss.js */ \"./node_modules/isomorphic-style-loader/insertCss.js\");\n    var content = typeof css === 'string' ? [[module.id, css, '']] : css;\n\n    exports = module.exports = css.locals || {};\n    exports._getContent = function() { return content; };\n    exports._getCss = function() { return '' + css; };\n    exports._insertCss = function(options) { return insertCss(content, options) };\n\n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack://ssr-demo/./client/page/login.css?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/insertCss.js":
/*!***********************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/insertCss.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
eval("/*! Isomorphic Style Loader | MIT License | https://github.com/kriasoft/isomorphic-style-loader */\n\n\n\nvar inserted = {};\n\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode(\"0x\" + p1);\n  }));\n}\n\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(id);\n\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\nfunction insertCss(styles, _temp) {\n  var _ref = _temp === void 0 ? {} : _temp,\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === void 0 ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === void 0 ? false : _ref$prepend,\n      _ref$prefix = _ref.prefix,\n      prefix = _ref$prefix === void 0 ? 's' : _ref$prefix;\n\n  var ids = [];\n\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = styles[i],\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n    var id = \"\" + prefix + moduleId + \"-\" + i;\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n    var elem = document.getElementById(id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n\n    if (sourceMap && typeof btoa === 'function') {\n      cssText += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + b64EncodeUnicode(JSON.stringify(sourceMap)) + \"*/\";\n      cssText += \"\\n/*# sourceURL=\" + sourceMap.file + \"?\" + id + \"*/\";\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n//# sourceMappingURL=insertCss.js.map\n\n\n//# sourceURL=webpack://ssr-demo/./node_modules/isomorphic-style-loader/insertCss.js?");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
eval("// 'path' module extracted from Node.js v8.11.1 (only the posix part)\n// transplited with Babel\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nfunction assertPath(path) {\n  if (typeof path !== 'string') {\n    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));\n  }\n}\n\n// Resolves . and .. elements in a path with directory names\nfunction normalizeStringPosix(path, allowAboveRoot) {\n  var res = '';\n  var lastSegmentLength = 0;\n  var lastSlash = -1;\n  var dots = 0;\n  var code;\n  for (var i = 0; i <= path.length; ++i) {\n    if (i < path.length)\n      code = path.charCodeAt(i);\n    else if (code === 47 /*/*/)\n      break;\n    else\n      code = 47 /*/*/;\n    if (code === 47 /*/*/) {\n      if (lastSlash === i - 1 || dots === 1) {\n        // NOOP\n      } else if (lastSlash !== i - 1 && dots === 2) {\n        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {\n          if (res.length > 2) {\n            var lastSlashIndex = res.lastIndexOf('/');\n            if (lastSlashIndex !== res.length - 1) {\n              if (lastSlashIndex === -1) {\n                res = '';\n                lastSegmentLength = 0;\n              } else {\n                res = res.slice(0, lastSlashIndex);\n                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');\n              }\n              lastSlash = i;\n              dots = 0;\n              continue;\n            }\n          } else if (res.length === 2 || res.length === 1) {\n            res = '';\n            lastSegmentLength = 0;\n            lastSlash = i;\n            dots = 0;\n            continue;\n          }\n        }\n        if (allowAboveRoot) {\n          if (res.length > 0)\n            res += '/..';\n          else\n            res = '..';\n          lastSegmentLength = 2;\n        }\n      } else {\n        if (res.length > 0)\n          res += '/' + path.slice(lastSlash + 1, i);\n        else\n          res = path.slice(lastSlash + 1, i);\n        lastSegmentLength = i - lastSlash - 1;\n      }\n      lastSlash = i;\n      dots = 0;\n    } else if (code === 46 /*.*/ && dots !== -1) {\n      ++dots;\n    } else {\n      dots = -1;\n    }\n  }\n  return res;\n}\n\nfunction _format(sep, pathObject) {\n  var dir = pathObject.dir || pathObject.root;\n  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');\n  if (!dir) {\n    return base;\n  }\n  if (dir === pathObject.root) {\n    return dir + base;\n  }\n  return dir + sep + base;\n}\n\nvar posix = {\n  // path.resolve([from ...], to)\n  resolve: function resolve() {\n    var resolvedPath = '';\n    var resolvedAbsolute = false;\n    var cwd;\n\n    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n      var path;\n      if (i >= 0)\n        path = arguments[i];\n      else {\n        if (cwd === undefined)\n          cwd = process.cwd();\n        path = cwd;\n      }\n\n      assertPath(path);\n\n      // Skip empty entries\n      if (path.length === 0) {\n        continue;\n      }\n\n      resolvedPath = path + '/' + resolvedPath;\n      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;\n    }\n\n    // At this point the path should be resolved to a full absolute path, but\n    // handle relative paths to be safe (might happen when process.cwd() fails)\n\n    // Normalize the path\n    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);\n\n    if (resolvedAbsolute) {\n      if (resolvedPath.length > 0)\n        return '/' + resolvedPath;\n      else\n        return '/';\n    } else if (resolvedPath.length > 0) {\n      return resolvedPath;\n    } else {\n      return '.';\n    }\n  },\n\n  normalize: function normalize(path) {\n    assertPath(path);\n\n    if (path.length === 0) return '.';\n\n    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;\n    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;\n\n    // Normalize the path\n    path = normalizeStringPosix(path, !isAbsolute);\n\n    if (path.length === 0 && !isAbsolute) path = '.';\n    if (path.length > 0 && trailingSeparator) path += '/';\n\n    if (isAbsolute) return '/' + path;\n    return path;\n  },\n\n  isAbsolute: function isAbsolute(path) {\n    assertPath(path);\n    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;\n  },\n\n  join: function join() {\n    if (arguments.length === 0)\n      return '.';\n    var joined;\n    for (var i = 0; i < arguments.length; ++i) {\n      var arg = arguments[i];\n      assertPath(arg);\n      if (arg.length > 0) {\n        if (joined === undefined)\n          joined = arg;\n        else\n          joined += '/' + arg;\n      }\n    }\n    if (joined === undefined)\n      return '.';\n    return posix.normalize(joined);\n  },\n\n  relative: function relative(from, to) {\n    assertPath(from);\n    assertPath(to);\n\n    if (from === to) return '';\n\n    from = posix.resolve(from);\n    to = posix.resolve(to);\n\n    if (from === to) return '';\n\n    // Trim any leading backslashes\n    var fromStart = 1;\n    for (; fromStart < from.length; ++fromStart) {\n      if (from.charCodeAt(fromStart) !== 47 /*/*/)\n        break;\n    }\n    var fromEnd = from.length;\n    var fromLen = fromEnd - fromStart;\n\n    // Trim any leading backslashes\n    var toStart = 1;\n    for (; toStart < to.length; ++toStart) {\n      if (to.charCodeAt(toStart) !== 47 /*/*/)\n        break;\n    }\n    var toEnd = to.length;\n    var toLen = toEnd - toStart;\n\n    // Compare paths to find the longest common path from root\n    var length = fromLen < toLen ? fromLen : toLen;\n    var lastCommonSep = -1;\n    var i = 0;\n    for (; i <= length; ++i) {\n      if (i === length) {\n        if (toLen > length) {\n          if (to.charCodeAt(toStart + i) === 47 /*/*/) {\n            // We get here if `from` is the exact base path for `to`.\n            // For example: from='/foo/bar'; to='/foo/bar/baz'\n            return to.slice(toStart + i + 1);\n          } else if (i === 0) {\n            // We get here if `from` is the root\n            // For example: from='/'; to='/foo'\n            return to.slice(toStart + i);\n          }\n        } else if (fromLen > length) {\n          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {\n            // We get here if `to` is the exact base path for `from`.\n            // For example: from='/foo/bar/baz'; to='/foo/bar'\n            lastCommonSep = i;\n          } else if (i === 0) {\n            // We get here if `to` is the root.\n            // For example: from='/foo'; to='/'\n            lastCommonSep = 0;\n          }\n        }\n        break;\n      }\n      var fromCode = from.charCodeAt(fromStart + i);\n      var toCode = to.charCodeAt(toStart + i);\n      if (fromCode !== toCode)\n        break;\n      else if (fromCode === 47 /*/*/)\n        lastCommonSep = i;\n    }\n\n    var out = '';\n    // Generate the relative path based on the path difference between `to`\n    // and `from`\n    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {\n      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {\n        if (out.length === 0)\n          out += '..';\n        else\n          out += '/..';\n      }\n    }\n\n    // Lastly, append the rest of the destination (`to`) path that comes after\n    // the common path parts\n    if (out.length > 0)\n      return out + to.slice(toStart + lastCommonSep);\n    else {\n      toStart += lastCommonSep;\n      if (to.charCodeAt(toStart) === 47 /*/*/)\n        ++toStart;\n      return to.slice(toStart);\n    }\n  },\n\n  _makeLong: function _makeLong(path) {\n    return path;\n  },\n\n  dirname: function dirname(path) {\n    assertPath(path);\n    if (path.length === 0) return '.';\n    var code = path.charCodeAt(0);\n    var hasRoot = code === 47 /*/*/;\n    var end = -1;\n    var matchedSlash = true;\n    for (var i = path.length - 1; i >= 1; --i) {\n      code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          if (!matchedSlash) {\n            end = i;\n            break;\n          }\n        } else {\n        // We saw the first non-path separator\n        matchedSlash = false;\n      }\n    }\n\n    if (end === -1) return hasRoot ? '/' : '.';\n    if (hasRoot && end === 1) return '//';\n    return path.slice(0, end);\n  },\n\n  basename: function basename(path, ext) {\n    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('\"ext\" argument must be a string');\n    assertPath(path);\n\n    var start = 0;\n    var end = -1;\n    var matchedSlash = true;\n    var i;\n\n    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {\n      if (ext.length === path.length && ext === path) return '';\n      var extIdx = ext.length - 1;\n      var firstNonSlashEnd = -1;\n      for (i = path.length - 1; i >= 0; --i) {\n        var code = path.charCodeAt(i);\n        if (code === 47 /*/*/) {\n            // If we reached a path separator that was not part of a set of path\n            // separators at the end of the string, stop now\n            if (!matchedSlash) {\n              start = i + 1;\n              break;\n            }\n          } else {\n          if (firstNonSlashEnd === -1) {\n            // We saw the first non-path separator, remember this index in case\n            // we need it if the extension ends up not matching\n            matchedSlash = false;\n            firstNonSlashEnd = i + 1;\n          }\n          if (extIdx >= 0) {\n            // Try to match the explicit extension\n            if (code === ext.charCodeAt(extIdx)) {\n              if (--extIdx === -1) {\n                // We matched the extension, so mark this as the end of our path\n                // component\n                end = i;\n              }\n            } else {\n              // Extension does not match, so our result is the entire path\n              // component\n              extIdx = -1;\n              end = firstNonSlashEnd;\n            }\n          }\n        }\n      }\n\n      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;\n      return path.slice(start, end);\n    } else {\n      for (i = path.length - 1; i >= 0; --i) {\n        if (path.charCodeAt(i) === 47 /*/*/) {\n            // If we reached a path separator that was not part of a set of path\n            // separators at the end of the string, stop now\n            if (!matchedSlash) {\n              start = i + 1;\n              break;\n            }\n          } else if (end === -1) {\n          // We saw the first non-path separator, mark this as the end of our\n          // path component\n          matchedSlash = false;\n          end = i + 1;\n        }\n      }\n\n      if (end === -1) return '';\n      return path.slice(start, end);\n    }\n  },\n\n  extname: function extname(path) {\n    assertPath(path);\n    var startDot = -1;\n    var startPart = 0;\n    var end = -1;\n    var matchedSlash = true;\n    // Track the state of characters (if any) we see before our first dot and\n    // after any path separator we find\n    var preDotState = 0;\n    for (var i = path.length - 1; i >= 0; --i) {\n      var code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          // If we reached a path separator that was not part of a set of path\n          // separators at the end of the string, stop now\n          if (!matchedSlash) {\n            startPart = i + 1;\n            break;\n          }\n          continue;\n        }\n      if (end === -1) {\n        // We saw the first non-path separator, mark this as the end of our\n        // extension\n        matchedSlash = false;\n        end = i + 1;\n      }\n      if (code === 46 /*.*/) {\n          // If this is our first dot, mark it as the start of our extension\n          if (startDot === -1)\n            startDot = i;\n          else if (preDotState !== 1)\n            preDotState = 1;\n      } else if (startDot !== -1) {\n        // We saw a non-dot and non-path separator before our dot, so we should\n        // have a good chance at having a non-empty extension\n        preDotState = -1;\n      }\n    }\n\n    if (startDot === -1 || end === -1 ||\n        // We saw a non-dot character immediately before the dot\n        preDotState === 0 ||\n        // The (right-most) trimmed path component is exactly '..'\n        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n      return '';\n    }\n    return path.slice(startDot, end);\n  },\n\n  format: function format(pathObject) {\n    if (pathObject === null || typeof pathObject !== 'object') {\n      throw new TypeError('The \"pathObject\" argument must be of type Object. Received type ' + typeof pathObject);\n    }\n    return _format('/', pathObject);\n  },\n\n  parse: function parse(path) {\n    assertPath(path);\n\n    var ret = { root: '', dir: '', base: '', ext: '', name: '' };\n    if (path.length === 0) return ret;\n    var code = path.charCodeAt(0);\n    var isAbsolute = code === 47 /*/*/;\n    var start;\n    if (isAbsolute) {\n      ret.root = '/';\n      start = 1;\n    } else {\n      start = 0;\n    }\n    var startDot = -1;\n    var startPart = 0;\n    var end = -1;\n    var matchedSlash = true;\n    var i = path.length - 1;\n\n    // Track the state of characters (if any) we see before our first dot and\n    // after any path separator we find\n    var preDotState = 0;\n\n    // Get non-dir info\n    for (; i >= start; --i) {\n      code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          // If we reached a path separator that was not part of a set of path\n          // separators at the end of the string, stop now\n          if (!matchedSlash) {\n            startPart = i + 1;\n            break;\n          }\n          continue;\n        }\n      if (end === -1) {\n        // We saw the first non-path separator, mark this as the end of our\n        // extension\n        matchedSlash = false;\n        end = i + 1;\n      }\n      if (code === 46 /*.*/) {\n          // If this is our first dot, mark it as the start of our extension\n          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;\n        } else if (startDot !== -1) {\n        // We saw a non-dot and non-path separator before our dot, so we should\n        // have a good chance at having a non-empty extension\n        preDotState = -1;\n      }\n    }\n\n    if (startDot === -1 || end === -1 ||\n    // We saw a non-dot character immediately before the dot\n    preDotState === 0 ||\n    // The (right-most) trimmed path component is exactly '..'\n    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n      if (end !== -1) {\n        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);\n      }\n    } else {\n      if (startPart === 0 && isAbsolute) {\n        ret.name = path.slice(1, startDot);\n        ret.base = path.slice(1, end);\n      } else {\n        ret.name = path.slice(startPart, startDot);\n        ret.base = path.slice(startPart, end);\n      }\n      ret.ext = path.slice(startDot, end);\n    }\n\n    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';\n\n    return ret;\n  },\n\n  sep: '/',\n  delimiter: ':',\n  win32: null,\n  posix: null\n};\n\nposix.posix = posix;\n\nmodule.exports = posix;\n\n\n//# sourceURL=webpack://ssr-demo/./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@koa/router");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "isomorphic-style-loader/StyleContext":
/*!*******************************************************!*\
  !*** external "isomorphic-style-loader/StyleContext" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("isomorphic-style-loader/StyleContext");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;