import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "CEO, Tech Solutions",
      text: "Em 3 horas criei um agente que economiza 15h/semana da minha equipe. Em 90 dias, ROI de 2.000%. Melhor decisão da minha carreira.",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Maria Santos",
      role: "Gerente de Marketing",
      text: "Eu estava cética. Mas a metodologia é tão prática que criei 3 assistentes no primeiro mês. Minha produtividade triplicou.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "Pedro Costa",
      role: "Empreendedor",
      text: "Finalmente entendi como usar IA no meu negócio. Os instrutores são fenomenais. Saí do evento com tudo funcionando.",
      rating: 5,
      image: "🧑‍💼"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            O Que Dizem <span className="bg-gradient-to-r from-yellow-500 to-red-600 bg-clip-text text-transparent">Nossos Alunos</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <Quote className="w-10 h-10 text-yellow-500/30 mb-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-900/50 border border-gray-700 rounded-xl px-8 py-6">
            <p className="text-gray-300 mb-2">Satisfação dos participantes:</p>
            <p className="text-5xl font-black text-green-400">95%</p>
            <p className="text-gray-400 text-sm mt-2">Recomendam para colegas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
