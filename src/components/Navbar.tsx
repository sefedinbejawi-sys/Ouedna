/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * شريط التنقل الرئيسي لبوابة myeloued.com
 * مصمم بروح Mobile-First، متناسق وسريع، ويوجه مباشرة للبوابات الرسمية.
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Compass, Store, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#120B06]/95 backdrop-blur-xl border-b border-[#E5A93C]/20 shadow-lg shadow-black/50 py-2.5 sm:py-3'
          : 'bg-transparent py-3 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* الشعار والهوية الرسمية */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer select-none"
            aria-label="بوابة وادنا الرسمية"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#78350F] p-0.5 shadow-md shadow-[#D97706]/20 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full rounded-[10px] bg-[#140C07] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 32 32" className="w-5 h-5 sm:w-6 sm:h-6 text-[#FBBF24] fill-current" aria-hidden="true">
                  <path d="M16 26v-12M16 14c-4-4-9-2-11 0 3 1 7 0 11 0M16 14c4-4 9-2 11 0-3 1-7 0-11 0M16 14c-3-6-7-7-10-6 2 2 6 3 10 6M16 14c3-6 7-7 10-6-2 2-6 3-10 6M16 14c0-7 2-10 0-11 0 2-1 7 0 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M7 26c4-2 9-2 18 0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-white group-hover:text-[#FBBF24] transition-colors">
                  وادنا
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-[#F59E0B]/15 text-[#FDE68A] border border-[#F59E0B]/30">
                  سوف
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/60 font-mono tracking-wide">
                myeloued.com
              </p>
            </div>
          </a>

          {/* روابط التصفح للشاشات المتوسطة والكبيرة */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium" aria-label="التنقل الرئيسي">
            <button
              onClick={() => onNavigateSection('hero')}
              className="px-3.5 py-1.5 text-white/80 hover:text-[#FBBF24] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => onNavigateSection('ecosystem')}
              className="px-3.5 py-1.5 text-white/80 hover:text-[#FBBF24] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              بوابات المنظومة
            </button>
            <button
              onClick={() => onNavigateSection('future-vision')}
              className="px-3.5 py-1.5 text-white/80 hover:text-[#FBBF24] rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              آفاق وخدمات قادمة
            </button>
          </nav>

          {/* روابط خارجية مباشرة للمنصات الفاعلة وزر تواصل معنا */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://souq.myeloued.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-[#FDE68A] bg-[#F59E0B]/10 hover:bg-[#F59E0B]/20 border border-[#F59E0B]/30 transition-all flex items-center gap-1.5 group"
            >
              <Store className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>سوق الوادي</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://ouedna.myeloued.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-[#FED7AA] bg-[#EA580C]/15 hover:bg-[#EA580C]/25 border border-[#FB923C]/35 transition-all flex items-center gap-1.5 group"
            >
              <Compass className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>سياحة وادنا</span>
              <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="mailto:contact@myeloued.com"
              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white/90 hover:text-[#FBBF24] bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#34D399]" />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* زر القائمة للهواتف */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/90 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* قائمة الهاتف المنسدلة */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#140C07]/98 backdrop-blur-2xl border-b border-[#E5A93C]/25 px-4 pt-3 pb-5 mt-2 space-y-3 animate-in fade-in-50 duration-200">
          <div className="grid gap-1">
            <button
              onClick={() => {
                onNavigateSection('hero');
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3.5 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-[#FBBF24] hover:bg-white/5 transition-colors cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => {
                onNavigateSection('ecosystem');
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3.5 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-[#FBBF24] hover:bg-white/5 transition-colors cursor-pointer"
            >
              بوابات المنظومة الرقمية
            </button>
            <button
              onClick={() => {
                onNavigateSection('future-vision');
                setMobileMenuOpen(false);
              }}
              className="w-full text-right px-3.5 py-2 rounded-xl text-sm font-medium text-white/90 hover:text-[#FBBF24] hover:bg-white/5 transition-colors cursor-pointer"
            >
              آفاق وخدمات مستقبلية
            </button>
          </div>

          <div className="pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href="https://souq.myeloued.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F59E0B]/15 text-[#FDE68A] border border-[#F59E0B]/30 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <Store className="w-3.5 h-3.5 text-[#FBBF24]" />
              <span>سوق الوادي</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://ouedna.myeloued.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#EA580C]/20 text-[#FED7AA] border border-[#FB923C]/35 font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <Compass className="w-3.5 h-3.5 text-[#FB923C]" />
              <span>سياحة وادنا</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="pt-1">
            <a
              href="mailto:contact@myeloued.com"
              className="w-full bg-white/5 hover:bg-white/10 text-white/90 border border-white/10 font-medium py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#34D399]" />
              <span>تواصل معنا (contact@myeloued.com)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
