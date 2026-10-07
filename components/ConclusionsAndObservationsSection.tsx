import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ShieldCheck, 
  AlertTriangle, 
  Info, 
  FileSearch, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Building2, 
  ShieldAlert, 
  DollarSign, 
  Users, 
  Sparkles, 
  HelpCircle,
  Copy,
  Check,
  ChevronRight,
  Receipt,
  FileSpreadsheet
} from 'lucide-react';
import { 
  ADMIN_COMMITMENT_TEXT, 
  ADMINISTRATION_SIGNATURE, 
  DATA_ORIGIN_OBSERVATIONS, 
  KEY_VISUAL_REPORT_METRICS,
  FINANCIAL_ANNEXES 
} from '../constants';

export const ConclusionsAndObservationsSection: React.FC = () => {
  const [filterSeverity, setFilterSeverity] = useState<'all' | 'high' | 'medium' | 'info'>('all');
  const [copiedMetric, setCopiedMetric] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMetric(id);
    setTimeout(() => setCopiedMetric(null), 2000);
  };

  const filteredObservations = DATA_ORIGIN_OBSERVATIONS.filter(item => {
    if (filterSeverity === 'all') return true;
    return item.severity === filterSeverity;
  });

  return (
    <section id="conclusiones" className="py-24 bg-gradient-to-b from-white via-indigo-bg/30 to-indigo-bg border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4">
            <Award size={14} className="text-indigo-600" />
            <span>Cierre & Balance Oficial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-dark tracking-tight mb-4">
            Parte V — Conclusiones y observaciones
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            Evaluación institucional, control de calidad sobre la información contable y cifras maestras para la presentación comunitaria.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 10. COMPROMISO DE LA ADMINISTRACIÓN */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 flex items-center justify-center font-black text-base">
                  10
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-300 block">
                    Gestión Institucional
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {ADMIN_COMMITMENT_TEXT.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-light mb-10 max-w-4xl">
                <p>
                  {ADMIN_COMMITMENT_TEXT.paragraph1}
                </p>
                <p>
                  {ADMIN_COMMITMENT_TEXT.paragraph2}
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-white text-base sm:text-lg leading-relaxed font-medium">
                  <p className="italic text-indigo-100">
                    «{ADMIN_COMMITMENT_TEXT.gratitude}»
                  </p>
                </div>
              </div>

              {/* Signature Block */}
              <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-300 block mb-1.5">
                    Representación Legal y Administración
                  </span>
                  <p className="text-2xl font-black text-white tracking-wide">
                    {ADMINISTRATION_SIGNATURE.name}
                  </p>
                  <p className="text-sm text-slate-300 font-medium">
                    {ADMINISTRATION_SIGNATURE.title} — {ADMINISTRATION_SIGNATURE.property}
                  </p>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-3">
                  <ShieldCheck size={28} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-white block">Informe Oficial Validado</span>
                    <span className="text-[11px] text-slate-300">Cierre de Gestión Agosto 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 11. OBSERVACIONES SOBRE LOS DATOS DE ORIGEN */}
        {/* ========================================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center font-black text-base">
                11
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  11. Observaciones sobre los datos de origen
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Puntos identificados para revisión antes de publicar el informe visual definitivo
                </p>
              </div>
            </div>

            {/* Severity Filter Pills */}
            <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-2xl text-xs">
              <button
                onClick={() => setFilterSeverity('all')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  filterSeverity === 'all'
                    ? 'bg-white text-gray-900 shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Todas ({DATA_ORIGIN_OBSERVATIONS.length})
              </button>
              <button
                onClick={() => setFilterSeverity('high')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1 ${
                  filterSeverity === 'high'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-rose-700 hover:bg-rose-50'
                }`}
              >
                Prioritarias (2)
              </button>
              <button
                onClick={() => setFilterSeverity('medium')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1 ${
                  filterSeverity === 'medium'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-amber-800 hover:bg-amber-50'
                }`}
              >
                Seguimiento (2)
              </button>
              <button
                onClick={() => setFilterSeverity('info')}
                className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                  filterSeverity === 'info'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-blue-700 hover:bg-blue-50'
                }`}
              >
                De Forma (3)
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50/90 text-gray-500 uppercase text-[11px] font-extrabold border-b border-gray-100 tracking-wider">
                    <th className="py-4 px-4 w-12 text-center">#</th>
                    <th className="py-4 px-6 w-1/4">Ubicación / Archivo</th>
                    <th className="py-4 px-6 w-1/2">Observación técnica</th>
                    <th className="py-4 px-6 text-center">Nivel de Revisión</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredObservations.map((obs) => (
                    <tr key={obs.id} className="hover:bg-amber-50/30 transition-colors">
                      <td className="py-4 px-4 text-center">
                        <span className="w-7 h-7 rounded-xl bg-gray-100 text-gray-700 font-extrabold text-xs inline-flex items-center justify-center">
                          {obs.id}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-gray-900 align-top">
                        <span className="inline-block px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono font-semibold">
                          {obs.location}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-gray-700 leading-relaxed font-normal align-top">
                        <p className="font-medium text-gray-900">{obs.observation}</p>
                      </td>
                      <td className="py-4 px-6 text-center align-top whitespace-nowrap">
                        {obs.severity === 'high' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-extrabold text-[11px] border border-rose-200">
                            <AlertTriangle size={13} /> Atención Inmediata
                          </span>
                        )}
                        {obs.severity === 'medium' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-extrabold text-[11px] border border-amber-200">
                            <Info size={13} /> Por Conciliar
                          </span>
                        )}
                        {obs.severity === 'info' && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-extrabold text-[11px] border border-blue-200">
                            <CheckCircle2 size={13} /> Ajuste Tipográfico
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 12. DATOS CLAVE PARA EL INFORME VISUAL */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-900 flex items-center justify-center font-black text-base">
                12
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
                  12. Datos clave para el informe visual
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Cifras listas para usar como titulares o tarjetas de la presentación ejecutiva
                </p>
              </div>
            </div>
            <span className="text-xs font-extrabold px-3.5 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
              11 Indicadores Maestros
            </span>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {KEY_VISUAL_REPORT_METRICS.map((item, idx) => {
              const isHero = item.value.includes('74.778.132') || item.value.includes('7:45');
              const isEmergency = item.tag === 'Atención Sismo' || item.tag === 'Respuesta Inmediata';

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.3 }}
                  className={`p-5 rounded-3xl border transition-all flex flex-col justify-between relative group ${
                    isHero 
                      ? 'bg-gradient-to-br from-indigo-900 to-indigo-950 text-white border-indigo-800 shadow-md' 
                      : isEmergency
                      ? 'bg-gradient-to-br from-rose-50/70 to-white border-rose-200 text-gray-900 shadow-2xs'
                      : 'bg-white border-gray-200/80 text-gray-900 shadow-2xs hover:shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                        isHero
                          ? 'bg-white/15 text-indigo-200'
                          : isEmergency
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {item.tag}
                      </span>

                      <button
                        onClick={() => handleCopy(`${item.metric}: ${item.value}`, `metric-${idx}`)}
                        className={`p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ${
                          isHero ? 'hover:bg-white/20 text-white' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'
                        }`}
                        title="Copiar dato"
                      >
                        {copiedMetric === `metric-${idx}` ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                      </button>
                    </div>

                    <p className={`text-xs font-semibold leading-snug mb-3 ${
                      isHero ? 'text-indigo-100' : 'text-gray-600'
                    }`}>
                      {item.metric}
                    </p>
                  </div>

                  <div>
                    <span className={`text-xl sm:text-2xl font-black tracking-tight block ${
                      isHero ? 'text-white' : isEmergency ? 'text-rose-700' : 'text-indigo-950'
                    }`}>
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Master Table of Headlines */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xs overflow-hidden">
            <div className="p-5 bg-gray-50/90 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Resumen Tabular para Diapositivas o Infografía
              </span>
              <span className="text-xs font-mono font-bold text-indigo-600">
                11 Cifras Consolidadas
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100/60 text-gray-600 uppercase text-[11px] font-extrabold border-b border-gray-200 tracking-wider">
                    <th className="py-3 px-6 w-12 text-center">#</th>
                    <th className="py-3 px-6">Dato / Métrica Clave</th>
                    <th className="py-3 px-6 text-right">Valor Reportado</th>
                    <th className="py-3 px-6 text-center">Área</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {KEY_VISUAL_REPORT_METRICS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="py-3 px-6 text-center font-bold text-gray-400 text-xs">
                        {idx + 1}
                      </td>
                      <td className="py-3 px-6 font-semibold text-gray-900">
                        {item.metric}
                      </td>
                      <td className="py-3 px-6 text-right font-mono font-bold text-indigo-950 whitespace-nowrap">
                        {item.value}
                      </td>
                      <td className="py-3 px-6 text-center">
                        <span className="px-2.5 py-0.5 rounded-md bg-gray-100 text-gray-600 text-[11px] font-medium">
                          {item.tag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 13. ANEXOS INCORPORADOS AL INFORME */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex items-center justify-center font-black text-base">
              13
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest font-extrabold text-indigo-600 block">
                Soportes y Fuentes Documentales
              </span>
              <h3 className="text-2xl font-black text-gray-900">
                13. Anexos incorporados al informe
              </h3>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50/80 text-gray-500 uppercase text-xs font-bold border-b border-gray-100">
                    <th className="py-4 px-4 w-12 text-center">#</th>
                    <th className="py-4 px-6 font-extrabold text-indigo-dark">Anexo</th>
                    <th className="py-4 px-6 font-extrabold text-indigo-dark">Contenido</th>
                    <th className="py-4 px-6 font-extrabold text-indigo-dark">Archivo Oficial / Soporte</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {FINANCIAL_ANNEXES.map((annex, idx) => (
                    <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="py-4 px-4 text-center">
                        <span className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-extrabold text-xs inline-flex items-center justify-center">
                          {idx + 1}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">
                        {annex.title}
                      </td>
                      <td className="py-4 px-6 text-gray-700 leading-relaxed font-medium">
                        {annex.content}
                      </td>
                      <td className="py-4 px-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50/80 text-indigo-900 font-mono text-xs font-bold border border-indigo-100">
                          <FileSpreadsheet size={14} className="text-indigo-600" />
                          {annex.sourceFile}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConclusionsAndObservationsSection;
