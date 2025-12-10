import React from 'react';
import { Check, Star, Users, GraduationCap, Shield, Zap, ArrowRight } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Escolha seu </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Plano</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Invista no seu futuro com IA • Vagas Limitadas
          </p>
        </div>

        {/* Grid de Planos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Plano Individual */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-colors">
            <div className="mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Individual</h3>
              <p className="text-gray-400">Para profissionais e empreendedores</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-400 line-through text-xl">R$ 1.500</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">50% OFF</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">R$ 750</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">1 dia completo de imersão (8h30-18h)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Material didático completo digital</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Certificado de participação</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Coffee break + almoço incluído</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Acesso ao grupo exclusivo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Templates e ferramentas prontas</span>
              </li>
            </ul>
            
            <button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Garantir Vaga
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              28 vagas disponíveis
            </p>
          </div>
          
          {/* Plano Grupo - DESTAQUE */}
          <div className="bg-gradient-to-br from-red-900 to-red-700 border-4 border-yellow-400 rounded-2xl p-8 relative transform md:scale-105 shadow-2xl">
            
            {/* Badge Popular */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-black shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-black" />
                MAIS POPULAR
                <Star className="w-4 h-4 fill-black" />
              </div>
            </div>
            
            <div className="mb-6 mt-4">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Grupo (3+)</h3>
              <p className="text-red-100">Traga sua equipe e economize mais</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-red-200 line-through text-xl">R$ 1.500</span>
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">60% OFF</span>
              </div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-5xl font-black text-white">R$ 600</span>
              </div>
              <p className="text-yellow-300 text-sm font-semibold">por pessoa (mínimo 3)</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white font-semibold">Tudo do plano Individual</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white">Desconto de 20% por pessoa</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white">Mesa exclusiva para o grupo</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white">1 sessão de consultoria pós-evento</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white">Suporte prioritário 30 dias</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                <span className="text-white">Material físico impresso</span>
              </li>
            </ul>
            
            <button className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-black rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
              Garantir Vagas do Grupo
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-sm text-red-100 mt-4 font-semibold">
              Ideal para equipes • Economia de R$ 2.700 (grupo de 3)
            </p>
          </div>
          
          {/* Plano Estudante */}
          <div className="bg-gray-900 border-2 border-purple-500 rounded-2xl p-8 hover:border-purple-400 transition-colors">
            
            {/* Badge Vagas Limitadas */}
            <div className="mb-6">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1 mb-4">
                <Zap className="w-3 h-3" />
                APENAS 8 VAGAS
              </div>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Estudante</h3>
              <p className="text-gray-400">Para universitários com carteirinha válida</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-gray-400 line-through text-xl">R$ 1.500</span>
                <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">70% OFF</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">R$ 450</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Tudo do plano Individual</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Investimento acessível</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Networking com profissionais do mercado</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Oportunidade de estágio/emprego</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Selo diferenciado no certificado</span>
              </li>
              <li className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 font-semibold">Apenas 8 vagas (20% do total)</span>
              </li>
            </ul>
            
            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
              Garantir Vaga Estudante
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Necessário carteirinha universitária válida
            </p>
          </div>
        </div>

        {/* Garantia */}
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 max-w-4xl mx-auto mb-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                🛡️ Garantia de Satisfação de 7 Dias
              </h3>
              <p className="text-gray-300">
                Se você participar da imersão e não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento. 
                Sem perguntas, sem burocracia. Nosso compromisso é com o seu sucesso.
              </p>
            </div>
          </div>
        </div>

        {/* Comparação de Economia */}
        <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            💰 Compare a Economia por Plano
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Individual</p>
                <p className="text-3xl font-black text-white mb-1">R$ 750</p>
                <p className="text-green-400 text-sm font-semibold">Economia: R$ 750</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-900/30 border-2 border-yellow-500/50 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Grupo (3 pessoas)</p>
                <p className="text-3xl font-black text-white mb-1">R$ 1.800</p>
                <p className="text-green-400 text-sm font-semibold">Economia: R$ 2.700</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-1">Estudante</p>
                <p className="text-3xl font-black text-white mb-1">R$ 450</p>
                <p className="text-green-400 text-sm font-semibold">Economia: R$ 1.050</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-400 text-sm mt-6">
            * Valores comparados com o preço cheio de R$ 1.500
          </p>
        </div>

        {/* FAQ Rápido */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Dúvidas Frequentes</h3>
          
          <div className="space-y-4">
            <details className="bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600 transition-colors">
              <summary className="font-semibold text-white">Posso parcelar o pagamento?</summary>
              <p className="text-gray-400 mt-2">Sim! Aceitamos cartão de crédito em até 3x sem juros.</p>
            </details>
            
            <details className="bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600 transition-colors">
              <summary className="font-semibold text-white">O que está incluído no plano Grupo?</summary>
              <p className="text-gray-400 mt-2">Tudo do plano Individual + desconto de 20% por pessoa + mesa exclusiva + 1 consultoria pós-evento + suporte prioritário por 30 dias.</p>
            </details>
            
            <details className="bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600 transition-colors">
              <summary className="font-semibold text-white">Como comprovar que sou estudante?</summary>
              <p className="text-gray-400 mt-2">Basta apresentar carteirinha universitária válida ou declaração de matrícula na entrada do evento.</p>
            </details>
            
            <details className="bg-gray-900 border border-gray-700 rounded-lg p-4 cursor-pointer hover:border-gray-600 transition-colors">
              <summary className="font-semibold text-white">Até quando posso me inscrever?</summary>
              <p className="text-gray-400 mt-2">As inscrições vão até 09/01/2026 ou até esgotarem as 40 vagas. Recomendamos garantir sua vaga com antecedência!</p>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
