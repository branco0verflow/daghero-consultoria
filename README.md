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
- **Iniciar un Proyecto desde Cero**: card de servicio "a cotizar" para
  proyectos gastronómicos nuevos (análisis de mercado, habilitaciones,
  imagen de marca, etc.).
- **Formulario de contacto** (nombre, email, mensaje) que envía el mensaje
  directo al mail vía [EmailJS](https://www.emailjs.com/) — no requiere
  backend propio. Ver configuración en el paso 3 más abajo.
- Botones de contacto que redirigen a **WhatsApp** (Uruguay +598 92 989 794
  y Andorra +376 385 040, cada uno con su bandera) y a **email**
  (dagherofacundo@gmail.com), con el mensaje pre-cargado según lo que el
  usuario haya seleccionado.
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

## 3. Configurar el formulario de contacto (EmailJS)

El formulario de "Contacto" (`components/ContactForm.tsx`) usa
[EmailJS](https://www.emailjs.com/) para mandar los mensajes directo al mail,
sin necesidad de un servidor propio. Es gratis (200 mails/mes) y se
configura una sola vez:

1. Creá una cuenta en [emailjs.com](https://www.emailjs.com/) (con el mail
   que quieras recibir las consultas, por ejemplo
   `dagherofacundo@gmail.com`).
2. **Email Services** → **Add New Service** → conectá tu cuenta de Gmail (u
   otro proveedor). Copiá el **Service ID** que te genera.
3. **Email Templates** → **Create New Template**. El formulario manda estas
   variables, que podés usar en el cuerpo y el asunto del mail:
   `{{name}}`, `{{from_name}}` (igual a `{{name}}`, útil para el asunto o el
   "From Name"), `{{email}}`, `{{phone}}` (queda vacío si el visitante no lo
   completa, es opcional) y `{{message}}`. En **Settings** del template,
   configurá **"Reply To"** = `{{reply_to}}` para poder responderle al
   visitante directamente desde tu bandeja de entrada, y **"To Email"** con
   tu propio mail. Copiá el **Template ID**.
4. **Account** → **General** → copiá tu **Public Key**.
5. Copiá el archivo `.env.local.example` a `.env.local` y completá los 3
   valores:

   ```bash
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

6. Si vas a desplegar en Vercel (u otro hosting), agregá esas mismas 3
   variables en la configuración de entorno del proyecto — `.env.local` no
   se sube al repositorio.

Sin estas variables, el formulario muestra un mensaje de error al
enviar; el resto del sitio funciona igual.

## 4. Correr en modo desarrollo

```bash
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador.

## 5. Generar la versión de producción

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
- **Contenido de Iniciar un Proyecto desde Cero**:
  `components/NewProject.tsx` (array `INCLUDED`).
- **Números de WhatsApp (por país) y email**: `lib/contact.ts`.
- **Formulario de contacto**: `components/ContactForm.tsx` (campos y
  textos); credenciales de envío en `.env.local` (ver paso 3).
- **Textos del inicio**: `components/Hero.tsx`.
- **Colores y tipografías**: `tailwind.config.ts` (paleta `bg`, `surface`,
  `ink`, `brass`, `line`) y `app/layout.tsx` (fuentes de Google Fonts).

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
  Header.tsx          -> navegación fija (con logo)
  Hero.tsx            -> sección de inicio con video de fondo
  FullAdvisory.tsx     -> card del Asesoramiento Completo ($1.200 USD)
  PunctualTicket.tsx    -> checklist + comanda de Asesoramientos Puntuales
  NewProject.tsx       -> card de Iniciar un Proyecto desde Cero (a cotizar)
  ContactForm.tsx      -> formulario de contacto (envía por EmailJS)
  Footer.tsx           -> contacto (WhatsApp Uruguay/Andorra / email)
  RevealSection.tsx     -> animación de aparición al hacer scroll
lib/
  gsap.ts             -> registro de GSAP + ScrollTrigger
  contact.ts           -> datos y helpers de WhatsApp (por país) / email
  services-data.ts      -> listado de servicios puntuales y precios
public/
  videos/inicio.mp4     -> (agregarlo manualmente, ver paso 2)
  images/logo.png       -> logo usado en header, footer y favicon
.env.local.example     -> plantilla de variables de EmailJS (ver paso 3)
```
