// import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.scss'
import './assets/styles/tailwind.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import DefaultLayout from './layouts';
import HomePage from './pages/HomePage'
import Search from './pages/Search'
import Manga from './pages/Manga'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
    <Router>
      <DefaultLayout>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<Search />} />
            <Route path='/manga/:id' element={<Manga />} />
        </Routes>
      </DefaultLayout>
    </Router>
  // </React.StrictMode>
)
