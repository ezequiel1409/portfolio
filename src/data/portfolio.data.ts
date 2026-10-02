// ============================================================
// portfolio.data.ts — Fuente única de verdad del contenido
// Bilingüe (Español / English)
// ============================================================

export type Locale = 'es' | 'en';

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

export interface WarStory {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly challenge: string;
  readonly diagnosis: string;
  readonly solution: string;
  readonly impact: string;
  readonly tags: readonly string[];
}

export interface UiTranslations {
  readonly nav: {
    readonly experience: string;
    readonly projects: string;
    readonly stack: string;
    readonly architecture: string;
    readonly warStories: string;
    readonly contact: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly title1: string;
    readonly title2: string;
    readonly subtitle: string;
    readonly ctaExperience: string;
    readonly ctaCv: string;
    readonly copyEmail: string;
    readonly emailCopied: string;
    readonly metrics: readonly { readonly value: string; readonly label: string }[];
  };
  readonly architecture: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly subheading: string;
    readonly flowTitle: string;
    readonly flowSub: string;
  };
  readonly warStories: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly subheading: string;
    readonly challengeLabel: string;
    readonly diagnosisLabel: string;
    readonly solutionLabel: string;
    readonly impactLabel: string;
  };
  readonly projects: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly subheading: string;
    readonly liveBtn: string;
    readonly repoBtn: string;
  };
  readonly stack: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly subheading: string;
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly body: string;
    readonly sendEmail: string;
    readonly copyEmailBtn: string;
    readonly credentialsTitle: string;
  };
  readonly commandPalette: {
    readonly placeholder: string;
    readonly navigationGroup: string;
    readonly actionsGroup: string;
    readonly copyEmailSuccess: string;
    readonly switchTheme: string;
    readonly switchLang: string;
  };
}

// ── LINKS SOCIALES ────────────────────────────────────────────
export const SOCIAL = {
  github: 'https://github.com/ezequiel1409',
  linkedin: 'https://www.linkedin.com/in/ezequiel-gonzalez14',
  email: 'ezequiel140901@gmail.com',
  cv: '/portfolio/cv-ezequiel-gonzalez.pdf',
} as const;

