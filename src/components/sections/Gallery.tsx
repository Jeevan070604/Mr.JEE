'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';
import { galleryImages } from '@/data/menu';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Arrange images in masonry pattern
  const leftColumn = galleryImages.filter((_, i) => i % 3 === 0);
  const middleColumn = galleryImages.filter((_, i) => i % 3 === 1);
  const rightColumn = galleryImages.filter((_, i) => i % 3 === 2);

  return (
    <section id="gallery" className="py-24 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background */}
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
            A glimpse into our culinary world. From kitchen to table, 
            experience the artistry behind every dish.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumn.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                index={index}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>

          {/* Middle Column - offset */}
          <div className="space-y-4 md:mt-12">
            {middleColumn.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                index={index + leftColumn.length}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumn.map((image, index) => (
              <GalleryImage
                key={image.id}
                image={image}
                index={index + leftColumn.length + middleColumn.length}
                onClick={() => setSelectedImage(image.src)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryImage({
  image,
  index,
  onClick,
}: {
  image: { src: string; alt: string; category: string };
  index: number;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[4/3]"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs uppercase tracking-wider text-[#FF4D00] mb-1">
            {image.category}
          </span>
          <h4 className="text-white font-semibold">{image.alt}</h4>
        </div>

        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ZoomIn className="w-5 h-5 text-white" />
        </div>
      </motion.div>
    </motion.div>
  );
}
