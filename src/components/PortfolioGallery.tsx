import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projectsData';
import { MapPin, Maximize2, Calendar, Eye, ArrowUpRight } from 'lucide-react';

interface PortfolioGalleryProps {
  onOpenProject: (project: Project) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'كافة المشاريع' },
    { id: 'villas', label: 'فلل وقصور' },
    { id: 'interior', label: 'ديكور وصالونات' },
    { id: 'commercial', label: 'مشاريع تجارية ومكاتب' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-stone-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-2">
              سجل الإنجاز والتميز الإنشائي
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              معرض أبرز مشاريعنا السابقة
            </h2>
            <p className="text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
              تصفح نماذج حية لمشاريع قمنا بتصميمها وتنفيذها بأعلى معايير الإتقان والفخامة بنظام تسليم المفتاح.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-stone-900/90 border border-stone-800 rounded-xl overflow-x-auto scrollbar-none shrink-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-400 text-stone-950 shadow-md'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group bg-stone-900/70 border border-stone-800/90 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60 flex flex-col cursor-pointer"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback container handling
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback styling placeholder if image fails */}
                <div className="absolute inset-0 bg-stone-800 flex items-center justify-center -z-10">
                  <span className="text-stone-500 text-xs">{project.title}</span>
                </div>

                {/* Ambient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Quick overlay view indicator */}
                <div className="absolute top-4 left-4 p-2 rounded-full bg-stone-950/70 backdrop-blur-sm text-stone-200 group-hover:text-amber-400 group-hover:bg-stone-950 transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean Unboxed Metadata with Typographic Separators (Zero-Pill Rule) */}
                  <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                    <span className="text-amber-400 font-medium">{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {project.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums font-mono">{project.year}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-stone-300">
                    <span className="text-stone-400">المساحة:</span>
                    <span className="font-bold text-amber-300 font-mono tabular-nums">{project.area}</span>
                  </div>

                  <div className="inline-flex items-center gap-1 font-semibold text-amber-400 group-hover:underline">
                    <span>عرض التفاصيل</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
