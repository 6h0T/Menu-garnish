
import React, { useState, useRef, useEffect } from 'react';
import { menuData } from './data';
import { ChevronDown, Utensils, Wine, Martini, Globe, Home } from 'lucide-react';
import { Language, LocalizedString } from './types';

// --- Custom Language Dropdown Component ---
const LanguageDropdown = ({ 
  current, 
  onChange, 
  mobile = false 
}: { 
  current: Language; 
  onChange: (lang: Language) => void; 
  mobile?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options: Language[] = ['es', 'en', 'pt'];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-garnish-gold font-bold uppercase tracking-widest transition-all hover:text-white ${
          mobile 
            ? 'text-xs px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-garnish-gold/30' 
            : 'text-sm px-3 py-1 rounded-full hover:bg-white/5'
        }`}
      >
        <Globe className={`${mobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
        <span>{current}</span>
        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-garnish-green border border-garnish-gold/50 rounded-lg shadow-2xl overflow-hidden z-[60] flex flex-col animate-fade-in">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-3 text-left uppercase text-xs font-bold tracking-wider transition-colors border-b last:border-0 border-garnish-gold/10 ${
                current === opt
                  ? 'bg-garnish-gold text-garnish-green'
                  : 'text-garnish-gold hover:bg-white/5'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [language, setLanguage] = useState<Language>('es');

  // Refs for scrolling
  const heroRef = useRef<HTMLDivElement>(null);
  const comidasRef = useRef<HTMLDivElement>(null);
  const bebidasRef = useRef<HTMLDivElement>(null);
  const cocktailsRef = useRef<HTMLDivElement>(null);

  // Helper to translate content
  const t = (content: LocalizedString | string) => {
    if (typeof content === 'string') return content;
    return content[language] || content.es;
  };

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Adjust offset for better active state detection
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      if (cocktailsRef.current && scrollPosition >= cocktailsRef.current.offsetTop) {
        setActiveSection('cocktails');
      } else if (bebidasRef.current && scrollPosition >= bebidasRef.current.offsetTop) {
        setActiveSection('bebidas');
      } else if (comidasRef.current && scrollPosition >= comidasRef.current.offsetTop) {
        setActiveSection('comidas');
      } else {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
  };

  const navLabels = {
    es: { food: 'Comidas', drinks: 'Bebidas', cocktails: 'Cocktails', footer: 'Mendoza, Argentina | Todos los derechos reservados' },
    en: { food: 'Food', drinks: 'Drinks', cocktails: 'Cocktails', footer: 'Mendoza, Argentina | All Rights Reserved' },
    pt: { food: 'Comidas', drinks: 'Bebidas', cocktails: 'Coquetéis', footer: 'Mendoza, Argentina | Todos os direitos reservados' }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-garnish-gold selection:text-white pb-20 md:pb-0">
      
      {/* --- Desktop Top Navigation (Hidden on Mobile) --- */}
      <nav className={`hidden md:flex fixed top-0 left-0 w-full z-50 transition-all duration-300 ${activeSection === 'hero' ? 'bg-transparent py-4' : 'bg-garnish-green shadow-lg py-2'}`}>
        <div className="max-w-6xl mx-auto px-4 w-full flex justify-between items-center">
          <div 
            className={`font-serif text-garnish-gold font-bold tracking-widest cursor-pointer transition-opacity duration-500 ${activeSection === 'hero' ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => scrollTo(heroRef)}
          >
            THE GARNISH BAR
          </div>
          
          <div className="flex gap-8">
             <button 
              onClick={() => scrollTo(comidasRef)} 
              className={`flex flex-col items-center text-sm uppercase tracking-widest transition-colors ${activeSection === 'comidas' ? 'text-garnish-gold' : 'text-gray-300 hover:text-white'}`}
            >
              <Utensils className="w-5 h-5 mb-1" />
              <span>{navLabels[language].food}</span>
            </button>
            <button 
              onClick={() => scrollTo(bebidasRef)} 
              className={`flex flex-col items-center text-sm uppercase tracking-widest transition-colors ${activeSection === 'bebidas' ? 'text-garnish-gold' : 'text-gray-300 hover:text-white'}`}
            >
              <Wine className="w-5 h-5 mb-1" />
              <span>{navLabels[language].drinks}</span>
            </button>
            <button 
              onClick={() => scrollTo(cocktailsRef)} 
              className={`flex flex-col items-center text-sm uppercase tracking-widest transition-colors ${activeSection === 'cocktails' ? 'text-garnish-gold' : 'text-gray-300 hover:text-white'}`}
            >
              <Martini className="w-5 h-5 mb-1" />
              <span>{navLabels[language].cocktails}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
             <LanguageDropdown current={language} onChange={setLanguage} />
          </div>
        </div>
      </nav>

      {/* --- Mobile Top Bar (Logo & Language) --- */}
      <nav className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3 flex justify-between items-center ${activeSection === 'hero' ? 'bg-transparent' : 'bg-garnish-green/95 backdrop-blur-md shadow-lg'}`}>
         <div 
            className={`font-serif text-garnish-gold font-bold text-sm tracking-widest cursor-pointer transition-opacity duration-300 ${activeSection === 'hero' ? 'opacity-0' : 'opacity-100'}`}
            onClick={() => scrollTo(heroRef)}
          >
            GB
          </div>
         <div>
            <LanguageDropdown current={language} onChange={setLanguage} mobile={true} />
         </div>
      </nav>

      {/* --- Mobile Bottom Navigation --- */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-garnish-green/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-3 flex justify-around items-center">
        <button 
           onClick={() => scrollTo(heroRef)}
           className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 ${activeSection === 'hero' ? 'text-garnish-gold scale-110' : 'text-gray-400'}`}
        >
          <Home className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-white/10"></div>
        <button 
           onClick={() => scrollTo(comidasRef)}
           className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 ${activeSection === 'comidas' ? 'text-garnish-gold scale-110' : 'text-gray-400'}`}
        >
          <Utensils className="w-5 h-5" />
        </button>
        <button 
           onClick={() => scrollTo(bebidasRef)}
           className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 ${activeSection === 'bebidas' ? 'text-garnish-gold scale-110' : 'text-gray-400'}`}
        >
          <Wine className="w-5 h-5" />
        </button>
        <button 
           onClick={() => scrollTo(cocktailsRef)}
           className={`flex flex-col items-center justify-center p-1 rounded-lg transition-all duration-300 ${activeSection === 'cocktails' ? 'text-garnish-gold scale-110' : 'text-gray-400'}`}
        >
          <Martini className="w-5 h-5" />
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden bg-garnish-green">
        <div className="absolute inset-0 opacity-20 bg-crackle-pattern mix-blend-overlay"></div>
        {/* Decorative Borders/Lines */}
        <div className="absolute inset-4 border border-garnish-gold opacity-30"></div>
        <div className="absolute inset-6 border border-garnish-gold opacity-20"></div>

        <div className="z-10 px-6 animate-fade-in-up">
           {/* Logo Image */}
           <div className="w-40 h-40 md:w-56 md:h-56 mx-auto mb-8 rounded-full shadow-2xl overflow-hidden bg-garnish-dark">
             <img 
                src="https://i.postimg.cc/05Fgtzcr/118320647-312953413265348-8227369442724666274-n.jpg" 
                alt="The Garnish Bar Logo" 
                className="w-full h-full object-cover rounded-full scale-105"
             />
           </div>
           
           <h1 className="text-3xl md:text-5xl font-cinzel text-garnish-gold mb-4 tracking-[0.2em] drop-shadow-lg">
             THE GARNISH BAR
           </h1>
           <p className="text-lg md:text-2xl font-serif text-garnish-gold opacity-80 mb-12 italic">
             ATELIER & SHOP
           </p>

           <button 
             onClick={() => scrollTo(comidasRef)}
             className="mt-8 md:mt-12 text-garnish-gold animate-bounce"
           >
             <ChevronDown size={32} className="md:w-10 md:h-10" />
           </button>
        </div>
      </section>

      {/* --- Menu Sections Loop --- */}
      {menuData.map((section, index) => (
        <React.Fragment key={section.id}>
          
          <div 
             ref={
              section.id === 'comidas' ? comidasRef : 
              section.id === 'bebidas' ? bebidasRef : cocktailsRef
            }
          >
            {/* New Section Header (1/3 Viewport, White Text) */}
            <header 
              className="relative h-[30vh] min-h-[250px] w-full flex items-center justify-center overflow-hidden"
            >
              {/* Background Image fixed in the header container */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${section.coverImage}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Texture Overlay */}
              <div className="absolute inset-0 opacity-20 bg-crackle-pattern"></div>

              {/* Content */}
              <div className="relative z-10 text-center p-4">
                 <h2 className="font-script text-5xl md:text-8xl text-white drop-shadow-lg mb-2">
                   {t(section.coverTitle)}
                 </h2>
                 <div className="mt-2 flex justify-center">
                   <span className="block w-12 md:w-16 h-1 bg-white rounded-full"></span>
                 </div>
              </div>
            </header>

            {/* Menu Items List (Beige Background) */}
            <section className="relative w-full bg-garnish-beige py-12 md:py-20 px-4 md:px-8">
              <div className="absolute inset-0 opacity-10 bg-crackle-pattern pointer-events-none"></div>
              
              <div className="max-w-4xl mx-auto relative z-10">
                {section.subSections.map((sub, subIndex) => (
                  <div key={subIndex} className="mb-12 last:mb-0">
                    {sub.title && (
                      <div className="text-center mb-8 md:mb-12">
                        <h3 className="font-serif text-3xl md:text-5xl text-garnish-green mb-2 relative inline-block">
                          {t(sub.title)}
                        </h3>
                        <div className="w-full h-px bg-garnish-green/20 mt-3"></div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-y-8 md:gap-y-10 md:gap-x-12">
                      {sub.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group">
                          <div className="flex justify-between items-baseline mb-1 border-b border-garnish-gold/30 pb-1">
                            <h4 className="font-serif text-lg md:text-2xl text-garnish-dark group-hover:text-garnish-green transition-colors font-semibold pr-2">
                              {t(item.name)}
                            </h4>
                            <span className="font-sans text-base md:text-xl font-bold text-garnish-dark whitespace-nowrap">
                              {formatPrice(item.price)}
                            </span>
                          </div>
                          {item.description && (
                            <p className="font-sans text-gray-600 text-xs md:text-base leading-relaxed max-w-2xl mt-1">
                              {t(item.description)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Section Decoration */}
              <div className="mt-16 flex justify-center opacity-40">
                 <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#003d33" strokeWidth="1" className="md:w-10 md:h-10">
                   <circle cx="12" cy="12" r="10" />
                   <path d="M12 2 L12 22" />
                   <path d="M2 12 L22 12" />
                 </svg>
              </div>
            </section>
          </div>

        </React.Fragment>
      ))}

      {/* --- Footer --- */}
      <footer className="bg-garnish-green text-garnish-beige py-12 text-center relative overflow-hidden pb-24 md:pb-12">
        <div className="absolute inset-0 opacity-10 bg-crackle-pattern"></div>
        <div className="relative z-10 px-4">
           <h2 className="font-cinzel text-xl md:text-2xl mb-4 text-garnish-gold">THE GARNISH BAR</h2>
           <p className="font-sans text-[10px] md:text-xs mt-8 opacity-50">&copy; {new Date().getFullYear()} {navLabels[language].footer}</p>
        </div>
      </footer>

    </div>
  );
};

export default App;
