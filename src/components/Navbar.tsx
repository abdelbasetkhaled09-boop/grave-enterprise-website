import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200 py-3'
          : 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="bg-red-600 p-2.5 rounded-lg border border-red-500 shadow-sm group-hover:bg-red-700 transition-all">
              <ShieldCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-neutral-900 block">
                WILLIAM'S <span className="text-red-600">AUTO REPAIR</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold block -mt-1 font-mono">
                Scottsville, VA
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['services', 'products', 'gallery', 'why-choose-us', 'faqs', 'contact'].map((sect) => (
              <button
                key={sect}
                onClick={() => scrollToSection(sect)}
                className="text-neutral-700 hover:text-red-600 font-extrabold text-xs sm:text-sm tracking-wide transition-colors uppercase font-mono"
              >
                {sect === 'why-choose-us' ? 'Why Us' : sect}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:4342823733"
              className="flex items-center space-x-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-bold py-2.5 px-4 rounded-lg border border-neutral-200 transition-all text-sm uppercase tracking-wider font-mono"
              id="desktop-call-btn"
            >
              <Phone className="h-4 w-4 text-red-600" />
              <span>(434) 282-3733</span>
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg shadow-sm hover:shadow-red-600/30 transition-all text-xs tracking-wider uppercase border border-red-500 font-mono"
              id="desktop-contact-btn"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              href="tel:4342823733"
              className="bg-red-100 hover:bg-red-200 text-red-600 p-2.5 rounded-lg border border-red-200/50 md:hidden flex items-center justify-center transition-all"
              aria-label="Call William's Auto Repair"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-700 hover:text-neutral-900 p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-neutral-200 px-4 pt-4 pb-6 space-y-3 shadow-lg"
          >
            {[
              { id: 'services', label: 'Services' },
              { id: 'products', label: 'Featured Products' },
              { id: 'gallery', label: 'Project Gallery' },
              { id: 'why-choose-us', label: 'Why Choose Us' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'contact', label: 'Contact Us' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 hover:text-red-600 font-bold transition-all uppercase text-xs tracking-wide font-mono"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 grid grid-cols-2 gap-3 px-2">
              <a
                href="tel:4342823733"
                className="flex items-center justify-center space-x-2 bg-neutral-100 text-neutral-800 font-bold py-3 px-4 rounded-lg border border-neutral-200 text-xs uppercase font-mono"
              >
                <Phone className="h-4 w-4 text-red-600" />
                <span>Call Shop</span>
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg text-xs uppercase font-mono shadow-sm"
              >
                Find Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
