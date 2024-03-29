"use client"
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme, changaOne } from '@/app/utils/ThemeContext';
import StickyTitle from "./StickyTitle";

function ContactCard({ email, linkedin, instagram }) {
    return (
        <div className="contact-item absolute bg-secondary text-white shadow-md contact-card -z-1 normal-case">
            <div className="text-end ">
                <StickyTitle title='Albert Toll' subtitle='3D Artist' color='white' />
            </div>
            <ul className="mt-[32%] leading-8 inline-block">
                <li className="contact-data relative">
                    <div className="hv-triangular-div absolute -z-1"></div>
                    <a className='pl-8' href={`mailto:${email}`}>
                        <span className={`${changaOne.className}`}>Email:</span> {email}
                    </a>
                </li>
                <li className="contact-data relative">
                    <div className="hv-triangular-div absolute -z-1"></div>
                    <a className='pl-8 inline-block' href={linkedin}>
                        <span className={`${changaOne.className}`}>LinkedIn:</span> {linkedin}
                    </a>
                </li>
                <li className="contact-data relative">
                    <div className="hv-triangular-div absolute -z-1"></div>
                    <a className='pl-8 inline-block' href={instagram}>
                        <span className={`${changaOne.className}`}>Instagram:</span> {instagram}
                    </a>
                </li>
            </ul>
            <div className="triangular-div ml-auto"></div>
        </div >
    );
};

const links = [
    { label: 'Projects', route: '/#projects' },
    { label: 'Reel', route: '/' },
    { label: 'Bio', route: '/bio' },
    { label: 'Contact', route: '/' },
  ];

  export default function Navigation() {
    const { navigationColors } = useTheme();
  
    return (
      <nav className="nav-height flex justify-center uppercase w-full md:text-xl">
        <ul className={`menu w-full flex gap-24 ${navigationColors.text} items-center border-b ${navigationColors.border}`}>
          {links.map(({ label, route }) => (
            <li key={label} className={`h-full flex items-center relative cursor-pointer ${label === 'Contact' ? 'contact-item' : ''}`}>
              {label === 'Contact' ? (
                <>
                  <div className="contact-label">
                    {label}
                  </div>
                  <ContactCard email="contact@toll3dartist.com" linkedin="albert-toll" instagram="toll3dart" />
                </>
              ) : (
                <Link href={route} key={label}>
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    );
  };