import React from 'react';
import { FileText, Briefcase, DollarSign, Wrench, Users, Camera, CheckCircle } from 'lucide-react';

// Using placeholders or existing logic. In a real scenario, we would change the URLs to Índigo logos.
export const LOGO_MAIN = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_logo.png";
export const LOGO_ICON = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/PH/indigo/indigo_icono.png";
export const LOGO_HGV = "https://storage.googleapis.com/ai-studio-bucket-212404626118-us-west1/WEBS/zafiro/logo_hgv.png";

export const NAV_ITEMS = [
  { id: 'intro', label: 'Inicio', subtitle: 'General' },
  { id: 'admin', label: 'Emergencia Sísmica', subtitle: 'Gestión & Sismo' },
  { id: 'ops', label: 'Actividades', subtitle: '13 Labores' },
  { id: 'pagos', label: 'Pagos Proveedores', subtitle: '28 Registros' },
  { id: 'correspondencia', label: 'Correspondencia', subtitle: 'Cruce Pagos' },
  { id: 'cartera', label: 'Cartera', subtitle: 'Estado & Serie' },
  { id: 'conclusiones', label: 'Conclusiones', subtitle: 'Datos Clave' },
  { id: 'evidence', label: 'Evidencias', subtitle: 'Registro fotográfico' },
];

// ==========================================
// 1 & 2. GESTIÓN DEL PERÍODO Y ATENCIÓN SÍSMICA (AGOSTO 2026)
// ==========================================
export const SEISMIC_CONTEXT = {
  title: "Contexto del mes — Evento sísmico del 10 de agosto",
  intro: "El mes de agosto de 2026 representó uno de los mayores desafíos en la historia reciente del Conjunto Residencial Índigo, debido al evento sísmico ocurrido el 10 de agosto. A pesar de la complejidad de la situación, la Administración mantuvo una presencia permanente, actuando de manera inmediata, responsable y comprometida con la seguridad y el bienestar de toda la comunidad.",
  ordinaryManagement: "Como parte de la gestión ordinaria, se realizaron oportunamente los mantenimientos preventivos programados, el pago de las obligaciones fijas del conjunto y la supervisión de los diferentes contratos de prestación de servicios. Sin embargo, gran parte de los esfuerzos administrativos estuvieron enfocados en la atención de la emergencia, la coordinación interinstitucional y la implementación de medidas para la protección de los residentes."
};

export const SEISMIC_EMERGENCY_RESPONSE = {
  immediateResponse: {
    time: "7:45 a. m. — 10 de agosto",
    title: "2.1 Respuesta inmediata",
    presence: "Desde las 7:45 a. m. del 10 de agosto, la Administración hizo presencia inmediata en el conjunto residencial, liderando las labores de evacuación y atención inicial de la emergencia.",
    accompaniment: "Con el apoyo del personal de seguridad y aseo, se brindó acompañamiento a los residentes, especialmente a personas con movilidad reducida, adultos mayores y familias que requerían asistencia para evacuar sus unidades privadas de manera segura."
  },
  insurancePolicy: {
    date: "10 de agosto (Mismo día)",
    title: "2.2 Activación de la póliza multirriesgo",
    desc: "De manera paralela, se activó el proceso de reclamación ante la póliza multirriesgo el mismo día del evento, iniciando las gestiones correspondientes para la atención del siniestro y el acompañamiento a la comunidad durante todo el proceso de inspección y evaluación técnica."
  },
  coordination: {
    title: "2.3 Coordinación interinstitucional",
    desc: "Durante las semanas posteriores, la Administración mantuvo comunicación permanente con entidades públicas, organismos de gestión del riesgo, aseguradora, profesionales técnicos y residentes, liderando la coordinación de visitas, censos, inspecciones y medidas preventivas orientadas a preservar la vida e integridad de las personas."
  }
};

