import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-8">
            {/* --- ZARİF/İNCE LOGO TASARIMI (Navbar ile Birebir) --- */}
            <div className="flex flex-col items-start font-sans">
                <div className="flex items-center">
                    {/* Lacivert Kutu (İçinde PETA) */}
                    <div className="bg-[#001F3F] flex items-center px-3 py-2 rounded-[6px] h-[55px] border border-white/10">
                        {/* "P" Harfli Ev İkonu */}
                        <svg width="32" height="32" viewBox="0 0 100 125" className="mr-3" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10 H 60 C 85 10, 85 55, 60 55 H 35 V 110 H 15 V 10 Z" fill="white" />
                            <path d="M35 55 L 50 40 L 65 55 V 85 H 35 V 55 Z" fill="#001F3F" />
                            <rect x="47" y="65" width="6" height="20" fill="white" />
                        </svg>

                        {/* PETA Yazısı - Zarif ve İnce Stil */}
                        <span 
                            className="text-3xl font-medium tracking-tighter text-white leading-none uppercase"
                            style={{ 
                                transform: 'scaleX(0.7) scaleY(1.3)', 
                                transformOrigin: 'left center',
                                display: 'inline-block',
                                marginRight: '-10px' 
                            }}
                        >
                            PETA
                        </span>
                    </div>

                    {/* YAPI Yazısı - Zarif ve İnce Stil */}
                    <span 
                        className="ml-4 text-3xl font-medium tracking-tighter text-white leading-none uppercase"
                        style={{ 
                            transform: 'scaleX(0.7) scaleY(1.3)', 
                            transformOrigin: 'left center',
                            display: 'inline-block'
                        }}
                    >
                        YAPI
                    </span>
                </div>
                {/* Slogan */}
                <span className="mt-3 text-[14px] font-medium tracking-wide text-white/80">
                    Güvenle Dönüşüm, Sağlam Yarınlar
                </span>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              İstanbul genelinde, özellikle <strong>Zeytinburnu</strong> ve <strong>Kağıthane</strong> bölgelerinde kentsel dönüşüm ve modern mimari disipliniyle sağlam yarınlar inşa ediyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#38BDF8]">Hızlı Bağlantılar</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#anasayfa" className="hover:text-[#38BDF8] transition-colors">Anasayfa</a></li>
              <li><a href="#hakkimizda" className="hover:text-[#38BDF8] transition-colors">Hakkımızda</a></li>
              <li><a href="#hizmetlerimiz" className="hover:text-[#38BDF8] transition-colors">Hizmetlerimiz</a></li>
              <li><a href="#projelerimiz" className="hover:text-[#38BDF8] transition-colors">Projelerimiz</a></li>
              <li><a href="#iletisim" className="hover:text-[#38BDF8] transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#38BDF8]">İletişim</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="mr-3 mt-1">📍</span>
                <span>BAHÇEŞEHİR 2. KISIM MAH. POSTA CAD. <br /> LOCA NO: 6 İÇ KAPI NO: 30 <br /> BAŞAKŞEHİR / İSTANBUL</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <a href="tel:+905325578570" className="hover:text-[#38BDF8] transition-colors">0532 557 85 70</a>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <a href="mailto:petayapi@gmail.com" className="hover:text-[#38BDF8] transition-colors">petayapi@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#38BDF8]">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/petainsaat" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-[#38BDF8] hover:text-[#001F3F] transition-all">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Peta Yapı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;