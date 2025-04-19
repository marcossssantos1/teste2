import React, { useRef } from 'react';
import { Shield, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Guarantee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-indigo-950 to-purple-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className={`bg-white/5 backdrop-blur-lg rounded-xl p-8 md:p-12 border border-white/10 transition-all duration-700 transform ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-10 flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 animate-pulse"></div>
                <div className="relative bg-indigo-600/30 p-6 rounded-full">
                  <Shield className="w-20 h-20 text-indigo-300" />
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 text-center md:text-left">
                O Tarefinha de casa é o único produto do BRASIL a te dar uma garantia incondicional de 15 DIAS após a compra.
              </h2>
              
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <p className="text-indigo-100">RESPEITAMOS O SEU DINHEIRO E SUA CONFIANÇA!</p>
                </div>
                <div className="flex items-center mb-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <p className="text-indigo-100">Confiamos tanto no nosso material, que damos 15 dias de garantia incondicional.</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                  <p className="text-indigo-100">Se por algum motivo achar que o produto não é para você, basta cancelar a compra e devolveremos todo o valor pago por você, sem perguntas e sem burocracia!</p>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-xl font-semibold text-white">APROVEITE ENQUANTO O MATERIAL ESTÁ EM PROMOÇÃO!</p>
                <p className="text-lg font-bold text-pink-400">HOJE COM 90% DE DESCONTO!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;