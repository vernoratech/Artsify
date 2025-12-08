import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import { Upload, MessageCircle, Heart, Instagram, X as CloseIcon } from 'lucide-react'
import img1 from './assets/Artsify-Client-Details/img1.jpg'
import img2 from './assets/Artsify-Client-Details/img2.jpg'
import img3 from './assets/Artsify-Client-Details/img3.jpg'
import img4 from './assets/Artsify-Client-Details/img4.jpg'
import img5 from './assets/Artsify-Client-Details/img5.jpg'
import img8 from './assets/Artsify-Client-Details/img8.jpg'
import img9 from './assets/Artsify-Client-Details/img9.jpg'
import img18 from './assets/Artsify-Client-Details/img18.webp'
import img20 from './assets/Artsify-Client-Details/img20.jpg'
import img24 from './assets/Artsify-Client-Details/img24.jpg'

const artPieces = [
  { id: 1, src: img24, title: 'Ethereal Gaze', category: 'Portraits', aspect: 'vertical', price: '₹500' },
  { id: 2, src: img5, title: 'Monochrome Study', category: 'Portraits', aspect: 'square', price: '₹500' },
  { id: 9, src: img20, title: 'Divine Joy', category: 'Concept Art', aspect: 'vertical', price: 'N/A' },
  { id: 3, src: img9, title: 'The Dark Knight', category: 'Sketches', aspect: 'vertical', price: '₹600' },
  { id: 4, src: img8, title: 'Thoughtful Sketch', category: 'Portraits', aspect: 'square', price: '₹500' },
  { id: 5, src: img3, title: 'Visionary', category: 'Portraits', aspect: 'square', price: '₹500' },
  { id: 6, src: img18, title: 'Eternal Bond', category: 'Couple Portraits', aspect: 'vertical', price: '₹700' },
  { id: 7, src: img2, title: 'Serenity', category: 'Portraits', aspect: 'square', price: '₹500' },
  { id: 8, src: img4, title: 'Self Portrait', category: 'Sketches', aspect: 'square', price: '₹500' },
  { id: 10, src: img1, title: "Couple's Joy", category: 'Couple Portraits', aspect: 'square', price: '₹700' },
]

