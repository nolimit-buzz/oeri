import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Proof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Xentrix CRM has completely transformed the way we manage leads and customer interactions. The automation features save us hours of manual work every week, allowing our team to focus on what matters most.",
      name: "Michael Ricard",
      title: "Marketing Director",
      initial: "M"
    },
    {
      quote: "This platform transformed how we onboard staff and manage SOPs. It was recognized at board level for its impact. The insights helped us prioritize improvements and track our progress systematically.",
      name: "Chinua",
      title: "CEO, InfraCredit",
      initial: "C"
    },
    {
      quote: "The ROI we've seen from implementing OERI has exceeded all expectations. Our team efficiency has doubled in just three months, and we finally have clarity on where to invest our operational improvement efforts.",
      name: "Sarah Chen",
      title: "Operations Manager",
      initial: "S"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <motion.div
              key={`content-${currentIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Quote className="w-12 h-12 text-gray-300" />

              <p className="text-2xl text-gray-900 font-normal leading-relaxed mt-6">
                {currentTestimonial.quote}
              </p>

              <div className="border-t border-gray-300 pt-6 mt-6">
                <p className="text-base font-semibold text-gray-900">
                  {currentTestimonial.name}
                </p>
                <p className="text-sm text-gray-600">{currentTestimonial.title}</p>
              </div>
            </motion.div>

            <div className="flex items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-gray-900 hover:bg-gray-100 transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-gray-900 hover:bg-gray-100 transition-all"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>
          </div>

          <motion.div
            key={`image-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl overflow-hidden shadow-lg w-full max-w-[400px] h-[300px]">
              <img
                src="https://images.pexels.com/photos/6077859/pexels-photo-6077859.jpeg"
                alt="Professional CEO headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
