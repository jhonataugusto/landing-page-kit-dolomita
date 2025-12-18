import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';
import CTAButton from '../components/CTAButton';

export default function TargetAudience() {
    return (
        <Section background="white">
            <h2 className="text-center">Este Kit Foi Feito Para Você Se...</h2>
            <p className="text-center" style={{
                maxWidth: '700px',
                margin: '0 auto var(--spacing-xl)',
                fontSize: 'var(--font-size-md)'
            }}>
                Você se identifica com alguma dessas situações?
            </p>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                display: 'grid',
                gap: 'var(--spacing-md)'
            }}>
                <BenefitItem>
                    Você já gastou mais de R$ 500 em cremes e tratamentos sem ver resultados reais
                </BenefitItem>
                <BenefitItem>
                    Você está cansada de produtos cheios de químicos agressivos que irritam sua pele
                </BenefitItem>
                <BenefitItem>
                    Você quer resultados em 30 dias, não em 6 meses de espera
                </BenefitItem>
                <BenefitItem>
                    Você tem manchas, linhas finas ou pele sem brilho que te incomodam
                </BenefitItem>
                <BenefitItem>
                    Você busca uma solução natural, eficaz e que realmente funcione
                </BenefitItem>
                <BenefitItem>
                    Você quer um ritual completo e prático, sem complicação
                </BenefitItem>
                <BenefitItem>
                    Você valoriza ingredientes da natureza e produtos sustentáveis
                </BenefitItem>
                <BenefitItem>
                    Você está pronta para investir em si mesma e ver uma transformação real
                </BenefitItem>
            </div>

            {/* CTA */}
            <div style={{
                marginTop: 'var(--spacing-2xl)',
                textAlign: 'center'
            }}>
                <CTAButton href="#comprar">
                    Sim, Este Kit É Para Mim
                </CTAButton>
            </div>
        </Section>
    );
}
