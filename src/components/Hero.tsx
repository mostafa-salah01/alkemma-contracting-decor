import React from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Ruler, Building, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_luxury_interior_1790450309959.jpg"
          alt="صالون وتصميم معماري داخلي فاخر - القمة للمقاولات والديكور"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter brightness-75"
        />
        {/* Measured Scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/40 to-stone-950/90 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Subtitle trust note (unboxed text without pill badge) */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider text-amber-400 mb-6 uppercase">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>الريادة في التصميم المعماري والتشطيبات الفاخرة وتسليم المفتاح</span>
        </div>

        {/* Balanced Headline (no orphan words) */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-tight lg:leading-tight max-w-4xl mx-auto mb-6 [text-wrap:balance]">
          نبني الرؤية الهندسية.. ونُجسد الفخامة بأعلى معايير الإتقان
        </h1>

        {/* Concrete Value Proposition */}
        <p className="text-base sm:text-lg lg:text-xl text-stone-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          شركة القمة للمقاولات والديكور تجمع بين روعة الابتكار المعماري ودقة التنفيذ الإنشائي.
          نقدم حلولاً متكاملة لتصميم وتشطيب الفلل، القصور، والمشاريع التجارية مع ضمان هيكلي معتمد وإشراف يومي متواصل.
        </p>

        {/* Primary Action Zone */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 active:scale-95 flex items-center justify-center gap-3 whitespace-nowrap"
          >
            <span>طلب عرض سعر واستشارة مجانية</span>
            <ArrowLeft className="w-5 h-5" />
          </button>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-800 border border-stone-700/80 rounded-lg backdrop-blur-sm transition-all duration-200 whitespace-nowrap"
          >
            استعراض المشاريع السابقة
          </a>
        </div>

        {/* Claim-to-Proof Quantitative Adjacency Bar (Unboxed Metadata Discipline) */}
        <div className="pt-8 border-t border-stone-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-4xl mx-auto">
          
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              +14
            </div>
            <div className="text-xs sm:text-sm font-medium text-stone-300">
              عاماً من الخبرة والتميز الإنشائي
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              +380
            </div>
            <div className="text-xs sm:text-sm font-medium text-stone-300">
              مشروعاً سكنياً وتجارياً تم تسليمه
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              100%
            </div>
            <div className="text-xs sm:text-sm font-medium text-stone-300">
              تطابق مع التصاميم ثلاثية الأبعاد
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
              10 سنوات
            </div>
            <div className="text-xs sm:text-sm font-medium text-stone-300">
              ضمان معتمد على الهيكل والعوازل
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
