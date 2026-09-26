import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand & Mission (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 font-black text-lg">
                ق
              </div>
              <span className="text-xl font-black text-white">
                القمة للمقاولات والديكور
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              شركة رائدة ومتخصصة في تقديم حلول متكاملة للمقاولات العامة، التصميم الداخلي والمعماري، والتشطيبات الفاخرة وتسليم المفتاح في المملكة العربية السعودية.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-emerald-400 hover:bg-emerald-950 hover:border-emerald-700 transition-colors"
                title="واتساب"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="tel:+966500000000"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-amber-400 hover:bg-amber-950 hover:border-amber-700 transition-colors"
                title="اتصال"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              أقسام الموقع
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-amber-400 transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">خدمات التصميم والتنفيذ</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">معرض سابقة المشاريع</a></li>
              <li><a href="#before-after" className="hover:text-amber-400 transition-colors">مقارنة قبل وبعد</a></li>
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">حاسبة التكلفة التقديرية</a></li>
              <li><a href="#quality" className="hover:text-amber-400 transition-colors">معايير الجودة والضمان</a></li>
            </ul>
          </div>

          {/* Services Quick list */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              خدماتنا الرئيسية
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تشطيبات فلل وقصور ديلوكس</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تصميم معماري وداخلي 3D</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">أعمال المقاولات العامة والعظم</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تكسيات رخام وأخشاب جدارية</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تنسيق لاندسكيب ومسابح</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">تجهيز وتشطيب مقرات تجارية</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              بيانات التواصل
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2 text-stone-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>الرياض، طريق الملك فهد</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-mono dir-ltr">+966 50 000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>info@alqimma-decor.sa</span>
              </div>
              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">
                  <Shield className="w-3 h-3" />
                  <span>سجل تجاري وترخيص هندسي معتمد</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar with Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} شركة القمة للمقاولات والديكور.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-stone-300 cursor-pointer">الشروط والأحكام</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-stone-400 hover:text-amber-400 transition-colors"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
