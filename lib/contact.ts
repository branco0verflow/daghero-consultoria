export interface WhatsAppContact {
  country: string;
  flagSrc: string;
  // Sin "+", espacios ni guiones: formato requerido por wa.me
  number: string;
  display: string;
}

export const WHATSAPP_NUMBERS: WhatsAppContact[] = [
  {
    country: "Uruguay",
    flagSrc: "/images/flags/uy.svg",
    number: "59892989794",
    display: "+598 92 989 794",
  },
  {
    country: "Andorra",
    flagSrc: "/images/flags/ad.svg",
    number: "376385040",
    display: "+376 385 040",
  },
];

export const CONTACT = {
  // Número principal (Uruguay), usado como default en los CTA genéricos.
  whatsapp: WHATSAPP_NUMBERS[0].number,
  whatsappDisplay: WHATSAPP_NUMBERS[0].display,
  email: "dagherofacundo@gmail.com",
};

/**
 * Arma un link de WhatsApp (wa.me) con un mensaje pre-cargado.
 * Por defecto usa el número principal; se puede pasar otro (ej. Andorra).
 */
export function buildWhatsAppLink(
  message: string,
  phone: string = CONTACT.whatsapp
): string {
  const base = `https://wa.me/${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Arma un link mailto con asunto y cuerpo pre-cargados.
 */
export function buildMailtoLink(subject: string, body: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
