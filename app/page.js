"use client"; // This is a client component 👈🏽

import Image from 'next/image'
import { HomeBanner } from './components/home/initial-section/HomeBanner'

import { useState } from "react";

export default function Home() {
  return (
    <main className="main-position">
      <HomeBanner title='Albert Toll' subtitle='3D Artist' description='Lorem ipsum dolor sit amet consectetur. Quis eu semper imperdiet mi. Quis in convallis mi augue lorem id. Pellentesque sit fermentum eget non interdum feugiat nisl congue. Sed interdum tortor consequat nullam non fermentum mauris.' />
    </main>
  )
}
