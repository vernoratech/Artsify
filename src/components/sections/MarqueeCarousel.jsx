import React from 'react'
import { artPieces } from '../../data/artPieces'

const MarqueeCarousel = () => {
  const squareImages = artPieces.filter((art) => art.aspect === 'square')
  const marqueeItems = [...squareImages, ...squareImages, ...squareImages]

  return (
    <div className="w-full bg-white py-12 overflow-hidden relative border-y border-gray-100">
      <div className="absolute top-0 left-0 w-32 h-full z-10 bg-linear-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full z-10 bg-linear-to-l from-white to-transparent pointer-events-none" />

      <div className="relative w-full flex overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-8">
          {marqueeItems.map((art, index) => (
            <div
              key={`${art.id}-${index}`}
              className="flex-shrink-0 w-48 h-48 bg-white p-2 border border-gray-100 shadow-sm rounded-lg hover:shadow-md hover:border-pink-200 transition-all duration-300"
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
        <div
          className="flex animate-marquee group-hover:[animation-play-state:paused] space-x-8 pl-8"
          aria-hidden="true"
        >
          {marqueeItems.map((art, index) => (
            <div
              key={`dup-${art.id}-${index}`}
              className="flex-shrink-0 w-48 h-48 bg-white p-2 border border-gray-100 shadow-sm rounded-lg hover:shadow-md hover:border-pink-200 transition-all duration-300"
            >
              <img
                src={art.src}
                alt={art.title}
                className="w-full h-full object-cover rounded-md grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-marquee { animation: marquee 40s linear infinite; }
        @keyframes blob { 0% { transform: translate(0px, 0px) scale(1); } 33% { transform: translate(30px, -50px) scale(1.1); } 66% { transform: translate(-20px, 20px) scale(0.9); } 100% { transform: translate(0px, 0px) scale(1); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}

export default MarqueeCarousel
