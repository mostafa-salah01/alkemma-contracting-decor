import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Sparkles, CheckCircle2 } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-stone-900/40 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
            الفارق الحقيقي في جودة التنفيذ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            شاهد تحول المساحات من العظم إلى قمة الفخامة
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            اسحب المؤشر لليمين واليسار لمشاهدة التحول الاستثنائي بين مرحلة الهيكل الإنشائي والتأسيس، والنتيجة النهائية بعد التشطيب والتأثيث المتكامل.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[380px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden select-none border border-stone-800 shadow-2xl cursor-ew-resize group"
          >
            {/* "After" Image (Complete luxury finish) - Base layer */}
            <img
              src="./images/hero_luxury_interior_1790450309959.jpg"
              alt="بعد التشطيب الفاخر - القمة للمقاولات"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* "Before" Image (Desaturated & stylized architectural rough state) - Top clipped layer */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="./images/hero_luxury_interior_1790450309959.jpg"
                alt="قبل التشطيب - مرحلة التأسيس"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-50"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  maxWidth: 'none',
                }}
              />
              {/* Construction grid overlay to emphasize structural/rough phase */}
              <div className="absolute inset-0 bg-stone-900/50 mix-blend-multiply" />
            </div>

            {/* Draggable Slider Bar Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.6)]"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center shadow-2xl border-2 border-stone-950">
                <Sliders className="w-5 h-5 rotate-90" />
              </div>
            </div>

            {/* Floating Labels (Zero-pill clean badge tags) */}
            <div className="absolute bottom-6 right-6 pointer-events-none bg-stone-950/80 backdrop-blur-md border border-stone-700/80 px-4 py-2 rounded-lg text-xs font-bold text-white shadow-lg">
              <span>قبل: مرحلة التأسيس والهيكل</span>
            </div>

            <div className="absolute bottom-6 left-6 pointer-events-none bg-amber-500/90 backdrop-blur-md border border-amber-400/80 px-4 py-2 rounded-lg text-xs font-bold text-stone-950 shadow-lg">
              <span>بعد: التشطيب الديلوكس النهائي</span>
            </div>
          </div>

          {/* Quick Comparison Highlights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-white mb-0.5">تأسيس هندسي دقيق</div>
                <div className="text-stone-400">شبكات سباكة وكهرباء مخفية مطابقة للكود السعودي مع اختبارات ضغط موثقة.</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-white mb-0.5">رخام مستورد بقطع ضخمة</div>
                <div className="text-stone-400">قص وتجميع عروق الرخام (Bookmatch) بأحدث ماكينات CNC بدون فواصل مزعجة.</div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <div className="font-bold text-white mb-0.5">إضاءة معمارية مانعة للتوهج</div>
                <div className="text-stone-400">توزيع هندسي يحقق الراحة البصرية مع سيناريوهات تحكم ذكية متعددة.</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
