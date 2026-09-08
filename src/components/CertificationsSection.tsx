import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  return (
    <section
      id="certifications"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            06 — CERTIFICATIONS
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Verified Credentials
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mt-1 max-w-2xl">
            Formal professional coursework completion and foundational skill
            endorsements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              id={`cert-card-${cert.id}`}
              className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-lg bg-[#1b1b21] border border-[#494552]/60 flex items-center justify-center text-[#cebdff] font-mono font-bold text-lg group-hover:scale-105 transition-transform">
                  {cert.abbr}
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg sm:text-xl text-[#e3e1ea] font-semibold group-hover:text-[#cebdff] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="font-mono text-xs text-[#cac4d4] mt-1">
                    Issuer:{' '}
                    <span className="text-[#c6c5cf] font-medium">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#1f1f25] border border-[#494552]/40 text-[#45dfa4] font-mono text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
