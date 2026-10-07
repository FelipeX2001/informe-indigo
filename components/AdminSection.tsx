import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Building2, 
  Users, 
  ClipboardCheck, 
  Calendar, 
  AlertTriangle, 
  Clock, 
  FileSpreadsheet, 
  ChevronRight,
  HeartHandshake
} from 'lucide-react';
import { 
  SEISMIC_CONTEXT, 
  SEISMIC_EMERGENCY_RESPONSE, 
  INTERINSTITUTIONAL_ACTORS,
  ADMIN_ITEMS,
  CONTRACT_ITEMS
} from '../constants';

const AdminSection: React.FC = () => {
  return (
    <section id="admin" className="py-24 bg-gradient-to-b from-slate-50 via-indigo-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldAlert size={14} className="text-red-600" />
            <span>Parte I — Gestión del Período · Agosto de 2026</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            1. Contexto del Mes y <span className="text-red-600">Emergencia Sísmica</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed font-normal">
            {SEISMIC_CONTEXT.intro}
          </p>
        </div>

        {/* 1. Contexto & Ordinaria vs. Emergencia */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Tarjeta de Gestión Ordinaria y Compromiso */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-50 text-indigo-700 rounded-2xl border border-indigo-100">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">Gestión Integral</span>
                  <h3 className="text-xl font-bold text-gray-900">Continuidad Operativa del Conjunto</h3>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {SEISMIC_CONTEXT.ordinaryManagement}
              </p>

              <div className="space-y-3">
                {ADMIN_ITEMS.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-gray-700 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium">Mantenimientos al día</span>
              <span className="font-mono font-bold text-indigo-700">100% Obligaciones Fijas Pagadas</span>
            </div>
          </motion.div>

          {/* Tarjeta de Foco en la Emergencia */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 bg-gradient-to-br from-red-600 via-rose-700 to-red-800 p-8 rounded-3xl text-white shadow-lg shadow-red-900/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                  <ShieldAlert size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-red-200 uppercase tracking-wider block">Evento Sísmico</span>
                  <h3 className="text-xl font-bold text-white">10 de Agosto de 2026</h3>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 mb-6">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                  <Clock size={15} />
                  <span>Respuesta desde las 7:45 a. m.</span>
                </div>
                <p className="text-sm text-red-50 leading-relaxed font-normal">
                  {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.presence}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider mb-2">
                  <HeartHandshake size={15} className="text-pink-300" />
                  <span>Acompañamiento Comunitario Humano</span>
                </div>
                <p className="text-sm text-red-50 leading-relaxed font-normal">
                  {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.accompaniment}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-red-200">
              <span>Póliza multirriesgo</span>
              <span className="font-bold text-white uppercase bg-white/20 px-2.5 py-1 rounded-full text-[11px]">
                Radicada el mismo día (10/08)
              </span>
            </div>
          </motion.div>

        </div>

        {/* 2. Atención de la emergencia sísmica */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-red-100 text-red-800 rounded-2xl">
              <ShieldCheck size={26} />
            </div>
            <div>
              <span className="text-xs font-bold text-red-700 tracking-wider uppercase">Capítulo II</span>
              <h3 className="text-2xl md:text-3xl font-black text-gray-900">
                2. Atención de la Emergencia Sísmica
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* 2.1 Respuesta inmediata */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-700 font-bold text-xs border border-red-200">
                  {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.time}
                </span>
                <Clock size={16} className="text-gray-400" />
              </div>
              <h4 className="font-black text-gray-900 text-base mb-2">
                {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.presence}
              </p>
              <p className="text-xs text-gray-600 leading-relaxed font-medium bg-gray-50 p-3 rounded-xl border border-gray-100">
                {SEISMIC_EMERGENCY_RESPONSE.immediateResponse.accompaniment}
              </p>
            </div>

            {/* 2.2 Activación de la póliza */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-200">
                  {SEISMIC_EMERGENCY_RESPONSE.insurancePolicy.date}
                </span>
                <ShieldCheck size={16} className="text-blue-500" />
              </div>
              <h4 className="font-black text-gray-900 text-base mb-2">
                {SEISMIC_EMERGENCY_RESPONSE.insurancePolicy.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {SEISMIC_EMERGENCY_RESPONSE.insurancePolicy.desc}
              </p>
            </div>

            {/* 2.3 Coordinación interinstitucional */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-sm">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                  Gestión Articulada
                </span>
                <Users size={16} className="text-emerald-500" />
              </div>
              <h4 className="font-black text-gray-900 text-base mb-2">
                {SEISMIC_EMERGENCY_RESPONSE.coordination.title}
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                {SEISMIC_EMERGENCY_RESPONSE.coordination.desc}
              </p>
            </div>

          </div>

          {/* Tabla de Actores y Roles en la Atención de la Emergencia */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-200/80 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase block">Articulación Técnica e Institucional</span>
                <h4 className="text-xl font-black text-gray-900">
                  Matriz de Actores y Roles en la Emergencia
                </h4>
              </div>
              <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-800 rounded-full text-xs font-bold border border-indigo-200">
                6 Actores Clave Coordinados
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {INTERINSTITUTIONAL_ACTORS.map((actor, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200/80 hover:bg-white hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border ${actor.color}`}>
                        {actor.badge}
                      </span>
                      <span className="text-[11px] font-mono text-gray-400">#0{idx + 1}</span>
                    </div>
                    <h5 className="font-bold text-gray-900 text-sm mb-2">
                      {actor.actor}
                    </h5>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {actor.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AdminSection;
