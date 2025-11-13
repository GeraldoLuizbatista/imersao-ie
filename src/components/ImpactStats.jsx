import React from 'react';
import { TrendingDown, Users, Briefcase, AlertCircle } from 'lucide-react';

const ImpactStats = () => {
  const stats = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      value: "65%",
      label: "das gerências médias desaparecerão até 2026",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "40%",
      label: "dos empregos atuais serão automatizados",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "3%",
      label: "dos profissionais dominam IA",
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      value: "97%",
      label: "competem pelas sobras do mercado",
      color: "from-red-600 to-red-800"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">A </span>
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Janela Está Fechando
            </span>
            <span className="text-white">. Rápido.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enquanto você lê isso, o mercado está mudando irreversivelmente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 bg-gradient-to-br ${stat.color} rounded-xl mb-4 text-white`}>
                  {stat.icon}
                </div>
                
                <h3 className="text-5xl font-black text-white mb-3">
                  {stat.value}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                <div className={`absolute transform rotate-45 bg-gradient-to-br ${stat.color} w-8 h-8 -right-4 -top-4 opacity-20`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Warning */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-red-900/20 border-2 border-red-500/30 rounded-2xl px-8 py-6 max-w-2xl">
            <p className="text-lg text-gray-300">
              <span className="text-red-400 font-bold">Atenção:</span> Esses números não são previsões.
              <br />
              <span className="text-white font-semibold">São realidades em andamento.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
