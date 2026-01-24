const projects = [
  {
    id: 1,
    title: "Lüks Konut Kompleksi",
    description: "Deprem yönetmeliğine tam uyumlu, akıllı ev teknolojileriyle donatılmış modern yaşam alanları.",
    image: "/proje1.jpg", // public klasörüne bu isimle fotoğraf eklemeyi unutma
    category: "Konut İnşaatı",
    tags: ["Depreme Dayanıklı", "Modern Mimari"]
  },
  {
    id: 2,
    title: "Kentsel Dönüşüm Hamlesi",
    description: "Eski ve riskli yapıların, güvenli ve estetik projelere dönüştürülerek şehre kazandırılması süreci.",
    image: "/proje2.jpg",
    category: "Kentsel Dönüşüm",
    tags: ["Güvenli Yapı", "Şehir Estetiği"]
  },
  {
    id: 3,
    title: "Villa ve Özel Yaşam Alanı",
    description: "Doğa ile iç içe, kişiye özel mimari detaylarla tasarlanmış yüksek konforlu yaşam projeleri.",
    image: "/proje3.jpg",
    category: "Mimari Tasarım",
    tags: ["Lüks Tasarım", "Peyzaj"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-primary uppercase tracking-tighter mb-4">PROJELERİMİZ</h2>
          <div className="h-1 w-20 bg-[#38BDF8] mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p) => (
            <div key={p.id} className="group relative bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative h-72 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <p className="text-white text-sm italic font-medium">Güvenle İnşa Edildi.</p>
                </div>
              </div>
              <div className="p-8">
                <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-[0.2em]">{p.category}</span>
                <h3 className="text-xl font-extrabold text-brand-primary mt-2 mb-3 uppercase tracking-tight">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="text-[9px] bg-gray-200 px-2 py-1 rounded text-gray-700 font-bold uppercase">{tag}</span>
                  ))}
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