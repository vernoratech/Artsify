import React from 'react'
import Hero from '../components/sections/Hero'
import MarqueeCarousel from '../components/sections/MarqueeCarousel'
import GallerySection from '../components/sections/GallerySection'
import PricingSection from '../components/sections/PricingSection'
import How_It_Works from '../components/sections/How_It_Works'
import AboutArtist from '../components/sections/AboutArtist'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import SocialProof from '../components/sections/SocialProof'
import LatestCreations from '../components/sections/LatestCreations'

const Home = () => (
  <>
    {/* Hero is fixed in background - always visible */}
    <Hero />

    <AnimateOnScroll animation="fadeUp" duration={800}>
      <MarqueeCarousel />
    </AnimateOnScroll>

    <AnimateOnScroll animation="fadeUp" duration={800} delay={100}>
      <How_It_Works />
    </AnimateOnScroll>

    <AnimateOnScroll animation="scaleUp" duration={800}>
      <PricingSection />
    </AnimateOnScroll>

    <AnimateOnScroll animation="fadeUp" duration={800}>
      <LatestCreations />
    </AnimateOnScroll>

    <AnimateOnScroll animation="fadeUp" duration={900}>
      <AboutArtist />
    </AnimateOnScroll>

    <AnimateOnScroll animation="fadeUp" duration={800}>
      <SocialProof />
    </AnimateOnScroll>
  </>
)

export default Home