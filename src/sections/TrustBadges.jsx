import React from 'react';
import Section from '../components/Section';

export default function TrustBadges() {
    return (
        <Section background="light">
            <h2 className="text-center">Compre com Confiança</h2>

            <div className="grid" style={{
                marginTop: 'var(--spacing-xl)',
                maxWidth: '900px',
                margin: 'var(--spacing-xl) auto 0'
            }}>
                <div className="card text-center">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🔒</div>
                    <h3 style={{ fontSize: 'var(--font-size-md)' }}>Pagamento Seguro</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                        Seus dados protegidos com criptografia SSL
                    </p>
                </div>

                <div className="card text-center">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>📦</div>
                    <h3 style={{ fontSize: 'var(--font-size-md)' }}>Entrega Rápida</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                        Receba em até 7 dias úteis
                    </p>
                </div>

                <div className="card text-center">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>✅</div>
                    <h3 style={{ fontSize: 'var(--font-size-md)' }}>Garantia de Qualidade</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                        Produtos testados dermatologicamente
                    </p>
                </div>

                <div className="card text-center">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🌿</div>
                    <h3 style={{ fontSize: 'var(--font-size-md)' }}>100% Natural</h3>
                    <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 0 }}>
                        Sem parabenos, sulfatos ou ingredientes tóxicos
                    </p>
                </div>
            </div>
        </Section>
    );
}
