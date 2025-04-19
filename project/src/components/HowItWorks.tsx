import React, { useRef } from 'react';
import { Mail, Printer, Infinity } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 delay-${delay} transform ${
        isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 h-full group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition duration-300 blur"></div>
        <div className="relative flex flex-col items-center text-center">
          <div className="p-3 bg-indigo-500/20 rounded-full mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300">{title}</h3>
          <p className="text-indigo-200 group-hover:text-indigo-100 transition-colors duration-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Veja como é fácil usar nosso material adaptado!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step 
            icon={<Mail className="w-6 h-6 text-indigo-300" />} 
            title="Chega no e-mail e Whatsapp" 
            description="Após a confirmação da compra, você recebe os arquivos separados e organizados tanto no seu Whatsapp como no e-mail!"
            delay={100}
          />
          <Step 
            icon={<Printer className="w-6 h-6 text-indigo-300" />} 
            title="Receba o arquivo em PDF e imprima!" 
            description="O material está totalmente organizado apenas para você imprimir e aplicar com a sua criança!"
            delay={300}
          />
          <Step 
            icon={<Infinity className="w-6 h-6 text-indigo-300" />} 
            title="Acesso ilimitado" 
            description="Utilize quantas vezes quiser o material, imprima para toda a sua família, seu acesso é vitalício!"
            delay={500}
          />
        </div>

        <div className={`mt-16 p-8 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Kit Educacional Matemática Inclusiva
          </h3>
          <p className="text-indigo-200 text-center max-w-3xl mx-auto">
            O Kit Autismo matemática inclusiva surgiu com o objetivo de facilitar a integração escolar da criança, 
            muitos pais e professores tem dificuldade em achar atividades adaptadas, pensando nisso desenvolvemos 
            esse incrível material com 200 páginas de atividades de matemática para crianças autistas.
          </p>
          <p className="text-indigo-200 text-center max-w-3xl mx-auto mt-4">
            Mas o material pode ser utilizado em outras síndromes, transtornos e deficiência como: 
            Síndrome de Down, TDAH, Dislexia e Dificuldade de aprendizagem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;