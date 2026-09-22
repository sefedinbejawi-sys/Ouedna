import { ServiceCard, SearchResult, Sponsor } from '../types';

export const SERVICES_DATA: ServiceCard[] = [
  {
    id: 'souq',
    subdomain: 'souq.myeloued.com',
    name: 'سوق الوادي',
    badge: 'التجارة الإلكترونية الأولى بالولاية',
    description: 'بيع واشتري في وادي سوف. أكبر سوق إلكتروني يجمع تجار التمور، السيارات، العقارات والمواشي والسلع اليومية.',
    theme: 'gold',
    icon: 'ShoppingBag',
    highlights: [
      'سوق تمور دقلة نور الفاخرة بالجملة والتجزئة',
      'سوق المركبات والسيارات الصحراوية بالولاية',
      'عقارات، بساتين نخيل، ومنازل تقليدية وعصرية',
      'حرف تقليدية وزرابي سوف الأصيلة ومستلزمات البيت'
    ],
    metrics: '+1,450 إعلان نشط هذا الأسبوع',
    ctaText: 'دخول سوق الوادي',
    link: 'https://souq.myeloued.com',
    gradientBg: 'from-[#D97706]/15 via-[#B45309]/10 to-transparent',
    borderColor: 'border-[#F59E0B]/40',
    glowClass: 'glass-card-amber'
  },
  {
    id: 'tourism',
    subdomain: 'tour.myeloued.com',
    name: 'دليل سوف السياحي (سوف 360)',
    badge: 'سياحة الواحات والكثبان والغيطان',
    description: 'اكتشف الكثبان والغيطان والواحات. جولات افتراضية 360 درجة، حجز المخيمات الصحراوية، وأسرار مدينة الألف قبة.',
    theme: 'emerald',
    icon: 'Compass',
    highlights: [
      'الغيطان المعلقة: نظام زراعة النخيل الفريد عالمياً',
      'كثبان الرمال الذهبية وسياحة المغامرات والتخييم',
      'معالم مدينة الألف قبة، الزوايا العتيقة والأسواق الشعبية',
      'دليل الفنادق، الإقامات الريفية، والمطاعم السوفية التقليدية'
    ],
    metrics: '+85 مسار سياحي وموقع تراثي',
    ctaText: 'استكشف سوف 360',
    link: 'https://tour.myeloued.com',
    gradientBg: 'from-[#059669]/15 via-[#047857]/10 to-transparent',
    borderColor: 'border-[#10B981]/40',
    glowClass: 'glass-card-emerald'
  },
  {
    id: 'edu',
    subdomain: 'edu.myeloued.com',
    name: 'الخدمات المدرسية والتعليمية',
    badge: 'البوابة الأكاديمية الشاملة',
    description: 'منصات متخصصة لدعم الطلاب والأساتذة. دليل مدارس الدعم، فضاء امتحانات البكالوريا والتعليم المتوسط، ومكتبات الولاية.',
    theme: 'amber',
    icon: 'GraduationCap',
    highlights: [
      'دليل مراكز ومدارس الدعم المدرسي عبر كل البلديات',
      'بنك مواضيع وملخصات شهادة البكالوريا والبيام (BEM)',
      'فضاء التوجيه الجامعي والتنسيق مع جامعة حمه لخضر',
      'عناوين المكتبات ومحلات بيع الكتب والأدوات المدرسية'
    ],
    metrics: '+320 مدرسة ومركز تعليمي مسجل',
    ctaText: 'دخول البوابة التعليمية',
    link: 'https://edu.myeloued.com',
    gradientBg: 'from-[#38BDF8]/15 via-[#0284C7]/10 to-transparent',
    borderColor: 'border-[#38BDF8]/40',
    glowClass: 'glass-card-sky'
  }
];

export const MOCK_SEARCH_RESULTS: SearchResult[] = [
  {
    id: '1',
    title: 'تمور دقلة نور طبيعية درجة أولى (جني الموسم)',
    category: 'سوق الوادي - التمور',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية حاسي خليفة',
    date: 'منذ ساعتين',
    badge: 'عرض حصري'
  },
  {
    id: '2',
    title: 'مخيم الكثبان الذهبية السياحي - مبيت وتخييم صحراوي',
    category: 'دليل سوف السياحي',
    subdomain: 'tour.myeloued.com',
    location: 'بلدية كوينين',
    date: 'متاح للحجز',
    badge: 'سياحة 360'
  },
  {
    id: '3',
    title: 'دورة مكثفة لمراجعة الرياضيات - بكالوريا 2026',
    category: 'الخدمات المدرسية',
    subdomain: 'edu.myeloued.com',
    location: 'وسط مدينة الوادي',
    date: 'التسجيل مفتوح',
    badge: 'تعليم'
  },
  {
    id: '4',
    title: 'منزل تقليدي بقباب سوفية أصيلة للبيع أو الكراء',
    category: 'سوق الوادي - العقارات',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية قمار',
    date: 'أمس',
    badge: 'عقار'
  },
  {
    id: '5',
    title: 'زيارة مرشدة لغيطان النخيل الفريدة المدرجة بالتراث العالمي',
    category: 'دليل سوف السياحي',
    subdomain: 'tour.myeloued.com',
    location: 'بلدية تغزوت',
    date: 'نهاية الأسبوع',
    badge: 'تراث سوف'
  },
  {
    id: '6',
    title: 'تويوتا هيلوكس 4x4 بحالة ممتازة للصحراء',
    category: 'سوق الوادي - السيارات',
    subdomain: 'souq.myeloued.com',
    location: 'بلدية الدبيلة',
    date: 'منذ 3 ساعات',
    badge: 'مركبات'
  }
];

export const SPONSORS: Sponsor[] = [
  {
    id: 'ccis',
    name: 'غرفة التجارة والصناعة "سوف"',
    subtitle: 'الشريك الاقتصادي الأول لولاية الوادي',
    category: 'اقتصاد وتجارة'
  },
  {
    id: 'tourism-board',
    name: 'مديرية السياحة والصناعة التقليدية',
    subtitle: 'ترقية وتطوير الوجهة السياحية لوادي سوف',
    category: 'سياحة وتراث'
  },
  {
    id: 'dates-group',
    name: 'مجمع مزارعي ومصدري دقلة نور',
    subtitle: 'أجود تمور العالم من رمال وادي سوف',
    category: 'فلاحة وإنتاج'
  },
  {
    id: 'heritage-assn',
    name: 'جمعية حماية وترقية الغيطان والتراث',
    subtitle: 'صون الإرث الفلاحي والتاريخي لمدينة الألف قبة',
    category: 'تراث وثقافة'
  },
  {
    id: 'univ-eloued',
    name: 'جامعة الشهيد حمه لخضر - الوادي',
    subtitle: 'الحاضنة الأكاديمية والبحثية والابتكار',
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
