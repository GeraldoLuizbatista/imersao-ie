import React from 'react';
import { Clock, Coffee, Utensils, Award } from 'lucide-react';

const Agenda = () => {
  const schedule = [
    {
      time: "8h30 - 9h00",
      title: "Credenciamento & Networking",
      description: "Recepção, entrega de kits, coffee de bienvenida",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      time: "9h00 - 10h45",
      title: "Módulo 1: A Extinção Silenciosa",
      description: "Por que empresas e profissionais estão desaparecendo | Com Geraldo Oliveira",
      icon: <Clock className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      instructor: "Geraldo"
    },
    {
      time: "10h45 - 11h00",
      title: "Coffee Break",
      description: "Networking e absorção de conteúdo",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      time: "11h00 - 12h30",
      title: "Módulo 2: Fundamentos Técnicos de IA",
      description: "A tecnologia que vai salvar sua carreira | Com Diego",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      instructor: "Diego"
    },
    {
      time: "12h30 - 13h30",
      title: "Almoço",
      description: "Refeição completa inclusa + networking",
      icon: <Utensils className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    },
    {
      time: "13h30 - 15h00",
      title: "Módulo 3: Mãos à Obra",
      description: "Construa seu primeiro agente funcional | Com Diego",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      instructor: "Diego",
      highlight: true
    },
    {
      time: "15h00 - 15h15",
      title: "Coffee Break",
      description: "Energização para o módulo final",
      icon: <Coffee className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      time: "15h15 - 16h30",
      title: "Módulo 4: Estratégia Exponencial",
      description: "Como implementar IE no seu negócio | Geraldo + Diego",
      icon: <Clock className="w-6 h-6" />,
      color: "from-yellow-500 to-red-600",
      instructor: "Ambos",
      highlight: true
    },
    {
      time: "16h30 - 17h30",
      title: "Módulo 5: Assistentes Personalizados",
      description: "Crie sua equipe de IA | Com Diego",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      instructor: "Diego"
    },
    {
      time: "17h30 - 18h00",
      title: "Encerramento & Certificados",
      description: "Entrega de certificados, foto oficial, próximos passos",
      icon: <Award className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="agenda" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
              Agenda Completa
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Sua Jornada de <span className="bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent">1 Dia</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            8 horas intensas que vão mudar sua relação com inteligência artificial
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {/* Schedule Items */}
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`relative pl-20 ${item.highlight ? 'transform scale-105' : ''}`}
              >
                {/* Icon */}
                <div className={`absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className={`bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 ${
                  item.highlight 
                    ? 'border-yellow-500 shadow-lg shadow-yellow-500/20' 
                    : 'border-gray-800'
                }`}>
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                    <div>
                      <p className="text-sm text-gray-400 font-semibold">{item.time}</p>
                      <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                    </div>
                    {item.instructor && (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        item.instructor === 'Geraldo' ? 'bg-blue-500/20 text-blue-400' :
                        item.instructor === 'Diego' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {item.instructor}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                  
                  {item.highlight && (
                    <div className="mt-4 inline-block bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-3 py-1">
                      <span className="text-yellow-400 text-xs font-semibold">⭐ Momento Hands-On</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-blue-400 mb-2">5</p>
            <p className="text-gray-400 text-sm">Módulos Intensivos</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-green-400 mb-2">8h</p>
            <p className="text-gray-400 text-sm">De Conteúdo</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-purple-400 mb-2">80%</p>
            <p className="text-gray-400 text-sm">Prática</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-4xl font-bold text-red-400 mb-2">3</p>
            <p className="text-gray-400 text-sm">IAs Criadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;

