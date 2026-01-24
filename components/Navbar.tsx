"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dinamik Renk Belirleme
  const textColor = isScrolled ? 'text-[#001F3F]' : 'text-white';
  const brandNavy = '#001F3F';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* ÖZEL PETA YAPI LOGO */}
        <a href="/" className="flex flex-col items-start leading-none group">
          <div className="flex items-center">
            {/* PETA Kısmı */}
            <span className={`text-2xl md:text-3xl font-black tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}>
              PETA
            </span>
            {/* YAPI Bloğu */}
            <span className={`ml-1 px-2 py-1 text-2xl md:text-3xl font-black rounded-sm transition-all duration-300 ${isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'}`}>
              YAPI
            </span>
          </div>
          {/* Slogan */}
          <span className={`text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${isScrolled ? 'text-[#001F3F]' : 'text-white/80'}`}>
            Güvenle Dönüşüm Sağlam Yarınlar
          </span>
        </a>

        {/* MENÜ LİNKLERİ */}
        <ul className="hidden md:flex items-center gap-10">
          {['Hakkımızda', 'Hizmetlerimiz', 'Projelerimiz', 'İletişim'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className={`${textColor} hover:text-[#38BDF8] transition-colors font-bold uppercase tracking-widest text-[11px]`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* WHATSAPP BUTONU */}
        <a 
          href="https://wa.me/905325578570" 
          target="_blank"
          className="hidden md:block bg-[#38BDF8] text-white px-7 py-3 rounded-full font-bold text-[11px] uppercase tracking-wider hover:bg-[#001F3F] transition-all shadow-lg active:scale-95"
        >
          Hemen Teklif Al
        </a>

        {/* MOBİL MENÜ BUTONU */}
        <div className="md:hidden">
          <button className={textColor}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;