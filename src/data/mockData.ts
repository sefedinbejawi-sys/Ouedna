/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * ملف البيانات المحدث لمنظومة وادنا (myeloued.com)
 * تم حذف "دليل سوف السياحي" والمنصة الأكاديمية "الخدمات المدرسية"
 * والتركيز على البوابتين الأساسيتين:
 * 1. سوق الوادي (souq.myeloued.com)
 * 2. منصة وادنا السياحية (ouedna.myeloued.com)
 */

import { ServiceCard, SearchResult, Sponsor } from '../types';

/**
 * مصفوفة بيانات المنظومة والنطاقات الفرعية الرسمية لولاية الوادي
 */
export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'souq',
    subdomain: 'souq.myeloued.com',
    name: 'سوق الوادي',
    badge: 'منصة التجارة الإلكترونية الأولى بالولاية',
    description: 'أكبر فضاء تجاري رقمي يجمع تجار وفلاحي وادي سوف؛ بيع وشراء تمور دقلة نور الفاخرة، السيارات الصحراوية، العقارات، والمواشي مع تواصل مباشر وآمن.',
    theme: 'gold',
    icon: 'ShoppingBag',
    highlights: [
      'سوق تمور دقلة نور بالجملة والتجزئة من مزارع الغيطان مباشرة',
      'سوق المركبات وسيارات الدفع الرباعي 4x4 المناسبة للمسارات الصحراوية',
      'عقارات، أراضي فلاحية، بساتين نخيل، ومنازل قباب سوفية أصيلة',
      'حرف وصناعات تقليدية كزرابي وادي سوف ومنتجات النخيل الطبيعية'
    ],
    metrics: '+1,450 إعلان نشط هذا الأسبوع',
    ctaText: 'دخول سوق الوادي',
    link: 'https://souq.myeloued.com',
    gradientBg: 'from-[#D97706]/15 via-[#B45309]/10 to-transparent',
    borderColor: 'border-[#F59E0B]/40',
    glowClass: 'glass-card-amber'
  },
  {
    id: 'ouedna-tour',
    subdomain: 'ouedna.myeloued.com',
    name: 'منصة وادنا السياحية',
    badge: 'بوابة الحجوزات والمغامرات الصحراوية',
    description: 'المنصة السياحية المتخصصة في تنظيم الرحلات الاستكشافية، تأجير سيارات الدفع الرباعي، حجز برامج التخييم بين الكثبان وتجارب العيش في واحات وادي سوف.',
    theme: 'desert',
    icon: 'Palmtree',
    highlights: [
      'باقات سياحية متكاملة للأفراد والعائلات والوفود السياحية الدولية',
      'حجز مباشر لخيام الكثبان الذهبية وليالي السمر والموسيقى السوفية',
      'تأجير سيارات 4x4 والدراجات الرباعية (Quad) مع مرشدين محليين محترفين',
      'زيارات ميدانية لغيطان النخيل وتجربة جني التمور وتذوق الأكلات الشعبية'
    ],
    metrics: '+45 جولة استكشافية ومخيم نشط',
    ctaText: 'دخول منصة وادنا السياحية',
    link: 'https://ouedna.myeloued.com/',
    gradientBg: 'from-[#EA580C]/15 via-[#C2410C]/10 to-transparent',
    borderColor: 'border-[#FB923C]/40',
    glowClass: 'glass-card-desert'
  }
];

/**
 * بيانات البحث التوضيحية الافتراضية الجاهزة للاستبدال باستعلامات Supabase الحية
 */
export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'تمور دقلة نور طبيعية درجة أولى (جني الموسم من الغيطان)',
    category: 'سوق الوادي - تمور',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية حاسي خليفة',
    date: 'منذ ساعتين',
    badge: 'عرض فلاحي',
    url: 'https://souq.myeloued.com'
  },
  {
    id: '2',
    title: 'مخيم الكثبان الذهبية - رحلة استكشافية ومبيت عائلي',
    category: 'منصة وادنا السياحية',
    subdomain: 'ouedna.myeloued.com',
    location: 'بلدية كوينين',
    date: 'حجز فوري',
    badge: 'سياحة وادنا',
    url: 'https://ouedna.myeloued.com/'
  },
  {
    id: '3',
    title: 'منزل تقليدي بقباب سوفية أصيلة للبيع أو الكراء السياحي',
    category: 'سوق الوادي - عقارات',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية قمار',
    date: 'أمس',
    badge: 'عقار سوفي',
    url: 'https://souq.myeloued.com'
  },
  {
    id: '4',
    title: 'رحلة سفاري بالدفع الرباعي 4x4 بين الكثبان العالية',
    category: 'منصة وادنا السياحية',
    subdomain: 'ouedna.myeloued.com',
    location: 'بلدية الرقيبة',
    date: 'متاح للحجز',
    badge: 'مغامرات صحراوية',
    url: 'https://ouedna.myeloued.com/'
  },
  {
    id: '5',
    title: 'تويوتا هيلوكس 4x4 مهيأة للرحلات الصحراوية والكثبان',
    category: 'سوق الوادي - سيارات',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية الدبيلة',
    date: 'منذ 3 ساعات',
    badge: 'مركبات 4x4',
    url: 'https://souq.myeloued.com'
  }
];

export const SPONSORS: Sponsor[] = [
  {
    id: 'ccis',
    name: 'غرفة التجارة والصناعة "سوف"',
    subtitle: 'الشريك الاقتصادي الأول لترقية التجارة والاستثمار بالولاية',
    category: 'اقتصاد وتجارة'
  },
  {
    id: 'tourism-board',
    name: 'مديرية السياحة والصناعة التقليدية',
    subtitle: 'ترقية وتطوير الوجهة السياحية والتراثية لمدينة الألف قبة',
    category: 'سياحة وتراث'
  },
  {
    id: 'dates-group',
    name: 'مجمع مزارعي ومصدري دقلة نور',
    subtitle: 'أجود تمور العالم من نخيل رمال وادي سوف الذهبية',
    category: 'فلاحة وإنتاج'
  },
  {
    id: 'heritage-assn',
    name: 'جمعية حماية وترقية الغيطان والتراث',
    subtitle: 'صون الإرث الفلاحي والتاريخي لغيطان وادي سوف الفريدة',
    category: 'تراث وثقافة'
  },
  {
    id: 'univ-eloued',
    name: 'جامعة الشهيد حمه لخضر - الوادي',
    subtitle: 'الحاضنة الأكاديمية والبحثية والابتكار التكنولوجي بالولاية',
    category: 'تعليم عالي'
  }
];

export const MUNICIPALITIES = [
  'الوادي (عاصمة الولاية)',
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
