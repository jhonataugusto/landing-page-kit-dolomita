import React from 'react';

export default function Button({ children, variant = 'primary', onClick, icon, ...props }) {
    const variantClass = variant === 'primary' ? 'btn-primary' :
        variant === 'secondary' ? 'btn-secondary' :
            'btn-outline';

    return (
        <button
            className={`btn ${variantClass}`}
            onClick={onClick}
            {...props}
        >
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
}