const Hero = () => (
  <section className="relative pt-32 pb-20 overflow-hidden bg-linear-to-br from-white via-sky-50 to-pink-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h2 className="text-sky-500 font-medium tracking-[0.2em] uppercase text-sm mb-4">Handmade with Love</h2>
      <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-6 leading-tight">
        Best gift for <br />
        <span className="italic text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-sky-400">any occasion</span>
      </h1>
      <p className="max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-light mb-10 leading-relaxed">
        Transforming memories into timeless masterpieces. Specializing in realistic portraits, sketches, and custom
        acrylic art.
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

const PricingAndCommissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'single',
    medium: 'pencil',
    size: 'A4',
    customSize: '',
    notes: '',
  })

  const basePrice = formData.type === 'single' ? 500 : 700

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 bg-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Commissions &amp; Pricing</h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose your perfect style. Whether it's a solo portrait or a couple's memory, we bring it to life on paper.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Single Portrait</h3>
              <p className="text-gray-500 mb-6">Perfect for self-portraits or individual gifts.</p>
              <div className="text-4xl font-serif text-sky-500 mb-6">
                ₹500 <span className="text-base text-gray-400 font-sans">/ per face</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> A4 Size Standard
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> High-detail Shading
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> Premium Paper Quality
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-bl-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-serif mb-2">Couple Portrait</h3>
              <p className="text-gray-400 mb-6">Capture the bond between two souls.</p>
              <div className="text-4xl font-serif text-pink-400 mb-6">
                ₹700 <span className="text-base text-gray-500 font-sans">/ per couple</span>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> A4 or A3 Size Options
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> Intricate Detailing
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> Perfect Anniversary Gift
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Place Your Order</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portrait Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent outline-none"
                  >
                    <option value="single">Single (₹500)</option>
                    <option value="couple">Couple (₹700)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Art Medium</label>
                  <select
                    name="medium"
                    value={formData.medium}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none"
                  >
                    <option value="pencil">Graphite Pencil</option>
                    <option value="charcoal">Charcoal</option>
                    <option value="acrylic">Acrylic Paint</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent outline-none"
                  >
                    <option value="A5">A5 (Small)</option>
                    <option value="A4">A4 (Standard)</option>
                    <option value="A3">A3 (Large)</option>
                    <option value="Custom">Custom Size</option>
                  </select>
                </div>
                {formData.size === 'Custom' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specify Dimensions</label>
                    <input
                      type="text"
                      name="customSize"
                      placeholder="e.g. 20x30 inches"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-300 outline-none"
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Reference Photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-sky-500 transition-colors" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <span className="relative rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, up to 10MB</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-linear-to-r from-sky-400 to-pink-400 text-white font-serif text-lg rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Proceed to Payment (₹{basePrice})
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                *Secure online payment. You will receive a confirmation via WhatsApp/Email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const GallerySection = () => {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['All', 'Portraits', 'Couple Portraits', 'Sketches', 'Concept Art']

  const filteredImages = filter === 'All' ? artPieces : artPieces.filter((image) => image.category === filter)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Portfolio Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((art) => (
            <div
              key={art.id}
              className="break-inside-avoid group relative cursor-pointer"
              onClick={() => setSelectedImage(art)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {art.title}
                  </p>
                  <p className="text-pink-200 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {art.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-400 p-2"
          >
            <CloseIcon size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

const Footer = () => (
  <footer className="bg-gray-900 text-white pt-16 pb-8 mt-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-2xl font-serif mb-4">
          Arts<span className="text-pink-400">ify</span>
        </h3>
        <p className="text-gray-400 leading-relaxed">
          Creating timeless memories through art. Every stroke tells a story, every portrait holds a soul.
        </p>
      </div>
      <div>
        <h4 className="text-lg font-serif mb-4 text-sky-400">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <a href="/" className="hover:text-white transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:text-white transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-white transition-colors">
              Order Custom Art
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-serif mb-4 text-pink-400">Connect</h4>
        <div className="flex space-x-4 mb-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
        <p className="text-gray-500 text-sm">Follow us @artsify.__</p>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
      &copy; 2024 Artsify. All rights reserved.
    </div>
  </footer>
)

const HomePage = () => (
  <>
    <Hero />
    <MarqueeCarousel />
    <PricingAndCommissions />
    <GallerySection />
  </>
)

const AboutPage = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-6">About the Artist</h1>
      <p className="text-gray-600 leading-relaxed mb-4">
        Artsify is a passion project dedicated to capturing emotions, stories, and memories through hand-drawn art.
        From graphite portraits to detailed concept sketches, every piece is crafted with patience and love.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Each commission is treated as a unique collaboration, ensuring that the final artwork reflects the personality
        and essence of the subject. Whether it's a gift or a personal keepsake, the goal is simple: make your moments
        unforgettable.
      </p>
    </div>
  </section>
)

const GalleryPage = () => <GallerySection />

const ServicesPage = () => <PricingAndCommissions />

const ShopPage = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-6">Shop</h1>
      <p className="text-gray-600 mb-8">Coming soon: prints, originals, and digital downloads.</p>
    </div>
  </section>
)

const ContactPage = () => (
  <section className="pt-32 pb-10 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-6">Contact</h1>
      <p className="text-gray-600 mb-4">
        For commissions, collaborations, or any questions, reach out via Instagram or WhatsApp. A dedicated contact
        form will be added soon.
      </p>
    </div>
  </section>
)

const TestimonialsPage = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-6">Testimonials</h1>
      <p className="text-gray-600 mb-4">Client stories and reviews will appear here.</p>
    </div>
  </section>
)

const FAQPage = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h1 className="text-4xl font-serif text-gray-900 mb-4">FAQ</h1>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">How long does a portrait take?</h3>
        <p className="text-gray-600">Typically 5-10 days depending on complexity and current queue.</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Do you ship outside India?</h3>
        <p className="text-gray-600">International shipping is available on request with additional charges.</p>
      </div>
    </div>
  </section>
)

const BlogPage = () => (
  <section className="pt-32 pb-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-serif text-gray-900 mb-6">Blog</h1>
      <p className="text-gray-600 mb-4">Stories, process breakdowns, and behind-the-scenes content coming soon.</p>
    </div>
  </section>
)

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>

      <Footer />

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2 group"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  )
}

export default App
