import React from 'react';
import { MapPin, Plane, Home, Utensils, TrendingDown, CheckCircle, Users, Award } from 'lucide-react';

const WhyUberlandia = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-white">Por que fazer em </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Uberlândia?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mesma qualidade das imersões de São Paulo, com economia de até{' '}
            <span className="text-green-400 font-bold text-2xl">R$ 7.000</span>
          </p>
        </div>

        {/* Comparação SP vs Uberlândia */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          
          {/* São Paulo */}
          <div className="bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-400">São Paulo</h3>
                <p className="text-gray-400 text-sm">Investimento típico</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Imersão:</span>
                </div>
                <span className="font-bold text-white">R$ 3.000</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Passagem aérea (ida e volta):</span>
                </div>
                <span className="font-bold text-white">R$ 3.000-4.000</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Hospedagem (2 noites):</span>
                </div>
                <span className="font-bold text-white">R$ 600</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-red-500/20">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-300">Alimentação:</span>
                </div>
                <span className="font-bold text-white">R$ 400</span>
              </div>
            </div>
            
            <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">TOTAL:</span>
                <span className="text-3xl font-black text-red-400">R$ 7.000-8.000</span>
              </div>
            </div>
          </div>
          
          {/* Uberlândia */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/10 border-2 border-green-500/50 rounded-2xl p-8 relative overflow-hidden">
            
            {/* Badge Destaque */}
            <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
              💰 ECONOMIA 90%
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-400">Uberlândia</h3>
                <p className="text-gray-400 text-sm">Investimento local</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between py-3 border-b border-green-500/20">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Imersão (50% OFF):</span>
                </div>
                <span className="font-bold text-green-400">R$ 750</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-green-500/20">
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5 text-gray-400 line-through" />
                  <span className="text-gray-400 line-through">Passagem aérea:</span>
                </div>
                <span className="font-bold text-green-400">R$ 0</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-green-500/20">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-gray-400 line-through" />
                  <span className="text-gray-400 line-through">Hospedagem:</span>
                </div>
                <span className="font-bold text-green-400">R$ 0</span>
              </div>
              
              <div className="flex items-center justify-between py-3 border-b border-green-500/20">
                <div className="flex items-center gap-2">
                  <Utensils className="w-5 h-5 text-gray-400 line-through" />
                  <span className="text-gray-400 line-through">Alimentação extra:</span>
                </div>
                <span className="font-bold text-green-400">R$ 0</span>
              </div>
            </div>
            
            <div className="bg-green-900/30 border-2 border-green-500/50 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-white">TOTAL:</span>
                <span className="text-3xl font-black text-green-400">R$ 750</span>
              </div>
            </div>
            
            {/* Economia */}
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center justify-center gap-2">
                <TrendingDown className="w-6 h-6 text-green-400" />
                <p className="text-xl font-bold text-green-300">
                  Você economiza R$ 6.250-7.250!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios Adicionais */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/30 transition-colors">
            <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Sem Deslocamento</h4>
            <p className="text-gray-400">
              Aprenda na sua cidade, durma na sua casa, sem estresse de viagem
            </p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/30 transition-colors">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Networking Local</h4>
            <p className="text-gray-400">
              Conecte-se com empreendedores e profissionais da sua região
            </p>
          </div>
          
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center hover:border-green-500/30 transition-colors">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Mesma Qualidade</h4>
            <p className="text-gray-400">
              Instrutores experientes, conteúdo completo, certificado incluído
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              🎯 Invista no seu futuro, não em passagens aéreas
            </h3>
            <p className="text-gray-300 mb-6">
              Use o valor que economizou para reinvestir no seu negócio ou na sua formação!
            </p>
            <button 
              onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Garantir Minha Vaga Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUberlandia;
