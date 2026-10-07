import React, { useState } from 'react';
import { Building2, ChevronRight, Building, Layers } from 'lucide-react';
import { PORTFOLIO_TOWERS_SUMMARY, PORTFOLIO_AUGUST_METADATA } from '../../portfolioAugustData';

export const PortfolioTowersSection: React.FC = () => {
  const [activeTowerId, setActiveTowerId] = useState<string>('t4'); // Default to Torre 4 which has highest concentration

  const activeTower = PORTFOLIO_TOWERS_SUMMARY.find(t => t.id === activeTowerId) || PORTFOLIO_TOWERS_SUMMARY[0];

  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
          13
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
            Distribución Territorial
          </span>
          <h3 className="text-2xl font-black text-gray-900">
            13. Detalle por torre y bloque
          </h3>
        </div>
      </div>

      {/* Summary Matrix Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm mb-8 overflow-hidden">
        <h4 className="text-base font-black text-gray-900 mb-4 flex items-center gap-2">
          <Layers size={18} className="text-indigo-600" />
          <span>Consolidado General por Torre / Bloque</span>
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-gray-50/80 text-gray-600 uppercase text-xs font-bold border-b border-gray-100">
                <th className="py-3 px-4">Torre / Bloque</th>
                <th className="py-3 px-4 text-center">Unidades</th>
                <th className="py-3 px-4 text-right">Saldo Cartera</th>
                <th className="py-3 px-4 text-right">% Cartera</th>
                <th className="py-3 px-4 text-right">Saldo Promedio</th>
                <th className="py-3 px-4 text-center">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {PORTFOLIO_TOWERS_SUMMARY.map((tower) => (
                <tr 
                  key={tower.id} 
                  className={`hover:bg-indigo-50/40 transition-colors ${activeTowerId === tower.id ? 'bg-indigo-50/60 font-semibold' : ''}`}
                >
                  <td className="py-3.5 px-4 font-bold text-gray-900 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                    {tower.name}
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-gray-800">
                    {tower.unitsCount}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono font-black text-indigo-950">
                    ${tower.totalBalance}
                  </td>
                  <td className="py-3.5 px-4 text-right font-bold text-indigo-700">
                    {tower.share}
                  </td>
                  <td className="py-3.5 px-4 text-right font-mono text-gray-700">
                    ${tower.averageBalance}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => setActiveTowerId(tower.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition ${
                        activeTowerId === tower.id 
                          ? 'bg-indigo-600 text-white shadow-sm' 
                          : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-800'
                      }`}
                    >
                      {activeTowerId === tower.id ? 'Viendo' : 'Ver detalle'}
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="bg-indigo-50 font-black text-indigo-950 border-t-2 border-indigo-200">
                <td className="py-4 px-4 font-bold uppercase text-xs tracking-wider">
                  TOTAL COP-PROPIEDAD
                </td>
                <td className="py-4 px-4 text-center font-mono text-base">
                  {PORTFOLIO_AUGUST_METADATA.totalUnits}
                </td>
                <td className="py-4 px-4 text-right font-mono text-base">
                  ${PORTFOLIO_AUGUST_METADATA.totalPortfolioFormatted}
                </td>
                <td className="py-4 px-4 text-right text-base">
                  100,00 %
                </td>
                <td className="py-4 px-4 text-right font-mono text-base">
                  ${PORTFOLIO_AUGUST_METADATA.averageBalance}
                </td>
                <td className="py-4 px-4 text-center text-xs text-indigo-600">
                  7 bloques
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Tower Specific Breakdown */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Building size={16} />
              <span>Desglose Específico</span>
            </div>
            <h4 className="text-xl font-black text-gray-900">
              {activeTower.name} — {activeTower.unitsCount} unidades · Saldo ${activeTower.totalBalance} ({activeTower.share})
            </h4>
          </div>

          {/* Tower Selector Pills */}
          <div className="flex flex-wrap gap-1.5">
            {PORTFOLIO_TOWERS_SUMMARY.map(t => (
              <button
                key={t.id}
                onClick={() => setActiveTowerId(t.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                  activeTowerId === t.id 
                    ? 'bg-indigo-600 text-white shadow' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Table for Active Tower */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/80 text-gray-600 uppercase font-extrabold border-b border-gray-200">
                <th className="py-3 px-3">Inmueble</th>
                <th className="py-3 px-4 min-w-[200px]">Copropietario</th>
                <th className="py-3 px-3 text-right">ADMON</th>
                <th className="py-3 px-3 text-right">INTERES</th>
                <th className="py-3 px-3 text-right">OTROS</th>
                <th className="py-3 px-3 text-right">GARAJ</th>
                <th className="py-3 px-3 text-right">SANCION</th>
                <th className="py-3 px-3 text-right">EXTRA 1</th>
                <th className="py-3 px-3 text-right">EXTRA 2</th>
                <th className="py-3 px-4 text-right font-black text-indigo-950 bg-indigo-50/40">TOTAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {activeTower.debtors.map((debtor) => (
                <tr key={debtor.unit} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-900 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
                      {debtor.unit}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-medium text-gray-900 truncate max-w-xs" title={debtor.name}>
                    {debtor.name}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.admon > 0 ? debtor.admonFormatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.interest > 0 ? debtor.interestFormatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.others > 0 ? debtor.othersFormatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.garaj > 0 ? debtor.garajFormatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.sanction > 0 ? debtor.sanctionFormatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.extra1 > 0 ? debtor.extra1Formatted : '0'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.extra2 > 0 ? debtor.extra2Formatted : '0'}
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-black text-indigo-950 bg-indigo-50/20 whitespace-nowrap">
                    ${debtor.totalFormatted}
                  </td>
                </tr>
              ))}

              {/* Exact Subtotal Row from Prompt */}
              <tr className="bg-indigo-50/80 font-black text-indigo-950 border-t-2 border-indigo-200">
                <td className="py-3 px-3 uppercase text-xs" colSpan={2}>
                  Subtotal {activeTower.name} ({activeTower.unitsCount} unidades)
                </td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.admon}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.interest}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.others}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.garaj}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.sanction}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.extra1}</td>
                <td className="py-3 px-3 text-right font-mono whitespace-nowrap">${activeTower.subtotal.extra2}</td>
                <td className="py-3 px-4 text-right font-mono text-sm bg-indigo-100/70 whitespace-nowrap">${activeTower.subtotal.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTowersSection;
