/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  MapPin, 
  Store,
  Compass
} from 'lucide-react';
import { ServiceCard } from '../types';

interface ServiceDetailModalProps {
  service: ServiceCard | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ 
  service, 
  onClose
}) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
    >
      <div className="relative w-full max-w-xl bg-[#160D07] border border-[#E5A93C]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl my-6">
        
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-1.5 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* رأس النافذة */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-xl bg-black/40 border border-[#E5A93C]/30 flex items-center justify-center text-[#F59E0B] shrink-0">
            {service.id === 'souq' ? (
              <Store className="w-6 h-6 text-[#FBBF24]" />
            ) : (
              <Compass className="w-6 h-6 text-[#FB923C]" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 id="modal-service-title" className="text-xl font-black text-white">
                {service.name}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-[#FDE68A]" dir="ltr">
                {service.subdomain}
              </span>
            </div>
            <p className="text-xs text-white/60">{service.badge}</p>
          </div>
        </div>

        {/* الوصف الرسمي */}
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5 bg-white/5 p-3.5 rounded-xl border border-white/10">
          {service.description}
        </p>

        {/* أبرز الخدمات والأنشطة */}
        <div className="space-y-2.5 mb-5">
          <h4 className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">
            المجالات والخدمات المغطاة:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {service.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-white/85 p-2 rounded-lg bg-[#100804] border border-white/5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* التغطية الجغرافية */}
        <div className="p-3 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-xs text-[#FDE68A] flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
            <span>تغطية شاملة لجميع بلديات ودوائر ولاية الوادي</span>
          </div>
          <span className="font-semibold text-[#34D399]">منصة نشطة</span>
        </div>

        {/* زر الانتقال المباشر */}
        <a
          href={service.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E5A93C] to-[#D97706] text-[#140C07] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>زيارة المنصة الرسمية الآن</span>
          <ExternalLink className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
