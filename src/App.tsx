import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import FAQs from './components/FAQs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-50 font-sans text-neutral-800 antialiased min-h-screen selection:bg-red-600 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Page Sections */}
      <main>
        {/* Parallax Hero intro */}
        <Hero />

        {/* Detailed Services list with filtration tabs */}
        <Services />

        {/* Featured Premium Products installation showroom */}
        <Products />

        {/* Value pillars of why drivers choose William's */}
        <WhyChooseUs />

        {/* Live Customer Google Feed testimonials & writer */}
        <Reviews />

        {/* Photos of completed vehicle repairs and painting booth */}
        <Gallery />

        {/* Searchable Support FAQs Accordion */}
        <FAQs />

        {/* Walk-in coordinates, Hours board, and Direct tickets mailer */}
        <ContactSection />
      </main>

      {/* Trailing corporate footer */}
      <Footer />
    </div>
  );
}
