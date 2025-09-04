import Header from '../components/Header';
import Hero from '../components/Hero';
import CartSidebar from '../components/CartSidebar';
import Featured from '../components/Featured';
import About from '../components/About';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <main>
        <Hero />
        <Featured />
        <About />
        <ProductShowcase />
        <Testimonials />
      </main>
      <Footer />
      <CartSidebar />
    </div>
  );
}
