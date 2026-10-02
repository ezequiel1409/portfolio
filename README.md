# Ezequiel Gonzalez — Portfolio

Portfolio profesional de **Full Stack Developer con foco en Backend & Cloud**.

**Live:** [ezequiel1409.github.io/portfolio](https://ezequiel1409.github.io/portfolio)

---

## Stack técnico

| Capa | Tecnología | Razón |
|------|-----------|-------|
| Framework | [Astro 5](https://astro.build) | Zero JS por defecto, static generation nativa, Content Layer y Vite 6 |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) | Atomic CSS tree-shakeable — 0KB de CSS sin usar en prod |
| Interactividad | Astro Nativo (0 KB JS) | Theme toggle puro en HTML/CSS y script inline sin runtime de frameworks |
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
│   └── ThemeToggle.astro     # Toggle dark/light 100% nativo Astro (0 KB bundle)
├── data/
│   └── portfolio.data.ts     # FUENTE ÚNICA DE VERDAD del contenido
├── pages/
│   ├── index.astro           # Página principal
│   └── 404.astro             # Error personalizado
└── styles/
    └── global.css            # Tailwind base + tokens variables CSS
```

### Decisiones de arquitectura

**¿Por qué Astro y no Angular o React?**
Astro genera 0 KB de JS por defecto. Para un portfolio estático, enviar runtimes enteros de Angular o React es overhead innecesario. Al usar componentes nativos de Astro, el sitio carga a velocidad instantánea y no requiere hidratación.

**¿Por qué ThemeToggle nativo y sin React?**
El theme toggle no necesita un framework pesado: solo sincronizar un atributo en `document.documentElement` y guardarlo en `localStorage`. Al implementarlo con Astro nativo y CSS, eliminamos por completo dependencias pesadas (`react`, `react-dom`, `@astrojs/react`) y logramos 0 KB de bundle cliente sin ningún flash visual.

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
| Time to Interactive | < 0.2s |
| Bundle JS inicial | 0KB (Astro puro sin frameworks) |
| CSS en producción | ~12KB (Tailwind tree-shaken) |

---

## Contribuciones

No acepto PRs sobre contenido (es un portfolio personal), pero si encontrás un bug técnico o una mejora de accesibilidad, abrí un issue.
