import React from 'react'
import { Instagram, MessageCircle } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Form */}
          <AnimateOnScroll animation="fadeRight" duration={800} className="order-2 md:order-1">
            <form className="space-y-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors placeholder-gray-400 font-serif"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors placeholder-gray-400 font-serif"
                />
              </div>
              <div className="relative">
                <textarea
                  rows="3"
                  placeholder="Your message"
                  className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors resize-none placeholder-gray-400 font-serif"
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full md:w-auto px-12 py-3 bg-black text-white font-serif tracking-wide hover:bg-gray-800 transition-colors duration-300 shadow-lg"
              >
                Send
              </button>
            </form>
          </AnimateOnScroll>

          {/* Right Side - Info */}
          <AnimateOnScroll animation="fadeLeft" duration={800} delay={200} className="order-1 md:order-2 space-y-8 text-center md:text-right">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                I'm always happy <br /> to{' '}
                <span className="relative inline-block px-2">
                  connect
                  <span className="absolute inset-0 bg-pink-100 -z-10 transform -rotate-2 rounded-sm skew-x-3"></span>
                </span>
                .
              </h2>
            </div>

            <p className="text-gray-500 font-light text-lg leading-relaxed max-w-md ml-auto">
              Reach out with questions, commission ideas, or project inquiries, and I'll get back to you as soon as
              inspiration strikes.
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex flex-col items-center md:items-end space-y-1">
                <h3 className="text-2xl font-serif text-gray-900">Artsify</h3>
                <p className="text-sky-500 text-sm tracking-widest uppercase font-medium">Est. 2024</p>
              </div>

              <div className="flex flex-col items-center md:items-end space-y-2 text-gray-600">
                <a href="mailto:artsify.official@gmail.com" className="hover:text-pink-500 transition-colors">
                  artsify.official@gmail.com
                </a>
                <a href="tel:+919876543210" className="hover:text-pink-500 transition-colors">
                  +91 98765 43210
                </a>
              </div>

              <div className="flex justify-center md:justify-end space-x-6 pt-2">
                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

export default Contact
