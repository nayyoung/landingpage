import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center py-20">
      <div className="z-10 flex flex-col gap-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-[7rem]"
        >
          Builder. <br />
          <span className="text-[#555]">Can't stop.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <p className="max-w-xl text-lg text-[#888] md:text-xl leading-relaxed">
            AI tools, automations, and experiments for indie hackers and solo founders.
            <br />
            <span className="text-[#e07a24] text-base mt-2 block">
              You’ll get early access to weird tools that might solve problems you don’t even know you have.
            </span>
          </p>

          {/* Conversion Layer: Hero Email Capture */}
          <div className="max-w-md">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 rounded border border-[#222] bg-[#111] px-4 py-3 text-[#e07a24]"
              >
                <Check className="h-5 w-5" />
                <span className="font-medium">You're on the list. Keep building.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@address.com"
                  className="w-full rounded-none border border-[#333] bg-[#0a0a0a] px-4 py-3 text-base text-white placeholder-[#444] outline-none transition-colors focus:border-[#e07a24]"
                  required
                />
                <button 
                  type="submit" 
                  className="whitespace-nowrap bg-[#e07a24] px-6 py-3 text-base font-bold text-black transition-transform hover:translate-y-[-2px] hover:bg-[#ff8f35]"
                >
                  Send me early builds
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-[#555]">Join 1,200+ builders. Unsubscribe whenever.</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-0 hidden md:block"
      >
        <ArrowDown className="h-6 w-6 animate-bounce text-[#333]" />
      </motion.div>
    </section>
  );
};

export default Hero;