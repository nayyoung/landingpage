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
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-sm bg-[#111] p-8 md:p-16"
      >
        <h2 className="mb-12 text-5xl font-bold tracking-tighter md:text-7xl">
          Find me.
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
              Follow the build. Feeling spicy? DM me.
            </p>
          </div>

          {/* Email Capture */}
          <div className="flex flex-col gap-6">
            <p className="text-[#888]">
              Leave your email if you want early access to whatever I ship next.
            </p>
            
            <form onSubmit={handleSubmit} className="relative mt-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@address.com"
                className="w-full border-b border-[#333] bg-transparent pb-4 text-xl text-[#f5f5f5] placeholder-[#444] outline-none transition-colors focus:border-[#e07a24]"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'success'}
                className="absolute right-0 top-0 text-sm font-bold uppercase tracking-widest text-[#e07a24] hover:text-white disabled:text-green-500"
              >
                {status === 'success' ? 'Saved' : "I'm in"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Connect;