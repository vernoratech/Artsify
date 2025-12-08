import React, { useState } from 'react'
import { X as CloseIcon } from 'lucide-react'
import { artPieces } from '../../data/artPieces'

const GallerySection = () => {
  const [filter, setFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = ['All', 'Portraits', 'Couple Portraits', 'Sketches', 'Concept Art']

  const filteredImages = filter === 'All' ? artPieces : artPieces.filter((image) => image.category === filter)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">Portfolio Gallery</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((art) => (
            <div
              key={art.id}
              className="break-inside-avoid group relative cursor-pointer"
              onClick={() => setSelectedImage(art)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
                <img
                  src={art.src}
                  alt={art.title}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white font-serif text-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {art.title}
                  </p>
                  <p className="text-pink-200 text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {art.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-pink-400 p-2"
          >
            <CloseIcon size={32} />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}

export default GallerySection
