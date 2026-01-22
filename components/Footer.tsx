import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Şirket Bilgisi */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-6">
              PETA<span className="text-orange-500">YAPI</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              30 yılı aşkın tecrübemizle, güvenli ve modern yaşam alanları inşa ediyoruz. Geleceğin mimarisini sağlam temeller üzerine kuruyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h4 className="text-lg font-bold mb-6">Hızlı Menü</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-orange-500 transition">Ana Sayfa</Link></li>
              <li><Link href="/projeler" className="hover:text-orange-500 transition">Projelerimiz</Link></li>
              <li><Link href="/hizmetler" className="hover:text-orange-500 transition">Hizmetlerimiz</Link></li>
              <li><Link href="/iletisim" className="hover:text-orange-500 transition">İletişim</Link></li>
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="text-lg font-bold mb-6">Uzmanlıklar</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Konut İnşaatı</li>
              <li>Endüstriyel Yapılar</li>
              <li>Mimari Projelendirme</li>
              <li>Kentsel Dönüşüm</li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-lg font-bold mb-6">Bize Ulaşın</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-orange-500">📍</span>
                <span>Atatürk Mah. Projeler Cad. No:34 <br />İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">📞</span>
                <span>+90 (212) 555 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-orange-500">✉️</span>
                <span>info@petayapi.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Telif Hakkı Paneli */}
        <div className="border-t border-slate-800 pt-8 mt-8 text-center text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Peta Yapı İnşaat A.Ş. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;