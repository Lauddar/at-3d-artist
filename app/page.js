"use client"; // This is a client component 👈🏽

import { useEffect } from "react";
import StickyTitle from './components/StickyTitle'
import HomeBanner from './components/home/initial-section/HomeBannerLayout'
import WorkProcess from './components/home/work-process-section/WorkProcess'


export default function Home() {
  const siteProps = {
    title: 'Albert Toll',
    subtitle: '3D Artist',
    description: 'Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.'
  }

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
    </main >
  )
}
