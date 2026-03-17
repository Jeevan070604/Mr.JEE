'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink, MessageCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    content: '123 Food Street, Culinary District',
    subContent: 'Mumbai, Maharashtra 400001',
    action: 'Get Directions',
    href: 'https://maps.google.com',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 7639730715',
    subContent: 'Mon-Sun: 10 AM - 11 PM',
    action: 'Call Now',
    href: 'tel:+917639730715',
  },
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hello@restarnt.com',
    subContent: 'We reply within 24 hours',
    action: 'Send Email',
    href: 'mailto:hello@restarnt.com',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    content: 'Mon - Sun: 10 AM - 11 PM',
    subContent: 'Kitchen closes at 10:30 PM',
    action: null,
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF4D00]/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FFD700]/5 rounded-full blur-3xl" />
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
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </motion.span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Contact </span>
            <span className="gradient-text">Us</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Have questions or want to make a reservation? We're here to help. 
            Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF4D00]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF4D00]/20 transition-colors">
                  <info.icon className="w-6 h-6 text-[#FF4D00]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                <p className="text-white/80">{info.content}</p>
                <p className="text-sm text-white/50 mt-1">{info.subContent}</p>
                {info.action && info.href && (
                  <a
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 mt-4 text-sm text-[#FF4D00] hover:text-[#FFD700] transition-colors"
                  >
                    {info.action}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map & Location Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Map Container */}
            <div className="relative rounded-2xl overflow-hidden h-[300px] sm:h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984904!2d72.74109905234374!3d19.0821978394271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent pointer-events-none" />
              
              {/* Location Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF4D00] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">RESTARNT</h4>
                    <p className="text-sm text-white/60">123 Food Street, Mumbai</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href="https://wa.me/917639730715"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-medium transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#FF4D00] hover:bg-[#cc3d00] text-white font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
