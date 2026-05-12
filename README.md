# Roberto Llanos — Personal Landing

Landing page personal construida con **Next.js 15 + Tailwind 4**.
Diseñada para escalar: hoy es una landing, mañana puede ser portfolio + blog + tienda.

## Stack

- Next.js 15 (App Router, React 19)
- Tailwind CSS 4 (CSS-first config)
- TypeScript
- Framer Motion (instalado, listo para usar)
- Edge runtime para OG image dinámica

## Desarrollo

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm run start
```

## Estructura

```
app/
  layout.tsx          # SEO, fuentes, viewport
  page.tsx            # Composición de la home
  globals.css         # Tailwind 4 + theme + animaciones
  opengraph-image.tsx # OG image dinámica (1200x630)
  sitemap.ts          # Sitemap auto-generado
  robots.ts           # robots.txt auto-generado
components/
  Nav, Hero, About, Projects, Skills, Experience, Contact, Footer, Background
lib/
  content.ts          # TODO el contenido editable aquí
```

## Editar contenido

Todo el copy, links y proyectos están centralizados en [lib/content.ts](lib/content.ts).
Cambiar ahí y los componentes se actualizan automáticamente.

## Deploy en Railway

1. Push este repo a GitHub.
2. En Railway: **New Project → Deploy from GitHub repo**.
3. Railway detecta `railway.toml` + `nixpacks.toml` automáticamente.
4. Variables de entorno: ninguna obligatoria (la app es 100% estática-friendly).
5. Railway expone `$PORT`; el script `start` ya lo lee.

### Dominio custom

En Railway → Settings → Networking → Generate Domain o conectar tu dominio.
Después, actualizar `site.url` en [lib/content.ts](lib/content.ts).

## Próximos pasos sugeridos

- Reemplazar placeholders en `lib/content.ts` con links reales.
- Agregar `/blog` con MDX cuando quieras escribir.
- Conectar formulario de contacto (Resend / Formspree).
- Agregar analytics (Plausible, Vercel Analytics o Umami).
