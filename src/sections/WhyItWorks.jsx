import React from 'react';
import Section from '../components/Section';

export default function WhyItWorks() {
    return (
        <Section background="white">
            <h2 className="text-center">Por Que a Dolomita Funciona?</h2>
            <p className="text-center" style={{
                maxWidth: '700px',
                margin: '0 auto var(--spacing-xl)',
                fontSize: 'var(--font-size-md)'
            }}>
                A ciência por trás do mineral que transforma sua pele
            </p>

            <div className="grid" style={{ marginTop: 'var(--spacing-xl)' }}>
                <div className="card">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🔬</div>
                    <h3>Rica em Minerais</h3>
                    <p>
                        Cálcio e magnésio se unem como uma dupla perfeita, fortalecendo sua pele de dentro para fora
                        e despertando sua capacidade natural de se renovar.
                    </p>
                </div>

                <div className="card">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>⚡</div>
                    <h3>Ação Esfoliante Natural</h3>
                    <p>
                        Partículas delicadas de dolomita deslizam suavemente sobre sua pele, removendo tudo que não serve mais
                        e revelando a pele nova e radiante que estava esperando para aparecer.
                    </p>
                </div>

                <div className="card">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>💧</div>
                    <h3>Equilíbrio do pH</h3>
                    <p>
                        A dolomita restaura o equilíbrio natural da sua pele, como se ela soubesse exatamente o que precisa.
                        Sem ressecamento, sem irritação — apenas o estado perfeito que sua pele merece.
                    </p>
                </div>

                <div className="card">
                    <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-md)' }}>🌟</div>
                    <h3>Absorção Profunda</h3>
                    <p>
                        Graças à sua textura única, a dolomita permite que os nutrientes entrem profundamente na pele —
                        como se ela estivesse se alimentando do que há de melhor na natureza.
                    </p>
                </div>
            </div>
        </Section>
    );
}
