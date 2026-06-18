import React from 'react';
import { ShieldAlert, Award, PiggyBank, FastForward, Heart, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const HIGHLIGHTS = [
  {
    id: 'exp',
    title: 'Experienced Technicians',
    description: 'Our certified general mechanics and painting specialists have spent years under the hoods of passenger vehicles, SUVs, and commercial engines. From diagnostics to painting, we do it right.',
    icon: Award,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  },
  {
    id: 'honest',
    title: 'Honest & Plain Pricing',
    description: 'We run on old-school integrity. No surprise fees, no unsolicited upsells, and no overcharging. We provide upfront estimates and explain every dollar before starting any painting or repairs.',
    icon: PiggyBank,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  },
  {
    id: 'fast',
    title: 'Fast Service Turnaround',
    description: 'We know your vehicle is your livelihood, especially here in Scottsville. We keep our service bays organized and our painting booth schedule tight to complete work swiftly.',
    icon: FastForward,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  },
  {
    id: 'sat',
    title: 'High Customer Satisfaction',
    description: 'Boasting a 4.3 rating on Google based on 29 reviews, our reputation speaks for itself. We treat every vehicle like we are working on our own family rig, resulting in repeat customers.',
    icon: Heart,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  },
  {
    id: 'parts',
    title: 'Quality Parts & Materials',
    description: 'We do not use flimsy components. We fit your car with legendary national brands and coatings like ACDelco electrical parts, Wagner brakes, and Axalta premium finish paints.',
    icon: ShieldCheck,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  },
  {
    id: 'local',
    title: 'Locally Owned Virginia Shop',
    description: 'William\'s Auto Repair is born-and-raised right here in Scottsville, VA. We shop locally, hire locally, and understand Albemarle and Fluvanna county roads and weather issues.',
    icon: ShieldAlert,
    colorCode: 'text-red-650 bg-red-50 border-red-100'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-neutral-50 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Subtle decorative layout background */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 uppercase tracking-widest font-black text-xs font-mono">
            Scottsville Built & Owned
          </span>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Why Scottsville Drivers Choose William's
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            We operate on rugged honesty, high safety standards, and refinishing expertise to give your passenger car or service vehicle the absolute best treatment.
          </p>
        </div>

        {/* 6 Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-neutral-200 hover:border-red-500/30 p-6 rounded-xl flex flex-col justify-between transition-all group hover:shadow-lg hover:shadow-neutral-200/50 hover:-translate-y-1"
                id={`why-card-${item.id}`}
              >
                <div>
                  {/* Icon Panel */}
                  <div className={`p-3 rounded-lg border w-fit mb-5 transition-all group-hover:bg-red-600 group-hover:text-white group-hover:border-red-550 ${item.colorCode}`}>
                    <IconComponent className="h-6 w-6 text-inherit transition-colors" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex justify-between items-center text-[10px] text-neutral-400 uppercase font-mono tracking-widest font-black">
                  <span>William's Certified</span>
                  <span className="bg-neutral-50 border border-neutral-200 px-2 py-0.5 rounded text-neutral-500">Item {index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Service Area list strip */}
        <div className="mt-16 bg-white rounded-xl p-8 border border-neutral-200 text-center space-y-6 shadow-sm">
          <div className="inline-flex items-center space-x-2 bg-red-50 border border-red-100 px-3.5 py-1 rounded-full text-[10px] text-red-600 uppercase tracking-widest font-black font-mono">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Serving Albemarle, Fluvanna Counties & Surrounding Areas</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">Our Local Virginia Service Areas Include</h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Scottsville', 'Glenmore Road', 'Charlottesville', 'Palmyra', 'Fork Union', 
              'Kents Store', 'Keene', 'Esmont', 'Schuyler', 'Arvonia'
            ].map((city, idx) => (
              <span
                key={idx}
                className="bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-700 font-extrabold px-3.5 py-1.5 rounded-lg hover:border-red-600/30 hover:text-red-600 transition-all font-mono shadow-sm"
              >
                📌 {city}, VA
              </span>
            ))}
          </div>
          
          <p className="text-xs text-neutral-500 max-w-2xl mx-auto leading-relaxed font-semibold">
            From beautiful neighborhoods to major commercial state highways, we serve Scottsville and nearby regions. Contact us to schedule checking your car or truck!
          </p>
        </div>

      </div>
    </section>
  );
}
