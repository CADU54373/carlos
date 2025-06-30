
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orbs = containerRef.current?.querySelectorAll('.floating-orb');
    
    orbs?.forEach((orb, index) => {
      gsap.to(orb, {
        y: -20,
        duration: 3 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.2
      });
      
      gsap.to(orb, {
        x: Math.random() * 40 - 20,
        duration: 4 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.1
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Floating orbs */}
      <div className="floating-orb absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full blur-sm opacity-60"></div>
      <div className="floating-orb absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full blur-sm opacity-40"></div>
      <div className="floating-orb absolute bottom-1/4 left-1/3 w-1 h-1 bg-blue-400 rounded-full blur-sm opacity-80"></div>
      <div className="floating-orb absolute bottom-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full blur-sm opacity-50"></div>
      <div className="floating-orb absolute top-1/2 left-1/6 w-1 h-1 bg-teal-400 rounded-full blur-sm opacity-70"></div>
      <div className="floating-orb absolute top-2/3 right-1/6 w-2 h-2 bg-indigo-400 rounded-full blur-sm opacity-60"></div>
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-purple-900/10"></div>
    </div>
  );
};

export default FloatingElements;
