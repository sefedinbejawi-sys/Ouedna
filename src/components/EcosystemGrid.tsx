/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * مكون EcosystemGrid:
 * شبكة بوابات منظومة وادنا (myeloued.com) لخدمات ولاية الوادي.
 * يعرض بطاقات الخدمات المتبقية:
 * 1. سوق الوادي (https://souq.myeloued.com)
 * 2. منصة وادنا السياحية (https://ouedna.myeloued.com/)
 */

import React, { useState } from 'react';
import { 
  ShoppingBag, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Palmtree,
  Layers,
  ArrowUpRight
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

  /**
   * إرجاع الأيقونة المعبرة عن كل بوابة فرعية
   */
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case 'souq':
        return <ShoppingBag className="w-8 h-8 text-[#FBBF24]" />;
      case 'ouedna-tour':
        return <Palmtree className="w-8 h-8 text-[#FB923C]" />;
      default:
        return <Layers className="w-8 h-8 text-[#F59E0B]" />;
    }
  };

  /**
   * تطبيق تصميم تأثير الزجاج (Glassmorphism) مع إضاءة خفيفة (Glow) عند مرور الماوس
   */
  const getThemeStyles = (theme: ServiceCard['theme'], isHovered: boolean) => {
    switch (theme) {
      case 'desert':
        return {
          cardBg: 'bg-[#1F0D05]/65 backdrop-blur-xl',
          border: isHovered ? 'border-[#F97316]' : 'border-[#FB923C]/35',
          glow: isHovered 
            ? 'shadow-[0_0_35px_rgba(249,115,22,0.35)] -translate-y-1.5' 
            : 'shadow-lg shadow-black/40',
          badgeBg: 'bg-[#EA580C]/25 text-[#FDBA74] border-[#EA580C]/40',
          accentText: 'text-[#FB923C]',
          ctaBtn: 'bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#C2410C] hover:from-[#FB923C] hover:to-[#EA580C] text-white shadow-lg shadow-[#EA580C]/35',
          subdomainBadge: 'text-[#FED7AA] bg-[#7C2D12]/60 border-[#FB923C]/40 hover:bg-[#7C2D12]/90',
          iconContainer: 'bg-[#311306]/80 border-[#FB923C]/40'
        };
      case 'gold':
      default:
        return {
          cardBg: 'bg-[#1C1007]/65 backdrop-blur-xl',
          border: isHovered ? 'border-[#F59E0B]' : 'border-[#F59E0B]/35',
          glow: isHovered 
            ? 'shadow-[0_0_35px_rgba(245,158,11,0.38)] -translate-y-1.5' 
            : 'shadow-lg shadow-black/40',
          badgeBg: 'bg-[#F59E0B]/20 text-[#FDE68A] border-[#F59E0B]/40',
          accentText: 'text-[#FBBF24]',
          ctaBtn: 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#140C07] shadow-lg shadow-[#D97706]/40',
          subdomainBadge: 'text-[#FEF08A] bg-[#451A03]/60 border-[#F59E0B]/40 hover:bg-[#451A03]/90',
          iconContainer: 'bg-[#291408]/80 border-[#F59E0B]/40'
        };
    }
  };

  return (
    <section id="ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#120B06] overflow-hidden">
      {/* خلفيات ضوئية ناعمة تحاكي غروب وواحات وادي سوف */}
      <div className="absolute top-12 right-1/4 w-[420px] h-[420px] bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-16 left-1/4 w-[420px] h-[420px] bg-[#EA580C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* عنوان وقسم رأس المنظومة */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#241309] border border-[#E5A93C]/35 text-[#FDE68A] text-xs sm:text-sm font-semibold mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>بوابات وادنا الرقمية</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            بوابات ذكية تُغطي <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">تجارة وسياحة سوف</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            منظومة رقمية ترتبط بنطاقاتنا الفرعية المباشرة؛ تجمع بين تجارة التمور والسيارات والعقارات بسوق الوادي، والرحلات الاستكشافية وحجوزات الكثبان والغيطان عبر منصة وادنا السياحية.
          </p>
        </div>

        {/* شبكة البطاقات الزجاجية المتناسقة (عمودان على الشاشات المتوسطة والكبيرة) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const isHovered = hoveredCard === service.id;
            const styles = getThemeStyles(service.theme, isHovered);

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-300 border ${styles.cardBg} ${styles.border} ${styles.glow}`}
              >
                {/* تدرج لوني خفيف داخل البطاقة الزجاجية */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.gradientBg} pointer-events-none opacity-80`} 
                />

                <div className="relative z-10">
                  {/* رأس البطاقة: الأيقونة ورابط النطاق الفرعي المباشر */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl p-3 flex items-center justify-center border shadow-inner transition-transform duration-300 group-hover:scale-105 ${styles.iconContainer}`}>
                      {renderServiceIcon(service.id)}
                    </div>

                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-colors ${styles.subdomainBadge}`}
                      title={`زيارة ${service.subdomain}`}
                    >
                      <span dir="ltr">{service.subdomain.replace('https://', '').replace('/', '')}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                    </a>
                  </div>

                  {/* الشارة والعنوان */}
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2.5 ${styles.badgeBg}`}>
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FBBF24] transition-colors leading-tight">
                      {service.name}
                    </h3>
                  </div>

                  {/* الوصف */}
                  <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* قائمة المزايا السريعة */}
                  <div className="space-y-2.5 mb-6 border-t border-white/10 pt-5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${styles.accentText}`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* أسفل البطاقة: الإحصائيات وزر الانتقال المباشر للنطاق الفرعي */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1 font-medium">
                      <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>{service.metrics}</span>
                    </span>
                    <span className="text-[11px] text-white/40">تحديث فوري</span>
                  </div>

                  {/* زر التوجيه المباشر للنطاق الفرعي target="_blank" */}
                  <div className="grid grid-cols-1 gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${styles.ctaBtn}`}
                    >
                      <span>{service.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>

                    {onSelectServiceModal && (
                      <button
                        type="button"
                        onClick={() => onSelectServiceModal(service)}
                        className="w-full py-2 text-center text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
                      >
                        عرض تفاصيل البوابة
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* تنويه التراث والخصوصية الفلاحية لولاية الوادي */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#2B170B]/70 via-[#1F1007]/80 to-[#2B170B]/70 border border-[#E5A93C]/25 p-5 text-center backdrop-blur-md">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#FDE68A]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping shrink-0" />
            <span className="font-semibold shrink-0">معلومة سوفية:</span>
            <span className="text-white/80 leading-relaxed">
              تنفرد ولاية الوادي بنظام فلاحي وتراثي فريد هو &quot;الغيطان&quot; (حفر الكثبان لغرس النخيل لتشرب جذورها مباشرة من المياه الجوفية دون سقي)، وهو ما استلهمنا منه تصميم وروح منصات &quot;وادنا&quot;.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
