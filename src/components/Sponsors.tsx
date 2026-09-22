import React from 'react';
import { Award, Building2, Trees, GraduationCap, Handshake, ArrowUpRight } from 'lucide-react';
import { SPONSORS } from '../data/mockData';

interface SponsorsProps {
  onPartnerClick: () => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onPartnerClick }) => {
  const getSponsorIcon = (id: string) => {
    switch (id) {
      case 'ccis':
        return <Building2 className="w-5 h-5 text-[#F59E0B]" />;
      case 'tourism-board':
        return <Award className="w-5 h-5 text-[#34D399]" />;
      case 'dates-group':
        return <Trees className="w-5 h-5 text-[#FBBF24]" />;
      case 'heritage-assn':
        return <Handshake className="w-5 h-5 text-[#F97316]" />;
      case 'univ-eloued':
        return <GraduationCap className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#F59E0B]" />;
    }
  };

  return (
    <section id="sponsors" className="relative py-16 sm:py-20 px-3 sm:px-6 lg:px-8 bg-[#120B06] border-t border-[#E5A93C]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 px-2">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#241309] border border-[#E5A93C]/25 text-[#FDE68A] text-xs font-semibold mb-3">
            <Handshake className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>شركاء التنمية والنجاح</span>
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-white mb-2 sm:mb-3">
            تحت رعاية ومرافقة هيئات ومؤسسات <span className="text-[#FBBF24]">ولاية الوادي</span>
          </h3>

          <p className="text-xs sm:text-sm text-white/65">
            نعمل جنباً إلى جنب مع الفاعلين الاقتصاديين، السياحيين والأكاديميين لترقية وتطوير الخدمات الرقمية في وادي سوف.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.id}
              className="p-4 rounded-2xl glass-card border border-[#E5A93C]/15 hover:border-[#F59E0B]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSponsorIcon(sponsor.id)}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-white/60">
                    {sponsor.category}
                  </span>
                </div>

                <h4 className="font-bold text-white text-sm group-hover:text-[#FBBF24] transition-colors leading-snug mb-1">
                  {sponsor.name}
                </h4>

                <p className="text-[11px] text-white/60 leading-relaxed">
                  {sponsor.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#FDE68A]/80 font-medium">
                <span>شريك معتمد</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Local Business Join CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={onPartnerClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#FDE68A] hover:text-white bg-[#2A160C] hover:bg-[#381D10] border border-[#E5A93C]/30 px-5 py-2.5 rounded-xl transition-all cursor-pointer shadow-md"
          >
            <span>هل أنت تاجر، صاحب فندق، أو مدرسة خاصة في وادي سوف؟ انضم لشركائنا</span>
            <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
