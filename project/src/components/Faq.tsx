import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-${index * 100} transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden mb-4">
        <button
          className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
          onClick={onClick}
        >
          <span className="text-lg font-medium text-white">{question}</span>
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-indigo-300 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-indigo-300 flex-shrink-0" />
          )}
        </button>
        
        <div
          className={`px-6 transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
          }`}
        >
          <p className="text-indigo-200">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Qual a idade indicada?",
      answer: "O material é indicado para crianças autistas em fase de aprendizado, geralmente entre 3 e 12 anos. As atividades são adaptáveis para diferentes níveis de desenvolvimento, permitindo que você escolha as mais adequadas para a sua criança."
    },
    {
      question: "E se eu não gostar?",
      answer: "Oferecemos garantia incondicional de 15 dias. Se por qualquer motivo você não estiver satisfeito com o material, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem perguntas e sem burocracia."
    },
    {
      question: "O produto chega na minha casa?",
      answer: "Não, o produto é digital. Após a confirmação da compra, você receberá o material completo em PDF no seu e-mail e WhatsApp cadastrados. Você pode imprimir as atividades quantas vezes quiser."
    },
    {
      question: "Quais as formas de Pagamento?",
      answer: "Aceitamos cartão de crédito, boleto bancário e PIX. Todas as transações são processadas em ambiente seguro para garantir a proteção dos seus dados."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Dúvidas Frequentes
          </h2>
        </div>

        <div>
          {faqItems.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;