import React, { useState } from 'react';
import { Search, Sparkles, MapPin, X, ArrowLeft, Store, Compass, GraduationCap, Flame } from 'lucide-react';
import { MOCK_SEARCH_RESULTS } from '../data/mockData';
import { SearchResult } from '../types';

interface DesertHeroProps {
  onSelectService: (serviceId: string) => void;
  onOpenPostAd: () => void;
}

export const DesertHero: React.FC<DesertHeroProps> = ({ onSelectService, onOpenPostAd }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'souq' | 'tour' | 'edu'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter search results based on query and active category
  const filteredResults: SearchResult[] = MOCK_SEARCH_RESULTS.filter((item) => {
    const matchesQuery = searchQuery.trim() === '' || 
      item.title.includes(searchQuery) || 
      item.location.includes(searchQuery) ||
      item.category.includes(searchQuery);

    if (activeTab === 'all') return matchesQuery;
    if (activeTab === 'souq') return matchesQuery && item.subdomain.includes('souq');
    if (activeTab === 'tour') return matchesQuery && item.subdomain.includes('tour');
    if (activeTab === 'edu') return matchesQuery && item.subdomain.includes('edu');
    return matchesQuery;
  });

  const popularTags = [
    { text: 'تمور دقلة نور', tab: 'souq' as const },
    { text: 'رحلات الكثبان والغيطان', tab: 'tour' as const },
    { text: 'عقارات وقباب سوف', tab: 'souq' as const },
    { text: 'مراجعة البكالوريا', tab: 'edu' as const },
    { text: 'تويوتا هيلوكس', tab: 'souq' as const },
    { text: 'مخيمات صحراوية 360', tab: 'tour' as const },
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* 1. Dynamic Moving Sunset Background Gradient */}
      <div 
        className="absolute inset-0 z-0 animate-sunset-shift pointer-events-none opacity-95"
        style={{
          background: 'linear-gradient(135deg, #1C0F08 0%, #381A0B 25%, #66260C 50%, #B45309 75%, #E5A93C 90%, #F59E0B 100%)',
        }}
      />

      {/* Atmospheric Warm Desert Sun Glow */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[340px] md:w-[620px] h-[340px] md:h-[620px] bg-gradient-to-b from-[#F59E0B]/50 via-[#EA580C]/40 to-transparent rounded-full animate-sun-glow pointer-events-none" />

      {/* Radiant Sun Disk */}
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-t from-[#FBBF24] via-[#F59E0B] to-[#FEF3C7] blur-[1px] opacity-90 shadow-[0_0_120px_45px_rgba(245,158,11,0.65)] pointer-events-none" />

      {/* Floating Golden Dust Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#FDE68A] animate-dust-1 blur-[1px]" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#F59E0B] animate-dust-2 blur-[1px]" />
        <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#FBBF24] animate-dust-1 blur-[0.5px]" />
        <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 rounded-full bg-[#FCD34D] animate-dust-2" />
      </div>

      {/* Multi-Layered SVG Dunes & Traditional Palms / Domes (Parallax Silhouette Effect) */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none z-10 leading-none select-none">
        {/* Layer 1: Distant Dunes & City of Thousand Domes silhouette */}
        <svg 
          viewBox="0 0 1440 260" 
          className="w-full h-auto text-[#2D1409]/80 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          {/* Subtle domes of El Oued */}
          <path d="M 0,260 L 0,160 Q 120,130 240,165 Q 360,190 480,140 Q 560,110 650,145 Q 740,170 850,135 Q 980,105 1100,150 Q 1240,185 1350,140 Q 1400,125 1440,145 L 1440,260 Z" />
          {/* Stylized domes peaks */}
          <path d="M 380,170 A 25,25 0 0 1 430,170 Z M 820,140 A 20,20 0 0 1 860,140 Z M 1150,150 A 28,28 0 0 1 1206,150 Z" className="fill-[#1A0A04]/60" />
        </svg>

        {/* Layer 2: Midground Golden Dune with Palms (الغيطان والنخيل السوفي) */}
        <svg 
          viewBox="0 0 1440 220" 
          className="w-full h-auto text-[#1F0C05]/95 fill-current -mb-1"
          preserveAspectRatio="none"
        >
          <path d="M 0,220 L 0,120 Q 200,50 420,115 Q 640,175 880,85 Q 1120,15 1340,95 Q 1390,110 1440,105 L 1440,220 Z" />
        </svg>

        {/* Layer 3: Foreground deep desert floor silhouette with date palms silhouettes */}
        <div className="relative w-full h-16 md:h-24 bg-[#120B06]">
          {/* Palm Trees vector highlights */}
          <div className="absolute -top-16 md:-top-24 right-6 md:right-24 w-28 md:w-44 text-[#120B06] opacity-95">
            <svg viewBox="0 0 100 100" fill="currentColor">
              {/* Palm trunk */}
              <path d="M 47,100 C 47,70 52,50 50,30 C 50,30 53,30 53,100 Z" />
              {/* Palm Fronds */}
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

      {/* Main Glassmorphism Content Area */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        {/* Official Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A160C]/70 backdrop-blur-md border border-[#F59E0B]/30 text-[#FDE68A] text-xs sm:text-sm font-medium mb-6 shadow-lg shadow-black/20">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>المنصة الذكية الموحدة لولاية الوادي</span>
          <span className="text-white/40">•</span>
          <span className="text-[#FBBF24] font-semibold">myeloued.com</span>
        </div>

        {/* H1 Heading with Glowing Gradient */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="block drop-shadow-md">وادنا..</span>
          <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#F97316] bg-clip-text text-transparent gold-text-glow">
            بوابتك الذكية لولاية الوادي
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FDF8F2]/90 leading-relaxed font-normal mb-8 md:mb-10 text-balance">
          منصة رقمية متكاملة تجمع بين <span className="text-[#FDE68A] font-medium">التجارة</span>، <span className="text-[#6EE7B7] font-medium">السياحة</span>، و<span className="text-[#7DD3FC] font-medium">التعليم</span> — صُممت لخدمة سكان وزوار مدينة الألف قبة ورمال وادي سوف الذهبية.
        </p>

        {/* Central Glassmorphism Global Search Box */}
        <div className="max-w-3xl mx-auto glass-card rounded-2xl md:rounded-3xl p-3 sm:p-5 shadow-2xl relative">
          {/* Ecosystem Domain Category Tabs */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 overflow-x-auto pb-1 no-scrollbar text-xs sm:text-sm font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#B45309] text-white shadow-md shadow-[#D97706]/30 font-semibold'
                  : 'bg-black/30 text-white/70 hover:text-white hover:bg-black/45'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
              الكل
            </button>
            <button
              onClick={() => setActiveTab('souq')}
              className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'souq'
                  ? 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white shadow-md shadow-[#F59E0B]/30 font-semibold'
                  : 'bg-black/30 text-white/70 hover:text-white hover:bg-black/45'
              }`}
            >
              <Store className="w-3.5 h-3.5 text-[#FBBF24]" />
              سوق الوادي
            </button>
            <button
              onClick={() => setActiveTab('tour')}
              className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'tour'
                  ? 'bg-gradient-to-r from-[#059669] to-[#047857] text-white shadow-md shadow-[#059669]/30 font-semibold'
                  : 'bg-black/30 text-white/70 hover:text-white hover:bg-black/45'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-[#34D399]" />
              دليل سوف 360
            </button>
            <button
              onClick={() => setActiveTab('edu')}
              className={`px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'edu'
                  ? 'bg-gradient-to-r from-[#0284C7] to-[#0369A1] text-white shadow-md shadow-[#0284C7]/30 font-semibold'
                  : 'bg-black/30 text-white/70 hover:text-white hover:bg-black/45'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#38BDF8]" />
              الخدمات المدرسية
            </button>
          </div>

          {/* Search Input Bar */}
          <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 bg-[#120B06]/85 border border-[#E5A93C]/40 rounded-xl sm:rounded-2xl p-1.5 focus-within:border-[#F59E0B] focus-within:ring-2 focus-within:ring-[#F59E0B]/30 transition-all">
            <div className="flex items-center flex-1 px-3 py-1">
              <Search className="w-5 h-5 text-[#F59E0B] shrink-0 ml-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                placeholder={
                  activeTab === 'souq'
                    ? 'ابحث عن تمور دقلة نور، سيارات، عقارات، سلع...'
                    : activeTab === 'tour'
                    ? 'ابحث عن مخيمات صحراوية، غيطان، معالم 360...'
                    : activeTab === 'edu'
                    ? 'ابحث عن مدارس الدعم، دروس البكالوريا، مراجع...'
                    : 'ابحث في كامل خدمات ومتاجر ولاية الوادي...'
                }
                className="w-full bg-transparent text-white placeholder:text-white/50 text-sm sm:text-base outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsSearchFocused(true)}
              className="bg-gradient-to-r from-[#F59E0B] via-[#D97706] to-[#B45309] hover:from-[#FBBF24] hover:to-[#D97706] text-[#1A1008] font-bold text-sm sm:text-base px-6 py-2.5 rounded-xl shadow-lg shadow-[#D97706]/40 hover:shadow-[#F59E0B]/50 transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <span>بحث فوري</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Search Dropdown Results Preview */}
          {(isSearchFocused || searchQuery.length > 0) && (
            <div className="mt-3 text-right bg-[#180E08]/95 border border-[#E5A93C]/30 rounded-xl p-3 max-h-72 overflow-y-auto text-sm animate-in fade-in-50 duration-200">
              <div className="flex items-center justify-between text-xs text-white/50 px-2 pb-2 border-b border-white/10 mb-2">
                <span>نتائج البحث الفورية ({filteredResults.length})</span>
                <button 
                  onClick={() => setIsSearchFocused(false)} 
                  className="hover:text-white text-xs underline cursor-pointer"
                >
                  إغلاق
                </button>
              </div>

              {filteredResults.length === 0 ? (
                <div className="text-center py-6 text-white/60">
                  <p>لم نجد نتائج مطابقة لـ &quot;{searchQuery}&quot;</p>
                  <p className="text-xs text-[#FBBF24] mt-1">جرّب البحث عن: &quot;تمور دقلة نور&quot;، &quot;مخيم&quot;، أو &quot;بكالوريا&quot;</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredResults.map((item) => (
                    <div
                      key={item.id}
                      className="p-2.5 rounded-lg bg-white/5 hover:bg-[#F59E0B]/15 border border-transparent hover:border-[#F59E0B]/30 transition-all flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        if (item.subdomain.includes('souq')) onSelectService('souq');
                        else if (item.subdomain.includes('tour')) onSelectService('tourism');
                        else onSelectService('edu');
                        setIsSearchFocused(false);
                      }}
                    >
                      <div>
                        <p className="font-semibold text-white text-sm">{item.title}</p>
                        <div className="flex items-center gap-3 text-xs text-white/60 mt-1">
                          <span className="text-[#FBBF24] font-medium">{item.category}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#10B981]" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40 shrink-0">
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Quick Trend Suggestions */}
          <div className="mt-3.5 flex items-center justify-center flex-wrap gap-2 text-xs">
            <span className="text-white/60 flex items-center gap-1 font-medium">
              <Flame className="w-3.5 h-3.5 text-[#F97316]" />
              الأكثر بحثاً:
            </span>
            {popularTags.map((tag, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSearchQuery(tag.text);
                  setActiveTab(tag.tab);
                  setIsSearchFocused(true);
                }}
                className="px-2.5 py-1 rounded-lg bg-black/35 hover:bg-[#F59E0B]/20 text-[#FDE68A]/90 hover:text-white border border-[#E5A93C]/20 transition-all cursor-pointer"
              >
                #{tag.text}
              </button>
            ))}
          </div>
        </div>

        {/* Live Quick Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-8 sm:mt-12">
          <div className="glass-card rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#FBBF24]">1,450+</div>
            <div className="text-xs text-white/70 mt-0.5">متجر وإعلان نشط</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#34D399]">30 بلدية</div>
            <div className="text-xs text-white/70 mt-0.5">تغطية شاملة لولاية الوادي</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#38BDF8]">3 بوابات</div>
            <div className="text-xs text-white/70 mt-0.5">سوق، سياحة، وتعليم</div>
          </div>
          <div className="glass-card rounded-xl p-3.5 text-center">
            <div className="text-xl sm:text-2xl font-black text-[#F97316]">100% مجانية</div>
            <div className="text-xs text-white/70 mt-0.5">لجميع أبناء وضيوف سوف</div>
          </div>
        </div>
      </div>
    </section>
  );
};
