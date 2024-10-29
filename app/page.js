import About from '@/components/About'
import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Products from '@/components/Products'
import React from 'react'

const Page = () => {
  return (
    <>
      <Navbar classNames={"glassmorphism"} />
      <Hero />
      <About />
      <Products />
      <Banner />
    </>
  )
}

export default Page