import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Ana Clara",
    role: "Mãe de Miguel, 6 anos",
    content: "O material é simplesmente fantástico! Meu filho está muito mais interessado em matemática e as atividades são perfeitas para o nível dele. Estamos muito felizes com os resultados.",
    stars: 5,
    avatar: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    name: "Ricardo Mendes",
    role: "Pai de Lucas, 7 anos",
    content: "Depois que começamos a usar o material, notamos uma diferença incrível na forma como meu filho lida com números. As atividades são muito bem adaptadas.",
    stars: 5,
    avatar: "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=120"
  },
  {
    name: "Mariana Costa",
    role: "Professora Especial",
    content: "Como professora, posso dizer que este é um dos melhores materiais que já usei com meus alunos autistas. É completo, bem estruturado e traz resultados muito positivos.",
    stars: 5,
    avatar: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=120"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Depoimentos
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Ainda tem dúvidas? Confira os depoimentos de algumas mamães que amam o TAREFINHA!
          </p>
        </div>

        <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-10 border border-white/10">
          <div className="absolute -top-6 -left-6">
            <Quote className="w-12 h-12 text-indigo-500/30" />
          </div>
          
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="flex flex-col items-center text-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500/50 mb-4" 
                    />
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-indigo-100 mb-6 italic">"{testimonial.content}"</p>
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <p className="text-indigo-300 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;