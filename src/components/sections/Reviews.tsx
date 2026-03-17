'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import { reviews } from '@/data/menu';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // How many cards visible per group (4 cards, step by 1)
  const VISIBLE = 4;

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goNext = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  // Touch handlers
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
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    setIsAutoPlaying(false);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };
  const onMouseUp = () => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - touchEndX.current;
    isDragging.current = false;
    if (Math.abs(diff) > 40) {
      diff > 0 ? goNext() : goPrev();
    }
  };

  // Build visible 4 cards starting from activeIndex
  const visibleCards = Array.from({ length: VISIBLE }, (_, i) =>
    reviews[(activeIndex + i) % reviews.length]
  );

  return (
    <section id="reviews" className="py-16 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4D00]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-3 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full">
            <MessageSquare className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            <span className="text-white">What Our </span>
            <span className="gradient-text">Guests Say</span>
          </h2>
        </motion.div>

        {/* Reviews Row - 4 cards, touch/drag to swipe */}
        <div
          className="select-none cursor-grab active:cursor-grabbing"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          <div className="grid grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
            {visibleCards.map((review, i) => (
              <motion.div
                key={review.id + '-' + activeIndex + '-' + i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#141414]"
              >
                {/* Square avatar at top */}
                <div className="relative aspect-square w-full overflow-hidden bg-[#1e1e1e] flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  {/* Stars overlay bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 flex justify-center py-1 gap-0.5">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${
                          si < review.rating ? 'text-[#FFD700] fill-[#FFD700]' : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Rectangle text area below square */}
                <div className="px-2 py-2 sm:px-3 sm:py-2.5 flex flex-col gap-1">
                  <p className="text-white font-semibold text-[9px] sm:text-xs leading-tight truncate">
                    {review.name}
                  </p>
                  <p className="text-white/55 text-[8px] sm:text-[10px] leading-snug line-clamp-3">
                    {review.comment}
                  </p>
                  <p className="text-white/30 text-[7px] sm:text-[9px] mt-0.5">{review.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dot indicators + swipe hint */}
        <div className="flex flex-col items-center gap-3 mt-6">
          <div className="flex gap-1.5">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => { setIsAutoPlaying(false); setActiveIndex(index); }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-6 bg-[#FF4D00]' : 'w-1.5 bg-white/25 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <p className="text-white/25 text-[10px]">← Swipe or drag to see more →</p>
        </div>

        {/* Stats - compact 4 col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 grid grid-cols-4 gap-2 sm:gap-4"
        >
          {[
            { value: '4.9', label: 'Rating' },
            { value: '10K+', label: 'Reviews' },
            { value: '95%', label: 'Recommend' },
            { value: '4.8', label: 'Food Quality' },
          ].map((stat, index) => (
            <div key={index} className="text-center py-3 px-2 rounded-xl border border-white/8 bg-[#141414]">
              <div className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-[9px] sm:text-xs text-white/50 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
