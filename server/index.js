import express from 'express';

import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { DataProvider } from '../client/context';

import { getServerStore } from '../client/store/index';
import AppRoute from '../client/route/index';

const routeConfig = AppRoute.config;
const app = express();
const store = getServerStore();

const assets = {
  'main.js': '/client/index.js',
  'main.css': '/client/styles.css',
};
const PROMISEDELAY = 2000;
const JS_DELAY = 3000;

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
        }, PROMISEDELAY);
      });
      //  throw Promise can cause Suspense
      throw suspender;
    },
  };
}

app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    setTimeout(next, JS_DELAY);
  } else {
    next();
  }
});

app.get('*', async (req, res, next) => {
  console.log('get into express');
  if (req.url.endsWith('.js') || req.url.endsWith('.css')) {
    next();
  } else {
    const promises = [];
    for (let i = 0; i < routeConfig.length; i++) {
      const route = routeConfig[i];
      if (route.path === req.url && route.loadData) {
        promises.push(route.loadData(store));
      }
    }
    if (promises.length > 0) {
      await Promise.all(promises);
    }
    const preloadedState = store.getState();

    const data = createServerData();
    let fail = false;
    const stream = renderToPipeableStream(
      <DataProvider data={data}>
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <AppRoute assest={assets} store={preloadedState} />
          </StaticRouter>
        </Provider>
      </DataProvider>,
      {
        bootstrapScripts: [assets['main.js']],
        onShellReady() {
          console.log('onShellReady');
          if (fail) return;
          res.statusCode = 200;
          res.setHeader('Content-type', 'text/html');
          stream.pipe(res);
        },
        onShellError(error) {
          fail = true;
          res.statusCode = 500;
          console.log(`onShellError: ${error}`);
          res.end();
        },
        onError(error) {
          fail = true;
          res.statusCode = 500;
          console.log(`onError: ${error}`);
          res.end();
        },
      },
    );
  }
});

app.use(express.static('build'));

app.listen(3000);
