import React, { useState, useEffect } from 'react';
import { PlusCircle, Menu, X, Globe, Sparkles, Smartphone } from 'lucide-react';

interface NavbarProps {
  onOpenPostAd: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPostAd, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
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
    { label: 'سوق الوادي', href: '#ecosystem', serviceId: 'souq' },
    { label: 'دليل سوف 360', href: '#ecosystem', serviceId: 'tourism' },
    { label: 'الخدمات المدرسية', href: '#ecosystem', serviceId: 'edu' },
    { label: 'تطبيق وادنا', href: '#app-promo' },
    { label: 'شركاؤنا', href: '#sponsors' },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#140C07]/90 backdrop-blur-xl border-b border-[#E5A93C]/25 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
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
            className="flex items-center gap-3 group cursor-pointer"
          >
            {/* Golden Palm & Dunes Logo Mark */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#F59E0B] via-[#D97706] to-[#92400E] p-0.5 shadow-md shadow-[#D97706]/30 group-hover:scale-105 transition-transform">
              <div className="w-full h-full rounded-[10px] bg-[#1A0E07] flex items-center justify-center relative overflow-hidden">
                {/* Stylized Palm Tree in Gold */}
                <svg viewBox="0 0 32 32" className="w-7 h-7 text-[#FBBF24] fill-current">
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
              <p className="text-[11px] text-white/60 font-medium tracking-wide">
                myeloued.com
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection(link.href.replace('#', ''));
                }}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-[#FBBF24] rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Action CTA & Post Ad Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onNavigateSection('app-promo')}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white/85 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Smartphone className="w-3.5 h-3.5 text-[#34D399]" />
              <span>التطبيق</span>
            </button>

            <button
              onClick={onOpenPostAd}
              className="relative group overflow-hidden bg-gradient-to-r from-[#F59E0B] via-[#E5A93C] to-[#D97706] hover:from-[#FBBF24] hover:to-[#EA580C] text-[#140C07] font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-[#D97706]/40 hover:shadow-[#F59E0B]/60 transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlusCircle className="w-4 h-4 stroke-[2.5]" />
              <span>أضف إعلانك مجاناً</span>
              {/* Shimmer light effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPostAd}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#F59E0B] text-[#140C07] text-xs font-bold flex items-center gap-1 shadow-md shadow-[#F59E0B]/30"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>إعلان</span>
            </button>

            <button
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
        <div className="lg:hidden bg-[#160D07]/95 backdrop-blur-2xl border-b border-[#E5A93C]/30 px-5 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in-50 duration-200">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateSection(link.href.replace('#', ''));
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 rounded-xl text-base font-medium text-white/90 hover:text-[#FBBF24] hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#F59E0B]">‹</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onOpenPostAd();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#140C07] font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <PlusCircle className="w-4 h-4" />
              <span>أضف إعلانك في وادنا (مجاناً)</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-white/60 pt-2">
              <Globe className="w-3.5 h-3.5 text-[#34D399]" />
              <span>بوابة ولاية الوادي الرسمية • myeloued.com</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
