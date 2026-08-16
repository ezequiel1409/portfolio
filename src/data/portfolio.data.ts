// ============================================================
// portfolio.data.ts — Fuente única de verdad del contenido
// Cualquier cambio en el CV va acá primero.
// Derivado de career-os/CV.md
// ============================================================

export interface ExperienceEntry {
  readonly company: string;
  readonly client?: string;
  readonly role: string;
  readonly period: string;
  readonly location: string;
  readonly bullets: readonly string[];
  readonly stack: readonly string[];
  readonly current?: boolean;
}

export interface ProjectItem {
  readonly title: string;
  readonly kind: string;
  readonly status: 'live' | 'in-progress' | 'planned';
  readonly description: string;
  readonly stack: readonly string[];
  readonly href?: string;
}

export interface TechCategory {
  readonly label: string;
  readonly items: readonly string[];
}

export interface ArchPrinciple {
  readonly title: string;
  readonly body: string;
}

export interface Credential {
  readonly label: string;
  readonly org: string;
  readonly period: string;
}

// ── LINKS SOCIALES ────────────────────────────────────────────
export const SOCIAL = {
  github: 'https://github.com/ezequiel1409',
  linkedin: 'https://www.linkedin.com/in/ezequielgonzalez14',
  email: 'ezequiel140901@gmail.com',
} as const;

// ── EXPERIENCIA ───────────────────────────────────────────────
export const EXPERIENCE: readonly ExperienceEntry[] = [
  {
    company: 'IBM',
    client: 'Banco Supervielle — COMEX Individuos',
    role: 'Full Stack Developer Cloud',
    period: 'Abril 2024 — Presente',
    location: 'Remoto',
    current: true,
    bullets: [
      'Diseño e implementación de arquitectura de microservicios event-driven para procesos financieros críticos, sosteniendo picos de carga sin degradación en producción.',
      'Integración de flujos asincrónicos con SQS, SNS y Kafka — eliminando puntos únicos de falla y mejorando la resiliencia del sistema.',
      'Observabilidad end-to-end con Dynatrace, Kibana y Grafana — detección proactiva de incidentes antes de impacto al usuario.',
      'Aplicaciones bancarias con microservicios, BFF (Backend for Frontend) e API Connect para exposición segura de servicios.',
    ],
    stack: ['.NET Core / .NET6', 'Angular', 'TypeScript', 'AWS (ECS, Lambda, DynamoDB)', 'Kafka', 'CQRS', 'Clean Architecture', 'NGXS'],
  },
  {
    company: 'Tecnosoftware',
    client: 'BCRA — Banco Central de la República Argentina',
    role: 'Software Developer',
    period: 'Julio 2023 — Abril 2024',
    location: 'Buenos Aires, Argentina',
    bullets: [
      'Análisis de comunicaciones regulatorias y nuevas normativas, implementando los cambios resultantes en aplicativos internos y externos.',
      'Automatización de procesos manuales mediante servicios backend desacoplados — reducción del margen de error humano.',
      'Refactor de servicios críticos aplicando principios SOLID — base de código más mantenible, menor time-to-fix.',
      'Monitoreo de logs en producción: detección de incidentes antes de impactar usuarios finales.',
    ],
    stack: ['SOLID', 'Backend services', 'Log monitoring', 'Agile / SCRUM'],
  },
  {
    company: 'Ministerio de Trabajo, Empleo y Seguridad Social',
    role: 'Software Developer',
    period: 'Julio 2021 — Marzo 2024',
    location: 'CABA, Argentina',
    bullets: [
      'Migración de plataforma institucional (SharePoint 2007 → 2013) con continuidad operativa total durante la transición.',
      'Sistema de gestión de trámites desarrollado desde cero en .NET 6, digitalizando procesos manuales completos.',
      'Interfaces web con Blazor, JavaScript y Bootstrap 5, integradas a servicios backend desacoplados.',
    ],
    stack: ['.NET 6', 'Blazor', 'C#', 'SharePoint', 'Azure DevOps', 'TFS'],
  },
];

