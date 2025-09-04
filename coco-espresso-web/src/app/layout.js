import { Inter, Raleway } from 'next/font/google';
import './globals.css'; // CRITICAL IMPORT
import Header from '@/components/Header'; // Import Header
import Footer from '@/components/Footer'; // Import Footer
import CartSidebar from '@/components/CartSidebar'; // Import CartSidebar

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