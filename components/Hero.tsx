"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { buildWhatsAppLink } from "@/lib/contact";

const HEADLINE_START = "La rentabilidad de tu restaurante";
const HEADLINE_END = "no es casualidad. Es método.";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (!headlineRef.current) return;
      const words = headlineRef.current.querySelectorAll("span[data-word]");

      gsap.fromTo(
        words,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.06,
          delay: 0.3,
        }
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex h-[60vh] min-h-[600px] w-full items-center overflow-hidden bg-bg"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/videos/inicio.mp4" type="video/mp4" />
      </video>

      {/* Velo oscuro parejo para que el texto sea legible sobre el video */}
      <div className="absolute inset-0 bg-bg/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg to-transparent" />

      {/* Contenido — superpuesto sobre el video */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-16 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-brass">
          Daghero &mdash; Consultoría Gastronómica
        </p>

        <h1
          ref={headlineRef}
          className="max-w-3xl font-display text-4xl font-light leading-[1.15] text-ink drop-shadow-sm sm:text-5xl md:text-6xl"
        >
          {HEADLINE_START.split(" ").map((word, i) => (
            <span key={`a-${i}`} data-word className="mr-3 inline-block">
              {word}
            </span>
          ))}
          {HEADLINE_END.split(" ").map((word, i) => (
            <span
              key={`b-${i}`}
              data-word
              className="mr-3 inline-block italic text-brass"
            >
              {word}
            </span>
          ))}
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
          Diseñamos procesos, cartas y equipos de cocina para que cada plato
          que sale del pase también sea rentable en el balance.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#servicios"
            className="rounded-full bg-brass px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.03]"
          >
            Ver formas de trabajo
          </a>
          <a
            href={buildWhatsAppLink(
              "Hola Facundo! Quiero más información sobre la consultoría."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/40 bg-bg/20 px-6 py-3 text-sm text-ink backdrop-blur-sm transition-colors hover:border-brass hover:text-brass"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
