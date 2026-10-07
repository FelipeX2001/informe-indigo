import React from 'react';
import { LOGO_HGV, LOGO_ICON, CONCLUSIONS, CONCLUSIONS_TEXT } from '../constants';
import { Check, Star, Shield, TrendingUp, Users, DollarSign, Wrench, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const icons = [TrendingUp, DollarSign, FileCheck, Users, Wrench, Shield];

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Conclusión Oficial del Informe */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-gradient-to-br from-slate-900 to-indigo-950/80 p-8 md:p-10 rounded-3xl border border-indigo-500/20 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-indigo-600/30 border border-indigo-400/30 rounded-2xl text-indigo-300">
              <Star size={26} className="fill-indigo-300" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">Balance Institucional</span>
              <h2 className="text-2xl md:text-3xl font-black text-white">Balance Oficial de Cierre — Agosto 2026</h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
            <p className="border-l-2 border-indigo-500 pl-4 py-1">
              {CONCLUSIONS_TEXT.paragraph1}
            </p>
            <p className="border-l-2 border-indigo-500/60 pl-4 py-1">
              {CONCLUSIONS_TEXT.paragraph2}
            </p>
            <p className="border-l-2 border-indigo-500/30 pl-4 py-1 font-medium text-indigo-100">
              {CONCLUSIONS_TEXT.paragraph3}
            </p>
          </div>
        </motion.div>

        {/* Resumen Analítico de Conclusiones con Data Real */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5">
              <span>Hallazgos y Conclusiones Clave</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Data Agosto 2026
              </span>
            </h3>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Consolidación de métricas financieras, ejecución operativa y estado de cartera de la copropiedad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONCLUSIONS.map((c, i) => {
              const Icon = icons[i % icons.length] || Check;
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group relative bg-slate-900/90 p-6 md:p-7 rounded-3xl border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="h-11 w-11 rounded-2xl bg-indigo-950/60 border border-indigo-800/40 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                        <Icon size={20} className="text-indigo-400 group-hover:text-white" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-indigo-400 bg-indigo-950/40 px-2 py-0.5 rounded border border-indigo-800/30">
                        {c.highlight}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-base mb-2 text-white group-hover:text-indigo-300 transition-colors">
                      {c.title}
                    </h4>
                    <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Firmas Block */}
        <div className="mb-20 pb-12 border-b border-slate-800">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60">
              <div className="w-32 h-px bg-slate-700 mb-4"></div>
              <h4 className="font-black text-white text-xs tracking-wider uppercase">Administradora</h4>
              <p className="text-indigo-300 font-bold text-xs mt-1">MARCELA GONZÁLEZ</p>
              <p className="text-slate-400 text-[11px] mt-0.5">Conjunto Residencial Índigo P.H.</p>
            </div>
            <div className="flex flex-col items-center bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60">
              <div className="w-32 h-px bg-slate-700 mb-4"></div>
              <h4 className="font-black text-white text-xs tracking-wider uppercase">Representante Legal</h4>
              <p className="text-indigo-300 font-bold text-xs mt-1">MARIO ALEJANDRO GÓMEZ VIVAS</p>
              <p className="text-slate-400 text-[11px] mt-0.5">Administraciones HGV S.A.S.</p>
            </div>
            <div className="flex flex-col items-center bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60">
              <div className="w-32 h-px bg-slate-700 mb-4"></div>
              <h4 className="font-black text-white text-xs tracking-wider uppercase">Contadora</h4>
              <p className="text-indigo-300 font-bold text-xs mt-1">MARÍA FERNANDA VALENCIA C.</p>
              <p className="text-slate-400 text-[11px] mt-0.5">TP-279085-T</p>
            </div>
            <div className="flex flex-col items-center bg-slate-900/40 p-6 rounded-3xl border border-slate-800/60">
              <div className="w-32 h-px bg-slate-700 mb-4"></div>
              <h4 className="font-black text-white text-xs tracking-wider uppercase">Revisor Fiscal</h4>
              <p className="text-indigo-300 font-bold text-xs mt-1">MARÍA PAULA GÁLVEZ</p>
              <p className="text-slate-400 text-[11px] mt-0.5">CC 1144030632 / TP 202919</p>
            </div>
          </div>
        </div>

        {/* Branding Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="p-2 rounded-2xl bg-slate-900 border border-slate-800">
              <img 
                src={LOGO_ICON} 
                alt="Índigo" 
                className="h-10 w-10 brightness-0 invert" 
              />
            </div>
            <div>
              <p className="text-white font-extrabold text-base">Conjunto Residencial Índigo PH</p>
              <p className="text-slate-400 text-xs mt-0.5">
                Informe Oficial de Gestión Administrativa y Financiera — Agosto 2026
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <span className="text-slate-500 text-[10px] uppercase tracking-widest mb-2 font-extrabold">Administrado por</span>
            <img src={LOGO_HGV} alt="HGV Logo" className="h-16 p-1 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            <p className="text-slate-500 text-xs mt-2">© 2026 Administraciones HGV S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
