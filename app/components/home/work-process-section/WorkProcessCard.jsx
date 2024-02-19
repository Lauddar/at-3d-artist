import React, { useRef, useEffect, useState } from 'react';

export function WorkProcessCard({ id, left, rotation, bgImage, size }) {
  const cardRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [animationStartY, setAnimationStartY] = useState(0);
  const index = id; // Supongamos que 'id' es el índice de la tarjeta

  let className = size === 'large' ? 'process-card-lg' : 'process-card';


  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cardRect = cardRef.current.getBoundingClientRect();
    let desiredStartY;

    if (size === 'large') {
      // Calcula desiredStartY para tamaño 'large'
      desiredStartY = (1 - (1 / 100)) * window.innerHeight; // Ajusta el porcentaje según el tamaño 'large'
    } else {
      // Calcula desiredStartY para otros tamaños
      desiredStartY = (1 - (7.6 / 100)) * window.innerHeight;
    }

    if (cardRect.top <= desiredStartY) {
      setAnimationStartY(0);
    } else {
      setAnimationStartY(cardRect.bottom - desiredStartY);
    }
  }, []);
  
  let translateY = scrollY >= animationStartY ? -(scrollY - animationStartY) * 0.1 : 0;
  let translateX = scrollY >= animationStartY ? -(scrollY - animationStartY) * 0.05 : 0;

  const cardStyle = {
    left: left || 0,
    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation || 0}deg)`,
    background: `url(${bgImage}) center center / cover no-repeat`,
  };

  return (
    <article className={className} style={cardStyle} ref={cardRef}>
    </article>
  );
}
