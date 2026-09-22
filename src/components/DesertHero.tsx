/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * مكون DesertHero:
 * الواجهة العلوية (Hero Section) الجذابة لمنصة "وادنا" (myeloued.com).
 * - خلفية متحركة تعتمد تدرجات ألوان Tailwind CSS الصحراوية وغروب الشمس.
 * - شريط بحث مركزي مهيأ بـ Props و States لاستقبال استعلامات Supabase الحية.
 * - تم حذف التبويبات الخاصة بـ "دليل سوف" والمنصة الأكاديمية وتركيز البحث على سوق الوادي وسياحة وادنا.
 */

import React, { useState } from 'react';
import { 
  Search, 
  Sparkles, 
  MapPin, 
  X, 
  ArrowLeft, 
  Store, 
  Flame, 
  Palmtree, 
  ExternalLink,
  Loader2
} from 'lucide-react';
import { MOCK_SEARCH_RESULTS } from '../data/mockData';
import { SearchResult } from '../types';

export interface DesertHeroProps {
  onSelectService?: (serviceId: string) => void;
  /**
   * Props مجهزة للربط المباشر مع قاعدة بيانات Supabase
   */
  onSearchQueryChange?: (query: string, category: string) => void;
  onExecuteSearch?: (query: string, category: string) => void;
  customResults?: SearchResult[];
  isLoadingResults?: boolean;
}

