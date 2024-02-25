import React, { useState, useEffect } from 'react';
import { ReactComponent as ArrowSvg } from './arrow.svg'; // Asegúrate de tener el archivo SVG y la ruta correcta

const WorkInProgressComponent = () => {
  const [arrowPosition, setArrowPosition] = useState(0);

  useEffect(() => {
    // Animación simple: Mueve la flecha hacia arriba y abajo
    const intervalId = setInterval(() => {
      setArrowPosition((prevPosition) => (prevPosition === 0 ? 1 : 0));
    }, 1000); // Cambia la velocidad ajustando el valor del intervalo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '20px', // Puedes ajustar la posición según tus necesidades
        left: '50%', // Centra el componente horizontalmente
        transform: 'translateX(-50%)', // Centra el componente horizontalmente
        textAlign: 'center',
        color: '#ffffff', // Color del texto
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <p>Work in Progress</p>
      <ArrowSvg
        style={{
          transform: `translateY(${arrowPosition === 0 ? '0' : '-10px'})`, // Mueve la flecha hacia arriba y abajo
          transition: 'transform 0.5s ease-in-out', // Agrega una transición suave
        }}
      />
    </div>
  );
};

export default WorkInProgressComponent;
