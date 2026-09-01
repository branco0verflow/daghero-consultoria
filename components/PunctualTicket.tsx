"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { PUNCTUAL_ITEMS } from "@/lib/services-data";
import { buildWhatsAppLink } from "@/lib/contact";

export default function PunctualTicket() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const totalRef = useRef<HTMLSpanElement>(null);
  const displayed = useRef({ value: 0 });
  const ticketRef = useRef<HTMLDivElement>(null);

  const selectedItems = PUNCTUAL_ITEMS.filter((item) => selected[item.id]);
  const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

  function toggle(id: string) {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  useEffect(() => {
    gsap.to(displayed.current, {
      value: total,
      duration: 0.5,
      ease: "power2.out",
      onUpdate: () => {
        if (totalRef.current) {
          totalRef.current.textContent = `$${Math.round(
            displayed.current.value
          )}`;
        }
      },
    });

    if (ticketRef.current) {
      gsap.fromTo(
        ticketRef.current,
        { opacity: 0.5, y: 6 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [total]);

  const summary = selectedItems.length
    ? selectedItems.map((item) => `- ${item.label} ($${item.price})`).join("\n")
    : "Aún no seleccionaste servicios.";

  const message = `Hola Facundo! Te escribo por un asesoramiento puntual.\n\nServicios de interés:\n${summary}\n\nTotal estimado: $${total} USD.\n\n¿Podemos coordinar una charla?`;

  return (
    <div
      id="puntual"
      className="grid gap-10 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-brass">
          Opción 02
        </span>
        <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Asesoramientos Puntuales
        </h3>
        <p className="mt-4 max-w-md text-ink-muted">
          Para cuando no necesitás un proceso completo, sino resolver algo
          específico. Elegí los servicios que te interesan y armá tu propia
          comanda con una pre-cotización estimada.
        </p>

        <div className="mt-8 space-y-3">
          {PUNCTUAL_ITEMS.map((item) => {
            const checked = Boolean(selected[item.id]);
            return (
              <label
                key={item.id}
                className={`flex cursor-pointer items-start gap-4 rounded-lg border px-4 py-3 transition-colors ${
                  checked
                    ? "border-brass/60 bg-bg"
                    : "border-line hover:border-brass/30"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                  className="mt-1 h-4 w-4 shrink-0 accent-brass"
                />
                <span className="flex-1">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-sm text-ink">{item.label}</span>
                    <span className="font-mono text-xs text-brass">
                      ${item.price}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-ink-muted">
                    {item.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div
          ref={ticketRef}
          className="torn-edge flex-1 bg-ink pb-6 pt-8 text-bg shadow-xl"
        >
          <div className="px-6">
            <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-bg/60">
              Comanda — Daghero
            </p>

            <div className="mt-6 space-y-2 border-b border-dashed border-bg/30 pb-4 font-mono text-xs">
              {selectedItems.length === 0 && (
                <p className="text-bg/50">
                  Seleccioná servicios para armar tu comanda.
                </p>
              )}
              {selectedItems.map((item) => (
                <div key={item.id} className="flex justify-between gap-4">
                  <span>{item.label}</span>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-bg/60">
                Total estimado
              </span>
              <span ref={totalRef} className="font-mono text-2xl">
                $0
              </span>
            </div>

            <p className="mt-3 text-center font-mono text-[10px] text-bg/50">
              * Estimación preliminar. El alcance final se define en el primer
              contacto.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brass px-5 py-3 text-center text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            Enviar por WhatsApp
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-ink/20 px-5 py-3 text-center text-sm text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Contactar por email
          </a>
        </div>
      </div>
    </div>
  );
}
