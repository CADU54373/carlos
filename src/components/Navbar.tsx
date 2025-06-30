
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { List, X } from 'phosphor-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3.5, ease: 'power2.out' }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isOpen) {
      setIsOpen(false);
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 right-0 z-50 p-6 bg-gray-900/95 backdrop-blur-md border-b border-gray-800/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              CE
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { name: 'Início', href: '#home' },
              { name: 'Sobre', href: '#about' },
              { name: 'Projetos', href: '#projects' },
              { name: 'Contato', href: '#contact' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 h-full w-full bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-lg z-40 transform translate-x-full md:hidden">
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { name: 'Início', href: '#home' },
            { name: 'Sobre', href: '#about' },
            { name: 'Projetos', href: '#projects' },
            { name: 'Contato', href: '#contact' }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-2xl text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
