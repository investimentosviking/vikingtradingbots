import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ProductsSection from '@/components/ProductsSection';
import { VikingManagementPreview } from '@/components/VikingManagementCards';
import PricingSection from '@/components/PricingSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import StartFreeModal from '@/components/StartFreeModal';

const Index = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar onStartFree={() => setShowModal(true)} />
        <Hero onStartFree={() => setShowModal(true)} />
        <StatsBar />
        <ProductsSection />
        <PricingSection />
        <CtaSection />
        <Footer />
      </div>
      {showModal && <StartFreeModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Index;
