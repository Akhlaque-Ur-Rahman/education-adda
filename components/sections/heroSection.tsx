'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MoveRight } from 'lucide-react';
import Link from 'next/link';
import { heroSlides } from "@/data/heroSection";


const heroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return ( 
    <section className="hero-slider-container w-full h-screen overflow-hidden"> 
      <div className="slider-wrapper h-full flex items-center justify-center"> 
        <div className="slide-content-container max-w-7xl  px-4 sm:px-6  w-full"> 
          <div className="slide-flex-container flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-[80vh] gap-8 lg:gap-16"> 
            
            {/* Left Content Container */} 
            <div className="content-left-container flex flex-col items-center lg:items-start justify-center space-y-6 text-center lg:text-left lg:w-1/2"> 
              <h1 className="text-4xl lg:text-5xl font-bold text-[#FF0000] mb-4"> 
                {heroSlides[0].title} 
              </h1> 
              <h2 className="text-2xl lg:text-3xl text-[#192839] mb-4"> 
                {heroSlides[0].subtitle} 
              </h2> 
              <p className="text-lg text-[#40566D] mb-6 max-w-md"> 
                {heroSlides[0].description} 
              </p> 
              <div className="cta-container flex flex-col sm:flex-row items-center gap-4"> 
                <Link 
                  href="/loginSignup" 
                  className="cta-button bg-red-600 text-white flex items-center text-[14px] font-semibold px-4 py-2 text-sm xl:px-[20px] xl:py-[8.5px] rounded-[15px] gap-[5px] hover:bg-red-700 transition-colors duration-300" 
                > 
                  {heroSlides[0].ctaText} 
                  <MoveRight className='text-white' size={16} /> 
                </Link> 
                <button className='text-[#FF0000] hover:text-red-600 transition-colors duration-300'> 
                  {heroSlides[0].secondaryText} 
                </button> 
              </div> 
            </div> 


            {/* Right Image Container */} 
            <div className="image-right-container relative flex flex-col items-center justify-center space-y-4 lg:w-1/2"> 
              {/* Geometric Pattern Background */}
              <div 
                className="absolute inset-0 bg-contain bg-no-repeat bg-center opacity-10" 
                style={{backgroundImage: `url('/svg/geometric-patter-1.svg')`}}
              />
              
              {/* Person Image with Enhanced Styling */}
              <div className="relative z-10 flex flex-col items-center"> 
                <div className="image-wrapper w-64 h-64 lg:w-80 lg:h-80  overflow-hidden relative"> 
                  <img 
                    src={heroSlides[0].personImage} 
                    alt="mentor" 
                    className="w-full h-full object-cover" 
                  /> 
                  {/* Person Name Overlay */}
                  <div className="absolute bottom-0  right-0 ">
                    <p className="text-red-500 font- text-lg text-center py-3"> 
                      {heroSlides[0].personName} 
                    </p> 
                  </div>
                </div> 
               </div> 
            </div> 


          </div> 
        </div> 
      </div> 
    </section>
  )
}

export default heroSection
