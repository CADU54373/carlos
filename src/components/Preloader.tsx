import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate logo
    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    );

    // Animate progress bar
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2,
      ease: 'power2.out',
    }, '-=0.5');

    // Hide preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.5,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = 'none';
        }
      }
    });
  }, []);

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center"
    >
      <div className="text-center">
        <div
          ref={logoRef}
          className="text-6xl font-bold text-white mb-8 relative"
        >
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Milad
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent blur-sm opacity-50">
            Milad
          </div>
        </div>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full w-0 shadow-lg shadow-cyan-400/50"
          />
        </div>
        
        <p className="text-gray-300 mt-4 text-sm">Carregando experiência...</p>
      </div>
    </div>
  );
};

export default Preloader;
