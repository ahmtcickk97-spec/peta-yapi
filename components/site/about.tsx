import Image from 'next/image'
import { MapPinned, ShieldCheck } from 'lucide-react'
import { Reveal } from './reveal'

const CARDS = [
  {
    icon: MapPinned,
    title: 'Geniş Hizmet Ağı',
    text: "Kâğıthane'den Levent'e, Zeytinburnu'ndan çevre ilçelere kadar geniş bir lokasyonda prestijli projeler üretiyoruz.",
  },
  {
    icon: ShieldCheck,
    title: 'Güvenli Yarınlar',
    text: "Yalnızca bina değil; İstanbul'un kalbinde huzurla yaşanacak, dayanıklı ve modern yaşam alanları tasarlıyoruz.",
  },
]

export function About() {
  return (
    <section id="hakkimizda" className="scroll-mt-16 bg-background py-24 md:py-[120px]">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted">
            <Image
              src="/render.webp"
              alt="Peta Yapı modern konut projesi render görseli"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover transition-transform [transition-duration:1200ms] hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 right-0 bg-primary px-8 py-7 text-primary-foreground shadow-2xl md:-right-8">
            <div className="font-display text-4xl md:text-5xl">10+</div>
            <div className="mt-2 text-[11px] uppercase tracking-[3px] text-accent">Yıllık Sektör Tecrübesi</div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="section-label">Kurumsal Kimliğimiz</span>
          <h2 className="section-title">Zeytinburnu&apos;ndan Başlayan İstanbul Vizyonu</h2>
          <p className="mt-8 text-[15px] leading-[1.9] text-muted-foreground">
            Peta Yapı olarak, merkezimizin bulunduğu Zeytinburnu başta olmak üzere, İstanbul&apos;un her iki yakasında modern mimari ve
            mühendislik disipliniyle değer inşa ediyoruz. Şehrin dokusuna saygı duyan, deprem yönetmeliğine tam uyumlu ve estetik
            kaygısı yüksek projelerimizle, İstanbul&apos;un kentsel dönüşüm sürecine öncülük ediyoruz.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {CARDS.map((c) => (
              <div key={c.title} className="group bg-card p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <c.icon className="h-7 w-7 text-accent transition-transform duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="mt-5 text-sm font-semibold uppercase tracking-[2px]">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
