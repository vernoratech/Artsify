import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('About');

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  // Custom SVG for the stylized 'J' logo with leaf
  const LogoIcon = () => (
   <div className="flex items-center gap-2">
  {/* Icon */}
  <svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    className="text-gray-800"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
  >
    {/* Brush stroke */}
    <path
      d="
        M65,20 
        C60,18 55,25 55,30 
        C55,35 60,35 60,30 
        C60,25 68,20 75,25 
        C82,30 75,45 65,65 
        C55,85 45,95 35,95 
        C25,95 20,85 25,75 
        C30,65 45,55 50,50
      "
    />

    {/* Leaf accent (cleaned + centered properly) */}
    <g strokeWidth="2" opacity="0.8" transform="translate(20, -6)">
      <path d="M2,12 C2,12 8,10 12,2 C12,2 14,8 22,12" />
      <path d="M12,12 C12,12 10,16 2,20" />
      <path d="M12,12 C12,12 16,14 20,20" />
      <path d="M8,11 L10,8" />
      <path d="M14,11 L16,8" />
      <path d="M10,13 L8,16" />
      <path d="M14,13 L16,16" />
    </g>
  </svg>

  {/* Brand Text */}
  <span className="font-serif text-3xl text-gray-800 tracking-wide">
    Artsify
  </span>
</div>

  );

  return (
    <nav className="w-full bg-white border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <LogoIcon />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => setActiveLink(link.name)}
                className={`
                  relative font-serif text-lg transition-colors duration-200
                  ${activeLink === link.name ? 'text-black' : 'text-gray-600 hover:text-black'}
                `}
              >
                {link.name}
                {/* Underline for active state */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300
                    ${activeLink === link.name ? 'w-full' : 'w-0'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-black focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-sm">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveLink(link.name);
                setIsOpen(false);
              }}
              className={`
                block w-full text-left px-3 py-3 font-serif text-lg rounded-md transition-colors
                ${activeLink === link.name
                  ? 'bg-gray-50 text-black font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'}
              `}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
