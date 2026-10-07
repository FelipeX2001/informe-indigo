export interface PaymentRecord {
  id: number;
  provider: string;
  invoice: string;
  concept: string;
  causacion: string;
  value: number;
  valueFormatted: string;
  paymentMethod: string;
  paymentDate: string;
}

export interface PaymentDateGroup {
  date: string;
  count: number;
  totalValue: number;
  totalFormatted: string;
  share: string;
  shareNum: number;
}

export interface PaymentProviderGroup {
  provider: string;
  count: number;
  totalValue: number;
  totalFormatted: string;
  share: string;
  shareNum: number;
  color?: string;
}

export interface MultiPaymentProviderDetail {
  provider: string;
  count: number;
  totalFormatted: string;
  payments: {
    date: string;
    invoice: string;
    concept: string;
    value: string;
    valueNum: number;
  }[];
}

export interface ExpenseCategory {
  category: string;
  providers: string;
  value: string;
  valueNum: number;
  share: string;
  shareNum: number;
  description?: string;
  color?: string;
}

export interface SeismicExpenseItem {
  provider: string;
  concept: string;
  valueFormatted: string;
  valueNum: number;
  date: string;
}

export interface PettyCashAugustItem {
  id: number;
  provider: string;
  invoice: string;
  concept: string;
  valueFormatted: string;
  valueNum: number;
  paymentDate: string;
}

export const PAYMENTS_METADATA = {
  copropiedad: "Condominio Indigo",
  nit: "901.310.268-5",
  address: "Carrera 98F No. 58-66 — Cali, Colombia",
  document: "PAGOS AGOSTO 2026",
  sourceFile: "PROGRAMACION_PAGOS_AGOSTO_2026.xlsx",
  recordsCount: 28,
  totalAmountFormatted: "$ 74.778.132",
  totalAmountNumeric: 74778132,
  paymentMethod: "Transferencia en el 100 % de los registros",
  pettyCashRefundFormatted: "$ 1.001.667",
  highestPayment: "18.223.981 — HGV ASEO (Fact. 5463)",
  lowestPayment: "46.500 — TUS SOLUCIONES.COM",
  sheets: "PROGRAMACION PAGOS AGOSTO 2026 y Hoja1 CAJA/REEMBOLSO AGOSTO 2026"
};

