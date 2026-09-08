import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, CheckCircle, Cpu, ArrowRight, Layers, Award } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#121319]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-dialog"
        className="bg-[#0d0e14] border border-[#494552] rounded-xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto custom-scroll shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="close-project-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 text-[#cac4d4] hover:text-[#cebdff] p-1.5 rounded-lg hover:bg-[#1f1f25] transition-colors focus:outline-none"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex items-center gap-2 mb-2 font-mono text-xs">
            <span className="text-[#cebdff] font-semibold">{project.tag}</span>
            <span className="text-[#494552]">•</span>
            <span className="text-[#cac4d4]">{project.status}</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl text-[#e3e1ea] font-bold">
            {project.title}
          </h2>
        </div>

        {/* Metrics Pill if available */}
        {project.metrics && (
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1f1f25] border border-[#a78bfa]/40 text-[#cebdff] font-mono text-xs">
            <Award className="w-3.5 h-3.5 text-[#45dfa4]" />
            <span>{project.metrics}</span>
          </div>
        )}

        {/* Content sections */}
        <div className="mt-6 space-y-5 text-sm font-['Inter'] text-[#cac4d4]">
          {/* Problem Statement */}
          <div className="p-4 rounded-lg bg-[#1b1b21] border border-[#494552]/40">
            <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-1.5 flex items-center gap-1.5">
              <span>[PROBLEM STATEMENT]</span>
            </h4>
            <p className="leading-relaxed">{project.problem}</p>
          </div>

          {/* Engineered Solution */}
          <div className="p-4 rounded-lg bg-[#1b1b21] border border-[#494552]/40">
            <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-1.5 flex items-center gap-1.5">
              <span>[ENGINEERED SOLUTION]</span>
            </h4>
            <p className="leading-relaxed">{project.solution}</p>
          </div>

          {/* System Architecture Specifications */}
          {project.systemArchitecture && (
            <div className="p-4 rounded-lg bg-[#1b1b21] border border-[#494552]/40">
              <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>[SYSTEM ARCHITECTURE &amp; PIPELINE]</span>
              </h4>
              <ul className="space-y-1.5 font-mono text-xs text-[#c6c5cf]">
                {project.systemArchitecture.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#45dfa4] mt-0.5">›</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-2">
              [TECHNOLOGY STACK]
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded bg-[#1f1f25] border border-[#494552]/50 text-[#c6c5cf] text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-1">
              [MY CONTRIBUTION]
            </h4>
            <p className="leading-relaxed bg-[#121319] p-3 rounded border border-[#494552]/30 font-['Inter'] text-xs sm:text-sm">
              {project.contribution}
            </p>
          </div>

          {/* Key Learning */}
          <div>
            <h4 className="font-mono font-bold text-xs uppercase text-[#cebdff] mb-1">
              [KEY LEARNING]
            </h4>
            <p className="leading-relaxed font-['Inter'] text-xs sm:text-sm text-[#cac4d4]">
              {project.learning}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-[#494552]/40 flex items-center justify-between">
          <span className="font-mono text-xs text-[#c6c5cf]">
            PROJECT // {project.number}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#1f1f25] border border-[#494552] text-[#e3e1ea] hover:text-[#cebdff] hover:border-[#cebdff] font-mono text-xs font-semibold transition-colors"
          >
            Close Specification
          </button>
        </div>
      </div>
    </div>
  );
};
