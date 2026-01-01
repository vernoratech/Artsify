import React, { useState, useEffect, useRef } from 'react'
import img1 from '../../assets/Artsify-Client-Details/img1.jpg'
import img19 from '../../assets/Artsify-Client-Details/img19.jpg'
import img33 from '../../assets/Artsify-Client-Details/img33.jpeg'
import img12 from '../../assets/Artsify-Client-Details/img12.jpg'
import img5 from '../../assets/Artsify-Client-Details/img5.jpg'
import img30 from '../../assets/Artsify-Client-Details/img30.jpg'


const LatestCreations = () => {
    const [loadedImages, setLoadedImages] = useState({});
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null); // For tap-to-expand on mobile
    const sectionRef = useRef(null);

    const artPieces = [
        { id: 1, src: img19, title: "Depth of the Soul", category: "Portraits", tag: "Graphite • A4", aspect: "vertical", price: "₹500" },
        { id: 2, src: img33, title: "Unspoken Depth", category: "Portraits", tag: "Charcoal • A3", aspect: "square", price: "₹500" },
        { id: 9, src: img1, title: "Whisper of Elegance", category: "Couple Portraits", tag: "Pencil • A4", aspect: "vertical", price: "N/A" },
        { id: 10, src: img30, title: "Ties That Remain", category: "Family Portraits", tag: "Charcoal • A3", aspect: "square", price: "₹700" },
        { id: 11, src: img12, title: "Classic Charm", category: "Phone Cases", tag: "Acrylic • Custom", aspect: "vertical", price: "₹1200" },
        { id: 12, src: img5, title: "Thoughts in Form", category: "Phone Cases", tag: "Acrylic • Case", aspect: "square", price: "₹400" },
    ];

    const displayPieces = artPieces.slice(0, 5);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Handle image load
    const handleImageLoad = (id) => {
        setLoadedImages(prev => ({ ...prev, [id]: true }));
    };

    // Handle tap to expand (for mobile/tablet)
    const handleCardClick = (index) => {
        // Toggle: if same card is tapped, collapse it; otherwise expand the tapped one
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <>
            <section ref={sectionRef} className="hidden md:block py-20 bg-gray-50 overflow-hidden">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                    .poppins-text { font-family: 'Poppins', sans-serif; }
                    
                    /* Shimmer loading effect */
                    @keyframes shimmer {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                    .skeleton-shimmer {
                        background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
                        background-size: 200% 100%;
                        animation: shimmer 1.5s infinite;
                    }
                    
                    /* Floating animation - desktop only */
                    @media (hover: hover) {
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-5px); }
                        }
                        .float-animation:hover {
                            animation: float 3s ease-in-out infinite;
                        }
                    }
                    
                    /* Shine effect on hover - desktop only */
                    .shine-effect::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 50%;
                        height: 100%;
                        background: linear-gradient(
                            90deg,
                            transparent,
                            rgba(255, 255, 255, 0.3),
                            transparent
                        );
                        transition: left 0.5s ease;
                        z-index: 10;
                    }
                    @media (hover: hover) {
                        .shine-effect:hover::before {
                            left: 100%;
                        }
                    }
                    .shine-effect.active::before {
                        left: 100%;
                    }
                    
                    /* Staggered animation */
                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(40px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }
                    .stagger-item {
                        opacity: 0;
                    }
                    .stagger-item.visible {
                        animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    
                    /* Price badge glow */
                    .price-badge {
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                    }
                    
                    /* Category pill */
                    .category-pill {
                        background: rgba(255, 255, 255, 0.15);
                        backdrop-filter: blur(10px);
                        border: 1px solid rgba(255, 255, 255, 0.2);
                    }
                    
                    /* Gallery card base styles */
                    .gallery-card {
                        width: 4rem;
                        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    
                    /* Desktop hover behavior */
                    @media (hover: hover) and (min-width: 768px) {
                        .gallery-card {
                            width: 7rem;
                        }
                        .gallery-card:hover {
                            width: 500px;
                        }
                    }
                    
                    /* Tablet/Medium screens */
                    @media (min-width: 768px) and (max-width: 1023px) {
                        .gallery-card {
                            width: 5rem;
                        }
                        .gallery-card.active {
                            width: 350px;
                        }
                    }
                    
                    /* Desktop without hover (touch screens) */
                    @media (min-width: 1024px) {
                        .gallery-card {
                            width: 7rem;
                        }
                        .gallery-card.active {
                            width: 500px;
                        }
                    }
                    
                    /* Mobile tap hint */
                    @keyframes pulse-subtle {
                        0%, 100% { opacity: 0.6; }
                        50% { opacity: 1; }
                    }
                    .tap-hint {
                        animation: pulse-subtle 2s ease-in-out infinite;
                    }

                `}</style>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 poppins-text">
                    {/* Header with animation */}
                    <div className={`text-center transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 text-xs font-medium rounded-full mb-4 tracking-wider uppercase">
                            ✨ Fresh from the Studio
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto text-gray-900 mb-3">
                            Our Latest <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Creations</span>
                        </h1>
                        <p className="text-sm md:text-base text-slate-500 text-center max-w-lg mx-auto leading-relaxed">
                            A visual collection of our most recent works — each piece crafted with intention, emotion, and style.
                        </p>
                    </div>

                    {/* Tap hint for mobile */}
                    <div className="flex justify-center mt-6 md:hidden">
                        <div className="tap-hint flex items-center gap-2 text-gray-400 text-xs">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                            <span>Tap to expand</span>
                        </div>
                    </div>

                    {/* Gallery */}
                    <div className="flex items-center justify-center gap-2 md:gap-3 h-[350px] md:h-[420px] w-full max-w-6xl mt-6 md:mt-12 mx-auto">
                        {displayPieces.map((piece, index) => {
                            const isActive = activeIndex === index;

                            return (
                                <div
                                    key={piece.id}
                                    onClick={() => handleCardClick(index)}
                                    onMouseEnter={() => setActiveIndex(null)}
                                    className={`
                                        stagger-item 
                                        ${isVisible ? 'visible' : ''} 
                                        gallery-card
                                        ${isActive ? 'active' : ''}
                                        relative group flex-shrink-0 rounded-2xl overflow-hidden h-[320px] md:h-[400px] 
                                        shadow-lg hover:shadow-2xl shine-effect float-animation cursor-pointer
                                    `}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Skeleton loader */}
                                    {!loadedImages[piece.id] && (
                                        <div className="absolute inset-0 skeleton-shimmer rounded-2xl" />
                                    )}

                                    {/* Main Image */}
                                    <img
                                        className={`
                                            h-full w-full object-cover object-center 
                                            grayscale group-hover:grayscale-0 
                                            ${isActive ? 'grayscale-0 scale-110' : ''}
                                            transition-all duration-700 group-hover:scale-110 
                                            ${loadedImages[piece.id] ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        src={piece.src}
                                        alt={piece.title}
                                        loading="lazy"
                                        onLoad={() => handleImageLoad(piece.id)}
                                        onError={(e) => e.target.src = 'https://placehold.co/600x800/EEE/31343C?font=playfair-display&text=Art'}
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`
                                        absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                                        opacity-0 group-hover:opacity-100 
                                        ${isActive ? 'opacity-100' : ''}
                                        transition-all duration-500
                                    `} />

                                    {/* Price Badge */}
                                    <div className={`
                                        absolute top-3 right-3 
                                        opacity-0 group-hover:opacity-100 
                                        ${isActive ? 'opacity-100 translate-y-0' : 'translate-y-2'}
                                        transform group-hover:translate-y-0 transition-all duration-300 delay-100
                                    `}>
                                        <span className="price-badge px-3 py-1.5 rounded-full text-white text-xs font-semibold">
                                            {piece.price}
                                        </span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className={`
                                        absolute bottom-0 left-0 w-full p-4 md:p-5 
                                        opacity-0 group-hover:opacity-100 
                                        ${isActive ? 'opacity-100 translate-y-0' : 'translate-y-4'}
                                        transform group-hover:translate-y-0 transition-all duration-400
                                    `}>
                                        <div className="space-y-1 md:space-y-2">
                                            <span className="category-pill inline-block px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-white/90 text-[9px] md:text-[10px] font-medium uppercase tracking-wider">
                                                {piece.category}
                                            </span>
                                            <h3 className="text-white font-semibold text-base md:text-lg truncate">
                                                {piece.title}
                                            </h3>
                                            <p className="text-white/70 text-[10px] md:text-xs flex items-center gap-1.5">
                                                <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                                </svg>
                                                {piece.tag}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

        </>
    )
}

export default LatestCreations