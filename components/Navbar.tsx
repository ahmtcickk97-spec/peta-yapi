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
      isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- GÖRSELDEKİ LOGONUN BİREBİR KOD HALİ --- */}
          <Link href="#anasayfa" className="flex flex-col items-start group no-underline font-sans">
            <div className="flex items-center">
              {/* Lacivert Kutu: İkon ve PETA (Görseldeki gibi köşeli ve büyük) */}
              <div className="bg-[#001F3F] flex items-center px-4 py-3 rounded-md h-[60px] md:h-[70px]">
                {/* "P" Harfli Ev İkonu (SVG) */}
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 100 125"
                  className="mr-3 md:mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 10 H 60 C 85 10, 85 55, 60 55 H 35 V 110 H 15 V 10 Z" fill="white" />
                  <path d="M35 55 L 50 40 L 65 55 V 85 H 35 V 55 Z" fill="#001F3F" />
                  <rect x="47" y="65" width="6" height="20" fill="white" />
                </svg>

                {/* PETA Yazısı (Beyaz ve Çok Kalın) */}
                <span className="text-4xl md:text-5xl font-[900] tracking-tighter text-white leading-none">
                  PETA
                </span>
              </div>

              {/* YAPI Yazısı (Siyah ve Çok Kalın - Kutu Dışında) */}
              <span className="ml-3 text-4xl md:text-5xl font-[900] tracking-tighter text-black leading-none self-center">
                YAPI
              </span>
            </div>

            {/* Slogan (Siyah ve Kalın - Kutu Altında) */}
            <span className="mt-2 text-[13px] md:text-[16px] font-bold tracking-tight text-black">
              Güvenle Dönüşüm, Sağlam Yarınlar
            </span>
          </Link>

          {/* SAĞ TARAF (Menü Linkleri - Renkler scroll'a göre değişir) */}
          <div className="flex items-center space-x-4 md:space-x-10">
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`text-[12px] font-black uppercase tracking-[0.2em] transition-all hover:text-[#38BDF8] ${
                    isScrolled ? 'text-[#001F3F]' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full shadow-sm transition-all hover:scale-110 ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-1 z-[120] relative ${isOpen ? 'text-white' : (isScrolled ? 'text-[#001F3F]' : 'text-white')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {isOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <Fragment><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Fragment>}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      <div className={`fixed inset-0 bg-[#001F3F] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible z-[110]' : 'opacity-0 invisible z-[-1]'} md:hidden`}>
        <div className="flex flex-col items-center space-y-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-4xl font-black uppercase tracking-[0.2em] hover:text-[#38BDF8]">{link.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;