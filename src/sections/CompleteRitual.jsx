import React from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

export default function CompleteRitual() {
    return (
        <Section background="gradient-secondary">
            <h2 className="text-center" style={{ color: 'var(--color-primary)', fontSize: 'var(--font-size-2xl)' }}>
                💚 O Ritual Completo em 4 Passos
            </h2>
            <p className="text-center" style={{
                maxWidth: '800px',
                margin: '0 auto var(--spacing-xl)',
                fontSize: 'var(--font-size-md)',
                color: 'var(--color-text)',
                lineHeight: '1.7'
            }}>
                Cada etapa foi pensada para agir em sinergia e transformar sua pele como um verdadeiro SPA natural.
            </p>

            {/* Passos Sensoriais */}
            <div style={{
                maxWidth: '900px',
                margin: '0 auto var(--spacing-2xl)',
                display: 'grid',
                gap: 'var(--spacing-lg)',
                padding: '0 var(--spacing-md)',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {/* Passo 1 */}
                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-primary)',
                    transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>1️⃣</span>
                        <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-primary)',
                            margin: 0
                        }}>
                            Passo 1: Esfoliante Facial de Dolomita
                        </h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-md)',
                        fontSize: 'var(--font-size-md)',
                        fontWeight: '600',
                        color: 'var(--color-accent)'
                    }}>
                        <span>🧼</span>
                        <span>Limpeza profunda para começar com o pé direito</span>
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.8',
                        margin: 0
                    }}>
                        Imagine aplicar uma textura suave que remove impurezas, células mortas e oleosidade em excesso.
                        A pele respira, o toque muda, e o rosto fica pronto pra absorver o que vem depois.
                    </p>
                </div>

                {/* Passo 2 */}
                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-primary)',
                    transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>2️⃣</span>
                        <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-primary)',
                            margin: 0
                        }}>
                            Passo 2: Máscara Facial Detox
                        </h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-md)',
                        fontSize: 'var(--font-size-md)',
                        fontWeight: '600',
                        color: 'var(--color-accent)'
                    }}>
                        <span>😌</span>
                        <span>Purificação intensa e sensação de leveza imediata</span>
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.8',
                        margin: 0
                    }}>
                        Você sente a máscara agindo, puxando toxinas e oleosidade dos poros, como se sua pele estivesse sendo "reiniciada".
                        Um efeito calmante, refrescante e profundamente revitalizante.
                    </p>
                </div>

                {/* Passo 3 */}
                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-primary)',
                    transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>3️⃣</span>
                        <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-primary)',
                            margin: 0
                        }}>
                            Passo 3: Creme Facial Regenerador
                        </h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-md)',
                        fontSize: 'var(--font-size-md)',
                        fontWeight: '600',
                        color: 'var(--color-accent)'
                    }}>
                        <span>✨</span>
                        <span>Hidratação nutritiva + tratamento antissinais</span>
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.8',
                        margin: 0
                    }}>
                        Textura aveludada, rápida absorção e uma sensação de pele viva.
                        Os ativos penetram profundamente, estimulando colágeno, clareando manchas e devolvendo o brilho natural.
                    </p>
                </div>

                {/* Passo 4 */}
                <div style={{
                    background: 'var(--color-white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-xl)',
                    boxShadow: 'var(--shadow-md)',
                    borderLeft: '4px solid var(--color-primary)',
                    transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-md)',
                        marginBottom: 'var(--spacing-md)'
                    }}>
                        <span style={{ fontSize: '2rem' }}>4️⃣</span>
                        <h3 style={{
                            fontSize: 'var(--font-size-lg)',
                            color: 'var(--color-primary)',
                            margin: 0
                        }}>
                            Passo 4: Sabonete Facial Equilibrante
                        </h3>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-sm)',
                        marginBottom: 'var(--spacing-md)',
                        fontSize: 'var(--font-size-md)',
                        fontWeight: '600',
                        color: 'var(--color-accent)'
                    }}>
                        <span>💚</span>
                        <span>Manhã e noite com frescor, sem ressecar</span>
                    </div>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-text-light)',
                        lineHeight: '1.8',
                        margin: 0
                    }}>
                        O toque final (e inicial) do seu ritual. Uma espuma suave que limpa sem agredir, mantendo o pH da pele equilibrado e reforçando os efeitos dos outros produtos.
                    </p>
                </div>
            </div>

            {/* Depoimento e CTA Emocional */}
            <div style={{
                maxWidth: '800px',
                margin: '0 auto var(--spacing-2xl)',
                padding: 'var(--spacing-xl)',
                background: 'rgba(255,255,255,0.8)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--color-primary)',
                textAlign: 'center'
            }}>
                <p style={{
                    fontSize: 'var(--font-size-lg)',
                    fontStyle: 'italic',
                    color: 'var(--color-text)',
                    lineHeight: '1.8',
                    margin: 0,
                    marginBottom: 'var(--spacing-md)'
                }}>
                    💬 "É como se minha pele estivesse indo ao spa todo dia, sem eu sair de casa."
                </p>
                <p style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-light)',
                    fontWeight: '600',
                    margin: 0,
                    marginBottom: 'var(--spacing-xl)'
                }}>
                    — @cliente_feliz
                </p>
                
                {/* CTA Emocional */}
                <div style={{
                    padding: 'var(--spacing-lg)',
                    background: 'linear-gradient(135deg, rgba(0, 49, 46, 0.05), rgba(68, 100, 92, 0.05))',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid var(--color-secondary)'
                }}>
                    <p style={{
                        fontSize: 'var(--font-size-md)',
                        color: 'var(--color-primary)',
                        fontWeight: '600',
                        lineHeight: '1.7',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 'var(--spacing-sm)',
                        flexWrap: 'wrap'
                    }}>
                        <span>💆‍♀️</span>
                        <span>Agora que você conhece cada passo, descubra por que ele transforma vidas todos os dias.</span>
                    </p>
                </div>
            </div>

            <div className="grid" style={{ marginTop: 'var(--spacing-xl)' }}>
                <ProductCard
                    number="1"
                    name="Esfoliante Facial de Dolomita"
                    emoji="🧼"
                    benefits="Remove impurezas, células mortas e excesso de oleosidade. Prepara a pele para absorver melhor os próximos produtos."
                    usage="Molhe o rosto e deixe a textura suave deslizar entre seus dedos. Massageie com carinho em movimentos circulares por 1-2 minutos — sinta sua pele respirar. Enxágue e sinta a diferença imediata."
                    composition="Dolomita micronizada, glicerina vegetal, óleo de coco, vitamina E, extrato de camomila."
                />

                <ProductCard
                    number="2"
                    name="Máscara Facial de Dolomita"
                    emoji="😌"
                    benefits="Purifica profundamente os poros, controla a oleosidade, uniformiza o tom da pele e proporciona efeito detox."
                    usage="Espalhe uma camada generosa no rosto limpo, evitando a área dos olhos. Deixe agir por 15-20 minutos — você vai sentir a máscara trabalhando, puxando tudo que não serve mais. Enxágue e sinta a leveza."
                    composition="Argila de dolomita, argila verde, extrato de aloe vera, óleo de tea tree, água termal."
                />

                <ProductCard
                    number="3"
                    name="Creme Facial de Dolomita"
                    emoji="✨"
                    benefits="Hidratação profunda, reduz linhas finas, ilumina a pele, estimula a produção de colágeno e melhora a elasticidade."
                    usage="Aplique generosamente no rosto e pescoço limpos. Massageie com movimentos suaves e ascendentes — sinta o creme sendo absorvido, nutrindo cada camada da sua pele."
                    composition="Extrato de dolomita, ácido hialurônico, vitamina C, niacinamida, peptídeos, óleo de rosa mosqueta."
                />

                <ProductCard
                    number="4"
                    name="Sabonete Facial de Dolomita"
                    emoji="💚"
                    benefits="Limpa suavemente, remove impurezas, mantém o pH equilibrado e prepara a pele para os outros produtos do ritual."
                    usage="Molhe o rosto e deixe a espuma suave fazer sua magia. Massageie delicadamente e enxágue — sua pele vai sentir a limpeza sem agressão. Use de manhã para começar o dia renovada e à noite para dormir com a pele limpa."
                    composition="Dolomita micronizada, glicerina vegetal, óleo de coco, vitamina E, extrato de camomila."
                />
            </div>
        </Section>
    );
}
