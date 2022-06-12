import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import './assets/styles/tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  </React.StrictMode>
)
