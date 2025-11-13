import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border-2 border-green-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <Shield className="w-20 h-20 text-green-400 mx-auto mb-8" />
            
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Garantia <span className="text-green-400">Incondicional</span>
            </h2>
            
            <p className="text-2xl text-gray-200 mb-8">
              100% do Seu Dinheiro de Volta
            </p>

            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Se até o <span className="text-green-400 font-bold">coffee break da manhã</span> você achar que não é para você, nós devolvemos <span className="text-white font-bold">100% do valor</span> investido.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-bold mb-2">1. Devolva o Material</p>
                <p className="text-gray-400 text-sm">Sem problemas</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-bold mb-2">2. Avise a Organização</p>
                <p className="text-gray-400 text-sm">Processo simples</p>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <p className="text-white font-bold mb-2">3. Receba 100%</p>
                <p className="text-gray-400 text-sm">Reembolso total</p>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl text-white font-bold">
                Sem Perguntas. Sem Burocracias. Sem Ressentimentos.
              </p>
            </div>

            <p className="text-gray-400 mt-8 text-sm italic">
              Confiamos tanto no conteúdo que assumimos TODO o risco.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
