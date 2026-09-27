export const CONTACT = {
  phoneDisplay: '0532 557 85 70',
  phoneHref: 'tel:+905325578570',
  whatsapp: 'https://wa.me/905325578570',
  email: 'petayapi@gmail.com',
  instagram: 'https://instagram.com/petainsaat',
  addressShort: 'Bahçeşehir, İstanbul',
  address:
    'BAHÇEŞEHİR 2. KISIM MAH. POSTA CAD. BAHÇEŞEHİR LOCA NO: 6 İÇ KAPI NO: 30 BAŞAKŞEHİR / İSTANBUL',
  formspree: 'https://formspree.io/f/xrepzqyz',
}

export const NAV_LINKS = [
  { label: 'Anasayfa', href: '#anasayfa' },
  { label: 'Hakkımızda', href: '#hakkimizda' },
  { label: 'Hizmetlerimiz', href: '#hizmetlerimiz' },
  { label: 'Projelerimiz', href: '#projelerimiz' },
  { label: 'İletişim', href: '#iletisim' },
]

export const SERVICES = [
  {
    title: 'Kentsel Dönüşüm',
    text: 'Geleceği bugünden güvenle inşa ediyoruz. Eski ve riskli yapılarınızı, güncel yönetmeliklere uygun ve modern yaşam standartlarına sahip sağlam yapılara dönüştürüyoruz.',
    image: '/services/kentsel-donusum.jpg',
  },
  {
    title: 'Mimari Proje ve Tasarım',
    text: 'Estetiği işlevsellik ile buluşturuyoruz. Her bir detayı titizlikle planlanmış, modern çizgilere sahip, çevreyle uyumlu projeler tasarlıyoruz.',
    image: '/services/mimari-proje.jpg',
  },
  {
    title: 'İnşaat Taahhüt',
    text: "Projelerinizi tam zamanında ve yüksek kalite standartlarında teslim ediyoruz. Malzeme seçiminden işçiliğe kadar her aşamada 'sağlam yarınlar' sözümüzü tutuyoruz.",
    image: '/services/insaat-taahhut.jpg',
  },
]

export type ProjectMedia = { src: string; alt: string; type?: 'image' | 'video' }

export type Project = {
  id: string
  title: string
  location: string
  category: string
  status: 'Devam Ediyor' | 'Tamamlandı'
  description: string
  features: string[]
  cover: string
  media: ProjectMedia[]
}

const midyat = (file: string, alt: string): ProjectMedia => ({ src: `/projects/midyat/${file}.webp`, alt: `Midyat Modern Konutları — ${alt}` })

export const PROJECTS: Project[] = [
  {
    id: 'sumer',
    title: 'Sümer Yaşam ve Kentsel Dönüşüm',
    location: 'İstanbul / Zeytinburnu (Sümer)',
    category: 'Kentsel Dönüşüm Projesi',
    status: 'Devam Ediyor',
    description:
      "Zeytinburnu'nun kalbi Sümer Mahallesi'nde, Hatboyu Caddesi'ne komşu bu projemizde kentsel dönüşüm sürecini başlattık. Bölgenin dokusuna modern bir kimlik kazandırırken, hak sahiplerini depreme dayanıklı ve estetik yaşam alanlarıyla buluşturuyoruz.",
    features: ['Anlaşma Sağlandı', "Hatboyu'na Yakın", 'Sahil Yoluna Komşu', 'Depreme Dayanıklı'],
    cover: '/projects/sumer/ana-gorsel.webp',
    media: [
      { src: '/projects/sumer/ana-gorsel.webp', alt: 'Sümer Yaşam projesi ana görsel' },
      { src: '/projects/sumer/proje-video.mp4', alt: 'Sümer Yaşam proje videosu', type: 'video' },
    ],
  },
  {
    id: 'kagithane',
    title: 'Kâğıthane Prestij Kule',
    location: 'İstanbul / Kâğıthane (Talatpaşa Caddesi)',
    category: 'Karma Proje (Konut + Ticari)',
    status: 'Devam Ediyor',
    description:
      "İstanbul'un kalbinde, Levent iş merkezlerine komşu lokasyonda yükselen yeni projemiz. Şehrin dinamizmini modern mimari ve yüksek yatırım değeriyle buluşturuyoruz.",
    features: ['Kaba İnşaat Aşamasında', "Levent'e 5 Dk", 'Yüksek Kira Getirisi', 'Metroya Yakın'],
    cover: '/projects/kagithane/render.webp',
    media: [
      { src: '/projects/kagithane/render.webp', alt: 'Kâğıthane Prestij Kule render görseli' },
      { src: '/projects/kagithane/santiye-2026.jpg', alt: 'Kâğıthane Prestij Kule şantiyesinin güncel durumu' },
    ],
  },
  {
    id: 'inci-residence',
    title: 'İnci Yapı Residence',
    location: 'Mersin / Yenişehir',
    category: 'Konut Projesi',
    status: 'Tamamlandı',
    description:
      "Mersin Yenişehir'de İnci Grup Yapı ile birlikte hayata geçirdiğimiz bu konut projesi; modern cephe tasarımı, depreme dayanıklı yapısı ve kaliteli işçiliğiyle Peta Yapı imzasını taşıyor.",
    features: ['İnci Grup Yapı ile Ortak Proje', 'Modern Cephe Tasarımı', 'Deprem Yönetmeliğine Uygun'],
    cover: '/projects/inci-residence/peta-yapi-1.jpg',
    media: [
      { src: '/projects/inci-residence/peta-yapi-1.jpg', alt: 'İnci Yapı Residence — Peta Yapı yazılı ön cephe' },
      { src: '/projects/inci-residence/peta-yapi-2.jpg', alt: 'İnci Yapı Residence — yan cephe görünümü' },
      { src: '/projects/inci-residence/peta-yapi-3.jpg', alt: 'İnci Yapı Residence — cephe görünümü' },
    ],
  },
  {
    id: 'midyat',
    title: 'Midyat Modern Konutları',
    location: 'Mardin / Midyat',
    category: 'Tamamlanmış Proje',
    status: 'Tamamlandı',
    description:
      "Midyat'ın yöresel taş mimarisi ile modern yaşamın konforunu birleştiren bu projemiz, Peta Yapı'nın kalite standartlarını yansıtan en seçkin eserlerindendir.",
    features: ['Modern Mimari', 'Deprem Yönetmeliğine Uygun', 'Lüks İç Mekan', 'Taş İşçiliği'],
    cover: '/projects/midyat/ana-cephe.webp',
    media: [
      midyat('ana-cephe', 'Ana cephe'),
      midyat('arka-cephe', 'Arka cephe'),
      midyat('teras', 'Teras'),
      midyat('balkon', 'Balkon'),
      midyat('salon', 'Salon'),
      midyat('mutfak', 'Mutfak'),
      midyat('oda-1', 'Oda 1'),
      midyat('oda-2', 'Oda 2'),
      midyat('oda-3', 'Oda 3'),
      midyat('banyo', 'Banyo'),
      midyat('banyo-2', 'Banyo 2'),
      midyat('asansor', 'Asansör'),
    ],
  },
]

export const HERO_IMAGES = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
]
