/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  MapPin, 
  Mail, 
  ShieldCheck,
  Facebook,
  Instagram,
  Send,
  ArrowUpRight,
  ArrowUp
} from 'lucide-react';
import { DISTRICTS_AND_MUNICIPALITIES } from '../data/mockData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0C0603] text-white/80 border-t border-[#E5A93C]/20 pt-10 sm:pt-14 pb-8 overflow-hidden">
      {/* خط علوي ذهبي رفيع ومميز */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-60" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* العمود الأول: الهوية والتعريف بالبوابة */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#92400E] p-0.5 shadow-md">
                <div className="w-full h-full rounded-[10px] bg-[#140C07] flex items-center justify-center">
                  <span className="text-[#FBBF24] font-black text-base">و</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-black text-white">وادنا</span>
                <span className="text-xs text-[#FBBF24] mr-2 font-mono">myeloued.com</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-md">
              البوابة الرقمية الموحدة لولاية الوادي (وادي سوف)، تعمل كمركز ربط ذكي لتسهيل وصول المواطنين، التجار، الفلاحين والزوار إلى مختلف الخدمات والمنصات المحلية المعتمدة.
            </p>

            <div className="pt-1 flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="صفحة فيسبوك"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="حساب إنستغرام"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="قناة تيليغرام"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* العمود الثاني: روابط البوابات النشطة */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              بوابات المنظومة النشطة
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href="https://souq.myeloued.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F59E0B]/15 border border-white/5 hover:border-[#F59E0B]/30 flex items-center justify-between group transition-all"
              >
                <div className="text-right">
                  <span className="block font-semibold text-white group-hover:text-[#FBBF24]">سوق الوادي</span>
                  <span className="text-[10px] text-white/50 font-mono">souq.myeloued.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FBBF24] transition-colors" />
              </a>

              <a
                href="https://ouedna.myeloued.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#EA580C]/15 border border-white/5 hover:border-[#FB923C]/30 flex items-center justify-between group transition-all"
              >
                <div className="text-right">
                  <span className="block font-semibold text-white group-hover:text-[#FB923C]">منصة وادنا السياحية</span>
                  <span className="text-[10px] text-white/50 font-mono">ouedna.myeloued.com</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FB923C] transition-colors" />
              </a>
            </div>
          </div>

          {/* العمود الثالث: التقسيم الإداري والتواصل */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              نطاق تغطية الولاية
            </h4>
            <div className="flex flex-wrap gap-1 text-[11px] text-white/60">
              {DISTRICTS_AND_MUNICIPALITIES.slice(0, 10).map((m, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-white/5">
                  {m}
                </span>
              ))}
              <span className="text-[10px] text-[#F59E0B] px-1 py-0.5">+10 بلديات</span>
            </div>

            <div className="pt-2 space-y-1.5 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>ولاية الوادي (39000)، الجمهورية الجزائرية الديمقراطية الشعبية</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <a href="mailto:contact@myeloued.com" className="hover:text-white font-mono text-[11px]">
                  contact@myeloued.com
                </a>
              </div>
              <div className="p-2 rounded-lg bg-[#10B981]/10 border border-[#10B981]/20 text-[11px] text-[#A7F3D0] flex items-center gap-1.5 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>بوابة آمنة وموثوقة لولاية الوادي</span>
              </div>
            </div>
          </div>

        </div>

        {/* الشريط السفلي وحقوق النشر */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div className="text-center sm:text-right">
            <span>© 2026 وادنا (myeloued.com) - البوابة الرسمية لولاية الوادي.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigateSection('ecosystem')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              بوابات المنظومة
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 hover:bg-[#F59E0B]/20 hover:text-[#FBBF24] border border-white/10 transition-colors cursor-pointer text-white/75"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
