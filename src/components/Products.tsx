import React from 'react';
import { PRODUCTS_DATA } from '../data';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Products() {
  const handleInquireProduct = (itemName: string) => {
    // Smooth scroll to contact
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
    <section id="products" className="py-24 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <span className="text-red-600 uppercase tracking-widest font-black text-xs font-mono">
              Premium Texas Truck Armor & Accessories
            </span>
            <h2 id="products-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight">
              Featured Premium Brands We Carry & Install
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base font-medium">
              We stand for rugged quality. We don't mess around with flimsy imports—we install heavily tested, certified brands that protect your rig, keep cattle trails safe, and increase towing capacity.
            </p>
          </div>
          
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-extrabold px-6 py-3 rounded-lg border border-neutral-205 text-xs sm:text-sm uppercase tracking-wider transition-all self-start md:self-end font-mono"
          >
            Inquire About Custom Fitment
          </button>
        </div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl border border-neutral-200 flex flex-col justify-between overflow-hidden group hover:border-red-500/35 hover:shadow-lg hover:shadow-neutral-100 transition-all w-full"
              id={`product-card-${product.id}`}
            >
              {/* Image Container with Label */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Brand Logo Stamp Badge */}
                <span className="absolute top-4 left-4 bg-red-600 text-white font-black text-[10px] tracking-widest uppercase px-3 py-1 rounded border border-red-500 shadow-md">
                  {product.brand}
                </span>

                <span className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-neutral-700 font-bold text-[10px] tracking-wide uppercase px-2 py-0.5 rounded border border-neutral-200">
                  {product.category}
                </span>
                
                {/* Visual Glass gradient shade melting down to light panel */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent" />
              </div>

              {/* Core Text Section */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mb-2 tracking-tight group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    {product.description}
                  </p>

                  {/* Bullet Bullet list details */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-black block">Core Features</span>
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center text-[11px] text-neutral-700 font-medium">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Custom Quote Linker */}
                <button
                  onClick={() => handleInquireProduct(product.name)}
                  className="w-full mt-4 flex items-center justify-center space-x-2 bg-neutral-50 hover:bg-red-50 text-neutral-800 hover:text-red-700 font-bold py-2.5 px-4 rounded-lg border border-neutral-200 hover:border-red-500/25 text-xs uppercase tracking-wider transition-all font-mono"
                >
                  <span>Inquire About Installation</span>
                  <ArrowUpRight className="h-4 w-4 text-red-600" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos Scroll Banner */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <p className="text-center text-xs text-neutral-400 uppercase tracking-widest font-extrabold mb-8">
            Officially Certified Dealer & Install Bay For
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-60 grayscale hover:opacity-100 transition-opacity duration-300">
            <span className="text-neutral-800 font-black text-xl tracking-tighter">RANCH HAND</span>
            <span className="text-neutral-800 font-mono text-lg font-bold">READY LIFT</span>
            <span className="text-neutral-800 font-sans text-xl font-extrabold">WESTIN</span>
            <span className="text-neutral-800 font-serif text-2xl tracking-widest">B&W</span>
            <span className="text-neutral-800 font-black text-xl italic font-serif">RHINO LININGS</span>
            <span className="text-neutral-800 font-sans text-lg font-black tracking-widest font-bold">WEATHERTECH</span>
          </div>
        </div>

      </div>
    </section>
  );
}
