import React, { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { loadData } from '../page/home/fetch';
import Html from '../html';

const Home = lazy(() => import('../page/home'));
const Login = lazy(() => import('../page/login'));

const config = [
  {
    path: '/',
    Component: Home,
    loadData,
  },
  {
    path: '/login',
    Component: Login,
  },
];

function Spinner() {
  console.log('this is Spinner');
  return <div>this is Spinner</div>;
}

export default function Index({ assest }) {
  const handledConfig = config.map((i) => {
    const { Component } = i;
    i.element = <Component />;
    return i;
  });
  const element = useRoutes(handledConfig);
  return (
    <Html assets={assest}>
      <Suspense fallback={<Spinner />}>{element}</Suspense>
    </Html>
  );
}

export { config as routeConfig };
