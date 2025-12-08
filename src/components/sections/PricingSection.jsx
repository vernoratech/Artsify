import React from 'react'

const PricingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-8">Transparent Pricing</h2>
        <div className="bg-gradient-to-r from-pink-50 to-sky-50 rounded-2xl p-8 md:p-12 shadow-sm border border-pink-100 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Single Portrait</p>
            <p className="text-4xl font-serif text-gray-800">₹500</p>
          </div>
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Couple Portrait</p>
            <p className="text-4xl font-serif text-gray-800">₹700</p>
          </div>
          <button
            onClick={() => navigateTo('commissions')}
            className="mt-4 md:mt-0 md:ml-8 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all rounded-full"
          >
            See Full Pricing
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