export const PAYMENTS_AUGUST_LIST: PaymentRecord[] = [
  {
    id: 1,
    provider: "DOLLAR CITY - ESTACION DE SERVICIO",
    invoice: "",
    concept: "CINTA, BOLSAS COMBUSTIBLE HIDROLAVADPRA",
    causacion: "",
    value: 126500,
    valueFormatted: "126.500",
    paymentMethod: "TRANSFER",
    paymentDate: "05/08/2026"
  },
  {
    id: 2,
    provider: "FINESA",
    invoice: "",
    concept: "1 CUOTA ZONAS COMUNES",
    causacion: "",
    value: 5826587,
    valueFormatted: "5.826.587",
    paymentMethod: "TRANSFER",
    paymentDate: "12/08/2026"
  },
  {
    id: 3,
    provider: "(sin proveedor)",
    invoice: "",
    concept: "Giro por clasificar",
    causacion: "",
    value: 1000000,
    valueFormatted: "1.000.000",
    paymentMethod: "TRANSFER",
    paymentDate: "13/08/2026"
  },
  {
    id: 4,
    provider: "ITALPLAST",
    invoice: "12559",
    concept: "POLISONBRA X 100 MTS",
    causacion: "997",
    value: 977001,
    valueFormatted: "977.001",
    paymentMethod: "TRANSFER",
    paymentDate: "13/08/2026"
  },
  {
    id: 5,
    provider: "COMERSEG",
    invoice: "33943",
    concept: "BOTAS, CASCOS, TAPABOCAS, GAFAS,GUANTES",
    causacion: "996",
    value: 3653832,
    valueFormatted: "3.653.832",
    paymentMethod: "TRANSFER",
    paymentDate: "15/08/2026"
  },
  {
    id: 6,
    provider: "HGV ASEO",
    invoice: "5463",
    concept: "ASEO AGOSTO 2026",
    causacion: "981",
    value: 18223981,
    valueFormatted: "18.223.981",
    paymentMethod: "TRANSFER",
    paymentDate: "15/08/2026"
  },
  {
    id: 7,
    provider: "ALMUERZOS",
    invoice: "",
    concept: "7 ALMUERZOS FUNCIONARIOS ALCADIA CARACTERIZACION",
    causacion: "",
    value: 140000,
    valueFormatted: "140.000",
    paymentMethod: "TRANSFER",
    paymentDate: "19/08/2026"
  },
  {
    id: 8,
    provider: "JHON BOLAÑOS",
    invoice: "",
    concept: "DESTAPONAMIENTO RECAMARAS EXTERNAS 2A",
    causacion: "992",
    value: 1255500,
    valueFormatted: "1.255.500",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 9,
    provider: "JOSE LUIS CHARRIA",
    invoice: "1626 Y 1665",
    concept: "EMPASTADOS LIBROS CONTABLES",
    causacion: "980",
    value: 162000,
    valueFormatted: "162.000",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 10,
    provider: "HGV ADMON",
    invoice: "5462",
    concept: "ADMON AGOSTO 2626",
    causacion: "982",
    value: 6675471,
    valueFormatted: "6.675.471",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 11,
    provider: "FABIAN SENDOYA",
    invoice: "202608",
    concept: "SSGT,HABEAS,SGIRS AGOSTO 2026",
    causacion: "983",
    value: 216000,
    valueFormatted: "216.000",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 12,
    provider: "SCALA",
    invoice: "160657",
    concept: "MMTO ASCENSORES AGOSTO 2026",
    causacion: "985",
    value: 4467249,
    valueFormatted: "4.467.249",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 13,
    provider: "QUAD",
    invoice: "7712",
    concept: "MMTO MOTOBOMBAS Y PLANTA AGOSTO 2026",
    causacion: "987",
    value: 581598,
    valueFormatted: "581.598",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 14,
    provider: "CLAROX",
    invoice: "25144",
    concept: "INSUMOS PISCINA AGOSTO 2026",
    causacion: "988",
    value: 489590,
    valueFormatted: "489.590",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 15,
    provider: "ABACOL ASISTE",
    invoice: "3330-3338",
    concept: "REPARACION FUGAS Y DAÑO CUARTO BOMBAS",
    causacion: "989-990",
    value: 1676940,
    valueFormatted: "1.676.940",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 16,
    provider: "MAURICIO ZARAMA",
    invoice: "",
    concept: "REUNION VIRTUAL INFORMATIVA",
    causacion: "991",
    value: 560500,
    valueFormatted: "560.500",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 17,
    provider: "JED SERVICES",
    invoice: "4708",
    concept: "SERVICIO TECNICO PUERTAS",
    causacion: "993",
    value: 117215,
    valueFormatted: "117.215",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 18,
    provider: "JULIO GUZMAN",
    invoice: "29559",
    concept: "BOLSA Y CINTAS",
    causacion: "994",
    value: 179500,
    valueFormatted: "179.500",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 19,
    provider: "AGUAQUIM",
    invoice: "3073",
    concept: "ANALISIS AGUA AGOSTO 2026",
    causacion: "998",
    value: 66754,
    valueFormatted: "66.754",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 20,
    provider: "FERMAS",
    invoice: "2004",
    concept: "MMTO CERCA ELECTRICA",
    causacion: "999",
    value: 319200,
    valueFormatted: "319.200",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 21,
    provider: "OSWALDO HIDALGO",
    invoice: "144-145",
    concept: "INSTALACION POLISOMBRAS EL TORRE 1A Y 1B - REPARACION ENTRADA TORRE 3B, CIELO FALSO",
    causacion: "1000-1001",
    value: 1425000,
    valueFormatted: "1.425.000",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 22,
    provider: "ALONSO VALENCIA",
    invoice: "5483",
    concept: "FUMIGACION ZONAS COMUNES",
    causacion: "1002",
    value: 818400,
    valueFormatted: "818.400",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 23,
    provider: "DORIS CEBALLOS",
    invoice: "5334",
    concept: "HONORARIOS COBRANZA",
    causacion: "1003",
    value: 579157,
    valueFormatted: "579.157",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 24,
    provider: "DIAN",
    invoice: "",
    concept: "RETEFUENTE PERIODO 5",
    causacion: "",
    value: 1355000,
    valueFormatted: "1.355.000",
    paymentMethod: "TRANSFER",
    paymentDate: "21/08/2026"
  },
  {
    id: 25,
    provider: "TUS SOLUCIONES.COM",
    invoice: "201",
    concept: "RESMA, RESALTADORES, FOTOCOPIAS",
    causacion: "",
    value: 62000,
    valueFormatted: "62.000",
    paymentMethod: "TRANSFER",
    paymentDate: "25/08/2026"
  },
  {
    id: 26,
    provider: "TUS SOLUCIONES.COM",
    invoice: "201",
    concept: "FOTOCOPIAS, CINTA",
    causacion: "",
    value: 46500,
    valueFormatted: "46.500",
    paymentMethod: "TRANSFER",
    paymentDate: "28/08/2026"
  },
  {
    id: 27,
    provider: "EMCALI",
    invoice: "",
    concept: "SERVICIOS AGOSTO 2026",
    causacion: "",
    value: 8776657,
    valueFormatted: "8.776.657",
    paymentMethod: "TRANSFER",
    paymentDate: "29/08/2026"
  },
  {
    id: 28,
    provider: "SIB 70",
    invoice: "7641",
    concept: "ABONO SEGURIDAD ABRIL 2026",
    causacion: "",
    value: 15000000,
    valueFormatted: "15.000.000",
    paymentMethod: "TRANSFER",
    paymentDate: "29/08/2026"
  }
];

