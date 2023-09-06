import React, { useEffect, useState } from "react";
import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export function StickyTitle({ title, subtitle }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Función para manejar el evento de scroll
        function handleScroll() {
            // Obtener la posición actual de desplazamiento vertical
            const scrollY = window.scrollY;

            // Verificar si el scroll ha pasado el 100%
            if (scrollY >= window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`text-end text-secondary mr-16 ${isVisible ? "opacity-0" : "opacity-100"
                }`}
        >
            <h1 className={`text-5xl uppercase leading-0.8 ${changaOne.className}`}>
                {title}
            </h1>
            <h2 className={`text-3xl uppercase leading-0.8 ${changaOne.className}`}>
                {subtitle}
            </h2>
        </div>
    );
}