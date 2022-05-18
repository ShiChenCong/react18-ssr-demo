// import Koa from 'koa';
import express from 'express';
// import Router from '@koa/router';
// import serve from 'koa-static';
import path from 'path';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import StyleContext from 'isomorphic-style-loader/StyleContext';
import { DataProvider } from '../client/context';

import { getServerStore } from '../client/store/index';
import AppRoute, { routeConfig } from '../client/route/index';

const app = express();
// const router = new Router();
const store = getServerStore();

const assets = {
  'main.js': '/client/index.js',
};
function createServerData() {
  let done = false;
  let suspender = null;
  return {
    read() {
      console.log('执行read', done, suspender);
      if (done) {
        return;
      }
      if (suspender) {
        throw suspender;
      }
      suspender = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          suspender = null;
          resolve();
        }, 2000);
      });
      throw suspender;
    },
  };
}
// app.use((ctx, res, next) => {
//   if (ctx.request.url.includes('.js') || ctx.request.url.includes('.css')) {
//     // Artificially delay serving JS
//     // to demonstrate streaming HTML.
//     setTimeout(next, 6000);
//   } else {
//     next();
//   }
// });
app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    // Artificially delay serving JS
    // to demonstrate streaming HTML.
    setTimeout(next, 2000);
  } else {
    next();
  }
});
app.get('/', async (req, res) => {
  // const promises = [];
  // for (let i = 0; i < routeConfig.length; i++) {
  //   const route = routeConfig[i];
  //   if (route.path === ctx.request.url && route.loadData) {
  //     promises.push(route.loadData(store));
  //   }
  // }
  // if (promises.length > 0) {
  //   await Promise.all(promises);
  // }
  // const preloadedState = store.getState();

  const css = new Set();
  const insertCss = (...styles) => styles.forEach((style) => css.add(style._getCss()));
  const data = createServerData();

  const stream = renderToPipeableStream(
    <DataProvider data={data}>
      <StyleContext.Provider value={{ insertCss }}>
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <AppRoute assest={assets} />
          </StaticRouter>
        </Provider>
      </StyleContext.Provider>
    </DataProvider>,
    {
      bootstrapScripts: [assets['main.js']],
      onShellReady() {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        stream.pipe(res);
        // ctx.res.write(`
        //     <script>
        //      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        //     </script>
        //     `);
      },
      onShellError(error) {
        // ctx.response.status = 500;
        // ctx.response.body = `onShellError: ${error}`;
      },
      onError(error) {
        // ctx.response.status = 500;
        // ctx.response.body = `onError: ${error}`;
      },
    },
  );
});

// const staticPath = path.resolve('./build');
// app.use(router.routes()).use(router.allowedMethods()).use(serve(staticPath));
// app.use(express.static(staticPath));
app.use(express.static('build'));

app.listen(3000);
