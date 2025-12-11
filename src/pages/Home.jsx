import React from 'react'
import Hero from '../components/sections/Hero'
import MarqueeCarousel from '../components/sections/MarqueeCarousel'
import GallerySection from '../components/sections/GallerySection'
import PricingSection from '../components/sections/PricingSection'
import How_It_Works from '../components/sections/How_It_Works'
import AboutArtist from '../components/sections/AboutArtist'

const Home = () => (
  <>
    {/* Hero is fixed in background - always visible */}
    <Hero />

    <MarqueeCarousel />
    <How_It_Works />
    <PricingSection />
    <AboutArtist />
    <GallerySection />
  </>
)

export default Home