import React, { useState } from 'react'
import { Palette, Users, Heart, Smartphone, Camera, Package, Clock, CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react'
import AnimateOnScroll from '../components/ui/AnimateOnScroll'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";

// Import sample images
import img1 from '../assets/Artsify-Client-Details/img1.jpg'
import img30 from '../assets/Artsify-Client-Details/img30.jpg'
import img3 from '../assets/Artsify-Client-Details/img3.jpg'
import img9 from '../assets/Artsify-Client-Details/img9.jpg'
import img8 from '../assets/Artsify-Client-Details/img8.jpg'
import img19 from '../assets/Artsify-Client-Details/img19.jpg'

const Services = () => {
  const navigate = useNavigate()
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      icon: Palette,
      title: "Single Portraits",
      description: "Capture your essence in a stunning hand-drawn portrait. Perfect for gifts, memorials, or personal keepsakes.",
      price: "₹500",
      duration: "7-10 days",
      image: img19,
      features: ["A4/A3 size options", "High-detail shading", "Premium art paper", "1 revision included"]
    },
    {
      id: 2,
      icon: Users,
      title: "Couple Portraits",
      description: "Celebrate love with a beautiful couple portrait. Ideal for anniversaries, weddings, or just because.",
      price: "₹700",
      duration: "10-14 days",
      image: img1,
      features: ["A3 recommended", "Intricate detailing", "Custom backgrounds", "2 revisions included"]
    },
    {
      id: 3,
      icon: Heart,
      title: "Family Portraits",
      description: "Bring your whole family together in one timeless artwork. A perfect way to preserve precious memories.",
      price: "₹1200",
      duration: "14-21 days",
      image: img30,
      features: ["A2/A1 size options", "Multiple subjects", "Custom compositions", "2 revisions included"]
    },
    {
      id: 4,
      icon: Smartphone,
      title: " Phone Cases",
      description: "Carry your art everywhere! Get your portrait or design on a premium quality phone case.",
      price: "₹400",
      duration: "5-7 days",
      image: img9,
      features: ["Hard shell case", "Vivid print quality", "All phone models", "Protective coating"]
    },
    {
      id: 5,
      icon: Camera,
      title: "Pet Portraits",
      description: "Celebrate your furry friends! We create adorable portraits that capture their unique personality.",
      price: "₹500",
      duration: "7-10 days",
      image: img8,
      features: ["Any pet type", "Action or portrait pose", "Custom backgrounds", "1 revision included"]
    },
    {
      id: 6,
      icon: Star,
      title: "Fan Art & Custom",
      description: "From anime characters to celebrities - we bring your favorite subjects to life with artistic flair.",
      price: "₹600",
      duration: "7-14 days",
      image: img3,
      features: ["Any subject/character", "Multiple styles", "Commercial options", "Full creative freedom"]
    }
  ]

  const process = [
    {
      step: 1,
      title: "Share Your Vision",
      description: "Send us your reference photo and tell us about your requirements via WhatsApp or email.",
      icon: FaWhatsapp
    },
    {
      step: 2,
      title: "Get a Quote",
      description: "We'll review your request and provide a detailed quote with timeline within 24 hours.",
      icon: CheckCircle
    },
    {
      step: 3,
      title: "Secure Your Spot",
      description: "Confirm your order with 50% advance payment. We accept UPI, bank transfer, and cards.",
      icon: Package
    },
    {
      step: 4,
      title: "Watch the Magic",
      description: "We'll share progress updates at key stages so you can provide feedback along the way.",
      icon: Camera
    },
    {
      step: 5,
      title: "Receive Your Art",
      description: "Pay the remaining balance and we'll carefully ship your artwork with tracking.",
      icon: Heart
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-sky-50 via-white to-pink-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-300/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <AnimateOnScroll animation="fadeUp">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
                <Palette size={14} />
                Custom Art Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-4">
                Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Moments</span> Into Art
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                From single portraits to family masterpieces, we create hand-crafted artwork that tells your story.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">50+</p>
                  <p className="text-sm text-gray-500">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">6</p>
                  <p className="text-sm text-gray-500">Art Services</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-gray-900">4.9★</p>
                  <p className="text-sm text-gray-500">Client Rating</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-medium mb-4">
                <Sparkles size={12} />
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Services</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.id} animation="fadeUp" delay={index * 75}>
                <div
                  className={`group relative bg-gray-50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${activeService === index ? 'ring-2 ring-pink-400 shadow-xl' : 'hover:shadow-lg'}`}
                  onClick={() => setActiveService(index)}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="text-white font-medium">{service.title}</span>
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-100 to-pink-100 rounded-xl flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-pink-600" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock size={14} />
                        {service.duration}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="mt-4 w-full py-2.5 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                      Get Started <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:hidden" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-medium mb-4">
                    Featured Service
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-600 mb-6">{services[activeService].description}</p>

                  <div className="flex items-center gap-6 mb-6">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">{services[activeService].price}</p>
                      <p className="text-sm text-gray-500">Starting from</p>
                    </div>
                    <div className="h-12 w-px bg-gray-200" />
                    <div>
                      <p className="text-lg font-medium text-gray-900">{services[activeService].duration}</p>
                      <p className="text-sm text-gray-500">Delivery time</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 gap-3 mb-8">
                    {services[activeService].features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://wa.me/+918446060142"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                      < FaWhatsapp size={30} />
                      Order on WhatsApp
                    </a>
                    <button
                      onClick={() => navigate('/contact')}
                      className="flex-1 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-600 rounded-full text-xs font-medium mb-4">
                <Clock size={12} />
                How It Works
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
                Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">5-Step</span> Process
              </h2>
            </div>
          </AnimateOnScroll>

          {/* Process Steps */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-200 via-pink-200 to-sky-200 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <AnimateOnScroll key={step.step} animation="fadeUp" delay={index * 100}>
                  <div className="relative bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                    {/* Step Number */}
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Quick View */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4">
          <AnimateOnScroll animation="fadeUp">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">Pricing</span> Guide
              </h2>
              <p className="text-gray-400">Transparent pricing with no hidden fees</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <AnimateOnScroll key={service.id} animation="fadeUp" delay={index * 50}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/15 transition-colors">
                  <service.icon className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                  <p className="text-white font-medium text-sm mb-1">{service.title}</p>
                  <p className="text-2xl font-bold text-white">{service.price}</p>
                  <p className="text-xs text-gray-400">starting</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll animation="fadeUp">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4">
              Ready to Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 italic">Started?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's turn your favorite photo into a stunning piece of art. Get in touch today!
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
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
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

export default Services
