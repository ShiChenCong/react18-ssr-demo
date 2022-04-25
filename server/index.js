// import Koa from "koa";
// import Router from '@koa/router'
// import serve from 'koa-static';
// import path from 'path'

const Koa = require('koa')
const Router = require('@koa/router')
const serve = require('koa-static')
const path = require('path')

import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { renderToString } from "react-dom/server";
import { matchPath } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server'
// import Home from "../client/page/home";
import store from '../client/store/index'
import AppRoute, { routeConfig } from '../client/route/index'

const app = new Koa();
const router = new Router()

router.get(/.*/, async (ctx, next) => {
  if (ctx.request.url.includes('.js')) {
    await next()
  } else {
    const promises = []
    const activeRoute = routeConfig.forEach(route => {
      if (route.path === ctx.request.url) {
        promises.push(route.loadData(store))
      }
    })
    await promises[0]
    const preloadedState = store.getState()
    console.log('请求完之后的数据', preloadedState)
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={ctx.request.url}>
          <AppRoute />
        </StaticRouter>
      </Provider>
    );
    ctx.response.body = `
    <html>
          <head>
    <title>ssr</title>
    </head>

    <body>
      <div id="root">${content}</div>
      <script src="./client/index.js"></script>
      <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
      /</g,
      '\\u003c'
    )}
    </script>
    </body>
    <html>
    `;
  }

});
const staticPath = path.join(__dirname, '..', '..', '/build');

app.use(router.routes())
  .use(serve('/Users/scc/draft/ssr-demo/build'))
app.listen(3000);
