import React, { useState } from 'react'
import { ZoomIn, X as CloseIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import img24 from '../assets/Artsify-Client-Details/img24.jpg'
import img5 from '../assets/Artsify-Client-Details/img5.jpg'
import img20 from '../assets/Artsify-Client-Details/img20.jpg'
import img9 from '../assets/Artsify-Client-Details/img9.jpg'
import img8 from '../assets/Artsify-Client-Details/img8.jpg'
import img3 from '../assets/Artsify-Client-Details/img3.jpg'
import img18 from '../assets/Artsify-Client-Details/img18.webp'
import img2 from '../assets/Artsify-Client-Details/img2.jpg'
import img4 from '../assets/Artsify-Client-Details/img4.jpg'
import img1 from '../assets/Artsify-Client-Details/img1.jpg'

const artPieces = [
  { id: 1, src: img24, title: 'Ethereal Gaze', category: 'Portrait', aspect: 'vertical' },
  { id: 2, src: img5, title: 'Monochrome Study', category: 'Portrait', aspect: 'square' },
  { id: 9, src: img20, title: 'Divine Joy', category: 'Mythology', aspect: 'vertical' },
  { id: 3, src: img9, title: 'The Dark Knight', category: 'Comics', aspect: 'vertical' },
  { id: 4, src: img8, title: 'Thoughtful Sketch', category: 'Portrait', aspect: 'square' },
  { id: 5, src: img3, title: 'Visionary', category: 'Portrait', aspect: 'square' },
  { id: 6, src: img18, title: 'Eternal Bond', category: 'Commission', aspect: 'vertical' },
  { id: 7, src: img2, title: 'Serenity', category: 'Portrait', aspect: 'square' },
  { id: 8, src: img4, title: 'Self Portrait', category: 'Sketch', aspect: 'square' },
  { id: 10, src: img1, title: "Couple's Joy", category: 'Commission', aspect: 'square' },
]

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (image) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const showNext = (event) => {
    event.stopPropagation()
    if (!selectedImage) return
    const currentIndex = artPieces.findIndex((piece) => piece.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % artPieces.length
    setSelectedImage(artPieces[nextIndex])
  }

  const showPrev = (event) => {
    event.stopPropagation()
    if (!selectedImage) return
    const currentIndex = artPieces.findIndex((piece) => piece.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + artPieces.length) % artPieces.length
    setSelectedImage(artPieces[prevIndex])
  }
  const MarqueeCarousel = () => {
    // Filter specifically for square images
    const squareImages = artPieces.filter(art => art.aspect === 'square');

    // Duplicate the array 3 times to ensure we have enough width for seamless scrolling on wide screens
    const marqueeItems = [...squareImages, ...squareImages, ...squareImages];

    return (
      <div className="w-full bg-gray-900 py-16 overflow-hidden relative mt-12">
        <div className="text-center mb-10">
          <h3 className="text-white font-serif text-2xl tracking-widest uppercase opacity-90">Featured Sketches</h3>
          <div className="w-12 h-0.5 bg-white/30 mx-auto mt-4"></div>
        </div>

        {/* Gradient Masks for seamless fade effect at edges */}
        <div className="absolute top-0 left-0 w-24 sm:w-48 h-full z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 sm:w-48 h-full z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

        {/* Scrolling Track Container */}
        <div className="relative w-full flex overflow-hidden">
          {/* The Moving Track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] space-x-8">
            {marqueeItems.map((art, index) => (
              <div
                key={`${art.id}-${index}`}
                className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 bg-white p-2 shadow-xl transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x400/EEE/31343C?font=playfair-display&text=${art.title}`;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Duplicate Track immediately following to prevent gaps (Tailwind arbitrary values used for safety) */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] space-x-8 pl-8" aria-hidden="true">
            {marqueeItems.map((art, index) => (
              <div
                key={`dup-${art.id}-${index}`}
                className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 bg-white p-2 shadow-xl transform transition-transform hover:scale-105 duration-300"
              >
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    e.target.src = `https://placehold.co/400x400/EEE/31343C?font=playfair-display&text=${art.title}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Styles specifically for the marquee animation */}
        <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: marquee 40s linear infinite;
            }
        `}</style>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl sm:text-4xl font-serif text-gray-900 mb-4">Selected Works</h2>
          <div className="w-24 h-1 bg-gray-800 mx-auto opacity-20 rounded-full" />
          <p className="mt-4 text-gray-500 font-serif italic max-w-2xl mx-auto">
            A collection of moments captured in graphite and charcoal.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {artPieces.map((art) => (
            <div
              key={art.id}
              className="break-inside-avoid group relative cursor-zoom-in"
              onClick={() => openLightbox(art)}
            >
              <div className="bg-white p-2 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={art.src}
                    alt={art.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(event) => {
                      event.target.src = `https://placehold.co/${art.aspect === 'vertical' ? '600x900' : '800x800'
                        }/EEE/31343C?font=playfair-display&text=${encodeURIComponent(art.title)}`
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <p className="font-serif text-xl tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {art.title}
                    </p>
                    <p className="text-xs uppercase tracking-widest mt-1 opacity-80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {art.category}
                    </p>
                    <ZoomIn className="mt-4 w-6 h-6 opacity-60" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              closeLightbox()
            }}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors p-2 z-50"
          >
            <CloseIcon size={32} />
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hidden sm:block"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2 hidden sm:block"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded-sm"
              onError={(event) => {
                event.target.src = `https://placehold.co/${selectedImage.aspect === 'vertical' ? '600x900' : '800x800'
                  }/EEE/31343C?font=playfair-display&text=${encodeURIComponent(selectedImage.title)}`
              }}
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-serif">{selectedImage.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}
      <MarqueeCarousel />
    </div>

  )
}

export default Portfolio
