import React from "react";
import { useRoutes } from "react-router-dom";
// import Home, { getInitialProps } from "../page/home";
// import Login from "../page/login";
import loadable from '@loadable/component'

const Home = loadable(() => import('../page/home'))
const Login = loadable(() => import('../page/Login'))

const config = [
  {
    path: "/",
    Component: Home,
    // loadData: getInitialProps,
  },
  {
    path: "/login",
    Component: Login,
  },
];

export default function Index() {
  const handledConfig = config.map(i => {
    const { Component } = i
    i.element = <Component />
    return i
  })
  let element = useRoutes(handledConfig);
  return element;
}

export { config as routeConfig };
