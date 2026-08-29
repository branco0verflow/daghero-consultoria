export const CONTACT = {
  // Sin "+", espacios ni guiones: formato requerido por wa.me
  whatsapp: "59892989794",
  whatsappDisplay: "+598 92 989 794",
  email: "dagherofacundo@gmail.com",
};

/**
 * Arma un link de WhatsApp (wa.me) con un mensaje pre-cargado.
 */
export function buildWhatsAppLink(message: string): string {
  const base = `https://wa.me/${CONTACT.whatsapp}`;
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
