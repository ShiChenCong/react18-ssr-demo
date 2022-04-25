/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/page/home.js":
/*!*****************************!*\
  !*** ./client/page/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getInitialProps\": () => (/* binding */ getInitialProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ \"./client/store/index.js\");\n\n\n\n\nfunction Home(props) {\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // const [imageUrl, setImageUrl] = useState()\n  // useEffect(() => {\n  //   const fn = async () => {\n  //     const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())\n  //     setImageUrl(message)\n  //   }\n  //   fn()\n  // }, [])\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"home\",\n    onClick: () => {\n      console.log('this is log');\n      dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_3__.getImgUrl)());\n    }\n  }, \"this is React App render in server\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/login\"\n  }, \"go\"));\n}\nasync function getInitialProps(store) {\n  console.log('在服务端执行了getInitialProps', store.dispatch);\n  return store.dispatch((0,_store_index__WEBPACK_IMPORTED_MODULE_3__.getImgUrl)()); // const { message } = await fetch('https://dog.ceo/api/breeds/image/random', { mode: 'cors' }).then(res => res.json())\n  // return {\n  //   props: message\n  // }\n}\n\n//# sourceURL=webpack://ssr-demo/./client/page/home.js?");

/***/ }),

/***/ "./client/page/login.js":
/*!******************************!*\
  !*** ./client/page/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"login page\");\n}\n\n//# sourceURL=webpack://ssr-demo/./client/page/login.js?");

/***/ }),

/***/ "./client/route/index.js":
/*!*******************************!*\
  !*** ./client/route/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index),\n/* harmony export */   \"routeConfig\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/home */ \"./client/page/home.js\");\n/* harmony import */ var _page_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page/login */ \"./client/page/login.js\");\n\n\n\n\nconst config = [{\n  path: '/',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null),\n  loadData: _page_home__WEBPACK_IMPORTED_MODULE_2__.getInitialProps\n}, {\n  path: '/login',\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_page_login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n}];\nfunction Index() {\n  let element = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useRoutes)(config);\n  return element; // return (\n  //   <Routes>\n  //     <Route path='/' exact element={<Home />} ></Route>\n  //     <Route path='/login' exact element={<Login />}></Route>\n  //   </Routes>\n  // )\n}\n\n\n//# sourceURL=webpack://ssr-demo/./client/route/index.js?");

/***/ }),

