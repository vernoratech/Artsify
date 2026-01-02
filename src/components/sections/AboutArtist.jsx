import { ArrowRight, PenTool } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutArtist = () => {
  const navigate = useNavigate();
  return (
     <section id="about" className="py-20 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif text-gray-900">Meet the Artist Behind Artsify</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Illustration/Image */}
        <div className="relative flex justify-center">
           <div className="relative w-80 h-96">
              <div className="absolute inset-0 bg-pink-100 rounded-tr-[80px] rounded-bl-[80px] transform rotate-3"></div>
              <div className="absolute inset-0 bg-sky-100 rounded-tl-[80px] rounded-br-[80px] transform -rotate-3 mix-blend-multiply"></div>
              {/* SVG Sketch Placeholder */}
              <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
                 {/* <PenTool className="text-gray-300 w-24 h-24 opacity-50" />
                 <span className="absolute bottom-4 text-gray-400 font-serif italic">Artist at Work</span>
                  */}
                  <img src="https://res.cloudinary.com/dj1fxrmef/image/upload/v1767250359/AditiPatilGBG_fjrwkg_tisoph.jpg" alt="" className="w-full h-full object-cover rounded-2xl" />
              </div>
           </div>
        </div>

        {/* Right: Content */}
        <div>
          <h3 className="text-2xl font-serif text-gray-800 mb-4">Turning Memories into Art</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            I started Artsify with a simple mission: to turn fleeting digital photos into tangible, hand-drawn treasures. 
            With a passion for realistic shading and intricate details, I specialize in creating gifts that feel personal and timeless.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Every stroke is deliberate, and every portrait tells a story. Whether it's charcoal, pencil, or acrylics, quality is my signature.
          </p>
          
          {/* Mini Timeline */}
          <div className="flex gap-4 border-t border-gray-100 pt-6">
            <div>
              <span className="block text-xl font-bold text-sky-500">2017</span>
              <span className="text-xs text-gray-500 uppercase">Started</span>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div>
              <span className="block text-xl font-bold text-pink-500">2022</span>
              <span className="text-xs text-gray-500 uppercase">1st Sale</span>
            </div>
            <div className="w-px bg-gray-200"></div>
            <div>
              <span className="block text-xl font-bold text-gray-800">2025</span>
              <span className="text-xs text-gray-500 uppercase">Artsify</span>
            </div>
          </div>
          
          <button 
            onClick={() => navigate('/about')}
            className="mt-8 text-pink-500 font-medium hover:text-pink-700 flex items-center gap-2"
          >
            Read full story <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutArtist