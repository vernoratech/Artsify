import React from 'react'
import { Heart } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

import { useNavigate } from 'react-router-dom'
import img24 from '../../assets/Artsify-Client-Details/img24.jpg'
import img11 from '../../assets/Artsify-Client-Details/img11.jpg'

const Hero = () => {
  const navigate = useNavigate()

  const handleOrderPortrait = () => {
    navigate('/services')
  }

  const handleViewGallery = () => {
    navigate('/gallery')
  }

  return (
    <section id="hero" className="relative pt-32 pb-12 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-br from-sky-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left z-10">
            <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Custom Portraits, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">
                Perfect for Any Occasion
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-light max-w-lg mx-auto lg:mx-0">
              Handcrafted realistic portraits, couple sketches, and custom phone cases made from your favorite memories.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleOrderPortrait}
                className="px-8 py-3 bg-gray-900 text-white font-serif text-lg rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Order a Portrait
              </button>
              <div className="flex gap-2">
                <button
                  onClick={handleViewGallery}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-serif rounded-full hover:border-pink-300 hover:text-pink-500 transition-all bg-white/50"
                >
                  View Gallery
                </button>
                <a
                  href="https://wa.me/+918446060142"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-3 border border-green-200 text-green-600 rounded-full hover:bg-green-50 transition-all flex items-center justify-center bg-white/50"
                  aria-label="Chat on WhatsApp"
                >
                  <FaWhatsapp size={30} />
                </a>
              </div>
            </div>
            <p className="mt-6 text-xs text-gray-400 tracking-wider uppercase flex items-center justify-center lg:justify-start gap-2">
              <Heart size={12} className="text-pink-400 fill-current" /> Handcrafted gifts made with love
            </p>
          </div>

          {/* Right Side: Collage */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Main Portrait */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white p-2 shadow-2xl rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
                <img src={img24} className="w-full h-full object-cover rounded-xl" alt="Realistic Portrait" onError={(e) => e.target.src = 'https://placehold.co/600x800/EEE/31343C?font=playfair-display&text=Portrait'} />
              </div>
              {/* Phone Case Overlap */}
              <div className="absolute bottom-4 left-4 w-1/2 h-2/3 bg-white p-2 shadow-xl rounded-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
                <img src={img11} className="w-full h-full object-cover rounded-xl" alt="Phone Case Art" onError={(e) => e.target.src = 'https://placehold.co/600x800/EEE/31343C?font=playfair-display&text=Phone Case Art'} />
              </div>
              {/* Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-sky-200 to-pink-200 rounded-full blur-3xl opacity-30 -z-10 animate-blob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
