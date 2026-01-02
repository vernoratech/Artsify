import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom'
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Send,
  Palette,
  Sparkles,
  ArrowUpRight
} from 'lucide-react'
import logo from '../../../assets/Artsify-Client-Details/Logo1.jpeg';

// import {logo} from 'D:/Artify Project/Artsify/src/assets/Artsify-Client-Details/Logo.jpg'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
  ]

  const serviceLinks = [
    { name: 'Custom Portraits', path: '/services' },
    { name: 'Pet Portraits', path: '/services' },
    { name: 'Family Art', path: '/services' },
    { name: 'Digital Art', path: '/services' },
  ]

  const supportLinks = [
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Testimonials', path: '/testimonials' },
    // { name: 'Blog', path: '/blog' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Top Wave Decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 group mb-6">
              <div className="w-10 h-10 rounded-xl /*bg-gradient-to-br from-pink-500 to-purple-600 */flex items-center justify-center shadow-lg group-hover:shadow-pink-500/25 transition-shadow">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-20 h-10 rounded-full object-cover bg-white p-0.5"
                />
              </div>

              <h3 className="text-3xl font-serif">
                Arts<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">ify</span>
              </h3>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Creating timeless memories through art. Every stroke tells a story, every portrait holds a soul. Let us transform your cherished moments into stunning masterpieces.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:artsify98@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Mail size={14} />
                </div>
                <span className="text-sm">artsify98@gmail.com</span>
              </a>
              <a
                href="tel:+91 8446060142"
                className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Phone size={14} />
                </div>
                <span className="text-sm">+91 84460 60142</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 rounded-lg bg-gray-800/50 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          {/* Links Grid - Responsive 3 columns on mobile */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <div className="grid grid-cols-3 gap-4 sm:gap-8 md:grid-cols-3 lg:gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-sm sm:text-lg font-serif mb-3 sm:mb-6 text-white flex items-center gap-1 sm:gap-2">
                  <span className="w-4 sm:w-8 h-0.5 bg-gradient-to-r from-sky-400 to-transparent"></span>
                  <span className="truncate">Quick Links</span>
                </h4>
                <ul className="space-y-1.5 sm:space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ArrowUpRight size={12} className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-400 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-sm sm:text-lg font-serif mb-3 sm:mb-6 text-white flex items-center gap-1 sm:gap-2">
                  <span className="w-4 sm:w-8 h-0.5 bg-gradient-to-r from-pink-400 to-transparent"></span>
                  <span className="truncate">Services</span>
                </h4>
                <ul className="space-y-1.5 sm:space-y-3">
                  {serviceLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ArrowUpRight size={12} className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-400 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-sm sm:text-lg font-serif mb-3 sm:mb-6 text-white flex items-center gap-1 sm:gap-2">
                  <span className="w-4 sm:w-8 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></span>
                  <span className="truncate">Support</span>
                </h4>
                <ul className="space-y-1.5 sm:space-y-3">
                  {supportLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="group flex items-center gap-1 sm:gap-2 text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                      >
                        <ArrowUpRight size={12} className="hidden sm:block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-pink-400 flex-shrink-0" />
                        <span className="truncate">{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-gray-400">
              <span className="text-sm">Follow us:</span>
              <span className="text-pink-400 font-medium">@artsify.__</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/artsify.__"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-xl bg-gray-800/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Instagram size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="https://wa.me/+918446060142"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-11 h-11 rounded-xl bg-gray-800/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <FaWhatsapp size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:artsify98@gmail.com"
                className="group relative w-11 h-11 rounded-xl bg-gray-800/50 flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail size={18} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

     {/* Bottom Bar */}
<div className="relative border-t border-gray-800/50 bg-black/30">
  <div className="max-w-7xl mx-auto px-4 py-6">
    <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">

      {/* Copyright */}
      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed flex flex-col sm:flex-row items-center gap-1">
        <span className="flex items-center gap-1">
          &copy; {new Date().getFullYear()} Artsify. Made with
          <Heart
            size={14}
            className="text-pink-500 fill-pink-500 animate-pulse"
          />
          in India
        </span>

        <span className="mt-1 sm:mt-0 sm:ml-2">
          ~ Developed by{" "}
          <a
            href="https://www.vernoratech.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
              Vernora
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-sky-300">
              Tech
            </span>
          </a>
        </span>
      </p>

      {/* Footer Links */}
      <div className="flex gap-4 text-xs sm:text-sm text-gray-500">
        <Link to="/terms" className="hover:text-white transition-colors">
          Terms
        </Link>
        <Link to="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>
        <Link to="/cookies" className="hover:text-white transition-colors">
          Cookies
        </Link>
      </div>

    </div>
  </div>
</div>

    </footer>
  )
}

export default Footer