export const PAYMENTS_JULY_LIST = PAYMENTS_AUGUST_LIST;

export const PAYMENTS_BY_DATE: PaymentDateGroup[] = [
  {
    date: "05/08/2026",
    count: 1,
    totalValue: 126500,
    totalFormatted: "126.500",
    share: "0,17 %",
    shareNum: 0.17
  },
  {
    date: "12/08/2026",
    count: 1,
    totalValue: 5826587,
    totalFormatted: "5.826.587",
    share: "7,79 %",
    shareNum: 7.79
  },
  {
    date: "13/08/2026",
    count: 2,
    totalValue: 1977001,
    totalFormatted: "1.977.001",
    share: "2,64 %",
    shareNum: 2.64
  },
  {
    date: "15/08/2026",
    count: 2,
    totalValue: 21877813,
    totalFormatted: "21.877.813",
    share: "29,26 %",
    shareNum: 29.26
  },
  {
    date: "19/08/2026",
    count: 1,
    totalValue: 140000,
    totalFormatted: "140.000",
    share: "0,19 %",
    shareNum: 0.19
  },
  {
    date: "21/08/2026",
    count: 17,
    totalValue: 20945074,
    totalFormatted: "20.945.074",
    share: "28,01 %",
    shareNum: 28.01
  },
  {
    date: "25/08/2026",
    count: 1,
    totalValue: 62000,
    totalFormatted: "62.000",
    share: "0,08 %",
    shareNum: 0.08
  },
  {
    date: "28/08/2026",
    count: 1,
    totalValue: 46500,
    totalFormatted: "46.500",
    share: "0,06 %",
    shareNum: 0.06
  },
  {
    date: "29/08/2026",
    count: 2,
    totalValue: 23776657,
    totalFormatted: "23.776.657",
    share: "31,80 %",
    shareNum: 31.80
  }
];

