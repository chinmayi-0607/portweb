import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
              03 — SKILLS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
              Tools I use to turn ideas into projects.
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mt-1.5 max-w-2xl">
              Categorized technical capabilities and libraries actively applied in
              coursework and projects.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#cac4d4] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g. Python, IoT)..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-[#1b1b21] border border-[#494552]/50 rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono text-[#e3e1ea] placeholder-[#cac4d4]/60 focus:outline-none focus:border-[#a78bfa]"
            />
          </div>
        </div>

        {/* 6 Organized Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => {
            const matchesCategory =
              !filterQuery ||
              cat.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
              cat.skills.some((s) =>
                s.name.toLowerCase().includes(filterQuery.toLowerCase())
              );

            if (!matchesCategory) return null;

            return (
              <div
                key={cat.id}
                id={`skill-category-${cat.id}`}
                className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[#cac4d4] mb-3">
                    <span>{cat.tag}</span>
                    <span
                      className={`text-xs font-semibold ${
                        cat.categoryType.includes('CORE') ||
                        cat.categoryType === 'EMBEDDED'
                          ? 'text-[#cebdff]'
                          : 'text-[#c6c5cf]'
                      }`}
                    >
                      {cat.categoryType}
                    </span>
                  </div>

                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl text-[#e3e1ea] font-semibold mb-1 group-hover:text-[#cebdff] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-['Inter'] text-xs text-[#cac4d4] mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => {
                    const isMatched =
                      filterQuery &&
                      skill.name.toLowerCase().includes(filterQuery.toLowerCase());

                    return (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                          isMatched
                            ? 'bg-[#a78bfa] text-[#381385] font-bold ring-2 ring-[#a78bfa]'
                            : skill.isPrimary
                            ? 'bg-[#1b1b21] border border-[#a78bfa]/40 text-[#cebdff] font-medium'
                            : 'bg-[#1b1b21] border border-[#494552]/50 text-[#c6c5cf]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
