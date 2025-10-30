import React from 'react'
import ShigramPayHero from './components/ShigramPayHero'
import RecognitionCardsSection from './components/RecognitionCardsSection'
import OrbitSection from './components/OrbitSection'
import AcceptMethodsSection from './components/AcceptMethodsSection'
import FAQNew from './components/FAQNew'
import DownloadCTA from './components/DownloadCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-inter text-ink">
      <ShigramPayHero />
      <RecognitionCardsSection />
      <OrbitSection />
      <AcceptMethodsSection />
      <FAQNew />
      <DownloadCTA />
      <Footer />
    </div>
  )
}


