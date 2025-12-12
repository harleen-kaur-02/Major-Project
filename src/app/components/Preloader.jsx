"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const percentageRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (preloaderRef.current) {
              preloaderRef.current.style.display = 'none';
            }
            onComplete();
          },
        });
      },
    });

    // Initial name animation
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 30, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }
    );

    // Progress bar animation
    tl.to(
      progressBarRef.current,
      {
        width: '100%',
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          if (percentageRef.current) {
            const progress = Math.round(this.progress() * 100);
            percentageRef.current.textContent = `${progress}%`;
          }
        },
      },
      '-=0.4'
    );

    // Percentage fade out
    tl.to(percentageRef.current, {
      opacity: 0,
      y: -10,
      duration: 0.3,
      ease: 'power2.in',
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={preloaderRef}
      className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Atmospheric background effects */}
      <div className="absolute inset-0 atmospheric-light opacity-50" />
      
      {/* Floating orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-purple/10 blur-[100px] floating-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-neon-pink/10 blur-[80px] floating-orb-delayed" />

      {/* Name */}
      <h1
        ref={nameRef}
        className="font-display text-6xl md:text-8xl font-bold gradient-text text-glow-purple mb-12 tracking-wider"
      >
        Genai IDS
      </h1>

      {/* Progress container */}
      <div className="w-64 md:w-80">
        {/* Progress bar background */}
        <div className="relative h-1 bg-muted/30 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <div
            ref={progressBarRef}
            className="absolute left-0 top-0 h-full w-0 rounded-full progress-bar-glow"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--neon-purple)), hsl(var(--neon-pink)), hsl(var(--neon-blue)))',
            }}
          />
        </div>

        {/* Percentage */}
        <div className="flex justify-center mt-4">
          <span
            ref={percentageRef}
            className="font-display text-sm text-muted-foreground tracking-widest"
          >
            0%
          </span>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30" />
    </div>
  );
};

export default Preloader;