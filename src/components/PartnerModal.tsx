import React, { useState } from 'react';
import { X, Handshake, CheckCircle2 } from 'lucide-react';
import { MUNICIPALITIES } from '../data/mockData';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [entityName, setEntityName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [partnerType, setPartnerType] = useState('تجاري / تاجر تمور وسلع');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEntityName('');
    setContactName('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in-50">
      <div className="relative w-full max-w-lg bg-[#180E08] border border-[#E5A93C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-1.5 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 text-[#34D399] flex items-center justify-center mx-auto border border-[#10B981]/40">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-black text-white">شكراً لاهتمامك بالشراكة!</h3>
            <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
              تم استلام طلب اعتماد مؤسستكم في منصة &quot;وادنا&quot;. سيتواصل معكم فريق العلاقات العامة خلال 24 ساعة.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#140C07] font-bold text-sm shadow-lg cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center border border-[#F59E0B]/40">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">انضم كشريك رسمي</h3>
                <p className="text-xs text-white/60">لفنادق، مدارس، تجار ومؤسسات ولاية الوادي</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">اسم المؤسسة أو المحل أو النشاط *</label>
              <input
                type="text"
                required
                value={entityName}
                onChange={(e) => setEntityName(e.target.value)}
                placeholder="مثال: فندق الألف قبة، تعاونية تمور سوف، مدرسة النور..."
                className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">نوع النشاط</label>
                <select
                  value={partnerType}
                  onChange={(e) => setPartnerType(e.target.value)}
                  className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
                >
                  <option value="تجاري / تاجر تمور وسلع">تجاري (سوق الوادي)</option>
                  <option value="سياحي / فندق أو مخيم">سياحي (سوف 360)</option>
                  <option value="تعليمي / مدرسة دعم">تعليمي (الخدمات المدرسية)</option>
                  <option value="مؤسسة أو جمعية">مؤسسة أو جمعية محلية</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/80 mb-1">رقم الهاتف *</label>
                <input
                  type="tel"
                  required
                  dir="ltr"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="06 XX XX XX XX"
                  className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none text-right"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-white/80 mb-1">اسم المسؤول للتواصل</label>
              <input
                type="text"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                placeholder="الاسم واللقب..."
                className="w-full bg-[#120B06] border border-white/15 focus:border-[#F59E0B] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-[#140C07] font-bold text-sm shadow-lg cursor-pointer mt-2"
            >
              إرسال طلب الشراكة
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
