import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Preciso saber programar?",
      answer: "NÃO! Zero conhecimento técnico necessário. Tudo é visual e intuitivo. Se você sabe usar computador, você consegue criar agentes de IA."
    },
    {
      question: "Funciona para qualquer área?",
      answer: "SIM! Vendas, marketing, RH, financeiro, operações, jurídico, saúde, educação - IA funciona em TODAS as áreas. Na imersão você aprende a adaptar para seu contexto específico."
    },
    {
      question: "E se eu não conseguir acompanhar?",
      answer: "Impossível ficar para trás! Temos instrutores auxiliares e suporte individualizado durante todo o evento. Além disso, você terá acesso à gravação por 90 dias."
    },
    {
      question: "O que preciso levar?",
      answer: "Apenas seu notebook (Windows, Mac ou Linux) + carregador. Recomendamos também fone de ouvido e mouse. Tudo o mais (material, alimentação, etc) está incluso."
    },
    {
      question: "Vou realmente criar agentes no mesmo dia?",
      answer: "SIM! Você sai com 2 agentes funcionais + 1 assistente personalizado criados por você. Não é demonstração, é você fazendo na prática."
    },
    {
      question: "Tem certificado?",
      answer: "Sim! Certificado digital de participação reconhecido, disponível no dia seguinte ao evento."
    },
    {
      question: "E se eu não puder comparecer?",
      answer: "Você pode: (1) Transferir sua vaga para outra pessoa, (2) Acessar a gravação completa por 90 dias, ou (3) Solicitar reembolso até 7 dias antes do evento."
    },
    {
      question: "Qual o ROI esperado?",
      answer: "Participantes reportam economia de 10-20h/semana, o que equivale a R$ 2.000-4.000/mês em produtividade. O investimento se paga em menos de 30 dias."
    },
    {
      question: "Há suporte após o evento?",
      answer: "SIM! 30 dias de suporte via WhatsApp + grupo exclusivo vitalício com os instrutores e outros participantes."
    },
    {
      question: "Posso levar colegas da empresa?",
      answer: "Sim! Temos descontos progressivos: 2 pessoas = 58% OFF, 3+ pessoas = 63% OFF. Quanto mais pessoas, maior o desconto."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="w-16 h-16 text-blue-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            Perguntas <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ainda tem dúvidas?</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Falar com Suporte
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
