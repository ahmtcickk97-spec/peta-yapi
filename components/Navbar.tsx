"use client";
import React, { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
      // Üst boşluğu (pt) azaltarak logoyu yukarı çektik
      isScrolled ? 'bg-white shadow-xl pt-1 pb-2' : 'bg-transparent pt-2 pb-4'
    }`}>
      {/* px-2 md:px-4 yaparak logoyu sola daha fazla yanaştırdık */}
      <div className="container mx-auto px-2 md:px-4 lg:max-w-[95%]">
        <div className="flex justify-between items-center">
          
          {/* --- LOGO: SOL ÜSTE YANAŞTIRILDI --- */}
          <Link href="#anasayfa" className="relative group transition-transform hover:scale-105 active:scale-95">
            <Image 
              src="/logo.png" 
              alt="Peta Yapı" 
              width={220} 
              height={70} 
              // h-[55px] md:h-[75px] ile boyutu koruduk ama konumu yukarı çektik
              className={`object-contain w-auto h-[55px] md:h-[75px] transition-all duration-500 ${
                isScrolled ? 'brightness-100' : 'brightness-0 invert'
              }`} 
              priority 
            />
          </Link>

          {/* SAĞ TARAF (Menü Linkleri) */}
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

            {/* Instagram Butonu */}
            <a 
              href="https://instagram.com/petainsaat" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`p-2 rounded-full transition-all hover:scale-110 shadow-sm ${
                isScrolled ? 'bg-[#001F3F] text-white' : 'bg-white text-[#001F3F]'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
    </nav>
  );
};

export default Navbar;