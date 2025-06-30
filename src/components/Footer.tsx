
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          scroller: '[data-scroll-container]'
        }
      }
    );
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="relative py-16 px-6 border-t border-gray-800/50"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Carlos Eduardo
              </span>
            </h3>
            <p className="text-gray-400">
              Criando experiências digitais com paixão e precisão.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <GithubLogo size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <LinkedinLogo size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              <TwitterLogo size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
