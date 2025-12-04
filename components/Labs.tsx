import React from 'react';
import { motion } from 'framer-motion';
import { Beaker } from 'lucide-react';

const Labs: React.FC = () => {
  return (
    <section className="border-t border-[#222] py-24">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-0 md:w-1/4"
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-[#555]">
            Labs & Roadmap
          </h2>
          <p className="text-xs text-[#444]">Updated weekly.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-8 md:w-3/4"
        >
          {/* Item 1 */}
          <div className="group border-l-2 border-[#222] pl-6 transition-colors hover:border-[#e07a24]">
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded bg-[#111] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#e07a24]">In Progress</span>
              <span className="text-xs text-[#555]">ETA: Next Week</span>
            </div>
            <h3 className="mb-1 text-xl font-bold text-[#f5f5f5]">Real Estate Lead Gen System</h3>
            <p className="text-base text-[#888]">
              Automating the "boring" parts of agent outreach using custom GPTs and scraping scripts. 
              Focusing on high-intent lead identification.
            </p>
          </div>

          {/* Item 2 */}
          <div className="group border-l-2 border-[#222] pl-6 transition-colors hover:border-[#333]">
            <div className="mb-2 flex items-center gap-3">
              <span className="rounded bg-[#111] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#555]">Testing</span>
            </div>
            <h3 className="mb-1 text-xl font-bold text-[#f5f5f5]">Viral Hook Database</h3>
            <p className="text-base text-[#888]">
              Structuring a database of 5,000+ viral hooks from TikTok and Reels. 
              Currently training a model to predict hook success rate.
            </p>
          </div>

          <div className="mt-4">
             <a href="#" className="flex items-center gap-2 text-sm font-medium text-[#f5f5f5] hover:text-[#e07a24] hover:underline">
               <Beaker className="h-4 w-4" />
               View full public roadmap
             </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Labs;