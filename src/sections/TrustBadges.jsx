import React from 'react';
import Section from '../components/Section';

export default function TrustBadges() {
    return (
        <Section background="light">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-primary mb-md">Compre com Confiança</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md mt-xl max-w-4xl mx-auto">
                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">🔒</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Pagamento Seguro</h3>
                    <p className="text-sm text-textLight mb-0">
                        Seus dados protegidos com criptografia SSL
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">📦</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Entrega Rápida</h3>
                    <p className="text-sm text-textLight mb-0">
                        Receba em até 7 dias úteis
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">✅</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Garantia de Qualidade</h3>
                    <p className="text-sm text-textLight mb-0">
                        Produtos testados dermatologicamente
                    </p>
                </div>

                <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-base">
                    <div className="text-5xl mb-sm">🌿</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">100% Natural</h3>
                    <p className="text-sm text-textLight mb-0">
                        Sem parabenos, sulfatos ou ingredientes tóxicos
                    </p>
                </div>
            </div>
        </Section>
    );
}
