import React, { useState } from 'react'
import { Upload, Heart } from 'lucide-react'

const PricingAndCommissions = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'single',
    medium: 'pencil',
    size: 'A4',
    customSize: '',
    notes: '',
  })

  const basePrice = formData.type === 'single' ? 500 : 700

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section className="py-20 bg-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Commissions &amp; Pricing</h2>
          <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Choose your perfect style. Whether it's a solo portrait or a couple's memory, we bring it to life on paper.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <h3 className="text-2xl font-serif text-gray-800 mb-2">Single Portrait</h3>
              <p className="text-gray-500 mb-6">Perfect for self-portraits or individual gifts.</p>
              <div className="text-4xl font-serif text-sky-500 mb-6">
                ₹500 <span className="text-base text-gray-400 font-sans">/ per face</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> A4 Size Standard
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> High-detail Shading
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-pink-400 mr-2" /> Premium Paper Quality
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/20 rounded-bl-full -mr-16 -mt-16" />
              <h3 className="text-2xl font-serif mb-2">Couple Portrait</h3>
              <p className="text-gray-400 mb-6">Capture the bond between two souls.</p>
              <div className="text-4xl font-serif text-pink-400 mb-6">
                ₹700 <span className="text-base text-gray-500 font-sans">/ per couple</span>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> A4 or A3 Size Options
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> Intricate Detailing
                </li>
                <li className="flex items-center">
                  <Heart size={16} className="text-sky-400 mr-2" /> Perfect Anniversary Gift
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-8">
            <h3 className="text-2xl font-serif text-gray-800 mb-6">Place Your Order</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Portrait Type</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent outline-none"
                  >
                    <option value="single">Single (₹500)</option>
                    <option value="couple">Couple (₹700)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Art Medium</label>
                  <select
                    name="medium"
                    value={formData.medium}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none"
                  >
                    <option value="pencil">Graphite Pencil</option>
                    <option value="charcoal">Charcoal</option>
                    <option value="acrylic">Acrylic Paint</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Size</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-transparent outline-none"
                  >
                    <option value="A5">A5 (Small)</option>
                    <option value="A4">A4 (Standard)</option>
                    <option value="A3">A3 (Large)</option>
                    <option value="Custom">Custom Size</option>
                  </select>
                </div>
                {formData.size === 'Custom' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Specify Dimensions</label>
                    <input
                      type="text"
                      name="customSize"
                      placeholder="e.g. 20x30 inches"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sky-300 outline-none"
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Upload Reference Photo</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400 group-hover:text-sky-500 transition-colors" />
                    <div className="flex text-sm text-gray-600 justify-center">
                      <span className="relative rounded-md font-medium text-sky-600 hover:text-sky-500 focus-within:outline-none">
                        Upload a file
                      </span>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, up to 10MB</p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full py-4 bg-linear-to-r from-sky-400 to-pink-400 text-white font-serif text-lg rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Proceed to Payment (₹{basePrice})
              </button>

              <p className="text-xs text-center text-gray-400 mt-4">
                *Secure online payment. You will receive a confirmation via WhatsApp/Email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingAndCommissions
