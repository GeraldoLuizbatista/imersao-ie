import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set event date - example: 30 days from now
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

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
    <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-yellow-300 animate-pulse" />
            <p className="text-white font-bold text-lg">
              ⚠️ OFERTA ESPECIAL TERMINA EM:
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
                <p className="text-3xl font-bold text-white">{timeLeft.days}</p>
                <p className="text-xs text-gray-300 uppercase">Dias</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
                <p className="text-3xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</p>
                <p className="text-xs text-gray-300 uppercase">Horas</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
                <p className="text-3xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</p>
                <p className="text-xs text-gray-300 uppercase">Min</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 min-w-[70px]">
                <p className="text-3xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</p>
                <p className="text-xs text-gray-300 uppercase">Seg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
