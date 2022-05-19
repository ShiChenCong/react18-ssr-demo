/* eslint-disable no-return-assign */
import React from 'react';

export default function Html({
  assets, children, title, store,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="stylesheet" type="text/css" href={assets['main.css']} />
        <title>{title}</title>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(store).replace(/</g, '\\u003c')}`,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: '<b>Enable JavaScript to run this app.</b>',
          }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `assetManifest = ${JSON.stringify(assets)};`,
          }}
        />
      </body>
    </html>
  );
}
