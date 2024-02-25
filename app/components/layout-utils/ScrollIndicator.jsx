import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function ScrollIndicator({ color, hideOnElementId  }) {
    const [arrowPosition, setArrowPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const hideElement = document.getElementById(hideOnElementId);
    
            if (hideElement) {
                const element = hideElement.getBoundingClientRect();
                const isInViewport = element.top >= 0 && element.bottom <= window.innerHeight;
                setIsVisible(!isInViewport);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hideOnElementId]);

    const visibilityAnimation = useSpring({
        opacity: isVisible ? 1 : 0,
    });

    const arrowAnimation = useSpring({
        transform: `translateY(${arrowPosition}px)`,
        loop: { reverse: true },
        config: {
            tension: 120,
            friction: 10,
        },
    });

    useEffect(() => {
        const updateArrowPosition = () => {
            setArrowPosition((prevPosition) => (prevPosition === 2 ? 0 : 2));
        };

        const intervalId = setInterval(updateArrowPosition, 500);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="fixed bottom-[3vw] right-[4vw] flex items-center" style={{ color: `${color}`, visibilityAnimation }}>
            <p className="text-2xl mr-2">Scroll</p>
            <animated.div className="h-8 w-8 flex items-center" style={{ ...arrowAnimation }}>
                <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 37.54">
                    <defs>
                        <style>
                            {`.cls-1 {
  fill: ${color};
  stroke-width: 0;
}`}
                        </style>
                    </defs>
                    <rect
                        className="cls-1"
                        x="16.03"
                        y="-5.03"
                        width="5.49"
                        height="47.6"
                        transform="translate(-7.78 18.77) rotate(-45)"
                    />
                    <rect
                        className="cls-1"
                        x="39.49"
                        y="10.2"
                        width="31.12"
                        height="5.49"
                        transform="translate(6.97 42.72) rotate(-45)"
                    />
                </svg>
            </animated.div>
        </div>
    );
}
