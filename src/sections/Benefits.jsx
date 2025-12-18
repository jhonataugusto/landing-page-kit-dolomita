import React from 'react';
import Section from '../components/Section';
import BenefitItem from '../components/BenefitItem';

export default function Benefits() {
    return (
        <Section background="light">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">O Que Você Vai Conquistar em 30 Dias</h2>
            <p className="text-center max-w-2xl mx-auto mb-xl text-lg">
                Resultados reais que você pode ver, sentir e mostrar com orgulho
            </p>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-md">
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
            <div className="mt-2xl max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white">
                <div className="w-full aspect-[21/9] bg-gradient-to-br from-light to-lighter flex items-center justify-center text-sm text-textLight font-semibold text-center p-md">
                    <img
                        src="/images/2.png"
                        alt="Antes e Depois - Transformação da pele em 30 dias"
                        loading="lazy"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '📸 IMAGEM 2: Antes e Depois - Transformação em 30 dias';
                        }}
                    />
                </div>
            </div>
        </Section>
    );
}
