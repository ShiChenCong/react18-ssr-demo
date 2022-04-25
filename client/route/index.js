import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home, { getInitialProps } from '../page/home'
import Login from '../page/login'

export default function Index() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
      loadData: getInitialProps,
    },
    {
      path: '/login',
      element: <Login />
    }
  ])
  return element
  // return (
  //   <Routes>
  //     <Route path='/' exact element={<Home />} ></Route>
  //     <Route path='/login' exact element={<Login />}></Route>
  //   </Routes>
  // )
}