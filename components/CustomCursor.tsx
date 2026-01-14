import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnterInteractive = () => setIsHovered(true);
    const onMouseLeaveInteractive = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);

    const refreshListeners = () => {
      const elements = document.querySelectorAll('a, button, .interactive');
      elements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive);
        el.addEventListener('mouseleave', onMouseLeaveInteractive);
      });
      return elements;
    };

    const interactiveElements = refreshListeners();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 hidden lg:block"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className={`rounded-full border border-primary/40 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
          isHovered ? 'w-16 h-16 border-primary bg-primary/5 scale-110' : 'w-8 h-8 scale-100'
        }`}
      >
        <div className={`w-1 h-1 bg-primary rounded-full transition-transform duration-300 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
      </div>
    </div>
  );
};

export default CustomCursor;