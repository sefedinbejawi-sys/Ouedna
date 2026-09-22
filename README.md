# 🌴 وادنا (Ouedna) — البوابة الرقمية الذكية لولاية الوادي
> **الرابط الرسمي:** [myeloued.com](https://myeloued.com)

منظومة ويب رقمية متكاملة مصممة خصيصاً لولاية الوادي (مدينة الألف قبة - وادي سوف)، تجمع بين الخدمات التجارية والسياحية لربط سكان وزوار الولاية بكافة الأنشطة والفعاليات عبر واجهة فائقة السرعة ومتجاوبة 100% مع الهواتف الذكية.

---

## 🏛️ البوابات المركزية للمنظومة

1. **سوق الوادي** (`https://souq.myeloued.com`)
   - أكبر منصة تجارة إلكترونية وإعلانات مبوبة محلية.
   - بيع وشراء تمور دقلة نور بالجملة والتجزئة مباشرة من مزارع الغيطان.
   - سوق السيارات ومركبات الدفع الرباعي 4x4 المناسبة للمسارات الصحراوية.
   - عقارات، بساتين نخيل، ومنازل بقباب سوفية أصيلة.

2. **منصة وادنا السياحية** (`https://ouedna.myeloued.com/`)
   - حجز رحلات السفاري الاستكشافية بين الكثبان الرملية العالية.
   - حجز الخيام الصحراوية والمبيت العائلي في مخيمات وادي سوف.
   - تأجير سيارات 4x4 ودراجات الكثبان (Quad) مع مرشدين محليين.
   - زيارة الغيطان التاريخية وحصاد التمور.

---

## 🚀 التقنيات المستخدمة (Tech Stack)

- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Motion & Interactions:** [Motion](https://motion.dev/)
- **Design Concept:** هوية بصرية صحراوية مستوحاة من رمال وغروب شمس وادي سوف مع تأثيرات زجاجية (Glassmorphism).

---

## 🛠️ التثبيت والتشغيل محلياً (Local Setup)

```bash
# 1. استنساخ المستودع
git clone https://github.com/sefedinbejawi-sys/Ouedna.git
cd Ouedna

# 2. تثبيت الحزم والمكتبات
npm install

# 3. تشغيل خادم التطوير المحلي
npm run dev

# 4. بناء المشروع للإنتاج (Production Build)
npm run build
```

---

## ☁️ النشر على منصة Vercel (Deployment)

تم تهيئة المشروع بملف `.npmrc` لتفادي أي تعارضات في الحزم أثناء بناء Vercel:
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

---

## 📄 الترخيص (License)
Apache-2.0 License - منصة وادنا © 2026.
