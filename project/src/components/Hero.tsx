import React, { useEffect, useState } from 'react';
import { ArrowRight, Brain, Stars } from 'lucide-react';
import { AnimatedButton } from './ui/AnimatedButton';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className={`relative z-10 max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center justify-center mb-6">
          <Brain className="w-10 h-10 mr-3 text-indigo-300" />
          <Stars className="w-10 h-10 text-indigo-300" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
          Matemática Interativa
        </h1>
        
        <h2 className="text-xl md:text-2xl mb-6 text-indigo-200">
          Estímulo e diversão para crianças autistas!
        </h2>
        
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-indigo-100">
          Conheça o Material Adaptado com mais de 200 páginas de atividades focadas em inserir 
          a matemática no cotidiano de crianças autistas!
        </p>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative">
            <AnimatedButton 
              href="#pricing" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105"
            >
              QUERO COMPRAR O PRODUTO HOJE!
              <ArrowRight className="ml-2 w-5 h-5" />
            </AnimatedButton>
          </div>
        </div>

        <div className="mt-8 text-indigo-200 font-medium">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-300">
            De R$ 286 por apenas R$ 10,00
          </p>
          <p className="text-sm mt-2 text-indigo-300">*Promoção limitada!</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;