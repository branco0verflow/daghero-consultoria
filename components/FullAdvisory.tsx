import { buildWhatsAppLink } from "@/lib/contact";

const INCLUDED = [
  "Diagnóstico integral del negocio: cocina, sala y procesos.",
  "Rediseño de carta y fichas técnicas de costeo.",
  "Optimización de compras y relación con proveedores.",
  "Definición de identidad gastronómica y experiencia de cliente.",
  "Capacitación del equipo de cocina y de sala.",
  "Estrategia comercial y de precios.",
  "Seguimiento mensual durante 3 meses posteriores a la implementación.",
];

export default function FullAdvisory() {
  const message =
    "Hola Facundo! Quiero consultar por el Asesoramiento Completo ($1.200 USD).";

  return (
    <div
      id="completo"
      className="grid gap-10 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-brass">
          Opción 01
        </span>
        <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Asesoramiento Completo
        </h3>
        <p className="mt-4 max-w-md text-ink-muted">
          Un acompañamiento integral para repensar tu negocio de punta a
          punta: de la cocina a la mesa, y de la carta a los números.
        </p>

        <ul className="mt-8 space-y-4">
          {INCLUDED.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink/90">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-8 text-xs text-ink-muted">
          Proceso estimado: 6 a 8 semanas de trabajo + 3 meses de seguimiento.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-brass/20 bg-bg p-8">
        <div>
          <p className="text-sm text-ink-muted">Inversión</p>
          <p className="mt-2 font-display text-5xl text-ink">
            $1.200 <span className="text-lg text-ink-muted">USD</span>
          </p>
          <p className="mt-2 text-xs text-ink-muted">
            Pago único. Financiación a coordinar.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={buildWhatsAppLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brass px-5 py-3 text-center text-sm font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            Consultar por WhatsApp
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
