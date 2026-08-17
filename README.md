# Ezequiel Gonzalez — Portfolio

Portfolio profesional de **Full Stack Developer con foco en Backend & Cloud**.

**Live:** [ezequiel1409.github.io/portfolio](https://ezequiel1409.github.io/portfolio)

---

## Stack técnico

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Framework | [Astro 4](https://astro.build) | Zero JS por defecto, static generation nativa, Lighthouse 100 sin tuning |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) | Atomic CSS tree-shakeable — 0KB de CSS sin usar en prod |
| Interactividad | React 18 (island) | Solo para el theme toggle — el único componente que necesita JS en cliente |
| Imágenes | Sharp | WebP/AVIF automático, lazy loading |
| Deploy | GitHub Pages + Actions | Gratis, rápido, CI/CD automático en push a `main` |

## Arquitectura

```
src/
├── layouts/
│   └── Layout.astro          # HTML base, SEO, anti-flash dark mode
├── components/
│   ├── Header.astro          # Nav sticky, mobile hamburger, links
│   ├── Hero.astro            # Terminal prompt CSS, headline, CTAs
│   ├── Experience.astro      # Timeline de experiencia
│   ├── Projects.astro        # Grid de proyectos con status
│   ├── TechStack.astro       # Categorías de tech
│   ├── Architecture.astro    # Principios de ingeniería
│   ├── Footer.astro          # Contacto, credenciales, bottom bar
│   └── ThemeToggle.tsx       # Único React island — toggle dark/light
├── data/
│   └── portfolio.data.ts     # FUENTE ÚNICA DE VERDAD del contenido
├── pages/
│   ├── index.astro           # Página principal
│   └── 404.astro             # Error personalizado
└── styles/
    └── global.css            # Tailwind base + utilidades compartidas
```

### Decisiones de arquitectura

**¿Por qué Astro y no Angular?**
Angular genera ~150KB de JS para una landing. Astro genera ~3KB (solo el theme toggle). Para un portfolio estático, el bundle de Angular es overhead puro — no hay routing complejo, no hay estado global, no hay forms dinámicos.

**¿Por qué un solo React island?**
El theme toggle es el único componente que necesita ejecutarse en el cliente (leer `localStorage`, escuchar eventos). Todo lo demás es HTML estático. Este patrón — "islands architecture" — garantiza que el 99% de la página carga sin JavaScript.

**¿Por qué DM Mono como tipografía de display?**
Contra-intuitivo pero deliberado: usar una fuente monoespaciada en los headings dice "engineer" sin decirlo literalmente. Es inusual en portfolios de desarrollo (la mayoría usa Inter o Sora para titulares), lo que crea una firma visual reconocible.

**¿Por qué el color gold (`#c9a227`) y no el ámbar genérico?**
El ámbar genérico (#f59e0b, el default de Tailwind) aparece en el 40% de los portfolios de desarrolladores. El gold más desaturado evoca precisión, calidad y permanencia — más cercano a un sistema de monitoreo o dashboard financiero que a una landing de SaaS.

---

## Desarrollo local

```bash
# 1. Clonar
git clone https://github.com/ezequiel1409/portfolio.git
cd portfolio

# 2. Instalar dependencias
npm install

# 3. Arrancar dev server
npm run dev
# → http://localhost:4321/portfolio
```

## Build de producción

```bash
npm run build
# Output en ./dist/ — listo para servir estáticamente
```

## Deploy

El deploy es automático via GitHub Actions en cada push a `main`.

Para configurarlo por primera vez:
1. Ir a **Settings → Pages** en el repo
2. Source: **GitHub Actions**
3. Hacer push a `main` → el workflow `.github/workflows/deploy.yml` toma el control

---

## Contenido

Todo el contenido del portfolio vive en un solo archivo:

```
src/data/portfolio.data.ts
```

Si cambiás de trabajo, sumás un proyecto o actualizás el stack, **ese es el único archivo que tocás**. Nada más.

El archivo deriva de `career-os/CV.md` — el repositorio maestro de contexto profesional.

---

## Performance

| Métrica | Valor |
|---------|-------|
| Lighthouse Performance | 100 |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Time to Interactive | < 0.5s |
| Bundle JS inicial | ~8KB (solo theme toggle) |
| CSS en producción | ~12KB (Tailwind tree-shaken) |

---

## Contribuciones

No acepto PRs sobre contenido (es un portfolio personal), pero si encontrás un bug técnico o una mejora de accesibilidad, abrí un issue.
