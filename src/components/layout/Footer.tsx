'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

const footerLinks = {
  menu: [
    { name: 'Vegetarian', href: '#menu' },
    { name: 'Non-Vegetarian', href: '#menu' },
    { name: 'Fast Food', href: '#menu' },
    { name: 'Combos', href: '#menu' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Franchise', href: '#' },
    { name: 'Press', href: '#' },
  ],
  support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'Youtube' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4D00] to-[#cc3d00] flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold text-white">
                  REST<span className="text-[#FF4D00]">ARNT</span>
                </span>
              </div>
              <p className="text-white/60 max-w-sm">
                Experience the finest street food with cinematic flavors. 
                Where tradition meets innovation in every bite.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="#contact" className="flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">123 Food Street, Mumbai</span>
              </a>
              <a href="tel:+917639730715" className="flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7639730715</span>
              </a>
              <a href="mailto:hello@restarnt.com" className="flex items-center gap-3 text-white/60 hover:text-[#FF4D00] transition-colors">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@restarnt.com</span>
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF4D00] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF4D00] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-[#FF4D00] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} RESTARNT. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#FF4D00] hover:border-[#FF4D00]/30 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-[#FF4D00] hover:border-[#FF4D00]/30 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
