import React from 'react'
import { Sparkles } from 'lucide-react'

// Import images directly for better control
import img1 from '../../assets/Artsify-Client-Details/img1.jpg'
import img2 from '../../assets/Artsify-Client-Details/img2.jpg'
import img3 from '../../assets/Artsify-Client-Details/img3.jpg'
import img4 from '../../assets/Artsify-Client-Details/img4.jpg'
import img5 from '../../assets/Artsify-Client-Details/img5.jpg'
import img7 from '../../assets/Artsify-Client-Details/img7.jpg'
import img8 from '../../assets/Artsify-Client-Details/img8.jpg'
import img10 from '../../assets/Artsify-Client-Details/img10.jpg'
import img16 from '../../assets/Artsify-Client-Details/img16.jpg'
import img17 from '../../assets/Artsify-Client-Details/img17.jpg'
import img21 from '../../assets/Artsify-Client-Details/img21.jpg'
import img23 from '../../assets/Artsify-Client-Details/img23.jpg'
import img24 from '../../assets/Artsify-Client-Details/img24.jpg'
import img25 from '../../assets/Artsify-Client-Details/img25.jpg'

const MarqueeCarousel = () => {
  // Use square images for clean marquee display
  const marqueeImages = [
    { id: 1, src: img1, title: 'Whisper of Elegance' },
    { id: 2, src: img10, title: 'Moments in Gold' },
    { id: 3, src: img16, title: 'Bound by Love' },
    { id: 4, src: img2, title: 'Silent Contemplation' },
    { id: 5, src: img17, title: 'A Shared Journey' },
    { id: 6, src: img3, title: 'Lines of Emotion ' },
    { id: 7, src: img21, title: 'Inner Radiance' },
    { id: 8, src: img4, title: 'Shaded Serenity' },
    { id: 9, src: img23, title: 'A Precious Bond' },
    { id: 10, src: img5, title: 'Thoughts in Form' },
    { id: 11, src: img24, title: 'Balanced Beauty' },
    { id: 12, src: img7, title: 'Sketch in Motion' },
    { id: 13, src: img25, title: 'Promise Forever' },
    { id: 14, src: img8, title: 'Eyes That Speak' },
  ]

  // Duplicate for seamless loop
  const items = [...marqueeImages, ...marqueeImages]

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14 px-4 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
          <Sparkles size={14} />
          Featured Works
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-3">
          A Glimpse of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Artistry</span>
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Scroll through our handcrafted masterpieces that capture emotions and memories
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Left Fade Gradient */}
        <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-40 h-full z-20 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none"></div>

        {/* Right Fade Gradient */}
        <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-40 h-full z-20 bg-gradient-to-l from-gray-50 via-gray-50/80 to-transparent pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-4 md:gap-6">
            {items.map((item, index) => (
              <div
                key={`item-${item.id}-${index}`}
                className="flex-shrink-0 group/card relative"
              >
                {/* Card */}
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-1.5 md:p-2 border border-gray-100 hover:border-pink-200">
                  {/* Image */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/card:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                      <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-serif text-sm md:text-base lg:text-lg drop-shadow-lg">
                          {item.title}
                        </h4>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                    <div className="absolute top-2 right-2 w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] gap-4 md:gap-6" aria-hidden="true">
            {items.map((item, index) => (
              <div
                key={`dup-${item.id}-${index}`}
                className="flex-shrink-0 group/card relative"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white p-1.5 md:p-2 border border-gray-100 hover:border-pink-200">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover/card:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                      <div className="transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white font-serif text-sm md:text-base lg:text-lg drop-shadow-lg">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover/card:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 md:w-10 md:h-10 opacity-0 group-hover/card:opacity-100 transition-all duration-300">
                    <div className="absolute top-2 right-2 w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-10 md:mt-14 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-300 to-transparent rounded-full"></div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}

export default MarqueeCarousel
