import React from 'react'

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-white via-sky-50 to-pink-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-sky-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">Handmade with Love</h2>
      <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight">
        Best gift for <br />
        <span className="italic text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-sky-400">any occasion</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-light mb-10 leading-relaxed">
        Transforming memories into timeless masterpieces. Specializing in realistic portraits, sketches, and custom acrylic art.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="/services"
          className="px-8 py-3 bg-gray-900 text-white font-serif text-lg rounded-md hover:bg-gray-800 transition-colors shadow-lg"
        >
          Start Your Order
        </a>
        <a
          href="/gallery"
          className="px-8 py-3 bg-white border border-gray-200 text-gray-800 font-serif text-lg rounded-md hover:border-pink-300 hover:text-pink-500 transition-colors"
        >
          View Gallery
        </a>
      </div>
    </div>

    <div className="absolute top-0 left-0 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
    <div className="absolute -bottom-32 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
  </section>
)

export default Hero
