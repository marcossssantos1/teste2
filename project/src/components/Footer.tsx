import React from 'react';
import { Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-950/80 backdrop-blur-lg border-t border-white/10 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <div className="space-y-2">
            
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-300 mr-2" />
                <a href="mailto:suportetarefinhakids@gmail.com" className="text-indigo-200 hover:text-white transition-colors duration-300">
                  suporteteto@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a 
                href="#facebook" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-indigo-200" />
              </a>
              <a 
                href="#instagram" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-indigo-200" />
              </a>
              <a 
                href="#whatsapp" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300"
                aria-label="Whatsapp"
              >
                <MessageCircle className="w-5 h-5 text-indigo-200" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Pagamento Seguro</h3>
            <div className="bg-white/10 p-3 rounded-lg inline-block">
              <p className="text-indigo-200">Compra 100% segura e garantida</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-indigo-300 text-sm">
            2025 | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;