/***/ "./client/store/index.js":
/*!*******************************!*\
  !*** ./client/store/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getImgUrl\": () => (/* binding */ getImgUrl)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getImgUrl = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)('counter/getImgUrl', async () => {\n  console.log('执行了接口请求');\n  const {\n    message\n  } = await fetch('https://dog.ceo/api/breeds/image/random', {\n    mode: 'cors'\n  }).then(res => res.json());\n  return message;\n});\nconst counterSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'counter',\n  initialState: {\n    value: 0,\n    url: ''\n  },\n  extraReducers: builder => {\n    builder.addCase(getImgUrl.fulfilled, (state, action) => {\n      state.url = action.payload;\n    });\n  },\n  reducers: {\n    incremented: state => {\n      state.value += 1;\n    },\n    decremented: state => {\n      state.value -= 1;\n    }\n  }\n});\nconst store = __webpack_require__.g ? (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: counterSlice.reducer\n}) : (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: counterSlice.reducer,\n  preloadedState: window.__PRELOADED_STATE__\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://ssr-demo/./client/store/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"/\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _client_store_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client/store/index */ \"./client/store/index.js\");\n/* harmony import */ var _client_route_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client/route/index */ \"./client/route/index.js\");\n// import Koa from \"koa\";\n// import Router from '@koa/router'\n// import serve from 'koa-static';\n// import path from 'path'\nconst Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst Router = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n\nconst serve = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst path = __webpack_require__(/*! path */ \"./node_modules/path-browserify/index.js\");\n\n\n\n\n\n\n // import Home from \"../client/page/home\";\n\n\n\nconst app = new Koa();\nconst router = new Router();\nrouter.get(/.*/, async (ctx, next) => {\n  if (ctx.request.url.includes('.js')) {\n    await next();\n  } else {\n    const promises = [];\n    const activeRoute = _client_route_index__WEBPACK_IMPORTED_MODULE_7__.routeConfig.forEach(route => {\n      if (route.path === ctx.request.url) {\n        promises.push(route.loadData(_client_store_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"]));\n      }\n    });\n    await promises[0];\n    const preloadedState = _client_store_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getState();\n    console.log('请求完之后的数据', preloadedState);\n    const content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n      store: _client_store_index__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_5__.StaticRouter, {\n      location: ctx.request.url\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_route_index__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null))));\n    ctx.response.body = `\n    <html>\n          <head>\n    <title>ssr</title>\n    </head>\n\n    <body>\n      <div id=\"root\">${content}</div>\n      <script src=\"./client/index.js\"></script>\n      <script>\n      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\\u003c')}\n    </script>\n    </body>\n    <html>\n    `;\n  }\n});\nconst staticPath = path.join(__dirname, '..', '..', '/build');\napp.use(router.routes()).use(serve('/Users/scc/draft/ssr-demo/build'));\napp.listen(3000);\n\n//# sourceURL=webpack://ssr-demo/./server/index.js?");

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/***/ ((module) => {

eval("// 'path' module extracted from Node.js v8.11.1 (only the posix part)\n// transplited with Babel\n\n// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nfunction assertPath(path) {\n  if (typeof path !== 'string') {\n    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));\n  }\n}\n\n// Resolves . and .. elements in a path with directory names\nfunction normalizeStringPosix(path, allowAboveRoot) {\n  var res = '';\n  var lastSegmentLength = 0;\n  var lastSlash = -1;\n  var dots = 0;\n  var code;\n  for (var i = 0; i <= path.length; ++i) {\n    if (i < path.length)\n      code = path.charCodeAt(i);\n    else if (code === 47 /*/*/)\n      break;\n    else\n      code = 47 /*/*/;\n    if (code === 47 /*/*/) {\n      if (lastSlash === i - 1 || dots === 1) {\n        // NOOP\n      } else if (lastSlash !== i - 1 && dots === 2) {\n        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {\n          if (res.length > 2) {\n            var lastSlashIndex = res.lastIndexOf('/');\n            if (lastSlashIndex !== res.length - 1) {\n              if (lastSlashIndex === -1) {\n                res = '';\n                lastSegmentLength = 0;\n              } else {\n                res = res.slice(0, lastSlashIndex);\n                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');\n              }\n              lastSlash = i;\n              dots = 0;\n              continue;\n            }\n          } else if (res.length === 2 || res.length === 1) {\n            res = '';\n            lastSegmentLength = 0;\n            lastSlash = i;\n            dots = 0;\n            continue;\n          }\n        }\n        if (allowAboveRoot) {\n          if (res.length > 0)\n            res += '/..';\n          else\n            res = '..';\n          lastSegmentLength = 2;\n        }\n      } else {\n        if (res.length > 0)\n          res += '/' + path.slice(lastSlash + 1, i);\n        else\n          res = path.slice(lastSlash + 1, i);\n        lastSegmentLength = i - lastSlash - 1;\n      }\n      lastSlash = i;\n      dots = 0;\n    } else if (code === 46 /*.*/ && dots !== -1) {\n      ++dots;\n    } else {\n      dots = -1;\n    }\n  }\n  return res;\n}\n\nfunction _format(sep, pathObject) {\n  var dir = pathObject.dir || pathObject.root;\n  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');\n  if (!dir) {\n    return base;\n  }\n  if (dir === pathObject.root) {\n    return dir + base;\n  }\n  return dir + sep + base;\n}\n\nvar posix = {\n  // path.resolve([from ...], to)\n  resolve: function resolve() {\n    var resolvedPath = '';\n    var resolvedAbsolute = false;\n    var cwd;\n\n    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {\n      var path;\n      if (i >= 0)\n        path = arguments[i];\n      else {\n        if (cwd === undefined)\n          cwd = process.cwd();\n        path = cwd;\n      }\n\n      assertPath(path);\n\n      // Skip empty entries\n      if (path.length === 0) {\n        continue;\n      }\n\n      resolvedPath = path + '/' + resolvedPath;\n      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;\n    }\n\n    // At this point the path should be resolved to a full absolute path, but\n    // handle relative paths to be safe (might happen when process.cwd() fails)\n\n    // Normalize the path\n    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);\n\n    if (resolvedAbsolute) {\n      if (resolvedPath.length > 0)\n        return '/' + resolvedPath;\n      else\n        return '/';\n    } else if (resolvedPath.length > 0) {\n      return resolvedPath;\n    } else {\n      return '.';\n    }\n  },\n\n  normalize: function normalize(path) {\n    assertPath(path);\n\n    if (path.length === 0) return '.';\n\n    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;\n    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;\n\n    // Normalize the path\n    path = normalizeStringPosix(path, !isAbsolute);\n\n    if (path.length === 0 && !isAbsolute) path = '.';\n    if (path.length > 0 && trailingSeparator) path += '/';\n\n    if (isAbsolute) return '/' + path;\n    return path;\n  },\n\n  isAbsolute: function isAbsolute(path) {\n    assertPath(path);\n    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;\n  },\n\n  join: function join() {\n    if (arguments.length === 0)\n      return '.';\n    var joined;\n    for (var i = 0; i < arguments.length; ++i) {\n      var arg = arguments[i];\n      assertPath(arg);\n      if (arg.length > 0) {\n        if (joined === undefined)\n          joined = arg;\n        else\n          joined += '/' + arg;\n      }\n    }\n    if (joined === undefined)\n      return '.';\n    return posix.normalize(joined);\n  },\n\n  relative: function relative(from, to) {\n    assertPath(from);\n    assertPath(to);\n\n    if (from === to) return '';\n\n    from = posix.resolve(from);\n    to = posix.resolve(to);\n\n    if (from === to) return '';\n\n    // Trim any leading backslashes\n    var fromStart = 1;\n    for (; fromStart < from.length; ++fromStart) {\n      if (from.charCodeAt(fromStart) !== 47 /*/*/)\n        break;\n    }\n    var fromEnd = from.length;\n    var fromLen = fromEnd - fromStart;\n\n    // Trim any leading backslashes\n    var toStart = 1;\n    for (; toStart < to.length; ++toStart) {\n      if (to.charCodeAt(toStart) !== 47 /*/*/)\n        break;\n    }\n    var toEnd = to.length;\n    var toLen = toEnd - toStart;\n\n    // Compare paths to find the longest common path from root\n    var length = fromLen < toLen ? fromLen : toLen;\n    var lastCommonSep = -1;\n    var i = 0;\n    for (; i <= length; ++i) {\n      if (i === length) {\n        if (toLen > length) {\n          if (to.charCodeAt(toStart + i) === 47 /*/*/) {\n            // We get here if `from` is the exact base path for `to`.\n            // For example: from='/foo/bar'; to='/foo/bar/baz'\n            return to.slice(toStart + i + 1);\n          } else if (i === 0) {\n            // We get here if `from` is the root\n            // For example: from='/'; to='/foo'\n            return to.slice(toStart + i);\n          }\n        } else if (fromLen > length) {\n          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {\n            // We get here if `to` is the exact base path for `from`.\n            // For example: from='/foo/bar/baz'; to='/foo/bar'\n            lastCommonSep = i;\n          } else if (i === 0) {\n            // We get here if `to` is the root.\n            // For example: from='/foo'; to='/'\n            lastCommonSep = 0;\n          }\n        }\n        break;\n      }\n      var fromCode = from.charCodeAt(fromStart + i);\n      var toCode = to.charCodeAt(toStart + i);\n      if (fromCode !== toCode)\n        break;\n      else if (fromCode === 47 /*/*/)\n        lastCommonSep = i;\n    }\n\n    var out = '';\n    // Generate the relative path based on the path difference between `to`\n    // and `from`\n    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {\n      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {\n        if (out.length === 0)\n          out += '..';\n        else\n          out += '/..';\n      }\n    }\n\n    // Lastly, append the rest of the destination (`to`) path that comes after\n    // the common path parts\n    if (out.length > 0)\n      return out + to.slice(toStart + lastCommonSep);\n    else {\n      toStart += lastCommonSep;\n      if (to.charCodeAt(toStart) === 47 /*/*/)\n        ++toStart;\n      return to.slice(toStart);\n    }\n  },\n\n  _makeLong: function _makeLong(path) {\n    return path;\n  },\n\n  dirname: function dirname(path) {\n    assertPath(path);\n    if (path.length === 0) return '.';\n    var code = path.charCodeAt(0);\n    var hasRoot = code === 47 /*/*/;\n    var end = -1;\n    var matchedSlash = true;\n    for (var i = path.length - 1; i >= 1; --i) {\n      code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          if (!matchedSlash) {\n            end = i;\n            break;\n          }\n        } else {\n        // We saw the first non-path separator\n        matchedSlash = false;\n      }\n    }\n\n    if (end === -1) return hasRoot ? '/' : '.';\n    if (hasRoot && end === 1) return '//';\n    return path.slice(0, end);\n  },\n\n  basename: function basename(path, ext) {\n    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('\"ext\" argument must be a string');\n    assertPath(path);\n\n    var start = 0;\n    var end = -1;\n    var matchedSlash = true;\n    var i;\n\n    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {\n      if (ext.length === path.length && ext === path) return '';\n      var extIdx = ext.length - 1;\n      var firstNonSlashEnd = -1;\n      for (i = path.length - 1; i >= 0; --i) {\n        var code = path.charCodeAt(i);\n        if (code === 47 /*/*/) {\n            // If we reached a path separator that was not part of a set of path\n            // separators at the end of the string, stop now\n            if (!matchedSlash) {\n              start = i + 1;\n              break;\n            }\n          } else {\n          if (firstNonSlashEnd === -1) {\n            // We saw the first non-path separator, remember this index in case\n            // we need it if the extension ends up not matching\n            matchedSlash = false;\n            firstNonSlashEnd = i + 1;\n          }\n          if (extIdx >= 0) {\n            // Try to match the explicit extension\n            if (code === ext.charCodeAt(extIdx)) {\n              if (--extIdx === -1) {\n                // We matched the extension, so mark this as the end of our path\n                // component\n                end = i;\n              }\n            } else {\n              // Extension does not match, so our result is the entire path\n              // component\n              extIdx = -1;\n              end = firstNonSlashEnd;\n            }\n          }\n        }\n      }\n\n      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;\n      return path.slice(start, end);\n    } else {\n      for (i = path.length - 1; i >= 0; --i) {\n        if (path.charCodeAt(i) === 47 /*/*/) {\n            // If we reached a path separator that was not part of a set of path\n            // separators at the end of the string, stop now\n            if (!matchedSlash) {\n              start = i + 1;\n              break;\n            }\n          } else if (end === -1) {\n          // We saw the first non-path separator, mark this as the end of our\n          // path component\n          matchedSlash = false;\n          end = i + 1;\n        }\n      }\n\n      if (end === -1) return '';\n      return path.slice(start, end);\n    }\n  },\n\n  extname: function extname(path) {\n    assertPath(path);\n    var startDot = -1;\n    var startPart = 0;\n    var end = -1;\n    var matchedSlash = true;\n    // Track the state of characters (if any) we see before our first dot and\n    // after any path separator we find\n    var preDotState = 0;\n    for (var i = path.length - 1; i >= 0; --i) {\n      var code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          // If we reached a path separator that was not part of a set of path\n          // separators at the end of the string, stop now\n          if (!matchedSlash) {\n            startPart = i + 1;\n            break;\n          }\n          continue;\n        }\n      if (end === -1) {\n        // We saw the first non-path separator, mark this as the end of our\n        // extension\n        matchedSlash = false;\n        end = i + 1;\n      }\n      if (code === 46 /*.*/) {\n          // If this is our first dot, mark it as the start of our extension\n          if (startDot === -1)\n            startDot = i;\n          else if (preDotState !== 1)\n            preDotState = 1;\n      } else if (startDot !== -1) {\n        // We saw a non-dot and non-path separator before our dot, so we should\n        // have a good chance at having a non-empty extension\n        preDotState = -1;\n      }\n    }\n\n    if (startDot === -1 || end === -1 ||\n        // We saw a non-dot character immediately before the dot\n        preDotState === 0 ||\n        // The (right-most) trimmed path component is exactly '..'\n        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n      return '';\n    }\n    return path.slice(startDot, end);\n  },\n\n  format: function format(pathObject) {\n    if (pathObject === null || typeof pathObject !== 'object') {\n      throw new TypeError('The \"pathObject\" argument must be of type Object. Received type ' + typeof pathObject);\n    }\n    return _format('/', pathObject);\n  },\n\n  parse: function parse(path) {\n    assertPath(path);\n\n    var ret = { root: '', dir: '', base: '', ext: '', name: '' };\n    if (path.length === 0) return ret;\n    var code = path.charCodeAt(0);\n    var isAbsolute = code === 47 /*/*/;\n    var start;\n    if (isAbsolute) {\n      ret.root = '/';\n      start = 1;\n    } else {\n      start = 0;\n    }\n    var startDot = -1;\n    var startPart = 0;\n    var end = -1;\n    var matchedSlash = true;\n    var i = path.length - 1;\n\n    // Track the state of characters (if any) we see before our first dot and\n    // after any path separator we find\n    var preDotState = 0;\n\n    // Get non-dir info\n    for (; i >= start; --i) {\n      code = path.charCodeAt(i);\n      if (code === 47 /*/*/) {\n          // If we reached a path separator that was not part of a set of path\n          // separators at the end of the string, stop now\n          if (!matchedSlash) {\n            startPart = i + 1;\n            break;\n          }\n          continue;\n        }\n      if (end === -1) {\n        // We saw the first non-path separator, mark this as the end of our\n        // extension\n        matchedSlash = false;\n        end = i + 1;\n      }\n      if (code === 46 /*.*/) {\n          // If this is our first dot, mark it as the start of our extension\n          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;\n        } else if (startDot !== -1) {\n        // We saw a non-dot and non-path separator before our dot, so we should\n        // have a good chance at having a non-empty extension\n        preDotState = -1;\n      }\n    }\n\n    if (startDot === -1 || end === -1 ||\n    // We saw a non-dot character immediately before the dot\n    preDotState === 0 ||\n    // The (right-most) trimmed path component is exactly '..'\n    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {\n      if (end !== -1) {\n        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);\n      }\n    } else {\n      if (startPart === 0 && isAbsolute) {\n        ret.name = path.slice(1, startDot);\n        ret.base = path.slice(1, end);\n      } else {\n        ret.name = path.slice(startPart, startDot);\n        ret.base = path.slice(startPart, end);\n      }\n      ret.ext = path.slice(startDot, end);\n    }\n\n    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';\n\n    return ret;\n  },\n\n  sep: '/',\n  delimiter: ':',\n  win32: null,\n  posix: null\n};\n\nposix.posix = posix;\n\nmodule.exports = posix;\n\n\n//# sourceURL=webpack://ssr-demo/./node_modules/path-browserify/index.js?");

/***/ }),

/***/ "@koa/router":
/*!******************************!*\
  !*** external "@koa/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@koa/router");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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