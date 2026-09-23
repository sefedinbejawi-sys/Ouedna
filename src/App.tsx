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
import { ServiceCard } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#100804] text-[#FDF8F2] flex flex-col font-['Alexandria',sans-serif] selection:bg-[#E5A93C] selection:text-[#1A1008] relative">
      {/* شريط التنقل العلوي المحسّن */}
      <Navbar onNavigateSection={handleNavigateSection} />

      {/* المحتوى الرئيسي للمنظومة */}
      <main className="flex-1">
        {/* 1. واجهة شفق الصحراء والبحث والتوجيه المباشر */}
        <DesertHero />

        {/* 2. بوابات المنظومة القائمة ورؤية التوسع المستقبلي */}
        <EcosystemGrid onSelectServiceModal={(service) => setSelectedService(service)} />
      </main>

      {/* 3. تذييل الصفحة الموحد */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* النافذة المنبثقة لتفاصيل البوابة */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}
