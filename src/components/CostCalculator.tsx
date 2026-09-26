import React, { useState, useId } from 'react';
import { Calculator, ArrowLeft, Check, Sparkles, Clock, Shield, MessageSquare } from 'lucide-react';

interface CostCalculatorProps {
  onBookConsultation: (details: {
    propertyType: string;
    area: number;
    grade: string;
    estimatedCost: number;
  }) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ onBookConsultation }) => {
  const [propertyType, setPropertyType] = useState<string>('villa');
  const [area, setArea] = useState<number>(450);
  const [grade, setGrade] = useState<string>('super');
  const [include3D, setInclude3D] = useState<boolean>(true);
  const [includeSmartHome, setIncludeSmartHome] = useState<boolean>(true);
  const [includeCladding, setIncludeCladding] = useState<boolean>(true);
  const [includeLandscape, setIncludeLandscape] = useState<boolean>(false);
  const areaInputId = useId();

  // Pricing Matrix (SAR per m²)
  const gradeRates: Record<string, { base: number; label: string; desc: string; warranty: string }> = {
    standard: {
      base: 950,
      label: 'باقة لوكس الفاخرة',
      desc: 'مواد ممتازة، بورسلان إسباني، دهانات جوتن، أطقم جروهي، أسقف جبسية مستوية.',
      warranty: '5 سنوات ضمان'
    },
    super: {
      base: 1650,
      label: 'باقة سوبر ديلوكس VIP',
      desc: 'رخام طبيعي، تكسيات بديل خشب ورخام، إنارة مخفية مانعة للتوهج، تفاصيل هندسية راقية.',
      warranty: '10 سنوات ضمان'
    },
    royal: {
      base: 2800,
      label: 'باقة ألترا لاكشري الملكية',
      desc: 'رخام إيطالي ستاتوريو، أخشاب جوز أمريكي صولد، تصاميم حصرية خاصة، تكييف مخفي متطور.',
      warranty: '15 سنة ضمان شامل'
    }
  };

  // Property type multipliers
  const propertyMultipliers: Record<string, { rate: number; name: string; baseMonths: number }> = {
    villa: { rate: 1.0, name: 'فيلا سكنية مستقلة', baseMonths: 6 },
    apartment: { rate: 0.9, name: 'شقة فاخرة / بنتهاوس', baseMonths: 3.5 },
    office: { rate: 1.1, name: 'مقر إداري ومكاتب', baseMonths: 4 },
    commercial: { rate: 1.25, name: 'معرض تجاري / مطعم / عيادة', baseMonths: 5 }
  };

  const currentGrade = gradeRates[grade] || gradeRates.super;
  const currentProperty = propertyMultipliers[propertyType] || propertyMultipliers.villa;

  // Addons cost per m²
  let addonCostPerM2 = 0;
  if (include3D) addonCostPerM2 += 60;
  if (includeSmartHome) addonCostPerM2 += 120;
  if (includeCladding) addonCostPerM2 += 180;
  if (includeLandscape) addonCostPerM2 += 150;

  const totalRatePerM2 = Math.round((currentGrade.base + addonCostPerM2) * currentProperty.rate);
  const totalEstimatedCost = Math.round(totalRatePerM2 * area);

  // Approximate duration calculation
  const calculatedMonths = Math.max(
    2.5,
    Math.round(currentProperty.baseMonths + (area / 350) * 1.5)
  );

  const formatSAR = (amount: number) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `السلام عليكم ورحمة الله، قمت بحساب تقدير تكلفة عبر موقع القمة للمقاولات والديكور:\n` +
      `- نوع العقار: ${currentProperty.name}\n` +
      `- المساحة: ${area} م²\n` +
      `- باقة التشطيب: ${currentGrade.label}\n` +
      `- التكلفة التقديرية: حوالي ${formatSAR(totalEstimatedCost)} ريال سعودي\n` +
      `أرغب في حجز موعد لمعاينة الموقع واستلام مقايسة هندسية رسمية.`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-24 bg-stone-950 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Calculator className="w-4 h-4" />
            <span>شفافية تامة ودقة في التسعير</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            حاسبة التكلفة والمدة التقديرية لمشروعك
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            حدد مواصفات ومساحة عقارك للحصول على دراسة فورية لمتوسط التكلفة وجدول التنفيذ الزمني الموصى به.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-stone-900/60 border border-stone-800 p-6 sm:p-8 rounded-2xl space-y-8">
            
            {/* 1. Property Type */}
            <div>
              <label className="block text-sm font-bold text-stone-200 mb-3">
                1. نوع العقار المراد تنفيذه أو تشطيبه:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'villa', label: 'فيلا سكنية' },
                  { id: 'apartment', label: 'شقة / دوبلكس' },
                  { id: 'office', label: 'مكتب إداري' },
                  { id: 'commercial', label: 'تجاري / عيادة' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setPropertyType(type.id)}
                    className={`p-3 text-xs sm:text-sm font-semibold rounded-xl border text-center transition-all duration-150 ${
                      propertyType === type.id
                        ? 'bg-amber-400 text-stone-950 border-amber-400 shadow-md font-bold'
                        : 'bg-stone-950/70 border-stone-800 text-stone-300 hover:border-stone-700 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Area Range & Quick Select */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor={areaInputId} className="text-sm font-bold text-stone-200">
                  2. المساحة الإجمالية للمشروع:
                </label>
                <span className="text-base sm:text-lg font-black text-amber-400 font-mono tabular-nums">
                  {area} م²
                </span>
              </div>

              <input
                id={areaInputId}
                type="range"
                min="80"
                max="2000"
                step="20"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2.5 bg-stone-950 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />

              {/* Quick Select Buttons */}
              <div className="flex items-center justify-between gap-2 mt-3">
                {[150, 300, 500, 850, 1400].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setArea(preset)}
                    className={`px-2.5 py-1 text-xs rounded-md border font-mono tabular-nums transition-colors ${
                      area === preset
                        ? 'bg-stone-800 text-amber-300 border-amber-500/50'
                        : 'bg-stone-950/40 text-stone-400 border-stone-800 hover:text-white'
                    }`}
                  >
                    {preset} م²
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Finishing Grade Selection */}
            <div>
              <label className="block text-sm font-bold text-stone-200 mb-3">
                3. مستوى وباقة التشطيب المطلوبة:
              </label>
              <div className="space-y-3">
                {Object.entries(gradeRates).map(([key, data]) => {
                  const isSelected = grade === key;
                  return (
                    <div
                      key={key}
                      onClick={() => setGrade(key)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all duration-150 flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-amber-400/10 border-amber-500/80 shadow-md shadow-amber-500/5'
                          : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-amber-400 bg-amber-400' : 'border-stone-600'}`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-stone-950" />}
                          </div>
                          <span className={`text-sm font-bold ${isSelected ? 'text-amber-300' : 'text-stone-200'}`}>
                            {data.label}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 pr-6 leading-relaxed">
                          {data.desc}
                        </p>
                      </div>

                      <div className="text-left shrink-0">
                        <div className="text-xs font-mono tabular-nums font-bold text-stone-300">
                          تبدأ من {data.base} ر.س / م²
                        </div>
                        <div className="text-[10px] text-amber-400 font-medium">
                          {data.warranty}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Additional Add-ons */}
            <div>
              <label className="block text-sm font-bold text-stone-200 mb-3">
                4. خدمات وبنود إضافية مقترحة:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800 cursor-pointer hover:border-stone-700">
                  <input
                    type="checkbox"
                    checked={include3D}
                    onChange={(e) => setInclude3D(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-700 text-amber-500 focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-stone-300">تصاميم 3D ومخططات تنفيذية</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800 cursor-pointer hover:border-stone-700">
                  <input
                    type="checkbox"
                    checked={includeSmartHome}
                    onChange={(e) => setIncludeSmartHome(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-700 text-amber-500 focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-stone-300">تأسيس أنظمة ذكية Smart Home</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800 cursor-pointer hover:border-stone-700">
                  <input
                    type="checkbox"
                    checked={includeCladding}
                    onChange={(e) => setIncludeCladding(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-700 text-amber-500 focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-stone-300">تكسيات رخام طبيعي وخشب جداري</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl bg-stone-950/60 border border-stone-800 cursor-pointer hover:border-stone-700">
                  <input
                    type="checkbox"
                    checked={includeLandscape}
                    onChange={(e) => setIncludeLandscape(e.target.checked)}
                    className="w-4 h-4 rounded border-stone-700 text-amber-500 focus:ring-amber-500 accent-amber-500"
                  />
                  <span className="text-xs text-stone-300">تنسيق حدائق ومسبح وشلال</span>
                </label>
              </div>
            </div>

          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-1">
                ملخص التقدير الهندسي المبدئي
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                مواصفات مشروعك المحدد
              </h3>

              {/* Total Estimated Cost Box */}
              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800/80 mb-6">
                <div className="text-xs text-stone-400 mb-1">
                  إجمالي التكلفة التقديرية (تقريباً)
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tabular-nums">
                    {formatSAR(totalEstimatedCost)}
                  </span>
                  <span className="text-sm font-bold text-stone-300">ريال سعودي</span>
                </div>
                <div className="text-xs text-stone-400 mt-2 flex items-center justify-between border-t border-stone-800/60 pt-2">
                  <span>متوسط سعر المتر:</span>
                  <span className="font-mono tabular-nums text-stone-200 font-semibold">{formatSAR(totalRatePerM2)} ر.س / م²</span>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-3.5 mb-8">
                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800/60">
                  <span className="text-stone-400 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>المدة الزمنية المتوقعة:</span>
                  </span>
                  <span className="font-bold text-stone-200">حوالي {calculatedMonths} أشهر عمل</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800/60">
                  <span className="text-stone-400 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span>فترة الضمان الهندسي:</span>
                  </span>
                  <span className="font-bold text-amber-400">{currentGrade.warranty}</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-stone-800/60">
                  <span className="text-stone-400">نظام الدفعات:</span>
                  <span className="font-medium text-stone-300">مرحلي وفق الإنجاز المعتمد</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-2">
                  <span className="text-stone-400">الإشراف الهندسي:</span>
                  <span className="font-medium text-stone-300">يومي مع تقارير أسبوعية مصورة</span>
                </div>
              </div>
            </div>

            {/* Actions for this estimation */}
            <div className="space-y-3 pt-6 border-t border-stone-800">
              <button
                onClick={handleWhatsAppQuote}
                className="w-full py-3.5 px-4 text-sm font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال التقدير عبر الواتساب فوراً</span>
              </button>

              <button
                onClick={() =>
                  onBookConsultation({
                    propertyType: currentProperty.name,
                    area,
                    grade: currentGrade.label,
                    estimatedCost: totalEstimatedCost,
                  })
                }
                className="w-full py-3.5 px-4 text-sm font-bold text-stone-200 hover:text-white bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>حجز موعد معاينة ميدانية مجانية</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
