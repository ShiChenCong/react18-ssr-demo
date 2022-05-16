import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import path from 'path';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { ChunkExtractor } from '@loadable/server';
import { getServerStore } from '../client/store/index';
import AppRoute, { routeConfig } from '../client/route/index';

const app = new Koa();
const router = new Router();
const store = getServerStore();
const extractor = new ChunkExtractor({ statsFile: path.resolve('./build/client/stats.json') });

router.get(/.*/, async (ctx, next) => {
  if (ctx.request.url.includes('.js')) {
    await next();
  } else {
    const promises = [];
    for (let i = 0; i < routeConfig.length; i++) {
      const route = routeConfig[i];
      if (route.path === ctx.request.url) {
        // eslint-disable-next-line no-await-in-loop
        const loadedComponent = await route.Component.load();
        if (loadedComponent.default?.loadData) {
          promises.push(loadedComponent.default.loadData(store));
        }
      }
    }
    if (promises.length > 0) {
      await Promise.all(promises);
    }
    const preloadedState = store.getState();

    const css = new Set();
    const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));

    renderToString(
      extractor.collectChunks(
        <StyleContext.Provider value={{ insertCss }}>
          <Provider store={store}>
            <StaticRouter location={ctx.request.url}>
              <AppRoute />
            </StaticRouter>
          </Provider>
        </StyleContext.Provider>,
      ),
    );

    const renderedScriptTags = extractor.getScriptTags();
    const renderedLinkTags = extractor.getLinkTags();
    const renderedStyleTags = extractor.getStyleTags();

    ctx.response.body = `
		<html>
		<head>
			<title>ssr</title>
      <link rel="shortcut icon" href="#"/>
      ${renderedLinkTags}
      ${renderedStyleTags}
		</head>
		<body>
			<div id="root"></div>
			<script>
				window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
    /</g,
    '\\u003c',
  )}
			</script>
      ${renderedScriptTags}
		</body>
		<html>
    `;
  }
});

const staticPath = path.resolve('./build');
app.use(router.routes()).use(serve(staticPath));

app.listen(3000);
