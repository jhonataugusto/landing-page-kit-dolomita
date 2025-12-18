import React from 'react';

export default function StepCard({ number, name }) {
    return (
        <div className="card text-center">
            <div style={{
                width: '64px',
                height: '64px',
                borderRadius: 'var(--radius-full)',
                background: 'linear-gradient(135deg, var(--color-highlight), var(--color-secondary))',
                color: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '800',
                fontSize: 'var(--font-size-xl)',
                margin: '0 auto var(--spacing-md)'
            }}>
                {number}
            </div>
            <h3 style={{ fontSize: 'var(--font-size-md)', marginBottom: 0 }}>{name}</h3>
        </div>
    );
}
