import React from 'react';
import { ShieldCheck, Phone, MapPin, ExternalLink, CalendarDays } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Brand Columns split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-200">
          
          {/* Col 1: Shop Brand details */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-red-600 p-2 rounded border border-red-500 shadow-md">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black text-neutral-900 tracking-tighter">
                GRAVE <span className="text-red-650">ENTERPRISE</span>
              </span>
            </div>

            <p className="text-neutral-650 text-xs sm:text-sm leading-relaxed max-w-sm font-medium">
              Sweetwater's absolute gold-standard auto shop. From certified commercial trailer DOT inspections and auto A/C diagnosis to multi-inch lift packages, tires, and Rhino Pro bed coatings, we keep West Texas drivers running strong.
            </p>

            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-150 flex items-center space-x-3 shadow-sm">
              <CalendarDays className="h-5 w-5 text-red-600 flex-shrink-0" />
              <span className="text-[11px] text-neutral-600 leading-snug font-semibold">
                Need state safety tests? No appointment necessary. Drive in from 8:00 AM to 6:00 PM, Mon-Fri.
              </span>
            </div>
          </div>

          {/* Col 2: Navigation targets */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-neutral-900 text-xs font-black uppercase font-mono tracking-widest border-l-2 border-red-650 pl-2.5">
              Rapid Links
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {['services', 'products', 'why-choose-us', 'reviews', 'gallery', 'faqs'].map((sect) => (
                <button
                  key={sect}
                  onClick={() => scrollToSection(sect)}
                  className="w-fit text-left text-neutral-600 hover:text-red-600 text-xs sm:text-sm capitalize transition-colors font-bold font-mono"
                >
                  {sect.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Location details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-neutral-900 text-xs font-black uppercase font-mono tracking-widest border-l-2 border-red-650 pl-2.5">
              Sweetwater Bay Center
            </h4>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 font-medium">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4.5 w-4.5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">
                  1504 W Broadway St,<br />
                  Sweetwater, TX 79556
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-4.5 w-4.5 text-red-600 flex-shrink-0" />
                <a href="tel:3252197016" className="text-neutral-900 font-black hover:text-red-605 transition-colors">
                  (325) 219-7016
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=1504+W+Broadway+St,+Sweetwater,+TX+79556"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-red-600 hover:text-red-700 font-extrabold uppercase tracking-wider font-mono"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower copyright legal and badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 font-medium">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-neutral-550 leading-normal font-semibold">
              © {new Date().getFullYear()} Grave Enterprise. All Rights Reserved. Built with pride in Sweetwater, West Texas.
            </p>
            <p className="text-[10px] text-neutral-500 mt-1 font-mono uppercase tracking-widest font-black">
              State safety station #325-219 • Proud Google 4.8 Rating Authorized Dealer
            </p>
          </div>

          <div className="flex items-center space-x-2.5 opacity-60 hover:opacity-100 transition-all font-mono">
            <span className="text-neutral-550 text-[9px] font-black uppercase tracking-widest">
              TX-DOT Certified Station
            </span>
            <div className="text-red-600 border border-neutral-200 p-1.5 rounded bg-neutral-50 text-xs font-black">
              ★ ★ ★ ★ ★
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
