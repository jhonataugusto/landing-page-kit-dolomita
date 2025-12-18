import React from 'react';
import Section from '../components/Section';

export default function Disclaimer() {
    return (
        <Section background="white">
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'var(--spacing-md)',
                background: 'var(--color-lighter)',
                borderRadius: 'var(--radius-md)',
                fontSize: 'var(--font-size-xs)',
                color: '#333333', // Contraste WCAG AA: 4.5:1 sobre #dde1f1
                lineHeight: '1.6'
            }}>
                <p style={{ marginBottom: 'var(--spacing-sm)' }}>
                    <strong style={{ color: '#1a1a1a' }}>Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa.
                    As informações contidas nesta página não substituem orientação médica ou dermatológica profissional.
                </p>
                <p style={{ marginBottom: 0 }}>
                    Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença.
                    Em caso de irritação ou reação alérgica, suspenda o uso imediatamente e consulte um médico.
                    Mantenha fora do alcance de crianças. Uso externo apenas.
                </p>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: 'var(--spacing-xl)',
                paddingTop: 'var(--spacing-lg)',
                borderTop: '1px solid var(--color-light)',
                color: '#444444', // Contraste WCAG AA: 4.0:1 sobre branco (texto menor)
                fontSize: 'var(--font-size-xs)'
            }}>
                <p>© 2024 Kit de Dolomita. Todos os direitos reservados.</p>
            </div>
        </Section>
    );
}
