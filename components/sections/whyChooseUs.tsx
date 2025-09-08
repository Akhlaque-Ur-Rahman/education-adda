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
    <section className="why-choose-us  bg-[#F5EDED] w-full flex flex-col items-center justify-center xl:px-[60px]">
      <div className="cta-container  flex flex-col lg:flex-row lg:items-center  w-full lg:h-[380px] relative lg:px-[60px] ">
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
          className="left-card bg-[#FF0000] text-white flex lg:flex-col flex-row justify-between lg:justify-center p-6 lg:rounded-tr-[40px] lg:rounded-bl-[40px] xl:flex-shrink-0 h-full w-full lg:max-w-[550px] gap-9"
          
        >
          <h2
            className="leading-snug"
            style={{ fontSize: "clamp(24px, 5vw, 36px)" }}
          >
            <span className="font-bold">500+</span> Hours of Live & Recorded
            Classes
            <br />
            Learn with <span className="text-[#D8FDB4]">Top mentors of <span className="font-bold">Education Adda</span></span> 
            
          </h2>

          <div className="btn-container lg:border-t-2 border-white pt-6 self-center w-full">
            <button className="rounded-[6px] lg:rounded-[16px] px-2.5 py-1.5  lg:px-[30px] lg:py-[20px] bg-white text-[#FF0000] font-semibold text-nowrap" 
            style={{
                      fontSize: "clamp(12px, 1.8vw, 14px)",
                      // padding: "clamp(10px, 1vw, 6px) lg:clamp(10px, 2vw, 14px)",
                    }}
            >
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
      <div className="featured-headline-container py-2 2xl:px-[60px] lg:py-[32px] w-full gap-[10px] flex flex-col">
        <h2 className='text-[#192839] text-[56px] leading-tight text-left' style={{ fontSize: "clamp(32px, 6vw, 56px)" }}>
          {whyChooseUsData.headlineBlock.headline}
        </h2>
        <div className="featured-container py-1 lg:py-[10px] flex  xl:flex-row xl:items-center gap-[15px] w-full">
          <div className="subtitle-text-container pr-[15px] xl:border-r-2 xl:border-[#40566D]">
            <p className='text-[#40566D]'>{whyChooseUsData.headlineBlock.subText}</p>
          </div>
          {whyChooseUsData.features.map((feature, index) => (
            <h3 key={index} className="text-[#192839] font-semibold hidden  xl:flex ">
              {feature}
            </h3>
          ))}
        </div>
      </div>

    </section>
  )
}

export default WhyChooseUs