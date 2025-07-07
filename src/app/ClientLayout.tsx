'use client';

import Navbar from './components/Navbar';
import FloatingSocialIcons from './components/FloatingSocialIcons';
import Footer from './components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <FloatingSocialIcons />
      {children}
      <Footer />
    </>
  );
}
