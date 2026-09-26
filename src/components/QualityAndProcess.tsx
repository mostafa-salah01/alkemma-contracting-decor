import React from 'react';
import { 
  ClipboardCheck, 
  PenTool, 
  FileSignature, 
  HardHat, 
  KeyRound, 
  ShieldCheck, 
  Award, 
  FileCheck2, 
  CheckCircle2 
} from 'lucide-react';

export const QualityAndProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'المعاينة الميدانية ورفع المقاسات',
      desc: 'يقوم مهندسونا بزيارة الموقع وأخذ الرفوعات الليزرية الدقيقة وتحديد احتياجات ورغبات العميل الفنية والجمالية.',
      icon: ClipboardCheck
    },
    {
      step: '02',
      title: 'التصميم المعماري وجداول الكميات',
      desc: 'إعداد مناظير 3D واقعية، اختيار الخامات، وتجهيز جدول حصر كميات تفصيلي (BOQ) دقيق بدون أي بنود خفية.',
      icon: PenTool
    },
    {
      step: '03',
      title: 'العقد الهندسي والجدول الزمني',
      desc: 'صياغة عقد رسمي موثق يحدد مراحل الدفعات المالية المرتبطة بنسب الإنجاز وجدول زمني ملزم بغرامات تأخير.',
      icon: FileSignature
    },
    {
      step: '04',
      title: 'التنفيذ والإشراف الهندسي اليومي',
      desc: 'متابعة حية من مهندسي الموقع، تقارير دورية مدعمة بالصور ومقاطع الفيديو ترسل أسبوعياً للعميل خطوة بخطوة.',
      icon: HardHat
    },
    {
      step: '05',
      title: 'الفحص النهائي وتسليم المفتاح',
      desc: 'معاينة شاملة وفق قائمة تدقيق الجودة (Snag List)، تنظيف شامل للمشروع، وتسليم شهادات الضمان المعتمدة.',
      icon: KeyRound
    }
  ];

  return (
    <section id="quality" className="py-24 bg-stone-900/60 border-t border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
            منهجية العمل الهندسية الصارمة
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            كيف نحول حلمك المعماري إلى واقع ملموس؟
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            نعتمد في شركة القمة على دورة تنفيذية متقنة تضمن وضوح كافة التفاصيل وتفادي أي مفاجآت أو هدر في الوقت والتكاليف.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.step} 
                className="relative bg-stone-950/80 border border-stone-800 p-6 rounded-2xl flex flex-col justify-between group hover:border-amber-500/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-mono font-black text-amber-400">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-900 text-[11px] text-amber-500/80 font-medium">
                  المرحلة {index + 1} من 5
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Commitments & Warranties Banner */}
        <div className="bg-stone-950 border border-stone-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                <ShieldCheck className="w-4 h-4" />
                <span>ضمانات القمة الرسمية المعتمدة</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 [text-wrap:balance]">
                راحة بالك وأمان استثمارك أولويتنا المطلقة
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed mb-6 font-normal">
                لا نكتفي بتسليم مشاريع متقنة فقط، بل نقدم وثائق ضمان معتمدة تضمن استدامة أعمالنا لسنوات طويلة مع خدمات متابعة وصيانة ما بعد التسليم.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-start gap-3.5">
                <Award className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">10 سنوات ضمان إنشائي</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">ضمان شامل ومكتوب على سلامة الهياكل الخرسانية وأعمال العزل المائي والحراري.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-start gap-3.5">
                <FileCheck2 className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">عقود رسمية ملزمة</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">جداول كميات دقيقة دون أي تكاليف مستترة مع شرط جزائي عن أي تأخير زمني.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-start gap-3.5">
                <CheckCircle2 className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">اختبارات جودة معتمدة</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">اختبارات ضغط السباكة بالنيتروجين واختبارات قياس عزل الكهرباء قبل إغلاق الأسقف.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800/80 flex items-start gap-3.5">
                <HardHat className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">كوادر هندسية مصنفة</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">إشراف وتنفيذ بأيدي مهندسين معماريين وإنشائيين مرخصين من الهيئة السعودية للمهندسين.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
