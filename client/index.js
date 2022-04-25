import React from 'react'
import ReactDom from 'react-dom'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/index'

const App = () => {
  return <BrowserRouter>
    <Router />
  </BrowserRouter>
}

const container = document.getElementById('root')
console.log('执行hydrateRoot')
const root = hydrateRoot(container, <App />)