export const PAYMENTS_BY_PROVIDER: PaymentProviderGroup[] = [
  {
    provider: "HGV ASEO",
    count: 1,
    totalValue: 18223981,
    totalFormatted: "18.223.981",
    share: "24,37 %",
    shareNum: 24.37,
    color: "bg-blue-600"
  },
  {
    provider: "SIB 70",
    count: 1,
    totalValue: 15000000,
    totalFormatted: "15.000.000",
    share: "20,06 %",
    shareNum: 20.06,
    color: "bg-indigo-600"
  },
  {
    provider: "EMCALI",
    count: 1,
    totalValue: 8776657,
    totalFormatted: "8.776.657",
    share: "11,74 %",
    shareNum: 11.74,
    color: "bg-cyan-600"
  },
  {
    provider: "HGV ADMON",
    count: 1,
    totalValue: 6675471,
    totalFormatted: "6.675.471",
    share: "8,93 %",
    shareNum: 8.93,
    color: "bg-sky-600"
  },
  {
    provider: "FINESA",
    count: 1,
    totalValue: 5826587,
    totalFormatted: "5.826.587",
    share: "7,79 %",
    shareNum: 7.79,
    color: "bg-emerald-600"
  },
  {
    provider: "SCALA",
    count: 1,
    totalValue: 4467249,
    totalFormatted: "4.467.249",
    share: "5,97 %",
    shareNum: 5.97,
    color: "bg-amber-600"
  },
  {
    provider: "COMERSEG",
    count: 1,
    totalValue: 3653832,
    totalFormatted: "3.653.832",
    share: "4,89 %",
    shareNum: 4.89,
    color: "bg-red-600"
  },
  {
    provider: "ABACOL ASISTE",
    count: 1,
    totalValue: 1676940,
    totalFormatted: "1.676.940",
    share: "2,24 %",
    shareNum: 2.24,
    color: "bg-teal-600"
  },
  {
    provider: "OSWALDO HIDALGO",
    count: 1,
    totalValue: 1425000,
    totalFormatted: "1.425.000",
    share: "1,91 %",
    shareNum: 1.91,
    color: "bg-orange-600"
  },
  {
    provider: "DIAN",
    count: 1,
    totalValue: 1355000,
    totalFormatted: "1.355.000",
    share: "1,81 %",
    shareNum: 1.81,
    color: "bg-purple-600"
  },
  {
    provider: "JHON BOLAÑOS",
    count: 1,
    totalValue: 1255500,
    totalFormatted: "1.255.500",
    share: "1,68 %",
    shareNum: 1.68,
    color: "bg-teal-700"
  },
  {
    provider: "(sin proveedor)",
    count: 1,
    totalValue: 1000000,
    totalFormatted: "1.000.000",
    share: "1,34 %",
    shareNum: 1.34,
    color: "bg-gray-400"
  },
  {
    provider: "ITALPLAST",
    count: 1,
    totalValue: 977001,
    totalFormatted: "977.001",
    share: "1,31 %",
    shareNum: 1.31,
    color: "bg-rose-500"
  },
  {
    provider: "ALONSO VALENCIA",
    count: 1,
    totalValue: 818400,
    totalFormatted: "818.400",
    share: "1,09 %",
    shareNum: 1.09,
    color: "bg-lime-600"
  },
  {
    provider: "QUAD",
    count: 1,
    totalValue: 581598,
    totalFormatted: "581.598",
    share: "0,78 %",
    shareNum: 0.78,
    color: "bg-cyan-700"
  },
  {
    provider: "DORIS CEBALLOS",
    count: 1,
    totalValue: 579157,
    totalFormatted: "579.157",
    share: "0,77 %",
    shareNum: 0.77,
    color: "bg-indigo-400"
  },
  {
    provider: "MAURICIO ZARAMA",
    count: 1,
    totalValue: 560500,
    totalFormatted: "560.500",
    share: "0,75 %",
    shareNum: 0.75,
    color: "bg-violet-600"
  },
  {
    provider: "CLAROX",
    count: 1,
    totalValue: 489590,
    totalFormatted: "489.590",
    share: "0,65 %",
    shareNum: 0.65,
    color: "bg-sky-500"
  },
  {
    provider: "FERMAS",
    count: 1,
    totalValue: 319200,
    totalFormatted: "319.200",
    share: "0,43 %",
    shareNum: 0.43,
    color: "bg-yellow-600"
  },
  {
    provider: "FABIAN SENDOYA",
    count: 1,
    totalValue: 216000,
    totalFormatted: "216.000",
    share: "0,29 %",
    shareNum: 0.29,
    color: "bg-pink-600"
  },
  {
    provider: "JULIO GUZMAN",
    count: 1,
    totalValue: 179500,
    totalFormatted: "179.500",
    share: "0,24 %",
    shareNum: 0.24,
    color: "bg-amber-700"
  },
  {
    provider: "JOSE LUIS CHARRIA",
    count: 1,
    totalValue: 162000,
    totalFormatted: "162.000",
    share: "0,22 %",
    shareNum: 0.22,
    color: "bg-slate-600"
  },
  {
    provider: "ALMUERZOS",
    count: 1,
    totalValue: 140000,
    totalFormatted: "140.000",
    share: "0,19 %",
    shareNum: 0.19,
    color: "bg-orange-500"
  },
  {
    provider: "DOLLAR CITY - ESTACION DE SERVICIO",
    count: 1,
    totalValue: 126500,
    totalFormatted: "126.500",
    share: "0,17 %",
    shareNum: 0.17,
    color: "bg-emerald-500"
  },
  {
    provider: "JED SERVICES",
    count: 1,
    totalValue: 117215,
    totalFormatted: "117.215",
    share: "0,16 %",
    shareNum: 0.16,
    color: "bg-stone-600"
  },
  {
    provider: "TUS SOLUCIONES.COM",
    count: 2,
    totalValue: 108500,
    totalFormatted: "108.500",
    share: "0,15 %",
    shareNum: 0.15,
    color: "bg-blue-400"
  },
  {
    provider: "AGUAQUIM",
    count: 1,
    totalValue: 66754,
    totalFormatted: "66.754",
    share: "0,09 %",
    shareNum: 0.09,
    color: "bg-cyan-500"
  }
];

export const MULTI_PAYMENT_PROVIDERS: MultiPaymentProviderDetail[] = [
  {
    provider: "TUS SOLUCIONES.COM",
    count: 2,
    totalFormatted: "108.500",
    payments: [
      { date: "25/08/2026", invoice: "201", concept: "RESMA, RESALTADORES, FOTOCOPIAS", value: "62.000", valueNum: 62000 },
      { date: "28/08/2026", invoice: "201", concept: "FOTOCOPIAS, CINTA", value: "46.500", valueNum: 46500 }
    ]
  }
];

export const EXPENSE_NATURE_CATEGORIES: ExpenseCategory[] = [
  {
    category: "Administración y aseo",
    providers: "HGV ADMON, HGV ASEO",
    value: "24.899.452",
    valueNum: 24899452,
    share: "33,30 %",
    shareNum: 33.30,
    description: "Honorarios de administración y servicio integral de aseo de zonas comunes",
    color: "bg-blue-600"
  },
  {
    category: "Seguridad y vigilancia",
    providers: "SIB 70",
    value: "15.000.000",
    valueNum: 15000000,
    share: "20,06 %",
    shareNum: 20.06,
    description: "Abono a servicio de seguridad privada contratada",
    color: "bg-indigo-600"
  },
  {
    category: "Servicios públicos",
    providers: "EMCALI",
    value: "8.776.657",
    valueNum: 8776657,
    share: "11,74 %",
    shareNum: 11.74,
    description: "Facturación de servicios públicos del conjunto residencial",
    color: "bg-cyan-600"
  },
  {
    category: "Atención de la emergencia sísmica",
    providers: "ALMUERZOS, COMERSEG, ITALPLAST, MAURICIO ZARAMA, OSWALDO HIDALGO",
    value: "6.756.333",
    valueNum: 6756333,
    share: "9,04 %",
    shareNum: 9.04,
    description: "EPP, polisombras torres 1A/1B, alimentación funcionarios Alcaldía censo, reunión virtual e instalación",
    color: "bg-rose-600"
  },
  {
    category: "Cuota de zonas comunes",
    providers: "FINESA",
    value: "5.826.587",
    valueNum: 5826587,
    share: "7,79 %",
    shareNum: 7.79,
    description: "Primera cuota de zonas comunes de la copropiedad",
    color: "bg-emerald-600"
  },
  {
    category: "Ascensores",
    providers: "SCALA",
    value: "4.467.249",
    valueNum: 4467249,
    share: "5,97 %",
    shareNum: 5.97,
    description: "Mantenimiento preventivo mensual de los ascensores",
    color: "bg-amber-600"
  },
  {
    category: "Mantenimiento hidráulico y locativo",
    providers: "ABACOL ASISTE, FERMAS, JED SERVICES, JHON BOLAÑOS, QUAD",
    value: "3.950.453",
    valueNum: 3950453,
    share: "5,28 %",
    shareNum: 5.28,
    description: "Fuga cuarto bombas, destaponamiento recámaras, motobombas, cerca eléctrica y puertas",
    color: "bg-teal-600"
  },
  {
    category: "Impuestos",
    providers: "DIAN",
    value: "1.355.000",
    valueNum: 1355000,
    share: "1,81 %",
    shareNum: 1.81,
    description: "Retención en la fuente período 5",
    color: "bg-purple-600"
  },
  {
    category: "Sin clasificar",
    providers: "(sin proveedor)",
    value: "1.000.000",
    valueNum: 1000000,
    share: "1,34 %",
    shareNum: 1.34,
    description: "Giro registrado sin proveedor en extracto/programación",
    color: "bg-gray-400"
  },
  {
    category: "Fumigación y control de plagas",
    providers: "ALONSO VALENCIA",
    value: "818.400",
    valueNum: 818400,
    share: "1,09 %",
    shareNum: 1.09,
    description: "Fumigación general de zonas comunes del conjunto",
    color: "bg-lime-600"
  },
  {
    category: "Cobranza y trámites jurídicos",
    providers: "DORIS CEBALLOS",
    value: "579.157",
    valueNum: 579157,
    share: "0,77 %",
    shareNum: 0.77,
    description: "Honorarios profesionales de cobranza",
    color: "bg-violet-600"
  },
  {
    category: "Piscina y análisis de agua",
    providers: "AGUAQUIM, CLAROX",
    value: "556.344",
    valueNum: 556344,
    share: "0,74 %",
    shareNum: 0.74,
    description: "Insumos químicos de piscina y análisis físico-químico y microbiológico de agua",
    color: "bg-sky-600"
  },
  {
    category: "Insumos de aseo, papelería y ferretería",
    providers: "DOLLAR CITY - ESTACION DE SERVICIO, JULIO GUZMAN, TUS SOLUCIONES.COM",
    value: "414.500",
    valueNum: 414500,
    share: "0,55 %",
    shareNum: 0.55,
    description: "Cinta, bolsas, combustible para hidrolavadora, resmas, resaltadores y fotocopias",
    color: "bg-amber-700"
  },
  {
    category: "SG-SST, SGIRS y Habeas Data",
    providers: "FABIAN SENDOYA",
    value: "216.000",
    valueNum: 216000,
    share: "0,29 %",
    shareNum: 0.29,
    description: "Seguimiento al sistema de seguridad y salud en el trabajo, SGIRS y Habeas Data",
    color: "bg-pink-600"
  },
  {
    category: "Gestión documental contable",
    providers: "JOSE LUIS CHARRIA",
    value: "162.000",
    valueNum: 162000,
    share: "0,22 %",
    shareNum: 0.22,
    description: "Empastados de libros contables oficiales",
    color: "bg-slate-600"
  }
];

export const SEISMIC_EMERGENCY_EXPENSES: SeismicExpenseItem[] = [
  {
    provider: "ITALPLAST",
    concept: "POLISONBRA X 100 MTS",
    valueFormatted: "977.001",
    valueNum: 977001,
    date: "13/08/2026"
  },
  {
    provider: "COMERSEG",
    concept: "BOTAS, CASCOS, TAPABOCAS, GAFAS,GUANTES",
    valueFormatted: "3.653.832",
    valueNum: 3653832,
    date: "15/08/2026"
  },
  {
    provider: "ALMUERZOS",
    concept: "7 ALMUERZOS FUNCIONARIOS ALCADIA CARACTERIZACION",
    valueFormatted: "140.000",
    valueNum: 140000,
    date: "19/08/2026"
  },
  {
    provider: "MAURICIO ZARAMA",
    concept: "REUNION VIRTUAL INFORMATIVA",
    valueFormatted: "560.500",
    valueNum: 560500,
    date: "21/08/2026"
  },
  {
    provider: "OSWALDO HIDALGO",
    concept: "INSTALACION POLISOMBRAS EL TORRE 1A Y 1B - REPARACION ENTRADA TORRE 3B, CIELO FALSO",
    valueFormatted: "1.425.000",
    valueNum: 1425000,
    date: "21/08/2026"
  }
];

export const SEISMIC_EMERGENCY_TOTAL = {
  amount: "6.756.333",
  amountNumeric: 6756333,
  share: "9,04 %",
  note: "El gasto directamente asociado a la atención del sismo asciende a $ 6.756.333, equivalente al 9,04 % del total pagado a proveedores en el mes. A esta cifra se suman los refrigerios y almuerzos del personal de la Alcaldía cubiertos por caja menor."
};

