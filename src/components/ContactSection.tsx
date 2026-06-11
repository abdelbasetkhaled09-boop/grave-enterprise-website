import React from 'react';
import { SHOP_HOURS } from '../data';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Navigation,
  ExternalLink
} from 'lucide-react';

export default function ContactSection() {
  // Helper to identify current day of the week to highlight live in shop hours list
  const getCurrentDayName = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todayIndex = new Date().getDay();
    return days[todayIndex];
  };

  const todayDayName = getCurrentDayName();

  return (
    <section id="contact" className="py-24 bg-neutral-100 border-t border-neutral-200 relative overflow-hidden">
      
      {/* Decorative subtle ambient details */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-650/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-605 uppercase tracking-widest font-black text-xs font-mono bg-red-50 px-3.5 py-1 rounded-full border border-red-100">
            Get in touch directly
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
            Repairs or Custom Upgrades? Let's Talk
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            At Grave Enterprise, we prioritize direct customer care. To keep service fast, fair, and perfectly suited to your vehicle, we connect directly by phone or in person at our Sweetwater shop—no complex web-ticket queues.
          </p>
        </div>

        {/* Bento Grid Design with direct communication channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card Module 1: The Urgent Phone and Address Actions (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Direct Call Center Card */}
            <a
              href="tel:3252197016"
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-red-500/35 transition-all flex flex-col justify-between group shadow-sm flex-1 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="p-4 bg-red-550/10 rounded-xl border border-red-500/10 text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all flex-shrink-0 w-fit">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-neutral-500 text-[10px] font-black uppercase tracking-widest font-mono">Immediate Hotline</h4>
                  <p className="text-neutral-900 text-2xl font-black tracking-tight group-hover:text-red-600 transition-colors">
                    (325) 219-7016
                  </p>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-semibold">
                    Call our team to check part availability, get quick quotes, or schedule suspension & service times instantly.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center space-x-1 text-xs text-red-605 font-extrabold uppercase font-mono pt-4 mt-4 border-t border-neutral-100">
                <span>TAP TO CALL SHOP NOW</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </a>

            {/* Direct Walk-In Location Card */}
            <a
              href="https://maps.google.com/?q=1504+W+Broadway+St,+Sweetwater,+TX+79556"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-red-500/35 transition-all flex flex-col justify-between group shadow-sm flex-1 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="p-4 bg-red-550/10 rounded-xl border border-red-500/10 text-red-605 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all flex-shrink-0 w-fit">
                  <MapPin className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-neutral-500 text-[10px] font-black uppercase tracking-widest font-mono">Our Sweetwater Location</h4>
                  <p className="text-neutral-900 text-xl font-black tracking-tight leading-tight">
                    1504 W Broadway St
                  </p>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-normal font-semibold">
                    Sweetwater, TX 79556 • Right off Broadway St with convenient heavy truck ingress/egress.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center space-x-1 text-xs text-red-605 font-extrabold uppercase font-mono pt-4 mt-4 border-t border-neutral-100">
                <span>GET GPS DIRECTIONS</span>
                <Navigation className="h-3.5 w-3.5" />
              </span>
            </a>

          </div>

          {/* Card Module 2: Operating schedule (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-neutral-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center space-x-3 pb-4 border-b border-neutral-100">
                <Clock className="h-5 w-5 text-red-600" />
                <h3 className="text-sm font-black text-neutral-900 uppercase tracking-wider font-mono">
                  Grave Workshop Operating Hours
                </h3>
              </div>

              <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-semibold">
                State safety inspections and custom installations are processed daily. We welcome walk-ins for Texas Inspections. Drive in from 8:00 AM to 6:00 PM, Mon-Fri!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SHOP_HOURS.map((sh, idx) => {
                  const isToday = sh.day === todayDayName;
                  return (
                    <div 
                      key={idx} 
                      className={`flex justify-between items-center text-xs p-3.5 rounded-xl border transition-all ${
                        isToday 
                          ? 'bg-red-50 border-red-200 font-bold text-red-900 shadow-sm col-span-1 sm:col-span-2'
                          : 'bg-neutral-50 border-neutral-100 text-neutral-600'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-extrabold text-neutral-800">{sh.day}</span>
                        {isToday && (
                          <span className="bg-emerald-50 text-emerald-700 font-mono text-[9px] font-black tracking-widest px-1.5 py-0.5 rounded border border-emerald-100 uppercase animate-pulse">
                            Today
                          </span>
                        )}
                      </div>
                      <span className={isToday ? 'text-red-605 font-mono font-black' : 'text-neutral-800 font-mono font-semibold'}>
                        {sh.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Full-width Responsive Embedded Map area below details */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200 p-4 h-96 overflow-hidden relative group shadow-sm">
          <iframe
            title="Grave Enterprise Location Map Sweetwater"
            src="https://maps.google.com/maps?q=1504%20W%20Broadway%20St,%20Sweetwater,%20TX%2079556&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute top-6 left-6 bg-neutral-900/95 text-white p-5 rounded-xl border border-neutral-800 backdrop-blur-md shadow-2xl max-w-xs hidden sm:block pointer-events-none">
            <h4 className="font-mono text-xs font-black uppercase text-red-400 tracking-wider">Sweetwater Service Hub</h4>
            <p className="text-xs leading-relaxed text-neutral-300 mt-1 font-semibold">
              1504 W Broadway St,<br /> Sweetwater, TX 79556
            </p>
            <span className="text-[10px] text-neutral-400 mt-2.5 block font-mono">
              ★ Easy pull-in for dualies and large flatbed trailers.
            </span>
          </div>

          <a
            href="https://maps.google.com/?q=1504+W+Broadway+St,+Sweetwater,+TX+79556"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-5 py-3.5 rounded-xl shadow-lg flex items-center space-x-2 border border-red-500 transition-all font-mono"
            id="maps-get-directions-large"
          >
            <Navigation className="h-4.5 w-4.5 animate-bounce" />
            <span>OPEN GOOGLE MAPS DIRECTIONS</span>
          </a>
        </div>

      </div>

    </section>
  );
}
