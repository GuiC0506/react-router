import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<App />} /> 
           <Route path='/about' element={<About />}/> 
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
