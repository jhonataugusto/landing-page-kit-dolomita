import React from 'react';

export default function BenefitItem({ children }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: 'var(--spacing-sm)',
            marginBottom: 'var(--spacing-sm)'
        }} className="fade-in">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                style={{ flexShrink: 0, marginTop: '2px' }}
            >
                <circle cx="12" cy="12" r="12" fill="var(--color-highlight)" />
                <path
                    d="M7 12L10.5 15.5L17 9"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <p style={{ margin: 0, color: 'var(--color-text)' }}>{children}</p>
        </div>
    );
}
