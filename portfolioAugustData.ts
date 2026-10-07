export interface PortfolioConceptSummary {
  concept: string;
  note4Concept: string;
  value: number;
  valueFormatted: string;
  share: string;
}

export interface PortfolioDebtor {
  rank: number;
  unit: string;
  name: string;
  tower: string;
  admon: number;
  admonFormatted: string;
  interest: number;
  interestFormatted: string;
  others: number;
  othersFormatted: string;
  garaj: number;
  garajFormatted: string;
  sanction: number;
  sanctionFormatted: string;
  extra1: number;
  extra1Formatted: string;
  extra2: number;
  extra2Formatted: string;
  total: number;
  totalFormatted: string;
  shareOfTotal: string;
}

export interface TowerBlockSummary {
  id: string;
  name: string;
  unitsCount: number;
  totalBalanceNum: number;
  totalBalance: string;
  share: string;
  averageBalance: string;
  debtors: PortfolioDebtor[];
  subtotal: {
    admon: string;
    interest: string;
    others: string;
    garaj: string;
    sanction: string;
    extra1: string;
    extra2: string;
    total: string;
  };
}

export interface RangeDistribution {
  range: string;
  units: number;
  unitsShare: string;
  value: number;
  valueFormatted: string;
  valueShare: string;
  color: string;
}

export interface ConceptEvolution {
  concept: string;
  noteConcept: string;
  june: string;
  july: string;
  august: string;
  variationValue: string;
  variationPercent: string;
  isPositive: boolean;
  isNegative: boolean;
  isZero: boolean;
}

export interface NewDebtorAugust {
  rank: number;
  unit: string;
  name: string;
  balance: number;
  balanceFormatted: string;
}

export const PORTFOLIO_AUGUST_METADATA = {
  copropiedad: "CONJUNTO RESIDENCIAL ÍNDIGO P.H.",
  sourceFile: "CARTERA_AGOSTO_-_INDIGO.xlsx",
  cutOffDate: "31 de agosto de 2026",
  printDate: "04/09/2026",
  software: "Visual Master (Ruta 2,8)",
  totalPortfolio: 180280161,
  totalPortfolioFormatted: "180.280.161",
  totalUnits: 77,
  averageBalance: "2.341.301",
  highestDebtor: {
    unit: "2-B503",
    name: "22503 CAMILO VIVAS JUAN",
    amount: "26.682.623"
  },
  lowestDebtor: {
    unit: "1-A404",
    name: "11404 KAREN VANESSA ARISTIZABA",
    amount: "30.959"
  }
};

export const PORTFOLIO_CONCEPTS_SUMMARY: PortfolioConceptSummary[] = [
  { concept: "ADMON", note4Concept: "Cuotas de administración", value: 139222274, valueFormatted: "139.222.274", share: "77,23 %" },
  { concept: "INTERES", note4Concept: "Intereses moratorios", value: 18008468, valueFormatted: "18.008.468", share: "9,99 %" },
  { concept: "OTROS", note4Concept: "Gastos proceso jurídico y honorarios", value: 6573786, valueFormatted: "6.573.786", share: "3,65 %" },
  { concept: "SANCION", note4Concept: "Sanciones y multas", value: 11488424, valueFormatted: "11.488.424", share: "6,37 %" },
  { concept: "EXTRA 1", note4Concept: "Otros cargos (Nota 4)", value: 3176976, valueFormatted: "3.176.976", share: "1,76 %" },
  { concept: "EXTRA 2", note4Concept: "Cuota extra (Nota 4)", value: 1669009, valueFormatted: "1.669.009", share: "0,93 %" },
  { concept: "GARAJ", note4Concept: "Retroactividad garajes", value: 141224, valueFormatted: "141.224", share: "0,08 %" }
];

export const PORTFOLIO_CONCENTRATION_DATA = [
  { group: "5 mayores deudores", count: 5, balance: "88.417.409", share: "49,04 %", color: "bg-red-500", note: "Concentran casi la mitad de la cartera total" },
  { group: "Siguientes 5 mayores (Top 6 al 10)", count: 5, balance: "33.952.982", share: "18,84 %", color: "bg-amber-500", note: "Top 10 suma $ 122.370.391 (67,88 %)" },
  { group: "Resto de copropietarios (67 unidades)", count: 67, balance: "57.909.770", share: "32,12 %", color: "bg-emerald-500", note: "Saldos dispersos y moras recientes" }
];

