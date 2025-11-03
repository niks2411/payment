import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import App from './App'
import Policy from './pages/Policy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<><Policy /><Footer /></>} />
        <Route path="/terms" element={<><Terms /><Footer /></>} />
        <Route path="/refund" element={<><Refund /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



