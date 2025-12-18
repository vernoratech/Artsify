import React, { useState } from 'react'
import { Heart, ShoppingBag, Filter, Search } from 'lucide-react'
import AnimateOnScroll, { StaggerContainer } from '../components/ui/AnimateOnScroll'
import ProductModal from '../components/ui/ProductModal'

// Import images
import img1 from '../assets/Artsify-Client-Details/img1.jpg'
import img2 from '../assets/Artsify-Client-Details/img2.jpg'
import img3 from '../assets/Artsify-Client-Details/img3.jpg'
import img4 from '../assets/Artsify-Client-Details/img4.jpg'
import img5 from '../assets/Artsify-Client-Details/img5.jpg'
import img8 from '../assets/Artsify-Client-Details/img8.jpg'
import img9 from '../assets/Artsify-Client-Details/img9.jpg'
import img12 from '../assets/Artsify-Client-Details/img12.jpg'
import img18 from '../assets/Artsify-Client-Details/img18.webp'
import img19 from '../assets/Artsify-Client-Details/img19.jpg'
import img20 from '../assets/Artsify-Client-Details/img20.jpg'
import img24 from '../assets/Artsify-Client-Details/img24.jpg'

// Product data
const products = [
  { id: 1, src: img19, title: "Ethereal Gaze", category: "Portraits", tag: "Graphite • A4", price: 500, originalPrice: 700, badge: "Bestseller" },
  { id: 2, src: img24, title: "Monochrome Study", category: "Portraits", tag: "Charcoal • A3", price: 500, originalPrice: null, badge: null },
  { id: 3, src: img1, title: "Couple's Joy", category: "Couple Portraits", tag: "Charcoal • A3", price: 700, originalPrice: 900, badge: "Popular" },
  { id: 4, src: img2, title: "Serenity", category: "Portraits", tag: "Pencil • A4", price: 450, originalPrice: null, badge: null },
  { id: 5, src: img3, title: "Visionary", category: "Portraits", tag: "Graphite • A4", price: 550, originalPrice: null, badge: null },
  { id: 6, src: img4, title: "Self Portrait", category: "Sketches", tag: "Pencil • A5", price: 300, originalPrice: 400, badge: "Sale" },
  { id: 7, src: img5, title: "Floral Dreams", category: "Phone Cases", tag: "Acrylic • Case", price: 400, originalPrice: null, badge: "New" },
  { id: 8, src: img8, title: "Thoughtful Expression", category: "Sketches", tag: "Charcoal • A4", price: 350, originalPrice: null, badge: null },
  { id: 9, src: img9, title: "The Dark Knight", category: "Fan Art", tag: "Graphite • A3", price: 600, originalPrice: null, badge: "Limited" },
  { id: 10, src: img12, title: "Family Bond", category: "Family Portraits", tag: "Acrylic • Custom", price: 1200, originalPrice: 1500, badge: "Premium" },
  { id: 11, src: img18, title: "Eternal Love", category: "Couple Portraits", tag: "Mixed Media • A2", price: 850, originalPrice: null, badge: null },
  { id: 12, src: img20, title: "Divine Radiance", category: "Mythology", tag: "Charcoal • A2", price: 750, originalPrice: 950, badge: "Featured" },
]

const categories = ["All", "Portraits", "Sketches", "Couple Portraits", "Family Portraits", "Phone Cases", "Fan Art", "Mythology"]

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [loadedImages, setLoadedImages] = useState({})
  const [wishlist, setWishlist] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Handle image load
  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }))
  }

  // Toggle wishlist
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

      {/* Product Modal */}
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
