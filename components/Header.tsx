"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { buildWhatsAppLink } from "@/lib/contact";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Daghero Consultoría Gastronómica"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 md:h-10 md:w-10"
            priority
          />
          <span className="font-display text-lg tracking-wide text-ink">
            DAGHERO<span className="text-brass">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-ink-muted md:flex">
          <a href="#completo" className="transition-colors hover:text-ink">
            Asesoramiento completo
          </a>
          <a href="#puntual" className="transition-colors hover:text-ink">
            Asesoramientos puntuales
          </a>
          <a href="#desde-cero" className="transition-colors hover:text-ink">
            Proyecto desde cero
          </a>
          <a href="#contacto" className="transition-colors hover:text-ink">
            Contacto
          </a>
        </nav>

        <a
          href={buildWhatsAppLink(
            "Hola Facundo! Quiero más información sobre la consultoría."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-brass/40 px-4 py-2 text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-bg"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
