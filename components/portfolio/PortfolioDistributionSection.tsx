import React from 'react';
import { BarChart3, PieChart, Layers, DollarSign } from 'lucide-react';
import { PORTFOLIO_RANGE_DISTRIBUTION, PORTFOLIO_AUGUST_METADATA } from '../../portfolioAugustData';

export const PortfolioDistributionSection: React.FC = () => {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
          14
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
            Estratificación de la Mora
          </span>
          <h3 className="text-2xl font-black text-gray-900">
            14. Distribución de saldos por rango
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Table of Ranges */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50/80 text-gray-600 uppercase text-xs font-bold border-b border-gray-100">
                  <th className="py-3 px-4">Rango de Saldo</th>
                  <th className="py-3 px-4 text-center">Unidades</th>
                  <th className="py-3 px-4 text-center">% Unidades</th>
                  <th className="py-3 px-4 text-right">Valor Total ($)</th>
                  <th className="py-3 px-4 text-right">% Cartera</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {PORTFOLIO_RANGE_DISTRIBUTION.map((r, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-gray-900 flex items-center gap-2">
                      <span className={`w-3 h-3 rounded-full ${r.color}`} />
                      {r.range}
                    </td>
                    <td className="py-3.5 px-4 text-center font-mono font-bold text-gray-800">
                      {r.units}
                    </td>
                    <td className="py-3.5 px-4 text-center text-gray-600">
                      {r.unitsShare}
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-gray-900 whitespace-nowrap">
                      ${r.valueFormatted}
                    </td>
                    <td className="py-3.5 px-4 text-right font-black text-indigo-900">
                      {r.valueShare}
                    </td>
                  </tr>
                ))}
                <tr className="bg-indigo-50/70 font-black text-indigo-950 border-t-2 border-indigo-200">
                  <td className="py-4 px-4 font-bold uppercase text-xs tracking-wider">
                    TOTAL CARTERA
                  </td>
                  <td className="py-4 px-4 text-center font-mono text-base">
                    {PORTFOLIO_AUGUST_METADATA.totalUnits}
                  </td>
                  <td className="py-4 px-4 text-center text-base">
                    100,00 %
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
        </div>

        {/* Visual Stack Analysis Card */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block mb-1">
              Visualización de Impacto
            </span>
            <h4 className="text-lg font-black text-gray-900 mb-6">
              Concentración vs. Dispersión
            </h4>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                  <span>Más de $5.000.000 (10 unidades)</span>
                  <span className="text-red-600 font-mono">67,88 % del valor</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: '67.88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                  <span>$1M a $5M (16 unidades)</span>
                  <span className="text-amber-600 font-mono">18,49 % del valor</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '18.49%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                  <span>$100K a $500K (36 unidades)</span>
                  <span className="text-sky-600 font-mono">8,26 % del valor</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-sky-500 h-full rounded-full" style={{ width: '8.26%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                  <span>$500K a $1M (11 unidades)</span>
                  <span className="text-indigo-600 font-mono">5,29 % del valor</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full" style={{ width: '5.29%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                  <span>Menos de $100K (4 unidades)</span>
                  <span className="text-emerald-600 font-mono">0,08 % del valor</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-400 h-full rounded-full" style={{ width: '1%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-900 leading-relaxed">
            <strong>Hallazgo analítico:</strong> El <span className="font-bold">46,75%</span> de los deudores (36 copropietarios) deben entre $100K y $500K (una cuota ordinaria aproximada), lo que representa apenas el <span className="font-bold">8,26%</span> del dinero insoluto. En contraste, solo 10 unidades acumulan el <span className="font-bold text-red-700">67,88%</span> de la cartera total.
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioDistributionSection;
