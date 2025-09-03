import React from 'react'
import Image from 'next/image'
import { whyChooseUsData } from '@/data/whyChooseUsData'

const WhyChooseUs = () => {
  const objectFitMap = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
} as const

  return (
    <section className="p-[60px] bg-[#F5EDED] w-full flex  items-center">
      <div className="cta-container flex flex-col lg:flex-row lg:items-center  w-full lg:h-[380px] relative 2xl:px-[60px] ">
         {/* Decorative Triangles */}
        <Image
          src="/svg/triangle-right.svg"
          alt=""
          width={40}
          height={40}
          className="absolute top-1 left-1/2 -translate-y-1/2 z-10 -rotate-[45deg] lg:hidden block"
          unoptimized
        />
        <Image
          src="/svg/triangle-right.svg"
          alt=""
          width={40}
          height={40}
          className="absolute top-3/4 left-1 -translate-x-1/2 z-10 lg:hidden block"
          unoptimized
        />

        {/* Left Card */}
        <div
          className="left-card bg-[#FF0000] text-white flex flex-col justify-center p-6 lg:rounded-tr-[40px] lg:rounded-bl-[40px] xl:flex-shrink-0 h-full w-full lg:max-w-[550px]"
          
        >
          <h2
            className="leading-snug"
            style={{ fontSize: "clamp(24px, 5vw, 36px)" }}
          >
            <span className="font-bold">500+</span> Hours of Live & Recorded
            Classes
            <br />
            Learn with <span className="text-[#D8FDB4]">Top mentors</span> of{" "}
            <span className="font-bold">Education Adda</span>
          </h2>

          <div className="btn-container border-t-2 border-white mt-6 pt-6">
            <button className="rounded-[15px] px-6 py-3 bg-white text-[#FF0000] font-semibold">
              Explore Courses
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="photo-container relative w-full lg:flex-1 lg:w-[400px] 
     h-[250px] sm:h-[300px] md:h-[380px] lg:h-[380px] xl:h-[380px]
     border-[#ff0000] border-[10px] flex justify-center "
     style={{ borderColor: whyChooseUsData.borderColor }} >
  <Image
    src="/images/fauxels.jpg"
    alt="whyChooseUs"
    fill
    sizes="(max-width: 768px) 100vw, 
            (max-width: 1200px) 50vw, 
            50vw"
    className={`${objectFitMap[whyChooseUsData.image.fit]} object-center`}

    priority
  />
</div>

      </div>
    </section>
  )
}

export default WhyChooseUs