export const PORTFOLIO_RANGE_DISTRIBUTION: RangeDistribution[] = [
  { range: "Menos de 100.000", units: 4, unitsShare: "5,19 %", value: 150723, valueFormatted: "150.723", valueShare: "0,08 %", color: "bg-emerald-400" },
  { range: "100.000 a 500.000", units: 36, unitsShare: "46,75 %", value: 14884139, valueFormatted: "14.884.139", valueShare: "8,26 %", color: "bg-sky-500" },
  { range: "500.000 a 1.000.000", units: 11, unitsShare: "14,29 %", value: 9543200, valueFormatted: "9.543.200", valueShare: "5,29 %", color: "bg-indigo-500" },
  { range: "1.000.000 a 5.000.000", units: 16, unitsShare: "20,78 %", value: 33331708, valueFormatted: "33.331.708", valueShare: "18,49 %", color: "bg-amber-500" },
  { range: "Más de 5.000.000", units: 10, unitsShare: "12,99 %", value: 122370391, valueFormatted: "122.370.391", valueShare: "67,88 %", color: "bg-red-500" }
];

export const PORTFOLIO_CONCEPT_EVOLUTION: ConceptEvolution[] = [
  { concept: "ADMON", noteConcept: "Cuotas de administración", june: "116.686.675", july: "117.621.171", august: "139.222.274", variationValue: "+21.601.103", variationPercent: "+18,36 %", isPositive: true, isNegative: false, isZero: false },
  { concept: "INTERES", noteConcept: "Intereses moratorios", june: "15.747.392", july: "16.408.713", august: "18.008.468", variationValue: "+1.599.755", variationPercent: "+9,75 %", isPositive: true, isNegative: false, isZero: false },
  { concept: "OTROS", noteConcept: "Gastos jurídicos y honorarios", june: "6.080.316", july: "6.087.889", august: "6.573.786", variationValue: "+485.897", variationPercent: "+7,98 %", isPositive: true, isNegative: false, isZero: false },
  { concept: "GARAJ", noteConcept: "Retroactividad garajes", june: "111.726", july: "126.475", august: "141.224", variationValue: "+14.749", variationPercent: "+11,66 %", isPositive: true, isNegative: false, isZero: false },
  { concept: "SANCION", noteConcept: "Sanciones y multas", june: "11.566.894", july: "11.526.159", august: "11.488.424", variationValue: "-37.735", variationPercent: "-0,33 %", isPositive: false, isNegative: true, isZero: false },
  { concept: "EXTRA 1", noteConcept: "Otros cargos", june: "3.176.976", july: "3.176.976", august: "3.176.976", variationValue: "0", variationPercent: "0,00 %", isPositive: false, isNegative: false, isZero: true },
  { concept: "EXTRA 2", noteConcept: "Cuota extra", june: "1.767.486", july: "1.669.009", august: "1.669.009", variationValue: "0", variationPercent: "0,00 %", isPositive: false, isNegative: false, isZero: true }
];

export const PORTFOLIO_PERIOD_INDICATORS = [
  { indicator: "Cartera total", june: "$ 155.137.465", july: "$ 156.616.392", august: "$ 180.280.161", change: "+$ 23.663.769 (+15,11 %)" },
  { indicator: "Unidades en mora", june: "64", july: "55", august: "77", change: "+22 unidades (+40,0 %)" },
  { indicator: "Saldo promedio por unidad", june: "$ 2.424.023", july: "$ 2.847.571", august: "$ 2.341.301", change: "-$ 506.270 (-17,78 %)" }
];

