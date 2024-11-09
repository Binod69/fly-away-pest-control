import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/components/navbar';

const poppins = localFont({
  src: './fonts/Poppins-Regular.ttf',
  variable: '--font-poppins-regular',
  weight: '100 400 900',
});
const playfairDisplay = localFont({
  src: './fonts/PlayfairDisplay-VariableFont_wght.ttf',
  variable: '--font-playfair-display',
  weight: '100 400 900',
});

export const metadata: Metadata = {
  title: 'Fly Away Pest Control',
  description: 'Best Pest Control Service In Australia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
