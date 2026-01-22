const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Arka Plan Görseli (Geçici olarak profesyonel bir inşaat görseli ekledim) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070')`,
        }}
      >
        {/* Görselin üzerine koyu bir katman ekleyerek yazıların okunmasını sağlıyoruz */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* İçerik Alanı */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Geleceği Güvenle <br />
          <span className="text-orange-500 underline decoration-white/20">İnşa Ediyoruz</span>
        </h1>
        <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
          Peta Yapı olarak, modern mimariyi mühendislik disipliniyle birleştiriyor, yaşam alanlarınıza değer katıyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/50">
            PROJELERİMİZİ İNCELE
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-md font-bold text-lg transition-all">
            TEKLİF ALIN
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;