import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../page/home'
import Login from '../page/login'

export default function Index() {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} ></Route>
      <Route path='/login' exact element={<Login />}></Route>
    </Routes>
  )
}