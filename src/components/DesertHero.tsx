import React from 'react';

export default function DesertHero() {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('searchQuery');
    if (query) {
      // توجيه ذكي ومباشر إلى منصة السوق
      window.open(`https://souq.myeloued.com/search?q=${query}`, '_blank');
    }
  };

  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-amber-100 via-orange-100 to-amber-50">
      {/* تأثيرات دائرية للخلفية لمحاكاة شمس الغروب */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-orange-400 to-amber-300 rounded-full blur-3xl opacity-40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
          وادنا.. بوابتك الذكية لولاية الوادي
        </h1>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          منصة رقمية متكاملة تجمع بين التجارة المحلية، الخرائط السياحية، والخدمات التعليمية في مكان واحد.
        </p>

        {/* شريط بحث يوجه مباشرة للسوق */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-2 rounded-full shadow-lg border border-amber-200 flex items-center">
          <input 
            type="text" 
            name="searchQuery"
            placeholder="ابحث عن منتج أو خدمة في الوادي..." 
            className="w-full bg-transparent border-none outline-none px-6 text-gray-800 placeholder-gray-500 text-lg"
            required
          />
          <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
            بحث
          </button>
        </form>
      </div>
    </div>
  );
}
