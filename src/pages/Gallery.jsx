import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Heart, Eye, Sparkles, Palette, ZoomIn, X, ChevronLeft, ChevronRight, Camera, Users, Award, ArrowRight, Smartphone } from 'lucide-react'
import { MdFamilyRestroom } from "react-icons/md";
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import { useNavigate } from 'react-router-dom'

// Import all images from Artsify-Client-Details
import img1 from '../assets/Artsify-Client-Details/img1.jpg'
import img2 from '../assets/Artsify-Client-Details/img2.jpg'
import img3 from '../assets/Artsify-Client-Details/img3.jpg'
import img4 from '../assets/Artsify-Client-Details/img4.jpg'
import img5 from '../assets/Artsify-Client-Details/img5.jpg'
import img6 from '../assets/Artsify-Client-Details/img6.jpg'
import img7 from '../assets/Artsify-Client-Details/img7.jpg'
import img8 from '../assets/Artsify-Client-Details/img8.jpg'
import img9 from '../assets/Artsify-Client-Details/img9.jpg'
import img10 from '../assets/Artsify-Client-Details/img10.jpg'
import img11 from '../assets/Artsify-Client-Details/img11.jpg'
import img12 from '../assets/Artsify-Client-Details/img12.jpg'
import img13 from '../assets/Artsify-Client-Details/img13.jpg'
import img14 from '../assets/Artsify-Client-Details/img14.jpg'
import img15 from '../assets/Artsify-Client-Details/img15.jpg'
import img16 from '../assets/Artsify-Client-Details/img16.jpg'
import img17 from '../assets/Artsify-Client-Details/img17.jpg'
import img18 from '../assets/Artsify-Client-Details/img18.webp'
import img19 from '../assets/Artsify-Client-Details/img19.jpg'
import img20 from '../assets/Artsify-Client-Details/img20.jpg'
import img21 from '../assets/Artsify-Client-Details/img21.jpg'
import img22 from '../assets/Artsify-Client-Details/img22.jpg'
import img23 from '../assets/Artsify-Client-Details/img23.jpg'
import img24 from '../assets/Artsify-Client-Details/img24.jpg'
import img25 from '../assets/Artsify-Client-Details/img25.jpg'
import img26 from '../assets/Artsify-Client-Details/img26.jpg'
import img27 from '../assets/Artsify-Client-Details/img27.jpg'
import img28 from '../assets/Artsify-Client-Details/img28.jpg'
import img29 from '../assets/Artsify-Client-Details/img29.jpg'
import img30 from '../assets/Artsify-Client-Details/img30.jpg'
import img31 from '../assets/Artsify-Client-Details/img31.jpeg'
import img32 from '../assets/Artsify-Client-Details/img32.jpeg'
import img33 from '../assets/Artsify-Client-Details/img33.jpeg'



const Gallery = () => {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState('all')
  const [likedImages, setLikedImages] = useState(new Set())
  const [selectedImage, setSelectedImage] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)

  // Marquee interactive controls
  const marqueeRef = React.useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const categories = [
    { id: 'all', label: 'All Works', icon: Sparkles },
    { id: 'portraits', label: 'Portraits', icon: Palette },
    { id: 'couple', label: 'Couple Art', icon: Heart },
    { id: 'sketches', label: 'Sketches', icon: Eye },
    { id: 'phonecovers', label: 'Phone Covers', icon: Smartphone },
    { id: 'family', label: 'Family', icon: MdFamilyRestroom },
  ]

