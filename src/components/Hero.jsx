import React from 'react';
import { ArrowRight, AlertTriangle, Zap, Calendar, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Alert Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          <span>Sua empresa tem data de validade</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
            VOCÊ SERÁ SUBSTITUÍDO
          </span>
          <br />
          <span className="text-white">
            PELA IA?
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto font-light">
          Ou será quem substitui <span className="text-red-400 font-bold">usando IA</span>?
        </p>

        {/* IE Formula */}
        <div className="flex items-center justify-center gap-4 text-3xl md:text-4xl font-bold mb-8 flex-wrap">
          <span className="text-gray-400">IH</span>
          <span className="text-red-500">+</span>
          <span className="text-gray-400">IA</span>
          <span className="text-red-500">=</span>
          <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
            IE
          </span>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          <span className="text-white font-semibold">Inteligência Humana</span> + 
          <span className="text-white font-semibold"> Inteligência Artificial</span> = 
          <span className="text-yellow-400 font-bold"> Inteligência Exponencial</span>
        </p>

        {/* Event Details */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-red-500" />
            <span>[DATA DO EVENTO]</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-red-500" />
            <span>8h30 às 18h00</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>[LOCAL]</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button 
            onClick={scrollToPricing}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-lg font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              GARANTA SUA VAGA - 50% OFF
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Urgency Text */}
        <div className="flex items-center justify-center gap-2 text-yellow-400 animate-pulse">
          <Zap className="w-5 h-5" />
          <span className="text-sm font-semibold">Restam apenas [X] vagas</span>
        </div>

        {/* Scarcity Counter */}
        <div className="mt-8 inline-block">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg px-6 py-3">
            <p className="text-sm text-gray-400 mb-1">Inscritos nas últimas 24h:</p>
            <p className="text-3xl font-bold text-red-500">+127</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">30+</p>
            <p className="text-sm text-gray-400">Negócios Criados</p>
          </div>
          <div className="h-12 w-px bg-gray-700"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">80%</p>
            <p className="text-sm text-gray-400">Redução Operacional</p>
          </div>
          <div className="h-12 w-px bg-gray-700"></div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">24/7</p>
            <p className="text-sm text-gray-400">Agentes Trabalhando</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
