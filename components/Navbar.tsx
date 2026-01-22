import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Bölümü */}
        <div className="text-2xl font-bold tracking-tighter">
          PETA<span className="text-orange-500">YAPI</span>
        </div>

        {/* Menü Linkleri */}
        <div className="hidden md:flex space-x-8 font-medium text-sm uppercase">
          <Link href="/" className="hover:text-orange-500 transition">Ana Sayfa</Link>
          <Link href="/projeler" className="hover:text-orange-500 transition">Projelerimiz</Link>
          <Link href="/hizmetler" className="hover:text-orange-500 transition">Hizmetler</Link>
          <Link href="/iletisim" className="hover:text-orange-500 transition">İletişim</Link>
        </div>

        {/* Aksiyon Butonu */}
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-bold transition">
          TEKLİF AL
        </button>
      </div>
    </nav>
  );
};

export default Navbar;