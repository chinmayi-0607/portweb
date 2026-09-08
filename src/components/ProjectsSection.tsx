import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ArrowRight, Cpu, BarChart3, Smartphone } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            04 — PROJECTS
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Things I’ve built and explored.
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mt-1 max-w-2xl">
            Real implementations spanning physical computing, data pipelines, and
            product architecture.
          </p>
        </div>

        {/* 3 Detailed Project Cards */}
        <div className="space-y-8">
          {/* PROJECT 01: Smart Door Automation System */}
          <div
            id="project-card-1"
            className="rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-stretch group shadow-sm hover:shadow-xl"
          >
            <div className="lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs mb-2">
                  <span className="text-[#c6c5cf]">[PROJECT 01]</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#cebdff] font-medium">
                    WORKING IoT PROTOTYPE
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                  Smart Door Automation System
                </h3>

                <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mb-4 leading-relaxed">
                  An IoT-based automated door system designed to detect a person
                  and control door access using sensors, wireless communication
                  and embedded hardware.
                </p>

                <div className="mb-5 p-3.5 rounded-lg bg-[#1b1b21] border border-[#494552]/30">
                  <h4 className="font-mono text-xs text-[#c6c5cf] font-semibold mb-1">
                    My Contribution:
                  </h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-[#e3e1ea] leading-relaxed">
                    Contributed to the core concept, embedded C/Arduino coding,
                    circuit wiring, ultrasonic &amp; PIR detection logic,
                    wireless command handling and complete physical
                    implementation.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Arduino
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    PIR Sensor
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Servo Motor
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    LCD Display
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    RTC
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#a78bfa]/40 text-[#cebdff] font-semibold">
                    Bluetooth / Wi-Fi
                  </span>
                </div>
              </div>

              <div>
                <button
                  id="view-project-1-btn"
                  onClick={() => onSelectProject(PROJECTS[0])}
                  className="px-5 py-2.5 rounded-lg border border-[#a78bfa] text-[#cebdff] hover:bg-[#a78bfa] hover:text-[#381385] font-mono text-xs font-semibold tracking-wider transition-all inline-flex items-center gap-2 active:scale-95 shadow-sm"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Abstract IoT Visual */}
            <div className="lg:w-5/12 rounded-lg bg-[#1b1b21] border border-[#494552]/30 p-4 flex flex-col justify-center items-center relative overflow-hidden min-h-[240px]">
              <svg
                className="w-full max-h-56"
                fill="none"
                viewBox="0 0 320 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Circuit Trace Matrix */}
                <rect
                  fill="#111317"
                  height="160"
                  rx="4"
                  stroke="#282a2d"
                  strokeWidth="1.5"
                  width="280"
                  x="20"
                  y="20"
                />
                <rect
                  fill="#1a1c1f"
                  height="90"
                  rx="3"
                  stroke="#00e599"
                  strokeWidth="1"
                  width="80"
                  x="50"
                  y="50"
                />
                <text
                  fill="#00e599"
                  fontFamily="JetBrains Mono"
                  fontSize="10"
                  fontWeight="bold"
                  x="60"
                  y="90"
                >
                  ARDUINO
                </text>
                <text
                  fill="#849589"
                  fontFamily="JetBrains Mono"
                  fontSize="8"
                  x="60"
                  y="105"
                >
                  ATmega328P
                </text>

                {/* Circuit Paths */}
                <path
                  d="M130 70 H180 V40 H240"
                  stroke="#4dffb2"
                  strokeDasharray="2 2"
                  strokeWidth="1.2"
                />
                <path d="M130 95 H190 V140 H240" stroke="#00e599" strokeWidth="1.2" />
                <path d="M130 120 H160 V160 H240" stroke="#3b4a41" strokeWidth="1" />

                {/* Sensor Nodes */}
                <circle
                  cx="240"
                  cy="40"
                  fill="#1e2023"
                  r="12"
                  stroke="#00e599"
                  strokeWidth="1"
                />
                <text
                  fill="#6dffba"
                  fontFamily="JetBrains Mono"
                  fontSize="7"
                  x="233"
                  y="43"
                >
                  PIR
                </text>
                <circle
                  cx="240"
                  cy="140"
                  fill="#1e2023"
                  r="14"
                  stroke="#00e599"
                  strokeWidth="1"
                />
                <text
                  fill="#6dffba"
                  fontFamily="JetBrains Mono"
                  fontSize="7"
                  x="227"
                  y="143"
                >
                  SERVO
                </text>
                <circle
                  cx="240"
                  cy="160"
                  fill="#1e2023"
                  r="8"
                  stroke="#849589"
                  strokeWidth="1"
                />
                <text
                  fill="#849589"
                  fontFamily="JetBrains Mono"
                  fontSize="6"
                  x="233"
                  y="163"
                >
                  BT
                </text>
              </svg>
              <div className="text-[11px] font-mono text-[#c6c5cf] mt-2 text-center">
                [LIVE HARDWARE SCHEMATIC INTERCONNECT]
              </div>
            </div>
          </div>

          {/* PROJECT 02: Sales Data Analysis Using Python */}
          <div
            id="project-card-2"
            className="rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-stretch group shadow-sm hover:shadow-xl"
          >
            <div className="lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs mb-2">
                  <span className="text-[#c6c5cf]">[PROJECT 02]</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#1f1f25] border border-[#494552]/40 text-[#cebdff] font-medium">
                    DATA ANALYSIS PROJECT
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                  Sales Data Analysis Using Python
                </h3>

                <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mb-4 leading-relaxed">
                  Analyzed sales data to identify trends, understand product
                  performance and generate meaningful visual insights using
                  Python-based data analysis tools.
                </p>

                <div className="mb-5 p-3.5 rounded-lg bg-[#1b1b21] border border-[#494552]/30">
                  <h4 className="font-mono text-xs text-[#c6c5cf] font-semibold mb-1">
                    Key Outcomes:
                  </h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-[#e3e1ea] leading-relaxed">
                    Executed structured dataset cleaning, categorical
                    aggregations, seasonal sales trend isolation, and graphical
                    distribution graphs.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#a78bfa]/40 text-[#cebdff] font-semibold">
                    Python
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    NumPy
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Pandas
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Matplotlib
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Scikit-learn
                  </span>
                </div>
              </div>

              <div>
                <button
                  id="view-project-2-btn"
                  onClick={() => onSelectProject(PROJECTS[1])}
                  className="px-5 py-2.5 rounded-lg border border-[#a78bfa] text-[#cebdff] hover:bg-[#a78bfa] hover:text-[#381385] font-mono text-xs font-semibold tracking-wider transition-all inline-flex items-center gap-2 active:scale-95 shadow-sm"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Abstract Analytics Visual */}
            <div className="lg:w-5/12 rounded-lg bg-[#1b1b21] border border-[#494552]/30 p-4 flex flex-col justify-center items-center relative overflow-hidden min-h-[240px]">
              <svg
                className="w-full max-h-56"
                fill="none"
                viewBox="0 0 320 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Axes */}
                <line
                  stroke="#3b4a41"
                  strokeWidth="1.5"
                  x1="40"
                  x2="290"
                  y1="170"
                  y2="170"
                />
                <line
                  stroke="#3b4a41"
                  strokeWidth="1.5"
                  x1="40"
                  x2="40"
                  y1="30"
                  y2="170"
                />

                {/* Grid hairlines */}
                <line
                  stroke="#1e2023"
                  strokeDasharray="2 2"
                  x1="40"
                  x2="290"
                  y1="130"
                  y2="130"
                />
                <line
                  stroke="#1e2023"
                  strokeDasharray="2 2"
                  x1="40"
                  x2="290"
                  y1="90"
                  y2="90"
                />
                <line
                  stroke="#1e2023"
                  strokeDasharray="2 2"
                  x1="40"
                  x2="290"
                  y1="50"
                  y2="50"
                />

                {/* Bars */}
                <rect fill="#282a2d" height="60" rx="2" width="22" x="65" y="110" />
                <rect fill="#3b4a41" height="90" rx="2" width="22" x="110" y="80" />
                <rect
                  fill="#4dffb2"
                  fillOpacity="0.8"
                  height="110"
                  rx="2"
                  width="22"
                  x="155"
                  y="60"
                />
                <rect fill="#282a2d" height="75" rx="2" width="22" x="200" y="95" />
                <rect fill="#00e599" height="125" rx="2" width="22" x="245" y="45" />

                {/* Trend Line */}
                <path
                  d="M76 100 L121 70 L166 50 L211 85 L256 35"
                  stroke="#ffe0bc"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <circle cx="256" cy="35" fill="#fcba5b" r="4" />
                <text
                  fill="#ffe0bc"
                  fontFamily="JetBrains Mono"
                  fontSize="8"
                  x="210"
                  y="30"
                >
                  +38.4% PEAK
                </text>
              </svg>
              <div className="text-[11px] font-mono text-[#c6c5cf] mt-2 text-center">
                [PANDAS / MATPLOTLIB DISTRIBUTION RENDER]
              </div>
            </div>
          </div>

          {/* PROJECT 03: Hushhh (Product Concept) */}
          <div
            id="project-card-3"
            className="rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all p-6 sm:p-8 flex flex-col lg:flex-row gap-8 items-stretch group shadow-sm hover:shadow-xl"
          >
            <div className="lg:w-7/12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-mono text-xs mb-2">
                  <span className="text-[#c6c5cf]">[PROJECT 03]</span>
                  <span className="px-2.5 py-0.5 rounded bg-[#34343b] border border-[#494552] text-[#68fcbf] font-semibold">
                    BUSINESS &amp; PRODUCT CONCEPT
                  </span>
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#e3e1ea] font-semibold mb-2 group-hover:text-[#cebdff] transition-colors">
                  Hushhh
                </h3>

                <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mb-4 leading-relaxed">
                  A productivity concept designed to help students and young
                  professionals reduce digital distractions through focus
                  sessions, reminders, app and website blocking, productivity
                  tracking, ambient sounds and gamification.
                </p>

                <div className="mb-5 p-3.5 rounded-lg bg-[#1b1b21] border border-[#494552]/30">
                  <h4 className="font-mono text-xs text-[#c6c5cf] font-semibold mb-1">
                    Architecture Features:
                  </h4>
                  <p className="font-['Inter'] text-xs sm:text-sm text-[#e3e1ea] leading-relaxed">
                    Focus sessions, App &amp; website blocking logic, Continuous
                    productivity telemetry, Pomodoro timing loops, Ambient
                    acoustic generator, and Motivational streaks.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Product Design
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    UX Architecture
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Focus Logic
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono bg-[#1f1f25] border border-[#494552]/40 text-[#c6c5cf]">
                    Gamification
                  </span>
                </div>
              </div>

              <div>
                <button
                  id="view-project-3-btn"
                  onClick={() => onSelectProject(PROJECTS[2])}
                  className="px-5 py-2.5 rounded-lg border border-[#a78bfa] text-[#cebdff] hover:bg-[#a78bfa] hover:text-[#381385] font-mono text-xs font-semibold tracking-wider transition-all inline-flex items-center gap-2 active:scale-95 shadow-sm"
                >
                  <span>Explore Concept Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Wireframe Concept Visual */}
            <div className="lg:w-5/12 rounded-lg bg-[#1b1b21] border border-[#494552]/30 p-4 flex flex-col justify-center items-center relative overflow-hidden min-h-[240px]">
              <div className="w-52 h-64 border border-[#494552] rounded-xl bg-[#121319] p-3.5 flex flex-col justify-between shadow-2xl relative">
                <div className="flex items-center justify-between border-b border-[#494552]/30 pb-2">
                  <span className="font-mono text-[10px] text-[#cebdff] font-semibold">
                    HUSHHH // FOCUS
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#00e599] animate-pulse"></span>
                </div>

                <div className="text-center my-auto">
                  <div className="font-mono text-3xl sm:text-4xl text-[#cebdff] font-bold tracking-tight">
                    25:00
                  </div>
                  <div className="text-[10px] font-mono text-[#cac4d4] uppercase mt-1">
                    [DO NOT DISTURB ACTIVE]
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="h-1.5 w-full bg-[#1f1f25] rounded-full overflow-hidden">
                    <div className="h-full bg-[#45dfa4] w-3/4 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-[#cac4d4]">
                    <span>BLOCKING: SOCIAL</span>
                    <span>STREAK: 4D</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#c6c5cf] mt-3 text-center">
                [CONCEPT UI/UX SYSTEM BLUEPRINT]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
