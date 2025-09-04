import Hero from '../components/Hero';
import Featured from '../components/Featured';
import About from '../components/About';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Featured />
      <About />
      <ProductShowcase />
      <Testimonials />
    </div>
  );
}
