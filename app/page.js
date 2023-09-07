"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import { HomeBanner } from './components/home/initial-section/HomeBannerLayout'
import { StickyTitle } from './components/StickyTitle'

export default function Home() {
  const siteProps = {
    title: 'Albert Toll',
    subtitle: '3D Artist',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.'
  }

  useEffect(() => {
    // Función para manejar el evento de scroll
    function handleScroll() {
      console.log(window.scrollY);
    }

    // Agregar el evento de desplazamiento al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Eliminar el evento de desplazamiento al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="main-position">
      <HomeBanner {...siteProps} />
      <StickyTitle {...siteProps} />
    </main >
  )
}
