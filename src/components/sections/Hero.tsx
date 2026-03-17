'use client';

import { Flame, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0B0B0B]"
    >
      {/* Background Image - Static for performance */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
          }}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/80 via-[#0B0B0B]/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/90 via-transparent to-[#0B0B0B]/70" />
      </div>

      {/* Content - No animations for maximum speed */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass">
            <Flame className="w-4 h-4 text-[#FF4D00]" />
            <span className="text-sm font-medium text-white/90">Premium Street Food Experience</span>
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="block text-white mb-2">Taste the</span>
            <span className="block gradient-text text-glow">Extraordinary</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Where street food meets cinematic flavors. Experience the perfect blend of 
            tradition and innovation in every bite.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToMenu}
              className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
            >
              <span>Order Now</span>
              <span>→</span>
            </button>
            <button
              onClick={scrollToBooking}
              className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
            >
              <span>Book a Table</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {[
              { value: '4.9', label: 'Rating' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '50+', label: 'Dishes' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={scrollToMenu}
          >
            <span className="text-xs text-white/50 uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-6 h-6 text-[#FF4D00]" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B0B] to-transparent z-30" />
    </section>
  );
}
