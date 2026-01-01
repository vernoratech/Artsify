import { ArrowRight, BadgeCheck, Heart, Instagram, MessageCircle, Quote, Shield, Star, Truck, Users } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { artPieces } from '../data/artPieces'
import AnimateOnScroll, { StaggerContainer } from '../components/ui/AnimateOnScroll'
import { FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    text: "Such a beautiful artwork! The sketch truly stands out with its fine detailing and expressive shading. The emotions are captured so naturally that the artwork feels lively and real. It’s visually stunning and clearly reflects dedication, patience, and artistic passion. Absolutely loved it wonderful work.",
    author: "Shivali",
    location: "MHJ Fame (Satara)",
    rating: 5,
    date: "2 weeks ago",
    verified: true,
    artType: "Couple Portrait"
  },
  {
    id: 2,
    text: "OThe artwork looks absolutely amazing! The sketch is so beautifully done every detail, expression, and shading feels full of life. It truly captures the emotion of the picture in a stunning way. I really loved the creativity and effort behind this piece. It’s impressive, eye-catching, and genuinely feels special. Wonderful work!",
    author: "Neha Patil",
    location: "Umbarde (Sindhudurg)",
    rating: 5,
    date: "1 month ago",
    verified: true,
    artType: "Memorial Portrait"
  },
  {
    id: 3,
    text: "The sketch has come out truly amazing. The shading, proportions, and overall finishing look very clean and professional. You’ve captured the expressions beautifully, and every detail reflects the effort and passion you put into the artwork. I’m really impressed with the final result absolutely loved it and truly appreciate your wonderful work.",
    author: "Mayur Pawar",
    location: "Ambernath (Mumbai)",
    rating: 4,
    date: "2 months ago",
    verified: true,
    artType: "Pet Portrait"
  },
  {
    id: 4,
    text: "Wow… really beautiful! The artwork is totally worth it every detail is so clean and perfectly done. The expressions, shading, and finishing bring the sketch to life. You’ve put amazing effort and passion into this piece, and it truly shows. I’m genuinely impressed and super happy with the result absolutely loved it!",
    author: "Vrinda Patil",
    location: "Ambernath (Mumbai)",
    rating: 5,
    date: "5 months ago",
    verified: true,
    artType: "Family Portrait"
  },
  {
    id: 5,
    text: "Thank you so much for this beautiful sketch. The artwork is truly wonderful and full of life. The expression, shading, and finishing are done with so much care and emotion. It feels very special and meaningful to me. I really appreciate the effort and creativity behind this lovely piece absolutely loved it!",
    author: "Swaraa ",
    location: "pen (Panvel)",
    rating: 4,
    date: "10 months ago",
    verified: true,
    artType: "Single Portrait"
  },
  {
    id: 6,
    text: "Absolutely amazing work! The detailing and finishing are truly outstanding. Every element looks so perfect and beautifully crafted. I really loved the effort, creativity, and emotion reflected in the design. It’s not just a piece of work it feels meaningful and truly heart-touching. Thank you for such a wonderful experience.",
    author: "Shalaka Katkar",
    location: " Pali (Raigad)",
    rating: 5,
    date: "1 year ago",
    verified: true,
    artType: "Pencil Sketch"
  },
];

const featuredTestimonial = {
  text: " This is not just a sketch, it’s an emotion which we can feel. The artwork is really nice and full of feelings.",
  author: "Devendra Shukla",
  location: "Nalasopara (Mumbai)",
  artType: "Sketch",
  image: "https://res.cloudinary.com/dj1fxrmef/image/upload/v1767250503/WhatsApp_Image_2025-12-29_at_3.37.46_PM_qd499i_b1sre5.jpg"
};

const stats = [
  { number: "50+", label: "Happy Customers" },
  { number: "98%", label: "Satisfaction Rate" },
  { number: "4.9", label: "Average Rating", icon: Star },
  { number: "7", label: "Days Avg. Delivery" },
];

