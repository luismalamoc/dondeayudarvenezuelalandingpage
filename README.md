# ¿Dónde ayudar a Venezuela?

Meta-sitio **estático y open source** que reúne en un solo lugar las plataformas
activas y verificadas tras el **terremoto de Venezuela (junio 2026)**: dónde donar,
reportar daños, denunciar irregularidades, buscar personas e información oficial.
Nació como un directorio de campañas y ahora redirige a las plataformas con más
tráfico y mejor infraestructura para unir esfuerzos en vez de duplicarlos.

- **Producción:** https://dondeayudarvenezuela.com
- **Repositorio:** https://github.com/luismalamoc/dondeayudarvenezuelalandingpage

> ⚠️ **Importante:** este sitio **no recibe ni gestiona donaciones**. Solo enlaza a
> los canales y plataformas oficiales de terceros. Toda donación se realiza
> directamente en el sitio de cada organización. Al ser 100% open source, cualquiera
> puede auditar los enlaces publicados y proponer cambios mediante un PR.

## Stack

- [Astro 7](https://astro.build/) (`output: 'static'`) + [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) (adaptador para desplegar en Cloudflare)
- [Tailwind CSS 4](https://tailwindcss.com/) vía `@tailwindcss/vite`
- TypeScript (`astro/tsconfigs/strict`)
- Gestor de paquetes: [pnpm](https://pnpm.io/) (versiones fijas, sin caret)

## Requisitos

- **Node.js** ≥ 20.18 (se recomienda la versión LTS indicada en [.nvmrc](.nvmrc))
- **pnpm** 11 (ver campo `packageManager` en [package.json](package.json))

Si usas [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
```

## Comandos

```bash
pnpm install     # instalar dependencias
pnpm dev         # servidor de desarrollo (http://localhost:4321)
pnpm build       # generar el sitio estático en dist/
pnpm preview     # previsualizar el build de producción
pnpm preview:cf  # build + previsualizar en el runtime de Cloudflare (Wrangler)
pnpm deploy      # build + desplegar en Cloudflare (Wrangler)
pnpm check       # validación de tipos y diagnósticos de Astro
pnpm format      # formatear el código con Prettier
```

## Estructura

```
public/                 favicons, og-image, robots.txt, manifest
src/
  components/
    PortalCard.astro    tarjeta reutilizable de enlace
  pages/
    index.astro         página única con todos los enlaces
  styles/
    global.css          estilos globales y tema de Tailwind
astro.config.mjs        configuración de Astro (site, sitemap, Tailwind)
```

## Agregar o editar una tarjeta de enlace

Todo el contenido vive en [src/pages/index.astro](src/pages/index.astro). Los enlaces
están organizados en arreglos al inicio del archivo (en el bloque `---`), uno por
cada sección de la página:

- `acciones`: botones principales (Donar, Reportar daños, Denunciar). Cada objeto usa `{ title, description, href }`.
- `portales`: sección «Otras formas de ayudar y encontrar ayuda». Usa `{ tag, title, description, href }`.
- `otrasDonaciones`: sección «Otras formas de donar». Usa `{ tag, title, description, href }`.
- `advertencias`: sección «Dónde NO donar» (tarjetas en rojo). Usa `{ tag, title, description, href }`.
- `recursosOficiales`: sección «Información adicional». Usa `{ tag, title, description, href }`.
- `emergencias`: líneas telefónicas. Usa `{ label, num }`.

Para **agregar** una tarjeta, añade un objeto al arreglo correspondiente:

```ts
{
  tag: 'Personas',
  title: 'Nombre de la plataforma',
  description: 'Qué permite hacer esta plataforma, en una o dos frases enfocadas al terremoto.',
  href: 'https://ejemplo.com/',
}
```

Para **editar** una tarjeta, modifica los campos del objeto existente. El componente
[src/components/PortalCard.astro](src/components/PortalCard.astro) deriva el dominio
mostrado a partir de `href`, así que no necesitas escribirlo manualmente. Acepta una
prop opcional `variant="alerta"` para renderizar la tarjeta en rojo (usada en
«Dónde NO donar»).

Tras cualquier cambio, verifica con:

```bash
pnpm check
pnpm build
```

## Despliegue en Cloudflare Pages

1. Sube este repositorio a GitHub.
2. En el panel de Cloudflare: **Workers & Pages → Create application → Pages →
   Connect to Git** y selecciona el repositorio.
3. Configura el build:
   - **Framework preset:** Astro (o None)
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist`
4. (Opcional) Añade la variable de entorno `NODE_VERSION` con el valor de
   [.nvmrc](.nvmrc) para fijar la versión de Node en el build.
5. Tras el primer despliegue, conecta el dominio en **Custom domains** y apunta
   `dondeayudarvenezuela.com` a Cloudflare Pages.

### Despliegue manual con Wrangler

```bash
pnpm preview:cf   # construir y previsualizar el build en el runtime de Cloudflare
pnpm deploy       # construir y desplegar en Cloudflare
```

## Licencia

[MIT](LICENSE) © 2026 Luis Alamo ([luismalamoc](https://github.com/luismalamoc))
