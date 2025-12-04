import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface QuestionProps {
  question: string;
  answer: string;
}

const Question: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#222]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left hover:text-[#e07a24]"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-[#e07a24]' : 'text-[#f5f5f5]'}`}>
          {question}
        </span>
        {isOpen ? <Minus className="h-5 w-5 text-[#e07a24]" /> : <Plus className="h-5 w-5 text-[#444]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mb-6 text-[#888] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Common Qs</h2>
          <p className="text-[#666]">
            Answers to things people usually ask me in DMs.
          </p>
        </div>
        <div className="lg:col-span-8">
          <Question 
            question="What kind of tools do you build?" 
            answer="Mostly automation scripts, niche data scrapers, and AI wrappers that solve specific headaches for solo founders and creators. If it saves time or finds money, I build it." 
          />
          <Question 
            question="Are these tools free?" 
            answer="Some are free experiments, some are paid micro-SaaS. If you're on the email list, you usually get early access for free before I put up a paywall." 
          />
          <Question 
            question="Do you do custom development?" 
            answer="Rarely. I prefer building my own experiments. But if the project is weird enough or the problem is interesting enough, I might bite. DM me." 
          />
          <Question 
            question="How often do you ship?" 
            answer="I aim for one solid experiment every two weeks. Smaller updates and findings get posted to the email list weekly." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;