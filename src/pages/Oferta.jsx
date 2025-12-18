import React, { lazy, Suspense, useEffect } from 'react';
import Hero from '../sections/Hero';
import WhatIsKit from '../sections/WhatIsKit';
import Benefits from '../sections/Benefits';
import MiniCTA from '../components/MiniCTA';
import FloatingCTA from '../components/FloatingCTA';
import { LazySection } from '../components/LazySection';
// Importar FinalCTA diretamente (sem lazy) para garantir que carregue imediatamente
import FinalCTA from '../sections/FinalCTA';

// Lazy load de componentes abaixo da dobra para reduzir JavaScript inicial
const WhyItWorks = lazy(() => import('../sections/WhyItWorks'));
const BrandStory = lazy(() => import('../sections/BrandStory'));
const CompleteRitual = lazy(() => import('../sections/CompleteRitual'));
const TargetAudience = lazy(() => import('../sections/TargetAudience'));
const Objections = lazy(() => import('../sections/Objections'));
const TrustBadges = lazy(() => import('../sections/TrustBadges'));
const SocialProof = lazy(() => import('../sections/SocialProof'));
const SummaryCTA = lazy(() => import('../sections/SummaryCTA'));
const Disclaimer = lazy(() => import('../sections/Disclaimer'));

export default function Oferta() {
    // Scroll suave para a seção de ofertas quando a página carregar
    useEffect(() => {
        // Pequeno delay para garantir que o DOM está renderizado
        const timer = setTimeout(() => {
            const element = document.getElementById('comprar');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            <main>
            <Hero />
            <WhatIsKit />
            <Benefits />
            <LazySection>
                <WhyItWorks />
            </LazySection>
            <MiniCTA 
                text="Está pronta para entender por que esse mineral mudou a vida de milhares de mulheres?"
                emoji="👉"
            />
            <LazySection>
                <BrandStory />
            </LazySection>
            <LazySection>
                <CompleteRitual />
            </LazySection>
            <MiniCTA 
                text="Agora que você viu o ritual completo, descubra se ele é perfeito para você"
                emoji="💚"
            />
            <LazySection>
                <TargetAudience />
            </LazySection>
            <LazySection>
                <Objections />
            </LazySection>
            <LazySection>
                <TrustBadges />
            </LazySection>
            <MiniCTA 
                text="Veja depoimentos reais de quem já transformou a pele com o Kit de Dolomita"
                emoji="✨"
            />
            <LazySection>
                <SocialProof />
            </LazySection>
            <LazySection>
                <SummaryCTA />
            </LazySection>
            {/* FinalCTA carregado diretamente (sem lazy) para garantir disponibilidade imediata */}
            <FinalCTA />
            <LazySection>
                <Disclaimer />
            </LazySection>
            </main>
            <FloatingCTA href="/oferta" />
        </div>
    );
}

