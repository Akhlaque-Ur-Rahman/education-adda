import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="p-[60px] bg-[#F5EDED]">
      <div className="cta-container flex flex-col lg:flex-row items-center h-auto lg:h-[500px] relative">
        <img
          src="/svg/triangle-right.svg"
          alt=""
          className="absolute top-1 left-1/2 -translate-y-1/2 size-10 -rotate-[45deg] lg:hidden block"
        />
        <img
          src="/svg/triangle-right.svg"
          alt=""
          className="absolute top-3/4 left-1 -translate-x-1/2 size-10 z-10"
        />

        {/* Left Card */}
        <div className="left-card bg-[#FF0000] w-full lg:w-1/2 p-6 text-white lg:rounded-tr-[40px] lg:rounded-bl-[40px] h-full flex flex-col justify-center">
          <h2
            className="leading-tight"
            style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}
          >
            500+ Hours of Live & Recorded Classes
            <br />
            Learn with Top mentors of{" "}
            <span className="font-bold">Education Adda</span>
          </h2>
          <div className="btn-container w-full flex items-center border-t-2 border-white">
            <button className="rounded-[15px] px-4 xl:px-[30px] py-2.5 xl:py-[20px] text-[#FF0000] bg-white font-semibold mt-9">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="photo-container relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full border-[#ff0000] border-[10px]">
          <Image
            src="/images/transparent-bg.png"
            alt="whyChooseUs"
            fill
            sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
