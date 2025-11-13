import React from 'react';
import { CheckCircle, TrendingUp, Zap, Target } from 'lucide-react';

const Results = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            O Que Você <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">Vai Sair Com</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-green-900/20 border-2 border-green-500/30 rounded-2xl p-8">
            <Zap className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Imediato (mesmo dia)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>2 agentes funcionais criados por você</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>1 assistente personalizado operacional</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Biblioteca com 50+ templates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Certificado de participação</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-900/20 border-2 border-blue-500/30 rounded-2xl p-8">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Curto Prazo (30 dias)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Processos automatizados funcionando</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Economia de 10-20h/semana</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Suporte técnico garantido</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <span>Comunidade ativa</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-900/20 border-2 border-purple-500/30 rounded-2xl p-8">
            <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Longo Prazo (90+ dias)</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <span>Equipe completa de agentes operando</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <span>ROI positivo comprovado</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <span>Vantagem competitiva estabelecida</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                <span>Você como referência em IA</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
