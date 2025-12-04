import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Niche Signal Radar",
    description: "Finds what frustrates people before it's obvious."
  },
  {
    title: "Content Clarity Vault",
    description: "Prompt engineering without the repetition."
  },
  {
    title: "Viral Video Analyzer",
    description: "Reverse-engineers what works. Built in a night."
  },
  {
    title: "PropDraft",
    description: "Prompt packs for real estate creators."
  }
];

const Work: React.FC = () => {
  return (
    <section className="py-24">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-sm font-medium uppercase tracking-widest text-[#555]"
      >
        Work
      </motion.h2>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex cursor-default flex-col justify-between border-t border-[#222] pt-6 transition-colors hover:border-[#e07a24]"
          >
            <div>
              <h3 className="mb-3 text-3xl font-bold tracking-tight text-[#f5f5f5] transition-colors group-hover:text-[#e07a24]">
                {project.title}
              </h3>
              <p className="max-w-sm text-base text-[#777] transition-colors group-hover:text-[#999]">
                {project.description}
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
               <div className="h-[2px] w-8 bg-[#e07a24]"></div>
               <span className="text-xs font-medium uppercase tracking-wider text-[#e07a24]">View Experiment</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;