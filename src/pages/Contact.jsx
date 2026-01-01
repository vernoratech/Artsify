import React, { useState } from 'react'
import { Instagram, Mail, ChevronDown, Sparkles, Heart } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import { FaWhatsapp } from "react-icons/fa"
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    interest: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .send(
        'service_6ngilwp',     // 🔴 replace
        'template_on2dsob',    // 🔴 replace
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
        },
        'kTMobhLTwJh8biKQ2'      // 🔴 replace
      )
      .then(() => {
        setSuccess(true)
        setLoading(false)
        setFormData({
          name: '',
          email: '',
          phone:'',
          interest: '',
          message: '',
        })

        setTimeout(() => setSuccess(false), 4000)
      })
      .catch(() => {
        setLoading(false)
        alert('Something went wrong. Please try again.')
      })
  }

  const faqs = [
    {
      question: "How long does a custom portrait take?",
      answer: "Typically 7-14 days depending on complexity. Rush orders (3-5 days) are available for an additional fee."
    },
    {
      question: "What photo quality do you need?",
      answer: "We work best with clear, well-lit photos. The higher the resolution, the better the final artwork will be."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship worldwide. Domestic orders take 3-5 days, international orders take 10-15 days."
    },
    {
      question: "Can I request revisions?",
      answer: "Absolutely! We offer up to 2 rounds of revisions to ensure you're completely satisfied with your artwork."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, bank transfer, and all major debit/credit cards. 50% advance is required to start."
    }
  ]

  const quickContactCards = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "Quick replies",
      action: "Chat Now",
      href: "https://wa.me/+918446060142",
      color: "bg-green-500",
      hoverColor: "hover:bg-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Detailed inquiries",
      action: "Send Email",
      href: "mailto:artsify98@gmail.com",
      color: "bg-pink-500",
      hoverColor: "hover:bg-pink-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      subtitle: "See our work",
      action: "Follow Us",
      href: "https://www.instagram.com/artsify.__/#",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
      hoverColor: "hover:opacity-90"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
                <Heart size={14} className="fill-current" />
                Let's Create Together
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
                Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Touch</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Have a question or want to commission a custom artwork? I'd love to hear from you!
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">24h</p>
                  <p className="text-sm text-gray-500">Response Time</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-500">Client Rating</p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 -mt-8 relative z-10 hidden md:block">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickContactCards.map((card, index) => (
              <AnimateOnScroll key={index} animation="fadeUp" delay={index * 100}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 ${card.color} ${card.hoverColor} rounded-xl flex items-center justify-center mb-4 transition-colors`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{card.subtitle}</p>
                  <span className="text-sm font-medium text-pink-600 group-hover:text-pink-700 flex items-center gap-1">
                    {card.action}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section id="contact" className="relative py-24 bg-white overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Form */}
            <AnimateOnScroll animation="fadeRight" duration={800} className="order-2 md:order-1">
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors placeholder-gray-400 font-serif"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors placeholder-gray-400 font-serif"
                  />
                </div>
                <div className="relative">
                  <input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                    className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors placeholder-gray-400 font-serif"
                  />
                </div>
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors font-serif cursor-pointer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>What are you interested in?</option>
                    <option>Single Portrait</option>
                    <option>Couple Portrait</option>
                    <option>Family Portrait</option>
                    <option>Pet Portrait</option>
                    <option>Custom Phone Case</option>
                    <option>Something Else</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    placeholder="Your message"
                    required
                    className="w-full py-3 bg-transparent border-b border-gray-300 text-gray-800 focus:border-black focus:outline-none transition-colors resize-none placeholder-gray-400 font-serif"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-12 py-3 bg-black text-white font-serif tracking-wide hover:bg-gray-800 transition-colors duration-300 shadow-lg"
                >
                  {loading ? 'Sending...' : 'Send'}
                </button>
                {success && (
                  <div className="w-full mb-6 px-4 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 text-green-800 shadow-sm">
                    🎉 Thanks! Your request has been successfully sent.
                  </div>
                )}


              </form>
            </AnimateOnScroll>

            {/* Right Side - Info */}
            <AnimateOnScroll animation="fadeLeft" duration={800} delay={200} className="order-1 md:order-2 space-y-8 text-center md:text-right">
              <div className="relative inline-block">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                  I'm always happy <br /> to{' '}
                  <span className="relative inline-block px-2">
                    connect
                    <span className="absolute inset-0 bg-pink-100 -z-10 transform -rotate-2 rounded-sm skew-x-3"></span>
                  </span>
                  .
                </h2>
              </div>

              <p className="text-gray-500 font-light text-lg leading-relaxed max-w-md ml-auto">
                Reach out with questions, commission ideas, or project inquiries, and I'll get back to you as soon as
                inspiration strikes.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex flex-col items-center md:items-end space-y-1">
                  <h3 className="text-2xl font-serif text-gray-900">Artsify</h3>
                  <p className="text-sky-500 text-sm tracking-widest uppercase font-medium">Est. 2024</p>
                </div>

                <div className="flex flex-col items-center md:items-end space-y-2 text-gray-600">
                  <a href="mailto:artsify.artsify98@gmail.com" className="hover:text-pink-500 transition-colors">
                    artsify98@gmail.com
                  </a>
                  <a href="tel:+91 8446060142" className="hover:text-pink-500 transition-colors">
                    +91 8446060142
                  </a>
                </div>

                <div className="flex justify-center md:justify-end space-x-6 pt-2">
                  <a href="https://www.instagram.com/artsify.__/#" className="text-gray-400 hover:text-pink-500 transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="https://wa.me/+918446060142" className="text-gray-400 hover:text-green-500 transition-colors">
                    < FaWhatsapp size={24} />
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 text-sky-600 rounded-full text-sm font-medium mb-4">
                <Sparkles size={14} />
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Questions</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimateOnScroll key={index} animation="fadeUp" delay={index * 50}>
                <div
                  className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'shadow-lg' : 'shadow-sm hover:shadow-md'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-40' : 'max-h-0'
                      }`}
                  >
                    <p className="px-6 pb-5 text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Ready to Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Beautiful</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your favorite memories into stunning artwork that lasts forever.
            </p>
            <a
              href="https://wa.me/+918446060142"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-full hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
            >
              < FaWhatsapp size={30} />
              Start a Conversation on WhatsApp
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

export default Contact
