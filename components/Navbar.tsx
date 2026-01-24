"use client";
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Sayfa aşağı kaydırıldığında navbar'ın arka planını değiştirir
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Peta Yapı Logo" 
            className={`h-10 w-auto transition-all ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`} 
          />
        </a>

        {/* MENÜ LİNKLERİ */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <a href="#about" className={`${isScrolled ? 'text-brand-primary' : 'text-white'} hover:text-[#38BDF8] transition font-bold uppercase tracking-widest text-xs`}>
              Hakkımızda
            </a>
          </li>
          <li>
            <a href="#services" className={`${isScrolled ? 'text-brand-primary' : 'text-white'} hover:text-[#38BDF8] transition font-bold uppercase tracking-widest text-xs`}>
              Hizmetlerimiz
            </a>
          </li>
          <li>
            <a href="#projects" className={`${isScrolled ? 'text-brand-primary' : 'text-white'} hover:text-[#38BDF8] transition font-bold uppercase tracking-widest text-xs`}>
              Projelerimiz
            </a>
          </li>
          <li>
            <a href="#contact" className={`${isScrolled ? 'text-brand-primary' : 'text-white'} hover:text-[#38BDF8] transition font-bold uppercase tracking-widest text-xs`}>
              İletişim
            </a>
          </li>
        </ul>

        {/* WHATSAPP BUTONU (Hızlı Erişim) */}
        <a 
          href="https://wa.me/905XXXXXXXXX" 
          target="_blank"
          className="hidden md:block bg-[#38BDF8] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-tighter hover:bg-brand-primary transition shadow-lg"
        >
          Hemen Teklif Al
        </a>

        {/* MOBİL MENÜ BUTONU (Sadece Mobilde Görünür) */}
        <div className="md:hidden">
          <button className={isScrolled ? 'text-brand-primary' : 'text-white'}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;