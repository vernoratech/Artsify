import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

const App = () => {
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