// Raw data tuples: [unit, name, tower, admon, interest, others, garaj, sanction, extra1, extra2, total]
const RAW_DEBTORS_DATA: [string, string, string, number, number, number, number, number, number, number, number][] = [
  ["2-B503", "22503 CAMILO VIVAS JUAN", "Torre 2B", 15307961, 5599549, 380000, 55110, 4085625, 1022112, 232266, 26682623],
  ["3-A404", "31404 EDUARDO CAMACHO LUIS", "Torre 3A", 16686120, 6085589, 542000, 56616, 382900, 1050060, 243596, 25046881],
  ["4-302", "STIVEN SANCHEZ ROGER", "Torre 4", 14487091, 4403310, 0, 0, 0, 1104804, 254926, 20250131],
  ["4-306", "4306 GINA MARCELA RAMIREZ /MAR", "Torre 4", 8066423, 0, 364988, 0, 139133, 0, 0, 8570544],
  ["4-601", "4601 FELIPE CASTILLO JUAN", "Torre 4", 6950336, 639308, 0, 0, 0, 0, 277586, 7867230],
  ["4-403", "JESUS GALLARDO EDWIN", "Torre 4", 5357088, 0, 1967679, 0, 0, 0, 0, 7324767],
  ["1-B603", "12603 ELIZABETH MORENO ROJAS", "Torre 1B", 5697000, 0, 150000, 0, 1171000, 0, 156449, 7174449],
  ["4-304", "4304 ALBA DOLLY OCAMPO", "Torre 4", 4635400, 78354, 1260112, 0, 738400, 0, 0, 6712266],
  ["3-A604", "31604 PATRICIA CAYOLA SANDRA", "Torre 3A", 5560083, 595117, 0, 0, 0, 0, 243596, 6398796],
  ["2-A303", "21303 CUERVO PALACIOS YAMILE", "Torre 2A", 5206173, 0, 226519, 0, 910012, 0, 0, 6342704],
  ["1-A402", "11402 ARVEY ALEJANDRO LOPEZ LA", "Torre 1A", 3110984, 173022, 415000, 0, 367100, 0, 260590, 4326696],
  ["1-B204", "12204 JOHANA DELGADO", "Torre 1B", 3661141, 0, 209794, 0, 436800, 0, 0, 4307735],
  ["4-205", "BARBOSA GONZALEZ LIGIA", "Torre 4", 1808904, 0, 200000, 0, 1457900, 0, 0, 3466804],
  ["4-405", "4405 DEL SOCORRO MARIA", "Torre 4", 1774954, 28358, 250000, 0, 0, 0, 0, 2053312],
  ["4-204", "4204 MAGALY FLOREZ BETANCOURTH", "Torre 4", 1964330, 53972, 0, 0, 0, 0, 0, 2018302],
  ["2-B203", "22203 LUISA GUTIERREZ / CARLOS", "Torre 2B", 1552000, 0, 279274, 0, 0, 0, 0, 1831274],
  ["1-A202", "11202 JHON FREDDY MONCADA", "Torre 1A", 1747200, 56584, 0, 0, 0, 0, 0, 1803784],
  ["3-A603", "31603 ERIKA TATIANA PAREDES PE", "Torre 3A", 1279000, 0, 0, 0, 470616, 0, 0, 1749616],
  ["3-A202", "31202 COLORADO GUZMAN JONATH", "Torre 3A", 920610, 10579, 0, 0, 659548, 0, 0, 1590737],
  ["2-A502", "FERNANDO PEREZ LUIS", "Torre 2A", 1414800, 30682, 126420, 0, 0, 0, 0, 1571902],
  ["2-B202", "ESCOBAR MONCADA FANNY", "Torre 2B", 1504172, 39988, 0, 0, 0, 0, 0, 1544160],
  ["3-A602", "31602 DANN REGIONAL FINANCIE", "Torre 3A", 1452564, 22221, 0, 0, 0, 0, 0, 1474785],
  ["2-A301", "21301 REYES CESAR MATTA", "Torre 2A", 1406314, 30490, 0, 0, 0, 0, 0, 1436804],
  ["2-A904", "21904 BEDOYA ATEHORTUA SANTI", "Torre 2A", 1358122, 30466, 0, 29498, 0, 0, 0, 1418086],
  ["1-A803", "11803 DAVID A RIVERA /VICTORIA", "Torre 1A", 1369200, 29693, 0, 0, 0, 0, 0, 1398893],
  ["1-B602", "12602 JUAN JOSE SANCHEZ", "Torre 1B", 1310400, 28418, 0, 0, 0, 0, 0, 1338818],
  ["2-A304", "21304 CARLOS GUTIERREZ JUAN", "Torre 2A", 998599, 0, 0, 0, 0, 0, 0, 998599],
  ["2-A1001", "VILLARRUEL TORO JULIAN", "Torre 2A", 986675, 0, 0, 0, 0, 0, 0, 986675],
  ["4-705", "4705 FANNY LUCIA CASTRO VEGA /", "Torre 4", 974600, 10662, 0, 0, 0, 0, 0, 985262],
  ["1-A403", "11403 CARLOS ANDRES FLOREZ / A", "Torre 1A", 912800, 9986, 0, 0, 0, 0, 0, 922786],
  ["1-A503", "11503 WALTER HERNEY SOLANO", "Torre 1A", 911846, 9965, 0, 0, 0, 0, 0, 921811],
  ["3-A303", "LORENA LOPEZ MARYI", "Torre 3A", 911600, 9973, 0, 0, 0, 0, 0, 921573],
  ["2-A204", "21204 CASTELLANOS DIAZ JULIO", "Torre 2A", 889524, 9901, 0, 0, 0, 0, 0, 899425],
  ["2-A603", "21603 ALBERTO RAMIREZ JULIAN", "Torre 2A", 874000, 9562, 0, 0, 0, 0, 0, 883562],
  ["4-305", "4305 MARIEN SINISTERRA DAIR", "Torre 4", 813689, 7461, 0, 0, 0, 0, 0, 821150],
  ["3-B901", "32901 GUTIERREZ BRAYAN ORTEG", "Torre 3B", 675099, 5258, 0, 0, 0, 0, 0, 680357],
  ["4-203", "4203 ESCOBAR GOMEZ CAROLINA", "Torre 4", 522000, 0, 0, 0, 0, 0, 0, 522000],
  ["3-A702", "31702 JAIRO SANDOVAL JHON", "Torre 3A", 494472, 0, 0, 0, 0, 0, 0, 494472],
  ["2-A702", "CONSTANZA MARIN ERIKA", "Torre 2A", 477900, 0, 0, 0, 0, 0, 0, 477900],
  ["4-504", "SARRIA ERAZO CAROLINA", "Torre 4", 475093, 0, 0, 0, 0, 0, 0, 475093],
  ["2-A801", "21801 HERNAN FORONDA YIMER", "Torre 2A", 471200, 0, 0, 0, 0, 0, 0, 471200],
  ["2-A901", "21901 JOSE FLOREZ ALVARO", "Torre 2A", 471200, 0, 0, 0, 0, 0, 0, 471200],
  ["2-A902", "21902 SA BANCOLOMBIA", "Torre 2A", 471200, 0, 0, 0, 0, 0, 0, 471200],
  ["2-A701", "MARIA GIRALDO LINA", "Torre 2A", 470300, 0, 0, 0, 0, 0, 0, 470300],
  ["3-B504", "32504 CAROLINA RIASCOS JULIE", "Torre 3B", 456600, 0, 0, 0, 0, 0, 0, 456600],
  ["1-A804", "11804 FRANCISCO GONZALEZ GALLE", "Torre 1A", 456400, 0, 0, 0, 0, 0, 0, 456400],
  ["3-A703", "31703 FIC SAS GRUPO", "Torre 3A", 455700, 0, 0, 0, 0, 0, 0, 455700],
  ["3-B204", "CAROLINA GARCIA JANETH", "Torre 3B", 455700, 0, 0, 0, 0, 0, 0, 455700],
  ["3-B803", "32803 MARTINEZ CIRO MORALES", "Torre 3B", 455700, 0, 0, 0, 0, 0, 0, 455700],
  ["3-B903", "32903 MARIA GIRALDO ANA", "Torre 3B", 455700, 0, 0, 0, 0, 0, 0, 455700],
  ["2-B504", "OREJUELA HOYOS CAROLIN", "Torre 2B", 450409, 0, 0, 0, 0, 0, 0, 450409],
  ["1-B203", "12203 JOSE JULIAN TOLORZA", "Torre 1B", 446500, 0, 0, 0, 0, 0, 0, 446500],
  ["1-A303", "11303 CHRISTIAN ANGULO RIVERA", "Torre 1A", 442561, 0, 0, 0, 0, 0, 0, 442561],
  ["2-A804", "21804 PEREZ CARLOS", "Torre 2A", 437100, 0, 0, 0, 0, 0, 0, 437100],
  ["2-B602", "RELIGIOSA DEL CONGREGA", "Torre 2B", 437000, 0, 0, 0, 0, 0, 0, 437000],
  ["2-B604", "22604 ANGEL ANGULO MIGUEL", "Torre 2B", 437000, 0, 0, 0, 0, 0, 0, 437000],
  ["1-A901", "11901 CAMILO ALEXANDER GONZALE", "Torre 1A", 436800, 0, 0, 0, 0, 0, 0, 436800],
  ["1-B704", "12704 WILSON JESUS CANGA NEIVA", "Torre 1B", 436800, 0, 0, 0, 0, 0, 0, 436800],
  ["2-B204", "RESURRECION MEDINA MAR", "Torre 2B", 436100, 0, 0, 0, 0, 0, 0, 436100],
  ["3-B902", "32902 OSPINA RUIZ HENRY", "Torre 3B", 435300, 0, 0, 0, 0, 0, 0, 435300],
  ["2-A403", "21403 OTERO CATANO FREDDY", "Torre 2A", 434800, 0, 0, 0, 0, 0, 0, 434800],
  ["2-A604", "21604 A FRANCO CRISTHIAN", "Torre 2A", 434800, 0, 0, 0, 0, 0, 0, 434800],
  ["1-A801", "11801 HENRY ALESANDRO RAYO", "Torre 1A", 431464, 0, 0, 0, 0, 0, 0, 431464],
  ["3-A201", "DEL PILAR MARIA", "Torre 3A", 411112, 0, 0, 0, 0, 0, 0, 411112],
  ["4-401", "4401 ANDREA GARCIA CLAUDIA", "Torre 4", 0, 0, 0, 0, 402800, 0, 0, 402800],
  ["2-B404", "CORREA CARABALI JENNIF", "Torre 2B", 398094, 0, 0, 0, 0, 0, 0, 398094],
  ["1-A501", "11501 ELIZABETH RUANO SOLANO /", "Torre 1A", 325876, 0, 0, 0, 0, 0, 0, 325876],
  ["2-A1002", "FERNANDO REYES DIEGO", "Torre 2A", 324802, 0, 0, 0, 0, 0, 0, 324802],
  ["1-A604", "11604 JANETH GARCIA", "Torre 1A", 312410, 0, 0, 0, 0, 0, 0, 312410],
  ["1-B703", "12703 DIEGO FERNANDO LOPEZ", "Torre 1B", 0, 0, 0, 0, 266590, 0, 0, 266590],
  ["3-B804", "MORENO PRADA ORLANDO", "Torre 3B", 248931, 0, 0, 0, 0, 0, 0, 248931],
  ["3-A302", "31302 A. PRADO MANUEL", "Torre 3A", 227725, 0, 0, 0, 0, 0, 0, 227725],
  ["2-A501", "21501 SEBASTIAN RIVERA JUAN", "Torre 2A", 0, 0, 202000, 0, 0, 0, 0, 202000],
  ["1-B303", "12303 FRANK ARNULFO PEÑA", "Torre 1B", 50000, 0, 0, 0, 0, 0, 0, 50000],
  ["2-B502", "DARIO ESTRADA JAVIER", "Torre 2B", 35857, 0, 0, 0, 0, 0, 0, 35857],
  ["2-B1004", "221004 OSORIO Y/O DIEGO", "Torre 2B", 33907, 0, 0, 0, 0, 0, 0, 33907],
  ["1-A404", "11404 KAREN VANESSA ARISTIZABA", "Torre 1A", 30959, 0, 0, 0, 0, 0, 0, 30959]
];

