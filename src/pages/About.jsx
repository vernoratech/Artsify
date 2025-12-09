import React, { useEffect, useRef, useState } from 'react'
import { Heart, Gift, Clock, ShieldCheck, PenTool } from 'lucide-react'

const reasons = [
  { icon: <Heart className="w-6 h-6 text-pink-500" />, title: "Handcrafted with Love", desc: "Every sketch is 100% handmade, pouring emotion into every stroke." },
  { icon: <Gift className="w-6 h-6 text-sky-500" />, title: "Personalized Gifting", desc: "Tailored specifically to your vision, making it the perfect unique gift." },
  { icon: <Clock className="w-6 h-6 text-purple-500" />, title: "Timely Delivery", desc: "We understand the importance of your special dates and deliver on time." },
  { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "Secure & Easy", desc: "Seamless online payment and ordering process for your peace of mind." },
];

const About = () => {
  const videoRef = useRef(null)
  const restartTimeoutRef = useRef(null)
  const [isRestarting, setIsRestarting] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleVideoEnded = () => {
    const video = videoRef.current
    if (!video) return

    setIsRestarting(true)
    video.pause()

    restartTimeoutRef.current = window.setTimeout(() => {
      video.currentTime = 0
      video.play()
      setIsRestarting(false)
    }, 300)
  }

  useEffect(() => {
    return () => {
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current)
      }
    }
  }, [])

  const handleVideoLoaded = () => setIsVideoLoaded(true)

  const handleVideoError = () => setIsVideoLoaded(false)

  return (
    <section className="pt-10 md:pt-32 pb-16 md:pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro / Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 lg:mb-24">
          <div className="relative w-full max-w-sm sm:max-w-none mx-auto">
            {/* Replaced Image Block with SVG Sketch */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-white flex items-center justify-center relative border border-gray-100 group">

              {/* Subtle texture */}
              <div className="absolute inset-0 opacity-[0.08] bg-[url('https://www.transparenttextures.com/patterns/foggy-birds.png')]"></div>

              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ddo1qupzg/video/upload/v1765253903/about_section_clip_fnhv83.mp4"
                autoPlay
                muted
                playsInline
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                onEnded={handleVideoEnded}
                className={`w-full h-full object-cover transition-all duration-500 ease-out ${isRestarting ? 'opacity-0 scale-[0.98] blur-[1px]' : 'opacity-100 scale-100'} ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
              ></video>

              {!isVideoLoaded && (
                <div className="absolute inset-0 bg-linear-to-br from-gray-100 via-gray-200 to-gray-100 animate-pulse flex flex-col items-center justify-center text-gray-400 gap-3">
                  <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-transparent animate-spin"></div>
                  <p className="uppercase tracking-[0.3em] text-xs">Loading Studio Clip</p>
                </div>
              )}

              <div className="absolute bottom-10 left-0 right-0 text-center">
                <p className="font-serif text-gray-600 italic text-lg">Painting the Moment...</p>
              </div>

            </div>


            {/* Decoration */}
            <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-pink-100 rounded-full -z-10 mix-blend-multiply blur-xl"></div>
            <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 bg-sky-100 rounded-full -z-10 mix-blend-multiply blur-xl"></div>
          </div>

          <div className="space-y-5 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <span className="h-px w-12 bg-sky-400"></span>
              <span className="text-sky-500 uppercase tracking-widest text-xs sm:text-sm font-medium">Behind the Canvas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Bringing your <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">cherished memories</span> to life.
            </h2>
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Welcome to <strong>Artsify</strong>. What began as a simple passion for capturing human emotion on paper has blossomed into a dedicated studio for custom artistry.
              </p>
              <p>
                My journey started with a fascination for realistic portraits—the way a single pencil stroke can reveal a smile or a spark in the eye. Today, I specialize in <span className="font-medium text-gray-800">realistic pencil & charcoal sketches</span> and vibrant <span className="font-medium text-gray-800">acrylic phone case art</span>.
              </p>
              <p>
                Whether it's a memory of a loved one or a unique gift for a special occasion, my goal is to create something that feels personal, timeless, and truly yours.
              </p>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                <PenTool size={20} className="text-gray-600" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-[0.2em]">Artist & Founder</p>
                <p className="font-serif text-lg sm:text-xl text-gray-900">Artsify Studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-gray-900">Why People Love Artsify</h3>
            <div className="w-16 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {reasons.map((item, idx) => (
              <div key={idx} className="bg-sky-50/50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-sky-100 group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg md:text-xl font-serif text-gray-900 mb-2 md:mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-gray-900">Our Journey</h3>
          </div>
          <div className="relative md:border-l-2 border-gray-200 md:ml-0 md:mx-auto space-y-8 md:space-y-12 pl-6 md:pl-0">
            {/* Item 1 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center bg-white rounded-xl shadow-sm md:shadow-none md:bg-transparent p-5 md:p-0">
              <div className="md:text-right">
                <span className="text-sky-500 font-bold tracking-wider text-xs sm:text-sm">2020</span>
                <h4 className="text-lg sm:text-xl font-serif text-gray-900 mt-1">The Spark</h4>
                <p className="text-gray-500 mt-2 text-sm">Started sketching as a hobby, realizing the power of handmade art.</p>
              </div>
              <div className="hidden md:block absolute top-2 -left-[41px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white bg-sky-400 shadow-md"></div>
              <div className="hidden md:block"></div> {/* Spacer */}
            </div>

            {/* Item 2 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center bg-white rounded-xl shadow-sm md:shadow-none md:bg-transparent p-5 md:p-0">
              <div className="hidden md:block"></div> {/* Spacer */}
              <div className="hidden md:block absolute top-2 -left-[41px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white bg-pink-400 shadow-md"></div>
              <div>
                <span className="text-pink-500 font-bold tracking-wider text-xs sm:text-sm">2022</span>
                <h4 className="text-lg sm:text-xl font-serif text-gray-900 mt-1">First Commission</h4>
                <p className="text-gray-500 mt-2 text-sm">Delivered the first paid custom portrait, marking the start of a professional journey.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative md:grid md:grid-cols-2 md:gap-12 md:items-center bg-white rounded-xl shadow-sm md:shadow-none md:bg-transparent p-5 md:p-0">
              <div className="md:text-right">
                <span className="text-sky-500 font-bold tracking-wider text-xs sm:text-sm">2024</span>
                <h4 className="text-lg sm:text-xl font-serif text-gray-900 mt-1">Artsify Established</h4>
                <p className="text-gray-500 mt-2 text-sm">Officially launched the brand to share joy through art with a wider audience.</p>
              </div>
              <div className="hidden md:block absolute top-2 -left-[41px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full border-4 border-white bg-gray-800 shadow-md"></div>
              <div className="hidden md:block"></div> {/* Spacer */}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