const galleryItems = [
  { id: 1, src: img1, title: 'Whisper of Elegance', category: 'couple', size: 'normal', views: 1234 },
  { id: 10, src: img10, title: 'Moments in Gold', category: 'portraits', size: 'wide', views: 2341 },
  { id: 12, src: img12, title: 'Classic Charm', category: 'phonecovers', size: 'tall', views: 892 },
  { id: 16, src: img16, title: 'Bound by Love', category: 'sketches', size: 'normal', views: 567 },
  { id: 2, src: img2, title: 'Silent Contemplation', category: 'portraits', size: 'normal', views: 1876 },
  { id: 13, src: img13, title: 'Soft Daydream', category: 'phonecovers', size: 'tall', views: 432 },
  { id: 17, src: img17, title: 'A Shared Journey', category: 'sketches', size: 'normal', views: 3421 },
  { id: 3, src: img3, title: 'Lines of Emotion', category: 'portraits', size: 'normal', views: 789 },
  { id: 6, src: img6, title: 'Flowing Expressions', category: 'portraits', size: 'tall', views: 1123 },
  { id: 21, src: img21, title: 'Inner Radiance', category: 'portraits', size: 'wide', views: 2145 },
  { id: 4, src: img4, title: 'Shaded Serenity', category: 'portraits', size: 'normal', views: 654 },
  { id: 14, src: img14, title: 'Eyes That Speak', category: 'portraits', size: 'tall', views: 987 },
  { id: 23, src: img23, title: 'A Precious Bond', category: 'sketches', size: 'normal', views: 1567 },
  { id: 5, src: img5, title: 'Thoughts in Form', category: 'portraits', size: 'normal', views: 823 },
  { id: 19, src: img19, title: 'Depth of the Soul', category: 'portraits', size: 'tall', views: 2890 },
  { id: 24, src: img24, title: 'Balanced Beauty', category: 'portraits', size: 'normal', views: 1234 },
  { id: 7, src: img7, title: 'Sketch in Motion', category: 'portraits', size: 'normal', views: 456 },
  { id: 11, src: img11, title: 'Study of Stillness', category: 'sketches', size: 'tall', views: 678 },
  { id: 25, src: img25, title: 'Promise Forever', category: 'portraits', size: 'wide', views: 1987 },
  { id: 8, src: img8, title: 'Character Essence', category: 'portraits', size: 'normal', views: 345 },
  { id: 15, src: img15, title: 'Poise & Grace', category: 'portraits', size: 'tall', views: 1456 },
  { id: 9, src: img9, title: 'Upright Impressions', category: 'phonecovers', size: 'tall', views: 567 },
  { id: 20, src: img20, title: 'Lost in Thought', category: 'sketches', size: 'tall', views: 2345 },
  { id: 18, src: img18, title: 'Tender Silence', category: 'couple', size: 'tall', views: 890 },
  { id: 22, src: img22, title: 'Frozen in Time', category: 'portraits', size: 'tall', views: 1678 },
  { id: 26, src: img26, title: 'Unspoken Affection', category: 'couple', size: 'tall', views: 2500 },
  { id: 27, src: img27, title: 'Roots of Togetherness', category: 'couple', size: 'wide', views: 1750 },
  { id: 28, src: img28, title: 'Through the Years', category: 'couple', size: 'normal', views: 980 },
  { id: 29, src: img29, title: 'Family in Frame', category: 'family', size: 'tall', views: 1340 },
  { id: 30, src: img30, title: 'Ties That Remain', category: 'family', size: 'tall', views: 1340 },
  { id: 31, src: img31, title: 'Quiet Expression', category: 'portraits', size: 'tall', views: 1340 },
  { id: 32, src: img32, title: 'Light Within', category: 'portraits', size: 'tall', views: 1340 },
  { id: 33, src: img33, title: 'Unspoken Depth', category: 'portraits', size: 'normal', views: 1340 },

];


  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  const displayedItems = filteredItems.slice(0, visibleCount)

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

  const openLightbox = (item) => {
    setSelectedImage(item)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  const navigateImage = (direction) => {
    if (!selectedImage) return
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[newIndex])
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigateImage('next')
      if (e.key === 'ArrowLeft') navigateImage('prev')
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage])

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 8, filteredItems.length))
  }

  // Reset visible count when category changes
  useEffect(() => {
    setVisibleCount(12)
  }, [activeCategory])

  // Stats
  const stats = [
    { icon: Camera, value: '50+', label: 'Artworks' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Award, value: '5', label: 'Categories' },
    { icon: Heart, value: '500+', label: 'Likes' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .float-slow {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .modal-animate {
          animation: modalIn 0.3s ease forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl float-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl float-slow" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
                <Sparkles size={14} />
                Curated Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
                Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Gallery</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                Explore our collection of handcrafted artworks, each piece telling a unique story through strokes and emotions.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white shadow-md flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-pink-500" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <AnimateOnScroll animation="fadeUp">
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
                      <div className="absolute inset-0 bg-gradient-to-r from-sky-400 via-pink-400 to-sky-400 bg-[length:200%_100%] animate-gradient"></div>
                    )}
                    <IconComponent size={16} className="relative z-10" />
                    <span className="relative z-10">{cat.label}</span>
                    {activeCategory === cat.id && (
                      <span className="relative z-10 ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                        {filteredItems.length}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </AnimateOnScroll>

          {/* Masonry Gallery */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {displayedItems.map((item, index) => (
              <AnimateOnScroll key={item.id} animation="fadeUp" delay={index * 30}>
                <div
                  className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 break-inside-avoid cursor-pointer"
                  onClick={() => openLightbox(item)}
                >
                  {/* Image */}
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
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
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        openLightbox(item)
                      }}
                      className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300"
                    >
                      <ZoomIn size={16} />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-medium capitalize">
                      {item.category}
                    </span>
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
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-900/25"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-pink-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <span className="relative z-10">Load More Artworks</span>
                <span className="relative z-10 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  +{Math.min(8, filteredItems.length - visibleCount)}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
                <Award size={14} />
                Featured Work
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Artwork <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Spotlight</span>
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Spotlight Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Featured */}
            <AnimateOnScroll animation="fadeUp">
              <div
                className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => openLightbox(galleryItems[14])}
              >
                <img
                  src={img19}
                  alt="Featured Artwork"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-pink-500 text-white text-xs font-medium rounded-full mb-3">
                    Artist's Pick
                  </span>
                  <h3 className="text-3xl font-serif text-white mb-2">Soulful Gaze</h3>
                  <p className="text-white/70 mb-4">A hauntingly beautiful portrait capturing depth and emotion through delicate graphite strokes.</p>
                  <div className="flex items-center gap-4">
                    <span className="text-pink-300 text-sm">Charcoal & Graphite</span>
                    <span className="text-white/50 text-sm flex items-center gap-1">
                      <Eye size={14} /> 2,890 views
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Secondary Featured */}
            <div className="grid grid-rows-2 gap-6">
              <AnimateOnScroll animation="fadeUp" delay={100}>
                <div
                  className="group relative h-[238px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => openLightbox(galleryItems[26])}
                >
                  <img
                    src={img27}
                    alt="Love Story"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-serif text-white">Love Story</h3>
                    <span className="text-pink-300 text-sm">Couple Portrait</span>
                  </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeUp" delay={200}>
                <div
                  className="group relative h-[238px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                  onClick={() => openLightbox(galleryItems[24])}
                >
                  <img
                    src={img22}
                    alt="Radiant Soul"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-serif text-white">Radiant Soul</h3>
                    <span className="text-pink-300 text-sm">Portrait Study</span>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Sketch Collection Marquee */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4">
                <Sparkles size={14} />
                Interactive Gallery
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-3">
                Sketch <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Collection</span>
              </h2>
              <p className="text-gray-500 text-sm">Drag to scroll • Click & hold to pause • Release to resume</p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Left Fade Gradient */}
          <div className="absolute top-0 left-0 w-16 sm:w-24 md:w-40 h-full z-20 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent pointer-events-none"></div>

          {/* Right Fade Gradient */}
          <div className="absolute top-0 right-0 w-16 sm:w-24 md:w-40 h-full z-20 bg-gradient-to-l from-gray-100 via-gray-100/80 to-transparent pointer-events-none"></div>

          {/* Scrollable Marquee Track */}
          <div
            ref={marqueeRef}
            className={`flex overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none ${isDragging || isPaused ? '' : 'marquee-auto-scroll'}`}
            onMouseDown={(e) => {
              setIsDragging(true)
              setIsPaused(true)
              setStartX(e.pageX - marqueeRef.current.offsetLeft)
              setScrollLeft(marqueeRef.current.scrollLeft)
            }}
            onMouseUp={() => {
              setIsDragging(false)
              setIsPaused(false)
            }}
            onMouseLeave={() => {
              setIsDragging(false)
              setIsPaused(false)
            }}
            onMouseMove={(e) => {
              if (!isDragging) return
              e.preventDefault()
              const x = e.pageX - marqueeRef.current.offsetLeft
              const walk = (x - startX) * 2
              marqueeRef.current.scrollLeft = scrollLeft - walk
            }}
            onTouchStart={(e) => {
              setIsPaused(true)
              setStartX(e.touches[0].pageX - marqueeRef.current.offsetLeft)
              setScrollLeft(marqueeRef.current.scrollLeft)
            }}
            onTouchEnd={() => {
              setIsPaused(false)
            }}
            onTouchMove={(e) => {
              const x = e.touches[0].pageX - marqueeRef.current.offsetLeft
              const walk = (x - startX) * 2
              marqueeRef.current.scrollLeft = scrollLeft - walk
            }}
          >
            <div className="flex gap-6 py-2">
              {[...galleryItems.filter(item => item.category === 'sketches'), ...galleryItems.filter(item => item.category === 'sketches'), ...galleryItems.filter(item => item.category === 'sketches')].map((item, index) => (
                <div
                  key={`sketch-${item.id}-${index}`}
                  className="group/card flex-shrink-0 w-72"
                  onClick={() => !isDragging && openLightbox(item)}
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg group-hover/card:shadow-2xl transition-shadow">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500 pointer-events-none"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                      <h3 className="text-white font-medium">{item.title}</h3>
                    </div>
                  </div>
                  <div className="mt-3 px-1">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.views.toLocaleString()} views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Animation */}
        <style>{`
          @keyframes autoScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .marquee-auto-scroll > div {
            animation: autoScroll 30s linear infinite;
          }
          .marquee-auto-scroll:hover > div {
            animation-play-state: paused;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
                <Palette size={14} />
                Creative Layout
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
                Couple <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Portraits</span>
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">Celebrating love through art - each piece captures unique moments and emotions</p>
            </div>
          </AnimateOnScroll>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Large */}
            <AnimateOnScroll animation="fadeUp" className="col-span-2 row-span-2">
              <div
                className="group relative h-full rounded-3xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[0])}
              >
                <img src={img1} alt="Golden Moments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-xl font-serif text-white">Golden Moments</h3>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Small */}
            <AnimateOnScroll animation="fadeUp" delay={50}>
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[23])}
              >
                <img src={img18} alt="Together Forever" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={100}>
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[25])}
              >
                <img src={img26} alt="Cherished Bond" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={150}>
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[26])}
              >
                <img src={img27} alt="Harmony" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeUp" delay={200}>
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[27])}
              >
                <img src={img28} alt="Forever Yours" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={24} />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Wide */}
            {/* <AnimateOnScroll animation="fadeUp" delay={250} className="col-span-2">
              <div
                className="group relative h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                onClick={() => openLightbox(galleryItems[8])}
              >
                <img src={img6} alt="Captured Moment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-serif text-white">Captured Moment</h3>
                  <p className="text-white/70 text-sm">A beautiful couple portrait</p>
                </div>
              </div>
            </AnimateOnScroll> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Want Your Own <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Custom Artwork?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Transform your favorite photos into stunning handcrafted portraits. Each piece is made with love and attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Order Custom Portrait
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Get in Touch
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="modal-animate relative w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('prev')
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateImage('next')
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            {/* Image and Info */}
            <div
              className="max-w-5xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[70vh] max-w-full object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-serif text-white mb-1">{selectedImage.title}</h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="text-pink-400 capitalize">{selectedImage.category}</span>
                  <span className="text-white/50 flex items-center gap-1">
                    <Eye size={14} />
                    {selectedImage.views.toLocaleString()} views
                  </span>
                  <button
                    onClick={(e) => toggleLike(e, selectedImage.id)}
                    className={`flex items-center gap-1 transition-colors ${likedImages.has(selectedImage.id) ? 'text-pink-500' : 'text-white/50 hover:text-pink-400'
                      }`}
                  >
                    <Heart size={14} className={likedImages.has(selectedImage.id) ? 'fill-current' : ''} />
                    Like
                  </button>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto px-4 pb-2">
              {filteredItems.slice(0, 8).map((item) => (
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(item)
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${selectedImage.id === item.id
                    ? 'ring-2 ring-pink-400 scale-110'
                    : 'opacity-50 hover:opacity-100'
                    }`}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

export default Gallery
