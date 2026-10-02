/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { WorkSection } from './components/sections/WorkSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { GrowthCalculatorSection } from './components/sections/GrowthCalculatorSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/common/Footer';

// Modals
import { ProjectBriefModal } from './components/modals/ProjectBriefModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ServiceDetailModal } from './components/modals/ServiceDetailModal';
import { InsightModal } from './components/modals/InsightModal';

import { ServiceItem, CaseStudy, InsightArticle } from './types/agency';

export default function App() {
  const [briefModalOpen, setBriefModalOpen] = useState<boolean>(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const handleOpenBrief = (service?: string) => {
    setPreselectedService(service);
    setBriefModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#F3F4F6] selection:bg-blue-600 selection:text-white flex flex-col font-sans">
      
      {/* Sticky Responsive Header */}
      <Navbar onOpenBriefModal={handleOpenBrief} />

      {/* Main Sections Flow */}
      <main className="flex-1">
        <HeroSection 
          onStartProject={() => handleOpenBrief()} 
          onExploreWork={handleExploreWork} 
        />

        <AboutSection />

        <ServicesSection 
          onSelectService={(service) => setSelectedService(service)}
          onStartProject={(serviceName) => handleOpenBrief(serviceName)}
        />

        <WorkSection 
          onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          onStartProject={() => handleOpenBrief()}
        />

        <IndustriesSection 
          onStartProject={(industry) => handleOpenBrief(industry ? `Industry: ${industry}` : undefined)}
        />

        <ProcessSection 
          onStartProject={() => handleOpenBrief()}
        />

        <GrowthCalculatorSection 
          onStartProjectWithModel={(summary) => handleOpenBrief(summary)}
        />

        <InsightsSection 
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        <ContactSection />
      </main>

      {/* Corporate Minimal Footer */}
      <Footer onStartProject={() => handleOpenBrief()} />

      {/* Interactive Modals */}
      <ProjectBriefModal
        isOpen={briefModalOpen}
        onClose={() => setBriefModalOpen(false)}
        preselectedService={preselectedService}
      />

      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartProject={(service) => handleOpenBrief(service)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onStartProject={(serviceName) => handleOpenBrief(serviceName)}
      />

      <InsightModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onStartProject={() => handleOpenBrief()}
      />

    </div>
  );
}
