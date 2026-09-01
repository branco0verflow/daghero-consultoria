import Image from "next/image";
import {
  CONTACT,
  WHATSAPP_NUMBERS,
  buildMailtoLink,
  buildWhatsAppLink,
} from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="Daghero Consultoría Gastronómica"
                width={36}
                height={36}
                className="h-8 w-8 shrink-0"
              />
              <p className="font-display text-2xl text-ink">
                DAGHERO<span className="text-brass">.</span>
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-ink-muted">
              Consultoría gastronómica. Trabajamos con cocinas, cartas y
              equipos que quieren crecer con orden.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            {WHATSAPP_NUMBERS.map((contact) => (
              <a
                key={contact.country}
                href={buildWhatsAppLink(
                  "Hola Facundo! Quiero más información sobre la consultoría.",
                  contact.number
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-line px-4 py-3 text-ink transition-colors hover:border-brass hover:text-brass"
              >
                <span className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element -- SVG chico, no necesita el optimizador de next/image */}
                  <img
                    src={contact.flagSrc}
                    alt={`Bandera de ${contact.country}`}
                    className="h-4 w-6 shrink-0 rounded-sm object-cover ring-1 ring-line"
                  />
                  WhatsApp &mdash; {contact.country}
                </span>
                <span className="text-ink-muted">{contact.display}</span>
              </a>
            ))}
            <a
              href={buildMailtoLink(
                "Consulta — Daghero Consultoría Gastronómica",
                "Hola Facundo, te escribo porque..."
              )}
              className="flex items-center justify-between rounded-lg border border-line px-4 py-3 text-ink transition-colors hover:border-brass hover:text-brass"
            >
              Email
              <span className="text-ink-muted">{CONTACT.email}</span>
            </a>
          </div>
        </div>

        <p className="mt-16 text-xs text-ink-muted/70">
          © {new Date().getFullYear()} Daghero Consultoría Gastronómica. Todos
          los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
