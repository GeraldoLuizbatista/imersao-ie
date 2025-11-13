import React from 'react';
import { Briefcase, Award, TrendingUp, Cpu, Users, Building } from 'lucide-react';

const Instructors = () => {
  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              Seus Mentores
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Quem Vai Te <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Transformar</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aprenda com quem faz acontecer no mercado real, não apenas na teoria
          </p>
        </div>

        {/* Geraldo Card */}
        <div className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-400" />
                </div>
              </div>
              {/* Replace with actual image */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white font-bold text-sm">GERALDO OLIVEIRA</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8 md:p-12">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                Geraldo Oliveira
              </h3>
              <p className="text-xl text-blue-400 font-bold mb-6">
                Empreendedor Serial | 30+ Negócios Criados
              </p>

              {/* Quote */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  "Nos meus 30 negócios, aprendi uma verdade brutal: Empresas que não evoluem não fecham devagar - elas simplesmente desaparecem. E o mesmo vale para profissionais."
                </p>
              </div>

              {/* Experience Tags */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">30+ negócios criados</p>
                    <p className="text-gray-400 text-sm">Em diferentes mercados e setores</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">15+ anos de experiência</p>
                    <p className="text-gray-400 text-sm">Gerando R$ 15 milhões anuais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Especialista em Adaptação</p>
                    <p className="text-gray-400 text-sm">Sobreviveu e venceu 3 crises econômicas</p>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-black/30 rounded-xl p-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-3 font-semibold">
                  Ele vai te ensinar:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Como não se tornar obsoleto
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Por que a gerência média está desaparecendo
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    Estratégias de adaptação que funcionam
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Diego Card */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <div className="relative h-[400px] md:h-auto bg-gradient-to-br from-purple-600 to-pink-700 md:order-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-800 rounded-full flex items-center justify-center">
                  <Cpu className="w-24 h-24 text-purple-400" />
                </div>
              </div>
              {/* Replace with actual image */}
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white font-bold text-sm">DIEGO</p>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-8 md:p-12 md:order-1">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2">
                Diego
              </h3>
              <p className="text-xl text-purple-400 font-bold mb-6">
                CTO Biofy | Mestrando IA | Parceiro Oracle & Nvidia
              </p>

              {/* Quote */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-l-4 border-purple-500 p-6 rounded-r-lg mb-8">
                <p className="text-lg text-gray-200 italic leading-relaxed">
                  "Na Biofy, reduzimos 80% do trabalho operacional com agentes. Não demitimos ninguém - promovemos todos para funções estratégicas."
                </p>
              </div>

              {/* Experience Tags */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Building className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">CTO da Biofy</p>
                    <p className="text-gray-400 text-sm">Parceira destaque Oracle e Nvidia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Mestrando em IA</p>
                    <p className="text-gray-400 text-sm">Academia + Mercado = Excelência</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Sócio Iuptec</p>
                    <p className="text-gray-400 text-sm">Criador de softwares corporativos</p>
                  </div>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-black/30 rounded-xl p-6">
                <p className="text-sm text-gray-400 uppercase tracking-wider mb-3 font-semibold">
                  Ele vai te ensinar:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Construir agentes do zero (sem programar)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Criar assistentes personalizados
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Cases reais Oracle, Nvidia e Biofy
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Combined Strength */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-2 border-blue-500/30 rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-2xl text-white font-bold mb-4">
              🚀 A Combinação Perfeita
            </p>
            <p className="text-lg text-gray-300">
              <span className="text-blue-400 font-bold">Geraldo</span> traz visão estratégica e experiência empresarial.
              <br />
              <span className="text-purple-400 font-bold">Diego</span> traz domínio técnico e casos reais.
              <br />
              <span className="text-white font-bold">Você</span> recebe o melhor dos dois mundos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
