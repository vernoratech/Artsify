import React from 'react'
import { Camera, CheckCircle, Gift, Palette } from 'lucide-react'

const steps = [
  { icon: <Camera size={32} />, title: "Send Photo", desc: "Upload your favorite high-quality picture." },
  { icon: <Palette size={32} />, title: "Choose Style", desc: "Select size and medium (Pencil, Charcoal, etc)." },
  { icon: <CheckCircle size={32} />, title: "Approve Sketch", desc: "Review the initial outline before finalizing." },
  { icon: <Gift size={32} />, title: "Get Artwork", desc: "Receive your masterpiece at your doorstep." },
];

const How_It_Works = () => {
  return (
    <section className="py-20 bg-sky-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900">How It Works</h2>
          <div className="w-16 h-1 bg-sky-300 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-sky-500 mb-6 border-4 border-sky-50">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold font-serif text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default How_It_Works