const formatCop = (num: number) => num.toLocaleString("es-CO");

export const PORTFOLIO_AUGUST_DEBTORS: PortfolioDebtor[] = RAW_DEBTORS_DATA.map((item, index) => {
  const [unit, name, tower, admon, interest, others, garaj, sanction, extra1, extra2, total] = item;
  const share = ((total / PORTFOLIO_AUGUST_METADATA.totalPortfolio) * 100).toFixed(2).replace('.', ',') + ' %';
  return {
    rank: index + 1,
    unit,
    name,
    tower,
    admon,
    admonFormatted: formatCop(admon),
    interest,
    interestFormatted: formatCop(interest),
    others,
    othersFormatted: formatCop(others),
    garaj,
    garajFormatted: formatCop(garaj),
    sanction,
    sanctionFormatted: formatCop(sanction),
    extra1,
    extra1Formatted: formatCop(extra1),
    extra2,
    extra2Formatted: formatCop(extra2),
    total,
    totalFormatted: formatCop(total),
    shareOfTotal: share
  };
});

export const PORTFOLIO_TOWERS_SUMMARY: TowerBlockSummary[] = [
  {
    id: "t1a",
    name: "Torre 1A",
    unitsCount: 12,
    totalBalanceNum: 11810440,
    totalBalance: "11.810.440",
    share: "6,55 %",
    averageBalance: "984.203",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 1A"),
    subtotal: {
      admon: "10.488.500",
      interest: "279.250",
      others: "415.000",
      garaj: "0",
      sanction: "367.100",
      extra1: "0",
      extra2: "260.590",
      total: "11.810.440"
    }
  },
  {
    id: "t1b",
    name: "Torre 1B",
    unitsCount: 7,
    totalBalanceNum: 14020892,
    totalBalance: "14.020.892",
    share: "7,78 %",
    averageBalance: "2.002.985",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 1B"),
    subtotal: {
      admon: "11.601.841",
      interest: "28.418",
      others: "359.794",
      garaj: "0",
      sanction: "1.874.390",
      extra1: "0",
      extra2: "156.449",
      total: "14.020.892"
    }
  },
  {
    id: "t2a",
    name: "Torre 2A",
    unitsCount: 18,
    totalBalanceNum: 18733059,
    totalBalance: "18.733.059",
    share: "10,39 %",
    averageBalance: "1.040.726",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 2A"),
    subtotal: {
      admon: "17.127.509",
      interest: "111.101",
      others: "554.939",
      garaj: "29.498",
      sanction: "910.012",
      extra1: "0",
      extra2: "0",
      total: "18.733.059"
    }
  },
  {
    id: "t2b",
    name: "Torre 2B",
    unitsCount: 10,
    totalBalanceNum: 32286424,
    totalBalance: "32.286.424",
    share: "17,91 %",
    averageBalance: "3.228.642",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 2B"),
    subtotal: {
      admon: "20.592.500",
      interest: "5.639.537",
      others: "659.274",
      garaj: "55.110",
      sanction: "4.085.625",
      extra1: "1.022.112",
      extra2: "232.266",
      total: "32.286.424"
    }
  },
  {
    id: "t3a",
    name: "Torre 3A",
    unitsCount: 10,
    totalBalanceNum: 38771397,
    totalBalance: "38.771.397",
    share: "21,51 %",
    averageBalance: "3.877.140",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 3A"),
    subtotal: {
      admon: "28.398.986",
      interest: "6.723.479",
      others: "542.000",
      garaj: "56.616",
      sanction: "1.513.064",
      extra1: "1.050.060",
      extra2: "487.192",
      total: "38.771.397"
    }
  },
  {
    id: "t3b",
    name: "Torre 3B",
    unitsCount: 7,
    totalBalanceNum: 3188288,
    totalBalance: "3.188.288",
    share: "1,77 %",
    averageBalance: "455.470",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 3B"),
    subtotal: {
      admon: "3.183.030",
      interest: "5.258",
      others: "0",
      garaj: "0",
      sanction: "0",
      extra1: "0",
      extra2: "0",
      total: "3.188.288"
    }
  },
  {
    id: "t4",
    name: "Torre 4",
    unitsCount: 13,
    totalBalanceNum: 61469661,
    totalBalance: "61.469.661",
    share: "34,10 %",
    averageBalance: "4.728.435",
    debtors: PORTFOLIO_AUGUST_DEBTORS.filter(d => d.tower === "Torre 4"),
    subtotal: {
      admon: "47.829.908",
      interest: "5.221.425",
      others: "4.042.779",
      garaj: "0",
      sanction: "2.738.233",
      extra1: "1.104.804",
      extra2: "532.512",
      total: "61.469.661"
    }
  }
];

