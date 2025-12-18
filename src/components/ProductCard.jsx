import React, { memo } from 'react';

const ProductCard = memo(function ProductCard({ number, name, emoji, benefits, usage, composition }) {
    return (
        <div className="card" style={{ height: '100%' }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                marginBottom: 'var(--spacing-md)'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-full)',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                    color: 'var(--color-white)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    fontSize: 'var(--font-size-md)',
                    flexShrink: 0
                }}>
                    {number}
                </div>
                <div>
                    <h3 style={{ marginBottom: '0.25rem', fontSize: 'var(--font-size-md)' }}>
                        {emoji} {name}
                    </h3>
                </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <h4 style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Benefícios:
                </h4>
                <p style={{ fontSize: 'var(--font-size-xs)' }}>{benefits}</p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <h4 style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Como usar:
                </h4>
                <p style={{ fontSize: 'var(--font-size-xs)' }}>{usage}</p>
            </div>

            <div>
                <h4 style={{
                    fontSize: 'var(--font-size-sm)',
                    fontWeight: '600',
                    color: 'var(--color-accent)',
                    marginBottom: 'var(--spacing-xs)'
                }}>
                    Composição:
                </h4>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                    {composition}
                </p>
            </div>
        </div>
    );
});

export default ProductCard;
