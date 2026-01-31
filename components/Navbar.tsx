"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Instagram, Menu, X } from 'lucide-react'; // İkonlar için lucide-react kullanıyoruz

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sayfa kaydırıldığında navbar rengini değiştir
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter leading-none ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}>
              PETA YAPI
            </span>
            <span className={`text-[8px] font-bold tracking-[0.3em] uppercase ${isScrolled ? 'text-[#38BDF8]' : 'text-white/80'}`}>
              İnşaat & Mimarlık
            </span>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex items-center space-x-10">
            {['Anasayfa', 'Hakkımızda', 'Projelerimiz', 'İletişim'].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xs font-black uppercase tracking-widest transition-colors hover:text-[#38BDF8] ${
                  isScrolled ? 'text-[#001F3F]' : 'text-white'
                }`}
              >
                {item}
              </Link>
            ))}
            
            {/* Masaüstü Instagram */}
            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all hover:scale-110 ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* MOBİL SAĞ ALAN (Instagram + Menü) */}
          <div className="flex md:hidden items-center space-x-4">
            {/* MOBİL INSTAGRAM BUTONU - İstediğin yer tam burası! */}
            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2.5 rounded-full shadow-lg active:scale-90 transition-all ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <Instagram size={20} />
            </a>

            {/* MOBİL MENÜ BUTONU */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${isScrolled ? 'text-[#001F3F]' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ PANELİ */}
      <div className={`fixed inset-0 bg-[#001F3F] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-[99] md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Anasayfa', 'Hakkımızda', 'Projelerimiz', 'İletişim'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-black uppercase tracking-widest hover:text-[#38BDF8]"
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