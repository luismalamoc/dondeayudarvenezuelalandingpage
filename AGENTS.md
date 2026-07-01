# AGENTS.md

Guía para agentes de IA que trabajan en este repositorio. Léela completa antes de
hacer cambios. Complementa a [CLAUDE.md](CLAUDE.md) (principios generales) con las
convenciones **específicas** de este proyecto.

## Qué es este proyecto

Meta-sitio **estático y open source** que reúne plataformas verificadas de ayuda tras
el **terremoto de Venezuela (24 de junio de 2026)**: dónde donar, reportar daños,
denunciar, buscar personas e información oficial. **No recibe ni gestiona donaciones**;
solo enlaza a canales oficiales de terceros.

- Producción: https://dondeayudarvenezuela.com
- Es una sola página (`src/pages/index.astro`) alimentada por datos en `src/data/directory.ts`.

## Stack

- **Astro 7** (`output: 'static'`) + `@astrojs/sitemap` + `@astrojs/react` (una isla: `Directory.tsx`)
- **Tailwind CSS 4** vía `@tailwindcss/vite`
- **TypeScript** (`astro/tsconfigs/strict`)
- **@astrojs/cloudflare** — se despliega como **Worker** de Cloudflare (no Pages)
- Gestor de paquetes: **pnpm 11** (Node 24, ver `.nvmrc`)

## Comandos (siempre pnpm, nunca npx)

```bash
pnpm install      # instalar dependencias
pnpm dev          # servidor de desarrollo (http://localhost:4321)
pnpm build        # generar sitio estático en dist/
pnpm preview      # previsualizar el build de Astro
pnpm preview:cf   # build + previsualizar en el runtime de Cloudflare (Wrangler)
pnpm deploy       # build + desplegar en Cloudflare (Wrangler)
pnpm check        # validación de tipos y diagnósticos de Astro
pnpm format       # formatear con Prettier
```

Para binarios sin script propio usa `pnpm exec <bin>`, **no** `npx`.

## Antes de cada commit (obligatorio)

Ejecuta y deja en verde:

```bash
pnpm check   # 0 errors
pnpm build   # debe completar
```

Si tocaste datos o componentes, verifica también que `/directory.json`, `/llms.txt`
y `/sitemap-index.xml` sigan generándose en `dist/client/`.

## Conventional Commits (obligatorio)

