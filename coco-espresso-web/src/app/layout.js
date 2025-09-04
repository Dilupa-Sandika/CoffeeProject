import './globals.css';
import { Inter, Raleway, Space_Grotesk, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['600'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['700'],
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Coco Espresso AU",
  description: "Experience the authentic taste of Serendib with our premium Sri Lankan coffee blend.",
  keywords: "coffee, Sri Lankan coffee, premium coffee, espresso, Ceylon coffee",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${raleway.variable} ${spaceGrotesk.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
