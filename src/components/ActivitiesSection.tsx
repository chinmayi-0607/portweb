import React from 'react';
import { ACTIVITIES } from '../data/portfolioData';
import { Users, HeartHandshake, BrainCircuit, GraduationCap } from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'groups':
        return <Users className="w-5 h-5 text-[#cebdff]" />;
      case 'volunteer_activism':
        return <HeartHandshake className="w-5 h-5 text-[#cebdff]" />;
      case 'psychology':
        return <BrainCircuit className="w-5 h-5 text-[#cebdff]" />;
      case 'school':
      default:
        return <GraduationCap className="w-5 h-5 text-[#cebdff]" />;
    }
  };

  return (
    <section
      id="activities"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            05 — ACTIVITIES
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Learning beyond the classroom.
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mt-1 max-w-2xl">
            Active campus leadership, peer coordination, and technical collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ACTIVITIES.map((act) => (
            <div
              key={act.id}
              id={`activity-card-${act.id}`}
              className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex items-start gap-4 group shadow-sm hover:shadow-md"
            >
              <div className="p-3 rounded-lg bg-[#1f1f25] border border-[#494552]/50 text-[#cebdff] shrink-0 group-hover:scale-105 transition-transform">
                {getIcon(act.icon)}
              </div>
              <div>
                <div className="font-mono text-xs text-[#cebdff] font-semibold mb-1 tracking-wider">
                  {act.category}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                  {act.title}
                </h3>
                <p className="font-['Inter'] text-sm text-[#cac4d4] leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
