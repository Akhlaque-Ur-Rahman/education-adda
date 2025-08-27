import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/heroSection'

import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col h-screen'>
      <Navbar />
      <HeroSection/>
      </div>
     
    </div>
  )
}

export default Home
