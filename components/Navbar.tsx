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
      isScrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* --- ÖZEL KUTULU LOGO --- */}
          <Link href="#anasayfa" className="flex flex-col items-start group">
            <div className="flex items-center">
              {/* Lacivert Kutu: İkon ve PETA */}
              <div className="bg-[#001F3F] flex items-center px-2 py-1.5 md:px-3 md:py-2 rounded-[8px] md:rounded-[10px] h-[35px] md:h-[45px] shadow-sm">
                {/* Özel "P" Harfi ve Ev Silüeti */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 100 120"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-1.5 md:mr-2"
                >
                  <path d="M20 10 C 60 10, 85 25, 85 55 C 85 85, 60 100, 25 100 L 25 110 L 10 110 L 10 10 L 20 10 Z" />
                  <path d="M30 55 L 50 35 L 70 55 L 70 90 L 30 90 Z" fill="#001F3F" />
                  <rect x="45" y="65" width="10" height="25" fill="white" />
                </svg>

                {/* PETA Yazısı */}
                <span className="text-lg md:text-2xl font-black tracking-tight text-white leading-none">
                  PETA
                </span>
              </div>

              {/* YAPI Yazısı (Kutu Dışında - Scroll'a göre renk değiştirir) */}
              <span className={`ml-1.5 md:ml-2 text-lg md:text-2xl font-light tracking-tighter leading-none self-center transition-colors duration-300 ${
                isScrolled ? 'text-black' : 'text-white'
              }`}>
                YAPI
              </span>
            </div>

            {/* Slogan (Scroll'a göre renk değiştirir) */}
            <span className={`mt-1 text-[7px] md:text-[9px] font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-white/90'
            }`}>
              Güvenle Dönüşüm, Sağlam Yarınlar
            </span>
          </Link>

          {/* SAĞ TARAF (Menü Linkleri ve Instagram) */}
          <div className="flex items-center space-x-4 md:space-x-10">
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

            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 md:p-2.5 rounded-full shadow-lg transition-all hover:scale-110 ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* Mobil Menü Butonu */}
            <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-1 z-[120] relative ${isOpen ? 'text-white' : (isScrolled ? 'text-[#001F3F]' : 'text-white')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                {isOpen ? <path d="M18 6 6 18M6 6l12 12"/> : <Fragment><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Fragment>}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü Overlay */}
      <div className={`fixed inset-0 bg-[#001F3F] flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible z-[110]' : 'opacity-0 invisible z-[-1]'} md:hidden`}>
        <div className="flex flex-col items-center space-y-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-white text-3xl font-black uppercase tracking-[0.2em] hover:text-[#38BDF8]">{link.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;