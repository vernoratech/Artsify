import React, { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Blog from './pages/Blog'
import { MessageCircle } from 'lucide-react'
import introBg from './assets/Artsify-Client-Details/img24.jpg'

const App = () => {
  const navigate = useNavigate()
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false
    return !localStorage.getItem('artsifyHasEntered')
  })
  const [isDismissing, setIsDismissing] = useState(false)

  const handleEnter = () => {
    if (isDismissing) return
    localStorage.setItem('artsifyHasEntered', 'true')
    setIsDismissing(true)
    setTimeout(() => {
      setShowIntro(false)
      navigate('/')
    }, 700)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

      <Footer />

      {showIntro && (
        <div
          className={`fixed inset-0 z-60 flex items-center justify-center transition-opacity duration-700 ease-out ${isDismissing ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-700 ease-out"
            style={{
              backgroundImage: `url(${introBg})`,
              transform: isDismissing ? 'scale(1.05)' : 'scale(1)',
            }}
          />
          <div
            className={`absolute inset-0 bg-black/70 transition-opacity duration-700 ${isDismissing ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <div
            className={`relative z-10 max-w-xl mx-auto text-center px-6 transition-all duration-700 ${isDismissing ? 'translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
              }`}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-[0.3em] uppercase">
              Enter the world
            </h1>
            <button
              type="button"
              onClick={handleEnter}
              className="px-10 py-3 bg-white/90 text-gray-900 font-serif text-lg rounded-full uppercase tracking-[0.2em] hover:bg-pink-100 hover:text-pink-700 transition-transform duration-300 shadow-lg hover:shadow-2xl active:scale-95"
            >
              Enter
            </button>
          </div>
        </div>
      )}

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
