export interface PunctualItem {
  id: string;
  label: string;
  description: string;
  price: number;
}

/**
 * Servicios puntuales disponibles para armar la "comanda" de asesoramiento.
 * Los precios son valores base en USD: se pueden editar libremente acá.
 */
export const PUNCTUAL_ITEMS: PunctualItem[] = [
  {
    id: "carta",
    label: "Rediseño de carta",
    description: "Reestructuración del menú: orden, foco y storytelling de los platos.",
    price: 180,
  },
  {
    id: "fichas",
    label: "Fichas técnicas y costeo",
    description: "Costeo real de cada plato, mermas y rentabilidad por producto.",
    price: 150,
  },
  {
    id: "auditoria",
    label: "Auditoría de cocina y procesos",
    description: "Relevamiento de flujos de trabajo, tiempos y organización de cocina.",
    price: 220,
  },
  {
    id: "proveedores",
    label: "Selección de proveedores",
    description: "Búsqueda y negociación de mejores condiciones de compra.",
    price: 130,
  },
  {
    id: "capacitacion",
    label: "Capacitación de equipo",
    description: "Jornada de formación para el equipo de cocina o de sala.",
    price: 100,
  },
  {
    id: "experiencia",
    label: "Experiencia de sala",
    description: "Guion de atención, tiempos de servicio y experiencia de cliente.",
    price: 160,
  },
  {
    id: "pricing",
    label: "Análisis de precios",
    description: "Estrategia de pricing y rentabilidad por categoría de la carta.",
    price: 140,
  },
  {
    id: "bebidas",
    label: "Carta de bebidas y maridaje",
    description: "Diseño de carta de bebidas y sugerencias de maridaje con la cocina.",
    price: 150,
  },
];