// ── PROYECTOS ─────────────────────────────────────────────────
export const PROJECTS: readonly ProjectItem[] = [
  {
    title: 'career-os',
    kind: 'Engineering Brand System',
    status: 'live',
    description:
      'Repositorio maestro de contexto que alimenta cualquier IA usada en el flujo de trabajo: CV, arquitectura, criterio de diseño y forma de trabajar en un solo lugar. Este portfolio se construyó a partir de él.',
    stack: ['Markdown', 'Prompt Engineering', 'Claude', 'GitHub Actions'],
    href: 'https://github.com/ezequiel1409/portfolio',
  },
  {
    title: 'Event-Driven Microservices Reference',
    kind: 'Backend Architecture',
    status: 'in-progress',
    description:
      'Sistema de procesamiento asincrónico con SQS/Kafka que incluye un escenario de falla documentado: qué pasa cuando un servicio dependiente cae, y por qué el sistema degrada gracefully en vez de perder datos.',
    stack: ['Node.js', 'AWS SQS', 'Kafka', 'Docker', 'OpenTelemetry'],
  },
  {
    title: 'Observability Stack',
    kind: 'Infrastructure',
    status: 'planned',
    description:
      'Equivalente open-source del stack Dynatrace/Kibana/Grafana usado en producción: OpenTelemetry + Grafana + Prometheus. Docker Compose + una query documentada que detecta fallas antes que el usuario.',
    stack: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Docker Compose'],
  },
  {
    title: 'Grupo Mezzo — Landing',
    kind: 'Client Project / Angular',
    status: 'live',
    description:
      'Landing institucional para empresa de desarrollos industriales y logísticos. Angular 18 standalone + OnPush, design tokens centralizados, SEO y accesibilidad de base.',
    stack: ['Angular 18', 'TypeScript', 'SCSS', 'GitHub Pages'],
  },
];

// ── TECH STACK ────────────────────────────────────────────────
export const TECH: readonly TechCategory[] = [
  { label: 'Backend', items: ['.NET Core / .NET6', 'C#', 'Node.js', 'TypeScript', 'ASP.NET Core', 'REST APIs'] },
  { label: 'Frontend', items: ['Angular', 'React', 'React Native', 'Blazor', 'JavaScript ES6+'] },
  { label: 'Cloud & DevOps', items: ['AWS (ECS, Lambda, DynamoDB, SQS, SNS)', 'Kafka', 'Rancher', 'Consul', 'Docker'] },
  { label: 'Bases de datos', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
  { label: 'Observabilidad', items: ['Dynatrace', 'Kibana', 'Grafana'] },
  { label: 'Arquitectura', items: ['CQRS', 'Clean Architecture', 'SOLID', 'Event-Driven', 'Microservices'] },
  { label: 'Testing & Calidad', items: ['Jest', 'Karma', 'SonarQube', 'ESLint'] },
];

// ── PRINCIPIOS DE ARQUITECTURA ────────────────────────────────
export const ARCH_PRINCIPLES: readonly ArchPrinciple[] = [
  {
    title: 'Observabilidad antes que features',
    body: 'Un servicio que habla con algo externo (cola, base, API de terceros) tiene que ser observable desde el día uno. "Lo agregamos después" es la forma más común de terminar debuggeando en producción a ciegas.',
  },
  {
    title: 'Desacoplar donde la falla necesita quedar contenida',
    body: 'No todo necesita ser asincrónico. Pero cuando la caída de un servicio no puede tirar abajo a otro, una cola entra al diseño — no como default, sino porque el dominio lo requiere.',
  },
  {
    title: 'El patrón sirve al problema, no al revés',
    body: 'CQRS y Clean Architecture existen en mi flujo porque proyectos concretos los necesitaban — no porque sean "la forma correcta". Aplicarlos sin esa necesidad es el overengineering que evito.',
  },
  {
    title: 'Las decisiones se documentan, no solo el código',
    body: 'El código dice qué hace el sistema hoy. No dice por qué sync en vez de async, ni por qué esa base y no otra. Si no queda escrito, se pierde.',
  },
  {
    title: 'Migrar sin que nadie note el corte',
    body: 'La migración de SharePoint 2007 → 2013 no se midió por "¿migró?" sino por "¿alguien tuvo que dejar de trabajar?". Ese es el estándar para cualquier cambio de infraestructura.',
  },
];

// ── CREDENCIALES ──────────────────────────────────────────────
export const CREDENTIALS: readonly Credential[] = [
  { label: 'Licenciatura en Informática', org: 'Universidad Nacional del Oeste', period: '2020 — presente' },
  { label: 'Desarrollo Front End', org: 'CoderHouse', period: '2022' },
  { label: 'Red Hat Partner Program — Tier Premier', org: 'Red Hat', period: '' },
];
