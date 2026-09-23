import React from 'react';

export default function DesertHero() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('searchQuery');
    if (query) {
      window.open(`https://souq.myeloued.com/search?q=${query}`, '_blank');
    }
  };

  return (
    <div className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      
      {/* صورة خلفية احترافية للصحراء والغروب */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=2000&auto=format&fit=crop')" }}
      ></div>
      
      {/* طبقة تدرج لوني دافئة (Overlay) لدمج الصورة مع الموقع */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-amber-900/70 via-orange-900/50 to-gray-50/95"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          وادنا
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-amber-200 mb-8 drop-shadow-md">
          المنصة الذكية لولاية الوادي
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          بوابتك الرقمية الشاملة. اكتشف سوق الوادي، وتجول في المعالم السياحية، واستفد من الخدمات التعليمية في مكان واحد.
        </p>

        {/* شريط البحث الزجاجي (Glassmorphism) */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto bg-white/20 backdrop-blur-md p-2 rounded-full shadow-2xl border border-white/30 flex items-center transition-transform hover:scale-[1.02] duration-300">
          <input 
            type="text" 
            name="searchQuery"
            placeholder="ابحث عن منتج، خدمة، أو مكان..." 
            className="w-full bg-transparent border-none outline-none px-6 text-white placeholder-gray-100 text-lg"
            required
          />
          <button type="submit" className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
            بحث
          </button>
        </form>
      </div>
    </div>
  );
}
