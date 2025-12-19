import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
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
import CookieConsent from './components/ui/CookieConsent'
import { MessageCircle } from 'lucide-react'
import introBg from './assets/inro_bg.png'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false

    const entryData = localStorage.getItem('artsifyHasEntered')
    if (!entryData) return true // No entry, show intro

    try {
      const parsed = JSON.parse(entryData)

      // Handle old format (just "true" string which parses to boolean true)
      // Old users should see the new intro, so clear and show
      if (typeof parsed !== 'object' || parsed === null || !parsed.timestamp) {
        localStorage.removeItem('artsifyHasEntered')
        return true // Old format, show intro
      }

      const entryTime = new Date(parsed.timestamp).getTime()

      // Check if timestamp is valid
      if (isNaN(entryTime)) {
        localStorage.removeItem('artsifyHasEntered')
        return true // Invalid timestamp, show intro
      }

      const now = new Date().getTime()
      const twentyFourHours = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

      // Check if entry has expired (older than 24 hours)
      if (now - entryTime > twentyFourHours) {
        localStorage.removeItem('artsifyHasEntered')
        return true // Expired, show intro
      }
      return false // Valid entry, don't show intro
    } catch (e) {
      // Invalid JSON, remove and show intro
      localStorage.removeItem('artsifyHasEntered')
      return true
    }
  })
  const [isDismissing, setIsDismissing] = useState(false)

  // Lock body scroll when intro is visible
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showIntro])

  const handleEnter = () => {
    if (isDismissing) return
    // Store entry with timestamp for 24-hour expiration
    const entryData = {
      entered: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('artsifyHasEntered', JSON.stringify(entryData))
    setIsDismissing(true)
    setTimeout(() => {
      setShowIntro(false)
      navigate('/')
    }, 700)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <div className={location.pathname === '/' ? 'pt-0' : 'pt-20'}>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
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
      </div>

      <Footer />

      {showIntro && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-700 ease-out ${isDismissing ? 'opacity-0' : 'opacity-100'}`}
        >
          {/* Background Image with Ken Burns effect + Fallback Gradient */}
          <div
            className="absolute inset-0 transition-transform duration-[2000ms] ease-out"
            style={{
              background: 'linear-gradient(135deg, #0c1929 0%, #1e293b 30%, #1a1a2e 50%, #16213e 70%, #0f0f23 100%)',
              backgroundImage: `url(${introBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              minWidth: '100vw',
              transform: isDismissing ? 'scale(1.1)' : 'scale(1.02)',
              animation: isDismissing ? 'none' : 'kenBurns 20s ease-in-out infinite alternate',
            }}
          />

          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 transition-opacity duration-700 ${isDismissing ? 'opacity-0' : 'opacity-100'}`} />

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Content */}
          <div
            className={`relative z-10 w-full max-w-2xl mx-auto text-center px-6 py-12 transition-all duration-700 ${isDismissing ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}
          >
            {/* Logo/Brand */}
            <div className="mb-8">
              <h2 className="text-sm md:text-base font-medium text-white/60 tracking-[0.3em] uppercase mb-3">
                Welcome to
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-4 tracking-tight">
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-pink-300 crystal-shimmer">
                  Artsify
                  <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent opacity-0 crystal-shine" style={{ WebkitBackgroundClip: 'text' }}>
                    Artsify
                  </span>
                </span>
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6" />
            </div>

            {/* Tagline */}
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-10 max-w-md mx-auto leading-relaxed">
              Where memories become masterpieces
            </p>

            {/* Enter Button */}
            <button
              type="button"
              onClick={handleEnter}
              className="group relative inline-flex items-center gap-3 px-10 sm:px-12 py-4 bg-white/95 text-gray-900 font-serif text-base sm:text-lg rounded-full uppercase tracking-[0.15em] hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-white/20 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Explore</span>
              <svg className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
              </div>
            </div>
          </div>

          {/* Animations */}
          <style>{`
            @keyframes kenBurns {
              0% { transform: scale(1) translate(0, 0); }
              100% { transform: scale(1.1) translate(-2%, -1%); }
            }
            @keyframes crystalShine {
              0% { opacity: 0; background-position: -200% center; }
              50% { opacity: 0.8; }
              100% { opacity: 0; background-position: 200% center; }
            }
            .crystal-shimmer {
              text-shadow: 
                0 0 20px rgba(255,255,255,0.3),
                0 0 40px rgba(255,255,255,0.2),
                0 0 60px rgba(255,255,255,0.1);
            }
            .crystal-shine {
              background-size: 200% 100%;
              animation: crystalShine 3s ease-in-out infinite;
            }
          `}</style>
        </div>
      )}

      {/* Cookie Consent Popup */}
      <CookieConsent />
    </div>
  )
}

export default App
