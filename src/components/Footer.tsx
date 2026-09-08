import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0d0e14] border-t border-[#494552]/30 py-12 text-[#cac4d4] font-mono text-xs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-sm font-semibold text-[#e3e1ea] tracking-wider">
              CHINMAYI K // AI &amp; DATA SCIENCE
            </div>
            <div className="text-xs text-[#cac4d4]">
              REVA University • Bangalore, India
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cebdff] transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#cebdff] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-[#cebdff] transition-colors"
            >
              Email
            </a>
            <button
              id="footer-back-to-top-btn"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#1b1b21] border border-[#494552]/50 hover:border-[#cebdff] hover:text-[#cebdff] transition-all text-xs"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-[#494552]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00e599] inline-block animate-pulse"></span>
            <span className="text-[#45dfa4]">
              ALL SYSTEMS OPERATIONAL // READY
            </span>
            <span className="text-[#494552]">•</span>
            <span>BUILD v2.4</span>
          </div>

          <div className="text-[#cac4d4]">
            Designed &amp; built for Chinmayi K • AI &amp; Data Science (9.2 CGPA)
          </div>
        </div>
      </div>
    </footer>
  );
};
