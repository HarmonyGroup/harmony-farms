import Hero from '@/components/about/Hero'
import Mission from '@/components/about/Mission'
import Process from '@/components/about/Process'
import Quality from '@/components/about/Quality'
import Stats from '@/components/about/Stats'
import Navbar from '@/components/Navbar'
import React from 'react'

const AboutPage = () => {
  return (
    <>
        <Navbar classNames={"glassmorphism"} />
        <Hero />
        <Stats />
        <Mission />
        <Quality />
        <Process />
    </>
  )
}

export default AboutPage