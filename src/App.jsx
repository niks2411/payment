import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ShigramPayHero from './components/ShigramPayHero'
import RecognitionCardsSection from './components/RecognitionCardsSection'
import OrbitSection from './components/OrbitSection'
import ScrollStackCards from './components/ScrollStackCards'
import FaceScanShowcase from './components/FaceScanShowcase'
import AcceptMethodsSection from './components/AcceptMethodsSection'
import FAQNew from './components/FAQNew'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <div className="font-inter text-ink">
      <ShigramPayHero />
      <RecognitionCardsSection />
      <FaceScanShowcase />
      <OrbitSection />
      <ScrollStackCards />
      <AcceptMethodsSection />
      <FAQNew />
      <DownloadCTA />
      <Footer />
    </div>
  )
}


