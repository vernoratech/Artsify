import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ArrowRight, Instagram, MessageCircle } from 'lucide-react';

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'Services', to: '/services' },
  { name: 'Shop', to: '/shop' },
  { name: 'Testimonials', to: '/testimonials' },
  { name: 'FAQ', to: '/faq' },
  { name: 'Blog', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <NavLink to="/" className="flex items-center cursor-pointer z-[110]" onClick={() => setIsOpen(false)}>
              <div className="relative">
                <span className="font-serif text-3xl text-gray-800 tracking-wide font-bold">
                  Arts<span className="text-pink-400">ify</span>
                </span>
                <span className="absolute -bottom-2 right-0 text-[10px] text-sky-500 uppercase tracking-widest">
                  Est. 2024
                </span>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative font-serif text-sm lg:text-base transition-colors duration-200 ${isActive ? 'text-pink-500' : 'text-gray-600 hover:text-sky-500'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-300 to-sky-300 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
              <NavLink
                to="/services"
                className="px-6 py-2 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-serif rounded-full hover:shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
              >
                Order Now
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-[110]">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-gray-100 text-pink-500' : 'text-gray-600 hover:text-pink-500'}`}
                aria-label="Toggle menu"
              >
                <div className="relative w-7 h-7">
                  <Menu
                    size={28}
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}
                  />
                  <X
                    size={28}
                    className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[99] transition-all duration-500 ease-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-white via-pink-50/90 to-sky-50/90 backdrop-blur-lg transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className={`relative h-full flex flex-col pt-24 pb-8 px-6 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            <nav className="space-y-1">
              {links.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between py-4 px-4 rounded-xl transition-all duration-300 ${isActive
                      ? 'bg-white/80 shadow-sm'
                      : 'hover:bg-white/50'
                    }`
                  }
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateX(0)' : 'translateX(40px)',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span className={`font-serif text-xl ${isActive ? 'text-pink-500 font-semibold' : 'text-gray-700'}`}>
                        {link.name}
                      </span>
                      <ArrowRight
                        size={18}
                        className={`transition-all duration-300 ${isActive
                          ? 'text-pink-400 translate-x-0 opacity-100'
                          : 'text-gray-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                          }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* CTA Button */}
          <div
            className="mt-6"
            style={{
              transitionDelay: isOpen ? `${links.length * 50 + 100}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.4s ease-out',
            }}
          >
            <NavLink
              to="/services"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-pink-400 to-sky-400 text-white font-serif text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              Order Your Portrait
              <ArrowRight size={20} />
            </NavLink>
          </div>

          {/* Footer Section */}
          <div
            className="mt-8 pt-6 border-t border-gray-200/50"
            style={{
              transitionDelay: isOpen ? `${links.length * 50 + 200}ms` : '0ms',
              transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: isOpen ? 1 : 0,
              transition: 'all 0.4s ease-out',
            }}
          >
            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 rounded-full text-gray-600 hover:text-pink-500 hover:bg-white transition-all"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/60 rounded-full text-gray-600 hover:text-green-500 hover:bg-white transition-all"
              >
                <MessageCircle size={22} />
              </a>
            </div>

            {/* Tagline */}
            <p className="text-center text-sm text-gray-500 font-serif italic">
              Turning memories into hand-drawn art
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;