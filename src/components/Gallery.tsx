import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const GALLERY_ITEMS = [
  {
    id: 'gal-1',
    category: 'paint',
    title: 'Showroom Full-Body Auto Paint Job',
    description: 'Perfect chemical prep and spraying premium Axalta paint layers in our Scottsville spray booth for a beautiful deep gloss.',
    image: '/src/assets/images/williams_paint_job_1781813646859.jpg'
  },
  {
    id: 'gal-2',
    category: 'repair',
    title: 'Computerized Engine Tune & Diagnostic',
    description: 'Diagnosing engine timing, spark plug performance, and verifying oil sensor loops on a passenger car.',
    image: '/src/assets/images/williams_engine_diagnostic_1781813658778.jpg'
  },
  {
    id: 'gal-3',
    category: 'ac',
    title: 'Professional A/C Freon Recharge',
    description: 'Evacuating bad refrigerant lines, vacuum-leak testing, and refilling Freon on an SUV system.',
    image: '/src/assets/images/ac_service_1781208062260.jpg'
  },
  {
    id: 'gal-4',
    category: 'repair',
    title: 'Full Brake Replacement Service',
    description: 'Installing ceramic brake pads and balanced high-durability rotors for optimal stopping power.',
    image: '/src/assets/images/williams_brake_rotors_service_1781813923463.jpg'
  },
  {
    id: 'gal-5',
    category: 'repair',
    title: 'William\'s General Repair Docks',
    description: 'Inside our clean diagnostics, mechanical alignment, and vehicle service facilities on Glenmore Rd.',
    image: '/src/assets/images/williams_hero_1781813633300.jpg'
  },
  {
    id: 'gal-6',
    category: 'paint',
    title: 'Side View Mirror Replacement & Paint Refinish',
    description: 'Installing OEM housing and executing factory-matching pigment spraying to align with the original chassis color.',
    image: '/src/assets/images/williams_mirror_paint_1781814149097.jpg'
  },
  {
    id: 'gal-7',
    category: 'repair',
    title: 'Under-hood Battery Service & Alternator Mount',
    description: 'Connecting heavy-duty gold professional ACDelco batteries and diagnosing alternator circuit health.',
    image: '/src/assets/images/williams_battery_install_1781814162579.jpg'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'repair' | 'paint' | 'ac'>('all');
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
            Service Showcase & Shop Records
          </span>
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Our Completed Projects Gallery
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            We are proud of the repairs and finishes that exit through our garage door. Filter through our mechanical repairs, paint jobs, and A/C leak checking.
          </p>
        </div>

        {/* Gallery Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'repair', label: 'Mechanical Repair' },
            { id: 'paint', label: 'Paint Booth' },
            { id: 'ac', label: 'Air Conditioning' },
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
                  {item.category === 'paint' ? 'Refinish Work' : item.category === 'ac' ? 'A/C Service' : 'Mechanical'}
                </span>
                <h3 className="text-white text-sm sm:text-base font-extrabold tracking-tight mt-1 leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Eye zoom button symbol */}
              <div className="absolute top-5 right-5 p-2 bg-white/90 backdrop-blur-sm border border-neutral-200 text-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Maximize2 className="h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full view light-box carousel */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div 
              className="fixed inset-0 min-h-screen bg-neutral-950/95 z-50 flex items-center justify-center p-3 sm:p-6"
              onClick={() => setLightboxIndex(null)}
            >
              <div className="absolute inset-0" onClick={() => setLightboxIndex(null)} />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden max-w-5xl w-full border border-neutral-850 shadow-2xl relative z-10"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Close modal cross Button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="absolute top-4 right-4 z-20 text-neutral-800 bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-red-600 transition-all shadow-sm"
                  aria-label="Close photo view"
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
                        Completed Service • {filteredItems[lightboxIndex].category}
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

      </div>
    </section>
  );
}
