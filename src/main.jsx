import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import App from './App'
import Policy from './pages/Policy'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<><Policy /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



