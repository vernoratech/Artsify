import React, { useState } from 'react'
import { ChevronDown, Search, HelpCircle, Package, CreditCard, Truck, Palette, Clock, Sparkles } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

const FAQ = () => {
  const navigate = useNavigate()
  const [openQuestion, setOpenQuestion] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'ordering', label: 'Ordering', icon: Package },
    { id: 'pricing', label: 'Pricing & Payment', icon: CreditCard },
    { id: 'shipping', label: 'Shipping', icon: Truck },
    { id: 'artwork', label: 'Artwork Process', icon: Palette },
  ]

  const faqs = [
    // Ordering
    {
      id: 1,
      category: 'ordering',
      question: "How do I place an order for a custom portrait?",
      answer: "Simply contact us via WhatsApp or email with your reference photo and requirements. We'll discuss the details, provide a quote, and once you confirm with 50% advance payment, we'll start working on your artwork!"
    },
    {
      id: 2,
      category: 'ordering',
      question: "What photo quality do you need for the best results?",
      answer: "We recommend high-resolution photos with good lighting and clear facial features. The higher the quality, the better we can capture the details. Avoid blurry, overexposed, or heavily filtered images."
    },
    {
      id: 3,
      category: 'ordering',
      question: "Can I request changes or revisions?",
      answer: "Absolutely! We offer up to 2 rounds of free revisions to ensure you're completely satisfied. We'll share progress photos at key stages so you can provide feedback before completion."
    },
    // Pricing
    {
      id: 4,
      category: 'pricing',
      question: "What are your pricing options?",
      answer: "Our prices vary based on size, medium, and complexity. Single portraits start at ₹500 (A4), couple portraits from ₹700, and family portraits from ₹1200. Custom sizes and premium options are also available."
    },
    {
      id: 5,
      category: 'pricing',
      question: "What payment methods do you accept?",
      answer: "We accept UPI (GPay, PhonePe, Paytm), bank transfers, and all major debit/credit cards. A 50% advance is required to start your artwork, with the balance due before shipping."
    },
    {
      id: 6,
      category: 'pricing',
      question: "Do you offer refunds?",
      answer: "Due to the custom nature of our work, we don't offer refunds once the artwork has begun. However, we work closely with you throughout the process to ensure complete satisfaction."
    },
    // Shipping
    {
      id: 7,
      category: 'shipping',
      question: "How long does delivery take?",
      answer: "Domestic orders (India) typically arrive within 3-5 business days after completion. International shipping takes 10-15 business days. We use secure packaging to ensure your artwork arrives safely."
    },
    {
      id: 8,
      category: 'shipping',
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. International shipping charges vary by destination and are calculated at checkout. All international orders include tracking."
    },
    {
      id: 9,
      category: 'shipping',
      question: "How is the artwork packaged?",
      answer: "All artworks are carefully packaged with protective layers, rigid backing, and waterproof wrapping. Framed pieces get extra corner protection. We treat every piece as if it were our own!"
    },
    // Artwork Process
    {
      id: 10,
      category: 'artwork',
      question: "How long does it take to complete a portrait?",
      answer: "Standard portraits take 7-14 days depending on complexity. Rush orders (3-5 days) are available for an additional fee. We'll provide an estimated timeline when you place your order."
    },
    {
      id: 11,
      category: 'artwork',
      question: "What mediums do you work with?",
      answer: "We offer pencil and charcoal medium for portraits and custom sketches, and acrylic colors for custom phone covers. We will be offering fabric painting soon."
    },
    {
      id: 12,
      category: 'artwork',
      question: "Can you combine multiple photos into one portrait?",
      answer: "Yes! We can create composite portraits combining people from different photos, add backgrounds, or even include those who are no longer with us. Just provide the reference images."
    },
  ]

  // Filter FAQs
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Popular questions for featured section
  const popularQuestions = faqs.filter(faq => [1, 4, 7, 10].includes(faq.id))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fadeUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
              <HelpCircle size={14} />
              Help Center
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
              How Can We <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Help?</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Find answers to common questions about ordering, pricing, shipping, and our artwork process.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for answers..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-pink-300 focus:ring-2 focus:ring-pink-100 shadow-lg"
              />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Popular Questions - Cards Style */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularQuestions.map((faq, index) => (
              <AnimateOnScroll key={faq.id} animation="fadeUp" delay={index * 75}>
                <button
                  onClick={() => {
                    setActiveCategory(faq.category)
                    setOpenQuestion(faq.id)
                    document.getElementById('faq-list')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 text-left w-full hover:-translate-y-1"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-pink-100 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    {faq.category === 'ordering' && <Package className="w-5 h-5 text-pink-600" />}
                    {faq.category === 'pricing' && <CreditCard className="w-5 h-5 text-pink-600" />}
                    {faq.category === 'shipping' && <Truck className="w-5 h-5 text-pink-600" />}
                    {faq.category === 'artwork' && <Clock className="w-5 h-5 text-pink-600" />}
                  </div>
                  <h3 className="font-medium text-gray-900 text-sm leading-snug line-clamp-2">
                    {faq.question}
                  </h3>
                </button>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs + FAQ Accordion */}
      <section id="faq-list" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <AnimateOnScroll animation="fadeUp">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <cat.icon size={16} />
                  {cat.label}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No questions found matching your search.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all') }}
                  className="mt-4 text-pink-600 font-medium hover:text-pink-700"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <AnimateOnScroll key={faq.id} animation="fadeUp" delay={index * 30}>
                  <div
                    className={`bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300 ${openQuestion === faq.id ? 'shadow-lg ring-1 ring-pink-100' : 'hover:bg-gray-100'
                      }`}
                  >
                    <button
                      onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-4 pr-4">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${openQuestion === faq.id ? 'bg-pink-100' : 'bg-white'
                          }`}>
                          {faq.category === 'ordering' && <Package className={`w-4 h-4 ${openQuestion === faq.id ? 'text-pink-600' : 'text-gray-400'}`} />}
                          {faq.category === 'pricing' && <CreditCard className={`w-4 h-4 ${openQuestion === faq.id ? 'text-pink-600' : 'text-gray-400'}`} />}
                          {faq.category === 'shipping' && <Truck className={`w-4 h-4 ${openQuestion === faq.id ? 'text-pink-600' : 'text-gray-400'}`} />}
                          {faq.category === 'artwork' && <Palette className={`w-4 h-4 ${openQuestion === faq.id ? 'text-pink-600' : 'text-gray-400'}`} />}
                        </span>
                        <span className={`font-medium ${openQuestion === faq.id ? 'text-gray-900' : 'text-gray-700'}`}>
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openQuestion === faq.id ? 'rotate-180 text-pink-600' : ''
                          }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${openQuestion === faq.id ? 'max-h-48' : 'max-h-0'
                        }`}
                    >
                      <p className="px-6 pb-5 pl-18 text-gray-600 leading-relaxed ml-12">{faq.answer}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <AnimateOnScroll animation="fadeUp">
              <div>
                <p className="text-3xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-500">Avg. Response</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={75}>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={150}>
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9★</p>
                <p className="text-sm text-gray-500">Client Rating</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeUp" delay={225}>
              <div>
                <p className="text-3xl font-bold text-gray-900">7-14</p>
                <p className="text-sm text-gray-500">Days Delivery</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fadeUp">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
              <Sparkles size={14} />
              Still Have Questions?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              We're Here to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Help!</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is always ready to assist you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+918446060142"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                < FaWhatsapp size={30} />
                Chat on WhatsApp
              </a>
              <button
                onClick={() => navigate('/contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Us
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

export default FAQ
