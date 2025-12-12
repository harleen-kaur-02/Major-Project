"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const FloatingOrbs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const orbs = containerRef.current?.querySelectorAll('.orb');
    
    orbs?.forEach((orb, index) => {
      // Random initial position offset
      gsap.set(orb, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      });

      // Parallax floating animation
      gsap.to(orb, {
        y: `+=${Math.random() * 60 + 30}`,
        x: `+=${Math.random() * 40 - 20}`,
        duration: 4 + index * 1.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Subtle scale breathing
      gsap.to(orb, {
        scale: 1.1 + Math.random() * 0.2,
        duration: 3 + index,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large purple orb - top left */}
      <div 
        className="orb absolute top-[10%] left-[15%] w-80 h-80 rounded-full opacity-40"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.4) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Medium pink orb - right side */}
      <div 
        className="orb absolute top-[30%] right-[10%] w-64 h-64 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-pink) / 0.5) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Blue orb - bottom left */}
      <div 
        className="orb absolute bottom-[20%] left-[20%] w-56 h-56 rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-blue) / 0.4) 0%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />
      
      {/* Small cyan orb - center */}
      <div 
        className="orb absolute top-[50%] left-[50%] w-40 h-40 rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-cyan) / 0.5) 0%, transparent 70%)',
          filter: 'blur(35px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Extra small accent orbs */}
      <div 
        className="orb absolute top-[70%] right-[30%] w-32 h-32 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.6) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      
      <div 
        className="orb absolute top-[15%] right-[40%] w-24 h-24 rounded-full opacity-35"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon-pink) / 0.5) 0%, transparent 70%)',
          filter: 'blur(25px)',
        }}
      />
    </div>
  );
};

export default FloatingOrbs;