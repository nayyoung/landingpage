import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-start justify-between gap-6 border-t border-[#222] py-12 text-sm text-[#444] md:flex-row md:items-center">
      <div className="flex flex-col gap-1 md:flex-row md:gap-4">
        <span>Naya Joelle.</span>
        <span className="hidden md:inline">/</span>
        <span>Seattle.</span>
        <span className="hidden md:inline">/</span>
        <span>Building.</span>
      </div>
      <div className="font-medium text-[#333]">
        Built for people who ship, not people who plan to ship.
      </div>
    </footer>
  );
};

export default Footer;