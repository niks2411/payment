import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import App from './App'
import Policy from './pages/Policy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Personal from './pages/Personal'
import Business from './pages/Business'
import Grievance from './pages/Grievance'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Footer from './components/Footer'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<><Policy /><Footer /></>} />
        <Route path="/terms-and-condition" element={<><Terms /><Footer /></>} />
        <Route path="/refund" element={<><Refund /><Footer /></>} />
        <Route path="/personal" element={<><Personal /><Footer /></>} />
        <Route path="/business" element={<><Business /><Footer /></>} />
        <Route path="/grievance" element={<><Grievance /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/admin" element={<><Admin /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)



