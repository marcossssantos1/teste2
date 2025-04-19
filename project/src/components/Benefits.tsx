import React, { useEffect, useRef } from 'react';
import { Heart, Brain, Smile, Users, School, Focus } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 delay-${delay} transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 h-full border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        <div className="relative flex items-center mb-4">
          <div className="p-2 bg-indigo-500/20 rounded-lg mr-3">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">{title}</h3>
      </div>
    </div>
  );
};

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 right-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Benefícios para crianças autistas
          </h2>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
            Desenvolvimento completo e adaptado para as necessidades especiais
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Smile className="w-6 h-6 text-indigo-300" />} 
            title="Melhora o comportamento e o convívio social da criança!" 
            delay={100}
          />
          <BenefitCard 
            icon={<Brain className="w-6 h-6 text-indigo-300" />} 
            title="Desenvolvimento de habilidades cognitivas e lógicas" 
            delay={200}
          />
          <BenefitCard 
            icon={<Heart className="w-6 h-6 text-indigo-300" />} 
            title="Trabalha a habilidade da criança em reconhecer Emoções e Sentimentos" 
            delay={300}
          />
          <BenefitCard 
            icon={<Users className="w-6 h-6 text-indigo-300" />} 
            title="Melhora a interação e comunicação da criança" 
            delay={400}
          />
          <BenefitCard 
            icon={<Focus className="w-6 h-6 text-indigo-300" />} 
            title="Desenvolve a concentração e adaptação ao ambiente escolar e social" 
            delay={500}
          />
          <BenefitCard 
            icon={<School className="w-6 h-6 text-indigo-300" />} 
            title="Facilitação da integração Escolar" 
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;