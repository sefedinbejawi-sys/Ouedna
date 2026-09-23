import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50 font-sans text-gray-800 dir-rtl" dir="rtl">
      
      {/* شريط التنقل العلوي - نظيف وبسيط */}
      <nav className="bg-white/70 backdrop-blur-md fixed w-full z-50 shadow-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-700">وادنا</h1>
          <a href="mailto:contact@myeloued.com" className="text-sm text-gray-600 hover:text-amber-600 font-medium transition-colors">تواصل معنا</a>
        </div>
      </nav>

      {/* الواجهة الرئيسية - تعبر عن الهدف الحقيقي للموقع */}
      <header className="relative pt-36 pb-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 drop-shadow-sm">
          المنصة الذكية لولاية الوادي
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          بوابتك الرقمية الموثوقة للوصول المباشر إلى كافة الخدمات المحلية، من التجارة والتسوق إلى الدليل السياحي التفاعلي والمنصات التعليمية.
        </p>
      </header>

      {/* شبكة الخدمات الحقيقية فقط */}
      <main className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* بطاقة سوق الوادي */}
          <a href="https://souq.myeloued.com" target="_blank" rel="noopener noreferrer" 
             className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm border border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">سوق وادنا</h3>
            <p className="text-gray-600 leading-relaxed">
              منصة الإعلانات المحلية الشاملة في الوادي. بيع واشتري كل ما تحتاجه بكل سهولة وأمان.
            </p>
          </a>

          {/* بطاقة الدليل السياحي */}
          <a href="https://ouedna.myeloued.com" target="_blank" rel="noopener noreferrer"
             className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm border border-emerald-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">دليل سوف السياحي</h3>
            <p className="text-gray-600 leading-relaxed">
               استكشف معالم الوادي، وتجول عبر الخرائط التفاعلية (سوف 360) بكل دقة.
            </p>
          </a>

          {/* بطاقة المنصات التعليمية */}
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-sm border border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">الخدمات المدرسية</h3>
            <p className="text-gray-600 leading-relaxed">
              منصات تعليمية مخصصة (قِرائتي وكتابي) لدعم أولياء الأمور والطلاب في تنظيم الحقيبة وتبادل الكتب. <span className="text-blue-600 font-bold text-sm">(قريباً)</span>
            </p>
          </div>

        </div>
      </main>

      {/* التذييل */}
      <footer className="bg-white/50 backdrop-blur-md py-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 font-medium">© {new Date().getFullYear()} منصة وادنا. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
