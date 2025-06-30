
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const projects = projectsRef.current?.querySelectorAll('.project-card');
    if (projects) {
      gsap.fromTo(projects, {
        opacity: 0,
        y: 100
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          scroller: '[data-scroll-container]'
        }
      });
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Sistema Power Apps',
      description: 'Plataforma completa para gerenciamento de logística e inventário com integração de dados em tempo real.',
      image: '/lovable-uploads/c59b72a6-0b1f-49b3-b9ea-db82fccb44c5.png',
      tags: ['Power Apps', 'Power Automate', 'SharePoint'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Portfólio Pessoal',
      description: 'Portfólio moderno e interativo desenvolvido com React, TypeScript e animações GSAP.',
      image: '/lovable-uploads/e5630019-88af-478c-9a4d-2165ae4351aa.png',
      tags: ['React', 'TypeScript', 'GSAP'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Dashboard Power BI',
      description: 'Dashboard interativo para análise de dados com visualizações avançadas e métricas de performance.',
      image: '/lovable-uploads/817cfd1e-98c1-4c98-bf0b-da666774604b.png',
      tags: ['Power BI', 'DAX', 'SQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="min-h-screen py-20 px-6" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, explorando diferentes tecnologias e soluções criativas.
          </p>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-cyan-500 transition-colors"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-8 h-8 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700/50"
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