// ── CONTENIDO EN ESPAÑOL ──────────────────────────────────────
const DATA_ES = {
  experience: [
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
  ] as readonly ExperienceEntry[],

  projects: [
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
  ] as readonly ProjectItem[],

  tech: [
    { label: 'Backend', items: ['.NET Core / .NET6', 'C#', 'Node.js', 'TypeScript', 'ASP.NET Core', 'REST APIs'] },
    { label: 'Frontend', items: ['Angular', 'React', 'React Native', 'Blazor', 'JavaScript ES6+'] },
    { label: 'Cloud & DevOps', items: ['AWS (ECS, Lambda, DynamoDB, SQS, SNS)', 'Kafka', 'Rancher', 'Consul', 'Docker'] },
    { label: 'Bases de datos', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
    { label: 'Observabilidad', items: ['Dynatrace', 'Kibana', 'Grafana'] },
    { label: 'Arquitectura', items: ['CQRS', 'Clean Architecture', 'SOLID', 'Event-Driven', 'Microservices'] },
    { label: 'Testing & Calidad', items: ['Jest', 'Karma', 'SonarQube', 'ESLint'] },
  ] as readonly TechCategory[],

  principles: [
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
  ] as readonly ArchPrinciple[],

  warStories: [
    {
      id: 'comex-spike',
      title: 'Pico de fin de mes en COMEX: Cero pérdida de eventos bajo alta carga',
      category: 'Fintech / Event-Driven',
      challenge: 'Picos transaccionales en operaciones de comercio exterior generaban acumulación de peticiones y latencia en servicios síncronos.',
      diagnosis: 'Trazas de APM en Dynatrace detectaron cuellos de botella en la retención de conexiones de bases relacionales por llamadas bloqueantes.',
      solution: 'Re-arquitectura con colas intermedias SQS/Kafka y patrón Productor-Consumidor asíncrono con políticas de reintento idempotentes.',
      impact: 'Reducción del 65% en p99 latency, tolerancia a fallas transparente y 0 transacciones duplicadas o perdidas.',
      tags: ['Kafka', 'AWS SQS', '.NET 6', 'Dynatrace', 'Event-Driven'],
    },
    {
      id: 'kafka-desync',
      title: 'Detección proactiva de desincronización de eventos antes del impacto al cliente',
      category: 'Observabilidad & SRE',
      challenge: 'Incremento progresivo de lag en particiones de Kafka durante el procesamiento de flujos financieros nocturnos.',
      diagnosis: 'Métricas de telemetría en Grafana/Kibana dispararon alertas tempranas de desviación de consumer lag antes del umbral de corte operativo.',
      solution: 'Escalado dinámico de consumidores en AWS ECS con KEDA y aislamiento de mensajes anómalos a Dead Letter Queue (DLQ).',
      impact: 'Drenaje del backlog en <4 minutos sin intervención manual en producción ni degradación para el usuario final.',
      tags: ['Grafana', 'Kibana', 'Kafka', 'AWS ECS', 'Auto-healing'],
    },
    {
      id: 'zero-downtime-migration',
      title: 'Modernización de plataforma institucional crítica con cero tiempo de indisponibilidad',
      category: 'Modernización & Legacy',
      challenge: 'Migración integral de sistema de gestión documental de organismos públicos hacia microservicios en .NET 6.',
      diagnosis: 'Complejidad en modelos de datos históricos con miles de trámites simultáneos y requerimiento estricto de no detener la atención pública.',
      solution: 'Estrategia de sincronización dual continua y despliegue desacoplado con validación de integridad en segundo plano.',
      impact: 'Transición sin interrupción de servicios para más de 1.500 usuarios diarios concurrentes.',
      tags: ['.NET 6', 'C#', 'SQL Server', 'Zero Downtime', 'Automation'],
    },
  ] as readonly WarStory[],

  credentials: [
    { label: 'Licenciatura en Informática', org: 'Universidad Nacional del Oeste', period: '2020 — presente' },
    { label: 'Desarrollo Front End', org: 'CoderHouse', period: '2022' },
    { label: 'Red Hat Partner Program — Tier Premier', org: 'Red Hat', period: 'Certificado / Activo' },
  ] as readonly Credential[],

  ui: {
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      architecture: 'Arquitectura',
      warStories: 'Casos Reales',
      contact: 'Contacto',
    },
    hero: {
      badge: 'IBM · Banco Supervielle · COMEX',
      title1: 'Full Stack',
      title2: 'Developer.',
      subtitle:
        'Construyo sistemas que se mantienen en pie cuando importa. Microservicios event-driven, observabilidad end-to-end y arquitectura que escala sin degradación. 4+ años en sistemas financieros de alta disponibilidad.',
      ctaExperience: 'Ver experiencia',
      ctaCv: 'Descargar CV',
      copyEmail: 'Copiar Email',
      emailCopied: '¡Email copiado!',
      metrics: [
        { value: '4+', label: 'años experiencia' },
        { value: '3', label: 'industrias (banking, gov, enterprise)' },
        { value: 'Event-Driven', label: 'arquitectura en producción' },
        { value: 'AWS', label: 'cloud primario' },
      ],
    },
    architecture: {
      eyebrow: 'Arquitectura',
      heading: 'Cómo pienso los sistemas',
      subheading: 'Principios que definen cómo tomo decisiones de arquitectura — derivados de problemas reales, no de lecturas de libros.',
      flowTitle: 'Resilience Explorer — Arquitectura Event-Driven',
      flowSub: 'Visualizá el flujo de una transacción en producción y simulá una caída de infraestructura para ver cómo el sistema degrada sin pérdida de datos.',
    },
    warStories: {
      eyebrow: 'Ingeniería en Producción',
      heading: 'Casos Reales & Post-Mortems',
      subheading: 'Resolución de problemas críticos en sistemas financieros de alta concurrencia: del diagnóstico con observabilidad a la mitigación definitiva.',
      challengeLabel: 'Desafío',
      diagnosisLabel: 'Diagnóstico',
      solutionLabel: 'Solución',
      impactLabel: 'Impacto',
    },
    projects: {
      eyebrow: 'Proyectos',
      heading: 'Ingeniería visible',
      subheading: 'Cada proyecto responde una pregunta: ¿qué habilidad de ingeniería demuestra esto que los demás no demuestran ya?',
      liveBtn: 'Visitar sitio',
      repoBtn: 'Ver repositorio',
    },
    stack: {
      eyebrow: 'Stack',
      heading: 'Tecnologías en producción',
      subheading: 'No es una lista de cosas que usé una vez. Es lo que usé en proyectos financieros reales, con carga real, con consecuencias reales.',
    },
    contact: {
      eyebrow: 'Contacto',
      heading: '¿Construimos algo serio?',
      body: 'Estoy disponible para roles remotos, proyectos puntuales y conversaciones técnicas. Si lo que buscás es alguien que piense en términos de sistemas antes que de features, tiene sentido que hablemos.',
      sendEmail: 'Escribirme',
      copyEmailBtn: 'Copiar Email',
      credentialsTitle: 'Educación & Credenciales',
    },
    commandPalette: {
      placeholder: 'Escribí un comando o sección (ej. experiencia, stack, cv, tema)...',
      navigationGroup: 'Navegación',
      actionsGroup: 'Acciones rápidas',
      copyEmailSuccess: '¡Email copiado al portapapeles!',
      switchTheme: 'Cambiar tema (Dark / Light)',
      switchLang: 'Switch to English',
    },
  } as UiTranslations,
};

