import React from 'react';

const projects = [
  {
    id: "midyat-modern-konut",
    title: "Midyat Modern Konut Projesi",
    location: "Mardin / Midyat",
    description: "Midyat'ın gelişen yüzüne uygun, modern mimari anlayışıyla inşa edilmiş, asansörlü ve yüksek kaliteli iç mekanlara sahip konforlu yaşam alanları. Peta Yapı güvencesiyle sağlam ve estetik bir gelecek.",
    mainImage: "/projects/midyat/midyat-dis-1.jpeg",
    gallery: [
      "/projects/midyat/midyat-dis-2.jpeg",
      "/projects/midyat/midyat-dis-3.jpeg",
      "/projects/midyat/midyat-ic-1.jpeg",
      "/projects/midyat/midyat-ic-2.jpeg",
      "/projects/midyat/midyat-ic-3.jpeg",
    ],
    category: "Konut İnşaatı",
    details: "Modern Tasarım | Asansörlü | Ferah İç Mekanlar"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Başlık Bölümü */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-primary uppercase tracking-tighter mb-4">
            PROJELERİMİZ
          </h2>
          <div className="h-1.5 w-24 bg-[#38BDF8] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {projects.map((p) => (
            <div key={p.id} className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100">
              <div className="grid lg:grid-cols-2 gap-0">
                
                {/* SOL TARAF: Görsel ve Galeri */}
                <div className="p-8 space-y-4 bg-white">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden group">
                    <img 
                      src={p.mainImage} 
                      alt={p.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-brand-primary/90 backdrop-blur-sm text-white text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em]">
                      {p.category}
                    </div>
                  </div>
                  
                  {/* Galeri Thumbnails */}
                  <div className="grid grid-cols-5 gap-3">
                    {p.gallery.map((img, i) => (
                      <div key={i} className="h-20 rounded-xl overflow-hidden cursor-pointer border-2 border-transparent hover:border-[#38BDF8] transition-all">
                        <img src={img} alt="Detay" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* SAĞ TARAF: İçerik */}
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center text-[#38BDF8] font-bold text-sm tracking-widest uppercase mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {p.location}
                  </div>
                  
                  <h3 className="text-4xl font-black text-brand-primary mb-6 uppercase leading-[0.9] tracking-tight">
                    {p.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-10 text-lg font-medium">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {p.details.split(' | ').map((detail, index) => (
                      <span key={index} className="bg-brand-primary/5 px-4 py-2 rounded-xl border border-brand-primary/10 text-[11px] font-bold text-brand-primary uppercase tracking-wider">
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