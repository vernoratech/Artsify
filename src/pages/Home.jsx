import React from 'react'
import Hero from '../components/sections/Hero'
import MarqueeCarousel from '../components/sections/MarqueeCarousel'
import GallerySection from '../components/sections/GallerySection'
import PricingSection from '../components/sections/PricingSection'
import How_It_Works from '../components/sections/How_It_Works'

const Home = () => (
  <div className="relative">
    {/* Hero is fixed in background - always visible */}
    <Hero />

    {/* Spacer to allow hero to be visible initially */}
    <div className="h-screen" />

    {/* Scrollable content wrapper that slides over hero */}
    <div className="relative z-50 bg-white shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-gray-100">
      <MarqueeCarousel />
      <How_It_Works/>
      <PricingSection/>
      <GallerySection />
    </div>
  </div>
)

export default Home