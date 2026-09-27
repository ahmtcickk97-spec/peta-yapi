import { Header } from '@/components/site/header'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { Projects } from '@/components/site/projects'
import { Stats } from '@/components/site/stats'
import { Contact } from '@/components/site/contact'
import { Footer } from '@/components/site/footer'
import { WhatsAppButton } from '@/components/site/whatsapp-button'

export const dynamic = 'force-static'

export default function Home() {
  const year = 2026
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Stats />
        <Contact />
      </main>
      <Footer year={year} />
      <WhatsAppButton />
    </>
  )
}
