import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import StyleContext from 'isomorphic-style-loader/StyleContext';

import AppRoute from './route/index';
import { getClientStore } from './store/index';

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style?._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

function App({ assets }) {
  const store = getClientStore();
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute assest={assets} />
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
}

// const container = document.getElementById("root");
const container = document;
console.log('执行hydrateRoot');
hydrateRoot(container, <App assets={window.assetManifest} />);
