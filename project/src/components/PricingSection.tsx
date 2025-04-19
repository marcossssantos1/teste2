import React, { useRef, useState } from 'react';
import { Check, X, ArrowRight, ArrowDown } from 'lucide-react';
import { AnimatedButton } from './ui/AnimatedButton';
import { useInView } from '../hooks/useInView';

interface PricingFeatureProps {
  included: boolean;
  text: string;
}

const PricingFeature: React.FC<PricingFeatureProps> = ({ included, text }) => (
  <div className="flex items-center py-1.5">
    {included ? (
      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
    ) : (
      <X className="w-5 h-5 text-red-400 mr-3 flex-shrink-0" />
    )}
    <span className={included ? "text-indigo-100" : "text-indigo-300/60"}>{text}</span>
  </div>
);

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowAllFeatures(!showAllFeatures);
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Escolha o plano ideal para você
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Plano Básico */}
          <div className={`bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden transition-all duration-700 delay-100 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-white">PLANO BÁSICO</h3>
              <p className="text-sm text-indigo-300 mb-4">PAGAMENTO ÚNICO</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">R$8</span>
              </div>
              
              <div className="space-y-1 mb-8">
                <PricingFeature included={true} text="Material completo: 200 Atividades de matemática para crianças autistas." />
                <PricingFeature included={true} text="6 Meses de Acesso: Tenha acesso ao produto por apenas 6 meses." />
                <PricingFeature included={false} text="Todos os bônus: Disponível apenas no Plano Completo!" />
                <PricingFeature included={false} text="+ 4 mil atividades: Disponível apenas no Plano Completo!" />
                <PricingFeature included={false} text="+ 10 Produtos: Disponível apenas no Plano Completo!" />
                <PricingFeature included={false} text="Atualizações Mensais: Disponível apenas no Plano Completo!" />
                <PricingFeature included={false} text="Comunidade Exclusiva: Disponível apenas no Plano Completo!" />
              </div>
              
              <AnimatedButton 
                href="https://pay.kirvano.com/5105557b-89a2-43c9-a938-7ae86542828a"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all duration-300"
              >
                QUERO ESSA OPÇÃO!
                <ArrowRight className="ml-2 w-5 h-5" />
              </AnimatedButton>
            </div>
          </div>

          {/* Plano Completo */}
          <div className={`relative bg-gradient-to-b from-indigo-900/60 to-purple-900/60 backdrop-blur-lg rounded-xl border border-indigo-500/30 overflow-hidden transition-all duration-700 delay-300 transform ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="absolute -top-5 left-0 right-0 flex justify-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold py-1 px-4 rounded-full">
                MAIS VENDIDO!
              </div>
            </div>
            
            <div className="p-8 pt-10">
              <h3 className="text-2xl font-bold mb-2 text-white">PLANO COMPLETO</h3>
              
              <p className="text-sm text-indigo-300 mb-6">
                Comprando nosso KIT COMPLETO você tem acesso ao nosso produto completo com todos os bônus, acesso vitalício 
                + acesso gratuito a nossa comunidade com mais de 30 mil mamães e professores.
              </p>
              
              <div className="mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-lg font-medium text-indigo-300 line-through mr-2">R$286,00</span>
                  <span className="text-4xl font-bold text-white">R$14,00</span>
                </div>
                <p className="text-center text-sm text-indigo-300 mt-1">PAGAMENTO ÚNICO</p>
              </div>
              
              <div className="space-y-1 mb-4">
                <PricingFeature included={true} text="Material completo: 200 atividades de matemática adaptadas" />
                <PricingFeature included={true} text="Acesso vitalício ao conteúdo" />
                <PricingFeature included={true} text="Todos os 7 bônus inclusos" />
                <PricingFeature included={true} text="+ 4 mil atividades extras" />
                <PricingFeature included={true} text="Atualizações mensais gratuitas" />
                <PricingFeature included={true} text="Acesso à comunidade exclusiva" />
              </div>
              
              <div 
                className={`space-y-1 mb-6 transition-all duration-500 ${
                  showAllFeatures ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <PricingFeature included={true} text="Kit reforço escolar" />
                <PricingFeature included={true} text="Kit inglês e espanhol" />
                <PricingFeature included={true} text="Kit fichas de leitura infantil" />
                <PricingFeature included={true} text="Kit jogos educativos" />
                <PricingFeature included={true} text="Kit alfabeto cursivo" />
                <PricingFeature included={true} text="Kit coordenação motora" />
                <PricingFeature included={true} text="Certificado infantil" />
              </div>
              
              <button 
                onClick={toggleFeatures}
                className="w-full text-indigo-300 text-sm flex items-center justify-center mb-6 hover:text-indigo-200 transition-colors duration-300"
              >
                {showAllFeatures ? "Ver menos" : "Ver todos os benefícios"}
                {showAllFeatures ? <ArrowUp className="ml-1 w-4 h-4" /> : <ArrowDown className="ml-1 w-4 h-4" />}
              </button>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <AnimatedButton 
                  href="https://pay.kirvano.com/5105557b-89a2-43c9-a938-7ae86542828a"
                  className="relative w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-lg inline-flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105"
                >
                  SIM! QUERO O COMBO COMPLETO!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </AnimatedButton>
              </div>
              
              <p className="text-center text-sm text-indigo-300 mt-4">
                APROVEITE AGORA: Você NÃO vai encontrar esse preço depois.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

const ArrowUp = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m18 15-6-6-6 6"/>
  </svg>
);