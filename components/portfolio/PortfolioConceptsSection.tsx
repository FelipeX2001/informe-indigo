import React from 'react';
import { PieChart, Info, Layers, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_CONCEPTS_SUMMARY, PORTFOLIO_AUGUST_METADATA } from '../../portfolioAugustData';

export const PortfolioConceptsSection: React.FC = () => {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
          11
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
            Estructura Contable de la Deuda
          </span>
          <h3 className="text-2xl font-black text-gray-900">
            11. Composición por concepto
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Table of Concepts */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50/80 text-gray-600 uppercase text-xs font-bold border-b border-gray-100">
                  <th className="py-3 px-4">Columna del Reporte</th>
                  <th className="py-3 px-4">Concepto Contable Oficial</th>
                  <th className="py-3 px-4 text-right">Valor Registrado</th>
                  <th className="py-3 px-4 text-right">% de la Cartera</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PORTFOLIO_CONCEPTS_SUMMARY.map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-900 text-xs">
                      <span className="px-2 py-1 bg-indigo-50 rounded-md border border-indigo-100">
                        {item.concept}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-800">
                      {item.note4Concept}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-gray-900 whitespace-nowrap">
                      ${item.valueFormatted}
                    </td>
                    <td className="py-3.5 px-4 text-right font-bold text-indigo-700">
                      {item.share}
                    </td>
                  </tr>
                ))}
                <tr className="bg-indigo-50/60 font-black text-indigo-950 border-t-2 border-indigo-200">
                  <td className="py-4 px-4 font-bold uppercase text-xs tracking-wider" colSpan={2}>
                    TOTAL CARTERA
                  </td>
                  <td className="py-4 px-4 text-right font-mono text-base whitespace-nowrap">
                    ${PORTFOLIO_AUGUST_METADATA.totalPortfolioFormatted}
                  </td>
                  <td className="py-4 px-4 text-right text-base">
                    100,00 %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note 4 Callout */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Aclaración técnica sobre columnas EXTRA:</strong> El reporte oficial de Visual Master trae dos columnas tituladas <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">EXTRA</code>. Según la <em>Nota 4 de las revelaciones contables</em>, corresponden a <strong>otros cargos</strong> y <strong>cuota extra</strong>, en ese orden exacto.
            </p>
          </div>
        </div>

        {/* Visual Progress Breakdown */}
        <div className="lg:col-span-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers size={16} />
              <span>Distribución Porcentual</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-6">
              Concentración por Concepto
            </h4>

            <div className="space-y-4">
              {PORTFOLIO_CONCEPTS_SUMMARY.map((item, idx) => {
                const percent = (item.value / PORTFOLIO_AUGUST_METADATA.totalPortfolio) * 100;
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-300 truncate">{item.concept} — {item.note4Concept}</span>
                      <span className="text-indigo-200 font-mono">{item.share}</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700/50">
                      <div 
                        className={`h-full rounded-full ${
                          item.concept === 'ADMON' ? 'bg-indigo-500' :
                          item.concept === 'INTERES' ? 'bg-rose-500' :
                          item.concept === 'SANCION' ? 'bg-amber-400' : 'bg-teal-400'
                        }`}
                        style={{ width: `${Math.max(percent, 1.5)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
            Las cuotas de administración (<span className="text-white font-bold">77,23%</span>) y los intereses moratorios (<span className="text-white font-bold">9,99%</span>) constituyen el <strong className="text-indigo-300">87,22%</strong> del valor insoluto de la copropiedad.
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioConceptsSection;
