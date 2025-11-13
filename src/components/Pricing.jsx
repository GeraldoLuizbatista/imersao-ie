import React from 'react';
import { Check, Zap, Users, Building2, ArrowRight, Shield } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Individual",
      badge: "MAIS POPULAR",
      originalPrice: "2.997",
      price: "1.497",
      installments: "12x de R$ 124,75",
      discount: "50% OFF",
      features: [
        "Imersão presencial completa (8h)",
        "Material didático digital exclusivo",
        "Coffee break (manhã e tarde)",
        "Almoço incluso",
        "Kit do participante",
        "Certificado digital",
        "Grupo exclusivo WhatsApp",
        "Templates de agentes e assistentes",
        "30 dias de suporte",
        "Gravação das aulas (90 dias)",
        "3 bônus exclusivos (R$ 894)"
      ],
      cta: "GARANTIR MINHA VAGA",
      highlight: true
    },
    {
      name: "Dupla",
      badge: "MELHOR CUSTO",
      originalPrice: "5.994",
      price: "2.497",
      pricePerPerson: "1.248,50",
      installments: "12x de R$ 208,08",
      discount: "58% OFF",
      features: [
        "Tudo do plano Individual",
        "Para 2 participantes",
        "R$ 1.248,50 por vaga",
        "Networking em dupla",
        "Economia de R$ 3.497",
        "Material para ambos",
        "Suporte estendido"
      ],
      cta: "CONTRATAR PARA 2 PESSOAS",
      highlight: false
    },
    {
      name: "Empresarial",
      badge: "MAIOR ECONOMIA",
      originalPrice: "8.991",
      price: "1.097",
      pricePerPerson: "por vaga",
      installments: "12x de R$ 91,42 por vaga",
      discount: "63% OFF",
      features: [
        "Tudo do plano Individual",
        "A partir de 3 participantes",
        "R$ 1.097 por vaga",
        "BÔNUS: 2h de consultoria pós-evento",
        "Implementação assistida",
        "Suporte prioritário",
        "Condições especiais para empresas"
      ],
      cta: "FALAR COM ESPECIALISTA",
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              Investimento
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Qual o </span>
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Valor
            </span>
            <span className="text-white"> da Sua</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">
              Sobrevivência Profissional
            </span>
            <span className="text-white">?</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Profissionais com IE ganham 3x mais. Empresas com IE crescem 10x mais rápido.
          </p>

          {/* Value Breakdown */}
          <div className="inline-block bg-gray-900/50 border border-gray-700 rounded-xl px-8 py-6 text-left">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">Valor Real dos Componentes:</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-gray-300">
              <div className="flex justify-between gap-4">
                <span>Material didático:</span>
                <span className="text-white font-semibold">R$ 500</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Certificação:</span>
                <span className="text-white font-semibold">R$ 300</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Mentoria:</span>
                <span className="text-white font-semibold">R$ 1.500</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Alimentação:</span>
                <span className="text-white font-semibold">R$ 200</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Bônus:</span>
                <span className="text-white font-semibold">R$ 894</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Templates:</span>
                <span className="text-white font-semibold">R$ 500</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Suporte 30 dias:</span>
                <span className="text-white font-semibold">R$ 997</span>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-4 pt-4 flex justify-between text-xl font-bold">
              <span className="text-white">TOTAL:</span>
              <span className="text-green-400">R$ 4.891</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-gray-900/50 backdrop-blur-sm border-2 rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.highlight 
                  ? 'border-yellow-500 shadow-2xl shadow-yellow-500/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold ${
                  plan.highlight 
                    ? 'bg-gradient-to-r from-yellow-500 to-red-500 text-white'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-gray-500 line-through text-lg">R$ {plan.originalPrice}</span>
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {plan.discount}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-gray-400">R$</span>
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    {plan.pricePerPerson && (
                      <span className="text-sm text-gray-400 ml-1">{plan.pricePerPerson}</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2">{plan.installments}</p>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? 'text-yellow-500' : 'text-green-500'
                    }`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                plan.highlight
                  ? 'bg-gradient-to-r from-yellow-500 to-red-600 text-white shadow-lg shadow-yellow-500/50'
                  : 'bg-gradient-to-r from-blue-600 to-purple-700 text-white'
              }`}>
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Security Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-gray-400 text-xs">
                <Shield className="w-4 h-4" />
                <span>Pagamento 100% Seguro</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-2 border-green-500/30 rounded-2xl p-8 md:p-12 text-center">
          <Shield className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            🛡️ Garantia Incondicional de 100%
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Se até o <span className="text-green-400 font-bold">coffee break da manhã</span> você achar que não é para você:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-green-400 font-bold mb-2">1. Devolva o material</p>
              <p className="text-gray-400 text-sm">Sem problemas</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-green-400 font-bold mb-2">2. Avise a organização</p>
              <p className="text-gray-400 text-sm">Processo simples</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-green-400 font-bold mb-2">3. Receba 100% de volta</p>
              <p className="text-gray-400 text-sm">Reembolso total</p>
            </div>
          </div>
          <p className="text-lg text-gray-300 font-semibold">
            Sem perguntas. Sem burocracias. Sem ressentimentos.
          </p>
        </div>

        {/* Urgency Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-red-900/20 border border-red-500/30 rounded-full px-6 py-3 animate-pulse">
            <Zap className="w-5 h-5 text-red-400" />
            <span className="text-white font-bold">Restam apenas [X] vagas | Preço sobe em 48h</span>
            <Zap className="w-5 h-5 text-red-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
