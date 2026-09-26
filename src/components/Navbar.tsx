import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#' },
    { label: 'خدماتنا', href: '#services' },
    { label: 'سابقة المشاريع', href: '#portfolio' },
    { label: 'قبل وبعد', href: '#before-after' },
    { label: 'حاسبة التكلفة', href: '#calculator' },
    { label: 'معايير الجودة', href: '#quality' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-stone-950/95 backdrop-blur-md border-b border-stone-800/80 shadow-2xl py-3.5'
          : 'bg-stone-950/60 backdrop-blur-sm border-b border-stone-800/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group text-right"
            title="القمة للمقاولات والديكور"
          >
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-stone-950 shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="font-extrabold text-xl tracking-tight font-cairo">ق</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                القمة للمقاولات والديكور
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors duration-150 py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-200 group-hover:w-full group-hover:right-0"></span>
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%82%D9%85%D8%A9%20%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D9%83%D9%88%D8%B1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 hover:bg-emerald-900/50 hover:text-emerald-300 transition-colors"
              title="تواصل مباشر عبر الواتساب"
              aria-label="تواصل واتساب"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span>طلب استشارة مجانية</span>
              <ArrowUpRight className="w-4 h-4 rotate-45" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-stone-300 hover:text-white bg-stone-900 border border-stone-800"
              aria-label="القائمة الرئيسية"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-stone-800 bg-stone-950/98 rounded-b-xl px-2 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-900/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-stone-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 text-center text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors"
              >
                طلب استشارة وعرض سعر
              </button>
              <a
                href="tel:+966500000000"
                className="w-full py-2.5 text-center text-xs font-semibold text-stone-300 bg-stone-900 border border-stone-800 rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>اتصال مباشر: 0500000000</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
