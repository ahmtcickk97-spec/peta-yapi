"use client";
import React, { useState, useEffect, Fragment } from 'react';
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

  const navLinks = [
    { name: 'Anasayfa', href: '#anasayfa' },
    { name: 'Hakkımızda', href: '#hakkimizda' },
    { name: 'Hizmetlerimiz', href: '#hizmetlerimiz' },
    { name: 'Projelerimiz', href: '#projelerimiz' },
    { name: 'İletişim', href: '#iletisim' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- YENİ LOGO TASARIMI (GÜNCELLENDİ) --- */}
          <Link href="#anasayfa" className="flex flex-col items-center group">
            <div className="flex items-center leading-none">
              {/* PETA: Lacivert Kutu, Beyaz Yazı */}
              <span className="bg-[#001F3F] text-white px-2 py-1 text-xl md:text-2xl font-black tracking-tighter rounded-sm shadow-sm">
                PETA
              </span>
              {/* YAPI: Sadece Beyaz Yazı (Kutu kaldırıldı) */}
              <span className={`ml-1 text-xl md:text-2xl font-black tracking-tighter shadow-sm leading-none self-center transition-colors ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}>
                YAPI
              </span>
            </div>
            {/* Alt Yazı */}
            <span className={`mt-1 text-[8px] md:text-[9px] font-bold tracking-[0.4em] uppercase transition-colors ${
              isScrolled ? 'text-[#001F3F]' : 'text-white/90'
            }`}>
              İnşaat & Mimarlık
            </span>
          </Link>
          {/* --- LOGO BİTİŞ --- */}

          {/* SAĞ TARAF (Menü + Instagram + Mobil Hamburger) */}
          <div className="flex items-center space-x-4 md:space-x-10">
            
            {/* Masaüstü Navigasyon */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#38BDF8] ${
                    isScrolled ? 'text-[#001F3F]' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* INSTAGRAM BUTONU */}
            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={`p-2.5 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* MOBİL HAMBURGER MENÜ */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-1 transition-colors z-[120] relative ${isOpen ? 'text-white' : (isScrolled ? 'text-[#001F3F]' : 'text-white')}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isOpen ? (
                  <path d="M18 6 6 18M6 6l12 12"/>
                ) : (
                  <Fragment>
                    <line x1="4" x2="20" y1="12" y2="12"/>
                    <line x1="4" x2="20" y1="6" y2="6"/>
                    <line x1="4" x2="20" y1="18" y2="18"/>
                  </Fragment>
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* MOBİL AÇILIR PANEL */}
      <div className={`fixed inset-0 bg-[#001F3F] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 visible z-[110]' : 'opacity-0 invisible z-[-1]'
      } md:hidden`}>
        <div className="flex flex-col items-center space-y-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-black uppercase tracking-[0.2em] hover:text-[#38BDF8] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;