'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Star, Flame, Clock, ChefHat } from 'lucide-react';
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
  const [isHovered, setIsHovered] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg bg-[#1a1a1a] card-hover">
        {/* Square Image Container - Fixed aspect ratio */}
        <div className="relative aspect-square overflow-hidden bg-[#252525]">
          {!imgError ? (
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF4D00]/20 to-[#FFD700]/20">
              <span className="text-2xl sm:text-4xl">🍽️</span>
            </div>
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          
          {/* Badges - Smaller on mobile */}
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2 flex gap-0.5 sm:gap-1">
            {item.isBestseller && (
              <span className="px-1 sm:px-2 py-0 sm:py-0.5 text-[8px] sm:text-[10px] font-semibold bg-[#FFD700] text-black rounded">
                B
              </span>
            )}
            {item.isSpicy && (
              <span className="px-1 sm:px-2 py-0 sm:py-0.5 text-[8px] sm:text-[10px] font-semibold bg-[#FF4D00] text-white rounded flex items-center">
                <Flame className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
              </span>
            )}
          </div>

          {/* Quick Add Button - Hidden on mobile, show on larger */}
          <motion.button
            onClick={handleAddToCart}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="hidden sm:flex absolute bottom-2 right-2 w-8 h-8 rounded-full bg-[#FF4D00] items-center justify-center text-white shadow-lg hover:bg-[#cc3d00] transition-colors"
          >
            <Plus className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Content - Compact on mobile */}
        <div className="p-1.5 sm:p-3">
          {/* Food Name - Smaller on mobile */}
          <h3 className="text-[10px] sm:text-sm font-semibold text-white group-hover:text-[#FF4D00] transition-colors leading-tight mb-0.5 sm:mb-1 line-clamp-2 min-h-[1.75rem] sm:min-h-[2.5rem]">
            {item.name}
          </h3>

          <div className="flex items-center justify-between mb-1 sm:mb-2">
            <span className="text-xs sm:text-base font-bold text-[#FF4D00]">₹{item.price}</span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-[#FFD700]">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              <span className="text-[10px] sm:text-xs font-medium">{item.rating}</span>
            </div>
          </div>

          {/* Add to Cart Button - Compact on mobile */}
          <motion.button
            onClick={handleAddToCart}
            className="w-full py-1 sm:py-2 rounded bg-white/5 hover:bg-[#FF4D00] text-white text-[10px] sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 group/btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <AnimatePresence mode="wait">
              {showAdded ? (
                <motion.span
                  key="added"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-green-400 text-[10px] sm:text-sm"
                >
                  <span className="sm:hidden">✓</span>
                  <span className="hidden sm:inline">Added! ✓</span>
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-sm"
                >
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:rotate-90 transition-transform" />
                  <span className="hidden sm:inline">Add</span>
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
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
      {/* Background Elements */}
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
            Explore our carefully curated selection of authentic street food, 
            crafted with passion and the finest ingredients.
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

        {/* Menu Grid - 4 mobile, 3 tablet, 4 desktop, 5 large */}
        <div
          key={activeCategory}
          className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-5 lg:gap-6"
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
