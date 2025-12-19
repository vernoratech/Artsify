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

    {/* Excalidraw Canvas Section - Iframe Embed (Stable) */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            ✏️ Interactive Canvas
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            Draw Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Ideas</span>
          </h2>
          <p className="text-gray-600 mt-2">Sketch your vision and we'll bring it to life</p>
        </div>
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          style={{ height: "500px" }}
        >
          <iframe
            src="https://excalidraw.com/"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Excalidraw Canvas"
            allow="clipboard-read; clipboard-write"
          />
        </div>
        <p className="text-center text-sm text-gray-400 mt-4">
          Powered by Excalidraw • Your drawings are private and not saved
        </p>
      </div>
    </section>

  </>
)

export default Home