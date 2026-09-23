/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { DesertHero } from './components/DesertHero';
import { EcosystemGrid } from './components/EcosystemGrid';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { SERVICES_DATA } from './data/mockData';
import { ServiceCard } from './types';

export default function App() {
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
        {/* 1. Hero Section with Sunset & Dunes Parallax Artwork + Integrated Search */}
        <DesertHero 
          onSelectService={handleSelectServiceById}
        />

        {/* 2. Ecosystem Grid (سوق الوادي، سياحة وادنا) */}
        <EcosystemGrid 
          onSelectServiceModal={(service) => setSelectedService(service)}
        />
      </main>

      {/* 3. Clean & Heritage-Rich Footer */}
      <Footer 
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
