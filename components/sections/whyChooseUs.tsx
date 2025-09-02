import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="p-[60px] bg-[#F5EDED] w-full flex justify-center items-center">
      <div className="cta-container flex flex-col lg:flex-row items-center xl:justify-center  h-auto lg:h-[380px] relative lg:px-[60px] max-w-[2500px]">
        <img
          src="/svg/triangle-right.svg"
          alt=""
          className="absolute top-1 left-1/2 -translate-y-1/2 size-10 -rotate-[45deg] lg:hidden block"
        />
        <img
          src="/svg/triangle-right.svg"
          alt=""
          className="absolute top-3/4 left-1 -translate-x-1/2 size-10 z-10 lg:hidden block"
        />

        {/* Left Card */}
        <div className="left-card bg-[#FF0000] w-full xl:w-fit xl:gap-[20px] p-6 text-white lg:rounded-tr-[40px] lg:rounded-bl-[40px] h-full flex flex-col justify-center xl:py-[32px] xl:px-[16px]">
          <h2
            className=""
            style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}
          >
            <span className='font-bold'>500+</span> Hours of Live & Recorded Classes
            
            Learn with <span className='text-[#D8FDB4]'></span>Top mentors of 
            <span className="font-bold"> Education Adda</span>
          </h2>
          <div className="btn-container w-full flex items-center border-t-2 border-white ">
            <button className="rounded-[15px] px-4 xl:px-[30px] py-2.5 xl:py-[20px] text-[#FF0000] bg-white font-semibold mt-9">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="photo-container relative w-full h-[250px] sm:h-[300px] md:h-[400px]  lg:h-full border-[#ff0000] border-[10px] flex justify-center">
          <Image
            src="/images/scenary.jpg"
            alt="whyChooseUs"
            fill
            sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            50vw"
            className="object-cover bg-center "
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
