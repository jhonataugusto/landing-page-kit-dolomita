import React from 'react';
import Section from '../components/Section';

export default function Objections() {
    return (
        <Section background="light">
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                textAlign: 'center'
            }}>
                <h2 className="text-center" style={{ marginBottom: 'var(--spacing-md)' }}>
                    Você Pode Estar Pensando...
                </h2>
                <p className="text-center" style={{
                    maxWidth: '700px',
                    margin: '0 auto var(--spacing-xl)',
                    fontSize: 'var(--font-size-md)',
                    color: 'var(--color-text-light)'
                }}>
                    Respostas honestas para as dúvidas mais comuns
                </p>

                <div style={{
                    display: 'grid',
                    gap: 'var(--spacing-lg)',
                    marginTop: 'var(--spacing-xl)',
                    textAlign: 'left'
                }}>
                    {/* Objeção 1 */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        borderLeft: '4px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-md)'
                        }}>
                            "Será que funciona mesmo?"
                        </h3>
                        <p style={{
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Mais de <strong>193 mil mulheres</strong> já comprovaram os resultados. Veja os depoimentos reais acima com fotos de antes e depois. Além disso, oferecemos <strong>Garantia de Satisfação com Continuidade Exclusiva</strong>: se após 30 dias de uso você não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada dos nossos especialistas.
                        </p>
                    </div>

                    {/* Objeção 2 */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        borderLeft: '4px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-md)'
                        }}>
                            "É muito caro para mim"
                        </h3>
                        <p style={{
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Você pode começar com o <strong>Ritual Essencial por R$ 249,90</strong> (3x de R$ 83,30) ou escolher o <strong>Ritual Completo por R$ 459,90</strong> (3x de R$ 153,30). Compare com tratamentos estéticos que custam R$ 500-1000 por sessão. Menos que um café por dia para transformar sua pele.
                        </p>
                    </div>

                    {/* Objeção 3 */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        borderLeft: '4px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-md)'
                        }}>
                            "E se não funcionar?"
                        </h3>
                        <p style={{
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            <strong>Garantia de Satisfação com Continuidade Exclusiva.</strong> Se após 30 dias de uso consistente você não sentir uma melhora clara na sua pele — em brilho, textura ou equilíbrio — queremos te ajudar ainda mais. Damos a você <strong>50% de desconto no seu próximo pedido personalizado</strong>, com orientação direta do nosso time de especialistas em cuidados naturais. Basta ter usado o produto conforme o ritual e enviar seu feedback no nosso canal exclusivo de acompanhamento.
                        </p>
                    </div>

                    {/* Objeção 4 */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        borderLeft: '4px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-md)'
                        }}>
                            "Quanto tempo para ver resultados?"
                        </h3>
                        <p style={{
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            <strong>Primeiros resultados em 7-15 dias:</strong> pele mais macia, textura melhorada, brilho natural. <strong>Transformação completa em 30 dias:</strong> manchas clareadas, linhas reduzidas, pele firme e radiante. E você tem nossa <strong>Garantia de Satisfação com Continuidade Exclusiva</strong> — se não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada.
                        </p>
                    </div>

                    {/* Objeção 5 */}
                    <div style={{
                        background: 'var(--color-white)',
                        padding: 'var(--spacing-lg)',
                        borderRadius: 'var(--radius-lg)',
                        boxShadow: 'var(--shadow-md)',
                        borderLeft: '4px solid var(--color-primary)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-primary)',
                            marginBottom: 'var(--spacing-sm)',
                            fontSize: 'var(--font-size-md)'
                        }}>
                            "Já tentei muitos produtos sem sucesso"
                        </h3>
                        <p style={{
                            color: 'var(--color-text-light)',
                            lineHeight: '1.7',
                            margin: 0
                        }}>
                            Entendemos sua frustração. Por isso oferecemos <strong>Garantia de Satisfação com Continuidade Exclusiva</strong> — se após 30 dias você não sentir melhora, oferecemos 50% de desconto no próximo pedido com orientação personalizada dos nossos especialistas. A diferença aqui é que usamos <strong>ingredientes naturais da floresta</strong>, sem químicos agressivos que podem irritar. Mais de 193 mil mulheres já comprovaram que funciona.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}

