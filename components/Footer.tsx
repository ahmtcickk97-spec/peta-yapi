import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001F3F] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Logo ve Motto */}
          <div className="space-y-6">
            <div className="flex flex-col items-start leading-none">
              
              {/* --- YENİ FOOTER LOGOSU --- */}
              <div className="flex items-center">
                {/* PETA: Lacivert Kutu, Beyaz Yazı (Footer'da belli olması için ince çerçeve eklendi) */}
                <span className="bg-[#001F3F] text-white px-2 py-1 text-2xl font-black tracking-tighter rounded-sm border border-white/10">
                    PETA
                </span>
                {/* YAPI: Açık Mavi Kutu, Lacivert Yazı (Aynı kaldı) */}
                <span className="ml-1 bg-[#38BDF8] text-[#001F3F] px-2 py-1 text-2xl font-black tracking-tighter rounded-sm">
                    YAPI
                </span>
              </div>
              {/* --- LOGO BİTİŞ --- */}

            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              İstanbul ve Mardin'in dokusuna uygun, modern mimari ve mühendislik disipliniyle sağlam yarınlar inşa ediyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
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

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#38BDF8]">İletişim</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start">
                <span className="mr-3">📍</span>
                <span>Zeytinburnu, İstanbul / Türkiye</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">📞</span>
                <span>0532 557 85 70</span>
              </li>
              <li className="flex items-center">
                <span className="mr-3">✉️</span>
                <span>info@petayapi.com</span>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-[#38BDF8]">Sosyal Medya</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/petainsaat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl hover:bg-[#38BDF8] hover:text-[#001F3F] transition-all duration-300 group"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">
          <p>© {new Date().getFullYear()} Peta Yapı. Tüm Hakları Saklıdır. | İstanbul & Mardin</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;