import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'lift',
    title: 'Custom Dodge RAM 4" Suspension Lift',
    description: 'Fitted with 35" mud terrain rubbers, forged alignment loops, custom coilover stance.',
    image: '/src/assets/images/grave_lift_truck_1781203057031.jpg'
  },
  {
    id: 'gal-2',
    category: 'guard',
    title: 'Ranch Hand Heavy Duty Front Guard',
    description: 'Black powder-coated frame-mounted guard wrap protecting radiators against Texas wildlife crashes.',
    image: '/src/assets/images/grave_grille_guard_1781203068603.jpg'
  },
  {
    id: 'gal-3',
    category: 'bedliner',
    title: 'Rhino Pro Textured Polyurethane Spray',
    description: 'Seamless custom thickness bed liner sealant prevent scrapes, vibration, moisture lock.',
    image: '/src/assets/images/grave_bed_liner_1781203082459.jpg'
  },
  {
    id: 'gal-4',
    category: 'tire',
    title: 'Off-Road Tire Mount & Balancing',
    description: 'Installing heavy beadlock wheels in our Sweetwater service bay with modern laser-guided balancers.',
    image: '/src/assets/images/grave_tire_service_1781203098396.jpg'
  },
  {
    id: 'gal-5',
    category: 'repair',
    title: 'Grave Main Servicing Shop Interior',
    description: 'Clean, fully automated diagnostic alignment and mechanical repair docks right off Broadway.',
    image: '/src/assets/images/grave_hero_1781203045092.jpg'
  },
  {
    id: 'gal-6',
    category: 'repair',
    title: 'A/C Evacuation & Recharge Loop',
    description: 'Flushing refrigerant lines, recharging Freon, replacing compressors to survive desert heat.',
    image: '/src/assets/images/ac_service_1781208062260.jpg'
  },
  {
    id: 'gal-7',
    category: 'guard',
    title: 'Custom Steel Back Bumper replacement',
    description: 'Direct-to-chassis steel protection with trailer tow mount slots and reverse light sensor integration.',
    image: '/src/assets/images/rear_bumper_1781208075216.jpg'
  },
  {
    id: 'gal-8',
    category: 'lift',
    title: 'F-250 High-Clearance Tow Rig Upgrade',
    description: 'Heavy duty tow spring sets and leveling blocks to eliminate heavy trailer rear end sag.',
    image: '/src/assets/images/tow_rig_f250_1781208086470.jpg'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'lift' | 'guard' | 'bedliner' | 'tire' | 'repair'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 bg-neutral-50 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 uppercase tracking-widest font-black text-xs font-mono">
            Rig Showcase & Shop Records
          </span>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Our Completed Projects Gallery
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            We are proud of the builds that exit our garage door. Filter through our historic repairs, lift-kit projects, Ranch Hand guards, and spray bed linings.
          </p>
        </div>

        {/* Gallery Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'lift', label: 'Lifted Rigs' },
            { id: 'guard', label: 'Grille Guards' },
            { id: 'bedliner', label: 'Bed Liners' },
            { id: 'repair', label: 'Shop Repairs' },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4.5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider border transition-all font-mono ${
                  isActive
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-200'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filtered Project Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setLightboxIndex(index)}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-200 bg-white group cursor-pointer hover:border-red-655 hover:shadow-lg hover:shadow-red-600/5 transition-all"
              id={`gallery-photo-${item.id}`}
            >
              {/* Product Photo */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Black overlay hover effect */}
              <div className="absolute inset-0 bg-neutral-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 pointer-events-none" />

              {/* Hover text block bottom container */}
              <div className="absolute inset-x-0 bottom-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                <span className="text-[9px] text-red-400 font-extrabold uppercase tracking-widest font-mono">
                  Category: {item.category}
                </span>
                <h3 className="text-white font-extrabold text-sm tracking-tight mt-1">
                  {item.title}
                </h3>
                <p className="text-neutral-350 text-[10px] sm:text-xs leading-normal mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Hover maximize scale zoom button right corner */}
              <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur-md p-2.5 rounded-lg border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Maximize2 className="h-4 w-4 text-red-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Lightbox Carousel popup overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop shading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            />

            {/* Inner carousel frame packaging */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button element */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 text-neutral-700 hover:text-neutral-900 bg-white/90 backdrop-blur-md p-2 rounded-lg border border-neutral-200 z-20 transition-all shadow-sm"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Main Photo viewport */}
              <div className="relative aspect-[16/10] w-full bg-neutral-100 flex items-center justify-center">
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Left navigation trigger indicator */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-800 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-red-600 transition-all shadow-sm"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right navigation trigger indicator */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-800 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-red-600 transition-all shadow-sm"
                  aria-label="Next photo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              {/* Slide Detail bottom description bar */}
              <div className="p-6 bg-white border-t border-neutral-200 text-left">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[10px] text-red-600 font-extrabold uppercase tracking-widest font-mono">
                      Completed Rig • {filteredItems[lightboxIndex].category}
                    </span>
                    <h4 className="text-neutral-900 font-extrabold text-lg sm:text-xl tracking-tight mt-1">
                      {filteredItems[lightboxIndex].title}
                    </h4>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                      {filteredItems[lightboxIndex].description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block font-bold">Progress</span>
                    <span className="text-neutral-900 font-extrabold font-mono text-sm">
                      {lightboxIndex + 1} / {filteredItems.length}
                    </span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
