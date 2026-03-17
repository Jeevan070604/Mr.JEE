'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/menu';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF4D00]/5 rounded-full blur-3xl" />
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
            <Camera className="w-4 h-4" />
            Visual Journey
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Scroll through our culinary creations. Previous images minimize as you explore.
          </p>
        </motion.div>

        {/* Coverflow Gallery */}
        <div 
          ref={containerRef}
          className="relative h-[500px] sm:h-[600px] perspective-1000"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {galleryImages.map((image, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;
              const isPrev = offset === -1 || (activeIndex === 0 && index === galleryImages.length - 1);
              const isNext = offset === 1 || (activeIndex === galleryImages.length - 1 && index === 0);
              
              let translateX = 0;
              let translateZ = 0;
              let rotateY = 0;
              let scale = 0.6;
              let opacity = 0.3;
              let zIndex = 0;

              if (isActive) {
                translateX = 0;
                translateZ = 100;
                rotateY = 0;
                scale = 1;
                opacity = 1;
                zIndex = 10;
              } else if (isPrev) {
                translateX = -45;
                translateZ = -100;
                rotateY = 35;
                scale = 0.75;
                opacity = 0.6;
                zIndex = 5;
              } else if (isNext) {
                translateX = 45;
                translateZ = -100;
                rotateY = -35;
                scale = 0.75;
                opacity = 0.6;
                zIndex = 5;
              } else if (offset < -1 || (activeIndex < 2 && index > galleryImages.length - 3)) {
                translateX = -70;
                translateZ = -200;
                rotateY = 45;
                scale = 0.5;
                opacity = 0.2;
                zIndex = 1;
              } else {
                translateX = 70;
                translateZ = -200;
                rotateY = -45;
                scale = 0.5;
                opacity = 0.2;
                zIndex = 1;
              }

              return (
                <motion.div
                  key={image.id}
                  className="absolute w-[280px] sm:w-[400px] h-[350px] sm:h-[450px] cursor-pointer"
                  initial={false}
                  animate={{
                    x: `${translateX}%`,
                    z: translateZ,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                  }}
                  onClick={() => handleDotClick(index)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ${
                    isActive ? 'ring-4 ring-[#FF4D00]' : ''
                  }`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    
                    {/* Content */}
                    <motion.div 
                      className="absolute bottom-0 left-0 right-0 p-6"
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                    >
                      <span className="text-xs uppercase tracking-wider text-[#FF4D00] mb-1 block">
                        {image.category}
                      </span>
                      <h4 className="text-white font-semibold text-lg">{image.alt}</h4>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-[#FF4D00]' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
