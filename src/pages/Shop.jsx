import React from 'react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Shop = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll animation="fadeUp" duration={800}>
        <h1 className="text-4xl font-serif text-gray-900 mb-6">Shop</h1>
        <p className="text-gray-600 mb-8">Coming soon: prints, originals, and digital downloads.</p>
      </AnimateOnScroll>
    </div>
  </section>
)

export default Shop
