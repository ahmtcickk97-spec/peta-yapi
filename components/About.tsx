import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sol Taraf: Görsel Alanı */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/projects/midyat/midyat-ana.jpeg" 
                alt="Peta Yapı Vizyon" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Dekoratif Mavi Kutu */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#38BDF8] rounded-[3rem] -z-10 opacity-20 hidden lg:block"></div>
          </div>

          {/* Sağ Taraf: Metin Alanı */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-[#38BDF8] font-bold text-sm tracking-[0.3em] uppercase">Biz Kimiz?</span>
              <h2 className="text-5xl font-black text-brand-primary uppercase leading-tight tracking-tighter">
                Geleceği Güvenle <br /> İnşa Ediyoruz
              </h2>
              <div className="h-1.5 w-20 bg-[#38BDF8] rounded-full"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              Peta Yapı olarak, modern mimariyi mühendislik disipliniyle birleştirerek "Sağlam Yarınlar" inşa ediyoruz. 
              Özellikle deprem yönetmeliğine tam uyumlu, estetik ve işlevsel yaşam alanları üretmek temel misyonumuzdur.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-brand-primary tracking-tighter">15+</h4>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Yıllık Deneyim</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl font-black text-brand-primary tracking-tighter">100+</h4>
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">Tamamlanan Konut</p>
              </div>
            </div>

            <p className="text-gray-500 italic border-l-4 border-[#38BDF8] pl-6 py-2">
              "Sadece bina değil, huzurla yaşanacak yuvalar inşa etmek için buradayız."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;