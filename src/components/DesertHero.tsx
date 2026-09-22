/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * مكون DesertHero:
 * الواجهة العلوية (Hero Section) الجذابة لمنصة "وادنا" (myeloued.com).
 * - خلفية متحركة تعتمد تدرجات ألوان Tailwind CSS الصحراوية وغروب الشمس.
 * - شريط بحث مركزي متناسق ومتجاوب 100% مع الهواتف الذكية (بدون زر بحث فوري مكدس أو كلمات مفتاحية مزدحمة).
 * - البحث يتم مباشرة عبر حقل الإدخال وزر مدمج أنيق أو الضغط على زر Enter.
 */

import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  MapPin, 
  X, 
  Store, 
  Palmtree, 
  ExternalLink,
  Loader2,
  ArrowLeft
} from 'lucide-react';
import { MOCK_SEARCH_RESULTS } from '../data/mockData';
import { SearchResult } from '../types';

export interface DesertHeroProps {
  onSelectService?: (serviceId: string) => void;
  onSearchQueryChange?: (query: string, category: string) => void;
  onExecuteSearch?: (query: string, category: string) => void;
  customResults?: SearchResult[];
  isLoadingResults?: boolean;
}

export const DesertHero: React.FC<DesertHeroProps> = ({ 
  onSearchQueryChange,
  onExecuteSearch,
  customResults,
  isLoadingResults = false
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'souq' | 'ouedna-tour'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // استخدام النتائج الخارجية أو التصفية المحلية الافتراضية
  const baseResults = customResults || MOCK_SEARCH_RESULTS;

  const filteredResults: SearchResult[] = baseResults.filter((item) => {
    const matchesQuery = searchQuery.trim() === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (activeTab === 'all') return matchesQuery;
    if (activeTab === 'souq') return matchesQuery && item.subdomain.includes('souq');
    if (activeTab === 'ouedna-tour') return matchesQuery && item.subdomain.includes('ouedna');
    return matchesQuery;
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (onSearchQueryChange) {
      onSearchQueryChange(val, activeTab);
    }
  };

  const handleTriggerSearch = () => {
    setIsSearchFocused(true);
    if (onExecuteSearch) {
      onExecuteSearch(searchQuery, activeTab);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleTriggerSearch();
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden px-3 sm:px-6 lg:px-8">
      {/* خلفية متحركة تعتمد تدرجات ألوان Tailwind CSS الصحراوية وغروب الشمس */}
      <div 
        className="absolute inset-0 z-0 animate-sunset-shift pointer-events-none opacity-95 bg-gradient-to-br from-[#1C0F08] via-[#3D1A0A] via-[#7C2D12] via-[#C2410C] via-[#EA580C] to-[#F59E0B]"
      />

      {/* توهج هالة الشمس الدافئة */}
      <div className="absolute top-[12%] sm:top-[16%] left-1/2 -translate-x-1/2 w-[260px] sm:w-[450px] md:w-[620px] h-[260px] sm:h-[450px] md:h-[620px] bg-gradient-to-b from-[#F59E0B]/45 via-[#EA580C]/35 to-transparent rounded-full animate-sun-glow pointer-events-none blur-2xl" />

      {/* قرص شمس الغروب المتوهج في سماء وادي سوف */}
      <div className="absolute top-[18%] sm:top-[20%] left-1/2 -translate-x-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-t from-[#FBBF24] via-[#F59E0B] to-[#FEF3C7] opacity-90 shadow-[0_0_80px_30px_rgba(245,158,11,0.55)] sm:shadow-[0_0_120px_45px_rgba(245,158,11,0.65)] pointer-events-none" />

      {/* جزيئات الغبار والرمال الذهبية الطافية */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FDE68A] animate-dust-1 blur-[1px]" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#F59E0B] animate-dust-2 blur-[1px]" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 rounded-full bg-[#FBBF24] animate-dust-1 blur-[0.5px]" />
      </div>

      {/* طبقات ظلال الكثبان وقباب وادي سوف وأشجار النخيل (Parallax Silhouette) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 leading-none select-none">
        <svg 
          viewBox="0 0 1440 260" 
          className="w-full h-auto text-[#2D1409]/80 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M 0,260 L 0,160 Q 120,130 240,165 Q 360,190 480,140 Q 560,110 650,145 Q 740,170 850,135 Q 980,105 1100,150 Q 1240,185 1350,140 Q 1400,125 1440,145 L 1440,260 Z" />
          <path d="M 380,170 A 25,25 0 0 1 430,170 Z M 820,140 A 20,20 0 0 1 860,140 Z M 1150,150 A 28,28 0 0 1 1206,150 Z" className="fill-[#1A0A04]/60" />
        </svg>

        <svg 
          viewBox="0 0 1440 220" 
          className="w-full h-auto text-[#1F0C05]/95 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M 0,220 L 0,120 Q 200,50 420,115 Q 640,175 880,85 Q 1120,15 1340,95 Q 1390,110 1440,105 L 1440,220 Z" />
        </svg>

        <div className="relative w-full h-12 sm:h-20 md:h-24 bg-[#120B06]">
          <div className="absolute -top-12 sm:-top-20 md:-top-24 right-4 sm:right-16 md:right-24 w-20 sm:w-36 md:w-44 text-[#120B06] opacity-95">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 47,100 C 47,70 52,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 50,5 58,0 Q 58,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
              <path d="M 50,30 Q 85,25 95,35 Q 72,36 50,34 Z" />
            </svg>
          </div>

          <div className="absolute -top-10 sm:-top-16 md:-top-20 left-4 sm:left-16 md:left-28 w-18 sm:w-28 md:w-36 text-[#120B06] opacity-90 scale-x-[-1]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 47,100 C 47,70 48,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 50,5 58,0 Q 58,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي للواجهة */}
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center mt-2 sm:mt-4">
        
        {/* الشارة الترحيبية المدمجة المتجاوبة */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#2A160C]/85 backdrop-blur-md border border-[#F59E0B]/35 text-[#FDE68A] text-[11px] sm:text-xs font-medium mb-4 sm:mb-6 shadow-lg shadow-black/25 max-w-[95%]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
          <span className="truncate">المنصة الذكية لولاية الوادي</span>
          <span className="text-white/40 hidden xs:inline">•</span>
          <span className="text-[#FBBF24] font-semibold font-mono hidden xs:inline">myeloued.com</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3 sm:mb-5 leading-tight px-1">
          <span className="block drop-shadow-md">وادنا..</span>
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent gold-text-glow">
            بوابتك الذكية لولاية الوادي
          </span>
        </h1>

        {/* الوصف الفرعي */}
        <p className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-[#FDF8F2]/90 leading-relaxed font-normal mb-6 sm:mb-8 px-2 text-balance">
          بوابة موحدة تجمع بين <span className="text-[#FDE68A] font-semibold">سوق الوادي</span> و<span className="text-[#FB923C] font-semibold">منصة وادنا السياحية</span> لخدمة وتسهيل وصول سكان وزوار مدينة الألف قبة.
        </p>

        {/* شريط البحث المركزي المتجاوب والخفيف (بدون كلمات مكدسة أو زر ممتد) */}
        <div className="w-full max-w-2xl mx-auto glass-card rounded-2xl sm:rounded-3xl p-2.5 sm:p-4 shadow-2xl relative border border-[#E5A93C]/35">
          
          {/* تبويبات النطاقات الفرعية (مرنة وتلتف بنعومة على شاشات الهاتف) */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2.5 sm:mb-3.5 flex-wrap text-xs font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FDE68A]" />
              <span>الكل</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('souq')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activeTab === 'souq'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#140C07] shadow-md font-bold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Store className="w-3 h-3 text-[#FBBF24]" />
              <span>سوق الوادي</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ouedna-tour')}
              className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-1 cursor-pointer text-xs ${
                activeTab === 'ouedna-tour'
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-md font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white'
              }`}
            >
              <Palmtree className="w-3 h-3 text-[#FB923C]" />
              <span>سياحة وادنا</span>
            </button>
          </div>

          {/* حقل البحث العصري والمتكامل في سطر واحد على الهاتف والحاسوب */}
          <div className="relative flex items-center bg-[#120B06]/90 border border-[#E5A93C]/40 rounded-xl sm:rounded-2xl p-1 sm:p-1.5 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/30 transition-all">
            <div className="pr-2.5 pl-1.5 text-[#F59E0B] shrink-0">
              {isLoadingResults ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsSearchFocused(true)}
              placeholder={
                activeTab === 'souq'
                  ? 'ابحث في سوق الوادي: تمور، سيارات، عقارات...'
                  : activeTab === 'ouedna-tour'
                  ? 'ابحث في سياحة وادنا: رحلات، مخيمات، كثبان...'
                  : 'ابحث في خدمات وتجارة وسياحة وادنا...'
              }
              className="w-full bg-transparent text-white placeholder:text-white/45 text-xs sm:text-sm md:text-base outline-none font-medium py-1.5 sm:py-2"
            />
            
            {searchQuery && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  if (onSearchQueryChange) onSearchQueryChange('', activeTab);
                }}
                className="p-1 rounded-full text-white/50 hover:text-white transition-colors shrink-0 ml-1"
                aria-label="مسح البحث"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={handleTriggerSearch}
              className="bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#1A1008] font-bold text-xs sm:text-sm px-3 sm:px-5 py-2 rounded-lg sm:rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
              title="بحث"
            >
              <span className="hidden xs:inline">بحث</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* قائمة النتائج الحية المنسدلة للبحث */}
          {(isSearchFocused || searchQuery.length > 0) && (
            <div className="mt-2.5 text-right bg-[#180E08]/95 border border-[#E5A93C]/30 rounded-xl p-2.5 max-h-64 overflow-y-auto text-xs sm:text-sm animate-in fade-in-50 duration-200">
              <div className="flex items-center justify-between text-[11px] text-white/50 px-1 pb-1.5 border-b border-white/10 mb-2">
                <span>نتائج البحث المباشرة ({filteredResults.length})</span>
                <button 
                  type="button"
                  onClick={() => setIsSearchFocused(false)} 
                  className="hover:text-white underline cursor-pointer"
                >
                  إغلاق
                </button>
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-5 text-white/60 text-xs">
                  <p>لم نجد نتائج مطابقة لـ &quot;{searchQuery}&quot;</p>
                  <p className="text-[11px] text-[#FBBF24] mt-1">جرّب البحث عن: &quot;تمور دقلة نور&quot;، أو &quot;مخيم وادنا&quot;</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  {filteredResults.map((item) => (
                    <a
                      key={item.id}
                      href={item.url || `https://${item.subdomain}`}
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
                        <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40">
                          {item.badge}
                        </span>
                        <ExternalLink className="w-3 h-3 text-white/40 group-hover:text-[#FBBF24] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
