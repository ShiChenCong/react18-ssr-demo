import Koa from 'koa';
import Router from '@koa/router';
import serve from 'koa-static';
import path from 'path';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import StyleContext from 'isomorphic-style-loader/StyleContext';

import { getServerStore } from '../client/store/index';
import AppRoute, { routeConfig } from '../client/route/index';

const app = new Koa();
const router = new Router();
const store = getServerStore();

const assets = {
  'main.js': '/client/index.js',
  'main.css': '/client/main.css',
};

router.get(/.*/, async (ctx, next) => {
  if (ctx.request.url.includes('.js') || ctx.request.url.includes('.css')) {
    await next();
  } else {
    const promises = [];
    for (let i = 0; i < routeConfig.length; i++) {
      const route = routeConfig[i];
      if (route.path === ctx.request.url) {
        // eslint-disable-next-line no-await-in-loop
        // const loadedComponent = await route.Component.load();
        // if (loadedComponent.default?.loadData) {
        //   promises.push(loadedComponent.default.loadData(store));
        // }
      }
    }
    if (promises.length > 0) {
      await Promise.all(promises);
    }
    const preloadedState = store.getState();

    const css = new Set();
    const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));

    const stream = renderToPipeableStream(
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={ctx.request.url}>
            <AppRoute assest={assets} />
          </StaticRouter>
        </Provider>
      </StyleContext.Provider>,
      {
        bootstrapScripts: [assets['main.js']],
        onShellReady() {
          ctx.response.status = 200;
          ctx.set('Content-type', 'text/html');

          stream.pipe(ctx.res);

        //   ctx.response.body = `
        // <html>
        // <head>
        //   <title>ssr</title>
        //   <link rel="shortcut icon" href="#"/>
        // </head>
        // <body>
        //   <div id="root"></div>
        //   <script>
        //   window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        //   </script>
        // </body>
        // <html>
        // `;
        },
        onShellError(error) {
          // Something errored before we could complete the shell so we emit an alternative shell.
          ctx.response.status = 500;
          ctx.response.body = `onShellError: ${error}`;
        },
        onError(error) {
          ctx.response.status = 500;
          ctx.response.body = `onError: ${error}`;
        },
      },
    );

    await next();
  }
});

const staticPath = path.resolve('./build');
app.use(router.routes()).use(serve(staticPath));

app.listen(3000);