// ── CONTENIDO EN INGLÉS ───────────────────────────────────────
const DATA_EN = {
  experience: [
    {
      company: 'IBM',
      client: 'Banco Supervielle — Foreign Trade (COMEX)',
      role: 'Full Stack Cloud Developer',
      period: 'April 2024 — Present',
      location: 'Remote',
      current: true,
      bullets: [
        'Designed and deployed event-driven microservices architecture for critical financial processes, sustaining peak traffic loads without production degradation.',
        'Integrated asynchronous messaging workflows using AWS SQS, SNS, and Apache Kafka — eliminating single points of failure and hardening system resilience.',
        'End-to-end observability setup with Dynatrace, Kibana, and Grafana — proactive incident detection prior to end-user impact.',
        'Built enterprise banking applications with microservices, BFF (Backend for Frontend), and IBM API Connect for secure service exposition.',
      ],
      stack: ['.NET Core / .NET6', 'Angular', 'TypeScript', 'AWS (ECS, Lambda, DynamoDB)', 'Kafka', 'CQRS', 'Clean Architecture', 'NGXS'],
    },
    {
      company: 'Tecnosoftware',
      client: 'BCRA — Central Bank of Argentina',
      role: 'Software Developer',
      period: 'July 2023 — April 2024',
      location: 'Buenos Aires, Argentina',
      bullets: [
        'Analyzed financial regulatory mandates and new policies, implementing required business logic across internal and external applications.',
        'Automated manual workflows via decoupled backend services — substantially reducing human operational error.',
        'Refactored legacy mission-critical services applying SOLID principles — improved maintainability and decreased time-to-fix.',
        'Monitored production telemetry logs to intercept incidents before reaching final users.',
      ],
      stack: ['SOLID', 'Backend services', 'Log monitoring', 'Agile / SCRUM'],
    },
    {
      company: 'Ministry of Labor, Employment and Social Security',
      role: 'Software Developer',
      period: 'July 2021 — March 2024',
      location: 'Buenos Aires, Argentina',
      bullets: [
        'Migrated institutional platform infrastructure with continuous operational continuity throughout the transition.',
        'Engineered an administrative case management system from scratch in .NET 6, completely digitizing manual citizen procedures.',
        'Constructed web user interfaces with Blazor, JavaScript, and Bootstrap 5 integrated with decoupled backend microservices.',
      ],
      stack: ['.NET 6', 'Blazor', 'C#', 'SharePoint', 'Azure DevOps', 'TFS'],
    },
  ] as readonly ExperienceEntry[],

  projects: [
    {
      title: 'career-os',
      kind: 'Engineering Brand System',
      status: 'live',
      description:
        'Master contextual engineering repository powering any AI workflow: resume, architecture design decisions, and engineering ethos in one place. This portfolio is built upon it.',
      stack: ['Markdown', 'Prompt Engineering', 'Claude', 'GitHub Actions'],
      href: 'https://github.com/ezequiel1409/portfolio',
    },
    {
      title: 'Event-Driven Microservices Reference',
      kind: 'Backend Architecture',
      status: 'in-progress',
      description:
        'Asynchronous processing system with SQS/Kafka featuring documented failure scenarios: what occurs when a downstream dependency fails and how graceful degradation prevents data loss.',
      stack: ['Node.js', 'AWS SQS', 'Kafka', 'Docker', 'OpenTelemetry'],
    },
    {
      title: 'Observability Stack',
      kind: 'Infrastructure',
      status: 'planned',
      description:
        'Open-source reference equivalent to production Dynatrace/Kibana/Grafana stack: OpenTelemetry + Grafana + Prometheus. Packaged with Docker Compose and documented anomaly detection queries.',
      stack: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Docker Compose'],
    },
    {
      title: 'Grupo Mezzo — Landing',
      kind: 'Client Project / Angular',
      status: 'live',
      description:
        'Institutional landing for an industrial and logistics infrastructure firm. Built with Angular 18 standalone + OnPush, centralized design tokens, strict SEO, and accessibility foundations.',
      stack: ['Angular 18', 'TypeScript', 'SCSS', 'GitHub Pages'],
    },
  ] as readonly ProjectItem[],

  tech: [
    { label: 'Backend', items: ['.NET Core / .NET6', 'C#', 'Node.js', 'TypeScript', 'ASP.NET Core', 'REST APIs'] },
    { label: 'Frontend', items: ['Angular', 'React', 'React Native', 'Blazor', 'JavaScript ES6+'] },
    { label: 'Cloud & DevOps', items: ['AWS (ECS, Lambda, DynamoDB, SQS, SNS)', 'Kafka', 'Rancher', 'Consul', 'Docker'] },
    { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
    { label: 'Observability', items: ['Dynatrace', 'Kibana', 'Grafana'] },
    { label: 'Architecture', items: ['CQRS', 'Clean Architecture', 'SOLID', 'Event-Driven', 'Microservices'] },
    { label: 'Testing & Quality', items: ['Jest', 'Karma', 'SonarQube', 'ESLint'] },
  ] as readonly TechCategory[],

  principles: [
    {
      title: 'Observability before features',
      body: 'Any service that talks to an external dependency (queue, datastore, third-party API) must be observable from day one. "Adding telemetry later" is how developers end up blind-debugging in production.',
    },
    {
      title: 'Decouple where failure must remain contained',
      body: 'Not everything needs to be asynchronous. But when the crash of one service cannot take down another, a message queue enters the design — not as a dogma, but because domain reliability demands it.',
    },
    {
      title: 'Patterns serve problems, not the other way around',
      body: 'CQRS and Clean Architecture exist in my workflow because concrete systems needed them — not because they are "the right way". Applying them without necessity is the overengineering I avoid.',
    },
    {
      title: 'Document the decisions, not just the code',
      body: 'Code explains what the system does today. It never explains why sync over async was chosen, or why that datastore and not another. If it is not written down, it gets lost.',
    },
    {
      title: 'Migrate without anyone noticing the cutover',
      body: 'Our core institutional platform migration was never measured by "did it migrate?" but by "did anyone have to stop working?". That is the baseline for any infrastructure change.',
    },
  ] as readonly ArchPrinciple[],

  warStories: [
    {
      id: 'comex-spike',
      title: 'Foreign Trade Peak Spike: Zero Event Loss Under Heavy Concurrency',
      category: 'Fintech / Event-Driven',
      challenge: 'High transactional spikes during international currency operations caused connection pool saturation across synchronous backend endpoints.',
      diagnosis: 'Dynatrace distributed tracing uncovered database connection thread starvation triggered by slow downstream legacy APIs.',
      solution: 'Re-architected ingestion using AWS SQS and Kafka event streams with decoupled consumer workers and idempotent retry semantics.',
      impact: '65% reduction in p99 latency, transparent fault tolerance, and 0 lost or duplicated financial transactions.',
      tags: ['Kafka', 'AWS SQS', '.NET 6', 'Dynatrace', 'Event-Driven'],
    },
    {
      id: 'kafka-desync',
      title: 'Proactive Event Desync Detection Before User Impact',
      category: 'Observability & SRE',
      challenge: 'Progressive consumer lag accumulation across Kafka partitions during nighttime batch settlement processing.',
      diagnosis: 'Grafana & Kibana custom telemetry dashboards triggered early warning alerts on consumer lag delta before reaching SLA boundaries.',
      solution: 'Auto-scaled consumer workers on AWS ECS via KEDA and isolated corrupted payloads to a Dead Letter Queue (DLQ).',
      impact: 'Backlog cleared in under 4 minutes with zero manual production intervention and zero banking app disruption.',
      tags: ['Grafana', 'Kibana', 'Kafka', 'AWS ECS', 'Auto-healing'],
    },
    {
      id: 'zero-downtime-migration',
      title: 'Core Institutional Platform Modernization with Zero Downtime',
      category: 'Modernization & Legacy',
      challenge: 'Full transition of government public records management to modern .NET 6 microservices with a strict requirement of zero service interruption.',
      diagnosis: 'Historical relational schema complexity handling thousands of concurrent government procedures.',
      solution: 'Continuous dual-synchronization strategy and decoupled blue-green deployment with background data integrity validation.',
      impact: '100% operational continuity maintained for over 1,500 daily concurrent administrative users.',
      tags: ['.NET 6', 'C#', 'SQL Server', 'Zero Downtime', 'Automation'],
    },
  ] as readonly WarStory[],

  credentials: [
    { label: 'B.S. in Computer Science', org: 'Universidad Nacional del Oeste', period: '2020 — present' },
    { label: 'Front End Development', org: 'CoderHouse', period: '2022' },
    { label: 'Red Hat Partner Program — Tier Premier', org: 'Red Hat', period: 'Certified / Active' },
  ] as readonly Credential[],

  ui: {
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      architecture: 'Architecture',
      warStories: 'War Stories',
      contact: 'Contact',
    },
    hero: {
      badge: 'IBM · Banco Supervielle · COMEX',
      title1: 'Full Stack',
      title2: 'Developer.',
      subtitle:
        'I build systems that stay up when it matters. Event-driven microservices, end-to-end observability, and architecture that scales without degradation. 4+ years in high-availability financial systems.',
      ctaExperience: 'View experience',
      ctaCv: 'Download Resume',
      copyEmail: 'Copy Email',
      emailCopied: 'Email copied!',
      metrics: [
        { value: '4+', label: 'years experience' },
        { value: '3', label: 'industries (banking, gov, enterprise)' },
        { value: 'Event-Driven', label: 'production architecture' },
        { value: 'AWS', label: 'primary cloud' },
      ],
    },
    architecture: {
      eyebrow: 'Architecture',
      heading: 'How I think about systems',
      subheading: 'Principles defining how I make architectural decisions — derived from real production problems, not textbooks.',
      flowTitle: 'Resilience Explorer — Event-Driven Architecture',
      flowSub: 'Explore real-world transaction flow and simulate infrastructure outages to see how the system degrades gracefully with zero data loss.',
    },
    warStories: {
      eyebrow: 'Production Engineering',
      heading: 'War Stories & Post-Mortems',
      subheading: 'Resolving mission-critical failures in high-concurrency financial systems: from observability diagnosis to permanent mitigation.',
      challengeLabel: 'Challenge',
      diagnosisLabel: 'Diagnosis',
      solutionLabel: 'Solution',
      impactLabel: 'Impact',
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Visible Engineering',
      subheading: 'Each project answers one question: what engineering capability does this demonstrate that others do not?',
      liveBtn: 'Visit Site',
      repoBtn: 'View Repository',
    },
    stack: {
      eyebrow: 'Stack',
      heading: 'Technologies in Production',
      subheading: 'Not a laundry list of things tried once. What I have used in real financial projects, under real load, with real consequences.',
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Let’s build something serious.',
      body: 'Available for remote roles, specialized projects, and technical discussions. If you are looking for someone who thinks in systems before features, we should talk.',
      sendEmail: 'Send Email',
      copyEmailBtn: 'Copy Email',
      credentialsTitle: 'Education & Credentials',
    },
    commandPalette: {
      placeholder: 'Type a command or section (e.g. experience, stack, cv, theme)...',
      navigationGroup: 'Navigation',
      actionsGroup: 'Quick Actions',
      copyEmailSuccess: 'Email copied to clipboard!',
      switchTheme: 'Toggle theme (Dark / Light)',
      switchLang: 'Cambiar a Español',
    },
  } as UiTranslations,
};

// ── GETTER BILINGÜE ───────────────────────────────────────────
export function getPortfolioData(locale: Locale = 'es') {
  return locale === 'en' ? DATA_EN : DATA_ES;
}

// ── EXPORTS COMPATIBLES (ES por defecto) ──────────────────────
export const EXPERIENCE = DATA_ES.experience;
export const PROJECTS = DATA_ES.projects;
export const TECH = DATA_ES.tech;
export const ARCH_PRINCIPLES = DATA_ES.principles;
export const WAR_STORIES = DATA_ES.warStories;
export const CREDENTIALS = DATA_ES.credentials;
export const UI = DATA_ES.ui;
