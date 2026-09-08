import React from 'react';
import { LEARNING_REPERTOIRE } from '../data/portfolioData';

export const TrajectorySection: React.FC = () => {
  return (
    <section
      id="trajectory"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            07 — VECTOR TRAJECTORY
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Where I'm Heading
          </h2>
          <p className="font-['Inter'] text-base sm:text-lg text-[#c6c5cf] mt-2 max-w-3xl leading-relaxed">
            Strengthening my programming and analytical skills, building more
            practical projects, improving DSA, exploring machine learning in
            greater depth, and gaining experience through hackathons, internships
            and collaborative technical work.
          </p>
        </div>

        {/* Continuous Learning Strip */}
        <div className="p-5 rounded-xl bg-[#0d0e14] border border-[#494552]/40 shadow-sm">
          <div className="font-mono text-xs text-[#cac4d4] uppercase mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse"></span>
            <span className="font-semibold tracking-wider">
              CURRENTLY ACTIVE LEARNING REPERTOIRE:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {LEARNING_REPERTOIRE.map((item) => (
              <span
                key={item.name}
                className={`px-3 py-1.5 rounded text-xs font-mono border transition-all ${
                  item.primary
                    ? 'bg-[#1f1f25] border-[#a78bfa]/50 text-[#cebdff] font-semibold'
                    : 'bg-[#1b1b21] border-[#494552]/50 text-[#e3e1ea]'
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Focus Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* BUILD */}
          <div className="p-6 rounded-xl bg-[#1b1b21] border border-[#494552]/30 hover:border-[#a78bfa]/40 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="font-mono text-2xl sm:text-3xl text-[#cebdff] font-bold mb-3 tracking-tight">
                BUILD
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                Practical Applications
              </h3>
              <p className="font-['Inter'] text-sm text-[#cac4d4] leading-relaxed">
                More practical AI &amp; Data Science projects that take data all
                the way from raw collection to actionable interface.
              </p>
            </div>
          </div>

          {/* LEARN */}
          <div className="p-6 rounded-xl bg-[#1b1b21] border border-[#494552]/30 hover:border-[#a78bfa]/40 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="font-mono text-2xl sm:text-3xl text-[#cebdff] font-bold mb-3 tracking-tight">
                LEARN
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                Technical Depth
              </h3>
              <p className="font-['Inter'] text-sm text-[#cac4d4] leading-relaxed">
                Stronger DSA, ML and development skills with strict analytical
                rigor and performant code design.
              </p>
            </div>
          </div>

          {/* EXPLORE */}
          <div className="p-6 rounded-xl bg-[#1b1b21] border border-[#494552]/30 hover:border-[#a78bfa]/40 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div className="font-mono text-2xl sm:text-3xl text-[#cebdff] font-bold mb-3 tracking-tight">
                EXPLORE
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                Collaborative Impact
              </h3>
              <p className="font-['Inter'] text-sm text-[#cac4d4] leading-relaxed">
                Real-world problems, competitive hackathons, industry internships,
                and multi-disciplinary teamwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
