import React from 'react';
import { GreenBackground } from '../components/layout-utils/layout-utils';

export default function Bio() {
    return (
        <>
            <GreenBackground />
            <main className="m-df p-main">
                <div className="p-8 text-white">
                    <h1>¡Esta es una página de biografía!</h1>
                    <p>Bienvenido a la página de biografía de mi aplicación Next.js.</p>
                </div>
            </main >
        </>
    );
};