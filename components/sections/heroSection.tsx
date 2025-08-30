"use client";
import React, { useState } from "react";
import { MoveRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { heroSlides } from "@/data/heroSection";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Next function (loops forward)
  const showNextSlide = () => {
    setCurrentIndex((index) =>
      index === heroSlides.length - 1 ? 0 : index + 1
    );
  };

  // ✅ Prev function (loops backward)
  const showPrevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? heroSlides.length - 1 : index - 1
    );
  };

  return (
    <section className="relative w-full h-full overflow-hidden ">
      {/* Slides wrapper */}
      <div
        className="flex w-full h-full items-center  transition-transform duration-700 ease-in-out "
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {heroSlides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col justify-center lg:flex-row w-full flex-shrink-0 px-4 sm:px-8 lg:px-32 py-8 sm:py-10 lg:py-32 lg:items-center h-full "
          >
            {/* Left content */}
            <div className="flex flex-col items-center lg:items-start justify-center gap-1 lg:space-y-6 text-center lg:text-left w-full lg:w-1/2 h-1/2">
              <h1 className="font-bold text-[#FF0000] text-[clamp(1.5rem,4vw,3rem)]">
                {slide.title}
              </h1>
              <h2 className="text-[#192839] text-[clamp(1rem,2.5vw,2rem)]">
                {slide.subtitle}
              </h2>
              <p className="text-[#40566D] max-w-md text-[clamp(0.85rem,2vw,1.125rem)]">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
                <Link
                  href="/loginSignup"
                  className="bg-red-600 text-white flex items-center font-semibold px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 rounded-[15px] gap-2 hover:bg-red-700 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]"
                >
                  {slide.ctaText}
                  <MoveRight className="text-white" size={16} />
                </Link>
                <button className="text-[#FF0000] hover:text-red-600 transition-colors duration-300 text-[clamp(0.85rem,2vw,1rem)]">
                  {slide.secondaryText}
                </button>
              </div>
            </div>

            {/* Right content (Image + Product card + SVG) */}
            <div className="relative h-1/3 flex-1  lg:h-full  lg:w-1/2 mt-6 lg:mt-0 ">
              {/* SVG Background */}
              <img
                src="/svg/geometric-patter-1.svg"
                alt="Background pattern"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Person + Product Card */}
              <div className="flex justify-center items-end h-full w-full overflow-hidden lg:overflow-visible">
                {/* Person Image */}
                <img
                  src={slide.personImage}
                  alt={slide.personName}
                  className="relative z-10  lg:h-8/10 md:h-full xl:h-9/10 sm:h-full h-9/10 object-contain -left-1/7 lg:-left-1/3"
                />

                {/* Product Card (always half of image width) */}
                <div className="absolute top-1/2 left-1/2 flex justify-center items-center h-full w-full -translate-x-1/2 -translate-y-1/2 z-0 ">
                  <div className="bg-gray-700 flex flex-col items-center justify-between rounded-md overflow-hidden shadow-lg h-4/7 w-1/6 sm:h-3/5 sm:w-1/6  md:w-1/6 lg:w-1/3 lg:h-3/5 ">
                    <div className="px-2 sm:px-3 py-1.5 sm:py-2 shrink-0 grow-0">
                      <h1 className="text-white font-bold text-center text-[clamp(0.6rem,1.4vw,1.1rem)]">
                        {slide.personProdText}
                      </h1>
                      <p className="text-white text-[clamp(0.4rem,.95vw,0.85rem)]">
                        POWERS{" "}
                        <span className="font-medium">{slide.personPower}</span>
                      </p>
                    </div>
                    <div className="bg-[url('/svg/image-placeholder.svg')] bg-center bg-no-repeat bg-cover flex-1 w-full h-full">
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={showPrevSlide}
        className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      </button>
      <button
        onClick={showNextSlide}
        className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-3 p-1 sm:p-2 bg-white/70 rounded-full hover:bg-white transition"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
      </button>
    </section>
  );
};

export default HeroSection;
