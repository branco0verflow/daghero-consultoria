# Daghero Consultoría Gastronómica

Sitio web (landing) para Daghero Consultoría Gastronómica, construido con
Next.js (App Router) + TypeScript + Tailwind CSS + GSAP.

## Qué incluye

- **Inicio** con video de fondo (`inicio.mp4`) y titular animado.
- **Asesoramiento Completo**: card con precio fijo ($1.200 USD) y detalle de
  todo lo que incluye.
- **Asesoramientos Puntuales**: checklist interactivo donde el visitante
  elige qué necesita (rediseño de carta, fichas técnicas, capacitación,
  etc.) y arma una "comanda" con una **pre-cotización estimada** en tiempo
  real, animada con GSAP.
- Botones de contacto que redirigen a **WhatsApp** (+598 91 307 261) y a
  **email** (facudaghero@gmail.com), con el mensaje pre-cargado según lo que
  el usuario haya seleccionado.
- Diseño oscuro, minimalista, con tipografía editorial (Fraunces + Inter +
  JetBrains Mono) y una paleta charcoal / bronce.

## 1. Instalar dependencias

Necesitás tener [Node.js](https://nodejs.org/) 18 o superior instalado.

```bash
npm install
```

## 2. Agregar el video de inicio

Colocá tu archivo de video con el nombre exacto `inicio.mp4` en:

```
public/videos/inicio.mp4
```

(Ahí vas a encontrar un archivo `COLOCAR_VIDEO_ACA.txt` con más detalle; podés
borrarlo una vez que agregues el video real.)

## 3. Correr en modo desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## 4. Generar la versión de producción

```bash
npm run build
npm run start
```

## Cómo personalizar

- **Precio y contenido del Asesoramiento Completo**:
  `components/FullAdvisory.tsx` (array `INCLUDED` y el precio en el JSX).
- **Servicios y precios de los Asesoramientos Puntuales**:
  `lib/services-data.ts` — agregá, quitá o cambiá precios de cada ítem sin
  tocar el resto del código.
- **WhatsApp y email**: `lib/contact.ts`.
- **Textos del inicio**: `components/Hero.tsx`.
- **Colores y tipografías**: `tailwind.config.ts` (paleta `bg`, `surface`,
  `ink`, `brass`, `wine`, `line`) y `app/layout.tsx` (fuentes de Google
  Fonts).

## Deploy

El proyecto está listo para desplegarse en [Vercel](https://vercel.com/)
(los mismos creadores de Next.js): solo hay que subir el proyecto a un
repositorio de GitHub e importarlo desde Vercel, o correr `vercel` desde la
terminal si tenés la CLI instalada. También funciona en cualquier hosting
compatible con Node.js.

## Estructura del proyecto

```
app/
  layout.tsx        -> fuentes, metadata y estructura HTML base
  page.tsx           -> ensambla todas las secciones de la landing
  globals.css         -> estilos globales y el "borde arrancado" de la comanda
components/
  Header.tsx          -> navegación fija
  Hero.tsx            -> sección de inicio con video de fondo
  FullAdvisory.tsx     -> card del Asesoramiento Completo ($1.200 USD)
  PunctualTicket.tsx    -> checklist + comanda de Asesoramientos Puntuales
  Footer.tsx           -> contacto (WhatsApp / email)
  RevealSection.tsx     -> animación de aparición al hacer scroll
lib/
  gsap.ts             -> registro de GSAP + ScrollTrigger
  contact.ts           -> datos y helpers de WhatsApp / email
  services-data.ts      -> listado de servicios puntuales y precios
public/
  videos/inicio.mp4     -> (agregarlo manualmente, ver paso 2)
```
