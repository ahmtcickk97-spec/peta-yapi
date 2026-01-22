import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-brand-primary py-3 shadow-xl fixed w-full z-50 border-b border-white/5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* --- PETA YAPI LOGO ALANI --- */}
        <Link href="/" className="flex flex-col items-start no-underline group">
          <div className="flex items-center leading-none">
            {/* PETA: Canlı Mavi (Lacivert üzerinde parlaması için) */}
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-[#38BDF8] uppercase">
              PETA
            </span>
            {/* YAPI: Beyaz */}
            <span className="text-2xl md:text-3xl font-light tracking-tighter text-white uppercase ml-1">
              YAPI
            </span>
          </div>
          
          {/* SLOGAN: Güvenle Dönüşüm, Sağlam Yarınlar */}
          <span className="text-[9px] md:text-[10px] font-medium text-white/70 uppercase tracking-[0.12em] mt-1 border-t border-white/20 pt-1">
            Güvenle Dönüşüm, Sağlam Yarınlar
          </span>
        </Link>
        {/* --- LOGO BİTİŞ --- */}

        {/* Menü Linkleri */}
        <div className="hidden md:flex items-center space-x-8 font-semibold text-white/80 text-[13px] tracking-wide">
          <Link href="/" className="hover:text-[#38BDF8] transition-colors">ANA SAYFA</Link>
          <Link href="#projects" className="hover:text-[#38BDF8] transition-colors">PROJELERİMİZ</Link>
          <Link href="#services" className="hover:text-[#38BDF8] transition-colors">HİZMETLER</Link>
          <Link href="#contact" className="hover:text-[#38BDF8] transition-colors">İLETİŞİM</Link>
        </div>

        {/* Teklif Al Butonu */}
        <Link href="#contact" className="bg-white text-brand-primary px-5 py-2 rounded font-bold hover:bg-[#38BDF8] hover:text-white transition shadow-lg text-[12px] uppercase tracking-wider">
          TEKLİF AL
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;