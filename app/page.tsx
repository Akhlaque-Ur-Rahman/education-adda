import Navbar from '@/components/layout/Navbar'
import HeroSection from '@/components/sections/heroSection'

import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='flex flex-col gap-6 max-h-[520px] items-center justify-center'>
      <Navbar />
      <HeroSection/>
      </div>
     
    </div>
  )
}

export default Home
