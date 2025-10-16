// CustomCursor.js
import React, { useEffect, useRef } from 'react';
import '../componentscss/CustomCursor.css';

const CustomCursor = () => {
  const bigBall = useRef(null);
  const smallBall = useRef(null);
  const posX = useRef(0);
  const posY = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const scale = useRef(1);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      // Calculate position with easing
      posX.current += (mouseX.current - posX.current - 15) * 0.15;
      posY.current += (mouseY.current - posY.current - 15) * 0.15;
      
      // Apply transform with scale
      if (bigBall.current) {
        bigBall.current.style.transform = `
          translate(${posX.current}px, ${posY.current}px)
          scale(${scale.current})
        `;
      }

      // Small ball follows directly
      if (smallBall.current) {
        smallBall.current.style.transform = `
          translate(${mouseX.current - 5}px, ${mouseY.current - 5}px)
        `;
      }

      requestAnimationFrame(animate);
    };

    const checkHover = () => {
      const hoverElement = document.elementFromPoint(mouseX.current, mouseY.current);
      const isHovering = hoverElement?.closest('[data-hoverable]');
      
      scale.current = isHovering ? 1.5 : 1;
      
      if (bigBall.current) {
        bigBall.current.classList.toggle('hover-active', isHovering);
      }
    };

    document.addEventListener('mousemove', (e) => {
      onMouseMove(e);
      checkHover();
    });

    document.addEventListener('scroll', checkHover);
    
    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('scroll', checkHover);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={bigBall} className="cursor-ball cursor-ball--big" />
      <div ref={smallBall} className="cursor-ball cursor-ball--small" />
    </>
  );
};

export default CustomCursor;
