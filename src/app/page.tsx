import { CartProvider } from '@/context/CartContext';
import PageLoader from '@/components/ui/PageLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cart from '@/components/cart/Cart';
import Hero from '@/components/sections/Hero';
import MenuBanner from '@/components/sections/MenuBanner';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import Booking from '@/components/sections/Booking';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <CartProvider>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Cart />
      <main className="bg-[#0B0B0B]">
        <Hero />
        <MenuBanner />
        <Gallery />
        <Reviews />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </CartProvider>
  );
}
