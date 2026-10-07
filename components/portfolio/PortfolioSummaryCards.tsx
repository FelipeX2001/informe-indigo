import React from 'react';
import { 
  Wallet, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowDownRight, 
  FileSpreadsheet, 
  Clock, 
  ShieldCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { PORTFOLIO_AUGUST_METADATA } from '../../portfolioAugustData';

export const PortfolioSummaryCards: React.FC = () => {
  return (
    <div className="mb-12">
      {/* Official Data Source Badge */}
      <div className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} className="text-indigo-400" />
              <span>Corte Oficial Certificado</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              10. Resumen de la cartera — 31 de agosto de 2026
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl">
              Cierre contable consolidado al 31 de agosto de 2026 para el Conjunto Residencial Índigo P.H. Datos emitidos desde el sistema contable oficial.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-col gap-3 text-xs text-slate-300 bg-white/5 border border-white/10 p-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <FileSpreadsheet size={15} className="text-indigo-400" />
              <span>Fuente: <strong className="text-white">{PORTFOLIO_AUGUST_METADATA.sourceFile}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-indigo-400" />
              <span>Corte: <strong className="text-white">{PORTFOLIO_AUGUST_METADATA.cutOffDate}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={15} className="text-indigo-400" />
              <span>Impresión: <strong className="text-white">04/09/2026 en {PORTFOLIO_AUGUST_METADATA.software}</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 Core Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {/* Cartera Total */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Cartera Total</span>
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
              <Wallet size={20} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-indigo-950 font-mono tracking-tight">
            ${PORTFOLIO_AUGUST_METADATA.totalPortfolioFormatted}
          </div>
          <div className="text-xs text-gray-500 mt-2 flex items-center gap-1 font-medium">
            <span>100% de la cartera registrada</span>
          </div>
        </div>

        {/* Unidades en Mora */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Unidades en Mora</span>
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
              <Users size={20} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-tight">
            {PORTFOLIO_AUGUST_METADATA.totalUnits}
          </div>
          <div className="text-xs text-rose-600 mt-2 font-medium">
            <span>Copropietarios con saldo pendiente</span>
          </div>
        </div>

        {/* Saldo Promedio */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Saldo Promedio</span>
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-gray-900 font-mono tracking-tight">
            ${PORTFOLIO_AUGUST_METADATA.averageBalance}
          </div>
          <div className="text-xs text-gray-500 mt-2 font-medium">
            <span>Por unidad con mora</span>
          </div>
        </div>

        {/* Mayor Saldo Individual */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Mayor Saldo</span>
            <div className="p-2.5 rounded-2xl bg-red-50 text-red-600">
              <Award size={20} />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-black text-red-700 font-mono tracking-tight">
            ${PORTFOLIO_AUGUST_METADATA.highestDebtor.amount}
          </div>
          <div className="text-xs text-gray-700 mt-2 font-semibold truncate">
            {PORTFOLIO_AUGUST_METADATA.highestDebtor.unit} — {PORTFOLIO_AUGUST_METADATA.highestDebtor.name}
          </div>
        </div>

        {/* Menor Saldo Individual */}
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Menor Saldo</span>
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-600">
              <ArrowDownRight size={20} />
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono tracking-tight">
            ${PORTFOLIO_AUGUST_METADATA.lowestDebtor.amount}
          </div>
          <div className="text-xs text-gray-700 mt-2 font-semibold truncate">
            {PORTFOLIO_AUGUST_METADATA.lowestDebtor.unit} — 11404 KAREN VANESSA
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioSummaryCards;
