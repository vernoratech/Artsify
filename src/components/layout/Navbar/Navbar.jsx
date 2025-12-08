import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

  return (
    // Fixed: z-[100] (not z-100)
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <NavLink to="/" className="flex items-center cursor-pointer" onClick={() => setIsOpen(false)}>
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
                    {/* Fixed: bg-gradient-to-r (not bg-linear-to-r) */}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-pink-300 to-sky-300 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'
                        }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
            {/* Fixed: bg-gradient-to-r (not bg-linear-to-r) */}
            <NavLink
              to="/services"
              className="px-6 py-2 bg-gradient-to-r from-sky-400 to-pink-400 text-white font-serif rounded-full hover:shadow-lg hover:opacity-90 transition-all transform hover:-translate-y-0.5"
            >
              Order Now
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-pink-500 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-sm border-t border-pink-50">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left px-3 py-3 font-serif text-base rounded-md transition-colors ${isActive
                  ? 'bg-pink-50 text-pink-600 font-medium'
                  : 'text-gray-600 hover:bg-sky-50 hover:text-sky-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;