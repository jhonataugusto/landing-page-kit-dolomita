import React from 'react';
import Hero from './sections/Hero';
import WhatIsKit from './sections/WhatIsKit';
import Benefits from './sections/Benefits';
import WhyItWorks from './sections/WhyItWorks';
import BrandStory from './sections/BrandStory';
import CompleteRitual from './sections/CompleteRitual';
import TargetAudience from './sections/TargetAudience';
import Objections from './sections/Objections';
import TrustBadges from './sections/TrustBadges';
import SocialProof from './sections/SocialProof';
import SummaryCTA from './sections/SummaryCTA';
import FinalCTA from './sections/FinalCTA';
import Disclaimer from './sections/Disclaimer';
import MiniCTA from './components/MiniCTA';
import FloatingCTA from './components/FloatingCTA';

function App() {
    return (
        <div className="App">
            <Hero />
            <WhatIsKit />
            <Benefits />
            <WhyItWorks />
            <MiniCTA 
                text="Está pronta para entender por que esse mineral mudou a vida de milhares de mulheres?"
                emoji="👉"
            />
            <BrandStory />
            <CompleteRitual />
            <MiniCTA 
                text="Agora que você viu o ritual completo, descubra se ele é perfeito para você"
                emoji="💚"
            />
            <TargetAudience />
            <Objections />
            <TrustBadges />
            <MiniCTA 
                text="Veja depoimentos reais de quem já transformou a pele com o Kit de Dolomita"
                emoji="✨"
            />
            <SocialProof />
            <SummaryCTA />
            <FinalCTA />
            <Disclaimer />
            <FloatingCTA href="#comprar" />
        </div>
    );
}

export default App;
