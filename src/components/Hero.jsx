import React, { useState, useEffect } from 'react';
import { ArrowRight, AlertTriangle, Zap, Calendar, MapPin, Clock, Target, Users, TrendingUp, Briefcase, Sparkles, Rocket, Brain } from 'lucide-react';
import imgMulher from '/images/profissional-mulher.jpg';
import imgHomem from '/images/profissional-homem.jpg';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2026-01-10T08:30:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          <div className="lg:col-span-3 space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/30 to-orange-600/30 border-2 border-red-500/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg shadow-red-500/20 animate-pulse">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                <span className="text-white font-bold text-sm uppercase tracking-wider">
                  Sua Carreira e Empresa Tem Data de Validade
                </span>
              </div>

              <div className="flex items-center gap-3 bg-black/50 backdrop-blur-sm border border-red-500/30 rounded-lg px-4 py-3 inline-flex">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-white text-sm font-semibold">Evento em:</span>
                <div className="flex gap-2">
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-xl">{timeLeft.days}</div>
                    <div className="text-gray-400 text-xs">dias</div>
                  </div>
                  <div className="text-red-400 font-bold text-xl">:</div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-xl">{timeLeft.hours}</div>
                    <div className="text-gray-400 text-xs">hrs</div>
                  </div>
                  <div className="text-red-400 font-bold text-xl">:</div>
                  <div className="text-center">
                    <div className="text-red-400 font-bold text-xl">{timeLeft.minutes}</div>
                    <div className="text-gray-400 text-xs">min</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4">
                <span className="bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                  VOCÊ SERÁ SUBSTITUÍDO
                </span>
                <br />
                <span className="text-white">PELA IA?</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light">
                Ou será quem substitui <span className="text-red-400 font-bold">usando IA</span>?
              </p>
            </div>

            <div className="flex items-center gap-4 text-2xl md:text-3xl font-bold">
              <span className="text-gray-400">IH</span>
              <span className="text-red-500">+</span>
              <span className="text-gray-400">IA</span>
              <span className="text-red-500">=</span>
              <span className="bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent text-4xl">
                IE
              </span>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
              <p className="text-lg text-white font-semibold mb-2">
                Aprenda a criar <span className="text-yellow-400">Agentes e Assistentes de IA</span>
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>Em 1 dia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-400" />
                  <span>Sem programação</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>Resultados práticos</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={scrollToPricing}
                className="group w-full relative px-8 py-5 bg-gradient-to-r from-red-600 to-red-700 text-white text-xl font-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GARANTIR MINHA VAGA - 50% OFF
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              <div className="flex items-center justify-center gap-2 text-yellow-400">
                <Zap className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">Vagas Limitadas - Apenas 40 Lugares</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/20 rounded-lg p-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white font-semibold">10/01/2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white font-semibold">8h30-18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span className="text-white font-semibold">FAU - Uberlândia</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-lg px-3 py-1.5">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-white">Profissionais CLT</span>
                </div>
                <div className="text-gray-600 text-sm">+</div>
                <div className="flex items-center gap-2 bg-blue-900/30 border border-blue-500/30 rounded-lg px-3 py-1.5">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-xs text-white">Empreendedores</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-gray-400">Realização:</span>
                <span className="text-white font-semibold">Tucont AI</span>
                <span className="text-gray-600">×</span>
                <span className="text-yellow-400 font-semibold">Jornada Empreendedora</span>
                <span className="text-gray-600">×</span>
                <span className="text-blue-400 font-semibold">Iuptec</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 hidden lg:block">
            <div className="relative h-[700px] flex items-center justify-center">
              
              <div className="flex items-center justify-center gap-6">
                  
                <div className="relative">
                    <img 
                        src={imgMulher}
                        alt="Profissional Executiva" 
                        className="w-64 h-96 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>

                <div className="relative">
                    <img 
                        src={imgHomem}
                        alt="Empreendedor Tech" 
                        className="w-64 h-96 object-cover rounded-2xl shadow-2xl"
                      />
                    </div>
                  </div>
              
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  <Zap className="w-4 h-4 inline mr-1" />
                  IA Generativa
                </div>

                <div className="absolute top-24 left-12 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce animation-delay-2000">
                  <Brain className="w-4 h-4 inline mr-1" />
                  Prompt Engineering
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce animation-delay-4000">
                  <Sparkles className="w-4 h-4 inline mr-1" />
                  Liderança
                </div>
                    
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                  <Rocket className="w-4 h-4 inline mr-1" />
                  Inovação
                </div>
             
                <div className="absolute bottom-24 right-12 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce animation-delay-2000">
                  <Briefcase className="w-4 h-4 inline mr-1" />
                  Business AI
                </div>
                
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce animation-delay-4000">
                  <Users className="w-4 h-4 inline mr-1" />
                  Agentes AI
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2">
            <p className="text-xs text-gray-400">Experiência:</p>
            <p className="text-sm font-bold text-white">30+ Negócios</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2">
            <p className="text-xs text-gray-400">Tech Partners:</p>
            <p className="text-sm font-bold text-white">Oracle & Nvidia</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2">
            <p className="text-xs text-gray-400">Economia:</p>
            <p className="text-sm font-bold text-green-400">80% Operacional</p>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-lg px-3 py-2">
            <p className="text-xs text-gray-400">Inscritos 24h:</p>
            <p className="text-lg font-bold text-red-500">+127</p>
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
