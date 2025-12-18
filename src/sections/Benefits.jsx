import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';

export default function Benefits() {
    return (
        <Section background="light">
            <h2 className="text-center">O Que Você Vai Conquistar em 30 Dias</h2>
            <p className="text-center" style={{
                maxWidth: '700px',
                margin: '0 auto var(--spacing-xl)',
                fontSize: 'var(--font-size-md)'
            }}>
                Resultados reais que você pode ver, sentir e mostrar com orgulho
            </p>

            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                display: 'grid',
                gap: 'var(--spacing-md)',
                gridTemplateColumns: '1fr'
            }}>
                <BenefitItem>
                    Reviva a pele que você tinha aos 25: esfoliação profunda que remove anos de células mortas e impurezas acumuladas, revelando uma pele nova e radiante
                </BenefitItem>
                <BenefitItem>
                    Hidratação que dura o dia todo: pele nutrida, macia e protegida, sem aquela sensação de ressecamento que te fazia usar creme a cada 2 horas
                </BenefitItem>
                <BenefitItem>
                    Diga adeus às manchas: redução visível de manchas, linhas finas e sinais de envelhecimento em apenas 30 dias de uso
                </BenefitItem>
                <BenefitItem>
                    Pele firme e elástica: recupere a elasticidade perdida e veja sua pele com aparência mais jovem e saudável
                </BenefitItem>
                <BenefitItem>
                    Equilíbrio perfeito: pH natural restaurado, sem irritações, sem ressecamento, sem oleosidade excessiva
                </BenefitItem>
                <BenefitItem>
                    Textura de seda: pele suave e uniforme, sem aquelas irregularidades que te incomodavam ao passar a mão
                </BenefitItem>
                <BenefitItem>
                    Brilho natural de volta: luminosidade que vem de dentro, não de maquiagem — aquele glow que você pensava que tinha perdido para sempre
                </BenefitItem>
                <BenefitItem>
                    Proteção invisível: barreira natural fortalecida contra poluição, sol e outros agressores do dia a dia
                </BenefitItem>
            </div>

            {/* IMAGEM 2: Before/After Transformation */}
            <div style={{
                marginTop: 'var(--spacing-2xl)',
                maxWidth: '1000px',
                margin: 'var(--spacing-2xl) auto 0',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                background: 'var(--color-white)'
            }}>
                <div style={{
                    width: '100%',
                    aspectRatio: '21/9',
                    background: 'linear-gradient(135deg, var(--color-light), var(--color-lighter))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-light)',
                    fontWeight: '600',
                    textAlign: 'center',
                    padding: 'var(--spacing-md)'
                }}>
                    <img
                        src="/images/2.png"
                        alt="Antes e Depois - Transformação da pele em 30 dias"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '✨ IMAGEM 2: Antes e Depois - Transformação visível em 30 dias';
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}
