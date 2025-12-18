import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function SummaryCTA() {
    return (
        <Section background="gradient-primary">
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center',
                color: 'var(--color-white)'
            }}>
                <h2 style={{
                    fontSize: 'var(--font-size-2xl)',
                    marginBottom: 'var(--spacing-lg)',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap'
                }}>
                    <span>🌟</span>
                    <span>Em Resumo, Por Que Você Vai Amar o Kit de Dolomita:</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gap: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-xl)',
                    textAlign: 'left',
                    maxWidth: '700px',
                    margin: '0 auto var(--spacing-xl)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✅</span>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 0,
                            lineHeight: '1.7',
                            color: 'var(--color-white)'
                        }}>
                            <strong>Resultados em até 30 dias</strong> (visíveis, reais e duradouros)
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✅</span>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 0,
                            lineHeight: '1.7',
                            color: 'var(--color-white)'
                        }}>
                            <strong>Fórmulas naturais</strong>, seguras e testadas dermatologicamente
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✅</span>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 0,
                            lineHeight: '1.7',
                            color: 'var(--color-white)'
                        }}>
                            <strong>Ritual completo</strong>, prático e prazeroso (sem complicação!)
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✅</span>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 0,
                            lineHeight: '1.7',
                            color: 'var(--color-white)'
                        }}>
                            <strong>Garantia de Satisfação:</strong> se não sentir melhora em 30 dias, 50% de desconto no próximo pedido com orientação personalizada
                        </p>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 'var(--spacing-md)',
                        padding: 'var(--spacing-md)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>✅</span>
                        <p style={{
                            fontSize: 'var(--font-size-md)',
                            margin: 0,
                            lineHeight: '1.7',
                            color: 'var(--color-white)'
                        }}>
                            <strong>193 mil mulheres</strong> já começaram essa transformação — agora é sua vez
                        </p>
                    </div>
                </div>

                <div style={{
                    marginBottom: 'var(--spacing-lg)',
                    padding: 'var(--spacing-lg)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    borderRadius: 'var(--radius-lg)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-lg)',
                        fontWeight: '600',
                        margin: 0,
                        color: 'var(--color-white)',
                        lineHeight: '1.7'
                    }}>
                        👉 Comece agora e sinta a diferença no espelho ainda esse mês!
                    </p>
                </div>

                <CTAButton href="/oferta">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO AGORA
                </CTAButton>
            </div>
        </Section>
    );
}

