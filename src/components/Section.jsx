import React from 'react';

export default function Section({ children, className = '', background = 'white', id }) {
    const bgClass = background === 'gradient-primary' ? 'gradient-primary' :
        background === 'gradient-secondary' ? 'gradient-secondary' :
            background === 'light' ? '' : '';

    const sectionStyle = background === 'light' ? { backgroundColor: 'var(--color-light)' } : {};

    return (
        <section
            id={id}
            className={`${bgClass} ${className}`}
            style={{
                padding: 'var(--spacing-xl) 0',
                ...sectionStyle
            }}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
}
