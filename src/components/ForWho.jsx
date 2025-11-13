import React from 'react';
import { Check, X } from 'lucide-react';

const ForWho = () => {
  const forYou = [
    "Você é empresário/empreendedor e sente que está perdendo espaço",
    "Você é executivo/gerente e percebe que seu cargo está ameaçado",
    "Você é profissional qualificado mas sente que não basta mais",
    "Você é líder de equipe e precisa multiplicar resultados",
    "Você quer criar negócios usando IA como vantagem",
    "Você sente que precisa evoluir mas não sabe por onde começar"
  ];

  const notForYou = [
    "Você acha que IA é 'só uma modinha'",
    "Você não está disposto a mudar",
    "Você quer fórmulas mágicas sem esforço",
    "Você prefere reclamar a agir",
    "Você já domina criação de agentes",
    "Você busca curso teórico sem prática"
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Esta Imersão É <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Para Você?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-900/20 border-2 border-green-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              É PARA VOCÊ SE:
            </h3>
            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-900/20 border-2 border-red-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              NÃO É PARA VOCÊ SE:
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-white font-bold">
            Seja honesto consigo mesmo. <span className="text-yellow-400">Vagas são limitadas.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
