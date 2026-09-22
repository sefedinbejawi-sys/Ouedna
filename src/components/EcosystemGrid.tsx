import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Compass, 
  GraduationCap, 
  ArrowLeft, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  MapPin,
  TrendingUp,
  Layers
} from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceCard } from '../types';

interface EcosystemGridProps {
  onSelectServiceModal: (service: ServiceCard) => void;
}

export const EcosystemGrid: React.FC<EcosystemGridProps> = ({ onSelectServiceModal }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'souq':
        return <ShoppingBag className="w-8 h-8 text-[#FBBF24]" />;
      case 'tourism':
        return <Compass className="w-8 h-8 text-[#34D399]" />;
      case 'edu':
        return <GraduationCap className="w-8 h-8 text-[#38BDF8]" />;
      default:
        return <Layers className="w-8 h-8 text-[#F59E0B]" />;
    }
  };

  const getCardThemeClasses = (theme: string, isHovered: boolean) => {
    switch (theme) {
      case 'emerald':
        return {
          border: isHovered ? 'border-[#10B981]' : 'border-[#10B981]/30',
          glow: isHovered ? 'shadow-[0_20px_50px_-15px_rgba(5,150,105,0.4)]' : 'shadow-lg shadow-black/20',
          badgeBg: 'bg-[#059669]/20 text-[#6EE7B7] border-[#059669]/40',
          accentText: 'text-[#34D399]',
          ctaBtn: 'bg-gradient-to-r from-[#059669] to-[#047857] hover:from-[#10B981] hover:to-[#059669] text-white shadow-[#059669]/30',
          subdomainBadge: 'text-[#A7F3D0] bg-[#064E3B]/60 border-[#10B981]/40'
        };
      case 'amber':
        return {
          border: isHovered ? 'border-[#38BDF8]' : 'border-[#38BDF8]/30',
          glow: isHovered ? 'shadow-[0_20px_50px_-15px_rgba(14,165,233,0.35)]' : 'shadow-lg shadow-black/20',
          badgeBg: 'bg-[#0284C7]/20 text-[#7DD3FC] border-[#0284C7]/40',
          accentText: 'text-[#38BDF8]',
          ctaBtn: 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] hover:from-[#38BDF8] hover:to-[#0284C7] text-white shadow-[#0284C7]/30',
          subdomainBadge: 'text-[#BAE6FD] bg-[#0C4A6E]/60 border-[#38BDF8]/40'
        };
      case 'gold':
      default:
        return {
          border: isHovered ? 'border-[#F59E0B]' : 'border-[#F59E0B]/35',
          glow: isHovered ? 'shadow-[0_20px_50px_-15px_rgba(245,158,11,0.35)]' : 'shadow-lg shadow-black/20',
          badgeBg: 'bg-[#F59E0B]/20 text-[#FDE68A] border-[#F59E0B]/40',
          accentText: 'text-[#FBBF24]',
          ctaBtn: 'bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#140C07] shadow-[#D97706]/40',
          subdomainBadge: 'text-[#FEF08A] bg-[#451A03]/60 border-[#F59E0B]/40'
        };
    }
  };

  return (
    <section id="ecosystem" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#120B06] overflow-hidden">
      {/* Decorative Oasis & Desert Backdrop Ambient Lights */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#241309] border border-[#E5A93C]/30 text-[#FDE68A] text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>شبكة المنظومة المتكاملة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            ثلاث بوابات مركزية.. تغطي كل احتياجات <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent">وادي سوف</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed text-balance">
            منظومة رقمية ذكية صُممت وفق تضاريس وخصائص ولاية الوادي، لتجمع بين ازدهار التجارة الصحراوية، سياحة الواحات والكثبان والغيطان، ودعم مسيرة أجيالنا التعليمية.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredCard === service.id;
            const themeClasses = getCardThemeClasses(service.theme, isHovered);

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative flex flex-col justify-between rounded-3xl p-7 transition-all duration-500 glass-card ${themeClasses.border} ${themeClasses.glow}`}
              >
                {/* Subtle Inner Background Tint */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-b ${service.gradientBg} pointer-events-none opacity-80`} />

                <div className="relative z-10">
                  {/* Top Bar with Icon and Subdomain */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 rounded-2xl p-3 flex items-center justify-center bg-black/40 border ${themeClasses.border} shadow-inner transition-transform group-hover:scale-110 duration-300`}>
                      {getServiceIcon(service.id)}
                    </div>

                    <div className="text-left">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-medium border ${themeClasses.subdomainBadge}`}>
                        <span>{service.subdomain}</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </span>
                    </div>
                  </div>

                  {/* Service Badge & Title */}
                  <div className="mb-4">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mb-2.5 ${themeClasses.badgeBg}`}>
                      {service.badge}
                    </span>
                    <h3 className="text-2xl font-black text-white group-hover:text-[#FBBF24] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/80 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-8 border-t border-white/10 pt-5">
                    {service.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-white/85">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${themeClasses.accentText}`} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-[#34D399]" />
                      <span>{service.metrics}</span>
                    </span>
                    <span className="text-[11px] text-white/40">تحديث لحظي</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceModal(service)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-sm shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${themeClasses.ctaBtn}`}
                  >
                    <span>{service.ctaText}</span>
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional Heritage Footnote: الغيطان والكثبان */}
        <div className="mt-14 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#2B170B]/70 via-[#1F1007]/80 to-[#2B170B]/70 border border-[#E5A93C]/25 p-5 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm text-[#FDE68A]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span className="font-semibold">هل تعلم؟</span>
            <span className="text-white/80">
              تنفرد ولاية الوادي بنظام فلاحي عالمي فريد هو &quot;الغيطان&quot; (حفر الكثبان لغرس النخيل لتشرب جذورها مباشرة من المياه الجوفية دون سقي)، وهو ما استلهمنا منه تصميم وتسمية منصة &quot;وادنا&quot;.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
