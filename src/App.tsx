import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGallery } from './components/PortfolioGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CostCalculator } from './components/CostCalculator';
import { QualityAndProcess } from './components/QualityAndProcess';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Project } from './data/projectsData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPreset, setConsultationPreset] = useState<{
    service?: string;
    propertyType?: string;
    area?: number;
    estimatedCost?: number;
  } | null>(null);

  const handleOpenConsultation = (preset?: {
    service?: string;
    propertyType?: string;
    area?: number;
    estimatedCost?: number;
  }) => {
    setConsultationPreset(preset || null);
    setIsConsultationOpen(true);
  };

  const handleServiceSelect = (serviceTitle: string) => {
    handleOpenConsultation({ service: serviceTitle });
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    handleOpenConsultation({
      service: `تنفيذ مشروع مماثل لـ (${projectTitle})`,
    });
  };

  const handleCalculatorBook = (details: {
    propertyType: string;
    area: number;
    grade: string;
    estimatedCost: number;
  }) => {
    handleOpenConsultation({
      service: `تشطيب ${details.grade}`,
      propertyType: details.propertyType,
      area: details.area,
      estimatedCost: details.estimatedCost,
    });
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-cairo selection:bg-amber-500/20 selection:text-amber-200">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Services Showcase */}
        <ServicesSection onSelectService={handleServiceSelect} />

        {/* Portfolio Showcase Gallery */}
        <PortfolioGallery onOpenProject={(proj) => setSelectedProject(proj)} />

        {/* Interactive Before & After Comparison Slider */}
        <BeforeAfterSlider />

        {/* Smart Cost & Duration Calculator */}
        <CostCalculator onBookConsultation={handleCalculatorBook} />

        {/* Quality Standards & 5-Step Process */}
        <QualityAndProcess />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Contact & Inquiry Capture Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        presetData={consultationPreset}
      />

      {/* Floating Quick WhatsApp Button */}
      <aside aria-label="أزرار التواصل السريع" className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D8%A9%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D9%85%D9%87%D9%86%D8%AF%D8%B3%20%D8%A7%D9%84%D9%82%D9%85%D8%A9%20%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D9%83%D9%88%D8%B1"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200"
          title="تواصل مباشر عبر واتساب"
          aria-label="تواصل واتساب"
        >
          <MessageSquare className="w-6 h-6 fill-stone-950" />
          <span className="sr-only">تواصل واتساب</span>
          <span className="hidden group-hover:block absolute left-full ml-3 px-3 py-1.5 bg-stone-900 border border-stone-700 text-white text-xs font-semibold rounded-lg shadow-xl whitespace-nowrap pointer-events-none">
            محادثة واتساب سريعة
          </span>
        </a>
      </aside>
    </div>
  );
}
