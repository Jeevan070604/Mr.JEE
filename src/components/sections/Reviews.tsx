'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { reviews } from '@/data/menu';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="reviews" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF4D00]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full"
          >
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Guests Say</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our customers have to say 
            about their dining experience.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Review Card */}
          <div className="relative h-[400px] sm:h-[350px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="h-full p-8 sm:p-12 rounded-3xl glass flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#FF4D00]/10 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-[#FF4D00]" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < reviews[currentIndex].rating
                            ? 'text-[#FFD700] fill-[#FFD700]'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 flex-1">
                    "{reviews[currentIndex].comment}"
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-4">
                    <img
                      src={reviews[currentIndex].avatar}
                      alt={reviews[currentIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-[#FF4D00]/30"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-white">
                        {reviews[currentIndex].name}
                      </h4>
                      <p className="text-sm text-white/50">
                        {reviews[currentIndex].date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[#FF4D00]/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#FF4D00]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-[#FF4D00]/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '10K+', label: 'Reviews' },
            { value: '95%', label: 'Recommend Us' },
            { value: '4.8', label: 'Food Quality' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
