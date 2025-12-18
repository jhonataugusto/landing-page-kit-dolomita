import React from 'react';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';

export default function CompleteRitual() {
    return (
        <Section background="gradient-secondary">
            <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-md">
                💚 O Ritual Completo em 4 Passos
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-xl text-lg text-text leading-relaxed">
                Cada etapa foi pensada para agir em sinergia e transformar sua pele como um verdadeiro SPA natural.
            </p>

            {/* Passos Sensoriais */}
            <div className="max-w-4xl mx-auto mb-2xl grid gap-lg px-md w-full box-border">
                {/* Passo 1 */}
                <div className="bg-white rounded-lg p-xl shadow-md border-l-4 border-primary transition-all duration-base hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-md mb-md">
                        <span className="text-3xl">1️⃣</span>
                        <h3 className="text-xl md:text-2xl text-primary m-0">
                            Passo 1: Esfoliante Facial de Dolomita
                        </h3>
                    </div>
                    <div className="flex items-center gap-sm mb-md text-lg font-semibold text-accent">
                        <span>🧼</span>
                        <span>Limpeza profunda para começar com o pé direito</span>
                    </div>
                    <p className="text-base md:text-lg text-textLight leading-relaxed m-0">
                        Imagine aplicar uma textura suave que remove impurezas, células mortas e oleosidade em excesso.
                        A pele respira, o toque muda, e o rosto fica pronto pra absorver o que vem depois.
                    </p>
                </div>

                {/* Passo 2 */}
                <div className="bg-white rounded-lg p-xl shadow-md border-l-4 border-primary transition-all duration-base hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-md mb-md">
                        <span className="text-3xl">2️⃣</span>
                        <h3 className="text-xl md:text-2xl text-primary m-0">
                            Passo 2: Máscara Facial Detox
                        </h3>
                    </div>
                    <div className="flex items-center gap-sm mb-md text-lg font-semibold text-accent">
                        <span>😌</span>
                        <span>Purificação intensa e sensação de leveza imediata</span>
                    </div>
                    <p className="text-base md:text-lg text-textLight leading-relaxed m-0">
                        Você sente a máscara agindo, puxando toxinas e oleosidade dos poros, como se sua pele estivesse sendo "reiniciada".
                        Um efeito calmante, refrescante e profundamente revitalizante.
                    </p>
                </div>

                {/* Passo 3 */}
                <div className="bg-white rounded-lg p-xl shadow-md border-l-4 border-primary transition-all duration-base hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-md mb-md">
                        <span className="text-3xl">3️⃣</span>
                        <h3 className="text-xl md:text-2xl text-primary m-0">
                            Passo 3: Creme Facial Regenerador
                        </h3>
                    </div>
                    <div className="flex items-center gap-sm mb-md text-lg font-semibold text-accent">
                        <span>✨</span>
                        <span>Hidratação nutritiva + tratamento antissinais</span>
                    </div>
                    <p className="text-base md:text-lg text-textLight leading-relaxed m-0">
                        Textura aveludada, rápida absorção e uma sensação de pele viva.
                        Os ativos penetram profundamente, estimulando colágeno, clareando manchas e devolvendo o brilho natural.
                    </p>
                </div>

                {/* Passo 4 */}
                <div className="bg-white rounded-lg p-xl shadow-md border-l-4 border-primary transition-all duration-base hover:-translate-y-1 hover:shadow-lg">
                    <div className="flex items-center gap-md mb-md">
                        <span className="text-3xl">4️⃣</span>
                        <h3 className="text-xl md:text-2xl text-primary m-0">
                            Passo 4: Sabonete Facial Equilibrante
                        </h3>
                    </div>
                    <div className="flex items-center gap-sm mb-md text-lg font-semibold text-accent">
                        <span>💚</span>
                        <span>Manhã e noite com frescor, sem ressecar</span>
                    </div>
                    <p className="text-base md:text-lg text-textLight leading-relaxed m-0">
                        O toque final (e inicial) do seu ritual. Uma espuma suave que limpa sem agredir, mantendo o pH da pele equilibrado e reforçando os efeitos dos outros produtos.
                    </p>
                </div>
            </div>

            {/* Depoimento e CTA Emocional */}
            <div className="max-w-3xl mx-auto mb-2xl p-xl bg-white/80 rounded-lg border-l-4 border-primary text-center">
                <p className="text-lg md:text-xl italic text-text leading-relaxed m-0 mb-md">
                    💬 "É como se minha pele estivesse indo ao spa todo dia, sem eu sair de casa."
                </p>
                <p className="text-sm text-textLight font-semibold m-0 mb-xl">
                    — @cliente_feliz
                </p>
                
                {/* CTA Emocional */}
                <div className="p-lg bg-gradient-to-br from-primary/5 to-accent/5 rounded-md border-2 border-secondary">
                    <p className="text-base md:text-lg text-primary font-semibold leading-relaxed m-0 flex flex-wrap items-center justify-center gap-sm">
                        <span>💆‍♀️</span>
                        <span>Agora que você conhece cada passo, descubra por que ele transforma vidas todos os dias.</span>
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md mt-xl">
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
