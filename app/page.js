"use client"; // This is a client component 👈🏽
import { useEffect } from "react";
import StickyTitle from './components/StickyTitle'
import HomeBanner from './components/home/initial-section/HomeBannerLayout'
import WorkProcess from './components/home/work-process-section/WorkProcess'
import Carousel from './components/home/gallery-section/Carousel';


export default function Home() {
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
    {
      src: '/dibu7.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu12.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu3.jpg',
      caption: 'Descripción de la imagen 1',
    },
    {
      src: '/dibu11.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu8.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu13.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu6.jpg',
      caption: 'Descripción de la imagen 2',
    },
    {
      src: '/dibu4.jpg',
      caption: 'Descripción de la imagen 2',
    }
  ];

  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="main-position">
      <HomeBanner {...siteProps} />
      <StickyTitle {...siteProps} />
      <WorkProcess />
      <div className="container mx-auto">
        <Carousel images={images} />
      </div>
    </main >
  )
}


