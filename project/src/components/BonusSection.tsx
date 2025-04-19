import React, { useRef, useState } from 'react';
import { Sparkles, Gift, ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface BonusCardProps {
  title: string;
  originalValue: string;
  description: string;
  index: number;
}

const BonusCard: React.FC<BonusCardProps> = ({ title, originalValue, description, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-${index * 100} transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 backdrop-blur-lg rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 overflow-hidden">
        <div
          onClick={toggleExpand}
          className="p-6 cursor-pointer flex justify-between items-start"
        >
          <div>
            <div className="flex items-center mb-2">
              <Gift className="w-5 h-5 text-indigo-300 mr-2" />
              <h3 className="text-lg font-semibold text-white">{title}</h3>
            </div>
            <p className="text-indigo-300 text-sm mb-2">VALOR: {originalValue}</p>
          </div>
          <div className="text-indigo-300">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
        
        <div 
          className={`px-6 pb-6 pt-0 transition-all duration-300 ${
            isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <p className="text-indigo-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BonusSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const isTitleInView = useInView(titleRef, { threshold: 0.1 });

  const bonuses = [
    {
      title: "20 ESTRATÉGIA DE FOCO E CONCENTRAÇÃO - TEA",
      originalValue: "R$52",
      description: "Muitas crianças com autismo são agitadas, tem a mente acelerada e dificuldades de concentração. A maneira como você estimula o foco de um cérebro com autismo é diferente. Você precisa aplicar estímulos próprios para ele. E é exatamente essas estratégias adaptadas que você vai acessar. São estratégias que vão tranquilizar a criança. E segurar a atenção dela já nos primeiros minutos."
    },
    {
      title: "MANUAL DESVENDANDO O AUTISMO",
      originalValue: "R$18",
      description: "Você quer saber mais sobre o autismo para auxiliar o desenvolvimento do seu pequeno? Você vai aprender sobre a causa, os sintomas, o diagnóstico e o tratamento do autismo. Um manual atualizado, pautado na ciência, com uma linguagem fácil de entender. Finalmente entenda como funciona o comportamento e a mente de crianças com autismo… e melhore o desenvolvimento do seu pequeno com muito amor!"
    },
    {
      title: "GUIA ZERO COMPORTAMENTOS CRÍTICOS",
      originalValue: "R$64",
      description: "Se você deseja ajudar uma criança autista a melhorar o comportamento, confira esse bônus incrível preparado exclusivamente para você. Uma das maiores preocupações da família de uma criança autista é sobre o desenvolvimento, pensando em situações e como eles poderão se tornar cada vez mais independente e autônomos em suas rotinas. Com o nosso material, iremos ensinar como a criança vai aceitar o (não) e esperar pacientemente."
    },
    {
      title: "CADERNO DE LEITURA",
      originalValue: "R$47",
      description: "O caderno de leitura tem como objetivo principal incentivar a prática de leitura e o desejo de ler, nesse caderno iremos aprender: Trabalhar textos reais, desenvolver atividades de leitura compartilhada, socializar a criança em um momento de leitura com a família."
    },
    {
      title: "CADERNO DE ALFABETO",
      originalValue: "R$25",
      description: "Um dos maiores objetivos da nossa apostila é fazer com que as crianças conheçam as letras e sua sequência de maneira lúdica, desenvolvendo a atenção, memória e oralidade. Essa apostila contém todas as letras do alfabeto, trazendo a forma lúdica de aprender."
    },
    {
      title: "CARDÁPIO ADAPTADO DE 30 DIAS",
      originalValue: "R$33",
      description: "Cardápio adaptado de 30 dias para crianças seletivas. 50 receitas hiper deliciosas e nutritivas de café da manhã, almoço e janta para crianças seletivas. Guia definitivo superando a seletividade. Tudo que você precisa para transformas os momentos da refeições em um momento feliz!"
    },
    {
      title: "CERTIFICADO DE CONCLUSÃO",
      originalValue: "R$47",
      description: "Temos uma surpresa para o seu pequeno, um certificado infantil para entrega-lo ao final das atividades. É uma forma de incentivar a sua criança a continuar buscando aprendizado! Totalmente gratuito!"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-purple-950 to-indigo-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div 
          ref={titleRef}
          className={`relative z-10 text-center mb-16 transition-all duration-700 transform ${
            isTitleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-pink-900/60 to-purple-900/60 backdrop-blur-lg py-2 px-6 rounded-full inline-flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-pink-300" />
                <span className="text-white font-medium">BÔNUS INCRIVEIS PARA QUEM AGIR RÁPIDO</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            07 BÔNUS INCRIVEIS PARA QUEM COMPRAR A SUPER OFERTA HOJE!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((bonus, index) => (
            <BonusCard
              key={index}
              title={bonus.title}
              originalValue={bonus.originalValue}
              description={bonus.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;