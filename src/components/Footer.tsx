import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Heart, 
  ArrowUp, 
  ShieldCheck,
  Facebook,
  Instagram,
  Send,
  ExternalLink
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
    <footer className="relative bg-[#0E0704] text-white/80 border-t border-[#E5A93C]/20 pt-16 pb-12 overflow-hidden">
      {/* Decorative Golden Accent Top Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Heritage */}
          <div className="lg:col-span-4 space-y-4">
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

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
              المنصة الذكية الموحدة لولاية الوادي، صُممت لتكون حلقة وصل رقمية عصرية بين أبناء وزوار &quot;وادي سوف&quot; — عاصمة الكثبان الرملية الذهبية، مدينة الألف قبة، ونخيل الغيطان الأصيل.
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
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              بوابات المنظومة
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#ecosystem"
                  onClick={() => onNavigateSection('ecosystem')}
                  className="hover:text-[#FBBF24] flex items-center justify-between group"
                >
                  <span>سوق الوادي (التجارة والتمور)</span>
                  <span className="text-[10px] text-white/40 group-hover:text-[#FBBF24] font-mono">souq.myeloued.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={() => onNavigateSection('ecosystem')}
                  className="hover:text-[#34D399] flex items-center justify-between group"
                >
                  <span>دليل سوف 360 (السياحة والغيطان)</span>
                  <span className="text-[10px] text-white/40 group-hover:text-[#34D399] font-mono">tour.myeloued.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={() => onNavigateSection('ecosystem')}
                  className="hover:text-[#38BDF8] flex items-center justify-between group"
                >
                  <span>الخدمات المدرسية (دعم ودروس)</span>
                  <span className="text-[10px] text-white/40 group-hover:text-[#38BDF8] font-mono">edu.myeloued.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#app-promo"
                  onClick={() => onNavigateSection('app-promo')}
                  className="hover:text-[#F59E0B] flex items-center gap-1.5"
                >
                  <span>تطبيق وادنا الذكي للهواتف</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#F59E0B]/20 text-[#FDE68A]">جديد</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Municipalities (بلديات الولاية) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              بلديات الولاية
            </h4>
            <div className="flex flex-wrap gap-1 text-[11px] text-white/60">
              {MUNICIPALITIES.slice(0, 10).map((m, i) => (
                <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 hover:text-white transition-colors">
                  {m.replace(' (عاصمة الولاية)', '')}
                </span>
              ))}
              <span className="text-[10px] text-[#F59E0B] mt-1">+20 بلدية أخرى</span>
            </div>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              تواصل معنا
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>وسط مدينة الوادي، ساحة الشهداء، ولاية الوادي (39000)، الجزائر</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href="mailto:contact@myeloued.com" className="hover:text-white font-mono">
                  contact@myeloued.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span dir="ltr" className="font-mono text-white/90">+213 (0) 29 14 00 00</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/60 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                <span>منصة رقمية آمنة ومحمية 100%</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2 text-center sm:text-right">
            <span>© 2026 وادنا (myeloued.com) - المنصة الذكية لولاية الوادي. جميع الحقوق محفوظة.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              سياسة الخصوصية
            </a>
            <span>•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">
              شروط الاستخدام
            </a>
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
