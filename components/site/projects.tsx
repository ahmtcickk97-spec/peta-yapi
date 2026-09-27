'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, Check, X, Play } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/site-data'
import { Reveal } from './reveal'

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [index, setIndex] = useState(0)
  const media = selected?.media ?? []
  const count = media?.length ?? 0
  const current = media?.[index]

  const close = useCallback(() => setSelected(null), [])
  const step = useCallback((d: number) => setIndex((i) => (count ? (i + d + count) % count : 0)), [count])

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e?.key === 'Escape') close()
      if (e?.key === 'ArrowRight') step(1)
      if (e?.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selected, close, step])

  const open = (p: Project) => {
    setIndex(0)
    setSelected(p)
  }

  return (
    <section id="projelerimiz" className="scroll-mt-16 bg-background py-24 md:py-[120px]">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="section-label">Projelerimiz</span>
          <h2 className="section-title">Öne Çıkan Projelerimiz</h2>
          <p className="mt-5 text-[15px] text-muted-foreground">
            İstanbul&apos;dan Mersin ve Mardin&apos;e; kentsel dönüşümden karma projelere uzanan, güven ve kaliteyle hayata geçirdiğimiz yapılar.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {(PROJECTS ?? []).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12}>
              <button
                type="button"
                onClick={() => open(p)}
                className="group relative block aspect-square w-full lg:aspect-[16/10] overflow-hidden bg-primary text-left"
                aria-label={`${p.title} projesinin detaylarını gör`}
              >
                <Image src={p.cover} alt={`${p.title} proje görseli`} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover transition-transform [transition-duration:900ms] ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                <span className="absolute left-8 top-8 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[2px] text-white backdrop-blur">
                  {p.status}
                </span>
                <div className="absolute inset-x-8 bottom-8 pr-14 text-white">
                  <div className="mb-3 text-[11px] font-medium uppercase tracking-[3px] text-accent">{p.category}</div>
                  <h3 className="font-display text-xl leading-snug md:text-2xl">{p.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-white/70">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </p>
                </div>
                <span className="absolute bottom-8 right-8 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-all duration-500 group-hover:border-white group-hover:bg-white group-hover:text-primary">
                  <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] overflow-y-auto bg-black/90 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={selected?.title ?? 'Proje detayı'}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto grid w-full max-w-6xl grid-cols-1 bg-background lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button type="button" onClick={close} aria-label="Kapat" className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground transition-colors hover:bg-accent">
                <X className="h-5 w-5" />
              </button>

              <div className="min-w-0 bg-primary">
                <div className="relative aspect-[4/3] w-full">
                  {current?.type === 'video' ? (
                    <video key={current?.src} src={current?.src} controls autoPlay muted playsInline className="absolute inset-0 h-full w-full object-contain" />
                  ) : current ? (
                    <Image key={current?.src} src={current?.src ?? ''} alt={current?.alt ?? ''} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-contain" />
                  ) : null}
                  {count > 1 && (
                    <>
                      <button type="button" onClick={() => step(-1)} aria-label="Önceki görsel" className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white hover:bg-white hover:text-primary">
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button type="button" onClick={() => step(1)} aria-label="Sonraki görsel" className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white hover:bg-white hover:text-primary">
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}
                </div>
                {count > 1 && (
                  <div className="flex gap-2 overflow-x-auto p-3">
                    {media.map((m, i) => (
                      <button
                        key={m.src}
                        type="button"
                        onClick={() => setIndex(i)}
                        aria-label={m.alt}
                        className={`relative h-14 w-20 shrink-0 overflow-hidden bg-black transition-opacity ${i === index ? 'opacity-100 ring-1 ring-accent' : 'opacity-50 hover:opacity-90'}`}
                      >
                        {m.type === 'video' ? (
                          <span className="flex h-full w-full items-center justify-center text-white"><Play className="h-5 w-5" /></span>
                        ) : (
                          <Image src={m.src} alt="" fill sizes="80px" className="object-cover" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="min-w-0 p-8 md:p-10">
                <span className="section-label">{selected?.category}</span>
                <h3 className="font-display text-2xl leading-snug">{selected?.title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-accent" /> {selected?.location}
                </p>
                <span className="mt-5 inline-block bg-primary px-3 py-1.5 text-[10px] uppercase tracking-[2px] text-primary-foreground">{selected?.status}</span>
                <p className="mt-6 text-sm leading-[1.9] text-muted-foreground">{selected?.description}</p>
                <ul className="mt-8 grid grid-cols-2 gap-3">
                  {(selected?.features ?? []).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <a href="#iletisim" onClick={close} className="btn-dark mt-10 w-full">
                  Bilgi Al <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
