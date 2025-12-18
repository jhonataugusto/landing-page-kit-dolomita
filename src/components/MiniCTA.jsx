import React, { memo } from 'react';

const MiniCTA = memo(function MiniCTA({ text, emoji = '👉' }) {
    return (
        <div style={{
            padding: 'var(--spacing-xl) var(--spacing-md)',
            textAlign: 'center',
            background: 'linear-gradient(180deg, transparent 0%, rgba(0, 49, 46, 0.03) 50%, transparent 100%)'
        }}>
            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-secondary)',
                boxShadow: '0 2px 10px rgba(0, 49, 46, 0.05)'
            }}>
                <p style={{
                    fontSize: 'var(--font-size-md)',
                    color: 'var(--color-primary)',
                    fontWeight: '600',
                    lineHeight: '1.7',
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap'
                }}>
                    <span>{emoji}</span>
                    <span>{text}</span>
                </p>
            </div>
        </div>
    );
});

export default MiniCTA;

