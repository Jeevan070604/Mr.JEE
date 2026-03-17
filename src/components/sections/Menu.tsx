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

  const handleAddToCart = () => {
    addToCart(item);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] card-hover">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {item.isBestseller && (
              <span className="px-2 py-1 text-xs font-semibold bg-[#FFD700] text-black rounded-full">
                Bestseller
              </span>
            )}
            {item.isSpicy && (
              <span className="px-2 py-1 text-xs font-semibold bg-[#FF4D00] text-white rounded-full flex items-center gap-1">
                <Flame className="w-3 h-3" /> Spicy
              </span>
            )}
          </div>

          {/* Quick Add Button */}
          <motion.button
            onClick={handleAddToCart}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center text-white shadow-lg hover:bg-[#cc3d00] transition-colors"
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-[#FF4D00] transition-colors">
              {item.name}
            </h3>
            <div className="flex items-center gap-1 text-[#FFD700]">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{item.rating}</span>
            </div>
          </div>

          <p className="text-sm text-white/60 mb-3 line-clamp-2">{item.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-[#FF4D00]">₹{item.price}</span>
              <span className="text-xs text-white/40 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {item.prepTime}
              </span>
            </div>
            <span className="text-xs text-white/40">{item.reviews} reviews</span>
          </div>

          {/* Add to Cart Button */}
          <motion.button
            onClick={handleAddToCart}
            className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FF4D00] text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn"
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
                  className="text-green-400"
                >
                  Added! ✓
                </motion.span>
              ) : (
                <motion.span
                  key="add"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2"
                >
                  <Plus className="w-4 h-4 group-hover/btn:rotate-90 transition-transform" />
                  Add to Cart
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

        {/* Menu Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

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
