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
    element: <Home />,
    // loadData: getInitialProps,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default function Index() {
  let element = useRoutes(config);
  return element;
}

export { config as routeConfig };