export const PETTY_CASH_AUGUST_ITEMS: PettyCashAugustItem[] = [
  {
    id: 1,
    provider: "MINIMARKET MONACO",
    invoice: "26111",
    concept: "REFRIGERIO PERSONAL ALCALDIA",
    valueFormatted: "32.900",
    valueNum: 32900,
    paymentDate: "19/08/2026"
  },
  {
    id: 2,
    provider: "EDS INGENIO",
    invoice: "459986",
    concept: "COMBUSTIBLE HIDROLAVADORA",
    valueFormatted: "107.767",
    valueNum: 107767,
    paymentDate: "06/08/2026"
  },
  {
    id: 3,
    provider: "TUBOS CRISTIAN",
    invoice: "3863",
    concept: "CINTA, PALA, TAPABOCA, GUANTES",
    valueFormatted: "411.000",
    valueNum: 411000,
    paymentDate: "13/08/2026"
  },
  {
    id: 4,
    provider: "RIKO POLLOEXPRES",
    invoice: "—",
    concept: "20 ALMUERZO ALCALDIA",
    valueFormatted: "400.000",
    valueNum: 400000,
    paymentDate: "26/08/2026"
  },
  {
    id: 5,
    provider: "ESTACION PORTAL",
    invoice: "118644",
    concept: "GASOLINA HODROLAVADORA",
    valueFormatted: "50.000",
    valueNum: 50000,
    paymentDate: "09/07/2026"
  }
];

export const PETTY_CASH_AUGUST_TOTAL = {
  amountFormatted: "1.001.667",
  amountNumeric: 1001667,
  sheetName: "CAJA/REEMBOLSO AGOSTO 2026 (Hoja1)",
  count: 5,
  note: "Este reembolso no aparece como registro de pago dentro del cuadro de transferencias bancarias a proveedores (a diferencia de meses anteriores). Los $ 1.001.667 quedan por fuera del total transferido de $ 74.778.132."
};

// Backward-compatibility exports for components
export const PETTY_CASH_RECONCILIATION = [
  {
    sheetName: "CAJA/REEMBOLSO AGOSTO 2026",
    purchasesCount: 5,
    detailSum: "1.001.667",
    detailSumNum: 1001667,
    reimbursementSec2: "Fondo de Caja Menor",
    reimbursementDate: "Agosto 2026",
    difference: "0",
    differenceNum: 0
  }
];

export const PETTY_CASH_SHEETS = [
  {
    sheetName: "CAJA/REEMBOLSO AGOSTO 2026",
    reimbursementDate: "Agosto 2026",
    reimbursementSec2Id: 0,
    totalFormatted: "1.001.667",
    totalNum: 1001667,
    items: PETTY_CASH_AUGUST_ITEMS.map(i => ({
      provider: i.provider,
      invoice: i.invoice,
      concept: i.concept,
      causacion: "—",
      value: i.valueFormatted,
      valueNum: i.valueNum,
      date: i.paymentDate
    }))
  }
];

export const PETTY_CASH_746700_EXCLUDED_INVOICE = null;
export const PETTY_CASH_746700_ACTUAL_CONTENT = null;
export const PETTY_CASH_EMPTY_SHEET = null;

export const DATA_QUALITY_OBSERVATIONS = [
  {
    location: "Giro del 13 de agosto ($ 1.000.000)",
    observation: "Registro sin nombre de proveedor ni concepto en el archivo original. Figura como transferencia bancaria ejecutada.",
    category: "Giro por Clasificar",
    severity: "En Verificación Contable"
  },
  {
    location: "Caja Menor ($ 1.001.667)",
    observation: "La hoja CAJA/REEMBOLSO AGOSTO 2026 no se encuentra liquidada como registro de pago individual dentro de la programación de transferencias del mes.",
    category: "Reembolso Desacoplado",
    severity: "Nota de Auditoría"
  },
  {
    location: "Factura Gasolina del 09/07/2026",
    observation: "La factura 118644 de ESTACION PORTAL ($ 50.000) corresponde a combustible de fecha previa (julio) legalizada en la caja de agosto.",
    category: "Legalización Temporal",
    severity: "Informativo"
  },
  {
    location: "Proveedores recurrentes",
    observation: "TUS SOLUCIONES.COM presenta 2 pagos (factura 201 por $62.000 y $46.500) por concepto de papelería e insumos para el conjunto.",
    category: "Proveedores Múltiples",
    severity: "Verificado"
  }
];
