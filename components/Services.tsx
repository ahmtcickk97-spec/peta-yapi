import React from 'react';

const services = [
  {
    title: "Kentsel Dönüşüm",
    description: "Geleceği bugünden güvenle inşa ediyoruz. Eski yapılarınızı, güncel yönetmeliklere uygun ve modern yaşam standartlarına sahip sağlam yapılara dönüştürüyoruz.",
    icon: (
      <svg className="w-10 h-10 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Mimari Proje ve Tasarım",
    description: "Estetiği işlevsellik ile buluşturuyoruz. Her bir detayı titizlikle planlanmış, modern çizgilere sahip projeler tasarlıyoruz.",
    icon: (
      <svg className="w-10 h-10 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "İnşaat Taahhüt",
    description: "Projelerinizi tam zamanında ve yüksek kalite standartlarında teslim ediyoruz. Malzeme seçiminden işçiliğe kadar her aşamada 'sağlam yarınlar' sözümüzü tutuyoruz.",
    icon: (
      <svg className="w-10 h-10 text-[#38BDF8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">HİZMETLERİMİZ</h2>
          <div className="h-1 w-20 bg-[#38BDF8] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;