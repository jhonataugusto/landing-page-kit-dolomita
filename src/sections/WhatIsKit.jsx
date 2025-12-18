import React from 'react';
import Section from '../components/Section';
import StepCard from '../components/StepCard';

export default function WhatIsKit() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">O Que é o Kit de Dolomita?</h2>
            <p className="text-center max-w-2xl mx-auto mb-md text-lg">
                Um ritual completo de cuidados com a pele em 4 passos simples,
                usando o poder mineral da dolomita para resultados transformadores.
            </p>

            {/* Brand Story Badge */}
            <div className="text-center max-w-3xl mx-auto mb-xl p-lg bg-gradient-to-br from-light to-lighter rounded-lg border-2 border-secondary">
                <div className="inline-flex items-center gap-xs mb-sm text-primary font-bold text-lg">
                    <span className="text-2xl">🌿</span>
                    Tradição e Propósito
                </div>
                <p className="text-textLight text-base leading-relaxed m-0">
                    <strong className="text-primary">Há mais de 20 anos no mercado</strong>, combinando tradição e cuidado natural para a sua pele.
                    Cada produto reflete nossa história de amor pela beleza que vem da floresta —
                    com fórmulas naturais, sem químicos agressivos e focadas em resultados reais.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
                <StepCard number="1" name="Esfoliante Facial" />
                <StepCard number="2" name="Máscara Facial" />
                <StepCard number="3" name="Creme Facial" />
                <StepCard number="4" name="Sabonete Facial" />
            </div>
        </Section>
    );
}
