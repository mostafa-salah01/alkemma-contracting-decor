import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/projectsData';
import { 
  Compass, 
  Hammer, 
  Building2, 
  Layers, 
  Trees, 
  Sparkles, 
  ArrowLeft, 
  Check, 
  FileText 
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-6 h-6 text-amber-400" />,
  Hammer: <Hammer className="w-6 h-6 text-amber-400" />,
  Building2: <Building2 className="w-6 h-6 text-amber-400" />,
  Layers: <Layers className="w-6 h-6 text-amber-400" />,
  Trees: <Trees className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-400" />
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<string>('01');

  const selectedService = SERVICES.find((s) => s.number === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-stone-900/60 border-t border-b border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
            خدمات متكاملة من التخطيط إلى التسليم
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            حلول هندسية ومعمارية استثنائية لكافة مشاريعك
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
            نكرس كفاءتنا وخبراتنا الهندسية لتنفيذ كافة مراحل المقاولات والتشطيب بأدق تفاصيل الجودة والكود السعودي للمباني.
          </p>
        </div>

        {/* Bento / Asymmetric Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Services Selector Column */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service) => {
              const isActive = service.number === activeTab;
              return (
                <button
                  key={service.number}
                  onClick={() => setActiveTab(service.number)}
                  className={`w-full text-right p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-stone-800/90 border-amber-500/60 shadow-lg shadow-amber-500/5'
                      : 'bg-stone-950/60 border-stone-800 hover:border-stone-700 hover:bg-stone-900/40 text-stone-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${isActive ? 'bg-amber-400/10' : 'bg-stone-900'}`}>
                    {iconMap[service.iconName] || <Building2 className="w-6 h-6 text-amber-400" />}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                        {service.number}.
                      </span>
                      <span className="text-xs text-stone-400">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-stone-200'}`}>
                      {service.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-1 mt-1">
                      {service.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Service Detailed Spotlight Card */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 rounded-2xl p-6 sm:p-8 lg:p-10 sticky top-28 shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-stone-800/80 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-mono font-extrabold text-amber-400">
                  {selectedService.number}
                </span>
                <div>
                  <div className="text-xs text-stone-400">الخدمة المتخصصة</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <div className="hidden sm:block p-3 rounded-xl bg-amber-400/10 border border-amber-500/20">
                {iconMap[selectedService.iconName]}
              </div>
            </div>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed mb-8">
              {selectedService.summary}
            </p>

            {/* Detailed Execution Checklist */}
            <div className="mb-10">
              <div className="text-sm font-bold text-amber-300 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>نطاق العمل ومخرجات الخدمة:</span>
              </div>
              <ul className="space-y-3.5">
                {selectedService.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-stone-200 text-sm sm:text-base">
                    <span className="mt-1 w-5 h-5 rounded-full bg-amber-400/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Action for this service */}
            <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400">
                إشراف هندسي يومي وضمانات موثقة في العقد
              </div>

              <button
                onClick={() => onSelectService(selectedService.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all active:scale-95 shadow-md shadow-amber-500/10 whitespace-nowrap"
              >
                <span>طلب دراسة هندسية وعرض سعر</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
