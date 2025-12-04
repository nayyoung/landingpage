import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center py-20">
      <div className="z-10 flex flex-col gap-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-[7rem]"
        >
          Builder. <br />
          <span className="text-[#555]">Can't stop.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md text-lg text-[#888] md:text-xl"
        >
          AI tools, automations, and experiments. <br />
          Shipping from the void.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0"
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-[#e07a24]" />
      </motion.div>
    </section>
  );
};

export default Hero;