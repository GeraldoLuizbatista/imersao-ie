import React from 'react';
import { ArrowRight } from 'lucide-react';

const FloatingCTA = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-red-600 to-red-700 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-[200px]">
          <p className="text-white font-bold text-lg mb-1">
            Imersão IE - 50% OFF
          </p>
          <p className="text-gray-200 text-sm">
            Apenas R$ 1.497 | Restam [X] vagas
          </p>
        </div>

        <button 
          onClick={scrollToPricing}
          className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
        >
          GARANTIR VAGA
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FloatingCTA;
