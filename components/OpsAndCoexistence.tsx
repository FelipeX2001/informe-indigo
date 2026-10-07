import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  ClipboardCheck, 
  Wrench, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  DollarSign, 
  Layers, 
  Info,
  Calendar,
  CheckCircle
} from 'lucide-react';
import { 
  ACTIVITIES_BY_CATEGORY, 
  ACTIVITY_PAYMENT_CROSS_REF, 
  UNMATCHED_ACTIVITIES_NOTE 
} from '../constants';

const OpsAndCoexistence: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'ClipboardCheck': return ClipboardCheck;
      case 'Wrench': return Wrench;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      default: return CheckCircle2;
    }
  };

  return (
    <section id="ops" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ClipboardCheck size={14} className="text-indigo-600" />
            <span>Capítulo III — Ejecución de Actividades · Agosto de 2026</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            3. Actividades Ejecutadas en el Mes
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
            Las <strong>trece (13) actividades</strong> reportadas por la Administración se agrupan aquí por naturaleza para facilitar su lectura y auditoría:
          </p>
        </div>

        {/* 5 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ACTIVITIES_BY_CATEGORY.map((cat, idx) => {
            const Icon = getIcon(cat.icon);
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white rounded-3xl p-6 md:p-7 border ${cat.colorTheme.cardBorder} shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`p-3 rounded-2xl ${cat.colorTheme.iconBg} ${cat.colorTheme.iconText}`}>
                      <Icon size={22} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-extrabold ${cat.colorTheme.badgeBg} ${cat.colorTheme.badgeText}`}>
                      {cat.items.length} Labores
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-gray-900 mb-2 leading-snug">
                    {cat.category}
                  </h3>

                  <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3.5">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3 text-xs text-gray-700 bg-gray-50/80 p-3 rounded-2xl border border-gray-100 group hover:bg-white hover:border-gray-200 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${cat.colorTheme.bulletBg} shrink-0 mt-1.5`} />
                        <div>
                          <p className="font-bold text-gray-900">{item.title}</p>
                          <p className="text-gray-500 mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <span>ÍTEM {cat.id}</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle size={12} />
                    Ejecutado
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cruce Actividades vs. Soportes Contables */}
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200/80 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
                <DollarSign size={22} />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">Auditoría Cruzada</span>
                <h3 className="text-xl font-black text-gray-900">
                  Cruce de Actividades con Soportes Financieros del Mes
                </h3>
              </div>
            </div>

            <span className="px-3.5 py-1.5 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold border border-emerald-200">
              {ACTIVITY_PAYMENT_CROSS_REF.length} Actividades con Giro Contable Directo
            </span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full text-xs text-left">
              <thead className="bg-gray-100/80 text-gray-600 font-bold uppercase tracking-wider text-[11px] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3.5">Actividad Reportada</th>
                  <th className="px-4 py-3.5">Proveedor / Soporte</th>
                  <th className="px-4 py-3.5">Naturaleza</th>
                  <th className="px-4 py-3.5 text-center">Fecha</th>
                  <th className="px-4 py-3.5 text-right">Valor Girado ($)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium bg-white">
                {ACTIVITY_PAYMENT_CROSS_REF.map((item, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="px-4 py-3.5 text-gray-900 font-bold">
                      {item.activity}
                    </td>
                    <td className="px-4 py-3.5 text-indigo-900 font-semibold font-mono">
                      {item.provider}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-gray-100 text-gray-700 border border-gray-200">
                        {item.nature}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-center font-mono text-gray-500 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="px-4 py-3.5 text-right font-mono font-bold text-gray-900 whitespace-nowrap">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Nota metodológica de actividades sin desembolso directo */}
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex items-start gap-3">
            <Info size={18} className="text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 font-medium leading-relaxed">
              <strong>Nota de conciliación técnica:</strong> {UNMATCHED_ACTIVITIES_NOTE}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OpsAndCoexistence;
