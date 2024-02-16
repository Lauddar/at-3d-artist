import React from "react";
import { Changa_One } from 'next/font/google'

const changaOne = Changa_One({ subsets: ['latin'], weight: '400' });

export default function StickyTitle({ title, subtitle, color, extraClass }) {
    return (
        <div className={`fixed right-0 text-end mt-2 top-28 mr-10 pr-df text-${color} ${extraClass}`}>
            <p className={`text-5xl uppercase leading-0.8 ${changaOne.className}`}>
                {title}
            </p>
            <p className={`text-3xl uppercase leading-0.8 ${changaOne.className}`}>
                {subtitle}
            </p>
        </div>
    );
}
