import React from 'react';
import { ArrowRight, AlertTriangle, Zap, Calendar, MapPin, Clock, Target, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
          <Target className="w-5 h-5 text-purple-400" />
          <span className="text-white font-bold text-sm uppercase tracking-wider">
            Imersão Presencial
          </span>
          <div className="w-px h-4 bg-purple-500/30"></div>
          <span className="text-purple-300 text-sm">1 Dia Intensivo</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-red-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          <span>Sua empresa tem data de validade</span>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4 tracking-wide">
            IMERSÃO IE - INTELIGÊNCIA EXPONENCIAL
          </h2>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            VOCÊ SERÁ SUBSTITUÍDO
          </span>
          <br />
          <span className="text-white">PELA IA?</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto font-light">
          Ou será quem substitui <span className="text-red-400 font-bold">usando IA</span>?
        </p>

        <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-8 flex-wrap">
          <span className="text-gray-400">IH</span>
          <span className="text-red-500">+</span>
          <span className="text-gray-400">IA</span>
          <span className="text-red-500">=</span>
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">IE</span>
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 max-w-3xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-white font-semibold mb-4">
            Aprenda a criar <span className="text-yellow-400">Agentes e Assistentes de IA</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-300">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span>Em 1 dia</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Sem programação</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>Resultados práticos</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-6 max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-red-400" />
              <span className="font-bold text-lg">[DATA DO EVENTO]</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-red-500/30"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="font-bold text-lg">8h30 às 18h00</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-red-500/30"></div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-400" />
              <span className="font-bold text-lg">[LOCAL]</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={scrollToPricing}
            className="group relative px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              GARANTIR MINHA VAGA - 50% OFF
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-yellow-400 animate-pulse mb-8">
          <Zap className="w-5 h-5" />
          <span className="text-sm font-semibold">Restam apenas [X] vagas</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
            <p className="text-xs text-gray-400 mb-1">Criado por:</p>
            <p className="text-sm font-bold text-white">30+ Negócios</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
            <p className="text-xs text-gray-400 mb-1">Tech Partner:</p>
            <p className="text-sm font-bold text-white">Oracle & Nvidia</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-2">
            <p className="text-xs text-gray-400 mb-1">Economia de:</p>
            <p className="text-sm font-bold text-green-400">80% Operacional</p>
          </div>
        </div>

        <div className="inline-block">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg px-6 py-3">
            <p className="text-sm text-gray-400 mb-1">Inscritos nas últimas 24h:</p>
            <p className="text-3xl font-bold text-red-500">+127</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
