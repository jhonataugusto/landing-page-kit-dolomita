import React from 'react';
import Section from '../components/Section';
import StepCard from '../components/StepCard';

export default function WhatIsKit() {
    return (
        <Section background="white">
            <h2 className="text-center">O Que é o Kit de Dolomita?</h2>
            <p className="text-center" style={{
                maxWidth: '700px',
                margin: '0 auto var(--spacing-md)',
                fontSize: 'var(--font-size-md)'
            }}>
                Um ritual completo de cuidados com a pele em 4 passos simples,
                usando o poder mineral da dolomita para resultados transformadores.
            </p>

            {/* Brand Story Badge */}
            <div style={{
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto var(--spacing-xl)',
                padding: 'var(--spacing-lg)',
                background: 'linear-gradient(135deg, var(--color-light), var(--color-lighter))',
                borderRadius: 'var(--radius-lg)',
                border: '2px solid var(--color-secondary)'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    marginBottom: 'var(--spacing-sm)',
                    color: 'var(--color-primary)',
                    fontWeight: '700',
                    fontSize: 'var(--font-size-md)'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>🌿</span>
                    Tradição e Propósito
                </div>
                <p style={{
                    color: 'var(--color-text-light)',
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: '1.7',
                    margin: 0
                }}>
                    <strong style={{ color: 'var(--color-primary)' }}>Há mais de 20 anos no mercado</strong>, combinando tradição e cuidado natural para a sua pele.
                    Cada produto reflete nossa história de amor pela beleza que vem da floresta —
                    com fórmulas naturais, sem químicos agressivos e focadas em resultados reais.
                </p>
            </div>

            <div className="grid" style={{ marginTop: 'var(--spacing-xl)' }}>
                <StepCard number="1" name="Esfoliante Facial" />
                <StepCard number="2" name="Máscara Facial" />
                <StepCard number="3" name="Creme Facial" />
                <StepCard number="4" name="Sabonete Facial" />
            </div>
        </Section>
    );
}
