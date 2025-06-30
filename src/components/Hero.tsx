
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 4 });

    // Animate headline
    tl.fromTo(headlineRef.current,
      { opacity: 0, y: 50, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    );

    // Animate subtitle
    tl.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.5'
    );

    // Animate CTA
    tl.fromTo(ctaRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
      '-=0.3'
    );

    // Animate Spline
    tl.fromTo(splineRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' },
      '-=0.8'
    );

    // CTA hover animation
    const cta = ctaRef.current;
    if (cta) {
      cta.addEventListener('mouseenter', () => {
        gsap.to(cta, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
      });
      
      cta.addEventListener('mouseleave', () => {
        gsap.to(cta, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    }
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Spline */}
      <div 
        ref={splineRef}
        className="absolute inset-0 w-full h-full"
      >
        <iframe
          src="https://my.spline.design/orb-hVbyMHGOontNme78WclfgSEd/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-blue-900/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          ref={headlineRef}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Milad
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-light text-gray-300 mt-2">
            Web Developer
          </h2>
        </div>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Crafting digital experiences that inspire and engage through innovative design and cutting-edge technology.
        </p>

        <button
          ref={ctaRef}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/50 transition-all duration-300"
        >
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Hero;
