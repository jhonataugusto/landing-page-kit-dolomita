import React from 'react';
import Section from '../components/Section';
import CTAButton from '../components/CTAButton';

export default function FinalCTA() {
    return (
        <Section background="white" id="comprar">
            {/* Container principal - mobile first com flexbox */}
            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 text-center">
                {/* Título */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6 flex flex-wrap items-center justify-center gap-2 md:gap-4">
                    <span>💎</span>
                    <span>ESCOLHA SUA TRANSFORMAÇÃO</span>
                </h2>

                {/* Subtítulo */}
                <p className="text-base md:text-lg text-textLight mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                    Transforme sua pele com o poder da dolomita natural, no seu ritmo e do seu jeito.
                </p>

                {/* Grid de ofertas - mobile first: coluna única, desktop: 2 colunas */}
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
                    {/* Oferta 1 - Ritual Completo */}
                    <div className="flex-1 bg-gradient-to-br from-primary to-accent rounded-2xl p-6 md:p-8 lg:p-12 text-white shadow-2xl border-4 border-primary relative overflow-hidden">
                        {/* Badge "Mais Popular" */}
                        <div className="absolute top-4 right-4 bg-white/20 px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
                            ⭐ MAIS POPULAR
                        </div>

                        {/* Título da oferta */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 text-base md:text-lg font-semibold">
                            <span>👉</span>
                            <span className="text-center">Oferta 1 — Ritual de Transformação Completa</span>
                        </div>

                        {/* Descrição */}
                        <p className="text-sm md:text-base mb-6 md:mb-8 opacity-95">
                            Para quem quer o tratamento completo e resultados visíveis em 30 dias
                        </p>

                        {/* Lista de produtos */}
                        <div className="bg-white/15 p-4 md:p-6 rounded-xl mb-6 md:mb-8 backdrop-blur-md">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 text-sm md:text-base font-semibold">
                                <span>💚</span>
                                <span>Kit com 4 produtos:</span>
                            </div>
                            <div className="text-left text-sm md:text-base leading-loose">
                                ✓ Sabonete Facial<br/>
                                ✓ Máscara Detox<br/>
                                ✓ Esfoliante Suave<br/>
                                ✓ Creme Facial Regenerador
                            </div>
                        </div>

                        {/* Bônus */}
                        <div className="bg-white/15 p-4 md:p-6 rounded-xl mb-6 md:mb-8 backdrop-blur-md">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 text-sm md:text-base font-semibold">
                                <span>🎁</span>
                                <span>Inclui:</span>
                            </div>
                            <div className="text-left text-sm md:text-base leading-loose">
                                ✓ Frete Grátis para todo o Brasil
                            </div>
                        </div>

                        {/* Preço */}
                        <div className="mb-6 md:mb-8">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2">
                                R$ 459,90
                            </div>
                            <div className="text-sm md:text-base opacity-90">
                                ou 3x de R$ 153,30 sem juros
                            </div>
                        </div>

                        {/* Estoque */}
                        <div className="text-xs md:text-sm mb-6 md:mb-8 opacity-90">
                            🔐 Estoque limitado | Produção 100% natural
                        </div>

                        {/* CTA Button */}
                        <CTAButton href="https://www.belezadafloresta.com.br/produtos/kit-completo-de-dolomita/">
                            QUERO O RITUAL COMPLETO
                        </CTAButton>
                        
                        {/* Texto de apoio */}
                        <p className="mt-4 text-xs md:text-sm opacity-95 mb-0">
                            👆 Escolha ideal para quem quer transformação total em 30 dias.
                        </p>
                    </div>

                    {/* Oferta 2 - Ritual Essencial */}
                    <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg border-2 border-secondary">
                        {/* Título da oferta */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-4 mb-4 md:mb-6 text-base md:text-lg font-semibold text-primary">
                            <span>👉</span>
                            <span className="text-center">Oferta 2 — Ritual Essencial (Mini Kit)</span>
                        </div>

                        {/* Descrição */}
                        <p className="text-sm md:text-base text-textLight mb-6 md:mb-8">
                            Para quem quer começar agora e sentir os primeiros resultados
                        </p>

                        {/* Lista de produtos */}
                        <div className="bg-primary/5 p-4 md:p-6 rounded-xl mb-6 md:mb-8">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 text-sm md:text-base font-semibold text-primary">
                                <span>💚</span>
                                <span>Kit com 2 produtos:</span>
                            </div>
                            <div className="text-left text-sm md:text-base leading-loose text-textLight">
                                ✓ Sabonete Facial<br/>
                                ✓ Máscara Detox
                            </div>
                        </div>

                        {/* Bônus */}
                        <div className="bg-primary/5 p-4 md:p-6 rounded-xl mb-6 md:mb-8">
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4 text-sm md:text-base font-semibold text-primary">
                                <span>🎁</span>
                                <span>Inclui:</span>
                            </div>
                            <div className="text-left text-sm md:text-base leading-loose text-textLight">
                                ✓ Frete Grátis
                            </div>
                        </div>

                        {/* Preço */}
                        <div className="mb-6 md:mb-8">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-2">
                                R$ 249,90
                            </div>
                            <div className="text-sm md:text-base text-textLight">
                                ou 3x de R$ 83,30 sem juros
                            </div>
                        </div>

                        {/* Texto destacado */}
                        <p className="text-xs md:text-sm text-textLight mb-6 md:mb-8 italic">
                            ✨ Ideal para quem quer testar e começar sua transformação com praticidade
                        </p>

                        {/* CTA Button */}
                        <CTAButton href="https://www.belezadafloresta.com.br/produtos/kit-basico-de-dolomita/">
                            QUERO COMEÇAR COM O MINI KIT
                        </CTAButton>
                        
                        {/* Texto de apoio */}
                        <p className="mt-4 text-xs md:text-sm text-textLight mb-0">
                            👆 Comece com o básico e descubra a potência da dolomita.
                        </p>
                    </div>
                </div>

                {/* Quebra visual antes da dica */}
                <div className="max-w-3xl mx-auto px-4 md:px-6 my-4 md:my-6">
                    <p className="text-center text-textLight font-semibold m-0">
                        💭 Ainda em dúvida entre as duas opções?
                    </p>
                </div>

                {/* Dica da Especialista */}
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 md:p-6 lg:p-8 rounded-2xl border-l-4 border-primary text-left max-w-3xl mx-auto my-8 md:my-12">
                    <p className="text-sm md:text-base font-semibold text-primary mb-2 md:mb-3">
                        💡 Dica da nossa especialista:
                    </p>
                    <p className="text-sm md:text-base text-textLight leading-relaxed m-0">
                        A maioria das nossas clientes que começa com o Ritual Essencial acaba migrando para o Completo no primeiro mês.
                        Se você já sabe que quer resultados rápidos e visíveis, o <strong className="text-primary">Ritual Completo é sua melhor escolha</strong>.
                    </p>
                </div>

                {/* Garantia */}
                <div className="mt-8 md:mt-12 p-4 md:p-6 lg:p-8 bg-primary/5 rounded-2xl max-w-3xl mx-auto">
                    <p className="text-xs md:text-sm text-textLight mb-2 md:mb-3">
                        🔒 Compra 100% segura e protegida
                    </p>
                    <p className="text-sm md:text-base text-primary font-semibold mb-2">
                        ✅ Garantia de Satisfação com Continuidade Exclusiva
                    </p>
                    <p className="text-xs md:text-sm text-textLight leading-relaxed m-0">
                        Se após 30 dias de uso consistente você não sentir melhora clara na sua pele, oferecemos <strong>50% de desconto no próximo pedido</strong> com orientação direta dos nossos especialistas.
                    </p>
                </div>

                {/* Mini FAQ */}
                <div className="mt-8 md:mt-12 max-w-3xl mx-auto px-4 md:px-6">
                    <h3 className="text-primary mb-4 md:mb-6 text-center text-xl md:text-2xl font-bold">
                        ❓ Ainda com dúvidas?
                    </h3>

                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="text-left bg-white p-4 md:p-6 rounded-xl shadow-sm">
                            <p className="m-0 font-bold text-primary text-sm md:text-base">
                                🔹 O produto é indicado para todos os tipos de pele?
                            </p>
                            <p className="mt-2 md:mt-3 mb-0 text-textLight leading-relaxed text-sm md:text-base">
                                Sim! A fórmula é 100% natural e equilibrada para peles oleosas, mistas e sensíveis.
                            </p>
                        </div>

                        <div className="text-left bg-white p-4 md:p-6 rounded-xl shadow-sm">
                            <p className="m-0 font-bold text-primary text-sm md:text-base">
                                🔹 Preciso usar os 4 produtos todos os dias?
                            </p>
                            <p className="mt-2 md:mt-3 mb-0 text-textLight leading-relaxed text-sm md:text-base">
                                O ritual completo pode ser adaptado à sua rotina. Você pode usar todos os dias ou alternar conforme sua necessidade.
                            </p>
                        </div>

                        <div className="text-left bg-white p-4 md:p-6 rounded-xl shadow-sm">
                            <p className="m-0 font-bold text-primary text-sm md:text-base">
                                🔹 Em quanto tempo recebo meu kit?
                            </p>
                            <p className="mt-2 md:mt-3 mb-0 text-textLight leading-relaxed text-sm md:text-base">
                                Em até 7 dias úteis, com rastreamento e frete gratuito para todo o Brasil.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
