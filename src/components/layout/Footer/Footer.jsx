import React from 'react'
import { Instagram, MessageCircle } from 'lucide-react'

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

export default Footer
