import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';
import '../styles/FinalCTA.css';

export default function FinalCTA() {
    return (
        <Section background="white" id="comprar">
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                textAlign: 'center',
                width: '100%',
                padding: '0 var(--spacing-md)'
            }}>
                <h2 style={{
                    fontSize: 'var(--font-size-2xl)',
                    marginBottom: 'var(--spacing-md)',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-sm)',
                    flexWrap: 'wrap'
                }}>
                    <span>💎</span>
                    <span>ESCOLHA SUA TRANSFORMAÇÃO</span>
                </h2>

                <p style={{
                    fontSize: 'var(--font-size-md)',
                    color: 'var(--color-text-light)',
                    marginBottom: 'var(--spacing-2xl)',
                    maxWidth: '800px',
                    margin: '0 auto var(--spacing-2xl)',
                    lineHeight: '1.7'
                }}>
                    Transforme sua pele com o poder da dolomita natural, no seu ritmo e do seu jeito.
                </p>

                <div className="offers-grid">
                    {/* Oferta 1 - Ritual Completo */}
                    <div style={{
                        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-2xl)',
                        color: 'var(--color-white)',
                        boxShadow: 'var(--shadow-lg)',
                        border: '3px solid var(--color-primary)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 'var(--spacing-md)',
                            right: 'var(--spacing-md)',
                            background: 'rgba(255,255,255,0.2)',
                            padding: 'var(--spacing-xs) var(--spacing-md)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--font-size-xs)',
                            fontWeight: '600'
                        }}>
                            ⭐ MAIS POPULAR
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-md)',
                            fontSize: 'var(--font-size-md)',
                            fontWeight: '600'
                        }}>
                            <span>👉</span>
                            <span>Oferta 1 — Ritual de Transformação Completa</span>
                        </div>

                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            marginBottom: 'var(--spacing-lg)',
                            opacity: 0.95
                        }}>
                            Para quem quer o tratamento completo e resultados visíveis em 30 dias
                        </p>

                        <div style={{
                            background: 'rgba(255,255,255,0.15)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: '600',
                                marginBottom: 'var(--spacing-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--spacing-sm)'
                            }}>
                                <span>💚</span>
                                <span>Kit com 4 produtos:</span>
                            </div>
                            <div style={{
                                textAlign: 'left',
                                fontSize: 'var(--font-size-sm)',
                                lineHeight: '2'
                            }}>
                                ✓ Sabonete Facial<br/>
                                ✓ Máscara Detox<br/>
                                ✓ Esfoliante Suave<br/>
                                ✓ Creme Facial Regenerador
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(255,255,255,0.15)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: '600',
                                marginBottom: 'var(--spacing-md)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--spacing-sm)'
                            }}>
                                <span>🎁</span>
                                <span>Inclui:</span>
                            </div>
                            <div style={{
                                textAlign: 'left',
                                fontSize: 'var(--font-size-sm)',
                                lineHeight: '2'
                            }}>
                                ✓ Frete Grátis para todo o Brasil
                            </div>
                        </div>

                        <div style={{
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-3xl)',
                                fontWeight: '800',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                R$ 459,90
                            </div>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                opacity: 0.9
                            }}>
                                ou 3x de R$ 153,30 sem juros
                            </div>
                        </div>

                        <div style={{
                            fontSize: 'var(--font-size-xs)',
                            marginBottom: 'var(--spacing-lg)',
                            opacity: 0.9
                        }}>
                            🔐 Estoque limitado | Produção 100% natural
                        </div>

                        <CTAButton href="https://www.belezadafloresta.com.br/produtos/kit-completo-de-dolomita/">
                            QUERO O RITUAL COMPLETO
                        </CTAButton>
                        <p style={{
                            marginTop: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-xs)',
                            opacity: 0.95,
                            marginBottom: 0
                        }}>
                            👆 Escolha ideal para quem quer transformação total em 30 dias.
                        </p>
                    </div>

                    {/* Oferta 2 - Ritual Essencial */}
                    <div style={{
                        background: 'var(--color-white)',
                        borderRadius: 'var(--radius-lg)',
                        padding: 'var(--spacing-2xl)',
                        boxShadow: 'var(--shadow-md)',
                        border: '2px solid var(--color-secondary)'
                    }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'var(--spacing-sm)',
                            marginBottom: 'var(--spacing-md)',
                            fontSize: 'var(--font-size-md)',
                            fontWeight: '600',
                            color: 'var(--color-primary)'
                        }}>
                            <span>👉</span>
                            <span>Oferta 2 — Ritual Essencial (Mini Kit)</span>
                        </div>

                        <p style={{
                            fontSize: 'var(--font-size-sm)',
                            color: 'var(--color-text-light)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            Para quem quer começar agora e sentir os primeiros resultados
                        </p>

                        <div style={{
                            background: 'rgba(0, 49, 46, 0.05)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: '600',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--spacing-sm)'
                            }}>
                                <span>💚</span>
                                <span>Kit com 2 produtos:</span>
                            </div>
                            <div style={{
                                textAlign: 'left',
                                fontSize: 'var(--font-size-sm)',
                                lineHeight: '2',
                                color: 'var(--color-text-light)'
                            }}>
                                ✓ Sabonete Facial<br/>
                                ✓ Máscara Detox
                            </div>
                        </div>

                        <div style={{
                            background: 'rgba(0, 49, 46, 0.05)',
                            padding: 'var(--spacing-lg)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                fontWeight: '600',
                                marginBottom: 'var(--spacing-md)',
                                color: 'var(--color-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--spacing-sm)'
                            }}>
                                <span>🎁</span>
                                <span>Inclui:</span>
                            </div>
                            <div style={{
                                textAlign: 'left',
                                fontSize: 'var(--font-size-sm)',
                                lineHeight: '2',
                                color: 'var(--color-text-light)'
                            }}>
                                ✓ Frete Grátis
                            </div>
                        </div>

                        <div style={{
                            marginBottom: 'var(--spacing-lg)'
                        }}>
                            <div style={{
                                fontSize: 'var(--font-size-3xl)',
                                fontWeight: '800',
                                color: 'var(--color-primary)',
                                marginBottom: 'var(--spacing-xs)'
                            }}>
                                R$ 249,90
                            </div>
                            <div style={{
                                fontSize: 'var(--font-size-sm)',
                                color: 'var(--color-text-light)'
                            }}>
                                ou 3x de R$ 83,30 sem juros
                            </div>
                        </div>

                        <p style={{
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--color-text-light)',
                            marginBottom: 'var(--spacing-lg)',
                            fontStyle: 'italic'
                        }}>
                            ✨ Ideal para quem quer testar e começar sua transformação com praticidade
                        </p>

                        <CTAButton href="https://www.belezadafloresta.com.br/produtos/kit-basico-de-dolomita/">
                            QUERO COMEÇAR COM O MINI KIT
                        </CTAButton>
                        <p style={{
                            marginTop: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-xs)',
                            color: 'var(--color-text-light)',
                            marginBottom: 0
                        }}>
                            👆 Comece com o básico e descubra a potência da dolomita.
                        </p>
                    </div>
                </div>

                {/* Quebra visual antes da dica */}
                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    padding: '0 var(--spacing-md)',
                    marginTop: 'var(--spacing-md)',
                    marginBottom: 'var(--spacing-md)'
                }}>
                    <p style={{
                        textAlign: 'center',
                        color: 'var(--color-text-light)',
                        fontWeight: '600',
                        margin: 0
                    }}>
                        💭 Ainda em dúvida entre as duas opções?
                    </p>
                </div>

                {/* Dica da Especialista (logo após o Mini Kit) */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(0, 49, 46, 0.05), rgba(68, 100, 92, 0.05))',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-lg)',
                    borderLeft: '4px solid var(--color-primary)',
                    textAlign: 'left',
                    maxWidth: '900px',
                    margin: '0 auto var(--spacing-2xl)',
                    marginTop: 'var(--spacing-xl)'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600',
                        color: 'var(--color-primary)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        💡 Dica da nossa especialista:
                    </p>
                    <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.7',
                        margin: 0
                    }}>
                        A maioria das nossas clientes que começa com o Ritual Essencial acaba migrando para o Completo no primeiro mês.
                        Se você já sabe que quer resultados rápidos e visíveis, o <strong style={{ color: 'var(--color-primary)' }}>Ritual Completo é sua melhor escolha</strong>.
                    </p>
                </div>

                {/* Garantia */}
                <div style={{
                    marginTop: 'var(--spacing-2xl)',
                    padding: 'var(--spacing-lg)',
                    background: 'rgba(0, 49, 46, 0.05)',
                    borderRadius: 'var(--radius-lg)',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-light)',
                        marginBottom: 'var(--spacing-sm)'
                    }}>
                        🔒 Compra 100% segura e protegida
                    </p>
                    <p style={{
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        marginBottom: 'var(--spacing-xs)'
                    }}>
                        ✅ Garantia de Satisfação com Continuidade Exclusiva
                    </p>
                    <p style={{
                        fontSize: 'var(--font-size-xs)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.6',
                        margin: 0
                    }}>
                        Se após 30 dias de uso consistente você não sentir melhora clara na sua pele, oferecemos <strong>50% de desconto no próximo pedido</strong> com orientação direta dos nossos especialistas.
                    </p>
                </div>

                {/* Mini FAQ (pós-oferta) */}
                <div style={{
                    marginTop: 'var(--spacing-2xl)',
                    maxWidth: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '0 var(--spacing-md)'
                }}>
                    <h3 style={{
                        color: 'var(--color-primary)',
                        marginBottom: 'var(--spacing-md)',
                        textAlign: 'center'
                    }}>
                        ❓ Ainda com dúvidas?
                    </h3>

                    <div style={{
                        display: 'grid',
                        gap: 'var(--spacing-md)'
                    }}>
                        <div className="card" style={{ textAlign: 'left' }}>
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-primary)' }}>
                                🔹 O produto é indicado para todos os tipos de pele?
                            </p>
                            <p style={{ marginTop: 'var(--spacing-xs)', marginBottom: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                Sim! A fórmula é 100% natural e equilibrada para peles oleosas, mistas e sensíveis.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'left' }}>
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-primary)' }}>
                                🔹 Preciso usar os 4 produtos todos os dias?
                            </p>
                            <p style={{ marginTop: 'var(--spacing-xs)', marginBottom: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                O ritual completo pode ser adaptado à sua rotina. Você pode usar todos os dias ou alternar conforme sua necessidade.
                            </p>
                        </div>

                        <div className="card" style={{ textAlign: 'left' }}>
                            <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-primary)' }}>
                                🔹 Em quanto tempo recebo meu kit?
                            </p>
                            <p style={{ marginTop: 'var(--spacing-xs)', marginBottom: 0, color: 'var(--color-text-light)', lineHeight: '1.7' }}>
                                Em até 7 dias úteis, com rastreamento e frete gratuito para todo o Brasil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
