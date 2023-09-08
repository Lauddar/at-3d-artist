import React, { useEffect, useState } from "react";
import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' })

export default function StickyTitle({ title, subtitle }) {
    const [isVisible, setIsVisible] = useState(false);
    let scrollValue = 750;

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;

            if (scrollY >= scrollValue) {
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
        <div className={`fixed text-end text-secondary mt-2 top-28 mr-10 d-right -z-20 ${isVisible ? "visible" : "hidden"}`}>
            <h1 className={`text-5xl uppercase leading-0.8 ${changaOne.className}`}>
                {title}
            </h1>
            <h2 className={`text-3xl uppercase leading-0.8 ${changaOne.className}`}>
                {subtitle}
            </h2>
        </div>
    );
}