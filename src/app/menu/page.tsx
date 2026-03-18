import { CartProvider } from '@/context/CartContext';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cart from '@/components/cart/Cart';
import Menu from '@/components/sections/Menu';

export default function MenuPage() {
  return (
    <CartProvider>
      <ScrollProgress />
      <Navbar />
      <Cart />
      <main className="bg-[#0B0B0B] min-h-screen pt-20">
        <Menu />
      </main>
      <Footer />
    </CartProvider>
  );
}
