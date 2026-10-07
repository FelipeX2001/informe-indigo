import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ArrowUpDown, 
  Filter, 
  Users, 
  AlertTriangle, 
  ShieldAlert, 
  ChevronDown, 
  Building,
  CheckCircle2,
  TrendingUp,
  Download
} from 'lucide-react';
import { 
  PORTFOLIO_AUGUST_DEBTORS, 
  PORTFOLIO_CONCENTRATION_DATA, 
  PORTFOLIO_AUGUST_METADATA,
  PortfolioDebtor 
} from '../../portfolioAugustData';

export const PortfolioDebtorsSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'balance' | 'unit' | 'name'>('balance');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');
  const [debtRange, setDebtRange] = useState<'all' | 'gt5m' | '1m-5m' | '500k-1m' | 'lt500k'>('all');
  const [towerFilter, setTowerFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredDebtors = useMemo(() => {
    return PORTFOLIO_AUGUST_DEBTORS.filter(debtor => {
      const matchesSearch = 
        debtor.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
        debtor.name.toLowerCase().includes(searchTerm.toLowerCase());

      let matchesRange = true;
      if (debtRange === 'gt5m') matchesRange = debtor.total >= 5000000;
      else if (debtRange === '1m-5m') matchesRange = debtor.total >= 1000000 && debtor.total < 5000000;
      else if (debtRange === '500k-1m') matchesRange = debtor.total >= 500000 && debtor.total < 1000000;
      else if (debtRange === 'lt500k') matchesRange = debtor.total < 500000;

      const matchesTower = towerFilter === 'all' || debtor.tower === towerFilter;

      return matchesSearch && matchesRange && matchesTower;
    }).sort((a, b) => {
      if (sortBy === 'balance') {
        return sortOrder === 'desc' ? b.total - a.total : a.total - b.total;
      }
      if (sortBy === 'unit') {
        return sortOrder === 'asc' 
          ? a.unit.localeCompare(b.unit, undefined, { numeric: true, sensitivity: 'base' })
          : b.unit.localeCompare(a.unit, undefined, { numeric: true, sensitivity: 'base' });
      }
      if (sortBy === 'name') {
        return sortOrder === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [searchTerm, sortBy, sortOrder, debtRange, towerFilter]);

  const filteredTotals = useMemo(() => {
    const sum = filteredDebtors.reduce((acc, curr) => ({
      admon: acc.admon + curr.admon,
      interest: acc.interest + curr.interest,
      others: acc.others + curr.others,
      garaj: acc.garaj + curr.garaj,
      sanction: acc.sanction + curr.sanction,
      extra1: acc.extra1 + curr.extra1,
      extra2: acc.extra2 + curr.extra2,
      total: acc.total + curr.total,
    }), { admon: 0, interest: 0, others: 0, garaj: 0, sanction: 0, extra1: 0, extra2: 0, total: 0 });

    const format = (num: number) => num.toLocaleString('es-CO');

    return {
      admon: format(sum.admon),
      interest: format(sum.interest),
      others: format(sum.others),
      garaj: format(sum.garaj),
      sanction: format(sum.sanction),
      extra1: format(sum.extra1),
      extra2: format(sum.extra2),
      total: format(sum.total),
      count: filteredDebtors.length
    };
  }, [filteredDebtors]);

  const displayedDebtors = showAll ? filteredDebtors : filteredDebtors.slice(0, 25);

  return (
    <div className="mb-14">
      {/* 12.1 CONCENTRACIÓN DE CARTERA */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
            12
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
              Auditoría y Análisis de Concentración
            </span>
            <h3 className="text-2xl font-black text-gray-900">
              12. Detalle general y concentración de la cartera
            </h3>
          </div>
        </div>

        {/* 12.1 Concentración Cards */}
        <div className="bg-gradient-to-br from-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl">
          <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldAlert size={16} className="text-rose-400" />
            <span>12.1 Concentración de la Cartera</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black text-white mb-4">
            Análisis de Criticidad y Grandes Deudores
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed max-w-4xl mb-6">
            Los cinco mayores deudores concentran casi la mitad de la cartera total (<strong className="text-amber-300">49,04 %</strong>). Los tres primeros —<span className="text-white font-mono font-bold">2-B503</span>, <span className="text-white font-mono font-bold">3-A404</span> y <span className="text-white font-mono font-bold">4-302</span>— corresponden a moras antiguas con procesos de cobro y honorarios cargados que vienen acumulándose progresivamente desde los cortes anteriores.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {PORTFOLIO_CONCENTRATION_DATA.map((item, idx) => (
              <div key={idx} className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">{item.group}</span>
                  <span className="px-2 py-0.5 rounded text-[11px] font-black bg-white/20 text-white">
                    {item.count} un.
                  </span>
                </div>
                <div className="text-2xl font-mono font-black text-white mb-1">
                  ${item.balance}
                </div>
                <div className="flex items-center justify-between text-xs text-indigo-200">
                  <span>Participación:</span>
                  <strong className="text-amber-300 text-sm">{item.share}</strong>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
                  <div className={`h-full ${item.color}`} style={{ width: item.share.replace(' %', '').replace(',', '.') + '%' }} />
                </div>
                <p className="text-[11px] text-slate-400 mt-2 font-normal">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEARCH AND FILTERS BAR */}
      <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm mb-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Buscar por inmueble (ej: 2-B503) o nombre de copropietario..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 bg-gray-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter by Tower */}
            <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-1.5 text-xs font-semibold text-gray-700">
              <Building size={14} className="text-gray-500" />
              <select 
                value={towerFilter} 
                onChange={(e) => setTowerFilter(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="all">Todas las Torres (77)</option>
                <option value="Torre 1A">Torre 1A (12)</option>
                <option value="Torre 1B">Torre 1B (7)</option>
                <option value="Torre 2A">Torre 2A (18)</option>
                <option value="Torre 2B">Torre 2B (10)</option>
                <option value="Torre 3A">Torre 3A (10)</option>
                <option value="Torre 3B">Torre 3B (7)</option>
                <option value="Torre 4">Torre 4 (13)</option>
              </select>
            </div>

            {/* Filter by Range */}
            <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-1.5 text-xs font-semibold text-gray-700">
              <Filter size={14} className="text-gray-500" />
              <select 
                value={debtRange} 
                onChange={(e: any) => setDebtRange(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="all">Todos los Rangos</option>
                <option value="gt5m">Mayor a $5M (10)</option>
                <option value="1m-5m">$1M a $5M (16)</option>
                <option value="500k-1m">$500K a $1M (11)</option>
                <option value="lt500k">Menor a $500K (40)</option>
              </select>
            </div>

            {/* Sort Order */}
            <div className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-2xl px-3 py-1.5 text-xs font-semibold text-gray-700">
              <ArrowUpDown size={14} className="text-gray-500" />
              <select 
                value={sortBy} 
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="balance">Ordenar por Saldo</option>
                <option value="unit">Ordenar por Inmueble</option>
                <option value="name">Ordenar por Nombre</option>
              </select>
              <button 
                onClick={() => setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc')}
                className="p-1 hover:bg-gray-200 rounded text-gray-600 transition"
                title="Cambiar orden ascendente/descendente"
              >
                {sortOrder === 'desc' ? '↓' : '↑'}
              </button>
            </div>
          </div>
        </div>

        {/* Counter and status */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <div>
            Mostrando <strong>{displayedDebtors.length}</strong> de <strong>{filteredDebtors.length}</strong> registros encontrados
            {filteredDebtors.length !== PORTFOLIO_AUGUST_METADATA.totalUnits && (
              <span className="text-indigo-600 font-medium ml-1">
                (filtrados del total de {PORTFOLIO_AUGUST_METADATA.totalUnits} unidades)
              </span>
            )}
          </div>
          {filteredDebtors.length > 25 && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-indigo-600 font-bold hover:underline"
            >
              {showAll ? 'Mostrar primeros 25' : `Ver las ${filteredDebtors.length} unidades`}
            </button>
          )}
        </div>
      </div>

      {/* FULL GENERAL TABLE */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-gray-50/90 text-gray-700 uppercase font-extrabold border-b border-gray-200 tracking-wider">
                <th className="py-3 px-3 text-center w-10">#</th>
                <th className="py-3 px-3 whitespace-nowrap">Inmueble</th>
                <th className="py-3 px-4 min-w-[200px]">Copropietario / Razón</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">ADMON</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">INTERES</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">OTROS</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">GARAJ</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">SANCION</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">EXTRA 1</th>
                <th className="py-3 px-3 text-right whitespace-nowrap">EXTRA 2</th>
                <th className="py-3 px-4 text-right font-black text-indigo-950 whitespace-nowrap bg-indigo-50/40">TOTAL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {displayedDebtors.map((debtor) => (
                <tr key={debtor.unit} className="hover:bg-indigo-50/40 transition-colors">
                  <td className="py-2.5 px-3 text-center font-bold text-gray-400">
                    {debtor.rank}
                  </td>
                  <td className="py-2.5 px-3 font-mono font-bold text-indigo-900 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded bg-indigo-50 border border-indigo-100">
                      {debtor.unit}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 font-medium text-gray-900 truncate max-w-xs" title={debtor.name}>
                    {debtor.name}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.admon > 0 ? debtor.admonFormatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.interest > 0 ? debtor.interestFormatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.others > 0 ? debtor.othersFormatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.garaj > 0 ? debtor.garajFormatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.sanction > 0 ? debtor.sanctionFormatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.extra1 > 0 ? debtor.extra1Formatted : '—'}
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono text-gray-700 whitespace-nowrap">
                    {debtor.extra2 > 0 ? debtor.extra2Formatted : '—'}
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono font-black text-indigo-950 bg-indigo-50/30 whitespace-nowrap">
                    ${debtor.totalFormatted}
                  </td>
                </tr>
              ))}

              {/* Subtotal of filtered results */}
              <tr className="bg-indigo-900 text-white font-black text-xs border-t-2 border-indigo-950">
                <td className="py-3.5 px-3 text-center font-bold" colSpan={3}>
                  SUBTOTAL FILTRADO ({filteredTotals.count} UNIDADES)
                </td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.admon}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.interest}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.others}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.garaj}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.sanction}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.extra1}</td>
                <td className="py-3.5 px-3 text-right font-mono whitespace-nowrap">${filteredTotals.extra2}</td>
                <td className="py-3.5 px-4 text-right font-mono text-sm bg-indigo-950 whitespace-nowrap">${filteredTotals.total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Show More / Show Less footer button */}
        {filteredDebtors.length > 25 && (
          <div className="p-4 bg-gray-50 border-t border-gray-100 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow transition"
            >
              {showAll ? 'Mostrar primeros 25 registros' : `Ver todas las ${filteredDebtors.length} unidades`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default PortfolioDebtorsSection;
