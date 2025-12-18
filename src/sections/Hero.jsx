import React, { useState } from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function Hero() {
    const [isZoomOpen, setIsZoomOpen] = useState(false);

    return (
        <Section background="gradient-primary" className="fade-in">
            <div className="text-center text-white py-xl">
                <h1 className="text-white mb-md text-[clamp(1.75rem,5vw,2.5rem)] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
                    Pele Radiante em 30 Dias: O Segredo da Dolomita que 193 Mil Mulheres Já Descobriram
                </h1>

                <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-lighter mb-md max-w-3xl mx-auto leading-relaxed">
                    O ritual completo de 4 passos que elimina manchas, reduz linhas finas e devolve o brilho natural da sua pele — usando apenas ingredientes da floresta, sem químicos agressivos
                </p>

                {/* Social Proof Badge */}
                <div className="inline-flex items-center gap-xs bg-white/95 text-primary px-lg py-sm rounded-full mb-lg font-semibold text-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span>Mais de 193 mil seguidores confiam na Beleza da Floresta</span>
                </div>

                <div className="flex flex-col gap-md items-center mb-xl">
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        ✨ Pele renovada e radiante
                    </div>
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        🌿 100% ingredientes naturais
                    </div>
                    <div className="bg-white/10 px-md py-sm rounded-md backdrop-blur-md">
                        💚 Resultados em 30 dias
                    </div>
                </div>

                <CTAButton href="/oferta">
                    Sim, Quero Minha Pele de Volta Agora
                </CTAButton>

                {/* IMAGEM 1: Hero Product Shot */}
                <div className="hero-image-shell">
                    <div className="hero-image-frame text-sm text-white/60 font-semibold text-center">
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
