// ============================================================
// portfolio.data.ts — Fuente única de verdad del contenido
// Bilingüe (Español / English) — Enfoque Cliente, Transparencia, Hitos y Mentalidad de Producto
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
    readonly letter: string;
    readonly services: string;
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
  readonly letter: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly p1: string;
    readonly p2: string;
    readonly p3: string;
    readonly metricsTitle: string;
    readonly metrics: readonly {
      readonly metric: string;
      readonly label: string;
      readonly context: string;
    }[];
    readonly commitmentsTitle: string;
    readonly commitments: readonly {
      readonly index: number;
      readonly title: string;
      readonly body: string;
    }[];
    readonly closing: string;
    readonly signatureName: string;
    readonly signatureRole: string;
  };
  readonly services: {
    readonly eyebrow: string;
    readonly heading: string;
    readonly subheading: string;
    readonly items: readonly {
      readonly tag: string;
      readonly problem: string;
      readonly solution: string;
      readonly stack: readonly string[];
    }[];
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
        'Optimización de flujos asíncronos con colas SQS y Kafka: reducción del 65% en la latencia p99 durante picos de cierre de mes, sosteniendo la carga sin degradación.',
        'Diseño de arquitectura event-driven con reintentos idempotentes y Dead Letter Queues (DLQ), garantizando 0 transacciones duplicadas o perdidas en operaciones de comercio exterior.',
        'Implementación de observabilidad distribuida con Dynatrace, Kibana y Grafana, reduciendo sustancialmente el tiempo medio de detección (MTTD) ante anomalías en producción.',
        'Desarrollo integral de aplicaciones web bancarias con arquitectura BFF (Backend for Frontend) en Angular y .NET 6, consumidas por miles de usuarios activos.',
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
        'Automatización de procesos operativos mediante servicios backend desacoplados, eliminando el margen de error manual en conciliaciones financieras críticas.',
        'Refactorización de servicios críticos aplicando principios SOLID sin interrupción en usuarios finales, facilitando la incorporación de nuevas normativas y reduciendo tiempos de mantenimiento.',
        'Análisis e implementación técnica de comunicaciones regulatorias complejas con estricto cumplimiento de plazos y requerimientos de auditoría.',
        'Monitoreo activo de telemetría de logs en producción para resolver incidentes preventivamente antes de que impactaran en la operatoria.',
      ],
      stack: ['SOLID', 'Backend services', 'Log monitoring', 'Agile / SCRUM'],
    },
    {
      company: 'Ministerio de Trabajo, Empleo y Seguridad Social',
      role: 'Software Developer',
      period: 'Julio 2021 — Marzo 2024',
      location: 'CABA, Argentina',
      bullets: [
        'Migración integral de plataforma institucional con 100% de continuidad operativa para más de 1.500 usuarios diarios concurrentes durante la transición.',
        'Desarrollo desde cero de un sistema de trámites administrativos en .NET 6 y C#, digitalizando procesos manuales completos y acelerando los tiempos de gestión institucional.',
        'Construcción de interfaces interactivas en Blazor, JavaScript y Bootstrap 5 integradas a microservicios desacoplados.',
      ],
      stack: ['.NET 6', 'Blazor', 'C#', 'SharePoint', 'Azure DevOps', 'TFS'],
    },
  ] as readonly ExperienceEntry[],

  projects: [
    {
      title: 'career-os',
      kind: 'Engineering Brand System / AI',
      status: 'live',
      description:
        'Ecosistema de contexto técnico unificado que utilizo para coordinar herramientas de desarrollo asistido con IA (Google Antigravity, Claude Code, Codex y watsonx) con criterio de ingeniería, trazabilidad y rigor.',
      stack: ['Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx', 'GitHub Actions'],
      href: 'https://github.com/ezequiel1409/portfolio',
    },
    {
      title: 'Event-Driven Microservices Reference',
      kind: 'Backend Architecture',
      status: 'in-progress',
      description:
        'Arquitectura de referencia en backend con procesamiento desacoplado en colas (SQS/Kafka). Documenta cómo responde el sistema ante caídas de dependencias externas para resguardar los datos del usuario con degradación controlada.',
      stack: ['Node.js', 'AWS SQS', 'Kafka', 'Docker', 'OpenTelemetry'],
    },
    {
      title: 'Observability Stack',
      kind: 'Infrastructure',
      status: 'planned',
      description:
        'Plantilla de observabilidad lista para desplegar con Docker Compose: OpenTelemetry, Grafana y Prometheus configurados para auditar tiempos de respuesta y detectar errores rápidamente.',
      stack: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Docker Compose'],
    },
    {
      title: 'Grupo Mezzo — Landing',
      kind: 'Client Project / Angular',
      status: 'live',
      description:
        'Sitio web institucional para empresa de desarrollos industriales y logísticos. Desarrollado en Angular 18 con arquitectura modular, diseño accesible y optimización para buscadores (SEO).',
      stack: ['Angular 18', 'TypeScript', 'SCSS', 'GitHub Pages'],
    },
  ] as readonly ProjectItem[],

  tech: [
    { label: 'Backend & APIs', items: ['.NET Core / .NET6', 'C#', 'Node.js', 'TypeScript', 'ASP.NET Core', 'REST APIs'] },
    { label: 'Cloud & DevOps', items: ['AWS (ECS, Lambda, DynamoDB, SQS, SNS)', 'Kafka', 'Docker', 'Rancher', 'CI/CD'] },
    { label: 'IA & Flujos Agénticos', items: ['Google Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx', 'Prompt Engineering', 'AI-Assisted Dev'] },
    { label: 'Bases de datos', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
    { label: 'Observabilidad', items: ['Dynatrace', 'Grafana', 'Kibana'] },
    { label: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Blazor', 'Tailwind CSS'] },
    { label: 'Arquitectura', items: ['Clean Architecture', 'SOLID', 'Event-Driven', 'Microservicios', 'CQRS'] },
    { label: 'Testing & Calidad', items: ['Jest', 'Karma', 'SonarQube', 'ESLint'] },
  ] as readonly TechCategory[],

  principles: [
    {
      title: 'Simplicidad antes que sobreingeniería',
      body: 'La mejor arquitectura es la más simple que resuelve el problema de negocio sin generar deuda técnica futura. No agrego herramientas complejas si una solución ordenada resuelve el desafío con menor costo.',
    },
    {
      title: 'Asumir que las cosas van a fallar',
      body: 'En el mundo real, los servidores se reinician, las redes tienen latencia y los APIs externos dan timeout. Diseñamos con reintentos seguros, aislamiento y logs claros para recuperar rápido y proteger los datos.',
    },
    {
      title: 'El código se escribe para personas',
      body: 'El código lo van a leer y mantener otros desarrolladores. Priorizo claridad, tests y estructura limpia antes que soluciones crípticas que solo entiende quien las programó.',
    },
    {
      title: 'Observabilidad para no adivinar',
      body: 'Logs estructurados y métricas legibles desde el día uno. Cuando ocurre un problema, el equipo debe poder saber con exactitud qué pasó en cuestión de minutos, no de días.',
    },
    {
      title: 'Migraciones progresivas y cuidadosas',
      body: 'Los cambios estructurales se hacen paso a paso, validando la integridad de datos en cada etapa para que tus usuarios sigan trabajando con total normalidad.',
    },
  ] as readonly ArchPrinciple[],

  warStories: [
    {
      id: 'comex-spike',
      title: 'Picos transaccionales en COMEX: Manejo ordenado con colas y reintentos',
      category: 'Fintech / Event-Driven',
      challenge: 'En días de cierre de mes, las operaciones de comercio exterior generaban acumulación de peticiones y demoras en servicios síncronos.',
      diagnosis: 'Mediante trazas en Dynatrace identificamos que las consultas bloqueantes a la base de datos agotaban el pool de conexiones disponibles.',
      solution: 'Desacoplamos los procesos pesados utilizando colas SQS/Kafka con consumidores en segundo plano y reintentos idempotentes.',
      impact: 'Reducción del 65% en latencia p99, estabilización de la base de datos y transacciones completadas de manera predecible para los clientes.',
      tags: ['Kafka', 'AWS SQS', '.NET 6', 'Dynatrace', 'Event-Driven'],
    },
    {
      id: 'kafka-desync',
      title: 'Monitoreo y recuperación de demoras en eventos financieros',
      category: 'Observabilidad & SRE',
      challenge: 'Durante procesamientos nocturnos, se detectaban retrasos progresivos (consumer lag) en el consumo de eventos financieros.',
      diagnosis: 'Los dashboards en Grafana/Kibana alertaron tempranamente que ciertos mensajes con estructuras atípicas demoraban el procesamiento general.',
      solution: 'Aislamos los mensajes con error hacia una Dead Letter Queue (DLQ) para revisarlos puntualmente y ajustamos los workers de AWS ECS.',
      impact: 'El procesamiento recuperó su ritmo en pocos minutos sin afectar la operatoria bancaria y los mensajes aislados se reprocesaron con seguridad.',
      tags: ['Grafana', 'Kibana', 'Kafka', 'AWS ECS', 'Resiliencia'],
    },
    {
      id: 'zero-downtime-migration',
      title: 'Modernización de plataforma institucional con continuidad operativa',
      category: 'Modernización & Legacy',
      challenge: 'Modernización integral del sistema de gestión de expedientes hacia microservicios en .NET 6.',
      diagnosis: 'Alta dependencia de bases de datos heredadas y la necesidad crítica de no frenar la atención ni la carga de trámites diarios.',
      solution: 'Estrategia de sincronización dual continua y migración modular por etapas con validación de datos en segundo plano.',
      impact: 'Transición fluida para más de 1.500 usuarios diarios concurrentes sin interrumpir la operación del organismo.',
      tags: ['.NET 6', 'C#', 'SQL Server', 'Migración', 'Automatización'],
    },
  ] as readonly WarStory[],

  credentials: [
    { label: 'Licenciatura en Informática', org: 'Universidad Nacional del Oeste', period: '2020 — presente' },
    { label: 'Desarrollo Front End', org: 'CoderHouse', period: '2022' },
    { label: 'Red Hat Partner Program — Tier Premier', org: 'Red Hat', period: 'Certificado / Activo' },
  ] as readonly Credential[],

  ui: {
    nav: {
      letter: 'Sobre mí',
      services: 'Soluciones',
      experience: 'Experiencia',
      projects: 'Proyectos',
      stack: 'Stack',
      architecture: 'Arquitectura',
      warStories: 'Casos Reales',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Ezequiel Gonzalez · Software Engineer',
      title1: 'Desarrollo Backend',
      title2: '& Cloud con Sentido Común.',
      subtitle:
        'Construyo APIs y servicios backend con .NET, Node.js y AWS. Ayudo a empresas a resolver problemas reales de arquitectura, integrar sistemas y lanzar productos con código limpio y sin vueltas.',
      ctaExperience: '¿Cuál es tu problema? Charlemos',
      ctaCv: 'Descargar CV',
      copyEmail: 'Copiar Email',
      emailCopied: '¡Email copiado!',
      metrics: [
        { value: '4+', label: 'años creando software en producción' },
        { value: 'Pragmatismo', label: 'soluciones simples antes que sobreingeniería' },
        { value: 'Resiliencia', label: 'sistemas pensados para tolerar fallas' },
        { value: 'Transparencia', label: 'comunicación honesta en cada etapa' },
      ],
    },
    letter: {
      eyebrow: 'Sobre mí · Mentalidad de Producto & Ownership',
      heading: 'Hacer que las cosas pasen: detectar mejoras, adueñarse del problema y construir productos que enamoren',
      p1: 'Me apasiona la ingeniería de software como herramienta para construir productos extraordinarios. No entiendo el backend como un conjunto de tablas o endpoints aislados, sino como el motor silencioso que hace que los usuarios y clientes se enamoren del producto: respuestas instantáneas, estabilidad sin sorpresas y flujos que simplemente funcionan.',
      p2: 'Tengo una mentalidad proactiva, curiosa y con un fuerte hambre de gloria: busco constantemente detectar oportunidades de mejora en el código, en la arquitectura y en los procesos antes de que se conviertan en cuellos de botella. Trabajo con autonomía creciente para destrabar problemas técnicos complejos y me motiva escalar mi impacto en entornos de alta demanda.',
      p3: 'Valoro la excelencia técnica porque entiendo que escribir código limpio, testeado y modular no es un capricho teórico: es el primer paso indispensable para mover la aguja del negocio de forma medible y sostenible.',
      metricsTitle: 'Hitos técnicos y logros cuantificables en producción:',
      metrics: [
        {
          metric: '-65% Latencia p99',
          label: 'Optimización en COMEX',
          context: 'Re-arquitectura asíncrona con colas SQS y Kafka sosteniendo picos de alta demanda en banca (IBM / Supervielle).',
        },
        {
          metric: '100% Continuidad',
          label: 'Migración Institucional',
          context: 'Transición integral de plataforma para +1.500 usuarios diarios sin ningún corte de servicio (Sector Público).',
        },
        {
          metric: '0 Errores Manuales',
          label: 'Automatización Backend',
          context: 'Desacoplamiento de procesos y validaciones regulatorias automáticas para el Banco Central (BCRA).',
        },
        {
          metric: 'Ownership Total',
          label: 'Hacedor de Punta a Punta',
          context: 'Proyectos propios (career-os), adopción de IA agéntica (Antigravity, Claude Code) y entrega en tiempo y forma.',
        },
      ],
      commitmentsTitle: 'Cómo trabajo y qué valor aporto a tu equipo:',
      commitments: [
        {
          index: 1,
          title: 'Ownership de punta a punta',
          body: 'Me hago dueño de las tareas desde la definición hasta la puesta en producción. Pregunto lo necesario para destrabarme rápido, colaboro con el equipo y entrego soluciones completas en tiempo y forma.',
        },
        {
          index: 2,
          title: 'Mentalidad de hacedor & curiosidad continua',
          body: 'No me quedo esperando instrucciones pasivamente: construyo proyectos propios, experimento con arquitecturas modernas e integro herramientas de IA de vanguardia para acelerar el desarrollo con criterio.',
        },
        {
          index: 3,
          title: 'Detección proactiva de mejoras',
          body: 'Miro el producto con ojos de dueño: detecto cuellos de botella en bases de datos, propongo optimizaciones antes de que el usuario sufra demoras y convierto problemas complejos en flujos limpios.',
        },
        {
          index: 4,
          title: 'Excelencia que mueve la aguja del negocio',
          body: 'Código limpio, principios SOLID y tests sólidos no son vanidad técnica: son la garantía de que el producto puede evolucionar a gran velocidad sin romperse a cada paso.',
        },
      ],
      closing: 'Disponible para proyectos puntuales, consultoría backend y roles en equipos ambiciosos que valoren el compromiso y los resultados.',
      signatureName: 'Ezequiel Gonzalez',
      signatureRole: 'Full Stack & Cloud Developer · Product & Backend Engineering',
    },
    services: {
      eyebrow: 'Soluciones Técnicas',
      heading: '¿Cuál es tu problema hoy? Resolvámoslo juntos',
      subheading: 'No te vendo tecnologías por moda. Te propongo soluciones concretas a los cuellos de botella que frenan tu negocio o tu producto.',
      items: [
        {
          tag: 'Rendimiento & Escala',
          problem: 'Mi backend es lento o se cae cuando sube el tráfico',
          solution: 'Audito cuellos de botella, optimizo consultas a bases de datos, desacoplo procesos pesados con colas (AWS SQS, Kafka) e implemento caché para que tu sistema responda rápido y no pierda transacciones.',
          stack: ['.NET Core', 'Node.js', 'AWS SQS / Kafka', 'Redis', 'PostgreSQL / SQL Server'],
        },
        {
          tag: 'Nuevos Productos / APIs',
          problem: 'Necesito crear una API o backend nuevo para mi producto',
          solution: 'Diseño y desarrollo APIs REST sólidas desde cero: autenticación segura (JWT/OAuth), arquitectura limpia, validaciones estrictas, tests automáticos y documentación lista para tu equipo o clientes.',
          stack: ['C# / .NET 6+', 'TypeScript', 'Node.js', 'Docker', 'Swagger'],
        },
        {
          tag: 'Modernización',
          problem: 'Tengo un sistema viejo/legacy y nos da miedo tocarlo',
          solution: 'Modernizo bases de código antiguas paso a paso: refactorizo componentes críticos aplicando Clean Architecture y migramos a versiones actuales sin cortar el servicio a tus usuarios.',
          stack: ['Migración .NET', 'Blazor', 'TypeScript', 'Microservicios desacoplados'],
        },
        {
          tag: 'Integraciones Críticas',
          problem: 'Necesito integrar pasarelas de pago, bancos o APIs de terceros',
          solution: 'Construyo integraciones fiables con webhooks, conciliación automática, manejo defensivo de errores y reintentos para garantizar que ninguna operación quede en el limbo.',
          stack: ['APIs Bancarias', 'Stripe / MercadoPago', 'Webhooks', 'API Connect'],
        },
        {
          tag: 'Desarrollo con IA',
          problem: 'Quiero acelerar los tiempos de desarrollo sin perder calidad',
          solution: 'Aprovecho flujos de desarrollo asistido con agentes e IA (Claude Code, Antigravity, Codex) para prototipar, codificar y testear con mayor velocidad, siempre auditado y con criterio de ingeniería.',
          stack: ['Google Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx'],
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitectura & Resiliencia',
      heading: 'Cómo pensamos la tolerancia a fallos',
      subheading: 'Los servidores pueden fallar y las redes tienen cortes. Mirá cómo diseñamos flujos asíncronos para que el negocio siga operando y los datos queden a salvo.',
      flowTitle: 'Simulador de Tolerancia a Fallos en Producción',
      flowSub: 'Visualizá qué pasa ante una caída temporal de base de datos: las operaciones no se descartan, sino que quedan retenidas en cola con reintentos controlados hasta recuperarse.',
    },
    warStories: {
      eyebrow: 'Ingeniería en Producción',
      heading: 'Casos de Estudio & Desafíos Reales',
      subheading: 'Problemas concretos que resolvimos en banca y sector público: cómo diagnosticamos los cuellos de botella y qué soluciones implementamos en equipo.',
      challengeLabel: 'Problema',
      diagnosisLabel: 'Diagnóstico',
      solutionLabel: 'Solución',
      impactLabel: 'Resultado',
    },
    projects: {
      eyebrow: 'Proyectos',
      heading: 'Trabajo visible',
      subheading: 'Proyectos y arquitecturas donde aplico las mismas prácticas de código limpio, automatización y criterio técnico.',
      liveBtn: 'Visitar sitio',
      repoBtn: 'Ver repositorio',
    },
    stack: {
      eyebrow: 'Stack & Herramientas',
      heading: 'Tecnologías que domino en producción',
      subheading: 'Herramientas y lenguajes con los que trabajo habitualmente para resolver problemas de negocio.',
    },
    contact: {
      eyebrow: 'Contacto',
      heading: '¿Cuál es tu problema actual? Charlemos.',
      body: 'Tanto si necesitás resolver un cuello de botella técnico, construir una API desde cero o sumar a alguien comprometido a tu equipo, conversemos sin vueltas. Escribime y te respondo en el día.',
      sendEmail: 'Escribirme un correo',
      copyEmailBtn: 'Copiar Email',
      credentialsTitle: 'Educación & Credenciales',
    },
    commandPalette: {
      placeholder: 'Escribí un comando o sección (ej. sobre mí, soluciones, experiencia, cv)...',
      navigationGroup: 'Navegación',
      actionsGroup: 'Acciones rápidas',
      copyEmailSuccess: '¡Email copiado al portapapeles!',
      switchTheme: 'Cambiar tema (Celeste & Noche / Claro)',
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
        'Optimized asynchronous workflows using AWS SQS and Kafka: achieved a 65% reduction in p99 latency during month-end traffic surges without service degradation.',
        'Architected resilient event-driven pipelines with idempotent retry semantics and Dead Letter Queues (DLQ), guaranteeing zero lost or duplicated foreign trade transactions.',
        'Implemented distributed observability with Dynatrace, Kibana, and Grafana, significantly lowering Mean Time to Detect (MTTD) on production anomalies.',
        'Engineered full-stack banking web applications using BFF (Backend for Frontend) patterns in Angular and .NET 6, utilized by thousands of active users.',
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
        'Automated mission-critical operational processes via decoupled backend services, eliminating manual error margins in financial reporting.',
        'Refactored legacy services applying SOLID principles with zero end-user downtime, accelerating maintenance cycles for new regulatory mandates.',
        'Analyzed and implemented complex central banking regulatory updates with strict adherence to audit and delivery deadlines.',
        'Proactively monitored production telemetry logs to identify and resolve issues before they could affect end-users.',
      ],
      stack: ['SOLID', 'Backend services', 'Log monitoring', 'Agile / SCRUM'],
    },
    {
      company: 'Ministry of Labor, Employment and Social Security',
      role: 'Software Developer',
      period: 'July 2021 — March 2024',
      location: 'Buenos Aires, Argentina',
      bullets: [
        'Executed full institutional platform migration with 100% operational continuity for 1,500+ daily concurrent administrative users throughout the transition.',
        'Engineered an administrative case management system from scratch in .NET 6 & C#, digitizing manual citizen procedures and slashing cycle times.',
        'Developed responsive web interfaces with Blazor, JavaScript, and Bootstrap integrated with decoupled backend microservices.',
      ],
      stack: ['.NET 6', 'Blazor', 'C#', 'SharePoint', 'Azure DevOps', 'TFS'],
    },
  ] as readonly ExperienceEntry[],

  projects: [
    {
      title: 'career-os',
      kind: 'Engineering Brand System / AI',
      status: 'live',
      description:
        'Unified engineering context repository used to orchestrate modern AI development tools (Google Antigravity, Claude Code, ChatGPT Codex, and watsonx) with technical rigor and traceability.',
      stack: ['Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx', 'GitHub Actions'],
      href: 'https://github.com/ezequiel1409/portfolio',
    },
    {
      title: 'Event-Driven Microservices Reference',
      kind: 'Backend Architecture',
      status: 'in-progress',
      description:
        'Backend reference architecture showcasing decoupled queue processing (SQS/Kafka). Documents how systems gracefully handle downstream outages to safeguard client data with controlled degradation.',
      stack: ['Node.js', 'AWS SQS', 'Kafka', 'Docker', 'OpenTelemetry'],
    },
    {
      title: 'Observability Stack',
      kind: 'Infrastructure',
      status: 'planned',
      description:
        'Ready-to-deploy observability template with Docker Compose: OpenTelemetry, Grafana, and Prometheus configured to audit response latencies and catch production anomalies quickly.',
      stack: ['OpenTelemetry', 'Grafana', 'Prometheus', 'Loki', 'Docker Compose'],
    },
    {
      title: 'Grupo Mezzo — Landing',
      kind: 'Client Project / Angular',
      status: 'live',
      description:
        'Corporate website for an industrial and logistics firm. Built with Angular 18, standalone components, accessible styling, and search engine optimization (SEO).',
      stack: ['Angular 18', 'TypeScript', 'SCSS', 'GitHub Pages'],
    },
  ] as readonly ProjectItem[],

  tech: [
    { label: 'Backend & APIs', items: ['.NET Core / .NET6', 'C#', 'Node.js', 'TypeScript', 'ASP.NET Core', 'REST APIs'] },
    { label: 'Cloud & DevOps', items: ['AWS (ECS, Lambda, DynamoDB, SQS, SNS)', 'Kafka', 'Docker', 'Rancher', 'CI/CD'] },
    { label: 'AI & Agentic Workflows', items: ['Google Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx', 'Prompt Engineering', 'AI-Assisted Dev'] },
    { label: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'ElasticSearch'] },
    { label: 'Observability', items: ['Dynatrace', 'Grafana', 'Kibana'] },
    { label: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Blazor', 'Tailwind CSS'] },
    { label: 'Architecture', items: ['Clean Architecture', 'SOLID', 'Event-Driven', 'Microservices', 'CQRS'] },
    { label: 'Testing & Quality', items: ['Jest', 'Karma', 'SonarQube', 'ESLint'] },
  ] as readonly TechCategory[],

  principles: [
    {
      title: 'Simplicity before overengineering',
      body: 'The best architecture is the simplest one that solves the business challenge without introducing technical debt. I avoid complex tools unless real business scale requires them.',
    },
    {
      title: 'Assume things will eventually fail',
      body: 'In production, networks fluctuate, databases experience latency spikes, and external APIs time out. We design with safe retries, isolation, and clear logs to recover quickly and protect data.',
    },
    {
      title: 'Code is written for humans',
      body: 'Software will be read and maintained by other developers. I prioritize readability, tests, and clean architecture over clever tricks that only the author understands.',
    },
    {
      title: 'Observability to eliminate guesswork',
      body: 'Structured logs and clear telemetry from day one. When an incident occurs, the team should diagnose the exact root cause in minutes, not days.',
    },
    {
      title: 'Careful, progressive migrations',
      body: 'Major architectural changes are carried out step by step, continuously validating data integrity so end users keep working without interruption.',
    },
  ] as readonly ArchPrinciple[],

  warStories: [
    {
      id: 'comex-spike',
      title: 'Foreign Trade Peak Spikes: Orderly Handling with Queues & Retries',
      category: 'Fintech / Event-Driven',
      challenge: 'Month-end trade settlement deadlines caused concurrent traffic spikes and connection timeouts across synchronous endpoints.',
      diagnosis: 'Dynatrace traces showed blocking database queries starving the available connection pool.',
      solution: 'Decoupled heavy processing using SQS/Kafka queues with asynchronous workers and idempotent retry semantics.',
      impact: '65% reduction in p99 latency, stabilized database connection pools, and ensured predictable transaction completions for banking users.',
      tags: ['Kafka', 'AWS SQS', '.NET 6', 'Dynatrace', 'Event-Driven'],
    },
    {
      id: 'kafka-desync',
      title: 'Monitoring and Recovery of Consumer Lag in Financial Events',
      category: 'Observability & SRE',
      challenge: 'During nightly batch processing, progressive consumer lag delays were observed on financial event topics.',
      diagnosis: 'Grafana & Kibana dashboards alerted the team that malformed payloads were taking excessively long to process.',
      solution: 'Isolated anomalous messages into a Dead Letter Queue (DLQ) for separate inspection and scaled ECS worker tasks.',
      impact: 'Event backlog returned to baseline within minutes without user disruption, and isolated messages were safely re-ingested.',
      tags: ['Grafana', 'Kibana', 'Kafka', 'AWS ECS', 'Resilience'],
    },
    {
      id: 'zero-downtime-migration',
      title: 'Institutional Platform Modernization with Operational Continuity',
      category: 'Modernization & Legacy',
      challenge: 'Comprehensive migration of a public sector records management system toward modern .NET 6 microservices.',
      diagnosis: 'Deep legacy database dependencies combined with a strict requirement to keep citizen services active.',
      solution: 'Continuous dual-synchronization strategy and phased modular deployment with background data integrity validation.',
      impact: 'Smooth transition for over 1,500 daily concurrent administrative users with zero downtime.',
      tags: ['.NET 6', 'C#', 'SQL Server', 'Migration', 'Automation'],
    },
  ] as readonly WarStory[],

  credentials: [
    { label: 'Bachelor in Computer Science', org: 'Universidad Nacional del Oeste', period: '2020 — Present' },
    { label: 'Front End Development', org: 'CoderHouse', period: '2022' },
    { label: 'Red Hat Partner Program — Tier Premier', org: 'Red Hat', period: 'Certified / Active' },
  ] as readonly Credential[],

  ui: {
    nav: {
      letter: 'About Me',
      services: 'Solutions',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      architecture: 'Architecture',
      warStories: 'Case Studies',
      contact: 'Contact',
    },
    hero: {
      badge: 'Ezequiel Gonzalez · Software Engineer',
      title1: 'Backend & Cloud',
      title2: 'Built with Common Sense.',
      subtitle:
        'I build solid APIs and backend services with .NET, Node.js, and AWS. I help companies solve real architecture bottlenecks, integrate external services, and launch products with clean, reliable code.',
      ctaExperience: "What's your challenge? Let's talk",
      ctaCv: 'Download Resume',
      copyEmail: 'Copy Email',
      emailCopied: 'Email copied!',
      metrics: [
        { value: '4+', label: 'years building production software' },
        { value: 'Pragmatic', label: 'simple solutions before overengineering' },
        { value: 'Resilient', label: 'systems built to tolerate failures' },
        { value: 'Transparent', label: 'honest communication at every step' },
      ],
    },
    letter: {
      eyebrow: 'About Me · Product Mindset & Ownership',
      heading: 'Making things happen: spotting improvements, taking ownership, and building products users love',
      p1: 'I view software engineering as the vehicle for building extraordinary products. I do not see backend systems as disconnected tables or endpoints, but as the silent engine that makes users and customers fall in love with the product: instantaneous response times, unwavering stability, and flows that just work.',
      p2: 'I have a proactive, curious mindset with a hunger to achieve great things: I constantly spot opportunities for improvement in code, architecture, and developer workflows before they turn into bottlenecks. I work with growing autonomy to unblock complex technical challenges and thrive on scaling my impact in high-demand environments.',
      p3: 'I pursue technical excellence because writing clean, tested, and modular code is the essential foundation for moving business needles in a measurable, sustainable way.',
      metricsTitle: 'Quantifiable technical milestones in production:',
      metrics: [
        {
          metric: '-65% p99 Latency',
          label: 'Fintech Optimization',
          context: 'Asynchronous re-architecture with Kafka & SQS sustaining peak banking demand (IBM / Supervielle).',
        },
        {
          metric: '100% Continuity',
          label: 'Institutional Migration',
          context: 'Full platform transition for 1,500+ daily concurrent users with zero downtime (Public Sector).',
        },
        {
          metric: '0 Manual Errors',
          label: 'Backend Automation',
          context: 'Decoupled services and automated regulatory validations for the Central Bank of Argentina (BCRA).',
        },
        {
          metric: 'Full Ownership',
          label: 'End-to-End Maker',
          context: 'Personal projects (career-os), early adoption of agentic AI (Antigravity, Claude Code), and on-time delivery.',
        },
      ],
      commitmentsTitle: 'How I work and the value I bring to your team:',
      commitments: [
        {
          index: 1,
          title: 'End-to-end ownership',
          body: 'I own tasks from requirements clarification to production deployment. I ask what is necessary to unblock quickly, collaborate with the team, and deliver complete solutions on time.',
        },
        {
          index: 2,
          title: 'Maker mindset & continuous curiosity',
          body: 'I do not wait passively for instructions: I build personal projects, explore modern architectures, and leverage cutting-edge AI engineering tools to accelerate delivery with judgment.',
        },
        {
          index: 3,
          title: 'Proactive detection of improvements',
          body: 'I look at products through the eyes of an owner: finding database bottlenecks, proposing UX-enhancing backend optimizations, and turning complex problems into clean, robust flows.',
        },
        {
          index: 4,
          title: 'Excellence that moves business needles',
          body: 'Clean code, SOLID principles, and comprehensive tests are not ivory-tower theory: they are the guarantee that the product can evolve fast without breaking at every release.',
        },
      ],
      closing: 'Ready to join ambitious engineering teams, tackle high-demand technical challenges, and deliver tangible value from day one.',
      signatureName: 'Ezequiel Gonzalez',
      signatureRole: 'Full Stack & Cloud Developer · Product & Backend Engineering',
    },
    services: {
      eyebrow: 'Technical Solutions',
      heading: "What's your current challenge? Let's solve it together",
      subheading: 'I do not sell tech trends. I propose concrete engineering solutions to the bottlenecks that hinder your business or product.',
      items: [
        {
          tag: 'Performance & Scale',
          problem: 'My backend is slow or crashes under traffic surges',
          solution: 'I audit bottlenecks, optimize database queries, decouple heavy tasks with message queues (AWS SQS, Kafka), and implement caching so your platform stays responsive without losing transactions.',
          stack: ['.NET Core', 'Node.js', 'AWS SQS / Kafka', 'Redis', 'PostgreSQL / SQL Server'],
        },
        {
          tag: 'New Products / APIs',
          problem: 'I need to build a new API or backend for my product',
          solution: 'I design and build robust REST APIs from scratch: secure auth (JWT/OAuth), clean architecture, rigorous validation, automated testing, and auto-generated Swagger documentation.',
          stack: ['C# / .NET 6+', 'TypeScript', 'Node.js', 'Docker', 'Swagger'],
        },
        {
          tag: 'Modernization',
          problem: 'We have a legacy system and are hesitant to modify it',
          solution: 'I modernize legacy codebases step by step: refactoring mission-critical components with Clean Architecture and migrating to current frameworks without downtime for your users.',
          stack: ['.NET Modernization', 'Blazor', 'TypeScript', 'Decoupled Microservices'],
        },
        {
          tag: 'Mission-Critical Integrations',
          problem: 'I need to integrate payment gateways, banks, or third-party APIs',
          solution: 'I build reliable integrations with webhooks, automatic reconciliation, defensive error handling, and idempotent retries to ensure transactions never get lost.',
          stack: ['Banking APIs', 'Stripe / MercadoPago', 'Webhooks', 'API Connect'],
        },
        {
          tag: 'AI-Assisted Delivery',
          problem: 'I want to accelerate development velocity without sacrificing quality',
          solution: 'I leverage AI engineering agents (Claude Code, Antigravity, Codex) to prototype, code, and test faster, backed by careful code review and testing.',
          stack: ['Google Antigravity', 'Claude Code', 'ChatGPT Codex', 'IBM watsonx'],
        },
      ],
    },
    architecture: {
      eyebrow: 'Architecture & Resilience',
      heading: 'How we design for failure tolerance',
      subheading: 'Hardware can fail and networks drop packets. See how we architect asynchronous pipelines so your business operations continue and data remains protected.',
      flowTitle: 'Production Resilience Simulator',
      flowSub: 'Simulate a temporary database outage: operations are not dropped, but held securely in queues with controlled exponential backoff until services recover.',
    },
    warStories: {
      eyebrow: 'Production Engineering',
      heading: 'Case Studies & Real Challenges',
      subheading: 'Practical bottlenecks resolved across banking and public sector systems: how we diagnosed root causes and implemented team solutions.',
      challengeLabel: 'Challenge',
      diagnosisLabel: 'Diagnosis',
      solutionLabel: 'Solution',
      impactLabel: 'Outcome',
    },
    projects: {
      eyebrow: 'Projects',
      heading: 'Visible Work',
      subheading: 'Open-source and reference systems where I apply the same principles of clean code, test automation, and pragmatic engineering.',
      liveBtn: 'Visit Site',
      repoBtn: 'View Repository',
    },
    stack: {
      eyebrow: 'Stack & Tools',
      heading: 'Technologies I rely on in production',
      subheading: 'Tools, platforms, and languages I use on a daily basis to solve business problems.',
    },
    contact: {
      eyebrow: 'Contact',
      heading: "What's your current challenge? Let's talk.",
      body: 'Whether you need to resolve a technical bottleneck, build a new API from scratch, or bring a dedicated engineer to your team, let’s have a straightforward conversation. Send me an email and I’ll reply today.',
      sendEmail: 'Send me an email',
      copyEmailBtn: 'Copy Email',
      credentialsTitle: 'Education & Credentials',
    },
    commandPalette: {
      placeholder: 'Type a command or section (e.g. about me, solutions, experience, cv)...',
      navigationGroup: 'Navigation',
      actionsGroup: 'Quick Actions',
      copyEmailSuccess: 'Email copied to clipboard!',
      switchTheme: 'Toggle theme (Sky Blue & Night / Light)',
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
