import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronRight, FileText } from 'lucide-react';
import { LOGO_ICON, NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }

      // Determine active section based on scroll position
      const sections = NAV_ITEMS.map(item => item.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/80 py-2.5' 
            : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer select-none group shrink-0" 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setActiveSection('intro');
            }}
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-100/70 transition-colors">
              <img 
                src={LOGO_ICON} 
                alt="Índigo Icon" 
                className="h-8 w-8 object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-900 leading-tight">
                ÍNDIGO <span className="text-indigo-600 font-bold">PH</span>
              </span>
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                Agosto 2026
              </span>
            </div>
          </div>

          {/* Desktop Navigation (Visible on lg and above) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-2.5 xl:px-3 py-1.5 rounded-xl text-xs transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-900 text-white font-bold shadow-xs'
                      : 'text-gray-600 hover:text-indigo-900 hover:bg-slate-100 font-medium'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop) & Mobile Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <a 
              href="mailto:admin@indigo.com" 
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all whitespace-nowrap"
            >
              <Mail size={13} />
              <span>Contacto</span>
            </a>

            {/* Mobile / Tablet Menu Toggle (< lg) */}
            <button 
              type="button"
              className="lg:hidden p-2 rounded-xl text-gray-700 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X size={22} className="text-indigo-900" /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Reading / Scroll progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-transparent">
          <div 
            className="h-full bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-500 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Nav Backdrop & Slide-Down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-xs animate-fadeIn" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute top-[60px] left-0 w-full bg-white shadow-2xl border-b border-gray-200 py-4 px-4 flex flex-col gap-1 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-3 py-2 mb-1 flex items-center justify-between border-b border-gray-100">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Secciones del Informe
              </span>
              <span className="text-xs font-mono font-bold text-indigo-600">
                8 Capítulos
              </span>
            </div>

            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-left transition-all ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-900 font-bold border border-indigo-100'
                      : 'text-gray-700 hover:bg-slate-50 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-5 h-5 rounded-lg text-[10px] flex items-center justify-center font-bold ${
                      isActive ? 'bg-indigo-900 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-xs">{item.label}</p>
                      {item.subtitle && (
                        <p className="text-[10px] text-gray-400 font-normal">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ChevronRight size={14} className={isActive ? 'text-indigo-600' : 'text-gray-400'} />
                </button>
              );
            })}

            <div className="mt-3 pt-3 border-t border-gray-100 px-1">
              <a 
                href="mailto:admin@indigo.com" 
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Mail size={14} />
                <span>Contactar Administración</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
