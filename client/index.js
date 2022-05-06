import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext";

import Router from "./route/index";
import { getClientStore } from "./store/index";

const insertCss = (...styles) => {
  const removeCss = styles.map((style) => style?._insertCss());
  return () => removeCss.forEach((dispose) => dispose());
};

const App = () => {
  const store = getClientStore();
  return (
    <StyleContext.Provider value={{ insertCss }}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </StyleContext.Provider>
  );
};

const container = document.getElementById("root");
console.log("执行hydrateRoot");
hydrateRoot(container, <App />);
