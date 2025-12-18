import React, { useState } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';
import '../styles/Hero.css';

export default function Hero() {
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <Section background="gradient-primary" className="fade-in">
            <div style={{
                textAlign: 'center',
                color: 'var(--color-white)',
                padding: 'var(--spacing-xl) 0'
            }}>
                <h1 style={{
                    color: 'var(--color-white)',
                    marginBottom: 'var(--spacing-md)',
                    textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                    lineHeight: '1.2'
                }}>
                    Pele Radiante em 30 Dias: O Segredo da Dolomita que 193 Mil Mulheres Já Descobriram
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                    color: 'var(--color-lighter)',
                    marginBottom: 'var(--spacing-md)',
                    maxWidth: '900px',
                    margin: '0 auto var(--spacing-md)',
                    lineHeight: '1.6'
                }}>
                    O ritual completo de 4 passos que elimina manchas, reduz linhas finas e devolve o brilho natural da sua pele — usando apenas ingredientes da floresta, sem químicos agressivos
                </p>

                {/* Social Proof Badge */}
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    background: 'rgba(255,255,255,0.95)',
                    color: 'var(--color-primary)',
                    padding: 'var(--spacing-sm) var(--spacing-lg)',
                    borderRadius: 'var(--radius-full)',
                    marginBottom: 'var(--spacing-lg)',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-sm)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Mais de 193 mil seguidores confiam na Beleza da Floresta</span>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-md)',
                    alignItems: 'center',
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        ✨ Pele renovada e radiante
                    </div>
                    <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        🌿 100% ingredientes naturais
                    </div>
                    <div style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: 'var(--spacing-sm) var(--spacing-md)',
                        borderRadius: 'var(--radius-md)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        💚 Resultados em 30 dias
                    </div>
                </div>

                <CTAButton href="/oferta">
                    Sim, Quero Minha Pele de Volta Agora
                </CTAButton>

                {/* IMAGEM 1: Hero Product Shot */}
                <div className="hero-image-shell">
                    <div className="hero-image-frame" style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'rgba(255,255,255,0.6)',
                        fontWeight: '600',
                        textAlign: 'center'
                    }}>
                        <img
                            className="hero-image"
                            src="/images/1.png"
                            alt="O Ritual Completo com 4 Produtos Naturais da Floresta"
                            onClick={() => setIsZoomOpen(true)}
                            loading="eager"
                            fetchPriority="high"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = '📦 IMAGEM 1: Kit completo em ambiente luxuoso';
                            }}
                        />
                    </div>
                    <div className="hero-image-caption">
                        O Ritual Completo com 4 Produtos Naturais da Floresta
                    </div>
                </div>

                {isZoomOpen && (
                    <div
                        className="hero-zoom-overlay"
                        role="dialog"
                        aria-modal="true"
                        onClick={() => setIsZoomOpen(false)}
                    >
                        <div className="hero-zoom-modal" onClick={(e) => e.stopPropagation()}>
                            <button
                                type="button"
                                className="hero-zoom-close"
                                aria-label="Fechar zoom"
                                onClick={() => setIsZoomOpen(false)}
                            >
                                ✕
                            </button>
                            <img
                                src="/images/1.png"
                                alt="O Ritual Completo com 4 Produtos Naturais da Floresta"
                            />
                        </div>
                    </div>
                )}
            </div>
        </Section>
    );
}
