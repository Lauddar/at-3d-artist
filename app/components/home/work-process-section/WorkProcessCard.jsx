import React, { useRef, useEffect, useState } from 'react';

export function WorkProcessCard({ id, left, rotation, bgImage }) {
  const cardRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [animationStartY, setAnimationStartY] = useState(0);

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
    const desiredStartY = (1-(7.6/100)) * window.innerHeight;

    if (cardRect.top <= desiredStartY) {
      setAnimationStartY(0);
    } else {
      setAnimationStartY(cardRect.bottom - desiredStartY);
    }
  }, []);

  const translateY = scrollY >= animationStartY ? -(scrollY - animationStartY) * 0.1 : 0;
  const translateX = scrollY >= animationStartY ? -(scrollY - animationStartY) * 0.1 : 0;

  const cardStyle = {
    left: left || 0,
    transform: `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotation || 0}deg)`,
    background: `url(${bgImage}) center center / cover no-repeat`,
  };

  return (
    <article className="process-card" style={cardStyle} ref={cardRef}>
    </article>
  );
}
