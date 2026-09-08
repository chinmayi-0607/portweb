import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, CERTIFICATIONS } from '../data/portfolioData';
import { X, Printer, Download, Check, Copy, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
CHINMAYI K
${PERSONAL_INFO.shortTitle}
Email: ${PERSONAL_INFO.email}
GitHub: ${PERSONAL_INFO.githubUrl}
LinkedIn: ${PERSONAL_INFO.linkedinUrl}

EDUCATION:
• REVA University - Bachelor of Technology in Artificial Intelligence & Data Science
  Current Semester: 3rd Semester | Cumulative GPA: 9.2 / 10.0
• JGRVK - Secondary Education

TECHNICAL SKILLS:
• Programming: Python, C, Basic DSA, OOP Concepts
• Data & AI: NumPy, Pandas, Matplotlib, Scikit-learn, Exploratory Data Analysis
• Web & Database: HTML, CSS, JavaScript, MySQL, Basic SQL Queries
• IoT & Hardware: Arduino, PIR Sensor, Ultrasonic Sensor, Servo Motor, HC-05 Bluetooth
• Tools: Git, GitHub, VS Code, Arduino IDE, MySQL Workbench

FEATURED PROJECTS:
1. Smart Door Automation System (IoT Hardware Prototype)
   - Autonomous proximity-aware door mechanism using Arduino ATmega328P, ultrasonic & PIR sensors, and servo motors.
   - Built custom detection algorithms and Bluetooth command overrides.

2. Sales Data Analysis Using Python (Data Science)
   - Comprehensive exploratory data analysis across retail datasets using NumPy, Pandas and Matplotlib.
   - Identified seasonal sales surges (+38.4% peak) and volume distribution anomalies.

3. Hushhh (Product Architecture Concept)
   - Productivity workspace concept combining application blocking, Pomodoro cycles, and ambient audio loops.

CERTIFICATIONS:
• IBM Python Course Certificate - IBM Verified
• Wadhwani Foundation Certification - Verified

ACTIVITIES & LEADERSHIP:
• Member, OS Code Club - Organized 2 campus technical events
• Volunteer, Hackathons & Technical Seminars - Participant onboarding & session operations
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#121319]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-dialog"
        className="bg-[#0d0e14] border border-[#494552] rounded-xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[92vh] overflow-y-auto custom-scroll shadow-2xl animate-in zoom-in-95 duration-200 text-[#e3e1ea]"
      >
        {/* Actions bar */}
        <div className="flex items-center justify-between border-b border-[#494552]/40 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#cebdff]" />
            <span className="font-mono text-xs text-[#cebdff] font-bold tracking-wider">
              CURRICULUM VITAE // CHINMAYI K
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded bg-[#1f1f25] border border-[#494552] text-xs font-mono text-[#cac4d4] hover:text-[#cebdff] hover:border-[#cebdff] flex items-center gap-1.5 transition-colors"
              title="Copy formatted text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#45dfa4]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded bg-[#a78bfa] text-[#381385] text-xs font-mono font-bold hover:brightness-110 flex items-center gap-1.5 transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="text-[#cac4d4] hover:text-[#cebdff] p-1.5 rounded-lg hover:bg-[#1f1f25] transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6 font-['Inter'] text-sm">
          {/* Header */}
          <div className="text-center sm:text-left border-b border-[#494552]/30 pb-5">
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl font-bold text-[#e3e1ea]">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-[#cebdff] mt-1 font-medium">
              {PERSONAL_INFO.shortTitle}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-[#cac4d4] mt-2 justify-center sm:justify-start">
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <span>github.com/{PERSONAL_INFO.githubHandle}</span>
              <span>•</span>
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#cebdff] border-b border-[#494552]/30 pb-1 mb-3">
              EDUCATION
            </h3>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h4 className="font-semibold text-[#e3e1ea]">
                    REVA University
                  </h4>
                  <p className="text-xs text-[#cac4d4]">
                    Bachelor of Technology in Artificial Intelligence &amp; Data Science
                  </p>
                </div>
                <div className="text-xs font-mono text-[#45dfa4] font-semibold mt-1 sm:mt-0">
                  CGPA: 9.2 / 10.0 (3rd Semester)
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <div>
                  <h4 className="font-semibold text-[#e3e1ea]">JGRVK</h4>
                  <p className="text-xs text-[#cac4d4]">Secondary School Foundation</p>
                </div>
                <div className="text-xs font-mono text-[#c6c5cf] mt-1 sm:mt-0">
                  Completed
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#cebdff] border-b border-[#494552]/30 pb-1 mb-3">
              TECHNICAL PROFICIENCIES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div>
                <span className="font-mono text-[#cac4d4]">Programming: </span>
                <span className="text-[#e3e1ea]">Python, C, Basic DSA, OOP</span>
              </div>
              <div>
                <span className="font-mono text-[#cac4d4]">Data &amp; AI: </span>
                <span className="text-[#e3e1ea]">NumPy, Pandas, Matplotlib, Scikit-learn</span>
              </div>
              <div>
                <span className="font-mono text-[#cac4d4]">Databases &amp; Web: </span>
                <span className="text-[#e3e1ea]">MySQL, SQL, HTML, CSS, JavaScript</span>
              </div>
              <div>
                <span className="font-mono text-[#cac4d4]">IoT &amp; Hardware: </span>
                <span className="text-[#e3e1ea]">Arduino, PIR, Ultrasonic, Servos, Bluetooth</span>
              </div>
              <div className="sm:col-span-2">
                <span className="font-mono text-[#cac4d4]">Tools &amp; Workflow: </span>
                <span className="text-[#e3e1ea]">Git, GitHub, VS Code, Arduino IDE, MySQL Workbench</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#cebdff] border-b border-[#494552]/30 pb-1 mb-3">
              KEY PROJECTS
            </h3>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                    <span className="font-semibold text-sm text-[#e3e1ea]">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#cebdff]">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#cac4d4] leading-relaxed">
                    {proj.description}
                  </p>
                  <p className="text-xs text-[#c6c5cf]">
                    <strong className="text-[#e3e1ea]">Role:</strong> {proj.contribution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#cebdff] border-b border-[#494552]/30 pb-1 mb-3">
              CERTIFICATIONS &amp; ENDORSEMENTS
            </h3>
            <ul className="space-y-1.5 text-xs text-[#cac4d4]">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.id} className="flex items-center gap-2">
                  <span className="text-[#45dfa4]">✔</span>
                  <span className="text-[#e3e1ea] font-medium">{cert.title}</span>
                  <span className="font-mono text-[#cac4d4]">({cert.issuer})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
