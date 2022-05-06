import Koa from "koa";
import Router from "@koa/router";
import serve from "koa-static";
import path from "path";

import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import StyleContext from "isomorphic-style-loader/StyleContext";
import { getServerStore } from "../client/store/index";
import AppRoute, { routeConfig } from "../client/route/index";

const app = new Koa();
const router = new Router();
const store = getServerStore();

router.get(/.*/, async (ctx, next) => {
  if (ctx.request.url.includes(".js")) {
    await next();
  } else {
    const promises = [];
    routeConfig.forEach((route) => {
      if (route.path === ctx.request.url && route.loadData) {
        promises.push(route.loadData(store));
      }
    });
    if (promises.length > 0) {
      await Promise.all(promises);
    }
    const preloadedState = store.getState();

    const css = new Set();
    const insertCss = (...styles) =>
      styles.forEach((style) => css.add(style._getCss()));

    const content = renderToString(
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={ctx.request.url}>
            <AppRoute />
          </StaticRouter>
        </Provider>
      </StyleContext.Provider>
    );

    ctx.response.body = `
		<html>
		<head>
			<title>ssr</title>
      <style>${[...css].join("")}</style>
		</head>
		<body>
			<div id="root">${content}</div>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          "\\u003c"
        )}
			</script>
			<script src="./client/index.js"></script>
		</body>
		<html>
    `;
  }
});

const staticPath = path.resolve("./build");
app.use(router.routes()).use(serve(staticPath));

app.listen(3000);
