import { Inter, Raleway } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartSidebar from '@/components/cart/CartSidebar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export const metadata = {
  title: 'Coco Espresso AU',
  description: 'A Taste of Serendib in Every Sip.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${raleway.variable} font-body bg-brand-background text-brand-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CartSidebar />
      </body>
    </html>
  );
}