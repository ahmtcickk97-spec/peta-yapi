'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Instagram, Menu, X } from 'lucide-react'
import { CONTACT, NAV_LINKS } from '@/lib/site-data'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled
  const links = NAV_LINKS.slice(1)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-white/95 shadow-[0_2px_30px_rgba(0,0,0,0.06)] backdrop-blur' : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className={`container-site flex items-center justify-between transition-all duration-500 ${solid ? 'h-[76px]' : 'h-[90px]'}`}>
        <a href="#anasayfa" aria-label="Peta Yapı — Anasayfa" className="relative block h-10 w-[107px]">
          <Image src="/logo-mark-white.png" alt="Peta Yapı" fill priority sizes="107px" className={`object-contain transition-opacity duration-500 ${solid ? 'opacity-0' : 'opacity-100'}`} />
          <Image src="/logo-mark.png" alt="" aria-hidden fill sizes="107px" className={`object-contain transition-opacity duration-500 ${solid ? 'opacity-100' : 'opacity-0'}`} />
        </a>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Ana menü">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative text-[13px] font-medium uppercase tracking-[3px] transition-colors ${
                solid ? 'text-foreground hover:text-accent' : 'text-white hover:text-white/70'
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              solid ? 'border-foreground/15 text-foreground hover:border-accent hover:bg-accent hover:text-white' : 'border-white/30 text-white hover:bg-white hover:text-primary'
            }`}
          >
            <Instagram className="h-4 w-4" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          aria-expanded={open}
          className={`relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden ${solid || open ? 'text-foreground' : 'text-white'}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[55] flex flex-col bg-background px-8 pt-28 transition-all duration-500 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <ul className="space-y-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="font-display text-xl uppercase tracking-[2px] text-foreground hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto space-y-2 pb-10 text-sm text-muted-foreground">
          <a href={CONTACT.phoneHref} className="block" suppressHydrationWarning>{CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`} className="block" suppressHydrationWarning>{CONTACT.email}</a>
        </div>
      </div>
    </header>
  )
}
