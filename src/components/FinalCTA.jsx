import React from 'react';
import { ArrowRight, Clock, MapPin, Calendar, Zap } from 'lucide-react';

const FinalCTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
            A Decisão é Sua.
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              O Tempo Não.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Option 1 - Bad */}
          <div className="bg-black/50 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-8">
            <div className="text-6xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-white mb-4">Opção 1: Continuar Como Está</h3>
            <ul className="space-y-3 text-gray-300 text-left">
              <li>• Competindo com multidões</li>
              <li>• Vendo oportunidades passarem</li>
              <li>• Rezando para não ser substituído</li>
              <li>• Esperando um milagre</li>
            </ul>
          </div>

          {/* Option 2 - Good */}
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-2 border-green-500/50 rounded-2xl p-8">
            <div className="text-6xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-white mb-4">Opção 2: Tornar-se Exponencial</h3>
            <ul className="space-y-3 text-white font-semibold text-left">
              <li>• Comandando agentes 24/7</li>
              <li>• Multiplicando resultados</li>
              <li>• Liderando a transformação</li>
              <li>• Sendo INDISPENSÁVEL</li>
            </ul>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/30 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">[DATA]</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">8h30 às 18h00</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span className="font-bold">[LOCAL]</span>
            </div>
          </div>

          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-gray-400 line-through text-2xl">R$ 2.997</span>
            </div>
            <p className="text-6xl font-black text-white mb-2">R$ 1.497</p>
            <p className="text-gray-300 text-lg">12x de R$ 124,75 sem juros</p>
          </div>

          <button 
            onClick={scrollToPricing}
            className="group w-full md:w-auto px-12 py-6 bg-gradient-to-r from-yellow-500 to-red-600 text-white text-xl font-black rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-yellow-500/50 flex items-center justify-center gap-3 mx-auto pulse-glow"
          >
            GARANTIR MINHA TRANSFORMAÇÃO AGORA
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Urgency */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-yellow-400 animate-pulse">
            <Zap className="w-6 h-6" />
            <span className="font-bold text-lg">Restam apenas [X] vagas</span>
            <Zap className="w-6 h-6" />
          </div>
          <p className="text-gray-400">Oferta válida até [DATA] ou esgotamento</p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
