import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConnectModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const nodes = [
    { id: 'vector', label: 'INPUT // VECTOR', x: 200, y: 60, val: 'Dim: [1x512]' },
    { id: 'synapse', label: 'SYNAPSE [0x7F]', x: 270, y: 240, val: 'Activation: ReLU' },
    { id: 'weight', label: 'ML:WEIGHT', x: 130, y: 230, val: 'Opt: AdamW' },
    { id: 'core', label: 'CORE // TENSOR', x: 200, y: 200, val: 'State: Synced' },
  ];

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-b border-[#494552]/20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col space-y-5">
          {/* Subtitle / Header badge */}
          <div className="inline-flex items-center gap-2 text-[#cebdff] font-mono text-xs tracking-wider">
            <span className="w-2 h-2 bg-[#00e599] rounded-full inline-block animate-pulse"></span>
            <span>AI &amp; DATA SCIENCE UNDERGRADUATE // REVA UNIVERSITY</span>
          </div>

          {/* Main Title */}
          <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#e3e1ea] tracking-tight leading-[1.1]">
            Hi, I’m <span className="text-[#cebdff]">Chinmayi K.</span>
          </h1>

          {/* Headline */}
          <p className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl text-[#c6c5cf] font-medium leading-snug">
            {PERSONAL_INFO.quote}
          </p>

          {/* Lead Bio */}
          <p className="font-['Inter'] text-base sm:text-lg text-[#cac4d4] max-w-xl leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#a78bfa] text-[#381385] font-mono text-xs sm:text-sm font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-md inline-flex items-center gap-2"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              id="hero-lets-connect-btn"
              href="#contact"
              className="px-6 py-3 rounded-lg border border-[#948e9d]/60 text-[#e3e1ea] font-mono text-xs sm:text-sm font-medium hover:border-[#cebdff] hover:text-[#cebdff] hover:bg-[#1f1f25]/50 transition-all active:scale-95 inline-flex items-center gap-2"
            >
              <span>Let's Connect</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-3 flex flex-wrap items-center gap-6 font-mono text-xs sm:text-sm text-[#c6c5cf]">
            <a
              id="hero-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#cebdff] transition-colors"
            >
              <Terminal className="w-4 h-4 text-[#cebdff]" />
              <span>github.com/chinmayi-0607</span>
            </a>

            <a
              id="hero-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#cebdff] transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-[#cebdff]" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        {/* Right Column: Abstract Geometric Matrix Visual */}
        <div className="lg:col-span-5 relative mt-6 lg:mt-0">
          <div
            id="hero-matrix-visual-container"
            className="relative w-full aspect-square max-w-md mx-auto p-4 rounded-xl bg-[#0d0e14] border border-[#494552]/40 flex items-center justify-center overflow-hidden shadow-2xl group"
          >
            {/* Background Grid Trace */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b21_1px,transparent_1px),linear-gradient(to_bottom,#1b1b21_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

            {/* Glowing radial backdrop */}
            <div className="absolute inset-0 bg-radial from-[#a78bfa]/5 via-transparent to-transparent pointer-events-none"></div>

            {/* Abstract SVG Technical Graph */}
            <svg
              className="relative z-10 w-full h-full max-h-80"
              fill="none"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Technical Circles */}
              <circle
                cx="200"
                cy="200"
                r="140"
                stroke="#3b4a41"
                strokeDasharray="4 4"
                strokeWidth="1"
                className="animate-spin-slow origin-center opacity-60"
              />
              <circle
                cx="200"
                cy="200"
                r="90"
                stroke="#3b4a41"
                strokeWidth="1"
                className="opacity-70"
              />
              <circle
                cx="200"
                cy="200"
                r="40"
                stroke="#00e599"
                strokeOpacity="0.8"
                strokeWidth="1.5"
              />

              {/* Radial Lines */}
              <line stroke="#1e2430" strokeWidth="1.5" x1="200" x2="200" y1="60" y2="340" />
              <line stroke="#1e2430" strokeWidth="1.5" x1="60" x2="340" y1="200" y2="200" />
              <line stroke="#1e2430" strokeWidth="1" x1="100" x2="300" y1="100" y2="300" />
              <line stroke="#1e2430" strokeWidth="1" x1="300" x2="100" y1="100" y2="300" />

              {/* Outer Perimeter Nodes */}
              <circle cx="200" cy="60" fill="#00e599" r="4" />
              <circle cx="340" cy="200" fill="#00e599" r="4" />
              <circle cx="200" cy="340" fill="#00e599" r="4" />
              <circle cx="60" cy="200" fill="#00e599" r="4" />

              {/* Neural Nodes & Data Clusters */}
              <circle
                cx="200"
                cy="110"
                fill="#4dffb2"
                r="5"
                className="cursor-pointer hover:r-7 transition-all"
                onMouseEnter={() => setActiveNode('vector')}
                onMouseLeave={() => setActiveNode(null)}
              />
              <circle
                cx="270"
                cy="240"
                fill="#00e599"
                r="6"
                className="cursor-pointer hover:r-8 transition-all"
                onMouseEnter={() => setActiveNode('synapse')}
                onMouseLeave={() => setActiveNode(null)}
              />
              <circle
                cx="130"
                cy="230"
                fill="#6dffba"
                r="5"
                className="cursor-pointer hover:r-7 transition-all"
                onMouseEnter={() => setActiveNode('weight')}
                onMouseLeave={() => setActiveNode(null)}
              />
              <circle
                cx="200"
                cy="200"
                fill="#cebdff"
                r="9"
                className="cursor-pointer hover:r-11 transition-all"
                onMouseEnter={() => setActiveNode('core')}
                onMouseLeave={() => setActiveNode(null)}
              />

              {/* Interconnect traces */}
              <path
                d="M200 110 L270 240 L130 230 Z"
                fill="rgba(206, 189, 255, 0.05)"
                stroke="#00e599"
                strokeOpacity="0.6"
                strokeWidth="1.2"
              />
              <path
                d="M200 60 L200 110 M340 200 L270 240 M60 200 L130 230"
                stroke="#a78bfa"
                strokeDasharray="2 2"
                strokeWidth="1"
              />

              {/* Micro labels in graph */}
              <text
                fill="#849589"
                fontFamily="JetBrains Mono"
                fontSize="9"
                letterSpacing="1"
                x="212"
                y="55"
              >
                INPUT // VECTOR
              </text>
              <text
                fill="#849589"
                fontFamily="JetBrains Mono"
                fontSize="9"
                letterSpacing="1"
                x="275"
                y="255"
              >
                SYNAPSE [0x7F]
              </text>
              <text
                fill="#849589"
                fontFamily="JetBrains Mono"
                fontSize="9"
                letterSpacing="1"
                x="75"
                y="245"
              >
                ML:WEIGHT
              </text>
              <text
                fill="#3c1989"
                fontFamily="JetBrains Mono"
                fontSize="8"
                fontWeight="bold"
                x="184"
                y="203"
              >
                CORE
              </text>
            </svg>

            {/* Interactive tooltip floating if node hovered */}
            {activeNode && (
              <div className="absolute top-4 right-4 z-20 bg-[#1f1f25]/90 border border-[#a78bfa]/50 px-3 py-1.5 rounded text-[11px] font-mono text-[#cebdff] shadow-lg animate-in fade-in duration-150">
                {nodes.find((n) => n.id === activeNode)?.val}
              </div>
            )}

            {/* Bottom badge overlay */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-xs bg-[#1f1f25]/90 px-3 py-1.5 rounded border border-[#494552]/40 backdrop-blur-sm">
              <span className="text-[#cac4d4] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#45dfa4]"></span>
                NODE_ARCH: HYBRID
              </span>
              <span className="text-[#cebdff] font-semibold">[9.2 CGPA // SYNCED]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
