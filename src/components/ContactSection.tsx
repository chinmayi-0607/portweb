import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Code,
  Terminal,
  Mail,
  ArrowUpRight,
  Send,
  Check,
  Copy,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [showDirectMessage, setShowDirectMessage] = useState(false);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sentStatus, setSentStatus] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      subject || `Message from ${name || 'Portfolio Visitor'}`
    )}&body=${encodeURIComponent(
      `Hi Chinmayi,\n\n${message}\n\nFrom: ${name} (${senderEmail})`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSentStatus(true);
    setTimeout(() => {
      setSentStatus(false);
      setShowDirectMessage(false);
      setMessage('');
      setSubject('');
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-[#494552]/20"
    >
      <div className="flex flex-col space-y-8">
        <div>
          <span className="font-mono text-xs text-[#cebdff] uppercase tracking-wider block">
            08 — CONTACT
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#e3e1ea] font-semibold mt-2 tracking-tight">
            Let’s connect.
          </h2>
          <p className="font-['Inter'] text-sm sm:text-base text-[#cac4d4] mt-1 max-w-2xl">
            Open to discussing software, AI/ML, practical technology projects,
            academic collaborations, internships and tech opportunities.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* GitHub Card */}
          <div
            id="contact-card-github"
            className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#1f1f25] border border-[#494552]/50 text-[#cebdff]">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#e3e1ea] font-semibold">
                    GitHub
                  </h3>
                  <span className="font-mono text-xs text-[#cac4d4]">
                    github.com/{PERSONAL_INFO.githubHandle}
                  </span>
                </div>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#cac4d4] leading-relaxed mb-6">
                Explore repositories, code samples, IoT prototypes &amp; data
                analysis projects.
              </p>
            </div>
            <a
              id="contact-visit-github-link"
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2 rounded-lg bg-[#1b1b21] border border-[#494552]/50 hover:border-[#cebdff] text-xs font-mono text-[#e3e1ea] hover:text-[#cebdff] transition-all"
            >
              <span>Visit GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div
            id="contact-card-linkedin"
            className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-[#1f1f25] border border-[#494552]/50 text-[#cebdff]">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#e3e1ea] font-semibold">
                    LinkedIn
                  </h3>
                  <span className="font-mono text-xs text-[#cac4d4]">
                    {PERSONAL_INFO.linkedinName}
                  </span>
                </div>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#cac4d4] leading-relaxed mb-6">
                Connect professionally, view academic milestones, and stay
                updated on achievements.
              </p>
            </div>
            <a
              id="contact-visit-linkedin-link"
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full px-4 py-2 rounded-lg bg-[#1b1b21] border border-[#494552]/50 hover:border-[#cebdff] text-xs font-mono text-[#e3e1ea] hover:text-[#cebdff] transition-all"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Email Card */}
          <div
            id="contact-card-email"
            className="p-6 rounded-xl bg-[#0d0e14] border border-[#494552]/40 hover:border-[#a78bfa]/50 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-[#1f1f25] border border-[#494552]/50 text-[#cebdff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-[#e3e1ea] font-semibold">
                      Email
                    </h3>
                    <span className="font-mono text-[11px] text-[#cac4d4] truncate block max-w-[170px]">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="text-[#cac4d4] hover:text-[#cebdff] p-1 rounded hover:bg-[#1f1f25] transition-colors"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-[#45dfa4]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              <p className="font-['Inter'] text-xs sm:text-sm text-[#cac4d4] leading-relaxed mb-6">
                Direct inquiries, collaborations, internship possibilities, and
                tech discussions.
              </p>
            </div>
            <a
              id="contact-send-email-link"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-between w-full px-4 py-2 rounded-lg bg-[#1b1b21] border border-[#494552]/50 hover:border-[#cebdff] text-xs font-mono text-[#e3e1ea] hover:text-[#cebdff] transition-all"
            >
              <span>{copiedEmail ? 'Email Copied!' : 'Send Direct Email'}</span>
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Ready to Talk Banner */}
        <div
          id="contact-callout-banner"
          className="p-8 rounded-xl bg-[#1b1b21] border border-[#494552]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md"
        >
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl text-[#e3e1ea] font-semibold">
              Ready to talk projects, data, or technology?
            </h3>
            <p className="font-['Inter'] text-sm text-[#cac4d4]">
              Whether it’s an internship opportunity, project collaboration, or
              just a technical discussion, I’d love to connect.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              id="open-compose-message-btn"
              onClick={() => setShowDirectMessage(!showDirectMessage)}
              className="px-6 py-3 rounded-lg bg-[#a78bfa] text-[#381385] font-mono text-xs sm:text-sm font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all inline-flex items-center gap-2 shadow-sm shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>{showDirectMessage ? 'Hide Message Box' : 'Send Message'}</span>
            </button>
          </div>
        </div>

        {/* Direct Message Form Drawer */}
        {showDirectMessage && (
          <div
            id="direct-message-form-container"
            className="p-6 sm:p-8 rounded-xl bg-[#0d0e14] border border-[#a78bfa]/50 animate-in fade-in duration-200"
          >
            <div className="flex items-center justify-between mb-4 border-b border-[#494552]/30 pb-3">
              <span className="font-mono text-xs text-[#cebdff] font-semibold">
                [COMPOSE MESSAGE TO CHINMAYI]
              </span>
              <span className="text-xs font-mono text-[#cac4d4]">
                chinmayi.kiran2007@gmail.com
              </span>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-[#cac4d4] mb-1">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1b1b21] border border-[#494552] rounded-lg px-3.5 py-2 text-sm text-[#e3e1ea] font-['Inter'] focus:outline-none focus:border-[#a78bfa]"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-[#cac4d4] mb-1">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full bg-[#1b1b21] border border-[#494552] rounded-lg px-3.5 py-2 text-sm text-[#e3e1ea] font-['Inter'] focus:outline-none focus:border-[#a78bfa]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#cac4d4] mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  placeholder="Internship opportunity / Project inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full bg-[#1b1b21] border border-[#494552] rounded-lg px-3.5 py-2 text-sm text-[#e3e1ea] font-['Inter'] focus:outline-none focus:border-[#a78bfa]"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#cac4d4] mb-1">
                  MESSAGE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Chinmayi, I saw your Smart Door Automation and Python data analysis projects..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1b1b21] border border-[#494552] rounded-lg px-3.5 py-2 text-sm text-[#e3e1ea] font-['Inter'] focus:outline-none focus:border-[#a78bfa]"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="font-mono text-xs text-[#c6c5cf]">
                  Transfers directly to mailto protocol
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-lg bg-[#a78bfa] text-[#381385] font-mono text-xs font-bold hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sentStatus ? 'Opening Mail Client...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};
