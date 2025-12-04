import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  audience: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Niche Signal Radar",
    description: "Finds what frustrates people before it's obvious.",
    audience: "For founders hunting their next idea.",
    link: "#"
  },
  {
    title: "Content Clarity Vault",
    description: "Prompt engineering without the repetition.",
    audience: "For daily AI users tired of rewriting the same prompts.",
    link: "#"
  },
  {
    title: "Viral Video Analyzer",
    description: "Reverse-engineers what works. Built in a night.",
    audience: "For creators who'd rather study patterns than guess.",
    link: "#"
  },
  {
    title: "PropDraft",
    description: "Prompt packs for real estate creators.",
    audience: "For agents who need content but hate making it.",
    link: "#"
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

      <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex cursor-default flex-col justify-between border-t border-[#222] pt-6"
          >
            <div className="mb-8">
              <h3 className="mb-3 text-3xl font-bold tracking-tight text-[#f5f5f5] transition-colors group-hover:text-[#e07a24]">
                {project.title}
              </h3>
              <p className="max-w-sm text-lg text-[#ccc] transition-colors group-hover:text-white">
                {project.description}
              </p>
              <p className="mt-2 text-sm text-[#666] transition-colors group-hover:text-[#888]">
                {project.audience}
              </p>
            </div>
            
            <div>
              <a 
                href={project.link}
                className="inline-flex items-center gap-2 border border-[#333] px-5 py-2 text-sm font-bold uppercase tracking-wider text-[#f5f5f5] transition-all hover:border-[#e07a24] hover:bg-[#e07a24] hover:text-black"
              >
                Try It <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;