export const NEW_DEBTORS_AUGUST: NewDebtorAugust[] = [
  { rank: 1, unit: "4-203", name: "4203 ESCOBAR GOMEZ CAROLINA", balance: 522000, balanceFormatted: "522.000" },
  { rank: 2, unit: "2-A702", name: "CONSTANZA MARIN ERIKA", balance: 477900, balanceFormatted: "477.900" },
  { rank: 3, unit: "4-504", name: "SARRIA ERAZO CAROLINA", balance: 475093, balanceFormatted: "475.093" },
  { rank: 4, unit: "2-A801", name: "21801 HERNAN FORONDA YIMER", balance: 471200, balanceFormatted: "471.200" },
  { rank: 5, unit: "2-A901", name: "21901 JOSE FLOREZ ALVARO", balance: 471200, balanceFormatted: "471.200" },
  { rank: 6, unit: "2-A902", name: "21902 SA BANCOLOMBIA", balance: 471200, balanceFormatted: "471.200" },
  { rank: 7, unit: "2-A701", name: "MARIA GIRALDO LINA", balance: 470300, balanceFormatted: "470.300" },
  { rank: 8, unit: "3-B504", name: "32504 CAROLINA RIASCOS JULIE", balance: 456600, balanceFormatted: "456.600" },
  { rank: 9, unit: "1-A804", name: "11804 FRANCISCO GONZALEZ GALLE", balance: 456400, balanceFormatted: "456.400" },
  { rank: 10, unit: "3-A703", name: "31703 FIC SAS GRUPO", balance: 455700, balanceFormatted: "455.700" },
  { rank: 11, unit: "3-B204", name: "CAROLINA GARCIA JANETH", balance: 455700, balanceFormatted: "455.700" },
  { rank: 12, unit: "3-B803", name: "32803 MARTINEZ CIRO MORALES", balance: 455700, balanceFormatted: "455.700" },
  { rank: 13, unit: "3-B903", name: "32903 MARIA GIRALDO ANA", balance: 455700, balanceFormatted: "455.700" },
  { rank: 14, unit: "1-B203", name: "12203 JOSE JULIAN TOLORZA", balance: 446500, balanceFormatted: "446.500" },
  { rank: 15, unit: "2-A804", name: "21804 PEREZ CARLOS", balance: 437100, balanceFormatted: "437.100" },
  { rank: 16, unit: "2-B602", name: "RELIGIOSA DEL CONGREGA", balance: 437000, balanceFormatted: "437.000" },
  { rank: 17, unit: "2-B604", name: "22604 ANGEL ANGULO MIGUEL", balance: 437000, balanceFormatted: "437.000" },
  { rank: 18, unit: "1-A901", name: "11901 CAMILO ALEXANDER GONZALE", balance: 436800, balanceFormatted: "436.800" },
  { rank: 19, unit: "1-B704", name: "12704 WILSON JESUS CANGA NEIVA", balance: 436800, balanceFormatted: "436.800" },
  { rank: 20, unit: "2-B204", name: "RESURRECION MEDINA MAR", balance: 436100, balanceFormatted: "436.100" },
  { rank: 21, unit: "3-B902", name: "32902 OSPINA RUIZ HENRY", balance: 435300, balanceFormatted: "435.300" },
  { rank: 22, unit: "2-A403", name: "21403 OTERO CATANO FREDDY", balance: 434800, balanceFormatted: "434.800" },
  { rank: 23, unit: "2-A604", name: "21604 A FRANCO CRISTHIAN", balance: 434800, balanceFormatted: "434.800" },
  { rank: 24, unit: "1-A801", name: "11801 HENRY ALESANDRO RAYO", balance: 431464, balanceFormatted: "431.464" },
  { rank: 25, unit: "2-B404", name: "CORREA CARABALI JENNIF", balance: 398094, balanceFormatted: "398.094" },
  { rank: 26, unit: "2-A1002", name: "FERNANDO REYES DIEGO", balance: 324802, balanceFormatted: "324.802" },
  { rank: 27, unit: "1-A604", name: "11604 JANETH GARCIA", balance: 312410, balanceFormatted: "312.410" },
  { rank: 28, unit: "3-B804", name: "MORENO PRADA ORLANDO", balance: 248931, balanceFormatted: "248.931" },
  { rank: 29, unit: "3-A302", name: "31302 A. PRADO MANUEL", balance: 227725, balanceFormatted: "227.725" },
  { rank: 30, unit: "1-B303", name: "12303 FRANK ARNULFO PEÑA", balance: 50000, balanceFormatted: "50.000" },
  { rank: 31, unit: "2-B502", name: "DARIO ESTRADA JAVIER", balance: 35857, balanceFormatted: "35.857" },
  { rank: 32, unit: "2-B1004", name: "221004 OSORIO Y/O DIEGO", balance: 33907, balanceFormatted: "33.907" },
  { rank: 33, unit: "1-A404", name: "11404 KAREN VANESSA ARISTIZABA", balance: 30959, balanceFormatted: "30.959" }
];

export const NEW_DEBTORS_TOTAL = {
  count: 33,
  balance: 12561042,
  balanceFormatted: "12.561.042",
  share: "6,97 %"
};
