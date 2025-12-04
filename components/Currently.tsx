import React from 'react';
import { motion } from 'framer-motion';

const Currently: React.FC = () => {
  return (
    <section className="border-t border-[#222] py-24">
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-sm font-medium uppercase tracking-widest text-[#555] md:mb-0 md:w-1/4"
        >
          Currently
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-6 md:w-3/4"
        >
          <div className="flex items-start gap-4">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e07a24] shadow-[0_0_8px_#e07a24]"></span>
            <p className="text-xl font-light leading-relaxed text-[#ccc] md:text-2xl">
              Building a lead gen system for real estate agents.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#333]"></span>
            <p className="text-xl font-light leading-relaxed text-[#666] md:text-2xl">
              Posting for the first time ever. We'll see.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Currently;