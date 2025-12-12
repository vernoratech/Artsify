import React, { useState } from 'react'
import { Heart, Eye, Sparkles, Palette, ZoomIn } from 'lucide-react'

// Import all images from Artsify-Client-Details
import img1 from '../../assets/Artsify-Client-Details/img1.jpg'
import img2 from '../../assets/Artsify-Client-Details/img2.jpg'
import img3 from '../../assets/Artsify-Client-Details/img3.jpg'
import img4 from '../../assets/Artsify-Client-Details/img4.jpg'
import img5 from '../../assets/Artsify-Client-Details/img5.jpg'
import img6 from '../../assets/Artsify-Client-Details/img6.jpg'
import img7 from '../../assets/Artsify-Client-Details/img7.jpg'
import img8 from '../../assets/Artsify-Client-Details/img8.jpg'
import img9 from '../../assets/Artsify-Client-Details/img9.jpg'
import img10 from '../../assets/Artsify-Client-Details/img10.jpg'
import img11 from '../../assets/Artsify-Client-Details/img11.jpg'
import img12 from '../../assets/Artsify-Client-Details/img12.jpg'
import img13 from '../../assets/Artsify-Client-Details/img13.jpg'
import img14 from '../../assets/Artsify-Client-Details/img14.jpg'
import img15 from '../../assets/Artsify-Client-Details/img15.jpg'
import img16 from '../../assets/Artsify-Client-Details/img16.jpg'
import img17 from '../../assets/Artsify-Client-Details/img17.jpg'
import img18 from '../../assets/Artsify-Client-Details/img18.webp'
import img19 from '../../assets/Artsify-Client-Details/img19.jpg'
import img20 from '../../assets/Artsify-Client-Details/img20.jpg'
import img21 from '../../assets/Artsify-Client-Details/img21.jpg'
import img22 from '../../assets/Artsify-Client-Details/img22.jpg'
import img23 from '../../assets/Artsify-Client-Details/img23.jpg'
import img24 from '../../assets/Artsify-Client-Details/img24.jpg'
import img25 from '../../assets/Artsify-Client-Details/img25.jpg'

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [likedImages, setLikedImages] = useState(new Set())

  const categories = [
    { id: 'all', label: 'All Works', icon: Sparkles },
    { id: 'portraits', label: 'Portraits', icon: Palette },
    { id: 'couple', label: 'Couple Art', icon: Heart },
    { id: 'sketches', label: 'Sketches', icon: Eye },
  ]

  // Gallery items with actual images and sizes based on dimensions
  // tall = portrait (height > width), wide = landscape, normal = square
  const galleryItems = [
    // Square images (2992x2992, 2880x2880, etc.)
    { id: 1, src: img1, title: 'Eternal Grace', category: 'portraits', size: 'normal', views: 1234 },
    { id: 10, src: img10, title: 'Golden Moments', category: 'couple', size: 'wide', views: 2341 },

    // Tall portrait images (1080x1920)
    { id: 12, src: img12, title: 'Timeless Beauty', category: 'portraits', size: 'tall', views: 892 },

    // Square images
    { id: 16, src: img16, title: 'Together Forever', category: 'couple', size: 'normal', views: 567 },
    { id: 2, src: img2, title: 'Quiet Reflection', category: 'sketches', size: 'normal', views: 1876 },

    // Tall portrait (1080x1920)
    { id: 13, src: img13, title: 'Dreamy Essence', category: 'portraits', size: 'tall', views: 432 },

    // Square
    { id: 17, src: img17, title: 'Love Story', category: 'couple', size: 'normal', views: 3421 },
    { id: 3, src: img3, title: 'Pencil Dreams', category: 'sketches', size: 'normal', views: 789 },

    // Tall (720x1600)
    { id: 6, src: img6, title: 'Graceful Lines', category: 'sketches', size: 'tall', views: 1123 },

    // Square
    { id: 21, src: img21, title: 'Radiant Soul', category: 'portraits', size: 'wide', views: 2145 },
    { id: 4, src: img4, title: 'Soft Shadows', category: 'sketches', size: 'normal', views: 654 },

    // Tall (1080x1920)
    { id: 14, src: img14, title: 'Mystic Eyes', category: 'portraits', size: 'tall', views: 987 },

    // Square
    { id: 23, src: img23, title: 'Cherished Bond', category: 'couple', size: 'normal', views: 1567 },
    { id: 5, src: img5, title: 'Abstract Mind', category: 'sketches', size: 'normal', views: 823 },

    // Tall (3000x4000)
    { id: 19, src: img19, title: 'Soulful Gaze', category: 'portraits', size: 'tall', views: 2890 },

    // Square
    { id: 24, src: img24, title: 'Harmony', category: 'couple', size: 'normal', views: 1234 },
    { id: 7, src: img7, title: 'Quick Sketch', category: 'sketches', size: 'normal', views: 456 },

    // Tall (535x704)
    { id: 11, src: img11, title: 'Portrait Study', category: 'portraits', size: 'tall', views: 678 },

    // Square
    { id: 25, src: img25, title: 'Forever Yours', category: 'couple', size: 'wide', views: 1987 },
    { id: 8, src: img8, title: 'Character Art', category: 'sketches', size: 'normal', views: 345 },

    // Tall (1080x1920)
    { id: 15, src: img15, title: 'Elegant Pose', category: 'portraits', size: 'tall', views: 1456 },

    // Tall (603x1072)
    { id: 9, src: img9, title: 'Vertical Dreams', category: 'sketches', size: 'tall', views: 567 },

    // Tall (3000x4000)
    { id: 20, src: img20, title: 'Deep Thoughts', category: 'portraits', size: 'tall', views: 2345 },

    // Tall (576x720)
    { id: 18, src: img18, title: 'Soft Portrait', category: 'portraits', size: 'tall', views: 890 },

    // Tall (3000x4000)
    { id: 22, src: img22, title: 'Captured Moment', category: 'couple', size: 'tall', views: 1678 },
  ]

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const toggleLike = (e, id) => {
    e.stopPropagation()
    setLikedImages(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
            <Sparkles size={14} />
            Curated Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Masterpieces</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our collection of handcrafted artworks, each piece telling a unique story
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const IconComponent = cat.icon
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${activeCategory === cat.id
                  ? 'text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white text-gray-600 hover:text-gray-900 shadow-md hover:shadow-lg border border-gray-100'
                  }`}
              >
                {activeCategory === cat.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_100%] animate-gradient"></div>
                )}
                <IconComponent size={16} className="relative z-10" />
                <span className="relative z-10">{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Masonry Gallery - No gaps between images */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image - natural aspect ratio */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
              </div>

              {/* Top Actions */}
              <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                <button
                  onClick={(e) => toggleLike(e, item.id)}
                  className={`w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 ${likedImages.has(item.id)
                    ? 'bg-pink-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/40'
                    }`}
                >
                  <Heart size={16} className={likedImages.has(item.id) ? 'fill-current' : ''} />
                </button>
                {/* <button

                  className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                >
                  <ZoomIn size={16} />
                </button> */}
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-serif text-lg md:text-xl mb-1 drop-shadow-lg">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-pink-300 text-sm font-medium capitalize">
                    {item.category}
                  </span>
                  <span className="text-white/70 text-xs flex items-center gap-1">
                    <Eye size={12} />
                    {item.views.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 ${activeCategory === 'all' ? 'hidden' : 'block'} `}>
          <button
            type="button"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/25"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative z-10">Explore Full Gallery</span>
            <Sparkles size={18} className="relative z-10" />
          </button>
        </div>
      </div>


      {/* Add gradient animation keyframes via style tag */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  )
}

export default GallerySection
