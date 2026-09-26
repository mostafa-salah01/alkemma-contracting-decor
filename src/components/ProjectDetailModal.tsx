import React, { useState, useEffect } from 'react';
import { Project } from '../data/projectsData';
import { X, MapPin, Calendar, CheckCircle2, ArrowLeft, MessageSquare, Layers, Award } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const currentImage = project.galleryImages[activeImageIndex] || project.image;

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `السلام عليكم، شاهدت مشروعكم (${project.title}) في معرض أعمال القمة للمقاولات والديكور، وأود الاستفسار عن إمكانية تنفيذ مشروع مماثل مع دراسة التكلفة والمخططات.`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-stone-950 border border-stone-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 border-b border-stone-800/80 flex items-center justify-between bg-stone-900/60 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
              <span>{project.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {project.location}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full text-stone-400 hover:text-white bg-stone-900 hover:bg-stone-800 transition-colors"
            aria-label="إغلاق النافذة"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          
          {/* Main Visual Image Display */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl">
              <img
                src={currentImage}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 right-4 bg-stone-950/80 backdrop-blur-sm border border-stone-800 px-3 py-1 rounded-md text-xs font-mono tabular-nums text-stone-300">
                صورة {activeImageIndex + 1} من {project.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail selector */}
            {project.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {project.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-amber-400 scale-105' : 'border-stone-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`لقطة ${idx + 1}`} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Metrics Row (Zero-pill text numbers) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-900/60 border border-stone-800">
            <div>
              <div className="text-xs text-stone-400">المساحة الإجمالية</div>
              <div className="text-base font-bold text-amber-400 font-mono tabular-nums mt-0.5">{project.area}</div>
            </div>
            <div>
              <div className="text-xs text-stone-400">مدة التنفيذ</div>
              <div className="text-base font-bold text-white font-mono tabular-nums mt-0.5">{project.duration}</div>
            </div>
            <div>
              <div className="text-xs text-stone-400">سنة الإنجاز</div>
              <div className="text-base font-bold text-white font-mono tabular-nums mt-0.5">{project.year}</div>
            </div>
            <div>
              <div className="text-xs text-stone-400">نوع المشروع</div>
              <div className="text-base font-bold text-stone-200 mt-0.5">{project.client}</div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-bold text-stone-300 mb-2">نبذة عن المشروع والتنفيذ:</h4>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-sm font-bold text-amber-300 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>نطاق الأعمال المنجزة في المشروع:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300 bg-stone-900/40 p-3 rounded-lg border border-stone-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & High-end Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-stone-800/80">
            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>الخامات والمواد المستخدمة:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {project.materials.map((m, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-stone-500" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>المزايا الهندسية الاستثنائية:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-300">
                {project.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-5 sm:p-6 border-t border-stone-800 bg-stone-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-400 hidden sm:block">
            هل لديك فيلا أو مشروع تجاري ترغب في تنفيذه بنفس المستوى؟
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppInquiry}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>استفسار واتساب مباشر</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md shadow-amber-500/10"
            >
              <span>طلب تنفيذ مشروع مماثل</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
