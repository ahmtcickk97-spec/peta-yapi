import React from 'react';

const services = [
  {
    title: "Kentsel Dönüşüm",
    description: "Geleceği bugünden güvenle inşa ediyoruz. Eski ve riskli yapılarınızı, güncel yönetmeliklere uygun ve modern yaşam standartlarına sahip sağlam yapılara dönüştürüyoruz.",
    icon: (
      <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Mimari Proje ve Tasarım",
    description: "Estetiği işlevsellik ile buluşturuyoruz. Her bir detayı titizlikle planlanmış, modern çizgilere sahip, çevreyle uyumlu projeler tasarlıyoruz.",
    icon: (
      <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "İnşaat Taahhüt",
    description: "Projelerinizi tam zamanında ve yüksek kalite standartlarında teslim ediyoruz. Malzeme seçiminden işçiliğe kadar her aşamada 'sağlam yarınlar' sözümüzü tutuyoruz.",
    icon: (
      <svg className="w-11 h-11" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#111111] text-white">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h4 className="text-[#a89b89] font-medium text-[11px] tracking-[0.35em] uppercase mb-4">
            Ne Yapıyoruz
          </h4>
          <h2 className="font-display text-3xl md:text-4xl text-white uppercase tracking-[0.03em]">
            Hizmetlerimiz
          </h2>
          <div className="h-px w-16 bg-[#a89b89] mx-auto mt-6"></div>
        </div>

        {/* Hizmet Kartları Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-10 bg-white/[0.03] border border-white/10 hover:border-[#a89b89]/50 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* İkon Bölümü */}
              <div className="mb-8 text-[#a89b89] group-hover:scale-110 transition-transform duration-300 w-fit">
                {s.icon}
              </div>

              {/* Başlık */}
              <h3 className="font-display text-lg md:text-xl mb-5 text-white group-hover:text-[#a89b89] transition-colors duration-300 uppercase tracking-[0.02em]">
                {s.title}
              </h3>

              {/* Açıklama */}
              <p className="text-white/60 text-sm leading-relaxed font-light">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;