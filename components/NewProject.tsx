import { buildMailtoLink, buildWhatsAppLink } from "@/lib/contact";

const INCLUDED = [
  "Análisis de mercado y viabilidad del proyecto.",
  "Proyección de fondos e inversión inicial.",
  "Gestión de habilitaciones y trámites.",
  "Identidad de marca: imagen y logo.",
  "Storytelling y concepto de marca.",
  "Diseño de la experiencia que el cliente quiere ofrecer, desde cero.",
];

export default function NewProject() {
  const message =
    "Hola Facundo! Quiero consultar por Iniciar un Proyecto desde Cero.";

  return (
    <div
      id="desde-cero"
      className="grid gap-10 rounded-2xl border border-line bg-surface p-8 md:grid-cols-[1.1fr_0.9fr] md:p-12"
    >
      <div>
        <span className="text-xs uppercase tracking-[0.3em] text-brass">
          Opción 03
        </span>
        <h3 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Iniciar un Proyecto desde Cero
        </h3>
        <p className="mt-4 max-w-md text-ink-muted">
          Para quienes están por abrir un local y quieren empezar con las
          bases correctas: del concepto de negocio a la identidad de marca,
          pasando por los números y los permisos necesarios.
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
          Alcance y plazos a medida del proyecto.
        </p>
      </div>

      <div className="flex flex-col justify-between rounded-xl border border-brass/20 bg-bg p-8">
        <div>
          <p className="text-sm text-ink-muted">Inversión</p>
          <p className="mt-2 font-display text-5xl text-ink">A cotizar</p>
          <p className="mt-2 text-xs text-ink-muted">
            El presupuesto se define según el alcance del proyecto en la
            primera reunión.
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
            href={buildMailtoLink("Consulta — Proyecto desde Cero", message)}
            className="rounded-full border border-ink/20 px-5 py-3 text-center text-sm text-ink transition-colors hover:border-brass hover:text-brass"
          >
            Escribir un email
          </a>
        </div>
      </div>
    </div>
  );
}
