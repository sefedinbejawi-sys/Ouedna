/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * مكون شريط التنقل العلوي (Navbar):
 * تم حذف أزرار وروابط "التطبيق" وصفحة "الشركاء"،
 * ليركز فقط على بوابات المنظومة: الرئيسية، سوق الوادي، وسياحة وادنا.
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'سوق الوادي', href: 'https://souq.myeloued.com', isExternal: true },
    { label: 'سياحة وادنا', href: 'https://ouedna.myeloued.com/', isExternal: true },
    { label: 'بوابات المنظومة', href: '#ecosystem', isExternal: false },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140C07]/92 backdrop-blur-xl border-b border-[#E5A93C]/25 shadow-lg shadow-black/40 py-2.5 sm:py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Slogan */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              onNavigateSection('hero');
            }}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
          >
            {/* Golden Palm & Dunes Logo Mark */}
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#92400E] p-0.5 shadow-md shadow-[#D97706]/30 group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full rounded-[10px] bg-[#1A0E07] flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 32 32" className="w-6 h-6 sm:w-7 sm:h-7 text-[#FBBF24] fill-current">
                  <path d="M16 26v-12M16 14c-4-4-9-2-11 0 3 1 7 0 11 0M16 14c4-4 9-2 11 0-3 1-7 0-11 0M16 14c-3-6-7-7-10-6 2 2 6 3 10 6M16 14c3-6 7-7 10-6-2 2-6 3-10 6M16 14c0-7 2-10 0-11 0 2-1 7 0 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M7 26c4-2 9-2 18 0" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-[#FBBF24] transition-colors">
                  وادنا
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40">
                  سوف
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-white/60 font-medium tracking-wide">
                myeloued.com
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!link.isExternal) {
                    e.preventDefault();
                    onNavigateSection(link.href.replace('#', ''));
                  }
                }}
                className="px-3.5 py-2 text-sm font-medium text-white/80 hover:text-[#FBBF24] rounded-lg hover:bg-white/5 transition-colors flex items-center gap-1"
              >
                <span>{link.label}</span>
                {link.isExternal && <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />}
              </a>
            ))}
          </nav>

          {/* Quick External Links for Desktop */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://souq.myeloued.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#FDE68A] bg-[#F59E0B]/15 hover:bg-[#F59E0B]/25 border border-[#F59E0B]/30 transition-all flex items-center gap-1.5"
            >
              <span>سوق الوادي</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://ouedna.myeloued.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#FED7AA] bg-[#EA580C]/20 hover:bg-[#EA580C]/30 border border-[#FB923C]/35 transition-all flex items-center gap-1.5"
            >
              <span>سياحة وادنا</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/15 text-white/90 focus:outline-none transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#160D07]/98 backdrop-blur-2xl border-b border-[#E5A93C]/30 px-5 pt-4 pb-6 mt-2 space-y-3 animate-in fade-in-50 duration-200">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (!link.isExternal) {
                    e.preventDefault();
                    onNavigateSection(link.href.replace('#', ''));
                  }
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-white/90 hover:text-[#FBBF24] hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.isExternal ? (
                  <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
                ) : (
                  <span className="text-xs text-[#F59E0B]">‹</span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <a
              href="https://souq.myeloued.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/30 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <span>سوق الوادي</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://ouedna.myeloued.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#EA580C]/25 text-[#FED7AA] border border-[#FB923C]/35 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
            >
              <span>سياحة وادنا</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
