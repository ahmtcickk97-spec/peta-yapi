import Image from 'next/image'
import { Building2, DraftingCompass, HardHat } from 'lucide-react'
import { SERVICES } from '@/lib/site-data'
import { Reveal } from './reveal'

const ICONS = [Building2, DraftingCompass, HardHat]

export function Services() {
  return (
    <section id="hizmetlerimiz" className="scroll-mt-16 bg-secondary py-24 md:py-[120px]">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="section-label">Hizmetlerimiz</span>
          <h2 className="section-title">Uzmanlık Alanlarımız</h2>
          <p className="mt-5 text-[15px] text-muted-foreground">
            Kentsel dönüşümden mimari tasarıma, inşaat taahhüdünden anahtar teslime kadar tüm süreci tek çatı altında yönetiyoruz.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {(SERVICES ?? []).map((s, i) => {
            const Icon = ICONS[i] ?? Building2
            return (
              <Reveal key={s.title} delay={i * 0.12}>
                <article className="group h-full bg-background shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image src={s.image} alt={`${s.title} hizmeti`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/40" />
                    <span className="absolute left-6 top-6 font-display text-sm tracking-[2px] text-white">0{i + 1}</span>
                  </div>
                  <div className="relative p-8">
                    <div className="absolute -top-7 right-8 flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground transition-colors duration-500 group-hover:bg-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg leading-snug tracking-[1px]">{s.title}</h3>
                    <div className="my-5 h-px w-10 bg-accent transition-all duration-500 group-hover:w-20" />
                    <p className="text-sm leading-[1.85] text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
