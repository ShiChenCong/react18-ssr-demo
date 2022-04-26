import React from "react";
import { hydrateRoot  } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Router from "./route/index";
import { getClientStore } from "./store/index";

const App = () => {
  const store = getClientStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

const container = document.getElementById("root");
console.log("执行hydrateRoot");
hydrateRoot(container, <App />);
