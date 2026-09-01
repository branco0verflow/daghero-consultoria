"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const inputClass =
  "rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-brass";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "Faltan las variables de entorno de EmailJS (NEXT_PUBLIC_EMAILJS_*). Ver README."
      );
      setStatus("error");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const message = String(data.get("message") ?? "");

    setStatus("sending");

    try {
      // Se manda explícito (en vez de sendForm) para cubrir todas las
      // variables que usa la plantilla de EmailJS: {{name}}, {{from_name}},
      // {{email}}, {{reply_to}}, {{phone}} y {{message}}.
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name,
          from_name: name,
          email,
          reply_to: email,
          phone,
          message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-2xl border border-line bg-surface p-8 md:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-widest text-ink-muted"
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-widest text-ink-muted"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-xs uppercase tracking-widest text-ink-muted"
        >
          Teléfono <span className="normal-case text-ink-muted/60">(opcional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-widest text-ink-muted"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-full bg-brass px-6 py-3 text-sm font-medium text-bg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </button>

        {status === "success" && (
          <p className="text-sm text-brass">
            ¡Mensaje enviado! Te vamos a responder a la brevedad.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Hubo un problema al enviar el mensaje. Probá de nuevo o
            escribinos por WhatsApp.
          </p>
        )}
      </div>
    </form>
  );
}
