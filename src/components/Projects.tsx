import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    
    if (cards) {
      gsap.fromTo(cards,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            scroller: '[data-scroll-container]'
          }
        }
      );
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Site Portfólio 3D',
      description: 'Portfólio interativo 3D com animações impressionantes e transições suaves.',
      image: '/lovable-uploads/29f0f772-8041-43e9-9366-70250f7b6cdd.png',
      tags: ['React', 'Three.js', 'GSAP'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Site de Jogos',
      description: 'Plataforma de jogos moderna com interface imersiva e conteúdo dinâmico.',
      image: '/lovable-uploads/50b2a633-74bf-4388-9e8c-064c1a227ff1.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Ferramentas de Animação',
      description: 'Ferramentas de animação web com pré-visualização em tempo real e controles interativos.',
      image: '/lovable-uploads/fce13963-48f8-4661-ae0e-e0bdc272b0a8.png',
      tags: ['React', 'GSAP', 'Canvas'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Portfólio Desenvolvedor',
      description: 'Portfólio limpo e moderno com animações suaves e design responsivo.',
      image: '/lovable-uploads/940a9794-11e2-41b2-9f01-a702d96f9e03.png',
      tags: ['React', 'Next.js', 'Framer Motion'],
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'App Web Interativo',
      description: 'Aplicação web rica em recursos com interface moderna e interações perfeitas.',
      image: '/lovable-uploads/e6b5afd9-6400-426d-84de-176b77d1b470.png',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Interface de Jogos 3D',
      description: 'Interface de jogos de próximo nível com elementos 3D e efeitos visuais impressionantes.',
      image: '/lovable-uploads/e550fa8a-5895-4ca4-a2fa-be497e6f0272.png',
      tags: ['React', 'Three.js', 'WebGL'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descubra alguns dos meus trabalhos recentes e projetos criativos que mostram minhas habilidades e paixão pelo desenvolvimento web.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowUpRight size={16} />
                    Ver Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <GithubLogo size={16} />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
