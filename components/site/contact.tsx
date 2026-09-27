'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react'
import { CONTACT } from '@/lib/site-data'
import { Reveal } from './reveal'

const SERVICE_OPTIONS = [
  'Konut İnşaatı / Kentsel Dönüşüm',
  'Mimari Tasarım & Projelendirme',
  'Tadilat & Anahtar Teslim Restorasyon',
  'Mühendislik Çözümleri',
]

const fieldCls =
  'w-full border-0 border-b border-input bg-transparent px-0 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-0 transition-colors'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(CONTACT.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res?.ok) {
        setStatus('ok')
        form?.reset?.()
      } else {
        console.error('Formspree hatası', res?.status)
        setStatus('error')
      }
    } catch (err) {
      console.error('Form gönderilemedi', err)
      setStatus('error')
    }
  }

  const items = [
    { icon: MapPin, label: 'Merkez Ofis', value: CONTACT.address, href: undefined },
    { icon: Phone, label: 'Telefon & WhatsApp', value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
    { icon: Mail, label: 'E-Posta', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]

  return (
    <section id="iletisim" className="scroll-mt-16 bg-secondary py-24 md:py-[120px]">
      <div className="container-site grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
        <Reveal>
          <span className="section-label">İletişim</span>
          <h2 className="section-title">Projenizi Birlikte Planlayalım</h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-muted-foreground">
            Bahçeşehir merkezli ofisimizde sizi ağırlamaktan mutluluk duyarız. Projeniz için ücretsiz keşif ve teklif almak için formu
            doldurmanız yeterlidir.
          </p>
          <ul className="mt-12 space-y-8">
            {items.map((it) => (
              <li key={it.label} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-foreground/10 text-accent">
                  <it.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <div className="text-[11px] uppercase tracking-[3px] text-accent">{it.label}</div>
                  {it.href ? (
                    <a href={it.href} className="mt-1 block text-[15px] transition-colors hover:text-accent" suppressHydrationWarning>
                      {it.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed">{it.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="bg-background p-8 shadow-[0_20px_60px_rgba(0,0,0,0.05)] md:p-12">
            <h3 className="font-display text-xl tracking-[1px]">Teklif İste</h3>
            <div className="mt-8 grid gap-7 md:grid-cols-2">
              <label className="block">
                <span className="text-[11px] uppercase tracking-[3px] text-muted-foreground">Ad Soyad</span>
                <input name="fullname" required minLength={2} placeholder="Adınız Soyadınız" className={fieldCls} />
              </label>
              <label className="block">
                <span className="text-[11px] uppercase tracking-[3px] text-muted-foreground">E-Posta</span>
                <input name="email" type="email" required placeholder="ornek@mail.com" className={fieldCls} />
              </label>
            </div>
            <label className="mt-7 block">
              <span className="text-[11px] uppercase tracking-[3px] text-muted-foreground">Hizmet Türü</span>
              <select name="service_type" required defaultValue="" className={`${fieldCls} cursor-pointer`}>
                <option value="" disabled>
                  Seçiniz
                </option>
                {SERVICE_OPTIONS.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>
            <label className="mt-7 block">
              <span className="text-[11px] uppercase tracking-[3px] text-muted-foreground">Mesaj</span>
              <textarea name="message" required rows={4} placeholder="Projenizden kısaca bahsedin" className={`${fieldCls} resize-none`} />
            </label>

            <button type="submit" disabled={status === 'sending'} className="btn-dark mt-10 w-full disabled:opacity-60">
              {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
              Teklif İsteği Gönder
              {status !== 'sending' ? <ArrowRight className="h-4 w-4" /> : null}
            </button>

            <div aria-live="polite" className="mt-5 min-h-[24px] text-sm">
              {status === 'ok' && (
                <p className="flex items-center gap-2 text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> Mesajınız iletildi. En kısa sürede sizinle iletişime geçeceğiz.
                </p>
              )}
              {status === 'error' && <p className="text-destructive">Mesaj gönderilemedi. Lütfen tekrar deneyin veya WhatsApp&apos;tan yazın.</p>}
            </div>
            <p className="text-xs text-muted-foreground">Form bilgileriniz yalnızca size dönüş yapmak amacıyla kullanılır.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
