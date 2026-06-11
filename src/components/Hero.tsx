import React from 'react';
import { Phone, ArrowRight, Star, Award, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <div id="hero" className="relative min-h-screen bg-neutral-900 flex items-center pt-24 overflow-hidden">
      {/* Background Image with Brightened Dark-to-Light Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/grave_hero_1781203045092.jpg"
          alt="Grave Enterprise Auto Repair Shop Interior"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.38] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-neutral-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/50 to-transparent" />
        
        {/* Subtle decorative glowing background patterns */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-650/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tag/Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-red-650/20 border border-red-500/30 px-3.5 py-1.5 rounded-full"
            >
              <Star className="h-4 w-4 text-red-500 fill-red-500" />
              <span className="text-xs font-black tracking-wider text-red-400 uppercase font-mono">
                Sweetwater's Multi-Service Premium Station
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-none"
            >
              Sweetwater's Trusted <br className="hidden sm:inline" />
              <span className="text-red-500 relative inline-block">
                Auto Repair
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-red-600 rounded"></span>
              </span> & Truck Accessory Shop
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-200 max-w-2xl leading-relaxed font-medium"
            >
              From certified state inspections and expert A/C repair to professional heavy lift kits, tires, and armor bed liners, Grave Enterprise keeps West Texas drivers safe and moving.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="tel:3252197016"
                className="flex items-center justify-center space-x-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-base px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-red-500 uppercase tracking-wider font-mono"
                id="hero-call-now"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                <span>Call Now: (325) 219-7016</span>
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 rounded-xl border border-white/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                id="hero-contact-us"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="h-5 w-5 text-red-500" />
              </button>
            </motion.div>

            {/* Key Trust highlights banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10"
            >
              <div className="flex items-start space-x-2.5">
                <Star className="h-5 w-5 text-red-500 fill-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-extrabold text-base">4.8 Rating</h4>
                  <p className="text-xs text-neutral-300">Sweetwater's Best</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2.5">
                <Award className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-extrabold text-base">Certified</h4>
                  <p className="text-xs text-neutral-300">DOT & TX Inspectors</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-extrabold text-base">Local</h4>
                  <p className="text-xs text-neutral-300">Proudly Texas Owned</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Side Card Highlight (Fast Info Panel) - Turned into high-end white glass card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 h-full"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xl relative overflow-hidden text-neutral-800">
              {/* Corner red flag decorative element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-red-600/10 rounded-bl-full border-b border-l border-red-500/10 pointer-events-none" />
              
              <h3 className="text-xl font-black text-neutral-900 mb-4 uppercase tracking-wider flex items-center space-x-2 font-mono">
                <span className="w-1.5 h-6 bg-red-600 rounded-sm inline-block"></span>
                <span>Active Workshop Status</span>
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-150">
                  <span className="text-neutral-700 text-sm font-semibold">State & DOT Inspections</span>
                  <span className="bg-emerald-600/10 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/20 uppercase">
                    Immediate Openings
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-150">
                  <span className="text-neutral-700 text-sm font-semibold">A/C Recharges</span>
                  <span className="bg-emerald-600/10 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-500/20 uppercase">
                    Same-Day Available
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50 border border-neutral-150">
                  <span className="text-neutral-700 text-sm font-semibold">Lift Kits & Accessories</span>
                  <span className="text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full border border-amber-600/20 uppercase bg-amber-500/10">
                    Booking this week
                  </span>
                </div>
              </div>

              <div className="p-4 bg-red-50 text-neutral-800 text-xs sm:text-sm leading-relaxed mb-6 border border-red-100 rounded-xl font-medium">
                <strong>Heading out?</strong> We are situated right off Broadway St in Sweetwater. Drive in for official vehicle state inspections or commercial trailer DOT check-ups, no appointment required.
              </div>

              <div className="space-y-2 pt-4 border-t border-neutral-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500 font-medium">Shop Hours:</span>
                  <span className="text-neutral-900 font-bold">Mon - Fri: 8am - 6pm</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-neutral-500 font-medium">Location:</span>
                  <span className="text-neutral-900 font-bold text-right">1504 W Broadway St, Sweetwater</span>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
