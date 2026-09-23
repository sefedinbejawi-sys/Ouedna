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
import { MUNICIPALITIES } from '../data/mockData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0E0704] text-white/80 border-t border-[#E5A93C]/20 pt-12 sm:pt-16 pb-8 sm:pb-12 overflow-hidden">
      {/* Decorative Golden Accent Top Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#92400E] p-0.5 shadow-md">
                <div className="w-full h-full rounded-[10px] bg-[#1A0E07] flex items-center justify-center">
                  <span className="text-[#FBBF24] font-black text-lg">و</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white">وادنا</span>
                <span className="text-xs text-[#FBBF24] mr-2 font-mono">myeloued.com</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-md">
              المنصة الذكية الموحدة لولاية الوادي، صُممت لتكون بوابة الوصول الرقمية المباشرة لخدمات التجارة والسياحة والاستكشاف في عاصمة الكثبان الذهبية ومدينة الألف قبة (وادي سوف).
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#F59E0B]/20 text-white/70 hover:text-[#FBBF24] border border-white/10 flex items-center justify-center transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services / Subdomains */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              بوابات المنظومة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://souq.myeloued.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#F59E0B]/15 border border-white/5 hover:border-[#F59E0B]/30 flex items-center justify-between group transition-all"
                >
                  <div className="text-right">
                    <span className="block font-semibold text-white group-hover:text-[#FBBF24]">سوق الوادي</span>
                    <span className="text-[10px] text-white/50">التجارة، التمور، السيارات والعقارات</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#FBBF24] transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href="https://ouedna.myeloued.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-[#EA580C]/15 border border-white/5 hover:border-[#FB923C]/30 flex items-center justify-between group transition-all"
                >
                  <div className="text-right">
                    <span className="block font-semibold text-white group-hover:text-[#FB923C]">منصة وادنا السياحية</span>
                    <span className="text-[10px] text-white/50">رحلات السفاري، المخيمات والكثبان</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#FB923C] transition-colors" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Municipalities & Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              تغطية ولاية الوادي
            </h4>
            <div className="flex flex-wrap gap-1 text-[11px] text-white/60">
              {MUNICIPALITIES.slice(0, 10).map((m, i) => (
                <span key={i} className="px-2 py-0.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                  {m.replace(' (عاصمة الولاية)', '')}
                </span>
              ))}
              <span className="text-[10px] text-[#F59E0B] px-1.5 py-0.5">+20 بلدية</span>
            </div>

            <div className="pt-2 space-y-2 text-xs text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>ولاية الوادي (39000)، الجزائر</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                <a href="mailto:contact@myeloued.com" className="hover:text-white font-mono text-[11px]">
                  contact@myeloued.com
                </a>
              </div>
              <div className="p-2 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[11px] text-[#A7F3D0] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                <span>منصة موثوقة وآمنة لخدمة الولاية</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="text-center sm:text-right">
            <span>© 2026 وادنا (myeloued.com) - جميع الحقوق محفوظة لولاية الوادي.</span>
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#F59E0B]/20 hover:text-[#FBBF24] border border-white/10 transition-colors cursor-pointer text-white/70"
            >
              <span>للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
