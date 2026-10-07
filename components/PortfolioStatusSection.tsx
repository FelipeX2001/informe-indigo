import React from 'react';
import { 
  Wallet, 
  FileSpreadsheet, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Building2,
  Layers
} from 'lucide-react';
import PortfolioSummaryCards from './portfolio/PortfolioSummaryCards';
import PortfolioConceptsSection from './portfolio/PortfolioConceptsSection';
import PortfolioDebtorsSection from './portfolio/PortfolioDebtorsSection';
import PortfolioTowersSection from './portfolio/PortfolioTowersSection';
import PortfolioDistributionSection from './portfolio/PortfolioDistributionSection';
import PortfolioEvolutionSection from './portfolio/PortfolioEvolutionSection';
import { PORTFOLIO_AUGUST_METADATA } from '../portfolioAugustData';

export const PortfolioStatusSection: React.FC = () => {
  return (
    <section id="cartera" className="py-24 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} className="text-indigo-600" />
            <span>Datos Oficiales Certificados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-indigo-dark flex items-center justify-center gap-3 tracking-tight">
            <Wallet className="text-indigo-main" size={38} />
            Parte IV — Cartera al 31 de agosto de 2026
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Consolidación y auditoría integral del recaudo de expensas comunes, intereses moratorios, sanciones y evolución histórica en el Conjunto Residencial Índigo P.H.
          </p>
        </div>

        {/* 10. Resumen de la cartera */}
        <PortfolioSummaryCards />

        {/* 11. Composición por concepto */}
        <PortfolioConceptsSection />

        {/* 12. Detalle general y concentración */}
        <PortfolioDebtorsSection />

        {/* 13. Detalle por torre y bloque */}
        <PortfolioTowersSection />

        {/* 14. Distribución de saldos por rango */}
        <PortfolioDistributionSection />

        {/* 15. Evolución de la cartera en 2026 */}
        <PortfolioEvolutionSection />

      </div>
    </section>
  );
};

export default PortfolioStatusSection;
