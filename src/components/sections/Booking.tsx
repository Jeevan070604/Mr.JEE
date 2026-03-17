'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Sparkles, Check, UtensilsCrossed } from 'lucide-react';
import { timeSlots, occasions } from '@/data/menu';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    specialRequests: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF4D00]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-[#FF4D00] bg-[#FF4D00]/10 rounded-full"
            >
              <UtensilsCrossed className="w-4 h-4" />
              Reserve Your Table
            </motion.span>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-white">Book Your </span>
              <span className="gradient-text">Dining Experience</span>
            </h2>

            <p className="text-white/60 text-lg mb-8 leading-relaxed">
              Whether it's a romantic dinner, family celebration, or business meeting, 
              we'll make it unforgettable. Reserve your table now and let us take care of the rest.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: Sparkles, text: 'Priority seating for reservations' },
                { icon: Users, text: 'Accommodates groups of any size' },
                { icon: Calendar, text: 'Special arrangements for occasions' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FF4D00]/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#FF4D00]" />
                  </div>
                  <span className="text-white/80">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-10 p-6 rounded-2xl glass">
              <p className="text-white/60 text-sm mb-2">Need help with your reservation?</p>
              <p className="text-white font-semibold text-lg">Call us: +91 7639730715</p>
              <p className="text-white/40 text-sm mt-1">Available 10 AM - 11 PM</p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-8 rounded-3xl glass text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 10 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Check className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Booking Confirmed!</h3>
                  <p className="text-white/60 mb-6">
                    Thank you for your reservation. We've sent a confirmation to your email.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        date: '',
                        time: '',
                        guests: 2,
                        occasion: '',
                        specialRequests: '',
                      });
                    }}
                    className="btn-primary"
                  >
                    Make Another Booking
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="p-8 rounded-3xl glass space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors"
                        placeholder="+91 7639730715"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    {/* Date */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <Calendar className="w-4 h-4 inline mr-1" /> Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <Clock className="w-4 h-4 inline mr-1" /> Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#1a1a1a]">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time} className="bg-[#1a1a1a]">
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Guests */}
                    <div>
                      <label className="block text-sm font-medium text-white/80 mb-2">
                        <Users className="w-4 h-4 inline mr-1" /> Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <option key={num} value={num} className="bg-[#1a1a1a]">
                            {num} {num === 1 ? 'Person' : 'People'}
                          </option>
                        ))}
                        <option value="9" className="bg-[#1a1a1a]">9+ People</option>
                      </select>
                    </div>
                  </div>

                  {/* Occasion */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FF4D00] transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-[#1a1a1a]">Select occasion (optional)</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion} className="bg-[#1a1a1a]">
                          {occasion}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none"
                      placeholder="Any dietary restrictions or special requests..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF4D00] to-[#cc3d00] text-white font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        Confirm Reservation
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
