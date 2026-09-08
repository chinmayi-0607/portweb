import React, { useState } from 'react';
import { MILESTONES } from '../data/portfolioData';

export const JourneySection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string | null>('07');

  return (
    <section
      id="journey"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            02 — MY JOURNEY
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Chronological Progression
          </h2>
        </div>

        {/* Horizontal scrollable timeline on Desktop, Stacked/Flow on Mobile */}
        <div className="overflow-x-auto custom-scroll pb-6 pt-2">
          <div className="flex flex-col md:flex-row min-w-full md:min-w-[1080px] gap-4 md:gap-0 relative">
            {/* Horizontal track bar for desktop */}
            <div className="hidden md:block absolute top-7 left-8 right-8 h-[2px] bg-[#494552]/40 -z-0"></div>

            {MILESTONES.map((milestone) => {
              const isSelected = selectedStep === milestone.step;
              const isCurrent = milestone.isCurrent;
              const isHighlight = milestone.highlight;

              return (
                <div
                  key={milestone.step}
                  id={`milestone-step-${milestone.step}`}
                  onClick={() => setSelectedStep(milestone.step)}
                  className="relative flex-1 flex flex-col md:pr-4 group cursor-pointer"
                >
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 md:flex-col md:items-start z-10">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-semibold transition-all duration-200 ${
                        isCurrent
                          ? 'bg-[#a78bfa] text-[#381385] ring-4 ring-[#a78bfa]/20 shadow-md'
                          : isHighlight
                          ? 'bg-[#1b1b21] border-2 border-[#a78bfa] text-[#cebdff]'
                          : isSelected
                          ? 'bg-[#1f1f25] border-2 border-[#cebdff] text-[#cebdff]'
                          : 'bg-[#1b1b21] border border-[#948e9d]/40 text-[#c6c5cf] group-hover:border-[#cebdff] group-hover:text-[#cebdff]'
                      }`}
                    >
                      {milestone.step}
                    </div>

                    <div className="font-mono text-xs text-[#cebdff] font-semibold mt-1 md:mt-2 tracking-wider">
                      {milestone.category}
                    </div>
                  </div>

                  {/* Card description */}
                  <div
                    className={`mt-2 p-4 rounded-lg bg-[#1b1b21] border transition-all h-full flex flex-col justify-between ${
                      isSelected
                        ? 'border-[#a78bfa] shadow-lg bg-[#1f1f25]'
                        : isHighlight
                        ? 'border-[#a78bfa]/50'
                        : isCurrent
                        ? 'border-[#a78bfa]/60'
                        : 'border-[#494552]/30 hover:border-[#494552]/70'
                    }`}
                  >
                    <div>
                      <h4
                        className={`font-mono text-sm font-bold ${
                          isHighlight || isCurrent
                            ? 'text-[#cebdff]'
                            : 'text-[#e3e1ea]'
                        }`}
                      >
                        {milestone.title}
                      </h4>
                      <p className="font-['Inter'] text-xs text-[#cac4d4] mt-1.5 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-2 border-t border-[#494552]/20 flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] tracking-wider uppercase ${
                          isHighlight || isCurrent
                            ? 'text-[#45dfa4] font-semibold'
                            : 'text-[#c6c5cf]'
                        }`}
                      >
                        {milestone.badge}
                      </span>
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00e599] animate-ping" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
