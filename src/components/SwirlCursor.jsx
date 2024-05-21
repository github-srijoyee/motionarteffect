// src/SwirlCursor.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const SwirlCursor = () => {
  useEffect(() => {
    const cursorTrailCount = 10;
    const cursorTrails = [];

    for (let i = 0; i < cursorTrailCount; i++) {
      const div = document.createElement('div');
      div.className = 'cursor-trail';
      document.body.appendChild(div);
      cursorTrails.push(div);
    }

    gsap.set(cursorTrails, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e) => {
      cursorTrails.forEach((trail, index) => {
        const delay = index * 0.05;
        gsap.to(trail, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.5,
          delay: delay,
          ease: 'power3.out',
        });
      });
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursorTrails.forEach((trail) => {
        document.body.removeChild(trail);
      });
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default SwirlCursor;

