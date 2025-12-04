import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Twitter } from 'lucide-react';

const Connect: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-sm bg-[#111] p-8 md:p-16 border border-[#222]"
      >
        <h2 className="mb-12 text-5xl font-bold tracking-tighter md:text-7xl">
          Stay in the loop.
        </h2>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Socials */}
          <div className="flex flex-col gap-8">
            <a 
              href="https://twitter.com/nayajoelley" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 text-2xl font-light text-[#ccc] transition-colors hover:text-[#e07a24]"
            >
              <Twitter className="h-6 w-6" />
              <span>@nayajoelley</span>
              <ArrowRight className="h-5 w-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </a>
            <p className="text-[#666]">
              I tweet the wins and the absolute failures.
            </p>
          </div>

          {/* Email Capture */}
          <div className="flex flex-col justify-end">
             {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded border border-[#e07a24] bg-[#1a110d] p-8 text-center"
                >
                  <p className="text-xl font-medium text-[#e07a24]">You're in.</p>
                  <p className="mt-2 text-[#ccc]">Check your inbox for the welcome drop.</p>
                </motion.div>
             ) : (
              <div className="flex flex-col gap-2">
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#e07a24]">
                  Don't miss the next drop.
                </p>
                
                <form onSubmit={handleSubmit} className="relative mt-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@address.com"
                    className="w-full border-b-2 border-[#333] bg-transparent pb-4 text-2xl font-medium text-[#f5f5f5] placeholder-[#444] outline-none transition-colors focus:border-[#e07a24]"
                    required
                  />
                  <button 
                    type="submit" 
                    className="absolute right-0 top-0 text-sm font-bold uppercase tracking-widest text-[#f5f5f5] hover:text-[#e07a24]"
                  >
                    Join Early Access
                  </button>
                </form>
                <p className="mt-4 text-xs text-[#555]">
                  No spam. Just shipping updates.
                </p>
              </div>
             )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;