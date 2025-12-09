import React from 'react';
import { Briefcase, Brain, Award, TrendingUp, Users, Zap, Building2 } from 'lucide-react';

const Instructors = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-2 mb-4">
            <Award className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
              Quem Vai Te Ensinar
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Instrutores <span className="text-red-500">Empreendedores</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Aprenda com quem realmente usa IA para <span className="text-white font-semibold">criar e escalar negócios</span> no dia a dia
          </p>
        </div>

        {/* Grid de Instrutores */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* ==================== GERALDO OLIVEIRA ==================== */}
          <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
            
            {/* Foto do Instrutor */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 border-4 border-red-500/30 overflow-hidden shadow-2xl group-hover:border-red-500/50 transition-all">
                {/* ADICIONE A FOTO AQUI: */}
                {/* <img src="/images/geraldo.jpg" alt="Geraldo Oliveira" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-red-400" />
                </div>
              </div>
              
              {/* Badge de destaque */}
              <div className="absolute -top-2 -right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                <Award className="w-3 h-3 inline mr-1" />
                30+ Negócios
              </div>
            </div>

            {/* Informações */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Geraldo Oliveira</h3>
              <p className="text-red-400 font-semibold mb-3">Serial Entrepreneur & Instrutor</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Criador de mais de 30 negócios, especialista em estratégias de crescimento com IA. 
                Mentor de empreendedores que querem escalar rapidamente usando tecnologia.
              </p>
            </div>

            {/* Conquistas */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Fundador Tucont AI</p>
                  <p className="text-gray-400 text-xs">Soluções empresariais com IA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Jornada Empreendedora</p>
                  <p className="text-gray-400 text-xs">Formou 500+ empreendedores</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Resultados Comprovados</p>
                  <p className="text-gray-400 text-xs">80% redução operacional com IA</p>
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Especialidades:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full">Estratégias de Negócio</span>
                <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full">Growth Hacking</span>
                <span className="bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full">IA para Vendas</span>
              </div>
            </div>
          </div>

          {/* ==================== DIEGO ==================== */}
          <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            
            {/* Foto do Instrutor */}
            <div className="relative mb-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-4 border-blue-500/30 overflow-hidden shadow-2xl group-hover:border-blue-500/50 transition-all">
                {/* ADICIONE A FOTO AQUI: */}
                {/* <img src="/images/diego.jpg" alt="Diego" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center">
                  <Brain className="w-16 h-16 text-blue-400" />
                </div>
              </div>
              
              {/* Badge de destaque */}
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                <Zap className="w-3 h-3 inline mr-1" />
                CTO Biofy
              </div>
            </div>

            {/* Informações */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Diego</h3>
              <p className="text-blue-400 font-semibold mb-3">CTO & Instrutor Técnico</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Chief Technology Officer da Biofy, especialista em implementação de IA em empresas. 
                Transforma conceitos complexos em soluções práticas e aplicáveis.
              </p>
            </div>

            {/* Conquistas */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">CTO Biofy</p>
                  <p className="text-gray-400 text-xs">Liderando transformação digital</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Parceiro Oracle & Nvidia</p>
                  <p className="text-gray-400 text-xs">Certificado em IA empresarial</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Agentes IA Autônomos</p>
                  <p className="text-gray-400 text-xs">Cria soluções sem código</p>
                </div>
              </div>
            </div>

            {/* Especialidades */}
            <div className="mt-6 pt-6 border-t border-gray-700/50">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Especialidades:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">IA Generativa</span>
                <span className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">Agentes Autônomos</span>
                <span className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full">Automação</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Adicional */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Aprenda diretamente com quem <span className="text-white font-semibold">usa IA para criar resultados reais</span> em empresas e negócios
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-blue-600/20 border border-gray-700 rounded-lg px-6 py-3">
            <Users className="w-5 h-5 text-red-400" />
            <span className="text-white font-semibold">Método prático e testado em 30+ negócios</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
