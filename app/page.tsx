import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/heroSection'
import ShowCase from '@/components/sections/showCase'
import WhyChooseUs from '@/components/sections/whyChooseUs'


import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#F5EDED]'>
      <div className='flex flex-col bg-gradient-to-b from-[#F1F1F1] to-[#FFF0F0]'>
      <Navbar />
      <HeroSection/>
      </div>
      <WhyChooseUs/>
      <ShowCase/>
      
    </div>
  )
}

export default Home
