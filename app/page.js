"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";
import ScrollIndicator from './components/layout-utils/ScrollIndicator';
import StickyTitle from './components/StickyTitle';
import HomeBanner from './components/home/initial-section/HomeBannerLayout';
import WorkProcess from './components/home/work-process-section/WorkProcess';
import Carousel from './components/home/gallery-section/Carousel';
import ProjectDisplay from './components/home/gallery-section/ProjectDisplay';

// Importa el hook useTheme
import { useTheme } from './utils/ThemeContext';
import { addBodyClass } from './utils/utils';


// Configuración del sitio
const siteProps = {
  title: 'Albert Toll',
  subtitle: '3D Artist',
  description: 'Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.',
  email: 'contact@toll3dart.com',
  linkedin: 'tu-linkedin',
  instagram: 'tu-instagram'
};

const projects = [
  {
    id: "1",
    src: '/work5.png',
    title: 'Proyecto 1',
    description: 'Descripción de la imagen 1',
  },
  {
    id: "2",
    src: '/dibu2.jpg',
    title: 'Proyecto 2',
    description: 'Descripción de la imagen 2',
  },
  {
    id: "3",
    src: '/dibu5.jpg',
    title: 'Proyecto 3',
    description: 'Descripción de la imagen 3',
  },
  {
    id: "4",
    src: '/dibu1.jpg',
    title: 'Proyecto 4',
    description: 'Descripción de la imagen 4',
  },
  {
    id: "5",
    src: '/dibu7.jpg',
    title: 'Descripción de la imagen 1',
  },
  {
    id: "6",
    src: '/dibu8.jpg',
    title: 'Descripción de la imagen 2',
  },
  {
    id: "7",
    src: '/dibu4.jpg',
    title: 'Descripción de la imagen 1',
  },
  {
    id: "8",
    src: '/dibu3.jpg',
    title: 'Descripción de la imagen 2',
  },
  {
    id: "9",
    src: '/dibu6.jpg',
    title: 'Descripción de la imagen 1',
  },
  {
    id: "10",
    src: '/dibu10.jpg',
    title: 'Descripción de la imagen 2',
  },
  {
    id: "11",
    src: '/dibu9.jpg',
    title: 'Descripción de la imagen 1',
  },
  {
    id: "12",
    src: '/dibu12.jpg',
    title: 'Descripción de la imagen 2',
  },
];

export default function Home() {
  const { setNavigationColors } = useTheme();

  useEffect(() => {
      setNavigationColors({
          text: 'text-primary',
          border: 'border-primary'
      });

      addBodyClass('bg-gradient');
    }, []);

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

  const [selectedProjectId, setSelectedProjectId] = useState(1);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  return (
    <main>
      <HomeBanner {...siteProps} />
      <StickyTitle title={siteProps.title} subtitle={siteProps.subtitle} color="secondary" extraClass="-z-20 text-secondary" />
        <WorkProcess />
        <div id="projects" className="w-full pb-[3vh]">
          <ProjectDisplay projectId={selectedProjectId} projects={projects} />
          <div id="carousel" className={`mx-auto`}>
            <Carousel projects={projects} onProjectSelect={handleProjectSelect} />
          </div>
        </div>
      <ScrollIndicator color="#C1CF17" hideOnElementId="projects" />
    </main>
  );
}
