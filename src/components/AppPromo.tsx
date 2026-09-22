import React, { useState } from 'react';
import { 
  Bell, 
  Map, 
  Download, 
  QrCode, 
  Smartphone, 
  Star, 
  Check, 
  Sparkles, 
  Search, 
  Palmtree, 
  ShieldCheck 
} from 'lucide-react';

export const AppPromo: React.FC = () => {
  const [showQrModal, setShowQrModal] = useState(false);

  const features = [
    {
      title: 'إشعارات لحظية لأسعار السوق والتمور',
      description: 'كن أول من يعلم بأسعار جني دقلة نور، عروض المركبات والعقارات الجديدة في أسواق ولاية الوادي الأسبوعية.',
      gradient: 'from-[#F59E0B] to-[#EA580C]',
      icon: Bell
    },
    {
      title: 'خرائط ومسارات الغيطان والكثبان (بدون إنترنت)',
      description: 'استكشف صحراء وادي سوف، المعالم التاريخية لمدينة الألف قبة، ومواقع المخيمات حتى في المناطق ذات التغطية الضعيفة.',
      gradient: 'from-[#10B981] to-[#047857]',
      icon: Map
    },
    {
      title: 'حجوزات رحلات ومخيمات وادنا السياحية',
      description: 'احجز مباشرة خيمتك الصحراوية، برامج رحلات 4x4، وأنشطة التزلج على الرمال السوفية بسهولة وأمان.',
      gradient: 'from-[#FB923C] to-[#EA580C]',
      icon: Palmtree
    },
    {
      title: 'بوابة موثوقة وآمنة بكامل بلديات الولاية',
      description: 'ربط مباشر بين سكان وزوار بلديات وادي سوف الثلاثين مع تحديث مستمر للخدمات والأنشطة.',
      gradient: 'from-[#D97706] to-[#B45309]',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="app-promo" className="relative py-16 sm:py-24 px-3 sm:px-6 lg:px-8 bg-[#170E08] border-t border-[#E5A93C]/15 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Features & Download Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-right">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A160C] border border-[#F59E0B]/30 text-[#FDE68A] text-xs font-semibold mb-4">
                <Smartphone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>تطبيق وادنا الذكي قريباً على أندرويد و iOS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                كل خدمات وادي سوف.. <br />
                <span className="bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#EA580C] bg-clip-text text-transparent">
                  في راحة يدك بضغطة زر
                </span>
              </h2>

              <p className="mt-3 sm:mt-4 text-xs sm:text-base text-white/70 leading-relaxed max-w-xl mx-auto lg:mx-0">
                حمّل تطبيق &quot;وادنا&quot; وتمتع بتجربة استثنائية لمتابعة أسعار التمور وسوق السيارات، وحجز رحلات السفاري والمخيمات بين رمال الكثبان الذهبية حتى في غياب شبكة الإنترنت.
              </p>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-right">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#1F1209]/80 border border-white/5 hover:border-[#F59E0B]/30 transition-all group"
                  >
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${item.gradient} p-2 flex items-center justify-center text-white mb-2.5 shadow-md`}>
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FBBF24] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-white/60 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* App Store / Google Play Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#download-android"
                onClick={(e) => {
                  e.preventDefault();
                  alert('التطبيق قيد الإطلاق الرسمي على متجر Google Play! يمكنك تصفح المنصة مباشرة عبر المتصفح.');
                }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/80 hover:bg-black border border-white/15 text-white transition-all hover:scale-[1.02] shadow-lg shadow-black/40"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#34D399]">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.99 1.99 0 0 1-.61-.913V2.727c.18-.362.39-.681.61-.913zm11.235 11.238l2.257 2.257-11.479 6.626 9.222-8.883zm0-2.104L5.622 2.065l11.48 6.627-2.258 2.256zm1.458 1.052l3.411 1.97a1.442 1.442 0 0 1 0 2.496l-3.411 1.97-2.008-2.008 2.008-2.028z"/>
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-white/60 leading-tight">متاح قريباً على</div>
                  <div className="text-xs font-bold font-sans">Google Play</div>
                </div>
              </a>

              <a
                href="#download-ios"
                onClick={(e) => {
                  e.preventDefault();
                  alert('التطبيق قيد المراجعة في متجر App Store! منصة وادنا متوافقة بالكامل مع هواتف الآيفون.');
                }}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/80 hover:bg-black border border-white/15 text-white transition-all hover:scale-[1.02] shadow-lg shadow-black/40"
              >
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-white">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1 .08 2.05-.51 2.68-1.26z"/>
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-[9px] text-white/60 leading-tight">تحميل من متجر</div>
                  <div className="text-xs font-bold font-sans">App Store</div>
                </div>
              </a>

              {/* QR Code Quick Scanner Button */}
              <button
                type="button"
                onClick={() => setShowQrModal(true)}
                className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <QrCode className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>مسح (QR)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[280px] sm:w-[320px] aspect-[9/19] rounded-[44px] p-3 bg-gradient-to-b from-[#451A03] via-[#241309] to-[#120B06] border-[6px] border-[#3D1E0C] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              
              {/* Phone Speaker & Dynamic Island Mock */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1F1F1F] mr-4" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#12284C]" />
              </div>

              {/* Inside Screen Content */}
              <div className="w-full h-full rounded-[34px] bg-[#140B06] overflow-hidden pt-8 px-3 pb-4 flex flex-col justify-between border border-white/5 relative z-20">
                
                {/* Simulated Screen Top Header */}
                <div>
                  <div className="flex items-center justify-between text-white/60 text-[10px] px-1 mb-3">
                    <span className="font-semibold text-white">09:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-2 bg-white/80 rounded-sm" />
                    </div>
                  </div>

                  {/* App In-Screen Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="text-right">
                      <span className="text-[10px] text-white/50 block">منصة وادنا الذكية</span>
                      <h4 className="text-xs font-black text-[#FBBF24]">مدينة الألف قبة</h4>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/40 flex items-center justify-center text-xs font-bold text-[#FDE68A]">
                      سوف
                    </div>
                  </div>

                  {/* App Screen Body */}
                  <div className="mt-3">
                    {/* App Hero Mini Card */}
                    <div className="rounded-xl p-3 bg-gradient-to-r from-[#B45309] to-[#78350F] text-right mb-3 shadow-md">
                      <p className="text-[10px] text-[#FEF08A] font-medium">مرحباً بك في وادي سوف</p>
                      <h5 className="text-xs font-black text-white mt-0.5">سوق التمور والكثبان الذهبية</h5>
                      <div className="mt-2 flex items-center gap-1 text-[9px] bg-black/30 w-fit px-2 py-0.5 rounded-md">
                        <Sparkles className="w-2.5 h-2.5 text-[#FDE68A]" />
                        <span>جني تمور 2026 متاح الآن</span>
                      </div>
                    </div>

                    {/* App Category Pills */}
                    <div className="grid grid-cols-2 gap-2 text-center mb-3">
                      <div className="p-2 rounded-lg bg-[#2A160C] border border-[#F59E0B]/30">
                        <div className="text-xs font-bold text-[#FBBF24]">سوق الوادي</div>
                        <div className="text-[9px] text-white/60">بيع وشراء فوري</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#2E1408] border border-[#FB923C]/35">
                        <div className="text-xs font-bold text-[#FB923C]">سياحة وادنا</div>
                        <div className="text-[9px] text-white/60">كثبان ومخيمات</div>
                      </div>
                    </div>

                    {/* Simulated Live Feed Items */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-white/60 flex items-center justify-between">
                        <span>أحدث المعاملات اليوم:</span>
                        <span className="text-[#FBBF24]">عرض الكل</span>
                      </div>

                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="text-right">
                          <div className="text-xs font-semibold text-white">دقلة نور درجة أولى 50كغ</div>
                          <div className="text-[9px] text-white/50">بلدية حاسي خليفة • منذ 15 دقيقة</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#FBBF24]">650 دج/كغ</span>
                      </div>

                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                        <div className="text-right">
                          <div className="text-xs font-semibold text-white">مخيم الكثبان الذهبية (عائلي)</div>
                          <div className="text-[9px] text-white/50">سياحة وادنا • حجز متاح</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#FB923C]">مؤكد</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* App Bottom Navigation Bar Mock */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-around text-white/60 text-[10px]">
                  <div className="flex flex-col items-center text-[#F59E0B]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mb-1" />
                    <span>الرئيسية</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Search className="w-3.5 h-3.5 mb-0.5" />
                    <span>بحث</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Palmtree className="w-3.5 h-3.5 mb-0.5" />
                    <span>سياحة</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Glowing Backdrop behind Phone */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#F59E0B]/20 via-[#EA580C]/20 to-transparent blur-3xl -z-10" />
          </div>

        </div>
      </div>

      {/* QR Code Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1C1007] border border-[#E5A93C]/40 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">امسح لتجربة وادنا</h3>
            <p className="text-xs text-white/60 mb-6">امسح الكود بكاميرا هاتفك لفتح المنصة مباشرة دون تحميل</p>

            <div className="bg-white p-4 rounded-2xl w-48 h-48 mx-auto flex items-center justify-center shadow-inner">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#140C07]">
                <path fill="currentColor" d="M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z" />
                <path fill="currentColor" d="M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z" />
                <path fill="currentColor" d="M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z" />
                <rect x="40" y="10" width="8" height="15" fill="currentColor" />
                <rect x="52" y="15" width="8" height="20" fill="currentColor" />
                <rect x="40" y="45" width="20" height="8" fill="currentColor" />
                <rect x="45" y="70" width="12" height="18" fill="currentColor" />
                <rect x="70" y="45" width="15" height="10" fill="currentColor" />
                <rect x="75" y="65" width="20" height="8" fill="currentColor" />
                <rect x="85" y="80" width="10" height="15" fill="currentColor" />
              </svg>
            </div>

            <p className="text-xs font-mono text-[#FBBF24] mt-4 font-bold">myeloued.com</p>

            <button
              type="button"
              onClick={() => setShowQrModal(false)}
              className="mt-6 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
