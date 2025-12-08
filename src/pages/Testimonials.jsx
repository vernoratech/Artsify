import { Heart, Instagram } from 'lucide-react'
import React from 'react'
import { artPieces } from '../data/artPieces'

const testimonials = [
  { id: 1, text: "The detail is absolutely insane! Best anniversary gift I've ever given.", author: "Priya S." },
  { id: 2, text: "Ordered a sketch of my late grandfather. It brought tears to my eyes. Thank you!", author: "Rahul M." },
  { id: 3, text: "Professional, fast, and exactly what I wanted. Highly recommended.", author: "Sneha K." },
];

const images = artPieces.slice(0, 4);


const Testimonials = () => {
  return (
  <>
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-gray-900 mb-12">Client Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-sky-50/30 p-6 rounded-xl border border-sky-100">
              <div className="flex justify-center mb-4 text-pink-400">
                <Heart size={16} fill="currentColor" />
                <Heart size={16} fill="currentColor" />
                <Heart size={16} fill="currentColor" />
                <Heart size={16} fill="currentColor" />
                <Heart size={16} fill="currentColor" />
              </div>
              <p className="text-gray-600 italic mb-4">"{t.text}"</p>
              <p className="text-gray-900 font-medium font-serif">- {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-2 text-pink-500">
          <Instagram size={24} />
        </div>
        <h3 className="text-2xl font-serif text-gray-900">Follow @artsify.__</h3>
        <p className="text-gray-500 text-sm mt-2">DM on Instagram or order via website</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 px-1 md:px-4 max-w-7xl mx-auto">
        {images.map((img) => (
          <div key={img.id} className="relative aspect-square group overflow-hidden bg-white">
            <img
              src={img.src}
              alt="Insta post"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => { e.target.src = `https://placehold.co/400x400/EEE/31343C?font=playfair-display&text=Art`; }}
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Heart className="fill-current" />
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}

export default Testimonials
