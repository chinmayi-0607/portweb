import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, Terminal, Mail, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'about',
        'journey',
        'skills',
        'projects',
        'activities',
        'certifications',
        'contact',
      ];

      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Journey', href: '#journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Activities', href: '#activities' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#121319]/95 backdrop-blur-md border-b border-[#494552]/40 shadow-lg'
          : 'bg-[#121319]/85 backdrop-blur-sm border-b border-[#494552]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand & Status Pulse */}
        <div className="flex items-center gap-4">
          <a
            href="#home"
            id="nav-brand-logo"
            className="font-mono text-xs sm:text-sm font-semibold text-[#e3e1ea] tracking-widest flex items-center gap-2 hover:text-[#cebdff] transition-colors"
          >
            CHINMAYI K // AI &amp; DS
          </a>

          <div
            id="status-pulse-badge"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1b1b21] border border-[#494552]/40"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e599] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00e599] telemetry-pulse"></span>
            </span>
            <span className="font-mono text-[10px] text-[#45dfa4] uppercase tracking-wider ml-1 font-medium">
              STATUS: BUILDING &amp; EXPLORING
            </span>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav
          id="desktop-nav-links"
          className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`transition-colors duration-150 relative py-1 ${
                  isActive
                    ? 'text-[#cebdff] font-semibold'
                    : 'text-[#cac4d4] hover:text-[#cebdff]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a78bfa] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Action & Socials */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="hidden sm:inline-flex text-[#cac4d4] hover:text-[#cebdff] transition-colors p-2 rounded-lg hover:bg-[#1f1f25]"
          >
            <Code className="w-4 h-4" />
          </a>
          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="hidden sm:inline-flex text-[#cac4d4] hover:text-[#cebdff] transition-colors p-2 rounded-lg hover:bg-[#1f1f25]"
          >
            <Terminal className="w-4 h-4" />
          </a>
          <a
            id="nav-email-link"
            href={`mailto:${PERSONAL_INFO.email}`}
            title="Email Chinmayi"
            className="hidden lg:inline-flex text-[#cac4d4] hover:text-[#cebdff] transition-colors p-2 rounded-lg hover:bg-[#1f1f25]"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="px-3.5 py-1.5 rounded-lg bg-[#a78bfa] text-[#381385] font-mono text-xs font-bold tracking-wider hover:brightness-110 active:scale-95 transition-all duration-150 flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#e3e1ea] p-2 rounded-lg hover:bg-[#1f1f25] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#1b1b21] border-b border-[#494552]/40 px-6 py-4 flex flex-col gap-2 font-mono text-xs animate-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-2 px-2 rounded hover:bg-[#1f1f25] transition-colors ${
                activeSection === link.href.replace('#', '')
                  ? 'text-[#cebdff] font-bold bg-[#1f1f25]'
                  : 'text-[#cac4d4]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 mt-1 border-t border-[#494552]/30 flex items-center justify-between">
            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cac4d4] hover:text-[#cebdff] flex items-center gap-1.5 text-xs"
              >
                <Code className="w-3.5 h-3.5" /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cac4d4] hover:text-[#cebdff] flex items-center gap-1.5 text-xs"
              >
                <Terminal className="w-3.5 h-3.5" /> LinkedIn
              </a>
            </div>
            <span className="text-[10px] text-[#45dfa4] font-mono">REVA Univ // 9.2 CGPA</span>
          </div>
        </div>
      )}
    </header>
  );
};
