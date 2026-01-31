import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"; // Buraya ekledik

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="hakkimizda"><About /></div>
      <div id="hizmetlerimiz"><Services /></div>
      <div id="projelerimiz"><Projects /></div>
      <div id="iletisim"><ContactForm /></div>
      <Footer /> {/* Ve buraya ekledik */}
    </main>
  );
}