export const INTERINSTITUTIONAL_ACTORS = [
  { 
    actor: "Organismos de Gestión del Riesgo", 
    role: "Tres visitas de inspección coordinadas y acompañadas",
    badge: "3 Visitas Técnicas",
    color: "bg-red-50 text-red-700 border-red-200"
  },
  { 
    actor: "Alcaldía de Cali", 
    role: "Jornadas de caracterización y censo en el conjunto a residentes afectados",
    badge: "3 Jornadas Censo",
    color: "bg-amber-50 text-amber-800 border-amber-200"
  },
  { 
    actor: "Aseguradora (Póliza Multirriesgo)", 
    role: "Reclamación de la póliza multirriesgo activada el mismo 10 de agosto de 2026",
    badge: "Reclamación Activa",
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  { 
    actor: "Profesionales técnicos", 
    role: "Inspecciones estructurales, del estanque de la piscina y del acelerógrafo",
    badge: "Dictamen Estructural",
    color: "bg-purple-50 text-purple-700 border-purple-200"
  },
  { 
    actor: "Contratistas especializados", 
    role: "Cuatro cotizaciones de alpinismo y demolición controlada de fachada",
    badge: "4 Cotizaciones",
    color: "bg-orange-50 text-orange-800 border-orange-200"
  },
  { 
    actor: "Residentes y Propietarios", 
    role: "Evacuación segura, acompañamiento, censo comunitario y reunión virtual informativa",
    badge: "Comunidad Índigo",
    color: "bg-emerald-50 text-emerald-800 border-emerald-200"
  }
];

// ==========================================
// 3. ACTIVIDADES EJECUTADAS EN EL MES (13 ACTIVIDADES)
// ==========================================
export const ACTIVITIES_BY_CATEGORY = [
  {
    id: "3.1",
    category: "3.1 Medidas de seguridad derivadas del sismo",
    icon: "ShieldAlert",
    description: "Medidas urgentes implementadas para mitigar riesgos en zonas comunes y vacíos estructurales.",
    colorTheme: {
      badgeBg: "bg-red-100",
      badgeText: "text-red-800",
      iconBg: "bg-red-50",
      iconText: "text-red-700",
      bulletBg: "bg-red-600",
      cardBorder: "border-red-200"
    },
    items: [
      {
        title: "Demarcación de seguridad en todas las torres",
        detail: "Señalización de áreas restringidas, cordones de seguridad y delimitación de zonas de riesgo."
      },
      {
        title: "Instalación de polisombra de protección",
        detail: "En los vacíos estructurales de las torres 1A y 1B, como medida preventiva ante desprendimientos."
      },
      {
        title: "Cotizaciones de alpinismo y demolición controlada",
        detail: "Cuatro cotizaciones especializadas para elementos de fachada afectados por el sismo."
      }
    ]
  },
  {
    id: "3.2",
    category: "3.2 Inspecciones y visitas técnicas",
    icon: "ClipboardCheck",
    description: "Evaluaciones técnicas y caracterización social coordinada con autoridades públicas y expertos.",
    colorTheme: {
      badgeBg: "bg-amber-100",
      badgeText: "text-amber-900",
      iconBg: "bg-amber-50",
      iconText: "text-amber-700",
      bulletBg: "bg-amber-600",
      cardBorder: "border-amber-200"
    },
    items: [
      {
        title: "Visitas de organismos de Gestión del Riesgo",
        detail: "3 visitas oficiales de inspección coordinadas y acompañadas por la Administración."
      },
      {
        title: "Jornadas de censo y caracterización",
        detail: "3 jornadas de censo a propietarios, residentes y arrendatarios afectados."
      },
      {
        title: "Inspección técnica del estanque de la piscina",
        detail: "Verificación de la estructura hidráulica y estanqueidad post-sismo."
      },
      {
        title: "Inspección y verificación del acelerógrafo",
        detail: "Revisión técnica del equipo de registro sísmico del conjunto residencial."
      }
    ]
  },
  {
    id: "3.3",
    category: "3.3 Mantenimiento correctivo y locativo",
    icon: "Wrench",
    description: "Reparaciones prioritarias de infraestructura hidráulica y accesos peatonales.",
    colorTheme: {
      badgeBg: "bg-blue-100",
      badgeText: "text-blue-900",
      iconBg: "bg-blue-50",
      iconText: "text-blue-700",
      bulletBg: "bg-blue-600",
      cardBorder: "border-blue-200"
    },
    items: [
      {
        title: "Reparación de fuga y daños en cuarto de bombas",
        detail: "Intervención técnica inmediata para asegurar el suministro de agua en el conjunto (ABACOL ASISTE)."
      },
      {
        title: "Mantenimiento y reparación de puerta peatonal de esclusa",
        detail: "Ajuste técnico y cerrajería para garantizar el control y seguridad de acceso peatonal (JED SERVICES)."
      }
    ]
  },
  {
    id: "3.4",
    category: "3.4 Aseo, salubridad y zonas comunes",
    icon: "Sparkles",
    description: "Labores de saneamiento ambiental y pedagogía para el uso correcto de áreas comunes.",
    colorTheme: {
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-900",
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-700",
      bulletBg: "bg-emerald-600",
      cardBorder: "border-emerald-200"
    },
    items: [
      {
        title: "Fumigación general de zonas comunes",
        detail: "Jornada integral de control biológico y plagas en todas las áreas de la copropiedad (ALONSO VALENCIA)."
      },
      {
        title: "Avisos informativos en ductos de basura",
        detail: "Instalación de avisos sobre normas de uso y sanciones en ductos de basura en todos los pisos y torres del conjunto."
      }
    ]
  },
  {
    id: "3.5",
    category: "3.5 Comunicación con la comunidad",
    icon: "Users",
    description: "Canales oficiales de orientación y convocatoria abierta a los copropietarios.",
    colorTheme: {
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-900",
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-700",
      bulletBg: "bg-indigo-600",
      cardBorder: "border-indigo-200"
    },
    items: [
      {
        title: "Circular informativa de ingreso y seguridad",
        detail: "Emisión de circular recordando a residentes y visitantes las normas y protocolos estrictos de acceso."
      },
      {
        title: "Reunión virtual informativa con la comunidad",
        detail: "Espacio telemático liderado por la Administración para socializar la evolución técnica y la respuesta al sismo."
      }
    ]
  }
];

// ==========================================
// PARTE III — CORRESPONDENCIA ENTRE ACTIVIDADES Y PAGOS
// ==========================================
export interface BackedActivityItem {
  activity: string;
  provider: string;
  invoice: string;
  value: number;
  valueFormatted: string;
  concept: string;
}

export const ACTIVITIES_BACKED_BY_PAYMENT: BackedActivityItem[] = [
  {
    activity: "Instalación de polisombra en torres 1A y 1B",
    provider: "ITALPLAST",
    invoice: "12559",
    value: 977001,
    valueFormatted: "977.001",
    concept: "Suministro de polisombra x 100 mts"
  },
  {
    activity: "Instalación de polisombra en torres 1A y 1B",
    provider: "OSWALDO HIDALGO",
    invoice: "144-145",
    value: 1425000,
    valueFormatted: "1.425.000",
    concept: "Instalación de polisombras y reparaciones"
  },
  {
    activity: "Demarcación de seguridad en todas las torres",
    provider: "COMERSEG",
    invoice: "33943",
    value: 3653832,
    valueFormatted: "3.653.832",
    concept: "Botas, cascos, tapabocas, gafas y guantes"
  },
  {
    activity: "Reparación de fuga y daños en el cuarto de bombas",
    provider: "ABACOL ASISTE",
    invoice: "3330-3338",
    value: 1676940,
    valueFormatted: "1.676.940",
    concept: "Reparación de fugas y daño en cuarto de bombas"
  },
  {
    activity: "Mantenimiento y reparación de la puerta peatonal de la esclusa",
    provider: "JED SERVICES",
    invoice: "4708",
    value: 117215,
    valueFormatted: "117.215",
    concept: "Servicio técnico de puertas"
  },
  {
    activity: "Fumigación general de zonas comunes",
    provider: "ALONSO VALENCIA",
    invoice: "5483",
    value: 818400,
    valueFormatted: "818.400",
    concept: "Fumigación de zonas comunes"
  },
  {
    activity: "Jornadas de censo con la Alcaldía",
    provider: "ALMUERZOS",
    invoice: "—",
    value: 140000,
    valueFormatted: "140.000",
    concept: "7 almuerzos para funcionarios de la Alcaldía"
  },
  {
    activity: "Reunión virtual informativa a la comunidad",
    provider: "MAURICIO ZARAMA",
    invoice: "—",
    value: 560500,
    valueFormatted: "560.500",
    concept: "Reunión virtual informativa"
  }
];

export const ACTIVITIES_BACKED_TOTAL = {
  value: 9368888,
  valueFormatted: "9.368.888"
};

export interface UnpaidActivityItem {
  activity: string;
  explanation: string;
}

export const ACTIVITIES_WITHOUT_AUGUST_PAYMENT: UnpaidActivityItem[] = [
  {
    activity: "Instalación de avisos de ductos de basura en todos los pisos y torres",
    explanation: "Los avisos se compraron a COPYON en julio (399.840); en agosto solo se instalaron"
  },
  {
    activity: "Cotizaciones de alpinismo y demolición controlada",
    explanation: "Son cotizaciones solicitadas, no trabajos ejecutados: no generan pago en el mes"
  },
  {
    activity: "Visitas de Gestión del Riesgo, censos e inspecciones",
    explanation: "Gestión propia de la Administración; el costo asociado son los refrigerios y almuerzos del personal de la Alcaldía"
  },
  {
    activity: "Inspección del estanque de la piscina y del acelerógrafo",
    explanation: "Sin factura asociada en el cuadro de pagos"
  },
  {
    activity: "Circular informativa de protocolos de ingreso",
    explanation: "Posiblemente cubierta por la papelería de TUS SOLUCIONES.COM"
  }
];

export const UNPAID_ACTIVITIES_NOTE = "Las explicaciones de esta tabla son hipótesis a partir del cruce de los archivos, no datos registrados. Conviene validarlas antes de publicarlas en el informe visual.";

// ==========================================
// PARTE IV — CARTERA AL 31 DE AGOSTO DE 2026
// ==========================================
export interface PortfolioHistoricalItem {
  cutoffDate: string;
  totalPortfolio: string;
  totalPortfolioNumeric: number | null;
  unitsWithBalance: string;
  unitsWithBalanceNumeric: number | null;
  averageBalance: string;
  averageBalanceNumeric: number | null;
  status: 'confirmed' | 'pending';
}

export const PORTFOLIO_HISTORICAL_SERIES: PortfolioHistoricalItem[] = [
  {
    cutoffDate: "30 de junio de 2026",
    totalPortfolio: "155.137.465",
    totalPortfolioNumeric: 155137465,
    unitsWithBalance: "64",
    unitsWithBalanceNumeric: 64,
    averageBalance: "2.424.023",
    averageBalanceNumeric: 2424023,
    status: 'confirmed'
  },
  {
    cutoffDate: "31 de julio de 2026",
    totalPortfolio: "156.616.392",
    totalPortfolioNumeric: 156616392,
    unitsWithBalance: "55",
    unitsWithBalanceNumeric: 55,
    averageBalance: "2.847.571",
    averageBalanceNumeric: 2847571,
    status: 'confirmed'
  },
  {
    cutoffDate: "31 de agosto de 2026",
    totalPortfolio: "180.280.161",
    totalPortfolioNumeric: 180280161,
    unitsWithBalance: "77",
    unitsWithBalanceNumeric: 77,
    averageBalance: "2.341.301",
    averageBalanceNumeric: 2341301,
    status: 'confirmed'
  }
];

export const PORTFOLIO_PENDING_MODULES = [
  "Identificación del reporte y fecha de corte",
  "Resumen por concepto (administración, intereses, gastos jurídicos, retroactividad, sanciones, otros cargos y cuota extra) con su participación",
  "Detalle general ordenado por saldo y concentración en los mayores deudores",
  "Detalle por torre y bloque con subtotales",
  "Comparativo con el corte de julio"
];

// ==========================================
// PARTE V — CONCLUSIONES Y OBSERVACIONES
// ==========================================
export const ADMIN_COMMITMENT_TEXT = {
  title: "10. Compromiso de la Administración",
  paragraph1: "La atención de esta emergencia requirió una dedicación permanente, jornadas extensas de trabajo y una gestión integral orientada a salvaguardar la seguridad de la comunidad. La Administración asumió un papel activo como enlace entre residentes, entidades gubernamentales, aseguradora, organismos técnicos y contratistas especializados, garantizando una respuesta oportuna frente a cada situación presentada.",
  paragraph2: "A pesar de las dificultades derivadas del evento sísmico, se mantuvo la continuidad operativa del conjunto, se atendieron los requerimientos de los residentes y se adelantaron las acciones necesarias para la recuperación y mitigación de riesgos, demostrando compromiso, liderazgo y responsabilidad en uno de los momentos más complejos que ha enfrentado la copropiedad.",
  gratitude: "La Administración agradece la comprensión, solidaridad y colaboración de todos los residentes durante este proceso, reiterando su compromiso de continuar trabajando de manera transparente y diligente en beneficio de toda la comunidad Índigo."
};

export interface DataOriginObservationItem {
  id: number;
  location: string;
  observation: string;
  severity: 'high' | 'medium' | 'info';
  category: string;
}

export const DATA_ORIGIN_OBSERVATIONS: DataOriginObservationItem[] = [
  {
    id: 1,
    location: "Cuadro de pagos, 13 de agosto",
    observation: "Un pago de 1.000.000 sin proveedor, sin concepto y sin número de causación. Está incluido en el total del mes y representa el 1,34 % del gasto. Hay que identificarlo.",
    severity: "high",
    category: "Transacción sin soporte"
  },
  {
    id: 2,
    location: "Hoja Hoja1, ESTACION PORTAL factura 118644",
    observation: "La misma factura por 50.000, con fecha 09/07/2026, ya había sido reembolsada en la caja de julio (CAJA $ 254.387). Está duplicada entre los dos meses.",
    severity: "high",
    category: "Duplicidad en caja menor"
  },
  {
    id: 3,
    location: "Reembolso de caja menor",
    observation: "Los 1.001.667 no tienen línea en el cuadro de pagos, a diferencia de julio. Falta el registro del reembolso.",
    severity: "medium",
    category: "Falta de asiento en pagos"
  },
  {
    id: 4,
    location: "HGV ADMON, factura 5462",
    observation: "El concepto dice «ADMON AGOSTO 2626». Error tipográfico evidente en el año.",
    severity: "info",
    category: "Errata tipográfica"
  },
  {
    id: 5,
    location: "SIB 70, factura 7641",
    observation: "Segundo abono sobre la misma factura de seguridad de abril: 5.922.703 en julio y 15.000.000 en agosto. Conviene reflejar el saldo pendiente.",
    severity: "medium",
    category: "Abono a factura acumulada"
  },
  {
    id: 6,
    location: "Conceptos contables",
    observation: "Erratas de digitación en conceptos registrados: POLISONBRA, HIDROLAVADPRA, ALCADIA, HODROLAVADORA, RECAMARAS.",
    severity: "info",
    category: "Ortografía y digitación"
  },
  {
    id: 7,
    location: "Proveedor «ALMUERZOS»",
    observation: "Está registrado el concepto genérico en lugar del nombre del proveedor o razón social.",
    severity: "info",
    category: "Identificación de proveedor"
  }
];

export interface KeyVisualMetricItem {
  metric: string;
  value: string;
  description?: string;
  tag: string;
}

export const KEY_VISUAL_REPORT_METRICS: KeyVisualMetricItem[] = [
  { metric: "Fecha y hora de inicio de la atención de la emergencia", value: "10 de agosto, 7:45 a. m.", tag: "Respuesta Inmediata" },
  { metric: "Día de activación de la póliza multirriesgo", value: "El mismo 10 de agosto", tag: "Aseguradora" },
  { metric: "Visitas de organismos de Gestión del Riesgo", value: "3 visitas oficiales", tag: "Inspección Técnica" },
  { metric: "Jornadas de censo realizadas", value: "3 jornadas", tag: "Comunidad y Alcaldía" },
  { metric: "Cotizaciones gestionadas para fachada", value: "4 cotizaciones", tag: "Gestión de Obras" },
  { metric: "Torres protegidas con polisombra", value: "2 torres (1A y 1B)", tag: "Seguridad Estructural" },
  { metric: "Actividades ejecutadas en el mes", value: "13 actividades", tag: "Gestión Administrativa" },
  { metric: "Total pagado a proveedores", value: "$ 74.778.132", tag: "Ejecución Financiera" },
  { metric: "Cartera total a 31 de agosto", value: "$ 180.280.161 (77 unidades)", tag: "Gestión de Cartera" },
  { metric: "Gasto atribuible a la emergencia", value: "$ 6.756.333 (9,04 %)", tag: "Atención Sismo" },
  { metric: "Proveedores distintos pagados", value: "27 proveedores", tag: "Operación del Conjunto" },
  { metric: "Reembolso de caja menor", value: "$ 1.001.667", tag: "Suministros y Apoyos" }
];

// ==========================================
// CRUCE ACTIVIDADES vs. SOPORTES FINANCIEROS
// ==========================================
export const ACTIVITY_PAYMENT_CROSS_REF = [
  {
    activity: "Elementos de protección personal (botas, cascos, tapabocas, gafas, guantes)",
    provider: "COMERSEG",
    amount: "$ 3.653.832",
    date: "15/08/2026",
    nature: "Atención Sismo"
  },
  {
    activity: "Polisombra x 100 mts para vacíos estructurales torres 1A y 1B",
    provider: "ITALPLAST",
    amount: "$ 977.001",
    date: "13/08/2026",
    nature: "Atención Sismo"
  },
  {
    activity: "Instalación polisombras torres 1A/1B y reparación cielo falso torre 3B",
    provider: "OSWALDO HIDALGO",
    amount: "$ 1.425.000",
    date: "21/08/2026",
    nature: "Atención Sismo"
  },
  {
    activity: "Alimentación funcionarios de Alcaldía durante caracterización y censo",
    provider: "ALMUERZOS + Caja Menor (RIKO POLLOEXPRES & MONACO)",
    amount: "$ 572.900",
    date: "19 y 26/08/2026",
    nature: "Atención Sismo"
  },
  {
    activity: "Reunión virtual informativa con propietarios y comunidad",
    provider: "MAURICIO ZARAMA",
    amount: "$ 560.500",
    date: "21/08/2026",
    nature: "Atención Sismo"
  },
  {
    activity: "Reparación de fugas y daño en cuarto de bombas",
    provider: "ABACOL ASISTE",
    amount: "$ 1.676.940",
    date: "21/08/2026",
    nature: "Mantenimiento Hidráulico"
  },
  {
    activity: "Servicio técnico y mantenimiento puerta peatonal de esclusa",
    provider: "JED SERVICES",
    amount: "$ 117.215",
    date: "21/08/2026",
    nature: "Mantenimiento Locativo"
  },
  {
    activity: "Fumigación integral de zonas comunes",
    provider: "ALONSO VALENCIA",
    amount: "$ 818.400",
    date: "21/08/2026",
    nature: "Salubridad y Aseo"
  },
  {
    activity: "Mantenimiento preventivo mensual de ascensores",
    provider: "SCALA",
    amount: "$ 4.467.249",
    date: "21/08/2026",
    nature: "Ascensores"
  },
  {
    activity: "Mantenimiento motobombas y planta eléctrica",
    provider: "QUAD",
    amount: "$ 581.598",
    date: "21/08/2026",
    nature: "Equipos Comunes"
  }
];

export const UNMATCHED_ACTIVITIES_NOTE = "Las cotizaciones especializadas de demolición y alpinismo, las inspecciones técnicas de la piscina y el acelerógrafo, y las visitas de los organismos de Gestión del Riesgo correspondieron a coordinaciones institucionales y valoraciones técnicas preliminares sin egreso contable en agosto.";

export const FINANCIAL_KEY_METRICS = [
  { label: "Total Pagado a Proveedores", value: "$ 74.778.132", highlight: true },
  { label: "Atención Emergencia Sísmica", value: "$ 6.756.333 (9,04 %)", highlight: true },
  { label: "Reembolso de Caja Menor", value: "$ 1.001.667", highlight: false },
  { label: "Forma de Pago Transferencias", value: "28 Registros (100 %)", highlight: false }
];

export const INTRO_TEXT = `El mes de agosto de 2026 representó uno de los mayores desafíos en la historia reciente del Conjunto Residencial Índigo, debido al evento sísmico ocurrido el 10 de agosto. A pesar de la complejidad de la situación, la Administración mantuvo una presencia permanente desde las 7:45 a.m., actuando con responsabilidad, prontitud y compromiso con la seguridad de la comunidad.`;

export const OBLIGATIONS_DESCRIPTION = `Se cumplieron oportunamente las obligaciones de mantenimiento preventivo, contratos fijos y servicios esenciales, concentrando paralelamente la máxima prioridad en la atención de la emergencia sísmica, la activación de la póliza multirriesgo y la coordinación con las autoridades de Gestión del Riesgo y la Alcaldía de Cali.`;

export const OBLIGATIONS_FOLLOWUP = `Durante las semanas posteriores al sismo, la Administración mantuvo comunicación permanente con entidades públicas, aseguradora, profesionales técnicos y residentes, coordinando visitas, censos, inspecciones y medidas preventivas para salvaguardar la vida e integridad de los copropietarios.`;

export const OBLIGATIONS_ITEMS = [
  { 
    title: "Respuesta Inmediata a la Emergencia", 
    desc: "Presencia desde las 7:45 a.m. del 10 de agosto liderando evacuación y acompañamiento prioritario a personas vulnerables y familias.",
    icon: "ShieldAlert"
  },
  { 
    title: "Activación Inmediata de Póliza Multirriesgo", 
    desc: "Reclamación radicada el mismo 10 de agosto para iniciar el proceso técnico de inspección, siniestro y amparo a la copropiedad.",
    icon: "ShieldCheck"
  },
  { 
    title: "Coordinación Interinstitucional Permanente", 
    desc: "3 visitas de Gestión del Riesgo, 3 jornadas de censo con Alcaldía y asesoría de ingenieros estructurales especializados.",
    icon: "Building2"
  }
];

export const ADMIN_ITEMS = [
  "Presencia inmediata y permanente desde las 7:45 a.m. del 10 de agosto para liderar la respuesta a la emergencia sísmica.",
  "Activación el mismo día del evento del proceso de reclamación ante la póliza multirriesgo de la copropiedad.",
  "Acompañamiento constante y evacuación segura con foco en adultos mayores y personas con movilidad reducida.",
  "Coordinación de 3 visitas de inspección técnica con organismos de Gestión del Riesgo y 3 censos con la Alcaldía.",
  "Cumplimiento oportuno de pagos fijos, seguridad privada, aseo y mantenimientos preventivos del conjunto."
];

export const CONTRACT_ITEMS = [
  { 
    title: "Póliza Multirriesgo y Gestión del Riesgo", 
    desc: "Activación inmediata del siniestro con la aseguradora y acompañamiento técnico a visitas oficiales de Gestión del Riesgo." 
  },
  {
    title: "Obligaciones Fijas y Servicios Esenciales",
    desc: "Garantía de continuidad operativa en vigilancia armada, aseo integral, ascensores y bombeo de agua potable."
  }
];

// ==========================================
// RE-EXPORTAR DATOS DE PAGOS AGOSTO 2026
// ==========================================
export { 
  PAYMENTS_METADATA,
  PAYMENTS_AUGUST_LIST,
  PAYMENTS_JULY_LIST,
  PAYMENTS_BY_DATE,
  PAYMENTS_BY_PROVIDER,
  MULTI_PAYMENT_PROVIDERS,
  EXPENSE_NATURE_CATEGORIES,
  SEISMIC_EMERGENCY_EXPENSES,
  SEISMIC_EMERGENCY_TOTAL,
  PETTY_CASH_AUGUST_ITEMS,
  PETTY_CASH_AUGUST_TOTAL,
  PETTY_CASH_RECONCILIATION,
  PETTY_CASH_SHEETS,
  PETTY_CASH_746700_EXCLUDED_INVOICE,
  PETTY_CASH_746700_ACTUAL_CONTENT,
  PETTY_CASH_EMPTY_SHEET,
  DATA_QUALITY_OBSERVATIONS
} from './paymentsAugustData';

export const JULY_PAYMENTS_TOTAL = {
  count: 28,
  amount: "$ 74.778.132",
  amountNumeric: 74778132
};

// ==========================================
// GARANTÍAS Y CONVIVENCIA (AGOSTO 2026)
// ==========================================
export const WARRANTIES_WORKS = [
  {
    issue: "Vacíos estructurales torres 1A y 1B post-sismo",
    counterpart: "OSWALDO HIDALGO / ITALPLAST",
    status: "Polisombra instalada preventivamente",
    statusType: "completed" as const
  },
  {
    issue: "Fachada y elementos con riesgo de desprendimiento",
    counterpart: "Contratistas especializados",
    status: "4 cotizaciones de demolición controlada y alpinismo en evaluación",
    statusType: "in_progress" as const
  },
  {
    issue: "Estanque de piscina y acelerógrafo del conjunto",
    counterpart: "Profesionales técnicos",
    status: "Inspecciones técnicas de estanqueidad y funcionamiento ejecutadas",
    statusType: "completed" as const
  }
];

export const SANCTIONS_PECUNIARY: any[] = [];
export const WARNING_NOTICES: any[] = [];

export const FINANCIAL_ANNEXES = [
  {
    number: "Anexo 1",
    title: "Programación de Pagos — Agosto 2026",
    content: "Consolidación de 28 giros bancarios por $ 74.778.132 ejecutados en agosto de 2026.",
    sourceFile: "PROGRAMACION_PAGOS_AGOSTO_2026.xlsx"
  },
  {
    number: "Anexo 2",
    title: "Gasto de Atención de Emergencia Sísmica",
    content: "Detalle de los $ 6.756.333 invertidos en EPP, polisombra, censos de la Alcaldía y reunión virtual.",
    sourceFile: "Hoja de causaciones y programación de pagos"
  },
  {
    number: "Anexo 3",
    title: "Reembolso de Caja Menor (Hoja1)",
    content: "Legalización de 5 facturas de suministros y apoyos por $ 1.001.667.",
    sourceFile: "Hoja1 CAJA/REEMBOLSO AGOSTO 2026"
  }
];

export const PREVENTIVE_EQUIPOS = [
  "Mantenimiento preventivo mensual de 4 ascensores por SCALA ($ 4.467.249).",
  "Mantenimiento preventivo de motobombas y planta eléctrica por QUAD ($ 581.598).",
  "Inspección técnica y verificación del acelerógrafo del conjunto residencial.",
  "Mantenimiento mensual del sistema de cerca eléctrica por FERMAS ($ 319.200)."
];

export const PREVENTIVE_ASEO_AGUA = [
  "Jornada de fumigación general de zonas comunes por ALONSO VALENCIA ($ 818.400).",
  "Suministro de insumos químicos para piscina por CLAROX ($ 489.590).",
  "Análisis físico-químico y microbiológico de agua por AGUAQUIM ($ 66.754).",
  "Inspección técnica de estanqueidad en el estanque de la piscina post-sismo."
];

export const PREVENTIVE_NORMATIVA = [
  "Seguimiento técnico a SG-SST, Plan de Gestión de Residuos SGIRS y Habeas Data por FABIAN SENDOYA ($ 216.000).",
  "Gestión documental y empastado de libros contables oficiales por JOSE LUIS CHARRIA ($ 162.000).",
  "Emisión de circular informativa recordando normas y protocolos de ingreso seguro a la copropiedad.",
  "Instalación de avisos pedagógicos sobre uso correcto y sanciones en ductos de basura en todos los pisos y torres."
];

export const CORRECTIVE_HIDROSANITARIA = [
  "Reparación técnica de fuga y daños identificados en el cuarto de bombas por ABACOL ASISTE ($ 1.676.940).",
  "Destaponamiento de recámaras externas de aguas residuales en torre 2A por JHON BOLAÑOS ($ 1.255.500)."
];

export const CORRECTIVE_ELECTRICOS = [
  "Ajuste y mantenimiento correctivo de la puerta peatonal de la esclusa por JED SERVICES ($ 117.215).",
  "Revisión de conexiones de luminarias de emergencia e infraestructura eléctrica comunal."
];

export const CORRECTIVE_LOCATIVAS = [
  "Instalación de polisombra de protección en vacíos estructurales de torres 1A y 1B por OSWALDO HIDALGO e ITALPLAST ($ 2.402.001).",
  "Reparación de entrada en torre 3B y cielo falso ($ 1.425.000).",
  "Demarcación de seguridad y áreas restringidas en todas las torres del conjunto."
];

export const CHECKLIST_ITEMS = [
  "Presencia permanente de Administración desde las 7:45 a.m. del 10 de agosto.",
  "Acompañamiento a residentes vulnerables durante la evacuación.",
  "Activación de póliza multirriesgo el mismo día del evento.",
  "3 visitas técnicas de Gestión del Riesgo acompañadas.",
  "3 jornadas de censo de afectados con funcionarios de la Alcaldía.",
  "Instalación de polisombra preventiva en torres 1A y 1B.",
  "Cuatro cotizaciones de alpinismo y demolición controlada de fachada.",
  "Reparación de fuga en cuarto de bombas y esclusa peatonal.",
  "Fumigación general e instalación de avisos en ductos de basura."
];

export const COEXISTENCE_ITEMS = [
  "Atención y orientación a familias afectadas por el sismo.",
  "Realización de reunión virtual informativa con copropietarios.",
  "Instalación de señalética de normas y sanciones en ductos de basuras en todas las torres.",
  "Circular preventiva sobre protocolos de ingreso y seguridad vecinal."
];

export const CONCLUSIONS_TEXT = {
  paragraph1: "El mes de agosto de 2026 demostró la resiliencia y el compromiso de la Administración del Conjunto Residencial Índigo frente a la contingencia del sismo del 10 de agosto. La pronta presencia a las 7:45 a.m., el acompañamiento humano a la comunidad y la activación inmediata de la póliza multirriesgo reflejan una gestión responsable y enfocada en proteger la vida y el patrimonio de los copropietarios.",
  paragraph2: "A la par con la emergencia sísmica (que representó el 9,04 % del gasto mensual), se mantuvieron al día las obligaciones operativas, los mantenimientos preventivos de ascensores y motobombas, y se ejecutaron reparaciones críticas en el cuarto de bombas y la esclusa.",
  paragraph3: "La Administración de Marcela González continuará el seguimiento riguroso a la reclamación del siniestro, la revisión de cotizaciones para las intervenciones de fachada y el trabajo coordinado con la Alcaldía y los organismos de Gestión del Riesgo."
};

export const ADMINISTRATION_SIGNATURE = {
  name: "MARCELA GONZÁLEZ",
  title: "Administradora",
  property: "Conjunto Residencial Índigo P.H."
};

export const CONCLUSIONS = [
  {
    title: "1. Atención Inmediata de la Emergencia Sísmica",
    highlight: "Presencia a las 7:45 a.m. y evacuación",
    desc: "Liderazgo en terreno desde los primeros minutos del evento del 10 de agosto, priorizando la asistencia a adultos mayores y personas con movilidad reducida."
  },
  {
    title: "2. Activación Oportuna de la Póliza Multirriesgo",
    highlight: "Reclamación radicada el mismo día",
    desc: "Apertura del siniestro ante la aseguradora el 10 de agosto para asegurar la cobertura técnica y financiera sobre las afectaciones."
  },
  {
    title: "3. Articulación con Autoridades y Comunidad",
    highlight: "Gestión del Riesgo y Alcaldía de Cali",
    desc: "Coordinación de 3 visitas técnicas de Gestión del Riesgo, 3 jornadas de censo de residentes afectados y reunión virtual comunitaria."
  },
  {
    title: "4. Medidas de Seguridad Física y Estructural",
    highlight: "Polisombras y demarcación preventiva",
    desc: "Protección de vacíos estructurales en torres 1A y 1B, demarcación de zonas de riesgo y cotizaciones especializadas de demolición controlada."
  },
  {
    title: "5. Mantenimientos y Continuidad de Servicios",
    highlight: "Cuarto de bombas, ascensores y esclusa",
    desc: "Reparación oportuna de fuga en cuarto de bombas, mantenimiento preventivo de ascensores y planta, y fumigación general de áreas comunes."
  },
  {
    title: "6. Ejecución Financiera y Transparencia",
    highlight: "$ 74.778.132 en 28 transferencias",
    desc: "Cumplimiento puntual del 100% de los pagos por transferencias bancarias y auditoría rigurosa de los recursos invertidos en la emergencia."
  }
];


export const SECURITY_BOND = [
  { detail: "FACT 67 – Compra NVR 32 CH H.265 Decodificación 2CH@4K U 8CH", value: "71.823.224" },
  { detail: "FACT 77 – Instalación y configuración de cámaras", value: "429.419" },
  { detail: "FACT 90 – Compra de curva, tubos, caja, 305 cables", value: "1.236.500" },
  { detail: "FACT 90 – Compra de curva, tubos, caja, 305 cables", value: "773.500" },
  { detail: "FACT 90 – Mano de obra curva, tubos, caja, 305 cables", value: "146.965" },
  { detail: "FACT 90 – Mano de obra curva, tubos, caja, 305 cables", value: "234.935" },
];

export const ORDER_ACCOUNTS = [
  { detail: "Motobomba, válvula cheque, cortina – compra", value: "4.326.600" },
  { detail: "Fact 1059 – Cerramiento de 1.50 m", value: "32.091.477" },
  { detail: "Cta 10923 – Compra de aire", value: "2.513.500" },
  { detail: "Fact 2300 – Tanque de presión, compra", value: "4.379.500" },
  { detail: "Hidrolavadora eléctrica Marza K5 Black", value: "1.999.900" },
];

export const BUDGET_EXECUTION = [
  { concept: "Cuotas de administración", budget: "1.293.239.473", accumulated: "310.996.836", toExecute: "982.242.637" },
  { concept: "Fondo de imprevistos", budget: "13.063.032", accumulated: "3.265.758", toExecute: "9.797.274" },
  { concept: "Descuentos pronto pago", budget: "(71.498.676)", accumulated: "(20.889.141)", toExecute: "(50.609.535)" },
  { concept: "Intereses de mora", budget: "4.800.000", accumulated: "3.229.610", toExecute: "1.570.390" },
  { concept: "Rendimientos financieros", budget: "600.000", accumulated: "662.876", toExecute: "(62.876)" },
  { concept: "Recaudo salón social Zona BBQ", budget: "960.000", accumulated: "400.000", toExecute: "560.000" },
  { concept: "Multas", budget: "4.737.204", accumulated: "13.448.300", toExecute: "(8.711.096)" },
  { concept: "TOTAL INGRESO COMÚN PONDERADO", isTotal: true, budget: "1.245.901.032", accumulated: "311.339.927", toExecute: "934.561.106" },
  { concept: "TOTAL GASTO COMÚN PONDERADO", isTotal: true, budget: "1.245.901.038", accumulated: "298.435.704", toExecute: "940.085.334" },
  { concept: "Utilidad / (Pérdida)", budget: "–", accumulated: "12.904.223", toExecute: "–" },
];

export const BANK_RECONCILIATION = [
  { bank: "AV Villas — Corriente N° 146140173", extract: "48.952.512,51", books: "48.952.512,51", diff: "0,00" },
  { bank: "AV Villas — Ahorros N° 147944677", extract: "60.676.697,80", books: "60.676.697,80", diff: "0,00" },
  { bank: "AV Villas — Cuenta N° 143088060", extract: "17.634.364,33", books: "17.634.364,33", diff: "0,00" },
];

export const UNIDENTIFIED_DEPOSITS = [
  { concept: "CG x identificar ACH enero 3 2025", value: "200.000" },
  { concept: "CG x identificar ACH enero 3 2025", value: "30.000" },
  { concept: "Pago 15/11/2024 aplic apto construcción", value: "380.100" },
  { concept: "CG x identificar 2025/02/14", value: "342.000" },
  { concept: "CG x identificar 2025/02/10", value: "16.500" },
  { concept: "CG x identificar 2025/03/27", value: "329.333" },
  { concept: "CG x identificar 2025/07/04 ref 404", value: "600.000" },
  { concept: "CG x identificar 2025/07/09 ref 111", value: "142.250" },
  { concept: "CG x identificar 2025/10/17", value: "2.500.000" },
  { concept: "CG x identificar 2025/10/14", value: "15.000" },
  { concept: "CG x identificar 2025/11/06", value: "367.200" },
  { concept: "CG x identificar 2025/12/03 ref 10313839", value: "1.000.000" },
  { concept: "CG x identificar 2026/01/02 PSE", value: "771.650" },
  { concept: "CG x identificar 2026/01/21 ref 10304073", value: "349.400" },
  { concept: "CG x identificar 2026/02/05 ref 10406840", value: "880.000" },
  { concept: "CG x identificar 2026/03/05 ACH 901333426", value: "396.446" },
  { concept: "CG x identificar 2026/03/05 ACH 901333426", value: "396.446" },
  { concept: "CG x identificar 2026/03/05 ACH 9005893710", value: "218.650" },
  { concept: "CG x identificar 2026/03/09 ACH 9012509652", value: "487.080" },
];

export const VARIOUS_DEBTORS = [
  { detail: "Constructora Meléndez (reclamación con factura seguridad Occidente englobado ante Crear Hábitat)", mar: "12.027.267", feb: "12.027.267" },
  { detail: "Administraciones Humberto Gomez", mar: "55.618", feb: "–" },
  { detail: "Doris Irlanda Ceballos", mar: "100.000", feb: "100.000" },
  { detail: "Aqua Tech SAS", mar: "24.523.740", feb: "24.523.740" },
];

// Multiple charts data
export const ENERGY_DATA = [
  { month: "Mar-2026", value: 9100 },
  { month: "Feb-2026", value: 11800 },
  { month: "Ene-2026", value: 10600 },
  { month: "Dic-2025", value: 10800 },
  { month: "Nov-2025", value: 10200 },
  { month: "Oct-2025", value: 9400 },
];

export const WATER_DATA = [
  { month: "Mar-2026", value: 251 },
  { month: "Feb-2026", value: 302 },
  { month: "Ene-2026", value: 363 },
  { month: "Dic-2025", value: 219 },
  { month: "Nov-2025", value: 463 },
  { month: "Oct-2025", value: 370 },
];

export const SEWER_DATA = [
  { month: "Mar-2026", value: 251 },
  { month: "Feb-2026", value: 302 },
  { month: "Ene-2026", value: 363 },
  { month: "Dic-2025", value: 219 },
  { month: "Nov-2025", value: 463 },
  { month: "Oct-2025", value: 370 },
];