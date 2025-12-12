"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const SplineBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ opacity: 0 }}
    >
      {/* Spline Iframe */}
      <iframe
        src="https://my.spline.design/orb-XpZ9UBCVC4Xmof5gjx0kCWq5/"
        frameBorder="0"
        width="100%"
        height="100%"
        title="3D Background"
        className="pointer-events-auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* BLACK fade overlay to hide Spline's white fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "300px",
          background: "linear-gradient(to bottom, transparent 0%, black 100%)",
          zIndex: 99,
        }}
      />
    </div>
  );
};

export default SplineBackground;
