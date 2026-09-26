import React from 'react';
import { TESTIMONIALS } from '../data/projectsData';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3">
            ثقة عملائنا هي سر ريادتنا
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            ماذا يقول عملاؤنا عن تجربتهم مع القمة؟
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            تجارب حقيقية لعملاء كرام وثقوا بنا في تصميم وتنفيذ منازلهم ومقار أعمالهم في المملكة.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-stone-900/60 border border-stone-800 p-8 rounded-2xl flex flex-col justify-between hover:border-amber-500/40 transition-all duration-200"
            >
              <div>
                {/* Quote mark and rating */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-amber-500/30" />
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Author & Project info */}
              <div className="pt-6 border-t border-stone-800/80">
                <div className="font-bold text-white text-base">
                  {item.name}
                </div>
                <div className="text-xs text-amber-400 mt-0.5">
                  {item.role} · {item.city}
                </div>
                <div className="text-xs text-stone-400 mt-1">
                  المشروع: {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
