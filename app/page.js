"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import StickyTitle from './components/StickyTitle';
import HomeBanner from './components/home/initial-section/HomeBannerLayout';
import WorkProcess from './components/home/work-process-section/WorkProcess';
import Carousel from './components/home/gallery-section/Carousel';
import ProjectDisplay from './components/home/gallery-section/ProjectDisplay';


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
    id: "1",
    src: '/dibu10.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "2",
    src: '/dibu2.jpg',
    caption: 'Descripción de la imagen 2',
  },
  {
    id: "3",
    src: '/dibu5.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "4",
    src: '/dibu1.jpg',
    caption: 'Descripción de la imagen 2',
  },
  {
    id: "5",
    src: '/dibu7.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "6",
    src: '/dibu8.jpg',
    caption: 'Descripción de la imagen 2',
  },
  {
    id: "7",
    src: '/dibu4.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "8",
    src: '/dibu3.jpg',
    caption: 'Descripción de la imagen 2',
  },
  {
    id: "9",
    src: '/dibu6.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "10",
    src: '/dibu10.jpg',
    caption: 'Descripción de la imagen 2',
  },
  {
    id: "11",
    src: '/dibu9.jpg',
    caption: 'Descripción de la imagen 1',
  },
  {
    id: "12",
    src: '/dibu12.jpg',
    caption: 'Descripción de la imagen 2',
  },
];

export default function Home() {
  const [selectedImageId, setSelectedImageId] = useState(null); // Estado para almacenar el ID de la imagen seleccionada

  // Manejador de eventos para la selección de imagen en el Carousel
  const handleImageSelect = (imageId) => {
    setSelectedImageId(imageId);
  };

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
      {/* <HomeBanner {...siteProps} /> 
      <StickyTitle title={siteProps.title} subtitle={siteProps.subtitle} color="secondary" extraClass="-z-20 text-secondary" />
      <WorkProcess />*/}
      <div style={{ height: '350px' }}></div>
      {selectedImageId && <ProjectDisplay imageId={selectedImageId} />}
      <div className="container mx-auto">
        <Carousel images={images} onImageSelect={handleImageSelect} />
      </div>
    </main>
  );
}
