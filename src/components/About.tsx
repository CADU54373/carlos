
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Database, Robot, TrendUp } from 'phosphor-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    
    gsap.fromTo(section,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          scroller: '[data-scroll-container]'
        }
      }
    );

    gsap.fromTo(imageRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          scroller: '[data-scroll-container]'
        }
      }
    );

    gsap.fromTo(contentRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          scroller: '[data-scroll-container]'
        }
      }
    );

    gsap.fromTo(skillsRef.current?.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          scroller: '[data-scroll-container]'
        }
      }
    );
  }, []);

  const skills = [
    { icon: Code, name: 'Python & Java', color: 'from-blue-400 to-cyan-400' },
    { icon: Database, name: 'Banco de Dados', color: 'from-purple-400 to-pink-400' },
    { icon: Robot, name: 'Power Platform', color: 'from-green-400 to-teal-400' },
    { icon: TrendUp, name: 'Power BI', color: 'from-yellow-400 to-orange-400' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div ref={imageRef} className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-cyan-400/20 hover:shadow-cyan-400/40 transition-all duration-500 hover:scale-105 hover:rotate-3">
                <img
                  src="/lovable-uploads/178cf8d5-5f7e-4370-a099-f33e0f311ea5.png"
                  alt="Carlos Eduardo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mim
              </span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Olá! Meu nome é Carlos Eduardo, tenho 21 anos e sou estudante de Ciência da Computação. 
                Tenho paixão por tecnologia e estou sempre buscando aprender e evoluir como desenvolvedor.
              </p>
              
              <p>
                Ao longo da minha jornada, desenvolvi habilidades sólidas em Python, Java, Banco de Dados e plataformas 
                low-code como Power Apps e Power Automate, além de conhecimentos em análise de dados com Power BI.
              </p>

              <p>
                Gosto de resolver problemas com código, automatizar processos e transformar ideias em soluções funcionais. 
                Estou aberto a novas oportunidades e desafios que me permitam crescer profissionalmente e contribuir com projetos inovadores.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
