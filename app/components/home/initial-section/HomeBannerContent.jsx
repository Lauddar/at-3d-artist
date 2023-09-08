import { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";
import { Changa_One, Righteous } from 'next/font/google';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });

export function HomeBannerContent({ title, subtitle, description }) {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    let scrollValue = 800;

    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY;
            setScrollY(newScrollY);
            setIsVisible(newScrollY < scrollValue);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calcScale = (y) => {
        if (y >= 850) {
            return 0.36;
        } else {
            return 1 - (y / 850) * (1 - 0.36);
        }
    };

    const { scale } = useSpring({
        scale: calcScale(scrollY),
        config: { tension: 500, friction: 50 },
    });

    const scaleValue = scale.to((s) => `scale(${s})`);

    return (
        <section className={`pt-80 h-130 ${isVisible ? "visible" : "hidden"}`}>
            <animated.div className="sticky mt-2 top-28 mr-10 text-white text-right scroll-element"
                style={{
                    transform: scaleValue,
                    transformOrigin: 'top right',
                }}>
                <p className="mr-0 ml-auto w-[540px] text-lg">{description}</p>
                <h1 className={`text-9xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                <h2 className={`text-7xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
            </animated.div>
        </section>
    );
}