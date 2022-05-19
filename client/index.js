import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import AppRoute from './route/index';
import { getClientStore } from './store/index';

function App({ assets }) {
  const store = getClientStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoute assest={assets} store={store.getState()} />
      </BrowserRouter>
    </Provider>
  );
}

const container = document;
console.log('execute hydrateRoot');
hydrateRoot(container, <App assets={window.assetManifest} />);
