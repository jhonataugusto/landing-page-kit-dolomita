import React, { useState, useCallback, memo } from 'react';
import Section from '../components/Section';
import '../styles/BrandStory.css';

const BrandStory = memo(function BrandStory() {
    const [loadedVideos, setLoadedVideos] = useState(new Set());
    
    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);
    
    // Carregar iframe apenas quando usuário interage - memoizada
    // Usa requestIdleCallback para não bloquear thread principal
    const loadVideo = useCallback((videoId) => {
        const loadIframe = () => {
            setLoadedVideos(prev => {
                if (prev.has(videoId)) return prev;
                return new Set([...prev, videoId]);
            });
        };
        
        // Adiar criação do iframe para não bloquear thread principal
        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            // Fallback para navegadores sem requestIdleCallback
            setTimeout(loadIframe, 0);
        }
    }, []);
    
    return (
        <Section background="gradient-secondary">
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-xs)',
                    padding: 'var(--spacing-xs) var(--spacing-md)',
                    background: 'var(--color-primary)',
                    color: 'var(--color-white)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    <span>🌿</span>
                    Nossa História
                </div>

                <h2 style={{ marginBottom: 'var(--spacing-md)' }}>
                    Mais de 20 Anos de História, Uma Nova Descoberta
                </h2>

                <div style={{
                    fontSize: 'var(--font-size-md)',
                    color: 'var(--color-text-light)',
                    lineHeight: '1.9',
                    marginBottom: 'var(--spacing-xl)',
                    textAlign: 'left',
                    maxWidth: '800px',
                    margin: '0 auto var(--spacing-xl)',
                    padding: 'var(--spacing-lg)',
                    background: 'rgba(255,255,255,0.5)',
                    borderRadius: 'var(--radius-lg)'
                }}>
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Há mais de <strong style={{ color: 'var(--color-primary)' }}>20 anos</strong>, a <strong style={{ color: 'var(--color-primary)' }}>Beleza da Floresta</strong> nasceu de uma paixão profunda pela natureza e pelo cuidado genuíno com a pele. Desde o início, nossa missão foi combinar tradição, ciência e ingredientes naturais para criar produtos que realmente transformam.
                    </p>
                    
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Ao longo dessas duas décadas, desenvolvemos dezenas de produtos com extratos da floresta, sempre buscando o melhor que a natureza pode oferecer. Mas foi quando descobrimos <strong style={{ color: 'var(--color-primary)' }}>a dolomita</strong> — um mineral que a natureza criou há milhões de anos, escondido nas profundezas da floresta — que encontramos algo verdadeiramente especial.
                    </p>
                    
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        A dolomita se tornou o coração do nosso <strong style={{ color: 'var(--color-primary)' }}>Kit Completo</strong>, combinando toda a experiência de 20 anos em skincare natural com o poder transformador deste mineral único. Não é apenas mais um produto — é o resultado de duas décadas de pesquisa, dedicação e amor pela beleza que vem da floresta.
                    </p>
                    
                    <p style={{ marginBottom: 'var(--spacing-md)' }}>
                        Hoje, mais de <strong style={{ color: 'var(--color-primary)' }}>193 mil mulheres</strong> fazem parte dessa jornada. Mulheres que descobriram que cuidar da pele não precisa ser complicado — só precisa ser natural, eficaz e verdadeiro. Mulheres que confiam na tradição de 20 anos da Beleza da Floresta.
                    </p>
                    
                    <p style={{ 
                        marginTop: 'var(--spacing-lg)',
                        fontWeight: '600',
                        color: 'var(--color-primary)',
                        textAlign: 'center',
                        fontStyle: 'italic'
                    }}>
                        E você? Está pronta para fazer parte dessa transformação?
                    </p>
                </div>

                {/* Vídeos da Beleza da Floresta */}
                <div 
                    className="brand-videos-container"
                    style={{
                        marginBottom: 'var(--spacing-2xl)',
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: 'var(--spacing-lg)',
                        maxWidth: '1200px',
                        margin: '0 auto var(--spacing-2xl)',
                        padding: '0 var(--spacing-md)'
                    }}
                >
                    {/* Vídeo 16:9 - Principal (Desktop) */}
                    <div style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        background: 'var(--color-white)'
                    }}
                    className="desktop-video"
                    >
                        <div 
                            style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '56.25%', // 16:9 aspect ratio
                                height: 0,
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onClick={() => loadVideo('JJBvTtAttDQ')}
                        >
                            {loadedVideos.has('JJBvTtAttDQ') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube-nocookie.com/embed/JJBvTtAttDQ?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title="Beleza da Floresta - Nossa História"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src={getYouTubeThumbnail('JJBvTtAttDQ')}
                                        alt="Beleza da Floresta - Nossa História"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        loading="lazy"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'}
                                    >
                                        <div style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-primary)" style={{ marginLeft: '6px' }}>
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Vídeo 9:16 - Mobile/Vertical */}
                    <div style={{
                        borderRadius: 'var(--radius-lg)',
                        overflow: 'hidden',
                        boxShadow: 'var(--shadow-lg)',
                        background: 'var(--color-white)',
                        maxWidth: '400px',
                        margin: '0 auto'
                    }}
                    className="mobile-video"
                    >
                        <div 
                            style={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '177.78%', // 9:16 aspect ratio
                                height: 0,
                                overflow: 'hidden',
                                cursor: 'pointer'
                            }}
                            onClick={() => loadVideo('iLl4cxqdb-0')}
                        >
                            {loadedVideos.has('iLl4cxqdb-0') ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube-nocookie.com/embed/iLl4cxqdb-0?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                    title="Beleza da Floresta - Depoimento"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        willChange: 'transform',
                                        transform: 'translateZ(0)'
                                    }}
                                ></iframe>
                            ) : (
                                <>
                                    <img
                                        src={getYouTubeThumbnail('iLl4cxqdb-0')}
                                        alt="Beleza da Floresta - Depoimento"
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        loading="lazy"
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'background 0.3s'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)'}
                                    >
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            background: 'rgba(255, 255, 255, 0.9)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                                        }}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)" style={{ marginLeft: '4px' }}>
                                                <path d="M8 5v14l11-7z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid" style={{
                    gap: 'var(--spacing-lg)',
                    marginTop: 'var(--spacing-2xl)'
                }}>
                    <div className="card" style={{
                        textAlign: 'left',
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-xl)'
                    }}>
                        <div style={{
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)'
                        }}>🌱</div>
                        <h3 style={{
                            fontSize: 'var(--font-size-md)',
                            marginBottom: 'var(--spacing-sm)',
                            color: 'var(--color-primary)'
                        }}>
                            Ingredientes da Floresta
                        </h3>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Cada fórmula é desenvolvida com extratos naturais cuidadosamente selecionados,
                            sem parabenos, sulfatos ou químicos agressivos. Apenas o melhor que a natureza pode oferecer.
                        </p>
                    </div>

                    <div className="card" style={{
                        textAlign: 'left',
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-xl)'
                    }}>
                        <div style={{
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)'
                        }}>🔬</div>
                        <h3 style={{
                            fontSize: 'var(--font-size-md)',
                            marginBottom: 'var(--spacing-sm)',
                            color: 'var(--color-primary)'
                        }}>
                            Ciência e Tradição
                        </h3>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Unimos conhecimentos ancestrais sobre plantas medicinais com pesquisas científicas modernas,
                            garantindo produtos eficazes, seguros e testados dermatologicamente.
                        </p>
                    </div>

                    <div className="card" style={{
                        textAlign: 'left',
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-xl)'
                    }}>
                        <div style={{
                            fontSize: '2.5rem',
                            marginBottom: 'var(--spacing-md)'
                        }}>💚</div>
                        <h3 style={{
                            fontSize: 'var(--font-size-md)',
                            marginBottom: 'var(--spacing-sm)',
                            color: 'var(--color-primary)'
                        }}>
                            Compromisso com Você
                        </h3>
                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Nossa comunidade de mais de 193 mil seguidores no Instagram é prova do nosso compromisso
                            com transparência, educação e resultados reais. Cada cliente é parte da nossa história.
                        </p>
                    </div>
                </div>

                <div style={{
                    marginTop: 'var(--spacing-2xl)',
                    padding: 'var(--spacing-xl)',
                    background: 'rgba(0, 49, 46, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    borderLeft: '4px solid var(--color-primary)'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        fontStyle: 'italic',
                        color: 'var(--color-primary)',
                        fontWeight: '500',
                        lineHeight: '1.8',
                        margin: 0
                    }}>
                        "Cada produto reflete nossa história de amor pela beleza que vem da floresta.
                        Acreditamos que cuidar da pele é um ato de amor próprio, e estamos aqui para
                        acompanhar você nessa jornada de transformação."
                    </p>
                    <p style={{
                        marginTop: 'var(--spacing-md)',
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-light)',
                        fontWeight: '600'
                    }}>
                        — Equipe Beleza da Floresta
                    </p>
                </div>
            </div>
        </Section>
    );
});

export default BrandStory;
