const projects = [
  {
    id: 1,
    title: "Peta Safir Konutları",
    category: "Konut Projesi",
    image: "https://images.unsplash.com/photo-1545324418-f1d3c5b53571?q=80&w=1000",
  },
  {
    id: 2,
    title: "Kuzey Endüstri Merkezi",
    category: "Endüstriyel Yapı",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
  },
  {
    id: 3,
    title: "Modern İş Merkezi",
    category: "Ticari Proje",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Seçkin Projelerimiz</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Peta Yapı imzasıyla hayata geçirdiğimiz, estetik ve güvenliğin buluştuğu bazı çalışmalarımız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white">
              {/* Görsel Alanı */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Bilgi Kartı */}
              <div className="p-6">
                <span className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">{project.title}</h3>
                <button className="mt-4 text-slate-700 font-medium hover:text-orange-500 flex items-center gap-2 transition">
                  Detayları Gör →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;