/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * المكون الرئيسي (Hero Section) لبوابة وادنا:
 * - تجسيد بيئة وادي سوف الأصيلة: التدرجات الصحراوية، الشمس، الكثبان، النخيل وقباب وادي سوف.
 * - واجهة بحث وتوجيه سريعة وخفيفة Mobile-First بدون أرقام أو إحصاءات وهمية.
 * - تنقل مباشر ودقيق بين سوق الوادي ومنصة وادنا السياحية.
 */

import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  MapPin, 
  X, 
  Store, 
  Compass, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { SEARCH_INDEX } from '../data/mockData';
import { SearchResult } from '../types';

export const DesertHero: React.FC = () => {
  const [activePortalFilter, setActivePortalFilter] = useState<'all' | 'souq' | 'ouedna-tour'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const filteredResults: SearchResult[] = SEARCH_INDEX.filter((item) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery = q === '' || 
      item.title.toLowerCase().includes(q) || 
      item.location.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.badge && item.badge.toLowerCase().includes(q));

    if (activePortalFilter === 'souq') return matchesQuery && item.subdomain.includes('souq');
    if (activePortalFilter === 'ouedna-tour') return matchesQuery && item.subdomain.includes('ouedna');
    return matchesQuery;
  });

  return (
    <section 
      id="hero" 
      className="relative min-h-[75vh] sm:min-h-[82vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden px-3.5 sm:px-6 lg:px-8"
      aria-label="الواجهة الترحيبية"
    >
      {/* خلفية تدرجات صحراء وشفق وادي سوف */}
      <div 
        className="absolute inset-0 z-0 animate-sunset-shift pointer-events-none opacity-95 bg-gradient-to-br from-[#1A0E08] via-[#381608] via-[#6D280E] via-[#A8380A] via-[#D95308] to-[#D97706]"
        aria-hidden="true"
      />

      {/* هالة توهج الشمس الصحراوية */}
      <div 
        className="absolute top-[14%] sm:top-[16%] left-1/2 -translate-x-1/2 w-[240px] sm:w-[420px] md:w-[580px] h-[240px] sm:h-[420px] md:h-[580px] bg-gradient-to-b from-[#F59E0B]/40 via-[#EA580C]/30 to-transparent rounded-full animate-sun-glow pointer-events-none blur-2xl"
        aria-hidden="true" 
      />

      {/* قرص شمس الغروب المتوهج */}
      <div 
        className="absolute top-[18%] sm:top-[20%] left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-t from-[#FBBF24] via-[#F59E0B] to-[#FEF3C7] opacity-90 shadow-[0_0_70px_25px_rgba(245,158,11,0.5)] pointer-events-none"
        aria-hidden="true"
      />

      {/* جزيئات ذهبية هادئة */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/4 left-1/6 w-1.5 h-1.5 rounded-full bg-[#FDE68A] animate-dust-1 blur-[0.5px]" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#F59E0B] animate-dust-2 blur-[0.5px]" />
      </div>

      {/* طبقات أفق الكثبان وقباب وادي سوف وأشجار النخيل */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 leading-none select-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 240" 
          className="w-full h-auto text-[#261006]/85 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M 0,240 L 0,150 Q 140,120 280,155 Q 420,180 560,135 Q 640,105 740,140 Q 840,165 960,130 Q 1090,100 1220,145 Q 1340,180 1440,135 L 1440,240 Z" />
          <path d="M 400,160 A 24,24 0 0 1 448,160 Z M 850,135 A 19,19 0 0 1 888,135 Z M 1180,145 A 26,26 0 0 1 1232,145 Z" className="fill-[#1A0A04]/60" />
        </svg>

        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-auto text-[#160B05]/98 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M 0,200 L 0,110 Q 220,40 450,105 Q 670,165 910,75 Q 1150,10 1370,85 Q 1410,100 1440,95 L 1440,200 Z" />
        </svg>

        <div className="relative w-full h-8 sm:h-14 md:h-16 bg-[#100804]">
          {/* ظلال النخيل السوفي على الأطراف */}
          <div className="absolute -top-10 sm:-top-16 right-4 sm:right-16 w-16 sm:w-28 text-[#100804] opacity-95">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 48,100 C 48,70 52,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 50,5 58,0 Q 58,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
            </svg>
          </div>
          <div className="absolute -top-8 sm:-top-14 left-4 sm:left-16 w-14 sm:w-24 text-[#100804] opacity-90 scale-x-[-1]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 48,100 C 48,70 52,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* المحتوى المركزي التفاعلي */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-2 sm:mt-4">
        
        {/* شارة الهوية الرسمية */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#201007]/85 backdrop-blur-md border border-[#F59E0B]/35 text-[#FDE68A] text-xs font-medium mb-3 sm:mb-5 shadow-lg shadow-black/30">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" aria-hidden="true" />
          <span>البوابة الرقمية المركزية لولاية الوادي</span>
          <span className="text-white/40 hidden xs:inline">•</span>
          <span className="text-[#FBBF24] font-semibold font-mono hidden xs:inline" dir="ltr">myeloued.com</span>
        </div>

        {/* العنوان الرئيسي الدقيق بدون مبالغات */}
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3 sm:mb-4 leading-tight">
          <span className="block drop-shadow-md">منظومة وادنا الرقمية</span>
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent gold-text-glow">
            بوابتك الموحدة لخدمات ولاية الوادي
          </span>
        </h1>

        {/* النص التوضيحي الواقعي المعتمد على المنصات القائمة */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-[#FDF8F2]/90 leading-relaxed font-normal mb-5 sm:mb-7 px-2 text-balance">
          نقطة انطلاق موحدة تجمع بين <strong className="text-[#FDE68A] font-semibold">سوق الوادي</strong> للتجارة المحلية والتمور والعقارات، و<strong className="text-[#FB923C] font-semibold">منصة وادنا السياحية</strong> للرحلات الصحراوية والمخيمات.
        </p>

        {/* صندوق التوجيه والبحث المباشر */}
        <div className="w-full max-w-2xl mx-auto glass-card rounded-2xl p-2.5 sm:p-3.5 shadow-2xl relative border border-[#E5A93C]/35">
          
          {/* تبويبات التصفية */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2.5 flex-wrap text-xs font-medium" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activePortalFilter === 'all'}
              onClick={() => setActivePortalFilter('all')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activePortalFilter === 'all'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FDE68A]" />
              <span>كافة الخدمات</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activePortalFilter === 'souq'}
              onClick={() => setActivePortalFilter('souq')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activePortalFilter === 'souq'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#140C07] shadow-md font-bold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Store className="w-3 h-3 text-[#FBBF24]" />
              <span>سوق الوادي</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activePortalFilter === 'ouedna-tour'}
              onClick={() => setActivePortalFilter('ouedna-tour')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activePortalFilter === 'ouedna-tour'
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-md font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Compass className="w-3 h-3 text-[#FB923C]" />
              <span>سياحة وادنا</span>
            </button>
          </div>

          {/* حقل البحث والتوجيه السريع */}
          <div className="relative flex items-center bg-[#100905]/95 border border-[#E5A93C]/40 rounded-xl p-1 sm:p-1.5 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/25 transition-all">
            <div className="pr-2.5 pl-1.5 text-[#F59E0B] shrink-0" aria-hidden="true">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchActive(true);
              }}
              onFocus={() => setIsSearchActive(true)}
              placeholder={
                activePortalFilter === 'souq'
                  ? 'ابحث في سوق الوادي: تمور، سيارات، عقارات...'
                  : activePortalFilter === 'ouedna-tour'
                  ? 'ابحث في سياحة وادنا: رحلات، مخيمات، كثبان...'
                  : 'ابحث في خدمات وتجارة وسياحة وادنا...'
              }
              className="w-full bg-transparent text-white placeholder:text-white/45 text-xs sm:text-sm outline-none font-medium py-1.5"
              aria-label="البحث في منصات وادنا"
            />
            
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                }}
                className="p-1 rounded-full text-white/50 hover:text-white transition-colors shrink-0 ml-1 cursor-pointer"
                aria-label="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsSearchActive(true)}
              className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#FBBF24] hover:to-[#D97706] text-[#140C07] font-bold text-xs px-3 sm:px-4 py-2 rounded-lg shadow transition-all cursor-pointer shrink-0"
            >
              استكشاف
            </button>
          </div>

          {/* قائمة نتائج البحث السريع والتوجيه */}
          {isSearchActive && (
            <div className="mt-2.5 text-right bg-[#150C07]/98 border border-[#E5A93C]/30 rounded-xl p-2.5 max-h-60 overflow-y-auto text-xs sm:text-sm animate-in fade-in-50 duration-200 shadow-xl">
              <div className="flex items-center justify-between text-[11px] text-white/50 px-1 pb-1.5 border-b border-white/10 mb-2">
                <span>الخدمات والقطاعات المتاحة ({filteredResults.length})</span>
                <button 
                  type="button"
                  onClick={() => setIsSearchActive(false)} 
                  className="hover:text-white underline cursor-pointer"
                >
                  إغلاق
                </button>
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-4 text-white/60 text-xs">
                  <p>لا توجد نتائج مطابقة لـ &quot;{searchQuery}&quot;</p>
                  <p className="text-[11px] text-[#FBBF24] mt-1">جرّب اختيار قطاع من القائمة أدناه أو تصفح البوابات مباشرة.</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {filteredResults.map((item) => (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-[#F59E0B]/15 border border-transparent hover:border-[#F59E0B]/30 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="text-right">
                        <p className="font-semibold text-white text-xs sm:text-sm group-hover:text-[#FBBF24] transition-colors">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-white/60 mt-0.5">
                          <span className="text-[#FBBF24] font-medium">{item.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-2.5 h-2.5 text-[#10B981]" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        {item.badge && (
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40">
                            {item.badge}
                          </span>
                        )}
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FBBF24] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* أزرار الوصول السريع المباشرة للمنصات */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs">
          <a
            href="https://souq.myeloued.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#F59E0B]/15 hover:bg-[#F59E0B]/25 text-[#FDE68A] border border-[#F59E0B]/35 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Store className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>الانتقال إلى سوق الوادي</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://ouedna.myeloued.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-[#EA580C]/20 hover:bg-[#EA580C]/30 text-[#FED7AA] border border-[#FB923C]/40 font-semibold flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-[#FB923C]" />
            <span>الانتقال إلى سياحة وادنا</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
