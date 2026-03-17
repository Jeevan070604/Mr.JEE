'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/menu';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
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

  const handlePrev = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  const handleNext = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    touchStartX.current = e.clientX;
    touchEndX.current = e.clientX;
    setIsAutoPlaying(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    touchEndX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
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
            Swipe or drag to explore. Active image is large, previous images shrink.
          </p>
        </motion.div>

        {/* Coverflow Gallery - Touch & Drag enabled */}
        <div
          ref={containerRef}
          className="relative h-[420px] sm:h-[520px] select-none"
          style={{ perspective: '1200px' }}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => { setIsAutoPlaying(true); onMouseUp(); }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {galleryImages.map((image, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              // Normalize offset for circular behaviour
              let normalizedOffset = offset;
              const half = Math.floor(galleryImages.length / 2);
              if (offset > half) normalizedOffset = offset - galleryImages.length;
              if (offset < -half) normalizedOffset = offset + galleryImages.length;

              const absOffset = Math.abs(normalizedOffset);
              const translateX = normalizedOffset * 55;
              const translateZ = -absOffset * 120;
              const rotateY = -normalizedOffset * 30;
              const scale = isActive ? 1 : Math.max(0.4, 1 - absOffset * 0.2);
              const opacity = isActive ? 1 : Math.max(0.15, 1 - absOffset * 0.35);
              const zIndex = 20 - absOffset;

              if (absOffset > 3) return null;

              return (
                <motion.div
                  key={image.id}
                  className={`absolute w-[220px] sm:w-[360px] h-[280px] sm:h-[400px] cursor-pointer ${isDragging ? 'pointer-events-none' : ''}`}
                  animate={{
                    x: `${translateX}%`,
                    z: translateZ,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  onClick={() => !isDragging && handleDotClick(index)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${isActive ? 'ring-4 ring-[#FF4D00]' : ''}`}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 sm:p-6"
                      animate={{ opacity: isActive ? 1 : 0.4 }}
                    >
                      <span className="text-xs uppercase tracking-wider text-[#FF4D00] mb-1 block">
                        {image.category}
                      </span>
                      <h4 className="text-white font-semibold text-sm sm:text-lg">{image.alt}</h4>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF4D00]/60 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#FF4D00]/60 backdrop-blur-sm flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-8 bg-[#FF4D00]' : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Swipe hint */}
        <p className="text-center text-white/30 text-xs mt-4">← Swipe or drag to navigate →</p>
      </div>
    </section>
  );
}

