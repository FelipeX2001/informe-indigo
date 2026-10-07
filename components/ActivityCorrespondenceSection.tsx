import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  AlertCircle, 
  Receipt, 
  HelpCircle, 
  Search, 
  ArrowUpDown, 
  FileText, 
  DollarSign, 
  Building2, 
  ShieldCheck, 
  Info, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { 
  ACTIVITIES_BACKED_BY_PAYMENT, 
  ACTIVITIES_BACKED_TOTAL, 
  ACTIVITIES_WITHOUT_AUGUST_PAYMENT, 
  UNPAID_ACTIVITIES_NOTE 
} from '../constants';

export const ActivityCorrespondenceSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'backed' | 'unpaid'>('all');

  const filteredBacked = useMemo(() => {
    return ACTIVITIES_BACKED_BY_PAYMENT.filter(item => 
      item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.concept.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.invoice.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredUnpaid = useMemo(() => {
    return ACTIVITIES_WITHOUT_AUGUST_PAYMENT.filter(item => 
      item.activity.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const totalFilteredValue = useMemo(() => {
    return filteredBacked.reduce((acc, curr) => acc + curr.value, 0);
  }, [filteredBacked]);

  return (
    <section id="correspondencia" className="py-24 bg-gradient-to-b from-indigo-bg/30 via-white to-indigo-bg/40 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Receipt size={14} className="text-indigo-600" />
            <span>Auditoría de Actividades & Egresos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-dark tracking-tight mb-4">
            Parte III — Correspondencia entre actividades y pagos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Cruce entre las actividades reportadas en la <span className="font-bold text-indigo-900">Parte I</span> y los pagos de la <span className="font-bold text-indigo-900">Parte II</span>. Es el insumo directo para el informe visual: cada actividad queda respaldada con su proveedor y su costo.
          </p>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={20} />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Con respaldo directo</span>
                <span className="text-xl font-black text-gray-900">8 Actividades</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
                <DollarSign size={20} />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Total Identificado</span>
                <span className="text-xl font-black text-indigo-600">$ {ACTIVITIES_BACKED_TOTAL.valueFormatted}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-xs flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
                <HelpCircle size={20} />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">Sin egreso en agosto</span>
                <span className="text-xl font-black text-amber-700">5 Actividades</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-white rounded-3xl p-5 md:p-6 border border-gray-100 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-gray-100/80 rounded-2xl w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-indigo-900 shadow-xs'
                  : 'text-gray-600 hover:text-indigo-900'
              }`}
            >
              Todas (13)
            </button>
            <button
              onClick={() => setActiveTab('backed')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'backed'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-emerald-700'
              }`}
            >
              <CheckCircle2 size={13} />
              <span>Con Pago (8)</span>
            </button>
            <button
              onClick={() => setActiveTab('unpaid')}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'unpaid'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-gray-600 hover:text-amber-700'
              }`}
            >
              <HelpCircle size={13} />
              <span>Sin Pago en Mes (5)</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por actividad, proveedor o factura..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs bg-gray-50/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 9. ACTIVIDADES CON RESPALDO DE PAGO */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'backed') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm">
                  9
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    9. Actividades con respaldo de pago
                  </h3>
                  <p className="text-xs text-gray-500">
                    8 intervenciones con factura, beneficiario y valor exacto registrado en la programación
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold">
                {filteredBacked.length} de 8 Registros
              </span>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50/90 text-gray-500 uppercase text-[11px] font-extrabold border-b border-gray-100 tracking-wider">
                      <th className="py-4 px-4 sm:px-6">Actividad reportada</th>
                      <th className="py-4 px-4 sm:px-6">Proveedor</th>
                      <th className="py-4 px-4 sm:px-6 text-center">Factura</th>
                      <th className="py-4 px-4 sm:px-6 text-right">Valor (COP)</th>
                      <th className="py-4 px-4 sm:px-6">Concepto en el pago</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredBacked.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-gray-400 text-xs">
                          No se encontraron actividades con respaldo que coincidan con la búsqueda.
                        </td>
                      </tr>
                    ) : (
                      filteredBacked.map((item, idx) => (
                        <tr key={idx} className="hover:bg-indigo-50/40 transition-colors">
                          <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900">
                            <div className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 border border-emerald-100">
                                {idx + 1}
                              </span>
                              <span>{item.activity}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 font-bold text-indigo-950 whitespace-nowrap">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-gray-100/80 border border-gray-200/70 text-xs">
                              <Building2 size={13} className="text-indigo-600" />
                              {item.provider}
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-center">
                            <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                              {item.invoice}
                            </span>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-right font-mono font-black text-gray-900 text-sm whitespace-nowrap">
                            $ {item.valueFormatted}
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-gray-600 font-normal">
                            {item.concept}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                  <tfoot>
                    <tr className="bg-emerald-50/70 border-t-2 border-emerald-200 font-extrabold text-emerald-950 text-sm">
                      <td colSpan={3} className="py-4 px-4 sm:px-6 text-right uppercase tracking-wider text-xs font-black">
                        TOTAL identificado {filteredBacked.length < 8 && '(Filtrado)'}:
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-right font-mono font-black text-base text-emerald-900 whitespace-nowrap">
                        $ {new Intl.NumberFormat('es-CO').format(totalFilteredValue)}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-xs text-emerald-800 font-medium">
                        Cruce total soportado con programación y extractos
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* 9.1 ACTIVIDADES SIN PAGO IDENTIFICABLE EN AGOSTO */}
        {/* ========================================================================= */}
        {(activeTab === 'all' || activeTab === 'unpaid') && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-sm">
                  9.1
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                    9.1 Actividades sin pago identificable en agosto
                  </h3>
                  <p className="text-xs text-gray-500">
                    Labores ejecutadas en el mes con causación en otro período o sin desembolso monetario
                  </p>
                </div>
              </div>
              <span className="px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-extrabold">
                {filteredUnpaid.length} de 5 Casos Analizados
              </span>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-gray-50/90 text-gray-500 uppercase text-[11px] font-extrabold border-b border-gray-100 tracking-wider">
                      <th className="py-4 px-4 sm:px-6 w-1/3">Actividad</th>
                      <th className="py-4 px-4 sm:px-6 w-2/3">Posible explicación / Sustento administrativo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredUnpaid.length === 0 ? (
                      <tr>
                        <td colSpan={2} className="py-8 text-center text-gray-400 text-xs">
                          No se encontraron actividades sin pago que coincidan con la búsqueda.
                        </td>
                      </tr>
                    ) : (
                      filteredUnpaid.map((item, idx) => (
                        <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                          <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 align-top">
                            <div className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <span>{item.activity}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 sm:px-6 text-gray-700 leading-relaxed align-top">
                            <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm font-medium">
                              {item.explanation}
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Explanatory Alert Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-amber-950 flex items-start gap-3.5 shadow-xs">
              <AlertCircle size={20} className="text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm leading-relaxed">
                <span className="font-bold text-amber-900 block mb-0.5">Nota metodológica de auditoría:</span>
                <p className="text-amber-900/90 italic">{UNPAID_ACTIVITIES_NOTE}</p>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ActivityCorrespondenceSection;
