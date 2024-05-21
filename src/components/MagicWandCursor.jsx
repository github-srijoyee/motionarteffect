import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MagicWandCursor.css'; // Create this CSS file for styling

const MagicWandCursor = () => {
  const cursorRef = useRef(null);
  const sparkleRef = useRef([]);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power3.out',
      });

      sparkleRef.current.forEach((sparkle, index) => {
        gsap.to(sparkle, {
          x: e.clientX + Math.random() * 50 - 25,
          y: e.clientY + Math.random() * 50 - 25,
          opacity: Math.random(),
          scale: Math.random() + 0.5,
          backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
          duration: 0.3,
          delay: index * 0.02,
          ease: 'power1.out',
        });
      });
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className="magic-wand-cursor">
        <div className="sparkle-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (sparkleRef.current[i] = el)}
              className="sparkle"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicWandCursor;

