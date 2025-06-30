import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
      title: 'Sistema Power Apps',
      description: 'Aplicação desenvolvida com Power Apps para automatização de processos empresariais e gestão de dados.',
      image: '/lovable-uploads/2da575b5-d8ec-470b-b44e-669c03646b71.png',
      tags: ['Power Apps', 'Power Automate', 'SharePoint']
    },
    {
      id: 2,
      title: 'Portfólio Pessoal',
      description: 'Portfólio moderno e interativo desenvolvido com HTML, CSS e TypeScript.',
      image: '/lovable-uploads/eacf245c-893d-40d9-9de2-6cd5098b3ded.png',
      tags: ['HTML', 'CSS']
    },
    {
      id: 3,
      title: 'Dashboard Power BI',
      description: 'Dashboard analítico integrado com banco de dados para visualização de KPIs e relatórios gerenciais.',
      image: '/lovable-uploads/e1f66a01-b4a3-49a8-aa07-8db1de81959e.png',
      tags: ['Power BI', 'SQL Server', 'ETL']
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
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                    >
                      {tag}
                    </span>
                  ))}
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
