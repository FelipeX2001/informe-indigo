import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Activity, 
  ChevronRight, 
  Users, 
  DollarSign, 
  Scale,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { 
  PORTFOLIO_CONCEPT_EVOLUTION, 
  PORTFOLIO_PERIOD_INDICATORS, 
  NEW_DEBTORS_AUGUST, 
  NEW_DEBTORS_TOTAL,
  PORTFOLIO_AUGUST_METADATA 
} from '../../portfolioAugustData';

export const PortfolioEvolutionSection: React.FC = () => {
  const [showAllNew, setShowAllNew] = useState(false);

  const displayedNewDebtors = showAllNew ? NEW_DEBTORS_AUGUST : NEW_DEBTORS_AUGUST.slice(0, 15);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
          15
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
            Tendencia Comparativa Histórica
          </span>
          <h3 className="text-2xl font-black text-gray-900">
            15. Evolución de la cartera en 2026
          </h3>
        </div>
      </div>

      {/* 15.2 Indicadores del Período (Headline Stats) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {PORTFOLIO_PERIOD_INDICATORS.map((ind, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">{ind.indicator}</span>
              <span className="px-2.5 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-100">
                {ind.change}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center pt-2 border-t border-gray-100">
              <div className="p-2 rounded-xl bg-gray-50">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">30 Jun</span>
                <span className="text-xs font-mono font-bold text-gray-700">{ind.june}</span>
              </div>
              <div className="p-2 rounded-xl bg-gray-50">
                <span className="text-[10px] uppercase font-bold text-gray-400 block">31 Jul</span>
                <span className="text-xs font-mono font-bold text-gray-700">{ind.july}</span>
              </div>
              <div className="p-2 rounded-xl bg-indigo-50/80 border border-indigo-100">
                <span className="text-[10px] uppercase font-black text-indigo-600 block">31 Ago</span>
                <span className="text-xs font-mono font-black text-indigo-950">{ind.august}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 15.1 Por Concepto Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-10 overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-base font-black text-gray-900 flex items-center gap-2">
            <Scale size={18} className="text-indigo-600" />
            <span>15.1 Evolución por Concepto Contable (Junio – Julio – Agosto)</span>
          </h4>
          <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
            Crecimiento neto jul → ago: +$ 23.663.769 (+15,11 %)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50/80 text-gray-600 uppercase text-xs font-bold border-b border-gray-100">
                <th className="py-3 px-4">Concepto</th>
                <th className="py-3 px-4">Descripción Oficial</th>
                <th className="py-3 px-4 text-right">30 Jun 2026</th>
                <th className="py-3 px-4 text-right">31 Jul 2026</th>
                <th className="py-3 px-4 text-right bg-indigo-50/40 text-indigo-950 font-black">31 Ago 2026</th>
                <th className="py-3 px-4 text-right">Var. Jul → Ago</th>
                <th className="py-3 px-4 text-right">Var. %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PORTFOLIO_CONCEPT_EVOLUTION.map((item, idx) => (
                <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-indigo-900 text-xs">
                    <span className="px-2 py-1 bg-indigo-50 rounded-md border border-indigo-100">
                      {item.concept}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-gray-800">
                    {item.noteConcept}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-gray-600 whitespace-nowrap">
                    ${item.june}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-gray-600 whitespace-nowrap">
                    ${item.july}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-bold text-indigo-950 bg-indigo-50/20 whitespace-nowrap">
                    ${item.august}
                  </td>
                  <td className={`py-3.5 px-4 text-right font-mono font-bold whitespace-nowrap ${
                    item.isPositive ? 'text-rose-600' : item.isNegative ? 'text-emerald-600' : 'text-gray-400'
                  }`}>
                    {item.variationValue !== '0' ? `$ ${item.variationValue}` : '$ 0'}
                  </td>
                  <td className={`py-3.5 px-4 text-right font-bold ${
                    item.isPositive ? 'text-rose-600' : item.isNegative ? 'text-emerald-600' : 'text-gray-400'
                  }`}>
                    {item.variationPercent}
                  </td>
                </tr>
              ))}
              <tr className="bg-indigo-50/80 font-black text-indigo-950 border-t-2 border-indigo-200">
                <td className="py-4 px-4 font-bold uppercase text-xs tracking-wider" colSpan={2}>
                  TOTAL CARTERA
                </td>
                <td className="py-4 px-4 text-right font-mono text-sm whitespace-nowrap">$155.137.465</td>
                <td className="py-4 px-4 text-right font-mono text-sm whitespace-nowrap">$156.616.392</td>
                <td className="py-4 px-4 text-right font-mono text-base text-indigo-900 bg-indigo-100/50 whitespace-nowrap">$180.280.161</td>
                <td className="py-4 px-4 text-right font-mono text-base text-rose-600 whitespace-nowrap">+$23.663.769</td>
                <td className="py-4 px-4 text-right text-base text-rose-600">+15,11 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 15.3 Unidades que entraron en mora en agosto */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-rose-600 text-xs font-bold uppercase tracking-widest mb-1">
              <AlertCircle size={16} />
              <span>Nuevos Ingresos a Cartera</span>
            </div>
            <h4 className="text-xl font-black text-gray-900">
              15.3 Unidades que entraron en mora en agosto
            </h4>
            <p className="text-gray-600 text-sm mt-1">
              <strong>33 unidades</strong> no figuraban en el corte de julio y aparecen con saldo en agosto, sumando <strong className="text-rose-700">${NEW_DEBTORS_TOTAL.balanceFormatted}</strong> (<span className="text-indigo-600 font-bold">{NEW_DEBTORS_TOTAL.share}</span> de la cartera total).
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-100 p-3.5 rounded-2xl text-rose-900 text-xs text-right">
            <span className="text-gray-500 block">Total 33 unidades nuevas</span>
            <span className="text-lg font-mono font-black text-rose-700">${NEW_DEBTORS_TOTAL.balanceFormatted}</span>
          </div>
        </div>

        {/* Technical Callout / Earthquake context */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
          <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-amber-950 mb-1">
              Hipótesis operativa y coyuntura sísmica:
            </p>
            <p>
              La mayoría de estas unidades entra con saldos cercanos a una sola cuota de administración ordinaria, lo que apunta a <em>mora reciente</em> y no a deuda acumulada. <strong>El mes en que se produce este ingreso masivo a cartera coincide exactamente con el sismo del 10 de agosto</strong>; conviene validar con la Administración si existe una relación con la atención de la emergencia antes de afirmarlo categóricamente en presentaciones ante la asamblea.
            </p>
          </div>
        </div>

        {/* Table of 33 New Debtors */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/80 text-gray-600 uppercase font-extrabold border-b border-gray-200">
                <th className="py-2.5 px-3 text-center w-10">#</th>
                <th className="py-2.5 px-3">Inmueble</th>
                <th className="py-2.5 px-4">Copropietario</th>
                <th className="py-2.5 px-4 text-right">Saldo a Agosto ($)</th>
                <th className="py-2.5 px-4 text-right">Equivalente Aproximado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedNewDebtors.map((d) => (
                <tr key={d.unit} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="py-2 px-3 text-center font-bold text-gray-400">
                    {d.rank}
                  </td>
                  <td className="py-2 px-3 font-mono font-bold text-indigo-900 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
                      {d.unit}
                    </span>
                  </td>
                  <td className="py-2 px-4 font-medium text-gray-800">
                    {d.name}
                  </td>
                  <td className="py-2 px-4 text-right font-mono font-bold text-rose-700 whitespace-nowrap">
                    ${d.balanceFormatted}
                  </td>
                  <td className="py-2 px-4 text-right text-gray-500 font-medium">
                    {d.balance >= 400000 ? '~ 1 cuota ordinaria' : 'Saldo fraccionario / ajuste'}
                  </td>
                </tr>
              ))}
              <tr className="bg-rose-50/80 font-black text-rose-950 border-t-2 border-rose-200">
                <td className="py-3 px-3 text-center font-bold" colSpan={3}>
                  TOTAL 33 UNIDADES NUEVAS INGRESADAS EN AGOSTO
                </td>
                <td className="py-3 px-4 text-right font-mono text-sm text-rose-700 whitespace-nowrap">
                  ${NEW_DEBTORS_TOTAL.balanceFormatted}
                </td>
                <td className="py-3 px-4 text-right text-xs text-rose-900">
                  {NEW_DEBTORS_TOTAL.share} de la cartera
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* View All / Less toggle */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center mt-3 rounded-2xl">
          <button
            onClick={() => setShowAllNew(!showAllNew)}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition"
          >
            {showAllNew ? 'Mostrar solo las primeras 15 unidades' : `Ver las 33 unidades completas (${NEW_DEBTORS_AUGUST.length})`}
          </button>
        </div>
      </div>
    </div>
  );
};
export default PortfolioEvolutionSection;
