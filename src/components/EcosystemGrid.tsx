/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * بوابات منظومة وادنا الرقمية المركزية (myeloued.com):
 * - إبراز المنصات القائمة حالياً بدقة وموثوقية (سوق الوادي وسياحة وادنا).
 * - بنية قابلة للتوسع لإضافة خدمات رقمية مستقبلية للولاية.
 */

import React, { useState } from 'react';
import { 
  Store, 
  Compass, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Clock,
  Info
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceCard } from '../types';

interface EcosystemGridProps {
  onSelectServiceModal?: (service: ServiceCard) => void;
  services?: ServiceCard[];
}

export const EcosystemGrid: React.FC<EcosystemGridProps> = ({ 
  onSelectServiceModal,
  services = SERVICES_DATA 
}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'souq':
        return <Store className="w-7 h-7 sm:w-8 sm:h-8 text-[#FBBF24]" />;
      case 'ouedna-tour':
        return <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#FB923C]" />;
      default:
        return <Layers className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B]" />;
    }
  };

  const getThemeStyles = (theme: ServiceCard['theme'], isHovered: boolean) => {
    switch (theme) {
      case 'desert':
        return {
          cardBg: 'bg-[#1C0D05]/80 backdrop-blur-xl',
          border: isHovered ? 'border-[#F97316]' : 'border-[#FB923C]/30',
          glow: isHovered 
            ? 'shadow-[0_0_30px_rgba(249,115,22,0.3)] -translate-y-1' 
            : 'shadow-lg shadow-black/40',
          badgeBg: 'bg-[#EA580C]/20 text-[#FDBA74] border-[#EA580C]/40',
          accentText: 'text-[#FB923C]',
          ctaBtn: 'bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#C2410C] hover:from-[#FB923C] hover:to-[#EA580C] text-white shadow-md shadow-[#EA580C]/30',
          subdomainBadge: 'text-[#FED7AA] bg-[#7C2D12]/50 border-[#FB923C]/40 hover:bg-[#7C2D12]/80',
          iconContainer: 'bg-[#2E1205]/90 border-[#FB923C]/35'
        };
      case 'gold':
      default:
        return {
          cardBg: 'bg-[#180E07]/80 backdrop-blur-xl',
          border: isHovered ? 'border-[#F59E0B]' : 'border-[#F59E0B]/30',
          glow: isHovered 
            ? 'shadow-[0_0_30px_rgba(245,158,11,0.3)] -translate-y-1' 
            : 'shadow-lg shadow-black/40',
          badgeBg: 'bg-[#F59E0B]/20 text-[#FDE68A] border-[#F59E0B]/40',
          accentText: 'text-[#FBBF24]',
          ctaBtn: 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#140C07] shadow-md shadow-[#D97706]/30',
          subdomainBadge: 'text-[#FEF08A] bg-[#451A03]/50 border-[#F59E0B]/40 hover:bg-[#451A03]/80',
          iconContainer: 'bg-[#261206]/90 border-[#F59E0B]/35'
        };
    }
  };

  return (
    <section id="ecosystem" className="relative py-14 sm:py-20 px-3.5 sm:px-6 lg:px-8 bg-[#100804] overflow-hidden">
      {/* إضاءات خلفية هادئة */}
      <div className="absolute top-10 right-1/4 w-[360px] h-[360px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[360px] h-[360px] bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* عنوان قسم المنظومة */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201007] border border-[#E5A93C]/30 text-[#FDE68A] text-xs font-semibold mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>المنصات الرقمية النشطة</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
            بوابات رقمية متخصصة لخدمة <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">ولاية الوادي</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-white/70 font-normal leading-relaxed text-balance">
            منصات قائمة بالفعل ترتبط بنطاقات فرعية موحدة تابعة للبوابة المركزية <span className="font-mono text-[#FBBF24]">myeloued.com</span> لتسهيل المعاملات التجارية والخدمات السياحية.
          </p>
        </div>

        {/* شبكة البطاقات الفعلية */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-5xl mx-auto">
          {services.map((service) => {
            const isHovered = hoveredCard === service.id;
            const styles = getThemeStyles(service.theme, isHovered);

            return (
              <article
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 border ${styles.cardBg} ${styles.border} ${styles.glow}`}
              >
                <div 
                  className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-b ${service.gradientBg} pointer-events-none opacity-80`} 
                />

                <div className="relative z-10">
                  {/* رأس البطاقة */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl p-2.5 flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-105 ${styles.iconContainer}`}>
                      {renderServiceIcon(service.id)}
                    </div>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium border transition-colors ${styles.subdomainBadge}`}
                      title={`زيارة الرابط المباشر: ${service.subdomain}`}
                    >
                      <span dir="ltr">{service.subdomain}</span>
                      <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>

                  {/* الشارة والاسم */}
                  <div className="mb-3">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border mb-1.5 ${styles.badgeBg}`}>
                      {service.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FBBF24] transition-colors leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* الوصف */}
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>

                  {/* الخدمات المتاحة داخل البوابة */}
                  <div className="space-y-2 mb-5 border-t border-white/10 pt-3.5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${styles.accentText}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* أسفل البطاقة وزر الزيارة */}
                <div className="relative z-10 pt-3 border-t border-white/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] text-white/60">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      <span className="text-[#34D399] font-medium">منصة نشطة وتعمل الآن</span>
                    </span>
                    <span className="text-[10px] text-white/40">نطاق رسمي</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2 pt-1">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-2.5 sm:py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${styles.ctaBtn}`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {onSelectServiceModal && (
                      <button
                        type="button"
                        onClick={() => onSelectServiceModal(service)}
                        className="w-full py-1 text-center text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                      >
                        معلومات تفصيلية عن البوابة
                      </button>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* قسم آفاق وبنية الخدمات الرقمية القادمة (بنية جاهزة لإضافة خدمات مستقبلية) */}
        <div id="future-vision" className="mt-14 sm:mt-18 max-w-5xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#1E1108]/90 via-[#180E07]/95 to-[#1E1108]/90 border border-[#E5A93C]/25 p-5 sm:p-7 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FBBF24] mb-2">
              <Clock className="w-4 h-4" />
              <span>الرؤية المستقبلية لبوابة وادنا</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              بنية معيارية قابلة للربط والتوسع
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 max-w-3xl">
              تم بناء هذه البوابة بهيكلية معيارية نظيفة تسمح بإدراج بوابات فرعية وخدمات إلكترونية جديدة تخدم ولاية الوادي (مثل الخدمات البلدية الرقمية، الدلائل المهنية، ومؤشرات الإنتاج الفلاحي) دون الحاجة لإعادة تصميم المنظومة أو التأثير على المنصات النشطة حالياً.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-right">
                <span className="block font-semibold text-white mb-0.5">تكامل النطاقات</span>
                <span className="text-white/60 text-[11px]">ربط أي منصة فرعية جديدة مباشرة تحت مظلة *.myeloued.com</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-right">
                <span className="block font-semibold text-white mb-0.5">سرعة فائقة وخفة</span>
                <span className="text-white/60 text-[11px]">تصميم كودي بدون اعتمادات ثقيلة لتحقيق أعلى درجات الأداء</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-right">
                <span className="block font-semibold text-white mb-0.5">جاهزية الربط (API Ready)</span>
                <span className="text-white/60 text-[11px]">إمكانية الاتصال بأي خادم أو قاعدة بيانات سحابية عند الحاجة</span>
              </div>
            </div>
          </div>
        </div>

        {/* بطاقة الإرث الفلاحي الفريد لولاية الوادي */}
        <div className="mt-8 max-w-5xl mx-auto rounded-xl bg-[#170E08]/70 border border-white/5 p-3.5 sm:p-4 text-center">
          <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed flex items-center justify-center gap-2">
            <Info className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span>
              <strong>خصوصية وادي سوف:</strong> يرتكز الاقتصاد المحلي على نظام زراعة النخيل الفريد في &quot;الغيطان&quot;، وتعد ولاية الوادي الرائدة وطنياً في إنتاج وتصدير تمور دقلة نور والإنتاج الفلاحي الصحراوي.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
