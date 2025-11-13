import React from 'react';
import { X, Check, ArrowRight } from 'lucide-react';

const Problem = () => {
  const withoutAI = [
    "Trabalha 8h/dia",
    "Capacidade limitada",
    "1 tarefa por vez",
    "Salário estagnado",
    "Medo da substituição",
    "Foco operacional"
  ];

  const withIE = [
    "Agentes trabalham 24h/dia",
    "Capacidade exponencial",
    "10+ tarefas simultâneas",
    "Salário 3x maior",
    "Mestre da orquestração",
    "Foco estratégico"
  ];

  return (
    <section id="problem" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              A Nova Analfabetização
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="text-white">Não Saber </span>
            <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">
              Trabalhar com IA
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-4">
            em 2025 é como <span className="text-red-400 font-bold">não saber usar e-mail</span> em 2005
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Without AI */}
          <div className="bg-gray-800/50 border-2 border-red-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
              OBSOLETO
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-500" />
              </div>
              Profissional SEM IA
            </h3>
            
            <ul className="space-y-4">
              {withoutAI.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
              <p className="text-red-400 text-sm font-semibold">
                ⚠️ Risco de substituição: ALTO
              </p>
            </div>
          </div>

          {/* With IE */}
          <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 border-2 border-green-500/30 rounded-2xl p-8 relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-bl-xl">
              FUTURO
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-green-500" />
              </div>
              Profissional COM IE
            </h3>
            
            <ul className="space-y-4">
              {withIE.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-green-900/20 rounded-lg border border-green-500/30">
              <p className="text-green-400 text-sm font-semibold">
                ✅ Vantagem competitiva: ALTA
              </p>
            </div>
          </div>
        </div>

        {/* Arrow Between */}
        <div className="flex justify-center my-8">
          <div className="bg-gray-800 rounded-full p-4">
            <ArrowRight className="w-8 h-8 text-yellow-500" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-white font-bold mb-6">
            Qual lado você escolhe?
          </p>
          <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-red-500/50">
            QUERO SER EXPONENCIAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Problem;
