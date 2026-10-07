import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  CreditCard, 
  FileSpreadsheet, 
  Search, 
  Filter, 
  ArrowUpDown, 
  TrendingUp, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ChevronDown,
  ChevronUp,
  Receipt,
  FileText,
  ShieldCheck,
  ShieldAlert,
  Wallet,
  AlertTriangle,
  FileQuestion,
  Sparkles,
  PieChart,
  Calendar,
  Utensils
} from 'lucide-react';
import { 
  PAYMENTS_METADATA, 
  PAYMENTS_AUGUST_LIST, 
  PAYMENTS_BY_DATE, 
  PAYMENTS_BY_PROVIDER, 
  MULTI_PAYMENT_PROVIDERS, 
  EXPENSE_NATURE_CATEGORIES,
  SEISMIC_EMERGENCY_EXPENSES,
  SEISMIC_EMERGENCY_TOTAL,
  PETTY_CASH_AUGUST_ITEMS,
  PETTY_CASH_AUGUST_TOTAL,
  DATA_QUALITY_OBSERVATIONS,
  PaymentRecord
} from '../paymentsAugustData';

const PaymentsTableSection: React.FC = () => {
  // Filters & State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>('all');
  const [selectedProviderFilter, setSelectedProviderFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'id' | 'value' | 'date' | 'provider'>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [expenseSearch, setExpenseSearch] = useState<string>('');

  // Filtered and Sorted payment records
  const filteredPayments = useMemo(() => {
    return PAYMENTS_AUGUST_LIST.filter((payment) => {
      const matchesSearch = 
        payment.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.causacion.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDate = selectedDateFilter === 'all' || payment.paymentDate === selectedDateFilter;
      const matchesProvider = selectedProviderFilter === 'all' || payment.provider === selectedProviderFilter;

      return matchesSearch && matchesDate && matchesProvider;
    }).sort((a, b) => {
      if (sortBy === 'id') {
        return sortOrder === 'asc' ? a.id - b.id : b.id - a.id;
      }
      if (sortBy === 'value') {
        return sortOrder === 'asc' ? a.value - b.value : b.value - a.value;
      }
      if (sortBy === 'provider') {
        return sortOrder === 'asc' 
          ? a.provider.localeCompare(b.provider) 
          : b.provider.localeCompare(a.provider);
      }
      if (sortBy === 'date') {
        return sortOrder === 'asc' 
          ? a.paymentDate.localeCompare(b.paymentDate) 
          : b.paymentDate.localeCompare(a.paymentDate);
      }
      return 0;
    });
  }, [searchTerm, selectedDateFilter, selectedProviderFilter, sortBy, sortOrder]);

  const filteredTotalValue = useMemo(() => {
    return filteredPayments.reduce((acc, p) => acc + p.value, 0);
  }, [filteredPayments]);

  const handleSort = (type: 'id' | 'value' | 'date' | 'provider') => {
    if (sortBy === type) {
      setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(type);
      setSortOrder(type === 'value' ? 'desc' : 'asc');
    }
  };

  // Filtered expense categories
  const filteredExpenses = useMemo(() => {
    if (!expenseSearch.trim()) return EXPENSE_NATURE_CATEGORIES;
    return EXPENSE_NATURE_CATEGORIES.filter(cat => 
      cat.category.toLowerCase().includes(expenseSearch.toLowerCase()) ||
      cat.providers.toLowerCase().includes(expenseSearch.toLowerCase()) ||
      (cat.description && cat.description.toLowerCase().includes(expenseSearch.toLowerCase()))
    );
  }, [expenseSearch]);

  const totalExpenseFiltered = useMemo(() => {
    return filteredExpenses.reduce((acc, c) => acc + c.valueNum, 0);
  }, [filteredExpenses]);

  return (
    <section id="pagos" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Receipt size={14} className="text-indigo-600" />
            <span>Parte II — Ejecución de Pagos · Agosto de 2026</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight flex items-center justify-center gap-3 flex-wrap">
            <span className="text-indigo-main">Programación de Pagos</span> — Agosto de 2026
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 mt-3 max-w-3xl mx-auto font-medium">
            Registro oficial, análisis por naturaleza del gasto, emergencia sísmica y caja menor de <span className="font-bold text-gray-900">{PAYMENTS_METADATA.copropiedad}</span>.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
            <FileSpreadsheet size={15} className="text-amber-700 shrink-0" />
            <span>Fuente oficial: libro contable <strong className="font-mono">{PAYMENTS_METADATA.sourceFile}</strong> · Cifras en COP ($)</span>
          </div>
        </div>

        {/* 4. Resumen de la Ejecución (Ficha Técnica) */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-main rounded-2xl border border-indigo-100">
                <Building2 size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Ficha Técnica & Resumen</span>
                <h3 className="text-2xl font-black text-gray-900">4. Resumen de la Ejecución</h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200 flex items-center gap-1.5 shadow-sm">
                <CheckCircle2 size={14} className="text-emerald-600" />
                100% Transferencias Bancarias
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100">
              <p className="text-xs text-indigo-700 font-semibold uppercase tracking-wider">Copropiedad / NIT</p>
              <p className="text-base font-black text-gray-900 mt-1">{PAYMENTS_METADATA.copropiedad}</p>
              <p className="text-xs font-mono font-bold text-indigo-900 mt-0.5">NIT: {PAYMENTS_METADATA.nit}</p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200">
              <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">Total Pagado a Proveedores</p>
              <p className="text-xl md:text-2xl font-black text-amber-950 font-mono mt-1">{PAYMENTS_METADATA.totalAmountFormatted}</p>
              <p className="text-xs text-amber-700 mt-0.5 font-medium">{PAYMENTS_METADATA.recordsCount} registros de pago</p>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200">
              <p className="text-xs text-rose-800 font-semibold uppercase tracking-wider">Atención Emergencia Sísmica</p>
              <p className="text-xl font-black text-rose-950 font-mono mt-1">$ {SEISMIC_EMERGENCY_TOTAL.amount}</p>
              <p className="text-xs text-rose-700 mt-0.5 font-medium">{SEISMIC_EMERGENCY_TOTAL.share} del gasto mensual</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200">
              <p className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Reembolso Caja Menor</p>
              <p className="text-xl font-black text-emerald-950 font-mono mt-1">{PAYMENTS_METADATA.pettyCashRefundFormatted}</p>
              <p className="text-xs text-emerald-700 mt-0.5 font-medium">5 facturas (Hoja1 del libro)</p>
            </div>
          </div>

          {/* Rango de pagos y notas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
              <div>
                <span className="text-gray-500 font-medium">Pago Individual Mayor:</span>
                <p className="font-bold text-gray-900 mt-0.5">{PAYMENTS_METADATA.highestPayment}</p>
              </div>
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 font-bold rounded-lg text-[10px]">Top 1</span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
              <div>
                <span className="text-gray-500 font-medium">Pago Individual Menor:</span>
                <p className="font-bold text-gray-900 mt-0.5">{PAYMENTS_METADATA.lowestPayment}</p>
              </div>
              <span className="px-2.5 py-1 bg-gray-200 text-gray-700 font-bold rounded-lg text-[10px]">Base</span>
            </div>
          </div>
        </div>

        {/* 5. Detalle de pagos — orden cronológico */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-main rounded-2xl border border-indigo-100">
                <CreditCard size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Registro Cronológico</span>
                <h3 className="text-2xl font-black text-gray-900">
                  5. Detalle de pagos ({PAYMENTS_METADATA.recordsCount} Registros)
                </h3>
              </div>
            </div>

            {/* Total Badge */}
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-indigo-50 rounded-2xl border border-indigo-100 text-right">
                <p className="text-[10px] text-gray-500 font-semibold uppercase">Total Filtrado ({filteredPayments.length} giros)</p>
                <p className="text-sm font-mono font-black text-indigo-950">
                  $ {filteredTotalValue.toLocaleString('es-CO')}
                </p>
              </div>
            </div>
          </div>

          {/* Search and Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Buscar proveedor, concepto o factura..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>

            {/* Date Filter */}
            <div>
              <select
                value={selectedDateFilter}
                onChange={(e) => setSelectedDateFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
              >
                <option value="all">Todas las fechas ({PAYMENTS_BY_DATE.length} fechas)</option>
                {PAYMENTS_BY_DATE.map((d) => (
                  <option key={d.date} value={d.date}>
                    {d.date} ({d.count} giros · $ {d.totalFormatted})
                  </option>
                ))}
              </select>
            </div>

            {/* Provider Filter */}
            <div>
              <select
                value={selectedProviderFilter}
                onChange={(e) => setSelectedProviderFilter(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-700 focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
              >
                <option value="all">Todos los proveedores ({PAYMENTS_BY_PROVIDER.length})</option>
                {PAYMENTS_BY_PROVIDER.map((p) => (
                  <option key={p.provider} value={p.provider}>
                    {p.provider} ({p.count} pago{p.count > 1 ? 's' : ''})
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters */}
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDateFilter('all');
                  setSelectedProviderFilter('all');
                  setSortBy('id');
                  setSortOrder('asc');
                }}
                className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Filter size={14} />
                Limpiar filtros
              </button>
            </div>
          </div>

          {/* Payments Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-100/80 text-gray-600 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th onClick={() => handleSort('id')} className="px-3.5 py-3 cursor-pointer hover:text-indigo-600">
                    <div className="flex items-center gap-1">
                      <span>#</span>
                      <ArrowUpDown size={12} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('date')} className="px-3.5 py-3 cursor-pointer hover:text-indigo-600 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span>Fecha</span>
                      <ArrowUpDown size={12} />
                    </div>
                  </th>
                  <th onClick={() => handleSort('provider')} className="px-3.5 py-3 cursor-pointer hover:text-indigo-600">
                    <div className="flex items-center gap-1">
                      <span>Proveedor</span>
                      <ArrowUpDown size={12} />
                    </div>
                  </th>
                  <th className="px-3.5 py-3 text-center">Factura</th>
                  <th className="px-3.5 py-3">Concepto</th>
                  <th className="px-3.5 py-3 text-center">Causación</th>
                  <th onClick={() => handleSort('value')} className="px-3.5 py-3 text-right cursor-pointer hover:text-indigo-600 whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1">
                      <span>Valor ($)</span>
                      <ArrowUpDown size={12} />
                    </div>
                  </th>
                  <th className="px-3.5 py-3 text-center">Medio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium bg-white">
                {filteredPayments.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                      No se encontraron registros de pago que coincidan con la búsqueda.
                    </td>
                  </tr>
                ) : (
                  filteredPayments.map((p) => (
                    <tr key={p.id} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="px-3.5 py-3 font-mono font-bold text-gray-400">
                        {p.id}
                      </td>
                      <td className="px-3.5 py-3 font-mono text-gray-600 whitespace-nowrap">
                        {p.paymentDate}
                      </td>
                      <td className="px-3.5 py-3 font-bold text-gray-900 whitespace-nowrap">
                        {p.provider}
                      </td>
                      <td className="px-3.5 py-3 font-mono text-gray-600 text-center whitespace-nowrap">
                        {p.invoice ? (
                          <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-semibold">
                            {p.invoice}
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-3.5 py-3 text-gray-700 min-w-[220px]">
                        {p.concept}
                      </td>
                      <td className="px-3.5 py-3 font-mono text-center whitespace-nowrap">
                        {p.causacion ? (
                          <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded text-[11px] font-bold border border-indigo-100">
                            {p.causacion}
                          </span>
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="px-3.5 py-3 text-right font-mono font-bold text-gray-900 whitespace-nowrap">
                        $ {p.valueFormatted}
                      </td>
                      <td className="px-3.5 py-3 text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {p.paymentMethod}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot className="bg-gray-100 font-bold border-t-2 border-gray-200 text-gray-900">
                <tr>
                  <td colSpan={6} className="px-3.5 py-3 uppercase tracking-wider text-[11px] text-gray-600 font-extrabold">
                    TOTAL EJECUTADO ({filteredPayments.length} DE {PAYMENTS_METADATA.recordsCount} GIROS)
                  </td>
                  <td className="px-3.5 py-3 text-right font-mono font-black text-indigo-950 text-sm whitespace-nowrap">
                    $ {filteredTotalValue.toLocaleString('es-CO')}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* 6. Pagos agrupados por fecha */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-main rounded-2xl border border-indigo-100">
                <Calendar size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Distribución Temporal</span>
                <h3 className="text-2xl font-black text-gray-900">
                  6. Pagos agrupados por fecha ({PAYMENTS_BY_DATE.length} Fechas)
                </h3>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-500">
              Concentración principal: 21 y 29 de agosto (59,81% del total)
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-100/80 text-gray-600 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3.5">Fecha de Pago</th>
                  <th className="px-4 py-3.5 text-center">No. Giros</th>
                  <th className="px-4 py-3.5 text-right">Valor Total ($)</th>
                  <th className="px-4 py-3.5 text-right">% del Total</th>
                  <th className="px-4 py-3.5">Distribución Visual</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium bg-white">
                {PAYMENTS_BY_DATE.map((d) => (
                  <tr key={d.date} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-4 py-3.5 font-mono font-bold text-gray-900">
                      {d.date}
                    </td>
                    <td className="px-4 py-3.5 text-center font-bold text-gray-700">
                      <span className="px-2.5 py-1 bg-gray-100 rounded-lg border border-gray-200">
                        {d.count} {d.count === 1 ? 'giro' : 'giros'}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-gray-900">
                      $ {d.totalFormatted}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-indigo-700">
                      {d.share}
                    </td>
                    <td className="px-4 py-3.5 min-w-[140px]">
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-indigo-600 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${Math.max(d.shareNum, 2)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-indigo-950 text-white font-bold border-t-2 border-indigo-900">
                <tr>
                  <td className="px-4 py-3.5 uppercase font-extrabold text-amber-300">
                    TOTAL CONSOLIDADO (9 FECHAS)
                  </td>
                  <td className="px-4 py-3.5 text-center font-black text-amber-300">
                    {PAYMENTS_METADATA.recordsCount}
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-amber-300 font-black text-sm">
                    {PAYMENTS_METADATA.totalAmountFormatted}
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-amber-300 font-black">
                    100,00 %
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* 7. Clasificación por naturaleza del gasto */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-main rounded-2xl border border-indigo-100">
                <PieChart size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Auditoría Presupuestal</span>
                <h3 className="text-2xl font-black text-gray-900">
                  7. Clasificación por naturaleza del gasto ({EXPENSE_NATURE_CATEGORIES.length} Categorías)
                </h3>
              </div>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={15} />
              <input
                type="text"
                placeholder="Filtrar categoría o proveedor..."
                value={expenseSearch}
                onChange={(e) => setExpenseSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:bg-white focus:border-indigo-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-8">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-100/80 text-gray-600 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3.5 text-center">#</th>
                  <th className="px-4 py-3.5">Naturaleza del Gasto</th>
                  <th className="px-4 py-3.5">Proveedores Involucrados</th>
                  <th className="px-4 py-3.5 text-right">Valor ($)</th>
                  <th className="px-4 py-3.5 text-right">% del total</th>
                  <th className="px-4 py-3.5">Participación</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium bg-white">
                {filteredExpenses.map((cat, idx) => (
                  <tr key={cat.category} className="hover:bg-indigo-50/40 transition-colors">
                    <td className="px-4 py-3.5 font-mono font-bold text-gray-400 text-center">
                      {idx + 1}
                    </td>
                    <td className="px-4 py-3.5 text-gray-900 font-bold whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${cat.color || 'bg-indigo-600'}`} />
                        <span>{cat.category}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-gray-700">
                      <span className="font-semibold text-gray-800">{cat.providers}</span>
                      {cat.description && (
                        <p className="text-[11px] text-gray-500 mt-0.5">{cat.description}</p>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-gray-900 whitespace-nowrap">
                      $ {cat.value}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-indigo-700 whitespace-nowrap">
                      {cat.share}
                    </td>
                    <td className="px-4 py-3.5 min-w-[140px]">
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${cat.color || 'bg-indigo-600'}`}
                          style={{ width: `${Math.max(cat.shareNum, 1)}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-indigo-950 text-white font-bold border-t-2 border-indigo-900">
                <tr>
                  <td colSpan={3} className="px-4 py-4 uppercase font-extrabold tracking-wider text-amber-300">
                    TOTAL GENERAL DE EGRESOS ({filteredExpenses.length} CATEGORÍAS)
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-amber-300 text-sm font-black whitespace-nowrap">
                    $ {totalExpenseFiltered.toLocaleString('es-CO')}
                  </td>
                  <td className="px-4 py-4 text-right font-mono text-amber-300 font-black whitespace-nowrap">
                    100,00 %
                  </td>
                  <td className="px-4 py-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
              <p className="text-xs text-blue-700 font-semibold uppercase tracking-wider">Top 1: Administración y Aseo</p>
              <p className="text-xl font-black text-blue-950 font-mono mt-1">$ 24.899.452</p>
              <p className="text-xs text-blue-800 mt-0.5 font-medium">33,30 % (HGV ADMON y HGV ASEO)</p>
            </div>
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <p className="text-xs text-indigo-700 font-semibold uppercase tracking-wider">Top 2: Seguridad y Vigilancia</p>
              <p className="text-xl font-black text-indigo-950 font-mono mt-1">$ 15.000.000</p>
              <p className="text-xs text-indigo-800 mt-0.5 font-medium">20,06 % (SIB 70 - Abono)</p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-100">
              <p className="text-xs text-cyan-700 font-semibold uppercase tracking-wider">Top 3: Servicios Públicos</p>
              <p className="text-xl font-black text-cyan-950 font-mono mt-1">$ 8.776.657</p>
              <p className="text-xs text-cyan-800 mt-0.5 font-medium">11,74 % (EMCALI)</p>
            </div>
          </div>
        </div>

        {/* 7.1 Gasto atribuible a la emergencia sísmica */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-red-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-red-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-red-100 text-red-700 rounded-2xl">
                <ShieldAlert size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Foco de Contingencia</span>
                <h3 className="text-2xl font-black text-gray-900">
                  7.1 Gasto atribuible a la emergencia sísmica
                </h3>
              </div>
            </div>

            <div className="text-right">
              <span className="px-3.5 py-1.5 bg-red-50 text-red-800 rounded-full text-xs font-bold border border-red-200 font-mono">
                Total: $ {SEISMIC_EMERGENCY_TOTAL.amount} ({SEISMIC_EMERGENCY_TOTAL.share})
              </span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-red-100 mb-6">
            <table className="w-full text-xs text-left">
              <thead className="bg-red-50/80 text-red-900 font-bold uppercase tracking-wider text-[11px] border-b border-red-200">
                <tr>
                  <th className="px-4 py-3">Proveedor</th>
                  <th className="px-4 py-3">Concepto</th>
                  <th className="px-4 py-3 text-center">Fecha</th>
                  <th className="px-4 py-3 text-right">Valor Pagado ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-100/60 font-medium bg-white">
                {SEISMIC_EMERGENCY_EXPENSES.map((item, idx) => (
                  <tr key={idx} className="hover:bg-red-50/30 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-gray-900">
                      {item.provider}
                    </td>
                    <td className="px-4 py-3.5 text-gray-700">
                      {item.concept}
                    </td>
                    <td className="px-4 py-3.5 font-mono text-center text-gray-600">
                      {item.date}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-red-700 whitespace-nowrap">
                      $ {item.valueFormatted}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-red-950 text-white font-bold border-t-2 border-red-900">
                <tr>
                  <td colSpan={3} className="px-4 py-3.5 uppercase font-extrabold text-amber-300">
                    TOTAL DIRECTO ASOCIADO AL SISMO
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-amber-300 font-black text-sm whitespace-nowrap">
                    $ {SEISMIC_EMERGENCY_TOTAL.amount}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="p-4 bg-red-50/60 rounded-2xl border border-red-200 flex items-start gap-3">
            <Info size={17} className="text-red-700 shrink-0 mt-0.5" />
            <p className="text-xs text-red-950 leading-relaxed font-medium">
              {SEISMIC_EMERGENCY_TOTAL.note}
            </p>
          </div>
        </div>

        {/* 8. Reembolso de caja menor */}
        <div className="mb-14 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-gray-100 pb-5">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                <Wallet size={24} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">Auditoría de Fondos Menores</span>
                <h3 className="text-2xl font-black text-gray-900">
                  8. Reembolso de caja menor
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200 flex items-center gap-1.5 shadow-sm font-mono">
                <CheckCircle2 size={14} className="text-emerald-600" />
                Total: $ {PETTY_CASH_AUGUST_TOTAL.amountFormatted}
              </span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-xs text-gray-700 leading-relaxed mb-6">
            El libro contable trae una hoja rotulada <strong>Hoja1</strong> y denominada <code className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-indigo-900 font-bold">{PETTY_CASH_AUGUST_TOTAL.sheetName}</code>, que consolida 5 compras y soportes de gastos menores del mes:
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-100/80 text-gray-600 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3">Proveedor</th>
                  <th className="px-4 py-3 text-center">Factura</th>
                  <th className="px-4 py-3">Concepto</th>
                  <th className="px-4 py-3 text-center">Fecha</th>
                  <th className="px-4 py-3 text-right">Valor Pagado ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium bg-white">
                {PETTY_CASH_AUGUST_ITEMS.map((item) => (
                  <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors">
                    <td className="px-4 py-3.5 font-bold text-gray-900">
                      {item.provider}
                    </td>
                    <td className="px-4 py-3.5 text-center font-mono text-gray-600">
                      {item.invoice !== '—' ? (
                        <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-800 font-semibold">
                          {item.invoice}
                        </span>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-gray-700">
                      {item.concept}
                    </td>
                    <td className="px-4 py-3.5 text-center font-mono text-gray-500">
                      {item.paymentDate}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-emerald-800 whitespace-nowrap">
                      $ {item.valueFormatted}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-emerald-950 text-white font-bold border-t-2 border-emerald-900">
                <tr>
                  <td colSpan={4} className="px-4 py-3.5 uppercase font-extrabold text-amber-300">
                    TOTAL REEMBOLSO CAJA MENOR (5 ÍTEMS)
                  </td>
                  <td className="px-4 py-3.5 text-right font-mono text-amber-300 font-black text-sm whitespace-nowrap">
                    $ {PETTY_CASH_AUGUST_TOTAL.amountFormatted}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
            <Info size={17} className="text-amber-800 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-950 font-medium leading-relaxed">
              <strong>Nota metodológica:</strong> {PETTY_CASH_AUGUST_TOTAL.note}
            </p>
          </div>
        </div>

        {/* 9. Observaciones de calidad de datos y auditoría */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-200/80">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
            <div className="p-3 bg-indigo-50 text-indigo-700 rounded-2xl">
              <FileQuestion size={22} />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Auditoría Externa</span>
              <h4 className="text-xl font-black text-gray-900">
                Observaciones de Calidad de Datos Contables
              </h4>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DATA_QUALITY_OBSERVATIONS.map((obs, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-200/70 hover:bg-white hover:border-indigo-200 transition-colors">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-900">{obs.location}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {obs.severity}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {obs.observation}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaymentsTableSection;
