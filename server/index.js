// import Koa from "koa";
// import Router from '@koa/router'
// import serve from 'koa-static';
// import path from 'path'

const Koa = require('koa')
const Router = require('@koa/router')
const serve = require('koa-static')
const path = require('path')

import React from 'react'
import { renderToString } from "react-dom/server";
import { StaticRouter } from 'react-router-dom/server'
// import Home from "../client/page/home";
import AppRoute from '../client/route/index'

const app = new Koa();
const router = new Router()

router.get(/.*/, async (ctx, next) => {
  if (ctx.request.url.includes('.js')) {
    await next()
  } else {
    const content = renderToString(
      <StaticRouter location={ctx.request.url}>
        <AppRoute />
      </StaticRouter>
    );
    ctx.response.body = `
    <html>
          <head>
    <title>ssr</title>
    </head>

    <body>
      <div id="root">${content}</div>
      <script src="./client/index.js"></script>
    </body>
    <html>
    `;
  }

});
const staticPath = path.join(__dirname, '..', '..', '/build');

app.use(router.routes())
  .use(serve('/Users/scc/draft/ssr-demo/build'))
app.listen(3000);
