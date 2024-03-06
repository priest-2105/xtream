import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MovableElements = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const throttledMouseMoveHandler = (e) => {
      // Throttle logic or use a library like lodash.throttle
      const movableElements = wrapperRef.current.querySelectorAll('.movable');
      movableElements.forEach((element) => {
        const shiftValue = parseInt(element.getAttribute('data-value'), 10);
        const moveX = (e.clientX * shiftValue) / 250;
        const moveY = (e.clientY * shiftValue) / 250;
        
        gsap.to(element, { x: moveX, y: moveY, duration: 1 });
      });
    };

    const wrapper = wrapperRef.current;
    wrapper.addEventListener('mousemove', throttledMouseMoveHandler);

    return () => {
      wrapper.removeEventListener('mousemove', throttledMouseMoveHandler);
    };
  }, []);

  return (
    <div className="movable-elements-wrapper" ref={wrapperRef}>
      <div id="box" data-value="-3" className="one element movable"></div>
      <div data-value="-7" className="two element movable"></div>
      <div data-value="2" className="three element movable"></div>
    </div>
  );
};

export default MovableElements;
