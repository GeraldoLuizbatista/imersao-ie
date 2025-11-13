import React from 'react';
import { Zap, Target, Rocket, TrendingUp } from 'lucide-react';

const Solution = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "1 Dia. Transformação Completa.",
      description: "Não é teoria. São 8 horas de prática intensa com resultados imediatos.",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "2 Agentes + 1 Assistente",
      description: "Você sai com 3 IAs funcionais criadas por você mesmo.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Zero Conhecimento Técnico",
      description: "Sem programação. Sem complexidade. Apenas resultados.",
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "ROI em 30 Dias",
      description: "Economia de 10-20h/semana = R$ 2.000-4.000/mês em produtividade.",
      gradient: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-2 mb-6">
            <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent font-semibold text-sm uppercase tracking-wider">
              A Solução
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Apresentamos: </span>
            <br />
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-red-600 bg-clip-text text-transparent">
              Imersão IE
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            <span className="text-white font-bold">1 dia</span>. 
            <span className="text-white font-bold"> 2 mestres</span>. 
            <span className="text-yellow-400 font-bold"> Transformação completa</span>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${benefit.gradient} rounded-xl mb-6 text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed text-lg">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${benefit.gradient} transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* What You Won't Get */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-2 border-gray-700 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Não É Curso. <span className="text-red-500">É Imersão.</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">❌</div>
              <p className="text-gray-400">Teoria sem prática</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">❌</div>
              <p className="text-gray-400">Slides intermináveis</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">❌</div>
              <p className="text-gray-400">Promessas vazias</p>
            </div>
          </div>

          <div className="my-12 border-t border-gray-700"></div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-white font-bold">80% Prática</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-white font-bold">Agentes Reais</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">✅</div>
              <p className="text-white font-bold">Resultados Garantidos</p>
            </div>
          </div>
        </div>

        {/* Triple Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-500/10 to-red-500/10 border-2 border-yellow-500/30 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-xl text-white font-bold mb-2">
              🎯 Nossa Garantia Tripla:
            </p>
            <p className="text-gray-300">
              Você vai <span className="text-yellow-400 font-bold">construir</span> agentes. 
              Vai <span className="text-yellow-400 font-bold">implementar</span> IA. 
              Vai <span className="text-yellow-400 font-bold">dominar</span> IE.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