**Todos los commits DEBEN seguir [Conventional Commits](https://www.conventionalcommits.org/).**
El historial del proyecto los usa (`feat: ...`); respétalo siempre.

Formato:

```
<tipo>(<ámbito opcional>): <descripción en español, minúscula, imperativo>

<cuerpo opcional>
```

Tipos permitidos:

- `feat:` — nueva funcionalidad o **nuevo contenido del directorio** (medios, campañas, enlaces).
- `fix:` — corrección de errores.
- `docs:` — documentación (README, AGENTS.md, comentarios).
- `style:` — formato/estilo sin cambio de lógica (Prettier, clases).
- `refactor:` — reestructuración sin cambiar comportamiento.
- `chore:` — configuración, dependencias, tooling, build.
- `a11y:` — mejoras de accesibilidad (o usar `feat`/`fix` con ámbito).

Reglas:

- Descripción **en español**, en minúscula, modo imperativo, sin punto final.
- Ámbitos útiles: `prensa`, `donaciones`, `directorio`, `sitemap`, `seo`, `deploy`.
- Un commit = un cambio lógico coherente.

Ejemplos (buenos):

```
feat(prensa): agrega EVTV y Miguel Contigo
fix(directorio): corrige handle de Instagram de NASA
chore(sitemap): activa lastmod con la fecha del build
docs: documenta scripts pnpm de despliegue
```

Ejemplos (a evitar — así NO):

```
Agregar EVTV y Miguel Contigo a prensa          # sin tipo
Usar scripts pnpm para preview/deploy           # sin tipo
```

## Convenciones de contenido

El contenido está en **español neutro o venezolano**. Enfoca siempre las descripciones
al **terremoto de junio de 2026**.

- **Evitar** anglicismos y regionalismos de otros países: no usar "bulos", "boteo",
  "donativos" (usar "donaciones"), "top" (usar "destacado"), "matching".
- OK: términos técnicos ("doblete sísmico"), "Pago Móvil", "kits", nombres propios en
  inglés (Charity Navigator, GlobalGiving, etc.).
- **Nunca inventar handles de redes.** Verifícalos desde el sitio oficial. Si no se
  puede verificar, omítelos. Este es un sitio anti-fraude: la precisión es crítica.
- Al pegar URLs de redes, limpia parámetros de tracking (p. ej. `?s=46` en enlaces de X).

## Estructura de datos (`src/data/directory.ts`)

Los enlaces viven en arreglos tipados exportados:

- `acciones` (`AccionRaw`): botones principales. `{ title, description, href, instagram? }`.
- `portales` (`PortalRaw`): "Otras formas de ayudar". `{ tag, title, description, href, instagram?, socials? }`.
- `otrasDonaciones` (`PortalRaw`): "Otras formas de donar".
- `advertencias` (`PortalRaw`): "Dónde NO donar" (se renderiza con `variant="alerta"`).
- `informacionAdicional` (`PortalRaw`): "Información adicional".
- `prensa` (`PeriodistaRaw`): "Quién lo está contando". Agrega `x?`, `youtube?`, `website?`.
- `buildDirectory()` normaliza y ordena todo para el buscador; no la edites para agregar contenido.

Notas:

- El dominio mostrado se deriva de `href`; no lo escribas a mano.
- Para varias redes en una tarjeta, usa `socials: [...]` (o los campos `x`/`youtube`/`website` en prensa).
  El componente detecta el ícono (Instagram, X, YouTube, sitio) automáticamente.
- `PortalCard.astro` acepta `variant="alerta"` (rojo) para "Dónde NO donar".

## Endpoints generados (mantener sincronizados con los datos)

- `/directory.json` — datos máquina-legibles (`src/pages/directory.json.ts`).
- `/llms.txt` — resumen para LLMs, formato llmstxt.org (`src/pages/llms.txt.ts`).

Ambos se **generan desde `src/data/directory.ts`**; al añadir/editar contenido se
actualizan solos en el build. No dupliques datos en ellos manualmente.

## Accesibilidad (mantener)

- `<html lang="es">`, jerarquía de encabezados H1→H2→H3, landmarks (`header`/`main`/`footer`).
- Skip link "Ir al contenido" → `#contenido` en `<main>`.
- Grillas de tarjetas con `role="list"` y cada tarjeta con `role="listitem"`.
- Iconos SVG decorativos con `aria-hidden="true"`; enlaces con `aria-label`.
- `focus-visible` en todos los interactivos. Contraste mínimo AA (texto pequeño ≥ 4.5:1).

## Estilo de código

- Prettier: **sin punto y coma**, comillas simples, `printWidth: 100` (`.prettierrc.json`).
- Corre `pnpm format` antes de commitear si tocaste muchos archivos.
- TypeScript en modo estricto; mantén los `satisfies XxxRaw[]` en los arreglos de datos.

## Dependencias y seguridad

- Versiones **fijas, sin caret** en `package.json`. No introduzcas rangos `^`/`~`.
- `pnpm-workspace.yaml` controla `allowBuilds` y `minimumReleaseAge`; no lo relajes sin motivo.
- No agregues dependencias nuevas sin necesidad clara.

## Despliegue

- Es un **Worker** de Cloudflare (servicio `dondeayudarvenezuela`), no Pages.
- Deploy: `pnpm deploy` (que hace `astro build && wrangler deploy`).
- `wrangler.jsonc` usa `assets.directory = "./dist"`. **No** uses `wrangler pages deploy`.

## Git

- Verifica en qué rama estás antes de commitear (`git branch --show-current`).
- No hagas `push`, `merge` ni operaciones destructivas sin que el usuario lo pida.
