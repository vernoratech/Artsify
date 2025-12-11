import React from 'react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const FAQ = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <AnimateOnScroll animation="fadeUp" duration={700}>
        <h1 className="text-4xl font-serif text-gray-900 mb-4">FAQ</h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" duration={700} delay={100}>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">How long does a portrait take?</h3>
          <p className="text-gray-600">Typically 5-10 days depending on complexity and current queue.</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" duration={700} delay={200}>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Do you ship outside India?</h3>
          <p className="text-gray-600">International shipping is available on request with additional charges.</p>
        </div>
      </AnimateOnScroll>
    </div>
  </section>
)

export default FAQ
