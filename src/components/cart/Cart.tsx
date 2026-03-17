'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  const generateWhatsAppMessage = () => {
    const itemsList = items
      .map((item) => `• ${item.name} x${item.quantity} - ₹${item.price * item.quantity}`)
      .join('\n');
    return encodeURIComponent(
      `Hello! I'd like to place an order:\n\n${itemsList}\n\nTotal: ₹${totalPrice}\n\nPlease confirm my order.`
    );
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass-strong z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#FF4D00]" />
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
                <span className="px-2 py-0.5 text-sm bg-[#FF4D00]/20 text-[#FF4D00] rounded-full">
                  {totalItems} items
                </span>
              </div>
              <motion.button
                onClick={() => setIsCartOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-white/20 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-white/60 mb-6">Add some delicious items to get started!</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="btn-primary"
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-4 p-4 rounded-xl bg-white/5"
                    >
                      {/* Item Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white truncate">{item.name}</h4>
                        <p className="text-sm text-white/60 mb-2">₹{item.price}</p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <motion.button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </motion.button>
                          <span className="text-white font-medium w-6 text-center">
                            {item.quantity}
                          </span>
                          <motion.button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#FF4D00] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <span className="font-bold text-[#FF4D00]">
                          ₹{item.price * item.quantity}
                        </span>
                        <motion.button
                          onClick={() => removeFromCart(item.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-white/40 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-4">
                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>

                {/* Total */}
                <div className="flex items-center justify-between py-3 border-t border-white/10">
                  <span className="text-white/60">Subtotal</span>
                  <span className="text-2xl font-bold text-white">₹{totalPrice}</span>
                </div>

                {/* Checkout Button */}
                <motion.a
                  href={`https://wa.me/917639730715?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center justify-center gap-3 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Order on WhatsApp
                </motion.a>

                <p className="text-xs text-white/40 text-center">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
