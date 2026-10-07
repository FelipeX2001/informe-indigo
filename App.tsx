import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AdminSection from './components/AdminSection';
import OpsAndCoexistence from './components/OpsAndCoexistence';
import PaymentsTableSection from './components/PaymentsTableSection';
import ActivityCorrespondenceSection from './components/ActivityCorrespondenceSection';
import PortfolioStatusSection from './components/PortfolioStatusSection';
import ConclusionsAndObservationsSection from './components/ConclusionsAndObservationsSection';
import EvidenceGallery from './components/EvidenceGallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-indigo-bg min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AdminSection />
        <OpsAndCoexistence />
        <PaymentsTableSection />
        <ActivityCorrespondenceSection />
        <PortfolioStatusSection />
        <ConclusionsAndObservationsSection />
        <EvidenceGallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;
