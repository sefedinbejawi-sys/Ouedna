import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-amber-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* قسم الهوية والتعريف */}
          <div>
            <h3 className="text-2xl font-bold text-amber-700 mb-4">وادنا</h3>
            <p className="text-gray-600 leading-relaxed">
              المنصة الذكية لولاية الوادي. بوابتك الشاملة للوصول إلى الخدمات المحلية، التجارة، والسياحة في مكان واحد وبكل موثوقية.
            </p>
          </div>

          {/* قسم الروابط السريعة (المنصات الفعلية فقط) */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">منصاتنا</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://souq.myeloued.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-amber-600 transition-colors">
                  سوق وادنا للإعلانات
                </a>
              </li>
              <li>
                <a href="https://ouedna.myeloued.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-600 transition-colors">
                  دليل سوف السياحي (سوف 360)
                </a>
              </li>
              <li>
                <span className="text-gray-400 cursor-default">
                  الخدمات المدرسية (قريباً)
                </span>
              </li>
            </ul>
          </div>

          {/* قسم التواصل */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">تواصل معنا</h4>
            <p className="text-gray-600 mb-4">
              للاستفسارات أو الشراكات التجارية، يسعدنا تواصلكم عبر البريد الإلكتروني:
            </p>
            <a href="mailto:contact@myeloued.com" className="text-amber-600 font-medium hover:text-amber-700 transition-colors" dir="ltr">
              contact@myeloued.com
            </a>
          </div>

        </div>

        {/* حقوق النشر (محدثة تلقائياً برمجياً) */}
        <div className="pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-500 font-medium">
            © {new Date().getFullYear()} منصة وادنا (myeloued.com). جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
