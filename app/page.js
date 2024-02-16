"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import StickyTitle from './components/StickyTitle';
import HomeBanner from './components/home/initial-section/HomeBannerLayout';
import WorkProcess from './components/home/work-process-section/WorkProcess';
import Carousel from './components/home/gallery-section/Carousel';

// Configuración del sitio
const siteProps = {
  title: 'Albert Toll',
  subtitle: '3D Artist',
  description: 'Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.',
  email: 'contact@toll3dart.com',
  linkedin: 'tu-linkedin',
  instagram: 'tu-instagram'
};

const images = [
  {
    src: '/dibu10.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    src: '/dibu2.jpg',
    caption: 'Descripción de la imagen 2',
  },
  // Resto de las imágenes
];

export default function Home() {
  // Efecto secundario para el scroll
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lógica de visibilidad del StickyTitle
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
    <main>
      <HomeBanner {...siteProps} />
      <StickyTitle title={siteProps.title} subtitle={siteProps.subtitle} color="secondary" extraClass="-z-20 text-secondary" />
      <WorkProcess />
      <div className="container mx-auto">
        <Carousel images={images} />
      </div>
    </main>
  );
}
