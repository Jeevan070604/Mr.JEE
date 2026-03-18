'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Flame, Star, Clock, ChefHat, CheckCircle } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { MenuItem } from '@/types';

const categories = [
  { id: 'all', name: 'All Items', icon: ChefHat },
  { id: 'veg', name: 'Vegetarian', icon: Flame },
  { id: 'non-veg', name: 'Non-Veg', icon: Flame },
  { id: 'fast-food', name: 'Fast Food', icon: Clock },
  { id: 'combos', name: 'Combos', icon: Star },
];

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const { addToCart } = useCart();
  const [showAdded, setShowAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    addToCart(item);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group relative cursor-pointer"
      onClick={handleClick}
    >
      {/* Square Image Only - click to add to cart */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#252525]">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF4D00]/20 to-[#FFD700]/20">
            <span className="text-2xl sm:text-3xl">🍽️</span>
          </div>
        )}

        {/* Dark gradient at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

        {/* Badges top-left */}
        <div className="absolute top-1 left-1 flex gap-0.5">
          {item.isBestseller && (
            <span className="px-1 text-[7px] sm:text-[9px] font-bold bg-[#FFD700] text-black rounded">★</span>
          )}
          {item.isSpicy && (
            <span className="px-1 text-[7px] sm:text-[9px] font-bold bg-[#FF4D00] text-white rounded">🌶</span>
          )}
        </div>

        {/* Name + Price overlaid on bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-1.5 pb-1.5 pt-1">
          <p className="text-white font-semibold text-[9px] sm:text-[11px] leading-tight line-clamp-1">
            {item.name}
          </p>
          <p className="text-[#FF4D00] font-bold text-[9px] sm:text-xs">₹{item.price}</p>
        </div>

        {/* Hover: Tap to Add hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-200 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center gap-1">
            <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7 text-white drop-shadow-lg" />
            <span className="text-white text-[8px] sm:text-xs font-semibold drop-shadow">Tap to Add</span>
          </div>
        </div>

        {/* Added! flash overlay */}
        <AnimatePresence>
          {showAdded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#FF4D00]/85 flex flex-col items-center justify-center rounded-lg"
            >
              <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white mb-1" />
              <span className="text-white text-[9px] sm:text-xs font-bold">Added!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredItems = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4D00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />
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
            className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full"
          >
            Our Menu
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Delicious </span>
            <span className="gradient-text">Dishes</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Tap any dish image to instantly add it to your cart.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#FF4D00] text-white shadow-lg shadow-[#FF4D00]/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Menu Grid - image only, tap to add to cart */}
        <div
          key={activeCategory}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 lg:gap-4"
        >
          {filteredItems.map((item, index) => (
            <MenuCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View Full Menu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
