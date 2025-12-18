import React from 'react';
import Section from '../components/Section';

export default function WhyItWorks() {
    return (
        <Section background="white">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">Por Que a Dolomita Funciona?</h2>
            <p className="text-center max-w-2xl mx-auto mb-xl text-lg">
                A ciência por trás do mineral que transforma sua pele
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">🔬</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Rica em Minerais</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Cálcio e magnésio se unem como uma dupla perfeita, fortalecendo sua pele de dentro para fora
                        e despertando sua capacidade natural de se renovar.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">⚡</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Ação Esfoliante Natural</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Partículas delicadas de dolomita deslizam suavemente sobre sua pele, removendo tudo que não serve mais
                        e revelando a pele nova e radiante que estava esperando para aparecer.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">💧</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Equilíbrio do pH</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        A dolomita restaura o equilíbrio natural da sua pele, como se ela soubesse exatamente o que precisa.
                        Sem ressecamento, sem irritação — apenas o estado perfeito que sua pele merece.
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-base hover:-translate-y-1">
                    <div className="text-5xl mb-md">🌟</div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Absorção Profunda</h3>
                    <p className="text-base text-textLight leading-relaxed m-0">
                        Graças à sua textura única, a dolomita permite que os nutrientes entrem profundamente na pele —
                        como se ela estivesse se alimentando do que há de melhor na natureza.
                    </p>
                </div>
            </div>
        </Section>
    );
}
