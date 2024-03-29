import React from "react";
import Link from 'next/link';
import { changaOne } from '@/app/utils/ThemeContext';

export default function StickyTitle({ title, subtitle, color, extraClass }) {
    return (
        <div className={`fixed right-0 text-end mt-2 top-28 mr-10 pr-df text-${color} ${extraClass}`}>
            <Link href="/">
                <p className={`text-5xl uppercase leading-0.8 ${changaOne.className}`}>
                    {title}
                </p>
            </Link>
            <Link href="/">
                <p className={`text-3xl uppercase leading-0.8 ${changaOne.className}`}>
                    {subtitle}
                </p>
            </Link>
        </div>
    );
}
