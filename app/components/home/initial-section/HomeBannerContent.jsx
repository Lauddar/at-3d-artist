import { useEffect, useState } from 'react';
import { useSpring, animated } from "react-spring";
import { Changa_One } from 'next/font/google';

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });

export function HomeBannerContent({ title, subtitle, description }) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const calcScale = (y) => {
        return 1 - y * 0.001;
    };

    const { scale } = useSpring({
        scale: calcScale(scrollY),
        config: { tension: 120, friction: 14 },
    });

    const scaleValue = scale.interpolate((s) => `scale(${s})`);

    console.log(scaleValue)

    return (
        <section className="pt-80 h-130">
            <div className="sticky mt-2 top-28 mr-10 text-blue-900 text-right scroll-element"
                style={{
                    transform: scaleValue,
                }}>
                <p className="mr-0 ml-auto w-[540px] text-lg">{description}</p>
                <h1 className={`text-9xl uppercase leading-0.8 ${changaOne.className}`}>{title}</h1>
                <h2 className={`text-7xl uppercase leading-0.8 ${changaOne.className}`}>{subtitle}</h2>
            </div>
        </section>
    );
}