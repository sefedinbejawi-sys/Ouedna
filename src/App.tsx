/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DesertHero } from './components/DesertHero';
import { EcosystemGrid } from './components/EcosystemGrid';
import { AppPromo } from './components/AppPromo';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PartnerModal } from './components/PartnerModal';
import { SERVICES_DATA } from './data/mockData';
import { ServiceCard } from './types';

export default function App() {
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_DATA.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    } else {
      const element = document.getElementById('ecosystem');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#120B06] text-[#FDF8F2] flex flex-col font-['Alexandria',sans-serif] selection:bg-[#E5A93C] selection:text-[#1A1008] relative">
      {/* Top Sticky Navigation */}
      <Navbar 
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with Slow-Moving Sunset & Dunes Parallax Artwork */}
        <DesertHero 
          onSelectService={handleSelectServiceById}
        />

        {/* 2. Ecosystem Grid (سوق الوادي، سياحة وادنا) */}
        <EcosystemGrid 
          onSelectServiceModal={(service) => setSelectedService(service)}
        />

        {/* 3. Mobile App Promo with Gradient Sunset Icons & Phone Mockup */}
        <AppPromo />

        {/* 4. Official Sponsors & Local Partners */}
        <Sponsors 
          onPartnerClick={() => setIsPartnerOpen(true)}
        />
      </main>

      {/* 5. Clean & Heritage-Rich Footer */}
      <Footer 
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <PartnerModal 
        isOpen={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </div>
  );
}
