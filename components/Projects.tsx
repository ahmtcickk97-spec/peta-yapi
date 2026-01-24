import React from 'react';

const projects = [
  {
    id: "midyat-modern-konut",
    title: "Midyat Modern Konut Projesi",
    location: "Mardin / Midyat",
    description: "Midyat'ın tarihi dokusuna modern bir dokunuş. Peta Yapı güvencesiyle yükselen, yüksek kaliteli taş işçiliği ve ferah iç mekan detaylarıyla harmanlanmış prestijli bir yaşam projesi.",
    mainImage: "/projects/midyat/midyat-ana.jpeg", // Tam eşleşme sağlandı
    gallery: [
      "/projects/midyat/midyat-dis-1.jpeg",
      "/projects/midyat/midyat-dis-2.jpeg",
      "/projects/midyat/midyat-ic-1.jpeg",
      "/projects/midyat/midyat-ic-2.jpeg",
      "/projects/midyat/midyat-ic-3.jpeg",
      "/projects/midyat/midyat-ic-4.jpeg",
      "/projects/midyat/midyat-ic-5.jpeg",
      "/projects/midyat/midyat-ic-6.jpeg",
      "/projects/midyat/midyat-ic-7.jpeg",
    ],
    category: "Konut İnşaatı",
    details: "Modern Mimari | Kaliteli İşçilik | Geniş Balkonlar"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-primary uppercase tracking-tighter mb-4">PROJELERİMİZ</h2>
          <div className="h-1.5 w-24 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100">
              <div className="grid lg:grid-cols-2">
                
                {/* SOL: Görseller */}
                <div className="p-8 space-y-4 bg-white">
                  <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-inner">
                    <img 
                      src={p.mainImage} 
                      alt={p.title} 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-lg">
                      {p.category}
                    </div>
                  </div>
                  
                  {/* Kaydırılabilir Galeri */}
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {p.gallery.map((img, i) => (
                      <div key={i} className="flex-shrink-0 h-20 w-28 rounded-xl overflow-hidden border-2 border-transparent hover:border-[#38BDF8] transition-all shadow-sm">
                        <img src={img} alt="Detay" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* SAĞ: İçerik */}
                <div className="p-10 lg:p-16 flex flex-col justify-center bg-gray-50">
                  <div className="flex items-center text-[#38BDF8] font-bold text-sm tracking-widest uppercase mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {p.location}
                  </div>
                  <h3 className="text-4xl font-black text-brand-primary mb-6 uppercase tracking-tight leading-none">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-10 text-lg font-medium">{p.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {p.details.split(' | ').map((detail, index) => (
                      <span key={index} className="bg-white px-5 py-2.5 rounded-2xl border border-gray-200 text-[11px] font-bold text-brand-primary uppercase tracking-wider shadow-sm">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;