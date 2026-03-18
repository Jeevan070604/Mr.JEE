'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { UtensilsCrossed, ArrowRight } from 'lucide-react';

export default function MenuBanner() {
  return (
    <section id="menu" className="py-20 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF4D00]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-[#FF4D00]/10 border border-[#FF4D00]/20 flex items-center justify-center">
            <UtensilsCrossed className="w-8 h-8 text-[#FF4D00]" />
          </div>

          {/* Text */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full">
              Our Menu
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Explore Our </span>
              <span className="gradient-text">Delicious</span>
              <span className="text-white"> Dishes</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">
              Browse our full menu — vegetarian, non-veg, fast food & combos.
              Tap any dish to instantly add to cart.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="/menu">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary flex items-center gap-3 text-lg px-10 py-4 rounded-full"
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span>View Full Menu</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          {/* Preview thumbnails */}
          <div className="flex gap-2 sm:gap-3 mt-2">
            {[
              'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=120&q=80',
              'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=120&q=80',
              'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&q=80',
              'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=120&q=80',
              'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=120&q=80',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden border-2 border-white/10 hover:border-[#FF4D00]/50 transition-colors"
              >
                <img src={src} alt="dish" className="w-full h-full object-cover" />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl border-2 border-white/10 bg-white/5 flex items-center justify-center text-white/50 text-xs font-semibold"
            >
              +20
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
