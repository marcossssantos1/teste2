import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

// Example images from Pexels - replace with your actual content images
const sampleImages = [
  "https://images.pexels.com/photos/4260325/pexels-photo-4260325.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8612928/pexels-photo-8612928.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4260752/pexels-photo-4260752.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4145355/pexels-photo-4145355.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Samples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sampleImages.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + sampleImages.length) % sampleImages.length);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-indigo-950 to-purple-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Conheça um pouco das nossas atividades
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Essa é uma pequena amostra do nosso produto, nosso material completo possui mais de 200 atividades 
            focadas em incorporar a matemática no cotidiano da sua criança autista.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              <div 
                className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {sampleImages.map((image, index) => (
                  <div key={index} className="min-w-full px-2">
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl h-full">
                      <img 
                        src={image} 
                        alt={`Exemplo de atividade ${index + 1}`} 
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {sampleImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                index === activeIndex ? 'bg-indigo-400' : 'bg-white/30'
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Samples;