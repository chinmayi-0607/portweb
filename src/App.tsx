import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickMetricsStrip } from './components/QuickMetricsStrip';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProjectModal } from './components/ProjectModal';
import { ActivitiesSection } from './components/ActivitiesSection';
import { CertificationsSection } from './components/CertificationsSection';
import { TrajectorySection } from './components/TrajectorySection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#121319] text-[#e3e1ea] font-['Inter'] selection:bg-[#a78bfa] selection:text-[#381385]">
      {/* Top Fixed Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Area */}
      <main className="pt-16">
        {/* Hero Section */}
        <Hero />

        {/* Quick Metrics Strip */}
        <QuickMetricsStrip />

        {/* 01: About Section */}
        <AboutSection />

        {/* 02: Journey Section */}
        <JourneySection />

        {/* 03: Skills Section */}
        <SkillsSection />

        {/* 04: Projects Section */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* 05: Activities Section */}
        <ActivitiesSection />

        {/* 06: Certifications Section */}
        <CertificationsSection />

        {/* 07: Vector Trajectory Section */}
        <TrajectorySection />

        {/* 08: Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
