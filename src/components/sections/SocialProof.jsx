import React from 'react'
import { Instagram, ExternalLink, Star } from 'lucide-react'
import img1 from '../../assets/Artsify-Client-Details/img1.jpg'
import img19 from '../../assets/Artsify-Client-Details/img19.jpg'
import img21 from '../../assets/Artsify-Client-Details/img21.jpg'
import img24 from '../../assets/Artsify-Client-Details/img24.jpg'



const SocialProof = () => {

    const testimonials = [
        { id: 1, text: "The detail is absolutely insane! Best anniversary gift I've ever given.", author: "Priya S." },
        { id: 2, text: "Ordered a sketch of my late grandfather. It brought tears to my eyes. Thank you!", author: "Rahul M." },
        { id: 3, text: "Professional, fast, and exactly what I wanted. Highly recommended.", author: "Sneha K." },
    ];

    const artPieces = [
        { id: 1, src: img19, title: "Ethereal Gaze", category: "Portraits", tag: "Graphite • A4", aspect: "vertical", price: "₹500" },
        { id: 2, src: img24, title: "Monochrome Study", category: "Portraits", tag: "Charcoal • A3", aspect: "square", price: "₹500" },
        { id: 3, src: img1, title: "Divine Joy", category: "Sketches", tag: "Pencil • A4", aspect: "vertical", price: "N/A" },
        { id: 4, src: img21, title: "The Dark Knight", category: "Sketches", tag: "Marker • A5", aspect: "vertical", price: "₹600" },
    ];

    return (
        <section id="testimonials-instagram" className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Left: Testimonials */}
                    <div>
                        <h3 className="text-2xl font-serif text-gray-900 mb-8">Happy Customers</h3>
                        <div className="space-y-6">
                            {testimonials.map((t, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="flex text-yellow-400 mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 text-xs font-bold">
                                            {t.author[0]}
                                        </div>
                                        <span className="text-sm font-bold text-gray-800">{t.author}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Instagram Strip */}
                    <div>
                        <div className="flex justify-between items-end mb-8">
                            <h3 className="text-2xl font-serif text-gray-900">@artsify.__</h3>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-pink-500 font-medium hover:underline flex items-center gap-1">
                                Follow <ExternalLink size={14} />
                            </a>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {artPieces.slice(0, 4).map((art) => (
                                <div key={art.id} className="aspect-square bg-white p-1 shadow-sm rounded-lg hover:shadow-md transition-shadow">
                                    <img
                                        src={art.src}
                                        alt="Insta"
                                        className="w-full h-full object-cover rounded"
                                        onError={(e) => e.target.src = 'https://placehold.co/300x300/EEE/31343C?font=playfair-display&text=Post'}
                                    />
                                </div>
                            ))}
                        </div>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                            <Instagram size={20} /> Follow on Instagram
                        </a>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SocialProof