const trustBadges = [
  { icon: Shield, title: "100% Satisfaction", desc: "Money back if not happy" },
  { icon: Truck, title: "Safe Delivery", desc: "Carefully packed & shipped" },
  { icon: BadgeCheck, title: "Premium Quality", desc: "Acid-free artist paper" },
];

const images = artPieces.slice(0, 8);

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-pink-50/50 to-white">
        <AnimateOnScroll animation="fadeUp" duration={800} className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-6">
            <Users size={16} />
            Trusted by 500+ customers
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
            What Our <span className="text-pink-500">Clients</span> Say
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real stories from real people who trusted us with their precious memories.
            Every portrait tells a story, and here are some of our favorites.
          </p>
        </AnimateOnScroll>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</span>
                  {stat.icon && <stat.icon size={20} className="text-yellow-400 fill-yellow-400" />}
                </div>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-pink-50">
        <AnimateOnScroll animation="scaleUp" duration={900} className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Decorative Quote */}
            <Quote size={120} className="absolute -top-4 -left-4 text-pink-100 rotate-180" />

            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-serif italic">
                "{featuredTestimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={featuredTestimonial.image}
                  alt={featuredTestimonial.author}
                  className="w-16 h-16 rounded-full object-cover border-4 border-pink-100"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-900">{featuredTestimonial.author}</p>
                    <BadgeCheck size={18} className="text-sky-500" />
                  </div>
                  <p className="text-gray-500 text-sm">{featuredTestimonial.location} • {featuredTestimonial.artType}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimateOnScroll animation="fadeUp" duration={700} className="text-center mb-12">
            <h2 className="text-3xl font-serif text-gray-900 mb-4">More Happy Stories</h2>
            <p className="text-gray-500">Every portrait has a story behind it</p>
          </AnimateOnScroll>

          <StaggerContainer animation="fadeUp" staggerDelay={100} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-400 ml-2">{t.date}</span>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* Avatar with initials */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-sky-400 flex items-center justify-center text-white font-bold text-sm">
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <p className="font-medium text-gray-900 text-sm">{t.author}</p>
                        {t.verified && <BadgeCheck size={14} className="text-sky-500" />}
                      </div>
                      {/* Edited This Parts As Testimonial Card */}
                      <div className="flex items-center gap-1">
                      <p className="text-gray-400 text-xs pr-1">{t.location}</p>
                      <p className="text-pink-600"> • </p>
                      <p className="text-xs /*bg-pink-50*/ text-pink-600 px-0 py-1 rounded-full">{t.artType}</p>
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-xs bg-pink-50 text-pink-600 px-2 py-1 rounded-full">
                    {t.artType}
                  </span> */}
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <badge.icon size={28} className="text-sky-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{badge.title}</h4>
                  <p className="text-gray-500 text-sm">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-full text-sm font-medium mb-4">
            <Instagram size={16} />
            @artsify.__
          </div>
          <h3 className="text-2xl font-serif text-gray-900">See Our Latest Work</h3>
          <p className="text-gray-500 text-sm mt-2">Follow us for daily art inspiration & behind-the-scenes</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-4 max-w-7xl mx-auto">
          {images.map((img) => (
            <div key={img.id} className="relative aspect-square group overflow-hidden rounded-xl bg-gray-100">
              <img
                src={img.src}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.src = `https://placehold.co/400x400/EEE/31343C?font=playfair-display&text=Art`; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex items-center gap-1">
                    <Heart size={18} className="fill-current" /> 248
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/artsify.__"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium transition-colors"
          >
            View all on Instagram <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to Create Your Memory?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of happy customers who have turned their photos into timeless art pieces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/services')}
              className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:shadow-xl transition-all flex items-center gap-2"
            >
              Start Your Order <ArrowRight size={18} />
            </button>
            <a
              href="https://wa.me/+918446060142"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              < FaWhatsapp size={30} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
