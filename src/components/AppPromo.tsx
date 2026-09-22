import React, { useState } from 'react';
import { 
  Bell, 
  Map, 
  Zap, 
  ShieldCheck, 
  Download, 
  QrCode, 
  Smartphone, 
  Star,
  Check,
  Sparkles,
  Search,
  Compass
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
      description: 'استكشف صحراء وادي سوف، المعالم التاريخية لمدينة الألف قبة، والمخيمات حتى في المناطق ذات التغطية الضعيفة.',
      gradient: 'from-[#10B981] to-[#047857]',
      icon: Map
    },
    {
      title: 'نشر وتصفح إعلاناتك بلمسة واحدة',
      description: 'صوّر سلعتك، حدد بلديتك، وانشر إعلانك مجاناً ليصل لآلاف المشترين من سكان وزوار الولاية مع خيار الاتصال المباشر.',
      gradient: 'from-[#F97316] to-[#DC2626]',
      icon: Zap
    },
    {
      title: 'دليل شامل لمدارس الدعم ومكتبات سوف',
      description: 'فضاء متكامل للطلبة والأولياء مع إشعارات الامتحانات الرسمية ومواعيد الدروس والمحاضرات الجامعية.',
      gradient: 'from-[#0284C7] to-[#0369A1]',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="app-promo" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#170E08] border-t border-[#E5A93C]/15 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#EA580C]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#F59E0B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Features & Download Buttons */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2A160C] border border-[#F59E0B]/30 text-[#FDE68A] text-xs font-semibold mb-4">
                <Smartphone className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>تطبيق وادنا للهواتف الذكية</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                ولاية الوادي بين يديك.. أينما كنت وفي أي وقت
              </h2>

              <p className="text-base sm:text-lg text-white/75 font-normal leading-relaxed">
                حمّل تطبيق &quot;وادنا&quot; الخفيف والسريع، وتمتع بتجربة تصفح سلسة تجمع خدمات سوق الوادي، دليل سوف 360، والخدمات المدرسية مع توفير استهلاك بيانات الهاتف.
              </p>
            </div>

            {/* Gradient Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat, index) => {
                const IconComponent = feat.icon;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-2xl glass-card border border-[#E5A93C]/20 hover:border-[#F59E0B]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feat.gradient} p-2 flex items-center justify-center text-white shadow-md`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold text-white text-sm sm:text-base leading-tight">
                        {feat.title}
                      </h4>
                    </div>
                    <p className="text-xs text-white/65 leading-relaxed pr-1">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Download Buttons & Rating */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#download-android"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQrModal(true);
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#211309] to-[#2D1A0D] border border-[#E5A93C]/40 hover:border-[#F59E0B] text-white shadow-lg transition-all group cursor-pointer"
              >
                {/* Android / Play Store Icon */}
                <div className="w-7 h-7 flex items-center justify-center text-[#34D399]">
                  <Download className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/60">تحميل مباشر لنظام</div>
                  <div className="text-sm font-bold text-white">Google Play (أندرويد)</div>
                </div>
              </a>

              <a
                href="#download-ios"
                onClick={(e) => {
                  e.preventDefault();
                  setShowQrModal(true);
                }}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#211309] to-[#2D1A0D] border border-[#E5A93C]/40 hover:border-[#F59E0B] text-white shadow-lg transition-all group cursor-pointer"
              >
                {/* iOS / App Store Icon */}
                <div className="w-7 h-7 flex items-center justify-center text-[#38BDF8]">
                  <Smartphone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/60">متاح قريباً على</div>
                  <div className="text-sm font-bold text-white">App Store (آيفون)</div>
                </div>
              </a>

              <button
                onClick={() => setShowQrModal(true)}
                className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-semibold"
                title="مسح رمز الاستجابة السريعة QR"
              >
                <QrCode className="w-5 h-5 text-[#F59E0B]" />
                <span className="hidden sm:inline">مسح QR</span>
              </button>
            </div>

            {/* Quick Rating Badge */}
            <div className="flex items-center gap-3 text-xs text-white/70 pt-1">
              <div className="flex items-center gap-1 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-white">4.9 / 5</span>
              <span>•</span>
              <span>تقييم مستخدمي وادي سوف</span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Mobile App Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
              {/* Outer Golden Aura */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#F59E0B]/30 via-[#EA580C]/20 to-[#059669]/20 rounded-[50px] blur-2xl" />

              {/* Smartphone Frame */}
              <div className="relative rounded-[45px] bg-[#0A0503] border-[6px] border-[#381F10] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-2 inset-x-0 z-30 flex justify-center">
                  <div className="w-24 h-4 bg-black rounded-full flex items-center justify-end px-3">
                    <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  </div>
                </div>

                {/* Simulated Screen Content */}
                <div className="bg-[#140C07] text-white pt-8 pb-6 px-4 min-h-[580px] flex flex-col justify-between select-none">
                  {/* App Screen Header */}
                  <div>
                    <div className="flex items-center justify-between py-2 border-b border-white/10 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 rounded-lg bg-[#F59E0B] flex items-center justify-center text-[#140C07] font-black text-xs">
                          و
                        </div>
                        <span className="font-extrabold text-sm tracking-tight text-white">وادنا</span>
                      </div>
                      <span className="text-[10px] text-[#34D399] font-medium bg-[#064E3B]/60 px-2 py-0.5 rounded-full border border-[#10B981]/30">
                        ولاية الوادي
                      </span>
                    </div>

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
                    <div className="grid grid-cols-3 gap-1.5 text-center mb-3">
                      <div className="p-2 rounded-lg bg-[#2A160C] border border-[#F59E0B]/30">
                        <div className="text-xs font-bold text-[#FBBF24]">السوق</div>
                        <div className="text-[9px] text-white/60">بيع واشتري</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0F281E] border border-[#10B981]/30">
                        <div className="text-xs font-bold text-[#34D399]">سياحة 360</div>
                        <div className="text-[9px] text-white/60">الغيطان</div>
                      </div>
                      <div className="p-2 rounded-lg bg-[#0F2333] border border-[#38BDF8]/30">
                        <div className="text-xs font-bold text-[#38BDF8]">التعليم</div>
                        <div className="text-[9px] text-white/60">البكالوريا</div>
                      </div>
                    </div>

                    {/* Simulated Live Feed Items */}
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-white/60 flex items-center justify-between">
                        <span>أحدث الإعلانات اليوم:</span>
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
                          <div className="text-xs font-semibold text-white">جولة الغيطان والكثبان (عائلي)</div>
                          <div className="text-[9px] text-white/50">سياحة سوف 360 • حجز متاح</div>
                        </div>
                        <span className="text-[10px] font-bold text-[#34D399]">مؤكد</span>
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
                      <Compass className="w-3.5 h-3.5 mb-0.5" />
                      <span>الخريطة</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Smartphone className="w-3.5 h-3.5 mb-0.5" />
                      <span>حسابي</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* QR Code Download Modal */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in-50">
          <div className="bg-[#1A0E08] border border-[#F59E0B]/40 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center relative shadow-2xl">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            <div className="w-12 h-12 rounded-2xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center mx-auto mb-4 border border-[#F59E0B]/40">
              <QrCode className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">امسح للتحميل السريع</h3>
            <p className="text-xs text-white/70 mb-5">
              وجّه كاميرا هاتفك نحو الرمز لتحميل تطبيق &quot;وادنا&quot; مباشرة على هاتفك الذكي (Android / iOS).
            </p>

            {/* Stylized QR Vector Graphic */}
            <div className="p-4 bg-white rounded-2xl inline-block shadow-inner mx-auto mb-5">
              <div className="w-44 h-44 bg-[#140C07] rounded-lg p-2.5 flex flex-col justify-between">
                <div className="flex justify-between">
                  <div className="w-10 h-10 border-4 border-[#F59E0B] rounded-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#F59E0B] rounded-xs" />
                  </div>
                  <div className="w-10 h-10 border-4 border-[#F59E0B] rounded-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#F59E0B] rounded-xs" />
                  </div>
                </div>
                <div className="flex items-center justify-center text-[#F59E0B] font-black text-xs">
                  وادنا • myeloued.com
                </div>
                <div className="flex justify-between items-end">
                  <div className="w-10 h-10 border-4 border-[#F59E0B] rounded-md flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#F59E0B] rounded-xs" />
                  </div>
                  <div className="grid grid-cols-2 gap-1 w-10 h-10">
                    <div className="bg-[#10B981] rounded-xs" />
                    <div className="bg-[#F59E0B] rounded-xs" />
                    <div className="bg-[#F59E0B] rounded-xs" />
                    <div className="bg-[#38BDF8] rounded-xs" />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowQrModal(false)}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#140C07] font-bold text-sm shadow-md"
            >
              تم، العودة للصفحة
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
