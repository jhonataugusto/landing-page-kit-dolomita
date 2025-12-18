import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function SummaryCTA() {
    return (
        <Section background="gradient-primary">
            <div className="max-w-3xl mx-auto text-center text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-lg text-white flex flex-wrap items-center justify-center gap-sm">
                    <span>🌟</span>
                    <span>Em Resumo, Por Que Você Vai Amar o Kit de Dolomita:</span>
                </h2>

                <div className="grid gap-md mb-xl text-left max-w-2xl mx-auto">
                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">✅</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            <strong>Resultados em até 30 dias</strong> (visíveis, reais e duradouros)
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">✅</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            <strong>Fórmulas naturais</strong>, seguras e testadas dermatologicamente
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">✅</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            <strong>Ritual completo</strong>, prático e prazeroso (sem complicação!)
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">✅</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            <strong>Garantia de Satisfação:</strong> se não sentir melhora em 30 dias, 50% de desconto no próximo pedido com orientação personalizada
                        </p>
                    </div>

                    <div className="flex items-start gap-md p-md bg-white/10 rounded-md backdrop-blur-md">
                        <span className="text-2xl flex-shrink-0">✅</span>
                        <p className="text-base md:text-lg m-0 leading-relaxed text-white">
                            <strong>193 mil mulheres</strong> já começaram essa transformação — agora é sua vez
                        </p>
                    </div>
                </div>

                <div className="mb-lg p-lg bg-white/15 rounded-lg backdrop-blur-md">
                    <p className="text-lg md:text-xl font-semibold m-0 text-white leading-relaxed">
                        👉 Comece agora e sinta a diferença no espelho ainda esse mês!
                    </p>
                </div>

                <CTAButton href="/oferta">
                    QUERO COMEÇAR MINHA TRANSFORMAÇÃO AGORA
                </CTAButton>
            </div>
        </Section>
    );
}
