import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Home, { getInitialProps } from '../page/home'
import Login from '../page/login'

const config = [
  {
    path: '/',
    element: <Home />,
    loadData: getInitialProps,
  },
  {
    path: '/login',
    element: <Login />
  }
]

export default function Index() {
  let element = useRoutes(config)
  return element
  // return (
  //   <Routes>
  //     <Route path='/' exact element={<Home />} ></Route>
  //     <Route path='/login' exact element={<Login />}></Route>
  //   </Routes>
  // )
}
export { config as routeConfig }