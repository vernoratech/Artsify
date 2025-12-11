import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PricingSection = () => {
  const navigate = useNavigate(); 
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-sky-50/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-8">Simple, Transparent Pricing</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-10">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full md:w-64 hover:-translate-y-1 transition-transform duration-300">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Single Portrait</p>
            <p className="text-4xl font-serif text-gray-800">₹500</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-pink-300 w-full md:w-64 transform md:scale-110">
            <div className="absolute top-0 right-0 bg-pink-300 text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Couple Portrait</p>
            <p className="text-4xl font-serif text-pink-500">₹700</p>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-8">Custom sizes and family portraits available on request.</p>
        <button 
          onClick={() => navigate('/services')}
          className="px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          See full details & order <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}

export default PricingSection
