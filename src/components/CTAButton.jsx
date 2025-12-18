import React from 'react';

export default function CTAButton({ children, onClick, href }) {
    const buttonStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem 3rem',
        minHeight: '56px',
        fontSize: 'var(--font-size-md)',
        fontWeight: '700',
        textDecoration: 'none',
        color: 'var(--color-white)',
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        borderRadius: 'var(--radius-full)',
        border: 'none',
        cursor: 'pointer',
        boxShadow: 'var(--shadow-lg)',
        transition: 'all var(--transition-base)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
    };

    const Component = href ? 'a' : 'button';

    return (
        <Component
            className="pulse"
            style={buttonStyle}
            onClick={onClick}
            href={href}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 49, 46, 0.3)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
        >
            {children}
        </Component>
    );
}
