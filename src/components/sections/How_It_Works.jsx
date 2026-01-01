import { CheckCircle, Gift, ShieldCheck, Upload } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    { icon: <Upload size={28} />, title: "Share & Choose", desc: "Upload your photo and pick a style (Pencil, Charcoal, etc)." },
    { icon: <CheckCircle size={28} />, title: "Approve Sketch", desc: "We share a preview. You approve the concept." },
    { icon: <ShieldCheck size={28} />, title: "Pay Securely", desc: "Complete payment via safe online methods." },
    { icon: <Gift size={28} />, title: "Receive Art", desc: "Get your finished masterpiece delivered to your door." },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif text-gray-900">How Your Portrait Is Made</h2>
          <div className="w-16 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></div>
        </div>
        {/* Mobile: Horizontal Scroll | Desktop: Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10"></div>

          {/* Gradient overlay hint on right edge (mobile only) */}
          <div className="md:hidden absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>

          <div
            className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-4 md:pb-0 scrollbar-hide"
            style={{ scrollPaddingLeft: 'calc(50% - 140px)' }}
          >
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group min-w-[280px] md:min-w-0 snap-center flex-shrink-0 first:ml-[calc(50%-140px)] md:first:ml-0">
                <div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center text-sky-500 mb-6 border-4 border-white shadow-sm group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold font-serif text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
            <FaWhatsapp size={20} /> WhatsApp support available at every step
          </span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;