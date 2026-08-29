import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FullAdvisory from "@/components/FullAdvisory";
import PunctualTicket from "@/components/PunctualTicket";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <main className="bg-bg">
      <Header />
      <Hero />

      <section
        id="servicios"
        className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32"
      >
        <RevealSection>
          <p className="text-xs uppercase tracking-[0.3em] text-brass">
            Formas de trabajo
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            Dos caminos para ordenar tu negocio gastronómico.
          </h2>
        </RevealSection>

        <div className="mt-16 space-y-16">
          <RevealSection>
            <FullAdvisory />
          </RevealSection>
          <RevealSection delay={0.1}>
            <PunctualTicket />
          </RevealSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
