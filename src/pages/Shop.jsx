import React, { useState, useEffect } from 'react'
import { Heart, ShoppingBag, Filter, Search } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import ProductModal from '../components/ui/ProductModal'
import { useNavigate } from 'react-router-dom'


// Import images
import img1 from '../assets/Artsify-Client-Details/img1.jpg'
import img33 from '../assets/Artsify-Client-Details/img33.jpeg'
import img3 from '../assets/Artsify-Client-Details/img3.jpg'
import img4 from '../assets/Artsify-Client-Details/img4.jpg'
import img5 from '../assets/Artsify-Client-Details/img5.jpg'
import img8 from '../assets/Artsify-Client-Details/img8.jpg'
import img9 from '../assets/Artsify-Client-Details/img9.jpg'
import img12 from '../assets/Artsify-Client-Details/img12.jpg'
import img18 from '../assets/Artsify-Client-Details/img18.webp'
import img16 from '../assets/Artsify-Client-Details/img16.jpg'
import img20 from '../assets/Artsify-Client-Details/img20.jpg'
import img17 from '../assets/Artsify-Client-Details/img17.jpg'

// ---------------- DAILY HOT DEAL HELPERS ----------------
const getTodayKey = () => {
  const d = new Date()
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
}

const shuffleArray = (arr) => {
  const copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

const getRandomDiscount = () => Math.floor(Math.random() * 19) + 1 // 1–19%

const applyDiscount = (price, discount) =>
  Math.round(price - (price * discount) / 100)

const getDailyDeals = (products) => {
  const today = getTodayKey()
  const cached = localStorage.getItem('dailyDeals')

  if (cached) {
    const parsed = JSON.parse(cached)
    if (parsed.date === today) return parsed.deals
  }

  const discountable = products.filter(p => p.originalPrice)
  const count = Math.random() < 0.5 ? 1 : 2

  const selected = shuffleArray(discountable).slice(0, count)

  const deals = selected.map(product => {
    const discount = getRandomDiscount()
    return {
      ...product,
      discount,
      price: applyDiscount(product.originalPrice, discount),
    }
  })

  localStorage.setItem(
    'dailyDeals',
    JSON.stringify({ date: today, deals })
  )

  return deals
}

// ---------------- PRODUCTS ----------------
const products = [
  { id: 1, src: img16, title: "Ethereal Gaze", category: "Portraits", tag: "Graphite • A4", price: 500, originalPrice: 700, badge: "Bestseller" },
  { id: 2, src: img17, title: "Monochrome Study", category: "Fan Art", tag: "Charcoal • A3", price: 500, originalPrice: null, badge: null },
  { id: 3, src: img18, title: "Couple's Joy", category: "Couple Portraits", tag: "Charcoal • A3", price: 700, originalPrice: 900, badge: "Popular" },
  { id: 4, src: img33, title: "Serenity", category: "Fan Art", tag: "Pencil • A4", price: 450, originalPrice: null, badge: null },
  // { id: 5, src: img3, title: "Visionary", category: "Portraits", tag: "Graphite • A4", price: 550, originalPrice: null, badge: null },
  // { id: 6, src: img4, title: "Self Portrait", category: "Sketches", tag: "Pencil • A5", price: 300, originalPrice: 400, badge: "Sale" },
  // { id: 7, src: img5, title: "Floral Dreams", category: "Phone Cases", tag: "Acrylic • Case", price: 400, originalPrice: null, badge: "New" },
  // { id: 8, src: img8, title: "Thoughtful Expression", category: "Sketches", tag: "Charcoal • A4", price: 350, originalPrice: null, badge: null },
  // { id: 9, src: img9, title: "The Dark Knight", category: "Fan Art", tag: "Graphite • A3", price: 600, originalPrice: null, badge: "Limited" },
  // { id: 10, src: img12, title: "Family Bond", category: "Family Portraits", tag: "Acrylic • Custom", price: 1200, originalPrice: 1500, badge: "Premium" },
  // { id: 11, src: img18, title: "Eternal Love", category: "Couple Portraits", tag: "Mixed Media • A2", price: 850, originalPrice: null, badge: null },
  // { id: 12, src: img20, title: "Divine Radiance", category: "Mythology", tag: "Charcoal • A2", price: 750, originalPrice: 950, badge: "Featured" },
]

const categories = ["All", "Portraits", "Sketches", "Couple Portraits", "Family Portraits", "Phone Cases", "Fan Art", "Mythology"]

// ---------------- COMPONENT ----------------
const Shop = () => {
    const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const [wishlist, setWishlist] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  const [dailyDeals, setDailyDeals] = useState([])
  const [timeLeft, setTimeLeft] = useState({ hours: '00', minutes: '00', seconds: '00' })

  // INIT DAILY DEALS + TIMER
  useEffect(() => {
    setDailyDeals(getDailyDeals(products))

    const updateTimer = () => {
      const now = new Date()
      const midnight = new Date()
      midnight.setHours(24, 0, 0, 0)

      const diff = midnight - now
      setTimeLeft({
        hours: String(Math.floor(diff / 3600000)).padStart(2, '0'),
        minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
        seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
      })
    }

    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    return () => clearInterval(timer)
  }, [])

  // FILTER PRODUCTS
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch =
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  const toggleWishlist = (e, id) => {
    e.stopPropagation()
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
<style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                .poppins-text { font-family: 'Poppins', sans-serif; }
                
                /* Shimmer loading */
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .skeleton-shimmer {
                    background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
                    background-size: 200% 100%;
                    animation: shimmer 1.5s infinite;
                }
                
                /* Gradient text */
                .gradient-text {
                    background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                /* Card hover effects */
                .product-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .product-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
                }
                .product-card:hover .product-image {
                    transform: scale(1.08);
                }
                .product-card:hover .quick-actions {
                    opacity: 1;
                    transform: translateY(0);
                }
                .product-image {
                    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .quick-actions {
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                }
                
                /* Badge styles */
                .badge-bestseller { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
                .badge-popular { background: linear-gradient(135deg, #ec4899 0%, #be185d 100%); }
                .badge-sale { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
                .badge-new { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
                .badge-limited { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
                .badge-premium { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); }
                .badge-featured { background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%); }
                
                /* Category pill */
                .category-active {
                    background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(244, 114, 182, 0.4);
                }
                
                /* Modal animation */
                @keyframes modalIn {
                    from { opacity: 0; transform: scale(0.95) translateY(10px); }
                    to { opacity: 1; transform: scale(1) translateY(0); }
                }
                .modal-content {
                    animation: modalIn 0.3s ease forwards;
                }
                
                /* Floating animation */
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .float-slow {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
{/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl float-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl float-slow" style={{ animationDelay: '-3s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 poppins-text">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center">
              <span className="inline-block px-4 py-1.5 bg-pink-100 text-pink-600 text-xs font-medium rounded-full mb-6 tracking-wider uppercase border border-pink-200">
                ✨ Handcrafted Art Collection
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
                Art <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Shop</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Discover unique handcrafted artworks, custom portraits, and exclusive art pieces made with passion and precision.
              </p>

              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all shadow-sm"
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 poppins-text">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
            >
              <Filter className="w-4 h-4" />
              Filters
            </button>

            {/* Desktop filters */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${selectedCategory === category
                    ? 'category-active'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results count */}
            <span className="text-sm text-gray-500 whitespace-nowrap">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {/* Mobile filters dropdown */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category)
                    setShowFilters(false)
                  }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${selectedCategory === category
                    ? 'category-active'
                    : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 poppins-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No artworks found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <AnimateOnScroll
                  key={product.id}
                  animation="fadeUp"
                  delay={index * 50}
                >
                  <div
                    className="product-card bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer"
                    onClick={() => setSelectedProduct(product)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                      {/* Skeleton */}
                      {!loadedImages[product.id] && (
                        <div className="absolute inset-0 skeleton-shimmer" />
                      )}

                      {/* Image */}
                      <img
                        src={product.src}
                        alt={product.title}
                        className={`product-image w-full h-full object-cover ${loadedImages[product.id] ? 'opacity-100' : 'opacity-0'}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(product.id)}
                      />

                      {/* Badge */}
                      {product.badge && (
                        <span className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold text-white uppercase tracking-wide badge-${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      )}

                      {/* Wishlist Button */}
                      <button
                        onClick={(e) => toggleWishlist(e, product.id)}
                        className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${wishlist.includes(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
                          }`}
                      >
                        <Heart className={`w-4 h-4 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                      </button>

                      {/* Quick Actions */}
                      <div className="quick-actions absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProduct(product)
                          }}
                          className="w-full py-2 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingBag className="w-4 h-4" />
                          Quick View
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <p className="text-xs text-purple-600 font-medium mb-1">{product.category}</p>
                      <h3 className="font-semibold text-gray-900 mb-1 truncate">{product.title}</h3>
                      <p className="text-xs text-gray-500 mb-2">{product.tag}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products - Large Spotlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium mb-3">
                  ✨ Editor's Pick
                </span>
                <h2 className="text-3xl font-serif text-gray-900">
                  Featured <span className="gradient-text italic">Artworks</span>
                </h2>
              </div>
              {/* <button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                View All <span>→</span>
              </button> */}
            </div>
          </AnimateOnScroll>

          {/* Large Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {products.filter(p => p.badge === 'Featured' || p.badge === 'Bestseller').slice(0, 2).map((product, index) => (
              <AnimateOnScroll key={product.id} animation="fadeUp" delay={index * 100}>
                <div
                  className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.src}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 badge-${product.badge?.toLowerCase()}`}>
                      {product.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">{product.title}</h3>
                    <p className="text-white/70 text-sm mb-4">{product.tag}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold text-white">₹{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-white/50 line-through">₹{product.originalPrice}</span>
                        )}
                      </div>
                      <button className="px-6 py-2.5 bg-white text-gray-900 text-sm font-medium rounded-full hover:bg-gray-100 transition-colors flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" />
                        Order Now
                      </button>
                    </div>
                  </div>

                  {/* Wishlist */}
                  <button
                    onClick={(e) => toggleWishlist(e, product.id)}
                    className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all ${wishlist.includes(product.id) ? 'bg-red-500 text-white' : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/40'}`}
                  >
                    <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* List View Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-medium mb-3">
                📦 Quick Browse
              </span>
              <h2 className="text-3xl font-serif text-gray-900">
                All <span className="gradient-text italic">Products</span>
              </h2>
            </div>
          </AnimateOnScroll>

          Horizontal List Cards
          <div className="space-y-4">
            {products.slice(0, 5).map((product, index) => (
              <AnimateOnScroll key={product.id} animation="fadeUp" delay={index * 50}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="flex flex-col sm:flex-row">
                    Image
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                      <img
                        src={product.src}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white badge-${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      )}
                    </div>

                    Info
                    <div className="flex-1 p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <p className="text-xs text-purple-600 font-medium mb-1">{product.category}</p>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.title}</h3>
                        <p className="text-sm text-gray-500">{product.tag}</p>
                      </div>

                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
                          {product.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">₹{product.originalPrice}</p>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => toggleWishlist(e, product.id)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${wishlist.includes(product.id) ? 'bg-red-50 text-red-500' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}`}
                          >
                            <Heart className={`w-5 h-5 ${wishlist.includes(product.id) ? 'fill-current' : ''}`} />
                          </button>
                          <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section> */}

      {/* 🔥 HOT DEALS SECTION */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-medium mb-3">
                  🔥 Limited Time
                </span>
                <h2 className="text-3xl font-serif text-white">
                  Hot <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 italic">Deals</span>
                </h2>
              </div>

              <div className="mt-4 md:mt-0 flex items-center gap-3 text-white/70">
                <span className="text-sm">Ends in:</span>
                <div className="flex gap-2">
                  <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white font-mono">{timeLeft.hours}</span>
                  <span>:</span>
                  <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white font-mono">{timeLeft.minutes}</span>
                  <span>:</span>
                  <span className="px-3 py-1.5 bg-white/10 rounded-lg text-white font-mono">{timeLeft.seconds}</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dailyDeals.map((product, index) => (
              <AnimateOnScroll key={product.id} animation="fadeUp" delay={index * 75}>
                <div
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer hover:bg-white/15 transition-all"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.src}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 bg-red-500 text-white text-[10px] font-bold rounded-full">
                      -{product.discount}%
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium text-sm truncate mb-2">{product.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-white">₹{product.price}</span>
                      <span className="text-sm text-white/50 line-through">₹{product.originalPrice}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Can't Find What You're <span className="gradient-text italic">Looking For?</span>
            </h2>
            <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
              Get a custom artwork made just for you. Share your ideas and let's create something unique together!
            </p>
            <button  onClick={() => navigate('/contact')} className="px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Request Custom Artwork
            </button>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PRODUCT MODAL */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  )
}

export default Shop
