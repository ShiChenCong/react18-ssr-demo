import React from 'react'
import ReactDom from 'react-dom'
import { hydrateRoot, createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './route/index'
import store from './store/index'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

const container = document.getElementById('root')
console.log('执行hydrateRoot')
const root = hydrateRoot(container, <App />)
