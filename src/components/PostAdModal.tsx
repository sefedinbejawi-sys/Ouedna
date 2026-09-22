import React, { useState } from 'react';
import { 
  X, 
  Store, 
  Compass, 
  GraduationCap, 
  MapPin, 
  CheckCircle, 
  Upload, 
  Sparkles,
  Phone,
  Tag
} from 'lucide-react';
import { MUNICIPALITIES } from '../data/mockData';

interface PostAdModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostAdModal: React.FC<PostAdModalProps> = ({ isOpen, onClose }) => {
  const [selectedDomain, setSelectedDomain] = useState<'souq' | 'tour' | 'edu'>('souq');
  const [adTitle, setAdTitle] = useState('');
  const [adPrice, setAdPrice] = useState('');
  const [adMunicipality, setAdMunicipality] = useState(MUNICIPALITIES[0]);
  const [adPhone, setAdPhone] = useState('');
  const [adDescription, setAdDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setAdTitle('');
    setAdPrice('');
    setAdPhone('');
    setAdDescription('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in-50">
      <div className="relative w-full max-w-xl bg-[#180E08] border border-[#E5A93C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-1.5 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center mx-auto border border-[#10B981]/40">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-white">تم استلام إعلانك بنجاح!</h3>

            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              تم نشر إعلانك على منصة <span className="text-[#FBBF24] font-semibold">{selectedDomain === 'souq' ? 'سوق الوادي' : selectedDomain === 'tour' ? 'دليل سوف 360' : 'الخدمات المدرسية'}</span> لبلدية <span className="text-white font-medium">{adMunicipality}</span>. سيظهر لآلاف المتابعين فوراً.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-right text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-white/60">
                <span>عنوان الإعلان:</span>
                <span className="font-bold text-white">{adTitle || 'إعلان بدون عنوان'}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>رقم التواصل:</span>
                <span className="font-mono text-white">{adPhone || 'غير محدد'}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>النطاق الفرعي:</span>
                <span className="text-[#F59E0B] font-mono">
                  {selectedDomain === 'souq' ? 'souq.myeloued.com' : selectedDomain === 'tour' ? 'tour.myeloued.com' : 'edu.myeloued.com'}
                </span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#140C07] font-bold text-sm shadow-lg cursor-pointer"
            >
              العودة للمنصة
            </button>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F59E0B]/15 border border-[#F59E0B]/30 text-[#FDE68A] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>خدمة مجانية لأبناء الولاية</span>
              </div>
              <h3 className="text-2xl font-black text-white">أضف إعلانك في منظومة &quot;وادنا&quot;</h3>
              <p className="text-xs text-white/65 mt-1">
                اختر البوابة المناسبة وانشر إعلانك ليصل لكافة سكان وبلديات وادي سوف.
              </p>
            </div>

            {/* Choose Portal / Subdomain */}
            <div>
              <label className="block text-xs font-bold text-white/80 mb-2">
                اختر البوابة المستهدفة:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedDomain('souq')}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                    selectedDomain === 'souq'
                      ? 'bg-[#F59E0B]/20 border-[#F59E0B] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <Store className={`w-5 h-5 ${selectedDomain === 'souq' ? 'text-[#FBBF24]' : ''}`} />
                  <span className="text-xs font-bold">سوق الوادي</span>
                  <span className="text-[10px] opacity-60 hidden sm:inline">بيع واشتري</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDomain('tour')}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                    selectedDomain === 'tour'
                      ? 'bg-[#059669]/20 border-[#10B981] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <Compass className={`w-5 h-5 ${selectedDomain === 'tour' ? 'text-[#34D399]' : ''}`} />
                  <span className="text-xs font-bold">دليل سوف 360</span>
                  <span className="text-[10px] opacity-60 hidden sm:inline">سياحة وفنادق</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedDomain('edu')}
                  className={`p-3 rounded-xl border text-right transition-all flex flex-col items-center sm:items-start gap-1 cursor-pointer ${
                    selectedDomain === 'edu'
                      ? 'bg-[#0284C7]/20 border-[#38BDF8] text-white shadow-md'
                      : 'bg-white/5 border-white/10 text-white/60 hover:text-white'
                  }`}
                >
                  <GraduationCap className={`w-5 h-5 ${selectedDomain === 'edu' ? 'text-[#38BDF8]' : ''}`} />
                  <span className="text-xs font-bold">الخدمات المدرسية</span>
                  <span className="text-[10px] opacity-60 hidden sm:inline">دروس ومكتبات</span>
                </button>
              </div>
            </div>

            {/* Title & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-white/80 mb-1">
                  عنوان الإعلان *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={adTitle}
                    onChange={(e) => setAdTitle(e.target.value)}
                    placeholder="مثال: تمور دقلة نور 50 صندوق، سيارة هيليكس، مخيم..."
                    className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  السعر (دج)
                </label>
                <input
                  type="text"
                  value={adPrice}
                  onChange={(e) => setAdPrice(e.target.value)}
                  placeholder="مثال: 50,000"
                  className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Municipality & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  البلدية في ولاية الوادي *
                </label>
                <div className="relative">
                  <select
                    value={adMunicipality}
                    onChange={(e) => setAdMunicipality(e.target.value)}
                    className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none appearance-none cursor-pointer"
                  >
                    {MUNICIPALITIES.map((mun, idx) => (
                      <option key={idx} value={mun} className="bg-[#180E08] text-white">
                        {mun}
                      </option>
                    ))}
                  </select>
                  <MapPin className="w-4 h-4 text-[#F59E0B] absolute left-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">
                  رقم الهاتف للتواصل *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={adPhone}
                    onChange={(e) => setAdPhone(e.target.value)}
                    placeholder="06 XX XX XX XX"
                    className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none text-right transition-colors"
                  />
                  <Phone className="w-4 h-4 text-white/40 absolute left-3 top-3" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">
                تفاصيل الإعلان
              </label>
              <textarea
                rows={3}
                value={adDescription}
                onChange={(e) => setAdDescription(e.target.value)}
                placeholder="صف السلعة، الموقع بدقة، أو تفاصيل الخدمة..."
                className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E5A93C] to-[#D97706] text-[#140C07] font-bold text-sm shadow-lg shadow-[#D97706]/40 hover:shadow-[#F59E0B]/60 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Tag className="w-4 h-4" />
                <span>نشر الإعلان الآن مجاناً</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