export const DesertHero: React.FC<DesertHeroProps> = ({ 
  onSelectService, 
  onSearchQueryChange,
  onExecuteSearch,
  customResults,
  isLoadingResults = false
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'souq' | 'ouedna-tour'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // استخدام النتائج الخارجية (من Supabase) أو التصفية المحلية الافتراضية
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

  const popularTags = [
    { text: 'تمور دقلة نور', tab: 'souq' as const },
    { text: 'رحلات الكثبان والغيطان', tab: 'ouedna-tour' as const },
    { text: 'مخيمات وادنا الصحراوية', tab: 'ouedna-tour' as const },
    { text: 'عقارات وقباب سوف', tab: 'souq' as const },
    { text: 'سفاري 4x4', tab: 'ouedna-tour' as const },
    { text: 'تويوتا هيلوكس صحراوية', tab: 'souq' as const },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 
        خلفية متحركة تعتمد تدرجات ألوان Tailwind CSS الصحراوية وغروب الشمس
      */}
      <div 
        className="absolute inset-0 z-0 animate-sunset-shift pointer-events-none opacity-95 bg-gradient-to-br from-[#1C0F08] via-[#3D1A0A] via-[#7C2D12] via-[#C2410C] via-[#EA580C] to-[#F59E0B]"
      />

      {/* توهج هالة الشمس الدافئة */}
      <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-[340px] md:w-[620px] h-[340px] md:h-[620px] bg-gradient-to-b from-[#F59E0B]/45 via-[#EA580C]/35 to-transparent rounded-full animate-sun-glow pointer-events-none blur-2xl" />

      {/* قرص شمس الغروب المتوهج في سماء وادي سوف */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-t from-[#FBBF24] via-[#F59E0B] to-[#FEF3C7] opacity-90 shadow-[0_0_120px_45px_rgba(245,158,11,0.65)] pointer-events-none" />

      {/* جزيئات الغبار والرمال الذهبية الطافية */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#FDE68A] animate-dust-1 blur-[1px]" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#F59E0B] animate-dust-2 blur-[1px]" />
        <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#FBBF24] animate-dust-1 blur-[0.5px]" />
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 rounded-full bg-[#FCD34D] animate-dust-2" />
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

        <div className="relative w-full h-16 md:h-24 bg-[#120B06]">
          <div className="absolute -top-16 md:-top-24 right-6 md:right-24 w-28 md:w-44 text-[#120B06] opacity-95">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 47,100 C 47,70 52,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 50,5 58,0 Q 58,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
              <path d="M 50,30 Q 85,25 95,35 Q 72,36 50,34 Z" />
              <path d="M 50,30 Q 65,45 78,55 Q 62,45 50,35 Z" />
              <path d="M 50,30 Q 35,45 22,55 Q 38,45 50,35 Z" />
            </svg>
          </div>

          <div className="absolute -top-12 md:-top-20 left-8 md:left-28 w-24 md:w-36 text-[#120B06] opacity-90 scale-x-[-1]">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M 47,100 C 47,70 48,50 50,30 C 50,30 53,30 53,100 Z" />
              <path d="M 50,30 Q 30,15 10,25 Q 32,26 50,32 Z" />
              <path d="M 50,30 Q 25,5 25,0 Q 40,18 50,30 Z" />
              <path d="M 50,30 Q 50,5 58,0 Q 58,18 50,30 Z" />
              <path d="M 50,30 Q 75,10 88,15 Q 70,24 50,32 Z" />
              <path d="M 50,30 Q 85,25 95,35 Q 72,36 50,34 Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* المحتوى الرئيسي للواجهة */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A160C]/75 backdrop-blur-md border border-[#F59E0B]/35 text-[#FDE68A] text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-black/25">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>المنصة الذكية الموحدة لولاية الوادي</span>
          <span className="text-white/40">•</span>
          <span className="text-[#FBBF24] font-semibold font-mono">myeloued.com</span>
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="block drop-shadow-md">وادنا..</span>
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent gold-text-glow">
            بوابتك الذكية لولاية الوادي
          </span>
        </h1>

        {/* الوصف الفرعي */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FDF8F2]/90 leading-relaxed font-normal mb-8 md:mb-10 text-balance">
          منظومة رقمية متكاملة تجمع بين <span className="text-[#FDE68A] font-semibold">التجارة الإلكترونية</span> و<span className="text-[#FB923C] font-semibold">السياحة والمغامرات الصحراوية</span> — صُممت لخدمة وتسهيل وصول سكان وزوار مدينة الألف قبة ونخيل وادي سوف.
        </p>

        {/* شريط البحث المركزي (Global Search Bar) */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl md:rounded-3xl p-3 sm:p-5 shadow-2xl relative border border-[#E5A93C]/35">
          {/* تبويبات النطاقات الفرعية (الكل، سوق الوادي، سياحة وادنا) */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4 overflow-x-auto pb-1 no-scrollbar text-xs sm:text-sm font-medium">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md shadow-[#D97706]/30 font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white hover:bg-black/50'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              الكل
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('souq')}
              className={`px-4 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'souq'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#140C07] shadow-md shadow-[#F59E0B]/30 font-bold'
                  : 'bg-black/35 text-white/70 hover:text-white hover:bg-black/50'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-[#FBBF24]" />
              سوق الوادي
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('ouedna-tour')}
              className={`px-4 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'ouedna-tour'
                  ? 'bg-gradient-to-r from-[#EA580C] to-[#C2410C] text-white shadow-md shadow-[#EA580C]/35 font-semibold'
                  : 'bg-black/35 text-white/70 hover:text-white hover:bg-black/50'
              }`}
            >
              <Palmtree className="w-3.5 h-3.5 text-[#FB923C]" />
              سياحة وادنا
            </button>
          </div>

          {/* حقل البحث والأزرار */}
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[#120B06]/90 border border-[#E5A93C]/40 rounded-xl sm:rounded-2xl p-1.5 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/30 transition-all">
            <div className="flex items-center flex-1 px-3 py-1">
              {isLoadingResults ? (
                <Loader2 className="w-5 h-5 text-[#F59E0B] shrink-0 ml-2.5 animate-spin" />
              ) : (
                <Search className="w-5 h-5 text-[#F59E0B] shrink-0 ml-2.5" />
              )}
              
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={
                  activeTab === 'souq'
                    ? 'ابحث في سوق الوادي: دقلة نور، سيارات صحراوية، عقارات...'
                    : activeTab === 'ouedna-tour'
                    ? 'ابحث في منصة وادنا السياحية: رحلات سفاري، مبيت الكثبان...'
                    : 'ابحث في خدمات وتجارة وسياحة وادنا (Supabase Live)...'
                }
                className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base outline-none font-medium"
              />
              
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    if (onSearchQueryChange) onSearchQueryChange('', activeTab);
                  }}
                  className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="مسح البحث"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={handleTriggerSearch}
              className="bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#1A1008] font-bold text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-lg shadow-[#D97706]/40 hover:shadow-[#F59E0B]/50 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>بحث فوري</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* قائمة النتائج الحية المنسدلة للبحث */}
          {(isSearchFocused || searchQuery.length > 0) && (
            <div className="mt-3 text-right bg-[#180E08]/95 border border-[#E5A93C]/30 rounded-xl p-3 max-h-72 overflow-y-auto text-sm animate-in fade-in-50 duration-200">
              <div className="flex items-center justify-between text-xs text-white/50 px-2 pb-2 border-b border-white/10 mb-2">
                <span>استعلامات البحث الحية ({filteredResults.length})</span>
                <button 
                  type="button"
                  onClick={() => setIsSearchFocused(false)} 
                  className="hover:text-white text-xs underline cursor-pointer"
                >
                  إغلاق
                </button>
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-6 text-white/60">
                  <p>لم نجد نتائج مطابقة لـ &quot;{searchQuery}&quot;</p>
                  <p className="text-xs text-[#FBBF24] mt-1">جرّب البحث عن: &quot;تمور دقلة نور&quot;، أو &quot;مخيم وادنا&quot;</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredResults.map((item) => (
                    <a
                      key={item.id}
                      href={item.url || `https://${item.subdomain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-[#F59E0B]/15 border border-transparent hover:border-[#F59E0B]/30 transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <div className="text-right">
                        <p className="font-semibold text-white text-sm group-hover:text-[#FBBF24] transition-colors">
                          {item.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-white/60 mt-1">
                          <span className="text-[#FBBF24] font-medium">{item.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#10B981]" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40">
                          {item.badge}
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FBBF24] transition-colors" />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* الكلمات المفتاحية الأكثر رواجاً */}
          <div className="mt-3.5 flex items-center justify-center flex-wrap gap-2 text-xs">
            <span className="text-white/60 flex items-center gap-1 font-medium">
              <Flame className="w-3.5 h-3.5 text-[#F97316]" />
              الأكثر طلباً:
            </span>
            {popularTags.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchQuery(tag.text);
                  setActiveTab(tag.tab);
                  setIsSearchFocused(true);
                  if (onSearchQueryChange) onSearchQueryChange(tag.text, tag.tab);
                }}
                className="px-2.5 py-1 rounded-lg bg-black/35 hover:bg-[#F59E0B]/20 text-[#FDE68A]/90 hover:text-white border border-[#E5A93C]/20 transition-all cursor-pointer"
              >
                #{tag.text}
              </button>
            ))}
          </div>
        </div>

        {/* مؤشرات المنظومة الرقمية السريعة */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-12">
          <div className="glass-card rounded-xl p-3.5 text-center border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-[#FBBF24]">1,450+</div>
            <div className="text-xs text-white/70 mt-0.5">متجر وإعلان نشط</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-[#34D399]">30 بلدية</div>
            <div className="text-xs text-white/70 mt-0.5">تغطية شاملة لولاية الوادي</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-[#FB923C]">بوابتان مركزيتان</div>
            <div className="text-xs text-white/70 mt-0.5">سوق الوادي وسياحة وادنا</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center border border-white/10">
            <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">100% سريعة</div>
            <div className="text-xs text-white/70 mt-0.5">مهيأة لربط Supabase API</div>
          </div>
        </div>
      </div>
    </section>
  );
};
