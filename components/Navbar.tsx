"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex flex-col group">
            <span className={`text-2xl md:text-3xl font-black tracking-tighter leading-none transition-colors ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}>
              PETA YAPI
            </span>
            <span className={`text-[9px] font-bold tracking-[0.4em] uppercase transition-colors ${isScrolled ? 'text-[#38BDF8]' : 'text-white/90'}`}>
              İnşaat & Mimarlık
            </span>
          </Link>

          {/* SAĞ TARAF (Menü ve Instagram) */}
          <div className="flex items-center space-x-5 md:space-x-10">
            
            {/* Masaüstü Linkler */}
            <div className="hidden md:flex items-center space-x-8">
              {['Anasayfa', 'Hakkımızda', 'Projelerimiz', 'İletişim'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase().replace('ı', 'i')}`}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#38BDF8] ${
                    isScrolled ? 'text-[#001F3F]' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>

            {/* INSTAGRAM BUTONU (Hem Mobil Hem Masaüstü İçin Burada) */}
            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`p-2.5 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* MOBİL MENÜ BUTONU */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-1 transition-colors ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* MOBİL MENÜ PANELİ */}
      <div className={`fixed inset-0 bg-[#001F3F] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-[99] md:hidden`}>
        <div className="flex flex-col items-center space-y-10">
          {['Anasayfa', 'Hakkımızda', 'Projelerimiz', 'İletişim'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace('ı', 'i')}`}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-black uppercase tracking-[0.2em] hover:text-[#38BDF8] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;