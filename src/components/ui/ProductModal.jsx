import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X as CloseIcon, Heart, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const ProductModal = ({ product, isOpen, onClose, wishlist, toggleWishlist }) => {
    const navigate = useNavigate()
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleEscape)
        return () => window.removeEventListener('keydown', handleEscape)
    }, [onClose])

    if (!isOpen || !product) return null

    const isWishlisted = wishlist.includes(product.id)

    // Use portal to render modal at document.body level
    // This ensures fixed positioning works correctly regardless of parent styles
    const modalContent = (
        <div
            className="product-modal-overlay"
            onClick={onClose}
        >
            <style>{`
                .product-modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    width: 100vw;
                    height: 100vh;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 1rem;
                    background: rgba(0, 0, 0, 0.7);
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                }
                
                @keyframes modalSlideIn {
                    from { 
                        opacity: 0;
                        transform: scale(0.95) translateY(20px);
                    }
                    to { 
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }
                
                .product-modal-content {
                    animation: modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                
                .gradient-text {
                    background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                
                .badge-bestseller { background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); }
                .badge-popular { background: linear-gradient(135deg, #ec4899 0%, #be185d 100%); }
                .badge-sale { background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); }
                .badge-new { background: linear-gradient(135deg, #10b981 0%, #059669 100%); }
                .badge-limited { background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); }
                .badge-premium { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); }
                .badge-featured { background: linear-gradient(135deg, #38bdf8 0%, #f472b6 100%); }
            `}</style>

            <div
                className="product-modal-content relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>

                <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-y-auto">
                    {/* Image */}
                    <div className="md:w-1/2 aspect-square md:aspect-auto bg-gray-100 flex-shrink-0">
                        <img
                            src={product.src}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Details */}
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        {product.badge && (
                            <span className={`inline-block w-fit px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wide mb-4 badge-${product.badge.toLowerCase()}`}>
                                {product.badge}
                            </span>
                        )}

                        <span className="text-sm text-purple-600 font-medium mb-2">{product.category}</span>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {product.title}
                        </h2>
                        <p className="text-gray-500 text-sm mb-4">{product.tag}</p>

                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl font-bold gradient-text">₹{product.price}</span>
                            {product.originalPrice && (
                                <>
                                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                                    </span>
                                </>
                            )}
                        </div>

                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                            This is a unique handcrafted artwork created with attention to detail and passion. Each piece is made to order and can be customized according to your preferences.
                        </p>

                        {/* Size Options */}
                        <div className="mb-6">
                            <p className="text-sm font-medium text-gray-900 mb-2">Available Sizes</p>
                            <div className="flex gap-2">
                                {['A5', 'A4', 'A3', 'Custom'].map((size) => (
                                    <button
                                        key={size}
                                        className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-purple-500 hover:text-purple-600 transition-colors"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                            <button
                                onClick={(e) => toggleWishlist(e, product.id)}
                                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${isWishlisted
                                    ? 'bg-red-500 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                            </button>
                            <button onClick={() => {
                                onClose()
                                navigate('/contact')
                            }} className="flex-1 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2">
                                <ShoppingBag className="w-5 h-5" />
                                Order Now
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                            <div className="text-center">
                                <p className="text-xs text-gray-400">Handcrafted</p>
                                <p className="text-sm font-medium text-gray-700">100% Original</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-gray-400">Delivery</p>
                                <p className="text-sm font-medium text-gray-700">7-14 Days</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-gray-400">Support</p>
                                <p className="text-sm font-medium text-gray-700">24/7 Help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    // Render modal using portal to document.body
    // This ensures it appears in viewport center regardless of scroll position
    return createPortal(modalContent, document.body)
}

export default ProductModal
