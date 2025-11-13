import React from 'react';
import { Gift, BookOpen, Video, Sparkles } from 'lucide-react';

const Bonus = () => {
  const bonuses = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "E-book '50 Casos de Uso'",
      description: "50 aplicações práticas de IA para diferentes áreas de negócio",
      value: "R$ 197",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Workshop 'Prompts Avançados'",
      description: "2 horas de aula online gravada sobre prompt engineering",
      value: "R$ 397",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Créditos em Plataformas IA",
      description: "1 mês de acesso premium em ferramentas selecionadas",
      value: "R$ 300",
      gradient: "from-yellow-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Gift className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Bônus <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">Exclusivos</span>
          </h2>
          <p className="text-xl text-gray-300">
            Valor total: <span className="text-yellow-400 font-bold">R$ 894</span> | Você ganha: <span className="text-green-400 font-bold">GRÁTIS</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${bonus.gradient} rounded-xl mb-6 text-white transform group-hover:scale-110 transition-transform`}>
                {bonus.icon}
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{bonus.title}</h3>
                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded">GRÁTIS</span>
              </div>
              
              <p className="text-gray-400 mb-4">{bonus.description}</p>
              
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through">{bonus.value}</span>
                <span className="text-green-400 font-bold">→ R$ 0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonus;
