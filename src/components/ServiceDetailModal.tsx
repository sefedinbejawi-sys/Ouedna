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
  Palmtree
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in-50">
      <div className="relative w-full max-w-2xl bg-[#180E08] border border-[#E5A93C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-1.5 rounded-full text-white/50 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="إغلاق"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-black/40 border border-[#E5A93C]/30 flex items-center justify-center text-[#F59E0B]">
            {service.id === 'souq' && <Store className="w-6 h-6 text-[#FBBF24]" />}
            {service.id === 'ouedna-tour' && <Palmtree className="w-6 h-6 text-[#FB923C]" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-black text-white">{service.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-white/10 font-mono text-[#FDE68A]">
                {service.subdomain}
              </span>
            </div>
            <p className="text-xs text-white/60">{service.badge}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/80 leading-relaxed mb-6 bg-white/5 p-4 rounded-2xl border border-white/10">
          {service.description}
        </p>

        {/* Features / Capabilities */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-bold text-[#FBBF24] uppercase tracking-wider">
            أبرز الخدمات والأقسام المتاحة:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-white/80 p-2.5 rounded-xl bg-[#120B06] border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Note */}
        <div className="p-3 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-xs text-[#FDE68A] flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#F59E0B]" />
            <span>يغطي كامل بلديات ودوائر ولاية الوادي الثلاثين</span>
          </div>
          <span className="font-bold text-white text-[11px]">{service.metrics}</span>
        </div>

        {/* Action Button: Direct visit */}
        <div className="flex items-center gap-3">
          <a
            href={service.link}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F59E0B] via-[#E5A93C] to-[#D97706] text-[#140C07] font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>زيارة البوابة المباشرة ({service.subdomain})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
