import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const activeFocusTags = [
    'Data Science',
    'Full-Stack Dev',
    'DSA',
    'AI/ML',
    'Practical Projects',
  ];

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            01 — ABOUT
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Curious about technology. Focused on building.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Text Narratives */}
          <div className="lg:col-span-7 space-y-5">
            <p className="font-['Inter'] text-lg text-[#c6c5cf] leading-relaxed">
              I’m an undergraduate AI &amp; Data Science student interested in
              understanding how software, data and intelligent systems can be
              used to solve practical problems.
            </p>

            <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] leading-relaxed">
              I enjoy working with Python, C, data analysis, web technologies and
              IoT-based systems while continuously improving my problem-solving and
              technical skills. My approach pairs foundational rigor with
              hands-on hardware and software prototyping to build real value.
            </p>

            {/* Focus Card */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#1b1b21] border border-[#494552]/40 flex items-start sm:items-center gap-4 mt-6 hover:border-[#cebdff]/40 transition-colors">
              <div className="p-2.5 rounded-lg bg-[#1f1f25] border border-[#494552]/50 text-[#cebdff] shrink-0">
                <Cpu className="w-6 h-6 text-[#cebdff]" />
              </div>
              <div>
                <h4 className="font-mono text-xs sm:text-sm font-semibold text-[#e3e1ea]">
                  Algorithmic &amp; Empirical Focus
                </h4>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#cac4d4] mt-1 leading-relaxed">
                  Bridging low-level embedded hardware triggers with high-level
                  Python exploratory analytics and machine learning
                  architectures.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Profile Specification Card */}
          <div
            id="system-specification-card"
            className="lg:col-span-5 rounded-xl bg-[#0d0e14] border border-[#494552]/60 p-6 space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-[#494552]/40 pb-3">
              <span className="font-mono text-xs text-[#cebdff] font-semibold tracking-wider">
                [SYSTEM SPECIFICATION]
              </span>
              <span className="font-mono text-xs text-[#c6c5cf]">
                ID: {PERSONAL_INFO.systemId}
              </span>
            </div>

            <dl className="space-y-2.5 font-mono text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">Name</dt>
                <dd className="text-[#e3e1ea] font-medium">{PERSONAL_INFO.name}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">Education</dt>
                <dd className="text-[#e3e1ea] font-medium">Bachelor’s Degree</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">Specialization</dt>
                <dd className="text-[#cebdff] font-semibold">AI &amp; Data Science</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">University</dt>
                <dd className="text-[#e3e1ea] font-medium">{PERSONAL_INFO.university}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">Current Semester</dt>
                <dd className="text-[#e3e1ea] font-medium">{PERSONAL_INFO.semester}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">Cumulative GPA</dt>
                <dd className="text-[#cebdff] font-bold">{PERSONAL_INFO.cgpa}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#494552]/20">
                <dt className="text-[#cac4d4]">School</dt>
                <dd className="text-[#e3e1ea] font-medium">{PERSONAL_INFO.school}</dd>
              </div>
            </dl>

            <div className="pt-2">
              <span className="font-mono text-[11px] uppercase text-[#cac4d4] block mb-2 tracking-wider">
                CURRENT ACTIVE FOCUS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {activeFocusTags.map((tag) => {
                  const isHighlight = tag === 'Practical Projects';
                  return (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded text-xs font-mono border transition-all ${
                        isHighlight
                          ? 'bg-[#1f1f25] border-[#a78bfa]/60 text-[#cebdff] font-semibold'
                          : 'bg-[#1b1b21] border-[#494552]/50 text-[#c6c5cf]'
                      }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
