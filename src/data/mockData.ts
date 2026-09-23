/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * البيانات الرسمية لمنظومة وبوابات وادنا الرقمية (myeloued.com)
 * خالية تماماً من الأرقام أو الإحصائيات الوهمية أو البيانات المفتعلة.
 */

import { ServiceCard, SearchResult } from '../types';

/**
 * بوابات المنظومة الرقمية الرسمية المرتبطة بالنطاق الأساسي myeloued.com
 */
export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'souq',
    subdomain: 'souq.myeloued.com',
    name: 'سوق الوادي',
    badge: 'بوابة التجارة والإعلانات',
    description: 'الفضاء الرقمي التجاري المخصص لتجار وفلاحي وسكان وادي سوف؛ بيع وشراء تمور دقلة نور، المركبات والسيارات الصحراوية، العقارات، والمواشي مع تواصل مباشر.',
    theme: 'gold',
    icon: 'Store',
    highlights: [
      'سوق تمور دقلة نور من مزارع الغيطان مباشرة',
      'مركبات وسيارات الدفع الرباعي 4x4 المناسبة للمسارات الصحراوية',
      'عقارات، أراضي فلاحية، بساتين نخيل، ومنازل قباب سوفية',
      'حرف وصناعات تقليدية ومنتجات النخيل الطبيعية'
    ],
    status: 'active',
    ctaText: 'زيارة سوق الوادي',
    link: 'https://souq.myeloued.com',
    gradientBg: 'from-[#D97706]/15 via-[#B45309]/10 to-transparent',
    borderColor: 'border-[#F59E0B]/40',
    glowClass: 'glass-card-amber'
  },
  {
    id: 'ouedna-tour',
    subdomain: 'ouedna.myeloued.com',
    name: 'منصة وادنا السياحية',
    badge: 'بوابة الاستكشاف والسياحة',
    description: 'المنصة السياحية المتخصصة في تنظيم الرحلات الاستكشافية، تأجير سيارات الدفع الرباعي، حجز برامج التخييم بين الكثبان وتجارب العيش في واحات وادي سوف.',
    theme: 'desert',
    icon: 'Palmtree',
    highlights: [
      'برامج سياحية للأفراد والعائلات والوفود',
      'حجز خيام الكثبان الرملية والمبيت الصحراوي',
      'تأجير سيارات 4x4 والدراجات الرباعية (Quad) مع مرشدين',
      'زيارات ميدانية لغيطان النخيل وتجارب التراث السوفي'
    ],
    status: 'active',
    ctaText: 'زيارة منصة وادنا السياحية',
    link: 'https://ouedna.myeloued.com/',
    gradientBg: 'from-[#EA580C]/15 via-[#C2410C]/10 to-transparent',
    borderColor: 'border-[#FB923C]/40',
    glowClass: 'glass-card-desert'
  }
];

/**
 * خدمات وقطاعات البحث الاستدلالي في المنصتين الفعليتين
 */
export const SEARCH_INDEX: SearchResult[] = [
  {
    id: 'souq-dates',
    title: 'سوق تمور دقلة نور ومنتجات النخيل السوفية',
    category: 'سوق الوادي',
    subdomain: 'souq.myeloued.com',
    location: 'ولاية الوادي',
    badge: 'تجارة وفلاحة',
    url: 'https://souq.myeloued.com'
  },
  {
    id: 'souq-cars',
    title: 'سوق السيارات الصحراوية ومركبات 4x4',
    category: 'سوق الوادي',
    subdomain: 'souq.myeloued.com',
    location: 'ولاية الوادي',
    badge: 'سيارات ومركبات',
    url: 'https://souq.myeloued.com'
  },
  {
    id: 'souq-realestate',
    title: 'عقارات، بساتين النخيل، ومنازل القباب',
    category: 'سوق الوادي',
    subdomain: 'souq.myeloued.com',
    location: 'ولاية الوادي',
    badge: 'عقارات وأراضي',
    url: 'https://souq.myeloued.com'
  },
  {
    id: 'tour-safari',
    title: 'رحلات السفاري بالدفع الرباعي 4x4 بين الكثبان العالية',
    category: 'سياحة وادنا',
    subdomain: 'ouedna.myeloued.com',
    location: 'رمال وادي سوف',
    badge: 'مغامرات صحراوية',
    url: 'https://ouedna.myeloued.com/'
  },
  {
    id: 'tour-camping',
    title: 'حجز المخيمات الصحراوية والمبيت العائلي تحت النجوم',
    category: 'سياحة وادنا',
    subdomain: 'ouedna.myeloued.com',
    location: 'كثبان وادي سوف',
    badge: 'مخيمات وإقامة',
    url: 'https://ouedna.myeloued.com/'
  },
  {
    id: 'tour-ghout',
    title: 'جولات استكشاف غيطان النخيل والتراث الزراعي الفريد',
    category: 'سياحة وادنا',
    subdomain: 'ouedna.myeloued.com',
    location: 'واحات الوادي',
    badge: 'تراث وسياحة فلاحية',
    url: 'https://ouedna.myeloued.com/'
  }
];

/**
 * دوائر وبلديات ولاية الوادي (التقسيم الإداري الرسمي)
 */
export const DISTRICTS_AND_MUNICIPALITIES = [
  'الوادي',
  'قمار',
  'الدبيلة',
  'حاسي خليفة',
  'البياضة',
  'الرقيبة',
  'كوينين',
  'تغزوت',
  'المقرن',
  'الرباح',
  'النخلة',
  'العقلة',
  'الطريفاوي',
  'وادي العلندة',
  'سيدي عون',
  'بن قشة',
  'دوار الماء',
  'الطالب العربي',
  'أميه ونس',
  'حمار الجراد'
];
