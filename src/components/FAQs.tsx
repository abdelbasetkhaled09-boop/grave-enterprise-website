import React, { useState } from 'react';
import { FAQ_DATA } from '../data';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQs() {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1'); // default first one open
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const qMatches = faq.question.toLowerCase().includes(searchQuery.toLowerCase());
    const aMatches = faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return qMatches || aMatches;
  });

  return (
    <section id="faqs" className="py-24 bg-white border-t border-neutral-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-red-600 uppercase tracking-widest font-black text-xs font-mono">
            Support & Clarification
          </span>
          <h2 id="faqs-heading" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base font-medium">
            Have questions about Texas State inspections, Rhino spray liners, lift kit warranties, or diagnostics? Read our answers below.
          </p>
        </div>

        {/* Live Search bar filter */}
        <div className="relative mb-10 max-w-md mx-auto">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-neutral-400 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. lift, liner, inspection)..."
            className="w-full bg-neutral-50 border border-neutral-200 focus:border-red-500 rounded-xl py-3 pl-12 pr-4 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none shadow-sm focus:bg-white transition-all font-medium"
          />
        </div>

        {/* Accordions Stack list */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-500 text-sm font-semibold">
              No matching questions found. Try typing another search term!
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-neutral-200 overflow-hidden transition-all hover:border-red-500/30 shadow-sm"
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left text-neutral-800 focus:outline-none focus:ring-0 group"
                  >
                    <span className="font-extrabold text-sm sm:text-base tracking-tight text-neutral-900 group-hover:text-red-600 transition-colors pr-4">
                      {faq.question}
                    </span>
                    <div className="p-1.5 bg-neutral-50 border border-neutral-200 text-neutral-500 group-hover:text-red-600 group-hover:border-red-200 rounded-lg flex-shrink-0 transition-colors">
                      {isOpen ? <ChevronUp className="h-4.5 w-4.5" /> : <ChevronDown className="h-4.5 w-4.5" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="p-5 pt-0 border-t border-neutral-100 text-xs sm:text-sm text-neutral-605 leading-relaxed bg-neutral-50/50 font-medium">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Dynamic Help Box banner */}
        <div className="mt-12 bg-neutral-50 border border-neutral-200 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-neutral-900 font-extrabold text-sm sm:text-base">Have another technical question?</h4>
            <p className="text-neutral-600 text-xs font-medium">Reach out to us directly or stop by our Scottsville service center.</p>
          </div>
          <a
            href="tel:4342823733"
            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase px-5 py-2.5 rounded-lg border border-red-500 shadow-sm transition-all font-mono"
          >
            Ask a Mechanic
          </a>
        </div>

      </div>
    </section>
  );
}
