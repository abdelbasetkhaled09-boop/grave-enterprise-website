import React, { useState } from 'react';
import * as Lucide from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'repair' | 'inspections' | 'accessories'>('all');

  const filteredServices = SERVICES_DATA.filter(
    (service) => activeCategory === 'all' || service.category === activeCategory
  );

  const handleRequestService = (serviceTitle: string) => {
    // Smooth scroll to contact section
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

  const getIcon = (name: string) => {
    const IconComponent = (Lucide as any)[name];
    if (IconComponent) {
      return <IconComponent className="h-6 w-6 text-red-600" />;
    }
    return <Lucide.Wrench className="h-6 w-6 text-red-600" />;
  };

  return (
    <section id="services" className="py-24 bg-neutral-50 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 uppercase tracking-widest font-black text-xs font-mono">
            Professional Texas Grade Services
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            How We Keep You on the Road
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">
            From official state inspections and heavy automotive diagnostics to bulletproof spray-in liners and custom lift kits, we deliver rugged, honest, and high-quality craftsmanship.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {[
            { id: 'all', label: 'All Services', icon: Lucide.Compass },
            { id: 'repair', label: 'Mechanical Repair', icon: Lucide.Wrench },
            { id: 'inspections', label: 'State & DOT Inspections', icon: Lucide.ShieldCheck },
            { id: 'accessories', label: 'Truck Accessories', icon: Lucide.Truck },
          ].map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider border transition-all ${
                  isActive
                    ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-200'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <TabIcon className="h-4 w-4 flex-shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                key={service.id}
                className="bg-white border border-neutral-200 hover:border-red-500/40 rounded-xl p-6 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-red-600/5 hover:-translate-y-1"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon Wrap */}
                    <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200 group-hover:bg-red-50 group-hover:border-red-500/20 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                    {/* Price/Rate indicator */}
                    <span className="text-xs font-mono font-bold text-neutral-600 uppercase tracking-widest bg-neutral-50 px-2.5 py-1 rounded border border-neutral-200">
                      Est: {service.startingPrice}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 mb-2 leading-tight group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-medium">
                    {service.description}
                  </p>

                  {/* Bullet Bullet Feature Items */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-neutral-700 font-medium">
                        <Lucide.CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Footer */}
                <div className="pt-4 border-t border-neutral-100 flex justify-between items-center mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-black">Estimated Turn</span>
                    <span className="text-xs text-neutral-700 font-extrabold">{service.estimatedTime || 'Fast service'}</span>
                  </div>
                  <button
                    onClick={() => handleRequestService(service.title)}
                    className="flex items-center space-x-1.5 text-xs text-red-600 hover:text-red-700 font-black tracking-wider uppercase group/btn px-3 py-1.5 rounded-md hover:bg-red-50 transition-all font-mono"
                  >
                    <span>Request Service</span>
                    <Lucide.ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quick Help Strip banner */}
        <div className="mt-16 bg-white rounded-xl p-6 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="bg-red-50 p-3 rounded-lg border border-red-500/10 hidden sm:block">
              <Lucide.AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h4 className="text-neutral-900 font-black text-base sm:text-lg">Need towing assistance or roadside pick-up in Sweetwater?</h4>
              <p className="text-neutral-600 text-sm font-medium">We coordinate with local sweetwater towing fleets to pull your truck straight to our service bay.</p>
            </div>
          </div>
          <a
            href="tel:3252197016"
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-black text-sm px-6 py-3 rounded-lg uppercase tracking-wider transition-all font-mono shadow-sm"
          >
            <Lucide.PhoneCall className="h-4 w-4" />
            <span>(325) 219-7016</span>
          </a>
        </div>

      </div>
    </section>
  );
}
