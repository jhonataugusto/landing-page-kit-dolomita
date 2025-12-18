import React, { useState, useEffect, useMemo, useCallback } from 'react';
import '../styles/SocialProof.css';

const SocialProof = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(new Set()); // Não carrega nenhum iframe inicialmente
    const [playingVideos, setPlayingVideos] = useState(new Set()); // Vídeos que o usuário quer assistir

    // Função para extrair ID do YouTube - memoizada
    const getYouTubeId = useCallback((url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }, []);

    // Dados dos vídeos de depoimentos reais do YouTube - memoizado
    const videos = useMemo(() => [
        {
            id: 1,
            youtubeUrl: "https://youtu.be/ICImfJGG75I",
            youtubeId: "ICImfJGG75I",
            title: "Depoimento Real - Transformação em 30 dias",
            description: "Cliente compartilha resultados impressionantes"
        },
        {
            id: 2,
            youtubeUrl: "https://youtu.be/gfGHZvk8UwE",
            youtubeId: "gfGHZvk8UwE",
            title: "Antes e Depois - Resultados Visíveis",
            description: "Veja a transformação real da pele"
        },
        {
            id: 3,
            youtubeUrl: "https://youtu.be/NLfp-NjWDA4",
            youtubeId: "NLfp-NjWDA4",
            title: "Depoimento - Rotina Completa",
            description: "Como usar o kit no dia a dia"
        },
        {
            id: 4,
            youtubeUrl: "https://youtu.be/BnanqGr0Chc",
            youtubeId: "BnanqGr0Chc",
            title: "Resultados Incríveis - Testemunho",
            description: "Cliente satisfeita compartilha experiência"
        },
        {
            id: 5,
            youtubeUrl: "https://youtu.be/UI6uEW7fUYA",
            youtubeId: "UI6uEW7fUYA",
            title: "Transformação Real - Depoimento",
            description: "Veja os resultados em primeira pessoa"
        },
        {
            id: 6,
            youtubeUrl: "https://youtu.be/r2IxmctJQCM",
            youtubeId: "r2IxmctJQCM",
            title: "Antes e Depois - Pele Radiante",
            description: "Comparação impressionante de resultados"
        },
        {
            id: 7,
            youtubeUrl: "https://youtu.be/S0m78L9qk98",
            youtubeId: "S0m78L9qk98",
            title: "Depoimento - Kit de Dolomita",
            description: "Experiência completa com o produto"
        },
        {
            id: 8,
            youtubeUrl: "https://youtu.be/MaZSKd0r6A8",
            youtubeId: "MaZSKd0r6A8",
            title: "Resultados em 30 Dias - Testemunho",
            description: "Transformação visível em pouco tempo"
        },
        {
            id: 9,
            youtubeUrl: "https://youtu.be/bBhK7ERAzpQ",
            youtubeId: "bBhK7ERAzpQ",
            title: "Depoimento Real - Cliente Satisfeita",
            description: "Veja o que nossas clientes estão dizendo"
        }
    ], []);

    // Função para obter thumbnail do YouTube - memoizada
    const getYouTubeThumbnail = useCallback((videoId, quality = 'hqdefault') => {
        return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    }, []);

    // Carregar iframe apenas quando usuário interage - memoizada
    // Usa requestIdleCallback para não bloquear thread principal
    const loadVideo = useCallback((videoIndex) => {
        const loadIframe = () => {
            setLoadedVideos(prev => {
                if (prev.has(videoIndex)) return prev;
                return new Set([...prev, videoIndex]);
            });
        };
        
        // Adiar criação do iframe para não bloquear thread principal
        if ('requestIdleCallback' in window) {
            requestIdleCallback(loadIframe, { timeout: 100 });
        } else {
            // Fallback para navegadores sem requestIdleCallback
            setTimeout(loadIframe, 0);
        }
    }, []);

    // Auto-play do carrossel - otimizado para reduzir trabalho da thread principal
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
        }, 15000); // Muda a cada 15 segundos

        return () => clearInterval(interval);
    }, [isAutoPlaying, videos.length]);

    const goToSlide = useCallback((index) => {
        // Usar requestAnimationFrame para evitar reflows forçados
        requestAnimationFrame(() => {
            setCurrentIndex(index);
            setIsAutoPlaying(false);
        });
    }, []);

    const nextSlide = useCallback(() => {
        requestAnimationFrame(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === videos.length - 1 ? 0 : prevIndex + 1
            );
            setIsAutoPlaying(false);
        });
    }, [videos.length]);

    const prevSlide = useCallback(() => {
        requestAnimationFrame(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? videos.length - 1 : prevIndex - 1
            );
            setIsAutoPlaying(false);
        });
    }, [videos.length]);

    // Para o auto-play quando o usuário interage com o vídeo - memoizada
    const handleVideoInteraction = useCallback(() => {
        setIsAutoPlaying(false);
    }, []);

    // Calcula quais vídeos mostrar (atual + 2 adjacentes no mobile, mais no desktop) - memoizado
    const visibleVideos = useMemo(() => {
        const visible = [];
        const totalVideos = videos.length;

        // No mobile mostra 1, no tablet 3, no desktop 3
        for (let i = -1; i <= 1; i++) {
            let index = currentIndex + i;
            if (index < 0) index = totalVideos + index;
            if (index >= totalVideos) index = index - totalVideos;
            visible.push({ ...videos[index], position: i });
        }

        return visible;
    }, [currentIndex, videos]);

    return (
        <section className="social-proof">
            <div className="container">
                <div className="social-proof-header">
                    <span className="social-proof-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        Provas Sociais
                    </span>
                    <h2>Depoimentos Reais de Quem Já Transformou a Pele</h2>
                    <p className="social-proof-subtitle">
                        Veja vídeos reais de clientes compartilhando seus resultados com o Kit de Dolomita.
                        Transformações autênticas, sem filtros, sem edição — apenas resultados verdadeiros.
                    </p>
                    <a
                        href="https://www.instagram.com/belezadaflorestaoficiall/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 'var(--spacing-sm)',
                            marginTop: 'var(--spacing-md)',
                            padding: 'var(--spacing-sm) var(--spacing-lg)',
                            background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                            color: 'white',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '600',
                            fontSize: 'var(--font-size-sm)',
                            boxShadow: 'var(--shadow-md)',
                            cursor: 'pointer',
                            transition: 'all var(--transition-base)',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <span>Siga @belezadaflorestaoficiall — 193 mil+ pessoas já seguem</span>
                    </a>
                </div>

                <div className="carousel-container">
                    <button
                        className="carousel-btn carousel-btn-prev"
                        onClick={prevSlide}
                        aria-label="Vídeo anterior"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <div 
                        className="carousel-track"
                        onMouseEnter={handleVideoInteraction}
                    >
                        {visibleVideos.map((video, idx) => (
                            <div
                                key={`${video.id}-${idx}`}
                                className={`carousel-item ${video.position === 0 ? 'active' : ''} ${video.position < 0 ? 'prev' : ''} ${video.position > 0 ? 'next' : ''}`}
                                onMouseEnter={handleVideoInteraction}
                            >
                                <div className="reel-card">
                                    <div 
                                        className="reel-thumbnail" 
                                        style={{ position: 'relative', paddingBottom: '177.78%', height: 0, overflow: 'hidden', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}
                                        onClick={() => {
                                            const videoIndex = videos.findIndex(v => v.id === video.id);
                                            setPlayingVideos(prev => new Set([...prev, videoIndex]));
                                            loadVideo(videoIndex);
                                        }}
                                    >
                                        {loadedVideos.has(videos.findIndex(v => v.id === video.id)) ? (
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&enablejsapi=0&autoplay=1&controls=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                                                title={video.title}
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
                                                    src={getYouTubeThumbnail(video.youtubeId)}
                                                    alt={video.title}
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
                                    <div className="reel-info">
                                        <h3>{video.title}</h3>
                                        <p>{video.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-btn carousel-btn-next"
                        onClick={nextSlide}
                        aria-label="Próximo vídeo"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="carousel-dots">
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir para vídeo ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="social-stats">
                    <div className="stat-item">
                        <div className="stat-number">193k+</div>
                        <div className="stat-label">Seguidores no Instagram</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">20+ anos</div>
                        <div className="stat-label">De Tradição e Qualidade</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">100%</div>
                        <div className="stat-label">Ingredientes Naturais</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
